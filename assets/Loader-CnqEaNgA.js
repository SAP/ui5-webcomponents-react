import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{F as a}from"./ProjectTemplate-d3YKANE6.js";import{C as s}from"./ControlsWithNote-kCIumvrz.js";import{D as d}from"./DocsHeader-d1H_ezaT.js";import"./index-OjgoNOWw.js";import{M as l,b as n}from"./index-Ao1ZYrem.js";import{C as x,D as p,W as c}from"./Loader.stories-f7c6x9Pk.js";import{u as m}from"./index-RwE9nQVW.js";import"./react-jss.esm-fzYOEaou.js";import"./theming.esm-g_6oAtQL.js";import"./index-K4mekr_f.js";import"./iframe-PMMZ518-.js";import"../sb-preview/runtime.js";import"./UI5Element-9EXj3atz.js";import"./Boot-vTaFuwdG.js";import"./VersionInfo-ldzxTIVv.js";import"./CustomElementsScopeUtils-orabJqjR.js";import"./withWebComponent-LTFbYRvs.js";import"./utils-d3BcYjeO.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./event-lM5HanI-.js";import"./i18nBundle-j8vDD4VY.js";import"./decline-j4MODHQ_.js";import"./Icons-Vbmmw7bO.js";import"./i18n-defaults-9hHjZPfp.js";import"./information-6141dtH3.js";import"./alert--0SE21sY.js";import"./class-map-gjOVarQw.js";import"./Icon-kyep1SqZ.js";import"./Keys-ZEuNsqmZ.js";import"./parameters-bundle.css-EKzfhWK3.js";import"./Button-DcwyQdV9.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./willShowContent-MSvI8sYo.js";import"./HasPopup-9BAMrqbD.js";import"./i18n-defaults-X1FTyPSK.js";import"./chunk-HLWAVYOI-NOMEL9H8.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./index-xrvtQWKa.js";import"./clsx-Zbgk8kpT.js";import"./index-QivDDrX6.js";import"./Label-mY98SzPQ.js";import"./WrappingType-avPrqc94.js";import"./index-7U6i-hY5.js";import"./index-Gsdtj5yy.js";import"./Link-9XR0tYIs.js";import"./index-RZo07tSP.js";import"./Popover-Yl5FRmf7.js";import"./Integer-kog98579.js";import"./PopupUtils-kUkkQSCb.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-xzQQME9v.js";import"./FocusableElements-xTkOlDEw.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./ResizeHandler-_qRzLmqT.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-tejh5TI3.js";import"./BrowserScrollbar.css-wlj1ktzG.js";import"./index-FxYIONdV.js";import"./i18n-defaults-Ph_9MK3s.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-jMtIn_eL.js";import"./useStylesheet-MWHnOiB7.js";import"./ModalsContext-T9gUbaXC.js";import"./addCustomCSSWithScoping-ZfvsxM11.js";import"./index-1lyT4aqB.js";import"./index-fg87cUnO.js";import"./Avatar-tUVXUHcz.js";import"./employee-EyN-jrGw.js";import"./index-hIv8iOq4.js";import"./utils-1niDedQ3.js";import"./index-RKnyMgEz.js";import"./sys-help-2-QhGERdVJ.js";import"./copy-hCLuyOUN.js";import"./GitHub-Mark-JYujJlUX.js";import"./TableOfContent-RtWcUKFi.js";import"./_baseForOwn-a7AeJH13.js";import"./mapValues-_kP3xGjM.js";import"./_baseUniq-_JZHYp0e.js";import"./index-PPLHz8o0.js";import"./index-7I0hdIjK.js";import"./spacing-ftLAC4UG.js";import"./index-cOpx4aWP.js";import"./index-XRg6augb.js";function Qt(i={}){const{wrapper:r}=Object.assign({},m(),i.components);return r?t.jsx(r,Object.assign({},i,{children:t.jsx(e,{})})):e();function e(){const o=Object.assign({h2:"h2",h1:"h1",pre:"pre",code:"code"},m(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:x}),`
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
