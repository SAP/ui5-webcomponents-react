import{b as u,j as d,p as c,d as f,s,m as v}from"./jsx-runtime-DJfzgo3Z.js";import{d as y}from"./slot-_4yKMUwC.js";import{e as h}from"./List-Viskv7x8.js";import{I as x}from"./Icon-9zGTEZoy.js";import{L as g}from"./ListItemBaseTemplate-Bw6Uncz0.js";import{d as _}from"./parameters-bundle.css-3_Pq1j61.js";import{l as I}from"./ListItemAdditionalText.css-By0B8w7J.js";function T(){return g.call(this,{listItemContent:b},{role:"option",title:this.tooltip})}function b(){return u("div",{part:"content",id:`${this._id}-content`,class:"ui5-li-content",children:[this.displayIconBegin&&d(x,{part:"icon",name:this.icon,class:"ui5-li-icon",mode:"Decorative"}),u("div",{class:"ui5-li-text-wrapper",children:[d("span",{part:"title",class:"ui5-li-title",children:d("slot",{})}),this.additionalText&&d("span",{part:"additional-text",class:"ui5-li-additional-text",children:this.additionalText})]})]})}c("@ui5/webcomponents-theming","sap_horizon",async()=>f);c("@ui5/webcomponents","sap_horizon",async()=>_);const O=`:host{height:var(--_ui5-v2-7-2_list_item_dropdown_base_height)}
`;c("@ui5/webcomponents-theming","sap_horizon",async()=>f);c("@ui5/webcomponents","sap_horizon",async()=>_);const w=`.ui5-li-icon{color:var(--sapList_TextColor);min-width:var(--_ui5-v2-7-2_list_item_icon_size);min-height:var(--_ui5-v2-7-2_list_item_icon_size);padding-inline-end:var(--_ui5-v2-7-2_list_item_icon_padding-inline-end)}
`;var i=function(a,n,o,l){var r=arguments.length,e=r<3?n:l===null?l=Object.getOwnPropertyDescriptor(n,o):l,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(a,n,o,l);else for(var m=a.length-1;m>=0;m--)(p=a[m])&&(e=(r<3?p(e):r>3?p(n,o,e):p(n,o))||e);return r>3&&e&&Object.defineProperty(n,o,e),e};let t=class extends h{get displayIconBegin(){return!!this.icon}get effectiveDisplayText(){return this.textContent||""}};i([y({type:Node,default:!0,invalidateOnChildChange:!0})],t.prototype,"text",void 0);i([s()],t.prototype,"value",void 0);i([s()],t.prototype,"icon",void 0);i([s()],t.prototype,"additionalText",void 0);i([s()],t.prototype,"tooltip",void 0);i([s({type:Boolean})],t.prototype,"selected",void 0);t=i([v({tag:"ui5-option",template:T,styles:[h.styles,I,w,O]})],t);t.define();const $=t;export{$ as O};
