import{j as t}from"./jsx-runtime-D6fbYt3N.js";import{useMDXComponents as i}from"./index-DyCphG7h.js";import"./chunk-NUUEMKO5-GJx0hpea.js";import{ae as a}from"./index-BMANW4EY.js";import"./index-Dv5mXzg4.js";import"./index-CzMzzhmN.js";import"./TagDesign-Dou_yO3g.js";import"./index-DysCNOs_.js";import"./index-C4cLd1FO.js";import"./Button-B25Pr19o.js";import"./withWebComponent-D2290JWW.js";import"./copy-ClT0iCqi.js";import{F as s}from"./CommandsAndQueries-Bv6LUWHU.js";import"./WrappingType-CW8URInd.js";import"./Title-B_OApkG5.js";import"./iframe-D_9_3Ky4.js";import"../sb-preview/runtime.js";import"./client-CqEfiX9M.js";import"./index-BcsOxL0D.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./decline-eE5kkR_d.js";import"./Icon-DNC_Q8W5.js";import"./useIsomorphicLayoutEffect-UXkgNLQC.js";import"./Keys-CAuuEE_3.js";import"./utils-rQ0RHFcC.js";import"./parameters-bundle.css-DlWxkghp.js";import"./i18n-defaults-neJWcM66.js";import"./information-DiNgtIoE.js";import"./alert-C1PxT_zH.js";import"./class-map-BHSYgJ9u.js";import"./i18n-defaults-B_32hVC3.js";import"./AccessibilityTextsHelper-Beeze-lh.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-Cvj6MDOu.js";import"./Popover-D4qFMFR_.js";import"./PopupsCommon.css-Ds9l5hmK.js";import"./FocusableElements-BUUEY9i6.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-h_-KGn42.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CKH5i8-O.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-BtwtDsaz.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DzoyRzuT.js";import"./index-CaG1LRe9.js";import"./Label-DljH_Hma.js";import"./index-Cz-1v5Av.js";import"./index-BihYjSJH.js";import"./Link-Bfcngofg.js";import"./index-x-kKtoec.js";import"./index-B56Kl_es.js";import"./Text-iUXAjx9E.js";import"./addCustomCSSWithScoping-DWJN-AXE.js";import"./index-C7mFJBZY.js";import"./BusyIndicator-DeXFd7cw.js";import"./index-C7LfWPm8.js";import"./index-VGStP4CR.js";import"./Avatar-CSh84RvD.js";import"./employee-kfgjySdt.js";import"./index-DkQSccUZ.js";import"./I18nStore-D-72hezK.js";function o(n){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"IDs via dataset"}),`
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
`,t.jsx(s,{})]})}function ft(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o(n)}export{ft as default};
