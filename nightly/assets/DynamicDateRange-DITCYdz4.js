import{j as e}from"./iframe-Plj9L4DO.js";import{useMDXComponents as s}from"./index-uN80YAVR.js";import{M as m,C as o}from"./blocks-CBjnjgp2.js";import"./Tag-Chhqj61J.js";import"./index-TPF4FnDa.js";import{C as l}from"./ControlsWithNote-BUu8k3dE.js";import{D as p}from"./DocsHeader-gHpZDn-5.js";import{F as d}from"./CommandsAndQueries-BWyKkggu.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DqTbcAcC.js";import"./preload-helper-Ct5FWWRu.js";import"./information-gWqn0Y75.js";import"./sys-enter-2-CA_27ms1.js";import"./alert-p9YyGNnM.js";import"./index-B6F36pGT.js";import"./index-B4Ji1mzc.js";import"./Link-BaW3AGMM.js";import"./copy-9NjNiENk.js";import"./copy-DLXELO5k.js";import"./GitHub-Mark-Dn5luEEb.js";import"./TableOfContent-awrCgv2Y.js";import"./index-DdhKX7PQ.js";import"./index-BQrHmUPn.js";import"./addCustomCSSWithScoping-DiURvOzS.js";import"./index-q1UVXeS8.js";import"./index-8rr5Mrdg.js";import"./index-B8knOcBx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-vnxFP9T5.js";import"./query-CzSBusdE.js";import"./Input-D_9FWiS-.js";import"./ResponsivePopoverCommon.css-DCdKvyYg.js";import"./ValueStateMessage.css-JOKuFUum.js";import"./Suggestions.css-CxuGFOi-.js";import"./appointment-2-pbQl0W_r.js";import"./ListItemStandard-CZA0fV_-.js";import"./slim-arrow-left-BeVobF94.js";import"./Gregorian-ClDypCeB.js";import"./Calendar-D6lFT3cD.js";import"./InvisibleMessage-C9ijcey0.js";import"./index-C5HZXdPZ.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
