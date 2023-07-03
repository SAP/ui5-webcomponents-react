import{_ as b}from"./iframe-e3fb29ee.js";import{a as m,U as g,d as y}from"./UI5Element-3b11b083.js";import{e as l,l as i,a as w,b as x,p as c,c as T,d as k,w as C}from"./withWebComponent-d4224c1c.js";import{s as v}from"./slot-76e48863.js";import{e as $}from"./Icon-9aa64f88.js";import{c as A,b as _}from"./Icons-f64cf5a7.js";import{f as D}from"./Device-99b8bbf4.js";import{I as R}from"./Integer-f7f172c9.js";import{o as I}from"./class-map-18f572ce.js";import{A as E,h as S,i as N}from"./i18n-defaults-f002f496.js";function F(a,e,t){return l`<div id="${i(this._id)}--header" class="${I(this.classes.root)}" role="group" aria-roledescription="${i(this.ariaRoleDescription)}" @click="${this._click}" @keydown="${this._keydown}" @keyup="${this._keyup}" part="root"><div class="ui5-card-header-focusable-element" aria-labelledby="${i(this.ariaLabelledBy)}" role="${i(this.ariaRoleFocusableElement)}" data-sap-focus-ref tabindex="0">${this.hasAvatar?H.call(this,a,e,t):void 0}<div class="ui5-card-header-text"><div class="ui5-card-header-first-line">${this.titleText?L.call(this,a,e,t):void 0}${this.status?O.call(this,a,e,t):void 0}</div>${this.subtitleText?V.call(this,a,e,t):void 0}</div></div>${this.hasAction?P.call(this,a,e,t):void 0}</div></div>`}function H(a,e,t){return l`<div id="${i(this._id)}-avatar" class="ui5-card-header-avatar" aria-label="${i(this.ariaCardAvatarLabel)}"><slot name="avatar"></slot></div>`}function L(a,e,t){return l`<div id="${i(this._id)}-title" class="ui5-card-header-title" part="title" role="heading" aria-level="3">${i(this.titleText)}</div>`}function O(a,e,t){return l`<div class="ui5-card-header-status"><span id="${i(this._id)}-status" part="status" dir="auto">${i(this.status)}</span></div>`}function V(a,e,t){return l`<div id="${i(this._id)}-subtitle" class="ui5-card-header-subtitle" part="subtitle">${i(this.subtitleText)}</div>`}function P(a,e,t){return l`<div class="ui5-card-header-action" @focusin="${this._actionsFocusin}" @focusout="${this._actionsFocusout}"><slot name="action"></slot></div>`}m("@ui5/webcomponents-theming","sap_fiori_3",async()=>w);m("@ui5/webcomponents","sap_fiori_3",async()=>x);const q={packageName:"@ui5/webcomponents",fileName:"themes/CardHeader.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}

.ui5-card-header {
	position: relative;
	display: flex;
	align-items: center;
	padding: var(--_ui5_card_header_padding);
	outline: none;
}

:host([subtitleText]) .ui5-card-header {
	align-items: flex-start;
}

.ui5-card-header.ui5-card-header-ff:not(.ui5-card-header-hide-focus):focus-within:before {
	outline: none;
	content: "";
	position: absolute;
	border: var(--_ui5_card_header_focus_border);
	pointer-events: none;
	top: var(--_ui5_card_header_focus_offset);
	left: var(--_ui5_card_header_focus_offset);
	right: var(--_ui5_card_header_focus_offset);
	bottom: var(--_ui5_card_header_focus_offset);
	border-top-left-radius: var(--_ui5_card_header_focus_radius);
	border-top-right-radius: var(--_ui5_card_header_focus_radius);
	border-bottom-left-radius: var(--_ui5_card_header_focus_bottom_radius);
	border-bottom-right-radius: var(--_ui5_card_header_focus_bottom_radius);
}

/* cannot be combined with the above style, because :has selector breaks the whole style if FF */

.ui5-card-header:not(.ui5-card-header-ff):not(.ui5-card-header-hide-focus):has(.ui5-card-header-focusable-element:focus-visible):before {
	outline: none;
	content: "";
	position: absolute;
	border: var(--_ui5_card_header_focus_border);
	pointer-events: none;
	top: var(--_ui5_card_header_focus_offset);
	left: var(--_ui5_card_header_focus_offset);
	right: var(--_ui5_card_header_focus_offset);
	bottom: var(--_ui5_card_header_focus_offset);
	border-top-left-radius: var(--_ui5_card_header_focus_radius);
	border-top-right-radius: var(--_ui5_card_header_focus_radius);
	border-bottom-left-radius: var(--_ui5_card_header_focus_bottom_radius);
	border-bottom-right-radius: var(--_ui5_card_header_focus_bottom_radius);
}

.ui5-card-header-focusable-element {
	outline: none;
}

.ui5-card-header-focusable-element {
	display: inherit;
	align-items: inherit;
	flex: 1;
}

.ui5-card-header.ui5-card-header--interactive:hover {
	cursor: pointer;
	background: var(--_ui5_card_header_hover_bg);
}

.ui5-card-header.ui5-card-header--active,
.ui5-card-header.ui5-card-header--interactive:active {
	background: var(--_ui5_card_header_active_bg);
}

.ui5-card-header .ui5-card-header-text {
	flex: 1;
	pointer-events: none;
}

.ui5-card-header-first-line {
	display: flex;
	flex-flow: row;
	justify-content: space-between;
}

.ui5-card-header-status {
	flex: none;
}

.ui5-card-header .ui5-card-header-avatar {
	height: 3rem;
	width: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-inline-end: .75rem;
	pointer-events: none;
	align-self: flex-start;
}

::slotted([ui5-icon]) {
	width: 1.5rem;
	height: 1.5rem;
	color: var(--sapTile_IconColor);
}

::slotted(img[slot="avatar"]) {
	width: 100%;
	height: 100%;
	border-radius: 50%;
}

.ui5-card-header .ui5-card-header-status {
	display: inline-block;
	font-family: "72override", var(--sapFontFamily);
	font-size: var(--sapFontSmallSize);
	color: var(--sapTile_TextColor);
	text-align: left;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	vertical-align: middle;
	margin-inline-start: 1rem;
	margin-block-start: 0.125rem;
}

.ui5-card-header .ui5-card-header-text .ui5-card-header-title {
	font-family: var(--_ui5_card_header_title_font_family);
	font-size: var(--_ui5_card_header_title_font_size);
	font-weight: var(--_ui5_card_header_title_font_weight);
	color: var(--sapTile_TitleTextColor);
	max-height: 3.5rem;
	align-self: flex-end;
}

.ui5-card-header .ui5-card-header-text .ui5-card-header-subtitle {
	font-family: "72override", var(--sapFontFamily);
	font-size: var(--sapFontSize);
	font-weight: normal;
	color: var(--sapTile_TextColor);
	margin-top: var(--_ui5_card_header_subtitle_margin_top);
	max-height: 2.1rem;
}

.ui5-card-header .ui5-card-header-text .ui5-card-header-title,
.ui5-card-header .ui5-card-header-text .ui5-card-header-subtitle {
	text-align: start;
	text-overflow: ellipsis;
	white-space: normal;
	word-wrap: break-word;
	overflow: hidden;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	display: -webkit-box;
	max-width: 100%;
}

.ui5-card-header .ui5-card-header-text .ui5-card-header-title {
	-webkit-line-clamp: 3;
}

.ui5-card-header-action {
	display: flex;
	padding-inline-start: 1rem;
	align-self: flex-start;
}`};var r=globalThis&&globalThis.__decorate||function(a,e,t,s){var u=arguments.length,o=u<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(a,e,t,s);else for(var p=a.length-1;p>=0;p--)(h=a[p])&&(o=(u<3?h(o):u>3?h(e,t,o):h(e,t))||o);return u>3&&o&&Object.defineProperty(e,t,o),o},d;let n=d=class extends g{get classes(){return{root:{"ui5-card-header":!0,"ui5-card-header--interactive":this.interactive,"ui5-card-header--active":this.interactive&&this._headerActive,"ui5-card-header-ff":D()}}}get _root(){return this.shadowRoot.querySelector(".ui5-card-header")}get ariaRoleDescription(){return this.interactive?d.i18nBundle.getText(E):d.i18nBundle.getText(S)}get ariaRoleFocusableElement(){return this.interactive?"button":null}get ariaCardAvatarLabel(){return d.i18nBundle.getText(N)}get ariaLabelledBy(){const e=[];return this.titleText&&e.push(`${this._id}-title`),this.subtitleText&&e.push(`${this._id}-subtitle`),this.status&&e.push(`${this._id}-status`),this.hasAvatar&&e.push(`${this._id}-avatar`),e.length!==0?e.join(" "):void 0}get hasAvatar(){return!!this.avatar.length}get hasAction(){return!!this.action.length}static async onDefine(){d.i18nBundle=await y("@ui5/webcomponents")}_actionsFocusin(){this._root.classList.add("ui5-card-header-hide-focus")}_actionsFocusout(){this._root.classList.remove("ui5-card-header-hide-focus")}_click(e){e.stopImmediatePropagation(),this.interactive&&this._root.contains(e.target)&&this.fireEvent("click")}_keydown(e){if(!this.interactive||!this._root.contains(e.target))return;const t=A(e),s=_(e);if(this._headerActive=t||s,t){this.fireEvent("click");return}s&&e.preventDefault()}_keyup(e){if(!this.interactive||!this._root.contains(e.target))return;const t=_(e);this._headerActive=!1,t&&this.fireEvent("click")}};r([c()],n.prototype,"titleText",void 0);r([c()],n.prototype,"subtitleText",void 0);r([c()],n.prototype,"status",void 0);r([c({type:Boolean})],n.prototype,"interactive",void 0);r([c({validator:R,defaultValue:3})],n.prototype,"_ariaLevel",void 0);r([c({type:Boolean,noAttribute:!0})],n.prototype,"_headerActive",void 0);r([v()],n.prototype,"avatar",void 0);r([v()],n.prototype,"action",void 0);n=d=r([T({tag:"ui5-card-header",languageAware:!0,renderer:k,template:F,styles:q}),$("click")],n);n.define();const U=n,B=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"})),f=C("ui5-card-header",["status","subtitleText","titleText"],["interactive"],["action","avatar"],["click"],()=>b(()=>Promise.resolve().then(()=>B),void 0,import.meta.url));f.displayName="CardHeader";try{f.displayName="CardHeader",f.__docgenInfo={description:'The `CardHeader` is a component, meant to be used as a header of the `Card` component. It displays valuable information, that can be defined with several properties, such as: `titleText`, `subtitleText`, `status` and two slots: `avatar` and `action`.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Card" target="_blank">UI5 Web Components Storybook</ui5-link>',displayName:"CardHeader",props:{action:{defaultValue:null,description:`Defines an action, displayed in the right most part of the header.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="action"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"action",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},avatar:{defaultValue:null,description:`Defines an avatar image, displayed in the left most part of the header.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="avatar"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"avatar",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onClick:{defaultValue:null,description:"Fired when the component is activated by mouse/tap or by using the Enter or Space key.\n\n**Note:** The event would be fired only if the `interactive` property is set to true.",name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<CardHeaderDomRef, never>) => void"}},interactive:{defaultValue:null,description:"Defines if the component would be interactive, e.g gets hover effect, gets focus outline and `onClick` event is fired, when pressed.",name:"interactive",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"Defines the status text.",name:"status",required:!1,type:{name:"string"}},subtitleText:{defaultValue:null,description:"Defines the subtitle text.",name:"subtitleText",required:!1,type:{name:"string"}},titleText:{defaultValue:null,description:"Defines the title text.",name:"titleText",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{f as C};
//# sourceMappingURL=index-a0034de1.js.map
