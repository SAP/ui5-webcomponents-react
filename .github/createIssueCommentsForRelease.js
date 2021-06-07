const issueCommenter = require('@semantic-release/github/lib/success');

const commitShaRegExp = /commit\/(?<sha>\w{40})/gm;

module.exports = async function run({ github, context, version }) {
  const { data: release } = await github.repos.getReleaseByTag({
    owner: context.repo.owner,
    repo: context.repo.repo,
    tag: `v${version}`
  });

  // find commits of this release
  const commits = [];
  let result;
  do {
    result = commitShaRegExp.exec(release.body);
    if (result?.groups?.sha) {
      commits.push({ hash: result?.groups?.sha });
    }
  } while (result);

  const semanticReleaseContext = {
    options: {
      repositoryUrl: 'https://github.com/SAP/ui5-webcomponents-react'
    },
    commits,
    nextRelease: {
      version: `v${version}` // new release version
    },
    releases: [release], // current github release
    logger: console,
    env: process.env
  };

  await issueCommenter({}, semanticReleaseContext);
};
