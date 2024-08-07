import{j as t}from"./useIsomorphicLayoutEffect-BDy32gDd.js";import{useMDXComponents as m}from"./index-D3szj05g.js";import{M as p,C as r}from"./index-BwLy9Tk1.js";import"./index--WwEKu0j.js";import{C as a}from"./ControlsWithNote-BAi9Dw8_.js";import{D as s}from"./DocsHeader-Cb8BYRQB.js";import{F as d}from"./CommandsAndQueries-Df_AYko3.js";import"./index-ClU-Tc1p.js";import"./WrappingType-CW8URInd.js";import{C as l,D as e,W as x}from"./Loader.stories-C6anBTYJ.js";import"./iframe-CnktcOiE.js";import"../sb-preview/runtime.js";import"./index-C3ZJCerc.js";import"./_baseForOwn-CS3BKc8p.js";import"./mapValues-DmWmqx7o.js";import"./_baseUniq-DGAWXpCf.js";import"./index-BRTKD46C.js";import"./index-DrFu-skq.js";import"./withWebComponent-CPW0iYAf.js";import"./utils-B4B9qFe5.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-shm5Q6c6.js";import"./decline-P6ltvR0I.js";import"./Icon-BIxZr4TA.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-BCPYWAh1.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CEQaAj6E.js";import"./information-B1l_cM6v.js";import"./alert-C2BbHj1C.js";import"./class-map-CQfLTfub.js";import"./Button-BsDFAdhY.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-DRoh8QZU.js";import"./TagDesign-Dou_yO3g.js";import"./utils-BZzBag95.js";import"./main-BPTHlokf.js";import"./index-BcwHGqqZ.js";import"./Tag-DtnL08Wh.js";import"./sys-help-2-BBmaRS7Q.js";import"./index-CIa2aWdS.js";import"./Popover-C804Stt9.js";import"./PopupsCommon.css-C-wswpgh.js";import"./getEffectiveScrollbarStyle-BsLHc2Qj.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-TnLd8hOy.js";import"./MediaRange-Bnzt26Xb.js";import"./Title-qjobRWCv.js";import"./style-map-Do0KrzH5.js";import"./BrowserScrollbar.css-Cvy61GCB.js";import"./index-mwufEXn3.js";import"./Link-B2-sZImF.js";import"./chunk-HLWAVYOI-DuegjcuF.js";import"./client-B23sEKGq.js";import"./copy-CGC9ELhw.js";import"./copy-alp5yJPT.js";import"./index-DG6x88aM.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-Dw38joME.js";import"./index-BeBqIGFU.js";import"./I18nStore-e1UZgw_b.js";import"./GitHub-Mark-9wNGlhWh.js";import"./TableOfContent-B8cqn-GQ.js";import"./index-Bkt4nOY5.js";import"./Label-BcgafC0L.js";import"./index-DEJu3efP.js";import"./index-RZoDU-7t.js";import"./addCustomCSSWithScoping-BIehpVOD.js";import"./index-THdH03HC.js";import"./BusyIndicator-C9Q0CDgp.js";import"./index-D0rJ005z.js";import"./index-ozvUqlmw.js";import"./Avatar-DrCFK53V.js";import"./employee-Bjf4oLVT.js";import"./i18n-defaults-DsJMQecB.js";import"./index-DU6MGJqo.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
