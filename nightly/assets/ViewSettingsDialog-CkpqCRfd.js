import{j as t,e as n}from"./iframe-BVTjwwa8.js";import{useMDXComponents as x}from"./index-B7X7f4OL.js";import{M as d,C as h,a as j,D as i,A as r}from"./blocks-eGiRc96Y.js";import"./Tag-Dd2A7Fyt.js";import"./index-CMlRFogN.js";import{C as f}from"./ControlsWithNote-hZUn05pH.js";import{D as S}from"./DocsHeader-BcrStdCo.js";import{F as u}from"./CommandsAndQueries-BxY3Aj9d.js";import{S as D}from"./SubcomponentsSection-BVy4lpQe.js";import{C as s,D as m,S as p,F as a,a as c}from"./ViewSettingsDialog.stories-DPMTFLpQ.js";import"./preload-helper-D9Z9MdNV.js";import"./information-DblDnfTa.js";import"./sys-enter-2-w3Gdy4bH.js";import"./alert-DS_YR08B.js";import"./index-B1gqswNl.js";import"./index-BsaRVQdN.js";import"./Link-B7kPjB45.js";import"./copy-CIRJ6Cju.js";import"./copy-B0_44_hm.js";import"./GitHub-Mark-DdcWzYif.js";import"./TableOfContent-pmxBEo13.js";import"./index-DP8RXEYN.js";import"./index-BvWmgkkb.js";import"./addCustomCSSWithScoping-CzL_B1eM.js";import"./index-ytwNl_Zj.js";import"./index-IhKV7aiN.js";import"./index-BQCzDji_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-yJLdt4rK.js";import"./query-CzSBusdE.js";import"./InvisibleMessage-CETvZCdD.js";import"./sort-DazjUuSl.js";import"./filter-YUeSfDda.js";import"./i18n-defaults-BS8OTJAB.js";import"./SegmentedButton-CTr1olLB.js";import"./ListItemStandard-BAXagnCs.js";import"./parameters-bundle.css-MDhRcvbE.js";function l(e){const o={code:"code",h2:"h2",p:"p",pre:"pre",...x(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:s}),`
`,t.jsx(S,{of:s,since:"0.20.0"}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(h,{of:m}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(f,{of:m}),`
`,t.jsx(o.h2,{id:"opening-viewsettingsdialog",children:"Opening ViewSettingsDialog"}),`
`,t.jsxs(o.p,{children:["You can open and close the ",t.jsx(o.code,{children:"ViewSettingsDialog"})," component in a declarative way using the ",t.jsx(o.code,{children:"open"})," prop."]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const ViewSettingsDialogComponent = () => {
  const [showVSD, setShowVSD] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setShowVSD(true);
        }}
      >
        Open ViewSettingsDialog
      </Button>
      <ViewSettingsDialog
        open={showVSD}
        onClose={() => {
          setShowVSD(false);
        }}
        sortItems={
          <>
            <SortItem text="Name" />
            <SortItem text="Position" />
            <SortItem text="Company" />
            <SortItem text="Department" />
          </>
        }
      />
    </>
  );
};
`})}),`
`,t.jsx(j,{children:D}),`
`,t.jsx(o.h2,{id:"sortitem",children:"SortItem"}),`
`,t.jsx(i,{of:p}),`
`,t.jsx(r,{exclude:n,of:p}),`
`,t.jsx(o.h2,{id:"filteritem",children:"FilterItem"}),`
`,t.jsx(i,{of:a}),`
`,t.jsx(r,{exclude:n,of:a}),`
`,t.jsx(o.h2,{id:"filteritemoption",children:"FilterItemOption"}),`
`,t.jsx(i,{of:c}),`
`,t.jsx(r,{exclude:n,of:c}),`
`,t.jsx(u,{})]})}function nt(e={}){const{wrapper:o}={...x(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(l,{...e})}):l(e)}export{nt as default};
