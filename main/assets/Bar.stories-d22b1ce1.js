import{M as B,C as m,e as p,b as D}from"./chunk-S4VUQJ4A-4f605f83.js";import{B as n}from"./index-4f736a08.js";import{B as c}from"./Bar-536b1c90.js";import{B as d}from"./index-86d207d4.js";import{I as h}from"./index-3f558f0b.js";import{L as u}from"./index-738e0f83.js";import{B as g}from"./Button-ca10e4c6.js";import{T as x}from"./index-f9f6ceef.js";import"./nav-back-1b57b932.js";import{A as F}from"./DomRefTable.module-2c3981e2.js";import{G as b,D as k}from"./DocsHeader-b6e71338.js";import{F as v}from"./Footer-170b4d31.js";import{j as t}from"./jsx-runtime-d079401a.js";import"./index-f1f2c4b1.js";import{u as l}from"./index-59d6410c.js";import"./iframe-0cd87302.js";import"../sb-preview/runtime.js";import"./index-92d824d3.js";import"./index-c74c9f7f.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./withWebComponent-40b4b429.js";import"./utils-64df43e3.js";import"./CustomElementsScopeUtils-7e643eaa.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./UI5Element-fe43d284.js";import"./slot-76e48863.js";import"./ResizeHandler-c2d89e75.js";import"./class-map-c90b90b7.js";import"./parameters-bundle.css-f8793162.js";import"./Input-ac62fefa.js";import"./Icon-4b8e6c3e.js";import"./Icons-1d0bcfc0.js";import"./ValueState-2c5e5904.js";import"./Integer-f7f172c9.js";import"./AriaLabelHelper-43a261ec.js";import"./getActiveElement-bcae01ed.js";import"./decline-6c7fc0a2.js";import"./i18n-defaults-bdef1cce.js";import"./Suggestions.css-a7aca9e4.js";import"./information-5d7a8806.js";import"./alert-1b225bb9.js";import"./Popover-e0a9892e.js";import"./PopupUtils-6f7aa5d8.js";import"./PopupsCommon.css-20392ac5.js";import"./FocusableElements-81dc3a15.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-26bcc635.js";import"./BrowserScrollbar.css-6733af99.js";import"./i18n-defaults-d5195a49.js";import"./ResponsivePopoverCommon.css-fd1b094e.js";import"./ValueStateMessage.css-a9dd0528.js";import"./ValueState-ab6838cc.js";import"./Link-39a6449b.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./Title-01167e9e.js";import"./react-jss.esm-2e5f50f2.js";import"./index-a46c7c7c.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-0dcb0e40.js";import"./index-4196e082.js";import"./index-d14e4804.js";import"./Avatar-b61e760c.js";import"./employee-6f8dc3b6.js";import"./index-4f598d0a.js";import"./index-12e0da73.js";import"./TableOfContent-7b2662b0.js";import"./index-934c1e2c.js";import"./Label-44520d2b.js";import"./index-b05cbecb.js";const L=`## Usage

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
`,j=t.jsx("span",{children:"Start Content"}),f=t.jsx("span",{children:"Center Content"}),C=t.jsx("span",{children:"End Content"}),S=t.jsx("img",{src:"https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/Logo.png",alt:"logo",style:{marginLeft:"6px",width:"120px"}});function T(e={}){const{wrapper:s}=Object.assign({},l(),e.components);return s?t.jsx(s,{...e,children:t.jsx(a,{})}):a();function a(){const r=Object.assign({h2:"h2",h1:"h1"},l(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(B,{title:"Layouts & Floorplans / Bar",component:n,argTypes:{startContent:{control:{disable:!0}},children:{control:{disable:!0}},endContent:{control:{disable:!0}}},args:{design:c.Header,startContent:j,children:f,endContent:C}}),`
`,t.jsx(k,{since:"0.13.0"}),`
`,t.jsx("br",{}),`
`,t.jsx(r.h2,{id:"example",children:"Example"}),`
`,t.jsx(m,{children:t.jsx(p,{name:"Default",children:i=>t.jsx(n,{...i})})}),`
`,t.jsx(r.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(F,{story:"Default"}),`
`,t.jsx(D,{children:L}),`
`,t.jsx(r.h1,{id:"more-examples",children:"More Examples"}),`
`,t.jsx("br",{}),`
`,t.jsx(r.h2,{id:"bar-with-custom-elements",children:"Bar with custom elements"}),`
`,t.jsx(m,{children:t.jsx(p,{name:"with custom elements",children:i=>t.jsx(n,{...i,startContent:t.jsxs(t.Fragment,{children:[t.jsx(d,{icon:"nav-back",design:g.Transparent}),S]}),endContent:t.jsxs(t.Fragment,{children:[t.jsx(h,{placeholder:"Search"}),t.jsx(u,{style:{marginLeft:"6px"},href:"https://github.com/SAP/ui5-webcomponents-react",target:"_blank",children:t.jsx(b,{})})]}),children:t.jsx(x,{children:"Bar"})})})}),`
`,t.jsx(v,{})]})}}const w=e=>t.jsx(n,{...e});w.storyName="Default";w.parameters={storySource:{source:`args => {
  return <Bar {...args} />;
}`}};const y=e=>t.jsx(n,{...e,startContent:t.jsxs(t.Fragment,{children:[t.jsx(d,{icon:"nav-back",design:g.Transparent}),S]}),endContent:t.jsxs(t.Fragment,{children:[t.jsx(h,{placeholder:"Search"}),t.jsx(u,{style:{marginLeft:"6px"},href:"https://github.com/SAP/ui5-webcomponents-react",target:"_blank",children:t.jsx(b,{})})]}),children:t.jsx(x,{children:"Bar"})});y.storyName="with custom elements";y.parameters={storySource:{source:`args => {
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
}`}};const o={title:"Layouts & Floorplans / Bar",component:n,args:{design:c.Header,startContent:j,children:f,endContent:C},argTypes:{startContent:{control:{disable:!0}},children:{control:{disable:!0}},endContent:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withCustomElements"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:T};const ee=["defaultStory","withCustomElements"];export{ee as __namedExportsOrder,o as default,w as defaultStory,y as withCustomElements};
//# sourceMappingURL=Bar.stories-d22b1ce1.js.map
