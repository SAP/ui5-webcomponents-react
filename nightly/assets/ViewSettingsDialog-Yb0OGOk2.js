import{j as t,e as n}from"./iframe-BuT579UQ.js";import{useMDXComponents as x}from"./index-hwCnNpvR.js";import{M as d,C as h,a as j,D as i,A as r}from"./blocks-xCv3ALrs.js";import"./Tag-BfLQPV5Q.js";import"./index-BdhtxwT5.js";import{C as f}from"./ControlsWithNote-BhkP8uA-.js";import{D as S}from"./DocsHeader-3ZL9iB6q.js";import{F as u}from"./CommandsAndQueries-bkB85Yh1.js";import{S as D}from"./SubcomponentsSection-BVy4lpQe.js";import{C as s,D as m,S as p,F as a,a as c}from"./ViewSettingsDialog.stories-bZVtnJ9e.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BpdkAt88.js";import"./sys-enter-2-fNvpiTi4.js";import"./alert-Dvzv9mH1.js";import"./index-Sm3A70Iw.js";import"./index-DcodLJdG.js";import"./Link-BRdwNtbO.js";import"./copy-B0njaLsn.js";import"./copy-wEyzDN_W.js";import"./GitHub-Mark-kV7bFz4J.js";import"./TableOfContent-38NG_1gx.js";import"./index-B5tYw3g0.js";import"./index-CKRjOfqg.js";import"./addCustomCSSWithScoping-BObqnoGh.js";import"./index-CSxL7VzK.js";import"./index-mwQcMkri.js";import"./index-t5BVUaSq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BWHNxoJ6.js";import"./InvisibleMessage-Ba38bBs7.js";import"./sort-Dr-vXKVo.js";import"./filter-JS7GUKDF.js";import"./i18n-defaults-Cjp7arcT.js";import"./SegmentedButton-CRrW-aTl.js";import"./ListItemStandard-CHi924vm.js";import"./parameters-bundle.css-34zgZIqy.js";function l(e){const o={code:"code",h2:"h2",p:"p",pre:"pre",...x(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:s}),`
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
