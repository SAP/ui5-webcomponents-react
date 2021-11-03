import {
  Bar,
  BarDesign,
  Button,
  ButtonDesign,
  FlexBox,
  FlexBoxAlignItems,
  Label,
  Link,
  List,
  ListItemType,
  Popover,
  PopoverPlacementType,
  StandardListItem,
  WrappingType
} from '@ui5/webcomponents-react';
import React, { useRef } from 'react';
import BestRunLogo from '../../assets/SAP_Best_R_grad_blk_scrn.png';

export const Footer = () => {
  const ref = useRef(null);

  const showPrivacyPopover = (e) => {
    ref.current.showAt(e.target);
  };

  return (
    <footer>
      <Bar
        design={BarDesign.Footer}
        style={{ position: 'absolute', left: 0, right: 0 }}
        endContent={
          <FlexBox alignItems={FlexBoxAlignItems.Center}>
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
        }
      >
        <FlexBox slot="startContent" alignItems={FlexBoxAlignItems.Center}>
          <img src={BestRunLogo} alt="SAP Logo with Text 'The Best Run'" style={{ height: '1.5rem' }} />
          <Label>© Copyright {new Date().getFullYear()}, SAP SE and UI5 Web Components for React Contributors</Label>
        </FlexBox>
      </Bar>
      <Popover
        headerText={'Privacy Statement'}
        ref={ref}
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
