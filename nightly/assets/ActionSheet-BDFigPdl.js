import{j as t}from"./useIsomorphicLayoutEffect-Dhma_bjk.js";import{useMDXComponents as i}from"./index-CcnH5Kt0.js";import{ae as p,af as m}from"./index-BxVQDxfy.js";import"./index-CGD6y5QJ.js";import"./index-BlxWPw6c.js";import{C as s}from"./ControlsWithNote-DDcjvSd_.js";import{D as c}from"./DocsHeader-DagkYjWB.js";import{F as a}from"./CommandsAndQueries-B6Xp5IUc.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-ZqK5PCI6.js";import{C as h,D as e}from"./ActionSheet.stories-CuOLRNjY.js";import"./iframe-DqMiIs9N.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-DGDOfdbw.js";import"./_getPrototype-B0L0C3AT.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";import"./withWebComponent-DUIvHLMA.js";import"./utils-CKNAmS37.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-DMA-_yLC.js";import"./decline-CHk4a2e7.js";import"./Icon-C44BwzQ8.js";import"./Keys-D1SxbTOd.js";import"./parameters-bundle.css-Bga-3Zi8.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-Sy77r2nJ.js";import"./alert-cQZYHoWK.js";import"./class-map-BJErPj2t.js";import"./Button-CxQnwzDr.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BzCnTBef.js";import"./i18n-defaults-DTxNk1Ll.js";import"./TagDesign-Dou_yO3g.js";import"./utils-X9DBbVtv.js";import"./main-C6oD7XT2.js";import"./index-D8yCSEP8.js";import"./Tag-CPIJx4VG.js";import"./sys-help-2-Bvq59Jti.js";import"./index-WEA3P0fF.js";import"./Popover-BePXU9v3.js";import"./PopupsCommon.css-DBrv9Ok7.js";import"./FocusableElements-19hFFt5Q.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-ufE0tBOz.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-Bd8TDVwu.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-DI2d1WHF.js";import"./Link-CiJW-swg.js";import"./chunk-HLWAVYOI-CMYTRHck.js";import"./client-BZNFO7bv.js";import"./copy-CYHXqHWb.js";import"./copy-pca8p_zU.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-CnYostSV.js";import"./TableOfContent-J0xBpY2P.js";import"./index-B_vKgNzx.js";import"./I18nStore-B2w4xK_s.js";import"./useStylesheet-DcbwKAeb.js";import"./index-3WD7if5i.js";import"./index-D_wOg0B-.js";import"./Label-BAMwsHnp.js";import"./index-CF8fMoC4.js";import"./index-9j-aR15A.js";import"./addCustomCSSWithScoping-BRJo9-6E.js";import"./index-DhepUemJ.js";import"./BusyIndicator-BGYa7yRK.js";import"./index-BNERneIU.js";import"./index-4YU2sHPi.js";import"./Avatar-C5E79jBl.js";import"./employee-DWCutjal.js";import"./accept-fkmvC9HV.js";import"./decline-BHV4qHoL.js";import"./delete-IerivrUi.js";import"./i18n-defaults-DMLFl-9E.js";import"./index-CXvOIVW1.js";import"./ResponsivePopover-ti0Jur0Z.js";import"./Dialog-C_-Hi_6c.js";import"./ValueState-Bg0UWejw.js";function r(n){const o={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:h}),`
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
