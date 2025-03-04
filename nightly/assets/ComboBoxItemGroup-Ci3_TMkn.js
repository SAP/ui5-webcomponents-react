import{f as d}from"./Icon-BCDdExWr.js";import{j as u,a as _,p as f,d as v,s as c,m as h}from"./jsx-runtime-D97XV8sh.js";import{a as b,b as g,L as I}from"./ListItemGroup-BCjLtZom.js";import{L as T}from"./ListItemBaseTemplate-Qy8tBB18.js";import{d as q}from"./parameters-bundle.css-Ct2Rzfjz.js";import{d as y}from"./slot-_4yKMUwC.js";const B="not-editable",C="M443 104q5 7 5 12 0 6-5 11L118 453q-4 4-8 4L0 480l22-110q0-5 4-9L352 36q4-4 11-4t11 4zm-121 99l-46-45L52 381l46 46zm87-88l-46-44-64 64 45 45zm71 204l-63 64-65-64-33 32 66 63-66 66 33 32 65-66 63 66 32-32-66-66 66-63z",L=!1,z="SAP-icons-v4",j="@ui5/webcomponents-icons";d(B,{pathData:C,ltr:L,collection:z,packageName:j});const G="not-editable",w="M504 94q7 7 7 18t-7 18L130 504q-8 8-18 8H26q-11 0-18.5-7.5T0 486v-86q0-9 7-18L381 8q8-8 18-8 12 0 18 8zm1 374q7 7 7 18t-7.5 18.5T486 512q-10 0-18-8l-37-37-38 37q-8 8-18 8-11 0-18.5-7.5T349 486q0-10 8-18l38-37-38-38q-8-8-8-18 0-11 7.5-18.5T375 349q10 0 18 8l38 37 37-37q8-8 18-8 11 0 18.5 7.5T512 375t-7 18l-38 38zM363 198l-50-50L62 400l50 50zm86-86l-50-50-50 50 50 50z",O=!1,$="SAP-icons-v5",P="@ui5/webcomponents-icons";d(G,{pathData:w,ltr:O,collection:$,packageName:P});function R(){return T.call(this,{listItemContent:D},{role:"option"})}function D(){return u("div",{part:"content",id:"content",class:"ui5-li-content",children:_("div",{class:"ui5-li-text-wrapper",children:[this.text&&u("span",{part:"title",className:"ui5-li-title",children:this.text}),this.additionalText&&u("span",{part:"additional-text",class:"ui5-li-additional-text",children:this.additionalText})]})})}f("@ui5/webcomponents-theming","sap_horizon",async()=>v);f("@ui5/webcomponents","sap_horizon",async()=>q);const V=`:host([ui5-cb-item]){height:auto;min-height:var(--_ui5-v2-7-3_list_item_base_height)}:host([ui5-cb-item]) .ui5-li-root{min-height:var(--_ui5-v2-7-3_list_item_base_height)}:host([ui5-cb-item]) .ui5-li-content{padding-bottom:.875rem;padding-top:.875rem;box-sizing:border-box}:host([ui5-cb-item][text][additional-text]) .ui5-li-text-wrapper{gap:1rem}
`;var m=function(e,o,i,s){var a=arguments.length,t=a<3?o:s===null?s=Object.getOwnPropertyDescriptor(o,i):s,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,o,i,s);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(t=(a<3?l(t):a>3?l(o,i,t):l(o,i))||t);return a>3&&t&&Object.defineProperty(o,i,t),t};let n=class extends b{constructor(){super(...arguments),this._isVisible=!1,this.focused=!1,this.selected=!1,this.markupText=""}};m([c()],n.prototype,"text",void 0);m([c()],n.prototype,"additionalText",void 0);m([c({type:Boolean,noAttribute:!0})],n.prototype,"_isVisible",void 0);m([c({type:Boolean})],n.prototype,"focused",void 0);m([c({type:Boolean})],n.prototype,"selected",void 0);m([c()],n.prototype,"markupText",void 0);n=m([h({tag:"ui5-cb-item",template:R,styles:[b.styles,V]})],n);n.define();const Q=n;function M(){return[g.call(this,{items:N})]}function N(){return this.items.filter(e=>e._isVisible).map(e=>u("slot",{name:e._individualSlot}))}var x=function(e,o,i,s){var a=arguments.length,t=a<3?o:s===null?s=Object.getOwnPropertyDescriptor(o,i):s,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,o,i,s);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(t=(a<3?l(t):a>3?l(o,i,t):l(o,i))||t);return a>3&&t&&Object.defineProperty(o,i,t),t};let p=class extends I{get isGroupItem(){return!0}get _isVisible(){return this.items.some(o=>o._isVisible)}};x([y({default:!0,invalidateOnChildChange:!0,individualSlots:!0,type:HTMLElement})],p.prototype,"items",void 0);p=x([h({tag:"ui5-cb-item-group",template:M})],p);p.define();const W=e=>"isGroupItem"in e,X=p;export{Q as C,X as a,W as i};
