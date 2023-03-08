import{M as u,C as O,j as f,a}from"./index-f70aee0a.js";import{S as r}from"./index-efa014ea.js";import{V as d}from"./ValueState-ab6838cc.js";import{O as o}from"./index-623acbe9.js";import{A as g}from"./DomRefTable.module-96664c38.js";import{D as S}from"./DocsHeader-a1ee531e.js";import{F as b}from"./Footer-1b2f397f.js";import{a as i,j as t,F as v}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{D as y}from"./DomRefTable-79fff0de.js";import{S as D}from"./SubcomponentsSection-6138f2fc.js";import{u as c}from"./index-4fb8b842.js";import"./iframe-010bdd4f.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./MarkedEvents-8627ed01.js";import"./AriaLabelHelper-c82262ef.js";import"./Keys-3acbae73.js";import"./InvisibleMessage-4a23efee.js";import"./ValueState-2c5e5904.js";import"./slim-arrow-down-068fe0af.js";import"./Icons-7b82f601.js";import"./decline-0a03b0b0.js";import"./Device-208919c6.js";import"./Integer-d9976c13.js";import"./ListItemBase-9f62536c.js";import"./ResizeHandler-1fa8a094.js";import"./ItemNavigation-9e1aa83a.js";import"./TabbableElements-0285a530.js";import"./FocusableElements-c2f39514.js";import"./PopupsCommon.css-ab0735c6.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./class-map-5d8e4b2b.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-b3c085b8.js";import"./Label-040efebd.js";import"./WrappingType-b81e595a.js";import"./ResponsivePopover-1b0c065e.js";import"./Popover-cbbb060d.js";import"./Dialog-0097f4e9.js";import"./Button-e27d9549.js";import"./Title-b986a4bd.js";import"./StandardListItem-0b926583.js";import"./ListItem-b545bc6e.js";import"./RadioButton-4ed70174.js";import"./CheckBox-2761aa24.js";import"./accept-a98baca8.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-bbef5919.js";import"./Avatar-358386af.js";import"./employee-98ce1b38.js";import"./ResponsivePopoverCommon.css-187e38b6.js";import"./ValueStateMessage.css-37773c69.js";import"./chunk-QDOP3WTA-1206d1a4.js";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-fe4dc3ff.js";import"./index-bddfc370.js";import"./index-cbb29537.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-df0df183.js";import"./TableOfContent-87698423.js";import"./index-7bcee539.js";import"./index-417f6fe5.js";import"./Footer.module-c4f3b823.js";import"./index-ae377cfa.js";const C=`## Keyboard Handling

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
//# sourceMappingURL=Select.stories-08f154f9.js.map
