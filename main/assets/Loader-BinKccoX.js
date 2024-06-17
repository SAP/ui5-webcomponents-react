import{j as t}from"./useIsomorphicLayoutEffect-CJg151Ok.js";import{useMDXComponents as m}from"./index-Bql5lgBm.js";import{M as p,C as r}from"./index-woryHbl4.js";import"./index-CGA2N5rz.js";import{C as a}from"./ControlsWithNote-B8bEFpKs.js";import{D as s}from"./DocsHeader-fC1AKUj7.js";import{F as d}from"./ProjectTemplate-BRpJlKL-.js";import"./index-CP2MHerv.js";import"./WrappingType-CW8URInd.js";import{C as l,D as e,W as x}from"./Loader.stories-D1K0_iWd.js";import"./iframe-BWEc3B5t.js";import"../sb-preview/runtime.js";import"./index-CUD6gg2y.js";import"./_baseForOwn-39ViRbo3.js";import"./mapValues-BafCeOy3.js";import"./_baseUniq-D4fCGXIX.js";import"./index-DBvbnR2h.js";import"./index-DrFu-skq.js";import"./UI5Element-D1gTBhJw.js";import"./Boot-CUKJMqeB.js";import"./EventProvider-CVfkyUHo.js";import"./CustomElementsScopeUtils-Br5bzw3_.js";import"./withWebComponent-BqYi3caL.js";import"./utils-BVRly08L.js";import"./slot--DoKcWSY.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-DqiJMVwP.js";import"./decline-24gJ_QVD.js";import"./Icons-DKhvPm64.js";import"./i18n-defaults-C2wY9l8t.js";import"./information-B_T0tfhv.js";import"./alert-CCqY5Vji.js";import"./class-map-CsNukgzr.js";import"./Icon-DybkHgDw.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-B_nLitlw.js";import"./Button-BJ75y3Nh.js";import"./AriaLabelHelper-LMIEtYQL.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-DUapXIrq.js";import"./TagDesign-B60Yj3Pp.js";import"./utils-qJfrDYMN.js";import"./main-J1meqccC.js";import"./index-Bdg8B01V.js";import"./Tag-DHJn2Stl.js";import"./sys-help-2-BIIHI8V5.js";import"./index-Bp0nvMuN.js";import"./Popover-CLYhCt6_.js";import"./Integer-WDQzHAdZ.js";import"./PopupsCommon.css-DS4aznhi.js";import"./FocusableElements-BqtokFct.js";import"./isElementHidden-B4HqmI2E.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Cj9P7VXu.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-Blizc8Vd.js";import"./BrowserScrollbar.css-CWM6CH73.js";import"./index-DjPiSq4V.js";import"./Link-D4QFbUsq.js";import"./chunk-HLWAVYOI-DjhF1Rx_.js";import"./client-CeotCdvV.js";import"./copy-CyR7DYXM.js";import"./copy-BR6xdeTx.js";import"./index-CLsLcJtX.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BYE0j0VN.js";import"./index-DymV_ww8.js";import"./i18n-defaults-DO_muapi.js";import"./I18nContext-BwNxpyJO.js";import"./index-C7ubApS_.js";import"./ModalsContext-CA2qjtQ6.js";import"./useIsomorphicId-BGiUoP5x.js";import"./GitHub-Mark-DCTbc_R1.js";import"./TableOfContent-Cmr9W55f.js";import"./index-Bv96X_Am.js";import"./Label-aqqXsG4M.js";import"./index-DhwZhFGH.js";import"./addCustomCSSWithScoping-Cb1z8mH0.js";import"./index-CvCowr1S.js";import"./index-Usz8goVe.js";import"./index-CHO6rwHu.js";import"./Avatar-BFwygaOl.js";import"./employee-CKaAdAd4.js";import"./spacing-Bgb-YkCp.js";import"./index-ote0MSn6.js";import"./index-DFsXzxeg.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
`,t.jsx(d,{})]})}function Ot(i={}){const{wrapper:o}={...m(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(n,{...i})}):n(i)}export{Ot as default};
