import{j as o}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as m}from"./index-CcnH5Kt0.js";import{ae as n,af as e}from"./index-DcaIyAIU.js";import"./index-DUhstqtS.js";import"./index-CwbMnpRq.js";import{C as s}from"./ControlsWithNote-CkDKh4fZ.js";import{D as a}from"./DocsHeader-BhPnD-Qr.js";import{F as c}from"./CommandsAndQueries-Yvcj9pB7.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-XDMvnQZn.js";import{C as d,D as p}from"./Popover.stories-D0bA1p5N.js";import"./iframe-D8On6EsC.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./withWebComponent-CjthvP8A.js";import"./utils-GPKUbrfH.js";import"./useIsomorphicLayoutEffect-BErBnqdY.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-GWtZPJ2c.js";import"./decline-CmGSEmfo.js";import"./Icon-BiQiH9AZ.js";import"./Keys-D1SxbTOd.js";import"./parameters-bundle.css-Bga-3Zi8.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-OSvSoWlX.js";import"./alert-eD3USdjD.js";import"./class-map-DQ0L7MML.js";import"./Button-BaZh887D.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BLqibUdf.js";import"./i18n-defaults-s9aeS2Z-.js";import"./TagDesign-Dou_yO3g.js";import"./utils-CXgwk7gS.js";import"./main-C6oD7XT2.js";import"./index-CMVhEEEP.js";import"./Tag-LXz9Qzaa.js";import"./sys-help-2-DCOUH3lY.js";import"./index-BVNesCV8.js";import"./Popover-CTv0B5oi.js";import"./PopupsCommon.css-BCC2ARq6.js";import"./FocusableElements-Br0H5X9U.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-C_eCkGSS.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-nG21dhw_.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-utr4MoWw.js";import"./Link-BrEhs14Q.js";import"./chunk-NUUEMKO5-BJlJeIos.js";import"./client-BzooOYO_.js";import"./copy-DL3IQ6be.js";import"./copy-1gorG9K6.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-bhM-b_eu.js";import"./index-f020l5lP.js";import"./I18nStore-MR5G_kEB.js";import"./useStylesheet-fdPvni4l.js";import"./index-DufQBMho.js";import"./index-BfKb0La0.js";import"./Label-BTdZQfry.js";import"./index-B5WnUF1s.js";import"./index-BW0ji45E.js";import"./addCustomCSSWithScoping-Da--1kqg.js";import"./index-BIzHEfW9.js";import"./BusyIndicator-CtYaHi5D.js";import"./index-Bm413cmF.js";import"./index-Dgv9Wh4L.js";import"./Avatar-DugjCxw4.js";import"./employee-LWQGcPo2.js";import"./settings-DfoYexF-.js";import"./index-CKGwC2qY.js";import"./List-CxytAChQ.js";import"./ItemNavigation-Ch7UfbYX.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-CrDCiJN-.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-BADu75Mj.js";import"./accept-lq3MKKgJ.js";import"./slim-arrow-right-BCeUcVk3.js";import"./index-CpEoJ089.js";function i(t){const r={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:d}),`
`,o.jsx(a,{since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(r.h2,{id:"example",children:"Example"}),`
`,o.jsx(e,{of:p}),`
`,o.jsx(r.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(s,{of:p}),`
`,o.jsx(r.h2,{id:"opening-popovers",children:"Opening Popovers"}),`
`,o.jsxs(r.p,{children:["You can open and close the ",o.jsx(r.code,{children:"Popover"})," component in a declarative way using the ",o.jsx(r.code,{children:"open"})," and ",o.jsx(r.code,{children:"opener"})," prop."]}),`
`,o.jsx(r.pre,{children:o.jsx(r.code,{className:"language-jsx",children:`const MyComponentWithPopover = () => {
  const btnRef = useRef(null);
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  return (
    <>
      <Button
        ref={btnRef}
        onClick={() => {
          setPopoverIsOpen(true);
        }}
      >
        Open Popover
      </Button>
      <Popover
        opener={btnRef.current}
        open={popoverIsOpen}
        onClose={() => {
          setPopoverIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,o.jsx(c,{})]})}function Vo(t={}){const{wrapper:r}={...m(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(i,{...t})}):i(t)}export{Vo as default};
