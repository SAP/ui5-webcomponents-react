import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{F as a}from"./ProjectTemplate-Qax3SV_z.js";import{C as s}from"./ControlsWithNote-IzwO5E-b.js";import{D as d}from"./DocsHeader-LgDufHAJ.js";import"./index-OjgoNOWw.js";import{M as l,b as n}from"./index-FCx-ohCS.js";import{C as x,D as p,W as c}from"./Loader.stories-KknKV3I8.js";import{u as m}from"./index-RwE9nQVW.js";import"./react-jss.esm-tmBtHfec.js";import"./index-6pfutzjZ.js";import"./iframe-e3g82syF.js";import"../sb-preview/runtime.js";import"./UI5Element-PDhTXJ0K.js";import"./Language-gwOe_M78.js";import"./VersionInfo-zmLW7G4m.js";import"./CustomElementsScopeUtils-StEZUlti.js";import"./withWebComponent-76pUbYpZ.js";import"./utils-axAaCEhS.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./event-lM5HanI-.js";import"./i18nBundle-kNlRgZSb.js";import"./decline-CAXtFmDv.js";import"./Icons-HU_OsjUX.js";import"./i18n-defaults-SIMqfZL6.js";import"./information-zrOk1lB0.js";import"./alert-KKDABsAn.js";import"./class-map-bhYzoXeo.js";import"./Icon-ddwK7i-Z.js";import"./Keys-ZEuNsqmZ.js";import"./parameters-bundle.css-mPCp9TQx.js";import"./Button-roBYNtMK.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./willShowContent-MSvI8sYo.js";import"./HasPopup-9BAMrqbD.js";import"./i18n-defaults-fXrRGy4a.js";import"./chunk-HLWAVYOI-gdaS8Ahj.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./index-iYv8HJTi.js";import"./clsx-Zbgk8kpT.js";import"./index-0dmymJE1.js";import"./Label-FF9RWaAe.js";import"./WrappingType-avPrqc94.js";import"./index-H1OmHS7i.js";import"./index--kAzRQ7Z.js";import"./Link-04aNnizE.js";import"./index-BzgCSksV.js";import"./Popover-617eJuHR.js";import"./Integer-kog98579.js";import"./PopupUtils-cNe84Tf4.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-xdOKPs4T.js";import"./FocusableElements--oBMpjjl.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./ResizeHandler-dJr96v2O.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-hPGZuWy3.js";import"./BrowserScrollbar.css-SfEgvsVX.js";import"./index-lPldneR1.js";import"./i18n-defaults-ZVLl3Qs7.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-jI3Y0f77.js";import"./StyleContext-9nyrn-qG.js";import"./ModalsContext-T9gUbaXC.js";import"./CssSizeVariables-HFpqBBhk.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-OxCD80Mt.js";import"./index-3nL6bmr7.js";import"./index-1xEB9FCY.js";import"./Avatar-Zr4UGbbl.js";import"./employee-_6wWdZWc.js";import"./index-Lz-zxcEr.js";import"./utils-8hBdc4g8.js";import"./index-3Uczs9Zb.js";import"./sys-help-2-WpiGIDvZ.js";import"./copy-yGGaKiyA.js";import"./GitHub-Mark-JYujJlUX.js";import"./TableOfContent-LFDpO9Nu.js";import"./_baseForOwn-a7AeJH13.js";import"./mapValues-_kP3xGjM.js";import"./_baseUniq-_JZHYp0e.js";import"./index-PPLHz8o0.js";import"./index-7I0hdIjK.js";import"./spacing-ftLAC4UG.js";import"./index-5Xrypv0F.js";import"./index-WhQEMAxe.js";function Yt(i={}){const{wrapper:r}=Object.assign({},m(),i.components);return r?t.jsx(r,Object.assign({},i,{children:t.jsx(e,{})})):e();function e(){const o=Object.assign({h2:"h2",h1:"h1",pre:"pre",code:"code"},m(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:x}),`
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
