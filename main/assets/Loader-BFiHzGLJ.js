import{j as t}from"./useIsomorphicLayoutEffect-Cdhcir-A.js";import{useMDXComponents as m}from"./index-DcZOShwE.js";import{M as p,C as r}from"./index-DlfyUcNP.js";import{C as a}from"./ControlsWithNote-BIku_tmN.js";import{D as s}from"./DocsHeader-C5ldC1ia.js";import{F as d}from"./ProjectTemplate-L_D0cOGV.js";import"./index-gJgmXzrm.js";import{C as l,D as e,W as x}from"./Loader.stories-CCTd8RkZ.js";import"./iframe-CKAhA9_x.js";import"../sb-preview/runtime.js";import"./index-DjqRnomV.js";import"./_baseForOwn-CLRePLhI.js";import"./mapValues-B_fQXYuL.js";import"./_baseUniq-C22BvjpN.js";import"./index-DPb1xiaU.js";import"./index-DrFu-skq.js";import"./utils-D1G7wlrA.js";import"./main-HWtSBowW.js";import"./index-CtnrAinQ.js";import"./UI5Element-CzMfQqnP.js";import"./Boot-DutchAmg.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-HfHyyjXv.js";import"./withWebComponent-B-q4dpqR.js";import"./utils-CzTHXoYc.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-C7Xi0JmF.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-Czk9o4-x.js";import"./Icons-DOypJ1ey.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-kZpvVQc-.js";import"./sys-help-2-JVQsHWLX.js";import"./information-Bz3ag37N.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-Cx3mJvyk.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-iTMd0Np9.js";import"./index-Dg3JKqdl.js";import"./decline-DCttDR6b.js";import"./class-map-D3G_ubmA.js";import"./Button-BzKON9jh.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./index-BXF1Ug5z.js";import"./Popover-CgEuE7bG.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-_doHq5C_.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-3JkkzoGu.js";import"./FocusableElements-CGV1dSWU.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DQKG4dIE.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-5kI6_gZF.js";import"./BrowserScrollbar.css-opuuJdpl.js";import"./index-sWNdkNCn.js";import"./Link-BpvJx02W.js";import"./chunk-HLWAVYOI-HRRk2TRS.js";import"./client-DNfJn3vO.js";import"./copy-DwYLhAbQ.js";import"./index-D9zrd22s.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BapCJMzX.js";import"./index-BJXBoxs7.js";import"./i18n-defaults-BFgjw7fK.js";import"./I18nContext-D8i4N15C.js";import"./index-CqL1iFrm.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-BWMWV5L6.js";import"./useIsomorphicId-BEB4eg8l.js";import"./GitHub-Mark-hv4rNEh_.js";import"./TableOfContent-DttKn3ta.js";import"./index-DMi1B-w1.js";import"./Label-COhM1iHW.js";import"./index-D5IdN3i0.js";import"./addCustomCSSWithScoping-E64gwvMe.js";import"./index-D5w_QVRj.js";import"./index-DydjIXv_.js";import"./Avatar-B4OEebUt.js";import"./employee-B43YsEH_.js";import"./index-B8l07-6v.js";import"./spacing-Bgb-YkCp.js";import"./index-CqjCx58Y.js";import"./index-BYljlkap.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
