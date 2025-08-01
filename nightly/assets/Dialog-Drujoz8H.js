import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-Duvwo7dg.js";import{M as n,C as e}from"./index-DC4Zxx0i.js";import"./Tag-Ck-rQ93o.js";import"./index-BCOE9su8.js";import"./index-CEr2UAyE.js";import"./index-7Z4Dhk6u.js";import"./index-DOj1f8Lg.js";import{C as s}from"./ControlsWithNote-DYzLCcVX.js";import{D as a}from"./DocsHeader-Cne37Zxd.js";import{F as c}from"./CommandsAndQueries-BKmPxuiJ.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BTb5jHlz.js";import{C as l,D as i}from"./Dialog.stories-Dd9La-8N.js";import"./iframe-DYm7x9-2.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-xa789Fx-.js";import"./CustomElementsScope-CraI7z9b.js";import"./EventProvider-ChtD9rRX.js";import"./event-strict-DgQLNDEV.js";import"./slot-_4yKMUwC.js";import"./i18n-CjR4HGlq.js";import"./willShowContent-CZcfsNXp.js";import"./sys-help-2-QU1zRg7_.js";import"./Icon-BC8KE6RK.js";import"./Keys-CLf_QmYW.js";import"./parameters-bundle.css-D0uTR4GL.js";import"./sys-enter-2-CUYL3AE0.js";import"./i18n-defaults-CmVK7_Fz.js";import"./information-l0VFevGn.js";import"./i18n-defaults-Wx6G1HAa.js";import"./index-BX0qWsV0.js";import"./Button-BAohpRXl.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Tooltips-CwjopbrF.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./decline-BJJ7TY3L.js";import"./information-jHKcowyE.js";import"./sys-enter-2-vblLkH1D.js";import"./alert-CtWydQwI.js";import"./utils-eoQ6HRG0.js";import"./main-Dn6sLQP9.js";import"./index-BfsxzUor.js";import"./index-BxoZEFEX.js";import"./Link-DYEiCybJ.js";import"./index-DOeHcXKd.js";import"./Popover-DrPdnlD_.js";import"./PopupsCommon.css-D_uQUn1t.js";import"./FocusableElements-CinXTr6J.js";import"./isElementHidden-gS67o0pl.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-OXK24k1p.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./copy-C0jPBuQX.js";import"./copy-Ce-W84Ka.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-ClPXL3dS.js";import"./index-Cg9Z4-gG.js";import"./I18nStore-Bx61vi8M.js";import"./useStylesheet-Dh6tKsMV.js";import"./index-CJO99m71.js";import"./index-w82VAi-S.js";import"./Label-DvI9nTT8.js";import"./index-BTImLLsO.js";import"./index-g22nm93k.js";import"./Text-BhvqvgTY.js";import"./preview-DqrgJKWC.js";import"./DocsRenderer-CFRXHY34-T6-8wtfp.js";import"./client-2ALsBH8W.js";import"./addCustomCSSWithScoping-Br5D2MMD.js";import"./index-CB6Dlc1E.js";import"./BusyIndicator-CP9fjQ10.js";import"./index-BUVDlgt4.js";import"./index-5xYsTlk-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-JpmbdEoa.js";import"./index-DoI0VoS9.js";import"./Dialog-DV9znwaF.js";import"./ValueState-Bg0UWejw.js";import"./index-BGNjzVxN.js";import"./List-DPa82ePk.js";import"./ItemNavigation-CN_qUVl5.js";import"./TableUtils-Dw6-SQcm.js";import"./DropIndicator-IZIrFUYd.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./ListItemGroup-C5yw13O_.js";import"./TabbableElements-CqFMEI5U.js";import"./index-B62NpDbk.js";import"./ListItemStandard-DSTnUQt5.js";import"./ListItemTemplate-C_ypHU-i.js";import"./edit-CLNeHyx4.js";import"./ListItemAdditionalText.css-LfmHRrff.js";import"./slim-arrow-right-Cg5m15Ca.js";import"./RadioButton-cNkNy5nm.js";import"./CheckBox-BDt864Yc.js";import"./accept-AveWdi_K.js";function p(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:l}),`
`,o.jsx(a,{}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(e,{of:i}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(s,{of:i}),`
`,o.jsx(t.h2,{id:"opening-dialogs",children:"Opening Dialogs"}),`
`,o.jsxs(t.p,{children:["You can open and close the ",o.jsx(t.code,{children:"Dialog"})," component in a declarative way using the ",o.jsx(t.code,{children:"open"})," prop."]}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`const MyComponentWithDialog = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setDialogIsOpen(true);
        }}
      >
        Open Dialog
      </Button>
      <Dialog open={dialogIsOpen} />
    </>
  );
};
`})}),`
`,o.jsx(c,{})]})}function mt(r={}){const{wrapper:t}={...m(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(p,{...r})}):p(r)}export{mt as default};
