import{p,q as d,v as F,a as _,s as G,b as i,m as L,y as C,S as N,w as I}from"./withWebComponent-DpVKsRHi.js";import{d as w}from"./slot-_4yKMUwC.js";import{c as T}from"./Icon-CrKv37md.js";import{s as M}from"./parameters-bundle.css-R51uC6BG.js";import{a as $}from"./Title-DnczWaCy.js";function X(a,e,o){return p`<div class="ui5-form-root" role="form" aria-labelledby="${d(this.ariaLabelledByID)}">${this.hasHeader?q.call(this,a,e,o):void 0}<div class="ui5-form-layout" part="layout">${this.hasGroupItems?E.call(this,a,e,o):z.call(this,a,e,o)}</div></div>`}function q(a,e,o){return p`<div class="ui5-form-header" part="header">${this.hasCustomHeader?V.call(this,a,e,o):k.call(this,a,e,o)}</div>`}function V(a,e,o){return p`<slot name="header"></slot>`}function k(a,e,o){return o?p`<${F("ui5-title",e,o)} id="${d(this._id)}-header-text" level="H4">${d(this.headerText)}</${F("ui5-title",e,o)}>`:p`<ui5-title id="${d(this._id)}-header-text" level="H4">${d(this.headerText)}</ui5-title>`}function E(a,e,o){return p`${T(this.groupItemsInfo,(t,n)=>t._id||n,(t,n)=>R.call(this,a,e,o,t,n))}`}function R(a,e,o,t,n){return p`<div class="ui5-form-column ${d(t.classes)}" part="column"><div class="ui5-form-group">${t.groupItem.headerText?U.call(this,a,e,o,t,n):void 0}<div class="ui5-form-group-layout"><slot name="${d(t.groupItem._individualSlot)}"></slot></div></div></div>`}function U(a,e,o,t,n){return o?p`<div class="ui5-form-group-heading"><${F("ui5-title",e,o)} level="H6">${d(t.groupItem.headerText)}</${F("ui5-title",e,o)}></div>`:p`<div class="ui5-form-group-heading"><ui5-title level="H6">${d(t.groupItem.headerText)}</ui5-title></div>`}function z(a,e,o){return p`${T(this.itemsInfo,(t,n)=>t._id||n,(t,n)=>W.call(this,a,e,o,t,n))}`}function W(a,e,o,t,n){return p`<div class="ui5-form-item ${d(t.classes)}"><slot name="${d(t.item._individualSlot)}"></slot></div>`}_("@ui5/webcomponents-theming","sap_horizon",async()=>G);_("@ui5/webcomponents","sap_horizon",async()=>M);const j={packageName:"@ui5/webcomponents",fileName:"themes/Form.css.ts",content:`@container (max-width: 600px){.ui5-form-layout{grid-template-columns:1fr}::slotted(*){justify-self:start}::slotted(:nth-child(2n)){margin-bottom:.5rem}}@container (width > 600px) and (width <= 1024px){.ui5-form-layout{grid-template-columns:1fr}:host([columns-m="1"]) .ui5-form-layout{grid-template-columns:1fr}:host([columns-m="2"]) .ui5-form-layout{grid-template-columns:repeat(2,1fr)}.ui5-form-column-spanM-2{grid-column:span 2}.ui5-form-column-spanM-2 .ui5-form-group-layout{grid-template-columns:repeat(2,1fr)}}@container (width > 1024px) and (width <= 1440px){.ui5-form-layout{grid-template-columns:repeat(2,1fr)}.ui5-form-column{grid-template-columns:1fr}:host([columns-l="1"]) .ui5-form-layout{grid-template-columns:1fr}:host([columns-l="2"]) .ui5-form-layout{grid-template-columns:repeat(2,1fr)}:host([columns-l="3"]) .ui5-form-layout{grid-template-columns:repeat(3,1fr)}.ui5-form-column-spanL-2{grid-column:span 2}.ui5-form-column-spanL-2 .ui5-form-group-layout{grid-template-columns:repeat(2,1fr)}.ui5-form-column-spanL-3{grid-column:span 3}.ui5-form-column-spanL-3 .ui5-form-group-layout{grid-template-columns:repeat(3,1fr)}}@container (min-width: 1441px){.ui5-form-layout{grid-template-columns:repeat(3,1fr)}:host([columns-xl="1"]) .ui5-form-layout{grid-template-columns:1fr}:host([columns-xl="2"]) .ui5-form-layout{grid-template-columns:repeat(2,1fr)}:host([columns-xl="3"]) .ui5-form-layout{grid-template-columns:repeat(3,1fr)}:host([columns-xl="4"]) .ui5-form-layout{grid-template-columns:repeat(4,1fr)}:host([columns-xl="5"]) .ui5-form-layout{grid-template-columns:repeat(5,1fr)}:host([columns-xl="6"]) .ui5-form-layout{grid-template-columns:repeat(6,1fr)}.ui5-form-column-spanXL-2{grid-column:span 2}.ui5-form-column-spanXL-2 .ui5-form-group-layout{grid-template-columns:repeat(2,1fr)}.ui5-form-column-spanXL-3{grid-column:span 3}.ui5-form-column-spanXL-3 .ui5-form-group-layout{grid-template-columns:repeat(3,1fr)}.ui5-form-column-spanXL-4{grid-column:span 4}.ui5-form-column-spanXL-4 .ui5-form-group-layout{grid-template-columns:repeat(4,1fr)}.ui5-form-column-spanXL-5{grid-column:span 5}.ui5-form-column-spanXL-5 .ui5-form-group-layout{grid-template-columns:repeat(5,1fr)}.ui5-form-column-spanXL-6{grid-column:span 6}.ui5-form-column-spanXL-6 .ui5-form-group-layout{grid-template-columns:repeat(6,1fr)}}.ui5-form-item-span-2{grid-column:span 2}.ui5-form-item-span-3{grid-column:span 3}.ui5-form-item-span-4{grid-column:span 4}.ui5-form-item-span-5{grid-column:span 5}.ui5-form-item-span-6{grid-column:span 6}@container (max-width: 600px){:host([label-span-s="1"]) .ui5-form-item,:host([label-span-s="1"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span1)}:host([label-span-s="2"]) .ui5-form-item,:host([label-span-s="2"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span2)}:host([label-span-s="3"]) .ui5-form-item,:host([label-span-s="3"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span3)}:host([label-span-s="4"]) .ui5-form-item,:host([label-span-s="4"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span4)}:host([label-span-s="5"]) .ui5-form-item,:host([label-span-s="5"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span5)}:host([label-span-s="6"]) .ui5-form-item,:host([label-span-s="6"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span6)}:host([label-span-s="7"]) .ui5-form-item,:host([label-span-s="7"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span7)}:host([label-span-s="8"]) .ui5-form-item,:host([label-span-s="8"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span8)}:host([label-span-s="9"]) .ui5-form-item,:host([label-span-s="9"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span9)}:host([label-span-s="10"]) .ui5-form-item,:host([label-span-s="10"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span10)}:host([label-span-s="11"]) .ui5-form-item,:host([label-span-s="11"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span11)}:host(:not([label-span-s])) .ui5-form-item,:host(:not([label-span-s])) .ui5-form-group,:host([label-span-s="12"]) .ui5-form-item,:host([label-span-s="12"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span12);--ui5-v2-4-0-form-item-label-justify: var(--ui5-v2-4-0-form-item-label-justify-span12);--ui5-v2-4-0-form-item-label-padding: var(--ui5-v2-4-0-form-item-label-padding-span12)}}@container (width > 600px) and (width <= 1024px){:host([label-span-m="1"]) .ui5-form-item,:host([label-span-m="1"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span1)}:host([label-span-m="2"]) .ui5-form-item,:host([label-span-m="2"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span2)}:host([label-span-m="3"]) .ui5-form-item,:host([label-span-m="3"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span3)}:host([label-span-m="4"]) .ui5-form-item,:host([label-span-m="4"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span4)}:host([label-span-m="5"]) .ui5-form-item,:host([label-span-m="5"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span5)}:host([label-span-m="6"]) .ui5-form-item,:host([label-span-m="6"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span6)}:host([label-span-m="7"]) .ui5-form-item,:host([label-span-m="7"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span7)}:host([label-span-m="8"]) .ui5-form-item,:host([label-span-m="8"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span8)}:host([label-span-m="9"]) .ui5-form-item,:host([label-span-m="9"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span9)}:host([label-span-m="10"]) .ui5-form-item,:host([label-span-m="10"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span10)}:host([label-span-m="11"]) .ui5-form-item,:host([label-span-m="11"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span11)}:host([label-span-m="12"]) .ui5-form-item,:host([label-span-m="12"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span12);--ui5-v2-4-0-form-item-label-justify: var(--ui5-v2-4-0-form-item-label-justify-span12);--ui5-v2-4-0-form-item-label-padding: var(--ui5-v2-4-0-form-item-label-padding-span12)}}@container (width > 1024px) and (width <= 1440px){:host([label-span-l="1"]) .ui5-form-item,:host([label-span-l="1"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span1)}:host([label-span-l="2"]) .ui5-form-item,:host([label-span-l="2"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span2)}:host([label-span-l="3"]) .ui5-form-item,:host([label-span-l="3"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span3)}:host([label-span-l="4"]) .ui5-form-item,:host([label-span-l="4"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span4)}:host([label-span-l="5"]) .ui5-form-item,:host([label-span-l="5"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span5)}:host([label-span-l="6"]) .ui5-form-item,:host([label-span-l="6"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span6)}:host([label-span-l="7"]) .ui5-form-item,:host([label-span-l="7"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span7)}:host([label-span-l="8"]) .ui5-form-item,:host([label-span-l="8"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span8)}:host([label-span-l="9"]) .ui5-form-item,:host([label-span-l="9"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span9)}:host([label-span-l="10"]) .ui5-form-item,:host([label-span-l="10"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span10)}:host([label-span-l="11"]) .ui5-form-item,:host([label-span-l="11"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span11)}:host([label-span-l="12"]) .ui5-form-item,:host([label-span-l="12"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span12);--ui5-v2-4-0-form-item-label-justify: var(--ui5-v2-4-0-form-item-label-justify-span12);--ui5-v2-4-0-form-item-label-padding: var(--ui5-v2-4-0-form-item-label-padding-span12)}}@container (min-width: 1441px){:host([label-span-xl="1"]) .ui5-form-item,:host([label-span-xl="1"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span1)}:host([label-span-xl="2"]) .ui5-form-item,:host([label-span-xl="2"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span2)}:host([label-span-xl="3"]) .ui5-form-item,:host([label-span-xl="3"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span3)}:host([label-span-xl="4"]) .ui5-form-item,:host([label-span-xl="4"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span4)}:host([label-span-xl="5"]) .ui5-form-item,:host([label-span-xl="5"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span5)}:host([label-span-xl="6"]) .ui5-form-item,:host([label-span-xl="6"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span6)}:host([label-span-xl="7"]) .ui5-form-item,:host([label-span-xl="7"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span7)}:host([label-span-xl="8"]) .ui5-form-item,:host([label-span-xl="8"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span8)}:host([label-span-xl="9"]) .ui5-form-item,:host([label-span-xl="9"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span9)}:host([label-span-xl="10"]) .ui5-form-item,:host([label-span-xl="10"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span10)}:host([label-span-xl="11"]) .ui5-form-item,:host([label-span-xl="11"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span11)}:host([label-span-xl="12"]) .ui5-form-item,:host([label-span-xl="12"]) .ui5-form-group{--ui5-v2-4-0-form-item-layout: var(--ui5-v2-4-0-form-item-layout-span12);--ui5-v2-4-0-form-item-label-justify: var(--ui5-v2-4-0-form-item-label-justify-span12);--ui5-v2-4-0-form-item-label-padding: var(--ui5-v2-4-0-form-item-label-padding-span12)}}:host{display:block}.ui5-form-root{display:flex;flex-direction:column;background-color:var(--sapGroup_ContentBackground);border-radius:.75rem;container-type:inline-size}.ui5-form-header{display:flex;min-height:2.75rem;align-items:center;border-bottom:1px solid var(--sapGroup_TitleBorderColor);padding:.875rem 1rem;box-sizing:border-box}.ui5-form-layout{display:grid;column-gap:1rem;row-gap:.125rem;padding:1rem .75rem}.ui5-form-group-layout{display:grid;column-gap:1rem}.ui5-form-group-heading{height:var(--_ui5-v2-4-0-form-group-heading-height);line-height:var(--_ui5-v2-4-0-form-group-heading-height);padding-inline-start:.25rem}.ui5-form-column{padding-top:.5rem;padding-bottom:1rem;box-sizing:border-box}::slotted([ui5-form-group]){display:contents}
`};var u=function(a,e,o,t){var n=arguments.length,r=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,o):t,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,o,t);else for(var s=a.length-1;s>=0;s--)(l=a[s])&&(r=(n<3?l(r):n>3?l(e,o,r):l(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};const x=new Map,y={S:1,M:2,L:3,XL:6};let m=class extends N{constructor(){super(...arguments),this.layout="S1 M1 L2 XL3",this.labelSpan="S12 M4 L4 XL4",this.itemSpacing="Normal",this.columnsS=1,this.labelSpanS=12,this.columnsM=1,this.labelSpanM=4,this.columnsL=2,this.labelSpanL=4,this.columnsXl=3,this.labelSpanXl=4}onBeforeRendering(){this.setColumnLayout(),this.setLabelSpan(),this.setGroupsColSpan()}onAfterRendering(){this.createAdditionalCSSStyleSheet()}setColumnLayout(){this.layout.split(" ").forEach(o=>{o.startsWith("S")?this.columnsS=parseInt(o.slice(1)):o.startsWith("M")?this.columnsM=parseInt(o.slice(1)):o.startsWith("L")?this.columnsL=parseInt(o.slice(1)):o.startsWith("XL")&&(this.columnsXl=parseInt(o.slice(2)))})}setLabelSpan(){this.labelSpan.split(" ").forEach(e=>{e.startsWith("S")?this.labelSpanS=parseInt(e.slice(1)):e.startsWith("M")?this.labelSpanM=parseInt(e.slice(1)):e.startsWith("L")?this.labelSpanL=parseInt(e.slice(1)):e.startsWith("XL")&&(this.labelSpanXl=parseInt(e.slice(2)))}),this.items.forEach(e=>{e.labelSpan=this.labelSpan,e.itemSpacing=this.itemSpacing})}setGroupsColSpan(){if(!this.hasGroupItems)return;const e=this.items.length;[...this.items].sort((t,n)=>(n==null?void 0:n.items.length)-(t==null?void 0:t.items.length)).forEach((t,n)=>{t.colsXl=this.getGroupsColSpan(this.columnsXl,e,n,t),t.colsL=this.getGroupsColSpan(this.columnsL,e,n,t),t.colsM=this.getGroupsColSpan(this.columnsM,e,n,t),t.colsS=this.getGroupsColSpan(this.columnsS,e,n,t)})}getGroupsColSpan(e,o,t,n){if(n.columnSpan)return n.columnSpan;if(e===1||e<=o)return 1;if(e%o===0)return e/o;const r=1,l=e-o;return l<=o?t<l?r+1:r:t===0?r+(l-o)+1:r+1}get hasGroupItems(){return this.items.some(e=>e.isGroup)}get hasHeader(){return this.hasCustomHeader||!!this.headerText}get hasCustomHeader(){return!!this.header.length}get ariaLabelledByID(){return this.hasCustomHeader?void 0:`${this._id}-header-text`}get groupItemsInfo(){return this.items.map(e=>({groupItem:e,classes:`ui5-form-column-spanL-${e.colsL} ui5-form-column-spanXL-${e.colsXl} ui5-form-column-spanM-${e.colsM} ui5-form-column-spanS-${e.colsS}`,items:this.getItemsInfo(Array.from(e.children))}))}get itemsInfo(){return this.getItemsInfo()}getItemsInfo(e){return(e||this.items).map(o=>({item:o,classes:o.columnSpan?`ui5-form-item-span-${o.columnSpan}`:""}))}createAdditionalCSSStyleSheet(){[{breakpoint:"S",columns:this.columnsS},{breakpoint:"M",columns:this.columnsM},{breakpoint:"L",columns:this.columnsL},{breakpoint:"XL",columns:this.columnsXl}].forEach(e=>{const o=this.getAdditionalCSS(e.breakpoint,e.columns);o&&(this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,this.getCSSStyleSheet(o)])})}getAdditionalCSS(e,o){if(y[e]>=o)return;const t=`${e}-${o}`;if(!x.has(t)){let n,r=y.S,l="",s=o;for(e==="S"?(r=y.S,n="@container (max-width: 599px) {"):e==="M"?(r=y.M,n="@container (width > 599px) and (width < 1024px) {"):e==="L"?(r=y.L,n="@container (width > 1023px) and (width < 1439px) {"):e==="XL"&&(n="@container (min-width: 1440px) {",r=y.XL);s>r;)l+=`
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
				`,s--;const D=`${n}${l}}`;x.set(t,D)}return x.get(t)}getCSSStyleSheet(e){const o=new CSSStyleSheet;return o.replaceSync(e),o}};u([i()],m.prototype,"layout",void 0);u([i()],m.prototype,"labelSpan",void 0);u([i()],m.prototype,"headerText",void 0);u([i()],m.prototype,"itemSpacing",void 0);u([w({type:HTMLElement})],m.prototype,"header",void 0);u([w({type:HTMLElement,default:!0,individualSlots:!0,invalidateOnChildChange:!0})],m.prototype,"items",void 0);u([i({type:Number})],m.prototype,"columnsS",void 0);u([i({type:Number})],m.prototype,"labelSpanS",void 0);u([i({type:Number})],m.prototype,"columnsM",void 0);u([i({type:Number})],m.prototype,"labelSpanM",void 0);u([i({type:Number})],m.prototype,"columnsL",void 0);u([i({type:Number})],m.prototype,"labelSpanL",void 0);u([i({type:Number})],m.prototype,"columnsXl",void 0);u([i({type:Number})],m.prototype,"labelSpanXl",void 0);m=u([L({tag:"ui5-form",renderer:C,styles:j,template:X,dependencies:[$]})],m);m.define();const g=I("ui5-form",["headerText","itemSpacing","labelSpan","layout"],[],["header"],[]);g.displayName="Form";try{g.displayName="Form",g.__docgenInfo={description:`The Form is a layout component that arranges labels and form fields (like input fields) pairs
into a specific number of columns.

**Note:** The Form web component is a layout component, it isn't a replacement for the native \`form\` HTML element.
The Form web component does not provide any APIs for form submission.

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
- **XL** (> 1439px) – up to 6 columns are recommended (default: 3)

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
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},headerText:{defaultValue:{value:"undefined"},description:"Defines the header text of the component.\n\n**Note:** The property gets overridden by the `header` slot.",name:"headerText",required:!1,type:{name:"string"}},itemSpacing:{defaultValue:{value:'"Normal"'},description:`Defines the vertical spacing between form items.

**Note:** If the Form is meant to be switched between "non-edit" and "edit" modes,
we recommend using "Large" item spacing in "non-edit" mode, and "Normal" - for "edit" mode,
to avoid "jumping" effect, caused by the hight difference between texts in "non-edit" mode and the input fields in "edit" mode.`,name:"itemSpacing",required:!1,type:{name:"enum",value:[{value:'"Normal"'},{value:'"Normal"'},{value:'"Large"'},{value:'"Large"'}]}},labelSpan:{defaultValue:{value:'"S12 M4 L4 XL4"'},description:`Defines the width proportion of the labels and fields of a FormItem by breakpoint.

By default, the labels take 4/12 (or 1/3) of the form item in M,L and XL sizes,
and 12/12 in S size, e.g in S the label is on top of its associated field.

The supported values are between 1 and 12. Greater the number, more space the label will use.

**Note:** If "12" is set, the label will be displayed on top of its assosiated field.`,name:"labelSpan",required:!1,type:{name:"string"}},layout:{defaultValue:{value:'"S1 M1 L2 XL3"'},description:"Defines the number of columns to distribute the form content by breakpoint.\n\nSupported values:\n- `S` - 1 column by default (1 column is recommended)\n- `M` - 1 column by default (up to 2 columns are recommended)\n- `L` - 2 columns by default (up to 3 columns are recommended)\n- `XL` - 3 columns by default (up to 6 columns  are recommended)",name:"layout",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{g.displayName="Form",g.__docgenInfo={description:`The Form is a layout component that arranges labels and form fields (like input fields) pairs
into a specific number of columns.

**Note:** The Form web component is a layout component, it isn't a replacement for the native \`form\` HTML element.
The Form web component does not provide any APIs for form submission.

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
- **XL** (> 1439px) – up to 6 columns are recommended (default: 3)

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
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},headerText:{defaultValue:{value:"undefined"},description:"Defines the header text of the component.\n\n**Note:** The property gets overridden by the `header` slot.",name:"headerText",required:!1,type:{name:"string"}},itemSpacing:{defaultValue:{value:'"Normal"'},description:`Defines the vertical spacing between form items.

**Note:** If the Form is meant to be switched between "non-edit" and "edit" modes,
we recommend using "Large" item spacing in "non-edit" mode, and "Normal" - for "edit" mode,
to avoid "jumping" effect, caused by the hight difference between texts in "non-edit" mode and the input fields in "edit" mode.`,name:"itemSpacing",required:!1,type:{name:"enum",value:[{value:'"Normal"'},{value:'"Normal"'},{value:'"Large"'},{value:'"Large"'}]}},labelSpan:{defaultValue:{value:'"S12 M4 L4 XL4"'},description:`Defines the width proportion of the labels and fields of a FormItem by breakpoint.

By default, the labels take 4/12 (or 1/3) of the form item in M,L and XL sizes,
and 12/12 in S size, e.g in S the label is on top of its associated field.

The supported values are between 1 and 12. Greater the number, more space the label will use.

**Note:** If "12" is set, the label will be displayed on top of its assosiated field.`,name:"labelSpan",required:!1,type:{name:"string"}},layout:{defaultValue:{value:'"S1 M1 L2 XL3"'},description:"Defines the number of columns to distribute the form content by breakpoint.\n\nSupported values:\n- `S` - 1 column by default (1 column is recommended)\n- `M` - 1 column by default (up to 2 columns are recommended)\n- `L` - 2 columns by default (up to 3 columns are recommended)\n- `XL` - 3 columns by default (up to 6 columns  are recommended)",name:"layout",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var h=function(a,e,o,t){var n=arguments.length,r=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,o):t,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,o,t);else for(var s=a.length-1;s>=0;s--)(l=a[s])&&(r=(n<3?l(r):n>3?l(e,o,r):l(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};let c=class extends N{constructor(){super(...arguments),this.colsS=1,this.colsM=1,this.colsL=1,this.colsXl=1,this.itemSpacing="Normal",this.labelSpan="S12 M4 L4 XL4"}onBeforeRendering(){this.processFormItems()}processFormItems(){this.items.forEach(e=>{e.labelSpan=this.labelSpan,e.itemSpacing=this.itemSpacing})}get isGroup(){return!0}};h([i()],c.prototype,"headerText",void 0);h([i({type:Number})],c.prototype,"columnSpan",void 0);h([w({type:HTMLElement,default:!0})],c.prototype,"items",void 0);h([i({type:Number})],c.prototype,"colsS",void 0);h([i({type:Number})],c.prototype,"colsM",void 0);h([i({type:Number})],c.prototype,"colsL",void 0);h([i({type:Number})],c.prototype,"colsXl",void 0);h([i()],c.prototype,"itemSpacing",void 0);h([i()],c.prototype,"labelSpan",void 0);c=h([L("ui5-form-group")],c);c.define();const v=I("ui5-form-group",["columnSpan","headerText"],[],[],[]);v.displayName="FormGroup";try{v.displayName="FormGroup",v.__docgenInfo={description:`The FormGroup (ui5-form-group) represents a group inside the Form (ui5-form) component
and it consists of FormItem (ui5-form-item) components.

The layout of the FormGroup is mostly defined and controlled by the overarching Form (ui5-form) component.
Still, one can influence the layout via the FormGroup's \`columnSpan\` property,
that defines how many columns the group should expand to.

### Usage

Тhe FormGroup (ui5-form-group) allows to split a Form into groups,
e.g to group FormItems that logically belong together.

### ES6 Module Import

- import`,displayName:"FormGroup",props:{children:{defaultValue:null,description:"Defines the items of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},columnSpan:{defaultValue:{value:"undefined"},description:`Defines column span of the component,
e.g how many columns the group should span to.`,name:"columnSpan",required:!1,type:{name:"number"}},headerText:{defaultValue:{value:"undefined"},description:"Defines header text of the component.",name:"headerText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{v.displayName="FormGroup",v.__docgenInfo={description:`The FormGroup (ui5-form-group) represents a group inside the Form (ui5-form) component
and it consists of FormItem (ui5-form-item) components.

The layout of the FormGroup is mostly defined and controlled by the overarching Form (ui5-form) component.
Still, one can influence the layout via the FormGroup's \`columnSpan\` property,
that defines how many columns the group should expand to.

### Usage

Тhe FormGroup (ui5-form-group) allows to split a Form into groups,
e.g to group FormItems that logically belong together.

### ES6 Module Import

- import`,displayName:"FormGroup",props:{children:{defaultValue:null,description:"Defines the items of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},columnSpan:{defaultValue:{value:"undefined"},description:`Defines column span of the component,
e.g how many columns the group should span to.`,name:"columnSpan",required:!1,type:{name:"number"}},headerText:{defaultValue:{value:"undefined"},description:"Defines header text of the component.",name:"headerText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function H(a,e,o){return p`<div class="ui5-form-item-root"><div class="ui5-form-item-layout" part="layout"><div class="ui5-form-item-label" part="label"><slot name="labelContent"></slot></div><div class="ui5-form-item-content" part="content">${T(this.content,(t,n)=>t._id||n,(t,n)=>O.call(this,a,e,o,t,n))}</div></div></div>`}function O(a,e,o,t,n){return p`<div class="ui5-form-item-content-child"><slot name="${d(t._individualSlot)}"></slot></div>`}_("@ui5/webcomponents-theming","sap_horizon",async()=>G);_("@ui5/webcomponents","sap_horizon",async()=>M);const P={packageName:"@ui5/webcomponents",fileName:"themes/FormItem.css.ts",content:`:host([column-span="1"]){grid-column:span 1}:host([column-span="2"]){grid-column:span 2}:host([column-span="3"]){grid-column:span 3}:host([column-span="4"]){grid-column:span 4}:host([column-span="5"]){grid-column:span 5}:host([column-span="6"]){grid-column:span 6}.ui5-form-item-root{container-type:inline-size;background-color:inherit;color:inherit}.ui5-form-item-layout{display:grid;grid-template-columns:var(--ui5-v2-4-0-form-item-layout);align-items:center}.ui5-form-item-label{padding:var(--ui5-v2-4-0-form-item-label-padding);padding-inline-end:var(--ui5-v2-4-0-form-item-label-padding-end);justify-self:var(--ui5-v2-4-0-form-item-label-justify)}.ui5-form-item-content{display:flex;padding:0 .25rem}.ui5-form-item-content-child{padding-inline-end:.5rem;box-sizing:border-box;width:100%}:host([item-spacing="Large"]) .ui5-form-item-layout{min-height:var(--_ui5-v2-4-0_form_item_min_height);padding-top:var(--_ui5-v2-4-0_form_item_padding);padding-bottom:var(--_ui5-v2-4-0_form_item_padding);box-sizing:border-box}::slotted([ui5-input]){width:100%}::slotted([ui5-select]){width:100%}
`};var b=function(a,e,o,t){var n=arguments.length,r=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,o):t,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(a,e,o,t);else for(var s=a.length-1;s>=0;s--)(l=a[s])&&(r=(n<3?l(r):n>3?l(e,o,r):l(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};let f=class extends N{constructor(){super(...arguments),this.labelSpan="S12 M4 L4 XL4",this.itemSpacing="Normal"}get isGroup(){return!1}};b([i({type:Number})],f.prototype,"columnSpan",void 0);b([w()],f.prototype,"labelContent",void 0);b([w({type:HTMLElement,default:!0,individualSlots:!0})],f.prototype,"content",void 0);b([i()],f.prototype,"labelSpan",void 0);b([i()],f.prototype,"itemSpacing",void 0);f=b([L({tag:"ui5-form-item",renderer:C,styles:P,template:H})],f);f.define();const S=I("ui5-form-item",["columnSpan"],[],["labelContent"],[]);S.displayName="FormItem";try{S.displayName="FormItem",S.__docgenInfo={description:`The FormItem (ui5-form-item) represents pair of a label and
one or more components (text or text fields), associated to it.

### Usage

The FormItem is being used in FormGroup (ui5-form-group) or directly in Form (ui5-form).

### ES6 Module Import

- import`,displayName:"FormItem",props:{children:{defaultValue:null,description:"Defines the content of the component,\nassociated to `labelContent`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},labelContent:{defaultValue:null,description:`Defines the label of the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="labelContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"labelContent",required:!1,type:{name:"UI5WCSlotsNode"}},columnSpan:{defaultValue:{value:"undefined"},description:`Defines the column span of the component,
e.g how many columns the component should span to.

**Note:** The column span should be a number between 1 and the available columns of the FormGroup (when items are placed in a group)
or the Form. The available columns can be affected by the FormGroup#columnSpan and/or the Form#layout.
A number bigger than the available columns won't take effect.`,name:"columnSpan",required:!1,type:{name:"number"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{S.displayName="FormItem",S.__docgenInfo={description:`The FormItem (ui5-form-item) represents pair of a label and
one or more components (text or text fields), associated to it.

### Usage

The FormItem is being used in FormGroup (ui5-form-group) or directly in Form (ui5-form).

### ES6 Module Import

- import`,displayName:"FormItem",props:{children:{defaultValue:null,description:"Defines the content of the component,\nassociated to `labelContent`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},labelContent:{defaultValue:null,description:`Defines the label of the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="labelContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"labelContent",required:!1,type:{name:"UI5WCSlotsNode"}},columnSpan:{defaultValue:{value:"undefined"},description:`Defines the column span of the component,
e.g how many columns the component should span to.

**Note:** The column span should be a number between 1 and the available columns of the FormGroup (when items are placed in a group)
or the Form. The available columns can be affected by the FormGroup#columnSpan and/or the Form#layout.
A number bigger than the available columns won't take effect.`,name:"columnSpan",required:!1,type:{name:"number"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{g as F,v as a,S as b};
