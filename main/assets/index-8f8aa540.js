import{_ as V}from"./iframe-45204dbc.js";import{U as oe,k as C,a as x,d as ne}from"./UI5Element-b6f0d493.js";import{B as D,a as se}from"./Button-37628041.js";import{p as d,c as M,w as W,e as r,s as l,l as n,a as U}from"./withWebComponent-7b9bd1ee.js";import{e as S,c as g,I as ae}from"./Icon-bd7f152d.js";import{j as y,b as j,c as re}from"./Icons-bac066a4.js";import{s as k}from"./slot-76e48863.js";import{R as A}from"./ResizeHandler-021ae412.js";import{g as T}from"./MarkedEvents-b83081e9.js";import{B as le}from"./BusyIndicator-0490e909.js";import{a as ce}from"./Link-fd0c7f1f.js";import{c as de}from"./Popover-ceaaf26b.js";import{W as N}from"./WrappingType-b81e595a.js";import{b as ue}from"./ListItemBase-d9c7b338.js";import{I as pe}from"./Integer-f7f172c9.js";import"./decline-e64814d9.js";import{t as X,u as G,v as Y}from"./i18n-defaults-80781f7e.js";import"./overflow-944efa83.js";import{s as Q}from"./parameters-bundle.css-5626463c.js";import{N as he,s as fe,t as me,u as be,v as ve,w as we,x as ye,y as ge,z as _e,A as Te}from"./i18n-defaults-44d0f21e.js";var q;(function(o){o.High="High",o.Medium="Medium",o.Low="Low",o.None="None"})(q||(q={}));const h=q;var _=globalThis&&globalThis.__decorate||function(o,e,t,i){var s=arguments.length,a=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,e,t,i);else for(var p=o.length-1;p>=0;p--)(c=o[p])&&(a=(s<3?c(a):s>3?c(e,t,a):c(e,t))||a);return s>3&&a&&Object.defineProperty(e,t,a),a};let b=class extends oe{fireClickEvent(e){return this.fireEvent("click",{targetRef:e.target},!0)}};_([d()],b.prototype,"text",void 0);_([d({type:Boolean})],b.prototype,"disabled",void 0);_([d({type:D,defaultValue:D.Transparent})],b.prototype,"design",void 0);_([d()],b.prototype,"icon",void 0);b=_([M("ui5-notification-action"),S("click",{detail:{targetRef:{type:HTMLElement}}})],b);b.define();const Ne=b,$e=Object.freeze(Object.defineProperty({__proto__:null,default:Ne},Symbol.toStringTag,{value:"Module"})),$=W("ui5-notification-action",["design","icon","text"],["disabled"],[],["click"],()=>V(()=>Promise.resolve().then(()=>$e),void 0,import.meta.url));$.displayName="NotificationAction";$.defaultProps={design:D.Transparent};try{$.displayName="NotificationAction",$.__docgenInfo={description:'The `NotificationAction` represents an abstract action, used in the `NotificationListItem` and the `NotificationListGroupItem` items\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/NotificationListItem" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"NotificationAction",props:{onClick:{defaultValue:null,description:"Fired, when the action is pressed.",name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<NotificationActionDomRef, NotificationActionClickEventDetail>) => void"}},design:{defaultValue:{value:"ButtonDesign.Transparent"},description:"Defines the action design.\n\n**Note:**\n\n*   `Default`\n*   `Emphasized`\n*   `Positive`\n*   `Negative`\n*   `Transparent`",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},disabled:{defaultValue:null,description:`Defines if the action is disabled.

**Note:** a disabled action can't be pressed or focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:'Defines the `icon` source URI.\n\n**Note:** SAP-icons font provides numerous built-in icons. To find all the available icons, see the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.',name:"icon",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"Defines the text of the `NotificationAction`.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const Ie="message-success",J="M383 163q3 3 1 8L248 382q-3 3-6 3t-4-1l-107-90q-5-3-1-9l27-38q2-3 5-3 2 0 4 2l65 49q2 1 5 1 4 0 5-3l99-162q2-4 6-4 2 0 4 2zm129 93q0 54-20 100.5t-54.5 81T356 492t-100 20q-54 0-100.5-20t-81-55T20 355.5 0 256t20.5-100 55-81.5T157 20t99-20q53 0 100 20t81.5 54.5T492 156t20 100zm-32 0q0-47-17.5-87.5t-48-71-71.5-48T256 32t-87 18-71.5 48.5-48 71T32 256q0 47 17.5 88t48 71 71.5 47.5 87 17.5q47 0 88-17.5t71-47.5 47.5-71 17.5-88z",xe=!0,ke=X,De="SAP-icons-v4",qe="@ui5/webcomponents-icons";y(Ie,{pathData:J,ltr:xe,accData:ke,collection:De,packageName:qe});const Oe="message-success",K="M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zM128 256q-14 0-23 9t-9 23q0 12 9 23l64 64q11 9 23 9 13 0 23-9l192-192q9-11 9-23 0-13-9.5-22.5T384 128q-12 0-23 9L192 307l-41-42q-10-9-23-9z",Ce=!0,Me=X,Se="SAP-icons-v5",Ae="@ui5/webcomponents-icons";y(Oe,{pathData:K,ltr:Ce,accData:Me,collection:Se,packageName:Ae});C();const Le="message-error",Z="M256 0q53 0 100 20t81.5 55 54.5 81.5 20 99.5-20 100-54.5 81.5T356 492t-100 20-99.5-20T75 437.5 20 356 0 256t20-99.5T75 75t81.5-55T256 0zm0 480q46 0 87-17.5t71.5-48 48-71T480 256q0-46-17.5-87t-48-71.5-71.5-48T256 32t-87 17.5-71.5 48-48 71.5T32 256q0 47 17.5 87.5t48 71 71.5 48 87 17.5zm126-320q9-9 0-17l-16-17q-4-4-9-4t-9 4l-89 89q-2 2-4 2-3 0-5-2l-88-89q-4-4-9-4t-9 4l-16 17q-8 8 0 17l88 89q5 4 0 9l-88 89q-8 8 0 17l16 17q8 4 9 4 3 0 9-4l88-89q1-2 5-2 3 0 4 2l89 89q8 4 9 4t9-4l16-17q9-9 0-17l-89-89q-4-6 1-9z",Ee=!1,Be=G,Pe="SAP-icons-v4",ze="@ui5/webcomponents-icons";y(Le,{pathData:Z,ltr:Ee,accData:Be,collection:Pe,packageName:ze});const Re="message-error",ee="M375 183q9-10 9-23t-9-23q-10-9-23-9t-23 9l-73 74-73-74q-10-9-23-9t-23 9q-9 10-9 23t9 23l74 73-74 73q-9 10-9 23t9 23q10 9 23 9t23-9l73-74 73 74q10 9 23 9t23-9q9-10 9-23t-9-23l-74-73zM256 512q-53 0-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0t99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20z",Fe=!1,He=G,Ve="SAP-icons-v5",We="@ui5/webcomponents-icons";y(Re,{pathData:ee,ltr:Fe,accData:He,collection:Ve,packageName:We});C();const Ue="message-warning",te="M256.1 143.944q12.995 0 23.49 7.997t10.497 24.99l-8.997 83.967-1.999 36.986q-2 20.991-23.99 20.991-7.998 0-15.495-4.998t-7.497-15.993q-1.999-37.986-3.498-61.476t-3-36.486-2.498-17.993l-1-4.998q0-16.993 10.496-24.99t23.491-7.997zm0 205.92q13.994 0 22.991 8.996t8.996 22.99-8.996 22.992-22.991 8.996-22.991-8.996-8.997-22.991 8.997-22.991 22.991-8.997zm244.904 22.99q8.997 18.993 10.996 36.986v5.998q0 30.987-22.991 47.481t-49.98 16.494H73.17q-12.995 0-25.99-4.499t-23.49-12.495-16.994-20.492T.2 414.837q-1-10.995 2.999-20.99t8.996-20.993L197.123 37.985Q220.114-1 258.099-1q36.986 0 58.977 38.985zm-64.974 74.971q42.983 0 42.983-31.987 0-9.997-7.997-27.99l-179.93-333.87q-5.997-11.994-15.494-17.492T257.1 30.988t-17.993 5.498-14.995 17.493L42.184 387.849q-6.998 12.994-6.998 27.989 0 31.987 41.984 31.987h358.86z",je=!1,Xe=Y,Ge="SAP-icons-v4",Ye="@ui5/webcomponents-icons";y(Ue,{pathData:te,ltr:je,accData:Xe,collection:Ge,packageName:Ye});const Qe="message-warning",ie="M504 387q8 13 8 30 0 25-18 44.5T448 481H64q-28 0-46-19.5T0 417q0-17 8-30L200 34q9-17 24-25.5T256 0t32 8.5T312 34zM224 281q0 14 9 23.5t23 9.5 23-9.5 9-23.5V153q0-13-9-22.5t-23-9.5-23 9.5-9 22.5v128zm32 149q16 0 27-11t11-28q0-16-11-27t-27-11-27 11-11 27q0 17 11 28t27 11z",Je=!1,Ke=Y,Ze="SAP-icons-v5",et="@ui5/webcomponents-icons";y(Qe,{pathData:ie,ltr:Je,accData:Ke,collection:Ze,packageName:et});C();function tt(o,e,t){return t?r`<${l("ui5-popover",e,t)} class="ui5-notification-overflow-popover" placement-type="Bottom" horizontal-align="Right" hide-arrow><div class="ui5-notification-overflow-list">${g(this.overflowActions,(i,s)=>i._id||s,(i,s)=>L.call(this,o,e,t,i,s))}</div></${l("ui5-popover",e,t)}>`:r`<ui5-popover class="ui5-notification-overflow-popover" placement-type="Bottom" horizontal-align="Right" hide-arrow><div class="ui5-notification-overflow-list">${g(this.overflowActions,(i,s)=>i._id||s,(i,s)=>L.call(this,o,e,t,i,s))}</div></ui5-popover>`}function L(o,e,t,i,s){return t?r`<${l("ui5-button",e,t)} icon="${n(i.icon)}" design="Transparent" @click="${i.press}" ?disabled="${i.disabled}" design="${n(i.design)}" data-ui5-external-action-item-id="${n(i.refItemid)}" class="ui5-notification-overflow-list-btn">${n(i.text)}</${l("ui5-button",e,t)}>`:r`<ui5-button icon="${n(i.icon)}" design="Transparent" @click="${i.press}" ?disabled="${i.disabled}" design="${n(i.design)}" data-ui5-external-action-item-id="${n(i.refItemid)}" class="ui5-notification-overflow-list-btn">${n(i.text)}</ui5-button>`}x("@ui5/webcomponents-theming","sap_fiori_3",async()=>U);x("@ui5/webcomponents-fiori","sap_fiori_3",async()=>Q);const it={packageName:"@ui5/webcomponents-fiori",fileName:"themes/NotificationOverflowActionsPopover.css",content:`.ui5-notification-overflow-list {
	display: flex;
	flex-direction: column;
}

.ui5-notification-overflow-popover::part(content) {
	padding: var(--_ui5-notification-overflow-popover-padding);
}

.ui5-notification-overflow-list-btn::part(button) {
	justify-content: flex-start;
}`};var v=globalThis&&globalThis.__decorate||function(o,e,t,i){var s=arguments.length,a=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,e,t,i);else for(var p=o.length-1;p>=0;p--)(c=o[p])&&(a=(s<3?c(a):s>3?c(e,t,a):c(e,t))||a);return s>3&&a&&Object.defineProperty(e,t,a),a},O;const ot={[h.High]:"message-error",[h.Medium]:"message-warning",[h.Low]:"message-success",[h.None]:""};let f=O=class extends ue{get hasTitleText(){return!!this.titleText.length}get hasPriority(){return this.priority!==h.None}get priorityIcon(){return ot[this.priority]}get overflowButtonDOM(){return this.shadowRoot.querySelector(".ui5-nli-overflow-btn")}get showOverflow(){return!!this.overflowActions.length}get overflowActions(){return this.actions.length<=1?[]:this.actionsInfo}get standardActions(){return this.actions.length>1?[]:this.actionsInfo}get actionsInfo(){return this.actions.map(e=>({icon:e.icon,text:e.text,press:this._onCustomActionClick.bind(this),refItemid:e._id,disabled:e.disabled?!0:void 0,design:e.design}))}_onBtnCloseClick(){this.fireEvent("close",{item:this})}_onBtnOverflowClick(){this.openOverflow()}_onCustomActionClick(e){const t=e.target.getAttribute("data-ui5-external-action-item-id");t&&(this.getActionByID(t).fireClickEvent(e),this.closeOverflow())}_onkeydown(e){super._onkeydown(e),T(e)!=="button"&&j(e)&&e.preventDefault()}getActionByID(e){return this.actions.find(t=>t._id===e)}async openOverflow(){(await this.getOverflowPopover()).showAt(this.overflowButtonDOM)}async closeOverflow(){(await this.getOverflowPopover()).close()}async getOverflowPopover(){return(await this.getStaticAreaItemDomRef()).querySelector(".ui5-notification-overflow-popover")}static async onDefine(){O.i18nFioriBundle=await ne("@ui5/webcomponents-fiori")}};v([d()],f.prototype,"titleText",void 0);v([d({type:h,defaultValue:h.None})],f.prototype,"priority",void 0);v([d({type:Boolean})],f.prototype,"showClose",void 0);v([d({type:Boolean})],f.prototype,"read",void 0);v([d({type:Boolean})],f.prototype,"busy",void 0);v([d({validator:pe,defaultValue:1e3})],f.prototype,"busyDelay",void 0);v([k()],f.prototype,"actions",void 0);f=O=v([S("close",{detail:{item:HTMLElement}}),M({staticAreaStyles:it,staticAreaTemplate:tt})],f);const nt=f;function st(o,e,t){return t?r`<li class="ui5-nli-root ui5-nli-focusable" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click="${this._onclick}" role="listitem" tabindex="${n(this._tabIndex)}" aria-labelledby="${n(this.ariaLabelledBy)}"><div class="ui5-nli-actions">${this.showOverflow?E.call(this,o,e,t):B.call(this,o,e,t)}${this.showClose?P.call(this,o,e,t):void 0}</div><div class="ui5-nli-content"><div class="ui5-nli-title-text-wrapper">${this.hasPriority?z.call(this,o,e,t):void 0}<div id="${n(this._id)}-title-text" class="ui5-nli-title-text" part="title-text">${n(this.titleText)}</div></div>${this.hasDesc?R.call(this,o,e,t):void 0}<div id="${n(this._id)}-footer" class="ui5-nli-footer">${g(this.footerItems,(i,s)=>i._id||s,(i,s)=>F.call(this,o,e,t,i,s))}<${l("ui5-link",e,t)} class="ui5-nli-footer-showMore" ?hidden="${this.hideShowMore}" @ui5-click="${n(this._onShowMoreClick)}" aria-hidden="true" href="#"  showMore-btn>${n(this.showMoreText)}</${l("ui5-link",e,t)}></div><span id="${n(this._id)}-invisibleText" class="ui5-hidden-text">${n(this.accInvisibleText)}</span></div><div class="ui5-nli-avatar"><slot name="avatar"></slot></div>${this.busy?H.call(this,o,e,t):void 0}</li>`:r`<li class="ui5-nli-root ui5-nli-focusable" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click="${this._onclick}" role="listitem" tabindex="${n(this._tabIndex)}" aria-labelledby="${n(this.ariaLabelledBy)}"><div class="ui5-nli-actions">${this.showOverflow?E.call(this,o,e,t):B.call(this,o,e,t)}${this.showClose?P.call(this,o,e,t):void 0}</div><div class="ui5-nli-content"><div class="ui5-nli-title-text-wrapper">${this.hasPriority?z.call(this,o,e,t):void 0}<div id="${n(this._id)}-title-text" class="ui5-nli-title-text" part="title-text">${n(this.titleText)}</div></div>${this.hasDesc?R.call(this,o,e,t):void 0}<div id="${n(this._id)}-footer" class="ui5-nli-footer">${g(this.footerItems,(i,s)=>i._id||s,(i,s)=>F.call(this,o,e,t,i,s))}<ui5-link class="ui5-nli-footer-showMore" ?hidden="${this.hideShowMore}" @ui5-click="${n(this._onShowMoreClick)}" aria-hidden="true" href="#"  showMore-btn>${n(this.showMoreText)}</ui5-link></div><span id="${n(this._id)}-invisibleText" class="ui5-hidden-text">${n(this.accInvisibleText)}</span></div><div class="ui5-nli-avatar"><slot name="avatar"></slot></div>${this.busy?H.call(this,o,e,t):void 0}</li>`}function E(o,e,t){return t?r`<${l("ui5-button",e,t)} icon="overflow" design="Transparent" @click="${this._onBtnOverflowClick}" class="ui5-nli-overflow-btn" tooltip="${n(this.overflowBtnAccessibleName)}" aria-label="${n(this.overflowBtnAccessibleName)}"></${l("ui5-button",e,t)}>`:r`<ui5-button icon="overflow" design="Transparent" @click="${this._onBtnOverflowClick}" class="ui5-nli-overflow-btn" tooltip="${n(this.overflowBtnAccessibleName)}" aria-label="${n(this.overflowBtnAccessibleName)}"></ui5-button>`}function B(o,e,t){return r`${g(this.standardActions,(i,s)=>i._id||s,(i,s)=>at.call(this,o,e,t,i,s))}`}function at(o,e,t,i,s){return t?r`<${l("ui5-button",e,t)} icon="${n(i.icon)}" class="ui5-nli-action" @click="${i.press}" ?disabled="${i.disabled}" design="${n(i.design)}" data-ui5-external-action-item-id="${n(i.refItemid)}">${n(i.text)}</${l("ui5-button",e,t)}>`:r`<ui5-button icon="${n(i.icon)}" class="ui5-nli-action" @click="${i.press}" ?disabled="${i.disabled}" design="${n(i.design)}" data-ui5-external-action-item-id="${n(i.refItemid)}">${n(i.text)}</ui5-button>`}function P(o,e,t){return t?r`<${l("ui5-button",e,t)} icon="decline" design="Transparent" @click="${this._onBtnCloseClick}" tooltip="${n(this.closeBtnAccessibleName)}" aria-label="${n(this.closeBtnAccessibleName)}" close-btn></${l("ui5-button",e,t)}>`:r`<ui5-button icon="decline" design="Transparent" @click="${this._onBtnCloseClick}" tooltip="${n(this.closeBtnAccessibleName)}" aria-label="${n(this.closeBtnAccessibleName)}" close-btn></ui5-button>`}function z(o,e,t){return t?r`<${l("ui5-icon",e,t)} class="ui5-prio-icon ui5-prio-icon--${n(this.priorityIcon)}" name="${n(this.priorityIcon)}"></${l("ui5-icon",e,t)}>`:r`<ui5-icon class="ui5-prio-icon ui5-prio-icon--${n(this.priorityIcon)}" name="${n(this.priorityIcon)}"></ui5-icon>`}function R(o,e,t){return r`<div id="${n(this._id)}-description" class="ui5-nli-description"><slot></slot></div>`}function F(o,e,t,i,s){return r`<slot name="${n(i.slotName)}"></slot>${i.showDivider?rt.call(this,o,e,t,i,s):void 0}`}function rt(o,e,t,i,s){return r`<div class="ui5-nli-footer-divider" aria-hidden="true">·</div>`}function H(o,e,t){return t?r`<${l("ui5-busy-indicator",e,t)} delay="${n(this.busyDelay)}" active size="Medium" class="ui5-nli-busy" data-sap-focus-ref></${l("ui5-busy-indicator",e,t)}>`:r`<ui5-busy-indicator delay="${n(this.busyDelay)}" active size="Medium" class="ui5-nli-busy" data-sap-focus-ref></ui5-busy-indicator>`}x("@ui5/webcomponents-theming","sap_fiori_3",async()=>U);x("@ui5/webcomponents-fiori","sap_fiori_3",async()=>Q);const lt={packageName:"@ui5/webcomponents-fiori",fileName:"themes/NotificationListItem.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}

:host(:not([hidden])) {
	display: block;
	width: 100%;
	min-height: var(--_ui5_list_item_base_height);
	background: var(--ui5-listitem-background-color);
	cursor: pointer;
}

:host([has-border]) {
	border-bottom: var(--ui5-listitem-border-bottom);
}

:host([focused]) .ui5-nli-focusable {
	outline: none;
}

:host([focused]) .ui5-nli-focusable:after {
	content: "";
	border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	pointer-events: none;
}

:host([busy])  {
	opacity: 0.6;
	pointer-events: none;
}

:host([busy]) .ui5-nli-busy {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.ui5-nli-action {
	flex-shrink: 0;
	margin-inline-end: 0.5rem;
}

.ui5-nli-overflow-btn {
	margin-inline-end: 0.5rem;
}

.ui5-prio-icon {
	min-width: 1rem;
	min-height: 1rem;
	padding-inline-end: 0.625rem;
}

.ui5-prio-icon--message-error {
	color: var(--sapNegativeElementColor);
}

.ui5-prio-icon--message-warning {
	color: var(--sapCriticalElementColor);
}

.ui5-prio-icon--message-success {
	color: var(--sapPositiveElementColor);
}

:host([wrapping-type="None"]) .ui5-nli-title-text {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

:host(:not([wrapping-type="Normal"])) .ui5-nli-description {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

:host([_show-more-pressed]) .ui5-nli-title-text {
	-webkit-line-clamp: unset;
}

:host([_show-more-pressed]) .ui5-nli-description  {
	-webkit-line-clamp: unset;
}

:host([read]) .ui5-nli-title-text {
	font-weight: normal;
}

:host(:first-of-type) {
	border-top-left-radius: var(--_ui5-notification_item-border-raius);
	border-top-right-radius: var(--_ui5-notification_item-border-raius);
}

:host(:last-of-type) {
	border-bottom-left-radius: var(--_ui5-notification_item-border-raius);
	border-bottom-right-radius: var(--_ui5-notification_item-border-raius);
}

:host(:first-of-type) .ui5-nli-focusable:after {
	border-top-left-radius: var(--_ui5-notification_item-border-raius);
	border-top-right-radius: var(--_ui5-notification_item-border-raius);
}

:host(:last-of-type) .ui5-nli-focusable:after {
	border-bottom-left-radius: var(--_ui5-notification_item-border-raius);
	border-bottom-right-radius: var(--_ui5-notification_item-border-raius);
}

/* End */

.ui5-nli-root {
	display: flex;
	flex-direction: row-reverse;
	position: relative;
	width: 100%;
	padding-inline: 1rem 0.5rem;
	padding-block: 1rem;
	box-sizing: border-box;
	cursor: pointer;
}

.ui5-nli-content {
	display: flex;
	flex-direction: column;
	flex: 1;
	min-width: 0; /* fixes Chrome flex issue */
	width: 100%;
	padding-inline: 0.75rem 1rem;
	font-family: "72override", var(--sapFontFamily);
	box-sizing: border-box;
}

.ui5-nli-title-text-wrapper {
	display: flex;
	flex-direction: row;
}

.ui5-nli-title-text {
	display: flex;
	margin-bottom: 0.25rem;
	box-sizing: border-box;
}

.ui5-nli-title-text {
	color: var(--sapGroup_TitleTextColor);
	font-weight: bold;
	font-size: var(--sapFontHeader6Size);
}

.ui5-nli-description {
	display: flex;
	margin-top: 0.5rem;
	color: var(--sapTextColor);
	font-size: var(--sapFontSize);
	box-sizing: border-box;
}

/*  Footer */

.ui5-nli-footer {
	display: flex;
	color: var(--sapContent_LabelColor);
	font-size: var(--sapFontSize);
	padding-top: 0.5rem;
	box-sizing: border-box;
	flex-wrap: wrap;
	align-items: center;
}

.ui5-nli-footer-divider {
	position: relative;
	align-items: center;
	margin-inline: 0.5rem;
}

.ui5-nli-footer-showMore {
	margin-inline-start: 1rem;
}

::slotted([slot^="footnotes"]) {
	color: var(--sapContent_LabelColor);
	font-size: var(--sapFontSize);
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}

/* Actions */

.ui5-nli-actions {
	display: flex;
	box-sizing: border-box;
}
`};var w=globalThis&&globalThis.__decorate||function(o,e,t,i){var s=arguments.length,a=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,e,t,i);else for(var p=o.length-1;p>=0;p--)(c=o[p])&&(a=(s<3?c(a):s>3?c(e,t,a):c(e,t))||a);return s>3&&a&&Object.defineProperty(e,t,a),a},u;let m=u=class extends nt{constructor(){super(),this._titleTextOverflowHeight=0,this._descOverflowHeight=0,this._onResizeBound=this.onResize.bind(this)}onEnterDOM(){A.register(this,this._onResizeBound)}onExitDOM(){A.deregister(this,this._onResizeBound)}get hasDesc(){return!!this.description.length}get hasFootNotes(){return!!this.footnotes.length}get showMoreText(){return this._showMorePressed?u.i18nFioriBundle.getText(he):u.i18nFioriBundle.getText(fe)}get overflowBtnAccessibleName(){return u.i18nFioriBundle.getText(me)}get closeBtnAccessibleName(){return u.i18nFioriBundle.getText(be)}get hideShowMore(){if(!(this.wrappingType===N.None&&this._showMore))return!0}get descriptionDOM(){return this.shadowRoot.querySelector(".ui5-nli-description")}get titleTextDOM(){return this.shadowRoot.querySelector(".ui5-nli-title-text")}get titleTextHeight(){return this.titleTextDOM.offsetHeight}get descriptionHeight(){return this.descriptionDOM.offsetHeight}get titleTextOverflows(){const e=this.titleTextDOM;return e?e.offsetHeight<e.scrollHeight:!1}get descriptionOverflows(){const e=this.descriptionDOM;return e?e.offsetHeight<e.scrollHeight:!1}get footerItems(){return this.footnotes.map((e,t,i)=>({slotName:e._individualSlot,showDivider:t!==i.length-1}))}get ariaLabelledBy(){const e=this._id,t=[];return this.hasTitleText&&t.push(`${e}-title-text`),this.hasDesc&&t.push(`${e}-description`),this.hasFootNotes&&t.push(`${e}-footer`),t.push(`${e}-invisibleText`),t.join(" ")}get priorityText(){return this.priority===h.High?u.i18nFioriBundle.getText(ve):this.priority===h.Medium?u.i18nFioriBundle.getText(we):this.priority===h.Low?u.i18nFioriBundle.getText(ye):""}get accInvisibleText(){const e=u.i18nFioriBundle.getText(ge),t=this.read?u.i18nFioriBundle.getText(_e):u.i18nFioriBundle.getText(Te),i=this.priorityText;return`${e} ${t} ${i}`}_onclick(e){this.fireItemPress(e)}_onShowMoreClick(e){e.preventDefault(),this._showMorePressed=!this._showMorePressed}_onkeydown(e){super._onkeydown(e),re(e)&&this.fireItemPress(e)}_onkeyup(e){super._onkeyup(e);const t=j(e);if(t&&T(e)==="link"){this._onShowMoreClick(e);return}t&&this.fireItemPress(e)}fireItemPress(e){T(e)==="button"||T(e)==="link"||this.fireEvent("_press",{item:this})}onResize(){if(this.wrappingType===N.Normal){this._showMore=!1;return}const e=this.titleTextHeight>this._titleTextOverflowHeight,t=this.hasDesc&&this.descriptionHeight>this._descOverflowHeight,i=e||t;if(this._showMorePressed&&i){this._showMore=!0;return}if(this.titleTextOverflows||this.descriptionOverflows){this._titleTextOverflowHeight=this.titleTextHeight,this._descOverflowHeight=this.hasDesc?this.descriptionHeight:0,this._showMore=!0;return}this._showMore=!1}};w([d({type:N,defaultValue:N.None})],m.prototype,"wrappingType",void 0);w([d({type:Boolean})],m.prototype,"_showMorePressed",void 0);w([d({type:Boolean})],m.prototype,"_showMore",void 0);w([k()],m.prototype,"avatar",void 0);w([k({type:HTMLElement,individualSlots:!0})],m.prototype,"footnotes",void 0);w([k({type:Node,default:!0})],m.prototype,"description",void 0);m=u=w([M({tag:"ui5-li-notification",languageAware:!0,styles:lt,template:st,dependencies:[se,ae,le,ce,de]}),S("_press")],m);m.define();const ct=m,dt=Object.freeze(Object.defineProperty({__proto__:null,default:ct},Symbol.toStringTag,{value:"Module"})),I=W("ui5-li-notification",["wrappingType","busyDelay","priority","titleText"],["busy","read","showClose","selected"],["avatar","footnotes","actions"],["close"],()=>V(()=>Promise.resolve().then(()=>dt),void 0,import.meta.url));I.displayName="NotificationListItem";I.defaultProps={busyDelay:1e3,priority:h.None};try{I.displayName="NotificationListItem",I.__docgenInfo={description:'The `NotificationListItem` is a type of list item, meant to display notifications.\nThe component has a rich set of various properties that allows the user to set `avatar`, `titleText`, descriptive `content` and `footnotes` to fully describe a notification.\nThe user can:\n\n*   display a `Close` button\n*   can control whether the `titleText` and `description` should wrap or truncate and display a `ShowMore` button to switch between less and more information\n*   add custom actions by using the `NotificationAction` component\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/NotificationListItem" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"NotificationListItem",props:{avatar:{defaultValue:null,description:'Defines the avatar, displayed in the `NotificationListItem`.\n\n**Note:** Consider using the `Avatar` to display icons, initials or images.\n**Note:**In order to be complaint with the UX guidlines and for best experience, we recommend using avatars with 2rem X 2rem in size (32px X 32px). In case you are using the `Avatar` you can set its `size` property to `XS` to get the required size - `<Avatar size="XS"></Avatar>`.\n\n__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="avatar"`).\nSince you can\'t change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component\'s children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).',name:"avatar",required:!1,type:{name:"UI5WCSlotsNode"}},children:{defaultValue:null,description:"Defines the content of the `NotificationListItem`, usually a description of the notification.\n\n**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},footnotes:{defaultValue:null,description:`Defines the elements, displayed in the footer of the of the component.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="footnotes"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"footnotes",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},actions:{defaultValue:null,description:`Defines the actions, displayed in the top-right area.

**Note:** use the \`NotificationAction\` component.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="actions"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"actions",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onClose:{defaultValue:null,description:"Fired when the `Close` button is pressed.",name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<NotificationListItemDomRef, NotificationListItemBaseCloseEventDetail>) => void"}},wrappingType:{defaultValue:null,description:"Defines if the `titleText` and `description` should wrap, they truncate by default.\n\n**Note:** by default the `titleText` and `description`, and a `ShowMore/Less` button would be displayed.",name:"wrappingType",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Normal"'},{value:'"Normal"'}]}},busy:{defaultValue:null,description:"Defines if a busy indicator would be displayed over the item.",name:"busy",required:!1,type:{name:"boolean"}},busyDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the busy indicator will show up for this component.",name:"busyDelay",required:!1,type:{name:"number"}},priority:{defaultValue:{value:"Priority.None"},description:"Defines the `priority` of the item. Available options are:\n\n*   `None`\n*   `Low`\n*   `Medium`\n*   `High`",name:"priority",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Medium"'},{value:'"High"'},{value:'"Medium"'},{value:'"Low"'},{value:'"None"'},{value:'"High"'},{value:'"Low"'}]}},read:{defaultValue:null,description:"Defines if the `notification` is new or has been already read.\n\n**Note:** if set to `false` the `titleText` has bold font, if set to true - it has a normal font.",name:"read",required:!1,type:{name:"boolean"}},showClose:{defaultValue:null,description:"Defines if the `close` button would be displayed.",name:"showClose",required:!1,type:{name:"boolean"}},titleText:{defaultValue:null,description:"Defines the `titleText` of the item.",name:"titleText",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"Defines the selected state of the `ListItem`.",name:"selected",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{$ as N,h as P,nt as a,I as b};
//# sourceMappingURL=index-8f8aa540.js.map
