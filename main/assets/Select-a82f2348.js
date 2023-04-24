import{j as t}from"./jsx-runtime-ccada58e.js";import{C as m,A as a}from"./DomRefTable.module-2bfe689b.js";import{D as d}from"./DocsHeader-d9193251.js";import{F as c}from"./Footer-fc29af87.js";import"./index-f1f749bf.js";import{D as h}from"./DomRefTable-d622c925.js";import{S as l}from"./SubcomponentsSection-6138f2fc.js";import{M as x,C as f,a as i}from"./chunk-PCJTTTQV-bebf074d.js";import{O as j}from"./index-256edf1a.js";import{C as u,D as p}from"./Select.stories-14572f38.js";import{u as s}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-757b4c3e.js";import"./iframe-74056578.js";import"../sb-preview/runtime.mjs";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-791919b7.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-76e48863.js";import"./Icon-b04dccd7.js";import"./Icons-5b18f7d2.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./class-map-dc0989fc.js";import"./Button-08c55dbf.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-9bb0c7b4.js";import"./clsx.m-1229b3e0.js";import"./index-334d9c45.js";import"./ThemingParameters-f4b4144e.js";import"./Import-8dafda62.js";import"./TableOfContent-aa37eac2.js";import"./index-10c2675e.js";import"./Link-756c9448.js";import"./WrappingType-b81e595a.js";import"./index-c72a96e6.js";import"./Label-0e5fa470.js";import"./index-96c5f47c.js";import"./index-5c47c0ac.js";import"./Popover-a5930009.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-4412d83b.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-0dbd5acf.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-d22cbf2f.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-900dd2dc.js";import"./InvisibleMessage-04f92c3f.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-09ec0732.js";import"./ListItemBase-534ac7d7.js";import"./ItemNavigation-01761450.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-e76963e1.js";import"./ResponsivePopover-98351475.js";import"./Dialog-fdd9c36a.js";import"./Title-1c5327cd.js";import"./StandardListItem-df13f81b.js";import"./ListItem-fb0d8055.js";import"./RadioButton-fbf8257b.js";import"./CheckBox-d3cb6aeb.js";import"./accept-9744f30a.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-78d167a6.js";import"./Avatar-560d9cf8.js";import"./employee-0153a597.js";import"./ResponsivePopoverCommon.css-90775aea.js";import"./ValueStateMessage.css-a1e3bc74.js";import"./ValueState-ab6838cc.js";const g="The `Option` component defines the content of an option in the `Select`\n",O=`## Keyboard Handling

The \`Select\` provides advanced keyboard handling.

- \\[F4, ALT+UP, ALT+DOWN, SPACE, ENTER\\] - Opens/closes the drop-down.
- \\[UP, DOWN\\] - If the drop-down is closed - changes selection to the next or the previous option. If the drop-down is opened - moves focus to the next or the previous option.
- \\[SPACE, ENTER\\] - If the drop-down is opened - selects the focused option.
- \\[ESC\\] - Closes the drop-down without changing the selection.
- \\[HOME\\] - Navigates to first option
- \\[END\\] - Navigates to the last option
`,C=[{name:"selectedOption",readonly:"true",visibility:"public",type:"sap.ui.webc.main.ISelectOption",description:"Currently selected <code>ui5-option</code> element."}];function no(e={}){const{wrapper:n}=Object.assign({},s(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,{})})):r();function r(){const o=Object.assign({h2:"h2",h3:"h3",code:"code",p:"p",pre:"pre"},s(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:u}),`
`,t.jsx(d,{since:"0.4.0"}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(f,{of:p}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(m,{of:p}),`
`,t.jsx(i,{children:O}),`
`,t.jsx(h,{rows:C}),`
`,t.jsx(o.h2,{id:"recipes",children:"Recipes"}),`
`,t.jsxs(o.h3,{id:"get-the-id-of-the-selected-item-with-onchange",children:["Get the ID of the selected item with ",t.jsx(o.code,{children:"onChange"})]}),`
`,t.jsxs(o.p,{children:["With the help of the HTML5 ",t.jsx(o.code,{children:"data-"}),` API you can define any primitive value (like numbers, strings)
as an attribute on an element.
This data will be available on the `,t.jsx(o.code,{children:"onChange"})," event as part of the ",t.jsx(o.code,{children:"dataset"})," object of the ",t.jsx(o.code,{children:"selectedOption"}),":"]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const data = [
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
`,t.jsx(o.h2,{id:"option",children:"Option"}),`
`,t.jsx(a,{of:j}),`
`,t.jsx(i,{children:g}),`
`,t.jsx(c,{})]})}}export{no as default};
//# sourceMappingURL=Select-a82f2348.js.map
