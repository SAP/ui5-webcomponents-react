import{A as H}from"./DomRefTable.module-bd2f6310.js";import{D as U}from"./DocsHeader-7b277ff6.js";import{F as B}from"./Footer-a200614f.js";import{j as e,a as u,F as E}from"./jsx-runtime-670450c2.js";import{F as g,a as b}from"./index-6923d62a.js";import{L as s,a as w}from"./index-0d4b1695.js";import{T as y}from"./index-2eaff221.js";import{r as n}from"./index-f1f749bf.js";import{M,C as f,i as C}from"./index-08f5a92a.js";import"./chunk-4XCFV5WA-12e22cb0.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./activate-dabf2883.js";import{s as k}from"./spacing-097dbbf3.js";import{C as L}from"./index-0b9e8667.js";import{C as v}from"./index-f2bd469c.js";import{I as F}from"./index-4e221527.js";import{u as T}from"./index-4fb8b842.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-c79180df.js";import"./iframe-baaa6734.js";import"../sb-preview/runtime.mjs";import"./UI5Element-727d48d7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-63dd52a0.js";import"./utils-ed90fb1b.js";import"./AriaLabelHelper-dee23f38.js";import"./MarkedEvents-f33713fa.js";import"./decline-ff534003.js";import"./Icons-5bcf1e3f.js";import"./class-map-abcca105.js";import"./Button-e1b15b5b.js";import"./Keys-50a1cb5a.js";import"./_commonjsHelpers-042e6b4d.js";import"./Import-e249b0b6.js";import"./TableOfContent-b905a526.js";import"./index-1220256a.js";import"./WrappingType-b81e595a.js";import"./index-998f859a.js";import"./Label-6707bdfc.js";import"./ThemingParameters-f4b4144e.js";import"./Media-6b270b80.js";import"./MediaRange-25b98f31.js";import"./index-65416cbf.js";import"./Popover-5336e3a5.js";import"./Integer-a72984d1.js";import"./FocusableElements-5a723910.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-c56abc92.js";import"./style-map-7b3eb5df.js";import"./clsx.m-1229b3e0.js";import"./i18n-defaults-a62b2e2b.js";import"./I18nContext-bef5b452.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";function j(r={}){const{wrapper:o}=Object.assign({},T(),r.components);return o?e(o,{...r,children:e(l,{})}):l();function l(){const t=Object.assign({h2:"h2",h1:"h1",pre:"pre",code:"code"},T(),r.components);return u(E,{children:[e(M,{title:"User Feedback / Loader",component:s,args:{type:w.Indeterminate,progress:"60%"}}),`
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
`,e(f,{children:e(C,{name:"with Card",children:i=>{const a="This is a text that will be updated 5 seconds after the header is clicked. The text will be visible until the new text has been fetched. To let the user know that the text is updating, the Loader will be displayed.",[c,p]=n.useState(a),[d,h]=n.useState(!1),x=n.useRef(0),_=()=>{h(!0)};return n.useEffect(()=>{d&&setTimeout(()=>{x.current<10?p(A=>A===a?"Updated (⌐■_■)":a):p("You really must be bored ಠ_ಠ"),x.current++,h(!1)},5e3)},[d]),e(v,{header:e(L,{titleText:"Click the header to update the text below.",interactive:!0,avatar:e(F,{name:"activate"}),onClick:_}),style:{width:"400px"},children:u(g,{direction:b.Column,children:[d&&e(s,{...i}),e(y,{style:k,children:c})]})})}})}),`
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
`,e(B,{})]})}}const S=r=>e(s,{...r});S.storyName="Default";S.parameters={storySource:{source:`args => {
  return <Loader {...args} />;
}`}};const D=r=>{const o="This is a text that will be updated 5 seconds after the header is clicked. The text will be visible until the new text has been fetched. To let the user know that the text is updating, the Loader will be displayed.",[l,t]=n.useState(o),[i,a]=n.useState(!1),c=n.useRef(0),p=()=>{a(!0)};return n.useEffect(()=>{i&&setTimeout(()=>{c.current<10?t(d=>d===o?"Updated (⌐■_■)":o):t("You really must be bored ಠ_ಠ"),c.current++,a(!1)},5e3)},[i]),e(v,{header:e(L,{titleText:"Click the header to update the text below.",interactive:!0,avatar:e(F,{name:"activate"}),onClick:p}),style:{width:"400px"},children:u(g,{direction:b.Column,children:[i&&e(s,{...r}),e(y,{style:k,children:l})]})})};D.storyName="with Card";D.parameters={storySource:{source:`args => {
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
}`}};const m={title:"User Feedback / Loader",component:s,args:{type:w.Indeterminate,progress:"60%"},tags:["stories-mdx"],includeStories:["defaultStory","withCard"]};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:j};const qe=["defaultStory","withCard"];export{qe as __namedExportsOrder,m as default,S as defaultStory,D as withCard};
//# sourceMappingURL=Loader.stories-92d4bcc9.js.map
