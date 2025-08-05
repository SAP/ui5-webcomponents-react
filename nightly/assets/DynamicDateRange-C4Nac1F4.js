import{j as e}from"./iframe-CG2rGjbc.js";import{useMDXComponents as s}from"./index-DS69H-n6.js";import{M as m,C as o}from"./blocks-BOXfYYlZ.js";import"./Tag-B3NEGkkI.js";import"./index-BVmbnKNa.js";import{C as l}from"./ControlsWithNote-BFQM5fX0.js";import{D as p}from"./DocsHeader-BGOyORj-.js";import{F as d}from"./CommandsAndQueries-DskZpT92.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-B0AQBJxb.js";import"./preload-helper-Dp1pzeXC.js";import"./information-CUctzDB0.js";import"./sys-enter-2-58dTwXpy.js";import"./alert-xERNdQ9e.js";import"./index-vBa65tZZ.js";import"./index-4ahbKnxX.js";import"./Link-BOSvSmJd.js";import"./copy-Cd5gRkoK.js";import"./copy-Cj_PeOWN.js";import"./GitHub-Mark-C4GRBKUH.js";import"./TableOfContent-DgRpeg8V.js";import"./index-BEeaA3No.js";import"./index-Bm2fVwXT.js";import"./addCustomCSSWithScoping-CQY8oQwD.js";import"./index-B3gloDnF.js";import"./index-DEr8Ja6X.js";import"./index-dno7x-xA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CBxXpI3-.js";import"./query-DOGTENGM.js";import"./Input-D_cunrq3.js";import"./ResponsivePopoverCommon.css-ZxvNyTGX.js";import"./ValueStateMessage.css-DQP0hkeA.js";import"./Suggestions.css-BEa1e1bh.js";import"./appointment-2-wlrfW-j_.js";import"./ListItemStandard-CYmen0Jk.js";import"./slim-arrow-left-BDDQRLb0.js";import"./Gregorian-rZufgdhv.js";import"./Calendar-Bdd6DlNK.js";import"./InvisibleMessage-C2yLfqUK.js";import"./index-Xwbj5fV9.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
