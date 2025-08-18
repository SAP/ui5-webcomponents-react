import{j as e}from"./iframe-BZQDLaud.js";import{useMDXComponents as s}from"./index-C_GG0ZGD.js";import{M as m,C as o}from"./blocks-Cx9bcs1C.js";import"./Tag-D-gB3YeX.js";import"./index-DJN5YABY.js";import{C as l}from"./ControlsWithNote-D3crpagW.js";import{D as p}from"./DocsHeader-BBbzR6Xb.js";import{F as d}from"./CommandsAndQueries-DWGWAVRo.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-jauDU3fJ.js";import"./preload-helper-Ct5FWWRu.js";import"./information-B9S0fYTB.js";import"./sys-enter-2-CBLZgJFq.js";import"./alert-BSsrq5HK.js";import"./index-CKSa3A9-.js";import"./index-AG4whyzM.js";import"./Link-CNK5l0fe.js";import"./copy-FMabBKUP.js";import"./copy-BROMiSoG.js";import"./GitHub-Mark-CJ_rqd6q.js";import"./TableOfContent-BmdOjVK1.js";import"./index-8dfRRBIr.js";import"./index-D_nwxPuV.js";import"./addCustomCSSWithScoping-BvPnid_d.js";import"./index-Cfu_YQna.js";import"./index-CGfYsqbH.js";import"./index-CvEaTXbe.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CVHMP-qL.js";import"./query-CzSBusdE.js";import"./Input-DWSj0jbp.js";import"./ResponsivePopoverCommon.css-DjqZq9sD.js";import"./ValueStateMessage.css-D3ij8aoW.js";import"./Suggestions.css-DSv3s41Y.js";import"./appointment-2-DnksK7pb.js";import"./ListItemStandard-CQOO1Zsr.js";import"./slim-arrow-left-Dl6dMVcL.js";import"./Gregorian-CknoVXyy.js";import"./Calendar-CCiJRgUm.js";import"./InvisibleMessage-BonTwXKe.js";import"./index-bVI9GcFP.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
