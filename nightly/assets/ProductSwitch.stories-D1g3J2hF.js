import{j as w}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import{h as c,f as q,s as N,a as d,m as D,k as C,I as z,w as E,j as y}from"./withWebComponent-DykTwaBJ.js";import{I as H,f as p}from"./Icon-C1aVUqaK.js";import{h as O}from"./home-CFrNefS4.js";import{_ as R}from"./iframe-BKMnmR8u.js";import{D as A,c as L,f as j,a as g,b as S,i as M}from"./Keys-F_3Gvx0K.js";import{s as T}from"./event-Dq0fpeHi.js";import{l as n}from"./if-defined-Pg2MF6OO.js";import{s as V}from"./parameters-bundle.css-BwFDz0XS.js";import{f as U}from"./i18nBundle-CEPDwMcb.js";import{f as F}from"./ItemNavigation-CJ0Lvk1x.js";import{d as B}from"./slot-_4yKMUwC.js";import{f as k}from"./ResizeHandler-CwA30WlK.js";import{b4 as W}from"./i18n-defaults-b5hpskr8.js";function K(o,t,e){return c`<div class="ui5-product-switch-root" role="list" aria-label="${n(this._ariaLabelText)}" @focusin=${this._onfocusin} @keydown=${this._onkeydown} @click="${this.handleProductSwitchItemClick}"><slot></slot></div>`}q("@ui5/webcomponents-theming","sap_horizon",async()=>N);q("@ui5/webcomponents-fiori","sap_horizon",async()=>V);const G={packageName:"@ui5/webcomponents-fiori",fileName:"themes/ProductSwitch.css.ts",content:`:host{font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize)}.ui5-product-switch-root{display:flex;flex-wrap:wrap;justify-content:inherit;align-items:inherit;width:752px;padding:1.25rem .75rem}:host([desktop-columns="3"]) .ui5-product-switch-root{width:564px}@media only screen and (max-width: 900px){.ui5-product-switch-root{width:564px}}@media only screen and (max-width: 600px){.ui5-product-switch-root,:host([desktop-columns="3"]) .ui5-product-switch-root{flex-direction:column;padding:0;width:100%}}
`};var x=function(o,t,e,a){var l=arguments.length,i=l<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,e):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,a);else for(var m=o.length-1;m>=0;m--)(u=o[m])&&(i=(l<3?u(i):l>3?u(t,e,i):u(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i},v;let _=v=class extends z{constructor(){super(),this._currentIndex=0,this._rowSize=4,this._itemNavigation=new F(this,{rowSize:this._rowSize,getItemsCallback:()=>this.items}),this._handleResizeBound=this._handleResize.bind(this)}static get ROW_MIN_WIDTH(){return{ONE_COLUMN:600,THREE_COLUMN:900}}static async onDefine(){v.i18nBundle=await U("@ui5/webcomponents-fiori")}get _ariaLabelText(){return v.i18nBundle.getText(W)}onEnterDOM(){k.register(document.body,this._handleResizeBound)}onExitDOM(){k.deregister(document.body,this._handleResizeBound)}onBeforeRendering(){this.desktopColumns=this.items.length>6?4:3}_handleResize(){const t=document.body.clientWidth;t<=this.constructor.ROW_MIN_WIDTH.ONE_COLUMN?this._setRowSize(1):t<=this.constructor.ROW_MIN_WIDTH.THREE_COLUMN||this.items.length<=6?this._setRowSize(3):this._setRowSize(4)}handleProductSwitchItemClick(t){this.items.forEach(e=>{e.selected=!1}),t.target.selected=!0}_onfocusin(t){const e=t.target;this._itemNavigation.setCurrentItem(e),this._currentIndex=this.items.indexOf(e)}_setRowSize(t){this._rowSize=t,this._itemNavigation.setRowSize(t)}_onkeydown(t){A(t)?this._handleDown(t):L(t)&&this._handleUp(t)}_handleDown(t){const e=this.items.length;this._currentIndex+this._rowSize>e&&t.stopPropagation()}_handleUp(t){this._currentIndex-this._rowSize<0&&t.stopPropagation()}};x([d({type:Number})],_.prototype,"desktopColumns",void 0);x([B({type:HTMLElement,default:!0})],_.prototype,"items",void 0);_=v=x([D({tag:"ui5-product-switch",renderer:C,styles:G,template:K})],_);_.define();const J=_,Q=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),f=E("ui5-product-switch",[],[],[],[],()=>R(()=>Promise.resolve().then(()=>Q),void 0,import.meta.url));f.displayName="ProductSwitch";try{f.displayName="ProductSwitch",f.__docgenInfo={description:`The \`ProductSwitch\` is an SAP Fiori specific web component that is used in \`ShellBar\`
and allows the user to easily switch between products.

### Keyboard Handling
The \`ProductSwitch\` provides advanced keyboard handling.
When focused, the user can use the following keyboard
shortcuts in order to perform a navigation:

- [Tab] - Move focus to the next interactive element after the \`ProductSwitch\`
- [Up] or [Down] - Navigates up and down the items
- [Left] or [Right] - Navigates left and right the items



\`import "@ui5/webcomponents-fiori/dist/ProductSwitchItem.js";\` (for \`ProductSwitchItem\`)

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ProductSwitch",props:{children:{defaultValue:null,description:"Defines the items of the `ProductSwitch`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{f.displayName="ProductSwitch",f.__docgenInfo={description:`The \`ProductSwitch\` is an SAP Fiori specific web component that is used in \`ShellBar\`
and allows the user to easily switch between products.

### Keyboard Handling
The \`ProductSwitch\` provides advanced keyboard handling.
When focused, the user can use the following keyboard
shortcuts in order to perform a navigation:

- [Tab] - Move focus to the next interactive element after the \`ProductSwitch\`
- [Up] or [Down] - Navigates up and down the items
- [Left] or [Right] - Navigates left and right the items



\`import "@ui5/webcomponents-fiori/dist/ProductSwitchItem.js";\` (for \`ProductSwitchItem\`)

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ProductSwitch",props:{children:{defaultValue:null,description:"Defines the items of the `ProductSwitch`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function X(o,t,e){return c`${this.targetSrc?Y.call(this,o,t,e):ot.call(this,o,t,e)}`}function Y(o,t,e){return c`<a class="ui5-product-switch-item-root" data-sap-focus-ref @focusout="${this._onfocusout}" @focusin="${this._onfocusin}" @mousedown="${this._onmousedown}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" tabindex=${n(this.forcedTabIndex)} href="${n(this.targetSrc)}" target="${n(this._effectiveTarget)}">${this.icon?Z.call(this,o,t,e):void 0}<span class="ui5-product-switch-item-text-content">${this.titleText?tt.call(this,o,t,e):void 0}${this.subtitleText?et.call(this,o,t,e):void 0}</span></a>`}function Z(o,t,e){return e?c`<${y("ui5-icon",t,e)} class="ui5-product-switch-item-icon" name="${n(this.icon)}"></${y("ui5-icon",t,e)}>`:c`<ui5-icon class="ui5-product-switch-item-icon" name="${n(this.icon)}"></ui5-icon>`}function tt(o,t,e){return c`<span class="ui5-product-switch-item-title">${n(this.titleText)}</span>`}function et(o,t,e){return c`<span class="ui5-product-switch-item-subtitle">${n(this.subtitleText)}</span>`}function ot(o,t,e){return c`<div role="listitem" class="ui5-product-switch-item-root" data-sap-focus-ref @focusout="${this._onfocusout}" @focusin="${this._onfocusin}" @mousedown="${this._onmousedown}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" tabindex=${n(this.forcedTabIndex)}>${this.icon?it.call(this,o,t,e):void 0}<span class="ui5-product-switch-item-text-content">${this.titleText?nt.call(this,o,t,e):void 0}${this.subtitleText?ct.call(this,o,t,e):void 0}</span></div>`}function it(o,t,e){return e?c`<${y("ui5-icon",t,e)} class="ui5-product-switch-item-icon" name="${n(this.icon)}"></${y("ui5-icon",t,e)}>`:c`<ui5-icon class="ui5-product-switch-item-icon" name="${n(this.icon)}"></ui5-icon>`}function nt(o,t,e){return c`<span class="ui5-product-switch-item-title">${n(this.titleText)}</span>`}function ct(o,t,e){return c`<span class="ui5-product-switch-item-subtitle">${n(this.subtitleText)}</span>`}q("@ui5/webcomponents-theming","sap_horizon",async()=>N);q("@ui5/webcomponents-fiori","sap_horizon",async()=>V);const st={packageName:"@ui5/webcomponents-fiori",fileName:"themes/ProductSwitchItem.css.ts",content:`:host{width:var(--_ui5-v2-0-1_product_switch_item_width);height:var(--_ui5-v2-0-1_product_switch_item_height);margin:.25rem;border-radius:.25rem;box-sizing:border-box;background:var(--sapList_Background)}:host([selected]) .ui5-product-switch-item-root{background:var(--sapList_SelectionBackgroundColor);border:.125rem solid var(--sapList_SelectionBorderColor)}:host(:hover) .ui5-product-switch-item-root{background:var(--sapList_Hover_Background)}:host([selected]:hover) .ui5-product-switch-item-root{background:var(--sapList_Hover_SelectionBackground)}:host([active]) .ui5-product-switch-item-root,:host([selected][active]) .ui5-product-switch-item-root{background:var(--sapList_Active_Background)}:host([active]) .ui5-product-switch-item-root .ui5-product-switch-item-icon,:host([active]) .ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-title,:host([active]) .ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-subtitle{color:var(--sapList_Active_TextColor)}:host([desktop]) .ui5-product-switch-item-root:focus,.ui5-product-switch-item-root:focus-visible{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:var(--_ui5-v2-0-1_product_switch_item_outline_offset)}:host([desktop][active]) .ui5-product-switch-item-root:focus,:host([active]) .ui5-product-switch-item-root:focus-visible{outline-color:var(--_ui5-v2-0-1_product_switch_item_active_outline_color)}.ui5-product-switch-item-root{user-select:none;width:100%;height:100%;flex-direction:column;display:flex;align-items:center;text-decoration:none;outline:none;box-sizing:border-box;padding:4rem .5rem .5rem;cursor:pointer;border:var(--_ui5-v2-0-1_product_switch_item_border)}:host([icon]) .ui5-product-switch-item-root{padding-top:.5rem}:host([selected]) .ui5-product-switch-item-root{padding:.375rem}.ui5-product-switch-item-root .ui5-product-switch-item-icon{width:3rem;height:3rem;padding:.75rem;margin-bottom:.5rem;box-sizing:border-box;color:var(--sapContent_IconColor);pointer-events:none}.ui5-product-switch-item-root .ui5-product-switch-item-text-content{display:flex;align-items:center;flex-direction:column;max-width:10.25rem}.ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-subtitle,.ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-title{line-height:1.25rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;pointer-events:none;text-align:center}.ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-title{font-size:var( --sapFontHeader6Size);color:var(--sapGroup_TitleTextColor)}.ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-title:only-child{white-space:normal;-webkit-line-clamp:2;display:-webkit-box;-webkit-box-orient:vertical}.ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-subtitle{font-size:var( --sapFontSmallSize);color:var(--sapContent_LabelColor)}@media only screen and (max-width: 600px){:host{margin:0;width:100%;max-width:600px;height:5rem;border-radius:0}.ui5-product-switch-item-root{padding:0 1rem;flex-direction:row}:host([icon]) .ui5-product-switch-item-root{padding-top:0}.ui5-product-switch-item-root .ui5-product-switch-item-icon{padding:.875rem;color:var(--sapContent_NonInteractiveIconColor);margin:0 .75rem 0 0}.ui5-product-switch-item-root .ui5-product-switch-item-text-content{align-items:flex-start;max-width:100%}:host([icon]) .ui5-product-switch-item-root .ui5-product-switch-item-text-content{max-width:calc(100% - 3.75rem)}.ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-subtitle,.ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-title{line-height:normal}.ui5-product-switch-item-root .ui5-product-switch-item-text-content .ui5-product-switch-item-subtitle{font-size:var(--sapFontSize);padding-top:.75rem}}
`};var h=function(o,t,e,a){var l=arguments.length,i=l<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,e):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,a);else for(var m=o.length-1;m>=0;m--)(u=o[m])&&(i=(l<3?u(i):l>3?u(t,e,i):u(t,e))||i);return l>3&&i&&Object.defineProperty(t,e,i),i};let s=class extends z{constructor(){super(),this.active=!1,this.selected=!1,this._deactivate=()=>{this.active&&(this.active=!1)}}onEnterDOM(){document.addEventListener("mouseup",this._deactivate),j()&&this.setAttribute("desktop","")}onExitDOM(){document.removeEventListener("mouseup",this._deactivate)}_onmousedown(){this.active=!0}get _effectiveTarget(){return this.target||"_self"}_onkeydown(t){(g(t)||S(t))&&(this.active=!0),g(t)&&t.preventDefault(),S(t)&&this._fireItemClick()}_onkeyup(t){(g(t)||S(t))&&(this.active=!1),g(t)&&(M(t)&&t.stopPropagation(),this._fireItemClick())}_onfocusout(){this.active=!1}_onfocusin(t){this.fireEvent("_focused",t)}_fireItemClick(){this.fireEvent("click",{item:this})}};h([d()],s.prototype,"titleText",void 0);h([d()],s.prototype,"subtitleText",void 0);h([d()],s.prototype,"icon",void 0);h([d()],s.prototype,"target",void 0);h([d()],s.prototype,"targetSrc",void 0);h([d({type:Boolean})],s.prototype,"active",void 0);h([d({type:Boolean})],s.prototype,"selected",void 0);h([d({noAttribute:!0})],s.prototype,"forcedTabIndex",void 0);s=h([D({tag:"ui5-product-switch-item",renderer:C,styles:st,template:X,dependencies:[H]}),T("click"),T("_focused")],s);s.define();const rt=s,at=Object.freeze(Object.defineProperty({__proto__:null,default:rt},Symbol.toStringTag,{value:"Module"})),r=E("ui5-product-switch-item",["icon","subtitleText","target","targetSrc","titleText"],[],[],["click"],()=>R(()=>Promise.resolve().then(()=>at),void 0,import.meta.url));r.displayName="ProductSwitchItem";try{r.displayName="ProductSwitchItem",r.__docgenInfo={description:`The \`ProductSwitchItem\` web component represents the items displayed in the
\`ProductSwitch\` web component.

**Note:** \`ProductSwitchItem\` is not supported when used outside of \`ProductSwitch\`.

### Keyboard Handling
The \`ProductSwitch\` provides advanced keyboard handling.
When focused, the user can use the following keyboard
shortcuts in order to perform a navigation:

- [Space] / [Enter] or [Return] - Trigger \`ui5-click\` event



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ProductSwitchItem",props:{onClick:{defaultValue:null,description:"Fired when the `ProductSwitchItem` is activated either with a\nclick/tap or by using the Enter or Space key.",name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ProductSwitchItemDomRef, never>) => void"}},icon:{defaultValue:{value:"undefined"},description:`Defines the icon to be displayed as a graphical element within the component.

Example:

\`<ProductSwitchItem icon="palette">\`

See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},subtitleText:{defaultValue:{value:"undefined"},description:"Defines the subtitle of the component.",name:"subtitleText",required:!1,type:{name:"string"}},target:{defaultValue:{value:"undefined"},description:"Defines a target where the `targetSrc` content must be open.\n\nAvailable options are:\n\n- `_self`\n- `_top`\n- `_blank`\n- `_parent`\n- `_search`\n\n**Note:** By default target will be open in the same frame as it was clicked.",name:"target",required:!1,type:{name:"string"}},targetSrc:{defaultValue:{value:"undefined"},description:"Defines the component target URI. Supports standard hyperlink behavior.",name:"targetSrc",required:!1,type:{name:"string"}},titleText:{defaultValue:{value:"undefined"},description:"Defines the title of the component.",name:"titleText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{r.displayName="ProductSwitchItem",r.__docgenInfo={description:`The \`ProductSwitchItem\` web component represents the items displayed in the
\`ProductSwitch\` web component.

**Note:** \`ProductSwitchItem\` is not supported when used outside of \`ProductSwitch\`.

### Keyboard Handling
The \`ProductSwitch\` provides advanced keyboard handling.
When focused, the user can use the following keyboard
shortcuts in order to perform a navigation:

- [Space] / [Enter] or [Return] - Trigger \`ui5-click\` event



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ProductSwitchItem",props:{onClick:{defaultValue:null,description:"Fired when the `ProductSwitchItem` is activated either with a\nclick/tap or by using the Enter or Space key.",name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ProductSwitchItemDomRef, never>) => void"}},icon:{defaultValue:{value:"undefined"},description:`Defines the icon to be displayed as a graphical element within the component.

Example:

\`<ProductSwitchItem icon="palette">\`

See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},subtitleText:{defaultValue:{value:"undefined"},description:"Defines the subtitle of the component.",name:"subtitleText",required:!1,type:{name:"string"}},target:{defaultValue:{value:"undefined"},description:"Defines a target where the `targetSrc` content must be open.\n\nAvailable options are:\n\n- `_self`\n- `_top`\n- `_blank`\n- `_parent`\n- `_search`\n\n**Note:** By default target will be open in the same frame as it was clicked.",name:"target",required:!1,type:{name:"string"}},targetSrc:{defaultValue:{value:"undefined"},description:"Defines the component target URI. Supports standard hyperlink behavior.",name:"targetSrc",required:!1,type:{name:"string"}},titleText:{defaultValue:{value:"undefined"},description:"Defines the title of the component.",name:"titleText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const lt="business-objects-experience",ut="M68 143q-4-7-4-15 0-13 9-22.5T96 96t23 9.5 9 22.5q0 8-4 15l53 54q8-5 15-5h1l45-102q-14-11-14-26 0-13 9-22.5t23-9.5 23 9.5 9 22.5-8 21l60 78q6-3 12-3 12 0 19 7l93-106 12 10-94 109q1 5 1.5 8t.5 4q0 14-9 23t-23 9-23-9-9-23q0-9 8-20l-62-78q-2 0-4 .5t-4 .5q-1 1-2 1h-3l-45 101q7 5 11.5 12t4.5 15q0 14-9 23t-23 9-23-9-9-23q0-8 5-16l-52-53q-8 5-17 5-8 0-16-5l-37 37-11-11zm348 121q0-8 8-8h48q8 0 8 8v208q0 8-8 8h-48q-8 0-8-8V264zm-256 64q0-8 8-8h48q8 0 8 8v144q0 8-8 8h-48q-8 0-8-8V328zm136 24h48q8 0 8 8v112q0 8-8 8h-48q-8 0-8-8V360q0-8 8-8zM40 384h48q8 0 8 8v80q0 8-8 8H40q-8 0-8-8v-80q0-8 8-8z",dt=!1,ht="SAP-icons-v4",pt="@ui5/webcomponents-icons";p(lt,{pathData:ut,ltr:dt,collection:ht,packageName:pt});const mt="business-objects-experience",ft="M368 214q-1 17-13.5 29.5T324 256q-16 0-28.5-10.5T281 219l-81-70q-10 5-20 5-2 0-4.5-.5t-4.5-.5L86 264q2 8 2 12 0 18-13 31t-31 13-31-13-13-31 13-31 31-13h1l92-118v-4q-2-18 11.5-31T180 66q17 0 29 10.5t14 25.5l83 70q10-4 18-4 9 0 15 3l86-87q0-20 10-36t33-16q18 0 31 13t13 31-13 31-31 13q-4 0-6-1zm106 10q11 0 18 7.5t7 18.5v204q0 11-7 18.5t-18 7.5-18.5-7.5T448 454V250q0-11 7.5-18.5T474 224zm-288 32q11 0 18 7.5t7 18.5v172q0 11-7 18.5t-18 7.5-18.5-7.5T160 454V282q0-11 7.5-18.5T186 256zm140 64q11 0 18.5 7.5T352 346v108q0 11-7.5 18.5T326 480t-18-7.5-7-18.5V346q0-11 7-18.5t18-7.5zM26 384q11 0 18 7.5t7 18.5v44q0 11-7 18.5T26 480t-18.5-7.5T0 454v-44q0-11 7.5-18.5T26 384z",wt=!1,_t="SAP-icons-v5",bt="@ui5/webcomponents-icons";p(mt,{pathData:ft,ltr:wt,collection:_t,packageName:bt});const gt="business-objects-experience",vt="contacts",yt="M0 384h32v-32H0v-32h32V192H0v-32h32v-32H0V96h32V32q0-14 9.5-23T64 0h384q14 0 23 9t9 23q14 0 23 9t9 23v64q0 14-9 23t-23 9v32q14 0 23 9t9 23v64q0 14-9 23t-23 9v32q14 0 23 9t9 23v64q0 14-9 23t-23 9q0 14-9 23t-23 9H64q-13 0-22.5-9T32 480v-64H0v-32zm96 0v32H64v64h384V32H64v64h32v32H64v32h32v32H64v128h32v32H64v32h32zM384 96v64H160V96h224z",qt=!1,St="SAP-icons-v4",xt="@ui5/webcomponents-icons";p(vt,{pathData:yt,ltr:qt,collection:St,packageName:xt});const Tt="contacts",kt="M480 224v64h6q11 0 18.5 7.5T512 314v76q0 11-7.5 18.5T486 416h-10q-8 28-31.5 46T390 480H122q-31 0-54.5-18T36 416H26q-11 0-18.5-7.5T0 390t7.5-18 18.5-7h6v-39h-6q-11 0-18.5-7T0 301t7.5-18.5T26 275h6v-38h-6q-11 0-18.5-7.5T0 211t7.5-18 18.5-7h6v-39h-6q-11 0-18.5-7T0 122t7.5-18.5T26 96h10q8-28 31.5-46T122 32h268q31 0 54.5 18T476 96h10q11 0 18.5 7.5T512 122v76q0 11-7.5 18.5T486 224h-6zm-51-102q0-17-11-28t-28-11H122q-17 0-28 11t-11 28v268q0 17 11 28t28 11h268q17 0 28-11t11-28V122zm-71 6q11 0 18.5 7.5T384 154v12q0 11-7.5 18.5T358 192H154q-11 0-18.5-7.5T128 166v-12q0-11 7.5-18.5T154 128h204z",Pt=!1,$t="SAP-icons-v5",It="@ui5/webcomponents-icons";p(Tt,{pathData:kt,ltr:Pt,collection:$t,packageName:It});const Nt="contacts",Dt="flight",Ct="M469.9 43q9 9 10 24.5t-3 32-12.5 32-17.5 24.5l-45 45 68 204-68 68-91-181-87 66v90l-32 32-62-98-98-62 32-32h91l66-87-181-90 68-68 203 68 45-45q14-14 37-24t45-10q21 0 32 11zm-46 90q7-7 12.5-17t8.5-20.5 3.5-19-1.5-11.5h-2q-2 0-3.5-.5t-3.5-.5q-15 0-33 8t-26 16l-59 59-204-67-22 22 175 88-98 130h-79l61 39 39 61v-78l131-99 88 176 22-23-68-203z",zt=!1,Et="SAP-icons-v4",Rt="@ui5/webcomponents-icons";p(Dt,{pathData:Ct,ltr:zt,collection:Et,packageName:Rt});const Vt="flight",Ht="M480 278q16 10 16 28v5q0 18-11.5 25t-27.5 7l-163-39v114l60 39q14 8 14 25 0 13-9 21.5t-21 8.5q-6 0-9-1l-73-23-73 23q-3 1-9 1-12 0-21-8.5t-9-21.5q0-17 14-25l60-39V304L55 343q-16 0-27.5-7T16 311v-5q0-18 16-28l186-109V38q0-16 11-27t27-11 27 11 11 27v131z",Ot=!1,At="SAP-icons-v5",Lt="@ui5/webcomponents-icons";p(Vt,{pathData:Ht,ltr:Ot,collection:At,packageName:Lt});const jt="flight",Mt="wrench",Ut="M471 381q9 10 9 22.5t-9 21.5l-46 46q-9 9-21 9-14 0-23-9L218 307q-23 10-52 10-47 0-83-26.5T32 224h118q14 0 27.5-9.5T191 191v-32q0-14-13.5-23t-27.5-9H32q15-42 51-68.5T166 32q30 0 55.5 11.5t45 31T297 120t11 55q0 20-6 39zm-23 23L266 223l5-18q3-9 4-16t1-14q0-23-8.5-43T244 97t-35-24-43-9q-46 0-77 33h61q13 0 26 5t23.5 13 17 19.5T223 159v32q0 13-6.5 24.5t-17 20.5-23.5 14-26 5H89q15 14 35 22t42 8q17 0 41-8l19-8 178 179z",Ft=!1,Bt="SAP-icons-v4",Wt="@ui5/webcomponents-icons";p(Mt,{pathData:Ut,ltr:Ft,collection:Bt,packageName:Wt});const Kt="wrench",Gt="M505 399q7 9 7 18 0 11-7 18l-70 70q-7 7-18 7-9 0-18-7L215 320q-27 8-51 8-34 0-64-13t-52.5-35.5-35-53T0 162q0-9 1-22.5t5-26 11-22T36 82q11 0 18 7l64 62 33-34-62-63q-7-7-7-18 0-12 10-19t23.5-11T143 1t22-1q34 0 63.5 13T280 48.5t35 52 13 63.5q0 24-8 50zM51 161q0 24 8.5 45t24 36.5 36 24.5 44.5 9q23 0 43.5-9t36-24 24.5-35.5 9-43.5q0-24-9-44.5T243.5 84t-36-24-43.5-9h-6l47 49q8 8 8 18t-8 18l-69 69q-7 7-18 7t-18-7l-49-47v3zm399 256L295 262q-13 19-33 33l155 155z",Jt=!1,Qt="SAP-icons-v5",Xt="@ui5/webcomponents-icons";p(Kt,{pathData:Gt,ltr:Jt,collection:Qt,packageName:Xt});const Yt="wrench",Zt={title:"Inputs / ProductSwitch",component:f,argTypes:{children:{control:{disable:!0}}},tags:["package:@ui5/webcomponents-fiori"]},b={render:o=>w.jsxs(f,{...o,children:[w.jsx(r,{titleText:"ProductSwitchItem",icon:Yt,target:"_blank",targetSrc:"https://sap.github.io/ui5-webcomponents-react/"}),w.jsx(r,{titleText:"Home",subtitleText:"Central Home",icon:O}),w.jsx(r,{titleText:"Analytical Cloud",subtitleText:"Analytical Cloud",icon:gt}),w.jsx(r,{titleText:"Catalog",subtitleText:"Ariba",icon:Nt}),w.jsx(r,{titleText:"Travel & Expense",subtitleText:"Concur",icon:jt})]})};var P,$,I;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    return <ProductSwitch {...args}>
        <ProductSwitchItem titleText={'ProductSwitchItem'} icon={wrenchIcon} target="_blank" targetSrc="https://sap.github.io/ui5-webcomponents-react/" />
        <ProductSwitchItem titleText="Home" subtitleText="Central Home" icon={homeIcon} />
        <ProductSwitchItem titleText="Analytical Cloud" subtitleText="Analytical Cloud" icon={businessObjectsExperienceIcon} />
        <ProductSwitchItem titleText="Catalog" subtitleText="Ariba" icon={contactsIcon} />
        <ProductSwitchItem titleText="Travel & Expense" subtitleText="Concur" icon={flightIcon} />
      </ProductSwitch>;
  }
}`,...(I=($=b.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};const te=["Default"],_e=Object.freeze(Object.defineProperty({__proto__:null,Default:b,__namedExportsOrder:te,default:Zt},Symbol.toStringTag,{value:"Module"}));export{_e as C,b as D,r as P};
