import{j as t}from"./useIsomorphicLayoutEffect-7J8kFyWS.js";import{useMDXComponents as m}from"./index-CcnH5Kt0.js";import{ae as p,af as r}from"./index-B-AngSPK.js";import"./index-Ch-3pTRx.js";import{C as a}from"./ControlsWithNote-CpOEJXkb.js";import{D as s}from"./DocsHeader-DYY-sRhn.js";import{F as d}from"./CommandsAndQueries-BSQYQ84a.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-CPfyDR0N.js";import{C as l,D as e,W as x}from"./Loader.stories-DMhf7jnw.js";import"./iframe-X6OaFm5F.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-BBslp21L.js";import"./_overArg-Der2MB70.js";import"./_baseAssignValue-PZ39NPQP.js";import"./_getPrototype-DY0Wt4dR.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./withWebComponent-BleJzMHW.js";import"./utils-CbJpFptd.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-KW-CiiAm.js";import"./decline-DaNSpODU.js";import"./Icon-cdsHodQj.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-BI-0aVN0.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-Bqpi1ZNd.js";import"./alert-Dp7xx3y-.js";import"./class-map-YSvXIJay.js";import"./Button-CzQBqyV3.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-BcJ5FyXk.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DiipWok5.js";import"./main-BPTHlokf.js";import"./index-DExzD3yc.js";import"./Tag-slJw32D6.js";import"./sys-help-2-CqKkuKIb.js";import"./index-Cp80_wRL.js";import"./Popover-Ct8sSLXj.js";import"./PopupsCommon.css-CsQvfR_e.js";import"./getEffectiveScrollbarStyle-rfURrg3V.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BHDEwerY.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-d6w1xEQV.js";import"./BrowserScrollbar.css-BhKYIigu.js";import"./index-BXhdr5Bu.js";import"./Link-CBIZg36-.js";import"./chunk-HLWAVYOI-DiXkNbzq.js";import"./client-BZNFO7bv.js";import"./copy-DUwpd8zK.js";import"./copy-DTSjPlEM.js";import"./index-CLe8_13Z.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BgRQTyXM.js";import"./index-BOF0KrAg.js";import"./I18nStore-CNuzcpPo.js";import"./GitHub-Mark-CQnSG1yZ.js";import"./TableOfContent-B6vxzEs5.js";import"./index-DErfyCMe.js";import"./Label-T0qa9MPE.js";import"./index-DblZcT2P.js";import"./index-_qk-Qxu8.js";import"./addCustomCSSWithScoping-_XdCpGk6.js";import"./index-gsw8a_fJ.js";import"./BusyIndicator-BjQNe4BH.js";import"./index-prJb6WTu.js";import"./index-Cbf91Cs_.js";import"./Avatar-DNQIjfCz.js";import"./employee-DbTd0Cfn.js";import"./i18n-defaults-CCkZO5TM.js";import"./index-BV56A1ZX.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
