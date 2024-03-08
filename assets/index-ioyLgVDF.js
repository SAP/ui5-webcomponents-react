import{_ as b}from"./iframe-WacV7gDs.js";import{U as g}from"./UI5Element-9EXj3atz.js";import{a as l,l as i,s as y,p as c,c as w,f as x,w as T}from"./withWebComponent-LTFbYRvs.js";import{s as m}from"./slot-HSrR9XJ-.js";import{e as k}from"./event-lM5HanI-.js";import{b as C}from"./i18nBundle-j8vDD4VY.js";import{m as $,n as _}from"./Keys-ZEuNsqmZ.js";import{r as v,o as A}from"./Boot-vTaFuwdG.js";import{I as D}from"./Integer-kog98579.js";import{o as E}from"./class-map-gjOVarQw.js";import{A as R,f as S,g as I}from"./i18n-defaults-X1FTyPSK.js";import{s as H}from"./parameters-bundle.css-EKzfhWK3.js";function N(a,e,t){return l`<div id="${i(this._id)}--header" class="${E(this.classes.root)}" role="group" aria-roledescription="${i(this.ariaRoleDescription)}" @click="${this._click}" @keydown="${this._keydown}" @keyup="${this._keyup}" part="root"><div class="ui5-card-header-focusable-element" aria-labelledby="${i(this.ariaLabelledBy)}" role="${i(this.ariaRoleFocusableElement)}" data-sap-focus-ref tabindex="0">${this.hasAvatar?L.call(this,a,e,t):void 0}<div class="ui5-card-header-text"><div class="ui5-card-header-first-line">${this.titleText?F.call(this,a,e,t):void 0}${this.status?z.call(this,a,e,t):void 0}</div>${this.subtitleText?O.call(this,a,e,t):void 0}</div></div>${this.hasAction?V.call(this,a,e,t):void 0}</div></div>`}function L(a,e,t){return l`<div id="${i(this._id)}-avatar" class="ui5-card-header-avatar" aria-label="${i(this.ariaCardAvatarLabel)}"><slot name="avatar"></slot></div>`}function F(a,e,t){return l`<div id="${i(this._id)}-title" class="ui5-card-header-title" part="title" role="heading" aria-level="3">${i(this.titleText)}</div>`}function z(a,e,t){return l`<div class="ui5-card-header-status"><span id="${i(this._id)}-status" part="status" dir="auto">${i(this.status)}</span></div>`}function O(a,e,t){return l`<div id="${i(this._id)}-subtitle" class="ui5-card-header-subtitle" part="subtitle">${i(this.subtitleText)}</div>`}function V(a,e,t){return l`<div class="ui5-card-header-action" @focusin="${this._actionsFocusin}" @focusout="${this._actionsFocusout}"><slot name="action"></slot></div>`}v("@ui5/webcomponents-theming","sap_horizon",async()=>y);v("@ui5/webcomponents","sap_horizon",async()=>H);const P={packageName:"@ui5/webcomponents",fileName:"themes/CardHeader.css.ts",content:`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}.ui5-card-header{position:relative;display:flex;align-items:center;padding:var(--_ui5-v1-23-1_card_header_padding);outline:none}:host([subtitleText]) .ui5-card-header{align-items:flex-start}.ui5-card-header.ui5-card-header-ff:not(.ui5-card-header-hide-focus):focus-within:before{outline:none;content:"";position:absolute;border:var(--_ui5-v1-23-1_card_header_focus_border);pointer-events:none;top:var(--_ui5-v1-23-1_card_header_focus_offset);left:var(--_ui5-v1-23-1_card_header_focus_offset);right:var(--_ui5-v1-23-1_card_header_focus_offset);bottom:var(--_ui5-v1-23-1_card_header_focus_offset);border-top-left-radius:var(--_ui5-v1-23-1_card_header_focus_radius);border-top-right-radius:var(--_ui5-v1-23-1_card_header_focus_radius);border-bottom-left-radius:var(--_ui5-v1-23-1_card_header_focus_bottom_radius);border-bottom-right-radius:var(--_ui5-v1-23-1_card_header_focus_bottom_radius)}.ui5-card-header:not(.ui5-card-header-ff):not(.ui5-card-header-hide-focus):has(.ui5-card-header-focusable-element:focus):before{outline:none;content:"";position:absolute;border:var(--_ui5-v1-23-1_card_header_focus_border);pointer-events:none;top:var(--_ui5-v1-23-1_card_header_focus_offset);left:var(--_ui5-v1-23-1_card_header_focus_offset);right:var(--_ui5-v1-23-1_card_header_focus_offset);bottom:var(--_ui5-v1-23-1_card_header_focus_offset);border-top-left-radius:var(--_ui5-v1-23-1_card_header_focus_radius);border-top-right-radius:var(--_ui5-v1-23-1_card_header_focus_radius);border-bottom-left-radius:var(--_ui5-v1-23-1_card_header_focus_bottom_radius);border-bottom-right-radius:var(--_ui5-v1-23-1_card_header_focus_bottom_radius)}.ui5-card-header-focusable-element{outline:none}.ui5-card-header-focusable-element{display:inherit;align-items:inherit;flex:1;min-width:0}.ui5-card-header.ui5-card-header--interactive:hover{cursor:pointer;background:var(--_ui5-v1-23-1_card_header_hover_bg)}.ui5-card-header.ui5-card-header--active,.ui5-card-header.ui5-card-header--interactive:active{background:var(--_ui5-v1-23-1_card_header_active_bg)}.ui5-card-header .ui5-card-header-text{flex:1;min-width:0;pointer-events:none}.ui5-card-header-first-line{display:flex;flex-flow:row;justify-content:space-between}.ui5-card-header-status{flex:none}.ui5-card-header .ui5-card-header-avatar{height:3rem;width:3rem;display:flex;align-items:center;justify-content:center;margin-inline-end:.75rem;pointer-events:none;align-self:flex-start}::slotted([ui5-icon]){width:1.5rem;height:1.5rem;color:var(--sapTile_IconColor)}::slotted(img[slot="avatar"]){width:100%;height:100%;border-radius:50%}.ui5-card-header .ui5-card-header-status{display:inline-block;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSmallSize);color:var(--sapTile_TextColor);text-align:left;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;vertical-align:middle;margin-inline-start:1rem;margin-block-start:.125rem}.ui5-card-header .ui5-card-header-text .ui5-card-header-title{font-family:var(--_ui5-v1-23-1_card_header_title_font_family);font-size:var(--_ui5-v1-23-1_card_header_title_font_size);font-weight:var(--_ui5-v1-23-1_card_header_title_font_weight);color:var(--sapTile_TitleTextColor);max-height:3.5rem;align-self:flex-end}.ui5-card-header .ui5-card-header-text .ui5-card-header-subtitle{font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;color:var(--sapTile_TextColor);margin-top:var(--_ui5-v1-23-1_card_header_subtitle_margin_top);max-height:2.1rem}.ui5-card-header .ui5-card-header-text .ui5-card-header-title,.ui5-card-header .ui5-card-header-text .ui5-card-header-subtitle{text-align:start;text-overflow:ellipsis;white-space:normal;word-wrap:break-word;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;max-width:100%}.ui5-card-header .ui5-card-header-text .ui5-card-header-title{-webkit-line-clamp:3}.ui5-card-header-action{display:flex;padding-inline-start:1rem;align-self:flex-start}
`};var o=function(a,e,t,s){var u=arguments.length,n=u<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(a,e,t,s);else for(var p=a.length-1;p>=0;p--)(h=a[p])&&(n=(u<3?h(n):u>3?h(e,t,n):h(e,t))||n);return u>3&&n&&Object.defineProperty(e,t,n),n},d;let r=d=class extends g{get classes(){return{root:{"ui5-card-header":!0,"ui5-card-header--interactive":this.interactive,"ui5-card-header--active":this.interactive&&this._headerActive,"ui5-card-header-ff":A()}}}get _root(){return this.shadowRoot.querySelector(".ui5-card-header")}get ariaRoleDescription(){return this.interactive?d.i18nBundle.getText(R):d.i18nBundle.getText(S)}get ariaRoleFocusableElement(){return this.interactive?"button":null}get ariaCardAvatarLabel(){return d.i18nBundle.getText(I)}get ariaLabelledBy(){const e=[];return this.titleText&&e.push(`${this._id}-title`),this.subtitleText&&e.push(`${this._id}-subtitle`),this.status&&e.push(`${this._id}-status`),this.hasAvatar&&e.push(`${this._id}-avatar`),e.length!==0?e.join(" "):void 0}get hasAvatar(){return!!this.avatar.length}get hasAction(){return!!this.action.length}static async onDefine(){d.i18nBundle=await C("@ui5/webcomponents")}_actionsFocusin(){this._root.classList.add("ui5-card-header-hide-focus")}_actionsFocusout(){this._root.classList.remove("ui5-card-header-hide-focus")}_click(e){e.stopImmediatePropagation(),this.interactive&&this._root.contains(e.target)&&this.fireEvent("click")}_keydown(e){if(!this.interactive||!this._root.contains(e.target))return;const t=$(e),s=_(e);if(this._headerActive=t||s,t){this.fireEvent("click");return}s&&e.preventDefault()}_keyup(e){if(!this.interactive||!this._root.contains(e.target))return;const t=_(e);this._headerActive=!1,t&&this.fireEvent("click")}};o([c()],r.prototype,"titleText",void 0);o([c()],r.prototype,"subtitleText",void 0);o([c()],r.prototype,"status",void 0);o([c({type:Boolean})],r.prototype,"interactive",void 0);o([c({validator:D,defaultValue:3})],r.prototype,"_ariaLevel",void 0);o([c({type:Boolean,noAttribute:!0})],r.prototype,"_headerActive",void 0);o([m()],r.prototype,"avatar",void 0);o([m()],r.prototype,"action",void 0);r=d=o([w({tag:"ui5-card-header",languageAware:!0,renderer:x,template:N,styles:P}),k("click")],r);r.define();const U=r,q=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"})),f=T("ui5-card-header",["status","subtitleText","titleText"],["interactive"],["action","avatar"],["click"],()=>b(()=>Promise.resolve().then(()=>q),void 0,import.meta.url));f.displayName="CardHeader";try{f.displayName="CardHeader",f.__docgenInfo={description:"The `CardHeader` is a component, meant to be used as a header of the `Card` component.\nIt displays valuable information, that can be defined with several properties, such as: `titleText`, `subtitleText`, `status`\nand two slots: `avatar` and `action`.\n\n### Keyboard handling\nIn case you enable `interactive` property, you can press the `CardHeader` by Space and Enter keys.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)",displayName:"CardHeader",props:{action:{defaultValue:null,description:`Defines an action, displayed in the right most part of the header.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="action"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"action",required:!1,type:{name:"UI5WCSlotsNode"}},avatar:{defaultValue:null,description:`Defines an avatar image, displayed in the left most part of the header.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="avatar"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"avatar",required:!1,type:{name:"UI5WCSlotsNode"}},onClick:{defaultValue:null,description:"Fired when the component is activated by mouse/tap or by using the Enter or Space key.\n\n**Note:** The event would be fired only if the `interactive` property is set to true.",name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<CardHeaderDomRef, never>) => void"}},interactive:{defaultValue:{value:"false"},description:"Defines if the component would be interactive,\ne.g gets hover effect, gets focus outline and `click` event is fired, when pressed.",name:"interactive",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"Defines the status text.",name:"status",required:!1,type:{name:"string"}},subtitleText:{defaultValue:null,description:"Defines the subtitle text.",name:"subtitleText",required:!1,type:{name:"string"}},titleText:{defaultValue:null,description:"Defines the title text.",name:"titleText",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{f as C};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
