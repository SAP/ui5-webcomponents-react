import{j as e}from"./iframe-BaUS3k1G.js";import{useMDXComponents as s}from"./index-BI_MoYzx.js";import{M as d,C as o}from"./blocks-B0L69tD0.js";import"./Tag-DBf9vhPp.js";import"./index-DRxFqLKQ.js";import{C as m}from"./ControlsWithNote-BmOedZdX.js";import{D as p}from"./DocsHeader-3kIvEXoo.js";import{F as l}from"./CommandsAndQueries-Br4DVRUh.js";import{C as i,D as r,W as x}from"./Loader.stories-ByHRsjvn.js";import"./preload-helper-Ct5FWWRu.js";import"./information-7Y3gJKKP.js";import"./sys-enter-2-BfkJMWkZ.js";import"./alert-BAVxkr1j.js";import"./index-BYW7BxIG.js";import"./index-DvySby2h.js";import"./Link-CWqnr4YP.js";import"./copy-tC1qaS0C.js";import"./copy-DThSO1XV.js";import"./GitHub-Mark-D9b10fUZ.js";import"./TableOfContent-BkQC1bnG.js";import"./index-BYuYKtBV.js";import"./index-DCjJA-51.js";import"./addCustomCSSWithScoping-CsHiQv5I.js";import"./index-Cf1dwhov.js";import"./index-C3F6-2iN.js";import"./index-BVDlh8LB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CNEqbSr6.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
