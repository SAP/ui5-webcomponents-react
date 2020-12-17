import { getI18nBundleData } from '@ui5/webcomponents-base/dist/asset-registries/i18n';
import { fetchI18nBundle, getI18nBundle } from '@ui5/webcomponents-base/dist/i18nBundle';
import { attachLanguageChange, detachLanguageChange } from '@ui5/webcomponents-base/dist/locale/languageChange';
import { useIsomorphicLayoutEffect } from '@ui5/webcomponents-react-base/lib/hooks';
import { useEffect, useState } from 'react';
import { deprecationNotice } from '@ui5/webcomponents-react-base/lib/Utils';

type TextWithDefault = { key: string; defaultText: string } | string;
type TextWithPlaceholders = [TextWithDefault, ...string[]];

interface I18nBundle {
  getText: (textObj: TextWithDefault, ...args: any[]) => string;
}

const resolveTranslations = (bundle, texts) => {
  return texts.map((text) => {
    if (Array.isArray(text)) {
      const [key, ...replacements] = text;
      return bundle.getText(key, replacements);
    }
    return bundle.getText(text);
  });
};

export const useI18nText = (bundleName: string, ...texts: (TextWithDefault | TextWithPlaceholders)[]): string[] => {
  const i18nBundle: I18nBundle = getI18nBundle(bundleName);
  const [translations, setTranslations] = useState(resolveTranslations(i18nBundle, texts));

  useEffect(() => {
    deprecationNotice(
      'useI18nText',
      `'useI18nText' is deprecated and will be removed in the next release. Please use 'useI18nBundle' instead.
A Migration Guide can be found here: https://sap.github.io/ui5-webcomponents-react/?path=/docs/migration-guide--page#migrating-from-013x-to-0140`
    );
  }, []);

  useEffect(() => {
    let didCancel = false;
    const fetchAndLoadBundle = async () => {
      await fetchI18nBundle(bundleName);
      if (!didCancel) {
        setTranslations((prev) => {
          const next = resolveTranslations(i18nBundle, texts);
          if (prev.length === next.length && prev.every((translation, index) => next[index] === translation)) {
            return prev;
          }
          return next;
        });
      }
    };
    fetchAndLoadBundle();
    return () => {
      didCancel = true;
    };
  }, [fetchI18nBundle, bundleName, ...texts]);

  return translations;
};

export const useI18nBundle = (bundleName: string): I18nBundle => {
  const [_, setUpdater] = useState(0);

  useIsomorphicLayoutEffect(() => {
    let isMounted = true;
    const i18nBundleData = getI18nBundleData('@ui5/webcomponents-react');
    if (!i18nBundleData) {
      fetchI18nBundle(`${bundleName}`).then(() => {
        if (isMounted) {
          setUpdater((old) => old + 1);
        }
      });
    }
    return () => {
      isMounted = false;
    };
  }, [bundleName]);

  useEffect(() => {
    let isMounted = true;
    const handler = () => {
      fetchI18nBundle(`${bundleName}`).then(() => {
        if (isMounted) {
          setUpdater((old) => old + 1);
        }
      });
    };
    attachLanguageChange(handler);
    return () => {
      isMounted = false;
      detachLanguageChange(handler);
    };
  }, []);

  return getI18nBundle(bundleName);
};
