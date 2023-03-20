import{j as t,a as i,F as s}from"./jsx-runtime-670450c2.js";import{C as c,A as d}from"./DomRefTable.module-c48796a9.js";import{D as h}from"./DocsHeader-bc74d072.js";import{F as l}from"./Footer-999de8d0.js";import"./index-f1f749bf.js";import{D as f}from"./DomRefTable-bef444e7.js";import{S as u}from"./SubcomponentsSection-6138f2fc.js";import{M as g,C as O,a as n}from"./chunk-PCJTTTQV-48904002.js";import{O as C}from"./index-837584fb.js";import{C as b,D as m}from"./Select.stories-27c3bd1f.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-4e97aa6e.js";import"./iframe-9e49c815.js";import"../sb-preview/runtime.mjs";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-65cd39a0.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./Icon-7987c836.js";import"./Icons-fe6e657a.js";import"./decline-6bd98a2e.js";import"./i18n-defaults-80781f7e.js";import"./information-b6c8ed8e.js";import"./class-map-95320e87.js";import"./Button-bc3a11a1.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-da505e61.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-5a66241f.js";import"./TableOfContent-7ceed772.js";import"./index-13b4d46f.js";import"./Link-018547e8.js";import"./WrappingType-b81e595a.js";import"./index-52b3113b.js";import"./Label-ccc234fe.js";import"./index-96c5f47c.js";import"./index-be074d53.js";import"./Popover-224d761a.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-9873a291.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-1da6d0d2.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-cae0a379.js";import"./react-18-ecd79c7b.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-ab9edf96.js";import"./InvisibleMessage-4a23efee.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-cfb4a4bd.js";import"./ListItemBase-a0bc6999.js";import"./ItemNavigation-8e291cfa.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-15ff681f.js";import"./ResponsivePopover-fcaf2b05.js";import"./Dialog-43ec4fb1.js";import"./Title-129aeb28.js";import"./StandardListItem-ac3f40c5.js";import"./ListItem-83c0fb9e.js";import"./RadioButton-a8c23c83.js";import"./CheckBox-80dd6e5f.js";import"./accept-d8c33d70.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-52a56681.js";import"./Avatar-7e1d4e21.js";import"./employee-1bc983a2.js";import"./ResponsivePopoverCommon.css-ca4e9b7c.js";import"./ValueStateMessage.css-f5f87de3.js";import"./ValueState-ab6838cc.js";const v="The `Option` component defines the content of an option in the `Select`\n",D=`## Keyboard Handling

The \`Select\` provides advanced keyboard handling.  

*   \\[F4, ALT+UP, ALT+DOWN, SPACE, ENTER\\] - Opens/closes the drop-down.
*   \\[UP, DOWN\\] - If the drop-down is closed - changes selection to the next or the previous option. If the drop-down is opened - moves focus to the next or the previous option.
*   \\[SPACE, ENTER\\] - If the drop-down is opened - selects the focused option.
*   \\[ESC\\] - Closes the drop-down without changing the selection.
*   \\[HOME\\] - Navigates to first option
*   \\[END\\] - Navigates to the last option`,w=[{name:"selectedOption",readonly:"true",visibility:"public",type:"sap.ui.webc.main.ISelectOption",description:"Currently selected <code>ui5-option</code> element."}];function po(e={}){const{wrapper:r}=Object.assign({},a(),e.components);return r?t(r,Object.assign({},e,{children:t(p,{})})):p();function p(){const o=Object.assign({h2:"h2",h3:"h3",code:"code",p:"p",pre:"pre"},a(),e.components);return i(s,{children:[t(g,{of:b}),`
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
`,t(l,{})]})}}export{po as default};
//# sourceMappingURL=Select-810c8085.js.map
