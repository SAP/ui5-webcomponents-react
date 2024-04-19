import{j as t}from"./ManagedStyles-DBz9b8_7.js";import{useMDXComponents as m}from"./index-DtGqrCZN.js";import{M as p,d as r}from"./index-BD7p81i1.js";import{C as a}from"./ControlsWithNote-DOV4i7yq.js";import{D as s}from"./DocsHeader-Uir-yYHF.js";import{F as d}from"./ProjectTemplate-ChSs3SQi.js";import"./index-Cu9bd8lq.js";import{C as l,D as e,W as x}from"./Loader.stories-chNfI45e.js";import"./iframe-wc6Lccbj.js";import"../sb-preview/runtime.js";import"./index-Ckls47V4.js";import"./_baseForOwn-CD7metVA.js";import"./mapValues-DbyeKAf9.js";import"./_baseUniq-Dmu8z6NP.js";import"./index-CdnsVG_W.js";import"./index-DrFu-skq.js";import"./utils-BAk9lS37.js";import"./main-HWtSBowW.js";import"./index-DAubqzkr.js";import"./UI5Element-C4mSOhNA.js";import"./Boot-Biwz_Caq.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-48ratPWk.js";import"./withWebComponent-C_dYwLuv.js";import"./utils--_sL0meP.js";import"./useIsomorphicLayoutEffect-CDseMwwv.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-Dr6PGakp.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-Clr9g2fS.js";import"./Icons-DjI__-3J.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./sys-help-2-CYHXlBDZ.js";import"./information-_3DJs868.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-BU0AsmHE.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-DyNPhf0P.js";import"./index-DUz1xFd3.js";import"./decline-b84495rg.js";import"./class-map-Cfio9s54.js";import"./Button-BAj8jTq4.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./index-CiKDUlMP.js";import"./Popover-DNMeFD1A.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-ApBaW5cX.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-1I1Br736.js";import"./FocusableElements-BYZ07gKz.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DG5rdHnC.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-DouRFD4_.js";import"./BrowserScrollbar.css-rLpJ_tAN.js";import"./index-CM0KxQWy.js";import"./Link-CMvBWZzp.js";import"./chunk-HLWAVYOI-CC82b-LQ.js";import"./react-18-CyVMVvrE.js";import"./copy-Cu_ZU0U0.js";import"./index-gKp4owBv.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-Emr_nFue.js";import"./index-DkTfA-Yk.js";import"./i18n-defaults-DVTRFCa9.js";import"./I18nContext-lEOM8vPx.js";import"./index-CzirVdIS.js";import"./ThemingParameters--AGRs54p.js";import"./ModalsContext-DDUwbLsf.js";import"./useIsomorphicId-CHfKDsSO.js";import"./GitHub-Mark-DqU93U5N.js";import"./TableOfContent-EISsXySr.js";import"./index-L4XdjSn3.js";import"./Label-CkBRSGa0.js";import"./index-C5-e00u7.js";import"./addCustomCSSWithScoping-BxGdOQ6d.js";import"./index-siYIm0YQ.js";import"./index-D5qANxlN.js";import"./Avatar-DrQd1eyL.js";import"./employee-BUX20iaG.js";import"./index-CFfUvHgu.js";import"./spacing-Bgb-YkCp.js";import"./index-CixJNFPo.js";import"./index-C2SZztzV.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
