const path = require('path');
const PATHS = require('../../config/paths');
const { readdirSync, statSync, writeFileSync } = require('fs');

const WEB_COMPONENTS_ROOT_DIR = path.join(PATHS.packageRoot, 'fiori3', 'src', 'webComponents');

const webComponents = readdirSync(WEB_COMPONENTS_ROOT_DIR).filter((f) =>
  statSync(path.join(WEB_COMPONENTS_ROOT_DIR, f)).isDirectory()
);

webComponents.forEach((component) => {
  const absPath = path.join(WEB_COMPONENTS_ROOT_DIR, component, `${component}.karma.tsx`);
  const jsxContent = `
import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from "chai-karma-snapshot";
import { ${component} } from './index';
import { mountThemedComponent } from "../../../test/utils";

use(matchSnapshot);

describe('${component}', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<${component} />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});

`;
  writeFileSync(absPath, jsxContent);
});
