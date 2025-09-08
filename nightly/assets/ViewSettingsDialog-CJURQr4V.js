import{j as t,e as n}from"./iframe-Cmm295l6.js";import{useMDXComponents as x}from"./index-BXOSXmsP.js";import{M as d,C as h,a as j,D as i,A as r}from"./blocks-BannUWtC.js";import"./Tag-Dz2xCnCd.js";import"./index-DNlfqL0I.js";import{C as f}from"./ControlsWithNote-C4kUrEMi.js";import{D as S}from"./DocsHeader-BKf89pXh.js";import{F as u}from"./CommandsAndQueries-BP_0RozZ.js";import{S as D}from"./SubcomponentsSection-BVy4lpQe.js";import{C as s,D as m,S as p,F as a,a as c}from"./ViewSettingsDialog.stories-B2gjMV2F.js";import"./preload-helper-D9Z9MdNV.js";import"./information-CcrqmRhS.js";import"./sys-enter-2-hqDN1aaD.js";import"./alert-CIjWWYk9.js";import"./index-B2P7pH2V.js";import"./index-CFxjX_iC.js";import"./Link-Dxfcpnmp.js";import"./copy-BBJs4OL6.js";import"./copy-D4RoINZh.js";import"./GitHub-Mark-D0DbYkmr.js";import"./TableOfContent-DN8nHa4m.js";import"./index-DjP2_XyX.js";import"./index-Ca8aNZdv.js";import"./addCustomCSSWithScoping-CT21Dj5u.js";import"./index-BCkLQQTq.js";import"./index-DcC0F_LL.js";import"./index-Bv1uLuLp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bxty8qUP.js";import"./query-CzSBusdE.js";import"./InvisibleMessage-BUQae6f9.js";import"./sort-CO8msJeu.js";import"./filter-BqgfgZAq.js";import"./i18n-defaults-BS8OTJAB.js";import"./SegmentedButton-DjidyPv_.js";import"./ListItemStandard-BSk0UJEE.js";import"./parameters-bundle.css-MDhRcvbE.js";function l(e){const o={code:"code",h2:"h2",p:"p",pre:"pre",...x(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:s}),`
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
