import{j as p}from"./jsx-runtime-D6fbYt3N.js";import{a as ce,B}from"./Button-CzXV-qq-.js";import{M as ue,a as he}from"./index-OrErW1tb.js";import{W as P}from"./WrappingType-CW8URInd.js";import{p as b,q as o,v as S,a as q,s as X,b as d,m as Y,y as de,S as K,x as Q,w as pe}from"./withWebComponent-DpVKsRHi.js";import{I as me,c as I,f as $}from"./Icon-CrKv37md.js";import{r as O}from"./index-DysCNOs_.js";import{B as L}from"./index-DP-u0XOf.js";import{C as be}from"./index-JDrGsgVi.js";import{I as fe}from"./index-D4UDDq86.js";import{L as M}from"./index-kNlKigw5.js";import{T as H}from"./index-CJsKdqu0.js";import{d as ge}from"./slot-_4yKMUwC.js";import{b as Z}from"./event-BX8i4Y_x.js";import{i as ve}from"./i18n-DEVDpFvK.js";import{a as Se}from"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import{f as we,r as ye}from"./ItemNavigation-DWaDskwg.js";import{m as _e}from"./PopupsCommon.css-Bu1W85h-.js";import{f as F}from"./ResizeHandler-D2m47C26.js";import{u as ze}from"./debounce-TTkz9ISH.js";import{c as Te}from"./FocusableElements-DpmShrVF.js";import{R as xe}from"./ResponsivePopover-CkLpmtL-.js";import{aE as Ie,aF as ee,aG as qe,aH as $e,aI as Ce,aJ as Ne,aK as De,aL as Ae,aM as We,aN as ke}from"./i18n-defaults-Bh0NvB0l.js";import{i as Ee,b as Re,A as Be}from"./Keys-DoZifIQ_.js";import{s as J}from"./parameters-bundle.css-B09Df3Yy.js";import{o as W}from"./class-map-CAgcI9af.js";import{s as te}from"./style-map-Bigav4TG.js";function Pe(l,e,i){return b`<div class="ui5-wiz-step-root" role="listitem" tabindex="${o(this.effectiveTabIndex)}" aria-current="${o(this.accInfo.ariaCurrent)}" aria-setsize="${o(this.accInfo.ariaSetsize)}" aria-posinset="${o(this.accInfo.ariaPosinset)}" aria-label="${o(this.accInfo.ariaLabel)}" @click="${this._onclick}" @keyup="${this._onkeyup}" @focusin="${this._onfocusin}"><div class="ui5-wiz-step-main"><div class="ui5-wiz-step-icon-circle">${this.icon?Oe.call(this,l,e,i):Le.call(this,l,e,i)}</div>${this.hasTexts?Me.call(this,l,e,i):void 0}</div>${this.hideSeparator?void 0:He.call(this,l,e,i)}</div>`}function Oe(l,e,i){return i?b`<${S("ui5-icon",e,i)} class="ui5-wiz-step-icon" mode="Decorative" name="${o(this.icon)}"></${S("ui5-icon",e,i)}>`:b`<ui5-icon class="ui5-wiz-step-icon" mode="Decorative" name="${o(this.icon)}"></ui5-icon>`}function Le(l,e,i){return b`<span class="ui5-wiz-step-number">${o(this.number)}</span>`}function Me(l,e,i){return b`<div class="ui5-wiz-step-texts"><div class="ui5-wiz-step-title-text">${o(this.titleText)}</div><div class="ui5-wiz-step-subtitle-text">${o(this.subtitleText)}</div></div>`}function He(l,e,i){return b`<div class="ui5-wiz-step-hr"></div>`}q("@ui5/webcomponents-theming","sap_horizon",async()=>X);q("@ui5/webcomponents-fiori","sap_horizon",async()=>J);const Fe={packageName:"@ui5/webcomponents-fiori",fileName:"themes/WizardTab.css.ts",content:`:host(:not([hidden])){min-width:1px}:host([selected]:not([disabled])) .ui5-wiz-step-icon-circle{background:var(--_ui5-v2-4-0_wiz_tab_selected_bg)}:host([selected]:not([disabled])) .ui5-wiz-step-title-text{color:var(--sapContent_Selected_ForegroundColor)}:host([selected]:not([disabled])) .ui5-wiz-step-icon-circle:after{content:"";position:absolute;border-bottom:.25rem solid var(--_ui5-v2-4-0_wiz_tab_selection_line);border-top-left-radius:.1875rem;border-top-right-radius:.1875rem;left:0;right:0;bottom:-1rem}:host([selected]:not([disabled])) .ui5-wiz-step-icon{color:var(--sapContent_ContrastIconColor)}:host([selected]:not([disabled])) .ui5-wiz-step-number{color:var(--sapContent_ContrastTextColor)}:host([disabled]) .ui5-wiz-step-icon-circle{border-color:var(--sapList_BorderColor);background:var(--sapObjectHeader_Background)}:host([disabled]) .ui5-wiz-step-title-text{color:var(--sapContent_LabelColor)}:host([disabled]) .ui5-wiz-step-icon{color:var(--sapContent_LabelColor)}:host([disabled]) .ui5-wiz-step-number{color:var(--sapContent_LabelColor)}.ui5-wiz-step-root{display:flex;align-items:center;flex-direction:row;font-size:var(--sapFontSize);font-family:var(--sapFontFamily);outline:none}.ui5-wiz-step-main{max-width:100%;text-align:center;white-space:nowrap}:host(:not([disabled])) .ui5-wiz-step-main{cursor:pointer}.ui5-wiz-step-root:focus .ui5-wiz-step-main{outline:var(--_ui5-v2-4-0_wiz_tab_focus_outline);outline-offset:1px;border-radius:var(--_ui5-v2-4-0_wiz_tab_focus_border_radius)}.ui5-wiz-step-icon-circle{display:inline-flex;box-sizing:border-box;vertical-align:middle;justify-content:center;align-items:center;text-align:center;width:2rem;height:2rem;margin:0 .1875rem;line-height:1.875rem;border-radius:50%;background:var(--sapObjectHeader_Background);border:var(--_ui5-v2-4-0_wiz_tab_border);position:relative}.ui5-wiz-step-icon{width:1rem;height:1rem;color:var(--_ui5-v2-4-0_wiz_tab_icon_color);pointer-events:none}.ui5-wiz-step-number{color:var(--_ui5-v2-4-0_wiz_tab_icon_color)}.ui5-wiz-step-texts{display:inline-block;max-width:calc(100% - 3rem);vertical-align:middle;text-align:left;padding:0 .5rem 0 .1875rem;max-height:3rem;overflow:hidden;background:var(--sapObjectHeader_Background)}.ui5-wiz-step-title-text,.ui5-wiz-step-subtitle-text{color:var(--_ui5-v2-4-0_wiz_tab_title_color);white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.ui5-wiz-step-title-text{font-family:var(--_ui5-v2-4-0_wiz_tab_title_font_family);white-space:normal;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}:host([subtitle-text]:not([subtitle-text=""])) .ui5-wiz-step-title-text{-webkit-line-clamp:1}:host([data-ui5-wizard-expanded-tab-prev="true"]) .ui5-wiz-step-title-text,:host([data-ui5-wizard-expanded-tab-prev="true"]) .ui5-wiz-step-subtitle-text,:host([data-ui5-wizard-expanded-tab="false"]) .ui5-wiz-step-texts,:host([data-ui5-wizard-expanded-tab="false"]) .ui5-wiz-step-title-text,:host([data-ui5-wizard-expanded-tab="false"]) .ui5-wiz-step-subtitle-text{display:none}.ui5-wiz-step-subtitle-text{margin-top:.125rem;font-family:var(--sapFontFamily);color:var(--sapContent_LabelColor);font-size:var(--sapFontSmallSize)}.ui5-wiz-step-hr{display:inline-block;border-bottom-color:var(--sapList_BorderColor);border-bottom-width:1px;border-bottom-style:solid;height:1px;flex-grow:1;margin-right:.25rem}:host([active-separator]) .ui5-wiz-step-hr{border-bottom-color:var(--_ui5-v2-4-0_wiz_tab_active_separator_color)}:host([branching-separator]) .ui5-wiz-step-hr{border-bottom-style:dashed}:host([data-ui5-wizard-expanded-tab="false"]) .ui5-wiz-step-root{display:inline;position:absolute;top:0}:host([data-ui5-wizard-after-current-tab="true"]) .ui5-wiz-step-root{right:0}:host([data-ui5-wizard-expanded-tab="false"]) .ui5-wiz-step-hr{display:none}
`};var v=function(l,e,i,t){var n=arguments.length,s=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,i):t,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(l,e,i,t);else for(var a=l.length-1;a>=0;a--)(r=l[a])&&(s=(n<3?r(s):n>3?r(e,i,s):r(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s};let h=class extends K{constructor(){super(...arguments),this.disabled=!1,this.selected=!1,this.hideSeparator=!1,this.activeSeparator=!1,this.branchingSeparator=!1}_onclick(){this.disabled||this.fireDecoratorEvent("selection-change-requested")}_onkeyup(e){this.disabled||(Ee(e)||Re(e))&&!Be(e)&&(e.preventDefault(),this.fireDecoratorEvent("selection-change-requested"))}get effectiveTabIndex(){if(!this.disabled)return this.selected||this.forcedTabIndex==="0"?"0":"-1"}_onfocusin(){this.fireDecoratorEvent("focused")}get hasTexts(){return this.titleText||this.subtitleText}get accInfo(){return{ariaSetsize:this._wizardTabAccInfo&&this._wizardTabAccInfo.ariaSetsize,ariaPosinset:this._wizardTabAccInfo&&this._wizardTabAccInfo.ariaPosinset,ariaLabel:this._wizardTabAccInfo&&this._wizardTabAccInfo.ariaLabel,ariaCurrent:this.selected?"true":void 0}}};v([d()],h.prototype,"icon",void 0);v([d()],h.prototype,"titleText",void 0);v([d()],h.prototype,"subtitleText",void 0);v([d()],h.prototype,"number",void 0);v([d({type:Boolean})],h.prototype,"disabled",void 0);v([d({type:Boolean})],h.prototype,"selected",void 0);v([d({type:Boolean})],h.prototype,"hideSeparator",void 0);v([d({type:Boolean})],h.prototype,"activeSeparator",void 0);v([d({type:Boolean})],h.prototype,"branchingSeparator",void 0);v([d()],h.prototype,"forcedTabIndex",void 0);h=v([Y({tag:"ui5-wizard-tab",renderer:de,styles:Fe,template:Pe,dependencies:[me]}),Z("focused",{bubbles:!0}),Z("selection-change-requested",{bubbles:!0})],h);h.define();const Ve=h;var T=function(l,e,i,t){var n=arguments.length,s=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,i):t,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(l,e,i,t);else for(var a=l.length-1;a>=0;a--)(r=l[a])&&(s=(n<3?r(s):n>3?r(e,i,s):r(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s};let w=class extends K{constructor(){super(...arguments),this.disabled=!1,this.selected=!1,this.branching=!1}};T([d()],w.prototype,"titleText",void 0);T([d()],w.prototype,"subtitleText",void 0);T([d()],w.prototype,"icon",void 0);T([d({type:Boolean})],w.prototype,"disabled",void 0);T([d({type:Boolean})],w.prototype,"selected",void 0);T([d({type:Boolean})],w.prototype,"branching",void 0);w=T([Y("ui5-wizard-step")],w);w.define();const je=w;function Ue(l,e,i){return i?b`<div class="${W(this.classes.root)}" aria-label="${o(this.ariaLabelText)}" role="region"><nav class="ui5-wiz-nav" part="navigator" aria-label="${o(this.navAriaLabelText)}" tabindex="-1"><div class="ui5-wiz-nav-list" role="list" aria-label="${o(this.listAriaLabelText)}" aria-describedby="wiz-nav-descr" aria-controls="${o(this._id)}-wiz-content">${I(this._stepsInHeader,(t,n)=>t._id||n,(t,n)=>ie.call(this,l,e,i,t,n))}</div></nav><span id="wiz-nav-descr" class="ui5-hidden-text" aria-hidden="true">${o(this.navAriaDescribedbyText)}</span><div id="${o(this._id)}-wiz-content" class="ui5-wiz-content" @scroll="${this.onScroll}">${I(this._steps,(t,n)=>t._id||n,(t,n)=>ne.call(this,l,e,i,t,n))}</div></div><${S("ui5-responsive-popover",e,i)} horizontal-align="Center" placement="Bottom" aria-label="${o(this.actionSheetStepsText)}" class="${W(this.classes.popover)}" content-only-on-desktop prevent-focus-restore _hide-header><ul class="ui5-wizard-responsive-popover-list">${I(this._groupedTabs,(t,n)=>t._id||n,(t,n)=>se.call(this,l,e,i,t,n))}</ul><div slot="footer" class="ui5-responsive-popover-footer"><${S("ui5-button",e,i)} design="Transparent" @click="${this._closeRespPopover}">Cancel</${S("ui5-button",e,i)}></div></${S("ui5-responsive-popover",e,i)}>`:b`<div class="${W(this.classes.root)}" aria-label="${o(this.ariaLabelText)}" role="region"><nav class="ui5-wiz-nav" part="navigator" aria-label="${o(this.navAriaLabelText)}" tabindex="-1"><div class="ui5-wiz-nav-list" role="list" aria-label="${o(this.listAriaLabelText)}" aria-describedby="wiz-nav-descr" aria-controls="${o(this._id)}-wiz-content">${I(this._stepsInHeader,(t,n)=>t._id||n,(t,n)=>ie.call(this,l,e,i,t,n))}</div></nav><span id="wiz-nav-descr" class="ui5-hidden-text" aria-hidden="true">${o(this.navAriaDescribedbyText)}</span><div id="${o(this._id)}-wiz-content" class="ui5-wiz-content" @scroll="${this.onScroll}">${I(this._steps,(t,n)=>t._id||n,(t,n)=>ne.call(this,l,e,i,t,n))}</div></div><ui5-responsive-popover horizontal-align="Center" placement="Bottom" aria-label="${o(this.actionSheetStepsText)}" class="${W(this.classes.popover)}" content-only-on-desktop prevent-focus-restore _hide-header><ul class="ui5-wizard-responsive-popover-list">${I(this._groupedTabs,(t,n)=>t._id||n,(t,n)=>se.call(this,l,e,i,t,n))}</ul><div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${this._closeRespPopover}">Cancel</ui5-button></div></ui5-responsive-popover>`}function ie(l,e,i,t,n){return i?b`<${S("ui5-wizard-tab",e,i)} title-text="${o(t.titleText)}" subtitle-text="${o(t.subtitleText)}" icon="${o(t.icon)}" number="${o(t.number)}" ?disabled="${t.disabled}" ?selected="${t.selected}" ?hide-separator="${t.hideSeparator}" ?active-separator="${t.activeSeparator}" ?branching-separator="${t.branchingSeparator}" ._wizardTabAccInfo="${o(t.accInfo)}" data-ui5-content-ref-id="${o(t.refStepId)}" data-ui5-index="${o(t.pos)}" @ui5-selection-change-requested="${o(this.onSelectionChangeRequested)}" @ui5-focused="${o(this.onStepInHeaderFocused)}" @click="${this._onGroupedTabClick}" style=${te(t.styles)}></${S("ui5-wizard-tab",e,i)}>`:b`<ui5-wizard-tab title-text="${o(t.titleText)}" subtitle-text="${o(t.subtitleText)}" icon="${o(t.icon)}" number="${o(t.number)}" ?disabled="${t.disabled}" ?selected="${t.selected}" ?hide-separator="${t.hideSeparator}" ?active-separator="${t.activeSeparator}" ?branching-separator="${t.branchingSeparator}" ._wizardTabAccInfo="${o(t.accInfo)}" data-ui5-content-ref-id="${o(t.refStepId)}" data-ui5-index="${o(t.pos)}" @ui5-selection-change-requested="${o(this.onSelectionChangeRequested)}" @ui5-focused="${o(this.onStepInHeaderFocused)}" @click="${this._onGroupedTabClick}" style=${te(t.styles)}></ui5-wizard-tab>`}function ne(l,e,i,t,n){return b`<div class="ui5-wiz-content-item" ?hidden="${t.disabled}" ?selected="${t.selected}" ?stretch="${t.stretch}" part="step-content" aria-label="${o(t.stepContentAriaLabel)}" role="region" data-ui5-content-item-ref-id="${o(t._id)}"><div class="ui5-wiz-content-item-wrapper"><slot name="${o(t._individualSlot)}"></slot></div></div>`}function se(l,e,i,t,n){return i?b`<li><${S("ui5-button",e,i)} icon="${o(t.icon)}" ?disabled="${t.disabled}" design="Transparent" data-ui5-header-tab-ref-id="${o(t.accInfo.ariaPosinset)}" @click="${this._onOverflowStepButtonClick}">${o(t.titleText)}</${S("ui5-button",e,i)}></li>`:b`<li><ui5-button icon="${o(t.icon)}" ?disabled="${t.disabled}" design="Transparent" data-ui5-header-tab-ref-id="${o(t.accInfo.ariaPosinset)}" @click="${this._onOverflowStepButtonClick}">${o(t.titleText)}</ui5-button></li>`}q("@ui5/webcomponents-theming","sap_horizon",async()=>X);q("@ui5/webcomponents-fiori","sap_horizon",async()=>J);const Ge={packageName:"@ui5/webcomponents-fiori",fileName:"themes/Wizard.css.ts",content:`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:block;height:100%;width:100%;overflow:auto}:host([_breakpoint="S"])::part(navigator),:host([_breakpoint="S"])::part(step-content){padding-left:1rem;padding-right:1rem}:host([_breakpoint="M"])::part(navigator),:host([_breakpoint="M"])::part(step-content){padding-left:2rem;padding-right:2rem}:host([_breakpoint="L"])::part(navigator),:host([_breakpoint="L"])::part(step-content){padding-left:2rem;padding-right:2rem}:host([_breakpoint="XL"])::part(navigator),:host([_breakpoint="XL"])::part(step-content){padding-left:3rem;padding-right:3rem}.ui5-wiz-root{height:100%;width:100%;position:relative}.ui5-wiz-content{position:relative;overflow:auto;height:calc(100% - 4rem);box-sizing:border-box;background:var(--sapBackgroundColor)}.ui5-wiz-content-item{display:block;box-sizing:border-box;padding-top:1rem;padding-bottom:1rem}:host([content-layout="SingleStep"]) .ui5-wiz-content-item:not([selected]){display:none}.ui5-wiz-content-item-wrapper{display:block;padding:var(--_ui5-v2-4-0_wiz_content_item_wrapper_padding);background-color:var(--_ui5-v2-4-0_wiz_content_item_wrapper_bg);border-radius:var(--sapElement_BorderCornerRadius)}.ui5-wiz-content-item[hidden]{display:none}.ui5-wiz-content-item[stretch]{min-height:100%}[ui5-wizard-tab][data-ui5-wizard-expanded-tab=true]+[ui5-wizard-tab][data-ui5-wizard-expanded-tab=false]{width:2rem;padding-left:.5rem}[ui5-wizard-tab][data-ui5-wizard-expanded-tab=false]{width:.25rem;padding:0}.ui5-wiz-nav-list{display:table;table-layout:fixed;position:relative;list-style:none;margin:0;box-sizing:border-box;width:100%;height:2rem;padding:0}[ui5-wizard-tab]{display:table-cell;position:relative}.ui5-wiz-nav{box-sizing:border-box;height:4rem;padding-top:1rem;padding-bottom:1rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:var(--sapObjectHeader_Background);font-size:.875rem;box-shadow:var(--sapContent_HeaderShadow);outline:none;display:flex;align-items:center}[ui5-wizard-tab][data-ui5-wizard-expanded-tab=false]+[ui5-wizard-tab][data-ui5-wizard-expanded-tab=false]{width:.25rem}[ui5-wizard-tab][data-ui5-wizard-expanded-tab-prev=true],[ui5-wizard-tab][data-ui5-wizard-expanded-tab=false]+[ui5-wizard-tab][data-ui5-wizard-expanded-tab-prev=true]{width:2rem;padding-right:.75rem}
`};q("@ui5/webcomponents-theming","sap_horizon",async()=>X);q("@ui5/webcomponents-fiori","sap_horizon",async()=>J);const Ze={packageName:"@ui5/webcomponents-fiori",fileName:"themes/WizardPopover.css.ts",content:`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}.ui5-wizard-responsive-popover{box-shadow:var(--sapContent_Shadow1)}.ui5-wizard-responsive-popover-list{list-style:none;margin:0;padding:0}.ui5-responsive-popover-footer{display:flex;justify-content:flex-end;padding:.25rem 0;width:100%}.ui5-wizard-popover .ui5-wizard-responsive-popover-list [ui5-button]{width:200px}.ui5-wizard-dialog .ui5-wizard-responsive-popover-list [ui5-button]{width:100%}
`};var y=function(l,e,i,t){var n=arguments.length,s=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,i):t,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(l,e,i,t);else for(var a=l.length-1;a>=0;a--)(r=l[a])&&(s=(n<3?r(s):n>3?r(e,i,s):r(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s},u;const Xe=64,Ye=200,m="data-ui5-wizard-expanded-tab",V="data-ui5-wizard-expanded-tab-next",oe="data-ui5-wizard-after-current-tab",j="data-ui5-wizard-expanded-tab-prev",U={MIN:.5,DEFAULT:.7,MAX:1},G={0:"S",599:"M",1023:"L",1439:"XL"};let g=u=class extends K{constructor(){super(),this.contentLayout="MultipleSteps",this.stepSwitchThreshold=U.DEFAULT,this._groupedTabs=[],this.stepScrollOffsets=[],this.selectedStepIndex=0,this.previouslySelectedStepIndex=0,this.selectionRequestedByClick=!1,this._prevWidth=0,this._prevContentHeight=0,this.selectionRequestedByScroll=!1,this._itemNavigation=new we(this,{navigationMode:ye.Auto,getItemsCallback:()=>this.enabledStepsInHeaderDOM}),this._onStepResize=this.onStepResize.bind(this)}get classes(){return{root:{"ui5-wiz-root":!0},popover:{"ui5-wizard-responsive-popover":!0,"ui5-wizard-popover":!Q(),"ui5-wizard-dialog":Q()}}}static get SCROLL_DEBOUNCE_RATE(){return 25}onExitDOM(){this.detachStepsResizeObserver()}onBeforeRendering(){this.syncSelection()}onAfterRendering(){this.storeStepScrollOffsets(),this.previouslySelectedStepIndex!==this.selectedStepIndex&&this.scrollToSelectedStep(),this.attachStepsResizeObserver(),this.previouslySelectedStepIndex=this.selectedStepIndex}syncSelection(){this.stepsCount!==0&&(this.selectedStepsCount===0&&(this.selectFirstStep(),console.warn("Selecting the first step: no selected step is defined.")),this.selectedStepsCount>1&&(this.selectLastSelectedStep(),console.warn("Selecting the last step defined as selected: multiple selected steps are defined.")),this.selectedStep&&this.selectedStep.disabled&&console.warn("The selected step is disabled: you need to enable it in order to interact with the step."),this.selectedStepIndex=this.getSelectedStepIndex(),this.selectedStep&&this.stepsInHeaderDOM.length&&(this._itemNavigation._getItems().includes(this.stepsInHeaderDOM[this.selectedStepIndex])?this._itemNavigation.setCurrentItem(this.stepsInHeaderDOM[this.selectedStepIndex]):this._itemNavigation.setCurrentItem(this.stepsInHeaderDOM.find(e=>e.selected))))}selectFirstStep(){this.deselectAll(),this.slottedSteps[0].selected=!0,this.slottedSteps[0].disabled=!1}selectLastSelectedStep(){const e=this.lastSelectedStep;e&&(this.deselectAll(),e.selected=!0,e.disabled=!1)}deselectAll(){this.slottedSteps.forEach(e=>{e.selected=!1})}storeStepScrollOffsets(){this.stepScrollOffsets=this.slottedSteps.map(e=>{const i=this.getStepWrapperByRefId(e._id);return i.offsetTop+i.offsetHeight})}onSelectionChangeRequested(e){this.selectionRequestedByClick=!0,this.changeSelectionByStepAction(e.target)}onScroll(e){if(this.selectionRequestedByClick){this.selectionRequestedByClick=!1;return}this.contentLayout!=="SingleStep"&&ze(this.changeSelectionByScroll.bind(this,e.target.scrollTop),u.SCROLL_DEBOUNCE_RATE)}onStepInHeaderFocused(e){this._itemNavigation.setCurrentItem(e.target)}onStepResize(){this.width=this.getBoundingClientRect().width,this.contentHeight=this.getContentHeight(),(this._prevWidth!==this.width||this.contentHeight!==this._prevContentHeight)&&this._closeRespPopover(),this._prevWidth=this.width,this._prevContentHeight=this.contentHeight,this._calcCurrentBreakpoint()}attachStepsResizeObserver(){this.stepsDOM.forEach(e=>{F.deregister(e,this._onStepResize),F.register(e,this._onStepResize)})}detachStepsResizeObserver(){this.stepsDOM.forEach(e=>{F.deregister(e,this._onStepResize)})}_calcCurrentBreakpoint(){const i=Object.keys(G).reverse().find(t=>Number(t)<this.width);this._breakpoint=i?G[i]:G[0]}_adjustHeaderOverflow(){let e=0,i=!0;const t=this.stepsInHeaderDOM;if(!t.length)return;const n=this.progressNavigatorListDOM.getBoundingClientRect().width,s=this.getSelectedStepIndex(),r=this.steps.length?Math.floor(n/Ye):Math.floor(n/Xe);[...t].forEach((a,c)=>{a.setAttribute(m,"false"),a.setAttribute(j,"false"),a.setAttribute(V,"false"),c>s?t[c].setAttribute(oe,"true"):t[c].removeAttribute(oe)}),t[s]&&t[s].setAttribute(m,"true");for(let a=1;a<r;a++)i&&(e+=1),i&&t[s+e]?(t[s+e].setAttribute(m,"true"),i=!i):!i&&t[s-e]?(t[s-e].setAttribute(m,"true"),i=!i):t[s+e+1]?(e+=1,t[s+e].setAttribute(m,"true"),i=!0):t[s-e]&&(t[s-e].setAttribute(m,"true"),e+=1,i=!1);for(let a=0;a<t.length;a++)if(t[a].getAttribute(m)==="true"&&t[a-1]&&t[a-1].getAttribute(m)==="false"&&t[a-1].setAttribute(j,"true"),t[a].getAttribute(m)==="false"&&t[a-1]&&t[a-1].getAttribute(m)==="true"){t[a].setAttribute(V,"true");break}}_isGroupAtStart(e){const i=this.stepsInHeaderDOM.indexOf(e);return e.getAttribute(m)==="false"&&e.getAttribute(j)==="true"&&i>0}_isGroupAtEnd(e){const i=this.stepsInHeaderDOM.indexOf(e);return e.getAttribute(m)==="false"&&e.getAttribute(V)==="true"&&i+1<this.steps.length}_showPopover(e,i){const t=Array.from(this.stepsInHeaderDOM);this._groupedTabs=[];const n=i?0:this.stepsInHeaderDOM.indexOf(e),s=i?this.stepsInHeaderDOM.indexOf(e):t.length-1;for(let a=n;a<=s;a++)this._groupedTabs.push(t[a]);const r=this._respPopover();r.opener=e,r.open=!0}_onGroupedTabClick(e){const i=e.target;if(this._isGroupAtStart(i))return this._showPopover(i,!0);if(this._isGroupAtEnd(i))return this._showPopover(i,!1)}_onOverflowStepButtonClick(e){const i=Array.from(this.stepsInHeaderDOM),n=e.target.getAttribute("data-ui5-header-tab-ref-id"),s=this.slottedSteps[Number(n)-1],r=this.selectedStep,a=this.slottedSteps.indexOf(s);this.switchSelectionFromOldToNewStep(r,s,a,!1),this._closeRespPopover(),i[a].focus()}_closeRespPopover(){const e=this._respPopover();e&&(e.open=!1)}_respPopover(){return this.shadowRoot.querySelector(".ui5-wizard-responsive-popover")}changeSelectionByScroll(e){const i=this.getClosestStepIndexByScrollPos(e),t=this.slottedSteps[i];this.selectedStepIndex!==i&&!t.disabled&&i>=0&&i<=this.stepsCount-1&&(this.switchSelectionFromOldToNewStep(this.selectedStep,t,i,!0),this.selectionRequestedByScroll=!0)}async changeSelectionByStepAction(e){const i=e.getAttribute("data-ui5-content-ref-id"),t=this.selectedStep,n=this.getStepByRefId(i),s=e.getAttribute(m)==="true",r=this.slottedSteps.indexOf(n),a=n.firstElementChild,c=await Te(a);if(c&&c.focus(),t===n){this.scrollToContentItem(this.selectedStepIndex);return}(s||!s&&(r===0||r===this.steps.length-1))&&this.switchSelectionFromOldToNewStep(t,n,r,!1)}getContentHeight(){let e=0;return this.stepsDOM.forEach(i=>{e+=i.getBoundingClientRect().height}),e}getStepAriaLabelText(e,i){return u.i18nBundle.getText(Ie,i)}get stepsDOM(){return Array.from(this.shadowRoot.querySelectorAll(".ui5-wiz-content-item"))}get progressNavigatorListDOM(){return this.shadowRoot.querySelector(".ui5-wiz-nav-list")}get _stepsInHeader(){return this.getStepsInfo()}get _steps(){const e=this.getLastEnabledStepIndex(),i=this.getStepsInfo();return this.steps.map((t,n)=>(t.stretch=n===e,t.stepContentAriaLabel=`${this.navStepDefaultHeading} ${i[n].number} ${i[n].titleText}`,t))}get stepsCount(){return this.slottedSteps.length}get selectedStep(){return this.selectedStepsCount?this.selectedSteps[0]:null}get lastSelectedStep(){return this.selectedStepsCount?this.selectedSteps[this.selectedStepsCount-1]:null}get selectedSteps(){return this.slottedSteps.filter(e=>e.selected)}get enabledSteps(){return this.slottedSteps.filter(e=>!e.disabled)}get selectedStepsCount(){return this.selectedSteps.length}get slottedSteps(){return this.getSlottedNodes("steps")}get contentDOM(){return this.shadowRoot.querySelector(".ui5-wiz-content")}get stepsInHeaderDOM(){return Array.from(this.shadowRoot.querySelectorAll("[ui5-wizard-tab]"))}get enabledStepsInHeaderDOM(){return this.stepsInHeaderDOM.filter(e=>!e.disabled)}get navAriaRoleDescription(){return u.i18nBundle.getText(ee)}get navAriaLabelText(){return u.i18nBundle.getText(qe)}get navAriaDescribedbyText(){return u.i18nBundle.getText($e)}get listAriaLabelText(){return u.i18nBundle.getText(Ce)}get actionSheetStepsText(){return u.i18nBundle.getText(Ne)}get navStepDefaultHeading(){return u.i18nBundle.getText(De)}get optionalStepText(){return u.i18nBundle.getText(Ae)}get activeStepText(){return u.i18nBundle.getText(We)}get inactiveStepText(){return u.i18nBundle.getText(ke)}get ariaLabelText(){return u.i18nBundle.getText(ee)}get effectiveStepSwitchThreshold(){return _e(this.stepSwitchThreshold,U.MIN,U.MAX)}getStepsInfo(){const e=this.getLastEnabledStepIndex(),i=this.stepsCount,t=this.getSelectedStepIndex();let n=this.steps.length+10,s;return this._adjustHeaderOverflow(),this.steps.map((r,a)=>{const c=a+1,k=a===i-1&&!r.branching,D=r.subtitleText?this.optionalStepText:"",A=r.disabled?this.inactiveStepText:this.activeStepText,E=(r.titleText?`${c} ${r.titleText} ${A} ${D}`:`${this.navStepDefaultHeading} ${c} ${A} ${D}`).trim(),f=a>t;return s={ariaSetsize:i,ariaPosinset:c,ariaLabel:this.getStepAriaLabelText(r,E)},{icon:r.icon,titleText:r.titleText,subtitleText:r.subtitleText,number:c,selected:r.selected,disabled:r.disabled,hideSeparator:k,activeSeparator:a<e&&!r.disabled,branchingSeparator:r.branching,pos:c,accInfo:s,refStepId:r._id,styles:{zIndex:f?--n:1}}})}getSelectedStepIndex(){return this.selectedStep?this.slottedSteps.indexOf(this.selectedStep):0}getLastEnabledStepIndex(){let e=0;return this.slottedSteps.forEach((i,t)=>{i.disabled||(e=t)}),e}getStepByRefId(e){return this.slottedSteps.find(i=>i._id===e)}getStepWrapperByRefId(e){return this.shadowRoot.querySelector(`[data-ui5-content-item-ref-id=${e}]`)}getStepWrapperByIdx(e){return this.getStepWrapperByRefId(this.steps[e]._id)}scrollToSelectedStep(){this.selectionRequestedByScroll||this.scrollToContentItem(this.selectedStepIndex),this.selectionRequestedByScroll=!1}scrollToContentItem(e){this.contentDOM.scrollTop=this.getClosestScrollPosByStepIndex(e)}getClosestScrollPosByStepIndex(e){if(e===0)return 0;for(let i=e-1;i>=0;i--)if(this.stepScrollOffsets[i]>0)return this.stepScrollOffsets[i];return 0}getClosestStepIndexByScrollPos(e){for(let i=0;i<=this.stepScrollOffsets.length-1;i++){const t=this.stepScrollOffsets[i],n=this.getStepWrapperByIdx(i),s=n.offsetTop+n.offsetHeight*this.effectiveStepSwitchThreshold;if(t>0&&e<t)return e>s?i+1:i}return this.selectedStepIndex}switchSelectionFromOldToNewStep(e,i,t,n){e&&i&&(i.disabled||(e.selected=!1,i.selected=!0),this.fireDecoratorEvent("step-change",{step:i,previousStep:e,withScroll:n}),this.selectedStepIndex=t)}sortAscending(e,i){return e<i?-1:e>i?1:0}};y([d()],g.prototype,"contentLayout",void 0);y([d({type:Number})],g.prototype,"width",void 0);y([d({type:Number})],g.prototype,"stepSwitchThreshold",void 0);y([d({type:Number})],g.prototype,"contentHeight",void 0);y([d({type:Array})],g.prototype,"_groupedTabs",void 0);y([d()],g.prototype,"_breakpoint",void 0);y([ge({default:!0,type:HTMLElement,individualSlots:!0,invalidateOnChildChange:!0})],g.prototype,"steps",void 0);y([ve("@ui5/webcomponents-fiori")],g,"i18nBundle",void 0);g=u=y([Y({tag:"ui5-wizard",languageAware:!0,fastNavigation:!0,renderer:de,styles:[Ge,Ze,Se()],template:Ue,dependencies:[Ve,je,xe,ce]}),Z("step-change",{detail:{step:{type:HTMLElement},previousStep:{type:HTMLElement},withScroll:{type:Boolean}},bubbles:!0})],g);g.define();const z=pe("ui5-wizard",["contentLayout"],[],[],["step-change"]);z.displayName="Wizard";try{z.displayName="Wizard",z.__docgenInfo={description:`The \`Wizard\` helps users to complete a complex task by dividing it into sections and guiding them through it.
It has two main areas - a navigation area at the top showing the step sequence and a content area below it.

### Structure
#### Navigation area
The top most area of the \`Wizard\` is occupied by the navigation area.
It shows the sequence of steps, where the recommended number of steps is between 3 and 8 steps.

-  Steps can have different visual representations - numbers or icons.
-  Steps might have labels for better readability - titleText and subTitleText.
-  Steps are defined by using the \`WizardStep\` as slotted element within the \`Wizard\`.

**Note:** If no selected step is defined, the first step will be auto selected.

**Note:** If multiple selected steps are defined, the last step will be selected.

### Keyboard Handling
The user can navigate using the following keyboard shortcuts:

#### Wizard Progress Navigation

	- [Left] or [Down] - Focus moves backward to the WizardProgressNavAnchors.
	- [Up] or [Right] - Focus moves forward to the WizardProgressNavAnchor.
	- [Space] / [Enter] or [Return] - Selects an active step
	- [Home] or [PAGE UP] - Focus goes to the first step
	- [End] or [PAGE DOWN] - Focus goes to the last step

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`

#### Content
The content occupies the main part of the page. It can hold any type of HTML elements.
It's defined by using the \`WizardStep\` as slotted element within the \`Wizard\`.

### Scrolling
The component handles user scrolling by selecting the closest step, based on the current scroll position
and scrolls to particular place, when the user clicks on the step within the navigation area.

**Important:** In order the component's scrolling behaviour to work, it has to be limited from the outside parent element in terms of height.
The component or its parent has to be given percentage or absolute height. Otherwise, the component will be scrolled out with the entire page.

**For example:**

\`\`\`html
<ui5-dialog style="height: 80%">
	<Wizard></Wizard>
</ui5-dialog>
\`\`\`

#### Moving to next step
The \`WizardStep\` provides the necessary API and it's up to the user of the component to use it to move to the next step.
You have to set its \`selected\` property (and remove the \`disabled\` one if set) to \`true\`.
The \`Wizard\` will automatically scroll to the content of the newly selected step.

The Fiori 3 guidelines recommends having a "nextStep" button in the content area.
You can place a button, or any other type of element to trigger step change, inside the \`WizardStep\`,
and show/hide it when certain fields are filled or user defined criteria is met.

### Usage
#### When to use:
When the user has to accomplish a long or unfamiliar task.

#### When not to use:
When the task has less than 3 steps.

### Responsive Behavior
On small widths the step's titleText, subtitleText and separators in the navigation area shrink and from particular point the steps are grouped together and overlap.
Tapping on them will show a popover to select the step to navigate to. On mobile device, the grouped steps are presented within a dialog.

 (includes <ui5-wizard-step/>)

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Wizard",props:{children:{defaultValue:null,description:"Defines the steps.\n\n**Note:** Use the available `WizardStep` component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onStepChange:{defaultValue:null,description:`Fired when the step is changed by user interaction - either with scrolling,
or by clicking on the steps within the component header.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onStepChange",required:!1,type:{name:"(event: Ui5CustomEvent<WizardDomRef, WizardStepChangeEventDetail>) => void"}},contentLayout:{defaultValue:{value:'"MultipleSteps"'},description:"Defines how the content of the `Wizard` would be visualized.\n\n**Note:** Available since [v1.14.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.14.0) of **@ui5/webcomponents-fiori**.",name:"contentLayout",required:!1,type:{name:"enum",value:[{value:'"MultipleSteps"'},{value:'"SingleStep"'},{value:'"MultipleSteps"'},{value:'"SingleStep"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{z.displayName="Wizard",z.__docgenInfo={description:`The \`Wizard\` helps users to complete a complex task by dividing it into sections and guiding them through it.
It has two main areas - a navigation area at the top showing the step sequence and a content area below it.

### Structure
#### Navigation area
The top most area of the \`Wizard\` is occupied by the navigation area.
It shows the sequence of steps, where the recommended number of steps is between 3 and 8 steps.

-  Steps can have different visual representations - numbers or icons.
-  Steps might have labels for better readability - titleText and subTitleText.
-  Steps are defined by using the \`WizardStep\` as slotted element within the \`Wizard\`.

**Note:** If no selected step is defined, the first step will be auto selected.

**Note:** If multiple selected steps are defined, the last step will be selected.

### Keyboard Handling
The user can navigate using the following keyboard shortcuts:

#### Wizard Progress Navigation

	- [Left] or [Down] - Focus moves backward to the WizardProgressNavAnchors.
	- [Up] or [Right] - Focus moves forward to the WizardProgressNavAnchor.
	- [Space] / [Enter] or [Return] - Selects an active step
	- [Home] or [PAGE UP] - Focus goes to the first step
	- [End] or [PAGE DOWN] - Focus goes to the last step

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`

#### Content
The content occupies the main part of the page. It can hold any type of HTML elements.
It's defined by using the \`WizardStep\` as slotted element within the \`Wizard\`.

### Scrolling
The component handles user scrolling by selecting the closest step, based on the current scroll position
and scrolls to particular place, when the user clicks on the step within the navigation area.

**Important:** In order the component's scrolling behaviour to work, it has to be limited from the outside parent element in terms of height.
The component or its parent has to be given percentage or absolute height. Otherwise, the component will be scrolled out with the entire page.

**For example:**

\`\`\`html
<ui5-dialog style="height: 80%">
	<Wizard></Wizard>
</ui5-dialog>
\`\`\`

#### Moving to next step
The \`WizardStep\` provides the necessary API and it's up to the user of the component to use it to move to the next step.
You have to set its \`selected\` property (and remove the \`disabled\` one if set) to \`true\`.
The \`Wizard\` will automatically scroll to the content of the newly selected step.

The Fiori 3 guidelines recommends having a "nextStep" button in the content area.
You can place a button, or any other type of element to trigger step change, inside the \`WizardStep\`,
and show/hide it when certain fields are filled or user defined criteria is met.

### Usage
#### When to use:
When the user has to accomplish a long or unfamiliar task.

#### When not to use:
When the task has less than 3 steps.

### Responsive Behavior
On small widths the step's titleText, subtitleText and separators in the navigation area shrink and from particular point the steps are grouped together and overlap.
Tapping on them will show a popover to select the step to navigate to. On mobile device, the grouped steps are presented within a dialog.

 (includes <ui5-wizard-step/>)

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Wizard",props:{children:{defaultValue:null,description:"Defines the steps.\n\n**Note:** Use the available `WizardStep` component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onStepChange:{defaultValue:null,description:`Fired when the step is changed by user interaction - either with scrolling,
or by clicking on the steps within the component header.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onStepChange",required:!1,type:{name:"(event: Ui5CustomEvent<WizardDomRef, WizardStepChangeEventDetail>) => void"}},contentLayout:{defaultValue:{value:'"MultipleSteps"'},description:"Defines how the content of the `Wizard` would be visualized.\n\n**Note:** Available since [v1.14.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.14.0) of **@ui5/webcomponents-fiori**.",name:"contentLayout",required:!1,type:{name:"enum",value:[{value:'"MultipleSteps"'},{value:'"SingleStep"'},{value:'"MultipleSteps"'},{value:'"SingleStep"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const _=pe("ui5-wizard-step",["icon","subtitleText","titleText"],["branching","disabled","selected"],[],[]);_.displayName="WizardStep";try{_.displayName="WizardStep",_.__docgenInfo={description:"A component that represents a logical step as part of the `Wizard`.\nIt is meant to aggregate arbitrary HTML elements that form the content of a single step.\n\n### Structure\n\n- Each wizard step has arbitrary content.\n- Each wizard step might have texts - defined by the `titleText` and `subtitleText` properties.\n- Each wizard step might have an icon - defined by the `icon` property.\n- Each wizard step might display a number in place of the `icon`, when it's missing.\n\n### Usage\nThe `WizardStep` component should be used only as slot of the `Wizard` component\nand should not be used standalone.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"WizardStep",props:{children:{defaultValue:null,description:"Defines the step content.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},branching:{defaultValue:{value:"false"},description:"When `branching` is enabled a dashed line would be displayed after the step,\nmeant to indicate that the next step is not yet known and depends on user choice in the current step.\n\n**Note:** It is recommended to use `branching` on the last known step\nand later add new steps when it becomes clear how the wizard flow should continue.",name:"branching",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Defines if the step is `disabled`. When disabled the step is displayed,\nbut the user can't select the step by clicking or navigate to it with scrolling.\n\n**Note:** Step can't be `selected` and `disabled` at the same time.\nIn this case the `selected` property would take precedence.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"undefined"},description:`Defines the \`icon\` of the step.

**Note:** The icon is displayed in the \`Wizard\` navigation header.

The SAP-icons font provides numerous options.
See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"Defines the step's `selected` state - the step that is currently active.\n\n**Note:** Step can't be `selected` and `disabled` at the same time.\nIn this case the `selected` property would take precedence.",name:"selected",required:!1,type:{name:"boolean"}},subtitleText:{defaultValue:{value:"undefined"},description:"Defines the `subtitleText` of the step.\n\n**Note:** the text is displayed in the `Wizard` navigation header.",name:"subtitleText",required:!1,type:{name:"string"}},titleText:{defaultValue:{value:"undefined"},description:"Defines the `titleText` of the step.\n\n**Note:** The text is displayed in the `Wizard` navigation header.",name:"titleText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{_.displayName="WizardStep",_.__docgenInfo={description:"A component that represents a logical step as part of the `Wizard`.\nIt is meant to aggregate arbitrary HTML elements that form the content of a single step.\n\n### Structure\n\n- Each wizard step has arbitrary content.\n- Each wizard step might have texts - defined by the `titleText` and `subtitleText` properties.\n- Each wizard step might have an icon - defined by the `icon` property.\n- Each wizard step might display a number in place of the `icon`, when it's missing.\n\n### Usage\nThe `WizardStep` component should be used only as slot of the `Wizard` component\nand should not be used standalone.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"WizardStep",props:{children:{defaultValue:null,description:"Defines the step content.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},branching:{defaultValue:{value:"false"},description:"When `branching` is enabled a dashed line would be displayed after the step,\nmeant to indicate that the next step is not yet known and depends on user choice in the current step.\n\n**Note:** It is recommended to use `branching` on the last known step\nand later add new steps when it becomes clear how the wizard flow should continue.",name:"branching",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Defines if the step is `disabled`. When disabled the step is displayed,\nbut the user can't select the step by clicking or navigate to it with scrolling.\n\n**Note:** Step can't be `selected` and `disabled` at the same time.\nIn this case the `selected` property would take precedence.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"undefined"},description:`Defines the \`icon\` of the step.

**Note:** The icon is displayed in the \`Wizard\` navigation header.

The SAP-icons font provides numerous options.
See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"Defines the step's `selected` state - the step that is currently active.\n\n**Note:** Step can't be `selected` and `disabled` at the same time.\nIn this case the `selected` property would take precedence.",name:"selected",required:!1,type:{name:"boolean"}},subtitleText:{defaultValue:{value:"undefined"},description:"Defines the `subtitleText` of the step.\n\n**Note:** the text is displayed in the `Wizard` navigation header.",name:"subtitleText",required:!1,type:{name:"string"}},titleText:{defaultValue:{value:"undefined"},description:"Defines the `titleText` of the step.\n\n**Note:** The text is displayed in the `Wizard` navigation header.",name:"titleText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const Ke="hint",Je="M207 80q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm-15 369h33V225h-32v-34h95v258h32v31H192v-31z",Qe=!0,et="SAP-icons-v4",tt="@ui5/webcomponents-icons";$(Ke,{pathData:Je,ltr:Qe,collection:et,packageName:tt});const it="hint",nt="M256 0q53 0 100 20t81.5 54.5T492 156t20 100-20 100-54.5 81.5T356 492t-100 20-100-20-81.5-54.5T20 356 0 256t20-100 54.5-81.5T156 20 256 0zm0 461q43 0 80.5-16t65-44 43.5-65 16-80-16-80.5-43.5-65-65-43.5T256 51t-80 16-65 43.5-44 65T51 256t16 80 44 65 65 44 80 16zm0-333q13 0 22.5 9.5T288 160t-9.5 22.5T256 192t-22.5-9.5T224 160t9.5-22.5T256 128zm0 115q11 0 18 7.5t7 18.5v102q0 11-7 18.5t-18 7.5-18.5-7.5T230 371V269q0-11 7.5-18.5T256 243z",st=!0,ot="SAP-icons-v5",at="@ui5/webcomponents-icons";$(it,{pathData:nt,ltr:st,collection:ot,packageName:at});const rt="hint",lt="lead",dt="M0 256q0-53 20-99.5T75 75t81.5-55T256 0t100 20 81.5 55 54.5 81.5 20 99.5-20 100-54.5 81.5T356 492t-100 20-99.5-20T75 437.5 20 356 0 256zm32 0q0 46 17.5 87t48 71.5 71.5 48 87 17.5q47 0 87.5-17.5t71-48 48-71.5 17.5-87q0-47-17.5-87.5t-48-71-71-48T256 32q-46 0-87 17.5t-71.5 48-48 71T32 256zm138 61l41-5q3 14 12 25t19 15v-73q-32-11-51.5-32.5T171 202q0-12 5-25t14.5-24 22.5-18.5 29-8.5v-21h25v21q58 4 70 62l-36 6q-2-12-11-20t-23-9v76q42 9 59 31t17 46q0 28-20.5 50.5T267 393v33h-25v-32q-26-1-47-20t-25-57zm72-89v-64q-11 4-18 13t-7 19q0 20 25 32zm25 128q14-4 23.5-14.5T300 319q0-25-33-35v72z",pt=!0,ct="SAP-icons-v4",ut="@ui5/webcomponents-icons";$(lt,{pathData:dt,ltr:pt,collection:ct,packageName:ut});const ht="lead",mt="M256 0q53 0 100 20t81.5 54.5T492 156t20 100-20 100-54.5 81.5T356 492t-100 20-100-20-81.5-54.5T20 356 0 256t20-100 54.5-81.5T156 20 256 0zm0 461q43 0 80.5-16t65-44 43.5-65 16-80-16-80.5-43.5-65-65-43.5T256 51t-80 16-65 43.5-44 65T51 256t16 80 44 65 65 44 80 16zm-13-256q-5 0-9 4t-4 9 4 8.5 9 3.5h26q26 0 45 19t19 45q0 23-15 40.5T282 357v34q0 11-7.5 18.5T256 417t-18.5-7.5T230 391v-33h-25q-11 0-18.5-7t-7.5-18 7.5-18.5T205 307h64q5 0 9-4t4-9-4-8.5-9-3.5h-26q-26 0-45-19t-19-45q0-23 15-40.5t36-22.5v-33q0-11 7.5-18.5T256 96t18.5 7.5T282 122v32h25q11 0 18.5 7t7.5 18-7.5 18.5T307 205h-64z",bt=!0,ft="SAP-icons-v5",gt="@ui5/webcomponents-icons";$(ht,{pathData:mt,ltr:bt,collection:ft,packageName:gt});const vt="lead",St="product",wt="M474.5 110v290l-218 110-218-110V110l109-55 219 109v109l-37 18V186l-182-90-73 35v248l182 90 182-90V131l-182-90-28 14-41-21 69-34zm-363 200l108 54v45l-108-53v-46z",yt=!1,_t="SAP-icons-v4",zt="@ui5/webcomponents-icons";$(St,{pathData:wt,ltr:yt,collection:_t,packageName:zt});const Tt="product",xt="M257 512q-7 0-13-3L45 394q-13-8-13-23V160q0-14 11-22l102-69q8-5 15-5 8 0 13 4l167 104q12 6 12 22v101q0 11-7.5 18t-18.5 7-18-7.5-7-18.5v-86l-140-88-78 53v184l174 100 172-100V156L243 48q-13-8-13-22 0-11 7.5-18.5T256 0q7 0 13 3l198 116q13 8 13 22v230q0 15-13 23L270 509q-6 3-13 3zm-37-147q-6 0-12-3l-67-39q-13-8-13-22 0-11 7.5-18.5T154 275q6 0 12 3l67 39q13 8 13 22 0 11-7.5 18.5T220 365z",It=!1,qt="SAP-icons-v5",$t="@ui5/webcomponents-icons";$(Tt,{pathData:xt,ltr:It,collection:qt,packageName:$t});const Ct="product",Nt={title:"Layouts & Floorplans / Wizard",component:z,argTypes:{children:{control:{disable:!0}}},args:{style:{height:"400px"}},tags:["package:@ui5/webcomponents-fiori"]},N={render(l){const[e,i]=O.useState("1"),[t,n]=O.useState({2:!0,3:!0,4:!0}),[s,r]=O.useState({step3Btn:!0,finalizeBtn:!0}),a=()=>{n(f=>{const{"2":x,...C}=f;return C}),i("2")},c=()=>{n(f=>{const{"3":x,...C}=f;return C}),i("3")},k=f=>{f.target.checked&&r(x=>{const{step3Btn:C,...R}=x;return R})},D=()=>{alert("Wizard is now completed!")},A=f=>{f.target.value&&r(x=>{const{finalizeBtn:C,...R}=x;return R})},E=f=>{i(f.detail.step.dataset.step),l.onStepChange(f)};return p.jsxs(z,{...l,onStepChange:E,children:[p.jsxs(_,{icon:Ct,titleText:"Product Type",selected:e==="1","data-step":"1",children:[p.jsx(H,{children:"1. Product Type"}),p.jsx(ue,{design:he.Information,children:"The Wizard control is supposed to break down large tasks, into smaller steps, easier for the user to work with."}),p.jsx(M,{wrappingType:P.None,children:"Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor et, varius quam. Aliquam erat volutpat"}),p.jsx(L,{design:B.Emphasized,onClick:a,children:"Step 2"})]}),p.jsxs(_,{icon:rt,titleText:"Product Information",disabled:t[2],selected:e==="2","data-step":"2",children:[p.jsx(H,{children:"2. Product Information"}),p.jsx(M,{wrappingType:P.None,children:"Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien"}),p.jsx(be,{onChange:k,text:"Step Completed"}),p.jsx("br",{}),!s.step3Btn&&p.jsx(L,{design:B.Emphasized,onClick:c,children:"Step 3"})]}),p.jsxs(_,{icon:vt,titleText:"Pricing",disabled:t[3],selected:e==="3","data-step":"3",children:[p.jsx(H,{children:"3. Pricing"}),p.jsx(M,{wrappingType:P.None,children:"Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien"}),p.jsx(fe,{placeholder:"Item Price",onInput:A}),p.jsx("br",{}),!s.finalizeBtn&&p.jsx(L,{design:B.Emphasized,onClick:D,children:"Finalize"})]})]})}};var ae,re,le;N.parameters={...N.parameters,docs:{...(ae=N.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
          <br />
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
          <br />
          {!hidden['finalizeBtn'] && <Button design={ButtonDesign.Emphasized} onClick={finalizeWizard}>
              Finalize
            </Button>}
        </WizardStep>
      </Wizard>;
  }
}`,...(le=(re=N.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};const Dt=["Default"],li=Object.freeze(Object.defineProperty({__proto__:null,Default:N,__namedExportsOrder:Dt,default:Nt},Symbol.toStringTag,{value:"Module"}));export{li as C,N as D,_ as W};
