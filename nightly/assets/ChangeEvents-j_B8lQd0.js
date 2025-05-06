import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-B5Ip8tK9.js";import{F as a}from"./CommandsAndQueries-NCJOqs8W.js";import{M as s}from"./index-B4Czy4rc.js";import"./index-Ultsg-G0.js";import"./index-BvBDF_5X.js";import"./TagDesign-Ga50IS6u.js";import"./index-U0ga5oGA.js";import"./index-B8m469-U.js";import"./Button-C3KIEZ_B.js";import"./jsx-runtime-BCizSm9J.js";import"./copy-BJ2RS-I5.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-zAoAJako.js";import"./preview-DA1GaxG9.js";import"./iframe-DEQIVPnd.js";import"./DocsRenderer-CFRXHY34-C8fjKU_Z.js";import"./react-18-SRpBHcoT.js";import"./index-BVR6w1bU.js";import"./Popover-ZaMaqrll.js";import"./slot-_4yKMUwC.js";import"./PopupsCommon.css-DkWsY6As.js";import"./event-strict-DgQLNDEV.js";import"./FocusableElements-BcTTx3-_.js";import"./isElementHidden-B4HqmI2E.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./CustomElementsScope-lRvT7iCm.js";import"./Keys-B3oBAe0t.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DMSxvinm.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./parameters-bundle.css-BLEjIEH9.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-CRT1e2Cp.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-N7C2bzZq.js";import"./index-Cvp8w3St.js";import"./Label-efMMm_Yw.js";import"./i18n-CjR4HGlq.js";import"./i18n-defaults-B8cpOtV2.js";import"./index-DoqJBpXZ.js";import"./index-BQnCm__z.js";import"./Link-DU2LYizk.js";import"./Icon-D8gJIGEW.js";import"./index-DogrUJhP.js";import"./index-BCr_l6cl.js";import"./Text-ahyk1WrN.js";import"./willShowContent-CZcfsNXp.js";import"./addCustomCSSWithScoping-BBYkOVIV.js";import"./index-CWu8VubW.js";import"./BusyIndicator-CXYqK0WZ.js";import"./index-GxH6uhPh.js";import"./index-D-WnL20f.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CIU74CR3.js";import"./index-C20XHsFQ.js";import"./I18nStore-BqSUVB5y.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./decline-CO_yryFo.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-BiJmvry2.js";import"./information-BA_ST16a.js";import"./sys-enter-2-L9fob0bg.js";import"./sys-enter-2-C09nDPBO.js";import"./alert-BjJeIaiS.js";import"./Tooltips-DBnVRLcV.js";import"./EventProvider-ChtD9rRX.js";function o(n){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"IDs via dataset"}),`
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
`,t.jsx(a,{})]})}function Mt(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o(n)}export{Mt as default};
