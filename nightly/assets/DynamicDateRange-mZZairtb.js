import{j as e}from"./iframe-DEht8tsT.js";import{useMDXComponents as s}from"./index-CHmvqmZV.js";import{M as m,C as o}from"./blocks-B9eJfK2p.js";import"./Tag-Bo7VmRFf.js";import"./index-qqa4-hS-.js";import{C as l}from"./ControlsWithNote-9o3rXavj.js";import{D as p}from"./DocsHeader-CHi1snSz.js";import{F as d}from"./CommandsAndQueries-r7FFQXZn.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CbMMyJQV.js";import"./preload-helper-D9Z9MdNV.js";import"./i18n-DCXZOGva.js";import"./information-qGG1TAK7.js";import"./sys-enter-2-Wo80rP1Y.js";import"./alert-BsRJ2cl_.js";import"./index-v8e_2LrN.js";import"./index-Dwyff0cB.js";import"./Link-DQiRK5OG.js";import"./copy-CMVPQJQP.js";import"./copy-DdxSmOcQ.js";import"./GitHub-Mark-swxpQ8aX.js";import"./TableOfContent-BBCeB6M5.js";import"./index-DLGND6CU.js";import"./index-Boj5J7Ot.js";import"./addCustomCSSWithScoping-BN-zHrab.js";import"./index-D0y5lDJX.js";import"./index--icAFx10.js";import"./index-BRdP8YZI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cl7xFzXJ.js";import"./Gregorian-D1uUvksM.js";import"./query-CzSBusdE.js";import"./Input-hFJzw5L1.js";import"./ResponsivePopoverCommon.css-CByNGfjI.js";import"./ValueStateMessage.css-CelINsiK.js";import"./Suggestions.css-BNActsuA.js";import"./appointment-2-CgIHGTin.js";import"./ListItemStandard-6KE8nClO.js";import"./slim-arrow-left-Bke_jWFm.js";import"./Calendar-BTvsgfkn.js";import"./InvisibleMessage-CqVAFS8W.js";import"./index-Cbf0XwND.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
`,e.jsx(d,{})]})}function ee(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{ee as default};
