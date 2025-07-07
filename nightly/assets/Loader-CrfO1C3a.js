import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-B5Ip8tK9.js";import{M as p,C as r}from"./index-BlxXrl7Y.js";import"./index-BARq89zH.js";import"./index-R-JzRtwA.js";import{C as a}from"./ControlsWithNote-DUBIoqLW.js";import{D as s}from"./DocsHeader-oBlPuHj3.js";import{F as d}from"./CommandsAndQueries-DXNhHqxU.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-Bkeyeot9.js";import{C as l,D as e,W as x}from"./Loader.stories-BWlnvS2h.js";import"./iframe-C94VYfSB.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-7DBFq8Nb.js";import"./CustomElementsScope-CL9zjcNa.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-CmBjANX3.js";import"./Keys-CLf_QmYW.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-BZ5EcdIf.js";import"./parameters-bundle.css-D0uTR4GL.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DsLvoCTe.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-D1yurQHO.js";import"./decline-CtrqdeOl.js";import"./i18n-defaults-CmVK7_Fz.js";import"./information-B6RSzyEp.js";import"./information-D1jL324h.js";import"./sys-enter-2-DS9n4Dub.js";import"./sys-enter-2-A7Y23Pfh.js";import"./alert-DnTkm5F5.js";import"./Tag-afvhVdQ_.js";import"./sys-help-2-BWOTEP1y.js";import"./utils-Deqqhi4Y.js";import"./main-Dn6sLQP9.js";import"./index-Buk-oTHM.js";import"./index-BN2x7G99.js";import"./Link-5JEABESN.js";import"./index-CsHriDy7.js";import"./Popover-D2Ha4YTk.js";import"./PopupsCommon.css-CIF0SfCa.js";import"./FocusableElements-Dc0aSsUl.js";import"./isElementHidden-gS67o0pl.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Ccnh5zsM.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./copy-EaiX1lyC.js";import"./copy-ByMwA9ho.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-BG9P-NK7.js";import"./index-CmksOPNG.js";import"./I18nStore-DeTYyh4o.js";import"./useStylesheet-DBqLMi8E.js";import"./index-C-zAQpBb.js";import"./index-8sYBluu0.js";import"./Label-CMG0rVlp.js";import"./index-BtDHGh6c.js";import"./index-CXHwHWL0.js";import"./Text-CteZtvAO.js";import"./preview-DXF9ym6j.js";import"./DocsRenderer-CFRXHY34-DVwStvZN.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-BTrjrnXc.js";import"./index-qwwFDXH5.js";import"./BusyIndicator-eqRCVs2M.js";import"./index-D0D5cipM.js";import"./index-jzDBtRn1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BzbMOLEH.js";import"./index-CXmF09-f.js";import"./i18n-defaults-BN3FgtV3.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
