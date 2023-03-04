import{A as H}from"./DomRefTable.module-6ce8754c.js";import{D as U}from"./DocsHeader-85b9e488.js";import{F as B}from"./Footer-50809b9e.js";import{j as e,a as u,F as E}from"./jsx-runtime-670450c2.js";import{F as g,a as b}from"./index-7ac1a15f.js";import{L as s,a as w}from"./index-b3213c5e.js";import{T as y}from"./index-2eaff221.js";import{r}from"./index-f1f749bf.js";import{M,C as f,j as C}from"./index-afbbd947.js";import"./chunk-G4YQS2SV-420b4ede.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./activate-656bd6f0.js";import{s as k}from"./spacing-097dbbf3.js";import{C as L}from"./index-9f165096.js";import{C as v}from"./index-0b8a8cbd.js";import{I as F}from"./index-68060125.js";import{u as T}from"./index-4fb8b842.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-62607488.js";import"./iframe-0f619c81.js";import"../sb-preview/runtime.mjs";import"./UI5Element-386cb3f6.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-34dd487e.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-dee23f38.js";import"./MarkedEvents-0e37da6f.js";import"./decline-48ecb430.js";import"./Icons-03f19c25.js";import"./class-map-60f59e95.js";import"./Button-981a9381.js";import"./Keys-50a1cb5a.js";import"./_commonjsHelpers-042e6b4d.js";import"./Import-2bb789f5.js";import"./TableOfContent-eb3544ea.js";import"./index-56e3fc82.js";import"./WrappingType-b81e595a.js";import"./index-dfb05037.js";import"./Label-f9741f9c.js";import"./Footer.module-c4f3b823.js";import"./index-0b25d04c.js";import"./Popover-ff8f156e.js";import"./Integer-5fa4beea.js";import"./FocusableElements-13161f05.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-b3fcb37c.js";import"./MediaRange-25b98f31.js";import"./style-map-63946e4f.js";import"./clsx.m-1229b3e0.js";import"./i18n-defaults-fdda04bc.js";import"./I18nContext-bef5b452.js";import"./ThemingParameters-f4b4144e.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./react-18-2bb9dade.js";function j(n={}){const{wrapper:o}=Object.assign({},T(),n.components);return o?e(o,{...n,children:e(l,{})}):l();function l(){const t=Object.assign({h2:"h2",h1:"h1",pre:"pre",code:"code"},T(),n.components);return u(E,{children:[e(M,{title:"User Feedback / Loader",component:s,args:{type:w.Indeterminate,progress:"60%"}}),`
`,e(U,{}),`
`,e("br",{}),`
`,e(t.h2,{children:"Example"}),`
`,e(f,{children:e(C,{name:"Default",children:i=>e(s,{...i})})}),`
`,e(t.h2,{children:"Properties"}),`
`,e(H,{story:"Default"}),`
`,e("br",{}),`
`,e(t.h1,{children:"More Examples"}),`
`,e("br",{}),`
`,e(t.h2,{children:"Card with Loader"}),`
`,e(f,{children:e(C,{name:"with Card",children:i=>{const a="This is a text that will be updated 5 seconds after the header is clicked. The text will be visible until the new text has been fetched. To let the user know that the text is updating, the Loader will be displayed.",[c,p]=r.useState(a),[d,h]=r.useState(!1),x=r.useRef(0),_=()=>{h(!0)};return r.useEffect(()=>{d&&setTimeout(()=>{x.current<10?p(A=>A===a?"Updated (⌐■_■)":a):p("You really must be bored ಠ_ಠ"),x.current++,h(!1)},5e3)},[d]),e(v,{header:e(L,{titleText:"Click the header to update the text below.",interactive:!0,avatar:e(F,{name:"activate"}),onClick:_}),style:{width:"400px"},children:u(g,{direction:b.Column,children:[d&&e(s,{...i}),e(y,{style:k,children:c})]})})}})}),`
`,e(t.pre,{children:e(t.code,{className:"language-jsx",children:`const LoaderComponent = () => {
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
`,e(B,{})]})}}const S=n=>e(s,{...n});S.storyName="Default";S.parameters={storySource:{source:`args => {
  return <Loader {...args} />;
}`}};const D=n=>{const o="This is a text that will be updated 5 seconds after the header is clicked. The text will be visible until the new text has been fetched. To let the user know that the text is updating, the Loader will be displayed.",[l,t]=r.useState(o),[i,a]=r.useState(!1),c=r.useRef(0),p=()=>{a(!0)};return r.useEffect(()=>{i&&setTimeout(()=>{c.current<10?t(d=>d===o?"Updated (⌐■_■)":o):t("You really must be bored ಠ_ಠ"),c.current++,a(!1)},5e3)},[i]),e(v,{header:e(L,{titleText:"Click the header to update the text below.",interactive:!0,avatar:e(F,{name:"activate"}),onClick:p}),style:{width:"400px"},children:u(g,{direction:b.Column,children:[i&&e(s,{...n}),e(y,{style:k,children:l})]})})};D.storyName="with Card";D.parameters={storySource:{source:`args => {
  const initialText = "This is a text that will be updated 5 seconds after the header is clicked. The text will be visible until the new text has been fetched. To let the user know that the text is updating, the Loader will be displayed.";
  const [text, setText] = useState(initialText);
  const [loading, setLoading] = useState(false);
  const counter = useRef(0);

  const onHeaderClick = () => {
    setLoading(true);
  };

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        if (counter.current < 10) {
          setText(prev => prev === initialText ? "Updated (\\u2310\\u25A0_\\u25A0)" : initialText);
        } else {
          setText("You really must be bored \\u0CA0_\\u0CA0");
        }

        counter.current++;
        setLoading(false);
      }, 5000);
    }
  }, [loading]);
  return <Card header={<CardHeader titleText="Click the header to update the text below." interactive avatar={<Icon name="activate" />} onClick={onHeaderClick} />} style={{
    width: "400px"
  }}>
          <FlexBox direction={FlexBoxDirection.Column}>
            {loading && <Loader {...args} />}
            <Text style={spacing.sapUiContentPadding}>{text}</Text>
          </FlexBox>
        </Card>;
}`}};const m={title:"User Feedback / Loader",component:s,args:{type:w.Indeterminate,progress:"60%"},tags:["stories-mdx"],includeStories:["defaultStory","withCard"]};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:j};const Ge=["defaultStory","withCard"];export{Ge as __namedExportsOrder,m as default,S as defaultStory,D as withCard};
//# sourceMappingURL=Loader.stories-28c1ae6e.js.map
