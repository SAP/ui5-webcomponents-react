import{k,a as S,U as q,F as R,d as O,m as f}from"./UI5Element-533070c8.js";import{e as d,s as u,l as r,a as I,b as D,p as o,c as A,d as F}from"./withWebComponent-7b9bd1ee.js";import{c as L,e as g}from"./Icon-2e16c08b.js";import{I as v}from"./Integer-f7f172c9.js";import{c as P}from"./Device-208919c6.js";import{C as N,g as W,D as $}from"./Gregorian-034564a9.js";import{f as U}from"./LocaleData-9c0c56a1.js";import{h as y,o as j,p as K,u as Y,t as Z,q as T,s as C}from"./Icons-67fab4b0.js";import{o as x}from"./class-map-6a9bd920.js";import"./navigation-down-arrow-79e31106.js";import{S as G}from"./ScrollEnablement-4353003c.js";import{B as J}from"./Button-21e98691.js";import{be as Q,bf as X,bg as ee}from"./i18n-defaults-2f9956dc.js";const te="time-entry-request",V="M416 272q0 16-16 16H224V144q0-16 16-16t16 16v112h144q16 0 16 16zM256 0q53 0 99.5 20T437 75t55 81.5 20 99.5q0 49-17.5 92.5T447 426t-71 56-88 28v-32q40-6 75.5-25.5t61-49T465 336t15-80q0-46-17.5-87t-48-71.5-71.5-48T256 32q-38 0-72.5 12T121 77.5t-49 51T41 192H8q11-41 34.5-76.5t56-61 72.5-40T256 0zM144 480q16 0 16 16 0 6-4.5 11t-11.5 5H16q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128zm0-64q16 0 16 16 0 6-4.5 11t-11.5 5H16q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128zm0-64q16 0 16 16 0 6-4.5 11t-11.5 5H16q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128z",ie=!1,re="SAP-icons-v4",se="@ui5/webcomponents-icons";y(te,{pathData:V,ltr:ie,collection:re,packageName:se});const ne="time-entry-request",M="M256.5 103q11 0 18 7.5t7 18.5v120l72 95q5 8 4 19t-9 16q-8 6-19.5 4.5t-16.5-9.5l-77-102q-2-4-3.5-7.5t-1.5-7.5V129q0-11 7-18.5t19-7.5zm0-102q53 0 99 20t81 55 55 81.5 20 99.5q0 52-20 98.5t-55 81.5-81 55-99 20q-26 0-26-25 0-26 26-26 42 0 79-16t65-44 44-65 16-79-16-79.5-44-65.5-65-44-79-16q-39 0-74.5 14t-62.5 38.5-44 57.5-21 72q-2 9-10.5 16t-17.5 7q-12-2-18.5-10.5T3.5 229q6-48 27.5-89.5T86.5 67 164 18.5 256.5 1zm-103 307q26 0 26 25 0 26-26 26h-127q-26 0-26-26 0-25 26-25h127zm0 76q12 0 19 7.5t7 18.5-7 18.5-19 7.5h-127q-12 0-19-7.5T.5 410t7-18.5 19-7.5h127zm0 77q26 0 26 26 0 25-26 25h-127q-26 0-26-25 0-26 26-26h127z",le=!1,oe="SAP-icons-v5",ae="@ui5/webcomponents-icons";y(ne,{pathData:M,ltr:le,collection:oe,packageName:ae});k();function de(s,e,t){return d`<div class="${x(this.classes.root)}" tabindex="-1" @keydown=${this._onkeydown} @focusin="${this._onfocusin}" @focusout="${this._onfocusout}">${this._hasHoursSlider?he.call(this,s,e,t):void 0}${this._hasMinutesSlider?ue.call(this,s,e,t):void 0}${this._hasSecondsSlider?ce.call(this,s,e,t):void 0}${this._hasPeriodsSlider?_e.call(this,s,e,t):void 0}</div>`}function he(s,e,t){return t?d`<${u("ui5-wheelslider",e,t)} label = "${r(this.hoursSliderTitle)}" ._items="${r(this.hoursArray)}" data-sap-focus-ref ?expanded="${this._hoursSliderFocused}" value="${r(this._hours)}" @ui5-select="${r(this.onHoursChange)}" @click="${this.selectSlider}" @focusin="${this.selectSlider}" data-sap-slider="hours" cyclic></${u("ui5-wheelslider",e,t)}>`:d`<ui5-wheelslider label = "${r(this.hoursSliderTitle)}" ._items="${r(this.hoursArray)}" data-sap-focus-ref ?expanded="${this._hoursSliderFocused}" value="${r(this._hours)}" @ui5-select="${r(this.onHoursChange)}" @click="${this.selectSlider}" @focusin="${this.selectSlider}" data-sap-slider="hours" cyclic></ui5-wheelslider>`}function ue(s,e,t){return t?d`<${u("ui5-wheelslider",e,t)} label = "${r(this.minutesSliderTitle)}" ._items="${r(this.minutesArray)}" ?expanded="${this._minutesSliderFocused}" value="${r(this._minutes)}" @ui5-select="${r(this.onMinutesChange)}" @click="${this.selectSlider}" @focusin="${this.selectSlider}" data-sap-slider="minutes" cyclic></${u("ui5-wheelslider",e,t)}>`:d`<ui5-wheelslider label = "${r(this.minutesSliderTitle)}" ._items="${r(this.minutesArray)}" ?expanded="${this._minutesSliderFocused}" value="${r(this._minutes)}" @ui5-select="${r(this.onMinutesChange)}" @click="${this.selectSlider}" @focusin="${this.selectSlider}" data-sap-slider="minutes" cyclic></ui5-wheelslider>`}function ce(s,e,t){return t?d`<${u("ui5-wheelslider",e,t)} label = "${r(this.secondsSliderTitle)}" ._items="${r(this.secondsArray)}" ?expanded="${this._secondsSliderFocused}" value="${r(this._seconds)}" @ui5-select="${r(this.onSecondsChange)}" @click="${this.selectSlider}" @focusin="${this.selectSlider}" data-sap-slider="seconds" cyclic></${u("ui5-wheelslider",e,t)}>`:d`<ui5-wheelslider label = "${r(this.secondsSliderTitle)}" ._items="${r(this.secondsArray)}" ?expanded="${this._secondsSliderFocused}" value="${r(this._seconds)}" @ui5-select="${r(this.onSecondsChange)}" @click="${this.selectSlider}" @focusin="${this.selectSlider}" data-sap-slider="seconds" cyclic></ui5-wheelslider>`}function _e(s,e,t){return t?d`<${u("ui5-wheelslider",e,t)} label = "${r(this.periodSliderTitle)}" ._items="${r(this.periodsArray)}" ?expanded="${this._periodSliderFocused}" value="${r(this._period)}" @ui5-select="${r(this.onPeriodChange)}" @click="${this.selectSlider}" @focusin="${this.selectSlider}" data-sap-slider="periods"></${u("ui5-wheelslider",e,t)}>`:d`<ui5-wheelslider label = "${r(this.periodSliderTitle)}" ._items="${r(this.periodsArray)}" ?expanded="${this._periodSliderFocused}" value="${r(this._period)}" @ui5-select="${r(this.onPeriodChange)}" @click="${this.selectSlider}" @focusin="${this.selectSlider}" data-sap-slider="periods"></ui5-wheelslider>`}const me="navigation-up-arrow",z="M86.5 380q-9 9-22.5 9t-22.5-9q-10-10-10-23t10-23l193-197q4-2 5-3 2-1 2.5-1.5t2.5-1.5q6-2 11-2 2 0 3 .5t2 .5q4 0 6 1t3.5 2 3.5 2q1 1 1.5 1t1.5 1 2 1l192 196q10 10 10 23t-10 23q-9 9-22.5 9t-22.5-9l-154-155q-16-10-32 0z",pe=!1,we="SAP-icons-v4",ge="@ui5/webcomponents-icons";y(me,{pathData:z,ltr:pe,collection:we,packageName:ge});const ve="navigation-up-arrow",B="M156.5 340q-9 9-22 9-11 0-22-9-9-11-9-22 0-13 9-22l124-124q11-9 22-9 13 0 22 9l124 124q9 9 9 22 0 11-9 22-10 9-22 9-13 0-22-9l-102-103z",fe=!1,be="SAP-icons-v5",Se="@ui5/webcomponents-icons";y(ve,{pathData:B,ltr:fe,collection:be,packageName:Se});k();function ye(s,e,t){return t?d`<div id="${r(this._id)}" ?disabled= "${r(this.disabled)}" value = "${r(this.value)}" label = "${r(this.label)}" @click = ${r(this._onclick)} @keydown=${this._onkeydown} class = "${x(this.classes.root)}" data-sap-focus-ref tabindex="0" @wheel="${this._handleWheel}"><div class="ui5-wheelslider-header-block"><div id="${r(this._id)}--label" class="ui5-wheelslider-label">${r(this.label)}</div><div class="ui5-wheelslider-invisible-text"></div><${u("ui5-button",e,t)} class="ui5-wheelslider-arrow" icon="navigation-up-arrow" @click=${this._onArrowUp} tabindex="-1"></${u("ui5-button",e,t)}></div><div id="${r(this._id)}--inner" class="ui5-wheelslider-inner"><div id="${r(this._id)}--selection-frame" class="ui5-wheelslider-selection-frame"></div><div id="${r(this._id)}--wrapper" class="ui5-wheelslider-wrapper">${this.expanded?H.call(this,s,e,t):E.call(this,s,e,t)}</div></div><div class="ui5-wheelslider-footer-block"><${u("ui5-button",e,t)} class="ui5-wheelslider-arrow" icon="navigation-down-arrow" @click=${this._onArrowDown} tabindex="-1"></${u("ui5-button",e,t)}></div></div>`:d`<div id="${r(this._id)}" ?disabled= "${r(this.disabled)}" value = "${r(this.value)}" label = "${r(this.label)}" @click = ${r(this._onclick)} @keydown=${this._onkeydown} class = "${x(this.classes.root)}" data-sap-focus-ref tabindex="0" @wheel="${this._handleWheel}"><div class="ui5-wheelslider-header-block"><div id="${r(this._id)}--label" class="ui5-wheelslider-label">${r(this.label)}</div><div class="ui5-wheelslider-invisible-text"></div><ui5-button class="ui5-wheelslider-arrow" icon="navigation-up-arrow" @click=${this._onArrowUp} tabindex="-1"></ui5-button></div><div id="${r(this._id)}--inner" class="ui5-wheelslider-inner"><div id="${r(this._id)}--selection-frame" class="ui5-wheelslider-selection-frame"></div><div id="${r(this._id)}--wrapper" class="ui5-wheelslider-wrapper">${this.expanded?H.call(this,s,e,t):E.call(this,s,e,t)}</div></div><div class="ui5-wheelslider-footer-block"><ui5-button class="ui5-wheelslider-arrow" icon="navigation-down-arrow" @click=${this._onArrowDown} tabindex="-1"></ui5-button></div></div>`}function H(s,e,t){return d`<ul id="${r(this._id)}--items-list" role="listbox" aria-label="${r(this.label)}">${L(this._itemsToShow,(i,n)=>i._id||n,(i,n)=>xe.call(this,s,e,t,i,n))}</ul>`}function xe(s,e,t,i,n){return d`<li class="ui5-wheelslider-item" data-item-index="${n}" role="option" aria-selected="${r(i.selected)}">${r(i.value)}</li>`}function E(s,e,t){return d`<ul id="${r(this._id)}--items-list" role="listbox" aria-label="${r(this.label)}"><li class="ui5-wheelslider-item" role="option" aria-selected="true">${r(this.value)}</li></ul>`}S("@ui5/webcomponents-theming","sap_fiori_3",async()=>I);S("@ui5/webcomponents","sap_fiori_3",async()=>D);const $e={packageName:"@ui5/webcomponents",fileName:"themes/WheelSlider.css",content:`.ui5-wheelslider-root {
	overflow: hidden;
	height: 100%;
	vertical-align: middle;
	text-align: center;
	box-sizing: border-box;
	font-family: "72override", var(--sapFontFamily);
	justify-content: space-between;
	flex-direction: column;
	display: inline-flex;
	width: var(--_ui5_wheelslider_item_width);
}

.ui5-wheelslider-root .ui5-wheelslider-label {
	box-sizing: border-box;
	height: 2rem;
	line-height: 2rem;
	width: var(--_ui5_wheelslider_item_width);
	font-size: var(--sapFontSmallSize);
	color: var(--_ui5_wheelslider_label_text_color);
	text-align: center;
	vertical-align: middle;
	visibility: hidden;
}

.ui5-wheelslider-root .ui5-wheelslider-arrow {
	visibility: hidden;
	box-sizing: border-box;
	height: 1.5rem;
	user-select: none;
	outline: none
}

:host([expanded]) .ui5-wheelslider-arrow {
	visibility: var(--_ui5_wheelslider_arrows_visibility);
	box-sizing: border-box;
	border-color: transparent;
	cursor: pointer;
}

:host([expanded]) .ui5-wheelslider-arrow:hover {
	visibility: var(--_ui5_wheelslider_arrows_visibility);
	box-sizing: border-box;
	border-color: inherit;
	cursor: pointer;
}

.ui5-wheelslider-root .ui5-wheelslider-inner {
	position: relative;
	overflow: hidden;
	height: 100%;
	box-sizing: border-box;
	user-select: none;
	list-style: none;
	margin-top: 0rem;
}

:host([expanded]) .ui5-wheelslider-inner {
	margin-top: 0;
}

.ui5-wheelslider-root .ui5-wheelslider-inner .ui5-wheelslider-item {
	height: var(--_ui5_wheelslider_item_height);
	line-height: var(--_ui5_wheelslider_item_height);
	width: var(--_ui5_wheelslider_item_width);
	box-sizing: border-box;
	background: var(--_ui5_wheelslider_selected_item_background_color);
	border: 0.625px solid var(--_ui5_wheelslider_item_border_color);
	font-size: var(--_ui5_wheelslider_item_text_size);
	color: var(--_ui5_wheelslider_collapsed_item_text_color);
	text-align: center;
	border-radius: var(--_ui_wheelslider_item_border_radius);
	cursor: pointer;
}

.ui5-wheelslider-root .ui5-wheelslider-inner .ui5-wheelslider-item:hover {
	background: var(--_ui_wheelslider_item_hover_color);
	border-color: var(--_ui5_wheelslider_item_hovered_border_color);
}

.ui5-wheelslider-root .ui5-wheelslider-inner .ui5-wheelslider-item:focus {
	outline: 1px dotted black;
	outline-offset: -3px;
}

.ui5-wheelslider-root .ui5-wheelslider-inner .ui5-wheelslider-selection-frame {
	width: var(--_ui5_wheelslider_item_width);
	height: var(--_ui5_wheelslider_item_height);
	position: absolute;
	box-sizing: border-box;
	visibility: hidden;
	z-index: 1;
}

.ui5-wheelslider-root .ui5-wheelslider-inner .ui5-wheelslider-wrapper > ul {
	transition: all 400ms;
	margin: 0;
	padding: 0;
	position: absolute;
	top: var(--_ui5_wheelslider_selection_frame_margin_top);
	height: 3000px;
	cursor: pointer;
	list-style-type: none;
}

.ui5-wheelslider-root.ui5-phone .ui5-wheelslider-inner .ui5-wheelslider-wrapper > ul {
	top: var(--_ui5_wheelslider_mobile_selection_frame_margin_top);
}

:host([expanded]) .ui5-wheelslider-inner .ui5-wheelslider-wrapper > ul {
	list-style-type: none;
	top: 0;
	padding-top: calc(var(--_ui5_wheelslider_item_height) * 2);
}

:host([expanded]) .ui5-wheelslider-root.ui5-phone .ui5-wheelslider-inner .ui5-wheelslider-wrapper > ul {
	list-style-type: none;
	top: 0;
	padding-top: calc(var(--_ui5_wheelslider_item_height) * 4);
}

.ui5-wheelslider-root .ui5-wheelslider-inner .ui5-wheelslider-wrapper {
	height: var(--_ui5_wheelslider_height);
	position: relative;
	overflow: hidden;
	outline: none;
}

.ui5-wheelslider-root.ui5-phone .ui5-wheelslider-inner .ui5-wheelslider-wrapper {
	height: var(--_ui5_wheelslider_mobile_height);
}

:host([expanded]) {
	height: 100%;
	cursor: default;
	margin: 0;
	justify-content: space-between;
	flex-direction: column;
	display: inline-flex;
}

:host([expanded]) .ui5-wheelslider-label {
	display: block;
	visibility: visible;
}

.ui5-wheelslider-root .ui5-wheelslider-inner {
	max-height: 100%;
	height: var(--_ui5_wheelslider_height);
}

.ui5-wheelslider-root.ui5-phone .ui5-wheelslider-inner {
	height: var(--_ui5_wheelslider_mobile_height);
}

:host([expanded]) .ui5-wheelslider-inner .ui5-wheelslider-item {
	background: var(--_ui5_wheelslider_item_background_color);
	color: var(--_ui5_wheelslider_item_text_color);
	border: 1px solid var(--_ui5_wheelslider_item_expanded_border_color);
	border-radius: var(--_ui_wheelslider_item_border_radius);
	offset-position: auto;
	cursor: auto;
}

:host([expanded]) .ui5-wheelslider-inner .ui5-wheelslider-item:hover {
	background: var(--_ui_wheelslider_item_expanded_hover_color);
	border-color: var(--_ui5_wheelslider_item_hovered_border_color);
}

:host([expanded]) .ui5-wheelslider-inner .ui5-wheelslider-item:active {
	background: var(--_ui5_wheelslider_active_item_background_color);
	color: var(--_ui5_wheelslider_active_item_text_color);
}

:host([expanded]) .ui5-wheelslider-inner .ui5-wheelslider-item:focus {
	outline: 1px dotted black;
	outline-offset: -3px;
}

:host([expanded]) .ui5-wheelslider-inner .ui5-wheelslider-selection-frame {
	visibility: visible;
	-webkit-box-shadow: inset 0px 0px 0px 2px var(--_ui5_wheelslider_selection_frame_color);
	-moz-box-shadow: inset 0px 0px 0px 2px var(--_ui5_wheelslider_selection_frame_color);
	box-shadow: inset 0px 0px 0px 2px var(--_ui5_wheelslider_selection_frame_color);
	border-radius: var(--_ui_wheelslider_item_border_radius);
	margin-top: var(--_ui5_wheelslider_selection_frame_margin_top);
}

:host([expanded]) .ui5-wheelslider-root.ui5-phone .ui5-wheelslider-inner .ui5-wheelslider-selection-frame {
	margin-top: var(--_ui5_wheelslider_mobile_selection_frame_margin_top);
}

:host([expanded]) .ui5-wheelslider-inner .ui5-wheelslider-selection-frame:hover + .ui5-wheelslider-wrapper ul > li.ui5-wheelslider-item[aria-selected="true"] {
	background: var(--_ui_wheelslider_item_expanded_hover_color);
}

:host([expanded]) .ui5-wheelslider-inner .ui5-wheelslider-selection-frame:active + ul > li.ui5-wheelslider-item[aria-selected="true"] {
	background: var(--_ui5_wheelslider_selected_item_background_color);
	color: lightgray;
}

.ui5-wheelslider-root:focus {
	outline: none;
}
`};var m=globalThis&&globalThis.__decorate||function(s,e,t,i){var n=arguments.length,l=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,_;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(s,e,t,i);else for(var p=s.length-1;p>=0;p--)(_=s[p])&&(l=(n<3?_(l):n>3?_(e,t,l):_(e,t))||l);return n>3&&l&&Object.defineProperty(e,t,l),l};const Te=32,Ce=46;let c=class extends q{constructor(){super(),this._currentElementIndex=0,this._itemsToShow=[],this._scroller=new G(this),this._scroller.attachEvent("scroll",this._updateScrolling.bind(this)),this._scroller.attachEvent("mouseup",this._handleScrollTouchEnd.bind(this)),this._scroller.attachEvent("touchend",this._handleScrollTouchEnd.bind(this))}onBeforeRendering(){if(!this.expanded&&this.cyclic){const e=this._currentElementIndex%this._items.length;this._currentElementIndex=this._timesMultipliedOnCyclic()/2*this._items.length+e}this.value||(this.value=this._items[0]),this._buildItemsToShow()}onAfterRendering(){if(this._scroller.scrollContainer||(this._scroller.scrollContainer=this.shadowRoot.querySelector(`#${this._id}--wrapper`)),this.expanded||this._scroller.scrollTo(0,0),this.expanded){const e=this.shadowRoot.querySelectorAll(".ui5-wheelslider-item");for(let t=0;t<e.length;t++){const i=e[t];if(i.textContent===this.value)return this._selectElementByIndex(Number(i.dataset.itemIndex)+this._getCurrentRepetition()*this._items.length),!0}this._selectElement(e[0])}}get classes(){return{root:{"ui5-wheelslider-root":!0,"ui5-phone":P()}}}expandSlider(){this.expanded=!0,this.fireEvent("expand",{})}collapseSlider(){this.expanded=!1,this.fireEvent("collapse",{})}get _itemCellHeight(){const e=R(document.body)==="compact"?Te:Ce;if(this.shadowRoot.querySelectorAll(".ui5-wheelslider-item").length){const n=getComputedStyle(this.shadowRoot.querySelector(".ui5-wheelslider-item")).getPropertyValue("--_ui5_wheelslider_item_height").replace("px","");return Number(n)||e}return e}_updateScrolling(){const e=this._itemCellHeight,t=this._scroller.scrollContainer.scrollTop;let i;if(t&&(i=Math.round(t/e),this.value!==this._itemsToShow[i].value)){if(this.cyclic){const n=this._handleArrayBorderReached(i);i!==n&&(i=n)}this.value=this._itemsToShow[i].value,this._currentElementIndex=i}}_handleScrollTouchEnd(){this.expanded&&this._selectElementByIndex(this._currentElementIndex)}_selectElement(e){e&&e.textContent&&this._items.indexOf(e.textContent)>-1&&(this._currentElementIndex=Number(e.dataset.itemIndex),this._selectElementByIndex(this._currentElementIndex))}_getCurrentRepetition(){return this._currentElementIndex?Math.floor(this._currentElementIndex/this._items.length):0}_selectElementByIndex(e){let t=e;const i=this._itemsToShow.length,l=this._itemCellHeight*t;this.cyclic&&(t=this._handleArrayBorderReached(t)),t<i&&t>-1&&(this._scroller.scrollTo(0,l,5,100),this._currentElementIndex=t,this.value=this._items[t-this._getCurrentRepetition()*this._items.length],this.fireEvent("select",{value:this.value}))}_timesMultipliedOnCyclic(){const t=Math.round(70/this._items.length);return Math.max(3,t)}_buildItemsToShow(){let e=this._items;if(this.cyclic&&e.length<this._items.length*this._timesMultipliedOnCyclic())for(let t=0;t<this._timesMultipliedOnCyclic();t++)e=e.concat(this._items);this._itemsToShow=e.map(t=>({value:t,selected:t===this.value}))}_handleArrayBorderReached(e){const t=this._itemsToShow.length,i=7;let n=e;return i>n?n+=this._items.length*2:n>t-i&&(n-=this._items.length*2),n}_handleWheel(e){e&&(e.stopPropagation(),e.preventDefault(),!(e.timeStamp===this._prevWheelTimestamp||!this.expanded)&&(this._prevWheelTimestamp&&(e.timeStamp<this._prevWheelTimestamp+250||!this.expanded)||(e.deltaY>0?this._itemUp():e.deltaY<0&&this._itemDown(),this._prevWheelTimestamp=e.timeStamp)))}_onclick(e){const t=e.target;t.classList.contains("ui5-wheelslider-item")&&(this.expanded?(this.value=t.textContent||"",this._selectElement(t),this.fireEvent("select",{value:this.value})):this.expanded=!0)}_onArrowDown(e){e.preventDefault(),this._itemDown()}_onArrowUp(e){e.preventDefault(),this._itemUp()}_itemDown(){const e=this._currentElementIndex+1;this._selectElementByIndex(e)}_itemUp(){const e=this._currentElementIndex-1;this._selectElementByIndex(e)}_onkeydown(e){this.expanded&&(j(e)&&this._onArrowUp(e),K(e)&&this._onArrowDown(e),Y(e)&&this._selectLimitCell(e,!1),Z(e)&&this._selectLimitCell(e,!0))}_selectLimitCell(e,t){e.preventDefault();const i=this.cyclic?this._items.length:0;t?this._selectElementByIndex(this._items.length-1+i):this._selectElementByIndex(i)}};m([o({type:Boolean})],c.prototype,"disabled",void 0);m([o({defaultValue:"0"})],c.prototype,"value",void 0);m([o({defaultValue:""})],c.prototype,"label",void 0);m([o({type:Boolean})],c.prototype,"expanded",void 0);m([o({type:Boolean})],c.prototype,"cyclic",void 0);m([o({multiple:!0,compareValues:!0})],c.prototype,"_items",void 0);m([o({type:Object,multiple:!0})],c.prototype,"_itemsToShow",void 0);c=m([A({tag:"ui5-wheelslider",renderer:F,styles:$e,template:ye,dependencies:[J]}),g("select",{detail:{value:{type:String}}}),g("expand"),g("collapse")],c);c.define();const He=c,b=(s,e=1)=>{const t=[];for(let i=0;i<s;i++)if(i%e===0){let n=i.toString();n.length===1&&(n=`0${n}`),t.push(n)}return t},Ee=(s,e)=>{let t=[];if(s.isTwelveHoursFormat?t=b(e||12,1):t=b(e||24,1),s.minHour===1)for(let i=0;i<t.length;i++){const n=parseInt(t[i])+1;n.toString().length===1?t[i]=`0${n.toString()}`:t[i]=n.toString()}return t},ke=(s,e)=>b(s||60,e),qe=(s,e)=>b(s||60,e),Ie=s=>{const e={minHour:0,maxHour:0,isTwelveHoursFormat:!1};return s==="hour0_23"?(e.minHour=0,e.maxHour=23,e.isTwelveHoursFormat=!1):s==="hour1_24"?(e.minHour=1,e.maxHour=24,e.isTwelveHoursFormat=!1):s==="hour0_11"?(e.minHour=0,e.maxHour=11,e.isTwelveHoursFormat=!0):s==="hour1_12"&&(e.minHour=1,e.maxHour=12,e.isTwelveHoursFormat=!0),e},De=(s,e)=>{const t=[!1,!1,!1,!1];for(let i=0;i<s.length;i++)e.maxHour!==0&&(t[0]=!0),e.maxHour!==0&&e.isTwelveHoursFormat&&(t[0]=!0),s[i].type==="minute"&&(t[1]=!0),s[i].type==="second"&&(t[2]=!0),s[i].type==="amPmMarker"&&(t[3]=!0);return t};S("@ui5/webcomponents-theming","sap_fiori_3",async()=>I);S("@ui5/webcomponents","sap_fiori_3",async()=>D);const Ae={packageName:"@ui5/webcomponents",fileName:"themes/TimeSelection.css",content:`:host(:not([hidden])) {
    display: inline-block;
    min-width: 18rem;
}

.ui5-time-selection-root {
    width: 100%;
    height: 100%;
	display: flex;
	justify-content: center;
	align-items: stretch;
	direction: ltr;
	box-sizing: border-box;
}

.ui5-time-selection-root.ui5-phone{
	height: 90vh;
}

:host(.ui5-dt-time.ui5-dt-cal--hidden) .ui5-time-selection-root.ui5-phone {
	height: 80vh;
}

[ui5-wheelslider] {
	padding-left: 0.25rem;
	padding-right: 0.25rem;
}
`};var h=globalThis&&globalThis.__decorate||function(s,e,t,i){var n=arguments.length,l=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,_;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(s,e,t,i);else for(var p=s.length-1;p>=0;p--)(_=s[p])&&(l=(n<3?_(l):n>3?_(e,t,l):_(e,t))||l);return n>3&&l&&Object.defineProperty(e,t,l),l},w;let a=w=class extends q{static async onDefine(){[w.i18nBundle]=await Promise.all([O("@ui5/webcomponents"),U(f().getLanguage(),f().getRegion(),f().getScript())])}constructor(){super()}get _hoursConfiguration(){const t=this.getFormat().aFormatArray.find(i=>i.type.startsWith("hour"));return Ie(t?t.type:"hour0_23")}get _neededSliders(){const e=this.getFormat().aFormatArray;return De(e,this._hoursConfiguration)}get _hasHoursSlider(){return this._neededSliders[0]&&!this.hideHours}get _hasMinutesSlider(){return this._neededSliders[1]&&!this.hideMinutes}get _hasSecondsSlider(){return this._neededSliders[2]&&!this.hideSeconds}get _hasPeriodsSlider(){return this._neededSliders[3]}get secondsArray(){return qe(this.maxSeconds?this.maxSeconds+1:void 0,this.secondsStep)}get minutesArray(){return ke(this.maxMinutes?this.maxMinutes+1:void 0,this.minutesStep)}get hoursArray(){return Ee(this._hoursConfiguration,this.maxHours?this.maxHours+1:void 0)}get periodsArray(){return this.getFormat().aDayPeriodsAbbrev.map(t=>t.toUpperCase())}get _hoursSliderFocused(){return this._currentSlider==="hours"}get _minutesSliderFocused(){return this._currentSlider==="minutes"}get _secondsSliderFocused(){return this._currentSlider==="seconds"}get _periodSliderFocused(){return this._currentSlider==="periods"}get _hours(){let e;const t=this.validDateValue;return this._hoursConfiguration.isTwelveHoursFormat&&t.getHours()>this._hoursConfiguration.maxHour?e=t.getHours()-12:this._hoursConfiguration.isTwelveHoursFormat&&t.getHours()<this._hoursConfiguration.minHour?e=t.getHours()+12:e=t.getHours(),e.toString().length===1&&(e=`0${e}`),e.toString()}get _minutes(){const e=this.validDateValue.getMinutes().toString();return e.length===1?`0${e}`:e}get _seconds(){const e=this.validDateValue.getSeconds().toString();return e.length===1?`0${e}`:e}get _period(){if(!this._hoursConfiguration.isTwelveHoursFormat)return;let e;const t=this.validDateValue;return this._hoursConfiguration.minHour===1?e=t.getHours()>=this._hoursConfiguration.maxHour?this.periodsArray[1]:this.periodsArray[0]:e=t.getHours()>this._hoursConfiguration.maxHour||t.getHours()===this._hoursConfiguration.minHour?this.periodsArray[1]:this.periodsArray[0],e}setValue(e){const t=this.formatValue(e);this.isValid(t)&&(this.value=this.normalizeValue(t),this.fireEvent("change",{value:this.value,valid:!0}))}onHoursChange(e){let t=parseInt(e.detail.value);this._hoursConfiguration.isTwelveHoursFormat&&(this._period===this.periodsArray[0]&&(t=t===12?0:t),this._period===this.periodsArray[1]&&(t=t===12?t:t+12));const n=this.validDateValue;n.setHours(t),this.setValue(n)}onMinutesChange(e){const t=parseInt(e.detail.value),i=this.validDateValue;i.setMinutes(t),this.setValue(i)}onSecondsChange(e){const t=parseInt(e.detail.value),i=this.validDateValue;i.setSeconds(t),this.setValue(i)}onPeriodChange(e){const t=e.detail.value,i=this.validDateValue;t===this.periodsArray[0]&&i.getHours()>=12&&i.setHours(i.getHours()-12),t===this.periodsArray[1]&&i.getHours()<12&&i.setHours(i.getHours()+12),this.setValue(i)}isValid(e){return e===""||this.getFormat().parse(e)}normalizeValue(e){return e===""?e:this.getFormat().format(this.getFormat().parse(e))}get _formatPattern(){const e=this.formatPattern,t=!!e.match(/H/i),i=!e||!t,n=W(f());return i?n.getCombinedDateTimePattern("medium","medium",void 0):e}get _isPattern(){return this._formatPattern!=="medium"&&this._formatPattern!=="short"&&this._formatPattern!=="long"}selectSlider(e){const t=e.target;this._setCurrentSlider(t.closest("[ui5-wheelslider]").getAttribute("data-sap-slider"))}_setCurrentSlider(e){this._currentSlider!==e&&(this._currentSlider=e,this.fireEvent("slider-change",{slider:e}))}get _currentSliderDOM(){return this.shadowRoot.querySelector(`[data-sap-slider="${this._currentSlider}"]`)}get _activeSliders(){return[this._hasHoursSlider?"hours":"",this._hasMinutesSlider?"minutes":"",this._hasSecondsSlider?"seconds":"",this._hasPeriodsSlider?"periods":""].filter(e=>!!e)}_onfocusin(e){this._currentSlider||this._setCurrentSlider(this._activeSliders[0]),e.target===e.currentTarget&&this._currentSliderDOM.focus()}_onfocusout(e){this.shadowRoot.contains(e.relatedTarget)||this._setCurrentSlider("")}_onkeydown(e){if(!(T(e)||C(e)))return;e.preventDefault();const t=this._activeSliders,n=e.target.closest("[ui5-wheelslider]").getAttribute("data-sap-slider");let l=t.indexOf(n);T(e)?l=l===0?t.length-1:l-1:C(e)&&(l=l===t.length-1?0:l+1),this._setCurrentSlider(t[l]),this._currentSliderDOM.focus()}_handleWheel(e){e.preventDefault()}getFormat(){let e;return this._isPattern?e=$.getDateInstance({calendarType:this._calendarType,pattern:this._formatPattern}):e=$.getDateInstance({calendarType:this._calendarType,style:this._formatPattern}),e}formatValue(e){return this.getFormat().format(e)}get dateValue(){return this.value?this.getFormat().parse(this.value):new Date}get validDateValue(){return this.value!==void 0&&this.isValid(this.value)?this.dateValue:new Date}get hoursSliderTitle(){return w.i18nBundle.getText(Q)}get minutesSliderTitle(){return w.i18nBundle.getText(X)}get secondsSliderTitle(){return w.i18nBundle.getText(ee)}get periodSliderTitle(){return"AM/PM"}get classes(){return{root:{"ui5-time-selection-root":!0,"ui5-phone":P()}}}};h([o({defaultValue:void 0})],a.prototype,"value",void 0);h([o()],a.prototype,"formatPattern",void 0);h([o({type:Boolean})],a.prototype,"hideHours",void 0);h([o({type:Boolean})],a.prototype,"hideMinutes",void 0);h([o({type:Boolean})],a.prototype,"hideSeconds",void 0);h([o({validator:v})],a.prototype,"maxHours",void 0);h([o({validator:v})],a.prototype,"maxMinutes",void 0);h([o({validator:v})],a.prototype,"maxSeconds",void 0);h([o({validator:v,defaultValue:1})],a.prototype,"secondsStep",void 0);h([o({validator:v,defaultValue:1})],a.prototype,"minutesStep",void 0);h([o({defaultValue:"hours"})],a.prototype,"_currentSlider",void 0);h([o({type:N})],a.prototype,"_calendarType",void 0);a=w=h([A({tag:"ui5-time-selection",languageAware:!0,renderer:F,styles:Ae,template:de,dependencies:[He]}),g("change",{detail:{value:{type:String},valid:{type:Boolean}}}),g("sliderChange",{detail:{slider:{type:String}}})],a);a.define();const Ze=a;export{Ze as T};
//# sourceMappingURL=TimeSelection-932cfad4.js.map
