import{j as t}from"./useIsomorphicLayoutEffect-7J8kFyWS.js";import{useMDXComponents as m}from"./index-CcnH5Kt0.js";import{ae as p,af as r}from"./index-pii9qXca.js";import"./index-HLRYYcmq.js";import{C as a}from"./ControlsWithNote-BIoxRw0s.js";import{D as s}from"./DocsHeader-ET9l3YzX.js";import{F as d}from"./CommandsAndQueries-BOY9YJp_.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-DAmTHV6H.js";import{C as l,D as e,W as x}from"./Loader.stories-DyovKZ7m.js";import"./iframe-BGNhdigB.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-BBslp21L.js";import"./_overArg-Der2MB70.js";import"./_baseAssignValue-PZ39NPQP.js";import"./_getPrototype-DY0Wt4dR.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./withWebComponent-C2_AfQVD.js";import"./utils-CbJpFptd.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-Cxw-KB99.js";import"./decline-3k_K2cqJ.js";import"./Icon-nbkyxQyS.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-BI-0aVN0.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-BAyVX-75.js";import"./alert-D2A6vIfJ.js";import"./class-map-DkiTMG92.js";import"./Button-CnsO6gkG.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-mDgxhJ6N.js";import"./TagDesign-Dou_yO3g.js";import"./utils-BwXYWp--.js";import"./main-BPTHlokf.js";import"./index-dX-ZV-td.js";import"./Tag-Do40S3QV.js";import"./sys-help-2-uDSJGuKN.js";import"./index-BNMO-hWF.js";import"./Popover-TU8_F6L9.js";import"./PopupsCommon.css-DXc2NW_3.js";import"./getEffectiveScrollbarStyle-bHZmu9jA.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CBt6Bnha.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-vO3z8-sf.js";import"./BrowserScrollbar.css-XToAwk-G.js";import"./index-EFxKl2Vd.js";import"./Link-COnH4Nhl.js";import"./chunk-HLWAVYOI-TS-PYtkE.js";import"./client-BZNFO7bv.js";import"./copy-DeaTwX5B.js";import"./copy-BtzzsDJe.js";import"./index-CLe8_13Z.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BgRQTyXM.js";import"./index-C1C4YxCs.js";import"./I18nStore-D2HJaIMp.js";import"./GitHub-Mark-CQnSG1yZ.js";import"./TableOfContent-B6vxzEs5.js";import"./index-DeTJ_hrm.js";import"./Label-DfCllKqR.js";import"./index-8kgK4RvL.js";import"./index-B8Mr0oby.js";import"./addCustomCSSWithScoping-Dwz0mgGv.js";import"./index-pQSR4aha.js";import"./BusyIndicator-Bgnc8Kc_.js";import"./index-CcT8O75w.js";import"./index-DgYOmyYl.js";import"./Avatar-DHfKIRqg.js";import"./employee-BmxHk7Xq.js";import"./i18n-defaults-CYulfap-.js";import"./index-DoskERmt.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
