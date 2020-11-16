import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents-fiori/dist/Wizard';
import { FC, ReactNode } from 'react';

export interface WizardPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the steps.
   *
   * **Note:** Use the available `WizardStep` component.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the step selection is changed by user interaction - either with scrolling, or by clicking on the steps within the component header.
   */
  onSelectionChange?: (event: CustomEvent<{ selectedStep: ReactNode; previouslySelectedStep: ReactNode }>) => void;
}

/**
 * The `Wizard` helps users complete a complex task by dividing it into sections and guiding the user through it. It has two main areas - a navigation area at the top showing the step sequence and a content area below it.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Wizard" target="_blank">UI5 Web Components Playground</a>
 */
const Wizard: FC<WizardPropTypes> = withWebComponent<WizardPropTypes>('ui5-wizard', [], [], [], ['selection-change']);

Wizard.displayName = 'Wizard';

Wizard.defaultProps = {};

export { Wizard };
