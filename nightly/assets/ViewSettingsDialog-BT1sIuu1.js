import{j as t,e as n}from"./iframe-yjMKSaW2.js";import{useMDXComponents as x}from"./index-DX8fpWzX.js";import{M as d,C as h,a as j,D as i,A as r}from"./blocks-qO1HNk-b.js";import"./Tag-BxGYemBH.js";import"./index-EVdkIx1d.js";import{C as f}from"./ControlsWithNote-wKta4bY1.js";import{D as S}from"./DocsHeader-CXHyuQiW.js";import{F as u}from"./CommandsAndQueries-ClO5_6SR.js";import{S as D}from"./SubcomponentsSection-BVy4lpQe.js";import{C as s,D as m,S as p,F as a,a as c}from"./ViewSettingsDialog.stories-CemKNayV.js";import"./preload-helper-Dp1pzeXC.js";import"./information-Cn2Ycis7.js";import"./sys-enter-2-CQXBhP7E.js";import"./alert-509BGbEm.js";import"./index-D2oaGTxE.js";import"./index-CM3jZrAN.js";import"./Link-hbFO0ZkL.js";import"./copy-CdUOUeib.js";import"./copy-Bx6gkJby.js";import"./GitHub-Mark-zti1AnK_.js";import"./TableOfContent-COrNlak9.js";import"./index-BTcK53Xp.js";import"./index-tTu9lfPG.js";import"./addCustomCSSWithScoping-DI9eG_9m.js";import"./index-BPvXEz4B.js";import"./index-C0kheMH7.js";import"./index-BFYU0Mvp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-wtqIr7A-.js";import"./InvisibleMessage-CpX70GFw.js";import"./sort-CZybMGoy.js";import"./filter-h9FGD-0R.js";import"./i18n-defaults-dyGKyNAh.js";import"./SegmentedButton-37GVceHj.js";import"./ListItemStandard-Bt6MekvC.js";import"./parameters-bundle.css-gLosEED4.js";function l(e){const o={code:"code",h2:"h2",p:"p",pre:"pre",...x(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:s}),`
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
