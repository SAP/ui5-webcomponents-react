import{M as l,C as u,j as h,a as y}from"./index-43922050.js";import{D as r}from"./index-51e3256a.js";import{C as p}from"./Persian-f1eb0d8f.js";import"./Gregorian-90c80ed4.js";import{V as m}from"./ValueState-ab6838cc.js";import{A as f}from"./DomRefTable.module-f90a1284.js";import{D as g}from"./DocsHeader-5b523b99.js";import{F as b}from"./Footer-cb200abc.js";import{j as e,a as D,F as k}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{D as v}from"./DomRefTable-a2e7e5aa.js";import{u as s}from"./index-4fb8b842.js";import"./iframe-ea3a93fd.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./DatePicker-14fb6869.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-c82262ef.js";import"./MarkedEvents-8627ed01.js";import"./Calendar-37533678.js";import"./UI5Element-eb05fed8.js";import"./Keys-3acbae73.js";import"./Integer-d9976c13.js";import"./LocaleData-2e7e992e.js";import"./slim-arrow-left-cfc0eea8.js";import"./Icons-8637bdfe.js";import"./slim-arrow-right-ccfb1ccc.js";import"./Button-8cfaf72a.js";import"./Device-208919c6.js";import"./class-map-5d8e4b2b.js";import"./style-map-77d201d2.js";import"./ValueState-2c5e5904.js";import"./decline-0a22f866.js";import"./HasPopup-47461347.js";import"./ResponsivePopover-5610aa89.js";import"./PopupsCommon.css-f9f23bc7.js";import"./FocusableElements-44b79fcc.js";import"./ResizeHandler-a25182c3.js";import"./MediaRange-25b98f31.js";import"./Popover-3083ea67.js";import"./Dialog-fddee574.js";import"./Title-cb40e614.js";import"./WrappingType-b81e595a.js";import"./Input-0fd7f96f.js";import"./Suggestions.css-6778036a.js";import"./ResponsivePopoverCommon.css-0f307ec8.js";import"./ValueStateMessage.css-b9603d7a.js";import"./chunk-G4YQS2SV-a125d30f.js";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-fe4dc3ff.js";import"./index-4f072a6d.js";import"./index-1d945bd3.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-95e3d886.js";import"./TableOfContent-7b57719c.js";import"./index-f57edce5.js";import"./index-b2c1542f.js";import"./Label-6255dce9.js";import"./Footer.module-c4f3b823.js";import"./index-d9205786.js";const P=`## Usage

The user can enter a date by:

*   Using the calendar that opens in a popup
*   Typing it in directly in the input field

  
  
When the user makes an entry and presses the enter key, the calendar shows the corresponding date. When the user directly triggers the calendar display, the actual date is displayed.

## Formatting

If a date is entered by typing it into the input field, it must fit to the used date format.  
  
Supported format options are pattern-based on Unicode LDML Date Format notation. For more information, see <ui5-link target="_blank" href="http://unicode.org/reports/tr35/#Date_Field_Symbol_Table" class="api-table-content-cell-link">UTS #35: Unicode Locale Data Markup Language</ui5-link>.  
  
For example, if the \`format-pattern\` is "yyyy-MM-dd", a valid value string is "2015-07-30" and the same is displayed in the input.

## Keyboard Handling

The \`DatePicker\` provides advanced keyboard handling. If the \`DatePicker\` is focused, you can open or close the drop-down by pressing \`F4\`, \`ALT+UP\` or \`ALT+DOWN\` keys. Once the drop-down is opened, you can use the \`UP\`, \`DOWN\`, \`LEFT\`, \`RIGHT\` arrow keys to navigate through the dates and select one by pressing the \`Space\` or \`Enter\` keys. Moreover you can use TAB to reach the buttons for changing month and year.  
If the \`DatePicker\` input field is focused and its corresponding picker dialog is not opened, then users can increment or decrement the date referenced by \`dateValue\` property by using the following shortcuts:  

*   \\[PAGEDOWN\\] - Decrements the corresponding day of the month by one
*   \\[SHIFT\\] + \\[PAGEDOWN\\] - Decrements the corresponding month by one
*   \\[SHIFT\\] + \\[CTRL\\] + \\[PAGEDOWN\\] - Decrements the corresponding year by one
*   \\[PAGEUP\\] - Increments the corresponding day of the month by one
*   \\[SHIFT\\] + \\[PAGEUP\\] - Increments the corresponding month by one
*   \\[SHIFT\\] + \\[CTRL\\] + \\[PAGEUP\\] - Increments the corresponding year by one

## Calendar types

The component supports several calendar types - Gregorian, Buddhist, Islamic, Japanese and Persian. By default the Gregorian Calendar is used. In order to use the Buddhist, Islamic, Japanese or Persian calendar, you need to set the \`primaryCalendarType\` property and import one or more of the following modules:  
  
\`import "@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js";\`  
\`import "@ui5/webcomponents-localization/dist/features/calendar/Islamic.js";\`  
\`import "@ui5/webcomponents-localization/dist/features/calendar/Japanese.js";\`  
\`import "@ui5/webcomponents-localization/dist/features/calendar/Persian.js";\`  
  
Or, you can use the global configuration and set the \`calendarType\` key:  

\`\`\`
<script data-id="sap-ui-config" type="application/json">
{ "calendarType": "Japanese"
}
<\/script>
\`\`\``,T=[{name:"dateValue",readonly:"true",visibility:"public",type:"Date",description:"Currently selected date represented as a Local JavaScript Date instance."},{name:"closePicker",visibility:"public",description:"Closes the picker."},{name:"formatValue",visibility:"public",returnValue:{type:"string",description:"The date as string"},parameters:[{name:"date",type:"object",optional:!1,description:"A Java Script date object to be formatted as string"}],description:"Formats a Java Script date object into a string representing a locale date according to the <code>formatPattern</code> property of the DatePicker instance"},{name:"isInValidRange",visibility:"public",returnValue:{type:"boolean"},parameters:[{name:"value",type:"string",optional:!0,defaultValue:'""',description:"A value to be checked"}],description:"Checks if a date is between the minimum and maximum date."},{name:"isOpen",visibility:"public",returnValue:{type:"boolean",description:"true if the picker is open, false otherwise"},description:"Checks if the picker is open."},{name:"isValid",visibility:"public",returnValue:{type:"boolean"},parameters:[{name:"value",type:"string",optional:!0,defaultValue:'""',description:"A value to be tested against the current date format"}],description:"Checks if a value is valid against the current date format of the DatePicker."},{name:"openPicker",visibility:"public",returnValue:{type:"Promise",description:"Resolves when the picker is open"},description:"Opens the picker."}];function S(t={}){const{wrapper:o}=Object.assign({},s(),t.components);return o?e(o,{...t,children:e(i,{})}):i();function i(){const a=Object.assign({h2:"h2"},s(),t.components);return D(k,{children:[e(l,{title:"Inputs / DatePicker",component:r,argTypes:{valueStateMessage:{control:{disable:!0}}},args:{primaryCalendarType:p.Gregorian,valueState:m.None}}),`
`,e(g,{}),`
`,e("br",{}),`
`,e(a.h2,{children:"Example"}),`
`,e(u,{children:e(h,{name:"Default",children:d=>e(r,{...d})})}),`
`,e(a.h2,{children:"Properties"}),`
`,e(f,{story:"Default"}),`
`,e(y,{children:P}),`
`,e(v,{rows:T}),`
`,e(b,{})]})}}const c=t=>e(r,{...t});c.storyName="Default";c.parameters={storySource:{source:`args => {
  return <DatePicker {...args} />;
}`}};const n={title:"Inputs / DatePicker",component:r,args:{primaryCalendarType:p.Gregorian,valueState:m.None},argTypes:{valueStateMessage:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:S};const Xe=["defaultStory"];export{Xe as __namedExportsOrder,n as default,c as defaultStory};
//# sourceMappingURL=DatePicker.stories-8453e0b0.js.map
