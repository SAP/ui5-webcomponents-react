import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{M as s}from"./chunk-HLWAVYOI-5HzqoQBT.js";import"./DomRefTable.module-osVPJkFT.js";import"./index-OjgoNOWw.js";import{F as r}from"./Footer-8v9tNCUY.js";import{u as a}from"./index-RwE9nQVW.js";import"./iframe-jYR4I4MD.js";import"../sb-preview/runtime.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./_baseForOwn-z3VktcOy.js";import"./mapValues-Iyc0g4nJ.js";import"./_baseUniq-PeaQ4i79.js";import"./index-PPLHz8o0.js";import"./index-ru46B3pF.js";import"./react-jss.esm-tmBtHfec.js";import"./index-NAqOjvOJ.js";import"./UI5Element-_cJDeK03.js";import"./i18nBundle-YDapVb1x.js";import"./VersionInfo-AzzP9wS2.js";import"./CustomElementsScopeUtils-IpwVqUeG.js";import"./withWebComponent-UxvJwa3A.js";import"./utils-rNFQc6Ui.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-qyLuyi2a.js";import"./Icons-1V9ErOOl.js";import"./decline-1i68oG_p.js";import"./i18n-defaults-CPLPRuO1.js";import"./information-LBZ9LJI-.js";import"./alert-wj9gYQbS.js";import"./class-map--zj6Ctao.js";import"./Button-kjIKsCqk.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./HasPopup-9BAMrqbD.js";import"./i18n-defaults-IIWnNm9Y.js";import"./index-G1ylA0vb.js";import"./clsx-Zbgk8kpT.js";import"./i18n-defaults-a20Pyi7e.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-evY60Rnm.js";import"./ModalsContext-T9gUbaXC.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-fxF1oxJv.js";import"./index--N4lJURT.js";import"./Integer-kog98579.js";import"./index-SLAS-F1F.js";import"./Avatar-3d4E78pi.js";import"./ResizeHandler-xTi6PJ7P.js";import"./employee-zEMWRMpH.js";import"./Link-kuayvrPB.js";import"./WrappingType-avPrqc94.js";import"./index-xaTivHLv.js";import"./index-xTZ1p4E3.js";import"./index-sHoRIkfF.js";import"./index-_DtB95iI.js";import"./Label-Zjx1tiqV.js";import"./index-Mc-QwGUl.js";import"./index-yv3Odx2E.js";import"./Popover-ALm1fb4C.js";import"./PopupUtils-WqNPYdCF.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-GS9FVPNx.js";import"./FocusableElements-YRGIpHeQ.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-21pwAbrQ.js";import"./BrowserScrollbar.css-piSU4CQM.js";function Tt(n={}){const{wrapper:o}=Object.assign({},a(),n.components);return o?t.jsx(o,Object.assign({},n,{children:t.jsx(i,{})})):i();function i(){const e=Object.assign({h1:"h1",p:"p",code:"code",a:"a",strong:"strong",pre:"pre"},a(),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"IDs via dataset"}),`
`,t.jsx(e.h1,{id:"using-dataset-as-container-for-ids-and-other-values",children:"Using dataset as container for IDs and other values"}),`
`,t.jsxs(e.p,{children:["Many components like the ",t.jsx(e.code,{children:"Select"}),", ",t.jsx(e.code,{children:"List"}),", ",t.jsx(e.code,{children:"Table"}),`, etc. are registering an event that handles the selection of child elements/components.
In the handler of the event you receive the corresponding element(s), where you can e.g. access the `,t.jsx(e.code,{children:"textContent"})," to retrieve the selected text."]}),`
`,t.jsxs(e.p,{children:[`In many cases the "text" is only there for users of the application, the actual value for e.g. the backend is often an id or a key.
To also include these in the callback of the event, we recommend using `,t.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset",target:"_blank",rel:"nofollow noopener noreferrer",children:"HTMLElement.dataset"}),`.
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
`,t.jsx(r,{})]})}}export{Tt as default};
