import{j as t}from"./useIsomorphicLayoutEffect-CpdNMtv3.js";import{useMDXComponents as m}from"./index-44b7z5bc.js";import{M as p,C as r}from"./index-BxMK-oZX.js";import"./index-CM3Q1mAA.js";import{C as a}from"./ControlsWithNote-C-pt6c_v.js";import{D as s}from"./DocsHeader-CRCrDhiF.js";import{F as d}from"./ProjectTemplate-ClPVO9yk.js";import"./index-DEe9W-hO.js";import"./WrappingType-CW8URInd.js";import{C as l,D as e,W as x}from"./Loader.stories-BcU2J9Xs.js";import"./iframe-CTiaqTf7.js";import"../sb-preview/runtime.js";import"./index-D6UH2S5y.js";import"./_baseForOwn-DVWQo5xw.js";import"./mapValues-DXlf5GIm.js";import"./_baseUniq-BqAhPu7p.js";import"./index-Ba91SQPT.js";import"./index-DrFu-skq.js";import"./UI5Element-GBezswur.js";import"./Boot-CS6Wsrzl.js";import"./EventProvider-CVfkyUHo.js";import"./CustomElementsScopeUtils-CNP7-t5L.js";import"./withWebComponent-ystZv1Rq.js";import"./utils-DQyyc3O0.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BRH4h-L2.js";import"./decline-DXuOh8V-.js";import"./Icons-DkFvE6sF.js";import"./i18n-defaults-CXs2tJOZ.js";import"./information-7KDHAkBn.js";import"./alert-CC8GYBM5.js";import"./class-map-AxOwT-Dx.js";import"./Icon-DVdZH5Ds.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-DQGkr9pp.js";import"./Button-BDXX69rx.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-BHzefwI9.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DSznK6sV.js";import"./main-gIccE3pA.js";import"./index-DVOkgPVp.js";import"./Tag-L9twqo1B.js";import"./sys-help-2-Bsa8Xj43.js";import"./index-CtDZXPwz.js";import"./Popover-D7imDdfT.js";import"./Integer-DgRYWdxf.js";import"./PopupsCommon.css-D0jBQZ8g.js";import"./FocusableElements-D2BM6TGM.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DDwTWVjk.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BQrULRrw.js";import"./BrowserScrollbar.css-CyDwNnGM.js";import"./index-CZ0QVr_g.js";import"./Link-C0ufom_G.js";import"./chunk-HLWAVYOI-DKjSPBXu.js";import"./client-BEgA9EFc.js";import"./copy-BlXZdPH6.js";import"./copy-CpBkh8z4.js";import"./index-B6HtmUYb.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-B1i3sL0q.js";import"./index-D455cKCd.js";import"./i18n-defaults-CnAElpi7.js";import"./I18nContext-qX06pm-v.js";import"./index-DucvDNQa.js";import"./ModalsContext-C4nEcU7T.js";import"./useIsomorphicId-CULvwDT0.js";import"./GitHub-Mark-W2HRRVtA.js";import"./TableOfContent-DKodyTgw.js";import"./index-BK_N281j.js";import"./Label-B7GS_Fjb.js";import"./index-CzlLCp0a.js";import"./addCustomCSSWithScoping-Cxt-Ii4P.js";import"./index-C4zynmY8.js";import"./index-Caupm9jG.js";import"./index-CN_XtWb6.js";import"./Avatar-BLWqVh2K.js";import"./employee-RhZDCU51.js";import"./spacing-Bgb-YkCp.js";import"./index-BvDhvbFw.js";import"./index-B59Cbv-c.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
