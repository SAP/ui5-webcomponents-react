import{j as t}from"./useIsomorphicLayoutEffect-VT0hzFUo.js";import{useMDXComponents as m}from"./index-3-_tf5dF.js";import{M as p,C as r}from"./index-DmLHyRHL.js";import{C as a}from"./ControlsWithNote-CRhTZ4rW.js";import{D as s}from"./DocsHeader-CednL7yd.js";import{F as d}from"./ProjectTemplate-D2PiKrnJ.js";import"./index-BP8_t0zE.js";import{C as l,D as e,W as x}from"./Loader.stories-x_dSC2XI.js";import"./iframe-B-uZ_NDJ.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-AHw1oCzX.js";import"./main-HWtSBowW.js";import"./index-Ch4AuG7T.js";import"./UI5Element-DwbFyBon.js";import"./Boot-BVnGU0ip.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-B2x3tIsm.js";import"./withWebComponent-DvmwIdUK.js";import"./utils-neMnggoA.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-DbWkXQeQ.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-_9Cp-e0V.js";import"./Icons-DyBGPyMo.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-kZpvVQc-.js";import"./sys-help-2-pwK9_awn.js";import"./information-5jLlktsT.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-CJTybc-z.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-CqU3c0Xc.js";import"./index-Bbb6DkxW.js";import"./decline-CHA057wR.js";import"./class-map-CS8eahb3.js";import"./Button-BsmQPuS3.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./index-BNW8g8HI.js";import"./Popover-ComfN-sG.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-CoIIx-oA.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-BspShIhm.js";import"./FocusableElements-DEjr2b5c.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DPru0u-P.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-RUCW1mQv.js";import"./BrowserScrollbar.css-BTaDXFx1.js";import"./index-JKUOTod1.js";import"./Link-DIcSBYfZ.js";import"./chunk-HLWAVYOI-BovDm19J.js";import"./client-Di-4O7We.js";import"./copy-AJFuNtDX.js";import"./index-CDaF3Q0u.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DovReOaw.js";import"./index-CNIrU-iy.js";import"./i18n-defaults-DgugUEvt.js";import"./I18nContext-RJHUyvz-.js";import"./index-CL_5mZ89.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./GitHub-Mark-Dk-S7sqj.js";import"./TableOfContent-DNodUyQA.js";import"./index-DMhen13m.js";import"./Label-8bLCWgMU.js";import"./index-CWoCpoQD.js";import"./addCustomCSSWithScoping-VI82Stk0.js";import"./index-CD_i7a2T.js";import"./index-DEtKF28u.js";import"./Avatar-Czn1NGIX.js";import"./employee-wCGkTOTe.js";import"./index-BxfWe7UP.js";import"./spacing-Bgb-YkCp.js";import"./index-Bw0XPJJK.js";import"./index-DiK8BcMR.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
