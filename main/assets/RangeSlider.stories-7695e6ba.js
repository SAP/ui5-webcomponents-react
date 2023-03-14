import{M as C,C as O,j as N,a as F}from"./index-cacdbb95.js";import{_ as M}from"./iframe-d8f0136d.js";import{e as h,l as a,f as V,s as L,a as U,p as w,c as q,w as j}from"./withWebComponent-e4481254.js";import{F as k}from"./Float-99d99064.js";import{a as B,d as z}from"./UI5Element-427ec721.js";import{d as X,j as W,h as $}from"./Keys-3acbae73.js";import{S as g}from"./SliderBase-b3752822.js";import{c as H,I as K}from"./Icon-459702a7.js";import{o as S}from"./class-map-5d8e4b2b.js";import{s as c}from"./style-map-77d201d2.js";import{bd as G,be as R,bf as A}from"./i18n-defaults-6bc67b6a.js";import{b as Y}from"./DomRefTable.module-1de5e215.js";import{D as x}from"./DocsHeader-94e77d61.js";import{F as J}from"./Footer-1e5b71e8.js";import{j as d,a as Q,F as Z}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u as I}from"./index-4fb8b842.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"../sb-preview/runtime.mjs";import"./utils-ed90fb1b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./Integer-f7f172c9.js";import"./event-97133b94.js";import"./ResizeHandler-1fa8a094.js";import"./Device-208919c6.js";import"./Icons-7b82f601.js";import"./chunk-PCJTTTQV-bdecd16c.js";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-fe4dc3ff.js";import"./index-d152d46c.js";import"./slot-634e3e91.js";import"./decline-f2b294b3.js";import"./i18n-defaults-80781f7e.js";import"./information-50e1ad0f.js";import"./Button-876771f0.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./index-57eaac56.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-ce148b3b.js";import"./TableOfContent-85fba779.js";import"./index-60f41380.js";import"./Link-687260e5.js";import"./WrappingType-b81e595a.js";import"./index-e9e4dc98.js";import"./Label-040efebd.js";import"./Footer.module-f90cad7d.js";import"./index-f14605c0.js";import"./Popover-54e30804.js";import"./PopupsCommon.css-d3649668.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./getActiveElement-bcae01ed.js";import"./MediaRange-25b98f31.js";const ee=(e,t,i)=>i?h`<div class="ui5-slider-root ${S(e.classes.root)}" @mousedown="${e._onmousedown}" @touchstart="${e._ontouchstart}" @mouseover="${e._onmouseover}" @mouseout="${e._onmouseout}" @keydown="${e._onkeydown}" @keyup="${e._onkeyup}" part="root-container"><span id="${a(e._id)}-startHandleDesc" class="ui5-hidden-text">${a(e._ariaHandlesText.startHandleText)}</span><span id="${a(e._id)}-endHandleDesc" class="ui5-hidden-text">${a(e._ariaHandlesText.endHandleText)}</span><div class="ui5-slider-inner">${e.step?P(e):void 0}<div class="ui5-slider-progress-container" part="progress-container"><div class="ui5-slider-progress" part="progress-bar" style="${c(e.styles.progress)}" @focusin="${e._onfocusin}" @focusout="${e._onfocusout}" role="slider" tabindex="${a(e._tabIndex)}" aria-orientation="horizontal" aria-valuemin="${a(e.min)}" aria-valuemax="${a(e.max)}" aria-valuenow="${a(e._ariaValueNow)}" aria-valuetext="From ${a(e.startValue)} to ${a(e.endValue)}" aria-labelledby="${a(e._ariaLabelledByProgressBarRefs)}" aria-disabled="${a(e._ariaDisabled)}"></div></div><div class="ui5-slider-handle ui5-slider-handle--start" part="handle" style="${c(e.styles.startHandle)}" @focusin="${e._onfocusin}" @focusout="${e._onfocusout}" role="slider" tabindex="${a(e._tabIndex)}" aria-orientation="horizontal" aria-valuemin="${a(e.min)}" aria-valuemax="${a(e.max)}" aria-valuenow="${a(e.startValue)}" aria-labelledby="${a(e._ariaLabelledByStartHandleRefs)}" aria-disabled="${a(e._ariaDisabled)}"><${V("ui5-icon",t,i)} name="direction-arrows" slider-icon></${V("ui5-icon",t,i)}>${e.showTooltip?D(e):void 0}</div><div class="ui5-slider-handle ui5-slider-handle--end" part="handle" style="${c(e.styles.endHandle)}" @focusin="${e._onfocusin}" @focusout="${e._onfocusout}" role="slider" tabindex="${a(e._tabIndex)}" aria-orientation="horizontal" aria-valuemin="${a(e.min)}" aria-valuemax="${a(e.max)}" aria-valuenow="${a(e.endValue)}" aria-labelledby="${a(e._ariaLabelledByEndHandleRefs)}" aria-disabled="${a(e._ariaDisabled)}"><${V("ui5-icon",t,i)} name="direction-arrows" slider-icon></${V("ui5-icon",t,i)}>${e.showTooltip?T(e):void 0}</div></div><span id="${a(e._id)}-accName" class="ui5-hidden-text">${a(e.accessibleName)}</span><span id="${a(e._id)}-sliderDesc" class="ui5-hidden-text">${a(e._ariaLabelledByText)}</span></div> `:h`<div class="ui5-slider-root ${S(e.classes.root)}" @mousedown="${e._onmousedown}" @touchstart="${e._ontouchstart}" @mouseover="${e._onmouseover}" @mouseout="${e._onmouseout}" @keydown="${e._onkeydown}" @keyup="${e._onkeyup}" part="root-container"><span id="${a(e._id)}-startHandleDesc" class="ui5-hidden-text">${a(e._ariaHandlesText.startHandleText)}</span><span id="${a(e._id)}-endHandleDesc" class="ui5-hidden-text">${a(e._ariaHandlesText.endHandleText)}</span><div class="ui5-slider-inner">${e.step?P(e):void 0}<div class="ui5-slider-progress-container" part="progress-container"><div class="ui5-slider-progress" part="progress-bar" style="${c(e.styles.progress)}" @focusin="${e._onfocusin}" @focusout="${e._onfocusout}" role="slider" tabindex="${a(e._tabIndex)}" aria-orientation="horizontal" aria-valuemin="${a(e.min)}" aria-valuemax="${a(e.max)}" aria-valuenow="${a(e._ariaValueNow)}" aria-valuetext="From ${a(e.startValue)} to ${a(e.endValue)}" aria-labelledby="${a(e._ariaLabelledByProgressBarRefs)}" aria-disabled="${a(e._ariaDisabled)}"></div></div><div class="ui5-slider-handle ui5-slider-handle--start" part="handle" style="${c(e.styles.startHandle)}" @focusin="${e._onfocusin}" @focusout="${e._onfocusout}" role="slider" tabindex="${a(e._tabIndex)}" aria-orientation="horizontal" aria-valuemin="${a(e.min)}" aria-valuemax="${a(e.max)}" aria-valuenow="${a(e.startValue)}" aria-labelledby="${a(e._ariaLabelledByStartHandleRefs)}" aria-disabled="${a(e._ariaDisabled)}"><ui5-icon name="direction-arrows" slider-icon></ui5-icon>${e.showTooltip?D(e):void 0}</div><div class="ui5-slider-handle ui5-slider-handle--end" part="handle" style="${c(e.styles.endHandle)}" @focusin="${e._onfocusin}" @focusout="${e._onfocusout}" role="slider" tabindex="${a(e._tabIndex)}" aria-orientation="horizontal" aria-valuemin="${a(e.min)}" aria-valuemax="${a(e.max)}" aria-valuenow="${a(e.endValue)}" aria-labelledby="${a(e._ariaLabelledByEndHandleRefs)}" aria-disabled="${a(e._ariaDisabled)}"><ui5-icon name="direction-arrows" slider-icon></ui5-icon>${e.showTooltip?T(e):void 0}</div></div><span id="${a(e._id)}-accName" class="ui5-hidden-text">${a(e.accessibleName)}</span><span id="${a(e._id)}-sliderDesc" class="ui5-hidden-text">${a(e._ariaLabelledByText)}</span></div> `,P=(e,t,i)=>h`${e.showTickmarks?te(e):void 0}`,te=(e,t,i)=>h`<ul class="ui5-slider-tickmarks">${H(e.tickmarksObject,(s,n)=>s._id||n,(s,n)=>ie(s))}</ul>${e.labelInterval?ne(e):void 0}`,ie=(e,t,i,s,n)=>h`${e?se():ae()}`,se=(e,t,i,s,n)=>h`<li class="ui5-slider-tickmark ui5-slider-tickmark-in-range"></li>`,ae=(e,t,i,s,n)=>h`<li class="ui5-slider-tickmark"></li>`,ne=(e,t,i)=>h`<ul class="ui5-slider-labels ${S(e.classes.labelContainer)}" style="${c(e.styles.labelContainer)}">${H(e._labels,(s,n)=>s._id||n,(s,n)=>re(s,n,e))}</ul>`,re=(e,t,i,s,n)=>h`<li style="${c(i.styles.label)}">${a(e)}</li>`,D=(e,t,i)=>h`<div class="ui5-slider-tooltip ui5-slider-tooltip--start" style="${c(e.styles.tooltip)}"><span class="ui5-slider-tooltip-value">${a(e.tooltipStartValue)}</span></div>`,T=(e,t,i)=>h`<div class="ui5-slider-tooltip ui5-slider-tooltip--end" style="${c(e.styles.tooltip)}"><span class="ui5-slider-tooltip-value">${a(e.tooltipEndValue)}</span></div>`;B("@ui5/webcomponents-theming","sap_fiori_3",async()=>L);B("@ui5/webcomponents","sap_fiori_3",async()=>U);const le={packageName:"@ui5/webcomponents",fileName:"themes/RangeSlider.css.ts",content:':host([ui5-range-slider]) .ui5-slider-progress-container:before{background-color:var(--_ui5_slider_progress_container_dot_background)}.ui5-slider-root:hover:active .ui5-slider-handle:not(:focus){background:var(--sapSlider_RangeHandleBackground)}.ui5-slider-root:active .ui5-slider-handle:active:focus,.ui5-slider-root:active .ui5-slider-handle:focus{background:var(--_ui5_range_slider_handle_active_background)}.ui5-slider-root:active .ui5-slider-handle:active:focus [slider-icon],.ui5-slider-root:active .ui5-slider-handle:focus [slider-icon]{display:var(--_ui5_range_slider_active_handle_icon_display)}:host([range-pressed]) .ui5-slider-root:active .ui5-slider-handle:not(:focus){background:var(--_ui5_range_slider_handle_active_background);border:var(--_ui5_slider_handle_focus_border);box-shadow:none}:host([range-pressed]) .ui5-slider-progress:focus:after{border:none}:host([range-pressed]) .ui5-slider-handle [slider-icon]{display:var(--_ui5_range_slider_active_handle_icon_display)}.ui5-slider-root:not(.ui5-slider-root-phone) .ui5-slider-inner .ui5-slider-handle:focus,.ui5-slider-root:not(.ui5-slider-root-phone):focus .ui5-slider-inner .ui5-slider-handle{background:var(--_ui5_range_slider_handle_background_focus)}.ui5-slider-root:not(.ui5-slider-root-phone) .ui5-slider-inner .ui5-slider-handle:focus [slider-icon]{display:none}.ui5-slider-root:not(.ui5-slider-root-phone) .ui5-slider-progress:focus:before{display:var(--_ui5_range_slider_legacy_progress_focus_display);content:"";position:absolute;width:var(--_ui5_range_slider_focus_outline_width);border:var(--_ui5_slider_progress_outline);border-radius:var(--_ui5_range_slider_focus_outline_radius);top:var(--_ui5_slider_progress_outline_offset);height:var(--_ui5_slider_outer_height);box-sizing:border-box;left:var(--_ui5_slider_progress_outline_offset_left)}.ui5-slider-progress{position:relative}.ui5-slider-progress:focus:after{border:.125rem solid var(--sapContent_FocusColor);border-radius:.5rem;content:"";display:var(--_ui5_range_slider_progress_focus_display);position:absolute;top:var(--_ui5_range_slider_progress_focus_top);left:var(--_ui5_range_slider_progress_focus_left);padding:var(--_ui5_range_slider_progress_focus_padding);width:var(--_ui5_range_slider_progress_focus_width);height:var(--_ui5_range_slider_progress_focus_height);box-sizing:border-box}.ui5-slider-handle{background:var(--_ui5_range_slider_handle_background)}.ui5-slider-root:hover .ui5-slider-handle:not(:focus){background:var(--_ui5_range_slider_root_hover_handle_bg)}.ui5-slider-root:hover .ui5-slider-handle:not(:focus) [slider-icon]{display:var(--_ui5_range_slider_root_hover_handle_icon_display)}:host([range-pressed]) .ui5-slider-root:active .ui5-slider-handle:not(:focus) [slider-icon]{display:var(--_ui5_range_slider_root_active_handle_icon_display)}'};var y=globalThis&&globalThis.__decorate||function(e,t,i,s){var n=arguments.length,r=n<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,i):s,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,i,s);else for(var o=e.length-1;o>=0;o--)(l=e[o])&&(r=(n<3?l(r):n>3?l(t,i,r):l(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r},p;let _=p=class extends g{constructor(){super(),this._isPressInCurrentRange=!1,this._handeIsPressed=!1,this._reversedValues=!1,this._stateStorage.startValue=void 0,this._stateStorage.endValue=void 0}get tooltipStartValue(){const i=this.constructor._getDecimalPrecisionOfNumber(this._effectiveStep);return this.startValue.toFixed(i)}get tooltipEndValue(){const i=this.constructor._getDecimalPrecisionOfNumber(this._effectiveStep);return this.endValue.toFixed(i)}get _ariaDisabled(){return this.disabled||void 0}get _ariaLabelledByText(){return p.i18nBundle.getText(G)}get _ariaHandlesText(){const t=this.effectiveDir==="rtl",i=this._areValuesReversed(),s={};return t&&!i||!t&&i?(s.startHandleText=p.i18nBundle.getText(R),s.endHandleText=p.i18nBundle.getText(A)):(s.startHandleText=p.i18nBundle.getText(A),s.endHandleText=p.i18nBundle.getText(R)),s}get _ariaValueNow(){return Math.abs(this.endValue-this.startValue)}onBeforeRendering(){if(this.startValue>this.endValue){const t=this._valueAffected==="startValue"?"endValue":"startValue";this._swapValues(),this._setAffectedValue(t),this.update(t,this.startValue,this.endValue)}this.isCurrentStateOutdated()&&(this.notResized=!0,this.syncUIAndState(),this._updateHandlesAndRange(0))}syncUIAndState(){if(this.isPropertyUpdated("step")&&(this._validateStep(this.step),this.storePropertyState("step")),this.isPropertyUpdated("min","max","startValue","endValue")){this.storePropertyState("min","max");const t=g.clipValue(this.startValue,this._effectiveMin,this._effectiveMax);this.startValue=t,this.updateStateStorageAndFireInputEvent("startValue"),this.storePropertyState("startValue");const i=g.clipValue(this.endValue,this._effectiveMin,this._effectiveMax);this.endValue=i,this.updateStateStorageAndFireInputEvent("endValue"),this.storePropertyState("endValue")}this.labelInterval&&this.showTickmarks&&this._createLabels(),this.isPropertyUpdated("labelInterval")&&this.storePropertyState("labelInterval")}_onfocusin(){this._endValueInitial||(this._startValueInitial=this.startValue,this._endValueInitial=this.endValue),this.showTooltip&&(this._tooltipVisibility=g.TOOLTIP_VISIBILITY.VISIBLE)}_onfocusout(){if(this._isFocusing()){this._preventFocusOut();return}this._setAffectedValue(void 0),this._startValueInitial=void 0,this._endValueInitial=void 0,this.showTooltip&&(this._tooltipVisibility=g.TOOLTIP_VISIBILITY.HIDDEN)}_onkeyup(){super._onkeyup(),this._setAffectedValue(void 0),(this.startValue!==this._startValueAtBeginningOfAction||this.endValue!==this._endValueAtBeginningOfAction)&&this.fireEvent("change"),this._startValueAtBeginningOfAction=void 0,this._endValueAtBeginningOfAction=void 0}_handleActionKeyPress(t){if(this._startValueAtBeginningOfAction=this.startValue,this._endValueAtBeginningOfAction=this.endValue,X(t)){this.update(void 0,this._startValueInitial,this._endValueInitial);return}this._setAffectedValueByFocusedElement();const i=this._effectiveMin,s=this._effectiveMax,n=this._valueAffected;if((W(t)||$(t))&&!n){this._homeEndForSelectedRange(t,$(t)?"startValue":"endValue",i,s);return}const r=this._handleActionKeyPressBase(t,n);if(!r)return;const l=this.constructor;if(n&&!this._isPressInCurrentRange){const o=this[n],u=l.clipValue(r+o,i,s);this.update(n,u,void 0)}else if(r<0&&this.startValue>i||r>0&&this.endValue<s){const o=l.clipValue(r+this.startValue,i,s),u=l.clipValue(r+this.endValue,i,s);this.update(n,o,u)}}_setAffectedValueByFocusedElement(){this.shadowRoot.activeElement===this._startHandle&&this._setAffectedValue("startValue"),this.shadowRoot.activeElement===this._endHandle&&this._setAffectedValue("endValue"),this.shadowRoot.activeElement===this._progressBar&&this._setAffectedValue(void 0),this._setIsPressInCurrentRange(!this._valueAffected)}_homeEndForSelectedRange(t,i,s,n){const r=this._handleActionKeyPressBase(t,i),l=this.constructor,o=l.clipValue(r+this.startValue,s,n),u=l.clipValue(r+this.endValue,s,n);this.update(void 0,o,u)}update(t,i,s){if(!t)this.startValue=i,this.updateStateStorageAndFireInputEvent("startValue"),this.endValue=s,this.updateStateStorageAndFireInputEvent("endValue"),this._updateHandlesAndRange(0);else{const n=s&&t==="endValue"?s:i;this._updateHandlesAndRange(n||0),t==="startValue"&&(this.startValue=n,this.updateStateStorageAndFireInputEvent("startValue")),t==="endValue"&&(this.endValue=n,this.updateStateStorageAndFireInputEvent("endValue"))}}_onmousedown(t){if(this.disabled||this._effectiveStep===0)return;const i=this.handleDownBase(t);if(this._saveInteractionStartData(t,i),this.rangePressed=this._isPressInCurrentRange,this._isPressInCurrentRange||this._handeIsPressed){this._handeIsPressed=!1;return}this.update(this._valueAffected,i,void 0)}_saveInteractionStartData(t,i){const s=this.shadowRoot.querySelector(".ui5-slider-progress").getBoundingClientRect();this._startValueAtBeginningOfAction=this.startValue,this._endValueAtBeginningOfAction=this.endValue;const n=this.constructor;this._initialPageXPosition=n.getPageXValueFromEvent(t),this._pressTargetAndAffectedValue(this._initialPageXPosition,i),this._initialStartHandlePageX=this.directionStart==="left"?s.left:s.right}_handleMove(t){if(t.preventDefault(),!(this.disabled||this._effectiveStep===0)){if(!this._isPressInCurrentRange){this._updateValueOnHandleDrag(t);return}this._updateValueOnRangeDrag(t)}}_updateValueOnHandleDrag(t){const s=this.constructor.getValueFromInteraction(t,this._effectiveStep,this._effectiveMin,this._effectiveMax,this.getBoundingClientRect(),this.directionStart);this.update(this._valueAffected,s,void 0)}_updateValueOnRangeDrag(t){const s=this.constructor.getPageXValueFromEvent(t),n=this._calculateRangeOffset(s,this._initialStartHandlePageX);this._setAffectedValue(void 0),this.update(void 0,n[0],n[1])}_handleUp(){this._setAffectedValueByFocusedElement(),this._setAffectedValue(void 0),(this.startValue!==this._startValueAtBeginningOfAction||this.endValue!==this._endValueAtBeginningOfAction)&&this.fireEvent("change"),this._setIsPressInCurrentRange(!1),this.handleUpBase(),this.rangePressed=!1,this._startValueAtBeginningOfAction=void 0,this._endValueAtBeginningOfAction=void 0}_pressTargetAndAffectedValue(t,i){const s=this.shadowRoot.querySelector(".ui5-slider-handle--start"),n=this.shadowRoot.querySelector(".ui5-slider-handle--end"),r=s.getBoundingClientRect(),l=n.getBoundingClientRect(),o=t>=r.left&&t<=r.right,u=t>=l.left&&t<=l.right;(u||o)&&(this._handeIsPressed=!0),(u||i>this.endValue)&&this._setAffectedValue("endValue"),(o||i<this.startValue)&&this._setAffectedValue("startValue");const m=this._startValueAtBeginningOfAction!==void 0&&this._endValueAtBeginningOfAction!==void 0&&i>=this._startValueAtBeginningOfAction&&i<=this._endValueAtBeginningOfAction;this._setIsPressInCurrentRange(this._valueAffected||this._handeIsPressed?!1:m)}_setAffectedValue(t){this._valueAffected=t,this._areValuesReversed()&&this._setValuesAreReversed()}_setIsPressInCurrentRange(t){this._isPressInCurrentRange=t}focusInnerElement(){const t=this._areValuesReversed(),i=this._valueAffected;(this._isPressInCurrentRange||!i)&&this._progressBar.focus(),(i==="startValue"&&!t||i==="endValue"&&t)&&this._startHandle.focus(),(i==="endValue"&&!t||i==="startValue"&&t)&&this._endHandle.focus()}_calculateRangeOffset(t,i){if(this._initialPageXPosition===t)return[this.startValue,this.endValue];const s=this._effectiveMin,n=this._effectiveMax,r=this.endValue-this.startValue;let l=this._calculateStartValueByOffset(t,i);return l=this.constructor.clipValue(l,s,n-r),[l,l+r]}_calculateStartValueByOffset(t,i){const s=this._effectiveMin,n=this._effectiveMax,r=this._effectiveStep,l=this.getBoundingClientRect();let o,u,m;const v=this.constructor;return t>this._initialPageXPosition?(m=t-this._initialPageXPosition,u=i+m,o=v.computedValueFromPageX(u,s,n,l,this.directionStart),o=v.getSteppedValue(o,r,s)):(m=this._initialPageXPosition-t,u=i-m,o=v.computedValueFromPageX(u,s,n,l,this.directionStart),o=v.getSteppedValue(o,r,s)),o}_updateHandlesAndRange(t){const i=this._effectiveMax,s=this._effectiveMin,n=this.getStoredPropertyState("startValue")||0,r=this.getStoredPropertyState("endValue")||0,l=this._valueAffected;l==="startValue"?(this._selectedRange=(r-t)/(i-s),this._firstHandlePositionFromStart=(t-s)/(i-s)*100):l==="endValue"?(this._selectedRange=(t-n)/(i-s),this._secondHandlePositionFromStart=(t-s)/(i-s)*100):(this._selectedRange=(this.endValue-this.startValue)/(i-s),this._firstHandlePositionFromStart=(this.startValue-s)/(i-s)*100,this._secondHandlePositionFromStart=(this.endValue-s)/(i-s)*100)}_swapValues(){const t=this._valueAffected;if(t){if(t==="startValue"&&this.startValue>this.endValue){const i=this.endValue;this.endValue=this.startValue,this.startValue=i}if(t==="endValue"&&this.endValue<this.startValue){const i=this.startValue;this.startValue=this.endValue,this.endValue=i}this._setValuesAreReversed(),this._updateHandlesAndRange(this[t]),this.focusInnerElement(),this.syncUIAndState()}}_setValuesAreReversed(){this._reversedValues=!this._reversedValues}_areValuesReversed(){return this._reversedValues}get tickmarksObject(){const t=this._tickmarksCount,i=[];if(this._hiddenTickmarks)return[!1,!1];for(let s=0;s<=t;s++){const n=this._effectiveMin+s*this.step>=this.startValue,r=this._effectiveMin+s*this.step<=this.endValue;i.push(n&&r)}return i}get _startHandle(){return this.shadowRoot.querySelector(".ui5-slider-handle--start")}get _endHandle(){return this.shadowRoot.querySelector(".ui5-slider-handle--end")}get _progressBar(){return this.shadowRoot.querySelector(".ui5-slider-progress")}get _ariaLabelledByStartHandleRefs(){return[`${this._id}-accName`,`${this._id}-startHandleDesc`].join(" ").trim()}get _ariaLabelledByEndHandleRefs(){return[`${this._id}-accName`,`${this._id}-endHandleDesc`].join(" ").trim()}get _ariaLabelledByProgressBarRefs(){return[`${this._id}-accName`,`${this._id}-sliderDesc`].join(" ").trim()}get styles(){return{progress:{width:`${this._selectedRange*100}%`,"transform-origin":`${this.directionStart} top`,[this.directionStart]:`${this._firstHandlePositionFromStart}%`},startHandle:{[this.directionStart]:`${this._firstHandlePositionFromStart}%`},endHandle:{[this.directionStart]:`${this._secondHandlePositionFromStart}%`},label:{width:`${this._labelWidth}%`},labelContainer:{width:"100%",[this.directionStart]:`-${this._labelWidth/2}%`},tooltip:{visibility:`${this._tooltipVisibility}`}}}static async onDefine(){p.i18nBundle=await z("@ui5/webcomponents")}};y([w({validator:k,defaultValue:0})],_.prototype,"startValue",void 0);y([w({validator:k,defaultValue:100})],_.prototype,"endValue",void 0);y([w({type:Boolean})],_.prototype,"rangePressed",void 0);_=p=y([q({tag:"ui5-range-slider",languageAware:!0,template:ee,dependencies:[K],styles:[g.styles,le]})],_);_.define();const oe=_,de=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"})),f=j("ui5-range-slider",["endValue","startValue","accessibleName","labelInterval","max","min","step"],["disabled","showTickmarks","showTooltip"],[],["change","input"],()=>M(()=>Promise.resolve().then(()=>de),void 0,import.meta.url));f.displayName="RangeSlider";f.defaultProps={endValue:100,startValue:0,labelInterval:0,max:100,min:0,step:1};try{f.displayName="RangeSlider",f.__docgenInfo={description:`Represents a numerical interval and two handles (grips) to select a sub-range within it. The purpose of the component to enable visual selection of sub-ranges within a given interval.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/RangeSlider" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"RangeSlider",props:{onChange:{defaultValue:null,description:"Fired when the value changes and the user has finished interacting with the slider.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<RangeSliderDomRef, never>) => void"}},onInput:{defaultValue:null,description:"Fired when the value changes due to user interaction that is not yet finished - during mouse/touch dragging.",name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<RangeSliderDomRef, never>) => void"}},endValue:{defaultValue:{value:"100"},description:"Defines end point of a selection - position of a second handle on the slider.",name:"endValue",required:!1,type:{name:"number"}},startValue:{defaultValue:{value:"0"},description:"Defines start point of a selection - position of a first handle on the slider.",name:"startValue",required:!1,type:{name:"number"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Defines whether the slider is in disabled state.",name:"disabled",required:!1,type:{name:"boolean"}},labelInterval:{defaultValue:{value:"0"},description:`Displays a label with a value on every N-th step.

**Note:** The step and tickmarks properties must be enabled. Example - if the step value is set to 2 and the label interval is also specified to 2 - then every second tickmark will be labelled, which means every 4th value number.`,name:"labelInterval",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"Defines the maximum value of the slider.",name:"max",required:!1,type:{name:"number"}},min:{defaultValue:{value:"0"},description:"Defines the minimum value of the slider.",name:"min",required:!1,type:{name:"number"}},showTickmarks:{defaultValue:null,description:`Enables tickmarks visualization for each step.

**Note:** The step must be a positive number.`,name:"showTickmarks",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Enables handle tooltip displaying the current value.",name:"showTooltip",required:!1,type:{name:"boolean"}},step:{defaultValue:{value:"1"},description:`Defines the size of the slider's selection intervals (e.g. min = 0, max = 10, step = 5 would result in possible selection of the values 0, 5, 10).

**Note:** If set to 0 the slider handle movement is disabled. When negative number or value other than a number, the component fallbacks to its default value.`,name:"step",required:!1,type:{name:"number"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const ue=`## Structure

The most important properties of the Range Slider are:

- min - The minimum value of the slider range.
- max - The maximum value of the slider range.
- value - The current value of the slider.
- step - Determines the increments in which the slider will move.
- showTooltip - Determines if a tooltip should be displayed above the handle.
- showTickmarks - Displays a visual divider between the step values.
- labelInterval - Labels some or all of the tickmarks with their values.

### Notes:

- The right and left handle can be moved individually and their positions could therefore switch.
- The entire range can be moved along the interval.

## Usage

The most common use case is to select and move sub-ranges on a continuous numerical scale.

## Responsive Behavior

You can move the currently selected range by clicking on it and dragging it along the interval.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`RangeSlider\` exposes the following CSS Shadow Parts:

- progress-container - Used to style the progress container(the horizontal bar which visually represents the range between the minimum and maximum value) of the \`RangeSlider\`.
- progress-bar - Used to style the progress bar, which shows the progress of the \`RangeSlider\`.
- handle - Used to style the handles of the \`RangeSlider\`.

## Keyboard Handling

- \`Left or Down Arrow\` - Moves a component's handle or the entire selection one step to the left;
- \`Right or Up Arrow\` - Moves a component's handle or the entire selection one step to the right;
- \`Left or Down Arrow + Ctrl/Cmd\` - Moves a component's handle to the left or the entire range with step equal to 1/10th of the entire range;
- \`Right or Up Arrow + Ctrl/Cmd\` - Moves a component's handle to the right or the entire range with step equal to 1/10th of the entire range;
- \`Plus\` - Same as \`Right or Up Arrow\`;
- \`Minus\` - Same as \`Left or Down Arrow\`;
- \`Home\` - Moves the entire selection or the selected handle to the beginning of the component's range;
- \`End\` - Moves the entire selection or the selected handle to the end of the component's range;
- \`Page Up\` - Same as \`Right or Up Arrow + Ctrl/Cmd\`;
- \`Page Down\` - Same as \`Left or Down Arrow + Ctrl/Cmd\`;
- \`Escape\` - Resets the \`startValue\` and \`endValue\` properties to the values prior the component focusing;
`;function he(e={}){const{wrapper:t}=Object.assign({},I(),e.components);return t?d(t,{...e,children:d(i,{})}):i();function i(){const s=Object.assign({h2:"h2"},I(),e.components);return Q(Z,{children:[d(C,{title:"Inputs / RangeSlider",component:f,argTypes:{children:{control:{disable:!0}}}}),`
`,d(x,{since:"0.13.0"}),`
`,d("br",{}),`
`,d(s.h2,{children:"Example"}),`
`,d(O,{children:d(N,{name:"Default",children:n=>d(f,{...n})})}),`
`,d(s.h2,{children:"Properties"}),`
`,d(Y,{story:"Default"}),`
`,d(F,{children:ue}),`
`,d(J,{})]})}}const E=e=>d(f,{...e});E.storyName="Default";E.parameters={storySource:{source:`args => {
  return <RangeSlider {...args} />;
}`}};const b={title:"Inputs / RangeSlider",component:f,argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};b.parameters=b.parameters||{};b.parameters.docs={...b.parameters.docs||{},page:he};const Pt=["defaultStory"];export{Pt as __namedExportsOrder,b as default,E as defaultStory};
//# sourceMappingURL=RangeSlider.stories-7695e6ba.js.map
