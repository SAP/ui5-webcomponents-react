import{j as t}from"./useIsomorphicLayoutEffect-Dhma_bjk.js";import{useMDXComponents as m}from"./index-CcnH5Kt0.js";import{ae as p,af as r}from"./index-BxVQDxfy.js";import"./index-CGD6y5QJ.js";import"./index-BlxWPw6c.js";import{C as a}from"./ControlsWithNote-DDcjvSd_.js";import{D as s}from"./DocsHeader-DagkYjWB.js";import{F as d}from"./CommandsAndQueries-B6Xp5IUc.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-ZqK5PCI6.js";import{C as l,D as e,W as x}from"./Loader.stories-MGAaycRW.js";import"./iframe-DqMiIs9N.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-DGDOfdbw.js";import"./_getPrototype-B0L0C3AT.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";import"./withWebComponent-DUIvHLMA.js";import"./utils-CKNAmS37.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-DMA-_yLC.js";import"./decline-CHk4a2e7.js";import"./Icon-C44BwzQ8.js";import"./Keys-D1SxbTOd.js";import"./parameters-bundle.css-Bga-3Zi8.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-Sy77r2nJ.js";import"./alert-cQZYHoWK.js";import"./class-map-BJErPj2t.js";import"./Button-CxQnwzDr.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BzCnTBef.js";import"./i18n-defaults-DTxNk1Ll.js";import"./TagDesign-Dou_yO3g.js";import"./utils-X9DBbVtv.js";import"./main-C6oD7XT2.js";import"./index-D8yCSEP8.js";import"./Tag-CPIJx4VG.js";import"./sys-help-2-Bvq59Jti.js";import"./index-WEA3P0fF.js";import"./Popover-BePXU9v3.js";import"./PopupsCommon.css-DBrv9Ok7.js";import"./FocusableElements-19hFFt5Q.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-ufE0tBOz.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-Bd8TDVwu.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-DI2d1WHF.js";import"./Link-CiJW-swg.js";import"./chunk-HLWAVYOI-CMYTRHck.js";import"./client-BZNFO7bv.js";import"./copy-CYHXqHWb.js";import"./copy-pca8p_zU.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-CnYostSV.js";import"./TableOfContent-J0xBpY2P.js";import"./index-B_vKgNzx.js";import"./I18nStore-B2w4xK_s.js";import"./useStylesheet-DcbwKAeb.js";import"./index-3WD7if5i.js";import"./index-D_wOg0B-.js";import"./Label-BAMwsHnp.js";import"./index-CF8fMoC4.js";import"./index-9j-aR15A.js";import"./addCustomCSSWithScoping-BRJo9-6E.js";import"./index-DhepUemJ.js";import"./BusyIndicator-BGYa7yRK.js";import"./index-BNERneIU.js";import"./index-4YU2sHPi.js";import"./Avatar-C5E79jBl.js";import"./employee-DWCutjal.js";import"./i18n-defaults-DMLFl-9E.js";import"./index-B2JiavCR.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
