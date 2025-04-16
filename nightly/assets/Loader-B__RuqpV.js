import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-B5Ip8tK9.js";import{M as p,C as r}from"./index-DNcRToDG.js";import"./index-Ultsg-G0.js";import"./index-CzDDSFmI.js";import{C as a}from"./ControlsWithNote-Ce7U1CzZ.js";import{D as s}from"./DocsHeader-BJhro_Fg.js";import{F as d}from"./CommandsAndQueries-D4-LeqYd.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-zAoAJako.js";import{C as l,D as e,W as x}from"./Loader.stories-BUyj6KUg.js";import"./iframe-DZfUuuAo.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-BCizSm9J.js";import"./CustomElementsScope-lRvT7iCm.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-C3KIEZ_B.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-D8gJIGEW.js";import"./parameters-bundle.css-BLEjIEH9.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DBnVRLcV.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-B8cpOtV2.js";import"./decline-CO_yryFo.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-BiJmvry2.js";import"./information-BA_ST16a.js";import"./sys-enter-2-L9fob0bg.js";import"./sys-enter-2-C09nDPBO.js";import"./alert-BjJeIaiS.js";import"./TagDesign-Ga50IS6u.js";import"./utils-BXjsQBbV.js";import"./main-DXdDxF5b.js";import"./index-sa6HOp3c.js";import"./Tag-JkllhvLP.js";import"./sys-help-2-bRrqGaJr.js";import"./index-BQnCm__z.js";import"./Link-DU2LYizk.js";import"./index-DogrUJhP.js";import"./Popover-ZaMaqrll.js";import"./PopupsCommon.css-DkWsY6As.js";import"./FocusableElements-BcTTx3-_.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DMSxvinm.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./copy-D5y8ERWb.js";import"./copy-BJ2RS-I5.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-BG9P-NK7.js";import"./index-CBdV8GpA.js";import"./I18nStore-BqSUVB5y.js";import"./useStylesheet-N7C2bzZq.js";import"./index-CRT1e2Cp.js";import"./index-Cvp8w3St.js";import"./Label-efMMm_Yw.js";import"./index-DoqJBpXZ.js";import"./index-BCr_l6cl.js";import"./Text-ahyk1WrN.js";import"./preview-CP-feZJi.js";import"./DocsRenderer-CFRXHY34-Bp32x3q3.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-BBYkOVIV.js";import"./index-CWu8VubW.js";import"./BusyIndicator-CXYqK0WZ.js";import"./index-GxH6uhPh.js";import"./index-D-WnL20f.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CIU74CR3.js";import"./index-DZIy6DqY.js";import"./i18n-defaults-MJtOBd0t.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
