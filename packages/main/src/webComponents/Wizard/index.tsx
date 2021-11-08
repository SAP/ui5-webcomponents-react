import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5CustomEvent } from '@ui5/webcomponents-react/interfaces/Ui5CustomEvent';
import { ReactNode } from 'react';

import '@ui5/webcomponents-fiori/dist/Wizard.js';

export interface WizardPropTypes extends CommonProps {
  /**
   * Defines the steps.
   *
   * **Note:** Use the available `WizardStep` component.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the step is changed by user interaction - either with scrolling, or by clicking on the steps within the component header.
   */
  onStepChange?: (
    event: Ui5CustomEvent<HTMLElement, { step: ReactNode; previousStep: ReactNode; changeWithClick: boolean }>
  ) => void;
}

/**
 * The `Wizard` helps users to complete a complex task by dividing it into sections and guiding them through it. It has two main areas - a navigation area at the top showing the step sequence and a content area below it.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Wizard" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const Wizard = withWebComponent<WizardPropTypes>('ui5-wizard', [], [], [], ['step-change']);

Wizard.displayName = 'Wizard';

export { Wizard };
