import{j as o}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as n}from"./index-ChplMHeC.js";import{M as m,C as s,a,D as l,A as c}from"./index-CdT5jJZZ.js";import"./index-BWY3TFGt.js";import"./index-BkQKeFEP.js";import{C as d}from"./ControlsWithNote-CWVC84-H.js";import{D as x}from"./DocsHeader-C6qYJjvu.js";import{F as u}from"./CommandsAndQueries-BXf-dk22.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-BR0HRFMn.js";import{C as h,D as e}from"./ColorPalettePopover.stories-EDZNmXXO.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-CHXaSD0Y.js";import"./iframe-DhiZQmNe.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./jsx-runtime-DJfzgo3Z.js";import"./CustomElementsScope-Cnxnu_QK.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-ClmCy2Cm.js";import"./Keys-Can65e7H.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-9zGTEZoy.js";import"./parameters-bundle.css-3_Pq1j61.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BdH9fu8C.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-CjsTKlnu.js";import"./decline-CK9cTtHa.js";import"./i18n-defaults-CifGXSvE.js";import"./information-DJOHIqln.js";import"./information-ix6q05KE.js";import"./sys-enter-2-FqE9Jd9Z.js";import"./sys-enter-2-FVzsVtg3.js";import"./TagDesign-Dou_yO3g.js";import"./utils-Cq9cSzlI.js";import"./main-CiDzSAAF.js";import"./index-BVASCLFV.js";import"./Tag-5S7Tw76M.js";import"./sys-help-2-Bc0SeYbg.js";import"./index-DhvWoo7_.js";import"./Link-BMGGPz7B.js";import"./index-Bfdb1dFM.js";import"./Popover-ChT-u0ao.js";import"./PopupsCommon.css-_Z_CYCJm.js";import"./FocusableElements-BnnVWUNQ.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-C0NcOxBw.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-DBIv7lnu.js";import"./client-lwzJIAjg.js";import"./copy-SwveN06M.js";import"./copy-BHzTzCpZ.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-D4qgphJw.js";import"./I18nStore-Ck_ZDoO_.js";import"./useStylesheet-D6kLlLz-.js";import"./index-CqnluFWg.js";import"./index-BmN7WUzF.js";import"./Label-Cv3ZI2wV.js";import"./index-DZJWwrpE.js";import"./index-DSrRVUVn.js";import"./Text-Bdc-nFmb.js";import"./addCustomCSSWithScoping-e6wN0F3P.js";import"./index-BTrRnRp2.js";import"./BusyIndicator-D3N-k1mY.js";import"./index-Bur18C1c.js";import"./index-S7gxAvta.js";import"./AvatarSize-BceVhWoP.js";import"./employee-Bfg7DU9E.js";import"./ResponsivePopover-DdGNwQAk.js";import"./Dialog-CLQZBkJ1.js";import"./ValueState-Bg0UWejw.js";import"./ResponsivePopoverCommon.css-CCHpMgyT.js";import"./ItemNavigation-BocrwV3K.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
`,o.jsx(x,{since:"0.20.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{of:e}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(d,{of:e}),`
`,o.jsx(t.h2,{id:"opening-colorpalettepopovers",children:"Opening ColorPalettePopovers"}),`
`,o.jsxs(t.p,{children:["You can open and close the ",o.jsx(t.code,{children:"ColorPalettePopover"})," component in a declarative way using the ",o.jsx(t.code,{children:"open"})," and ",o.jsx(t.code,{children:"opener"})," prop."]}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`const ColorPalettePopoverComponent = () => {
  const [showPopover, setShowPopover] = useState(false);
  const buttonRef = useRef(null);
  const onButtonClick = (e) => {
    setShowPopover((prev) => !prev);
  };
  return (
    <>
      <Button ref={buttonRef} onClick={onButtonClick}>
        Open ColorPalettePopover
      </Button>
      <ColorPalettePopover open={showPopover} opener={buttonRef.current}>
        <ColorPaletteItem value="pink" />
        <ColorPaletteItem value="darkblue" />
      </ColorPalettePopover>
    </>
  );
};
`})}),`
`,o.jsx(a,{children:j}),`
`,o.jsx(t.h2,{id:"colorpaletteitem",children:"ColorPaletteItem"}),`
`,o.jsx(l,{of:p}),`
`,o.jsx(c,{of:p}),`
`,o.jsx(u,{})]})}function Uo(r={}){const{wrapper:t}={...n(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(i,{...r})}):i(r)}export{Uo as default};
