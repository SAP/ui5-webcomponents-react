import{j as c,p as f,d as T,s as D,m as V,q as p,w as y}from"./withWebComponent-DfVDXLfc.js";import{C as v,a as P,g as C,b as d,m as _}from"./Calendar-X00ChgoR.js";import{H as b,J as k}from"./i18n-defaults-Cyg2J0QB.js";import{D as S,a as R,b as g}from"./DatePicker-ClCbBnUZ.js";import{d as w}from"./parameters-bundle.css-BzaqQttB.js";function x(){return[S.call(this),R.call(this,{content:F})]}function F(){return c(P,{id:`${this._id}-calendar`,primaryCalendarType:this._primaryCalendarType,secondaryCalendarType:this.secondaryCalendarType,formatPattern:this._formatPattern,selectionMode:this._calendarSelectionMode,minDate:this.minDate,maxDate:this.maxDate,calendarWeekNumbering:this.calendarWeekNumbering,onSelectionChange:this.onSelectedDatesChange,onShowMonthView:this.onHeaderShowMonthPress,onShowYearView:this.onHeaderShowYearPress,hideWeekNumbers:this.hideWeekNumbers,_currentPicker:this._calendarCurrentPicker,_pickersMode:this._calendarPickersMode,children:c(v,{startValue:this.startValue,endValue:this.endValue})})}f("@ui5/webcomponents-theming","sap_horizon",async()=>T);f("@ui5/webcomponents","sap_horizon",async()=>w);const E=`:host(:not([hidden])){display:inline-block}:host{min-width:15rem;color:var(--sapField_TextColor);background-color:var(--sapField_Background)}:host .ui5-date-picker-input{width:100%;min-width:inherit;color:inherit;background-color:inherit}
`;var h=function(m,e,t,i){var r=arguments.length,a=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(m,e,t,i);else for(var n=m.length-1;n>=0;n--)(s=m[n])&&(a=(r<3?s(a):r>3?s(e,t,a):s(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a},u;const M="-";let o=u=class extends g{get formFormattedValue(){const e=this._splitValueByDelimiter(this.value||"").filter(Boolean);if(e.length&&this.name){const t=new FormData;for(let i=0;i<e.length;i++)t.append(this.name,e[i]);return t}return this.value}constructor(){super(),this.delimiter="-",this._prevDelimiter=null}get dateValue(){return null}get dateValueUTC(){return null}get _startDateTimestamp(){return this._extractFirstTimestamp(this.value)}get _endDateTimestamp(){return this._extractLastTimestamp(this.value)}get _tempTimestamp(){return this._tempValue&&this.getFormat().parse(this._tempValue,!0).getTime()/1e3}get _calendarSelectionMode(){return"Range"}get _calendarTimestamp(){return this._tempTimestamp||this._startDateTimestamp||C(this._primaryCalendarType)}get _calendarSelectedDates(){return this._tempValue?[this._tempValue]:this.value&&this._checkValueValidity(this.value)?this._splitValueByDelimiter(this.value):[]}get startDateValue(){return d.fromTimestamp(this._startDateTimestamp*1e3).toLocalJSDate()}get endDateValue(){return d.fromTimestamp(this._endDateTimestamp*1e3).toLocalJSDate()}get startValue(){return this._calendarSelectedDates[0]||""}get endValue(){return this._calendarSelectedDates[1]||""}get _placeholder(){return this.placeholder!==void 0?this.placeholder:`${this._displayFormat} ${this._effectiveDelimiter} ${this._displayFormat}`}get dateAriaDescription(){return u.i18nBundle.getText(b)}get pickerAccessibleName(){return u.i18nBundle.getText(k)}async _onInputSubmit(){const e=this._getInput(),t=e.getCaretPosition();await p(),e.setCaretPosition(t)}onResponsivePopoverAfterClose(){this._tempValue="",super.onResponsivePopoverAfterClose()}isValid(e){const t=this._splitValueByDelimiter(e);return t.length<=2&&t.every(i=>super.isValid(i))}isInValidRange(e){return this._splitValueByDelimiter(e).every(t=>super.isInValidRange(t))}normalizeValue(e){const t=this._extractFirstTimestamp(e),i=this._extractLastTimestamp(e);return t&&i&&t>i?this._buildValue(i,t):this._buildValue(t,i)}onSelectedDatesChange(e){e.preventDefault();const t=e.detail.selectedValues;if(t.length===0)return;if(t.length===1){this._tempValue=t[0];return}const i=this._buildValue(e.detail.selectedDates[0],e.detail.selectedDates[1]);this._updateValueAndFireEvents(i,!0,["change","value-changed"]),this._togglePicker()}async _modifyDateValue(e,t,i){if(!this._endDateTimestamp)return super._modifyDateValue(e,t,i);const r=this._getInput();let a=r.getCaretPosition(),s;if(a<=this.value.indexOf(this._effectiveDelimiter)){const l=_(d.fromTimestamp(this._startDateTimestamp*1e3),e,t,i,this._minDate,this._maxDate).valueOf()/1e3;l>this._endDateTimestamp&&(a+=Math.ceil(this.value.length/2)),s=this._buildValue(l,this._endDateTimestamp)}else{const l=_(d.fromTimestamp(this._endDateTimestamp*1e3),e,t,i,this._minDate,this._maxDate).valueOf()/1e3;s=this._buildValue(this._startDateTimestamp,l),l<this._startDateTimestamp&&(a-=Math.ceil(this.value.length/2))}this._updateValueAndFireEvents(s,!0,["change","value-changed"]),await p(),r.setCaretPosition(a)}get _effectiveDelimiter(){return this.delimiter||M}_splitValueByDelimiter(e){const t=[],i=e.split(this._prevDelimiter||this._effectiveDelimiter);return this.getFormat().parse(e)?(t[0]=i.join(this._effectiveDelimiter),t[1]=""):(t[0]=i.slice(0,i.length/2).join(this._effectiveDelimiter),t[1]=i.slice(i.length/2).join(this._effectiveDelimiter)),t}_extractFirstTimestamp(e){if(!e||!this._checkValueValidity(e))return;const t=this._splitValueByDelimiter(e);return this.getFormat().parse(t[0],!0).getTime()/1e3}_extractLastTimestamp(e){if(!e||!this._checkValueValidity(e))return;const t=this._splitValueByDelimiter(e);if(t[1])return this.getFormat().parse(t[1],!0).getTime()/1e3}_buildValue(e,t){if(this._prevDelimiter=this._effectiveDelimiter,e){const i=this._getStringFromTimestamp(e*1e3);if(!t)return i;const r=this._getStringFromTimestamp(t*1e3);return`${i} ${this._effectiveDelimiter} ${r}`}return""}};h([D()],o.prototype,"delimiter",void 0);h([D()],o.prototype,"_tempValue",void 0);o=u=h([V({tag:"ui5-daterange-picker",styles:[g.styles,E],template:x})],o);o.define();const A=y("ui5-daterange-picker",["accessibleName","accessibleNameRef","calendarWeekNumbering","delimiter","formatPattern","maxDate","minDate","name","placeholder","primaryCalendarType","secondaryCalendarType","value","valueState"],["disabled","hideWeekNumbers","open","readonly","required"],["valueStateMessage"],["change","close","input","open","value-state-change"]);A.displayName="DateRangePicker";export{A as D};
