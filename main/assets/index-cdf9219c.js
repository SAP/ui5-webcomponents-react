import{_ as T}from"./iframe-caf643ac.js";import{r as x,U as $,A as H,l as k}from"./UI5Element-a4bd3d38.js";import{b as l,l as a,d as h,s as A,a as B,p as r,c as N,f as R,w as I}from"./withWebComponent-7d7e5133.js";import{a as C,e as P}from"./Icon-42236945.js";import{s as L}from"./slot-76e48863.js";import{s as F,a as D}from"./slideUp-745debd3.js";import{l as y,k as w}from"./Icons-74c917eb.js";import{g as V}from"./AnimationMode-392b388d.js";import"./slim-arrow-right-b5a9fe30.js";import{b as E}from"./Button-7043cfcf.js";import{T as _}from"./Title-f7b3e876.js";import{s as S}from"./style-map-132a30d8.js";import{o as p}from"./class-map-0ab40ab9.js";import{Q as q}from"./i18n-defaults-d675a36d.js";var g;(function(n){n.Complementary="Complementary",n.Form="Form",n.Region="Region"})(g||(g={}));const v=g;function O(n,e,t){return l`<div class="ui5-panel-root" role="${a(this.accRole)}" aria-label="${a(this.effectiveAccessibleName)}" aria-labelledby="${a(this.fixedPanelAriaLabelledbyReference)}">${this.hasHeaderOrHeaderText?U.call(this,n,e,t):void 0}<div class="ui5-panel-content" id="${a(this._id)}-content" tabindex="-1" style="${S(this.styles.content)}" part="content"><slot></slot></div></div>`}function U(n,e,t){return l`<div class="ui5-panel-heading-wrapper${p(this.classes.stickyHeaderClass)}" role="${a(this.headingWrapperRole)}" aria-level="${a(this.headingWrapperAriaLevel)}"><div @click="${this._headerClick}" @keydown="${this._headerKeyDown}" @keyup="${this._headerKeyUp}" class="ui5-panel-header" tabindex="${a(this.headerTabIndex)}" role="${a(this.accInfo.role)}" aria-expanded="${a(this.accInfo.ariaExpanded)}" aria-controls="${a(this.accInfo.ariaControls)}" aria-labelledby="${a(this.accInfo.ariaLabelledby)}" part="header">${this.fixed?void 0:W.call(this,n,e,t)}${this._hasHeader?M.call(this,n,e,t):G.call(this,n,e,t)}</div></div>`}function W(n,e,t){return l`<div class="ui5-panel-header-button-root">${this._hasHeader?j.call(this,n,e,t):z.call(this,n,e,t)}</div>`}function j(n,e,t){return t?l`<${h("ui5-button",e,t)} design="Transparent" class="ui5-panel-header-button ui5-panel-header-button-with-icon" @click="${this._toggleButtonClick}" .accessibilityAttributes=${a(this.accInfo.button.accessibilityAttributes)} tooltip="${a(this.accInfo.button.title)}" accessible-name="${a(this.accInfo.button.ariaLabelButton)}"><div class="ui5-panel-header-icon-wrapper"><${h("ui5-icon",e,t)} class="ui5-panel-header-icon ${p(this.classes.headerBtn)}" name="slim-arrow-right"></${h("ui5-icon",e,t)}></div></${h("ui5-button",e,t)}>`:l`<ui5-button design="Transparent" class="ui5-panel-header-button ui5-panel-header-button-with-icon" @click="${this._toggleButtonClick}" .accessibilityAttributes=${a(this.accInfo.button.accessibilityAttributes)} tooltip="${a(this.accInfo.button.title)}" accessible-name="${a(this.accInfo.button.ariaLabelButton)}"><div class="ui5-panel-header-icon-wrapper"><ui5-icon class="ui5-panel-header-icon ${p(this.classes.headerBtn)}" name="slim-arrow-right"></ui5-icon></div></ui5-button>`}function z(n,e,t){return t?l`<${h("ui5-icon",e,t)} class="ui5-panel-header-button ui5-panel-header-icon ${p(this.classes.headerBtn)}" name="slim-arrow-right" show-tooltip accessible-name="${a(this.toggleButtonTitle)}"></${h("ui5-icon",e,t)}>`:l`<ui5-icon class="ui5-panel-header-button ui5-panel-header-icon ${p(this.classes.headerBtn)}" name="slim-arrow-right" show-tooltip accessible-name="${a(this.toggleButtonTitle)}"></ui5-icon>`}function M(n,e,t){return l`<slot name="header"></slot>`}function G(n,e,t){return l`<div id="${a(this._id)}-header-title" class="ui5-panel-header-title">${a(this.headerText)}</div>`}x("@ui5/webcomponents-theming","sap_fiori_3",async()=>A);x("@ui5/webcomponents","sap_fiori_3",async()=>B);const K={packageName:"@ui5/webcomponents",fileName:"themes/Panel.css",content:`.ui5-hidden-text {
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
}

:host {
	font-family: "72override", var(--sapFontFamily);
	background-color: var(--sapGroup_TitleBackground);
	border-radius: var(--_ui5_panel_border_radius);
}

:host(:not([collapsed])) {
	border-bottom: var(--_ui5_panel_border_bottom);
}

:host([fixed]) .ui5-panel-header {
	padding-left: 1rem;
}

.ui5-panel-header {
	min-height: var(--_ui5_panel_header_height);
	width: 100%;
	position: relative;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	outline: none;
	box-sizing: border-box;
	padding-right: var(--_ui5_panel_header_padding_right);
}

.ui5-panel-header-icon {
	color: var(--_ui5_panel_icon_color);
}

.ui5-panel-header-button-animated {
	transition: transform 0.4s ease-out;
}

:host(:not([_has-header]):not([fixed])) .ui5-panel-header {
	cursor: pointer;
}

:host(:not([_has-header]):not([fixed])) .ui5-panel-header:focus::after {
	content: "";
	position: absolute;
	pointer-events: none;
	z-index: 2;
	border: var(--_ui5_panel_focus_border);
	border-radius: var(--_ui5_panel_border_radius);
	top: var(--_ui5_panel_focus_offset);
	bottom: var(--_ui5_panel_focus_offset);
	left: var(--_ui5_panel_focus_offset);
	right: var(--_ui5_panel_focus_offset);
}

:host(:not([collapsed]):not([_has-header]):not([fixed])) .ui5-panel-header:focus:after {
	border-radius: var(--_ui5_panel_border_radius_expanded);
}

:host(:not([collapsed])) .ui5-panel-header-button:not(.ui5-panel-header-button-with-icon),
:host(:not([collapsed])) .ui5-panel-header-icon-wrapper [ui5-icon] {
	transform: var(--_ui5_panel_toggle_btn_rotation);
}

:host([fixed]) .ui5-panel-header-title {
	width: 100%;
}

.ui5-panel-heading-wrapper.ui5-panel-heading-wrapper-sticky {
    position: sticky;
    top: 0;
	background-color: var(--_ui5_panel_header_background_color);
	z-index: 100; /* The z-index of the table header is 99 therefore to have table in the panel and panel header to be on top we need 100 */
	border-radius: var(--_ui5_panel_border_radius);
}

.ui5-panel-header-title {
	width: calc(100% - var(--_ui5_panel_button_root_width));
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-family: "72override", var(--sapFontHeaderFamily);
	font-size: var(--sapGroup_Title_FontSize);
	font-weight: normal;
	color: var(--sapGroup_TitleTextColor);
	font-weight: normal;
}

.ui5-panel-content {
	padding: var(--_ui5_panel_content_padding);
	background-color: var(--sapGroup_ContentBackground);
	outline: none;
	border-bottom-left-radius: var(--_ui5_panel_border_radius);
	border-bottom-right-radius: var(--_ui5_panel_border_radius);
	overflow: auto;
}

.ui5-panel-header-button-root {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	width: var(--_ui5_panel_button_root_width);
	height: var(--_ui5_panel_button_root_width);
	padding: var(--_ui5_panel_header_button_wrapper_padding);
	box-sizing: border-box;
}

:host([fixed]:not([collapsed]):not([_has-header])) .ui5-panel-header,
:host([collapsed]) .ui5-panel-header {
	border-bottom: 0.0625rem solid var(--sapGroup_TitleBorderColor);
}

:host([collapsed]) .ui5-panel-header {
	border-bottom-left-radius: var(--_ui5_panel_border_radius);
	border-bottom-right-radius: var(--_ui5_panel_border_radius);
}

:host(:not([fixed]):not([collapsed])) .ui5-panel-header {
	border-bottom: var(--_ui5_panel_default_header_border);
}

[ui5-button].ui5-panel-header-button {
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: initial;
	height: 100%;
	width: 100%;
}

.ui5-panel-header-icon-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
}

.ui5-panel-header-icon-wrapper,
.ui5-panel-header-icon-wrapper .ui5-panel-header-icon {
	color: inherit;
}

.ui5-panel-header-icon-wrapper,
[ui5-button].ui5-panel-header-button-with-icon [ui5-icon] {
	pointer-events: none;
}

.ui5-panel-root {
	height: 100%;
    display: flex;
    flex-direction: column;
}`};var i=globalThis&&globalThis.__decorate||function(n,e,t,d){var c=arguments.length,s=c<3?e:d===null?d=Object.getOwnPropertyDescriptor(e,t):d,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,d);else for(var b=n.length-1;b>=0;b--)(u=n[b])&&(s=(c<3?u(s):c>3?u(e,t,s):u(e,t))||s);return c>3&&s&&Object.defineProperty(e,t,s),s},m;let o=m=class extends ${onBeforeRendering(){this._animationRunning||(this._contentExpanded=!this.collapsed),this._hasHeader=!!this.header.length}shouldToggle(e){return this.header.length?e.classList.contains("ui5-panel-header-button"):!0}shouldNotAnimate(){return this.noAnimation||V()===H.None}_headerClick(e){this.shouldToggle(e.target)&&this._toggleOpen()}_toggleButtonClick(e){e.x===0&&e.y===0&&e.stopImmediatePropagation()}_headerKeyDown(e){this.shouldToggle(e.target)&&(y(e)&&e.preventDefault(),w(e)&&e.preventDefault())}_headerKeyUp(e){this.shouldToggle(e.target)&&(y(e)&&this._toggleOpen(),w(e)&&this._toggleOpen())}_toggleOpen(){if(this.fixed)return;if(this.collapsed=!this.collapsed,this.shouldNotAnimate()){this.fireEvent("toggle");return}this._animationRunning=!0;const e=this.getDomRef().querySelectorAll(".ui5-panel-content"),t=[];[].forEach.call(e,d=>{this.collapsed?t.push(F(d).promise()):t.push(D(d).promise())}),Promise.all(t).then(()=>{this._animationRunning=!1,this._contentExpanded=!this.collapsed,this.fireEvent("toggle")})}_headerOnTarget(e){return e.classList.contains("sapMPanelWrappingDiv")}get classes(){return{headerBtn:{"ui5-panel-header-button-animated":!this.shouldNotAnimate()},stickyHeaderClass:{"ui5-panel-heading-wrapper-sticky":this.stickyHeader}}}get toggleButtonTitle(){return m.i18nBundle.getText(q)}get expanded(){return!this.collapsed}get accRole(){return this.accessibleRole.toLowerCase()}get effectiveAccessibleName(){return typeof this.accessibleName=="string"&&this.accessibleName.length?this.accessibleName:void 0}get accInfo(){return{button:{accessibilityAttributes:{expanded:this.expanded},title:this.toggleButtonTitle,ariaLabelButton:!this.nonFocusableButton&&this.useAccessibleNameForToggleButton?this.effectiveAccessibleName:void 0},ariaExpanded:this.nonFixedInternalHeader?this.expanded:void 0,ariaControls:this.nonFixedInternalHeader?`${this._id}-content`:void 0,ariaLabelledby:this.nonFocusableButton?this.ariaLabelledbyReference:void 0,role:this.nonFixedInternalHeader?"button":void 0}}get ariaLabelledbyReference(){return this.nonFocusableButton&&this.headerText&&!this.fixed?`${this._id}-header-title`:void 0}get fixedPanelAriaLabelledbyReference(){return this.fixed&&!this.effectiveAccessibleName?`${this._id}-header-title`:void 0}get headerAriaLevel(){return this.headerLevel.slice(1)}get headerTabIndex(){return this.header.length||this.fixed?"-1":"0"}get headingWrapperAriaLevel(){return this._hasHeader?void 0:this.headerAriaLevel}get headingWrapperRole(){return this._hasHeader?void 0:"heading"}get nonFixedInternalHeader(){return!this._hasHeader&&!this.fixed}get hasHeaderOrHeaderText(){return this._hasHeader||this.headerText}get nonFocusableButton(){return!this.header.length}get styles(){return{content:{display:this._contentExpanded?"block":"none"}}}static async onDefine(){m.i18nBundle=await k("@ui5/webcomponents")}};i([r()],o.prototype,"headerText",void 0);i([r({type:Boolean})],o.prototype,"fixed",void 0);i([r({type:Boolean})],o.prototype,"collapsed",void 0);i([r({type:Boolean})],o.prototype,"noAnimation",void 0);i([r({type:v,defaultValue:v.Form})],o.prototype,"accessibleRole",void 0);i([r({type:_,defaultValue:_.H2})],o.prototype,"headerLevel",void 0);i([r()],o.prototype,"accessibleName",void 0);i([r({type:Boolean})],o.prototype,"stickyHeader",void 0);i([r({type:Boolean})],o.prototype,"useAccessibleNameForToggleButton",void 0);i([r({type:Boolean})],o.prototype,"_hasHeader",void 0);i([r({type:Boolean,noAttribute:!0})],o.prototype,"_contentExpanded",void 0);i([r({type:Boolean,noAttribute:!0})],o.prototype,"_animationRunning",void 0);i([L()],o.prototype,"header",void 0);o=m=i([N({tag:"ui5-panel",fastNavigation:!0,languageAware:!0,renderer:R,template:O,styles:K,dependencies:[E,C]}),P("toggle")],o);o.define();const Q=o,J=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"})),f=I("ui5-panel",["accessibleName","accessibleRole","headerLevel","headerText"],["collapsed","fixed","noAnimation","stickyHeader"],["header"],["toggle"],()=>T(()=>Promise.resolve().then(()=>J),void 0,import.meta.url));f.displayName="Panel";f.defaultProps={accessibleRole:v.Form,headerLevel:_.H2};try{f.displayName="Panel",f.__docgenInfo={description:`The \`Panel\` component is a container which has a header and a content area and is used for grouping and displaying information. It can be collapsed to save space on the screen.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Panel)`,displayName:"Panel",props:{children:{defaultValue:null,description:"Defines the content of the component. The content is visible only when the component is expanded.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the component header area.

**Note:** When a header is provided, the \`headerText\` property is ignored.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onToggle:{defaultValue:null,description:"Fired when the component is expanded/collapsed by user interaction.",name:"onToggle",required:!1,type:{name:"(event: Ui5CustomEvent<PanelDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:"PanelAccessibleRole.Form"},description:"Sets the accessible ARIA role of the component. Depending on the usage, you can change the role from the default `Form` to `Region` or `Complementary`.",name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Complementary"'},{value:'"Form"'},{value:'"Region"'},{value:'"Complementary"'},{value:'"Form"'},{value:'"Region"'}]}},collapsed:{defaultValue:null,description:"Indicates whether the component is collapsed and only the header is displayed.",name:"collapsed",required:!1,type:{name:"boolean"}},fixed:{defaultValue:null,description:"Determines whether the component is in a fixed state that is not expandable/collapsible by user interaction.",name:"fixed",required:!1,type:{name:"boolean"}},headerLevel:{defaultValue:{value:"TitleLevel.H2"},description:'Defines the "aria-level" of component heading, set by the `headerText`.\n\nAvailable options are: `"H6"` to `"H1"`.',name:"headerLevel",required:!1,type:{name:"enum",value:[{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},headerText:{defaultValue:null,description:"This property is used to set the header text of the component. The text is visible in both expanded and collapsed states.\n\n**Note:** This property is overridden by the `header` slot.",name:"headerText",required:!1,type:{name:"string"}},noAnimation:{defaultValue:null,description:"Indicates whether the transition between the expanded and the collapsed state of the component is animated. By default the animation is enabled.",name:"noAnimation",required:!1,type:{name:"boolean"}},stickyHeader:{defaultValue:null,description:"Indicates whether the Panel header is sticky or not. If stickyHeader is set to true, then whenever you scroll the content or the application, the header of the panel will be always visible and a solid color will be used for its design.",name:"stickyHeader",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{f as P,v as a};
//# sourceMappingURL=index-cdf9219c.js.map
