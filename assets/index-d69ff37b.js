import{_ as b}from"./iframe-838ff653.js";import{a as m,U as g,d as y}from"./UI5Element-d1d93200.js";import{e as l,l as r,a as w,b as x,p as c,c as T,d as C,w as k}from"./withWebComponent-d280b5c2.js";import{s as v}from"./slot-76e48863.js";import{e as $}from"./Icon-c8fd92f0.js";import{b as D,c as _}from"./Icons-efeb15d5.js";import{h as A}from"./Device-208919c6.js";import{I as R}from"./Integer-f7f172c9.js";import{o as I}from"./class-map-6d48ebd3.js";import{as as E,at as N,y as S}from"./i18n-defaults-254d6b69.js";const F=(e,t,a)=>l`<div id="${r(e._id)}--header" class="${I(e.classes.root)}" role="group" aria-roledescription="${r(e.ariaRoleDescription)}" @click="${e._click}" @keydown="${e._keydown}" @keyup="${e._keyup}" part="root"><div class="ui5-card-header-focusable-element" aria-labelledby="${r(e.ariaLabelledBy)}" role="${r(e.ariaRoleFocusableElement)}" data-sap-focus-ref tabindex="0">${e.hasAvatar?H(e):void 0}<div class="ui5-card-header-text"><div class="ui5-card-header-first-line">${e.titleText?L(e):void 0}${e.status?O(e):void 0}</div>${e.subtitleText?V(e):void 0}</div></div>${e.hasAction?P(e):void 0}</div></div>`,H=(e,t,a)=>l`<div id="${r(e._id)}-avatar" class="ui5-card-header-avatar" aria-label="${r(e.ariaCardAvatarLabel)}"><slot name="avatar"></slot></div>`,L=(e,t,a)=>l`<div id="${r(e._id)}-title" class="ui5-card-header-title" part="title" role="heading" aria-level="3">${r(e.titleText)}</div>`,O=(e,t,a)=>l`<div class="ui5-card-header-status"><span id="${r(e._id)}-status" part="status" dir="auto">${r(e.status)}</span></div>`,V=(e,t,a)=>l`<div id="${r(e._id)}-subtitle" class="ui5-card-header-subtitle" part="subtitle">${r(e.subtitleText)}</div>`,P=(e,t,a)=>l`<div class="ui5-card-header-action" @focusin="${e._actionsFocusin}" @focusout="${e._actionsFocusout}"><slot name="action"></slot></div>`;m("@ui5/webcomponents-theming","sap_fiori_3",async()=>w);m("@ui5/webcomponents","sap_fiori_3",async()=>x);const q={packageName:"@ui5/webcomponents",fileName:"themes/CardHeader.css.ts",content:'.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}.ui5-card-header{position:relative;display:flex;align-items:center;padding:var(--_ui5_card_header_padding);outline:none}:host([subtitleText]) .ui5-card-header{align-items:flex-start}.ui5-card-header.ui5-card-header-ff:not(.ui5-card-header-hide-focus):focus-within:before{outline:none;content:"";position:absolute;border:var(--_ui5_card_header_focus_border);pointer-events:none;top:var(--_ui5_card_header_focus_offset);left:var(--_ui5_card_header_focus_offset);right:var(--_ui5_card_header_focus_offset);bottom:var(--_ui5_card_header_focus_offset);border-top-left-radius:var(--_ui5_card_header_focus_radius);border-top-right-radius:var(--_ui5_card_header_focus_radius);border-bottom-left-radius:var(--_ui5_card_header_focus_bottom_radius);border-bottom-right-radius:var(--_ui5_card_header_focus_bottom_radius)}.ui5-card-header:not(.ui5-card-header-ff):not(.ui5-card-header-hide-focus):has(.ui5-card-header-focusable-element:focus-visible):before{outline:none;content:"";position:absolute;border:var(--_ui5_card_header_focus_border);pointer-events:none;top:var(--_ui5_card_header_focus_offset);left:var(--_ui5_card_header_focus_offset);right:var(--_ui5_card_header_focus_offset);bottom:var(--_ui5_card_header_focus_offset);border-top-left-radius:var(--_ui5_card_header_focus_radius);border-top-right-radius:var(--_ui5_card_header_focus_radius);border-bottom-left-radius:var(--_ui5_card_header_focus_bottom_radius);border-bottom-right-radius:var(--_ui5_card_header_focus_bottom_radius)}.ui5-card-header-focusable-element{outline:none}.ui5-card-header-focusable-element{display:inherit;align-items:inherit;flex:1}.ui5-card-header.ui5-card-header--interactive:hover{cursor:pointer;background:var(--_ui5_card_header_hover_bg)}.ui5-card-header.ui5-card-header--active,.ui5-card-header.ui5-card-header--interactive:active{background:var(--_ui5_card_header_active_bg)}.ui5-card-header .ui5-card-header-text{flex:1;pointer-events:none}.ui5-card-header-first-line{display:flex;flex-flow:row;justify-content:space-between}.ui5-card-header-status{flex:none}.ui5-card-header .ui5-card-header-avatar{height:3rem;width:3rem;display:flex;align-items:center;justify-content:center;margin-inline-end:.75rem;pointer-events:none;align-self:flex-start}::slotted([ui5-icon]){width:1.5rem;height:1.5rem;color:var(--sapTile_IconColor)}::slotted(img[slot=avatar]){width:100%;height:100%;border-radius:50%}.ui5-card-header .ui5-card-header-status{display:inline-block;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSmallSize);color:var(--sapTile_TextColor);text-align:left;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;vertical-align:middle;margin-inline-start:1rem;margin-block-start:.125rem}.ui5-card-header .ui5-card-header-text .ui5-card-header-title{font-family:var(--_ui5_card_header_title_font_family);font-size:var(--_ui5_card_header_title_font_size);font-weight:var(--_ui5_card_header_title_font_weight);color:var(--sapTile_TitleTextColor);max-height:3.5rem;align-self:flex-end}.ui5-card-header .ui5-card-header-text .ui5-card-header-subtitle{font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;color:var(--sapTile_TextColor);margin-top:var(--_ui5_card_header_subtitle_margin_top);max-height:2.1rem}.ui5-card-header .ui5-card-header-text .ui5-card-header-subtitle,.ui5-card-header .ui5-card-header-text .ui5-card-header-title{text-align:start;text-overflow:ellipsis;white-space:normal;word-wrap:break-word;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;max-width:100%}.ui5-card-header .ui5-card-header-text .ui5-card-header-title{-webkit-line-clamp:3}.ui5-card-header-action{display:flex;padding-inline-start:1rem;align-self:flex-start}'};var o=globalThis&&globalThis.__decorate||function(e,t,a,n){var u=arguments.length,s=u<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,a):n,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,a,n);else for(var p=e.length-1;p>=0;p--)(h=e[p])&&(s=(u<3?h(s):u>3?h(t,a,s):h(t,a))||s);return u>3&&s&&Object.defineProperty(t,a,s),s},d;let i=d=class extends g{get classes(){return{root:{"ui5-card-header":!0,"ui5-card-header--interactive":this.interactive,"ui5-card-header--active":this.interactive&&this._headerActive,"ui5-card-header-ff":A()}}}get _root(){return this.shadowRoot.querySelector(".ui5-card-header")}get ariaRoleDescription(){return this.interactive?d.i18nBundle.getText(E):d.i18nBundle.getText(N)}get ariaRoleFocusableElement(){return this.interactive?"button":null}get ariaCardAvatarLabel(){return d.i18nBundle.getText(S)}get ariaLabelledBy(){const t=[];return this.titleText&&t.push(`${this._id}-title`),this.subtitleText&&t.push(`${this._id}-subtitle`),this.status&&t.push(`${this._id}-status`),this.hasAvatar&&t.push(`${this._id}-avatar`),t.length!==0?t.join(" "):void 0}get hasAvatar(){return!!this.avatar.length}get hasAction(){return!!this.action.length}static async onDefine(){d.i18nBundle=await y("@ui5/webcomponents")}_actionsFocusin(){this._root.classList.add("ui5-card-header-hide-focus")}_actionsFocusout(){this._root.classList.remove("ui5-card-header-hide-focus")}_click(t){t.stopImmediatePropagation(),this.interactive&&this._root.contains(t.target)&&this.fireEvent("click")}_keydown(t){if(!this.interactive||!this._root.contains(t.target))return;const a=D(t),n=_(t);if(this._headerActive=a||n,a){this.fireEvent("click");return}n&&t.preventDefault()}_keyup(t){if(!this.interactive||!this._root.contains(t.target))return;const a=_(t);this._headerActive=!1,a&&this.fireEvent("click")}};o([c()],i.prototype,"titleText",void 0);o([c()],i.prototype,"subtitleText",void 0);o([c()],i.prototype,"status",void 0);o([c({type:Boolean})],i.prototype,"interactive",void 0);o([c({validator:R,defaultValue:3})],i.prototype,"_ariaLevel",void 0);o([c({type:Boolean,noAttribute:!0})],i.prototype,"_headerActive",void 0);o([v()],i.prototype,"avatar",void 0);o([v()],i.prototype,"action",void 0);i=d=o([T({tag:"ui5-card-header",languageAware:!0,renderer:C,template:F,styles:q}),$("click")],i);i.define();const U=i,B=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"})),f=k("ui5-card-header",["status","subtitleText","titleText"],["interactive"],["action","avatar"],["click"],()=>b(()=>Promise.resolve().then(()=>B),void 0,import.meta.url));f.displayName="CardHeader";try{f.displayName="CardHeader",f.__docgenInfo={description:'The `CardHeader` is a component, meant to be used as a header of the `Card` component. It displays valuable information, that can be defined with several properties, such as: `titleText`, `subtitleText`, `status` and two slots: `avatar` and `action`.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Card" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"CardHeader",props:{action:{defaultValue:null,description:`Defines an action, displayed in the right most part of the header.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="action"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).`,name:"action",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},avatar:{defaultValue:null,description:`Defines an avatar image, displayed in the left most part of the header.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="avatar"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).`,name:"avatar",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onClick:{defaultValue:null,description:"Fired when the component is activated by mouse/tap or by using the Enter or Space key.\n\n**Note:** The event would be fired only if the `interactive` property is set to true.",name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<CardHeaderDomRef, never>) => void"}},interactive:{defaultValue:null,description:"Defines if the component would be interactive, e.g gets hover effect, gets focus outline and `onClick` event is fired, when pressed.",name:"interactive",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"Defines the status text.",name:"status",required:!1,type:{name:"string"}},subtitleText:{defaultValue:null,description:"Defines the subtitle text.",name:"subtitleText",required:!1,type:{name:"string"}},titleText:{defaultValue:null,description:"Defines the title text.",name:"titleText",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{f as C};
//# sourceMappingURL=index-d69ff37b.js.map
