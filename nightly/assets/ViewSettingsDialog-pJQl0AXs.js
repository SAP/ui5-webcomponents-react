import{j as t,e as n}from"./iframe-Dyl3L-t5.js";import{useMDXComponents as x}from"./index-DBGwXOnP.js";import{M as d,C as h,a as j,D as i,A as r}from"./blocks-DynXzMxo.js";import"./Tag-CzQty8rY.js";import"./index-CqdKq5PF.js";import{C as f}from"./ControlsWithNote-CMyxfP3l.js";import{D as S}from"./DocsHeader-C8XbMA3a.js";import{F as u}from"./CommandsAndQueries-Cb3G3ka5.js";import{S as D}from"./SubcomponentsSection-BVy4lpQe.js";import{C as s,D as m,S as p,F as a,a as c}from"./ViewSettingsDialog.stories-DNBMB3S4.js";import"./preload-helper-Ct5FWWRu.js";import"./information-B08y1s4G.js";import"./sys-enter-2-CX7GW53q.js";import"./alert-CBwUNVAj.js";import"./index-TINCTucQ.js";import"./index-BDQQRyfA.js";import"./Link-BjutyjAG.js";import"./copy-CJQmrf12.js";import"./copy-CWrvVeie.js";import"./GitHub-Mark-BcD1_bIs.js";import"./TableOfContent-AMPzVTY_.js";import"./index-BJK3nZOd.js";import"./index-mdaYmaaO.js";import"./addCustomCSSWithScoping-B7LJv67X.js";import"./index-l7b9iK_5.js";import"./index-CON7qShv.js";import"./index-BzFXJVYV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CmgV2bLI.js";import"./InvisibleMessage-DYgdDzKE.js";import"./sort-D4th45-u.js";import"./filter-BLL2_YGc.js";import"./i18n-defaults-Cjp7arcT.js";import"./SegmentedButton-CQaM9kSM.js";import"./ListItemStandard-DAw7VuyQ.js";import"./parameters-bundle.css-34zgZIqy.js";function l(e){const o={code:"code",h2:"h2",p:"p",pre:"pre",...x(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:s}),`
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
`,t.jsx(u,{})]})}function et(e={}){const{wrapper:o}={...x(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(l,{...e})}):l(e)}export{et as default};
