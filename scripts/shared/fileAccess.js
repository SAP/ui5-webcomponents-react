const fs = require('fs');

const getFileAsString = (path) => {
  return fs.readFileSync(`${process.cwd()}/${path}`).toString();
};

const writeFile = (path, content) => {
  fs.writeFileSync(`${process.cwd()}/${path}`, content);
};

module.exports = {
  getFileAsString,
  writeFile
};
