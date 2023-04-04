import{_ as b}from"./iframe-838ff653.js";import{a as u,U as g,d as y}from"./UI5Element-d1d93200.js";import{e as m,l as p,a as w,b as v,p as f,c as C,d as N,w as T}from"./withWebComponent-d280b5c2.js";import{s as _}from"./slot-76e48863.js";import{g as x}from"./AriaLabelHelper-43a261ec.js";import{o as R}from"./class-map-6d48ebd3.js";import{I as D}from"./Icon-c8fd92f0.js";import{z as I,C as L}from"./i18n-defaults-254d6b69.js";const A=(e,t,o)=>m`<div class="${R(e.classes.root)}" role="region" aria-label="${p(e._getAriaLabel)}">${e._hasHeader?S():void 0}<div role="group" aria-label="${p(e._ariaCardContentLabel)}"><slot></slot></div></div>`,S=(e,t,o)=>m`<div class="ui5-card-header-root"><slot name="header"></slot></div>`;u("@ui5/webcomponents-theming","sap_fiori_3",async()=>w);u("@ui5/webcomponents","sap_fiori_3",async()=>v);const k={packageName:"@ui5/webcomponents",fileName:"themes/Card.css.ts",content:'.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block;width:100%}.ui5-card-root{width:100%;height:100%;color:var(--sapGroup_TitleTextColor);background:var(--sapTile_Background);box-shadow:var(--_ui5_card_box_shadow);border-radius:var(--_ui5_card_border-radius);border:var(--_ui5_card_border);overflow:hidden;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);box-sizing:border-box}.ui5-card-root:hover{box-shadow:var(--_ui5_card_hover_box_shadow)}.ui5-card-root:active{box-shadow:var(--_ui5_card_box_shadow)}.ui5-card-root.ui5-card--nocontent{height:auto}.ui5-card-root.ui5-card--nocontent .ui5-card-header-root{border-bottom:none}.ui5-card--nocontent ::slotted([ui5-card-header]){--_ui5_card_header_focus_bottom_radius:var(--_ui5_card_header_focus_radius)}.ui5-card-root .ui5-card-header-root{border-bottom:var(--_ui5_card_header_border)}'};var s=globalThis&&globalThis.__decorate||function(e,t,o,i){var d=arguments.length,a=d<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,o,i);else for(var c=e.length-1;c>=0;c--)(l=e[c])&&(a=(d<3?l(a):d>3?l(t,o,a):l(t,o))||a);return d>3&&a&&Object.defineProperty(t,o,a),a},n;let r=n=class extends g{get classes(){return{root:{"ui5-card-root":!0,"ui5-card--nocontent":!this.content.length}}}get _hasHeader(){return!!this.header.length}get _getAriaLabel(){const t=x(this),o=t?` ${t}`:"";return n.i18nBundle.getText(I)+o}get _ariaCardContentLabel(){return n.i18nBundle.getText(L)}static async onDefine(){n.i18nBundle=await y("@ui5/webcomponents")}};s([f()],r.prototype,"accessibleName",void 0);s([f()],r.prototype,"accessibleNameRef",void 0);s([_({type:HTMLElement,default:!0})],r.prototype,"content",void 0);s([_()],r.prototype,"header",void 0);r=n=s([C({tag:"ui5-card",languageAware:!0,renderer:N,template:A,styles:k,dependencies:[D]})],r);r.define();const E=r,O=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),h=T("ui5-card",["accessibleName","accessibleNameRef"],[],["header"],[],()=>b(()=>Promise.resolve().then(()=>O),void 0,import.meta.url));h.displayName="Card";try{h.displayName="Card",h.__docgenInfo={description:'The `Card` is a component that represents information in the form of a tile with separate header and content areas. The content area of a `Card` can be arbitrary HTML content. The header can be used through slot `header`. For which there is a `Card-header` component to achieve the card look and fill. Note: We recommend the usage of `Card-header` for the header slot, so advantage can be taken for keyboard handling, styling and accessibility.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Card" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"Card",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the header of the component.

**Note:** Use \`CardHeader\` for the intended design.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},accessibleName:{defaultValue:null,description:"Defines the accessible name of the component, which is used as the name of the card region and should be unique per card. **Note:** `accessibleName` should be always set, unless `accessibleNameRef` is set.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Defines the IDs of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{h as C};
//# sourceMappingURL=index-11c9b775.js.map
