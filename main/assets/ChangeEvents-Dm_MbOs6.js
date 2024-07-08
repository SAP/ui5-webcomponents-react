import{j as t}from"./useIsomorphicLayoutEffect-CpdNMtv3.js";import{useMDXComponents as i}from"./index-44b7z5bc.js";import"./chunk-HLWAVYOI-Cjzv1Phc.js";import{M as a}from"./index-CTBwwVi7.js";import"./index-xb3nh0xS.js";import"./TagDesign-Dou_yO3g.js";import"./index-DEe9W-hO.js";import"./index-D6UH2S5y.js";import"./UI5Element-B4CRQCUa.js";import"./copy-CgbAc49M.js";import"./Button-BL3VmI_G.js";import{F as r}from"./CommandsAndQueries-tS7AHF6G.js";import"./WrappingType-CW8URInd.js";import"./iframe-J5Zwqo25.js";import"../sb-preview/runtime.js";import"./client-BEgA9EFc.js";import"./_baseForOwn-DVWQo5xw.js";import"./mapValues-DXlf5GIm.js";import"./_baseUniq-BqAhPu7p.js";import"./index-Ba91SQPT.js";import"./index-DrFu-skq.js";import"./withWebComponent-BxrD_3pN.js";import"./utils-DgTsnvPN.js";import"./CustomElementsScopeUtils-C6IqSY4u.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-NJJr-Wgh.js";import"./decline-OUaGDOWq.js";import"./Icons-CwMCtZ-T.js";import"./i18n-defaults-eVMsPoDe.js";import"./information-V1h4ty4Y.js";import"./alert-7wwKJW96.js";import"./class-map-CVq5yHuN.js";import"./if-defined-Cl7uVo8B.js";import"./Icon-p6ifn8PN.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-DQGkr9pp.js";import"./i18n-defaults-vwvk3Exl.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-DnbfWVpq.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BlIIJPI8.js";import"./Popover-CPRmhj4r.js";import"./Integer-DgRYWdxf.js";import"./PopupsCommon.css-BJNgSyQc.js";import"./FocusableElements-bN8doqn4.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Bwj_klJ5.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BoopDC9U.js";import"./BrowserScrollbar.css-88cLNDUy.js";import"./index-BuvA0ifN.js";import"./Label-BqwA1t1q.js";import"./index-DOfLqaFs.js";import"./index-CXTLEPpu.js";import"./Link-CGGRp2Qi.js";import"./index-Cj5k-iEs.js";import"./index-B5idhwOL.js";import"./I18nStore-DrHVTNpv.js";import"./ModalsContext-C4nEcU7T.js";import"./useIsomorphicId-CULvwDT0.js";import"./addCustomCSSWithScoping-rJxYyKkM.js";import"./index-CNz1NszN.js";import"./index-BsrAm2gC.js";import"./index-_vLq3x74.js";import"./Avatar-DusLgr8x.js";import"./employee-CMmC12VS.js";import"./index-BizLiy_z.js";function o(n){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"IDs via dataset"}),`
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
  <SuggestionItem data-code="GBR" icon="globe" text="United Kingdom" />
  <SuggestionItem data-code="USA" icon="globe" text="United States" />
  <SuggestionItem data-code="DEU" icon="globe" text="Germany" />
  <SuggestionItem data-code="ISL" icon="globe" text="Iceland" />
  <SuggestionItem data-code="MDA" icon="globe" text="Moldova" />
  <SuggestionItem data-code="MAR" icon="globe" text="Morocco" />
</MultiInput>;
`})}),`
`,t.jsx(r,{})]})}function yt(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o(n)}export{yt as default};
