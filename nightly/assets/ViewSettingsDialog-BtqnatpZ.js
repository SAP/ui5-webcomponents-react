import{j as t}from"./jsx-runtime-D6fbYt3N.js";import{useMDXComponents as l}from"./index-DyCphG7h.js";import{ae as x,af as d,ag as h,ai as r,ah as m}from"./index--Xvi5kZl.js";import"./index-Dv5mXzg4.js";import"./index-BBFYUVS5.js";import{C as j}from"./ControlsWithNote-CPIG4HSy.js";import{D as f}from"./DocsHeader-CPTL6u1w.js";import{F as S}from"./CommandsAndQueries-BPlw3hqL.js";import"./index-DysCNOs_.js";import"./WrappingType-CW8URInd.js";import"./Title-B_OApkG5.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{C as g,D as n,S as p,F as s,a}from"./ViewSettingsDialog.stories-CsYycsXx.js";import{e}from"./utils-BI_O9HAT.js";import"./iframe-CPkXV8SA.js";import"../sb-preview/runtime.js";import"./index-C4cLd1FO.js";import"./index-BcsOxL0D.js";import"./index-DrFu-skq.js";import"./withWebComponent-D2290JWW.js";import"./utils-rQ0RHFcC.js";import"./useIsomorphicLayoutEffect-UXkgNLQC.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./decline-eE5kkR_d.js";import"./Icon-DNC_Q8W5.js";import"./Keys-CAuuEE_3.js";import"./parameters-bundle.css-DlWxkghp.js";import"./i18n-defaults-neJWcM66.js";import"./information-DiNgtIoE.js";import"./alert-C1PxT_zH.js";import"./class-map-BHSYgJ9u.js";import"./Button-B25Pr19o.js";import"./AccessibilityTextsHelper-Beeze-lh.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-Cvj6MDOu.js";import"./i18n-defaults-B_32hVC3.js";import"./TagDesign-Dou_yO3g.js";import"./index-D0V_jfbX.js";import"./Tag-Db0_Pjzi.js";import"./sys-help-2-CxYMJcq0.js";import"./index-x-kKtoec.js";import"./Popover-D4qFMFR_.js";import"./PopupsCommon.css-Ds9l5hmK.js";import"./FocusableElements-BUUEY9i6.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-h_-KGn42.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CKH5i8-O.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-BihYjSJH.js";import"./Link-Bfcngofg.js";import"./chunk-NUUEMKO5-BeW8aL1W.js";import"./client-CqEfiX9M.js";import"./copy-B6jpU8Sl.js";import"./copy-ClT0iCqi.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DLtQKbjK.js";import"./TableOfContent-DRym89KV.js";import"./index-BDxnXcrH.js";import"./I18nStore-D-72hezK.js";import"./useStylesheet-DzoyRzuT.js";import"./index-B9FFfOq2.js";import"./index-CaG1LRe9.js";import"./Label-DljH_Hma.js";import"./index-DczEHKsk.js";import"./index-B56Kl_es.js";import"./Text-iUXAjx9E.js";import"./addCustomCSSWithScoping-DWJN-AXE.js";import"./index-C7mFJBZY.js";import"./BusyIndicator-DeXFd7cw.js";import"./index-ByfP8321.js";import"./index-VGStP4CR.js";import"./Avatar-CSh84RvD.js";import"./employee-kfgjySdt.js";import"./Dialog-DoCpeBDB.js";import"./ValueState-Bg0UWejw.js";import"./List-iVJpcOGI.js";import"./ItemNavigation-BFACp1PV.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-C2mR3o4F.js";import"./CheckBox-DyUotHW-.js";import"./accept-dLMNjkw8.js";import"./slim-arrow-right-BHNRKwMo.js";import"./SegmentedButton-GUgpkWw6.js";import"./filter-CBROqNwi.js";import"./nav-back-B2EIXKhq.js";import"./i18n-defaults-BexabIm7.js";import"./parameters-bundle.css-B6WVlodY.js";import"./main-BwlHOnYP.js";function c(i){const o={code:"code",h2:"h2",p:"p",pre:"pre",...l(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:g}),`
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
`,t.jsx(S,{})]})}function po(i={}){const{wrapper:o}={...l(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(c,{...i})}):c(i)}export{po as default};
