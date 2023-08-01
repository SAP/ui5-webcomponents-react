import{j as t}from"./jsx-runtime-d079401a.js";import{C as m,b as a}from"./DomRefTable.module-1a1a4669.js";import{D as d}from"./DocsHeader-0d1c11df.js";import{F as c}from"./Footer-af9a8ffe.js";import"./index-f1f2c4b1.js";import{D as h}from"./DomRefTable-9ad9a134.js";import{S as l}from"./SubcomponentsSection-6138f2fc.js";import{M as x,C as f,b as i}from"./chunk-S4VUQJ4A-888d1edd.js";import{O as j}from"./index-eb901c40.js";import{C as u,D as p}from"./Select.stories-3efc12c4.js";import{u as s}from"./index-59d6410c.js";import"./react-jss.esm-c310038c.js";import"./inheritsLoose-93e09647.js";import"./index-0fba4fdd.js";import"./iframe-c5150722.js";import"../sb-preview/runtime.js";import"./UI5Element-11982a12.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-99b005ba.js";import"./utils-626dc1bf.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-31253496.js";import"./Icons-234bf59e.js";import"./decline-23c167e4.js";import"./i18n-defaults-2d2bf0b6.js";import"./information-1886de07.js";import"./class-map-b4d8f3b0.js";import"./Button-cea1a8d0.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-183ab1a9.js";import"./index-47d0a85a.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-783dc33d.js";import"./index-706a5b34.js";import"./Integer-f7f172c9.js";import"./index-1bb205c0.js";import"./Avatar-5dbee8fc.js";import"./ResizeHandler-9ebe913c.js";import"./employee-e34ffee2.js";import"./index-a9c1cae5.js";import"./index-34c3e659.js";import"./Link-5f9413e3.js";import"./WrappingType-b81e595a.js";import"./index-56b3d57c.js";import"./TableOfContent-1848aa4c.js";import"./index-58ef0d95.js";import"./Label-715c9061.js";import"./index-c74c9f7f.js";import"./index-716da007.js";import"./index-a5c7f622.js";import"./Popover-2c2db418.js";import"./PopupsCommon.css-57708035.js";import"./FocusableElements-708d1a4e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-56038137.js";import"./BrowserScrollbar.css-527f9f64.js";import"./index-92d824d3.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./index-c3b40787.js";import"./InvisibleMessage-e4263a1a.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-f82584de.js";import"./ListItemBase-2bee9969.js";import"./ItemNavigation-a882fb90.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-9c77b370.js";import"./ResponsivePopover-5dd29d2d.js";import"./Dialog-b8b389fd.js";import"./Title-3276c542.js";import"./StandardListItem-63c10fff.js";import"./ListItem-e17fcfe4.js";import"./RadioButton-dc3e74e5.js";import"./CheckBox-bea14c51.js";import"./accept-6c83709e.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-c0f59065.js";import"./ResponsivePopoverCommon.css-c96ec8b5.js";import"./ValueStateMessage.css-e53cdf31.js";import"./ValueState-ab6838cc.js";const g="The `Option` component defines the content of an option in the `Select`\n",O=`## Keyboard Handling

The \`Select\` provides advanced keyboard handling.

- \\[F4, ALT+UP, ALT+DOWN, SPACE, ENTER\\] - Opens/closes the drop-down.
- \\[UP, DOWN\\] - If the drop-down is closed - changes selection to the next or the previous option. If the drop-down is opened - moves focus to the next or the previous option.
- \\[SPACE, ENTER\\] - If the drop-down is opened - selects the focused option.
- \\[ESC\\] - Closes the drop-down without changing the selection.
- \\[HOME\\] - Navigates to first option
- \\[END\\] - Navigates to the last option
`,b=[{name:"selectedOption",readonly:"true",visibility:"public",type:"sap.ui.webc.main.ISelectOption",description:"Currently selected <code>ui5-option</code> element."}];function no(e={}){const{wrapper:n}=Object.assign({},s(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,{})})):r();function r(){const o=Object.assign({h2:"h2",h3:"h3",code:"code",p:"p",pre:"pre"},s(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:u}),`
`,t.jsx(d,{since:"0.4.0"}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(f,{of:p}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(m,{of:p}),`
`,t.jsx(i,{children:O}),`
`,t.jsx(h,{rows:b}),`
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
//# sourceMappingURL=Select-6866f488.js.map
