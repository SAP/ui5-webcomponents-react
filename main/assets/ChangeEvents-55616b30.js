import{j as e,a as o,F as s}from"./jsx-runtime-670450c2.js";import"./chunk-QDOP3WTA-8332a0d6.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{M as d}from"./index-aa97f4cf.js";import"./DomRefTable.module-28fabef5.js";import"./index-f1f749bf.js";import"./Import-b4029173.js";import{F as c}from"./Footer-73b0a4bc.js";import{u as r}from"./index-4fb8b842.js";import"./iframe-cc4d20e1.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./react-jss.esm-fe4dc3ff.js";import"./index-3f70dd76.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-c82262ef.js";import"./MarkedEvents-8627ed01.js";import"./decline-0a03b0b0.js";import"./Icons-7b82f601.js";import"./class-map-5d8e4b2b.js";import"./Button-e27d9549.js";import"./Keys-3acbae73.js";import"./Device-208919c6.js";import"./index-1d945bd3.js";import"./clsx.m-1229b3e0.js";import"./Footer.module-c4f3b823.js";import"./index-1f5ff6bf.js";import"./WrappingType-b81e595a.js";import"./index-690a8332.js";import"./Label-040efebd.js";import"./index-e143de36.js";import"./Popover-cbbb060d.js";import"./Integer-d9976c13.js";import"./PopupsCommon.css-ab0735c6.js";import"./FocusableElements-c2f39514.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";function ce(n={}){const{wrapper:i}=Object.assign({},r(),n.components);return i?e(i,Object.assign({},n,{children:e(a,{})})):a();function a(){const t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",strong:"strong",pre:"pre"},r(),n.components);return o(s,{children:[e(d,{title:"IDs via dataset"}),`
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
`,e(c,{})]})}}export{ce as default};
//# sourceMappingURL=ChangeEvents-55616b30.js.map
