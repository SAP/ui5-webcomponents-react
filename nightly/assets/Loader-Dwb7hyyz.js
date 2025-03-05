import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-zdXs1Etw.js";import{M as p,C as r}from"./index-BQXnJib2.js";import"./index-B69piazk.js";import"./index-CfNPdWf6.js";import{C as a}from"./ControlsWithNote-DmhYK4Nz.js";import{D as s}from"./DocsHeader-BYzvuxNn.js";import{F as d}from"./CommandsAndQueries-CeZVX1Ky.js";import"./index-C--kS4iy.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-S4mYuCg5.js";import{C as l,D as e,W as x}from"./Loader.stories-B_NyYRxk.js";import"./iframe-DlfnX3A6.js";import"./index-DJcrgQOn.js";import"./index-B-pEBbkX.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-cXES_1K3.js";import"./CustomElementsScope-BUTWMsdD.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-3tgFGa2X.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-DONP1ba8.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BLn7sIp1.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-Be8E4wti.js";import"./decline-CR10Cnxn.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-DOS1yoWI.js";import"./information-Ddara7JM.js";import"./sys-enter-2-DQ5-UQTF.js";import"./sys-enter-2-ORskki8z.js";import"./TagDesign-Ga50IS6u.js";import"./utils-5X6erFHc.js";import"./main-BZcY5MQX.js";import"./index-Bdh0XCK9.js";import"./Tag-BA4hRKDR.js";import"./sys-help-2-DLGlU--H.js";import"./index-D5qjnIt6.js";import"./Link-AmtENQjF.js";import"./index-BQUJqHPJ.js";import"./Popover-DfnLNPje.js";import"./PopupsCommon.css-D5HcBqqE.js";import"./FocusableElements-D4ksDlVA.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DL3AhQCA.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-DYpkBB0X.js";import"./react-18-CYWbi7Zg.js";import"./copy-Dwp0eLnk.js";import"./copy-QX2RrN3g.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-Bzt3eeAv.js";import"./index-C3Fksn6V.js";import"./I18nStore-B-rJ6v8Q.js";import"./useStylesheet-D-3zc5-n.js";import"./index-X6I2T3Bw.js";import"./index-hs11xxug.js";import"./Label-DhCZjtoW.js";import"./index-SoaJF4h4.js";import"./index-BFtPjnC4.js";import"./Text-POUUQR3Y.js";import"./addCustomCSSWithScoping-QexqrevI.js";import"./index-DgT28tpm.js";import"./BusyIndicator--wc1LB_4.js";import"./index-CTdW44K5.js";import"./index-D5_I8k68.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C5NYxbXs.js";import"./index-Cpk5dCti.js";import"./i18n-defaults-D5B7gWwj.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
`,t.jsx(d,{})]})}function Ut(i={}){const{wrapper:o}={...m(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(n,{...i})}):n(i)}export{Ut as default};
