import{j as t,e as n}from"./iframe-Dxtd3Za_.js";import{useMDXComponents as x}from"./index-DCsMWBUP.js";import{M as d,C as h,a as j,D as i,A as r}from"./blocks-CGoS-OC2.js";import"./Tag-2V4Q7cMJ.js";import"./index-DFbKywCe.js";import{C as f}from"./ControlsWithNote-3BXdewA3.js";import{D as S}from"./DocsHeader-CO79EmO_.js";import{F as u}from"./CommandsAndQueries-Bz3F9tKI.js";import{S as D}from"./SubcomponentsSection-BVy4lpQe.js";import{C as s,D as m,S as p,F as a,a as c}from"./ViewSettingsDialog.stories-WsW4e4FQ.js";import"./preload-helper-D9Z9MdNV.js";import"./information-DIBbce7d.js";import"./sys-enter-2-G2_64HTd.js";import"./alert-DwCbeozZ.js";import"./index-DCNonR1q.js";import"./index-C_oxkJx9.js";import"./Link-BJCTkcGT.js";import"./copy-B8UVJgM5.js";import"./copy-BvP7Hkk1.js";import"./GitHub-Mark-B89QRxgx.js";import"./TableOfContent-DBHLjhyw.js";import"./index-BLmvSYxU.js";import"./index-BJ_zprMk.js";import"./addCustomCSSWithScoping-DDKOktfB.js";import"./index-Ul1D90OH.js";import"./index-V59EODhb.js";import"./index-Cb1r7zf9.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_3v8Ndp.js";import"./query-CzSBusdE.js";import"./InvisibleMessage-CCKau1XL.js";import"./sort-CKnjP8ys.js";import"./filter-BlXJbmnx.js";import"./i18n-defaults-BS8OTJAB.js";import"./SegmentedButton-CLk2pLzg.js";import"./ListItemStandard-CKQU_WCZ.js";import"./parameters-bundle.css-MDhRcvbE.js";function l(e){const o={code:"code",h2:"h2",p:"p",pre:"pre",...x(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:s}),`
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
