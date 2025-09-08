import{j as e}from"./iframe-CGUWa3l5.js";import{useMDXComponents as s}from"./index-Cg9cAKJC.js";import{M as m,C as o}from"./blocks-C0vLrpaE.js";import"./Tag-BIHZtDOF.js";import"./index-CL_zuYv3.js";import{C as l}from"./ControlsWithNote-CLRZIdA4.js";import{D as p}from"./DocsHeader-bLXXKsa0.js";import{F as d}from"./CommandsAndQueries-D9MoTrLH.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BcWjDZad.js";import"./preload-helper-D9Z9MdNV.js";import"./information-gqQAsN3Y.js";import"./sys-enter-2-CDAeFjyO.js";import"./alert-ClZlqLU4.js";import"./index-DVv4DYKP.js";import"./index-Be3QtdR7.js";import"./Link-0YCTvvlv.js";import"./copy-CqMmNhIc.js";import"./copy-WtCMvp6x.js";import"./GitHub-Mark-r0BUaYbl.js";import"./TableOfContent-BXgVIGFG.js";import"./index-BsFrl4mG.js";import"./index-Dagge6tW.js";import"./addCustomCSSWithScoping-C_LLLVaV.js";import"./index-M2L2LSTo.js";import"./index-G9i70mAv.js";import"./index-CqG7yhFq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dmz3vIHQ.js";import"./Gregorian-DDlmmEmO.js";import"./query-CzSBusdE.js";import"./Input-D6uk9j64.js";import"./ResponsivePopoverCommon.css-BEg546Rm.js";import"./ValueStateMessage.css-2dCo7gv0.js";import"./Suggestions.css-BzuWn3c7.js";import"./appointment-2-CASC6KNn.js";import"./ListItemStandard-ZmC8AzlV.js";import"./slim-arrow-left-CdKI71SL.js";import"./Calendar-exc1bSfk.js";import"./InvisibleMessage-DsoM_md7.js";import"./index-DQRmvIfO.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
