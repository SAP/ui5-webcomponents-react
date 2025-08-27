import{j as e}from"./iframe-BuT579UQ.js";import{useMDXComponents as s}from"./index-hwCnNpvR.js";import{M as m,C as o}from"./blocks-xCv3ALrs.js";import"./Tag-BfLQPV5Q.js";import"./index-BdhtxwT5.js";import{C as l}from"./ControlsWithNote-BhkP8uA-.js";import{D as p}from"./DocsHeader-3ZL9iB6q.js";import{F as d}from"./CommandsAndQueries-bkB85Yh1.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CIUVtA2S.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BpdkAt88.js";import"./sys-enter-2-fNvpiTi4.js";import"./alert-Dvzv9mH1.js";import"./index-Sm3A70Iw.js";import"./index-DcodLJdG.js";import"./Link-BRdwNtbO.js";import"./copy-B0njaLsn.js";import"./copy-wEyzDN_W.js";import"./GitHub-Mark-kV7bFz4J.js";import"./TableOfContent-38NG_1gx.js";import"./index-B5tYw3g0.js";import"./index-CKRjOfqg.js";import"./addCustomCSSWithScoping-BObqnoGh.js";import"./index-CSxL7VzK.js";import"./index-mwQcMkri.js";import"./index-t5BVUaSq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BWHNxoJ6.js";import"./query-CzSBusdE.js";import"./Input-CvvVNEnq.js";import"./ResponsivePopoverCommon.css-qGTg7BLI.js";import"./ValueStateMessage.css-CtKS_0vT.js";import"./Suggestions.css-Bcp4Zv_G.js";import"./appointment-2-bT9BwadE.js";import"./ListItemStandard-CHi924vm.js";import"./slim-arrow-left-CLJgW7LQ.js";import"./Gregorian-2cZZLJGl.js";import"./Calendar-DBsj4adc.js";import"./InvisibleMessage-Ba38bBs7.js";import"./index-Zp_0qgnt.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
