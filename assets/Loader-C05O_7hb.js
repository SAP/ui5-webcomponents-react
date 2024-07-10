import{j as t}from"./useIsomorphicLayoutEffect-CC_9R8NV.js";import{useMDXComponents as m}from"./index-3-_tf5dF.js";import{M as p,C as r}from"./index-DCe9hKTd.js";import{C as a}from"./ControlsWithNote-CNwziGBl.js";import{D as s}from"./DocsHeader-CLeE0F-e.js";import{F as d}from"./ProjectTemplate-CnfFx7fc.js";import"./index-BP8_t0zE.js";import{C as l,D as e,W as x}from"./Loader.stories-CtcJTxCH.js";import"./iframe-K9ZPOBS-.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-DoXAX_z0.js";import"./main-HWtSBowW.js";import"./index-DsOqujCP.js";import"./UI5Element-DYuDwSfb.js";import"./Boot--nQrAl1V.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScope-muWBOMD2.js";import"./withWebComponent-BtiFbjTX.js";import"./utils-A9XecSn_.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-zzLYNekx.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-D7AkHrnr.js";import"./Icons-Bp1YSqwb.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-P3lSuE--.js";import"./sys-help-2-w5eNxsCQ.js";import"./information-C8CMIM2W.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-GCtO51nh.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-B_qME8Ot.js";import"./index-0sOo1Jhc.js";import"./decline-BAFEOGpp.js";import"./class-map-DRsidP3Z.js";import"./Button-CWBaZ7ro.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./index-weJqy25G.js";import"./Popover-fF8jtMoy.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-BKIoEsVZ.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-CjoatB38.js";import"./FocusableElements-Duwi--Bv.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-CI3zUPmr.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-Cq34otsJ.js";import"./BrowserScrollbar.css-DtDsFaw-.js";import"./index-lqfu6sXD.js";import"./Link-C6bYFqpr.js";import"./chunk-HLWAVYOI-DOGZlFEp.js";import"./client-Di-4O7We.js";import"./copy-C3s9MmBF.js";import"./index-CzPEDdfg.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BSPa2dAP.js";import"./index-WspRYDV-.js";import"./i18n-defaults-BqW0kOHN.js";import"./I18nContext-RJHUyvz-.js";import"./index-Cqf388Vu.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./GitHub-Mark-CwcbC11_.js";import"./TableOfContent-3S1XAVFG.js";import"./index-DRuGOEJb.js";import"./Label-BsQWgLJi.js";import"./index-Cqc2lMTm.js";import"./addCustomCSSWithScoping-BbKd266_.js";import"./index-DIKijyLT.js";import"./index-ClldIo8k.js";import"./Avatar-BS_WXaxR.js";import"./employee-CGxftPv4.js";import"./index-CXTSylkh.js";import"./spacing-Bgb-YkCp.js";import"./index-CWfYIZjT.js";import"./index-BPVbPLDC.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
`,t.jsx(d,{})]})}function Kt(i={}){const{wrapper:o}={...m(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(n,{...i})}):n(i)}export{Kt as default};
