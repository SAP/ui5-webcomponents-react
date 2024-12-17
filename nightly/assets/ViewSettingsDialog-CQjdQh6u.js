import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as l}from"./index-BxVt_j7t.js";import{ae as x,af as d,ag as h,ai as r,ah as m}from"./index-DdbwCTLw.js";import"./index-C009Ii_l.js";import"./index-Bow9BIX9.js";import{C as j}from"./ControlsWithNote-BVnWQJOl.js";import{D as f}from"./DocsHeader-CzAaHNEF.js";import{F as S}from"./CommandsAndQueries-BxBgtGHz.js";import"./index-B7gF9TUu.js";import"./WrappingType-CW8URInd.js";import"./Title-1rDkpSXf.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{C as g,D as n,S as p,F as s,a}from"./ViewSettingsDialog.stories-bvm7De7Y.js";import{e}from"./utils-D94y2lni.js";import"./iframe-0sJExvZ3.js";import"../sb-preview/runtime.js";import"./index-CE_NGgsP.js";import"./index-DHaMx3uI.js";import"./index-DrFu-skq.js";import"./withWebComponent-CEvNJu7C.js";import"./utils-BPMdnTU-.js";import"./useIsomorphicLayoutEffect-BE7Iif4x.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./decline-D0Sq_J--.js";import"./Icon-Cf72TZgw.js";import"./Keys-CAuuEE_3.js";import"./parameters-bundle.css-DY1ryZJt.js";import"./i18n-defaults-neJWcM66.js";import"./information-Dy9R6tRZ.js";import"./alert-C1M-4Vvc.js";import"./class-map-CFjQlWtw.js";import"./Button-C6xYvRbu.js";import"./AccessibilityTextsHelper-Beeze-lh.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-XZ46U0Ql.js";import"./i18n-defaults-DteWAmDn.js";import"./TagDesign-Dou_yO3g.js";import"./index-EUzft9Z_.js";import"./Tag-xKaXZN0c.js";import"./sys-help-2-C1sMmkr1.js";import"./index-ClFOKzxg.js";import"./Popover-B0GOUfMQ.js";import"./PopupsCommon.css-BerD7w9b.js";import"./FocusableElements-DA0BaiCm.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CJRte1-9.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-g8foa4rA.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-NbVlvM4j.js";import"./Link-2s4hefKa.js";import"./chunk-NUUEMKO5-vR-82OvU.js";import"./client-DPlujwLe.js";import"./copy-BJtGExJZ.js";import"./copy-C7Fphd8b.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-D5efYGjp.js";import"./TableOfContent-DCqtbPc-.js";import"./index-CPQJOE2V.js";import"./I18nStore-DnWKAes0.js";import"./useStylesheet-DVp2Y5Uf.js";import"./index-vaKWw58t.js";import"./index-CUd5UQ0Z.js";import"./Label-S_BgfXUY.js";import"./index-Yz8_Wo9H.js";import"./index-D8L7QTA6.js";import"./Text-CTrlD69_.js";import"./addCustomCSSWithScoping-B_vnxDyr.js";import"./index-BBLdTHsH.js";import"./BusyIndicator-CTFEFSn6.js";import"./index-7rUfxUBv.js";import"./index-D6lFKeEV.js";import"./Avatar-DMTAeY6x.js";import"./employee-B31iqtd8.js";import"./Dialog-7o0SsYjd.js";import"./ValueState-Bg0UWejw.js";import"./List-BeOyiQ4g.js";import"./ItemNavigation-DWbUprUI.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-2y34RTmJ.js";import"./CheckBox-BN3CQ6El.js";import"./accept-W9Dxcudv.js";import"./slim-arrow-right-BHycGIJI.js";import"./SegmentedButton-DXn0Jqs7.js";import"./filter-BUVx-umy.js";import"./nav-back-BPVbPYHZ.js";import"./i18n-defaults-BexabIm7.js";import"./parameters-bundle.css-DdA521te.js";import"./main-BwlHOnYP.js";function c(i){const o={code:"code",h2:"h2",p:"p",pre:"pre",...l(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:g}),`
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
