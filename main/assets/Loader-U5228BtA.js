import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{F as a}from"./ProjectTemplate-0DIhy4Zv.js";import{C as s}from"./ControlsWithNote-9YQfUgGg.js";import{D as d}from"./DocsHeader-DS_ti-N3.js";import"./index-OjgoNOWw.js";import{M as l,C as n}from"./chunk-HLWAVYOI-9X0_BJw1.js";import{C as x,D as p,W as c}from"./Loader.stories-h9t0KGjv.js";import{u as m}from"./index-RwE9nQVW.js";import"./react-jss.esm-tmBtHfec.js";import"./index-u5W4IjKX.js";import"./iframe-pB3lLiEW.js";import"../sb-preview/runtime.js";import"./UI5Element-oLeGfnU4.js";import"./Language-aesXCmkP.js";import"./VersionInfo-AzzP9wS2.js";import"./CustomElementsScopeUtils-IpwVqUeG.js";import"./withWebComponent--kEkWNJH.js";import"./utils-rNFQc6Ui.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./event-lM5HanI-.js";import"./i18nBundle-YvxCnun_.js";import"./decline-pTlhPVol.js";import"./Icons-B0Lm9Xgp.js";import"./i18n-defaults-iZnAAWr4.js";import"./information-HjlDBfcs.js";import"./alert-xBUzpOmY.js";import"./class-map-Y-YjCFqX.js";import"./Icon-s-QlKO5-.js";import"./Keys-ZEuNsqmZ.js";import"./parameters-bundle.css-mPCp9TQx.js";import"./Button-MUpci_CC.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./willShowContent-MSvI8sYo.js";import"./HasPopup-9BAMrqbD.js";import"./i18n-defaults-HIa-lgkZ.js";import"./index-6OPsdmYb.js";import"./clsx-Zbgk8kpT.js";import"./index-QYh6idnL.js";import"./index-u1Ak3rma.js";import"./Label-Q5XT_dC3.js";import"./WrappingType-avPrqc94.js";import"./index-OoOX5Q4A.js";import"./index-mmJHKZmv.js";import"./Link-15HXWd6H.js";import"./index-OGMzcOX6.js";import"./Popover-RS8IZQFL.js";import"./Integer-kog98579.js";import"./PopupUtils-7MJMGT2m.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-umKiUwKH.js";import"./FocusableElements-o5zpB6FE.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./ResizeHandler-pk5_zz-J.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-5njKSr-C.js";import"./BrowserScrollbar.css-nSPAj6kk.js";import"./index-YN01GDwL.js";import"./i18n-defaults-1NWI3C8K.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-DSFr9BrM.js";import"./ModalsContext-T9gUbaXC.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-0Qf_GZqW.js";import"./index-42nEX1wp.js";import"./index-vmyOhCCy.js";import"./Avatar-CYVVssoh.js";import"./employee-PrBJTXfy.js";import"./index-Yj8k1Le-.js";import"./index-wiu8yYOE.js";import"./sys-help-2-KdHoR5uo.js";import"./GitHub-Mark-JYujJlUX.js";import"./TableOfContent-WPNDH9IP.js";import"./react-18-1WT2dSvK.js";import"./_baseForOwn-a7AeJH13.js";import"./mapValues-_kP3xGjM.js";import"./_baseUniq-_JZHYp0e.js";import"./index-PPLHz8o0.js";import"./index-7I0hdIjK.js";import"./spacing-ftLAC4UG.js";import"./index-RcaLHvsL.js";import"./index-4Xp3nZk1.js";function Jt(i={}){const{wrapper:r}=Object.assign({},m(),i.components);return r?t.jsx(r,Object.assign({},i,{children:t.jsx(e,{})})):e();function e(){const o=Object.assign({h2:"h2",h1:"h1",pre:"pre",code:"code"},m(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:x}),`
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
`,t.jsx(a,{})]})}}export{Jt as default};
