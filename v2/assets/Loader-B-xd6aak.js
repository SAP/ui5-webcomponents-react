import{j as t}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as m}from"./index-ChplMHeC.js";import{M as p,C as r}from"./index-hZHAzFAL.js";import"./index-CiK-e51e.js";import"./index-A_0wpmQ7.js";import{C as a}from"./ControlsWithNote-CaHtgMf8.js";import{D as s}from"./DocsHeader-CQ3MNcYY.js";import{F as d}from"./CommandsAndQueries-F7oY3bs4.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-Gv3TXXff.js";import{C as l,D as e,W as x}from"./Loader.stories-C4OlhEMm.js";import"./iframe-DzOWA1K8.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-pt4_FAs2.js";import"./utils-Cc7kMCdT.js";import"./useIsomorphicLayoutEffect-ycvDkpIR.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-mNpaFI4J.js";import"./Keys-Can65e7H.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-BdT1PzT1.js";import"./parameters-bundle.css-BQD_Xb6z.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BmK38KuR.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-CjsTKlnu.js";import"./decline-COfFlC7H.js";import"./i18n-defaults-CifGXSvE.js";import"./information-DaPpOrk_.js";import"./information-CnmWG5u0.js";import"./sys-enter-2-CocGGTHn.js";import"./sys-enter-2-DYJZCTEK.js";import"./TagDesign-Dou_yO3g.js";import"./utils-CKdwd20C.js";import"./main-BL2DbqAR.js";import"./index-CBUNCpOB.js";import"./Tag-DIR4S8bz.js";import"./sys-help-2-D2rAenVO.js";import"./index-D4QIma-n.js";import"./Link-_LTgoXxu.js";import"./index-Dmi4gEmW.js";import"./Popover-BepUWsCJ.js";import"./PopupsCommon.css-CggLypH1.js";import"./FocusableElements-CQNfSknU.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-p8jh-9XL.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-DXAtCZEe.js";import"./client-lwzJIAjg.js";import"./copy-DP3LWvqB.js";import"./copy-D7jhBnDt.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-DoezBL6h.js";import"./I18nStore-m2kuMwIb.js";import"./useStylesheet-hr5H-IMi.js";import"./index-D23_yuAt.js";import"./index-CKbhHRPG.js";import"./Label-CfmyqNzh.js";import"./index-DBeTfgPc.js";import"./index-P5IVNCRm.js";import"./Text-DADVHpsK.js";import"./addCustomCSSWithScoping-Bj4bnd2y.js";import"./index-CpccB1hQ.js";import"./index-BgEfjVIQ.js";import"./BusyIndicator-CHfKtrJh.js";import"./index-BzfJwdfk.js";import"./index-BeJtHrc9.js";import"./AvatarSize-BceVhWoP.js";import"./employee-DG3AkCvt.js";import"./index-CwznDZuY.js";import"./i18n-defaults-3zSCpOMO.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
`,t.jsx(d,{})]})}function Rt(i={}){const{wrapper:o}={...m(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(n,{...i})}):n(i)}export{Rt as default};
