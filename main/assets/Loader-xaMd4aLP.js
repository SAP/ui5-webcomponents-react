import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{F as a}from"./ProjectTemplate-DHqiSl-5.js";import{C as s}from"./ControlsWithNote-UbZ40zCV.js";import{D as d}from"./DocsHeader-lmXIReXb.js";import"./index-OjgoNOWw.js";import{M as l,b as n}from"./index-8-oB8fpj.js";import{C as x,D as p,W as c}from"./Loader.stories--YaFHuuG.js";import{u as m}from"./index-RwE9nQVW.js";import"./react-jss.esm-tmBtHfec.js";import"./index-2DnYnspj.js";import"./iframe-d8BRfYNK.js";import"../sb-preview/runtime.js";import"./UI5Element-d7BKyERc.js";import"./Language-gwOe_M78.js";import"./VersionInfo-zmLW7G4m.js";import"./CustomElementsScopeUtils-StEZUlti.js";import"./withWebComponent-c-uI2wMj.js";import"./utils-_oNUceU3.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./event-lM5HanI-.js";import"./i18nBundle-kNlRgZSb.js";import"./decline-WQNFq9Fi.js";import"./Icons-Bde3sOsn.js";import"./i18n-defaults-SIMqfZL6.js";import"./information-2I5Ry-zV.js";import"./alert-NotaXBj3.js";import"./class-map-kWxrnrVL.js";import"./Icon-lAPI10Qw.js";import"./Keys-ZEuNsqmZ.js";import"./parameters-bundle.css-mPCp9TQx.js";import"./Button-ywDxCu8p.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./willShowContent-MSvI8sYo.js";import"./HasPopup-9BAMrqbD.js";import"./i18n-defaults-fXrRGy4a.js";import"./chunk-HLWAVYOI-KKMZosJ3.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./index-6OPsdmYb.js";import"./clsx-Zbgk8kpT.js";import"./index--4vSE_RY.js";import"./Label-T23s9s-4.js";import"./WrappingType-avPrqc94.js";import"./index-FAKBGe37.js";import"./index-03KLv694.js";import"./Link-YZ4obMbX.js";import"./index-YPnNQeLP.js";import"./Popover-AngQKyti.js";import"./Integer-kog98579.js";import"./PopupUtils-cNe84Tf4.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-OX3LG9lc.js";import"./FocusableElements-wiyFyaM0.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./ResizeHandler-iTCl5diO.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-5XXpitLE.js";import"./BrowserScrollbar.css-HwP8mBZS.js";import"./index-lwweRvrD.js";import"./i18n-defaults-nru-HZH8.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-9LQRDEyt.js";import"./StyleContext-9nyrn-qG.js";import"./ModalsContext-T9gUbaXC.js";import"./CssSizeVariables-HFpqBBhk.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-bUOmzhXF.js";import"./index-wIUrC_8I.js";import"./index-iwW60aUl.js";import"./Avatar-W5DY45OX.js";import"./employee-638U4O_O.js";import"./index-z38IqflO.js";import"./utils-8_e61tYq.js";import"./index-upXUTyxt.js";import"./sys-help-2-pEGjeWPi.js";import"./copy-sn9oDqVN.js";import"./GitHub-Mark-JYujJlUX.js";import"./TableOfContent-zL0WjPZd.js";import"./_baseForOwn-a7AeJH13.js";import"./mapValues-_kP3xGjM.js";import"./_baseUniq-_JZHYp0e.js";import"./index-PPLHz8o0.js";import"./index-7I0hdIjK.js";import"./spacing-ftLAC4UG.js";import"./index-XSbEnnBJ.js";import"./index-bzkw3A5Q.js";function Yt(i={}){const{wrapper:r}=Object.assign({},m(),i.components);return r?t.jsx(r,Object.assign({},i,{children:t.jsx(e,{})})):e();function e(){const o=Object.assign({h2:"h2",h1:"h1",pre:"pre",code:"code"},m(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:x}),`
`,t.jsx(d,{}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(n,{of:p}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(s,{of:p}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h1,{id:"more-examples",children:"More Examples"}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"card-with-loader",children:"Card with Loader"}),`
`,t.jsx(n,{of:c}),`
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
`,t.jsx(a,{})]})}}export{Yt as default};
