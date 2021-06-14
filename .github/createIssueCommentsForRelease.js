import issueCommenter from '@semantic-release/github/lib/success.js';

const commitShaRegExp = /commit\/(?<sha>\w{40})/gm;

export default async function run({ github, context, version }) {
  const { data: release } = await github.repos.getReleaseByTag({
    owner: context.repo.owner,
    repo: context.repo.repo,
    tag: `v${version}`
  });
  release.url = release.html_url;

  // find commits of this release
  const commits = [];
  let result;
  do {
    result = commitShaRegExp.exec(release.body);
    if (result && result.groups && result.groups.sha) {
      commits.push({ hash: result.groups.sha });
    }
  } while (result);

  const semanticReleaseContext = {
    options: {
      repositoryUrl: `https://github.com/${context.repo.owner}/${context.repo.repo}`
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
}
