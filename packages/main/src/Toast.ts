import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { ToastDomRef, ToastPropTypes } from './webComponents/Toast';
import { Toast } from './webComponents/Toast';

deprecationNotice(
  'Toast',
  `importing from '@ui5/webcomponents-react/dist/Toast' is deprecated. Please use "import { Toast } from '@ui5/webcomponents-react';" instead.`
);

export { Toast };

export type { ToastPropTypes, ToastDomRef };
