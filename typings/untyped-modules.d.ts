declare module 'react-jss';
declare module '*.svg';
declare module '*.jpg';

declare module '*.json' {
  const value: any;
  export default value;
}

// TODO Remove this as soon as we get rid of jest or karma/chai
declare const expect: any;
