import{j as t}from"./useIsomorphicLayoutEffect-CpdNMtv3.js";import{useMDXComponents as m}from"./index-44b7z5bc.js";import{M as p,C as r}from"./index-DuoIZlGj.js";import"./index-DLZBkpUv.js";import{C as a}from"./ControlsWithNote-_Eo--TTk.js";import{D as s}from"./DocsHeader-CJt3YCOX.js";import{F as d}from"./CommandsAndQueries-KrpstvyX.js";import"./index-DEe9W-hO.js";import"./WrappingType-CW8URInd.js";import{C as l,D as e,W as x}from"./Loader.stories-CP15-AkI.js";import"./iframe-C9beYMl6.js";import"../sb-preview/runtime.js";import"./index-D6UH2S5y.js";import"./_baseForOwn-DVWQo5xw.js";import"./mapValues-DXlf5GIm.js";import"./_baseUniq-BqAhPu7p.js";import"./index-Ba91SQPT.js";import"./index-DrFu-skq.js";import"./UI5Element-B4CRQCUa.js";import"./CustomElementsScopeUtils-C6IqSY4u.js";import"./withWebComponent-BxrD_3pN.js";import"./utils-DgTsnvPN.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-NJJr-Wgh.js";import"./decline-BWlX1wee.js";import"./Icons-CwMCtZ-T.js";import"./i18n-defaults-CXs2tJOZ.js";import"./information-Dhbw5K85.js";import"./alert-7wwKJW96.js";import"./class-map-CVq5yHuN.js";import"./if-defined-Cl7uVo8B.js";import"./Icon-p6ifn8PN.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-DQGkr9pp.js";import"./Button-BL3VmI_G.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-vwvk3Exl.js";import"./TagDesign-Dou_yO3g.js";import"./utils-B4c1IWua.js";import"./main-gIccE3pA.js";import"./index-CWKb6rkR.js";import"./Tag-Do_QTRGF.js";import"./sys-help-2-BIRNWtM-.js";import"./index-pSLV3Xxl.js";import"./Popover-CPRmhj4r.js";import"./Integer-DgRYWdxf.js";import"./PopupsCommon.css-BJNgSyQc.js";import"./FocusableElements-bN8doqn4.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Bwj_klJ5.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BoopDC9U.js";import"./BrowserScrollbar.css-88cLNDUy.js";import"./index-BZKv6326.js";import"./Link-CGGRp2Qi.js";import"./chunk-HLWAVYOI-C5Wt2RhX.js";import"./client-BEgA9EFc.js";import"./copy-DRlh-Vu-.js";import"./copy-CgbAc49M.js";import"./index-Cbb92oTi.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BlIIJPI8.js";import"./index-B5idhwOL.js";import"./I18nStore-DrHVTNpv.js";import"./ModalsContext-C4nEcU7T.js";import"./useIsomorphicId-CULvwDT0.js";import"./GitHub-Mark-W2HRRVtA.js";import"./TableOfContent-BcxvfsSP.js";import"./index-Ccvovptr.js";import"./Label-BqwA1t1q.js";import"./index-BoR8rzUs.js";import"./index-DO_luE9y.js";import"./addCustomCSSWithScoping-rJxYyKkM.js";import"./index-CXi-APXu.js";import"./index-5QA6WSUN.js";import"./index-BO4CdRod.js";import"./Avatar-DusLgr8x.js";import"./employee-CMmC12VS.js";import"./index-BCof5PG2.js";import"./index-CkjElkqm.js";import"./i18n-defaults-BQ1aH0X1.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
