import{M as x,C as l,j as c,a as L}from"./index-10343285.js";import{B as n}from"./index-88b51f1f.js";import{B as h}from"./Bar-2267974f.js";import{B as u}from"./index-b8e8fdc0.js";import{I as g}from"./index-8a41b13d.js";import{L as b}from"./index-333b46ad.js";import{a as f}from"./Button-b2f5d653.js";import{T as C}from"./index-58028502.js";import"./nav-back-761aa8f4.js";import{b as F}from"./DomRefTable.module-cfd794f9.js";import{G as S,D as T}from"./DocsHeader-eccf7cf9.js";import{F as M}from"./Footer-640a9f68.js";import{j as t,a as r,F as o}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u as d}from"./index-4fb8b842.js";import"./iframe-e9a69322.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./UI5Element-427ec721.js";import"./fastNavigation-8b41cdda.js";import"./AriaLabelHelper-c82262ef.js";import"./ResizeHandler-1fa8a094.js";import"./class-map-5d8e4b2b.js";import"./parameters-bundle.css-6b4a2ffb.js";import"./Input-6d3d8d56.js";import"./i18n-defaults-ffd92f69.js";import"./Device-208919c6.js";import"./ValueState-2c5e5904.js";import"./Keys-3acbae73.js";import"./Integer-d9976c13.js";import"./decline-66da1fc6.js";import"./Icons-7b82f601.js";import"./i18n-defaults-8c9b7f08.js";import"./Suggestions.css-faab6178.js";import"./Popover-93eeebac.js";import"./PopupsCommon.css-72d38d0e.js";import"./FocusableElements-c2f39514.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./Icon-ce854b74.js";import"./ResponsivePopoverCommon.css-187e38b6.js";import"./ValueStateMessage.css-37773c69.js";import"./ValueState-ab6838cc.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./Title-b986a4bd.js";import"./chunk-PCJTTTQV-b0832a2e.js";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-fe4dc3ff.js";import"./index-6436bc2b.js";import"./index-ffc1363e.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-0b6fa56b.js";import"./TableOfContent-8fa697be.js";import"./index-76de7cc5.js";import"./Label-040efebd.js";import"./Footer.module-f90cad7d.js";import"./index-3d262420.js";const E=`## Usage

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
}`}};const a={title:"Layouts & Floorplans / Bar",component:n,args:{design:h.Header,startContent:y,children:w,endContent:B},argTypes:{startContent:{control:{disable:!0}},children:{control:{disable:!0}},endContent:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withCustomElements"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:P};const te=["defaultStory","withCustomElements"];export{te as __namedExportsOrder,a as default,k as defaultStory,v as withCustomElements};
//# sourceMappingURL=Bar.stories-ce7661ff.js.map
