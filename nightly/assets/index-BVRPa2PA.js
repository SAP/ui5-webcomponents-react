import{j as f,c as S,F as M,p as h,d as _,s,m as R,e as z,I as E,q as k,w as B}from"./withWebComponent-DfVDXLfc.js";import{d as L}from"./slot-_4yKMUwC.js";import{l as V}from"./event-strict-DgQLNDEV.js";import{f as D}from"./ResizeHandler-DlOwLzX7.js";import{A as U}from"./AccessibilityTextsHelper-CSnJP9TL.js";import"./overflow-CoFnpJEV.js";import{i as j}from"./i18n-DEVDpFvK.js";import"./utils-C9_9ShpY.js";import{bP as x}from"./i18n-defaults-Cyg2J0QB.js";import{a as I}from"./Button-Bn6Q5CAy.js";import{d as F}from"./Popover-D2H5tr2x.js";import{i as $}from"./overflow-C57CDQ5m.js";import{d as O}from"./parameters-bundle.css-BzaqQttB.js";import{m as H,d as A}from"./useIsomorphicLayoutEffect-Clyi7m9u.js";var T;(function(i){i.Default="Default",i.NeverOverflow="NeverOverflow",i.AlwaysOverflow="AlwaysOverflow"})(T||(T={}));const v=T;function K(){return f(F,{class:"ui5-overflow-popover",placement:"Bottom",horizontalAlign:"End",onClose:this.onOverflowPopoverClosed,onOpen:this.onOverflowPopoverOpened,hideArrow:!0,children:f("div",{class:{"ui5-overflow-list":!0,"ui5-overflow-list--alignleft":this.hasItemWithText},children:this.overflowItems.map(i=>i.toolbarPopoverTemplate.call(i.context))})})}function G(){return S(M,{children:[S("div",{class:{"ui5-tb-items":!0,"ui5-tb-items-full-width":this.hasFlexibleSpacers},role:this.accInfo.root.role,"aria-label":this.accInfo.root.accessibleName,children:[this.standardItems.map(i=>i.toolbarTemplate.call(i.context)),f(I,{"aria-hidden":this.hideOverflowButton,icon:$,design:"Transparent",class:{"ui5-tb-item":!0,"ui5-tb-overflow-btn":!0,"ui5-tb-overflow-btn-hidden":this.hideOverflowButton},tooltip:this.accInfo.overflowButton.tooltip,accessibleName:this.accInfo.overflowButton.accessibleName,accessibilityAttributes:this.accInfo.overflowButton.accessibilityAttributes})]}),K.call(this)]})}h("@ui5/webcomponents-theming","sap_horizon",async()=>_);h("@ui5/webcomponents","sap_horizon",async()=>O);const J=`:host(:not([hidden])){width:100%;height:var(--_ui5-v2-6-2-toolbar-height);display:flex;align-items:center;justify-content:flex-end;box-sizing:border-box;border-bottom:.0625rem solid var(--sapGroup_ContentBorderColor);padding:0 var(--_ui5-v2-6-2-toolbar-padding-left) 0 var(--_ui5-v2-6-2-toolbar-padding-right);background-color:var(--sapList_HeaderBackground)}:host([align-content="Start"]){justify-content:flex-start}.ui5-tb-items{width:100%;height:100%;display:inherit;align-items:inherit;justify-content:inherit;gap:var(--_ui5-v2-6-2-toolbar-items-gap)}.ui5-tb-items-full-width{width:100%}.ui5-tb-item{flex-shrink:0}.ui5-tb-separator{height:var(--_ui5-v2-6-2-toolbar-separator-height);width:.0625rem;background:var(--sapToolbar_SeparatorColor);box-sizing:border-box}.ui5-tb-overflow-btn-hidden{visibility:hidden;position:absolute}:host([design="Transparent"]){background-color:transparent}
`;h("@ui5/webcomponents-theming","sap_horizon",async()=>_);h("@ui5/webcomponents","sap_horizon",async()=>O);const Q=`.ui5-overflow-popover::part(content){padding:var(--_ui5-v2-6-2_toolbar_overflow_padding)}.ui5-overflow-list{display:flex;flex-direction:column;justify-content:center;align-items:center}.ui5-tb-popover-item{width:100%}.ui5-tb-popover-item:not(:last-child){margin-bottom:.25rem}.ui5-tb-separator-in-overflow{display:none;height:.0625rem;background:var(--sapToolbar_SeparatorColor);box-sizing:border-box}.ui5-tb-separator-in-overflow[visible]{display:block}
`,w=H("ToolbarItem.registry",new Map),X=i=>{w.set(i.getMetadata().getPureTag(),i)},Y=i=>{if(!w.has(i))throw new Error(`No template found for ${i}`);return w.get(i)},Z=()=>[...w.values()].map(i=>i.styles);var p=function(i,e,t,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,o);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(n=(r<3?a(n):r>3?a(e,t,n):a(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n},g;function P(i,e){return Number(i.getPropertyValue(e).replace("rem",""))*parseInt(getComputedStyle(document.body).getPropertyValue("font-size"))}function C(i,e){return Number(i.getPropertyValue(e).replace("px",""))}let d=g=class extends E{static get styles(){const e=Z();return[J,Q,...e]}constructor(){super(),this.alignContent="End",this.reverseOverflow=!1,this.design="Solid",this.itemsToOverflow=[],this.itemsWidth=0,this.minContentWidth=0,this.popoverOpen=!1,this.itemsWidthMeasured=!1,this.ITEMS_WIDTH_MAP=new Map,this._onResize=this.onResize.bind(this),this._onInteract=e=>this.onInteract(e)}get overflowButtonSize(){var e;return((e=this.overflowButtonDOM)==null?void 0:e.getBoundingClientRect().width)||0}get padding(){const e=getComputedStyle(this.getDomRef());return P(e,A("--_ui5-toolbar-padding-left"))+P(e,A("--_ui5-toolbar-padding-right"))}get subscribedEvents(){return this.items.map(e=>Array.from(e.subscribedEvents.keys())).flat().filter((e,t,o)=>o.indexOf(e)===t)}get alwaysOverflowItems(){return this.items.filter(e=>e.overflowPriority===v.AlwaysOverflow)}get movableItems(){return this.items.filter(e=>e.overflowPriority!==v.AlwaysOverflow&&e.overflowPriority!==v.NeverOverflow)}get overflowItems(){const e=this.getItemsInfo(this.itemsToOverflow.filter(t=>!t.ignoreSpace));return this.reverseOverflow?e.reverse():e}get standardItems(){return this.getItemsInfo(this.items.filter(e=>this.itemsToOverflow.indexOf(e)===-1))}get hideOverflowButton(){return this.itemsToOverflow.filter(e=>!(e.ignoreSpace||e.isSeparator)).length===0}get interactiveItemsCount(){return this.items.filter(e=>e.isInteractive).length}get hasAriaSemantics(){return this.interactiveItemsCount>1}get accessibleRole(){return this.hasAriaSemantics?"toolbar":void 0}get ariaLabelText(){return this.hasAriaSemantics?U(this):void 0}get accInfo(){var e;return{root:{role:this.accessibleRole,accessibleName:this.ariaLabelText},overflowButton:{accessibleName:g.i18nBundle.getText(x),tooltip:g.i18nBundle.getText(x),accessibilityAttributes:{expanded:(e=this.overflowButtonDOM)==null?void 0:e.accessibilityAttributes.expanded,hasPopup:"menu"}}}}get overflowButtonDOM(){return this.shadowRoot.querySelector(".ui5-tb-overflow-btn")}get itemsDOM(){return this.shadowRoot.querySelector(".ui5-tb-items")}get hasItemWithText(){return this.itemsToOverflow.some(e=>e.containsText)}get hasFlexibleSpacers(){return this.items.some(e=>e.hasFlexibleWidth)}onEnterDOM(){D.register(this,this._onResize)}onExitDOM(){D.deregister(this,this._onResize)}onInvalidation(e){e.reason==="childchange"&&e.child===this.itemsToOverflow[0]&&this.onToolbarItemChange()}onBeforeRendering(){this.detachListeners(),this.attachListeners(),this.preprocessItems()}async onAfterRendering(){await k(),this.storeItemsWidth(),this.processOverflowLayout()}isOverflowOpen(){return this.getOverflowPopover().open}openOverflow(){const e=this.getOverflowPopover();e.opener=this.overflowButtonDOM,e.open=!0,this.reverseOverflow=e.actualPlacement==="Top"}closeOverflow(){const e=this.getOverflowPopover();e.open=!1}toggleOverflow(){this.popoverOpen?this.closeOverflow():this.openOverflow()}getOverflowPopover(){return this.shadowRoot.querySelector(".ui5-overflow-popover")}processOverflowLayout(){const e=this.offsetWidth-this.padding,t=this.itemsWidth;let o=t-e+this.overflowButtonSize;t<=e&&(o=0),!(this.width===e&&this.contentWidth===t)&&(this.distributeItems(o),this.width=e,this.contentWidth=t)}storeItemsWidth(){let e=0,t=0;if(this.items.forEach(o=>{const r=this.getItemWidth(o);e+=r,o.overflowPriority===v.NeverOverflow&&(t+=r),this.ITEMS_WIDTH_MAP.set(o._id,r)}),t!==this.minContentWidth){const o=this.offsetWidth-this.getDomRef().offsetWidth;this.fireDecoratorEvent("_min-content-width-change",{minWidth:t+o+this.overflowButtonSize})}this.itemsWidth=e,this.minContentWidth=t}distributeItems(e=0){const t=this.movableItems.reverse();let o=0,r=t[o];for(this.itemsToOverflow=[],this.distributeItemsThatAlwaysOverflow();e>0&&r;)this.itemsToOverflow.unshift(r),e-=this.getCachedItemWidth(r==null?void 0:r._id)||0,o++,r=t[o];if(o<t.length){let n=t[o];for(;o<=t.length-1&&n.isSeparator;)this.itemsToOverflow.unshift(n),o++,n=t[o]}this.setSeperatorsVisibilityInOverflow()}distributeItemsThatAlwaysOverflow(){this.alwaysOverflowItems.forEach(e=>{this.itemsToOverflow.push(e)})}setSeperatorsVisibilityInOverflow(){this.itemsToOverflow.forEach((e,t,o)=>{e.isSeparator&&(e.visible=this.shouldShowSeparatorInOverflow(t,o))})}shouldShowSeparatorInOverflow(e,t){let o=!1,r=!1;return t.forEach((n,a)=>{a<e&&!n.isSeparator&&(o=!0),a>e&&!n.isSeparator&&(r=!0)}),o&&r}onOverflowPopoverClosed(){this.popoverOpen=!1,this.overflowButtonDOM&&(this.overflowButtonDOM.accessibilityAttributes.expanded=!1)}onBeforeClose(e){e.preventDefault()}onOverflowPopoverOpened(){this.popoverOpen=!0,this.overflowButtonDOM&&(this.overflowButtonDOM.accessibilityAttributes.expanded=!0)}onResize(){this.itemsWidth&&(this.closeOverflow(),this.processOverflowLayout())}onInteract(e){e.stopImmediatePropagation();const t=e.target,o=t.closest(".ui5-tb-item")||t.closest(".ui5-tb-popover-item");if(t===this.overflowButtonDOM){this.toggleOverflow();return}if(!o)return;const r=t.getAttribute("data-ui5-external-action-item-id");if(r){const n=this.getItemByID(r),a=e.type,l=e.type.replace("ui5-",""),W=!(n!=null&&n.fireEvent(l,{...e.detail,targetRef:t})),y=(n==null?void 0:n.subscribedEvents.get(a))||(n==null?void 0:n.subscribedEvents.get(l));if(W||n!=null&&n.preventOverflowClosing||y!=null&&y.preventClosing)return;this.closeOverflow()}}attachListeners(){const e=this.getOverflowPopover();this.subscribedEvents.forEach(t=>{var o;(o=this.itemsDOM)==null||o.addEventListener(t,this._onInteract),e==null||e.addEventListener(t,this._onInteract)})}detachListeners(){const e=this.getOverflowPopover();this.subscribedEvents.forEach(t=>{var o;(o=this.itemsDOM)==null||o.removeEventListener(t,this._onInteract),e==null||e.removeEventListener(t,this._onInteract)})}onToolbarItemChange(){this.itemsToOverflow=[],this.contentWidth=0}getItemsInfo(e){return e.map(t=>{const o=t.constructor,r=Y(o.getMetadata().getPureTag());return r?{toolbarTemplate:r.toolbarTemplate,toolbarPopoverTemplate:r.toolbarPopoverTemplate,context:t}:null}).filter(t=>!!t)}getItemWidth(e){if(e.ignoreSpace||e.isSeparator)return 0;const t=e._id,o=this.getRegisteredToolbarItemByID(t);let r=0;if(o){const n=getComputedStyle(o);r=o.offsetWidth+C(n,"margin-inline-end")+C(n,"margin-inline-start")}else r=this.getCachedItemWidth(t)||0;return Math.ceil(r)}getCachedItemWidth(e){return this.ITEMS_WIDTH_MAP.get(e)}getItemByID(e){return this.items.find(t=>t._id===e)}getRegisteredToolbarItemByID(e){return this.itemsDOM.querySelector(`[data-ui5-external-action-item-id="${e}"]`)}preprocessItems(){this.items.forEach(e=>{e._getRealDomRef=()=>this.getDomRef().querySelector(`[data-ui5-stable*=${e.stableDomRef}]`)??this.getOverflowPopover().querySelector(`[data-ui5-stable*=${e.stableDomRef}]`)})}};p([s()],d.prototype,"alignContent",void 0);p([s({type:Number})],d.prototype,"width",void 0);p([s({type:Number})],d.prototype,"contentWidth",void 0);p([s({type:Boolean})],d.prototype,"reverseOverflow",void 0);p([s()],d.prototype,"accessibleName",void 0);p([s()],d.prototype,"accessibleNameRef",void 0);p([s()],d.prototype,"design",void 0);p([L({default:!0,type:HTMLElement,invalidateOnChildChange:!0})],d.prototype,"items",void 0);p([j("@ui5/webcomponents")],d,"i18nBundle",void 0);d=g=p([R({tag:"ui5-toolbar",languageAware:!0,renderer:z,template:G}),V("_min-content-width-change",{bubbles:!0})],d);d.define();const m=B("ui5-toolbar",["accessibleName","accessibleNameRef","alignContent","design"],[],[],[]);m.displayName="Toolbar";try{m.displayName="Toolbar",m.__docgenInfo={description:`The \`Toolbar\` component is used to create a horizontal layout with items.
The items can be overflowing in a popover, when the space is not enough to show all of them.

### Keyboard Handling
The \`Toolbar\` provides advanced keyboard handling.

- The control is not interactive, but can contain of interactive elements
- [Tab] - iterates through elements



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Toolbar",props:{children:{defaultValue:null,description:"Defines the items of the component.\n\n  **Note:** Currently only `ToolbarButton`, `ToolbarSelect`, `ToolbarSeparator` and `ToolbarSpacer` are allowed here.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the input.",name:"accessibleNameRef",required:!1,type:{name:"string"}},alignContent:{defaultValue:{value:'"End"'},description:"Indicated the direction in which the Toolbar items will be aligned.",name:"alignContent",required:!1,type:{name:"enum",value:[{value:'"Start"'},{value:'"End"'},{value:'"Start"'},{value:'"End"'}]}},design:{defaultValue:{value:'"Solid"'},description:`Defines the toolbar design.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"design",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"Solid"'},{value:'"Solid"'},{value:'"Transparent"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{m.displayName="Toolbar",m.__docgenInfo={description:`The \`Toolbar\` component is used to create a horizontal layout with items.
The items can be overflowing in a popover, when the space is not enough to show all of them.

### Keyboard Handling
The \`Toolbar\` provides advanced keyboard handling.

- The control is not interactive, but can contain of interactive elements
- [Tab] - iterates through elements



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Toolbar",props:{children:{defaultValue:null,description:"Defines the items of the component.\n\n  **Note:** Currently only `ToolbarButton`, `ToolbarSelect`, `ToolbarSeparator` and `ToolbarSpacer` are allowed here.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the input.",name:"accessibleNameRef",required:!1,type:{name:"string"}},alignContent:{defaultValue:{value:'"End"'},description:"Indicated the direction in which the Toolbar items will be aligned.",name:"alignContent",required:!1,type:{name:"enum",value:[{value:'"Start"'},{value:'"End"'},{value:'"Start"'},{value:'"End"'}]}},design:{defaultValue:{value:'"Solid"'},description:`Defines the toolbar design.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"design",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"Solid"'},{value:'"Solid"'},{value:'"Transparent"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var q=function(i,e,t,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,o);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(n=(r<3?a(n):r>3?a(e,t,n):a(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n};class N extends E{constructor(){super(...arguments),this.overflowPriority="Default",this.preventOverflowClosing=!1}get ignoreSpace(){return!1}get containsText(){return!1}get hasFlexibleWidth(){return!1}get isInteractive(){return!0}get isSeparator(){return!1}static get toolbarTemplate(){throw new Error("Template must be defined")}static get toolbarPopoverTemplate(){throw new Error("Popover template must be defined")}get subscribedEvents(){return new Map}get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}}q([s()],N.prototype,"overflowPriority",void 0);q([s({type:Boolean})],N.prototype,"preventOverflowClosing",void 0);function ee(){return f(I,{class:"ui5-tb-button ui5-tb-item",id:this.id,style:{width:this.width,display:this.hidden?"none":"inline-block"},icon:this.icon,endIcon:this.endIcon,tooltip:this.tooltip,accessibleName:this.accessibleName,accessibleNameRef:this.accessibleNameRef,accessibilityAttributes:this.accessibilityAttributes,design:this.design,disabled:this.disabled,hidden:this.hidden,"data-ui5-external-action-item-id":this._id,"data-ui5-stable":this.stableDomRef,children:this.text})}function te(){return f(I,{icon:this.icon,endIcon:this.endIcon,accessibleName:this.accessibleName,accessibleNameRef:this.accessibleNameRef,accessibilityAttributes:this.accessibilityAttributes,tooltip:this.tooltip,design:this.design,disabled:this.disabled,hidden:this.hidden,class:"ui5-tb-popover-button ui5-tb-popover-item","data-ui5-external-action-item-id":this._id,"data-ui5-stable":this.stableDomRef,children:this.text})}h("@ui5/webcomponents-theming","sap_horizon",async()=>_);h("@ui5/webcomponents","sap_horizon",async()=>O);const oe=`:not([icon-only]).ui5-tb-popover-button::part(button){justify-content:start}
`;var c=function(i,e,t,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,o);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(n=(r<3?a(n):r>3?a(e,t,n):a(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n};let u=class extends N{constructor(){super(...arguments),this.disabled=!1,this.design="Default",this.accessibilityAttributes={}}get styles(){return{width:this.width,display:this.hidden?"none":"inline-block"}}get containsText(){return!0}static get toolbarTemplate(){return ee}static get toolbarPopoverTemplate(){return te}get subscribedEvents(){const e=new Map;return e.set("click",{preventClosing:!1}),e}};c([s({type:Boolean})],u.prototype,"disabled",void 0);c([s()],u.prototype,"design",void 0);c([s()],u.prototype,"icon",void 0);c([s()],u.prototype,"endIcon",void 0);c([s()],u.prototype,"tooltip",void 0);c([s()],u.prototype,"accessibleName",void 0);c([s()],u.prototype,"accessibleNameRef",void 0);c([s({type:Object})],u.prototype,"accessibilityAttributes",void 0);c([s()],u.prototype,"text",void 0);c([s()],u.prototype,"width",void 0);u=c([R({tag:"ui5-toolbar-button",styles:oe}),V("click",{bubbles:!0,cancelable:!0})],u);X(u);u.define();const b=B("ui5-toolbar-button",["accessibilityAttributes","accessibleName","accessibleNameRef","design","endIcon","icon","overflowPriority","text","tooltip","width"],["disabled","preventOverflowClosing"],[],["click"]);b.displayName="ToolbarButton";try{b.displayName="ToolbarButton",b.__docgenInfo={description:`The \`ToolbarButton\` represents an abstract action,
used in the \`Toolbar\`.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ToolbarButton",props:{onClick:{defaultValue:null,description:`Fired when the component is activated either with a
mouse/tap or by using the Enter or Space key.

**Note:** The event will not be fired if the \`disabled\`
property is set to \`true\`.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ToolbarButtonDomRef, never>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines the additional accessibility attributes that will be applied to the component.\n\nThe following fields are supported:\n\n- **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.\nAccepts the following string values: `true` or `false`\n\n- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.\nAccepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.\n\n- **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.\nAccepts a lowercase string value.",name:"accessibilityAttributes",required:!1,type:{name:"ButtonAccessibilityAttributes"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},design:{defaultValue:{value:'"Default"'},description:"Defines the action design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines if the action is disabled.

**Note:** a disabled action can't be pressed or focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:{value:"undefined"},description:"Defines the icon, displayed as graphical element within the component after the button text.\n\n**Note:** It is highly recommended to use `endIcon` property only together with `icon` and/or `text` properties.\nUsage of `endIcon` only should be avoided.\n\nThe SAP-icons font provides numerous options.\n\nExample:\nSee all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).",name:"endIcon",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"undefined"},description:`Defines the \`icon\` source URI.

**Note:** SAP-icons font provides numerous buil-in icons. To find all the available icons, see the
[Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},overflowPriority:{defaultValue:{value:'"Default"'},description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.`,name:"overflowPriority",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'}]}},preventOverflowClosing:{defaultValue:{value:"false"},description:`Defines if the toolbar overflow popup should close upon intereaction with the item.
It will close by default.`,name:"preventOverflowClosing",required:!1,type:{name:"boolean"}},text:{defaultValue:{value:"undefined"},description:"Button text",name:"text",required:!1,type:{name:"string"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the tooltip of the component.

**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.`,name:"tooltip",required:!1,type:{name:"string"}},width:{defaultValue:{value:"undefined"},description:`Defines the width of the button.

**Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.`,name:"width",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{b.displayName="ToolbarButton",b.__docgenInfo={description:`The \`ToolbarButton\` represents an abstract action,
used in the \`Toolbar\`.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ToolbarButton",props:{onClick:{defaultValue:null,description:`Fired when the component is activated either with a
mouse/tap or by using the Enter or Space key.

**Note:** The event will not be fired if the \`disabled\`
property is set to \`true\`.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ToolbarButtonDomRef, never>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines the additional accessibility attributes that will be applied to the component.\n\nThe following fields are supported:\n\n- **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.\nAccepts the following string values: `true` or `false`\n\n- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.\nAccepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.\n\n- **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.\nAccepts a lowercase string value.",name:"accessibilityAttributes",required:!1,type:{name:"ButtonAccessibilityAttributes"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},design:{defaultValue:{value:'"Default"'},description:"Defines the action design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines if the action is disabled.

**Note:** a disabled action can't be pressed or focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:{value:"undefined"},description:"Defines the icon, displayed as graphical element within the component after the button text.\n\n**Note:** It is highly recommended to use `endIcon` property only together with `icon` and/or `text` properties.\nUsage of `endIcon` only should be avoided.\n\nThe SAP-icons font provides numerous options.\n\nExample:\nSee all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).",name:"endIcon",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"undefined"},description:`Defines the \`icon\` source URI.

**Note:** SAP-icons font provides numerous buil-in icons. To find all the available icons, see the
[Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},overflowPriority:{defaultValue:{value:'"Default"'},description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.`,name:"overflowPriority",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'}]}},preventOverflowClosing:{defaultValue:{value:"false"},description:`Defines if the toolbar overflow popup should close upon intereaction with the item.
It will close by default.`,name:"preventOverflowClosing",required:!1,type:{name:"boolean"}},text:{defaultValue:{value:"undefined"},description:"Button text",name:"text",required:!1,type:{name:"string"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the tooltip of the component.

**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.`,name:"tooltip",required:!1,type:{name:"string"}},width:{defaultValue:{value:"undefined"},description:`Defines the width of the button.

**Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.`,name:"width",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{b as T,m as a,v as b,N as c,X as r};
