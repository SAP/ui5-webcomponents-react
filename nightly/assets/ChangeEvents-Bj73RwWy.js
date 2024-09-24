import{j as t}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as i}from"./index-CcnH5Kt0.js";import"./chunk-NUUEMKO5-BtcKnm3r.js";import{ae as a}from"./index-CboaAwDc.js";import"./index-fq-A78mQ.js";import"./index-B-wWQMU_.js";import"./TagDesign-Dou_yO3g.js";import"./index-RYns6xqu.js";import"./index-sbqOYYIm.js";import"./withWebComponent-CjthvP8A.js";import"./copy-1gorG9K6.js";import"./Button-BBQ8R6D6.js";import{F as s}from"./CommandsAndQueries-lgak6iz1.js";import"./WrappingType-CW8URInd.js";import"./Title-XDMvnQZn.js";import"./iframe-DtUdM92a.js";import"../sb-preview/runtime.js";import"./client-BzooOYO_.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-GWtZPJ2c.js";import"./utils-GPKUbrfH.js";import"./useIsomorphicLayoutEffect-BErBnqdY.js";import"./decline-CmGSEmfo.js";import"./Icon-BiQiH9AZ.js";import"./Keys-D1SxbTOd.js";import"./parameters-bundle.css-Bga-3Zi8.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-OSvSoWlX.js";import"./alert-eD3USdjD.js";import"./class-map-DQ0L7MML.js";import"./i18n-defaults-BotoAXl7.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BLqibUdf.js";import"./Popover-CTv0B5oi.js";import"./PopupsCommon.css-BCC2ARq6.js";import"./FocusableElements-Br0H5X9U.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-C_eCkGSS.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-nG21dhw_.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-uL74TcGH.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-CIcp3lSM.js";import"./index-Dns6Oz5_.js";import"./Label-CZSx-F1W.js";import"./index-OThGHqLA.js";import"./index-C5CUzSoK.js";import"./Link-DZg2nJC9.js";import"./index-BVNesCV8.js";import"./addCustomCSSWithScoping-Da--1kqg.js";import"./index-BmvVf3i2.js";import"./BusyIndicator-CFbpjHZX.js";import"./index-p_JN0Moo.js";import"./index-C99ljWuN.js";import"./Avatar-Dvl2_7FY.js";import"./employee-LWQGcPo2.js";import"./index-CYzjajp8.js";import"./I18nStore-MR5G_kEB.js";import"./index-BdA_tfl3.js";function o(n){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"IDs via dataset"}),`
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
`,t.jsx(s,{})]})}function vt(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o(n)}export{vt as default};
