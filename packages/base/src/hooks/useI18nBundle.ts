import { fetchI18nBundle, getI18nBundle } from '@ui5/webcomponents-base/dist/i18nBundle';
import { useEffect, useState } from 'react';

interface I18nBundle {
  getText: (key: string, ...args: any) => string;
}

export const useI18nBundle = (bundleName): I18nBundle => {
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
