import{j as t}from"./jsx-runtime-5926aa06.js";import{C as m,A as a}from"./DomRefTable.module-bcf7e20a.js";import{D as d}from"./DocsHeader-21a3c7f1.js";import{F as c}from"./Footer-6dc616ae.js";import"./index-ebeaab24.js";import{D as h}from"./DomRefTable-828d7497.js";import{S as l}from"./SubcomponentsSection-6138f2fc.js";import{M as x,C as f,a as i}from"./chunk-PCJTTTQV-493e1ceb.js";import{O as j}from"./index-86870131.js";import{C as u,D as p}from"./Select.stories-dbc83366.js";import{u as s}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-91d5ed80.js";import"./iframe-4d607394.js";import"../sb-preview/runtime.js";import"./UI5Element-2e105c8a.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-f65ad4fd.js";import"./Icons-1a294222.js";import"./decline-bfe69317.js";import"./i18n-defaults-80781f7e.js";import"./information-bd54c92c.js";import"./class-map-6a9bd920.js";import"./Button-77ada2e8.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-fca59c5d.js";import"./index-b9e92427.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./TableOfContent-933ba941.js";import"./index-2c3e74e2.js";import"./Link-12d36fdb.js";import"./WrappingType-b81e595a.js";import"./index-308635fc.js";import"./Label-54923333.js";import"./index-9c09ad76.js";import"./index-ed4459b5.js";import"./Popover-046c0918.js";import"./Integer-f7f172c9.js";import"./PopupUtils-2e0c5ac0.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-41f002e2.js";import"./FocusableElements-d8460590.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-267f9e5d.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./index-8e6455dc.js";import"./InvisibleMessage-7cd9352f.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-52c79e89.js";import"./ListItemBase-80511c88.js";import"./ItemNavigation-897757d1.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-101ae14f.js";import"./ResponsivePopover-785fdc5f.js";import"./Dialog-1441abbc.js";import"./Title-4b970c0e.js";import"./StandardListItem-be6d96ba.js";import"./ListItem-a11c4ab9.js";import"./RadioButton-94f0be9f.js";import"./CheckBox-58c12bd7.js";import"./accept-83a59a78.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-56a3c652.js";import"./Avatar-580de7f7.js";import"./employee-649f60dc.js";import"./ResponsivePopoverCommon.css-67fc1c09.js";import"./ValueStateMessage.css-1932364a.js";import"./ValueState-ab6838cc.js";const g="The `Option` component defines the content of an option in the `Select`\n",O=`## Keyboard Handling

The \`Select\` provides advanced keyboard handling.

- \\[F4, ALT+UP, ALT+DOWN, SPACE, ENTER\\] - Opens/closes the drop-down.
- \\[UP, DOWN\\] - If the drop-down is closed - changes selection to the next or the previous option. If the drop-down is opened - moves focus to the next or the previous option.
- \\[SPACE, ENTER\\] - If the drop-down is opened - selects the focused option.
- \\[ESC\\] - Closes the drop-down without changing the selection.
- \\[HOME\\] - Navigates to first option
- \\[END\\] - Navigates to the last option
`,C=[{name:"selectedOption",readonly:"true",visibility:"public",type:"sap.ui.webc.main.ISelectOption",description:"Currently selected <code>ui5-option</code> element."}];function te(o={}){const{wrapper:n}=Object.assign({},s(),o.components);return n?t.jsx(n,Object.assign({},o,{children:t.jsx(r,{})})):r();function r(){const e=Object.assign({h2:"h2",h3:"h3",code:"code",p:"p",pre:"pre"},s(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:u}),`
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
`,t.jsx(c,{})]})}}export{te as default};
//# sourceMappingURL=Select-9bbf9300.js.map
