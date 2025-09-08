import{j as e}from"./iframe-C-EBr6B5.js";import{useMDXComponents as s}from"./index-CsHoO3vp.js";import{M as m,C as o}from"./blocks-CW6WXKe3.js";import"./Tag-oA_76L9w.js";import"./index-w0Ow44Ci.js";import{C as l}from"./ControlsWithNote-l5ZPcGPi.js";import{D as p}from"./DocsHeader-DFQCx5wt.js";import{F as d}from"./CommandsAndQueries-uIAr-det.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CeJuvtsn.js";import"./preload-helper-D9Z9MdNV.js";import"./i18n-DCXZOGva.js";import"./information-tqFaSeRf.js";import"./sys-enter-2-Bt0bcCDE.js";import"./alert-yTZDtevr.js";import"./index-DPNnv8Bc.js";import"./index-D4pu56zs.js";import"./Link-BOxP5Jij.js";import"./copy-CmCcSBUg.js";import"./copy-u5h8VvvF.js";import"./GitHub-Mark--2iq0Lvm.js";import"./TableOfContent-CAVSmF6L.js";import"./index-BUutaB5D.js";import"./index-BI8WG9ur.js";import"./addCustomCSSWithScoping-DyJ9Y5R2.js";import"./index-DuvAH5uD.js";import"./index-CcO_nGqV.js";import"./index-o40X6E60.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B-BNRVJb.js";import"./Gregorian-D1uUvksM.js";import"./query-CzSBusdE.js";import"./Input-Ds_HDP4O.js";import"./ResponsivePopoverCommon.css-CDBYINKk.js";import"./ValueStateMessage.css-B0uL2WsG.js";import"./Suggestions.css-B3PqFbjl.js";import"./appointment-2-DH0TH9zx.js";import"./ListItemStandard-DX4UvhQJ.js";import"./slim-arrow-left-DfIrZR0T.js";import"./Calendar-DomvNFd7.js";import"./InvisibleMessage-CqVAFS8W.js";import"./index-CnrGkxIO.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
