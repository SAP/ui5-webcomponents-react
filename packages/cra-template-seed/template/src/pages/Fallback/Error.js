import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import error from '../../assets/error.png';
import Fallback from './Fallback';

const Error = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet title={t('helmet.title.error')} />
      <Fallback image={error} altImage={t('page.error.alt')} text={t('page.error.text')} reload />
    </>
  );
};

export default Error;
