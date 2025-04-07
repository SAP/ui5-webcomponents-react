import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-B5Ip8tK9.js";import{M as p,C as r}from"./index-BMuSDG18.js";import"./index-DlRg2OHl.js";import"./index-DAuqKUvF.js";import{C as a}from"./ControlsWithNote-B1EvaK32.js";import{D as s}from"./DocsHeader-DSR4zHy9.js";import{F as d}from"./CommandsAndQueries-43r2TnUR.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-C1L07-tE.js";import{C as l,D as e,W as x}from"./Loader.stories-DUgjxll0.js";import"./iframe-e5xmDyFA.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-BvNWHM6A.js";import"./CustomElementsScope-lRvT7iCm.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-CRJQYaat.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-Cx68SyXj.js";import"./parameters-bundle.css-BLEjIEH9.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BSX3YpE0.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-DaBEYLpV.js";import"./decline-B3prtgTL.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-C2QpdGW_.js";import"./information-DpRbDwJs.js";import"./sys-enter-2-BNMrwyXi.js";import"./sys-enter-2-38y2ESjX.js";import"./alert-oRgA-QL-.js";import"./TagDesign-Ga50IS6u.js";import"./utils-CF5zuRW_.js";import"./main-DXdDxF5b.js";import"./index-hGdgpmpy.js";import"./Tag-Clr1V4cc.js";import"./sys-help-2-DtkETXXa.js";import"./index-C_lI6Qk2.js";import"./Link-DDBI2Aee.js";import"./index-CkquY_70.js";import"./Popover-B5iz04rB.js";import"./PopupsCommon.css-Cwh_2soo.js";import"./FocusableElements-B2W9U87f.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-ClsBPvBy.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./copy-CihNYBWc.js";import"./copy-gHwufZZP.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-lIiVb8Ys.js";import"./index-DooFWhc5.js";import"./I18nStore-C3xHSFao.js";import"./useStylesheet-N7C2bzZq.js";import"./index-KM_ngbs2.js";import"./index-CBrYwcJf.js";import"./Label-zmLCH7da.js";import"./index-DlD3csZn.js";import"./index-CqWP2qFq.js";import"./Text-BmPWIBNd.js";import"./preview-DdDskDMv.js";import"./DocsRenderer-CFRXHY34-DxHmPy-n.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-CzgbjJA9.js";import"./index-DjS4b8wL.js";import"./BusyIndicator-aPNGxP00.js";import"./index-DEF9m15S.js";import"./index-BLlAsUsV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bi9EDez9.js";import"./index-HjnsKsTs.js";import"./i18n-defaults-D9IRU8Fs.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
