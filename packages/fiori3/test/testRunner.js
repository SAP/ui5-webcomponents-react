/* global __karma__ */
const { configure } = require('enzyme');
import { addSerializer } from 'chai-karma-snapshot';
import snapshotSerializer from './snapshot-serializer';

const Adapter = require('enzyme-adapter-react-16');

// configure enzyme
configure({ adapter: new Adapter() });

// adding Snapshot Serializers
addSerializer(snapshotSerializer);

const includedPatterns = ['.tsx', '.ts', '.jss'];

const excludePatterns = ['demo.stories', '__snapshots__', 'test', 'interfaces', './index.ts', 'enums/', '.md'];

// if (__karma__.config.exclude) {
//   excludePatterns = excludePatterns.concat(__karma__.config.exclude.split('|'));
// }

const isExcluded = (path) => {
  /* Exclude files from exclude pattern */
  return excludePatterns.some((pattern) => path.indexOf(pattern) !== -1);
};

const isIncluded = (path) => {
  // "match" not specified, so nothing to filter against\
  if (!includedPatterns) {
    return true;
  }
  // Any one pattern matches the path in the context
  return includedPatterns.some((pattern) => path.indexOf(pattern) !== -1);
};

const testsContext = require.context('../src', true, /.karma.ts[x]?/);
const filesToLoad = testsContext.keys().filter((key) => isIncluded(key) && !isExcluded(key));
filesToLoad.forEach(testsContext);
