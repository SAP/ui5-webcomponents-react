import{j as t}from"./useIsomorphicLayoutEffect-CRjHBNH3.js";import{useMDXComponents as m}from"./index-3-_tf5dF.js";import{M as p,C as r}from"./index-Do4DOBvv.js";import{C as a}from"./ControlsWithNote-DdpV7Vc9.js";import{D as s}from"./DocsHeader-DpZoVpz7.js";import{F as d}from"./ProjectTemplate-CWCcbufP.js";import"./index-BP8_t0zE.js";import{C as l,D as e,W as x}from"./Loader.stories-C6HPUsvD.js";import"./iframe-Cx73w9cb.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./index-D45hFeef.js";import"./UI5Element-B2h7kErG.js";import"./Boot-C8BaHzi_.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScope-CE64eqAB.js";import"./withWebComponent-D63zXRZq.js";import"./utils-D8cetgVj.js";import"./slot-Df15G--e.js";import"./event-CegLCnR0.js";import"./i18nBundle-kZ6-2cpn.js";import"./decline-CokZCuO3.js";import"./Icons-YiE9tW4T.js";import"./i18n-defaults-BdfZArTM.js";import"./information-C8ax4bqa.js";import"./alert-k6AQLLnO.js";import"./class-map-BQhMMhlU.js";import"./Icon-BU2Bb3zG.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-_D3nLw4H.js";import"./Button-Bt2u8cP6.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./Tooltips-C-7203Cu.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-C_UMjLXx.js";import"./chunk-HLWAVYOI-C-L-9zXM.js";import"./client-Di-4O7We.js";import"./copy-CMUu1AT6.js";import"./index-BNL24csN.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DfMTMFhn.js";import"./index-Cyo93O8-.js";import"./i18n-defaults-B3GLB-7B.js";import"./I18nContext-RJHUyvz-.js";import"./index-DW5hgAYR.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./utils-yIHEXz0K.js";import"./main-HWtSBowW.js";import"./GitHub-Mark-DRcchtOx.js";import"./TableOfContent-CaoMtmCx.js";import"./index-CaInzjXs.js";import"./Link-DXfsQCHY.js";import"./WrappingType-CW8URInd.js";import"./index-DPTY6Bnx.js";import"./Label-Cdlv07NW.js";import"./index-kotI-_Ni.js";import"./index-CvINSjlS.js";import"./sys-help-2-Bvno1uwq.js";import"./index-BsI9-pkx.js";import"./Popover-D-vbAx4K.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-BojsCAVA.js";import"./getActiveElement-BL9Yqj8a.js";import"./getEffectiveScrollbarStyle-BIR1dSFp.js";import"./PopupsCommon.css-Uumup36k.js";import"./FocusableElements-vHT1UwsK.js";import"./isElementHidden-Bpu2V8BK.js";import"./ResizeHandler-NsOSmMjZ.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-BqCgMbDz.js";import"./addCustomCSSWithScoping-CO3cnNRp.js";import"./index-BR5vj5Lc.js";import"./index-BJc7RqP7.js";import"./Avatar-DvrVWNUR.js";import"./employee-CM2OuJvM.js";import"./index-GHyvsYju.js";import"./spacing-Bgb-YkCp.js";import"./index-g-Xp_1ce.js";import"./index-TouoI-7c.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
