import{M as B,C as m,f as p,a as D}from"./chunk-PCJTTTQV-3ae44807.js";import{B as n}from"./index-816df44c.js";import{B as c}from"./Bar-97be9421.js";import{B as d}from"./index-8e40db2c.js";import{I as h}from"./index-6e6496bd.js";import{L as u}from"./index-1bdac791.js";import{a as g}from"./Button-b124cb06.js";import{T as x}from"./index-abc61306.js";import"./nav-back-91fabf32.js";import{d as F}from"./DomRefTable.module-1b539386.js";import{G as b,D as k}from"./DocsHeader-a5d8fd1b.js";import{F as v}from"./Footer-cd999e94.js";import{j as t}from"./jsx-runtime-5926aa06.js";import"./index-ebeaab24.js";import{u as l}from"./index-bda0bad7.js";import"./iframe-62076298.js";import"../sb-preview/runtime.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./withWebComponent-d61dcbbc.js";import"./utils-69f7a0e0.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./UI5Element-d19f28b4.js";import"./slot-76e48863.js";import"./ResizeHandler-d7af0733.js";import"./class-map-519e9c6d.js";import"./parameters-bundle.css-deb4e0b1.js";import"./Input-51927e2b.js";import"./Icon-2e1c5474.js";import"./Icons-d3203353.js";import"./Device-208919c6.js";import"./ValueState-2c5e5904.js";import"./Integer-f7f172c9.js";import"./AriaLabelHelper-43a261ec.js";import"./getActiveElement-bcae01ed.js";import"./decline-e129c312.js";import"./i18n-defaults-80781f7e.js";import"./Suggestions.css-2743800e.js";import"./information-b0c94f16.js";import"./Popover-fe68fced.js";import"./PopupUtils-565f6d6c.js";import"./PopupsCommon.css-8109da93.js";import"./FocusableElements-59b9e9bf.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-388120e7.js";import"./MediaRange-25b98f31.js";import"./style-map-33b353d0.js";import"./i18n-defaults-254d6b69.js";import"./ResponsivePopoverCommon.css-4f3232f2.js";import"./ValueStateMessage.css-7a219042.js";import"./ValueState-ab6838cc.js";import"./Link-9ab31ed2.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./Title-64b66bf0.js";import"./react-jss.esm-022ab528.js";import"./index-d9639aa3.js";import"./index-c65c86f0.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./Import-7dbf9833.js";import"./TableOfContent-801ccff0.js";import"./index-a085d11d.js";import"./Label-855a552c.js";import"./index-828871d8.js";const L=`## Usage

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
}`}};const o={title:"Layouts & Floorplans / Bar",component:n,args:{design:c.Header,startContent:j,children:f,endContent:C},argTypes:{startContent:{control:{disable:!0}},children:{control:{disable:!0}},endContent:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withCustomElements"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:T};const Zt=["defaultStory","withCustomElements"];export{Zt as __namedExportsOrder,o as default,w as defaultStory,y as withCustomElements};
//# sourceMappingURL=Bar.stories-bb913010.js.map
