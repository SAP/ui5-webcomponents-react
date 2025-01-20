import{j as t}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as m}from"./index-B7tNCeqj.js";import{ae as p,af as r}from"./index-cKqurK1r.js";import"./index-C1n754Ql.js";import"./index-DswOcfMg.js";import{C as a}from"./ControlsWithNote-zPjyYuR0.js";import{D as s}from"./DocsHeader-Dbnnx0Pf.js";import{F as d}from"./CommandsAndQueries-B46qQw5w.js";import"./products-B8km3JGR.js";import"./index-CjmQ2z5u.js";import"./WrappingType-CW8URInd.js";import"./Title-Dvor2iJZ.js";import{C as l,D as e,W as x}from"./Loader.stories-C0SeheMZ.js";import"./iframe-CPEldYK-.js";import"../sb-preview/runtime.js";import"./index-bI5-aUrJ.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-BAC46Qgl.js";import"./utils-DHWaO16c.js";import"./useIsomorphicLayoutEffect-BrM9ZQ9f.js";import"./slot-Df15G--e.js";import"./event-strict-C2lE4gn2.js";import"./i18n-BLQCbquq.js";import"./Button-D2qpVKd_.js";import"./Keys-icCwrzTr.js";import"./AccessibilityTextsHelper-DhVMExKx.js";import"./Icon-KwQmOmwG.js";import"./parameters-bundle.css-BzaqQttB.js";import"./willShowContent-BOkh0bwj.js";import"./Tooltips-PdAMeIDX.js";import"./toLowercaseEnumValue-BQhMonSq.js";import"./i18n-defaults-Cyg2J0QB.js";import"./decline-Cvlv1555.js";import"./i18n-defaults-CUGG7UPM.js";import"./information-DXlV02Fk.js";import"./information-xqs3OhY3.js";import"./sys-enter-2-CSX9nspg.js";import"./sys-enter-2-DbnliBdY.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DkZ8j9oR.js";import"./fiori-BEcr7J4N.js";import"./main-rGL2KZiJ.js";import"./index-B80W41n0.js";import"./Tag-Bslz7m5D.js";import"./sys-help-2-2JKOolh2.js";import"./index-Dga5kidR.js";import"./Link-D-9JsuZq.js";import"./index-DyiqWDN1.js";import"./Popover-D3Aa3r1P.js";import"./PopupsCommon.css-BjVEqPfo.js";import"./FocusableElements-CWhrFN4y.js";import"./isElementHidden-Bpu2V8BK.js";import"./isElementClickable-C7H9UXMP.js";import"./getActiveElement-BL9Yqj8a.js";import"./ResizeHandler-DZGQLi_B.js";import"./MediaRange-CQ-a3KRn.js";import"./getEffectiveScrollbarStyle-DY0HYxPj.js";import"./chunk-NUUEMKO5-BjB7qoX-.js";import"./client-CY4f97Aa.js";import"./copy-D5I8fHsc.js";import"./copy-0ABXfWaL.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-BTksmC1d.js";import"./index-D6BNp0li.js";import"./I18nStore-ZZUdxPPL.js";import"./useStylesheet-HR5-WzWz.js";import"./index-Pgl9VAVn.js";import"./index-CBHUUcbt.js";import"./Label-CEj5rW2N.js";import"./index-H87Uqpad.js";import"./index-f_HIS5b8.js";import"./Text-CKbp8M25.js";import"./addCustomCSSWithScoping-CrhCyCCs.js";import"./index-BYWKQNiy.js";import"./index-BJBRTTXf.js";import"./BusyIndicator-CLoFvcyK.js";import"./index-CFz6ke_V.js";import"./index-yEmNeK-_.js";import"./AvatarSize-BceVhWoP.js";import"./employee-BdFbn1ih.js";import"./index-ChvoqC4M.js";import"./i18n-defaults-D6w3i-ig.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
`,t.jsx(d,{})]})}function At(i={}){const{wrapper:o}={...m(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(n,{...i})}):n(i)}export{At as default};
