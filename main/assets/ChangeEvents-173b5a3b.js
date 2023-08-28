import{j as e}from"./jsx-runtime-d079401a.js";import{M as s}from"./chunk-S4VUQJ4A-a6c38a38.js";import"./DomRefTable.module-100e963c.js";import"./index-f1f2c4b1.js";import{F as r}from"./Footer-ee990608.js";import{u as a}from"./index-59d6410c.js";import"./iframe-a5ef30fe.js";import"../sb-preview/runtime.js";import"./index-d203965f.js";import"./index-b42968db.js";import"./mapValues-e5c6f517.js";import"./_baseForOwn-24231fc1.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-00f63d78.js";import"./_baseUniq-edf521f4.js";import"./index-356e4a49.js";import"./react-jss.esm-2e5f50f2.js";import"./index-1ecc45f2.js";import"./UI5Element-6dcea8dd.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7d7e5133.js";import"./utils-626dc1bf.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-b7f7d9e7.js";import"./Icons-e937042c.js";import"./decline-d1fe7fdd.js";import"./i18n-defaults-2d2bf0b6.js";import"./information-a40f0e71.js";import"./class-map-0ab40ab9.js";import"./Button-6bb9ed58.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-d675a36d.js";import"./index-bb1f9706.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-5ee8a8c4.js";import"./index-57c5fa18.js";import"./Integer-f7f172c9.js";import"./index-ee41c4cd.js";import"./Avatar-faa225d6.js";import"./ResizeHandler-e83234a4.js";import"./employee-f0b5ef8f.js";import"./index-ce8fbe0b.js";import"./index-0aef1739.js";import"./Link-34530090.js";import"./WrappingType-b81e595a.js";import"./index-fb6e8b5e.js";import"./index-4ed01067.js";import"./Label-c4db564a.js";import"./index-b19a21d9.js";import"./index-ff4977a5.js";import"./Popover-8ece70a3.js";import"./PopupsCommon.css-2b73575b.js";import"./FocusableElements-ae22402e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-132a30d8.js";import"./BrowserScrollbar.css-22391551.js";function xe(n={}){const{wrapper:o}=Object.assign({},a(),n.components);return o?e.jsx(o,Object.assign({},n,{children:e.jsx(i,{})})):i();function i(){const t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",strong:"strong",pre:"pre"},a(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"IDs via dataset"}),`
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
`,e.jsx(r,{})]})}}export{xe as default};
//# sourceMappingURL=ChangeEvents-173b5a3b.js.map
