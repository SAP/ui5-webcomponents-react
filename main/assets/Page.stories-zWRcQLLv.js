import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{_ as E}from"./iframe-jYR4I4MD.js";import{r as D,U as P}from"./UI5Element-_cJDeK03.js";import{b as F,s as M,p as l,d as A,g as L,w as j}from"./withWebComponent-UxvJwa3A.js";import{s as b}from"./slot-HSrR9XJ-.js";import{R as v}from"./ResizeHandler-xTi6PJ7P.js";import{M as q}from"./MediaRange-sEMt71Ve.js";import{s as N}from"./BrowserScrollbar.css-piSU4CQM.js";import{P as f}from"./PageBackgroundDesign-CpulD27W.js";import{s as y}from"./style-map-21pwAbrQ.js";import{s as R}from"./parameters-bundle.css-jS5Rgmp1.js";import{B as S,a as _}from"./index-0aUMUPVq.js";import{B as r}from"./index-Mc-QwGUl.js";import{L as k}from"./index-_DtB95iI.js";import{B as h}from"./Button-kjIKsCqk.js";function z(n,o,s){return F`<div class="ui5-page-root"><header class="ui5-page-header-root" id="ui5-page-header"><slot name="header"></slot></header><section part="content" class="ui5-page-content-root" style="${y(this.styles.content)}"><slot></slot></section><footer class="ui5-page-footer-root" style="${y(this.styles.footer)}"><slot name="footer"></slot></footer></div>`}D("@ui5/webcomponents-theming","sap_horizon",async()=>M);D("@ui5/webcomponents-fiori","sap_horizon",async()=>R);const C={packageName:"@ui5/webcomponents-fiori",fileName:"themes/Page.css.ts",content:`:host(:not([hidden])){width:100%;height:100%;display:block}.ui5-page-root{height:inherit;overflow:hidden;position:relative;z-index:0;box-sizing:border-box;background-color:inherit}.ui5-page-header-root{z-index:1}.ui5-page-content-root{overflow:hidden auto;position:absolute;will-change:scroll-position;width:100%;top:2.75rem;bottom:0;box-sizing:border-box;font-size:var(--sapFontSize);color:var(--sapTextColor)}.ui5-page-footer-root{box-sizing:border-box;position:absolute;bottom:0;left:0;z-index:2;width:100%}:host([floating-footer]) .ui5-page-footer-root{opacity:1;bottom:.5rem}:host([media-range="S"]) .ui5-page-content-root,:host([media-range="S"][floating-footer]) .ui5-page-footer-root{padding:0 1rem}:host([media-range="S"]) ::slotted([ui5-bar][slot="header"]){box-sizing:border-box;padding:0 .25rem}:host([media-range="S"]) ::slotted([ui5-bar][design="Footer"]){box-sizing:border-box;padding:0 .25rem}:host([media-range="M"]) .ui5-page-content-root,:host([media-range="L"]) .ui5-page-content-root,:host([media-range="M"][floating-footer]) .ui5-page-footer-root,:host([media-range="L"][floating-footer]) .ui5-page-footer-root{padding:0 2rem}:host([media-range="M"]) ::slotted([ui5-bar][slot="header"]),:host([media-range="L"]) ::slotted([ui5-bar][slot="header"]){box-sizing:border-box;padding:0 1.25rem}:host([media-range="M"]) ::slotted([ui5-bar][design="Footer"]),:host([media-range="L"]) ::slotted([ui5-bar][design="Footer"]){box-sizing:border-box;padding:0 1.25rem}:host([media-range="XL"]) .ui5-page-content-root,:host([media-range="XL"][floating-footer]) .ui5-page-footer-root{padding:0 3rem}:host([media-range="XL"]) ::slotted([ui5-bar][slot="header"]){box-sizing:border-box;padding:0 2.25rem}:host([media-range="XL"]) ::slotted([ui5-bar][design="Footer"]){box-sizing:border-box;padding:0 2.25rem}:host([disable-scrolling]) .ui5-page-content-root{overflow:hidden}:host([hide-footer]:not([floating-footer])) .ui5-page-footer-root{display:none}:host([floating-footer]:not([hide-footer])) .ui5-page-footer-root{animation:bounceShow .35s forwards ease-in-out}:host([floating-footer][hide-footer]) .ui5-page-footer-root{animation:bounceHide .35s forwards ease-in-out}:host([background-design="Solid"]){background-color:var(--sapBackgroundColor)}:host([background-design="Transparent"]){background-color:var(--_ui5-v1-22-0-rc-3_page_transparent_bg)}:host([background-design="List"]){background-color:var(--_ui5-v1-22-0-rc-3_page_list_bg)}@keyframes bounceShow{0%{transform:translateY(100%);opacity:0}to{opacity:1}}@keyframes bounceHide{0%{transform:translateY(-5%);opacity:1}to{transform:translateY(100%);opacity:0}}
`};var i=function(n,o,s,d){var m=arguments.length,a=m<3?o:d===null?d=Object.getOwnPropertyDescriptor(o,s):d,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(n,o,s,d);else for(var g=n.length-1;g>=0;g--)(c=n[g])&&(a=(m<3?c(a):m>3?c(o,s,a):c(o,s))||a);return m>3&&a&&Object.defineProperty(o,s,a),a};let t=class extends P{constructor(){super(),this._updateMediaRange=this.updateMediaRange.bind(this)}onEnterDOM(){v.register(this,this._updateMediaRange)}onExitDOM(){v.deregister(this,this._updateMediaRange)}updateMediaRange(){this.mediaRange=q.getCurrentRange(q.RANGESETS.RANGE_4STEPS,this.getDomRef().offsetWidth)}get _contentBottom(){return!this.floatingFooter&&!this.hideFooter?"2.75rem":"0"}get _contentPaddingBottom(){return this.floatingFooter&&!this.hideFooter?"3.5rem":"0"}get _contentTop(){return this.header.length?"2.75rem":"0rem"}get styles(){return{content:{"padding-bottom":this.footer.length&&this._contentPaddingBottom,bottom:this.footer.length&&this._contentBottom,top:this._contentTop},footer:{}}}};i([l({type:f,defaultValue:f.Solid})],t.prototype,"backgroundDesign",void 0);i([l({type:Boolean})],t.prototype,"disableScrolling",void 0);i([l({type:Boolean})],t.prototype,"floatingFooter",void 0);i([l({type:Boolean})],t.prototype,"hideFooter",void 0);i([l()],t.prototype,"mediaRange",void 0);i([b()],t.prototype,"header",void 0);i([b({type:HTMLElement,default:!0})],t.prototype,"content",void 0);i([b()],t.prototype,"footer",void 0);t=i([A({tag:"ui5-page",languageAware:!0,renderer:L,styles:[N,C],template:z})],t);t.define();const V=t,I=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"})),p=j("ui5-page",["backgroundDesign"],["disableScrolling","floatingFooter","hideFooter"],["footer","header"],[],()=>E(()=>Promise.resolve().then(()=>I),void 0,import.meta.url));p.displayName="Page";try{p.displayName="Page",p.__docgenInfo={description:`The \`Page\` is a container component that holds one whole screen of an application. The page has three distinct areas that can hold content - a header, content area and a footer.

### Structure

#### Header

The top most area of the page is occupied by the header. The standard header includes a navigation button and a title.

#### Content

The content occupies the main part of the page. Only the content area is scrollable by default. This can be prevented by setting \`enableScrolling\` to \`false\`.

#### Footer

The footer is optional and occupies the fixed bottom part of the page. Alternatively, the footer can be floating above the bottom part of the content. This is enabled with the \`floatingFooter\` property. **Note:** \`Page\` occipues the whole available space of its parent. In order to achieve the intended design you have to make sure that there is enough space for the \`Page\` to be rendered. **Note:** In order for the \`Page\` to be displayed, the parent element should have fixed height.

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"Page",props:{children:{defaultValue:null,description:"Defines the content HTML Element.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},footer:{defaultValue:null,description:`Defines the footer HTML Element.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="footer"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"footer",required:!1,type:{name:"UI5WCSlotsNode"}},header:{defaultValue:null,description:`Defines the header HTML Element.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},backgroundDesign:{defaultValue:{value:'"Solid"'},description:"Defines the background color of the `Page`.\n\n**Note:** When a ui5-list is placed inside the page, we recommend using “List” to ensure better color contrast.",name:"backgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"List"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"List"'},{value:'"Solid"'}]}},disableScrolling:{defaultValue:{value:"false"},description:"Disables vertical scrolling of page content. If set to true, there will be no vertical scrolling at all.",name:"disableScrolling",required:!1,type:{name:"boolean"}},floatingFooter:{defaultValue:{value:"true"},description:`Defines if the footer should float over the content.

**Note:** When set to true the footer floats over the content with a slight offset from the bottom, otherwise it is fixed at the very bottom of the page.`,name:"floatingFooter",required:!1,type:{name:"boolean"}},hideFooter:{defaultValue:{value:"false"},description:"Defines the footer visibility.",name:"hideFooter",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const O={title:"Layouts & Floorplans / Page",component:p,args:{backgroundDesign:f.Solid,style:{height:"500px"},header:e.jsx(S,{design:_.Header,startContent:e.jsx(r,{icon:"home",title:"Go Home"}),endContent:e.jsx(r,{icon:"settings",title:"Go to Settings"}),children:e.jsx(k,{children:"Title"})}),footer:e.jsx(S,{design:_.FloatingFooter,startContent:e.jsx(r,{icon:"home",title:"Go Home"}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(r,{design:h.Positive,children:"Accept"}),e.jsx(r,{design:h.Negative,children:"Decline"}),e.jsx(r,{design:h.Transparent,children:"Cancel"})]})})},argTypes:{children:{control:{disable:!0}},footer:{control:{disable:!0}},header:{control:{disable:!0}}}},u={args:{children:e.jsxs("div",{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa sed elementum tempus egestas sed sed risus pretium. Eget nullam non nisi est sit amet facilisis. Imperdiet dui accumsan sit amet nulla facilisi morbi. Sem viverra aliquet eget sit amet tellus cras adipiscing. Faucibus purus in massa tempor nec. Egestas quis ipsum suspendisse ultrices gravida dictum. Amet facilisis magna etiam tempor. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Ac orci phasellus egestas tellus. Quis imperdiet massa tincidunt nunc. Mollis nunc sed id semper risus in hendrerit gravida rutrum."}),e.jsx("p",{children:"Amet consectetur adipiscing elit duis tristique. Tortor condimentum lacinia quis vel eros. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Sed nisi lacus sed viverra tellus in hac habitasse. Praesent tristique magna sit amet purus gravida quis blandit. Magnis dis parturient montes nascetur ridiculus. Sit amet nulla facilisi morbi tempus iaculis urna id. Senectus et netus et malesuada fames. Faucibus ornare suspendisse sed nisi lacus sed. Facilisis volutpat est velit egestas dui id ornare arcu odio. In tellus integer feugiat scelerisque. Eu turpis egestas pretium aenean pharetra magna. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Ante in nibh mauris cursus mattis. Sagittis vitae et leo duis."}),e.jsx("p",{children:"Sodales ut eu sem integer. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Tellus rutrum tellus pellentesque eu tincidunt tortor. Etiam tempor orci eu lobortis elementum nibh. Velit laoreet id donec ultrices tincidunt arcu non sodales. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Odio ut sem nulla pharetra diam sit amet nisl. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Donec enim diam vulputate ut pharetra sit. Posuere ac ut consequat semper viverra nam libero. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Ac placerat vestibulum lectus mauris ultrices."}),e.jsx("p",{children:"Amet consectetur adipiscing elit duis tristique. Tortor condimentum lacinia quis vel eros. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Sed nisi lacus sed viverra tellus in hac habitasse. Praesent tristique magna sit amet purus gravida quis blandit. Magnis dis parturient montes nascetur ridiculus. Sit amet nulla facilisi morbi tempus iaculis urna id. Senectus et netus et malesuada fames. Faucibus ornare suspendisse sed nisi lacus sed. Facilisis volutpat est velit egestas dui id ornare arcu odio. In tellus integer feugiat scelerisque. Eu turpis egestas pretium aenean pharetra magna. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Ante in nibh mauris cursus mattis. Sagittis vitae et leo duis."}),e.jsx("p",{children:"Sodales ut eu sem integer. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Tellus rutrum tellus pellentesque eu tincidunt tortor. Etiam tempor orci eu lobortis elementum nibh. Velit laoreet id donec ultrices tincidunt arcu non sodales. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Odio ut sem nulla pharetra diam sit amet nisl. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Donec enim diam vulputate ut pharetra sit. Posuere ac ut consequat semper viverra nam libero. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Ac placerat vestibulum lectus mauris ultrices."})]})}};var w,x,T;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(T=(x=u.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};const B=["Default"],ne=Object.freeze(Object.defineProperty({__proto__:null,Default:u,__namedExportsOrder:B,default:O},Symbol.toStringTag,{value:"Module"}));export{ne as C,u as D};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
