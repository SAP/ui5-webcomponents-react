import{j as e}from"./iframe-ecJTvqfE.js";import{useMDXComponents as s}from"./index-DboZxcYT.js";import{M as d,C as o}from"./blocks-qsqxfOd3.js";import"./Tag-ZKnVgoL_.js";import"./index-BC9DFcam.js";import{C as m}from"./ControlsWithNote--sJtiopn.js";import{D as p}from"./DocsHeader-DRQa0RQI.js";import{F as l}from"./CommandsAndQueries-BpdU-ZQD.js";import{C as i,D as r,W as x}from"./Loader.stories-BJeuLlcI.js";import"./preload-helper-Ct5FWWRu.js";import"./information-DxOwMn8K.js";import"./sys-enter-2-CERMkNGF.js";import"./alert-Bvw6_neD.js";import"./index-F3eIUiL2.js";import"./index-D-eR8SSU.js";import"./Link-BtvKGD3A.js";import"./copy-DmHQCbEE.js";import"./copy-BgNjKRC7.js";import"./GitHub-Mark-CJwtkSkN.js";import"./TableOfContent-Ba58XBM3.js";import"./index-DsPSpYGU.js";import"./index-CvbQPYli.js";import"./addCustomCSSWithScoping-DjLfDywf.js";import"./index-gkiYXWNa.js";import"./index-gUQqjp18.js";import"./index-Bnh2IJ03.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CFe2wd2s.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
