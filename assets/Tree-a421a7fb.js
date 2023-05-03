import{a as T,d as V,U as F}from"./UI5Element-e8adceda.js";import{e as o,l,s as n,a as M,b as O,p as c,c as k,d as q}from"./withWebComponent-c710bf85.js";import{s as S}from"./slot-76e48863.js";import{I as U,e as g}from"./Icon-16710c43.js";import{g as X}from"./AriaLabelHelper-43a261ec.js";import{V as I}from"./ValueState-2c5e5904.js";import{I as L}from"./Integer-f7f172c9.js";import{s as G,q as J}from"./Icons-5b18f7d2.js";import{L as B}from"./ListItem-2c0fcc20.js";import"./navigation-right-arrow-9b522e4c.js";import"./navigation-down-arrow-a69745d2.js";import{bg as K,bh as Q,bi as W}from"./i18n-defaults-254d6b69.js";import{o as w}from"./class-map-eee65cb7.js";import{s as D}from"./style-map-eb41b602.js";import{H as Y}from"./HasPopup-47461347.js";import{L as Z,a as N}from"./ListItemBase-49bcf604.js";const x=(e,t,i)=>o`<div><li part="native-li" data-sap-focus-ref tabindex="${l(e._effectiveTabIndex)}" class="${w(e.classes.main)}" @focusin="${e._onfocusin}" @focusout="${e._onfocusout}" @keyup="${e._onkeyup}" @keydown="${e._onkeydown}" @mouseup="${e._onmouseup}" @mousedown="${e._onmousedown}" @touchstart="${e._ontouchstart}" @touchend="${e._ontouchend}" @click="${e._onclick}" role="${l(e._accInfo.role)}" aria-expanded="${l(e._accInfo.ariaExpanded)}" title="${l(e.title)}" aria-level="${l(e._accInfo.ariaLevel)}" aria-haspopup="${l(e._accInfo.ariaHaspopup)}" aria-posinset="${l(e._accInfo.posinset)}" aria-roledescription="${l(e.accessibleRoleDescription)}" aria-setsize="${l(e._accInfo.setsize)}" aria-describedby="${l(e._id)}-invisibleText-describedby" aria-labelledby="${l(e._accessibleNameRef)}" aria-disabled="${l(e._ariaDisabled)}" aria-selected="${l(e._accInfo.ariaSelected)}" aria-checked="${l(e._accInfo.ariaChecked)}" aria-owns="${l(e._accInfo.ariaOwns)}"><div class="ui5-li-tree-toggle-box" style="${D(e.styles.preContent)}">${e._showToggleButtonBeginning?ee(e,t,i):void 0}</div>${e.placeSelectionElementBefore?ie(e,t,i):void 0}<div id="${l(e._id)}-content" class="ui5-li-content">${e.icon?se(e,t,i):void 0}</div>${e._showToggleButtonEnd?de(e,t,i):void 0}${e.typeDetail?ce(e,t,i):void 0}${e.typeNavigation?re(e,t,i):void 0}${e.navigated?ue():void 0}${e.placeSelectionElementAfter?be(e,t,i):void 0}<span id="${l(e._id)}-invisibleText" class="ui5-hidden-text">${l(e._accInfo.listItemAriaLabel)}${l(e.accessibleName)}</span><span id="${l(e._id)}-invisibleText-describedby" class="ui5-hidden-text">${l(e._accInfo.ariaSelectedText)}</span></li>${e.expanded?he(e):void 0}</div>`,ee=(e,t,i)=>i?o`<${n("ui5-icon",t,i)} part="toggle-icon" class="ui5-li-tree-toggle-icon" name="${l(e._toggleIconName)}" show-tooltip accessible-name="${l(e.iconAccessibleName)}" @click="${e._toggleClick}"></${n("ui5-icon",t,i)}>`:o`<ui5-icon part="toggle-icon" class="ui5-li-tree-toggle-icon" name="${l(e._toggleIconName)}" show-tooltip accessible-name="${l(e.iconAccessibleName)}" @click="${e._toggleClick}"></ui5-icon>`,ie=(e,t,i)=>o`${e.modeSingleSelect?te(e,t,i):void 0}${e.modeMultiSelect?le(e,t,i):void 0}${e.renderDeleteButton?oe(e,t,i):void 0}`,te=(e,t,i)=>i?o`<${n("ui5-radio-button",t,i)} ?disabled="${e.isInactive}" accessible-name="${l(e._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${l(e._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${e.selected}" @click="${e.onSingleSelectionComponentPress}"></${n("ui5-radio-button",t,i)}>`:o`<ui5-radio-button ?disabled="${e.isInactive}" accessible-name="${l(e._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${l(e._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${e.selected}" @click="${e.onSingleSelectionComponentPress}"></ui5-radio-button>`,le=(e,t,i)=>i?o`<${n("ui5-checkbox",t,i)} ?disabled="${e.isInactive}" ?indeterminate=${e.indeterminate} tabindex="-1" id="${l(e._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${e.selected}" accessible-name="${l(e._accInfo.ariaLabel)}" @click="${e.onMultiSelectionComponentPress}"></${n("ui5-checkbox",t,i)}>`:o`<ui5-checkbox ?disabled="${e.isInactive}" ?indeterminate=${e.indeterminate} tabindex="-1" id="${l(e._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${e.selected}" accessible-name="${l(e._accInfo.ariaLabel)}" @click="${e.onMultiSelectionComponentPress}"></ui5-checkbox>`,oe=(e,t,i)=>o`<div class="ui5-li-deletebtn">${e.hasDeleteButtonSlot?ne():ae(e,t,i)}</div>`,ne=(e,t,i)=>o`<slot name="deleteButton"></slot>`,ae=(e,t,i)=>i?o`<${n("ui5-button",t,i)} tabindex="-1" data-sap-no-tab-ref id="${l(e._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${e.disableDeleteButton}" @click="${e.onDelete}" tooltip="${l(e.deleteText)}"></${n("ui5-button",t,i)}>`:o`<ui5-button tabindex="-1" data-sap-no-tab-ref id="${l(e._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${e.disableDeleteButton}" @click="${e.onDelete}" tooltip="${l(e.deleteText)}"></ui5-button>`,se=(e,t,i)=>i?o`<${n("ui5-icon",t,i)} part="icon" name="${l(e.icon)}" class="ui5-li-icon"></${n("ui5-icon",t,i)}>`:o`<ui5-icon part="icon" name="${l(e.icon)}" class="ui5-li-icon"></ui5-icon>`,de=(e,t,i)=>i?o`<${n("ui5-icon",t,i)} part="toggle-icon" class="ui5-li-tree-toggle-icon" name="${l(e._toggleIconName)}" @click="${e._toggleClick}"></${n("ui5-icon",t,i)}>`:o`<ui5-icon part="toggle-icon" class="ui5-li-tree-toggle-icon" name="${l(e._toggleIconName)}" @click="${e._toggleClick}"></ui5-icon>`,ce=(e,t,i)=>i?o`<div class="ui5-li-detailbtn"><${n("ui5-button",t,i)} design="Transparent" icon="edit" @click="${e.onDetailClick}"></${n("ui5-button",t,i)}></div>`:o`<div class="ui5-li-detailbtn"><ui5-button design="Transparent" icon="edit" @click="${e.onDetailClick}"></ui5-button></div>`,re=(e,t,i)=>i?o`<${n("ui5-icon",t,i)} name ="slim-arrow-right"></${n("ui5-icon",t,i)}>`:o`<ui5-icon name ="slim-arrow-right"></ui5-icon>`,ue=(e,t,i)=>o`<div class="ui5-li-navigated"></div>`,be=(e,t,i)=>o`${e.modeSingleSelect?me(e,t,i):void 0}${e.modeMultiSelect?$e(e,t,i):void 0}${e.renderDeleteButton?pe(e,t,i):void 0}`,me=(e,t,i)=>i?o`<${n("ui5-radio-button",t,i)} ?disabled="${e.isInactive}" accessible-name="${l(e._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${l(e._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${e.selected}" @click="${e.onSingleSelectionComponentPress}"></${n("ui5-radio-button",t,i)}>`:o`<ui5-radio-button ?disabled="${e.isInactive}" accessible-name="${l(e._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${l(e._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${e.selected}" @click="${e.onSingleSelectionComponentPress}"></ui5-radio-button>`,$e=(e,t,i)=>i?o`<${n("ui5-checkbox",t,i)} ?disabled="${e.isInactive}" ?indeterminate=${e.indeterminate} tabindex="-1" id="${l(e._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${e.selected}" accessible-name="${l(e._accInfo.ariaLabel)}" @click="${e.onMultiSelectionComponentPress}"></${n("ui5-checkbox",t,i)}>`:o`<ui5-checkbox ?disabled="${e.isInactive}" ?indeterminate=${e.indeterminate} tabindex="-1" id="${l(e._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${e.selected}" accessible-name="${l(e._accInfo.ariaLabel)}" @click="${e.onMultiSelectionComponentPress}"></ui5-checkbox>`,pe=(e,t,i)=>o`<div class="ui5-li-deletebtn">${e.hasDeleteButtonSlot?ge():_e(e,t,i)}</div>`,ge=(e,t,i)=>o`<slot name="deleteButton"></slot>`,_e=(e,t,i)=>i?o`<${n("ui5-button",t,i)} tabindex="-1" data-sap-no-tab-ref id="${l(e._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${e.disableDeleteButton}" @click="${e.onDelete}" tooltip="${l(e.deleteText)}"></${n("ui5-button",t,i)}>`:o`<ui5-button tabindex="-1" data-sap-no-tab-ref id="${l(e._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${e.disableDeleteButton}" @click="${e.onDelete}" tooltip="${l(e.deleteText)}"></ui5-button>`,he=(e,t,i)=>o`<ul role="group" id="${l(e._id)}-subtree" class="ui5-tree-li-subtree"><slot></slot></ul>`;T("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);T("@ui5/webcomponents","sap_fiori_3",async()=>O);const C={packageName:"@ui5/webcomponents",fileName:"themes/TreeItem.css.ts",content:'.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:block;position:relative}:host([_minimal]) .ui5-li-tree-toggle-box{width:0;min-width:0}:host([_minimal]) .ui5-li-icon{padding:0}:host([_minimal]) .ui5-li-content{justify-content:center}:host([_minimal]) .ui5-li-root-tree{padding:0}:host([_minimal][show-toggle-button]):after{content:"";width:0;height:0;border-left:.375rem solid transparent;border-bottom:.375rem solid var(--sapContent_NonInteractiveIconColor);position:absolute;right:.1875rem;bottom:.125rem}:host([_minimal]) .ui5-li-tree-text-wrapper{display:none}.ui5-li-root-tree{padding-inline-start:0}:host(:not([level="1"])) .ui5-li-root{border-color:var(--sapList_AlternatingBackground)}:host([_toggle-button-end][selected]:not([level="1"])) .ui5-li-root{border-bottom:var(--ui5-listitem-selected-border-bottom)}:host([_mode]:not([_mode=None]):not([_mode=Delete]):not([selected])) .ui5-li-root-tree:hover,:host([_toggle-button-end]:not([selected])) .ui5-li-root-tree:hover{background:var(--sapList_Hover_Background);cursor:pointer}:host(:not([level="1"]):not([selected])) .ui5-li-root-tree{background:var(--sapList_AlternatingBackground)}:host([_toggle-button-end]:not([level="1"])) .ui5-li-root-tree{background:var(--ui5-listitem-background-color)}:host([_toggle-button-end][selected]:not([level="1"])) .ui5-li-root-tree{background:var(--sapList_SelectionBackgroundColor)}:host([_mode]:not([_mode=None]):not([_mode=Delete])[selected]) .ui5-li-root-tree:hover{background-color:var(--sapList_Hover_SelectionBackground);cursor:pointer}.ui5-li-tree-toggle-box{min-width:var(--_ui5-tree-toggle-box-width);min-height:var(--_ui5-tree-toggle-box-height);display:flex;align-items:center;justify-content:center;flex-shrink:0}.ui5-li-tree-toggle-icon{width:var(--_ui5-tree-toggle-icon-size);height:var(--_ui5-tree-toggle-icon-size);color:var(--sapContent_IconColor);cursor:pointer}:host([actionable]) .ui5-li-tree-toggle-icon{color:var(--sapButton_TextColor)}:host([active][actionable]) .ui5-li-tree-toggle-icon{color:var(--sapList_Active_TextColor)}.ui5-li-tree-text-wrapper{display:flex;justify-content:space-between;width:100%}:host{height:unset}.ui5-li-root{height:var(--_ui5_list_item_base_height)}:host([selected]){background:unset}:host([selected]) .ui5-li-root{background:var(--sapList_SelectionBackgroundColor)}:host([has-border]){border-bottom:unset}:host([has-border]) .ui5-li-root{border-bottom:var(--ui5-listitem-border-bottom)}:host(:not([focused])[selected][has-border]){border-bottom:unset}:host(:not([focused])[selected][has-border]) .ui5-li-root{border-bottom:var(--ui5-listitem-selected-border-bottom)}:host([focused][selected]){border-bottom:unset}:host([focused][selected]) .ui5-li-root{border-bottom:var(--ui5-listitem-focused-selected-border-bottom)}.ui5-tree-li-subtree{margin:0;padding:0;list-style:none}'};var m=globalThis&&globalThis.__decorate||function(e,t,i,s){var d=arguments.length,a=d<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,i):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,i,s);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(a=(d<3?r(a):d>3?r(t,i,a):r(t,i))||a);return d>3&&a&&Object.defineProperty(t,i,a),a},h;let b=h=class extends B{onBeforeRendering(){this.actionable=!1,this.showToggleButton=this.requiresToggleButton}get classes(){const t=super.classes;return t.main["ui5-li-root-tree"]=!0,t}get styles(){return{preContent:{"padding-left":`calc(var(--_ui5-tree-indent-step) * ${this.effectiveLevel})`}}}get requiresToggleButton(){return this._fixed?!1:this.hasChildren||this.items.length>0}get effectiveLevel(){return this.level-1}get hasParent(){return this.level>1}get _toggleIconName(){return this.expanded?"navigation-down-arrow":"navigation-right-arrow"}get _showToggleButtonBeginning(){return this.showToggleButton&&!this._minimal&&!this._toggleButtonEnd}get _showToggleButtonEnd(){return this.showToggleButton&&!this._minimal&&this._toggleButtonEnd}get _ariaLabel(){return this.accessibleRoleDescription?void 0:h.i18nBundle.getText(K)}get _accInfo(){const t={role:this._minimal?"menuitemradio":"treeitem",ariaExpanded:this.showToggleButton&&!this._minimal?this.expanded:void 0,ariaLevel:this._minimal?void 0:this.level,posinset:this._posinset,setsize:this._setsize,ariaSelectedText:this.ariaSelectedText,listItemAriaLabel:this.accessibleName?void 0:this._ariaLabel,ariaOwns:this.expanded?`${this._id}-subtree`:void 0,ariaHaspopup:this.ariaHaspopup||void 0,ariaChecked:!1,ariaSelected:!1};return this._minimal?t.ariaChecked=this.selected:t.ariaSelected=this.selected,{...super._accInfo,...t}}get isTreeItem(){return!0}toggle(){this.expanded=!this.expanded}_toggleClick(t){t.stopPropagation(),this.fireEvent("toggle",{item:this})}_onkeydown(t){super._onkeydown(t),!this._fixed&&this.showToggleButton&&G(t)&&(this.expanded?this.fireEvent("step-in",{item:this}):this.fireEvent("toggle",{item:this})),!this._fixed&&J(t)&&(this.expanded?this.fireEvent("toggle",{item:this}):this.hasParent&&this.fireEvent("step-out",{item:this}))}get iconAccessibleName(){return this.expanded?h.i18nBundle.getText(Q):h.i18nBundle.getText(W)}static async onDefine(){[h.i18nBundle]=await Promise.all([V("@ui5/webcomponents"),super.onDefine()])}};m([c({validator:L,defaultValue:1})],b.prototype,"level",void 0);m([c()],b.prototype,"icon",void 0);m([c({type:Boolean})],b.prototype,"showToggleButton",void 0);m([c({type:Boolean})],b.prototype,"expanded",void 0);m([c({type:Boolean})],b.prototype,"indeterminate",void 0);m([c({type:Boolean})],b.prototype,"hasChildren",void 0);m([c({type:I,defaultValue:I.None})],b.prototype,"additionalTextState",void 0);m([c()],b.prototype,"accessibleName",void 0);m([c({type:Boolean})],b.prototype,"_toggleButtonEnd",void 0);m([c({type:Boolean})],b.prototype,"_minimal",void 0);m([c({validator:L,defaultValue:1,noAttribute:!0})],b.prototype,"_setsize",void 0);m([c({validator:L,defaultValue:1,noAttribute:!0})],b.prototype,"_posinset",void 0);m([c({type:String,defaultValue:void 0,noAttribute:!0})],b.prototype,"accessibleRoleDescription",void 0);m([c({type:Boolean})],b.prototype,"_fixed",void 0);m([c({type:Y,noAttribute:!0})],b.prototype,"ariaHaspopup",void 0);m([S({type:HTMLElement,default:!0})],b.prototype,"items",void 0);b=h=m([k({languageAware:!0,template:x,styles:[B.styles,C],dependencies:[...B.dependencies,U]}),g("toggle",{detail:{item:{type:HTMLElement}}}),g("step-in",{detail:{item:{type:HTMLElement}}}),g("step-out",{detail:{item:{type:HTMLElement}}})],b);const y=b,ve=(e,t,i)=>o`<div><li part="native-li" data-sap-focus-ref tabindex="${l(e._effectiveTabIndex)}" class="${w(e.classes.main)}" @focusin="${e._onfocusin}" @focusout="${e._onfocusout}" @keyup="${e._onkeyup}" @keydown="${e._onkeydown}" @mouseup="${e._onmouseup}" @mousedown="${e._onmousedown}" @touchstart="${e._ontouchstart}" @touchend="${e._ontouchend}" @click="${e._onclick}" role="${l(e._accInfo.role)}" aria-expanded="${l(e._accInfo.ariaExpanded)}" title="${l(e.title)}" aria-level="${l(e._accInfo.ariaLevel)}" aria-haspopup="${l(e._accInfo.ariaHaspopup)}" aria-posinset="${l(e._accInfo.posinset)}" aria-roledescription="${l(e.accessibleRoleDescription)}" aria-setsize="${l(e._accInfo.setsize)}" aria-describedby="${l(e._id)}-invisibleText-describedby" aria-labelledby="${l(e._accessibleNameRef)}" aria-disabled="${l(e._ariaDisabled)}" aria-selected="${l(e._accInfo.ariaSelected)}" aria-checked="${l(e._accInfo.ariaChecked)}" aria-owns="${l(e._accInfo.ariaOwns)}"><div class="ui5-li-tree-toggle-box" style="${D(e.styles.preContent)}">${e._showToggleButtonBeginning?ke(e,t,i):void 0}</div>${e.placeSelectionElementBefore?Ie(e,t,i):void 0}<div id="${l(e._id)}-content" class="ui5-li-content">${e.icon?Be(e,t,i):void 0}<div class="ui5-li-tree-text-wrapper">${e._showTitle?Le(e):void 0}${e.additionalText?we(e):void 0}</div></div>${e._showToggleButtonEnd?De(e,t,i):void 0}${e.typeDetail?Ce(e,t,i):void 0}${e.typeNavigation?Re(e,t,i):void 0}${e.navigated?Ne():void 0}${e.placeSelectionElementAfter?Pe(e,t,i):void 0}<span id="${l(e._id)}-invisibleText" class="ui5-hidden-text">${l(e._accInfo.listItemAriaLabel)}${l(e.accessibleName)}</span><span id="${l(e._id)}-invisibleText-describedby" class="ui5-hidden-text">${l(e._accInfo.ariaSelectedText)}</span></li>${e.expanded?ze(e):void 0}</div>`,ke=(e,t,i)=>i?o`<${n("ui5-icon",t,i)} part="toggle-icon" class="ui5-li-tree-toggle-icon" name="${l(e._toggleIconName)}" show-tooltip accessible-name="${l(e.iconAccessibleName)}" @click="${e._toggleClick}"></${n("ui5-icon",t,i)}>`:o`<ui5-icon part="toggle-icon" class="ui5-li-tree-toggle-icon" name="${l(e._toggleIconName)}" show-tooltip accessible-name="${l(e.iconAccessibleName)}" @click="${e._toggleClick}"></ui5-icon>`,Ie=(e,t,i)=>o`${e.modeSingleSelect?fe(e,t,i):void 0}${e.modeMultiSelect?Te(e,t,i):void 0}${e.renderDeleteButton?Se(e,t,i):void 0}`,fe=(e,t,i)=>i?o`<${n("ui5-radio-button",t,i)} ?disabled="${e.isInactive}" accessible-name="${l(e._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${l(e._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${e.selected}" @click="${e.onSingleSelectionComponentPress}"></${n("ui5-radio-button",t,i)}>`:o`<ui5-radio-button ?disabled="${e.isInactive}" accessible-name="${l(e._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${l(e._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${e.selected}" @click="${e.onSingleSelectionComponentPress}"></ui5-radio-button>`,Te=(e,t,i)=>i?o`<${n("ui5-checkbox",t,i)} ?disabled="${e.isInactive}" ?indeterminate=${e.indeterminate} tabindex="-1" id="${l(e._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${e.selected}" accessible-name="${l(e._accInfo.ariaLabel)}" @click="${e.onMultiSelectionComponentPress}"></${n("ui5-checkbox",t,i)}>`:o`<ui5-checkbox ?disabled="${e.isInactive}" ?indeterminate=${e.indeterminate} tabindex="-1" id="${l(e._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${e.selected}" accessible-name="${l(e._accInfo.ariaLabel)}" @click="${e.onMultiSelectionComponentPress}"></ui5-checkbox>`,Se=(e,t,i)=>o`<div class="ui5-li-deletebtn">${e.hasDeleteButtonSlot?ye():Ee(e,t,i)}</div>`,ye=(e,t,i)=>o`<slot name="deleteButton"></slot>`,Ee=(e,t,i)=>i?o`<${n("ui5-button",t,i)} tabindex="-1" data-sap-no-tab-ref id="${l(e._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${e.disableDeleteButton}" @click="${e.onDelete}" tooltip="${l(e.deleteText)}"></${n("ui5-button",t,i)}>`:o`<ui5-button tabindex="-1" data-sap-no-tab-ref id="${l(e._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${e.disableDeleteButton}" @click="${e.onDelete}" tooltip="${l(e.deleteText)}"></ui5-button>`,Be=(e,t,i)=>i?o`<${n("ui5-icon",t,i)} part="icon" name="${l(e.icon)}" class="ui5-li-icon"></${n("ui5-icon",t,i)}>`:o`<ui5-icon part="icon" name="${l(e.icon)}" class="ui5-li-icon"></ui5-icon>`,Le=(e,t,i)=>o`<div part="title" class="ui5-li-title">${l(e.text)}</div>`,we=(e,t,i)=>o`<span part="additional-text" class="ui5-li-additional-text">${l(e.additionalText)}</span>`,De=(e,t,i)=>i?o`<${n("ui5-icon",t,i)} part="toggle-icon" class="ui5-li-tree-toggle-icon" name="${l(e._toggleIconName)}" @click="${e._toggleClick}"></${n("ui5-icon",t,i)}>`:o`<ui5-icon part="toggle-icon" class="ui5-li-tree-toggle-icon" name="${l(e._toggleIconName)}" @click="${e._toggleClick}"></ui5-icon>`,Ce=(e,t,i)=>i?o`<div class="ui5-li-detailbtn"><${n("ui5-button",t,i)} design="Transparent" icon="edit" @click="${e.onDetailClick}"></${n("ui5-button",t,i)}></div>`:o`<div class="ui5-li-detailbtn"><ui5-button design="Transparent" icon="edit" @click="${e.onDetailClick}"></ui5-button></div>`,Re=(e,t,i)=>i?o`<${n("ui5-icon",t,i)} name ="slim-arrow-right"></${n("ui5-icon",t,i)}>`:o`<ui5-icon name ="slim-arrow-right"></ui5-icon>`,Ne=(e,t,i)=>o`<div class="ui5-li-navigated"></div>`,Pe=(e,t,i)=>o`${e.modeSingleSelect?Me(e,t,i):void 0}${e.modeMultiSelect?Oe(e,t,i):void 0}${e.renderDeleteButton?Ae(e,t,i):void 0}`,Me=(e,t,i)=>i?o`<${n("ui5-radio-button",t,i)} ?disabled="${e.isInactive}" accessible-name="${l(e._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${l(e._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${e.selected}" @click="${e.onSingleSelectionComponentPress}"></${n("ui5-radio-button",t,i)}>`:o`<ui5-radio-button ?disabled="${e.isInactive}" accessible-name="${l(e._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${l(e._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${e.selected}" @click="${e.onSingleSelectionComponentPress}"></ui5-radio-button>`,Oe=(e,t,i)=>i?o`<${n("ui5-checkbox",t,i)} ?disabled="${e.isInactive}" ?indeterminate=${e.indeterminate} tabindex="-1" id="${l(e._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${e.selected}" accessible-name="${l(e._accInfo.ariaLabel)}" @click="${e.onMultiSelectionComponentPress}"></${n("ui5-checkbox",t,i)}>`:o`<ui5-checkbox ?disabled="${e.isInactive}" ?indeterminate=${e.indeterminate} tabindex="-1" id="${l(e._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${e.selected}" accessible-name="${l(e._accInfo.ariaLabel)}" @click="${e.onMultiSelectionComponentPress}"></ui5-checkbox>`,Ae=(e,t,i)=>o`<div class="ui5-li-deletebtn">${e.hasDeleteButtonSlot?He():je(e,t,i)}</div>`,He=(e,t,i)=>o`<slot name="deleteButton"></slot>`,je=(e,t,i)=>i?o`<${n("ui5-button",t,i)} tabindex="-1" data-sap-no-tab-ref id="${l(e._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${e.disableDeleteButton}" @click="${e.onDelete}" tooltip="${l(e.deleteText)}"></${n("ui5-button",t,i)}>`:o`<ui5-button tabindex="-1" data-sap-no-tab-ref id="${l(e._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${e.disableDeleteButton}" @click="${e.onDelete}" tooltip="${l(e.deleteText)}"></ui5-button>`,ze=(e,t,i)=>o`<ul role="group" id="${l(e._id)}-subtree" class="ui5-tree-li-subtree"><slot></slot></ul>`;var E=globalThis&&globalThis.__decorate||function(e,t,i,s){var d=arguments.length,a=d<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,i):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,i,s);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(a=(d<3?r(a):d>3?r(t,i,a):r(t,i))||a);return d>3&&a&&Object.defineProperty(t,i,a),a};let _=class extends y{get _showTitle(){return this.text.length&&!this._minimal}};E([c()],_.prototype,"text",void 0);E([c()],_.prototype,"additionalText",void 0);E([c({type:I,defaultValue:I.None})],_.prototype,"additionalTextState",void 0);_=E([k({tag:"ui5-tree-item",template:ve,styles:[y.styles,C]})],_);_.define();const A=_,Di=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"})),Ve=(e,t,i)=>o`<div><li part="native-li" data-sap-focus-ref tabindex="${l(e._effectiveTabIndex)}" class="${w(e.classes.main)}" @focusin="${e._onfocusin}" @focusout="${e._onfocusout}" @keyup="${e._onkeyup}" @keydown="${e._onkeydown}" @mouseup="${e._onmouseup}" @mousedown="${e._onmousedown}" @touchstart="${e._ontouchstart}" @touchend="${e._ontouchend}" @click="${e._onclick}" role="${l(e._accInfo.role)}" aria-expanded="${l(e._accInfo.ariaExpanded)}" title="${l(e.title)}" aria-level="${l(e._accInfo.ariaLevel)}" aria-haspopup="${l(e._accInfo.ariaHaspopup)}" aria-posinset="${l(e._accInfo.posinset)}" aria-roledescription="${l(e.accessibleRoleDescription)}" aria-setsize="${l(e._accInfo.setsize)}" aria-describedby="${l(e._id)}-invisibleText-describedby" aria-labelledby="${l(e._accessibleNameRef)}" aria-disabled="${l(e._ariaDisabled)}" aria-selected="${l(e._accInfo.ariaSelected)}" aria-checked="${l(e._accInfo.ariaChecked)}" aria-owns="${l(e._accInfo.ariaOwns)}"><div class="ui5-li-tree-toggle-box" style="${D(e.styles.preContent)}">${e._showToggleButtonBeginning?Fe(e,t,i):void 0}</div>${e.placeSelectionElementBefore?qe(e,t,i):void 0}<div id="${l(e._id)}-content" class="ui5-li-content">${e.icon?Qe(e,t,i):void 0}<div class="ui5-li-tree-text-wrapper"><slot name="content" slot="content"></slot></div></div>${e._showToggleButtonEnd?We(e,t,i):void 0}${e.typeDetail?Ye(e,t,i):void 0}${e.typeNavigation?Ze(e,t,i):void 0}${e.navigated?xe():void 0}${e.placeSelectionElementAfter?ei(e,t,i):void 0}<span id="${l(e._id)}-invisibleText" class="ui5-hidden-text">${l(e._accInfo.listItemAriaLabel)}${l(e.accessibleName)}</span><span id="${l(e._id)}-invisibleText-describedby" class="ui5-hidden-text">${l(e._accInfo.ariaSelectedText)}</span></li>${e.expanded?ai(e):void 0}</div>`,Fe=(e,t,i)=>i?o`<${n("ui5-icon",t,i)} part="toggle-icon" class="ui5-li-tree-toggle-icon" name="${l(e._toggleIconName)}" show-tooltip accessible-name="${l(e.iconAccessibleName)}" @click="${e._toggleClick}"></${n("ui5-icon",t,i)}>`:o`<ui5-icon part="toggle-icon" class="ui5-li-tree-toggle-icon" name="${l(e._toggleIconName)}" show-tooltip accessible-name="${l(e.iconAccessibleName)}" @click="${e._toggleClick}"></ui5-icon>`,qe=(e,t,i)=>o`${e.modeSingleSelect?Ue(e,t,i):void 0}${e.modeMultiSelect?Xe(e,t,i):void 0}${e.renderDeleteButton?Ge(e,t,i):void 0}`,Ue=(e,t,i)=>i?o`<${n("ui5-radio-button",t,i)} ?disabled="${e.isInactive}" accessible-name="${l(e._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${l(e._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${e.selected}" @click="${e.onSingleSelectionComponentPress}"></${n("ui5-radio-button",t,i)}>`:o`<ui5-radio-button ?disabled="${e.isInactive}" accessible-name="${l(e._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${l(e._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${e.selected}" @click="${e.onSingleSelectionComponentPress}"></ui5-radio-button>`,Xe=(e,t,i)=>i?o`<${n("ui5-checkbox",t,i)} ?disabled="${e.isInactive}" ?indeterminate=${e.indeterminate} tabindex="-1" id="${l(e._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${e.selected}" accessible-name="${l(e._accInfo.ariaLabel)}" @click="${e.onMultiSelectionComponentPress}"></${n("ui5-checkbox",t,i)}>`:o`<ui5-checkbox ?disabled="${e.isInactive}" ?indeterminate=${e.indeterminate} tabindex="-1" id="${l(e._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${e.selected}" accessible-name="${l(e._accInfo.ariaLabel)}" @click="${e.onMultiSelectionComponentPress}"></ui5-checkbox>`,Ge=(e,t,i)=>o`<div class="ui5-li-deletebtn">${e.hasDeleteButtonSlot?Je():Ke(e,t,i)}</div>`,Je=(e,t,i)=>o`<slot name="deleteButton"></slot>`,Ke=(e,t,i)=>i?o`<${n("ui5-button",t,i)} tabindex="-1" data-sap-no-tab-ref id="${l(e._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${e.disableDeleteButton}" @click="${e.onDelete}" tooltip="${l(e.deleteText)}"></${n("ui5-button",t,i)}>`:o`<ui5-button tabindex="-1" data-sap-no-tab-ref id="${l(e._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${e.disableDeleteButton}" @click="${e.onDelete}" tooltip="${l(e.deleteText)}"></ui5-button>`,Qe=(e,t,i)=>i?o`<${n("ui5-icon",t,i)} part="icon" name="${l(e.icon)}" class="ui5-li-icon"></${n("ui5-icon",t,i)}>`:o`<ui5-icon part="icon" name="${l(e.icon)}" class="ui5-li-icon"></ui5-icon>`,We=(e,t,i)=>i?o`<${n("ui5-icon",t,i)} part="toggle-icon" class="ui5-li-tree-toggle-icon" name="${l(e._toggleIconName)}" @click="${e._toggleClick}"></${n("ui5-icon",t,i)}>`:o`<ui5-icon part="toggle-icon" class="ui5-li-tree-toggle-icon" name="${l(e._toggleIconName)}" @click="${e._toggleClick}"></ui5-icon>`,Ye=(e,t,i)=>i?o`<div class="ui5-li-detailbtn"><${n("ui5-button",t,i)} design="Transparent" icon="edit" @click="${e.onDetailClick}"></${n("ui5-button",t,i)}></div>`:o`<div class="ui5-li-detailbtn"><ui5-button design="Transparent" icon="edit" @click="${e.onDetailClick}"></ui5-button></div>`,Ze=(e,t,i)=>i?o`<${n("ui5-icon",t,i)} name ="slim-arrow-right"></${n("ui5-icon",t,i)}>`:o`<ui5-icon name ="slim-arrow-right"></ui5-icon>`,xe=(e,t,i)=>o`<div class="ui5-li-navigated"></div>`,ei=(e,t,i)=>o`${e.modeSingleSelect?ii(e,t,i):void 0}${e.modeMultiSelect?ti(e,t,i):void 0}${e.renderDeleteButton?li(e,t,i):void 0}`,ii=(e,t,i)=>i?o`<${n("ui5-radio-button",t,i)} ?disabled="${e.isInactive}" accessible-name="${l(e._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${l(e._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${e.selected}" @click="${e.onSingleSelectionComponentPress}"></${n("ui5-radio-button",t,i)}>`:o`<ui5-radio-button ?disabled="${e.isInactive}" accessible-name="${l(e._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${l(e._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${e.selected}" @click="${e.onSingleSelectionComponentPress}"></ui5-radio-button>`,ti=(e,t,i)=>i?o`<${n("ui5-checkbox",t,i)} ?disabled="${e.isInactive}" ?indeterminate=${e.indeterminate} tabindex="-1" id="${l(e._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${e.selected}" accessible-name="${l(e._accInfo.ariaLabel)}" @click="${e.onMultiSelectionComponentPress}"></${n("ui5-checkbox",t,i)}>`:o`<ui5-checkbox ?disabled="${e.isInactive}" ?indeterminate=${e.indeterminate} tabindex="-1" id="${l(e._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${e.selected}" accessible-name="${l(e._accInfo.ariaLabel)}" @click="${e.onMultiSelectionComponentPress}"></ui5-checkbox>`,li=(e,t,i)=>o`<div class="ui5-li-deletebtn">${e.hasDeleteButtonSlot?oi():ni(e,t,i)}</div>`,oi=(e,t,i)=>o`<slot name="deleteButton"></slot>`,ni=(e,t,i)=>i?o`<${n("ui5-button",t,i)} tabindex="-1" data-sap-no-tab-ref id="${l(e._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${e.disableDeleteButton}" @click="${e.onDelete}" tooltip="${l(e.deleteText)}"></${n("ui5-button",t,i)}>`:o`<ui5-button tabindex="-1" data-sap-no-tab-ref id="${l(e._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${e.disableDeleteButton}" @click="${e.onDelete}" tooltip="${l(e.deleteText)}"></ui5-button>`,ai=(e,t,i)=>o`<ul role="group" id="${l(e._id)}-subtree" class="ui5-tree-li-subtree"><slot></slot></ul>`;var R=globalThis&&globalThis.__decorate||function(e,t,i,s){var d=arguments.length,a=d<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,i):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,i,s);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(a=(d<3?r(a):d>3?r(t,i,a):r(t,i))||a);return d>3&&a&&Object.defineProperty(t,i,a),a};let v=class extends y{get placeSelectionElementBefore(){return!this.hideSelectionElement&&super.placeSelectionElementBefore}get placeSelectionElementAfter(){return!this.hideSelectionElement&&super.placeSelectionElementAfter}};R([c({type:Boolean})],v.prototype,"hideSelectionElement",void 0);R([S()],v.prototype,"content",void 0);v=R([k({tag:"ui5-tree-item-custom",template:Ve,styles:[y.styles,C]})],v);v.define();const H=v,Ri=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"}));var si=globalThis&&globalThis.__decorate||function(e,t,i,s){var d=arguments.length,a=d<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,i):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,i,s);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(a=(d<3?r(a):d>3?r(t,i,a):r(t,i))||a);return d>3&&a&&Object.defineProperty(t,i,a),a};let f=class extends Z{getItems(t=!1){const i=this.getSlottedNodes("items"),s=[];return j(i,s,t),s}getItemsForProcessing(){return this.getItems(!0)}};f=si([k("ui5-tree-list")],f);const j=(e,t,i=!1)=>{e.forEach(s=>{t.push(s),(s.expanded||i)&&s.items&&j(s.items,t,i)})};f.define();const di=f,ci=(e,t,i)=>i?o`<${n("ui5-tree-list",t,i)} .mode="${l(e.mode)}" .headerText="${l(e.headerText)}" .footerText="${l(e.footerText)}" .noDataText="${l(e.noDataText)}" .accessibleRole="${l(e._role)}" .accessibleName="${l(e._label)}" .accessibleRoleDescription="${l(e.accessibleRoleDescription)}" @ui5-item-click="${l(e._onListItemClick)}" @ui5-item-delete="${l(e._onListItemDelete)}" @ui5-selection-change="${l(e._onListSelectionChange)}" @ui5-toggle="${l(e._onListItemToggle)}" @ui5-step-in="${l(e._onListItemStepIn)}" @ui5-step-out="${l(e._onListItemStepOut)}" @mouseover="${e._onListItemMouseOver}" @mouseout="${e._onListItemMouseOut}" class="ui5-tree-root">${e._hasHeader?P():void 0}<slot></slot></${n("ui5-tree-list",t,i)}>`:o`<ui5-tree-list .mode="${l(e.mode)}" .headerText="${l(e.headerText)}" .footerText="${l(e.footerText)}" .noDataText="${l(e.noDataText)}" .accessibleRole="${l(e._role)}" .accessibleName="${l(e._label)}" .accessibleRoleDescription="${l(e.accessibleRoleDescription)}" @ui5-item-click="${l(e._onListItemClick)}" @ui5-item-delete="${l(e._onListItemDelete)}" @ui5-selection-change="${l(e._onListSelectionChange)}" @ui5-toggle="${l(e._onListItemToggle)}" @ui5-step-in="${l(e._onListItemStepIn)}" @ui5-step-out="${l(e._onListItemStepOut)}" @mouseover="${e._onListItemMouseOver}" @mouseout="${e._onListItemMouseOut}" class="ui5-tree-root">${e._hasHeader?P():void 0}<slot></slot></ui5-tree-list>`,P=(e,t,i)=>o`<slot name="header" slot="header"></slot>`;T("@ui5/webcomponents-theming","sap_fiori_3",async()=>M);T("@ui5/webcomponents","sap_fiori_3",async()=>O);const ri={packageName:"@ui5/webcomponents",fileName:"themes/Tree.css.ts",content:".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:block;width:100%}.ui5-tree-root{height:100%;width:100%}"};var p=globalThis&&globalThis.__decorate||function(e,t,i,s){var d=arguments.length,a=d<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,i):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,i,s);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(a=(d<3?r(a):d>3?r(t,i,a):r(t,i))||a);return d>3&&a&&Object.defineProperty(t,i,a),a};let $=class extends F{onBeforeRendering(){this._prepareTreeItems()}get list(){return this.getDomRef()}get _role(){return this._minimal?"menubar":"tree"}get _label(){return X(this)}get _hasHeader(){return!!this.header.length}_onListItemStepIn(t){const i=t.detail.item;if(i.items.length>0){const s=i.items[0],d=this._getListItemForTreeItem(s);d&&this.list.focusItem(d)}}_onListItemStepOut(t){const i=t.detail.item;if(i.parentElement!==this){const s=i.parentElement,d=this._getListItemForTreeItem(s);d&&this.list.focusItem(d)}}_onListItemToggle(t){const i=t.detail.item;!this.fireEvent("item-toggle",{item:i},!0)||i.toggle()}_onListItemClick(t){const i=t.detail.item;this.fireEvent("item-click",{item:i},!0)||t.preventDefault()}_onListItemDelete(t){const i=t.detail.item;this.fireEvent("item-delete",{item:i})}_onListItemMouseOver(t){const i=t.target;this._isInstanceOfTreeItemBase(i)&&this.fireEvent("item-mouseover",{item:i})}_onListItemMouseOut(t){const i=t.target;this._isInstanceOfTreeItemBase(i)&&this.fireEvent("item-mouseout",{item:i})}_onListSelectionChange(t){const i=t.detail.previouslySelectedItems,s=t.detail.selectedItems,d=t.detail.targetItem;i.forEach(a=>{a.selected=!1}),s.forEach(a=>{a.selected=!0}),this.fireEvent("selection-change",{previouslySelectedItems:i,selectedItems:s,targetItem:d})}_prepareTreeItems(){this.walk((t,i,s)=>{const d=t.parentNode,a=d&&d.children.length||this.items.length;t.setAttribute("level",i.toString()),t._toggleButtonEnd=this._toggleButtonEnd,t._minimal=this._minimal,t._setsize=a,t._posinset=s+1})}_getListItemForTreeItem(t){return this.getItems().find(i=>i===t)}getItems(){return this.list.getItems()}focusItemByIndex(t){const i=this.getItems()[t];i&&this.list.focusItem(i)}walk(t){z(this,1,t)}_isInstanceOfTreeItemBase(t){return"isTreeItem"in t}};p([c({type:N,defaultValue:N.None})],$.prototype,"mode",void 0);p([c()],$.prototype,"noDataText",void 0);p([c()],$.prototype,"headerText",void 0);p([c()],$.prototype,"footerText",void 0);p([c()],$.prototype,"accessibleName",void 0);p([c()],$.prototype,"accessibleNameRef",void 0);p([c({defaultValue:void 0,noAttribute:!0})],$.prototype,"accessibleRoleDescription",void 0);p([c({type:Boolean})],$.prototype,"_toggleButtonEnd",void 0);p([c({type:Boolean})],$.prototype,"_minimal",void 0);p([S({type:HTMLElement,invalidateOnChildChange:!0,default:!0})],$.prototype,"items",void 0);p([S()],$.prototype,"header",void 0);$=p([k({tag:"ui5-tree",renderer:q,styles:ri,template:ci,dependencies:[di,A,H]}),g("item-toggle",{detail:{item:{type:HTMLElement}}}),g("item-mouseover",{detail:{item:{type:HTMLElement}}}),g("item-mouseout",{detail:{item:{type:HTMLElement}}}),g("item-click",{detail:{item:{type:HTMLElement}}}),g("item-delete",{detail:{item:{type:HTMLElement}}}),g("selection-change",{detail:{selectedItems:{type:Array},previouslySelectedItems:{type:Array},targetItem:{type:HTMLElement}}})],$);const z=(e,t,i)=>{e.items.forEach((s,d)=>{i(s,t,d),s.items.length>0&&z(s,t+1,i)})};$.define();const ui=$,Mi=Object.freeze(Object.defineProperty({__proto__:null,default:ui},Symbol.toStringTag,{value:"Module"}));export{ui as T,A as a,Di as b,Ri as c,Mi as d};
//# sourceMappingURL=Tree-a421a7fb.js.map
