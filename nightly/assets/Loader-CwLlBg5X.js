import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-DpYXPI8c.js";import{M as p,C as r}from"./index-BQVsWipE.js";import"./index-BPgdWBHk.js";import"./index-C-T8u1Nb.js";import{C as a}from"./ControlsWithNote-BsOQDvJ2.js";import{D as s}from"./DocsHeader-om_eON2j.js";import{F as d}from"./CommandsAndQueries-DDzADXOk.js";import"./index-ChI72X44.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-DKHf5Ic-.js";import{C as l,D as e,W as x}from"./Loader.stories-CeB5Kyn8.js";import"./iframe-CKDaW90P.js";import"./index-DnYn5RTv.js";import"./index-BS9IDQLN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-DITkwERB.js";import"./CustomElementsScope-CRlaEhjH.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-BhJpItN3.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-g4jJGwIi.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-CtkDPpba.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-BXUwkpCs.js";import"./decline-Bk6V92qv.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-B1L_xjDU.js";import"./information-BQmhacxY.js";import"./sys-enter-2-3Y2FtBDI.js";import"./sys-enter-2-DnGfeGAh.js";import"./TagDesign-Ga50IS6u.js";import"./utils-DfFEda3n.js";import"./main-BZcY5MQX.js";import"./index-bxj-dcWC.js";import"./Tag-DJG7ubt1.js";import"./sys-help-2-WHz-04ii.js";import"./index-C5x9Zqi4.js";import"./Link-C_1Qeegk.js";import"./index-vVWMke_Z.js";import"./Popover-C53QSKRD.js";import"./PopupsCommon.css-BG-751as.js";import"./FocusableElements-noNskoYV.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Cex6U3jO.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./copy-BcmnvuMK.js";import"./copy-BjWKS8Rq.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-DfYxHRnX.js";import"./index-Dx_3Pfp7.js";import"./I18nStore-BBWtp4Wg.js";import"./useStylesheet-BYtqX5T7.js";import"./index-DqiEy2LY.js";import"./index-B_fY4UqP.js";import"./Label-Cw3xmdjW.js";import"./index-D5gqvCq0.js";import"./index-BZypq4CF.js";import"./Text-BBBHwYsI.js";import"./preview-CfaXNrRA.js";import"./DocsRenderer-CFRXHY34-C2fymdDQ.js";import"./react-18-B55prW7j.js";import"./addCustomCSSWithScoping-bWjUKP8X.js";import"./index-CbnmVlWA.js";import"./BusyIndicator-DTHwLaG3.js";import"./index-c5_gOmO2.js";import"./index-II2KQk7A.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DyHFsBXc.js";import"./index-DNec9Trg.js";import"./i18n-defaults-d97UCXvF.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
