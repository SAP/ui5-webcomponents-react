import{M as x,C as l,j as c,a as L}from"./index-a5b0d48e.js";import{B as n}from"./index-ae2c88d3.js";import{B as h}from"./Bar-2267974f.js";import{B as u}from"./index-e0d414a8.js";import{I as g}from"./index-29cbc990.js";import{L as b}from"./index-e369c219.js";import{a as f}from"./Button-8d5b0cb6.js";import{T as C}from"./index-420fffad.js";import"./nav-back-e2bbf132.js";import{b as F}from"./DomRefTable.module-662c659b.js";import{G as S,D as T}from"./DocsHeader-ff0a79df.js";import{F as M}from"./Footer-37bd1cd1.js";import{j as t,a as r,F as o}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u as d}from"./index-4fb8b842.js";import"./iframe-2f6fe1a8.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./UI5Element-427ec721.js";import"./fastNavigation-8b41cdda.js";import"./AriaLabelHelper-c82262ef.js";import"./ResizeHandler-1fa8a094.js";import"./class-map-5d8e4b2b.js";import"./parameters-bundle.css-6b4a2ffb.js";import"./Input-846eddbd.js";import"./i18n-defaults-da1c0a37.js";import"./Device-208919c6.js";import"./ValueState-2c5e5904.js";import"./Keys-3acbae73.js";import"./Integer-d9976c13.js";import"./decline-5eb6d937.js";import"./Icons-7b82f601.js";import"./i18n-defaults-7dff8409.js";import"./Suggestions.css-faab6178.js";import"./information-0837f136.js";import"./Popover-e2d049c9.js";import"./PopupsCommon.css-c7334d05.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./Icon-a9b28f0c.js";import"./ResponsivePopoverCommon.css-187e38b6.js";import"./ValueStateMessage.css-37773c69.js";import"./ValueState-ab6838cc.js";import"./Link-d055a21d.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./Title-b986a4bd.js";import"./chunk-PCJTTTQV-06356942.js";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-fe4dc3ff.js";import"./index-14f444b1.js";import"./index-1d945bd3.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-f72dcf1d.js";import"./TableOfContent-0cf236d1.js";import"./index-fdd37487.js";import"./Label-040efebd.js";import"./Footer.module-f90cad7d.js";import"./index-31d0fe2b.js";const E=`## Usage

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

This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \`Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up\`. In order to use this functionality, you need to import the following module: \`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\``,y=t("span",{children:"Start Content"}),w=t("span",{children:"Center Content"}),B=t("span",{children:"End Content"}),D=t("img",{src:"https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/Logo.png",alt:"logo",style:{marginLeft:"6px",width:"120px"}});function P(e={}){const{wrapper:m}=Object.assign({},d(),e.components);return m?t(m,{...e,children:t(p,{})}):p();function p(){const i=Object.assign({h2:"h2",h1:"h1"},d(),e.components);return r(o,{children:[t(x,{title:"Layouts & Floorplans / Bar",component:n,argTypes:{startContent:{control:{disable:!0}},children:{control:{disable:!0}},endContent:{control:{disable:!0}}},args:{design:h.Header,startContent:y,children:w,endContent:B}}),`
`,t(T,{since:"0.13.0"}),`
`,t("br",{}),`
`,t(i.h2,{children:"Example"}),`
`,t(l,{children:t(c,{name:"Default",children:s=>t(n,{...s})})}),`
`,t(i.h2,{children:"Properties"}),`
`,t(F,{story:"Default"}),`
`,t(L,{children:E}),`
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
}`}};const a={title:"Layouts & Floorplans / Bar",component:n,args:{design:h.Header,startContent:y,children:w,endContent:B},argTypes:{startContent:{control:{disable:!0}},children:{control:{disable:!0}},endContent:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withCustomElements"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:P};const oe=["defaultStory","withCustomElements"];export{oe as __namedExportsOrder,a as default,k as defaultStory,v as withCustomElements};
//# sourceMappingURL=Bar.stories-c8c0509b.js.map
