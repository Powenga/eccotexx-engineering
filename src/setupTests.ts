// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

jest.mock('bem-css-modules', () => {
  const originalModule = jest.requireActual('bem-css-modules');
  return {
    __esModule: true,
    ...originalModule,
    default: (styles: unknown) => originalModule.default(styles, 'test-class'),
  };
});

jest.mock('identity-obj-proxy', () => {
  const originalModule = jest.requireActual('identity-obj-proxy');
  return {
    __esModule: true,
    ...originalModule,
    default: new Proxy(
      {},
      {
        get: function getter(target, key) {
          if (key === '__esModule') {
            return false;
          }
          return key;
        },
        has: function foo() {
          return true;
        },
      }
    ),
  };
});
