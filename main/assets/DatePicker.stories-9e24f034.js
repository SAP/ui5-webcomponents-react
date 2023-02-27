import{M as l,C as u,i as h,a as y}from"./index-08f5a92a.js";import{D as r}from"./index-96180959.js";import{C as p}from"./Persian-058175d2.js";import"./Gregorian-8207d62f.js";import{V as m}from"./ValueState-ab6838cc.js";import{A as f}from"./DomRefTable.module-bd2f6310.js";import{D as g}from"./DocsHeader-7b277ff6.js";import{F as b}from"./Footer-a200614f.js";import{j as e,a as D,F as k}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{D as v}from"./DomRefTable-693c15e9.js";import{u as s}from"./index-4fb8b842.js";import"./iframe-baaa6734.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./DatePicker-c596e330.js";import"./withWebComponent-63dd52a0.js";import"./utils-ed90fb1b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./UI5Element-727d48d7.js";import"./AriaLabelHelper-dee23f38.js";import"./MarkedEvents-f33713fa.js";import"./Calendar-61c19bb0.js";import"./fastNavigation-ebf07f1c.js";import"./Keys-50a1cb5a.js";import"./Integer-a72984d1.js";import"./class-map-abcca105.js";import"./FocusableElements-5a723910.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-c56abc92.js";import"./MediaRange-25b98f31.js";import"./style-map-7b3eb5df.js";import"./LocaleData-d0e192f7.js";import"./slim-arrow-left-1b0d26d1.js";import"./Icons-5bcf1e3f.js";import"./slim-arrow-right-a1b07349.js";import"./Button-e1b15b5b.js";import"./ValueState-2c5e5904.js";import"./decline-ff534003.js";import"./HasPopup-47461347.js";import"./ResponsivePopover-2f2e4816.js";import"./Popover-5336e3a5.js";import"./Dialog-fe19aed2.js";import"./Title-18f6d5a1.js";import"./WrappingType-b81e595a.js";import"./Input-feb6db44.js";import"./Suggestions.css-1f63061d.js";import"./ResponsivePopoverCommon.css-bc05f183.js";import"./ValueStateMessage.css-6e86a950.js";import"./chunk-4XCFV5WA-12e22cb0.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./index-c79180df.js";import"./index-6923d62a.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-e249b0b6.js";import"./TableOfContent-b905a526.js";import"./index-1220256a.js";import"./index-998f859a.js";import"./Label-6707bdfc.js";import"./Media-6b270b80.js";import"./index-65416cbf.js";const P=`## Usage

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
\`\`\``,T=[{name:"dateValue",readonly:"true",visibility:"public",type:"Date",description:"Currently selected date represented as a Local JavaScript Date instance."},{name:"closePicker",visibility:"public",description:"Closes the picker."},{name:"formatValue",visibility:"public",returnValue:{type:"string",description:"The date as string"},parameters:[{name:"date",type:"object",optional:!1,description:"A Java Script date object to be formatted as string"}],description:"Formats a Java Script date object into a string representing a locale date according to the <code>formatPattern</code> property of the DatePicker instance"},{name:"isInValidRange",visibility:"public",returnValue:{type:"boolean"},parameters:[{name:"value",type:"string",optional:!0,defaultValue:'""',description:"A value to be checked"}],description:"Checks if a date is between the minimum and maximum date."},{name:"isOpen",visibility:"public",returnValue:{type:"boolean",description:"true if the picker is open, false otherwise"},description:"Checks if the picker is open."},{name:"isValid",visibility:"public",returnValue:{type:"boolean"},parameters:[{name:"value",type:"string",optional:!0,defaultValue:'""',description:"A value to be tested against the current date format"}],description:"Checks if a value is valid against the current date format of the DatePicker."},{name:"openPicker",visibility:"public",returnValue:{type:"Promise",description:"Resolves when the picker is open"},description:"Opens the picker."}];function S(t={}){const{wrapper:o}=Object.assign({},s(),t.components);return o?e(o,{...t,children:e(a,{})}):a();function a(){const i=Object.assign({h2:"h2"},s(),t.components);return D(k,{children:[e(l,{title:"Inputs / DatePicker",component:r,argTypes:{valueStateMessage:{control:{disable:!0}}},args:{primaryCalendarType:p.Gregorian,valueState:m.None}}),`
`,e(g,{}),`
`,e("br",{}),`
`,e(i.h2,{children:"Example"}),`
`,e(u,{children:e(h,{name:"Default",children:d=>e(r,{...d})})}),`
`,e(i.h2,{children:"Properties"}),`
`,e(f,{story:"Default"}),`
`,e(y,{children:P}),`
`,e(v,{rows:T}),`
`,e(b,{})]})}}const c=t=>e(r,{...t});c.storyName="Default";c.parameters={storySource:{source:`args => {
  return <DatePicker {...args} />;
}`}};const n={title:"Inputs / DatePicker",component:r,args:{primaryCalendarType:p.Gregorian,valueState:m.None},argTypes:{valueStateMessage:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:S};const Be=["defaultStory"];export{Be as __namedExportsOrder,n as default,c as defaultStory};
//# sourceMappingURL=DatePicker.stories-9e24f034.js.map
