import{A as H}from"./DomRefTable.module-db373cb0.js";import{D as U}from"./DocsHeader-61ee84cb.js";import{F as B}from"./Footer-72e50a4a.js";import{j as e,a as u,F as E}from"./jsx-runtime-670450c2.js";import{F as g,a as b}from"./index-cbb29537.js";import{L as s,a as w}from"./index-7a2a7ca3.js";import{T as y}from"./index-c7ba7a71.js";import{r}from"./index-f1f749bf.js";import{M,C as f,j as C}from"./index-d7563925.js";import"./chunk-QDOP3WTA-64bdbb8f.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./activate-9a493f21.js";import{s as k}from"./spacing-097dbbf3.js";import{C as L}from"./index-85e8707f.js";import{C as v}from"./index-02703702.js";import{I as F}from"./index-7ccdd5f3.js";import{u as T}from"./index-4fb8b842.js";import"./react-jss.esm-fe4dc3ff.js";import"./inheritsLoose-93e09647.js";import"./index-e9bbeaa8.js";import"./iframe-0a6a9469.js";import"../sb-preview/runtime.mjs";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-c82262ef.js";import"./MarkedEvents-8627ed01.js";import"./decline-0a03b0b0.js";import"./Icons-7b82f601.js";import"./class-map-5d8e4b2b.js";import"./Button-e27d9549.js";import"./Keys-3acbae73.js";import"./Device-208919c6.js";import"./_commonjsHelpers-042e6b4d.js";import"./Import-2685c381.js";import"./TableOfContent-2e1f96a2.js";import"./index-4a625d6d.js";import"./WrappingType-b81e595a.js";import"./index-eab84561.js";import"./Label-040efebd.js";import"./Footer.module-c4f3b823.js";import"./index-943d5a76.js";import"./Popover-cbbb060d.js";import"./Integer-d9976c13.js";import"./PopupsCommon.css-ab0735c6.js";import"./FocusableElements-c2f39514.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./clsx.m-1229b3e0.js";import"./i18n-defaults-41f1487d.js";import"./I18nContext-bef5b452.js";import"./ThemingParameters-f4b4144e.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./react-18-2bb9dade.js";function j(n={}){const{wrapper:o}=Object.assign({},T(),n.components);return o?e(o,{...n,children:e(l,{})}):l();function l(){const t=Object.assign({h2:"h2",h1:"h1",pre:"pre",code:"code"},T(),n.components);return u(E,{children:[e(M,{title:"User Feedback / Loader",component:s,args:{type:w.Indeterminate,progress:"60%"}}),`
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
}`}};const m={title:"User Feedback / Loader",component:s,args:{type:w.Indeterminate,progress:"60%"},tags:["stories-mdx"],includeStories:["defaultStory","withCard"]};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:j};const Je=["defaultStory","withCard"];export{Je as __namedExportsOrder,m as default,S as defaultStory,D as withCard};
//# sourceMappingURL=Loader.stories-f5d514d0.js.map
