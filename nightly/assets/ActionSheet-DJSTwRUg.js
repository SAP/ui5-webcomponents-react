import{j as t}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as i}from"./index-CcnH5Kt0.js";import{ae as p,af as m}from"./index-DcaIyAIU.js";import"./index-DUhstqtS.js";import"./index-CwbMnpRq.js";import{C as s}from"./ControlsWithNote-CkDKh4fZ.js";import{D as c}from"./DocsHeader-BhPnD-Qr.js";import{F as a}from"./CommandsAndQueries-Yvcj9pB7.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-XDMvnQZn.js";import{C as h,D as e}from"./ActionSheet.stories-hJbkJuXs.js";import"./iframe-D8On6EsC.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./withWebComponent-CjthvP8A.js";import"./utils-GPKUbrfH.js";import"./useIsomorphicLayoutEffect-BErBnqdY.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-GWtZPJ2c.js";import"./decline-CmGSEmfo.js";import"./Icon-BiQiH9AZ.js";import"./Keys-D1SxbTOd.js";import"./parameters-bundle.css-Bga-3Zi8.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-OSvSoWlX.js";import"./alert-eD3USdjD.js";import"./class-map-DQ0L7MML.js";import"./Button-BaZh887D.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BLqibUdf.js";import"./i18n-defaults-s9aeS2Z-.js";import"./TagDesign-Dou_yO3g.js";import"./utils-CXgwk7gS.js";import"./main-C6oD7XT2.js";import"./index-CMVhEEEP.js";import"./Tag-LXz9Qzaa.js";import"./sys-help-2-DCOUH3lY.js";import"./index-BVNesCV8.js";import"./Popover-CTv0B5oi.js";import"./PopupsCommon.css-BCC2ARq6.js";import"./FocusableElements-Br0H5X9U.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-C_eCkGSS.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-nG21dhw_.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-utr4MoWw.js";import"./Link-BrEhs14Q.js";import"./chunk-NUUEMKO5-BJlJeIos.js";import"./client-BzooOYO_.js";import"./copy-DL3IQ6be.js";import"./copy-1gorG9K6.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-bhM-b_eu.js";import"./index-f020l5lP.js";import"./I18nStore-MR5G_kEB.js";import"./useStylesheet-fdPvni4l.js";import"./index-DufQBMho.js";import"./index-BfKb0La0.js";import"./Label-BTdZQfry.js";import"./index-B5WnUF1s.js";import"./index-BW0ji45E.js";import"./addCustomCSSWithScoping-Da--1kqg.js";import"./index-BIzHEfW9.js";import"./BusyIndicator-CtYaHi5D.js";import"./index-Bm413cmF.js";import"./index-Dgv9Wh4L.js";import"./Avatar-DugjCxw4.js";import"./employee-LWQGcPo2.js";import"./accept-lq3MKKgJ.js";import"./decline-1QUNcWHz.js";import"./delete-BQIb6saC.js";import"./i18n-defaults-LeiLBnXK.js";import"./index-D7ZN_sxA.js";import"./ResponsivePopover-BQWeyngQ.js";import"./Dialog-B_xzyDcT.js";import"./ValueState-Bg0UWejw.js";function r(n){const o={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:h}),`
`,t.jsx(c,{subComponents:["Button"]}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(m,{of:e}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(s,{of:e}),`
`,t.jsx(o.h2,{id:"opening-actionsheets",children:"Opening ActionSheets"}),`
`,t.jsx("br",{}),`
`,t.jsxs(o.p,{children:["You can open and close the ",t.jsx(o.code,{children:"ActionSheet"})," component in a declarative way using the ",t.jsx(o.code,{children:"open"})," and ",t.jsx(o.code,{children:"opener"})," prop."]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`const MyComponentWithActionSheet = () => {
  const [actionSheetIsOpen, setActionSheetIsOpen] = useState(false);
  return (
    <>
      <Button
        id={'openActionSheetBtn'}
        onClick={() => {
          setActionSheetIsOpen(true);
        }}
      >
        Open Action Sheet
      </Button>
      <ActionSheet
        opener={'openActionSheetBtn'}
        open={actionSheetIsOpen}
        onClose={() => {
          setActionSheetIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,t.jsx(o.p,{children:t.jsxs(o.strong,{children:["Opening an ",t.jsx(o.code,{children:"ActionSheet"})," by reference"]})}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"ActionSheet"})," exposes a way to pass a reference of an element instead of an ",t.jsx(o.code,{children:"id"})," to the ",t.jsx(o.code,{children:"opener"}),` prop.
You can do that by e.g. leveraging a React Ref.`]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const ActionSheetComponent = () => {
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleOpenerClick = (e) => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <Button ref={buttonRef} onClick={handleOpenerClick}>
        Opener
      </Button>
      <ActionSheet opener={buttonRef.current} open={open}>
        {/* Content */}
      </ActionSheet>
    </>
  );
};
`})}),`
`,t.jsx(a,{})]})}function zt(n={}){const{wrapper:o}={...i(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(r,{...n})}):r(n)}export{zt as default};
