import{_ as y}from"./iframe-8896e28b.js";import{r as g,U as $,l as N}from"./UI5Element-a4bd3d38.js";import{b as u,l as e,d as s,s as S,a as O,p as a,c as T,f as D,w as I}from"./withWebComponent-7d7e5133.js";import{a as q,e as j}from"./Icon-42236945.js";import{s as R}from"./slot-76e48863.js";import{k as b,l as V}from"./Icons-74c917eb.js";import{b as E}from"./Device-6afa24d0.js";import{g as z}from"./AriaLabelHelper-43a261ec.js";import"./accept-aa607c05.js";import"./decline-3cb804de.js";import"./less-ec997304.js";import{g as L}from"./CustomElementsScopeUtils-137da8c8.js";import{o as v}from"./class-map-0ab40ab9.js";var f;(function(n){n.Textual="Textual",n.Graphical="Graphical"})(f||(f={}));const d=f;function C(n,t,i){return i?u`<div class="ui5-switch-root ${v(this.classes.main)}" role="switch" aria-label="${e(this.ariaLabelText)}" aria-checked="${e(this.checked)}" aria-disabled="${e(this.effectiveAriaDisabled)}" aria-required="${e(this.required)}" @click="${this._onclick}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" tabindex="${e(this.effectiveTabIndex)}" dir="${e(this.effectiveDir)}" title="${e(this.tooltip)}"><div class="ui5-switch-inner"><div class="ui5-switch-track" part="slider"><div class="ui5-switch-slider">${this.graphical?k.call(this,n,t,i):x.call(this,n,t,i)}<span class="ui5-switch-handle" part="handle"><${s("ui5-icon",t,i)} name="${e(this.sapNextIcon)}" class="ui5-switch-handle-icon"></${s("ui5-icon",t,i)}></span></div></div></div><input type='checkbox' ?checked="${this.checked}" class="ui5-switch-input" data-sap-no-tab-ref/><slot name="formSupport"></slot></div>`:u`<div class="ui5-switch-root ${v(this.classes.main)}" role="switch" aria-label="${e(this.ariaLabelText)}" aria-checked="${e(this.checked)}" aria-disabled="${e(this.effectiveAriaDisabled)}" aria-required="${e(this.required)}" @click="${this._onclick}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" tabindex="${e(this.effectiveTabIndex)}" dir="${e(this.effectiveDir)}" title="${e(this.tooltip)}"><div class="ui5-switch-inner"><div class="ui5-switch-track" part="slider"><div class="ui5-switch-slider">${this.graphical?k.call(this,n,t,i):x.call(this,n,t,i)}<span class="ui5-switch-handle" part="handle"><ui5-icon name="${e(this.sapNextIcon)}" class="ui5-switch-handle-icon"></ui5-icon></span></div></div></div><input type='checkbox' ?checked="${this.checked}" class="ui5-switch-input" data-sap-no-tab-ref/><slot name="formSupport"></slot></div>`}function k(n,t,i){return i?u`<span class="ui5-switch-text ui5-switch-text--on"><${s("ui5-icon",t,i)} name="accept" class="ui5-switch-icon-on"></${s("ui5-icon",t,i)}></span><span class="ui5-switch-text ui5-switch-text--off"><${s("ui5-icon",t,i)} name="decline" class="ui5-switch-icon-off"></${s("ui5-icon",t,i)}></span>`:u`<span class="ui5-switch-text ui5-switch-text--on"><ui5-icon name="accept" class="ui5-switch-icon-on"></ui5-icon></span><span class="ui5-switch-text ui5-switch-text--off"><ui5-icon name="decline" class="ui5-switch-icon-off"></ui5-icon></span>`}function x(n,t,i){return u`${this.hasNoLabel?P.call(this,n,t,i):F.call(this,n,t,i)}`}function P(n,t,i){return i?u`<span class="ui5-switch-text ui5-switch-text--on ui5-switch-no-label-icon" part="text-on"><${s("ui5-icon",t,i)} name="${e(this.sapNextIcon)}" class="ui5-switch-no-label-icon-on"></${s("ui5-icon",t,i)}></span><span class="ui5-switch-text ui5-switch-text--off switch-no-label-icon" part="text-off"><${s("ui5-icon",t,i)} name="${e(this.sapNextIcon)}" class="ui5-switch-no-label-icon-off"></${s("ui5-icon",t,i)}></span>`:u`<span class="ui5-switch-text ui5-switch-text--on ui5-switch-no-label-icon" part="text-on"><ui5-icon name="${e(this.sapNextIcon)}" class="ui5-switch-no-label-icon-on"></ui5-icon></span><span class="ui5-switch-text ui5-switch-text--off switch-no-label-icon" part="text-off"><ui5-icon name="${e(this.sapNextIcon)}" class="ui5-switch-no-label-icon-off"></ui5-icon></span>`}function F(n,t,i){return u`<span class="ui5-switch-text ui5-switch-text--on" part="text-on">${e(this._textOn)}</span><span class="ui5-switch-text ui5-switch-text--off" part="text-off">${e(this._textOff)}</span>`}g("@ui5/webcomponents-theming","sap_fiori_3",async()=>S);g("@ui5/webcomponents","sap_fiori_3",async()=>O);const A={packageName:"@ui5/webcomponents",fileName:"themes/Switch.css",content:`.ui5-hidden-text {
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
.ui5-switch-root.ui5-switch--checked.ui5-switch--semantic .ui5-switch-text--on, 
.ui5-switch-root.ui5-switch--checked.ui5-switch-desktop.ui5-switch--no-label .ui5-switch-text--on {
	left: var(--_ui5_switch_text_active_left);
}
.ui5-switch-root:not(.ui5-switch--checked).ui5-switch--semantic .ui5-switch-text--off,
.ui5-switch-root:not(.ui5-switch--checked).ui5-switch-desktop.ui5-switch--no-label .ui5-switch-text--off {
	left: var(--_ui5_switch_text_inactive_left);
	right: var(--_ui5_switch_text_inactive_right);
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
`};var c=globalThis&&globalThis.__decorate||function(n,t,i,r){var h=arguments.length,l=h<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,_;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(n,t,i,r);else for(var p=n.length-1;p>=0;p--)(_=n[p])&&(l=(h<3?_(l):h>3?_(t,i,l):_(t,i))||l);return h>3&&l&&Object.defineProperty(t,i,l),l},m;let o=m=class extends ${onBeforeRendering(){this._enableFormSupport()}_enableFormSupport(){const t=L("FormSupport");t?t.syncNativeHiddenInput(this,(i,r)=>{const h=i;r.checked=!!h.checked,r.disabled=!!h.disabled,r.value=h.checked?"on":""}):this.name&&console.warn('In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";')}get sapNextIcon(){return this.checked?"accept":"less"}_onclick(){this.toggle()}_onkeydown(t){b(t)&&t.preventDefault(),V(t)&&this._onclick()}_onkeyup(t){b(t)&&this._onclick()}toggle(){if(!this.disabled){this.checked=!this.checked;const t=!this.fireEvent("change",null,!0),i=!this.fireEvent("value-changed",null,!0);(t||i)&&(this.checked=!this.checked)}}get graphical(){return this.design===d.Graphical}get hasNoLabel(){return!(this.graphical||this.textOn||this.textOff)}get _textOn(){return this.graphical?"":this.textOn}get _textOff(){return this.graphical?"":this.textOff}get effectiveTabIndex(){return this.disabled?void 0:"0"}get classes(){const t=this.graphical||this.textOn||this.textOff;return{main:{"ui5-switch-desktop":E(),"ui5-switch--disabled":this.disabled,"ui5-switch--checked":this.checked,"ui5-switch--semantic":this.graphical,"ui5-switch--no-label":!t}}}get effectiveAriaDisabled(){return this.disabled?"true":void 0}get accessibilityOnText(){return this._textOn}get accessibilityOffText(){return this._textOff}get hiddenText(){return this.checked?this.accessibilityOnText:this.accessibilityOffText}get ariaLabelText(){return[z(this),this.hiddenText].join(" ").trim()}static async onDefine(){m.i18nBundle=await N("@ui5/webcomponents")}};c([a({type:d,defaultValue:d.Textual})],o.prototype,"design",void 0);c([a({type:Boolean})],o.prototype,"checked",void 0);c([a({type:Boolean})],o.prototype,"disabled",void 0);c([a()],o.prototype,"textOn",void 0);c([a()],o.prototype,"textOff",void 0);c([a()],o.prototype,"accessibleName",void 0);c([a({defaultValue:""})],o.prototype,"accessibleNameRef",void 0);c([a()],o.prototype,"tooltip",void 0);c([a({type:Boolean})],o.prototype,"required",void 0);c([a()],o.prototype,"name",void 0);c([R()],o.prototype,"formSupport",void 0);o=m=c([T({tag:"ui5-switch",languageAware:!0,styles:A,renderer:D,template:C,dependencies:[q]}),j("change")],o);o.define();const W=o,U=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"})),w=I("ui5-switch",["accessibleName","accessibleNameRef","design","name","textOff","textOn","tooltip"],["checked","disabled","required"],[],["change"],()=>y(()=>Promise.resolve().then(()=>U),void 0,import.meta.url));w.displayName="Switch";w.defaultProps={design:d.Textual};try{w.displayName="Switch",w.__docgenInfo={description:'The `Switch` component is used for changing between binary states.\nThe component can display texts, that will be switched, based on the component state, via the `textOn` and `textOff` properties, but texts longer than 3 letters will be cutted off.\nHowever, users are able to customize the width of `Switch` with pure CSS (`<Switch style="width: 200px">`), and set widths, depending on the texts they would use.\nNote: the component would not automatically stretch to fit the whole text width.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Switch)',displayName:"Switch",props:{onChange:{defaultValue:null,description:"Fired when the component checked state changes.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<SwitchDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Sets the accessible ARIA name of the component. **Note**: We recommend that you set an accessibleNameRef pointing to an external label or at least an `accessibleName`. Providing an `accessibleNameRef` or an `accessibleName` is mandatory in the cases when `textOn` and `textOff` properties aren't set.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component. **Note**: We recommend that you set an accessibleNameRef pointing to an external label or at least an `accessibleName`. Providing an `accessibleNameRef` or an `accessibleName` is mandatory in the cases when `textOn` and `textOff` properties aren't set.",name:"accessibleNameRef",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"Defines if the component is checked.\n\n**Note:** The property can be changed with user interaction, either by cliking the component, or by pressing the `Enter` or `Space` key.",name:"checked",required:!1,type:{name:"boolean"}},design:{defaultValue:{value:"SwitchDesign.Textual"},description:"Defines the component design.\n\n**Note:** If `Graphical` type is set, positive and negative icons will replace the `textOn` and `textOff`.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Textual"'},{value:'"Graphical"'},{value:'"Textual"'},{value:'"Graphical"'}]}},disabled:{defaultValue:null,description:`Defines whether the component is disabled.

**Note:** A disabled component is noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:'Determines the name with which the component will be submitted in an HTML form.\n\n**Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n\n**Note:** When set, a native `input` HTML element will be created inside the component so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.',name:"name",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},textOff:{defaultValue:null,description:`Defines the text, displayed when the component is not checked.

**Note:** We recommend using short texts, up to 3 letters (larger texts would be cut off).`,name:"textOff",required:!1,type:{name:"string"}},textOn:{defaultValue:null,description:`Defines the text, displayed when the component is checked.

**Note:** We recommend using short texts, up to 3 letters (larger texts would be cut off).`,name:"textOn",required:!1,type:{name:"string"}},tooltip:{defaultValue:null,description:"Defines the tooltip of the component.\n**Note:** If applicable an external label reference should always be the preferred option to provide context to the `Switch` component over a tooltip.",name:"tooltip",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{w as S};
//# sourceMappingURL=index-8088c5ec.js.map
