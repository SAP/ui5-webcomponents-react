import{j as e}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{B as v}from"./BarDesign-BLoXVb05.js";import{B as g}from"./Button-B2giC9cI.js";import{_ as T}from"./iframe-hZ9PAetX.js";import{h as D,f as x,s as P,a as p,m as N,k as F,I as E,w as k}from"./withWebComponent-_WQ2NUTk.js";import{d as b}from"./slot-_4yKMUwC.js";import{s as L}from"./BrowserScrollbar.css-DMtZWp5G.js";import{s as y}from"./style-map-BtPMqoOr.js";import{s as A}from"./parameters-bundle.css-D9P5Os1N.js";import{B as q}from"./index-C6OzWyqs.js";import{B as r}from"./index-BMoHtLal.js";import{L as V}from"./index-DI2hh086.js";function C(t,a,s){return D`<div class="ui5-page-root"><header class="ui5-page-header-root" id="ui5-page-header"><slot name="header"></slot></header><section part="content" class="ui5-page-content-root" style="${y(this.styles.content)}"><slot></slot></section><footer class="ui5-page-footer-root" style="${y(this.styles.footer)}"><slot name="footer"></slot></footer></div>`}x("@ui5/webcomponents-theming","sap_horizon",async()=>P);x("@ui5/webcomponents-fiori","sap_horizon",async()=>A);const M={packageName:"@ui5/webcomponents-fiori",fileName:"themes/Page.css.ts",content:`:host(:not([hidden])){width:100%;height:100%;display:block;container-type:size}.ui5-page-root{height:inherit;overflow:hidden;position:relative;z-index:0;box-sizing:border-box;background-color:inherit}.ui5-page-header-root{z-index:1}.ui5-page-content-root{overflow:hidden auto;position:absolute;will-change:scroll-position;width:100%;top:2.75rem;bottom:0;box-sizing:border-box;font-size:var(--sapFontSize);color:var(--sapTextColor)}.ui5-page-footer-root{box-sizing:border-box;position:absolute;bottom:0;left:0;z-index:2;width:100%}:host(:not([fixed-footer])) .ui5-page-footer-root{opacity:1;bottom:.5rem}@container (max-width: 599px){:host([floating-footer]) .ui5-page-footer-root,.ui5-page-content-root{padding:0 1rem}::slotted([ui5-bar][slot="header"]),::slotted([ui5-bar][design="Footer"]){box-sizing:border-box;padding:0 .25rem}}@container (min-width: 600px) and (max-width: 1023px){:host([floating-footer]) .ui5-page-footer-root,.ui5-page-content-root{padding:0 2rem}::slotted([ui5-bar][slot="header"]),::slotted([ui5-bar][slot="footer"]){box-sizing:border-box;padding:0 1.25rem}}@container (min-width: 1024px) and (max-width: 1439px){:host([floating-footer]) .ui5-page-footer-root,.ui5-page-content-root{padding:0 2rem}::slotted([ui5-bar][slot="header"]),::slotted([ui5-bar][slot="footer"]){box-sizing:border-box;padding:0 1.25rem}}@container (min-width: 1440px){:host([floating-footer]) .ui5-page-footer-root,.ui5-page-content-root{padding:0 3rem}::slotted([ui5-bar][slot="header"]),::slotted([ui5-bar][slot="footer"]){box-sizing:border-box;padding:0 2.25rem}}:host([no-scrolling]) .ui5-page-content-root{overflow:hidden}:host([hide-footer][fixed-footer]) .ui5-page-footer-root{display:none}:host(:not([fixed-footer]):not([hide-footer])) .ui5-page-footer-root{animation:bounceShow .35s forwards ease-in-out}:host(:not([fixed-footer])[hide-footer]) .ui5-page-footer-root{animation:bounceHide .35s forwards ease-in-out}:host([background-design="Solid"]){background-color:var(--sapBackgroundColor)}:host([background-design="Transparent"]){background-color:var(--_ui5-v2-1-2_page_transparent_bg)}:host([background-design="List"]){background-color:var(--_ui5-v2-1-2_page_list_bg)}@keyframes bounceShow{0%{transform:translateY(100%);opacity:0}to{opacity:1}}@keyframes bounceHide{0%{transform:translateY(-5%);opacity:1}to{transform:translateY(100%);opacity:0}}
`};var n=function(t,a,s,d){var c=arguments.length,o=c<3?a:d===null?d=Object.getOwnPropertyDescriptor(a,s):d,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,a,s,d);else for(var h=t.length-1;h>=0;h--)(m=t[h])&&(o=(c<3?m(o):c>3?m(a,s,o):m(a,s))||o);return c>3&&o&&Object.defineProperty(a,s,o),o};let i=class extends E{constructor(){super(...arguments),this.backgroundDesign="Solid",this.noScrolling=!1,this.fixedFooter=!1,this.hideFooter=!1}get _contentBottom(){return this.fixedFooter&&!this.hideFooter?"2.75rem":"0"}get _contentPaddingBottom(){return!this.fixedFooter&&!this.hideFooter?"3.5rem":"0"}get _contentTop(){return this.header.length?"2.75rem":"0rem"}get styles(){return{content:{"padding-bottom":this.footer.length&&this._contentPaddingBottom,bottom:this.footer.length&&this._contentBottom,top:this._contentTop},footer:{}}}};n([p()],i.prototype,"backgroundDesign",void 0);n([p({type:Boolean})],i.prototype,"noScrolling",void 0);n([p({type:Boolean})],i.prototype,"fixedFooter",void 0);n([p({type:Boolean})],i.prototype,"hideFooter",void 0);n([b()],i.prototype,"header",void 0);n([b({type:Node,default:!0})],i.prototype,"content",void 0);n([b()],i.prototype,"footer",void 0);i=n([N({tag:"ui5-page",languageAware:!0,renderer:F,styles:[L,M],template:C})],i);i.define();const I=i,j=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"})),l=k("ui5-page",["backgroundDesign"],["fixedFooter","hideFooter","noScrolling"],["footer","header"],[],()=>T(()=>Promise.resolve().then(()=>j),void 0,import.meta.url));l.displayName="Page";try{l.displayName="Page",l.__docgenInfo={description:`The \`Page\` is a container component that holds one whole screen of an application.
The page has three distinct areas that can hold content - a header, content area and a footer.
### Structure
#### Header
The top most area of the page is occupied by the header. The standard header includes a navigation button and a title.
#### Content
The content occupies the main part of the page. Only the content area is scrollable by default.
This can be prevented by setting  \`enableScrolling\` to \`false\`.
#### Footer
The footer is optional and occupies the part above the bottom part of the content. Alternatively, the footer can be fixed at the bottom of the page by enabling the \`fixedFooter\` property.

**Note:** \`Page\` occipues the whole available space of its parent. In order to achieve the intended design you have to make sure
that there is enough space for the \`Page\` to be rendered.
**Note:** In order for the \`Page\` to be displayed, the parent element should have fixed height.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Page",props:{children:{defaultValue:null,description:"Defines the content HTML Element.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},footer:{defaultValue:null,description:`Defines the footer HTML Element.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="footer"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"footer",required:!1,type:{name:"UI5WCSlotsNode"}},header:{defaultValue:null,description:`Defines the header HTML Element.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},backgroundDesign:{defaultValue:{value:'"Solid"'},description:"Defines the background color of the `Page`.\n\n**Note:** When a ui5-list is placed inside the page, we recommend using “List” to ensure better color contrast.",name:"backgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"List"'},{value:'"Solid"'},{value:'"List"'},{value:'"Solid"'},{value:'"Transparent"'}]}},fixedFooter:{defaultValue:{value:"false"},description:`Defines if the footer is fixed at the very bottom of the page.

**Note:** When set to true the footer is fixed at the very bottom of the page, otherwise it floats over the content with a slight offset from the bottom.`,name:"fixedFooter",required:!1,type:{name:"boolean"}},hideFooter:{defaultValue:{value:"false"},description:"Defines the footer visibility.",name:"hideFooter",required:!1,type:{name:"boolean"}},noScrolling:{defaultValue:{value:"false"},description:`Disables vertical scrolling of page content.
If set to true, there will be no vertical scrolling at all.`,name:"noScrolling",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{l.displayName="Page",l.__docgenInfo={description:`The \`Page\` is a container component that holds one whole screen of an application.
The page has three distinct areas that can hold content - a header, content area and a footer.
### Structure
#### Header
The top most area of the page is occupied by the header. The standard header includes a navigation button and a title.
#### Content
The content occupies the main part of the page. Only the content area is scrollable by default.
This can be prevented by setting  \`enableScrolling\` to \`false\`.
#### Footer
The footer is optional and occupies the part above the bottom part of the content. Alternatively, the footer can be fixed at the bottom of the page by enabling the \`fixedFooter\` property.

**Note:** \`Page\` occipues the whole available space of its parent. In order to achieve the intended design you have to make sure
that there is enough space for the \`Page\` to be rendered.
**Note:** In order for the \`Page\` to be displayed, the parent element should have fixed height.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Page",props:{children:{defaultValue:null,description:"Defines the content HTML Element.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},footer:{defaultValue:null,description:`Defines the footer HTML Element.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="footer"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"footer",required:!1,type:{name:"UI5WCSlotsNode"}},header:{defaultValue:null,description:`Defines the header HTML Element.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},backgroundDesign:{defaultValue:{value:'"Solid"'},description:"Defines the background color of the `Page`.\n\n**Note:** When a ui5-list is placed inside the page, we recommend using “List” to ensure better color contrast.",name:"backgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"List"'},{value:'"Solid"'},{value:'"List"'},{value:'"Solid"'},{value:'"Transparent"'}]}},fixedFooter:{defaultValue:{value:"false"},description:`Defines if the footer is fixed at the very bottom of the page.

**Note:** When set to true the footer is fixed at the very bottom of the page, otherwise it floats over the content with a slight offset from the bottom.`,name:"fixedFooter",required:!1,type:{name:"boolean"}},hideFooter:{defaultValue:{value:"false"},description:"Defines the footer visibility.",name:"hideFooter",required:!1,type:{name:"boolean"}},noScrolling:{defaultValue:{value:"false"},description:`Disables vertical scrolling of page content.
If set to true, there will be no vertical scrolling at all.`,name:"noScrolling",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var f;(function(t){t.List="List",t.Solid="Solid",t.Transparent="Transparent"})(f||(f={}));const z=f,W={title:"Layouts & Floorplans / Page",component:l,args:{backgroundDesign:z.Solid,style:{height:"500px"},header:e.jsx(q,{design:v.Header,startContent:e.jsx(r,{icon:"home",title:"Go Home"}),endContent:e.jsx(r,{icon:"settings",title:"Go to Settings"}),children:e.jsx(V,{children:"Title"})}),footer:e.jsx(q,{design:v.FloatingFooter,startContent:e.jsx(r,{icon:"home",title:"Go Home"}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(r,{design:g.Positive,children:"Accept"}),e.jsx(r,{design:g.Negative,children:"Decline"}),e.jsx(r,{design:g.Transparent,children:"Cancel"})]})})},argTypes:{children:{control:{disable:!0}},footer:{control:{disable:!0}},header:{control:{disable:!0}}},tags:["package:@ui5/webcomponents-fiori"]},u={args:{children:e.jsxs("div",{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa sed elementum tempus egestas sed sed risus pretium. Eget nullam non nisi est sit amet facilisis. Imperdiet dui accumsan sit amet nulla facilisi morbi. Sem viverra aliquet eget sit amet tellus cras adipiscing. Faucibus purus in massa tempor nec. Egestas quis ipsum suspendisse ultrices gravida dictum. Amet facilisis magna etiam tempor. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Ac orci phasellus egestas tellus. Quis imperdiet massa tincidunt nunc. Mollis nunc sed id semper risus in hendrerit gravida rutrum."}),e.jsx("p",{children:"Amet consectetur adipiscing elit duis tristique. Tortor condimentum lacinia quis vel eros. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Sed nisi lacus sed viverra tellus in hac habitasse. Praesent tristique magna sit amet purus gravida quis blandit. Magnis dis parturient montes nascetur ridiculus. Sit amet nulla facilisi morbi tempus iaculis urna id. Senectus et netus et malesuada fames. Faucibus ornare suspendisse sed nisi lacus sed. Facilisis volutpat est velit egestas dui id ornare arcu odio. In tellus integer feugiat scelerisque. Eu turpis egestas pretium aenean pharetra magna. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Ante in nibh mauris cursus mattis. Sagittis vitae et leo duis."}),e.jsx("p",{children:"Sodales ut eu sem integer. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Tellus rutrum tellus pellentesque eu tincidunt tortor. Etiam tempor orci eu lobortis elementum nibh. Velit laoreet id donec ultrices tincidunt arcu non sodales. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Odio ut sem nulla pharetra diam sit amet nisl. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Donec enim diam vulputate ut pharetra sit. Posuere ac ut consequat semper viverra nam libero. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Ac placerat vestibulum lectus mauris ultrices."}),e.jsx("p",{children:"Amet consectetur adipiscing elit duis tristique. Tortor condimentum lacinia quis vel eros. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Sed nisi lacus sed viverra tellus in hac habitasse. Praesent tristique magna sit amet purus gravida quis blandit. Magnis dis parturient montes nascetur ridiculus. Sit amet nulla facilisi morbi tempus iaculis urna id. Senectus et netus et malesuada fames. Faucibus ornare suspendisse sed nisi lacus sed. Facilisis volutpat est velit egestas dui id ornare arcu odio. In tellus integer feugiat scelerisque. Eu turpis egestas pretium aenean pharetra magna. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Ante in nibh mauris cursus mattis. Sagittis vitae et leo duis."}),e.jsx("p",{children:"Sodales ut eu sem integer. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Tellus rutrum tellus pellentesque eu tincidunt tortor. Etiam tempor orci eu lobortis elementum nibh. Velit laoreet id donec ultrices tincidunt arcu non sodales. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Odio ut sem nulla pharetra diam sit amet nisl. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Donec enim diam vulputate ut pharetra sit. Posuere ac ut consequat semper viverra nam libero. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Ac placerat vestibulum lectus mauris ultrices."})]})}};var _,S,w;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(w=(S=u.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const H=["Default"],te=Object.freeze(Object.defineProperty({__proto__:null,Default:u,__namedExportsOrder:H,default:W},Symbol.toStringTag,{value:"Module"}));export{te as C,u as D};
