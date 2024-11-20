import{j as t}from"./jsx-runtime-D6fbYt3N.js";import{useMDXComponents as l}from"./index-DyCphG7h.js";import{ae as x,af as d,ag as h,ai as r,ah as e}from"./index-OozrRE0z.js";import"./index-DxMbJ7zz.js";import"./index-IFqchKzu.js";import{C as j}from"./ControlsWithNote-C-WbW101.js";import{D as f}from"./DocsHeader-BsFdKmM8.js";import{F as S}from"./CommandsAndQueries-C_UrhdLy.js";import"./index-DysCNOs_.js";import"./WrappingType-CW8URInd.js";import"./Title-CfsRC4A5.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{C as g,D as n,S as p,F as s,a}from"./ViewSettingsDialog.stories-CVKw9zmj.js";import{e as m}from"./utils-ClwSCWMl.js";import"./iframe-CMhLiMAD.js";import"../sb-preview/runtime.js";import"./index-C4cLd1FO.js";import"./index-BcsOxL0D.js";import"./index-DrFu-skq.js";import"./withWebComponent-De1aKRdZ.js";import"./utils-D0KbkLTK.js";import"./useIsomorphicLayoutEffect-m1Y1SyRb.js";import"./slot-_4yKMUwC.js";import"./event-BX8i4Y_x.js";import"./i18n-DEVDpFvK.js";import"./decline-BQlFLB9d.js";import"./Icon-D5-_6Id1.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-R51uC6BG.js";import"./i18n-defaults-neJWcM66.js";import"./information-jop4MMmq.js";import"./alert-DvgF7qhQ.js";import"./class-map-Bnbjx3OQ.js";import"./Button-KJt5TdaB.js";import"./AriaLabelHelper-C5uDZewF.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BtcFvs45.js";import"./i18n-defaults-CMHHS2wK.js";import"./TagDesign-Dou_yO3g.js";import"./index-Bt6HV_U8.js";import"./Tag-MITF22Wo.js";import"./sys-help-2-dTYFqJDl.js";import"./index-RaHuZLhN.js";import"./Popover-CjT0D3fA.js";import"./PopupsCommon.css-Bz-EF7PV.js";import"./FocusableElements-CRBMDNv2.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BehhMu6Y.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-D6VK90q7.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-ARMOpZ_f.js";import"./Link-Dgxh_lXY.js";import"./chunk-NUUEMKO5-Dwxw6vgG.js";import"./client-CqEfiX9M.js";import"./copy-DbIR3NTj.js";import"./copy-DL61w25d.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DLtQKbjK.js";import"./TableOfContent-DRym89KV.js";import"./index-C6X81IyJ.js";import"./I18nStore-QcXEI0Jp.js";import"./useStylesheet-9EPR2ucC.js";import"./index-c-ui4WSs.js";import"./index-D2qI6nMR.js";import"./Label-VsV_UpQE.js";import"./index-BwHAVSFf.js";import"./index-ZkmNu-JV.js";import"./addCustomCSSWithScoping-BPWKraku.js";import"./index-CIk6P_fC.js";import"./BusyIndicator-DW1-q5Ls.js";import"./index-CAmAWMmr.js";import"./index-D8X14Ybw.js";import"./Avatar-Kl9ImEjS.js";import"./employee-BzTDAMVi.js";import"./Dialog-DUHeHLP-.js";import"./ValueState-Bg0UWejw.js";import"./List-Mg2AKiCN.js";import"./ItemNavigation-Dk_Ce4oG.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-B90yF_Xf.js";import"./CheckBox-C-QwVRXb.js";import"./accept-PVFuYmDa.js";import"./slim-arrow-right-CU2OuNk9.js";import"./SegmentedButton-B3KHcSjK.js";import"./filter-DcY58Nmf.js";import"./nav-back-KhphexEb.js";import"./i18n-defaults-Bh0NvB0l.js";import"./parameters-bundle.css-B09Df3Yy.js";import"./main-Dcm2jhNK.js";function c(i){const o={code:"code",h2:"h2",p:"p",pre:"pre",...l(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:g}),`
`,t.jsx(f,{since:"0.20.0"}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(d,{of:n}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(j,{of:n}),`
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
`,t.jsx(h,{children:u}),`
`,t.jsx(o.h2,{id:"sortitem",children:"SortItem"}),`
`,t.jsx(r,{of:p}),`
`,t.jsx(e,{exclude:m,of:p}),`
`,t.jsx(o.h2,{id:"filteritem",children:"FilterItem"}),`
`,t.jsx(r,{of:s}),`
`,t.jsx(e,{exclude:m,of:s}),`
`,t.jsx(o.h2,{id:"filteritemoption",children:"FilterItemOption"}),`
`,t.jsx(r,{of:a}),`
`,t.jsx(e,{exclude:m,of:a}),`
`,t.jsx(S,{})]})}function no(i={}){const{wrapper:o}={...l(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(c,{...i})}):c(i)}export{no as default};
