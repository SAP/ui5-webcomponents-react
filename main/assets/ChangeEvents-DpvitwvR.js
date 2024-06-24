import{j as t}from"./useIsomorphicLayoutEffect-5feXxxyy.js";import{useMDXComponents as i}from"./index-Bql5lgBm.js";import"./chunk-HLWAVYOI-DLdp9wUh.js";import{M as a}from"./index-CsCZcsQQ.js";import"./index-wN63MRZN.js";import"./TagDesign-Dou_yO3g.js";import"./index-CP2MHerv.js";import"./index-CUD6gg2y.js";import"./Boot-Bc3-yGxv.js";import"./copy-Bux_XWOJ.js";import"./Button-CO6Cy06z.js";import{F as r}from"./ProjectTemplate-fzvqOk-3.js";import"./WrappingType-CW8URInd.js";import"./iframe-oTKygqMc.js";import"../sb-preview/runtime.js";import"./client-CeotCdvV.js";import"./_baseForOwn-39ViRbo3.js";import"./mapValues-BafCeOy3.js";import"./_baseUniq-D4fCGXIX.js";import"./index-DBvbnR2h.js";import"./index-DrFu-skq.js";import"./UI5Element-DFWAHaHd.js";import"./CustomElementsScopeUtils-u88Ac6A7.js";import"./EventProvider-CVfkyUHo.js";import"./withWebComponent-ah_drTxp.js";import"./utils-CGfXuD-n.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-X-a5Hvm9.js";import"./decline-DOPX1W-e.js";import"./Icons-o-g_t4X3.js";import"./i18n-defaults-CXs2tJOZ.js";import"./information-D2w0wkAo.js";import"./alert-RYmCrbKT.js";import"./class-map-CSNjIC4y.js";import"./Icon-CDJWObqH.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-DQGkr9pp.js";import"./i18n-defaults-DUjPXQIq.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-B5D3uFwJ.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DIoLZaP8.js";import"./Popover-C8kXaV3G.js";import"./Integer-DgRYWdxf.js";import"./PopupsCommon.css-DMExQBIY.js";import"./FocusableElements-T7dKq3am.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-C9Gw3xFv.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-P64ToWDx.js";import"./BrowserScrollbar.css-Br9LgvKH.js";import"./index-ek2IBS1H.js";import"./Label-BevGptB9.js";import"./index-L3euZylw.js";import"./index-CW2oycRq.js";import"./Link-CXA-r5WN.js";import"./index-SA3W-EXU.js";import"./index-DJHd8BMW.js";import"./i18n-defaults-BCHmAjec.js";import"./I18nContext-BwNxpyJO.js";import"./index-89I0sryf.js";import"./ModalsContext-CA2qjtQ6.js";import"./useIsomorphicId-BGiUoP5x.js";import"./addCustomCSSWithScoping-DKVM2fpC.js";import"./index-BtqRsBh8.js";import"./index-BhS2E4rY.js";import"./index-B6fgfJdu.js";import"./Avatar-CBU7GVET.js";import"./employee-CzaM-cwk.js";function o(n){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"IDs via dataset"}),`
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
`,t.jsx(r,{})]})}function Ct(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o(n)}export{Ct as default};
