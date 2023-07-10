import{p as c,c as J,d as Ke,e as h,l as r,s as D,a as re,b as se}from"./withWebComponent-d4224c1c.js";import{I as tt,e as v,c as j}from"./Icon-70a9e5b9.js";import{s as at}from"./slot-76e48863.js";import{U as it,a as nt,g as L,C as oe,b as rt,D as E,c as Ue}from"./Gregorian-f31ae0ec.js";import{m as T,U as ke,d as pe,a as M,y as st}from"./UI5Element-78be0f3d.js";import{b as B,c as ie,a0 as He,O as ve,q as we,s as $e,o as xe,p as Ce,t as Se,u as Be,V as ot,a1 as dt,X as ct,a2 as lt,_ as _t,$ as ut,m as G,n as Me,D as Pe,E as Ye,Z as ht,a3 as pt}from"./Icons-26e87c01.js";import{I as de}from"./Integer-f7f172c9.js";import{f as mt}from"./LocaleData-0b80b820.js";import"./slim-arrow-left-9b1e01a2.js";import"./slim-arrow-right-ccb981dd.js";import{o as le}from"./class-map-18f572ce.js";import{ap as yt,aq as ft,ar as gt,as as vt,at as bt,au as Dt,av as Tt}from"./i18n-defaults-f002f496.js";import{s as kt}from"./style-map-54298215.js";var be;(function(s){s.Single="Single",s.Multiple="Multiple",s.Range="Range"})(be||(be={}));const w=be,wt=it;class Y extends wt{}const N=nt;let _=class _e{constructor(e,t,a,i){let n=arguments,o,d,l;switch(n.length){case 0:return d=Y.getInstance(),this.constructor(d.getFullYear(),d.getMonth(),d.getDate());case 1:case 2:if(!(n[0]instanceof _e))throw new Error("Invalid arguments: the first argument must be of type CalendarDate.");l=n[1]?n[1]:n[0]._oUDate.sCalendarType,o=Y.getInstance(n[0].valueOf()),o.setFullYear(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate()),o.setHours(o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds()),this._oUDate=Ae(o,l);break;case 3:case 4:H(n[0],`Invalid year: ${n[0]}`),H(n[1],`Invalid month: ${n[1]}`),H(n[2],`Invalid date: ${n[2]}`),o=Y.getInstance(0,0,1),o.setFullYear(n[0],n[1],n[2]),n[3]&&(l=n[3]),this._oUDate=Ae(o,l);break;default:throw new Error(`Invalid arguments. Accepted arguments are: 1) oCalendarDate, (optional)calendarTypeor 2) year, month, date, (optional) calendarType${n}`)}}getYear(){return this._oUDate.getUTCFullYear()}setYear(e){return H(e,`Invalid year: ${e}`),this._oUDate.setUTCFullYear(e),this}getMonth(){return this._oUDate.getUTCMonth()}setMonth(e,t){return H(e,`Invalid month: ${e}`),t||t===0?(H(t,`Invalid date: ${t}`),this._oUDate.setUTCMonth(e,t)):this._oUDate.setUTCMonth(e),this}getDate(){return this._oUDate.getUTCDate()}setDate(e){return H(e,`Invalid date: ${e}`),this._oUDate.setUTCDate(e),this}getDay(){return this._oUDate.getUTCDay()}getCalendarType(){return this._oUDate.sCalendarType}isBefore(e){return Z(e),this.valueOf()<e.valueOf()}isAfter(e){return Z(e),this.valueOf()>e.valueOf()}isSameOrBefore(e){return Z(e),this.valueOf()<=e.valueOf()}isSameOrAfter(e){return Z(e),this.valueOf()>=e.valueOf()}isSame(e){return Z(e),this.valueOf()===e.valueOf()}toLocalJSDate(){const e=Y.getInstance(this._oUDate.getTime());return e.setFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),e.setHours(0,0,0,0),e}toUTCJSDate(){const e=Y.getInstance(this._oUDate.getTime());return e.setUTCHours(0,0,0,0),e}toString(){return`${this._oUDate.sCalendarType}: ${this.getYear()}/${this.getMonth()+1}/${this.getDate()}`}valueOf(){return this._oUDate.getTime()}static fromLocalJSDate(e,t){function a(i){return i&&Object.prototype.toString.call(i)==="[object Date]"&&!isNaN(i)}if(!a(e))throw new Error(`Date parameter must be a JavaScript Date object: [${e}].`);return new _e(e.getFullYear(),e.getMonth(),e.getDate(),t)}static fromTimestamp(e,t){const a=new _e(0,0,1);let i;try{i=N.getInstance(Y.getInstance(e),t)}catch{i=new Date(NaN)}return a._oUDate=i,a}};function Ae(s,e){return e?N.getInstance(We(s),e):new N(We(s).getTime())}function We(s){const e=new Date(Date.UTC(0,0,1));return e.setUTCFullYear(s.getFullYear(),s.getMonth(),s.getDate()),e}function Z(s){if(!(s instanceof _))throw new Error(`Invalid calendar date: [${s}]. Expected: CalendarDate`)}function H(s,e){if(s===void 0||s===1/0||isNaN(s))throw e}const $t=s=>{const e=new _(s);return e.setDate(1),e.setMonth(e.getMonth()+1),e.setDate(0),e.getDate()},ae=(s,e,t,a)=>{let i=_.fromLocalJSDate(Y.getInstance(t*1e3),s),n=_.fromLocalJSDate(Y.getInstance(t*1e3),s);return i.setDate(1),a&&(i.setMonth(0),n.setMonth(11)),n.setDate($t(n)),i=new _(i,e),n=new _(n,e),{firstDate:i,lastDate:n}},Je=(s,e,t)=>{const a=L(T()),i=a.getIntervalPattern(""),n=a.getMonthsStandAlone("abbreviated",t),o=a.getMonthsStandAlone("wide",t);return s===e?{text:a.getMonths("abbreviated",t)[s],textInfo:a.getMonths("wide",t)[s]}:{text:i.replace(/\{0\}/,n[s]).replace(/\{1\}/,n[e]),textInfo:i.replace(/\{0\}/,o[s]).replace(/\{1\}/,o[e])}};var Ve=globalThis&&globalThis.__decorate||function(s,e,t,a){var i=arguments.length,n=i<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,a);else for(var d=s.length-1;d>=0;d--)(o=s[d])&&(n=(i<3?o(n):i>3?o(e,t,n):o(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n};let ne=class extends ke{};Ve([c()],ne.prototype,"value",void 0);ne=Ve([J("ui5-date")],ne);ne.define();const Oe=ne,Ta=Object.freeze(Object.defineProperty({__proto__:null,default:Oe},Symbol.toStringTag,{value:"Module"})),xt=(s,e,t,a=!0,i,n)=>{const o=new _(s);switch(t){case"day":o.setDate(s.getDate()+e);break;case"month":if(a){o.setMonth(s.getMonth()+e);const d=e===-1&&o.getMonth()===s.getMonth(),l=e===1&&o.getMonth()-s.getMonth()>1;(d||l)&&o.setDate(0)}else e===1&&o.setMonth(o.getMonth()+1,1),e===-1&&o.setDate(0);break;case"year":o.setYear(s.getYear()+e),o.getMonth()!==s.getMonth()&&o.setDate(0);break}return i&&o.isBefore(i)?new _(i):n&&o.isAfter(n)?new _(n):o},Ct=s=>_.fromLocalJSDate(Y.getInstance(),s).valueOf()/1e3,q=new Map,St=s=>{const e=`min ${s}`;if(!q.has(e)){const t=new _(1,0,1,s);t.setYear(1),t.setMonth(0),t.setDate(1),q.set(e,t)}return q.get(e)},qe=s=>{const e=`max ${s}`;if(!q.has(e)){const t=new _(1,0,1,s);t.setYear(9999),t.setMonth(11);const a=new _(t,s);a.setDate(1),a.setMonth(a.getMonth()+1,0),t.setDate(a.getDate()),q.set(e,t)}return q.get(e)};var X=globalThis&&globalThis.__decorate||function(s,e,t,a){var i=arguments.length,n=i<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,a);else for(var d=s.length-1;d>=0;d--)(o=s[d])&&(n=(i<3?o(n):i>3?o(e,t,n):o(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n},De;let F=De=class extends ke{constructor(){super()}get _primaryCalendarType(){const e=L(T());return this.primaryCalendarType||rt()||e.getPreferredCalendarType()}get _minDate(){let e;return this.minDate&&(e=this._getMinMaxCalendarDateFromString(this.minDate)),e||St(this._primaryCalendarType)}get _maxDate(){let e;return this.maxDate&&(e=this._getMinMaxCalendarDateFromString(this.maxDate)),e||qe(this._primaryCalendarType)}get _formatPattern(){return this.formatPattern||"medium"}get _isPattern(){return this._formatPattern!=="medium"&&this._formatPattern!=="short"&&this._formatPattern!=="long"}_getMinMaxCalendarDateFromString(e){if(this.getFormat().parse(e))return this._getCalendarDateFromString(e);const t=this.getISOFormat().parse(e);if(t)return _.fromLocalJSDate(t,this._primaryCalendarType)}_getCalendarDateFromString(e){const t=this.getFormat().parse(e);if(t)return _.fromLocalJSDate(t,this._primaryCalendarType)}_getTimeStampFromString(e){const t=this._getCalendarDateFromString(e);if(t)return t.toUTCJSDate().valueOf()}_getStringFromTimestamp(e){const t=new Date(e);return this.getFormat().format(t,!0)}getFormat(){return this._isPattern?E.getDateInstance({strictParsing:!0,pattern:this._formatPattern,calendarType:this._primaryCalendarType}):E.getDateInstance({strictParsing:!0,style:this._formatPattern,calendarType:this._primaryCalendarType})}getISOFormat(){return this._isoFormatInstance||(this._isoFormatInstance=E.getDateInstance({strictParsing:!0,pattern:"YYYY-MM-dd",calendarType:this._primaryCalendarType})),this._isoFormatInstance}static async onDefine(){[De.i18nBundle]=await Promise.all([pe("@ui5/webcomponents"),mt(T().getLanguage(),T().getRegion(),T().getScript())])}};X([c({type:oe})],F.prototype,"primaryCalendarType",void 0);X([c({type:oe})],F.prototype,"secondaryCalendarType",void 0);X([c()],F.prototype,"formatPattern",void 0);X([c()],F.prototype,"minDate",void 0);X([c()],F.prototype,"maxDate",void 0);F=De=X([J({languageAware:!0,renderer:Ke})],F);const Bt=F;var Mt=globalThis&&globalThis.__decorate||function(s,e,t,a){var i=arguments.length,n=i<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,a);else for(var d=s.length-1;d>=0;d--)(o=s[d])&&(n=(i<3?o(n):i>3?o(e,t,n):o(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n};class ce extends Bt{get _minTimestamp(){return this._minDate.valueOf()/1e3}get _maxTimestamp(){return this._maxDate.valueOf()/1e3}get _timestamp(){let e=this.timestamp!==void 0?this.timestamp:Ct(this._primaryCalendarType);return this._maxTimestamp&&this._maxTimestamp<e?e=this._maxTimestamp:this._minTimestamp&&this._minTimestamp>e&&(e=this._minTimestamp),e}get _localDate(){return new Date(this._timestamp*1e3)}get _calendarDate(){return _.fromTimestamp(this._localDate.getTime(),this._primaryCalendarType)}_safelySetTimestamp(e){const t=this._minDate.valueOf()/1e3,a=this._maxDate.valueOf()/1e3;e<t&&(e=t),e>a&&(e=a),this.timestamp=e}_safelyModifyTimestampBy(e,t,a){const i=xt(this._calendarDate,e,t,a);this._safelySetTimestamp(i.valueOf()/1e3)}_getTimestampFromDom(e){const t=e.getAttribute("data-sap-timestamp");return parseInt(t)}}Mt([c({validator:de})],ce.prototype,"timestamp",void 0);function Pt(s,e,t){return t?h`<div class="ui5-calheader-root"><div data-ui5-cal-header-btn-prev class="${le(this.classes.prevButton)}" role="button" @mousedown=${this.onPrevButtonClick} title="${r(this._prevButtonText)}"><${D("ui5-icon",e,t)} class="ui5-calheader-arrowicon" name="slim-arrow-left"></${D("ui5-icon",e,t)}></div><div class="ui5-calheader-midcontainer"><div data-ui5-cal-header-btn-month class="ui5-calheader-arrowbtn ui5-calheader-middlebtn" ?hidden="${this.isMonthButtonHidden}" tabindex="0" role="button" aria-label="${r(this.accInfo.ariaLabelMonthButton)}" @click=${this.onMonthButtonClick} @keydown=${this.onMonthButtonKeyDown} @keyup=${this.onMonthButtonKeyUp}><span>${r(this._monthButtonText)}</span>${this.hasSecondaryCalendarType?Le.call(this,s,e,t):void 0}</div><div data-ui5-cal-header-btn-year class="ui5-calheader-arrowbtn ui5-calheader-middlebtn" ?hidden="${this.isYearButtonHidden}" tabindex="0" role="button" @click=${this.onYearButtonClick} @keydown=${this.onYearButtonKeyDown} @keyup=${this.onYearButtonKeyUp}><span>${r(this._yearButtonText)}</span>${this.hasSecondaryCalendarType?je.call(this,s,e,t):void 0}</div></div><div data-ui5-cal-header-btn-next class="${le(this.classes.nextButton)}" role="button" @mousedown=${this.onNextButtonClick} title=${r(this._nextButtonText)}><${D("ui5-icon",e,t)} class="ui5-calheader-arrowicon" name="slim-arrow-right"></${D("ui5-icon",e,t)}></div></div>`:h`<div class="ui5-calheader-root"><div data-ui5-cal-header-btn-prev class="${le(this.classes.prevButton)}" role="button" @mousedown=${this.onPrevButtonClick} title="${r(this._prevButtonText)}"><ui5-icon class="ui5-calheader-arrowicon" name="slim-arrow-left"></ui5-icon></div><div class="ui5-calheader-midcontainer"><div data-ui5-cal-header-btn-month class="ui5-calheader-arrowbtn ui5-calheader-middlebtn" ?hidden="${this.isMonthButtonHidden}" tabindex="0" role="button" aria-label="${r(this.accInfo.ariaLabelMonthButton)}" @click=${this.onMonthButtonClick} @keydown=${this.onMonthButtonKeyDown} @keyup=${this.onMonthButtonKeyUp}><span>${r(this._monthButtonText)}</span>${this.hasSecondaryCalendarType?Le.call(this,s,e,t):void 0}</div><div data-ui5-cal-header-btn-year class="ui5-calheader-arrowbtn ui5-calheader-middlebtn" ?hidden="${this.isYearButtonHidden}" tabindex="0" role="button" @click=${this.onYearButtonClick} @keydown=${this.onYearButtonKeyDown} @keyup=${this.onYearButtonKeyUp}><span>${r(this._yearButtonText)}</span>${this.hasSecondaryCalendarType?je.call(this,s,e,t):void 0}</div></div><div data-ui5-cal-header-btn-next class="${le(this.classes.nextButton)}" role="button" @mousedown=${this.onNextButtonClick} title=${r(this._nextButtonText)}><ui5-icon class="ui5-calheader-arrowicon" name="slim-arrow-right"></ui5-icon></div></div>`}function Le(s,e,t){return h`<span class="ui5-calheader-btn-sectext">${r(this._secondMonthButtonText)}</span>`}function je(s,e,t){return h`<span class="ui5-calheader-btn-sectext">${r(this._yearButtonTextSecType)}</span>`}M("@ui5/webcomponents-theming","sap_fiori_3",async()=>re);M("@ui5/webcomponents","sap_fiori_3",async()=>se);const Yt={packageName:"@ui5/webcomponents",fileName:"themes/CalendarHeader.css",content:`:host {
	display: block;
	width: 100%;
	height: 100%;
}

.ui5-calheader-root {
	display: flex;
	height: 100%;
	padding: var(--_ui5_calendar_header_padding);
	box-sizing: border-box;
}

.ui5-calheader-arrowbtn {
	display: flex;
	justify-content: center;
	align-items: center;
	width: var(--_ui5_calendar_header_arrow_button_width);
	background-color: var(--sapButton_Lite_Background);
	color: var(--sapButton_Lite_TextColor);
	cursor: pointer;
	overflow: hidden;
	white-space: nowrap;
	padding: 0;
	font-size: var(--sapFontSize);
	user-select: none;
}

.ui5-calheader-arrowbtn.ui5-calheader-arrowbtn-disabled:hover,
.ui5-calheader-arrowbtn.ui5-calheader-arrowbtn-disabled:active,
.ui5-calheader-arrowbtn.ui5-calheader-arrowbtn-disabled:focus,
.ui5-calheader-arrowbtn.ui5-calheader-arrowbtn-disabled {
	opacity: 0.4;
	cursor: default;
	outline: none;
	background-color: var(--sapButton_Lite_Background);
	color: var(--sapButton_Lite_TextColor);
}

[hidden].ui5-calheader-arrowbtn.ui5-calheader-middlebtn {
	display: none;
}

.ui5-calheader-arrowbtn:focus {
	outline: none;
}

.ui5-calheader-arrowbtn:hover {
	background-color: var(--sapButton_Hover_Background);
	color: var(--sapButton_Lite_TextColor);
	box-shadow: var(--_ui5_calendar_header_arrow_button_box_shadow);
}

.ui5-calheader-arrowbtn:active {
	background-color: var(--sapButton_Active_Background);
	color: var(--sapButton_Active_TextColor);
}

.ui5-calheader-arrowbtn,
.ui5-calheader-middlebtn {
	border: var(--_ui5_calendar_header_arrow_button_border);
	border-radius: var(--_ui5_calendar_header_arrow_button_border_radius);
	display:flex;
	background-color: var(--sapButton_Lite_Background);
	border-color: var(--sapButton_Lite_BorderColor);
}

.ui5-calheader-middlebtn {
	flex-direction: column;
	align-items: center;
	justify-content:center;
}

.ui5-calheader-arrowbtn:not(:active) .ui5-calheader-btn-sectext {
	color: var(--sapNeutralElementColor);
	font-size: var(--sapFontSmallSize);
}

.ui5-calheader-arrowicon {
	color: currentColor;
	pointer-events: none;
}

.ui5-calheader-midcontainer {
	display: flex;
	justify-content: space-around;
	flex: 1 1 auto;
	padding: 0 0.5rem;
}

.ui5-calheader-midcontainer .ui5-calheader-middlebtn:first-child {
	margin-inline-end: 0.5rem;
}

.ui5-calheader-middlebtn {
	font-family: var(--_ui5_button_fontFamily);
	width: var(--_ui5_calendar_header_middle_button_width);
	flex: var(--_ui5_calendar_header_middle_button_flex);
	position: relative;
	box-sizing: border-box;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
}

.ui5-calheader-middlebtn:focus {
	border: var(--_ui5_calendar_header_middle_button_focus_border);
	border-radius: var(--_ui5_calendar_header_middle_button_focus_border_radius);
	outline: var(--_ui5_calendar_header_middle_button_focus_outline);
	outline-offset: -0.125rem;
	background: var(--_ui5_calendar_header_middle_button_focus_background);
}

.ui5-calheader-middlebtn:focus:active {
	outline: var(--_ui5_calendar_header_middle_button_focus_active_outline);
	outline-offset: -0.0625rem;
	background: var(--_ui5_calendar_header_middle_button_focus_active_background)
}

.ui5-calheader-middlebtn:focus::after {
	content: "";
	display: var(--_ui5_calendar_header_middle_button_focus_after_display);
	width: var(--_ui5_calendar_header_middle_button_focus_after_width);
	height: var(--_ui5_calendar_header_middle_button_focus_after_height);
	border: var(--_ui5_calendar_header_middle_button_focus_after_border);
	position: absolute;
	top: var(--_ui5_calendar_header_middle_button_focus_after_top_offset);
	left: var(--_ui5_calendar_header_middle_button_focus_after_left_offset);
}

.ui5-calheader-middlebtn:focus:active::after {
	border-color: var(--sapContent_ContrastFocusColor);
}
`};var k=globalThis&&globalThis.__decorate||function(s,e,t,a){var i=arguments.length,n=i<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,a);else for(var d=s.length-1;d>=0;d--)(o=s[d])&&(n=(i<3?o(n):i>3?o(e,t,n):o(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n},ee;let m=ee=class extends ke{static async onDefine(){ee.i18nBundle=await pe("@ui5/webcomponents")}constructor(){super()}onBeforeRendering(){this._prevButtonText=ee.i18nBundle.getText(yt),this._nextButtonText=ee.i18nBundle.getText(ft),this.hasSecondaryCalendarType&&(this._secondMonthButtonText=this.buttonTextForSecondaryCalendarType.monthButtonText,this._secondYearButtonText=this.buttonTextForSecondaryCalendarType.yearButtonText)}onPrevButtonClick(e){if(this.isPrevButtonDisabled){e.preventDefault();return}this.fireEvent("previous-press",e),e.preventDefault()}onNextButtonClick(e){if(this.isNextButtonDisabled){e.preventDefault();return}this.fireEvent("next-press",e),e.preventDefault()}onMonthButtonClick(e){this.fireEvent("show-month-press",e)}onMonthButtonKeyDown(e){B(e)&&e.preventDefault(),ie(e)&&this.fireEvent("show-month-press",e)}onMonthButtonKeyUp(e){B(e)&&(e.preventDefault(),this.fireEvent("show-month-press",e))}onYearButtonClick(e){this.fireEvent("show-year-press",e)}onYearButtonKeyDown(e){B(e)&&e.preventDefault(),ie(e)&&this.fireEvent("show-year-press",e)}onYearButtonKeyUp(e){B(e)&&(e.preventDefault(),this.fireEvent("show-year-press",e))}get hasSecondaryCalendarType(){return!!this.secondaryCalendarType}get classes(){return{prevButton:{"ui5-calheader-arrowbtn":!0,"ui5-calheader-arrowbtn-disabled":this.isPrevButtonDisabled},nextButton:{"ui5-calheader-arrowbtn":!0,"ui5-calheader-arrowbtn-disabled":this.isNextButtonDisabled}}}get accInfo(){return{ariaLabelMonthButton:this.hasSecondaryCalendarType?`${this._monthButtonText}, ${this.buttonTextForSecondaryCalendarType.monthButtonInfo}`:`${this._monthButtonText}`}}};k([c({validator:de})],m.prototype,"timestamp",void 0);k([c({type:oe})],m.prototype,"primaryCalendarType",void 0);k([c({type:oe})],m.prototype,"secondaryCalendarType",void 0);k([c({type:Object})],m.prototype,"buttonTextForSecondaryCalendarType",void 0);k([c({type:Boolean})],m.prototype,"isNextButtonDisabled",void 0);k([c({type:Boolean})],m.prototype,"isPrevButtonDisabled",void 0);k([c({type:Boolean})],m.prototype,"isMonthButtonHidden",void 0);k([c()],m.prototype,"_monthButtonText",void 0);k([c()],m.prototype,"_yearButtonText",void 0);k([c()],m.prototype,"_yearButtonTextSecType",void 0);k([c({type:Boolean})],m.prototype,"isYearButtonHidden",void 0);m=ee=k([J({tag:"ui5-calendar-header",languageAware:!0,renderer:Ke,template:Pt,styles:Yt,dependencies:[tt]}),v("next-press"),v("previous-press"),v("show-month-press"),v("show-year-press")],m);m.define();const Ot=m,It=(s,e,t,a,i)=>{let n=0,o=0;const d=Number.isInteger(s)?s:i.getFirstDayOfWeek();if(a&&a.getLanguage()==="en"&&a.getRegion()==="US"){const l=new N(e.getTime());l.setUTCFullYear(t,0,1),o=l.getUTCDay();const u=new N(e.getTime());u.setUTCDate(u.getUTCDate()-u.getUTCDay()+o),n=Math.round((u.getTime()-l.getTime())/864e5/7)+1}else{const l=new N(e.getTime());l.setUTCDate(l.getUTCDate()-d),o=l.getUTCDay(),l.setUTCDate(l.getUTCDate()-o+4);const u=new N(l.getTime());u.setUTCMonth(0,1),o=u.getUTCDay();let g=0;o>4&&(g=7);const b=new N(u.getTime());b.setUTCDate(1-o+4+g),n=Math.round((l.getTime()-b.getTime())/864e5/7)+1}return n};function Nt(s,e,t){return h`<div class="ui5-dp-root" style="${kt(this.styles.wrapper)}" @keydown=${this._onkeydown} @keyup=${this._onkeyup} @click=${this._onclick} @mouseover=${this._onmouseover} @focusin=${this._onfocusin} @focusout=${this._onfocusout}><div id="${r(this._id)}-content" class="ui5-dp-content" role="grid" aria-roledescription="${r(this.ariaRoledescription)}"><div role="row" class="ui5-dp-days-names-container">${j(this._dayNames,(a,i)=>a._id||i,(a,i)=>Et.call(this,s,e,t,a,i))}</div>${j(this._weeks,(a,i)=>a._id||i,(a,i)=>Ft.call(this,s,e,t,a,i))}</div></div>`}function Et(s,e,t,a,i){return h`<div role="columnheader" aria-label="${r(a.name)}" class="${r(a.classes)}">${r(a.ultraShortName)}</div>`}function Ft(s,e,t,a,i){return h`${a.length?Rt.call(this,s,e,t,a,i):jt.call(this,s,e,t,a,i)}`}function Rt(s,e,t,a,i){return h`<div class="ui5-dp-weeks-row" role="row">${j(a,(n,o)=>n._id||o,(n,o)=>Ut.call(this,s,e,t,n,o))}</div>`}function Ut(s,e,t,a,i){return h`${a.timestamp?Ht.call(this,s,e,t,a,i):Wt.call(this,s,e,t,a,i)}`}function Ht(s,e,t,a,i){return h`<div tabindex="${r(a._tabIndex)}" ?data-sap-focus-ref="${a.focusRef}" data-sap-timestamp="${r(a.timestamp)}" role="gridcell" aria-selected="${r(a.ariaSelected)}" aria-label="${r(a.ariaLabel)}" aria-disabled="${r(a.ariaDisabled)}" class="${r(a.classes)}"><span class="ui5-dp-daytext" data-sap-timestamp="${r(a.timestamp)}">${r(a.day)}</span>${a._isSecondaryCalendarType?At.call(this,s,e,t,a,i):void 0}</div>`}function At(s,e,t,a,i){return h`<span class="ui5-dp-daytext ui5-dp-daysectext">${r(a.secondDay)}</span>`}function Wt(s,e,t,a,i){return h`${a.isHidden?void 0:Lt.call(this,s,e,t,a,i)}`}function Lt(s,e,t,a,i){return h`<div class="ui5-dp-weekname-container" role="rowheader" aria-label="Calendar Week ${r(a.weekNum)}"><span class="ui5-dp-weekname">${r(a.weekNum)}</span></div>`}function jt(s,e,t,a,i){return h`<div class="sapWCEmptyWeek"></div>`}M("@ui5/webcomponents-theming","sap_fiori_3",async()=>re);M("@ui5/webcomponents","sap_fiori_3",async()=>se);const zt={packageName:"@ui5/webcomponents",fileName:"themes/DayPicker.css",content:`:host(:not([hidden])) {
	display: block;
}

:host {
	height: 100%;
	width: 100%;
}

:host([hide-week-numbers]) .ui5-dp-content {
	flex-basis: 100%;
}

:host([secondary-calendar-type]) .ui5-dp-item {
	flex-direction: column;
	justify-content: var(--_ui5_day_picker_item_justify_content);
}

:host([secondary-calendar-type]) .ui5-dp-daytext {
	height: 1.575rem;
	padding-top: var(--_ui5_dp_two_calendar_item_text_padding_top)
}

:host([secondary-calendar-type]) .ui5-dp-daysectext {
	font-size: 0.625rem;
	height: var(--_ui5_dp_two_calendar_item_secondary_text_height);
	padding: 0 0.375rem 0.375rem 50%;
}

.ui5-dp-weekname,
.ui5-dp-dayname,
.ui5-dp-item {
	width: var(--_ui5_day_picker_item_width);
	height: var(--_ui5_day_picker_item_height);
	margin-top: var(--_ui5_daypicker_item_margin);
	margin-right: var(--_ui5_daypicker_item_margin);
	font-family: "72override", var(--sapFontFamily);
	border-radius: var(--_ui5_daypicker_item_border_radius);
}

.ui5-dp-weekname {
	color: var(--_ui5_daypicker_weekname_color);
}

.ui5-dp-weeks-row {
	display: flex;
}

.ui5-dp-content {
	display: flex;
	flex-basis: 87.5%;
	flex-direction: column;
	font-family: "72override", var(--sapFontFamily);
}

.ui5-dp-days-names-container {
	display: flex;
	height: var(--_ui5_daypicker_daynames_container_height);
}

.ui5-dp-weeknumber-container {
	padding-top: var(--_ui5_daypicker_weeknumbers_container_padding_top);
	flex-basis: 12.5%;
}

.ui5-dp-weekname,
.ui5-dp-dayname,
.ui5-dp-weekname-container,
.ui5-dp-item {
	display: flex;
	flex-grow: 1;
	justify-content: center;
	align-items: center;
	font-size: var(--sapFontSmallSize);
	outline: none;
	box-sizing: border-box;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
}

.ui5-dp-item {
	position: relative;
	color: var(--sapTextColor);
	background: var(--sapLegend_WorkingBackground);
	font-size: var(--sapFontSize);
	border: var(--_ui5_daypicker_item_border);
	border-radius: var(--_ui5_daypicker_item_border_radius);
}

.ui5-dp-item:hover {
	background: var(--sapList_Hover_Background);
}

.ui5-dp-daytext {
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
}

.ui5-dp-dayname {
	color: var(--_ui5_daypicker_dayname_color);
	height: 100%;
}

.ui5-dp-item.ui5-dp-item--weeekend {
	background: var(--sapLegend_NonWorkingBackground);
}

.ui5-dp-item.ui5-dp-item--disabled {
	pointer-events: none;
	opacity: 0.5;
}

.ui5-dp-item.ui5-dp-item--weeekend:hover {
	background: var(--sapList_Hover_Background);
	filter: var(--_ui5_daypicker_item_weeekend_filter);
}

.ui5-dp-item.ui5-dp-item--othermonth {
	color: var(--_ui5_daypicker_item_othermonth_color);
	background: var(--_ui5_daypicker_item_othermonth_background_color);
	border-color: transparent;
}

.ui5-dp-item.ui5-dp-item--othermonth:hover,
.ui5-dp-item.ui5-dp-item--weeekend.ui5-dp-item--othermonth:hover {
	color: var(--_ui5_daypicker_item_othermonth_hover_color);
	background: var(--sapList_Hover_Background);
}

.ui5-dp-item:focus::after {
	content: "";
	border: var(--_ui5_daypicker_item_not_selected_focus_border);
	position: absolute;
	inset: var(--_ui5_daypicker_item_no_selected_inset);
	outline: none;
	border-radius: var(--_ui5_daypicker_item_border_radius_focus_after);
}

.ui5-dp-item.ui5-dp-item--now::before {
	position: absolute;
	inset: var(--_ui5_daypicker_item_now_not_selected_inset);
	border: 0.125rem solid var(--_ui5_daypicker_item_now_border_color);
	content: "";
	border-radius: var(--_ui5_daypicker_item_border_radius);
}

.ui5-dp-item.ui5-dp-item--now.ui5-dp-item--selected {
	box-shadow: var(--_ui5_daypicker_item_now_box_shadow);
}

.ui5-dp-item.ui5-dp-item--selected {
	background: var(--sapContent_Selected_Background)
}

.ui5-dp-item.ui5-dp-item--selected:not(.ui5-dp-item.ui5-dp-item--now) .ui5-dp-daytext::after{
	position: absolute;
	inset: 0;
	border: var(--_ui5_daypicker_item_selected_border);
	content: "";
	border-radius: var(--_ui5_daypicker_item_border_radius_item);
}

.ui5-dp-item.ui5-dp-item--selected.ui5-dp-item.ui5-dp-item--now .ui5-dp-daytext {
	border: var(--_ui5_day_picker_item_selected_now_border);
	outline: var(--_ui5_daypicker_item_selected_text_outline);
	outline-offset: var(--_ui5_daypicker_item_now_selected_outline_offset);
	border-radius: var(--_ui5_daypicker_item_border_radius_item);
	font-family: var(--_ui5_daypicker_item_selected_text_font);
}

.ui5-dp-item.ui5-dp-item--selected .ui5-dp-daytext {
	background: var(--_ui5_daypicker_item_selected_background);
	color: var(--sapContent_Selected_TextColor);
	border-radius: var(--_ui5_daypicker_item_border_radius);
	border: var(--_ui5_daypicker_item_selected_text_border);
	font-family: var(--_ui5_daypicker_item_selected_text_font);
}

.ui5-dp-item.ui5-dp-item--selected:hover .ui5-dp-daytext {
	background: var(--_ui5_daypicker_item_selected_daytext_hover_background);
	color: var(--sapContent_Selected_TextColor);
}

.ui5-dp-item.ui5-dp-item--now:focus::after {
	inset: var(--_ui5_daypicker_item_now_inset);
	border-radius: var(--_ui5_daypicker_item_now_border_radius_focus_after);
	border: var(--_ui5_daypicker_item_now_border_focus_after);
	position: absolute;
	content: "";
	width: auto;
	height: auto;
}

.ui5-dp-item.ui5-dp-item--selected.ui5-dp-item--now:focus::after {
	inset: var(--_ui5_daypicker_item_now_inset);
	border-radius: var(--_ui5_day_picker_item_selected_now_border_radius_focus);
	border: var(--_ui5_day_picker_item_selected_now_border_focus);
	position: absolute;
	content: "";
	width: auto;
	height: auto;
}

.ui5-dp-item.ui5-dp-item--selected:hover {
	background: var( --_ui5_daypicker_item_selected_hover);
	color: var(--sapContent_ContrastTextColor);
}

.ui5-dp-item.ui5-dp-item--selected:focus::after {
	border-color: var(--_ui5_daypicker_item_selected_focus_color);
	border-width: var(--_ui5_daypicker_item_selected_focus_width);
}

.ui5-dp-items-container {
	outline: none;
}

.ui5-dp-item.ui5-dp-item--selected-between .ui5-dp-daytext,
.ui5-dp-item[hovered] .ui5-dp-daytext {
	border: var(--_ui5_daypicker_item_select_between_border);
	border-radius: var(--_ui5_daypicker_item_border_radius);
	background-color: var(--_ui5_daypicker_item_selected_between_text_background);
	color: var(--sapTextColor);
	font-weight: var(--_ui5_daypicker_item_selected_between_text_font);
}

.ui5-dp-item.ui5-dp-item--selected-between.ui5-dp-item--now:not(.ui5-dp-item--selected) .ui5-dp-daytext::after {
	content: "";
	position: absolute;
	inset: var(--_ui5_daypicker_item_now_selected_between_inset);
	border: var(--_ui5_daypicker_item_now_selected_between_border);
	border-radius: var(--_ui5_daypicker_item_now_selected_between_border_radius);
}

.ui5-dp-item.ui5-dp-item--selected-between,
.ui5-dp-item[hovered] {
	border-radius: var(--_ui5_daypicker_item_selected_between_border);
	background: var(--_ui5_daypicker_item_selected_between_background);
}

.ui5-dp-item.ui5-dp-item--selected-between:hover {
	background: var(--_ui5_daypicker_item_selected_between_hover_background);
}

.ui5-dp-item.ui5-dp-item--selected.ui5-dp-item--selected-between:focus::after {
	border-color: var(--sapContent_FocusColor);
}

.ui5-dp-items-container > :first-child {
	justify-content: flex-end;
}

.ui5-dp-emptyweek {
	height: var(--_ui5_day_picker_empty_height);
}

.ui5-dp-item.ui5-dp-item--now.ui5-dp-item--selected.ui5-dp-item--withsecondtype:focus::after{
	outline-offset: -0.1875rem;
	border-radius: var(--_ui5-dp-item_withsecondtype_border);
}

.ui5-dp-item.ui5-dp-item--selected.ui5-dp-item--now.ui5-dp-item--withsecondtype .ui5-dp-daysectext,
.ui5-dp-item.ui5-dp-item--now.ui5-dp-item--selected.ui5-dp-item--withsecondtype .ui5-dp-daytext {
	border: none;
	outline: none;
}

/* styles for calendar with two types */

:host([secondary-calendar-type]) .ui5-dp-item.ui5-dp-item--selected:not(.ui5-dp-item.ui5-dp-item--now) .ui5-dp-daytext::after{
	border-width: 0.125rem;
}

:host([secondary-calendar-type]) .ui5-dp-item.ui5-dp-item--now .ui5-dp-daytext {
	height: var(--_ui5_dp_two_calendar_item_primary_text_height);
	padding-top: var(--_ui5_dp_two_calendar_item_now_text_padding_top);
}

:host([secondary-calendar-type]) .ui5-dp-item.ui5-dp-item--now .ui5-dp-daysectext {
	height: var(--_ui5_dp_two_calendar_item_secondary_text_height);
	padding-top: 0;
    border-radius: var(--_ui5_dp_two_calendar_item_secondary_text_border_radios);
}

:host([secondary-calendar-type]) .ui5-dp-item.ui5-dp-item--selected.ui5-dp-item.ui5-dp-item--now .ui5-dp-daytext {
    border-radius: var(--_ui5_daypicker_two_calendar_item_border_radius);
}

:host([secondary-calendar-type]) .ui5-dp-item:focus::after {
	inset: var(--_ui5_daypicker_two_calendar_item_no_selected_inset);
	border-radius: var(--_ui5_daypicker_two_calendar_item_border_focus_border_radius);
}

:host([secondary-calendar-type]) .ui5-dp-item.ui5-dp-item--now::after {
	inset: var(--_ui5_daypicker_two_calendar_item_no_selected_focus_inset);
	border-radius: var(--_ui5_daypicker_two_calendar_item_no_select_focus_border_radius);
}

:host([secondary-calendar-type]) .ui5-dp-item.ui5-dp-item--selected:focus::after {
	border-width: var(--_ui5_daypicker_two_calendar_item_now_selected_border_width);
	inset: var(--_ui5_daypicker_two_calendar_item_now_selected_border_inset);
	border-radius: var(--_ui5_daypicker_two_calendar_item_border_focus_border_radius);
}

:host([secondary-calendar-type]) .ui5-dp-item.ui5-dp-item--selected.ui5-dp-item--now::after {
	inset: var(--_ui5_daypicker_two_calendar_item_now_inset);
	border-radius: var(--_ui5_daypicker_two_calendar_item_selected_now_border_radius_focus);
}

:host([secondary-calendar-type]) .ui5-dp-item.ui5-dp-item--now.ui5-dp-item--selected.ui5-dp-item--withsecondtype .ui5-dp-daytext:not(.ui5-dp-daysectext)::before {
	content: var(--_ui5_daypicker_two_calendar_item_now_day_text_content);
	position: absolute;
	inset: 0.3125rem;
	border-radius: var(--_ui5_daypicker_two_calendar_item_selected_now_border_radius_focus);
	outline: var(--_ui5_daypicker_item_selected__secondary_type_text_outline)
}`};var R=globalThis&&globalThis.__decorate||function(s,e,t,a){var i=arguments.length,n=i<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,a);else for(var d=s.length-1;d>=0;d--)(o=s[d])&&(n=(i<3?o(n):i>3?o(e,t,n):o(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n},te;const ze=(s,e,t)=>s>Math.min(e,t)&&s<Math.max(e,t),A=7;let $=te=class extends ce{onBeforeRendering(){const e=L(T());this._buildWeeks(e),this._buildDayNames(e)}_buildWeeks(e){if(this._hidden)return;this._weeks=[];const t=this._getFirstDayOfWeek(),a=e.getMonths("wide",this._primaryCalendarType),i=this.hasSecondaryCalendarType?e.getMonths("wide",this.secondaryCalendarType):[],n=te.i18nBundle.getText(gt),o=te.i18nBundle.getText(vt),d=this._getFirstDay(),l=_.fromLocalJSDate(new Date,this._primaryCalendarType),u=this._calendarDate,g=this._minDate,b=this._maxDate,p=this.hasSecondaryCalendarType?this._getSecondaryDay(d):void 0;let y=[];for(let C=0;C<A*6;C++){const O=d.valueOf()/1e3;let S=d.getDay()-t;S<0&&(S+=A);const I=d.getMonth()===u.getMonth()&&d.getDate()===u.getDate(),U=this._isDaySelected(O),fe=this._isDayInsideSelectionRange(O),ge=d.getMonth()!==u.getMonth(),Ie=this._isWeekend(d),Ne=d.valueOf()<g.valueOf()||d.valueOf()>b.valueOf(),Ee=d.isSame(l),Ge=d.getDay()===t,Fe=Ie?`${n} `:"",Re=Ee?`${o} `:"",Xe=p?p.getDate():"",Ze=p?p.getYear():"",Qe=i.length>0?i[p.getMonth()]:"",et=this.hasSecondaryCalendarType?`${Re}${Fe}${a[d.getMonth()]} ${d.getDate()}, ${d.getYear()}; ${Qe} ${Xe}, ${Ze}`:`${Re}${Fe}${a[d.getMonth()]} ${d.getDate()}, ${d.getYear()}`,P={timestamp:O.toString(),focusRef:I,_tabIndex:I?"0":"-1",selected:U,day:d.getDate(),secondDay:this.hasSecondaryCalendarType?p.getDate():void 0,_isSecondaryCalendarType:this.hasSecondaryCalendarType,classes:`ui5-dp-item ui5-dp-wday${S}`,ariaLabel:et,ariaSelected:U?"true":"false",ariaDisabled:ge?"true":void 0,disabled:Ne};Ge&&(P.classes+=" ui5-dp-firstday"),U&&(P.classes+=" ui5-dp-item--selected"),fe&&(P.classes+=" ui5-dp-item--selected-between"),Ee&&(P.classes+=" ui5-dp-item--now"),ge&&(P.classes+=" ui5-dp-item--othermonth"),Ie&&(P.classes+=" ui5-dp-item--weeekend"),Ne&&(P.classes+=" ui5-dp-item--disabled"),this.hasSecondaryCalendarType&&(P.classes+=" ui5-dp-item--withsecondtype"),y.push(P),S===A-1&&y.unshift({weekNum:It(Ue(),d.toUTCJSDate(),d.getYear(),T(),e),isHidden:this.shouldHideWeekNumbers}),y.length===A+1&&(this._weeks.push(y),y=[]),d.setDate(d.getDate()+1),this.hasSecondaryCalendarType&&p&&p.setDate(p.getDate()+1)}}_buildDayNames(e){if(this._hidden)return;let t;const a=e.getDays("wide",this._primaryCalendarType),i=e.getDays("abbreviated",this._primaryCalendarType);let n;this._dayNames=[],this._dayNames.push({classes:"ui5-dp-dayname",name:te.i18nBundle.getText(bt)});for(let o=0;o<A;o++)t=o+this._getFirstDayOfWeek(),t>A-1&&(t-=A),n={name:a[t],ultraShortName:i[t],classes:"ui5-dp-dayname"},this._dayNames.push(n);this._dayNames[1].classes+=" ui5-dp-firstday",this.shouldHideWeekNumbers&&this._dayNames.shift()}onAfterRendering(){this._autoFocus&&!this._hidden&&this.focus();const e=this.shadowRoot.querySelector("[data-sap-focus-ref]");e&&document.activeElement!==e&&e.focus()}_onfocusin(){this._autoFocus=!0}_onfocusout(){this._autoFocus=!1}_isDaySelected(e){return this.selectionMode===w.Single?e===this.selectedDates[0]:this.selectedDates.includes(e)}_isDayInsideSelectionRange(e){return this.selectionMode!==w.Range||!this.selectedDates.length?!1:this.selectedDates.length===1&&this._secondTimestamp?ze(e,this.selectedDates[0],this._secondTimestamp):ze(e,this.selectedDates[0],this.selectedDates[1])}_selectDate(e,t){const a=e.target;if(!this._isDayPressed(a))return;const i=this._getTimestampFromDom(a);this._safelySetTimestamp(i),this._updateSecondTimestamp(),this.selectionMode===w.Single?this.selectedDates=[i]:this.selectionMode===w.Multiple?this.selectedDates.length>0&&t?this._multipleSelection(i):this._toggleTimestampInSelection(i):this.selectedDates=this.selectedDates.length===1?[...this.selectedDates,i]:[i],this.fireEvent("change",{timestamp:this.timestamp,dates:this.selectedDates})}_selectWeek(){this._weeks.forEach(e=>{const t=e;t.findIndex(i=>{const n=_.fromTimestamp(parseInt(i.timestamp)*1e3);return n.getMonth()===this._calendarDate.getMonth()&&n.getDate()===this._calendarDate.getDate()})!==-1&&(t.some(n=>n.timestamp&&!this.selectedDates.includes(parseInt(n.timestamp)))?t.filter(n=>n.timestamp).forEach(n=>{this._addTimestampToSelection(parseInt(n.timestamp))}):t.filter(n=>n.timestamp).forEach(n=>{this._removeTimestampFromSelection(parseInt(n.timestamp))}))}),this.fireEvent("change",{timestamp:this.timestamp,dates:this.selectedDates})}_toggleTimestampInSelection(e){this.selectedDates.includes(e)?this._removeTimestampFromSelection(e):this._addTimestampToSelection(e)}_addTimestampToSelection(e){this.selectedDates.includes(e)||(this.selectedDates=[...this.selectedDates,e])}_removeTimestampFromSelection(e){this.selectedDates=this.selectedDates.filter(t=>t!==e)}_multipleSelection(e){const t=Math.min(...this.selectedDates),a=Math.max(...this.selectedDates);let i,n,o=!1;if(e<t)i=e,n=t;else if(e>=t&&e<=a){const u=Math.abs(e-t),g=Math.abs(e-a);u<g?(i=e,n=a):(i=t,n=e),o=!0}else i=a,n=e;const d=_.fromTimestamp(i*1e3),l=_.fromTimestamp(n*1e3);for(;d.valueOf()<=l.valueOf();)this[o?"_toggleTimestampInSelection":"_addTimestampToSelection"](d.valueOf()/1e3),d.setDate(d.getDate()+1)}_onmouseover(e){const a=e.target.closest(".ui5-dp-item");a&&this.selectionMode===w.Range&&this.selectedDates.length===1&&(this._secondTimestamp=this._getTimestampFromDom(a))}_onkeydown(e){let t=!0;if(ie(e)||He(e))this._selectDate(e,He(e));else if(B(e)||ve(e))e.preventDefault();else if(we(e))this._modifyTimestampBy(-1,"day",!1);else if($e(e))this._modifyTimestampBy(1,"day",!1);else if(xe(e))this._modifyTimestampBy(-7,"day",!1);else if(Ce(e))this._modifyTimestampBy(7,"day",!1);else if(Se(e))this._modifyTimestampBy(-1,"month");else if(Be(e))this._modifyTimestampBy(1,"month");else if(ot(e)||dt(e))this._modifyTimestampBy(-1,"year");else if(ct(e)||lt(e))this._modifyTimestampBy(1,"year");else if(_t(e))this._modifyTimestampBy(-10,"year");else if(ut(e))this._modifyTimestampBy(10,"year");else if(G(e)||Me(e))this._onHomeOrEnd(G(e));else if(Pe(e)){const a=new _(this._calendarDate,this._primaryCalendarType);a.setDate(1),this._setTimestamp(a.valueOf()/1e3)}else if(Ye(e)){const a=new _(this._calendarDate,this._primaryCalendarType);a.setMonth(a.getMonth()+1),a.setDate(0),this._setTimestamp(a.valueOf()/1e3)}else t=!1;t&&e.preventDefault()}_onkeyup(e){B(e)||ve(e)&&this.selectionMode!==w.Multiple?this._selectDate(e,!1):ve(e)&&this._selectWeek()}_onclick(e){this._selectDate(e,e.shiftKey)}_onHomeOrEnd(e){this._weeks.forEach(t=>{const a=t;if(a.findIndex(n=>{const o=_.fromTimestamp(parseInt(n.timestamp)*1e3);return o.getMonth()===this._calendarDate.getMonth()&&o.getDate()===this._calendarDate.getDate()})!==-1){const n=e?1:7;this._setTimestamp(parseInt(a[n].timestamp))}})}_hasPreviousPage(){return!(this._calendarDate.getMonth()===this._minDate.getMonth()&&this._calendarDate.getYear()===this._minDate.getYear())}_hasNextPage(){return!(this._calendarDate.getMonth()===this._maxDate.getMonth()&&this._calendarDate.getYear()===this._maxDate.getYear())}_showPreviousPage(){this._modifyTimestampBy(-1,"month",!1)}_showNextPage(){this._modifyTimestampBy(1,"month",!1)}_modifyTimestampBy(e,t,a){this._safelyModifyTimestampBy(e,t,a),this._updateSecondTimestamp(),this.fireEvent("navigate",{timestamp:this.timestamp})}_setTimestamp(e){this._safelySetTimestamp(e),this._updateSecondTimestamp(),this.fireEvent("navigate",{timestamp:this.timestamp})}_updateSecondTimestamp(){this.selectionMode===w.Range&&(this.selectedDates.length===1||this.selectedDates.length===2)&&(this._secondTimestamp=this.timestamp)}get shouldHideWeekNumbers(){return this._primaryCalendarType!==oe.Gregorian?!0:this.hideWeekNumbers}get hasSecondaryCalendarType(){return!!this.secondaryCalendarType}_isWeekend(e){const t=L(T()),a=e.getDay(),i=t.getWeekendStart(),n=t.getWeekendEnd();return a>=i&&a<=n||n<i&&(a>=i||a<=n)}_isDayPressed(e){const t=e.parentNode;return e.className.indexOf("ui5-dp-item")>-1||t&&t.classList&&t.classList.contains("ui5-dp-item")}_getSecondaryDay(e){return new _(e,this.secondaryCalendarType)}_getFirstDay(){let e;const t=this._getFirstDayOfWeek(),a=new _(this._calendarDate,this._primaryCalendarType);return a.setDate(1),e=a.getDay()-t,e<0&&(e=7+e),e>0&&a.setDate(1-e),a}_getFirstDayOfWeek(){const e=L(T()),t=Ue();return Number.isInteger(t)?t:e.getFirstDayOfWeek()}get styles(){return{wrapper:{display:this._hidden?"none":"flex","justify-content":"center"},main:{width:"100%"}}}get ariaRoledescription(){return this.hasSecondaryCalendarType?`${this._primaryCalendarType} calendar with secondary ${this.secondaryCalendarType} calendar`:`${this._primaryCalendarType} calendar`}};R([c({validator:de,multiple:!0,compareValues:!0})],$.prototype,"selectedDates",void 0);R([c({type:w,defaultValue:w.Single})],$.prototype,"selectionMode",void 0);R([c({type:Boolean})],$.prototype,"hideWeekNumbers",void 0);R([c({type:Object,multiple:!0})],$.prototype,"_weeks",void 0);R([c({type:Object,multiple:!0})],$.prototype,"_dayNames",void 0);R([c({type:Boolean,noAttribute:!0})],$.prototype,"_hidden",void 0);R([c()],$.prototype,"_secondTimestamp",void 0);$=te=R([J({tag:"ui5-daypicker",styles:zt,template:Nt}),v("change"),v("navigate")],$);$.define();const Kt=$;function Jt(s,e,t){return h`<div class="ui5-mp-root" role="grid" aria-roledescription="${r(this.roleDescription)}" aria-readonly="false" aria-multiselectable="false" @keydown=${this._onkeydown} @keyup=${this._onkeyup} @click=${this._selectMonth}>${j(this._months,(a,i)=>a._id||i,(a,i)=>Vt.call(this,s,e,t,a,i))}</div>`}function Vt(s,e,t,a,i){return h`<div class="ui5-mp-quarter">${j(a,(n,o)=>n._id||o,(n,o)=>qt.call(this,s,e,t,n,o))}</div>`}function qt(s,e,t,a,i){return h`<div data-sap-timestamp=${r(a.timestamp)} tabindex=${r(a._tabIndex)} ?data-sap-focus-ref="${a.focusRef}" class="${r(a.classes)}" role="gridcell" aria-selected="${r(a.ariaSelected)}"><span class="ui5-dp-monthtext">${r(a.name)}</span>${a.nameInSecType?Gt.call(this,s,e,t,a,i):void 0}</div>`}function Gt(s,e,t,a,i){return h`<span class="ui5-dp-monthtext ui5-dp-monthsectext">${r(a.nameInSecType)}</span>`}M("@ui5/webcomponents-theming","sap_fiori_3",async()=>re);M("@ui5/webcomponents","sap_fiori_3",async()=>se);const Xt={packageName:"@ui5/webcomponents",fileName:"themes/MonthPicker.css",content:`:host(:not([hidden])) {
	display: block;
}

:host {
	width: 100%;
	height: 100%;
}

.ui5-mp-root {
	padding: 2rem 0 1rem 0;
	display: flex;
	flex-direction: column;
	font-family: "72override", var(--sapFontFamily);
	font-size: var(--sapFontSize);
	justify-content: center;
	align-items: center;
}

.ui5-mp-item {
	display: flex;
	flex-direction: column;
	width: calc(33.333% - 0.125rem);
	height: var(--_ui5_month_picker_item_height);
	color: var(--sapButton_Lite_TextColor);
	background-color: var(--sapLegend_WorkingBackground);
	align-items: center;
	justify-content: center;
	margin: var(--_ui5_monthpicker_item_margin);
	box-sizing: border-box;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
	cursor: default;
	outline: none;
	position: relative;
	border: var(--_ui5_monthpicker_item_border);
	border-radius: var(--_ui5_monthpicker_item_border_radius);
}

.ui5-dp-monthsectext {
	font-size: 0.75rem;
	color: var(--sapNeutralElementColor);
}

.ui5-mp-item:hover {
	background-color: var(--sapList_Hover_Background);
}

.ui5-mp-item.ui5-mp-item--selected,
.ui5-mp-item.ui5-mp-item--selected .ui5-dp-monthsectext {
	box-shadow: var(--_ui5_monthpicker_item_selected_box_shadow);
	font-weight: var(--_ui5_monthpicker_item_selected_font_wieght);
	background-color: var(--_ui5_monthpicker_item_selected_background_color);
	color: var(--_ui5_monthpicker_item_selected_text_color);
}

.ui5-mp-item.ui5-mp-item--disabled {
	pointer-events: none;
	opacity: 0.5;
}

.ui5-mp-item.ui5-mp-item--selected:focus {
	background-color: var(--sapContent_Selected_Background);
}

.ui5-mp-item.ui5-mp-item--selected:focus::after {
	border-color: var(--_ui5_monthpicker_item_focus_after_border);
}

.ui5-mp-item.ui5-mp-item--selected:hover {
	background-color: var(--_ui5_monthpicker_item_selected_hover_color);
}

.ui5-mp-item:focus::after {
	content: "";
	position: absolute;
	border: var(--_ui5_button_focused_border);
	inset: 0;
	border-radius: var(--_ui5_monthpicker_item_focus_after_border_radius);
}

.ui5-mp-quarter {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
}
`};var me=globalThis&&globalThis.__decorate||function(s,e,t,a){var i=arguments.length,n=i<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,a);else for(var d=s.length-1;d>=0;d--)(o=s[d])&&(n=(i<3?o(n):i>3?o(e,t,n):o(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n},ue;const Q=12,V=3;let z=ue=class extends ce{static async onDefine(){ue.i18nBundle=await pe("@ui5/webcomponents")}get roleDescription(){return ue.i18nBundle.getText(Dt)}onBeforeRendering(){this._buildMonths()}onAfterRendering(){this._hidden||this.focus()}_buildMonths(){if(this._hidden)return;const t=L(T()).getMonthsStandAlone("wide",this._primaryCalendarType),a=[],i=this._calendarDate,n=this._minDate,o=this._maxDate,d=new _(i,this._primaryCalendarType);let l;for(let u=0;u<12;u++){d.setMonth(u),l=d.valueOf()/1e3;const g=this.selectedDates.some(O=>{const S=_.fromTimestamp(O*1e3,this._primaryCalendarType);return S.getYear()===d.getYear()&&S.getMonth()===d.getMonth()}),b=d.getMonth()===i.getMonth(),p=this._isOutOfSelectableRange(d,n,o),y={timestamp:l.toString(),focusRef:b,_tabIndex:b?"0":"-1",selected:g,ariaSelected:g?"true":"false",name:t[u],nameInSecType:this.secondaryCalendarType&&this._getDisplayedSecondaryMonthText(l).text,disabled:p,classes:"ui5-mp-item"};g&&(y.classes+=" ui5-mp-item--selected"),p&&(y.classes+=" ui5-mp-item--disabled");const C=Math.floor(u/V);a[C]?a[C].push(y):a[C]=[y]}this._months=a}_getDisplayedSecondaryMonthText(e){const t=ae(this._primaryCalendarType,this.secondaryCalendarType,e);return Je(t.firstDate.getMonth(),t.lastDate.getMonth(),this.secondaryCalendarType)}_onkeydown(e){let t=!0;ie(e)?this._selectMonth(e):B(e)?e.preventDefault():we(e)?this._modifyTimestampBy(-1):$e(e)?this._modifyTimestampBy(1):xe(e)?this._modifyTimestampBy(-V):Ce(e)?this._modifyTimestampBy(V):Se(e)?this._modifyTimestampBy(-Q):Be(e)?this._modifyTimestampBy(Q):G(e)||Me(e)?this._onHomeOrEnd(G(e)):Pe(e)?this._setTimestamp(parseInt(this._months[0][0].timestamp)):Ye(e)?this._setTimestamp(parseInt(this._months[Q/V-1][V-1].timestamp)):t=!1,t&&e.preventDefault()}_onHomeOrEnd(e){this._months.forEach(t=>{if(t.findIndex(i=>_.fromTimestamp(parseInt(i.timestamp)*1e3).getMonth()===this._calendarDate.getMonth())!==-1){const i=e?0:V-1;this._setTimestamp(parseInt(t[i].timestamp))}})}_setTimestamp(e){this._safelySetTimestamp(e),this.fireEvent("navigate",{timestamp:this.timestamp})}_modifyTimestampBy(e,t){this._safelyModifyTimestampBy(e,"month",t),this.fireEvent("navigate",{timestamp:this.timestamp})}_onkeyup(e){B(e)&&this._selectMonth(e)}_selectMonth(e){e.preventDefault();const t=e.target;if(t.className.indexOf("ui5-mp-item")>-1){const a=this._getTimestampFromDom(t);this._safelySetTimestamp(a),this.fireEvent("change",{timestamp:this.timestamp})}}_hasPreviousPage(){return this._calendarDate.getYear()!==this._minDate.getYear()}_hasNextPage(){return this._calendarDate.getYear()!==this._maxDate.getYear()}_showPreviousPage(){this._modifyTimestampBy(-Q,!0)}_showNextPage(){this._modifyTimestampBy(Q,!0)}_isOutOfSelectableRange(e,t,a){const i=e.getMonth(),n=e.getYear(),o=t.getYear(),d=t.getMonth(),l=a.getYear(),u=a.getMonth();return n<o||n===o&&i<d||n>l||n===l&&i>u}};me([c({validator:de,multiple:!0,compareValues:!0})],z.prototype,"selectedDates",void 0);me([c({type:Object,multiple:!0})],z.prototype,"_months",void 0);me([c({type:Boolean,noAttribute:!0})],z.prototype,"_hidden",void 0);z=ue=me([J({tag:"ui5-monthpicker",template:Jt,styles:Xt}),v("change"),v("navigate")],z);z.define();const Zt=z;function Qt(s,e,t){return h`<div class="ui5-yp-root" role="grid" aria-roledescription="${r(this.roleDescription)}" aria-readonly="false" aria-multiselectable="false" @keydown=${this._onkeydown} @keyup=${this._onkeyup} @click=${this._selectYear}>${j(this._years,(a,i)=>a._id||i,(a,i)=>ea.call(this,s,e,t,a,i))}</div>`}function ea(s,e,t,a,i){return h`<div class="ui5-yp-interval-container">${j(a,(n,o)=>n._id||o,(n,o)=>ta.call(this,s,e,t,n,o))}</div>`}function ta(s,e,t,a,i){return h`<div data-sap-timestamp="${r(a.timestamp)}" tabindex="${r(a._tabIndex)}" ?data-sap-focus-ref="${a.focusRef}" class="${r(a.classes)}" role="gridcell" aria-selected="${r(a.ariaSelected)}"><span>${r(a.year)}</span>${a.yearInSecType?aa.call(this,s,e,t,a,i):void 0}</div>`}function aa(s,e,t,a,i){return h`<span class="ui5-yp-item-sec-type">${r(a.yearInSecType)}</span>`}M("@ui5/webcomponents-theming","sap_fiori_3",async()=>re);M("@ui5/webcomponents","sap_fiori_3",async()=>se);const ia={packageName:"@ui5/webcomponents",fileName:"themes/YearPicker.css",content:`:host(:not([hidden])) {
	display: block;
}

:host {
	width: 100%;
	height: 100%;
}

.ui5-yp-root {
	padding: 2rem 0 1rem 0;
	display: flex;
	flex-direction: column;
	font-family: "72override", var(--sapFontFamily);
	font-size: var(--sapFontSize);
	justify-content: center;
	align-items: center;
}

.ui5-yp-interval-container {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
}

.ui5-yp-item {
	display: flex;
	margin: var(--_ui5_yearpicker_item_margin);
	width: calc(25% - 0.125rem);
	height: var(--_ui5_year_picker_item_height);
	color: var(--sapButton_Lite_TextColor);
	background-color: var(--sapLegend_WorkingBackground);
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
	cursor: default;
	outline: none;
	position: relative;
	border: var(--_ui5_yearpicker_item_border);
	border-radius: var(--_ui5_yearpicker_item_border_radius);
}

.ui5-yp-item-secondary-type {
	flex-direction: column;
	width: calc(50% - 0.125rem);
}

.ui5-yp-item-sec-type{
	font-size: 0.75rem;
	color: var(--sapNeutralElementColor);
}

.ui5-yp-item:hover {
	background-color: var(--sapList_Hover_Background);
}

.ui5-yp-item.ui5-yp-item--selected,
.ui5-yp-item.ui5-yp-item--selected .ui5-yp-item-sec-type {
	background-color: var(--_ui5_yearpicker_item_selected_background_color);
	color: var(--_ui5_yearpicker_item_selected_text_color);
	box-shadow: var(--_ui5_yearpicker_item_selected_box_shadow);
	font-weight: bold;
}

.ui5-yp-item.ui5-yp-item--disabled {
	pointer-events: none;
	opacity: 0.5;
}

.ui5-yp-item.ui5-yp-item--selected:focus {
	background-color: var(--_ui5_yearpicker_item_selected_focus);
}

.ui5-yp-item.ui5-yp-item--selected:focus::after {
	border-color: var(--_ui5_yearpicker_item_focus_after_border);
}

.ui5-yp-item.ui5-yp-item--selected:hover {
	background-color: var(--_ui5_yearpicker_item_selected_hover_color);
}

.ui5-yp-item:focus::after {
	content: "";
	position: absolute;
	border: var(--_ui5_yearpicker_item_focus_after_border);
	inset: 0;
	border-radius: var(--_ui5_yearpicker_item_focus_after_border_radius);
	outline: var(--_ui5_yearpicker_item_focus_after_outline);
}
`};var ye=globalThis&&globalThis.__decorate||function(s,e,t,a){var i=arguments.length,n=i<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,a);else for(var d=s.length-1;d>=0;d--)(o=s[d])&&(n=(i<3?o(n):i>3?o(e,t,n):o(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n},he;let K=he=class extends ce{static async onDefine(){he.i18nBundle=await pe("@ui5/webcomponents")}get roleDescription(){return he.i18nBundle.getText(Tt)}onBeforeRendering(){this._buildYears()}_getPageSize(){return this.secondaryCalendarType?8:20}_getRowSize(){return this.secondaryCalendarType?2:4}_buildYears(){if(this._hidden)return;const e=this._getPageSize(),t=T(),a=E.getDateInstance({format:"y",calendarType:this._primaryCalendarType},t),i=E.getDateInstance({format:"y",calendarType:this.secondaryCalendarType},t);this._calculateFirstYear(),this._lastYear=this._firstYear+e-1;const n=this._calendarDate,o=this._minDate,d=this._maxDate,l=new _(n,this._primaryCalendarType);let u,g;l.setYear(this._firstYear);const b=[];let p;for(let y=0;y<e;y++){p=l.valueOf()/1e3;const C=this.selectedDates.some(fe=>_.fromTimestamp(fe*1e3,this._primaryCalendarType).getYear()===l.getYear()),O=l.getYear()===n.getYear(),S=l.getYear()<o.getYear()||l.getYear()>d.getYear();this.secondaryCalendarType&&(u=ae(this._primaryCalendarType,this.secondaryCalendarType,p,!0),g=u.firstDate.getYear()===u.lastDate.getYear()?`${i.format(u.firstDate.toLocalJSDate(),!0)}`:`${i.format(u.firstDate.toLocalJSDate(),!0)} - ${i.format(u.lastDate.toLocalJSDate(),!0)}`);const I={timestamp:p.toString(),_tabIndex:O?"0":"-1",focusRef:O,selected:C,ariaSelected:C?"true":"false",year:a.format(l.toLocalJSDate()),yearInSecType:this.secondaryCalendarType&&g,disabled:S,classes:"ui5-yp-item"};C&&(I.classes+=" ui5-yp-item--selected"),S&&(I.classes+=" ui5-yp-item--disabled"),this.secondaryCalendarType&&(I.classes+=" ui5-yp-item-secondary-type");const U=Math.floor(y/this._getRowSize());b[U]?b[U].push(I):b[U]=[I],l.setYear(l.getYear()+1)}this._years=b}_calculateFirstYear(){const e=this._getPageSize(),t=qe(this._primaryCalendarType).getYear(),a=this._calendarDate.getYear();this._firstYear||(this._firstYear=a-e/2),a<this._firstYear?this._firstYear-=e:a>=this._firstYear+e&&(this._firstYear+=e),Math.abs(this._firstYear-a)>=e&&(this._firstYear=a-e/2),this._firstYear=Math.max(this._firstYear,this._minDate.getYear()),this._firstYear=Math.min(this._firstYear,this._maxDate.getYear()),this._firstYear>t-e+1&&(this._firstYear=t-e+1)}onAfterRendering(){this._hidden||this.focus()}_onkeydown(e){let t=!0;const a=this._getPageSize(),i=this._getRowSize();ie(e)?this._selectYear(e):B(e)?e.preventDefault():we(e)?this._modifyTimestampBy(-1):$e(e)?this._modifyTimestampBy(1):xe(e)?this._modifyTimestampBy(-i):Ce(e)?this._modifyTimestampBy(i):Se(e)?this._modifyTimestampBy(-a):Be(e)?this._modifyTimestampBy(a):G(e)||Me(e)?this._onHomeOrEnd(G(e)):Pe(e)?this._setTimestamp(parseInt(this._years[0][0].timestamp)):Ye(e)?this._setTimestamp(parseInt(this._years[a/i-1][i-1].timestamp)):t=!1,t&&e.preventDefault()}_onHomeOrEnd(e){this._years.forEach(t=>{if(t.findIndex(i=>_.fromTimestamp(parseInt(i.timestamp)*1e3).getYear()===this._calendarDate.getYear())!==-1){const i=e?0:this._getRowSize()-1;this._setTimestamp(parseInt(t[i].timestamp))}})}_setTimestamp(e){this._safelySetTimestamp(e),this.fireEvent("navigate",{timestamp:this.timestamp})}_modifyTimestampBy(e){this._safelyModifyTimestampBy(e,"year"),this.fireEvent("navigate",{timestamp:this.timestamp})}_onkeyup(e){B(e)&&this._selectYear(e)}_selectYear(e){e.preventDefault();const t=e.target;if(t.className.indexOf("ui5-yp-item")>-1){const a=this._getTimestampFromDom(t);this._safelySetTimestamp(a),this.fireEvent("change",{timestamp:this.timestamp})}}_hasPreviousPage(){return this._firstYear>this._minDate.getYear()}_hasNextPage(){return this._firstYear+this._getPageSize()-1<this._maxDate.getYear()}_showPreviousPage(){const e=this._getPageSize();this._modifyTimestampBy(-e)}_showNextPage(){this._modifyTimestampBy(this._getPageSize())}};ye([c({validator:de,multiple:!0,compareValues:!0})],K.prototype,"selectedDates",void 0);ye([c({type:Object,multiple:!0})],K.prototype,"_years",void 0);ye([c({type:Boolean,noAttribute:!0})],K.prototype,"_hidden",void 0);K=he=ye([J({tag:"ui5-yearpicker",styles:ia,template:Qt}),v("change"),v("navigate")],K);K.define();const na=K;var Te;(function(s){s.DAY_MONTH_YEAR="DAY_MONTH_YEAR",s.MONTH_YEAR="MONTH_YEAR",s.YEAR="YEAR"})(Te||(Te={}));const W=Te;function ra(s,e,t){return t?h`<div class="ui5-cal-root" @keydown=${this._onkeydown}><div id="${r(this._id)}-content" class="ui5-cal-content"><${D("ui5-daypicker",e,t)} id="${r(this._id)}-daypicker" ?hidden="${this._isDayPickerHidden}" format-pattern="${r(this._formatPattern)}" .selectedDates="${r(this._selectedDatesTimestamps)}" ._hidden="${r(this._isDayPickerHidden)}" .primaryCalendarType="${r(this._primaryCalendarType)}" .secondaryCalendarType="${r(this.secondaryCalendarType)}" .selectionMode="${r(this.selectionMode)}" .minDate="${r(this.minDate)}" .maxDate="${r(this.maxDate)}" timestamp="${r(this._timestamp)}" ?hide-week-numbers="${this.hideWeekNumbers}" @ui5-change="${r(this.onSelectedDatesChange)}" @ui5-navigate="${r(this.onNavigate)}"></${D("ui5-daypicker",e,t)}><${D("ui5-monthpicker",e,t)} id="${r(this._id)}-MP" ?hidden="${this._isMonthPickerHidden}" format-pattern="${r(this._formatPattern)}" .selectedDates="${r(this._selectedDatesTimestamps)}" ._hidden="${r(this._isMonthPickerHidden)}" .primaryCalendarType="${r(this._primaryCalendarType)}" .secondaryCalendarType="${r(this.secondaryCalendarType)}" .minDate="${r(this.minDate)}" .maxDate="${r(this.maxDate)}" timestamp="${r(this._timestamp)}" @ui5-change="${r(this.onSelectedMonthChange)}" @ui5-navigate="${r(this.onNavigate)}"></${D("ui5-monthpicker",e,t)}><${D("ui5-yearpicker",e,t)} id="${r(this._id)}-YP" ?hidden="${this._isYearPickerHidden}" format-pattern="${r(this._formatPattern)}" .selectedDates="${r(this._selectedDatesTimestamps)}" ._hidden="${r(this._isYearPickerHidden)}" .primaryCalendarType="${r(this._primaryCalendarType)}" .secondaryCalendarType="${r(this.secondaryCalendarType)}" .minDate="${r(this.minDate)}" .maxDate="${r(this.maxDate)}" timestamp="${r(this._timestamp)}" @ui5-change="${r(this.onSelectedYearChange)}" @ui5-navigate="${r(this.onNavigate)}"></${D("ui5-yearpicker",e,t)}></div><${D("ui5-calendar-header",e,t)} id="${r(this._id)}-head" .primaryCalendarType="${r(this._primaryCalendarType)}" .secondaryCalendarType="${r(this.secondaryCalendarType)}" .buttonTextForSecondaryCalendarType="${r(this.secondaryCalendarTypeButtonText)}" timestamp="${r(this._timestamp)}" .isPrevButtonDisabled="${r(this._previousButtonDisabled)}" .isNextButtonDisabled="${r(this._nextButtonDisabled)}" .isMonthButtonHidden="${r(this._isHeaderMonthButtonHidden)}" ._monthButtonText="${r(this._headerMonthButtonText)}" ._yearButtonText="${r(this._headerYearButtonText)}" ._yearButtonTextSecType="${r(this._headerYearButtonTextSecType)}" @ui5-previous-press="${r(this.onHeaderPreviousPress)}" @ui5-next-press="${r(this.onHeaderNextPress)}" @ui5-show-month-press="${r(this.onHeaderShowMonthPress)}" @ui5-show-year-press="${r(this.onHeaderShowYearPress)}"></${D("ui5-calendar-header",e,t)}></div>`:h`<div class="ui5-cal-root" @keydown=${this._onkeydown}><div id="${r(this._id)}-content" class="ui5-cal-content"><ui5-daypicker id="${r(this._id)}-daypicker" ?hidden="${this._isDayPickerHidden}" format-pattern="${r(this._formatPattern)}" .selectedDates="${r(this._selectedDatesTimestamps)}" ._hidden="${r(this._isDayPickerHidden)}" .primaryCalendarType="${r(this._primaryCalendarType)}" .secondaryCalendarType="${r(this.secondaryCalendarType)}" .selectionMode="${r(this.selectionMode)}" .minDate="${r(this.minDate)}" .maxDate="${r(this.maxDate)}" timestamp="${r(this._timestamp)}" ?hide-week-numbers="${this.hideWeekNumbers}" @ui5-change="${r(this.onSelectedDatesChange)}" @ui5-navigate="${r(this.onNavigate)}"></ui5-daypicker><ui5-monthpicker id="${r(this._id)}-MP" ?hidden="${this._isMonthPickerHidden}" format-pattern="${r(this._formatPattern)}" .selectedDates="${r(this._selectedDatesTimestamps)}" ._hidden="${r(this._isMonthPickerHidden)}" .primaryCalendarType="${r(this._primaryCalendarType)}" .secondaryCalendarType="${r(this.secondaryCalendarType)}" .minDate="${r(this.minDate)}" .maxDate="${r(this.maxDate)}" timestamp="${r(this._timestamp)}" @ui5-change="${r(this.onSelectedMonthChange)}" @ui5-navigate="${r(this.onNavigate)}"></ui5-monthpicker><ui5-yearpicker id="${r(this._id)}-YP" ?hidden="${this._isYearPickerHidden}" format-pattern="${r(this._formatPattern)}" .selectedDates="${r(this._selectedDatesTimestamps)}" ._hidden="${r(this._isYearPickerHidden)}" .primaryCalendarType="${r(this._primaryCalendarType)}" .secondaryCalendarType="${r(this.secondaryCalendarType)}" .minDate="${r(this.minDate)}" .maxDate="${r(this.maxDate)}" timestamp="${r(this._timestamp)}" @ui5-change="${r(this.onSelectedYearChange)}" @ui5-navigate="${r(this.onNavigate)}"></ui5-yearpicker></div><ui5-calendar-header id="${r(this._id)}-head" .primaryCalendarType="${r(this._primaryCalendarType)}" .secondaryCalendarType="${r(this.secondaryCalendarType)}" .buttonTextForSecondaryCalendarType="${r(this.secondaryCalendarTypeButtonText)}" timestamp="${r(this._timestamp)}" .isPrevButtonDisabled="${r(this._previousButtonDisabled)}" .isNextButtonDisabled="${r(this._nextButtonDisabled)}" .isMonthButtonHidden="${r(this._isHeaderMonthButtonHidden)}" ._monthButtonText="${r(this._headerMonthButtonText)}" ._yearButtonText="${r(this._headerYearButtonText)}" ._yearButtonTextSecType="${r(this._headerYearButtonTextSecType)}" @ui5-previous-press="${r(this.onHeaderPreviousPress)}" @ui5-next-press="${r(this.onHeaderNextPress)}" @ui5-show-month-press="${r(this.onHeaderShowMonthPress)}" @ui5-show-year-press="${r(this.onHeaderShowYearPress)}"></ui5-calendar-header></div>`}M("@ui5/webcomponents-theming","sap_fiori_3",async()=>re);M("@ui5/webcomponents","sap_fiori_3",async()=>se);const sa={packageName:"@ui5/webcomponents",fileName:"themes/Calendar.css",content:`:host(:not([hidden])) {
    display: inline-block;
}

.ui5-cal-root {
    background: var(--sapList_Background);
    box-sizing: border-box;
    height: var(--_ui5_calendar_height);
    width: var(--_ui5_calendar_width);
    padding: var(--_ui5_calendar_top_bottom_padding) var(--_ui5_calendar_left_right_padding) 0;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
}

.ui5-cal-root [ui5-calendar-header] {
    height: var(--_ui5_calendar_header_height);
    font-family: var(--_ui5_button_fontFamily);
}

.ui5-cal-root .ui5-cal-content {
    padding: 0 var(--_ui5_calendar_left_right_padding) var(--_ui5_calendar_top_bottom_padding);
}`};var x=globalThis&&globalThis.__decorate||function(s,e,t,a){var i=arguments.length,n=i<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,a);else for(var d=s.length-1;d>=0;d--)(o=s[d])&&(n=(i<3?o(n):i>3?o(e,t,n):o(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n};let f=class extends ce{get _selectedDatesTimestamps(){return this.dates.map(e=>{const t=e.value;return t&&!!this.getFormat().parse(t)?this._getTimeStampFromString(t)/1e3:void 0}).filter(e=>!!e)}_setSelectedDates(e){const t=e.map(i=>this.getFormat().format(new Date(i*1e3),!0)),a=[...this.dates].map(i=>i.value);this.dates.filter(i=>!t.includes(i.value)).forEach(i=>{this.removeChild(i)}),t.filter(i=>!a.includes(i)).forEach(i=>{const n=document.createElement(Oe.getMetadata().getTag());n.value=i,this.appendChild(n)})}_normalizeCurrentPicker(){this._currentPicker==="day"&&this._pickersMode!==W.DAY_MONTH_YEAR&&(this._currentPicker="month"),this._currentPicker==="month"&&this._pickersMode===W.YEAR&&(this._currentPicker="year")}onBeforeRendering(){this._normalizeCurrentPicker()}async onAfterRendering(){await st(),this._previousButtonDisabled=!this._currentPickerDOM._hasPreviousPage(),this._nextButtonDisabled=!this._currentPickerDOM._hasNextPage();const e=E.getDateInstance({format:"y",calendarType:this.primaryCalendarType}),t=L(T());if(this._headerMonthButtonText=t.getMonthsStandAlone("wide",this.primaryCalendarType)[this._calendarDate.getMonth()],this._currentPicker==="year"){const a=new _(this._calendarDate,this._primaryCalendarType),i=new _(this._calendarDate,this._primaryCalendarType);a.setYear(this._currentPickerDOM._firstYear),i.setYear(this._currentPickerDOM._lastYear),this._headerYearButtonText=`${e.format(a.toLocalJSDate(),!0)} - ${e.format(i.toLocalJSDate(),!0)}`}else this._headerYearButtonText=String(e.format(this._localDate,!0));this.secondaryCalendarType&&this._setSecondaryCalendarTypeButtonText()}onHeaderShowMonthPress(e){this._currentPickerDOM._autoFocus=!1,this._currentPicker="month",this.fireEvent("show-month-press",e)}onHeaderShowYearPress(e){this._currentPickerDOM._autoFocus=!1,this._currentPicker="year",this.fireEvent("show-year-press",e)}get _currentPickerDOM(){return this.shadowRoot.querySelector(`[ui5-${this._currentPicker}picker]`)}onHeaderPreviousPress(){this._currentPickerDOM._showPreviousPage()}onHeaderNextPress(){this._currentPickerDOM._showNextPage()}_setSecondaryCalendarTypeButtonText(){const e=E.getDateInstance({format:"y",calendarType:this.secondaryCalendarType});if(this._currentPicker==="year"){const t=new _(this._calendarDate,this._primaryCalendarType),a=new _(this._calendarDate,this._primaryCalendarType);t.setYear(this._currentPickerDOM._firstYear),a.setYear(this._currentPickerDOM._lastYear);const i=ae(this.primaryCalendarType,this.secondaryCalendarType,t.valueOf()/1e3,!0).firstDate,n=ae(this.primaryCalendarType,this.secondaryCalendarType,a.valueOf()/1e3,!0).lastDate;this._headerYearButtonTextSecType=`${e.format(i.toLocalJSDate(),!0)} - ${e.format(n.toLocalJSDate(),!0)}`}else this._headerYearButtonTextSecType=String(e.format(this._localDate,!0))}get secondaryCalendarTypeButtonText(){if(!this.secondaryCalendarType)return;const e=new Date(this._timestamp*1e3),t=E.getDateInstance({format:"y",calendarType:this.secondaryCalendarType}),a=ae(this._primaryCalendarType,this.secondaryCalendarType,this._timestamp),i=Je(a.firstDate.getMonth(),a.lastDate.getMonth(),this.secondaryCalendarType);return{yearButtonText:t.format(e,!0),monthButtonText:i.text,monthButtonInfo:i.textInfo}}get _isHeaderMonthButtonHidden(){return this._currentPicker==="month"||this._currentPicker==="year"}get _isDayPickerHidden(){return this._currentPicker!=="day"}get _isMonthPickerHidden(){return this._currentPicker!=="month"}get _isYearPickerHidden(){return this._currentPicker!=="year"}_fireEventAndUpdateSelectedDates(e){const t=e.map(i=>{const n=_.fromTimestamp(i*1e3,this._primaryCalendarType);return this.getFormat().format(n.toUTCJSDate(),!0)});!this.fireEvent("selected-dates-change",{timestamp:this.timestamp,dates:[...e],values:t},!0)||this._setSelectedDates(e)}onSelectedDatesChange(e){this.timestamp=e.detail.timestamp,this._fireEventAndUpdateSelectedDates(e.detail.dates)}onSelectedMonthChange(e){this.timestamp=e.detail.timestamp,this._pickersMode===W.DAY_MONTH_YEAR?this._currentPicker="day":this._fireEventAndUpdateSelectedDates([this.timestamp]),this._currentPickerDOM._autoFocus=!0}onSelectedYearChange(e){this.timestamp=e.detail.timestamp,this._pickersMode===W.DAY_MONTH_YEAR?this._currentPicker="day":this._pickersMode===W.MONTH_YEAR?this._currentPicker="month":this._fireEventAndUpdateSelectedDates([this.timestamp]),this._currentPickerDOM._autoFocus=!0}onNavigate(e){this.timestamp=e.detail.timestamp}_onkeydown(e){ht(e)&&this._currentPicker!=="month"&&(this._currentPicker="month"),pt(e)&&this._currentPicker!=="year"&&(this._currentPicker="year")}get selectedDates(){return this._selectedDatesTimestamps}set selectedDates(e){this._setSelectedDates(e)}};x([c({type:w,defaultValue:w.Single})],f.prototype,"selectionMode",void 0);x([c({type:Boolean})],f.prototype,"hideWeekNumbers",void 0);x([c({defaultValue:"day"})],f.prototype,"_currentPicker",void 0);x([c({type:Boolean})],f.prototype,"_previousButtonDisabled",void 0);x([c({type:Boolean})],f.prototype,"_nextButtonDisabled",void 0);x([c()],f.prototype,"_headerMonthButtonText",void 0);x([c()],f.prototype,"_headerYearButtonText",void 0);x([c()],f.prototype,"_headerYearButtonTextSecType",void 0);x([c({type:W,defaultValue:W.DAY_MONTH_YEAR,noAttribute:!0})],f.prototype,"_pickersMode",void 0);x([at({type:HTMLElement,invalidateOnChildChange:!0,default:!0})],f.prototype,"dates",void 0);f=x([J({tag:"ui5-calendar",fastNavigation:!0,template:ra,styles:sa,dependencies:[Oe,Ot,Kt,Zt,na]}),v("selected-dates-change",{detail:{dates:{type:Array},values:{type:Array}}}),v("show-month-press"),v("show-year-press")],f);f.define();const oa=f,Ba=Object.freeze(Object.defineProperty({__proto__:null,default:oa},Symbol.toStringTag,{value:"Module"}));export{_ as C,Bt as D,W as a,oa as b,Oe as c,w as d,Ta as e,Ba as f,Ct as g,xt as m};
//# sourceMappingURL=Calendar-27089d2d.js.map
