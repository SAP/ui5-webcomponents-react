import{j as t,e as n}from"./iframe-FFY2S6YG.js";import{useMDXComponents as x}from"./index-BzZglwT-.js";import{M as d,C as h,a as j,D as i,A as r}from"./blocks-tMTQEG0b.js";import"./Tag-CY0dYkIx.js";import"./index-CR-wXzPk.js";import{C as f}from"./ControlsWithNote-CnMrq5GR.js";import{D as S}from"./DocsHeader-DH5jxN5k.js";import{F as u}from"./CommandsAndQueries-CRs7a5Er.js";import{S as D}from"./SubcomponentsSection-BVy4lpQe.js";import{C as s,D as m,S as p,F as a,a as c}from"./ViewSettingsDialog.stories-DDG_CFdy.js";import"./preload-helper-D9Z9MdNV.js";import"./information-bHzg5lJa.js";import"./sys-enter-2-DLgVYDfp.js";import"./alert-DTO9To2T.js";import"./index-BpfUe8Vy.js";import"./index-CYPt-1NW.js";import"./Link-ilnMyEmJ.js";import"./copy-BqF-CdnZ.js";import"./copy-DuPWkMaa.js";import"./GitHub-Mark-DKEFA1iy.js";import"./TableOfContent-t0yjNoj5.js";import"./index-BK6LUJYp.js";import"./index-aRemyO01.js";import"./addCustomCSSWithScoping-L7uLJS1K.js";import"./index-BvjHl6jR.js";import"./index-Cer5_OSt.js";import"./index-dBDK7i7w.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4hY5EkXL.js";import"./InvisibleMessage-CbKgbx5O.js";import"./sort-DfJhIv0X.js";import"./filter-uMu8AkhM.js";import"./i18n-defaults-Cjp7arcT.js";import"./SegmentedButton-BnS-MFCM.js";import"./ListItemStandard-sXxgGRTN.js";import"./parameters-bundle.css-34zgZIqy.js";function l(e){const o={code:"code",h2:"h2",p:"p",pre:"pre",...x(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:s}),`
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
