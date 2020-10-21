import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import notfound from '../../assets/notfound.png';
import Fallback from './Fallback';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet title={t('helmet.title.notfound')} />
      <Fallback image={notfound} altImage={t('page.notfound.alt')} text={t('page.notfound.text')} />
    </>
  );
};

export default NotFound;
