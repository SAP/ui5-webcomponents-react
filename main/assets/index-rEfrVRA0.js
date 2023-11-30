import{_ as y}from"./iframe-LnjFU1Gc.js";import{r as g,U as $,l as N}from"./UI5Element-Y0uzLFOr.js";import{b as l,l as e,d as a,s as S,a as O,p as n,c as T,g as D,w as q}from"./withWebComponent-l-jCeTa1.js";import{a as I,e as j}from"./Icon-bdsWWJur.js";import{s as R}from"./slot-HSrR9XJ-.js";import{k as m,l as V}from"./Icons-WRZ8WMWs.js";import{d as z}from"./i18nBundle-Crssojm_.js";import{g as C}from"./AriaLabelHelper-RbKlVwzD.js";import"./accept-QwIZktij.js";import"./decline-tcMkvtbY.js";import"./less-SxpWieiK.js";import{g as E}from"./VersionInfo-hBCHoyLi.js";import{o as b}from"./class-map-kmjzTHDs.js";var p;(function(c){c.Textual="Textual",c.Graphical="Graphical"})(p||(p={}));const d=p;function P(c,t,i){return i?l`<div class="ui5-switch-root ${b(this.classes.main)}" role="switch" aria-label="${e(this.ariaLabelText)}" aria-checked="${e(this.checked)}" aria-disabled="${e(this.effectiveAriaDisabled)}" aria-required="${e(this.required)}" @click="${this._onclick}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" tabindex="${e(this.effectiveTabIndex)}" dir="${e(this.effectiveDir)}" title="${e(this.tooltip)}"><div class="ui5-switch-inner"><div class="ui5-switch-track" part="slider"><div class="ui5-switch-slider">${this.graphical?k.call(this,c,t,i):x.call(this,c,t,i)}<span class="ui5-switch-handle" part="handle"><${a("ui5-icon",t,i)} name="${e(this.sapNextIcon)}" class="ui5-switch-handle-icon"></${a("ui5-icon",t,i)}></span></div></div></div><input type='checkbox' ?checked="${this.checked}" class="ui5-switch-input" data-sap-no-tab-ref/><slot name="formSupport"></slot></div>`:l`<div class="ui5-switch-root ${b(this.classes.main)}" role="switch" aria-label="${e(this.ariaLabelText)}" aria-checked="${e(this.checked)}" aria-disabled="${e(this.effectiveAriaDisabled)}" aria-required="${e(this.required)}" @click="${this._onclick}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" tabindex="${e(this.effectiveTabIndex)}" dir="${e(this.effectiveDir)}" title="${e(this.tooltip)}"><div class="ui5-switch-inner"><div class="ui5-switch-track" part="slider"><div class="ui5-switch-slider">${this.graphical?k.call(this,c,t,i):x.call(this,c,t,i)}<span class="ui5-switch-handle" part="handle"><ui5-icon name="${e(this.sapNextIcon)}" class="ui5-switch-handle-icon"></ui5-icon></span></div></div></div><input type='checkbox' ?checked="${this.checked}" class="ui5-switch-input" data-sap-no-tab-ref/><slot name="formSupport"></slot></div>`}function k(c,t,i){return i?l`<span class="ui5-switch-text ui5-switch-text--on"><${a("ui5-icon",t,i)} name="accept" class="ui5-switch-icon-on"></${a("ui5-icon",t,i)}></span><span class="ui5-switch-text ui5-switch-text--off"><${a("ui5-icon",t,i)} name="decline" class="ui5-switch-icon-off"></${a("ui5-icon",t,i)}></span>`:l`<span class="ui5-switch-text ui5-switch-text--on"><ui5-icon name="accept" class="ui5-switch-icon-on"></ui5-icon></span><span class="ui5-switch-text ui5-switch-text--off"><ui5-icon name="decline" class="ui5-switch-icon-off"></ui5-icon></span>`}function x(c,t,i){return l`${this.hasNoLabel?L.call(this,c,t,i):F.call(this,c,t,i)}`}function L(c,t,i){return i?l`<span class="ui5-switch-text ui5-switch-text--on ui5-switch-no-label-icon" part="text-on"><${a("ui5-icon",t,i)} name="${e(this.sapNextIcon)}" class="ui5-switch-no-label-icon-on"></${a("ui5-icon",t,i)}></span><span class="ui5-switch-text ui5-switch-text--off switch-no-label-icon" part="text-off"><${a("ui5-icon",t,i)} name="${e(this.sapNextIcon)}" class="ui5-switch-no-label-icon-off"></${a("ui5-icon",t,i)}></span>`:l`<span class="ui5-switch-text ui5-switch-text--on ui5-switch-no-label-icon" part="text-on"><ui5-icon name="${e(this.sapNextIcon)}" class="ui5-switch-no-label-icon-on"></ui5-icon></span><span class="ui5-switch-text ui5-switch-text--off switch-no-label-icon" part="text-off"><ui5-icon name="${e(this.sapNextIcon)}" class="ui5-switch-no-label-icon-off"></ui5-icon></span>`}function F(c,t,i){return l`<span class="ui5-switch-text ui5-switch-text--on" part="text-on">${e(this._textOn)}</span><span class="ui5-switch-text ui5-switch-text--off" part="text-off">${e(this._textOff)}</span>`}g("@ui5/webcomponents-theming","sap_horizon",async()=>S);g("@ui5/webcomponents","sap_horizon",async()=>O);const A={packageName:"@ui5/webcomponents",fileName:"themes/Switch.css",content:'.ui5-hidden-text{clip:rect(1px,1px,1px,1px);font-size:0;left:-1000px;pointer-events:none;position:absolute;top:-1000px;user-select:none}:host{-webkit-tap-highlight-color:rgba(0,0,0,0)}:host(:not([hidden])){display:inline-block}.ui5-switch-root{align-items:center;border-radius:var(--_ui5-v1-19-1-switch-root-border-radius);cursor:pointer;display:flex;height:var(--_ui5-v1-19-1_switch_height);min-width:var(--_ui5-v1-19-1_switch_min_width);outline:none;position:relative;width:var(--_ui5-v1-19-1_switch_width)}.ui5-switch-root:not(.ui5-switch--no-label):not(.ui5-switch--semantic){height:var(--_ui5-v1-19-1_switch_height);width:var(--_ui5-v1-19-1_switch_with_label_width)}.ui5-switch-root.ui5-switch--no-label{min-width:var(--_ui5-v1-19-1_switch_width)}.ui5-switch-inner{align-items:center;display:flex;height:100%;justify-content:center;min-width:inherit;overflow:hidden;pointer-events:none;width:100%;will-change:transform}:host([checked]) .ui5-switch-inner{border-radius:6.25rem;box-shadow:var(--_ui5-v1-19-1-switch-root-box-shadow)}.ui5-switch-track{align-items:center;border:var(--_ui5-v1-19-1-switch-track-border);border-radius:var(--_ui5-v1-19-1_switch_track_border_radius);box-sizing:border-box;display:flex;height:var(--_ui5-v1-19-1_switch_track_height);transition:var(--_ui5-v1-19-1_switch_track_transition);width:var(--_ui5-v1-19-1_switch_track_width)}.ui5-switch-root:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-track{height:var(--_ui5-v1-19-1_switch_track_with_label_height);width:var(--_ui5-v1-19-1_switch_track_with_label_width)}.ui5-switch-slider{height:var(--_ui5-v1-19-1_switch_height);position:relative;transform-origin:top left;transition:transform .1s ease-in;width:100%}.ui5-switch-slider>:not(.ui5-switch-handle){display:var(--_ui5-v1-19-1-switch-slider-texts-display)}.ui5-switch-handle{align-items:center;border:var(--_ui5-v1-19-1_switch_handle_border);border-radius:var(--_ui5-v1-19-1_switch_handle_border_radius);box-sizing:border-box;display:flex;height:var(--_ui5-v1-19-1_switch_handle_height);justify-content:center;position:absolute;width:var(--_ui5-v1-19-1_switch_handle_width)}.ui5-switch-root:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-handle{height:var(--_ui5-v1-19-1_switch_handle_with_label_height);width:var(--_ui5-v1-19-1_switch_handle_with_label_width)}.ui5-switch-handle-icon{display:var(--_ui5-v1-19-1-switch-handle-icon-display);transition:var(--_ui5-v1-19-1_switch_track_transition)}:host([checked]) .ui5-switch-handle-icon{color:var(--_ui5-v1-19-1-switch_track-on-background)}.ui5-switch-text{display:flex;font-family:var(--_ui5-v1-19-1-switch-text_font_family);font-size:var(--_ui5-v1-19-1_switch_text_font_size);justify-content:center;min-width:var(--_ui5-v1-19-1_switch_text_min_width);position:absolute;text-align:center;text-transform:uppercase;user-select:none;-webkit-user-select:none;white-space:nowrap;z-index:var(--_ui5-v1-19-1_switch_text_z_index)}.ui5-switch-handle,.ui5-switch-text{left:var(--_ui5-v1-19-1_switch_handle_left);top:50%;transform:translateY(-50%)}.ui5-switch-desktop.ui5-switch-root:focus:after{border:var(--_ui5-v1-19-1_switch_focus_outline);border-radius:var(--_ui5-v1-19-1_switch_root_after_boreder_radius);bottom:var(--_ui5-v1-19-1_switch_root_outline_bottom);content:"";left:var(--_ui5-v1-19-1_switch_root_outline_left);outline:var(--_ui5-v1-19-1_switch_root_after_outline);pointer-events:none;position:absolute;right:var(--_ui5-v1-19-1_switch_root_outline_right);top:var(--_ui5-v1-19-1_switch_root_outline_top);transition:var(--_ui5-v1-19-1_switch_track_transition)}.ui5-switch-root .ui5-switch-input{-webkit-appearance:none;height:0;left:0;margin:0;position:absolute;visibility:hidden;width:0}.ui5-switch-root.ui5-switch--disabled{cursor:default;opacity:var(--_ui5-v1-19-1_switch_disabled_opacity)}.ui5-switch-root.ui5-switch--checked .ui5-switch-text--off{visibility:var(--_ui5-v1-19-1_switch_text_hidden)}.ui5-switch-root:not(.ui5-switch--checked) .ui5-switch-text--on{visibility:var(--_ui5-v1-19-1_switch_text_hidden)}.ui5-switch-root.ui5-switch--checked.ui5-switch--semantic .ui5-switch-text--on,.ui5-switch-root.ui5-switch--checked.ui5-switch-desktop.ui5-switch--no-label .ui5-switch-text--on{left:var(--_ui5-v1-19-1_switch_text_active_left)}.ui5-switch-root:not(.ui5-switch--checked).ui5-switch--semantic .ui5-switch-text--off,.ui5-switch-root:not(.ui5-switch--checked).ui5-switch-desktop.ui5-switch--no-label .ui5-switch-text--off{left:var(--_ui5-v1-19-1_switch_text_inactive_left);right:var(--_ui5-v1-19-1_switch_text_inactive_right)}.ui5-switch-root.ui5-switch--checked .ui5-switch-handle{background:var(--_ui5-v1-19-1_switch_handle_active_background_color);border-color:var(--_ui5-v1-19-1_switch_handle_active_border_color)}.ui5-switch-root:not(.ui5-switch--checked) .ui5-switch-handle{background:var(--_ui5-v1-19-1_switch_handle_inactive_background_color);border-color:var(--_ui5-v1-19-1_switch_handle_inactive_border_color)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle{background:var(--_ui5-v1-19-1_switch_handle_hover_active_background_color);border-color:var(--_ui5-v1-19-1_switch_handle_hover_active_border_color)}.ui5-switch-desktop.ui5-switch-root:not(.ui5-switch--disabled):not(.ui5-switch--checked):hover .ui5-switch-handle{background:var(--_ui5-v1-19-1_switch_handle_hover_inactive_background_color);border-color:var(--_ui5-v1-19-1_switch_handle_hover_inactive_border_color)}.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked .ui5-switch-handle{background:var(--_ui5-v1-19-1_switch_handle_semantic_accept_background_color);border-color:var(--_ui5-v1-19-1_switch_handle_semantic_accept_border_color)}.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--checked) .ui5-switch-handle{background:var(--_ui5-v1-19-1_switch_handle_semantic_reject_background_color);border-color:var(--_ui5-v1-19-1_switch_handle_semantic_reject_border_color)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle{background:var(--_ui5-v1-19-1_switch_handle_semantic_hover_accept_background_color);border-color:var(--_ui5-v1-19-1_switch_handle_semantic_hover_accept_border_color)}.ui5-switch-desktop.ui5-switch--semantic.ui5-switch-root:not(.ui5-switch--checked):not(.ui5-switch--disabled):hover .ui5-switch-handle{background:var(--_ui5-v1-19-1_switch_handle_semantic_hover_reject_background_color);border-color:var(--_ui5-v1-19-1_switch_handle_semantic_hover_reject_border_color)}.ui5-switch-root.ui5-switch--checked .ui5-switch-track{background:var(--_ui5-v1-19-1_switch_track_active_background_color);border-color:var(--_ui5-v1-19-1_switch_track_active_border_color)}.ui5-switch-root:not(.ui5-switch--checked) .ui5-switch-track{background:var(--_ui5-v1-19-1_switch_track_inactive_background_color);border-color:var(--_ui5-v1-19-1_switch_track_inactive_border_color)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-track{background:var(--_ui5-v1-19-1_switch_track_hover_active_background_color);border-color:var(--_ui5-v1-19-1_switch_track_hover_active_border_color)}.ui5-switch-desktop.ui5-switch-root:not(.ui5-switch--checked):not(.ui5-switch--disabled):hover .ui5-switch-track{background:var(--_ui5-v1-19-1_switch_track_hover_inactive_background_color);border-color:var(--_ui5-v1-19-1_switch_track_hover_inactive_border_color)}.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked .ui5-switch-track{background:var(--_ui5-v1-19-1_switch_track_semantic_accept_background_color);border-color:var(--_ui5-v1-19-1_switch_track_semantic_accept_border_color)}.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--checked) .ui5-switch-track{background:var(--_ui5-v1-19-1_switch_track_semantic_reject_background_color);border-color:var(--_ui5-v1-19-1_switch_track_semantic_reject_border_color)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-track{background:var(--_ui5-v1-19-1_switch_track_semantic_hover_accept_background_color);border-color:var(--_ui5-v1-19-1_switch_track_semantic_hover_accept_border_color)}.ui5-switch-desktop.ui5-switch--semantic.ui5-switch-root:not(.ui5-switch--checked):not(.ui5-switch--disabled):hover .ui5-switch-track{background:var(--_ui5-v1-19-1_switch_track_semantic_hover_reject_background_color);border-color:var(--_ui5-v1-19-1_switch_track_semantic_hover_reject_border_color)}.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-slider{transform:var(--_ui5-v1-19-1_switch_transform_with_label)}.ui5-switch-root.ui5-switch--checked .ui5-switch-slider{transform:var(--_ui5-v1-19-1_switch_transform)}.ui5-switch-root.ui5-switch--no-label .ui5-switch-text,.ui5-switch-root.ui5-switch--semantic .ui5-switch-text,.ui5-switch-text .ui5-switch-text--on .ui5-switch-no-label-icon{display:flex;justify-content:center}.ui5-switch--no-label .ui5-switch-no-label-icon-off,.ui5-switch--no-label .ui5-switch-no-label-icon-on{display:var(--_ui5-v1-19-1_switch_track_icon_display);height:var(--_ui5-v1-19-1_switch_icon_height);width:var(--_ui5-v1-19-1_switch_icon_width)}.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-off,.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-on{height:var(--_ui5-v1-19-1_switch_icon_height);width:var(--_ui5-v1-19-1_switch_icon_width)}.ui5-switch-root .ui5-switch-text{font-family:var(--_ui5-v1-19-1_switch_text_font_family);font-size:var(--_ui5-v1-19-1_switch_text_font_size);width:var(--_ui5-v1-19-1_switch_text_width)}.ui5-switch-root:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-text{font-family:var(--_ui5-v1-19-1_switch_text_with_label_font_family);font-size:var(--_ui5-v1-19-1_switch_text_with_label_font_size);width:var(--_ui5-v1-19-1_switch_text_with_label_width)}:host([active]) .ui5-switch-desktop.ui5-switch-root:not(.ui5-switch--disabled) .ui5-switch-track{background:var( --_ui5-v1-19-1-switch_track-off-active-background)}:host([active]) .ui5-switch-desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-track{background:var(--_ui5-v1-19-1-switch_track-on-active-background)}.ui5-switch-desktop.ui5-switch-root:not(.ui5-switch--disabled):hover .ui5-switch-handle{box-shadow:var(--_ui5-v1-19-1_switch_handle_off_hover_box_shadow)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle{box-shadow:var(--_ui5-v1-19-1_switch_handle_on_hover_box_shadow)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--disabled):hover .ui5-switch-handle{box-shadow:var(--_ui5-v1-19-1_switch_handle_semantic_off_hover_box_shadow)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle{box-shadow:var(--_ui5-v1-19-1_switch_handle_semantic_on_hover_box_shadow)}.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-on,.ui5-switch-root.ui5-switch--semantic .ui5-switch-text--on{color:var(--_ui5-v1-19-1_switch_text_semantic_accept_color)}.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-off,.ui5-switch-root.ui5-switch--semantic .ui5-switch-text--off{color:var(--_ui5-v1-19-1_switch_text_semantic_reject_color)}.ui5-switch-root .ui5-switch-text--on{color:var(--_ui5-v1-19-1_switch_text_active_color);left:var(--_ui5-v1-19-1_switch_text_active_left_alternate);overflow:var(--_ui5-v1-19-1_switch_text_overflow);text-overflow:ellipsis}.ui5-switch-root .ui5-switch-text--off{color:var(--_ui5-v1-19-1_switch_text_inactive_color);left:var(--_ui5-v1-19-1_switch_text_inactive_left_alternate);overflow:var(--_ui5-v1-19-1_switch_text_overflow);right:var(--_ui5-v1-19-1_switch_text_inactive_right_alternate);text-overflow:ellipsis}.ui5-switch-root .ui5-switch-icon-on,.ui5-switch-root .ui5-switch-no-label-icon-on{color:var(--_ui5-v1-19-1_switch_text_active_color)}.ui5-switch-root .ui5-switch-icon-off,.ui5-switch-root .ui5-switch-no-label-icon-off{color:var(--_ui5-v1-19-1_switch_text_inactive_color)}[dir=rtl].ui5-switch-root.ui5-switch--checked:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-slider{transform:var(--_ui5-v1-19-1_switch_rtl_transform_with_label)}[dir=rtl].ui5-switch-root.ui5-switch--checked .ui5-switch-slider{transform:var(--_ui5-v1-19-1_switch_rtl_transform)}[dir=rtl].ui5-switch-root .ui5-switch-handle{left:auto;right:var(--_ui5-v1-19-1_switch_handle_left)}[dir=rtl].ui5-switch-root .ui5-switch-text--on{left:var(--_ui5-v1-19-1_switch_text_active_right);right:var(--_ui5-v1-19-1_switch_text_active_left)}[dir=rtl].ui5-switch-root .ui5-switch-text--off{left:var(--_ui5-v1-19-1_switch_text_inactive_right);right:var(--_ui5-v1-19-1_switch_text_inactive_left)}'};var s=function(c,t,i,r){var h=arguments.length,u=h<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,_;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")u=Reflect.decorate(c,t,i,r);else for(var v=c.length-1;v>=0;v--)(_=c[v])&&(u=(h<3?_(u):h>3?_(t,i,u):_(t,i))||u);return h>3&&u&&Object.defineProperty(t,i,u),u},f;let o=f=class extends ${onBeforeRendering(){this._enableFormSupport()}_enableFormSupport(){const t=E("FormSupport");t?t.syncNativeHiddenInput(this,(i,r)=>{const h=i;r.checked=!!h.checked,r.disabled=!!h.disabled,r.value=h.checked?"on":""}):this.name&&console.warn('In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";')}get sapNextIcon(){return this.checked?"accept":"less"}_onclick(){this.toggle()}_onkeydown(t){m(t)&&t.preventDefault(),V(t)&&this._onclick()}_onkeyup(t){m(t)&&this._onclick()}toggle(){if(!this.disabled){this.checked=!this.checked;const t=!this.fireEvent("change",null,!0),i=!this.fireEvent("value-changed",null,!0);(t||i)&&(this.checked=!this.checked)}}get graphical(){return this.design===d.Graphical}get hasNoLabel(){return!(this.graphical||this.textOn||this.textOff)}get _textOn(){return this.graphical?"":this.textOn}get _textOff(){return this.graphical?"":this.textOff}get effectiveTabIndex(){return this.disabled?void 0:"0"}get classes(){const t=this.graphical||this.textOn||this.textOff;return{main:{"ui5-switch-desktop":N(),"ui5-switch--disabled":this.disabled,"ui5-switch--checked":this.checked,"ui5-switch--semantic":this.graphical,"ui5-switch--no-label":!t}}}get effectiveAriaDisabled(){return this.disabled?"true":void 0}get accessibilityOnText(){return this._textOn}get accessibilityOffText(){return this._textOff}get hiddenText(){return this.checked?this.accessibilityOnText:this.accessibilityOffText}get ariaLabelText(){return[C(this),this.hiddenText].join(" ").trim()}static async onDefine(){f.i18nBundle=await z("@ui5/webcomponents")}};s([n({type:d,defaultValue:d.Textual})],o.prototype,"design",void 0);s([n({type:Boolean})],o.prototype,"checked",void 0);s([n({type:Boolean})],o.prototype,"disabled",void 0);s([n()],o.prototype,"textOn",void 0);s([n()],o.prototype,"textOff",void 0);s([n()],o.prototype,"accessibleName",void 0);s([n({defaultValue:""})],o.prototype,"accessibleNameRef",void 0);s([n()],o.prototype,"tooltip",void 0);s([n({type:Boolean})],o.prototype,"required",void 0);s([n()],o.prototype,"name",void 0);s([R()],o.prototype,"formSupport",void 0);o=f=s([T({tag:"ui5-switch",languageAware:!0,styles:A,renderer:D,template:P,dependencies:[I]}),j("change")],o);o.define();const W=o,U=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"})),w=q("ui5-switch",["accessibleName","accessibleNameRef","design","name","textOff","textOn","tooltip"],["checked","disabled","required"],[],["change"],()=>y(()=>Promise.resolve().then(()=>U),void 0,import.meta.url));w.displayName="Switch";w.defaultProps={design:d.Textual};try{w.displayName="Switch",w.__docgenInfo={description:'The `Switch` component is used for changing between binary states.\nThe component can display texts, that will be switched, based on the component state, via the `textOn` and `textOff` properties, but texts longer than 3 letters will be cutted off.\nHowever, users are able to customize the width of `Switch` with pure CSS (`<Switch style="width: 200px">`), and set widths, depending on the texts they would use.\nNote: the component would not automatically stretch to fit the whole text width.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Switch)',displayName:"Switch",props:{onChange:{defaultValue:null,description:"Fired when the component checked state changes.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<SwitchDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Sets the accessible ARIA name of the component. **Note**: We recommend that you set an accessibleNameRef pointing to an external label or at least an `accessibleName`. Providing an `accessibleNameRef` or an `accessibleName` is mandatory in the cases when `textOn` and `textOff` properties aren't set.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component. **Note**: We recommend that you set an accessibleNameRef pointing to an external label or at least an `accessibleName`. Providing an `accessibleNameRef` or an `accessibleName` is mandatory in the cases when `textOn` and `textOff` properties aren't set.",name:"accessibleNameRef",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"Defines if the component is checked.\n\n**Note:** The property can be changed with user interaction, either by cliking the component, or by pressing the `Enter` or `Space` key.",name:"checked",required:!1,type:{name:"boolean"}},design:{defaultValue:{value:"SwitchDesign.Textual"},description:"Defines the component design.\n\n**Note:** If `Graphical` type is set, positive and negative icons will replace the `textOn` and `textOff`.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Textual"'},{value:'"Graphical"'},{value:'"Textual"'},{value:'"Graphical"'}]}},disabled:{defaultValue:null,description:`Defines whether the component is disabled.

**Note:** A disabled component is noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:'Determines the name with which the component will be submitted in an HTML form.\n\n**Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n\n**Note:** When set, a native `input` HTML element will be created inside the component so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.',name:"name",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},textOff:{defaultValue:null,description:`Defines the text, displayed when the component is not checked.

**Note:** We recommend using short texts, up to 3 letters (larger texts would be cut off).`,name:"textOff",required:!1,type:{name:"string"}},textOn:{defaultValue:null,description:`Defines the text, displayed when the component is checked.

**Note:** We recommend using short texts, up to 3 letters (larger texts would be cut off).`,name:"textOn",required:!1,type:{name:"string"}},tooltip:{defaultValue:null,description:"Defines the tooltip of the component.\n**Note:** If applicable an external label reference should always be the preferred option to provide context to the `Switch` component over a tooltip.",name:"tooltip",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{w as S};
//# sourceMappingURL=index-rEfrVRA0.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}