import{j as t}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as l}from"./index-CcnH5Kt0.js";import{ae as x,af as d,ag as h,ah as r,ai as m}from"./index-BRc5q4pE.js";import"./index-B6qjgXRU.js";import"./index-BdoYfwXe.js";import{C as j}from"./ControlsWithNote-Cy8rHk7M.js";import{D as f}from"./DocsHeader-S59uUqb6.js";import{F as S}from"./CommandsAndQueries-BKIVHbB5.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-CAqRFLM1.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{C as g,D as n,S as p,F as s,a}from"./ViewSettingsDialog.stories-DcskvarB.js";import{e}from"./utils-BppN9QAc.js";import"./iframe-D20Cv4bN.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./withWebComponent-BS26LpJo.js";import"./utils-4GUSeNxV.js";import"./useIsomorphicLayoutEffect-BErBnqdY.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BUZJrdsA.js";import"./decline-ChPQ5Vpc.js";import"./Icon-BwGmtu7y.js";import"./Keys-D1SxbTOd.js";import"./parameters-bundle.css-Bga-3Zi8.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-C_Bqjk9j.js";import"./alert-qaECYIyO.js";import"./class-map-CcXho7vk.js";import"./Button-YKCVo3sO.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BJ6YdIbZ.js";import"./i18n-defaults-GANmd4m7.js";import"./TagDesign-Dou_yO3g.js";import"./index-B4AVHU7Z.js";import"./Tag-UOd3_PdA.js";import"./sys-help-2-KG0RzPfQ.js";import"./index-Je_4VAbv.js";import"./Popover-CC4eno7O.js";import"./PopupsCommon.css-D2k_TiiU.js";import"./FocusableElements-DE2dOMez.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CmgjED1E.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-DYOeniYq.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-C7NAfg9X.js";import"./Link-DM1dup6y.js";import"./chunk-NUUEMKO5-DRqsm4mp.js";import"./client-BzooOYO_.js";import"./copy-CLCnF9Ex.js";import"./copy-B8ijgEE_.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-bhM-b_eu.js";import"./index-LJg5O3PD.js";import"./I18nStore-ZvXQBe85.js";import"./useStylesheet-fdPvni4l.js";import"./index-BekckRX4.js";import"./index-DqrLvsQJ.js";import"./Label-CIfQAdSL.js";import"./index-l2PZWEC2.js";import"./index-CFexjE8g.js";import"./addCustomCSSWithScoping-nMrqEq1r.js";import"./index-C6aLG_v0.js";import"./BusyIndicator-DqlHMudg.js";import"./index-DrRRRjPp.js";import"./index-WZkkYmOx.js";import"./Avatar-FwB2Bc3j.js";import"./employee-BnxYOghN.js";import"./Dialog-z-Zd0ubb.js";import"./ValueState-Bg0UWejw.js";import"./List-CFyS7klR.js";import"./ItemNavigation-DY9WPMGj.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-DigGxM0J.js";import"./CheckBox-DIV2F85g.js";import"./accept-DENHAmCe.js";import"./slim-arrow-right-BNXaNlko.js";import"./SegmentedButton-B0445I45.js";import"./filter-NxJXijY4.js";import"./nav-back-1M4SApho.js";import"./i18n-defaults-DycAtGW_.js";import"./parameters-bundle.css-By19-ehE.js";import"./main-C6oD7XT2.js";function c(i){const o={code:"code",h2:"h2",p:"p",pre:"pre",...l(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:g}),`
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
