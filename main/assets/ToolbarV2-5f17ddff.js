import{j as o}from"./jsx-runtime-d079401a.js";import{M as m,C as c,b as e}from"./chunk-S4VUQJ4A-b0544cdd.js";import{C as b,A as r}from"./DomRefTable.module-5f18ef7e.js";import{D as l}from"./DocsHeader-55be09a7.js";import{F as h}from"./Footer-cc98583f.js";import"./index-f1f2c4b1.js";import{S as d}from"./SubcomponentsSection-6138f2fc.js";import{C as u,D as s,T,a as x,b as j,c as f,d as w}from"./ToolbarV2.stories-11d68f50.js";import{u as p}from"./index-59d6410c.js";import"./iframe-36745b35.js";import"../sb-preview/runtime.js";import"./index-92d824d3.js";import"./index-c74c9f7f.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./react-jss.esm-2e5f50f2.js";import"./index-0679a74a.js";import"./UI5Element-fe43d284.js";import"./CustomElementsScopeUtils-7e643eaa.js";import"./withWebComponent-40b4b429.js";import"./utils-64df43e3.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-4b8e6c3e.js";import"./Icons-1d0bcfc0.js";import"./decline-6c7fc0a2.js";import"./i18n-defaults-bdef1cce.js";import"./information-5d7a8806.js";import"./alert-1b225bb9.js";import"./class-map-c90b90b7.js";import"./Button-ca10e4c6.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-d5195a49.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-0dcb0e40.js";import"./index-6fa0cca6.js";import"./Integer-f7f172c9.js";import"./index-05c396f9.js";import"./Avatar-b61e760c.js";import"./ResizeHandler-c2d89e75.js";import"./employee-6f8dc3b6.js";import"./index-80b61951.js";import"./index-1ae39bc1.js";import"./Link-39a6449b.js";import"./WrappingType-b81e595a.js";import"./index-7122209e.js";import"./TableOfContent-d291d6ff.js";import"./index-1eb3544d.js";import"./Label-44520d2b.js";import"./index-c66d526a.js";import"./index-8987a0fb.js";import"./Popover-e0a9892e.js";import"./PopupUtils-6f7aa5d8.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-20392ac5.js";import"./FocusableElements-81dc3a15.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-26bcc635.js";import"./BrowserScrollbar.css-6733af99.js";import"./ValueState-2c5e5904.js";import"./Select-7dbcad82.js";import"./InvisibleMessage-dcf9afbd.js";import"./slim-arrow-down-b87cbef6.js";import"./ListItemBase-a954caa9.js";import"./ItemNavigation-6fcc55ad.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-9ca5d237.js";import"./ResponsivePopover-a1211aea.js";import"./Dialog-524beb63.js";import"./Title-01167e9e.js";import"./StandardListItem-4d8bc973.js";import"./ListItem-8f00fe18.js";import"./RadioButton-2fcb52b7.js";import"./CheckBox-e1cfdb7e.js";import"./accept-9e169369.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-bfe8f962.js";import"./ResponsivePopoverCommon.css-fd1b094e.js";import"./ValueStateMessage.css-a9dd0528.js";import"./ValueState-ab6838cc.js";import"./overflow-a5d0f7fd.js";const S=`## Keyboard Handling

The \`ToolbarV2\` provides advanced keyboard handling.

- The control is not interactive, but can contain of interactive elements
- \\[TAB\\] - iterates through elements
`,g="**Since:** 1.19.0\n**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\nThe `ToolbarButton` represents an abstract action, used in the `ToolbarV2`.\n",C="**Since:** 1.19.0\n**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\nThe `ToolbarSelect` component is used to create a toolbar drop-down list. The items inside the `ToolbarSelect` define the available options by using the `ToolbarSelect-option` component.\n",D="**Since:** 1.19.0\n**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\nThe `ToolbarSelectOption` component defines the content of an option in the `ToolbarSelect`\n",k=`**Since:** 1.19.0
**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).

The \`ToolbarSeparatorV2\` is an element, used for visual separation between two elements. It takes no space in calculating toolbar items width
`,v=`**Since:** 1.19.0
**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).

The \`ToolbarSpacerV2\` is an element, used for taking needed space for toolbar items to take 100% width. It takes no space in calculating toolbar items width
`;function ct(n={}){const{wrapper:i}=Object.assign({},p(),n.components);return i?o.jsx(i,Object.assign({},n,{children:o.jsx(a,{})})):a();function a(){const t=Object.assign({h2:"h2"},p(),n.components);return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:u}),`
`,o.jsx(l,{since:"1.19.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(c,{of:s}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(b,{of:s}),`
`,o.jsx(e,{children:S}),`
`,o.jsx(e,{children:d}),`
`,o.jsx(t.h2,{id:"toolbarbutton",children:"ToolbarButton"}),`
`,o.jsx(e,{children:g}),`
`,o.jsx(r,{of:T}),`
`,o.jsx(t.h2,{id:"toolbarselect",children:"ToolbarSelect"}),`
`,o.jsx(e,{children:C}),`
`,o.jsx(r,{of:x}),`
`,o.jsx(t.h2,{id:"toolbarselectoption",children:"ToolbarSelectOption"}),`
`,o.jsx(e,{children:D}),`
`,o.jsx(r,{of:j}),`
`,o.jsx(t.h2,{id:"toolbarseparatorv2",children:"ToolbarSeparatorV2"}),`
`,o.jsx(e,{children:k}),`
`,o.jsx(r,{of:f}),`
`,o.jsx(t.h2,{id:"toolbarspacerv2",children:"ToolbarSpacerV2"}),`
`,o.jsx(e,{children:v}),`
`,o.jsx(r,{of:w}),`
`,o.jsx(h,{})]})}}export{ct as default};
//# sourceMappingURL=ToolbarV2-5f17ddff.js.map
