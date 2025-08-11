import{j as e}from"./iframe-C5HYk_w9.js";import{useMDXComponents as s}from"./index-NAtY6U9A.js";import{M as m,C as o}from"./blocks-C9zU_CnO.js";import"./Tag-B9SFZhnL.js";import"./index-DDk7xvH6.js";import{C as l}from"./ControlsWithNote-D85sRsQV.js";import{D as p}from"./DocsHeader-j2xomDQy.js";import{F as d}from"./CommandsAndQueries-D55ZIYIG.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BBmgfIHD.js";import"./preload-helper-Dp1pzeXC.js";import"./information-CZ-iBUXB.js";import"./sys-enter-2-Dq_SL8zM.js";import"./alert-D8SJwSxQ.js";import"./index-BrZnxm7s.js";import"./index-KbHDLtpi.js";import"./Link-B-N5NiBa.js";import"./copy-fXr871V-.js";import"./copy-C5SWnutv.js";import"./GitHub-Mark-Dm-NBxFc.js";import"./TableOfContent-DsGDxpKI.js";import"./index-LTyOz7tz.js";import"./index-G9j5f01x.js";import"./addCustomCSSWithScoping-BFQWIBF3.js";import"./index-CFd9-fPm.js";import"./index-DSpr5FZx.js";import"./index-CO2rizW7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CfasPfI1.js";import"./query-DOGTENGM.js";import"./Input-BdwJJtVE.js";import"./ResponsivePopoverCommon.css-C8yEY6IR.js";import"./ValueStateMessage.css-D4-kWGJF.js";import"./Suggestions.css-Dsm1Odvr.js";import"./appointment-2-Ow0eAy0x.js";import"./ListItemStandard-R3eedhiG.js";import"./slim-arrow-left-CJPMAZas.js";import"./Gregorian-BdUlRJqB.js";import"./Calendar-UILtS29z.js";import"./InvisibleMessage-BmEFxMXz.js";import"./index-BDUto2bG.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
