import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-B5Ip8tK9.js";import{F as a}from"./CommandsAndQueries-DR_UlShZ.js";import{M as s}from"./index-BM8FV3HB.js";import"./index-Bh0L8GxH.js";import"./index-qmG4ve5T.js";import"./Tag-B8Y5CAT_.js";import"./index-U0ga5oGA.js";import"./index-B8m469-U.js";import"./Button-DsiN4KEf.js";import"./jsx-runtime-2NO35c9p.js";import"./copy-C9kEgeiD.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-l18RNg85.js";import"./preview-DZZb_t_m.js";import"./iframe-ruRGRraq.js";import"./DocsRenderer-CFRXHY34-AdlQxKtg.js";import"./react-18-SRpBHcoT.js";import"./index-BVR6w1bU.js";import"./Popover-DHgn1IwJ.js";import"./slot-_4yKMUwC.js";import"./PopupsCommon.css-1ftV5PB8.js";import"./event-strict-DgQLNDEV.js";import"./FocusableElements--dusX2Bm.js";import"./isElementHidden-gS67o0pl.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./CustomElementsScope-BZQ-yqK5.js";import"./Keys-CLf_QmYW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DGDOSiJK.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./parameters-bundle.css-D0uTR4GL.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./index-C2w1dnoB.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DhspXHhi.js";import"./index-49bJeJce.js";import"./Label-DvK4qyHf.js";import"./i18n-CjR4HGlq.js";import"./i18n-defaults-Wx6G1HAa.js";import"./index-C2cs6waD.js";import"./index-28AZPOp1.js";import"./Link-CIigJXcZ.js";import"./Icon-Dy5MqRQN.js";import"./index-39R8lAwY.js";import"./index-Z1IFI4-r.js";import"./Text-CWzAOMGb.js";import"./willShowContent-CZcfsNXp.js";import"./addCustomCSSWithScoping-BPwSVJcY.js";import"./index-B-i0fidp.js";import"./BusyIndicator-kBFPsFJK.js";import"./index-B61k-92l.js";import"./index-6SfSTYbY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DTc-n_gr.js";import"./index-DxVhvPYU.js";import"./I18nStore-Bb3vbAIQ.js";import"./index-WWlNSEWj.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./decline-Cf8Y7eZn.js";import"./i18n-defaults-CmVK7_Fz.js";import"./information-CPeQ-J71.js";import"./information-DVtVmQQs.js";import"./sys-enter-2-DM7CihIf.js";import"./sys-enter-2-D_EhgDRM.js";import"./alert-B-6XnuHB.js";import"./sys-help-2-CQSD8GDX.js";import"./Tooltips-DqK_Zwt1.js";import"./EventProvider-ChtD9rRX.js";function o(n){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"IDs via dataset"}),`
`,t.jsx(e.h1,{id:"using-dataset-as-container-for-ids-and-other-values",children:"Using dataset as container for IDs and other values"}),`
`,t.jsxs(e.p,{children:["Many components like the ",t.jsx(e.code,{children:"Select"}),", ",t.jsx(e.code,{children:"List"}),", ",t.jsx(e.code,{children:"Table"}),`, etc. are registering an event that handles the selection of child elements/components.
In the handler of the event you receive the corresponding element(s), where you can e.g. access the `,t.jsx(e.code,{children:"textContent"})," to retrieve the selected text."]}),`
`,t.jsxs(e.p,{children:[`In many cases the "text" is only there for users of the application, the actual value for e.g. the backend is often an id or a key.
To also include these in the callback of the event, we recommend using `,t.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset",rel:"nofollow",children:"HTMLElement.dataset"}),`.
With the help of the `,t.jsx(e.code,{children:"data-"})," API you can define any primitive value (like numbers, strings) as an attribute on an element. This data will be available on the change event as part of the dataset object of the selected element(s)."]}),`
`,t.jsx(e.p,{children:"Here you can find a few examples:"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Select:"})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`const data = [
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
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"List:"})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`const onSelectionChange = (event) => {
  const { targetItem } = event.detail;
  console.log(targetItem.dataset.custom);
};

<List mode={ListSelectionMode.MultiSelect} onSelectionChange={onSelectionChange}>
  <ListItemStandard additionalText="3" data-custom="custom value of list item 1" text="List Item 1" />
  <ListItemStandard additionalText="2" data-custom="custom value of list item 2" text="List Item 2" />
  <ListItemStandard additionalText="1" data-custom="custom value of list item 3" text="List Item 3" />
</List>;
`})}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"MultiInput with suggestion items:"})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`const onTokenDelete = (event) => {
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
`,t.jsx(a,{})]})}function Lt(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o(n)}export{Lt as default};
