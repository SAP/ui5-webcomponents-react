import{j as t}from"./jsx-runtime-d079401a.js";import{C as d,b as s}from"./DomRefTable.module-b1ce101a.js";import{D as l}from"./DocsHeader-d731b3d2.js";import{F as h}from"./Footer-9255d95d.js";import"./index-f1f2c4b1.js";import{M as c,C as n,b as i}from"./chunk-S4VUQJ4A-51a616f3.js";import{S as u}from"./SubcomponentsSection-6138f2fc.js";import"./employee-6f8dc3b6.js";import{C as f}from"./index-62c2e818.js";import{G as x}from"./index-2d491918.js";import{S}from"./index-8cd8da72.js";import{C as y,D as a,a as b,G as w}from"./List.stories-401e03c8.js";import{u as p}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-81379d19.js";import"./iframe-a08de9d1.js";import"../sb-preview/runtime.js";import"./UI5Element-fe43d284.js";import"./CustomElementsScopeUtils-7e643eaa.js";import"./withWebComponent-40b4b429.js";import"./utils-64df43e3.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-4b8e6c3e.js";import"./Icons-1d0bcfc0.js";import"./decline-6c7fc0a2.js";import"./i18n-defaults-bdef1cce.js";import"./information-5d7a8806.js";import"./alert-1b225bb9.js";import"./class-map-c90b90b7.js";import"./Button-ca10e4c6.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-d5195a49.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-0dcb0e40.js";import"./index-acec5e94.js";import"./Integer-f7f172c9.js";import"./index-4793c4ac.js";import"./Avatar-b61e760c.js";import"./ResizeHandler-c2d89e75.js";import"./index-f0733477.js";import"./index-72870709.js";import"./Link-39a6449b.js";import"./WrappingType-b81e595a.js";import"./index-43333f43.js";import"./TableOfContent-71ab3ad8.js";import"./index-d529a268.js";import"./Label-44520d2b.js";import"./index-c74c9f7f.js";import"./index-fef1d5ba.js";import"./index-fb3b6a30.js";import"./Popover-e0a9892e.js";import"./PopupUtils-6f7aa5d8.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-20392ac5.js";import"./FocusableElements-81dc3a15.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-26bcc635.js";import"./BrowserScrollbar.css-6733af99.js";import"./index-92d824d3.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./CustomListItem-e6b44855.js";import"./ListItem-8f00fe18.js";import"./ListItemBase-a954caa9.js";import"./ItemNavigation-6fcc55ad.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-9ca5d237.js";import"./RadioButton-2fcb52b7.js";import"./ValueState-2c5e5904.js";import"./CheckBox-e1cfdb7e.js";import"./accept-9e169369.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-bfe8f962.js";import"./GroupHeaderListItem-1642eb17.js";import"./StandardListItem-4d8bc973.js";import"./ValueState-ab6838cc.js";import"./index-33b986dd.js";import"./ProgressIndicator-afbebab5.js";import"./AnimationMode-8b4ee265.js";import"./index-b4ebaee8.js";const g=`A component to be used as custom list item within the \`List\` the same way as the standard \`StandardListItem\`. The component accepts arbitrary HTML content to allow full customization.

### CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`CustomListItem\` exposes the following CSS Shadow Parts:

- native-li - Used to style the main li tag of the list item
- content - Used to style the content area of the list item
- detail-button - Used to style the button rendered when the list item is of type detail
- delete-button - Used to style the button rendered when the list item is in delete mode
- radio - Used to style the radio button rendered when the list item is in single selection mode
- checkbox - Used to style the checkbox rendered when the list item is in multiple selection mode
`,j="The `GroupHeaderListItem` is a special list item, used only to separate other list items into logical groups\n",C=`The \`StandardListItem\` represents the simplest type of item for a \`StandardListItemst\`. This is a list item, providing the most common use cases such as \`text\`, \`image\` and \`icon\`.

### CSS Shadow Parts

CSS Shadow Parts allow developers to style elements inside the Shadow DOM.  
The \`StandardListItem\` exposes the following CSS Shadow Parts:

- title - Used to style the title of the list item
- description - Used to style the description of the list item
- additional-text - Used to style the additionalText of the list item
- icon - Used to style the icon of the list item
- native-li - Used to style the main li tag of the list item
- content - Used to style the content area of the list item
- detail-button - Used to style the button rendered when the list item is of type detail
- delete-button - Used to style the button rendered when the list item is in delete mode
- radio - Used to style the radio button rendered when the list item is in single selection mode
- checkbox - Used to style the checkbox rendered when the list item is in multiple selection mode
`,L=`## Keyboard Handling

### Basic Navigation

The \`List\` provides advanced keyboard handling. When a list is focused the user can use the following keyboard shortcuts in order to perform a navigation:

- \\[UP/DOWN\\] - Navigates up and down the items
- \\[HOME\\] - Navigates to first item
- \\[END\\] - Navigates to the last item

The user can use the following keyboard shortcuts to perform actions (such as select, delete), when the \`mode\` property is in use:

- \\[SPACE\\] - Select an item (if \`type\` is 'Active') when \`mode\` is selection
- \\[DELETE\\] - Delete an item if \`mode\` property is \`Delete\`

### Fast Navigation

This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \`Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up\`. In order to use this functionality, you need to import the following module: \`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`
`;function me(o={}){const{wrapper:r}=Object.assign({},p(),o.components);return r?t.jsx(r,Object.assign({},o,{children:t.jsx(m,{})})):m();function m(){const e=Object.assign({h2:"h2"},p(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(c,{of:y}),`
`,t.jsx(l,{}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(n,{of:a}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(d,{of:a}),`
`,t.jsx(i,{children:L}),`
`,t.jsx("br",{}),`
`,t.jsx(i,{children:u}),`
`,t.jsx(e.h2,{id:"standardlistitem",children:"StandardListItem"}),`
`,t.jsx(s,{of:S}),`
`,t.jsx(i,{children:C}),`
`,t.jsx(e.h2,{id:"customlistitem",children:"CustomListItem"}),`
`,t.jsx(n,{of:b}),`
`,t.jsx(s,{of:f}),`
`,t.jsx(i,{children:g}),`
`,t.jsx(e.h2,{id:"groupheaderlistitem",children:"GroupHeaderListItem"}),`
`,t.jsx(n,{of:w}),`
`,t.jsx(s,{of:x}),`
`,t.jsx(i,{children:j}),`
`,t.jsx(h,{})]})}}export{me as default};
//# sourceMappingURL=List-0569da93.js.map
