import{j as o,l as t,k as s,f as _,s as C,a as u,m as T,p as x,I as W}from"./withWebComponent-YgbOdVTg.js";import{d as P}from"./slot-_4yKMUwC.js";import{s as $}from"./event-Dq0fpeHi.js";import{d as w,f as U,C as y,K as k,b as q}from"./Keys-D1SxbTOd.js";import{f as R}from"./i18nBundle-CRmnyxU0.js";import"./slim-arrow-right-3K9vkBr-.js";import{e as F}from"./Popover-COhsAIU7.js";import{R as A}from"./ResponsivePopover-CMO3c_7J.js";import{b as G}from"./Button-CkiVa5Iu.js";import{c as S,f as z,d as V}from"./List-ByU11J9R.js";import{B as j}from"./BusyIndicator-DuGIcogQ.js";import{t as Y}from"./AriaHasPopup-BTjm9d28.js";import"./nav-back-CZQY5upD.js";import{I as J}from"./Icon-DDA-V63S.js";import{o as I}from"./class-map-D12-v36h.js";import{b5 as Q,b6 as H,b7 as K}from"./i18n-defaults-PZPXNaBc.js";import{s as E}from"./parameters-bundle.css-Bga-3Zi8.js";import{L as X}from"./ListItemCustom-jK98N8lD.js";function Z(n,e,i){return o`<li part="native-li" data-sap-focus-ref tabindex="${t(this._effectiveTabIndex)}" class="${I(this.classes.main)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" @mouseup="${this._onmouseup}" @mousedown="${this._onmousedown}" @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" @click="${this._onclick}" draggable="${t(this.movable)}" @dragstart="${this._ondragstart}" @dragend="${this._ondragend}" role="${t(this._accInfo.role)}" aria-expanded="${t(this._accInfo.ariaExpanded)}" title="${t(this._accInfo.tooltip)}" aria-level="${t(this._accInfo.ariaLevel)}" aria-haspopup="${t(this._accInfo.ariaHaspopup)}" aria-posinset="${t(this._accInfo.posinset)}" aria-setsize="${t(this._accInfo.setsize)}" aria-describedby="${t(this._id)}-invisibleText-describedby" aria-labelledby="${t(this._accessibleNameRef)}" aria-disabled="${t(this._ariaDisabled)}" aria-selected="${t(this._accInfo.ariaSelected)}" aria-checked="${t(this._accInfo.ariaChecked)}" aria-owns="${t(this._accInfo.ariaOwns)}" aria-keyshortcuts="${t(this._accInfo.ariaKeyShortcuts)}">${this.placeSelectionElementBefore?ee.call(this,n,e,i):void 0}${this._hasHighlightColor?ae.call(this,n,e,i):void 0}<div part="content" id="${t(this._id)}-content" class="ui5-li-content">${this.hasIcon?le.call(this,n,e,i):re.call(this,n,e,i)}${this.text?de.call(this,n,e,i):void 0}${this.hasSubmenu?ue.call(this,n,e,i):pe.call(this,n,e,i)}</div>${this.typeDetail?ve.call(this,n,e,i):void 0}${this.typeNavigation?_e.call(this,n,e,i):void 0}${this.navigated?$e.call(this,n,e,i):void 0}${this.placeSelectionElementAfter?fe.call(this,n,e,i):void 0}<span id="${t(this._id)}-invisibleText" class="ui5-hidden-text">${t(this._accInfo.listItemAriaLabel)}${t(this.accessibleName)}</span><span id="${t(this._id)}-invisibleText-describedby" class="ui5-hidden-text">${t(this._accInfo.ariaSelectedText)}</span></li>${this.hasSubmenu?Ie.call(this,n,e,i):void 0}`}function ee(n,e,i){return o`${this.modeSingleSelect?ie.call(this,n,e,i):void 0}${this.modeMultiple?te.call(this,n,e,i):void 0}${this.renderDeleteButton?ne.call(this,n,e,i):void 0}`}function ie(n,e,i){return i?o`<${s("ui5-radio-button",e,i)} part="radio" ?disabled="${this.isInactive}" accessible-name="${t(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${t(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${s("ui5-radio-button",e,i)}>`:o`<ui5-radio-button part="radio" ?disabled="${this.isInactive}" accessible-name="${t(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${t(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`}function te(n,e,i){return i?o`<${s("ui5-checkbox",e,i)} part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${t(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${t(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${s("ui5-checkbox",e,i)}>`:o`<ui5-checkbox part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${t(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${t(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`}function ne(n,e,i){return o`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot?oe.call(this,n,e,i):se.call(this,n,e,i)}</div>`}function oe(n,e,i){return o`<slot name="deleteButton"></slot>`}function se(n,e,i){return i?o`<${s("ui5-button",e,i)} part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${t(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${t(this.deleteText)}"></${s("ui5-button",e,i)}>`:o`<ui5-button part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${t(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${t(this.deleteText)}"></ui5-button>`}function ae(n,e,i){return o`<div class="ui5-li-highlight"></div>`}function le(n,e,i){return i?o`<${s("ui5-icon",e,i)} class="ui5-li-icon" name="${t(this.icon)}"></${s("ui5-icon",e,i)}>`:o`<ui5-icon class="ui5-li-icon" name="${t(this.icon)}"></ui5-icon>`}function re(n,e,i){return o`${this._siblingsWithIcon?ce.call(this,n,e,i):void 0}`}function ce(n,e,i){return o`<div class="ui5-menu-item-dummy-icon"></div>`}function de(n,e,i){return o`<div class="ui5-menu-item-text">${t(this.text)}</div>`}function ue(n,e,i){return i?o`<div class="ui5-menu-item-submenu-icon"><${s("ui5-icon",e,i)} part="subicon" name="slim-arrow-right" class="ui5-menu-item-icon-end"></${s("ui5-icon",e,i)}></div>`:o`<div class="ui5-menu-item-submenu-icon"><ui5-icon part="subicon" name="slim-arrow-right" class="ui5-menu-item-icon-end"></ui5-icon></div>`}function pe(n,e,i){return o`${this.hasEndContent?he.call(this,n,e,i):me.call(this,n,e,i)}`}function he(n,e,i){return o`<slot name="endContent"></slot>`}function me(n,e,i){return o`${this.additionalText?be.call(this,n,e,i):void 0}`}function be(n,e,i){return o`<span part="additional-text" class="ui5-li-additional-text" aria-hidden="${t(this._accInfo.ariaHidden)}">${t(this.additionalText)}</span>`}function ve(n,e,i){return i?o`<div class="ui5-li-detailbtn"><${s("ui5-button",e,i)} part="detail-button" design="Transparent" icon="edit" @click="${this.onDetailClick}"></${s("ui5-button",e,i)}></div>`:o`<div class="ui5-li-detailbtn"><ui5-button part="detail-button" design="Transparent" icon="edit" @click="${this.onDetailClick}"></ui5-button></div>`}function _e(n,e,i){return i?o`<${s("ui5-icon",e,i)} name ="slim-arrow-right"></${s("ui5-icon",e,i)}>`:o`<ui5-icon name ="slim-arrow-right"></ui5-icon>`}function $e(n,e,i){return o`<div class="ui5-li-navigated"></div>`}function fe(n,e,i){return o`${this.modeSingleSelect?ge.call(this,n,e,i):void 0}${this.modeMultiple?ye.call(this,n,e,i):void 0}${this.renderDeleteButton?ke.call(this,n,e,i):void 0}`}function ge(n,e,i){return i?o`<${s("ui5-radio-button",e,i)} part="radio" ?disabled="${this.isInactive}" accessible-name="${t(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${t(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${s("ui5-radio-button",e,i)}>`:o`<ui5-radio-button part="radio" ?disabled="${this.isInactive}" accessible-name="${t(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${t(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`}function ye(n,e,i){return i?o`<${s("ui5-checkbox",e,i)} part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${t(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${t(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${s("ui5-checkbox",e,i)}>`:o`<ui5-checkbox part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${t(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${t(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`}function ke(n,e,i){return o`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot?we.call(this,n,e,i):Se.call(this,n,e,i)}</div>`}function we(n,e,i){return o`<slot name="deleteButton"></slot>`}function Se(n,e,i){return i?o`<${s("ui5-button",e,i)} part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${t(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${t(this.deleteText)}"></${s("ui5-button",e,i)}>`:o`<ui5-button part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${t(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${t(this.deleteText)}"></ui5-button>`}function Ie(n,e,i){return i?o`<${s("ui5-responsive-popover",e,i)} id="${t(this._id)}-menu-rp" class="ui5-menu-rp" horizontal-align="Start" prevent-initial-focus prevent-focus-restore hide-arrow allow-target-overlap sub-menu placement=${t(this.placement)} vertical-align="Top" accessible-name=${t(this.acessibleNameText)} @ui5-before-open=${t(this._beforePopoverOpen)} @ui5-open=${t(this._afterPopoverOpen)} @ui5-before-close=${t(this._beforePopoverClose)} @ui5-close=${t(this._afterPopoverClose)}>${this.isPhone?B.call(this,n,e,i):void 0}<div id="${t(this._id)}-menu-main">${this.items.length?D.call(this,n,e,i):M.call(this,n,e,i)}</div></${s("ui5-responsive-popover",e,i)}>`:o`<ui5-responsive-popover id="${t(this._id)}-menu-rp" class="ui5-menu-rp" horizontal-align="Start" prevent-initial-focus prevent-focus-restore hide-arrow allow-target-overlap sub-menu placement=${t(this.placement)} vertical-align="Top" accessible-name=${t(this.acessibleNameText)} @ui5-before-open=${t(this._beforePopoverOpen)} @ui5-open=${t(this._afterPopoverOpen)} @ui5-before-close=${t(this._beforePopoverClose)} @ui5-close=${t(this._afterPopoverClose)}>${this.isPhone?B.call(this,n,e,i):void 0}<div id="${t(this._id)}-menu-main">${this.items.length?D.call(this,n,e,i):M.call(this,n,e,i)}</div></ui5-responsive-popover>`}function B(n,e,i){return i?o`<div slot="header" class="ui5-menu-dialog-header"><${s("ui5-button",e,i)} icon="nav-back" class="ui5-menu-back-button" design="Transparent" aria-label="${t(this.labelBack)}" @click=${this._close}></${s("ui5-button",e,i)}><div class="ui5-menu-dialog-title"><div>${t(this.text)}</div></div><${s("ui5-button",e,i)} icon="decline" design="Transparent" aria-label="${t(this.labelClose)}" @click=${this._closeAll}></${s("ui5-button",e,i)}></div>`:o`<div slot="header" class="ui5-menu-dialog-header"><ui5-button icon="nav-back" class="ui5-menu-back-button" design="Transparent" aria-label="${t(this.labelBack)}" @click=${this._close}></ui5-button><div class="ui5-menu-dialog-title"><div>${t(this.text)}</div></div><ui5-button icon="decline" design="Transparent" aria-label="${t(this.labelClose)}" @click=${this._closeAll}></ui5-button></div>`}function D(n,e,i){return i?o`<${s("ui5-list",e,i)} id="${t(this._id)}-menu-list" selection-mode="None" separators="None" accessible-role="menu" ?loading="${this.loading}" loading-delay="${t(this.loadingDelay)}" @ui5-close-menu=${t(this._close)}><slot></slot></${s("ui5-list",e,i)}>`:o`<ui5-list id="${t(this._id)}-menu-list" selection-mode="None" separators="None" accessible-role="menu" ?loading="${this.loading}" loading-delay="${t(this.loadingDelay)}" @ui5-close-menu=${t(this._close)}><slot></slot></ui5-list>`}function M(n,e,i){return o`${this.loading?Ce.call(this,n,e,i):void 0}`}function Ce(n,e,i){return i?o`<${s("ui5-busy-indicator",e,i)} id="${t(this._id)}-menu-busy-indicator" delay="${t(this.loadingDelay)}" class="ui5-menu-busy-indicator" active></${s("ui5-busy-indicator",e,i)}>`:o`<ui5-busy-indicator id="${t(this._id)}-menu-busy-indicator" delay="${t(this.loadingDelay)}" class="ui5-menu-busy-indicator" active></ui5-busy-indicator>`}_("@ui5/webcomponents-theming","sap_horizon",async()=>C);_("@ui5/webcomponents","sap_horizon",async()=>E);const Te={packageName:"@ui5/webcomponents",fileName:"themes/MenuItem.css.ts",content:`.ui5-menu-rp[ui5-responsive-popover]::part(header),.ui5-menu-rp[ui5-responsive-popover]::part(content),.ui5-menu-rp[ui5-responsive-popover]::part(footer){padding:0}.ui5-menu-rp[ui5-responsive-popover]{box-shadow:var(--sapContent_Shadow1);border-radius:var(--_ui5-v2-2-0_menu_popover_border_radius)}.ui5-menu-busy-indicator{width:100%}.ui5-menu-dialog-header{display:flex;height:var(--_ui5-v2-2-0-responsive_popover_header_height);align-items:center;justify-content:space-between;padding:0px 1rem;width:100%;overflow:hidden}.ui5-menu-dialog-title{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;width:calc(100% - 6.5rem);padding-right:1rem}.ui5-menu-dialog-title>div{display:inline-block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ui5-menu-back-button{margin-right:1rem}.ui5-menu-rp[sub-menu]{margin-top:.25rem;margin-inline:var(--_ui5-v2-2-0_menu_submenu_margin_offset)}.ui5-menu-rp[sub-menu][actual-placement=Start]{margin-top:.25rem;margin-inline:var(--_ui5-v2-2-0_menu_submenu_placement_type_left_margin_offset)}:host([disabled]){pointer-events:initial;opacity:initial}:host([disabled])::part(content){opacity:var(--_ui5-v2-2-0-listitembase_disabled_opacity)}:host([disabled][actionable]:not([active]):not([selected]):hover),:host([disabled][active][actionable]){background:var(--ui5-v2-2-0-listitem-background-color)}:host([active]:not([disabled])),:host([active]:not([disabled])):hover{background-color:var(--sapList_Active_Background)}:host(:not([active]):not([selected]):not([disabled]):hover){background-color:var(--sapList_Hover_Background)}:host([disabled][active][actionable]) .ui5-li-root .ui5-li-icon{color:var(--sapContent_NonInteractiveIconColor)}:host([active]:not([disabled]))::part(content),:host([active]:not([disabled]))::part(additional-text),:host([active]:not([disabled])) .ui5-li-root .ui5-li-icon{color:var(--sapList_Active_TextColor)}:host([focused]:not([active]):not([disabled])){background-color:var(--sapList_Hover_Background)}:host::part(additional-text){margin:unset;margin-inline-start:1rem;color:var(--sapContent_LabelColor);min-width:max-content}.ui5-menu-item-text{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;pointer-events:none;display:inline-block}.ui5-menu-item-dummy-icon{visibility:hidden}:host::part(title){font-size:var(--sapFontSize);padding-top:.125rem}:host([icon]:not([is-phone]))::part(title),:host([is-phone]:not([icon=""]))::part(title){padding-top:0}:host(:not([is-phone]))::part(native-li){padding:var(--_ui5-v2-2-0_menu_item_padding)}:host::part(content){padding-inline-end:.25rem}.ui5-menu-item-submenu-icon{min-width:var(--_ui5-v2-2-0_list_item_icon_size);min-height:var(--_ui5-v2-2-0_list_item_icon_size);display:inline-block;vertical-align:middle;pointer-events:none}.ui5-menu-item-icon-end{display:inline-block;vertical-align:middle;padding-inline-start:.5rem;pointer-events:none;position:absolute;inset-inline-end:var(--_ui5-v2-2-0_menu_item_submenu_icon_right)}.ui5-menu-item-dummy-icon{min-width:var(--_ui5-v2-2-0_list_item_icon_size);min-height:var(--_ui5-v2-2-0_list_item_icon_size);display:inline-block;vertical-align:middle;padding-inline-end:.5rem;pointer-events:none}
`};var p=function(n,e,i,l){var r=arguments.length,a=r<3?e:l===null?l=Object.getOwnPropertyDescriptor(e,i):l,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(n,e,i,l);else for(var h=n.length-1;h>=0;h--)(c=n[h])&&(a=(r<3?c(a):r>3?c(e,i,a):c(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a},v;let d=v=class extends S{constructor(){super(...arguments),this.disabled=!1,this.loading=!1,this.loadingDelay=1e3,this.accessibilityAttributes={},this._siblingsWithIcon=!1}static async onDefine(){v.i18nBundle=await R("@ui5/webcomponents")}get placement(){return this.isRtl?"Start":"End"}get isRtl(){return this.effectiveDir==="rtl"}get hasSubmenu(){return!!(this.items.length||this.loading)&&!this.disabled}get hasEndContent(){return!!this.endContent.length}get hasIcon(){return!!this.icon}get isSubMenuOpen(){var e;return(e=this._popover)==null?void 0:e.open}get ariaLabelledByText(){return`${this.text} ${this.accessibleName}`.trim()}get menuHeaderTextPhone(){return this.text}get isPhone(){return w()}get labelBack(){return v.i18nBundle.getText(Q)}get labelClose(){return v.i18nBundle.getText(H)}get acessibleNameText(){return v.i18nBundle.getText(K)}get isSeparator(){return!1}onBeforeRendering(){const e=this._menuItems.some(i=>!!i.icon);this._menuItems.forEach(i=>{i._siblingsWithIcon=e})}get _focusable(){return!0}get _accInfo(){const e={role:this.accessibilityAttributes.role||"menuitem",ariaHaspopup:this.hasSubmenu?Y.Menu.toLowerCase():void 0,ariaKeyShortcuts:this.accessibilityAttributes.ariaKeyShortcuts,ariaHidden:this.additionalText&&this.accessibilityAttributes.ariaKeyShortcuts?!0:void 0};return{...super._accInfo,...e}}get _popover(){return this.shadowRoot.querySelector("[ui5-responsive-popover]")}get _menuItems(){return this.items.filter(e=>!e.isSeparator)}_closeAll(){this._popover&&(this._popover.open=!1),this.selected=!1,this.fireEvent("close-menu",{})}_close(){this._popover&&(this._popover.open=!1),this.selected=!1}_beforePopoverOpen(e){!this.fireEvent("before-open",{},!0,!1)&&e.preventDefault()}_afterPopoverOpen(){var e;(e=this.items[0])==null||e.focus(),this.fireEvent("open",{},!1,!1)}_beforePopoverClose(e){if(!this.fireEvent("before-close",{escPressed:e.detail.escPressed},!0,!1)){e.preventDefault();return}this.selected=!1,e.detail.escPressed&&(this.focus(),w()&&this.fireEvent("close-menu",{}))}_afterPopoverClose(){this.fireEvent("close",{},!1,!1)}};p([u()],d.prototype,"text",void 0);p([u()],d.prototype,"additionalText",void 0);p([u()],d.prototype,"icon",void 0);p([u({type:Boolean})],d.prototype,"disabled",void 0);p([u({type:Boolean})],d.prototype,"loading",void 0);p([u({type:Number})],d.prototype,"loadingDelay",void 0);p([u()],d.prototype,"accessibleName",void 0);p([u()],d.prototype,"tooltip",void 0);p([u({type:Object})],d.prototype,"accessibilityAttributes",void 0);p([u({type:Boolean,noAttribute:!0})],d.prototype,"_siblingsWithIcon",void 0);p([P({default:!0,type:HTMLElement,invalidateOnChildChange:!0})],d.prototype,"items",void 0);p([P({type:HTMLElement})],d.prototype,"endContent",void 0);d=v=p([T({tag:"ui5-menu-item",template:Z,styles:[S.styles,Te],dependencies:[...S.dependencies,A,z,j,J]})],d);d.define();const Pe=d;function Ee(n,e,i){return i?o`<${s("ui5-li-custom",e,i)} class="${I(this.classes.main)}" role="separator" disabled></${s("ui5-li-custom",e,i)}>`:o`<ui5-li-custom class="${I(this.classes.main)}" role="separator" disabled></ui5-li-custom>`}_("@ui5/webcomponents-theming","sap_horizon",async()=>C);_("@ui5/webcomponents","sap_horizon",async()=>E);const Be={packageName:"@ui5/webcomponents",fileName:"themes/MenuSeparator.css.ts",content:`:host{border-top:.0625rem solid var(--sapGroup_ContentBorderColor);min-height:.125rem}.ui5-menu-separator{border:inherit;min-height:inherit;background:inherit;opacity:1}
`};var De=function(n,e,i,l){var r=arguments.length,a=r<3?e:l===null?l=Object.getOwnPropertyDescriptor(e,i):l,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(n,e,i,l);else for(var h=n.length-1;h>=0;h--)(c=n[h])&&(a=(r<3?c(a):r>3?c(e,i,a):c(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let g=class extends V{get isSeparator(){return!0}get classes(){return{main:{"ui5-menu-separator":!0}}}get _focusable(){return!1}get _pressable(){return!1}};g=De([T({tag:"ui5-menu-separator",renderer:x,styles:[Be],template:Ee,dependencies:[X]})],g);g.define();const Me=g;function Oe(n,e,i){return i?o`<${s("ui5-responsive-popover",e,i)} id="${t(this._id)}-menu-rp" class="ui5-menu-rp" horizontal-align="Start" placement="Bottom" vertical-align="Bottom" .opener=${t(this.opener)} ?open=${this.open} prevent-initial-focus hide-arrow allow-target-overlap accessible-name=${t(this.acessibleNameText)} @ui5-before-open=${t(this._beforePopoverOpen)} @ui5-open=${t(this._afterPopoverOpen)} @ui5-before-close=${t(this._beforePopoverClose)} @ui5-close=${t(this._afterPopoverClose)}>${this.isPhone?O.call(this,n,e,i):void 0}<div id="${t(this._id)}-menu-main">${this.items.length?N.call(this,n,e,i):L.call(this,n,e,i)}</div></${s("ui5-responsive-popover",e,i)}>`:o`<ui5-responsive-popover id="${t(this._id)}-menu-rp" class="ui5-menu-rp" horizontal-align="Start" placement="Bottom" vertical-align="Bottom" .opener=${t(this.opener)} ?open=${this.open} prevent-initial-focus hide-arrow allow-target-overlap accessible-name=${t(this.acessibleNameText)} @ui5-before-open=${t(this._beforePopoverOpen)} @ui5-open=${t(this._afterPopoverOpen)} @ui5-before-close=${t(this._beforePopoverClose)} @ui5-close=${t(this._afterPopoverClose)}>${this.isPhone?O.call(this,n,e,i):void 0}<div id="${t(this._id)}-menu-main">${this.items.length?N.call(this,n,e,i):L.call(this,n,e,i)}</div></ui5-responsive-popover>`}function O(n,e,i){return i?o`<div slot="header" class="ui5-menu-dialog-header"><div class="ui5-menu-dialog-title"><div>${t(this.headerText)}</div></div><${s("ui5-button",e,i)} icon="decline" design="Transparent" aria-label="${t(this.labelClose)}" @click=${this._close}></${s("ui5-button",e,i)}></div>`:o`<div slot="header" class="ui5-menu-dialog-header"><div class="ui5-menu-dialog-title"><div>${t(this.headerText)}</div></div><ui5-button icon="decline" design="Transparent" aria-label="${t(this.labelClose)}" @click=${this._close}></ui5-button></div>`}function N(n,e,i){return i?o`<${s("ui5-list",e,i)} id="${t(this._id)}-menu-list" selection-mode="None" ?loading="${this.loading}" loading-delay="${t(this.loadingDelay)}" separators="None" accessible-role="Menu" @ui5-item-click=${t(this._itemClick)} @ui5-close-menu=${t(this._close)} @mouseover=${this._itemMouseOver} @keydown=${this._itemKeyDown}><slot></slot></${s("ui5-list",e,i)}>`:o`<ui5-list id="${t(this._id)}-menu-list" selection-mode="None" ?loading="${this.loading}" loading-delay="${t(this.loadingDelay)}" separators="None" accessible-role="Menu" @ui5-item-click=${t(this._itemClick)} @ui5-close-menu=${t(this._close)} @mouseover=${this._itemMouseOver} @keydown=${this._itemKeyDown}><slot></slot></ui5-list>`}function L(n,e,i){return o`${this.loading?Ne.call(this,n,e,i):void 0}`}function Ne(n,e,i){return i?o`<${s("ui5-busy-indicator",e,i)} id="${t(this._id)}-menu-busy-indicator" delay="${t(this.loadingDelay)}" class="ui5-menu-busy-indicator" active></${s("ui5-busy-indicator",e,i)}>`:o`<ui5-busy-indicator id="${t(this._id)}-menu-busy-indicator" delay="${t(this.loadingDelay)}" class="ui5-menu-busy-indicator" active></ui5-busy-indicator>`}_("@ui5/webcomponents-theming","sap_horizon",async()=>C);_("@ui5/webcomponents","sap_horizon",async()=>E);const Le={packageName:"@ui5/webcomponents",fileName:"themes/Menu.css.ts",content:`.ui5-menu-rp[ui5-responsive-popover]::part(header),.ui5-menu-rp[ui5-responsive-popover]::part(content),.ui5-menu-rp[ui5-responsive-popover]::part(footer){padding:0}.ui5-menu-rp[ui5-responsive-popover]{box-shadow:var(--sapContent_Shadow1);border-radius:var(--_ui5-v2-2-0_menu_popover_border_radius)}.ui5-menu-busy-indicator{width:100%}.ui5-menu-dialog-header{display:flex;height:var(--_ui5-v2-2-0-responsive_popover_header_height);align-items:center;justify-content:space-between;padding:0px 1rem;width:100%;overflow:hidden}.ui5-menu-dialog-title{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;width:calc(100% - 6.5rem);padding-right:1rem}.ui5-menu-dialog-title>div{display:inline-block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ui5-menu-back-button{margin-right:1rem}
`};var b=function(n,e,i,l){var r=arguments.length,a=r<3?e:l===null?l=Object.getOwnPropertyDescriptor(e,i):l,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(n,e,i,l);else for(var h=n.length-1;h>=0;h--)(c=n[h])&&(a=(r<3?c(a):r>3?c(e,i,a):c(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a},f;const xe=300;let m=f=class extends W{constructor(){super(...arguments),this.open=!1,this.loading=!1,this.loadingDelay=1e3}static async onDefine(){f.i18nBundle=await R("@ui5/webcomponents")}get isRtl(){return this.effectiveDir==="rtl"}get labelClose(){return f.i18nBundle.getText(H)}get isPhone(){return w()}get _popover(){return this.shadowRoot.querySelector("[ui5-responsive-popover]")}get _menuItems(){return this.items.filter(e=>!e.isSeparator)}get acessibleNameText(){return f.i18nBundle.getText(K)}onBeforeRendering(){const e=this._menuItems.some(i=>!!i.icon);this._menuItems.forEach(i=>{i._siblingsWithIcon=e})}_close(){this.open=!1}_openItemSubMenu(e){clearTimeout(this._timeout),!(!e._popover||e._popover.open)&&(this.fireEvent("before-open",{item:e},!1,!1),e._popover.opener=e,e._popover.open=!0,e.selected=!0)}_closeItemSubMenu(e){if(e&&e._popover){const i=e._menuItems.find(l=>l._popover&&l._popover.open);i&&this._closeItemSubMenu(i),e._popover.open=!1,e.selected=!1}}_itemMouseOver(e){if(U()){const i=e.target;i.hasAttribute("ui5-menu-item")&&(i.focus(),this._startOpenTimeout(i))}}_startOpenTimeout(e){clearTimeout(this._timeout),this._timeout=setTimeout(()=>{const i=e.parentElement,l=i&&i._menuItems.find(r=>r._popover&&r._popover.open);l&&this._closeItemSubMenu(l),this._openItemSubMenu(e)},xe)}_itemClick(e){const i=e.detail.item;i._popover?this._openItemSubMenu(i):this.fireEvent("item-click",{item:i,text:i.text||""},!0,!1)&&this._popover&&i.fireEvent("close-menu",{})}_itemKeyDown(e){var c;if(!y(e)&&!k(e))return;const i=this.isRtl?k(e):y(e),l=this.isRtl?y(e):k(e),r=e.target,a=r.parentElement;q(e)&&e.preventDefault(),l?this._openItemSubMenu(r):i&&a.hasAttribute("ui5-menu-item")&&a._popover&&(a._popover.open=!1,a.selected=!1,(c=a._popover.opener)==null||c.focus())}_beforePopoverOpen(e){!this.fireEvent("before-open",{},!0,!0)&&(this.open=!1,e.preventDefault())}_afterPopoverOpen(){var e;(e=this._menuItems[0])==null||e.focus(),this.fireEvent("open",{},!1,!0)}_beforePopoverClose(e){!this.fireEvent("before-close",{escPressed:e.detail.escPressed},!0,!0)&&(this.open=!0,e.preventDefault())}_afterPopoverClose(){this.open=!1,this.fireEvent("close",{},!1,!0)}};b([u()],m.prototype,"headerText",void 0);b([u({type:Boolean})],m.prototype,"open",void 0);b([u({type:Boolean})],m.prototype,"loading",void 0);b([u({type:Number})],m.prototype,"loadingDelay",void 0);b([u({converter:F})],m.prototype,"opener",void 0);b([P({default:!0,type:HTMLElement,invalidateOnChildChange:!0})],m.prototype,"items",void 0);m=f=b([T({tag:"ui5-menu",renderer:x,styles:Le,template:Oe,dependencies:[A,G,z,Pe,Me,j]}),$("item-click",{detail:{item:{type:HTMLElement},text:{type:String}}}),$("before-open",{detail:{item:{type:HTMLElement}}}),$("open"),$("before-close",{detail:{escPressed:{type:Boolean}}}),$("close")],m);m.define();const oi=m;export{oi as M,Le as s};
