var dt=t=>{throw TypeError(t)};var ct=(t,e,a)=>e.has(t)||dt("Cannot "+a);var Y=(t,e,a)=>(ct(t,e,"read from private field"),a?a.call(t):e.get(t)),H=(t,e,a)=>e.has(t)?dt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),pt=(t,e,a,r)=>(ct(t,e,"write to private field"),r?r.call(t,a):e.set(t,a),a);import{a as g,C as f,_ as R,f as B,L as J,b as K,c as S,d as X,e as yt,h as Yt}from"./Gregorian-CaRAEJn_.js";/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */var C=g.extend("sap.ui.core.date.Buddhist",{constructor:function(){var t=arguments;t.length>1&&(t=Tt(t)),this.oDate=this.createDate(Date,t),this.sCalendarType=f.Buddhist}});C.UTC=function(){var t=Tt(arguments);return Date.UTC.apply(Date,t)};C.now=function(){return Date.now()};function Ct(t){var e=g.getEraStartDate(f.Buddhist,0).year,a=t.year-e+1;return t.year<1941&&t.month<3&&(a-=1),t.year===null&&(a=void 0),{year:a,month:t.month,day:t.day}}function et(t){var e=g.getEraStartDate(f.Buddhist,0).year,a=t.year+e-1;return a<1941&&t.month<3&&(a+=1),t.year===null&&(a=void 0),{year:a,month:t.month,day:t.day}}function Tt(t){var e,a;return e={year:t[0],month:t[1],day:t[2]!==void 0?t[2]:1},a=et(e),t[0]=a.year,t}C.prototype._getBuddhist=function(){var t={year:this.oDate.getFullYear(),month:this.oDate.getMonth(),day:this.oDate.getDate()};return Ct(t)};C.prototype._setBuddhist=function(t){var e=et(t);return this.oDate.setFullYear(e.year,e.month,e.day)};C.prototype._getUTCBuddhist=function(){var t={year:this.oDate.getUTCFullYear(),month:this.oDate.getUTCMonth(),day:this.oDate.getUTCDate()};return Ct(t)};C.prototype._setUTCBuddhist=function(t){var e=et(t);return this.oDate.setUTCFullYear(e.year,e.month,e.day)};C.prototype.getYear=function(){return this._getBuddhist().year};C.prototype.getFullYear=function(){return this._getBuddhist().year};C.prototype.getUTCFullYear=function(){return this._getUTCBuddhist().year};C.prototype.setYear=function(t){var e=this._getBuddhist();return e.year=t,this._setBuddhist(e)};C.prototype.setFullYear=function(t,e,a){var r=this._getBuddhist();return r.year=t,e!==void 0&&(r.month=e),a!==void 0&&(r.day=a),this._setBuddhist(r)};C.prototype.setUTCFullYear=function(t,e,a){var r=this._getUTCBuddhist();return r.year=t,e!==void 0&&(r.month=e),a!==void 0&&(r.day=a),this._setUTCBuddhist(r)};R.set(f.Buddhist,C);const St=["sapUiLegacyTimeFormat","sapUiABAPTimeFormat","sapUiLegacyDateFormat","sapUiABAPDateFormat","sapUiLegacyNumberFormat","sapUiABAPNumberFormat"],v={getWritableInstance(){return{get({name:t}){if(!St.includes(t))throw new Error("Localization :: missing configuration requested.")}}},Type:{}};/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */const ht=Symbol("parameters");var L;class Nt{constructor(e,a){H(this,L);for(const r in a)this[r]=a[r],Object.defineProperty(this,r,{configurable:!1,writable:!1});this[ht]=a,pt(this,L,e)}get type(){return Y(this,L)}static getParameters(e){return Object.assign({},e[ht])}}L=new WeakMap;/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */var E;class It{constructor(){H(this,E,{})}attachEvent(e,a,r){B(typeof e=="string"&&e,"Eventing.attachEvent: sType must be a non-empty string"),B(typeof a=="function","Eventing.attachEvent: fnFunction must be a function");let n=Y(this,E)[e];Array.isArray(n)||(n=Y(this,E)[e]=[]),n.push({fnFunction:a,oData:r})}attachEventOnce(e,a,r){const n=i=>{this.detachEvent(e,n),a.call(null,i)};n.oOriginal={fnFunction:a},this.attachEvent(e,n,r)}detachEvent(e,a){B(typeof e=="string"&&e,"Eventing.detachEvent: sType must be a non-empty string"),B(typeof a=="function","Eventing.detachEvent: fnFunction must be a function");const r=Y(this,E)[e];if(!Array.isArray(r))return;let n;for(let i=0,u=r.length;i<u;i++)if(r[i].fnFunction===a){n=r[i],r.splice(i,1);break}if(!n)for(let i=0,u=r.length;i<u;i++){const o=r[i].fnFunction.oOriginal;if(o&&o.fnFunction===a){r.splice(i,1);break}}r.length==0&&delete Y(this,E)[e]}fireEvent(e,a){let r,n,i,u,o;if(r=Y(this,E)[e],Array.isArray(r))for(r=r.slice(),n=new Nt(e,a),i=0,u=r.length;i<u;i++)o=r[i],o.fnFunction.call(null,n)}}E=new WeakMap;/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */var Jt=function(e){for(var a in e)return!1;return!0};/*!
* OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/const Z=new It,y=v.getWritableInstance(),A={};let l,x;const V={"":{pattern:null},1:{pattern:"dd.MM.yyyy"},2:{pattern:"MM/dd/yyyy"},3:{pattern:"MM-dd-yyyy"},4:{pattern:"yyyy.MM.dd"},5:{pattern:"yyyy/MM/dd"},6:{pattern:"yyyy-MM-dd"},7:{pattern:"Gyy.MM.dd"},8:{pattern:"Gyy/MM/dd"},9:{pattern:"Gyy-MM-dd"},A:{pattern:"yyyy/MM/dd"},B:{pattern:"yyyy/MM/dd"},C:{pattern:"yyyy/MM/dd"}},G={"":{short:null,medium:null,dayPeriods:null},0:{short:"HH:mm",medium:"HH:mm:ss",dayPeriods:null},1:{short:"hh:mm a",medium:"hh:mm:ss a",dayPeriods:["AM","PM"]},2:{short:"hh:mm a",medium:"hh:mm:ss a",dayPeriods:["am","pm"]},3:{short:"KK:mm a",medium:"KK:mm:ss a",dayPeriods:["AM","PM"]},4:{short:"KK:mm a",medium:"KK:mm:ss a",dayPeriods:["am","pm"]}},Q={"":{groupingSeparator:null,decimalSeparator:null}," ":{groupingSeparator:".",decimalSeparator:","},X:{groupingSeparator:",",decimalSeparator:"."},Y:{groupingSeparator:" ",decimalSeparator:","}};function D(t,e){if(!t)throw new TypeError(e)}function b(t,e){v._.invalidate();const a=A[t];if(e!=null?A[t]=e:delete A[t],(a!=null||e!=null)&&!Yt(a,e)){const r=!l;l??(l={}),l[t]=e,r&&F()}}function Lt(t){let e;if(t&&typeof t=="string")try{e=new J(t)}catch{}else t instanceof J&&(e=t);return e}const s={attachChange(t){Z.attachEvent("change",t)},detachChange(t){Z.detachEvent("change",t)},getLanguageTag(){function t(){let e=new J(yt.getLanguage());if(!Jt(A)||s.getCalendarWeekNumbering()!==S.Default){let a=e.toString();a.indexOf("-x-")<0?a+="-x-sapufmt":a.indexOf("-sapufmt")<=a.indexOf("-x-")&&(a+="-sapufmt"),e=new J(a)}return e}return y.get({name:"sapUiFormatLocale",type:function(e){return new J(e)},defaultValue:t,external:!0})},setLanguageTag(t){const e=Lt(t);D(t==null||e,"vLanguageTag must be a BCP47 language tag or Java Locale id or null");const a=s.getLanguageTag();y.set("sapUiFormatLocale",e==null?void 0:e.toString());const r=s.getLanguageTag();if(a.toString()!==r.toString()){const n=!l;l??(l={}),l.languageTag=r.toString(),n&&F()}},_set:b,getCustomUnits(){var t;return(t=A.units)==null?void 0:t.short},setCustomUnits(t){let e=null;t&&(e={short:t}),b("units",e)},addCustomUnits(t){const e=s.getCustomUnits();e&&(t=K({},e,t)),s.setCustomUnits(t)},setUnitMappings(t){b("unitMappings",t)},addUnitMappings(t){const e=s.getUnitMappings();e&&(t=K({},e,t)),s.setUnitMappings(t)},getUnitMappings(){return A.unitMappings},getDatePattern(t){return B(t=="short"||t=="medium"||t=="long"||t=="full","sStyle must be short, medium, long or full"),A["dateFormats-"+t]},setDatePattern(t,e){D(t=="short"||t=="medium"||t=="long"||t=="full","sStyle must be short, medium, long or full"),b("dateFormats-"+t,e)},getTimePattern(t){return B(t=="short"||t=="medium"||t=="long"||t=="full","sStyle must be short, medium, long or full"),A["timeFormats-"+t]},setTimePattern(t,e){D(t=="short"||t=="medium"||t=="long"||t=="full","sStyle must be short, medium, long or full"),b("timeFormats-"+t,e)},getNumberSymbol(t){return B(["group","decimal","plusSign","minusSign"].includes(t),"sType must be decimal, group, plusSign or minusSign"),A["symbols-latn-"+t]},setNumberSymbol(t,e){D(["group","decimal","plusSign","minusSign"].includes(t),"sType must be decimal, group, plusSign or minusSign"),b("symbols-latn-"+t,e)},getCustomCurrencies(){return A.currency},setCustomCurrencies(t){D(typeof t=="object"||t==null,"mCurrencyDigits must be an object"),Object.keys(t||{}).forEach(function(e){D(typeof e=="string"),D(typeof t[e]=="object")}),b("currency",t)},addCustomCurrencies(t){const e=s.getCustomCurrencies();e&&(t=K({},e,t)),s.setCustomCurrencies(t)},_setDayPeriods(t,e){B(t=="narrow"||t=="abbreviated"||t=="wide","sWidth must be narrow, abbreviated or wide"),b("dayPeriods-format-"+t,e)},getABAPDateFormat(){const t=y.get({name:"sapUiABAPDateFormat",type:v.Type.String,defaultValue:y.get({name:"sapUiLegacyDateFormat",type:v.Type.String,external:!0}),external:!0});return t?t.toUpperCase():void 0},setABAPDateFormat(t){t=t?String(t).toUpperCase():"",D(V.hasOwnProperty(t),"sFormatId must be one of ['1','2','3','4','5','6','7','8','9','A','B','C'] or empty");const e=!l;s.getABAPDateFormat()!==t&&(l??(l={}),y.set("sapUiABAPDateFormat",t),l.ABAPDateFormat=t,s.setDatePattern("short",V[t].pattern),s.setDatePattern("medium",V[t].pattern),e&&F())},getABAPTimeFormat(){const t=y.get({name:"sapUiABAPTimeFormat",type:v.Type.String,defaultValue:y.get({name:"sapUiLegacyTimeFormat",type:v.Type.String,external:!0}),external:!0});return t?t.toUpperCase():void 0},setABAPTimeFormat(t){t=t||"",D(G.hasOwnProperty(t),"sFormatId must be one of ['0','1','2','3','4'] or empty");const e=!l;s.getABAPTimeFormat()!==t&&(l??(l={}),y.set("sapUiABAPTimeFormat",t),l.ABAPTimeFormat=t,s.setTimePattern("short",G[t].short),s.setTimePattern("medium",G[t].medium),s._setDayPeriods("abbreviated",G[t].dayPeriods),e&&F())},getABAPNumberFormat(){const t=y.get({name:"sapUiABAPNumberFormat",type:v.Type.String,defaultValue:y.get({name:"sapUiLegacyNumberFormat",type:v.Type.String,external:!0}),external:!0});return t?t.toUpperCase():void 0},setABAPNumberFormat(t){t=t?t.toUpperCase():"",D(Q.hasOwnProperty(t),"sFormatId must be one of [' ','X','Y'] or empty");const e=!l;s.getABAPNumberFormat()!==t&&(l??(l={}),y.set("sapUiABAPNumberFormat",t),l.ABAPNumberFormat=t,s.setNumberSymbol("group",Q[t].groupingSeparator),s.setNumberSymbol("decimal",Q[t].decimalSeparator),e&&F())},setCustomIslamicCalendarData(t){D(Array.isArray(t),"aCustomCalendarData must be an Array");const e=!l;l??(l={}),x=l.customIslamicCalendarData=t.slice(),e&&F()},getCustomIslamicCalendarData(){return(x==null?void 0:x.slice())??void 0},setTrailingCurrencyCode(t){D(typeof t=="boolean","bTrailingCurrencyCode must be a boolean"),y.set("sapUiTrailingCurrencyCode",t)},getTrailingCurrencyCode(){return y.get({name:"sapUiTrailingCurrencyCode",type:v.Type.Boolean,defaultValue:!0,external:!0})},getCustomLocaleData(){return A},getCalendarWeekNumbering(){let t=S.Default;try{t=y.get({name:"sapUiCalendarWeekNumbering",type:S,defaultValue:S.Default,external:!0})}catch{}return t},setCalendarWeekNumbering(t){if(v._.checkEnum(S,t,"calendarWeekNumbering"),y.get({name:"sapUiCalendarWeekNumbering",type:S,defaultValue:S.Default,external:!0})!==t){const a=!l;l??(l={}),y.set("sapUiCalendarWeekNumbering",t),l.calendarWeekNumbering=t,a&&F()}},getCalendarType(){let t,e=y.get({name:"sapUiCalendarType",type:v.Type.String,external:!0});if(e??(e=null),e){for(t in f)if(t.toLowerCase()===e.toLowerCase())return t;X.warning("Parameter 'calendarType' is set to "+e+" which isn't a valid value and therefore ignored. The calendar type is determined from format setting and current locale")}switch(s.getABAPDateFormat()){case"1":case"2":case"3":case"4":case"5":case"6":return f.Gregorian;case"7":case"8":case"9":return f.Japanese;case"A":case"B":return f.Islamic;case"C":return f.Persian;default:return yt.getPreferredCalendarType()}},setCalendarType(t){const e=s.getCalendarType();y.set("sapUiCalendarType",t);const a=s.getCalendarType();if(e!==a){const r=!l;l??(l={}),l.calendarType=a,r&&F()}}};function F(){Z.fireEvent("change",l),l=void 0}function Ot(){const t=s.getABAPDateFormat();t!==void 0&&s.setABAPDateFormat(t);const e=s.getABAPNumberFormat();e!==void 0&&s.setABAPNumberFormat(e);const a=s.getABAPTimeFormat();a!==void 0&&s.setABAPTimeFormat(a)}Ot();/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */var d=g.extend("sap.ui.core.date.Islamic",{constructor:function(){var t=arguments;t.length>1&&(t=At(t)),this.oDate=this.createDate(Date,t),this.sCalendarType=f.Islamic}});d.UTC=function(){var t=At(arguments);return Date.UTC.apply(Date,t)};d.now=function(){return Date.now()};var Dt=1400,I=17214255e-1,Ut=19484395e-1,wt=-425215872e5,xt=864e5,W=null,Gt=["A","B"];function vt(t){var e=t.year,a=t.month,r=t.day,n,i,u,o,T,M,P;if(M=0,a+1>2&&(M=k(e)?-1:-2),P=I-1+365*(e-1)+Math.floor((e-1)/4)+-Math.floor((e-1)/100)+Math.floor((e-1)/400)+Math.floor((367*(a+1)-362)/12+M+r),P=Math.floor(P)+.5,T=P-Ut,o=Math.floor(T/29.530588853),o<0)n=Math.floor(o/12)+1,i=o%12,i<0&&(i+=12),u=T-rt(n,i)+1;else{for(o++;tt(o)>T;)o--;n=Math.floor(o/12)+1,i=o%12,u=T-tt(12*(n-1)+i)+1}return{day:u,month:i,year:n}}function at(t){var e=t.year,a=t.month,r=t.day,n=e<1?rt(e,a):tt(12*(e-1)+a),i=r+n+Ut-1,u=Math.floor(i-.5)+.5,o=u-I,T=Math.floor(o/146097),M=q(o,146097),P=Math.floor(M/36524),U=q(M,36524),N=Math.floor(U/1461),Bt=q(U,1461),st=Math.floor(Bt/365),h=T*400+P*100+N*4+st,O,ut,lt,mt,ft,z,w,$;return P==4||st==4||h++,lt=I+365*(h-1)+Math.floor((h-1)/4)-Math.floor((h-1)/100)+Math.floor((h-1)/400),mt=u-lt,ft=I-1+365*(h-1)+Math.floor((h-1)/4)-Math.floor((h-1)/100)+Math.floor((h-1)/400)+Math.floor(739/12+(k(h)?-1:-2)+1),w=0,u<ft?w=0:w=k(h)?1:2,O=Math.floor(((mt+w)*12+373)/367),z=I-1+365*(h-1)+Math.floor((h-1)/4)-Math.floor((h-1)/100)+Math.floor((h-1)/400),$=0,O>2&&($=k(h)?-1:-2),z+=Math.floor((367*O-362)/12+$+1),ut=u-z+1,{day:ut,month:O-1,year:h}}function At(t){var e=Array.prototype.slice.call(t),a,r;return a={year:t[0],month:t[1],day:t[2]!==void 0?t[2]:1},r=at(a),e[0]=r.year,e[1]=r.month,e[2]=r.day,e}function kt(){var t,e;if(W={},t=s.getABAPDateFormat(),t=Wt(t)?t:"A",e=s.getCustomIslamicCalendarData(),e=e||[],!e.length){X.warning("No calendar customizations.");return}e.forEach(function(a){if(a.dateFormat===t){var r=gt(a.gregDate),n=new Date(Date.UTC(r.year,r.month-1,r.day)),i=n.getTime(),u=(i-wt)/xt;r=gt(a.islamicMonthStart);var o=(r.year-1)*12+r.month-1;W[o]=u}}),X.info("Working with date format: ["+t+"] and customization: "+JSON.stringify(e))}function gt(t){return{year:parseInt(t.substr(0,4)),month:parseInt(t.substr(4,2)),day:parseInt(t.substr(6,2))}}function tt(t){W||kt();var e=W[t];if(!e){var a=Math.floor(t/12)+1,r=t%12;e=rt(a,r)}return e}function rt(t,e){return Math.ceil(29.5*e)+(t-1)*354+Math.floor((3+11*t)/30)}function q(t,e){return t-e*Math.floor(t/e)}function k(t){return!(t%400)||!(t%4)&&!!(t%100)}function Wt(t){return Gt.indexOf(t)!==-1}d.prototype._getIslamic=function(){return vt({day:this.oDate.getDate(),month:this.oDate.getMonth(),year:this.oDate.getFullYear()})};d.prototype._setIslamic=function(t){var e=at(t);return this.oDate.setFullYear(e.year,e.month,e.day)};d.prototype._getUTCIslamic=function(){return vt({day:this.oDate.getUTCDate(),month:this.oDate.getUTCMonth(),year:this.oDate.getUTCFullYear()})};d.prototype._setUTCIslamic=function(t){var e=at(t);return this.oDate.setUTCFullYear(e.year,e.month,e.day)};d.prototype.getDate=function(t){return this._getIslamic().day};d.prototype.getMonth=function(){return this._getIslamic().month};d.prototype.getYear=function(){return this._getIslamic().year-Dt};d.prototype.getFullYear=function(){return this._getIslamic().year};d.prototype.setDate=function(t){var e=this._getIslamic();return e.day=t,this._setIslamic(e)};d.prototype.setMonth=function(t,e){var a=this._getIslamic();return a.month=t,e!==void 0&&(a.day=e),this._setIslamic(a)};d.prototype.setYear=function(t){var e=this._getIslamic();return e.year=t+Dt,this._setIslamic(e)};d.prototype.setFullYear=function(t,e,a){var r=this._getIslamic();return r.year=t,e!==void 0&&(r.month=e),a!==void 0&&(r.day=a),this._setIslamic(r)};d.prototype.getUTCDate=function(t){return this._getUTCIslamic().day};d.prototype.getUTCMonth=function(){return this._getUTCIslamic().month};d.prototype.getUTCFullYear=function(){return this._getUTCIslamic().year};d.prototype.setUTCDate=function(t){var e=this._getUTCIslamic();return e.day=t,this._setUTCIslamic(e)};d.prototype.setUTCMonth=function(t,e){var a=this._getUTCIslamic();return a.month=t,e!==void 0&&(a.day=e),this._setUTCIslamic(a)};d.prototype.setUTCFullYear=function(t,e,a){var r=this._getUTCIslamic();return r.year=t,e!==void 0&&(r.month=e),a!==void 0&&(r.day=a),this._setUTCIslamic(r)};R.set(f.Islamic,d);/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */var p=g.extend("sap.ui.core.date.Japanese",{constructor:function(){var t=arguments;t.length>1&&(t=_t(t)),this.oDate=this.createDate(Date,t),this.sCalendarType=f.Japanese}});p.UTC=function(){var t=_t(arguments);return Date.UTC.apply(Date,t)};p.now=function(){return Date.now()};function j(t){var e=g.getEraByDate(f.Japanese,t.year,t.month,t.day),a=g.getEraStartDate(f.Japanese,e).year;return{era:e,year:t.year-a+1,month:t.month,day:t.day}}function nt(t){var e=g.getEraStartDate(f.Japanese,t.era).year;return{year:e+t.year-1,month:t.month,day:t.day}}function _t(t){var e,a,r,n=t[0];if(typeof n=="number"){if(n>=100)return t;r=g.getCurrentEra(f.Japanese),n=[r,n]}else Array.isArray(n)||(n=[]);return e={era:n[0],year:n[1],month:t[1],day:t[2]!==void 0?t[2]:1},a=nt(e),t[0]=a.year,t}p.prototype._getJapanese=function(){var t={year:this.oDate.getFullYear(),month:this.oDate.getMonth(),day:this.oDate.getDate()};return j(t)};p.prototype._setJapanese=function(t){var e=nt(t);return this.oDate.setFullYear(e.year,e.month,e.day)};p.prototype._getUTCJapanese=function(){var t={year:this.oDate.getUTCFullYear(),month:this.oDate.getUTCMonth(),day:this.oDate.getUTCDate()};return j(t)};p.prototype._setUTCJapanese=function(t){var e=nt(t);return this.oDate.setUTCFullYear(e.year,e.month,e.day)};p.prototype.getYear=function(){return this._getJapanese().year};p.prototype.getFullYear=function(){return this._getJapanese().year};p.prototype.getEra=function(){return this._getJapanese().era};p.prototype.getUTCFullYear=function(){return this._getUTCJapanese().year};p.prototype.getUTCEra=function(){return this._getUTCJapanese().era};p.prototype.setYear=function(t){var e=this._getJapanese();return e.year=t,this._setJapanese(e)};p.prototype.setFullYear=function(t,e,a){var r=this._getJapanese();return r.year=t,e!==void 0&&(r.month=e),a!==void 0&&(r.day=a),this._setJapanese(r)};p.prototype.setEra=function(t,e,a,r){var n=g.getEraStartDate(f.Japanese,t),i=j(n);return e!==void 0&&(i.year=e),a!==void 0&&(i.month=a),r!==void 0&&(i.day=r),this._setJapanese(i)};p.prototype.setUTCFullYear=function(t,e,a){var r=this._getUTCJapanese();return r.year=t,e!==void 0&&(r.month=e),a!==void 0&&(r.day=a),this._setUTCJapanese(r)};p.prototype.setUTCEra=function(t,e,a,r){var n=g.getEraStartDate(f.Japanese,t),i=j(n);return e!==void 0&&(i.year=e),a!==void 0&&(i.month=a),r!==void 0&&(i.day=r),this._setUTCJapanese(i)};p.prototype.getWeek=function(t,e){return g.getWeekByDate(this.sCalendarType,this.oDate.getFullYear(),this.getMonth(),this.getDate(),t,e)};p.prototype.getUTCWeek=function(t,e){return g.getWeekByDate(this.sCalendarType,this.oDate.getUTCFullYear(),this.getUTCMonth(),this.getUTCDate(),t,e)};R.set(f.Japanese,p);/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */var c=g.extend("sap.ui.core.date.Persian",{constructor:function(){var t=arguments;t.length>1&&(t=bt(t)),this.oDate=this.createDate(Date,t),this.sCalendarType=f.Persian}});c.UTC=function(){var t=bt(arguments);return Date.UTC.apply(Date,t)};c.now=function(){return Date.now()};var Pt=1300;function Mt(t){var e=ot(t.year,t.month+1,t.day);return jt(e)}function it(t){var e=Rt(t.year,t.month+1,t.day);return Et(e)}function bt(t){var e=Array.prototype.slice.call(t),a,r;return typeof t[0]!="number"||typeof t[1]!="number"||t[2]!==void 0&&typeof t[2]!="number"?(e[0]=NaN,e[1]=NaN,e[2]=NaN,e):(a={year:t[0],month:t[1],day:t[2]!==void 0?t[2]:1},r=it(a),e[0]=r.year,e[1]=r.month,e[2]=r.day,e)}function Ft(t){var e=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178],a=e.length,r=t+621,n=-14,i=e[0],u,o,T,M,P,U,N;for(N=1;N<a&&(u=e[N],o=u-i,!(t<u));N+=1)n=n+m(o,33)*8+m(_(o,33),4),i=u;return U=t-i,n=n+m(U,33)*8+m(_(U,33)+3,4),_(o,33)===4&&o-U===4&&(n+=1),M=m(r,4)-m((m(r,100)+1)*3,4)-150,P=20+n-M,o-U<6&&(U=U-o+m(o+4,33)*33),T=_(_(U+1,33)-1,4),T===-1&&(T=4),{leap:T,gy:r,march:P}}function Rt(t,e,a){for(;e<1;)e+=12,t--;for(;e>12;)e-=12,t++;var r=Ft(t);return ot(r.gy,3,r.march)+(e-1)*31-m(e,7)*(e-7)+a-1}function jt(t){var e=Et(t).year,a=e-621,r=Ft(a),n=ot(e,3,r.march),i,u,o;if(o=t-n,o>=0){if(o<=185)return u=1+m(o,31),i=_(o,31)+1,{year:a,month:u-1,day:i};o-=186}else a-=1,o+=179,r.leap===1&&(o+=1);return u=7+m(o,30),i=_(o,30)+1,{year:a,month:u-1,day:i}}function ot(t,e,a){var r=m((t+m(e-8,6)+100100)*1461,4)+m(153*_(e+9,12)+2,5)+a-34840408;return r=r-m(m(t+100100+m(e-8,6),100)*3,4)+752,r}function Et(t){var e,a,r,n,i;return e=4*t+139361631,e=e+m(m(4*t+183187720,146097)*3,4)*4-3908,a=m(_(e,1461),4)*5+308,r=m(_(a,153),5)+1,n=_(m(a,153),12)+1,i=m(e,1461)-100100+m(8-n,6),{year:i,month:n-1,day:r}}function m(t,e){return~~(t/e)}function _(t,e){return t-~~(t/e)*e}c.prototype._getPersian=function(){return Mt({day:this.oDate.getDate(),month:this.oDate.getMonth(),year:this.oDate.getFullYear()})};c.prototype._setPersian=function(t){var e=it(t);return this.oDate.setFullYear(e.year,e.month,e.day)};c.prototype._getUTCPersian=function(){return Mt({day:this.oDate.getUTCDate(),month:this.oDate.getUTCMonth(),year:this.oDate.getUTCFullYear()})};c.prototype._setUTCPersian=function(t){var e=it(t);return this.oDate.setUTCFullYear(e.year,e.month,e.day)};c.prototype.getDate=function(t){return this._getPersian().day};c.prototype.getMonth=function(){return this._getPersian().month};c.prototype.getYear=function(){return this._getPersian().year-Pt};c.prototype.getFullYear=function(){return this._getPersian().year};c.prototype.setDate=function(t){var e=this._getPersian();return e.day=t,this._setPersian(e)};c.prototype.setMonth=function(t,e){var a=this._getPersian();return a.month=t,e!==void 0&&(a.day=e),this._setPersian(a)};c.prototype.setYear=function(t){var e=this._getPersian();return e.year=t+Pt,this._setPersian(e)};c.prototype.setFullYear=function(t,e,a){var r=this._getPersian();return r.year=t,e!==void 0&&(r.month=e),a!==void 0&&(r.day=a),this._setPersian(r)};c.prototype.getUTCDate=function(t){return this._getUTCPersian().day};c.prototype.getUTCMonth=function(){return this._getUTCPersian().month};c.prototype.getUTCFullYear=function(){return this._getUTCPersian().year};c.prototype.setUTCDate=function(t){var e=this._getUTCPersian();return e.day=t,this._setUTCPersian(e)};c.prototype.setUTCMonth=function(t,e){var a=this._getUTCPersian();return a.month=t,e!==void 0&&(a.day=e),this._setUTCPersian(a)};c.prototype.setUTCFullYear=function(t,e,a){var r=this._getUTCPersian();return r.year=t,e!==void 0&&(r.month=e),a!==void 0&&(r.day=a),this._setUTCPersian(r)};R.set(f.Persian,c);
