import{b as h,j as u,p as f,d as m,s as p,m as b,S as w,k as y}from"./jsx-runtime-DJfzgo3Z.js";import{i as g}from"./i18n-oG4QvOAt.js";import{L as v}from"./i18n-defaults-CjsTKlnu.js";import{d as x}from"./parameters-bundle.css-3_Pq1j61.js";function _(){return h("label",{class:"ui5-label-root",onClick:this._onclick,children:[u("span",{class:"ui5-label-text-wrapper",children:u("slot",{})}),u("span",{"aria-hidden":"true",class:"ui5-label-required-colon","data-ui5-colon":this._colonSymbol})]})}f("@ui5/webcomponents-theming","sap_horizon",async()=>m);f("@ui5/webcomponents","sap_horizon",async()=>x);const L=`:host(:not([hidden])){display:inline-flex}:host{max-width:100%;color:var(--sapContent_LabelColor);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;cursor:text}.ui5-label-root{width:100%;cursor:inherit}:host{white-space:normal}:host([wrapping-type="None"]){white-space:nowrap}:host([wrapping-type="None"]) .ui5-label-root{display:inline-flex}:host([wrapping-type="None"]) .ui5-label-text-wrapper{text-overflow:ellipsis;overflow:hidden;display:inline-block;vertical-align:top;flex:0 1 auto;min-width:0}:host([show-colon]) .ui5-label-required-colon:before{content:attr(data-ui5-colon)}:host([required]) .ui5-label-required-colon:after{content:"*";color:var(--sapField_RequiredColor);font-size:var(--sapFontLargeSize);font-weight:700;position:relative;font-style:normal;vertical-align:middle;line-height:0}.ui5-label-text-wrapper{padding-inline-end:.075rem}:host([required][show-colon]) .ui5-label-required-colon:after{margin-inline-start:.125rem}:host([show-colon]) .ui5-label-required-colon{margin-inline-start:-.05rem;white-space:pre}
`;var n=function(r,e,i,l){var a=arguments.length,t=a<3?e:l===null?l=Object.getOwnPropertyDescriptor(e,i):l,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,l);else for(var d=r.length-1;d>=0;d--)(s=r[d])&&(t=(a<3?s(t):a>3?s(e,i,t):s(e,i))||t);return a>3&&t&&Object.defineProperty(e,i,t),t},c;let o=c=class extends w{constructor(){super(...arguments),this.showColon=!1,this.required=!1,this.wrappingType="Normal"}_onclick(){if(!this.for)return;const e=this.getRootNode().querySelector(`[id="${this.for}"]`);e&&e.focus()}get _colonSymbol(){return c.i18nBundle.getText(v)}};n([p()],o.prototype,"for",void 0);n([p({type:Boolean})],o.prototype,"showColon",void 0);n([p({type:Boolean})],o.prototype,"required",void 0);n([p()],o.prototype,"wrappingType",void 0);n([g("@ui5/webcomponents")],o,"i18nBundle",void 0);o=c=n([b({tag:"ui5-label",renderer:y,template:_,styles:L,languageAware:!0})],o);o.define();const B=o;export{B as L};
