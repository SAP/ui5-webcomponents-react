import{j as o}from"./jsx-runtime-5926aa06.js";import{C as l,e as s}from"./DomRefTable.module-352f2393.js";import{D as c}from"./DocsHeader-c4e563ab.js";import{F as h}from"./Footer-26b1bc7a.js";import"./index-ebeaab24.js";import{D as d}from"./DomRefTable-4a5abdfa.js";import{S as u}from"./SubcomponentsSection-6138f2fc.js";import{M as b,C as p,a as e}from"./chunk-PCJTTTQV-4858f6d9.js";import{C as x,D as m,G as f,M as w}from"./MultiComboBox.stories-41a8bade.js";import{a as C}from"./index-6cf6b0a8.js";import{u as a}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-f564b7e4.js";import"./iframe-c3106ff6.js";import"../sb-preview/runtime.js";import"./UI5Element-fb9ecf93.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d4224c1c.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-ef594e9f.js";import"./Icons-2c98f222.js";import"./decline-3df8c953.js";import"./i18n-defaults-80781f7e.js";import"./information-451d615b.js";import"./class-map-18f572ce.js";import"./Button-4160b137.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-99b8bbf4.js";import"./i18n-defaults-a58643fd.js";import"./index-d56023c9.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-9af65fbe.js";import"./index-c6923ba7.js";import"./Integer-f7f172c9.js";import"./index-94715c30.js";import"./Avatar-3c16d274.js";import"./ResizeHandler-36560530.js";import"./employee-f2f473ef.js";import"./index-fb5f8025.js";import"./index-53578f5f.js";import"./Link-057b3642.js";import"./WrappingType-b81e595a.js";import"./index-7b456273.js";import"./TableOfContent-cee14427.js";import"./index-58d332cd.js";import"./Label-7f4aa83d.js";import"./index-9c09ad76.js";import"./index-42b96b95.js";import"./index-57bc25c8.js";import"./Popover-510446d9.js";import"./PopupsCommon.css-f7aa7df0.js";import"./FocusableElements-6f0cd02a.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-54298215.js";import"./BrowserScrollbar.css-0e9b1550.js";import"./react-18-95218780.js";import"./mapValues-f5a21168.js";import"./_baseForOwn-8b0cf1d5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-20c8b51e.js";import"./_baseUniq-8051c65b.js";import"./index-356e4a49.js";import"./ValueState-ab6838cc.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-d78fcf2d.js";import"./Suggestions.css-66403272.js";import"./GroupHeaderListItem-84974bca.js";import"./ListItemBase-32e7e45c.js";import"./ItemNavigation-c74bf7f7.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-80d43f0f.js";import"./Tokenizer-fc08f21c.js";import"./ScrollEnablement-5e135290.js";import"./animate-1a16ba20.js";import"./ResponsivePopover-a7253ba3.js";import"./Dialog-2af89d50.js";import"./Title-1daec987.js";import"./StandardListItem-049f31eb.js";import"./ListItem-bb2d09ef.js";import"./RadioButton-75d95420.js";import"./CheckBox-c44317b4.js";import"./accept-756ca6cd.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-a768cef3.js";import"./ResponsivePopoverCommon.css-e9e92f0e.js";import"./ValueStateMessage.css-332efe2d.js";import"./Token-a72d0aac.js";import"./ToggleButton-3042cd98.js";import"./ComboBoxItem-647871b6.js";const g="**Since:** 0.25.0  \n**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\nThe `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups\n",j="**Abstract UI5 Web Component** - Find out more about abstract components [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components).\n\nThe `MultiComboBoxItem` represents the item for a `MultiComboBox`\n",M=`## Structure

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
`,k=[{name:"open",readonly:"true",visibility:"public",since:"1.0.0-rc.5",type:"boolean",description:"Indicates whether the dropdown is open. True if the dropdown is open, false otherwise.",defaultValue:"false"}];function ut(i={}){const{wrapper:r}=Object.assign({},a(),i.components);return r?o.jsx(r,Object.assign({},i,{children:o.jsx(n,{})})):n();function n(){const t=Object.assign({h2:"h2",h1:"h1"},a(),i.components);return o.jsxs(o.Fragment,{children:[o.jsx(b,{of:x}),`
`,o.jsx(c,{since:"0.4.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(p,{of:m}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(l,{of:m}),`
`,o.jsx(e,{children:M}),`
`,o.jsx(d,{rows:k}),`
`,o.jsx(t.h1,{id:"more-examples",children:"More Examples"}),`
`,o.jsx(t.h2,{id:"multicombobox-with-grouping-of-items",children:"MultiComboBox with Grouping of Items"}),`
`,o.jsx(p,{of:f}),`
`,o.jsx(e,{children:u}),`
`,o.jsx(t.h2,{id:"multicomboboxitem",children:"MultiComboBoxItem"}),`
`,o.jsx(s,{hideHTMLPropsNote:!0,of:C}),`
`,o.jsx(e,{children:j}),`
`,o.jsx(t.h2,{id:"multicomboboxgroupitem",children:"MultiComboBoxGroupItem"}),`
`,o.jsx(s,{hideHTMLPropsNote:!0,of:w}),`
`,o.jsx(e,{children:g}),`
`,o.jsx(h,{})]})}}export{ut as default};
//# sourceMappingURL=MultiComboBox-b006a5d6.js.map
