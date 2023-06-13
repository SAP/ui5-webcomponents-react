import{_ as y}from"./iframe-4e0d7759.js";import{a as g,U as $,d as N}from"./UI5Element-2e105c8a.js";import{e as r,l as e,s as o,a as O,b as T,p as h,c as S,d as D,w as I}from"./withWebComponent-7b9bd1ee.js";import{I as j,e as R}from"./Icon-f65ad4fd.js";import{c as v,b as z}from"./Icons-1a294222.js";import{f as V}from"./Device-208919c6.js";import{g as P}from"./AriaLabelHelper-43a261ec.js";import"./accept-83a59a78.js";import"./decline-bfe69317.js";import"./less-9c2f1153.js";import{o as m}from"./class-map-6a9bd920.js";var f;(function(n){n.Textual="Textual",n.Graphical="Graphical"})(f||(f={}));const d=f;function E(n,t,i){return i?r`<div class="ui5-switch-root ${m(this.classes.main)}" role="switch" aria-label="${e(this.ariaLabelText)}" aria-checked="${e(this.checked)}" aria-disabled="${e(this.effectiveAriaDisabled)}" @click="${this._onclick}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" tabindex="${e(this.effectiveTabIndex)}" dir="${e(this.effectiveDir)}" title="${e(this.tooltip)}"><div class="ui5-switch-inner"><div class="ui5-switch-track" part="slider"><div class="ui5-switch-slider">${this.graphical?k.call(this,n,t,i):x.call(this,n,t,i)}<span class="ui5-switch-handle" part="handle"><${o("ui5-icon",t,i)} name="${e(this.sapNextIcon)}" class="ui5-switch-handle-icon"></${o("ui5-icon",t,i)}></span></div></div></div><input type='checkbox' ?checked="${this.checked}" class="ui5-switch-input" data-sap-no-tab-ref/></div>`:r`<div class="ui5-switch-root ${m(this.classes.main)}" role="switch" aria-label="${e(this.ariaLabelText)}" aria-checked="${e(this.checked)}" aria-disabled="${e(this.effectiveAriaDisabled)}" @click="${this._onclick}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" tabindex="${e(this.effectiveTabIndex)}" dir="${e(this.effectiveDir)}" title="${e(this.tooltip)}"><div class="ui5-switch-inner"><div class="ui5-switch-track" part="slider"><div class="ui5-switch-slider">${this.graphical?k.call(this,n,t,i):x.call(this,n,t,i)}<span class="ui5-switch-handle" part="handle"><ui5-icon name="${e(this.sapNextIcon)}" class="ui5-switch-handle-icon"></ui5-icon></span></div></div></div><input type='checkbox' ?checked="${this.checked}" class="ui5-switch-input" data-sap-no-tab-ref/></div>`}function k(n,t,i){return i?r`<span class="ui5-switch-text ui5-switch-text--on"><${o("ui5-icon",t,i)} name="accept" class="ui5-switch-icon-on"></${o("ui5-icon",t,i)}></span><span class="ui5-switch-text ui5-switch-text--off"><${o("ui5-icon",t,i)} name="decline" class="ui5-switch-icon-off"></${o("ui5-icon",t,i)}></span>`:r`<span class="ui5-switch-text ui5-switch-text--on"><ui5-icon name="accept" class="ui5-switch-icon-on"></ui5-icon></span><span class="ui5-switch-text ui5-switch-text--off"><ui5-icon name="decline" class="ui5-switch-icon-off"></ui5-icon></span>`}function x(n,t,i){return r`${this.hasNoLabel?q.call(this,n,t,i):C.call(this,n,t,i)}`}function q(n,t,i){return i?r`<span class="ui5-switch-text ui5-switch-text--on ui5-switch-no-label-icon" part="text-on"><${o("ui5-icon",t,i)} name="${e(this.sapNextIcon)}" class="ui5-switch-no-label-icon-on"></${o("ui5-icon",t,i)}></span><span class="ui5-switch-text ui5-switch-text--off switch-no-label-icon" part="text-off"><${o("ui5-icon",t,i)} name="${e(this.sapNextIcon)}" class="ui5-switch-no-label-icon-off"></${o("ui5-icon",t,i)}></span>`:r`<span class="ui5-switch-text ui5-switch-text--on ui5-switch-no-label-icon" part="text-on"><ui5-icon name="${e(this.sapNextIcon)}" class="ui5-switch-no-label-icon-on"></ui5-icon></span><span class="ui5-switch-text ui5-switch-text--off switch-no-label-icon" part="text-off"><ui5-icon name="${e(this.sapNextIcon)}" class="ui5-switch-no-label-icon-off"></ui5-icon></span>`}function C(n,t,i){return r`<span class="ui5-switch-text ui5-switch-text--on" part="text-on">${e(this._textOn)}</span><span class="ui5-switch-text ui5-switch-text--off" part="text-off">${e(this._textOff)}</span>`}g("@ui5/webcomponents-theming","sap_fiori_3",async()=>O);g("@ui5/webcomponents","sap_fiori_3",async()=>T);const L={packageName:"@ui5/webcomponents",fileName:"themes/Switch.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}
:host {
	-webkit-tap-highlight-color: rgba(0,0,0,0);
}
:host(:not([hidden])) {
	display: inline-block;
}
.ui5-switch-root {
	position: relative;
	display: flex;
	align-items: center;
	width: var(--_ui5_switch_width);
	height: var(--_ui5_switch_height);
	min-width: var(--_ui5_switch_min_width);
	cursor: pointer;
	outline: none;
	border-radius: var(--_ui5-switch-root-border-radius);
}
.ui5-switch-root:not(.ui5-switch--no-label):not(.ui5-switch--semantic) {
	width: var(--_ui5_switch_with_label_width);
	height: var(--_ui5_switch_height);
}
.ui5-switch-root.ui5-switch--no-label {
	min-width: var(--_ui5_switch_width);
}
.ui5-switch-inner {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	min-width: inherit;
	overflow: hidden;
	pointer-events: none;
	will-change: transform;
}
:host([checked]) .ui5-switch-inner {
	border-radius: 6.25rem;
	box-shadow: var(--_ui5-switch-root-box-shadow);
}
.ui5-switch-track {
	display: flex;
	align-items: center;
	height: var(--_ui5_switch_track_height);
	width: var(--_ui5_switch_track_width);
	border: var(--_ui5-switch-track-border);
	border-radius: var(--_ui5_switch_track_border_radius);
	box-sizing: border-box;
	transition: var(--_ui5_switch_track_transition);
}
.ui5-switch-root:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-track {
	height: var(--_ui5_switch_track_with_label_height);
	width: var(--_ui5_switch_track_with_label_width);
}
.ui5-switch-slider {
	position: relative;
	height: var(--_ui5_switch_height);
	width: 100%;
	transition: transform 0.1s ease-in;
	transform-origin: top left;
}
.ui5-switch-slider > *:not(.ui5-switch-handle) {
	display: var(--_ui5-switch-slider-texts-display);
}
.ui5-switch-handle {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: var(--_ui5_switch_handle_width);
	height: var(--_ui5_switch_handle_height);
	border: var(--_ui5_switch_handle_border);
	border-radius: var(--_ui5_switch_handle_border_radius);
	box-sizing: border-box;
}
.ui5-switch-root:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-handle {
	height: var(--_ui5_switch_handle_with_label_height);
	width: var(--_ui5_switch_handle_with_label_width);
}
.ui5-switch-handle-icon {
	display: var(--_ui5-switch-handle-icon-display);
	transition: var(--_ui5_switch_track_transition);
}
:host([checked]) .ui5-switch-handle-icon {
	color: var(--_ui5-switch_track-on-background)
}
.ui5-switch-text {
	display: flex;
	justify-content: center;
	position: absolute;
	z-index: var(--_ui5_switch_text_z_index);
	min-width: var(--_ui5_switch_text_min_width);
	font-size: var(--_ui5_switch_text_font_size);
	font-family: var(--_ui5-switch-text_font_family);
	text-transform: uppercase;
	text-align: center;
	white-space: nowrap;
	user-select: none;
	-webkit-user-select: none;
}
.ui5-switch-handle,
.ui5-switch-text {
	left: var(--_ui5_switch_handle_left);
	top: 50%;
	transform: translateY(-50%);
}
/* switch focused */
.ui5-switch-desktop.ui5-switch-root:focus::after {
	content: "";
	position: absolute;
	left: var(--_ui5_switch_root_outline_left);
	right: var(--_ui5_switch_root_outline_right);
	top: var(--_ui5_switch_root_outline_top);
	bottom: var(--_ui5_switch_root_outline_bottom);
	border: var(--_ui5_switch_focus_outline);
	border-radius: var(--_ui5_switch_root_after_boreder_radius);
	pointer-events: none;
	transition: var(--_ui5_switch_track_transition);
	outline: var(--_ui5_switch_root_after_outline);
}
/* switch hidden input */
.ui5-switch-root .ui5-switch-input {
	position: absolute;
	left: 0;
	width: 0;
	height: 0;
	margin: 0;
	visibility: hidden;
	-webkit-appearance: none;
}
/* switch disabled */
.ui5-switch-root.ui5-switch--disabled {
	opacity: var(--_ui5_switch_disabled_opacity);
	cursor: default;
}
.ui5-switch-root.ui5-switch--checked .ui5-switch-text--off {
	visibility: var(--_ui5_switch_text_hidden);
}
.ui5-switch-root:not(.ui5-switch--checked) .ui5-switch-text--on {
	visibility: var(--_ui5_switch_text_hidden);
}
.ui5-switch-root.ui5-switch--checked .ui5-switch-text--on {
	left: var(--_ui5_switch_text_active_left);
}
.ui5-switch-root:not(.ui5-switch--checked) .ui5-switch-text--off {
	left: var(--_ui5_switch_text_inactive_left);
	right: var(--_ui5_switch_text_inactive_right)
}
/* handle */
.ui5-switch-root.ui5-switch--checked .ui5-switch-handle {
	background: var(--_ui5_switch_handle_active_background_color);
	border-color: var(--_ui5_switch_handle_active_border_color);
}
.ui5-switch-root:not(.ui5-switch--checked) .ui5-switch-handle {
	background: var(--_ui5_switch_handle_inactive_background_color);
	border-color: var(--_ui5_switch_handle_inactive_border_color);
}
.ui5-switch-desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle {
	background: var(--_ui5_switch_handle_hover_active_background_color);
	border-color: var(--_ui5_switch_handle_hover_active_border_color);
}
.ui5-switch-desktop.ui5-switch-root:not(.ui5-switch--disabled):not(.ui5-switch--checked):hover .ui5-switch-handle {
	background: var(--_ui5_switch_handle_hover_inactive_background_color);
	border-color: var(--_ui5_switch_handle_hover_inactive_border_color);
}
/* handle semantic */
.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked .ui5-switch-handle {
	background: var(--_ui5_switch_handle_semantic_accept_background_color);
	border-color: var(--_ui5_switch_handle_semantic_accept_border_color);
}
.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--checked) .ui5-switch-handle {
	background: var(--_ui5_switch_handle_semantic_reject_background_color);
	border-color: var(--_ui5_switch_handle_semantic_reject_border_color);
}
.ui5-switch-desktop.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle {
	background: var(--_ui5_switch_handle_semantic_hover_accept_background_color);
	border-color: var(--_ui5_switch_handle_semantic_hover_accept_border_color);
}
.ui5-switch-desktop.ui5-switch--semantic.ui5-switch-root:not(.ui5-switch--checked):not(.ui5-switch--disabled):hover .ui5-switch-handle {
	background: var(--_ui5_switch_handle_semantic_hover_reject_background_color);
	border-color: var(--_ui5_switch_handle_semantic_hover_reject_border_color);
}
/* track */
.ui5-switch-root.ui5-switch--checked .ui5-switch-track {
	background: var(--_ui5_switch_track_active_background_color);
	border-color: var(--_ui5_switch_track_active_border_color);
}
.ui5-switch-root:not(.ui5-switch--checked) .ui5-switch-track {
	background: var(--_ui5_switch_track_inactive_background_color);
	border-color: var(--_ui5_switch_track_inactive_border_color);
}
.ui5-switch-desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-track {
	background: var(--_ui5_switch_track_hover_active_background_color);
	border-color: var(--_ui5_switch_track_hover_active_border_color);
}
.ui5-switch-desktop.ui5-switch-root:not(.ui5-switch--checked):not(.ui5-switch--disabled):hover .ui5-switch-track {
	background: var(--_ui5_switch_track_hover_inactive_background_color);
	border-color: var(--_ui5_switch_track_hover_inactive_border_color);
}
/* track semantic*/
.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked .ui5-switch-track {
	background: var(--_ui5_switch_track_semantic_accept_background_color);
	border-color: var(--_ui5_switch_track_semantic_accept_border_color);
}
.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--checked) .ui5-switch-track {
	background: var(--_ui5_switch_track_semantic_reject_background_color);
	border-color: var(--_ui5_switch_track_semantic_reject_border_color);
}
.ui5-switch-desktop.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-track {
	background: var(--_ui5_switch_track_semantic_hover_accept_background_color);
	border-color: var(--_ui5_switch_track_semantic_hover_accept_border_color);
}
.ui5-switch-desktop.ui5-switch--semantic.ui5-switch-root:not(.ui5-switch--checked):not(.ui5-switch--disabled):hover .ui5-switch-track {
	background: var(--_ui5_switch_track_semantic_hover_reject_background_color);
	border-color: var(--_ui5_switch_track_semantic_hover_reject_border_color);
}
.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-slider {
	/* Move slider to oposite end, taking into account the handle as an offset. */
	/* Note: translate(calc()) does not work in IE11 */
	transform: var(--_ui5_switch_transform_with_label);
}
.ui5-switch-root.ui5-switch--checked .ui5-switch-slider {
	/* Move slider to oposite end, taking into account the handle as an offset. */
	/* Note: translate(calc()) does not work in IE11 */
	transform: var(--_ui5_switch_transform);
}
/* switch semantic icon and type noLabel icon in horizon theme */
.ui5-switch-text .ui5-switch-text--on .ui5-switch-no-label-icon,
.ui5-switch-root.ui5-switch--semantic .ui5-switch-text,
.ui5-switch-root.ui5-switch--no-label .ui5-switch-text {
	display: flex;
	justify-content: center;

}
.ui5-switch--no-label .ui5-switch-no-label-icon-on,
.ui5-switch--no-label .ui5-switch-no-label-icon-off {
	width: var(--_ui5_switch_icon_width);
	height: var(--_ui5_switch_icon_height);
	display: var(--_ui5_switch_track_icon_display);
}
.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-on,
.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-off {
	width: var(--_ui5_switch_icon_width);
	height: var(--_ui5_switch_icon_height)
}
.ui5-switch-root .ui5-switch-text {
	font-family: var(--_ui5_switch_text_font_family);
	font-size: var(--_ui5_switch_text_font_size);
	width: var(--_ui5_switch_text_width);
}
.ui5-switch-root:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-text {
	font-family: var(--_ui5_switch_text_with_label_font_family);
	font-size: var(--_ui5_switch_text_with_label_font_size);
	width: var(--_ui5_switch_text_with_label_width);
}
/* switch active effects */
/* active & off */
:host([active]) .ui5-switch-desktop.ui5-switch-root:not(.ui5-switch--disabled) .ui5-switch-track {
	background: var( --_ui5-switch_track-off-active-background);
}
/* active & on */
:host([active]) .ui5-switch-desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-track {
	background: var(--_ui5-switch_track-on-active-background);
}
.ui5-switch-desktop.ui5-switch-root:not(.ui5-switch--disabled):hover .ui5-switch-handle {
	box-shadow: var(--_ui5_switch_handle_off_hover_box_shadow);
}
/* switch on hover, when switched on */
.ui5-switch-desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle {
	box-shadow: var(--_ui5_switch_handle_on_hover_box_shadow);
}
/* semantic switch on hover, when switched off */
.ui5-switch-desktop.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--disabled):hover .ui5-switch-handle {
	box-shadow: var(--_ui5_switch_handle_semantic_off_hover_box_shadow);
}
/* semantic switch on hover, when switched on */
.ui5-switch-desktop.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle {
	box-shadow: var(--_ui5_switch_handle_semantic_on_hover_box_shadow);
}
/* Text */
.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-on,
.ui5-switch-root.ui5-switch--semantic .ui5-switch-text--on {
	color: var(--_ui5_switch_text_semantic_accept_color);
}
.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-off,
.ui5-switch-root.ui5-switch--semantic .ui5-switch-text--off {
	color: var(--_ui5_switch_text_semantic_reject_color);
}
.ui5-switch-root .ui5-switch-text--on {
	color: var(--_ui5_switch_text_active_color);
	overflow: var(--_ui5_switch_text_overflow);
	text-overflow: ellipsis;
}
.ui5-switch-root .ui5-switch-text--off {
	color: var(--_ui5_switch_text_inactive_color);
	overflow: var(--_ui5_switch_text_overflow);
	text-overflow: ellipsis;
}
.ui5-switch-root .ui5-switch-no-label-icon-on,
.ui5-switch-root .ui5-switch-icon-on {
	color: var(--_ui5_switch_text_active_color);
}
.ui5-switch-root .ui5-switch-no-label-icon-off,
.ui5-switch-root .ui5-switch-icon-off {
	color: var(--_ui5_switch_text_inactive_color);
}
/* RTL */
[dir="rtl"].ui5-switch-root.ui5-switch--checked:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-slider {
	transform: var(--_ui5_switch_rtl_transform_with_label);
}
[dir="rtl"].ui5-switch-root.ui5-switch--checked .ui5-switch-slider {
	transform: var(--_ui5_switch_rtl_transform);
}
[dir="rtl"].ui5-switch-root .ui5-switch-handle {
	left: auto;
	right: var(--_ui5_switch_handle_left);
}
[dir="rtl"].ui5-switch-root .ui5-switch-text--on {
	right: var(--_ui5_switch_text_active_left);
	left: var(--_ui5_switch_text_active_right);
}
[dir="rtl"].ui5-switch-root .ui5-switch-text--off {
	right: var(--_ui5_switch_text_inactive_left);
	left: var(--_ui5_switch_text_inactive_right);
}
`};var s=globalThis&&globalThis.__decorate||function(n,t,i,l){var u=arguments.length,a=u<3?t:l===null?l=Object.getOwnPropertyDescriptor(t,i):l,_;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(n,t,i,l);else for(var p=n.length-1;p>=0;p--)(_=n[p])&&(a=(u<3?_(a):u>3?_(t,i,a):_(t,i))||a);return u>3&&a&&Object.defineProperty(t,i,a),a},b;let c=b=class extends ${get sapNextIcon(){return this.checked?"accept":"less"}_onclick(){this.toggle()}_onkeydown(t){v(t)&&t.preventDefault(),z(t)&&this._onclick()}_onkeyup(t){v(t)&&this._onclick()}toggle(){if(!this.disabled){this.checked=!this.checked;const t=!this.fireEvent("change",null,!0),i=!this.fireEvent("value-changed",null,!0);(t||i)&&(this.checked=!this.checked)}}get graphical(){return this.design===d.Graphical}get hasNoLabel(){return!(this.graphical||this.textOn||this.textOff)}get _textOn(){return this.graphical?"":this.textOn}get _textOff(){return this.graphical?"":this.textOff}get effectiveTabIndex(){return this.disabled?void 0:"0"}get classes(){const t=this.graphical||this.textOn||this.textOff;return{main:{"ui5-switch-desktop":V(),"ui5-switch--disabled":this.disabled,"ui5-switch--checked":this.checked,"ui5-switch--semantic":this.graphical,"ui5-switch--no-label":!t}}}get effectiveAriaDisabled(){return this.disabled?"true":void 0}get accessibilityOnText(){return this._textOn}get accessibilityOffText(){return this._textOff}get hiddenText(){return this.checked?this.accessibilityOnText:this.accessibilityOffText}get ariaLabelText(){return[P(this),this.hiddenText].join(" ").trim()}static async onDefine(){b.i18nBundle=await N("@ui5/webcomponents")}};s([h({type:d,defaultValue:d.Textual})],c.prototype,"design",void 0);s([h({type:Boolean})],c.prototype,"checked",void 0);s([h({type:Boolean})],c.prototype,"disabled",void 0);s([h()],c.prototype,"textOn",void 0);s([h()],c.prototype,"textOff",void 0);s([h()],c.prototype,"accessibleName",void 0);s([h({defaultValue:""})],c.prototype,"accessibleNameRef",void 0);s([h()],c.prototype,"tooltip",void 0);c=b=s([S({tag:"ui5-switch",languageAware:!0,styles:L,renderer:D,template:E,dependencies:[j]}),R("change")],c);c.define();const A=c,U=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"})),w=I("ui5-switch",["accessibleName","accessibleNameRef","design","textOff","textOn","tooltip"],["checked","disabled"],[],["change"],()=>y(()=>Promise.resolve().then(()=>U),void 0,import.meta.url));w.displayName="Switch";w.defaultProps={design:d.Textual};try{w.displayName="Switch",w.__docgenInfo={description:'The `Switch` component is used for changing between binary states.\nThe component can display texts, that will be switched, based on the component state, via the `textOn` and `textOff` properties, but texts longer than 3 letters will be cutted off.\nHowever, users are able to customize the width of `Switch` with pure CSS (`<Switch style="width: 200px">`), and set widths, depending on the texts they would use.\nNote: the component would not automatically stretch to fit the whole text width.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Switch" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"Switch",props:{onChange:{defaultValue:null,description:"Fired when the component checked state changes.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<SwitchDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Sets the accessible ARIA name of the component. **Note**: We recommend that you set an accessibleNameRef pointing to an external label or at least an `accessibleName`. Providing an `accessibleNameRef` or an `accessibleName` is mandatory in the cases when `textOn` and `textOff` properties aren't set.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component. **Note**: We recommend that you set an accessibleNameRef pointing to an external label or at least an `accessibleName`. Providing an `accessibleNameRef` or an `accessibleName` is mandatory in the cases when `textOn` and `textOff` properties aren't set.",name:"accessibleNameRef",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"Defines if the component is checked.\n\n**Note:** The property can be changed with user interaction, either by cliking the component, or by pressing the `Enter` or `Space` key.",name:"checked",required:!1,type:{name:"boolean"}},design:{defaultValue:{value:"SwitchDesign.Textual"},description:"Defines the component design.\n\n**Note:** If `Graphical` type is set, positive and negative icons will replace the `textOn` and `textOff`.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Textual"'},{value:'"Graphical"'},{value:'"Textual"'},{value:'"Graphical"'}]}},disabled:{defaultValue:null,description:`Defines whether the component is disabled.

**Note:** A disabled component is noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},textOff:{defaultValue:null,description:"Defines the text, displayed when the component is not checked.\n\n**Note:** We recommend using short texts, up to 3 letters (larger texts would be cut off). **Note:** This property will have no effect if the theme is set to `sap_horizon`.",name:"textOff",required:!1,type:{name:"string"}},textOn:{defaultValue:null,description:"Defines the text, displayed when the component is checked.\n\n**Note:** We recommend using short texts, up to 3 letters (larger texts would be cut off). **Note:** This property will have no effect if the theme is set to `sap_horizon`.",name:"textOn",required:!1,type:{name:"string"}},tooltip:{defaultValue:null,description:"Defines the tooltip of the component.\n**Note:** If applicable an external label reference should always be the preferred option to provide context to the `Switch` component over a tooltip.",name:"tooltip",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{w as S};
//# sourceMappingURL=index-b9481e80.js.map
