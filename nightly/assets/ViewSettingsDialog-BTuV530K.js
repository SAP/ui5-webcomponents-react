import{j as t}from"./useIsomorphicLayoutEffect-DOdM5Kf8.js";import{useMDXComponents as l}from"./index-BrB9znxi.js";import{ae as x,af as d,ag as h,ah as r,ai as m}from"./index-CZlzwiku.js";import"./index-UfcKm4n3.js";import{C as j}from"./ControlsWithNote-CoBn-mUI.js";import{D as f}from"./DocsHeader-Dj_FC2hR.js";import{F as S}from"./CommandsAndQueries-CsMBvn1G.js";import"./index-CMKoANNR.js";import"./WrappingType-CW8URInd.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{C as g,D as n,S as p,F as s,a}from"./ViewSettingsDialog.stories-DqiKky7O.js";import{e}from"./utils-BGO-Vq55.js";import"./iframe-B502sJNi.js";import"../sb-preview/runtime.js";import"./index-CJugYjqS.js";import"./_baseUniq-qZQRvdR-.js";import"./_overArg-Mt7ZKpko.js";import"./_baseAssignValue-680W1HJy.js";import"./_getPrototype-CvhAe9S0.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./withWebComponent-Bvd6GsxT.js";import"./utils-B91Jjtng.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-DyvSagx7.js";import"./decline-DI0qcVtv.js";import"./Icon-iJ5XkFd9.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-BJMHgp7g.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CEQaAj6E.js";import"./information-B954FDjj.js";import"./alert-XemOvmut.js";import"./class-map-izHjq-7_.js";import"./Button-DFUJoV2f.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-CcfWlpG-.js";import"./TagDesign-Dou_yO3g.js";import"./index-BSuksK_k.js";import"./Tag-BfVSSKMv.js";import"./sys-help-2-DL9x_pH7.js";import"./index-IG76PqK2.js";import"./Popover-BQ0u1cZY.js";import"./PopupsCommon.css-DYqWK7NT.js";import"./getEffectiveScrollbarStyle-B3XuleRv.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DLtaLMaj.js";import"./MediaRange-Bnzt26Xb.js";import"./Title-CLsYVLHg.js";import"./style-map-CJSYxNSP.js";import"./BrowserScrollbar.css-D0ty1KEr.js";import"./index-BHxJBuqK.js";import"./Link-DSM5xQ_2.js";import"./chunk-HLWAVYOI-BHQE9SOF.js";import"./client-DpDvupH-.js";import"./copy-0vVSQk-U.js";import"./copy-BHpcHI8d.js";import"./index-DNwR1bnO.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BdPJGR6W.js";import"./index-Ch5aExGr.js";import"./I18nStore-qPt-PKca.js";import"./GitHub-Mark-DCDQJZl8.js";import"./TableOfContent-DYSF1A7E.js";import"./index-Cz64CBrc.js";import"./Label-CuT9KatJ.js";import"./index-nm84gW6I.js";import"./index-BFHEdEFO.js";import"./addCustomCSSWithScoping-BIONmqoK.js";import"./index-D6jAMfNt.js";import"./BusyIndicator-Cx-S6BZJ.js";import"./index-DpfMcmSx.js";import"./index-CIT2LMF7.js";import"./Avatar-DBJmGUf1.js";import"./employee-CB0X-WXT.js";import"./Dialog-ChhXL7p5.js";import"./ValueState-Bg0UWejw.js";import"./List-CH8w2THx.js";import"./ItemNavigation-vTMdqqKa.js";import"./isElementInView-CjfjvN8v.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-Chceev8u.js";import"./CheckBox-B5ighiuc.js";import"./accept-0udhcfey.js";import"./slim-arrow-right-C_o53qwA.js";import"./SegmentedButton-ByKgmC_M.js";import"./filter-B89CX3pk.js";import"./nav-back-DJ5iqFTQ.js";import"./i18n-defaults-CAQ7G2mL.js";import"./parameters-bundle.css-DUfIp--Q.js";import"./main-BPTHlokf.js";function c(i){const o={code:"code",h2:"h2",p:"p",pre:"pre",...l(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:g}),`
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
