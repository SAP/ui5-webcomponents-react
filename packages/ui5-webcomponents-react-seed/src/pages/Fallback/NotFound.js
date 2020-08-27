import React from 'react';
import { Helmet } from 'react-helmet';

import notfound from '../../assets/notfound.png';
import Fallback from './Fallback';

const NotFound = () => {
  return (
    <>
      <Helmet title="NotFound - TodoList App" />
      <Fallback image={notfound} altImage='Not Found' text='Hmmm, we could find this URL' />
    </>
  );
};

export default NotFound;
