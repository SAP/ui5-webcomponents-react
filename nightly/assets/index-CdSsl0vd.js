import{_ as u}from"./iframe-D7Fy-zJJ.js";import{f as c,s as h,a as d,m as f,k as y,h as b,I as _,w as x}from"./withWebComponent-Bw_l6Ewh.js";import{d as w}from"./utils-BHgxP_Sc.js";import{s as g}from"./parameters-bundle.css-BFbT_feV.js";c("@ui5/webcomponents-theming","sap_horizon",async()=>h);c("@ui5/webcomponents","sap_horizon",async()=>g);const T={packageName:"@ui5/webcomponents",fileName:"themes/Text.css.ts",content:`:host{display:inline-block;max-width:100%;font-size:var(--sapFontSize);font-family:var(--sapFontFamily);color:var(--sapTextColor);line-height:normal;white-space:pre-line;word-wrap:break-word;cursor:text}:host([max-lines]){display:-webkit-box;-webkit-line-clamp:var(--_ui5-v2-0-1_text_max_lines);line-clamp:var(--_ui5-v2-0-1_text_max_lines);-webkit-box-orient:vertical;overflow:hidden;white-space:normal}
`};var m=function(t,n,o,s){var r=arguments.length,e=r<3?n:s===null?s=Object.getOwnPropertyDescriptor(n,o):s,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(t,n,o,s);else for(var p=t.length-1;p>=0;p--)(l=t[p])&&(e=(r<3?l(e):r>3?l(n,o,e):l(n,o))||e);return r>3&&e&&Object.defineProperty(n,o,e),e};let i=class extends _{constructor(){super(...arguments),this.maxLines=1/0}onBeforeRendering(){this.style.setProperty(w("--_ui5_text_max_lines"),`${this.maxLines}`)}};m([d({type:Number})],i.prototype,"maxLines",void 0);i=m([f({tag:"ui5-text",renderer:y,template:()=>b`<bdi><slot></slot></bdi>`,styles:T})],i);i.define();const v=i,N=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),a=x("ui5-text",["maxLines"],[],[],[],()=>u(()=>Promise.resolve().then(()=>N),void 0,import.meta.url));a.displayName="Text";try{a.displayName="Text",a.__docgenInfo={description:`<h3>Overview</h3>

The \`Text\` component displays text that can be used in any content area of an application.

<h3>Usage</h3>

- Use the \`Text\` if you want to display text inside a form, table, or any other content area.
- Do not use the \`Text\` if you need to reference input type of components (use ui5-label).

<h3>Responsive behavior</h3>

The \`Text\` component is fully adaptive to all screen sizes.
By default, the text will wrap when the space is not enough.
In addition, the component supports truncation via the <code>max-lines</code> property,
by defining the number of lines the text should wrap before start truncating.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/Text";</code>

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Text",props:{children:{defaultValue:null,description:"Defines the text of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},maxLines:{defaultValue:{value:"Infinity"},description:"Defines the number of lines the text should wrap before it truncates.",name:"maxLines",required:!1,type:{name:"number"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{a.displayName="Text",a.__docgenInfo={description:`<h3>Overview</h3>

The \`Text\` component displays text that can be used in any content area of an application.

<h3>Usage</h3>

- Use the \`Text\` if you want to display text inside a form, table, or any other content area.
- Do not use the \`Text\` if you need to reference input type of components (use ui5-label).

<h3>Responsive behavior</h3>

The \`Text\` component is fully adaptive to all screen sizes.
By default, the text will wrap when the space is not enough.
In addition, the component supports truncation via the <code>max-lines</code> property,
by defining the number of lines the text should wrap before start truncating.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/Text";</code>

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Text",props:{children:{defaultValue:null,description:"Defines the text of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},maxLines:{defaultValue:{value:"Infinity"},description:"Defines the number of lines the text should wrap before it truncates.",name:"maxLines",required:!1,type:{name:"number"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{a as T};
