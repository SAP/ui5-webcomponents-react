import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as m}from"./index-BxVt_j7t.js";import{ae as p,af as e}from"./index-SOSoFBiZ.js";import"./index-DK8f7i65.js";import"./index-nQu6v35F.js";import{C as a}from"./ControlsWithNote-CpSZhjWX.js";import{D as s}from"./DocsHeader-DwaU3kI5.js";import{F as d}from"./CommandsAndQueries-B84QIori.js";import"./index-B7gF9TUu.js";import"./WrappingType-CW8URInd.js";import"./Title-WNL10KUu.js";import{C as l,D as r,W as x}from"./Loader.stories-Z_geS1T4.js";import"./iframe-hSj7jUWG.js";import"../sb-preview/runtime.js";import"./index-CE_NGgsP.js";import"./index-DHaMx3uI.js";import"./index-DrFu-skq.js";import"./withWebComponent-B0663feL.js";import"./utils-BHIgGaqO.js";import"./useIsomorphicLayoutEffect-DbLUS4-D.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./decline-Dufzc9Ae.js";import"./Icon-DBJtwtpU.js";import"./Keys-CAuuEE_3.js";import"./parameters-bundle.css-DlWxkghp.js";import"./i18n-defaults-neJWcM66.js";import"./information-CILnO36f.js";import"./alert-Z1fiX1-e.js";import"./class-map-C6tyMXoZ.js";import"./Button-D9IHaDB-.js";import"./AccessibilityTextsHelper-Beeze-lh.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BP6vP6oY.js";import"./i18n-defaults-B_32hVC3.js";import"./TagDesign-Dou_yO3g.js";import"./utils-bphUwSpa.js";import"./main-BwlHOnYP.js";import"./index-DFb0YsWo.js";import"./Tag-BUVp9nj2.js";import"./sys-help-2-BiT1oqNK.js";import"./index-nTxbmOyz.js";import"./Popover-msUg67Np.js";import"./PopupsCommon.css-Dj0xrk9H.js";import"./FocusableElements-DTl1isII.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-xhBJDreD.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-uCTHCAWY.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-gaVbNe_i.js";import"./Link-CpBj26Uf.js";import"./chunk-NUUEMKO5-B0Rnmek0.js";import"./client-DPlujwLe.js";import"./copy-BrFaHfmM.js";import"./copy-C_CjAe8T.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-D5efYGjp.js";import"./TableOfContent-DCqtbPc-.js";import"./index-Ci29Jt5X.js";import"./I18nStore-DX5SeKlm.js";import"./useStylesheet-BtUg4QTx.js";import"./index-CumkkaaF.js";import"./index-D_YacHjR.js";import"./Label-BoojAdgE.js";import"./index-nKNYXUv1.js";import"./index-DdEMrDoq.js";import"./Text-UwjpUK4f.js";import"./addCustomCSSWithScoping-DFGIdwgf.js";import"./index-dDGTlD2i.js";import"./BusyIndicator-12vkJL71.js";import"./index-BW6gfbnW.js";import"./index-WjQUaYT1.js";import"./Avatar-Z-ciJfNd.js";import"./employee-XwVnUoGs.js";import"./index-Q9xcn8Kh.js";import"./i18n-defaults-NJte4-EH.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
`,t.jsx(s,{}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(e,{of:r}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(a,{of:r}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h1,{id:"more-examples",children:"More Examples"}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"card-with-loader",children:"Card with Loader"}),`
`,t.jsx(e,{of:x}),`
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
`,t.jsx(d,{})]})}function Ut(i={}){const{wrapper:o}={...m(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(n,{...i})}):n(i)}export{Ut as default};
