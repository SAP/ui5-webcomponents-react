import{_ as q}from"./iframe-0howv_Dp.js";import{a as l,b as f,f as m,s as $,m as W,w as M,l as U}from"./withWebComponent-ZLYt6Z72.js";import{s as F}from"./event-Dq0fpeHi.js";import{b as k}from"./Button-BzvkKBmq.js";import{I as z,f as v,c as H,j as D}from"./UI5Element-Cjk_cKug.js";import{l as i}from"./if-defined-9iVrMyiP.js";import{s as A}from"./style-map-ZLasDAym.js";import{s as N}from"./parameters-bundle.css-BFbT_feV.js";import{d as K}from"./slot-_4yKMUwC.js";import{f as P}from"./ResizeHandler-BX_Vwu-f.js";import{v as G}from"./AriaLabelHelper-C5uDZewF.js";import{m as J}from"./useIsomorphicLayoutEffect-BpDYIkAV.js";import"./overflow-DMbZLNUy.js";import{f as Q}from"./i18nBundle-DTd686OT.js";import"./utils-Cjkb-4uz.js";import{t as X}from"./AriaHasPopup-BTjm9d28.js";import{bl as x}from"./i18n-defaults-BPJU920w.js";import{o as b}from"./class-map-Dho2ozJ6.js";import{c as T}from"./Icon-CzTkrOrA.js";import{T as I}from"./ToolbarItemOverflowBehavior-B0qqzw6U.js";import{c as Y}from"./Popover-5eNGP7Bf.js";import{d as C}from"./CustomElementsScopeUtils-CJFx-0ms.js";var L=function(r,e,t,o){var n=arguments.length,s=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,o);else for(var d=r.length-1;d>=0;d--)(a=r[d])&&(s=(n<3?a(s):n>3?a(e,t,s):a(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s};class S extends z{constructor(){super(...arguments),this.overflowPriority="Default",this.preventOverflowClosing=!1}get ignoreSpace(){return!1}get containsText(){return!1}get hasFlexibleWidth(){return!1}get isInteractive(){return!0}get isSeparator(){return!1}static get toolbarTemplate(){throw new Error("Template must be defined")}static get toolbarPopoverTemplate(){throw new Error("Popover template must be defined")}get subscribedEvents(){return new Map}get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}}L([l()],S.prototype,"overflowPriority",void 0);L([l({type:Boolean})],S.prototype,"preventOverflowClosing",void 0);function Z(r,e,t){return t?f`<${m("ui5-button",e,t)} class="ui5-tb-button ui5-tb-item" id="${i(this.id)}" style="${A(this.styles)}" icon="${i(this.icon)}" end-icon="${i(this.endIcon)}" tooltip="${i(this.tooltip)}" accessible-name="${i(this.accessibleName)}" accessible-name-ref="${i(this.accessibleNameRef)}" .accessibilityAttributes="${i(this.accessibilityAttributes)}" design="${i(this.design)}" ?disabled="${this.disabled}" ?hidden="${this.hidden}" data-ui5-external-action-item-id="${i(this._id)}" data-ui5-stable="${i(this.stableDomRef)}" .refItemId="${i(this._id)}">${i(this.text)}</${m("ui5-button",e,t)}>`:f`<ui5-button class="ui5-tb-button ui5-tb-item" id="${i(this.id)}" style="${A(this.styles)}" icon="${i(this.icon)}" end-icon="${i(this.endIcon)}" tooltip="${i(this.tooltip)}" accessible-name="${i(this.accessibleName)}" accessible-name-ref="${i(this.accessibleNameRef)}" .accessibilityAttributes="${i(this.accessibilityAttributes)}" design="${i(this.design)}" ?disabled="${this.disabled}" ?hidden="${this.hidden}" data-ui5-external-action-item-id="${i(this._id)}" data-ui5-stable="${i(this.stableDomRef)}" .refItemId="${i(this._id)}">${i(this.text)}</ui5-button>`}function ee(r,e,t){return t?f`<${m("ui5-button",e,t)} icon="${i(this.icon)}" end-icon="${i(this.endIcon)}" accessible-name="${i(this.accessibleName)}" accessible-name-ref="${i(this.accessibleNameRef)}" .accessibilityAttributes="${i(this.accessibilityAttributes)}" tooltip="${i(this.tooltip)}" design="${i(this.design)}" ?disabled="${this.disabled}" ?hidden="${this.hidden}" class="ui5-tb-popover-button ui5-tb-popover-item" data-ui5-external-action-item-id="${i(this._id)}" data-ui5-stable="${i(this.stableDomRef)}">${i(this.text)}</${m("ui5-button",e,t)}>`:f`<ui5-button icon="${i(this.icon)}" end-icon="${i(this.endIcon)}" accessible-name="${i(this.accessibleName)}" accessible-name-ref="${i(this.accessibleNameRef)}" .accessibilityAttributes="${i(this.accessibilityAttributes)}" tooltip="${i(this.tooltip)}" design="${i(this.design)}" ?disabled="${this.disabled}" ?hidden="${this.hidden}" class="ui5-tb-popover-button ui5-tb-popover-item" data-ui5-external-action-item-id="${i(this._id)}" data-ui5-stable="${i(this.stableDomRef)}">${i(this.text)}</ui5-button>`}v("@ui5/webcomponents-theming","sap_horizon",async()=>$);v("@ui5/webcomponents","sap_horizon",async()=>N);const te={packageName:"@ui5/webcomponents",fileName:"themes/ToolbarButtonPopover.css.ts",content:`:not([icon-only]).ui5-tb-popover-button::part(button){justify-content:start}
`},w=J("ToolbarItem.registry",new Map),oe=r=>{w.set(r.name,r)},ie=r=>{if(!w.has(r))throw new Error(`No template found for ${r}`);return w.get(r)},ne=()=>[...w.values()].map(r=>r.styles),se=()=>[...w.values()].map(r=>r.dependencies).flat();var p=function(r,e,t,o){var n=arguments.length,s=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,o);else for(var d=r.length-1;d>=0;d--)(a=r[d])&&(s=(n<3?a(s):n>3?a(e,t,s):a(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s};let u=class extends S{constructor(){super(...arguments),this.disabled=!1,this.design="Default",this.accessibilityAttributes={}}get styles(){return{width:this.width,display:this.hidden?"none":"inline-block"}}get containsText(){return!0}static get toolbarTemplate(){return Z}static get toolbarPopoverTemplate(){return ee}get subscribedEvents(){const e=new Map;return e.set("click",{preventClosing:!1}),e}};p([l({type:Boolean})],u.prototype,"disabled",void 0);p([l()],u.prototype,"design",void 0);p([l()],u.prototype,"icon",void 0);p([l()],u.prototype,"endIcon",void 0);p([l()],u.prototype,"tooltip",void 0);p([l()],u.prototype,"accessibleName",void 0);p([l()],u.prototype,"accessibleNameRef",void 0);p([l({type:Object})],u.prototype,"accessibilityAttributes",void 0);p([l()],u.prototype,"text",void 0);p([l()],u.prototype,"width",void 0);u=p([W({tag:"ui5-toolbar-button",dependencies:[k],styles:te}),F("click")],u);oe(u);u.define();const re=u,ae=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"})),y=M("ui5-toolbar-button",["accessibilityAttributes","accessibleName","accessibleNameRef","design","endIcon","icon","overflowPriority","text","tooltip","width"],["disabled","preventOverflowClosing"],[],["click"],()=>q(()=>Promise.resolve().then(()=>ae),void 0,import.meta.url));y.displayName="ToolbarButton";try{y.displayName="ToolbarButton",y.__docgenInfo={description:`The \`ToolbarButton\` represents an abstract action,
used in the \`Toolbar\`.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ToolbarButton",props:{onClick:{defaultValue:null,description:"Fired when the component is activated either with a\nmouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled`\nproperty is set to `true`.",name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ToolbarButtonDomRef, never>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines the additional accessibility attributes that will be applied to the component.\n\nThe following fields are supported:\n\n- **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.\nAccepts the following string values: `true` or `false`\n\n- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.\nAccepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.\n\n- **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.\nAccepts a lowercase string value.",name:"accessibilityAttributes",required:!1,type:{name:"ButtonAccessibilityAttributes"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},design:{defaultValue:{value:'"Default"'},description:"Defines the action design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines if the action is disabled.

**Note:** a disabled action can't be pressed or focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:{value:"undefined"},description:"Defines the icon, displayed as graphical element within the component after the button text.\n\n**Note:** It is highly recommended to use `endIcon` property only together with `icon` and/or `text` properties.\nUsage of `endIcon` only should be avoided.\n\nThe SAP-icons font provides numerous options.\n\nExample:\nSee all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).",name:"endIcon",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"undefined"},description:`Defines the \`icon\` source URI.

**Note:** SAP-icons font provides numerous buil-in icons. To find all the available icons, see the
[Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},overflowPriority:{defaultValue:{value:'"Default"'},description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.`,name:"overflowPriority",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'}]}},preventOverflowClosing:{defaultValue:{value:"false"},description:`Defines if the toolbar overflow popup should close upon intereaction with the item.
It will close by default.`,name:"preventOverflowClosing",required:!1,type:{name:"boolean"}},text:{defaultValue:{value:"undefined"},description:"Button text",name:"text",required:!1,type:{name:"string"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the tooltip of the component.

**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.`,name:"tooltip",required:!1,type:{name:"string"}},width:{defaultValue:{value:"undefined"},description:`Defines the width of the button.

**Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.`,name:"width",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{y.displayName="ToolbarButton",y.__docgenInfo={description:`The \`ToolbarButton\` represents an abstract action,
used in the \`Toolbar\`.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ToolbarButton",props:{onClick:{defaultValue:null,description:"Fired when the component is activated either with a\nmouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled`\nproperty is set to `true`.",name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ToolbarButtonDomRef, never>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines the additional accessibility attributes that will be applied to the component.\n\nThe following fields are supported:\n\n- **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.\nAccepts the following string values: `true` or `false`\n\n- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.\nAccepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.\n\n- **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.\nAccepts a lowercase string value.",name:"accessibilityAttributes",required:!1,type:{name:"ButtonAccessibilityAttributes"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},design:{defaultValue:{value:'"Default"'},description:"Defines the action design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines if the action is disabled.

**Note:** a disabled action can't be pressed or focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:{value:"undefined"},description:"Defines the icon, displayed as graphical element within the component after the button text.\n\n**Note:** It is highly recommended to use `endIcon` property only together with `icon` and/or `text` properties.\nUsage of `endIcon` only should be avoided.\n\nThe SAP-icons font provides numerous options.\n\nExample:\nSee all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).",name:"endIcon",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"undefined"},description:`Defines the \`icon\` source URI.

**Note:** SAP-icons font provides numerous buil-in icons. To find all the available icons, see the
[Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},overflowPriority:{defaultValue:{value:'"Default"'},description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.`,name:"overflowPriority",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'}]}},preventOverflowClosing:{defaultValue:{value:"false"},description:`Defines if the toolbar overflow popup should close upon intereaction with the item.
It will close by default.`,name:"preventOverflowClosing",required:!1,type:{name:"boolean"}},text:{defaultValue:{value:"undefined"},description:"Button text",name:"text",required:!1,type:{name:"string"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the tooltip of the component.

**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.`,name:"tooltip",required:!1,type:{name:"string"}},width:{defaultValue:{value:"undefined"},description:`Defines the width of the button.

**Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.`,name:"width",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function le(r,e,t){return t?f`<div class="${b(this.classes.items)}" role="${i(this.accInfo.root.role)}" aria-label="${i(this.accInfo.root.accessibleName)}">${T(this.standardItems,(o,n)=>o._id||n,(o,n)=>R.call(this,r,e,t,o,n))}<${m("ui5-button",e,t)} aria-hidden="${i(this.hideOverflowButton)}" icon="overflow" design="Transparent" class="${b(this.classes.overflowButton)}" tooltip="${i(this.accInfo.overflowButton.tooltip)}" accessible-name="${i(this.accInfo.overflowButton.accessibleName)}" .accessibilityAttributes=${i(this.accInfo.overflowButton.accessibilityAttributes)}></${m("ui5-button",e,t)}></div><${m("ui5-popover",e,t)} class="ui5-overflow-popover" placement="Bottom" horizontal-align="End" @ui5-close="${i(this.onOverflowPopoverClosed)}" @ui5-open="${i(this.onOverflowPopoverOpened)}" hide-arrow><div class="ui5-overflow-list ${b(this.classes.overflow)}">${T(this.overflowItems,(o,n)=>o._id||n,(o,n)=>B.call(this,r,e,t,o,n))}</div></${m("ui5-popover",e,t)}>`:f`<div class="${b(this.classes.items)}" role="${i(this.accInfo.root.role)}" aria-label="${i(this.accInfo.root.accessibleName)}">${T(this.standardItems,(o,n)=>o._id||n,(o,n)=>R.call(this,r,e,t,o,n))}<ui5-button aria-hidden="${i(this.hideOverflowButton)}" icon="overflow" design="Transparent" class="${b(this.classes.overflowButton)}" tooltip="${i(this.accInfo.overflowButton.tooltip)}" accessible-name="${i(this.accInfo.overflowButton.accessibleName)}" .accessibilityAttributes=${i(this.accInfo.overflowButton.accessibilityAttributes)}></ui5-button></div><ui5-popover class="ui5-overflow-popover" placement="Bottom" horizontal-align="End" @ui5-close="${i(this.onOverflowPopoverClosed)}" @ui5-open="${i(this.onOverflowPopoverOpened)}" hide-arrow><div class="ui5-overflow-list ${b(this.classes.overflow)}">${T(this.overflowItems,(o,n)=>o._id||n,(o,n)=>B.call(this,r,e,t,o,n))}</div></ui5-popover>`}function R(r,e,t,o,n){return f`${i(o.toolbarTemplate)}`}function B(r,e,t,o,n){return f`${i(o.toolbarPopoverTemplate)}`}v("@ui5/webcomponents-theming","sap_horizon",async()=>$);v("@ui5/webcomponents","sap_horizon",async()=>N);const ue={packageName:"@ui5/webcomponents",fileName:"themes/Toolbar.css.ts",content:`:host(:not([hidden])){width:100%;height:var(--_ui5-v2-0-1-toolbar-height);display:flex;align-items:center;justify-content:flex-end;box-sizing:border-box;border-bottom:.0625rem solid var(--sapGroup_ContentBorderColor);padding:0 var(--_ui5-v2-0-1-toolbar-padding-left) 0 var(--_ui5-v2-0-1-toolbar-padding-right);background-color:var(--sapList_HeaderBackground)}:host([align-content="Start"]){justify-content:flex-start}.ui5-tb-items{width:100%;height:100%;display:inherit;align-items:inherit;justify-content:inherit}.ui5-tb-items-full-width{width:100%}.ui5-tb-item{flex-shrink:0}.ui5-tb-item:not(:last-child){margin-inline-end:var(--_ui5-v2-0-1-toolbar-item-margin-right);margin-inline-start:var(--_ui5-v2-0-1-toolbar-item-margin-left)}.ui5-tb-separator{height:var(--_ui5-v2-0-1-toolbar-separator-height);width:.0625rem;background:var(--sapToolbar_SeparatorColor);box-sizing:border-box}.ui5-tb-overflow-btn-hidden{visibility:hidden;position:absolute}:host([design="Transparent"]){background-color:transparent}
`};v("@ui5/webcomponents-theming","sap_horizon",async()=>$);v("@ui5/webcomponents","sap_horizon",async()=>N);const de={packageName:"@ui5/webcomponents",fileName:"themes/ToolbarPopover.css.ts",content:`.ui5-overflow-popover::part(content){padding:var(--_ui5-v2-0-1_toolbar_overflow_padding)}.ui5-overflow-list{display:flex;flex-direction:column;justify-content:center;align-items:center}.ui5-tb-popover-item{width:100%}.ui5-tb-popover-item:not(:last-child){margin-bottom:.25rem}.ui5-tb-separator-in-overflow{display:none;height:.0625rem;background:var(--sapToolbar_SeparatorColor);box-sizing:border-box}.ui5-tb-separator-in-overflow[visible]{display:block}
`};var h=function(r,e,t,o){var n=arguments.length,s=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,o);else for(var d=r.length-1;d>=0;d--)(a=r[d])&&(s=(n<3?a(s):n>3?a(e,t,s):a(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s},g;function E(r,e){return Number(r.getPropertyValue(e).replace("rem",""))*parseInt(getComputedStyle(document.body).getPropertyValue("font-size"))}function V(r,e){return Number(r.getPropertyValue(e).replace("px",""))}let c=g=class extends z{static get styles(){const e=ne();return[ue,de,...e]}static get dependencies(){const e=se();return[Y,k,...e]}static async onDefine(){g.i18nBundle=await Q("@ui5/webcomponents")}constructor(){super(),this.alignContent="End",this.reverseOverflow=!1,this.design="Solid",this.itemsToOverflow=[],this.itemsWidth=0,this.minContentWidth=0,this.popoverOpen=!1,this.itemsWidthMeasured=!1,this.ITEMS_WIDTH_MAP=new Map,this._onResize=this.onResize.bind(this),this._onInteract=e=>this.onInteract(e)}get overflowButtonSize(){var e;return((e=this.overflowButtonDOM)==null?void 0:e.getBoundingClientRect().width)||0}get padding(){const e=getComputedStyle(this.getDomRef());return E(e,C("--_ui5-toolbar-padding-left"))+E(e,C("--_ui5-toolbar-padding-right"))}get subscribedEvents(){return this.items.map(e=>Array.from(e.subscribedEvents.keys())).flat().filter((e,t,o)=>o.indexOf(e)===t)}get alwaysOverflowItems(){return this.items.filter(e=>e.overflowPriority===I.AlwaysOverflow)}get movableItems(){return this.items.filter(e=>e.overflowPriority!==I.AlwaysOverflow&&e.overflowPriority!==I.NeverOverflow)}get overflowItems(){const e=this.getItemsInfo(this.itemsToOverflow.filter(t=>!t.ignoreSpace));return this.reverseOverflow?e.reverse():e}get standardItems(){return this.getItemsInfo(this.items.filter(e=>this.itemsToOverflow.indexOf(e)===-1))}get hideOverflowButton(){return this.itemsToOverflow.filter(e=>!(e.ignoreSpace||e.isSeparator)).length===0}get classes(){return{items:{"ui5-tb-items":!0,"ui5-tb-items-full-width":this.hasFlexibleSpacers},overflow:{"ui5-overflow-list--alignleft":this.hasItemWithText},overflowButton:{"ui5-tb-item":!0,"ui5-tb-overflow-btn":!0,"ui5-tb-overflow-btn-hidden":this.hideOverflowButton}}}get interactiveItemsCount(){return this.items.filter(e=>e.isInteractive).length}get hasAriaSemantics(){return this.interactiveItemsCount>1}get accessibleRole(){return this.hasAriaSemantics?"toolbar":void 0}get ariaLabelText(){return this.hasAriaSemantics?G(this):void 0}get accInfo(){var e;return{root:{role:this.accessibleRole,accessibleName:this.ariaLabelText},overflowButton:{accessibleName:g.i18nBundle.getText(x),tooltip:g.i18nBundle.getText(x),accessibilityAttributes:{expanded:(e=this.overflowButtonDOM)==null?void 0:e.accessibilityAttributes.expanded,hasPopup:X.Menu.toLowerCase()}}}}get overflowButtonDOM(){return this.shadowRoot.querySelector(".ui5-tb-overflow-btn")}get itemsDOM(){return this.shadowRoot.querySelector(".ui5-tb-items")}get hasItemWithText(){return this.itemsToOverflow.some(e=>e.containsText)}get hasFlexibleSpacers(){return this.items.some(e=>e.hasFlexibleWidth)}onEnterDOM(){P.register(this,this._onResize)}onExitDOM(){P.deregister(this,this._onResize)}onInvalidation(e){e.reason==="childchange"&&e.child===this.itemsToOverflow[0]&&this.onToolbarItemChange()}onBeforeRendering(){this.detachListeners(),this.attachListeners()}async onAfterRendering(){await H(),this.storeItemsWidth(),this.processOverflowLayout()}isOverflowOpen(){return this.getOverflowPopover().open}openOverflow(){const e=this.getOverflowPopover();e.opener=this.overflowButtonDOM,e.open=!0,this.reverseOverflow=e.actualPlacement==="Top"}closeOverflow(){const e=this.getOverflowPopover();e.open=!1}toggleOverflow(){this.popoverOpen?this.closeOverflow():this.openOverflow()}getOverflowPopover(){return this.shadowRoot.querySelector(".ui5-overflow-popover")}processOverflowLayout(){const e=this.offsetWidth-this.padding,t=this.itemsWidth,o=t-e+this.overflowButtonSize;this.width===e&&this.contentWidth===t||(this.distributeItems(o),this.width=e,this.contentWidth=t)}storeItemsWidth(){let e=0,t=0;if(this.items.forEach(o=>{const n=this.getItemWidth(o);e+=n,o.overflowPriority===I.NeverOverflow&&(t+=n),this.ITEMS_WIDTH_MAP.set(o._id,n)}),t!==this.minContentWidth){const o=this.offsetWidth-this.getDomRef().offsetWidth;this.fireEvent("_min-content-width-change",{minWidth:t+o+this.overflowButtonSize})}this.itemsWidth=e,this.minContentWidth=t}distributeItems(e=0){const t=this.movableItems.reverse();let o=0,n=t[o];for(this.itemsToOverflow=[],this.distributeItemsThatAlwaysOverflow();e>0&&n;)this.itemsToOverflow.unshift(n),e-=this.getCachedItemWidth(n==null?void 0:n._id)||0,o++,n=t[o];if(o<t.length){let s=t[o];for(;o<=t.length-1&&s.isSeparator;)this.itemsToOverflow.unshift(s),o++,s=t[o]}this.setSeperatorsVisibilityInOverflow()}distributeItemsThatAlwaysOverflow(){this.alwaysOverflowItems.forEach(e=>{this.itemsToOverflow.push(e)})}setSeperatorsVisibilityInOverflow(){this.itemsToOverflow.forEach((e,t,o)=>{e.isSeparator&&(e.visible=this.shouldShowSeparatorInOverflow(t,o))})}shouldShowSeparatorInOverflow(e,t){let o=!1,n=!1;return t.forEach((s,a)=>{a<e&&!s.isSeparator&&(o=!0),a>e&&!s.isSeparator&&(n=!0)}),o&&n}onOverflowPopoverClosed(){this.popoverOpen=!1,this.overflowButtonDOM&&(this.overflowButtonDOM.accessibilityAttributes.expanded=!1)}onOverflowPopoverOpened(){this.popoverOpen=!0,this.overflowButtonDOM&&(this.overflowButtonDOM.accessibilityAttributes.expanded=!0)}onResize(){this.itemsWidth&&(this.closeOverflow(),this.processOverflowLayout())}onInteract(e){const t=e.target,o=t.closest(".ui5-tb-item")||t.closest(".ui5-tb-popover-item");if(t===this.overflowButtonDOM){this.toggleOverflow();return}if(!o)return;const n=t.getAttribute("data-ui5-external-action-item-id");if(n){const s=this.getItemByID(n),a=e.type,d=e.type.replace("ui5-",""),j=!(s!=null&&s.fireEvent(d,e.detail,!0)),O=(s==null?void 0:s.subscribedEvents.get(a))||(s==null?void 0:s.subscribedEvents.get(d));if(j||s!=null&&s.preventOverflowClosing||O!=null&&O.preventClosing)return;this.closeOverflow()}}attachListeners(){const e=this.getOverflowPopover();this.subscribedEvents.forEach(t=>{var o;(o=this.itemsDOM)==null||o.addEventListener(t,this._onInteract),e==null||e.addEventListener(t,this._onInteract)})}detachListeners(){const e=this.getOverflowPopover();this.subscribedEvents.forEach(t=>{var o;(o=this.itemsDOM)==null||o.removeEventListener(t,this._onInteract),e==null||e.removeEventListener(t,this._onInteract)})}onToolbarItemChange(){this.itemsToOverflow=[],this.contentWidth=0}getItemsInfo(e){return e.map(t=>{const o=ie(t.constructor.name);return o?{toolbarTemplate:D(o.toolbarTemplate,t),toolbarPopoverTemplate:D(o.toolbarPopoverTemplate,t)}:null})}getItemWidth(e){if(e.ignoreSpace||e.isSeparator)return 0;const t=e._id,o=this.getRegisteredToolbarItemByID(t);let n=0;if(o){const s=getComputedStyle(o);n=o.offsetWidth+V(s,"margin-inline-end")+V(s,"margin-inline-start")}else n=this.getCachedItemWidth(t)||0;return Math.ceil(n)}getCachedItemWidth(e){return this.ITEMS_WIDTH_MAP.get(e)}getItemByID(e){return this.items.find(t=>t._id===e)}getRegisteredToolbarItemByID(e){return this.itemsDOM.querySelector(`[data-ui5-external-action-item-id="${e}"]`)}};h([l()],c.prototype,"alignContent",void 0);h([l({type:Number})],c.prototype,"width",void 0);h([l({type:Number})],c.prototype,"contentWidth",void 0);h([l({type:Boolean})],c.prototype,"reverseOverflow",void 0);h([l()],c.prototype,"accessibleName",void 0);h([l()],c.prototype,"accessibleNameRef",void 0);h([l()],c.prototype,"design",void 0);h([K({default:!0,type:HTMLElement,invalidateOnChildChange:!0})],c.prototype,"items",void 0);c=g=h([W({tag:"ui5-toolbar",languageAware:!0,renderer:U,template:le})],c);c.define();const ce=c,pe=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"})),_=M("ui5-toolbar",["accessibleName","accessibleNameRef","alignContent","design"],[],[],[],()=>q(()=>Promise.resolve().then(()=>pe),void 0,import.meta.url));_.displayName="Toolbar";try{_.displayName="Toolbar",_.__docgenInfo={description:`The \`Toolbar\` component is used to create a horizontal layout with items.
The items can be overflowing in a popover, when the space is not enough to show all of them.

### Keyboard Handling
The \`Toolbar\` provides advanced keyboard handling.

- The control is not interactive, but can contain of interactive elements
- [Tab] - iterates through elements



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Toolbar",props:{children:{defaultValue:null,description:"Defines the items of the component.\n\n  **Note:** Currently only `ToolbarButton`, `ToolbarSelect`, `ToolbarSeparator` and `ToolbarSpacer` are allowed here.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the input.",name:"accessibleNameRef",required:!1,type:{name:"string"}},alignContent:{defaultValue:{value:'"End"'},description:"Indicated the direction in which the Toolbar items will be aligned.",name:"alignContent",required:!1,type:{name:"enum",value:[{value:'"Start"'},{value:'"End"'},{value:'"Start"'},{value:'"End"'}]}},design:{defaultValue:{value:'"Solid"'},description:`Defines the toolbar design.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"design",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"Solid"'},{value:'"Solid"'},{value:'"Transparent"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{_.displayName="Toolbar",_.__docgenInfo={description:`The \`Toolbar\` component is used to create a horizontal layout with items.
The items can be overflowing in a popover, when the space is not enough to show all of them.

### Keyboard Handling
The \`Toolbar\` provides advanced keyboard handling.

- The control is not interactive, but can contain of interactive elements
- [Tab] - iterates through elements



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Toolbar",props:{children:{defaultValue:null,description:"Defines the items of the component.\n\n  **Note:** Currently only `ToolbarButton`, `ToolbarSelect`, `ToolbarSeparator` and `ToolbarSpacer` are allowed here.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the input.",name:"accessibleNameRef",required:!1,type:{name:"string"}},alignContent:{defaultValue:{value:'"End"'},description:"Indicated the direction in which the Toolbar items will be aligned.",name:"alignContent",required:!1,type:{name:"enum",value:[{value:'"Start"'},{value:'"End"'},{value:'"Start"'},{value:'"End"'}]}},design:{defaultValue:{value:'"Solid"'},description:`Defines the toolbar design.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"design",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"Solid"'},{value:'"Solid"'},{value:'"Transparent"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{y as T,_ as a,S as b,oe as r};
