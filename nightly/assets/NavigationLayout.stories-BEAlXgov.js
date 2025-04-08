import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{m as L}from"./menu-DyX4Q2Dy.js";import{p as q,d as z,h as w,j as g,s as y,m as $,y as D,E as j,b as S,c as T,Y as N,w as H}from"./jsx-runtime-BvNWHM6A.js";import"./home-RDFpxwnI.js";import{S as M,a,c as _,b as v}from"./chain-link-DmcbkfNV.js";import"./calendar-BCLvi9ZG.js";import{f as s}from"./Icon-Cx68SyXj.js";import"./background-BhLU8pq8.js";import"./action-settings-Z53XhHUT.js";import{r as b}from"./index-U0ga5oGA.js";import{B as R}from"./index-DlD3csZn.js";import{S as V}from"./index-CQD40oWk.js";import{T as U}from"./index-CqWP2qFq.js";import{T as A}from"./index-Djw6u5wq.js";import{d as x}from"./slot-_4yKMUwC.js";import{d as B}from"./parameters-bundle.css-BLEjIEH9.js";import{d as E}from"./parameters-bundle.css-Bs_zJ0h6.js";q("@ui5/webcomponents-theming","sap_horizon",async()=>z);q("@ui5/webcomponents","sap_horizon",async()=>B);const P=`::-webkit-scrollbar:horizontal{height:var(--sapScrollBar_Dimension)}::-webkit-scrollbar:vertical{width:var(--sapScrollBar_Dimension)}::-webkit-scrollbar{background-color:var(--sapScrollBar_TrackColor);border-left:none}::-webkit-scrollbar-thumb{border-radius:var(--sapElement_BorderCornerRadius);background-color:var(--sapScrollBar_FaceColor)}::-webkit-scrollbar-thumb:hover{background-color:var(--sapScrollBar_Hover_FaceColor)}::-webkit-scrollbar-corner{background-color:var(--sapScrollBar_TrackColor)}
`;var p;(function(t){t.Auto="Auto",t.Collapsed="Collapsed",t.Expanded="Expanded"})(p||(p={}));function W(){return w("div",{class:"ui5-nl-root",children:[g("header",{class:"ui5-nl-header",children:g("slot",{name:"header"})}),w("section",{class:"ui5-nl-section",children:[g("aside",{class:"ui5-nl-aside",children:g("slot",{name:"sideContent"})}),g("div",{class:"ui5-nl-content",children:g("slot",{})})]})]})}q("@ui5/webcomponents-theming","sap_horizon",async()=>z);q("@ui5/webcomponents-fiori","sap_horizon",async()=>E);const O=`:host(:not([hidden])){position:absolute;inset:0;display:block;background:var(--sapBackgroundColor);box-sizing:border-box;overflow:hidden}.ui5-nl-root{width:100%;height:100%;display:flex;flex-direction:column;box-sizing:border-box}.ui5-nl-header{z-index:2}.ui5-nl-section{display:flex;flex:1;min-height:0;position:relative}.ui5-nl-aside{transition:transform .3s;z-index:1}:host([is-phone]) .ui5-nl-aside{position:absolute;top:0;left:0;bottom:0;width:100%}:host([is-phone]) ::slotted([ui5-side-navigation][slot="sideContent"]){width:100%;box-shadow:none}.ui5-nl-content{flex:1;min-width:0;overflow:auto}:host([side-collapsed][is-phone]) .ui5-nl-aside{transform:translate(-100%)}:host([side-collapsed][is-phone]) :dir(rtl) .ui5-nl-aside{transform:translate(100%)}::slotted([ui5-shellbar][slot="header"]){padding-inline:.5rem}
`;var c=function(t,o,d,u){var l=arguments.length,n=l<3?o:u===null?u=Object.getOwnPropertyDescriptor(o,d):u,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,o,d,u);else for(var r=t.length-1;r>=0;r--)(h=t[r])&&(n=(l<3?h(n):l>3?h(o,d,n):h(o,d))||n);return l>3&&n&&Object.defineProperty(o,d,n),n};let i=class extends j{constructor(){super(...arguments),this._defaultSideCollapsed=S()||T()&&!N(),this.mode="Auto",this.sideCollapsed=this._defaultSideCollapsed,this.isPhone=S(),this.isTablet=T()&&!N()}isSideCollapsed(){return this.calcSideCollapsed(),this.sideCollapsed}onBeforeRendering(){if(this.calcSideCollapsed(),S())return;const o=this.sideContent[0];o&&(o.collapsed=this.isSideCollapsed())}calcSideCollapsed(){this.mode===p.Auto?this.sideCollapsed=this._defaultSideCollapsed:this.sideCollapsed=this.mode===p.Collapsed}};c([y()],i.prototype,"mode",void 0);c([y({type:Boolean})],i.prototype,"sideCollapsed",void 0);c([y({type:Boolean})],i.prototype,"isPhone",void 0);c([y({type:Boolean})],i.prototype,"isTablet",void 0);c([x()],i.prototype,"header",void 0);c([x()],i.prototype,"sideContent",void 0);c([x({type:HTMLElement,default:!0})],i.prototype,"content",void 0);i=c([$({tag:"ui5-navigation-layout",languageAware:!0,renderer:D,styles:[P,O],template:W})],i);i.define();const m=H("ui5-navigation-layout",["mode"],[],["header","sideContent"],[]);m.displayName="NavigationLayout";try{m.displayName="NavigationLayout",m.__docgenInfo={description:`The \`NavigationLayout\` is a container component that can be used to
create a layout with a header, a side navigation and a content area.

### Usage

Use the \`NavigationLayout\` to create whole screen of an application with vertical navigation.

### Responsive Behavior

On desktop and tablet devices, the side navigation is visible
by default and can be expanded or collapsed using the \`mode\` property.
On phone devices, the side navigation is hidden by default and can
be displayed using the \`mode\` property.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"NavigationLayout",props:{children:{defaultValue:null,description:"Defines the content.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the header.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},sideContent:{defaultValue:null,description:`Defines the side content.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="sideContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"sideContent",required:!1,type:{name:"UI5WCSlotsNode"}},mode:{defaultValue:{value:'"Auto"'},description:"Specifies the navigation layout mode.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"Auto"'},{value:'"Auto"'},{value:'"Collapsed"'},{value:'"Expanded"'},{value:'"Collapsed"'},{value:'"Expanded"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{m.displayName="NavigationLayout",m.__docgenInfo={description:`The \`NavigationLayout\` is a container component that can be used to
create a layout with a header, a side navigation and a content area.

### Usage

Use the \`NavigationLayout\` to create whole screen of an application with vertical navigation.

### Responsive Behavior

On desktop and tablet devices, the side navigation is visible
by default and can be expanded or collapsed using the \`mode\` property.
On phone devices, the side navigation is hidden by default and can
be displayed using the \`mode\` property.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"NavigationLayout",props:{children:{defaultValue:null,description:"Defines the content.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the header.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},sideContent:{defaultValue:null,description:`Defines the side content.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="sideContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"sideContent",required:!1,type:{name:"UI5WCSlotsNode"}},mode:{defaultValue:{value:'"Auto"'},description:"Specifies the navigation layout mode.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"Auto"'},{value:'"Auto"'},{value:'"Collapsed"'},{value:'"Expanded"'},{value:'"Collapsed"'},{value:'"Expanded"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const G="source-code",F="M51.3 248.031q-7.97 9.961 0 18.926L189.759 417.37q2.988 4.98 2.988 10.957 0 9.96-5.977 13.945-4.98 3.985-10.957 3.985-7.969 0-14.941-6.973L4.482 266.957q-8.964-8.965 0-18.926l156.39-177.307q6.972-6.973 14.941-6.973 16.934 0 16.934 17.93 0 6.973-2.988 10.957zm456.218 0q8.964 9.961 0 18.926l-156.39 172.327q-6.972 6.973-14.941 6.973-5.977 0-10.957-3.985-5.977-3.984-5.977-13.945 0-6.973 3.984-10.957l138.46-150.413q5.976-8.965 0-18.926L323.236 92.638q-3.984-3.984-3.984-10.957 0-17.93 16.934-17.93 7.969 0 14.941 6.973z",Y=!1,J="SAP-icons-v4",K="@ui5/webcomponents-icons";s(G,{pathData:F,ltr:Y,collection:J,packageName:K});const Q="source-code",X="M504 236q8 6 8 18 0 10-8 18L389 385q-7 7-18 7t-18-7.5-7-18.5 7-18l97-94-97-94q-7-7-7-18t7-18.5 18-7.5 18 7zM141 116q11 0 18 7.5t7 18.5-7 18l-97 94 97 94q7 7 7 18t-7 18.5-18 7.5-18-7L8 272q-8-8-8-18 0-12 8-18l115-113q7-7 18-7z",Z=!1,ee="SAP-icons-v5",te="@ui5/webcomponents-icons";s(Q,{pathData:X,ltr:Z,collection:ee,packageName:te});const oe="activity-assigned-to-goal",ne="M64 96q0-14 9-23t23-9h67q5-12 14.5-21T200 32q8-14 23-23t33-9 33 9 23 23q13 2 22.5 11T349 64h67q14 0 23 9t9 23v384q0 13-9 22.5t-23 9.5H96q-14 0-23-9.5T64 480V96zm32 384h320V96h-67q-5 13-12.5 22.5T313 128H199q-16 0-23.5-9.5T163 96H96v384zm160-320q27 0 50 10t40.5 27.5T374 238t10 50-10 50-27.5 40.5T306 406t-50 10-50-10-40.5-27.5T138 338t-10-50 10-50 27.5-40.5T206 170t50-10zm-96 128q0 40 28 68t68 28 68-28 28-68-28-68-68-28-68 28-28 68zm96-64q26 0 45 18.5t19 45.5q0 26-19 45t-45 19-45-19-19-45q0-27 19-45.5t45-18.5zM208 96h96q16 0 16-16t-16-16h-16q0-14-9-23t-23-9-23 9-9 23h-16q-16 0-16 16t16 16zm16 192q0 13 9 22.5t23 9.5 23-9.5 9-22.5q0-14-9-23t-23-9-23 9-9 23z",ae=!1,ie="SAP-icons-v4",se="@ui5/webcomponents-icons";s(oe,{pathData:ne,ltr:ae,collection:ie,packageName:se});const le="activity-assigned-to-goal",re="M166 461q11 0 18.5 7t7.5 18-7.5 18.5T166 512H90q-24 0-41-17t-17-41V122q0-24 17-41t41-17h38v-6q0-24 17-41t41-17h76q24 0 41 17t17 41v6h38q24 0 41 17t17 41v44q0 11-7.5 18.5T390 192t-18-7.5-7-18.5v-44q0-7-7-7h-39q-5 20-20.5 32.5T262 160h-76q-21 0-36.5-12.5T130 115H90q-7 0-7 7v332q0 7 7 7h76zm13-359q0 7 7 7h76q7 0 7-7V58q0-7-7-7h-76q-7 0-7 7v44zm173 154q27 0 50 10t40.5 27.5T470 334t10 50-10 50-27.5 40.5T402 502t-50 10-50-10-40.5-27.5T234 434t-10-50 10-50 27.5-40.5T302 266t50-10zm0 205q32 0 54.5-22.5T429 384t-22.5-54.5T352 307t-54.5 22.5T275 384t22.5 54.5T352 461zm0-109q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9z",ce=!1,de="SAP-icons-v5",pe="@ui5/webcomponents-icons";s(le,{pathData:re,ltr:ce,collection:de,packageName:pe});const me="document-text",ue="M416 0q14 0 23 9.5t9 22.5v448q0 14-9 23t-22 9H97q-14 0-23.5-9T64 480V128L192 0h224zm1 480l-1-448H224v96q0 14-9.5 23t-22.5 9H96v320h321zm-81-96q16 0 16 16 0 6-4.5 11t-11.5 5H176q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h160zm0-64q16 0 16 16 0 6-4.5 11t-11.5 5H176q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h160z",he=!1,ge="SAP-icons-v4",ve="@ui5/webcomponents-icons";s(me,{pathData:ue,ltr:he,collection:ge,packageName:ve});const fe="document-text",be="M422 0q11 0 18.5 7.5T448 26v460q0 11-7.5 18.5T422 512H90q-11 0-18.5-7.5T64 486V192q0-10 6-17L213 9q6-9 19-9h190zm-25 51H244l-20 24v66q0 21-15 36t-36 15h-50l-8 9v260h282V51zM160 282q0-11 7.5-18.5T186 256h140q11 0 18.5 7.5T352 282t-7.5 18-18.5 7H186q-11 0-18.5-7t-7.5-18zm166 70q11 0 18.5 7.5T352 378t-7.5 18-18.5 7H186q-11 0-18.5-7t-7.5-18 7.5-18.5T186 352h140z",qe=!1,ye="SAP-icons-v5",Se="@ui5/webcomponents-icons";s(fe,{pathData:be,ltr:qe,collection:ye,packageName:Se});const xe="compare",we="M40 288L87 96h-5q-16 0-16-16t16-16h112q0-26 18.5-45T258 0q26 0 45 19t19 45h112q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-7l47 192h4q-5 28-27 46t-51 18-51-18-27-46h4l47-192h-60q-9 15-23 23v361h112q6 0 11 4.5t5 11.5-5 11.5-11 4.5H114q-16 0-16-16t16-16h112V119q-16-7-24-23h-62l48 192h4q-6 28-27.5 46T114 352t-51-18-28-46h5zm16 0h115L124 96h-21zm287 0h114L410 96h-20zM226 64q0 14 9 23t23 9q13 0 22.5-9t9.5-23-9.5-23-22.5-9q-14 0-23 9t-9 23z",Te=!1,Ne="SAP-icons-v4",_e="@ui5/webcomponents-icons";s(xe,{pathData:we,ltr:Te,collection:Ne,packageName:_e});const Ce="compare",Ie="M486 461q11 0 18.5 7t7.5 18-7.5 18.5T486 512H26q-11 0-18.5-7.5T0 486t7.5-18 18.5-7h205V122q-25-11-35-39h-58v32l26 63q20 49 24.5 69.5T193 277q0 30-23.5 52.5T113 352t-56.5-22.5T33 277q0-5 1-11.5t4-18 8.5-28T62 178l25-60V58q0-11 7.5-18.5T113 32h89q8-14 22.5-23T257 0t32.5 9T312 32h88q11 0 18.5 7.5T426 58v59l25 61q20 49 24.5 69.5T480 277q0 30-23.5 52.5T400 352t-56.5-22.5T320 277q0-5 1-11.5t4-18 8.5-28T349 178l26-63V83h-57q-9 27-36 40v338h204zm-62-205l-24-68-24 68h48zm-287 0l-24-68-24 68h48z",ke=!1,ze="SAP-icons-v5",Le="@ui5/webcomponents-icons";s(Ce,{pathData:Ie,ltr:ke,collection:ze,packageName:Le});const $e="locked",De="M276 382l44 66H192l43-66q-14-6-21.5-18.5T206 337q0-20 15-35 13-14 35-14 21 0 35 14 14 16 14 35 0 14-7.5 26.5T276 382zm156-94v160q0 26-19 45t-45 19H144q-26 0-45-19t-19-45V288q0-17 9-33.5t26-23.5v-99q0-27 10.5-51t28-41.5 41.5-28T246 1h20q27 0 51 10.5t41.5 28 28 41.5 10.5 51v99q16 8 25.5 23.5T432 288zm-259-64h166v-92q0-30-21.5-51.5T266 59h-20q-30 0-51.5 21.5T173 132v92zm227 64q0-14-9-23-10-9-23-9H144q-14 0-23 9t-9 23v160q0 13 9.5 22.5T144 480h224q11 0 23-10 9-9 9-22V288z",je=!1,He="SAP-icons-v4",Me="@ui5/webcomponents-icons";s($e,{pathData:De,ltr:je,collection:He,packageName:Me});const Re="locked",Ve="M384 224q26 4 45 25t19 48v142q0 30-21.5 51.5T375 512H137q-30 0-51.5-21.5T64 439V297q0-29 18-50t46-23v-96q0-27 10-50t27.5-40.5 41-27.5T256 0q27 0 50 10t40.5 27.5T374 78t10 50v96zM256 51q-32 0-54.5 22.5T179 128v96h154v-96q0-32-22.5-54.5T256 51zm141 246q0-9-6.5-15.5T375 275H137q-22 0-22 22v142q0 9 6.5 15.5T137 461h238q9 0 15.5-6.5T397 439V297zm-141 23q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14z",Ue=!1,Ae="SAP-icons-v5",Be="@ui5/webcomponents-icons";s(Re,{pathData:Ve,ltr:Ue,collection:Ae,packageName:Be});const Ee={title:"Layouts & Floorplans / NavigationLayout",component:m,argTypes:{header:{control:{disable:!0}},sideContent:{control:{disable:!0}},children:{control:{disable:!0}}},args:{mode:p.Auto},tags:["package:@ui5/webcomponents-fiori"]},f={render:t=>{const[o,d]=b.useState("Home"),[u,l]=b.useState(t.mode),n=b.useRef(null),h=r=>{d(r.detail.item.text)};return b.useEffect(()=>{l(t.mode)},[t.mode]),e.jsx("div",{style:{position:"relative",height:"800px"},children:e.jsx(m,{...t,ref:n,mode:u,header:e.jsx(V,{startButton:e.jsx(R,{icon:L,onClick:()=>{var r;(r=n.current)!=null&&r.isSideCollapsed()?l(p.Expanded):l(p.Collapsed)}}),primaryTitle:"UI5 Web Components for React",secondaryTitle:"The Best Run SAP"}),sideContent:e.jsxs(M,{slot:"sideContent",onSelectionChange:h,children:[e.jsx(a,{text:"Home",icon:"home"}),e.jsxs(_,{text:"Group 1",expanded:!0,children:[e.jsxs(a,{text:"Item 1",icon:"locate-me",expanded:!0,children:[e.jsx(v,{text:"Sub Item 1"}),e.jsx(v,{text:"Sub Item 2"})]}),e.jsxs(a,{text:"Item 2",icon:"calendar",expanded:!0,children:[e.jsx(v,{text:"Sub Item 3"}),e.jsx(v,{text:"Sub Item 4"})]}),e.jsxs(a,{text:"Item 3",icon:"activity-assigned-to-goal",expanded:!0,children:[e.jsx(v,{text:"Sub Item 5"}),e.jsx(v,{text:"Sub Item 6"})]})]}),e.jsxs(_,{text:"Group 2",expanded:!0,children:[e.jsx(a,{text:"Item 4",icon:"history"}),e.jsx(a,{text:"Item 5",icon:"source-code"}),e.jsx(a,{text:"Item 6",icon:"background"})]}),e.jsx(a,{slot:"fixedItems",text:"Legal",href:"https://www.sap.com/about/legal/impressum.html",target:"_blank",icon:"compare"}),e.jsx(a,{slot:"fixedItems",text:"Privacy",href:"https://www.sap.com/about/legal/privacy.html",target:"_blank",icon:"locked"}),e.jsx(a,{slot:"fixedItems",text:"Terms of Use",href:"https://www.sap.com/terms-of-use",target:"_blank",icon:"document-text"})]}),children:e.jsx("div",{style:{padding:"1rem"},children:e.jsxs("div",{children:[e.jsx(A,{children:o}),e.jsx("br",{}),e.jsx(U,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})})})})}};var C,I,k;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const [selectedContent, setSelectedContent] = useState('Home');
    const [mode, setMode] = useState(args.mode);
    const navigationLayoutRef = useRef<NavigationLayoutDomRef>(null);
    const handleSelectionChange: SideNavigationPropTypes['onSelectionChange'] = e => {
      setSelectedContent(e.detail.item.text);
    };
    useEffect(() => {
      setMode(args.mode);
    }, [args.mode]);
    return <div style={{
      position: 'relative',
      height: '800px'
    }}>
        <NavigationLayout {...args} ref={navigationLayoutRef} mode={mode} header={<ShellBar startButton={<Button icon={menuIcon} onClick={() => {
        if (navigationLayoutRef.current?.isSideCollapsed()) {
          setMode(NavigationLayoutMode.Expanded);
        } else {
          setMode(NavigationLayoutMode.Collapsed);
        }
      }} />} primaryTitle="UI5 Web Components for React" secondaryTitle="The Best Run SAP" />} sideContent={<SideNavigation slot="sideContent" onSelectionChange={handleSelectionChange}>
              <SideNavigationItem text="Home" icon="home" />
              <SideNavigationGroup text="Group 1" expanded>
                <SideNavigationItem text="Item 1" icon="locate-me" expanded>
                  <SideNavigationSubItem text="Sub Item 1" />
                  <SideNavigationSubItem text="Sub Item 2" />
                </SideNavigationItem>
                <SideNavigationItem text="Item 2" icon="calendar" expanded>
                  <SideNavigationSubItem text="Sub Item 3" />
                  <SideNavigationSubItem text="Sub Item 4" />
                </SideNavigationItem>
                <SideNavigationItem text="Item 3" icon="activity-assigned-to-goal" expanded>
                  <SideNavigationSubItem text="Sub Item 5" />
                  <SideNavigationSubItem text="Sub Item 6" />
                </SideNavigationItem>
              </SideNavigationGroup>
              <SideNavigationGroup text="Group 2" expanded>
                <SideNavigationItem text="Item 4" icon="history" />
                <SideNavigationItem text="Item 5" icon="source-code" />
                <SideNavigationItem text="Item 6" icon="background" />
              </SideNavigationGroup>

              <SideNavigationItem slot="fixedItems" text="Legal" href="https://www.sap.com/about/legal/impressum.html" target="_blank" icon="compare" />
              <SideNavigationItem slot="fixedItems" text="Privacy" href="https://www.sap.com/about/legal/privacy.html" target="_blank" icon="locked" />
              <SideNavigationItem slot="fixedItems" text="Terms of Use" href="https://www.sap.com/terms-of-use" target="_blank" icon="document-text" />
            </SideNavigation>}>
          <div style={{
          padding: '1rem'
        }}>
            <div>
              <Title>{selectedContent}</Title>
              <br />
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Text>
            </div>
          </div>
        </NavigationLayout>
      </div>;
  }
}`,...(k=(I=f.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};const Pe=["Default"],rt=Object.freeze(Object.defineProperty({__proto__:null,Default:f,__namedExportsOrder:Pe,default:Ee},Symbol.toStringTag,{value:"Module"}));export{rt as C,f as D};
