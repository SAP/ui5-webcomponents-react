import { createGenerateClassName } from './createGenerateClassName';

const generateClassName = createGenerateClassName();

const rule = {
  key: 'someKey'
};

describe('createGenerateClassName', () => {
  test('basic test', () => {
    expect(typeof generateClassName).toBe('function');
  });

  test('with valid jssId and classNamePrefix', () => {
    const sheet = {
      options: {
        jss: {
          id: '1'
        },
        classNamePrefix: 'Component-'
      }
    };
    const className = generateClassName(rule, sheet);
    expect(/Component--someKey--1-.*/.exec(className).length > 0).toBe(true);
  });

  test('with invalid jssId and invalid classNamePrefix', () => {
    const sheet = {
      options: {
        jss: {
          id: null
        },
        classNamePrefix: 'MyComponent-Component-'
      }
    };
    const className = generateClassName(rule, sheet);
    expect(/MyComponent-Component--someKey--.*/.exec(className).length > 0).toBe(true);
  });
});
