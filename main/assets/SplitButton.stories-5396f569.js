import{M as N,C as O,f as j,a as V}from"./chunk-PCJTTTQV-73b064bc.js";import{_ as R}from"./iframe-d5e6e2ef.js";import{a as C,U as F,d as U}from"./UI5Element-78be0f3d.js";import{e as x,l as e,s as h,a as q,b as z,p as a,c as H,d as M,w as K}from"./withWebComponent-d4224c1c.js";import{e as w}from"./Icon-70a9e5b9.js";import{s as L}from"./slot-76e48863.js";import{p as y,o as B,C as $,B as T,Z as k,b as v,c as g,d as W,a6 as X}from"./Icons-26e87c01.js";import{g as A}from"./MarkedEvents-b83081e9.js";import"./slim-arrow-down-59731cbb.js";import{B as _,a as Y}from"./Button-427cd4bb.js";import{bq as I,br as D}from"./i18n-defaults-f002f496.js";import"./employee-1c1d2fc1.js";import{e as Z}from"./DomRefTable.module-0ad99126.js";import{D as G}from"./DocsHeader-edc91194.js";import{F as J}from"./Footer-08cc874e.js";import{j as n}from"./jsx-runtime-5926aa06.js";import"./index-ebeaab24.js";import{u as S}from"./index-bda0bad7.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"../sb-preview/runtime.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./AriaLabelHelper-43a261ec.js";import"./Device-99b8bbf4.js";import"./react-jss.esm-022ab528.js";import"./index-3d63c45a.js";import"./decline-09ce3004.js";import"./i18n-defaults-80781f7e.js";import"./information-872f55da.js";import"./class-map-18f572ce.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-3e959ad1.js";import"./index-7ab98221.js";import"./Integer-f7f172c9.js";import"./index-ae58dacb.js";import"./Avatar-e1c9d8f0.js";import"./ResizeHandler-15c77712.js";import"./index-fe336cbb.js";import"./index-91a140ca.js";import"./Link-04c4a519.js";import"./WrappingType-b81e595a.js";import"./index-4becd987.js";import"./TableOfContent-b6e25edd.js";import"./index-7826d545.js";import"./Label-263c93f2.js";import"./index-52b25abf.js";import"./index-e694a510.js";import"./Popover-a03c4c52.js";import"./PopupsCommon.css-1eb36bcf.js";import"./FocusableElements-53839075.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-54298215.js";import"./BrowserScrollbar.css-119d6915.js";function Q(r,t,o){return o?x`<div class="ui5-split-button-root" role="group" tabindex=${e(this._tabIndex)} aria-labelledby="${e(this._id)}-invisibleTextDefault ${e(this._id)}-invisibleText" @focusout=${this._onFocusOut} @focusin=${this._onFocusIn} @keydown=${this._onKeyDown} @keyup=${this._onKeyUp}><${h("ui5-button",t,o)} class="ui5-split-text-button" design="${e(this.design)}" dir=${e(this.effectiveDir)} icon="${e(this._textButtonIcon)}" tabindex="-1" ?disabled="${this.disabled}" ?active="${this._textButtonActive}" @click="${this._fireClick}" @touchstart=${this._textButtonPress} @mousedown=${this._textButtonPress} @mouseup=${this._textButtonRelease} @focusin=${this._setTabIndexValue} @focusout=${this._onFocusOut}>${this.isTextButton?E.call(this,r,t,o):void 0}</${h("ui5-button",t,o)}><div class="ui5-split-arrow-button-wrapper" dir=${e(this.effectiveDir)}><${h("ui5-button",t,o)} class="ui5-split-arrow-button" design="${e(this.design)}" icon="slim-arrow-down" tabindex="-1" ?disabled="${this.disabled}" ?active="${this._arrowButtonActive}" aria-expanded="${e(this.accessibilityInfo.ariaExpanded)}" aria-haspopup="${e(this.accessibilityInfo.ariaHaspopup)}" @click="${this._fireArrowClick}" @focusin=${this._setTabIndexValue} @focusout=${this._onFocusOut}></${h("ui5-button",t,o)}></div><span id="${e(this._id)}-invisibleText" class="ui5-hidden-text">${e(this.accessibilityInfo.description)}${e(this.accessibilityInfo.keyboardHint)}${e(this.accessibleName)}</span><span id="${e(this._id)}-invisibleTextDefault" class="ui5-hidden-text">${e(this.textButtonAccText)}</span></div>`:x`<div class="ui5-split-button-root" role="group" tabindex=${e(this._tabIndex)} aria-labelledby="${e(this._id)}-invisibleTextDefault ${e(this._id)}-invisibleText" @focusout=${this._onFocusOut} @focusin=${this._onFocusIn} @keydown=${this._onKeyDown} @keyup=${this._onKeyUp}><ui5-button class="ui5-split-text-button" design="${e(this.design)}" dir=${e(this.effectiveDir)} icon="${e(this._textButtonIcon)}" tabindex="-1" ?disabled="${this.disabled}" ?active="${this._textButtonActive}" @click="${this._fireClick}" @touchstart=${this._textButtonPress} @mousedown=${this._textButtonPress} @mouseup=${this._textButtonRelease} @focusin=${this._setTabIndexValue} @focusout=${this._onFocusOut}>${this.isTextButton?E.call(this,r,t,o):void 0}</ui5-button><div class="ui5-split-arrow-button-wrapper" dir=${e(this.effectiveDir)}><ui5-button class="ui5-split-arrow-button" design="${e(this.design)}" icon="slim-arrow-down" tabindex="-1" ?disabled="${this.disabled}" ?active="${this._arrowButtonActive}" aria-expanded="${e(this.accessibilityInfo.ariaExpanded)}" aria-haspopup="${e(this.accessibilityInfo.ariaHaspopup)}" @click="${this._fireArrowClick}" @focusin=${this._setTabIndexValue} @focusout=${this._onFocusOut}></ui5-button></div><span id="${e(this._id)}-invisibleText" class="ui5-hidden-text">${e(this.accessibilityInfo.description)}${e(this.accessibilityInfo.keyboardHint)}${e(this.accessibleName)}</span><span id="${e(this._id)}-invisibleTextDefault" class="ui5-hidden-text">${e(this.textButtonAccText)}</span></div>`}function E(r,t,o){return x`<slot></slot>`}C("@ui5/webcomponents-theming","sap_fiori_3",async()=>q);C("@ui5/webcomponents","sap_fiori_3",async()=>z);const tt={packageName:"@ui5/webcomponents",fileName:"themes/SplitButton.css",content:`:host {
	vertical-align: middle;
}
.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}
:host(:not([hidden])) {
	display: inline-block;
	height: 100%;
	border-radius: var(--_ui5_button_border_radius);
	background-color: var(--sapButton_Background);
}
:host([design="Positive"]:not([hidden])) {
	background-color: var(--sapButton_Accept_Background);
}
:host([design="Negative"]:not([hidden])) {
	background-color: var(--sapButton_Reject_Background);
}
:host([design="Attention"]:not([hidden])) {
	background-color: var(--sapButton_Attention_Background);
}
:host([design="Emphasized"]:not([hidden])) {
	background-color: var(--sapButton_Emphasized_Background);
}
:host([design="Transparent"]:not([hidden])) {
	background-color: transparent;
}
:host([design="Transparent"][disabled]:not([hidden])) {
	background-color: var(--_ui5_split_button_transparent_disabled_background);
}
:host([design="Transparent"]:not([hidden]):not([disabled]):hover) {
	background-color: var(--_ui5_split_button_transparent_hover_background);
}
:host([design="Transparent"]:not([hidden]):not([disabled]):hover) .ui5-split-arrow-button:not(:hover),
:host([design="Transparent"]:not([hidden]):not([disabled]):hover) .ui5-split-text-button:not(:hover) {
	color: var(--_ui5_split_button_transparent_hover_color);
}
:host([focused]) .ui5-split-button-root {
	outline: 0;
}
:host([focused]) .ui5-split-button-root:after {
	content: "";
	position: absolute;
	box-sizing: border-box;
	left: 0.125rem;
	top: 0.125rem;
	right: 0.125rem;
	bottom: 0.125rem;
	border: var(--_ui5_split_button_focused_border);
	pointer-events: none;
	border-radius: var(--_ui5_split_button_focused_border_radius);
}
:host([design="Emphasized"][focused]) .ui5-split-button-root:after {
	border-color: var(--sapContent_ContrastFocusColor);
}
.ui5-split-button-root {
	display: inline-block;
	position: relative;
	width: inherit;
}
.ui5-split-text-button {
	border-top-right-radius: var(--_ui5_split_button_hover_border_radius);
	border-bottom-right-radius: var(--_ui5_split_button_hover_border_radius);
	border-right-width: var(--_ui5_split_button_text_button_right_border_width);
	margin-right: var(--_ui5_split_button_text_button_width);
	vertical-align: top;
	width: inherit;
}
.ui5-split-text-button:hover {
	border-top-right-radius: var(--_ui5_split_button_hover_border_radius);
	border-bottom-right-radius: var(--_ui5_split_button_hover_border_radius);
}
.ui5-split-text-button[active] {
	outline: 0;
}
.ui5-split-arrow-button-wrapper {
	position: absolute;
	top: 0;
	right: 0;
}
.ui5-split-arrow-button {
	border-top-left-radius: var(--_ui5_split_button_hover_border_radius);
	border-bottom-left-radius: var(--_ui5_split_button_hover_border_radius);
	width: 2.25rem;
}
.ui5-split-text-button[dir="rtl"]:hover {
	border-top-left-radius: var(--_ui5_split_button_hover_border_radius);
	border-bottom-left-radius: var(--_ui5_split_button_hover_border_radius);
}
[dir="rtl"] .ui5-split-arrow-button:hover {
	border-top-right-radius: var(--_ui5_split_button_hover_border_radius);
	border-bottom-right-radius: var(--_ui5_split_button_hover_border_radius);
}
.ui5-split-arrow-button:hover {
	border-top-left-radius: var(--_ui5_split_button_hover_border_radius);
	border-bottom-left-radius: var(--_ui5_split_button_hover_border_radius);
}
.ui5-split-arrow-button:before {
	content: "";
	position: absolute;
	box-sizing: border-box;
	pointer-events: none;
	left: var(--_ui5_split_button_middle_separator_left);
	top: var(--_ui5_split_button_middle_separator_top);
	right: 0;
	height: var(--_ui5_split_button_middle_separator_height);
	border: 0 solid var(--sapButton_TextColor);
	border-left-width: 0.0625rem;
}
[dir="rtl"] .ui5-split-arrow-button:before {
	content: "";
	position: absolute;
	box-sizing: border-box;
	pointer-events: none;
	right: var(--_ui5_split_button_middle_separator_left);
	top: var(--_ui5_split_button_middle_separator_top);
	left: 0;
	height: var(--_ui5_split_button_middle_separator_height);
	border: 0 solid var(--sapButton_TextColor);
	border-right-width: 0.0625rem;
	border-left-width: 0;
}
.ui5-split-text-button:hover + .ui5-split-arrow-button-wrapper > .ui5-split-arrow-button:before,
.ui5-split-arrow-button:hover:before {
	display: var(--_ui5_split_button_middle_separator_hover_display);
}
/* separator colors */
.ui5-split-arrow-button[design="Transparent"]:before {
	border-color: var(--sapButton_Lite_TextColor);
}
.ui5-split-arrow-button[design="Emphasized"]:before {
	border-color: var(--sapButton_Emphasized_TextColor);
}
.ui5-split-arrow-button[design="Positive"]:before {
	border-color: var(--sapButton_Accept_TextColor);
}
.ui5-split-arrow-button[design="Negative"]:before {
	border-color: var(--sapButton_Reject_TextColor);
}
.ui5-split-arrow-button[design="Attention"]:before {
	border-color: var(--_ui5_split_button_attention_separator_color);
}
.ui5-split-text-button[dir="rtl"] {
	border-radius: 0 var(--_ui5_button_border_radius) var(--_ui5_button_border_radius) 0;
	border-width: 1px 1px 1px 0;
	margin-right: 0;
	margin-left: var(--_ui5_split_button_text_button_width);
}
.ui5-split-arrow-button-wrapper[dir="rtl"] {
	left: 0;
	right: auto;
}
[dir="rtl"] .ui5-split-arrow-button {
	border-radius: var(--_ui5_button_border_radius) 0 0 var(--_ui5_button_border_radius);
}
.ui5-split-arrow-button[focused]::part(button)::after {
	border-top-left-radius: var(--_ui5_split_button_inner_focused_border_radius_inner);
	border-bottom-left-radius: var(--_ui5_split_button_inner_focused_border_radius_inner);
}
.ui5-split-text-button[focused]::part(button)::after {
	border-top-right-radius: var(--_ui5_split_button_inner_focused_border_radius_inner);
	border-bottom-right-radius: var(--_ui5_split_button_inner_focused_border_radius_inner);
}
[dir="rtl"] .ui5-split-arrow-button[focused]::part(button)::after {
	border-top-left-radius: var(--_ui5_split_button_inner_focused_border_radius_outer);
	border-bottom-left-radius: var(--_ui5_split_button_inner_focused_border_radius_outer);
	border-top-right-radius: var(--_ui5_split_button_inner_focused_border_radius_inner);
	border-bottom-right-radius: var(--_ui5_split_button_inner_focused_border_radius_inner);
}
.ui5-split-text-button[dir="rtl"][focused]::part(button)::after {
	border-top-left-radius: var(--_ui5_split_button_inner_focused_border_radius_inner);
	border-bottom-left-radius: var(--_ui5_split_button_inner_focused_border_radius_inner);
	border-top-right-radius: var(--_ui5_split_button_inner_focused_border_radius_outer);
	border-bottom-right-radius: var(--_ui5_split_button_inner_focused_border_radius_outer);
}`};var s=globalThis&&globalThis.__decorate||function(r,t,o,u){var c=arguments.length,d=c<3?t:u===null?u=Object.getOwnPropertyDescriptor(t,o):u,b;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")d=Reflect.decorate(r,t,o,u);else for(var m=r.length-1;m>=0;m--)(b=r[m])&&(d=(c<3?b(d):c>3?b(t,o,d):b(t,o))||d);return c>3&&d&&Object.defineProperty(t,o,d),d},p;let i=p=class extends F{static async onDefine(){p.i18nBundle=await U("@ui5/webcomponents")}constructor(){super();const t=()=>{this._textButtonActive=!0,this.focused=!1,this._setTabIndexValue()};this._textButtonPress={handleEvent:t,passive:!0}}onBeforeRendering(){this._textButtonIcon=this.textButton&&this.activeIcon!==""&&this._textButtonActive&&!this._shiftOrEscapePressed?this.activeIcon:this.icon,this.disabled&&(this._tabIndex="-1")}_onFocusOut(t){this.disabled||A(t)||(this._shiftOrEscapePressed=!1,this.focused=!1,this._setTabIndexValue())}_onFocusIn(t){this.disabled||A(t)||(this._shiftOrEscapePressed=!1,this.focused=!0)}_onKeyDown(t){y(t)||B(t)||$(t)||T(t)||k(t)?(t.preventDefault(),this._arrowButtonActive=!0,this._fireArrowClick()):(v(t)||g(t))&&(t.preventDefault(),this._textButtonActive=!0,g(t)?this._fireClick():this._spacePressed=!0),this._spacePressed&&(W(t)||X(t))&&(this._shiftOrEscapePressed=!0,this._textButtonActive=!1),this._setTabIndexValue()}_onKeyUp(t){y(t)||B(t)||$(t)||T(t)||k(t)?this._arrowButtonActive=!1:(v(t)||g(t))&&(this._textButtonActive=!1,v(t)&&(t.preventDefault(),t.stopPropagation(),this._fireClick(),this._spacePressed=!1)),this._setTabIndexValue()}_fireClick(t){t==null||t.stopPropagation(),this._shiftOrEscapePressed||this.fireEvent("click"),this._shiftOrEscapePressed=!1}_fireArrowClick(t){t==null||t.stopPropagation(),this.fireEvent("arrow-click")}_textButtonRelease(){this._textButtonActive=!1,this._textButtonIcon=this.textButton&&this.activeIcon!==""&&this._textButtonActive&&!this._shiftOrEscapePressed?this.activeIcon:this.icon,this._setTabIndexValue()}_setTabIndexValue(){const t=this.textButton,o=this.arrowButton,u=t&&(t.focused||t.active)||o&&(o.focused||o.active);this._tabIndex=this.disabled||u?"-1":"0"}get textButtonAccText(){return this.textContent}get isTextButton(){return!!this.textContent}get textButton(){var t;return(t=this.getDomRef())==null?void 0:t.querySelector(".ui5-split-text-button")}get arrowButton(){var t;return(t=this.getDomRef())==null?void 0:t.querySelector(".ui5-split-arrow-button")}get accessibilityInfo(){return{ariaExpanded:this._splitButtonAccInfo&&this._splitButtonAccInfo.ariaExpanded,ariaHaspopup:this._splitButtonAccInfo&&this._splitButtonAccInfo.ariaHaspopup,description:p.i18nBundle.getText(I),keyboardHint:p.i18nBundle.getText(D)}}get ariaLabelText(){return[p.i18nBundle.getText(I),p.i18nBundle.getText(D)].join(" ")}};s([a()],i.prototype,"icon",void 0);s([a()],i.prototype,"activeIcon",void 0);s([a({type:_,defaultValue:_.Default})],i.prototype,"design",void 0);s([a({type:Boolean})],i.prototype,"disabled",void 0);s([a({defaultValue:void 0})],i.prototype,"accessibleName",void 0);s([a({type:Boolean})],i.prototype,"focused",void 0);s([a({type:Object})],i.prototype,"_splitButtonAccInfo",void 0);s([a({defaultValue:"0",noAttribute:!0})],i.prototype,"_tabIndex",void 0);s([a({type:Boolean,noAttribute:!0})],i.prototype,"_spacePressed",void 0);s([a({type:Boolean,noAttribute:!0})],i.prototype,"_shiftOrEscapePressed",void 0);s([a({type:Boolean,noAttribute:!0})],i.prototype,"_textButtonActive",void 0);s([a({noAttribute:!0})],i.prototype,"_textButtonIcon",void 0);s([a({type:Boolean,noAttribute:!0})],i.prototype,"_arrowButtonActive",void 0);s([L({type:Node,default:!0})],i.prototype,"text",void 0);i=p=s([H({tag:"ui5-split-button",renderer:M,styles:tt,template:Q,dependencies:[Y]}),w("click"),w("arrow-click")],i);i.define();const et=i,ot=Object.freeze(Object.defineProperty({__proto__:null,default:et},Symbol.toStringTag,{value:"Module"})),l=K("ui5-split-button",["accessibleName","activeIcon","design","icon"],["disabled"],[],["arrow-click","click"],()=>R(()=>Promise.resolve().then(()=>ot),void 0,import.meta.url));l.displayName="SplitButton";l.defaultProps={design:_.Default};try{l.displayName="SplitButton",l.__docgenInfo={description:"`SplitButton` enables users to trigger actions. It is constructed of two separate actions - default action and arrow action that can be activated by clicking or tapping, or by pressing certain keyboard keys - `Space` or `Enter` for default action, and `Arrow Down` or `Arrow Up` for arrow action.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-SplitButton)",displayName:"SplitButton",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onArrowClick:{defaultValue:null,description:"Fired when the user clicks on the arrow action.",name:"onArrowClick",required:!1,type:{name:"(event: Ui5CustomEvent<SplitButtonDomRef, never>) => void"}},onClick:{defaultValue:null,description:"Fired when the user clicks on the default action.",name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<SplitButtonDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},activeIcon:{defaultValue:null,description:"Defines the icon to be displayed in active state as graphical element within the component.",name:"activeIcon",required:!1,type:{name:"string"}},design:{defaultValue:{value:"ButtonDesign.Default"},description:"Defines the component design.\n\n**The available values are:**\n\n*   `Default`\n*   `Emphasized`\n*   `Positive`\n*   `Negative`\n*   `Transparent`\n*   `Attention`",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},disabled:{defaultValue:null,description:"Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.`,name:"icon",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const it="## Usage\n\n`SplitButton` consists two separate buttons:\n\n- for the first one (default action) you can define some `text` or an `icon`, or both. Also, it is possible to define different icon for active state of this button - `activeIcon`.\n- the second one (arrow action) contains only `slim-arrow-down` icon.\n\nYou can choose a `design` from a set of predefined types (the same as for Button) that offer different styling to correspond to the triggered action. Both text and arrow actions have the same design.\n\nYou can set the `SplitButton` as enabled or disabled. Both parts of an enabled `SplitButton` can be pressed by clicking or tapping it, or by certain keys, which changes the style to provide visual feedback to the user that it is pressed or hovered over with the mouse cursor. A disabled `SplitButton` appears inactive and any of the two buttons cannot be pressed.\n\n## Keyboard Handling\n\n- `Space` or `Enter` - triggers the default action\n- `Shift` or `Escape` - if `Space` is pressed, releases the default action button without triggering the click event.\n- `Arrow Down`, `Arrow Up`, `Alt`+`Arrow Down`, `Alt`+`Arrow Up`, or `F4` - triggers the arrow action\n  There are separate events that are fired on activating of `SplitButton` parts:\n\n- `onClick` for the first button (default action)\n- `onArrowClick` for the second button (arrow action)\n";function nt(r={}){const{wrapper:t}=Object.assign({},S(),r.components);return t?n.jsx(t,{...r,children:n.jsx(o,{})}):o();function o(){const u=Object.assign({h2:"h2"},S(),r.components);return n.jsxs(n.Fragment,{children:[n.jsx(N,{title:"Inputs / SplitButton",component:l,argTypes:{children:{control:{type:"text"}}},args:{design:_.Default,icon:"employee",children:"SplitButton"}}),`
`,n.jsx(G,{since:"0.21.0"}),`
`,n.jsx("br",{}),`
`,n.jsx(u.h2,{id:"example",children:"Example"}),`
`,n.jsx(O,{children:n.jsx(j,{name:"Default",children:c=>n.jsx(l,{...c})})}),`
`,n.jsx(u.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(Z,{story:"Default"}),`
`,n.jsx(V,{children:it}),`
`,n.jsx(J,{})]})}}const P=r=>n.jsx(l,{...r});P.storyName="Default";P.parameters={storySource:{source:`args => {
  return <SplitButton {...args} />;
}`}};const f={title:"Inputs / SplitButton",component:l,args:{design:_.Default,icon:"employee",children:"SplitButton"},argTypes:{children:{control:{type:"text"}}},tags:["stories-mdx"],includeStories:["defaultStory"]};f.parameters=f.parameters||{};f.parameters.docs={...f.parameters.docs||{},page:nt};const ve=["defaultStory"];export{ve as __namedExportsOrder,f as default,P as defaultStory};
//# sourceMappingURL=SplitButton.stories-5396f569.js.map
