import{j as t,a as i,F as s}from"./jsx-runtime-670450c2.js";import{C as c,A as d}from"./DomRefTable.module-731ee0d2.js";import{D as h}from"./DocsHeader-ba195ff8.js";import{F as l}from"./Footer-47b89308.js";import"./index-f1f749bf.js";import{D as f}from"./DomRefTable-b2d966ec.js";import{S as u}from"./SubcomponentsSection-6138f2fc.js";import{M as g,C as O,a as n}from"./index-8e2a5d55.js";import{O as C}from"./index-e9ac821c.js";import{C as b,D as m}from"./Select.stories-f7312dd1.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-PCJTTTQV-871a82fa.js";import"./iframe-98936aba.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-0eaf838d.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./event-97133b94.js";import"./decline-f2b294b3.js";import"./Icons-7b82f601.js";import"./i18n-defaults-80781f7e.js";import"./information-50e1ad0f.js";import"./class-map-5d8e4b2b.js";import"./Icon-459702a7.js";import"./Keys-3acbae73.js";import"./Button-04bad9a0.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-d66b3d5e.js";import"./index-b4aa831c.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-91c50412.js";import"./TableOfContent-fbecd9fc.js";import"./index-70efae5f.js";import"./Link-6d546ee9.js";import"./WrappingType-b81e595a.js";import"./index-062d18aa.js";import"./Label-040efebd.js";import"./Footer.module-f90cad7d.js";import"./index-c56b59c5.js";import"./Popover-907d427e.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7d9fbba1.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./index-27ddd835.js";import"./InvisibleMessage-4a23efee.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-068fe0af.js";import"./ListItemBase-16737f88.js";import"./ItemNavigation-18222ac6.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-46a9aff5.js";import"./ResponsivePopover-36c83c4d.js";import"./Dialog-644759b8.js";import"./Title-b986a4bd.js";import"./StandardListItem-ed465290.js";import"./ListItem-20b1ed77.js";import"./RadioButton-28647d07.js";import"./CheckBox-90578acd.js";import"./accept-a98baca8.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-bbef5919.js";import"./Avatar-7c89587d.js";import"./employee-98ce1b38.js";import"./ResponsivePopoverCommon.css-187e38b6.js";import"./ValueStateMessage.css-37773c69.js";import"./ValueState-ab6838cc.js";const v="The `Option` component defines the content of an option in the `Select`\n",D=`## Keyboard Handling

The \`Select\` provides advanced keyboard handling.  

*   \\[F4, ALT+UP, ALT+DOWN, SPACE, ENTER\\] - Opens/closes the drop-down.
*   \\[UP, DOWN\\] - If the drop-down is closed - changes selection to the next or the previous option. If the drop-down is opened - moves focus to the next or the previous option.
*   \\[SPACE, ENTER\\] - If the drop-down is opened - selects the focused option.
*   \\[ESC\\] - Closes the drop-down without changing the selection.
*   \\[HOME\\] - Navigates to first option
*   \\[END\\] - Navigates to the last option`,w=[{name:"selectedOption",readonly:"true",visibility:"public",type:"sap.ui.webc.main.ISelectOption",description:"Currently selected <code>ui5-option</code> element."}];function ho(e={}){const{wrapper:r}=Object.assign({},a(),e.components);return r?t(r,Object.assign({},e,{children:t(p,{})})):p();function p(){const o=Object.assign({h2:"h2",h3:"h3",code:"code",p:"p",pre:"pre"},a(),e.components);return i(s,{children:[t(g,{of:b}),`
`,t(h,{since:"0.4.0"}),`
`,t("br",{}),`
`,t(o.h2,{children:"Example"}),`
`,t(O,{of:m}),`
`,t(o.h2,{children:"Properties"}),`
`,t(c,{of:m}),`
`,t(n,{children:D}),`
`,t(f,{rows:w}),`
`,t(o.h2,{children:"Recipes"}),`
`,i(o.h3,{children:["Get the ID of the selected item with ",t(o.code,{children:"onChange"})]}),`
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
`,t(o.h2,{children:"Option"}),`
`,t(d,{of:C}),`
`,t(n,{children:v}),`
`,t(l,{})]})}}export{ho as default};
//# sourceMappingURL=Select-2eada244.js.map
