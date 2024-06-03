import{j as t}from"./useIsomorphicLayoutEffect-wJjydpYF.js";import{useMDXComponents as m}from"./index-3-_tf5dF.js";import{M as p,C as r}from"./index-BDFJFWRC.js";import{C as a}from"./ControlsWithNote-C07YDCzg.js";import{D as s}from"./DocsHeader-DXHdrkHq.js";import{F as d}from"./ProjectTemplate-BuA6Er6e.js";import"./index-BP8_t0zE.js";import{C as l,D as e,W as x}from"./Loader.stories-CaPOtYGb.js";import"./iframe-BQ3U0USJ.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-PqtVX6bZ.js";import"./main-HWtSBowW.js";import"./index-CbBm9pID.js";import"./UI5Element-DC8MZeOy.js";import"./Boot-DRGCpzpB.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-yz8rUzbr.js";import"./withWebComponent-CWrtEEjV.js";import"./utils-EaJipdFl.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-BdneKiEM.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-CmpPkOGs.js";import"./Icons-CG6FlOJ_.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-CtgfEhuk.js";import"./sys-help-2-BljVJXa3.js";import"./information-CWnHh7YX.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-BiuXmsCV.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-DKt7VHOa.js";import"./index-DHltqp22.js";import"./decline--LpgiSgn.js";import"./class-map-B9wLsnvZ.js";import"./Button-BrKU6WlN.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./index-Cndvzcq2.js";import"./Popover-D2WBCDl9.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-C_R40Sx-.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-BVkg1U_d.js";import"./FocusableElements-CrwTZl4-.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DEdNEOKg.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-MmmenpP7.js";import"./BrowserScrollbar.css-cD_o1v9b.js";import"./index-0Osd7O3V.js";import"./Link-Bsw9emR4.js";import"./chunk-HLWAVYOI-BPl14rgq.js";import"./client-Di-4O7We.js";import"./copy-3Ib5ZJqq.js";import"./index-CVhCT1_x.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DShc4-AB.js";import"./index-6h8N-xs_.js";import"./i18n-defaults-DzvGxznN.js";import"./I18nContext-RJHUyvz-.js";import"./index-CSI8GtFb.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./GitHub-Mark-BXZU7gws.js";import"./TableOfContent-CwAOszbB.js";import"./index-DAakVAzY.js";import"./Label-IIemeO1C.js";import"./index-CgFaBdcc.js";import"./addCustomCSSWithScoping-Bzep2v3d.js";import"./index-CrfizMJr.js";import"./index-Dr21kwpV.js";import"./Avatar-CzFTtzk7.js";import"./employee-DAykk7OJ.js";import"./index-DrAiIXx1.js";import"./spacing-Bgb-YkCp.js";import"./index-CPV86Rb4.js";import"./index-B0re_845.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
