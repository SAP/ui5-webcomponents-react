import{p as r,q as a,v as l,a as g,s as b,b as c,m as y,y as _,S as w,w as R}from"./withWebComponent-v3aPz19k.js";import{b as I}from"./event-BX8i4Y_x.js";import{l as N}from"./Tooltips-BxgbG8pQ.js";import{P as $,K as T,c as D,D as C,i as x,b as A,F as S,W as q}from"./Keys-DoZifIQ_.js";import{v as V}from"./AriaLabelHelper-C5uDZewF.js";import{i as k}from"./i18n-DEVDpFvK.js";import{E,G as P,H as U}from"./i18n-defaults-CMHHS2wK.js";import{c as z,I as B}from"./Icon-Bq3V4Dpj.js";import"./favorite-DPkKRSh8.js";import"./unfavorite-MtlNUgWP.js";import{s as M}from"./parameters-bundle.css-R51uC6BG.js";function O(o,e,i){return r`<div class="ui5-rating-indicator-root" role="slider" aria-roledescription="${a(this._ariaRoleDescription)}" aria-valuemin="0" aria-valuenow="${a(this.value)}" aria-valuemax="${a(this.max)}" aria-valuetext="${a(this.value)} of ${a(this.max)}" aria-orientation="horizontal" aria-disabled="${a(this._ariaDisabled)}" aria-readonly="${a(this.ariaReadonly)}" aria-description="${a(this._ariaDescription)}" tabindex="${a(this.effectiveTabIndex)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @click="${this._onclick}" @keydown="${this._onkeydown}" title="${a(this.ratingTooltip)}" aria-label="${a(this._ariaLabel)}"><ul class="ui5-rating-indicator-list" aria-hidden="true">${z(this._stars,(t,n)=>t._id||n,(t,n)=>F.call(this,o,e,i,t,n))}</ul></div>`}function F(o,e,i,t,n){return r`${t.selected?W.call(this,o,e,i,t,n):H.call(this,o,e,i,t,n)}`}function W(o,e,i,t,n){return i?r`<li data-ui5-value="${a(t.index)}" class="ui5-rating-indicator-item ui5-rating-indicator-item-sel"><${l("ui5-icon",e,i)} data-ui5-value="${a(t.index)}" name="favorite"></${l("ui5-icon",e,i)}></li>`:r`<li data-ui5-value="${a(t.index)}" class="ui5-rating-indicator-item ui5-rating-indicator-item-sel"><ui5-icon data-ui5-value="${a(t.index)}" name="favorite"></ui5-icon></li>`}function H(o,e,i,t,n){return r`${t.halfStar?G.call(this,o,e,i,t,n):L.call(this,o,e,i,t,n)}`}function G(o,e,i,t,n){return i?r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-half"><${l("ui5-icon",e,i)} data-ui5-value="${a(t.index)}" name="unfavorite"></${l("ui5-icon",e,i)}><div class="ui5-rating-indicator-half-icon-wrapper"><${l("ui5-icon",e,i)} data-ui5-value="${a(t.index)}" name="favorite" class="ui5-rating-indicator-half-icon"></${l("ui5-icon",e,i)}></div></li>`:r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-half"><ui5-icon data-ui5-value="${a(t.index)}" name="unfavorite"></ui5-icon><div class="ui5-rating-indicator-half-icon-wrapper"><ui5-icon data-ui5-value="${a(t.index)}" name="favorite" class="ui5-rating-indicator-half-icon"></ui5-icon></div></li>`}function L(o,e,i,t,n){return r`${this.readonly?j.call(this,o,e,i,t,n):K.call(this,o,e,i,t,n)}`}function j(o,e,i,t,n){return i?r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><${l("ui5-icon",e,i)} data-ui5-value="${a(t.index)}" name="favorite"></${l("ui5-icon",e,i)}></li>`:r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><ui5-icon data-ui5-value="${a(t.index)}" name="favorite"></ui5-icon></li>`}function K(o,e,i,t,n){return r`${this.disabled?X.call(this,o,e,i,t,n):Y.call(this,o,e,i,t,n)}`}function X(o,e,i,t,n){return i?r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><${l("ui5-icon",e,i)} data-ui5-value="${a(t.index)}" name="favorite"></${l("ui5-icon",e,i)}></li>`:r`<li class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><ui5-icon data-ui5-value="${a(t.index)}" name="favorite"></ui5-icon></li>`}function Y(o,e,i,t,n){return i?r`<li data-ui5-value="${a(t.index)}" class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><${l("ui5-icon",e,i)} data-ui5-value="${a(t.index)}" name="unfavorite"></${l("ui5-icon",e,i)}></li>`:r`<li data-ui5-value="${a(t.index)}" class="ui5-rating-indicator-item ui5-rating-indicator-item-unsel"><ui5-icon data-ui5-value="${a(t.index)}" name="unfavorite"></ui5-icon></li>`}g("@ui5/webcomponents-theming","sap_horizon",async()=>b);g("@ui5/webcomponents","sap_horizon",async()=>M);const J={packageName:"@ui5/webcomponents",fileName:"themes/RatingIndicator.css.ts",content:`:host(:not([hidden])){display:inline-block;font-size:24px;margin:var(--_ui5-v2-4-0_rating_indicator_component_spacing);cursor:pointer}:host([disabled]){opacity:.4;cursor:initial;outline:none}:host([readonly]){cursor:initial}:host([disabled]) .ui5-rating-indicator-item-unsel,:host([readonly]) .ui5-rating-indicator-item-unsel{padding-inline:var(--_ui5-v2-4-0_rating_indicator_readonly_item_spacing);width:var(--_ui5-v2-4-0_rating_indicator_readonly_item_width);height:var(--_ui5-v2-4-0_rating_indicator_readonly_item_height)}:host(:not([readonly]):not([disabled])) .ui5-rating-indicator-root:hover{opacity:.9}:host([_focused]){outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:var(--_ui5-v2-4-0_rating_indicator_outline_offset);border-radius:var(--_ui5-v2-4-0_rating_indicator_border_radius)}[ui5-icon]{display:flex;text-shadow:var(--sapContent_TextShadow)}.ui5-rating-indicator-root{outline:none;position:relative}.ui5-rating-indicator-list{list-style-type:none;display:flex;align-items:center;margin:0;padding:0}.ui5-rating-indicator-item{position:relative;width:var(--_ui5-v2-4-0_rating_indicator_item_width);height:var(--_ui5-v2-4-0_rating_indicator_item_height)}.ui5-rating-indicator-item:not(:last-child){margin-inline-end:.1875rem}.ui5-rating-indicator-item [ui5-icon]{width:100%;height:100%;color:inherit;user-select:none}.ui5-rating-indicator-item.ui5-rating-indicator-item-sel{color:var(--sapContent_RatedColor)}.ui5-rating-indicator-item.ui5-rating-indicator-item-unsel,.ui5-rating-indicator-item.ui5-rating-indicator-item-half{color:var(--sapContent_UnratedColor)}.ui5-rating-indicator-item [ui5-icon].ui5-rating-indicator-half-icon{position:absolute;inset-inline-start:50%;color:var(--sapContent_RatedColor)}.ui5-rating-indicator-half-icon-wrapper{width:100%;height:100%;position:absolute;inset-inline-start:-50%;top:0;z-index:32;overflow:hidden}
`};var u=function(o,e,i,t){var n=arguments.length,d=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,i):t,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")d=Reflect.decorate(o,e,i,t);else for(var m=o.length-1;m>=0;m--)(h=o[m])&&(d=(n<3?h(d):n>3?h(e,i,d):h(e,i))||d);return n>3&&d&&Object.defineProperty(e,i,d),d},f;let s=f=class extends w{constructor(){super(),this.value=0,this.max=5,this.disabled=!1,this.readonly=!1,this.required=!1,this._stars=[],this._focused=!1}onBeforeRendering(){this.calcState()}calcState(){this._stars=[];for(let e=1;e<this.max+1;e++){const i=Math.round((this.value-Math.floor(this.value))*10);let t=!1,n=this.value;Math.floor(this.value)+1===e&&i>2&&i<8?t=!0:i<=2?n=Math.floor(this.value):i>=8&&(n=Math.ceil(this.value)),this._stars.push({selected:e<=n,index:e,halfStar:t})}}_onclick(e){const i=e.target;if(!(i instanceof HTMLElement)||this.disabled||this.readonly)return;const t=i.getAttribute("data-ui5-value");t!==null&&(this.value=parseInt(t),this.value===1&&this._liveValue===1&&(this.value=0),this._liveValue!==this.value&&(this.fireDecoratorEvent("change"),this._liveValue=this.value))}_onkeydown(e){if(this.disabled||this.readonly){e.preventDefault();return}const i=$(e)||T(e),t=D(e)||C(e),n=x(e)||A(e),d=S(e),h=q(e),m=e.keyCode>=48&&e.keyCode<=57||e.keyCode>=96&&e.keyCode<=105;if(i||t||n||d||h||m){if(e.preventDefault(),i&&this.value>0)this.value=Math.round(this.value-1);else if(t&&this.value<this.max)this.value=Math.round(this.value+1);else if(n){const p=Math.round(this.value+1);this.value=p>this.max?0:p}else if(d)this.value=0;else if(h)this.value=this.max;else if(m){const p=parseInt(e.key);this.value=p>this.max?this.max:p}this.fireDecoratorEvent("change")}}_onfocusin(){this.disabled||(this._focused=!0,this._liveValue=this.value)}_onfocusout(){this._focused=!1}get effectiveTabIndex(){const e=this.getAttribute("tabindex");return this.disabled?"-1":e||"0"}get ratingTooltip(){return this.tooltip?this.tooltip:N()?this.defaultTooltip:void 0}get defaultTooltip(){return f.i18nBundle.getText(E)}get _ariaRoleDescription(){return f.i18nBundle.getText(P)}get _ariaDisabled(){return this.disabled||void 0}get _ariaLabel(){return V(this)}get _ariaDescription(){return this.required?f.i18nBundle.getText(U):void 0}get ariaReadonly(){return this.readonly?"true":void 0}};u([c({type:Number})],s.prototype,"value",void 0);u([c({type:Number})],s.prototype,"max",void 0);u([c({type:Boolean})],s.prototype,"disabled",void 0);u([c({type:Boolean})],s.prototype,"readonly",void 0);u([c()],s.prototype,"accessibleName",void 0);u([c()],s.prototype,"accessibleNameRef",void 0);u([c({type:Boolean})],s.prototype,"required",void 0);u([c()],s.prototype,"tooltip",void 0);u([c({type:Array})],s.prototype,"_stars",void 0);u([c({type:Boolean})],s.prototype,"_focused",void 0);u([k("@ui5/webcomponents")],s,"i18nBundle",void 0);s=f=u([y({tag:"ui5-rating-indicator",languageAware:!0,renderer:_,styles:J,template:O,dependencies:[B]}),I("change",{bubbles:!0})],s);s.define();const v=R("ui5-rating-indicator",["accessibleName","accessibleNameRef","max","tooltip","value"],["disabled","readonly","required"],[],["change"]);v.displayName="RatingIndicator";try{v.displayName="RatingIndicator",v.__docgenInfo={description:`The Rating Indicator is used to display a specific number of icons that are used to rate an item.
Additionally, it is also used to display the average and overall ratings.

### Usage
The recommended number of icons is between 5 and 7.

### Responsive Behavior
You can change the size of the Rating Indicator by changing its \`font-size\` CSS property.

Example: \`<RatingIndicator style="font-size: 3rem;"></RatingIndicator>\`

### Keyboard Handling
When the \`RatingIndicator\` is focused, the user can change the rating
with the following keyboard shortcuts:

- [RIGHT/UP] - Increases the value of the rating by one step. If the highest value is reached, does nothing
- [LEFT/DOWN] - Decreases the value of the rating by one step. If the lowest value is reached, does nothing.
- [Home] - Sets the lowest value.
- [End] - Sets the highest value.
- [SPACE/ENTER/RETURN] - Increases the value of the rating by one step. If the highest value is reached, sets the rating to the lowest value.
- Any number - Changes value to the corresponding number. If typed number is larger than the number of values, sets the highest value.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"RatingIndicator",props:{onChange:{defaultValue:null,description:"The event is fired when the value changes.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<RatingIndicatorDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that label the component.

**Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},max:{defaultValue:{value:"5"},description:"The number of displayed rating symbols.",name:"max",required:!1,type:{name:"number"}},readonly:{defaultValue:{value:"false"},description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:`Defines whether the component is required.

**Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"required",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the tooltip of the component.

**Note:** Available since [v1.19.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.19.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},value:{defaultValue:{value:"0"},description:`The indicated value of the rating.

**Note:** If you set a number which is not round, it would be shown as follows:

- 1.0 - 1.2 -> 1
- 1.3 - 1.7 -> 1.5
- 1.8 - 1.9 -> 2`,name:"value",required:!1,type:{name:"number"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{v.displayName="RatingIndicator",v.__docgenInfo={description:`The Rating Indicator is used to display a specific number of icons that are used to rate an item.
Additionally, it is also used to display the average and overall ratings.

### Usage
The recommended number of icons is between 5 and 7.

### Responsive Behavior
You can change the size of the Rating Indicator by changing its \`font-size\` CSS property.

Example: \`<RatingIndicator style="font-size: 3rem;"></RatingIndicator>\`

### Keyboard Handling
When the \`RatingIndicator\` is focused, the user can change the rating
with the following keyboard shortcuts:

- [RIGHT/UP] - Increases the value of the rating by one step. If the highest value is reached, does nothing
- [LEFT/DOWN] - Decreases the value of the rating by one step. If the lowest value is reached, does nothing.
- [Home] - Sets the lowest value.
- [End] - Sets the highest value.
- [SPACE/ENTER/RETURN] - Increases the value of the rating by one step. If the highest value is reached, sets the rating to the lowest value.
- Any number - Changes value to the corresponding number. If typed number is larger than the number of values, sets the highest value.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"RatingIndicator",props:{onChange:{defaultValue:null,description:"The event is fired when the value changes.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<RatingIndicatorDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that label the component.

**Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},max:{defaultValue:{value:"5"},description:"The number of displayed rating symbols.",name:"max",required:!1,type:{name:"number"}},readonly:{defaultValue:{value:"false"},description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:`Defines whether the component is required.

**Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"required",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the tooltip of the component.

**Note:** Available since [v1.19.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.19.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},value:{defaultValue:{value:"0"},description:`The indicated value of the rating.

**Note:** If you set a number which is not round, it would be shown as follows:

- 1.0 - 1.2 -> 1
- 1.3 - 1.7 -> 1.5
- 1.8 - 1.9 -> 2`,name:"value",required:!1,type:{name:"number"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{v as R};
