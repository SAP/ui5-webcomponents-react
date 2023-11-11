import{M as B,C as m,e as p,b as D}from"./chunk-HLWAVYOI-70f3b028.js";import{B as n}from"./index-b5c7480c.js";import{B as c}from"./Bar-9b663c57.js";import{B as d}from"./index-1d290b58.js";import{I as h}from"./index-69e224f1.js";import{L as u}from"./index-9e529b23.js";import{B as g}from"./Button-f20bbbdf.js";import{T as x}from"./index-f4f4c7eb.js";import"./nav-back-dfa550ff.js";import{A as F}from"./DomRefTable.module-82e12b8b.js";import{G as b,D as k}from"./DocsHeader-ff105567.js";import{F as v}from"./Footer-87e0ade7.js";import{j as t}from"./jsx-runtime-d079401a.js";import"./index-f1f2c4b1.js";import{u as l}from"./index-59d6410c.js";import"./iframe-e690f6b2.js";import"../sb-preview/runtime.js";import"./index-f82c8853.js";import"./index-c74c9f7f.js";import"./mapValues-6da481dc.js";import"./_baseForOwn-62af832b.js";import"./_baseUniq-27dbdc21.js";import"./index-356e4a49.js";import"./withWebComponent-f146e44d.js";import"./utils-85c0effb.js";import"./CustomElementsScopeUtils-90546106.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./UI5Element-d089e658.js";import"./slot-76e48863.js";import"./ResizeHandler-36d5a74c.js";import"./class-map-5b190712.js";import"./parameters-bundle.css-6c8484e5.js";import"./Input-d61dd383.js";import"./Icon-dc979b51.js";import"./Icons-d115de21.js";import"./ValueState-2c5e5904.js";import"./Integer-f7f172c9.js";import"./AriaLabelHelper-43a261ec.js";import"./getActiveElement-bcae01ed.js";import"./decline-a017ea5c.js";import"./i18n-defaults-bdef1cce.js";import"./Suggestions.css-7aca78e8.js";import"./information-ff75d6c3.js";import"./alert-fa33aca2.js";import"./Popover-84fe14ea.js";import"./PopupUtils-caf3caee.js";import"./PopupsCommon.css-070f9d59.js";import"./FocusableElements-320054f2.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-2f7624b7.js";import"./BrowserScrollbar.css-e63eefff.js";import"./i18n-defaults-a1ecaff4.js";import"./ResponsivePopoverCommon.css-ef6cd2ad.js";import"./ValueStateMessage.css-7d9802b8.js";import"./ValueState-ab6838cc.js";import"./Link-0dce4afc.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./Title-53f5d1e4.js";import"./react-jss.esm-2e5f50f2.js";import"./index-b8d7ba54.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-b7e0672b.js";import"./index-217551a3.js";import"./index-e78232a0.js";import"./Avatar-d6a8bd34.js";import"./employee-0930782f.js";import"./index-fc0700ea.js";import"./index-12e0da73.js";import"./TableOfContent-b6e03a77.js";import"./index-6f833639.js";import"./Label-025b0296.js";import"./index-07e8245f.js";const L=`## Usage

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
}`}};const o={title:"Layouts & Floorplans / Bar",component:n,args:{design:c.Header,startContent:j,children:f,endContent:C},argTypes:{startContent:{control:{disable:!0}},children:{control:{disable:!0}},endContent:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withCustomElements"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:T};const $t=["defaultStory","withCustomElements"];export{$t as __namedExportsOrder,o as default,w as defaultStory,y as withCustomElements};
//# sourceMappingURL=Bar.stories-8b07d33c.js.map
