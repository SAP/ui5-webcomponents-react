import{j as o,a as l,F as h}from"./jsx-runtime-670450c2.js";import{C as c,b as p}from"./DomRefTable.module-41e2a724.js";import{D as d}from"./DocsHeader-6d1c2bce.js";import{F as u}from"./Footer-fd5b7b86.js";import"./index-f1f749bf.js";import{D as f}from"./DomRefTable-aa3e8fa0.js";import{S as b}from"./SubcomponentsSection-6138f2fc.js";import{M as C,C as m,a as e}from"./index-058ab9af.js";import{C as M,D as s,G as x,M as g}from"./MultiComboBox.stories-8646af22.js";import{a as k}from"./index-665f4ef5.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-PCJTTTQV-5c549173.js";import"./iframe-980aec02.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-1e4ab027.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./event-97133b94.js";import"./decline-f2b294b3.js";import"./Icons-7b82f601.js";import"./i18n-defaults-80781f7e.js";import"./information-50e1ad0f.js";import"./class-map-5d8e4b2b.js";import"./Icon-459702a7.js";import"./Keys-3acbae73.js";import"./Button-04bad9a0.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-d66b3d5e.js";import"./index-8ba7ce6e.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-3f1501ef.js";import"./TableOfContent-3f224c4a.js";import"./index-529f63d8.js";import"./Link-6d546ee9.js";import"./WrappingType-b81e595a.js";import"./index-d6b28517.js";import"./Label-040efebd.js";import"./Footer.module-f90cad7d.js";import"./index-ab2fbe22.js";import"./Popover-907d427e.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7d9fbba1.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./ValueState-ab6838cc.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-068fe0af.js";import"./Suggestions.css-faab6178.js";import"./GroupHeaderListItem-9b8405c5.js";import"./ListItemBase-16737f88.js";import"./ItemNavigation-18222ac6.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-46a9aff5.js";import"./Tokenizer-c0596f3c.js";import"./ScrollEnablement-4353003c.js";import"./animate-1a16ba20.js";import"./ResponsivePopover-36c83c4d.js";import"./Dialog-644759b8.js";import"./Title-b986a4bd.js";import"./StandardListItem-ed465290.js";import"./ListItem-20b1ed77.js";import"./RadioButton-28647d07.js";import"./CheckBox-90578acd.js";import"./accept-a98baca8.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-bbef5919.js";import"./Avatar-7c89587d.js";import"./employee-98ce1b38.js";import"./ResponsivePopoverCommon.css-187e38b6.js";import"./ValueStateMessage.css-37773c69.js";import"./Token-d7b8dcc3.js";import"./ToggleButton-93dc353f.js";import"./ComboBoxFilter-ce703529.js";const w="The `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups\n",y="The `MultiComboBoxItem` represents the item for a `MultiComboBox`\n",S=`## Structure

The \`MultiComboBox\` consists of the following elements:

*   Tokenizer - a list of tokens with selected options.
*   Input field - displays the selected option/s as token/s. Users can type to filter the list.
*   Drop-down arrow - expands\\\\collapses the option list.
*   Option list - the list of available options.

## Keyboard Handling

The \`MultiComboBox\` provides advanced keyboard handling.

### Picker

If the \`MultiComboBox\` is focused, you can open or close the drop-down by pressing \`F4\`, \`ALT+UP\` or \`ALT+DOWN\` keys. Once the drop-down is opened, you can use the \`UP\` and \`DOWN\` arrow keys to navigate through the available options and select one by pressing the \`Space\` or \`Enter\` keys.  

### Tokens

*   Left/Right arrow keys - moves the focus selection form the currently focused token to the previous/next one (if available).
*   Delete - deletes the token and focuses the previous token.
*   Backspace - deletes the token and focus the next token.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`MultiComboBox\` exposes the following CSS Shadow Parts:

*   token-{index} - Used to style each token(where \`token-0\` corresponds to the first item)`,D=[{name:"open",readonly:"true",visibility:"public",since:"1.0.0-rc.5",type:"boolean",description:"Indicates whether the dropdown is open. True if the dropdown is open, false otherwise.",defaultValue:"false"}];function kt(i={}){const{wrapper:r}=Object.assign({},a(),i.components);return r?o(r,Object.assign({},i,{children:o(n,{})})):n();function n(){const t=Object.assign({h2:"h2",h1:"h1"},a(),i.components);return l(h,{children:[o(C,{of:M}),`
`,o(d,{since:"0.4.0"}),`
`,o("br",{}),`
`,o(t.h2,{children:"Example"}),`
`,o(m,{of:s}),`
`,o(t.h2,{children:"Properties"}),`
`,o(c,{of:s}),`
`,o(e,{children:S}),`
`,o(f,{rows:D}),`
`,o(t.h1,{children:"More Examples"}),`
`,o(t.h2,{children:"MultiComboBox with Grouping of Items"}),`
`,o(m,{of:x}),`
`,o(e,{children:b}),`
`,o(t.h2,{children:"MultiComboBoxItem"}),`
`,o(p,{hideHTMLPropsNote:!0,of:k}),`
`,o(e,{children:y}),`
`,o(t.h2,{children:"MultiComboBoxGroupItem"}),`
`,o(p,{hideHTMLPropsNote:!0,of:g}),`
`,o(e,{children:w}),`
`,o(u,{})]})}}export{kt as default};
//# sourceMappingURL=MultiComboBox-8ccbc79c.js.map
