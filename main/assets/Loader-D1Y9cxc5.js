import{j as t}from"./useIsomorphicLayoutEffect-puIvDQED.js";import{useMDXComponents as m}from"./index-3-_tf5dF.js";import{M as p,C as r}from"./index-BOEy4e8d.js";import{C as a}from"./ControlsWithNote-iNw--YFB.js";import{D as s}from"./DocsHeader-ChUHj4Uz.js";import{F as d}from"./ProjectTemplate-CVaBgzjF.js";import"./index-BP8_t0zE.js";import{C as l,D as e,W as x}from"./Loader.stories-DTfyuVXf.js";import"./iframe-B-iFF4HG.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-CH-gz3x7.js";import"./main-HWtSBowW.js";import"./index-DAb9520k.js";import"./UI5Element-C8JZhjZA.js";import"./Boot-CehKKsjw.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-B6a-Hnn9.js";import"./withWebComponent-CpdHtqwM.js";import"./utils-B2Z4xp5G.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-DoewWk5r.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-BXh46edA.js";import"./Icons-CCqbOxoD.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-CG8awnKl.js";import"./sys-help-2-DkaQFi6V.js";import"./information-BGWhutS_.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-B59OKHU0.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-cA9sdirt.js";import"./index-VI7mQ-Q3.js";import"./decline-fWbovNdr.js";import"./class-map-BSt0RHbu.js";import"./Button-wye3yEeO.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./index-BcZS5BL5.js";import"./Popover-yDBvz9_Q.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DvcyIhsp.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-CxnKdQ3r.js";import"./FocusableElements-ZkSzzhJd.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DFUfYtDU.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-CrxzMbdj.js";import"./BrowserScrollbar.css-VZcIES4c.js";import"./index-BYwWAkHI.js";import"./Link-D5wE9fp4.js";import"./chunk-HLWAVYOI-o6Z_XMHJ.js";import"./client-Di-4O7We.js";import"./copy-BzdHwFnn.js";import"./index-MmFI5CwB.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BNgyBdxY.js";import"./index-Dt_WWgmT.js";import"./i18n-defaults-BRjckM2F.js";import"./I18nContext-RJHUyvz-.js";import"./index-Wey6YoSP.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./GitHub-Mark-DRK6K2v5.js";import"./TableOfContent-BU54K9gN.js";import"./index-CawDwTLt.js";import"./Label-ehI9yDjT.js";import"./index-DblmN64p.js";import"./addCustomCSSWithScoping-DbtDFkfr.js";import"./index-stKVwX2k.js";import"./index-B5QcvmwF.js";import"./Avatar-DFzTuyBm.js";import"./employee-BTeWQfSq.js";import"./index-CCOUpkpD.js";import"./spacing-Bgb-YkCp.js";import"./index-AeE_tJaC.js";import"./index-DvMvWaQs.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
`,t.jsx(d,{})]})}function Kt(i={}){const{wrapper:o}={...m(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(n,{...i})}):n(i)}export{Kt as default};
