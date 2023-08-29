import{j as o}from"./jsx-runtime-d079401a.js";import{C as c,A as s}from"./DomRefTable.module-c6673833.js";import{D as h}from"./DocsHeader-52e549a2.js";import{F as d}from"./Footer-b6412483.js";import"./index-f1f2c4b1.js";import{M as u,C as p,b as e}from"./chunk-S4VUQJ4A-f421359e.js";import{D as b}from"./DomRefTable-2403f73a.js";import{S as x}from"./SubcomponentsSection-6138f2fc.js";import{C as f,D as m,G as w,M as C}from"./MultiComboBox.stories-61d76f60.js";import{a as g}from"./index-abf19077.js";import{e as a}from"./utils-b1ef2149.js";import{u as l}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-ffff92aa.js";import"./iframe-1631fc3d.js";import"../sb-preview/runtime.js";import"./UI5Element-6dcea8dd.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7d7e5133.js";import"./utils-626dc1bf.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-b7f7d9e7.js";import"./Icons-e937042c.js";import"./decline-d1fe7fdd.js";import"./i18n-defaults-2d2bf0b6.js";import"./information-a40f0e71.js";import"./class-map-0ab40ab9.js";import"./Button-6bb9ed58.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-d675a36d.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-5ee8a8c4.js";import"./index-f493c92d.js";import"./Integer-f7f172c9.js";import"./index-ae687b3a.js";import"./Avatar-faa225d6.js";import"./ResizeHandler-e83234a4.js";import"./employee-f0b5ef8f.js";import"./index-df273129.js";import"./index-0d3a53ba.js";import"./Link-34530090.js";import"./WrappingType-b81e595a.js";import"./index-fb6e8b5e.js";import"./TableOfContent-f4a650a3.js";import"./index-b70bd0f1.js";import"./Label-c4db564a.js";import"./index-b42968db.js";import"./index-6d255f71.js";import"./index-1ca22b1f.js";import"./Popover-8ece70a3.js";import"./PopupsCommon.css-2b73575b.js";import"./FocusableElements-ae22402e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-132a30d8.js";import"./BrowserScrollbar.css-22391551.js";import"./index-d203965f.js";import"./mapValues-e5c6f517.js";import"./_baseForOwn-24231fc1.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-00f63d78.js";import"./_baseUniq-edf521f4.js";import"./index-356e4a49.js";import"./ValueState-ab6838cc.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-fd4d5a7b.js";import"./Suggestions.css-64d314d5.js";import"./GroupHeaderListItem-7829eb80.js";import"./ListItemBase-c655abbb.js";import"./ItemNavigation-f231b836.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-713a4f98.js";import"./Tokenizer-414bea12.js";import"./ScrollEnablement-dd3a6392.js";import"./animate-1a16ba20.js";import"./ResponsivePopover-b745dfe5.js";import"./Dialog-ea4c9a60.js";import"./Title-e46bbbf5.js";import"./StandardListItem-17582cb4.js";import"./ListItem-43381874.js";import"./RadioButton-f48638b8.js";import"./CheckBox-6d778514.js";import"./accept-d5698387.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-1acb3967.js";import"./ResponsivePopoverCommon.css-32174dbe.js";import"./ValueStateMessage.css-ee317505.js";import"./Token-3537a188.js";import"./ToggleButton-2d52195e.js";import"./ComboBoxItem-7da53959.js";const j="**Since:** 0.25.0  \n**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\nThe `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups\n",M="**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\nThe `MultiComboBoxItem` represents the item for a `MultiComboBox`\n",k=`## Structure

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
`,y=[{name:"open",readonly:"true",visibility:"public",since:"1.0.0-rc.5",type:"boolean",description:"Indicates whether the dropdown is open. True if the dropdown is open, false otherwise.",defaultValue:"false"}];function bt(i={}){const{wrapper:r}=Object.assign({},l(),i.components);return r?o.jsx(r,Object.assign({},i,{children:o.jsx(n,{})})):n();function n(){const t=Object.assign({h2:"h2",h1:"h1"},l(),i.components);return o.jsxs(o.Fragment,{children:[o.jsx(u,{of:f}),`
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
`,o.jsx(d,{})]})}}export{bt as default};
//# sourceMappingURL=MultiComboBox-27143974.js.map
