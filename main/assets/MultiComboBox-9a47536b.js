import{j as o}from"./jsx-runtime-d079401a.js";import{C as c,A as s}from"./DomRefTable.module-6f1ec929.js";import{D as h}from"./DocsHeader-36c42b59.js";import{F as d}from"./Footer-5679aad0.js";import"./index-f1f2c4b1.js";import{M as u,C as p,b as e}from"./chunk-HLWAVYOI-146fec46.js";import{D as b}from"./DomRefTable-806f97de.js";import{S as x}from"./SubcomponentsSection-6138f2fc.js";import{C as f,D as m,G as w,M as C}from"./MultiComboBox.stories-99d2eab4.js";import{a as g}from"./index-423f7a06.js";import{e as a}from"./utils-b1ef2149.js";import{u as l}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-3e1cfa6a.js";import"./iframe-49f9d5ca.js";import"../sb-preview/runtime.js";import"./UI5Element-d089e658.js";import"./CustomElementsScopeUtils-90546106.js";import"./withWebComponent-f146e44d.js";import"./utils-85c0effb.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-dc979b51.js";import"./Icons-d115de21.js";import"./decline-a017ea5c.js";import"./i18n-defaults-bdef1cce.js";import"./information-ff75d6c3.js";import"./alert-fa33aca2.js";import"./class-map-5b190712.js";import"./Button-f20bbbdf.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-a1ecaff4.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-b7e0672b.js";import"./index-6be36763.js";import"./Integer-f7f172c9.js";import"./index-f7b349d3.js";import"./Avatar-d6a8bd34.js";import"./ResizeHandler-36d5a74c.js";import"./employee-0930782f.js";import"./index-30429d84.js";import"./index-af5c616a.js";import"./Link-0dce4afc.js";import"./WrappingType-b81e595a.js";import"./index-12e0da73.js";import"./TableOfContent-e029871d.js";import"./index-e05b0a2f.js";import"./Label-025b0296.js";import"./index-c74c9f7f.js";import"./index-808d31c4.js";import"./index-62f30142.js";import"./Popover-84fe14ea.js";import"./PopupUtils-caf3caee.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-070f9d59.js";import"./FocusableElements-320054f2.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-2f7624b7.js";import"./BrowserScrollbar.css-e63eefff.js";import"./index-f82c8853.js";import"./mapValues-6da481dc.js";import"./_baseForOwn-62af832b.js";import"./_baseUniq-27dbdc21.js";import"./index-356e4a49.js";import"./ValueState-ab6838cc.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-d3e7694d.js";import"./Suggestions.css-7aca78e8.js";import"./GroupHeaderListItem-bda61d02.js";import"./ListItemBase-8f94593b.js";import"./ItemNavigation-5bb0bc27.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-30d2b934.js";import"./Tokenizer-8d7fb1af.js";import"./ScrollEnablement-a5db9b7d.js";import"./animate-1a16ba20.js";import"./ResponsivePopover-46599dee.js";import"./Dialog-d6d3e16c.js";import"./Title-53f5d1e4.js";import"./StandardListItem-e433cbf1.js";import"./ListItem-237bd455.js";import"./RadioButton-894dc7d7.js";import"./CheckBox-e4c9f0e7.js";import"./accept-b3993803.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-f2ee719f.js";import"./ResponsivePopoverCommon.css-ef6cd2ad.js";import"./ValueStateMessage.css-7d9802b8.js";import"./Token-d5b8cdd4.js";import"./ToggleButton-999ad82c.js";import"./ComboBoxItem-885416eb.js";const j="**Since:** 0.25.0\n**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\nThe `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups\n",M="**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\nThe `MultiComboBoxItem` represents the item for a `MultiComboBox`\n",k=`## Structure

The \`MultiComboBox\` consists of the following elements:

- Tokenizer - a list of tokens with selected options.
- Input field - displays the selected option/s as token/s. Users can type to filter the list.
- Drop-down arrow - expands\\\\collapses the option list.
- Option list - the list of available options.

## Keyboard Handling

The \`MultiComboBox\` provides advanced keyboard handling.

### Picker

If the \`MultiComboBox\` is focused, you can open or close the drop-down by pressing \`F4\`, \`ALT+UP\` or \`ALT+DOWN\` keys. Once the drop-down is opened, you can use the \`UP\` and \`DOWN\` arrow keys to navigate through the available options and select one by pressing the \`Space\` or \`Enter\` keys.

### Tokens

- Left/Right arrow keys - moves the focus selection form the currently focused token to the previous/next one (if available).
- Delete - deletes the token and focuses the previous token.
- Backspace - deletes the token and focus the next token.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`MultiComboBox\` exposes the following CSS Shadow Parts:

- token-{index} - Used to style each token(where \`token-0\` corresponds to the first item)
`,y=[{name:"open",readonly:"true",visibility:"public",since:"1.0.0-rc.5",type:"boolean",description:"Indicates whether the dropdown is open. True if the dropdown is open, false otherwise.",defaultValue:"false"}];function ut(i={}){const{wrapper:r}=Object.assign({},l(),i.components);return r?o.jsx(r,Object.assign({},i,{children:o.jsx(n,{})})):n();function n(){const t=Object.assign({h2:"h2",h1:"h1"},l(),i.components);return o.jsxs(o.Fragment,{children:[o.jsx(u,{of:f}),`
`,o.jsx(h,{since:"0.4.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(p,{of:m}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(c,{of:m}),`
`,o.jsx(e,{children:k}),`
`,o.jsx(b,{rows:y}),`
`,o.jsx(t.h1,{id:"more-examples",children:"More Examples"}),`
`,o.jsx(t.h2,{id:"multicombobox-with-grouping-of-items",children:"MultiComboBox with Grouping of Items"}),`
`,o.jsx(p,{of:w}),`
`,o.jsx(e,{children:x}),`
`,o.jsx(t.h2,{id:"multicomboboxitem",children:"MultiComboBoxItem"}),`
`,o.jsx(s,{hideHTMLPropsNote:!0,exclude:a,of:g}),`
`,o.jsx(e,{children:M}),`
`,o.jsx(t.h2,{id:"multicomboboxgroupitem",children:"MultiComboBoxGroupItem"}),`
`,o.jsx(s,{hideHTMLPropsNote:!0,exclude:a,of:C}),`
`,o.jsx(e,{children:j}),`
`,o.jsx(d,{})]})}}export{ut as default};
//# sourceMappingURL=MultiComboBox-9a47536b.js.map
