import{j as t}from"./useIsomorphicLayoutEffect-DvGGtHJq.js";import{useMDXComponents as m}from"./index-3-_tf5dF.js";import{M as p,C as r}from"./index--T7WpkkW.js";import{C as a}from"./ControlsWithNote-Bns57EG6.js";import{D as s}from"./DocsHeader-CFj0UfHK.js";import{F as d}from"./ProjectTemplate-CJllqwz5.js";import"./index-BP8_t0zE.js";import{C as l,D as e,W as x}from"./Loader.stories-CFPbZ4KD.js";import"./iframe-BqnnHtrP.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./index-CkZ7NgZn.js";import"./UI5Element-infrDpAf.js";import"./Boot-DcdhI_RK.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScope-Dt2MhVrA.js";import"./withWebComponent-Czp6OQvU.js";import"./utils-lAiJ6aRh.js";import"./slot-Df15G--e.js";import"./event-CegLCnR0.js";import"./i18nBundle-B0EGx0z0.js";import"./decline-CV74VQxx.js";import"./Icons-BFUWD3ZY.js";import"./i18n-defaults-BdfZArTM.js";import"./information-D3hZp6VX.js";import"./alert-Byts_AR-.js";import"./class-map-DfcPub6e.js";import"./Icon-BkC3Ogwn.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-6UUskKkY.js";import"./Button-DKDZYIHc.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./Tooltips-BHdqPbjc.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-h9yeeTQy.js";import"./chunk-HLWAVYOI-CPEPKB62.js";import"./client-Di-4O7We.js";import"./copy-Bqd9q-RL.js";import"./index-oNko3MXv.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DWFaJupJ.js";import"./index-DMnhoXDr.js";import"./i18n-defaults-i2-x_YLi.js";import"./I18nContext-RJHUyvz-.js";import"./index-C94UiMU3.js";import"./ThemingParameters-pyhX3s39.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./utils-62fEIYF3.js";import"./main-HWtSBowW.js";import"./GitHub-Mark-Dq260Kwm.js";import"./TableOfContent-nCnKioMQ.js";import"./index-DkMZbiOL.js";import"./Link-CFu6ETcl.js";import"./WrappingType-CW8URInd.js";import"./index-DlwMO8AW.js";import"./Label-CfM8R4Pi.js";import"./index-TeWI8zc9.js";import"./index-C1r-v56s.js";import"./sys-help-2-D3V3v6Ov.js";import"./index-tB9F6Qj5.js";import"./Popover-_-p9RFGN.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DbhQg9BC.js";import"./getActiveElement-BL9Yqj8a.js";import"./getEffectiveScrollbarStyle-BIR1dSFp.js";import"./PopupsCommon.css-Bjwtaph5.js";import"./FocusableElements-Bm8VlCBw.js";import"./isElementHidden-Bpu2V8BK.js";import"./ResizeHandler-DMczlk5E.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-Bl1Jni_s.js";import"./addCustomCSSWithScoping-BRtIHklr.js";import"./index-CWw44QoS.js";import"./index-eBe1fr1x.js";import"./Avatar-CPYvyFBz.js";import"./employee-0nfTRhP-.js";import"./index-YX2K6Gl5.js";import"./spacing-Bgb-YkCp.js";import"./index-Bj_aGcHm.js";import"./index-DWZnENUk.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
