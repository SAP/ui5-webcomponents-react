import{j as t}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as m}from"./index-ChplMHeC.js";import{M as p,C as r}from"./index-DOaDsc9_.js";import"./index-Dc_7BhGO.js";import"./index-B9o8W6Uf.js";import{C as a}from"./ControlsWithNote-CNLWHEK3.js";import{D as s}from"./DocsHeader-B8PTxS9R.js";import{F as d}from"./CommandsAndQueries-31WXPvMZ.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-DPrdYQMV.js";import{C as l,D as e,W as x}from"./Loader.stories-C4OkUYiS.js";import"./iframe-hesHFMTZ.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-XJjz10u8.js";import"./utils-DyMdBfPm.js";import"./useIsomorphicLayoutEffect-Bu4xop1x.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-2px5KXGd.js";import"./Keys-Can65e7H.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-D3cRfWaZ.js";import"./parameters-bundle.css-DSUsAvJy.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-CGW8Xrj5.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-CjsTKlnu.js";import"./decline-DP6kMU1p.js";import"./i18n-defaults-CifGXSvE.js";import"./information-Bmgd6dpL.js";import"./information-8BjDCJTf.js";import"./sys-enter-2-BcpVUItX.js";import"./sys-enter-2-KjprDONg.js";import"./TagDesign-Dou_yO3g.js";import"./utils-BQY8_yBp.js";import"./main-BL2DbqAR.js";import"./index-Csr3mskW.js";import"./Tag-Bt0ipejr.js";import"./sys-help-2-CwdCzKO6.js";import"./index-AZQF7cRn.js";import"./Link-BJ2ET1br.js";import"./index-DIZ1yifi.js";import"./Popover-BMI_rbJM.js";import"./PopupsCommon.css-B7Lyl-LM.js";import"./FocusableElements-dXKcAzjx.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DyOJZiXp.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-CS47uNJT.js";import"./client-lwzJIAjg.js";import"./copy-0qMnoswg.js";import"./copy-d7htsAK2.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-Cm7aLGLH.js";import"./I18nStore-CWEJ68aw.js";import"./useStylesheet-bO_9Zfr-.js";import"./index-10Quzq-K.js";import"./index-B2xVvqo6.js";import"./Label-VZeu70kx.js";import"./index-DLapjMlp.js";import"./index-CosszrBQ.js";import"./Text-yuhY-WXa.js";import"./addCustomCSSWithScoping-CBi_hReC.js";import"./index-C60mQ2wP.js";import"./index-BfJ8Dvmz.js";import"./BusyIndicator-3eE4S65a.js";import"./index-CjbB3fTU.js";import"./index-DCp58fk9.js";import"./AvatarSize-BceVhWoP.js";import"./employee-heX9Z6a9.js";import"./index-8fMPfTUL.js";import"./i18n-defaults-BJYukMa1.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
