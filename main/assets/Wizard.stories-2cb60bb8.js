import{j as p}from"./jsx-runtime-d079401a.js";import{r as I,U as X,l as ze,m as K}from"./UI5Element-6dcea8dd.js";import{k as Te,l as xe,a as ye,r as $}from"./Icons-e937042c.js";import{r as R}from"./index-f1f2c4b1.js";import{b as Ie,B as P}from"./Button-6bb9ed58.js";import{M as $e,a as qe}from"./index-b9206352.js";import{W as O}from"./WrappingType-b81e595a.js";import{B as W}from"./index-4532f78a.js";import{C as Ce}from"./index-156b1c99.js";import{I as Ae}from"./index-fe2b044e.js";import{L}from"./index-f8b8e821.js";import{T as M}from"./index-fa90e042.js";import{_ as ce}from"./iframe-59b88bb5.js";import{b as h,l as a,d as S,s as Q,p as d,c as Y,f as ue,w as he}from"./withWebComponent-7d7e5133.js";import{s as De}from"./slot-76e48863.js";import{a as ke,e as me,c as k}from"./Icon-b7f7d9e7.js";import{I as Be,N as Ne}from"./ItemNavigation-f231b836.js";import{F as J}from"./Float-99d99064.js";import{c as Ee}from"./PopupsCommon.css-2b73575b.js";import{R as H}from"./ResizeHandler-e83234a4.js";import{i as te}from"./Device-6afa24d0.js";import{d as Re}from"./debounce-9c2fb7dd.js";import{g as Pe}from"./FocusableElements-ae22402e.js";import Oe from"./ResponsivePopover-b745dfe5.js";import{s as We}from"./BrowserScrollbar.css-22391551.js";import{aN as Le,aO as ie,aP as Me,aQ as He,aR as je,aS as Fe,aT as Ve,aU as Ue,aV as Ze,aW as Ge}from"./i18n-defaults-2dcf78e8.js";import{s as ee}from"./parameters-bundle.css-f9dc8928.js";import{s as ne}from"./style-map-132a30d8.js";import{o as se}from"./class-map-0ab40ab9.js";var U;(function(l){l.MultipleSteps="MultipleSteps",l.SingleStep="SingleStep"})(U||(U={}));const Z=U;function Xe(l,e,i){return h`<div class="ui5-wiz-step-root" role="listitem" tabindex="${a(this.tabIndex)}" aria-current="${a(this.accInfo.ariaCurrent)}" aria-setsize="${a(this.accInfo.ariaSetsize)}" aria-posinset="${a(this.accInfo.ariaPosinset)}" aria-disabled="${a(this.accInfo.ariaDisabled)}" aria-label="${a(this.accInfo.ariaLabel)}" @click="${this._onclick}" @keyup="${this._onkeyup}" @focusin="${this._onfocusin}"><div class="ui5-wiz-step-main"><div class="ui5-wiz-step-icon-circle">${this.icon?Ke.call(this,l,e,i):Qe.call(this,l,e,i)}</div>${this.hasTexts?Ye.call(this,l,e,i):void 0}</div>${this.hideSeparator?void 0:Je.call(this,l,e,i)}</div>`}function Ke(l,e,i){return i?h`<${S("ui5-icon",e,i)} class="ui5-wiz-step-icon" name="${a(this.icon)}"></${S("ui5-icon",e,i)}>`:h`<ui5-icon class="ui5-wiz-step-icon" name="${a(this.icon)}"></ui5-icon>`}function Qe(l,e,i){return h`<span class="ui5-wiz-step-number">${a(this.number)}</span>`}function Ye(l,e,i){return h`<div class="ui5-wiz-step-texts"><div class="ui5-wiz-step-title-text">${a(this.titleText)}</div><div class="ui5-wiz-step-subtitle-text">${a(this.subtitleText)}</div></div>`}function Je(l,e,i){return h`<div class="ui5-wiz-step-hr"></div>`}I("@ui5/webcomponents-theming","sap_fiori_3",async()=>Q);I("@ui5/webcomponents-fiori","sap_fiori_3",async()=>ee);const et={packageName:"@ui5/webcomponents-fiori",fileName:"themes/WizardTab.css",content:`:host(:not([hidden])) {
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
`};var v=globalThis&&globalThis.__decorate||function(l,e,i,t){var n=arguments.length,s=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,i):t,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(l,e,i,t);else for(var o=l.length-1;o>=0;o--)(r=l[o])&&(s=(n<3?r(s):n>3?r(e,i,s):r(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s};let m=class extends X{_onclick(){this.disabled||this.fireEvent("selection-change-requested")}_onkeyup(e){this.disabled||(Te(e)||xe(e))&&!ye(e)&&(e.preventDefault(),this.fireEvent("selection-change-requested"))}_onfocusin(){this.fireEvent("focused")}get tabIndex(){return Number(this._tabIndex)}get hasTexts(){return this.titleText||this.subtitleText}get accInfo(){return{ariaSetsize:this._wizardTabAccInfo&&this._wizardTabAccInfo.ariaSetsize,ariaPosinset:this._wizardTabAccInfo&&this._wizardTabAccInfo.ariaPosinset,ariaLabel:this._wizardTabAccInfo&&this._wizardTabAccInfo.ariaLabel,ariaCurrent:this.selected?"true":void 0,ariaDisabled:this.disabled?"true":void 0}}};v([d()],m.prototype,"icon",void 0);v([d()],m.prototype,"titleText",void 0);v([d()],m.prototype,"subtitleText",void 0);v([d()],m.prototype,"number",void 0);v([d({type:Boolean})],m.prototype,"disabled",void 0);v([d({type:Boolean})],m.prototype,"selected",void 0);v([d({type:Boolean})],m.prototype,"hideSeparator",void 0);v([d({type:Boolean})],m.prototype,"activeSeparator",void 0);v([d({type:Boolean})],m.prototype,"branchingSeparator",void 0);v([d({defaultValue:"-1"})],m.prototype,"_tabIndex",void 0);m=v([Y({tag:"ui5-wizard-tab",renderer:ue,styles:et,template:Xe,dependencies:[ke]}),me("selection-change-requested")],m);m.define();const tt=m;var z=globalThis&&globalThis.__decorate||function(l,e,i,t){var n=arguments.length,s=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,i):t,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(l,e,i,t);else for(var o=l.length-1;o>=0;o--)(r=l[o])&&(s=(n<3?r(s):n>3?r(e,i,s):r(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s};let _=class extends X{};z([d()],_.prototype,"titleText",void 0);z([d()],_.prototype,"subtitleText",void 0);z([d()],_.prototype,"icon",void 0);z([d({type:Boolean})],_.prototype,"disabled",void 0);z([d({type:Boolean})],_.prototype,"selected",void 0);z([d({type:Boolean})],_.prototype,"branching",void 0);_=z([Y("ui5-wizard-step")],_);_.define();const be=_,it=Object.freeze(Object.defineProperty({__proto__:null,default:be},Symbol.toStringTag,{value:"Module"}));function nt(l,e,i){return h`<div class="ui5-wiz-root" aria-label="${a(this.ariaLabelText)}" role="region"><nav class="ui5-wiz-nav" part="navigator" aria-label="${a(this.navAriaLabelText)}" tabindex="-1"><div class="ui5-wiz-nav-list" role="list" aria-label="${a(this.listAriaLabelText)}" aria-describedby="wiz-nav-descr" aria-controls="${a(this._id)}-wiz-content">${k(this._stepsInHeader,(t,n)=>t._id||n,(t,n)=>st.call(this,l,e,i,t,n))}</div></nav><span id="wiz-nav-descr" class="ui5-hidden-text">${a(this.navAriaDescribedbyText)}</span><div id="${a(this._id)}-wiz-content" class="ui5-wiz-content" @scroll="${this.onScroll}">${k(this._steps,(t,n)=>t._id||n,(t,n)=>at.call(this,l,e,i,t,n))}</div></div>`}function st(l,e,i,t,n){return i?h`<${S("ui5-wizard-tab",e,i)} title-text="${a(t.titleText)}" subtitle-text="${a(t.subtitleText)}" icon="${a(t.icon)}" number="${a(t.number)}" ?disabled="${t.disabled}" ?selected="${t.selected}" ?hide-separator="${t.hideSeparator}" ?active-separator="${t.activeSeparator}" ?branching-separator="${t.branchingSeparator}" ._wizardTabAccInfo="${a(t.accInfo)}" data-ui5-content-ref-id="${a(t.refStepId)}" data-ui5-index="${a(t.pos)}" _tab-index="${a(t.tabIndex)}" @ui5-selection-change-requested="${a(this.onSelectionChangeRequested)}" @ui5-focused="${a(this.onStepInHeaderFocused)}" @click="${this._onGroupedTabClick}" style=${ne(t.styles)}></${S("ui5-wizard-tab",e,i)}>`:h`<ui5-wizard-tab title-text="${a(t.titleText)}" subtitle-text="${a(t.subtitleText)}" icon="${a(t.icon)}" number="${a(t.number)}" ?disabled="${t.disabled}" ?selected="${t.selected}" ?hide-separator="${t.hideSeparator}" ?active-separator="${t.activeSeparator}" ?branching-separator="${t.branchingSeparator}" ._wizardTabAccInfo="${a(t.accInfo)}" data-ui5-content-ref-id="${a(t.refStepId)}" data-ui5-index="${a(t.pos)}" _tab-index="${a(t.tabIndex)}" @ui5-selection-change-requested="${a(this.onSelectionChangeRequested)}" @ui5-focused="${a(this.onStepInHeaderFocused)}" @click="${this._onGroupedTabClick}" style=${ne(t.styles)}></ui5-wizard-tab>`}function at(l,e,i,t,n){return h`<div class="ui5-wiz-content-item" ?hidden="${t.disabled}" ?selected="${t.selected}" ?stretch="${t.stretch}" part="step-content" aria-label="${a(t.stepContentAriaLabel)}" role="region" data-ui5-content-item-ref-id="${a(t._id)}"><div class="ui5-wiz-content-item-wrapper"><slot name="${a(t._individualSlot)}"></slot></div></div>`}function ot(l,e,i){return i?h`<${S("ui5-responsive-popover",e,i)} horizontal-align="Center" placement-type="Bottom" aria-label="${a(this.actionSheetStepsText)}" class="${se(this.classes.popover)}" @ui5-after-close=${a(this._afterClosePopover)} content-only-on-desktop prevent-focus-restore _hide-header><ul class="ui5-wizard-responsive-popover-list">${k(this._groupedTabs,(t,n)=>t._id||n,(t,n)=>ae.call(this,l,e,i,t,n))}</ul><div slot="footer" class="ui5-responsive-popover-footer"><${S("ui5-button",e,i)} design="Transparent" @click="${this._closeRespPopover}">Cancel</${S("ui5-button",e,i)}></div></${S("ui5-responsive-popover",e,i)}>`:h`<ui5-responsive-popover horizontal-align="Center" placement-type="Bottom" aria-label="${a(this.actionSheetStepsText)}" class="${se(this.classes.popover)}" @ui5-after-close=${a(this._afterClosePopover)} content-only-on-desktop prevent-focus-restore _hide-header><ul class="ui5-wizard-responsive-popover-list">${k(this._groupedTabs,(t,n)=>t._id||n,(t,n)=>ae.call(this,l,e,i,t,n))}</ul><div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${this._closeRespPopover}">Cancel</ui5-button></div></ui5-responsive-popover>`}function ae(l,e,i,t,n){return i?h`<li><${S("ui5-button",e,i)} icon="${a(t.icon)}" ?disabled="${t.disabled}" design="Transparent" data-ui5-header-tab-ref-id="${a(t.accInfo.ariaPosinset)}" @click="${this._onOverflowStepButtonClick}">${a(t.titleText)}</${S("ui5-button",e,i)}></li>`:h`<li><ui5-button icon="${a(t.icon)}" ?disabled="${t.disabled}" design="Transparent" data-ui5-header-tab-ref-id="${a(t.accInfo.ariaPosinset)}" @click="${this._onOverflowStepButtonClick}">${a(t.titleText)}</ui5-button></li>`}I("@ui5/webcomponents-theming","sap_fiori_3",async()=>Q);I("@ui5/webcomponents-fiori","sap_fiori_3",async()=>ee);const rt={packageName:"@ui5/webcomponents-fiori",fileName:"themes/Wizard.css",content:`.ui5-hidden-text {
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
`};I("@ui5/webcomponents-theming","sap_fiori_3",async()=>Q);I("@ui5/webcomponents-fiori","sap_fiori_3",async()=>ee);const lt={packageName:"@ui5/webcomponents-fiori",fileName:"themes/WizardPopover.css",content:`.ui5-hidden-text {
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
`};var w=globalThis&&globalThis.__decorate||function(l,e,i,t){var n=arguments.length,s=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,i):t,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(l,e,i,t);else for(var o=l.length-1;o>=0;o--)(r=l[o])&&(s=(n<3?r(s):n>3?r(e,i,s):r(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s},c;const dt=64,pt=200,b="data-ui5-wizard-expanded-tab",j="data-ui5-wizard-expanded-tab-next",oe="data-ui5-wizard-after-current-tab",F="data-ui5-wizard-expanded-tab-prev",G={MIN:.5,DEFAULT:.7,MAX:1},V={0:"S",599:"M",1023:"L",1439:"XL"};let g=c=class extends X{constructor(){super(),this.stepScrollOffsets=[],this._groupedTabs=[],this.selectedStepIndex=0,this.previouslySelectedStepIndex=0,this.selectionRequestedByClick=!1,this._prevWidth=0,this._prevContentHeight=0,this.selectionRequestedByScroll=!1,this._itemNavigation=new Be(this,{navigationMode:Ne.Auto,getItemsCallback:()=>this.enabledStepsInHeaderDOM}),this._onStepResize=this.onStepResize.bind(this)}get classes(){return{popover:{"ui5-wizard-responsive-popover":!0,"ui5-wizard-popover":!te(),"ui5-wizard-dialog":te()}}}static async onDefine(){c.i18nBundle=await ze("@ui5/webcomponents-fiori")}static get SCROLL_DEBOUNCE_RATE(){return 25}onExitDOM(){this.detachStepsResizeObserver()}onBeforeRendering(){this.syncSelection()}onAfterRendering(){this.storeStepScrollOffsets(),this.previouslySelectedStepIndex!==this.selectedStepIndex&&this.scrollToSelectedStep(),this.attachStepsResizeObserver(),this.previouslySelectedStepIndex=this.selectedStepIndex}syncSelection(){this.stepsCount!==0&&(this.selectedStepsCount===0&&(this.selectFirstStep(),console.warn("Selecting the first step: no selected step is defined.")),this.selectedStepsCount>1&&(this.selectLastSelectedStep(),console.warn("Selecting the last step defined as selected: multiple selected steps are defined.")),this.selectedStep&&this.selectedStep.disabled&&console.warn("The selected step is disabled: you need to enable it in order to interact with the step."),this.selectedStepIndex=this.getSelectedStepIndex())}selectFirstStep(){this.deselectAll(),this.slottedSteps[0].selected=!0,this.slottedSteps[0].disabled=!1}selectLastSelectedStep(){const e=this.lastSelectedStep;e&&(this.deselectAll(),e.selected=!0,e.disabled=!1)}deselectAll(){this.slottedSteps.forEach(e=>{e.selected=!1})}storeStepScrollOffsets(){this.stepScrollOffsets=this.slottedSteps.map(e=>{const i=this.getStepWrapperByRefId(e._id);return i.offsetTop+i.offsetHeight})}onSelectionChangeRequested(e){this.selectionRequestedByClick=!0,this.changeSelectionByStepAction(e.target)}onScroll(e){if(this.selectionRequestedByClick){this.selectionRequestedByClick=!1;return}Re(this.changeSelectionByScroll.bind(this,e.target.scrollTop),c.SCROLL_DEBOUNCE_RATE)}onStepInHeaderFocused(e){this._itemNavigation.setCurrentItem(e.target)}onStepResize(){this.width=this.getBoundingClientRect().width,this.contentHeight=this.getContentHeight(),(this._prevWidth!==this.width||this.contentHeight!==this._prevContentHeight)&&this._closeRespPopover(),this._prevWidth=this.width,this._prevContentHeight=this.contentHeight,this._calcCurrentBreakpoint()}attachStepsResizeObserver(){this.stepsDOM.forEach(e=>{H.deregister(e,this._onStepResize),H.register(e,this._onStepResize)})}detachStepsResizeObserver(){this.stepsDOM.forEach(e=>{H.deregister(e,this._onStepResize)})}_calcCurrentBreakpoint(){const i=Object.keys(V).reverse().find(t=>Number(t)<this.width);this._breakpoint=i?V[i]:V[0]}_adjustHeaderOverflow(){let e=0,i=!0;const t=this.stepsInHeaderDOM;if(!t.length)return;const n=this.progressNavigatorListDOM.getBoundingClientRect().width,s=this.getSelectedStepIndex(),r=this.steps.length?Math.floor(n/pt):Math.floor(n/dt);[...t].forEach((o,u)=>{o.setAttribute(b,"false"),o.setAttribute(F,"false"),o.setAttribute(j,"false"),u>s?t[u].setAttribute(oe,"true"):t[u].removeAttribute(oe)}),t[s]&&t[s].setAttribute(b,"true");for(let o=1;o<r;o++)i&&(e+=1),i&&t[s+e]?(t[s+e].setAttribute(b,"true"),i=!i):!i&&t[s-e]?(t[s-e].setAttribute(b,"true"),i=!i):t[s+e+1]?(e+=1,t[s+e].setAttribute(b,"true"),i=!0):t[s-e]&&(t[s-e].setAttribute(b,"true"),e+=1,i=!1);for(let o=0;o<t.length;o++)if(t[o].getAttribute(b)==="true"&&t[o-1]&&t[o-1].getAttribute(b)==="false"&&t[o-1].setAttribute(F,"true"),t[o].getAttribute(b)==="false"&&t[o-1]&&t[o-1].getAttribute(b)==="true"){t[o].setAttribute(j,"true");break}}_isGroupAtStart(e){const i=this.stepsInHeaderDOM.indexOf(e);return e.getAttribute(b)==="false"&&e.getAttribute(F)==="true"&&i>0}_isGroupAtEnd(e){const i=this.stepsInHeaderDOM.indexOf(e);return e.getAttribute(b)==="false"&&e.getAttribute(j)==="true"&&i+1<this.steps.length}async _showPopover(e,i){const t=Array.from(this.stepsInHeaderDOM);this._groupedTabs=[];const n=i?0:this.stepsInHeaderDOM.indexOf(e),s=i?this.stepsInHeaderDOM.indexOf(e):t.length-1;for(let o=n;o<=s;o++)this._groupedTabs.push(t[o]);(await this._respPopover()).showAt(e)}async _onGroupedTabClick(e){const i=e.target;if(this._isGroupAtStart(i))return this._showPopover(i,!0);if(this._isGroupAtEnd(i))return this._showPopover(i,!1)}_onOverflowStepButtonClick(e){const i=Array.from(this.stepsInHeaderDOM),n=e.target.getAttribute("data-ui5-header-tab-ref-id"),s=this.slottedSteps[Number(n)-1],r=this.selectedStep,o=this.slottedSteps.indexOf(s);this.switchSelectionFromOldToNewStep(r,s,o,!0),this._closeRespPopover(),i[o].focus()}async _closeRespPopover(){const e=await this._respPopover();e&&e.close()}async _respPopover(){return(await this.getStaticAreaItemDomRef()).querySelector(".ui5-wizard-responsive-popover")}changeSelectionByScroll(e){const i=this.getClosestStepIndexByScrollPos(e),t=this.slottedSteps[i];this.selectedStepIndex!==i&&!t.disabled&&i>=0&&i<=this.stepsCount-1&&(this.switchSelectionFromOldToNewStep(this.selectedStep,t,i,!1),this.selectionRequestedByScroll=!0)}async changeSelectionByStepAction(e){const i=e.getAttribute("data-ui5-content-ref-id"),t=this.selectedStep,n=this.getStepByRefId(i),s=e.getAttribute(b)==="true",r=this.slottedSteps.indexOf(n),o=n.firstElementChild,u=await Pe(o);if(u&&u.focus(),t===n){this.scrollToContentItem(this.selectedStepIndex);return}(s||!s&&(r===0||r===this.steps.length-1))&&this.switchSelectionFromOldToNewStep(t,n,r,!0)}getContentHeight(){let e=0;return this.stepsDOM.forEach(i=>{e+=i.getBoundingClientRect().height}),e}getStepAriaLabelText(e,i){return c.i18nBundle.getText(Le,i)}get stepsDOM(){return Array.from(this.shadowRoot.querySelectorAll(".ui5-wiz-content-item"))}get progressNavigatorListDOM(){return this.shadowRoot.querySelector(".ui5-wiz-nav-list")}get _stepsInHeader(){return this.getStepsInfo()}get _steps(){const e=this.getLastEnabledStepIndex(),i=this.getStepsInfo();return this.steps.map((t,n)=>(t.stretch=n===e,t.stepContentAriaLabel=`${this.navStepDefaultHeading} ${i[n].number} ${i[n].titleText}`,t))}get stepsCount(){return this.slottedSteps.length}get selectedStep(){return this.selectedStepsCount?this.selectedSteps[0]:null}get lastSelectedStep(){return this.selectedStepsCount?this.selectedSteps[this.selectedStepsCount-1]:null}get selectedSteps(){return this.slottedSteps.filter(e=>e.selected)}get enabledSteps(){return this.slottedSteps.filter(e=>!e.disabled)}get selectedStepsCount(){return this.selectedSteps.length}get slottedSteps(){return this.getSlottedNodes("steps")}get contentDOM(){return this.shadowRoot.querySelector(".ui5-wiz-content")}get stepsInHeaderDOM(){return Array.from(this.shadowRoot.querySelectorAll("[ui5-wizard-tab]"))}get enabledStepsInHeaderDOM(){return this.stepsInHeaderDOM}get navAriaRoleDescription(){return c.i18nBundle.getText(ie)}get navAriaLabelText(){return c.i18nBundle.getText(Me)}get navAriaDescribedbyText(){return c.i18nBundle.getText(He)}get listAriaLabelText(){return c.i18nBundle.getText(je)}get actionSheetStepsText(){return c.i18nBundle.getText(Fe)}get navStepDefaultHeading(){return c.i18nBundle.getText(Ve)}get optionalStepText(){return c.i18nBundle.getText(Ue)}get activeStepText(){return c.i18nBundle.getText(Ze)}get inactiveStepText(){return c.i18nBundle.getText(Ge)}get ariaLabelText(){return c.i18nBundle.getText(ie)}get effectiveStepSwitchThreshold(){return Ee(this.stepSwitchThreshold,G.MIN,G.MAX)}getStepsInfo(){const e=this.getLastEnabledStepIndex(),i=this.stepsCount,t=this.getSelectedStepIndex();let n=this.steps.length+10,s;return this._adjustHeaderOverflow(),this.steps.map((r,o)=>{const u=o+1,B=o===i-1&&!r.branching,A=r.subtitleText?this.optionalStepText:"",D=r.disabled?this.inactiveStepText:this.activeStepText,N=(r.titleText?`${u} ${r.titleText} ${D} ${A}`:`${this.navStepDefaultHeading} ${u} ${D} ${A}`).trim(),f=o>t;return s={ariaSetsize:i,ariaPosinset:u,ariaLabel:this.getStepAriaLabelText(r,N)},{icon:r.icon,titleText:r.titleText,subtitleText:r.subtitleText,number:u,selected:r.selected,disabled:r.disabled,hideSeparator:B,activeSeparator:o<e&&!r.disabled,branchingSeparator:r.branching,pos:u,accInfo:s,refStepId:r._id,tabIndex:this.selectedStepIndex===o?"0":"-1",styles:{zIndex:f?--n:1}}})}getSelectedStepIndex(){return this.selectedStep?this.slottedSteps.indexOf(this.selectedStep):0}getLastEnabledStepIndex(){let e=0;return this.slottedSteps.forEach((i,t)=>{i.disabled||(e=t)}),e}getStepByRefId(e){return this.slottedSteps.find(i=>i._id===e)}getStepWrapperByRefId(e){return this.shadowRoot.querySelector(`[data-ui5-content-item-ref-id=${e}]`)}getStepWrapperByIdx(e){return this.getStepWrapperByRefId(this.steps[e]._id)}scrollToSelectedStep(){this.selectionRequestedByScroll||this.scrollToContentItem(this.selectedStepIndex),this.selectionRequestedByScroll=!1}scrollToContentItem(e){this.contentDOM.scrollTop=this.getClosestScrollPosByStepIndex(e)}getClosestScrollPosByStepIndex(e){if(e===0)return 0;for(let i=e-1;i>=0;i--)if(this.stepScrollOffsets[i]>0)return this.stepScrollOffsets[i];return 0}getClosestStepIndexByScrollPos(e){for(let i=0;i<=this.stepScrollOffsets.length-1;i++){const t=this.stepScrollOffsets[i],n=this.getStepWrapperByIdx(i),s=n.offsetTop+n.offsetHeight*this.effectiveStepSwitchThreshold;if(t>0&&e<t)return e>s?i+1:i}return this.selectedStepIndex}switchSelectionFromOldToNewStep(e,i,t,n){e&&i&&(i.disabled||(e.selected=!1,i.selected=!0),this.fireEvent("step-change",{step:i,previousStep:e,changeWithClick:n}),this.selectedStepIndex=t)}sortAscending(e,i){return e<i?-1:e>i?1:0}};w([d({type:Z,defaultValue:Z.MultipleSteps})],g.prototype,"contentLayout",void 0);w([d({validator:J})],g.prototype,"width",void 0);w([d({validator:J,defaultValue:G.DEFAULT})],g.prototype,"stepSwitchThreshold",void 0);w([d({validator:J})],g.prototype,"contentHeight",void 0);w([d({type:Object,multiple:!0})],g.prototype,"_groupedTabs",void 0);w([d()],g.prototype,"_breakpoint",void 0);w([De({default:!0,type:HTMLElement,individualSlots:!0,invalidateOnChildChange:!0})],g.prototype,"steps",void 0);g=c=w([Y({tag:"ui5-wizard",languageAware:!0,fastNavigation:!0,renderer:ue,styles:[We,rt],staticAreaStyles:lt,template:nt,staticAreaTemplate:ot,dependencies:[tt,be,Oe,Ie]}),me("step-change",{detail:{step:{type:HTMLElement},previousStep:{type:HTMLElement},changeWithClick:{Boolean}}})],g);g.define();const ct=g,ut=Object.freeze(Object.defineProperty({__proto__:null,default:ct},Symbol.toStringTag,{value:"Module"})),y=he("ui5-wizard",["contentLayout"],[],[],["step-change"],()=>ce(()=>Promise.resolve().then(()=>ut),void 0,import.meta.url));y.displayName="Wizard";y.defaultProps={contentLayout:Z.MultipleSteps};try{y.displayName="Wizard",y.__docgenInfo={description:`The \`Wizard\` helps users to complete a complex task by dividing it into sections and guiding them through it. It has two main areas - a navigation area at the top showing the step sequence and a content area below it.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-Wizard)`,displayName:"Wizard",props:{children:{defaultValue:null,description:"Defines the steps.\n\n**Note:** Use the available `WizardStep` component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onStepChange:{defaultValue:null,description:"Fired when the step is changed by user interaction - either with scrolling, or by clicking on the steps within the component header.",name:"onStepChange",required:!1,type:{name:"(event: Ui5CustomEvent<WizardDomRef, WizardStepChangeEventDetail>) => void"}},contentLayout:{defaultValue:{value:"WizardContentLayout.MultipleSteps"},description:"Defines how the content of the `Wizard` would be visualized.",name:"contentLayout",required:!1,type:{name:"enum",value:[{value:'"MultipleSteps"'},{value:'"SingleStep"'},{value:'"MultipleSteps"'},{value:'"SingleStep"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const x=he("ui5-wizard-step",["icon","subtitleText","titleText"],["branching","disabled","selected"],[],[],()=>ce(()=>Promise.resolve().then(()=>it),void 0,import.meta.url));x.displayName="WizardStep";try{x.displayName="WizardStep",x.__docgenInfo={description:"A component that represents a logical step as part of the `Wizard`. It is meant to aggregate arbitrary HTML elements that form the content of a single step.",displayName:"WizardStep",props:{children:{defaultValue:null,description:"Defines the step content.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},branching:{defaultValue:null,description:"When `branching` is enabled a dashed line would be displayed after the step, meant to indicate that the next step is not yet known and depends on user choice in the current step.\n\n**Note:** It is recommended to use `branching` on the last known step and later add new steps when it becomes clear how the wizard flow should continue.",name:"branching",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Defines if the step is `disabled`. When disabled the step is displayed, but the user can't select the step by clicking or navigate to it with scrolling.\n\n**Note:** Step can't be `selected` and `disabled` at the same time. In this case the `selected` property would take precedence.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:'Defines the `icon` of the step.\n\n**Note:** The icon is displayed in the `Wizard` navigation header.\n\nThe SAP-icons font provides numerous options. See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.',name:"icon",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"Defines the step's `selected` state - the step that is currently active.\n\n**Note:** Step can't be `selected` and `disabled` at the same time. In this case the `selected` property would take precedence.",name:"selected",required:!1,type:{name:"boolean"}},subtitleText:{defaultValue:null,description:"Defines the `subtitleText` of the step.\n\n**Note:** the text is displayed in the `Wizard` navigation header.",name:"subtitleText",required:!1,type:{name:"string"}},titleText:{defaultValue:null,description:"Defines the `titleText` of the step.\n\n**Note:** The text is displayed in the `Wizard` navigation header.",name:"titleText",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const ht="hint",fe="M192 449h33V225h-32v-34h95v258h32v31H192v-31zm15-369q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34z",mt=!0,bt="SAP-icons-v4",ft="@ui5/webcomponents-icons";$(ht,{pathData:fe,ltr:mt,collection:bt,packageName:ft});const gt="hint",ge="M256 0q53 0 100 20t81.5 54.5T492 156t20 100-20 100-54.5 81.5T356 492t-100 20-100-20-81.5-54.5T20 356 0 256t20-100 54.5-81.5T156 20 256 0zm0 461q43 0 80.5-16t65-44 43.5-65 16-80-16-80.5-43.5-65-65-43.5T256 51t-80 16-65 43.5-44 65T51 256t16 80 44 65 65 44 80 16zm0-333q13 0 22.5 9.5T288 160t-9.5 22.5T256 192t-22.5-9.5T224 160t9.5-22.5T256 128zm0 115q11 0 18 7.5t7 18.5v102q0 11-7 18.5t-18 7.5-18.5-7.5T230 371V269q0-11 7.5-18.5T256 243z",vt=!0,St="SAP-icons-v5",_t="@ui5/webcomponents-icons";$(gt,{pathData:ge,ltr:vt,collection:St,packageName:_t});K();const wt="hint",zt="lead",ve="M0 256q0-53 20-99.5T75 75t81.5-55T256 0t100 20 81.5 55 54.5 81.5 20 99.5-20 100-54.5 81.5T356 492t-100 20-99.5-20T75 437.5 20 356 0 256zm32 0q0 46 17.5 87t48 71.5 71.5 48 87 17.5q47 0 87.5-17.5t71-48 48-71.5 17.5-87q0-47-17.5-87.5t-48-71-71-48T256 32q-46 0-87 17.5t-71.5 48-48 71T32 256zm138 61l41-5q3 14 12 25t19 15v-73q-32-11-51.5-32.5T171 202q0-12 5-25t14.5-24 22.5-18.5 29-8.5v-21h25v21q58 4 70 62l-36 6q-2-12-11-20t-23-9v76q42 9 59 31t17 46q0 28-20.5 50.5T267 393v33h-25v-32q-26-1-47-20t-25-57zm97 39q14-4 23.5-14.5T300 319q0-25-33-35v72zm-25-128v-64q-11 4-18 13t-7 19q0 20 25 32z",Tt=!0,xt="SAP-icons-v4",yt="@ui5/webcomponents-icons";$(zt,{pathData:ve,ltr:Tt,collection:xt,packageName:yt});const It="lead",Se="M256 0q53 0 100 20t81.5 54.5T492 156t20 100-20 100-54.5 81.5T356 492t-100 20-100-20-81.5-54.5T20 356 0 256t20-100 54.5-81.5T156 20 256 0zm0 461q43 0 80.5-16t65-44 43.5-65 16-80-16-80.5-43.5-65-65-43.5T256 51t-80 16-65 43.5-44 65T51 256t16 80 44 65 65 44 80 16zm-13-256q-5 0-9 4t-4 9 4 8.5 9 3.5h26q26 0 45 19t19 45q0 23-15 40.5T282 357v34q0 11-7.5 18.5T256 417t-18.5-7.5T230 391v-33h-25q-11 0-18.5-7t-7.5-18 7.5-18.5T205 307h64q5 0 9-4t4-9-4-8.5-9-3.5h-26q-26 0-45-19t-19-45q0-23 15-40.5t36-22.5v-33q0-11 7.5-18.5T256 96t18.5 7.5T282 122v32h25q11 0 18.5 7t7.5 18-7.5 18.5T307 205h-64z",$t=!0,qt="SAP-icons-v5",Ct="@ui5/webcomponents-icons";$(It,{pathData:Se,ltr:$t,collection:qt,packageName:Ct});K();const At="lead",Dt="product",_e="M474.5 110v290l-218 110-218-110V110l109-55 219 109v109l-37 18V186l-182-90-73 35v248l182 90 182-90V131l-182-90-28 14-41-21 69-34zm-363 200l108 54v45l-108-53v-46z",kt=!1,Bt="SAP-icons-v4",Nt="@ui5/webcomponents-icons";$(Dt,{pathData:_e,ltr:kt,collection:Bt,packageName:Nt});const Et="product",we="M257 512q-7 0-13-3L45 393q-13-7-13-22V160q0-14 11-22l102-69q8-5 15-5 8 0 13 4l167 104q12 6 12 22v101q0 11-7.5 18t-18.5 7-18-7.5-7-18.5v-86l-140-88-78 53v184l174 100 172-100V156L243 48q-13-8-13-22 0-11 7.5-18.5T256 0q7 0 13 3l198 116q13 8 13 22v230q0 15-13 22L270 509q-6 3-13 3zm-37-147q-7 0-12-4l-67-38q-13-8-13-22 0-11 7.5-18.5T154 275q6 0 13 3l66 39q13 8 13 22 0 11-7.5 18.5T220 365z",Rt=!1,Pt="SAP-icons-v5",Ot="@ui5/webcomponents-icons";$(Et,{pathData:we,ltr:Rt,collection:Pt,packageName:Ot});K();const Wt="product",re=p.jsx("br",{}),Lt={title:"Layouts & Floorplans / Wizard",component:y,argTypes:{children:{control:{disable:!0}}},args:{style:{height:"400px"}}},C={render(l){const[e,i]=R.useState("1"),[t,n]=R.useState({2:!0,3:!0,4:!0}),[s,r]=R.useState({step3Btn:!0,finalizeBtn:!0}),o=()=>{n(f=>{const{"2":T,...q}=f;return q}),i("2")},u=()=>{n(f=>{const{"3":T,...q}=f;return q}),i("3")},B=f=>{f.target.checked&&r(T=>{const{step3Btn:q,...E}=T;return E})},A=()=>{alert("Wizard is now completed!")},D=f=>{f.target.value&&r(T=>{const{finalizeBtn:q,...E}=T;return E})},N=f=>{i(f.detail.step.dataset.step),l.onStepChange(f)};return p.jsxs(y,{...l,onStepChange:N,children:[p.jsxs(x,{icon:Wt,titleText:"Product Type",selected:e==="1","data-step":"1",children:[p.jsx(M,{children:"1. Product Type"}),p.jsx($e,{design:qe.Information,children:"The Wizard control is supposed to break down large tasks, into smaller steps, easier for the user to work with."}),p.jsx(L,{wrappingType:O.None,children:"Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor et, varius quam. Aliquam erat volutpat"}),p.jsx(W,{design:P.Emphasized,onClick:o,children:"Step 2"})]}),p.jsxs(x,{icon:wt,titleText:"Product Information",disabled:t[2],selected:e==="2","data-step":"2",children:[p.jsx(M,{children:"2. Product Information"}),p.jsx(L,{wrappingType:O.None,children:"Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien"}),p.jsx(Ce,{onChange:B,text:"Step Completed"}),re,!s.step3Btn&&p.jsx(W,{design:P.Emphasized,onClick:u,children:"Step 3"})]}),p.jsxs(x,{icon:At,titleText:"Pricing",disabled:t[3],selected:e==="3","data-step":"3",children:[p.jsx(M,{children:"3. Pricing"}),p.jsx(L,{wrappingType:O.None,children:"Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien"}),p.jsx(Ae,{placeholder:"Item Price",onInput:D}),re,!s.finalizeBtn&&p.jsx(W,{design:P.Emphasized,onClick:A,children:"Finalize"})]})]})}};var le,de,pe;C.parameters={...C.parameters,docs:{...(le=C.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render(args) {
    const [selected, setSelected] = useState('1');
    const [disabled, setDisabled] = useState<Record<string, boolean>>({
      '2': true,
      '3': true,
      '4': true
    });
    const [hidden, setHidden] = useState<Record<string, boolean>>({
      step3Btn: true,
      finalizeBtn: true
    });
    const goToStep2 = () => {
      setDisabled(prev => {
        const {
          '2': _omit,
          ...rest
        } = prev;
        return rest;
      });
      setSelected('2');
    };
    const goToStep3 = () => {
      setDisabled(prev => {
        const {
          '3': _omit,
          ...rest
        } = prev;
        return rest;
      });
      setSelected('3');
    };
    const handleStep2Completed = e => {
      if (e.target.checked) {
        setHidden(prev => {
          const {
            step3Btn: _omit,
            ...rest
          } = prev;
          return rest;
        });
      }
    };
    const finalizeWizard = () => {
      alert('Wizard is now completed!');
    };
    const handlePriceInput = e => {
      if (e.target.value) {
        setHidden(prev => {
          const {
            finalizeBtn: _omit,
            ...rest
          } = prev;
          return rest;
        });
      }
    };
    const handleStepChange = e => {
      setSelected(e.detail.step.dataset.step);
      args.onStepChange(e);
    };
    return <Wizard {...args} onStepChange={handleStepChange}>
        <WizardStep icon={productIcon} titleText="Product Type" selected={selected === '1'} data-step={'1'}>
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
        <WizardStep icon={hintIcon} titleText="Product Information" disabled={disabled['2']} selected={selected === '2'} data-step={'2'}>
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
          {!hidden['step3Btn'] && <Button design={ButtonDesign.Emphasized} onClick={goToStep3}>
              Step 3
            </Button>}
        </WizardStep>
        <WizardStep icon={leadIcon} titleText="Pricing" disabled={disabled['3']} selected={selected === '3'} data-step={'3'}>
          <Title>3. Pricing</Title>
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
          {!hidden['finalizeBtn'] && <Button design={ButtonDesign.Emphasized} onClick={finalizeWizard}>
              Finalize
            </Button>}
        </WizardStep>
      </Wizard>;
  }
}`,...(pe=(de=C.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};const Mt=["Default"],_i=Object.freeze(Object.defineProperty({__proto__:null,Default:C,__namedExportsOrder:Mt,default:Lt},Symbol.toStringTag,{value:"Module"}));export{_i as C,C as D,x as W};
//# sourceMappingURL=Wizard.stories-2cb60bb8.js.map
