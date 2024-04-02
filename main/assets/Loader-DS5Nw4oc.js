import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{useMDXComponents as m}from"./index-_byTH_QA.js";import{F as p}from"./ProjectTemplate-Dg4DYmnV.js";import{C as a}from"./ControlsWithNote-BE22ix1P.js";import{D as s}from"./DocsHeader-kkCtgEAA.js";import"./index-Dl6G-zuu.js";import{M as d,d as r}from"./index-CinF7KCh.js";import{C as l,D as e,W as x}from"./Loader.stories-DYpbZ5Se.js";import"./react-jss.esm-BPPChJW9.js";import"./inheritsLoose-D8L2VVdp.js";import"./theming.esm-5daRW75o.js";import"./index-B02M4D-C.js";import"./iframe-BarFEPMZ.js";import"../sb-preview/runtime.js";import"./UI5Element-TZfj5eGG.js";import"./Boot-CiW9Yqx0.js";import"./VersionInfo-BESRVDo6.js";import"./CustomElementsScopeUtils-Brq83ayG.js";import"./withWebComponent-WdPEUVG_.js";import"./utils-B7AYZOSV.js";import"./useIsomorphicLayoutEffect-gsbYElqV.js";import"./slot-Df15G--e.js";import"./event-CegLCnR0.js";import"./i18nBundle-C2WczoLt.js";import"./decline-D6EEqVrc.js";import"./Icons-Bz_R9SHk.js";import"./i18n-defaults-BdfZArTM.js";import"./information-DW1Al7d0.js";import"./alert-CXHMnQvw.js";import"./class-map-DdS6yb0u.js";import"./Icon-CItvJRAI.js";import"./Keys-BiUfzlGt.js";import"./parameters-bundle.css-B6zgRRib.js";import"./Button-D5VmNntQ.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-weVOdquz.js";import"./chunk-HLWAVYOI-Dtar0TRD.js";import"./react-18-Bamk9FSf.js";import"./index-D1_ZHIBm.js";import"./index-t2jtc2K4.js";import"./clsx-B-dksMZM.js";import"./index-C1Z_vrZC.js";import"./Label-Cuq9lQQu.js";import"./WrappingType-CW8URInd.js";import"./index-DVTy9rRV.js";import"./index-CjyhVo2e.js";import"./Link-ShECJtRl.js";import"./index-QjFneSH3.js";import"./Popover-BZGRcTIp.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-FBsPN5sA.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-o-m9Y-i7.js";import"./FocusableElements-DLk5IaaK.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DDqpi34j.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-CSZX4I-3.js";import"./BrowserScrollbar.css-ByCTonOa.js";import"./index-CYjHeYtF.js";import"./i18n-defaults-FgEXIKeH.js";import"./I18nContext-BcGksm2n.js";import"./ThemingParameters--AGRs54p.js";import"./index-DvBQI2Vb.js";import"./useStylesheet-Cs3TLZWO.js";import"./ModalsContext-qaxSwC3j.js";import"./addCustomCSSWithScoping-CohoEJjR.js";import"./index-CWwbdnCU.js";import"./index-w8n07zSZ.js";import"./Avatar-BCyNq7eW.js";import"./employee-BRu8U1FM.js";import"./index-Mw60FdY8.js";import"./utils-CVu1OgkI.js";import"./index-OZFR8Vbs.js";import"./sys-help-2-DXsgVRAc.js";import"./copy-ChpJf3sv.js";import"./GitHub-Mark-EHn_tOX6.js";import"./TableOfContent-dgGG4QaO.js";import"./_baseForOwn-DFjKyXZi.js";import"./mapValues-BvzalXkB.js";import"./_baseUniq-DRxb5hvO.js";import"./index-2V9fy1S2.js";import"./index-DrFu-skq.js";import"./spacing-Bgb-YkCp.js";import"./index-HwSHJpb6.js";import"./index-Dimcfuga.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:l}),`
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
`,t.jsx(p,{})]})}function Qt(i={}){const{wrapper:o}={...m(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(n,{...i})}):n(i)}export{Qt as default};
