import{a as v,B as k}from"./Button-ClmCy2Cm.js";import{e as S}from"./employee-BYREPEY0.js";import{b as f,j as _,p as y,d as T,s as r,m as C,k as D,S as E,w as P}from"./jsx-runtime-DJfzgo3Z.js";import{l as g}from"./event-strict-DgQLNDEV.js";import{d as z}from"./slot-_4yKMUwC.js";import{B as I,m as N,i as h,P as R,D as O,t as U,N as F,e as V,b as q,H as j,f as H}from"./Keys-Can65e7H.js";import{i as K}from"./i18n-oG4QvOAt.js";import{ag as m,ah as w,ai as L}from"./i18n-defaults-CjsTKlnu.js";import{i as M}from"./slim-arrow-down-DccHNiN2.js";import{d as $}from"./parameters-bundle.css-3_Pq1j61.js";function Y(){return f("div",{role:this._hideArrowButton?"button":"group",class:"ui5-split-button-root",tabindex:this._tabIndex,"aria-labelledby":`${this._id}-invisibleTextDefault ${this._id}}-invisibleText`,onFocusOut:this._onFocusOut,onFocusIn:this._onFocusIn,onKeyDown:this._onKeyDown,onKeyUp:this._onKeyUp,children:[_(v,{class:"ui5-split-text-button",design:this.design,icon:this.icon,endIcon:this._endIcon,tabindex:-1,disabled:this.disabled,active:this._textButtonActive,exportparts:"icon,endIcon,button",onClick:this._handleMouseClick,onTouchStart:this.handleTouchStart,onMouseDown:this.handleTouchStart,onMouseUp:this._textButtonRelease,onFocusIn:this._onInnerButtonFocusIn,onFocusOut:this._onFocusOut,children:this.isTextButton&&_("slot",{})}),!this._hideArrowButton&&_(v,{class:"ui5-split-arrow-button",design:this.design,icon:M,tabindex:-1,tooltip:this.accInfo.arrowButton.title,accessibilityAttributes:this.accInfo.arrowButton.accessibilityAttributes,disabled:this.disabled,active:this.effectiveActiveArrowButton,part:"arrowButton",onClick:this._handleArrowButtonAction,onMouseDown:this._arrowButtonPress,onMouseUp:this._arrowButtonRelease,onFocusIn:this._onInnerButtonFocusIn,onActiveStateChange:this._onArrowButtonActiveStateChange}),f("span",{id:`${this._id}-invisibleText`,class:"ui5-hidden-text",children:[this.accInfo.root.description," ",this.accInfo.root.keyboardHint," ",this.accessibleName]}),_("span",{id:`${this._id}-invisibleTextDefault`,class:"ui5-hidden-text",children:this.textButtonAccText})]})}y("@ui5/webcomponents-theming","sap_horizon",async()=>T);y("@ui5/webcomponents","sap_horizon",async()=>$);const W=`:host{vertical-align:middle}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-flex;height:var(--_ui5-v2-7-2_button_base_height);border-radius:var(--_ui5-v2-7-2_button_border_radius);background-color:var(--sapButton_Background);box-shadow:var(--_ui5-v2-7-2_split_button_host_default_box_shadow)}:host([active-arrow-button][design="Negative"]) .ui5-split-arrow-button,:host([design="Negative"]) .ui5-split-arrow-button[active]{background-color:var(--sapButton_Reject_Selected_Background);border:.0625rem solid var(--sapButton_Reject_Active_BorderColor);color:var(--sapButton_Reject_Active_TextColor)}:host([active-arrow-button][design="Positive"]) .ui5-split-arrow-button,:host([design="Positive"]) .ui5-split-arrow-button[active]{background-color:var(--sapButton_Accept_Selected_Background);border:.0625rem solid var(--sapButton_Accept_Active_BorderColor);color:var(--sapButton_Accept_Active_TextColor)}:host([active-arrow-button][design="Attention"]) .ui5-split-arrow-button,:host([design="Attention"]) .ui5-split-arrow-button[active]{background-color:var(--sapButton_Attention_Selected_Background);border:.0625rem solid var(--sapButton_Attention_Active_BorderColor);color:var(--sapButton_Attention_Active_TextColor)}:host([active-arrow-button][design="Emphasized"]) .ui5-split-arrow-button,:host([design="Emphasized"]) .ui5-split-arrow-button[active]{background-color:var(--sapButton_Emphasized_Active_Background);border:.0625rem solid var(--sapButton_Emphasized_Active_BorderColor)}:host([active-arrow-button][design="Transparent"]) .ui5-split-arrow-button,:host([active-arrow-button]) .ui5-split-arrow-button,:host([design="Transparent"]) .ui5-split-arrow-button[active],:host([design="Default"]) .ui5-split-arrow-button[active],.ui5-split-arrow-button[active],.ui5-split-arrow-button[active]:hover{background-color:var(--sapButton_Active_Background);border:.0625rem solid var(--sapButton_Lite_Active_BorderColor);color:var(--sapButton_Active_TextColor)}:host([disabled]:not([hidden])){pointer-events:none;opacity:var(--sapContent_DisabledOpacity)}:host([design="Positive"]:not([hidden])){background-color:var(--sapButton_Accept_Background);box-shadow:var(--_ui5-v2-7-2_split_button_host_positive_box_shadow)}:host([design="Negative"]:not([hidden])){background-color:var(--sapButton_Reject_Background);box-shadow:var(--_ui5-v2-7-2_split_button_host_negative_box_shadow)}:host([design="Attention"]:not([hidden])){background-color:var(--sapButton_Attention_Background);box-shadow:var(--_ui5-v2-7-2_split_button_host_attention_box_shadow)}:host([design="Emphasized"]:not([hidden])){background-color:var(--sapButton_Emphasized_Background);box-shadow:var(--_ui5-v2-7-2_split_button_host_emphasized_box_shadow)}:host([design="Transparent"]:not([hidden])){background-color:var(--sapButton_Lite_Background);box-shadow:var(--_ui5-v2-7-2_split_button_host_transparent_box_shadow)}:host([design="Transparent"][disabled]:not([hidden])){background-color:var(--_ui5-v2-7-2_split_button_transparent_disabled_background)}:host([design="Transparent"]:not([hidden]):not([disabled]):hover){background-color:var(--_ui5-v2-7-2_split_button_host_transparent_hover_background);box-shadow:var(--_ui5-v2-7-2_split_button_host_transparent_hover_box_shadow)}:host([design="Transparent"]:not([hidden]):not([disabled]):hover) .ui5-split-arrow-button:not(:hover),:host([design="Transparent"]:not([hidden]):not([disabled]):hover) .ui5-split-text-button:not(:hover){color:var(--_ui5-v2-7-2_split_button_transparent_hover_color)}:host([desktop]) .ui5-split-button-root:focus-within,.ui5-split-button-root:focus-visible{outline:0}:host([desktop]) .ui5-split-button-root:focus-within:after,.ui5-split-button-root:focus-visible:after{content:"";position:absolute;box-sizing:border-box;inset:.125rem;border:var(--_ui5-v2-7-2_split_button_focused_border);pointer-events:none;border-radius:var(--_ui5-v2-7-2_split_button_focused_border_radius)}:host([design="Emphasized"][desktop]) .ui5-split-button-root:focus-within:after,:host([design="Emphasized"]) .ui5-split-button-root:focus-visible:after{border-color:var(--sapContent_ContrastFocusColor)}:host([design="Emphasized"][desktop]) .ui5-split-button-root:focus-within .ui5-split-text-button[active]::part(button):after,:host([design="Emphasized"]) .ui5-split-button-root:focus-visible .ui5-split-text-button[active]::part(button):after{content:"";position:absolute;box-sizing:border-box;inset:.0625rem;border:var(--_ui5-v2-7-2_split_button_focused_border);border-radius:var(--_ui5-v2-7-2_split_button_focused_border_radius)}:host([design="Emphasized"][desktop]) .ui5-split-button-root:has(.ui5-split-text-button[active]):after,:host([design="Emphasized"]) .ui5-split-button-root:has(.ui5-split-text-button[active]):after{border-color:transparent}.ui5-split-button-root{display:inline-flex;position:relative;width:inherit;height:100%}.ui5-split-button-root:focus,.ui5-split-text-button:focus,.ui5-split-arrow-button:focus{outline:0}.ui5-split-text-button{border-start-end-radius:var(--sapButton_Segment_BorderCornerRadius);border-end-end-radius:var(--sapButton_Segment_BorderCornerRadius);border-width:.0625rem;border-inline-end-width:var(--_ui5-v2-7-2_split_button_text_button_right_border_width);border-color:var(--_ui5-v2-7-2_split_text_button_border_color);background-color:var(--_ui5-v2-7-2_split_text_button_background_color);vertical-align:top;flex-grow:1}.ui5-split-text-button:hover{border-start-end-radius:var(--sapButton_Segment_BorderCornerRadius);border-end-end-radius:var(--sapButton_Segment_BorderCornerRadius);background-color:var(--sapButton_Hover_Background);box-shadow:none;border:var(--_ui5-v2-7-2_split_text_button_hover_border);border-inline-end:var(--_ui5-v2-7-2_split_text_button_hover_border_right)}.ui5-split-text-button[design=Emphasized]{border:var(--_ui5-v2-7-2_split_text_button_emphasized_border);border-width:var(--_ui5-v2-7-2_split_text_button_emphasized_border_width)}.ui5-split-text-button[design=Emphasized]:hover{background-color:var(--sapButton_Emphasized_Hover_Background)}.ui5-split-text-button[design=Positive]:hover{background-color:var(--sapButton_Accept_Hover_Background);border:var(--_ui5-v2-7-2_split_text_button_positive_hover_border);border-inline-end:var(--_ui5-v2-7-2_split_text_button_positive_hover_border_right)}.ui5-split-text-button[design=Negative]:hover{background-color:var(--sapButton_Reject_Hover_Background);border:var(--_ui5-v2-7-2_split_text_button_negative_hover_border);border-inline-end:var(--_ui5-v2-7-2_split_text_button_negative_hover_border_right)}.ui5-split-text-button[design=Attention]:hover{background-color:var(--sapButton_Attention_Hover_Background);border:var(--_ui5-v2-7-2_split_text_button_attention_hover_border);border-inline-end:var(--_ui5-v2-7-2_split_text_button_attention_hover_border_right)}.ui5-split-text-button[design=Transparent]:hover{background-color:var(--_ui5-v2-7-2_split_button_transparent_hover_background);border:var(--_ui5-v2-7-2_split_text_button_transparent_hover_border);border-inline-end:var(--_ui5-v2-7-2_split_text_button_transparent_hover_border_right)}.ui5-split-text-button[active][design=Emphasized]{background-color:var(--sapButton_Selected_Background);color:var(--sapButton_Emphasized_Active_TextColor);border-color:var(--sapButton_Emphasized_Active_BorderColor)}.ui5-split-text-button[active][design=Negative]{background-color:var(--sapButton_Reject_Selected_Background);color:var(--sapButton_Reject_Active_TextColor);border-color:var(--sapButton_Reject_Active_BorderColor)}.ui5-split-text-button[active][design=Positive]{background-color:var(--sapButton_Accept_Selected_Background);color:var(--sapButton_Accept_Active_TextColor);border-color:var(--sapButton_Accept_Active_BorderColor)}.ui5-split-text-button[active][design=Attention]{background-color:var(--sapButton_Attention_Selected_Background);color:var(--sapButton_Attention_Active_TextColor);border-color:var(--sapButton_Attention_Active_BorderColor)}.ui5-split-text-button[active][design=Default],.ui5-split-text-button[active][design=Transparent]{background-color:var(--sapButton_Active_Background);color:var(--sapButton_Active_TextColor);border-color:var(--sapButton_Active_BorderColor)}.ui5-split-text-button[active]{outline:0}.ui5-split-arrow-button{border-start-start-radius:var(--sapButton_Segment_BorderCornerRadius);border-end-start-radius:var(--sapButton_Segment_BorderCornerRadius);border-color:var(--_ui5-v2-7-2_split_text_button_border_color);background-color:var(--_ui5-v2-7-2_split_text_button_background_color);position:relative;border-width:.0625rem;overflow:visible}.ui5-split-arrow-button:hover{border-start-start-radius:var(--sapButton_Segment_BorderCornerRadius);border-end-start-radius:var(--sapButton_Segment_BorderCornerRadius);background-color:var(--sapButton_Hover_Background);box-shadow:none;border:var(--_ui5-v2-7-2_split_arrow_button_hover_border)}.ui5-split-arrow-button[design=Emphasized]:hover{background-color:var(--sapButton_Emphasized_Hover_Background);border:var(--_ui5-v2-7-2_split_arrow_button_emphasized_hover_border);box-shadow:var(--_ui5-v2-7-2_split_arrow_button_emphasized_hover_box_shadow, none)}:dir(rtl).ui5-split-arrow-button[design=Emphasized]:hover{box-shadow:var(--_ui5-v2-7-2_split_arrow_button_emphasized_hover_box_shadow_rtl, none)}.ui5-split-arrow-button[design=Positive]:hover{background-color:var(--sapButton_Accept_Hover_Background);border:var(--_ui5-v2-7-2_split_arrow_button_positive_hover_border)}.ui5-split-arrow-button[design=Negative]:hover{background-color:var(--sapButton_Reject_Hover_Background);border:var(--_ui5-v2-7-2_split_arrow_button_negative_hover_border)}.ui5-split-arrow-button[design=Attention]:hover{background-color:var(--sapButton_Attention_Hover_Background);border:var(--_ui5-v2-7-2_split_arrow_button_attention_hover_border)}.ui5-split-arrow-button[design=Transparent]:hover{background-color:var(--_ui5-v2-7-2_split_button_transparent_hover_background);border:var(--_ui5-v2-7-2_split_arrow_button_transparent_hover_border)}.ui5-split-arrow-button:before{content:"";position:absolute;box-sizing:border-box;pointer-events:none;width:.0625rem;background-color:var(--sapButton_TextColor);inset-inline-start:var(--_ui5-v2-7-2_split_button_middle_separator_left);inset-block-start:var(--_ui5-v2-7-2_split_button_middle_separator_top);height:var(--_ui5-v2-7-2_split_button_middle_separator_height)}.ui5-split-arrow-button[design=Emphasized]:before{content:"";position:absolute;box-sizing:border-box;pointer-events:none;inset-inline-start:var(--_ui5-v2-7-2_split_button_middle_separator_left);inset-block-start:var(--_ui5-v2-7-2_split_button_middle_separator_top);inset-inline-end:0;height:var(--_ui5-v2-7-2_split_button_middle_separator_height);width:.0625rem}.ui5-split-text-button:hover+.ui5-split-arrow-button:before,.ui5-split-arrow-button:hover:before{display:var(--_ui5-v2-7-2_split_button_middle_separator_hover_display)}.ui5-split-arrow-button[design=Emphasized]:hover:before{display:var(--_ui5-v2-7-2_split_button_middle_separator_hover_display_emphasized)}.ui5-split-arrow-button[design=Transparent]:before{background-color:var(--sapButton_Lite_TextColor)}.ui5-split-arrow-button[design=Emphasized]:before{background-color:var(--sapButton_Emphasized_TextColor)}.ui5-split-arrow-button[design=Positive]:before{background-color:var(--sapButton_Accept_TextColor)}.ui5-split-arrow-button[design=Negative]:before{background-color:var(--sapButton_Reject_TextColor)}.ui5-split-arrow-button[design=Attention]:before{background-color:var(--_ui5-v2-7-2_split_button_attention_separator_color_default)}.ui5-split-arrow-button[desktop]::part(button):focus-within:after,.ui5-split-arrow-button::part(button):focus-visible:after{border-start-start-radius:var(--_ui5-v2-7-2_split_button_inner_focused_border_radius_inner);border-end-start-radius:var(--_ui5-v2-7-2_split_button_inner_focused_border_radius_inner)}.ui5-split-arrow-button[desktop]::part(button):focus-within:after,.ui5-split-text-button::part(button):focus-visible:after{border-start-end-radius:var(--_ui5-v2-7-2_split_button_inner_focused_border_radius_inner);border-end-end-radius:var(--_ui5-v2-7-2_split_button_inner_focused_border_radius_inner)}.ui5-split-text-button[active][design=Emphasized]{color:var(--sapButton_Emphasized_Active_TextColor);background-color:var(--sapButton_Emphasized_Active_Background)}:host([design="Emphasized"][active-arrow-button]) .ui5-split-arrow-button,.ui5-split-arrow-button[active][design=Emphasized]{background-color:var(--sapButton_Selected_Background);color:var(--sapButton_Emphasized_Active_TextColor);border:var(--_ui5-v2-7-2_split_arrow_button_emphasized_hover_border)}:host([design="Transparent"][active-arrow-button]:not([hidden]):not([disabled]):hover) .ui5-split-arrow-button{color:var(--sapButton_Active_TextColor)}:host([active-arrow-button]) .ui5-split-arrow-button{border:.0625rem solid var(--sapButton_Lite_Active_BorderColor)}:host([active-arrow-button]) .ui5-split-arrow-button:before,.ui5-split-arrow-button[active]:before,.ui5-split-text-button[active]+.ui5-split-arrow-button:before{background-color:var(--sapButton_TextColor)}:host([design="Emphasized"][active-arrow-button]) .ui5-split-arrow-button:before,:host([design="Emphasized"]) .ui5-split-arrow-button[active]:before,:host([design="Emphasized"]) .ui5-split-text-button[active]+.ui5-split-arrow-button:before{background-color:var(--_ui5-v2-7-2_split_button_emphasized_separator_color)}:host([design="Positive"][active-arrow-button]) .ui5-split-arrow-button:before,:host([design="Positive"]) .ui5-split-arrow-button[active]:before,:host([design="Positive"]) .ui5-split-text-button[active]+.ui5-split-arrow-button:before{background-color:var(--_ui5-v2-7-2_split_button_positive_separator_color)}:host([design="Negative"][active-arrow-button]) .ui5-split-arrow-button:before,:host([design="Negative"]) .ui5-split-arrow-button[active]:before,:host([design="Negative"]) .ui5-split-text-button[active]+.ui5-split-arrow-button:before{background-color:var(--_ui5-v2-7-2_split_button_negative_separator_color)}:host([design="Attention"][active-arrow-button]) .ui5-split-arrow-button:before,:host([design="Attention"]) .ui5-split-arrow-button[active]:before,:host([design="Attention"]) .ui5-split-text-button[active]+.ui5-split-arrow-button:before{background-color:var(--_ui5-v2-7-2_split_button_attention_separator_color)}
`;var o=function(s,t,n,u){var c=arguments.length,i=c<3?t:u===null?u=Object.getOwnPropertyDescriptor(t,n):u,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,t,n,u);else for(var b=s.length-1;b>=0;b--)(p=s[b])&&(i=(c<3?p(i):c>3?p(t,n,i):p(t,n))||i);return c>3&&i&&Object.defineProperty(t,n,i),i},a;let e=a=class extends E{constructor(){super(...arguments),this.activeArrowButton=!1,this.design="Default",this.disabled=!1,this._tabIndex=0,this._spacePressed=!1,this._shiftOrEscapePressed=!1,this._textButtonActive=!1,this._activeArrowButton=!1,this._hideArrowButton=!1,this._isDefaultActionPressed=!1,this._isKeyDownOperation=!1}onBeforeRendering(){this.disabled&&(this._tabIndex=-1)}_handleMouseClick(t){this._fireClick(t)}_onFocusOut(){this.disabled||this.getFocusDomRef().matches(":has(:focus-within)")||(this._shiftOrEscapePressed=!1,this._setTabIndexValue())}_onFocusIn(){this.disabled||this.getFocusDomRef().matches(":has(:focus-within)")||(this._shiftOrEscapePressed=!1)}handleTouchStart(t){t.stopPropagation(),this._textButtonActive=!0,this._tabIndex=-1}_onInnerButtonFocusIn(t){t.stopPropagation(),this._setTabIndexValue(!0),t.target.focus()}_onKeyDown(t){this._isKeyDownOperation=!0,this._isArrowKeyAction(t)?(this._handleArrowButtonAction(t),this._activeArrowButton=!0):this._isDefaultAction(t)&&(this._handleDefaultAction(t),this._isDefaultActionPressed=!0),this._spacePressed&&this._isShiftOrEscape(t)&&this._handleShiftOrEscapePressed(),this._isDefaultActionPressed&&(I(t)||N(t))&&(this._activeArrowButton=!1,this._textButtonActive=!1),this._tabIndex=-1}_onKeyUp(t){this._isKeyDownOperation=!1,this._isArrowKeyAction(t)?(t.preventDefault(),this._activeArrowButton=!1,this._textButtonActive=!1):this._isDefaultAction(t)&&(this._isDefaultActionPressed=!1,this._textButtonActive=!1,h(t)&&(t.preventDefault(),t.stopPropagation(),this._fireClick(),this._spacePressed=!1,this._textButtonActive=!1)),this._isShiftOrEscape(t)&&this._handleShiftOrEscapePressed(),this._tabIndex=-1}_fireClick(t){t==null||t.stopPropagation(),this._shiftOrEscapePressed||this.fireDecoratorEvent("click"),this._shiftOrEscapePressed=!1}_fireArrowClick(t){t==null||t.stopPropagation(),this.fireDecoratorEvent("arrow-click")}_textButtonRelease(){this._textButtonActive=!1,this._tabIndex=-1}_arrowButtonPress(t){t.stopPropagation(),this._tabIndex=-1}_arrowButtonRelease(t){t.preventDefault(),this._tabIndex=-1}_setTabIndexValue(t){this._tabIndex=this.disabled?-1:0,this._tabIndex===-1&&t&&(this._tabIndex=0)}_onArrowButtonActiveStateChange(t){this.activeArrowButton&&t.preventDefault()}_isArrowKeyAction(t){return R(t)||O(t)||U(t)||F(t)||V(t)}_isDefaultAction(t){return h(t)||q(t)}_isShiftOrEscape(t){return j(t)||H(t)}_handleArrowButtonAction(t){t.preventDefault(),this._fireArrowClick(t),h(t)&&(this._spacePressed=!0)}_handleDefaultAction(t){t.preventDefault();const n=h(t),u=t.target;if(this.arrowButton&&u===this.arrowButton)this._activeArrowButton=!0,this._fireArrowClick(),n&&(this._spacePressed=!0,this._textButtonActive=!1);else{if(this._textButtonActive=!0,n){this._spacePressed=!0;return}this._fireClick()}}_handleShiftOrEscapePressed(){this._shiftOrEscapePressed=!0,this._textButtonActive=!1,this._isKeyDownOperation=!1}get effectiveActiveArrowButton(){return this.activeArrowButton||this._activeArrowButton}get textButtonAccText(){return this.textContent}get isTextButton(){return!!this.textContent}get textButton(){var t;return(t=this.getDomRef())==null?void 0:t.querySelector(".ui5-split-text-button")}get arrowButton(){var t;return(t=this.getDomRef())==null?void 0:t.querySelector(".ui5-split-arrow-button")}get accInfo(){return{root:{description:a.i18nBundle.getText(m),keyboardHint:a.i18nBundle.getText(w)},arrowButton:{title:this.arrowButtonTooltip,accessibilityAttributes:{hasPopup:"menu",expanded:this.effectiveActiveArrowButton}}}}get arrowButtonTooltip(){return a.i18nBundle.getText(L)}get ariaLabelText(){return[a.i18nBundle.getText(m),a.i18nBundle.getText(w)].join(" ")}};o([r()],e.prototype,"icon",void 0);o([r({type:Boolean})],e.prototype,"activeArrowButton",void 0);o([r()],e.prototype,"design",void 0);o([r({type:Boolean})],e.prototype,"disabled",void 0);o([r()],e.prototype,"accessibleName",void 0);o([r({type:Number,noAttribute:!0})],e.prototype,"_tabIndex",void 0);o([r({type:Boolean,noAttribute:!0})],e.prototype,"_spacePressed",void 0);o([r({type:Boolean,noAttribute:!0})],e.prototype,"_shiftOrEscapePressed",void 0);o([r({type:Boolean,noAttribute:!0})],e.prototype,"_textButtonActive",void 0);o([r({type:Boolean,noAttribute:!0})],e.prototype,"_activeArrowButton",void 0);o([r({type:String})],e.prototype,"_endIcon",void 0);o([r({type:Boolean})],e.prototype,"_hideArrowButton",void 0);o([z({type:Node,default:!0})],e.prototype,"text",void 0);o([K("@ui5/webcomponents")],e,"i18nBundle",void 0);e=a=o([C({tag:"ui5-split-button",renderer:D,styles:W,template:Y}),g("click",{bubbles:!0}),g("arrow-click",{bubbles:!0})],e);e.define();const d=P("ui5-split-button",["accessibleName","design","icon"],["activeArrowButton","disabled"],[],["arrow-click","click"]);d.displayName="SplitButton";try{d.displayName="SplitButton",d.__docgenInfo={description:"`SplitButton` enables users to trigger actions. It is constructed of two separate actions -\ndefault action and arrow action that can be activated by clicking or tapping, or by\npressing certain keyboard keys - `Space` or `Enter` for default action,\nand `Arrow Down` or `Arrow Up` for arrow action.\n\n### Usage\n\n`SplitButton` consists two separate buttons:\n\n- for the first one (default action) you can define some `text` or an `icon`, or both.\n- the second one (arrow action) contains only `slim-arrow-down` icon.\n\nYou can choose a `design` from a set of predefined types (the same as for ui5-button) that offer\ndifferent styling to correspond to the triggered action. Both text and arrow actions have the same design.\n\nYou can set the `SplitButton` as enabled or disabled. Both parts of an enabled\n`SplitButton` can be pressed by clicking or tapping it, or by certain keys, which changes\nthe style to provide visual feedback to the user that it is pressed or hovered over with\nthe mouse cursor. A disabled `SplitButton` appears inactive and any of the two buttons\ncannot be pressed.\n\n### Keyboard Handling\n\n- `Space` or `Enter` - triggers the default action\n- `Shift` or `Escape` - if `Space` is pressed, releases the default action button without triggering the click event.\n- `Arrow Down`, `Arrow Up`, `Alt`+`Arrow Down`, `Alt`+`Arrow Up`, or `F4` - triggers the arrow action\nThere are separate events that are fired on activating of `SplitButton` parts:\n\n- `click` for the first button (default action)\n- `arrow-click` for the second button (arrow action)\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"SplitButton",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onArrowClick:{defaultValue:null,description:`Fired when the user clicks on the arrow action.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onArrowClick",required:!1,type:{name:"(event: Ui5CustomEvent<SplitButtonDomRef, never>) => void"}},onClick:{defaultValue:null,description:`Fired when the user clicks on the default action.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<SplitButtonDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},activeArrowButton:{defaultValue:{value:"false"},description:`Defines whether the arrow button should have the active state styles or not.

**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.`,name:"activeArrowButton",required:!1,type:{name:"boolean"}},design:{defaultValue:{value:'"Default"'},description:"Defines the component design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"undefined"},description:`Defines the icon to be displayed as graphical element within the component.
The SAP-icons font provides numerous options.

Example:

See all available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{d.displayName="SplitButton",d.__docgenInfo={description:"`SplitButton` enables users to trigger actions. It is constructed of two separate actions -\ndefault action and arrow action that can be activated by clicking or tapping, or by\npressing certain keyboard keys - `Space` or `Enter` for default action,\nand `Arrow Down` or `Arrow Up` for arrow action.\n\n### Usage\n\n`SplitButton` consists two separate buttons:\n\n- for the first one (default action) you can define some `text` or an `icon`, or both.\n- the second one (arrow action) contains only `slim-arrow-down` icon.\n\nYou can choose a `design` from a set of predefined types (the same as for ui5-button) that offer\ndifferent styling to correspond to the triggered action. Both text and arrow actions have the same design.\n\nYou can set the `SplitButton` as enabled or disabled. Both parts of an enabled\n`SplitButton` can be pressed by clicking or tapping it, or by certain keys, which changes\nthe style to provide visual feedback to the user that it is pressed or hovered over with\nthe mouse cursor. A disabled `SplitButton` appears inactive and any of the two buttons\ncannot be pressed.\n\n### Keyboard Handling\n\n- `Space` or `Enter` - triggers the default action\n- `Shift` or `Escape` - if `Space` is pressed, releases the default action button without triggering the click event.\n- `Arrow Down`, `Arrow Up`, `Alt`+`Arrow Down`, `Alt`+`Arrow Up`, or `F4` - triggers the arrow action\nThere are separate events that are fired on activating of `SplitButton` parts:\n\n- `click` for the first button (default action)\n- `arrow-click` for the second button (arrow action)\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"SplitButton",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onArrowClick:{defaultValue:null,description:`Fired when the user clicks on the arrow action.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onArrowClick",required:!1,type:{name:"(event: Ui5CustomEvent<SplitButtonDomRef, never>) => void"}},onClick:{defaultValue:null,description:`Fired when the user clicks on the default action.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<SplitButtonDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},activeArrowButton:{defaultValue:{value:"false"},description:`Defines whether the arrow button should have the active state styles or not.

**Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.`,name:"activeArrowButton",required:!1,type:{name:"boolean"}},design:{defaultValue:{value:'"Default"'},description:"Defines the component design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"undefined"},description:`Defines the icon to be displayed as graphical element within the component.
The SAP-icons font provides numerous options.

Example:

See all available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const G={title:"Inputs / SplitButton",component:d,argTypes:{children:{control:{type:"text"}}},args:{design:k.Default,icon:S,children:"SplitButton"},tags:["package:@ui5/webcomponents"]},l={};var B,x,A;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:"{}",...(A=(x=l.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};const J=["Default"],ut=Object.freeze(Object.defineProperty({__proto__:null,Default:l,__namedExportsOrder:J,default:G},Symbol.toStringTag,{value:"Module"}));export{ut as C,l as D};
