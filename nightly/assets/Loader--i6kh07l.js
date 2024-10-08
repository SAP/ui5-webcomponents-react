import{j as t}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as m}from"./index-CcnH5Kt0.js";import{ae as p,af as r}from"./index-Bnrwa5-0.js";import"./index-CYMmuDNo.js";import"./index-BFWus7dV.js";import{C as a}from"./ControlsWithNote-BVxdWhDs.js";import{D as s}from"./DocsHeader-BCQ8ZVzA.js";import{F as d}from"./CommandsAndQueries-D0a4p_gh.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-Bw4-azjR.js";import{C as l,D as e,W as x}from"./Loader.stories-DRluor1P.js";import"./iframe-Ab05dSaX.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./withWebComponent-wFYtA7If.js";import"./utils-U7G133b4.js";import"./useIsomorphicLayoutEffect-Dm78g2BF.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18n-DEVDpFvK.js";import"./decline-C0oweRvl.js";import"./Icon-BcSHg7oQ.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-BOSi_lPd.js";import"./i18n-defaults-CzsryEvw.js";import"./information-BGBEnzgc.js";import"./alert-2Fjq9UKP.js";import"./class-map-B9XgGk97.js";import"./Button-KM4-V0NS.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-Cyb-S5u3.js";import"./i18n-defaults-NO4RLLYJ.js";import"./TagDesign-Dou_yO3g.js";import"./utils-C0qqoGYl.js";import"./main-r7D-Vqmb.js";import"./index-BzJgpzCi.js";import"./Tag-Bu1O2kVJ.js";import"./sys-help-2-W_np5NtH.js";import"./index-ax0weve5.js";import"./Popover-C5qlK_nP.js";import"./PopupsCommon.css-C_WF48EP.js";import"./FocusableElements-BIj5ki0J.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CTXj7VRO.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BvbZz5j6.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-CDY2pqSn.js";import"./Link-0XT9hN4f.js";import"./chunk-NUUEMKO5-BHeIknDV.js";import"./client-BzooOYO_.js";import"./copy-7GRBkhIV.js";import"./copy-lw60TSjb.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-DBMEQ9W3.js";import"./index-N3aXTj11.js";import"./I18nStore-CIizPkd0.js";import"./useStylesheet-DPBS0l4j.js";import"./index-GDTSF2Z6.js";import"./index-BV7383_0.js";import"./Label-C5_omeHE.js";import"./index-DDTf4_9s.js";import"./index-B3JK_dxj.js";import"./addCustomCSSWithScoping-Dz0L6MFE.js";import"./index-BdtzyfaT.js";import"./BusyIndicator-Blb6RTs2.js";import"./index-DMEGOjSg.js";import"./index-CDIA3NMf.js";import"./Avatar-qMkK7jki.js";import"./employee-DAjWhiTf.js";import"./i18n-defaults-DTeYK5vT.js";import"./index-5LNODdy_.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
`,t.jsx(d,{})]})}function It(i={}){const{wrapper:o}={...m(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(n,{...i})}):n(i)}export{It as default};
