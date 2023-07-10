import{k as D,a as z,U as F}from"./UI5Element-78be0f3d.js";import{a as R,b as A,p as d,c as C,d as q}from"./withWebComponent-d4224c1c.js";import{e as w}from"./Icon-70a9e5b9.js";import{F as m}from"./Float-99d99064.js";import{I as H}from"./Integer-f7f172c9.js";import{R as k}from"./ResizeHandler-15c77712.js";import{i as U,s as y}from"./Device-99b8bbf4.js";import{j as N,q as x,s as I,o as E,p as S,K as h,L as p,J as v,I as f,a4 as T,a5 as V,m as M,n as P,t as b,u as g,d as K}from"./Icons-26e87c01.js";const j="direction-arrows",B="M507 244q5 5 5 12 0 6-5 11L394 379q-5 5-12 5-6 0-11-5t-5-11V144q0-12 10-15 2-1 6-1 8 0 12 4zM135 129q10 3 10 15v224q0 6-4.5 11t-11.5 5q-6 0-11-5L5 267q-5-5-5-11 0-7 5-12l113-112q4-4 11-4 4 0 6 1z",$=!1,W="SAP-icons-v4",X="@ui5/webcomponents-icons";N(j,{pathData:B,ltr:$,collection:W,packageName:X});const Y="direction-arrows",L="M504 237q8 8 8 19t-8 19L395 377q-7 7-17 7t-18-7.5-8-18.5V154q0-11 8-18.5t19-7.5q9 0 16 7zM135 128q11 0 18 7.5t7 18.5v204q0 12-8 19t-18 7-17-7L8 275q-8-8-8-19t8-19l109-102q7-7 18-7z",J=!1,G="SAP-icons-v5",Q="@ui5/webcomponents-icons";N(Y,{pathData:L,ltr:J,collection:G,packageName:Q});D();z("@ui5/webcomponents-theming","sap_fiori_3",async()=>R);z("@ui5/webcomponents","sap_fiori_3",async()=>A);const Z={packageName:"@ui5/webcomponents",fileName:"themes/SliderBase.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}

:host([disabled]) {
	opacity: var(--_ui5_slider_disabled_opacity);
	cursor: default;
	pointer-events: none;
}

:host {
	box-sizing: border-box;
	cursor: pointer;
	vertical-align: top;
	width: 100%;
}

:host(:not([hidden])) {
	display: inline-block;
}

.ui5-slider-root {
	box-sizing: border-box;
	height: 3.3125rem;
	outline: none;
	padding: var(--_ui5_slider_padding);
	touch-action: none;
}

.ui5-slider-inner {
	background-repeat: no-repeat;
	position: relative;
	min-width: var(--_ui5_slider_inner_min_width);
	height: 100%;
}

.ui5-slider-progress-container {
	width: 100%;
	background: var(--_ui5_slider_progress_container_background);
	border: var(--_ui5_slider_progress_border);
	border-radius: var(--_ui5_slider_progress_border_radius);
	height: var(--_ui5_slider_inner_height);
	position: relative;
	box-sizing: var(--_ui5_slider_progress_box_sizing);
	top: var(--_ui5_slider_progress_container_top);
}

.ui5-slider-progress-container::before,
.ui5-slider-progress-container::after {
	display: var(--_ui5_slider_progress_container_dot_display);
	content: "";
	position: absolute;
	border-radius: 50%;
	width: var(--_ui5_slider_start_end_point_size);
	height: var(--_ui5_slider_start_end_point_size);
	top: var(--_ui5_slider_start_end_point_top);
}

.ui5-slider-progress-container::before {
	inset-inline-start: var(--_ui5_slider_start_end_point_left);
	background-color: var(--_ui5_slider_progress_before_background);
	border: var(--_ui5_slider_progress_before_border);
}

.ui5-slider-progress-container::after {
	inset-inline-end: var(--_ui5_slider_start_end_point_left);
	background-color: var(--_ui5_slider_progress_after_background);
	border: var(--_ui5_slider_progress_after_border);
}

.ui5-slider-progress {
	background: var(--_ui5_slider_progress_background);
	border-radius: var(--_ui5_slider_progress_border_radius);
	height: var(--_ui5_slider_progress_height);
	position: relative;
	outline: none;
	box-sizing: border-box;
	border: var(--_ui5_slider_active_progress_border);
	left: var(--_ui5_slider_active_progress_left);
	top: var(--_ui5_slider_active_progress_top);
}

.ui5-slider-tickmarks {
	list-style: none;
	padding: 0;
	margin: 0;
	top: var(--_ui5_slider_tickmark_top);
	display: flex;
	box-sizing: border-box;
	width: 100%;
	justify-content: space-between;
	position: absolute;
	z-index: 1;
}

.ui5-slider-tickmarks li {
	height: var(--_ui5_slider_tickmark_height);
	border-inline-start: 1px solid var(--_ui5_slider_tickmark_bg);
}

.ui5-slider-handle {
	background: var(--_ui5_slider_handle_background);
	border: var(--_ui5_slider_handle_border);
	border-radius: var(--_ui5_slider_handle_border_radius);
	box-shadow: var(--_ui5_slider_handle_box_shadow);
	margin-inline-start: calc(-1 * var(--_ui5_slider_handle_width) / 2);
	top: var(--_ui5_slider_handle_top);
	position: absolute;
	outline: none;
	height: var(--_ui5_slider_handle_height);
	width: var(--_ui5_slider_handle_width);
	box-sizing: var(--_ui5_slider_handle_box_sizing);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 2;
}

[slider-icon] {
	display: var(--_ui5_slider_handle_icon_display);
	color: var(--sapContent_Selected_ForegroundColor);
	width: var(--_ui5_slider_handle_icon_size);
	height: var(--_ui5_slider_handle_icon_size);
}

.ui5-slider-progress-container:hover ~ .ui5-slider-handle:not(:focus),
.ui5-slider-handle:hover {
	background: var(--_ui5_slider_handle_hover_background);
	border: var(--_ui5_slider_handle_hover_border);
	box-shadow: var(--_ui5_slider_handle_hover_box_shadow);
}

.ui5-slider-root:focus .ui5-slider-inner .ui5-slider-handle,
.ui5-slider-handle:not(:active):focus {
	outline: var(--_ui5_slider_handle_outline);
	outline-offset: var(--_ui5_slider_handle_outline_offset);
	border: var(--_ui5_slider_handle_focus_border);
	box-shadow: var(--_ui5_slider_handle_box_shadow_focus);
	background: var(--_ui5_slider_handle_background_focus);
}

.ui5-slider-root:active .ui5-slider-handle:focus,
.ui5-slider-handle:focus:active {
	background: var(--_ui5_slider_handle_hover_background);
	border: var(--_ui5_slider_handle_active_border);
	box-shadow: var(--_ui5_slider_handle_active_box_shadow);
	outline: var(--_ui5_slider_handle_active_focused_outline);
}

.ui5-slider-handle.ui5-slider-handle--start:focus,
.ui5-slider-handle--end:focus {
	border: var(--_ui5_slider_handle_focus_border);
}

.ui5-slider-root:focus:hover .ui5-slider-handle,
.ui5-slider-handle:focus:hover {
	border: var(--_ui5_slider_handle_focus_border);
}

.ui5-slider-tooltip {
	display: flex;
	justify-content: center;
	align-items: center;
	visibility: hidden;
	pointer-events: none;
	line-height: 1rem;
	position: absolute;
	left: 50%;
	transform: translate(-50%);
	bottom: var(--_ui5_slider_tooltip_bottom);
	background: var(--_ui5_slider_tooltip_background);
	border: var(--_ui5_slider_tooltip_border);
	border-radius: var(--_ui5_slider_tooltip_border_radius);
	box-shadow: var(--_ui5_slider_tooltip_box_shadow);
	font-size: var(--_ui5_slider_tooltip_fontsize);
	color: var(--_ui5_slider_tooltip_color);
	height: var(--_ui5_slider_tooltip_height);
	min-width: var(--_ui5_slider_tooltip_min_width);
	padding: var(--_ui5_slider_tooltip_padding);
	box-sizing: var(--_ui5_slider_tooltip_border_box);
}

.ui5-slider-tooltip-value {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
}

.ui5-slider-labels {
	position: absolute;
	top: 1.25rem;
	margin: 0;
	padding: 0;
	white-space: nowrap;
}

.ui5-slider-labels li {
	position: relative;
	list-style: none;
	padding-top: 0.3125rem;
	height: 1rem;
	margin: 0;
	text-align: center;
	display: inline-block;
	color: var(--_ui5_slider_label_color);
	font-size: var(--_ui5_slider_label_fontsize);
	padding-top: 0;
	box-sizing: border-box;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	vertical-align: top;
}

.ui5-slider-hidden-labels li:not(:first-child):not(:last-child) {
	visibility: hidden;
}

.ui5-slider-handle:focus .ui5-slider-tooltip {
	bottom: var(--_ui5_slider_handle_focused_tooltip_distance);
}

.ui5-slider-tickmarks li.ui5-slider-tickmark-in-range {
	border-inline-start: 1px solid var(--_ui5_slider_tickmark_in_range_bg);
}

:host([show-tickmarks]) .ui5-slider-progress {
	height: var(--_ui5_slider_no_tickmarks_progress_height);
	border: var(--_ui5_slider_no_tickmarks_active_progress_border);
	left: var(--_ui5_slider_no_tickmarks_active_progress_left);
	top: var(--_ui5_slider_no_tickmarks_active_progress_top);
}

:host([show-tickmarks]) .ui5-slider-progress-container {
	top: var(--_ui5_slider_no_tickmarks_progress_container_top);
}

.ui5-slider-handle:focus:after {
	content: "";
	display: var(--_ui5_slider_handle_focus_visibility);
	width: calc(100% + (var(--sapContent_FocusWidth) * 2) + 2px);
	height: calc(100% + (var(--sapContent_FocusWidth) * 2) + 2px);
	border: var(--sapContent_FocusWidth) dotted var(--sapContent_FocusColor);
	position: absolute;
	border-radius: var(--_ui5_slider_handle_border_radius);
	pointer-events: none;
}
`};var l=globalThis&&globalThis.__decorate||function(c,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(c,e,t,i);else for(var a=c.length-1;a>=0;a--)(s=c[a])&&(n=(r<3?s(n):r>3?s(e,t,n):s(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n},_;let o=_=class extends F{constructor(){super(),this.notResized=!1,this._isUserInteraction=!1,this._isInnerElementFocusing=!1,this._labelWidth=0,this._resizeHandler=this._handleResize.bind(this),this._moveHandler=this._handleMove.bind(this),this._upHandler=this._handleUp.bind(this),this._stateStorage={step:void 0,min:void 0,max:void 0,labelInterval:void 0};const e=t=>{this._onmousedown(t)};this._ontouchstart={handleEvent:e,passive:!0}}_handleMove(e){}_handleUp(){}_onmousedown(e){}_handleActionKeyPress(e){}static get ACTION_KEYS(){return[x,I,E,S,h,p,v,f,T,V,M,P,b,g,K]}static get MIN_SPACE_BETWEEN_TICKMARKS(){return 8}static get TOOLTIP_VISIBILITY(){return{VISIBLE:"visible",HIDDEN:"hidden"}}get classes(){return{root:{"ui5-slider-root-phone":U()},labelContainer:{"ui5-slider-hidden-labels":this._labelsOverlapping}}}onEnterDOM(){k.register(this,this._resizeHandler)}onExitDOM(){k.deregister(this,this._resizeHandler)}onAfterRendering(){this.notResized&&this._resizeHandler()}_onmouseover(){this.showTooltip&&(this._tooltipVisibility=_.TOOLTIP_VISIBILITY.VISIBLE)}_onmouseout(){this.showTooltip&&!this.shadowRoot.activeElement&&(this._tooltipVisibility=_.TOOLTIP_VISIBILITY.HIDDEN)}_onkeydown(e){this.disabled||this._effectiveStep===0||_._isActionKey(e)&&(e.preventDefault(),this._isUserInteraction=!0,this._handleActionKeyPress(e))}_onkeyup(){this.disabled||(this._isUserInteraction=!1)}_preserveFocus(e){this._isInnerElementFocusing=e}_isFocusing(){return this._isInnerElementFocusing}_preventFocusOut(){this.focusInnerElement()}focusInnerElement(){this.focus()}_handleResize(){if(!this.showTickmarks||(this.notResized=!1,this._spaceBetweenTickmarks()<_.MIN_SPACE_BETWEEN_TICKMARKS?(this._hiddenTickmarks=!0,this._labelsOverlapping=!0):this._hiddenTickmarks=!1,this.labelInterval<=0||this._hiddenTickmarks))return;const t=this.shadowRoot.querySelectorAll(".ui5-slider-labels li");this._labelsOverlapping=[...t].some(i=>i.scrollWidth>i.clientWidth)}handleDownBase(e){const t=this._effectiveMin,i=this._effectiveMax,r=this.getBoundingClientRect(),n=this.directionStart,s=this._effectiveStep,a=_.getValueFromInteraction(e,s,t,i,r,n);return this._isUserInteraction=!0,window.addEventListener("mouseup",this._upHandler),window.addEventListener("touchend",this._upHandler),y()&&e instanceof TouchEvent?window.addEventListener("touchmove",this._moveHandler):window.addEventListener("mousemove",this._moveHandler),this._handleFocusOnMouseDown(e),a}_handleFocusOnMouseDown(e){const t=this.shadowRoot.activeElement;(!t||t!==e.target)&&(this._preserveFocus(!0),this.focusInnerElement())}handleUpBase(){window.removeEventListener("mouseup",this._upHandler),window.removeEventListener("touchend",this._upHandler),window.removeEventListener("mousemove",this._moveHandler),window.removeEventListener("touchmove",this._moveHandler),this._isUserInteraction=!1,this._preserveFocus(!1)}updateStateStorageAndFireInputEvent(e){this.storePropertyState(e),this._isUserInteraction&&this.fireEvent("input")}static _isActionKey(e){return this.ACTION_KEYS.some(t=>t(e))}static clipValue(e,t,i){return e=Math.min(Math.max(e,t),i),e}static getValueFromInteraction(e,t,i,r,n,s){const a=this.getPageXValueFromEvent(e),u=this.computedValueFromPageX(a,i,r,n,s),O=this.getSteppedValue(u,t,i);return this.clipValue(O,i,r)}static getSteppedValue(e,t,i){const r=Math.abs((e-i)%t);if(t===0||r===0)return e;e=r*2>=t?e+t-r:e-r;const n=_._getDecimalPrecisionOfNumber(t);return Number(e.toFixed(n))}static getPageXValueFromEvent(e){return y()&&e instanceof TouchEvent?e.targetTouches&&e.targetTouches.length>0?e.targetTouches[0].pageX:0:e.pageX}static computedValueFromPageX(e,t,i,r,n){const a=(n==="left"?e-r[n]:r[n]-e)/r.width;return t+a*(i-t)}static _getDecimalPrecisionOfNumber(e){if(Number.isInteger(e))return 0;const t=String(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return!t||t.length<2?0:Math.max(0,(t[1]?t[1].length:0)-(t[2]?Number(t[2]):0))}isCurrentStateOutdated(){return Object.entries(this._stateStorage).some(([e,t])=>this[e]!==t)}getStoredPropertyState(e){return this._stateStorage[e]}isPropertyUpdated(...e){return e.some(t=>this.getStoredPropertyState(t)!==this[t])}storePropertyState(...e){e.forEach(t=>{this._stateStorage[t]=this[t]})}get directionStart(){return this.effectiveDir==="rtl"?"right":"left"}_createLabels(){if(!this.labelInterval||!this.showTickmarks)return;const e=this.labelInterval,t=this._effectiveStep,i=(this._effectiveMax-this._effectiveMin)/(t*e);if(i===this._oldNumberOfLabels)return;this._oldNumberOfLabels=i,this._labelWidth=100/i,this._labelValues=[];const r=_._getDecimalPrecisionOfNumber(t);for(let n=0;n<=i;n++){const s=(n*t*e+this._effectiveMin).toFixed(r);this._labelValues.push(s)}}_handleActionKeyPressBase(e,t){const i=_._isIncreaseValueAction(e),r=_._isBigStepAction(e),n=this[t],s=this._effectiveMin,a=this._effectiveMax;let u=this.effectiveDir==="rtl"?-this._effectiveStep:this._effectiveStep;return u=r&&(a-s)/u>10?(a-s)/10:u,P(e)?a-n:M(e)?(n-s)*-1:i?u:u*-1}static _isDecreaseValueAction(e){return S(e)||f(e)||x(e)||h(e)||V(e)||g(e)}static _isIncreaseValueAction(e){return E(e)||v(e)||I(e)||p(e)||T(e)||b(e)}static _isBigStepAction(e){return f(e)||v(e)||h(e)||p(e)||b(e)||g(e)}get _tickmarksCount(){return(this._effectiveMax-this._effectiveMin)/this._effectiveStep}_spaceBetweenTickmarks(){return this.getBoundingClientRect().width/this._tickmarksCount}_validateStep(e){e===0&&console.warn("The 'step' property must be a positive float number"),e<0&&console.warn("The 'step' property must be a positive float number. The provided negative number has been converted to its positve equivalent"),Number.isNaN(e)&&console.warn("The 'step' property must be a positive float number. It has been set to its default value of 1")}get _labels(){return this._labelValues||[]}get _effectiveStep(){let e=this.step;return e<0&&(e=Math.abs(e)),Number.isNaN(e)&&(e=1),e}get _effectiveMin(){return Math.min(this.min,this.max)}get _effectiveMax(){return Math.max(this.min,this.max)}get _tabIndex(){return this.disabled?"-1":"0"}get _ariaLabelledByHandleRefs(){return[`${this._id}-accName`,`${this._id}-sliderDesc`].join(" ").trim()}};l([d({validator:m,defaultValue:0})],o.prototype,"min",void 0);l([d({validator:m,defaultValue:100})],o.prototype,"max",void 0);l([d({validator:m,defaultValue:1})],o.prototype,"step",void 0);l([d({validator:H,defaultValue:0})],o.prototype,"labelInterval",void 0);l([d({type:Boolean})],o.prototype,"showTickmarks",void 0);l([d({type:Boolean})],o.prototype,"showTooltip",void 0);l([d({type:Boolean})],o.prototype,"disabled",void 0);l([d()],o.prototype,"accessibleName",void 0);l([d({defaultValue:"hidden"})],o.prototype,"_tooltipVisibility",void 0);l([d({type:Boolean})],o.prototype,"_labelsOverlapping",void 0);l([d({type:Boolean})],o.prototype,"_hiddenTickmarks",void 0);o=_=l([C({renderer:q,styles:Z}),w("change"),w("input")],o);const _e=o;export{_e as S};
//# sourceMappingURL=SliderBase-1597ec4e.js.map
