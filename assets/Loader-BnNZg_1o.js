import{j as t}from"./useIsomorphicLayoutEffect-BZqdrUgG.js";import{useMDXComponents as m}from"./index-3-_tf5dF.js";import{M as p,C as r}from"./index-Ha3Eymnb.js";import{C as a}from"./ControlsWithNote-DnSsDLIA.js";import{D as s}from"./DocsHeader-CwvvpvBd.js";import{F as d}from"./ProjectTemplate-5GlQDb_i.js";import"./index-BP8_t0zE.js";import{C as l,D as e,W as x}from"./Loader.stories-Csjyy7QC.js";import"./iframe-0t0bluh7.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-BJrzIWg9.js";import"./main-HWtSBowW.js";import"./index-AcmEfHsG.js";import"./UI5Element-DH5oRWb7.js";import"./Boot-DdVREbXE.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScope-5eeswjJY.js";import"./withWebComponent-CFCcsgaR.js";import"./utils-B_1Wl3Io.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-VKnKJfRd.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-5sSxuG1B.js";import"./Icons-Ce4pu5im.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-BZWwXjHP.js";import"./sys-help-2-B8iW5g3p.js";import"./information-B6WCub9Q.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-sERyhXNI.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-B3SMwW1O.js";import"./index-BP3GWWnk.js";import"./decline-BKu2yS0R.js";import"./class-map-BVs8Mnz-.js";import"./Button-C7MkX4Mc.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./index-n0fkOAT5.js";import"./Popover-DRLSd65f.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-BU2QZN3s.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-DFDsyNUc.js";import"./FocusableElements-DPTH-2DQ.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-SVe57yR2.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-4J279J6B.js";import"./BrowserScrollbar.css-RQCcsA_4.js";import"./index-BowageyY.js";import"./Link-iD7tARGw.js";import"./chunk-HLWAVYOI-BPnhSji2.js";import"./client-Di-4O7We.js";import"./copy-G9rVuVfS.js";import"./index-BpzLxWcJ.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DdJpFDQo.js";import"./index-DXYWpQLV.js";import"./i18n-defaults-CNtbapJN.js";import"./I18nContext-RJHUyvz-.js";import"./index-BYuIjXoA.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./GitHub-Mark-BxlqkPuV.js";import"./TableOfContent-C5W6TYrc.js";import"./index-DxJV5SPg.js";import"./Label-CxCcCr4B.js";import"./index-CKBLKqiI.js";import"./addCustomCSSWithScoping-DdG0dXFN.js";import"./index-Ef76ooZA.js";import"./index-Bgmqgcz3.js";import"./Avatar-C7-CIAtb.js";import"./employee-CZvuBdeB.js";import"./index-CRQsAHr7.js";import"./spacing-Bgb-YkCp.js";import"./index-Cm7rOWSM.js";import"./index-Dy6e-Nfq.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
`,t.jsx(d,{})]})}function Kt(i={}){const{wrapper:o}={...m(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(n,{...i})}):n(i)}export{Kt as default};
