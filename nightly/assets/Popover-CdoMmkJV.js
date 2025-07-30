import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-Duvwo7dg.js";import{M as n,C as e}from"./index-6L7Ngnae.js";import"./Tag-Ck-rQ93o.js";import"./index-7sfyssWA.js";import"./index-CEr2UAyE.js";import"./index-7Z4Dhk6u.js";import"./index-N87cy000.js";import{C as s}from"./ControlsWithNote-UN6av-cs.js";import{D as c}from"./DocsHeader-DGxpFpCU.js";import{F as a}from"./CommandsAndQueries-DjdXeeFs.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BTb5jHlz.js";import{C as d,D as p}from"./Popover.stories-D3T3DMH_.js";import"./iframe-CtpEHFzg.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-xa789Fx-.js";import"./CustomElementsScope-CraI7z9b.js";import"./EventProvider-ChtD9rRX.js";import"./event-strict-DgQLNDEV.js";import"./slot-_4yKMUwC.js";import"./i18n-CjR4HGlq.js";import"./willShowContent-CZcfsNXp.js";import"./sys-help-2-QU1zRg7_.js";import"./Icon-BC8KE6RK.js";import"./Keys-CLf_QmYW.js";import"./parameters-bundle.css-D0uTR4GL.js";import"./sys-enter-2-CUYL3AE0.js";import"./i18n-defaults-CmVK7_Fz.js";import"./information-l0VFevGn.js";import"./i18n-defaults-Wx6G1HAa.js";import"./index-BX0qWsV0.js";import"./Button-BAohpRXl.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Tooltips-CwjopbrF.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./decline-BJJ7TY3L.js";import"./information-jHKcowyE.js";import"./sys-enter-2-vblLkH1D.js";import"./alert-CtWydQwI.js";import"./utils-CccaSTPN.js";import"./main-Dn6sLQP9.js";import"./index-CfGRZDU4.js";import"./index-BxoZEFEX.js";import"./Link-DYEiCybJ.js";import"./index-DOeHcXKd.js";import"./Popover-DrPdnlD_.js";import"./PopupsCommon.css-D_uQUn1t.js";import"./FocusableElements-CinXTr6J.js";import"./isElementHidden-gS67o0pl.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-OXK24k1p.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./copy-C0jPBuQX.js";import"./copy-Ce-W84Ka.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-ClPXL3dS.js";import"./index-DFTv86xX.js";import"./I18nStore-Bx61vi8M.js";import"./useStylesheet-Dh6tKsMV.js";import"./index-C5VKFbIU.js";import"./index-w82VAi-S.js";import"./Label-DvI9nTT8.js";import"./index-BTImLLsO.js";import"./index-g22nm93k.js";import"./Text-BhvqvgTY.js";import"./preview-9UL19B1K.js";import"./DocsRenderer-CFRXHY34-Dy5LDZHK.js";import"./client-2ALsBH8W.js";import"./addCustomCSSWithScoping-Br5D2MMD.js";import"./index-CB6Dlc1E.js";import"./BusyIndicator-CP9fjQ10.js";import"./index-BUVDlgt4.js";import"./index-5xYsTlk-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-JpmbdEoa.js";import"./settings-Dfdhzv2i.js";import"./index-BGNjzVxN.js";import"./List-DPa82ePk.js";import"./ItemNavigation-CN_qUVl5.js";import"./TableUtils-Dw6-SQcm.js";import"./DropIndicator-IZIrFUYd.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./ListItemGroup-C5yw13O_.js";import"./TabbableElements-CqFMEI5U.js";import"./index-BCEHL3Wg.js";import"./ListItemStandard-KZUvRH6M.js";import"./ListItemTemplate-C_ypHU-i.js";import"./edit-CLNeHyx4.js";import"./ListItemAdditionalText.css-LfmHRrff.js";import"./slim-arrow-right-Cg5m15Ca.js";import"./RadioButton-cNkNy5nm.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-BDt864Yc.js";import"./accept-AveWdi_K.js";function i(t){const r={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:d}),`
`,o.jsx(c,{since:"0.9.0"}),`
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
`,o.jsx(a,{})]})}function ir(t={}){const{wrapper:r}={...m(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(i,{...t})}):i(t)}export{ir as default};
