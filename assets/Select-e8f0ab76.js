import{j as t}from"./jsx-runtime-5926aa06.js";import{C as m,A as a}from"./DomRefTable.module-c8b0f854.js";import{D as d}from"./DocsHeader-4a123bd3.js";import{F as c}from"./Footer-cf336c67.js";import"./index-ebeaab24.js";import{D as h}from"./DomRefTable-2db0ce47.js";import{S as l}from"./SubcomponentsSection-6138f2fc.js";import{M as x,C as f,a as i}from"./chunk-PCJTTTQV-04b430cf.js";import{O as j}from"./index-fb85aef8.js";import{C as u,D as p}from"./Select.stories-6b160ea5.js";import{u as s}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-67309ef5.js";import"./iframe-341023a7.js";import"../sb-preview/runtime.js";import"./UI5Element-1225b968.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d61dcbbc.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-c5c4720b.js";import"./Icons-524f4c51.js";import"./decline-d268166e.js";import"./i18n-defaults-80781f7e.js";import"./information-b4bc7d32.js";import"./class-map-519e9c6d.js";import"./Button-f2c9b4f8.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./index-8330eb1d.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./Import-57644cbf.js";import"./TableOfContent-3c8b6fdd.js";import"./index-79c4b09b.js";import"./Link-c4094736.js";import"./WrappingType-b81e595a.js";import"./index-01f29d40.js";import"./Label-326b72d8.js";import"./index-9c09ad76.js";import"./index-0432eaf3.js";import"./Popover-abd2c401.js";import"./Integer-f7f172c9.js";import"./PopupUtils-e5ce8d68.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-02b533b0.js";import"./FocusableElements-fe6ae4c8.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-401cf542.js";import"./ResizeHandler-a7d132d0.js";import"./MediaRange-25b98f31.js";import"./style-map-33b353d0.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./index-df52c5a7.js";import"./InvisibleMessage-91045eb3.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-1f65eb3e.js";import"./ListItemBase-2b377f8a.js";import"./ItemNavigation-112e3f18.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-d9721fcf.js";import"./ResponsivePopover-f78e52af.js";import"./Dialog-2d7f5174.js";import"./Title-74db4a86.js";import"./StandardListItem-3ab04a00.js";import"./ListItem-6b3e715e.js";import"./RadioButton-cf363528.js";import"./CheckBox-414bc569.js";import"./accept-198406be.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-a7c9c70c.js";import"./Avatar-7e77703a.js";import"./employee-d1f09a2c.js";import"./ResponsivePopoverCommon.css-1bfa5717.js";import"./ValueStateMessage.css-d1957aab.js";import"./ValueState-ab6838cc.js";const g="The `Option` component defines the content of an option in the `Select`\n",O=`## Keyboard Handling

The \`Select\` provides advanced keyboard handling.

- \\[F4, ALT+UP, ALT+DOWN, SPACE, ENTER\\] - Opens/closes the drop-down.
- \\[UP, DOWN\\] - If the drop-down is closed - changes selection to the next or the previous option. If the drop-down is opened - moves focus to the next or the previous option.
- \\[SPACE, ENTER\\] - If the drop-down is opened - selects the focused option.
- \\[ESC\\] - Closes the drop-down without changing the selection.
- \\[HOME\\] - Navigates to first option
- \\[END\\] - Navigates to the last option
`,C=[{name:"selectedOption",readonly:"true",visibility:"public",type:"sap.ui.webc.main.ISelectOption",description:"Currently selected <code>ui5-option</code> element."}];function oe(o={}){const{wrapper:n}=Object.assign({},s(),o.components);return n?t.jsx(n,Object.assign({},o,{children:t.jsx(r,{})})):r();function r(){const e=Object.assign({h2:"h2",h3:"h3",code:"code",p:"p",pre:"pre"},s(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:u}),`
`,t.jsx(d,{since:"0.4.0"}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(f,{of:p}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(m,{of:p}),`
`,t.jsx(i,{children:O}),`
`,t.jsx(h,{rows:C}),`
`,t.jsx(e.h2,{id:"recipes",children:"Recipes"}),`
`,t.jsxs(e.h3,{id:"get-the-id-of-the-selected-item-with-onchange",children:["Get the ID of the selected item with ",t.jsx(e.code,{children:"onChange"})]}),`
`,t.jsxs(e.p,{children:["With the help of the HTML5 ",t.jsx(e.code,{children:"data-"}),` API you can define any primitive value (like numbers, strings)
as an attribute on an element.
This data will be available on the `,t.jsx(e.code,{children:"onChange"})," event as part of the ",t.jsx(e.code,{children:"dataset"})," object of the ",t.jsx(e.code,{children:"selectedOption"}),":"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`const data = [
  { id: 1, text: 'Option 1' },
  { id: 2, text: 'Option 2' }
];

const onChange = (event) => {
  // event.detail.selectedOption is a reference to the selected HTML Element
  // dataset contains all attributes that were passed with the data- prefix.
  console.log(event.detail.selectedOption.dataset.id);
};

<Select onChange={onChange}>
  {data.map((item) => (
    <Option key={item.id} data-id={item.id}>
      {item.text}
    </Option>
  ))}
</Select>;
`})}),`
`,t.jsx(i,{children:l}),`
`,t.jsx(e.h2,{id:"option",children:"Option"}),`
`,t.jsx(a,{of:j}),`
`,t.jsx(i,{children:g}),`
`,t.jsx(c,{})]})}}export{oe as default};
//# sourceMappingURL=Select-e8f0ab76.js.map
