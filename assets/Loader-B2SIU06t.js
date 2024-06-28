import{j as t}from"./useIsomorphicLayoutEffect-x3FS-xo7.js";import{useMDXComponents as m}from"./index-3-_tf5dF.js";import{M as p,C as r}from"./index-DxuOfQlo.js";import{C as a}from"./ControlsWithNote-CZJc6GdO.js";import{D as s}from"./DocsHeader-4Tnph7Tn.js";import{F as d}from"./ProjectTemplate-C8X93s0c.js";import"./index-BP8_t0zE.js";import{C as l,D as e,W as x}from"./Loader.stories-6BQTgxnj.js";import"./iframe-BcfUQkuZ.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-Br2NyzTh.js";import"./main-HWtSBowW.js";import"./index-BeHW3T8O.js";import"./UI5Element-SUktJcPg.js";import"./Boot-CclrjlB_.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-CSlIoILc.js";import"./withWebComponent-BgGNQpSI.js";import"./utils-BiMDJYwV.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-DaXqDOt3.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-C_A-NjlC.js";import"./Icons-Bft-hUnu.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css--Z5ctRmg.js";import"./sys-help-2-D4EtiAJW.js";import"./information-C5yxSOcR.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-ClVg17pq.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-1MXDhRqV.js";import"./index-DqXXZe2g.js";import"./decline-ubQgRYfe.js";import"./class-map-CeKKj88r.js";import"./Button-awfxS-u-.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./index-DkpNLt35.js";import"./Popover-DDKOmkxw.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-uPounuup.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-CWX1O2jP.js";import"./FocusableElements-i0omOcs_.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-Bwxc3Ll7.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-80OTj-RC.js";import"./BrowserScrollbar.css-7CdlaW1M.js";import"./index-C3ku0FIC.js";import"./Link-fwsdvAFJ.js";import"./chunk-HLWAVYOI-DE7Cd6yW.js";import"./client-Di-4O7We.js";import"./copy-CpRxx2mm.js";import"./index-BykYlwjP.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-NckrYtSC.js";import"./index-DOeO8XXJ.js";import"./i18n-defaults-Bdewnnuu.js";import"./I18nContext-RJHUyvz-.js";import"./index-C2xRLxKL.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./GitHub-Mark-BiaPdlPr.js";import"./TableOfContent-DEwwt8Fx.js";import"./index-DLdLI-Lw.js";import"./Label-DmN4xHd_.js";import"./index-BaLzQqsI.js";import"./addCustomCSSWithScoping-9LlgEVTF.js";import"./index-DpSkdN2-.js";import"./index-CiKDZMgT.js";import"./Avatar-BLe1VqxP.js";import"./employee-uGJRlzwB.js";import"./index-4leB1AGq.js";import"./spacing-Bgb-YkCp.js";import"./index-DlGXZ6uy.js";import"./index-D9sZ5sya.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
