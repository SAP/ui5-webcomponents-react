import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-zdXs1Etw.js";import{M as p,C as r}from"./index-BfYXpdUP.js";import"./index-CCpUMy6k.js";import"./index-g2nVdmjV.js";import{C as a}from"./ControlsWithNote-Da0_FOa5.js";import{D as s}from"./DocsHeader-Dl8RcUPF.js";import{F as d}from"./CommandsAndQueries-44QtruFn.js";import"./index-C--kS4iy.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BDxE6jlm.js";import{C as l,D as e,W as x}from"./Loader.stories-BoyrrSTl.js";import"./iframe-BIu3RQRi.js";import"./index-DJcrgQOn.js";import"./index-B-pEBbkX.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-28PG-PhA.js";import"./CustomElementsScope-D32jWln6.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-BJcyuOZ-.js";import"./Keys-BF9NgJbR.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-BA-Z5X-C.js";import"./parameters-bundle.css-Ct2Rzfjz.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DBaa6sR8.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-DIUd5-_G.js";import"./decline-B-7r8h1x.js";import"./i18n-defaults-u2_1ijdO.js";import"./information-DKw70c9J.js";import"./information-CDoXjDdi.js";import"./sys-enter-2-DBhtllGR.js";import"./sys-enter-2-BRVWDnOR.js";import"./TagDesign-Ga50IS6u.js";import"./utils-CdOaKA-E.js";import"./main-CiDzSAAF.js";import"./index-Bt1-BK1s.js";import"./Tag-B3qkhm6Z.js";import"./sys-help-2-BfevxhM3.js";import"./index-CBa4g496.js";import"./Link-wJsXaU9N.js";import"./index-BEp0rhGg.js";import"./Popover-vrquhgcM.js";import"./PopupsCommon.css-CFYCSkNV.js";import"./FocusableElements-Clvab7V1.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-C5DtzTqb.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-CgcsYu77.js";import"./client-Wx5G3KSE.js";import"./copy-CiJ_0mNd.js";import"./copy-C343vs9R.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-Bzt3eeAv.js";import"./index-U2zNqH-T.js";import"./I18nStore-CY8kcvKW.js";import"./useStylesheet-B5S_P2i6.js";import"./index-Bx3SO0r_.js";import"./index-7k5z3473.js";import"./Label-D_KOrpSt.js";import"./index-DTbqhkR9.js";import"./index-u200OysQ.js";import"./Text-BCbUq7g2.js";import"./addCustomCSSWithScoping-Cml1L90m.js";import"./index-BFa74pi2.js";import"./BusyIndicator-BZvDM_dq.js";import"./index-DeJkSj18.js";import"./index-BaltLl-X.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CmJW4hiT.js";import"./index-pRZxLfoI.js";import"./i18n-defaults-D2m6uH24.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:l}),`
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
