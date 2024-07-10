import{j as t}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import{useMDXComponents as m}from"./index-yodfxRVR.js";import{M as p,C as r}from"./index-DLpmNMBq.js";import"./index-iF75BPvd.js";import{C as a}from"./ControlsWithNote-C7T0Ogbg.js";import{D as s}from"./DocsHeader-Ciax7uFa.js";import{F as d}from"./CommandsAndQueries-VyRp7VSS.js";import"./index-BQ1WsyJB.js";import"./WrappingType-CW8URInd.js";import{C as l,D as e,W as x}from"./Loader.stories-D6e18IUp.js";import"./iframe-B846S1SF.js";import"../sb-preview/runtime.js";import"./index-BLtMylri.js";import"./_baseForOwn-DusBTQ6O.js";import"./mapValues-DfqGXSk1.js";import"./_baseUniq-BpWYsmmS.js";import"./index-Cagd9BgA.js";import"./index-DrFu-skq.js";import"./withWebComponent-BbH_5MIb.js";import"./utils-BXNPXA0w.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CYrspCbQ.js";import"./decline-dJfPkrKK.js";import"./Icon-DgpDEY-g.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-Pg2MF6OO.js";import"./parameters-bundle.css-BFbT_feV.js";import"./i18n-defaults-eVMsPoDe.js";import"./information-Dpm8KApc.js";import"./alert-4iBM3OoX.js";import"./class-map-Cmqcr3Jy.js";import"./Button-B86xSW8p.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-D_1KzAB5.js";import"./TagDesign-Dou_yO3g.js";import"./utils-CB5OXg3M.js";import"./main-CzLLrZqh.js";import"./index-RYJwNzbN.js";import"./Tag-Bcq38jV6.js";import"./sys-help-2-CpwrGADB.js";import"./index-nmoQEt9s.js";import"./Popover-By40N46R.js";import"./PopupsCommon.css-CUeoloLy.js";import"./getEffectiveScrollbarStyle-Cc8EMEwh.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-OgbCZidP.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CndeHQ5H.js";import"./BrowserScrollbar.css-CgVpWCeO.js";import"./index-Drj77YO4.js";import"./Link-D7pTqG-L.js";import"./chunk-HLWAVYOI-CTRemlx-.js";import"./client-CM2XqZNc.js";import"./copy-Bk4HvEED.js";import"./copy-D7XnXV4f.js";import"./index-DwEKreE0.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BB85D3ff.js";import"./index-CHSXWHaD.js";import"./I18nStore-B0a_FhwZ.js";import"./useIsomorphicId-8WwglsiH.js";import"./GitHub-Mark-08X1RYCA.js";import"./TableOfContent-ot8xOzAQ.js";import"./index-CSjawjb8.js";import"./Label-B8i_ob21.js";import"./index-D1nu7uR-.js";import"./index-C4m8BtnC.js";import"./addCustomCSSWithScoping-BT5fwu99.js";import"./index-CU9rpgmS.js";import"./index-BxNOKD0b.js";import"./index-DyFEPi5R.js";import"./Avatar-DddpDFgS.js";import"./employee-DSw1VZX4.js";import"./i18n-defaults-C7jtn0Rp.js";import"./index-BPonGG3q.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
