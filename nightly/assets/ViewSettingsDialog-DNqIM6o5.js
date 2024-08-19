import{j as t}from"./useIsomorphicLayoutEffect-DOdM5Kf8.js";import{useMDXComponents as l}from"./index-BrB9znxi.js";import{ae as x,af as d,ag as h,ah as r,ai as m}from"./index-CCCmMs9w.js";import"./index-Cs3iSmon.js";import{C as j}from"./ControlsWithNote-dV3ZVMUA.js";import{D as f}from"./DocsHeader-DZcg40Yt.js";import{F as S}from"./CommandsAndQueries-BZ1jUYqF.js";import"./index-CMKoANNR.js";import"./WrappingType-CW8URInd.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{C as g,D as n,S as p,F as s,a}from"./ViewSettingsDialog.stories-DeXUjc9C.js";import{e}from"./utils-BmMAV2DN.js";import"./iframe-D4nOB_re.js";import"../sb-preview/runtime.js";import"./index-CJugYjqS.js";import"./_baseUniq-qZQRvdR-.js";import"./_overArg-Mt7ZKpko.js";import"./_baseAssignValue-680W1HJy.js";import"./_getPrototype-CvhAe9S0.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./withWebComponent-BbgN5sxI.js";import"./utils-B91Jjtng.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CwTDKhhX.js";import"./decline-CRs0CuFn.js";import"./Icon-ClAYWRjo.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-BJMHgp7g.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CEQaAj6E.js";import"./information-DxOUV61z.js";import"./alert-QN-C0-di.js";import"./class-map-DWnotN9Q.js";import"./Button-cuQy5RCN.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-jWmICHmQ.js";import"./TagDesign-Dou_yO3g.js";import"./index-i0kV4CdX.js";import"./Tag-DV5SP9Oh.js";import"./sys-help-2-Cu5M0nic.js";import"./index-BUWgkKs7.js";import"./Popover-CNg3OGLR.js";import"./PopupsCommon.css-F2oSnJih.js";import"./getEffectiveScrollbarStyle-BM2MSN9M.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DghOwUYf.js";import"./MediaRange-Bnzt26Xb.js";import"./Title-RCwOVsWq.js";import"./style-map-D73I43XI.js";import"./BrowserScrollbar.css-CNIKbe81.js";import"./index-C_6suU6y.js";import"./Link-DDy4Rfx-.js";import"./chunk-HLWAVYOI-C-pslaxs.js";import"./client-DpDvupH-.js";import"./copy-DTi-Y5PU.js";import"./copy-BYxOf-QH.js";import"./index-DNwR1bnO.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BdPJGR6W.js";import"./index-CGvbx4PR.js";import"./I18nStore-3tee64za.js";import"./GitHub-Mark-DCDQJZl8.js";import"./TableOfContent-DYSF1A7E.js";import"./index-CQUfU_qV.js";import"./Label-B16HW9k1.js";import"./index-DYdngNaX.js";import"./index-B-IrwayZ.js";import"./addCustomCSSWithScoping-CgCJVuIw.js";import"./index-BmKO-q3U.js";import"./BusyIndicator-DYwg6ta4.js";import"./index-DvqQRpoZ.js";import"./index-BW4f9_z6.js";import"./Avatar-Dkq5x8aO.js";import"./employee-bAM6jRYC.js";import"./Dialog-BvulQXwM.js";import"./ValueState-Bg0UWejw.js";import"./List-BfZf_G4a.js";import"./ItemNavigation-k4sy1HLj.js";import"./isElementInView-CjfjvN8v.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-Cj5zcxD0.js";import"./CheckBox-Dk6kQZ_w.js";import"./accept-DQ3e4AKx.js";import"./slim-arrow-right-WCG9hUY4.js";import"./SegmentedButton-D2Lm4GWp.js";import"./filter-CmGnAU52.js";import"./nav-back-Dy2js2TM.js";import"./i18n-defaults-01dqd8mT.js";import"./parameters-bundle.css-DUfIp--Q.js";import"./main-BPTHlokf.js";function c(i){const o={code:"code",h2:"h2",p:"p",pre:"pre",...l(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:g}),`
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
