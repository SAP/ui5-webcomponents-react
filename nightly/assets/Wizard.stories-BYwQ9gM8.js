import{j as p}from"./jsx-runtime-CLpGMVip.js";import{a as Y,B as R}from"./Button-Df0TC0Md.js";import{M as ae,a as oe}from"./index-CY-aFc8B.js";import{W as k}from"./WrappingType-CW8URInd.js";import{p as l,q as U,U as G,o as T,j as d,r as x,d as Z,t as ne,x as K,F as re,w as se}from"./withWebComponent-DbOtF11K.js";import{I as le,r as I}from"./Icon-DiKvMA1d.js";import{r as P}from"./index-CjmQ2z5u.js";import{B}from"./index-CkQLB81g.js";import{C as de}from"./index-CSwJlPeW.js";import{I as pe}from"./index-BYOUMPoh.js";import{L as O}from"./index-DnJL0qev.js";import{T as L}from"./index-ClfRmt76.js";import{s as ce}from"./slot-Df15G--e.js";import{e as $}from"./event-strict-C2lE4gn2.js";import{i as ue}from"./i18n-BLQCbquq.js";import{g as he}from"./getEffectiveScrollbarStyle-DY0HYxPj.js";import{I as me,N as fe}from"./ItemNavigation-oZzng-oK.js";import{d as be}from"./PopupsCommon.css-IJUzQyRd.js";import{R as M}from"./ResizeHandler-y4ADtKuu.js";import{d as ge}from"./debounce-jW346lN3.js";import{g as ve}from"./FocusableElements-DKyPTCYZ.js";import{b5 as Se,b6 as J,b7 as we,b8 as ye,b9 as ze,ba as _e,bb as Te,bc as xe,bd as Ie,be as qe}from"./i18n-defaults-BeKUSBuv.js";import{p as Ce,o as Ne,n as Ae}from"./Keys-DundVx7l.js";import{d as X}from"./parameters-bundle.css-lWn4zk3B.js";import{R as De}from"./ResponsivePopover-DhwVJmwv.js";var z=function(s,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(n=(r<3?o(n):r>3?o(e,t,n):o(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n};let v=class extends G{constructor(){super(...arguments),this.disabled=!1,this.selected=!1,this.branching=!1}};z([l()],v.prototype,"titleText",void 0);z([l()],v.prototype,"subtitleText",void 0);z([l()],v.prototype,"icon",void 0);z([l({type:Boolean})],v.prototype,"disabled",void 0);z([l({type:Boolean})],v.prototype,"selected",void 0);z([l({type:Boolean})],v.prototype,"branching",void 0);v=z([U("ui5-wizard-step")],v);v.define();function We(){return T("div",{class:"ui5-wiz-step-root",role:"listitem",tabIndex:this.effectiveTabIndex,"aria-current":this.accInfo.ariaCurrent,"aria-setsize":this.accInfo.ariaSetsize,"aria-posinset":this.accInfo.ariaPosinset,"aria-label":this.accInfo.ariaLabel,onClick:this._onclick,onKeyUp:this._onkeyup,onFocusIn:this._onfocusin,children:[T("div",{class:"ui5-wiz-step-main",children:[d("div",{class:"ui5-wiz-step-icon-circle",children:this.icon?d(le,{class:"ui5-wiz-step-icon",mode:"Decorative",name:this.icon}):d("span",{class:"ui5-wiz-step-number",children:this.number})}),this.hasTexts&&T("div",{class:"ui5-wiz-step-texts",children:[d("div",{class:"ui5-wiz-step-title-text",children:this.titleText}),this.subtitleText&&d("div",{class:"ui5-wiz-step-subtitle-text",children:this.subtitleText})]})]}),!this.hideSeparator&&d("div",{class:"ui5-wiz-step-hr"})]})}x("@ui5/webcomponents-theming","sap_horizon",async()=>Z);x("@ui5/webcomponents-fiori","sap_horizon",async()=>X);const Ee=`:host(:not([hidden])){min-width:1px}:host([selected]:not([disabled])) .ui5-wiz-step-icon-circle{background:var(--_ui5-v2-6-2_wiz_tab_selected_bg)}:host([selected]:not([disabled])) .ui5-wiz-step-title-text{color:var(--sapContent_Selected_ForegroundColor)}:host([selected]:not([disabled])) .ui5-wiz-step-icon-circle:after{content:"";position:absolute;border-bottom:.25rem solid var(--_ui5-v2-6-2_wiz_tab_selection_line);border-top-left-radius:.1875rem;border-top-right-radius:.1875rem;left:0;right:0;bottom:-1rem}:host([selected]:not([disabled])) .ui5-wiz-step-icon{color:var(--sapContent_ContrastIconColor)}:host([selected]:not([disabled])) .ui5-wiz-step-number{color:var(--sapContent_ContrastTextColor)}:host([disabled]) .ui5-wiz-step-icon-circle{border-color:var(--sapList_BorderColor);background:var(--sapObjectHeader_Background)}:host([disabled]) .ui5-wiz-step-title-text{color:var(--sapContent_LabelColor)}:host([disabled]) .ui5-wiz-step-icon{color:var(--sapContent_LabelColor)}:host([disabled]) .ui5-wiz-step-number{color:var(--sapContent_LabelColor)}.ui5-wiz-step-root{display:flex;align-items:center;flex-direction:row;font-size:var(--sapFontSize);font-family:var(--sapFontFamily);outline:none}.ui5-wiz-step-main{max-width:100%;text-align:center;white-space:nowrap}:host(:not([disabled])) .ui5-wiz-step-main{cursor:pointer}.ui5-wiz-step-root:focus .ui5-wiz-step-main{outline:var(--_ui5-v2-6-2_wiz_tab_focus_outline);outline-offset:1px;border-radius:var(--_ui5-v2-6-2_wiz_tab_focus_border_radius)}.ui5-wiz-step-icon-circle{display:inline-flex;box-sizing:border-box;vertical-align:middle;justify-content:center;align-items:center;text-align:center;width:2rem;height:2rem;margin:0 .1875rem;line-height:1.875rem;border-radius:50%;background:var(--sapObjectHeader_Background);border:var(--_ui5-v2-6-2_wiz_tab_border);position:relative}.ui5-wiz-step-icon{width:1rem;height:1rem;color:var(--_ui5-v2-6-2_wiz_tab_icon_color);pointer-events:none}.ui5-wiz-step-number{color:var(--_ui5-v2-6-2_wiz_tab_icon_color)}.ui5-wiz-step-texts{display:inline-block;max-width:calc(100% - 3rem);vertical-align:middle;text-align:left;padding:0 .5rem 0 .1875rem;max-height:3rem;overflow:hidden;background:var(--sapObjectHeader_Background)}.ui5-wiz-step-title-text,.ui5-wiz-step-subtitle-text{color:var(--_ui5-v2-6-2_wiz_tab_title_color);white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.ui5-wiz-step-title-text{font-family:var(--_ui5-v2-6-2_wiz_tab_title_font_family);white-space:normal;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}:host([subtitle-text]:not([subtitle-text=""])) .ui5-wiz-step-title-text{-webkit-line-clamp:1}:host([data-ui5-wizard-expanded-tab-prev="true"]) .ui5-wiz-step-title-text,:host([data-ui5-wizard-expanded-tab-prev="true"]) .ui5-wiz-step-subtitle-text,:host([data-ui5-wizard-expanded-tab="false"]) .ui5-wiz-step-texts,:host([data-ui5-wizard-expanded-tab="false"]) .ui5-wiz-step-title-text,:host([data-ui5-wizard-expanded-tab="false"]) .ui5-wiz-step-subtitle-text{display:none}.ui5-wiz-step-subtitle-text{margin-top:.125rem;font-family:var(--sapFontFamily);color:var(--sapContent_LabelColor);font-size:var(--sapFontSmallSize)}.ui5-wiz-step-hr{display:inline-block;border-bottom-color:var(--sapList_BorderColor);border-bottom-width:1px;border-bottom-style:solid;height:1px;flex-grow:1;margin-right:.25rem}:host([active-separator]) .ui5-wiz-step-hr{border-bottom-color:var(--_ui5-v2-6-2_wiz_tab_active_separator_color)}:host([branching-separator]) .ui5-wiz-step-hr{border-bottom-style:dashed}:host([data-ui5-wizard-expanded-tab="false"]) .ui5-wiz-step-root{display:inline;position:absolute;top:0}:host([data-ui5-wizard-after-current-tab="true"]) .ui5-wiz-step-root{right:0}:host([data-ui5-wizard-expanded-tab="false"]) .ui5-wiz-step-hr{display:none}
`;var b=function(s,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(n=(r<3?o(n):r>3?o(e,t,n):o(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n};let c=class extends G{constructor(){super(...arguments),this.disabled=!1,this.selected=!1,this.hideSeparator=!1,this.activeSeparator=!1,this.branchingSeparator=!1}_onclick(){this.disabled||this.fireDecoratorEvent("selection-change-requested")}_onkeyup(e){this.disabled||(Ce(e)||Ne(e))&&!Ae(e)&&(e.preventDefault(),this.fireDecoratorEvent("selection-change-requested"))}get effectiveTabIndex(){if(!this.disabled)return this.selected||this.forcedTabIndex==="0"?0:-1}_onfocusin(){this.fireDecoratorEvent("focused")}get hasTexts(){return this.titleText||this.subtitleText}get accInfo(){return{ariaSetsize:this._wizardTabAccInfo&&this._wizardTabAccInfo.ariaSetsize,ariaPosinset:this._wizardTabAccInfo&&this._wizardTabAccInfo.ariaPosinset,ariaLabel:this._wizardTabAccInfo&&this._wizardTabAccInfo.ariaLabel,ariaCurrent:this.selected?"true":void 0}}};b([l()],c.prototype,"icon",void 0);b([l()],c.prototype,"titleText",void 0);b([l()],c.prototype,"subtitleText",void 0);b([l()],c.prototype,"number",void 0);b([l({type:Boolean})],c.prototype,"disabled",void 0);b([l({type:Boolean})],c.prototype,"selected",void 0);b([l({type:Boolean})],c.prototype,"hideSeparator",void 0);b([l({type:Boolean})],c.prototype,"activeSeparator",void 0);b([l({type:Boolean})],c.prototype,"branchingSeparator",void 0);b([l()],c.prototype,"forcedTabIndex",void 0);b([l({type:Object})],c.prototype,"_wizardTabAccInfo",void 0);c=b([U({tag:"ui5-wizard-tab",renderer:ne,styles:Ee,template:We}),$("focused",{bubbles:!0}),$("selection-change-requested",{bubbles:!0})],c);c.define();const Re=c;function ke(){return T(De,{horizontalAlign:"Center",placement:"Bottom","aria-label":this.actionSheetStepsText,class:{"ui5-wizard-responsive-popover":!0,"ui5-wizard-popover":!K(),"ui5-wizard-dialog":K()},contentOnlyOnDesktop:!0,preventFocusRestore:!0,_hideHeader:!0,children:[d("ul",{class:"ui5-wizard-responsive-popover-list",children:this._groupedTabs.map(s=>d("li",{children:d(Y,{icon:s.icon,disabled:s.disabled,design:"Transparent","data-ui5-header-tab-ref-id":s.accInfo.ariaPosinset,onClick:this._onOverflowStepButtonClick,children:s.titleText})}))}),d("div",{slot:"footer",class:"ui5-responsive-popover-footer",children:d(Y,{design:"Transparent",onClick:this._closeRespPopover,children:"Cancel"})})]})}function Pe(){return T(re,{children:[T("div",{class:"ui5-wiz-root","aria-label":this.ariaLabelText,role:"region",children:[d("nav",{class:"ui5-wiz-nav",part:"navigator","aria-label":this.navAriaLabelText,tabIndex:-1,children:d("div",{class:"ui5-wiz-nav-list",role:"list","aria-label":this.listAriaLabelText,"aria-describedby":"wiz-nav-descr","aria-controls":`${this._id}-wiz-content`,children:this._stepsInHeader.map(s=>d(Re,{titleText:s.titleText,subtitleText:s.subtitleText,icon:s.icon,number:String(s.number),disabled:s.disabled,selected:s.selected,hideSeparator:s.hideSeparator,activeSeparator:s.activeSeparator,branchingSeparator:s.branchingSeparator,_wizardTabAccInfo:s.accInfo,"data-ui5-content-ref-id":s.refStepId,"data-ui5-index":s.pos,onSelectionChangeRequested:this.onSelectionChangeRequested,onFocused:this.onStepInHeaderFocused,onClick:this._onGroupedTabClick,style:s.styles}))})}),d("span",{id:"wiz-nav-descr",class:"ui5-hidden-text","aria-hidden":"true",children:this.navAriaDescribedbyText}),d("div",{id:`${this._id}-wiz-content`,class:"ui5-wiz-content",onScroll:this.onScroll,children:this._steps.map(s=>d("div",{class:{"ui5-wiz-content-item":!0,"ui5-wiz-content-item-stretch":s.stretch,"ui5-wiz-content-item-selected":s.selected},hidden:s.disabled,part:"step-content","aria-label":s.stepContentAriaLabel,role:"region","data-ui5-content-item-ref-id":s._id,children:d("div",{class:"ui5-wiz-content-item-wrapper",children:d("slot",{name:s._individualSlot})})}))})]}),ke.call(this)]})}x("@ui5/webcomponents-theming","sap_horizon",async()=>Z);x("@ui5/webcomponents-fiori","sap_horizon",async()=>X);const Be=`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:block;height:100%;width:100%;overflow:auto}:host([_breakpoint="S"])::part(navigator),:host([_breakpoint="S"])::part(step-content){padding-left:1rem;padding-right:1rem}:host([_breakpoint="M"])::part(navigator),:host([_breakpoint="M"])::part(step-content){padding-left:2rem;padding-right:2rem}:host([_breakpoint="L"])::part(navigator),:host([_breakpoint="L"])::part(step-content){padding-left:2rem;padding-right:2rem}:host([_breakpoint="XL"])::part(navigator),:host([_breakpoint="XL"])::part(step-content){padding-left:3rem;padding-right:3rem}.ui5-wiz-root{height:100%;width:100%;position:relative}.ui5-wiz-content{position:relative;overflow:auto;height:calc(100% - 4rem);box-sizing:border-box;background:var(--sapBackgroundColor)}.ui5-wiz-content-item{display:block;box-sizing:border-box;padding-top:1rem;padding-bottom:1rem}:host([content-layout="SingleStep"]) .ui5-wiz-content-item:not(.ui5-wiz-content-item-selected){display:none}.ui5-wiz-content-item-wrapper{display:block;padding:var(--_ui5-v2-6-2_wiz_content_item_wrapper_padding);background-color:var(--_ui5-v2-6-2_wiz_content_item_wrapper_bg);border-radius:var(--sapElement_BorderCornerRadius)}.ui5-wiz-content-item[hidden]{display:none}.ui5-wiz-content-item.ui5-wiz-content-item-stretch{min-height:100%}[ui5-wizard-tab][data-ui5-wizard-expanded-tab=true]+[ui5-wizard-tab][data-ui5-wizard-expanded-tab=false]{width:2rem;padding-left:.5rem}[ui5-wizard-tab][data-ui5-wizard-expanded-tab=false]{width:.25rem;padding:0}.ui5-wiz-nav-list{display:table;table-layout:fixed;position:relative;list-style:none;margin:0;box-sizing:border-box;width:100%;height:2rem;padding:0}[ui5-wizard-tab]{display:table-cell;position:relative}.ui5-wiz-nav{box-sizing:border-box;height:4rem;padding-top:1rem;padding-bottom:1rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:var(--sapObjectHeader_Background);font-size:.875rem;box-shadow:var(--sapContent_HeaderShadow);outline:none;display:flex;align-items:center}[ui5-wizard-tab][data-ui5-wizard-expanded-tab=false]+[ui5-wizard-tab][data-ui5-wizard-expanded-tab=false]{width:.25rem}[ui5-wizard-tab][data-ui5-wizard-expanded-tab-prev=true],[ui5-wizard-tab][data-ui5-wizard-expanded-tab=false]+[ui5-wizard-tab][data-ui5-wizard-expanded-tab-prev=true]{width:2rem;padding-right:.75rem}
`;x("@ui5/webcomponents-theming","sap_horizon",async()=>Z);x("@ui5/webcomponents-fiori","sap_horizon",async()=>X);const Oe=`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}.ui5-wizard-responsive-popover{box-shadow:var(--sapContent_Shadow1)}.ui5-wizard-responsive-popover-list{list-style:none;margin:0;padding:0}.ui5-responsive-popover-footer{display:flex;justify-content:flex-end;padding:.25rem 0;width:100%}.ui5-wizard-popover .ui5-wizard-responsive-popover-list [ui5-button]{width:200px}.ui5-wizard-dialog .ui5-wizard-responsive-popover-list [ui5-button]{width:100%}
`;var S=function(s,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(n=(r<3?o(n):r>3?o(e,t,n):o(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n},h;const Le=64,Me=200,m="data-ui5-wizard-expanded-tab",F="data-ui5-wizard-expanded-tab-next",Q="data-ui5-wizard-after-current-tab",H="data-ui5-wizard-expanded-tab-prev",j={MIN:.5,DEFAULT:.7,MAX:1},V={0:"S",599:"M",1023:"L",1439:"XL"};let g=h=class extends G{constructor(){super(),this.contentLayout="MultipleSteps",this.stepSwitchThreshold=j.DEFAULT,this._groupedTabs=[],this.stepScrollOffsets=[],this.selectedStepIndex=0,this.previouslySelectedStepIndex=0,this.selectionRequestedByClick=!1,this._prevWidth=0,this._prevContentHeight=0,this.selectionRequestedByScroll=!1,this._itemNavigation=new me(this,{navigationMode:fe.Auto,getItemsCallback:()=>this.enabledStepsInHeaderDOM}),this._onStepResize=this.onStepResize.bind(this)}static get SCROLL_DEBOUNCE_RATE(){return 25}onExitDOM(){this.detachStepsResizeObserver()}onBeforeRendering(){this.syncSelection()}onAfterRendering(){this.storeStepScrollOffsets(),this.previouslySelectedStepIndex!==this.selectedStepIndex&&this.scrollToSelectedStep(),this.attachStepsResizeObserver(),this.previouslySelectedStepIndex=this.selectedStepIndex}syncSelection(){this.stepsCount!==0&&(this.selectedStepsCount===0&&(this.selectFirstStep(),console.warn("Selecting the first step: no selected step is defined.")),this.selectedStepsCount>1&&(this.selectLastSelectedStep(),console.warn("Selecting the last step defined as selected: multiple selected steps are defined.")),this.selectedStep&&this.selectedStep.disabled&&console.warn("The selected step is disabled: you need to enable it in order to interact with the step."),this.selectedStepIndex=this.getSelectedStepIndex(),this.selectedStep&&this.stepsInHeaderDOM.length&&(this._itemNavigation._getItems().includes(this.stepsInHeaderDOM[this.selectedStepIndex])?this._itemNavigation.setCurrentItem(this.stepsInHeaderDOM[this.selectedStepIndex]):this._itemNavigation.setCurrentItem(this.stepsInHeaderDOM.find(e=>e.selected))))}selectFirstStep(){this.deselectAll(),this.slottedSteps[0].selected=!0,this.slottedSteps[0].disabled=!1}selectLastSelectedStep(){const e=this.lastSelectedStep;e&&(this.deselectAll(),e.selected=!0,e.disabled=!1)}deselectAll(){this.slottedSteps.forEach(e=>{e.selected=!1})}storeStepScrollOffsets(){this.stepScrollOffsets=this.slottedSteps.map(e=>{const t=this.getStepWrapperByRefId(e._id);return t.offsetTop+t.offsetHeight})}onSelectionChangeRequested(e){this.selectionRequestedByClick=!0,this.changeSelectionByStepAction(e.target)}onScroll(e){if(this.selectionRequestedByClick){this.selectionRequestedByClick=!1;return}this.contentLayout!=="SingleStep"&&ge(this.changeSelectionByScroll.bind(this,e.target.scrollTop),h.SCROLL_DEBOUNCE_RATE)}onStepInHeaderFocused(e){this._itemNavigation.setCurrentItem(e.target)}onStepResize(){this.width=this.getBoundingClientRect().width,this.contentHeight=this.getContentHeight(),(this._prevWidth!==this.width||this.contentHeight!==this._prevContentHeight)&&this._closeRespPopover(),this._prevWidth=this.width,this._prevContentHeight=this.contentHeight,this._calcCurrentBreakpoint()}attachStepsResizeObserver(){this.stepsDOM.forEach(e=>{M.deregister(e,this._onStepResize),M.register(e,this._onStepResize)})}detachStepsResizeObserver(){this.stepsDOM.forEach(e=>{M.deregister(e,this._onStepResize)})}_calcCurrentBreakpoint(){const t=Object.keys(V).reverse().find(i=>Number(i)<this.width);this._breakpoint=t?V[t]:V[0]}_adjustHeaderOverflow(){let e=0,t=!0;const i=this.stepsInHeaderDOM;if(!i.length)return;const r=this.progressNavigatorListDOM.getBoundingClientRect().width,n=this.getSelectedStepIndex(),o=this.steps.length?Math.floor(r/Me):Math.floor(r/Le);[...i].forEach((a,u)=>{a.setAttribute(m,"false"),a.setAttribute(H,"false"),a.setAttribute(F,"false"),u>n?i[u].setAttribute(Q,"true"):i[u].removeAttribute(Q)}),i[n]&&i[n].setAttribute(m,"true");for(let a=1;a<o;a++)t&&(e+=1),t&&i[n+e]?(i[n+e].setAttribute(m,"true"),t=!t):!t&&i[n-e]?(i[n-e].setAttribute(m,"true"),t=!t):i[n+e+1]?(e+=1,i[n+e].setAttribute(m,"true"),t=!0):i[n-e]&&(i[n-e].setAttribute(m,"true"),e+=1,t=!1);for(let a=0;a<i.length;a++)if(i[a].getAttribute(m)==="true"&&i[a-1]&&i[a-1].getAttribute(m)==="false"&&i[a-1].setAttribute(H,"true"),i[a].getAttribute(m)==="false"&&i[a-1]&&i[a-1].getAttribute(m)==="true"){i[a].setAttribute(F,"true");break}}_isGroupAtStart(e){const t=this.stepsInHeaderDOM.indexOf(e);return e.getAttribute(m)==="false"&&e.getAttribute(H)==="true"&&t>0}_isGroupAtEnd(e){const t=this.stepsInHeaderDOM.indexOf(e);return e.getAttribute(m)==="false"&&e.getAttribute(F)==="true"&&t+1<this.steps.length}_showPopover(e,t){const i=Array.from(this.stepsInHeaderDOM);this._groupedTabs=[];const r=t?0:this.stepsInHeaderDOM.indexOf(e),n=t?this.stepsInHeaderDOM.indexOf(e):i.length-1;for(let a=r;a<=n;a++)this._groupedTabs.push(i[a]);const o=this._respPopover();o.opener=e,o.open=!0}_onGroupedTabClick(e){const t=e.target;if(this._isGroupAtStart(t))return this._showPopover(t,!0);if(this._isGroupAtEnd(t))return this._showPopover(t,!1)}_onOverflowStepButtonClick(e){const t=Array.from(this.stepsInHeaderDOM),r=e.target.getAttribute("data-ui5-header-tab-ref-id"),n=this.slottedSteps[Number(r)-1],o=this.selectedStep,a=this.slottedSteps.indexOf(n);this.switchSelectionFromOldToNewStep(o,n,a,!1),this._closeRespPopover(),t[a].focus()}_closeRespPopover(){const e=this._respPopover();e&&(e.open=!1)}_respPopover(){return this.shadowRoot.querySelector(".ui5-wizard-responsive-popover")}changeSelectionByScroll(e){const t=this.getClosestStepIndexByScrollPos(e),i=this.slottedSteps[t];this.selectedStepIndex!==t&&!i.disabled&&t>=0&&t<=this.stepsCount-1&&(this.switchSelectionFromOldToNewStep(this.selectedStep,i,t,!0),this.selectionRequestedByScroll=!0)}async changeSelectionByStepAction(e){const t=e.getAttribute("data-ui5-content-ref-id"),i=this.selectedStep,r=this.getStepByRefId(t),n=e.getAttribute(m)==="true",o=this.slottedSteps.indexOf(r),a=r.firstElementChild,u=await ve(a);if(u&&u.focus(),i===r){this.scrollToContentItem(this.selectedStepIndex);return}(n||!n&&(o===0||o===this.steps.length-1))&&this.switchSelectionFromOldToNewStep(i,r,o,!1)}getContentHeight(){let e=0;return this.stepsDOM.forEach(t=>{e+=t.getBoundingClientRect().height}),e}getStepAriaLabelText(e,t){return h.i18nBundle.getText(Se,t)}get stepsDOM(){return Array.from(this.shadowRoot.querySelectorAll(".ui5-wiz-content-item"))}get progressNavigatorListDOM(){return this.shadowRoot.querySelector(".ui5-wiz-nav-list")}get _stepsInHeader(){return this.getStepsInfo()}get _steps(){const e=this.getLastEnabledStepIndex(),t=this.getStepsInfo();return this.steps.map((i,r)=>(i.stretch=r===e,i.stepContentAriaLabel=`${this.navStepDefaultHeading} ${t[r].number} ${t[r].titleText}`,i))}get stepsCount(){return this.slottedSteps.length}get selectedStep(){return this.selectedStepsCount?this.selectedSteps[0]:null}get lastSelectedStep(){return this.selectedStepsCount?this.selectedSteps[this.selectedStepsCount-1]:null}get selectedSteps(){return this.slottedSteps.filter(e=>e.selected)}get enabledSteps(){return this.slottedSteps.filter(e=>!e.disabled)}get selectedStepsCount(){return this.selectedSteps.length}get slottedSteps(){return this.getSlottedNodes("steps")}get contentDOM(){return this.shadowRoot.querySelector(".ui5-wiz-content")}get stepsInHeaderDOM(){return Array.from(this.shadowRoot.querySelectorAll("[ui5-wizard-tab]"))}get enabledStepsInHeaderDOM(){return this.stepsInHeaderDOM.filter(e=>!e.disabled)}get navAriaRoleDescription(){return h.i18nBundle.getText(J)}get navAriaLabelText(){return h.i18nBundle.getText(we)}get navAriaDescribedbyText(){return h.i18nBundle.getText(ye)}get listAriaLabelText(){return h.i18nBundle.getText(ze)}get actionSheetStepsText(){return h.i18nBundle.getText(_e)}get navStepDefaultHeading(){return h.i18nBundle.getText(Te)}get optionalStepText(){return h.i18nBundle.getText(xe)}get activeStepText(){return h.i18nBundle.getText(Ie)}get inactiveStepText(){return h.i18nBundle.getText(qe)}get ariaLabelText(){return h.i18nBundle.getText(J)}get effectiveStepSwitchThreshold(){return be(this.stepSwitchThreshold,j.MIN,j.MAX)}getStepsInfo(){const e=this.getLastEnabledStepIndex(),t=this.stepsCount,i=this.getSelectedStepIndex();let r=this.steps.length+10,n;return this._adjustHeaderOverflow(),this.steps.map((o,a)=>{const u=a+1,D=a===t-1&&!o.branching,N=o.subtitleText?this.optionalStepText:"",A=o.disabled?this.inactiveStepText:this.activeStepText,W=(o.titleText?`${u} ${o.titleText} ${A} ${N}`:`${this.navStepDefaultHeading} ${u} ${A} ${N}`).trim(),f=a>i;return n={ariaSetsize:t,ariaPosinset:u,ariaLabel:this.getStepAriaLabelText(o,W)},{icon:o.icon,titleText:o.titleText,subtitleText:o.subtitleText,number:u,selected:o.selected,disabled:o.disabled,hideSeparator:D,activeSeparator:a<e&&!o.disabled,branchingSeparator:o.branching,pos:u,accInfo:n,refStepId:o._id,styles:{zIndex:f?--r:1}}})}getSelectedStepIndex(){return this.selectedStep?this.slottedSteps.indexOf(this.selectedStep):0}getLastEnabledStepIndex(){let e=0;return this.slottedSteps.forEach((t,i)=>{t.disabled||(e=i)}),e}getStepByRefId(e){return this.slottedSteps.find(t=>t._id===e)}getStepWrapperByRefId(e){return this.shadowRoot.querySelector(`[data-ui5-content-item-ref-id=${e}]`)}getStepWrapperByIdx(e){return this.getStepWrapperByRefId(this.steps[e]._id)}scrollToSelectedStep(){this.selectionRequestedByScroll||this.scrollToContentItem(this.selectedStepIndex),this.selectionRequestedByScroll=!1}scrollToContentItem(e){this.contentDOM.scrollTop=this.getClosestScrollPosByStepIndex(e)}getClosestScrollPosByStepIndex(e){if(e===0)return 0;for(let t=e-1;t>=0;t--)if(this.stepScrollOffsets[t]>0)return this.stepScrollOffsets[t];return 0}getClosestStepIndexByScrollPos(e){for(let t=0;t<=this.stepScrollOffsets.length-1;t++){const i=this.stepScrollOffsets[t],r=this.getStepWrapperByIdx(t),n=r.offsetTop+r.offsetHeight*this.effectiveStepSwitchThreshold;if(i>0&&e<i)return e>n?t+1:t}return this.selectedStepIndex}switchSelectionFromOldToNewStep(e,t,i,r){e&&t&&(t.disabled||(e.selected=!1,t.selected=!0),this.fireDecoratorEvent("step-change",{step:t,previousStep:e,withScroll:r}),this.selectedStepIndex=i)}sortAscending(e,t){return e<t?-1:e>t?1:0}};S([l()],g.prototype,"contentLayout",void 0);S([l({type:Number})],g.prototype,"width",void 0);S([l({type:Number})],g.prototype,"stepSwitchThreshold",void 0);S([l({type:Number})],g.prototype,"contentHeight",void 0);S([l({type:Array})],g.prototype,"_groupedTabs",void 0);S([l()],g.prototype,"_breakpoint",void 0);S([ce({default:!0,type:HTMLElement,individualSlots:!0,invalidateOnChildChange:!0})],g.prototype,"steps",void 0);S([ue("@ui5/webcomponents-fiori")],g,"i18nBundle",void 0);g=h=S([U({tag:"ui5-wizard",languageAware:!0,fastNavigation:!0,renderer:ne,styles:[Be,Oe,he()],template:Pe}),$("step-change",{bubbles:!0})],g);g.define();const y=se("ui5-wizard",["contentLayout"],[],[],["step-change"]);y.displayName="Wizard";try{y.displayName="Wizard",y.__docgenInfo={description:`The \`Wizard\` helps users to complete a complex task by dividing it into sections and guiding them through it.
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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{y.displayName="Wizard",y.__docgenInfo={description:`The \`Wizard\` helps users to complete a complex task by dividing it into sections and guiding them through it.
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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const w=se("ui5-wizard-step",["icon","subtitleText","titleText"],["branching","disabled","selected"],[],[]);w.displayName="WizardStep";try{w.displayName="WizardStep",w.__docgenInfo={description:"A component that represents a logical step as part of the `Wizard`.\nIt is meant to aggregate arbitrary HTML elements that form the content of a single step.\n\n### Structure\n\n- Each wizard step has arbitrary content.\n- Each wizard step might have texts - defined by the `titleText` and `subtitleText` properties.\n- Each wizard step might have an icon - defined by the `icon` property.\n- Each wizard step might display a number in place of the `icon`, when it's missing.\n\n### Usage\nThe `WizardStep` component should be used only as slot of the `Wizard` component\nand should not be used standalone.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"WizardStep",props:{children:{defaultValue:null,description:"Defines the step content.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},branching:{defaultValue:{value:"false"},description:"When `branching` is enabled a dashed line would be displayed after the step,\nmeant to indicate that the next step is not yet known and depends on user choice in the current step.\n\n**Note:** It is recommended to use `branching` on the last known step\nand later add new steps when it becomes clear how the wizard flow should continue.",name:"branching",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Defines if the step is `disabled`. When disabled the step is displayed,\nbut the user can't select the step by clicking or navigate to it with scrolling.\n\n**Note:** Step can't be `selected` and `disabled` at the same time.\nIn this case the `selected` property would take precedence.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"undefined"},description:`Defines the \`icon\` of the step.

**Note:** The icon is displayed in the \`Wizard\` navigation header.

The SAP-icons font provides numerous options.
See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"Defines the step's `selected` state - the step that is currently active.\n\n**Note:** Step can't be `selected` and `disabled` at the same time.\nIn this case the `selected` property would take precedence.",name:"selected",required:!1,type:{name:"boolean"}},subtitleText:{defaultValue:{value:"undefined"},description:"Defines the `subtitleText` of the step.\n\n**Note:** the text is displayed in the `Wizard` navigation header.",name:"subtitleText",required:!1,type:{name:"string"}},titleText:{defaultValue:{value:"undefined"},description:"Defines the `titleText` of the step.\n\n**Note:** The text is displayed in the `Wizard` navigation header.",name:"titleText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{w.displayName="WizardStep",w.__docgenInfo={description:"A component that represents a logical step as part of the `Wizard`.\nIt is meant to aggregate arbitrary HTML elements that form the content of a single step.\n\n### Structure\n\n- Each wizard step has arbitrary content.\n- Each wizard step might have texts - defined by the `titleText` and `subtitleText` properties.\n- Each wizard step might have an icon - defined by the `icon` property.\n- Each wizard step might display a number in place of the `icon`, when it's missing.\n\n### Usage\nThe `WizardStep` component should be used only as slot of the `Wizard` component\nand should not be used standalone.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"WizardStep",props:{children:{defaultValue:null,description:"Defines the step content.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},branching:{defaultValue:{value:"false"},description:"When `branching` is enabled a dashed line would be displayed after the step,\nmeant to indicate that the next step is not yet known and depends on user choice in the current step.\n\n**Note:** It is recommended to use `branching` on the last known step\nand later add new steps when it becomes clear how the wizard flow should continue.",name:"branching",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Defines if the step is `disabled`. When disabled the step is displayed,\nbut the user can't select the step by clicking or navigate to it with scrolling.\n\n**Note:** Step can't be `selected` and `disabled` at the same time.\nIn this case the `selected` property would take precedence.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"undefined"},description:`Defines the \`icon\` of the step.

**Note:** The icon is displayed in the \`Wizard\` navigation header.

The SAP-icons font provides numerous options.
See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"Defines the step's `selected` state - the step that is currently active.\n\n**Note:** Step can't be `selected` and `disabled` at the same time.\nIn this case the `selected` property would take precedence.",name:"selected",required:!1,type:{name:"boolean"}},subtitleText:{defaultValue:{value:"undefined"},description:"Defines the `subtitleText` of the step.\n\n**Note:** the text is displayed in the `Wizard` navigation header.",name:"subtitleText",required:!1,type:{name:"string"}},titleText:{defaultValue:{value:"undefined"},description:"Defines the `titleText` of the step.\n\n**Note:** The text is displayed in the `Wizard` navigation header.",name:"titleText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const Fe="hint",He="M207 80q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm-15 369h33V225h-32v-34h95v258h32v31H192v-31z",je=!0,Ve="SAP-icons-v4",$e="@ui5/webcomponents-icons";I(Fe,{pathData:He,ltr:je,collection:Ve,packageName:$e});const Ue="hint",Ge="M256 0q53 0 100 20t81.5 54.5T492 156t20 100-20 100-54.5 81.5T356 492t-100 20-100-20-81.5-54.5T20 356 0 256t20-100 54.5-81.5T156 20 256 0zm0 461q43 0 80.5-16t65-44 43.5-65 16-80-16-80.5-43.5-65-65-43.5T256 51t-80 16-65 43.5-44 65T51 256t16 80 44 65 65 44 80 16zm0-333q13 0 22.5 9.5T288 160t-9.5 22.5T256 192t-22.5-9.5T224 160t9.5-22.5T256 128zm0 115q11 0 18 7.5t7 18.5v102q0 11-7 18.5t-18 7.5-18.5-7.5T230 371V269q0-11 7.5-18.5T256 243z",Ze=!0,Xe="SAP-icons-v5",Ye="@ui5/webcomponents-icons";I(Ue,{pathData:Ge,ltr:Ze,collection:Xe,packageName:Ye});const Ke="hint",Je="lead",Qe="M0 256q0-53 20-99.5T75 75t81.5-55T256 0t100 20 81.5 55 54.5 81.5 20 99.5-20 100-54.5 81.5T356 492t-100 20-99.5-20T75 437.5 20 356 0 256zm32 0q0 46 17.5 87t48 71.5 71.5 48 87 17.5q47 0 87.5-17.5t71-48 48-71.5 17.5-87q0-47-17.5-87.5t-48-71-71-48T256 32q-46 0-87 17.5t-71.5 48-48 71T32 256zm138 61l41-5q3 14 12 25t19 15v-73q-32-11-51.5-32.5T171 202q0-12 5-25t14.5-24 22.5-18.5 29-8.5v-21h25v21q58 4 70 62l-36 6q-2-12-11-20t-23-9v76q42 9 59 31t17 46q0 28-20.5 50.5T267 393v33h-25v-32q-26-1-47-20t-25-57zm72-89v-64q-11 4-18 13t-7 19q0 20 25 32zm25 128q14-4 23.5-14.5T300 319q0-25-33-35v72z",et=!0,tt="SAP-icons-v4",it="@ui5/webcomponents-icons";I(Je,{pathData:Qe,ltr:et,collection:tt,packageName:it});const nt="lead",st="M256 0q53 0 100 20t81.5 54.5T492 156t20 100-20 100-54.5 81.5T356 492t-100 20-100-20-81.5-54.5T20 356 0 256t20-100 54.5-81.5T156 20 256 0zm0 461q43 0 80.5-16t65-44 43.5-65 16-80-16-80.5-43.5-65-65-43.5T256 51t-80 16-65 43.5-44 65T51 256t16 80 44 65 65 44 80 16zm-13-256q-5 0-9 4t-4 9 4 8.5 9 3.5h26q26 0 45 19t19 45q0 23-15 40.5T282 357v34q0 11-7.5 18.5T256 417t-18.5-7.5T230 391v-33h-25q-11 0-18.5-7t-7.5-18 7.5-18.5T205 307h64q5 0 9-4t4-9-4-8.5-9-3.5h-26q-26 0-45-19t-19-45q0-23 15-40.5t36-22.5v-33q0-11 7.5-18.5T256 96t18.5 7.5T282 122v32h25q11 0 18.5 7t7.5 18-7.5 18.5T307 205h-64z",at=!0,ot="SAP-icons-v5",rt="@ui5/webcomponents-icons";I(nt,{pathData:st,ltr:at,collection:ot,packageName:rt});const lt="lead",dt="product",pt="M474.5 110v290l-218 110-218-110V110l109-55 219 109v109l-37 18V186l-182-90-73 35v248l182 90 182-90V131l-182-90-28 14-41-21 69-34zm-363 200l108 54v45l-108-53v-46z",ct=!1,ut="SAP-icons-v4",ht="@ui5/webcomponents-icons";I(dt,{pathData:pt,ltr:ct,collection:ut,packageName:ht});const mt="product",ft="M257 512q-7 0-13-3L45 394q-13-8-13-23V160q0-14 11-22l102-69q8-5 15-5 8 0 13 4l167 104q12 6 12 22v101q0 11-7.5 18t-18.5 7-18-7.5-7-18.5v-86l-140-88-78 53v184l174 100 172-100V156L243 48q-13-8-13-22 0-11 7.5-18.5T256 0q7 0 13 3l198 116q13 8 13 22v230q0 15-13 23L270 509q-6 3-13 3zm-37-147q-6 0-12-3l-67-39q-13-8-13-22 0-11 7.5-18.5T154 275q6 0 12 3l67 39q13 8 13 22 0 11-7.5 18.5T220 365z",bt=!1,gt="SAP-icons-v5",vt="@ui5/webcomponents-icons";I(mt,{pathData:ft,ltr:bt,collection:gt,packageName:vt});const St="product",wt={title:"Layouts & Floorplans / Wizard",component:y,argTypes:{children:{control:{disable:!0}}},args:{style:{height:"400px"}},tags:["package:@ui5/webcomponents-fiori"]},C={render(s){const[e,t]=P.useState("1"),[i,r]=P.useState({2:!0,3:!0,4:!0}),[n,o]=P.useState({step3Btn:!0,finalizeBtn:!0}),a=()=>{r(f=>{const{"2":_,...q}=f;return q}),t("2")},u=()=>{r(f=>{const{"3":_,...q}=f;return q}),t("3")},D=f=>{f.target.checked&&o(_=>{const{step3Btn:q,...E}=_;return E})},N=()=>{alert("Wizard is now completed!")},A=f=>{f.target.value&&o(_=>{const{finalizeBtn:q,...E}=_;return E})},W=f=>{t(f.detail.step.dataset.step),s.onStepChange(f)};return p.jsxs(y,{...s,onStepChange:W,children:[p.jsxs(w,{icon:St,titleText:"Product Type",selected:e==="1","data-step":"1",children:[p.jsx(L,{children:"1. Product Type"}),p.jsx(ae,{design:oe.Information,children:"The Wizard control is supposed to break down large tasks, into smaller steps, easier for the user to work with."}),p.jsx(O,{wrappingType:k.None,children:"Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor et, varius quam. Aliquam erat volutpat"}),p.jsx(B,{design:R.Emphasized,onClick:a,children:"Step 2"})]}),p.jsxs(w,{icon:Ke,titleText:"Product Information",disabled:i[2],selected:e==="2","data-step":"2",children:[p.jsx(L,{children:"2. Product Information"}),p.jsx(O,{wrappingType:k.None,children:"Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien"}),p.jsx(de,{onChange:D,text:"Step Completed"}),p.jsx("br",{}),!n.step3Btn&&p.jsx(B,{design:R.Emphasized,onClick:u,children:"Step 3"})]}),p.jsxs(w,{icon:lt,titleText:"Pricing",disabled:i[3],selected:e==="3","data-step":"3",children:[p.jsx(L,{children:"3. Pricing"}),p.jsx(O,{wrappingType:k.None,children:"Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien"}),p.jsx(pe,{placeholder:"Item Price",onInput:A}),p.jsx("br",{}),!n.finalizeBtn&&p.jsx(B,{design:R.Emphasized,onClick:N,children:"Finalize"})]})]})}};var ee,te,ie;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ie=(te=C.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};const yt=["Default"],Yt=Object.freeze(Object.defineProperty({__proto__:null,Default:C,__namedExportsOrder:yt,default:wt},Symbol.toStringTag,{value:"Module"}));export{Yt as C,C as D,w as W};
