import{j as e}from"./iframe-ecJTvqfE.js";import{useMDXComponents as s}from"./index-DboZxcYT.js";import{M as m,C as o}from"./blocks-qsqxfOd3.js";import"./Tag-ZKnVgoL_.js";import"./index-BC9DFcam.js";import{C as l}from"./ControlsWithNote--sJtiopn.js";import{D as p}from"./DocsHeader-DRQa0RQI.js";import{F as d}from"./CommandsAndQueries-BpdU-ZQD.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CQRRLNY9.js";import"./preload-helper-Ct5FWWRu.js";import"./information-DxOwMn8K.js";import"./sys-enter-2-CERMkNGF.js";import"./alert-Bvw6_neD.js";import"./index-F3eIUiL2.js";import"./index-D-eR8SSU.js";import"./Link-BtvKGD3A.js";import"./copy-DmHQCbEE.js";import"./copy-BgNjKRC7.js";import"./GitHub-Mark-CJwtkSkN.js";import"./TableOfContent-Ba58XBM3.js";import"./index-DsPSpYGU.js";import"./index-CvbQPYli.js";import"./addCustomCSSWithScoping-DjLfDywf.js";import"./index-gkiYXWNa.js";import"./index-gUQqjp18.js";import"./index-Bnh2IJ03.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CFe2wd2s.js";import"./query-CzSBusdE.js";import"./Input-DpcAuAe8.js";import"./ResponsivePopoverCommon.css-Cw_YH4h8.js";import"./ValueStateMessage.css-DDOE9-R1.js";import"./Suggestions.css-BnKo4JPe.js";import"./appointment-2-BsackZ6z.js";import"./ListItemStandard-nzNqCNC_.js";import"./slim-arrow-left-CL3urqvQ.js";import"./Gregorian-jiqaarBY.js";import"./Calendar-CN5DHjs8.js";import"./InvisibleMessage-B5otcPql.js";import"./index-78hG4qZ8.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
`,e.jsx(p,{of:r}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(n.h3,{id:"value-change",children:"Value Change"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(n.h4,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function DynamicDateRangeComponent() {
  const [selValue, setSelValue] = useState("");
  const [convertedDates, setConvertedDates] = useState("");
  return (
    <>
      <DynamicDateRange
        onChange={(e) => {
          const selectedValue = e.detail.value;
          setSelValue(JSON.stringify(selectedValue));

          const dates = e.currentTarget.toDates(selectedValue);
          setConvertedDates(
            dates.map((date) => date.toLocaleString()).join(" - "),
          );
        }}
      />
      <hr />
      <FlexBox alignItems="Center" gap="0.5rem">
        <Label for="sel-val" showColon>
          Selected Value
        </Label>
        <Input
          id="sel-val"
          readonly
          value={selValue}
          style={{ width: "100%", maxWidth: "400px" }}
        />
      </FlexBox>
      <FlexBox alignItems="Center" gap="0.5rem">
        <Label for="conv-val" showColon>
          Converted Dates
        </Label>
        <Input
          id="conv-val"
          readonly
          value={convertedDates}
          style={{ width: "100%", maxWidth: "400px" }}
        />
      </FlexBox>
    </>
  );
}
`})}),`
`,e.jsx(d,{})]})}function $(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{$ as default};
