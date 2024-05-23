import{U as w}from"./UI5Element-C8JZhjZA.js";import{a as s,l as c,b as u,s as S,p as r,c as L,d as $}from"./withWebComponent-CpdHtqwM.js";import{s as A}from"./slot-Df15G--e.js";import{e as B}from"./event-CegLCnR0.js";import{b as X}from"./i18nBundle-DoewWk5r.js";import{R as k}from"./ResizeHandler-DFUfYtDU.js";import{r as I,e as R}from"./Boot-CehKKsjw.js";import{m as D,n as z}from"./Keys-BgUkNma0.js";import{d as x}from"./useIsomorphicLayoutEffect-puIvDQED.js";import{g as C}from"./i18n-defaults-cA9sdirt.js";import{s as P}from"./parameters-bundle.css-CG8awnKl.js";import{I as T}from"./Icon-BXh46edA.js";import"./employee-BTeWQfSq.js";import"./alert-B59OKHU0.js";var b;(function(t){t.Accent1="Accent1",t.Accent2="Accent2",t.Accent3="Accent3",t.Accent4="Accent4",t.Accent5="Accent5",t.Accent6="Accent6",t.Accent7="Accent7",t.Accent8="Accent8",t.Accent9="Accent9",t.Accent10="Accent10",t.Placeholder="Placeholder"})(b||(b={}));const _=b;var f;(function(t){t.Circle="Circle",t.Square="Square"})(f||(f={}));const y=f;var g;(function(t){t.XS="XS",t.S="S",t.M="M",t.L="L",t.XL="XL"})(g||(g={}));const p=g;function M(t,a,e){return s`<div class="ui5-avatar-root" tabindex="${c(this.tabindex)}" data-sap-focus-ref @keyup=${this._onkeyup} @keydown=${this._onkeydown} @click=${this._onclick} role="${c(this._role)}" aria-haspopup="${c(this._ariaHasPopup)}" aria-label="${c(this.accessibleNameText)}" fallback-icon="${c(this._fallbackIcon)}">${this.hasImage?q.call(this,t,a,e):H.call(this,t,a,e)}<slot name="badge"></slot></div>`}function q(t,a,e){return s`<slot></slot>`}function H(t,a,e){return s`${this.icon?E.call(this,t,a,e):void 0}${this.initials?O.call(this,t,a,e):void 0}`}function E(t,a,e){return e?s`<${u("ui5-icon",a,e)} class="ui5-avatar-icon" name="${c(this.icon)}"></${u("ui5-icon",a,e)}>`:s`<ui5-icon class="ui5-avatar-icon" name="${c(this.icon)}"></ui5-icon>`}function O(t,a,e){return e?s`<span class="ui5-avatar-initials ui5-avatar-initials-hidden">${c(this.validInitials)}</span><${u("ui5-icon",a,e)} class="ui5-avatar-icon ui5-avatar-icon-fallback ui5-avatar-fallback-icon-hidden" name="${c(this.fallbackIcon)}"></${u("ui5-icon",a,e)}>`:s`<span class="ui5-avatar-initials ui5-avatar-initials-hidden">${c(this.validInitials)}</span><ui5-icon class="ui5-avatar-icon ui5-avatar-icon-fallback ui5-avatar-fallback-icon-hidden" name="${c(this.fallbackIcon)}"></ui5-icon>`}I("@ui5/webcomponents-theming","sap_horizon",async()=>S);I("@ui5/webcomponents","sap_horizon",async()=>P);const F={packageName:"@ui5/webcomponents",fileName:"themes/Avatar.css.ts",content:`:host(:not([hidden])){display:inline-block;box-sizing:border-box;position:relative;font-family:"72override",var(--sapFontFamily)}:host(:not([hidden]).ui5_hovered){opacity:.7}:host([interactive]:not([disabled])){cursor:pointer}:host([interactive]:not([hidden]):active){background-color:var(--sapButton_Active_Background);border-color:var(--sapButton_Active_BorderColor);color:var(--sapButton_Active_TextColor)}:host([interactive]:not([hidden]):not([disabled]):not(:active):hover){box-shadow:var(--ui5-v1-24-2-avatar-hover-box-shadow-offset)}:host([interactive][desktop]:not([hidden])) .ui5-avatar-root:focus-within,:host([interactive]:not([hidden])) .ui5-avatar-root:focus-visible{outline:var(--_ui5-v1-24-2_avatar_outline);outline-offset:var(--_ui5-v1-24-2_avatar_focus_offset)}:host([disabled]){opacity:var(--sapContent_DisabledOpacity)}:host{height:3rem;width:3rem;border-radius:50%;border:var(--ui5-v1-24-2-avatar-initials-border);outline:none;color:var(--ui5-v1-24-2-avatar-initials-color)}.ui5-avatar-root{display:flex;align-items:center;justify-content:center;outline:none;height:100%;width:100%;border-radius:inherit}:host([_size="XS"]),:host([size="XS"]){height:2rem;width:2rem;min-height:2rem;min-width:2rem;font-size:var(--_ui5-v1-24-2_avatar_fontsize_XS)}:host(:not([size])),:host([_size="S"]),:host([size="S"]){min-height:3rem;min-width:3rem;font-size:var(--_ui5-v1-24-2_avatar_fontsize_S)}:host([_size="M"]),:host([size="M"]){min-height:4rem;min-width:4rem;font-size:var(--_ui5-v1-24-2_avatar_fontsize_M)}:host([_size="L"]),:host([size="L"]){min-height:5rem;min-width:5rem;font-size:var(--_ui5-v1-24-2_avatar_fontsize_L)}:host([_size="XL"]),:host([size="XL"]){min-height:7rem;min-width:7rem;font-size:var(--_ui5-v1-24-2_avatar_fontsize_XL)}:host .ui5-avatar-icon{height:var(--_ui5-v1-24-2_avatar_fontsize_S);width:var(--_ui5-v1-24-2_avatar_fontsize_S);color:inherit}:host([_size="XS"]) .ui5-avatar-icon,:host([size="XS"]) .ui5-avatar-icon{height:var(--_ui5-v1-24-2_avatar_icon_XS);width:var(--_ui5-v1-24-2_avatar_icon_XS)}:host([_size="S"]) .ui5-avatar-icon,:host([size="S"]) .ui5-avatar-icon{height:var(--_ui5-v1-24-2_avatar_icon_S);width:var(--_ui5-v1-24-2_avatar_icon_S)}:host([_size="M"]) .ui5-avatar-icon,:host([size="M"]) .ui5-avatar-icon{height:var(--_ui5-v1-24-2_avatar_icon_M);width:var(--_ui5-v1-24-2_avatar_icon_M)}:host([_size="L"]) .ui5-avatar-icon,:host([size="L"]) .ui5-avatar-icon{height:var(--_ui5-v1-24-2_avatar_icon_L);width:var(--_ui5-v1-24-2_avatar_icon_L)}:host([_size="XL"]) .ui5-avatar-icon,:host([size="XL"]) .ui5-avatar-icon{height:var(--_ui5-v1-24-2_avatar_icon_XL);width:var(--_ui5-v1-24-2_avatar_icon_XL)}::slotted(*){border-radius:50%;width:100%;height:100%;pointer-events:none}:host([shape="Square"]){border-radius:var(--ui5-v1-24-2-avatar-border-radius)}:host([shape="Square"]) ::slotted(*){border-radius:calc(var(--ui5-v1-24-2-avatar-border-radius) - var(--ui5-v1-24-2-avatar-border-radius-img-deduction))}:host(:not([color-scheme])),:host(:not([_has-image])),:host([_color-scheme="Accent6"]),:host([ui5-avatar][color-scheme="Accent6"]){background-color:var(--ui5-v1-24-2-avatar-accent6);color:var(--ui5-v1-24-2-avatar-accent6-color);border-color:var(--ui5-v1-24-2-avatar-accent6-border-color)}:host([_color-scheme="Accent1"]),:host([ui5-avatar][color-scheme="Accent1"]){background-color:var(--ui5-v1-24-2-avatar-accent1);color:var(--ui5-v1-24-2-avatar-accent1-color);border-color:var(--ui5-v1-24-2-avatar-accent1-border-color)}:host([_color-scheme="Accent2"]),:host([ui5-avatar][color-scheme="Accent2"]){background-color:var(--ui5-v1-24-2-avatar-accent2);color:var(--ui5-v1-24-2-avatar-accent2-color);border-color:var(--ui5-v1-24-2-avatar-accent2-border-color)}:host([_color-scheme="Accent3"]),:host([ui5-avatar][color-scheme="Accent3"]){background-color:var(--ui5-v1-24-2-avatar-accent3);color:var(--ui5-v1-24-2-avatar-accent3-color);border-color:var(--ui5-v1-24-2-avatar-accent3-border-color)}:host([_color-scheme="Accent4"]),:host([ui5-avatar][color-scheme="Accent4"]){background-color:var(--ui5-v1-24-2-avatar-accent4);color:var(--ui5-v1-24-2-avatar-accent4-color);border-color:var(--ui5-v1-24-2-avatar-accent4-border-color)}:host([_color-scheme="Accent5"]),:host([ui5-avatar][color-scheme="Accent5"]){background-color:var(--ui5-v1-24-2-avatar-accent5);color:var(--ui5-v1-24-2-avatar-accent5-color);border-color:var(--ui5-v1-24-2-avatar-accent5-border-color)}:host([_color-scheme="Accent7"]),:host([ui5-avatar][color-scheme="Accent7"]){background-color:var(--ui5-v1-24-2-avatar-accent7);color:var(--ui5-v1-24-2-avatar-accent7-color);border-color:var(--ui5-v1-24-2-avatar-accent7-border-color)}:host([_color-scheme="Accent8"]),:host([ui5-avatar][color-scheme="Accent8"]){background-color:var(--ui5-v1-24-2-avatar-accent8);color:var(--ui5-v1-24-2-avatar-accent8-color);border-color:var(--ui5-v1-24-2-avatar-accent8-border-color)}:host([_color-scheme="Accent9"]),:host([ui5-avatar][color-scheme="Accent9"]){background-color:var(--ui5-v1-24-2-avatar-accent9);color:var(--ui5-v1-24-2-avatar-accent9-color);border-color:var(--ui5-v1-24-2-avatar-accent9-border-color)}:host([_color-scheme="Accent10"]),:host([ui5-avatar][color-scheme="Accent10"]){background-color:var(--ui5-v1-24-2-avatar-accent10);color:var(--ui5-v1-24-2-avatar-accent10-color);border-color:var(--ui5-v1-24-2-avatar-accent10-border-color)}:host([_color-scheme="Placeholder"]),:host([ui5-avatar][color-scheme="Placeholder"]){background-color:var(--ui5-v1-24-2-avatar-placeholder);color:var(--ui5-v1-24-2-avatar-placeholder-color);border-color:var(--ui5-v1-24-2-avatar-placeholder-border-color)}:host([_has-image]){color:var(--ui5-v1-24-2-avatar-accent10-color);background-color:transparent;vertical-align:middle}.ui5-avatar-initials{color:inherit}.ui5-avatar-icon~.ui5-avatar-initials,.ui5-avatar-icon~.ui5-avatar-icon-fallback{display:none}.ui5-avatar-fallback-icon-hidden{display:none}.ui5-avatar-initials-hidden{position:absolute;visibility:hidden;z-index:0;pointer-events:none}::slotted([slot="badge"]){position:absolute;bottom:0;right:0;width:1.125rem;height:1.125rem;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSmallSize);color:var(--sapBackgroundColor);--_ui5-v1-24-2-badge-height: 1.125rem;--_ui5-v1-24-2-badge-border-radius: 50%;--ui5-v1-24-2-badge-color-scheme-1-background: var(--sapButton_Emphasized_Background);--ui5-v1-24-2-badge-color-scheme-1-color: var(--sapButton_Emphasized_TextColor);--ui5-v1-24-2-badge-color-scheme-1-border: var(--sapButton_Emphasized_BorderColor)}:host([_size="L"]) ::slotted([slot="badge"]),:host([size="L"]) ::slotted([slot="badge"]){width:1.25rem;height:1.25rem;--_ui5-v1-24-2-badge-height: 1.25rem;--_ui5-v1-24-2-badge-icon-width: .875rem}:host([_size="XL"]) ::slotted([slot="badge"]),:host([size="XL"]) ::slotted([slot="badge"]){width:1.75rem;height:1.75rem;--_ui5-v1-24-2-badge-height: 1.75rem;--_ui5-v1-24-2-badge-icon-width: 1rem}:host([shape="Square"]) ::slotted([slot="badge"]){bottom:-.125rem;right:-.125rem}:host([_size="L"][shape="Square"]) ::slotted([slot="badge"]),:host([size="L"][shape="Square"]) ::slotted([slot="badge"]){bottom:-.1875rem;right:-.1875rem}:host([_size="XL"][shape="Square"]) ::slotted([slot="badge"]),:host([size="XL"][shape="Square"]) ::slotted([slot="badge"]){bottom:-.25rem;right:-.25rem}
`};var o=function(t,a,e,l){var v=arguments.length,n=v<3?a:l===null?l=Object.getOwnPropertyDescriptor(a,e):l,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,a,e,l);else for(var m=t.length-1;m>=0;m--)(h=t[m])&&(n=(v<3?h(n):v>3?h(a,e,n):h(a,e))||n);return v>3&&n&&Object.defineProperty(a,e,n),n},d;let i=d=class extends w{constructor(){super(),this._handleResizeBound=this.handleResize.bind(this)}static async onDefine(){d.i18nBundle=await X("@ui5/webcomponents")}get tabindex(){return this.forcedTabIndex||(this._interactive?"0":"-1")}get effectiveSize(){return this.getAttribute("size")||this._size}get еffectiveBackgroundColor(){return this.getAttribute("color-scheme")||this._colorScheme}get _role(){return this._interactive?"button":"img"}get _ariaHasPopup(){return this._getAriaHasPopup()}get _fallbackIcon(){return this.fallbackIcon===""&&(this.fallbackIcon="employee"),this.fallbackIcon}get _interactive(){return this.interactive&&!this.disabled}get validInitials(){const a=/^[a-zA-Zà-üÀ-Ü]{1,3}$/;return this.initials&&a.test(this.initials)?this.initials:null}get accessibleNameText(){return this.accessibleName?this.accessibleName:d.i18nBundle.getText(C)||void 0}get hasImage(){return this._hasImage=!!this.image.length,this._hasImage}get initialsContainer(){return this.getDomRef().querySelector(".ui5-avatar-initials")}get fallBackIconDomRef(){return this.getDomRef().querySelector(".ui5-avatar-icon-fallback")}onBeforeRendering(){this._onclick=this._interactive?this._onClickHandler.bind(this):void 0}async onAfterRendering(){await R(),this.initials&&!this.icon&&this._checkInitials()}onEnterDOM(){x()&&this.setAttribute("desktop",""),this.initialsContainer&&k.register(this.initialsContainer,this._handleResizeBound)}onExitDOM(){this.initialsContainer&&k.deregister(this.initialsContainer,this._handleResizeBound)}handleResize(){this.initials&&!this.icon&&this._checkInitials()}_checkInitials(){const a=this.getDomRef(),e=a.querySelector(".ui5-avatar-initials");if(this.validInitials&&e&&e.scrollWidth<=a.scrollWidth){this.showInitials();return}this.showFallbackIcon()}showFallbackIcon(){var a,e;(a=this.initialsContainer)==null||a.classList.add("ui5-avatar-initials-hidden"),(e=this.fallBackIconDomRef)==null||e.classList.remove("ui5-avatar-fallback-icon-hidden")}showInitials(){var a,e;(a=this.initialsContainer)==null||a.classList.remove("ui5-avatar-initials-hidden"),(e=this.fallBackIconDomRef)==null||e.classList.add("ui5-avatar-fallback-icon-hidden")}_onClickHandler(a){a.stopPropagation(),this._fireClick()}_onkeydown(a){this._interactive&&(D(a)&&this._fireClick(),z(a)&&a.preventDefault())}_onkeyup(a){this._interactive&&!a.shiftKey&&z(a)&&this._fireClick()}_fireClick(){this.fireEvent("click")}_getAriaHasPopup(){if(!(!this._interactive||this.ariaHaspopup===""))return this.ariaHaspopup}};o([r({type:Boolean})],i.prototype,"disabled",void 0);o([r({type:Boolean})],i.prototype,"interactive",void 0);o([r()],i.prototype,"icon",void 0);o([r()],i.prototype,"fallbackIcon",void 0);o([r()],i.prototype,"initials",void 0);o([r({type:y,defaultValue:y.Circle})],i.prototype,"shape",void 0);o([r({type:p,defaultValue:p.S})],i.prototype,"size",void 0);o([r({type:p,defaultValue:p.S})],i.prototype,"_size",void 0);o([r({type:_,defaultValue:_.Accent6})],i.prototype,"colorScheme",void 0);o([r({type:_,defaultValue:_.Accent6})],i.prototype,"_colorScheme",void 0);o([r()],i.prototype,"accessibleName",void 0);o([r()],i.prototype,"ariaHaspopup",void 0);o([r({noAttribute:!0})],i.prototype,"forcedTabIndex",void 0);o([r({type:Boolean})],i.prototype,"_hasImage",void 0);o([A({type:HTMLElement,default:!0})],i.prototype,"image",void 0);o([A()],i.prototype,"badge",void 0);i=d=o([L({tag:"ui5-avatar",languageAware:!0,renderer:$,styles:F,template:M,dependencies:[T]}),B("click")],i);i.define();const V=i,ra=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"}));export{_ as A,y as a,p as b,V as c,ra as d};
