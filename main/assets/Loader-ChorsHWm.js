import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{useMDXComponents as m}from"./index-_byTH_QA.js";import{F as p}from"./ProjectTemplate-DJowqKqb.js";import{C as a}from"./ControlsWithNote-CwThRDGH.js";import{D as s}from"./DocsHeader-BbAI9mgA.js";import"./index-Dl6G-zuu.js";import{M as d,d as r}from"./index-8TfwAPIG.js";import{C as l,D as e,W as x}from"./Loader.stories-JfPgiXPY.js";import"./react-jss.esm-BPPChJW9.js";import"./inheritsLoose-D8L2VVdp.js";import"./theming.esm-5daRW75o.js";import"./index-CGo-kcfh.js";import"./iframe-CYagPyBf.js";import"../sb-preview/runtime.js";import"./UI5Element-Lw3nTtTN.js";import"./Boot-B0Gt2ObV.js";import"./ManagedStyles-DX5mlBXq.js";import"./CustomElementsScopeUtils-CeSGtO6z.js";import"./withWebComponent-BF9ncEMl.js";import"./utils-D1_qxj0a.js";import"./useIsomorphicLayoutEffect-gsbYElqV.js";import"./slot-Df15G--e.js";import"./event-CegLCnR0.js";import"./i18nBundle-Duvqe7kG.js";import"./decline-D5dgPGzi.js";import"./Icons-DfCrNAdQ.js";import"./i18n-defaults-BdfZArTM.js";import"./information-BLcQOnlv.js";import"./alert-D4nm4k8k.js";import"./class-map-DeOlvaAn.js";import"./Icon-C20AIXTC.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./Button-D13uYO2F.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-D1sujP0E.js";import"./chunk-HLWAVYOI-DWPuA3aa.js";import"./react-18-Bamk9FSf.js";import"./index-D1_ZHIBm.js";import"./index-t2jtc2K4.js";import"./clsx-B-dksMZM.js";import"./index-C0Ndq8sy.js";import"./Label-CTVRjihb.js";import"./WrappingType-CW8URInd.js";import"./index-B0cEwVma.js";import"./index-BCVc-sct.js";import"./Link-B2j2s4Ih.js";import"./index-Cc1RJ5f9.js";import"./Popover-DXiCQ_F_.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DmBeTAQh.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-C1DKTBbu.js";import"./FocusableElements-4YGFH9ta.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-OFvM0oAF.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-O1QwFldx.js";import"./BrowserScrollbar.css-BiclUngR.js";import"./index-BjS4ztKm.js";import"./i18n-defaults-GDPbxlcd.js";import"./I18nContext-BcGksm2n.js";import"./ThemingParameters--AGRs54p.js";import"./index-BPVTr8FI.js";import"./useStylesheet-D5wp95d6.js";import"./ModalsContext-qaxSwC3j.js";import"./addCustomCSSWithScoping-DAt1aefI.js";import"./index-PFOJyKcr.js";import"./index-BepD6NX9.js";import"./Avatar-BwXc-3ne.js";import"./employee-C3y4a2zL.js";import"./index-DCZNXoiN.js";import"./utils-DgVYl3Pw.js";import"./main-HWtSBowW.js";import"./index-Ds8qffTc.js";import"./sys-help-2-Dp_ZH8Yt.js";import"./copy-Dz4oTMJU.js";import"./GitHub-Mark-EHn_tOX6.js";import"./TableOfContent-DBD4Bi4E.js";import"./_baseForOwn-DFjKyXZi.js";import"./mapValues-BvzalXkB.js";import"./_baseUniq-DRxb5hvO.js";import"./index-2V9fy1S2.js";import"./index-DrFu-skq.js";import"./spacing-Bgb-YkCp.js";import"./index-Dy7OML1j.js";import"./index-JPoehcOp.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:l}),`
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
`,t.jsx(p,{})]})}function Vt(i={}){const{wrapper:o}={...m(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(n,{...i})}):n(i)}export{Vt as default};
