// removing dynamic class names as well as code coverage instrumentation added by
// istanbul-instrumenter-loader
module.exports = {
  test(value) {
    return /class(?:Name)?="(.*[0-9]+)?"/.test(value) || /cov_.*?\+\+;/g.test(value);
  },

  print(value) {
    return value
      .replace(/(class(?:Name)?)="(.*?)"/g, (a, b, c) => `${b}="${c.replace(/\d/g, '')}"`)
      .replace(/(activeClass)="(.*?)"/g, (a, b, c) => `${b}="${c.replace(/\d/g, '')}"`)
      .replace(/cov_.*?\+\+;/g, '');
  }
};
