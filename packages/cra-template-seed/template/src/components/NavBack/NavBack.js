import React from 'react';

import { Button, ButtonDesign, FlexBox } from '@ui5/webcomponents-react';
import { useNavigate } from 'react-router-dom';
import { spacing } from '@ui5/webcomponents-react-base';

import i18n from '../../util/i18n';

const NavBack = ({
  text = i18n.t('components.navback.text'),
  icon = 'nav-back',
  design = ButtonDesign.Transparent,
  disabled = false,
}) => {
  const navigate = useNavigate();

  return (
    <FlexBox style={spacing.sapUiTinyMargin}>
      <Button
        data-testid="navback-wrapper"
        design={design}
        disabled={disabled}
        icon={icon}
        iconEnd={false}
        onClick={() => navigate(-1)}
        submits={false}
      >
        {text}
      </Button>
    </FlexBox>
  );
};

export default NavBack;

export const NavBackIcon = {
  NONE: '',
};
