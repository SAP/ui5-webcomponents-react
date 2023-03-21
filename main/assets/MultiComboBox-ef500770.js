import{j as o,a as l,F as h}from"./jsx-runtime-670450c2.js";import{C as c,d as p}from"./DomRefTable.module-eb933569.js";import{D as d}from"./DocsHeader-c9bd48b3.js";import{F as u}from"./Footer-47fcfe34.js";import"./index-f1f749bf.js";import{D as f}from"./DomRefTable-1b732cef.js";import{S as b}from"./SubcomponentsSection-6138f2fc.js";import{M as C,C as m,a as e}from"./chunk-PCJTTTQV-d18934fe.js";import{C as M,D as s,G as x,M as g}from"./MultiComboBox.stories-a1feda71.js";import{a as k}from"./index-0eb6b022.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-541c5b7b.js";import"./iframe-f932980d.js";import"../sb-preview/runtime.mjs";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-65cd39a0.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./Icon-7987c836.js";import"./Icons-fe6e657a.js";import"./decline-6bd98a2e.js";import"./i18n-defaults-80781f7e.js";import"./information-b6c8ed8e.js";import"./class-map-95320e87.js";import"./Button-bc3a11a1.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ba7ce6e.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-67031790.js";import"./TableOfContent-c1f46bdc.js";import"./index-cf01d869.js";import"./Link-018547e8.js";import"./WrappingType-b81e595a.js";import"./index-9e97fbbb.js";import"./Label-ccc234fe.js";import"./index-96c5f47c.js";import"./index-a72bc10e.js";import"./Popover-224d761a.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-9873a291.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-1da6d0d2.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-cae0a379.js";import"./react-18-ecd79c7b.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./ValueState-ab6838cc.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-cfb4a4bd.js";import"./Suggestions.css-154c701b.js";import"./GroupHeaderListItem-d4ea7e0d.js";import"./ListItemBase-a0bc6999.js";import"./ItemNavigation-8e291cfa.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-15ff681f.js";import"./Tokenizer-6b454ae9.js";import"./ScrollEnablement-4353003c.js";import"./animate-1a16ba20.js";import"./ResponsivePopover-fcaf2b05.js";import"./Dialog-43ec4fb1.js";import"./Title-129aeb28.js";import"./StandardListItem-ac3f40c5.js";import"./ListItem-83c0fb9e.js";import"./RadioButton-a8c23c83.js";import"./CheckBox-80dd6e5f.js";import"./accept-d8c33d70.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-52a56681.js";import"./Avatar-7e1d4e21.js";import"./employee-1bc983a2.js";import"./ResponsivePopoverCommon.css-ca4e9b7c.js";import"./ValueStateMessage.css-f5f87de3.js";import"./Token-144828a9.js";import"./ToggleButton-4790913b.js";import"./ComboBoxFilter-ae5ca468.js";const w="**Since:** 0.25.0\n\nThe `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups\n",y="The `MultiComboBoxItem` represents the item for a `MultiComboBox`\n",S=`## Structure

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

*   token-{index} - Used to style each token(where \`token-0\` corresponds to the first item)`,D=[{name:"open",readonly:"true",visibility:"public",since:"1.0.0-rc.5",type:"boolean",description:"Indicates whether the dropdown is open. True if the dropdown is open, false otherwise.",defaultValue:"false"}];function bt(i={}){const{wrapper:r}=Object.assign({},a(),i.components);return r?o(r,Object.assign({},i,{children:o(n,{})})):n();function n(){const t=Object.assign({h2:"h2",h1:"h1"},a(),i.components);return l(h,{children:[o(C,{of:M}),`
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
`,o(u,{})]})}}export{bt as default};
//# sourceMappingURL=MultiComboBox-ef500770.js.map
