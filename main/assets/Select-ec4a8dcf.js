import{j as t,a as i,F as a}from"./jsx-runtime-670450c2.js";import{C as d,A as c}from"./DomRefTable.module-f699ea68.js";import{D as h}from"./DocsHeader-ac0c999a.js";import{F as l}from"./Footer-ac07eb43.js";import"./index-f1f749bf.js";import{D as f}from"./DomRefTable-ad10dc4d.js";import{S as u}from"./SubcomponentsSection-6138f2fc.js";import{M as g,C as O,a as n}from"./chunk-PCJTTTQV-9fdac538.js";import{O as C}from"./index-5c26d92e.js";import{C as b,D as m}from"./Select.stories-ec2dd6ba.js";import{u as s}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-328480cf.js";import"./iframe-02fbf49e.js";import"../sb-preview/runtime.mjs";import"./UI5Element-5e77b351.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-76e48863.js";import"./Icon-a70637b5.js";import"./Icons-85b0e9dd.js";import"./decline-07b4d490.js";import"./i18n-defaults-80781f7e.js";import"./information-bce3ba82.js";import"./class-map-6d48ebd3.js";import"./Button-35e7f923.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-2bd17005.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-3172a531.js";import"./TableOfContent-37189371.js";import"./index-68df259c.js";import"./Link-8808efba.js";import"./WrappingType-b81e595a.js";import"./index-88346384.js";import"./Label-e24223e9.js";import"./index-96c5f47c.js";import"./index-98a33e29.js";import"./Popover-eac39f76.js";import"./Integer-f7f172c9.js";import"./PopupUtils-d0ec75b7.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-ab897c30.js";import"./FocusableElements-2da74965.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-b2c643e0.js";import"./ResizeHandler-653daa1f.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-f3d897cc.js";import"./InvisibleMessage-cb4d6680.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-cb00f67b.js";import"./ListItemBase-b73c7fed.js";import"./ItemNavigation-316291cb.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-1df19c4b.js";import"./ResponsivePopover-fe818bf5.js";import"./Dialog-0e44ed8a.js";import"./Title-07ee6300.js";import"./StandardListItem-2d39af82.js";import"./ListItem-3c89af96.js";import"./RadioButton-17175673.js";import"./CheckBox-c006676c.js";import"./accept-0670a13e.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-24b9c100.js";import"./Avatar-f4abe909.js";import"./employee-f8bb953b.js";import"./ResponsivePopoverCommon.css-19238fee.js";import"./ValueStateMessage.css-2737d025.js";import"./ValueState-ab6838cc.js";const v="The `Option` component defines the content of an option in the `Select`\n",D=`## Keyboard Handling

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
//# sourceMappingURL=Select-ec4a8dcf.js.map
