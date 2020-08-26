import React from 'react';

import notfound from '../../assets/notfound.png';
import Fallback from './Fallback';

const NotFound = () => {
  return (
    <Fallback image={notfound} altImage='Not Found' text='Hmmm, we could find this URL' />
  );
};

export default NotFound;
