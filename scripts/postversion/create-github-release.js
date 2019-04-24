const { version } = require('../../lerna');
const https = require('https');
const moment = require('moment');
const { getFileAsString } = require('../shared/fileAccess');

const CHANGELOG_REGEX = /##([.\s\w\d\(\)\-\r\n:*`\[\]#/@,]*?)\n\n\n/gi;

let changelog = getFileAsString('CHANGELOG.md');
const changelogForVersion = changelog.match(CHANGELOG_REGEX)[0];

const payload = JSON.stringify({
  tag_name: `v${version}`,
  name: `v${version} (${moment().format('YYYY-MM-DD')})`,
  body: changelogForVersion
});

const clientRequest = https.request(
  'https://api.github.com/repos/SAP/fiori-for-react/releases',
  {
    method: 'POST',
    headers: {
      Authorization: `token ${process.env.GITHUB_AUTH}`,
      'Content-Length': Buffer.byteLength(payload),
      'Content-Type': 'application/json'
    },
    rejectUnauthorized: false
  },
  (res) => {
    if (res.statusCode === 201) {
      console.log(`GitHub Release 'v${version}' created successfully`);
    }
  }
);
clientRequest.write(payload);
clientRequest.end();
