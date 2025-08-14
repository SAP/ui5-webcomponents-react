import{j as e}from"./iframe-Ckbc0Bmx.js";import{useMDXComponents as s}from"./index-DE-5xG9A.js";import{M as m,C as o}from"./blocks-D8tYWjnn.js";import"./Tag-rdyPterE.js";import"./index-Darg-j2X.js";import{C as l}from"./ControlsWithNote-DLVwlFtc.js";import{D as p}from"./DocsHeader-BLzJKU0S.js";import{F as d}from"./CommandsAndQueries-DKucLITF.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-DDfVpyky.js";import"./preload-helper-Ct5FWWRu.js";import"./information-OBfwqURu.js";import"./sys-enter-2-BD7M3cvb.js";import"./alert-j4aUIFXI.js";import"./index-CuHvomlB.js";import"./index-CzMZkzJI.js";import"./Link-D1WHOsxc.js";import"./copy-DgE2YH3h.js";import"./copy-B7_DIIST.js";import"./GitHub-Mark-9fjhK1SO.js";import"./TableOfContent-BEHGMBJ6.js";import"./index-CrFxuHUZ.js";import"./index-COfW_OVU.js";import"./addCustomCSSWithScoping-Cf-O7l9b.js";import"./index-usyep8x_.js";import"./index-fzfaunU7.js";import"./index-C-9s8bgZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-oJ-6Sn3x.js";import"./query-CzSBusdE.js";import"./Input-WAgKnw3k.js";import"./ResponsivePopoverCommon.css-Ci4jtjI2.js";import"./ValueStateMessage.css-CoCSxpGR.js";import"./Suggestions.css-BqzJ2RoF.js";import"./appointment-2-B80BXco2.js";import"./ListItemStandard-C6lS1XXD.js";import"./slim-arrow-left-D3wQ2sUZ.js";import"./Gregorian-0vZ-61CN.js";import"./Calendar-z9dULjwk.js";import"./InvisibleMessage-BDhZ3h8W.js";import"./index-D4Yu1su5.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
