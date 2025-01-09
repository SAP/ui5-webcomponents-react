import{s as a,m as I,e as P,I as z,N as Z,j as h,F as k,c as f,p as x,d as j}from"./withWebComponent-CT6sGXpP.js";import{l as H}from"./event-strict-DgQLNDEV.js";import{a as F,g as q,D}from"./Gregorian-CpA7Jzba.js";import{i as B,b as W,D as O,P as J,N as G,t as Q,Y as A,Z as ee,j as R,z as te,v as N,o as ie,q as V,r as $,X as se,$ as oe}from"./Keys-D3vKxxqj.js";import{i as ne}from"./i18n-DEVDpFvK.js";import{bw as re,bx as ae,by as le,bz as ce}from"./i18n-defaults-Do22Zz-4.js";import{b as ue,a as he}from"./Button-W0cWTBMa.js";import{T as Y}from"./ToggleButton-Dz5J5Z8s.js";import{S as de,a as me}from"./SegmentedButton-BExc5QcL.js";import{d as K}from"./parameters-bundle.css-BzaqQttB.js";const pe=n=>{const e={minHour:0,maxHour:0,isTwelveHoursFormat:!1};return n==="hour0_23"?(e.minHour=0,e.maxHour=23,e.isTwelveHoursFormat=!1):n==="hour1_24"?(e.minHour=1,e.maxHour=24,e.isTwelveHoursFormat=!1):n==="hour0_11"?(e.minHour=0,e.maxHour=11,e.isTwelveHoursFormat=!0):n==="hour1_12"&&(e.minHour=1,e.maxHour=12,e.isTwelveHoursFormat=!0),e},_e=(n,e)=>{const t=[!1,!1,!1,!1];for(let i=0;i<n.length;i++)e.maxHour!==0&&(t[0]=!0),e.maxHour!==0&&e.isTwelveHoursFormat&&(t[0]=!0),n[i].type==="minute"&&(t[1]=!0),n[i].type==="second"&&(t[2]=!0),n[i].type==="amPmMarker"&&(t[3]=!0);return t};var p=function(n,e,t,i){var o=arguments.length,s=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(r=n[l])&&(s=(o<3?r(s):o>3?r(e,t,s):r(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s},y;const fe=1e3;let d=y=class extends z{constructor(){super(...arguments),this._activeIndex=0,this._entities=[],this._periods=[],this._keyboardBuffer=""}get _hoursConfiguration(){const t=this.getFormat().aFormatArray.find(i=>i.type.startsWith("hour"));return pe(t?t.type:"hour0_23")}get _zeroPaddedHours(){const t=this.getFormat().aFormatArray.find(i=>i.type.startsWith("hour"));return!(t.digits&&t.digits===1)}get _neededComponents(){const e=this.getFormat().aFormatArray;return _e(e,this._hoursConfiguration)}get _hasHoursComponent(){return this._neededComponents[0]}get _hasMinutesComponent(){return this._neededComponents[1]}get _hasSecondsComponent(){return this._neededComponents[2]}get _hasPeriodsComponent(){return this._neededComponents[3]}get dateValue(){return this.value?this.getFormat().parse(this.value,void 0,void 0):F.getInstance()}get validDateValue(){return this.value!==void 0&&this.isValid(this.value)?this.dateValue:F.getInstance()}get periodsArray(){return this.getFormat().aDayPeriodsAbbrev.map(t=>t.toUpperCase())}get _hours(){let e;const t=this.validDateValue;return this._hoursConfiguration.isTwelveHoursFormat&&t.getHours()>this._hoursConfiguration.maxHour?e=t.getHours()-12:this._hoursConfiguration.isTwelveHoursFormat&&t.getHours()<this._hoursConfiguration.minHour?e=t.getHours()+12:e=t.getHours(),e.toString().length===1&&this._zeroPaddedHours&&(e=`0${e}`),e.toString()}get _minutes(){const e=this.validDateValue.getMinutes().toString();return e.length===1?`0${e}`:e}get _seconds(){const e=this.validDateValue.getSeconds().toString();return e.length===1?`0${e}`:e}get _period(){let e;const t=this.validDateValue;if(this._hoursConfiguration.isTwelveHoursFormat)return this._hoursConfiguration.minHour===1?e=t.getHours()>=this._hoursConfiguration.maxHour?this.periodsArray[1]:this.periodsArray[0]:e=t.getHours()>this._hoursConfiguration.maxHour||t.getHours()===this._hoursConfiguration.minHour?this.periodsArray[1]:this.periodsArray[0],e}get _formatPattern(){const e=this.formatPattern,t=!!(e!=null&&e.match(/H/i)),i=!e||!t,o=q(Z());return i?o.getCombinedDateTimePattern("medium","medium",void 0):e}get _isPattern(){return this._formatPattern!=="medium"&&this._formatPattern!=="short"&&this._formatPattern!=="long"}get hoursLabel(){return y.i18nBundle.getText(re)}get minutesLabel(){return y.i18nBundle.getText(ae)}get secondsLabel(){return y.i18nBundle.getText(le)}get clockDialAriaLabel(){return y.i18nBundle.getText(ce)}setValue(e){const t=this.formatValue(e);this.isValid(t)&&(this.value=this.normalizeValue(t),this.fireDecoratorEvent("change",{value:this.value,valid:!0}))}isValid(e){return e===""||this.getFormat().parse(e,void 0,void 0)}normalizeValue(e){return e===""?e:this.getFormat().format(this.getFormat().parse(e,void 0,void 0))}getFormat(){let e;return this._isPattern?e=D.getDateInstance({calendarType:this._calendarType,pattern:this._formatPattern}):e=D.getDateInstance({calendarType:this._calendarType,style:this._formatPattern}),e}formatValue(e){return this.getFormat().format(e)}_componentKey(e){return e}_indexFromName(e){return this._componentMap[this._componentKey(e)]}_getNameFromId(e){const t=e.split("_");return t.length?t[t.length-1]:void 0}_getIndexFromId(e){const t=this._getNameFromId(e);return t?this._indexFromName(t):0}_hoursChange(e){this._hoursConfiguration.isTwelveHoursFormat&&(e=this._shiftHours(e));const t=this.validDateValue;t.setHours(e),this.setValue(t)}_minutesChange(e){const t=this.validDateValue;t.setMinutes(e),this.setValue(t)}_secondsChange(e){const t=this.validDateValue;t.setSeconds(e),this.setValue(t)}_buttonAmPm(){var e;return this._hasPeriodsComponent?(e=this.shadowRoot)==null?void 0:e.querySelector(`#${this._id}_AmPm`):void 0}_createPeriodComponent(){this._hasPeriodsComponent&&this.periodsArray.forEach(e=>{this._periods.push({label:e,selected:this._period===e})})}_periodChange(e){const t=e.target;if(t){const i=t.textContent;this._calculatePeriodChange(i)}}_calculatePeriodChange(e){const t=this.validDateValue;e===this._periods[0].label&&t.getHours()>=12&&t.setHours(t.getHours()-12),e===this._periods[1].label&&t.getHours()<12&&t.setHours(t.getHours()+12),this.setValue(t)}_shiftHours(e){return this._period===this.periodsArray[0]?e=e===12?0:e:this._period===this.periodsArray[1]&&(e=e===12?e:e+12),e}_resetCooldown(e){this._typeCooldownId&&clearTimeout(this._typeCooldownId),e&&this._startCooldown()}_startCooldown(){this._typeCooldownId=setTimeout(()=>{this._keyboardBuffer="",this._typeCooldownId=void 0,this._exactMatch&&(this._setExactMatch(),this._exactMatch=void 0)},fe)}_setExactMatch(){}};p([a()],d.prototype,"value",void 0);p([a()],d.prototype,"formatPattern",void 0);p([a({type:Number,noAttribute:!0})],d.prototype,"_activeIndex",void 0);p([a()],d.prototype,"_calendarType",void 0);p([a({type:Array})],d.prototype,"_entities",void 0);p([a({type:Object})],d.prototype,"_componentMap",void 0);p([a({type:Array})],d.prototype,"_periods",void 0);p([a({type:Number,noAttribute:!0})],d.prototype,"_typeCooldownId",void 0);p([a({type:Number,noAttribute:!0})],d.prototype,"_exactMatch",void 0);p([a({noAttribute:!0})],d.prototype,"_keyboardBuffer",void 0);p([ne("@ui5/webcomponents")],d,"i18nBundle",void 0);d=y=p([I({cldr:!0,renderer:P}),H("change",{bubbles:!0})],d);const ge=d;function be(){return h(k,{children:ue.call(this,{ariaPressed:this.pressed,ariaValueMax:this.valueMax,ariaValueMin:this.valueMin,ariaValueNow:this.valueNow,ariaValueText:this.valueText})})}var C=function(n,e,t,i){var o=arguments.length,s=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(r=n[l])&&(s=(o<3?r(s):o>3?r(e,t,s):r(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s};let g=class extends Y{constructor(){super(...arguments),this.valueMin=-1,this.valueMax=-1,this.valueNow=-1}_onclick(){}get effectiveAccRole(){return"spinbutton"}};C([a({type:Number})],g.prototype,"valueMin",void 0);C([a({type:Number})],g.prototype,"valueMax",void 0);C([a({type:Number})],g.prototype,"valueNow",void 0);C([a()],g.prototype,"valueText",void 0);g=C([I({tag:"ui5-toggle-spin-button",renderer:P,styles:[he.styles,Y.styles],template:be})],g);g.define();const ve=g;function ye(){return f("div",{id:`${this._id}`,onDragStart:this.noop,onDrop:this.noop,"aria-hidden":"true",class:{"ui5-tp-clock":!0,"ui5-tp-clock-inner":this.showInnerCircle,"ui5-tp-clock-active":this.active},children:[h("div",{"data-label":this.label,class:"ui5-tp-clock-dial"}),f("div",{children:[this._items.map((n,e)=>f("div",{class:"ui5-tp-clock-item",style:{transform:`translate(-50%) rotate(${(e+1)*6}deg`},children:[n.item&&f(k,{children:[h("span",{class:"ui5-tp-clock-dot"}),h("span",{id:`${this._id}-${n.item}`,class:"ui5-tp-clock-number",style:{transform:`rotate(-${(e+1)*6}deg)`},children:n.item}),n.innerItem&&h("span",{id:`${this._id}-${n.innerItem}`,class:"ui5-tp-clock-number",style:{transform:`rotate(-${(e+1)*6}deg)`},children:n.innerItem})]}),!n.item&&!this.hideFractions&&h("span",{class:"ui5-tp-clock-mid-dot"})]})),this._selectedItem.showMarker&&f("div",{class:"ui5-tp-clock-item ui5-tp-clock-item-with-marker",style:{transform:`translate(-50%) rotate(${this._selectedItem.angle||0}deg)`},children:[h("div",{class:"ui5-tp-clock-marker"}),h("div",{class:this._selectedItem.itemClasses,style:{transform:`rotate(-${this._selectedItem.angle||0}deg)`},children:this._selectedItem.item}),h("div",{id:`${this._id}-selected`,class:this._selectedItem.innerItemClasses,style:{transform:`rotate(-${this._selectedItem.angle||0}deg)`},children:this._selectedItem.innerItem})]})]}),h("div",{class:"ui5-tp-clock-cover",onTouchStart:this._onTouchStart,onTouchMove:this._onTouchMove,onTouchEnd:this._onTouchEnd,onMouseDown:this._onTouchStart,onMouseMove:this._onTouchMove,onMouseUp:this._onTouchEnd,onMouseOut:this._onMouseOut,ref:this._captureClockRef.bind(this)})]})}x("@ui5/webcomponents-theming","sap_horizon",async()=>j);x("@ui5/webcomponents","sap_horizon",async()=>K);const Ce=`.ui5-tp-clock{position:relative;width:auto;padding:.5625rem;outline:none;display:none}.ui5-tp-clock-active{display:block}.ui5-tp-clock-dial{position:relative;width:auto;display:block;border-radius:100%;background-color:var(--sapLegend_WorkingBackground);text-align:center;z-index:1}.ui5-tp-clock-dial:before{content:attr(data-label);display:flex;align-items:center;justify-content:center;position:absolute;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);color:var(--sapContent_LabelColor);inset:2.75rem;border-radius:100%;z-index:2}.ui5-tp-clock-dial:after{content:"";display:block;padding-bottom:100%}.ui5-tp-clock-inner .ui5-tp-clock-dial:before{background-color:var(--sapLegend_WorkingBackground)}.ui5-tp-clock-cover{position:absolute;inset:.5625rem;border-radius:100%;z-index:10;touch-action:none}.ui5-tp-clock-item{position:absolute;top:0;left:50%;display:inline-block;width:2.75rem;height:100%;z-index:3;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ui5-tp-clock-item.ui5-tp-clock-marker{z-index:4}.ui5-tp-clock-dot{display:block;box-sizing:border-box;width:.25rem;height:.3125rem;margin:0 auto .25rem;border-radius:100%;background-color:var(--sapField_BorderColor)}.ui5-tp-clock-mid-dot{display:block;box-sizing:border-box;width:.125rem;height:.1875rem;margin:0 auto .375rem;border-radius:100%;background-color:var(--sapField_BorderColor)}.ui5-tp-clock-marker{box-sizing:border-box;width:.25rem;height:.5625rem;margin:0 auto;border-radius:100%;background-color:var(--sapButton_Selected_Background);border:.0625rem solid var(--sapButton_Selected_BorderColor)}.ui5-tp-clock-number{box-sizing:border-box;display:inline-block;width:2.75rem;height:2.75rem;border-radius:100%;line-height:2.75rem;text-align:center;vertical-align:top;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);color:var(--sapTextColor)}.ui5-tp-clock-number.ui5-tp-clock-number-hover:not(.ui5-tp-clock-selected){background-color:var(--sapList_Hover_Background)}.ui5-tp-clock-selected{color:var(--sapButton_Selected_TextColor);background-color:var(--sapButton_Selected_Background);border:.0625rem solid var(--sapButton_Selected_BorderColor)}
`;var u=function(n,e,t,i){var o=arguments.length,s=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(r=n[l])&&(s=(o<3?r(s):o>3?r(e,t,s):r(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s};const ke=200,Ie=100,L=6,w="ui5-tp-clock-number",T="ui5-tp-clock-number-hover",E="ui5-tp-clock-selected",xe="ui5-tp-clock-mid-dot";let c=class extends z{constructor(){super(),this.disabled=!1,this.active=!1,this.itemMin=-1,this.itemMax=-1,this.showInnerCircle=!1,this.hideFractions=!1,this.lastItemReplacement=-1,this.prependZero=!1,this.selectedValue=-1,this.displayStep=5,this.valueStep=1,this._items=[],this._selectedItem={},this._dimensionParameters={radius:0,centerX:0,centerY:0,dotHeight:0,numberHeight:0,outerMax:0,outerMin:0,innerMax:0,innerMin:0,offsetX:0,offsetY:0},this._mouseOrTouchDown=!1,this._cancelTouchOut=!1,this._selectedValue=-1,this._movSelectedValue=-1,this._hoveredValue=-1,this._prevHoveredValue=-1,this._animationInProgress=!1,this._fnOnMouseOutUp=()=>{this._mouseOrTouchDown=!1}}get classes(){return{clock:{"ui5-tp-clock":!0,"ui5-tp-clock-inner":this.showInnerCircle,"ui5-tp-clock-active":this.active}}}onEnterDOM(){document.addEventListener("mouseup",this._fnOnMouseOutUp,!1)}onExitDOM(){document.removeEventListener("mouseup",this._fnOnMouseOutUp,!1)}onBeforeRendering(){this._prepareClockItems();const e=this._fixReplacementValue(this.selectedValue);this._updateSelectedValueObject(e)}_fixReplacementValue(e){let t=e;const i=this.itemMax*(this.showInnerCircle?2:1);return t===0&&(t=i),t===i&&this.lastItemReplacement!==-1&&(t=this.lastItemReplacement),t}_updateSelectedValueObject(e){if(e===-1){this._selectedItem={showMarker:!1};return}const t=e>=this.itemMin&&e<=this.itemMax||!this.showInnerCircle&&e===this.lastItemReplacement,i=(e>=this.itemMin+this.itemMax&&e<=this.itemMax*2||e===this.lastItemReplacement)&&this.showInnerCircle,o=360/(this.itemMax-this.itemMin+1),s=this.lastItemReplacement===-1||!this.prependZero?e.toString():e.toString().padStart(2,"0");let r=t||i?e*o:void 0;r!==void 0&&(r%=360),this._selectedItem={angle:r,item:t?e.toString():"",innerItem:i?s:"",showMarker:t||i,itemClasses:w+(t?` ${E}`:""),innerItemClasses:w+(i?` ${E}`:""),outerStyles:{transform:`translate(-50%) rotate(${r||0}deg)`},innerStyles:{transform:`rotate(-${r||0}deg)`}}}_prepareClockItems(){const e=[];let t=this.displayStep,i,o,s;for(this._items=[],s=this.itemMin;s<=this.itemMax;s++)e.push({item:s.toString(),innerItem:this.showInnerCircle?(s+this.itemMax).toString():void 0});this.lastItemReplacement!==-1&&(this.showInnerCircle&&this.prependZero?e[e.length-1].innerItem=this.lastItemReplacement.toString().padStart(2,"0"):e[e.length-1].item=this.lastItemReplacement.toString());const r=360/L/e.length;for(this.valueStep*r>t&&(t=this.valueStep*r),s=1;s<=60;s++)o=s/r-1,i=s%t!==0?{}:e[o],i.angle=s*L,i.outerStyles={transform:`translate(-50%) rotate(${s*6}deg)`},i.innerStyles={transform:`rotate(-${s*6}deg)`},this._items.push(i)}_getClockCoverContainerDomRef(){const e=this.getDomRef();return e&&e.querySelector(".ui5-tp-clock-cover")}_getMaxValue(){return this.showInnerCircle?this.itemMax*2:this.itemMax}_outerHeight(e){if(!e)return 0;const t=window.getComputedStyle(e);return e.offsetHeight+parseInt(t.marginTop)+parseInt(t.marginBottom)}_hoveredId(e){e===this._getMaxValue()&&this.lastItemReplacement!==-1&&(e=this.lastItemReplacement);const t=this.showInnerCircle&&e===this.lastItemReplacement&&this.prependZero?e.toString().padStart(2,"0"):e.toString();return`#${this._id}-${t}`}_getStringValue(e){return this.prependZero?e.toString().padStart(2,"0"):e.toString()}_calculateDimensions(){const e=this.getDomRef(),t=window.pageXOffset||document.documentElement.scrollLeft,i=window.pageYOffset||document.documentElement.scrollTop;if(!e)return;const o=this.getDomRef(),s=o.querySelector(`.${xe}`),r=o.querySelector(`.${w}`),l=Math.round(e.offsetHeight/2),m=this._outerHeight(s),_=this._outerHeight(r),v=e.getBoundingClientRect();this._dimensionParameters={radius:l,centerX:l,centerY:l,dotHeight:m,numberHeight:_,outerMax:l,outerMin:l-_,innerMax:l-_-1,innerMin:l-_*2-1,offsetX:v.left+t,offsetY:v.top+i}}_calculatePosition(e,t){const i=e-this._dimensionParameters.offsetX+1-this._dimensionParameters.radius,o=t-this._dimensionParameters.offsetY+1-this._dimensionParameters.radius,s=i>=0?0:180,r=Math.atan(o/i)*180/Math.PI+90+s,l=360/this.itemMax*this.valueStep,m=Math.sqrt(i*i+o*o),_=m<=this._dimensionParameters.outerMax&&m>(this.showInnerCircle?this._dimensionParameters.outerMin:this._dimensionParameters.innerMin),v=this.showInnerCircle&&m<=this._dimensionParameters.innerMax&&m>this._dimensionParameters.innerMin,X=m<=this._dimensionParameters.outerMax&&m>this._dimensionParameters.outerMin,U=v;let S=Math.round((r===0?360:r)/l)*l;S===0&&(S=360),v||_?(this._selectedValue=S/l*this.valueStep,v&&(this._selectedValue+=this.itemMax)):this._selectedValue=-1,this._hoveredValue=U||X?this._selectedValue:-1,this._selectedValue===this._getMaxValue()&&this.lastItemReplacement!==-1&&(this._selectedValue=this.lastItemReplacement)}_changeValueAnimation(e,t=!1){const i=this.itemMax*(this.showInnerCircle?2:1);let o=this._movSelectedValue,s=e,r=1,l,m,_;t?this._setSelectedValue(e):(l=Math.abs(o-s),m=i-l,o<s?m<l&&(o+=i,r=-1):m<l?s+=i:r=-1,_=o===s?0:Math.ceil(ke/Math.abs(o-s)),this._animationInProgress=!0,this._selectNextNumber(o,s,r,i,e,_))}_selectNextNumber(e,t,i,o,s,r){const l=e>o?e-o:e;e===t&&(this._animationInProgress=!1),this._setSelectedValue(l),e!==t?(e+=i,setTimeout(()=>{this._selectNextNumber(e,t,i,o,s,r)},r)):setTimeout(()=>{this.fireDecoratorEvent("change",{value:s,stringValue:this._getStringValue(s),finalChange:!0})},Ie)}_modifyValue(e){let t=this.selectedValue;const i=this.lastItemReplacement,o=this.itemMin,s=this.itemMax*(this.showInnerCircle?2:1);let r=this.valueStep,l;t%r!==0&&(l=e?Math.ceil(t/r)*r:Math.floor(t/r)*r,r=Math.abs(t-l)),t===i&&(t=s),e?(t+=r,t>s&&(t-=s)):(t-=r,t<o&&(t=s)),this._setSelectedValue(t)}_setSelectedValue(e){const t=this._fixReplacementValue(e);this.selectedValue=t,this.fireDecoratorEvent("change",{value:t,stringValue:this._getStringValue(t),finalChange:!1}),this._updateSelectedValueObject(t)}_captureClockRef(e){e&&(e.addEventListener("mousewheel",this._onMouseWheel.bind(this)),e.addEventListener("DOMMouseScroll",this._onMouseWheel.bind(this)))}_onTouchStart(e){if(this._cancelTouchOut=!1,this.disabled||this._mouseOrTouchDown)return;const t=e.type==="touchstart"?e.touches[0].pageX:e.pageX,i=e.type==="touchstart"?e.touches[0].pageY:e.pageY;this._movSelectedValue=this.selectedValue,this._calculateDimensions(),this._calculatePosition(t,i),this._mouseOrTouchDown=!0}_onTouchMove(e){let t;const i=this.getDomRef();if(e.preventDefault(),this._mouseOrTouchDown){const o=e.type==="touchmove"?e.touches[0].pageX:e.pageX,s=e.type==="touchmove"?e.touches[0].pageY:e.pageY;this._calculatePosition(o,s),!this.disabled&&this._selectedValue!==-1&&this._selectedValue!==this._movSelectedValue&&(this._setSelectedValue(this._selectedValue),this._movSelectedValue=0+this._selectedValue)}else e.type==="mousemove"&&(this._dimensionParameters.radius||this._calculateDimensions(),this._calculatePosition(e.pageX,e.pageY),this.displayStep>1&&this._hoveredValue!==-1&&(this._hoveredValue=Math.round(this._hoveredValue/this.displayStep)*this.displayStep),!this.disabled&&this._hoveredValue!==this._prevHoveredValue&&(t=i.querySelector(this._hoveredId(this._prevHoveredValue)),t&&t.classList.remove(T),this._prevHoveredValue=this._hoveredValue,t=i.querySelector(this._hoveredId(this._prevHoveredValue)),t&&t.classList.add(T)))}_onTouchEnd(e){this._mouseOrTouchDown&&(this._mouseOrTouchDown=!1,e.preventDefault(),!(this.disabled||this._selectedValue===-1)&&(this._cancelTouchOut||this._changeValueAnimation(this._selectedValue)))}_onMouseWheel(e){const t=e.detail?e.detail>0:e.deltaY>0||e.deltaX>0;e.preventDefault(),this._mouseOrTouchDown||this._modifyValue(t)}_onMouseOut(){const e=this.getDomRef().querySelector(this._hoveredId(this._hoveredValue));e&&e.classList.remove(T),this._hoveredValue=-1,this._prevHoveredValue=-1}noop(){return!1}};u([a({type:Boolean})],c.prototype,"disabled",void 0);u([a({type:Boolean})],c.prototype,"active",void 0);u([a({type:Number})],c.prototype,"itemMin",void 0);u([a({type:Number})],c.prototype,"itemMax",void 0);u([a({type:Boolean})],c.prototype,"showInnerCircle",void 0);u([a()],c.prototype,"label",void 0);u([a({type:Boolean})],c.prototype,"hideFractions",void 0);u([a({type:Number})],c.prototype,"lastItemReplacement",void 0);u([a({type:Boolean})],c.prototype,"prependZero",void 0);u([a({type:Number})],c.prototype,"selectedValue",void 0);u([a({type:Number})],c.prototype,"displayStep",void 0);u([a({type:Number})],c.prototype,"valueStep",void 0);u([a({type:Array})],c.prototype,"_items",void 0);u([a({type:Object})],c.prototype,"_selectedItem",void 0);u([a({type:Object})],c.prototype,"_dimensionParameters",void 0);u([a({type:Boolean,noAttribute:!0})],c.prototype,"_mouseOrTouchDown",void 0);u([a({type:Boolean,noAttribute:!0})],c.prototype,"_cancelTouchOut",void 0);u([a({type:Number,noAttribute:!0})],c.prototype,"_selectedValue",void 0);u([a({type:Number,noAttribute:!0})],c.prototype,"_movSelectedValue",void 0);u([a({type:Number,noAttribute:!0})],c.prototype,"_hoveredValue",void 0);u([a({type:Number,noAttribute:!0})],c.prototype,"_prevHoveredValue",void 0);u([a({type:Boolean,noAttribute:!0})],c.prototype,"_animationInProgress",void 0);c=u([I({tag:"ui5-time-picker-clock",renderer:P,styles:Ce,template:ye}),H("change",{bubbles:!0})],c);c.define();const Me=c;function Se(){return f("div",{id:`${this._id}`,class:"ui5-time-picker-tsc-container",tabindex:-1,onKeyDown:this._onkeydown,onKeyUp:this._onkeyup,onFocusIn:this._clocksFocusIn,children:[f("div",{class:"ui5-time-picker-tsc-buttons",children:[this._entities.map(n=>f(k,{children:[n.hasSeparator&&h("span",{class:"ui5-time-selection-separator",children:":"}),h(ve,{id:`${this._id}_button_${n.entity}`,"data-ui5-clock":n.entity,valueMin:n.attributes&&n.attributes.min,valueMax:n.attributes&&n.attributes.max,valueNow:n.value,valueText:n.textValue,accessibleName:n.label,pressed:n.active,onFocusIn:this._buttonFocusIn,children:n.stringValue})]})),this._periods.length>0&&f(k,{children:[h("span",{class:"ui5-time-selection-separator"}),h(me,{id:`${this._id}_AmPm`,onClick:this._periodChange,onFocusIn:this._amPmFocusIn,onFocusOut:this._amPmFocusOut,children:this._periods.map(n=>h(de,{selected:n.selected,children:n.label}))})]})]}),h("div",{class:"ui5-time-picker-tsc-clocks",role:"img","aria-label":this.clockDialAriaLabel,children:this._entities.map(n=>h(Me,{id:`${this._id}_clock_${n.entity}`,"data-ui5-clock":n.entity,active:n.active,label:n.label,itemMin:n.itemMin,itemMax:n.itemMax,selectedValue:n.value,displayStep:n.displayStep,valueStep:n.attributes&&n.attributes.step,lastItemReplacement:n.lastItemReplacement,showInnerCircle:n.showInnerCircle,prependZero:n.prependZero,onChange:this._clockChange}))})]})}x("@ui5/webcomponents-theming","sap_horizon",async()=>j);x("@ui5/webcomponents","sap_horizon",async()=>K);const Ve=`.ui5-time-picker-tsc-container{margin:0 auto;box-sizing:border-box;width:100%;padding:1rem;text-align:center}.ui5-time-picker-tsc-container:focus{outline:none}.ui5-time-picker-tsc-buttons{display:flex;justify-content:center;align-items:center;padding-bottom:1rem;width:100%}.ui5-time-picker-tsc-buttons .ui5-time-selection-separator{min-width:.5rem;padding:0 .125rem;text-align:center;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);color:var(--sapContent_LabelColor)}.ui5-time-picker-tsc-clocks{display:block;text-align:center;width:100%;touch-action:none}
`;var M=function(n,e,t,i){var o=arguments.length,s=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(r=n[l])&&(s=(o<3?r(s):o>3?r(e,t,s):r(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s};let b=class extends ge{constructor(){super(...arguments),this._spacePressed=!1,this._focused=!1,this._amPmFocused=!1}onBeforeRendering(){this._createComponents()}_buttonComponent(e){var o;const t=typeof e=="string"?this._indexFromName(e):e,i=this._entities[t].entity;return i?(o=this.shadowRoot)==null?void 0:o.querySelector(`#${this._id}_button_${i}`):void 0}_clockComponent(e){var o;const t=typeof e=="string"?this._indexFromName(e):e,i=this._entities[t].entity;return i?(o=this.shadowRoot)==null?void 0:o.querySelector(`#${this._id}_clock_${i}`):void 0}_clocksFocusIn(e){e.target.id===this._id&&this._switchClock(this._activeIndex)}_buttonFocusIn(e){const t=e.target,i=this._getNameFromId(t.id);i&&this._switchTo(i)}_amPmFocusIn(){this._amPmFocused=!0}_amPmFocusOut(){this._amPmFocused=!1}_onkeyup(e){B(e)&&(this._spacePressed=!1)}_onkeydown(e){let t;const i=e.target&&e.target.tagName.toLowerCase().indexOf("segmented")===-1;if(W(e))this.fireDecoratorEvent("close-picker");else if(B(e)&&i&&!this._spacePressed)e.preventDefault(),this._spacePressed=!0,this._keyboardBuffer="",this._resetCooldown(!0),this._switchNextClock(!0);else if((O(e)||J(e))&&!G(e)&&!Q(e))t=this._clockComponent(this._activeIndex),t&&!t.disabled&&!this._amPmFocused&&t._modifyValue(O(e)),e.preventDefault();else if(A(e)||ee(e))t=this._clockComponent("hours"),t&&!t.disabled&&(this._switchTo("hours"),t._modifyValue(A(e))),e.preventDefault();else if(R(e)||te(e))t=this._clockComponent("minutes"),t&&!t.disabled&&(this._switchTo("minutes"),t._modifyValue(R(e))),e.preventDefault();else if(N(e)||ie(e))t=this._clockComponent("seconds"),t&&!t.disabled&&(this._switchTo("seconds"),t._modifyValue(N(e))),e.preventDefault();else if(V(e)||$(e)){const o=this._buttonAmPm();if(o){o.items[0].selected=V(e),o.items[1].selected=$(e);const s=V(e)?o.items[0].textContent:o.items[1].textContent;s&&this._calculatePeriodChange(s)}e.preventDefault()}else se(e)?(this._keyboardBuffer="",this._exactMatch=void 0,this._resetCooldown(!0),this._switchNextClock(!0)):oe(e)&&this._entities[this._activeIndex]&&(this._exactMatch=void 0,this._resetCooldown(!0),this._numbersInput(e))}_numbersInput(e){const t=e.key,i=this._keyboardBuffer+t,o=parseInt(i),s=this._entities[this._activeIndex];let r=this._clockComponent(this._activeIndex);!s||!s.attributes||(o>s.attributes.max?(r&&r._setSelectedValue(parseInt(this._keyboardBuffer)),this._switchNextClock(),this._keyboardBuffer=t,r=this._clockComponent(this._activeIndex),r&&r._setSelectedValue(parseInt(t)),this._resetCooldown(!0)):(this._keyboardBuffer=i,r&&r._setSelectedValue(parseInt(this._keyboardBuffer)),(this._keyboardBuffer.length===2||parseInt(`${this._keyboardBuffer}0`)>s.attributes.max)&&(this._resetCooldown(this._keyboardBuffer.length!==2),this._keyboardBuffer="",this._switchNextClock())))}_focusFirstButton(){this._activeIndex=0,this._buttonComponent(0).focus()}_setExactMatch(){const e=this._clockComponent(this._activeIndex);e&&this._exactMatch!==void 0&&e._setSelectedValue(this._exactMatch)}_createComponents(){const e={hours:parseInt(this._hours),minutes:parseInt(this._minutes),seconds:parseInt(this._seconds)};this._entities=[],this._periods=[],this._componentMap={hours:-1,minutes:-1,seconds:-1},this._hasHoursComponent&&(this._componentMap.hours=this._entities.length,this._entities.push({label:this.hoursLabel,entity:"hours",itemMin:1,itemMax:12,value:e.hours,stringValue:this._hours,textValue:`${e.hours} ${this.hoursLabel}`,displayStep:1,lastItemReplacement:this._hoursConfiguration.isTwelveHoursFormat?-1:0,showInnerCircle:!this._hoursConfiguration.isTwelveHoursFormat,prependZero:this._zeroPaddedHours,hasSeparator:this._entities.length>0,active:!1,attributes:{min:this._hoursConfiguration.minHour,max:this._hoursConfiguration.maxHour,step:1}})),this._hasMinutesComponent&&(this._componentMap.minutes=this._entities.length,this._entities.push({label:this.minutesLabel,entity:"minutes",itemMin:1,itemMax:60,value:e.minutes,stringValue:this._minutes,textValue:`${e.minutes} ${this.minutesLabel}`,displayStep:5,lastItemReplacement:0,showInnerCircle:!1,prependZero:!1,hasSeparator:this._entities.length>0,active:!1,attributes:{min:0,max:59,step:1}})),this._hasSecondsComponent&&(this._componentMap.seconds=this._entities.length,this._entities.push({label:this.secondsLabel,entity:"seconds",itemMin:1,itemMax:60,value:e.seconds,stringValue:this._seconds,textValue:`${e.seconds} ${this.secondsLabel}`,displayStep:5,lastItemReplacement:0,showInnerCircle:!1,prependZero:!1,hasSeparator:this._entities.length>0,active:!1,attributes:{min:0,max:59,step:1}})),this._entities[this._activeIndex].active=!0,this._createPeriodComponent()}_switchTo(e){const t=this._componentKey(e);this._componentMap[t]!==void 0&&this._switchClock(this._componentMap[t])}_switchClock(e){const t=this._buttonComponent(e);this._entities.length&&e<this._entities.length&&t&&(this._entities[this._activeIndex].active=!1,this._activeIndex=e,this._entities[this._activeIndex].active=!0,t.focus())}_switchNextClock(e=!1){let t=this._activeIndex;const i=t,o=this._clockComponent(t);do t++,t>=this._entities.length&&(t=e?0:this._entities.length-1);while(o&&o.disabled&&t!==i&&(e||t<this._entities.length-1));const s=this._clockComponent(t);t!==i&&s&&!s.disabled&&this._switchClock(t)}_clockChange(e){const t=this._getIndexFromId(e.target.id),i=e.detail.stringValue,o=e.detail.value,s=this._buttonComponent(t);if(s){switch(this._entities[t].stringValue=i,this._entities[t].value=o,this._entities=JSON.parse(JSON.stringify(this._entities)),t){case this._componentMap.hours:this._hoursChange(o);break;case this._componentMap.minutes:this._minutesChange(o);break;case this._componentMap.seconds:this._secondsChange(o);break}e.detail.finalChange&&(this._activeIndex<this._entities.length-1?this._switchNextClock():s.focus())}}};M([a({type:Boolean,noAttribute:!0})],b.prototype,"_spacePressed",void 0);M([a({type:Boolean,noAttribute:!0})],b.prototype,"_focused",void 0);M([a({type:Boolean,noAttribute:!0})],b.prototype,"_amPmFocused",void 0);b=M([H("close-picker",{bubbles:!0}),I({tag:"ui5-time-selection-clocks",styles:Ve,template:Se})],b);b.define();const ze=b;export{ze as T,ge as a};
