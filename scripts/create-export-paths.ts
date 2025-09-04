import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import PATHS from '../config/paths.js';

const TARGET_PACKAGES = ['ai', 'charts', 'compat', 'main'] as const;
const INTERNAL_COMPONENTS = new Set(['ObjectPageAnchorBar', 'Splitter']);

interface ExportEntry {
  types: string;
  default: string;
}

interface ExportsObject {
  [key: string]: ExportEntry;
}

function getComponentExports(distDir: string, componentDir: string): ExportsObject {
  const dir = path.join(distDir, componentDir);
  if (!fs.existsSync(dir)) return {};

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const exportsObj: ExportsObject = {};

  entries.forEach((entry) => {
    if (entry.isDirectory()) {
      if (INTERNAL_COMPONENTS.has(entry.name)) {
        return;
      }

      const jsPath = path.join(dir, entry.name, 'index.js');
      const dtsPath = path.join(dir, entry.name, 'index.d.ts');

      if (fs.existsSync(jsPath) && fs.existsSync(dtsPath)) {
        exportsObj[`./${entry.name}`] = {
          types: `./dist/${componentDir}/${entry.name}/index.d.ts`,
          default: `./dist/${componentDir}/${entry.name}/index.js`,
        };
      }

      // charts export "Placeholder" components
      if (dir.includes('/charts')) {
        const placeholderJs = path.join(dir, entry.name, 'Placeholder.js');
        if (fs.existsSync(placeholderJs)) {
          exportsObj[`./${entry.name}Placeholder`] = {
            types: `./dist/${componentDir}/${entry.name}/Placeholder.d.ts`,
            default: `./dist/${componentDir}/${entry.name}/Placeholder.js`,
          };
        }
      }
    }
  });

  return exportsObj;
}

/**
 * Update the package.json of a given package
 */
function updatePackageJson(pkgPath: string): void {
  const packageJsonPath = path.join(pkgPath, 'package.json');
  const distDir = path.join(pkgPath, 'dist');

  if (!fs.existsSync(packageJsonPath)) {
    console.warn(`⚠️  No package.json found in ${pkgPath}`);
    return;
  }

  const packageJson: Record<string, any> = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
  packageJson.exports = packageJson.exports || {};

  // collect exports from "components" and "webComponents"
  const componentExports = getComponentExports(distDir, 'components');
  const webComponentExports = getComponentExports(distDir, 'webComponents');

  const newExports: ExportsObject = {
    ...componentExports,
    ...webComponentExports,
  };

  packageJson.exports = { ...packageJson.exports, ...newExports };

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  execSync(`npx prettier --write "${packageJsonPath}"`, { stdio: 'inherit' });
  console.log(`✅ Updated exports in ${packageJsonPath}`);
}

console.log('ℹ️  Make sure all packages are built before running this script!');
TARGET_PACKAGES.forEach((pkg) => {
  const pkgPath = PATHS[pkg as keyof typeof PATHS];
  updatePackageJson(pkgPath);
});
