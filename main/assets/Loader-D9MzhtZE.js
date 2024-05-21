import{j as t}from"./ManagedStyles-B3AuKgSD.js";import{useMDXComponents as m}from"./index-3-_tf5dF.js";import{M as p,C as r}from"./index-CWUxdAHG.js";import{C as a}from"./ControlsWithNote-DKqA8DDr.js";import{D as s}from"./DocsHeader-ggcNlbCV.js";import{F as d}from"./ProjectTemplate-DXIfhxFQ.js";import"./index-BP8_t0zE.js";import{C as l,D as e,W as x}from"./Loader.stories-wThF49ra.js";import"./iframe--LcyiBpP.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-CMrmu4aE.js";import"./main-HWtSBowW.js";import"./index-BCF-BD3Y.js";import"./UI5Element-BDMamLf2.js";import"./Boot-DOb84JFo.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-CyqSdClf.js";import"./withWebComponent-B6oBGWld.js";import"./utils-BFMQrOqR.js";import"./useIsomorphicLayoutEffect-CnI1knHw.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-VOPn86Vc.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-BO7pZwTn.js";import"./Icons-BEU0Gkqb.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-CG8awnKl.js";import"./sys-help-2-DvC0Pbzk.js";import"./information-BKTX2iJj.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-DA8J16Yf.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-YvCKXLrH.js";import"./index-DvrhOwd0.js";import"./decline-DIsY4YnD.js";import"./class-map-k-XuEcbQ.js";import"./Button-BZkI_7BG.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./index-CmGjfhBf.js";import"./Popover-CIglqovv.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DrS11q-G.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-CQ0KG_Or.js";import"./FocusableElements-B5R4EUYo.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DS8KPGJE.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-C_Zo2l27.js";import"./BrowserScrollbar.css-ljOou4G0.js";import"./index-CTQ00IzZ.js";import"./Link-VbEG4eoi.js";import"./chunk-HLWAVYOI-FUSv0t7T.js";import"./client-Di-4O7We.js";import"./copy-C1-wxiKi.js";import"./index-B17o-zTF.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-NUMS3nLe.js";import"./index-xGquCu8c.js";import"./i18n-defaults-DlmaUOWU.js";import"./I18nContext-RJHUyvz-.js";import"./index-CGRQZsF8.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./GitHub-Mark-ZT-4UEle.js";import"./TableOfContent-BwVJ8gOQ.js";import"./index-CVsPoBO1.js";import"./Label-DpitxhM9.js";import"./index--OBzSb9_.js";import"./addCustomCSSWithScoping-D_wcte3H.js";import"./index-sX_jgd64.js";import"./index-D7a4hvsa.js";import"./Avatar-BGro6qG4.js";import"./employee-Cmzn10U8.js";import"./index-cn-qZkgT.js";import"./spacing-Bgb-YkCp.js";import"./index-CRkO80su.js";import"./index-6J2frV2o.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
