import{j as e}from"./iframe-DTnEqaXa.js";import{useMDXComponents as s}from"./index-Bzwj8IeJ.js";import{M as m,C as o}from"./blocks-DjoWO0N0.js";import"./Tag-B9YI4L6P.js";import"./index-X9x0GvvK.js";import{C as l}from"./ControlsWithNote-wh0dqaK4.js";import{D as p}from"./DocsHeader-CqbQoEIe.js";import{F as d}from"./CommandsAndQueries-o88EZ4zv.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DzhHqI5X.js";import"./preload-helper-Dp1pzeXC.js";import"./information-Z43pYR60.js";import"./sys-enter-2-2LeoQRYT.js";import"./alert-no1g3tmv.js";import"./index-Bmfc8Eqw.js";import"./index-CPY0RkYC.js";import"./Link-DjplMcMT.js";import"./copy-C-IiZJgc.js";import"./copy-CVTh1Y4e.js";import"./GitHub-Mark-9U6s1xlG.js";import"./TableOfContent-CnhdJ1_G.js";import"./index-DCbmFI06.js";import"./index-L41gFWOj.js";import"./addCustomCSSWithScoping-Di76Mem5.js";import"./index-BLEhzZcH.js";import"./index-BtOoTda4.js";import"./index-Cbvl8GTm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BvuY_C9E.js";import"./query-DOGTENGM.js";import"./Input-BX2m7kq-.js";import"./ResponsivePopoverCommon.css-Dg8IVknp.js";import"./ValueStateMessage.css-CPiQjmUi.js";import"./Suggestions.css-BEWKt8Uf.js";import"./appointment-2--xOLzW8L.js";import"./ListItemStandard-Z9rWegqM.js";import"./slim-arrow-left-CtEF-x63.js";import"./Gregorian-qoY9NUzn.js";import"./Calendar-CzjgtiSf.js";import"./InvisibleMessage--LVGVy97.js";import"./index-DT1QH2dv.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
