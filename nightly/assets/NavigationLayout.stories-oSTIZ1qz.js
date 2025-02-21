import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{m as D}from"./menu-DAW7OqaG.js";import{p as b,d as k,b as T,j as g,s as y,m as L,k as M,S as j,x as S,W as w,a0 as N,w as H}from"./jsx-runtime-28PG-PhA.js";import"./home-BsLZMQ2O.js";import{S as V,a as i,c as _,b as v}from"./chain-link-Bc-PahQm.js";import"./calendar-CPKevPpq.js";import{f as o}from"./Icon-BA-Z5X-C.js";import"./background-C3yCMxBW.js";import{t as $}from"./i18n-defaults-u2_1ijdO.js";import{r as f}from"./index-C--kS4iy.js";import{B as A}from"./index-BERigoy7.js";import{S as R}from"./index-C4RauJMb.js";import{T as U}from"./index-u200OysQ.js";import{T as P}from"./index-BIn0gi5T.js";import{d as x}from"./slot-_4yKMUwC.js";import{d as B}from"./parameters-bundle.css-Ct2Rzfjz.js";import{d as E}from"./parameters-bundle.css-T5fm-BBu.js";b("@ui5/webcomponents-theming","sap_horizon",async()=>k);b("@ui5/webcomponents","sap_horizon",async()=>B);const W=`::-webkit-scrollbar:horizontal{height:var(--sapScrollBar_Dimension)}::-webkit-scrollbar:vertical{width:var(--sapScrollBar_Dimension)}::-webkit-scrollbar{background-color:var(--sapScrollBar_TrackColor);border-left:none}::-webkit-scrollbar-thumb{border-radius:var(--sapElement_BorderCornerRadius);background-color:var(--sapScrollBar_FaceColor)}::-webkit-scrollbar-thumb:hover{background-color:var(--sapScrollBar_Hover_FaceColor)}::-webkit-scrollbar-corner{background-color:var(--sapScrollBar_TrackColor)}
`;var p;(function(t){t.Auto="Auto",t.Collapsed="Collapsed",t.Expanded="Expanded"})(p||(p={}));function O(){return T("div",{class:"ui5-nl-root",children:[g("header",{class:"ui5-nl-header",children:g("slot",{name:"header"})}),T("section",{class:"ui5-nl-section",children:[g("aside",{class:"ui5-nl-aside",children:g("slot",{name:"sideContent"})}),g("div",{class:"ui5-nl-content",children:g("slot",{})})]})]})}b("@ui5/webcomponents-theming","sap_horizon",async()=>k);b("@ui5/webcomponents-fiori","sap_horizon",async()=>E);const G=`:host(:not([hidden])){position:absolute;inset:0;display:block;background:var(--sapBackgroundColor);box-sizing:border-box;overflow:hidden}.ui5-nl-root{width:100%;height:100%;display:flex;flex-direction:column;box-sizing:border-box}.ui5-nl-header{box-shadow:var(--sapShell_Shadow);z-index:2}.ui5-nl-section{display:flex;flex:1;min-height:0;position:relative}.ui5-nl-aside{transition:transform .3s;z-index:1}:host([is-phone]) .ui5-nl-aside{position:absolute;top:0;left:0;bottom:0;width:100%}:host([is-phone]) ::slotted([ui5-side-navigation][slot="sideContent"]){width:100%;box-shadow:none}.ui5-nl-content{flex:1;min-width:0;overflow:auto}:host([side-collapsed][is-phone]) .ui5-nl-aside{transform:translate(-100%)}:host([side-collapsed][is-phone]) :dir(rtl) .ui5-nl-aside{transform:translate(100%)}::slotted([ui5-shellbar][slot="header"]){padding-inline:.5rem}
`;var c=function(t,a,d,h){var l=arguments.length,n=l<3?a:h===null?h=Object.getOwnPropertyDescriptor(a,d):h,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,a,d,h);else for(var r=t.length-1;r>=0;r--)(u=t[r])&&(n=(l<3?u(n):l>3?u(a,d,n):u(a,d))||n);return l>3&&n&&Object.defineProperty(a,d,n),n};let s=class extends j{constructor(){super(...arguments),this._defaultSideCollapsed=S()||w()&&!N(),this.mode="Auto",this.sideCollapsed=this._defaultSideCollapsed,this.isPhone=S(),this.isTablet=w()&&!N()}isSideCollapsed(){return this.calcSideCollapsed(),this.sideCollapsed}onBeforeRendering(){if(this.calcSideCollapsed(),S())return;const a=this.sideContent[0];a&&(a.collapsed=this.isSideCollapsed())}calcSideCollapsed(){this.mode===p.Auto?this.sideCollapsed=this._defaultSideCollapsed:this.sideCollapsed=this.mode===p.Collapsed}};c([y()],s.prototype,"mode",void 0);c([y({type:Boolean})],s.prototype,"sideCollapsed",void 0);c([y({type:Boolean})],s.prototype,"isPhone",void 0);c([y({type:Boolean})],s.prototype,"isTablet",void 0);c([x()],s.prototype,"header",void 0);c([x()],s.prototype,"sideContent",void 0);c([x({type:HTMLElement,default:!0})],s.prototype,"content",void 0);s=c([L({tag:"ui5-navigation-layout",languageAware:!0,renderer:M,styles:[W,G],template:O})],s);s.define();const m=H("ui5-navigation-layout",["mode"],[],["header","sideContent"],[]);m.displayName="NavigationLayout";try{m.displayName="NavigationLayout",m.__docgenInfo={description:`The \`NavigationLayout\` is a container component that can be used to
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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const F="source-code",Q="M51.697 247.55q-3.977 4.97-3.977 9.941 0 3.977 3.977 8.948l138.19 150.12q2.983 4.971 2.983 10.936 0 9.942-5.965 13.919-4.971 3.976-10.936 3.976-7.953 0-14.913-6.959L4.971 266.44Q0 261.468 0 257.49q0-4.97 4.97-9.941L161.057 70.586q6.96-6.959 14.913-6.959 16.9 0 16.9 17.895 0 6.96-2.982 10.936zm455.332 0Q512 252.52 512 257.49q0 3.977-4.97 8.948L350.943 438.43q-6.96 6.96-14.913 6.96-5.965 0-10.936-3.977-5.965-3.977-5.965-13.919 0-6.96 3.977-10.936l138.19-150.12q2.983-4.971 2.983-8.948 0-4.97-2.983-9.941L323.107 92.458q-3.977-3.976-3.977-10.936 0-17.895 16.901-17.895 7.953 0 14.913 6.96z",J=!1,K="SAP-icons-v4",X="@ui5/webcomponents-icons";o(F,{pathData:Q,ltr:J,collection:K,packageName:X});const Y="source-code",Z="M141 116q11 0 18 7.5t7 18.5-7 18l-97 94 97 94q7 7 7 18t-7 18.5-18 7.5-18-7L8 272q-8-6-8-18t8-18l115-113q7-7 18-7zm363 120q8 6 8 18t-8 18L389 385q-7 7-18 7t-18-7.5-7-18.5 7-18l97-94-97-94q-7-7-7-18t7-18.5 18-7.5 18 7z",ee=!1,te="SAP-icons-v5",oe="@ui5/webcomponents-icons";o(Y,{pathData:Z,ltr:ee,collection:te,packageName:oe});const ae="activity-assigned-to-goal",ne="M64 96q0-14 9-23t23-9h67q5-12 14.5-21T200 32q8-14 23-23t33-9 33 9 23 23q13 2 22.5 11T349 64h67q14 0 23 9t9 23v384q0 13-9 22.5t-23 9.5H96q-14 0-23-9.5T64 480V96zm32 384h320V96h-67q-5 13-12.5 22.5T313 128H199q-16 0-23.5-9.5T163 96H96v384zm160-320q27 0 50 10t40.5 27.5T374 238t10 50-10 50-27.5 40.5T306 406t-50 10-50-10-40.5-27.5T138 338t-10-50 10-50 27.5-40.5T206 170t50-10zm-96 128q0 40 28 68t68 28 68-28 28-68-28-68-68-28-68 28-28 68zm96-64q26 0 45 18.5t19 45.5q0 26-19 45t-45 19-45-19-19-45q0-27 19-45.5t45-18.5zM208 96h96q16 0 16-16t-16-16h-16q0-14-9-23t-23-9-23 9-9 23h-16q-16 0-16 16t16 16zm16 192q0 13 9 22.5t23 9.5 23-9.5 9-22.5q0-14-9-23t-23-9-23 9-9 23z",ie=!1,se="SAP-icons-v4",le="@ui5/webcomponents-icons";o(ae,{pathData:ne,ltr:ie,collection:se,packageName:le});const re="activity-assigned-to-goal",ce="M166 461q11 0 18.5 7t7.5 18-7.5 18.5T166 512H90q-24 0-41-17t-17-41V122q0-24 17-41t41-17h38v-6q0-24 17-41t41-17h76q24 0 41 17t17 41v6h38q24 0 41 17t17 41v44q0 11-7.5 18.5T390 192t-18-7.5-7-18.5v-44q0-7-7-7h-39q-5 20-20.5 32.5T262 160h-76q-21 0-36.5-12.5T129 115H90q-7 0-7 7v332q0 7 7 7h76zm186-205q27 0 50 10t40.5 27.5T470 334t10 50-10 50-27.5 40.5T402 502t-50 10-50-10-40.5-27.5T234 434t-10-50 10-50 27.5-40.5T302 266t50-10zm0 96q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm0 109q32 0 54.5-22.5T429 384t-22.5-54.5T352 307t-54.5 22.5T275 384t22.5 54.5T352 461zM179 102q0 7 7 7h76q7 0 7-7V58q0-7-7-7h-76q-7 0-7 7v44z",de=!1,pe="SAP-icons-v5",me="@ui5/webcomponents-icons";o(re,{pathData:ce,ltr:de,collection:pe,packageName:me});const he="action-settings",ue="M193 256q0 17 8.5 31.5T224 310q14 9 32 9 6 0 16-2 12-4 21-10.5t16-18.5q9-14 9-32 0-19-9-32-7-12-16-18.5T272 195q-10-2-16-2-18 0-32 9-14 8-22.5 22.5T193 256zM32 224v64h49q3 10 5.5 17.5T92 320q3 8 7.5 16.5T110 357l-35 35 45 45 35-35q17 10 34 17t35 12v49h64v-50q10-3 17.5-5.5T320 420q8-4 17-8t20-10l35 35 45-45-35-36q9-17 15.5-33.5T430 288h50v-64h-50q-10-36-28-68l35-36-45-45-35 35q-17-10-33.5-16.5T288 82V32h-64v49l-16 5-16 6-18 8q-9 4-19 10l-35-35-45 45 35 35q-18 34-29 69H32zm135 0l3-9q3-6 7-12t9-11q10-10 18-15.5t20-10.5q17-5 32-5 17 0 32 6l9 3 12 8q6 4 11 9 3 2 5 5 13 12 19 32 6 15 6 32t-6 32q-6 19-19 32-2 3-5 5-5 5-23 17l-9 3q-15 6-32 6-15 0-32-5-12-5-20-10.5T186 320q-5-5-9-11t-7-12l-3-9q-6-15-6-32t6-32zM0 224q0-14 9-23t23-9h26q2-8 5.5-15.5T71 161l-19-18q-9-10-9-23t9-22l46-46q9-9 22-9 14 0 23 9l18 19q8-4 15.5-7.5T192 58V32q0-14 9-23t23-9h64q14 0 23 9t9 23v26q8 3 15.5 6t14.5 7l19-19q9-9 23-9 13 0 22 9l46 46q9 9 9 22t-9 23l-19 19q8 13 12 30h27q14 0 23 9t9 23v64q0 14-9 23t-23 9h-27q-4 16-12 30l19 19q9 10 9 23t-9 22l-46 46q-9 9-22 9-14 0-23-9l-19-19q-7 4-14.5 7t-15.5 6v26q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-26q-8-2-15.5-5.5T161 441l-18 19q-9 9-23 9-13 0-22-9l-46-46q-9-9-9-22t9-23l19-18q-4-8-7.5-15.5T58 320H32q-14 0-23-9t-9-23v-64z",ge=!1,ve=$,qe="SAP-icons-v4",fe="@ui5/webcomponents-icons";o(he,{pathData:ue,ltr:ge,accData:ve,collection:qe,packageName:fe});const be="action-settings",ye="M475 299q11 8 16 19t5 22q0 12-6 23l-18 37q-7 14-19.5 21t-26.5 7q-10 0-19-3l-31-13-45 27-7 32q-4 18-18 29.5T274 512h-36q-18 0-32-11.5T188 471l-7-32-45-27-31 13q-9 3-19 3-14 0-26.5-7T40 400l-18-37q-6-9-6-21 0-28 29-48l16-13v-50l-24-18q-11-8-16-19t-5-22q0-12 6-24l18-36q7-14 19.5-21T86 84q11 0 20 4l30 12 45-26 7-33q4-18 18-29.5T238 0h36q18 0 32 11.5T324 41l7 32 44 27 25-10q15-5 26-5 32 0 46 27l18 36q6 12 6 24 0 11-5 22t-16 19l-24 17v51zM256 160q40 0 68 28t28 68-28 68-68 28-68-28-28-68 28-68 68-28zm165 163q-21-16-21-41v-52q0-25 21-41l24-18-19-36-31 13q-9 3-19 3-16 0-27-7l-44-27q-19-10-24-33l-7-33h-36l-7 33q-5 23-24 33l-44 27q-11 7-27 7-10 0-19-3l-31-13-19 36 24 18q21 15 21 41v52q0 26-21 41l-24 17 19 37 27-10q8-4 13-5t10-1q13 0 27 7l44 26q19 12 24 34l7 33h36l7-33q5-22 24-34l44-26q14-7 26-7 11 0 20 4l30 12 20-37zm-165-22q19 0 32-13t13-32-13-32-32-13-32 13-13 32 13 32 32 13z",Se=!1,xe=$,Te="SAP-icons-v5",we="@ui5/webcomponents-icons";o(be,{pathData:ye,ltr:Se,accData:xe,collection:Te,packageName:we});const Ne="document-text",_e="M416 0q14 0 23 9.5t9 22.5v448q0 14-9 23t-22 9H97q-14 0-23.5-9T64 480V128L192 0h224zm1 480l-1-448H224v96q0 14-9.5 23t-22.5 9H96v320h321zm-81-96q16 0 16 16 0 6-4.5 11t-11.5 5H176q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h160zm0-64q16 0 16 16 0 6-4.5 11t-11.5 5H176q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h160z",Ce=!1,Ie="SAP-icons-v4",ze="@ui5/webcomponents-icons";o(Ne,{pathData:_e,ltr:Ce,collection:Ie,packageName:ze});const ke="document-text",$e="M422 0q11 0 18.5 7.5T448 26v460q0 11-7.5 18.5T422 512H90q-11 0-18.5-7.5T64 486V192q0-10 6-17L213 9q6-9 19-9h190zm-96 352q11 0 18.5 7.5T352 378t-7.5 18-18.5 7H186q-11 0-18.5-7t-7.5-18 7.5-18.5T186 352h140zm-166-70q0-11 7.5-18.5T186 256h140q11 0 18.5 7.5T352 282t-7.5 18-18.5 7H186q-11 0-18.5-7t-7.5-18zM397 51H244l-20 24v66q0 21-15 36t-36 15h-50l-8 9v260h282V51z",De=!1,Le="SAP-icons-v5",Me="@ui5/webcomponents-icons";o(ke,{pathData:$e,ltr:De,collection:Le,packageName:Me});const je="compare",He="M40 288L87 96h-5q-16 0-16-16t16-16h112q0-26 18.5-45T258 0q26 0 45 19t19 45h112q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-7l47 192h4q-5 28-27 46t-51 18-51-18-27-46h4l47-192h-60q-9 15-23 23v361h112q6 0 11 4.5t5 11.5-5 11.5-11 4.5H114q-16 0-16-16t16-16h112V119q-16-7-24-23h-62l48 192h4q-6 28-27.5 46T114 352t-51-18-28-46h5zm16 0h115L124 96h-21zm287 0h114L410 96h-20zM226 64q0 14 9 23t23 9q13 0 22.5-9t9.5-23-9.5-23-22.5-9q-14 0-23 9t-9 23z",Ve=!1,Ae="SAP-icons-v4",Re="@ui5/webcomponents-icons";o(je,{pathData:He,ltr:Ve,collection:Ae,packageName:Re});const Ue="compare",Pe="M486 461q11 0 18.5 7t7.5 18-7.5 18.5T486 512H26q-11 0-18.5-7.5T0 486t7.5-18 18.5-7h205V122q-25-11-35-39h-58v32l26 64q10 24 15.5 41t8.5 28 4 17.5 1 11.5q0 31-23.5 53T113 352t-56.5-22T33 277q0-9 5-29t24-69l25-61V58q0-11 7.5-18.5T113 32h89q8-14 22.5-23T257 0t32.5 9T312 32h88q11 0 18.5 7.5T426 58v59l25 62q10 24 15.5 41t8.5 28 4 17.5 1 11.5q0 31-23.5 53T400 352t-56.5-22-23.5-53q0-9 5-29t24-69l26-64V83h-57q-9 27-36 40v338h204zM137 256l-24-68-24 68h48zm287 0l-24-68-24 68h48z",Be=!1,Ee="SAP-icons-v5",We="@ui5/webcomponents-icons";o(Ue,{pathData:Pe,ltr:Be,collection:Ee,packageName:We});const Oe="locked",Ge="M400 288q0-14-9-23-10-9-23-9H144q-14 0-23 9t-9 23v160q0 13 9.5 22.5T144 480h224q11 0 23-10 9-9 9-22V288zm-227-64h166v-92q0-30-21.5-51.5T266 59h-20q-30 0-51.5 21.5T173 132v92zm259 64v160q0 26-19 45t-45 19H144q-26 0-45-19t-19-45V288q0-17 9-33.5t26-23.5v-99q0-27 10.5-51t28-41.5 41.5-28T246 1h20q27 0 51 10.5t41.5 28 28 41.5 10.5 51v99q16 8 25.5 23.5T432 288zm-156 94l44 66H192l43-66q-14-6-21.5-18.5T206 337q0-20 15-35 13-14 35-14 21 0 35 14 14 16 14 35 0 14-7.5 26.5T276 382z",Fe=!1,Qe="SAP-icons-v4",Je="@ui5/webcomponents-icons";o(Oe,{pathData:Ge,ltr:Fe,collection:Qe,packageName:Je});const Ke="locked",Xe="M384 224q26 4 45 25t19 48v142q0 30-21.5 51.5T375 512H137q-30 0-51.5-21.5T64 439V297q0-29 18-50t46-23v-96q0-26 10-49.5t27.5-41 41-27.5T256 0q27 0 50 10t40.5 27.5 27.5 41 10 49.5v96zm-128 96q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm141-23q0-9-6.5-15.5T375 275H137q-22 0-22 22v142q0 9 6.5 15.5T137 461h238q9 0 15.5-6.5T397 439V297zM256 51q-32 0-54.5 22.5T179 128v96h154v-96q0-32-22.5-54.5T256 51z",Ye=!1,Ze="SAP-icons-v5",et="@ui5/webcomponents-icons";o(Ke,{pathData:Xe,ltr:Ye,collection:Ze,packageName:et});const tt={title:"Layouts & Floorplans / NavigationLayout",component:m,argTypes:{header:{control:{disable:!0}},sideContent:{control:{disable:!0}},children:{control:{disable:!0}}},args:{mode:p.Auto},tags:["package:@ui5/webcomponents-fiori"]},q={render:t=>{const[a,d]=f.useState("Home"),[h,l]=f.useState(t.mode),n=f.useRef(null),u=r=>{d(r.detail.item.text)};return f.useEffect(()=>{l(t.mode)},[t.mode]),e.jsx("div",{style:{position:"relative",height:"800px"},children:e.jsx(m,{...t,ref:n,mode:h,header:e.jsx(R,{startButton:e.jsx(A,{icon:D,onClick:()=>{var r;(r=n.current)!=null&&r.isSideCollapsed()?l(p.Expanded):l(p.Collapsed)}}),primaryTitle:"UI5 Web Components for React",secondaryTitle:"The Best Run SAP"}),sideContent:e.jsxs(V,{slot:"sideContent",onSelectionChange:u,children:[e.jsx(i,{text:"Home",icon:"home"}),e.jsxs(_,{text:"Group 1",expanded:!0,children:[e.jsxs(i,{text:"Item 1",icon:"locate-me",expanded:!0,children:[e.jsx(v,{text:"Sub Item 1"}),e.jsx(v,{text:"Sub Item 2"})]}),e.jsxs(i,{text:"Item 2",icon:"calendar",expanded:!0,children:[e.jsx(v,{text:"Sub Item 3"}),e.jsx(v,{text:"Sub Item 4"})]}),e.jsxs(i,{text:"Item 3",icon:"activity-assigned-to-goal",expanded:!0,children:[e.jsx(v,{text:"Sub Item 5"}),e.jsx(v,{text:"Sub Item 6"})]})]}),e.jsxs(_,{text:"Group 2",expanded:!0,children:[e.jsx(i,{text:"Item 4",icon:"history"}),e.jsx(i,{text:"Item 5",icon:"source-code"}),e.jsx(i,{text:"Item 6",icon:"background"})]}),e.jsx(i,{slot:"fixedItems",text:"Legal",href:"https://www.sap.com/about/legal/impressum.html",target:"_blank",icon:"compare"}),e.jsx(i,{slot:"fixedItems",text:"Privacy",href:"https://www.sap.com/about/legal/privacy.html",target:"_blank",icon:"locked"}),e.jsx(i,{slot:"fixedItems",text:"Terms of Use",href:"https://www.sap.com/terms-of-use",target:"_blank",icon:"document-text"})]}),children:e.jsx("div",{style:{padding:"1rem"},children:e.jsxs("div",{children:[e.jsx(P,{children:a}),e.jsx("br",{}),e.jsx(U,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})})})})}};var C,I,z;q.parameters={...q.parameters,docs:{...(C=q.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(z=(I=q.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};const ot=["Default"],St=Object.freeze(Object.defineProperty({__proto__:null,Default:q,__namedExportsOrder:ot,default:tt},Symbol.toStringTag,{value:"Module"}));export{St as C,q as D};
