import{r as f,U as h}from"./UI5Element-_cJDeK03.js";import{b,l as u,s as y,a as w,p as c,d as g,g as v}from"./withWebComponent-UxvJwa3A.js";import{d as _}from"./i18nBundle-YDapVb1x.js";import{W as m}from"./WrappingType-avPrqc94.js";import{L as x}from"./i18n-defaults-IIWnNm9Y.js";import"./VersionInfo-AzzP9wS2.js";import"./CustomElementsScopeUtils-IpwVqUeG.js";import"./utils-rNFQc6Ui.js";import"./index-OjgoNOWw.js";import"./jsx-runtime-DtaoT6pD.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";function L(r,e,i){return b`<label class="ui5-label-root" @click=${this._onclick}><span class="ui5-label-text-wrapper"><bdi id="${u(this._id)}-bdi"><slot></slot></bdi></span><span aria-hidden="true" class="ui5-label-required-colon" data-colon="${u(this._colonSymbol)}"></span></label>`}f("@ui5/webcomponents-theming","sap_horizon",async()=>y);f("@ui5/webcomponents","sap_horizon",async()=>w);const q={packageName:"@ui5/webcomponents",fileName:"themes/Label.css.ts",content:`:host(:not([hidden])){display:inline-flex}:host{max-width:100%;color:var(--sapContent_LabelColor);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;cursor:text}.ui5-label-root{width:100%;cursor:inherit}:host([wrapping-type="Normal"]) .ui5-label-root{white-space:normal}:host(:not([wrapping-type="Normal"])) .ui5-label-root{display:inline-flex;white-space:nowrap}:host(:not([wrapping-type="Normal"])) .ui5-label-text-wrapper{text-overflow:ellipsis;overflow:hidden;display:inline-block;vertical-align:top;flex:0 1 auto;min-width:0}:host([show-colon]) .ui5-label-required-colon:before{content:attr(data-colon)}:host([required]) .ui5-label-required-colon:after{content:"*";color:var(--sapField_RequiredColor);font-size:1.25rem;font-weight:700;position:relative;font-style:normal;vertical-align:middle;line-height:0}:host([required][show-colon]) .ui5-label-required-colon:after{margin-inline-start:.125rem}bdi{padding-right:.075rem}:host([show-colon]) .ui5-label-required-colon{margin-inline-start:-.05rem;white-space:pre}
`};var l=function(r,e,i,n){var a=arguments.length,o=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,e,i,n);else for(var d=r.length-1;d>=0;d--)(s=r[d])&&(o=(a<3?s(o):a>3?s(e,i,o):s(e,i))||o);return a>3&&o&&Object.defineProperty(e,i,o),o},p;let t=p=class extends h{static async onDefine(){p.i18nBundle=await _("@ui5/webcomponents")}_onclick(){if(!this.for)return;const e=this.getRootNode().querySelector(`[id="${this.for}"]`);e&&e.focus()}get _colonSymbol(){return p.i18nBundle.getText(x)}};l([c()],t.prototype,"for",void 0);l([c({type:Boolean})],t.prototype,"showColon",void 0);l([c({type:Boolean})],t.prototype,"required",void 0);l([c({type:m,defaultValue:m.None})],t.prototype,"wrappingType",void 0);t=p=l([g({tag:"ui5-label",renderer:v,template:L,styles:q,languageAware:!0})],t);t.define();const E=t;export{E as default};
