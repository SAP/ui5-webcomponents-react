import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-zdXs1Etw.js";import{F as a}from"./CommandsAndQueries-Mdin3UBF.js";import{M as s}from"./index-BxWrc7MZ.js";import"./index-DNTLYVLP.js";import"./index-BzuNhS44.js";import"./TagDesign-Ga50IS6u.js";import"./index-C--kS4iy.js";import"./index-DJcrgQOn.js";import"./Button-CDUAIOHY.js";import"./jsx-runtime-TYk6ziax.js";import"./copy-BIm13QSs.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BZr7m-U9.js";import"./preview-BEJnvG7R.js";import"./iframe-DUJf1H9K.js";import"./DocsRenderer-CFRXHY34-DFT4oPgo.js";import"./react-18-DGA_MWY9.js";import"./index-B-pEBbkX.js";import"./Popover-CYWkC5M7.js";import"./slot-_4yKMUwC.js";import"./PopupsCommon.css-C4odaWdv.js";import"./event-strict-DgQLNDEV.js";import"./FocusableElements-B0h6XdH-.js";import"./isElementHidden-B4HqmI2E.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./CustomElementsScope-BUTWMsdD.js";import"./Keys-B3oBAe0t.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BhhEdsAZ.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-BrwMjXl-.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-D-3zc5-n.js";import"./index-BxZpBR5v.js";import"./Label-CNIQ9f-B.js";import"./i18n-CjR4HGlq.js";import"./i18n-defaults-BXUwkpCs.js";import"./index-DmVWxwwF.js";import"./index-DG9f8b92.js";import"./Link-DJmP58JE.js";import"./Icon-CJfyoCyo.js";import"./index-C4AHKFdV.js";import"./index-DA4Nf3tz.js";import"./Text-BE7aNcNC.js";import"./willShowContent-CZcfsNXp.js";import"./addCustomCSSWithScoping-_tNs8Q2d.js";import"./index-CkLIGxQ0.js";import"./BusyIndicator-DRlXpx-R.js";import"./index-PdcYfHMq.js";import"./index-BGMpZMYY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCPNHV1H.js";import"./index-DfZ2IpZQ.js";import"./I18nStore-DdNtknPF.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./decline-Ctf1iLC2.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-CaDfZmsc.js";import"./information-axph4kwY.js";import"./sys-enter-2-W20sQgrM.js";import"./sys-enter-2-Dj0rlhGw.js";import"./Tooltips-DGo6fNOA.js";import"./EventProvider-ChtD9rRX.js";function o(n){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"IDs via dataset"}),`
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
  <ListItemStandard additionalText="3" data-custom="custom value of list item 1">
    List Item 1
  </ListItemStandard>
  <ListItemStandard additionalText="2" data-custom="custom value of list item 2">
    List Item 2
  </ListItemStandard>
  <ListItemStandard additionalText="1" data-custom="custom value of list item 3">
    List Item 3
  </ListItemStandard>
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
`,t.jsx(a,{})]})}function vt(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o(n)}export{vt as default};
