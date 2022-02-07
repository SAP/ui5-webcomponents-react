import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { SegmentedButtonDomRef, SegmentedButtonPropTypes } from '../webComponents/SegmentedButton';
import { SegmentedButton } from '../webComponents/SegmentedButton';

deprecationNotice(
  'SegmentedButton',
  `importing from '@ui5/webcomponents-react/dist/SegmentedButton' is deprecated. Please use "import { SegmentedButton } from '@ui5/webcomponents-react';" instead.`
);

export { SegmentedButton };

export type { SegmentedButtonPropTypes, SegmentedButtonDomRef };
