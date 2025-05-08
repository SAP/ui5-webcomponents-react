import{j as o,h as _,p as b,d as w,s as u,m as I,y as R,E as N,w as T}from"./jsx-runtime-CkEx_Gfk.js";import{l as x}from"./event-strict-DgQLNDEV.js";import{l as C}from"./Tooltips-DOGhZSxR.js";import{i as g,P as A,K as S,c as D,D as q,b as V,F as z,W as E}from"./Keys-B3oBAe0t.js";import{A as P}from"./AccessibilityTextsHelper-4hgGqLyb.js";import{i as M}from"./i18n-CjR4HGlq.js";import{y as k,z as U,C as L}from"./i18n-defaults-B158X0Y5.js";import{I as h}from"./Icon-BexaehQh.js";import{f as p}from"./favorite-Dmsl-GFO.js";import{u as y}from"./unfavorite-H5t7kbL_.js";import{d as B}from"./parameters-bundle.css-Dkq9X0yL.js";function F(){return o("div",{class:"ui5-rating-indicator-root",role:"slider","aria-roledescription":this._ariaRoleDescription,"aria-valuemin":0,"aria-valuenow":this.value,"aria-valuemax":this.max,"aria-valuetext":`${this.value} of ${this.max}`,"aria-orientation":"horizontal","aria-disabled":this._ariaDisabled,"aria-readonly":this.ariaReadonly,"aria-description":this._ariaDescription,tabindex:this.effectiveTabIndex,onFocusIn:this._onfocusin,onFocusOut:this._onfocusout,onClick:this._onclick,onKeyDown:this._onkeydown,title:this.ratingTooltip,"aria-label":this._ariaLabel,children:o("ul",{class:"ui5-rating-indicator-list","aria-hidden":"true",children:this._stars.map(t=>O.call(this,t))})})}function O(t){return t.selected?o("li",{"data-ui5-value":t.index,class:"ui5-rating-indicator-item ui5-rating-indicator-item-sel",children:o(h,{"data-ui5-value":t.index,name:p})}):t.halfStar?_("li",{class:"ui5-rating-indicator-item ui5-rating-indicator-item-half",children:[o(h,{"data-ui5-value":t.index,name:W.call(this)}),o("div",{class:"ui5-rating-indicator-half-icon-wrapper",children:o(h,{"data-ui5-value":t.index,name:p,class:"ui5-rating-indicator-half-icon"})})]}):this.readonly?o("li",{class:"ui5-rating-indicator-item ui5-rating-indicator-item-unsel",children:o(h,{"data-ui5-value":t.index,name:p})}):this.disabled?o("li",{class:"ui5-rating-indicator-item ui5-rating-indicator-item-unsel",children:o(h,{"data-ui5-value":t.index,name:p})}):o("li",{"data-ui5-value":t.index,class:"ui5-rating-indicator-item ui5-rating-indicator-item-unsel",children:o(h,{"data-ui5-value":t.index,name:y})})}function W(){return this.disabled||this.readonly?p:y}b("@ui5/webcomponents-theming","sap_horizon",async()=>w);b("@ui5/webcomponents","sap_horizon",async()=>B);const H=`:host(:not([hidden])){display:inline-block;font-size:24px;margin:var(--_ui5-v2-10-0_rating_indicator_component_spacing);cursor:pointer}:host([disabled]){opacity:.4;cursor:initial;outline:none}:host([readonly]){cursor:initial}:host([disabled]) .ui5-rating-indicator-item-unsel,:host([readonly]) .ui5-rating-indicator-item-unsel{padding-inline:var(--_ui5-v2-10-0_rating_indicator_readonly_item_spacing);width:var(--_ui5-v2-10-0_rating_indicator_readonly_item_width);height:var(--_ui5-v2-10-0_rating_indicator_readonly_item_height)}:host(:not([readonly]):not([disabled])) .ui5-rating-indicator-root:hover{opacity:.9}:host([_focused]){outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:var(--_ui5-v2-10-0_rating_indicator_outline_offset);border-radius:var(--_ui5-v2-10-0_rating_indicator_border_radius)}:host([size="S"]) .ui5-rating-indicator-item{font-size:var(--_ui5-v2-10-0_rating_indicator_item_size_s)}:host([size="L"]) .ui5-rating-indicator-item{font-size:var(--_ui5-v2-10-0_rating_indicator_item_size_l)}[ui5-icon]{display:flex;text-shadow:var(--sapContent_TextShadow)}.ui5-rating-indicator-root{outline:none;position:relative;padding:var(--_ui5-v2-10-0_rating_indicator_component_padding)}.ui5-rating-indicator-list{list-style-type:none;display:flex;align-items:center;margin:0;padding:0}.ui5-rating-indicator-item{position:relative;width:var(--_ui5-v2-10-0_rating_indicator_item_width);height:var(--_ui5-v2-10-0_rating_indicator_item_height)}:host([size="L"]) .ui5-rating-indicator-item:not(:last-child){margin-inline-end:.25rem}.ui5-rating-indicator-item:not(:last-child){margin-inline-end:.1875rem}.ui5-rating-indicator-item [ui5-icon]{width:100%;height:100%;color:inherit;user-select:none}.ui5-rating-indicator-item.ui5-rating-indicator-item-sel{color:var(--sapContent_RatedColor)}.ui5-rating-indicator-item.ui5-rating-indicator-item-unsel,.ui5-rating-indicator-item.ui5-rating-indicator-item-half{color:var(--sapContent_UnratedColor)}.ui5-rating-indicator-item [ui5-icon].ui5-rating-indicator-half-icon{position:absolute;inset-inline-start:50%;color:var(--sapContent_RatedColor)}.ui5-rating-indicator-half-icon-wrapper{width:100%;height:100%;position:absolute;inset-inline-start:-50%;top:0;z-index:32;overflow:hidden}
`;var s=function(t,e,i,a){var r=arguments.length,l=r<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,i):a,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(t,e,i,a);else for(var c=t.length-1;c>=0;c--)(d=t[c])&&(l=(r<3?d(l):r>3?d(e,i,l):d(e,i))||l);return r>3&&l&&Object.defineProperty(e,i,l),l},f;let n=f=class extends N{constructor(){super(),this.value=0,this.max=5,this.size="M",this.disabled=!1,this.readonly=!1,this.required=!1,this._stars=[],this._focused=!1}onBeforeRendering(){this.calcState()}calcState(){this._stars=[];for(let e=1;e<this.max+1;e++){const i=Math.round((this.value-Math.floor(this.value))*10);let a=!1,r=this.value;Math.floor(this.value)+1===e&&i>2&&i<8?a=!0:i<=2?r=Math.floor(this.value):i>=8&&(r=Math.ceil(this.value)),this._stars.push({selected:e<=r,index:e,halfStar:a})}}_onclick(e){const i=e.target;if(!(i instanceof HTMLElement)||this.disabled||this.readonly)return;const a=i.getAttribute("data-ui5-value");a!==null&&(this.value=parseInt(a),this.value===1&&this._liveValue===1&&(this.value=0),this._liveValue!==this.value&&(this.fireDecoratorEvent("change"),this._liveValue=this.value))}_onkeydown(e){if(this.disabled||this.readonly){g(e)&&e.preventDefault();return}const i=A(e)||S(e),a=D(e)||q(e),r=g(e)||V(e),l=z(e),d=E(e),c=e.keyCode>=48&&e.keyCode<=57||e.keyCode>=96&&e.keyCode<=105;if(i||a||r||l||d||c){if(e.preventDefault(),i&&this.value>0)this.value=Math.round(this.value-1);else if(a&&this.value<this.max)this.value=Math.round(this.value+1);else if(r){const m=Math.round(this.value+1);this.value=m>this.max?0:m}else if(l)this.value=0;else if(d)this.value=this.max;else if(c){const m=parseInt(e.key);this.value=m>this.max?this.max:m}this.fireDecoratorEvent("change")}}_onfocusin(){this.disabled||(this._focused=!0,this._liveValue=this.value)}_onfocusout(){this._focused=!1}get effectiveTabIndex(){const e=this.getAttribute("tabindex");return this.disabled?-1:e?parseInt(e):0}get ratingTooltip(){return this.tooltip?this.tooltip:C()?this.defaultTooltip:void 0}get defaultTooltip(){return f.i18nBundle.getText(k)}get _ariaRoleDescription(){return f.i18nBundle.getText(U)}get _ariaDisabled(){return this.disabled||void 0}get _ariaLabel(){return P(this)}get _ariaDescription(){return this.required?f.i18nBundle.getText(L):void 0}get ariaReadonly(){return this.readonly?"true":void 0}};s([u({type:Number})],n.prototype,"value",void 0);s([u({type:Number})],n.prototype,"max",void 0);s([u()],n.prototype,"size",void 0);s([u({type:Boolean})],n.prototype,"disabled",void 0);s([u({type:Boolean})],n.prototype,"readonly",void 0);s([u()],n.prototype,"accessibleName",void 0);s([u()],n.prototype,"accessibleNameRef",void 0);s([u({type:Boolean})],n.prototype,"required",void 0);s([u()],n.prototype,"tooltip",void 0);s([u({type:Array})],n.prototype,"_stars",void 0);s([u({type:Boolean})],n.prototype,"_focused",void 0);s([M("@ui5/webcomponents")],n,"i18nBundle",void 0);n=f=s([I({tag:"ui5-rating-indicator",languageAware:!0,renderer:R,styles:H,template:F}),x("change",{bubbles:!0})],n);n.define();const v=T("ui5-rating-indicator",["accessibleName","accessibleNameRef","max","size","tooltip","value"],["disabled","readonly","required"],[],["change"]);v.displayName="RatingIndicator";try{v.displayName="RatingIndicator",v.__docgenInfo={description:`The Rating Indicator is used to display a specific number of icons that are used to rate an item.
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



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"RatingIndicator",props:{onChange:{defaultValue:null,description:`The event is fired when the value changes.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<RatingIndicatorDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that label the component.

**Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},max:{defaultValue:{value:"5"},description:"The number of displayed rating symbols.",name:"max",required:!1,type:{name:"number"}},readonly:{defaultValue:{value:"false"},description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:`Defines whether the component is required.

**Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"required",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:'"M"'},description:`Defines the size of the component.

**Note:** Available since [v2.6.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.6.0) of **@ui5/webcomponents**.`,name:"size",required:!1,type:{name:"enum",value:[{value:'"S"'},{value:'"L"'},{value:'"M"'},{value:'"S"'},{value:'"M"'},{value:'"L"'}]}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the tooltip of the component.

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



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"RatingIndicator",props:{onChange:{defaultValue:null,description:`The event is fired when the value changes.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<RatingIndicatorDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that label the component.

**Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},max:{defaultValue:{value:"5"},description:"The number of displayed rating symbols.",name:"max",required:!1,type:{name:"number"}},readonly:{defaultValue:{value:"false"},description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:`Defines whether the component is required.

**Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"required",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:'"M"'},description:`Defines the size of the component.

**Note:** Available since [v2.6.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.6.0) of **@ui5/webcomponents**.`,name:"size",required:!1,type:{name:"enum",value:[{value:'"S"'},{value:'"L"'},{value:'"M"'},{value:'"S"'},{value:'"M"'},{value:'"L"'}]}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the tooltip of the component.

**Note:** Available since [v1.19.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.19.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},value:{defaultValue:{value:"0"},description:`The indicated value of the rating.

**Note:** If you set a number which is not round, it would be shown as follows:

- 1.0 - 1.2 -> 1
- 1.3 - 1.7 -> 1.5
- 1.8 - 1.9 -> 2`,name:"value",required:!1,type:{name:"number"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{v as R};
