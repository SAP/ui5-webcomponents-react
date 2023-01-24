import '@ui5/webcomponents-fiori/dist/IllustratedMessage.js';
import { ReactNode } from 'react';
import { IllustrationMessageType, IllustrationMessageSize } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';
import { UI5WCSlotsNode } from '../../types';

interface IllustratedMessageAttributes {
  /**
   * Receives id(or many ids) of the elements that label the component.
   */
  accessibleNameRef?: string;
  /**
   * Defines the illustration name that will be displayed in the component.
   *
   * Available illustrations are:
   *
   * *   `AddColumn`
   * *   `AddPeople`
   * *   `BalloonSky`
   * *   `BeforeSearch`
   * *   `Connection`
   * *   `EmptyCalendar`
   * *   `EmptyList`
   * *   `EmptyPlanningCalendar`
   * *   `ErrorScreen`
   * *   `FilterTable`
   * *   `GroupTable`
   * *   `NoActivities`
   * *   `NoData`
   * *   `NoEntries`
   * *   `NoFilterResults`
   * *   `NoMail_v1`
   * *   `NoMail`
   * *   `NoNotifications`
   * *   `NoSavedItems_v1`
   * *   `NoSavedItems`
   * *   `NoSearchResults`
   * *   `NoTasks_v1`
   * *   `NoTasks`
   * *   `PageNotFound`
   * *   `ReloadScreen`
   * *   `ResizeColumn`
   * *   `SearchEarth`
   * *   `SearchFolder`
   * *   `SimpleBalloon`
   * *   `SimpleBell`
   * *   `SimpleCalendar`
   * *   `SimpleCheckMark`
   * *   `SimpleConnection`
   * *   `SimpleEmptyDoc`
   * *   `SimpleEmptyList`
   * *   `SimpleError`
   * *   `SimpleMagnifier`
   * *   `SimpleMail`
   * *   `SimpleNoSavedItems`
   * *   `SimpleNotFoundMagnifier`
   * *   `SimpleReload`
   * *   `SimpleTask`
   * *   `SleepingBell`
   * *   `SortColumn`
   * *   `SuccessBalloon`
   * *   `SuccessCheckMark`
   * *   `SuccessHighFive`
   * *   `SuccessScreen`
   * *   `Tent`
   * *   `UnableToLoad`
   * *   `UnableToLoadImage`
   * *   `UnableToUpload`
   * *   `UploadCollection`
   * *   `TntChartArea`
   * *   `TntChartArea2`
   * *   `TntChartBar`
   * *   `TntChartBPMNFlow`
   * *   `TntChartBullet`
   * *   `TntChartDoughnut`
   * *   `TntChartFlow`
   * *   `TntChartGantt`
   * *   `TntChartOrg`
   * *   `TntChartPie`
   * *   `TntCodePlaceholder`
   * *   `TntCompany`
   * *   `TntComponents`
   * *   `TntExternalLink`
   * *   `TntFaceID`
   * *   `TntFingerprint`
   * *   `TntLock`
   * *   `TntMission`
   * *   `TntNoApplications`
   * *   `TntNoFlows`
   * *   `TntNoUsers`
   * *   `TntRadar`
   * *   `TntSecrets`
   * *   `TntServices`
   * *   `TntSessionExpired`
   * *   `TntSessionExpiring`
   * *   `TntSuccess`
   * *   `TntSuccessfulAuth`
   * *   `TntSystems`
   * *   `TntTeams`
   * *   `TntTools`
   * *   `TntUnableToLoad`
   * *   `TntUnlock`
   * *   `TntUnsuccessfulAuth`
   * *   `TntUser2`
   *
   *
   *
   * **Note:** By default the `BeforeSearch` illustration is loaded.
   * When using an illustration type, other than the default, it should be loaded in addition:
   * `import "@ui5/webcomponents-fiori/dist/illustrations/NoData.js";`
   *
   * **Note:** TNT illustrations cointain `Tnt` prefix in their name. You can import them removing the `Tnt` prefix like this:
   * `import "@ui5/webcomponents-fiori/dist/illustrations/tnt/SessionExpired.js";`
   */
  name?: IllustrationMessageType | keyof typeof IllustrationMessageType;
  /**
   * Determines which illustration breakpoint variant is used.
   *
   * Available options are:
   *
   * *   `Auto`
   * *   `Base`
   * *   `Spot`
   * *   `Dialog`
   * *   `Scene`
   *
   * As `IllustratedMessage` adapts itself around the `Illustration`, the other elements of the component are displayed differently on the different breakpoints/illustration sizes.
   */
  size?: IllustrationMessageSize | keyof typeof IllustrationMessageSize;
  /**
   * Defines the subtitle of the component.
   *
   * **Note:** Using this property, the default subtitle text of illustration will be overwritten.
   *
   * **Note:** Using `subtitle` slot, the default of this property will be overwritten.
   */
  subtitleText?: string;
  /**
   * Defines the title of the component.
   *
   * **Note:** Using this property, the default title text of illustration will be overwritten.
   */
  titleText?: string;
}

export interface IllustratedMessageDomRef extends IllustratedMessageAttributes, Ui5DomRef {}

export interface IllustratedMessagePropTypes extends IllustratedMessageAttributes, CommonProps {
  /**
   * Defines the component actions.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the subtitle of the component.
   *
   * **Note:** Using this slot, the default subtitle text of illustration and the value of `subtitleText` property will be overwritten.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="subtitle"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them in the body of the component, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).
   */
  subtitle?: UI5WCSlotsNode;
}

/**
 * An IllustratedMessage is a recommended combination of a solution-oriented message, an engaging illustration, and conversational tone to better communicate an empty or a success state than just show a message alone. Each illustration has default internationalised title and subtitle texts. Also they can be managed with `titleText` and `subtitleText` properties. To display the desired illustration, use the `name` property, where you can find the list of all available illustrations.
 *
 * **Note:** By default the “BeforeSearch” illustration is loaded. To use other illustrations, make sure you import them in addition, for example:
 * `import "@ui5/webcomponents-fiori/dist/illustrations/NoData.js"`
 * **Note:** Illustrations starting with the “Tnt” prefix are part of another illustration set. For example to use the “TntSuccess” illustration, add the following import::
 * `import "@ui5/webcomponents-fiori/dist/illustrations/tnt/Success.js"`
 *
 *__Note:__ The `title` slot collides with the native HTML `title` attribute, so to customize the title (heading) of the component you need to pass it as slot. You can find out more about this [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/user-feedback-illustratedmessage--default-story#fully-customizable-title).
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/IllustratedMessage" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const IllustratedMessage = withWebComponent<IllustratedMessagePropTypes, IllustratedMessageDomRef>(
  'ui5-illustrated-message',
  ['accessibleNameRef', 'name', 'size', 'subtitleText', 'titleText'],
  [],
  ['subtitle'],
  []
);

IllustratedMessage.displayName = 'IllustratedMessage';

IllustratedMessage.defaultProps = {
  name: IllustrationMessageType.BeforeSearch,
  size: IllustrationMessageSize.Auto
};

export { IllustratedMessage };
