import{j as t,a as p,F as l}from"./jsx-runtime-670450c2.js";import{C as h,A as s}from"./DomRefTable.module-f1e04cd9.js";import{D as b}from"./DocsHeader-dd0cab9c.js";import{F as c}from"./Footer-6f037717.js";import"./index-f1f749bf.js";import{D as u}from"./DomRefTable-557d7ae6.js";import{S as f}from"./SubcomponentsSection-6138f2fc.js";import{M as T,C as r,a as o}from"./chunk-PCJTTTQV-0758a203.js";import{a as S}from"./index-3a07f8d7.js";import{C as w,D as m,W as C,a as g,T as x}from"./TabContainer.stories-f057d9f5.js";import{u as d}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-53f0c945.js";import"./iframe-5dc614e4.js";import"../sb-preview/runtime.mjs";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-76e48863.js";import"./Icon-27a81412.js";import"./Icons-5b18f7d2.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./class-map-6d48ebd3.js";import"./Button-fa05cadd.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-44cc9c22.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-f6fac1d6.js";import"./TableOfContent-51c2772d.js";import"./index-b6d55309.js";import"./Link-3b8926df.js";import"./WrappingType-b81e595a.js";import"./index-b86e29db.js";import"./Label-528b8168.js";import"./index-96c5f47c.js";import"./index-f8732276.js";import"./Popover-824d4d7c.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7f720278.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-382f34a2.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./ListItem-843af2c9.js";import"./ListItemBase-780d7053.js";import"./ItemNavigation-01761450.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-c375cd19.js";import"./RadioButton-412fbbc0.js";import"./ValueState-2c5e5904.js";import"./CheckBox-f0072def.js";import"./accept-9744f30a.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-78d167a6.js";import"./CustomListItem-2bcbcefe.js";import"./slideUp-745debd3.js";import"./animate-1a16ba20.js";import"./AnimationMode-9cec4b20.js";import"./slim-arrow-up-7b94d03f.js";import"./slim-arrow-down-09ec0732.js";import"./ResponsivePopover-152ab708.js";import"./Dialog-610dd06c.js";import"./Title-0440ec3f.js";import"./ResponsivePopoverCommon.css-0466170a.js";import"./add-6537f61a.js";import"./employee-0153a597.js";import"./settings-456fc51a.js";const D="The `Tab` represents a selectable item inside a `Tabcontainer`. It defines both the item in the tab strip (top part of the `Tabcontainer`) and the content that is presented to the user once the tab is selected\n",v="The `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`\n",y=`## Structure

The \`TabContainer\` can hold two types of entities:

- \`Tab\` - contains all the information on an item (text and icon)
- \`TabSeparator\` - used to separate tabs with a line

## Hierarchies

Multiple sub tabs could be placed underneath one main tab. Nesting allows deeper hierarchies with indentations to indicate the level of each nested tab. When a tab has both sub tabs and own content its click area is split to allow the user to display the content or alternatively to expand / collapse the list of sub tabs.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`TabContainer\` exposes the following CSS Shadow Parts:

- content - Used to style the content of the component

## Keyboard Handling

### Fast Navigation

This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \`Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up\`. In order to use this functionality, you need to import the following module: \`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`
`,F=[{name:"allItems",readonly:"true",visibility:"public",type:"undefined",description:'Returns all slotted tabs and their subTabs in a flattened array. The order of tabs is depth-first. For example, given the following slotted elements: <code> <ui5-tabcontainer> <ui5-tab id="First" text="First"> ... <ui5-tab slot="subTabs" id="Nested" text="Nested">...</ui5-tab> </ui5-tab> <ui5-tab id="Second" text="Second">...</ui5-tab> <ui5-tab-separator id="sep"></ui5-tab-separator> <ui5-tab id="Third" text="Third">...</ui5-tab> </ui5-tabcontainer> </code> Calling <code>allItems</code> on this TabContainer will return the instances in the following order: <code>[ ui5-tab#First, ui5-tab#Nested, ui5-tab#Second, ui5-tab-separator#sep, ui5-tab#Third ]</code>'}];function le(i={}){const{wrapper:a}=Object.assign({},d(),i.components);return a?t(a,Object.assign({},i,{children:t(n,{})})):n();function n(){const e=Object.assign({h2:"h2",h1:"h1",p:"p"},d(),i.components);return p(l,{children:[t(T,{of:w}),`
`,t(b,{}),`
`,t("br",{}),`
`,t(e.h2,{id:"example",children:"Example"}),`
`,t(r,{of:m}),`
`,t(e.h2,{id:"properties",children:"Properties"}),`
`,t(h,{of:m}),`
`,t(o,{children:y}),`
`,t(u,{rows:F}),`
`,t(e.h1,{id:"more-examples",children:"More Examples"}),`
`,t(e.h2,{id:"tabcontainer-with-tabseparator",children:"TabContainer with TabSeparator"}),`
`,p(e.p,{children:["The ",t("code",{children:"TabSeparator"})," represents a vertical line to separate tabs inside a ",t("code",{children:"TabContainer"})]}),`
`,t(r,{of:C}),`
`,t(e.h2,{id:"tabcontainer-with-nested-tabs",children:"TabContainer with nested Tabs"}),`
`,t(r,{of:g}),`
`,t(o,{children:f}),`
`,t(e.h2,{id:"tab",children:"Tab"}),`
`,t(o,{children:D}),`
`,t(s,{of:S}),`
`,t(e.h2,{id:"tabseparator",children:"TabSeparator"}),`
`,t(o,{children:v}),`
`,t(s,{of:x}),`
`,t(c,{})]})}}export{le as default};
//# sourceMappingURL=TabContainer-c9a77023.js.map
