import{_ as b}from"./iframe-933e9f22.js";import{a as p,U as g,d as v}from"./UI5Element-2e105c8a.js";import{e as m,l as u,a as y,b as w,p as f,c as C,d as N,w as x}from"./withWebComponent-7b9bd1ee.js";import{s as _}from"./slot-76e48863.js";import{g as T}from"./AriaLabelHelper-43a261ec.js";import{o as R}from"./class-map-6a9bd920.js";import{I as D}from"./Icon-f65ad4fd.js";import{H as L,J as I}from"./i18n-defaults-fca59c5d.js";function A(n,e,t){return m`<div class="${R(this.classes.root)}" role="region" aria-label="${u(this._getAriaLabel)}">${this._hasHeader?S.call(this,n,e,t):void 0}<div role="group" aria-label="${u(this._ariaCardContentLabel)}"><slot></slot></div></div>`}function S(n,e,t){return m`<div class="ui5-card-header-root"><slot name="header"></slot></div>`}p("@ui5/webcomponents-theming","sap_fiori_3",async()=>y);p("@ui5/webcomponents","sap_fiori_3",async()=>w);const k={packageName:"@ui5/webcomponents",fileName:"themes/Card.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}

:host(:not([hidden])) {
	display: inline-block;
	width: 100%;
}

.ui5-card-root {
	width: 100%;
	height: 100%;
	color: var(--sapGroup_TitleTextColor);
	background: var(--sapTile_Background);
	box-shadow: var(--_ui5_card_box_shadow);
	border-radius: var(--_ui5_card_border-radius);
	border: var(--_ui5_card_border);
	overflow: hidden;
	font-family: "72override", var(--sapFontFamily);
	font-size: var(--sapFontSize);
	box-sizing: border-box;
}

.ui5-card-root.ui5-card--interactive:hover {
	box-shadow: var(--_ui5_card_hover_box_shadow);
}

.ui5-card-root.ui5-card--interactive:active {
	box-shadow: var(--_ui5_card_box_shadow);
}

/* Card with no content */

.ui5-card-root.ui5-card--nocontent {
	height: auto;
}

.ui5-card-root.ui5-card--nocontent .ui5-card-header-root  {
    border-bottom: none;
}

.ui5-card--nocontent ::slotted([ui5-card-header]) {
	--_ui5_card_header_focus_bottom_radius: var(--_ui5_card_header_focus_radius);
}

.ui5-card-root .ui5-card-header-root {
	border-bottom: var(--_ui5_card_header_border);
}
`};var i=globalThis&&globalThis.__decorate||function(n,e,t,s){var d=arguments.length,a=d<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(n,e,t,s);else for(var c=n.length-1;c>=0;c--)(l=n[c])&&(a=(d<3?l(a):d>3?l(e,t,a):l(e,t))||a);return d>3&&a&&Object.defineProperty(e,t,a),a},r;let o=r=class extends g{get classes(){return{root:{"ui5-card-root":!0,"ui5-card--interactive":this._hasHeader&&this.header[0].interactive,"ui5-card--nocontent":!this.content.length}}}get _hasHeader(){return!!this.header.length}get _getAriaLabel(){const e=T(this),t=e?` ${e}`:"";return r.i18nBundle.getText(L)+t}get _ariaCardContentLabel(){return r.i18nBundle.getText(I)}static async onDefine(){r.i18nBundle=await v("@ui5/webcomponents")}};i([f()],o.prototype,"accessibleName",void 0);i([f()],o.prototype,"accessibleNameRef",void 0);i([_({type:HTMLElement,default:!0})],o.prototype,"content",void 0);i([_({type:HTMLElement,invalidateOnChildChange:!0})],o.prototype,"header",void 0);o=r=i([C({tag:"ui5-card",languageAware:!0,renderer:N,template:A,styles:k,dependencies:[D]})],o);o.define();const E=o,O=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),h=x("ui5-card",["accessibleName","accessibleNameRef"],[],["header"],[],()=>b(()=>Promise.resolve().then(()=>O),void 0,import.meta.url));h.displayName="Card";try{h.displayName="Card",h.__docgenInfo={description:'The `Card` is a component that represents information in the form of a tile with separate header and content areas. The content area of a `Card` can be arbitrary HTML content. The header can be used through slot `header`. For which there is a `Card-header` component to achieve the card look and feel. Note: We recommend the usage of `Card-header` for the header slot, so advantage can be taken for keyboard handling, styling and accessibility.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Card" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"Card",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the header of the component.

**Note:** Use \`CardHeader\` for the intended design.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},accessibleName:{defaultValue:null,description:"Defines the accessible name of the component, which is used as the name of the card region and should be unique per card. **Note:** `accessibleName` should be always set, unless `accessibleNameRef` is set.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Defines the IDs of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{h as C};
//# sourceMappingURL=index-894d739c.js.map
