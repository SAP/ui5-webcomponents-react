import{M as P,C as N,f as O,a as V}from"./chunk-PCJTTTQV-4214c194.js";import{_ as F}from"./iframe-7855b054.js";import{a as E,U as R,d as U}from"./UI5Element-427ec721.js";import{e as w,l as o,s as h,a as j,b as q,p as a,c as z,d as H,w as M}from"./withWebComponent-65cd39a0.js";import{e as y}from"./Icon-7987c836.js";import{s as K}from"./slot-634e3e91.js";import{o as B,n as $,S as k,R as x,Y as T,c as v,b as g,d as L,a5 as W}from"./Icons-fe6e657a.js";import{g as A}from"./MarkedEvents-b83081e9.js";import"./slim-arrow-down-cfb4a4bd.js";import{a as c,B as Y}from"./Button-bc3a11a1.js";import{bj as I,bk as D}from"./i18n-defaults-254d6b69.js";import"./employee-1bc983a2.js";import{d as X}from"./DomRefTable.module-31af32a5.js";import{D as G}from"./DocsHeader-d8de7dbe.js";import{F as J}from"./Footer-83a8b958.js";import{j as s,a as Q,F as Z}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u as S}from"./index-4fb8b842.js";import"./react-18-ecd79c7b.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"../sb-preview/runtime.mjs";import"./CustomElementsScopeUtils-137da8c8.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-43a261ec.js";import"./Device-208919c6.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./index-a21e505a.js";import"./decline-6bd98a2e.js";import"./i18n-defaults-80781f7e.js";import"./information-b6c8ed8e.js";import"./class-map-95320e87.js";import"./index-b4aa831c.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-8cd1aada.js";import"./TableOfContent-b3b9e751.js";import"./index-142fc752.js";import"./Link-018547e8.js";import"./WrappingType-b81e595a.js";import"./index-0c37a587.js";import"./Label-ccc234fe.js";import"./index-4ba71e2d.js";import"./Popover-224d761a.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-9873a291.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-1da6d0d2.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-cae0a379.js";const tt=(t,e,i)=>i?w`<div class="ui5-split-button-root" role="group" tabindex=${o(t._tabIndex)} aria-labelledby="${o(t._id)}-invisibleTextDefault ${o(t._id)}-invisibleText" @focusout=${t._onFocusOut} @focusin=${t._onFocusIn} @keydown=${t._onKeyDown} @keyup=${t._onKeyUp}><${h("ui5-button",e,i)} class="ui5-split-text-button" design="${o(t.design)}" dir=${o(t.effectiveDir)} icon="${o(t._textButtonIcon)}" tabindex="-1" ?disabled="${t.disabled}" ?active="${t._textButtonActive}" @click="${t._fireClick}" @touchstart=${t._textButtonPress} @mousedown=${t._textButtonPress} @mouseup=${t._textButtonRelease} @focusin=${t._setTabIndexValue} @focusout=${t._onFocusOut}><slot></slot></${h("ui5-button",e,i)}><div class="ui5-split-arrow-button-wrapper" dir=${o(t.effectiveDir)}><${h("ui5-button",e,i)} class="ui5-split-arrow-button" design="${o(t.design)}" icon="slim-arrow-down" tabindex="-1" ?disabled="${t.disabled}" ?active="${t._arrowButtonActive}" aria-expanded="${o(t.accessibilityInfo.ariaExpanded)}" aria-haspopup="${o(t.accessibilityInfo.ariaHaspopup)}" @click="${t._fireArrowClick}" @focusin=${t._setTabIndexValue} @focusout=${t._onFocusOut}></${h("ui5-button",e,i)}></div><span id="${o(t._id)}-invisibleText" class="ui5-hidden-text">${o(t.accessibilityInfo.description)}${o(t.accessibilityInfo.keyboardHint)}${o(t.accessibleName)}</span><span id="${o(t._id)}-invisibleTextDefault" class="ui5-hidden-text">${o(t.textButtonAccText)}</span></div>`:w`<div class="ui5-split-button-root" role="group" tabindex=${o(t._tabIndex)} aria-labelledby="${o(t._id)}-invisibleTextDefault ${o(t._id)}-invisibleText" @focusout=${t._onFocusOut} @focusin=${t._onFocusIn} @keydown=${t._onKeyDown} @keyup=${t._onKeyUp}><ui5-button class="ui5-split-text-button" design="${o(t.design)}" dir=${o(t.effectiveDir)} icon="${o(t._textButtonIcon)}" tabindex="-1" ?disabled="${t.disabled}" ?active="${t._textButtonActive}" @click="${t._fireClick}" @touchstart=${t._textButtonPress} @mousedown=${t._textButtonPress} @mouseup=${t._textButtonRelease} @focusin=${t._setTabIndexValue} @focusout=${t._onFocusOut}><slot></slot></ui5-button><div class="ui5-split-arrow-button-wrapper" dir=${o(t.effectiveDir)}><ui5-button class="ui5-split-arrow-button" design="${o(t.design)}" icon="slim-arrow-down" tabindex="-1" ?disabled="${t.disabled}" ?active="${t._arrowButtonActive}" aria-expanded="${o(t.accessibilityInfo.ariaExpanded)}" aria-haspopup="${o(t.accessibilityInfo.ariaHaspopup)}" @click="${t._fireArrowClick}" @focusin=${t._setTabIndexValue} @focusout=${t._onFocusOut}></ui5-button></div><span id="${o(t._id)}-invisibleText" class="ui5-hidden-text">${o(t.accessibilityInfo.description)}${o(t.accessibilityInfo.keyboardHint)}${o(t.accessibleName)}</span><span id="${o(t._id)}-invisibleTextDefault" class="ui5-hidden-text">${o(t.textButtonAccText)}</span></div>`;E("@ui5/webcomponents-theming","sap_fiori_3",async()=>j);E("@ui5/webcomponents","sap_fiori_3",async()=>q);const et={packageName:"@ui5/webcomponents",fileName:"themes/SplitButton.css.ts",content:'.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block;height:100%;border-radius:var(--_ui5_button_border_radius);background-color:var(--sapButton_Background)}:host([design=Positive]:not([hidden])){background-color:var(--sapButton_Accept_Background)}:host([design=Negative]:not([hidden])){background-color:var(--sapButton_Reject_Background)}:host([design=Attention]:not([hidden])){background-color:var(--sapButton_Attention_Background)}:host([design=Emphasized]:not([hidden])){background-color:var(--sapButton_Emphasized_Background)}:host([design=Transparent]:not([hidden])){background-color:transparent}:host([design=Transparent][disabled]:not([hidden])){background-color:var(--_ui5_split_button_transparent_disabled_background)}:host([design=Transparent]:not([hidden]):not([disabled]):hover){background-color:var(--_ui5_split_button_transparent_hover_background)}:host([design=Transparent]:not([hidden]):not([disabled]):hover) .ui5-split-arrow-button:not(:hover),:host([design=Transparent]:not([hidden]):not([disabled]):hover) .ui5-split-text-button:not(:hover){color:var(--_ui5_split_button_transparent_hover_color)}:host([focused]) .ui5-split-button-root{outline:0}:host([focused]) .ui5-split-button-root:after{content:"";position:absolute;box-sizing:border-box;left:.125rem;top:.125rem;right:.125rem;bottom:.125rem;border:var(--_ui5_split_button_focused_border);pointer-events:none;border-radius:var(--_ui5_split_button_focused_border_radius)}:host([design=Emphasized][focused]) .ui5-split-button-root:after{border-color:var(--sapContent_ContrastFocusColor)}.ui5-split-button-root{display:inline-block;position:relative;width:inherit}.ui5-split-text-button{border-top-right-radius:var(--_ui5_split_button_hover_border_radius);border-bottom-right-radius:var(--_ui5_split_button_hover_border_radius);border-right-width:var(--_ui5_split_button_text_button_right_border_width);margin-right:var(--_ui5_split_button_text_button_width);vertical-align:top;width:inherit}.ui5-split-text-button:hover{border-top-right-radius:var(--_ui5_split_button_hover_border_radius);border-bottom-right-radius:var(--_ui5_split_button_hover_border_radius)}.ui5-split-text-button[active]{outline:0}.ui5-split-arrow-button-wrapper{position:absolute;top:0;right:0}.ui5-split-arrow-button{border-top-left-radius:var(--_ui5_split_button_hover_border_radius);border-bottom-left-radius:var(--_ui5_split_button_hover_border_radius);width:2.25rem}.ui5-split-text-button[dir=rtl]:hover{border-top-left-radius:var(--_ui5_split_button_hover_border_radius);border-bottom-left-radius:var(--_ui5_split_button_hover_border_radius)}[dir=rtl] .ui5-split-arrow-button:hover{border-top-right-radius:var(--_ui5_split_button_hover_border_radius);border-bottom-right-radius:var(--_ui5_split_button_hover_border_radius)}.ui5-split-arrow-button:hover{border-top-left-radius:var(--_ui5_split_button_hover_border_radius);border-bottom-left-radius:var(--_ui5_split_button_hover_border_radius)}.ui5-split-arrow-button:before{content:"";position:absolute;box-sizing:border-box;pointer-events:none;left:var(--_ui5_split_button_middle_separator_left);top:var(--_ui5_split_button_middle_separator_top);right:0;height:var(--_ui5_split_button_middle_separator_height);border:0 solid var(--sapButton_TextColor);border-left-width:.0625rem}[dir=rtl] .ui5-split-arrow-button:before{content:"";position:absolute;box-sizing:border-box;pointer-events:none;right:var(--_ui5_split_button_middle_separator_left);top:var(--_ui5_split_button_middle_separator_top);left:0;height:var(--_ui5_split_button_middle_separator_height);border:0 solid var(--sapButton_TextColor);border-right-width:.0625rem;border-left-width:0}.ui5-split-arrow-button:hover:before,.ui5-split-text-button:hover+.ui5-split-arrow-button-wrapper>.ui5-split-arrow-button:before{display:var(--_ui5_split_button_middle_separator_hover_display)}.ui5-split-arrow-button[design=Transparent]:before{border-color:var(--sapButton_Lite_TextColor)}.ui5-split-arrow-button[design=Emphasized]:before{border-color:var(--sapButton_Emphasized_TextColor)}.ui5-split-arrow-button[design=Positive]:before{border-color:var(--sapButton_Accept_TextColor)}.ui5-split-arrow-button[design=Negative]:before{border-color:var(--sapButton_Reject_TextColor)}.ui5-split-arrow-button[design=Attention]:before{border-color:var(--_ui5_split_button_attention_separator_color)}.ui5-split-text-button[dir=rtl]{border-radius:0 var(--_ui5_button_border_radius) var(--_ui5_button_border_radius) 0;border-width:1px 1px 1px 0;margin-right:0;margin-left:var(--_ui5_split_button_text_button_width)}.ui5-split-arrow-button-wrapper[dir=rtl]{left:0;right:auto}[dir=rtl] .ui5-split-arrow-button{border-radius:var(--_ui5_button_border_radius) 0 0 var(--_ui5_button_border_radius)}.ui5-split-arrow-button[focused]::part(button):after{border-top-left-radius:var(--_ui5_split_button_inner_focused_border_radius_inner);border-bottom-left-radius:var(--_ui5_split_button_inner_focused_border_radius_inner)}.ui5-split-text-button[focused]::part(button):after{border-top-right-radius:var(--_ui5_split_button_inner_focused_border_radius_inner);border-bottom-right-radius:var(--_ui5_split_button_inner_focused_border_radius_inner)}[dir=rtl] .ui5-split-arrow-button[focused]::part(button):after{border-top-left-radius:var(--_ui5_split_button_inner_focused_border_radius_outer);border-bottom-left-radius:var(--_ui5_split_button_inner_focused_border_radius_outer);border-top-right-radius:var(--_ui5_split_button_inner_focused_border_radius_inner);border-bottom-right-radius:var(--_ui5_split_button_inner_focused_border_radius_inner)}.ui5-split-text-button[dir=rtl][focused]::part(button):after{border-top-left-radius:var(--_ui5_split_button_inner_focused_border_radius_inner);border-bottom-left-radius:var(--_ui5_split_button_inner_focused_border_radius_inner);border-top-right-radius:var(--_ui5_split_button_inner_focused_border_radius_outer);border-bottom-right-radius:var(--_ui5_split_button_inner_focused_border_radius_outer)}'};var n=globalThis&&globalThis.__decorate||function(t,e,i,u){var _=arguments.length,d=_<3?e:u===null?u=Object.getOwnPropertyDescriptor(e,i):u,b;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")d=Reflect.decorate(t,e,i,u);else for(var m=t.length-1;m>=0;m--)(b=t[m])&&(d=(_<3?b(d):_>3?b(e,i,d):b(e,i))||d);return _>3&&d&&Object.defineProperty(e,i,d),d},p;let r=p=class extends R{static async onDefine(){p.i18nBundle=await U("@ui5/webcomponents")}constructor(){super();const e=()=>{this._textButtonActive=!0,this.focused=!1,this._setTabIndexValue()};this._textButtonPress={handleEvent:e,passive:!0}}onBeforeRendering(){this._textButtonIcon=this.textButton&&this.activeIcon!==""&&this._textButtonActive&&!this._shiftOrEscapePressed?this.activeIcon:this.icon,this.disabled&&(this._tabIndex="-1")}_onFocusOut(e){this.disabled||A(e)||(this._shiftOrEscapePressed=!1,this.focused=!1,this._setTabIndexValue())}_onFocusIn(e){this.disabled||A(e)||(this._shiftOrEscapePressed=!1,this.focused=!0)}_onKeyDown(e){B(e)||$(e)||k(e)||x(e)||T(e)?(e.preventDefault(),this._arrowButtonActive=!0,this._fireArrowClick()):(v(e)||g(e))&&(e.preventDefault(),this._textButtonActive=!0,g(e)?this._fireClick():this._spacePressed=!0),this._spacePressed&&(L(e)||W(e))&&(this._shiftOrEscapePressed=!0,this._textButtonActive=!1),this._setTabIndexValue()}_onKeyUp(e){B(e)||$(e)||k(e)||x(e)||T(e)?this._arrowButtonActive=!1:(v(e)||g(e))&&(this._textButtonActive=!1,v(e)&&(e.preventDefault(),e.stopPropagation(),this._fireClick(),this._spacePressed=!1)),this._setTabIndexValue()}_fireClick(e){e==null||e.stopPropagation(),this._shiftOrEscapePressed||this.fireEvent("click"),this._shiftOrEscapePressed=!1}_fireArrowClick(e){e==null||e.stopPropagation(),this.fireEvent("arrow-click")}_textButtonRelease(){this._textButtonActive=!1,this._textButtonIcon=this.textButton&&this.activeIcon!==""&&this._textButtonActive&&!this._shiftOrEscapePressed?this.activeIcon:this.icon,this._setTabIndexValue()}_setTabIndexValue(){const e=this.textButton,i=this.arrowButton,u=e&&(e.focused||e.active)||i&&(i.focused||i.active);this._tabIndex=this.disabled||u?"-1":"0"}get textButtonAccText(){return this.textContent}get textButton(){var e;return(e=this.getDomRef())==null?void 0:e.querySelector(".ui5-split-text-button")}get arrowButton(){var e;return(e=this.getDomRef())==null?void 0:e.querySelector(".ui5-split-arrow-button")}get accessibilityInfo(){return{ariaExpanded:this._splitButtonAccInfo&&this._splitButtonAccInfo.ariaExpanded,ariaHaspopup:this._splitButtonAccInfo&&this._splitButtonAccInfo.ariaHaspopup,description:p.i18nBundle.getText(I),keyboardHint:p.i18nBundle.getText(D)}}get ariaLabelText(){return[p.i18nBundle.getText(I),p.i18nBundle.getText(D)].join(" ")}};n([a()],r.prototype,"icon",void 0);n([a()],r.prototype,"activeIcon",void 0);n([a({type:c,defaultValue:c.Default})],r.prototype,"design",void 0);n([a({type:Boolean})],r.prototype,"disabled",void 0);n([a({defaultValue:void 0})],r.prototype,"accessibleName",void 0);n([a({type:Boolean})],r.prototype,"focused",void 0);n([a({type:Object})],r.prototype,"_splitButtonAccInfo",void 0);n([a({defaultValue:"0",noAttribute:!0})],r.prototype,"_tabIndex",void 0);n([a({type:Boolean,noAttribute:!0})],r.prototype,"_spacePressed",void 0);n([a({type:Boolean,noAttribute:!0})],r.prototype,"_shiftOrEscapePressed",void 0);n([a({type:Boolean,noAttribute:!0})],r.prototype,"_textButtonActive",void 0);n([a({noAttribute:!0})],r.prototype,"_textButtonIcon",void 0);n([a({type:Boolean,noAttribute:!0})],r.prototype,"_arrowButtonActive",void 0);n([K({type:Node,default:!0})],r.prototype,"text",void 0);r=p=n([z({tag:"ui5-split-button",renderer:H,styles:et,template:tt,dependencies:[Y]}),y("click"),y("arrow-click")],r);r.define();const ot=r,it=Object.freeze(Object.defineProperty({__proto__:null,default:ot},Symbol.toStringTag,{value:"Module"})),l=M("ui5-split-button",["accessibleName","activeIcon","design","icon"],["disabled"],[],["arrow-click","click"],()=>F(()=>Promise.resolve().then(()=>it),void 0,import.meta.url));l.displayName="SplitButton";l.defaultProps={design:c.Default};try{l.displayName="SplitButton",l.__docgenInfo={description:'`SplitButton` enables users to trigger actions. It is constructed of two separate actions - default action and arrow action that can be activated by clicking or tapping, or by pressing certain keyboard keys - `Space` or `Enter` for default action, and `Arrow Down` or `Arrow Up` for arrow action.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/SplitButton" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"SplitButton",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onArrowClick:{defaultValue:null,description:"Fired when the user clicks on the arrow action.",name:"onArrowClick",required:!1,type:{name:"(event: Ui5CustomEvent<SplitButtonDomRef, never>) => void"}},onClick:{defaultValue:null,description:"Fired when the user clicks on the default action.",name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<SplitButtonDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},activeIcon:{defaultValue:null,description:"Defines the icon to be displayed in active state as graphical element within the component.",name:"activeIcon",required:!1,type:{name:"string"}},design:{defaultValue:{value:"ButtonDesign.Default"},description:"Defines the component design.\n\n**The available values are:**\n\n*   `Default`\n*   `Emphasized`\n*   `Positive`\n*   `Negative`\n*   `Transparent`\n*   `Attention`",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},disabled:{defaultValue:null,description:"Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.`,name:"icon",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const rt="## Usage\n\n`SplitButton` consists two separate buttons:\n\n*   for the first one (default action) you can define some `text` or an `icon`, or both. Also, it is possible to define different icon for active state of this button - `activeIcon`.\n*   the second one (arrow action) contains only `slim-arrow-down` icon.\n\nYou can choose a `design` from a set of predefined types (the same as for Button) that offer different styling to correspond to the triggered action. Both text and arrow actions have the same design.  \n  \nYou can set the `SplitButton` as enabled or disabled. Both parts of an enabled `SplitButton` can be pressed by clicking or tapping it, or by certain keys, which changes the style to provide visual feedback to the user that it is pressed or hovered over with the mouse cursor. A disabled `SplitButton` appears inactive and any of the two buttons cannot be pressed.\n\n## Keyboard Handling\n\n*   `Space` or `Enter` - triggers the default action\n*   `Shift` or `Escape` - if `Space` is pressed, releases the default action button without triggering the click event.\n*   `Arrow Down`, `Arrow Up`, `Alt`+`Arrow Down`, `Alt`+`Arrow Up`, or `F4` - triggers the arrow action There are separate events that are fired on activating of `SplitButton` parts:\n    *   `onClick` for the first button (default action)\n    *   `onArrowClick` for the second button (arrow action)";function nt(t={}){const{wrapper:e}=Object.assign({},S(),t.components);return e?s(e,{...t,children:s(i,{})}):i();function i(){const u=Object.assign({h2:"h2"},S(),t.components);return Q(Z,{children:[s(P,{title:"Inputs / SplitButton",component:l,argTypes:{children:{control:{type:"text"}}},args:{design:c.Default,icon:"employee",children:"SplitButton"}}),`
`,s(G,{since:"0.21.0"}),`
`,s("br",{}),`
`,s(u.h2,{children:"Example"}),`
`,s(N,{children:s(O,{name:"Default",children:_=>s(l,{..._})})}),`
`,s(u.h2,{children:"Properties"}),`
`,s(X,{story:"Default"}),`
`,s(V,{children:rt}),`
`,s(J,{})]})}}const C=t=>s(l,{...t});C.storyName="Default";C.parameters={storySource:{source:`args => {
  return <SplitButton {...args} />;
}`}};const f={title:"Inputs / SplitButton",component:l,args:{design:c.Default,icon:"employee",children:"SplitButton"},argTypes:{children:{control:{type:"text"}}},tags:["stories-mdx"],includeStories:["defaultStory"]};f.parameters=f.parameters||{};f.parameters.docs={...f.parameters.docs||{},page:nt};const ve=["defaultStory"];export{ve as __namedExportsOrder,f as default,C as defaultStory};
//# sourceMappingURL=SplitButton.stories-bf957a0d.js.map
