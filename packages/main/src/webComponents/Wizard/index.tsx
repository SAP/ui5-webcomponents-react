'use client';

import '@ui5/webcomponents-fiori/dist/Wizard.js';
import type WizardContentLayout from '@ui5/webcomponents-fiori/dist/types/WizardContentLayout.js';
import type { WizardStepChangeEventDetail } from '@ui5/webcomponents-fiori/dist/Wizard.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface WizardAttributes {
  /**
   * Defines how the content of the `Wizard` would be visualized.
   * @default "MultipleSteps"
   */
  contentLayout?: WizardContentLayout | keyof typeof WizardContentLayout;
}

interface WizardDomRef extends WizardAttributes, Ui5DomRef {}

interface WizardPropTypes extends WizardAttributes, Omit<CommonProps, keyof WizardAttributes | 'onStepChange'> {
  /**
   * Defines the steps.
   *
   * **Note:** Use the available `WizardStep` component.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the step is changed by user interaction - either with scrolling, or by clicking on the steps within the component header.
   */
  onStepChange?: (event: Ui5CustomEvent<WizardDomRef, WizardStepChangeEventDetail>) => void;
}

/**
 * The `Wizard` helps users to complete a complex task by dividing it into sections and guiding them through it. It has two main areas - a navigation area at the top showing the step sequence and a content area below it.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const Wizard = withWebComponent<WizardPropTypes, WizardDomRef>(
  'ui5-wizard',
  ['contentLayout'],
  [],
  [],
  ['step-change'],
  () => import('@ui5/webcomponents-fiori/dist/Wizard.js')
);

Wizard.displayName = 'Wizard';

export { Wizard };
export type { WizardDomRef, WizardPropTypes };
