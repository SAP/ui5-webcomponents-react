import{j as t,a as i,F as a}from"./jsx-runtime-670450c2.js";import{C as d,A as c}from"./DomRefTable.module-f1e04cd9.js";import{D as h}from"./DocsHeader-dd0cab9c.js";import{F as l}from"./Footer-6f037717.js";import"./index-f1f749bf.js";import{D as f}from"./DomRefTable-557d7ae6.js";import{S as u}from"./SubcomponentsSection-6138f2fc.js";import{M as g,C as O,a as n}from"./chunk-PCJTTTQV-0758a203.js";import{O as C}from"./index-95651de9.js";import{C as b,D as m}from"./Select.stories-6e13ed28.js";import{u as s}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-53f0c945.js";import"./iframe-5dc614e4.js";import"../sb-preview/runtime.mjs";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-76e48863.js";import"./Icon-27a81412.js";import"./Icons-5b18f7d2.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./class-map-6d48ebd3.js";import"./Button-fa05cadd.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-44cc9c22.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-f6fac1d6.js";import"./TableOfContent-51c2772d.js";import"./index-b6d55309.js";import"./Link-3b8926df.js";import"./WrappingType-b81e595a.js";import"./index-b86e29db.js";import"./Label-528b8168.js";import"./index-96c5f47c.js";import"./index-f8732276.js";import"./Popover-824d4d7c.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7f720278.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-382f34a2.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-28e7fc82.js";import"./InvisibleMessage-04f92c3f.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-09ec0732.js";import"./ListItemBase-780d7053.js";import"./ItemNavigation-01761450.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-c375cd19.js";import"./ResponsivePopover-152ab708.js";import"./Dialog-610dd06c.js";import"./Title-0440ec3f.js";import"./StandardListItem-38cf6758.js";import"./ListItem-843af2c9.js";import"./RadioButton-412fbbc0.js";import"./CheckBox-f0072def.js";import"./accept-9744f30a.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-78d167a6.js";import"./Avatar-0d8d2b25.js";import"./employee-0153a597.js";import"./ResponsivePopoverCommon.css-0466170a.js";import"./ValueStateMessage.css-7363aec7.js";import"./ValueState-ab6838cc.js";const v="The `Option` component defines the content of an option in the `Select`\n",D=`## Keyboard Handling

The \`Select\` provides advanced keyboard handling.

- \\[F4, ALT+UP, ALT+DOWN, SPACE, ENTER\\] - Opens/closes the drop-down.
- \\[UP, DOWN\\] - If the drop-down is closed - changes selection to the next or the previous option. If the drop-down is opened - moves focus to the next or the previous option.
- \\[SPACE, ENTER\\] - If the drop-down is opened - selects the focused option.
- \\[ESC\\] - Closes the drop-down without changing the selection.
- \\[HOME\\] - Navigates to first option
- \\[END\\] - Navigates to the last option
`,w=[{name:"selectedOption",readonly:"true",visibility:"public",type:"sap.ui.webc.main.ISelectOption",description:"Currently selected <code>ui5-option</code> element."}];function po(e={}){const{wrapper:r}=Object.assign({},s(),e.components);return r?t(r,Object.assign({},e,{children:t(p,{})})):p();function p(){const o=Object.assign({h2:"h2",h3:"h3",code:"code",p:"p",pre:"pre"},s(),e.components);return i(a,{children:[t(g,{of:b}),`
`,t(h,{since:"0.4.0"}),`
`,t("br",{}),`
`,t(o.h2,{id:"example",children:"Example"}),`
`,t(O,{of:m}),`
`,t(o.h2,{id:"properties",children:"Properties"}),`
`,t(d,{of:m}),`
`,t(n,{children:D}),`
`,t(f,{rows:w}),`
`,t(o.h2,{id:"recipes",children:"Recipes"}),`
`,i(o.h3,{id:"get-the-id-of-the-selected-item-with-onchange",children:["Get the ID of the selected item with ",t(o.code,{children:"onChange"})]}),`
`,i(o.p,{children:["With the help of the HTML5 ",t(o.code,{children:"data-"}),` API you can define any primitive value (like numbers, strings)
as an attribute on an element.
This data will be available on the `,t(o.code,{children:"onChange"})," event as part of the ",t(o.code,{children:"dataset"})," object of the ",t(o.code,{children:"selectedOption"}),":"]}),`
`,t(o.pre,{children:t(o.code,{className:"language-jsx",children:`const data = [
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
`,t(n,{children:u}),`
`,t(o.h2,{id:"option",children:"Option"}),`
`,t(c,{of:C}),`
`,t(n,{children:v}),`
`,t(l,{})]})}}export{po as default};
//# sourceMappingURL=Select-670f774e.js.map
