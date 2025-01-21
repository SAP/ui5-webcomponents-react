import{j as d}from"./jsx-runtime-CLpGMVip.js";import{s as H}from"./Gregorian-XMS1eY0v.js";import"./Persian-C4PzxC7g.js";import{e as q}from"./Calendar-X00ChgoR.js";import{w as x,c as A,j as _,p as D,d as R,s as m,m as z,e as P,I as G}from"./withWebComponent-DfVDXLfc.js";import{d as J}from"./slot-_4yKMUwC.js";import{i as K}from"./i18n-DEVDpFvK.js";import{l as k}from"./event-strict-DgQLNDEV.js";import{f as Q,r as U,l as Z}from"./ItemNavigation-nUPkWObb.js";import{P as ee,D as oe}from"./Keys-Df3IBHp2.js";import{bA as te,bB as re,bC as ne,bD as ae,bE as de}from"./i18n-defaults-Cyg2J0QB.js";import{d as Y}from"./parameters-bundle.css-BzaqQttB.js";const V=x("ui5-calendar",["calendarWeekNumbering","formatPattern","maxDate","minDate","primaryCalendarType","secondaryCalendarType","selectionMode"],["hideWeekNumbers"],["calendarLegend","specialDates"],["selection-change"]);V.displayName="Calendar";var S;(function(e){e.Today="Today",e.Selected="Selected",e.None="None",e.Working="Working",e.NonWorking="NonWorking",e.Type01="Type01",e.Type02="Type02",e.Type03="Type03",e.Type04="Type04",e.Type05="Type05",e.Type06="Type06",e.Type07="Type07",e.Type08="Type08",e.Type09="Type09",e.Type10="Type10",e.Type11="Type11",e.Type12="Type12",e.Type13="Type13",e.Type14="Type14",e.Type15="Type15",e.Type16="Type16",e.Type17="Type17",e.Type18="Type18",e.Type19="Type19",e.Type20="Type20"})(S||(S={}));const n=S;function ie(){return A("div",{class:"ui5-calendar-legend-item-root",tabindex:parseInt(this.forcedTabIndex),role:"listitem",children:[_("div",{class:"ui5-calendar-legend-item-box"}),_("div",{class:"ui5-calendar-legend-item-text",children:this.effectiveText})]})}D("@ui5/webcomponents-theming","sap_horizon",async()=>R);D("@ui5/webcomponents","sap_horizon",async()=>Y);const le=`.ui5-calendar-legend-item-root{display:flex;flex-direction:row;flex-wrap:wrap;width:var(--_ui5-v2-6-2-calendar-legend-item-root-width);white-space:pre-line;text-overflow:ellipsis;overflow:hidden;cursor:pointer;margin:.0625rem 0}.ui5-calendar-legend-item-box{display:inline-block;box-sizing:border-box;height:1rem;width:1rem;margin:var(--_ui5-v2-6-2-calendar-legend-item-box-margin);margin-inline-end:var(--_ui5-v2-6-2-calendar-legend-item-box-inner-margin);background:var(--sapLegend_WorkingBackground);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}.ui5-calendar-legend-item-text{display:flex;align-items:center;font-size:.875rem;line-height:1.25rem;color:var(--sapContent_LabelColor);font-weight:400;font-family:var(--sapFontFamily);font-size:var(--sapFontSmallSize);white-space:pre-line;text-overflow:ellipsis;overflow:hidden}:host([type="Today"]) .ui5-calendar-legend-item-box{border-color:var(--sapLegend_CurrentDateTime);border:.125rem solid var(--sapLegend_CurrentDateTime)}:host([type="Selected"]) .ui5-calendar-legend-item-box{background:var(--sapContent_Selected_Background);border:.0625rem solid var(--sapContent_FocusColor)}:host([type="NonWorking"]) .ui5-calendar-legend-item-box{background:var(--sapLegend_NonWorkingBackground);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type01"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor1);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type02"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor2);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type03"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor3);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type04"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor4);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type05"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor5);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type06"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor6);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type07"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor7);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type08"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor8);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type09"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor9);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type10"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor10);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type11"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor11);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type12"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor12);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type13"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor13);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type14"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor14);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type15"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor15);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type16"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor16);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type17"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor17);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type18"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor18);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type19"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor19);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type20"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor20);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}.ui5-calendar-legend-item-root:focus{outline:var(--_ui5-v2-6-2-calendar-legend-item-root-focus-border);outline-offset:var(--_ui5-v2-6-2-calendar-legend-item-root-focus-offset);border-radius:var(--_ui5-v2-6-2-calendar-legend-item-root-focus-border-radius);margin:.0625rem 0}
`;var v=function(e,o,t,i){var l=arguments.length,r=l<3?o:i===null?i=Object.getOwnPropertyDescriptor(o,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,o,t,i);else for(var g=e.length-1;g>=0;g--)(a=e[g])&&(r=(l<3?a(r):l>3?a(o,t,r):a(o,t))||r);return l>3&&r&&Object.defineProperty(o,t,r),r},h;let u=h=class extends G{constructor(){super(...arguments),this.type="None",this.forcedTabIndex="-1"}get effectiveText(){const o=h.i18nBundle.getText(te),t=h.i18nBundle.getText(re),i=h.i18nBundle.getText(ne),l=h.i18nBundle.getText(ae);return{[n.Today]:o,[n.Selected]:t,[n.NonWorking]:l,[n.Working]:i}[this.type]||this.text||this.type}};v([m()],u.prototype,"text",void 0);v([m()],u.prototype,"type",void 0);v([m({noAttribute:!0})],u.prototype,"forcedTabIndex",void 0);v([K("@ui5/webcomponents")],u,"i18nBundle",void 0);u=h=v([z({tag:"ui5-calendar-legend-item",renderer:P,styles:le,template:ie})],u);u.define();const se=u;function pe(){return A("div",{class:"ui5-calendar-legend-root",onFocusOut:this._onFocusOut,onFocusIn:this._onFocusIn,onKeyDown:this._onItemKeyDown,onMouseDown:this._onMouseDown,role:"list","aria-roledescription":this._roleDescription,children:[this.defaultItemsMapping.filter(e=>!e.hide).map(e=>_(se,{type:e.type})),this.legendItems.map(e=>_("slot",{name:e._individualSlot}))]})}D("@ui5/webcomponents-theming","sap_horizon",async()=>R);D("@ui5/webcomponents","sap_horizon",async()=>Y);const ce=`.ui5-calendar-legend-root{column-width:7.5rem;gap:.5rem;padding:var(--_ui5-v2-6-2-calendar-legend-root-padding);margin:1rem 0;width:var(--_ui5-v2-6-2-calendar-legend-root-width);background-color:var(--sapList_Background)}
`;var y=function(e,o,t,i){var l=arguments.length,r=l<3?o:i===null?i=Object.getOwnPropertyDescriptor(o,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,o,t,i);else for(var g=e.length-1;g>=0;g--)(a=e[g])&&(r=(l<3?a(r):l>3?a(o,t,r):a(o,t))||r);return l>3&&r&&Object.defineProperty(o,t,r),r},L;let p=L=class extends G{constructor(){super(),this.hideToday=!1,this.hideSelectedDay=!1,this.hideNonWorkingDay=!1,this.hideWorkingDay=!1,this._lastFocusedItemIndex=null}onAfterRendering(){if(!this._itemNavigation){this._itemNavigation=new Q(this,{navigationMode:U.Horizontal,behavior:Z.Static,getItemsCallback:()=>this.focusableElements});const o=this._lastFocusedItemIndex!==null?this._lastFocusedItemIndex:0;this._itemNavigation.setCurrentItem(this.focusableElements[o])}}_onMouseDown(o){o.stopPropagation();const t=o.target;this._itemNavigation.setCurrentItem(t),this._itemNavigation._focusCurrentItem(),this._lastFocusedItemIndex=this.focusableElements.indexOf(t)}_onFocusIn(o){const t=o.target;this.fireDecoratorEvent("calendar-legend-selection-change",{item:t}),this._lastFocusedItemIndex=this.focusableElements.indexOf(t)}_onFocusOut(){this.fireDecoratorEvent("calendar-legend-focus-out")}_onItemKeyDown(o){const t=this.focusableElements,i=t.length,l=o.target,r=t.indexOf(l);if(ee(o)){o.preventDefault();const a=r+1;a<i&&(this._itemNavigation.setCurrentItem(t[a]),this._itemNavigation._focusCurrentItem(),this._lastFocusedItemIndex=a)}if(oe(o)){o.preventDefault();const a=r-1;a>=0&&(this._itemNavigation.setCurrentItem(t[a]),this._itemNavigation._focusCurrentItem(),this._lastFocusedItemIndex=a)}}get focusableElements(){return[...this.shadowRoot.querySelectorAll("[ui5-calendar-legend-item]"),...this.legendItems]}get legendItems(){return this.getSlottedNodes("items").filter(t=>t.hasAttribute("ui5-calendar-legend-item"))}get defaultItemsMapping(){return[{type:n.Today,hide:this.hideToday},{type:n.Selected,hide:this.hideSelectedDay},{type:n.Working,hide:this.hideWorkingDay},{type:n.NonWorking,hide:this.hideNonWorkingDay}]}get _roleDescription(){return L.i18nBundle.getText(de)}};y([m({type:Boolean})],p.prototype,"hideToday",void 0);y([m({type:Boolean})],p.prototype,"hideSelectedDay",void 0);y([m({type:Boolean})],p.prototype,"hideNonWorkingDay",void 0);y([m({type:Boolean})],p.prototype,"hideWorkingDay",void 0);y([J({type:HTMLElement,invalidateOnChildChange:!0,individualSlots:!0,default:!0})],p.prototype,"items",void 0);y([K("@ui5/webcomponents")],p,"i18nBundle",void 0);p=L=y([z({tag:"ui5-calendar-legend",renderer:P,styles:ce,template:pe}),k("calendar-legend-selection-change",{bubbles:!0}),k("calendar-legend-focus-out",{bubbles:!0})],p);p.define();const X=x("ui5-calendar-legend",[],["hideNonWorkingDay","hideSelectedDay","hideToday","hideWorkingDay"],[],[]);X.displayName="CalendarLegend";const T=x("ui5-calendar-legend-item",["text","type"],[],[],[]);T.displayName="CalendarLegendItem";const s=x("ui5-special-date",["type","value"],[],[],[]);s.displayName="SpecialCalendarDate";const ue={title:"Inputs / Calendar",component:V,argTypes:{children:{control:{disable:!0}},specialDates:{control:{disable:!0}}},args:{primaryCalendarType:H.Gregorian,selectionMode:q.Single},tags:["package:@ui5/webcomponents"]},b={},F=new Date,I=new Date(F.getFullYear(),F.getMonth(),1),c=`${I.getFullYear()}-${(I.getMonth()+1).toString().padStart(2,"0")}-`,ge=`${c}${I.getDate()}`,f={args:{specialDates:d.jsx(s,{type:n.Type01,value:ge})}},C={name:"CalendarLegend",args:{calendarLegend:d.jsxs(X,{children:[d.jsx(T,{text:"Vacation",type:n.Type05}),d.jsx(T,{text:"School Vacation",type:n.Type07}),d.jsx(T,{text:"Wedding",type:n.Type13})]}),specialDates:d.jsxs(d.Fragment,{children:[d.jsx(s,{type:n.Type05,value:`${c}01`}),d.jsx(s,{type:n.Type05,value:`${c}02`}),d.jsx(s,{type:n.Type05,value:`${c}03`}),d.jsx(s,{type:n.Type07,value:`${c}11`}),d.jsx(s,{type:n.Type07,value:`${c}12`}),d.jsx(s,{type:n.Type07,value:`${c}13`}),d.jsx(s,{type:n.Type13,value:`${c}26`})]})}};var N,B,w;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...(w=(B=b.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var E,M,W;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    specialDates: <SpecialCalendarDate type={CalendarLegendItemType.Type01} value={firstDateOfMonthString} />
  }
}`,...(W=(M=f.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var j,$,O;C.parameters={...C.parameters,docs:{...(j=C.parameters)==null?void 0:j.docs,source:{originalSource:'{\n  name: \'CalendarLegend\',\n  args: {\n    calendarLegend: <CalendarLegend>\n        <CalendarLegendItem text="Vacation" type={CalendarLegendItemType.Type05} />\n        <CalendarLegendItem text="School Vacation" type={CalendarLegendItemType.Type07} />\n        <CalendarLegendItem text="Wedding" type={CalendarLegendItemType.Type13} />\n      </CalendarLegend>,\n    specialDates: <>\n        <SpecialCalendarDate type={CalendarLegendItemType.Type05} value={`${yearMonthString}01`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type05} value={`${yearMonthString}02`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type05} value={`${yearMonthString}03`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type07} value={`${yearMonthString}11`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type07} value={`${yearMonthString}12`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type07} value={`${yearMonthString}13`} />\n        <SpecialCalendarDate type={CalendarLegendItemType.Type13} value={`${yearMonthString}26`} />\n      </>\n  }\n}',...(O=($=C.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};const me=["Default","SpecialDate","CalendarLegendStory"],Fe=Object.freeze(Object.defineProperty({__proto__:null,CalendarLegendStory:C,Default:b,SpecialDate:f,__namedExportsOrder:me,default:ue},Symbol.toStringTag,{value:"Module"}));export{Fe as C,b as D,s as S,X as a,C as b,T as c,f as d};
