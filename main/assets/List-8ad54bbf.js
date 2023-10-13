import{j as t}from"./jsx-runtime-d079401a.js";import{C as d,b as s}from"./DomRefTable.module-e6943a0e.js";import{D as l}from"./DocsHeader-6bcfd625.js";import{F as h}from"./Footer-37521c12.js";import"./index-f1f2c4b1.js";import{M as c,C as n,b as i}from"./chunk-S4VUQJ4A-2c70e03f.js";import{S as u}from"./SubcomponentsSection-6138f2fc.js";import"./employee-bd01b92f.js";import{C as f}from"./index-4298ee87.js";import{G as x}from"./index-5270fe71.js";import{S}from"./index-24851b39.js";import{C as y,D as a,a as b,G as w}from"./List.stories-64371adc.js";import{u as p}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-145e83ed.js";import"./iframe-23aa2376.js";import"../sb-preview/runtime.js";import"./UI5Element-9ae3ac4a.js";import"./CustomElementsScopeUtils-a6667bf6.js";import"./withWebComponent-70ea33bf.js";import"./utils-eb830979.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-085ae741.js";import"./Icons-aa504494.js";import"./decline-06bf09c2.js";import"./i18n-defaults-bdef1cce.js";import"./information-31cb56bb.js";import"./alert-f95f2d2e.js";import"./class-map-a35dc276.js";import"./Button-bda40b74.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-edeeca68.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-dff384db.js";import"./index-db28356c.js";import"./Integer-f7f172c9.js";import"./index-922111e4.js";import"./Avatar-54e46144.js";import"./ResizeHandler-a1ba39c5.js";import"./index-60f79ccb.js";import"./index-6d54f227.js";import"./Link-27f41eeb.js";import"./WrappingType-b81e595a.js";import"./index-12e0da73.js";import"./TableOfContent-71be41b9.js";import"./index-d20d1342.js";import"./Label-2351773c.js";import"./index-c74c9f7f.js";import"./index-76026c39.js";import"./index-ac4bb716.js";import"./Popover-f88acbeb.js";import"./PopupUtils-ebc1cf8a.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-afd5e311.js";import"./FocusableElements-ea9d71fb.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-0570471d.js";import"./BrowserScrollbar.css-35e4e851.js";import"./index-92d824d3.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./CustomListItem-14ca47e4.js";import"./ListItem-8f7be23d.js";import"./ListItemBase-7c3bbca9.js";import"./ItemNavigation-53cee471.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-6d3cbaa3.js";import"./RadioButton-0df5d1bd.js";import"./ValueState-2c5e5904.js";import"./CheckBox-05effb75.js";import"./accept-a3b0d940.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-562fbac6.js";import"./GroupHeaderListItem-50af4131.js";import"./StandardListItem-a534f611.js";import"./ValueState-ab6838cc.js";import"./index-08d8ab50.js";import"./ProgressIndicator-7eec6fb9.js";import"./AnimationMode-5a8d55c8.js";import"./index-c60691ea.js";const g=`A component to be used as custom list item within the \`List\` the same way as the standard \`StandardListItem\`. The component accepts arbitrary HTML content to allow full customization.

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
//# sourceMappingURL=List-8ad54bbf.js.map
