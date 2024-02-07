import{_}from"./iframe-WUzyVZLd.js";import{a as r,l as n,b as l,s as b,p as c,c as y,f as w,w as I}from"./withWebComponent--kEkWNJH.js";import{e as $}from"./event-lM5HanI-.js";import{r as g,U as R}from"./UI5Element-_cJDeK03.js";import{e as T,b as x,c as N,d as D,n as C,m as k,f as E,g as V}from"./Keys-Mzj2D4aO.js";import{g as S}from"./AriaLabelHelper-RbKlVwzD.js";import{d as A}from"./i18nBundle-YDapVb1x.js";import{I as q}from"./Integer-kog98579.js";import{F as O}from"./Float-0fEWDOdp.js";import{o as M,p as P,q as B}from"./i18n-defaults-3YbdkqSs.js";import{c as U,I as z}from"./Icon-1HyKfQwB.js";import"./favorite-xlhdKRDc.js";import"./unfavorite-P195gHtx.js";import{s as L}from"./parameters-bundle.css-mPCp9TQx.js";function F(o,e,i){return r`<div class="ui5-rating-indicator-root" role="slider" aria-roledescription="${n(this._ariaRoleDescription)}" aria-valuemin="0" aria-valuenow="${n(this.value)}" aria-valuemax="${n(this.max)}" aria-valuetext="${n(this.value)} of ${n(this.max)}" aria-orientation="horizontal" aria-disabled="${n(this._ariaDisabled)}" aria-readonly="${n(this.ariaReadonly)}" aria-description="${n(this._ariaDescription)}" tabindex="${n(this.effectiveTabIndex)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @click="${this._onclick}" @keydown="${this._onkeydown}" title="${n(this.ratingTooltip)}" aria-label="${n(this._ariaLabel)}"><ul class="ui5-rating-indicator-list" aria-hidden="true">${U(this._stars,(t,a)=>t._id||a,(t,a)=>j.call(this,o,e,i,t,a))}</ul></div>`}function j(o,e,i,t,a){return r`${t.selected?H.call(this,o,e,i,t,a):W.call(this,o,e,i,t,a)}`}function H(o,e,i,t,a){return i?r`<li data-ui5-value="${n(t.index)}" class="ui5-rating-indicator-item ui5-rating-indicator-item-sel"><${l("ui5-icon",e,i)} data-ui5-value="${n(t.index)}" name="favorite"></${l("ui5-icon",e,i)}></li>`:r`<li data-ui5-value="${n(t.index)}" class="ui5-rating-indicator-item ui5-rating-indicator-item-sel"><ui5-icon data-ui5-value="${n(t.index)}" name="favorite"></ui5-icon></li>`}function W(o,e,i,t,a){return r`${t.halfStar?G.call(this,o,e,i,t,a):X.call(this,o,e,i,t,a)}`}function G(o,e,i,t,a){return i?r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-half"><${l("ui5-icon",e,i)} data-ui5-value="${n(t.index)}" name="unfavorite"></${l("ui5-icon",e,i)}><div class="ui5-rating-indicator-half-icon-wrapper"><${l("ui5-icon",e,i)} data-ui5-value="${n(t.index)}" name="favorite" class="ui5-rating-indicator-half-icon"></${l("ui5-icon",e,i)}></div></li>`:r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-half"><ui5-icon data-ui5-value="${n(t.index)}" name="unfavorite"></ui5-icon><div class="ui5-rating-indicator-half-icon-wrapper"><ui5-icon data-ui5-value="${n(t.index)}" name="favorite" class="ui5-rating-indicator-half-icon"></ui5-icon></div></li>`}function X(o,e,i,t,a){return r`${this.readonly?K.call(this,o,e,i,t,a):Y.call(this,o,e,i,t,a)}`}function K(o,e,i,t,a){return i?r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><${l("ui5-icon",e,i)} data-ui5-value="${n(t.index)}" name="favorite"></${l("ui5-icon",e,i)}></li>`:r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><ui5-icon data-ui5-value="${n(t.index)}" name="favorite"></ui5-icon></li>`}function Y(o,e,i,t,a){return r`${this.disabled?J.call(this,o,e,i,t,a):Q.call(this,o,e,i,t,a)}`}function J(o,e,i,t,a){return i?r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><${l("ui5-icon",e,i)} data-ui5-value="${n(t.index)}" name="favorite"></${l("ui5-icon",e,i)}></li>`:r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><ui5-icon data-ui5-value="${n(t.index)}" name="favorite"></ui5-icon></li>`}function Q(o,e,i,t,a){return i?r`<li data-ui5-value="${n(t.index)}" class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><${l("ui5-icon",e,i)} data-ui5-value="${n(t.index)}" name="unfavorite"></${l("ui5-icon",e,i)}></li>`:r`<li data-ui5-value="${n(t.index)}" class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><ui5-icon data-ui5-value="${n(t.index)}" name="unfavorite"></ui5-icon></li>`}g("@ui5/webcomponents-theming","sap_horizon",async()=>b);g("@ui5/webcomponents","sap_horizon",async()=>L);const Z={packageName:"@ui5/webcomponents",fileName:"themes/RatingIndicator.css.ts",content:`:host(:not([hidden])){display:inline-block;font-size:24px;margin:var(--_ui5-v1-22-0-rc-3_rating_indicator_component_spacing);cursor:pointer}:host([disabled]){opacity:.4;cursor:initial;outline:none}:host([readonly]){cursor:initial}:host([disabled]) .ui5-rating-indicator-item-unsel,:host([readonly]) .ui5-rating-indicator-item-unsel{padding-inline:var(--_ui5-v1-22-0-rc-3_rating_indicator_readonly_item_spacing);width:var(--_ui5-v1-22-0-rc-3_rating_indicator_readonly_item_width);height:var(--_ui5-v1-22-0-rc-3_rating_indicator_readonly_item_height)}:host(:not([readonly]):not([disabled])) .ui5-rating-indicator-root:hover{opacity:.9}:host([_focused]){outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:var(--_ui5-v1-22-0-rc-3_rating_indicator_outline_offset);border-radius:var(--_ui5-v1-22-0-rc-3_rating_indicator_border_radius)}[ui5-icon]{display:flex;text-shadow:var(--sapContent_TextShadow)}.ui5-rating-indicator-root{outline:none;position:relative}.ui5-rating-indicator-list{list-style-type:none;display:flex;align-items:center;margin:0;padding:0}.ui5-rating-indicator-item{position:relative;width:var(--_ui5-v1-22-0-rc-3_rating_indicator_item_width);height:var(--_ui5-v1-22-0-rc-3_rating_indicator_item_height)}.ui5-rating-indicator-item:not(:last-child){margin-inline-end:.1875rem}.ui5-rating-indicator-item [ui5-icon]{width:100%;height:100%;color:inherit;user-select:none}.ui5-rating-indicator-item.ui5-rating-indicator-item-sel{color:var(--sapContent_RatedColor)}.ui5-rating-indicator-item.ui5-rating-indicator-item-unsel,.ui5-rating-indicator-item.ui5-rating-indicator-item-half{color:var(--sapContent_UnratedColor)}.ui5-rating-indicator-item [ui5-icon].ui5-rating-indicator-half-icon{position:absolute;inset-inline-start:50%;color:var(--sapContent_RatedColor)}.ui5-rating-indicator-half-icon-wrapper{width:100%;height:100%;position:absolute;inset-inline-start:-50%;top:0;z-index:32;overflow:hidden}
`};var d=function(o,e,i,t){var a=arguments.length,u=a<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,i):t,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")u=Reflect.decorate(o,e,i,t);else for(var p=o.length-1;p>=0;p--)(h=o[p])&&(u=(a<3?h(u):a>3?h(e,i,u):h(e,i))||u);return a>3&&u&&Object.defineProperty(e,i,u),u},m;let s=m=class extends R{static async onDefine(){m.i18nBundle=await A("@ui5/webcomponents")}constructor(){super()}onBeforeRendering(){this.calcState()}calcState(){this._stars=[];for(let e=1;e<this.max+1;e++){const i=Math.round((this.value-Math.floor(this.value))*10);let t=!1,a=this.value;Math.floor(this.value)+1===e&&i>2&&i<8?t=!0:i<=2?a=Math.floor(this.value):i>=8&&(a=Math.ceil(this.value)),this._stars.push({selected:e<=a,index:e,halfStar:t})}}_onclick(e){const i=e.target;if(!(i instanceof HTMLElement)||this.disabled||this.readonly)return;const t=i.getAttribute("data-ui5-value");t!==null&&(this.value=parseInt(t),this.value===1&&this._liveValue===1&&(this.value=0),this._liveValue!==this.value&&(this.fireEvent("change"),this._liveValue=this.value))}_onkeydown(e){if(this.disabled||this.readonly)return;const i=T(e)||x(e),t=N(e)||D(e),a=C(e)||k(e),u=E(e),h=V(e),p=e.keyCode>=48&&e.keyCode<=57||e.keyCode>=96&&e.keyCode<=105;if(i||t||a||u||h||p){if(e.preventDefault(),i&&this.value>0)this.value=Math.round(this.value-1);else if(t&&this.value<this.max)this.value=Math.round(this.value+1);else if(a){const f=Math.round(this.value+1);this.value=f>this.max?0:f}else if(u)this.value=0;else if(h)this.value=this.max;else if(p){const f=parseInt(e.key);this.value=f>this.max?this.max:f}this.fireEvent("change")}}_onfocusin(){this.disabled||(this._focused=!0,this._liveValue=this.value)}_onfocusout(){this._focused=!1}get effectiveTabIndex(){const e=this.getAttribute("tabindex");return this.disabled?"-1":e||"0"}get ratingTooltip(){return this.tooltip||this.defaultTooltip}get defaultTooltip(){return m.i18nBundle.getText(M)}get _ariaRoleDescription(){return m.i18nBundle.getText(P)}get _ariaDisabled(){return this.disabled||void 0}get _ariaLabel(){return S(this)}get _ariaDescription(){return this.required?m.i18nBundle.getText(B):void 0}get ariaReadonly(){return this.readonly?"true":void 0}};d([c({validator:O,defaultValue:0})],s.prototype,"value",void 0);d([c({validator:q,defaultValue:5})],s.prototype,"max",void 0);d([c({type:Boolean})],s.prototype,"disabled",void 0);d([c({type:Boolean})],s.prototype,"readonly",void 0);d([c()],s.prototype,"accessibleName",void 0);d([c({defaultValue:""})],s.prototype,"accessibleNameRef",void 0);d([c({type:Boolean})],s.prototype,"required",void 0);d([c()],s.prototype,"tooltip",void 0);d([c({type:Object,multiple:!0})],s.prototype,"_stars",void 0);d([c({type:Boolean})],s.prototype,"_focused",void 0);s=m=d([y({tag:"ui5-rating-indicator",languageAware:!0,renderer:w,styles:Z,template:F,dependencies:[z]}),$("change")],s);s.define();const ee=s,ie=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"})),v=I("ui5-rating-indicator",["accessibleName","accessibleNameRef","max","tooltip","value"],["disabled","readonly","required"],[],["change"],()=>_(()=>Promise.resolve().then(()=>ie),void 0,import.meta.url));v.displayName="RatingIndicator";try{v.displayName="RatingIndicator",v.__docgenInfo={description:`The Rating Indicator is used to display a specific number of icons that are used to rate an item. Additionally, it is also used to display the average and overall ratings.

### Usage

The recommended number of icons is between 5 and 7.

### Responsive Behavior

You can change the size of the Rating Indicator by changing its \`font-size\` CSS property.
Example: \`<RatingIndicator style="font-size: 3rem;"></RatingIndicator>\`

### Keyboard Handling

When the \`RatingIndicator\` is focused, the user can change the rating with the following keyboard shortcuts:

*   \\[RIGHT/UP\\] - Increases the value of the rating by one step. If the highest value is reached, does nothing
*   \\[LEFT/DOWN\\] - Decreases the value of the rating by one step. If the lowest value is reached, does nothing.
*   \\[HOME\\] - Sets the lowest value.
*   \\[END\\] - Sets the highest value.
*   \\[SPACE/ENTER/RETURN\\] - Increases the value of the rating by one step. If the highest value is reached, sets the rating to the lowest value.
*   Any number - Changes value to the corresponding number. If typed number is larger than the number of values, sets the highest value.

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"RatingIndicator",props:{onChange:{defaultValue:null,description:"The event is fired when the value changes.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<RatingIndicatorDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},max:{defaultValue:{value:"5"},description:"The number of displayed rating symbols.",name:"max",required:!1,type:{name:"number"}},readonly:{defaultValue:{value:"false"},description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable, but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Defines the tooltip of the component.",name:"tooltip",required:!1,type:{name:"string"}},value:{defaultValue:{value:"0"},description:`The indicated value of the rating.

**Note:** If you set a number which is not round, it would be shown as follows:

*   1.0 - 1.2 -> 1
*   1.3 - 1.7 -> 1.5
*   1.8 - 1.9 -> 2`,name:"value",required:!1,type:{name:"number"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{v as R};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
