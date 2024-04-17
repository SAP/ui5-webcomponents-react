import{j as t}from"./ManagedStyles-CGOl3myG.js";import{useMDXComponents as m}from"./index-_byTH_QA.js";import{F as p}from"./ProjectTemplate-DEztgVYf.js";import{C as a}from"./ControlsWithNote-qOH7Jmpz.js";import{D as s}from"./DocsHeader-DvBVygYI.js";import"./index-Dl6G-zuu.js";import{M as d,d as r}from"./index-BcYSoVkD.js";import{C as l,D as e,W as x}from"./Loader.stories-jMPEDCgS.js";import"./index-BgYfxxoj.js";import"./clsx-B-dksMZM.js";import"./inheritsLoose-D8L2VVdp.js";import"./theming.esm-5daRW75o.js";import"./i18n-defaults-z_6XcBmn.js";import"./i18nBundle-Bsmczzvl.js";import"./Boot-Cnne3s27.js";import"./EventProvider-B3ZIXKWe.js";import"./I18nContext-BcGksm2n.js";import"./useIsomorphicLayoutEffect-gsbYElqV.js";import"./ThemingParameters--AGRs54p.js";import"./index-B4uZZmdX.js";import"./iframe-CX1kMpsI.js";import"../sb-preview/runtime.js";import"./UI5Element-tLl76uRl.js";import"./CustomElementsScopeUtils-B75AoQkl.js";import"./withWebComponent-M0bhuh56.js";import"./utils-CeXI0Hi-.js";import"./slot-Df15G--e.js";import"./event-CegLCnR0.js";import"./decline-BbDtzwS9.js";import"./Icons-CBAKipU6.js";import"./i18n-defaults-BdfZArTM.js";import"./information-I51WcrjF.js";import"./alert-aIGc7Sj9.js";import"./class-map-BfEumRh6.js";import"./Icon-jwLSXa4t.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./Button-WvH_Wkyp.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-BS_6etQn.js";import"./chunk-HLWAVYOI-C7i6e8Nh.js";import"./react-18-Bamk9FSf.js";import"./index-D1_ZHIBm.js";import"./index-B81-j-0s.js";import"./useStylesheet-CxAEQokk.js";import"./index-DJzcDS_W.js";import"./Label-CbTMDkBb.js";import"./WrappingType-CW8URInd.js";import"./index-Dz0JocfY.js";import"./index-BDBGDk-z.js";import"./Link-Dr8oTSuf.js";import"./index-Czm7_3jX.js";import"./Popover-DyMce1L3.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-ChEyoFp6.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-DiaJFluj.js";import"./FocusableElements-B13w0nQJ.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DFfXzzyE.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-wgSlw8JF.js";import"./BrowserScrollbar.css-1pcdmAMh.js";import"./index-DYfcvCZD.js";import"./ModalsContext-qaxSwC3j.js";import"./addCustomCSSWithScoping-BzrCsXtN.js";import"./index-Jphd1cKU.js";import"./index-CN5pUlq0.js";import"./Avatar-D5wHCZAB.js";import"./employee-BBO6Qv_x.js";import"./index-Cf3vqSEb.js";import"./utils-B_p4vt7G.js";import"./main-HWtSBowW.js";import"./index-0OwgrVgA.js";import"./sys-help-2-DBxBNdVt.js";import"./copy-D4uznMtW.js";import"./GitHub-Mark-cyXF45vO.js";import"./TableOfContent-BkNqN_Yu.js";import"./_baseForOwn-DFjKyXZi.js";import"./mapValues-BvzalXkB.js";import"./_baseUniq-DRxb5hvO.js";import"./index-DTQpHR-X.js";import"./index-DrFu-skq.js";import"./spacing-Bgb-YkCp.js";import"./index-ag-fpRh0.js";import"./index-BqjUyJKr.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:l}),`
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
