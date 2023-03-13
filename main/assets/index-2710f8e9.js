import{_ as k}from"./iframe-ed18fab5.js";import{a as v,U as w,d as x}from"./UI5Element-427ec721.js";import{e as g,l as s,s as N,a as T,p as a,c as D,b as L,w as E}from"./withWebComponent-e4481254.js";import{e as R,L as A,a as S}from"./i18n-defaults-ffd92f69.js";import{b as $,c as b}from"./Keys-3acbae73.js";import{g as C}from"./AriaLabelHelper-c82262ef.js";import{m as c}from"./MarkedEvents-b83081e9.js";import{W as y}from"./WrappingType-b81e595a.js";var _;(function(t){t.Default="Default",t.Subtle="Subtle",t.Emphasized="Emphasized"})(_||(_={}));const h=_,I=(t,e,i)=>g`<a class="ui5-link-root" role="${s(t.effectiveAccRole)}" href="${s(t.parsedRef)}" target="${s(t.target)}" rel="${s(t._rel)}" tabindex="${s(t.effectiveTabIndex)}" ?disabled="${t.disabled}" aria-label="${s(t.ariaLabelText)}" aria-haspopup="${s(t.accessibilityAttributes.hasPopup)}" aria-expanded="${s(t.accessibilityAttributes.expanded)}" @focusin=${t._onfocusin} @focusout=${t._onfocusout} @click=${t._onclick} @keydown=${t._onkeydown} @keyup=${t._onkeyup}><slot></slot>${t.hasLinkType?V(t):void 0}</a>`,V=(t,e,i)=>g`<span class="ui5-hidden-text">${s(t.linkTypeText)}</span>`;v("@ui5/webcomponents-theming","sap_fiori_3",async()=>N);v("@ui5/webcomponents","sap_fiori_3",async()=>T);const P={packageName:"@ui5/webcomponents",fileName:"themes/Link.css.ts",content:".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-flex}:host{max-width:100%;color:var(--sapLinkColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);cursor:pointer;outline:none;text-decoration:var(--_ui5_link_text_decoration);text-shadow:var(--sapContent_TextShadow)}:host([disabled]){pointer-events:none}:host([disabled]) .ui5-link-root{text-shadow:none;outline:none;cursor:default;pointer-events:none;opacity:var(--sapContent_DisabledOpacity)}:host([design=Emphasized]) .ui5-link-root{font-family:var(--sapFontBoldFamily)}:host([design=Subtle]) .ui5-link-root{color:var(--sapLink_SubtleColor);text-decoration:var(--_ui5_link_subtle_text_decoration)}:host([design=Subtle]) .ui5-link-root:focus{color:var(--sapLinkColor)}:host([wrapping-type=Normal]) .ui5-link-root{white-space:normal;overflow-wrap:break-word}.ui5-link-root{width:100%;display:inline-block;position:relative;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal;outline:none;text-decoration:inherit;color:inherit}:host(:active) .ui5-link-root{color:var(--sapLink_Active_Color);text-decoration:var(--_ui5_link_active_text_decoration)}:host .ui5-link-root{border:var(--_ui5_link_border);border-radius:var(--_ui5_link_focus_border-radius)}:host([design=Subtle][focused]) .ui5-link-root,:host([focused]) .ui5-link-root{background-color:var(--_ui5_link_focus_background_color);color:var(--_ui5_link_focus_color);border:var(--_ui5_link_border_focus);border-radius:var(--_ui5_link_focus_border-radius);text-decoration:var(--_ui5_link_focus_text_decoration);text-shadow:none}:host(:hover){color:var(--sapLink_Hover_Color);text-decoration:var(--_ui5_link_hover_text_decoration)}:host([focused]:hover){text-decoration:var(--_ui5_link_focused_hover_text_decoration)}:host([focused]:hover) .ui5-link-root{color:var(--_ui5_link_focused_hover_text_color)}"};var n=globalThis&&globalThis.__decorate||function(t,e,i,l){var d=arguments.length,r=d<3?e:l===null?l=Object.getOwnPropertyDescriptor(e,i):l,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,l);else for(var m=t.length-1;m>=0;m--)(u=t[m])&&(r=(d<3?u(r):d>3?u(e,i,r):u(e,i))||r);return d>3&&r&&Object.defineProperty(e,i,r),r},p;let o=p=class extends w{constructor(){super(),this._dummyAnchor=document.createElement("a")}onBeforeRendering(){const e=this.target!=="_self"&&this.href&&this._isCrossOrigin();this._rel=e?"noreferrer noopener":void 0}_isCrossOrigin(){const e=window.location;return this._dummyAnchor.href=this.href,!(this._dummyAnchor.hostname===e.hostname&&this._dummyAnchor.port===e.port&&this._dummyAnchor.protocol===e.protocol)}get effectiveTabIndex(){var e;return this._tabIndex?this._tabIndex:this.disabled||!((e=this.textContent)!=null&&e.length)?"-1":"0"}get ariaLabelText(){return C(this)}get hasLinkType(){return this.design!==h.Default}static typeTextMappings(){return{Subtle:A,Emphasized:S}}get linkTypeText(){return p.i18nBundle.getText(p.typeTextMappings()[this.design])}get parsedRef(){return this.href&&this.href.length>0?this.href:void 0}get effectiveAccRole(){return this.accessibleRole.toLowerCase()}static async onDefine(){p.i18nBundle=await x("@ui5/webcomponents")}_onclick(e){const{altKey:i,ctrlKey:l,metaKey:d,shiftKey:r}=e;e.stopImmediatePropagation(),c(e,"link"),this.fireEvent("click",{altKey:i,ctrlKey:l,metaKey:d,shiftKey:r},!0)||e.preventDefault()}_onfocusin(e){c(e,"link"),this.focused=!0}_onfocusout(){this.focused=!1}_onkeydown(e){$(e)&&!this.href?this._onclick(e):b(e)&&e.preventDefault(),c(e,"link")}_onkeyup(e){if(!b(e)){c(e,"link");return}if(this._onclick(e),this.href&&!e.defaultPrevented){const i=new MouseEvent("click");i.stopImmediatePropagation(),this.getDomRef().dispatchEvent(i)}}};n([a({type:Boolean})],o.prototype,"disabled",void 0);n([a()],o.prototype,"href",void 0);n([a()],o.prototype,"target",void 0);n([a({type:h,defaultValue:h.Default})],o.prototype,"design",void 0);n([a({type:y,defaultValue:y.None})],o.prototype,"wrappingType",void 0);n([a()],o.prototype,"accessibleName",void 0);n([a()],o.prototype,"accessibleNameRef",void 0);n([a({defaultValue:"link"})],o.prototype,"accessibleRole",void 0);n([a({type:Object})],o.prototype,"accessibilityAttributes",void 0);n([a({noAttribute:!0})],o.prototype,"_rel",void 0);n([a({noAttribute:!0})],o.prototype,"_tabIndex",void 0);n([a({type:Boolean})],o.prototype,"focused",void 0);o=p=n([D({tag:"ui5-link",languageAware:!0,renderer:L,template:I,styles:P}),R("click",{detail:{altKey:{type:Boolean},ctrlKey:{type:Boolean},metaKey:{type:Boolean},shiftKey:{type:Boolean}}})],o);o.define();const K=o,q=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"})),f=E("ui5-link",["accessibleName","accessibleNameRef","accessibleRole","design","href","target","wrappingType"],["disabled"],[],["click"],()=>k(()=>Promise.resolve().then(()=>q),void 0,import.meta.url));f.displayName="Link";f.defaultProps={accessibleRole:"link",design:h.Default};try{f.displayName="Link",f.__docgenInfo={description:`The \`Link\` is a hyperlink component that is used to navigate to other apps and web pages, or to trigger actions. It is a clickable text element, visualized in such a way that it stands out from the standard text. On hover, it changes its style to an underlined text to provide additional feedback to the user.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Link" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"Link",props:{children:{defaultValue:null,description:`Defines the text of the component.
**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClick:{defaultValue:null,description:"Fired when the component is triggered either with a mouse/tap or by using the Enter key.",name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<LinkDomRef, { altKey: boolean; ctrlKey: boolean; metaKey: boolean; shiftKey: boolean; }>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the input",name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:"link"},description:'Defines the ARIA role of the component. **Note:** Use the "button" role in cases when navigation is not expected to occur and the href property is not defined.',name:"accessibleRole",required:!1,type:{name:"string"}},design:{defaultValue:{value:"LinkDesign.Default"},description:"Defines the component design.\n\n**Note:** Avaialble options are `Default`, `Subtle`, and `Emphasized`.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Emphasized"'},{value:'"Default"'},{value:'"Subtle"'},{value:'"Emphasized"'},{value:'"Subtle"'}]}},disabled:{defaultValue:null,description:`Defines whether the component is disabled.

**Note:** When disabled, the click event cannot be triggered by the user.`,name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:`Defines the component href.

**Note:** Standard hyperlink behavior is supported.`,name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Defines the component target.\n\n**Notes:**\n\n*   `_self`\n*   `_top`\n*   `_blank`\n*   `_parent`\n*   `_search`\n\n**This property must only be used when the `href` property is set.**",name:"target",required:!1,type:{name:"string"}},wrappingType:{defaultValue:null,description:"Defines how the text of a component will be displayed when there is not enough space. Available options are:\n\n*   `None` - The text will be truncated with an ellipsis.\n*   `Normal` - The text will wrap. The words will not be broken based on hyphenation.",name:"wrappingType",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Normal"'},{value:'"Normal"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{f as L,K as a,h as b};
//# sourceMappingURL=index-2710f8e9.js.map
