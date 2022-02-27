import { render } from '@shared/tests';
import { registerI18nLoader } from '@ui5/webcomponents-base/dist/asset-registries/i18n.js';
import { setFetchDefaultLanguage } from '@ui5/webcomponents-base/dist/config/Language.js';
import { useI18nBundle } from '@ui5/webcomponents-react-base';
import React from 'react';
import { ThemeProvider } from '../components/ThemeProvider';

registerI18nLoader('myApp', 'en', async () => {
  return Promise.resolve({ TEST1: 'test text resource' });
});

const TestComponent = () => {
  const i18nBundle = useI18nBundle('myApp');
  return <div>1: {i18nBundle.getText('TEST1')}</div>;
};
const TestComponent2 = () => {
  const i18nBundle = useI18nBundle('myApp');
  return <div>2: {i18nBundle.getText('TEST1')}</div>;
};
const TestComponent3 = () => {
  const i18nBundle = useI18nBundle('myApp');
  return <div>3: {i18nBundle.getText('TEST1')}</div>;
};

describe('I18nProvider', () => {
  beforeAll(() => {
    setFetchDefaultLanguage(true);
  });

  afterAll(() => {
    setFetchDefaultLanguage(false);
  });

  test('should throw error when context is not present', () => {
    expect(() => render(<TestComponent />)).toThrow(
      `'useI18nBundle()' may be used only in the context of a '<ThemeProvider>' component.`
    );
  });

  test('translates single component', async () => {
    const { asFragment, findByText } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    await findByText('1: test text resource');
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div>
          1: test text resource
        </div>
      </DocumentFragment>
    `);
  });

  test('translates multiple components', async () => {
    const { asFragment, findByText } = render(
      <ThemeProvider>
        <TestComponent />
        <TestComponent2 />
        <TestComponent3 />
      </ThemeProvider>
    );
    await findByText('1: test text resource');
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div>
          1: test text resource
        </div>
        <div>
          2: test text resource
        </div>
        <div>
          3: test text resource
        </div>
      </DocumentFragment>
    `);
  });
});
