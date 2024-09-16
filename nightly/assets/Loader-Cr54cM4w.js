import{j as t}from"./useIsomorphicLayoutEffect-Dhma_bjk.js";import{useMDXComponents as m}from"./index-CcnH5Kt0.js";import{ae as p,af as r}from"./index-BEKtEr_p.js";import"./index-BXDvD5Ag.js";import"./index-Dll-TxMJ.js";import{C as a}from"./ControlsWithNote-DEv-jFaz.js";import{D as s}from"./DocsHeader-H_RejM3e.js";import{F as d}from"./CommandsAndQueries-CIdosNgV.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-sU8Eh0Pe.js";import{C as l,D as e,W as x}from"./Loader.stories-njCDxOwm.js";import"./iframe-D9CtqDqz.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-DGDOfdbw.js";import"./_getPrototype-B0L0C3AT.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";import"./withWebComponent-YgbOdVTg.js";import"./utils-C_Hfx9mc.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CRmnyxU0.js";import"./decline-Di3Z0MBP.js";import"./Icon-DDA-V63S.js";import"./Keys-D1SxbTOd.js";import"./parameters-bundle.css-Bga-3Zi8.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-ExggBqKR.js";import"./alert-nKQG-ySE.js";import"./class-map-D12-v36h.js";import"./Button-CkiVa5Iu.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BUwKP62u.js";import"./i18n-defaults-PZPXNaBc.js";import"./TagDesign-Dou_yO3g.js";import"./utils-CIDokbCC.js";import"./main-C6oD7XT2.js";import"./index-Cdmm4y_7.js";import"./Tag-gh5rEq7q.js";import"./sys-help-2-Dg0HLnT_.js";import"./index-C4dnCzjA.js";import"./Popover-COhsAIU7.js";import"./PopupsCommon.css-U0xQpWGd.js";import"./FocusableElements-BostZfMq.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-D085ltoF.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-HUTC8E5D.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-Dz1nSNRn.js";import"./Link-V-qm0Bxn.js";import"./chunk-HLWAVYOI-BDhWYuGd.js";import"./client-BZNFO7bv.js";import"./copy-C5P79WCS.js";import"./copy-BaVgvVlS.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-CnYostSV.js";import"./TableOfContent-J0xBpY2P.js";import"./index-Bpj6kmjj.js";import"./I18nStore-5-32Wrgv.js";import"./useStylesheet-DcbwKAeb.js";import"./index-3WD7if5i.js";import"./index-DYtJKmyC.js";import"./Label-CPv3jFl2.js";import"./index-gHGG7lEc.js";import"./index-DIFmT50V.js";import"./addCustomCSSWithScoping-kPHcp3gn.js";import"./index-GP3fnmag.js";import"./BusyIndicator-DuGIcogQ.js";import"./index-CA4K8WmR.js";import"./index-CTeNKttK.js";import"./Avatar-DOs7P2bF.js";import"./employee-uQoQn_HB.js";import"./i18n-defaults-BYkHhcAX.js";import"./index-DSxTbzjB.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
