import{j as t}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as m}from"./index-B7tNCeqj.js";import{ae as p,af as r}from"./index-DmHEPNWH.js";import"./index-CF2XCfOa.js";import"./index-zGYL4Tx7.js";import{C as a}from"./ControlsWithNote-BdtaFeG2.js";import{D as s}from"./DocsHeader-4DaURAGT.js";import{F as d}from"./CommandsAndQueries-Bz_DHfiR.js";import"./products-B8km3JGR.js";import"./index-CjmQ2z5u.js";import"./WrappingType-CW8URInd.js";import"./Title-HEcUckFf.js";import{C as l,D as e,W as x}from"./Loader.stories-DY1C7r20.js";import"./iframe-ang8BRkv.js";import"../sb-preview/runtime.js";import"./index-bI5-aUrJ.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-DbOtF11K.js";import"./utils-5ouIlTbN.js";import"./useIsomorphicLayoutEffect-U1V4gMqc.js";import"./slot-Df15G--e.js";import"./event-strict-C2lE4gn2.js";import"./i18n-BLQCbquq.js";import"./Button-BBEhHqXq.js";import"./Keys-icCwrzTr.js";import"./AccessibilityTextsHelper-DhVMExKx.js";import"./Icon-DnECHVzX.js";import"./parameters-bundle.css-BzaqQttB.js";import"./willShowContent-BOkh0bwj.js";import"./Tooltips-CxBV-rFR.js";import"./toLowercaseEnumValue-BQhMonSq.js";import"./i18n-defaults-Cyg2J0QB.js";import"./decline-Cvpxulmf.js";import"./i18n-defaults-CUGG7UPM.js";import"./information-Z-_GrMVK.js";import"./information-WFnUlRRI.js";import"./sys-enter-2-2B0zQ6hc.js";import"./sys-enter-2-BneCyVoJ.js";import"./TagDesign-Dou_yO3g.js";import"./utils-D3plWs20.js";import"./fiori-BEcr7J4N.js";import"./main-rGL2KZiJ.js";import"./index-G30pMI-E.js";import"./Tag-CGyrVfu4.js";import"./sys-help-2-b8hsY3Mo.js";import"./index-DbDAMUse.js";import"./Link-CGflddfl.js";import"./index-DA9x0mSX.js";import"./Popover-jpBWywBD.js";import"./PopupsCommon.css-C5goN-pn.js";import"./FocusableElements-DKyPTCYZ.js";import"./isElementHidden-Bpu2V8BK.js";import"./isElementClickable-C7H9UXMP.js";import"./getActiveElement-BL9Yqj8a.js";import"./ResizeHandler-y4ADtKuu.js";import"./MediaRange-CQ-a3KRn.js";import"./getEffectiveScrollbarStyle-DY0HYxPj.js";import"./chunk-NUUEMKO5-CHxf1sCs.js";import"./client-CY4f97Aa.js";import"./copy-DZD0G8JY.js";import"./copy-ByaNPW9V.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-BTksmC1d.js";import"./index-x3IZBQbM.js";import"./I18nStore-CG8U7JCg.js";import"./useStylesheet-CGem_MOm.js";import"./index-BTIftX-2.js";import"./index-BCOROM5X.js";import"./Label-B_m68C-w.js";import"./index-Bq0c7Dpk.js";import"./index-mePJl18F.js";import"./Text-cV8jhUFL.js";import"./addCustomCSSWithScoping-DOW-YdFK.js";import"./index-MIUva8A9.js";import"./BusyIndicator-7GyohC3D.js";import"./index-DF8djFGP.js";import"./index-V1glf46E.js";import"./AvatarSize-BceVhWoP.js";import"./employee-DorkY_DY.js";import"./index-Qe9tHDIU.js";import"./i18n-defaults-BfQ0gFYt.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
`,t.jsx(d,{})]})}function zt(i={}){const{wrapper:o}={...m(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(n,{...i})}):n(i)}export{zt as default};
