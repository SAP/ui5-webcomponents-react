function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as E}from"./iframe-NvEupkM7.js";import{a as u,l as s,b as v,s as O,p as $,c as C,w as N}from"./withWebComponent-LTFbYRvs.js";import{F as k}from"./Float-0fEWDOdp.js";import{b as F}from"./i18nBundle-j8vDD4VY.js";import{i as L,g as M,f as S}from"./Keys-ZEuNsqmZ.js";import{S as p}from"./SliderBase-Gl-OxVOm.js";import{c as B,I as q}from"./Icon-kyep1SqZ.js";import{o as y}from"./class-map-gjOVarQw.js";import{s as h}from"./style-map-tejh5TI3.js";import{a0 as U,a1 as w,a2 as R}from"./i18n-defaults-X1FTyPSK.js";import{r as H}from"./Boot-vTaFuwdG.js";import{s as z}from"./parameters-bundle.css-EKzfhWK3.js";function j(r,e,t){return t?u`<div class="ui5-slider-root ${y(this.classes.root)}" @mousedown="${this._onmousedown}" @touchstart="${this._ontouchstart}" @mouseover="${this._onmouseover}" @mouseout="${this._onmouseout}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" part="root-container"><span id="${s(this._id)}-startHandleDesc" class="ui5-hidden-text">${s(this._ariaHandlesText.startHandleText)}</span><span id="${s(this._id)}-endHandleDesc" class="ui5-hidden-text">${s(this._ariaHandlesText.endHandleText)}</span><div class="ui5-slider-inner">${this.step?A.call(this,r,e,t):void 0}<div class="ui5-slider-progress-container" part="progress-container"><div class="ui5-slider-progress" part="progress-bar" style="${h(this.styles.progress)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" role="slider" tabindex="${s(this._tabIndex)}" aria-orientation="horizontal" aria-valuemin="${s(this.min)}" aria-valuemax="${s(this.max)}" aria-valuenow="${s(this._ariaValueNow)}" aria-valuetext="From ${s(this.startValue)} to ${s(this.endValue)}" aria-labelledby="${s(this._ariaLabelledByProgressBarRefs)}" aria-disabled="${s(this._ariaDisabled)}"></div></div><div class="ui5-slider-handle ui5-slider-handle--start" part="handle" style="${h(this.styles.startHandle)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" role="slider" tabindex="${s(this._tabIndex)}" aria-orientation="horizontal" aria-valuemin="${s(this.min)}" aria-valuemax="${s(this.max)}" aria-valuenow="${s(this.startValue)}" aria-labelledby="${s(this._ariaLabelledByStartHandleRefs)}" aria-disabled="${s(this._ariaDisabled)}"><${v("ui5-icon",e,t)} name="direction-arrows" slider-icon></${v("ui5-icon",e,t)}>${this.showTooltip?I.call(this,r,e,t):void 0}</div><div class="ui5-slider-handle ui5-slider-handle--end" part="handle" style="${h(this.styles.endHandle)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" role="slider" tabindex="${s(this._tabIndex)}" aria-orientation="horizontal" aria-valuemin="${s(this.min)}" aria-valuemax="${s(this.max)}" aria-valuenow="${s(this.endValue)}" aria-labelledby="${s(this._ariaLabelledByEndHandleRefs)}" aria-disabled="${s(this._ariaDisabled)}"><${v("ui5-icon",e,t)} name="direction-arrows" slider-icon></${v("ui5-icon",e,t)}>${this.showTooltip?x.call(this,r,e,t):void 0}</div></div><span id="${s(this._id)}-accName" class="ui5-hidden-text">${s(this.accessibleName)}</span><span id="${s(this._id)}-sliderDesc" class="ui5-hidden-text">${s(this._ariaLabelledByText)}</span></div> `:u`<div class="ui5-slider-root ${y(this.classes.root)}" @mousedown="${this._onmousedown}" @touchstart="${this._ontouchstart}" @mouseover="${this._onmouseover}" @mouseout="${this._onmouseout}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" part="root-container"><span id="${s(this._id)}-startHandleDesc" class="ui5-hidden-text">${s(this._ariaHandlesText.startHandleText)}</span><span id="${s(this._id)}-endHandleDesc" class="ui5-hidden-text">${s(this._ariaHandlesText.endHandleText)}</span><div class="ui5-slider-inner">${this.step?A.call(this,r,e,t):void 0}<div class="ui5-slider-progress-container" part="progress-container"><div class="ui5-slider-progress" part="progress-bar" style="${h(this.styles.progress)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" role="slider" tabindex="${s(this._tabIndex)}" aria-orientation="horizontal" aria-valuemin="${s(this.min)}" aria-valuemax="${s(this.max)}" aria-valuenow="${s(this._ariaValueNow)}" aria-valuetext="From ${s(this.startValue)} to ${s(this.endValue)}" aria-labelledby="${s(this._ariaLabelledByProgressBarRefs)}" aria-disabled="${s(this._ariaDisabled)}"></div></div><div class="ui5-slider-handle ui5-slider-handle--start" part="handle" style="${h(this.styles.startHandle)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" role="slider" tabindex="${s(this._tabIndex)}" aria-orientation="horizontal" aria-valuemin="${s(this.min)}" aria-valuemax="${s(this.max)}" aria-valuenow="${s(this.startValue)}" aria-labelledby="${s(this._ariaLabelledByStartHandleRefs)}" aria-disabled="${s(this._ariaDisabled)}"><ui5-icon name="direction-arrows" slider-icon></ui5-icon>${this.showTooltip?I.call(this,r,e,t):void 0}</div><div class="ui5-slider-handle ui5-slider-handle--end" part="handle" style="${h(this.styles.endHandle)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" role="slider" tabindex="${s(this._tabIndex)}" aria-orientation="horizontal" aria-valuemin="${s(this.min)}" aria-valuemax="${s(this.max)}" aria-valuenow="${s(this.endValue)}" aria-labelledby="${s(this._ariaLabelledByEndHandleRefs)}" aria-disabled="${s(this._ariaDisabled)}"><ui5-icon name="direction-arrows" slider-icon></ui5-icon>${this.showTooltip?x.call(this,r,e,t):void 0}</div></div><span id="${s(this._id)}-accName" class="ui5-hidden-text">${s(this.accessibleName)}</span><span id="${s(this._id)}-sliderDesc" class="ui5-hidden-text">${s(this._ariaLabelledByText)}</span></div> `}function A(r,e,t){return u`${this.showTickmarks?X.call(this,r,e,t):void 0}`}function X(r,e,t){return u`<ul class="ui5-slider-tickmarks">${B(this.tickmarksObject,(i,a)=>i._id||a,(i,a)=>W.call(this,r,e,t,i,a))}</ul>${this.labelInterval?Y.call(this,r,e,t):void 0}`}function W(r,e,t,i,a){return u`${i?K.call(this,r,e,t,i,a):G.call(this,r,e,t,i,a)}`}function K(r,e,t,i,a){return u`<li class="ui5-slider-tickmark ui5-slider-tickmark-in-range"></li>`}function G(r,e,t,i,a){return u`<li class="ui5-slider-tickmark"></li>`}function Y(r,e,t){return u`<ul class="ui5-slider-labels ${y(this.classes.labelContainer)}" style="${h(this.styles.labelContainer)}">${B(this._labels,(i,a)=>i._id||a,(i,a)=>J.call(this,r,e,t,i,a))}</ul>`}function J(r,e,t,i,a){return u`<li style="${h(this.styles.label)}">${s(i)}</li>`}function I(r,e,t){return u`<div class="ui5-slider-tooltip ui5-slider-tooltip--start" style="${h(this.styles.tooltip)}"><span class="ui5-slider-tooltip-value">${s(this.tooltipStartValue)}</span></div>`}function x(r,e,t){return u`<div class="ui5-slider-tooltip ui5-slider-tooltip--end" style="${h(this.styles.tooltip)}"><span class="ui5-slider-tooltip-value">${s(this.tooltipEndValue)}</span></div>`}H("@ui5/webcomponents-theming","sap_horizon",async()=>O);H("@ui5/webcomponents","sap_horizon",async()=>z);const Q={packageName:"@ui5/webcomponents",fileName:"themes/RangeSlider.css.ts",content:`:host([ui5-range-slider]) .ui5-slider-progress-container:before{background-color:var(--_ui5-v1-23-1_slider_progress_container_dot_background)}.ui5-slider-root:hover:active .ui5-slider-handle:not(:focus){background:var(--sapSlider_RangeHandleBackground)}:host([range-pressed]) .ui5-slider-root:active .ui5-slider-handle:not(:focus){background:var(--_ui5-v1-23-1_range_slider_handle_active_background);border:var(--_ui5-v1-23-1_slider_handle_focus_border);box-shadow:none}:host([range-pressed]) .ui5-slider-handle [slider-icon]{display:var(--_ui5-v1-23-1_range_slider_active_handle_icon_display)}.ui5-slider-root:not(.ui5-slider-root-phone):focus .ui5-slider-inner .ui5-slider-handle,.ui5-slider-root:not(.ui5-slider-root-phone) .ui5-slider-inner .ui5-slider-handle:focus{background:var(--_ui5-v1-23-1_range_slider_handle_background_focus)}.ui5-slider-root:not(.ui5-slider-root-phone) .ui5-slider-inner .ui5-slider-handle:focus [slider-icon]{display:none}.ui5-slider-root:not(.ui5-slider-root-phone) .ui5-slider-progress:focus:before{display:var(--_ui5-v1-23-1_range_slider_legacy_progress_focus_display);content:"";position:absolute;width:var(--_ui5-v1-23-1_range_slider_focus_outline_width);border:var(--_ui5-v1-23-1_slider_progress_outline);border-radius:var(--_ui5-v1-23-1_range_slider_focus_outline_radius);top:var(--_ui5-v1-23-1_slider_progress_outline_offset);height:var(--_ui5-v1-23-1_slider_outer_height);box-sizing:border-box;left:var(--_ui5-v1-23-1_slider_progress_outline_offset_left)}.ui5-slider-progress{position:relative}.ui5-slider-progress:focus:after{border:.125rem solid var(--sapContent_FocusColor);border-radius:.5rem;content:"";display:var(--_ui5-v1-23-1_range_slider_progress_focus_display);position:absolute;top:var(--_ui5-v1-23-1_range_slider_progress_focus_top);left:var(--_ui5-v1-23-1_range_slider_progress_focus_left);padding:var(--_ui5-v1-23-1_range_slider_progress_focus_padding);width:var(--_ui5-v1-23-1_range_slider_progress_focus_width);height:var(--_ui5-v1-23-1_range_slider_progress_focus_height);box-sizing:border-box}.ui5-slider-handle{background:var(--_ui5-v1-23-1_range_slider_handle_background)}.ui5-slider-progress-container:hover~.ui5-slider-handle:not(:focus),.ui5-slider-handle:hover{background:var(--_ui5-v1-23-1_range_slider_root_hover_handle_bg)}.ui5-slider-root:hover .ui5-slider-handle:not(:focus) [slider-icon]{display:var(--_ui5-v1-23-1_range_slider_root_hover_handle_icon_display)}:host([range-pressed]) .ui5-slider-root:active .ui5-slider-handle:not(:focus) [slider-icon]{display:var(--_ui5-v1-23-1_range_slider_root_active_handle_icon_display)}
`};var b=function(r,e,t,i){var a=arguments.length,n=a<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,i);else for(var l=r.length-1;l>=0;l--)(o=r[l])&&(n=(a<3?o(n):a>3?o(e,t,n):o(e,t))||n);return a>3&&n&&Object.defineProperty(e,t,n),n},c;let f=c=class extends p{constructor(){super(),this._isPressInCurrentRange=!1,this._handeIsPressed=!1,this._reversedValues=!1,this._stateStorage.startValue=void 0,this._stateStorage.endValue=void 0}get tooltipStartValue(){const t=this.constructor._getDecimalPrecisionOfNumber(this._effectiveStep);return this.startValue.toFixed(t)}get tooltipEndValue(){const t=this.constructor._getDecimalPrecisionOfNumber(this._effectiveStep);return this.endValue.toFixed(t)}get _ariaDisabled(){return this.disabled||void 0}get _ariaLabelledByText(){return c.i18nBundle.getText(U)}get _ariaHandlesText(){const e=this.effectiveDir==="rtl",t=this._areValuesReversed(),i={};return e&&!t||!e&&t?(i.startHandleText=c.i18nBundle.getText(w),i.endHandleText=c.i18nBundle.getText(R)):(i.startHandleText=c.i18nBundle.getText(R),i.endHandleText=c.i18nBundle.getText(w)),i}get _ariaValueNow(){return Math.abs(this.endValue-this.startValue)}onBeforeRendering(){if(this.startValue>this.endValue){const e=this._valueAffected==="startValue"?"endValue":"startValue";this._swapValues(),this._setAffectedValue(e),this.update(e,this.startValue,this.endValue)}this.isCurrentStateOutdated()&&(this.notResized=!0,this.syncUIAndState(),this._updateHandlesAndRange(0))}syncUIAndState(){if(this.isPropertyUpdated("step")&&(this._validateStep(this.step),this.storePropertyState("step")),this.isPropertyUpdated("min","max","startValue","endValue")){this.storePropertyState("min","max");const e=p.clipValue(this.startValue,this._effectiveMin,this._effectiveMax);this.startValue=e,this.updateStateStorageAndFireInputEvent("startValue"),this.storePropertyState("startValue");const t=p.clipValue(this.endValue,this._effectiveMin,this._effectiveMax);this.endValue=t,this.updateStateStorageAndFireInputEvent("endValue"),this.storePropertyState("endValue")}this.labelInterval&&this.showTickmarks&&this._createLabels(),this.isPropertyUpdated("labelInterval")&&this.storePropertyState("labelInterval")}_onfocusin(){this._endValueInitial||(this._startValueInitial=this.startValue,this._endValueInitial=this.endValue),this.showTooltip&&(this._tooltipVisibility=p.TOOLTIP_VISIBILITY.VISIBLE)}_onfocusout(){if(this._isFocusing()){this._preventFocusOut();return}this._setAffectedValue(void 0),this._startValueInitial=void 0,this._endValueInitial=void 0,this.showTooltip&&(this._tooltipVisibility=p.TOOLTIP_VISIBILITY.HIDDEN)}_onkeyup(){super._onkeyup(),this._setAffectedValue(void 0),(this.startValue!==this._startValueAtBeginningOfAction||this.endValue!==this._endValueAtBeginningOfAction)&&this.fireEvent("change"),this._startValueAtBeginningOfAction=void 0,this._endValueAtBeginningOfAction=void 0}_handleActionKeyPress(e){if(this._startValueAtBeginningOfAction=this.startValue,this._endValueAtBeginningOfAction=this.endValue,L(e)){this.update(void 0,this._startValueInitial,this._endValueInitial);return}this._setAffectedValueByFocusedElement();const t=this._effectiveMin,i=this._effectiveMax,a=this._valueAffected;if((M(e)||S(e))&&!a){this._homeEndForSelectedRange(e,S(e)?"startValue":"endValue",t,i);return}const n=this._handleActionKeyPressBase(e,a);if(!n)return;const o=this.constructor;if(a&&!this._isPressInCurrentRange){const l=this[a],d=o.clipValue(n+l,t,i);this.update(a,d,void 0)}else if(n<0&&this.startValue>t||n>0&&this.endValue<i){const l=o.clipValue(n+this.startValue,t,i),d=o.clipValue(n+this.endValue,t,i);this.update(a,l,d)}}_setAffectedValueByFocusedElement(){this.shadowRoot.activeElement===this._startHandle&&this._setAffectedValue("startValue"),this.shadowRoot.activeElement===this._endHandle&&this._setAffectedValue("endValue"),this.shadowRoot.activeElement===this._progressBar&&this._setAffectedValue(void 0),this._setIsPressInCurrentRange(!this._valueAffected)}_homeEndForSelectedRange(e,t,i,a){const n=this._handleActionKeyPressBase(e,t),o=this.constructor,l=o.clipValue(n+this.startValue,i,a),d=o.clipValue(n+this.endValue,i,a);this.update(void 0,l,d)}update(e,t,i){if(!e)this.startValue=t,this.updateStateStorageAndFireInputEvent("startValue"),this.endValue=i,this.updateStateStorageAndFireInputEvent("endValue"),this._updateHandlesAndRange(0);else{const a=i&&e==="endValue"?i:t;this._updateHandlesAndRange(a||0),e==="startValue"&&(this.startValue=a,this.updateStateStorageAndFireInputEvent("startValue")),e==="endValue"&&(this.endValue=a,this.updateStateStorageAndFireInputEvent("endValue"))}}_onmousedown(e){if(this.disabled||this._effectiveStep===0)return;const t=this.handleDownBase(e);if(this._saveInteractionStartData(e,t),this.rangePressed=this._isPressInCurrentRange,this._isPressInCurrentRange||this._handeIsPressed){this._handeIsPressed=!1;return}this.update(this._valueAffected,t,void 0)}_saveInteractionStartData(e,t){const i=this.shadowRoot.querySelector(".ui5-slider-progress").getBoundingClientRect();this._startValueAtBeginningOfAction=this.startValue,this._endValueAtBeginningOfAction=this.endValue;const a=this.constructor;this._initialPageXPosition=a.getPageXValueFromEvent(e),this._pressTargetAndAffectedValue(this._initialPageXPosition,t),this._initialStartHandlePageX=this.directionStart==="left"?i.left:i.right}_handleMove(e){if(e.preventDefault(),!(this.disabled||this._effectiveStep===0)){if(!this._isPressInCurrentRange){this._updateValueOnHandleDrag(e);return}this._updateValueOnRangeDrag(e)}}_updateValueOnHandleDrag(e){const i=this.constructor.getValueFromInteraction(e,this._effectiveStep,this._effectiveMin,this._effectiveMax,this.getBoundingClientRect(),this.directionStart);this.update(this._valueAffected,i,void 0)}_updateValueOnRangeDrag(e){const i=this.constructor.getPageXValueFromEvent(e),a=this._calculateRangeOffset(i,this._initialStartHandlePageX);this._setAffectedValue(void 0),this.update(void 0,a[0],a[1])}_handleUp(){this._setAffectedValueByFocusedElement(),this._setAffectedValue(void 0),(this.startValue!==this._startValueAtBeginningOfAction||this.endValue!==this._endValueAtBeginningOfAction)&&this.fireEvent("change"),this._setIsPressInCurrentRange(!1),this.handleUpBase(),this.rangePressed=!1,this._startValueAtBeginningOfAction=void 0,this._endValueAtBeginningOfAction=void 0}_pressTargetAndAffectedValue(e,t){const i=this.shadowRoot.querySelector(".ui5-slider-handle--start"),a=this.shadowRoot.querySelector(".ui5-slider-handle--end"),n=i.getBoundingClientRect(),o=a.getBoundingClientRect(),l=e>=n.left&&e<=n.right,d=e>=o.left&&e<=o.right;(d||l)&&(this._handeIsPressed=!0),(d||t>this.endValue)&&this._setAffectedValue("endValue"),(l||t<this.startValue)&&this._setAffectedValue("startValue");const _=this._startValueAtBeginningOfAction!==void 0&&this._endValueAtBeginningOfAction!==void 0&&t>=this._startValueAtBeginningOfAction&&t<=this._endValueAtBeginningOfAction;this._setIsPressInCurrentRange(this._valueAffected||this._handeIsPressed?!1:_)}_setAffectedValue(e){this._valueAffected=e,this._areValuesReversed()&&this._setValuesAreReversed()}_setIsPressInCurrentRange(e){this._isPressInCurrentRange=e}focusInnerElement(){const e=this._areValuesReversed(),t=this._valueAffected;(this._isPressInCurrentRange||!t)&&this._progressBar.focus(),(t==="startValue"&&!e||t==="endValue"&&e)&&this._startHandle.focus(),(t==="endValue"&&!e||t==="startValue"&&e)&&this._endHandle.focus()}_calculateRangeOffset(e,t){if(this._initialPageXPosition===e)return[this.startValue,this.endValue];const i=this._effectiveMin,a=this._effectiveMax,n=this.endValue-this.startValue;let o=this._calculateStartValueByOffset(e,t);return o=this.constructor.clipValue(o,i,a-n),[o,o+n]}_calculateStartValueByOffset(e,t){const i=this._effectiveMin,a=this._effectiveMax,n=this._effectiveStep,o=this.getBoundingClientRect();let l,d,_;const g=this.constructor;return e>this._initialPageXPosition?(_=e-this._initialPageXPosition,d=t+_,l=g.computedValueFromPageX(d,i,a,o,this.directionStart),l=g.getSteppedValue(l,n,i)):(_=this._initialPageXPosition-e,d=t-_,l=g.computedValueFromPageX(d,i,a,o,this.directionStart),l=g.getSteppedValue(l,n,i)),l}_updateHandlesAndRange(e){const t=this._effectiveMax,i=this._effectiveMin,a=this.getStoredPropertyState("startValue")||0,n=this.getStoredPropertyState("endValue")||0,o=this._valueAffected;o==="startValue"?(this._selectedRange=(n-e)/(t-i),this._firstHandlePositionFromStart=(e-i)/(t-i)*100):o==="endValue"?(this._selectedRange=(e-a)/(t-i),this._secondHandlePositionFromStart=(e-i)/(t-i)*100):(this._selectedRange=(this.endValue-this.startValue)/(t-i),this._firstHandlePositionFromStart=(this.startValue-i)/(t-i)*100,this._secondHandlePositionFromStart=(this.endValue-i)/(t-i)*100)}_swapValues(){const e=this._valueAffected;if(e){if(e==="startValue"&&this.startValue>this.endValue){const t=this.endValue;this.endValue=this.startValue,this.startValue=t}if(e==="endValue"&&this.endValue<this.startValue){const t=this.startValue;this.startValue=this.endValue,this.endValue=t}this._setValuesAreReversed(),this._updateHandlesAndRange(this[e]),this.focusInnerElement(),this.syncUIAndState()}}_setValuesAreReversed(){this._reversedValues=!this._reversedValues}_areValuesReversed(){return this._reversedValues}get tickmarksObject(){const e=this._tickmarksCount,t=[];if(this._hiddenTickmarks)return[!1,!1];for(let i=0;i<=e;i++){const a=this._effectiveMin+i*this.step>=this.startValue,n=this._effectiveMin+i*this.step<=this.endValue;t.push(a&&n)}return t}get _startHandle(){return this.shadowRoot.querySelector(".ui5-slider-handle--start")}get _endHandle(){return this.shadowRoot.querySelector(".ui5-slider-handle--end")}get _progressBar(){return this.shadowRoot.querySelector(".ui5-slider-progress")}get _ariaLabelledByStartHandleRefs(){return[`${this._id}-accName`,`${this._id}-startHandleDesc`].join(" ").trim()}get _ariaLabelledByEndHandleRefs(){return[`${this._id}-accName`,`${this._id}-endHandleDesc`].join(" ").trim()}get _ariaLabelledByProgressBarRefs(){return[`${this._id}-accName`,`${this._id}-sliderDesc`].join(" ").trim()}get styles(){return{progress:{width:`${this._selectedRange*100}%`,"transform-origin":`${this.directionStart} top`,[this.directionStart]:`${this._firstHandlePositionFromStart}%`},startHandle:{[this.directionStart]:`${this._firstHandlePositionFromStart}%`},endHandle:{[this.directionStart]:`${this._secondHandlePositionFromStart}%`},label:{width:`${this._labelWidth}%`},labelContainer:{width:"100%",[this.directionStart]:`-${this._labelWidth/2}%`},tooltip:{visibility:`${this._tooltipVisibility}`}}}static async onDefine(){c.i18nBundle=await F("@ui5/webcomponents")}};b([$({validator:k,defaultValue:0})],f.prototype,"startValue",void 0);b([$({validator:k,defaultValue:100})],f.prototype,"endValue",void 0);b([$({type:Boolean})],f.prototype,"rangePressed",void 0);f=c=b([C({tag:"ui5-range-slider",languageAware:!0,template:j,dependencies:[q],styles:[p.styles,Q]})],f);f.define();const Z=f,ee=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"})),V=N("ui5-range-slider",["accessibleName","endValue","labelInterval","max","min","startValue","step"],["disabled","showTickmarks","showTooltip"],[],["change","input"],()=>E(()=>Promise.resolve().then(()=>ee),void 0,import.meta.url));V.displayName="RangeSlider";try{V.displayName="RangeSlider",V.__docgenInfo={description:`Represents a numerical interval and two handles (grips) to select a sub-range within it.
The purpose of the component to enable visual selection of sub-ranges within a given interval.

### Structure
The most important properties of the Range Slider are:

- min - The minimum value of the slider range.
- max - The maximum value of the slider range.
- value - The current value of the slider.
- step - Determines the increments in which the slider will move.
- showTooltip - Determines if a tooltip should be displayed above the handle.
- showTickmarks - Displays a visual divider between the step values.
- labelInterval - Labels some or all of the tickmarks with their values.

#### Notes:

- The right and left handle can be moved individually and their positions could therefore switch.
- The entire range can be moved along the interval.

### Usage
The most common use case is to select and move sub-ranges on a continuous numerical scale.

### Responsive Behavior
You can move the currently selected range by clicking on it and dragging it along the interval.

### Keyboard Handling

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



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"RangeSlider",props:{onChange:{defaultValue:null,description:"Fired when the value changes and the user has finished interacting with the slider.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<RangeSliderDomRef, never>) => void"}},onInput:{defaultValue:null,description:"Fired when the value changes due to user interaction that is not yet finished - during mouse/touch dragging.",name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<RangeSliderDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Defines whether the slider is in disabled state.",name:"disabled",required:!1,type:{name:"boolean"}},endValue:{defaultValue:{value:"100"},description:"Defines end point of a selection - position of a second handle on the slider.",name:"endValue",required:!1,type:{name:"number"}},labelInterval:{defaultValue:{value:"0"},description:`Displays a label with a value on every N-th step.

**Note:** The step and tickmarks properties must be enabled.
Example - if the step value is set to 2 and the label interval is also specified to 2 - then every second
tickmark will be labelled, which means every 4th value number.`,name:"labelInterval",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"Defines the maximum value of the slider.",name:"max",required:!1,type:{name:"number"}},min:{defaultValue:{value:"0"},description:"Defines the minimum value of the slider.",name:"min",required:!1,type:{name:"number"}},showTickmarks:{defaultValue:{value:"false"},description:`Enables tickmarks visualization for each step.

**Note:** The step must be a positive number.`,name:"showTickmarks",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:{value:"false"},description:"Enables handle tooltip displaying the current value.",name:"showTooltip",required:!1,type:{name:"boolean"}},startValue:{defaultValue:{value:"0"},description:"Defines start point of a selection - position of a first handle on the slider.",name:"startValue",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:`Defines the size of the slider's selection intervals (e.g. min = 0, max = 10, step = 5 would result in possible selection of the values 0, 5, 10).

**Note:** If set to 0 the slider handle movement is disabled. When negative number or value other than a number, the component fallbacks to its default value.`,name:"step",required:!1,type:{name:"number"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const te={title:"Inputs / RangeSlider",component:V,argTypes:{children:{control:{disable:!0}}},args:{},tags:["package:@ui5/webcomponents"]},m={};var P,D,T;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:"{}",...(T=(D=m.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const ie=["Default"],me=Object.freeze(Object.defineProperty({__proto__:null,Default:m,__namedExportsOrder:ie,default:te},Symbol.toStringTag,{value:"Module"}));export{me as C,m as D};
