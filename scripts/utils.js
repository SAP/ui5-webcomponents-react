'use strict';

import ncp from 'ncp';
import path from 'path';
import mkdirp from 'mkdirp';
import rimraf from 'rimraf';
import { exec } from 'child_process';
import targz from 'targz';

export function asyncCopyTo(from, to) {
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

export function asyncExecuteCommand(command) {
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

export function asyncExtractTar(options) {
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

export function asyncMkDirP(filepath) {
  return mkdirp(filepath);
}

export function asyncRimRaf(filepath) {
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

export function resolvePath(filepath) {
  if (filepath[0] === '~') {
    return path.join(process.env.HOME, filepath.slice(1));
  } else {
    return path.resolve(filepath);
  }
}

export function highlightLog(projectName) {
  const width = 100;
  console.log('');
  console.log('#'.repeat(width));
  let whitespacesPerSide = (width - 6 - projectName.length) / 2;
  whitespacesPerSide = Math.max(whitespacesPerSide, 1);
  console.log(
    `###${' '.repeat(Math.ceil(whitespacesPerSide))}${projectName}${' '.repeat(
      Math.floor(whitespacesPerSide)
    )}###`
  );
  console.log('#'.repeat(width));
  console.log('');
}
