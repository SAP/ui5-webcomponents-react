import{j as t,a as p,F as l}from"./jsx-runtime-670450c2.js";import{C as h,A as s}from"./DomRefTable.module-5bee02fe.js";import{D as b}from"./DocsHeader-19fe567c.js";import{F as c}from"./Footer-4f41da50.js";import"./index-f1f749bf.js";import{D as u}from"./DomRefTable-4a33de09.js";import{S as f}from"./SubcomponentsSection-6138f2fc.js";import{M as T,C as r,a as o}from"./chunk-PCJTTTQV-5f64d55f.js";import{a as S}from"./index-0a5a979f.js";import{C as w,D as m,W as C,a as g,T as x}from"./TabContainer.stories-7cece7fc.js";import{u as d}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-53f39dcd.js";import"./iframe-3ebe0622.js";import"../sb-preview/runtime.mjs";import"./UI5Element-5e77b351.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-76e48863.js";import"./Icon-a70637b5.js";import"./Icons-85b0e9dd.js";import"./decline-07b4d490.js";import"./i18n-defaults-80781f7e.js";import"./information-bce3ba82.js";import"./class-map-6d48ebd3.js";import"./Button-35e7f923.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-2bd17005.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-c34e5229.js";import"./TableOfContent-083bb516.js";import"./index-360f0083.js";import"./Link-8808efba.js";import"./WrappingType-b81e595a.js";import"./index-53d2517e.js";import"./Label-e24223e9.js";import"./index-96c5f47c.js";import"./index-cc738ad9.js";import"./Popover-eac39f76.js";import"./Integer-f7f172c9.js";import"./PopupUtils-d0ec75b7.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-ab897c30.js";import"./FocusableElements-2da74965.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-b2c643e0.js";import"./ResizeHandler-653daa1f.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./ListItem-3c89af96.js";import"./ListItemBase-b73c7fed.js";import"./ItemNavigation-316291cb.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-1df19c4b.js";import"./RadioButton-17175673.js";import"./ValueState-2c5e5904.js";import"./CheckBox-c006676c.js";import"./accept-0670a13e.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-24b9c100.js";import"./CustomListItem-10ca0c40.js";import"./slideUp-745debd3.js";import"./animate-1a16ba20.js";import"./AnimationMode-0903adf5.js";import"./slim-arrow-up-57f1a1ab.js";import"./slim-arrow-down-cb00f67b.js";import"./ResponsivePopover-fe818bf5.js";import"./Dialog-0e44ed8a.js";import"./Title-07ee6300.js";import"./ResponsivePopoverCommon.css-19238fee.js";import"./add-ae401619.js";import"./employee-f8bb953b.js";import"./settings-16ef212d.js";const D="The `Tab` represents a selectable item inside a `Tabcontainer`. It defines both the item in the tab strip (top part of the `Tabcontainer`) and the content that is presented to the user once the tab is selected\n",v="The `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`\n",y=`## Structure

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
//# sourceMappingURL=TabContainer-7ef424c0.js.map
