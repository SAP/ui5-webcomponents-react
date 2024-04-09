import{U as g}from"./UI5Element-DtnZiShc.js";import{a as s,l as o,b as h,s as x,p as u,c as w,f as B}from"./withWebComponent-DRPzk8yN.js";import{b as $}from"./i18nBundle-CW3QmvUh.js";import{k as z}from"./Keys-BgUkNma0.js";import{I}from"./Integer-Dh6YzFpK.js";import T from"./Label-BgNHvv84.js";import{o as k}from"./class-map-DOxVO0GK.js";import{H as E}from"./i18n-defaults-ByZSnYVg.js";import{r as v}from"./Boot-DwA_pgKp.js";import{s as L}from"./parameters-bundle.css-DjgCrOcY.js";var p;(function(i){i.Small="Small",i.Medium="Medium",i.Large="Large"})(p||(p={}));const _=p;var f;(function(i){i.Top="Top",i.Bottom="Bottom"})(f||(f={}));const b=f;function P(i,t,e){return s`<div class="${k(this.classes.root)}">${this._isBusy?M.call(this,i,t,e):void 0}<slot></slot>${this._isBusy?O.call(this,i,t,e):void 0}</div> `}function M(i,t,e){return s`<div class="ui5-busy-indicator-busy-area" title="${o(this.ariaTitle)}" tabindex="0" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Busy" aria-labelledby="${o(this.labelId)}" data-sap-focus-ref>${this.textPosition.top?S.call(this,i,t,e):void 0}<div class="ui5-busy-indicator-circles-wrapper"><div class="ui5-busy-indicator-circle circle-animation-0"></div><div class="ui5-busy-indicator-circle circle-animation-1"></div><div class="ui5-busy-indicator-circle circle-animation-2"></div></div>${this.textPosition.bottom?H.call(this,i,t,e):void 0}</div>`}function S(i,t,e){return s`${this.text?D.call(this,i,t,e):void 0}`}function D(i,t,e){return e?s`<${h("ui5-label",t,e)} id="${o(this._id)}-label" class="ui5-busy-indicator-text" wrapping-type="Normal">${o(this.text)}</${h("ui5-label",t,e)}>`:s`<ui5-label id="${o(this._id)}-label" class="ui5-busy-indicator-text" wrapping-type="Normal">${o(this.text)}</ui5-label>`}function H(i,t,e){return s`${this.text?N.call(this,i,t,e):void 0}`}function N(i,t,e){return e?s`<${h("ui5-label",t,e)} id="${o(this._id)}-label" class="ui5-busy-indicator-text" wrapping-type="Normal">${o(this.text)}</${h("ui5-label",t,e)}>`:s`<ui5-label id="${o(this._id)}-label" class="ui5-busy-indicator-text" wrapping-type="Normal">${o(this.text)}</ui5-label>`}function O(i,t,e){return s`<span data-ui5-focus-redirect tabindex="0" @focusin="${this._redirectFocus}"></span>`}v("@ui5/webcomponents-theming","sap_horizon",async()=>x);v("@ui5/webcomponents","sap_horizon",async()=>L);const R={packageName:"@ui5/webcomponents",fileName:"themes/BusyIndicator.css.ts",content:`:host(:not([hidden])){display:inline-block}:host([_is-busy]){color:var(--_ui5-v1-24-0_busy_indicator_color)}:host([size="Small"]) .ui5-busy-indicator-root{min-width:1.625rem;min-height:.5rem}:host([size="Small"][text]:not([text=""])) .ui5-busy-indicator-root{min-height:1.75rem}:host([size="Small"]) .ui5-busy-indicator-circle{width:.5rem;height:.5rem}:host([size="Small"]) .ui5-busy-indicator-circle:first-child,:host([size="Small"]) .ui5-busy-indicator-circle:nth-child(2){margin-inline-end:.0625rem}:host(:not([size])) .ui5-busy-indicator-root,:host([size="Medium"]) .ui5-busy-indicator-root{min-width:3.375rem;min-height:1rem}:host([size="Medium"]) .ui5-busy-indicator-circle:first-child,:host([size="Medium"]) .ui5-busy-indicator-circle:nth-child(2){margin-inline-end:.1875rem}:host(:not([size])[text]:not([text=""])) .ui5-busy-indicator-root,:host([size="Medium"][text]:not([text=""])) .ui5-busy-indicator-root{min-height:2.25rem}:host(:not([size])) .ui5-busy-indicator-circle,:host([size="Medium"]) .ui5-busy-indicator-circle{width:1rem;height:1rem}:host([size="Large"]) .ui5-busy-indicator-root{min-width:6.5rem;min-height:2rem}:host([size="Large"]) .ui5-busy-indicator-circle:first-child,:host([size="Large"]) .ui5-busy-indicator-circle:nth-child(2){margin-inline-end:.25rem}:host([size="Large"][text]:not([text=""])) .ui5-busy-indicator-root{min-height:3.25rem}:host([size="Large"]) .ui5-busy-indicator-circle{width:2rem;height:2rem}.ui5-busy-indicator-root{display:flex;justify-content:center;align-items:center;position:relative;background-color:inherit;height:inherit}.ui5-busy-indicator-busy-area{position:absolute;z-index:99;inset:0;display:flex;justify-content:center;align-items:center;background-color:inherit;flex-direction:column}.ui5-busy-indicator-busy-area:focus{outline:var(--_ui5-v1-24-0_busy_indicator_focus_outline);outline-offset:-2px;border-radius:var(--_ui5-v1-24-0_busy_indicator_focus_border_radius)}.ui5-busy-indicator-circles-wrapper{line-height:0}.ui5-busy-indicator-circle{display:inline-block;background-color:currentColor;border-radius:50%}.ui5-busy-indicator-circle:before{content:"";width:100%;height:100%;border-radius:100%}.circle-animation-0{animation:grow 1.6s infinite cubic-bezier(.32,.06,.85,1.11)}.circle-animation-1{animation:grow 1.6s infinite cubic-bezier(.32,.06,.85,1.11);animation-delay:.2s}.circle-animation-2{animation:grow 1.6s infinite cubic-bezier(.32,.06,.85,1.11);animation-delay:.4s}.ui5-busy-indicator-text{width:100%;text-align:center}:host([text-placement="Top"]) .ui5-busy-indicator-text{margin-bottom:.5rem}:host(:not([text-placement])) .ui5-busy-indicator-text,:host([text-placement="Bottom"]) .ui5-busy-indicator-text{margin-top:.5rem}@keyframes grow{0%,50%,to{-webkit-transform:scale(.5);-moz-transform:scale(.5);transform:scale(.5)}25%{-webkit-transform:scale(1);-moz-transform:scale(1);transform:scale(1)}}
`};var a=function(i,t,e,c){var l=arguments.length,n=l<3?t:c===null?c=Object.getOwnPropertyDescriptor(t,e):c,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,t,e,c);else for(var y=i.length-1;y>=0;y--)(d=i[y])&&(n=(l<3?d(n):l>3?d(t,e,n):d(t,e))||n);return l>3&&n&&Object.defineProperty(t,e,n),n},m;let r=m=class extends g{constructor(){super(),this._keydownHandler=this._handleKeydown.bind(this),this._preventEventHandler=this._preventEvent.bind(this)}onEnterDOM(){this.addEventListener("keydown",this._keydownHandler,{capture:!0}),this.addEventListener("keyup",this._preventEventHandler,{capture:!0})}onExitDOM(){this._busyTimeoutId&&(clearTimeout(this._busyTimeoutId),delete this._busyTimeoutId),this.removeEventListener("keydown",this._keydownHandler,!0),this.removeEventListener("keyup",this._preventEventHandler,!0)}static async onDefine(){m.i18nBundle=await $("@ui5/webcomponents")}get ariaTitle(){return m.i18nBundle.getText(E)}get labelId(){return this.text?`${this._id}-label`:void 0}get classes(){return{root:{"ui5-busy-indicator-root":!0}}}get textPosition(){return{top:this.text&&this.textPlacement===b.Top,bottom:this.text&&this.textPlacement===b.Bottom}}onBeforeRendering(){this.active?!this._isBusy&&!this._busyTimeoutId&&(this._busyTimeoutId=setTimeout(()=>{delete this._busyTimeoutId,this._isBusy=!0},Math.max(0,this.delay))):(this._busyTimeoutId&&(clearTimeout(this._busyTimeoutId),delete this._busyTimeoutId),this._isBusy=!1)}_handleKeydown(t){this._isBusy&&(t.stopImmediatePropagation(),z(t)&&(this.focusForward=!0,this.shadowRoot.querySelector("[data-ui5-focus-redirect]").focus(),this.focusForward=!1))}_preventEvent(t){this._isBusy&&t.stopImmediatePropagation()}_redirectFocus(t){this.focusForward||(t.preventDefault(),this.shadowRoot.querySelector(".ui5-busy-indicator-busy-area").focus())}};a([u()],r.prototype,"text",void 0);a([u({type:_,defaultValue:_.Medium})],r.prototype,"size",void 0);a([u({type:Boolean})],r.prototype,"active",void 0);a([u({validator:I,defaultValue:1e3})],r.prototype,"delay",void 0);a([u({type:b,defaultValue:b.Bottom})],r.prototype,"textPlacement",void 0);a([u({type:Boolean})],r.prototype,"_isBusy",void 0);r=m=a([w({tag:"ui5-busy-indicator",languageAware:!0,styles:R,renderer:B,template:P,dependencies:[T]})],r);r.define();const j=r,W=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));export{_ as B,j as a,W as b};
