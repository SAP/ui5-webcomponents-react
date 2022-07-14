import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Link,
  Title,
  TitleLevel,
} from '@ui5/webcomponents-react';

import { ROUTES } from '../../routes/Routes';

const style = {
  wrapper: {
    width: '100%',
  },
  image: {
    width: '30%',
  },
  reloadButton: {
    cursor: 'pointer',
  },
};

const Fallback = ({ image, altImage, text, reload }) => {
  const { t } = useTranslation();

  return (
    <FlexBox
      style={style.wrapper}
      direction={FlexBoxDirection.Column}
      justifyContent={FlexBoxJustifyContent.Center}
      alignItems={FlexBoxAlignItems.Center}
    >
      <img src={image} style={style.image} alt={altImage} />
      <Title level={TitleLevel.H3} className="text-center">
        {text}
      </Title>
      {reload && (
        <Link style={style.reloadButton} href={ROUTES.HOME} target="_self">
          {t('page.fallback.reload.text')}
        </Link>
      )}
    </FlexBox>
  );
};

export default Fallback;
