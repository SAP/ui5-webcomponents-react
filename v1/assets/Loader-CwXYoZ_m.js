import{j as t}from"./useIsomorphicLayoutEffect-CikWMOA2.js";import{useMDXComponents as m}from"./index-3-_tf5dF.js";import{M as p,C as r}from"./index-DE8IS_N-.js";import{C as a}from"./ControlsWithNote-C2RR_hI0.js";import{D as s}from"./DocsHeader-DRlKEUJh.js";import{F as d}from"./ProjectTemplate-xuc5aS59.js";import"./index-BP8_t0zE.js";import{C as l,D as e,W as x}from"./Loader.stories-YNGF5YqV.js";import"./iframe-b_MTD6kD.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-DPW3bdr7.js";import"./main-HWtSBowW.js";import"./index-D2KtrYBD.js";import"./UI5Element-Dvkr4ftu.js";import"./Boot-BJoOGsKW.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScope-GSIIlBKM.js";import"./withWebComponent-BCCnzL34.js";import"./utils-Sfm-TJlC.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-wW0MItbA.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-BjzhKVYQ.js";import"./Icons-N9fhreAf.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-DD3rGyNs.js";import"./sys-help-2-DI93tH_2.js";import"./information-BcSpE2Ne.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-Bk-rwgUA.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-DXLPKTKT.js";import"./index--kiS1WjX.js";import"./decline-JmSfETii.js";import"./class-map-D_mD7-LZ.js";import"./Button-D4b8EzwK.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./index-B6_sBNuw.js";import"./Popover-DzCK8UbC.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-BdT6tjAh.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-Cpy-U-T0.js";import"./FocusableElements-BZF2F5GS.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DN6_bBb8.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-DamJfpFo.js";import"./BrowserScrollbar.css-CDYHTzEN.js";import"./index-DEm13LAu.js";import"./Link-o5XdlJUs.js";import"./chunk-HLWAVYOI-DEN1a90T.js";import"./client-Di-4O7We.js";import"./copy-DX9qIOqh.js";import"./index-DPQB4NWh.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BlsaS3Lf.js";import"./index-BhJWt8MY.js";import"./i18n-defaults-BFp98Yot.js";import"./I18nContext-RJHUyvz-.js";import"./index-n7qtibZV.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./GitHub-Mark-k88h76JY.js";import"./TableOfContent-B_FEQs_S.js";import"./index-ClRQd1jq.js";import"./Label-BC-N-dx-.js";import"./index-Tv5zRnb9.js";import"./addCustomCSSWithScoping-A9YHAMuM.js";import"./index-DZUVD9mF.js";import"./index-CW6PWrfD.js";import"./Avatar-BoCRIXPa.js";import"./employee-BxX8EC9G.js";import"./index-z2wdtfMT.js";import"./spacing-Bgb-YkCp.js";import"./index-C5lRZbPp.js";import"./index-W8GynUIJ.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
