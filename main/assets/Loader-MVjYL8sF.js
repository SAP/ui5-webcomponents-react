import{j as t}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as m}from"./index-DtGqrCZN.js";import{F as p}from"./ProjectTemplate-C8PB08XF.js";import{C as a}from"./ControlsWithNote-4WAAQNmU.js";import{D as s}from"./DocsHeader-uT3dVPvD.js";import"./index-Cu9bd8lq.js";import{M as d,C as r}from"./index-CQTAO8tP.js";import{C as l,D as e,W as x}from"./Loader.stories-BbuJTimr.js";import"./react-jss.esm-BpNdaHSZ.js";import"./inheritsLoose-D8L2VVdp.js";import"./theming.esm-BaGMLphO.js";import"./index-kmDWEYkA.js";import"./iframe-B9ojHKoH.js";import"../sb-preview/runtime.js";import"./UI5Element-TZfj5eGG.js";import"./Boot-CiW9Yqx0.js";import"./VersionInfo-BESRVDo6.js";import"./CustomElementsScopeUtils-Brq83ayG.js";import"./withWebComponent-CmHHCrVX.js";import"./utils-CnhbIiu8.js";import"./useIsomorphicLayoutEffect-CDseMwwv.js";import"./slot-Df15G--e.js";import"./event-CegLCnR0.js";import"./i18nBundle-C2WczoLt.js";import"./decline-D6EEqVrc.js";import"./Icons-Bz_R9SHk.js";import"./i18n-defaults-BdfZArTM.js";import"./information-DW1Al7d0.js";import"./alert-CXHMnQvw.js";import"./class-map-CmJPAu_C.js";import"./Icon-xNvpL1oe.js";import"./Keys-BiUfzlGt.js";import"./parameters-bundle.css-B6zgRRib.js";import"./Button-BzhOkI6c.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-weVOdquz.js";import"./chunk-HLWAVYOI-Dk4242Or.js";import"./client-Cby6Sz3m.js";import"./index-Ckls47V4.js";import"./index-D9X0AKIp.js";import"./clsx-B-dksMZM.js";import"./index-ChJ4ay-7.js";import"./Label-ps0cWtHP.js";import"./WrappingType-CW8URInd.js";import"./index-BeutTfwK.js";import"./index-DpnfAJj0.js";import"./Link-Ckf4Uxns.js";import"./index-BEu48q3i.js";import"./Popover-Jk90pyiT.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-FBsPN5sA.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-1-Fx8yKA.js";import"./FocusableElements-DLk5IaaK.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DDqpi34j.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-DseTvTa6.js";import"./BrowserScrollbar.css-0WwBRmTe.js";import"./index-Clgb5PFv.js";import"./i18n-defaults-DcbMYOf3.js";import"./I18nContext-lEOM8vPx.js";import"./ThemingParameters--AGRs54p.js";import"./index-CvWpx1AF.js";import"./useStylesheet-CLZMRdPE.js";import"./ModalsContext-DDUwbLsf.js";import"./addCustomCSSWithScoping-CWznCzZ1.js";import"./index-DY4lAGWN.js";import"./index-B1NRCyGN.js";import"./Avatar-DrytwCNY.js";import"./employee-BRu8U1FM.js";import"./index--d4BYfBU.js";import"./utils-DJZxX_wL.js";import"./index-BsJcpZyx.js";import"./sys-help-2-DXsgVRAc.js";import"./copy-ChpJf3sv.js";import"./GitHub-Mark-Cz0z7Mur.js";import"./TableOfContent-D08YBOJ5.js";import"./_baseForOwn-CD7metVA.js";import"./mapValues-DbyeKAf9.js";import"./_baseUniq-Dmu8z6NP.js";import"./index-D-lniKcH.js";import"./index-DrFu-skq.js";import"./spacing-Bgb-YkCp.js";import"./index-B3L27dZ_.js";import"./index-CgIv350b.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:l}),`
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
