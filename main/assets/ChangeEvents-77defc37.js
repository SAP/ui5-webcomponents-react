import{j as e,a as o,F as s}from"./jsx-runtime-670450c2.js";import"./chunk-G4YQS2SV-420b4ede.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{M as d}from"./index-afbbd947.js";import"./DomRefTable.module-6ce8754c.js";import"./index-f1f749bf.js";import"./Import-2bb789f5.js";import{F as c}from"./Footer-50809b9e.js";import{u as r}from"./index-4fb8b842.js";import"./iframe-0f619c81.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./react-jss.esm-e54d2f1d.js";import"./index-62607488.js";import"./UI5Element-386cb3f6.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-34dd487e.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-dee23f38.js";import"./MarkedEvents-0e37da6f.js";import"./decline-48ecb430.js";import"./Icons-03f19c25.js";import"./class-map-60f59e95.js";import"./Button-981a9381.js";import"./Keys-50a1cb5a.js";import"./index-7ac1a15f.js";import"./clsx.m-1229b3e0.js";import"./Footer.module-c4f3b823.js";import"./index-dfb05037.js";import"./Label-f9741f9c.js";import"./WrappingType-b81e595a.js";import"./index-56e3fc82.js";import"./index-0b25d04c.js";import"./Popover-ff8f156e.js";import"./Integer-5fa4beea.js";import"./FocusableElements-13161f05.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-b3fcb37c.js";import"./MediaRange-25b98f31.js";import"./style-map-63946e4f.js";function de(n={}){const{wrapper:i}=Object.assign({},r(),n.components);return i?e(i,Object.assign({},n,{children:e(a,{})})):a();function a(){const t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",strong:"strong",pre:"pre"},r(),n.components);return o(s,{children:[e(d,{title:"IDs via dataset"}),`
`,e(t.h1,{children:"Using dataset as container for IDs and other values"}),`
`,o(t.p,{children:["Many components like the ",e(t.code,{children:"Select"}),", ",e(t.code,{children:"List"}),", ",e(t.code,{children:"Table"}),`, etc. are registering an event that handles the selection of child elements/components.
In the handler of the event you receive the corresponding element(s), where you can e.g. access the `,e(t.code,{children:"textContent"})," to retrieve the selected text."]}),`
`,o(t.p,{children:[`In many cases the "text" is only there for users of the application, the actual value for e.g. the backend is often an id or a key.
To also include these in the callback of the event, we recommend using `,e(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset",children:"HTMLElement.dataset"}),`.
With the help of the `,e(t.code,{children:"data-"})," API you can define any primitive value (like numbers, strings) as an attribute on an element. This data will be available on the change event as part of the dataset object of the selected element(s)."]}),`
`,e(t.p,{children:"Here you can find a few examples:"}),`
`,e(t.p,{children:e(t.strong,{children:"Select:"})}),`
`,e(t.pre,{children:e(t.code,{className:"language-jsx",children:`const data = [
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
`,e(t.p,{children:e(t.strong,{children:"List:"})}),`
`,e(t.pre,{children:e(t.code,{className:"language-jsx",children:`const onSelectionChange = (event) => {
  const { targetItem } = event.detail;
  console.log(targetItem.dataset.custom);
};

<List mode={ListMode.MultiSelect} onSelectionChange={onSelectionChange}>
  <StandardListItem additionalText="3" data-custom="custom value of list item 1">
    List Item 1
  </StandardListItem>
  <StandardListItem additionalText="2" data-custom="custom value of list item 2">
    List Item 2
  </StandardListItem>
  <StandardListItem additionalText="1" data-custom="custom value of list item 3">
    List Item 3
  </StandardListItem>
</List>;
`})}),`
`,e(t.p,{children:e(t.strong,{children:"MultiInput with suggestion items:"})}),`
`,e(t.pre,{children:e(t.code,{className:"language-jsx",children:`const onTokenDelete = (event) => {
  const { token } = event.detail;
  console.log(token.dataset.code);
};
const onSuggestionItemSelect = (event) => {
  const { item } = event.detail;
  console.log(item.dataset.code);
};

<MultiInput
  onTokenDelete={onTokenDelete}
  onSuggestionItemSelect={onSuggestionItemSelect}
  showSuggestions
  tokens={
    <>
      <Token data-code="ARG" text="Argentina" />
      <Token data-code="BGR" text="Bulgaria" />
      <Token data-code="FIN" text="Finland" />
      <Token data-code="MEX" text="Mexico" />
      <Token data-code="PHL" text="Philippines" />
    </>
  }
>
  <SuggestionItem data-code="GBR" icon="globe" text="United Kingdom" />
  <SuggestionItem data-code="USA" icon="globe" text="United States" />
  <SuggestionItem data-code="DEU" icon="globe" text="Germany" />
  <SuggestionItem data-code="ISL" icon="globe" text="Iceland" />
  <SuggestionItem data-code="MDA" icon="globe" text="Moldova" />
  <SuggestionItem data-code="MAR" icon="globe" text="Morocco" />
</MultiInput>;
`})}),`
`,e(c,{})]})}}export{de as default};
//# sourceMappingURL=ChangeEvents-77defc37.js.map
