import{j as t}from"./useIsomorphicLayoutEffect-DxKEogMX.js";import{useMDXComponents as m}from"./index-3-_tf5dF.js";import{M as p,C as r}from"./index-_jsFf8S1.js";import{C as a}from"./ControlsWithNote-DU4TYL5X.js";import{D as s}from"./DocsHeader-C2XsODXn.js";import{F as d}from"./ProjectTemplate-BSI6B2YW.js";import"./index-BP8_t0zE.js";import{C as l,D as e,W as x}from"./Loader.stories-7CF2r8WL.js";import"./iframe-BRiNKfJ_.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-DvyQ5McK.js";import"./main-HWtSBowW.js";import"./index-sCk29z4j.js";import"./UI5Element-CTUeyjn-.js";import"./Boot-HIcYreCJ.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScope-OuufJIgt.js";import"./withWebComponent-iwEMLCwM.js";import"./utils-BWz0JEZ6.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-DAKTKoOS.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-4o6dsg6U.js";import"./Icons-Cd2oYa75.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-Dq8i2jqa.js";import"./sys-help-2-Bb9UOdy0.js";import"./information-ByKCPUae.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-DgMNwF9A.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-bByU6Tgp.js";import"./index-3VVsYjpF.js";import"./decline-2wLd8OXz.js";import"./class-map-BOjq1HnK.js";import"./Button-VSTwXR50.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./Tooltips-BagSeUK-.js";import"./HasPopup-Cecjtg2t.js";import"./index-Djijal8u.js";import"./Popover-AhBPjl_E.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-BSU3X0q-.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-82AGaEWQ.js";import"./FocusableElements-j-RSUQUA.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DXT2JxMm.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-lexY8e40.js";import"./BrowserScrollbar.css-CW1dP_e5.js";import"./index-CNNA7IUG.js";import"./Link-Cg6JYAUZ.js";import"./chunk-HLWAVYOI-KT2Qv8nA.js";import"./client-Di-4O7We.js";import"./copy-BxM08Fv1.js";import"./index-DBYYrI-r.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-tMbewxOa.js";import"./index-C7cGHCAG.js";import"./i18n-defaults-CayT9B2F.js";import"./I18nContext-RJHUyvz-.js";import"./index-Bwxn8HaB.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./GitHub-Mark-BWdgVHQx.js";import"./TableOfContent-BD22UqxK.js";import"./index-I4MKcYjZ.js";import"./Label-CLIt97QH.js";import"./index-D46X1ZcH.js";import"./addCustomCSSWithScoping-BqDpVQ5B.js";import"./index-BayUjFaR.js";import"./index-BcLQZcAn.js";import"./Avatar-Cw1GREM9.js";import"./employee-DOMuhFXQ.js";import"./index-BsZkF7pA.js";import"./spacing-Bgb-YkCp.js";import"./index-B5VmWNfM.js";import"./index-mTvZsuLb.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
`,t.jsx(d,{})]})}function Ot(i={}){const{wrapper:o}={...m(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(n,{...i})}):n(i)}export{Ot as default};
