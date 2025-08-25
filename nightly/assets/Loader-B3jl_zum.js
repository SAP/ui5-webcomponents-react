import{j as e}from"./iframe-Y9u60a80.js";import{useMDXComponents as s}from"./index-Bori-Nod.js";import{M as d,C as o}from"./blocks-C6Tkp4w5.js";import"./Tag-CuXUrZqk.js";import"./index-CpV662zw.js";import{C as m}from"./ControlsWithNote-laTaCTcY.js";import{D as p}from"./DocsHeader-1K3Kbib7.js";import{F as l}from"./CommandsAndQueries-eYIoXNgT.js";import{C as i,D as r,W as x}from"./Loader.stories-T2577NZb.js";import"./preload-helper-Ct5FWWRu.js";import"./information-CTNCAXjf.js";import"./sys-enter-2-74mIu9T9.js";import"./alert-BGr6HL7r.js";import"./index-BUCogs4k.js";import"./index-CUsGpwJ8.js";import"./Link-BOuAWn99.js";import"./copy-bzJkQwnc.js";import"./copy-DwFBIccM.js";import"./GitHub-Mark-BeVgJP-S.js";import"./TableOfContent-C0xGCGUb.js";import"./index-mYcBdhJ9.js";import"./index-Pi4X_Zbo.js";import"./addCustomCSSWithScoping-CQXmy_CC.js";import"./index-C29vYmbK.js";import"./index-D4D-S1j7.js";import"./index-CGgIhjAE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DKtovAer.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
`,e.jsx(p,{of:i}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(m,{of:r}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"card-with-loader",children:"Card with Loader"}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const LoaderComponent = () => {
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
`,e.jsx(l,{})]})}function R(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{R as default};
