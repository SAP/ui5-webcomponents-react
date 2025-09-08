import{cT as m,cU as u,cV as x,r as g,j as e,_ as j}from"./iframe-C-EBr6B5.js";import{useMDXComponents as h}from"./index-CsHoO3vp.js";import{M as y}from"./blocks-CW6WXKe3.js";import"./Tag-oA_76L9w.js";import{M as r,a as i}from"./index-w0Ow44Ci.js";import{F as S}from"./CommandsAndQueries-uIAr-det.js";import"./i18n-DCXZOGva.js";import"./copy-u5h8VvvF.js";import{T as f}from"./TableOfContent-CAVSmF6L.js";import{C as b}from"./Card.stories-CCxYtp8Q.js";import{T as a}from"./ThemingParameters-pyhX3s39.js";import"./preload-helper-D9Z9MdNV.js";import"./information-tqFaSeRf.js";import"./sys-enter-2-Bt0bcCDE.js";import"./alert-yTZDtevr.js";import"./index-BUutaB5D.js";import"./index-BI8WG9ur.js";import"./index-D4pu56zs.js";import"./Link-BOxP5Jij.js";import"./addCustomCSSWithScoping-DyJ9Y5R2.js";import"./index-DuvAH5uD.js";import"./index-CcO_nGqV.js";import"./index-o40X6E60.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B-BNRVJb.js";import"./index-DPNnv8Bc.js";import"./person-placeholder-DS6r-M78.js";import"./person-placeholder-r4jDDuJv.js";import"./index-CPPuRsno.js";import"./YAxisTicks-BDdIEigm.js";import"./ChartContainer-C4oVE50r.js";import"./index-BIxje1JV.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CIw5PFb-.js";import"./staticProps-BEwYMXaY.js";import"./ChartDataLabel-L2g6--M1.js";import"./useLongestYAxisLabel--PkAhwUc.js";import"./react-content-loader.es-C80MOHp2.js";import"./Line-BBVB88k5.js";import"./useIsRTL-DGcoN34w.js";import"./index-C00auh0H.js";import"./utils-B-nKspCA.js";import"./index-C2uJtNkV.js";import"./index-CDeu0SSK.js";import"./ListItemStandard-DX4UvhQJ.js";const{global:w}=__STORYBOOK_MODULE_GLOBAL__,{composeConfigs:C,setDefaultProjectAnnotations:Ce,setProjectAnnotations:ve,composeStory:v,composeStories:T}=__STORYBOOK_MODULE_PREVIEW_API__;var{window:l}=w;l&&(l.STORYBOOK_ENV="react");var P=C([m,u,{renderToCanvas:async(n,t)=>{if(n.storyContext.testingLibraryRender==null)return x(n,t);let{storyContext:{context:o,unboundStoryFn:s,testingLibraryRender:d}}=n,{unmount:p}=d(g.createElement(s,{...o}),{container:o.canvasElement});return p}}]);function _(n,t,o,s){return v(n,t,o,globalThis.globalProjectAnnotations??P,s)}function E(n,t){return T(n,t,_)}const{Default:M}=E(b),N=()=>e.jsx("div",{children:e.jsx(M,{className:"card"})}),O=()=>e.jsx("div",{className:"containerCustomElement",children:e.jsx("span",{style:{color:a.sapNegativeColor,fontSize:a.sapFontLargeSize},children:"My Text"})});function c(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong","ui5-link":"ui5-link",ul:"ul",...h(),...n.components},o=t["ui5-link"];return e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Styling"}),`
`,e.jsx(t.h1,{id:"styling",children:"Styling"}),`
`,e.jsx(f,{}),`
`,e.jsx(t.h2,{id:"styling-ui5-web-components-for-react-components",children:"Styling UI5 Web Components for React components"}),`
`,e.jsxs(t.p,{children:["You can change the appearance of the Web Components by using ",e.jsx(t.a,{href:"https://www.w3schools.com/Css/css3_variables.asp",rel:"nofollow",children:"CSS Variables"}),`.
Per default, we are injecting the Horizon theme parameters as CSS Variables into the `,e.jsx(t.code,{children:"<head>"}),`.
For example, if you want to change the color of all texts that use the `,e.jsx(t.code,{children:"--sapTextColor"})," variable, you can create an additional ",e.jsx(t.code,{children:"style"})," tag with the following content:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<style>
  * {
    --sapTextColor: limegreen;
  }
</style>
`})}),`
`,e.jsx(r,{hideCloseButton:!0,design:i.Critical,children:"Changing the value of a CSS Variable will affect theming capabilities, as it will be changed for all themes!"}),`
`,e.jsxs(t.p,{children:["As a consequence, all HTML Elements in the subtree where this style was applied are now displaying their texts in ",e.jsx(t.code,{children:"limegreen"})," instead of ",e.jsx(t.code,{children:"#32363a"}),` which would be the default value for Fiori 3.
You can change CSS Variables on any level - in the head, or on every single element by using either CSS classes or element style.`]}),`
`,e.jsxs(t.p,{children:["A full list of all supported CSS Variables can be found ",e.jsx(t.a,{href:"https://github.com/SAP/ui5-webcomponents-react/blob/main/packages/base/src/styling/ThemingParameters.ts",rel:"nofollow",children:"here"}),`
or in the `,e.jsx(t.a,{href:"https://github.com/SAP/theming-base-content/tree/master/content/Base/baseLib",rel:"nofollow",children:"theming-base-content"})," repo."]}),`
`,e.jsx(t.h2,{id:"scrollbars",children:"Scrollbars"}),`
`,e.jsxs(t.p,{children:["Rendering our ",e.jsx(t.code,{children:"ThemeProvider"}),` will apply the Fiori styles to all scrollbars on the page.
If you want to opt-out of this behavior, you can add the `,e.jsx(t.code,{children:".ui5-content-native-scrollbars"})," class to the respective element to prevent the scrollbar styling from being applied."]}),`
`,e.jsx(r,{design:i.Information,hideCloseButton:!0,children:"Due to the limited configuration options for scrollbars, you must apply this class to each scroll-container element individually."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<ObjectPage className="ui5-content-native-scrollbars">{children}</ObjectPage>
`})}),`
`,e.jsx(t.h2,{id:"style-your-own-components",children:"Style your own components"}),`
`,e.jsxs(t.p,{children:[`It's quite likely you have to create some custom components when you are building an app.
In order to reuse our central styling approach, you can import the `,e.jsx(t.code,{children:"ThemingParameters"})," that contain the various CSS variables used in our theming, or use the CSS variables directly."]}),`
`,e.jsx(r,{design:i.Information,hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:["You can find all ",e.jsx(t.code,{children:"ThemingParameters"})," ",e.jsx(o,{href:"./?path=/docs/knowledge-base-public-utils--docs#theming-parameters",children:"here"}),". If you don't want to use CSS-in-JS library, you can also just use the corresponding CSS variable."]})}),`
`,e.jsx(t.p,{children:"You can then create a custom component by following this recipe:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { ThemingParameters } from '@ui5/webcomponents-react-base/ThemingParameters';
import './MyCustomElement.css';

export const MyCustomElement = () => {
  return (
    <div className="containerCustomElement">
      <span style={{ color: ThemingParameters.sapNegativeColor, fontSize: ThemingParameters.sapFontLargeSize }}>
        My Text
      </span>
    </div>
  );
};
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`.containerCustomElement {
  background-color: var(--sapBackgroundColor);
  font-family: var(--sapFontFamily);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
`})}),`
`,e.jsx(t.p,{children:"This would then be the result:"}),`
`,e.jsx(j,{children:e.jsx(O,{})}),`
`,e.jsxs(t.h2,{id:"applying-styling-via-classname-or-style",children:["Applying styling via ",e.jsx(t.code,{children:"className"})," or ",e.jsx(t.code,{children:"style"})]}),`
`,e.jsxs(t.p,{children:["Almost all components allow setting ",e.jsx(t.code,{children:"className"})," or ",e.jsx(t.code,{children:"style"})," for custom styling. For standard elements like ",e.jsx(t.code,{children:"div"}),", ",e.jsx(t.code,{children:"span"}),", etc., you can easily override internal CSS properties and values, as our styles are encapsulated in a ",e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@layer",rel:"nofollow",children:"CSS layer"}),`.
For web components, this does `,e.jsx(t.strong,{children:"not"}),` mean that styles are inherited by shadow root elements per default.
Only `,e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance#inherited_properties",rel:"nofollow",children:"inherited CSS properties"}),` that are not set inside the shadow root or internally passed properties will change the styles of the internal elements.
Another special case are abstract components like the `,e.jsx(t.code,{children:"SuggestionItem"}),". The ",e.jsx(t.code,{children:"ui5-suggestion-item"})," element is mainly there to pass props to the actual component inside the shadow root and is therefore not stylable."]}),`
`,e.jsx(t.h2,{id:"explicitly-import-css-bundles",children:"Explicitly import CSS bundles"}),`
`,e.jsxs(t.p,{children:["By default, the ",e.jsx(t.code,{children:"ThemeProvider"})," injects the CSS of the components during runtime. If you want to import the CSS bundles explicitly, you can set the ",e.jsx(t.code,{children:"staticCssInjected"})," prop to ",e.jsx(t.code,{children:"true"}),`.
This approach provides you with control over the order in which CSS files are injected, making it easier to override styles.`]}),`
`,e.jsxs(t.p,{children:["Please note that the static CSS is not wrapped inside a ",e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@layer",rel:"nofollow",children:"CSS layer"}),". You can use the ",e.jsxs(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@import",rel:"nofollow",children:[e.jsx(t.code,{children:"@import"})," CSS at-rule"]})," to achieve that."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"main"})," package import: ",e.jsx(t.code,{children:"import '@ui5/webcomponents-react/styles.css'"})]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"charts"})," package import: ",e.jsx(t.code,{children:"import '@ui5/webcomponents-react-charts/styles.css'"})]}),`
`]}),`
`,e.jsx(t.h2,{id:"css-shadow-parts",children:"CSS Shadow Parts"}),`
`,e.jsxs(t.p,{children:["When using web components like the ",e.jsx(t.a,{href:"?path=/docs/data-display-card--docs#css-shadow-parts",children:"Card"}),`, you will sometimes see a "CSS Shadow Parts" section.
One of the main advantages of the shadow root is encapsulation of parts of the DOM and styles, but since it could still be necessary for some elements to be adjusted even though they're inside the shadow root, the ui5-webcomponents offer a way to customize CSS of selected elements by attaching the `,e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#part",rel:"nofollow",children:"part"}),` attribute.
With the help of this attribute it's possible styling the respective element, by using the `,e.jsxs(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/::part",rel:"nofollow",children:[e.jsx(t.code,{children:"::part"})," pseudo-element"]}),"."]}),`
`,e.jsx(t.h3,{id:"example",children:"Example"}),`
`,e.jsx(N,{}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsxs("details",{children:[" ",e.jsx("summary",{children:"Show Code"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`.card::part(root) {
  background-color: lightgreen;
}
.card::part(content) {
  transform: rotate(180deg);
}
`})}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`function MyComponent() {
  return (
    <Card
      header={
        <CardHeader
          additionalText="3 of 5"
          avatar={<Icon name="person-placeholder" />}
          subtitleText="Direct Reports"
          titleText="TeamSpace"
        />
      }
      className="card"
    >
      <List>
        <ListItemStandard description="Software Architect" text="Richard Wilson" />
        <ListItemStandard description="Visual Designer" text="Elena Petrova" />
        <ListItemStandard description="Quality Specialist" text="John Miller" />
      </List>
    </Card>
  );
}
`})})]}),`
`,e.jsx(t.h2,{id:"common-css",children:"Common CSS"}),`
`,e.jsxs(t.p,{children:["For applying common styling blocks based on SAP Fiori Design Guidelines, we recommend using the ",e.jsx(t.a,{href:"https://www.npmjs.com/package/@sap-ui/common-css",rel:"nofollow",children:"@sap-ui/common-css"})," package. You can find out more about this ",e.jsx(t.a,{href:"?path=/docs/knowledge-base-common-css--docs",children:"here"}),"."]}),`
`,e.jsx(S,{})]})}function Te(n={}){const{wrapper:t}={...h(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(c,{...n})}):c(n)}export{Te as default};
