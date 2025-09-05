import{j as t,e as n}from"./iframe-Dh5R3sl2.js";import{useMDXComponents as x}from"./index-D0kyY75e.js";import{M as d,C as h,a as j,D as i,A as r}from"./blocks-IuY-WHWo.js";import"./Tag-lLVMTbba.js";import"./index-DuupinLA.js";import{C as f}from"./ControlsWithNote-CkzOSnbR.js";import{D as S}from"./DocsHeader-C10mQrqO.js";import{F as u}from"./CommandsAndQueries-YFNvLEil.js";import{S as D}from"./SubcomponentsSection-BVy4lpQe.js";import{C as s,D as m,S as p,F as a,a as c}from"./ViewSettingsDialog.stories-Ciu5_sLh.js";import"./preload-helper-D9Z9MdNV.js";import"./i18n-DCXZOGva.js";import"./information-1k13pukw.js";import"./sys-enter-2-Bg-xb7Sg.js";import"./alert-D22kL76Q.js";import"./index-jqGKriQv.js";import"./index-B_8MBugC.js";import"./Link-DL-0s2QE.js";import"./copy-DtvrOkiW.js";import"./copy-DlGd5HR3.js";import"./GitHub-Mark-TQJ1TPXd.js";import"./TableOfContent-DG2LFSrm.js";import"./index-yFvmPqI1.js";import"./index-C6B4Jvhh.js";import"./addCustomCSSWithScoping-BFt5ScaE.js";import"./index-CiXXffOm.js";import"./index-BasyJdtx.js";import"./index-U9nJPHWS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ck5sFlQM.js";import"./query-CzSBusdE.js";import"./InvisibleMessage-CqVAFS8W.js";import"./sort-CXzb-R9_.js";import"./filter-DYih4vHX.js";import"./i18n-defaults-BS8OTJAB.js";import"./SegmentedButton-BBntDzPz.js";import"./ListItemStandard-BXUKgIyV.js";import"./parameters-bundle.css-MDhRcvbE.js";function l(e){const o={code:"code",h2:"h2",p:"p",pre:"pre",...x(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:s}),`
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
`,t.jsx(u,{})]})}function it(e={}){const{wrapper:o}={...x(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(l,{...e})}):l(e)}export{it as default};
