import{j as e}from"./iframe-D5q1aMGI.js";import{useMDXComponents as s}from"./index-B6q-95ic.js";import{M as d,C as o}from"./blocks-VrnxRsTA.js";import"./Tag-DDiTsJ0v.js";import"./index-YdpDWp2e.js";import{C as m}from"./ControlsWithNote-CWcYvev_.js";import{D as p}from"./DocsHeader-RJwQjyez.js";import{F as l}from"./CommandsAndQueries-B7jUlW4q.js";import{C as i,D as r,W as x}from"./Loader.stories-ByoXFtms.js";import"./preload-helper-Dp1pzeXC.js";import"./information-DvQXlJSA.js";import"./sys-enter-2-BD4KOzII.js";import"./alert-4vj1CvHm.js";import"./index-Bo48Ce9s.js";import"./index-DEUGWJD9.js";import"./Link-CDAcJh87.js";import"./copy-B6UvXJ1_.js";import"./copy-BKgapaDk.js";import"./GitHub-Mark-cX8qIbC6.js";import"./TableOfContent-CCvgAgpP.js";import"./index-BCRNDJSO.js";import"./index-B87mq1Uz.js";import"./addCustomCSSWithScoping-Z_1KU2KU.js";import"./index-S9YU7LKi.js";import"./index-DBgGZpdq.js";import"./index-BFl6kxHT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DLq1yiI3.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
