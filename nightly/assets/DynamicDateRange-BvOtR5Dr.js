import{j as e}from"./iframe-yjMKSaW2.js";import{useMDXComponents as s}from"./index-DX8fpWzX.js";import{M as m,C as o}from"./blocks-qO1HNk-b.js";import"./Tag-BxGYemBH.js";import"./index-EVdkIx1d.js";import{C as l}from"./ControlsWithNote-wKta4bY1.js";import{D as p}from"./DocsHeader-CXHyuQiW.js";import{F as d}from"./CommandsAndQueries-ClO5_6SR.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CC-LHX4v.js";import"./preload-helper-Dp1pzeXC.js";import"./information-Cn2Ycis7.js";import"./sys-enter-2-CQXBhP7E.js";import"./alert-509BGbEm.js";import"./index-D2oaGTxE.js";import"./index-CM3jZrAN.js";import"./Link-hbFO0ZkL.js";import"./copy-CdUOUeib.js";import"./copy-Bx6gkJby.js";import"./GitHub-Mark-zti1AnK_.js";import"./TableOfContent-COrNlak9.js";import"./index-BTcK53Xp.js";import"./index-tTu9lfPG.js";import"./addCustomCSSWithScoping-DI9eG_9m.js";import"./index-BPvXEz4B.js";import"./index-C0kheMH7.js";import"./index-BFYU0Mvp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-wtqIr7A-.js";import"./query-DOGTENGM.js";import"./Input-CTJTUFFu.js";import"./ResponsivePopoverCommon.css-DxFeQbMc.js";import"./ValueStateMessage.css-CA2fAuCP.js";import"./Suggestions.css-Ck69pShO.js";import"./appointment-2-DepR6C42.js";import"./ListItemStandard-Bt6MekvC.js";import"./slim-arrow-left-Dz1ahv0R.js";import"./Gregorian-D822Ic09.js";import"./Calendar-Bc3jTxhy.js";import"./InvisibleMessage-CpX70GFw.js";import"./index-Cs91-3HF.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
