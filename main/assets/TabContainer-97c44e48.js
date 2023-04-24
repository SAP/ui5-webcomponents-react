import{j as t}from"./jsx-runtime-b5ed1ca8.js";import{C as d,A as s}from"./DomRefTable.module-20a17752.js";import{D as l}from"./DocsHeader-5d2e6e6d.js";import{F as h}from"./Footer-a12681c7.js";import"./index-64f120e9.js";import{D as b}from"./DomRefTable-e2c269b0.js";import{S as c}from"./SubcomponentsSection-6138f2fc.js";import{M as u,C as r,a as o}from"./chunk-PCJTTTQV-dd96a6af.js";import{a as x}from"./index-efdeee6c.js";import{C as f,D as p,W as T,a as j,T as S}from"./TabContainer.stories-6497a0ed.js";import{u as m}from"./index-de4e61b4.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-a429ae4e.js";import"./inheritsLoose-93e09647.js";import"./index-7e57121b.js";import"./iframe-0ab8965f.js";import"../sb-preview/runtime.mjs";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d0e572fe.js";import"./utils-d29e59c7.js";import"./useIsomorphicLayoutEffect-4a8db993.js";import"./slot-76e48863.js";import"./Icon-46afc304.js";import"./Icons-5b18f7d2.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./class-map-fc32fe45.js";import"./Button-3c41aad1.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./index-336951e7.js";import"./clsx.m-1229b3e0.js";import"./index-d460da36.js";import"./ThemingParameters-f4b4144e.js";import"./Import-23c9a4e6.js";import"./TableOfContent-3517adb9.js";import"./index-fe573db0.js";import"./Link-20aa90b6.js";import"./WrappingType-b81e595a.js";import"./index-a140c2c7.js";import"./Label-51e2d33c.js";import"./index-7bf58b0a.js";import"./index-e9d3835d.js";import"./Popover-f0a3f494.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-2a26d007.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-e40faf20.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-02d033ae.js";import"./react-18-1e96cd1b.js";import"./mapValues-30a52a16.js";import"./_baseForOwn-931ad773.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-e1b46df2.js";import"./_baseUniq-5a3eb61c.js";import"./index-356e4a49.js";import"./ListItem-541883fa.js";import"./ListItemBase-7c4b6958.js";import"./ItemNavigation-01761450.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-f42ddeb7.js";import"./RadioButton-07abdc79.js";import"./ValueState-2c5e5904.js";import"./CheckBox-826a6744.js";import"./accept-9744f30a.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-78d167a6.js";import"./CustomListItem-82d61017.js";import"./slideUp-745debd3.js";import"./animate-1a16ba20.js";import"./AnimationMode-9cec4b20.js";import"./slim-arrow-up-7b94d03f.js";import"./slim-arrow-down-09ec0732.js";import"./ResponsivePopover-5dcc0ce6.js";import"./Dialog-e0d10674.js";import"./Title-a54d13df.js";import"./ResponsivePopoverCommon.css-ac857d16.js";import"./add-6537f61a.js";import"./employee-0153a597.js";import"./settings-456fc51a.js";const w="The `Tab` represents a selectable item inside a `Tabcontainer`. It defines both the item in the tab strip (top part of the `Tabcontainer`) and the content that is presented to the user once the tab is selected\n",C="The `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`\n",g=`## Structure

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
`,D=[{name:"allItems",readonly:"true",visibility:"public",type:"undefined",description:'Returns all slotted tabs and their subTabs in a flattened array. The order of tabs is depth-first. For example, given the following slotted elements: <code> <ui5-tabcontainer> <ui5-tab id="First" text="First"> ... <ui5-tab slot="subTabs" id="Nested" text="Nested">...</ui5-tab> </ui5-tab> <ui5-tab id="Second" text="Second">...</ui5-tab> <ui5-tab-separator id="sep"></ui5-tab-separator> <ui5-tab id="Third" text="Third">...</ui5-tab> </ui5-tabcontainer> </code> Calling <code>allItems</code> on this TabContainer will return the instances in the following order: <code>[ ui5-tab#First, ui5-tab#Nested, ui5-tab#Second, ui5-tab-separator#sep, ui5-tab#Third ]</code>'}];function pe(i={}){const{wrapper:n}=Object.assign({},m(),i.components);return n?t.jsx(n,Object.assign({},i,{children:t.jsx(a,{})})):a();function a(){const e=Object.assign({h2:"h2",h1:"h1",p:"p"},m(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(u,{of:f}),`
`,t.jsx(l,{}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(r,{of:p}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(d,{of:p}),`
`,t.jsx(o,{children:g}),`
`,t.jsx(b,{rows:D}),`
`,t.jsx(e.h1,{id:"more-examples",children:"More Examples"}),`
`,t.jsx(e.h2,{id:"tabcontainer-with-tabseparator",children:"TabContainer with TabSeparator"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx("code",{children:"TabSeparator"})," represents a vertical line to separate tabs inside a ",t.jsx("code",{children:"TabContainer"})]}),`
`,t.jsx(r,{of:T}),`
`,t.jsx(e.h2,{id:"tabcontainer-with-nested-tabs",children:"TabContainer with nested Tabs"}),`
`,t.jsx(r,{of:j}),`
`,t.jsx(o,{children:c}),`
`,t.jsx(e.h2,{id:"tab",children:"Tab"}),`
`,t.jsx(o,{children:w}),`
`,t.jsx(s,{of:x}),`
`,t.jsx(e.h2,{id:"tabseparator",children:"TabSeparator"}),`
`,t.jsx(o,{children:C}),`
`,t.jsx(s,{of:S}),`
`,t.jsx(h,{})]})}}export{pe as default};
//# sourceMappingURL=TabContainer-97c44e48.js.map
