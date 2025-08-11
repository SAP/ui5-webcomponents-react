import{j as t,e as n}from"./iframe-4VeS9m_X.js";import{useMDXComponents as x}from"./index-DEI3eVkK.js";import{M as d,C as h,a as j,D as i,A as r}from"./blocks-CTNIJnm8.js";import"./Tag-DU1032-S.js";import"./index-CQXZWhIk.js";import{C as f}from"./ControlsWithNote-Cd4a9QE9.js";import{D as S}from"./DocsHeader-BBLwt-9L.js";import{F as u}from"./CommandsAndQueries-7kzg9PVA.js";import{S as D}from"./SubcomponentsSection-BVy4lpQe.js";import{C as s,D as m,S as p,F as a,a as c}from"./ViewSettingsDialog.stories-Bh80uM1J.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BYyVv8hA.js";import"./sys-enter-2-Yi--Cxct.js";import"./alert-BELJhRBR.js";import"./index-CftSo41I.js";import"./index-CzN5fyXT.js";import"./Link-DgF00I8w.js";import"./copy-CeAEX2cb.js";import"./copy-jnb9sYPg.js";import"./GitHub-Mark-ofnBKzQ-.js";import"./TableOfContent-CuT-m9D7.js";import"./index-C8P7iKVZ.js";import"./index-C9GlwG2P.js";import"./addCustomCSSWithScoping-XwuX-cd5.js";import"./index-DWv4GmHu.js";import"./index-yUZ2I_oB.js";import"./index-BlbvU_99.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xOI-l5fg.js";import"./InvisibleMessage-Dmfd1gOp.js";import"./sort-D-dieyvR.js";import"./filter-CouX_vyD.js";import"./i18n-defaults-dyGKyNAh.js";import"./SegmentedButton-BfWqXCxQ.js";import"./ListItemStandard-Ccnky39J.js";import"./parameters-bundle.css-B8Lg4lbk.js";function l(e){const o={code:"code",h2:"h2",p:"p",pre:"pre",...x(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:s}),`
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
