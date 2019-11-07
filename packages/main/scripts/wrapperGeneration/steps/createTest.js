const { readdirSync, statSync, writeFileSync, existsSync } = require('fs');
const path = require('path');
const prettier = require('prettier');
const PATHS = require('../../../../../config/paths');

const WEB_COMPONENTS_ROOT_DIR = path.join(PATHS.packages, 'main', 'src', 'webComponents');

const createTestForComponent = (dto) => {
  const component = dto.componentName;
  const absPath = path.join(WEB_COMPONENTS_ROOT_DIR, component, `${component}.test.tsx`);
  if (existsSync(absPath)) {
    return;
  }
  const jsxContent = `
import { mountThemedComponent } from "@shared/tests/utils";
import React from 'react';
import { ${component} } from '@ui5/webcomponents-react/lib/${component}';

describe('${component}', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<${component} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});

`;
  writeFileSync(absPath, prettier.format(jsxContent));
};

module.exports = {
  createTestForComponent
};
