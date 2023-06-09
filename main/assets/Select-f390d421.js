import{j as t}from"./jsx-runtime-5926aa06.js";import{C as m,A as a}from"./DomRefTable.module-286481af.js";import{D as d}from"./DocsHeader-5998c08d.js";import{F as c}from"./Footer-fe3b3c79.js";import"./index-ebeaab24.js";import{D as h}from"./DomRefTable-dccce457.js";import{S as l}from"./SubcomponentsSection-6138f2fc.js";import{M as x,C as f,a as i}from"./chunk-PCJTTTQV-454fa267.js";import{O as j}from"./index-1d8810cc.js";import{C as u,D as p}from"./Select.stories-2acf8ca8.js";import{u as s}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-e621df0b.js";import"./iframe-821f409c.js";import"../sb-preview/runtime.js";import"./UI5Element-b1843653.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-aac9cdc2.js";import"./Icons-9f549e0f.js";import"./decline-d907918c.js";import"./i18n-defaults-80781f7e.js";import"./information-0f993e39.js";import"./class-map-6a9bd920.js";import"./Button-37a8c146.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-fca59c5d.js";import"./index-4c0ab015.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./TableOfContent-163e6261.js";import"./index-d78271b6.js";import"./Link-64c69167.js";import"./WrappingType-b81e595a.js";import"./index-4cf9b2d5.js";import"./Label-350e96fc.js";import"./index-9c09ad76.js";import"./index-e4db3b9b.js";import"./Popover-a3a62d04.js";import"./Integer-f7f172c9.js";import"./PopupUtils-2f7e8748.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-38257fbf.js";import"./FocusableElements-72585d9b.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-8726336f.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./index-45584cc3.js";import"./InvisibleMessage-96ebfb5c.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-72222bb1.js";import"./ListItemBase-5d83f75f.js";import"./ItemNavigation-5f1efe0b.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-50734768.js";import"./ResponsivePopover-5c5386af.js";import"./Dialog-5f3c9cfb.js";import"./Title-684c2d0e.js";import"./StandardListItem-8408d1fd.js";import"./ListItem-c43ad95c.js";import"./RadioButton-8c17b531.js";import"./CheckBox-f1563b72.js";import"./accept-31e71d55.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-82b13059.js";import"./Avatar-a15daf14.js";import"./employee-2384bc11.js";import"./ResponsivePopoverCommon.css-5e0f54ec.js";import"./ValueStateMessage.css-8827ddc0.js";import"./ValueState-ab6838cc.js";const g="The `Option` component defines the content of an option in the `Select`\n",O=`## Keyboard Handling

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
//# sourceMappingURL=Select-f390d421.js.map
