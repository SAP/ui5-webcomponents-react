import{j as t}from"./useIsomorphicLayoutEffect-kTr5k6y8.js";import{useMDXComponents as m}from"./index-yodfxRVR.js";import{M as p,C as r}from"./index-BnKJrDrT.js";import"./index-Dr767vWE.js";import{C as a}from"./ControlsWithNote-CmDlbeKT.js";import{D as s}from"./DocsHeader-CqqzRRy3.js";import{F as d}from"./CommandsAndQueries-DI5XyRZa.js";import"./index-BQ1WsyJB.js";import"./WrappingType-CW8URInd.js";import{C as l,D as e,W as x}from"./Loader.stories-DRc9iQPk.js";import"./iframe-DSY2u4nw.js";import"../sb-preview/runtime.js";import"./index-BLtMylri.js";import"./_baseForOwn-DusBTQ6O.js";import"./mapValues-DfqGXSk1.js";import"./_baseUniq-BpWYsmmS.js";import"./index-Cagd9BgA.js";import"./index-DrFu-skq.js";import"./UI5Element-CpDKvy14.js";import"./CustomElementsScopeUtils-CUyxdJhU.js";import"./withWebComponent-BS5KmJ8y.js";import"./utils-BKwn1mod.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BnWtnlV0.js";import"./decline-U1USmITW.js";import"./Icons-CXhWYR-U.js";import"./i18n-defaults-eVMsPoDe.js";import"./information-Tp9XErmR.js";import"./alert-CzwHodYh.js";import"./class-map-C2xEFFE_.js";import"./if-defined-fOOg8zCW.js";import"./Icon-B_ypp_jl.js";import"./Device-RcFucVeJ.js";import"./Keys-pFVWso__.js";import"./parameters-bundle.css-BFbT_feV.js";import"./Button-BNnZDQ19.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-CTWfTbaq.js";import"./TagDesign-Dou_yO3g.js";import"./utils-cOAgcv71.js";import"./main-CzLLrZqh.js";import"./index-8cofChYn.js";import"./Tag-CEZ3zqRQ.js";import"./sys-help-2-BHmG1jpg.js";import"./index-CLvSIE45.js";import"./Popover-qZ8usbia.js";import"./PopupsCommon.css-Dy04e_xP.js";import"./FocusableElements-Bv7oiNdI.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DrydYuxf.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BYlmazPT.js";import"./BrowserScrollbar.css-BHkuoGam.js";import"./index-1PiQ4fof.js";import"./Link-qJoZgSbT.js";import"./chunk-HLWAVYOI-D59b4eZt.js";import"./client-CM2XqZNc.js";import"./copy-BAvEiGLT.js";import"./copy-SEOB1pIL.js";import"./index-DrLbuP9z.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-CLr2-W5J.js";import"./index-DxXMIf9X.js";import"./I18nStore-CUUv0VZ2.js";import"./ModalsContext-BoMRhsMb.js";import"./useIsomorphicId-8WwglsiH.js";import"./GitHub-Mark-D3Wkw5er.js";import"./TableOfContent-F0yicvL_.js";import"./index-Zhn8S82z.js";import"./Label-q6_PzA5e.js";import"./index-Cwb37R1p.js";import"./index-DhSsqwHT.js";import"./addCustomCSSWithScoping-CgvYqGaR.js";import"./index-DeDIcOBk.js";import"./index-DooJVriu.js";import"./index-CJe2gumX.js";import"./Avatar-3swUBYi8.js";import"./employee-BYHCCK7_.js";import"./i18n-defaults-IgB10zhP.js";import"./index-7niR0t1J.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
`,t.jsx(d,{})]})}function Gt(i={}){const{wrapper:o}={...m(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(n,{...i})}):n(i)}export{Gt as default};
