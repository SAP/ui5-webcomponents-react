'use client';

import '@ui5/webcomponents-fiori/dist/Wizard.js';
import type { WizardStepChangeEventDetail } from '@ui5/webcomponents-fiori/dist/Wizard.js';
import type { ReactNode } from 'react';
import { WizardContentLayout } from '../../enums/index.js';
import type { Ui5CustomEvent, CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface WizardAttributes {
  /**
   * Defines how the content of the `Wizard` would be visualized.
   */
  contentLayout?: WizardContentLayout | keyof typeof WizardContentLayout;
}

export interface WizardDomRef extends WizardAttributes, Ui5DomRef {}

export interface WizardPropTypes extends WizardAttributes, CommonProps {
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
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-Wizard" target="_blank">UI5 Web Components Storybook</ui5-link>
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

Wizard.defaultProps = {
  contentLayout: WizardContentLayout.MultipleSteps
};

export { Wizard };
