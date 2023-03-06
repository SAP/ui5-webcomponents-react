import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  Label,
  Link,
  Popover,
  PopoverPlacementType,
  WrappingType
} from '@ui5/webcomponents-react';
import React, { useRef } from 'react';
import BestRunLogo from '../../assets/SAP_Best_R_grad_blk_scrn.png';
import classes from './Footer.module.css';

export const Footer = ({ style }) => {
  const popoverRef = useRef(null);
  const footerRef = useRef(null);
  const showPrivacyPopover = (e) => {
    popoverRef.current.showAt(e.target);
  };

  return (
    <footer className={classes.footer}>
      <div ref={footerRef} className={classes.content} style={style}>
        <FlexBox
          justifyContent={FlexBoxJustifyContent.SpaceBetween}
          alignItems={FlexBoxAlignItems.Center}
          wrap={FlexBoxWrap.Wrap}
          style={{ width: '100%' }}
        >
          <FlexBox alignItems={FlexBoxAlignItems.Center} wrap={FlexBoxWrap.Wrap}>
            <img src={BestRunLogo} alt="SAP Logo with Text 'The Best Run'" style={{ height: '1.5rem' }} />
            <Label wrappingType={WrappingType.Normal}>
              © Copyright {new Date().getFullYear()}, SAP SE and UI5 Web Components for React Contributors
            </Label>
          </FlexBox>
          <FlexBox alignItems={FlexBoxAlignItems.Center} wrap={FlexBoxWrap.Wrap}>
            <Link onClick={showPrivacyPopover}>Privacy</Link>
            &nbsp;
            <Label>|</Label>
            &nbsp;
            <Link href="https://www.sap.com/corporate/en/legal/terms-of-use.html">Terms of Use</Link>
            &nbsp;
            <Label>|</Label>
            &nbsp;
            <Link href="https://www.sap.com/corporate/en/legal/impressum.html">Legal Disclosure</Link>
            &nbsp;
            <Label>|</Label>
            &nbsp;
            <Link href="https://www.sap.com/corporate/en/legal/trademark.html">Trademarks</Link>
          </FlexBox>
        </FlexBox>
      </div>
      <Popover
        headerText={'Privacy Statement'}
        ref={popoverRef}
        placementType={PopoverPlacementType.Top}
        data-ui5-compact-size
        style={{ width: '360px', maxWidth: '100%' }}
      >
        <Label wrappingType={WrappingType.Normal}>
          This site is hosted by <Link>GitHub Pages</Link>. Please see the <Link>GitHub Privacy Statement</Link> for any
          information how GitHub processes your personal data.
        </Label>
      </Popover>
    </footer>
  );
};
