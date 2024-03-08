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

interface WizardDomRef extends Required<WizardAttributes>, Ui5DomRef {}

interface WizardPropTypes
  extends WizardAttributes,
    Omit<CommonProps, keyof WizardAttributes | 'children' | 'onStepChange'> {
  /**
   * Defines the steps.
   *
   * **Note:** Use the available `WizardStep` component.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the step is changed by user interaction - either with scrolling,
   * or by clicking on the steps within the component header.
   */
  onStepChange?: (event: Ui5CustomEvent<WizardDomRef, WizardStepChangeEventDetail>) => void;
}

/**
 * The `Wizard` helps users to complete a complex task by dividing it into sections and guiding them through it.
 * It has two main areas - a navigation area at the top showing the step sequence and a content area below it.
 *
 * ### Structure
 * #### Navigation area
 * The top most area of the `Wizard` is occupied by the navigation area.
 * It shows the sequence of steps, where the recommended number of steps is between 3 and 8 steps.
 *
 * -  Steps can have different visual representations - numbers or icons.
 * -  Steps might have labels for better readability - titleText and subTitleText.
 * -  Steps are defined by using the `WizardStep` as slotted element within the `Wizard`.
 *
 * **Note:** If no selected step is defined, the first step will be auto selected.
 *
 * **Note:** If multiple selected steps are defined, the last step will be selected.
 *
 * ### Keyboard Handling
 * The user can navigate using the following keyboard shortcuts:
 *
 * #### Wizard Progress Navigation
 *
 * 	- [LEFT], [DOWN] - Focus moves backward to the WizardProgressNavAnchors.
 * 	- [UP], [RIGHT] - Focus moves forward to the WizardProgressNavAnchor.
 * 	- [SPACE] or [ENTER], [RETURN] - Selects an active step
 * 	- [HOME] or [PAGE UP] - Focus goes to the first step
 * 	- [END] or [PAGE DOWN] - Focus goes to the last step
 *
 * #### Fast Navigation
 * This component provides a build in fast navigation group which can be used via `F6 / Shift + F6` or ` Ctrl + Alt(Option) + Down /  Ctrl + Alt(Option) + Up`.
 * In order to use this functionality, you need to import the following module:
 * `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
 *
 * #### Content
 * The content occupies the main part of the page. It can hold any type of HTML elements.
 * It's defined by using the `WizardStep` as slotted element within the `Wizard`.
 *
 * ### Scrolling
 * The component handles user scrolling by selecting the closest step, based on the current scroll position
 * and scrolls to particular place, when the user clicks on the step within the navigation area.
 *
 * **Important:** In order the component's scrolling behaviour to work, it has to be limited from the outside parent element in terms of height.
 * The component or its parent has to be given percentage or absolute height. Otherwise, the component will be scrolled out with the entire page.
 *
 * **For example:**
 *
 * ```html
 * <ui5-dialog style="height: 80%">
 * 	<Wizard></Wizard>
 * </ui5-dialog>
 * ```
 *
 * #### Moving to next step
 * The `WizardStep` provides the necessary API and it's up to the user of the component to use it to move to the next step.
 * You have to set its `selected` property (and remove the `disabled` one if set) to `true`.
 * The `Wizard` will automatically scroll to the content of the newly selected step.
 *
 * The Fiori 3 guidelines recommends having a "nextStep" button in the content area.
 * You can place a button, or any other type of element to trigger step change, inside the `WizardStep`,
 * and show/hide it when certain fields are filled or user defined criteria is met.
 *
 * ### Usage
 * #### When to use:
 * When the user has to accomplish a long or unfamiliar task.
 *
 * #### When not to use:
 * When the task has less than 3 steps.
 *
 * ### Responsive Behavior
 * On small widths the step's titleText, subtitleText and separators in the navigation area shrink and from particular point the steps are grouped together and overlap.
 * Tapping on them will show a popover to select the step to navigate to. On mobile device, the grouped steps are presented within a dialog.
 *
 *  (includes <ui5-wizard-step/>)
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
