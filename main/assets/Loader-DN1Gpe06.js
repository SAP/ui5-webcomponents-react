import{j as t}from"./ManagedStyles-0Bwp9t5R.js";import{useMDXComponents as m}from"./index-3-_tf5dF.js";import{M as p,C as r}from"./index-DTRgecsE.js";import{C as a}from"./ControlsWithNote-BGuN6W9a.js";import{D as s}from"./DocsHeader-M5G8jsqs.js";import{F as d}from"./ProjectTemplate-DFZU7xxp.js";import"./index-BP8_t0zE.js";import{C as l,D as e,W as x}from"./Loader.stories-C-Iczozj.js";import"./iframe-Ct2Wb2xj.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-D3oq_dfs.js";import"./main-HWtSBowW.js";import"./index-DTCI6rGk.js";import"./UI5Element-BfPpwo_k.js";import"./Boot-BtdVcW0c.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-CjWOyBed.js";import"./withWebComponent-DdLYI_QY.js";import"./utils-VXdlHuBA.js";import"./useIsomorphicLayoutEffect-CnI1knHw.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-Dx46P1iz.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-CDo0XdyR.js";import"./Icons-DgaaT5sV.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./sys-help-2-BtjmRNex.js";import"./information-CIM5_BNu.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-DaAYzDGJ.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-BFrvdQTW.js";import"./index-DlI8GvV4.js";import"./decline-Bq4uAF5d.js";import"./class-map-DwUNpVO-.js";import"./Button-C4siPQ_G.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./index-oHXhHeXF.js";import"./Popover-BRx0aMsU.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-BDyegTwa.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-BGWtnzwQ.js";import"./FocusableElements-FQMFYvMw.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-BxP3RYN1.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-BhswnH6I.js";import"./BrowserScrollbar.css-BmT0sFnr.js";import"./index-BH7V2vb8.js";import"./Link-Ca8TnKXf.js";import"./chunk-HLWAVYOI-DENTmUlk.js";import"./client-Di-4O7We.js";import"./copy-FfYDXqvA.js";import"./index-Bik5a9u4.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DXQOMd9Q.js";import"./index-CCV2VZkT.js";import"./i18n-defaults-B3VmmZkh.js";import"./I18nContext-RJHUyvz-.js";import"./index-CIMqV4DH.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./GitHub-Mark-QeDVj3uD.js";import"./TableOfContent-rpZq6Mwr.js";import"./index-aId3UA8J.js";import"./Label-B0QBRtjK.js";import"./index-BPt_lygD.js";import"./addCustomCSSWithScoping-B4X1apx3.js";import"./index-CiI-jd8i.js";import"./index-BQY96FyR.js";import"./Avatar-DDfgA5P5.js";import"./employee-Cmog-JUE.js";import"./index-CB8RBj1j.js";import"./spacing-Bgb-YkCp.js";import"./index-C41hTB2B.js";import"./index-oXA8ycKx.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
