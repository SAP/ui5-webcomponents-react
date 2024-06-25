import{j as t}from"./useIsomorphicLayoutEffect-5feXxxyy.js";import{useMDXComponents as m}from"./index-Bql5lgBm.js";import{M as p,C as r}from"./index-hvJrYNbk.js";import"./index-Dr22JDIR.js";import{C as a}from"./ControlsWithNote-CNxtZDH9.js";import{D as s}from"./DocsHeader-Ckjei5_Y.js";import{F as d}from"./ProjectTemplate-BBlp-fxM.js";import"./index-CP2MHerv.js";import"./WrappingType-CW8URInd.js";import{C as l,D as e,W as x}from"./Loader.stories-DaHBcBjO.js";import"./iframe-aAEtqIR4.js";import"../sb-preview/runtime.js";import"./index-CUD6gg2y.js";import"./_baseForOwn-39ViRbo3.js";import"./mapValues-BafCeOy3.js";import"./_baseUniq-D4fCGXIX.js";import"./index-DBvbnR2h.js";import"./index-DrFu-skq.js";import"./UI5Element-DFWAHaHd.js";import"./Boot-Bc3-yGxv.js";import"./EventProvider-CVfkyUHo.js";import"./CustomElementsScopeUtils-u88Ac6A7.js";import"./withWebComponent-9h-zTtgT.js";import"./utils-CGfXuD-n.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-X-a5Hvm9.js";import"./decline-DOPX1W-e.js";import"./Icons-o-g_t4X3.js";import"./i18n-defaults-CXs2tJOZ.js";import"./information-D2w0wkAo.js";import"./alert-RYmCrbKT.js";import"./class-map-_DPQQvzZ.js";import"./Icon-CfJM8OQU.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-DQGkr9pp.js";import"./Button-CxOzesRb.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-DUjPXQIq.js";import"./TagDesign-Dou_yO3g.js";import"./utils-BUulfJcw.js";import"./main-gIccE3pA.js";import"./index-D62Zy7n_.js";import"./Tag-CTNRs9M0.js";import"./sys-help-2-nFCNh-Xc.js";import"./index-C_lShqQa.js";import"./Popover-DNhju5aN.js";import"./Integer-DgRYWdxf.js";import"./PopupsCommon.css-32Lkpc5h.js";import"./FocusableElements-T7dKq3am.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-C9Gw3xFv.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-C8zHoaTp.js";import"./BrowserScrollbar.css-BGBIr9gH.js";import"./index-BSspOzd6.js";import"./Link-D-Keu3Ox.js";import"./chunk-HLWAVYOI-BSFQJ9xd.js";import"./client-CeotCdvV.js";import"./copy-B1GUjixQ.js";import"./copy-Bux_XWOJ.js";import"./index-B5D3uFwJ.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DIoLZaP8.js";import"./index-DJHd8BMW.js";import"./i18n-defaults-BCHmAjec.js";import"./I18nContext-BwNxpyJO.js";import"./index-89I0sryf.js";import"./ModalsContext-CA2qjtQ6.js";import"./useIsomorphicId-BGiUoP5x.js";import"./GitHub-Mark-jOGaUROA.js";import"./TableOfContent-BAB4VFNp.js";import"./index-BHx8cH4Q.js";import"./Label-CQwdEkIw.js";import"./index-D10UBqQI.js";import"./addCustomCSSWithScoping-DKVM2fpC.js";import"./index-BYFez9YP.js";import"./index-DVaVLOtP.js";import"./index-CDEI14Sf.js";import"./Avatar-BoA_L-fM.js";import"./employee-CzaM-cwk.js";import"./spacing-Bgb-YkCp.js";import"./index-UYhkw38-.js";import"./index-Bh3rbvgQ.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
`,t.jsx(d,{})]})}function Qt(i={}){const{wrapper:o}={...m(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(n,{...i})}):n(i)}export{Qt as default};
