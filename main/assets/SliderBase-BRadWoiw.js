import{f as N,C as O}from"./UI5Element-B4CRQCUa.js";import{s as D,a as _,l as F}from"./withWebComponent-DVfwWPVB.js";import{s as k}from"./event-Dq0fpeHi.js";import{e as g}from"./Float-C8QKXwz5.js";import{a as L}from"./Integer-DgRYWdxf.js";import{f as y}from"./ResizeHandler-Bwj_klJ5.js";import{d as A,l as w}from"./Device-RcFucVeJ.js";import"./useIsomorphicLayoutEffect-CpdNMtv3.js";import{f as B}from"./Icons-CwMCtZ-T.js";import{C as x,K as I,c as S,D as E,P as h,R as p,_ as v,U as f,o as M,y as T,p as V,F as z,J as m,Y as b,n as C}from"./Keys-B00bFMgT.js";import{s as R}from"./parameters-bundle.css-DQGkr9pp.js";const q="direction-arrows",H="M507 244q5 5 5 12 0 6-5 11L394 379q-5 5-12 5-6 0-11-5t-5-11V144q0-12 10-15 2-1 6-1 8 0 12 4zM135 129q10 3 10 15v224q0 6-4.5 11t-11.5 5q-6 0-11-5L5 267q-5-5-5-11 0-7 5-12l113-112q4-4 11-4 4 0 6 1z",$=!1,K="SAP-icons-v4",U="@ui5/webcomponents-icons";B(q,{pathData:H,ltr:$,collection:K,packageName:U});const j="direction-arrows",W="M135 128q11 0 18 7.5t7 18.5v204q0 11-8 18.5t-18 7.5-17-7L8 275q-8-8-8-19t8-19l109-102q7-7 18-7zm369 109q8 8 8 19t-8 19L395 377q-7 7-17 7t-18-7.5-8-18.5V154q0-12 8-19t19-7q9 0 16 7z",X=!1,Y="SAP-icons-v5",J="@ui5/webcomponents-icons";B(j,{pathData:W,ltr:X,collection:Y,packageName:J});N("@ui5/webcomponents-theming","sap_horizon",async()=>D);N("@ui5/webcomponents","sap_horizon",async()=>R);const G={packageName:"@ui5/webcomponents",fileName:"themes/SliderBase.css.ts",content:`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host([disabled]){opacity:var(--_ui5-v2-0-0-rc-6_slider_disabled_opacity);cursor:default;pointer-events:none}:host{box-sizing:border-box;cursor:pointer;vertical-align:top;width:100%}:host(:not([hidden])){display:inline-block}.ui5-slider-root{box-sizing:border-box;height:3.3125rem;outline:none;padding:var(--_ui5-v2-0-0-rc-6_slider_padding);touch-action:none}.ui5-slider-inner{background-repeat:no-repeat;position:relative;min-width:var(--_ui5-v2-0-0-rc-6_slider_inner_min_width);height:100%}.ui5-slider-progress-container{width:100%;background:var(--_ui5-v2-0-0-rc-6_slider_progress_container_background);border:var(--_ui5-v2-0-0-rc-6_slider_progress_border);border-radius:var(--_ui5-v2-0-0-rc-6_slider_progress_border_radius);height:var(--_ui5-v2-0-0-rc-6_slider_inner_height);position:relative;box-sizing:var(--_ui5-v2-0-0-rc-6_slider_progress_box_sizing);top:var(--_ui5-v2-0-0-rc-6_slider_progress_container_top)}.ui5-slider-progress-container:before,.ui5-slider-progress-container:after{display:var(--_ui5-v2-0-0-rc-6_slider_progress_container_dot_display);content:"";position:absolute;border-radius:50%;width:var(--_ui5-v2-0-0-rc-6_slider_start_end_point_size);height:var(--_ui5-v2-0-0-rc-6_slider_start_end_point_size);top:var(--_ui5-v2-0-0-rc-6_slider_start_end_point_top)}.ui5-slider-progress-container:before{inset-inline-start:var(--_ui5-v2-0-0-rc-6_slider_start_end_point_left);background-color:var(--_ui5-v2-0-0-rc-6_slider_progress_before_background);border:var(--_ui5-v2-0-0-rc-6_slider_progress_before_border)}.ui5-slider-progress-container:after{inset-inline-end:var(--_ui5-v2-0-0-rc-6_slider_start_end_point_left);background-color:var(--_ui5-v2-0-0-rc-6_slider_progress_after_background);border:var(--_ui5-v2-0-0-rc-6_slider_progress_after_border)}.ui5-slider-progress{background:var(--_ui5-v2-0-0-rc-6_slider_progress_background);border-radius:var(--_ui5-v2-0-0-rc-6_slider_progress_border_radius);height:var(--_ui5-v2-0-0-rc-6_slider_progress_height);position:relative;outline:none;box-sizing:border-box;border:var(--_ui5-v2-0-0-rc-6_slider_active_progress_border);left:var(--_ui5-v2-0-0-rc-6_slider_active_progress_left);top:var(--_ui5-v2-0-0-rc-6_slider_active_progress_top)}.ui5-slider-tickmarks{list-style:none;padding:0;margin:0;top:var(--_ui5-v2-0-0-rc-6_slider_tickmark_top);display:flex;box-sizing:border-box;width:100%;justify-content:space-between;position:absolute;z-index:1}.ui5-slider-tickmarks li{height:var(--_ui5-v2-0-0-rc-6_slider_tickmark_height);border-inline-start:1px solid var(--_ui5-v2-0-0-rc-6_slider_tickmark_bg)}.ui5-slider-handle{background:var(--_ui5-v2-0-0-rc-6_slider_handle_background);border:var(--_ui5-v2-0-0-rc-6_slider_handle_border);border-radius:var(--_ui5-v2-0-0-rc-6_slider_handle_border_radius);margin-inline-start:calc(-1 * var(--_ui5-v2-0-0-rc-6_slider_handle_width) / 2);top:var(--_ui5-v2-0-0-rc-6_slider_handle_top);position:absolute;outline:none;height:var(--_ui5-v2-0-0-rc-6_slider_handle_height);width:var(--_ui5-v2-0-0-rc-6_slider_handle_width);box-sizing:var(--_ui5-v2-0-0-rc-6_slider_handle_box_sizing);display:flex;justify-content:center;align-items:center;z-index:2}[slider-icon]{display:var(--_ui5-v2-0-0-rc-6_slider_handle_icon_display);color:var(--sapContent_Selected_ForegroundColor);width:var(--_ui5-v2-0-0-rc-6_slider_handle_icon_size);height:var(--_ui5-v2-0-0-rc-6_slider_handle_icon_size)}.ui5-slider-root .ui5-slider-handle:focus [slider-icon]{display:var(--_ui5-v2-0-0-rc-6_range_slider_active_handle_icon_display)}.ui5-slider-progress-container:hover~.ui5-slider-handle:not(:focus),.ui5-slider-handle:hover{background:var(--_ui5-v2-0-0-rc-6_slider_handle_hover_background);border:var(--_ui5-v2-0-0-rc-6_slider_handle_hover_border)}.ui5-slider-root:focus .ui5-slider-inner .ui5-slider-handle,.ui5-slider-handle:focus{outline:var(--_ui5-v2-0-0-rc-6_slider_handle_outline);outline-offset:var(--_ui5-v2-0-0-rc-6_slider_handle_outline_offset);border:var(--_ui5-v2-0-0-rc-6_slider_handle_focus_border);background:var(--_ui5-v2-0-0-rc-6_slider_handle_background_focus)}.ui5-slider-handle.ui5-slider-handle--start:focus,.ui5-slider-handle--end:focus{border:var(--_ui5-v2-0-0-rc-6_slider_handle_focus_border)}.ui5-slider-root:focus:hover .ui5-slider-handle,.ui5-slider-handle:focus:hover{border:var(--_ui5-v2-0-0-rc-6_slider_handle_focus_border)}.ui5-slider-tooltip{display:flex;justify-content:center;align-items:center;visibility:hidden;pointer-events:none;line-height:1rem;position:absolute;left:50%;transform:translate(-50%);bottom:var(--_ui5-v2-0-0-rc-6_slider_tooltip_bottom);background:var(--_ui5-v2-0-0-rc-6_slider_tooltip_background);border:var(--_ui5-v2-0-0-rc-6_slider_tooltip_border);border-radius:var(--_ui5-v2-0-0-rc-6_slider_tooltip_border_radius);box-shadow:var(--_ui5-v2-0-0-rc-6_slider_tooltip_box_shadow);font-size:var(--_ui5-v2-0-0-rc-6_slider_tooltip_fontsize);color:var(--_ui5-v2-0-0-rc-6_slider_tooltip_color);height:var(--_ui5-v2-0-0-rc-6_slider_tooltip_height);min-width:var(--_ui5-v2-0-0-rc-6_slider_tooltip_min_width);padding:var(--_ui5-v2-0-0-rc-6_slider_tooltip_padding);box-sizing:var(--_ui5-v2-0-0-rc-6_slider_tooltip_border_box)}.ui5-slider-tooltip-value{position:relative;display:flex;justify-content:center;align-items:center}.ui5-slider-labels{position:absolute;top:1.25rem;margin:0;padding:0;white-space:nowrap}.ui5-slider-labels li{position:relative;list-style:none;padding-top:.3125rem;height:1rem;margin:0;text-align:center;display:inline-block;color:var(--_ui5-v2-0-0-rc-6_slider_label_color);font-size:var(--_ui5-v2-0-0-rc-6_slider_label_fontsize);padding-top:0;box-sizing:border-box;display:inline-flex;justify-content:center;align-items:center;vertical-align:top}.ui5-slider-hidden-labels li:not(:first-child):not(:last-child){visibility:hidden}.ui5-slider-handle:focus .ui5-slider-tooltip{bottom:var(--_ui5-v2-0-0-rc-6_slider_handle_focused_tooltip_distance)}.ui5-slider-tickmarks li.ui5-slider-tickmark-in-range{border-inline-start:1px solid var(--_ui5-v2-0-0-rc-6_slider_tickmark_in_range_bg)}:host([show-tickmarks]) .ui5-slider-progress{height:var(--_ui5-v2-0-0-rc-6_slider_no_tickmarks_progress_height);border:var(--_ui5-v2-0-0-rc-6_slider_no_tickmarks_active_progress_border);left:var(--_ui5-v2-0-0-rc-6_slider_no_tickmarks_active_progress_left);top:var(--_ui5-v2-0-0-rc-6_slider_no_tickmarks_active_progress_top)}:host([show-tickmarks]) .ui5-slider-progress-container{top:var(--_ui5-v2-0-0-rc-6_slider_no_tickmarks_progress_container_top)}.ui5-slider-handle:focus:after{content:"";display:var(--_ui5-v2-0-0-rc-6_slider_handle_focus_visibility);width:calc(100% + (var(--sapContent_FocusWidth) * 2) + 2px);height:calc(100% + (var(--sapContent_FocusWidth) * 2) + 2px);border:var(--sapContent_FocusWidth) dotted var(--sapContent_FocusColor);position:absolute;border-radius:var(--_ui5-v2-0-0-rc-6_slider_handle_border_radius);pointer-events:none}
`};var l=function(u,e,i,t){var s=arguments.length,r=s<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,i):t,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(u,e,i,t);else for(var a=u.length-1;a>=0;a--)(o=u[a])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},d;let n=d=class extends O{async formElementAnchor(){return this.getFocusDomRefAsync()}constructor(){super(),this.notResized=!1,this._isUserInteraction=!1,this._isInnerElementFocusing=!1,this._labelWidth=0,this._resizeHandler=this._handleResize.bind(this),this._moveHandler=this._handleMove.bind(this),this._upHandler=this._handleUp.bind(this),this._stateStorage={step:void 0,min:void 0,max:void 0,labelInterval:void 0};const e=i=>{this._onmousedown(i)};this._ontouchstart={handleEvent:e,passive:!0}}_handleMove(e){}_handleUp(){}_onmousedown(e){}_handleActionKeyPress(e){}static get ACTION_KEYS(){return[x,I,S,E,h,p,v,f,M,T,V,z,m,b,C]}static get MIN_SPACE_BETWEEN_TICKMARKS(){return 8}static get TOOLTIP_VISIBILITY(){return{VISIBLE:"visible",HIDDEN:"hidden"}}static get renderer(){return F}static get styles(){return G}get classes(){return{root:{"ui5-slider-root-phone":A()},labelContainer:{"ui5-slider-hidden-labels":this._labelsOverlapping}}}onEnterDOM(){y.register(this,this._resizeHandler)}onExitDOM(){y.deregister(this,this._resizeHandler)}onAfterRendering(){this.notResized&&this._resizeHandler()}_onmouseover(){this.showTooltip&&(this._tooltipVisibility=d.TOOLTIP_VISIBILITY.VISIBLE)}_onmouseout(){this.showTooltip&&!this.shadowRoot.activeElement&&(this._tooltipVisibility=d.TOOLTIP_VISIBILITY.HIDDEN)}_onkeydown(e){this.disabled||this._effectiveStep===0||d._isActionKey(e)&&(e.preventDefault(),this._isUserInteraction=!0,this._handleActionKeyPress(e))}_onkeyup(){this.disabled||(this._isUserInteraction=!1)}_preserveFocus(e){this._isInnerElementFocusing=e}_isFocusing(){return this._isInnerElementFocusing}_preventFocusOut(){this.focusInnerElement()}focusInnerElement(){this.focus()}_handleResize(){if(!this.showTickmarks||(this.notResized=!1,this._spaceBetweenTickmarks()<d.MIN_SPACE_BETWEEN_TICKMARKS?(this._hiddenTickmarks=!0,this._labelsOverlapping=!0):this._hiddenTickmarks=!1,this.labelInterval<=0||this._hiddenTickmarks))return;const i=this.shadowRoot.querySelectorAll(".ui5-slider-labels li");this._labelsOverlapping=[...i].some(t=>t.scrollWidth>t.clientWidth)}handleDownBase(e){const i=this._effectiveMin,t=this._effectiveMax,s=this.getBoundingClientRect(),r=this.directionStart,o=this._effectiveStep,a=d.getValueFromInteraction(e,o,i,t,s,r);return this._isUserInteraction=!0,window.addEventListener("mouseup",this._upHandler),window.addEventListener("touchend",this._upHandler),w()&&e instanceof TouchEvent?window.addEventListener("touchmove",this._moveHandler):window.addEventListener("mousemove",this._moveHandler),this._handleFocusOnMouseDown(e),a}_handleFocusOnMouseDown(e){const i=this.shadowRoot.activeElement;(!i||i!==e.target)&&(this._preserveFocus(!0),this.focusInnerElement())}handleUpBase(){window.removeEventListener("mouseup",this._upHandler),window.removeEventListener("touchend",this._upHandler),window.removeEventListener("mousemove",this._moveHandler),window.removeEventListener("touchmove",this._moveHandler),this._isUserInteraction=!1,this._preserveFocus(!1)}updateStateStorageAndFireInputEvent(e){this.storePropertyState(e),this._isUserInteraction&&this.fireEvent("input")}static _isActionKey(e){return this.ACTION_KEYS.some(i=>i(e))}static clipValue(e,i,t){return e=Math.min(Math.max(e,i),t),e}static getValueFromInteraction(e,i,t,s,r,o){const a=this.getPageXValueFromEvent(e),c=this.computedValueFromPageX(a,t,s,r,o),P=this.getSteppedValue(c,i,t);return this.clipValue(P,t,s)}static getSteppedValue(e,i,t){const s=Math.abs((e-t)%i);if(i===0||s===0)return e;e=s*2>=i?e+i-s:e-s;const r=d._getDecimalPrecisionOfNumber(i);return Number(e.toFixed(r))}static getPageXValueFromEvent(e){return w()&&e instanceof TouchEvent?e.targetTouches&&e.targetTouches.length>0?e.targetTouches[0].pageX:0:e.pageX}static computedValueFromPageX(e,i,t,s,r){const a=(r==="left"?e-s[r]:s[r]-e)/s.width;return i+a*(t-i)}static _getDecimalPrecisionOfNumber(e){if(Number.isInteger(e))return 0;const i=String(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return!i||i.length<2?0:Math.max(0,(i[1]?i[1].length:0)-(i[2]?Number(i[2]):0))}isCurrentStateOutdated(){return Object.entries(this._stateStorage).some(([e,i])=>this[e]!==i)}getStoredPropertyState(e){return this._stateStorage[e]}isPropertyUpdated(...e){return e.some(i=>this.getStoredPropertyState(i)!==this[i])}storePropertyState(...e){e.forEach(i=>{this._stateStorage[i]=this[i]})}get directionStart(){return this.effectiveDir==="rtl"?"right":"left"}_createLabels(){if(!this.labelInterval||!this.showTickmarks)return;const e=this.labelInterval,i=this._effectiveStep,t=(this._effectiveMax-this._effectiveMin)/(i*e);if(t===this._oldNumberOfLabels&&this._oldMin===this._effectiveMin&&this._oldMax===this._effectiveMax)return;this._oldMin=this._effectiveMin,this._oldMax=this._effectiveMax,this._oldNumberOfLabels=t,this._labelWidth=100/t,this._labelValues=[];const s=d._getDecimalPrecisionOfNumber(i);for(let r=0;r<=t;r++){const o=(r*i*e+this._effectiveMin).toFixed(s);this._labelValues.push(o)}}_handleActionKeyPressBase(e,i){const t=d._isIncreaseValueAction(e),s=d._isBigStepAction(e),r=this[i],o=this._effectiveMin,a=this._effectiveMax;let c=this.effectiveDir==="rtl"?-this._effectiveStep:this._effectiveStep;return c=s&&(a-o)/c>10?(a-o)/10:c,z(e)?a-r:V(e)?(r-o)*-1:t?c:c*-1}static _isDecreaseValueAction(e){return E(e)||f(e)||x(e)||h(e)||T(e)||b(e)}static _isIncreaseValueAction(e){return S(e)||v(e)||I(e)||p(e)||M(e)||m(e)}static _isBigStepAction(e){return f(e)||v(e)||h(e)||p(e)||m(e)||b(e)}get _tickmarksCount(){return(this._effectiveMax-this._effectiveMin)/this._effectiveStep}_spaceBetweenTickmarks(){return this.getBoundingClientRect().width/this._tickmarksCount}_validateStep(e){e===0&&console.warn("The 'step' property must be a positive float number"),e<0&&console.warn("The 'step' property must be a positive float number. The provided negative number has been converted to its positve equivalent"),Number.isNaN(e)&&console.warn("The 'step' property must be a positive float number. It has been set to its default value of 1")}get _labels(){return this._labelValues||[]}get _effectiveStep(){let e=this.step;return e<0&&(e=Math.abs(e)),Number.isNaN(e)&&(e=1),e}get _effectiveMin(){return Math.min(this.min,this.max)}get _effectiveMax(){return Math.max(this.min,this.max)}get _tabIndex(){return this.disabled?"-1":"0"}get _ariaLabelledByHandleRefs(){return[`${this._id}-accName`,`${this._id}-sliderDesc`].join(" ").trim()}};l([_({validator:g,defaultValue:0})],n.prototype,"min",void 0);l([_({validator:g,defaultValue:100})],n.prototype,"max",void 0);l([_()],n.prototype,"name",void 0);l([_({validator:g,defaultValue:1})],n.prototype,"step",void 0);l([_({validator:L,defaultValue:0})],n.prototype,"labelInterval",void 0);l([_({type:Boolean})],n.prototype,"showTickmarks",void 0);l([_({type:Boolean})],n.prototype,"showTooltip",void 0);l([_({type:Boolean})],n.prototype,"disabled",void 0);l([_()],n.prototype,"accessibleName",void 0);l([_({defaultValue:"hidden"})],n.prototype,"_tooltipVisibility",void 0);l([_({type:Boolean})],n.prototype,"_labelsOverlapping",void 0);l([_({type:Boolean})],n.prototype,"_hiddenTickmarks",void 0);n=d=l([k("change"),k("input")],n);const de=n;export{de as S};
