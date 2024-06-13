import{j as t}from"./useIsomorphicLayoutEffect-CZEdMYkS.js";import{useMDXComponents as m}from"./index-DcZOShwE.js";import{M as p,C as r}from"./index-BqpzpJgV.js";import"./index-8eRxPlio.js";import{C as a}from"./ControlsWithNote-DiAVhtJ4.js";import{D as s}from"./DocsHeader-VfOJload.js";import{F as d}from"./ProjectTemplate-B8QIO4WT.js";import"./index-gJgmXzrm.js";import"./WrappingType-CW8URInd.js";import{C as l,D as e,W as x}from"./Loader.stories-CJfCJXX5.js";import"./iframe-C7nOoEss.js";import"../sb-preview/runtime.js";import"./index-DjqRnomV.js";import"./_baseForOwn-CLRePLhI.js";import"./mapValues-B_fQXYuL.js";import"./_baseUniq-C22BvjpN.js";import"./index-DPb1xiaU.js";import"./index-DrFu-skq.js";import"./UI5Element-BSD7m3Nn.js";import"./Boot-Bi0-wsLc.js";import"./EventProvider-CVfkyUHo.js";import"./CustomElementsScopeUtils-DQm3oQ75.js";import"./withWebComponent-DbBZwVV6.js";import"./utils-D-LpYKBL.js";import"./slot--DoKcWSY.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-D-vhNEte.js";import"./decline-CbvxqJl_.js";import"./Icons-DNVx3qDv.js";import"./i18n-defaults-C2wY9l8t.js";import"./information-BBm6bxfd.js";import"./alert-C_nh5Qt7.js";import"./class-map-CgjcvVes.js";import"./Icon-CxSx41s_.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-B_nLitlw.js";import"./Button-g4Bi3K-W.js";import"./AriaLabelHelper-LMIEtYQL.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-5yojRpQ-.js";import"./TagDesign-B60Yj3Pp.js";import"./utils-Dv1TkBbk.js";import"./main-J1meqccC.js";import"./index-_HrLOa2p.js";import"./Tag-dUe-n0jw.js";import"./sys-help-2-DwthwL7I.js";import"./index-DhpMDLZF.js";import"./Popover-XR-C8_HJ.js";import"./Integer-WDQzHAdZ.js";import"./PopupsCommon.css-BweN9FxF.js";import"./FocusableElements-PMYTkUzF.js";import"./isElementHidden-B4HqmI2E.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BZa0Uicw.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-D9IWnstk.js";import"./BrowserScrollbar.css-YdZmbuMe.js";import"./index-BumzFkEJ.js";import"./Link-COfapY2z.js";import"./chunk-HLWAVYOI-ClDwyo-d.js";import"./client-DNfJn3vO.js";import"./copy-CKg1jM49.js";import"./copy-CtgKK3fC.js";import"./index-Bvgs6qEF.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-IiibRSM5.js";import"./index-CPNTbpoD.js";import"./i18n-defaults-DXj3O94t.js";import"./I18nContext-D8i4N15C.js";import"./index-D-IgYp8E.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-BWMWV5L6.js";import"./useIsomorphicId-BEB4eg8l.js";import"./GitHub-Mark-CkGA8WSM.js";import"./TableOfContent-CZOVPy_9.js";import"./index-CeiZ5gHN.js";import"./Label-fn3eGIhh.js";import"./index-B31osXTT.js";import"./addCustomCSSWithScoping-DAUcWKpH.js";import"./index-Cgmhixil.js";import"./index-C0l6fng2.js";import"./index-Bq3WZEqy.js";import"./Avatar-C8BgJzhJ.js";import"./employee-CU0PuroF.js";import"./spacing-Bgb-YkCp.js";import"./index-BV9Cp1qh.js";import"./index-OWOrq7cE.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
