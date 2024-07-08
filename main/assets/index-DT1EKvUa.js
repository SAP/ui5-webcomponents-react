import{_ as T}from"./iframe-CWSB2GBZ.js";import{f as L,C as G}from"./UI5Element-B4CRQCUa.js";import{b as c,f as x,s as $,a as l,m as C,l as D,w as M}from"./withWebComponent-BxrD_3pN.js";import{d as F}from"./slot-_4yKMUwC.js";import{a as p}from"./Integer-DgRYWdxf.js";import{l as f}from"./if-defined-Cl7uVo8B.js";import{c as V}from"./Icon-p6ifn8PN.js";import{s as q}from"./parameters-bundle.css-DQGkr9pp.js";import{a as E}from"./Title-DrCQyHXg.js";function k(r,e,o){return c`<div class="ui5-form-root" role="form" aria-labelledby="${f(this.ariaLabelledByID)}">${this.hasHeader?R.call(this,r,e,o):void 0}<div class="ui5-form-layout" part="layout">${this.hasGroupItems?U.call(this,r,e,o):P.call(this,r,e,o)}</div></div>`}function R(r,e,o){return c`<div class="ui5-form-header" part="header">${this.hasCustomHeader?j.call(this,r,e,o):z.call(this,r,e,o)}</div>`}function j(r,e,o){return c`<slot name="header"></slot>`}function z(r,e,o){return o?c`<${x("ui5-title",e,o)} id="${f(this._id)}-header-text" level="H4">${f(this.headerText)}</${x("ui5-title",e,o)}>`:c`<ui5-title id="${f(this._id)}-header-text" level="H4">${f(this.headerText)}</ui5-title>`}function U(r,e,o){return c`${V(this.groupItemsInfo,(t,n)=>t._id||n,(t,n)=>W.call(this,r,e,o,t,n))}`}function W(r,e,o,t,n){return c`<div class="ui5-form-column ${f(t.classes)}" part="column"><div class="ui5-form-group">${t.groupItem.headerText?O.call(this,r,e,o,t,n):void 0}<div class="ui5-form-group-layout"><slot name="${f(t.groupItem._individualSlot)}"></slot></div></div></div>`}function O(r,e,o,t,n){return o?c`<div class="ui5-form-group-heading"><${x("ui5-title",e,o)} level="H6">${f(t.groupItem.headerText)}</${x("ui5-title",e,o)}></div>`:c`<div class="ui5-form-group-heading"><ui5-title level="H6">${f(t.groupItem.headerText)}</ui5-title></div>`}function P(r,e,o){return c`${V(this.itemsInfo,(t,n)=>t._id||n,(t,n)=>H.call(this,r,e,o,t,n))}`}function H(r,e,o,t,n){return c`<div class="ui5-form-item ${f(t.classes)}"><slot name="${f(t.item._individualSlot)}"></slot></div>`}L("@ui5/webcomponents-theming","sap_horizon",async()=>$);L("@ui5/webcomponents","sap_horizon",async()=>q);const A={packageName:"@ui5/webcomponents",fileName:"themes/Form.css.ts",content:`@container (max-width: 600px){.ui5-form-layout{grid-template-columns:1fr}::slotted(*){justify-self:start}::slotted(:nth-child(2n)){margin-bottom:.5rem}}@container (width > 600px) and (width <= 1024px){.ui5-form-layout{grid-template-columns:1fr}:host([columns-m="1"]) .ui5-form-layout{grid-template-columns:1fr}:host([columns-m="2"]) .ui5-form-layout{grid-template-columns:repeat(2,1fr)}.ui5-form-column-spanM-2{grid-column:span 2}.ui5-form-column-spanM-2 .ui5-form-group-layout{grid-template-columns:repeat(2,1fr)}}@container (width > 1024px) and (width <= 1440px){.ui5-form-layout{grid-template-columns:repeat(2,1fr)}.ui5-form-column{grid-template-columns:1fr}:host([columns-l="1"]) .ui5-form-layout{grid-template-columns:1fr}:host([columns-l="2"]) .ui5-form-layout{grid-template-columns:repeat(2,1fr)}:host([columns-l="3"]) .ui5-form-layout{grid-template-columns:repeat(3,1fr)}.ui5-form-column-spanL-2{grid-column:span 2}.ui5-form-column-spanL-2 .ui5-form-group-layout{grid-template-columns:repeat(2,1fr)}.ui5-form-column-spanL-3{grid-column:span 3}.ui5-form-column-spanL-3 .ui5-form-group-layout{grid-template-columns:repeat(3,1fr)}}@container (min-width: 1441px){.ui5-form-layout{grid-template-columns:repeat(2,1fr)}:host([columns-xl="1"]) .ui5-form-layout{grid-template-columns:1fr}:host([columns-xl="2"]) .ui5-form-layout{grid-template-columns:repeat(2,1fr)}:host([columns-xl="3"]) .ui5-form-layout{grid-template-columns:repeat(3,1fr)}:host([columns-xl="4"]) .ui5-form-layout{grid-template-columns:repeat(4,1fr)}:host([columns-xl="5"]) .ui5-form-layout{grid-template-columns:repeat(5,1fr)}:host([columns-xl="6"]) .ui5-form-layout{grid-template-columns:repeat(6,1fr)}.ui5-form-column-spanXL-2{grid-column:span 2}.ui5-form-column-spanXL-2 .ui5-form-group-layout{grid-template-columns:repeat(2,1fr)}.ui5-form-column-spanXL-3{grid-column:span 3}.ui5-form-column-spanXL-3 .ui5-form-group-layout{grid-template-columns:repeat(3,1fr)}.ui5-form-column-spanXL-4{grid-column:span 4}.ui5-form-column-spanXL-4 .ui5-form-group-layout{grid-template-columns:repeat(4,1fr)}.ui5-form-column-spanXL-5{grid-column:span 5}.ui5-form-column-spanXL-5 .ui5-form-group-layout{grid-template-columns:repeat(5,1fr)}.ui5-form-column-spanXL-6{grid-column:span 6}.ui5-form-column-spanXL-6 .ui5-form-group-layout{grid-template-columns:repeat(6,1fr)}}.ui5-form-item-span-2{grid-column:span 2}.ui5-form-item-span-3{grid-column:span 3}.ui5-form-item-span-4{grid-column:span 4}.ui5-form-item-span-5{grid-column:span 5}.ui5-form-item-span-6{grid-column:span 6}@container (max-width: 600px){:host([label-span-s="1"]) .ui5-form-item,:host([label-span-s="1"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span1)}:host([label-span-s="2"]) .ui5-form-item,:host([label-span-s="2"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span2)}:host([label-span-s="3"]) .ui5-form-item,:host([label-span-s="3"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span3)}:host([label-span-s="4"]) .ui5-form-item,:host([label-span-s="4"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span4)}:host([label-span-s="5"]) .ui5-form-item,:host([label-span-s="5"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span5)}:host([label-span-s="6"]) .ui5-form-item,:host([label-span-s="6"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span6)}:host([label-span-s="7"]) .ui5-form-item,:host([label-span-s="7"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span7)}:host([label-span-s="8"]) .ui5-form-item,:host([label-span-s="8"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span8)}:host([label-span-s="9"]) .ui5-form-item,:host([label-span-s="9"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span9)}:host([label-span-s="10"]) .ui5-form-item,:host([label-span-s="10"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span10)}:host([label-span-s="11"]) .ui5-form-item,:host([label-span-s="11"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span11)}:host(:not([label-span-s])) .ui5-form-item,:host(:not([label-span-s])) .ui5-form-group,:host([label-span-s="12"]) .ui5-form-item,:host([label-span-s="12"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span12);--ui5-v2-0-0-rc-6-form-item-label-justify: var(--ui5-v2-0-0-rc-6-form-item-label-justify-span12);--ui5-v2-0-0-rc-6-form-item-label-padding: var(--ui5-v2-0-0-rc-6-form-item-label-padding-span12)}}@container (width > 600px) and (width <= 1024px){:host([label-span-m="1"]) .ui5-form-item,:host([label-span-m="1"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span1)}:host([label-span-m="2"]) .ui5-form-item,:host([label-span-m="2"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span2)}:host([label-span-m="3"]) .ui5-form-item,:host([label-span-m="3"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span3)}:host([label-span-m="4"]) .ui5-form-item,:host([label-span-m="4"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span4)}:host([label-span-m="5"]) .ui5-form-item,:host([label-span-m="5"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span5)}:host([label-span-m="6"]) .ui5-form-item,:host([label-span-m="6"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span6)}:host([label-span-m="7"]) .ui5-form-item,:host([label-span-m="7"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span7)}:host([label-span-m="8"]) .ui5-form-item,:host([label-span-m="8"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span8)}:host([label-span-m="9"]) .ui5-form-item,:host([label-span-m="9"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span9)}:host([label-span-m="10"]) .ui5-form-item,:host([label-span-m="10"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span10)}:host([label-span-m="11"]) .ui5-form-item,:host([label-span-m="11"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span11)}:host([label-span-m="12"]) .ui5-form-item,:host([label-span-m="12"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span12);--ui5-v2-0-0-rc-6-form-item-label-justify: var(--ui5-v2-0-0-rc-6-form-item-label-justify-span12);--ui5-v2-0-0-rc-6-form-item-label-padding: var(--ui5-v2-0-0-rc-6-form-item-label-padding-span12)}}@container (width > 1024px) and (width <= 1440px){:host([label-span-l="1"]) .ui5-form-item,:host([label-span-l="1"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span1)}:host([label-span-l="2"]) .ui5-form-item,:host([label-span-l="2"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span2)}:host([label-span-l="3"]) .ui5-form-item,:host([label-span-l="3"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span3)}:host([label-span-l="4"]) .ui5-form-item,:host([label-span-l="4"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span4)}:host([label-span-l="5"]) .ui5-form-item,:host([label-span-l="5"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span5)}:host([label-span-l="6"]) .ui5-form-item,:host([label-span-l="6"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span6)}:host([label-span-l="7"]) .ui5-form-item,:host([label-span-l="7"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span7)}:host([label-span-l="8"]) .ui5-form-item,:host([label-span-l="8"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span8)}:host([label-span-l="9"]) .ui5-form-item,:host([label-span-l="9"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span9)}:host([label-span-l="10"]) .ui5-form-item,:host([label-span-l="10"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span10)}:host([label-span-l="11"]) .ui5-form-item,:host([label-span-l="11"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span11)}:host([label-span-l="12"]) .ui5-form-item,:host([label-span-l="12"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span12);--ui5-v2-0-0-rc-6-form-item-label-justify: var(--ui5-v2-0-0-rc-6-form-item-label-justify-span12);--ui5-v2-0-0-rc-6-form-item-label-padding: var(--ui5-v2-0-0-rc-6-form-item-label-padding-span12)}}@container (min-width: 1441px){:host([label-span-xl="1"]) .ui5-form-item,:host([label-span-xl="1"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span1)}:host([label-span-xl="2"]) .ui5-form-item,:host([label-span-xl="2"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span2)}:host([label-span-xl="3"]) .ui5-form-item,:host([label-span-xl="3"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span3)}:host([label-span-xl="4"]) .ui5-form-item,:host([label-span-xl="4"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span4)}:host([label-span-xl="5"]) .ui5-form-item,:host([label-span-xl="5"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span5)}:host([label-span-xl="6"]) .ui5-form-item,:host([label-span-xl="6"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span6)}:host([label-span-xl="7"]) .ui5-form-item,:host([label-span-xl="7"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span7)}:host([label-span-xl="8"]) .ui5-form-item,:host([label-span-xl="8"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span8)}:host([label-span-xl="9"]) .ui5-form-item,:host([label-span-xl="9"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span9)}:host([label-span-xl="10"]) .ui5-form-item,:host([label-span-xl="10"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span10)}:host([label-span-xl="11"]) .ui5-form-item,:host([label-span-xl="11"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span11)}:host([label-span-xl="12"]) .ui5-form-item,:host([label-span-xl="12"]) .ui5-form-group{--ui5-v2-0-0-rc-6-form-item-layout: var(--ui5-v2-0-0-rc-6-form-item-layout-span12);--ui5-v2-0-0-rc-6-form-item-label-justify: var(--ui5-v2-0-0-rc-6-form-item-label-justify-span12);--ui5-v2-0-0-rc-6-form-item-label-padding: var(--ui5-v2-0-0-rc-6-form-item-label-padding-span12)}}:host{display:block}.ui5-form-root{display:flex;flex-direction:column;background-color:var(--sapGroup_ContentBackground);border-radius:.75rem;container-type:inline-size}.ui5-form-header{display:flex;height:2.75rem;align-items:center;border-bottom:1px solid var(--sapGroup_TitleBorderColor);padding:0 1rem}.ui5-form-layout{display:grid;column-gap:1rem;row-gap:.125rem;padding:1rem .75rem}.ui5-form-group-layout{display:grid;column-gap:1rem}.ui5-form-group-heading{height:var(--_ui5-v2-0-0-rc-6-form-group-heading-height);line-height:var(--_ui5-v2-0-0-rc-6-form-group-heading-height);padding-inline-start:.25rem}.ui5-form-column{padding-top:.5rem;padding-bottom:1rem;box-sizing:border-box}::slotted([ui5-form-group]){display:contents}
`};var N;(function(r){r.Normal="Normal",r.Large="Large"})(N||(N={}));const g=N;var u=function(r,e,o,t){var n=arguments.length,a=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,o):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(r,e,o,t);else for(var s=r.length-1;s>=0;s--)(i=r[s])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};const I=new Map,v={S:1,M:2,L:3,XL:6};let m=class extends G{onBeforeRendering(){this.setColumnLayout(),this.setLabelSpan(),this.setGroupsColSpan()}onAfterRendering(){this.createAdditionalCSSStyleSheet()}setColumnLayout(){this.layout.split(" ").forEach(o=>{o.startsWith("S")?this.columnsS=parseInt(o.slice(1)):o.startsWith("M")?this.columnsM=parseInt(o.slice(1)):o.startsWith("L")?this.columnsL=parseInt(o.slice(1)):o.startsWith("XL")&&(this.columnsXl=parseInt(o.slice(2)))})}setLabelSpan(){this.labelSpan.split(" ").forEach(e=>{e.startsWith("S")?this.labelSpanS=parseInt(e.slice(1)):e.startsWith("M")?this.labelSpanM=parseInt(e.slice(1)):e.startsWith("L")?this.labelSpanL=parseInt(e.slice(1)):e.startsWith("XL")&&(this.labelSpanXl=parseInt(e.slice(2)))}),this.items.forEach(e=>{e.labelSpan=this.labelSpan,e.itemSpacing=this.itemSpacing})}setGroupsColSpan(){if(!this.hasGroupItems)return;const e=this.items.length;[...this.items].sort((t,n)=>(n==null?void 0:n.items.length)-(t==null?void 0:t.items.length)).forEach((t,n)=>{t.colsXl=this.getGroupsColSpan(this.columnsXl,e,n,t),t.colsL=this.getGroupsColSpan(this.columnsL,e,n,t),t.colsM=this.getGroupsColSpan(this.columnsM,e,n,t),t.colsS=this.getGroupsColSpan(this.columnsS,e,n,t)})}getGroupsColSpan(e,o,t,n){if(n.columnSpan)return n.columnSpan;if(e===1||e<=o)return 1;if(e%o===0)return e/o;const a=1,i=e-o;return i<=o?t<i?a+1:a:t===0?a+(i-o)+1:a+1}get hasGroupItems(){return this.items.some(e=>e.isGroup)}get hasHeader(){return this.hasCustomHeader||!!this.headerText}get hasCustomHeader(){return!!this.header.length}get ariaLabelledByID(){return this.hasCustomHeader?void 0:`${this._id}-header-text`}get groupItemsInfo(){return this.items.map(e=>({groupItem:e,classes:`ui5-form-column-spanL-${e.colsL} ui5-form-column-spanXL-${e.colsXl} ui5-form-column-spanM-${e.colsM} ui5-form-column-spanS-${e.colsS}`,items:this.getItemsInfo(Array.from(e.children))}))}get itemsInfo(){return this.getItemsInfo()}getItemsInfo(e){return(e||this.items).map(o=>({item:o,classes:o.columnSpan?`ui5-form-item-span-${o.columnSpan}`:""}))}createAdditionalCSSStyleSheet(){[{breakpoint:"S",columns:this.columnsS},{breakpoint:"M",columns:this.columnsM},{breakpoint:"L",columns:this.columnsL},{breakpoint:"XL",columns:this.columnsXl}].forEach(e=>{const o=this.getAdditionalCSS(e.breakpoint,e.columns);o&&(this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,this.getCSSStyleSheet(o)])})}getAdditionalCSS(e,o){if(v[e]>=o)return;const t=`${e}-${o}`;if(!I.has(t)){let n,a,i="",s=o;for(e==="S"?(a=v.S,n="@container (max-width: 599px) {"):e==="M"?(a=v.M,n="@container (width > 599px) and (width < 1024px) {"):e==="L"?(a=v.L,n="@container (width > 1023px) and (width < 1439px) {"):e==="XL"&&(n="@container (min-width: 1440px) {",a=v.XL);s>a;)i+=`
				:host([columns-${e.toLocaleLowerCase()}="${s}"]) .ui5-form-layout {
					grid-template-columns: repeat(${s}, 1fr);
				}
				
				.ui5-form-column-span${e}-${s},
				.ui5-form-item-span-${s} {
					grid-column: span ${s};
				}

				.ui5-form-column-span${e}-${s} .ui5-form-group-layout {
					grid-template-columns: repeat(${s}, 1fr);
				}
				`,s--;const X=`${n}${i}}`;I.set(t,X)}return I.get(t)}getCSSStyleSheet(e){const o=new CSSStyleSheet;return o.replaceSync(e),o}};u([l({type:String,defaultValue:"S1 M1 L2 XL2"})],m.prototype,"layout",void 0);u([l({type:String,defaultValue:"S12 M4 L4 XL4"})],m.prototype,"labelSpan",void 0);u([l()],m.prototype,"headerText",void 0);u([l({type:g,defaultValue:g.Normal})],m.prototype,"itemSpacing",void 0);u([F({type:HTMLElement})],m.prototype,"header",void 0);u([F({type:HTMLElement,default:!0,individualSlots:!0,invalidateOnChildChange:!0})],m.prototype,"items",void 0);u([l({validator:p,defaultValue:1})],m.prototype,"columnsS",void 0);u([l({validator:p,defaultValue:12})],m.prototype,"labelSpanS",void 0);u([l({validator:p,defaultValue:1})],m.prototype,"columnsM",void 0);u([l({validator:p,defaultValue:4})],m.prototype,"labelSpanM",void 0);u([l({validator:p,defaultValue:2})],m.prototype,"columnsL",void 0);u([l({validator:p,defaultValue:4})],m.prototype,"labelSpanL",void 0);u([l({validator:p,defaultValue:2})],m.prototype,"columnsXl",void 0);u([l({validator:p,defaultValue:4})],m.prototype,"labelSpanXl",void 0);m=u([C({tag:"ui5-form",renderer:D,styles:A,template:k,dependencies:[E]})],m);m.define();const B=m,Y=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"})),S=M("ui5-form",["headerText","itemSpacing","labelSpan","layout"],[],["header"],[],()=>T(()=>Promise.resolve().then(()=>Y),void 0,import.meta.url));S.displayName="Form";try{S.displayName="Form",S.__docgenInfo={description:`The Form is a layout component that arranges labels and form fields (like input fields) pairs
into a specific number of columns.

### Structure

- **Form** (\`Form\`) is the top-level container component, responsible for the content layout and responsiveness.
- **FormGroup** (\`FormGroup\`) enables the grouping of the Form content.
- **FormItem** (\`FormItem\`) is a pair of label and form fields and can be used directly in a Form, or as part of a FormGroup.

The simplest Form (\`Form\`) consists of a header area on top,
displaying a header text (see the \`headingText\` property) and content below - an arbitrary number of FormItems (ui5-form-item),
representing the pairs of label and form fields.

And, there is also "grouping" available to assist the implementation of richer UIs.
This is enabled by the FormGroup (\`FormGroup\`) component.
In this case, the Form is structured into FormGroups and each FormGroup consists of FormItems.

 ### Responsiveness

The Form component reacts and changes its layout on predefined breakpoints.
Depending on its size, the Form content (FormGroups and FormItems) gets divided into one or more columns as follows:
- **S** (< 600px) – 1 column is recommended (default: 1)
- **M** (600px - 1022px) – up to 2 columns are recommended (default: 1)
- **L** (1023px - 1439px) - up to 3 columns are recommended (default: 2)
- **XL** (> 1439px) – up to 6 columns are recommended (default: 2)

To change the layout, use the \`layout\` property - f.e. layout="S1 M2 L3 XL6".

### Groups

To make better use of screen space, there is built-in logic to determine how many columns should a FormGroup occupy.

- **Example #1** (perfect match):
4 columns and 4 groups: each group will use 1 column.

- **Example #2** (balanced distribution):
4 columns and 2 groups: each group will use 2 columns.
6 columns and 2 groups: each group will use 3 columns.

- **Example #3** (unbalanced distribution):
3 columns and 2 groups: the larger one will use 2 columns, the smaller 1 column.
5 columns and 3 groups: two of the groups will use 2 columns each, the smallest 1 column.

**Note:** The size of a group element is determined by the number of FormItems assigned to it.
In the case of equality, the first in the DOM will use more columns, and the last - fewer columns.

- **Example #4** (more groups than columns):
3 columns and 4 groups: each FormGroup uses only 1 column, the last FormGroup will wrap on the second row.

### Groups Column Span

To influence the built-in group distribution, described in the previous section,
you can use the FormGroup's \`columnSpan\` property, that defines how many columns the group should expand to.

### Items Column Span

FormItem's columnSpan property defines how many columns the form item should expand to inside a form group or the form.

### Items Label Span

The placement of the labels depends on the size of the used column.
If there is enough space, the labels are next to their associated fields, otherwise  - above the fields.
By default, the labels take 4/12 of the FormItem, leaving 8/12 parts to associated fields.
You can control what space the labels should take via the \`labelSpan\` property.

**For example:** To always place the labels on top set: \`labelSpan="S12 M12 L12 XL12"\` property.

### ES6 Module Import

- import`,displayName:"Form",props:{children:{defaultValue:null,description:`Defines the component content - FormGroups or FormItems.

**Note:** Mixing FormGroups and standalone FormItems (not belonging to a group) is not supported.
Either use FormGroups and make sure all FormItems are part of a FormGroup, or use just FormItems without any FormGroups.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the component header area.

**Note:** When a \`header\` is provided, the \`headerText\` property is ignored.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},headerText:{defaultValue:null,description:"Defines the header text of the component.\n\n**Note:** The property gets overridden by the `header` slot.",name:"headerText",required:!1,type:{name:"string"}},itemSpacing:{defaultValue:{value:'"Normal"'},description:`Defines the vertical spacing between form items.

**Note:** If the Form is meant to be switched between "non-edit" and "edit" modes,
we recommend using "Large" item spacing in "non-edit" mode, and "Normal" - for "edit" mode,
to avoid "jumping" effect, caused by the hight difference between texts in "non-edit" mode and the input fields in "edit" mode.`,name:"itemSpacing",required:!1,type:{name:"enum",value:[{value:'"Normal"'},{value:'"Normal"'},{value:'"Large"'},{value:'"Large"'}]}},labelSpan:{defaultValue:{value:'"S12 M4 L4 XL4"'},description:`Defines the width proportion of the labels and fields of a FormItem by breakpoint.

By default, the labels take 4/12 (or 1/3) of the form item in M,L and XL sizes,
and 12/12 in S size, e.g in S the label is on top of its associated field.

The supported values are between 1 and 12. Greater the number, more space the label will use.

**Note:** If "12" is set, the label will be displayed on top of its assosiated field.`,name:"labelSpan",required:!1,type:{name:"string"}},layout:{defaultValue:{value:'"S1 M1 L2 XL2"'},description:"Defines the number of columns to distribute the form content by breakpoint.\n\nSupported values:\n- `S` - 1 column by default (1 column is recommended)\n- `M` - 1 column by default (up to 2 columns are recommended)\n- `L` - 2 columns by default (up to 3 columns are recommended)\n- `XL` - 2 columns by default (up to 6 columns  are recommended)",name:"layout",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{S.displayName="Form",S.__docgenInfo={description:`The Form is a layout component that arranges labels and form fields (like input fields) pairs
into a specific number of columns.

### Structure

- **Form** (\`Form\`) is the top-level container component, responsible for the content layout and responsiveness.
- **FormGroup** (\`FormGroup\`) enables the grouping of the Form content.
- **FormItem** (\`FormItem\`) is a pair of label and form fields and can be used directly in a Form, or as part of a FormGroup.

The simplest Form (\`Form\`) consists of a header area on top,
displaying a header text (see the \`headingText\` property) and content below - an arbitrary number of FormItems (ui5-form-item),
representing the pairs of label and form fields.

And, there is also "grouping" available to assist the implementation of richer UIs.
This is enabled by the FormGroup (\`FormGroup\`) component.
In this case, the Form is structured into FormGroups and each FormGroup consists of FormItems.

 ### Responsiveness

The Form component reacts and changes its layout on predefined breakpoints.
Depending on its size, the Form content (FormGroups and FormItems) gets divided into one or more columns as follows:
- **S** (< 600px) – 1 column is recommended (default: 1)
- **M** (600px - 1022px) – up to 2 columns are recommended (default: 1)
- **L** (1023px - 1439px) - up to 3 columns are recommended (default: 2)
- **XL** (> 1439px) – up to 6 columns are recommended (default: 2)

To change the layout, use the \`layout\` property - f.e. layout="S1 M2 L3 XL6".

### Groups

To make better use of screen space, there is built-in logic to determine how many columns should a FormGroup occupy.

- **Example #1** (perfect match):
4 columns and 4 groups: each group will use 1 column.

- **Example #2** (balanced distribution):
4 columns and 2 groups: each group will use 2 columns.
6 columns and 2 groups: each group will use 3 columns.

- **Example #3** (unbalanced distribution):
3 columns and 2 groups: the larger one will use 2 columns, the smaller 1 column.
5 columns and 3 groups: two of the groups will use 2 columns each, the smallest 1 column.

**Note:** The size of a group element is determined by the number of FormItems assigned to it.
In the case of equality, the first in the DOM will use more columns, and the last - fewer columns.

- **Example #4** (more groups than columns):
3 columns and 4 groups: each FormGroup uses only 1 column, the last FormGroup will wrap on the second row.

### Groups Column Span

To influence the built-in group distribution, described in the previous section,
you can use the FormGroup's \`columnSpan\` property, that defines how many columns the group should expand to.

### Items Column Span

FormItem's columnSpan property defines how many columns the form item should expand to inside a form group or the form.

### Items Label Span

The placement of the labels depends on the size of the used column.
If there is enough space, the labels are next to their associated fields, otherwise  - above the fields.
By default, the labels take 4/12 of the FormItem, leaving 8/12 parts to associated fields.
You can control what space the labels should take via the \`labelSpan\` property.

**For example:** To always place the labels on top set: \`labelSpan="S12 M12 L12 XL12"\` property.

### ES6 Module Import

- import`,displayName:"Form",props:{children:{defaultValue:null,description:`Defines the component content - FormGroups or FormItems.

**Note:** Mixing FormGroups and standalone FormItems (not belonging to a group) is not supported.
Either use FormGroups and make sure all FormItems are part of a FormGroup, or use just FormItems without any FormGroups.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the component header area.

**Note:** When a \`header\` is provided, the \`headerText\` property is ignored.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},headerText:{defaultValue:null,description:"Defines the header text of the component.\n\n**Note:** The property gets overridden by the `header` slot.",name:"headerText",required:!1,type:{name:"string"}},itemSpacing:{defaultValue:{value:'"Normal"'},description:`Defines the vertical spacing between form items.

**Note:** If the Form is meant to be switched between "non-edit" and "edit" modes,
we recommend using "Large" item spacing in "non-edit" mode, and "Normal" - for "edit" mode,
to avoid "jumping" effect, caused by the hight difference between texts in "non-edit" mode and the input fields in "edit" mode.`,name:"itemSpacing",required:!1,type:{name:"enum",value:[{value:'"Normal"'},{value:'"Normal"'},{value:'"Large"'},{value:'"Large"'}]}},labelSpan:{defaultValue:{value:'"S12 M4 L4 XL4"'},description:`Defines the width proportion of the labels and fields of a FormItem by breakpoint.

By default, the labels take 4/12 (or 1/3) of the form item in M,L and XL sizes,
and 12/12 in S size, e.g in S the label is on top of its associated field.

The supported values are between 1 and 12. Greater the number, more space the label will use.

**Note:** If "12" is set, the label will be displayed on top of its assosiated field.`,name:"labelSpan",required:!1,type:{name:"string"}},layout:{defaultValue:{value:'"S1 M1 L2 XL2"'},description:"Defines the number of columns to distribute the form content by breakpoint.\n\nSupported values:\n- `S` - 1 column by default (1 column is recommended)\n- `M` - 1 column by default (up to 2 columns are recommended)\n- `L` - 2 columns by default (up to 3 columns are recommended)\n- `XL` - 2 columns by default (up to 6 columns  are recommended)",name:"layout",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var h=function(r,e,o,t){var n=arguments.length,a=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,o):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(r,e,o,t);else for(var s=r.length-1;s>=0;s--)(i=r[s])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let d=class extends G{onBeforeRendering(){this.processFormItems()}processFormItems(){this.items.forEach(e=>{e.labelSpan=this.labelSpan,e.itemSpacing=this.itemSpacing})}get isGroup(){return!0}};h([l()],d.prototype,"headerText",void 0);h([l({validator:p,defaultValue:void 0})],d.prototype,"columnSpan",void 0);h([F({type:HTMLElement,default:!0})],d.prototype,"items",void 0);h([l({validator:p,defaultValue:1})],d.prototype,"colsS",void 0);h([l({validator:p,defaultValue:1})],d.prototype,"colsM",void 0);h([l({validator:p,defaultValue:1})],d.prototype,"colsL",void 0);h([l({validator:p,defaultValue:1})],d.prototype,"colsXl",void 0);h([l({type:g,defaultValue:g.Normal})],d.prototype,"itemSpacing",void 0);h([l({type:String,defaultValue:"S12 M4 L4 XL4"})],d.prototype,"labelSpan",void 0);d=h([C("ui5-form-group")],d);d.define();const Q=d,J=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"})),w=M("ui5-form-group",["columnSpan","headerText"],[],[],[],()=>T(()=>Promise.resolve().then(()=>J),void 0,import.meta.url));w.displayName="FormGroup";try{w.displayName="FormGroup",w.__docgenInfo={description:`The FormGroup (ui5-form-group) represents a group inside the Form (ui5-form) component
and it consists of FormItem (ui5-form-item) components.

The layout of the FormGroup is mostly defined and controlled by the overarching Form (ui5-form) component.
Still, one can influence the layout via the FormGroup's \`columnSpan\` property,
that defines how many columns the group should expand to.

### Usage

Тhe FormGroup (ui5-form-group) allows to split a Form into groups,
e.g to group FormItems that logically belong together.

### ES6 Module Import

- import`,displayName:"FormGroup",props:{children:{defaultValue:null,description:"Defines the items of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},columnSpan:{defaultValue:{value:"undefined"},description:`Defines column span of the component,
e.g how many columns the group should span to.`,name:"columnSpan",required:!1,type:{name:"number"}},headerText:{defaultValue:null,description:"Defines header text of the component.",name:"headerText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{w.displayName="FormGroup",w.__docgenInfo={description:`The FormGroup (ui5-form-group) represents a group inside the Form (ui5-form) component
and it consists of FormItem (ui5-form-item) components.

The layout of the FormGroup is mostly defined and controlled by the overarching Form (ui5-form) component.
Still, one can influence the layout via the FormGroup's \`columnSpan\` property,
that defines how many columns the group should expand to.

### Usage

Тhe FormGroup (ui5-form-group) allows to split a Form into groups,
e.g to group FormItems that logically belong together.

### ES6 Module Import

- import`,displayName:"FormGroup",props:{children:{defaultValue:null,description:"Defines the items of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},columnSpan:{defaultValue:{value:"undefined"},description:`Defines column span of the component,
e.g how many columns the group should span to.`,name:"columnSpan",required:!1,type:{name:"number"}},headerText:{defaultValue:null,description:"Defines header text of the component.",name:"headerText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function K(r,e,o){return c`<div class="ui5-form-item-root"><div class="ui5-form-item-layout" part="layout"><div class="ui5-form-item-label" part="label"><slot name="labelContent"></slot></div><div class="ui5-form-item-content" part="content">${V(this.content,(t,n)=>t._id||n,(t,n)=>Z.call(this,r,e,o,t,n))}</div></div></div>`}function Z(r,e,o,t,n){return c`<div class="ui5-form-item-content-child"><slot name="${f(t._individualSlot)}"></slot></div>`}L("@ui5/webcomponents-theming","sap_horizon",async()=>$);L("@ui5/webcomponents","sap_horizon",async()=>q);const ee={packageName:"@ui5/webcomponents",fileName:"themes/FormItem.css.ts",content:`:host([column-span="1"]){grid-column:span 1}:host([column-span="2"]){grid-column:span 2}:host([column-span="3"]){grid-column:span 3}:host([column-span="4"]){grid-column:span 4}:host([column-span="5"]){grid-column:span 5}:host([column-span="6"]){grid-column:span 6}.ui5-form-item-root{container-type:inline-size;background-color:inherit;color:inherit}.ui5-form-item-layout{display:grid;grid-template-columns:var(--ui5-v2-0-0-rc-6-form-item-layout);align-items:center}.ui5-form-item-label{padding:var(--ui5-v2-0-0-rc-6-form-item-label-padding);padding-inline-end:var(--ui5-v2-0-0-rc-6-form-item-label-padding-end);justify-self:var(--ui5-v2-0-0-rc-6-form-item-label-justify)}.ui5-form-item-content{display:flex;padding:0 .25rem}.ui5-form-item-content-child{padding-inline-end:.5rem;box-sizing:border-box;width:100%}:host([item-spacing="Large"]) .ui5-form-item-layout{min-height:var(--_ui5-v2-0-0-rc-6_form_item_min_height);padding-top:var(--_ui5-v2-0-0-rc-6_form_item_padding);padding-bottom:var(--_ui5-v2-0-0-rc-6_form_item_padding);box-sizing:border-box}::slotted([ui5-input]){width:100%}::slotted([ui5-select]){width:100%}
`};var b=function(r,e,o,t){var n=arguments.length,a=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,o):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(r,e,o,t);else for(var s=r.length-1;s>=0;s--)(i=r[s])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let y=class extends G{get isGroup(){return!1}};b([l({validator:p,defaultValue:void 0})],y.prototype,"columnSpan",void 0);b([F()],y.prototype,"labelContent",void 0);b([F({type:HTMLElement,default:!0,individualSlots:!0})],y.prototype,"content",void 0);b([l({type:String,defaultValue:"S12 M4 L4 XL4"})],y.prototype,"labelSpan",void 0);b([l({type:g,defaultValue:g.Normal})],y.prototype,"itemSpacing",void 0);y=b([C({tag:"ui5-form-item",renderer:D,styles:ee,template:K})],y);y.define();const oe=y,te=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"})),_=M("ui5-form-item",["columnSpan"],[],["labelContent"],[],()=>T(()=>Promise.resolve().then(()=>te),void 0,import.meta.url));_.displayName="FormItem";try{_.displayName="FormItem",_.__docgenInfo={description:`The FormItem (ui5-form-item) represents pair of a label and
one or more components (text or text fields), associated to it.

### Usage

The FormItem is being used in FormGroup (ui5-form-group) or directly in Form (ui5-form).

### ES6 Module Import

- import`,displayName:"FormItem",props:{children:{defaultValue:null,description:"Defines the content of the component,\nassociated to `labelContent`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},labelContent:{defaultValue:null,description:`Defines the label of the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="labelContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"labelContent",required:!1,type:{name:"UI5WCSlotsNode"}},columnSpan:{defaultValue:{value:"undefined"},description:`Defines the column span of the component,
e.g how many columns the component should span to.

**Note:** The column span should be a number between 1 and the available columns of the FormGroup (when items are placed in a group)
or the Form. The available columns can be affected by the FormGroup#columnSpan and/or the Form#layout.
A number bigger than the available columns won't take effect.`,name:"columnSpan",required:!1,type:{name:"number"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{_.displayName="FormItem",_.__docgenInfo={description:`The FormItem (ui5-form-item) represents pair of a label and
one or more components (text or text fields), associated to it.

### Usage

The FormItem is being used in FormGroup (ui5-form-group) or directly in Form (ui5-form).

### ES6 Module Import

- import`,displayName:"FormItem",props:{children:{defaultValue:null,description:"Defines the content of the component,\nassociated to `labelContent`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},labelContent:{defaultValue:null,description:`Defines the label of the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="labelContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"labelContent",required:!1,type:{name:"UI5WCSlotsNode"}},columnSpan:{defaultValue:{value:"undefined"},description:`Defines the column span of the component,
e.g how many columns the component should span to.

**Note:** The column span should be a number between 1 and the available columns of the FormGroup (when items are placed in a group)
or the Form. The available columns can be affected by the FormGroup#columnSpan and/or the Form#layout.
A number bigger than the available columns won't take effect.`,name:"columnSpan",required:!1,type:{name:"number"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{S as F,_ as a,w as b};
