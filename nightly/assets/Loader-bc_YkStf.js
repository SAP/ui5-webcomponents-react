import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-B5Ip8tK9.js";import{M as p,C as r}from"./index-CX4bpr0V.js";import"./index-BsLeVBVw.js";import"./index-CkGwdPp2.js";import{C as a}from"./ControlsWithNote-D71c6cop.js";import{D as s}from"./DocsHeader-DhXTpq6U.js";import{F as d}from"./CommandsAndQueries-fxRZ_4qN.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-l18RNg85.js";import{C as l,D as e,W as x}from"./Loader.stories-1zYNZFtf.js";import"./iframe-Cc9cn6nb.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-2NO35c9p.js";import"./CustomElementsScope-BZQ-yqK5.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-DsiN4KEf.js";import"./Keys-CLf_QmYW.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-Dy5MqRQN.js";import"./parameters-bundle.css-D0uTR4GL.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DqK_Zwt1.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-Wx6G1HAa.js";import"./decline-Cf8Y7eZn.js";import"./i18n-defaults-CmVK7_Fz.js";import"./information-CPeQ-J71.js";import"./information-DVtVmQQs.js";import"./sys-enter-2-DM7CihIf.js";import"./sys-enter-2-D_EhgDRM.js";import"./alert-B-6XnuHB.js";import"./Tag-B8Y5CAT_.js";import"./sys-help-2-CQSD8GDX.js";import"./utils-D-RqbMW2.js";import"./main-Dn6sLQP9.js";import"./index-Bmfoy9ob.js";import"./index-AfFCJao1.js";import"./Link-CIigJXcZ.js";import"./index-39R8lAwY.js";import"./Popover-DHgn1IwJ.js";import"./PopupsCommon.css-1ftV5PB8.js";import"./FocusableElements--dusX2Bm.js";import"./isElementHidden-gS67o0pl.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DGDOSiJK.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./copy--eUL3OtC.js";import"./copy-C9kEgeiD.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-BG9P-NK7.js";import"./index-DueKxF8M.js";import"./I18nStore-Bb3vbAIQ.js";import"./useStylesheet-DhspXHhi.js";import"./index-C2w1dnoB.js";import"./index-49bJeJce.js";import"./Label-DvK4qyHf.js";import"./index-C2cs6waD.js";import"./index-Z1IFI4-r.js";import"./Text-CWzAOMGb.js";import"./preview-C0hymI9J.js";import"./DocsRenderer-CFRXHY34-DGBtbeuC.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-BPwSVJcY.js";import"./index-B-i0fidp.js";import"./BusyIndicator-kBFPsFJK.js";import"./index-B61k-92l.js";import"./index-6SfSTYbY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DTc-n_gr.js";import"./index-hij65avV.js";import"./i18n-defaults-DHddteo6.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
