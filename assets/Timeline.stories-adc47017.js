import{j as v}from"./jsx-runtime-5926aa06.js";import{c as W}from"./calendar-18deede3.js";import{a as T,U as H,d as F,k as M}from"./UI5Element-e8adceda.js";import{k,e as B,h as S}from"./Icons-5b18f7d2.js";import{_ as V}from"./iframe-97e1d9cd.js";import{e as s,l as a,s as y,a as D,p as c,c as P,d as L,w as E}from"./withWebComponent-c710bf85.js";import{c as U,I as G,e as X}from"./Icon-16710c43.js";import{a as J}from"./Link-a00cf029.js";import{o as q}from"./class-map-eee65cb7.js";import{s as R}from"./parameters-bundle.css-6b4a2ffb.js";import{s as Q}from"./slot-76e48863.js";import{I as Y,N as z}from"./ItemNavigation-01761450.js";import{g as K}from"./MarkedEvents-b83081e9.js";import{T as N}from"./i18n-defaults-217b10b4.js";var I;(function(t){t.Vertical="Vertical",t.Horizontal="Horizontal"})(I||(I={}));const d=I,Z=(t,e,i)=>s`<div class="ui5-timeline-root" @focusin=${t._onfocusin} @keydown=${t._onkeydown}><div class="ui5-timeline-scroll-container"><ul class="ui5-timeline-list" aria-live="polite" aria-label="${a(t.ariaLabel)}">${U(t.items,(n,l)=>n._id||l,(n,l)=>ee(n))}</ul></div></div>`,ee=(t,e,i,n,l)=>s`<li class="ui5-timeline-list-item"><slot name="${a(t._individualSlot)}"></slot></li>`,te=(t,e,i)=>s`<div class="ui5-tli-root" dir="${a(t.effectiveDir)}"><div class="${q(t.classes.indicator)}"><div class="ui5-tli-icon-outer">${t.icon?ie(t,e,i):oe()}</div></div><div class="ui5-tli-bubble" tabindex="${a(t._tabIndex)}" data-sap-focus-ref><div class="ui5-tli-title">${t.name?ne(t,e,i):void 0}<span>${a(t.titleText)}</span></div><div class="ui5-tli-subtitle">${a(t.subtitleText)}</div>${t.textContent?re():void 0}<span class="${q(t.classes.bubbleArrowPosition)}"></span></div></div>`,ie=(t,e,i)=>i?s`<${y("ui5-icon",e,i)} class="ui5-tli-icon" name="${a(t.icon)}"></${y("ui5-icon",e,i)}>`:s`<ui5-icon class="ui5-tli-icon" name="${a(t.icon)}"></ui5-icon>`,oe=(t,e,i)=>s`<div class="ui5-tli-dummy-icon-container"></div>`,ne=(t,e,i)=>s`${t.nameClickable?le(t,e,i):ae(t)}`,le=(t,e,i)=>i?s`<${y("ui5-link",e,i)} @ui5-click="${a(t.onNamePress)}" class="ui5-tli-title-name-clickable">${a(t.name)}&nbsp;</${y("ui5-link",e,i)}>`:s`<ui5-link @ui5-click="${a(t.onNamePress)}" class="ui5-tli-title-name-clickable">${a(t.name)}&nbsp;</ui5-link>`,ae=(t,e,i)=>s`<span class="ui5-tli-title-name">${a(t.name)}&nbsp;</span>`,re=(t,e,i)=>s`<div class="ui5-tli-desc"><slot></slot></div>`;T("@ui5/webcomponents-theming","sap_fiori_3",async()=>D);T("@ui5/webcomponents-fiori","sap_fiori_3",async()=>R);const se={packageName:"@ui5/webcomponents-fiori",fileName:"themes/TimelineItem.css.ts",content:':host(:not([hidden])){display:block}.ui5-tli-root{display:flex}:host([layout=Horizontal]) .ui5-tli-root{flex-direction:column}:host([layout=Vertical]) .ui5-tli-indicator{position:relative;width:2rem}:host([layout=Horizontal]) .ui5-tli-indicator{position:relative;display:flex;height:2rem;align-items:center}:host([layout=Vertical]) .ui5-tli-indicator:before{content:"";display:inline-block;background-color:var(--sapContent_ForegroundBorderColor);width:1px;position:absolute;top:2.125rem;bottom:var(--_ui5_timeline_tli_indicator_before_bottom);left:50%}:host([layout=Horizontal]) .ui5-tli-indicator:before{content:"";display:inline-block;background-color:var(--sapContent_ForegroundBorderColor);height:1px;top:50%;position:absolute;left:2.0625rem;right:var(--_ui5_timeline_tli_indicator_before_right)}:host([layout=Vertical]) .ui5-tli-indicator.ui5-tli-indicator-large-line:before{bottom:var(--_ui5_timeline_tli_indicator_before_without_icon_bottom)}:host([layout=Horizontal]) .ui5-tli-indicator.ui5-tli-indicator-large-line:before{right:var(--_ui5_timeline_tli_indicator_before_without_icon_right)}:host([layout=Vertical]:not([icon])) .ui5-tli-indicator:before{bottom:var(--_ui5_timeline_tli_indicator_before_without_icon_bottom);top:1.875rem}:host([layout=Horizontal]:not([icon])) .ui5-tli-indicator:before{top:50%;right:var(--_ui5_timeline_tli_indicator_before_without_icon_right);left:1.6875rem}:host([layout=Vertical]:not([icon])) .ui5-tli-indicator.ui5-tli-indicator-short-line:before{bottom:var(--_ui5_timeline_tli_indicator_before_bottom)}:host([layout=Horizontal]:not([icon])) .ui5-tli-indicator.ui5-tli-indicator-short-line:before{right:var(--_ui5_timeline_tli_indicator_before_right)}:host(:not([icon])) .ui5-tli-indicator:after{content:"";display:inline-block;box-sizing:border-box;border:1px solid var(--sapContent_NonInteractiveIconColor);background-color:var(--sapContent_NonInteractiveIconColor);border-radius:50%;width:.375rem;height:.375rem;position:absolute;top:.9375rem;left:50%;transform:translateX(-50%)}:host([layout=Horizontal]:not([icon])) .ui5-tli-indicator:after{top:.78125rem;left:.9625rem}:host(:last-child) .ui5-tli-indicator:before{display:none}.ui5-tli-icon-outer{display:flex;justify-content:center;align-items:center;margin-top:.25rem;height:1.625rem;width:2rem}:host([layout=Horizontal]) .ui5-tli-icon-outer{margin-top:0;height:1.3125rem}.ui5-tli-icon{color:var(--sapContent_NonInteractiveIconColor);height:1.375rem;width:1.375rem}:host([layout=Horizontal]) .ui5-tli-dummy-icon-container{height:1.375rem;width:1.375rem;display:inline-block;outline:none}.ui5-tli-bubble{background:var(--sapGroup_ContentBackground);border:1px solid var(--_ui5_TimelineItem_bubble_border_color);box-sizing:border-box;border-radius:var(--_ui5_TimelineItem_bubble_border_radius);flex:1;position:relative;margin-left:.5rem;padding:var(--_ui5_TimelineItem_bubble_content_padding)}:host([layout=Horizontal]) .ui5-tli-bubble{margin-top:.5rem;margin-left:0}.ui5-tli-bubble:focus{outline:none}.ui5-tli-bubble:focus:after{content:"";border:var(--_ui5_TimelineItem_bubble_border_width) var(--_ui5_TimelineItem_bubble_border_style) var(--sapContent_FocusColor);border-radius:var(--_ui5_TimelineItem_bubble_focus_border_radius);position:absolute;top:var(--_ui5_TimelineItem_bubble_border_top);right:var(--_ui5_TimelineItem_bubble_border_right);bottom:var(--_ui5_TimelineItem_bubble_border_bottom);left:var(--_ui5_TimelineItem_bubble_border_left);pointer-events:none}:host([layout=Horizontal]) .ui5-tli-bubble:focus:after{top:var(--_ui5_TimelineItem_horizontal_bubble_focus_top_offset);left:var(--_ui5_TimelineItem_horizontal_bubble_focus_left_offset)}.ui5-tli-bubble-arrow{width:var(--_ui5_TimelineItem_arrow_size);padding-bottom:var(--_ui5_TimelineItem_arrow_size);position:absolute;pointer-events:none;top:0;left:0;overflow:hidden}.ui5-tli-bubble-arrow:before{content:"";background:var(--sapGroup_ContentBackground);border:1px solid var(--_ui5_TimelineItem_bubble_border_color);position:absolute;top:0;left:0;width:100%;height:100%;transform-origin:0 100%;transform:rotate(45deg)}:host([layout=Horizontal]) .ui5-tli-bubble-arrow:before{transform:rotate(315deg)}.ui5-tli-bubble-arrow--left{left:calc(var(--_ui5_TimelineItem_arrow_size)*-1)}.ui5-tli-bubble-arrow--top{top:calc(var(--_ui5_TimelineItem_arrow_size)*-1)}.ui5-tli-bubble-arrow--left:before{left:50%;width:50%;transform-origin:100% 100%}.ui5-tli-bubble-arrow--top:before{left:42%;width:75%;transform-origin:152% 104%}.ui5-tli-desc,.ui5-tli-title{color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;font-size:var(--sapFontSize)}.ui5-tli-title span{display:inline-block}.ui5-tli-subtitle{color:var(--sapContent_LabelColor);font-family:var(--sapFontFamily);font-weight:400;font-size:var(--sapFontSmallSize);padding-top:var(--_ui5_TimelineItem_bubble_content_subtitle_padding_top);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui5-tli-desc{padding-top:var(--_ui5_TimelineItem_bubble_content_description_padding_top)}[dir=rtl] .ui5-tli-bubble-arrow--left{right:calc(var(--_ui5_TimelineItem_arrow_size)*-1);left:auto;transform:scaleX(-1)}[dir=rtl] .ui5-tli-bubble-arrow--top{right:0;left:auto;transform:scaleX(-1)}[dir=rtl] .ui5-tli-bubble{margin-left:auto;margin-right:.5rem}:host([layout=Horizontal]) [dir=rtl] .ui5-tli-bubble{margin-right:0}[dir=rtl] .ui5-tli-bubble:focus:after{left:var(--_ui5_TimelineItem_bubble_rtl_left_offset);right:var(--_ui5_TimelineItem_bubble_rtl_right_offset)}:host([layout=Horizontal]) [dir=rtl] .ui5-tli-bubble:focus:after{right:0}:host([layout=Horizontal]:not([icon])) [dir=rtl] .ui5-tli-indicator:after{right:.625rem}:host([layout=Horizontal]:not([icon])) [dir=rtl] .ui5-tli-indicator:before{right:1.9375rem;left:var(--_ui5_timeline_tli_indicator_before_right)}:host([layout=Horizontal]) [dir=rtl] .ui5-tli-indicator:before{left:var(--_ui5_timeline_tli_indicator_before_right);right:2.125rem}'};var u=globalThis&&globalThis.__decorate||function(t,e,i,n){var l=arguments.length,o=l<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var b=t.length-1;b>=0;b--)(m=t[b])&&(o=(l<3?m(o):l>3?m(e,i,o):m(e,i))||o);return l>3&&o&&Object.defineProperty(e,i,o),o};const ce="ShortLineWidth",me="LargeLineWidth";let r=class extends H{constructor(){super()}onNamePress(){this.fireEvent("name-click",{})}focusLink(){var e;(e=this.shadowRoot.querySelector("[ui5-link]"))==null||e.focus()}get classes(){return{indicator:{"ui5-tli-indicator":!0,"ui5-tli-indicator-short-line":this._lineWidth===ce,"ui5-tli-indicator-large-line":this._lineWidth===me},bubbleArrowPosition:{"ui5-tli-bubble-arrow":!0,"ui5-tli-bubble-arrow--left":this.layout===d.Vertical,"ui5-tli-bubble-arrow--top":this.layout===d.Horizontal}}}};u([c()],r.prototype,"icon",void 0);u([c()],r.prototype,"name",void 0);u([c({type:Boolean})],r.prototype,"nameClickable",void 0);u([c()],r.prototype,"titleText",void 0);u([c()],r.prototype,"subtitleText",void 0);u([c({defaultValue:"-1",noAttribute:!0})],r.prototype,"_tabIndex",void 0);u([c({type:d,defaultValue:d.Vertical})],r.prototype,"layout",void 0);u([c()],r.prototype,"_lineWidth",void 0);r=u([P({tag:"ui5-timeline-item",renderer:L,styles:se,template:te,dependencies:[G,J]}),X("name-click")],r);r.define();const O=r,ue=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"}));T("@ui5/webcomponents-theming","sap_fiori_3",async()=>D);T("@ui5/webcomponents-fiori","sap_fiori_3",async()=>R);const de={packageName:"@ui5/webcomponents-fiori",fileName:"themes/Timeline.css.ts",content:":host(:not([hidden])){display:block}.ui5-timeline-root{padding:var(--_ui5_tl_padding);box-sizing:border-box;overflow:hidden}.ui5-timeline-list{list-style:none;margin:0;padding:0}.ui5-timeline-list-item{margin-bottom:var(--_ui5_tl_li_margin_bottom)}.ui5-timeline-list-item:last-child{margin-bottom:0}:host([layout=Horizontal]) .ui5-timeline-list{white-space:nowrap;list-style:none;margin:0;padding:0}:host([layout=Horizontal]) .ui5-timeline-list-item{display:inline-block;margin-inline-start:var(--_ui5_tl_li_margin_bottom)}:host([layout=Horizontal]) .ui5-timeline-scroll-container{overflow:auto;width:calc(100% + var(--_ui5_timeline_scroll_container_offset))}"};var w=globalThis&&globalThis.__decorate||function(t,e,i,n){var l=arguments.length,o=l<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var b=t.length-1;b>=0;b--)(m=t[b])&&(o=(l<3?m(o):l>3?m(e,i,o):m(e,i))||o);return l>3&&o&&Object.defineProperty(e,i,o),o},h;const be="ShortLineWidth",pe="LargeLineWidth";let p=h=class extends H{constructor(){super(),this._itemNavigation=new Y(this,{getItemsCallback:()=>this.items})}static async onDefine(){h.i18nBundle=await F("@ui5/webcomponents-fiori")}get ariaLabel(){return this.accessibleName?`${h.i18nBundle.getText(N)} ${this.accessibleName}`:h.i18nBundle.getText(N)}_onfocusin(e){const i=e.target;this._itemNavigation.setCurrentItem(i)}onBeforeRendering(){this._itemNavigation._navigationMode=this.layout===d.Horizontal?z.Horizontal:z.Vertical;for(let e=0;e<this.items.length;e++)this.items[e].layout=this.layout,this.items[e+1]&&this.items[e+1].icon?this.items[e]._lineWidth=be:this.items[e].icon&&this.items[e+1]&&!this.items[e+1].icon&&(this.items[e]._lineWidth=pe)}_onkeydown(e){const i=e.target;k(e)?(!i.nameClickable||K(e)==="link")&&this._handleTabNextOrPrevious(e,k(e)):B(e)&&this._handleTabNextOrPrevious(e)}_handleTabNextOrPrevious(e,i){const n=e.target,l=i?this.items.indexOf(n)+1:this.items.indexOf(n)-1,o=this.items[l];if(o){if(o.nameClickable&&!i){e.preventDefault(),o.focusLink();return}e.preventDefault(),o.focus(),this._itemNavigation.setCurrentItem(o)}}};w([c({type:d,defaultValue:d.Vertical})],p.prototype,"layout",void 0);w([c()],p.prototype,"accessibleName",void 0);w([Q({type:HTMLElement,individualSlots:!0,default:!0})],p.prototype,"items",void 0);p=h=w([P({tag:"ui5-timeline",languageAware:!0,renderer:L,styles:de,template:Z,dependencies:[O]})],p);p.define();const _e=p,he=Object.freeze(Object.defineProperty({__proto__:null,default:_e},Symbol.toStringTag,{value:"Module"})),_=E("ui5-timeline",["accessibleName","layout"],[],[],[],()=>V(()=>Promise.resolve().then(()=>he),void 0,import.meta.url));_.displayName="Timeline";_.defaultProps={layout:d.Vertical};try{_.displayName="Timeline",_.__docgenInfo={description:`The \`Timeline\` component shows entries (such as objects, events, or posts) in chronological order. A common use case is to provide information about changes to an object, or events related to an object. These entries can be generated by the system (for example, value XY changed from A to B), or added manually. There are two distinct variants of the timeline: basic and social. The basic timeline is read-only, while the social timeline offers a high level of interaction and collaboration, and is integrated within SAP Jam

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Timeline" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"Timeline",props:{children:{defaultValue:null,description:"Determines the content of the `Timeline`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},layout:{defaultValue:{value:"TimelineLayout.Vertical"},description:`Defines the items orientation.

**Note:** Available options are:

*   \`Vertical\`
*   \`Horizontal\``,name:"layout",required:!1,type:{name:"enum",value:[{value:'"Vertical"'},{value:'"Horizontal"'},{value:'"Vertical"'},{value:'"Horizontal"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const g=E("ui5-timeline-item",["icon","name","subtitleText","titleText"],["nameClickable"],[],["name-click"],()=>V(()=>Promise.resolve().then(()=>ue),void 0,import.meta.url));g.displayName="TimelineItem";try{g.displayName="TimelineItem",g.__docgenInfo={description:`An entry posted on the timeline

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Timeline" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"TimelineItem",props:{children:{defaultValue:null,description:"Determines the description of the `TimelineItem`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onNameClick:{defaultValue:null,description:"Fired when the item name is pressed either with a click/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `name-clickable` attribute is not set.",name:"onNameClick",required:!1,type:{name:"(event: Ui5CustomEvent<TimelineItemDomRef, never>) => void"}},icon:{defaultValue:null,description:'Defines the icon to be displayed as graphical element within the `TimelineItem`. SAP-icons font provides numerous options.\n\nSee all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.',name:"icon",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Defines the name of the item, displayed before the `title-text`.",name:"name",required:!1,type:{name:"string"}},nameClickable:{defaultValue:null,description:"Defines if the `name` is clickable.",name:"nameClickable",required:!1,type:{name:"boolean"}},subtitleText:{defaultValue:null,description:"Defines the subtitle text of the component.",name:"subtitleText",required:!1,type:{name:"string"}},titleText:{defaultValue:null,description:"Defines the title text of the component.",name:"titleText",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const fe="phone",j="M32 448q-13 0-22.5-9T0 416V32Q0 19 9.5 9.5T32 0h64q14 0 23 9.5t9 22.5v384q0 14-9 23t-23 9H32zM480 64q14 0 23 9.5t9 22.5v384q0 14-9 23t-23 9H32q-13 0-22.5-9T0 480h480V96H160V64h320zM224 320q-13 0-22.5-9t-9.5-23q0-13 9.5-22.5T224 256q14 0 23 9.5t9 22.5q0 14-9 23t-23 9zm96-64q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9t-9.5-23q0-13 9.5-22.5T320 256zm96 0q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9t-9.5-23q0-13 9.5-22.5T416 256zm0 96q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9t-9.5-23q0-13 9.5-22.5T416 352zm-96 0q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9t-9.5-23q0-13 9.5-22.5T320 352zm-96 64q-13 0-22.5-9t-9.5-23q0-13 9.5-22.5T224 352q14 0 23 9.5t9 22.5q0 14-9 23t-23 9zm224-240q0 16-16 16H208q-16 0-16-16v-32q0-6 4.5-11t11.5-5h224q7 0 11.5 5t4.5 11v32z",ge=!1,ve="SAP-icons-v4",ye="@ui5/webcomponents-icons";S(fe,{pathData:j,ltr:ge,collection:ve,packageName:ye});const Te="phone",A="M435 0q33 0 55 22t22 55v358q0 33-22 55t-55 22H77q-32 0-54.5-22T0 435v-25q0-26 26-26 25 0 25 26v25q0 12 7.5 19t18.5 7h358q26 0 26-26V77q0-26-26-26H231q-26 0-26-25 0-26 26-26h204zM51 333q-21 0-36-15T0 282V51q0-21 15-36T51 0h52q21 0 36 15t15 36v231q0 21-15 36t-36 15H51zm0-51h52V51H51v231zm180-77q11 0 18 7t7 18-7 18.5-18 7.5-18.5-7.5T205 230t7.5-18 18.5-7zm0 77q11 0 18 7t7 18-7 18.5-18 7.5-18.5-7.5T205 307t7.5-18 18.5-7zm76 0q11 0 18.5 7t7.5 18-7.5 18.5T307 333t-18-7.5-7-18.5 7-18 18-7zm0-77q11 0 18.5 7t7.5 18-7.5 18.5T307 256t-18-7.5-7-18.5 7-18 18-7zm77 0q11 0 18.5 7t7.5 18-7.5 18.5T384 256t-18-7.5-7-18.5 7-18 18-7zm0 77q11 0 18.5 7t7.5 18-7.5 18.5T384 333t-18-7.5-7-18.5 7-18 18-7zm-153 76q11 0 18 7.5t7 18.5-7 18.5-18 7.5-18.5-7.5T205 384t7.5-18.5T231 358zm76 0q11 0 18.5 7.5T333 384t-7.5 18.5T307 410t-18-7.5-7-18.5 7-18.5 18-7.5zm77 0q11 0 18.5 7.5T410 384t-7.5 18.5T384 410t-18-7.5-7-18.5 7-18.5 18-7.5zm0-256q12 0 19 7.5t7 18.5-7 18.5-19 7.5H231q-12 0-19-7.5t-7-18.5 7-18.5 19-7.5h153z",we=!1,Ie="SAP-icons-v5",ke="@ui5/webcomponents-icons";S(Te,{pathData:A,ltr:we,collection:Ie,packageName:ke});M();const qe="phone",ze={title:"Data Display / Timeline",component:_,argTypes:{children:{control:{disable:!0}}},args:{}},f={render:t=>v.jsxs(_,{...t,children:[v.jsx(g,{titleText:"Schedule Call",subtitleText:"2019/01/01",icon:qe,name:"John Smith"}),v.jsx(g,{titleText:"Weekly Sync - CP Design",subtitleText:"2019/01/02",icon:W,children:v.jsx("div",{children:"MR SOF02 2.43"})})]})};var x,C,$;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    return <Timeline {...args}>
        <TimelineItem titleText="Schedule Call" subtitleText="2019/01/01" icon={phoneIcon} name={\`John Smith\`} />
        <TimelineItem titleText="Weekly Sync - CP Design" subtitleText="2019/01/02" icon={calendarIcon}>
          <div>MR SOF02 2.43</div>
        </TimelineItem>
      </Timeline>;
  }
}`,...($=(C=f.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};const Ne=["Default"],Me=Object.freeze(Object.defineProperty({__proto__:null,Default:f,__namedExportsOrder:Ne,default:ze},Symbol.toStringTag,{value:"Module"}));export{Me as C,f as D,g as T};
//# sourceMappingURL=Timeline.stories-adc47017.js.map
