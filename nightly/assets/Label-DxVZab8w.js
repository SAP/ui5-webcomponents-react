import{c as f,j as d,p as h,d as m,s as p,m as b,I as w,e as y}from"./withWebComponent-CT6sGXpP.js";import{i as g}from"./i18n-DEVDpFvK.js";import{L as v}from"./i18n-defaults-Do22Zz-4.js";import{d as x}from"./parameters-bundle.css-BzaqQttB.js";function _(){return f("label",{class:"ui5-label-root",onClick:this._onclick,children:[d("span",{class:"ui5-label-text-wrapper",children:d("slot",{})}),d("span",{"aria-hidden":"true",class:"ui5-label-required-colon","data-ui5-colon":this._colonSymbol})]})}h("@ui5/webcomponents-theming","sap_horizon",async()=>m);h("@ui5/webcomponents","sap_horizon",async()=>x);const q=`:host(:not([hidden])){display:inline-flex}:host{max-width:100%;color:var(--sapContent_LabelColor);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;cursor:text}.ui5-label-root{width:100%;cursor:inherit}:host{white-space:normal}:host([wrapping-type="None"]){white-space:nowrap}:host([wrapping-type="None"]) .ui5-label-root{display:inline-flex}:host([wrapping-type="None"]) .ui5-label-text-wrapper{text-overflow:ellipsis;overflow:hidden;display:inline-block;vertical-align:top;flex:0 1 auto;min-width:0}:host([show-colon]) .ui5-label-required-colon:before{content:attr(data-ui5-colon)}:host([required]) .ui5-label-required-colon:after{content:"*";color:var(--sapField_RequiredColor);font-size:1.25rem;font-weight:700;position:relative;font-style:normal;vertical-align:middle;line-height:0}.ui5-label-text-wrapper{padding-inline-end:.075rem}:host([required][show-colon]) .ui5-label-required-colon:after{margin-inline-start:.125rem}:host([show-colon]) .ui5-label-required-colon{margin-inline-start:-.05rem;white-space:pre}
`;var i=function(r,e,n,l){var a=arguments.length,t=a<3?e:l===null?l=Object.getOwnPropertyDescriptor(e,n):l,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,l);else for(var c=r.length-1;c>=0;c--)(s=r[c])&&(t=(a<3?s(t):a>3?s(e,n,t):s(e,n))||t);return a>3&&t&&Object.defineProperty(e,n,t),t},u;let o=u=class extends w{constructor(){super(...arguments),this.showColon=!1,this.required=!1,this.wrappingType="Normal"}_onclick(){if(!this.for)return;const e=this.getRootNode().querySelector(`[id="${this.for}"]`);e&&e.focus()}get _colonSymbol(){return u.i18nBundle.getText(v)}};i([p()],o.prototype,"for",void 0);i([p({type:Boolean})],o.prototype,"showColon",void 0);i([p({type:Boolean})],o.prototype,"required",void 0);i([p()],o.prototype,"wrappingType",void 0);i([g("@ui5/webcomponents")],o,"i18nBundle",void 0);o=u=i([b({tag:"ui5-label",renderer:y,template:_,styles:q,languageAware:!0})],o);o.define();const N=o;export{N as L};
