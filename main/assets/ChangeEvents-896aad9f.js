import{j as e}from"./jsx-runtime-b5ed1ca8.js";import{M as s}from"./chunk-PCJTTTQV-a5b4988e.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./DomRefTable.module-6d0a00b1.js";import"./index-64f120e9.js";import"./Import-8e4c657e.js";import{F as r}from"./Footer-df4fc709.js";import{u as a}from"./index-de4e61b4.js";import"./iframe-d307e672.js";import"../sb-preview/runtime.mjs";import"./react-18-1e96cd1b.js";import"./mapValues-30a52a16.js";import"./_baseForOwn-931ad773.js";import"./index-7bf58b0a.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-e1b46df2.js";import"./_baseUniq-5a3eb61c.js";import"./index-356e4a49.js";import"./react-jss.esm-a429ae4e.js";import"./index-fae77428.js";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d0e572fe.js";import"./utils-d29e59c7.js";import"./useIsomorphicLayoutEffect-4a8db993.js";import"./slot-76e48863.js";import"./Icon-46afc304.js";import"./Icons-5b18f7d2.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./class-map-fc32fe45.js";import"./Button-3c41aad1.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./index-88d699c2.js";import"./clsx.m-1229b3e0.js";import"./index-c8ebd641.js";import"./Label-51e2d33c.js";import"./WrappingType-b81e595a.js";import"./index-456405c7.js";import"./Link-20aa90b6.js";import"./index-50294f10.js";import"./Popover-f0a3f494.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-2a26d007.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-e40faf20.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-02d033ae.js";function pe(n={}){const{wrapper:o}=Object.assign({},a(),n.components);return o?e.jsx(o,Object.assign({},n,{children:e.jsx(i,{})})):i();function i(){const t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",strong:"strong",pre:"pre"},a(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"IDs via dataset"}),`
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
`,e.jsx(r,{})]})}}export{pe as default};
//# sourceMappingURL=ChangeEvents-896aad9f.js.map
