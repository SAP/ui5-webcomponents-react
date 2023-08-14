import{j as p}from"./jsx-runtime-d079401a.js";import{r as x,U as L,l as Se,m as M}from"./UI5Element-a4bd3d38.js";import{k as we,l as _e,a as ze,r as y}from"./Icons-74c917eb.js";import{r as G}from"./index-f1f2c4b1.js";import{b as Te,B as $}from"./Button-02dfef34.js";import{M as xe,a as ye}from"./index-0af95f37.js";import{W as A}from"./WrappingType-b81e595a.js";import{B as C}from"./index-3261fb37.js";import{C as Ie}from"./index-cd516078.js";import{I as qe}from"./index-d9ff7963.js";import{L as D}from"./index-f6b9887a.js";import{T as k}from"./index-c0e269b0.js";import{_ as oe}from"./iframe-7b8fa697.js";import{b as u,l as o,d as v,s as H,p as d,c as j,f as ae,w as re}from"./withWebComponent-7d7e5133.js";import{s as $e}from"./slot-76e48863.js";import{a as Ae,e as le,c as q}from"./Icon-42236945.js";import{I as Ce,N as De}from"./ItemNavigation-0734b7c0.js";import{F}from"./Float-99d99064.js";import{c as ke}from"./PopupsCommon.css-f12c9479.js";import{R as N}from"./ResizeHandler-0af4416f.js";import{i as X}from"./Device-6afa24d0.js";import{d as Ne}from"./debounce-9c2fb7dd.js";import{g as Re}from"./FocusableElements-66623361.js";import Ee from"./ResponsivePopover-1151e741.js";import{s as Be}from"./BrowserScrollbar.css-309143b9.js";import{aN as Pe,aO as K,aP as Oe,aQ as We,aR as Le,aS as Me,aT as He,aU as je,aV as Fe,aW as Ve}from"./i18n-defaults-2dcf78e8.js";import{s as V}from"./parameters-bundle.css-f9dc8928.js";import{s as Q}from"./style-map-132a30d8.js";import{o as Y}from"./class-map-0ab40ab9.js";var P;(function(l){l.MultipleSteps="MultipleSteps",l.SingleStep="SingleStep"})(P||(P={}));const O=P;function Ue(l,e,i){return u`<div class="ui5-wiz-step-root" role="listitem" tabindex="${o(this.tabIndex)}" aria-current="${o(this.accInfo.ariaCurrent)}" aria-setsize="${o(this.accInfo.ariaSetsize)}" aria-posinset="${o(this.accInfo.ariaPosinset)}" aria-disabled="${o(this.accInfo.ariaDisabled)}" aria-label="${o(this.accInfo.ariaLabel)}" @click="${this._onclick}" @keyup="${this._onkeyup}" @focusin="${this._onfocusin}"><div class="ui5-wiz-step-main"><div class="ui5-wiz-step-icon-circle">${this.icon?Ze.call(this,l,e,i):Ge.call(this,l,e,i)}</div>${this.hasTexts?Xe.call(this,l,e,i):void 0}</div>${this.hideSeparator?void 0:Ke.call(this,l,e,i)}</div>`}function Ze(l,e,i){return i?u`<${v("ui5-icon",e,i)} class="ui5-wiz-step-icon" name="${o(this.icon)}"></${v("ui5-icon",e,i)}>`:u`<ui5-icon class="ui5-wiz-step-icon" name="${o(this.icon)}"></ui5-icon>`}function Ge(l,e,i){return u`<span class="ui5-wiz-step-number">${o(this.number)}</span>`}function Xe(l,e,i){return u`<div class="ui5-wiz-step-texts"><div class="ui5-wiz-step-title-text">${o(this.titleText)}</div><div class="ui5-wiz-step-subtitle-text">${o(this.subtitleText)}</div></div>`}function Ke(l,e,i){return u`<div class="ui5-wiz-step-hr"></div>`}x("@ui5/webcomponents-theming","sap_fiori_3",async()=>H);x("@ui5/webcomponents-fiori","sap_fiori_3",async()=>V);const Qe={packageName:"@ui5/webcomponents-fiori",fileName:"themes/WizardTab.css",content:`:host(:not([hidden])) {
	/* Well known worakround to allow shrinking inside flex containers
	 * and shrinking is needed so the texts trucnate properly.
	 */
	min-width: 1px;
}

/* Selected (active) step */

:host([selected]:not([disabled])) .ui5-wiz-step-icon-circle {
	background: var(--_ui5_wiz_tab_selected_bg);
}

:host([selected]:not([disabled])) .ui5-wiz-step-title-text {
	color: var(--sapContent_Selected_ForegroundColor);
}

:host([selected]:not([disabled])) .ui5-wiz-step-icon-circle::after {
	content: "";
	position: absolute;
	border-bottom: 0.25rem solid var(--_ui5_wiz_tab_selection_line);
	border-top-left-radius: 0.1875rem;
	border-top-right-radius: 0.1875rem;
	left: 0;
	right: 0;
	bottom: -1rem;
}

:host([selected]:not([disabled])) .ui5-wiz-step-icon {
	color: var(--sapContent_ContrastIconColor);
}

:host([selected]:not([disabled])) .ui5-wiz-step-number {
	color: var(--sapContent_ContrastTextColor);
}

/* Disabled step */

:host([disabled]) .ui5-wiz-step-icon-circle {
	border-color: var(--sapList_BorderColor);
	background: var(--sapObjectHeader_Background);
}

:host([disabled]) .ui5-wiz-step-title-text {
	color: var(--sapContent_LabelColor);
}

:host([disabled]) .ui5-wiz-step-icon {
	color: var(--sapContent_LabelColor);
}

:host([disabled]) .ui5-wiz-step-number {
	color: var(--sapContent_LabelColor);
}

.ui5-wiz-step-root {
	display: flex;
	align-items: center;
	flex-direction: row;
	font-size: var(--sapFontSize);
	font-family: var(--sapFontFamily);
	outline: none;
}

.ui5-wiz-step-main {
	max-width: 100%;
	text-align: center;
	white-space: nowrap;
}

:host(:not([disabled])) .ui5-wiz-step-main {
	cursor: pointer;
}

.ui5-wiz-step-root:focus .ui5-wiz-step-main {
	outline: var(--_ui5_wiz_tab_focus_outline);
	outline-offset: 1px;
	border-radius: var(--_ui5_wiz_tab_focus_border_radius);
}

/* Icon */

.ui5-wiz-step-icon-circle {
	display: inline-flex;
	box-sizing: border-box;
	vertical-align: middle;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 2rem;
	height: 2rem;
	margin: 0 0.1875rem;
	line-height: 1.875rem;
	border-radius: 50%;
	background: var(--sapObjectHeader_Background);
	border: var(--_ui5_wiz_tab_border);
	position: relative;
}

.ui5-wiz-step-icon {
	width: 1rem;
	height: 1rem;
	color: var(--_ui5_wiz_tab_icon_color);
	pointer-events: none;
}

/* Texts when no icon set */

.ui5-wiz-step-number {
	color: var(--_ui5_wiz_tab_icon_color);
}

/* Heading and Subheading */

.ui5-wiz-step-texts {
	display: inline-block;
	max-width: calc(100% - 3rem);
	vertical-align: middle;
	text-align: left;
	padding: 0 0.5rem 0 0.1875rem;
	max-height: 3rem;
	overflow: hidden;
	background: var(--sapObjectHeader_Background);
}

.ui5-wiz-step-title-text,
.ui5-wiz-step-subtitle-text {
	color: var(--_ui5_wiz_tab_title_color);
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}

.ui5-wiz-step-title-text {
	font-family: var(--_ui5_wiz_tab_title_font_family);
	white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

:host([subtitle-text]:not([subtitle-text=""])) .ui5-wiz-step-title-text {
    -webkit-line-clamp: 1;
}

:host([data-ui5-wizard-expanded-tab-prev="true"]) .ui5-wiz-step-title-text,
:host([data-ui5-wizard-expanded-tab-prev="true"]) .ui5-wiz-step-subtitle-text,
:host([data-ui5-wizard-expanded-tab="false"]) .ui5-wiz-step-texts,
:host([data-ui5-wizard-expanded-tab="false"]) .ui5-wiz-step-title-text,
:host([data-ui5-wizard-expanded-tab="false"]) .ui5-wiz-step-subtitle-text {
	display: none;
}

.ui5-wiz-step-subtitle-text {
	margin-top: 0.125rem;
	font-family: var(--sapFontFamily);
	color: var(--sapContent_LabelColor);
	font-size: var(--sapFontSmallSize);
}

/* Separator */

.ui5-wiz-step-hr {
	display: inline-block;
	border-bottom-color: var(--sapList_BorderColor);
	border-bottom-width: 1px;
	border-bottom-style: solid;
	height: 1px;
	flex-grow: 1;
	margin-right: .25rem;
}

:host([active-separator]) .ui5-wiz-step-hr {
	border-bottom-color: var(--_ui5_wiz_tab_active_separator_color)
}

:host([branching-separator]) .ui5-wiz-step-hr {
	border-bottom-style: dashed;
}

:host([data-ui5-wizard-expanded-tab="false"]) .ui5-wiz-step-root {
	display: inline;
	position: absolute;
	top: 0;
}

:host([data-ui5-wizard-after-current-tab="true"]) .ui5-wiz-step-root {
	right: 0;
}

:host([data-ui5-wizard-expanded-tab="false"]) .ui5-wiz-step-hr {
	display: none;
}
`};var g=globalThis&&globalThis.__decorate||function(l,e,i,t){var n=arguments.length,s=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,i):t,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(l,e,i,t);else for(var a=l.length-1;a>=0;a--)(r=l[a])&&(s=(n<3?r(s):n>3?r(e,i,s):r(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s};let h=class extends L{_onclick(){this.disabled||this.fireEvent("selection-change-requested")}_onkeyup(e){this.disabled||(we(e)||_e(e))&&!ze(e)&&(e.preventDefault(),this.fireEvent("selection-change-requested"))}_onfocusin(){this.fireEvent("focused")}get tabIndex(){return Number(this._tabIndex)}get hasTexts(){return this.titleText||this.subtitleText}get accInfo(){return{ariaSetsize:this._wizardTabAccInfo&&this._wizardTabAccInfo.ariaSetsize,ariaPosinset:this._wizardTabAccInfo&&this._wizardTabAccInfo.ariaPosinset,ariaLabel:this._wizardTabAccInfo&&this._wizardTabAccInfo.ariaLabel,ariaCurrent:this.selected?"true":void 0,ariaDisabled:this.disabled?"true":void 0}}};g([d()],h.prototype,"icon",void 0);g([d()],h.prototype,"titleText",void 0);g([d()],h.prototype,"subtitleText",void 0);g([d()],h.prototype,"number",void 0);g([d({type:Boolean})],h.prototype,"disabled",void 0);g([d({type:Boolean})],h.prototype,"selected",void 0);g([d({type:Boolean})],h.prototype,"hideSeparator",void 0);g([d({type:Boolean})],h.prototype,"activeSeparator",void 0);g([d({type:Boolean})],h.prototype,"branchingSeparator",void 0);g([d({defaultValue:"-1"})],h.prototype,"_tabIndex",void 0);h=g([j({tag:"ui5-wizard-tab",renderer:ae,styles:Qe,template:Ue,dependencies:[Ae]}),le("selection-change-requested")],h);h.define();const Ye=h;var _=globalThis&&globalThis.__decorate||function(l,e,i,t){var n=arguments.length,s=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,i):t,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(l,e,i,t);else for(var a=l.length-1;a>=0;a--)(r=l[a])&&(s=(n<3?r(s):n>3?r(e,i,s):r(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s};let S=class extends L{};_([d()],S.prototype,"titleText",void 0);_([d()],S.prototype,"subtitleText",void 0);_([d()],S.prototype,"icon",void 0);_([d({type:Boolean})],S.prototype,"disabled",void 0);_([d({type:Boolean})],S.prototype,"selected",void 0);_([d({type:Boolean})],S.prototype,"branching",void 0);S=_([j("ui5-wizard-step")],S);S.define();const de=S,Je=Object.freeze(Object.defineProperty({__proto__:null,default:de},Symbol.toStringTag,{value:"Module"}));function et(l,e,i){return u`<div class="ui5-wiz-root" aria-label="${o(this.ariaLabelText)}" role="region"><nav class="ui5-wiz-nav" part="navigator" aria-label="${o(this.navAriaLabelText)}" tabindex="-1"><div class="ui5-wiz-nav-list" role="list" aria-label="${o(this.listAriaLabelText)}" aria-describedby="wiz-nav-descr" aria-controls="${o(this._id)}-wiz-content">${q(this._stepsInHeader,(t,n)=>t._id||n,(t,n)=>tt.call(this,l,e,i,t,n))}</div></nav><span id="wiz-nav-descr" class="ui5-hidden-text">${o(this.navAriaDescribedbyText)}</span><div id="${o(this._id)}-wiz-content" class="ui5-wiz-content" @scroll="${this.onScroll}">${q(this._steps,(t,n)=>t._id||n,(t,n)=>it.call(this,l,e,i,t,n))}</div></div>`}function tt(l,e,i,t,n){return i?u`<${v("ui5-wizard-tab",e,i)} title-text="${o(t.titleText)}" subtitle-text="${o(t.subtitleText)}" icon="${o(t.icon)}" number="${o(t.number)}" ?disabled="${t.disabled}" ?selected="${t.selected}" ?hide-separator="${t.hideSeparator}" ?active-separator="${t.activeSeparator}" ?branching-separator="${t.branchingSeparator}" ._wizardTabAccInfo="${o(t.accInfo)}" data-ui5-content-ref-id="${o(t.refStepId)}" data-ui5-index="${o(t.pos)}" _tab-index="${o(t.tabIndex)}" @ui5-selection-change-requested="${o(this.onSelectionChangeRequested)}" @ui5-focused="${o(this.onStepInHeaderFocused)}" @click="${this._onGroupedTabClick}" style=${Q(t.styles)}></${v("ui5-wizard-tab",e,i)}>`:u`<ui5-wizard-tab title-text="${o(t.titleText)}" subtitle-text="${o(t.subtitleText)}" icon="${o(t.icon)}" number="${o(t.number)}" ?disabled="${t.disabled}" ?selected="${t.selected}" ?hide-separator="${t.hideSeparator}" ?active-separator="${t.activeSeparator}" ?branching-separator="${t.branchingSeparator}" ._wizardTabAccInfo="${o(t.accInfo)}" data-ui5-content-ref-id="${o(t.refStepId)}" data-ui5-index="${o(t.pos)}" _tab-index="${o(t.tabIndex)}" @ui5-selection-change-requested="${o(this.onSelectionChangeRequested)}" @ui5-focused="${o(this.onStepInHeaderFocused)}" @click="${this._onGroupedTabClick}" style=${Q(t.styles)}></ui5-wizard-tab>`}function it(l,e,i,t,n){return u`<div class="ui5-wiz-content-item" ?hidden="${t.disabled}" ?selected="${t.selected}" ?stretch="${t.stretch}" part="step-content" aria-label="${o(t.stepContentAriaLabel)}" role="region" data-ui5-content-item-ref-id="${o(t._id)}"><div class="ui5-wiz-content-item-wrapper"><slot name="${o(t._individualSlot)}"></slot></div></div>`}function nt(l,e,i){return i?u`<${v("ui5-responsive-popover",e,i)} horizontal-align="Center" placement-type="Bottom" aria-label="${o(this.actionSheetStepsText)}" class="${Y(this.classes.popover)}" @ui5-after-close=${o(this._afterClosePopover)} content-only-on-desktop prevent-focus-restore _hide-header><ul class="ui5-wizard-responsive-popover-list">${q(this._groupedTabs,(t,n)=>t._id||n,(t,n)=>J.call(this,l,e,i,t,n))}</ul><div slot="footer" class="ui5-responsive-popover-footer"><${v("ui5-button",e,i)} design="Transparent" @click="${this._closeRespPopover}">Cancel</${v("ui5-button",e,i)}></div></${v("ui5-responsive-popover",e,i)}>`:u`<ui5-responsive-popover horizontal-align="Center" placement-type="Bottom" aria-label="${o(this.actionSheetStepsText)}" class="${Y(this.classes.popover)}" @ui5-after-close=${o(this._afterClosePopover)} content-only-on-desktop prevent-focus-restore _hide-header><ul class="ui5-wizard-responsive-popover-list">${q(this._groupedTabs,(t,n)=>t._id||n,(t,n)=>J.call(this,l,e,i,t,n))}</ul><div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${this._closeRespPopover}">Cancel</ui5-button></div></ui5-responsive-popover>`}function J(l,e,i,t,n){return i?u`<li><${v("ui5-button",e,i)} icon="${o(t.icon)}" ?disabled="${t.disabled}" design="Transparent" data-ui5-header-tab-ref-id="${o(t.accInfo.ariaPosinset)}" @click="${this._onOverflowStepButtonClick}">${o(t.titleText)}</${v("ui5-button",e,i)}></li>`:u`<li><ui5-button icon="${o(t.icon)}" ?disabled="${t.disabled}" design="Transparent" data-ui5-header-tab-ref-id="${o(t.accInfo.ariaPosinset)}" @click="${this._onOverflowStepButtonClick}">${o(t.titleText)}</ui5-button></li>`}x("@ui5/webcomponents-theming","sap_fiori_3",async()=>H);x("@ui5/webcomponents-fiori","sap_fiori_3",async()=>V);const st={packageName:"@ui5/webcomponents-fiori",fileName:"themes/Wizard.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}

:host(:not([hidden])) {
	display: block;
	height: 100%;
	width: 100%;
	overflow: auto;
}

:host([_breakpoint="S"])::part(navigator),
:host([_breakpoint="S"])::part(step-content) {
	padding-left: 1rem;
	padding-right: 1rem;
}

:host([_breakpoint="M"])::part(navigator),
:host([_breakpoint="M"])::part(step-content) {
	padding-left: 2rem;
	padding-right: 2rem;
}

:host([_breakpoint="L"])::part(navigator),
:host([_breakpoint="L"])::part(step-content) {
	padding-left: 2rem;
	padding-right: 2rem;
}

:host([_breakpoint="XL"])::part(navigator),
:host([_breakpoint="XL"])::part(step-content) {
	padding-left: 3rem;
	padding-right: 3rem;
}

.ui5-wiz-root {
	height: 100%;
	width: 100%;
	position: relative;
}

.ui5-wiz-content {
	position: relative;
	overflow: auto;
	height: calc(100% - 4rem); /* the navigation height is 4rem */
	box-sizing: border-box;
	background: var(--sapBackgroundColor);
}

.ui5-wiz-content-item {
	display: block;
	box-sizing: border-box;
	padding-top: 1rem;
	padding-bottom: 1rem;
}

:host([content-layout="SingleStep"]) .ui5-wiz-content-item:not([selected]) {
	display: none;
}

.ui5-wiz-content-item-wrapper {
	display: block;
	padding: var(--_ui5_wiz_content_item_wrapper_padding);
	background-color: var(--_ui5_wiz_content_item_wrapper_bg);
	border-radius: var(--sapElement_BorderCornerRadius);
}

.ui5-wiz-content-item[hidden] {
	display: none;
}

.ui5-wiz-content-item[stretch] {
	/* Add 2rem to ensure there is enough scroll height to reach the last step */
	min-height: 100%;
}

[ui5-wizard-tab][data-ui5-wizard-expanded-tab="true"] + [ui5-wizard-tab][data-ui5-wizard-expanded-tab="false"] {
	width: 2rem;
	padding-left: .5rem;
}

[ui5-wizard-tab][data-ui5-wizard-expanded-tab="false"] {
	width: .25rem;
	padding: 0;
}

.ui5-wiz-nav-list {
	display: table;
	table-layout: fixed;
	position: relative;
	list-style: none;
	margin: 0;
	box-sizing: border-box;
	width: 100%;
	height: 2rem;
	padding: 0;
}

[ui5-wizard-tab] {
	display: table-cell;
	position: relative;
}

.ui5-wiz-nav {
	box-sizing: border-box;
	height: 4rem;
	padding-top: 1rem;
	padding-bottom: 1rem;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
	background-color: var(--sapObjectHeader_Background);
	font-size: .875rem;
	box-shadow: var(--sapContent_HeaderShadow);
	outline: none;
	display: flex;
	align-items: center;
}

[ui5-wizard-tab][data-ui5-wizard-expanded-tab="false"] + [ui5-wizard-tab][data-ui5-wizard-expanded-tab="false"] {
	width: .25rem;
}

[ui5-wizard-tab][data-ui5-wizard-expanded-tab-prev="true"],
[ui5-wizard-tab][data-ui5-wizard-expanded-tab="false"] + [ui5-wizard-tab][data-ui5-wizard-expanded-tab-prev="true"] {
	width: 2rem;
	padding-right: .75rem;
}
`};x("@ui5/webcomponents-theming","sap_fiori_3",async()=>H);x("@ui5/webcomponents-fiori","sap_fiori_3",async()=>V);const ot={packageName:"@ui5/webcomponents-fiori",fileName:"themes/WizardPopover.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}

.ui5-wizard-responsive-popover {
	box-shadow: var(--sapContent_Shadow1);
}

.ui5-wizard-responsive-popover-list {
	list-style: none;
	margin: 0;
	padding: 0;
}

.ui5-responsive-popover-footer {
	display: flex;
	justify-content: flex-end;
	padding: 0.25rem 0;
	width: 100%;
}

.ui5-wizard-popover .ui5-wizard-responsive-popover-list [ui5-button] {
	width: 200px;
}

.ui5-wizard-dialog .ui5-wizard-responsive-popover-list [ui5-button] {
	width: 100%;
}
`};var w=globalThis&&globalThis.__decorate||function(l,e,i,t){var n=arguments.length,s=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,i):t,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(l,e,i,t);else for(var a=l.length-1;a>=0;a--)(r=l[a])&&(s=(n<3?r(s):n>3?r(e,i,s):r(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s},c;const at=64,rt=200,m="data-ui5-wizard-expanded-tab",R="data-ui5-wizard-expanded-tab-next",ee="data-ui5-wizard-after-current-tab",E="data-ui5-wizard-expanded-tab-prev",W={MIN:.5,DEFAULT:.7,MAX:1},B={0:"S",599:"M",1023:"L",1439:"XL"};let f=c=class extends L{constructor(){super(),this.stepScrollOffsets=[],this._groupedTabs=[],this.selectedStepIndex=0,this.previouslySelectedStepIndex=0,this.selectionRequestedByClick=!1,this._prevWidth=0,this._prevContentHeight=0,this.selectionRequestedByScroll=!1,this._itemNavigation=new Ce(this,{navigationMode:De.Auto,getItemsCallback:()=>this.enabledStepsInHeaderDOM}),this._onStepResize=this.onStepResize.bind(this)}get classes(){return{popover:{"ui5-wizard-responsive-popover":!0,"ui5-wizard-popover":!X(),"ui5-wizard-dialog":X()}}}static async onDefine(){c.i18nBundle=await Se("@ui5/webcomponents-fiori")}static get SCROLL_DEBOUNCE_RATE(){return 25}onExitDOM(){this.detachStepsResizeObserver()}onBeforeRendering(){this.syncSelection()}onAfterRendering(){this.storeStepScrollOffsets(),this.previouslySelectedStepIndex!==this.selectedStepIndex&&this.scrollToSelectedStep(),this.attachStepsResizeObserver(),this.previouslySelectedStepIndex=this.selectedStepIndex}syncSelection(){this.stepsCount!==0&&(this.selectedStepsCount===0&&(this.selectFirstStep(),console.warn("Selecting the first step: no selected step is defined.")),this.selectedStepsCount>1&&(this.selectLastSelectedStep(),console.warn("Selecting the last step defined as selected: multiple selected steps are defined.")),this.selectedStep&&this.selectedStep.disabled&&console.warn("The selected step is disabled: you need to enable it in order to interact with the step."),this.selectedStepIndex=this.getSelectedStepIndex())}selectFirstStep(){this.deselectAll(),this.slottedSteps[0].selected=!0,this.slottedSteps[0].disabled=!1}selectLastSelectedStep(){const e=this.lastSelectedStep;e&&(this.deselectAll(),e.selected=!0,e.disabled=!1)}deselectAll(){this.slottedSteps.forEach(e=>{e.selected=!1})}storeStepScrollOffsets(){this.stepScrollOffsets=this.slottedSteps.map(e=>{const i=this.getStepWrapperByRefId(e._id);return i.offsetTop+i.offsetHeight})}onSelectionChangeRequested(e){this.selectionRequestedByClick=!0,this.changeSelectionByStepAction(e.target)}onScroll(e){if(this.selectionRequestedByClick){this.selectionRequestedByClick=!1;return}Ne(this.changeSelectionByScroll.bind(this,e.target.scrollTop),c.SCROLL_DEBOUNCE_RATE)}onStepInHeaderFocused(e){this._itemNavigation.setCurrentItem(e.target)}onStepResize(){this.width=this.getBoundingClientRect().width,this.contentHeight=this.getContentHeight(),(this._prevWidth!==this.width||this.contentHeight!==this._prevContentHeight)&&this._closeRespPopover(),this._prevWidth=this.width,this._prevContentHeight=this.contentHeight,this._calcCurrentBreakpoint()}attachStepsResizeObserver(){this.stepsDOM.forEach(e=>{N.deregister(e,this._onStepResize),N.register(e,this._onStepResize)})}detachStepsResizeObserver(){this.stepsDOM.forEach(e=>{N.deregister(e,this._onStepResize)})}_calcCurrentBreakpoint(){const i=Object.keys(B).reverse().find(t=>Number(t)<this.width);this._breakpoint=i?B[i]:B[0]}_adjustHeaderOverflow(){let e=0,i=!0;const t=this.stepsInHeaderDOM;if(!t.length)return;const n=this.progressNavigatorListDOM.getBoundingClientRect().width,s=this.getSelectedStepIndex(),r=this.steps.length?Math.floor(n/rt):Math.floor(n/at);[...t].forEach((a,b)=>{a.setAttribute(m,"false"),a.setAttribute(E,"false"),a.setAttribute(R,"false"),b>s?t[b].setAttribute(ee,"true"):t[b].removeAttribute(ee)}),t[s]&&t[s].setAttribute(m,"true");for(let a=1;a<r;a++)i&&(e+=1),i&&t[s+e]?(t[s+e].setAttribute(m,"true"),i=!i):!i&&t[s-e]?(t[s-e].setAttribute(m,"true"),i=!i):t[s+e+1]?(e+=1,t[s+e].setAttribute(m,"true"),i=!0):t[s-e]&&(t[s-e].setAttribute(m,"true"),e+=1,i=!1);for(let a=0;a<t.length;a++)if(t[a].getAttribute(m)==="true"&&t[a-1]&&t[a-1].getAttribute(m)==="false"&&t[a-1].setAttribute(E,"true"),t[a].getAttribute(m)==="false"&&t[a-1]&&t[a-1].getAttribute(m)==="true"){t[a].setAttribute(R,"true");break}}_isGroupAtStart(e){const i=this.stepsInHeaderDOM.indexOf(e);return e.getAttribute(m)==="false"&&e.getAttribute(E)==="true"&&i>0}_isGroupAtEnd(e){const i=this.stepsInHeaderDOM.indexOf(e);return e.getAttribute(m)==="false"&&e.getAttribute(R)==="true"&&i+1<this.steps.length}async _showPopover(e,i){const t=Array.from(this.stepsInHeaderDOM);this._groupedTabs=[];const n=i?0:this.stepsInHeaderDOM.indexOf(e),s=i?this.stepsInHeaderDOM.indexOf(e):t.length-1;for(let a=n;a<=s;a++)this._groupedTabs.push(t[a]);(await this._respPopover()).showAt(e)}async _onGroupedTabClick(e){const i=e.target;if(this._isGroupAtStart(i))return this._showPopover(i,!0);if(this._isGroupAtEnd(i))return this._showPopover(i,!1)}_onOverflowStepButtonClick(e){const i=Array.from(this.stepsInHeaderDOM),n=e.target.getAttribute("data-ui5-header-tab-ref-id"),s=this.slottedSteps[Number(n)-1],r=this.selectedStep,a=this.slottedSteps.indexOf(s);this.switchSelectionFromOldToNewStep(r,s,a,!0),this._closeRespPopover(),i[a].focus()}async _closeRespPopover(){const e=await this._respPopover();e&&e.close()}async _respPopover(){return(await this.getStaticAreaItemDomRef()).querySelector(".ui5-wizard-responsive-popover")}changeSelectionByScroll(e){const i=this.getClosestStepIndexByScrollPos(e),t=this.slottedSteps[i];this.selectedStepIndex!==i&&!t.disabled&&i>=0&&i<=this.stepsCount-1&&(this.switchSelectionFromOldToNewStep(this.selectedStep,t,i,!1),this.selectionRequestedByScroll=!0)}async changeSelectionByStepAction(e){const i=e.getAttribute("data-ui5-content-ref-id"),t=this.selectedStep,n=this.getStepByRefId(i),s=e.getAttribute(m)==="true",r=this.slottedSteps.indexOf(n),a=n.firstElementChild,b=await Re(a);if(b&&b.focus(),t===n){this.scrollToContentItem(this.selectedStepIndex);return}(s||!s&&(r===0||r===this.steps.length-1))&&this.switchSelectionFromOldToNewStep(t,n,r,!0)}getContentHeight(){let e=0;return this.stepsDOM.forEach(i=>{e+=i.getBoundingClientRect().height}),e}getStepAriaLabelText(e,i){return c.i18nBundle.getText(Pe,i)}get stepsDOM(){return Array.from(this.shadowRoot.querySelectorAll(".ui5-wiz-content-item"))}get progressNavigatorListDOM(){return this.shadowRoot.querySelector(".ui5-wiz-nav-list")}get _stepsInHeader(){return this.getStepsInfo()}get _steps(){const e=this.getLastEnabledStepIndex(),i=this.getStepsInfo();return this.steps.map((t,n)=>(t.stretch=n===e,t.stepContentAriaLabel=`${this.navStepDefaultHeading} ${i[n].number} ${i[n].titleText}`,t))}get stepsCount(){return this.slottedSteps.length}get selectedStep(){return this.selectedStepsCount?this.selectedSteps[0]:null}get lastSelectedStep(){return this.selectedStepsCount?this.selectedSteps[this.selectedStepsCount-1]:null}get selectedSteps(){return this.slottedSteps.filter(e=>e.selected)}get enabledSteps(){return this.slottedSteps.filter(e=>!e.disabled)}get selectedStepsCount(){return this.selectedSteps.length}get slottedSteps(){return this.getSlottedNodes("steps")}get contentDOM(){return this.shadowRoot.querySelector(".ui5-wiz-content")}get stepsInHeaderDOM(){return Array.from(this.shadowRoot.querySelectorAll("[ui5-wizard-tab]"))}get enabledStepsInHeaderDOM(){return this.stepsInHeaderDOM}get navAriaRoleDescription(){return c.i18nBundle.getText(K)}get navAriaLabelText(){return c.i18nBundle.getText(Oe)}get navAriaDescribedbyText(){return c.i18nBundle.getText(We)}get listAriaLabelText(){return c.i18nBundle.getText(Le)}get actionSheetStepsText(){return c.i18nBundle.getText(Me)}get navStepDefaultHeading(){return c.i18nBundle.getText(He)}get optionalStepText(){return c.i18nBundle.getText(je)}get activeStepText(){return c.i18nBundle.getText(Fe)}get inactiveStepText(){return c.i18nBundle.getText(Ve)}get ariaLabelText(){return c.i18nBundle.getText(K)}get effectiveStepSwitchThreshold(){return ke(this.stepSwitchThreshold,W.MIN,W.MAX)}getStepsInfo(){const e=this.getLastEnabledStepIndex(),i=this.stepsCount,t=this.getSelectedStepIndex();let n=this.steps.length+10,s;return this._adjustHeaderOverflow(),this.steps.map((r,a)=>{const b=a+1,fe=a===i-1&&!r.branching,U=r.subtitleText?this.optionalStepText:"",Z=r.disabled?this.inactiveStepText:this.activeStepText,ge=(r.titleText?`${b} ${r.titleText} ${Z} ${U}`:`${this.navStepDefaultHeading} ${b} ${Z} ${U}`).trim(),ve=a>t;return s={ariaSetsize:i,ariaPosinset:b,ariaLabel:this.getStepAriaLabelText(r,ge)},{icon:r.icon,titleText:r.titleText,subtitleText:r.subtitleText,number:b,selected:r.selected,disabled:r.disabled,hideSeparator:fe,activeSeparator:a<e&&!r.disabled,branchingSeparator:r.branching,pos:b,accInfo:s,refStepId:r._id,tabIndex:this.selectedStepIndex===a?"0":"-1",styles:{zIndex:ve?--n:1}}})}getSelectedStepIndex(){return this.selectedStep?this.slottedSteps.indexOf(this.selectedStep):0}getLastEnabledStepIndex(){let e=0;return this.slottedSteps.forEach((i,t)=>{i.disabled||(e=t)}),e}getStepByRefId(e){return this.slottedSteps.find(i=>i._id===e)}getStepWrapperByRefId(e){return this.shadowRoot.querySelector(`[data-ui5-content-item-ref-id=${e}]`)}getStepWrapperByIdx(e){return this.getStepWrapperByRefId(this.steps[e]._id)}scrollToSelectedStep(){this.selectionRequestedByScroll||this.scrollToContentItem(this.selectedStepIndex),this.selectionRequestedByScroll=!1}scrollToContentItem(e){this.contentDOM.scrollTop=this.getClosestScrollPosByStepIndex(e)}getClosestScrollPosByStepIndex(e){if(e===0)return 0;for(let i=e-1;i>=0;i--)if(this.stepScrollOffsets[i]>0)return this.stepScrollOffsets[i];return 0}getClosestStepIndexByScrollPos(e){for(let i=0;i<=this.stepScrollOffsets.length-1;i++){const t=this.stepScrollOffsets[i],n=this.getStepWrapperByIdx(i),s=n.offsetTop+n.offsetHeight*this.effectiveStepSwitchThreshold;if(t>0&&e<t)return e>s?i+1:i}return this.selectedStepIndex}switchSelectionFromOldToNewStep(e,i,t,n){e&&i&&(i.disabled||(e.selected=!1,i.selected=!0),this.fireEvent("step-change",{step:i,previousStep:e,changeWithClick:n}),this.selectedStepIndex=t)}sortAscending(e,i){return e<i?-1:e>i?1:0}};w([d({type:O,defaultValue:O.MultipleSteps})],f.prototype,"contentLayout",void 0);w([d({validator:F})],f.prototype,"width",void 0);w([d({validator:F,defaultValue:W.DEFAULT})],f.prototype,"stepSwitchThreshold",void 0);w([d({validator:F})],f.prototype,"contentHeight",void 0);w([d({type:Object,multiple:!0})],f.prototype,"_groupedTabs",void 0);w([d()],f.prototype,"_breakpoint",void 0);w([$e({default:!0,type:HTMLElement,individualSlots:!0,invalidateOnChildChange:!0})],f.prototype,"steps",void 0);f=c=w([j({tag:"ui5-wizard",languageAware:!0,fastNavigation:!0,renderer:ae,styles:[Be,st],staticAreaStyles:ot,template:et,staticAreaTemplate:nt,dependencies:[Ye,de,Ee,Te]}),le("step-change",{detail:{step:{type:HTMLElement},previousStep:{type:HTMLElement},changeWithClick:{Boolean}}})],f);f.define();const lt=f,dt=Object.freeze(Object.defineProperty({__proto__:null,default:lt},Symbol.toStringTag,{value:"Module"})),T=re("ui5-wizard",["contentLayout"],[],[],["step-change"],()=>oe(()=>Promise.resolve().then(()=>dt),void 0,import.meta.url));T.displayName="Wizard";T.defaultProps={contentLayout:O.MultipleSteps};try{T.displayName="Wizard",T.__docgenInfo={description:`The \`Wizard\` helps users to complete a complex task by dividing it into sections and guiding them through it. It has two main areas - a navigation area at the top showing the step sequence and a content area below it.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-Wizard)`,displayName:"Wizard",props:{children:{defaultValue:null,description:"Defines the steps.\n\n**Note:** Use the available `WizardStep` component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onStepChange:{defaultValue:null,description:"Fired when the step is changed by user interaction - either with scrolling, or by clicking on the steps within the component header.",name:"onStepChange",required:!1,type:{name:"(event: Ui5CustomEvent<WizardDomRef, WizardStepChangeEventDetail>) => void"}},contentLayout:{defaultValue:{value:"WizardContentLayout.MultipleSteps"},description:"Defines how the content of the `Wizard` would be visualized.",name:"contentLayout",required:!1,type:{name:"enum",value:[{value:'"MultipleSteps"'},{value:'"SingleStep"'},{value:'"MultipleSteps"'},{value:'"SingleStep"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const z=re("ui5-wizard-step",["icon","subtitleText","titleText"],["branching","disabled","selected"],[],[],()=>oe(()=>Promise.resolve().then(()=>Je),void 0,import.meta.url));z.displayName="WizardStep";try{z.displayName="WizardStep",z.__docgenInfo={description:"A component that represents a logical step as part of the `Wizard`. It is meant to aggregate arbitrary HTML elements that form the content of a single step.",displayName:"WizardStep",props:{children:{defaultValue:null,description:"Defines the step content.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},branching:{defaultValue:null,description:"When `branching` is enabled a dashed line would be displayed after the step, meant to indicate that the next step is not yet known and depends on user choice in the current step.\n\n**Note:** It is recommended to use `branching` on the last known step and later add new steps when it becomes clear how the wizard flow should continue.",name:"branching",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Defines if the step is `disabled`. When disabled the step is displayed, but the user can't select the step by clicking or navigate to it with scrolling.\n\n**Note:** Step can't be `selected` and `disabled` at the same time. In this case the `selected` property would take precedence.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:'Defines the `icon` of the step.\n\n**Note:** The icon is displayed in the `Wizard` navigation header.\n\nThe SAP-icons font provides numerous options. See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.',name:"icon",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"Defines the step's `selected` state - the step that is currently active.\n\n**Note:** Step can't be `selected` and `disabled` at the same time. In this case the `selected` property would take precedence.",name:"selected",required:!1,type:{name:"boolean"}},subtitleText:{defaultValue:null,description:"Defines the `subtitleText` of the step.\n\n**Note:** the text is displayed in the `Wizard` navigation header.",name:"subtitleText",required:!1,type:{name:"string"}},titleText:{defaultValue:null,description:"Defines the `titleText` of the step.\n\n**Note:** The text is displayed in the `Wizard` navigation header.",name:"titleText",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const pt="hint",pe="M192 449h33V225h-32v-34h95v258h32v31H192v-31zm15-369q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34z",ct=!0,ut="SAP-icons-v4",ht="@ui5/webcomponents-icons";y(pt,{pathData:pe,ltr:ct,collection:ut,packageName:ht});const mt="hint",ce="M256 0q53 0 100 20t81.5 54.5T492 156t20 100-20 100-54.5 81.5T356 492t-100 20-100-20-81.5-54.5T20 356 0 256t20-100 54.5-81.5T156 20 256 0zm0 461q43 0 80.5-16t65-44 43.5-65 16-80-16-80.5-43.5-65-65-43.5T256 51t-80 16-65 43.5-44 65T51 256t16 80 44 65 65 44 80 16zm0-333q13 0 22.5 9.5T288 160t-9.5 22.5T256 192t-22.5-9.5T224 160t9.5-22.5T256 128zm0 115q11 0 18 7.5t7 18.5v102q0 11-7 18.5t-18 7.5-18.5-7.5T230 371V269q0-11 7.5-18.5T256 243z",bt=!0,ft="SAP-icons-v5",gt="@ui5/webcomponents-icons";y(mt,{pathData:ce,ltr:bt,collection:ft,packageName:gt});M();const vt="hint",St="lead",ue="M0 256q0-53 20-99.5T75 75t81.5-55T256 0t100 20 81.5 55 54.5 81.5 20 99.5-20 100-54.5 81.5T356 492t-100 20-99.5-20T75 437.5 20 356 0 256zm32 0q0 46 17.5 87t48 71.5 71.5 48 87 17.5q47 0 87.5-17.5t71-48 48-71.5 17.5-87q0-47-17.5-87.5t-48-71-71-48T256 32q-46 0-87 17.5t-71.5 48-48 71T32 256zm138 61l41-5q3 14 12 25t19 15v-73q-32-11-51.5-32.5T171 202q0-12 5-25t14.5-24 22.5-18.5 29-8.5v-21h25v21q58 4 70 62l-36 6q-2-12-11-20t-23-9v76q42 9 59 31t17 46q0 28-20.5 50.5T267 393v33h-25v-32q-26-1-47-20t-25-57zm97 39q14-4 23.5-14.5T300 319q0-25-33-35v72zm-25-128v-64q-11 4-18 13t-7 19q0 20 25 32z",wt=!0,_t="SAP-icons-v4",zt="@ui5/webcomponents-icons";y(St,{pathData:ue,ltr:wt,collection:_t,packageName:zt});const Tt="lead",he="M256 0q53 0 100 20t81.5 54.5T492 156t20 100-20 100-54.5 81.5T356 492t-100 20-100-20-81.5-54.5T20 356 0 256t20-100 54.5-81.5T156 20 256 0zm0 461q43 0 80.5-16t65-44 43.5-65 16-80-16-80.5-43.5-65-65-43.5T256 51t-80 16-65 43.5-44 65T51 256t16 80 44 65 65 44 80 16zm-13-256q-5 0-9 4t-4 9 4 8.5 9 3.5h26q26 0 45 19t19 45q0 23-15 40.5T282 357v34q0 11-7.5 18.5T256 417t-18.5-7.5T230 391v-33h-25q-11 0-18.5-7t-7.5-18 7.5-18.5T205 307h64q5 0 9-4t4-9-4-8.5-9-3.5h-26q-26 0-45-19t-19-45q0-23 15-40.5t36-22.5v-33q0-11 7.5-18.5T256 96t18.5 7.5T282 122v32h25q11 0 18.5 7t7.5 18-7.5 18.5T307 205h-64z",xt=!0,yt="SAP-icons-v5",It="@ui5/webcomponents-icons";y(Tt,{pathData:he,ltr:xt,collection:yt,packageName:It});M();const qt="lead",$t="product",me="M474.5 110v290l-218 110-218-110V110l109-55 219 109v109l-37 18V186l-182-90-73 35v248l182 90 182-90V131l-182-90-28 14-41-21 69-34zm-363 200l108 54v45l-108-53v-46z",At=!1,Ct="SAP-icons-v4",Dt="@ui5/webcomponents-icons";y($t,{pathData:me,ltr:At,collection:Ct,packageName:Dt});const kt="product",be="M257 512q-7 0-13-3L45 393q-13-7-13-22V160q0-14 11-22l102-69q8-5 15-5 8 0 13 4l167 104q12 6 12 22v101q0 11-7.5 18t-18.5 7-18-7.5-7-18.5v-86l-140-88-78 53v184l174 100 172-100V156L243 48q-13-8-13-22 0-11 7.5-18.5T256 0q7 0 13 3l198 116q13 8 13 22v230q0 15-13 22L270 509q-6 3-13 3zm-37-147q-7 0-12-4l-67-38q-13-8-13-22 0-11 7.5-18.5T154 275q6 0 13 3l66 39q13 8 13 22 0 11-7.5 18.5T220 365z",Nt=!1,Rt="SAP-icons-v5",Et="@ui5/webcomponents-icons";y(kt,{pathData:be,ltr:Nt,collection:Rt,packageName:Et});M();const Bt="product",te=p.jsx("br",{}),Pt={title:"Layouts & Floorplans / Wizard",component:T,argTypes:{children:{control:{disable:!0}}},args:{style:{height:"400px"}}},I={render(l){const e=G.useRef(null),i=G.useRef(null),t=()=>{e.current.selected=!0,e.current.disabled=!1},n=()=>{i.current.selected=!0,i.current.disabled=!1},s=()=>{document.querySelector("#goToStep3").removeAttribute("hidden")},r=()=>{alert("Wizard is now completed!")},a=()=>{document.querySelector("#finalizeBtn").removeAttribute("hidden")};return p.jsxs(T,{...l,children:[p.jsxs(z,{icon:Bt,titleText:"Product Type",selected:!0,children:[p.jsx(k,{children:"1. Product Type"}),p.jsx(xe,{design:ye.Information,children:"The Wizard control is supposed to break down large tasks, into smaller steps, easier for the user to work with."}),p.jsx(D,{wrappingType:A.None,children:"Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor et, varius quam. Aliquam erat volutpat"}),p.jsx(C,{design:$.Emphasized,onClick:t,children:"Step 2"})]}),p.jsxs(z,{icon:vt,titleText:"Product Information",disabled:!0,ref:e,children:[p.jsx(k,{children:"2. Product Information"}),p.jsx(D,{wrappingType:A.None,children:"Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien"}),p.jsx(Ie,{onChange:s,text:"Step Completed"}),te,p.jsx(C,{id:"goToStep3",design:$.Emphasized,onClick:n,hidden:!0,children:"Step 3"})]}),p.jsxs(z,{icon:qt,titleText:"Pricing",disabled:!0,ref:i,children:[p.jsx(k,{children:"4. Pricing"}),p.jsx(D,{wrappingType:A.None,children:"Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien"}),p.jsx(qe,{placeholder:"Item Price",onInput:a}),te,p.jsx(C,{design:$.Emphasized,onClick:r,hidden:!0,id:"finalizeBtn",children:"Finalize"})]})]})}};var ie,ne,se;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render(args) {
    const step2 = useRef(null);
    const step3 = useRef(null);
    const goToStep2 = () => {
      step2.current.selected = true;
      step2.current.disabled = false;
    };
    const goToStep3 = () => {
      step3.current.selected = true;
      step3.current.disabled = false;
    };
    const handleStep2Completed = () => {
      document.querySelector('#goToStep3').removeAttribute('hidden');
    };
    const finalizeWizard = () => {
      alert('Wizard is now completed!');
    };
    const handlePriceInput = () => {
      document.querySelector('#finalizeBtn').removeAttribute('hidden');
    };
    return <Wizard {...args}>
        <WizardStep icon={productIcon} titleText="Product Type" selected>
          <Title>1. Product Type</Title>
          <MessageStrip design={MessageStripDesign.Information}>
            The Wizard control is supposed to break down large tasks, into smaller steps, easier for the user to work
            with.
          </MessageStrip>
          <Label wrappingType={WrappingType.None}>
            Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada
            diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque
            sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula.
            Nulla tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis
            felis. Fusce quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget,
            dignissim quis metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo
            eleifend, commodo tortor et, varius quam. Aliquam erat volutpat
          </Label>
          <Button design={ButtonDesign.Emphasized} onClick={goToStep2}>
            Step 2
          </Button>
        </WizardStep>
        <WizardStep icon={hintIcon} titleText="Product Information" disabled ref={step2}>
          <Title>2. Product Information</Title>
          <Label wrappingType={WrappingType.None}>
            Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem.
            Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui
            vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a,
            molestie aliquet dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer pellentesque leo sit
            amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a
            turpis a, molestie aliquet dui. Donec pulvinar, sapien
          </Label>
          <CheckBox onChange={handleStep2Completed} text="Step Completed" />
          {Br}
          <Button id="goToStep3" design={ButtonDesign.Emphasized} onClick={goToStep3} hidden>
            Step 3
          </Button>
        </WizardStep>
        <WizardStep icon={leadIcon} titleText="Pricing" disabled ref={step3}>
          <Title>4. Pricing</Title>
          <Label wrappingType={WrappingType.None}>
            Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem.
            Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui
            vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a,
            molestie aliquet dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer pellentesque leo sit
            amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a
            turpis a, molestie aliquet dui. Donec pulvinar, sapien
          </Label>
          <Input placeholder="Item Price" onInput={handlePriceInput} />
          {Br}
          <Button design={ButtonDesign.Emphasized} onClick={finalizeWizard} hidden id="finalizeBtn">
            Finalize
          </Button>
        </WizardStep>
      </Wizard>;
  }
}`,...(se=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};const Ot=["Default"],vi=Object.freeze(Object.defineProperty({__proto__:null,Default:I,__namedExportsOrder:Ot,default:Pt},Symbol.toStringTag,{value:"Module"}));export{vi as C,I as D,z as W};
//# sourceMappingURL=Wizard.stories-ecb67f9a.js.map
