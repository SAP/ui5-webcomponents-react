import{j as t}from"./useIsomorphicLayoutEffect-DxKEogMX.js";import{useMDXComponents as m}from"./index-3-_tf5dF.js";import{M as p,C as r}from"./index-BSAHFUXL.js";import{C as a}from"./ControlsWithNote-DFak-vgJ.js";import{D as s}from"./DocsHeader-D0LzGPOD.js";import{F as d}from"./ProjectTemplate-Dm7554A_.js";import"./index-BP8_t0zE.js";import{C as l,D as e,W as x}from"./Loader.stories-ObHTO6cM.js";import"./iframe-BjMoupZq.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./index-BtNKI908.js";import"./UI5Element-CTUeyjn-.js";import"./Boot-HIcYreCJ.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScope-OuufJIgt.js";import"./withWebComponent-iwEMLCwM.js";import"./utils-BWz0JEZ6.js";import"./slot-Df15G--e.js";import"./event-CegLCnR0.js";import"./i18nBundle-DAKTKoOS.js";import"./decline-2wLd8OXz.js";import"./Icons-Cd2oYa75.js";import"./i18n-defaults-BdfZArTM.js";import"./information-ByKCPUae.js";import"./alert-DgMNwF9A.js";import"./class-map-BOjq1HnK.js";import"./Icon-snMa4zXw.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-Dq8i2jqa.js";import"./Button-DH5lF6fZ.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./Tooltips-BagSeUK-.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-DI58k5rQ.js";import"./chunk-HLWAVYOI-DWr2Fk3L.js";import"./client-Di-4O7We.js";import"./copy-BxM08Fv1.js";import"./index-D32Kf0i8.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-CKNtzFUp.js";import"./index-BHtFRKyY.js";import"./i18n-defaults-eAAV7luf.js";import"./I18nContext-RJHUyvz-.js";import"./index-BqUQYiOk.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./utils-DgeZdg6V.js";import"./main-HWtSBowW.js";import"./GitHub-Mark-BWdgVHQx.js";import"./TableOfContent-9p1o5MmN.js";import"./index-SvvSoH13.js";import"./Link-CS4JDN8g.js";import"./WrappingType-CW8URInd.js";import"./index-CO4Ta_X3.js";import"./Label-4lKVr1TQ.js";import"./index-Rbdud6do.js";import"./index-BBpaOH7t.js";import"./sys-help-2-Bb9UOdy0.js";import"./index-BZUWesjH.js";import"./Popover-AhBPjl_E.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-BSU3X0q-.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-82AGaEWQ.js";import"./FocusableElements-j-RSUQUA.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DXT2JxMm.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-lexY8e40.js";import"./BrowserScrollbar.css-CW1dP_e5.js";import"./addCustomCSSWithScoping-BqDpVQ5B.js";import"./index-CHZ2gPzb.js";import"./index-BElfjaV9.js";import"./Avatar-BucQZ245.js";import"./employee-DOMuhFXQ.js";import"./index-BAE7Wj2f.js";import"./spacing-Bgb-YkCp.js";import"./index-BQM1rZRD.js";import"./index-Cy5U4qgL.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
