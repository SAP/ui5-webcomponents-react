import{j as t}from"./useIsomorphicLayoutEffect-BpDYIkAV.js";import{useMDXComponents as m}from"./index-44b7z5bc.js";import{M as p,C as r}from"./index-DRz2hk48.js";import"./index-Bk8Ithva.js";import{C as a}from"./ControlsWithNote-0Js9UrFs.js";import{D as s}from"./DocsHeader-C3yXmZBk.js";import{F as d}from"./CommandsAndQueries-DfO_EoOU.js";import"./index-DEe9W-hO.js";import"./WrappingType-CW8URInd.js";import{C as l,D as e,W as x}from"./Loader.stories-C4PX8Bde.js";import"./iframe-0howv_Dp.js";import"../sb-preview/runtime.js";import"./index-D6UH2S5y.js";import"./_baseForOwn-DVWQo5xw.js";import"./mapValues-DXlf5GIm.js";import"./_baseUniq-BqAhPu7p.js";import"./index-Ba91SQPT.js";import"./index-DrFu-skq.js";import"./UI5Element-Cjk_cKug.js";import"./CustomElementsScopeUtils-CJFx-0ms.js";import"./withWebComponent-ZLYt6Z72.js";import"./utils-Cjkb-4uz.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-DTd686OT.js";import"./decline-CnfxIuyS.js";import"./Icons-bHVDH2o-.js";import"./i18n-defaults-eVMsPoDe.js";import"./information-Ds_NTOym.js";import"./alert-5g0GnjXW.js";import"./class-map-Dho2ozJ6.js";import"./if-defined-9iVrMyiP.js";import"./Icon-CzTkrOrA.js";import"./Device-RcFucVeJ.js";import"./Keys-pFVWso__.js";import"./parameters-bundle.css-BFbT_feV.js";import"./Button-BzvkKBmq.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-BPJU920w.js";import"./TagDesign-Dou_yO3g.js";import"./utils-mmfDDMog.js";import"./main-CzLLrZqh.js";import"./index-upWdXizJ.js";import"./Tag-By3S0wie.js";import"./sys-help-2-cOG0Ftyw.js";import"./index-D3UTY3No.js";import"./Popover-5eNGP7Bf.js";import"./PopupsCommon.css-C9rG7FRw.js";import"./FocusableElements-Dst-wEMC.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BX_Vwu-f.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-ZLasDAym.js";import"./BrowserScrollbar.css-DPWlQluy.js";import"./index-vgsGM25s.js";import"./Link-CoCG3JZh.js";import"./chunk-HLWAVYOI-Coc2dbv7.js";import"./client-BEgA9EFc.js";import"./copy-yNkJ0G6Z.js";import"./copy-_3t6R87k.js";import"./index-ldWqkrC3.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-CBVvS9lW.js";import"./index-BgM2iT7f.js";import"./I18nStore-DimJQVWm.js";import"./ModalsContext-C4nEcU7T.js";import"./useIsomorphicId-CULvwDT0.js";import"./GitHub-Mark-CzYm6OCq.js";import"./TableOfContent-7Ygrv8G1.js";import"./index-BDFEWlxK.js";import"./Label-BCs7fK18.js";import"./index-B4H3qawp.js";import"./index-DfcSCthV.js";import"./addCustomCSSWithScoping-B_dl8XEe.js";import"./index-DW2xgIbK.js";import"./index-D8ggj6z5.js";import"./index-BUDWBPQn.js";import"./Avatar-DoGtfKYI.js";import"./employee-BgURwoFi.js";import"./i18n-defaults-DDljwJVu.js";import"./index-M6VOGtcx.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
`,t.jsx(d,{})]})}function Gt(i={}){const{wrapper:o}={...m(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(n,{...i})}):n(i)}export{Gt as default};
