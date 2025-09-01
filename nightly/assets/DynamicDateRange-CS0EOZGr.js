import{j as e}from"./iframe-Diowpvbi.js";import{useMDXComponents as s}from"./index-BQd2Q0Z3.js";import{M as m,C as o}from"./blocks-CoZBpVTI.js";import"./Tag-B0clkLGt.js";import"./index-D9YlVxTm.js";import{C as l}from"./ControlsWithNote-DRcGWIdC.js";import{D as p}from"./DocsHeader-B--p9QpE.js";import{F as d}from"./CommandsAndQueries-COPBvCoL.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BjGdfNJi.js";import"./preload-helper-D9Z9MdNV.js";import"./information-CDgRW97e.js";import"./sys-enter-2-DY02qdHz.js";import"./alert-BaFyoXY8.js";import"./index-B-BwEr1u.js";import"./index-CQR2h6vO.js";import"./Link-h6HOkbi0.js";import"./copy-CO2uSkVD.js";import"./copy-Cax_mWEs.js";import"./GitHub-Mark-BMoJ5fEk.js";import"./TableOfContent-DfKTIt_V.js";import"./index-1wgmtjtJ.js";import"./index-D0g3RjgB.js";import"./addCustomCSSWithScoping-BGpjw9gY.js";import"./index-B-dBAONH.js";import"./index-Ds6FKbjF.js";import"./index-xypPraOX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNWGtsu7.js";import"./query-CzSBusdE.js";import"./Input-CkOt0B6i.js";import"./ResponsivePopoverCommon.css-CASz0Dqp.js";import"./ValueStateMessage.css-Be7X1jMy.js";import"./Suggestions.css-DfleazkQ.js";import"./appointment-2-p59UkUr8.js";import"./ListItemStandard-BYhRCZSB.js";import"./slim-arrow-left-BqE33YlQ.js";import"./Gregorian-Bf-vXouk.js";import"./Calendar-Jy3k9X1x.js";import"./InvisibleMessage-BqM01yov.js";import"./index-DMgvpgkt.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
