import{j as t}from"./ManagedStyles-B3AuKgSD.js";import{useMDXComponents as i}from"./index-3-_tf5dF.js";import"./chunk-HLWAVYOI-uMJSDC5E.js";import{M as a}from"./index-BvGlwDyC.js";import"./index-BP8_t0zE.js";import"./index-BxmsGmlx.js";import"./copy-C1-wxiKi.js";import{F as r}from"./ProjectTemplate-Cm2HRT9S.js";import"./iframe-BT3hoZe9.js";import"../sb-preview/runtime.js";import"./client-Di-4O7We.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./Boot-DOb84JFo.js";import"./EventProvider-B3ZIXKWe.js";import"./Icons-BEU0Gkqb.js";import"./i18nBundle-VOPn86Vc.js";import"./index-DOzijD-M.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-NUMS3nLe.js";import"./index-6jVUFvtp.js";import"./Label-MHQDFgLT.js";import"./UI5Element-BDMamLf2.js";import"./CustomElementsScopeUtils-CyqSdClf.js";import"./withWebComponent-I_l1rtvY.js";import"./utils-BFMQrOqR.js";import"./useIsomorphicLayoutEffect-CnI1knHw.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-YvCKXLrH.js";import"./parameters-bundle.css-CG8awnKl.js";import"./index-1aa0GhA_.js";import"./Button-D3khXG03.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-1XL4agOH.js";import"./HasPopup-Cecjtg2t.js";import"./index-CJ5K_4Ib.js";import"./Link-CcLSMxnp.js";import"./index-CvVS04iS.js";import"./Popover-CSBFzLfb.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DrS11q-G.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-DprvSSUl.js";import"./FocusableElements-B5R4EUYo.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DS8KPGJE.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-DYE6pHfF.js";import"./class-map-CdwQvt9Z.js";import"./BrowserScrollbar.css-jPLSLZ0L.js";import"./index-yohFIstM.js";import"./i18n-defaults-BbHxfVEE.js";import"./I18nContext-RJHUyvz-.js";import"./index-CGRQZsF8.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./addCustomCSSWithScoping-D_wcte3H.js";import"./index-cutNLVLJ.js";import"./index-SY4jLlEK.js";import"./Avatar-BRbCD7Rv.js";import"./employee-Cmzn10U8.js";import"./alert-DA8J16Yf.js";import"./index-k7jXtlNh.js";import"./index-BLnzAoTS.js";import"./decline-DIsY4YnD.js";import"./i18n-defaults-BdfZArTM.js";import"./information-BKTX2iJj.js";function o(n){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"IDs via dataset"}),`
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
`,t.jsx(r,{})]})}function Dt(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o(n)}export{Dt as default};
