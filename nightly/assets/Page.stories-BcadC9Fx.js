import{j as e}from"./jsx-runtime-CLpGMVip.js";import{B as v}from"./BarDesign-BLoXVb05.js";import{B as h}from"./Button-Bn6Q5CAy.js";import{c as w,j as o,p as y,d as j,s as p,m as A,e as P,I as T,y as E,w as B}from"./withWebComponent-DfVDXLfc.js";import{a as z}from"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import{d as b}from"./slot-_4yKMUwC.js";import{d as D}from"./AnimationMode-BEEENtVa.js";import{d as k}from"./useIsomorphicLayoutEffect-Clyi7m9u.js";import{d as I}from"./parameters-bundle.css-lWn4zk3B.js";import{B as q}from"./index-CnpffF2n.js";import{B as u}from"./index-DaCk7tY-.js";import{L as O}from"./index-DVZh2p7o.js";function C(){return w("div",{class:"ui5-page-root",children:[o("header",{id:"ui5-page-header",class:"ui5-page-header-root",children:o("slot",{name:"header"})}),o("section",{part:"content",class:"ui5-page-content-root",style:{"padding-bottom":this.footer.length&&this._contentPaddingBottom,"scroll-padding-bottom":this.footer.length&&this._contentPaddingBottom,bottom:this.footer.length&&this._contentBottom,top:this._contentTop},children:o("slot",{})}),o("footer",{class:"ui5-page-footer-root",children:o("slot",{name:"footer"})})]})}y("@ui5/webcomponents-theming","sap_horizon",async()=>j);y("@ui5/webcomponents-fiori","sap_horizon",async()=>I);const L=`:host(:not([hidden])){width:100%;height:100%;display:block;container-type:size}.ui5-page-root{height:inherit;overflow:hidden;position:relative;z-index:0;box-sizing:border-box;background-color:inherit}.ui5-page-header-root{z-index:1}.ui5-page-content-root{overflow:hidden auto;position:absolute;will-change:scroll-position;width:100%;top:2.75rem;bottom:0;box-sizing:border-box;font-size:var(--sapFontSize);color:var(--sapTextColor)}.ui5-page-footer-root{box-sizing:border-box;position:absolute;bottom:0;left:0;z-index:2;width:100%}:host(:not([fixed-footer])) .ui5-page-footer-root{opacity:1;bottom:.5rem}::slotted([ui5-bar][design="FloatingFooter"]){margin:auto;padding:0}@container (max-width: 599px){:host([floating-footer]) .ui5-page-footer-root,.ui5-page-content-root{padding:0 1rem}::slotted([ui5-bar][slot="header"]),::slotted([ui5-bar][design="Footer"]){box-sizing:border-box;padding:0 .25rem}::slotted([ui5-bar][design="FloatingFooter"]){width:calc(100% - .5rem)}}@container (min-width: 600px) and (max-width: 1023px){:host([floating-footer]) .ui5-page-footer-root,.ui5-page-content-root{padding:0 2rem}::slotted([ui5-bar][slot="header"]),::slotted([ui5-bar][slot="footer"]){box-sizing:border-box;padding:0 1.25rem}::slotted([ui5-bar][design="FloatingFooter"]){width:calc(100% - 2.5rem)}}@container (min-width: 1024px) and (max-width: 1439px){:host([floating-footer]) .ui5-page-footer-root,.ui5-page-content-root{padding:0 2rem}::slotted([ui5-bar][slot="header"]),::slotted([ui5-bar][slot="footer"]){box-sizing:border-box;padding:0 1.25rem}::slotted([ui5-bar][design="FloatingFooter"]){width:calc(100% - 2.5rem)}}@container (min-width: 1440px){:host([floating-footer]) .ui5-page-footer-root,.ui5-page-content-root{padding:0 3rem}::slotted([ui5-bar][slot="header"]),::slotted([ui5-bar][slot="footer"]){box-sizing:border-box;padding:0 2.25rem}::slotted([ui5-bar][design="FloatingFooter"]){width:calc(100% - 4.5rem)}}:host([no-scrolling]) .ui5-page-content-root{overflow:hidden}:host([hide-footer][fixed-footer]) .ui5-page-footer-root{display:none}:host(:not([fixed-footer]):not([hide-footer])) .ui5-page-footer-root{animation:bounceShow var(--_ui5-v2-6-2-page-animation-duration) forwards ease-in-out}:host(:not([fixed-footer])[hide-footer]) .ui5-page-footer-root{animation:bounceHide var(--_ui5-v2-6-2-page-animation-duration) forwards ease-in-out}:host([background-design="Solid"]){background-color:var(--sapBackgroundColor)}:host([background-design="Transparent"]){background-color:var(--_ui5-v2-6-2_page_transparent_bg)}:host([background-design="List"]){background-color:var(--_ui5-v2-6-2_page_list_bg)}@keyframes bounceShow{0%{transform:translateY(100%);opacity:0}to{opacity:1}}@keyframes bounceHide{0%{transform:translateY(-5%);opacity:1}to{transform:translateY(100%);opacity:0}}
`;var a=function(t,n,r,d){var m=arguments.length,s=m<3?n:d===null?d=Object.getOwnPropertyDescriptor(n,r):d,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,n,r,d);else for(var g=t.length-1;g>=0;g--)(c=t[g])&&(s=(m<3?c(s):m>3?c(n,r,s):c(n,r))||s);return m>3&&s&&Object.defineProperty(n,r,s),s};let i=class extends T{constructor(){super(),this.backgroundDesign="Solid",this.noScrolling=!1,this.fixedFooter=!1,this.hideFooter=!1}onEnterDOM(){this.style.setProperty(k("--_ui5-page-animation-duration"),D()===E.None?"0s":"0.35s")}get _contentBottom(){return this.fixedFooter&&!this.hideFooter?"2.75rem":"0"}get _contentPaddingBottom(){return!this.fixedFooter&&!this.hideFooter?"3.5rem":"0"}get _contentTop(){return this.header.length?"2.75rem":"0rem"}get styles(){return{content:{"padding-bottom":this.footer.length&&this._contentPaddingBottom,"scroll-padding-bottom":this.footer.length&&this._contentPaddingBottom,bottom:this.footer.length&&this._contentBottom,top:this._contentTop}}}};a([p()],i.prototype,"backgroundDesign",void 0);a([p({type:Boolean})],i.prototype,"noScrolling",void 0);a([p({type:Boolean})],i.prototype,"fixedFooter",void 0);a([p({type:Boolean})],i.prototype,"hideFooter",void 0);a([b()],i.prototype,"header",void 0);a([b({type:Node,default:!0})],i.prototype,"content",void 0);a([b()],i.prototype,"footer",void 0);i=a([A({tag:"ui5-page",languageAware:!0,renderer:P,styles:[L,z()],template:C})],i);i.define();const _=B("ui5-page",["backgroundDesign"],["fixedFooter","hideFooter","noScrolling"],["footer","header"],[]);_.displayName="Page";var f;(function(t){t.List="List",t.Solid="Solid",t.Transparent="Transparent"})(f||(f={}));const M=f,V={title:"Layouts & Floorplans / Page",component:_,args:{backgroundDesign:M.Solid,style:{height:"500px"},header:e.jsx(q,{design:v.Header,startContent:e.jsx(u,{icon:"home",title:"Go Home",accessibleName:"Home"}),endContent:e.jsx(u,{icon:"settings",title:"Go to Settings",accessibleName:"Settings"}),children:e.jsx(O,{children:"Title"})}),footer:e.jsx("div",{children:e.jsx(q,{design:v.FloatingFooter,endContent:e.jsxs(e.Fragment,{children:[e.jsx(u,{design:h.Positive,children:"Accept"}),e.jsx(u,{design:h.Negative,children:"Decline"}),e.jsx(u,{design:h.Transparent,children:"Cancel"})]})})})},argTypes:{children:{control:{disable:!0}},footer:{control:{disable:!0}},header:{control:{disable:!0}}},tags:["package:@ui5/webcomponents-fiori"]},l={args:{children:e.jsxs("div",{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa sed elementum tempus egestas sed sed risus pretium. Eget nullam non nisi est sit amet facilisis. Imperdiet dui accumsan sit amet nulla facilisi morbi. Sem viverra aliquet eget sit amet tellus cras adipiscing. Faucibus purus in massa tempor nec. Egestas quis ipsum suspendisse ultrices gravida dictum. Amet facilisis magna etiam tempor. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Ac orci phasellus egestas tellus. Quis imperdiet massa tincidunt nunc. Mollis nunc sed id semper risus in hendrerit gravida rutrum."}),e.jsx("p",{children:"Amet consectetur adipiscing elit duis tristique. Tortor condimentum lacinia quis vel eros. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Sed nisi lacus sed viverra tellus in hac habitasse. Praesent tristique magna sit amet purus gravida quis blandit. Magnis dis parturient montes nascetur ridiculus. Sit amet nulla facilisi morbi tempus iaculis urna id. Senectus et netus et malesuada fames. Faucibus ornare suspendisse sed nisi lacus sed. Facilisis volutpat est velit egestas dui id ornare arcu odio. In tellus integer feugiat scelerisque. Eu turpis egestas pretium aenean pharetra magna. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Ante in nibh mauris cursus mattis. Sagittis vitae et leo duis."}),e.jsx("p",{children:"Sodales ut eu sem integer. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Tellus rutrum tellus pellentesque eu tincidunt tortor. Etiam tempor orci eu lobortis elementum nibh. Velit laoreet id donec ultrices tincidunt arcu non sodales. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Odio ut sem nulla pharetra diam sit amet nisl. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Donec enim diam vulputate ut pharetra sit. Posuere ac ut consequat semper viverra nam libero. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Ac placerat vestibulum lectus mauris ultrices."}),e.jsx("p",{children:"Amet consectetur adipiscing elit duis tristique. Tortor condimentum lacinia quis vel eros. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Sed nisi lacus sed viverra tellus in hac habitasse. Praesent tristique magna sit amet purus gravida quis blandit. Magnis dis parturient montes nascetur ridiculus. Sit amet nulla facilisi morbi tempus iaculis urna id. Senectus et netus et malesuada fames. Faucibus ornare suspendisse sed nisi lacus sed. Facilisis volutpat est velit egestas dui id ornare arcu odio. In tellus integer feugiat scelerisque. Eu turpis egestas pretium aenean pharetra magna. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Ante in nibh mauris cursus mattis. Sagittis vitae et leo duis."}),e.jsx("p",{children:"Sodales ut eu sem integer. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Tellus rutrum tellus pellentesque eu tincidunt tortor. Etiam tempor orci eu lobortis elementum nibh. Velit laoreet id donec ultrices tincidunt arcu non sodales. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Odio ut sem nulla pharetra diam sit amet nisl. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Donec enim diam vulputate ut pharetra sit. Posuere ac ut consequat semper viverra nam libero. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Ac placerat vestibulum lectus mauris ultrices."})]})}};var x,S,F;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(F=(S=l.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const N=["Default"],ie=Object.freeze(Object.defineProperty({__proto__:null,Default:l,__namedExportsOrder:N,default:V},Symbol.toStringTag,{value:"Module"}));export{ie as C,l as D};
