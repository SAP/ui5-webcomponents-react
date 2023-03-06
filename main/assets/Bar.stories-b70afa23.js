import{M as x,C as l,j as c,a as L}from"./index-fc65de3d.js";import{B as n}from"./index-ff7a965d.js";import{B as h}from"./Bar-2272abff.js";import{B as u}from"./index-b690387f.js";import{I as g}from"./index-3c7df876.js";import{L as b}from"./index-e644fe70.js";import{a as f}from"./Button-981a9381.js";import{T as C}from"./index-7c99ef25.js";import"./nav-back-26493f12.js";import{A as F}from"./DomRefTable.module-fb210060.js";import{G as S,D as T}from"./DocsHeader-b1974699.js";import{F as M}from"./Footer-54fe8402.js";import{j as t,a as r,F as o}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u as d}from"./index-4fb8b842.js";import"./iframe-51c9489d.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./withWebComponent-34dd487e.js";import"./utils-ed90fb1b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./UI5Element-386cb3f6.js";import"./fastNavigation-ebf07f1c.js";import"./AriaLabelHelper-dee23f38.js";import"./ResizeHandler-b3fcb37c.js";import"./class-map-60f59e95.js";import"./parameters-bundle.css-0c974f42.js";import"./Input-85591656.js";import"./MarkedEvents-0e37da6f.js";import"./ValueState-2c5e5904.js";import"./Keys-50a1cb5a.js";import"./Integer-5fa4beea.js";import"./FocusableElements-13161f05.js";import"./getActiveElement-bcae01ed.js";import"./MediaRange-25b98f31.js";import"./style-map-63946e4f.js";import"./decline-48ecb430.js";import"./Icons-03f19c25.js";import"./Suggestions.css-5424627b.js";import"./Popover-ff8f156e.js";import"./ResponsivePopoverCommon.css-c2b66233.js";import"./ValueStateMessage.css-88180c67.js";import"./ValueState-ab6838cc.js";import"./WrappingType-b81e595a.js";import"./Title-256f7c0a.js";import"./chunk-G4YQS2SV-3a764711.js";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./index-cbce79a2.js";import"./index-b4aa831c.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-8d74f27b.js";import"./TableOfContent-9c193c7f.js";import"./index-224c0e2b.js";import"./Label-f9741f9c.js";import"./Footer.module-c4f3b823.js";import"./index-273db19e.js";const A=`## Usage

With the use of the design property, you can set the style of the Bar to appear designed like a Header, Subheader, Footer and FloatingFooter.  
**Note:** Do not place a Bar inside another Bar or inside any bar-like component. Doing so may cause unpredictable behavior.

## Responsive Behavior

The default slot will be centered in the available space between the startContent and the endContent areas, therefore it might not always be centered in the entire bar.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`Bar\` exposes the following CSS Shadow Parts:

*   bar - Used to style the wrapper of the content of the component

## Keyboard Handling

### Fast Navigation

This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \`Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up\`. In order to use this functionality, you need to import the following module: \`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\``,y=t("span",{children:"Start Content"}),w=t("span",{children:"Center Content"}),B=t("span",{children:"End Content"}),D=t("img",{src:"https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/Logo.png",alt:"logo",style:{marginLeft:"6px",width:"120px"}});function E(e={}){const{wrapper:m}=Object.assign({},d(),e.components);return m?t(m,{...e,children:t(p,{})}):p();function p(){const i=Object.assign({h2:"h2",h1:"h1"},d(),e.components);return r(o,{children:[t(x,{title:"Layouts & Floorplans / Bar",component:n,argTypes:{startContent:{control:{disable:!0}},children:{control:{disable:!0}},endContent:{control:{disable:!0}}},args:{design:h.Header,startContent:y,children:w,endContent:B}}),`
`,t(T,{since:"0.13.0"}),`
`,t("br",{}),`
`,t(i.h2,{children:"Example"}),`
`,t(l,{children:t(c,{name:"Default",children:s=>t(n,{...s})})}),`
`,t(i.h2,{children:"Properties"}),`
`,t(F,{story:"Default"}),`
`,t(L,{children:A}),`
`,t(i.h1,{children:"More Examples"}),`
`,t("br",{}),`
`,t(i.h2,{children:"Bar with custom elements"}),`
`,t(l,{children:t(c,{name:"with custom elements",children:s=>t(n,{...s,startContent:r(o,{children:[t(u,{icon:"nav-back",design:f.Transparent}),D]}),endContent:r(o,{children:[t(g,{placeholder:"Search"}),t(b,{style:{marginLeft:"6px"},href:"https://github.com/SAP/ui5-webcomponents-react",target:"_blank",children:t(S,{})})]}),children:t(C,{children:"Bar"})})})}),`
`,t(M,{})]})}}const k=e=>t(n,{...e});k.storyName="Default";k.parameters={storySource:{source:`args => {
  return <Bar {...args} />;
}`}};const v=e=>t(n,{...e,startContent:r(o,{children:[t(u,{icon:"nav-back",design:f.Transparent}),D]}),endContent:r(o,{children:[t(g,{placeholder:"Search"}),t(b,{style:{marginLeft:"6px"},href:"https://github.com/SAP/ui5-webcomponents-react",target:"_blank",children:t(S,{})})]}),children:t(C,{children:"Bar"})});v.storyName="with custom elements";v.parameters={storySource:{source:`args => {
  return <Bar {...args} startContent={<>
              <Button icon="nav-back" design={ButtonDesign.Transparent} />
              {Img}
            </>} endContent={<>
              <Input placeholder="Search" />
              <Link style={{
      marginLeft: "6px"
    }} href="https://github.com/SAP/ui5-webcomponents-react" target="_blank">
                <GitHubLogo />
              </Link>
            </>}>
          <Title>Bar</Title>
        </Bar>;
}`}};const a={title:"Layouts & Floorplans / Bar",component:n,args:{design:h.Header,startContent:y,children:w,endContent:B},argTypes:{startContent:{control:{disable:!0}},children:{control:{disable:!0}},endContent:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withCustomElements"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:E};const Vt=["defaultStory","withCustomElements"];export{Vt as __namedExportsOrder,a as default,k as defaultStory,v as withCustomElements};
//# sourceMappingURL=Bar.stories-b70afa23.js.map
