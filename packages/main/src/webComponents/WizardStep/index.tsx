import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents-fiori/dist/WizardStep';
import { FC } from 'react';

export interface WizardStepPropTypes extends WithWebComponentPropTypes {
  /**
   * When <code>branching</code> is enabled a dashed line would be displayed after the step, meant to indicate that the next step is not yet known and depends on user choice in the current step. <br><br><br/><br/>
   *
   * <b>Note:</b> It is recommended to use <code>branching</code> on the last known step and later add new steps when it becomes clear how the wizard flow should continue.
   */
  branching?: boolean;
  /**
   * Defines if the step is <code>disabled</code>. When disabled the step is displayed, but the user can't select the step by clicking or navigate to it with scrolling. <br><br><br/><br/>
   *
   * <b>Note:</b> Step can't be <code>selected</code> and <code>disabled</code> at the same time. In this case the <code>selected</code> property would take precedence.
   */
  disabled?: boolean;
  /**
   * Defines the <code>heading</code> of the step. <br><br><br/><br/>
   *
   * <b>Note:</b> the text is displayed in the <code>Wizard</code> navigation header. <br> <b>Note:</b> the text will hide on small sizes (about 559 px).
   */
  heading?: string;
  /**
   * Defines the <code>icon</code> of the step. <br><br><br/><br/>
   *
   * <b>Note:</b> the icon is displayed in the <code>Wizard</code> navigation header. <br><br><br/><br/>
   *
   * The SAP-icons font provides numerous options. See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines the step's <code>selected</code> state - the step that is currently active. <br><br><br/><br/>
   *
   * <b>Note:</b> Step can't be <code>selected</code> and <code>disabled</code> at the same time. In this case the <code>selected</code> property would take precedence.
   */
  selected?: boolean;
  /**
   * Defines the <code>subheading</code> of the step. <br><br><br/><br/>
   *
   * <b>Note:</b> the text is displayed in the <code>Wizard</code> navigation header. <br> <b>Note:</b> the text will hide on small sizes (about 559 px).
   */
  subheading?: string;
}

/**
 * A component that represents a logical step as part of the `Wizard`. It is meant to aggregate arbitrary HTML elements that forms the content of a single step.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/WizardStep" target="_blank">UI5 Web Components Playground</a>
 */
const WizardStep: FC<WizardStepPropTypes> = withWebComponent<WizardStepPropTypes>(
  'ui5-wizard-step',
  ['heading', 'icon', 'subheading'],
  ['branching', 'disabled', 'selected'],
  [],
  []
);

WizardStep.displayName = 'WizardStep';

WizardStep.defaultProps = {
  branching: false,
  disabled: false,
  selected: false
};

export { WizardStep };
