import{U as D}from"./UI5Element-B2h7kErG.js";import{a as u,l as n,b as r,p as l,c as M,s as L,d as H}from"./withWebComponent-D63zXRZq.js";import{s as R}from"./slot-Df15G--e.js";import{e as v}from"./event-CegLCnR0.js";import{D as N}from"./Popover-D-vbAx4K.js";import{c as I,b as S,m as z}from"./Keys-BgUkNma0.js";import{i as W,d as k}from"./useIsomorphicLayoutEffect-CRjHBNH3.js";import{b as U}from"./i18nBundle-kZ6-2cpn.js";import"./slim-arrow-right-C2CCzq_Z.js";import{I as x}from"./Integer-Dh6YzFpK.js";import V from"./ResponsivePopover-Vt9iW9M0.js";import{b as F}from"./Button-Bt2u8cP6.js";import{d as K}from"./List-DI02OFiS.js";import{C as g}from"./CustomListItem-Cu5L9XvU.js";import{I as A,c as T}from"./Icon-BU2Bb3zG.js";import{o as q}from"./class-map-BQhMMhlU.js";import{H as Y}from"./HasPopup-Cecjtg2t.js";import{r as f}from"./Boot-C8BaHzi_.js";import{s as j}from"./parameters-bundle.css-_D3nLw4H.js";import G from"./StandardListItem-DjHNrpza.js";import{a as J}from"./BusyIndicator-Bz5OsmtM.js";import{ay as Q,az as X}from"./i18n-defaults-C_UMjLXx.js";import"./nav-back-CfsvDbn7.js";function Z(s,e,t){return u`<li part="native-li" data-sap-focus-ref tabindex="${n(this._effectiveTabIndex)}" class="${q(this.classes.main)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" @mouseup="${this._onmouseup}" @mousedown="${this._onmousedown}" @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" @click="${this._onclick}" draggable="${n(this.movable)}" @dragstart="${this._ondragstart}" @dragend="${this._ondragend}" role="${n(this._accInfo.role)}" aria-expanded="${n(this._accInfo.ariaExpanded)}" title="${n(this._accInfo.tooltip)}" aria-level="${n(this._accInfo.ariaLevel)}" aria-haspopup="${n(this._accInfo.ariaHaspopup)}" aria-posinset="${n(this._accInfo.posinset)}" aria-roledescription="${n(this.accessibleRoleDescription)}" aria-setsize="${n(this._accInfo.setsize)}" aria-describedby="${n(this._id)}-invisibleText-describedby" aria-labelledby="${n(this._accessibleNameRef)}" aria-disabled="${n(this._ariaDisabled)}" aria-selected="${n(this._accInfo.ariaSelected)}" aria-checked="${n(this._accInfo.ariaChecked)}" aria-owns="${n(this._accInfo.ariaOwns)}">${this.placeSelectionElementBefore?ee.call(this,s,e,t):void 0}${this._hasHighlightColor?ae.call(this,s,e,t):void 0}<div part="content" id="${n(this._id)}-content" class="ui5-li-content">${this._siblingsWithIcon?ue.call(this,s,e,t):void 0}${this.text?ce.call(this,s,e,t):void 0}${this._additionalText?de.call(this,s,e,t):void 0}</div>${this.hasSubmenu?he.call(this,s,e,t):void 0}${this.typeDetail?pe.call(this,s,e,t):void 0}${this.typeNavigation?me.call(this,s,e,t):void 0}${this.navigated?be.call(this,s,e,t):void 0}${this.placeSelectionElementAfter?_e.call(this,s,e,t):void 0}<span id="${n(this._id)}-invisibleText" class="ui5-hidden-text">${n(this._accInfo.listItemAriaLabel)}${n(this.accessibleName)}</span><span id="${n(this._id)}-invisibleText-describedby" class="ui5-hidden-text">${n(this._accInfo.ariaSelectedText)}</span></li>`}function ee(s,e,t){return u`${this.modeSingleSelect?te.call(this,s,e,t):void 0}${this.modeMultiSelect?ie.call(this,s,e,t):void 0}${this.renderDeleteButton?ne.call(this,s,e,t):void 0}`}function te(s,e,t){return t?u`<${r("ui5-radio-button",e,t)} part="radio" ?disabled="${this.isInactive}" accessible-name="${n(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${n(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${r("ui5-radio-button",e,t)}>`:u`<ui5-radio-button part="radio" ?disabled="${this.isInactive}" accessible-name="${n(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${n(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`}function ie(s,e,t){return t?u`<${r("ui5-checkbox",e,t)} part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${n(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${n(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${r("ui5-checkbox",e,t)}>`:u`<ui5-checkbox part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${n(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${n(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`}function ne(s,e,t){return u`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot?se.call(this,s,e,t):oe.call(this,s,e,t)}</div>`}function se(s,e,t){return u`<slot name="deleteButton"></slot>`}function oe(s,e,t){return t?u`<${r("ui5-button",e,t)} part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${n(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${n(this.deleteText)}"></${r("ui5-button",e,t)}>`:u`<ui5-button part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${n(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${n(this.deleteText)}"></ui5-button>`}function ae(s,e,t){return u`<div class="ui5-li-highlight"></div>`}function ue(s,e,t){return u`${this.hasIcon?re.call(this,s,e,t):le.call(this,s,e,t)}`}function re(s,e,t){return t?u`<${r("ui5-icon",e,t)} class="ui5-li-icon" name="${n(this.icon)}"></${r("ui5-icon",e,t)}>`:u`<ui5-icon class="ui5-li-icon" name="${n(this.icon)}"></ui5-icon>`}function le(s,e,t){return u`<div class="ui5-menu-item-dummy-icon"></div>`}function ce(s,e,t){return u`<div class="ui5-menu-item-text">${n(this.text)}</div>`}function de(s,e,t){return u`<span part="additional-text" class="ui5-li-additional-text">${n(this._additionalText)}</span>`}function he(s,e,t){return t?u`<div class="ui5-menu-item-submenu-icon"><${r("ui5-icon",e,t)} part="subicon" name="slim-arrow-right" class="ui5-menu-item-icon-end"></${r("ui5-icon",e,t)}></div>`:u`<div class="ui5-menu-item-submenu-icon"><ui5-icon part="subicon" name="slim-arrow-right" class="ui5-menu-item-icon-end"></ui5-icon></div>`}function pe(s,e,t){return t?u`<div class="ui5-li-detailbtn"><${r("ui5-button",e,t)} part="detail-button" design="Transparent" icon="edit" @click="${this.onDetailClick}"></${r("ui5-button",e,t)}></div>`:u`<div class="ui5-li-detailbtn"><ui5-button part="detail-button" design="Transparent" icon="edit" @click="${this.onDetailClick}"></ui5-button></div>`}function me(s,e,t){return t?u`<${r("ui5-icon",e,t)} name ="slim-arrow-right"></${r("ui5-icon",e,t)}>`:u`<ui5-icon name ="slim-arrow-right"></ui5-icon>`}function be(s,e,t){return u`<div class="ui5-li-navigated"></div>`}function _e(s,e,t){return u`${this.modeSingleSelect?ve.call(this,s,e,t):void 0}${this.modeMultiSelect?$e.call(this,s,e,t):void 0}${this.renderDeleteButton?fe.call(this,s,e,t):void 0}`}function ve(s,e,t){return t?u`<${r("ui5-radio-button",e,t)} part="radio" ?disabled="${this.isInactive}" accessible-name="${n(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${n(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${r("ui5-radio-button",e,t)}>`:u`<ui5-radio-button part="radio" ?disabled="${this.isInactive}" accessible-name="${n(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${n(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`}function $e(s,e,t){return t?u`<${r("ui5-checkbox",e,t)} part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${n(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${n(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${r("ui5-checkbox",e,t)}>`:u`<ui5-checkbox part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${n(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${n(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`}function fe(s,e,t){return u`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot?ye.call(this,s,e,t):ge.call(this,s,e,t)}</div>`}function ye(s,e,t){return u`<slot name="deleteButton"></slot>`}function ge(s,e,t){return t?u`<${r("ui5-button",e,t)} part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${n(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${n(this.deleteText)}"></${r("ui5-button",e,t)}>`:u`<ui5-button part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${n(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${n(this.deleteText)}"></ui5-button>`}var m=function(s,e,t,i){var o=arguments.length,a=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(s,e,t,i);else for(var d=s.length-1;d>=0;d--)(c=s[d])&&(a=(o<3?c(a):o>3?c(e,t,a):c(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let h=class extends D{get hasSubmenu(){return!!(this.items.length||this.busy)}get hasDummyIcon(){return this._siblingsWithIcon&&!this.icon}get subMenuOpened(){var e,t;return!!((t=(e=this._subMenu)==null?void 0:e._popover)!=null&&t.isOpen())}get _additionalText(){return this.hasSubmenu?"":this.additionalText}get ariaLabelledByText(){return`${this.text} ${this.accessibleName}`.trim()}};m([l()],h.prototype,"text",void 0);m([l()],h.prototype,"additionalText",void 0);m([l()],h.prototype,"icon",void 0);m([l({type:Boolean})],h.prototype,"startsSection",void 0);m([l({type:Boolean})],h.prototype,"disabled",void 0);m([l({type:Boolean})],h.prototype,"busy",void 0);m([l({validator:x,defaultValue:1e3})],h.prototype,"busyDelay",void 0);m([l()],h.prototype,"accessibleName",void 0);m([l({type:String})],h.prototype,"tooltip",void 0);m([l({type:Boolean,noAttribute:!0})],h.prototype,"_siblingsWithChildren",void 0);m([l({type:Boolean,noAttribute:!0})],h.prototype,"_siblingsWithIcon",void 0);m([l({type:Boolean,noAttribute:!0})],h.prototype,"_preventSubMenuClose",void 0);m([l({type:Object,defaultValue:void 0})],h.prototype,"_subMenu",void 0);m([R({default:!0,type:HTMLElement,invalidateOnChildChange:!0})],h.prototype,"items",void 0);h=m([M("ui5-menu-item")],h);h.define();const Me=h,tt=Object.freeze(Object.defineProperty({__proto__:null,default:Me},Symbol.toStringTag,{value:"Module"}));f("@ui5/webcomponents-theming","sap_horizon",async()=>L);f("@ui5/webcomponents","sap_horizon",async()=>j);const Ie={packageName:"@ui5/webcomponents",fileName:"themes/MenuListItem.css.ts",content:`:host([disabled]){pointer-events:initial;opacity:initial}:host([disabled])::part(content){opacity:var(--_ui5-v1-24-16-listitembase_disabled_opacity)}:host([disabled][actionable]:not([active]):not([selected]):hover),:host([disabled][active][actionable]){background:var(--ui5-v1-24-16-listitem-background-color)}:host([disabled][active][actionable]) .ui5-li-root .ui5-li-icon{color:var(--sapContent_NonInteractiveIconColor)}:host([active][actionable]:not([disabled]))::part(content),:host([active][actionable]:not([disabled]))::part(additional-text){color:var(--sapList_Active_TextColor)}:host([focused]:not([active]):not([disabled])){background-color:var(--sapList_Hover_Background)}:host::part(additional-text){margin:unset;margin-inline-start:1rem;color:var(--sapContent_LabelColor);min-width:max-content}.ui5-menu-item-text{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;pointer-events:none;display:inline-block;font-size:var(--sapFontSize)}.ui5-menu-item-dummy-icon{visibility:hidden}:host::part(title){font-size:var(--sapFontSize);padding-top:.125rem}:host([icon]:not([is-phone]))::part(title),:host([is-phone]:not([icon=""]))::part(title){padding-top:0}:host(:not([is-phone]))::part(native-li){padding:var(--_ui5-v1-24-16_menu_item_padding)}:host([starts-section]){border-top:1px solid var(--sapGroup_ContentBorderColor)}:host::part(content){padding-inline-end:.5rem}.ui5-menu-item-submenu-icon{min-width:var(--_ui5-v1-24-16_list_item_icon_size);min-height:var(--_ui5-v1-24-16_list_item_icon_size);display:inline-block;vertical-align:middle;pointer-events:none}.ui5-menu-item-icon-end{display:inline-block;vertical-align:middle;padding-inline-start:.5rem;pointer-events:none;position:absolute;inset-inline-end:var(--_ui5-v1-24-16_menu_item_submenu_icon_right)}.ui5-menu-item-dummy-icon{min-width:var(--_ui5-v1-24-16_list_item_icon_size);min-height:var(--_ui5-v1-24-16_list_item_icon_size);display:inline-block;vertical-align:middle;padding-inline-end:.5rem;pointer-events:none}
`};var y=function(s,e,t,i){var o=arguments.length,a=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(s,e,t,i);else for(var d=s.length-1;d>=0;d--)(c=s[d])&&(a=(o<3?c(a):o>3?c(e,t,a):c(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a};let _=class extends g{get text(){var e;return(e=this.associatedItem)==null?void 0:e.text}get _additionalText(){var e;return(e=this.associatedItem)==null?void 0:e._additionalText}get hasIcon(){var e;return!!((e=this.associatedItem)!=null&&e.icon)}get hasSubmenu(){var e,t;return!!((e=this.associatedItem)!=null&&e.items.length||(t=this.associatedItem)!=null&&t.busy)}get subMenuOpened(){var e;return!!((e=this.associatedItem)!=null&&e._subMenu)}get _siblingsWithIcon(){var e;return(e=this.associatedItem)==null?void 0:e._siblingsWithIcon}get _focusable(){return!0}get _accInfo(){var t;const e={ariaHaspopup:(t=this.associatedItem)!=null&&t.hasSubmenu?Y.Menu.toLowerCase():void 0};return{...super._accInfo,...e}}};y([l({type:Object})],_.prototype,"associatedItem",void 0);y([l()],_.prototype,"icon",void 0);y([l()],_.prototype,"additionalText",void 0);_=y([M({tag:"ui5-menu-li",template:Z,styles:[g.styles,Ie],dependencies:[...g.dependencies,A]})],_);_.define();const Se=_;function ke(s,e,t){return t?u`<${r("ui5-responsive-popover",e,t)} id="${n(this._id)}-menu-rp" class="ui5-menu-rp" horizontal-align="Left" placement-type=${n(this.placementType)} vertical-align=${n(this.verticalAlign)} hide-arrow allow-target-overlap ?sub-menu=${this._isSubMenu} @ui5-before-open=${n(this._beforePopoverOpen)} @ui5-after-open=${n(this._afterPopoverOpen)} @ui5-before-close=${n(this._beforePopoverClose)} @ui5-after-close=${n(this._afterPopoverClose)}>${this.isPhone?w.call(this,s,e,t):void 0}<div id="${n(this._id)}-menu-main">${this._currentItems.length?C.call(this,s,e,t):E.call(this,s,e,t)}</div>${this.menuHasSubMenus?B.call(this,s,e,t):void 0}</${r("ui5-responsive-popover",e,t)}>`:u`<ui5-responsive-popover id="${n(this._id)}-menu-rp" class="ui5-menu-rp" horizontal-align="Left" placement-type=${n(this.placementType)} vertical-align=${n(this.verticalAlign)} hide-arrow allow-target-overlap ?sub-menu=${this._isSubMenu} @ui5-before-open=${n(this._beforePopoverOpen)} @ui5-after-open=${n(this._afterPopoverOpen)} @ui5-before-close=${n(this._beforePopoverClose)} @ui5-after-close=${n(this._afterPopoverClose)}>${this.isPhone?w.call(this,s,e,t):void 0}<div id="${n(this._id)}-menu-main">${this._currentItems.length?C.call(this,s,e,t):E.call(this,s,e,t)}</div>${this.menuHasSubMenus?B.call(this,s,e,t):void 0}</ui5-responsive-popover>`}function w(s,e,t){return t?u`<div slot="header" class="ui5-menu-dialog-header">${this._isSubMenu?O.call(this,s,e,t):void 0}<div class="ui5-menu-dialog-title"><div>${n(this.menuHeaderTextPhone)}</div></div><${r("ui5-button",e,t)} icon="decline" design="Transparent" aria-label="${n(this.labelClose)}" @click=${this._closeAll}></${r("ui5-button",e,t)}></div>`:u`<div slot="header" class="ui5-menu-dialog-header">${this._isSubMenu?O.call(this,s,e,t):void 0}<div class="ui5-menu-dialog-title"><div>${n(this.menuHeaderTextPhone)}</div></div><ui5-button icon="decline" design="Transparent" aria-label="${n(this.labelClose)}" @click=${this._closeAll}></ui5-button></div>`}function O(s,e,t){return t?u`<${r("ui5-button",e,t)} icon="nav-back" class="ui5-menu-back-button" design="Transparent" aria-label="${n(this.labelBack)}" @click=${this._navigateBack}></${r("ui5-button",e,t)}>`:u`<ui5-button icon="nav-back" class="ui5-menu-back-button" design="Transparent" aria-label="${n(this.labelBack)}" @click=${this._navigateBack}></ui5-button>`}function C(s,e,t){return t?u`<${r("ui5-list",e,t)} id="${n(this._id)}-menu-list" mode="None" ?busy="${this.busy}" busy-delay="${n(this.busyDelay)}" separators="None" accessible-role="menu" @ui5-item-click=${n(this._itemClick)} @mouseover="${this._busyMouseOver}">${T(this._currentItems,(i,o)=>i._id||o,(i,o)=>P.call(this,s,e,t,i,o))}</${r("ui5-list",e,t)}>`:u`<ui5-list id="${n(this._id)}-menu-list" mode="None" ?busy="${this.busy}" busy-delay="${n(this.busyDelay)}" separators="None" accessible-role="menu" @ui5-item-click=${n(this._itemClick)} @mouseover="${this._busyMouseOver}">${T(this._currentItems,(i,o)=>i._id||o,(i,o)=>P.call(this,s,e,t,i,o))}</ui5-list>`}function P(s,e,t,i,o){return t?u`<${r("ui5-menu-li",e,t)} .associatedItem="${n(i.item)}" class="ui5-menu-item" id="${n(this._id)}-menu-item-${o}" .icon="${n(i.item.icon)}" accessible-name=${n(i.item.ariaLabelledByText)} accessible-role="menuitem" .additionalText="${n(i.item._additionalText)}" tooltip="${n(i.item.tooltip)}" selected="${n(i.item.subMenuOpened)}" ?disabled=${i.item.disabled} ?starts-section=${i.item.startsSection} ?selected=${i.item.subMenuOpened} ?is-phone=${this.isPhone} @mouseover=${this._itemMouseOver} @mouseout=${this._itemMouseOut} @keydown=${this._itemKeyDown} @_focused=${n(this._onfocusin)}></${r("ui5-menu-li",e,t)}>`:u`<ui5-menu-li .associatedItem="${n(i.item)}" class="ui5-menu-item" id="${n(this._id)}-menu-item-${o}" .icon="${n(i.item.icon)}" accessible-name=${n(i.item.ariaLabelledByText)} accessible-role="menuitem" .additionalText="${n(i.item._additionalText)}" tooltip="${n(i.item.tooltip)}" selected="${n(i.item.subMenuOpened)}" ?disabled=${i.item.disabled} ?starts-section=${i.item.startsSection} ?selected=${i.item.subMenuOpened} ?is-phone=${this.isPhone} @mouseover=${this._itemMouseOver} @mouseout=${this._itemMouseOut} @keydown=${this._itemKeyDown} @_focused=${n(this._onfocusin)}></ui5-menu-li>`}function E(s,e,t){return u`${this.busy?Te.call(this,s,e,t):void 0}`}function Te(s,e,t){return t?u`<${r("ui5-busy-indicator",e,t)} id="${n(this._id)}-menu-busy-indicator" delay="${n(this.busyDelay)}" class="ui5-menu-busy-indicator" @mouseover="${this._busyMouseOver}" active></${r("ui5-busy-indicator",e,t)}>`:u`<ui5-busy-indicator id="${n(this._id)}-menu-busy-indicator" delay="${n(this.busyDelay)}" class="ui5-menu-busy-indicator" @mouseover="${this._busyMouseOver}" active></ui5-busy-indicator>`}function B(s,e,t){return u`<div class="ui5-menu-submenus"></div>`}f("@ui5/webcomponents-theming","sap_horizon",async()=>L);f("@ui5/webcomponents","sap_horizon",async()=>j);const we={packageName:"@ui5/webcomponents",fileName:"themes/Menu.css.ts",content:`.ui5-menu-rp[ui5-responsive-popover]::part(header),.ui5-menu-rp[ui5-responsive-popover]::part(content),.ui5-menu-rp[ui5-responsive-popover]::part(footer){padding:0}.ui5-menu-rp[ui5-responsive-popover]{box-shadow:var(--sapContent_Shadow1);border-radius:var(--_ui5-v1-24-16_menu_popover_border_radius)}.ui5-menu-busy-indicator{width:100%}.ui5-menu-dialog-header{display:flex;height:var(--_ui5-v1-24-16-responsive_popover_header_height);align-items:center;justify-content:space-between;padding:0px 1rem;width:100%;overflow:hidden}.ui5-menu-dialog-title{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;width:calc(100% - 6.5rem);padding-right:1rem}.ui5-menu-dialog-title>div{display:inline-block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ui5-menu-back-button{margin-right:1rem}.ui5-menu-rp[sub-menu]{margin-top:.25rem;margin-inline:var(--_ui5-v1-24-16_menu_submenu_margin_offset)}.ui5-menu-rp[sub-menu][actual-placement-type=Left]{margin-top:.25rem;margin-inline:var(--_ui5-v1-24-16_menu_submenu_placement_type_left_margin_offset)}
`};var b=function(s,e,t,i){var o=arguments.length,a=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(s,e,t,i);else for(var d=s.length-1;d>=0;d--)(c=s[d])&&(a=(o<3?c(a):o>3?c(e,t,a):c(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a},$;const Oe=300,Ce=400;let p=$=class extends D{static async onDefine(){$.i18nBundle=await U("@ui5/webcomponents")}get menuHasSubMenus(){return!!this.items.filter(e=>e.hasSubmenu).length}get itemsWithChildren(){return!!this._currentItems.filter(e=>e.item.items.length).length}get itemsWithIcon(){return!!this._currentItems.filter(e=>e.item.icon!=="").length}get isRtl(){return this.effectiveDir==="rtl"}get placementType(){const e=this.isRtl?"Left":"Right";return this._isSubMenu?e:"Bottom"}get verticalAlign(){return this._isSubMenu?"Top":"Bottom"}get labelBack(){return $.i18nBundle.getText(Q)}get labelClose(){return $.i18nBundle.getText(X)}get isPhone(){return W()}get isSubMenuOpened(){return this.items.some(e=>e.subMenuOpened)}get menuHeaderTextPhone(){const e=this._getParentMenuItem(this);return e?e.text:this.headerText}onBeforeRendering(){this._prepareCurrentItems(this.items);const e=this.itemsWithChildren,t=this.itemsWithIcon;this._currentItems.forEach(i=>{const o=i.item;o._siblingsWithChildren=e,o._siblingsWithIcon=t;const a=this._isSubMenu?this._getSubmenuReference(o):o._subMenu;if(a){a.innerHTML="";const c=this._clonedItemsFragment(o);a.appendChild(c),a.busy=o.busy,a.busyDelay=o.busyDelay}})}onAfterRendering(){if(this.opener)if(this.open){const e=this.getOpener();e&&!this.isSubMenuOpened&&this.showAt(e)}else this.close()}async showAt(e){let t=this._getParentMenuItem(this);this._isSubMenu||(t=void 0,this._opener=void 0);const i=!(t!=null&&t.items.length)&&(t==null?void 0:t.busy),o=await this._createPopover();o.initialFocus=`${this._id}-menu-item-0`,o.showAt(e,i)}close(){var e;(e=this._popover)==null||e.close(!1,!1,!0)}async _createPopover(){if(!this._popover){const e=await this.getStaticAreaItemDomRef();this._popover=e.querySelector("[ui5-responsive-popover]")}return this._popover}getOpener(){var t;const e=this.getRootNode();return this.opener instanceof HTMLElement?this.opener:(t=e==null?void 0:e.getElementById)==null?void 0:t.call(e,this.opener)}_navigateBack(){const e=this._getParentMenuItem(this);e&&this._closeItemSubMenu(e,!0)}_closeAll(){let e=this,t;do e&&(e.close(),t=e._getParentMenuItem(e)),e=t?t.parentElement:e;while(t)}_prepareCurrentItems(e){this._currentItems=e.map((t,i)=>({item:t,position:i+1,ariaHasPopup:t.hasSubmenu?"menu":void 0}))}_createSubMenu(e,t){let i=e._subMenu,o=this._getSubmenuReference(e);if(!i&&!this._isSubMenu||!o&&this._isSubMenu){i=document.createElement(this.tagName.toLowerCase()),i._isSubMenu=!0,i.setAttribute("id",`submenu-${t.id}`),i._parentMenuItem=e,i._opener=t,i.busy=e.busy,i.busyDelay=e.busyDelay;const a=this._clonedItemsFragment(e);i.appendChild(a),this.staticAreaItem.shadowRoot.querySelector(".ui5-menu-submenus").appendChild(i),o=i}e._subMenu=this._isSubMenu?o:i}_getSubmenuReference(e){var i;const t=(i=e.parentElement)==null?void 0:i.items.indexOf(e);return this.staticAreaItem?this.staticAreaItem.shadowRoot.querySelector(`.ui5-menu-submenus > ui5-menu[id$=menu-item-${t}]`):void 0}_clonedItemsFragment(e){const t=document.createDocumentFragment();for(let i=0;i<e.items.length;++i){const o=e.items[i].cloneNode(!0);t.appendChild(o)}return t}async _openItemSubMenu(e,t){const i=this._findMainMenu(e);i==null||i.fireEvent("before-open",{item:e},!1,!1),await e._subMenu.showAt(t),e._preventSubMenuClose=!0,this._openedSubMenuItem=e,this._subMenuOpenerId=t.id}_closeItemSubMenu(e,t=!1,i=!1){var o;if(e){const a=e._subMenu?e._subMenu:(o=e.parentElement)==null?void 0:o._getSubmenuReference(e);t?(e._preventSubMenuClose=!1,this._closeSubMenuPopover(a,t,i)):setTimeout(()=>this._closeSubMenuPopover(a),0)}}_closeSubMenuPopover(e,t=!1,i=!1){var o;if(e){const a=e._getParentMenuItem(e);(t||!a._preventSubMenuClose)&&(e.close(),i&&((o=e._opener)==null||o.focus()),this._openedSubMenuItem=void 0,this._subMenuOpenerId="")}}async _prepareSubMenu(e,t){const i=e.parentElement?e:t.associatedItem,o=this._getParentMenuItem(i);(t.id!==this._subMenuOpenerId||i&&i.hasSubmenu)&&this._closeItemSubMenu(this._openedSubMenuItem,!0),i&&i.hasSubmenu&&(this._createSubMenu(i,t),await this._openItemSubMenu(i,t)),o&&(o._preventSubMenuClose=!0)}_onfocusin(e){const t=e.target,i=t.hasAttribute("ui5-menu-li")?t:t.getRootNode().host,o=i.associatedItem,a=this._findMainMenu(o);a==null||a.fireEvent("item-focus",{ref:i,item:o})}_startOpenTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(()=>{this._prepareSubMenu(e,t)},Oe)}_startCloseTimeout(e){clearTimeout(this._timeout),this._timeout=setTimeout(()=>{this._closeItemSubMenu(e)},Ce)}_itemMouseOver(e){if(k()){const t=e.target,i=t.associatedItem;t.focus(),this._startOpenTimeout(i,t)}}_busyMouseOver(){const e=this._getParentMenuItem(this);e&&(e._preventSubMenuClose=!0)}_itemMouseOut(e){if(k()){const i=e.target.associatedItem;clearTimeout(this._timeout);const o=this._getSubmenuReference(i);i&&i.hasSubmenu&&o&&(i._preventSubMenuClose=!1,this._startCloseTimeout(i))}}_itemKeyDown(e){const t=this.isRtl?I(e):S(e),i=this.isRtl?S(e):I(e),o=e.target,a=o.associatedItem,c=this._getParentMenuItem(a);if(z(e)&&e.preventDefault(),i)a.hasSubmenu&&this._prepareSubMenu(a,o);else if(t&&this._isSubMenu&&c){const d=c.parentElement;d==null||d._closeItemSubMenu(c,!0,!0)}}_itemClick(e){clearTimeout(this._timeout);const t=e.detail.item,i=t.associatedItem;if(i.hasSubmenu)this._prepareSubMenu(i,t);else if(!this._isSubMenu)!this.fireEvent("item-click",{item:i,text:i.text},!0,!1)||this._popover.close();else{const o=this._findMainMenu(i);if(!!(o!=null&&o.fireEvent("item-click",{item:i,text:i.text},!0,!1))){let c=i,d=c.parentElement;do c._preventSubMenuClose=!1,this._closeItemSubMenu(c),d=c.parentElement,c=d._getParentMenuItem(d);while(d._getParentMenuItem(d));o._popover.close()}}}_findMainMenu(e){let t=this._isMenu(e)?e:e.parentElement,i;do i=this._getParentMenuItem(t),t=i?i.parentElement:t;while(i);return t}_isMenu(e){return e==null?void 0:e.hasAttribute("ui5-menu")}_getParentMenuItem(e){var i;if(!e)return;const t=this._isMenu(e)?e:e.parentElement;return!t._parentMenuItem||t._parentMenuItem.parentElement?t._parentMenuItem:(i=t._opener)==null?void 0:i.associatedItem}_beforePopoverOpen(e){!this.fireEvent("before-open",{},!0,!1)&&(this.open=!1,e.preventDefault())}_afterPopoverOpen(){this.open=!0,this.fireEvent("after-open",{},!1,!1)}_beforePopoverClose(e){if(!this.fireEvent("before-close",{escPressed:e.detail.escPressed},!0,!1)){this.open=!0,e.preventDefault();return}this._openedSubMenuItem&&(this._openedSubMenuItem._preventSubMenuClose=!1,this._closeItemSubMenu(this._openedSubMenuItem))}_afterPopoverClose(){this.open=!1,this.fireEvent("after-close",{},!1,!1)}};b([l()],p.prototype,"headerText",void 0);b([l({type:Boolean})],p.prototype,"open",void 0);b([l({type:Boolean})],p.prototype,"busy",void 0);b([l({validator:x,defaultValue:1e3})],p.prototype,"busyDelay",void 0);b([l({validator:N,defaultValue:""})],p.prototype,"opener",void 0);b([l({type:Boolean,noAttribute:!0})],p.prototype,"_isSubMenu",void 0);b([l()],p.prototype,"_subMenuOpenerId",void 0);b([l({type:Object,multiple:!0})],p.prototype,"_currentItems",void 0);b([l({type:Object,defaultValue:void 0})],p.prototype,"_popover",void 0);b([l({type:Object,defaultValue:void 0})],p.prototype,"_parentMenuItem",void 0);b([l({type:Object,defaultValue:void 0})],p.prototype,"_opener",void 0);b([l({type:Object,defaultValue:void 0})],p.prototype,"_openedSubMenuItem",void 0);b([R({default:!0,type:HTMLElement,invalidateOnChildChange:!0})],p.prototype,"items",void 0);p=$=b([M({tag:"ui5-menu",renderer:H,staticAreaStyles:we,staticAreaTemplate:ke,dependencies:[V,F,K,G,Se,A,J]}),v("item-click",{detail:{item:{type:HTMLElement},text:{type:String}}}),v("before-open",{detail:{item:{type:HTMLElement}}}),v("after-open"),v("before-close",{detail:{escPressed:{type:Boolean}}}),v("after-close"),v("item-focus",{detail:{ref:{type:HTMLElement},item:{type:HTMLElement}}})],p);p.define();const Pe=p,st=Object.freeze(Object.defineProperty({__proto__:null,default:Pe},Symbol.toStringTag,{value:"Module"}));export{Me as M,Pe as a,tt as b,st as c,we as s};
