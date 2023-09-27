import{j as t}from"./jsx-runtime-d079401a.js";import{C as d,b as s}from"./DomRefTable.module-1e2f90fd.js";import{D as l}from"./DocsHeader-71caafa9.js";import{F as h}from"./Footer-a27d995d.js";import"./index-f1f2c4b1.js";import{M as c,C as n,b as i}from"./chunk-S4VUQJ4A-a04c7002.js";import{S as u}from"./SubcomponentsSection-6138f2fc.js";import"./employee-78fe46d2.js";import{C as f}from"./index-aed6db56.js";import{G as x}from"./index-d2d53aad.js";import{S}from"./index-3b89f360.js";import{C as y,D as a,a as b,G as w}from"./List.stories-598b9f6a.js";import{u as p}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-51669c34.js";import"./iframe-49b43b1c.js";import"../sb-preview/runtime.js";import"./UI5Element-e590cd60.js";import"./CustomElementsScopeUtils-264b8a39.js";import"./withWebComponent-b4c67a1a.js";import"./utils-e9940b93.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-b897d66f.js";import"./Icons-65b34360.js";import"./decline-2f6198d2.js";import"./i18n-defaults-bdef1cce.js";import"./information-e97f915a.js";import"./alert-7494fabe.js";import"./class-map-e1b423a4.js";import"./Button-4505b9f6.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-d5195a49.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-203b56de.js";import"./index-c2f0c804.js";import"./Integer-f7f172c9.js";import"./index-a3201a56.js";import"./Avatar-60d18bb8.js";import"./ResizeHandler-34ecee99.js";import"./index-ce4b938c.js";import"./index-a0dbb1fd.js";import"./Link-a373b451.js";import"./WrappingType-b81e595a.js";import"./index-43333f43.js";import"./TableOfContent-08ecdd19.js";import"./index-8d0a97f2.js";import"./Label-69062358.js";import"./index-c74c9f7f.js";import"./index-92596ab1.js";import"./index-727d8b1b.js";import"./Popover-742c9988.js";import"./PopupUtils-f407c5e4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-97942203.js";import"./FocusableElements-d024bb16.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-ecc46a93.js";import"./BrowserScrollbar.css-4a87524a.js";import"./index-92d824d3.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./CustomListItem-c46c3838.js";import"./ListItem-65b5ee84.js";import"./ListItemBase-e8a1d82b.js";import"./ItemNavigation-52fe434f.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-7cb729ee.js";import"./RadioButton-bfff4944.js";import"./ValueState-2c5e5904.js";import"./CheckBox-c32e2a79.js";import"./accept-92104380.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-7a309837.js";import"./GroupHeaderListItem-667d01bb.js";import"./StandardListItem-32d37e59.js";import"./ValueState-ab6838cc.js";import"./index-4fcf662c.js";import"./ProgressIndicator-40a88987.js";import"./AnimationMode-ce584f41.js";import"./index-9a3133d3.js";const g=`A component to be used as custom list item within the \`List\` the same way as the standard \`StandardListItem\`. The component accepts arbitrary HTML content to allow full customization.

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
//# sourceMappingURL=List-92497fb5.js.map
