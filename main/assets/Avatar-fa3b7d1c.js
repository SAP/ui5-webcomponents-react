import{a as z,U as S,d as L}from"./UI5Element-427ec721.js";import{e as n,l as s,f as g,s as w,a as $,p as i,c as I,b as X}from"./withWebComponent-e4481254.js";import{s as k}from"./slot-634e3e91.js";import{e as P}from"./event-97133b94.js";import{b as T,c as y}from"./Keys-3acbae73.js";import{y as B}from"./i18n-defaults-6bc67b6a.js";import{I as H}from"./Icon-459702a7.js";import"./employee-98ce1b38.js";var m;(function(a){a.Accent1="Accent1",a.Accent2="Accent2",a.Accent3="Accent3",a.Accent4="Accent4",a.Accent5="Accent5",a.Accent6="Accent6",a.Accent7="Accent7",a.Accent8="Accent8",a.Accent9="Accent9",a.Accent10="Accent10",a.Placeholder="Placeholder"})(m||(m={}));const v=m;var b;(function(a){a.Circle="Circle",a.Square="Square"})(b||(b={}));const A=b;var f;(function(a){a.XS="XS",a.S="S",a.M="M",a.L="L",a.XL="XL"})(f||(f={}));const _=f,M=(a,t,e)=>n`<div class="ui5-avatar-root" tabindex="${s(a.tabindex)}" data-sap-focus-ref @keyup=${a._onkeyup} @keydown=${a._onkeydown} @focusout=${a._onfocusout} @focusin=${a._onfocusin} @click=${a._onclick} role="${s(a._role)}" aria-haspopup="${s(a._ariaHasPopup)}">${a.hasImage?q():E(a,t,e)}<slot name="badge"></slot></div>`,q=(a,t,e)=>n`<slot></slot>`,E=(a,t,e)=>n`${a.icon?N(a,t,e):R(a)}`,N=(a,t,e)=>e?n`<${g("ui5-icon",t,e)} class="ui5-avatar-icon" name="${s(a.icon)}" accessible-name="${s(a.accessibleNameText)}"></${g("ui5-icon",t,e)}>`:n`<ui5-icon class="ui5-avatar-icon" name="${s(a.icon)}" accessible-name="${s(a.accessibleNameText)}"></ui5-icon>`,R=(a,t,e)=>n`${a.initials?V(a):void 0}`,V=(a,t,e)=>n`<span class="ui5-avatar-initials">${s(a.validInitials)}</span>`;z("@ui5/webcomponents-theming","sap_fiori_3",async()=>w);z("@ui5/webcomponents","sap_fiori_3",async()=>$);const j={packageName:"@ui5/webcomponents",fileName:"themes/Avatar.css.ts",content:':host(:not([hidden])){display:inline-block;box-sizing:border-box;position:relative}:host(:not([hidden]).ui5_hovered){opacity:.7}:host([focused]){outline:var(--_ui5_avatar_outline);outline-offset:var(--_ui5_avatar_focus_offset)}:host([interactive]){cursor:pointer}:host{height:3rem;width:3rem;border-radius:50%;border:var(--ui5-avatar-initials-border);outline:none;color:var(--ui5-avatar-initials-color)}.ui5-avatar-root{display:flex;align-items:center;justify-content:center;outline:none;height:100%;width:100%}:host([_size=XS]),:host([size=XS]){height:2rem;width:2rem;min-height:2rem;min-width:2rem;font-size:var(--_ui5_avatar_fontsize_XS)}:host([_size=S]),:host([size=S]){min-height:3rem;min-width:3rem;font-size:var(--_ui5_avatar_fontsize_S)}:host([_size=M]),:host([size=M]){min-height:4rem;min-width:4rem;font-size:var(--_ui5_avatar_fontsize_M)}:host([_size=L]),:host([size=L]){min-height:5rem;min-width:5rem;font-size:var(--_ui5_avatar_fontsize_L)}:host([_size=XL]),:host([size=XL]){min-height:7rem;min-width:7rem;font-size:var(--_ui5_avatar_fontsize_XL)}:host .ui5-avatar-icon{height:var(--_ui5_avatar_fontsize_S);width:var(--_ui5_avatar_fontsize_S);color:inherit}:host([_size=XS]) .ui5-avatar-icon,:host([size=XS]) .ui5-avatar-icon{height:var(--_ui5_avatar_icon_XS);width:var(--_ui5_avatar_icon_XS)}:host([_size=S]) .ui5-avatar-icon,:host([size=S]) .ui5-avatar-icon{height:var(--_ui5_avatar_icon_S);width:var(--_ui5_avatar_icon_S)}:host([_size=M]) .ui5-avatar-icon,:host([size=M]) .ui5-avatar-icon{height:var(--_ui5_avatar_icon_M);width:var(--_ui5_avatar_icon_M)}:host([_size=L]) .ui5-avatar-icon,:host([size=L]) .ui5-avatar-icon{height:var(--_ui5_avatar_icon_L);width:var(--_ui5_avatar_icon_L)}:host([_size=XL]) .ui5-avatar-icon,:host([size=XL]) .ui5-avatar-icon{height:var(--_ui5_avatar_icon_XL);width:var(--_ui5_avatar_icon_XL)}::slotted(*){border-radius:50%;width:100%;height:100%;pointer-events:none}:host([shape=Square]){border-radius:var(--ui5-avatar-border-radius)}:host([shape=Square]) ::slotted(*){border-radius:calc(var(--ui5-avatar-border-radius) - var(--ui5-avatar-border-radius-img-deduction))}:host(:not([_has-image])),:host(:not([color-scheme])),:host([_color-scheme=Accent6]),:host([ui5-avatar][color-scheme=Accent6]){background-color:var(--ui5-avatar-accent6);color:var(--ui5-avatar-accent6-color);border-color:var(--ui5-avatar-accent6-border-color)}:host([_color-scheme=Accent1]),:host([ui5-avatar][color-scheme=Accent1]){background-color:var(--ui5-avatar-accent1);color:var(--ui5-avatar-accent1-color);border-color:var(--ui5-avatar-accent1-border-color)}:host([_color-scheme=Accent2]),:host([ui5-avatar][color-scheme=Accent2]){background-color:var(--ui5-avatar-accent2);color:var(--ui5-avatar-accent2-color);border-color:var(--ui5-avatar-accent2-border-color)}:host([_color-scheme=Accent3]),:host([ui5-avatar][color-scheme=Accent3]){background-color:var(--ui5-avatar-accent3);color:var(--ui5-avatar-accent3-color);border-color:var(--ui5-avatar-accent3-border-color)}:host([_color-scheme=Accent4]),:host([ui5-avatar][color-scheme=Accent4]){background-color:var(--ui5-avatar-accent4);color:var(--ui5-avatar-accent4-color);border-color:var(--ui5-avatar-accent4-border-color)}:host([_color-scheme=Accent5]),:host([ui5-avatar][color-scheme=Accent5]){background-color:var(--ui5-avatar-accent5);color:var(--ui5-avatar-accent5-color);border-color:var(--ui5-avatar-accent5-border-color)}:host([_color-scheme=Accent7]),:host([ui5-avatar][color-scheme=Accent7]){background-color:var(--ui5-avatar-accent7);color:var(--ui5-avatar-accent7-color);border-color:var(--ui5-avatar-accent7-border-color)}:host([_color-scheme=Accent8]),:host([ui5-avatar][color-scheme=Accent8]){background-color:var(--ui5-avatar-accent8);color:var(--ui5-avatar-accent8-color);border-color:var(--ui5-avatar-accent8-border-color)}:host([_color-scheme=Accent9]),:host([ui5-avatar][color-scheme=Accent9]){background-color:var(--ui5-avatar-accent9);color:var(--ui5-avatar-accent9-color);border-color:var(--ui5-avatar-accent9-border-color)}:host([_color-scheme=Accent10]),:host([ui5-avatar][color-scheme=Accent10]){background-color:var(--ui5-avatar-accent10);color:var(--ui5-avatar-accent10-color);border-color:var(--ui5-avatar-accent10-border-color)}:host([_color-scheme=Placeholder]),:host([ui5-avatar][color-scheme=Placeholder]){background-color:var(--ui5-avatar-placeholder);color:var(--ui5-avatar-placeholder-color);border-color:var(--ui5-avatar-placeholder-border-color)}:host([_has-image]){background-color:transparent;vertical-align:middle}.ui5-avatar-initials{color:inherit}::slotted([slot=badge]){position:absolute;bottom:0;right:0;width:1.125rem;height:1.125rem;background:var(--sapButton_Emphasized_Background);border:var(--sapButton_Emphasized_Background);border-radius:1rem;color:var(--sapContent_BadgeTextColor);justify-content:center;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSmallSize)}::slotted([ui5-badge][slot=badge]){padding:.1875rem}:host([_size=L]) ::slotted([slot=badge]),:host([size=L]) ::slotted([slot=badge]){width:1.25rem;height:1.25rem}:host([_size=XL]) ::slotted([slot=badge]),:host([size=XL]) ::slotted([slot=badge]){padding:.375rem;width:1.75rem;height:1.75rem}:host([shape=Square]) ::slotted([slot=badge]){bottom:-.125rem;right:-.125rem}:host([_size=L][shape=Square]) ::slotted([slot=badge]),:host([size=L][shape=Square]) ::slotted([slot=badge]){bottom:-.1875rem;right:-.1875rem}:host([_size=XL][shape=Square]) ::slotted([slot=badge]),:host([size=XL][shape=Square]) ::slotted([slot=badge]){bottom:-.25rem;right:-.25rem}'};var r=globalThis&&globalThis.__decorate||function(a,t,e,l){var u=arguments.length,c=u<3?t:l===null?l=Object.getOwnPropertyDescriptor(t,e):l,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(a,t,e,l);else for(var p=a.length-1;p>=0;p--)(h=a[p])&&(c=(u<3?h(c):u>3?h(t,e,c):h(t,e))||c);return u>3&&c&&Object.defineProperty(t,e,c),c},d;let o=d=class extends S{static async onDefine(){d.i18nBundle=await L("@ui5/webcomponents")}get tabindex(){return this._tabIndex||(this.interactive?"0":"-1")}get _effectiveSize(){return this.getAttribute("size")||this._size}get _effectiveBackgroundColor(){return this.getAttribute("color-scheme")||this._colorScheme}get _role(){return this.interactive?"button":void 0}get _ariaHasPopup(){return this._getAriaHasPopup()}get validInitials(){const t=/^[a-zA-Zà-üÀ-Ü]{1,3}$/;return this.initials&&t.test(this.initials)?this.initials:null}get accessibleNameText(){return this.accessibleName?this.accessibleName:d.i18nBundle.getText(B)||void 0}get hasImage(){return this._hasImage=!!this.image.length,this._hasImage}onBeforeRendering(){this._onclick=this.interactive?this._onClickHandler.bind(this):void 0}onAfterRendering(){this._checkInitials()}_setFallbackIcon(){return this.icon=this.icon||"employee",this.icon}_checkInitials(){const t=this.getDomRef(),e=t.querySelector(".ui5-avatar-initials");return this.validInitials||this._setFallbackIcon(),this.initials&&this.initials.length===3&&e&&e.scrollWidth>=t.scrollWidth&&this._setFallbackIcon(),this.icon}_onClickHandler(t){t.stopPropagation(),this.fireEvent("click")}_onkeydown(t){this.interactive&&(T(t)&&this.fireEvent("click"),y(t)&&t.preventDefault())}_onkeyup(t){this.interactive&&!t.shiftKey&&y(t)&&this.fireEvent("click")}_onfocusout(){this.focused=!1}_onfocusin(){this.interactive&&(this.focused=!0)}_getAriaHasPopup(){if(!(!this.interactive||this.ariaHaspopup===""))return this.ariaHaspopup}};r([i({type:Boolean})],o.prototype,"interactive",void 0);r([i({type:Boolean})],o.prototype,"focused",void 0);r([i()],o.prototype,"icon",void 0);r([i()],o.prototype,"initials",void 0);r([i({type:A,defaultValue:A.Circle})],o.prototype,"shape",void 0);r([i({type:_,defaultValue:_.S})],o.prototype,"size",void 0);r([i({type:_,defaultValue:_.S})],o.prototype,"_size",void 0);r([i({type:v,defaultValue:v.Accent6})],o.prototype,"colorScheme",void 0);r([i({type:v,defaultValue:v.Accent6})],o.prototype,"_colorScheme",void 0);r([i()],o.prototype,"accessibleName",void 0);r([i()],o.prototype,"ariaHaspopup",void 0);r([i({noAttribute:!0})],o.prototype,"_tabIndex",void 0);r([i({type:Boolean})],o.prototype,"_hasImage",void 0);r([k({type:HTMLElement,default:!0})],o.prototype,"image",void 0);r([k()],o.prototype,"badge",void 0);o=d=r([I({tag:"ui5-avatar",languageAware:!0,renderer:X,styles:j,template:M,dependencies:[H]}),P("click")],o);o.define();const D=o,J=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"}));export{D as A,_ as a,v as b,A as c,J as d};
//# sourceMappingURL=Avatar-fa3b7d1c.js.map
