import React from 'react';

import error from '../../assets/error.png';
import Fallback from './Fallback';

const Error = () => {
  return (
    <>
      <Fallback image={error} altImage='Error' text='Ops! There was an error in loading this page' reload />
    </>
  );
};

export default Error;
