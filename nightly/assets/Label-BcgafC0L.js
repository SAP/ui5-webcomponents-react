import{h as d,f,s as h,a as c,m,I as b,k as w}from"./withWebComponent-CPW0iYAf.js";import{f as y}from"./i18nBundle-shm5Q6c6.js";import{L as g}from"./i18n-defaults-DRoh8QZU.js";import{l as v}from"./if-defined-BCPYWAh1.js";import{s as x}from"./parameters-bundle.css-DJWIHzS2.js";import"./utils-B4B9qFe5.js";import"./index-ClU-Tc1p.js";import"./useIsomorphicLayoutEffect-BDy32gDd.js";function _(n,e,i){return d`<label class="ui5-label-root" @click=${this._onclick}><span class="ui5-label-text-wrapper"><slot></slot></span><span aria-hidden="true" class="ui5-label-required-colon" data-colon="${v(this._colonSymbol)}"></span></label>`}f("@ui5/webcomponents-theming","sap_horizon",async()=>h);f("@ui5/webcomponents","sap_horizon",async()=>x);const q={packageName:"@ui5/webcomponents",fileName:"themes/Label.css.ts",content:`:host(:not([hidden])){display:inline-flex}:host{max-width:100%;color:var(--sapContent_LabelColor);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;cursor:text}.ui5-label-root{width:100%;cursor:inherit}:host{white-space:normal}:host([wrapping-type="None"]){white-space:nowrap}:host([wrapping-type="None"]) .ui5-label-root{display:inline-flex}:host([wrapping-type="None"]) .ui5-label-text-wrapper{text-overflow:ellipsis;overflow:hidden;display:inline-block;vertical-align:top;flex:0 1 auto;min-width:0}:host([show-colon]) .ui5-label-required-colon:before{content:attr(data-colon)}:host([required]) .ui5-label-required-colon:after{content:"*";color:var(--sapField_RequiredColor);font-size:1.25rem;font-weight:700;position:relative;font-style:normal;vertical-align:middle;line-height:0}.ui5-label-text-wrapper{padding-inline-end:.075rem}:host([required][show-colon]) .ui5-label-required-colon:after{margin-inline-start:.125rem}:host([show-colon]) .ui5-label-required-colon{margin-inline-start:-.05rem;white-space:pre}
`};var l=function(n,e,i,r){var a=arguments.length,o=a<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,i,r);else for(var u=n.length-1;u>=0;u--)(s=n[u])&&(o=(a<3?s(o):a>3?s(e,i,o):s(e,i))||o);return a>3&&o&&Object.defineProperty(e,i,o),o},p;let t=p=class extends b{constructor(){super(...arguments),this.showColon=!1,this.required=!1,this.wrappingType="Normal"}static async onDefine(){p.i18nBundle=await y("@ui5/webcomponents")}_onclick(){if(!this.for)return;const e=this.getRootNode().querySelector(`[id="${this.for}"]`);e&&e.focus()}get _colonSymbol(){return p.i18nBundle.getText(g)}};l([c()],t.prototype,"for",void 0);l([c({type:Boolean})],t.prototype,"showColon",void 0);l([c({type:Boolean})],t.prototype,"required",void 0);l([c()],t.prototype,"wrappingType",void 0);t=p=l([m({tag:"ui5-label",renderer:w,template:_,styles:q,languageAware:!0})],t);t.define();const R=t;export{R as default};
