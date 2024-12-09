import{m as d,k as i,a as _,s as b,q as l,v as g,S as y,A as w,L as x,z as T,w as C}from"./withWebComponent-D2290JWW.js";import{d as v}from"./slot-_4yKMUwC.js";import{l as k}from"./event-strict-DgQLNDEV.js";import{i as D}from"./i18n-DEVDpFvK.js";import{b as S,i as m}from"./Keys-CAuuEE_3.js";import{o as $}from"./class-map-BHSYgJ9u.js";import{t as N,u as A,A as E}from"./i18n-defaults-B_32hVC3.js";import{s as R}from"./parameters-bundle.css-DlWxkghp.js";function H(a,e,t){return d`<div id="${i(this._id)}--header" class="${$(this.classes.root)}" role="group" aria-roledescription="${i(this.ariaRoleDescription)}" @click="${this._click}" @keydown="${this._keydown}" @keyup="${this._keyup}" part="root"><div class="ui5-card-header-focusable-element" aria-labelledby="${i(this.ariaLabelledBy)}" role="${i(this.ariaRoleFocusableElement)}" data-sap-focus-ref tabindex="0">${this.hasAvatar?L.call(this,a,e,t):void 0}<div class="ui5-card-header-text"><div class="ui5-card-header-first-line">${this.titleText?I.call(this,a,e,t):void 0}${this.additionalText?q.call(this,a,e,t):void 0}</div>${this.subtitleText?V.call(this,a,e,t):void 0}</div></div>${this.hasAction?U.call(this,a,e,t):void 0}</div></div>`}function L(a,e,t){return d`<div id="${i(this._id)}-avatar" class="ui5-card-header-avatar" aria-label="${i(this.ariaCardAvatarLabel)}"><slot name="avatar"></slot></div>`}function I(a,e,t){return d`<div id="${i(this._id)}-title" class="ui5-card-header-title" part="title" role="heading" aria-level="3">${i(this.titleText)}</div>`}function q(a,e,t){return d`<div class="ui5-card-header-additionalText"><span id="${i(this._id)}-additionalText" part="additional-text" dir="auto">${i(this.additionalText)}</span></div>`}function V(a,e,t){return d`<div id="${i(this._id)}-subtitle" class="ui5-card-header-subtitle" part="subtitle">${i(this.subtitleText)}</div>`}function U(a,e,t){return d`<div class="ui5-card-header-action" @focusin="${this._actionsFocusin}" @focusout="${this._actionsFocusout}"><slot name="action"></slot></div>`}_("@ui5/webcomponents-theming","sap_horizon",async()=>b);_("@ui5/webcomponents","sap_horizon",async()=>R);const W={packageName:"@ui5/webcomponents",fileName:"themes/CardHeader.css.ts",content:`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}.ui5-card-header{position:relative;display:flex;align-items:center;padding:var(--_ui5-v2-5-0_card_header_padding);outline:none}:host([subtitleText]) .ui5-card-header{align-items:flex-start}:host([desktop]) .ui5-card-header.ui5-card-header-ff:not(.ui5-card-header-hide-focus):focus-within:before,.ui5-card-header.ui5-card-header-ff:not(.ui5-card-header-hide-focus):focus-visible:before{outline:none;content:"";position:absolute;border:var(--_ui5-v2-5-0_card_header_focus_border);pointer-events:none;top:var(--_ui5-v2-5-0_card_header_focus_offset);left:var(--_ui5-v2-5-0_card_header_focus_offset);right:var(--_ui5-v2-5-0_card_header_focus_offset);bottom:var(--_ui5-v2-5-0_card_header_focus_offset);border-top-left-radius:var(--_ui5-v2-5-0_card_header_focus_radius);border-top-right-radius:var(--_ui5-v2-5-0_card_header_focus_radius);border-bottom-left-radius:var(--_ui5-v2-5-0_card_header_focus_bottom_radius);border-bottom-right-radius:var(--_ui5-v2-5-0_card_header_focus_bottom_radius)}:host([desktop]) .ui5-card-header:not(.ui5-card-header-ff):not(.ui5-card-header-hide-focus):has(.ui5-card-header-focusable-element:focus):before,.ui5-card-header:not(.ui5-card-header-ff):not(.ui5-card-header-hide-focus):has(.ui5-card-header-focusable-element:focus-visible):before{outline:none;content:"";position:absolute;border:var(--_ui5-v2-5-0_card_header_focus_border);pointer-events:none;top:var(--_ui5-v2-5-0_card_header_focus_offset);left:var(--_ui5-v2-5-0_card_header_focus_offset);right:var(--_ui5-v2-5-0_card_header_focus_offset);bottom:var(--_ui5-v2-5-0_card_header_focus_offset);border-top-left-radius:var(--_ui5-v2-5-0_card_header_focus_radius);border-top-right-radius:var(--_ui5-v2-5-0_card_header_focus_radius);border-bottom-left-radius:var(--_ui5-v2-5-0_card_header_focus_bottom_radius);border-bottom-right-radius:var(--_ui5-v2-5-0_card_header_focus_bottom_radius)}.ui5-card-header-focusable-element{outline:none}.ui5-card-header-focusable-element{display:inherit;align-items:inherit;flex:1;min-width:0}.ui5-card-header.ui5-card-header--interactive:hover{cursor:pointer;background:var(--_ui5-v2-5-0_card_header_hover_bg)}.ui5-card-header.ui5-card-header--active,.ui5-card-header.ui5-card-header--interactive:active{background:var(--_ui5-v2-5-0_card_header_active_bg)}.ui5-card-header .ui5-card-header-text{flex:1;min-width:0;pointer-events:none}.ui5-card-header-first-line{display:flex;flex-flow:row;justify-content:space-between}.ui5-card-header-additionalText{flex:none}.ui5-card-header .ui5-card-header-avatar{height:3rem;width:3rem;display:flex;align-items:center;justify-content:center;margin-inline-end:.75rem;pointer-events:none;align-self:flex-start}::slotted([ui5-icon]){width:1.5rem;height:1.5rem;color:var(--sapTile_IconColor)}::slotted(img[slot="avatar"]){width:100%;height:100%;border-radius:50%}.ui5-card-header .ui5-card-header-additionalText{display:inline-block;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSmallSize);color:var(--sapTile_TextColor);text-align:left;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;vertical-align:middle;margin-inline-start:1rem;margin-block-start:.125rem}.ui5-card-header .ui5-card-header-text .ui5-card-header-title{font-family:var(--_ui5-v2-5-0_card_header_title_font_family);font-size:var(--_ui5-v2-5-0_card_header_title_font_size);font-weight:var(--_ui5-v2-5-0_card_header_title_font_weight);color:var(--sapTile_TitleTextColor);max-height:3.5rem;align-self:flex-end}.ui5-card-header .ui5-card-header-text .ui5-card-header-subtitle{font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;color:var(--sapTile_TextColor);margin-top:var(--_ui5-v2-5-0_card_header_subtitle_margin_top);max-height:2.1rem}.ui5-card-header .ui5-card-header-text .ui5-card-header-title,.ui5-card-header .ui5-card-header-text .ui5-card-header-subtitle{text-align:start;text-overflow:ellipsis;white-space:normal;word-wrap:break-word;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;max-width:100%}.ui5-card-header .ui5-card-header-text .ui5-card-header-title{-webkit-line-clamp:3}.ui5-card-header-action{display:flex;padding-inline-start:1rem;align-self:flex-start}
`};var o=function(a,e,t,s){var h=arguments.length,n=h<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(a,e,t,s);else for(var f=a.length-1;f>=0;f--)(p=a[f])&&(n=(h<3?p(n):h>3?p(e,t,n):p(e,t))||n);return h>3&&n&&Object.defineProperty(e,t,n),n},c;let r=c=class extends y{constructor(){super(...arguments),this.interactive=!1,this._ariaLevel=3,this._headerActive=!1}onEnterDOM(){w()&&this.setAttribute("desktop","")}get classes(){return{root:{"ui5-card-header":!0,"ui5-card-header--interactive":this.interactive,"ui5-card-header--active":this.interactive&&this._headerActive,"ui5-card-header-ff":x()}}}get _root(){return this.shadowRoot.querySelector(".ui5-card-header")}get ariaRoleDescription(){return this.interactive?c.i18nBundle.getText(N):c.i18nBundle.getText(A)}get ariaRoleFocusableElement(){return this.interactive?"button":null}get ariaCardAvatarLabel(){return c.i18nBundle.getText(E)}get ariaLabelledBy(){const e=[];return this.titleText&&e.push(`${this._id}-title`),this.subtitleText&&e.push(`${this._id}-subtitle`),this.additionalText&&e.push(`${this._id}-additionalText`),this.hasAvatar&&e.push(`${this._id}-avatar`),e.length!==0?e.join(" "):void 0}get hasAvatar(){return!!this.avatar.length}get hasAction(){return!!this.action.length}_actionsFocusin(){this._root.classList.add("ui5-card-header-hide-focus")}_actionsFocusout(){this._root.classList.remove("ui5-card-header-hide-focus")}_click(e){e.stopImmediatePropagation(),this.interactive&&this._root.contains(e.target)&&this.fireDecoratorEvent("click")}_keydown(e){if(!this.interactive||!this._root.contains(e.target))return;const t=S(e),s=m(e);if(this._headerActive=t||s,t){this.fireDecoratorEvent("click");return}s&&e.preventDefault()}_keyup(e){if(!this.interactive||!this._root.contains(e.target))return;const t=m(e);this._headerActive=!1,t&&this.fireDecoratorEvent("click")}};o([l()],r.prototype,"titleText",void 0);o([l()],r.prototype,"subtitleText",void 0);o([l()],r.prototype,"additionalText",void 0);o([l({type:Boolean})],r.prototype,"interactive",void 0);o([l({type:Number})],r.prototype,"_ariaLevel",void 0);o([l({type:Boolean,noAttribute:!0})],r.prototype,"_headerActive",void 0);o([v()],r.prototype,"avatar",void 0);o([v()],r.prototype,"action",void 0);o([D("@ui5/webcomponents")],r,"i18nBundle",void 0);r=c=o([g({tag:"ui5-card-header",languageAware:!0,renderer:T,template:H,styles:W}),k("click",{bubbles:!0})],r);r.define();const u=C("ui5-card-header",["additionalText","subtitleText","titleText"],["interactive"],["action","avatar"],["click"]);u.displayName="CardHeader";try{u.displayName="CardHeader",u.__docgenInfo={description:"The `CardHeader` is a component, meant to be used as a header of the `Card` component.\nIt displays valuable information, that can be defined with several properties, such as: `titleText`, `subtitleText`, `additionalText`\nand two slots: `avatar` and `action`.\n\n### Keyboard handling\nIn case you enable `interactive` property, you can press the `CardHeader` by Space and Enter keys.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"CardHeader",props:{action:{defaultValue:null,description:`Defines an action, displayed in the right most part of the header.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="action"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"action",required:!1,type:{name:"UI5WCSlotsNode"}},avatar:{defaultValue:null,description:`Defines an avatar image, displayed in the left most part of the header.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="avatar"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"avatar",required:!1,type:{name:"UI5WCSlotsNode"}},onClick:{defaultValue:null,description:`Fired when the component is activated by mouse/tap or by using the Enter or Space key.

**Note:** The event would be fired only if the \`interactive\` property is set to true.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<CardHeaderDomRef, never>) => void"}},additionalText:{defaultValue:{value:"undefined"},description:"Defines the additional text.",name:"additionalText",required:!1,type:{name:"string"}},interactive:{defaultValue:{value:"false"},description:"Defines if the component would be interactive,\ne.g gets hover effect and `click` event is fired, when pressed.",name:"interactive",required:!1,type:{name:"boolean"}},subtitleText:{defaultValue:{value:"undefined"},description:"Defines the subtitle text.",name:"subtitleText",required:!1,type:{name:"string"}},titleText:{defaultValue:{value:"undefined"},description:"Defines the title text.",name:"titleText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{u.displayName="CardHeader",u.__docgenInfo={description:"The `CardHeader` is a component, meant to be used as a header of the `Card` component.\nIt displays valuable information, that can be defined with several properties, such as: `titleText`, `subtitleText`, `additionalText`\nand two slots: `avatar` and `action`.\n\n### Keyboard handling\nIn case you enable `interactive` property, you can press the `CardHeader` by Space and Enter keys.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"CardHeader",props:{action:{defaultValue:null,description:`Defines an action, displayed in the right most part of the header.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="action"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"action",required:!1,type:{name:"UI5WCSlotsNode"}},avatar:{defaultValue:null,description:`Defines an avatar image, displayed in the left most part of the header.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="avatar"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"avatar",required:!1,type:{name:"UI5WCSlotsNode"}},onClick:{defaultValue:null,description:`Fired when the component is activated by mouse/tap or by using the Enter or Space key.

**Note:** The event would be fired only if the \`interactive\` property is set to true.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<CardHeaderDomRef, never>) => void"}},additionalText:{defaultValue:{value:"undefined"},description:"Defines the additional text.",name:"additionalText",required:!1,type:{name:"string"}},interactive:{defaultValue:{value:"false"},description:"Defines if the component would be interactive,\ne.g gets hover effect and `click` event is fired, when pressed.",name:"interactive",required:!1,type:{name:"boolean"}},subtitleText:{defaultValue:{value:"undefined"},description:"Defines the subtitle text.",name:"subtitleText",required:!1,type:{name:"string"}},titleText:{defaultValue:{value:"undefined"},description:"Defines the title text.",name:"titleText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{u as C};
