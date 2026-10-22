import { readFileSync } from 'node:fs';
import process from 'node:process';

const targetVersion = process.argv[2];
const match = /^(\d+)\.(\d+)\.(\d+)$/.exec(targetVersion ?? '');

if (!match) {
  console.error('Usage: node verify-peer-deps.mjs <major.minor.patch>');
  process.exit(1);
}

const [, major, minor] = match;
const upstreamRange = `~${targetVersion}`;
const reactWrapperRange = `~${major}.${minor}.0`;
const expected = {
  'packages/main/package.json': {
    '@ui5/webcomponents': upstreamRange,
    '@ui5/webcomponents-base': upstreamRange,
    '@ui5/webcomponents-fiori': upstreamRange,
    '@ui5/webcomponents-icons': upstreamRange,
  },
  'packages/base/package.json': {
    '@ui5/webcomponents-base': upstreamRange,
  },
  'packages/ai/package.json': {
    '@ui5/webcomponents-ai': upstreamRange,
  },
  'packages/compat/package.json': {
    '@ui5/webcomponents-compat': upstreamRange,
    '@ui5/webcomponents-react': reactWrapperRange,
  },
  'packages/cypress-commands/package.json': {
    '@ui5/webcomponents': upstreamRange,
    '@ui5/webcomponents-base': upstreamRange,
  },
  'packages/charts/package.json': {
    '@ui5/webcomponents-react': '^2.21.0',
    '@ui5/webcomponents-react-base': '^2.21.0',
  },
};

const errors = [];

for (const [file, expectedPeers] of Object.entries(expected)) {
  const manifest = JSON.parse(readFileSync(file, 'utf8'));
  const actualPeers = manifest.peerDependencies ?? {};

  for (const [name, expectedRange] of Object.entries(expectedPeers)) {
    if (actualPeers[name] !== expectedRange) {
      errors.push(`${file}: ${name} is ${actualPeers[name] ?? '<missing>'}; expected ${expectedRange}`);
    }
  }
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(
  `Peer dependencies match target ${targetVersion} (upstream ${upstreamRange}, React wrapper ${reactWrapperRange}).`,
);
