import { diffWordsWithSpace } from 'diff';

const colors = {
  'diff added': 32,
  'diff removed': 31
};

function color(type, str) {
  return '\u001b[' + colors[type] + 'm' + str + '\u001b[0m';
}

function pad(str, len) {
  str = String(str);
  return Array(len - str.length + 1).join(' ') + str;
}

function colorLines(name, str) {
  return str
    .split('\n')
    .map(function(str) {
      return color(name, str);
    })
    .join('\n');
}

function errorDiff(actual, expected) {
  return diffWordsWithSpace(actual, expected)
    .map(function(str) {
      if (str.added) {
        return colorLines('diff added', str.value);
      }
      if (str.removed) {
        return colorLines('diff removed', str.value);
      }
      return str.value;
    })
    .join('');
}

export function generateDiff(expected, actual) {
  let msg = errorDiff(actual, expected);

  // linenos
  const lines = msg.split('\n');
  if (lines.length > 4) {
    const width = String(lines.length).length;
    msg = lines
      .map(function(str, i) {
        return pad(++i, width) + ' |' + ' ' + str;
      })
      .join('\n');
  }

  // legend
  msg = '\n' + color('diff removed', 'New') + ' ' + color('diff added', 'Existing Wrapper') + '\n\n' + msg + '\n';

  // indent
  msg = msg.replace(/^/gm, '      ');
  return msg;
}
