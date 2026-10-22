import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,r}from"./react-fLZJfuRT.js";import{_ as i,d as a,r as o}from"./blocks-DnnW7All.js";import{b as s,f as c,t as l,u}from"./components-BFu365ZV.js";import{i as d,n as f,r as p,t as m}from"./Loader.stories-JS_516Cp.js";function h(e){let t={code:`code`,h1:`h1`,h2:`h2`,pre:`pre`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a,{of:f}),`
`,(0,_.jsx)(c,{of:f}),`
`,(0,_.jsx)(`br`,{}),`
`,(0,_.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,_.jsx)(o,{of:m}),`
`,(0,_.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,_.jsx)(s,{of:m}),`
`,(0,_.jsx)(`br`,{}),`
`,(0,_.jsx)(t.h1,{id:`more-examples`,children:`More Examples`}),`
`,(0,_.jsx)(`br`,{}),`
`,(0,_.jsx)(t.h2,{id:`card-with-loader`,children:`Card with Loader`}),`
`,(0,_.jsx)(o,{of:p}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-jsx`,children:`const LoaderComponent = () => {
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
`,(0,_.jsx)(u,{})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),l(),i(),d()})))()}v();export{g as default};