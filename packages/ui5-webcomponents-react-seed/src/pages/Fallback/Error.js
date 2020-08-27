import React from 'react';
import { Helmet } from 'react-helmet'

import error from '../../assets/error.png';
import Fallback from './Fallback';

const Error = () => {
  return (
    <>
      <Helmet title="Buggy Component - TodoList App" />
      <Fallback image={error} altImage='Error' text='Ops! There was an error in loading this page' reload />
    </>
  );
};

export default Error;
