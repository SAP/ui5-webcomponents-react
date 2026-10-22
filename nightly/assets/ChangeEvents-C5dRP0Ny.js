import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,r}from"./react-fLZJfuRT.js";import{_ as i,d as a}from"./blocks-DnnW7All.js";import{t as o,u as s}from"./components-BFu365ZV.js";function c(e){let t={a:`a`,code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a,{title:`IDs via dataset`}),`
`,(0,u.jsx)(t.h1,{id:`using-dataset-as-container-for-ids-and-other-values`,children:`Using dataset as container for IDs and other values`}),`
`,(0,u.jsxs)(t.p,{children:[`Many components like the `,(0,u.jsx)(t.code,{children:`Select`}),`, `,(0,u.jsx)(t.code,{children:`List`}),`, `,(0,u.jsx)(t.code,{children:`Table`}),`, etc. are registering an event that handles the selection of child elements/components.
In the handler of the event you receive the corresponding element(s), where you can e.g. access the `,(0,u.jsx)(t.code,{children:`textContent`}),` to retrieve the selected text.`]}),`
`,(0,u.jsxs)(t.p,{children:[`In many cases the "text" is only there for users of the application, the actual value for e.g. the backend is often an id or a key.
To also include these in the callback of the event, we recommend using `,(0,u.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset`,rel:`nofollow`,children:`HTMLElement.dataset`}),`.
With the help of the `,(0,u.jsx)(t.code,{children:`data-`}),` API you can define any primitive value (like numbers, strings) as an attribute on an element. This data will be available on the change event as part of the dataset object of the selected element(s).`]}),`
`,(0,u.jsx)(t.p,{children:`Here you can find a few examples:`}),`
`,(0,u.jsx)(t.p,{children:(0,u.jsx)(t.strong,{children:`Select:`})}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-jsx`,children:`const data = [
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
`,(0,u.jsx)(t.p,{children:(0,u.jsx)(t.strong,{children:`List:`})}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-jsx`,children:`const onSelectionChange = (event) => {
  const { targetItem } = event.detail;
  console.log(targetItem.dataset.custom);
};

<List mode={ListSelectionMode.MultiSelect} onSelectionChange={onSelectionChange}>
  <ListItemStandard additionalText="3" data-custom="custom value of list item 1" text="List Item 1" />
  <ListItemStandard additionalText="2" data-custom="custom value of list item 2" text="List Item 2" />
  <ListItemStandard additionalText="1" data-custom="custom value of list item 3" text="List Item 3" />
</List>;
`})}),`
`,(0,u.jsx)(t.p,{children:(0,u.jsx)(t.strong,{children:`MultiInput with suggestion items:`})}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-jsx`,children:`const onTokenDelete = (event) => {
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
  <SuggestionItem data-code="GBR" text="United Kingdom" />
  <SuggestionItem data-code="USA" text="United States" />
  <SuggestionItem data-code="DEU" text="Germany" />
  <SuggestionItem data-code="ISL" text="Iceland" />
  <SuggestionItem data-code="MDA" text="Moldova" />
  <SuggestionItem data-code="MAR" text="Morocco" />
</MultiInput>;
`})}),`
`,(0,u.jsx)(s,{})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=t(),r(),i(),o()})))()}d();export{l as default};