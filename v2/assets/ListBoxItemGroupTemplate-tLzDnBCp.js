import{j as o,b as p,p as c,d as g,s as m,m as f,E as _}from"./jsx-runtime-ByLklLy6.js";import{a as h,b as x,c as b}from"./ListItemGroup-DkPsliH9.js";import{L as v}from"./ListItemBaseTemplate-KnOYKXBU.js";import{d as I}from"./parameters-bundle.css-DHLNbl9v.js";import{D as T}from"./DropIndicator-C61opNKl.js";function y(){return[v.call(this,{listItemContent:L},{role:"option"})]}function L(){return o("div",{part:"content",id:"content",class:"ui5-li-content",children:p("div",{class:"ui5-li-text-wrapper",children:[o("span",{part:"title",className:"ui5-li-title",dangerouslySetInnerHTML:{__html:this.markupText}}),this.additionalText&&o("span",{part:"additional-text",class:"ui5-li-additional-text",children:this.additionalText})]})})}c("@ui5/webcomponents-theming","sap_horizon",async()=>g);c("@ui5/webcomponents","sap_horizon",async()=>I);const D=`:host([ui5-suggestion-item]){height:auto;min-height:var(--_ui5-v2-8-0_list_item_base_height)}:host([ui5-suggestion-item]) .ui5-li-root{min-height:var(--_ui5-v2-8-0_list_item_base_height)}:host([ui5-suggestion-item]) .ui5-li-content{padding-bottom:.875rem;padding-top:.875rem;box-sizing:border-box}
`;var u=function(t,e,n,r){var a=arguments.length,i=a<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var d=t.length-1;d>=0;d--)(l=t[d])&&(i=(a<3?l(i):a>3?l(e,n,i):l(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i};let s=class extends h{constructor(){super(...arguments),this.markupText=""}onEnterDOM(){_()&&this.setAttribute("desktop","")}get _effectiveTabIndex(){return-1}};u([m()],s.prototype,"text",void 0);u([m()],s.prototype,"additionalText",void 0);u([m()],s.prototype,"markupText",void 0);s=u([f({tag:"ui5-suggestion-item",template:y,styles:[h.styles,D]})],s);s.define();const B=s;function E(t){const e=(t==null?void 0:t.items)||j;return p("ul",{role:"group",class:"ui5-group-li-root",onDragEnter:this._ondragenter,onDragOver:this._ondragover,onDrop:this._ondrop,onDragLeave:this._ondragleave,children:[this.hasHeader&&o(b,{focused:this.focused,part:"header",accessibleRole:x.Group,children:this.hasFormattedHeader?o("slot",{name:"header"}):this.headerText}),e.call(this),o(T,{orientation:"Horizontal",ownerReference:this})]})}function j(){return o("slot",{})}export{E as L,B as S};
