import{j as t}from"./useIsomorphicLayoutEffect-7J8kFyWS.js";import{useMDXComponents as l}from"./index-CcnH5Kt0.js";import{ae as x,af as d,ag as h,ah as r,ai as m}from"./index-DLTEi3_F.js";import"./index-C0gbcJ1P.js";import{C as j}from"./ControlsWithNote-Bj4pS2r6.js";import{D as f}from"./DocsHeader-ea_mMjjy.js";import{F as S}from"./CommandsAndQueries-BUghogff.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{C as g,D as n,S as p,F as s,a}from"./ViewSettingsDialog.stories-hh4_Xish.js";import{e}from"./utils-BudshB_u.js";import"./iframe-nYZ7X8iE.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-BBslp21L.js";import"./_overArg-Der2MB70.js";import"./_baseAssignValue-PZ39NPQP.js";import"./_getPrototype-DY0Wt4dR.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./withWebComponent-GNT2PXey.js";import"./utils-CcgiHsei.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BqO_ndMU.js";import"./decline-Bc8xWa4t.js";import"./Icon-BhzwmwWz.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-B9dCEi48.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CEQaAj6E.js";import"./information-CO9BdrhZ.js";import"./alert-DWttAQXl.js";import"./class-map-_G2Y84x0.js";import"./Button-Cvy14OjO.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-BaleIpCT.js";import"./TagDesign-Dou_yO3g.js";import"./index-Ccf0PhA3.js";import"./Tag-Dihe5M3w.js";import"./sys-help-2-CUJdqIsS.js";import"./index-DPmud4Gc.js";import"./Popover-BcjI4r72.js";import"./PopupsCommon.css-DE8Wza_j.js";import"./getEffectiveScrollbarStyle-UFcPsH0e.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-XK3zSnEF.js";import"./MediaRange-Bnzt26Xb.js";import"./Title-B2Pwek_1.js";import"./style-map-DYn2sBEk.js";import"./BrowserScrollbar.css-LN7L1p37.js";import"./index-BUs6Zh1-.js";import"./Link-YAV9tZDK.js";import"./chunk-HLWAVYOI-DtN6HVzD.js";import"./client-BZNFO7bv.js";import"./copy-DLqHYH0g.js";import"./copy-BGQQIC81.js";import"./index-CLe8_13Z.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BgRQTyXM.js";import"./index-DCYhXUzl.js";import"./I18nStore-CGmCejYo.js";import"./GitHub-Mark-CQnSG1yZ.js";import"./TableOfContent-B6vxzEs5.js";import"./index-Cn8P5wWd.js";import"./Label-emsTVYba.js";import"./index-kPamIMU2.js";import"./index-DZRFMbC7.js";import"./addCustomCSSWithScoping-BR-0f_u5.js";import"./index-Hx7nk4Dr.js";import"./BusyIndicator-BRwQ1wd3.js";import"./index-Cotdq9kj.js";import"./index-CYyWICrk.js";import"./Avatar-BNYvS_OM.js";import"./employee-DAkvclYj.js";import"./Dialog-DhoJQnEE.js";import"./ValueState-Bg0UWejw.js";import"./List-CfQVFNo9.js";import"./ItemNavigation-BwSWEgwf.js";import"./isElementInView-CjfjvN8v.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-BV3cTl0-.js";import"./CheckBox-BTLn07Vz.js";import"./accept-B-hwLd1L.js";import"./slim-arrow-right-Dx8ng0oy.js";import"./SegmentedButton-DHRmKwFH.js";import"./filter-CN4CrVZK.js";import"./nav-back-DhkmKZG9.js";import"./i18n-defaults-BMYIvm-p.js";import"./parameters-bundle.css-DUfIp--Q.js";import"./main-BPTHlokf.js";function c(i){const o={code:"code",h2:"h2",p:"p",pre:"pre",...l(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:g}),`
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
`,t.jsx(m,{exclude:e,of:p}),`
`,t.jsx(o.h2,{id:"filteritem",children:"FilterItem"}),`
`,t.jsx(r,{of:s}),`
`,t.jsx(m,{exclude:e,of:s}),`
`,t.jsx(o.h2,{id:"filteritemoption",children:"FilterItemOption"}),`
`,t.jsx(r,{of:a}),`
`,t.jsx(m,{exclude:e,of:a}),`
`,t.jsx(S,{})]})}function ao(i={}){const{wrapper:o}={...l(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(c,{...i})}):c(i)}export{ao as default};
