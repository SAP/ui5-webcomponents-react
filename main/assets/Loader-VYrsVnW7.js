import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{F as a}from"./ProjectTemplate-H016qfkh.js";import{C as s}from"./ControlsWithNote-XkdmZnAb.js";import{D as d}from"./DocsHeader-obw6pe6q.js";import"./index-OjgoNOWw.js";import{M as l,b as n}from"./index-sCv48Wgo.js";import{C as x,D as p,W as c}from"./Loader.stories-o0Vydxhp.js";import{u as m}from"./index-RwE9nQVW.js";import"./react-jss.esm-fzYOEaou.js";import"./theming.esm-g_6oAtQL.js";import"./index-VPIdTiwa.js";import"./iframe-LwD4s90s.js";import"../sb-preview/runtime.js";import"./UI5Element-ZYvPEp0D.js";import"./Language-JQ3LAQtE.js";import"./VersionInfo-zmLW7G4m.js";import"./CustomElementsScopeUtils-StEZUlti.js";import"./withWebComponent-c-uI2wMj.js";import"./utils-_oNUceU3.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./event-lM5HanI-.js";import"./i18nBundle-1RfbKOQr.js";import"./decline-U1O_cqCB.js";import"./Icons-cAVhCySg.js";import"./i18n-defaults-SIMqfZL6.js";import"./information-QdD8C0Qh.js";import"./alert-dBb1Jp03.js";import"./class-map-kWxrnrVL.js";import"./Icon-7RzQfNaI.js";import"./Keys-ZEuNsqmZ.js";import"./parameters-bundle.css-mPCp9TQx.js";import"./Button-6A8kFSGe.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./willShowContent-MSvI8sYo.js";import"./HasPopup-9BAMrqbD.js";import"./i18n-defaults-5NJLMpyi.js";import"./chunk-HLWAVYOI-LQRwDipK.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./index-pmORB0Fb.js";import"./clsx-Zbgk8kpT.js";import"./index-ZC3VMvnR.js";import"./Label-fARuFZ49.js";import"./WrappingType-avPrqc94.js";import"./index-mSCKNfpD.js";import"./index-kSMMroHk.js";import"./Link-HKW89dQ_.js";import"./index-v8hStx0B.js";import"./Popover-UsQMNwiB.js";import"./Integer-kog98579.js";import"./PopupUtils-ihEiSFJi.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-ITzmnbbD.js";import"./FocusableElements-vlqyWKZU.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./ResizeHandler-YURVNHbB.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-5XXpitLE.js";import"./BrowserScrollbar.css-za47fcqD.js";import"./index-SpQb4Cav.js";import"./i18n-defaults-8iJXv8tC.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-O-3hYuZs.js";import"./useStylesheet-2TpYMoe1.js";import"./ModalsContext-T9gUbaXC.js";import"./addCustomCSSWithScoping-tGNiKL_K.js";import"./index-_SFX8sbs.js";import"./index-pcESxqOz.js";import"./Avatar-W7sCbj87.js";import"./employee-LTkoba5Z.js";import"./index-Rq1hhAcL.js";import"./utils-xA4J5anQ.js";import"./index-DK42RZSj.js";import"./sys-help-2-8ufeK3Od.js";import"./copy-PqQY0mDn.js";import"./GitHub-Mark-JYujJlUX.js";import"./TableOfContent-xw_B-gYu.js";import"./_baseForOwn-a7AeJH13.js";import"./mapValues-_kP3xGjM.js";import"./_baseUniq-_JZHYp0e.js";import"./index-PPLHz8o0.js";import"./index-7I0hdIjK.js";import"./spacing-ftLAC4UG.js";import"./index-PARJa2YO.js";import"./index-CD-FFeO3.js";function Qt(i={}){const{wrapper:r}=Object.assign({},m(),i.components);return r?t.jsx(r,Object.assign({},i,{children:t.jsx(e,{})})):e();function e(){const o=Object.assign({h2:"h2",h1:"h1",pre:"pre",code:"code"},m(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:x}),`
`,t.jsx(d,{}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(n,{of:p}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(s,{of:p}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h1,{id:"more-examples",children:"More Examples"}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"card-with-loader",children:"Card with Loader"}),`
`,t.jsx(n,{of:c}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const LoaderComponent = () => {
  const initialText =
    'This is a text that will be updated 5 seconds after the header is clicked. The text will be visible until the new text has been fetched. To let the user know that the text is updating, the Loader will be displayed.';
  const [text, setText] = useState(initialText);
  const [loading, setLoading] = useState(false);
  const onHeaderClick = () => {
    setLoading(true);
  };
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setText((prev) => (prev === initialText ? 'Updated (⌐■_■)' : initialText));
        setLoading(false);
      }, 5000);
    }
  }, [loading]);
  return (
    <Card
      header={
        <CardHeader
          titleText="Click the header to update the text below."
          interactive
          avatar={<Icon name="activate" />}
          onClick={onHeaderClick}
        />
      }
      style={{ width: '400px' }}
    >
      <FlexBox direction={FlexBoxDirection.Column}>
        {loading && <Loader />}
        <Text style={spacing.sapUiContentPadding}>{text}</Text>
      </FlexBox>
    </Card>
  );
};
`})}),`
`,t.jsx(a,{})]})}}export{Qt as default};
