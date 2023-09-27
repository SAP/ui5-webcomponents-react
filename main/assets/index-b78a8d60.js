import{_ as S}from"./iframe-bb104014.js";import{U as I}from"./UI5Element-fe43d284.js";import{p as h,c as v,w as k,b as o,l as n,d as l}from"./withWebComponent-40b4b429.js";import D from"./GroupHeaderListItem-1642eb17.js";import{V as y}from"./ValueState-2c5e5904.js";import{s as T}from"./slot-76e48863.js";import w from"./StandardListItem-4d8bc973.js";import{o as E}from"./class-map-c90b90b7.js";import{L as $}from"./ListItem-8f00fe18.js";import{V as N}from"./ValueState-ab6838cc.js";var x=globalThis&&globalThis.__decorate||function(i,t,e,s){var c=arguments.length,a=c<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,t,e,s);else for(var u=i.length-1;u>=0;u--)(r=i[u])&&(a=(c<3?r(a):c>3?r(t,e,a):r(t,e))||a);return c>3&&a&&Object.defineProperty(t,e,a),a};let b=class extends I{get groupItem(){return!0}};x([h()],b.prototype,"text",void 0);b=x([v({tag:"ui5-suggestion-group-item",dependencies:[D]})],b);b.define();const C=b,P=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),g=k("ui5-suggestion-group-item",["text"],[],[],[],()=>S(()=>Promise.resolve().then(()=>P),void 0,import.meta.url));g.displayName="SuggestionGroupItem";try{g.displayName="SuggestionGroupItem",g.__docgenInfo={description:"The `SuggestionGroupItem` is type of suggestion item, that can be used to split the `Input` suggestions into groups",displayName:"SuggestionGroupItem",props:{text:{defaultValue:null,description:"Defines the text of the `SuggestionGroupItem`.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function V(i,t,e){return o`<li part="native-li" data-sap-focus-ref tabindex="${n(this._effectiveTabIndex)}" class="${E(this.classes.main)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" @mouseup="${this._onmouseup}" @mousedown="${this._onmousedown}" @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" @click="${this._onclick}" role="${n(this._accInfo.role)}" aria-expanded="${n(this._accInfo.ariaExpanded)}" title="${n(this.title)}" aria-level="${n(this._accInfo.ariaLevel)}" aria-haspopup="${n(this._accInfo.ariaHaspopup)}" aria-posinset="${n(this._accInfo.posinset)}" aria-roledescription="${n(this.accessibleRoleDescription)}" aria-setsize="${n(this._accInfo.setsize)}" aria-describedby="${n(this._id)}-invisibleText-describedby" aria-labelledby="${n(this._accessibleNameRef)}" aria-disabled="${n(this._ariaDisabled)}" aria-selected="${n(this._accInfo.ariaSelected)}" aria-checked="${n(this._accInfo.ariaChecked)}" aria-owns="${n(this._accInfo.ariaOwns)}">${this.placeSelectionElementBefore?L.call(this,i,t,e):void 0}<div part="content" id="${n(this._id)}-content" class="ui5-li-content">${this.hasImageContent?j.call(this,i,t,e):G.call(this,i,t,e)}${this.displayIconBegin?U.call(this,i,t,e):void 0}<div class="ui5-li-text-wrapper">${this.hasTitle?W.call(this,i,t,e):void 0}${this.hasDescription?z.call(this,i,t,e):void 0}${this.typeActive?void 0:K.call(this,i,t,e)}</div>${this.hasDescription?void 0:Q.call(this,i,t,e)}</div>${this.displayIconEnd?Y.call(this,i,t,e):void 0}${this.typeDetail?Z.call(this,i,t,e):void 0}${this.typeNavigation?ee.call(this,i,t,e):void 0}${this.navigated?te.call(this,i,t,e):void 0}${this.placeSelectionElementAfter?ie.call(this,i,t,e):void 0}<span id="${n(this._id)}-invisibleText" class="ui5-hidden-text">${n(this._accInfo.listItemAriaLabel)}${n(this.accessibleName)}</span><span id="${n(this._id)}-invisibleText-describedby" class="ui5-hidden-text">${n(this._accInfo.ariaSelectedText)}</span></li> `}function L(i,t,e){return o`${this.modeSingleSelect?R.call(this,i,t,e):void 0}${this.modeMultiSelect?B.call(this,i,t,e):void 0}${this.renderDeleteButton?O.call(this,i,t,e):void 0}`}function R(i,t,e){return e?o`<${l("ui5-radio-button",t,e)} part="radio" ?disabled="${this.isInactive}" accessible-name="${n(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${n(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${l("ui5-radio-button",t,e)}>`:o`<ui5-radio-button part="radio" ?disabled="${this.isInactive}" accessible-name="${n(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${n(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`}function B(i,t,e){return e?o`<${l("ui5-checkbox",t,e)} part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${n(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${n(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${l("ui5-checkbox",t,e)}>`:o`<ui5-checkbox part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${n(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${n(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`}function O(i,t,e){return o`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot?q.call(this,i,t,e):A.call(this,i,t,e)}</div>`}function q(i,t,e){return o`<slot name="deleteButton"></slot>`}function A(i,t,e){return e?o`<${l("ui5-button",t,e)} part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${n(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${n(this.deleteText)}"></${l("ui5-button",t,e)}>`:o`<ui5-button part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${n(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${n(this.deleteText)}"></ui5-button>`}function j(i,t,e){return o`<div class="ui5-li-imgContent"><slot name="imageContent"></slot></div>`}function G(i,t,e){return o`${this.displayImage?M.call(this,i,t,e):void 0}`}function M(i,t,e){return e?o`<${l("ui5-avatar",t,e)} shape="Square" class="ui5-li-img"><img src="${n(this.image)}" class="ui5-li-img-inner" /></${l("ui5-avatar",t,e)}>`:o`<ui5-avatar shape="Square" class="ui5-li-img"><img src="${n(this.image)}" class="ui5-li-img-inner" /></ui5-avatar>`}function U(i,t,e){return e?o`<${l("ui5-icon",t,e)} part="icon" name="${n(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></${l("ui5-icon",t,e)}>`:o`<ui5-icon part="icon" name="${n(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></ui5-icon>`}function W(i,t,e){return o`<span part="title" class="ui5-li-title"><slot></slot></span>`}function z(i,t,e){return o`<div class="ui5-li-description-info-wrapper"><span part="description" class="ui5-li-desc">${this.richDescription.length?F.call(this,i,t,e):H.call(this,i,t,e)}</span>${this.additionalText?J.call(this,i,t,e):void 0}</div>`}function F(i,t,e){return o`<slot name="richDescription"></slot>`}function H(i,t,e){return o`${n(this.description)}`}function J(i,t,e){return o`<span part="additional-text" class="ui5-li-additional-text">${n(this.additionalText)}</span>`}function K(i,t,e){return o`<span class="ui5-hidden-text">${n(this.type)}</span>`}function Q(i,t,e){return o`${this.additionalText?X.call(this,i,t,e):void 0}`}function X(i,t,e){return o`<span part="additional-text" class="ui5-li-additional-text">${n(this.additionalText)}</span>`}function Y(i,t,e){return e?o`<${l("ui5-icon",t,e)} part="icon" name="${n(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></${l("ui5-icon",t,e)}>`:o`<ui5-icon part="icon" name="${n(this.icon)}" class="ui5-li-icon" accessible-role="presentation" aria-hidden="true"></ui5-icon>`}function Z(i,t,e){return e?o`<div class="ui5-li-detailbtn"><${l("ui5-button",t,e)} part="detail-button" design="Transparent" icon="edit" @click="${this.onDetailClick}"></${l("ui5-button",t,e)}></div>`:o`<div class="ui5-li-detailbtn"><ui5-button part="detail-button" design="Transparent" icon="edit" @click="${this.onDetailClick}"></ui5-button></div>`}function ee(i,t,e){return e?o`<${l("ui5-icon",t,e)} name ="slim-arrow-right"></${l("ui5-icon",t,e)}>`:o`<ui5-icon name ="slim-arrow-right"></ui5-icon>`}function te(i,t,e){return o`<div class="ui5-li-navigated"></div>`}function ie(i,t,e){return o`${this.modeSingleSelect?ne.call(this,i,t,e):void 0}${this.modeMultiSelect?oe.call(this,i,t,e):void 0}${this.renderDeleteButton?ae.call(this,i,t,e):void 0}`}function ne(i,t,e){return e?o`<${l("ui5-radio-button",t,e)} part="radio" ?disabled="${this.isInactive}" accessible-name="${n(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${n(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${l("ui5-radio-button",t,e)}>`:o`<ui5-radio-button part="radio" ?disabled="${this.isInactive}" accessible-name="${n(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${n(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`}function oe(i,t,e){return e?o`<${l("ui5-checkbox",t,e)} part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${n(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${n(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${l("ui5-checkbox",t,e)}>`:o`<ui5-checkbox part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${n(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${n(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`}function ae(i,t,e){return o`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot?le.call(this,i,t,e):se.call(this,i,t,e)}</div>`}function le(i,t,e){return o`<slot name="deleteButton"></slot>`}function se(i,t,e){return e?o`<${l("ui5-button",t,e)} part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${n(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${n(this.deleteText)}"></${l("ui5-button",t,e)}>`:o`<ui5-button part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${n(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${n(this.deleteText)}"></ui5-button>`}var _=globalThis&&globalThis.__decorate||function(i,t,e,s){var c=arguments.length,a=c<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,t,e,s);else for(var u=i.length-1;u>=0;u--)(r=i[u])&&(a=(c<3?r(a):c>3?r(t,e,a):r(t,e))||a);return c>3&&a&&Object.defineProperty(t,e,a),a};let m=class extends w{onBeforeRendering(){super.onBeforeRendering(),this.hasTitle=!!this.titleText.length}get effectiveTitle(){return this.titleText.filter(t=>t.nodeType!==Node.COMMENT_NODE).map(t=>t.textContent).join("")}get hasDescription(){return this.richDescription.length||this.description}get groupItem(){return!1}};_([T({type:HTMLElement})],m.prototype,"richDescription",void 0);_([T({type:Node,default:!0})],m.prototype,"titleText",void 0);m=_([v({tag:"ui5-li-suggestion-item",template:V})],m);m.define();const ce=m;var p=globalThis&&globalThis.__decorate||function(i,t,e,s){var c=arguments.length,a=c<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,t,e,s);else for(var u=i.length-1;u>=0;u--)(r=i[u])&&(a=(c<3?r(a):c>3?r(t,e,a):r(t,e))||a);return c>3&&a&&Object.defineProperty(t,e,a),a};let d=class extends I{get groupItem(){return!1}};p([h()],d.prototype,"text",void 0);p([h({type:$,defaultValue:$.Active})],d.prototype,"type",void 0);p([h()],d.prototype,"description",void 0);p([h()],d.prototype,"icon",void 0);p([h({type:Boolean})],d.prototype,"iconEnd",void 0);p([h()],d.prototype,"image",void 0);p([h()],d.prototype,"additionalText",void 0);p([h({type:y,defaultValue:y.None})],d.prototype,"additionalTextState",void 0);d=p([v({tag:"ui5-suggestion-item",dependencies:[ce]})],d);d.define();const re=d,de=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"})),f=k("ui5-suggestion-item",["additionalText","additionalTextState","description","icon","image","text","type"],["iconEnd"],[],[],()=>S(()=>Promise.resolve().then(()=>de),void 0,import.meta.url));f.displayName="SuggestionItem";f.defaultProps={additionalTextState:N.None,type:$.Active};try{f.displayName="SuggestionItem",f.__docgenInfo={description:"The `SuggestionItem` represents the suggestion item of the `Input`",displayName:"SuggestionItem",props:{additionalText:{defaultValue:null,description:"Defines the `additionalText`, displayed in the end of the item.",name:"additionalText",required:!1,type:{name:"string"}},additionalTextState:{defaultValue:{value:"ValueState.None"},description:'Defines the state of the `additionalText`.\n\nAvailable options are: `"None"` (by default), `"Success"`, `"Information"`, `"Warning"` and `"Error"`.',name:"additionalTextState",required:!1,type:{name:"enum",value:[{value:'"Error"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},description:{defaultValue:null,description:"Defines the description displayed right under the item text, if such is present.",name:"description",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:'Defines the `icon` source URI.\n\n**Note:** SAP-icons font provides numerous built-in icons. To find all the available icons, see the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.',name:"icon",required:!1,type:{name:"string"}},iconEnd:{defaultValue:null,description:"Defines whether the `icon` should be displayed in the beginning of the item or in the end.\n\n**Note:** If `image` is set, the `icon` would be displayed after the `image`.",name:"iconEnd",required:!1,type:{name:"boolean"}},image:{defaultValue:null,description:"Defines the `image` source URI.\n\n**Note:** The `image` would be displayed in the beginning of the item.",name:"image",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},type:{defaultValue:{value:"ListItemType.Active"},description:"Defines the visual indication and behavior of the item. Available options are `Active` (by default), `Inactive` and `Detail`.\n\n**Note:** When set to `Active`, the item will provide visual response upon press and hover, while when `Inactive` or `Detail` - will not.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'},{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{f as S,g as a,re as b,C as c,ce as d};
//# sourceMappingURL=index-b78a8d60.js.map
