import{j as t}from"./useIsomorphicLayoutEffect-Dhma_bjk.js";import{useMDXComponents as l}from"./index-CcnH5Kt0.js";import{ae as x,af as d,ag as h,ah as r,ai as m}from"./index-V0kEuOCP.js";import"./index-BXDvD5Ag.js";import"./index-WPIr3p3t.js";import{C as j}from"./ControlsWithNote-BabIICrk.js";import{D as f}from"./DocsHeader-Bk0ux5vB.js";import{F as S}from"./CommandsAndQueries-RwJuGyAq.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-sU8Eh0Pe.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{C as g,D as n,S as p,F as s,a}from"./ViewSettingsDialog.stories-BW4dCWHf.js";import{e}from"./utils-tcQFZWIU.js";import"./iframe-DguqKm-o.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-DGDOfdbw.js";import"./_getPrototype-B0L0C3AT.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";import"./withWebComponent-YgbOdVTg.js";import"./utils-C_Hfx9mc.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CRmnyxU0.js";import"./decline-Di3Z0MBP.js";import"./Icon-DDA-V63S.js";import"./Keys-D1SxbTOd.js";import"./parameters-bundle.css-Bga-3Zi8.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-ExggBqKR.js";import"./alert-nKQG-ySE.js";import"./class-map-D12-v36h.js";import"./Button-CkiVa5Iu.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BUwKP62u.js";import"./i18n-defaults-PZPXNaBc.js";import"./TagDesign-Dou_yO3g.js";import"./index-Cdmm4y_7.js";import"./Tag-gh5rEq7q.js";import"./sys-help-2-Dg0HLnT_.js";import"./index-C4dnCzjA.js";import"./Popover-COhsAIU7.js";import"./PopupsCommon.css-U0xQpWGd.js";import"./FocusableElements-BostZfMq.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-D085ltoF.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-HUTC8E5D.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-Dz1nSNRn.js";import"./Link-V-qm0Bxn.js";import"./chunk-HLWAVYOI-ZdlNnN-C.js";import"./client-BZNFO7bv.js";import"./copy-C5P79WCS.js";import"./copy-BaVgvVlS.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-CnYostSV.js";import"./TableOfContent-J0xBpY2P.js";import"./index-DXA755qH.js";import"./I18nStore-5-32Wrgv.js";import"./useStylesheet-DcbwKAeb.js";import"./index-3WD7if5i.js";import"./index-DYtJKmyC.js";import"./Label-CPv3jFl2.js";import"./index-gHGG7lEc.js";import"./index-DIFmT50V.js";import"./addCustomCSSWithScoping-kPHcp3gn.js";import"./index-GP3fnmag.js";import"./BusyIndicator-DuGIcogQ.js";import"./index-CA4K8WmR.js";import"./index-CTeNKttK.js";import"./Avatar-DOs7P2bF.js";import"./employee-uQoQn_HB.js";import"./Dialog-_QHdeRl1.js";import"./ValueState-Bg0UWejw.js";import"./List-ByU11J9R.js";import"./ItemNavigation-oOANHwJF.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-Ccfd5U4o.js";import"./CheckBox-DXsnNZgR.js";import"./accept-BfX4whS3.js";import"./slim-arrow-right-3K9vkBr-.js";import"./SegmentedButton-BZIzsXYU.js";import"./filter-BooRG1LA.js";import"./nav-back-CZQY5upD.js";import"./i18n-defaults-CN4zZShS.js";import"./parameters-bundle.css-By19-ehE.js";import"./main-C6oD7XT2.js";function c(i){const o={code:"code",h2:"h2",p:"p",pre:"pre",...l(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:g}),`
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
`,t.jsx(S,{})]})}function so(i={}){const{wrapper:o}={...l(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(c,{...i})}):c(i)}export{so as default};
