import{j as t}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as m}from"./index-ChplMHeC.js";import{M as p,C as r}from"./index-Cf9TdiSk.js";import"./index-DBDmnX-z.js";import"./index-_PTNq6DX.js";import{C as a}from"./ControlsWithNote-WceZMqCl.js";import{D as s}from"./DocsHeader-DUz5nbfp.js";import{F as d}from"./CommandsAndQueries-D27DZ2Ym.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-DXDOdGV-.js";import{C as l,D as e,W as x}from"./Loader.stories-BPMgmaFJ.js";import"./iframe-DP2L8rW1.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./jsx-runtime--4q9epG_.js";import"./CustomElementsScope-CyyomP-e.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-DiEZky6d.js";import"./Keys-Can65e7H.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-CqWzJ5OD.js";import"./parameters-bundle.css-Ct2Rzfjz.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-D7wkQClO.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-B3xVhWeJ.js";import"./decline-WqXclzji.js";import"./i18n-defaults-u2_1ijdO.js";import"./information-Cg0Ur4-J.js";import"./information-BgTcHNBm.js";import"./sys-enter-2-CpRj5F0h.js";import"./sys-enter-2-sAwqztpn.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DyHtJFx0.js";import"./main-CiDzSAAF.js";import"./index-DPPrIwN-.js";import"./Tag-B0hWUzaX.js";import"./sys-help-2-B0EpPzfO.js";import"./index-qDH2MiBo.js";import"./Link-D6TMlpbu.js";import"./index-FpWZEnTM.js";import"./Popover-BM5bmFmi.js";import"./PopupsCommon.css-BST0NkVW.js";import"./FocusableElements-BH98Clrf.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Cy2YVXLr.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-D-3X29ML.js";import"./client-lwzJIAjg.js";import"./copy-CofIAqn3.js";import"./copy-CpGuQhie.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-DSNhfjyG.js";import"./I18nStore-DM4coTEA.js";import"./useStylesheet-B1BKTlQ6.js";import"./index-lBbqciF7.js";import"./index-Wfe8JoJe.js";import"./Label-5DArBtCG.js";import"./index-iR9PNDcN.js";import"./index-PYuf3Agp.js";import"./Text-pu3koT6Q.js";import"./addCustomCSSWithScoping-lI9D75_A.js";import"./index-BWkycj8K.js";import"./BusyIndicator-CYJz71Ps.js";import"./index-C-pEC8LU.js";import"./index-kg5gipTY.js";import"./AvatarSize-BceVhWoP.js";import"./employee-D8p98cWt.js";import"./index-CSH6rE0O.js";import"./i18n-defaults-DM4q4ZP6.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
