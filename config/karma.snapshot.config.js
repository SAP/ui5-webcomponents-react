const path = require('path');

function snapshotPathResolver(browserName, basePath, suiteName) {
  const snapshotFileName = suiteName.replace(/[^a-z]/gi, '');
  return path.join(
    basePath,
    '__karma_snapshots__',
    // browserName,
    `${snapshotFileName}.md`
  );
}

module.exports = {
  browserNoActivityTimeout: 20000,
  frameworks: ['snapshot', 'mocha-snapshot'],
  files: ['__karma_snapshots__/**/*.md'],
  preprocessors: {
    '__karma_snapshots__/**/*.md': ['snapshot']
  },
  snapshot: {
    update: !!process.env.UPDATE,
    prune: true,
    // format: 'indented-md',
    pathResolver: snapshotPathResolver.bind(null, 'ChromeHeadless')
  }
};
