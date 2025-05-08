import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as q}from"./index-U0ga5oGA.js";import{P as L}from"./index-D_lPDdUa.js";import{a as D,T as N}from"./index-CuMgiZae.js";import{j as d,s as u,m as _,w as T,E as M}from"./jsx-runtime-CkEx_Gfk.js";import{d as k}from"./slot-_4yKMUwC.js";import{l as O}from"./event-strict-DgQLNDEV.js";import{r as P,a as x}from"./ToolbarButton-EPSeOMC_.js";import{S as B}from"./Select-CZ_Vru5I.js";import{O as W}from"./Option-BrrbxGpX.js";function H(){return d(B,{class:"ui5-tb-item",style:this.styles,"data-ui5-external-action-item-id":this._id,valueState:this.valueState,disabled:this.disabled,accessibleName:this.accessibleName,accessibleNameRef:this.accessibleNameRef,onClick:(...e)=>this.onClick(...e),onClose:(...e)=>this.onClose(...e),onOpen:(...e)=>this.onOpen(...e),onChange:(...e)=>this.onChange(...e),children:this.options.map((e,t)=>d(W,{selected:e.selected,"data-ui5-external-action-item-index":t,children:e.textContent}))})}function G(){return d(B,{class:"ui5-tb-popover-item","data-ui5-external-action-item-id":this._id,valueState:this.valueState,disabled:this.disabled,accessibleName:this.accessibleName,accessibleNameRef:this.accessibleNameRef,onClick:(...e)=>this.onClick(...e),onClose:(...e)=>this.onClose(...e),onOpen:(...e)=>this.onOpen(...e),onChange:(...e)=>this.onChange(...e),children:this.options.map((e,t)=>d(W,{selected:e.selected,"data-ui5-external-action-item-index":t,children:e.textContent}))})}var h=function(e,t,n,a){var l=arguments.length,o=l<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,n):a,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(l<3?r(o):l>3?r(t,n,o):r(t,n))||o);return l>3&&o&&Object.defineProperty(t,n,o),o};let c=class extends x{constructor(){super(...arguments),this.valueState="None",this.disabled=!1}static get toolbarTemplate(){return H}static get toolbarPopoverTemplate(){return G}onClick(t){t.stopImmediatePropagation(),!this.fireDecoratorEvent("click",{targetRef:t.target})&&!this.preventOverflowClosing&&this.fireDecoratorEvent("close-overflow")}onOpen(t){t.stopImmediatePropagation(),!this.fireDecoratorEvent("open",{targetRef:t.target})&&this.fireDecoratorEvent("close-overflow")}onClose(t){t.stopImmediatePropagation(),!this.fireDecoratorEvent("close",{targetRef:t.target})&&this.fireDecoratorEvent("close-overflow")}onChange(t){t.stopImmediatePropagation(),!this.fireDecoratorEvent("change",{...t.detail,targetRef:t.target})||this.fireDecoratorEvent("close-overflow"),this._syncOptions(t.detail.selectedOption)}_syncOptions(t){const n=Number(t==null?void 0:t.getAttribute("data-ui5-external-action-item-index"));this.options.forEach((a,l)=>{l===n?a.setAttribute("selected",""):a.removeAttribute("selected")})}get styles(){return{width:this.width}}};h([u()],c.prototype,"width",void 0);h([k({default:!0,type:HTMLElement,invalidateOnChildChange:!0})],c.prototype,"options",void 0);h([u()],c.prototype,"valueState",void 0);h([u({type:Boolean})],c.prototype,"disabled",void 0);h([u()],c.prototype,"accessibleName",void 0);h([u()],c.prototype,"accessibleNameRef",void 0);c=h([_({tag:"ui5-toolbar-select"}),O("change",{bubbles:!0,cancelable:!0}),O("open",{bubbles:!0}),O("close")],c);P(c);c.define();const f=T("ui5-toolbar-select",["accessibleName","accessibleNameRef","overflowPriority","valueState","width"],["disabled","preventOverflowClosing"],[],["change","close","open"]);f.displayName="ToolbarSelect";try{f.displayName="ToolbarSelect",f.__docgenInfo={description:'The `ToolbarSelect` component is used to create a toolbar drop-down list.\nThe items inside the `ToolbarSelect` define the available options by using the `ToolbarSelectOption` component.\n\n\n\n`import "@ui5/webcomponents/dist/ToolbarSelectOption.js";` (comes with `ToolbarSelect`)\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)',displayName:"ToolbarSelect",props:{children:{defaultValue:null,description:`Defines the component options.

**Note:** Only one selected option is allowed.
If more than one option is defined as selected, the last one would be considered as the selected one.

**Note:** Use the \`ToolbarSelectOption\` component to define the desired options.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onChange:{defaultValue:null,description:`Fired when the selected option changes.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<ToolbarSelectDomRef, ToolbarSelectChangeEventDetail>) => void"}},onClose:{defaultValue:null,description:`Fired after the component's dropdown menu closes.

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
| ✅|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<ToolbarSelectDomRef, ToolbarSelectChangeEventDetail>) => void"}},onClose:{defaultValue:null,description:`Fired after the component's dropdown menu closes.

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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var R=function(e,t,n,a){var l=arguments.length,o=l<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,n):a,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(l<3?r(o):l>3?r(t,n,o):r(t,n))||o);return l>3&&o&&Object.defineProperty(t,n,o),o};let y=class extends M{constructor(){super(...arguments),this.selected=!1}};R([u({type:Boolean})],y.prototype,"selected",void 0);R([k({type:Node,default:!0,invalidateOnChildChange:!0})],y.prototype,"text",void 0);y=R([_("ui5-toolbar-select-option")],y);y.define();const p=T("ui5-toolbar-select-option",[],["selected"],[],[]);p.displayName="ToolbarSelectOption";try{p.displayName="ToolbarSelectOption",p.__docgenInfo={description:"The `ToolbarSelectOption` component defines the content of an option in the `ToolbarSelect`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"ToolbarSelectOption",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the component.",name:"selected",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{p.displayName="ToolbarSelectOption",p.__docgenInfo={description:"The `ToolbarSelectOption` component defines the content of an option in the `ToolbarSelect`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"ToolbarSelectOption",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the component.",name:"selected",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function J(){return d("div",{class:"ui5-tb-separator ui5-tb-item","data-ui5-external-action-item-id":this._id})}function K(){return d("div",{class:"ui5-tb-separator-in-overflow ui5-tb-popover-item","data-ui5-external-action-item-id":this._id})}var $=function(e,t,n,a){var l=arguments.length,o=l<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,n):a,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(l<3?r(o):l>3?r(t,n,o):r(t,n))||o);return l>3&&o&&Object.defineProperty(t,n,o),o};let g=class extends x{constructor(){super(...arguments),this.visible=!1}static get toolbarTemplate(){return J}static get toolbarPopoverTemplate(){return K}get isSeparator(){return!0}get isInteractive(){return!1}};$([u({type:Boolean})],g.prototype,"visible",void 0);g=$([_({tag:"ui5-toolbar-separator"})],g);P(g);g.define();const m=T("ui5-toolbar-separator",["overflowPriority"],["preventOverflowClosing"],[],[]);m.displayName="ToolbarSeparator";try{m.displayName="ToolbarSeparator",m.__docgenInfo={description:`The \`ToolbarSeparator\` is an element, used for visual separation between two elements.
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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function V(){return d("div",{class:"ui5-tb-spacer ui5-tb-item",style:this.styles,role:"separator","data-ui5-external-action-item-id":this._id})}var z=function(e,t,n,a){var l=arguments.length,o=l<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,n):a,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(l<3?r(o):l>3?r(t,n,o):r(t,n))||o);return l>3&&o&&Object.defineProperty(t,n,o),o};let S=class extends x{get styles(){return this.width?{width:this.width}:{flex:"auto"}}get ignoreSpace(){return this.width===""||this.width===void 0||this.width==="auto"}get hasFlexibleWidth(){return this.width===""||this.width===void 0||this.width==="auto"}static get toolbarTemplate(){return V}static get toolbarPopoverTemplate(){return V}get isInteractive(){return!1}};z([u()],S.prototype,"width",void 0);S=z([_({tag:"ui5-toolbar-spacer"})],S);P(S);S.define();const v=T("ui5-toolbar-spacer",["overflowPriority","width"],["preventOverflowClosing"],[],[]);v.displayName="ToolbarSpacer";try{v.displayName="ToolbarSpacer",v.__docgenInfo={description:`The \`ToolbarSpacer\` is an element, used for taking needed space for toolbar items to take 100% width.
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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var C;(function(e){e.Start="Start",e.End="End"})(C||(C={}));const Q={title:"Layouts & Floorplans / Toolbar",component:D,argTypes:{children:{control:{disable:!0}}},args:{alignContent:C.Start},tags:["package:@ui5/webcomponents"]},b={render:e=>i.jsxs(D,{...e,children:[i.jsx(N,{text:"Button 1"}),i.jsxs(f,{children:[i.jsx(p,{children:"Option 1"}),i.jsx(p,{children:"Option 2"}),i.jsx(p,{children:"Option 3"})]}),i.jsx(m,{}),i.jsx(v,{}),i.jsx(m,{}),i.jsx(N,{text:"Button 2"}),i.jsxs(f,{children:[i.jsx(p,{children:"Option 1"}),i.jsx(p,{children:"Option 2"}),i.jsx(p,{children:"Option 3"})]})]})},w={name:"Opening Popovers via ToolbarButton",render(e){const[t,n]=q.useState(!1),a=q.useRef(null);return i.jsxs(i.Fragment,{children:[i.jsx(D,{...e,children:i.jsx(N,{onClick:l=>{const{targetRef:o}=l.detail;a.current&&(a.current.opener=o,n(!0))},text:"Open Popover"})}),i.jsx(L,{open:t,ref:a,onClose:()=>{n(!1)},children:"Content"})]})}};var I,j,A;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(A=(j=b.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var E,U,F;w.parameters={...w.parameters,docs:{...(E=w.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(F=(U=w.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};const X=["Default","OpenPopover"],de=Object.freeze(Object.defineProperty({__proto__:null,Default:b,OpenPopover:w,__namedExportsOrder:X,default:Q},Symbol.toStringTag,{value:"Module"}));export{de as C,b as D,w as O,f as T,p as a,m as b,v as c};
