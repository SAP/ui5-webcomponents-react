import{M as x,C as l,j as c,a as L}from"./index-36fb0ec6.js";import{B as r}from"./index-2e90ad9b.js";import{B as h}from"./Bar-62766cca.js";import{B as u}from"./index-e901b464.js";import{I as g}from"./index-a7598025.js";import{L as b}from"./index-10f9d0c9.js";import{a as f}from"./Button-04bad9a0.js";import{T as C}from"./index-dd71cbf7.js";import"./nav-back-d955604a.js";import{b as F}from"./DomRefTable.module-134e22b4.js";import{G as S,D as T}from"./DocsHeader-c2292181.js";import{F as M}from"./Footer-e547b8b0.js";import{j as t,a as n,F as o}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u as d}from"./index-4fb8b842.js";import"./iframe-58b64d59.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./UI5Element-427ec721.js";import"./fastNavigation-8b41cdda.js";import"./slot-634e3e91.js";import"./ResizeHandler-1fa8a094.js";import"./class-map-5d8e4b2b.js";import"./parameters-bundle.css-6b4a2ffb.js";import"./Input-c5beeaee.js";import"./event-97133b94.js";import"./Device-208919c6.js";import"./ValueState-2c5e5904.js";import"./Keys-3acbae73.js";import"./Integer-f7f172c9.js";import"./AriaLabelHelper-43a261ec.js";import"./getActiveElement-bcae01ed.js";import"./decline-f2b294b3.js";import"./Icons-7b82f601.js";import"./i18n-defaults-80781f7e.js";import"./Suggestions.css-faab6178.js";import"./information-50e1ad0f.js";import"./Popover-907d427e.js";import"./PopupUtils-a2e37749.js";import"./PopupsCommon.css-7d9fbba1.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./Icon-459702a7.js";import"./i18n-defaults-d66b3d5e.js";import"./ResponsivePopoverCommon.css-187e38b6.js";import"./ValueStateMessage.css-37773c69.js";import"./ValueState-ab6838cc.js";import"./Link-6d546ee9.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./Title-b986a4bd.js";import"./chunk-PCJTTTQV-9d26d1b9.js";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./index-0233c276.js";import"./index-da505e61.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-172f5ae8.js";import"./TableOfContent-89efecba.js";import"./index-84477ac2.js";import"./Label-040efebd.js";import"./Footer.module-f90cad7d.js";import"./index-1198c8a4.js";const E=`## Usage

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

This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \`Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up\`. In order to use this functionality, you need to import the following module: \`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\``,y=t("span",{children:"Start Content"}),w=t("span",{children:"Center Content"}),B=t("span",{children:"End Content"}),D=t("img",{src:"https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/Logo.png",alt:"logo",style:{marginLeft:"6px",width:"120px"}});function P(e={}){const{wrapper:m}=Object.assign({},d(),e.components);return m?t(m,{...e,children:t(p,{})}):p();function p(){const i=Object.assign({h2:"h2",h1:"h1"},d(),e.components);return n(o,{children:[t(x,{title:"Layouts & Floorplans / Bar",component:r,argTypes:{startContent:{control:{disable:!0}},children:{control:{disable:!0}},endContent:{control:{disable:!0}}},args:{design:h.Header,startContent:y,children:w,endContent:B}}),`
`,t(T,{since:"0.13.0"}),`
`,t("br",{}),`
`,t(i.h2,{children:"Example"}),`
`,t(l,{children:t(c,{name:"Default",children:s=>t(r,{...s})})}),`
`,t(i.h2,{children:"Properties"}),`
`,t(F,{story:"Default"}),`
`,t(L,{children:E}),`
`,t(i.h1,{children:"More Examples"}),`
`,t("br",{}),`
`,t(i.h2,{children:"Bar with custom elements"}),`
`,t(l,{children:t(c,{name:"with custom elements",children:s=>t(r,{...s,startContent:n(o,{children:[t(u,{icon:"nav-back",design:f.Transparent}),D]}),endContent:n(o,{children:[t(g,{placeholder:"Search"}),t(b,{style:{marginLeft:"6px"},href:"https://github.com/SAP/ui5-webcomponents-react",target:"_blank",children:t(S,{})})]}),children:t(C,{children:"Bar"})})})}),`
`,t(M,{})]})}}const k=e=>t(r,{...e});k.storyName="Default";k.parameters={storySource:{source:`args => {
  return <Bar {...args} />;
}`}};const v=e=>t(r,{...e,startContent:n(o,{children:[t(u,{icon:"nav-back",design:f.Transparent}),D]}),endContent:n(o,{children:[t(g,{placeholder:"Search"}),t(b,{style:{marginLeft:"6px"},href:"https://github.com/SAP/ui5-webcomponents-react",target:"_blank",children:t(S,{})})]}),children:t(C,{children:"Bar"})});v.storyName="with custom elements";v.parameters={storySource:{source:`args => {
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
}`}};const a={title:"Layouts & Floorplans / Bar",component:r,args:{design:h.Header,startContent:y,children:w,endContent:B},argTypes:{startContent:{control:{disable:!0}},children:{control:{disable:!0}},endContent:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withCustomElements"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:P};const me=["defaultStory","withCustomElements"];export{me as __namedExportsOrder,a as default,k as defaultStory,v as withCustomElements};
//# sourceMappingURL=Bar.stories-1b961fe0.js.map
