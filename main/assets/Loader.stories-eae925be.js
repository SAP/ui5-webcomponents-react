import{b as A}from"./DomRefTable.module-5a92b3aa.js";import{D as U}from"./DocsHeader-2171f118.js";import{F as B}from"./Footer-d1fa4308.js";import{j as e,a as u,F as E}from"./jsx-runtime-670450c2.js";import{F as g,a as b}from"./index-57eaac56.js";import{L as s,a as w}from"./index-bdf14a6c.js";import{T as y}from"./index-c7ba7a71.js";import{r}from"./index-f1f749bf.js";import{M,C as f,j as C}from"./index-d168f592.js";import"./chunk-PCJTTTQV-7fbc680b.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./activate-d94c7e62.js";import{s as k}from"./spacing-097dbbf3.js";import{C as L}from"./index-db811c56.js";import{C as v}from"./index-8e09ee49.js";import{I as F}from"./index-f8653dee.js";import{u as T}from"./index-4fb8b842.js";import"./react-jss.esm-fe4dc3ff.js";import"./inheritsLoose-93e09647.js";import"./index-3519bbac.js";import"./iframe-ec1d1418.js";import"../sb-preview/runtime.mjs";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./i18n-defaults-da1c0a37.js";import"./decline-f2b294b3.js";import"./Icons-7b82f601.js";import"./i18n-defaults-80781f7e.js";import"./information-50e1ad0f.js";import"./class-map-5d8e4b2b.js";import"./Icon-a9b28f0c.js";import"./Keys-3acbae73.js";import"./Button-b7bbfa18.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./_commonjsHelpers-042e6b4d.js";import"./Import-2a210be2.js";import"./TableOfContent-87933f28.js";import"./index-472e8986.js";import"./Link-f8688ae9.js";import"./WrappingType-b81e595a.js";import"./index-87fa1919.js";import"./Label-040efebd.js";import"./index-96c5f47c.js";import"./Footer.module-f90cad7d.js";import"./index-610136b6.js";import"./Popover-661594f1.js";import"./Integer-f7f172c9.js";import"./PopupsCommon.css-be465885.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./clsx.m-1229b3e0.js";import"./i18n-defaults-9da374be.js";import"./I18nContext-bef5b452.js";import"./ThemingParameters-f4b4144e.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./react-18-2bb9dade.js";function j(i={}){const{wrapper:o}=Object.assign({},T(),i.components);return o?e(o,{...i,children:e(l,{})}):l();function l(){const t=Object.assign({h2:"h2",h1:"h1",pre:"pre",code:"code"},T(),i.components);return u(E,{children:[e(M,{title:"User Feedback / Loader",component:s,args:{type:w.Indeterminate,progress:"60%"}}),`
`,e(U,{}),`
`,e("br",{}),`
`,e(t.h2,{children:"Example"}),`
`,e(f,{children:e(C,{name:"Default",children:n=>e(s,{...n})})}),`
`,e(t.h2,{children:"Properties"}),`
`,e(A,{story:"Default"}),`
`,e("br",{}),`
`,e(t.h1,{children:"More Examples"}),`
`,e("br",{}),`
`,e(t.h2,{children:"Card with Loader"}),`
`,e(f,{children:e(C,{name:"with Card",children:n=>{const a="This is a text that will be updated 5 seconds after the header is clicked. The text will be visible until the new text has been fetched. To let the user know that the text is updating, the Loader will be displayed.",[c,p]=r.useState(a),[d,h]=r.useState(!1),x=r.useRef(0),_=()=>{h(!0)};return r.useEffect(()=>{d&&setTimeout(()=>{x.current<10?p(H=>H===a?"Updated (⌐■_■)":a):p("You really must be bored ಠ_ಠ"),x.current++,h(!1)},5e3)},[d]),e(v,{header:e(L,{titleText:"Click the header to update the text below.",interactive:!0,avatar:e(F,{name:"activate"}),onClick:_}),style:{width:"400px"},children:u(g,{direction:b.Column,children:[d&&e(s,{...n}),e(y,{style:k,children:c})]})})}})}),`
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
`,e(B,{})]})}}const S=i=>e(s,{...i});S.storyName="Default";S.parameters={storySource:{source:`args => {
  return <Loader {...args} />;
}`}};const D=i=>{const o="This is a text that will be updated 5 seconds after the header is clicked. The text will be visible until the new text has been fetched. To let the user know that the text is updating, the Loader will be displayed.",[l,t]=r.useState(o),[n,a]=r.useState(!1),c=r.useRef(0),p=()=>{a(!0)};return r.useEffect(()=>{n&&setTimeout(()=>{c.current<10?t(d=>d===o?"Updated (⌐■_■)":o):t("You really must be bored ಠ_ಠ"),c.current++,a(!1)},5e3)},[n]),e(v,{header:e(L,{titleText:"Click the header to update the text below.",interactive:!0,avatar:e(F,{name:"activate"}),onClick:p}),style:{width:"400px"},children:u(g,{direction:b.Column,children:[n&&e(s,{...i}),e(y,{style:k,children:l})]})})};D.storyName="with Card";D.parameters={storySource:{source:`args => {
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
}`}};const m={title:"User Feedback / Loader",component:s,args:{type:w.Indeterminate,progress:"60%"},tags:["stories-mdx"],includeStories:["defaultStory","withCard"]};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:j};const it=["defaultStory","withCard"];export{it as __namedExportsOrder,m as default,S as defaultStory,D as withCard};
//# sourceMappingURL=Loader.stories-eae925be.js.map
