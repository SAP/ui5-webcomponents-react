const { readdirSync, statSync, writeFileSync, existsSync } = require('fs');
const path = require('path');
const PATHS = require('../../../../config/paths');

const WEB_COMPONENTS_ROOT_DIR = path.join(PATHS.packages, 'main', 'src', 'webComponents');

const webComponents = readdirSync(WEB_COMPONENTS_ROOT_DIR).filter((f) =>
  statSync(path.join(WEB_COMPONENTS_ROOT_DIR, f)).isDirectory()
);

webComponents.forEach((component) => {
  const absPath = path.join(WEB_COMPONENTS_ROOT_DIR, component, `${component}.karma.tsx`);
  if (existsSync(absPath)) {
    return;
  }
  const jsxContent = `
import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from "chai-karma-snapshot";
import { ${component} } from '../../lib/${component}';
import { mountThemedComponent } from "@shared/tests/utils";

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
