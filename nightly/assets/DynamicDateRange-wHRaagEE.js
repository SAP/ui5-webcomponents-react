import{j as e}from"./iframe-D9TrNBgU.js";import{useMDXComponents as s}from"./index-DVnXt3Ou.js";import{M as m,C as o}from"./blocks-CZTCdXhi.js";import"./Tag-Dxsn5xSE.js";import"./index-BNvAHmYG.js";import{C as l}from"./ControlsWithNote-CSjZ13nD.js";import{D as p}from"./DocsHeader-0Jjxl0tR.js";import{F as d}from"./CommandsAndQueries-D4YJbg3c.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BAeYNe78.js";import"./preload-helper-Ct5FWWRu.js";import"./information-Dq_NLOBW.js";import"./sys-enter-2-BRxN4trI.js";import"./alert-BYqnAs_s.js";import"./index-CVrKfxdZ.js";import"./index-X8OlRuzo.js";import"./Link-BksfT5MZ.js";import"./copy-idIQo1yB.js";import"./copy-DLBvKbOK.js";import"./GitHub-Mark-CR-XH0WA.js";import"./TableOfContent-Bm0N_0e1.js";import"./index-mrCdGkzC.js";import"./index-CUfd_MNc.js";import"./addCustomCSSWithScoping-CilyEzf4.js";import"./index-4yoZlSR7.js";import"./index-L-4di-4u.js";import"./index-DFqe2H1-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C7V4inOY.js";import"./query-CzSBusdE.js";import"./Input-DQQyXJAT.js";import"./ResponsivePopoverCommon.css-C8Orn_aN.js";import"./ValueStateMessage.css-DHgdSKUd.js";import"./Suggestions.css-Bf6rrCOA.js";import"./appointment-2-mCIn0XSG.js";import"./ListItemStandard-DbZzwl2a.js";import"./slim-arrow-left-BE5Zy2xp.js";import"./Gregorian-DFZ6chAy.js";import"./Calendar-BLe_dwSO.js";import"./InvisibleMessage-B7KEwtPS.js";import"./index-DahENrtL.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
