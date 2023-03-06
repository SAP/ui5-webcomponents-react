import{M as u,C as O,j as f,a}from"./index-fc65de3d.js";import{S as r}from"./index-b3cf009d.js";import{V as d}from"./ValueState-ab6838cc.js";import{O as o}from"./index-8a661e17.js";import{A as g}from"./DomRefTable.module-fb210060.js";import{D as S}from"./DocsHeader-b1974699.js";import{F as b}from"./Footer-54fe8402.js";import{a as i,j as t,F as v}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{D as y}from"./DomRefTable-675f43fa.js";import{S as D}from"./SubcomponentsSection-6138f2fc.js";import{u as c}from"./index-4fb8b842.js";import"./iframe-51c9489d.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./UI5Element-386cb3f6.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-34dd487e.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./Keys-50a1cb5a.js";import"./InvisibleMessage-0cf18861.js";import"./Integer-5fa4beea.js";import"./MarkedEvents-0e37da6f.js";import"./AriaLabelHelper-dee23f38.js";import"./class-map-60f59e95.js";import"./FocusableElements-13161f05.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-b3fcb37c.js";import"./MediaRange-25b98f31.js";import"./style-map-63946e4f.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-fdce342b.js";import"./Icons-03f19c25.js";import"./decline-48ecb430.js";import"./Label-f9741f9c.js";import"./WrappingType-b81e595a.js";import"./ResponsivePopover-f9a06272.js";import"./Popover-ff8f156e.js";import"./Dialog-30b3aaf0.js";import"./Button-981a9381.js";import"./Title-256f7c0a.js";import"./ListItemBase-a71fd372.js";import"./ItemNavigation-a1cb3c20.js";import"./fastNavigation-ebf07f1c.js";import"./TabbableElements-98652d50.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-344b418d.js";import"./StandardListItem-d042803f.js";import"./ListItem-5a448e1e.js";import"./RadioButton-bb0fefa8.js";import"./CheckBox-5c169af0.js";import"./accept-39710bd2.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-dcb3f847.js";import"./Avatar-f74ae24a.js";import"./employee-dc85b60f.js";import"./ResponsivePopoverCommon.css-c2b66233.js";import"./ValueStateMessage.css-88180c67.js";import"./chunk-G4YQS2SV-3a764711.js";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./index-cbce79a2.js";import"./index-b4aa831c.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-8d74f27b.js";import"./TableOfContent-9c193c7f.js";import"./index-e644fe70.js";import"./index-224c0e2b.js";import"./Footer.module-c4f3b823.js";import"./index-273db19e.js";const C=`## Keyboard Handling

The \`Select\` provides advanced keyboard handling.  

*   \\[F4, ALT+UP, ALT+DOWN, SPACE, ENTER\\] - Opens/closes the drop-down.
*   \\[UP, DOWN\\] - If the drop-down is closed - changes selection to the next or the previous option. If the drop-down is opened - moves focus to the next or the previous option.
*   \\[SPACE, ENTER\\] - If the drop-down is opened - selects the focused option.
*   \\[ESC\\] - Closes the drop-down without changing the selection.
*   \\[HOME\\] - Navigates to first option
*   \\[END\\] - Navigates to the last option`,w="The `Option` component defines the content of an option in the `Select`\n",x=[{name:"selectedOption",readonly:"true",visibility:"public",type:"sap.ui.webc.main.ISelectOption",description:"Currently selected <code>ui5-option</code> element."}];function M(n={}){const{wrapper:s}=Object.assign({},c(),n.components);return s?t(s,{...n,children:t(m,{})}):m();function m(){const e=Object.assign({h2:"h2",h3:"h3",code:"code",p:"p",pre:"pre"},c(),n.components);return i(v,{children:[t(u,{title:"Inputs / Select",component:r,subcomponents:{Option:o},argTypes:{children:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:d.None}}),`
`,t(S,{since:"0.4.0"}),`
`,t("br",{}),`
`,t(e.h2,{children:"Example"}),`
`,t(O,{children:t(f,{name:"Default",children:h=>i(r,{...h,children:[t(o,{children:"Option 1"}),t(o,{children:"Option 2"}),t(o,{children:"Option 3"}),t(o,{children:"Option 4"}),t(o,{children:"Option 5"})]})})}),`
`,t(e.h2,{children:"Properties"}),`
`,t(g,{story:"Default"}),`
`,t(a,{children:C}),`
`,t(y,{rows:x}),`
`,t(e.h2,{children:"Recipes"}),`
`,i(e.h3,{children:["Get the ID of the selected item with ",t(e.code,{children:"onChange"})]}),`
`,i(e.p,{children:["With the help of the HTML5 ",t(e.code,{children:"data-"}),` API you can define any primitive value (like numbers, strings)
as an attribute on an element.
This data will be available on the `,t(e.code,{children:"onChange"})," event as part of the ",t(e.code,{children:"dataset"})," object of the ",t(e.code,{children:"selectedOption"}),":"]}),`
`,t(e.pre,{children:t(e.code,{className:"language-jsx",children:`const data = [
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
`,t(a,{children:D}),`
`,t(e.h2,{children:"Option"}),`
`,t(a,{children:w}),`
`,t(b,{})]})}}const l=n=>i(r,{...n,children:[t(o,{children:"Option 1"}),t(o,{children:"Option 2"}),t(o,{children:"Option 3"}),t(o,{children:"Option 4"}),t(o,{children:"Option 5"})]});l.storyName="Default";l.parameters={storySource:{source:`args => {
  return <Select {...args}>
          <Option>Option 1</Option>
          <Option>Option 2</Option>
          <Option>Option 3</Option>
          <Option>Option 4</Option>
          <Option>Option 5</Option>
        </Select>;
}`}};const p={title:"Inputs / Select",component:r,subcomponents:{Option:o},args:{valueState:d.None},argTypes:{children:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};p.parameters=p.parameters||{};p.parameters.docs={...p.parameters.docs||{},page:M};const ne=["defaultStory"];export{ne as __namedExportsOrder,p as default,l as defaultStory};
//# sourceMappingURL=Select.stories-fe89db28.js.map
