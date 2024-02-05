import{b as o,l as a,c as _,p as g,d as y}from"./withWebComponent-UxvJwa3A.js";import{F as S}from"./Float-0fEWDOdp.js";import{d as I}from"./i18nBundle-YDapVb1x.js";import{i as k}from"./Icons-1V9ErOOl.js";import{S as h}from"./SliderBase-irc0bRyP.js";import{c as $,I as P}from"./Icon-qyLuyi2a.js";import{o as f}from"./class-map--zj6Ctao.js";import{s as d}from"./style-map-21pwAbrQ.js";import{S as w}from"./i18n-defaults-IIWnNm9Y.js";import"./utils-rNFQc6Ui.js";import"./VersionInfo-AzzP9wS2.js";import"./index-OjgoNOWw.js";import"./CustomElementsScopeUtils-IpwVqUeG.js";import"./jsx-runtime-DtaoT6pD.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./Integer-kog98579.js";import"./UI5Element-_cJDeK03.js";import"./ResizeHandler-xTi6PJ7P.js";function x(s,t,e){return e?o`<div class="ui5-slider-root ${f(this.classes.root)}" @mousedown="${this._onmousedown}" @touchstart="${this._ontouchstart}" @mouseover="${this._onmouseover}" @mouseout="${this._onmouseout}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" part="root-container"><div class="ui5-slider-inner">${this.step?v.call(this,s,t,e):void 0}<div class="ui5-slider-progress-container" aria-hidden="true" part="progress-container"><div class="ui5-slider-progress" style="${d(this.styles.progress)}" @focusout="${this._onfocusout}" @focusin="${this._onfocusin}" tabindex="-1" part="progress-bar"></div></div><div class="ui5-slider-handle" style="${d(this.styles.handle)}" @focusout="${this._onfocusout}" @focusin="${this._onfocusin}" role="slider" tabindex="${a(this._tabIndex)}" aria-orientation="horizontal" aria-valuemin="${a(this.min)}" aria-valuemax="${a(this.max)}" aria-valuenow="${a(this.value)}" aria-labelledby="${a(this._ariaLabelledByHandleRefs)}" aria-disabled="${a(this._ariaDisabled)}" data-sap-focus-ref part="handle"><${_("ui5-icon",t,e)} name="direction-arrows" part="icon-slider" slider-icon></${_("ui5-icon",t,e)}>${this.showTooltip?m.call(this,s,t,e):void 0}</div></div><span id="${a(this._id)}-accName" class="ui5-hidden-text">${a(this.accessibleName)}</span><span id="${a(this._id)}-sliderDesc" class="ui5-hidden-text">${a(this._ariaLabelledByText)}</span></div> `:o`<div class="ui5-slider-root ${f(this.classes.root)}" @mousedown="${this._onmousedown}" @touchstart="${this._ontouchstart}" @mouseover="${this._onmouseover}" @mouseout="${this._onmouseout}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" part="root-container"><div class="ui5-slider-inner">${this.step?v.call(this,s,t,e):void 0}<div class="ui5-slider-progress-container" aria-hidden="true" part="progress-container"><div class="ui5-slider-progress" style="${d(this.styles.progress)}" @focusout="${this._onfocusout}" @focusin="${this._onfocusin}" tabindex="-1" part="progress-bar"></div></div><div class="ui5-slider-handle" style="${d(this.styles.handle)}" @focusout="${this._onfocusout}" @focusin="${this._onfocusin}" role="slider" tabindex="${a(this._tabIndex)}" aria-orientation="horizontal" aria-valuemin="${a(this.min)}" aria-valuemax="${a(this.max)}" aria-valuenow="${a(this.value)}" aria-labelledby="${a(this._ariaLabelledByHandleRefs)}" aria-disabled="${a(this._ariaDisabled)}" data-sap-focus-ref part="handle"><ui5-icon name="direction-arrows" part="icon-slider" slider-icon></ui5-icon>${this.showTooltip?m.call(this,s,t,e):void 0}</div></div><span id="${a(this._id)}-accName" class="ui5-hidden-text">${a(this.accessibleName)}</span><span id="${a(this._id)}-sliderDesc" class="ui5-hidden-text">${a(this._ariaLabelledByText)}</span></div> `}function v(s,t,e){return o`${this.showTickmarks?T.call(this,s,t,e):void 0}`}function T(s,t,e){return o`<ul class="ui5-slider-tickmarks">${$(this.tickmarksObject,(i,n)=>i._id||n,(i,n)=>B.call(this,s,t,e,i,n))}</ul>${this.labelInterval?O.call(this,s,t,e):void 0}`}function B(s,t,e,i,n){return o`${i?V.call(this,s,t,e,i,n):A.call(this,s,t,e,i,n)}`}function V(s,t,e,i,n){return o`<li class="ui5-slider-tickmark ui5-slider-tickmark-in-range"></li>`}function A(s,t,e,i,n){return o`<li class="ui5-slider-tickmark"></li>`}function O(s,t,e){return o`<ul class="ui5-slider-labels ${f(this.classes.labelContainer)}" style="${d(this.styles.labelContainer)}">${$(this._labels,(i,n)=>i._id||n,(i,n)=>D.call(this,s,t,e,i,n))}</ul>`}function D(s,t,e,i,n){return o`<li style="${d(this.styles.label)}">${a(i)}</li>`}function m(s,t,e){return o`<div class="ui5-slider-tooltip" style="${d(this.styles.tooltip)}"><span class="ui5-slider-tooltip-value">${a(this.tooltipValue)}</span></div>`}var b=function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var p=s.length-1;p>=0;p--)(l=s[p])&&(r=(n<3?l(r):n>3?l(t,e,r):l(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},c;let u=c=class extends h{constructor(){super(),this._progressPercentage=0,this._handlePositionFromStart=0,this._stateStorage.value=void 0}onBeforeRendering(){this.isCurrentStateOutdated()&&(this.notResized=!0,this.syncUIAndState(),this._updateHandleAndProgress(this.value))}syncUIAndState(){this.isPropertyUpdated("step")&&(this._validateStep(this.step),this.storePropertyState("step")),this.isPropertyUpdated("min","max","value")&&(this.storePropertyState("min","max"),this.value=h.clipValue(this.value,this._effectiveMin,this._effectiveMax),this.updateStateStorageAndFireInputEvent("value"),this.storePropertyState("value")),this.labelInterval&&this.showTickmarks&&this._createLabels(),this.isPropertyUpdated("labelInterval")&&this.storePropertyState("labelInterval")}_onmousedown(t){if(this.disabled||this.step===0)return;const e=this.handleDownBase(t);this._valueOnInteractionStart=this.value,this._valueInitial===void 0&&(this._valueInitial=this.value);const i=this.constructor;this._isHandlePressed(i.getPageXValueFromEvent(t))||(this._updateHandleAndProgress(e),this.value=e,this.updateStateStorageAndFireInputEvent("value"))}_onfocusin(){this._valueInitial===void 0&&(this._valueInitial=this.value),this.showTooltip&&(this._tooltipVisibility=h.TOOLTIP_VISIBILITY.VISIBLE)}_onfocusout(){if(this._isFocusing()){this._preventFocusOut();return}this._valueInitial=void 0,this.showTooltip&&(this._tooltipVisibility=h.TOOLTIP_VISIBILITY.HIDDEN)}_handleMove(t){if(t.preventDefault(),this.disabled||this._effectiveStep===0)return;const i=this.constructor.getValueFromInteraction(t,this._effectiveStep,this._effectiveMin,this._effectiveMax,this.getBoundingClientRect(),this.directionStart);this._updateHandleAndProgress(i),this.value=i,this.updateStateStorageAndFireInputEvent("value")}_handleUp(){this._valueOnInteractionStart!==this.value&&this.fireEvent("change"),this.handleUpBase(),this._valueOnInteractionStart=void 0}_isHandlePressed(t){const e=this._sliderHandle.getBoundingClientRect();return t>=e.left&&t<=e.right}_updateHandleAndProgress(t){const e=this._effectiveMax,i=this._effectiveMin;this._progressPercentage=(t-i)/(e-i),this._handlePositionFromStart=this._progressPercentage*100}_handleActionKeyPress(t){const e=this._effectiveMin,i=this._effectiveMax,n=this.value,r=this.constructor,l=k(t)?this._valueInitial:r.clipValue(this._handleActionKeyPressBase(t,"value")+n,e,i);l!==n&&(this._updateHandleAndProgress(l),this.value=l,this.updateStateStorageAndFireInputEvent("value"))}get styles(){return{progress:{transform:`scaleX(${this._progressPercentage})`,"transform-origin":`${this.directionStart} top`},handle:{[this.directionStart]:`${this._handlePositionFromStart}%`},label:{width:`${this._labelWidth}%`},labelContainer:{width:"100%",[this.directionStart]:`-${this._labelWidth/2}%`},tooltip:{visibility:`${this._tooltipVisibility}`}}}get _sliderHandle(){return this.shadowRoot.querySelector(".ui5-slider-handle")}get tooltipValue(){const e=this.constructor._getDecimalPrecisionOfNumber(this._effectiveStep);return this.value.toFixed(e)}get _ariaDisabled(){return this.disabled||void 0}get _ariaLabelledByText(){return c.i18nBundle.getText(w)}static async onDefine(){c.i18nBundle=await I("@ui5/webcomponents")}get tickmarksObject(){const t=this._tickmarksCount,e=[];if(this._hiddenTickmarks)return[!0,!1];for(let i=0;i<=t;i++)e.push(this._effectiveMin+i*this.step<=this.value);return e}};b([g({validator:S,defaultValue:0})],u.prototype,"value",void 0);u=c=b([y({tag:"ui5-slider",languageAware:!0,template:x,dependencies:[P]})],u);u.define();const Z=u;export{Z as default};
