import{j as e}from"./iframe-FFY2S6YG.js";import{useMDXComponents as s}from"./index-BzZglwT-.js";import{M as m,C as o}from"./blocks-tMTQEG0b.js";import"./Tag-CY0dYkIx.js";import"./index-CR-wXzPk.js";import{C as l}from"./ControlsWithNote-CnMrq5GR.js";import{D as p}from"./DocsHeader-DH5jxN5k.js";import{F as d}from"./CommandsAndQueries-CRs7a5Er.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-D7X3-img.js";import"./preload-helper-D9Z9MdNV.js";import"./information-bHzg5lJa.js";import"./sys-enter-2-DLgVYDfp.js";import"./alert-DTO9To2T.js";import"./index-BpfUe8Vy.js";import"./index-CYPt-1NW.js";import"./Link-ilnMyEmJ.js";import"./copy-BqF-CdnZ.js";import"./copy-DuPWkMaa.js";import"./GitHub-Mark-DKEFA1iy.js";import"./TableOfContent-t0yjNoj5.js";import"./index-BK6LUJYp.js";import"./index-aRemyO01.js";import"./addCustomCSSWithScoping-L7uLJS1K.js";import"./index-BvjHl6jR.js";import"./index-Cer5_OSt.js";import"./index-dBDK7i7w.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4hY5EkXL.js";import"./query-CzSBusdE.js";import"./Input-BUwXm7QE.js";import"./ResponsivePopoverCommon.css-Ns2pYP6j.js";import"./ValueStateMessage.css-Br2MqEEx.js";import"./Suggestions.css-BA_f9-0L.js";import"./appointment-2-esTtuTeB.js";import"./ListItemStandard-sXxgGRTN.js";import"./slim-arrow-left-RbRlOhbQ.js";import"./Gregorian-59uI-DXr.js";import"./Calendar-DYTiJf6o.js";import"./InvisibleMessage-CbKgbx5O.js";import"./index-DHw5dxkC.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
