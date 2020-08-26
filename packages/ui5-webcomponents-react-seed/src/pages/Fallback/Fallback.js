import React from 'react';

import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/lib/FlexBoxJustifyContent';

import BrowserURL from '../../util/BrowserURL'

const style = {
  image: {
    width: '30%'
  }
};

const Fallback = ({ image, altImage, text, reload }) => {
  return (
    <FlexBox
      style={{ width: '100%', height: '100vh' }}
      direction={FlexBoxDirection.Column}
      justifyContent={FlexBoxJustifyContent.Center}
      alignItems={FlexBoxAlignItems.Center}
    >
      <img src={image} style={style.image} alt={altImage} />
      <h3 className='text-center'>{text}</h3>
      {reload && (
        <a style={{ cursor: 'pointer', color: '#0077FF' }} href={BrowserURL.HOME} target="_self">Reload this page</a>
      )}
    </FlexBox>
  );
};

export default Fallback;
