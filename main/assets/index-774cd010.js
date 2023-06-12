import{_ as b}from"./iframe-5937d610.js";import{a as u,U as f,d as v}from"./UI5Element-b1843653.js";import{e as p,l as y,a as _,b as w,p as m,c as x,d as k,w as S}from"./withWebComponent-7b9bd1ee.js";import{s as g}from"./slot-76e48863.js";import{w as B}from"./Button-37a8c146.js";import{Q as N}from"./i18n-defaults-fca59c5d.js";function T(n,e,t){return p`<div class="ui5-badge-root"><slot name="icon"></slot>${this.hasText?D.call(this,n,e,t):void 0}<span class="ui5-hidden-text">${y(this.badgeDescription)}</span></div>`}function D(n,e,t){return p`<label class="ui5-badge-text"><bdi><slot></slot></bdi></label>`}u("@ui5/webcomponents-theming","sap_fiori_3",async()=>_);u("@ui5/webcomponents","sap_fiori_3",async()=>w);const I={packageName:"@ui5/webcomponents",fileName:"themes/Badge.css",content:`.ui5-hidden-text {
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
	vertical-align: top;
	height: 1rem;
	min-width: 1.125em;
	max-width: 100%;
	padding: 0 0.3125em;
	color: var(--sapAccentColor1);
	background: var(--sapLegendBackgroundColor1);
	border: 0.0625em solid;
	border-radius: 0.5rem;
	box-sizing: border-box;
	font-family: "72override", var(--sapFontFamily);
	font-weight: bold;
	text-align: center;
	letter-spacing: 0.0125em;
}

:host([color-scheme]:hover),
:host(:not([color-scheme]):hover) {
	cursor: var(--_ui5-badge-cursor);
}

.ui5-badge-root {
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	pointer-events: none;
}

.ui5-badge-text {
	width: 100%;
	overflow: hidden;
	white-space: nowrap;
	font-weight: inherit;
	text-overflow: ellipsis;
	line-height: 1;
	text-transform: uppercase;
	letter-spacing: inherit;
	font-size: 0.75em; /* origin from --sapFontSmallSize (0.75rem) */
}

:host(:hover) .ui5-badge-text {
	cursor: var(--_ui5-badge-cursor);
}

:host([_icon-only]) {
	padding: 0 0.1875em;
}

::slotted([ui5-icon]) {
	width: 0.75em;
	height: 0.75em;
	min-width: 0.75em;
	min-height: 0.75em;
	color: inherit;
}

:host([_has-icon]) .ui5-badge-text {
	padding-inline-start: 0.125rem;
}

/* Scheme 1 */

:host([color-scheme="1"]) {
	background-color: var(--ui5-badge-color-scheme-1-background);
	border-color: var(--ui5-badge-color-scheme-1-border);
	color: var(--ui5-badge-color-scheme-1-color);
}

/* Scheme 2 */

:host([color-scheme="2"]) {
	background-color: var(--ui5-badge-color-scheme-2-background);
	border-color: var(--ui5-badge-color-scheme-2-border);
	color: var(--ui5-badge-color-scheme-2-color);
}

/* Scheme 3 */

:host([color-scheme="3"]) {
	background-color: var(--ui5-badge-color-scheme-3-background);
	border-color: var(--ui5-badge-color-scheme-3-border);
	color: var(--ui5-badge-color-scheme-3-color);
}

/* Scheme 4 */

:host([color-scheme="4"]) {
	background-color: var(--ui5-badge-color-scheme-4-background);
	border-color: var(--ui5-badge-color-scheme-4-border);
	color: var(--ui5-badge-color-scheme-4-color);
}

/* Scheme 5 */

:host([color-scheme="5"]) {
	background-color: var(--ui5-badge-color-scheme-5-background);
	border-color: var(--ui5-badge-color-scheme-5-border);
	color: var(--ui5-badge-color-scheme-5-color);
}

/* Scheme 6 */

:host([color-scheme="6"]) {
	background-color: var(--ui5-badge-color-scheme-6-background);
	border-color: var(--ui5-badge-color-scheme-6-border);
	color: var(--ui5-badge-color-scheme-6-color);
}

/* Scheme 7 */

:host([color-scheme="7"]) {
	background-color: var(--ui5-badge-color-scheme-7-background);
	border-color: var(--ui5-badge-color-scheme-7-border);
	color: var(--ui5-badge-color-scheme-7-color);
}

/* Scheme 8 */

:host([color-scheme="8"]) {
	background-color: var(--ui5-badge-color-scheme-8-background);
	border-color: var(--ui5-badge-color-scheme-8-border);
	color: var(--ui5-badge-color-scheme-8-color);
}

/* Scheme 9 */

:host([color-scheme="9"]) {
	background-color: var(--ui5-badge-color-scheme-9-background);
	border-color: var(--ui5-badge-color-scheme-9-border);
	color: var(--ui5-badge-color-scheme-9-color);
}

/* Scheme 10 */

:host([color-scheme="10"]) {
	background-color: var(--ui5-badge-color-scheme-10-background);
	border-color: var(--ui5-badge-color-scheme-10-border);
	color: var(--ui5-badge-color-scheme-10-color);
}

/* ---Slotted Badges--- */

/* [ui5-avatar] - Badge icon styles */

/* Make icon take full width minus padding.
 [ui5-avatar] is the only component using an icon for badge,
 therefore no additional scoping is needed. */

:host([slot="badge"]) ::slotted([ui5-icon][slot="icon"]) {
	width: 100%;
	height: 100%;
	min-width: 100%;
	min-height: 100%;
}`};var a=globalThis&&globalThis.__decorate||function(n,e,t,c){var i=arguments.length,r=i<3?e:c===null?c=Object.getOwnPropertyDescriptor(e,t):c,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,c);else for(var h=n.length-1;h>=0;h--)(s=n[h])&&(r=(i<3?s(r):i>3?s(e,t,r):s(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r},l;let o=l=class extends f{static async onDefine(){l.i18nBundle=await v("@ui5/webcomponents")}onBeforeRendering(){this._hasIcon=this.hasIcon,this._iconOnly=this.iconOnly}get hasText(){return B(this.text)}get hasIcon(){return!!this.icon.length}get iconOnly(){return this.hasIcon&&!this.hasText}get badgeDescription(){return l.i18nBundle.getText(N)}};a([m({defaultValue:"1"})],o.prototype,"colorScheme",void 0);a([m({type:Boolean})],o.prototype,"_hasIcon",void 0);a([m({type:Boolean})],o.prototype,"_iconOnly",void 0);a([g({type:Node,default:!0})],o.prototype,"text",void 0);a([g()],o.prototype,"icon",void 0);o=l=a([x({tag:"ui5-badge",languageAware:!0,renderer:k,template:T,styles:I})],o);o.define();const C=o,O=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),d=S("ui5-badge",["colorScheme"],[],["icon"],[],()=>b(()=>Promise.resolve().then(()=>O),void 0,import.meta.url));d.displayName="Badge";d.defaultProps={colorScheme:"1"};try{d.displayName="Badge",d.__docgenInfo={description:`The \`Badge\` is a small non-interactive component which contains text information and color chosen from a list of predefined color schemes. It serves the purpose to attract the user attention to some piece of information (state, quantity, condition, etc.).

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Badge" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"Badge",props:{children:{defaultValue:null,description:`Defines the text of the component.
**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed in the component.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="icon"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"icon",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},colorScheme:{defaultValue:{value:"1"},description:'Defines the color scheme of the component. There are 10 predefined schemes. Each scheme applies different values for the `background-color` and `border-color`. To use one you can set a number from `"1"` to `"10"`. The `colorScheme` `"1"` will be set by default.\n\n**Note:** Color schemes have no visual representation in High Contrast Black (sap\\_belize\\_hcb) theme.',name:"colorScheme",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{d as B};
//# sourceMappingURL=index-774cd010.js.map
