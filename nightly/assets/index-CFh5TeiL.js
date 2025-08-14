const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./iframe-DrWv7kqk.js","./preload-helper-Ct5FWWRu.js","./iframe-CIHg7SeG.css"])))=>i.map(i=>d[i]);
import{c as u,a1 as v,_ as g,ag as A,af as T,p as w,d as x,b as R,s as d,b7 as C,m as _,ah as I,b5 as N,w as k}from"./iframe-DrWv7kqk.js";import{_ as f}from"./preload-helper-Ct5FWWRu.js";import{I as D}from"./IconDesign-DXd8PPVF.js";function E(){return u(T,{children:this.invisible?u("div",{}):this._isInteractive?u(v,{icon:this._icon,tooltip:this._text,onClick:this._onActionClick,design:g.Transparent}):u(A,{name:this._icon,accessibleName:this._text,showTooltip:!0,design:D.NonInteractive})})}w("@ui5/webcomponents-theming","sap_horizon",async()=>x);w("@ui5/webcomponents","sap_horizon",async()=>R);const S=`:host([invisible]){display:block;width:var(--_ui5-v2-13-2_button_base_min_width)}:host([_fixed]){margin-inline-start:auto}[ui5-icon]{display:flex;width:var(--_ui5-v2-13-2_button_base_min_width);height:.75rem}
`;var y=function(i,n,o,s){var t=arguments.length,e=t<3?n:s===null?s=Object.getOwnPropertyDescriptor(n,o):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(i,n,o,s);else for(var r=i.length-1;r>=0;r--)(a=i[r])&&(e=(t<3?a(e):t>3?a(n,o,e):a(n,o))||e);return t>3&&e&&Object.defineProperty(n,o,e),e};let m,b,l=class extends N{constructor(){super(...arguments),this.invisible=!1}static async showMenu(n,o){m||([m,b]=await Promise.all([f(()=>import("./iframe-DrWv7kqk.js").then(t=>t.j4),__vite__mapDeps([0,1,2]),import.meta.url).then(t=>t.default),f(()=>import("./iframe-DrWv7kqk.js").then(t=>t.j3),__vite__mapDeps([0,1,2]),import.meta.url).then(t=>t.default)])),(!this._menu||!this._menu.isConnected)&&(this._menu=new m,this._menu.addEventListener("item-click",t=>{const e=t.detail.item;this._menuItems.get(e)._fireClickEvent()}),document.body.append(this._menu));const s=n.map(t=>{const e=new b;return e.icon=t._icon,e.text=t._text,e.disabled=!t._isInteractive,this._menuItems.set(e,t),e});this._menu.replaceChildren(...s),this._menu.opener=o,this._menu.open=!0}isFixedAction(){return!1}onEnterDOM(){this.toggleAttribute("_fixed",this.isFixedAction())}_fireClickEvent(){const o=this.parentElement.parentElement;this.fireDecoratorEvent("click"),o._onRowActionClick(this)}_onActionClick(n){this._fireClickEvent(),n.stopPropagation()}get _text(){return this.getRenderInfo().text}get _icon(){return this.getRenderInfo().icon}get _isInteractive(){return this.getRenderInfo().interactive}};l._menuItems=new WeakMap;y([d({type:Boolean})],l.prototype,"invisible",void 0);l=y([C("click",{bubbles:!1}),_({renderer:I,styles:S,template:E})],l);const P=l;var h=function(i,n,o,s){var t=arguments.length,e=t<3?n:s===null?s=Object.getOwnPropertyDescriptor(n,o):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(i,n,o,s);else for(var r=i.length-1;r>=0;r--)(a=i[r])&&(e=(t<3?a(e):t>3?a(n,o,e):a(n,o))||e);return t>3&&e&&Object.defineProperty(n,o,e),e};let c=class extends P{constructor(){super(...arguments),this.icon="",this.text=""}getRenderInfo(){return{text:this.text,icon:this.icon,interactive:!0}}};h([d()],c.prototype,"icon",void 0);h([d()],c.prototype,"text",void 0);c=h([_({tag:"ui5-table-row-action"})],c);c.define();const p=k("ui5-table-row-action",["icon","text"],["invisible"],[],["click"]);p.displayName="TableRowAction";try{p.displayName="TableRowAction",p.__docgenInfo={description:`The \`TableRowAction\` component defines an action for table rows.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"TableRowAction",props:{onClick:{defaultValue:null,description:`Fired when a row action is clicked.

**Note:** Available since [v2.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<TableRowActionDomRef, never>) => void"}},icon:{defaultValue:null,description:`Defines the icon of the row action.

**Note:** For row actions to work properly, this property is mandatory.

**Note:** SAP-icons font provides numerous built-in icons. To find all the available icons, see the
[Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},invisible:{defaultValue:{value:"false"},description:`Defines the visibility of the row action.

**Note:** Invisible row actions still take up space, allowing to hide the action while maintaining its position.`,name:"invisible",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:`Defines the text of the row action.

**Note:** For row actions to work properly, this property is mandatory.`,name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{p.displayName="TableRowAction",p.__docgenInfo={description:`The \`TableRowAction\` component defines an action for table rows.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"TableRowAction",props:{onClick:{defaultValue:null,description:`Fired when a row action is clicked.

**Note:** Available since [v2.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<TableRowActionDomRef, never>) => void"}},icon:{defaultValue:null,description:`Defines the icon of the row action.

**Note:** For row actions to work properly, this property is mandatory.

**Note:** SAP-icons font provides numerous built-in icons. To find all the available icons, see the
[Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},invisible:{defaultValue:{value:"false"},description:`Defines the visibility of the row action.

**Note:** Invisible row actions still take up space, allowing to hide the action while maintaining its position.`,name:"invisible",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:`Defines the text of the row action.

**Note:** For row actions to work properly, this property is mandatory.`,name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{p as T,P as a};
