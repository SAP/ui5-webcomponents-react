import{j as e}from"./iframe-zpPFhmqz.js";import{useMDXComponents as s}from"./index-aGUGAxCn.js";import{M as m,C as o}from"./blocks-q8Nphih1.js";import"./Tag-DF5VPs_L.js";import"./index-DBWFzhv7.js";import{C as l}from"./ControlsWithNote-JGjSe56-.js";import{D as p}from"./DocsHeader-CndVAY3u.js";import{F as d}from"./CommandsAndQueries-DoDYgPNU.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-oxWWRaXs.js";import"./preload-helper-D9Z9MdNV.js";import"./i18n-DCXZOGva.js";import"./information-BG3miSRm.js";import"./sys-enter-2-DUb0BHPN.js";import"./alert-DHhUa2Y-.js";import"./index-C9UnmKjh.js";import"./index-gkv542qS.js";import"./Link-Dx0W1V1U.js";import"./copy-CMd4rKCB.js";import"./copy-CsdqLzsD.js";import"./GitHub-Mark-CWEXDE9I.js";import"./TableOfContent-CoCY-HdJ.js";import"./index-DOk7cku9.js";import"./index-iS2pCHHF.js";import"./addCustomCSSWithScoping-welUcsP2.js";import"./index-6SGI919r.js";import"./index-DihSpOjx.js";import"./index-zsfuzf0m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CiKWeE0m.js";import"./Gregorian-D1uUvksM.js";import"./query-CzSBusdE.js";import"./Input-BcHfgIky.js";import"./ResponsivePopoverCommon.css-Cb1nsgmq.js";import"./ValueStateMessage.css-CmZvREXK.js";import"./Suggestions.css-DIfLi72j.js";import"./appointment-2-D0JRZjk9.js";import"./ListItemStandard-qOMJB75Y.js";import"./slim-arrow-left-DnZfBRTD.js";import"./Calendar-HhnaF-JO.js";import"./InvisibleMessage-CqVAFS8W.js";import"./index-D8yCGdW8.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
