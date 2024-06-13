import{j as t}from"./useIsomorphicLayoutEffect-J-vjyzBO.js";import{useMDXComponents as m}from"./index-Bpj30qF7.js";import{M as p,C as r}from"./index-BGPPIhb8.js";import"./index-DgydNPrY.js";import{C as a}from"./ControlsWithNote-DN_PI1bF.js";import{D as s}from"./DocsHeader-Csu7KlNu.js";import{F as d}from"./ProjectTemplate-B9geGl3q.js";import"./index-DVqgc125.js";import"./WrappingType-CW8URInd.js";import{C as l,D as e,W as x}from"./Loader.stories-BEl67CFS.js";import"./iframe-BvH98P4b.js";import"../sb-preview/runtime.js";import"./index-oytpl9VN.js";import"./_baseForOwn-czysEfXW.js";import"./mapValues-DJmJhyxk.js";import"./_baseUniq-fADs2fxN.js";import"./index-MwrKYwMg.js";import"./index-DrFu-skq.js";import"./UI5Element-ZIczsayz.js";import"./Boot-DBJWGo1y.js";import"./EventProvider-CVfkyUHo.js";import"./CustomElementsScopeUtils-Di1jckr8.js";import"./withWebComponent-CZCh4Hye.js";import"./utils-xoLr7-0V.js";import"./slot--DoKcWSY.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-Baemx9Ir.js";import"./decline-iFbg0EvE.js";import"./Icons-VTGLGKPM.js";import"./i18n-defaults-C2wY9l8t.js";import"./information-DBr1nnf3.js";import"./alert-CRLi12vy.js";import"./class-map-7Nty0QHu.js";import"./Icon-bm18Wc8p.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-B_nLitlw.js";import"./Button-B3obxaDo.js";import"./AriaLabelHelper-LMIEtYQL.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-BBSxky5H.js";import"./TagDesign-B60Yj3Pp.js";import"./utils-WT0mJUCa.js";import"./main-J1meqccC.js";import"./index-PaECXGmn.js";import"./Tag-BT5Mvbr4.js";import"./sys-help-2-2Us62-4y.js";import"./index-Du6xKB7b.js";import"./Popover-CiDK1VtS.js";import"./Integer-WDQzHAdZ.js";import"./PopupsCommon.css-BU4M9Cwb.js";import"./FocusableElements-xn9p5spb.js";import"./isElementHidden-B4HqmI2E.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-D26-bsEk.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-H4TARQHt.js";import"./BrowserScrollbar.css-DkjKirWP.js";import"./index-szvHrz99.js";import"./Link-CM0QSx8V.js";import"./chunk-HLWAVYOI-u4kM9-ix.js";import"./client-5PD-IPQ1.js";import"./copy-Cmf2rNBH.js";import"./copy-e7WxF_om.js";import"./index-Bo6CU_bj.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DGwRvl1X.js";import"./index-CUZZ9nZS.js";import"./i18n-defaults-CNyODxfy.js";import"./I18nContext-BrA05J-F.js";import"./index-DoUANS_S.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-DrY1dyul.js";import"./useIsomorphicId-B7SE6ZVh.js";import"./GitHub-Mark-BB1PBR_N.js";import"./TableOfContent-BAp_w_wX.js";import"./index-BNqEw21-.js";import"./Label-BcDuAK9i.js";import"./index-El8wsCbc.js";import"./addCustomCSSWithScoping-D0vrnlbk.js";import"./index-4eQD1Xi9.js";import"./index-Decb0PcY.js";import"./index-jPWG4tlh.js";import"./Avatar-BQsj5wMZ.js";import"./employee-DN6CdZzr.js";import"./spacing-Bgb-YkCp.js";import"./index-DB7CteaV.js";import"./index-BfsycYn4.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
