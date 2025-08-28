import{j as e}from"./iframe-ir6pYnmz.js";import{useMDXComponents as s}from"./index-41o0Td7A.js";import{M as m,C as o}from"./blocks-D_tGmZuN.js";import"./Tag-DRGeWEus.js";import"./index-e4AcpL9G.js";import{C as l}from"./ControlsWithNote-m8JvSVba.js";import{D as p}from"./DocsHeader-REPCwOzH.js";import{F as d}from"./CommandsAndQueries-b6zt1eWd.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-G97QbiwD.js";import"./preload-helper-Ct5FWWRu.js";import"./information-B8K6izqM.js";import"./sys-enter-2-CYPsCOvo.js";import"./alert-DQylSe-I.js";import"./index-BbtZuvgL.js";import"./index-BTss8I7u.js";import"./Link-Be2dbLkV.js";import"./copy-8vGiL6Nc.js";import"./copy-BlUsduAp.js";import"./GitHub-Mark-LFaeNMf3.js";import"./TableOfContent-COGJEfC8.js";import"./index-CH7s07mV.js";import"./index-1Mik_Y5f.js";import"./addCustomCSSWithScoping-DMyl69E9.js";import"./index-CZ16GD7U.js";import"./index-CKTjdAAk.js";import"./index-8VSCVlQX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D5OnWZgu.js";import"./query-CzSBusdE.js";import"./Input-CT2v4mLF.js";import"./ResponsivePopoverCommon.css-CAhax-LW.js";import"./ValueStateMessage.css-DXEXnL2N.js";import"./Suggestions.css-DVkCnc2y.js";import"./appointment-2-BFBEKvkn.js";import"./ListItemStandard-CDRG7U85.js";import"./slim-arrow-left-xanXJTib.js";import"./Gregorian-CGq_2qD0.js";import"./Calendar-DXYBY-P4.js";import"./InvisibleMessage-q2TaioBA.js";import"./index-BvZ0UPF0.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
