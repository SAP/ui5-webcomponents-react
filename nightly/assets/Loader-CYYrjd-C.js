import{j as t}from"./useIsomorphicLayoutEffect-7J8kFyWS.js";import{useMDXComponents as m}from"./index-CcnH5Kt0.js";import{ae as p,af as r}from"./index-DLTEi3_F.js";import"./index-C0gbcJ1P.js";import{C as a}from"./ControlsWithNote-Bj4pS2r6.js";import{D as s}from"./DocsHeader-ea_mMjjy.js";import{F as d}from"./CommandsAndQueries-BUghogff.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import{C as l,D as e,W as x}from"./Loader.stories-XDUvEkrG.js";import"./iframe-nYZ7X8iE.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-BBslp21L.js";import"./_overArg-Der2MB70.js";import"./_baseAssignValue-PZ39NPQP.js";import"./_getPrototype-DY0Wt4dR.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./withWebComponent-GNT2PXey.js";import"./utils-CcgiHsei.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BqO_ndMU.js";import"./decline-Bc8xWa4t.js";import"./Icon-BhzwmwWz.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-B9dCEi48.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CEQaAj6E.js";import"./information-CO9BdrhZ.js";import"./alert-DWttAQXl.js";import"./class-map-_G2Y84x0.js";import"./Button-Cvy14OjO.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-BaleIpCT.js";import"./TagDesign-Dou_yO3g.js";import"./utils-BudshB_u.js";import"./main-BPTHlokf.js";import"./index-Ccf0PhA3.js";import"./Tag-Dihe5M3w.js";import"./sys-help-2-CUJdqIsS.js";import"./index-DPmud4Gc.js";import"./Popover-BcjI4r72.js";import"./PopupsCommon.css-DE8Wza_j.js";import"./getEffectiveScrollbarStyle-UFcPsH0e.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-XK3zSnEF.js";import"./MediaRange-Bnzt26Xb.js";import"./Title-B2Pwek_1.js";import"./style-map-DYn2sBEk.js";import"./BrowserScrollbar.css-LN7L1p37.js";import"./index-BUs6Zh1-.js";import"./Link-YAV9tZDK.js";import"./chunk-HLWAVYOI-DtN6HVzD.js";import"./client-BZNFO7bv.js";import"./copy-DLqHYH0g.js";import"./copy-BGQQIC81.js";import"./index-CLe8_13Z.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BgRQTyXM.js";import"./index-DCYhXUzl.js";import"./I18nStore-CGmCejYo.js";import"./GitHub-Mark-CQnSG1yZ.js";import"./TableOfContent-B6vxzEs5.js";import"./index-Cn8P5wWd.js";import"./Label-emsTVYba.js";import"./index-kPamIMU2.js";import"./index-DZRFMbC7.js";import"./addCustomCSSWithScoping-BR-0f_u5.js";import"./index-Hx7nk4Dr.js";import"./BusyIndicator-BRwQ1wd3.js";import"./index-Cotdq9kj.js";import"./index-CYyWICrk.js";import"./Avatar-BNYvS_OM.js";import"./employee-DAkvclYj.js";import"./i18n-defaults-CzMABS5b.js";import"./index-xzUeikat.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
`,t.jsx(s,{}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(r,{of:e}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(a,{of:e}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h1,{id:"more-examples",children:"More Examples"}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"card-with-loader",children:"Card with Loader"}),`
`,t.jsx(r,{of:x}),`
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
`,t.jsx(d,{})]})}function Rt(i={}){const{wrapper:o}={...m(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(n,{...i})}):n(i)}export{Rt as default};
