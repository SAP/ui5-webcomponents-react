import{j as t}from"./jsx-runtime-d079401a.js";import{C as d,b as s}from"./DomRefTable.module-23b370d0.js";import{D as l}from"./DocsHeader-1c124ccd.js";import{F as h}from"./Footer-2663f8c7.js";import"./index-f1f2c4b1.js";import{M as c,C as n,b as i}from"./chunk-HLWAVYOI-22baf3b3.js";import{S as u}from"./SubcomponentsSection-6138f2fc.js";import"./employee-0930782f.js";import{C as f}from"./index-af13f91c.js";import{G as x}from"./index-8c188e5f.js";import{S}from"./index-4d5d7a66.js";import{C as y,D as a,a as b,G as w}from"./List.stories-b890a91b.js";import{u as p}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-63f0019b.js";import"./iframe-c3007204.js";import"../sb-preview/runtime.js";import"./UI5Element-d089e658.js";import"./CustomElementsScopeUtils-90546106.js";import"./withWebComponent-f146e44d.js";import"./utils-85c0effb.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-dc979b51.js";import"./Icons-d115de21.js";import"./decline-a017ea5c.js";import"./i18n-defaults-bdef1cce.js";import"./information-ff75d6c3.js";import"./alert-fa33aca2.js";import"./class-map-5b190712.js";import"./Button-f20bbbdf.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-a1ecaff4.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-b7e0672b.js";import"./index-07784902.js";import"./Integer-f7f172c9.js";import"./index-1aa9614e.js";import"./Avatar-d6a8bd34.js";import"./ResizeHandler-36d5a74c.js";import"./index-2a1571d8.js";import"./index-fea264de.js";import"./Link-0dce4afc.js";import"./WrappingType-b81e595a.js";import"./index-12e0da73.js";import"./TableOfContent-3ec6e528.js";import"./index-da481b10.js";import"./Label-025b0296.js";import"./index-c74c9f7f.js";import"./index-7dbb9f7e.js";import"./index-067abae6.js";import"./Popover-84fe14ea.js";import"./PopupUtils-caf3caee.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-070f9d59.js";import"./FocusableElements-320054f2.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-2f7624b7.js";import"./BrowserScrollbar.css-e63eefff.js";import"./index-f82c8853.js";import"./mapValues-6da481dc.js";import"./_baseForOwn-62af832b.js";import"./_baseUniq-27dbdc21.js";import"./index-356e4a49.js";import"./CustomListItem-0b030da0.js";import"./ListItem-237bd455.js";import"./ListItemBase-8f94593b.js";import"./ItemNavigation-5bb0bc27.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-30d2b934.js";import"./RadioButton-894dc7d7.js";import"./ValueState-2c5e5904.js";import"./CheckBox-e4c9f0e7.js";import"./accept-b3993803.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-f2ee719f.js";import"./GroupHeaderListItem-bda61d02.js";import"./StandardListItem-e433cbf1.js";import"./ValueState-ab6838cc.js";import"./index-0df64573.js";import"./ProgressIndicator-42a4bd93.js";import"./AnimationMode-4dbcc358.js";import"./index-6274705e.js";const g=`A component to be used as custom list item within the \`List\` the same way as the standard \`StandardListItem\`. The component accepts arbitrary HTML content to allow full customization.

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
//# sourceMappingURL=List-d7fb74ab.js.map
