import React from 'react';

import error from '../assets/error.png';
import Fallback from '../components/Fallback/Fallback';

const Error = () => {
  return (
    <Fallback image={error} altImage='Error' text='Ops! We have faced an error' />
  );
};

export default Error;
