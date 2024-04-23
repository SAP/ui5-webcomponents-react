function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DatePicker-NYhcqGBe.js","./withWebComponent-LTFbYRvs.js","./utils-d3BcYjeO.js","./VersionInfo-ldzxTIVv.js","./index-OjgoNOWw.js","./CustomElementsScopeUtils-orabJqjR.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./slot-HSrR9XJ-.js","./event-lM5HanI-.js","./Gregorian-ddr6hDrq.js","./Boot-vTaFuwdG.js","./i18nBundle-j8vDD4VY.js","./LocaleData-9iSzsORX.js","./Calendar-gjG-WegN.js","./Keys-ZEuNsqmZ.js","./UI5Element-9EXj3atz.js","./Integer-kog98579.js","./slim-arrow-left-W95OY-0p.js","./Icons-Vbmmw7bO.js","./slim-arrow-right-w4AUPzoN.js","./Icon-kyep1SqZ.js","./parameters-bundle.css-EKzfhWK3.js","./class-map-gjOVarQw.js","./i18n-defaults-X1FTyPSK.js","./style-map-tejh5TI3.js","./ItemNavigation-F0c19DRy.js","./getActiveElement-IIKAy3xo.js","./ValueState-zUcANXoY.js","./AriaLabelHelper-RbKlVwzD.js","./decline-j4MODHQ_.js","./i18n-defaults-9hHjZPfp.js","./HasPopup-9BAMrqbD.js","./Button-DcwyQdV9.js","./MarkedEvents-aYv14vsS.js","./willShowContent-MSvI8sYo.js","./ResponsivePopover-NpDqijfo.js","./PopupUtils-kUkkQSCb.js","./Popover-Yl5FRmf7.js","./PopupsCommon.css-xzQQME9v.js","./FocusableElements-xTkOlDEw.js","./isElementHidden-d3-Fo4V6.js","./getEffectiveScrollbarStyle-Gz48PLeD.js","./ResizeHandler-_qRzLmqT.js","./MediaRange-sEMt71Ve.js","./BrowserScrollbar.css-wlj1ktzG.js","./Dialog-Kb1Go7sM.js","./information-6141dtH3.js","./alert--0SE21sY.js","./Title-yLgJni0m.js","./WrappingType-avPrqc94.js","./Input-l-VGVNnc.js","./ResponsivePopoverCommon.css-jkbZ-5Gq.js","./ValueStateMessage.css-ulM_ieaz.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./iframe-PMMZ518-.js";import"./DatePicker-NYhcqGBe.js";import{w as n}from"./withWebComponent-LTFbYRvs.js";const e=n("ui5-date-picker",["accessibleName","accessibleNameRef","formatPattern","maxDate","minDate","name","placeholder","primaryCalendarType","secondaryCalendarType","value","valueState"],["disabled","hideWeekNumbers","readonly","required"],["valueStateMessage"],["change","input","value-state-change"],()=>t(()=>import("./DatePicker-NYhcqGBe.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53]),import.meta.url));e.displayName="DatePicker";try{e.displayName="DatePicker",e.__docgenInfo={description:`The \`DatePicker\` component provides an input field with assigned calendar which opens on user action.
The \`DatePicker\` allows users to select a localized date using touch,
mouse, or keyboard input. It consists of two parts: the date input field and the
date picker.

### Usage

The user can enter a date by:

- Using the calendar that opens in a popup
- Typing it in directly in the input field

When the user makes an entry and presses the enter key, the calendar shows the corresponding date.
When the user directly triggers the calendar display, the actual date is displayed.

### Formatting

If a date is entered by typing it into
the input field, it must fit to the used date format.

Supported format options are pattern-based on Unicode LDML Date Format notation.
For more information, see [UTS #35: Unicode Locale Data Markup Language](http://unicode.org/reports/tr35/#Date_Field_Symbol_Table).

For example, if the \`format-pattern\` is "yyyy-MM-dd",
a valid value string is "2015-07-30" and the same is displayed in the input.

### Keyboard Handling
The \`DatePicker\` provides advanced keyboard handling.
If the \`DatePicker\` is focused,
you can open or close the drop-down by pressing \`F4\`, \`ALT+UP\` or \`ALT+DOWN\` keys.
Once the drop-down is opened, you can use the \`UP\`, \`DOWN\`, \`LEFT\`, \`RIGHT\` arrow keys
to navigate through the dates and select one by pressing the \`Space\` or \`Enter\` keys. Moreover you can
use TAB to reach the buttons for changing month and year.

If the \`DatePicker\` input field is focused and its corresponding picker dialog is not opened,
then users can increment or decrement the date referenced by \`dateValue\` property
by using the following shortcuts:

- [PAGEDOWN] - Decrements the corresponding day of the month by one
- [SHIFT] + [PAGEDOWN] - Decrements the corresponding month by one
- [SHIFT] + [CTRL] + [PAGEDOWN] - Decrements the corresponding year by one
- [PAGEUP] - Increments the corresponding day of the month by one
- [SHIFT] + [PAGEUP] - Increments the corresponding month by one
- [SHIFT] + [CTRL] + [PAGEUP] - Increments the corresponding year by one

### Calendar types
The component supports several calendar types - Gregorian, Buddhist, Islamic, Japanese and Persian.
By default the Gregorian Calendar is used. In order to use the Buddhist, Islamic, Japanese or Persian calendar,
you need to set the \`primaryCalendarType\` property and import one or more of the following modules:

\`import "@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js";\`

\`import "@ui5/webcomponents-localization/dist/features/calendar/Islamic.js";\`

\`import "@ui5/webcomponents-localization/dist/features/calendar/Japanese.js";\`

\`import "@ui5/webcomponents-localization/dist/features/calendar/Persian.js";\`

Or, you can use the global configuration and set the \`calendarType\` key:

\`\`\`html
<script data-id="sap-ui-config" type="application/json">
	{
		"calendarType": "Japanese"
	}
<script>
\`\`\`



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"DatePicker",props:{valueStateMessage:{defaultValue:null,description:`Defines the value state message that will be displayed as pop up under the component.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The \`valueStateMessage\` would be displayed,
when the component is in \`Information\`, \`Warning\` or \`Error\` value state.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:"Fired when the input operation has finished by pressing Enter or on focusout.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<DatePickerDomRef, DatePickerChangeEventDetail>) => void"}},onInput:{defaultValue:null,description:"Fired when the value of the component is changed at each key stroke.",name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<DatePickerDomRef, DatePickerInputEventDetail>) => void"}},onValueStateChange:{defaultValue:null,description:`Fired before the value state of the component is updated internally.
The event is preventable, meaning that if it's default action is
prevented, the component will not update the value state.`,name:"onValueStateChange",required:!1,type:{name:"(event: Ui5CustomEvent<DatePickerDomRef, DatePickerValueStateChangeEventDetail>) => void"}},accessibleName:{defaultValue:null,description:"Defines the aria-label attribute for the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as disabled.",name:"disabled",required:!1,type:{name:"boolean"}},formatPattern:{defaultValue:null,description:"Determines the format, displayed in the input field.",name:"formatPattern",required:!1,type:{name:"string"}},hideWeekNumbers:{defaultValue:{value:"false"},description:`Defines the visibility of the week numbers column.

**Note:** For calendars other than Gregorian,
the week numbers are not displayed regardless of what is set.`,name:"hideWeekNumbers",required:!1,type:{name:"boolean"}},maxDate:{defaultValue:null,description:`Determines the maximum date available for selection.

**Note:** If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (YYYY-MM-dd).`,name:"maxDate",required:!1,type:{name:"string"}},minDate:{defaultValue:null,description:`Determines the minimum date available for selection.

**Note:** If the formatPattern property is not set, the minDate value must be provided in the ISO date format (YYYY-MM-dd).`,name:"minDate",required:!1,type:{name:"string"}},name:{defaultValue:null,description:`Determines the name with which the component will be submitted in an HTML form.

**Important:** For the \`name\` property to have effect, you must add the following import to your project:
\`import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";\`

**Note:** When set, a native \`input\` HTML element
will be created inside the component so that it can be submitted as
part of an HTML form. Do not use this property unless you need to submit a form.`,name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"undefined"},description:`Defines a short hint, intended to aid the user with data entry when the
component has no value.

**Note:** When no placeholder is set, the format pattern is displayed as a placeholder.
Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.`,name:"placeholder",required:!1,type:{name:"string"}},primaryCalendarType:{defaultValue:{value:"undefined"},description:`Sets a calendar type used for display.
If not set, the calendar type of the global configuration is used.`,name:"primaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},readonly:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as read-only.",name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},secondaryCalendarType:{defaultValue:{value:"undefined"},description:`Defines the secondary calendar type.
If not set, the calendar will only show the primary calendar type.`,name:"secondaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},value:{defaultValue:null,description:"Defines a formatted date value.",name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Warning"'},{value:'"None"'},{value:'"Error"'},{value:'"Success"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Error"'},{value:'"Information"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as D};
