import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{useMDXComponents as m}from"./index-_byTH_QA.js";import{F as p}from"./ProjectTemplate-a406O3nJ.js";import{C as a}from"./ControlsWithNote-CpUyLKqr.js";import{D as s}from"./DocsHeader-Dho-TcFV.js";import"./index-Dl6G-zuu.js";import{M as d,d as r}from"./index-CDikr9MB.js";import{C as l,D as e,W as x}from"./Loader.stories-BEO98fLy.js";import"./react-jss.esm-BPPChJW9.js";import"./inheritsLoose-D8L2VVdp.js";import"./theming.esm-5daRW75o.js";import"./index-DLmPGigk.js";import"./iframe-By-7yFHo.js";import"../sb-preview/runtime.js";import"./UI5Element-DtnZiShc.js";import"./Boot-DwA_pgKp.js";import"./VersionInfo-Bnh5Htkx.js";import"./CustomElementsScopeUtils-BkU30VC6.js";import"./withWebComponent-DRPzk8yN.js";import"./utils-BopS74sX.js";import"./useIsomorphicLayoutEffect-gsbYElqV.js";import"./slot-Df15G--e.js";import"./event-CegLCnR0.js";import"./i18nBundle-CW3QmvUh.js";import"./decline-DqGOoHuM.js";import"./Icons-Dptlkq46.js";import"./i18n-defaults-BdfZArTM.js";import"./information-CElEnJTC.js";import"./alert-BU8JezYB.js";import"./class-map-DOxVO0GK.js";import"./Icon-DvcRDrqS.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./Button-L0N45cMZ.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-ByZSnYVg.js";import"./chunk-HLWAVYOI-zgUPKOXp.js";import"./react-18-Bamk9FSf.js";import"./index-D1_ZHIBm.js";import"./index-t2jtc2K4.js";import"./clsx-B-dksMZM.js";import"./index-xixccYnt.js";import"./Label-BgNHvv84.js";import"./WrappingType-CW8URInd.js";import"./index-DT7hPLhq.js";import"./index-DP7-kR7O.js";import"./Link-RzzTDKIU.js";import"./index-CZEQeNPY.js";import"./Popover-DmSynMj1.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DV-WEd1e.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-BPk9bxJK.js";import"./FocusableElements-D39FYWGM.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-CBU2dt4G.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-COTFu3zX.js";import"./BrowserScrollbar.css-BtosXvtb.js";import"./index-C3N6u2gC.js";import"./i18n-defaults-BV9KeZ-W.js";import"./I18nContext-BcGksm2n.js";import"./ThemingParameters--AGRs54p.js";import"./index-CiTIhke1.js";import"./useStylesheet-BNfFiS2u.js";import"./ModalsContext-qaxSwC3j.js";import"./addCustomCSSWithScoping-BngKgOcf.js";import"./index-BxJJZmtA.js";import"./index-DtfdWEAA.js";import"./Avatar-BX5t-LjK.js";import"./employee-BdaP6Y8j.js";import"./index-DiYJgeH5.js";import"./utils-C8n8YrfO.js";import"./main-HWtSBowW.js";import"./index-DO938haM.js";import"./sys-help-2-3w6M8wZl.js";import"./copy-CM5pqsHd.js";import"./GitHub-Mark-EHn_tOX6.js";import"./TableOfContent-PxbhlRUi.js";import"./_baseForOwn-DFjKyXZi.js";import"./mapValues-BvzalXkB.js";import"./_baseUniq-DRxb5hvO.js";import"./index-2V9fy1S2.js";import"./index-DrFu-skq.js";import"./spacing-Bgb-YkCp.js";import"./index-Cbb-oeMT.js";import"./index-RRGlkfnj.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:l}),`
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
