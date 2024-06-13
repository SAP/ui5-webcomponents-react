import{j as t}from"./useIsomorphicLayoutEffect-J-vjyzBO.js";import{useMDXComponents as i}from"./index-Bpj30qF7.js";import"./chunk-HLWAVYOI-DoCCFjMG.js";import{M as a}from"./index-Cot4uUB_.js";import"./index-DQ_4AJ4r.js";import"./TagDesign-B60Yj3Pp.js";import"./index-DVqgc125.js";import"./index-oytpl9VN.js";import"./Boot-DBJWGo1y.js";import"./copy-e7WxF_om.js";import"./Button-B3obxaDo.js";import{F as r}from"./ProjectTemplate-WKHI2xP1.js";import"./WrappingType-CW8URInd.js";import"./iframe-EcgWEy1g.js";import"../sb-preview/runtime.js";import"./client-5PD-IPQ1.js";import"./_baseForOwn-czysEfXW.js";import"./mapValues-DJmJhyxk.js";import"./_baseUniq-fADs2fxN.js";import"./index-MwrKYwMg.js";import"./index-DrFu-skq.js";import"./UI5Element-ZIczsayz.js";import"./CustomElementsScopeUtils-Di1jckr8.js";import"./EventProvider-CVfkyUHo.js";import"./withWebComponent-CZCh4Hye.js";import"./utils-xoLr7-0V.js";import"./slot--DoKcWSY.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-Baemx9Ir.js";import"./decline-iFbg0EvE.js";import"./Icons-VTGLGKPM.js";import"./i18n-defaults-C2wY9l8t.js";import"./information-DBr1nnf3.js";import"./alert-CRLi12vy.js";import"./class-map-7Nty0QHu.js";import"./Icon-bm18Wc8p.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-B_nLitlw.js";import"./i18n-defaults-BBSxky5H.js";import"./AriaLabelHelper-LMIEtYQL.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-B_zaPyDm.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DGwRvl1X.js";import"./Popover-CiDK1VtS.js";import"./Integer-WDQzHAdZ.js";import"./PopupsCommon.css-BU4M9Cwb.js";import"./FocusableElements-xn9p5spb.js";import"./isElementHidden-B4HqmI2E.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-D26-bsEk.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-H4TARQHt.js";import"./BrowserScrollbar.css-DkjKirWP.js";import"./index-Dpt97Sm8.js";import"./Label-BcDuAK9i.js";import"./index-Ds-hu2eP.js";import"./index-DkdU7oTj.js";import"./Link-CM0QSx8V.js";import"./index-JeajOS1N.js";import"./index-CUZZ9nZS.js";import"./i18n-defaults-CNyODxfy.js";import"./I18nContext-BrA05J-F.js";import"./index-HPMelgu7.js";import"./ModalsContext-DrY1dyul.js";import"./useIsomorphicId-B7SE6ZVh.js";import"./addCustomCSSWithScoping-D0vrnlbk.js";import"./index-DObFMA3e.js";import"./index-Bl4l9gBB.js";import"./index-BezptTZp.js";import"./Avatar-BQsj5wMZ.js";import"./employee-DN6CdZzr.js";function o(n){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"IDs via dataset"}),`
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
`,t.jsx(r,{})]})}function wt(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o(n)}export{wt as default};
