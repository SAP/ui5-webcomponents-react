import{j as t,e as n}from"./iframe-Brl1VNXv.js";import{useMDXComponents as x}from"./index-lkEyU_nt.js";import{M as d,C as h,a as j,D as i,A as r}from"./blocks-BAqV5WPc.js";import"./Tag-CPqPqrcS.js";import"./index-BqPTl_TF.js";import{C as f}from"./ControlsWithNote-C8UpWLdO.js";import{D as S}from"./DocsHeader-COGT08jB.js";import{F as u}from"./CommandsAndQueries-Dk6rSuK-.js";import{S as D}from"./SubcomponentsSection-BVy4lpQe.js";import{C as s,D as m,S as p,F as a,a as c}from"./ViewSettingsDialog.stories-CTz2_HSB.js";import"./preload-helper-D9Z9MdNV.js";import"./information-BqiTraiu.js";import"./sys-enter-2-Br-uV94n.js";import"./alert-DWDpknyG.js";import"./index-_G4y7meT.js";import"./index-665xf7Lj.js";import"./Link-R6QwvZvg.js";import"./copy-CxRvf1AG.js";import"./copy-3T1gBUKn.js";import"./GitHub-Mark-CpfYWtaz.js";import"./TableOfContent-Bh0kKCkd.js";import"./index-cvNk3Ydm.js";import"./index-BAyaq3AZ.js";import"./addCustomCSSWithScoping-2pXmrNrJ.js";import"./index-CIiYxA_R.js";import"./index-CQN5QiqO.js";import"./index-BSJzWAI8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BAdmvlBz.js";import"./InvisibleMessage-CyHbLI8k.js";import"./sort-LH1cgk6l.js";import"./filter-DaykPM6n.js";import"./i18n-defaults-Cjp7arcT.js";import"./SegmentedButton-B-E_kZVa.js";import"./ListItemStandard-0gp9kpIG.js";import"./parameters-bundle.css-34zgZIqy.js";function l(e){const o={code:"code",h2:"h2",p:"p",pre:"pre",...x(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:s}),`
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
