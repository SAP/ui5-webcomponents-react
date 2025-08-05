import{j as e}from"./iframe-DofHecbS.js";import{useMDXComponents as s}from"./index-C8vGIvk8.js";import{M as m,C as o}from"./blocks-D1wzbhWf.js";import"./Tag-DPdR_js3.js";import"./index-DxedyFSH.js";import{C as l}from"./ControlsWithNote-BR0fXs1Y.js";import{D as p}from"./DocsHeader-BQjUUUhy.js";import{F as d}from"./CommandsAndQueries-B_nZVkrt.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-B0Hqnhvq.js";import"./preload-helper-Dp1pzeXC.js";import"./information-CgIpVhAV.js";import"./sys-enter-2-BGLCbdRF.js";import"./alert-BfmE4lX_.js";import"./index-CrXv1RBx.js";import"./index-JzBnNIyF.js";import"./Link-Cmqq4my9.js";import"./copy-qGTT0HfO.js";import"./copy-7CDC0i6_.js";import"./GitHub-Mark-C8zKt1Po.js";import"./TableOfContent-eAxnF9pp.js";import"./index-2GOtqWe8.js";import"./index-C1xP7ttJ.js";import"./addCustomCSSWithScoping-D75UEBUU.js";import"./index-C1lTEPtW.js";import"./index-D3sPt_5B.js";import"./index-5wCFhmZT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ckn3SEtT.js";import"./query-DOGTENGM.js";import"./Input-N_-j7LxY.js";import"./ResponsivePopoverCommon.css-TlSViPpe.js";import"./ValueStateMessage.css-DVInJl-v.js";import"./Suggestions.css-DlkHD9ll.js";import"./appointment-2-yrogyUGg.js";import"./ListItemStandard-DGMAivsS.js";import"./slim-arrow-left-DMaJEVxO.js";import"./Gregorian-BYpP1JqF.js";import"./Calendar-CMPZ-Xg3.js";import"./InvisibleMessage-nm_wn900.js";import"./index-fNtdlXtU.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
