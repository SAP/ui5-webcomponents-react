import{j as e}from"./jsx-runtime-5926aa06.js";import{M as s}from"./chunk-PCJTTTQV-a21900e0.js";import"./DomRefTable.module-7b7fd52b.js";import"./index-ebeaab24.js";import{F as r}from"./Footer-28a1b34c.js";import{u as a}from"./index-bda0bad7.js";import"./iframe-64774261.js";import"../sb-preview/runtime.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./react-jss.esm-022ab528.js";import"./index-07e3c3e0.js";import"./UI5Element-78be0f3d.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d4224c1c.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-70a9e5b9.js";import"./Icons-26e87c01.js";import"./decline-09ce3004.js";import"./i18n-defaults-80781f7e.js";import"./information-872f55da.js";import"./class-map-18f572ce.js";import"./Button-427cd4bb.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-99b8bbf4.js";import"./i18n-defaults-f002f496.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-3e959ad1.js";import"./index-7f06f571.js";import"./Integer-f7f172c9.js";import"./index-34cefc94.js";import"./Avatar-e1c9d8f0.js";import"./ResizeHandler-15c77712.js";import"./employee-1c1d2fc1.js";import"./index-55beff23.js";import"./index-703814e7.js";import"./Link-04c4a519.js";import"./WrappingType-b81e595a.js";import"./index-ea625d40.js";import"./index-0829c26d.js";import"./Label-263c93f2.js";import"./index-ab5e8020.js";import"./index-1d3cc15d.js";import"./Popover-a03c4c52.js";import"./PopupsCommon.css-1eb36bcf.js";import"./FocusableElements-53839075.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-54298215.js";import"./BrowserScrollbar.css-119d6915.js";function je(n={}){const{wrapper:o}=Object.assign({},a(),n.components);return o?e.jsx(o,Object.assign({},n,{children:e.jsx(i,{})})):i();function i(){const t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",strong:"strong",pre:"pre"},a(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"IDs via dataset"}),`
`,e.jsx(t.h1,{id:"using-dataset-as-container-for-ids-and-other-values",children:"Using dataset as container for IDs and other values"}),`
`,e.jsxs(t.p,{children:["Many components like the ",e.jsx(t.code,{children:"Select"}),", ",e.jsx(t.code,{children:"List"}),", ",e.jsx(t.code,{children:"Table"}),`, etc. are registering an event that handles the selection of child elements/components.
In the handler of the event you receive the corresponding element(s), where you can e.g. access the `,e.jsx(t.code,{children:"textContent"})," to retrieve the selected text."]}),`
`,e.jsxs(t.p,{children:[`In many cases the "text" is only there for users of the application, the actual value for e.g. the backend is often an id or a key.
To also include these in the callback of the event, we recommend using `,e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset",target:"_blank",rel:"nofollow noopener noreferrer",children:"HTMLElement.dataset"}),`.
With the help of the `,e.jsx(t.code,{children:"data-"})," API you can define any primitive value (like numbers, strings) as an attribute on an element. This data will be available on the change event as part of the dataset object of the selected element(s)."]}),`
`,e.jsx(t.p,{children:"Here you can find a few examples:"}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Select:"})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const data = [
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
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"List:"})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const onSelectionChange = (event) => {
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
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"MultiInput with suggestion items:"})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const onTokenDelete = (event) => {
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
`,e.jsx(r,{})]})}}export{je as default};
//# sourceMappingURL=ChangeEvents-4a11ef56.js.map
