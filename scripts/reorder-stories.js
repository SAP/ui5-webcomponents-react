/* eslint-disable @typescript-eslint/no-unsafe-return */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();
const STORIES_GLOB_EXT = '.stories.tsx';
const OUTPUT_DIR = process.env.STORYBOOK_OUTPUT_DIR || '.out-reorder';

// Fixed replacements
const MDX_META_REPLACEMENTS = {
  'docs/ReadMeAI.mdx': 'ui5-webcomponents-ai-react',
  'docs/ReadMeCharts.mdx': 'ui5-webcomponents-react-charts',
  'docs/ReadMeCompat.mdx': 'ui5-webcomponents-react-compat',
  'packages/main/src/components/AnalyticalTable/PluginAnnounceEmptyCells.mdx': 'ui5-webcomponents-react',
  'packages/main/src/components/AnalyticalTable/PluginDisableRowSelection.mdx': 'ui5-webcomponents-react',
  'packages/main/src/components/AnalyticalTable/PluginIndeterminateRowSelection.mdx': 'ui5-webcomponents-react',
  'packages/main/src/components/AnalyticalTable/PluginManualRowSelect.mdx': 'ui5-webcomponents-react',
  'packages/main/src/components/AnalyticalTable/PluginOnColumnResize.mdx': 'ui5-webcomponents-react',
  'packages/main/src/components/AnalyticalTable/PluginOrderedMultiSort.mdx': 'ui5-webcomponents-react',
  'packages/main/src/components/AnalyticalTable/Recipes.mdx': 'ui5-webcomponents-react',
};

function getStoryFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  let files = [];
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      files = files.concat(getStoryFiles(fullPath));
    } else if (file.endsWith(STORIES_GLOB_EXT)) {
      files.push(fullPath);
    }
  }
  return files;
}

// Extract package name from tags  (e.g.: ['package:@ui5/webcomponents'])
function getPackageName(content) {
  const match = content.match(/['"`]package:([^'"`]+)['"`]/);
  return match ? match[1] : null;
}

function resolveFirstSegment(packageName, titleParts) {
  const clean = packageName.replace(/^@ui5\//, 'ui5-');

  switch (packageName) {
    case '@ui5/webcomponents':
    case '@ui5/webcomponents-fiori': {
      return ['ui5-webcomponents-react', clean, ...titleParts].join(' / ');
    }
    default: {
      // replace first segment if multiple, else prepend
      if (titleParts.length > 1) {
        return [clean, ...titleParts.slice(1)].join(' / ');
      } else {
        return [clean, ...titleParts].join(' / ');
      }
    }
  }
}

// Replace first segment in Storybook `title:`
function adjustStoryTitle(content, packageName) {
  return content.replace(/title:\s*(['"`])([^'"`]+)\1/, (_, quote, title) => {
    const parts = title.split(' / ');
    const newTitle = resolveFirstSegment(packageName, parts);
    return `title: ${quote}${newTitle}${quote}`;
  });
}

// Adjust <Meta title="..."/>
function adjustMdxMetaTitle(content, newFirstSegment) {
  return content.replace(/<Meta\s+title\s*=\s*(['"`])([^'"`]+)\1\s*\/>/, (m, quote, title) => {
    const parts = title.split(' / ');
    const newTitle =
      parts.length > 1 ? [newFirstSegment, ...parts.slice(1)].join(' / ') : `${newFirstSegment} / ${title}`;
    return `<Meta title=${quote}${newTitle}${quote} />`;
  });
}

(() => {
  const storyFiles = getStoryFiles(ROOT_DIR);
  const mdxFiles = Object.keys(MDX_META_REPLACEMENTS)
    .map((rel) => path.join(ROOT_DIR, rel))
    .filter((p) => fs.existsSync(p));

  const allFiles = [...storyFiles, ...mdxFiles];

  if (!allFiles.length) {
    console.log('No story or MDX files found.');
    return;
  }

  // Backup originals
  const backups = allFiles.map((file) => ({
    file,
    content: fs.readFileSync(file, 'utf-8'),
  }));

  // Update stories
  storyFiles.forEach((file) => {
    const original = backups.find((b) => b.file === file).content;
    const packageName = getPackageName(original);
    if (!packageName) return; // skip if no package tag
    const updated = adjustStoryTitle(original, packageName);
    fs.writeFileSync(file, updated, 'utf-8');
  });

  // Update mdx
  mdxFiles.forEach((absPath) => {
    const original = backups.find((b) => b.file === absPath).content;
    const rel = path.relative(ROOT_DIR, absPath).replace(/\\/g, '/');
    const newFirstSegment = MDX_META_REPLACEMENTS[rel];
    const updated = adjustMdxMetaTitle(original, newFirstSegment);
    fs.writeFileSync(absPath, updated, 'utf-8');
  });

  // Build Sb
  execSync(`storybook build -o ${OUTPUT_DIR}`, {
    stdio: 'inherit',
    env: {
      ...process.env,
      STORYBOOK_REORDER: 'true',
    },
  });

  // Restore originals
  backups.forEach((b) => fs.writeFileSync(b.file, b.content, 'utf-8'));

  console.log(`Storybook built in '${OUTPUT_DIR}' and source files restored.`);
})();
