import{p as x,d as T,s as r,m as C,l as E,b as _,j as a}from"./jsx-runtime-cXES_1K3.js";import{b as p,i as v,s as D,V as w}from"./Keys-B3oBAe0t.js";import{t as B}from"./getActiveElement-kltGt_DR.js";import{H as A}from"./FocusableElements-D4ksDlVA.js";import{l as b}from"./event-strict-DgQLNDEV.js";import{d as L}from"./slot-_4yKMUwC.js";import{i as N}from"./i18n-CjR4HGlq.js";import{d as R}from"./decline-CR10Cnxn.js";import{e as k}from"./edit-DJjklG_w.js";import{b as l}from"./List-CkWyokyd.js";import{a as y}from"./ListItemGroup-BjeZRMb8.js";import{H as M,I as P,J as z,K as $,N as O}from"./i18n-defaults-BXUwkpCs.js";import{d as j}from"./parameters-bundle.css-DHLNbl9v.js";import{l as F}from"./ListItemAdditionalText.css-BDotrGVh.js";import{i as K}from"./slim-arrow-right-SPlfUwQV.js";import{a as I}from"./Button-9YaJ65nU.js";import{I as H}from"./Icon-DONP1ba8.js";import{R as q}from"./RadioButton-0JptCjha.js";import{C as U}from"./CheckBox-h1ngStLZ.js";var f;(function(t){t.None="None",t.Positive="Positive",t.Critical="Critical",t.Negative="Negative",t.Information="Information"})(f||(f={}));const J=f;var n;(function(t){t.Inactive="Inactive",t.Active="Active",t.Detail="Detail",t.Navigation="Navigation"})(n||(n={}));x("@ui5/webcomponents-theming","sap_horizon",async()=>T);x("@ui5/webcomponents","sap_horizon",async()=>j);const V=`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host([navigated]) .ui5-li-root .ui5-li-navigated{width:.1875rem;position:absolute;right:0;top:0;bottom:0;background-color:var(--sapList_SelectionBorderColor)}:host([active][actionable]) .ui5-li-root .ui5-li-icon{color:var(--sapList_Active_TextColor)}:host([active][actionable]) .ui5-li-title,:host([active][actionable]) .ui5-li-desc,:host([active][actionable]) .ui5-li-additional-text{color:var(--sapList_Active_TextColor)}:host([active][actionable]) .ui5-li-additional-text{text-shadow:none}:host([additional-text-state="Critical"]) .ui5-li-additional-text{color:var(--sapCriticalTextColor)}:host([additional-text-state="Positive"]) .ui5-li-additional-text{color:var(--sapPositiveTextColor)}:host([additional-text-state="Negative"]) .ui5-li-additional-text{color:var(--sapNegativeTextColor)}:host([additional-text-state="Information"]) .ui5-li-additional-text{color:var(--sapInformativeTextColor)}:host([has-title][description]){height:5rem}:host([has-title][image]){height:5rem}:host([_has-image]){height:5rem}:host([image]) .ui5-li-content{height:3rem}::slotted(img[slot="image"]){width:var(--_ui5-v2-8-0_list_item_img_size);height:var(--_ui5-v2-8-0_list_item_img_size);border-radius:var(--ui5-v2-8-0-avatar-border-radius);object-fit:contain}:host([description]) .ui5-li-root{padding:1rem}:host([description]) .ui5-li-content{height:3rem}:host([has-title][description]) .ui5-li-title{padding-bottom:.375rem}.ui5-li-text-wrapper{flex-direction:column}:host([description]) .ui5-li-text-wrapper{height:100%;justify-content:space-between;padding:.125rem 0}.ui5-li-description-info-wrapper{display:flex;justify-content:space-between}.ui5-li-additional-text,:host(:not([wrapping-type="Normal"])) .ui5-li-title,.ui5-li-desc{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host([wrapping-type="Normal"]){height:auto}:host([wrapping-type="Normal"]) .ui5-li-content{margin:var(--_ui5-v2-8-0_list_item_content_vertical_offset) 0}.ui5-li-desc{color:var(--sapContent_LabelColor);font-size:var(--sapFontSize)}:host([description]) .ui5-li-additional-text{align-self:flex-end}.ui5-li-image{min-width:var(--_ui5-v2-8-0_list_item_img_size);min-height:var(--_ui5-v2-8-0_list_item_img_size);margin-top:var(--_ui5-v2-8-0_list_item_img_top_margin);margin-bottom:var(--_ui5-v2-8-0_list_item_img_bottom_margin);margin-inline-end:var(--_ui5-v2-8-0_list_item_img_hn_margin)}.ui5-li-icon{min-width:var(--_ui5-v2-8-0_list_item_icon_size);min-height:var(--_ui5-v2-8-0_list_item_icon_size);color:var(--sapContent_NonInteractiveIconColor);padding-inline-end:var(--_ui5-v2-8-0_list_item_icon_padding-inline-end)}.ui5-li-detailbtn,.ui5-li-deletebtn{display:flex;align-items:center;margin-left:var(--_ui5-v2-8-0_list_buttons_left_space)}.ui5-li-multisel-cb,.ui5-li-singlesel-radiobtn{flex-shrink:0}:host([description]) .ui5-li-singlesel-radiobtn{align-self:flex-start;margin-top:var(--_ui5-v2-8-0_list_item_selection_btn_margin_top)}:host([description]) .ui5-li-multisel-cb{align-self:flex-start;margin-top:var(--_ui5-v2-8-0_list_item_selection_btn_margin_top)}:host([_selection-mode="SingleStart"]) .ui5-li-root{padding-inline:0 1rem}:host([_selection-mode="Multiple"]) .ui5-li-root{padding-inline:0 1rem}:host([_selection-mode="SingleEnd"]) .ui5-li-root{padding-inline:1rem 0}:host [ui5-checkbox].ui5-li-singlesel-radiobtn{margin-right:var(--_ui5-v2-8-0_list_item_cb_margin_right)}.ui5-li-highlight{position:absolute;width:.375rem;bottom:0;left:0;top:0;border-inline-end:.0625rem solid var(--ui5-v2-8-0-listitem-background-color);box-sizing:border-box}:host([highlight="Negative"]) .ui5-li-highlight{background:var(--sapNegativeTextColor)}:host([highlight="Critical"]) .ui5-li-highlight{background:var(--sapCriticalTextColor)}:host([highlight="Positive"]) .ui5-li-highlight{background:var(--sapPositiveTextColor)}:host([highlight="Information"]) .ui5-li-highlight{background:var(--sapInformativeTextColor)}
`;var o=function(t,e,c,d){var m=arguments.length,s=m<3?e:d===null?d=Object.getOwnPropertyDescriptor(e,c):d,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,c,d);else for(var g=t.length-1;g>=0;g--)(h=t[g])&&(s=(m<3?h(s):m>3?h(e,c,s):h(e,c))||s);return m>3&&s&&Object.defineProperty(e,c,s),s},u;let i=u=class extends y{constructor(){super(),this.type="Active",this.accessibilityAttributes={},this.navigated=!1,this.active=!1,this.highlight="None",this.accessibleRole="ListItem",this._selectionMode="None",this.deactivateByKey=e=>{p(e)&&this.deactivate()},this.deactivate=()=>{this.active&&(this.active=!1)}}onBeforeRendering(){super.onBeforeRendering(),this.actionable=(this.type===n.Active||this.type===n.Navigation)&&this._selectionMode!==l.Delete}onEnterDOM(){super.onEnterDOM(),document.addEventListener("mouseup",this.deactivate),document.addEventListener("touchend",this.deactivate),document.addEventListener("keyup",this.deactivateByKey)}onExitDOM(){document.removeEventListener("mouseup",this.deactivate),document.removeEventListener("keyup",this.deactivateByKey),document.removeEventListener("touchend",this.deactivate)}async _onkeydown(e){if((v(e)||p(e))&&this._isTargetSelfFocusDomRef(e))return;super._onkeydown(e);const c=this.type===n.Active,d=this.typeNavigation;if((v(e)||p(e))&&(c||d)&&this.activate(),D(e)){const m=B(),s=this.getFocusDomRef();if(m===s){const h=await A(s);h==null||h.focus()}else s.focus()}}_onkeyup(e){super._onkeyup(e),(v(e)||p(e))&&this.deactivate(),this.modeDelete&&w(e)&&this.onDelete()}_onmousedown(){this.activate()}_onmouseup(){this.getFocusDomRef().matches(":has(:focus-within)")||this.deactivate()}_ontouchend(){this._onmouseup()}_onfocusin(e){super._onfocusin(e),e.target!==this.getFocusDomRef()&&this.deactivate()}_onfocusout(e){e.target===this.getFocusDomRef()&&this.deactivate()}_ondragstart(e){e.dataTransfer&&e.target===this._listItem&&(this.setAttribute("data-moving",""),e.dataTransfer.dropEffect="move",e.dataTransfer.effectAllowed="move")}_ondragend(e){e.target===this._listItem&&this.removeAttribute("data-moving")}_isTargetSelfFocusDomRef(e){const c=e.target,d=this.getFocusDomRef();return c!==d}onMultiSelectionComponentPress(e){this.isInactive||this.fireDecoratorEvent("selection-requested",{item:this,selected:e.target.checked,selectionComponentPressed:!0})}onSingleSelectionComponentPress(e){this.isInactive||this.fireDecoratorEvent("selection-requested",{item:this,selected:!e.target.checked,selectionComponentPressed:!0})}activate(){(this.type===n.Active||this.type===n.Navigation)&&(this.active=!0)}onDelete(){this.fireDecoratorEvent("selection-requested",{item:this,selectionComponentPressed:!1})}onDetailClick(){this.fireDecoratorEvent("detail-click",{item:this,selected:this.selected})}fireItemPress(e){this.isInactive||(super.fireItemPress(e),document.activeElement!==this&&this.focus())}get isInactive(){return this.type===n.Inactive||this.type===n.Detail}get placeSelectionElementBefore(){return this._selectionMode===l.Multiple||this._selectionMode===l.SingleStart}get placeSelectionElementAfter(){return!this.placeSelectionElementBefore&&(this._selectionMode===l.SingleEnd||this._selectionMode===l.Delete)}get modeSingleSelect(){return[l.SingleStart,l.SingleEnd,l.Single].includes(this._selectionMode)}get modeMultiple(){return this._selectionMode===l.Multiple}get modeDelete(){return this._selectionMode===l.Delete}get typeDetail(){return this.type===n.Detail}get typeNavigation(){return this.type===n.Navigation}get typeActive(){return this.type===n.Active}get _ariaSelected(){if(this.modeMultiple||this.modeSingleSelect)return this.selected}get listItemAccessibleRole(){return this._forcedAccessibleRole||this.accessibleRole.toLowerCase()}get ariaSelectedText(){let e;return this._ariaSelected!==void 0&&(e=this._ariaSelected?u.i18nBundle.getText(M):u.i18nBundle.getText(P)),e}get deleteText(){return u.i18nBundle.getText(z)}get hasDeleteButtonSlot(){return!!this.deleteButton.length}get _accessibleNameRef(){return this.accessibleName?`${this._id}-invisibleText`:`${this._id}-content ${this._id}-invisibleText`}get _accInfo(){return{role:this.listItemAccessibleRole,ariaExpanded:void 0,ariaLevel:void 0,ariaLabel:u.i18nBundle.getText(O),ariaLabelRadioButton:u.i18nBundle.getText($),ariaSelectedText:this.ariaSelectedText,ariaHaspopup:this.accessibilityAttributes.hasPopup,setsize:this.accessibilityAttributes.ariaSetsize,posinset:this.accessibilityAttributes.ariaPosinset,tooltip:this.tooltip}}get _hasHighlightColor(){return this.highlight!==J.None}get hasConfigurableMode(){return!0}get _listItem(){return this.shadowRoot.querySelector("li")}};o([r()],i.prototype,"type",void 0);o([r({type:Object})],i.prototype,"accessibilityAttributes",void 0);o([r({type:Boolean})],i.prototype,"navigated",void 0);o([r()],i.prototype,"tooltip",void 0);o([r({type:Boolean})],i.prototype,"active",void 0);o([r()],i.prototype,"highlight",void 0);o([r({type:Boolean})],i.prototype,"selected",void 0);o([r()],i.prototype,"accessibleRole",void 0);o([r()],i.prototype,"_forcedAccessibleRole",void 0);o([r()],i.prototype,"_selectionMode",void 0);o([L()],i.prototype,"deleteButton",void 0);o([N("@ui5/webcomponents")],i,"i18nBundle",void 0);i=u=o([C({languageAware:!0,renderer:E,styles:[y.styles,F,V]}),b("detail-click",{bubbles:!0}),b("selection-requested",{bubbles:!0})],i);const xe=i,X={listItemPreContent:G,listItemContent:Q,imageBegin:W,iconBegin:Y,iconEnd:Z,selectionElement:S};function ye(t){const e={...X,...t};return _("li",{part:"native-li","data-sap-focus-ref":!0,tabindex:this._effectiveTabIndex,class:this.classes.main,onFocusIn:this._onfocusin,onFocusOut:this._onfocusout,onKeyUp:this._onkeyup,onKeyDown:this._onkeydown,onMouseUp:this._onmouseup,onMouseDown:this._onmousedown,onTouchStart:this._onmousedown,onTouchEnd:this._ontouchend,onClick:this._onclick,draggable:this.movable,onDragStart:this._ondragstart,onDragEnd:this._ondragend,role:this._accInfo.role,title:this._accInfo.tooltip,"aria-expanded":this._accInfo.ariaExpanded,"aria-level":this._accInfo.ariaLevel,"aria-haspopup":this._accInfo.ariaHaspopup,"aria-posinset":this._accInfo.posinset,"aria-setsize":this._accInfo.setsize,"aria-describedby":`${this._id}-invisibleText-describedby`,"aria-labelledby":this._accessibleNameRef,"aria-disabled":this._ariaDisabled,"aria-selected":this._accInfo.ariaSelected,"aria-checked":this._accInfo.ariaChecked,"aria-owns":this._accInfo.ariaOwns,"aria-keyshortcuts":this._accInfo.ariaKeyShortcuts,children:[e.listItemPreContent.call(this),this.placeSelectionElementBefore&&S.call(this),this._hasHighlightColor&&a("div",{class:"ui5-li-highlight"}),_("div",{part:"content",id:`${this._id}-content`,class:"ui5-li-content",children:[e.imageBegin.call(this),e.iconBegin.call(this),e.listItemContent.call(this)]}),e.iconEnd.call(this),this.typeDetail&&a("div",{class:"ui5-li-detailbtn",children:a(I,{part:"detail-button",design:"Transparent",onClick:this.onDetailClick,icon:k})}),this.typeNavigation&&a(H,{name:K}),this.navigated&&a("div",{class:"ui5-li-navigated"}),this.placeSelectionElementAfter&&e.selectionElement.call(this),_("span",{id:`${this._id}-invisibleText`,class:"ui5-hidden-text",children:[this._accInfo.listItemAriaLabel,this.accessibleName]}),a("span",{id:`${this._id}-invisibleText-describedby`,class:"ui5-hidden-text",children:this._accInfo.ariaSelectedText})]})}function G(){}function Q(){}function W(){}function Y(){}function Z(){}function S(){switch(!0){case this.modeSingleSelect:return a(q,{part:"radio",disabled:this.isInactive,accessibleName:this._accInfo.ariaLabelRadioButton,tabindex:-1,id:`${this._id}-singleSelectionElement`,class:"ui5-li-singlesel-radiobtn",checked:this.selected,onChange:this.onSingleSelectionComponentPress});case this.modeMultiple:return a(U,{part:"checkbox",disabled:this.isInactive,indeterminate:this.indeterminate,tabindex:-1,id:`${this._id}-multiSelectionElement`,class:"ui5-li-multisel-cb",checked:this.selected,accessibleName:this._accInfo.ariaLabel,onChange:this.onMultiSelectionComponentPress});case this.modeDelete:return a("div",{class:"ui5-li-deletebtn",children:this.hasDeleteButtonSlot?a("slot",{name:"deleteButton"}):a(I,{part:"delete-button",tabindex:-1,"data-sap-no-tab-ref":!0,id:`${this._id}-deleteSelectionElement`,design:"Transparent",icon:R,onClick:this.onDelete,tooltip:this.deleteText})})}}export{ye as L,xe as a,n as b};
