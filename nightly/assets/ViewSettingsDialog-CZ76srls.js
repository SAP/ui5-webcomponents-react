import{j as t,e as n}from"./iframe-CS0WNVf3.js";import{useMDXComponents as x}from"./index-DDJWQvBk.js";import{M as d,C as h,a as j,D as i,A as r}from"./blocks-CKA1zSBc.js";import"./Tag-BP97hCxl.js";import"./index-DSXhn2lw.js";import{C as f}from"./ControlsWithNote-BQ2uotKo.js";import{D as S}from"./DocsHeader-D11tTFdv.js";import{F as u}from"./CommandsAndQueries-DZ6pwvzq.js";import"./WrappingType-BBpR8qCJ.js";import{S as D}from"./SubcomponentsSection-BVy4lpQe.js";import{C as s,D as m,S as p,F as a,a as c}from"./ViewSettingsDialog.stories-CZYoQq02.js";import"./preload-helper-Dp1pzeXC.js";import"./information-CvdaSHT3.js";import"./sys-enter-2-ySqjHw_c.js";import"./alert-Gh91-OFF.js";import"./index-CvNKNR4d.js";import"./index-BaMTSIaX.js";import"./Link-NB8Z-JgQ.js";import"./copy-JmzkmJ0Q.js";import"./copy-BAUFdAAv.js";import"./GitHub-Mark-7sJAyAvv.js";import"./TableOfContent-CIMB7FlB.js";import"./index-6Qc8M-Ay.js";import"./index-DF926y_l.js";import"./addCustomCSSWithScoping-C76Rlx9D.js";import"./index-DAA990cp.js";import"./index-CSbnywRm.js";import"./index-DDKfF0P0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BSbnBFaN.js";import"./InvisibleMessage-BLaLHaBV.js";import"./sort-B6VpUqIf.js";import"./filter-F6el_Q-P.js";import"./i18n-defaults-dyGKyNAh.js";import"./SegmentedButton-ByiFmvRr.js";import"./ListItemStandard-BH1fH6pr.js";import"./parameters-bundle.css-BcDcM98N.js";function l(e){const o={code:"code",h2:"h2",p:"p",pre:"pre",...x(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:s}),`
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
