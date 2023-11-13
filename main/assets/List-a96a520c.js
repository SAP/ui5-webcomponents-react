import{j as t}from"./jsx-runtime-d079401a.js";import{C as d,b as s}from"./DomRefTable.module-013d3597.js";import{D as l}from"./DocsHeader-0abe57bd.js";import{F as h}from"./Footer-0ac7c906.js";import"./index-f1f2c4b1.js";import{M as c,C as n,b as i}from"./chunk-HLWAVYOI-c897462f.js";import{S as u}from"./SubcomponentsSection-6138f2fc.js";import"./employee-0930782f.js";import{C as f}from"./index-ce4c0264.js";import{G as x}from"./index-4be3ac70.js";import{S}from"./index-59b92647.js";import{C as y,D as a,a as b,G as w}from"./List.stories-f03c248e.js";import{u as p}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-825c1998.js";import"./iframe-559567e7.js";import"../sb-preview/runtime.js";import"./UI5Element-d089e658.js";import"./CustomElementsScopeUtils-90546106.js";import"./withWebComponent-1bab39e1.js";import"./utils-85c0effb.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-6c84d99e.js";import"./Icons-d115de21.js";import"./decline-a017ea5c.js";import"./i18n-defaults-bdef1cce.js";import"./information-ff75d6c3.js";import"./alert-fa33aca2.js";import"./class-map-a86e04c8.js";import"./Button-28aa77f1.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-a1ecaff4.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-b7e0672b.js";import"./index-09e66765.js";import"./Integer-f7f172c9.js";import"./index-84a32ca5.js";import"./Avatar-a6bd6a5d.js";import"./ResizeHandler-36d5a74c.js";import"./index-30b5d169.js";import"./index-4603e29d.js";import"./Link-50cf71c5.js";import"./WrappingType-b81e595a.js";import"./index-12e0da73.js";import"./TableOfContent-fd3436f0.js";import"./index-4a38c759.js";import"./Label-49cb1c79.js";import"./index-c74c9f7f.js";import"./index-d1a15b3e.js";import"./index-e970110d.js";import"./Popover-d31df830.js";import"./PopupUtils-caf3caee.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-5dfc3685.js";import"./FocusableElements-320054f2.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-753edde8.js";import"./BrowserScrollbar.css-20b91c11.js";import"./index-f82c8853.js";import"./mapValues-6da481dc.js";import"./_baseForOwn-62af832b.js";import"./_baseUniq-27dbdc21.js";import"./index-356e4a49.js";import"./CustomListItem-61be94b6.js";import"./ListItem-39a60ab2.js";import"./ListItemBase-9072af4d.js";import"./ItemNavigation-5bb0bc27.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-65dcbbf7.js";import"./RadioButton-2c7192c2.js";import"./ValueState-2c5e5904.js";import"./CheckBox-f5047736.js";import"./accept-b3993803.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-f2ee719f.js";import"./GroupHeaderListItem-e2090297.js";import"./StandardListItem-db320c2b.js";import"./ValueState-ab6838cc.js";import"./index-cd7c1147.js";import"./ProgressIndicator-c5bb7302.js";import"./AnimationMode-4dbcc358.js";import"./index-2a33031e.js";const g=`A component to be used as custom list item within the \`List\` the same way as the standard \`StandardListItem\`. The component accepts arbitrary HTML content to allow full customization.

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
`;function ne(o={}){const{wrapper:r}=Object.assign({},p(),o.components);return r?t.jsx(r,Object.assign({},o,{children:t.jsx(m,{})})):m();function m(){const e=Object.assign({h2:"h2"},p(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(c,{of:y}),`
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
`,t.jsx(h,{})]})}}export{ne as default};
//# sourceMappingURL=List-a96a520c.js.map
