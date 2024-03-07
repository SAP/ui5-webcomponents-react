import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{F as a}from"./ProjectTemplate-qbLR_GCz.js";import{C as s}from"./ControlsWithNote-pJsVsakK.js";import{D as d}from"./DocsHeader-xlakKj2X.js";import"./index-OjgoNOWw.js";import{M as l,b as n}from"./index-j464sglR.js";import{C as x,D as p,W as c}from"./Loader.stories-BNACjz5p.js";import{u as m}from"./index-RwE9nQVW.js";import"./react-jss.esm-fzYOEaou.js";import"./theming.esm-g_6oAtQL.js";import"./index-gbwDuwvH.js";import"./iframe-lvTVDQ9h.js";import"../sb-preview/runtime.js";import"./UI5Element-i6xEMhb-.js";import"./Boot-ZMdbUkXu.js";import"./VersionInfo-szri6OiK.js";import"./CustomElementsScopeUtils-E-jGiXBT.js";import"./withWebComponent-WsMVk7rH.js";import"./utils-TqRdq3Pf.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./event-lM5HanI-.js";import"./i18nBundle-QOmUTBjc.js";import"./decline-9_Y3Taaa.js";import"./Icons-2Vjs2kvs.js";import"./i18n-defaults-SIMqfZL6.js";import"./information-5Caf1O3N.js";import"./alert-80rGR3Mk.js";import"./class-map-QoPRPm_o.js";import"./Icon-ONjMh5dV.js";import"./Keys-ZEuNsqmZ.js";import"./parameters-bundle.css-I2VxmuZZ.js";import"./Button-2HS1JCrT.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./willShowContent-MSvI8sYo.js";import"./HasPopup-9BAMrqbD.js";import"./i18n-defaults-KFYnnpmz.js";import"./chunk-HLWAVYOI-DP7TsRBw.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./index-mlUqNAao.js";import"./clsx-Zbgk8kpT.js";import"./index-jdIcBaoB.js";import"./Label-6T3Q5KMo.js";import"./WrappingType-avPrqc94.js";import"./index-cT5HpiGU.js";import"./index-Xa57At0r.js";import"./Link-gyEWjMqm.js";import"./index-dP23692m.js";import"./Popover-AJDeb5lw.js";import"./Integer-kog98579.js";import"./PopupUtils--F87unyw.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-D70R2m1B.js";import"./FocusableElements--mw2hLMH.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./ResizeHandler-_spraO4D.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-T1SBcBMD.js";import"./BrowserScrollbar.css-amc9gXm3.js";import"./index-PT67_7v6.js";import"./i18n-defaults-EsDEVf23.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-6DfCcktU.js";import"./useStylesheet-XCSdJTxH.js";import"./ModalsContext-T9gUbaXC.js";import"./addCustomCSSWithScoping-4CvfEWOd.js";import"./index-NUaykFCm.js";import"./index-H6PC_dgE.js";import"./Avatar-JeSMkDk4.js";import"./employee-ld-8O_mW.js";import"./index-vhLKbz8Z.js";import"./utils-VqKQ_frK.js";import"./index-AmH08eER.js";import"./sys-help-2-qc_mQq4z.js";import"./copy-GXCl5_6q.js";import"./GitHub-Mark-JYujJlUX.js";import"./TableOfContent-y65RKmKK.js";import"./_baseForOwn-a7AeJH13.js";import"./mapValues-_kP3xGjM.js";import"./_baseUniq-_JZHYp0e.js";import"./index-PPLHz8o0.js";import"./index-7I0hdIjK.js";import"./spacing-ftLAC4UG.js";import"./index-nDRV897P.js";import"./index-ZLssTuGc.js";function Qt(i={}){const{wrapper:r}=Object.assign({},m(),i.components);return r?t.jsx(r,Object.assign({},i,{children:t.jsx(e,{})})):e();function e(){const o=Object.assign({h2:"h2",h1:"h1",pre:"pre",code:"code"},m(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:x}),`
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
