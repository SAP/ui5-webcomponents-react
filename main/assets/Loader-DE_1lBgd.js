import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{useMDXComponents as m}from"./index-_byTH_QA.js";import{F as p}from"./ProjectTemplate-CZMk4x2-.js";import{C as a}from"./ControlsWithNote-DAZLx57g.js";import{D as s}from"./DocsHeader-e6uZcIO7.js";import"./index-Dl6G-zuu.js";import{M as d,d as r}from"./index-DXfTYDN1.js";import{C as l,D as e,W as x}from"./Loader.stories-CUO6TbmW.js";import"./react-jss.esm-BLS6mvEP.js";import"./inheritsLoose-D8L2VVdp.js";import"./ThemingParameters-CmCBq50F.js";import"./index-BDrS7_T6.js";import"./iframe-Bpir1E0L.js";import"../sb-preview/runtime.js";import"./UI5Element-Lw3nTtTN.js";import"./Boot-B0Gt2ObV.js";import"./ManagedStyles-DX5mlBXq.js";import"./CustomElementsScopeUtils-CeSGtO6z.js";import"./withWebComponent-zM8JcmxY.js";import"./utils-syHHPmsO.js";import"./useIsomorphicLayoutEffect-gsbYElqV.js";import"./slot-Df15G--e.js";import"./event-CegLCnR0.js";import"./i18nBundle-Duvqe7kG.js";import"./decline-D5dgPGzi.js";import"./Icons-DfCrNAdQ.js";import"./i18n-defaults-BdfZArTM.js";import"./information-BLcQOnlv.js";import"./alert-D4nm4k8k.js";import"./class-map-mIG3ftuK.js";import"./Icon-Dbo8BIv6.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./Button-BFndOBlc.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-D1sujP0E.js";import"./chunk-HLWAVYOI-Bxl00jJ0.js";import"./react-18-Bamk9FSf.js";import"./index-D1_ZHIBm.js";import"./index-DC8WEI0Q.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-D5wp95d6.js";import"./index-DfdXOs_5.js";import"./Label-D6k6fzJu.js";import"./WrappingType-CW8URInd.js";import"./index-CL0MRgMK.js";import"./index-Dg-es6SQ.js";import"./Link-G_0GWmft.js";import"./index-BSsDq1DG.js";import"./Popover-B7UMWr5A.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DmBeTAQh.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-BmjVxBVQ.js";import"./FocusableElements-4YGFH9ta.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-OFvM0oAF.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-CweQHFZo.js";import"./BrowserScrollbar.css-B3MoNUKh.js";import"./index-qBp3IRVS.js";import"./i18n-defaults-DkhM4WLz.js";import"./I18nContext-BcGksm2n.js";import"./index-BfGKgmQa.js";import"./ModalsContext-qaxSwC3j.js";import"./addCustomCSSWithScoping-de5_lUMj.js";import"./index-CF1jgLDK.js";import"./index-p8gH0rsp.js";import"./Avatar-CHcvLeex.js";import"./employee-C3y4a2zL.js";import"./index-Cz6loQ4r.js";import"./utils-CKNryn9b.js";import"./main-HWtSBowW.js";import"./index-BOkcqR-d.js";import"./sys-help-2-Dp_ZH8Yt.js";import"./copy-Dz4oTMJU.js";import"./GitHub-Mark-EHn_tOX6.js";import"./TableOfContent-BuJdCH3S.js";import"./_baseForOwn-DFjKyXZi.js";import"./mapValues-BvzalXkB.js";import"./_baseUniq-DRxb5hvO.js";import"./index-DTQpHR-X.js";import"./index-DrFu-skq.js";import"./spacing-Bgb-YkCp.js";import"./index-BtGrz3Gg.js";import"./index-oF-FT8yh.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:l}),`
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
