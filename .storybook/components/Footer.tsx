import {
  Button,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  Label,
  Link,
  Popover,
  Text
} from '@ui5/webcomponents-react';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import PopoverPlacement from '@ui5/webcomponents/dist/types/PopoverPlacement.js';
import WrappingType from '@ui5/webcomponents/dist/types/WrappingType.js';
import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import BestRunLogo from '../../assets/SAP_Best_R_grad_blk_scrn.png';
import classes from './Footer.module.css';

export const Footer = ({ style }) => {
  const popoverRef = useRef(null);
  const footerRef = useRef(null);
  const [privacyPopoverOpen, setPPOpen] = useState(false);
  const showPrivacyPopover = (e) => {
    popoverRef.current.opener = e.target;
    setPPOpen((prev) => !prev);
  };

  return createPortal(
    <footer className={classes.footer} style={style}>
      <div ref={footerRef} className={classes.content}>
        <FlexBox
          justifyContent={FlexBoxJustifyContent.SpaceBetween}
          alignItems={FlexBoxAlignItems.Center}
          wrap={FlexBoxWrap.Wrap}
          style={{ width: '100%' }}
        >
          <FlexBox alignItems={FlexBoxAlignItems.Center} wrap={FlexBoxWrap.Wrap}>
            <img src={BestRunLogo} alt="SAP Logo with Text 'The Best Run'" style={{ height: '1.5rem' }} />
            <Label wrappingType={WrappingType.Normal}>
              {/*REUSE-IgnoreStart*/}&copy; Copyright {new Date().getFullYear()}, SAP SE and UI5 Web Components for
              React Contributors
              {/*  REUSE-IgnoreEnd*/}
            </Label>
          </FlexBox>
          <FlexBox alignItems={FlexBoxAlignItems.Center} wrap={FlexBoxWrap.Wrap}>
            <Button
              design={ButtonDesign.Transparent}
              onClick={showPrivacyPopover}
              accessibilityAttributes={{ hasPopup: 'dialog', expanded: privacyPopoverOpen }}
            >
              Privacy
            </Button>
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
        open={privacyPopoverOpen}
        headerText={'Privacy Statement'}
        ref={popoverRef}
        placement={PopoverPlacement.Top}
        data-ui5-compact-size
        style={{ width: '360px', maxWidth: '100%' }}
        onClose={() => setPPOpen(false)}
      >
        <Text>
          This site is hosted by{' '}
          <Link href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">
            GitHub Pages
          </Link>
          . Please see the{' '}
          <Link
            href="https://docs.github.com/en/github/site-policy/github-privacy-statement"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Privacy Statement
          </Link>{' '}
          for any information how GitHub processes your personal data.
        </Text>
      </Popover>
    </footer>,
    document.getElementById('storybook-docs')
  );
};
