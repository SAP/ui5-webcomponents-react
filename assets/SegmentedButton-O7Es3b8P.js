import{U as x}from"./UI5Element-9EXj3atz.js";import{a as _,l as n,b as v,p as c,c as S,s as T,f as k}from"./withWebComponent-LTFbYRvs.js";import{e as E}from"./event-lM5HanI-.js";import{s as C}from"./slot-HSrR9XJ-.js";import{I as D}from"./ItemNavigation-F0c19DRy.js";import{b as N}from"./i18nBundle-j8vDD4VY.js";import"./utils-d3BcYjeO.js";import{m as O,n as B}from"./Keys-ZEuNsqmZ.js";import{ai as R,aj as P,ak as z}from"./i18n-defaults-X1FTyPSK.js";import{I as y}from"./Integer-kog98579.js";import M from"./ToggleButton-RjjppzzK.js";import{B as I}from"./Button-DcwyQdV9.js";import{I as j}from"./Icon-kyep1SqZ.js";import{r as $}from"./Boot-vTaFuwdG.js";import{s as A}from"./parameters-bundle.css-EKzfhWK3.js";import{a as H}from"./CustomElementsScopeUtils-orabJqjR.js";var f;(function(i){i.SingleSelect="SingleSelect",i.MultiSelect="MultiSelect"})(f||(f={}));const h=f;function V(i,e,t){return _`<li role="option" aria-roledescription="${n(this.ariaDescription)}" aria-posinset="${n(this.posInSet)}" aria-setsize="${n(this.sizeOfSet)}" aria-selected="${n(this.pressed)}" class="ui5-button-root" aria-disabled="${n(this.disabled)}" data-sap-focus-ref  @focusout=${this._onfocusout} @focusin=${this._onfocusin} @click=${this._onclick} @mousedown=${this._onmousedown} @mouseup=${this._onmouseup} @keydown=${this._onkeydown} @keyup=${this._onkeyup} @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" tabindex=${n(this.tabIndexValue)} aria-label="${n(this.ariaLabelText)}" title="${n(this.tooltip)}">${this.icon?U.call(this,i,e,t):void 0}<span id="${n(this._id)}-content" class="ui5-button-text"><bdi><slot></slot></bdi></span></li> `}function U(i,e,t){return t?_`<${v("ui5-icon",e,t)} class="ui5-button-icon" name="${n(this.icon)}" part="icon" ?show-tooltip=${this.showIconTooltip}></${v("ui5-icon",e,t)}>`:_`<ui5-icon class="ui5-button-icon" name="${n(this.icon)}" part="icon" ?show-tooltip=${this.showIconTooltip}></ui5-icon>`}var m=function(i,e,t,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,s);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(r<3?a(o):r>3?a(e,t,o):a(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o},b;let d=b=class extends M{get ariaDescription(){return b.i18nBundle.getText(R)}};m([c({type:I,defaultValue:I.Default})],d.prototype,"design",void 0);m([c({type:Boolean})],d.prototype,"iconEnd",void 0);m([c({type:Boolean})],d.prototype,"submits",void 0);m([c({validator:y,defaultValue:0})],d.prototype,"posInSet",void 0);m([c({validator:y,defaultValue:0})],d.prototype,"sizeOfSet",void 0);d=b=m([S({tag:"ui5-segmented-button-item",template:V,dependencies:[j]})],d);d.define();const w=d,le=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"}));function F(i,e,t){return _`<ul @click="${this._onclick}" @mousedown="${this._onmousedown}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @focusin="${this._onfocusin}" class="ui5-segmented-button-root" role="listbox" aria-multiselectable="true" aria-describedby="${n(this._id)}-invisibleText" aria-roledescription=${n(this.ariaDescription)} aria-label=${n(this.accessibleName)}><slot></slot><span id="${n(this._id)}-invisibleText" class="ui5-hidden-text">${n(this.ariaDescribedBy)}</span></ul>`}$("@ui5/webcomponents-theming","sap_horizon",async()=>T);$("@ui5/webcomponents","sap_horizon",async()=>A);const L={packageName:"@ui5/webcomponents",fileName:"themes/SegmentedButton.css.ts",content:`:host{vertical-align:middle}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block;min-width:calc(var(--_ui5-v1-23-1_segmented_btn_items_count) * 2.5rem)}.ui5-segmented-button-root{width:inherit;display:grid;grid-template-columns:repeat(var(--_ui5-v1-23-1_segmented_btn_items_count),minmax(2.5rem,1fr));margin:0;padding:0;background-color:var(--sapButton_Background);border-radius:var(--sapButton_BorderCornerRadius);box-shadow:inset 0 0 0 var(--sapButton_BorderWidth) var(--sapButton_BorderColor)}::slotted([ui5-segmented-button-item]){border-radius:var(--_ui5-v1-23-1_segmented_btn_inner_border_radius);border-color:var(--_ui5-v1-23-1_segmented_btn_border_color);background-color:var(--_ui5-v1-23-1_segmented_btn_background_color);height:var(--_ui5-v1-23-1_button_base_height);min-width:2.5rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;z-index:initial}::slotted([ui5-segmented-button-item]:hover){z-index:2;box-shadow:var(--_ui5-v1-23-1_segmented_btn_hover_box_shadow);border-color:var(--sapButton_Hover_BorderColor);background-color:var(--sapButton_Hover_Background)}::slotted([ui5-segmented-button-item][pressed]),::slotted([ui5-segmented-button-item][active]){border-color:var(--sapButton_Selected_BorderColor);background-color:var(--sapButton_Selected_Background);color:var(--sapButton_Selected_TextColor)}::slotted([ui5-segmented-button-item][pressed]:hover){border-color:var(--sapButton_Selected_Hover_BorderColor);background-color:var(--sapButton_Selected_Hover_Background);color:var(--sapButton_Selected_TextColor)}::slotted([ui5-segmented-button-item]:last-child){border-start-end-radius:var(--sapButton_BorderCornerRadius);border-end-end-radius:var(--sapButton_BorderCornerRadius)}::slotted([ui5-segmented-button-item]:first-child){border-start-start-radius:var(--sapButton_BorderCornerRadius);border-end-start-radius:var(--sapButton_BorderCornerRadius)}::slotted([ui5-segmented-button-item]:not(:first-child)){border-left-width:var(--_ui5-v1-23-1_segmented_btn_item_border_left);border-right-width:var(--_ui5-v1-23-1_segmented_btn_item_border_right)}::slotted([ui5-segmented-button-item][active]:not([active]):hover){border-color:var(--sapButton_BorderColor)}::slotted([ui5-segmented-button-item][active]:hover){border-color:var(--sapButton_Selected_BorderColor)}
`};var g=function(i,e,t,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,s);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(r<3?a(o):r>3?a(e,t,o):a(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o},p;let u=p=class extends x{static async onDefine(){p.i18nBundle=await N("@ui5/webcomponents")}constructor(){super(),this._itemNavigation=new D(this,{getItemsCallback:()=>this.getSlottedNodes("items")}),this.hasPreviouslyFocusedItem=!1}onBeforeRendering(){const e=this.getSlottedNodes("items");e.forEach((t,s,r)=>{t.posInSet=s+1,t.sizeOfSet=r.length}),this.normalizeSelection(),this.style.setProperty(H("--_ui5_segmented_btn_items_count"),`${e.length}`)}normalizeSelection(){if(this.items.length)switch(this.mode){case h.SingleSelect:{const e=this.selectedItems,t=this._selectedItem?e.indexOf(this._selectedItem):-1;this._selectedItem&&e.length>1&&e.splice(t,1);const s=e.pop()||this.items[0];this._applySingleSelection(s);break}}}_selectItem(e){const t=e.target,s=t.hasAttribute("ui5-segmented-button-item");if(!(t.disabled||t===this.getDomRef()||!s)){switch(this.mode){case h.MultiSelect:e instanceof KeyboardEvent&&(t.pressed=!t.pressed);break;default:this._applySingleSelection(t)}return this.fireEvent("selection-change",{selectedItem:t,selectedItems:this.selectedItems}),this._itemNavigation.setCurrentItem(t),t.focus(),this}}_applySingleSelection(e){this.items.forEach(t=>{t.pressed=!1}),e.pressed=!0,this._selectedItem=e}_onclick(e){this._selectItem(e)}_onkeydown(e){O(e)?this._selectItem(e):B(e)&&e.preventDefault()}_onkeyup(e){B(e)&&this._selectItem(e)}_onmousedown(e){const t=e.target;t.hasAttribute("ui5-segmented-button-item")&&(t.focus(),this._itemNavigation.setCurrentItem(t),this.hasPreviouslyFocusedItem=!0)}_onfocusin(e){if(this.hasPreviouslyFocusedItem){this._itemNavigation.setCurrentItem(e.target);return}this.selectedItems.length&&(this.selectedItems[0].focus(),this._itemNavigation.setCurrentItem(this.selectedItems[0]),this.hasPreviouslyFocusedItem=!0)}get selectedItem(){return this._selectedItem}get selectedItems(){return this.items.filter(e=>e.pressed)}get ariaDescribedBy(){return p.i18nBundle.getText(P)}get ariaDescription(){return p.i18nBundle.getText(z)}};g([c({defaultValue:void 0})],u.prototype,"accessibleName",void 0);g([c({type:h,defaultValue:h.SingleSelect})],u.prototype,"mode",void 0);g([C({type:HTMLElement,invalidateOnChildChange:!0,default:!0})],u.prototype,"items",void 0);u=p=g([S({tag:"ui5-segmented-button",languageAware:!0,renderer:k,template:F,styles:L,dependencies:[w]}),E("selection-change",{detail:{selectedItem:{type:HTMLElement},selectedItems:{type:Array}}})],u);u.define();const G=u,ce=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));export{G as S,w as a,le as b,ce as c};
