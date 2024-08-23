import{h,j as c,f as x,s as k,a,m as y,k as N,I as S,w as $}from"./withWebComponent-6t4MTiZ-.js";import{s as O}from"./event-Dq0fpeHi.js";import{a as m,b as q,f as T,h as D}from"./Keys-F_3Gvx0K.js";import{f as A}from"./i18nBundle-BwSTHZvs.js";import{v as V}from"./AriaLabelHelper-C5uDZewF.js";import"./useIsomorphicLayoutEffect-dLBi2t77.js";import"./accept-C_bZLOp6.js";import"./decline-Chobtb_o.js";import"./less-DJsCHbkQ.js";import{I as R}from"./Icon-CX51DRZ7.js";import{ac as C}from"./i18n-defaults-sl2p4TZC.js";import{o as f}from"./class-map-D9jLILSY.js";import{l as n}from"./if-defined-B1auRMLy.js";import{s as I}from"./parameters-bundle.css-P4kwt3kq.js";var v;(function(i){i.Textual="Textual",i.Graphical="Graphical"})(v||(v={}));const P=v;function j(i,e,t){return t?h`<div class="ui5-switch-root ${f(this.classes.main)}" role="switch" aria-label="${n(this.ariaLabelText)}" aria-checked="${n(this.checked)}" aria-disabled="${n(this.effectiveAriaDisabled)}" aria-required="${n(this.required)}" @click="${this._onclick}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" tabindex="${n(this.effectiveTabIndex)}" title="${n(this.tooltip)}"><div class="ui5-switch-inner"><div class="ui5-switch-track" part="slider"><div class="ui5-switch-slider">${this.graphical?b.call(this,i,e,t):g.call(this,i,e,t)}<span class="ui5-switch-handle" part="handle"><${c("ui5-icon",e,t)} name="${n(this.sapNextIcon)}" class="ui5-switch-handle-icon"></${c("ui5-icon",e,t)}></span></div></div></div><input type='checkbox' ?checked="${this.checked}" class="ui5-switch-input" data-sap-no-tab-ref/></div>`:h`<div class="ui5-switch-root ${f(this.classes.main)}" role="switch" aria-label="${n(this.ariaLabelText)}" aria-checked="${n(this.checked)}" aria-disabled="${n(this.effectiveAriaDisabled)}" aria-required="${n(this.required)}" @click="${this._onclick}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" tabindex="${n(this.effectiveTabIndex)}" title="${n(this.tooltip)}"><div class="ui5-switch-inner"><div class="ui5-switch-track" part="slider"><div class="ui5-switch-slider">${this.graphical?b.call(this,i,e,t):g.call(this,i,e,t)}<span class="ui5-switch-handle" part="handle"><ui5-icon name="${n(this.sapNextIcon)}" class="ui5-switch-handle-icon"></ui5-icon></span></div></div></div><input type='checkbox' ?checked="${this.checked}" class="ui5-switch-input" data-sap-no-tab-ref/></div>`}function b(i,e,t){return t?h`<span class="ui5-switch-text ui5-switch-text--on"><${c("ui5-icon",e,t)} name="accept" class="ui5-switch-icon-on"></${c("ui5-icon",e,t)}></span><span class="ui5-switch-text ui5-switch-text--off"><${c("ui5-icon",e,t)} name="decline" class="ui5-switch-icon-off"></${c("ui5-icon",e,t)}></span>`:h`<span class="ui5-switch-text ui5-switch-text--on"><ui5-icon name="accept" class="ui5-switch-icon-on"></ui5-icon></span><span class="ui5-switch-text ui5-switch-text--off"><ui5-icon name="decline" class="ui5-switch-icon-off"></ui5-icon></span>`}function g(i,e,t){return h`${this.hasNoLabel?z.call(this,i,e,t):E.call(this,i,e,t)}`}function z(i,e,t){return t?h`<span class="ui5-switch-text ui5-switch-text--on ui5-switch-no-label-icon" part="text-on"><${c("ui5-icon",e,t)} name="${n(this.sapNextIcon)}" class="ui5-switch-no-label-icon-on"></${c("ui5-icon",e,t)}></span><span class="ui5-switch-text ui5-switch-text--off ui5-switch-no-label-icon" part="text-off"><${c("ui5-icon",e,t)} name="${n(this.sapNextIcon)}" class="ui5-switch-no-label-icon-off"></${c("ui5-icon",e,t)}></span>`:h`<span class="ui5-switch-text ui5-switch-text--on ui5-switch-no-label-icon" part="text-on"><ui5-icon name="${n(this.sapNextIcon)}" class="ui5-switch-no-label-icon-on"></ui5-icon></span><span class="ui5-switch-text ui5-switch-text--off ui5-switch-no-label-icon" part="text-off"><ui5-icon name="${n(this.sapNextIcon)}" class="ui5-switch-no-label-icon-off"></ui5-icon></span>`}function E(i,e,t){return h`<span class="ui5-switch-text ui5-switch-text--on" part="text-on">${n(this._textOn)}</span><span class="ui5-switch-text ui5-switch-text--off" part="text-off">${n(this._textOff)}</span>`}x("@ui5/webcomponents-theming","sap_horizon",async()=>k);x("@ui5/webcomponents","sap_horizon",async()=>I);const F={packageName:"@ui5/webcomponents",fileName:"themes/Switch.css.ts",content:`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{-webkit-tap-highlight-color:rgba(0,0,0,0)}:host(:not([hidden])){display:inline-block}.ui5-switch-root{position:relative;display:flex;align-items:center;width:var(--_ui5-v2-1-2_switch_width);height:var(--_ui5-v2-1-2_switch_height);min-width:var(--_ui5-v2-1-2_switch_min_width);cursor:pointer;outline:none;border-radius:var(--_ui5-v2-1-2-switch-root-border-radius)}.ui5-switch-root:not(.ui5-switch--no-label):not(.ui5-switch--semantic){width:var(--_ui5-v2-1-2_switch_with_label_width);height:var(--_ui5-v2-1-2_switch_height)}.ui5-switch-root.ui5-switch--no-label{min-width:var(--_ui5-v2-1-2_switch_width)}.ui5-switch-inner{display:flex;align-items:center;justify-content:center;height:100%;width:100%;min-width:inherit;overflow:hidden;pointer-events:none;will-change:transform}:host([checked]) .ui5-switch-inner{border-radius:6.25rem;box-shadow:var(--_ui5-v2-1-2-switch-root-box-shadow)}.ui5-switch-track{display:flex;align-items:center;height:var(--_ui5-v2-1-2_switch_track_height);width:var(--_ui5-v2-1-2_switch_track_width);border:var(--_ui5-v2-1-2-switch-track-border);border-radius:var(--_ui5-v2-1-2_switch_track_border_radius);box-sizing:border-box;transition:var(--_ui5-v2-1-2_switch_track_transition)}.ui5-switch-root:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-track{height:var(--_ui5-v2-1-2_switch_track_with_label_height);width:var(--_ui5-v2-1-2_switch_track_with_label_width)}.ui5-switch-slider{position:relative;height:var(--_ui5-v2-1-2_switch_height);width:100%;transition:transform .1s ease-in;transform-origin:top left}.ui5-switch-slider>*:not(.ui5-switch-handle){display:var(--_ui5-v2-1-2-switch-slider-texts-display)}.ui5-switch-handle{position:absolute;display:flex;justify-content:center;align-items:center;width:var(--_ui5-v2-1-2_switch_handle_width);height:var(--_ui5-v2-1-2_switch_handle_height);border:var(--_ui5-v2-1-2_switch_handle_border);border-radius:var(--_ui5-v2-1-2_switch_handle_border_radius);box-sizing:border-box}.ui5-switch-root:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-handle{height:var(--_ui5-v2-1-2_switch_handle_with_label_height);width:var(--_ui5-v2-1-2_switch_handle_with_label_width)}.ui5-switch-handle-icon{display:var(--_ui5-v2-1-2-switch-handle-icon-display);transition:var(--_ui5-v2-1-2_switch_track_transition)}:host([checked]) .ui5-switch-handle-icon{color:var(--_ui5-v2-1-2-switch_track-on-background)}.ui5-switch-text{display:flex;justify-content:center;position:absolute;z-index:var(--_ui5-v2-1-2_switch_text_z_index);min-width:var(--_ui5-v2-1-2_switch_text_min_width);font-size:var(--_ui5-v2-1-2_switch_text_font_size);font-family:var(--_ui5-v2-1-2-switch-text_font_family);text-transform:uppercase;text-align:center;white-space:nowrap;user-select:none;-webkit-user-select:none}.ui5-switch-handle,.ui5-switch-text{inset-inline-start:var(--_ui5-v2-1-2_switch_handle_left);top:50%;transform:translateY(-50%)}.ui5-switch--desktop.ui5-switch-root:focus:after{content:"";position:absolute;inset-inline-start:var(--_ui5-v2-1-2_switch_root_outline_left);inset-inline-end:var(--_ui5-v2-1-2_switch_root_outline_right);top:var(--_ui5-v2-1-2_switch_root_outline_top);bottom:var(--_ui5-v2-1-2_switch_root_outline_bottom);border:var(--_ui5-v2-1-2_switch_focus_outline);border-radius:var(--_ui5-v2-1-2_switch_root_after_boreder_radius);pointer-events:none;transition:var(--_ui5-v2-1-2_switch_track_transition);outline:var(--_ui5-v2-1-2_switch_root_after_outline)}.ui5-switch-root .ui5-switch-input{position:absolute;inset-inline-start:0;width:0;height:0;margin:0;visibility:hidden;appearance:none;-webkit-appearance:none}.ui5-switch-root.ui5-switch--disabled{opacity:var(--_ui5-v2-1-2_switch_disabled_opacity);cursor:default}.ui5-switch-root.ui5-switch--checked .ui5-switch-text--off{visibility:var(--_ui5-v2-1-2_switch_text_hidden)}.ui5-switch-root:not(.ui5-switch--checked) .ui5-switch-text--on{visibility:var(--_ui5-v2-1-2_switch_text_hidden)}.ui5-switch-root.ui5-switch--checked.ui5-switch--semantic .ui5-switch-text--on,.ui5-switch-root.ui5-switch--checked.ui5-switch--desktop.ui5-switch--no-label .ui5-switch-text--on{inset-inline-start:var(--_ui5-v2-1-2_switch_text_active_left)}.ui5-switch-root:not(.ui5-switch--checked).ui5-switch--semantic .ui5-switch-text--off,.ui5-switch-root:not(.ui5-switch--checked).ui5-switch--desktop.ui5-switch--no-label .ui5-switch-text--off{inset-inline-start:var(--_ui5-v2-1-2_switch_text_inactive_left);inset-inline-end:var(--_ui5-v2-1-2_switch_text_inactive_right)}.ui5-switch-root.ui5-switch--checked .ui5-switch-handle{background:var(--_ui5-v2-1-2_switch_handle_active_background_color);border-color:var(--_ui5-v2-1-2_switch_handle_active_border_color)}.ui5-switch-root:not(.ui5-switch--checked) .ui5-switch-handle{background:var(--_ui5-v2-1-2_switch_handle_inactive_background_color);border-color:var(--_ui5-v2-1-2_switch_handle_inactive_border_color)}.ui5-switch--desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle{background:var(--_ui5-v2-1-2_switch_handle_hover_active_background_color);border-color:var(--_ui5-v2-1-2_switch_handle_hover_active_border_color)}.ui5-switch--desktop.ui5-switch-root:not(.ui5-switch--disabled):not(.ui5-switch--checked):hover .ui5-switch-handle{background:var(--_ui5-v2-1-2_switch_handle_hover_inactive_background_color);border-color:var(--_ui5-v2-1-2_switch_handle_hover_inactive_border_color)}.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked .ui5-switch-handle{background:var(--_ui5-v2-1-2_switch_handle_semantic_accept_background_color);border-color:var(--_ui5-v2-1-2_switch_handle_semantic_accept_border_color)}.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--checked) .ui5-switch-handle{background:var(--_ui5-v2-1-2_switch_handle_semantic_reject_background_color);border-color:var(--_ui5-v2-1-2_switch_handle_semantic_reject_border_color)}.ui5-switch--desktop.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle{background:var(--_ui5-v2-1-2_switch_handle_semantic_hover_accept_background_color);border-color:var(--_ui5-v2-1-2_switch_handle_semantic_hover_accept_border_color)}.ui5-switch--desktop.ui5-switch--semantic.ui5-switch-root:not(.ui5-switch--checked):not(.ui5-switch--disabled):hover .ui5-switch-handle{background:var(--_ui5-v2-1-2_switch_handle_semantic_hover_reject_background_color);border-color:var(--_ui5-v2-1-2_switch_handle_semantic_hover_reject_border_color)}.ui5-switch-root.ui5-switch--checked .ui5-switch-track{background:var(--_ui5-v2-1-2_switch_track_active_background_color);border-color:var(--_ui5-v2-1-2_switch_track_active_border_color)}.ui5-switch-root:not(.ui5-switch--checked) .ui5-switch-track{background:var(--_ui5-v2-1-2_switch_track_inactive_background_color);border-color:var(--_ui5-v2-1-2_switch_track_inactive_border_color)}.ui5-switch--desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-track{background:var(--_ui5-v2-1-2_switch_track_hover_active_background_color);border-color:var(--_ui5-v2-1-2_switch_track_hover_active_border_color)}.ui5-switch--desktop.ui5-switch-root:not(.ui5-switch--checked):not(.ui5-switch--disabled):hover .ui5-switch-track{background:var(--_ui5-v2-1-2_switch_track_hover_inactive_background_color);border-color:var(--_ui5-v2-1-2_switch_track_hover_inactive_border_color)}.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked .ui5-switch-track{background:var(--_ui5-v2-1-2_switch_track_semantic_accept_background_color);border-color:var(--_ui5-v2-1-2_switch_track_semantic_accept_border_color)}.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--checked) .ui5-switch-track{background:var(--_ui5-v2-1-2_switch_track_semantic_reject_background_color);border-color:var(--_ui5-v2-1-2_switch_track_semantic_reject_border_color)}.ui5-switch--desktop.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-track{background:var(--_ui5-v2-1-2_switch_track_semantic_hover_accept_background_color);border-color:var(--_ui5-v2-1-2_switch_track_semantic_hover_accept_border_color)}.ui5-switch--desktop.ui5-switch--semantic.ui5-switch-root:not(.ui5-switch--checked):not(.ui5-switch--disabled):hover .ui5-switch-track{background:var(--_ui5-v2-1-2_switch_track_semantic_hover_reject_background_color);border-color:var(--_ui5-v2-1-2_switch_track_semantic_hover_reject_border_color)}.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-slider{transform:var(--_ui5-v2-1-2_switch_transform_with_label)}.ui5-switch-root.ui5-switch--checked .ui5-switch-slider{transform:var(--_ui5-v2-1-2_switch_transform)}.ui5-switch-text .ui5-switch-text--on .ui5-switch-no-label-icon,.ui5-switch-root.ui5-switch--semantic .ui5-switch-text,.ui5-switch-root.ui5-switch--no-label .ui5-switch-text{display:flex;justify-content:center}.ui5-switch--no-label .ui5-switch-no-label-icon-on,.ui5-switch--no-label .ui5-switch-no-label-icon-off{width:var(--_ui5-v2-1-2_switch_icon_width);height:var(--_ui5-v2-1-2_switch_icon_height);display:var(--_ui5-v2-1-2_switch_track_icon_display)}.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-on,.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-off{width:var(--_ui5-v2-1-2_switch_icon_width);height:var(--_ui5-v2-1-2_switch_icon_height)}.ui5-switch-root .ui5-switch-text{font-family:var(--_ui5-v2-1-2_switch_text_font_family);font-size:var(--_ui5-v2-1-2_switch_text_font_size);width:var(--_ui5-v2-1-2_switch_text_width)}.ui5-switch-root:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-text{font-family:var(--_ui5-v2-1-2_switch_text_with_label_font_family);font-size:var(--_ui5-v2-1-2_switch_text_with_label_font_size);width:var(--_ui5-v2-1-2_switch_text_with_label_width)}:host([active]) .ui5-switch--desktop.ui5-switch-root:not(.ui5-switch--disabled) .ui5-switch-track{background:var( --_ui5-v2-1-2-switch_track-off-active-background)}:host([active]) .ui5-switch--desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-track{background:var(--_ui5-v2-1-2-switch_track-on-active-background)}.ui5-switch--desktop.ui5-switch-root:not(.ui5-switch--disabled):hover .ui5-switch-handle{box-shadow:var(--_ui5-v2-1-2_switch_handle_off_hover_box_shadow)}.ui5-switch--desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle{box-shadow:var(--_ui5-v2-1-2_switch_handle_on_hover_box_shadow)}.ui5-switch--desktop.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--disabled):hover .ui5-switch-handle{box-shadow:var(--_ui5-v2-1-2_switch_handle_semantic_off_hover_box_shadow)}.ui5-switch--desktop.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle{box-shadow:var(--_ui5-v2-1-2_switch_handle_semantic_on_hover_box_shadow)}.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-on,.ui5-switch-root.ui5-switch--semantic .ui5-switch-text--on{color:var(--_ui5-v2-1-2_switch_text_semantic_accept_color)}.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-off,.ui5-switch-root.ui5-switch--semantic .ui5-switch-text--off{color:var(--_ui5-v2-1-2_switch_text_semantic_reject_color)}.ui5-switch-root .ui5-switch-text--on{color:var(--_ui5-v2-1-2_switch_text_active_color);overflow:var(--_ui5-v2-1-2_switch_text_overflow);text-overflow:ellipsis;inset-inline-start:var(--_ui5-v2-1-2_switch_text_active_left_alternate)}.ui5-switch-root .ui5-switch-text--off{color:var(--_ui5-v2-1-2_switch_text_inactive_color);overflow:var(--_ui5-v2-1-2_switch_text_overflow);text-overflow:ellipsis;inset-inline-start:var(--_ui5-v2-1-2_switch_text_inactive_left_alternate);inset-inline-end:var(--_ui5-v2-1-2_switch_text_inactive_right_alternate)}.ui5-switch-root.ui5-switch--safari .ui5-switch-text--on.ui5-switch-no-label-icon,.ui5-switch-root.ui5-switch--safari .ui5-switch-text--off.ui5-switch-no-label-icon{inset-inline-start:.1875rem}.ui5-switch-root .ui5-switch-no-label-icon-on,.ui5-switch-root .ui5-switch-icon-on{color:var(--_ui5-v2-1-2_switch_text_active_color)}.ui5-switch-root .ui5-switch-no-label-icon-off,.ui5-switch-root .ui5-switch-icon-off{color:var(--_ui5-v2-1-2_switch_text_inactive_color)}:dir(rtl).ui5-switch-root.ui5-switch--checked:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-slider{transform:var(--_ui5-v2-1-2_switch_rtl_transform_with_label)}:dir(rtl).ui5-switch-root.ui5-switch--checked .ui5-switch-slider{transform:var(--_ui5-v2-1-2_switch_rtl_transform)}
`};var s=function(i,e,t,u){var d=arguments.length,r=d<3?e:u===null?u=Object.getOwnPropertyDescriptor(e,t):u,_;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,u);else for(var p=i.length-1;p>=0;p--)(_=i[p])&&(r=(d<3?_(r):d>3?_(e,t,r):_(e,t))||r);return d>3&&r&&Object.defineProperty(e,t,r),r},w;let o=w=class extends S{constructor(){super(...arguments),this.design="Textual",this.checked=!1,this.disabled=!1,this.required=!1}get formValidityMessage(){return w.i18nBundle.getText(C)}get formValidity(){return{valueMissing:this.required&&!this.checked}}async formElementAnchor(){return this.getFocusDomRefAsync()}get formFormattedValue(){return this.checked?"on":null}get sapNextIcon(){return this.checked?"accept":"less"}_onclick(){this.toggle()}_onkeydown(e){m(e)&&e.preventDefault(),q(e)&&this._onclick()}_onkeyup(e){m(e)&&this._onclick()}toggle(){if(!this.disabled){this.checked=!this.checked;const e=!this.fireEvent("change",null,!0),t=!this.fireEvent("value-changed",null,!0);(e||t)&&(this.checked=!this.checked)}}get graphical(){return this.design===P.Graphical}get hasNoLabel(){return!(this.graphical||this.textOn||this.textOff)}get _textOn(){return this.graphical?"":this.textOn}get _textOff(){return this.graphical?"":this.textOff}get effectiveTabIndex(){return this.disabled?void 0:"0"}get classes(){const e=this.graphical||this.textOn||this.textOff;return{main:{"ui5-switch--desktop":T(),"ui5-switch--disabled":this.disabled,"ui5-switch--checked":this.checked,"ui5-switch--semantic":this.graphical,"ui5-switch--no-label":!e,"ui5-switch--safari":D()}}}get effectiveAriaDisabled(){return this.disabled?"true":void 0}get accessibilityOnText(){return this._textOn}get accessibilityOffText(){return this._textOff}get hiddenText(){return this.checked?this.accessibilityOnText:this.accessibilityOffText}get ariaLabelText(){return[V(this),this.hiddenText].join(" ").trim()}static async onDefine(){w.i18nBundle=await A("@ui5/webcomponents")}};s([a()],o.prototype,"design",void 0);s([a({type:Boolean})],o.prototype,"checked",void 0);s([a({type:Boolean})],o.prototype,"disabled",void 0);s([a()],o.prototype,"textOn",void 0);s([a()],o.prototype,"textOff",void 0);s([a()],o.prototype,"accessibleName",void 0);s([a()],o.prototype,"accessibleNameRef",void 0);s([a()],o.prototype,"tooltip",void 0);s([a({type:Boolean})],o.prototype,"required",void 0);s([a()],o.prototype,"name",void 0);o=w=s([y({tag:"ui5-switch",formAssociated:!0,languageAware:!0,styles:F,renderer:N,template:j,dependencies:[R]}),O("change")],o);o.define();const l=$("ui5-switch",["accessibleName","accessibleNameRef","design","name","textOff","textOn","tooltip"],["checked","disabled","required"],[],["change"]);l.displayName="Switch";try{l.displayName="Switch",l.__docgenInfo={description:`The \`Switch\` component is used for changing between binary states.

The component can display texts, that will be switched, based on the component state, via the \`textOn\` and \`textOff\` properties,
but texts longer than 3 letters will be cutted off.

However, users are able to customize the width of \`Switch\` with pure CSS (\`<Switch style="width: 200px">\`), and set widths, depending on the texts they would use.

Note: the component would not automatically stretch to fit the whole text width.

### Keyboard Handling
The state can be changed by pressing the Space and Enter keys.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Switch",props:{onChange:{defaultValue:null,description:"Fired when the component checked state changes.\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<SwitchDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Sets the accessible ARIA name of the component.\n\n**Note**: We recommend that you set an accessibleNameRef pointing to an external label or at least an `accessibleName`.\nProviding an `accessibleNameRef` or an `accessibleName` is mandatory in the cases when `textOn` and `textOff` properties aren't set.\n\n**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the component.\n\n**Note**: We recommend that you set an accessibleNameRef pointing to an external label or at least an `accessibleName`.\nProviding an `accessibleNameRef` or an `accessibleName` is mandatory in the cases when `textOn` and `textOff` properties aren't set.\n\n**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.",name:"accessibleNameRef",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"Defines if the component is checked.\n\n**Note:** The property can be changed with user interaction,\neither by cliking the component, or by pressing the `Enter` or `Space` key.",name:"checked",required:!1,type:{name:"boolean"}},design:{defaultValue:{value:'"Textual"'},description:"Defines the component design.\n\n**Note:** If `Graphical` type is set,\npositive and negative icons will replace the `textOn` and `textOff`.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Textual"'},{value:'"Graphical"'},{value:'"Textual"'},{value:'"Graphical"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.

**Note:** A disabled component is noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.

**Note:** Available since [v1.16.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.16.0) of **@ui5/webcomponents**.`,name:"name",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:`Defines whether the component is required.

**Note:** Available since [v1.16.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.16.0) of **@ui5/webcomponents**.`,name:"required",required:!1,type:{name:"boolean"}},textOff:{defaultValue:{value:"undefined"},description:`Defines the text, displayed when the component is not checked.

**Note:** We recommend using short texts, up to 3 letters (larger texts would be cut off).`,name:"textOff",required:!1,type:{name:"string"}},textOn:{defaultValue:{value:"undefined"},description:`Defines the text, displayed when the component is checked.

**Note:** We recommend using short texts, up to 3 letters (larger texts would be cut off).`,name:"textOn",required:!1,type:{name:"string"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the tooltip of the component.

**Note:** If applicable an external label reference should always be the preferred option to provide context to the \`Switch\` component over a tooltip.

**Note:** Available since [v1.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{l.displayName="Switch",l.__docgenInfo={description:`The \`Switch\` component is used for changing between binary states.

The component can display texts, that will be switched, based on the component state, via the \`textOn\` and \`textOff\` properties,
but texts longer than 3 letters will be cutted off.

However, users are able to customize the width of \`Switch\` with pure CSS (\`<Switch style="width: 200px">\`), and set widths, depending on the texts they would use.

Note: the component would not automatically stretch to fit the whole text width.

### Keyboard Handling
The state can be changed by pressing the Space and Enter keys.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Switch",props:{onChange:{defaultValue:null,description:"Fired when the component checked state changes.\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<SwitchDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Sets the accessible ARIA name of the component.\n\n**Note**: We recommend that you set an accessibleNameRef pointing to an external label or at least an `accessibleName`.\nProviding an `accessibleNameRef` or an `accessibleName` is mandatory in the cases when `textOn` and `textOff` properties aren't set.\n\n**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the component.\n\n**Note**: We recommend that you set an accessibleNameRef pointing to an external label or at least an `accessibleName`.\nProviding an `accessibleNameRef` or an `accessibleName` is mandatory in the cases when `textOn` and `textOff` properties aren't set.\n\n**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.",name:"accessibleNameRef",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"Defines if the component is checked.\n\n**Note:** The property can be changed with user interaction,\neither by cliking the component, or by pressing the `Enter` or `Space` key.",name:"checked",required:!1,type:{name:"boolean"}},design:{defaultValue:{value:'"Textual"'},description:"Defines the component design.\n\n**Note:** If `Graphical` type is set,\npositive and negative icons will replace the `textOn` and `textOff`.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Textual"'},{value:'"Graphical"'},{value:'"Textual"'},{value:'"Graphical"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.

**Note:** A disabled component is noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.

**Note:** Available since [v1.16.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.16.0) of **@ui5/webcomponents**.`,name:"name",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:`Defines whether the component is required.

**Note:** Available since [v1.16.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.16.0) of **@ui5/webcomponents**.`,name:"required",required:!1,type:{name:"boolean"}},textOff:{defaultValue:{value:"undefined"},description:`Defines the text, displayed when the component is not checked.

**Note:** We recommend using short texts, up to 3 letters (larger texts would be cut off).`,name:"textOff",required:!1,type:{name:"string"}},textOn:{defaultValue:{value:"undefined"},description:`Defines the text, displayed when the component is checked.

**Note:** We recommend using short texts, up to 3 letters (larger texts would be cut off).`,name:"textOn",required:!1,type:{name:"string"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the tooltip of the component.

**Note:** If applicable an external label reference should always be the preferred option to provide context to the \`Switch\` component over a tooltip.

**Note:** Available since [v1.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{l as S};
