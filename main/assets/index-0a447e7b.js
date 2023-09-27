import{_ as g}from"./iframe-bb104014.js";import{r as m,U as v,n as f}from"./UI5Element-fe43d284.js";import{b as p,l as _,s as y,a as w,p as u,c as x,f as k,w as B}from"./withWebComponent-40b4b429.js";import{s as b}from"./slot-76e48863.js";import{w as N}from"./Button-ca10e4c6.js";import{r as S}from"./i18n-defaults-d5195a49.js";function T(t,e,r){return p`<div class="ui5-badge-root"><slot name="icon"></slot>${this.hasText?D.call(this,t,e,r):void 0}<span class="ui5-hidden-text">${_(this.badgeDescription)}</span></div>`}function D(t,e,r){return p`<label class="ui5-badge-text"><bdi><slot></slot></bdi></label>`}m("@ui5/webcomponents-theming","sap_fiori_3",async()=>y);m("@ui5/webcomponents","sap_fiori_3",async()=>w);const I={packageName:"@ui5/webcomponents",fileName:"themes/Badge.css",content:'.ui5-hidden-text{clip:rect(1px,1px,1px,1px);font-size:0;left:-1000px;pointer-events:none;position:absolute;top:-1000px;user-select:none}:host(:not([hidden])){background:var(--_ui5-v1-17-2-badge-default-background);border:var(--_ui5-v1-17-2-badge-border);border-color:var(--_ui5-v1-17-2-badge-default-border-color);border-radius:var(--_ui5-v1-17-2-badge-border-radius);box-sizing:border-box;color:var(--_ui5-v1-17-2-badge-default-color);display:inline-block;font-family:var(--_ui5-v1-17-2-badge-font);font-weight:var(--_ui5-v1-17-2-badge-font-weight);height:var(--_ui5-v1-17-2-badge-height);letter-spacing:.0125em;max-width:100%;min-width:1.125em;padding-inline:var(--_ui5-v1-17-2-badge-padding-inline);text-align:center;vertical-align:top}.ui5-badge-root{align-items:center;box-sizing:border-box;display:flex;height:100%;pointer-events:none;width:100%}.ui5-badge-text{font-size:var(--_ui5-v1-17-2-badge-font-size);font-weight:inherit;letter-spacing:inherit;overflow:hidden;text-overflow:ellipsis;text-transform:var(--_ui5-v1-17-2-badge-text-transform);white-space:nowrap;width:100%}:host([_icon-only]){padding:0 .1875em}::slotted([ui5-icon]){color:inherit;height:.75em;min-height:.75em;min-width:.75em;width:.75em}:host([_has-icon]) .ui5-badge-text{padding-inline-start:var(--_ui5-v1-17-2-badge-icon-gap)}:host([color-scheme="1"]){background-color:var(--ui5-v1-17-2-badge-color-scheme-1-background);border-color:var(--ui5-v1-17-2-badge-color-scheme-1-border);color:var(--ui5-v1-17-2-badge-color-scheme-1-color)}:host([color-scheme="2"]){background-color:var(--ui5-v1-17-2-badge-color-scheme-2-background);border-color:var(--ui5-v1-17-2-badge-color-scheme-2-border);color:var(--ui5-v1-17-2-badge-color-scheme-2-color)}:host([color-scheme="3"]){background-color:var(--ui5-v1-17-2-badge-color-scheme-3-background);border-color:var(--ui5-v1-17-2-badge-color-scheme-3-border);color:var(--ui5-v1-17-2-badge-color-scheme-3-color)}:host([color-scheme="4"]){background-color:var(--ui5-v1-17-2-badge-color-scheme-4-background);border-color:var(--ui5-v1-17-2-badge-color-scheme-4-border);color:var(--ui5-v1-17-2-badge-color-scheme-4-color)}:host([color-scheme="5"]){background-color:var(--ui5-v1-17-2-badge-color-scheme-5-background);border-color:var(--ui5-v1-17-2-badge-color-scheme-5-border);color:var(--ui5-v1-17-2-badge-color-scheme-5-color)}:host([color-scheme="6"]){background-color:var(--ui5-v1-17-2-badge-color-scheme-6-background);border-color:var(--ui5-v1-17-2-badge-color-scheme-6-border);color:var(--ui5-v1-17-2-badge-color-scheme-6-color)}:host([color-scheme="7"]){background-color:var(--ui5-v1-17-2-badge-color-scheme-7-background);border-color:var(--ui5-v1-17-2-badge-color-scheme-7-border);color:var(--ui5-v1-17-2-badge-color-scheme-7-color)}:host([color-scheme="8"]){background-color:var(--ui5-v1-17-2-badge-color-scheme-8-background);border-color:var(--ui5-v1-17-2-badge-color-scheme-8-border);color:var(--ui5-v1-17-2-badge-color-scheme-8-color)}:host([color-scheme="9"]){background-color:var(--ui5-v1-17-2-badge-color-scheme-9-background);border-color:var(--ui5-v1-17-2-badge-color-scheme-9-border);color:var(--ui5-v1-17-2-badge-color-scheme-9-color)}:host([color-scheme="10"]){background-color:var(--ui5-v1-17-2-badge-color-scheme-10-background);border-color:var(--ui5-v1-17-2-badge-color-scheme-10-border);color:var(--ui5-v1-17-2-badge-color-scheme-10-color)}:host([slot=badge]) ::slotted([ui5-icon][slot=icon]){height:100%;min-height:100%;min-width:100%;width:100%}'};var a=globalThis&&globalThis.__decorate||function(t,e,r,i){var c=arguments.length,n=c<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var h=t.length-1;h>=0;h--)(s=t[h])&&(n=(c<3?s(n):c>3?s(e,r,n):s(e,r))||n);return c>3&&n&&Object.defineProperty(e,r,n),n},l;let o=l=class extends v{static async onDefine(){l.i18nBundle=await f("@ui5/webcomponents")}onBeforeRendering(){this._hasIcon=this.hasIcon,this._iconOnly=this.iconOnly}get hasText(){return N(this.text)}get hasIcon(){return!!this.icon.length}get iconOnly(){return this.hasIcon&&!this.hasText}get badgeDescription(){return l.i18nBundle.getText(S)}};a([u({defaultValue:"1"})],o.prototype,"colorScheme",void 0);a([u({type:Boolean})],o.prototype,"_hasIcon",void 0);a([u({type:Boolean})],o.prototype,"_iconOnly",void 0);a([b({type:Node,default:!0})],o.prototype,"text",void 0);a([b()],o.prototype,"icon",void 0);o=l=a([x({tag:"ui5-badge",languageAware:!0,renderer:k,template:T,styles:I})],o);o.define();const C=o,O=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),d=B("ui5-badge",["colorScheme"],[],["icon"],[],()=>g(()=>Promise.resolve().then(()=>O),void 0,import.meta.url));d.displayName="Badge";d.defaultProps={colorScheme:"1"};try{d.displayName="Badge",d.__docgenInfo={description:`The \`Badge\` is a small non-interactive component which contains text information and color chosen from a list of predefined color schemes. It serves the purpose to attract the user attention to some piece of information (state, quantity, condition, etc.).

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Badge)`,displayName:"Badge",props:{children:{defaultValue:null,description:`Defines the text of the component.
**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed in the component.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="icon"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"icon",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},colorScheme:{defaultValue:{value:"1"},description:'Defines the color scheme of the component. There are 10 predefined schemes. To use one you can set a number from `"1"` to `"10"`. The `colorScheme` `"1"` will be set by default.\n\n**Note:** Color schemes have no visual representation in High Contrast Black (sap\\_belize\\_hcb) theme.',name:"colorScheme",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{d as B};
//# sourceMappingURL=index-0a447e7b.js.map
