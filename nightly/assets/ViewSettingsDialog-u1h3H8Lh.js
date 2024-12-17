import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as l}from"./index-BxVt_j7t.js";import{ae as x,af as d,ag as h,ai as r,ah as m}from"./index-DQo0pq59.js";import"./index-DK8f7i65.js";import"./index-CcKj7SIX.js";import{C as j}from"./ControlsWithNote-vzcDTukt.js";import{D as f}from"./DocsHeader-BPhQbzJE.js";import{F as S}from"./CommandsAndQueries-COG029Ob.js";import"./index-B7gF9TUu.js";import"./WrappingType-CW8URInd.js";import"./Title-WNL10KUu.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{C as g,D as n,S as p,F as s,a}from"./ViewSettingsDialog.stories-D9jxK8-2.js";import{e}from"./utils-BO5BQN4i.js";import"./iframe-D-Ltjgn6.js";import"../sb-preview/runtime.js";import"./index-CE_NGgsP.js";import"./index-DHaMx3uI.js";import"./index-DrFu-skq.js";import"./withWebComponent-B0663feL.js";import"./utils-BHIgGaqO.js";import"./useIsomorphicLayoutEffect-DbLUS4-D.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./decline-Dufzc9Ae.js";import"./Icon-DBJtwtpU.js";import"./Keys-CAuuEE_3.js";import"./parameters-bundle.css-DlWxkghp.js";import"./i18n-defaults-neJWcM66.js";import"./information-CILnO36f.js";import"./alert-Z1fiX1-e.js";import"./class-map-C6tyMXoZ.js";import"./Button-D9IHaDB-.js";import"./AccessibilityTextsHelper-Beeze-lh.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BP6vP6oY.js";import"./i18n-defaults-B_32hVC3.js";import"./TagDesign-Dou_yO3g.js";import"./index-DFb0YsWo.js";import"./Tag-BUVp9nj2.js";import"./sys-help-2-BiT1oqNK.js";import"./index-nTxbmOyz.js";import"./Popover-msUg67Np.js";import"./PopupsCommon.css-Dj0xrk9H.js";import"./FocusableElements-DTl1isII.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-xhBJDreD.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-uCTHCAWY.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-gaVbNe_i.js";import"./Link-CpBj26Uf.js";import"./chunk-NUUEMKO5-CX77TZbI.js";import"./client-DPlujwLe.js";import"./copy-BrFaHfmM.js";import"./copy-C_CjAe8T.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-D5efYGjp.js";import"./TableOfContent-DCqtbPc-.js";import"./index-DbzBuXFC.js";import"./I18nStore-DX5SeKlm.js";import"./useStylesheet-BtUg4QTx.js";import"./index-CumkkaaF.js";import"./index-D_YacHjR.js";import"./Label-BoojAdgE.js";import"./index-nKNYXUv1.js";import"./index-DdEMrDoq.js";import"./Text-UwjpUK4f.js";import"./addCustomCSSWithScoping-DFGIdwgf.js";import"./index-dDGTlD2i.js";import"./BusyIndicator-12vkJL71.js";import"./index-BW6gfbnW.js";import"./index-WjQUaYT1.js";import"./Avatar-Z-ciJfNd.js";import"./employee-XwVnUoGs.js";import"./Dialog-yekQTytQ.js";import"./ValueState-Bg0UWejw.js";import"./List-UTsWhPBf.js";import"./ItemNavigation-Dt_dQ_rr.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-B9Z5o13N.js";import"./CheckBox-C0P0Pf6G.js";import"./accept-B6Y7z-87.js";import"./slim-arrow-right-CK2xMMRt.js";import"./SegmentedButton-DD1eS9H0.js";import"./filter-DGLvDqqK.js";import"./nav-back-B8KteAhV.js";import"./i18n-defaults-BexabIm7.js";import"./parameters-bundle.css-B6WVlodY.js";import"./main-BwlHOnYP.js";function c(i){const o={code:"code",h2:"h2",p:"p",pre:"pre",...l(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:g}),`
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
