import{j as t}from"./useIsomorphicLayoutEffect-BDy32gDd.js";import{useMDXComponents as m}from"./index-D3szj05g.js";import{M as p,C as r}from"./index-BP0tp6sA.js";import"./index-CpjS3nZJ.js";import{C as a}from"./ControlsWithNote-WHJ8UGmH.js";import{D as s}from"./DocsHeader-CzxmL00j.js";import{F as d}from"./CommandsAndQueries-C5gTxcCb.js";import"./index-ClU-Tc1p.js";import"./WrappingType-CW8URInd.js";import{C as l,D as e,W as x}from"./Loader.stories-Cv5Q_1zC.js";import"./iframe-BFVv-vsm.js";import"../sb-preview/runtime.js";import"./index-C3ZJCerc.js";import"./_baseForOwn-CS3BKc8p.js";import"./mapValues-DmWmqx7o.js";import"./_baseUniq-DGAWXpCf.js";import"./index-BRTKD46C.js";import"./index-DrFu-skq.js";import"./withWebComponent--2-UXDGX.js";import"./utils-DLW1sA5D.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-d4QydjzH.js";import"./decline-D1QcXBrl.js";import"./Icon-uF1AIezb.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-BflNsp1k.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CEQaAj6E.js";import"./information-DOrNCQ6l.js";import"./alert-RJboOX4N.js";import"./class-map-Oct9Grst.js";import"./Button-BSGOQMBD.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-CY90T2oA.js";import"./TagDesign-Dou_yO3g.js";import"./utils-C6QUo0aU.js";import"./main-BPTHlokf.js";import"./index-CglwtmF8.js";import"./Tag-BGV0RLgG.js";import"./sys-help-2-Ceay95o3.js";import"./index-XjkuyiAR.js";import"./Popover-CQErUPF9.js";import"./PopupsCommon.css-C72k6bm-.js";import"./getEffectiveScrollbarStyle-Br73qKwi.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-rKzABZ14.js";import"./MediaRange-Bnzt26Xb.js";import"./Title-BuvIaMNd.js";import"./style-map-_S7pHwug.js";import"./BrowserScrollbar.css-BWLGETwt.js";import"./index-BbSxE2we.js";import"./Link-Mzj3wSV5.js";import"./chunk-HLWAVYOI-D6tgB48h.js";import"./client-B23sEKGq.js";import"./copy-C5fIvxWD.js";import"./copy-9e4iEp3h.js";import"./index-DG6x88aM.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-Dw38joME.js";import"./index-CwK4hzKA.js";import"./I18nStore-DDVmdcy1.js";import"./GitHub-Mark-9wNGlhWh.js";import"./TableOfContent-D-B3MH3e.js";import"./index-CBSnUv2F.js";import"./Label-BByfo__S.js";import"./index-B1dq4JQQ.js";import"./index-9-KpZ2S6.js";import"./addCustomCSSWithScoping-BAXItpVh.js";import"./index-CYSz5_f-.js";import"./BusyIndicator-B3EKab9f.js";import"./index-BJJQOsHG.js";import"./index-BpYnUsLx.js";import"./Avatar-CILPVfd6.js";import"./employee-WB48gXgq.js";import"./i18n-defaults-DoTeKbzB.js";import"./index-CyXbH6nV.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
`,t.jsx(d,{})]})}function It(i={}){const{wrapper:o}={...m(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(n,{...i})}):n(i)}export{It as default};
