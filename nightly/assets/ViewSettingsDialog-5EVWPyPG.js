import{j as t,e as n}from"./iframe-DUFdGNZ-.js";import{useMDXComponents as x}from"./index-lDTLJk7j.js";import{M as d,C as h,a as j,D as i,A as r}from"./blocks-Cil-35LB.js";import"./Tag-BIgoED-u.js";import"./index-aevS7PA-.js";import{C as f}from"./ControlsWithNote-CA46pQAN.js";import{D as S}from"./DocsHeader-BQtE_pzP.js";import{F as u}from"./CommandsAndQueries-BGpNLpHt.js";import{S as D}from"./SubcomponentsSection-BVy4lpQe.js";import{C as s,D as m,S as p,F as a,a as c}from"./ViewSettingsDialog.stories-BvKzBAbP.js";import"./preload-helper-D9Z9MdNV.js";import"./information-CgwzUTpr.js";import"./sys-enter-2-BnIfB17f.js";import"./alert-DGbf_sXK.js";import"./index-DceE06Sq.js";import"./index-BnSYwVvS.js";import"./Link-CUBBmqoz.js";import"./copy-CX8AOcqp.js";import"./copy-E4FhZn3x.js";import"./GitHub-Mark-avIXmTtc.js";import"./TableOfContent-ew4WB2x2.js";import"./index-CGt5UzDi.js";import"./index-HLxWh4_j.js";import"./addCustomCSSWithScoping-Brp1WNYE.js";import"./index-COMDMvYs.js";import"./index-BiGG8FGx.js";import"./index-B4gWJnff.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DqrZbdHQ.js";import"./InvisibleMessage-Btu_O-HX.js";import"./sort-DTogg6yG.js";import"./filter-CmMKzJCM.js";import"./i18n-defaults-Cjp7arcT.js";import"./SegmentedButton-CcLQlQxt.js";import"./ListItemStandard-BlKXn9_7.js";import"./parameters-bundle.css-34zgZIqy.js";function l(e){const o={code:"code",h2:"h2",p:"p",pre:"pre",...x(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:s}),`
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
