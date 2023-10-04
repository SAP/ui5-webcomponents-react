import{j as o}from"./jsx-runtime-d079401a.js";import{C as c,A as s}from"./DomRefTable.module-02f14613.js";import{D as h}from"./DocsHeader-f25f14ef.js";import{F as d}from"./Footer-3ed91f04.js";import"./index-f1f2c4b1.js";import{M as u,C as p,b as e}from"./chunk-S4VUQJ4A-934fee1d.js";import{D as b}from"./DomRefTable-43449f8f.js";import{S as x}from"./SubcomponentsSection-6138f2fc.js";import{C as f,D as m,G as w,M as C}from"./MultiComboBox.stories-9aa23eee.js";import{a as g}from"./index-c852ffa7.js";import{e as a}from"./utils-b1ef2149.js";import{u as l}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-6f8f120d.js";import"./iframe-20fa6ce7.js";import"../sb-preview/runtime.js";import"./UI5Element-9ae3ac4a.js";import"./CustomElementsScopeUtils-a6667bf6.js";import"./withWebComponent-70ea33bf.js";import"./utils-eb830979.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-085ae741.js";import"./Icons-aa504494.js";import"./decline-06bf09c2.js";import"./i18n-defaults-bdef1cce.js";import"./information-31cb56bb.js";import"./alert-f95f2d2e.js";import"./class-map-a35dc276.js";import"./Button-bda40b74.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-edeeca68.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-dff384db.js";import"./index-4b43201f.js";import"./Integer-f7f172c9.js";import"./index-98b733a8.js";import"./Avatar-54e46144.js";import"./ResizeHandler-a1ba39c5.js";import"./employee-bd01b92f.js";import"./index-fd1ed4cc.js";import"./index-9a8440b1.js";import"./Link-27f41eeb.js";import"./WrappingType-b81e595a.js";import"./index-12e0da73.js";import"./TableOfContent-8122b095.js";import"./index-9085050f.js";import"./Label-2351773c.js";import"./index-c74c9f7f.js";import"./index-039ea8f4.js";import"./index-f1645b18.js";import"./Popover-f88acbeb.js";import"./PopupUtils-ebc1cf8a.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-afd5e311.js";import"./FocusableElements-ea9d71fb.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-0570471d.js";import"./BrowserScrollbar.css-35e4e851.js";import"./index-92d824d3.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./ValueState-ab6838cc.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-98550049.js";import"./Suggestions.css-07dccdad.js";import"./GroupHeaderListItem-50af4131.js";import"./ListItemBase-7c3bbca9.js";import"./ItemNavigation-53cee471.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-6d3cbaa3.js";import"./Tokenizer-eb93cc3a.js";import"./ScrollEnablement-39ae1891.js";import"./animate-1a16ba20.js";import"./ResponsivePopover-3603f824.js";import"./Dialog-6ca0f060.js";import"./Title-9e1fec85.js";import"./StandardListItem-a534f611.js";import"./ListItem-8f7be23d.js";import"./RadioButton-0df5d1bd.js";import"./CheckBox-05effb75.js";import"./accept-a3b0d940.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-562fbac6.js";import"./ResponsivePopoverCommon.css-f284520a.js";import"./ValueStateMessage.css-29f8f350.js";import"./Token-f9a06284.js";import"./ToggleButton-10e80b89.js";import"./ComboBoxItem-bcc83487.js";const j="**Since:** 0.25.0\n**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\nThe `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups\n",M="**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\nThe `MultiComboBoxItem` represents the item for a `MultiComboBox`\n",k=`## Structure

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
`,y=[{name:"open",readonly:"true",visibility:"public",since:"1.0.0-rc.5",type:"boolean",description:"Indicates whether the dropdown is open. True if the dropdown is open, false otherwise.",defaultValue:"false"}];function xt(i={}){const{wrapper:r}=Object.assign({},l(),i.components);return r?o.jsx(r,Object.assign({},i,{children:o.jsx(n,{})})):n();function n(){const t=Object.assign({h2:"h2",h1:"h1"},l(),i.components);return o.jsxs(o.Fragment,{children:[o.jsx(u,{of:f}),`
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
`,o.jsx(d,{})]})}}export{xt as default};
//# sourceMappingURL=MultiComboBox-dcca3a81.js.map
