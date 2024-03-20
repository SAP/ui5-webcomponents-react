function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{j as g}from"./jsx-runtime-DtaoT6pD.js";import{c as F}from"./calendar-8DMtz8kD.js";import{r as T,k as W}from"./Boot-vTaFuwdG.js";import{r as D}from"./Icons-Vbmmw7bO.js";import{_ as V}from"./iframe-KtFHT45j.js";import{U as H}from"./UI5Element-9EXj3atz.js";import{a as s,l as a,b as y,s as $,p as c,c as P,f as R,w as L}from"./withWebComponent-LTFbYRvs.js";import{e as M}from"./event-lM5HanI-.js";import{c as U,I as B}from"./Icon-kyep1SqZ.js";import{a as G}from"./Link-9XR0tYIs.js";import{o as I}from"./class-map-gjOVarQw.js";import{s as E}from"./parameters-bundle.css--8JKw2Pt.js";import{s as J}from"./slot-HSrR9XJ-.js";import{b as X}from"./i18nBundle-j8vDD4VY.js";import{k,l as Y}from"./Keys-ZEuNsqmZ.js";import{I as Q,N as x}from"./ItemNavigation-F0c19DRy.js";import{g as K}from"./MarkedEvents-aYv14vsS.js";import{at as N}from"./i18n-defaults-MpaKYGWX.js";var q;(function(i){i.Vertical="Vertical",i.Horizontal="Horizontal"})(q||(q={}));const p=q;function Z(i,e,t){return s`<div class="ui5-timeline-root" @focusin=${this._onfocusin} @keydown=${this._onkeydown}><div class="ui5-timeline-scroll-container"><ul class="ui5-timeline-list" aria-live="polite" aria-label="${a(this.ariaLabel)}">${U(this.items,(n,l)=>n._id||l,(n,l)=>ee.call(this,i,e,t,n,l))}</ul></div></div>`}function ee(i,e,t,n,l){return s`<li class="ui5-timeline-list-item"><slot name="${a(n._individualSlot)}"></slot></li>`}function te(i,e,t){return s`<div class="ui5-tli-root"><div class="${I(this.classes.indicator)}"><div class="ui5-tli-icon-outer">${this.icon?ie.call(this,i,e,t):oe.call(this,i,e,t)}</div></div><div class="ui5-tli-bubble" tabindex="${a(this.forcedTabIndex)}" data-sap-focus-ref><div class="ui5-tli-title">${this.name?ne.call(this,i,e,t):void 0}<span>${a(this.titleText)}</span></div><div class="ui5-tli-subtitle">${a(this.subtitleText)}</div>${this.innerHTML?re.call(this,i,e,t):void 0}<span class="${I(this.classes.bubbleArrowPosition)}"></span></div></div>`}function ie(i,e,t){return t?s`<${y("ui5-icon",e,t)} class="ui5-tli-icon" name="${a(this.icon)}"></${y("ui5-icon",e,t)}>`:s`<ui5-icon class="ui5-tli-icon" name="${a(this.icon)}"></ui5-icon>`}function oe(i,e,t){return s`<div class="ui5-tli-dummy-icon-container"></div>`}function ne(i,e,t){return s`${this.nameClickable?le.call(this,i,e,t):ae.call(this,i,e,t)}`}function le(i,e,t){return t?s`<${y("ui5-link",e,t)} @ui5-click="${a(this.onNamePress)}" class="ui5-tli-title-name-clickable">${a(this.name)}&nbsp;</${y("ui5-link",e,t)}>`:s`<ui5-link @ui5-click="${a(this.onNamePress)}" class="ui5-tli-title-name-clickable">${a(this.name)}&nbsp;</ui5-link>`}function ae(i,e,t){return s`<span class="ui5-tli-title-name">${a(this.name)}&nbsp;</span>`}function re(i,e,t){return s`<div class="ui5-tli-desc"><slot></slot></div>`}T("@ui5/webcomponents-theming","sap_horizon",async()=>$);T("@ui5/webcomponents-fiori","sap_horizon",async()=>E);const se={packageName:"@ui5/webcomponents-fiori",fileName:"themes/TimelineItem.css.ts",content:`:host(:not([hidden])){display:block}.ui5-tli-root{display:flex}:host([layout="Horizontal"]) .ui5-tli-root{flex-direction:column}:host(:not([layout="Horizontal"])) .ui5-tli-indicator{position:relative;width:2rem}:host([layout="Horizontal"]) .ui5-tli-indicator{position:relative;display:flex;height:2rem;align-items:center}:host(:not([layout="Horizontal"])) .ui5-tli-indicator:before{content:"";display:inline-block;background-color:var(--sapContent_ForegroundBorderColor);width:1px;position:absolute;top:2.125rem;bottom:var(--_ui5-v1-23-1_timeline_tli_indicator_before_bottom);left:50%}:host([layout="Horizontal"]) .ui5-tli-indicator:before{content:"";display:inline-block;background-color:var(--sapContent_ForegroundBorderColor);height:1px;top:50%;position:absolute;left:2.0625rem;right:var(--_ui5-v1-23-1_timeline_tli_indicator_before_right)}:host(:not([layout="Horizontal"])) .ui5-tli-indicator.ui5-tli-indicator-large-line:before{bottom:var(--_ui5-v1-23-1_timeline_tli_indicator_before_without_icon_bottom)}:host([layout="Horizontal"]) .ui5-tli-indicator.ui5-tli-indicator-large-line:before{right:var(--_ui5-v1-23-1_timeline_tli_indicator_before_without_icon_right)}:host(:not([layout="Horizontal"])):not([icon]) .ui5-tli-indicator:before{bottom:var(--_ui5-v1-23-1_timeline_tli_indicator_before_without_icon_bottom);top:1.875rem}:host([layout="Horizontal"]:not([icon])) .ui5-tli-indicator:before{top:50%;right:var(--_ui5-v1-23-1_timeline_tli_indicator_before_without_icon_right);left:1.6875rem}:host(:not([layout="Horizontal"])):not([icon]) .ui5-tli-indicator.ui5-tli-indicator-short-line:before{bottom:var(--_ui5-v1-23-1_timeline_tli_indicator_before_bottom)}:host([layout="Horizontal"]:not([icon])) .ui5-tli-indicator.ui5-tli-indicator-short-line:before{right:var(--_ui5-v1-23-1_timeline_tli_indicator_before_right)}:host(:not([icon])) .ui5-tli-indicator:after{content:"";display:inline-block;box-sizing:border-box;border:1px solid var(--sapContent_NonInteractiveIconColor);background-color:var(--sapContent_NonInteractiveIconColor);border-radius:50%;width:.375rem;height:.375rem;position:absolute;top:.9375rem;left:51.75%;transform:translate(-50%)}:host([layout="Horizontal"]:not([icon])) .ui5-tli-indicator:after{top:.84rem;left:.9625rem}:host(:last-child) .ui5-tli-indicator:before{display:none}.ui5-tli-icon-outer{display:flex;justify-content:center;align-items:center;margin-top:.25rem;height:1.625rem;width:2rem}:host([layout="Horizontal"]) .ui5-tli-icon-outer{margin-top:0rem;height:1.3125rem}.ui5-tli-icon{color:var(--sapContent_NonInteractiveIconColor);height:1.375rem;width:1.375rem}:host([layout="Horizontal"]) .ui5-tli-dummy-icon-container{height:1.375rem;width:1.375rem;display:inline-block;outline:none}.ui5-tli-bubble{background:var(--sapGroup_ContentBackground);border:1px solid var(--_ui5-v1-23-1_TimelineItem_bubble_border_color);box-sizing:border-box;border-radius:var(--_ui5-v1-23-1_TimelineItem_bubble_border_radius);flex:1;position:relative;margin-left:.5rem;padding:var(--_ui5-v1-23-1_TimelineItem_bubble_content_padding)}:host([layout="Horizontal"]) .ui5-tli-bubble{margin-top:.5rem;margin-left:0}.ui5-tli-bubble:focus{outline:none}.ui5-tli-bubble:focus:after{content:"";border:var(--_ui5-v1-23-1_TimelineItem_bubble_border_width) var(--_ui5-v1-23-1_TimelineItem_bubble_border_style) var(--sapContent_FocusColor);border-radius:var(--_ui5-v1-23-1_TimelineItem_bubble_focus_border_radius);position:absolute;top:var(--_ui5-v1-23-1_TimelineItem_bubble_border_top);right:var(--_ui5-v1-23-1_TimelineItem_bubble_border_right);bottom:var(--_ui5-v1-23-1_TimelineItem_bubble_border_bottom);left:var(--_ui5-v1-23-1_TimelineItem_bubble_border_left);pointer-events:none}:host([layout="Horizontal"]) .ui5-tli-bubble:focus:after{top:var(--_ui5-v1-23-1_TimelineItem_horizontal_bubble_focus_top_offset);left:var(--_ui5-v1-23-1_TimelineItem_horizontal_bubble_focus_left_offset)}.ui5-tli-bubble-arrow{width:var(--_ui5-v1-23-1_TimelineItem_arrow_size);padding-bottom:var(--_ui5-v1-23-1_TimelineItem_arrow_size);position:absolute;pointer-events:none;top:0;left:0;overflow:hidden}.ui5-tli-bubble-arrow:before{content:"";background:var(--sapGroup_ContentBackground);border:1px solid var(--_ui5-v1-23-1_TimelineItem_bubble_border_color);position:absolute;top:0;left:0;width:100%;height:100%;transform-origin:0 100%;transform:rotate(45deg)}:host([layout="Horizontal"]) .ui5-tli-bubble-arrow:before{transform:rotate(315deg)}.ui5-tli-bubble-arrow--left{left:calc(-1 * var(--_ui5-v1-23-1_TimelineItem_arrow_size))}.ui5-tli-bubble-arrow--top{top:calc(-1 * var(--_ui5-v1-23-1_TimelineItem_arrow_size))}.ui5-tli-bubble-arrow--left:before{left:50%;width:50%;transform-origin:100% 100%}.ui5-tli-bubble-arrow--top:before{left:42%;width:75%;transform-origin:152% 104%}.ui5-tli-title,.ui5-tli-desc{color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;font-size:var(--sapFontSize)}.ui5-tli-title span{display:inline-block}.ui5-tli-subtitle{color:var(--sapContent_LabelColor);font-family:var(--sapFontFamily);font-weight:400;font-size:var(--sapFontSmallSize);padding-top:var(--_ui5-v1-23-1_TimelineItem_bubble_content_subtitle_padding_top);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui5-tli-desc{padding-top:var(--_ui5-v1-23-1_TimelineItem_bubble_content_description_padding_top)}:dir(rtl) .ui5-tli-bubble-arrow--left{right:calc(-1 * var(--_ui5-v1-23-1_TimelineItem_arrow_size));left:auto;transform:scaleX(-1)}:dir(rtl) .ui5-tli-bubble-arrow--top{right:0;left:auto;transform:scaleX(-1)}:dir(rtl) .ui5-tli-bubble{margin-left:auto;margin-right:.5rem}:host([layout="Horizontal"]:dir(rtl)) .ui5-tli-bubble{margin-right:0}:dir(rtl) .ui5-tli-bubble:focus:after{left:var(--_ui5-v1-23-1_TimelineItem_bubble_rtl_left_offset);right:var(--_ui5-v1-23-1_TimelineItem_bubble_rtl_right_offset)}:host([layout="Horizontal"]:dir(rtl)) .ui5-tli-bubble:focus:after{right:0}:host([layout="Horizontal"]:not([icon]):dir(rtl)) .ui5-tli-indicator:after{right:.625rem}:host([layout="Horizontal"]:not([icon]):dir(rtl)) .ui5-tli-indicator:before{right:1.9375rem;left:var(--_ui5-v1-23-1_timeline_tli_indicator_before_right)}:host([layout="Horizontal"]:dir(rtl)) .ui5-tli-indicator:before{left:var(--_ui5-v1-23-1_timeline_tli_indicator_before_right);right:2.125rem}
`};var u=function(i,e,t,n){var l=arguments.length,o=l<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var d=i.length-1;d>=0;d--)(m=i[d])&&(o=(l<3?m(o):l>3?m(e,t,o):m(e,t))||o);return l>3&&o&&Object.defineProperty(e,t,o),o};const ce="ShortLineWidth",me="LargeLineWidth";let r=class extends H{constructor(){super()}onNamePress(){this.fireEvent("name-click",{})}focusLink(){var e;(e=this.shadowRoot.querySelector("[ui5-link]"))==null||e.focus()}get classes(){return{indicator:{"ui5-tli-indicator":!0,"ui5-tli-indicator-short-line":this.forcedLineWidth===ce,"ui5-tli-indicator-large-line":this.forcedLineWidth===me},bubbleArrowPosition:{"ui5-tli-bubble-arrow":!0,"ui5-tli-bubble-arrow--left":this.layout===p.Vertical,"ui5-tli-bubble-arrow--top":this.layout===p.Horizontal}}}};u([c()],r.prototype,"icon",void 0);u([c()],r.prototype,"name",void 0);u([c({type:Boolean})],r.prototype,"nameClickable",void 0);u([c()],r.prototype,"titleText",void 0);u([c()],r.prototype,"subtitleText",void 0);u([c({defaultValue:"-1",noAttribute:!0})],r.prototype,"forcedTabIndex",void 0);u([c({type:p,defaultValue:p.Vertical})],r.prototype,"layout",void 0);u([c()],r.prototype,"forcedLineWidth",void 0);r=u([P({tag:"ui5-timeline-item",renderer:R,styles:se,template:te,dependencies:[B,G]}),M("name-click")],r);r.define();const A=r,ue=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));T("@ui5/webcomponents-theming","sap_horizon",async()=>$);T("@ui5/webcomponents-fiori","sap_horizon",async()=>E);const de={packageName:"@ui5/webcomponents-fiori",fileName:"themes/Timeline.css.ts",content:`:host(:not([hidden])){display:block}.ui5-timeline-root{padding:var(--_ui5-v1-23-1_tl_padding);box-sizing:border-box;overflow:hidden}.ui5-timeline-list{list-style:none;margin:0;padding:0}.ui5-timeline-list-item{margin-bottom:var(--_ui5-v1-23-1_tl_li_margin_bottom)}.ui5-timeline-list-item:last-child{margin-bottom:0}:host([layout="Horizontal"]) .ui5-timeline-list{white-space:nowrap;list-style:none;margin:0;padding:0}:host([layout="Horizontal"]) .ui5-timeline-list-item{display:inline-block;margin-inline-start:var(--_ui5-v1-23-1_tl_li_margin_bottom)}:host([layout="Horizontal"]) .ui5-timeline-scroll-container{overflow:auto;width:calc(100% + var(--_ui5-v1-23-1_timeline_scroll_container_offset))}
`};var w=function(i,e,t,n){var l=arguments.length,o=l<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var d=i.length-1;d>=0;d--)(m=i[d])&&(o=(l<3?m(o):l>3?m(e,t,o):m(e,t))||o);return l>3&&o&&Object.defineProperty(e,t,o),o},_;const pe="ShortLineWidth",he="LargeLineWidth";let h=_=class extends H{constructor(){super(),this._itemNavigation=new Q(this,{getItemsCallback:()=>this.items})}static async onDefine(){_.i18nBundle=await X("@ui5/webcomponents-fiori")}get ariaLabel(){return this.accessibleName?`${_.i18nBundle.getText(N)} ${this.accessibleName}`:_.i18nBundle.getText(N)}_onfocusin(e){const t=e.target;this._itemNavigation.setCurrentItem(t)}onBeforeRendering(){this._itemNavigation._navigationMode=this.layout===p.Horizontal?x.Horizontal:x.Vertical;for(let e=0;e<this.items.length;e++)this.items[e].layout=this.layout,this.items[e+1]&&this.items[e+1].icon?this.items[e].forcedLineWidth=pe:this.items[e].icon&&this.items[e+1]&&!this.items[e+1].icon&&(this.items[e].forcedLineWidth=he)}_onkeydown(e){const t=e.target;k(e)?(!t.nameClickable||K(e)==="link")&&this._handleTabNextOrPrevious(e,k(e)):Y(e)&&this._handleTabNextOrPrevious(e)}_handleTabNextOrPrevious(e,t){const n=e.target,l=t?this.items.indexOf(n)+1:this.items.indexOf(n)-1,o=this.items[l];if(o){if(o.nameClickable&&!t){e.preventDefault(),o.focusLink();return}e.preventDefault(),o.focus(),this._itemNavigation.setCurrentItem(o)}}};w([c({type:p,defaultValue:p.Vertical})],h.prototype,"layout",void 0);w([c()],h.prototype,"accessibleName",void 0);w([J({type:HTMLElement,individualSlots:!0,default:!0})],h.prototype,"items",void 0);h=_=w([P({tag:"ui5-timeline",languageAware:!0,renderer:R,styles:de,template:Z,dependencies:[A]})],h);h.define();const be=h,fe=Object.freeze(Object.defineProperty({__proto__:null,default:be},Symbol.toStringTag,{value:"Module"})),b=L("ui5-timeline",["accessibleName","layout"],[],[],[],()=>V(()=>Promise.resolve().then(()=>fe),void 0,import.meta.url));b.displayName="Timeline";try{b.displayName="Timeline",b.__docgenInfo={description:`The \`Timeline\` component shows entries (such as objects, events, or posts) in chronological order.
A common use case is to provide information about changes to an object, or events related to an object.
These entries can be generated by the system (for example, value XY changed from A to B), or added manually.
There are two distinct variants of the timeline: basic and social. The basic timeline is read-only,
while the social timeline offers a high level of interaction and collaboration, and is integrated within SAP Jam.

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"Timeline",props:{children:{defaultValue:null,description:"Determines the content of the `Timeline`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},layout:{defaultValue:{value:'"Vertical"'},description:"Defines the items orientation.",name:"layout",required:!1,type:{name:"enum",value:[{value:'"Vertical"'},{value:'"Horizontal"'},{value:'"Vertical"'},{value:'"Horizontal"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{b.displayName="Timeline",b.__docgenInfo={description:`The \`Timeline\` component shows entries (such as objects, events, or posts) in chronological order.
A common use case is to provide information about changes to an object, or events related to an object.
These entries can be generated by the system (for example, value XY changed from A to B), or added manually.
There are two distinct variants of the timeline: basic and social. The basic timeline is read-only,
while the social timeline offers a high level of interaction and collaboration, and is integrated within SAP Jam.

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"Timeline",props:{children:{defaultValue:null,description:"Determines the content of the `Timeline`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},layout:{defaultValue:{value:'"Vertical"'},description:"Defines the items orientation.",name:"layout",required:!1,type:{name:"enum",value:[{value:'"Vertical"'},{value:'"Horizontal"'},{value:'"Vertical"'},{value:'"Horizontal"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const f=L("ui5-timeline-item",["icon","name","subtitleText","titleText"],["nameClickable"],[],["name-click"],()=>V(()=>Promise.resolve().then(()=>ue),void 0,import.meta.url));f.displayName="TimelineItem";try{f.displayName="TimelineItem",f.__docgenInfo={description:`An entry posted on the timeline.

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"TimelineItem",props:{children:{defaultValue:null,description:"Determines the description of the `TimelineItem`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onNameClick:{defaultValue:null,description:`Fired when the item name is pressed either with a
click/tap or by using the Enter or Space key.

**Note:** The event will not be fired if the \`name-clickable\`
attribute is not set.`,name:"onNameClick",required:!1,type:{name:"(event: Ui5CustomEvent<TimelineItemDomRef, never>) => void"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the \`TimelineItem\`.
SAP-icons font provides numerous options.

See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Defines the name of the item, displayed before the `title-text`.",name:"name",required:!1,type:{name:"string"}},nameClickable:{defaultValue:{value:"false"},description:"Defines if the `name` is clickable.",name:"nameClickable",required:!1,type:{name:"boolean"}},subtitleText:{defaultValue:null,description:"Defines the subtitle text of the component.",name:"subtitleText",required:!1,type:{name:"string"}},titleText:{defaultValue:null,description:"Defines the title text of the component.",name:"titleText",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{f.displayName="TimelineItem",f.__docgenInfo={description:`An entry posted on the timeline.

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"TimelineItem",props:{children:{defaultValue:null,description:"Determines the description of the `TimelineItem`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onNameClick:{defaultValue:null,description:`Fired when the item name is pressed either with a
click/tap or by using the Enter or Space key.

**Note:** The event will not be fired if the \`name-clickable\`
attribute is not set.`,name:"onNameClick",required:!1,type:{name:"(event: Ui5CustomEvent<TimelineItemDomRef, never>) => void"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the \`TimelineItem\`.
SAP-icons font provides numerous options.

See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Defines the name of the item, displayed before the `title-text`.",name:"name",required:!1,type:{name:"string"}},nameClickable:{defaultValue:{value:"false"},description:"Defines if the `name` is clickable.",name:"nameClickable",required:!1,type:{name:"boolean"}},subtitleText:{defaultValue:null,description:"Defines the subtitle text of the component.",name:"subtitleText",required:!1,type:{name:"string"}},titleText:{defaultValue:null,description:"Defines the title text of the component.",name:"titleText",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const _e="phone",j="M32 448q-13 0-22.5-9T0 416V32Q0 19 9.5 9.5T32 0h64q14 0 23 9.5t9 22.5v384q0 14-9 23t-23 9H32zM480 64q14 0 23 9.5t9 22.5v384q0 14-9 23t-23 9H32q-13 0-22.5-9T0 480h480V96H160V64h320zM224 320q-13 0-22.5-9t-9.5-23q0-13 9.5-22.5T224 256q14 0 23 9.5t9 22.5q0 14-9 23t-23 9zm96-64q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9t-9.5-23q0-13 9.5-22.5T320 256zm96 0q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9t-9.5-23q0-13 9.5-22.5T416 256zm0 96q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9t-9.5-23q0-13 9.5-22.5T416 352zm-96 0q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9t-9.5-23q0-13 9.5-22.5T320 352zm-96 64q-13 0-22.5-9t-9.5-23q0-13 9.5-22.5T224 352q14 0 23 9.5t9 22.5q0 14-9 23t-23 9zm224-240q0 16-16 16H208q-16 0-16-16v-32q0-6 4.5-11t11.5-5h224q7 0 11.5 5t4.5 11v32z",ve=!1,ge="SAP-icons-v4",ye="@ui5/webcomponents-icons";D(_e,{pathData:j,ltr:ve,collection:ge,packageName:ye});const Te="phone",O="M422 0q38 0 64 26t26 64v332q0 38-26 64t-64 26H90q-38 0-64-26T0 422v-14q0-11 7.5-18t18.5-7 18 7 7 18v14q0 17 11 28t28 11h332q17 0 28-11t11-28V90q0-17-11-28t-28-11H218q-11 0-18.5-7T192 26t7.5-18.5T218 0h204zM58 320q-24 0-41-17T0 262V58q0-24 17-41T58 0h44q24 0 41 17t17 41v204q0 24-17 41t-41 17H58zm-7-58q0 7 7 7h44q7 0 7-7V58q0-7-7-7H58q-7 0-7 7v204zm339-153q11 0 18.5 7t7.5 18-7.5 18.5T390 160H218q-11 0-18.5-7.5T192 134t7.5-18 18.5-7h172zm-60 121q0 26-25 26-26 0-26-26 0-25 26-25 25 0 25 25zm-112 26q-26 0-26-26 0-25 26-25 25 0 25 25 0 26-25 26zm172-51q26 0 26 25 0 26-26 26-25 0-25-26 0-25 25-25zM218 336q-26 0-26-26 0-25 26-25 25 0 25 25 0 26-25 26zm87-51q25 0 25 25 0 26-25 26-26 0-26-26 0-25 26-25zm85 0q26 0 26 25 0 26-26 26-25 0-25-26 0-25 25-25zm-85 80q25 0 25 25 0 26-25 26-26 0-26-26 0-25 26-25zm-87 51q-26 0-26-26 0-25 26-25 25 0 25 25 0 26-25 26zm172-51q26 0 26 25 0 26-26 26-25 0-25-26 0-25 25-25z",we=!1,qe="SAP-icons-v5",Ie="@ui5/webcomponents-icons";D(Te,{pathData:O,ltr:we,collection:qe,packageName:Ie});W();const ke="phone",xe={title:"Data Display / Timeline",component:b,argTypes:{children:{control:{disable:!0}}},args:{},tags:["package:@ui5/webcomponents-fiori"]},v={render:i=>g.jsxs(b,{...i,children:[g.jsx(f,{titleText:"Schedule Call",subtitleText:"2019/01/01",icon:ke,name:"John Smith"}),g.jsx(f,{titleText:"Weekly Sync - CP Design",subtitleText:"2019/01/02",icon:F,children:g.jsx("div",{children:"MR SOF02 2.43"})})]})};var z,S,C;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    return <Timeline {...args}>
        <TimelineItem titleText="Schedule Call" subtitleText="2019/01/01" icon={phoneIcon} name={\`John Smith\`} />
        <TimelineItem titleText="Weekly Sync - CP Design" subtitleText="2019/01/02" icon={calendarIcon}>
          <div>MR SOF02 2.43</div>
        </TimelineItem>
      </Timeline>;
  }
}`,...(C=(S=v.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const Ne=["Default"],Je=Object.freeze(Object.defineProperty({__proto__:null,Default:v,__namedExportsOrder:Ne,default:xe},Symbol.toStringTag,{value:"Module"}));export{Je as C,v as D,f as T};
