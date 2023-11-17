import{_}from"./iframe-_OlRtZJR.js";import{b as r,l as n,d as s,s as b,a as y,p as c,c as $,f as w,w as I}from"./withWebComponent-ceo0jn6D.js";import{c as R,a as x,e as T}from"./Icon-HNXZSIOG.js";import{r as g,U as C,n as N}from"./UI5Element-51XrG2PJ.js";import{e as D,b as k,c as V,d as q,k as A,l as S,f as E,g as O}from"./Icons-3pbvVZUr.js";import{g as M}from"./AriaLabelHelper-RbKlVwzD.js";import{I as P}from"./Integer-kog98579.js";import{F as B}from"./Float-0fEWDOdp.js";import{o as U,p as L,q as F}from"./i18n-defaults-RBzcmDt8.js";import"./favorite-dpkNOm1p.js";import"./unfavorite-CN8D1l65.js";function j(o,e,i){return r`<div class="ui5-rating-indicator-root" role="slider" aria-roledescription="${n(this._ariaRoleDescription)}" aria-valuemin="0" aria-valuenow="${n(this.value)}" aria-valuemax="${n(this.max)}" aria-valuetext="${n(this.value)} of ${n(this.max)}" aria-orientation="horizontal" aria-disabled="${n(this._ariaDisabled)}" aria-readonly="${n(this.ariaReadonly)}" aria-description="${n(this._ariaDescription)}" tabindex="${n(this.effectiveTabIndex)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @click="${this._onclick}" @keydown="${this._onkeydown}" title="${n(this.ratingTooltip)}" aria-label="${n(this._ariaLabel)}"><ul class="ui5-rating-indicator-list" aria-hidden="true">${R(this._stars,(t,a)=>t._id||a,(t,a)=>z.call(this,o,e,i,t,a))}</ul></div>`}function z(o,e,i,t,a){return r`${t.selected?W.call(this,o,e,i,t,a):G.call(this,o,e,i,t,a)}`}function W(o,e,i,t,a){return i?r`<li data-ui5-value="${n(t.index)}" class="ui5-rating-indicator-item ui5-rating-indicator-item-sel"><${s("ui5-icon",e,i)} data-ui5-value="${n(t.index)}" name="favorite"></${s("ui5-icon",e,i)}></li>`:r`<li data-ui5-value="${n(t.index)}" class="ui5-rating-indicator-item ui5-rating-indicator-item-sel"><ui5-icon data-ui5-value="${n(t.index)}" name="favorite"></ui5-icon></li>`}function G(o,e,i,t,a){return r`${t.halfStar?H.call(this,o,e,i,t,a):X.call(this,o,e,i,t,a)}`}function H(o,e,i,t,a){return i?r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-half"><${s("ui5-icon",e,i)} data-ui5-value="${n(t.index)}" name="unfavorite"></${s("ui5-icon",e,i)}><div class="ui5-rating-indicator-half-icon-wrapper"><${s("ui5-icon",e,i)} data-ui5-value="${n(t.index)}" name="favorite" class="ui5-rating-indicator-half-icon"></${s("ui5-icon",e,i)}></div></li>`:r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-half"><ui5-icon data-ui5-value="${n(t.index)}" name="unfavorite"></ui5-icon><div class="ui5-rating-indicator-half-icon-wrapper"><ui5-icon data-ui5-value="${n(t.index)}" name="favorite" class="ui5-rating-indicator-half-icon"></ui5-icon></div></li>`}function X(o,e,i,t,a){return r`${this.readonly?J.call(this,o,e,i,t,a):K.call(this,o,e,i,t,a)}`}function J(o,e,i,t,a){return i?r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><${s("ui5-icon",e,i)} data-ui5-value="${n(t.index)}" name="favorite"></${s("ui5-icon",e,i)}></li>`:r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><ui5-icon data-ui5-value="${n(t.index)}" name="favorite"></ui5-icon></li>`}function K(o,e,i,t,a){return r`${this.disabled?Q.call(this,o,e,i,t,a):Y.call(this,o,e,i,t,a)}`}function Q(o,e,i,t,a){return i?r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><${s("ui5-icon",e,i)} data-ui5-value="${n(t.index)}" name="favorite"></${s("ui5-icon",e,i)}></li>`:r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><ui5-icon data-ui5-value="${n(t.index)}" name="favorite"></ui5-icon></li>`}function Y(o,e,i,t,a){return i?r`<li data-ui5-value="${n(t.index)}" class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><${s("ui5-icon",e,i)} data-ui5-value="${n(t.index)}" name="unfavorite"></${s("ui5-icon",e,i)}></li>`:r`<li data-ui5-value="${n(t.index)}" class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><ui5-icon data-ui5-value="${n(t.index)}" name="unfavorite"></ui5-icon></li>`}g("@ui5/webcomponents-theming","sap_horizon",async()=>b);g("@ui5/webcomponents","sap_horizon",async()=>y);const Z={packageName:"@ui5/webcomponents",fileName:"themes/RatingIndicator.css",content:":host(:not([hidden])){cursor:pointer;display:inline-block;font-size:24px;margin:var(--_ui5-v1-19-0_rating_indicator_component_spacing)}:host([disabled]){cursor:auto;opacity:.4;outline:none}:host([readonly]){cursor:auto}:host([disabled]) .ui5-rating-indicator-item-unsel,:host([readonly]) .ui5-rating-indicator-item-unsel{height:var(--_ui5-v1-19-0_rating_indicator_readonly_item_height);padding-inline:var(--_ui5-v1-19-0_rating_indicator_readonly_item_spacing);width:var(--_ui5-v1-19-0_rating_indicator_readonly_item_width)}:host(:not([readonly]):not([disabled])) .ui5-rating-indicator-root:hover{opacity:.9}:host([_focused]){border-radius:var(--_ui5-v1-19-0_rating_indicator_border_radius);outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:var(--_ui5-v1-19-0_rating_indicator_outline_offset)}[ui5-icon]{display:flex;text-shadow:var(--sapContent_TextShadow)}.ui5-rating-indicator-root{outline:none;position:relative}.ui5-rating-indicator-list{align-items:center;display:flex;list-style-type:none;margin:0;padding:0}.ui5-rating-indicator-item{height:var(--_ui5-v1-19-0_rating_indicator_item_height);position:relative;width:var(--_ui5-v1-19-0_rating_indicator_item_width)}.ui5-rating-indicator-item:not(:last-child){margin-inline-end:.1875rem}.ui5-rating-indicator-item [ui5-icon]{color:inherit;height:100%;user-select:none;width:100%}.ui5-rating-indicator-item.ui5-rating-indicator-item-sel{color:var(--sapContent_RatedColor)}.ui5-rating-indicator-item.ui5-rating-indicator-item-unsel{color:var(--sapContent_UnratedColor)}.ui5-rating-indicator-item.ui5-rating-indicator-item-half{color:var(--sapContent_UnratedColor)}.ui5-rating-indicator-item [ui5-icon].ui5-rating-indicator-half-icon{color:var(--sapContent_RatedColor);inset-inline-start:50%;position:absolute}.ui5-rating-indicator-half-icon-wrapper{height:100%;inset-inline-start:-50%;overflow:hidden;position:absolute;top:0;width:100%;z-index:32}"};var d=function(o,e,i,t){var a=arguments.length,u=a<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,i):t,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")u=Reflect.decorate(o,e,i,t);else for(var p=o.length-1;p>=0;p--)(h=o[p])&&(u=(a<3?h(u):a>3?h(e,i,u):h(e,i))||u);return a>3&&u&&Object.defineProperty(e,i,u),u},m;let l=m=class extends C{static async onDefine(){m.i18nBundle=await N("@ui5/webcomponents")}constructor(){super()}onBeforeRendering(){this.calcState()}calcState(){this._stars=[];for(let e=1;e<this.max+1;e++){const i=Math.round((this.value-Math.floor(this.value))*10);let t=!1,a=this.value;Math.floor(this.value)+1===e&&i>2&&i<8?t=!0:i<=2?a=Math.floor(this.value):i>=8&&(a=Math.ceil(this.value)),this._stars.push({selected:e<=a,index:e,halfStar:t})}}_onclick(e){const i=e.target;if(!(i instanceof HTMLElement)||this.disabled||this.readonly)return;const t=i.getAttribute("data-ui5-value");t!==null&&(this.value=parseInt(t),this.value===1&&this._liveValue===1&&(this.value=0),this._liveValue!==this.value&&(this.fireEvent("change"),this._liveValue=this.value))}_onkeydown(e){if(this.disabled||this.readonly)return;const i=D(e)||k(e),t=V(e)||q(e),a=A(e)||S(e),u=E(e),h=O(e),p=e.keyCode>=48&&e.keyCode<=57||e.keyCode>=96&&e.keyCode<=105;if(i||t||a||u||h||p){if(e.preventDefault(),i&&this.value>0)this.value=Math.round(this.value-1);else if(t&&this.value<this.max)this.value=Math.round(this.value+1);else if(a){const f=Math.round(this.value+1);this.value=f>this.max?0:f}else if(u)this.value=0;else if(h)this.value=this.max;else if(p){const f=parseInt(e.key);this.value=f>this.max?this.max:f}this.fireEvent("change")}}_onfocusin(){this.disabled||(this._focused=!0,this._liveValue=this.value)}_onfocusout(){this._focused=!1}get effectiveTabIndex(){const e=this.getAttribute("tabindex");return this.disabled?"-1":e||"0"}get ratingTooltip(){return this.tooltip||this.defaultTooltip}get defaultTooltip(){return m.i18nBundle.getText(U)}get _ariaRoleDescription(){return m.i18nBundle.getText(L)}get _ariaDisabled(){return this.disabled||void 0}get _ariaLabel(){return M(this)}get _ariaDescription(){return this.required?m.i18nBundle.getText(F):void 0}get ariaReadonly(){return this.readonly?"true":void 0}};d([c({validator:B,defaultValue:0})],l.prototype,"value",void 0);d([c({validator:P,defaultValue:5})],l.prototype,"max",void 0);d([c({type:Boolean})],l.prototype,"disabled",void 0);d([c({type:Boolean})],l.prototype,"readonly",void 0);d([c()],l.prototype,"accessibleName",void 0);d([c({defaultValue:""})],l.prototype,"accessibleNameRef",void 0);d([c({type:Boolean})],l.prototype,"required",void 0);d([c()],l.prototype,"tooltip",void 0);d([c({type:Object,multiple:!0})],l.prototype,"_stars",void 0);d([c({type:Boolean})],l.prototype,"_focused",void 0);l=m=d([$({tag:"ui5-rating-indicator",languageAware:!0,renderer:w,styles:Z,template:j,dependencies:[x]}),T("change")],l);l.define();const ee=l,ie=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"})),v=I("ui5-rating-indicator",["accessibleName","accessibleNameRef","max","tooltip","value"],["disabled","readonly","required"],[],["change"],()=>_(()=>Promise.resolve().then(()=>ie),void 0,import.meta.url));v.displayName="RatingIndicator";v.defaultProps={max:5,value:0};try{v.displayName="RatingIndicator",v.__docgenInfo={description:`The Rating Indicator is used to display a specific number of icons that are used to rate an item. Additionally, it is also used to display the average and overall ratings.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-RatingIndicator)`,displayName:"RatingIndicator",props:{onChange:{defaultValue:null,description:"The event is fired when the value changes.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<RatingIndicatorDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:`Defines whether the component is disabled.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},max:{defaultValue:{value:"5"},description:"The number of displayed rating symbols.",name:"max",required:!1,type:{name:"number"}},readonly:{defaultValue:null,description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable, but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Defines the tooltip of the component.",name:"tooltip",required:!1,type:{name:"string"}},value:{defaultValue:{value:"0"},description:`The indicated value of the rating.

**Note:** If you set a number which is not round, it would be shown as follows:

*   1.0 - 1.2 -> 1
*   1.3 - 1.7 -> 1.5
*   1.8 - 1.9 -> 2`,name:"value",required:!1,type:{name:"number"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{v as R};
//# sourceMappingURL=index-y3PTuAWR.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}