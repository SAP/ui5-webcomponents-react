import{j as t}from"./jsx-runtime-d079401a.js";import{C as m,b as a}from"./DomRefTable.module-0cb57df1.js";import{D as d}from"./DocsHeader-991d32fe.js";import{F as c}from"./Footer-3f8faf83.js";import"./index-f1f2c4b1.js";import{D as h}from"./DomRefTable-730c5000.js";import{S as l}from"./SubcomponentsSection-6138f2fc.js";import{M as x,C as f,b as i}from"./chunk-S4VUQJ4A-2f00d13c.js";import{O as j}from"./index-59c76ff8.js";import{C as u,D as p}from"./Select.stories-fd79dd62.js";import{u as s}from"./index-59d6410c.js";import"./react-jss.esm-c310038c.js";import"./inheritsLoose-93e09647.js";import"./index-099fdb19.js";import"./iframe-95e95fd4.js";import"../sb-preview/runtime.js";import"./UI5Element-11982a12.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-8885c1b6.js";import"./utils-626dc1bf.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-6459d230.js";import"./Icons-234bf59e.js";import"./decline-23c167e4.js";import"./i18n-defaults-2d2bf0b6.js";import"./information-1886de07.js";import"./class-map-2a13820b.js";import"./Button-1a04ac66.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-183ab1a9.js";import"./index-47d0a85a.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-783dc33d.js";import"./index-f092546e.js";import"./Integer-f7f172c9.js";import"./index-abc2cc05.js";import"./Avatar-60ab180c.js";import"./ResizeHandler-9ebe913c.js";import"./employee-e34ffee2.js";import"./index-81ae69cd.js";import"./index-5644339f.js";import"./Link-6bda31f4.js";import"./WrappingType-b81e595a.js";import"./index-14ef1273.js";import"./TableOfContent-0ec8ba6f.js";import"./index-4b7fcd1e.js";import"./Label-78e0be96.js";import"./index-c74c9f7f.js";import"./index-9e4a4085.js";import"./index-acff0a7f.js";import"./Popover-d6899044.js";import"./PopupsCommon.css-a62fa435.js";import"./FocusableElements-708d1a4e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-4f876188.js";import"./BrowserScrollbar.css-7fb20ad4.js";import"./index-92d824d3.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./index-fcc0bc63.js";import"./InvisibleMessage-e4263a1a.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-f82584de.js";import"./ListItemBase-d8498eca.js";import"./ItemNavigation-a882fb90.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-190599c1.js";import"./ResponsivePopover-13f9a781.js";import"./Dialog-08d74f85.js";import"./Title-bd8ae788.js";import"./StandardListItem-3b9e9896.js";import"./ListItem-9a645ab6.js";import"./RadioButton-d36e93a9.js";import"./CheckBox-61b2553a.js";import"./accept-6c83709e.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-c0f59065.js";import"./ResponsivePopoverCommon.css-bf040dc8.js";import"./ValueStateMessage.css-0ca703ad.js";import"./ValueState-ab6838cc.js";const g="The `Option` component defines the content of an option in the `Select`\n",O=`## Keyboard Handling

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
//# sourceMappingURL=Select-8aca3107.js.map
