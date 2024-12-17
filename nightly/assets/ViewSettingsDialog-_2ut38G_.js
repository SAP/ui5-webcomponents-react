import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as l}from"./index-BxVt_j7t.js";import{ae as x,af as d,ag as h,ai as r,ah as m}from"./index-UBRkkpXl.js";import"./index-BirWx2Ta.js";import"./index-DXOOLOQb.js";import{C as j}from"./ControlsWithNote-B7K3vjO6.js";import{D as f}from"./DocsHeader-BXzjx4cz.js";import{F as S}from"./CommandsAndQueries-DMonXJ-C.js";import"./index-B7gF9TUu.js";import"./WrappingType-CW8URInd.js";import"./Title-1rDkpSXf.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{C as g,D as n,S as p,F as s,a}from"./ViewSettingsDialog.stories-BMa9er2f.js";import{e}from"./utils-CU_7gSfg.js";import"./iframe-BpqSco-j.js";import"../sb-preview/runtime.js";import"./index-CE_NGgsP.js";import"./index-DHaMx3uI.js";import"./index-DrFu-skq.js";import"./withWebComponent-CEvNJu7C.js";import"./utils-BPMdnTU-.js";import"./useIsomorphicLayoutEffect-BE7Iif4x.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./decline-D0Sq_J--.js";import"./Icon-Cf72TZgw.js";import"./Keys-CAuuEE_3.js";import"./parameters-bundle.css-DY1ryZJt.js";import"./i18n-defaults-neJWcM66.js";import"./information-Dy9R6tRZ.js";import"./alert-C1M-4Vvc.js";import"./class-map-CFjQlWtw.js";import"./Button-BBQGaetD.js";import"./AccessibilityTextsHelper-Beeze-lh.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-XZ46U0Ql.js";import"./i18n-defaults-B_32hVC3.js";import"./TagDesign-Dou_yO3g.js";import"./index-DtyrVPnv.js";import"./Tag-C9_PmbA_.js";import"./sys-help-2-C1sMmkr1.js";import"./index-BIKVfRm5.js";import"./Popover-B0GOUfMQ.js";import"./PopupsCommon.css-BerD7w9b.js";import"./FocusableElements-DA0BaiCm.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CJRte1-9.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-g8foa4rA.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-Dn_R1yFr.js";import"./Link-D1X4tUVM.js";import"./chunk-NUUEMKO5-3oFdRnTJ.js";import"./client-DPlujwLe.js";import"./copy-BJtGExJZ.js";import"./copy-C7Fphd8b.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-D5efYGjp.js";import"./TableOfContent-DCqtbPc-.js";import"./index-DF15tj6Y.js";import"./I18nStore-DnWKAes0.js";import"./useStylesheet-DVp2Y5Uf.js";import"./index-vaKWw58t.js";import"./index-D87yHkJZ.js";import"./Label-VY9fyDaj.js";import"./index-CdlG1iEF.js";import"./index-CGNOavxc.js";import"./Text-jguppuUa.js";import"./addCustomCSSWithScoping-B_vnxDyr.js";import"./index-B6mTyuQV.js";import"./BusyIndicator-B8hbdNmF.js";import"./index-C-4O2gce.js";import"./index-WfJCmgcc.js";import"./Avatar-pB0pR3L5.js";import"./employee-B31iqtd8.js";import"./Dialog-DB-xi5-R.js";import"./ValueState-Bg0UWejw.js";import"./List-DZCgvSCU.js";import"./ItemNavigation-DWbUprUI.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-Dfd5aYD9.js";import"./CheckBox-CDtSoek2.js";import"./accept-W9Dxcudv.js";import"./slim-arrow-right-BHycGIJI.js";import"./SegmentedButton-gUC9J4cL.js";import"./filter-BUVx-umy.js";import"./nav-back-BPVbPYHZ.js";import"./i18n-defaults-BexabIm7.js";import"./parameters-bundle.css-DdA521te.js";import"./main-BwlHOnYP.js";function c(i){const o={code:"code",h2:"h2",p:"p",pre:"pre",...l(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:g}),`
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
