import{j as e}from"./iframe-W4A4TPxI.js";import{useMDXComponents as s}from"./index-DR9mRC8k.js";import{M as m,C as o}from"./blocks-CEc_PJPw.js";import"./Tag-B3SXYcEs.js";import"./index-CRDes7m2.js";import{C as l}from"./ControlsWithNote-DJvfCr-6.js";import{D as p}from"./DocsHeader-BspJ71bI.js";import{F as d}from"./CommandsAndQueries-CqKi30YT.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-B_UJrDOV.js";import"./preload-helper-D9Z9MdNV.js";import"./information-C_inBRxK.js";import"./sys-enter-2-ROh50Nf_.js";import"./alert-D2pUXI9_.js";import"./index-DKRTY3p_.js";import"./index-Bdj3qaur.js";import"./Link-DvQFsPEt.js";import"./copy-CNHqT_CZ.js";import"./copy-ieRXWhTl.js";import"./GitHub-Mark-D8W3wBw0.js";import"./TableOfContent-C_C61g46.js";import"./index-BPEyrKJO.js";import"./index-BvnHswum.js";import"./addCustomCSSWithScoping-I8zpHlEs.js";import"./index-BhV1V4Z5.js";import"./index-lcn5JMDI.js";import"./index-COHjWP7e.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C9AqO2sR.js";import"./Gregorian-CqGZ0EWB.js";import"./query-CzSBusdE.js";import"./Input-CfoEMb7S.js";import"./ResponsivePopoverCommon.css-BiB47G1s.js";import"./ValueStateMessage.css-DMS2XS0O.js";import"./Suggestions.css-hvZmQ1kq.js";import"./appointment-2-AXYLbfPx.js";import"./ListItemStandard-uRMv37PZ.js";import"./slim-arrow-left-DOoeU_MM.js";import"./Calendar-DOzhdpxP.js";import"./InvisibleMessage-CUUIa9XV.js";import"./index-BYYxdHSO.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
