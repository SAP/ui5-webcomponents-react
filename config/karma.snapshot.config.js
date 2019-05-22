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
  frameworks: ['snapshot', 'mocha-snapshot'],
  files: ['__karma_snapshots__/*.md'],
  preprocessors: {
    '__karma_snapshots__/*.md': ['snapshot']
  },
  snapshot: {
    update: !!process.env.UPDATE,
    prune: !!process.env.PRUNE,
    // format: 'indented-md',
    pathResolver: snapshotPathResolver.bind(null, 'ChromeHeadless')
  }
};
