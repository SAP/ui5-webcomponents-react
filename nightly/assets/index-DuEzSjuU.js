import{c as p,G as b,j as o,p as _,d as g,s as d,m as y,e as w,I as x,x as T,w as C}from"./withWebComponent-CT6sGXpP.js";import{d as v}from"./slot-_4yKMUwC.js";import{l as k}from"./event-strict-DgQLNDEV.js";import{i as D}from"./i18n-DEVDpFvK.js";import{b as S,i as m}from"./Keys-D3vKxxqj.js";import{q as N,r as A,s as E}from"./i18n-defaults-Do22Zz-4.js";import{d as R}from"./parameters-bundle.css-BzaqQttB.js";function H(){return p("div",{id:`${this._id}--header`,class:{"ui5-card-header":!0,"ui5-card-header--interactive":this.interactive,"ui5-card-header--active":this.interactive&&this._headerActive,"ui5-card-header-ff":b()},part:"root",role:"group","aria-roledescription":this.ariaRoleDescription,onClick:this._click,onKeyDown:this._keydown,onKeyUp:this._keyup,children:[p("div",{class:"ui5-card-header-focusable-element","aria-labelledby":this.ariaLabelledBy,role:this.ariaRoleFocusableElement,"data-sap-focus-ref":!0,tabindex:0,children:[this.hasAvatar&&o("div",{id:`${this._id}-avatar`,class:"ui5-card-header-avatar","aria-label":this.ariaCardAvatarLabel,children:o("slot",{name:"avatar"})}),p("div",{class:"ui5-card-header-text",children:[p("div",{class:"ui5-card-header-first-line",children:[this.titleText&&o("div",{id:`${this._id}-title`,class:"ui5-card-header-title",part:"title",role:"heading","aria-level":3,children:this.titleText}),this.additionalText&&o("div",{class:"ui5-card-header-additionalText",children:o("span",{id:`${this._id}-additionalText`,part:"additional-text",dir:"auto",children:this.additionalText})})]}),this.subtitleText&&o("div",{id:`${this._id}-subtitle`,class:"ui5-card-header-subtitle",part:"subtitle",children:this.subtitleText})]})]}),this.hasAction&&o("div",{class:"ui5-card-header-action",onFocusIn:this._actionsFocusin,onFocusOut:this._actionsFocusout,children:o("slot",{name:"action"})})]})}_("@ui5/webcomponents-theming","sap_horizon",async()=>g);_("@ui5/webcomponents","sap_horizon",async()=>R);const I=`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}.ui5-card-header{position:relative;display:flex;align-items:center;padding:var(--_ui5-v2-6-2_card_header_padding);outline:none}:host([subtitleText]) .ui5-card-header{align-items:flex-start}:host([desktop]) .ui5-card-header.ui5-card-header-ff:not(.ui5-card-header-hide-focus):focus-within:before,.ui5-card-header.ui5-card-header-ff:not(.ui5-card-header-hide-focus):focus-visible:before{outline:none;content:"";position:absolute;border:var(--_ui5-v2-6-2_card_header_focus_border);pointer-events:none;top:var(--_ui5-v2-6-2_card_header_focus_offset);left:var(--_ui5-v2-6-2_card_header_focus_offset);right:var(--_ui5-v2-6-2_card_header_focus_offset);bottom:var(--_ui5-v2-6-2_card_header_focus_offset);border-top-left-radius:var(--_ui5-v2-6-2_card_header_focus_radius);border-top-right-radius:var(--_ui5-v2-6-2_card_header_focus_radius);border-bottom-left-radius:var(--_ui5-v2-6-2_card_header_focus_bottom_radius);border-bottom-right-radius:var(--_ui5-v2-6-2_card_header_focus_bottom_radius)}:host([desktop]) .ui5-card-header:not(.ui5-card-header-ff):not(.ui5-card-header-hide-focus):has(.ui5-card-header-focusable-element:focus):before,.ui5-card-header:not(.ui5-card-header-ff):not(.ui5-card-header-hide-focus):has(.ui5-card-header-focusable-element:focus-visible):before{outline:none;content:"";position:absolute;border:var(--_ui5-v2-6-2_card_header_focus_border);pointer-events:none;top:var(--_ui5-v2-6-2_card_header_focus_offset);left:var(--_ui5-v2-6-2_card_header_focus_offset);right:var(--_ui5-v2-6-2_card_header_focus_offset);bottom:var(--_ui5-v2-6-2_card_header_focus_offset);border-top-left-radius:var(--_ui5-v2-6-2_card_header_focus_radius);border-top-right-radius:var(--_ui5-v2-6-2_card_header_focus_radius);border-bottom-left-radius:var(--_ui5-v2-6-2_card_header_focus_bottom_radius);border-bottom-right-radius:var(--_ui5-v2-6-2_card_header_focus_bottom_radius)}.ui5-card-header-focusable-element{outline:none}.ui5-card-header-focusable-element{display:inherit;align-items:inherit;flex:1;min-width:0}.ui5-card-header.ui5-card-header--interactive:hover{cursor:pointer;background:var(--_ui5-v2-6-2_card_header_hover_bg)}.ui5-card-header.ui5-card-header--active,.ui5-card-header.ui5-card-header--interactive:active{background:var(--_ui5-v2-6-2_card_header_active_bg)}.ui5-card-header .ui5-card-header-text{flex:1;min-width:0;pointer-events:none}.ui5-card-header-first-line{display:flex;flex-flow:row;justify-content:space-between}.ui5-card-header-additionalText{flex:none}.ui5-card-header .ui5-card-header-avatar{height:3rem;width:3rem;display:flex;align-items:center;justify-content:center;margin-inline-end:.75rem;pointer-events:none;align-self:flex-start}::slotted([ui5-icon]){width:1.5rem;height:1.5rem;color:var(--sapTile_IconColor)}::slotted(img[slot="avatar"]){width:100%;height:100%;border-radius:50%}.ui5-card-header .ui5-card-header-additionalText{display:inline-block;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSmallSize);color:var(--sapTile_TextColor);text-align:left;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;vertical-align:middle;margin-inline-start:1rem;margin-block-start:.125rem}.ui5-card-header .ui5-card-header-text .ui5-card-header-title{font-family:var(--_ui5-v2-6-2_card_header_title_font_family);font-size:var(--_ui5-v2-6-2_card_header_title_font_size);font-weight:var(--_ui5-v2-6-2_card_header_title_font_weight);color:var(--sapTile_TitleTextColor);max-height:3.5rem;align-self:flex-end}.ui5-card-header .ui5-card-header-text .ui5-card-header-subtitle{font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;color:var(--sapTile_TextColor);margin-top:var(--_ui5-v2-6-2_card_header_subtitle_margin_top);max-height:2.1rem}.ui5-card-header .ui5-card-header-text .ui5-card-header-title,.ui5-card-header .ui5-card-header-text .ui5-card-header-subtitle{text-align:start;text-overflow:ellipsis;white-space:normal;word-wrap:break-word;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;max-width:100%}.ui5-card-header .ui5-card-header-text .ui5-card-header-title{-webkit-line-clamp:3}.ui5-card-header-action{display:flex;padding-inline-start:1rem;align-self:flex-start}
`;var i=function(s,e,a,n){var u=arguments.length,r=u<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,a):n,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,a,n);else for(var f=s.length-1;f>=0;f--)(h=s[f])&&(r=(u<3?h(r):u>3?h(e,a,r):h(e,a))||r);return u>3&&r&&Object.defineProperty(e,a,r),r},l;let t=l=class extends x{constructor(){super(...arguments),this.interactive=!1,this._ariaLevel=3,this._headerActive=!1}onEnterDOM(){T()&&this.setAttribute("desktop","")}get _root(){return this.shadowRoot.querySelector(".ui5-card-header")}get ariaRoleDescription(){return this.interactive?l.i18nBundle.getText(N):l.i18nBundle.getText(A)}get ariaRoleFocusableElement(){return this.interactive?"button":void 0}get ariaCardAvatarLabel(){return l.i18nBundle.getText(E)}get ariaLabelledBy(){const e=[];return this.titleText&&e.push(`${this._id}-title`),this.subtitleText&&e.push(`${this._id}-subtitle`),this.additionalText&&e.push(`${this._id}-additionalText`),this.hasAvatar&&e.push(`${this._id}-avatar`),e.length!==0?e.join(" "):void 0}get hasAvatar(){return!!this.avatar.length}get hasAction(){return!!this.action.length}_actionsFocusin(){this._root.classList.add("ui5-card-header-hide-focus")}_actionsFocusout(){this._root.classList.remove("ui5-card-header-hide-focus")}_click(e){e.stopImmediatePropagation(),this.interactive&&this._root.contains(e.target)&&this.fireDecoratorEvent("click")}_keydown(e){if(!this.interactive||!this._root.contains(e.target))return;const a=S(e),n=m(e);if(this._headerActive=a||n,a){this.fireDecoratorEvent("click");return}n&&e.preventDefault()}_keyup(e){if(!this.interactive||!this._root.contains(e.target))return;const a=m(e);this._headerActive=!1,a&&this.fireDecoratorEvent("click")}};i([d()],t.prototype,"titleText",void 0);i([d()],t.prototype,"subtitleText",void 0);i([d()],t.prototype,"additionalText",void 0);i([d({type:Boolean})],t.prototype,"interactive",void 0);i([d({type:Number})],t.prototype,"_ariaLevel",void 0);i([d({type:Boolean,noAttribute:!0})],t.prototype,"_headerActive",void 0);i([v()],t.prototype,"avatar",void 0);i([v()],t.prototype,"action",void 0);i([D("@ui5/webcomponents")],t,"i18nBundle",void 0);t=l=i([y({tag:"ui5-card-header",languageAware:!0,renderer:w,template:H,styles:I}),k("click",{bubbles:!0})],t);t.define();const c=C("ui5-card-header",["additionalText","subtitleText","titleText"],["interactive"],["action","avatar"],["click"]);c.displayName="CardHeader";try{c.displayName="CardHeader",c.__docgenInfo={description:"The `CardHeader` is a component, meant to be used as a header of the `Card` component.\nIt displays valuable information, that can be defined with several properties, such as: `titleText`, `subtitleText`, `additionalText`\nand two slots: `avatar` and `action`.\n\n### Keyboard handling\nIn case you enable `interactive` property, you can press the `CardHeader` by Space and Enter keys.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"CardHeader",props:{action:{defaultValue:null,description:`Defines an action, displayed in the right most part of the header.

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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{c.displayName="CardHeader",c.__docgenInfo={description:"The `CardHeader` is a component, meant to be used as a header of the `Card` component.\nIt displays valuable information, that can be defined with several properties, such as: `titleText`, `subtitleText`, `additionalText`\nand two slots: `avatar` and `action`.\n\n### Keyboard handling\nIn case you enable `interactive` property, you can press the `CardHeader` by Space and Enter keys.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"CardHeader",props:{action:{defaultValue:null,description:`Defines an action, displayed in the right most part of the header.

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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{c as C};
