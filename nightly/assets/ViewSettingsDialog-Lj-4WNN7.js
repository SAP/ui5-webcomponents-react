import{j as t,e as n}from"./iframe-D3WSfxnn.js";import{useMDXComponents as x}from"./index-INJaxUMc.js";import{M as d,C as h,a as j,D as i,A as r}from"./blocks-BRQLHU1o.js";import"./Tag-tOepiG2u.js";import"./index-BVrxhT_e.js";import{C as f}from"./ControlsWithNote-bBb_VS4m.js";import{D as S}from"./DocsHeader-i6mSv8qc.js";import{F as u}from"./CommandsAndQueries-D0ehjJEo.js";import{S as D}from"./SubcomponentsSection-BVy4lpQe.js";import{C as s,D as m,S as p,F as a,a as c}from"./ViewSettingsDialog.stories-Dt83jXpm.js";import"./preload-helper-D9Z9MdNV.js";import"./i18n-DSpjDgSK.js";import"./information-DM4h4iXJ.js";import"./sys-enter-2-U9KscTjZ.js";import"./alert-CfwYPci7.js";import"./index-BE0SODKX.js";import"./index-5wzk8jTN.js";import"./Link-C5psU7y5.js";import"./copy-CY1Urzho.js";import"./copy-B0_WxO9i.js";import"./GitHub-Mark-B9By78RC.js";import"./TableOfContent-D7UH4733.js";import"./index-C6MhXGTg.js";import"./index-RQ3mlM3E.js";import"./addCustomCSSWithScoping-CLwDIOC8.js";import"./index-BnnkB59L.js";import"./index-BSvrPTPm.js";import"./index-BedbyZ7Q.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-kG1BPZBl.js";import"./InvisibleMessage-CxuvqbmW.js";import"./sort-Cj2cT7To.js";import"./filter-BrvNwjX5.js";import"./i18n-defaults-Cjp7arcT.js";import"./SegmentedButton-C6mK86yp.js";import"./ListItemStandard-BCfXaiqR.js";import"./parameters-bundle.css-34zgZIqy.js";function l(e){const o={code:"code",h2:"h2",p:"p",pre:"pre",...x(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:s}),`
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
