import{s as E,a as T,p as s,d as B}from"./withWebComponent-UxvJwa3A.js";import{g}from"./MarkedEvents-aYv14vsS.js";import{r as b,m as u,n as h,I}from"./Icons-1V9ErOOl.js";import{d as D}from"./i18nBundle-YDapVb1x.js";import{e as v}from"./Icon-qyLuyi2a.js";import{s as w}from"./slot-HSrR9XJ-.js";import"./decline-1i68oG_p.js";import{h as C,r as y}from"./UI5Element-_cJDeK03.js";import{L as o,c as x}from"./List-SPqW6yoZ.js";import A from"./RadioButton-9qzNHPH5.js";import k from"./CheckBox-vcMhKlRJ.js";import{b as N}from"./Button-kjIKsCqk.js";import{af as z,ag as M,ah as P,ai as q,aj as R}from"./i18n-defaults-IIWnNm9Y.js";import{H as $}from"./HasPopup-9BAMrqbD.js";import"./slim-arrow-right-KfBcfSXq.js";var f;(function(r){r.Inactive="Inactive",r.Active="Active",r.Detail="Detail",r.Navigation="Navigation"})(f||(f={}));const n=f,O="edit",S="M475 104q5 7 5 12 0 6-5 11L150 453q-4 4-8 4L32 480l22-110q0-5 4-9L384 36q4-4 11-4t11 4zm-121 99l-46-45L84 381l46 46zm87-88l-46-44-64 64 45 45z",H=!1,j="SAP-icons-v4",F="@ui5/webcomponents-icons";b(O,{pathData:S,ltr:H,collection:j,packageName:F});const K="edit",L="M505 94q7 7 7 18t-6 17L130 505q-7 7-18 7H26q-11 0-18.5-7.5T0 486v-86q1-10 6-16L382 7q7-7 18-7t18 7zm-55 18l-50-50-50 50 50 50zm-86 86l-50-50L62 400l50 50z",V=!1,U="SAP-icons-v5",W="@ui5/webcomponents-icons";b(K,{pathData:L,ltr:V,collection:U,packageName:W});C();const de="edit";y("@ui5/webcomponents-theming","sap_horizon",async()=>E);y("@ui5/webcomponents","sap_horizon",async()=>T);const X={packageName:"@ui5/webcomponents",fileName:"themes/ListItem.css.ts",content:`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host([actionable]:not([disabled])){cursor:pointer}:host([selected][actionable]:not([active]):hover){background:var(--sapList_Hover_SelectionBackground)}:host([active][actionable]),:host([selected][active][actionable]){background:var(--sapList_Active_Background)}:host([actionable]:not([active]):not([selected]):hover){background:var(--sapList_Hover_Background)}:host([active][actionable]) .ui5-li-root.ui5-li--focusable:focus,:host([active][actionable]) .ui5-li-root.ui5-li--focusable .ui5-li-content:focus{outline-color:var(--sapContent_ContrastFocusColor)}:host([navigated]) .ui5-li-root .ui5-li-navigated{width:.1875rem;position:absolute;right:0;top:0;bottom:0;background-color:var(--sapList_SelectionBorderColor)}:host([active][actionable]) .ui5-li-root .ui5-li-icon{color:var(--sapList_Active_TextColor)}:host([active][actionable]) .ui5-li-title,:host([active][actionable]) .ui5-li-desc,:host([active][actionable]) .ui5-li-additional-text{color:var(--sapList_Active_TextColor)}:host([additional-text-state="Warning"]) .ui5-li-additional-text{color:var(--sapCriticalTextColor)}:host([additional-text-state="Success"]) .ui5-li-additional-text{color:var(--sapPositiveTextColor)}:host([additional-text-state="Error"]) .ui5-li-additional-text{color:var(--sapNegativeTextColor)}:host([additional-text-state="Information"]) .ui5-li-additional-text{color:var(--sapInformativeTextColor)}:host([has-title][description]){height:5rem}:host([has-title][image]){height:5rem}:host([_has-image-content]){height:5rem}:host([image]) .ui5-li-content{height:3rem}:host([description]) .ui5-li-root{padding:1rem}:host([description]) .ui5-li-content{height:3rem}:host([has-title][description]) .ui5-li-title{padding-bottom:.375rem}.ui5-li-text-wrapper{display:flex;flex-direction:column;flex:auto;min-width:1px;line-height:normal}:host([description]) .ui5-li-text-wrapper{height:100%;justify-content:space-between;padding:.125rem 0}.ui5-li-description-info-wrapper{display:flex;justify-content:space-between}.ui5-li-title{color:var(--sapList_TextColor);font-size:var(--_ui5-v1-22-0-rc-3_list_item_title_size)}.ui5-li-additional-text,:host(:not([wrapping-type="Normal"])) .ui5-li-title,.ui5-li-desc{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host([wrapping-type="Normal"]){height:auto}:host([wrapping-type="Normal"]) .ui5-li-content{margin:var(--_ui5-v1-22-0-rc-3_list_item_content_vertical_offset) 0}.ui5-li-desc{color:var(--sapContent_LabelColor);font-size:var(--sapFontSize)}.ui5-li-additional-text{margin:0 .25rem;color:var(--sapNeutralTextColor);font-size:var(--sapFontSize);min-width:3.75rem;text-align:end}:host([description]) .ui5-li-additional-text{align-self:flex-end}.ui5-li-img{width:var(--_ui5-v1-22-0-rc-3_list_item_img_size);height:var(--_ui5-v1-22-0-rc-3_list_item_img_size);border-radius:var(--ui5-v1-22-0-rc-3-avatar-border-radius)}.ui5-li-img,.ui5-li-imgContent{min-width:var(--_ui5-v1-22-0-rc-3_list_item_img_size);min-height:var(--_ui5-v1-22-0-rc-3_list_item_img_size);margin-top:var(--_ui5-v1-22-0-rc-3_list_item_img_top_margin);margin-bottom:var(--_ui5-v1-22-0-rc-3_list_item_img_bottom_margin);margin-inline-end:var(--_ui5-v1-22-0-rc-3_list_item_img_hn_margin)}.ui5-li-img-inner{object-fit:contain}.ui5-li-icon{min-width:var(--_ui5-v1-22-0-rc-3_list_item_icon_size);min-height:var(--_ui5-v1-22-0-rc-3_list_item_icon_size);color:var(--sapContent_NonInteractiveIconColor);padding-inline-end:var(--_ui5-v1-22-0-rc-3_list_item_icon_padding-inline-end)}.ui5-li-content{display:flex;align-items:center;flex:auto;overflow:hidden}.ui5-li-detailbtn,.ui5-li-deletebtn{display:flex;align-items:center;margin-left:var(--_ui5-v1-22-0-rc-3_list_buttons_left_space)}.ui5-li-multisel-cb,.ui5-li-singlesel-radiobtn{flex-shrink:0}:host([description]) .ui5-li-singlesel-radiobtn{align-self:flex-start;margin-top:var(--_ui5-v1-22-0-rc-3_list_item_selection_btn_margin_top)}:host([description]) .ui5-li-multisel-cb{align-self:flex-start;margin-top:var(--_ui5-v1-22-0-rc-3_list_item_selection_btn_margin_top)}:host([_mode="SingleSelectBegin"]) .ui5-li-root{padding-inline:0 1rem}:host([_mode="MultiSelect"]) .ui5-li-root{padding-inline:0 1rem}:host([_mode="SingleSelectEnd"]) .ui5-li-root{padding-inline:1rem 0}:host [ui5-checkbox].ui5-li-singlesel-radiobtn{margin-right:var(--_ui5-v1-22-0-rc-3_list_item_cb_margin_right)}
`};var i=function(r,e,a,d){var p=arguments.length,l=p<3?e:d===null?d=Object.getOwnPropertyDescriptor(e,a):d,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(r,e,a,d);else for(var _=r.length-1;_>=0;_--)(m=r[_])&&(l=(p<3?m(l):p>3?m(e,a,l):m(e,a))||l);return p>3&&l&&Object.defineProperty(e,a,l),l},c;let t=c=class extends x{constructor(){super(),this.deactivateByKey=a=>{u(a)&&this.deactivate()},this.deactivate=()=>{this.active&&(this.active=!1)};const e=a=>{this._onmousedown(a)};this._ontouchstart={handleEvent:e,passive:!0}}onBeforeRendering(){this.actionable=(this.type===n.Active||this.type===n.Navigation)&&this._mode!==o.Delete}onEnterDOM(){document.addEventListener("mouseup",this.deactivate),document.addEventListener("touchend",this.deactivate),document.addEventListener("keyup",this.deactivateByKey)}onExitDOM(){document.removeEventListener("mouseup",this.deactivate),document.removeEventListener("keyup",this.deactivateByKey),document.removeEventListener("touchend",this.deactivate)}_onkeydown(e){super._onkeydown(e);const a=this.type===n.Active,d=this.typeNavigation;h(e)&&e.preventDefault(),(h(e)||u(e))&&(a||d)&&this.activate(),u(e)&&this.fireItemPress(e)}_onkeyup(e){(h(e)||u(e))&&this.deactivate(),h(e)&&this.fireItemPress(e),this.modeDelete&&I(e)&&this.onDelete()}_onmousedown(e){g(e)!=="button"&&this.activate()}_onmouseup(e){g(e)!=="button"&&this.deactivate()}_ontouchend(e){this._onmouseup(e)}_onfocusout(){super._onfocusout(),this.deactivate()}_onclick(e){g(e)!=="button"&&this.fireItemPress(e)}onMultiSelectionComponentPress(e){this.isInactive||this.fireEvent("_selection-requested",{item:this,selected:e.target.checked,selectionComponentPressed:!0})}onSingleSelectionComponentPress(e){this.isInactive||this.fireEvent("_selection-requested",{item:this,selected:!e.target.checked,selectionComponentPressed:!0})}activate(){(this.type===n.Active||this.type===n.Navigation)&&(this.active=!0)}onDelete(){this.fireEvent("_selection-requested",{item:this,selectionComponentPressed:!1})}onDetailClick(){this.fireEvent("detail-click",{item:this,selected:this.selected})}fireItemPress(e){this.isInactive||(u(e)&&e.preventDefault(),this.fireEvent("_press",{item:this,selected:this.selected,key:e.key}))}get isInactive(){return this.type===n.Inactive||this.type===n.Detail}get placeSelectionElementBefore(){return this._mode===o.MultiSelect||this._mode===o.SingleSelectBegin}get placeSelectionElementAfter(){return!this.placeSelectionElementBefore&&(this._mode===o.SingleSelectEnd||this._mode===o.Delete)}get modeSingleSelect(){return[o.SingleSelectBegin,o.SingleSelectEnd,o.SingleSelect].includes(this._mode)}get modeMultiSelect(){return this._mode===o.MultiSelect}get modeDelete(){return this._mode===o.Delete}get renderDeleteButton(){return this.modeDelete}get typeDetail(){return this.type===n.Detail}get typeNavigation(){return this.type===n.Navigation}get typeActive(){return this.type===n.Active}get _ariaSelected(){if(this.modeMultiSelect||this.modeSingleSelect)return this.selected}get ariaSelectedText(){let e;return this._ariaSelected!==void 0&&(e=this._ariaSelected?c.i18nBundle.getText(z):c.i18nBundle.getText(M)),e}get deleteText(){return c.i18nBundle.getText(P)}get hasDeleteButtonSlot(){return!!this.deleteButton.length}get _accessibleNameRef(){return this.accessibleName?`${this._id}-invisibleText`:`${this._id}-content ${this._id}-invisibleText`}get _accInfo(){return{role:this.accessibleRole||this.role,ariaExpanded:void 0,ariaLevel:void 0,ariaLabel:c.i18nBundle.getText(q),ariaLabelRadioButton:c.i18nBundle.getText(R),ariaSelectedText:this.ariaSelectedText,ariaHaspopup:this.ariaHaspopup||void 0,setsize:this.accessibilityAttributes.ariaSetsize,posinset:this.accessibilityAttributes.ariaPosinset}}get hasConfigurableMode(){return!0}static async onDefine(){c.i18nBundle=await D("@ui5/webcomponents")}};i([s({type:n,defaultValue:n.Active})],t.prototype,"type",void 0);i([s({type:Object})],t.prototype,"accessibilityAttributes",void 0);i([s({type:Boolean})],t.prototype,"navigated",void 0);i([s({type:Boolean})],t.prototype,"active",void 0);i([s()],t.prototype,"title",void 0);i([s({type:Boolean})],t.prototype,"actionable",void 0);i([s({defaultValue:"listitem"})],t.prototype,"role",void 0);i([s({defaultValue:void 0,noAttribute:!0})],t.prototype,"accessibleRoleDescription",void 0);i([s()],t.prototype,"accessibleRole",void 0);i([s({type:o,defaultValue:o.None})],t.prototype,"_mode",void 0);i([s({type:$,noAttribute:!0})],t.prototype,"ariaHaspopup",void 0);i([w()],t.prototype,"deleteButton",void 0);t=c=i([B({languageAware:!0,styles:[x.styles,X],dependencies:[N,A,k]}),v("detail-click"),v("_press"),v("_focused"),v("_selection-requested")],t);const pe=t;export{pe as L,n as a,de as e};
