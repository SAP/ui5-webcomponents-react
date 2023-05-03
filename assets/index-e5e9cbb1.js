import{_ as $}from"./iframe-97e1d9cd.js";import{a as T,U as x,A,d as B}from"./UI5Element-e8adceda.js";import{e as l,l as n,s as p,a as N,b as R,p as r,c as H,d as I,w as P}from"./withWebComponent-c710bf85.js";import{I as C,e as k}from"./Icon-16710c43.js";import{s as L}from"./slot-76e48863.js";import{s as F,a as D}from"./slideUp-745debd3.js";import{b as y,c as w}from"./Icons-5b18f7d2.js";import{g as E}from"./AnimationMode-9cec4b20.js";import"./slim-arrow-right-78d167a6.js";import{B as V}from"./Button-6eea99db.js";import{T as _}from"./Title-c7a0da36.js";import{s as O}from"./style-map-eb41b602.js";import{o as m}from"./class-map-eee65cb7.js";import{P as S}from"./i18n-defaults-254d6b69.js";var g;(function(e){e.Complementary="Complementary",e.Form="Form",e.Region="Region"})(g||(g={}));const v=g,q=(e,t,a)=>l`<div class="ui5-panel-root" role="${n(e.accRole)}" aria-label="${n(e.effectiveAccessibleName)}" aria-labelledby="${n(e.fixedPanelAriaLabelledbyReference)}">${e.hasHeaderOrHeaderText?U(e,t,a):void 0}<div class="ui5-panel-content" id="${n(e._id)}-content" tabindex="-1" style="${O(e.styles.content)}" part="content"><slot></slot></div></div>`,U=(e,t,a)=>l`<div class="ui5-panel-heading-wrapper" role="${n(e.headingWrapperRole)}" aria-level="${n(e.headingWrapperAriaLevel)}"><div @click="${e._headerClick}" @keydown="${e._headerKeyDown}" @keyup="${e._headerKeyUp}" class="ui5-panel-header" tabindex="${n(e.headerTabIndex)}" role="${n(e.accInfo.role)}" aria-expanded="${n(e.accInfo.ariaExpanded)}" aria-controls="${n(e.accInfo.ariaControls)}" aria-labelledby="${n(e.accInfo.ariaLabelledby)}" part="header">${e.fixed?void 0:W(e,t,a)}${e._hasHeader?M():G(e)}</div></div>`,W=(e,t,a)=>l`<div class="ui5-panel-header-button-root">${e._hasHeader?j(e,t,a):z(e,t,a)}</div>`,j=(e,t,a)=>a?l`<${p("ui5-button",t,a)} design="Transparent" class="ui5-panel-header-button ui5-panel-header-button-with-icon" @click="${e._toggleButtonClick}" .accessibilityAttributes=${n(e.accInfo.button.accessibilityAttributes)} tooltip="${n(e.accInfo.button.title)}" accessible-name="${n(e.accInfo.button.ariaLabelButton)}"><div class="ui5-panel-header-icon-wrapper"><${p("ui5-icon",t,a)} class="ui5-panel-header-icon ${m(e.classes.headerBtn)}" name="slim-arrow-right"></${p("ui5-icon",t,a)}></div></${p("ui5-button",t,a)}>`:l`<ui5-button design="Transparent" class="ui5-panel-header-button ui5-panel-header-button-with-icon" @click="${e._toggleButtonClick}" .accessibilityAttributes=${n(e.accInfo.button.accessibilityAttributes)} tooltip="${n(e.accInfo.button.title)}" accessible-name="${n(e.accInfo.button.ariaLabelButton)}"><div class="ui5-panel-header-icon-wrapper"><ui5-icon class="ui5-panel-header-icon ${m(e.classes.headerBtn)}" name="slim-arrow-right"></ui5-icon></div></ui5-button>`,z=(e,t,a)=>a?l`<${p("ui5-icon",t,a)} class="ui5-panel-header-button ui5-panel-header-icon ${m(e.classes.headerBtn)}" name="slim-arrow-right" show-tooltip accessible-name="${n(e.toggleButtonTitle)}"></${p("ui5-icon",t,a)}>`:l`<ui5-icon class="ui5-panel-header-button ui5-panel-header-icon ${m(e.classes.headerBtn)}" name="slim-arrow-right" show-tooltip accessible-name="${n(e.toggleButtonTitle)}"></ui5-icon>`,M=(e,t,a)=>l`<slot name="header"></slot>`,G=(e,t,a)=>l`<div id="${n(e._id)}-header-title" class="ui5-panel-header-title">${n(e.headerText)}</div>`;T("@ui5/webcomponents-theming","sap_fiori_3",async()=>N);T("@ui5/webcomponents","sap_fiori_3",async()=>R);const K={packageName:"@ui5/webcomponents",fileName:"themes/Panel.css.ts",content:'.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:block}:host{font-family:"72override",var(--sapFontFamily);background-color:var(--sapGroup_TitleBackground);border-radius:var(--_ui5_panel_border_radius)}:host(:not([collapsed])){border-bottom:var(--_ui5_panel_border_bottom)}:host([fixed]) .ui5-panel-header{padding-left:1rem}.ui5-panel-header{min-height:var(--_ui5_panel_header_height);width:100%;position:relative;display:flex;justify-content:flex-start;align-items:center;outline:none;box-sizing:border-box;padding-right:var(--_ui5_panel_header_padding_right)}.ui5-panel-header-icon{color:var(--_ui5_panel_icon_color)}.ui5-panel-header-button-animated{transition:transform .4s ease-out}:host(:not([_has-header]):not([fixed])) .ui5-panel-header{cursor:pointer}:host(:not([_has-header]):not([fixed])) .ui5-panel-header:focus:after{content:"";position:absolute;pointer-events:none;z-index:2;border:var(--_ui5_panel_focus_border);border-radius:var(--_ui5_panel_border_radius);top:var(--_ui5_panel_focus_offset);bottom:var(--_ui5_panel_focus_offset);left:var(--_ui5_panel_focus_offset);right:var(--_ui5_panel_focus_offset)}:host(:not([collapsed]):not([_has-header]):not([fixed])) .ui5-panel-header:focus:after{border-radius:var(--_ui5_panel_border_radius_expanded)}:host(:not([collapsed])) .ui5-panel-header-button:not(.ui5-panel-header-button-with-icon),:host(:not([collapsed])) .ui5-panel-header-icon-wrapper [ui5-icon]{transform:var(--_ui5_panel_toggle_btn_rotation)}:host([fixed]) .ui5-panel-header-title{width:100%}.ui5-panel-header-title{width:calc(100% - var(--_ui5_panel_button_root_width));overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:"72override",var(--sapFontHeaderFamily);font-size:var(--sapGroup_Title_FontSize);color:var(--sapGroup_TitleTextColor);font-weight:400}.ui5-panel-content{padding:.625rem 1rem 1.375rem 1rem;background-color:var(--sapGroup_ContentBackground);outline:none;border-bottom-left-radius:var(--_ui5_panel_border_radius);border-bottom-right-radius:var(--_ui5_panel_border_radius)}.ui5-panel-header-button-root{display:flex;justify-content:center;align-items:center;flex-shrink:0;width:var(--_ui5_panel_button_root_width);height:var(--_ui5_panel_button_root_width);padding:var(--_ui5_panel_header_button_wrapper_padding);box-sizing:border-box}:host([collapsed]) .ui5-panel-header,:host([fixed]:not([collapsed]):not([_has-header])) .ui5-panel-header{border-bottom:.0625rem solid var(--sapGroup_TitleBorderColor)}:host([collapsed]) .ui5-panel-header{border-bottom-left-radius:var(--_ui5_panel_border_radius);border-bottom-right-radius:var(--_ui5_panel_border_radius)}:host(:not([fixed]):not([collapsed])) .ui5-panel-header{border-bottom:var(--_ui5_panel_default_header_border)}[ui5-button].ui5-panel-header-button{display:flex;justify-content:center;align-items:center;min-width:0;height:100%;width:100%}.ui5-panel-header-icon-wrapper{display:flex;justify-content:center;align-items:center}.ui5-panel-header-icon-wrapper,.ui5-panel-header-icon-wrapper .ui5-panel-header-icon{color:inherit}.ui5-panel-header-icon-wrapper,[ui5-button].ui5-panel-header-button-with-icon [ui5-icon]{pointer-events:none}'};var i=globalThis&&globalThis.__decorate||function(e,t,a,d){var u=arguments.length,s=u<3?t:d===null?d=Object.getOwnPropertyDescriptor(t,a):d,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,a,d);else for(var b=e.length-1;b>=0;b--)(h=e[b])&&(s=(u<3?h(s):u>3?h(t,a,s):h(t,a))||s);return u>3&&s&&Object.defineProperty(t,a,s),s},c;let o=c=class extends x{onBeforeRendering(){this._animationRunning||(this._contentExpanded=!this.collapsed),this._hasHeader=!!this.header.length}shouldToggle(t){return this.header.length?t.classList.contains("ui5-panel-header-button"):!0}shouldNotAnimate(){return this.noAnimation||E()===A.None}_headerClick(t){this.shouldToggle(t.target)&&this._toggleOpen()}_toggleButtonClick(t){t.x===0&&t.y===0&&t.stopImmediatePropagation()}_headerKeyDown(t){this.shouldToggle(t.target)&&(y(t)&&t.preventDefault(),w(t)&&t.preventDefault())}_headerKeyUp(t){this.shouldToggle(t.target)&&(y(t)&&this._toggleOpen(),w(t)&&this._toggleOpen())}_toggleOpen(){if(this.fixed)return;if(this.collapsed=!this.collapsed,this.shouldNotAnimate()){this.fireEvent("toggle");return}this._animationRunning=!0;const t=this.getDomRef().querySelectorAll(".ui5-panel-content"),a=[];[].forEach.call(t,d=>{this.collapsed?a.push(F(d).promise()):a.push(D(d).promise())}),Promise.all(a).then(()=>{this._animationRunning=!1,this._contentExpanded=!this.collapsed,this.fireEvent("toggle")})}_headerOnTarget(t){return t.classList.contains("sapMPanelWrappingDiv")}get classes(){return{headerBtn:{"ui5-panel-header-button-animated":!this.shouldNotAnimate()}}}get toggleButtonTitle(){return c.i18nBundle.getText(S)}get expanded(){return!this.collapsed}get accRole(){return this.accessibleRole.toLowerCase()}get effectiveAccessibleName(){return typeof this.accessibleName=="string"&&this.accessibleName.length?this.accessibleName:void 0}get accInfo(){return{button:{accessibilityAttributes:{expanded:this.expanded},title:this.toggleButtonTitle,ariaLabelButton:!this.nonFocusableButton&&this.useAccessibleNameForToggleButton?this.effectiveAccessibleName:void 0},ariaExpanded:this.nonFixedInternalHeader?this.expanded:void 0,ariaControls:this.nonFixedInternalHeader?`${this._id}-content`:void 0,ariaLabelledby:this.nonFocusableButton?this.ariaLabelledbyReference:void 0,role:this.nonFixedInternalHeader?"button":void 0}}get ariaLabelledbyReference(){return this.nonFocusableButton&&this.headerText&&!this.fixed?`${this._id}-header-title`:void 0}get fixedPanelAriaLabelledbyReference(){return this.fixed&&!this.effectiveAccessibleName?`${this._id}-header-title`:void 0}get headerAriaLevel(){return this.headerLevel.slice(1)}get headerTabIndex(){return this.header.length||this.fixed?"-1":"0"}get headingWrapperAriaLevel(){return this._hasHeader?void 0:this.headerAriaLevel}get headingWrapperRole(){return this._hasHeader?void 0:"heading"}get nonFixedInternalHeader(){return!this._hasHeader&&!this.fixed}get hasHeaderOrHeaderText(){return this._hasHeader||this.headerText}get nonFocusableButton(){return!this.header.length}get styles(){return{content:{display:this._contentExpanded?"block":"none"}}}static async onDefine(){c.i18nBundle=await B("@ui5/webcomponents")}};i([r()],o.prototype,"headerText",void 0);i([r({type:Boolean})],o.prototype,"fixed",void 0);i([r({type:Boolean})],o.prototype,"collapsed",void 0);i([r({type:Boolean})],o.prototype,"noAnimation",void 0);i([r({type:v,defaultValue:v.Form})],o.prototype,"accessibleRole",void 0);i([r({type:_,defaultValue:_.H2})],o.prototype,"headerLevel",void 0);i([r()],o.prototype,"accessibleName",void 0);i([r({type:Boolean})],o.prototype,"useAccessibleNameForToggleButton",void 0);i([r({type:Boolean})],o.prototype,"_hasHeader",void 0);i([r({type:Boolean,noAttribute:!0})],o.prototype,"_contentExpanded",void 0);i([r({type:Boolean,noAttribute:!0})],o.prototype,"_animationRunning",void 0);i([L()],o.prototype,"header",void 0);o=c=i([H({tag:"ui5-panel",fastNavigation:!0,languageAware:!0,renderer:I,template:q,styles:K,dependencies:[V,C]}),k("toggle")],o);o.define();const J=o,Q=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),f=P("ui5-panel",["accessibleName","accessibleRole","headerLevel","headerText"],["collapsed","fixed","noAnimation"],["header"],["toggle"],()=>$(()=>Promise.resolve().then(()=>Q),void 0,import.meta.url));f.displayName="Panel";f.defaultProps={accessibleRole:v.Form,headerLevel:_.H2};try{f.displayName="Panel",f.__docgenInfo={description:`The \`Panel\` component is a container which has a header and a content area and is used for grouping and displaying information. It can be collapsed to save space on the screen.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Panel" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"Panel",props:{children:{defaultValue:null,description:"Defines the content of the component. The content is visible only when the component is expanded.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the component header area.

**Note:** When a header is provided, the \`headerText\` property is ignored.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onToggle:{defaultValue:null,description:"Fired when the component is expanded/collapsed by user interaction.",name:"onToggle",required:!1,type:{name:"(event: Ui5CustomEvent<PanelDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:"PanelAccessibleRole.Form"},description:"Sets the accessible ARIA role of the component. Depending on the usage, you can change the role from the default `Form` to `Region` or `Complementary`.",name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Complementary"'},{value:'"Form"'},{value:'"Region"'},{value:'"Complementary"'},{value:'"Form"'},{value:'"Region"'}]}},collapsed:{defaultValue:null,description:"Indicates whether the component is collapsed and only the header is displayed.",name:"collapsed",required:!1,type:{name:"boolean"}},fixed:{defaultValue:null,description:"Determines whether the component is in a fixed state that is not expandable/collapsible by user interaction.",name:"fixed",required:!1,type:{name:"boolean"}},headerLevel:{defaultValue:{value:"TitleLevel.H2"},description:'Defines the "aria-level" of component heading, set by the `headerText`.\n\nAvailable options are: `"H6"` to `"H1"`.',name:"headerLevel",required:!1,type:{name:"enum",value:[{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},headerText:{defaultValue:null,description:"This property is used to set the header text of the component. The text is visible in both expanded and collapsed states.\n\n**Note:** This property is overridden by the `header` slot.",name:"headerText",required:!1,type:{name:"string"}},noAnimation:{defaultValue:null,description:"Indicates whether the transition between the expanded and the collapsed state of the component is animated. By default the animation is enabled.",name:"noAnimation",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{f as P,v as a};
//# sourceMappingURL=index-e5e9cbb1.js.map
