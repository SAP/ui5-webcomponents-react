import{M as u,C as d,e as y,b as f}from"./chunk-S4VUQJ4A-3c2f3b23.js";import{D as r}from"./index-db7f8e5c.js";import{C as s}from"./Persian-f073c1d5.js";import"./Gregorian-0c2e63b9.js";import{V as m}from"./ValueState-ab6838cc.js";import{A as h}from"./DomRefTable.module-be765b0b.js";import{D as g}from"./DocsHeader-33a6d238.js";import{F as b}from"./Footer-ae2f9e22.js";import{j as e}from"./jsx-runtime-d079401a.js";import"./index-f1f2c4b1.js";import{D}from"./DomRefTable-77587eab.js";import{u as p}from"./index-59d6410c.js";import"./iframe-47dd360b.js";import"../sb-preview/runtime.js";import"./index-410c64f5.js";import"./index-c74c9f7f.js";import"./mapValues-6da481dc.js";import"./_baseForOwn-62af832b.js";import"./_baseUniq-27dbdc21.js";import"./index-356e4a49.js";import"./withWebComponent-70ea33bf.js";import"./utils-eb830979.js";import"./CustomElementsScopeUtils-a6667bf6.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./UI5Element-9ae3ac4a.js";import"./Calendar-b7ebd0a7.js";import"./Icon-085ae741.js";import"./Icons-aa504494.js";import"./slot-76e48863.js";import"./Integer-f7f172c9.js";import"./LocaleData-11ff68d9.js";import"./slim-arrow-left-21a1b625.js";import"./slim-arrow-right-562fbac6.js";import"./class-map-a35dc276.js";import"./i18n-defaults-edeeca68.js";import"./style-map-0570471d.js";import"./DatePicker-54ad6a80.js";import"./ValueState-2c5e5904.js";import"./AriaLabelHelper-43a261ec.js";import"./decline-06bf09c2.js";import"./i18n-defaults-bdef1cce.js";import"./HasPopup-47461347.js";import"./Button-bda40b74.js";import"./MarkedEvents-b83081e9.js";import"./ResponsivePopover-3603f824.js";import"./PopupUtils-ebc1cf8a.js";import"./getActiveElement-bcae01ed.js";import"./Popover-f88acbeb.js";import"./PopupsCommon.css-afd5e311.js";import"./FocusableElements-ea9d71fb.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-a1ba39c5.js";import"./MediaRange-25b98f31.js";import"./BrowserScrollbar.css-35e4e851.js";import"./Dialog-6ca0f060.js";import"./information-31cb56bb.js";import"./alert-f95f2d2e.js";import"./Title-9e1fec85.js";import"./WrappingType-b81e595a.js";import"./Input-bfce6809.js";import"./Suggestions.css-07dccdad.js";import"./ResponsivePopoverCommon.css-f284520a.js";import"./ValueStateMessage.css-29f8f350.js";import"./react-jss.esm-2e5f50f2.js";import"./index-ced5aebc.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-dff384db.js";import"./index-8a61021e.js";import"./index-469ab47d.js";import"./Avatar-54e46144.js";import"./employee-bd01b92f.js";import"./index-d72e18a0.js";import"./index-aaf92794.js";import"./Link-27f41eeb.js";import"./index-12e0da73.js";import"./TableOfContent-2959e2e2.js";import"./index-860cea12.js";import"./Label-2351773c.js";import"./index-3186aacb.js";import"./index-33fee2e7.js";const v=`## Usage

The user can enter a date by: Using the calendar that opens in a popup or typing it in directly in the input field (not available for mobile devices). For the \`DateRangePicker\`
`,x=[{name:"endDateValue",readonly:"true",visibility:"public",type:"Date",description:"Returns the end date of the currently selected range as JavaScript Date instance."},{name:"startDateValue",readonly:"true",visibility:"public",type:"Date",description:"Returns the start date of the currently selected range as JavaScript Date instance."},{name:"closePicker",visibility:"public",description:"Closes the picker."},{name:"formatValue",visibility:"public",returnValue:{type:"string",description:"The date as string"},parameters:[{name:"date",type:"Date",optional:!1,description:"A Java Script date object to be formatted as string"}],description:"Formats a Java Script date object into a string representing a locale date according to the <code>formatPattern</code> property of the DatePicker instance"},{name:"isInValidRange",visibility:"public",returnValue:{type:"boolean"},parameters:[{name:"value",type:"string",optional:!0,defaultValue:'""',description:"A value to be checked"}],description:"Checks if a date is between the minimum and maximum date."},{name:"isOpen",visibility:"public",returnValue:{type:"boolean",description:"true if the picker is open, false otherwise"},description:"Checks if the picker is open."},{name:"isValid",visibility:"public",returnValue:{type:"boolean"},parameters:[{name:"value",type:"string",optional:!0,defaultValue:'""',description:"A value to be tested against the current date format"}],description:"Checks if a value is valid against the current date format of the DatePicker."},{name:"openPicker",visibility:"public",returnValue:{type:"Promise",description:"Resolves when the picker is open"},description:"Opens the picker."}];function j(t={}){const{wrapper:o}=Object.assign({},p(),t.components);return o?e.jsx(o,{...t,children:e.jsx(a,{})}):a();function a(){const n=Object.assign({h2:"h2"},p(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Inputs / DateRangePicker",component:r,argTypes:{valueStateMessage:{control:{disable:!0}}},args:{primaryCalendarType:s.Gregorian,valueState:m.None}}),`
`,e.jsx(g,{since:"0.10.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(d,{children:e.jsx(y,{name:"Default",children:l=>e.jsx(r,{...l})})}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(h,{story:"Default"}),`
`,e.jsx(f,{children:v}),`
`,e.jsx(D,{rows:x}),`
`,e.jsx(b,{})]})}}const c=t=>e.jsx(r,{...t});c.storyName="Default";c.parameters={storySource:{source:`args => {
  return <DateRangePicker {...args} />;
}`}};const i={title:"Inputs / DateRangePicker",component:r,args:{primaryCalendarType:s.Gregorian,valueState:m.None},argTypes:{valueStateMessage:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:j};const Ye=["defaultStory"];export{Ye as __namedExportsOrder,i as default,c as defaultStory};
//# sourceMappingURL=DateRangePicker.stories-7f916bcc.js.map
