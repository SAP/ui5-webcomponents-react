import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{F as a}from"./ProjectTemplate-s7G3G6eJ.js";import{C as s}from"./ControlsWithNote--66wawBs.js";import{D as d}from"./DocsHeader-TqsMEejZ.js";import"./index-OjgoNOWw.js";import{M as l,b as n}from"./index-b-Ix2MFa.js";import{C as x,D as p,W as c}from"./Loader.stories-xgYYK2rd.js";import{u as m}from"./index-RwE9nQVW.js";import"./react-jss.esm-tmBtHfec.js";import"./index-S9mLGzbz.js";import"./iframe-a3MhUWSg.js";import"../sb-preview/runtime.js";import"./UI5Element-d7BKyERc.js";import"./Language-gwOe_M78.js";import"./VersionInfo-zmLW7G4m.js";import"./CustomElementsScopeUtils-StEZUlti.js";import"./withWebComponent-76pUbYpZ.js";import"./utils-axAaCEhS.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./event-lM5HanI-.js";import"./i18nBundle-kNlRgZSb.js";import"./decline-WQNFq9Fi.js";import"./Icons-Bde3sOsn.js";import"./i18n-defaults-SIMqfZL6.js";import"./information-2I5Ry-zV.js";import"./alert-NotaXBj3.js";import"./class-map-bhYzoXeo.js";import"./Icon-hMB0shdW.js";import"./Keys-ZEuNsqmZ.js";import"./parameters-bundle.css-mPCp9TQx.js";import"./Button-CtOFNnbZ.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./willShowContent-MSvI8sYo.js";import"./HasPopup-9BAMrqbD.js";import"./i18n-defaults-fXrRGy4a.js";import"./chunk-HLWAVYOI-87krWF5z.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./index-6f3-3TZK.js";import"./clsx-Zbgk8kpT.js";import"./index-NHzuflBb.js";import"./Label-FCElSj8m.js";import"./WrappingType-avPrqc94.js";import"./index-HlLP9y7d.js";import"./index-ja2d39Vw.js";import"./Link-_BOQy6dO.js";import"./index-zjMyGibs.js";import"./Popover-_jCR4_rX.js";import"./Integer-kog98579.js";import"./PopupUtils-cNe84Tf4.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-X9qhl2xp.js";import"./FocusableElements-wiyFyaM0.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./ResizeHandler-iTCl5diO.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-hPGZuWy3.js";import"./BrowserScrollbar.css-MeHHyWPf.js";import"./index-lPldneR1.js";import"./i18n-defaults-ZVLl3Qs7.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-9LQRDEyt.js";import"./StyleContext-9nyrn-qG.js";import"./ModalsContext-T9gUbaXC.js";import"./CssSizeVariables-HFpqBBhk.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-ROWx_8g-.js";import"./index-6Q7fSFPt.js";import"./index-Np9tag8o.js";import"./Avatar-T_YwUlIG.js";import"./employee-638U4O_O.js";import"./index-Ve4sKk4U.js";import"./utils-x_xnJFA_.js";import"./index-bhbJyoik.js";import"./sys-help-2-pEGjeWPi.js";import"./copy-sn9oDqVN.js";import"./GitHub-Mark-JYujJlUX.js";import"./TableOfContent-tT6RzoGB.js";import"./_baseForOwn-a7AeJH13.js";import"./mapValues-_kP3xGjM.js";import"./_baseUniq-_JZHYp0e.js";import"./index-PPLHz8o0.js";import"./index-7I0hdIjK.js";import"./spacing-ftLAC4UG.js";import"./index-OABBwxW1.js";import"./index-WhQEMAxe.js";function Yt(i={}){const{wrapper:r}=Object.assign({},m(),i.components);return r?t.jsx(r,Object.assign({},i,{children:t.jsx(e,{})})):e();function e(){const o=Object.assign({h2:"h2",h1:"h1",pre:"pre",code:"code"},m(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:x}),`
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
`,t.jsx(a,{})]})}}export{Yt as default};
