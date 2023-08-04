import { success as issueCommenter } from '@semantic-release/github';
import { readFileSync } from 'node:fs';

const commitShaRegExp = /commit\/(?<sha>\w{40})/gm;

/**
 *
 * @param options {object}
 * @param options.github {import("@octokit/rest/dist-types/index.d.ts").Octokit}
 * @param options.context
 * @returns {Promise<void>}
 */
export default async function run({ github, context }) {
  const { version } = JSON.parse(readFileSync(new URL('../lerna.json', import.meta.url)).toString());

  const { data: release } = await github.request('GET /repos/{owner}/{repo}/releases/tags/{tag}', {
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
    releases: [release], // current GitHub release
    logger: console,
    env: process.env
  };

  const Octokit = new Proxy(class {}, {
    construct(target, argArray, newTarget) {
      return github;
    }
  });

  await issueCommenter({}, semanticReleaseContext, { Octokit });
}
