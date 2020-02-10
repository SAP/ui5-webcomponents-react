'use strict';

const ncp = require('ncp').ncp;
const path = require('path');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
const exec = require('child_process').exec;
const targz = require('targz');

function asyncCopyTo(from, to) {
  return asyncMkDirP(path.dirname(to)).then(
    () =>
      new Promise((resolve, reject) => {
        ncp(from, to, (error) => {
          if (error) {
            // Wrap to have a useful stack trace.
            reject(new Error(error));
            return;
          }
          resolve();
        });
      })
  );
}

function asyncExecuteCommand(command) {
  return new Promise((resolve, reject) =>
    exec(command, (error, stdout) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(stdout);
    })
  );
}

function asyncExtractTar(options) {
  return new Promise((resolve, reject) =>
    targz.decompress(options, (error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve();
    })
  );
}

function asyncMkDirP(filepath) {
  return mkdirp(filepath);
}

function asyncRimRaf(filepath) {
  return new Promise((resolve, reject) =>
    rimraf(filepath, (error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve();
    })
  );
}

function resolvePath(filepath) {
  if (filepath[0] === '~') {
    return path.join(process.env.HOME, filepath.slice(1));
  } else {
    return path.resolve(filepath);
  }
}

function highlightLog(projectName) {
  const width = 100;
  console.log('');
  console.log('#'.repeat(width));
  let whitespacesPerSide = (width - 6 - projectName.length) / 2;
  whitespacesPerSide = Math.max(whitespacesPerSide, 1);
  console.log(
    `###${' '.repeat(Math.ceil(whitespacesPerSide))}${projectName}${' '.repeat(Math.floor(whitespacesPerSide))}###`
  );
  console.log('#'.repeat(width));
  console.log('');
}

module.exports = {
  asyncCopyTo,
  resolvePath,
  asyncExecuteCommand,
  asyncExtractTar,
  asyncMkDirP,
  asyncRimRaf,
  highlightLog
};
