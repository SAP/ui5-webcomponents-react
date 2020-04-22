import { fetchI18nBundle, getI18nBundle } from '@ui5/webcomponents-base/dist/i18nBundle.js';
import { useEffect, useState } from 'react';

export const useI18nBundle = (bundleName) => {
  const [bundle, setBundle] = useState(getI18nBundle(bundleName));

  useEffect(() => {
    const fetchAndLoadBundle = async () => {
      await fetchI18nBundle(bundleName);
      setBundle(getI18nBundle(bundleName));
    };
    fetchAndLoadBundle();
  }, []);

  return bundle;
};
