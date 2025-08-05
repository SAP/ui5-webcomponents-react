import{j as t,e as n}from"./iframe-CG2rGjbc.js";import{useMDXComponents as x}from"./index-DS69H-n6.js";import{M as d,C as h,a as j,D as i,A as r}from"./blocks-BOXfYYlZ.js";import"./Tag-B3NEGkkI.js";import"./index-BVmbnKNa.js";import{C as f}from"./ControlsWithNote-BFQM5fX0.js";import{D as S}from"./DocsHeader-BGOyORj-.js";import{F as u}from"./CommandsAndQueries-DskZpT92.js";import{S as D}from"./SubcomponentsSection-BVy4lpQe.js";import{C as s,D as m,S as p,F as a,a as c}from"./ViewSettingsDialog.stories-DZTYcwIW.js";import"./preload-helper-Dp1pzeXC.js";import"./information-CUctzDB0.js";import"./sys-enter-2-58dTwXpy.js";import"./alert-xERNdQ9e.js";import"./index-vBa65tZZ.js";import"./index-4ahbKnxX.js";import"./Link-BOSvSmJd.js";import"./copy-Cd5gRkoK.js";import"./copy-Cj_PeOWN.js";import"./GitHub-Mark-C4GRBKUH.js";import"./TableOfContent-DgRpeg8V.js";import"./index-BEeaA3No.js";import"./index-Bm2fVwXT.js";import"./addCustomCSSWithScoping-CQY8oQwD.js";import"./index-B3gloDnF.js";import"./index-DEr8Ja6X.js";import"./index-dno7x-xA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CBxXpI3-.js";import"./InvisibleMessage-C2yLfqUK.js";import"./sort-CCHYho68.js";import"./filter-DHDOumVO.js";import"./i18n-defaults-dyGKyNAh.js";import"./SegmentedButton-CBfx5wl-.js";import"./ListItemStandard-CYmen0Jk.js";import"./parameters-bundle.css-gLosEED4.js";function l(e){const o={code:"code",h2:"h2",p:"p",pre:"pre",...x(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:s}),`
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
