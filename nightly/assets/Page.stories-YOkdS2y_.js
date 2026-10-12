import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{At as n,X as r,Y as i,jt as a,vt as o,yt as s}from"./CustomElementsScopeUtils-G6VaTXHT.js";import{a as c,c as l,d as u,f as d,i as f,l as p,m,n as h,o as g,p as _,r as v,s as y,u as b}from"./jsx-runtime-NHZLEOw0.js";import{n as x,t as S}from"./withWebComponent-DDACWNN1.js";import{t as C}from"./jsx-runtime-BdxMnOeJ.js";import{n as w,t as T}from"./slot-strict-BSUUcNBc.js";import{l as E,u as D}from"./Button-C69-ub8X.js";import{n as O,t as k}from"./Button-BfTNzh24.js";import{n as ee,t as te}from"./Label-D201qzLx.js";import{n as A,t as j}from"./BarDesign-Vb2QXBEp.js";import{n as M,t as N}from"./Bar-O_SKRm_w.js";import{n as P,t as F}from"./parameters-bundle.css-sD0-XBn7.js";function I(){return f(`div`,{class:`ui5-page-root`,children:[v(`header`,{id:`ui5-page-header`,class:`ui5-page-header-root`,children:v(`slot`,{name:`header`})}),v(`section`,{part:`content`,class:`ui5-page-content-root`,style:{"padding-bottom":this.footer.length&&this._contentPaddingBottom,"scroll-padding-bottom":this.footer.length&&this._contentPaddingBottom,"margin-bottom":this.footer.length&&this._contentBottom,bottom:this.footer.length&&this._contentBottom,top:this._contentTop},children:v(`slot`,{})}),v(`footer`,{class:`ui5-page-footer-root`,children:v(`slot`,{name:`footer`})})]})}function L(){return(L=e((()=>{h()})))()}var R;function z(){return(z=e((()=>{r(),c(),F(),i(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>g),i(`@ui5/webcomponents-fiori`,`sap_horizon`,async()=>P,`host`),R=`:host(:not([hidden])){width:100%;height:100%;display:block;container-type:size}.ui5-page-root{height:inherit;overflow:hidden;position:relative;z-index:0;box-sizing:border-box;background-color:inherit;display:flex;flex-direction:column}.ui5-page-header-root{z-index:1;flex-shrink:0}.ui5-page-content-root{overflow:hidden auto;will-change:scroll-position;flex:1;box-sizing:border-box;font-size:var(--sapFontSize);color:var(--sapTextColor)}.ui5-page-footer-root{box-sizing:border-box;position:absolute;bottom:0;left:0;z-index:2;width:100%}:host(:not([fixed-footer])) .ui5-page-footer-root{opacity:1;bottom:.5rem}::slotted([ui5-bar][slot="footer"][design="FloatingFooter"]){margin:auto;padding:0}:host([floating-footer]) .ui5-page-footer-root,.ui5-page-content-root{padding:0 1rem}::slotted([ui5-bar][slot="header"]),::slotted([ui5-bar][design="Footer"]){box-sizing:border-box;padding:0 .25rem}::slotted([ui5-bar][design="FloatingFooter"]){width:calc(100% - .5rem)}@container (min-width: 600px){:host([floating-footer]) .ui5-page-footer-root,.ui5-page-content-root{padding:0 2rem}::slotted([ui5-bar][slot="header"]),::slotted([ui5-bar][slot="footer"]){box-sizing:border-box;padding:0 1.25rem}::slotted([ui5-bar][design="FloatingFooter"]){width:calc(100% - 2.5rem)}}@container (min-width: 1024px){:host([floating-footer]) .ui5-page-footer-root,.ui5-page-content-root{padding:0 2rem}::slotted([ui5-bar][slot="header"]),::slotted([ui5-bar][slot="footer"]){box-sizing:border-box;padding:0 1.25rem}::slotted([ui5-bar][design="FloatingFooter"]){width:calc(100% - 2.5rem)}}@container (min-width: 1440px){:host([floating-footer]) .ui5-page-footer-root,.ui5-page-content-root{padding:0 3rem}::slotted([ui5-bar][slot="header"]),::slotted([ui5-bar][slot="footer"]){box-sizing:border-box;padding:0 2.25rem}::slotted([ui5-bar][design="FloatingFooter"]){width:calc(100% - 4.5rem)}}:host([no-scrolling]) .ui5-page-content-root{overflow:hidden}:host([hide-footer][fixed-footer]) .ui5-page-footer-root{display:none}:host(:not([fixed-footer]):not([hide-footer])) .ui5-page-footer-root{animation:bounceShow var(--_ui5-page-animation-duration) forwards ease-in-out}:host(:not([fixed-footer])[hide-footer]) .ui5-page-footer-root{animation:bounceHide var(--_ui5-page-animation-duration) forwards ease-in-out}:host([background-design="Solid"]){background-color:var(--sapBackgroundColor)}:host([background-design="Transparent"]){background-color:var(--_ui5_page_transparent_bg)}:host([background-design="List"]){background-color:var(--_ui5_page_list_bg)}@keyframes bounceShow{0%{transform:translateY(100%);opacity:0}to{opacity:1}}@keyframes bounceHide{0%{transform:translateY(-5%);opacity:1}to{transform:translateY(100%);opacity:0}}
`})))()}var B,V;function H(){return(H=e((()=>{m(),u(),p(),w(),y(),o(),n(),L(),z(),B=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},V=class extends _{constructor(){super(),this.backgroundDesign=`Solid`,this.noScrolling=!1,this.fixedFooter=!1,this.hideFooter=!1}onEnterDOM(){this.style.setProperty(`--_ui5-page-animation-duration`,s()===a.None?`0s`:`0.35s`)}get _contentBottom(){return this.fixedFooter&&!this.hideFooter?`2.75rem`:`0`}get _contentPaddingBottom(){return!this.fixedFooter&&!this.hideFooter?`3.5rem`:`0`}get _contentTop(){return this.header.length?`2.75rem`:`0rem`}},B([b()],V.prototype,`backgroundDesign`,void 0),B([b({type:Boolean})],V.prototype,`noScrolling`,void 0),B([b({type:Boolean})],V.prototype,`fixedFooter`,void 0),B([b({type:Boolean})],V.prototype,`hideFooter`,void 0),B([T()],V.prototype,`header`,void 0),B([T({type:Node,default:!0})],V.prototype,`content`,void 0),B([T()],V.prototype,`footer`,void 0),V=B([d({tag:`ui5-page`,languageAware:!0,renderer:l,styles:[R],template:I})],V),V.define()})))()}var U;function W(){return(W=e((()=>{H(),S(),U=x(`ui5-page`,[`backgroundDesign`],[`fixedFooter`,`hideFooter`,`noScrolling`],[`footer`,`header`],[]),U.displayName=`Page`;try{U.displayName=`Page`,U.__docgenInfo={description:`The \`Page\` is a container component that holds one whole screen of an application.
The page has three distinct areas that can hold content - a header, content area and a footer.
### Structure
#### Header
The top most area of the page is occupied by the header. The standard header includes a navigation button and a title.
#### Content
The content occupies the main part of the page. Only the content area is scrollable by default.
This can be prevented by setting \`noScrolling\` to \`true\`.
#### Footer
The footer is optional and occupies the part above the bottom part of the content. Alternatively, the footer can be fixed at the bottom of the page by enabling the \`fixedFooter\` property.

**Note:** \`Page\` occipues the whole available space of its parent. In order to achieve the intended design you have to make sure
that there is enough space for the \`Page\` to be rendered.
**Note:** In order for the \`Page\` to be displayed, the parent element should have fixed height.



__Note:__ This is a UI5 Web Component! [Page UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/Page) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`Page`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/Page/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Page/index.d.ts`,name:`PagePropTypes`}],description:`Defines the content HTML Element.

__Supported Node Type/s:__ \`Array<Node>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Page/index.d.ts`,name:`PagePropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},footer:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Page/index.d.ts`,name:`PagePropTypes`}],description:`Defines the footer HTML Element.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="footer"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`footer`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Page/index.d.ts`,name:`PagePropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},header:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Page/index.d.ts`,name:`PagePropTypes`}],description:`Defines the header HTML Element.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`header`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Page/index.d.ts`,name:`PagePropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},backgroundDesign:{defaultValue:{value:`"Solid"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Page/index.d.ts`,name:`PageAttributes`}],description:`Defines the background color of the \`Page\`.

**Note:** When a ui5-list is placed inside the page, we recommend using “List” to ensure better color contrast.`,name:`backgroundDesign`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Page/index.d.ts`,name:`PageAttributes`},required:!1,tags:{default:`"Solid"`},type:{name:`enum`,raw:`"List" | "Transparent" | "Solid" | PageBackgroundDesign`,value:[{value:`"List"`},{value:`"Transparent"`},{value:`"Solid"`},{value:`"List"`,description:`Page background color when a List is set as the Page content.`,fullComment:`Page background color when a List is set as the Page content.
@public`,tags:{public:``}},{value:`"Solid"`,description:`A solid background color dependent on the theme.`,fullComment:`A solid background color dependent on the theme.
@public`,tags:{public:``}},{value:`"Transparent"`,description:`Transparent background for the page.`,fullComment:`Transparent background for the page.
@public`,tags:{public:``}}]}},fixedFooter:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Page/index.d.ts`,name:`PageAttributes`}],description:`Defines if the footer is fixed at the very bottom of the page.

**Note:** When set to true the footer is fixed at the very bottom of the page, otherwise it floats over the content with a slight offset from the bottom.`,name:`fixedFooter`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Page/index.d.ts`,name:`PageAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},hideFooter:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Page/index.d.ts`,name:`PageAttributes`}],description:`Defines the footer visibility.`,name:`hideFooter`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Page/index.d.ts`,name:`PageAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},noScrolling:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Page/index.d.ts`,name:`PageAttributes`}],description:`Disables vertical scrolling of page content.
If set to true, there will be no vertical scrolling at all.`,name:`noScrolling`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Page/index.d.ts`,name:`PageAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{}}}catch{}})))()}var G,K;function q(){return(q=e((()=>{(function(e){e.List=`List`,e.Solid=`Solid`,e.Transparent=`Transparent`})(G||={}),K=G})))()}var J=t({Default:()=>Z,__namedExportsOrder:()=>Q,default:()=>X}),Y,X,Z,Q;function $(){return($=e((()=>{A(),D(),q(),M(),O(),ee(),W(),Y=C(),X={title:`Layouts & Floorplans / Page`,component:U,args:{backgroundDesign:K.Solid,style:{height:`500px`},header:(0,Y.jsx)(N,{design:j.Header,startContent:(0,Y.jsx)(k,{icon:`home`,title:`Go Home`,accessibleName:`Home`}),endContent:(0,Y.jsx)(k,{icon:`settings`,title:`Go to Settings`,accessibleName:`Settings`}),children:(0,Y.jsx)(te,{children:`Title`})}),footer:(0,Y.jsx)(`div`,{children:(0,Y.jsx)(N,{design:j.FloatingFooter,endContent:(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(k,{design:E.Positive,children:`Accept`}),(0,Y.jsx)(k,{design:E.Negative,children:`Decline`}),(0,Y.jsx)(k,{design:E.Transparent,children:`Cancel`})]})})})},argTypes:{children:{control:{disable:!0}},footer:{control:{disable:!0}},header:{control:{disable:!0}}},tags:[`package:@ui5/webcomponents-fiori`]},Z={args:{children:(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa sed elementum tempus egestas sed sed risus pretium. Eget nullam non nisi est sit amet facilisis. Imperdiet dui accumsan sit amet nulla facilisi morbi. Sem viverra aliquet eget sit amet tellus cras adipiscing. Faucibus purus in massa tempor nec. Egestas quis ipsum suspendisse ultrices gravida dictum. Amet facilisis magna etiam tempor. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Ac orci phasellus egestas tellus. Quis imperdiet massa tincidunt nunc. Mollis nunc sed id semper risus in hendrerit gravida rutrum.`}),(0,Y.jsx)(`p`,{children:`Amet consectetur adipiscing elit duis tristique. Tortor condimentum lacinia quis vel eros. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Sed nisi lacus sed viverra tellus in hac habitasse. Praesent tristique magna sit amet purus gravida quis blandit. Magnis dis parturient montes nascetur ridiculus. Sit amet nulla facilisi morbi tempus iaculis urna id. Senectus et netus et malesuada fames. Faucibus ornare suspendisse sed nisi lacus sed. Facilisis volutpat est velit egestas dui id ornare arcu odio. In tellus integer feugiat scelerisque. Eu turpis egestas pretium aenean pharetra magna. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Ante in nibh mauris cursus mattis. Sagittis vitae et leo duis.`}),(0,Y.jsx)(`p`,{children:`Sodales ut eu sem integer. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Tellus rutrum tellus pellentesque eu tincidunt tortor. Etiam tempor orci eu lobortis elementum nibh. Velit laoreet id donec ultrices tincidunt arcu non sodales. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Odio ut sem nulla pharetra diam sit amet nisl. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Donec enim diam vulputate ut pharetra sit. Posuere ac ut consequat semper viverra nam libero. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Ac placerat vestibulum lectus mauris ultrices.`}),(0,Y.jsx)(`p`,{children:`Amet consectetur adipiscing elit duis tristique. Tortor condimentum lacinia quis vel eros. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Sed nisi lacus sed viverra tellus in hac habitasse. Praesent tristique magna sit amet purus gravida quis blandit. Magnis dis parturient montes nascetur ridiculus. Sit amet nulla facilisi morbi tempus iaculis urna id. Senectus et netus et malesuada fames. Faucibus ornare suspendisse sed nisi lacus sed. Facilisis volutpat est velit egestas dui id ornare arcu odio. In tellus integer feugiat scelerisque. Eu turpis egestas pretium aenean pharetra magna. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Ante in nibh mauris cursus mattis. Sagittis vitae et leo duis.`}),(0,Y.jsx)(`p`,{children:`Sodales ut eu sem integer. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Tellus rutrum tellus pellentesque eu tincidunt tortor. Etiam tempor orci eu lobortis elementum nibh. Velit laoreet id donec ultrices tincidunt arcu non sodales. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Odio ut sem nulla pharetra diam sit amet nisl. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Donec enim diam vulputate ut pharetra sit. Posuere ac ut consequat semper viverra nam libero. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Ac placerat vestibulum lectus mauris ultrices.`})]})}},Q=[`Default`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Turpis massa sed elementum tempus egestas sed sed risus pretium. Eget nullam non nisi est sit
          amet facilisis. Imperdiet dui accumsan sit amet nulla facilisi morbi. Sem viverra aliquet eget sit amet tellus
          cras adipiscing. Faucibus purus in massa tempor nec. Egestas quis ipsum suspendisse ultrices gravida dictum.
          Amet facilisis magna etiam tempor. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Ac orci
          phasellus egestas tellus. Quis imperdiet massa tincidunt nunc. Mollis nunc sed id semper risus in hendrerit
          gravida rutrum.
        </p>
        <p>
          Amet consectetur adipiscing elit duis tristique. Tortor condimentum lacinia quis vel eros. Elit sed vulputate
          mi sit amet mauris commodo quis imperdiet. Sed nisi lacus sed viverra tellus in hac habitasse. Praesent
          tristique magna sit amet purus gravida quis blandit. Magnis dis parturient montes nascetur ridiculus. Sit amet
          nulla facilisi morbi tempus iaculis urna id. Senectus et netus et malesuada fames. Faucibus ornare suspendisse
          sed nisi lacus sed. Facilisis volutpat est velit egestas dui id ornare arcu odio. In tellus integer feugiat
          scelerisque. Eu turpis egestas pretium aenean pharetra magna. Integer enim neque volutpat ac tincidunt vitae
          semper quis lectus. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Ante in nibh
          mauris cursus mattis. Sagittis vitae et leo duis.
        </p>
        <p>
          Sodales ut eu sem integer. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Tellus rutrum tellus
          pellentesque eu tincidunt tortor. Etiam tempor orci eu lobortis elementum nibh. Velit laoreet id donec
          ultrices tincidunt arcu non sodales. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Odio
          ut sem nulla pharetra diam sit amet nisl. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam.
          Donec enim diam vulputate ut pharetra sit. Posuere ac ut consequat semper viverra nam libero. Viverra mauris
          in aliquam sem fringilla ut morbi tincidunt augue. Aliquam eleifend mi in nulla posuere sollicitudin aliquam
          ultrices. Ac placerat vestibulum lectus mauris ultrices.
        </p>
        <p>
          Amet consectetur adipiscing elit duis tristique. Tortor condimentum lacinia quis vel eros. Elit sed vulputate
          mi sit amet mauris commodo quis imperdiet. Sed nisi lacus sed viverra tellus in hac habitasse. Praesent
          tristique magna sit amet purus gravida quis blandit. Magnis dis parturient montes nascetur ridiculus. Sit amet
          nulla facilisi morbi tempus iaculis urna id. Senectus et netus et malesuada fames. Faucibus ornare suspendisse
          sed nisi lacus sed. Facilisis volutpat est velit egestas dui id ornare arcu odio. In tellus integer feugiat
          scelerisque. Eu turpis egestas pretium aenean pharetra magna. Integer enim neque volutpat ac tincidunt vitae
          semper quis lectus. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Ante in nibh
          mauris cursus mattis. Sagittis vitae et leo duis.
        </p>
        <p>
          Sodales ut eu sem integer. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Tellus rutrum tellus
          pellentesque eu tincidunt tortor. Etiam tempor orci eu lobortis elementum nibh. Velit laoreet id donec
          ultrices tincidunt arcu non sodales. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Odio
          ut sem nulla pharetra diam sit amet nisl. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam.
          Donec enim diam vulputate ut pharetra sit. Posuere ac ut consequat semper viverra nam libero. Viverra mauris
          in aliquam sem fringilla ut morbi tincidunt augue. Aliquam eleifend mi in nulla posuere sollicitudin aliquam
          ultrices. Ac placerat vestibulum lectus mauris ultrices.
        </p>
      </div>
  }
}`,...Z.parameters?.docs?.source}}}})))()}export{J as n,$ as r,Z as t};