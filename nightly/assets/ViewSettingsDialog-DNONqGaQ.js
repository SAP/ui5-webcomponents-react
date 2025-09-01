import{j as t,e as n}from"./iframe-Bb_MgE3Z.js";import{useMDXComponents as x}from"./index-DKEbDWFi.js";import{M as d,C as h,a as j,D as i,A as r}from"./blocks-C_ShsaTX.js";import"./Tag-B5i1kgB9.js";import"./index-DayVNiXE.js";import{C as f}from"./ControlsWithNote-Br6-EL5r.js";import{D as S}from"./DocsHeader-pqQ7E-qX.js";import{F as u}from"./CommandsAndQueries-c2dxMxjd.js";import{S as D}from"./SubcomponentsSection-BVy4lpQe.js";import{C as s,D as m,S as p,F as a,a as c}from"./ViewSettingsDialog.stories-C4I_1La2.js";import"./preload-helper-D9Z9MdNV.js";import"./information-C6jJlQn9.js";import"./sys-enter-2-CM5wN5Wl.js";import"./alert-Y-36vIFj.js";import"./index-DViW7Jtd.js";import"./index-Ck4df4kL.js";import"./Link-DNvb3KzX.js";import"./copy-CIv8JdSf.js";import"./copy-BzQS_3Hx.js";import"./GitHub-Mark-CIQdlUo7.js";import"./TableOfContent-Dyl8nPzW.js";import"./index-Cq06OFSr.js";import"./index-Na43IgM6.js";import"./addCustomCSSWithScoping-Bc03fLSU.js";import"./index-Ci9Y4xV9.js";import"./index-BfQwzX8T.js";import"./index-j0v7UbS8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHOTzJyN.js";import"./InvisibleMessage-BjdIRmAn.js";import"./sort-CVZ6qfhy.js";import"./filter-C_kmjLm2.js";import"./i18n-defaults-Cjp7arcT.js";import"./SegmentedButton-BWyd7qOx.js";import"./ListItemStandard-BcSpEqks.js";import"./parameters-bundle.css-34zgZIqy.js";function l(e){const o={code:"code",h2:"h2",p:"p",pre:"pre",...x(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:s}),`
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
