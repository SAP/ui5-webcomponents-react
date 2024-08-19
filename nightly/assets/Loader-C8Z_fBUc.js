import{j as t}from"./useIsomorphicLayoutEffect-DOdM5Kf8.js";import{useMDXComponents as m}from"./index-BrB9znxi.js";import{ae as p,af as r}from"./index-CCCmMs9w.js";import"./index-Cs3iSmon.js";import{C as a}from"./ControlsWithNote-dV3ZVMUA.js";import{D as s}from"./DocsHeader-DZcg40Yt.js";import{F as d}from"./CommandsAndQueries-BZ1jUYqF.js";import"./index-CMKoANNR.js";import"./WrappingType-CW8URInd.js";import{C as l,D as e,W as x}from"./Loader.stories-TnExjoWR.js";import"./iframe-D4nOB_re.js";import"../sb-preview/runtime.js";import"./index-CJugYjqS.js";import"./_baseUniq-qZQRvdR-.js";import"./_overArg-Mt7ZKpko.js";import"./_baseAssignValue-680W1HJy.js";import"./_getPrototype-CvhAe9S0.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./withWebComponent-BbgN5sxI.js";import"./utils-B91Jjtng.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CwTDKhhX.js";import"./decline-CRs0CuFn.js";import"./Icon-ClAYWRjo.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-BJMHgp7g.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CEQaAj6E.js";import"./information-DxOUV61z.js";import"./alert-QN-C0-di.js";import"./class-map-DWnotN9Q.js";import"./Button-cuQy5RCN.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-jWmICHmQ.js";import"./TagDesign-Dou_yO3g.js";import"./utils-BmMAV2DN.js";import"./main-BPTHlokf.js";import"./index-i0kV4CdX.js";import"./Tag-DV5SP9Oh.js";import"./sys-help-2-Cu5M0nic.js";import"./index-BUWgkKs7.js";import"./Popover-CNg3OGLR.js";import"./PopupsCommon.css-F2oSnJih.js";import"./getEffectiveScrollbarStyle-BM2MSN9M.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DghOwUYf.js";import"./MediaRange-Bnzt26Xb.js";import"./Title-RCwOVsWq.js";import"./style-map-D73I43XI.js";import"./BrowserScrollbar.css-CNIKbe81.js";import"./index-C_6suU6y.js";import"./Link-DDy4Rfx-.js";import"./chunk-HLWAVYOI-C-pslaxs.js";import"./client-DpDvupH-.js";import"./copy-DTi-Y5PU.js";import"./copy-BYxOf-QH.js";import"./index-DNwR1bnO.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BdPJGR6W.js";import"./index-CGvbx4PR.js";import"./I18nStore-3tee64za.js";import"./GitHub-Mark-DCDQJZl8.js";import"./TableOfContent-DYSF1A7E.js";import"./index-CQUfU_qV.js";import"./Label-B16HW9k1.js";import"./index-DYdngNaX.js";import"./index-B-IrwayZ.js";import"./addCustomCSSWithScoping-CgCJVuIw.js";import"./index-BmKO-q3U.js";import"./BusyIndicator-DYwg6ta4.js";import"./index-DvqQRpoZ.js";import"./index-BW4f9_z6.js";import"./Avatar-Dkq5x8aO.js";import"./employee-bAM6jRYC.js";import"./i18n-defaults-CRNHpOhB.js";import"./index-Chz0wAl1.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
