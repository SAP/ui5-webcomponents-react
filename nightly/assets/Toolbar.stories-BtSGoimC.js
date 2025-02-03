import{j as i}from"./jsx-runtime-CLpGMVip.js";import{r as R}from"./index-D23YZj_x.js";import{P as M}from"./index-CkeY3nPI.js";import{r as D,c as P,a as x,T as O}from"./index-DmMk_IA-.js";import{j as d,s as c,m as _,w as T,I as z}from"./withWebComponent-DIBLIPif.js";import{d as k}from"./slot-_4yKMUwC.js";import{l as N}from"./event-strict-DgQLNDEV.js";import{S as B}from"./Select-_swTkU_j.js";import{O as L}from"./Option-BPmGyfjW.js";function H(){return d(B,{class:"ui5-tb-item",style:this.styles,"data-ui5-external-action-item-id":this._id,valueState:this.valueState,disabled:this.disabled,accessibleName:this.accessibleName,accessibleNameRef:this.accessibleNameRef,children:this.options.map((t,e)=>d(L,{selected:t.selected,"data-ui5-external-action-item-index":e,children:t.textContent}))})}function G(){return d(B,{class:"ui5-tb-popover-item","data-ui5-external-action-item-id":this._id,valueState:this.valueState,disabled:this.disabled,accessibleName:this.accessibleName,accessibleNameRef:this.accessibleNameRef,children:this.options.map((t,e)=>d(L,{selected:t.selected,"data-ui5-external-action-item-index":e,children:t.textContent}))})}var h=function(t,e,n,a){var l=arguments.length,o=l<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(o=(l<3?r(o):l>3?r(e,n,o):r(e,n))||o);return l>3&&o&&Object.defineProperty(e,n,o),o};let u=class extends P{static get toolbarTemplate(){return H}static get toolbarPopoverTemplate(){return G}get subscribedEvents(){const e=new Map;return e.set("click",{preventClosing:!0}),e.set("ui5-change",{preventClosing:!1}),e.set("ui5-open",{preventClosing:!0}),e.set("ui5-close",{preventClosing:!0}),e}constructor(){super(),this.valueState="None",this.disabled=!1,this._onEvent=this._onEventHandler.bind(this)}onEnterDOM(){this.attachEventListeners()}onExitDOM(){this.detachEventListeners()}attachEventListeners(){[...this.subscribedEvents.keys()].forEach(e=>{this.addEventListener(e,this._onEvent)})}detachEventListeners(){[...this.subscribedEvents.keys()].forEach(e=>{this.removeEventListener(e,this._onEvent)})}_onEventHandler(e){if(e.type==="ui5-change"){const n=e.detail.selectedOption,a=Number(n==null?void 0:n.getAttribute("data-ui5-external-action-item-index"));this.options.forEach((l,o)=>{o===a?l.setAttribute("selected",""):l.removeAttribute("selected")})}}get styles(){return{width:this.width}}};h([c()],u.prototype,"width",void 0);h([k({default:!0,type:HTMLElement,invalidateOnChildChange:!0})],u.prototype,"options",void 0);h([c()],u.prototype,"valueState",void 0);h([c({type:Boolean})],u.prototype,"disabled",void 0);h([c()],u.prototype,"accessibleName",void 0);h([c()],u.prototype,"accessibleNameRef",void 0);u=h([_({tag:"ui5-toolbar-select"}),N("change",{bubbles:!0,cancelable:!0}),N("open",{bubbles:!0}),N("close")],u);D(u);u.define();const f=T("ui5-toolbar-select",["accessibleName","accessibleNameRef","overflowPriority","valueState","width"],["disabled","preventOverflowClosing"],[],["change","close","open"]);f.displayName="ToolbarSelect";try{f.displayName="ToolbarSelect",f.__docgenInfo={description:'The `ToolbarSelect` component is used to create a toolbar drop-down list.\nThe items inside the `ToolbarSelect` define the available options by using the `ToolbarSelectOption` component.\n\n\n\n`import "@ui5/webcomponents/dist/ToolbarSelectOption.js";` (comes with `ToolbarSelect`)\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)',displayName:"ToolbarSelect",props:{children:{defaultValue:null,description:`Defines the component options.

**Note:** Only one selected option is allowed.
If more than one option is defined as selected, the last one would be considered as the selected one.

**Note:** Use the \`ToolbarSelectOption\` component to define the desired options.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onChange:{defaultValue:null,description:`Fired when the selected option changes.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<ToolbarSelectDomRef, SelectChangeEventDetail>) => void"}},onClose:{defaultValue:null,description:`Fired after the component's dropdown menu closes.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<ToolbarSelectDomRef, never>) => void"}},onOpen:{defaultValue:null,description:`Fired after the component's dropdown menu opens.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<ToolbarSelectDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the select.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is in disabled state.

**Note:** A disabled component is noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},overflowPriority:{defaultValue:{value:'"Default"'},description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.`,name:"overflowPriority",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'}]}},preventOverflowClosing:{defaultValue:{value:"false"},description:`Defines if the toolbar overflow popup should close upon intereaction with the item.
It will close by default.`,name:"preventOverflowClosing",required:!1,type:{name:"boolean"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'}]}},width:{defaultValue:{value:"undefined"},description:`Defines the width of the select.

**Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.`,name:"width",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{f.displayName="ToolbarSelect",f.__docgenInfo={description:'The `ToolbarSelect` component is used to create a toolbar drop-down list.\nThe items inside the `ToolbarSelect` define the available options by using the `ToolbarSelectOption` component.\n\n\n\n`import "@ui5/webcomponents/dist/ToolbarSelectOption.js";` (comes with `ToolbarSelect`)\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)',displayName:"ToolbarSelect",props:{children:{defaultValue:null,description:`Defines the component options.

**Note:** Only one selected option is allowed.
If more than one option is defined as selected, the last one would be considered as the selected one.

**Note:** Use the \`ToolbarSelectOption\` component to define the desired options.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onChange:{defaultValue:null,description:`Fired when the selected option changes.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<ToolbarSelectDomRef, SelectChangeEventDetail>) => void"}},onClose:{defaultValue:null,description:`Fired after the component's dropdown menu closes.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<ToolbarSelectDomRef, never>) => void"}},onOpen:{defaultValue:null,description:`Fired after the component's dropdown menu opens.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<ToolbarSelectDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the select.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is in disabled state.

**Note:** A disabled component is noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},overflowPriority:{defaultValue:{value:'"Default"'},description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.`,name:"overflowPriority",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'}]}},preventOverflowClosing:{defaultValue:{value:"false"},description:`Defines if the toolbar overflow popup should close upon intereaction with the item.
It will close by default.`,name:"preventOverflowClosing",required:!1,type:{name:"boolean"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'}]}},width:{defaultValue:{value:"undefined"},description:`Defines the width of the select.

**Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.`,name:"width",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var q=function(t,e,n,a){var l=arguments.length,o=l<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(o=(l<3?r(o):l>3?r(e,n,o):r(e,n))||o);return l>3&&o&&Object.defineProperty(e,n,o),o};let y=class extends z{constructor(){super(...arguments),this.selected=!1}};q([c({type:Boolean})],y.prototype,"selected",void 0);q([k({type:Node,default:!0,invalidateOnChildChange:!0})],y.prototype,"text",void 0);y=q([_("ui5-toolbar-select-option")],y);y.define();const p=T("ui5-toolbar-select-option",[],["selected"],[],[]);p.displayName="ToolbarSelectOption";try{p.displayName="ToolbarSelectOption",p.__docgenInfo={description:"The `ToolbarSelectOption` component defines the content of an option in the `ToolbarSelect`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"ToolbarSelectOption",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the component.",name:"selected",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{p.displayName="ToolbarSelectOption",p.__docgenInfo={description:"The `ToolbarSelectOption` component defines the content of an option in the `ToolbarSelect`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"ToolbarSelectOption",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the component.",name:"selected",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function J(){return d("div",{class:"ui5-tb-separator ui5-tb-item","data-ui5-external-action-item-id":this._id})}function K(){return d("div",{class:"ui5-tb-separator-in-overflow ui5-tb-popover-item","data-ui5-external-action-item-id":this._id})}var W=function(t,e,n,a){var l=arguments.length,o=l<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(o=(l<3?r(o):l>3?r(e,n,o):r(e,n))||o);return l>3&&o&&Object.defineProperty(e,n,o),o};let g=class extends P{constructor(){super(...arguments),this.visible=!1}static get toolbarTemplate(){return J}static get toolbarPopoverTemplate(){return K}get isSeparator(){return!0}get isInteractive(){return!1}};W([c({type:Boolean})],g.prototype,"visible",void 0);g=W([_({tag:"ui5-toolbar-separator"})],g);D(g);g.define();const m=T("ui5-toolbar-separator",["overflowPriority"],["preventOverflowClosing"],[],[]);m.displayName="ToolbarSeparator";try{m.displayName="ToolbarSeparator",m.__docgenInfo={description:`The \`ToolbarSeparator\` is an element, used for visual separation between two elements.
It takes no space in calculating toolbar items width.

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ToolbarSeparator",props:{overflowPriority:{defaultValue:{value:'"Default"'},description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.`,name:"overflowPriority",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'}]}},preventOverflowClosing:{defaultValue:{value:"false"},description:`Defines if the toolbar overflow popup should close upon intereaction with the item.
It will close by default.`,name:"preventOverflowClosing",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{m.displayName="ToolbarSeparator",m.__docgenInfo={description:`The \`ToolbarSeparator\` is an element, used for visual separation between two elements.
It takes no space in calculating toolbar items width.

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ToolbarSeparator",props:{overflowPriority:{defaultValue:{value:'"Default"'},description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.`,name:"overflowPriority",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'}]}},preventOverflowClosing:{defaultValue:{value:"false"},description:`Defines if the toolbar overflow popup should close upon intereaction with the item.
It will close by default.`,name:"preventOverflowClosing",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function V(){return d("div",{class:"ui5-tb-spacer ui5-tb-item",style:this.styles,role:"separator","data-ui5-external-action-item-id":this._id})}var $=function(t,e,n,a){var l=arguments.length,o=l<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(o=(l<3?r(o):l>3?r(e,n,o):r(e,n))||o);return l>3&&o&&Object.defineProperty(e,n,o),o};let S=class extends P{get styles(){return this.width?{width:this.width}:{flex:"auto"}}get ignoreSpace(){return this.width===""||this.width===void 0||this.width==="auto"}get hasFlexibleWidth(){return this.width===""||this.width===void 0||this.width==="auto"}static get toolbarTemplate(){return V}static get toolbarPopoverTemplate(){return V}get isInteractive(){return!1}};$([c()],S.prototype,"width",void 0);S=$([_({tag:"ui5-toolbar-spacer"})],S);D(S);S.define();const v=T("ui5-toolbar-spacer",["overflowPriority","width"],["preventOverflowClosing"],[],[]);v.displayName="ToolbarSpacer";try{v.displayName="ToolbarSpacer",v.__docgenInfo={description:`The \`ToolbarSpacer\` is an element, used for taking needed space for toolbar items to take 100% width.
It takes no space in calculating toolbar items width.

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ToolbarSpacer",props:{overflowPriority:{defaultValue:{value:'"Default"'},description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.`,name:"overflowPriority",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'}]}},preventOverflowClosing:{defaultValue:{value:"false"},description:`Defines if the toolbar overflow popup should close upon intereaction with the item.
It will close by default.`,name:"preventOverflowClosing",required:!1,type:{name:"boolean"}},width:{defaultValue:{value:"undefined"},description:`Defines the width of the spacer.

**Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.`,name:"width",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{v.displayName="ToolbarSpacer",v.__docgenInfo={description:`The \`ToolbarSpacer\` is an element, used for taking needed space for toolbar items to take 100% width.
It takes no space in calculating toolbar items width.

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ToolbarSpacer",props:{overflowPriority:{defaultValue:{value:'"Default"'},description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.`,name:"overflowPriority",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'}]}},preventOverflowClosing:{defaultValue:{value:"false"},description:`Defines if the toolbar overflow popup should close upon intereaction with the item.
It will close by default.`,name:"preventOverflowClosing",required:!1,type:{name:"boolean"}},width:{defaultValue:{value:"undefined"},description:`Defines the width of the spacer.

**Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.`,name:"width",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var C;(function(t){t.Start="Start",t.End="End"})(C||(C={}));const Q=C,X={title:"Layouts & Floorplans / Toolbar",component:x,argTypes:{children:{control:{disable:!0}}},args:{alignContent:Q.Start},tags:["package:@ui5/webcomponents"]},b={render:t=>i.jsxs(x,{...t,children:[i.jsx(O,{text:"Button 1"}),i.jsxs(f,{children:[i.jsx(p,{children:"Option 1"}),i.jsx(p,{children:"Option 2"}),i.jsx(p,{children:"Option 3"})]}),i.jsx(m,{}),i.jsx(v,{}),i.jsx(m,{}),i.jsx(O,{text:"Button 2"}),i.jsxs(f,{children:[i.jsx(p,{children:"Option 1"}),i.jsx(p,{children:"Option 2"}),i.jsx(p,{children:"Option 3"})]})]})},w={name:"Opening Popovers via ToolbarButton",render(t){const[e,n]=R.useState(!1),a=R.useRef(null);return i.jsxs(i.Fragment,{children:[i.jsx(x,{...t,children:i.jsx(O,{onClick:l=>{const{targetRef:o}=l.detail;a.current&&(a.current.opener=o,n(!0))},text:"Open Popover"})}),i.jsx(M,{open:e,ref:a,onClose:()=>{n(!1)},children:"Content"})]})}};var I,E,j;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <Toolbar {...args}>
      <ToolbarButton text="Button 1" />
      <ToolbarSelect>
        <ToolbarSelectOption>Option 1</ToolbarSelectOption>
        <ToolbarSelectOption>Option 2</ToolbarSelectOption>
        <ToolbarSelectOption>Option 3</ToolbarSelectOption>
      </ToolbarSelect>
      <ToolbarSeparator />
      <ToolbarSpacer />
      <ToolbarSeparator />
      <ToolbarButton text="Button 2" />
      <ToolbarSelect>
        <ToolbarSelectOption>Option 1</ToolbarSelectOption>
        <ToolbarSelectOption>Option 2</ToolbarSelectOption>
        <ToolbarSelectOption>Option 3</ToolbarSelectOption>
      </ToolbarSelect>
    </Toolbar>
}`,...(j=(E=b.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var A,U,F;w.parameters={...w.parameters,docs:{...(A=w.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Opening Popovers via ToolbarButton',
  render(args) {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const popoverRef = useRef<PopoverDomRef>(null);
    return <>
        <Toolbar {...args}>
          <ToolbarButton onClick={e => {
          const {
            targetRef
          } = e.detail;
          if (popoverRef.current) {
            popoverRef.current.opener = targetRef;
            setPopoverOpen(true);
          }
        }} text="Open Popover" />
        </Toolbar>
        <Popover open={popoverOpen} ref={popoverRef} onClose={() => {
        setPopoverOpen(false);
      }}>
          Content
        </Popover>
      </>;
  }
}`,...(F=(U=w.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};const Y=["Default","OpenPopover"],de=Object.freeze(Object.defineProperty({__proto__:null,Default:b,OpenPopover:w,__namedExportsOrder:Y,default:X},Symbol.toStringTag,{value:"Module"}));export{de as C,b as D,w as O,f as T,p as a,m as b,v as c};
