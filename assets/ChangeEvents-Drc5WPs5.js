import{j as t}from"./useIsomorphicLayoutEffect-CC_9R8NV.js";import{useMDXComponents as i}from"./index-3-_tf5dF.js";import"./chunk-HLWAVYOI-DOGZlFEp.js";import{M as a}from"./index-DCe9hKTd.js";import"./index-BP8_t0zE.js";import"./index-BxmsGmlx.js";import"./copy-C3s9MmBF.js";import{F as r}from"./ProjectTemplate-CnfFx7fc.js";import"./iframe-K9ZPOBS-.js";import"../sb-preview/runtime.js";import"./client-Di-4O7We.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./Boot--nQrAl1V.js";import"./EventProvider-B3ZIXKWe.js";import"./Icons-Bp1YSqwb.js";import"./i18nBundle-zzLYNekx.js";import"./index-CzPEDdfg.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BSPa2dAP.js";import"./index-DRuGOEJb.js";import"./Label-BsQWgLJi.js";import"./UI5Element-DYuDwSfb.js";import"./CustomElementsScope-muWBOMD2.js";import"./withWebComponent-BtiFbjTX.js";import"./utils-A9XecSn_.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-B_qME8Ot.js";import"./parameters-bundle.css-P3lSuE--.js";import"./index-Cqc2lMTm.js";import"./Button-CWBaZ7ro.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-D7AkHrnr.js";import"./HasPopup-Cecjtg2t.js";import"./index-lqfu6sXD.js";import"./Link-C6bYFqpr.js";import"./index-weJqy25G.js";import"./Popover-fF8jtMoy.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-BKIoEsVZ.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-CjoatB38.js";import"./FocusableElements-Duwi--Bv.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-CI3zUPmr.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-Cq34otsJ.js";import"./class-map-DRsidP3Z.js";import"./BrowserScrollbar.css-DtDsFaw-.js";import"./index-WspRYDV-.js";import"./i18n-defaults-BqW0kOHN.js";import"./I18nContext-RJHUyvz-.js";import"./index-Cqf388Vu.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./addCustomCSSWithScoping-BbKd266_.js";import"./index-DIKijyLT.js";import"./index-ClldIo8k.js";import"./Avatar-BS_WXaxR.js";import"./employee-CGxftPv4.js";import"./alert-GCtO51nh.js";import"./index-CXTSylkh.js";import"./index-0sOo1Jhc.js";import"./decline-BAFEOGpp.js";import"./i18n-defaults-BdfZArTM.js";import"./information-C8CMIM2W.js";function o(n){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"IDs via dataset"}),`
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
`,t.jsx(r,{})]})}function Ct(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o(n)}export{Ct as default};
