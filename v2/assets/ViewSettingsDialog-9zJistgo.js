import{j as t,e as n}from"./iframe-DTnEqaXa.js";import{useMDXComponents as x}from"./index-Bzwj8IeJ.js";import{M as d,C as h,a as j,D as i,A as r}from"./blocks-DjoWO0N0.js";import"./Tag-B9YI4L6P.js";import"./index-X9x0GvvK.js";import{C as f}from"./ControlsWithNote-wh0dqaK4.js";import{D as S}from"./DocsHeader-CqbQoEIe.js";import{F as u}from"./CommandsAndQueries-o88EZ4zv.js";import{S as D}from"./SubcomponentsSection-BVy4lpQe.js";import{C as s,D as m,S as p,F as a,a as c}from"./ViewSettingsDialog.stories-DYdOCPY_.js";import"./preload-helper-Dp1pzeXC.js";import"./information-Z43pYR60.js";import"./sys-enter-2-2LeoQRYT.js";import"./alert-no1g3tmv.js";import"./index-Bmfc8Eqw.js";import"./index-CPY0RkYC.js";import"./Link-DjplMcMT.js";import"./copy-C-IiZJgc.js";import"./copy-CVTh1Y4e.js";import"./GitHub-Mark-9U6s1xlG.js";import"./TableOfContent-CnhdJ1_G.js";import"./index-DCbmFI06.js";import"./index-L41gFWOj.js";import"./addCustomCSSWithScoping-Di76Mem5.js";import"./index-BLEhzZcH.js";import"./index-BtOoTda4.js";import"./index-Cbvl8GTm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BvuY_C9E.js";import"./InvisibleMessage--LVGVy97.js";import"./sort-Di7hPu_r.js";import"./filter-2jVwpWUZ.js";import"./i18n-defaults-dyGKyNAh.js";import"./SegmentedButton--brNUxa5.js";import"./ListItemStandard-Z9rWegqM.js";import"./parameters-bundle.css-gLosEED4.js";function l(e){const o={code:"code",h2:"h2",p:"p",pre:"pre",...x(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:s}),`
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
