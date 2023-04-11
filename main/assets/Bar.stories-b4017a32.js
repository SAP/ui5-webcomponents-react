import{M as v,C as l,f as c,a as L}from"./chunk-PCJTTTQV-42db6d56.js";import{B as n}from"./index-53a9d418.js";import{B as h}from"./Bar-93e4db55.js";import{B as u}from"./index-8827afaf.js";import{I as g}from"./index-18e5bac4.js";import{L as b}from"./index-a4d92329.js";import{a as f}from"./Button-35e7f923.js";import{T as C}from"./index-46c94151.js";import"./nav-back-27c9a26f.js";import{d as F}from"./DomRefTable.module-981d3edb.js";import{G as S,D as T}from"./DocsHeader-c8e8c292.js";import{F as M}from"./Footer-bd5ff639.js";import{j as t,a as r,F as o}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u as d}from"./index-4fb8b842.js";import"./iframe-60b58bb3.js";import"../sb-preview/runtime.mjs";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./UI5Element-5e77b351.js";import"./slot-76e48863.js";import"./ResizeHandler-653daa1f.js";import"./class-map-6d48ebd3.js";import"./parameters-bundle.css-6b4a2ffb.js";import"./Input-70ea0aaf.js";import"./Icon-a70637b5.js";import"./Icons-85b0e9dd.js";import"./Device-208919c6.js";import"./ValueState-2c5e5904.js";import"./Integer-f7f172c9.js";import"./AriaLabelHelper-43a261ec.js";import"./getActiveElement-bcae01ed.js";import"./decline-07b4d490.js";import"./i18n-defaults-80781f7e.js";import"./Suggestions.css-b7d020a7.js";import"./information-bce3ba82.js";import"./Popover-eac39f76.js";import"./PopupUtils-d0ec75b7.js";import"./PopupsCommon.css-ab897c30.js";import"./FocusableElements-2da74965.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-b2c643e0.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./i18n-defaults-254d6b69.js";import"./ResponsivePopoverCommon.css-19238fee.js";import"./ValueStateMessage.css-2737d025.js";import"./ValueState-ab6838cc.js";import"./Link-8808efba.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./Title-07ee6300.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./index-a334410f.js";import"./index-f9987b26.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-4c4ba252.js";import"./TableOfContent-57d7e08d.js";import"./index-8363d649.js";import"./Label-e24223e9.js";import"./index-606314c1.js";const E=`## Usage

With the use of the design property, you can set the style of the Bar to appear designed like a Header, Subheader, Footer and FloatingFooter.  
**Note:** Do not place a Bar inside another Bar or inside any bar-like component. Doing so may cause unpredictable behavior.

## Responsive Behavior

The default slot will be centered in the available space between the startContent and the endContent areas, therefore it might not always be centered in the entire bar.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`Bar\` exposes the following CSS Shadow Parts:

- bar - Used to style the wrapper of the content of the component

## Keyboard Handling

### Fast Navigation

This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \`Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up\`. In order to use this functionality, you need to import the following module: \`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`
`,w=t("span",{children:"Start Content"}),y=t("span",{children:"Center Content"}),B=t("span",{children:"End Content"}),x=t("img",{src:"https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/Logo.png",alt:"logo",style:{marginLeft:"6px",width:"120px"}});function P(e={}){const{wrapper:m}=Object.assign({},d(),e.components);return m?t(m,{...e,children:t(p,{})}):p();function p(){const i=Object.assign({h2:"h2",h1:"h1"},d(),e.components);return r(o,{children:[t(v,{title:"Layouts & Floorplans / Bar",component:n,argTypes:{startContent:{control:{disable:!0}},children:{control:{disable:!0}},endContent:{control:{disable:!0}}},args:{design:h.Header,startContent:w,children:y,endContent:B}}),`
`,t(T,{since:"0.13.0"}),`
`,t("br",{}),`
`,t(i.h2,{id:"example",children:"Example"}),`
`,t(l,{children:t(c,{name:"Default",children:s=>t(n,{...s})})}),`
`,t(i.h2,{id:"properties",children:"Properties"}),`
`,t(F,{story:"Default"}),`
`,t(L,{children:E}),`
`,t(i.h1,{id:"more-examples",children:"More Examples"}),`
`,t("br",{}),`
`,t(i.h2,{id:"bar-with-custom-elements",children:"Bar with custom elements"}),`
`,t(l,{children:t(c,{name:"with custom elements",children:s=>t(n,{...s,startContent:r(o,{children:[t(u,{icon:"nav-back",design:f.Transparent}),x]}),endContent:r(o,{children:[t(g,{placeholder:"Search"}),t(b,{style:{marginLeft:"6px"},href:"https://github.com/SAP/ui5-webcomponents-react",target:"_blank",children:t(S,{})})]}),children:t(C,{children:"Bar"})})})}),`
`,t(M,{})]})}}const D=e=>t(n,{...e});D.storyName="Default";D.parameters={storySource:{source:`args => {
  return <Bar {...args} />;
}`}};const k=e=>t(n,{...e,startContent:r(o,{children:[t(u,{icon:"nav-back",design:f.Transparent}),x]}),endContent:r(o,{children:[t(g,{placeholder:"Search"}),t(b,{style:{marginLeft:"6px"},href:"https://github.com/SAP/ui5-webcomponents-react",target:"_blank",children:t(S,{})})]}),children:t(C,{children:"Bar"})});k.storyName="with custom elements";k.parameters={storySource:{source:`args => {
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
}`}};const a={title:"Layouts & Floorplans / Bar",component:n,args:{design:h.Header,startContent:w,children:y,endContent:B},argTypes:{startContent:{control:{disable:!0}},children:{control:{disable:!0}},endContent:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withCustomElements"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:P};const ne=["defaultStory","withCustomElements"];export{ne as __namedExportsOrder,a as default,D as defaultStory,k as withCustomElements};
//# sourceMappingURL=Bar.stories-b4017a32.js.map
