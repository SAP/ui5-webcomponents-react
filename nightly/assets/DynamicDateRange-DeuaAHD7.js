import{j as e}from"./iframe-BZP9qxoJ.js";import{useMDXComponents as s}from"./index-CniPTHSz.js";import{M as m,C as o}from"./blocks-CNZWeGQ1.js";import"./Tag-BxyquP8A.js";import"./index-DxnggiYi.js";import{C as l}from"./ControlsWithNote-BMy8mcwg.js";import{D as p}from"./DocsHeader-C0PYfigg.js";import{F as d}from"./CommandsAndQueries-CtCNZgsU.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-gasSNB_q.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BmFtf2Jh.js";import"./sys-enter-2-s2PLeJyt.js";import"./alert-Cb0aonIe.js";import"./index--Vew3hXz.js";import"./index-xiFcJlxz.js";import"./Link-DSvye9Ik.js";import"./copy-DDKMzXcY.js";import"./copy-BNU1F6ls.js";import"./GitHub-Mark-DbVtln9l.js";import"./TableOfContent-HhhNHGfL.js";import"./index-C-1ECvAU.js";import"./index-Czg7RjtG.js";import"./addCustomCSSWithScoping-BBk-9-X7.js";import"./index-CD1m4nLu.js";import"./index-DwaE3Lty.js";import"./index-CT1vfvrt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-2WJXARYL.js";import"./query-CzSBusdE.js";import"./Input-nQkDkpMo.js";import"./ResponsivePopoverCommon.css--1qcCkZD.js";import"./ValueStateMessage.css-BWItzYrT.js";import"./Suggestions.css-ByBItAub.js";import"./appointment-2-D994Pao0.js";import"./ListItemStandard-cIFVz4xB.js";import"./slim-arrow-left-BVel_PlL.js";import"./Gregorian-Rb0yE-ec.js";import"./Calendar-LTnR9bSs.js";import"./InvisibleMessage-D-XldCbn.js";import"./index-BgN_-xrJ.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
