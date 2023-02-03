'use client';

import '@ui5/webcomponents-fiori/dist/WizardStep.js';
import { ReactNode } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface WizardStepAttributes {
  /**
   * When `branching` is enabled a dashed line would be displayed after the step, meant to indicate that the next step is not yet known and depends on user choice in the current step.
   *
   * **Note:** It is recommended to use `branching` on the last known step and later add new steps when it becomes clear how the wizard flow should continue.
   */
  branching?: boolean;
  /**
   * Defines if the step is `disabled`. When disabled the step is displayed, but the user can't select the step by clicking or navigate to it with scrolling.
   *
   * **Note:** Step can't be `selected` and `disabled` at the same time. In this case the `selected` property would take precedence.
   */
  disabled?: boolean;
  /**
   * Defines the `icon` of the step.
   *
   * **Note:** The icon is displayed in the `Wizard` navigation header.
   *
   * The SAP-icons font provides numerous options. See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines the step's `selected` state - the step that is currently active.
   *
   * **Note:** Step can't be `selected` and `disabled` at the same time. In this case the `selected` property would take precedence.
   */
  selected?: boolean;
  /**
   * Defines the `subtitleText` of the step.
   *
   * **Note:** the text is displayed in the `Wizard` navigation header.
   */
  subtitleText?: string;
  /**
   * Defines the `titleText` of the step.
   *
   * **Note:** The text is displayed in the `Wizard` navigation header.
   */
  titleText?: string;
}

export interface WizardStepDomRef extends WizardStepAttributes, Ui5DomRef {}

export interface WizardStepPropTypes extends WizardStepAttributes, CommonProps {
  /**
   * Defines the step content.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * A component that represents a logical step as part of the `Wizard`. It is meant to aggregate arbitrary HTML elements that form the content of a single step.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Wizard" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const WizardStep = withWebComponent<WizardStepPropTypes, WizardStepDomRef>(
  'ui5-wizard-step',
  ['icon', 'subtitleText', 'titleText'],
  ['branching', 'disabled', 'selected'],
  [],
  [],
  () => import('@ui5/webcomponents-fiori/dist/WizardStep.js')
);

WizardStep.displayName = 'WizardStep';

export { WizardStep };
