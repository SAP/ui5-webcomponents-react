import{p as s,q as n,v as h,a as _,s as y,b as r,m as w,y as x,S as T,F as H,w as N}from"./withWebComponent-DpVKsRHi.js";import{b as k}from"./event-BX8i4Y_x.js";import{d as $}from"./slot-_4yKMUwC.js";import{u as I,b as A}from"./slideUp-By1UZlL6.js";import{b as g,i as v}from"./Keys-DoZifIQ_.js";import{d as R}from"./AnimationMode-CZTUXk63.js";import{i as C}from"./i18n-DEVDpFvK.js";import"./slim-arrow-right-Bid5UasE.js";import{a as B}from"./Button-CzXV-qq-.js";import{I as D}from"./Icon-CrKv37md.js";import{s as F}from"./style-map-Bigav4TG.js";import{o as c}from"./class-map-CAgcI9af.js";import{P as L}from"./i18n-defaults-CMHHS2wK.js";import{s as S}from"./parameters-bundle.css-R51uC6BG.js";function q(a,e,t){return s`<div class="ui5-panel-root" role="${n(this.accRole)}" aria-label="${n(this.effectiveAccessibleName)}" aria-labelledby="${n(this.fixedPanelAriaLabelledbyReference)}">${this.hasHeaderOrHeaderText?P.call(this,a,e,t):void 0}<div class="ui5-panel-content" id="${n(this._id)}-content" tabindex="-1" style="${F(this.styles.content)}" part="content"><slot></slot></div></div>`}function P(a,e,t){return s`<div class="ui5-panel-heading-wrapper${c(this.classes.stickyHeaderClass)}" role="${n(this.headingWrapperRole)}" aria-level="${n(this.headingWrapperAriaLevel)}"><div @click="${this._headerClick}" @keydown="${this._headerKeyDown}" @keyup="${this._headerKeyUp}" class="ui5-panel-header" tabindex="${n(this.headerTabIndex)}" role="${n(this.accInfo.role)}" aria-expanded="${n(this.accInfo.ariaExpanded)}" aria-controls="${n(this.accInfo.ariaControls)}" aria-labelledby="${n(this.accInfo.ariaLabelledby)}" part="header">${this.fixed?void 0:V.call(this,a,e,t)}${this._hasHeader?O.call(this,a,e,t):E.call(this,a,e,t)}</div></div>`}function V(a,e,t){return s`<div class="ui5-panel-header-button-root">${this._hasHeader?W.call(this,a,e,t):U.call(this,a,e,t)}</div>`}function W(a,e,t){return t?s`<${h("ui5-button",e,t)} design="Transparent" class="ui5-panel-header-button ui5-panel-header-button-with-icon" @click="${this._toggleButtonClick}" .accessibilityAttributes=${n(this.accInfo.button.accessibilityAttributes)} tooltip="${n(this.accInfo.button.title)}" accessible-name="${n(this.accInfo.button.ariaLabelButton)}"><div class="ui5-panel-header-icon-wrapper"><${h("ui5-icon",e,t)} class="ui5-panel-header-icon ${c(this.classes.headerBtn)}" name="slim-arrow-right"></${h("ui5-icon",e,t)}></div></${h("ui5-button",e,t)}>`:s`<ui5-button design="Transparent" class="ui5-panel-header-button ui5-panel-header-button-with-icon" @click="${this._toggleButtonClick}" .accessibilityAttributes=${n(this.accInfo.button.accessibilityAttributes)} tooltip="${n(this.accInfo.button.title)}" accessible-name="${n(this.accInfo.button.ariaLabelButton)}"><div class="ui5-panel-header-icon-wrapper"><ui5-icon class="ui5-panel-header-icon ${c(this.classes.headerBtn)}" name="slim-arrow-right"></ui5-icon></div></ui5-button>`}function U(a,e,t){return t?s`<${h("ui5-icon",e,t)} class="ui5-panel-header-button ui5-panel-header-icon ${c(this.classes.headerBtn)}" name="slim-arrow-right" show-tooltip accessible-name="${n(this.toggleButtonTitle)}"></${h("ui5-icon",e,t)}>`:s`<ui5-icon class="ui5-panel-header-button ui5-panel-header-icon ${c(this.classes.headerBtn)}" name="slim-arrow-right" show-tooltip accessible-name="${n(this.toggleButtonTitle)}"></ui5-icon>`}function O(a,e,t){return s`<slot name="header"></slot>`}function E(a,e,t){return s`<div id="${n(this._id)}-header-title" class="ui5-panel-header-title">${n(this.headerText)}</div>`}_("@ui5/webcomponents-theming","sap_horizon",async()=>y);_("@ui5/webcomponents","sap_horizon",async()=>S);const z={packageName:"@ui5/webcomponents",fileName:"themes/Panel.css.ts",content:`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:block}:host{font-family:"72override",var(--sapFontFamily);background-color:var(--sapGroup_TitleBackground);border-radius:var(--_ui5-v2-4-0_panel_border_radius)}:host(:not([collapsed])){border-bottom:var(--_ui5-v2-4-0_panel_border_bottom)}:host([fixed]) .ui5-panel-header{padding-left:1rem}.ui5-panel-header{min-height:var(--_ui5-v2-4-0_panel_header_height);width:100%;position:relative;display:flex;justify-content:flex-start;align-items:center;outline:none;box-sizing:border-box;padding-right:var(--_ui5-v2-4-0_panel_header_padding_right);font-family:"72override",var(--sapFontHeaderFamily);font-size:var(--sapGroup_Title_FontSize);font-weight:400;color:var(--sapGroup_TitleTextColor)}.ui5-panel-header-icon{color:var(--_ui5-v2-4-0_panel_icon_color)}.ui5-panel-header-button-animated{transition:transform .4s ease-out}:host(:not([_has-header]):not([fixed])) .ui5-panel-header{cursor:pointer}:host(:not([_has-header]):not([fixed])) .ui5-panel-header:focus:after{content:"";position:absolute;pointer-events:none;z-index:2;border:var(--_ui5-v2-4-0_panel_focus_border);border-radius:var(--_ui5-v2-4-0_panel_border_radius);top:var(--_ui5-v2-4-0_panel_focus_offset);bottom:var(--_ui5-v2-4-0_panel_focus_bottom_offset);left:var(--_ui5-v2-4-0_panel_focus_offset);right:var(--_ui5-v2-4-0_panel_focus_offset)}:host(:not([collapsed]):not([_has-header]):not([fixed])) .ui5-panel-header:focus:after{border-radius:var(--_ui5-v2-4-0_panel_border_radius_expanded)}:host(:not([collapsed])) .ui5-panel-header-button:not(.ui5-panel-header-button-with-icon),:host(:not([collapsed])) .ui5-panel-header-icon-wrapper [ui5-icon]{transform:var(--_ui5-v2-4-0_panel_toggle_btn_rotation)}:host([fixed]) .ui5-panel-header-title{width:100%}.ui5-panel-heading-wrapper.ui5-panel-heading-wrapper-sticky{position:sticky;top:0;background-color:var(--_ui5-v2-4-0_panel_header_background_color);z-index:100;border-radius:var(--_ui5-v2-4-0_panel_border_radius)}.ui5-panel-header-title{width:calc(100% - var(--_ui5-v2-4-0_panel_button_root_width));overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ui5-panel-content{padding:var(--_ui5-v2-4-0_panel_content_padding);background-color:var(--sapGroup_ContentBackground);outline:none;border-bottom-left-radius:var(--_ui5-v2-4-0_panel_border_radius);border-bottom-right-radius:var(--_ui5-v2-4-0_panel_border_radius);overflow:auto}.ui5-panel-header-button-root{display:flex;justify-content:center;align-items:center;flex-shrink:0;width:var(--_ui5-v2-4-0_panel_button_root_width);height:var(--_ui5-v2-4-0_panel_button_root_height);padding:var(--_ui5-v2-4-0_panel_header_button_wrapper_padding);box-sizing:border-box}:host([fixed]:not([collapsed]):not([_has-header])) .ui5-panel-header,:host([collapsed]) .ui5-panel-header{border-bottom:.0625rem solid var(--sapGroup_TitleBorderColor)}:host([collapsed]) .ui5-panel-header{border-bottom-left-radius:var(--_ui5-v2-4-0_panel_border_radius);border-bottom-right-radius:var(--_ui5-v2-4-0_panel_border_radius)}:host(:not([fixed]):not([collapsed])) .ui5-panel-header{border-bottom:var(--_ui5-v2-4-0_panel_default_header_border)}[ui5-button].ui5-panel-header-button{display:flex;justify-content:center;align-items:center;min-width:initial;height:100%;width:100%}.ui5-panel-header-icon-wrapper{display:flex;justify-content:center;align-items:center}.ui5-panel-header-icon-wrapper,.ui5-panel-header-icon-wrapper .ui5-panel-header-icon{color:inherit}.ui5-panel-header-icon-wrapper,[ui5-button].ui5-panel-header-button-with-icon [ui5-icon]{pointer-events:none}.ui5-panel-root{height:100%;display:flex;flex-direction:column}
`};var i=function(a,e,t,d){var u=arguments.length,l=u<3?e:d===null?d=Object.getOwnPropertyDescriptor(e,t):d,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(a,e,t,d);else for(var f=a.length-1;f>=0;f--)(m=a[f])&&(l=(u<3?m(l):u>3?m(e,t,l):m(e,t))||l);return u>3&&l&&Object.defineProperty(e,t,l),l},b;let o=b=class extends T{constructor(){super(...arguments),this.fixed=!1,this.collapsed=!1,this.noAnimation=!1,this.accessibleRole="Form",this.headerLevel="H2",this.stickyHeader=!1,this.useAccessibleNameForToggleButton=!1,this._hasHeader=!1,this._contentExpanded=!1,this._animationRunning=!1}onBeforeRendering(){this._animationRunning||(this._contentExpanded=!this.collapsed),this._hasHeader=!!this.header.length}shouldToggle(e){return this.header.length?e.classList.contains("ui5-panel-header-button"):!0}shouldNotAnimate(){return this.noAnimation||R()===H.None}_headerClick(e){this.shouldToggle(e.target)&&this._toggleOpen()}_toggleButtonClick(e){e.x===0&&e.y===0&&e.stopImmediatePropagation()}_headerKeyDown(e){this.shouldToggle(e.target)&&(g(e)&&e.preventDefault(),v(e)&&e.preventDefault())}_headerKeyUp(e){this.shouldToggle(e.target)&&(g(e)&&this._toggleOpen(),v(e)&&this._toggleOpen())}_toggleOpen(){if(this.fixed)return;if(this.collapsed=!this.collapsed,this.shouldNotAnimate()){this.fireDecoratorEvent("toggle");return}this._animationRunning=!0;const e=this.getDomRef().querySelectorAll(".ui5-panel-content"),t=[];[].forEach.call(e,d=>{this.collapsed?t.push(I(d).promise()):t.push(A(d).promise())}),Promise.all(t).then(()=>{this._animationRunning=!1,this._contentExpanded=!this.collapsed,this.fireDecoratorEvent("toggle")})}_headerOnTarget(e){return e.classList.contains("sapMPanelWrappingDiv")}get classes(){return{headerBtn:{"ui5-panel-header-button-animated":!this.shouldNotAnimate()},stickyHeaderClass:{"ui5-panel-heading-wrapper-sticky":this.stickyHeader}}}get toggleButtonTitle(){return b.i18nBundle.getText(L)}get expanded(){return!this.collapsed}get accRole(){return this.accessibleRole.toLowerCase()}get effectiveAccessibleName(){return typeof this.accessibleName=="string"&&this.accessibleName.length?this.accessibleName:void 0}get accInfo(){return{button:{accessibilityAttributes:{expanded:this.expanded},title:this.toggleButtonTitle,ariaLabelButton:!this.nonFocusableButton&&this.useAccessibleNameForToggleButton?this.effectiveAccessibleName:void 0},ariaExpanded:this.nonFixedInternalHeader?this.expanded:void 0,ariaControls:this.nonFixedInternalHeader?`${this._id}-content`:void 0,ariaLabelledby:this.nonFocusableButton?this.ariaLabelledbyReference:void 0,role:this.nonFixedInternalHeader?"button":void 0}}get ariaLabelledbyReference(){return this.nonFocusableButton&&this.headerText&&!this.fixed?`${this._id}-header-title`:void 0}get fixedPanelAriaLabelledbyReference(){return this.fixed&&!this.effectiveAccessibleName?`${this._id}-header-title`:void 0}get headerAriaLevel(){return this.headerLevel.slice(1)}get headerTabIndex(){return this.header.length||this.fixed?"-1":"0"}get headingWrapperAriaLevel(){return this._hasHeader?void 0:this.headerAriaLevel}get headingWrapperRole(){return this._hasHeader?void 0:"heading"}get nonFixedInternalHeader(){return!this._hasHeader&&!this.fixed}get hasHeaderOrHeaderText(){return this._hasHeader||this.headerText}get nonFocusableButton(){return!this.header.length}get styles(){return{content:{display:this._contentExpanded?"block":"none"}}}};i([r()],o.prototype,"headerText",void 0);i([r({type:Boolean})],o.prototype,"fixed",void 0);i([r({type:Boolean})],o.prototype,"collapsed",void 0);i([r({type:Boolean})],o.prototype,"noAnimation",void 0);i([r()],o.prototype,"accessibleRole",void 0);i([r()],o.prototype,"headerLevel",void 0);i([r()],o.prototype,"accessibleName",void 0);i([r({type:Boolean})],o.prototype,"stickyHeader",void 0);i([r({type:Boolean})],o.prototype,"useAccessibleNameForToggleButton",void 0);i([r({type:Boolean})],o.prototype,"_hasHeader",void 0);i([r({type:Boolean,noAttribute:!0})],o.prototype,"_contentExpanded",void 0);i([r({type:Boolean,noAttribute:!0})],o.prototype,"_animationRunning",void 0);i([$()],o.prototype,"header",void 0);i([C("@ui5/webcomponents")],o,"i18nBundle",void 0);o=b=i([w({tag:"ui5-panel",fastNavigation:!0,languageAware:!0,renderer:x,template:q,styles:z,dependencies:[B,D]}),k("toggle",{bubbles:!0})],o);o.define();const p=N("ui5-panel",["accessibleName","accessibleRole","headerLevel","headerText"],["collapsed","fixed","noAnimation","stickyHeader"],["header"],["toggle"]);p.displayName="Panel";try{p.displayName="Panel",p.__docgenInfo={description:`The \`Panel\` component is a container which has a header and a
content area and is used
for grouping and displaying information. It can be collapsed to save space on the screen.

### Guidelines:

- Nesting two or more panels is not recommended.
- Do not stack too many panels on one page.

### Structure
The panel's header area consists of a title bar with a header text or custom header.

The header is clickable and can be used to toggle between the expanded and collapsed state. It includes an icon which rotates depending on the state.

The custom header can be set through the \`header\` slot and it may contain arbitraray content, such as: title, buttons or any other HTML elements.

The content area can contain an arbitrary set of controls.

**Note:** The custom header is not clickable out of the box, but in this case the icon is interactive and allows to show/hide the content area.

### Responsive Behavior

- If the width of the panel is set to 100% (default), the panel and its children are
resized responsively,
depending on its parent container.
- If the panel has a fixed height, it will take up the space even if the panel is
collapsed.
- When the panel is expandable (the \`fixed\` property is set to \`false\`),
an arrow icon (pointing to the right) appears in front of the header.
- When the animation is activated, expand/collapse uses a smooth animation to open or
close the content area.
- When the panel expands/collapses, the arrow icon rotates 90 degrees
clockwise/counter-clockwise.

### Keyboard Handling

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Panel",props:{children:{defaultValue:null,description:"Defines the content of the component. The content is visible only when the component is expanded.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the component header area.

**Note:** When a header is provided, the \`headerText\` property is ignored.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},onToggle:{defaultValue:null,description:`Fired when the component is expanded/collapsed by user interaction.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onToggle",required:!1,type:{name:"(event: Ui5CustomEvent<PanelDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Form"'},description:"Sets the accessible ARIA role of the component.\nDepending on the usage, you can change the role from the default `Form`\nto `Region` or `Complementary`.",name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Complementary"'},{value:'"Form"'},{value:'"Region"'},{value:'"Complementary"'},{value:'"Form"'},{value:'"Region"'}]}},collapsed:{defaultValue:{value:"false"},description:"Indicates whether the component is collapsed and only the header is displayed.",name:"collapsed",required:!1,type:{name:"boolean"}},fixed:{defaultValue:{value:"false"},description:`Determines whether the component is in a fixed state that is not
expandable/collapsible by user interaction.`,name:"fixed",required:!1,type:{name:"boolean"}},headerLevel:{defaultValue:{value:'"H2"'},description:'Defines the "aria-level" of component heading,\nset by the `headerText`.',name:"headerLevel",required:!1,type:{name:"enum",value:[{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},headerText:{defaultValue:{value:"undefined"},description:`This property is used to set the header text of the component.
The text is visible in both expanded and collapsed states.

**Note:** This property is overridden by the \`header\` slot.`,name:"headerText",required:!1,type:{name:"string"}},noAnimation:{defaultValue:{value:"false"},description:"Indicates whether the transition between the expanded and the collapsed state of the component is animated. By default the animation is enabled.",name:"noAnimation",required:!1,type:{name:"boolean"}},stickyHeader:{defaultValue:{value:"false"},description:`Indicates whether the Panel header is sticky or not.
If stickyHeader is set to true, then whenever you scroll the content or
the application, the header of the panel will be always visible and
a solid color will be used for its design.`,name:"stickyHeader",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{p.displayName="Panel",p.__docgenInfo={description:`The \`Panel\` component is a container which has a header and a
content area and is used
for grouping and displaying information. It can be collapsed to save space on the screen.

### Guidelines:

- Nesting two or more panels is not recommended.
- Do not stack too many panels on one page.

### Structure
The panel's header area consists of a title bar with a header text or custom header.

The header is clickable and can be used to toggle between the expanded and collapsed state. It includes an icon which rotates depending on the state.

The custom header can be set through the \`header\` slot and it may contain arbitraray content, such as: title, buttons or any other HTML elements.

The content area can contain an arbitrary set of controls.

**Note:** The custom header is not clickable out of the box, but in this case the icon is interactive and allows to show/hide the content area.

### Responsive Behavior

- If the width of the panel is set to 100% (default), the panel and its children are
resized responsively,
depending on its parent container.
- If the panel has a fixed height, it will take up the space even if the panel is
collapsed.
- When the panel is expandable (the \`fixed\` property is set to \`false\`),
an arrow icon (pointing to the right) appears in front of the header.
- When the animation is activated, expand/collapse uses a smooth animation to open or
close the content area.
- When the panel expands/collapses, the arrow icon rotates 90 degrees
clockwise/counter-clockwise.

### Keyboard Handling

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Panel",props:{children:{defaultValue:null,description:"Defines the content of the component. The content is visible only when the component is expanded.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the component header area.

**Note:** When a header is provided, the \`headerText\` property is ignored.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},onToggle:{defaultValue:null,description:`Fired when the component is expanded/collapsed by user interaction.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onToggle",required:!1,type:{name:"(event: Ui5CustomEvent<PanelDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Form"'},description:"Sets the accessible ARIA role of the component.\nDepending on the usage, you can change the role from the default `Form`\nto `Region` or `Complementary`.",name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Complementary"'},{value:'"Form"'},{value:'"Region"'},{value:'"Complementary"'},{value:'"Form"'},{value:'"Region"'}]}},collapsed:{defaultValue:{value:"false"},description:"Indicates whether the component is collapsed and only the header is displayed.",name:"collapsed",required:!1,type:{name:"boolean"}},fixed:{defaultValue:{value:"false"},description:`Determines whether the component is in a fixed state that is not
expandable/collapsible by user interaction.`,name:"fixed",required:!1,type:{name:"boolean"}},headerLevel:{defaultValue:{value:'"H2"'},description:'Defines the "aria-level" of component heading,\nset by the `headerText`.',name:"headerLevel",required:!1,type:{name:"enum",value:[{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},headerText:{defaultValue:{value:"undefined"},description:`This property is used to set the header text of the component.
The text is visible in both expanded and collapsed states.

**Note:** This property is overridden by the \`header\` slot.`,name:"headerText",required:!1,type:{name:"string"}},noAnimation:{defaultValue:{value:"false"},description:"Indicates whether the transition between the expanded and the collapsed state of the component is animated. By default the animation is enabled.",name:"noAnimation",required:!1,type:{name:"boolean"}},stickyHeader:{defaultValue:{value:"false"},description:`Indicates whether the Panel header is sticky or not.
If stickyHeader is set to true, then whenever you scroll the content or
the application, the header of the panel will be always visible and
a solid color will be used for its design.`,name:"stickyHeader",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{p as P};
