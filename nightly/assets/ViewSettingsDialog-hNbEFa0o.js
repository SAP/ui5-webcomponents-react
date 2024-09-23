import{j as t}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as l}from"./index-CcnH5Kt0.js";import{ae as x,af as d,ag as h,ah as r,ai as m}from"./index-BSVF12K3.js";import"./index-fq-A78mQ.js";import"./index-DivLG0aG.js";import{C as j}from"./ControlsWithNote-DrK0M2Dw.js";import{D as f}from"./DocsHeader-MZV236To.js";import{F as S}from"./CommandsAndQueries-C30XEun7.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-XDMvnQZn.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{C as g,D as n,S as p,F as s,a}from"./ViewSettingsDialog.stories-DDDVST4W.js";import{e}from"./utils-C8-8Yovp.js";import"./iframe-DFiJm6Od.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./withWebComponent-CjthvP8A.js";import"./utils-GPKUbrfH.js";import"./useIsomorphicLayoutEffect-BErBnqdY.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-GWtZPJ2c.js";import"./decline-CmGSEmfo.js";import"./Icon-BiQiH9AZ.js";import"./Keys-D1SxbTOd.js";import"./parameters-bundle.css-Bga-3Zi8.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-OSvSoWlX.js";import"./alert-eD3USdjD.js";import"./class-map-DQ0L7MML.js";import"./Button-BBQ8R6D6.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BLqibUdf.js";import"./i18n-defaults-BotoAXl7.js";import"./TagDesign-Dou_yO3g.js";import"./index-BAVmR9lv.js";import"./Tag-MIdNBUL-.js";import"./sys-help-2-DCOUH3lY.js";import"./index-BVNesCV8.js";import"./Popover-CTv0B5oi.js";import"./PopupsCommon.css-BCC2ARq6.js";import"./FocusableElements-Br0H5X9U.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-C_eCkGSS.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-nG21dhw_.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-C5CUzSoK.js";import"./Link-DZg2nJC9.js";import"./chunk-NUUEMKO5-CtE8_fph.js";import"./client-BzooOYO_.js";import"./copy-DL3IQ6be.js";import"./copy-1gorG9K6.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-bhM-b_eu.js";import"./index-lBjjPZPJ.js";import"./I18nStore-MR5G_kEB.js";import"./useStylesheet-LPUx0SP2.js";import"./index-BbZOpDmd.js";import"./index-Dns6Oz5_.js";import"./Label-CZSx-F1W.js";import"./index-DPG7W1kp.js";import"./index-BdA_tfl3.js";import"./addCustomCSSWithScoping-Da--1kqg.js";import"./index-BmvVf3i2.js";import"./BusyIndicator-CFbpjHZX.js";import"./index-p_JN0Moo.js";import"./index-C99ljWuN.js";import"./Avatar-Dvl2_7FY.js";import"./employee-LWQGcPo2.js";import"./Dialog-C8nnmLS4.js";import"./ValueState-Bg0UWejw.js";import"./List-CuZOmXHL.js";import"./ItemNavigation-Ch7UfbYX.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-GgoeTXQS.js";import"./CheckBox-CM06bEZZ.js";import"./accept-lq3MKKgJ.js";import"./slim-arrow-right-BCeUcVk3.js";import"./SegmentedButton-BF5lcocl.js";import"./filter-B5g1V2Sh.js";import"./nav-back-lCSj6tEW.js";import"./i18n-defaults-Ch85G0rJ.js";import"./parameters-bundle.css-By19-ehE.js";import"./main-C6oD7XT2.js";function c(i){const o={code:"code",h2:"h2",p:"p",pre:"pre",...l(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:g}),`
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
