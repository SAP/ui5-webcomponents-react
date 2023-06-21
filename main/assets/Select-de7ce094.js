import{j as t}from"./jsx-runtime-5926aa06.js";import{C as s,A as a}from"./DomRefTable.module-2d5b74b4.js";import{D as d}from"./DocsHeader-461a5494.js";import{F as c}from"./Footer-5acfe8ce.js";import"./index-ebeaab24.js";import{D as h}from"./DomRefTable-c3ed72e0.js";import{S as l}from"./SubcomponentsSection-6138f2fc.js";import{M as x,C as f,a as i}from"./chunk-PCJTTTQV-aa78ff02.js";import{O as j}from"./index-26a606d9.js";import{C as u,D as p}from"./Select.stories-03ab9b2e.js";import{u as m}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-79c22084.js";import"./iframe-48dea8cd.js";import"../sb-preview/runtime.js";import"./UI5Element-b6f0d493.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-bd7f152d.js";import"./Icons-bac066a4.js";import"./decline-e64814d9.js";import"./i18n-defaults-80781f7e.js";import"./information-f9c20ced.js";import"./class-map-6a9bd920.js";import"./Button-37628041.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-99b8bbf4.js";import"./i18n-defaults-ac1c9dde.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-aaf25c56.js";import"./index-09a295bc.js";import"./Integer-f7f172c9.js";import"./index-f88d1151.js";import"./Avatar-a8f74fed.js";import"./ResizeHandler-021ae412.js";import"./employee-a1fe0822.js";import"./index-f60e9536.js";import"./index-197eeea0.js";import"./Link-fd0c7f1f.js";import"./WrappingType-b81e595a.js";import"./index-4c0ab015.js";import"./TableOfContent-928aecbe.js";import"./index-295ae1d1.js";import"./Label-77c4efbc.js";import"./index-9c09ad76.js";import"./index-ab0e5734.js";import"./index-2754203c.js";import"./Popover-ceaaf26b.js";import"./PopupUtils-46fb16e4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-27fb56a9.js";import"./FocusableElements-6ebe483a.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./index-04b27f1b.js";import"./InvisibleMessage-997dffc5.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-84d27593.js";import"./ListItemBase-d9c7b338.js";import"./ItemNavigation-9c411313.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-0490e909.js";import"./ResponsivePopover-a431d471.js";import"./Dialog-da422c24.js";import"./Title-6c23a67a.js";import"./StandardListItem-a8677076.js";import"./ListItem-833837ab.js";import"./RadioButton-ac0d39a7.js";import"./CheckBox-0289245d.js";import"./accept-549e2cca.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-9332e21e.js";import"./ResponsivePopoverCommon.css-50da1549.js";import"./ValueStateMessage.css-b22c5ae7.js";import"./ValueState-ab6838cc.js";const g="The `Option` component defines the content of an option in the `Select`\n",O=`## Keyboard Handling

The \`Select\` provides advanced keyboard handling.

- \\[F4, ALT+UP, ALT+DOWN, SPACE, ENTER\\] - Opens/closes the drop-down.
- \\[UP, DOWN\\] - If the drop-down is closed - changes selection to the next or the previous option. If the drop-down is opened - moves focus to the next or the previous option.
- \\[SPACE, ENTER\\] - If the drop-down is opened - selects the focused option.
- \\[ESC\\] - Closes the drop-down without changing the selection.
- \\[HOME\\] - Navigates to first option
- \\[END\\] - Navigates to the last option
`,C=[{name:"selectedOption",readonly:"true",visibility:"public",type:"sap.ui.webc.main.ISelectOption",description:"Currently selected <code>ui5-option</code> element."}];function ro(e={}){const{wrapper:n}=Object.assign({},m(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,{})})):r();function r(){const o=Object.assign({h2:"h2",h3:"h3",code:"code",p:"p",pre:"pre"},m(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:u}),`
`,t.jsx(d,{since:"0.4.0"}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(f,{of:p}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(s,{of:p}),`
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
`,t.jsx(c,{})]})}}export{ro as default};
//# sourceMappingURL=Select-de7ce094.js.map
