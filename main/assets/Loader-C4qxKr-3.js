import{j as t}from"./useIsomorphicLayoutEffect-puIvDQED.js";import{useMDXComponents as m}from"./index-3-_tf5dF.js";import{M as p,C as r}from"./index-DBu3Flxc.js";import{C as a}from"./ControlsWithNote-BJsOiCWv.js";import{D as s}from"./DocsHeader-BZppI3yh.js";import{F as d}from"./ProjectTemplate-CPEiuaXu.js";import"./index-BP8_t0zE.js";import{C as l,D as e,W as x}from"./Loader.stories-CkuuweRh.js";import"./iframe-DSrtQXFV.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-BG1CObNu.js";import"./main-HWtSBowW.js";import"./index-DvCn-Dm2.js";import"./UI5Element-C8JZhjZA.js";import"./Boot-CehKKsjw.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-B6a-Hnn9.js";import"./withWebComponent-CpdHtqwM.js";import"./utils-B2Z4xp5G.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-DoewWk5r.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-BXh46edA.js";import"./Icons-CCqbOxoD.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-CG8awnKl.js";import"./sys-help-2-DkaQFi6V.js";import"./information-BGWhutS_.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-B59OKHU0.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-cA9sdirt.js";import"./index-CeQdwYY0.js";import"./decline-fWbovNdr.js";import"./class-map-BSt0RHbu.js";import"./Button-wye3yEeO.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./index-DFCslxTk.js";import"./Popover-yDBvz9_Q.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DvcyIhsp.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-CxnKdQ3r.js";import"./FocusableElements-ZkSzzhJd.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DFUfYtDU.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-CrxzMbdj.js";import"./BrowserScrollbar.css-VZcIES4c.js";import"./index-wLExbs0i.js";import"./Link-D5wE9fp4.js";import"./chunk-HLWAVYOI-9PMZGvom.js";import"./client-Di-4O7We.js";import"./copy-BzdHwFnn.js";import"./index-BN5l8ygQ.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BNgyBdxY.js";import"./index-Dt_WWgmT.js";import"./i18n-defaults-BRjckM2F.js";import"./I18nContext-RJHUyvz-.js";import"./index-Wey6YoSP.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./GitHub-Mark-DRK6K2v5.js";import"./TableOfContent-DTkFT9eE.js";import"./index-BVE7w_BZ.js";import"./Label-ehI9yDjT.js";import"./index-Caqrmj9a.js";import"./addCustomCSSWithScoping-DbtDFkfr.js";import"./index-ChMN2oMF.js";import"./index-BY_Uwh3g.js";import"./Avatar-DFzTuyBm.js";import"./employee-BTeWQfSq.js";import"./index-DA4cuX_8.js";import"./spacing-Bgb-YkCp.js";import"./index-Dcec5Vfg.js";import"./index-DvMvWaQs.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
