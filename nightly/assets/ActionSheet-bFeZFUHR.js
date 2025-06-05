import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-B5Ip8tK9.js";import{M as p,C as m}from"./index-DukfgG46.js";import"./index-BWKPikEH.js";import"./index-DG4SW1Na.js";import{C as s}from"./ControlsWithNote-DWvUN5HF.js";import{D as c}from"./DocsHeader-C0GiLIwp.js";import{F as a}from"./CommandsAndQueries-Dnz_Hw6e.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BHqLOn3P.js";import{C as h,D as e}from"./ActionSheet.stories-oMMROXRA.js";import"./iframe-DwIyAsRF.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-2URiGFD4.js";import"./CustomElementsScope-BI7irdrP.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-Bjd4zYvH.js";import"./Keys-CLyAIm0c.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-B0-3JSbm.js";import"./parameters-bundle.css-CKhNLE8L.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-B60tbUjG.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-D-4MAilP.js";import"./decline-Dy3AHuu2.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-CT1WFsrs.js";import"./information-BNPlHszt.js";import"./sys-enter-2-Dn3JsYB_.js";import"./sys-enter-2-CVLhpz1T.js";import"./alert-DsnWREGh.js";import"./Tag-CFnuOVXp.js";import"./sys-help-2-D2pBj4rZ.js";import"./utils-C_2ddFCI.js";import"./main-DirjBNUD.js";import"./index-BkMq5NNM.js";import"./index-DQrDl5DZ.js";import"./Link-B2LlQwpl.js";import"./index-DVo4jJWd.js";import"./Popover-C0YXxup5.js";import"./PopupsCommon.css-Fn6w0Ixx.js";import"./FocusableElements-CQV0UnrP.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DtxVwfCt.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./copy-Dfs1YfRy.js";import"./copy-CiPkc0hO.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-BG9P-NK7.js";import"./index-C9pVJkR7.js";import"./I18nStore-CIGTIwFZ.js";import"./useStylesheet-4DYJndCZ.js";import"./index-D71WPoKU.js";import"./index-C4Jitp5p.js";import"./Label-XJ1zprNH.js";import"./index-Bd-rK44S.js";import"./index-D3evOh0J.js";import"./Text-CA10hASc.js";import"./preview-CXjsfKgV.js";import"./DocsRenderer-CFRXHY34-DiZSQ5cR.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-CKnDw5_z.js";import"./index-YPb1U1C6.js";import"./BusyIndicator-DWZUs86e.js";import"./index-D4tId3DQ.js";import"./index-69BlU8QT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CRL-E5Mm.js";import"./accept-D7J2cWEB.js";import"./delete-CbJEEVk2.js";import"./i18n-defaults-DtGc6EyS.js";import"./utils-Dlhtd8PN.js";import"./index-CMAQe6z_.js";import"./ResponsivePopover-YyQcMm4b.js";import"./Dialog-BTP8el_I.js";import"./ValueState-Bg0UWejw.js";function r(n){const o={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:h}),`
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
