import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-Ddg-oX0k.js";import{M as p,C as r}from"./index-XbPxxJjn.js";import"./index-CB2NJyj5.js";import"./index-CLjlEx1o.js";import{C as a}from"./ControlsWithNote-DWVdTDOE.js";import{D as s}from"./DocsHeader-aa_1KMqc.js";import{F as d}from"./CommandsAndQueries-HA0xRDqH.js";import"./index-Bi_W_Jd4.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-Dw2clFwJ.js";import{C as l,D as e,W as x}from"./Loader.stories-CkOjQdrZ.js";import"./iframe-BfoxTUyd.js";import"./index-C1S0AQHK.js";import"./index-C2EHZYIs.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-ByLklLy6.js";import"./CustomElementsScope-BJCkQSHf.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-CVhFbCad.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-CGby3L9v.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-CFLTQoOV.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-BXUwkpCs.js";import"./decline-U8TXFXmv.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-CmvYYEtw.js";import"./information-DWKEhq3n.js";import"./sys-enter-2-DfvUZ16A.js";import"./sys-enter-2-DLBOjKNS.js";import"./TagDesign-Ga50IS6u.js";import"./utils-BjyJdBiD.js";import"./main-BZcY5MQX.js";import"./index-BwuPsjtr.js";import"./Tag-B3GqqYCx.js";import"./sys-help-2-Cui80jVv.js";import"./index-V8njyB6i.js";import"./Link-7OPDvJp0.js";import"./index-V9E_9yBg.js";import"./Popover-BgaZr5c3.js";import"./PopupsCommon.css-D4-KdmWM.js";import"./FocusableElements-Bof-Jfi5.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-D-iSdYn6.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./copy-C0TcgQvK.js";import"./copy-BPa3OsAo.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-rwZqpKzI.js";import"./index-EoHtnz0n.js";import"./I18nStore-BuTcnDwi.js";import"./useStylesheet-jv87nE5t.js";import"./index-C0ur5KUJ.js";import"./index-CTl4EJPq.js";import"./Label-42unHoL8.js";import"./index-q_xBifsn.js";import"./index-D1NZoOym.js";import"./Text-BYHe0rMB.js";import"./preview-DGR6cG7f.js";import"./DocsRenderer-CFRXHY34-O7eW8eE0.js";import"./react-18-B98GjGe7.js";import"./addCustomCSSWithScoping-CRaJDqw6.js";import"./index-sxpf8z2p.js";import"./BusyIndicator-cXtbXcMV.js";import"./index-D-QlfT-1.js";import"./index-BBw2fVoz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DP6pBYCZ.js";import"./index-Blw57xH1.js";import"./i18n-defaults-DyGSzYzE.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
