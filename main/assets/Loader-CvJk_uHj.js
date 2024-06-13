import{j as t}from"./useIsomorphicLayoutEffect-CZEdMYkS.js";import{useMDXComponents as m}from"./index-DcZOShwE.js";import{M as p,C as r}from"./index-B0pBqCh5.js";import"./index-DQ-tqfo-.js";import{C as a}from"./ControlsWithNote-DoPn5XjT.js";import{D as s}from"./DocsHeader-CTqskLsW.js";import{F as d}from"./ProjectTemplate-BdjanEFy.js";import"./index-gJgmXzrm.js";import"./WrappingType-CW8URInd.js";import{C as l,D as e,W as x}from"./Loader.stories-BQX7seqY.js";import"./iframe-DIXxBug1.js";import"../sb-preview/runtime.js";import"./index-DjqRnomV.js";import"./_baseForOwn-CLRePLhI.js";import"./mapValues-B_fQXYuL.js";import"./_baseUniq-C22BvjpN.js";import"./index-DPb1xiaU.js";import"./index-DrFu-skq.js";import"./UI5Element-BSD7m3Nn.js";import"./Boot-Bi0-wsLc.js";import"./EventProvider-CVfkyUHo.js";import"./CustomElementsScopeUtils-DQm3oQ75.js";import"./withWebComponent-DbBZwVV6.js";import"./utils-D-LpYKBL.js";import"./slot--DoKcWSY.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-D-vhNEte.js";import"./decline-CbvxqJl_.js";import"./Icons-DNVx3qDv.js";import"./i18n-defaults-C2wY9l8t.js";import"./information-BBm6bxfd.js";import"./alert-C_nh5Qt7.js";import"./class-map-CgjcvVes.js";import"./Icon-CxSx41s_.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-B_nLitlw.js";import"./Button-Do_F120z.js";import"./AriaLabelHelper-LMIEtYQL.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-Dk6PQJ4F.js";import"./TagDesign-B60Yj3Pp.js";import"./utils-B5CUfXi0.js";import"./main-J1meqccC.js";import"./index-DBYsUXMe.js";import"./Tag-Bc8al2LA.js";import"./sys-help-2-DwthwL7I.js";import"./index-weVWm35j.js";import"./Popover-XR-C8_HJ.js";import"./Integer-WDQzHAdZ.js";import"./PopupsCommon.css-BweN9FxF.js";import"./FocusableElements-PMYTkUzF.js";import"./isElementHidden-B4HqmI2E.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BZa0Uicw.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-D9IWnstk.js";import"./BrowserScrollbar.css-YdZmbuMe.js";import"./index-DLNRzpBv.js";import"./Link-CIE5ONNA.js";import"./chunk-HLWAVYOI-DZv-XghG.js";import"./client-DNfJn3vO.js";import"./copy-CKg1jM49.js";import"./copy-CtgKK3fC.js";import"./index-Bvgs6qEF.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-IiibRSM5.js";import"./index-CPNTbpoD.js";import"./i18n-defaults-DXj3O94t.js";import"./I18nContext-D8i4N15C.js";import"./index-D-IgYp8E.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-BWMWV5L6.js";import"./useIsomorphicId-BEB4eg8l.js";import"./GitHub-Mark-CkGA8WSM.js";import"./TableOfContent-DM9CSZp5.js";import"./index-BtorMJMB.js";import"./Label-gsrpWG-u.js";import"./index-B9iAwakS.js";import"./addCustomCSSWithScoping-DAUcWKpH.js";import"./index-DzwsR14B.js";import"./index-BzZ3dUoL.js";import"./Avatar-8WJ7r5CK.js";import"./employee-CU0PuroF.js";import"./index-CF6zCdXp.js";import"./spacing-Bgb-YkCp.js";import"./index-CM6GnVy0.js";import"./index-OWOrq7cE.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
