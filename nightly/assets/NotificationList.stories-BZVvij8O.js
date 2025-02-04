import{j as a}from"./jsx-runtime-CLpGMVip.js";import{A as he}from"./AvatarColorScheme-Bo7yU2Uu.js";import{A as S}from"./AvatarSize-BceVhWoP.js";import{W as U}from"./WrappingType-CW8URInd.js";import{e as Y}from"./employee-6Ll6dvTX.js";import{A as M}from"./index-DM-FMAOd.js";import{L as F}from"./index-Dwb1LPrJ.js";import{M as R}from"./index-CW0RC0zW.js";import{M as _}from"./index-BfKO9vfJ.js";import{i as G,s as fe,y as ge,g as be,K as ve,c as _e,a3 as Z,D as ee,P as ye,V as we,a4 as Ne}from"./Keys-Can65e7H.js";import{s as h,m as A,a as f,j as u,p as x,d as $,e as X,S as Te,w as K,F as Ie}from"./withWebComponent-LqdGbSZi.js";import{d as L}from"./slot-_4yKMUwC.js";import{l as y}from"./event-strict-DgQLNDEV.js";import{i as ce}from"./i18n-oG4QvOAt.js";import{b as xe}from"./TabbableElements-XzXYKyvZ.js";import{t as te}from"./getActiveElement-kltGt_DR.js";import{e as Le,d as de}from"./List-BK1I8Ka1.js";import{c as De}from"./FocusableElements-C_2yNLne.js";import{aO as Ce,aP as Se,aQ as Me,aR as Ae,aS as Oe,aT as Fe,aU as qe,aV as Re,aW as Ee,aX as ke,aY as Pe,aZ as Ve,a_ as je,a$ as Be,b0 as Ue,b1 as ze,b2 as He,b3 as We,b4 as Ge}from"./i18n-defaults-CJXxxQPr.js";import{i as $e}from"./navigation-right-arrow-9DBTNFYu.js";import{n as Xe}from"./navigation-down-arrow-DfcNRVCL.js";import{B as pe}from"./BusyIndicator-BhVM01kP.js";import{I as z,f as me}from"./Icon-CA9P0PMV.js";import{d as J}from"./parameters-bundle.css-B5NQRWWq.js";import{o as Q}from"./query-DOGTENGM.js";import{f as ie}from"./ResizeHandler-pNyAs-as.js";import{o as p}from"./ValueState-Bg0UWejw.js";import{t as Ke}from"./willShowContent-CZcfsNXp.js";import{e as Je,a as Qe,s as Ye}from"./sys-enter-2-CfLvVMjo.js";import{i as Ze}from"./information-BpAjLqqt.js";import{a as oe}from"./Button-C6xPwCPp.js";import{a as et}from"./Link-iWVapVlB.js";import{T as tt}from"./Tag-C_HjJuC-.js";import{d as it}from"./decline-g3O-RcN7.js";import{i as ot}from"./overflow-CRwc-C3x.js";import{I as q}from"./IconDesign-DdknDamd.js";import{r as nt}from"./ItemNavigation-ChQSAlqN.js";var O=function(n,e,t,o){var s=arguments.length,i=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var l=n.length-1;l>=0;l--)(r=n[l])&&(i=(s<3?r(i):s>3?r(e,t,i):r(e,t))||i);return s>3&&i&&Object.defineProperty(e,t,i),i};class b extends Le{constructor(){super(...arguments),this.read=!1,this.loading=!1,this.loadingDelay=1e3}get hasTitleText(){var e;return!!((e=this.titleText)!=null&&e.length)}get loadingText(){return b.i18nFioriBundle.getText(Ce)}async _onkeydown(e){if(super._onkeydown(e),G(e)&&this.getFocusDomRef().matches(":has(:focus-within)")){e.preventDefault();return}if(fe(e)){e.stopImmediatePropagation();const t=te(),o=this.getHeaderDomRef();if(t===o){const s=await De(o);s==null||s.focus()}else o.focus()}}getHeaderDomRef(){return this.getFocusDomRef()}shouldForwardTabAfter(){const e=xe(this.getHeaderDomRef());return e.length===0||e[e.length-1]===te()}}O([h()],b.prototype,"titleText",void 0);O([h({type:Boolean})],b.prototype,"read",void 0);O([h({type:Boolean})],b.prototype,"loading",void 0);O([h({type:Number})],b.prototype,"loadingDelay",void 0);O([ce("@ui5/webcomponents-fiori")],b,"i18nFioriBundle",void 0);var at=function(n,e,t,o){var s=arguments.length,i=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var l=n.length-1;l>=0;l--)(r=n[l])&&(i=(s<3?r(i):s>3?r(e,t,i):r(e,t))||i);return s>3&&i&&Object.defineProperty(e,t,i),i};let E=class extends de{getEnabledItems(){return[]}_handleTabNext(){}onForwardBefore(){}onForwardAfter(){}onItemTabIndexChange(){}onItemFocused(){}_onfocusin(e){e.stopImmediatePropagation()}focusItem(e){e.focus()}};E=at([A("ui5-notification-group-list")],E);E.define();const st=E;function rt(){return f("li",{class:"ui5-nli-group-root ui5-nli-focusable",onFocusIn:this._onfocusin,onKeyDown:this._onkeydown,tabindex:this.forcedTabIndex?parseInt(this.forcedTabIndex):void 0,"aria-labelledby":this.ariaLabelledBy,"aria-description":this.accInvisibleText,"aria-level":1,children:[this.loading&&u("span",{id:`${this._id}-loading`,class:"ui5-hidden-text",children:this.loadingText}),u(pe,{delay:this.loadingDelay,active:this.loading,inert:this.loading,class:"ui5-nli-loading",children:f("div",{class:"ui5-nli-group-content-wrapper",children:[f("div",{class:{"ui5-nli-group-header":!0,"ui5-nli-group-header-expanded":this._expanded},onClick:this._onHeaderToggleClick,onKeyDown:this._onkeydown,role:"button","aria-expanded":this._expanded,"aria-controls":`${this._id}-notificationsList`,title:this.toggleIconAccessibleName,children:[u(z,{name:this.groupCollapsedIcon,class:"ui5-nli-group-toggle-icon",mode:"Decorative"}),u("div",{id:`${this._id}-title-text`,class:"ui5-nli-group-title-text",part:"title-text",role:"heading","aria-level":2,children:this.titleText}),u("div",{class:"ui5-nli-group-divider"})]}),u(st,{id:`${this._id}-notificationsList`,class:"ui5-nli-group-items",accessibleNameRef:`${this._id}-title-text`,growing:this.growing,onLoadMore:this._onLoadMore,children:u("slot",{})})]})})]})}x("@ui5/webcomponents-theming","sap_horizon",async()=>$);x("@ui5/webcomponents-fiori","sap_horizon",async()=>J);const lt=`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:block;max-width:100%;min-height:var(--_ui5-v2-7-0_list_item_base_height);background:var(--ui5-v2-7-0-listitem-background-color);cursor:pointer}.ui5-nli-focusable:focus{outline:none}:host([desktop]) .ui5-nli-focusable:focus:not(.ui5-nli-group-root):after,.ui5-nli-focusable:focus-visible:not(.ui5-nli-group-root):after{content:"";border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);position:absolute;inset:0;pointer-events:none}.ui5-state-icon{min-width:1rem;min-height:1rem;padding-inline-end:var(--_ui5-v2-7-0-notification_item-state-icon-padding)}:host([collapsed]) .ui5-nli-group-items{display:none}:host([read]) .ui5-nli-group-title-text{font-weight:400}.ui5-nli-group-root{width:100%}.ui5-nli-group-content-wrapper{position:relative;box-sizing:border-box;width:100%;display:flex;flex-direction:column}[ui5-busy-indicator]{width:100%}.ui5-nli-group-header{height:2.75rem;position:sticky;top:0;z-index:90;background:var(--sapList_GroupHeaderBackground);display:flex;align-items:center;padding-inline:var(--_ui5-v2-7-0-notification_group_header-padding);width:100%;border-bottom:var(--_ui5-v2-7-0-notification_group_header-border-bottom-width) solid var(--sapList_GroupHeaderBorderColor);box-sizing:border-box;cursor:pointer;margin-bottom:var(--_ui5-v2-7-0-notification_group_header-margin)}.ui5-nli-group-header-expanded{margin-bottom:var(--_ui5-v2-7-0-notification_group_header-margin-expanded)}:host([desktop]) .ui5-nli-focusable.ui5-nli-group-root:focus .ui5-nli-group-header:before,.ui5-nli-focusable.ui5-nli-group-root:focus-visible .ui5-nli-group-header:before{content:"";border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);position:absolute;top:var(--_ui5-v2-7-0-notification_group_header-margin);bottom:var(--_ui5-v2-7-0-notification_group_header-margin);left:0;right:0;pointer-events:none}.ui5-nli-group-toggle-icon{min-width:1rem;min-height:1rem;margin-inline:.5rem;color:var(--sapContent_IconColor)}.ui5-nli-group-title-text{color:var(--sapGroup_TitleTextColor);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontHeader5Size);font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:2rem;margin-inline-start:.75rem}.ui5-nli-group-divider{flex:1}:host([ui5-li-notification-group]){-webkit-tap-highlight-color:transparent}[ui5-notification-group-list]::part(growing-button){border:none}[ui5-notification-group-list]::part(growing-button-inner){margin:var(--_ui5-v2-7-0-notification_item-margin);border:var(--_ui5-v2-7-0-notification_item-border-top-left-right);border-radius:var(--_ui5-v2-7-0-notification_item-border-radius)}[ui5-notification-group-list]::part(growing-button-inner){border-radius:var(--_ui5-v2-7-0-notification_item-border-radius)}[ui5-notification-group-list]::part(growing-button-inner):focus,[ui5-notification-group-list]::part(growing-button-inner):focus-visible{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:var(--_ui5-v2-7-0-notification_item-outline-offset)}[ui5-notification-group-list]::part(growing-button-inner):focus:active,[ui5-notification-group-list]::part(growing-button-inner):focus-visible:active{background-color:var(--_ui5-v2-7-0-notification_item-growing-btn-background-color-active);border-radius:var(--_ui5-v2-7-0-notification_item-border-radius);border:var(--_ui5-v2-7-0-notification_item-border-active)}
`;var V=function(n,e,t,o){var s=arguments.length,i=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var l=n.length-1;l>=0;l--)(r=n[l])&&(i=(s<3?r(i):s>3?r(e,t,i):r(e,t))||i);return s>3&&i&&Object.defineProperty(e,t,i),i},N;let w=N=class extends b{constructor(){super(...arguments),this.collapsed=!1,this.growing="None"}onBeforeRendering(){super.onBeforeRendering(),this.items.forEach(e=>{e._ariaLevel=2}),this.loading&&this.clearChildBusyIndicator(),this.actionable=!1}clearChildBusyIndicator(){this.items.forEach(e=>{e.loading=!1})}get toggleIconAccessibleName(){return N.i18nFioriBundle.getText(Se)}get accInvisibleText(){return`${this.groupText} ${this.expandText}`}get expandText(){return this.collapsed?N.i18nFioriBundle.getText(Me):N.i18nFioriBundle.getText(Ae)}get groupText(){return N.i18nFioriBundle.getText(Oe)}get ariaLabelledBy(){const e=this._id;if(this.loading)return`${e}-loading`;const t=[];return this.hasTitleText&&t.push(`${e}-title-text`),t.join(" ")}get _expanded(){return!this.collapsed}get _pressable(){return!1}get groupCollapsedIcon(){return this.collapsed?$e:Xe}toggleCollapsed(){this.collapsed=!this.collapsed,this.fireDecoratorEvent("toggle",{item:this})}_onHeaderToggleClick(){this.toggleCollapsed()}_onLoadMore(){this.fireDecoratorEvent("load-more")}get loadMoreButton(){var t,o;return(o=((t=this.getDomRef())==null?void 0:t.querySelector("[ui5-notification-group-list]")).getDomRef())==null?void 0:o.querySelector(".ui5-growing-button-inner")}async _onkeydown(e){if(!this.matches(":focus"))return;await super._onkeydown(e);const o=G(e),s=ge(e),i=be(e),r=ve(e),l=_e(e);o&&this.toggleCollapsed(),(s||l)&&this.collapsed&&(this.toggleCollapsed(),e.stopImmediatePropagation()),(i||r)&&(this.collapsed||(this.toggleCollapsed(),e.stopImmediatePropagation()))}getHeaderDomRef(){var e;return(e=this.getDomRef())==null?void 0:e.querySelector(".ui5-nli-group-header")}};V([h({type:Boolean})],w.prototype,"collapsed",void 0);V([h()],w.prototype,"growing",void 0);V([L({type:HTMLElement,default:!0})],w.prototype,"items",void 0);w=N=V([A({tag:"ui5-li-notification-group",languageAware:!0,renderer:X,styles:[lt],template:rt}),y("toggle",{bubbles:!0}),y("load-more",{bubbles:!0})],w);w.define();const ut=w;var ct=function(n,e,t,o){var s=arguments.length,i=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var l=n.length-1;l>=0;l--)(r=n[l])&&(i=(s<3?r(i):s>3?r(e,t,i):r(e,t))||i);return s>3&&i&&Object.defineProperty(e,t,i),i};let k=class extends de{constructor(){super(),this._itemNavigation._navigationMode=nt.Auto}getEnabledItems(){const e=new Array;return this.getItems().forEach(t=>{e.push(t),t instanceof ut&&!t.collapsed&&!t.loading&&t.items.forEach(o=>{e.push(o)})}),e}};k=ct([A("ui5-notification-list-internal")],k);k.define();const dt=k;function pt(){return u(dt,{accessibleName:this._accessibleName,noDataText:this.noDataText,onItemClick:this._onItemClick,onItemClose:this._onItemClose,onItemToggle:this._onItemToggle,onLoadMore:this._onLoadMore,children:u("slot",{})})}x("@ui5/webcomponents-theming","sap_horizon",async()=>$);x("@ui5/webcomponents-fiori","sap_horizon",async()=>J);const mt=`:host(:not([hidden])){display:block}[ui5-notification-list-internal]{height:100%}
`;var j=function(n,e,t,o){var s=arguments.length,i=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var l=n.length-1;l>=0;l--)(r=n[l])&&(i=(s<3?r(i):s>3?r(e,t,i):r(e,t))||i);return s>3&&i&&Object.defineProperty(e,t,i),i},H;let T=H=class extends Te{get _accessibleName(){return H.i18nFioriBundle.getText(Fe)}getEnabledItems(){var e;return((e=this.innerList)==null?void 0:e.getEnabledItems())||[]}get innerList(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("[ui5-notification-list-internal]")}_onItemClick(e){const t=e.detail.item;this.fireDecoratorEvent("item-click",{item:t})||e.preventDefault()}_onItemClose(e){const t=e.detail.item;this.fireDecoratorEvent("item-close",{item:t})||e.preventDefault()}_onItemToggle(e){const t=e.detail.item;this.fireDecoratorEvent("item-toggle",{item:t})||e.preventDefault()}_onLoadMore(){this.fireDecoratorEvent("load-more")}};j([L({type:HTMLElement,default:!0})],T.prototype,"items",void 0);j([h()],T.prototype,"noDataText",void 0);j([ce("@ui5/webcomponents-fiori")],T,"i18nFioriBundle",void 0);T=H=j([A({tag:"ui5-notification-list",renderer:X,languageAware:!0,styles:[mt],template:pt}),y("item-click",{bubbles:!0,cancelable:!0}),y("item-close",{bubbles:!0,cancelable:!0}),y("item-toggle",{bubbles:!0,cancelable:!0})],T);T.define();const v=K("ui5-notification-list",["noDataText"],[],[],["item-click","item-close","item-toggle"]);v.displayName="NotificationList";try{v.displayName="NotificationList",v.__docgenInfo={description:`The \`NotificationList\` web component represents
a container for \`NotificationListGroupItem\` and \`NotificationListItem\`.

### Keyboard Handling

#### Basic Navigation
The \`NotificationList\` provides advanced keyboard handling.
When a list is focused the user can use the following keyboard
shortcuts in order to perform a navigation:

- [Up] or [Left] - Navigates up the items
- [Down] or [Right] - Navigates down the items
- [Home] - Navigates to first item
- [End] - Navigates to the last item

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"NotificationList",props:{children:{defaultValue:null,description:"Defines the items of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onItemClick:{defaultValue:null,description:`Fired when an item is clicked.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<NotificationListDomRef, NotificationItemEventDetail>) => void"}},onItemClose:{defaultValue:null,description:`Fired when the \`Close\` button of any item is clicked.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onItemClose",required:!1,type:{name:"(event: Ui5CustomEvent<NotificationListDomRef, NotificationItemEventDetail>) => void"}},onItemToggle:{defaultValue:null,description:`Fired when an item is toggled.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onItemToggle",required:!1,type:{name:"(event: Ui5CustomEvent<NotificationListDomRef, NotificationItemEventDetail>) => void"}},noDataText:{defaultValue:{value:"undefined"},description:"Defines the text that is displayed when the component contains no items.",name:"noDataText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{v.displayName="NotificationList",v.__docgenInfo={description:`The \`NotificationList\` web component represents
a container for \`NotificationListGroupItem\` and \`NotificationListItem\`.

### Keyboard Handling

#### Basic Navigation
The \`NotificationList\` provides advanced keyboard handling.
When a list is focused the user can use the following keyboard
shortcuts in order to perform a navigation:

- [Up] or [Left] - Navigates up the items
- [Down] or [Right] - Navigates down the items
- [Home] - Navigates to first item
- [End] - Navigates to the last item

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"NotificationList",props:{children:{defaultValue:null,description:"Defines the items of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onItemClick:{defaultValue:null,description:`Fired when an item is clicked.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<NotificationListDomRef, NotificationItemEventDetail>) => void"}},onItemClose:{defaultValue:null,description:`Fired when the \`Close\` button of any item is clicked.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onItemClose",required:!1,type:{name:"(event: Ui5CustomEvent<NotificationListDomRef, NotificationItemEventDetail>) => void"}},onItemToggle:{defaultValue:null,description:`Fired when an item is toggled.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onItemToggle",required:!1,type:{name:"(event: Ui5CustomEvent<NotificationListDomRef, NotificationItemEventDetail>) => void"}},noDataText:{defaultValue:{value:"undefined"},description:"Defines the text that is displayed when the component contains no items.",name:"noDataText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const I=K("ui5-li-notification-group",["growing","loadingDelay","titleText"],["collapsed","loading","read"],[],["load-more","toggle"]);I.displayName="NotificationListGroupItem";try{I.displayName="NotificationListGroupItem",I.__docgenInfo={description:`The \`NotificationListGroupItem\` is a special type of list item,
that unlike others can group items within self, usually \`NotificationListItem\` items.

The component consists of:

- \`Toggle\` button to expand and collapse the group
- \`TitleText\` to entitle the group
- Items of the group

### Usage
The component should be used inside a \`NotificationList\`.

### Keyboard Handling
The \`NotificationListGroupItem\` provides advanced keyboard handling.
This component provides fast navigation when the header is focused using the following keyboard shortcuts:

- [Space] - toggles expand / collapse of the group
- [Plus] - expands the group
- [Minus] - collapses the group
- [Right] - expands the group
- [Left] - collapses the group



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"NotificationListGroupItem",props:{children:{defaultValue:null,description:"Defines the items of the `NotificationListGroupItem`,\nusually `NotificationListItem` items.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onLoadMore:{defaultValue:null,description:`Fired when additional items are requested.

**Note:** Available since [v2.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents-fiori**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<NotificationListGroupItemDomRef, never>) => void"}},onToggle:{defaultValue:null,description:`Fired when the \`NotificationListGroupItem\` is expanded/collapsed by user interaction.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onToggle",required:!1,type:{name:"(event: Ui5CustomEvent<NotificationListGroupItemDomRef, never>) => void"}},collapsed:{defaultValue:{value:"false"},description:"Defines if the group is collapsed or expanded.",name:"collapsed",required:!1,type:{name:"boolean"}},growing:{defaultValue:{value:'"None"'},description:"Defines whether the component will have growing capability by pressing a `More` button.\nWhen button is pressed `load-more` event will be fired.\n\n**Note:** Available since [v2.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents-fiori**.",name:"growing",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Button"'},{value:'"Button"'},{value:'"None"'}]}},loading:{defaultValue:{value:"false"},description:"Defines if a busy indicator would be displayed over the item.",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the busy indicator will show up for this component.",name:"loadingDelay",required:!1,type:{name:"number"}},read:{defaultValue:{value:"false"},description:"Defines if the `notification` is new or has been already read.\n\n**Note:** if set to `false` the `titleText` has bold font,\nif set to true - it has a normal font.",name:"read",required:!1,type:{name:"boolean"}},titleText:{defaultValue:{value:"undefined"},description:"Defines the `titleText` of the item.",name:"titleText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{I.displayName="NotificationListGroupItem",I.__docgenInfo={description:`The \`NotificationListGroupItem\` is a special type of list item,
that unlike others can group items within self, usually \`NotificationListItem\` items.

The component consists of:

- \`Toggle\` button to expand and collapse the group
- \`TitleText\` to entitle the group
- Items of the group

### Usage
The component should be used inside a \`NotificationList\`.

### Keyboard Handling
The \`NotificationListGroupItem\` provides advanced keyboard handling.
This component provides fast navigation when the header is focused using the following keyboard shortcuts:

- [Space] - toggles expand / collapse of the group
- [Plus] - expands the group
- [Minus] - collapses the group
- [Right] - expands the group
- [Left] - collapses the group



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"NotificationListGroupItem",props:{children:{defaultValue:null,description:"Defines the items of the `NotificationListGroupItem`,\nusually `NotificationListItem` items.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onLoadMore:{defaultValue:null,description:`Fired when additional items are requested.

**Note:** Available since [v2.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents-fiori**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<NotificationListGroupItemDomRef, never>) => void"}},onToggle:{defaultValue:null,description:`Fired when the \`NotificationListGroupItem\` is expanded/collapsed by user interaction.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onToggle",required:!1,type:{name:"(event: Ui5CustomEvent<NotificationListGroupItemDomRef, never>) => void"}},collapsed:{defaultValue:{value:"false"},description:"Defines if the group is collapsed or expanded.",name:"collapsed",required:!1,type:{name:"boolean"}},growing:{defaultValue:{value:'"None"'},description:"Defines whether the component will have growing capability by pressing a `More` button.\nWhen button is pressed `load-more` event will be fired.\n\n**Note:** Available since [v2.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents-fiori**.",name:"growing",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Button"'},{value:'"Button"'},{value:'"None"'}]}},loading:{defaultValue:{value:"false"},description:"Defines if a busy indicator would be displayed over the item.",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the busy indicator will show up for this component.",name:"loadingDelay",required:!1,type:{name:"number"}},read:{defaultValue:{value:"false"},description:"Defines if the `notification` is new or has been already read.\n\n**Note:** if set to `false` the `titleText` has bold font,\nif set to true - it has a normal font.",name:"read",required:!1,type:{name:"boolean"}},titleText:{defaultValue:{value:"undefined"},description:"Defines the `titleText` of the item.",name:"titleText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var W;(function(n){n.Standard="Standard",n.Important="Important"})(W||(W={}));const P=W,ht="high-priority",ft="M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zm0 96q-15 0-25.5 11t-9.5 26l11 164q0 10 7 16.5t17 6.5 17-6.5 7-16.5l11-164q1-15-9.5-26T256 96zm0 329q15 0 25.5-11t10.5-26-11-25.5-26-10.5-25 10.5-10 25.5 10 26 26 11z",gt=!1,bt="SAP-icons-v4",vt="@ui5/webcomponents-icons";me(ht,{pathData:ft,ltr:gt,collection:bt,packageName:vt});const _t="high-priority",yt="M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zm-32 288q0 14 9 23t23 9 23-9 9-23V128q0-14-9-23t-23-9-23 9-9 23v160zm32 128q14 0 23-9t9-23-9-23-23-9-23 9-9 23 9 23 23 9z",wt=!1,Nt="SAP-icons-v5",Tt="@ui5/webcomponents-icons";me(_t,{pathData:yt,ltr:wt,collection:Nt,packageName:Tt});const It="high-priority";function xt(){return f("li",{class:this.itemClasses,onFocusIn:this._onfocusin,onKeyDown:this._onkeydown,onKeyUp:this._onkeyup,onClick:this._onclick,tabindex:this.forcedTabIndex?parseInt(this.forcedTabIndex):void 0,"aria-labelledby":this.ariaLabelledBy,"aria-level":this._ariaLevel,children:[this.loading&&u("span",{id:`${this._id}-loading`,class:"ui5-hidden-text",children:this.loadingText}),u(pe,{id:`${this._id}-busyIndicator`,delay:this.loadingDelay,active:this.loading,inert:this.loading,class:"ui5-nli-loading",children:f("div",{class:"ui5-nli-content-wrapper",children:[f("div",{class:{"ui5-nli-content":!0,"ui5-nli-content-with-importance":this.hasImportance},children:[this.hasImportance&&f(tt,{id:`${this._id}-importance`,class:"ui5-nli-importance",design:"Set2",colorScheme:"2",wrappingType:"None",children:[u(z,{name:It,slot:"icon"}),this.importanceText]}),f("div",{class:"ui5-nli-title-text-wrapper",children:[this.hasState&&u(z,{class:"ui5-state-icon",name:this.statusIconName,showTooltip:!0,accessibleName:this.stateText,design:this.statusIconDesign}),f("div",{id:`${this._id}-title-text`,class:"ui5-nli-title-text",part:"title-text",children:[u("span",{class:"ui5-hidden-text",children:this.stateText}),this.titleText]})]}),u("span",{id:`${this._id}-read`,class:"ui5-hidden-text",children:this.readText}),this.hasDesc&&u("div",{id:`${this._id}-description`,class:"ui5-nli-description",children:u("slot",{})}),f("div",{class:"ui5-nli-footer",children:[u("div",{id:`${this._id}-footnotes`,class:"ui5-nli-footnotes",children:this.footerItems.map(n=>f(Ie,{children:[u("slot",{name:n.slotName}),n.showDivider&&u("div",{class:"ui5-nli-footer-divider","aria-hidden":"true",children:"·"})]}))}),u(et,{class:"ui5-nli-footer-showMore",hidden:this.hideShowMore,onClick:this._onShowMoreClick,wrappingType:"None",href:"#",accessibleName:this.moreLinkAccessibleName,accessibleRole:"Button",accessibilityAttributes:this.moreLinkAccessibilityAttributes,children:this.showMoreText})]})]}),f("div",{class:"ui5-nli-actions",children:[this.showMenu&&u(oe,{icon:ot,design:"Transparent",onClick:this._onBtnMenuClick,class:"ui5-nli-menu-btn",tooltip:this.menuBtnAccessibleName,accessibilityAttributes:this.menuButtonAccessibilityAttributes}),this.showClose&&u(oe,{icon:it,class:"ui5-nli-close-btn",design:"Transparent",onClick:this._onBtnCloseClick,tooltip:this.closeBtnAccessibleName,accessibleName:this.closeBtnAccessibleName})]}),u("div",{class:"ui5-nli-avatar","aria-hidden":"true",children:u("slot",{name:"avatar"})}),u("slot",{name:"menu"})]})})]})}x("@ui5/webcomponents-theming","sap_horizon",async()=>$);x("@ui5/webcomponents-fiori","sap_horizon",async()=>J);const Lt=`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:block;max-width:100%;min-height:var(--_ui5-v2-7-0_list_item_base_height);background:var(--ui5-v2-7-0-listitem-background-color);cursor:pointer}.ui5-nli-focusable:focus{outline:none}:host([desktop]) .ui5-nli-focusable:focus:not(.ui5-nli-group-root):after,.ui5-nli-focusable:focus-visible:not(.ui5-nli-group-root):after{content:"";border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);position:absolute;inset:0;pointer-events:none}.ui5-state-icon{min-width:1rem;min-height:1rem;padding-inline-end:var(--_ui5-v2-7-0-notification_item-state-icon-padding)}:host(:not([wrapping-type="Normal"])) .ui5-nli-title-text{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}:host(:not([wrapping-type="Normal"])) .ui5-nli-description{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}:host([_show-more-pressed]) .ui5-nli-title-text{-webkit-line-clamp:unset}:host([_show-more-pressed]) .ui5-nli-description{-webkit-line-clamp:unset}:host([read]) .ui5-nli-title-text{font-weight:400}:host(:first-of-type){border-top-left-radius:var(--_ui5-v2-7-0-notification_item-border-radius);border-top-right-radius:var(--_ui5-v2-7-0-notification_item-border-radius)}:host(:last-of-type){border-bottom-left-radius:var(--_ui5-v2-7-0-notification_item-border-radius);border-bottom-right-radius:var(--_ui5-v2-7-0-notification_item-border-radius)}:host(:first-of-type) .ui5-nli-focusable:after{border-top-left-radius:var(--_ui5-v2-7-0-notification_item-border-radius);border-top-right-radius:var(--_ui5-v2-7-0-notification_item-border-radius)}:host(:last-of-type) .ui5-nli-focusable:after{border-bottom-left-radius:var(--_ui5-v2-7-0-notification_item-border-radius);border-bottom-right-radius:var(--_ui5-v2-7-0-notification_item-border-radius)}:host([has-border]){border-bottom:var(--_ui5-v2-7-0-notification_item-border-bottom)}:host([ui5-li-notification]){margin:var(--_ui5-v2-7-0-notification_item-margin);border-left:var(--_ui5-v2-7-0-notification_item-border-top-left-right);border-right:var(--_ui5-v2-7-0-notification_item-border-top-left-right);border-top:var(--_ui5-v2-7-0-notification_item-border-top-left-right);border-radius:var(--_ui5-v2-7-0-notification_item-border-radius);list-style:none}.ui5-nli-root{position:relative;width:100%;box-sizing:border-box;cursor:pointer;border-radius:var(--_ui5-v2-7-0-notification_item-border-radius);border:1px solid transparent}.ui5-nli-root:hover{background-color:var(--_ui5-v2-7-0-notification_item-background-color-hover);border-radius:var(--_ui5-v2-7-0-notification_item-border-radius)}:host([desktop]) .ui5-nli-root:focus:active,.ui5-nli-root:focus-visible:active{background-color:var(--_ui5-v2-7-0-notification_item-background-color-active);border-radius:var(--_ui5-v2-7-0-notification_item-border-radius);border:var(--_ui5-v2-7-0-notification_item-border-active)}.ui5-nli-content-wrapper{width:100%;display:flex;flex-direction:row-reverse;padding-inline:var(--_ui5-v2-7-0-notification_item-root-padding-inline);padding-block:1rem;position:relative;box-sizing:border-box}.ui5-nli-content{display:flex;flex-direction:column;flex:1;min-width:0;width:100%;padding-inline:var(--_ui5-v2-7-0-notification_item-content-padding);font-family:"72override",var(--sapFontFamily);box-sizing:border-box}.ui5-nli-content.ui5-nli-content-with-importance{margin-bottom:2rem}.ui5-nli-actions{position:absolute;top:.5rem;right:.5rem}:dir(rtl) .ui5-nli-actions{left:.5rem;right:auto}.ui5-nli-title-text-wrapper{display:flex;flex-direction:row}.ui5-nli-title-text{display:flex;margin-bottom:var(--_ui5-v2-7-0-notification_item-title-margin-bottom);box-sizing:border-box;color:var(--sapGroup_TitleTextColor);font-weight:700;font-size:var(--sapFontHeader6Size)}.ui5-nli-two-buttons .ui5-nli-title-text{padding-inline-end:var(--_ui5-v2-7-0-notification_item-title-padding-end-two-buttons)}.ui5-nli-one-button .ui5-nli-title-text{padding-inline-end:var(--_ui5-v2-7-0-notification_item-title-padding-end-one-button)}.ui5-nli-description{display:flex;margin-top:var(--_ui5-v2-7-0-notification_item-description-margin-top);color:var(--sapTextColor);font-size:var(--sapFontSize);box-sizing:border-box}.ui5-nli-footer{display:flex;color:var(--sapContent_LabelColor);font-size:var(--sapFontSize);margin-top:var(--_ui5-v2-7-0-notification_item-footer-margin-top);box-sizing:border-box;flex-wrap:wrap;align-items:center}.ui5-nli-footer-divider{position:relative;align-items:center;margin-inline:.5rem}.ui5-nli-footnotes{display:flex}.ui5-nli-footer-showMore{margin-inline-start:1rem}.ui5-nli-importance{width:fit-content;position:absolute;bottom:1rem}::slotted([slot^="footnotes"]){color:var(--sapContent_LabelColor);font-size:var(--sapFontSize);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.ui5-nli-menu-btn{margin-inline-end:.125rem}:host([desktop]) .ui5-nli-focusable:not(.ui5-nli-group-root):focus:after,.ui5-nli-focusable:not(.ui5-nli-group-root):focus-visible:after{border-radius:var(--_ui5-v2-7-0-notification_item-border-radius);top:var(--_ui5-v2-7-0-notification_item-focus-offset);right:var(--_ui5-v2-7-0-notification_item-focus-offset);bottom:var(--_ui5-v2-7-0-notification_item-focus-offset);left:var(--_ui5-v2-7-0-notification_item-focus-offset)}[ui5-busy-indicator]{width:100%;border-radius:var(--_ui5-v2-7-0-notification_item-border-radius)}
`;var m=function(n,e,t,o){var s=arguments.length,i=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var l=n.length-1;l>=0;l--)(r=n[l])&&(i=(s<3?r(i):s>3?r(e,t,i):r(e,t))||i);return s>3&&i&&Object.defineProperty(e,t,i),i},d;const Dt={[p.Negative]:Je,[p.Critical]:Qe,[p.Positive]:Ye,[p.Information]:Ze,[p.None]:""},Ct={[p.Negative]:q.Negative,[p.Critical]:q.Critical,[p.Positive]:q.Positive,[p.Information]:q.Information,[p.None]:void 0};let c=d=class extends b{constructor(){super(),this.wrappingType="None",this.state="None",this.showClose=!1,this.importance="Standard",this._showMorePressed=!1,this._showMore=!1,this._titleTextOverflowHeight=0,this._descOverflowHeight=0,this._onResizeBound=this.onResize.bind(this)}onEnterDOM(){super.onEnterDOM(),ie.register(this,this._onResizeBound)}onExitDOM(){ie.deregister(this,this._onResizeBound)}get hasState(){return this.state!==p.None}get hasDesc(){return Ke(this.description)}get hasImportance(){return this.importance!==P.Standard}get hasFootNotes(){return!!this.footnotes.length}get showMoreText(){return this._showMorePressed?d.i18nFioriBundle.getText(qe):d.i18nFioriBundle.getText(Re)}get menuBtnAccessibleName(){return d.i18nFioriBundle.getText(Ee)}get moreLinkAccessibleName(){return this._showMorePressed?d.i18nFioriBundle.getText(ke):d.i18nFioriBundle.getText(Pe)}get closeBtnAccessibleName(){return d.i18nFioriBundle.getText(Ve)}get hideShowMore(){if(!(this.wrappingType===U.None&&this._showMore))return!0}get titleTextHeight(){return this.titleTextDOM.offsetHeight}get descriptionHeight(){return this.descriptionDOM.offsetHeight}get titleTextOverflows(){const e=this.titleTextDOM;return e?e.offsetHeight<e.scrollHeight:!1}get descriptionOverflows(){const e=this.descriptionDOM;return e?e.offsetHeight<e.scrollHeight:!1}get footerItems(){return this.footnotes.map((e,t,o)=>({slotName:e._individualSlot,showDivider:t!==o.length-1}))}get ariaLabelledBy(){const e=this._id;if(this.loading)return`${e}-loading`;const t=[];return this.hasImportance&&t.push(`${e}-importance`),this.hasTitleText&&t.push(`${e}-title-text`),t.push(`${e}-read`),this.hasDesc&&t.push(`${e}-description`),this.hasFootNotes&&t.push(`${e}-footnotes`),t.join(" ")}get itemClasses(){const e=["ui5-nli-root","ui5-nli-focusable"];return this.getMenu()&&this.showClose?e.push("ui5-nli-two-buttons"):(this.getMenu()||this.showClose)&&e.push("ui5-nli-one-button"),e.join(" ")}get statusIconName(){return Dt[this.state]}get statusIconDesign(){return Ct[this.state]}get importanceText(){let e;return this.hasImportance?e=d.i18nFioriBundle.getText(je):e="",e}get stateText(){return this.state===p.Positive?d.i18nFioriBundle.getText(Be):this.state===p.Critical?d.i18nFioriBundle.getText(Ue):this.state===p.Negative?d.i18nFioriBundle.getText(ze):this.state===p.Information?d.i18nFioriBundle.getText(He):""}get readText(){return this.read?d.i18nFioriBundle.getText(We):d.i18nFioriBundle.getText(Ge)}get menuButtonAccessibilityAttributes(){return{hasPopup:"menu"}}get moreLinkAccessibilityAttributes(){return{expanded:this._showMorePressed}}get showMenu(){return!!this.getMenu()}_onclick(){this.fireItemPress()}_onShowMoreClick(e){e.preventDefault(),this._toggleShowMorePressed()}async _onkeydown(e){await super._onkeydown(e),Z(e)&&e.preventDefault(),this.focusSameItemOnNextRow(e)}focusSameItemOnNextRow(e){const t=e.target;if(!t||t.hasAttribute("ui5-menu-item")||!this.matches(":focus-within")||!ee(e)&&!ye(e))return;e.preventDefault(),e.stopImmediatePropagation();const s=this.closest("[ui5-notification-list]");if(!s)return;const i=s.getEnabledItems(),r=i.indexOf(this)+(ee(e)?-1:1),l=i[r];if(!l)return;const B=l.getHeaderDomRef().querySelector(`.${t.className}`);B&&B.offsetParent?B.focus():l.focus()}_onkeyup(e){if(super._onkeyup(e),G(e)&&this.getFocusDomRef().matches(":has(:focus-within)")){e.preventDefault(),this._toggleShowMorePressed();return}we(e)&&this.fireDecoratorEvent("close",{item:this}),Z(e)&&this._onBtnMenuClick(),Ne(e)&&this._toggleShowMorePressed()}_onBtnCloseClick(){this.fireDecoratorEvent("close",{item:this})}_onBtnMenuClick(){this.getMenu()&&this.openMenu()}_toggleShowMorePressed(){this._showMorePressed=!this._showMorePressed}openMenu(){const e=this.getMenu();e.opener=this.menuButtonDOM,e.open=!0}getMenu(){return this.querySelector("[ui5-menu]")}fireItemPress(){this.getFocusDomRef().matches(":has(:focus-within)")||this.fireDecoratorEvent("_press",{item:this})}onResize(){if(this.wrappingType===U.Normal){this._showMore=!1;return}const e=this.titleTextHeight>this._titleTextOverflowHeight,t=this.hasDesc&&this.descriptionHeight>this._descOverflowHeight,o=e||t;if(this._showMorePressed&&o){this._showMore=!0;return}if(this.titleTextOverflows||this.descriptionOverflows){this._titleTextOverflowHeight=this.titleTextHeight,this._descOverflowHeight=this.hasDesc?this.descriptionHeight:0,this._showMore=!0;return}this._showMore=!1}};m([h()],c.prototype,"wrappingType",void 0);m([h()],c.prototype,"state",void 0);m([h({type:Boolean})],c.prototype,"showClose",void 0);m([h()],c.prototype,"importance",void 0);m([h({type:Boolean})],c.prototype,"_showMorePressed",void 0);m([h({type:Boolean})],c.prototype,"_showMore",void 0);m([L()],c.prototype,"avatar",void 0);m([L()],c.prototype,"menu",void 0);m([L({type:HTMLElement,individualSlots:!0})],c.prototype,"footnotes",void 0);m([L({type:Node,default:!0})],c.prototype,"description",void 0);m([Q(".ui5-nli-title-text")],c.prototype,"titleTextDOM",void 0);m([Q(".ui5-nli-menu-btn")],c.prototype,"menuButtonDOM",void 0);m([Q(".ui5-nli-description")],c.prototype,"descriptionDOM",void 0);c=d=m([A({tag:"ui5-li-notification",languageAware:!0,styles:[Lt],renderer:X,template:xt}),y("_press",{bubbles:!0}),y("close",{bubbles:!0})],c);c.define();const g=K("ui5-li-notification",["importance","loadingDelay","state","titleText","wrappingType"],["loading","read","showClose"],["avatar","footnotes","menu"],["close"]);g.displayName="NotificationListItem";try{g.displayName="NotificationListItem",g.__docgenInfo={description:`The \`NotificationListItem\` is a type of list item, meant to display notifications.

The component has a rich set of various properties that allows the user to set \`avatar\`, \`menu\`, \`titleText\`, descriptive \`content\`
and \`footnotes\` to fully describe a notification.

The user can:

- display a \`Close\` button
- can control whether the \`titleText\` and \`description\` should wrap or truncate
and display a \`ShowMore\` button to switch between less and more information
- add actions by using the \`ui5-menu\` component

**Note:** Adding custom actions by using the \`ui5-notification-action\` component is deprecated as of version 2.0!

### Usage
The component should be used inside a \`NotificationList\`.

### Keyboard Handling

#### Basic Navigation
The user can use the following keyboard shortcuts to perform actions (such as select, delete):

- [Enter] - select an item (trigger "item-click" event)
- [Delete] - close an item (trigger "item-close" event)

#### Fast Navigation
This component provides a fast navigation using the following keyboard shortcuts:

- [Shift] + [Enter] - 'More'/'Less' link will be triggered
- [Shift] + [F10] - 'Menu' (Actions) button will be triggered (clicked)



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"NotificationListItem",props:{avatar:{defaultValue:null,description:'Defines the avatar, displayed in the `NotificationListItem`.\n\n**Note:** Consider using the `ui5-avatar` to display icons, initials or images.\n\n**Note:** In order to be complaint with the UX guidlines and for best experience,\nwe recommend using avatars with 2rem X 2rem in size (32px X 32px). In case you are using the `ui5-avatar`\nyou can set its `size` property to `XS` to get the required size - `<ui5-avatar size="XS"></ui5-avatar>`.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="avatar"`).\nSince you can\'t change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component\'s children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).',name:"avatar",required:!1,type:{name:"UI5WCSlotsNode"}},children:{defaultValue:null,description:`Defines the content of the \`NotificationListItem\`,
usually a description of the notification.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},footnotes:{defaultValue:null,description:`Defines the elements, displayed in the footer of the of the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="footnotes"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"footnotes",required:!1,type:{name:"UI5WCSlotsNode"}},menu:{defaultValue:null,description:`Defines the menu, displayed in the \`NotificationListItem\`.

**Note:** Use this for implementing actions.

**Note:** Should be used instead \`u5-notification-action\`, which is deprecated as of version 2.0.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="menu"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"menu",required:!1,type:{name:"UI5WCSlotsNode"}},onClose:{defaultValue:null,description:`Fired when the \`Close\` button is pressed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<NotificationListItemDomRef, NotificationListItemCloseEventDetail>) => void"}},importance:{defaultValue:{value:'"Standard"'},description:"Defines the `Important` label of the item.",name:"importance",required:!1,type:{name:"enum",value:[{value:'"Standard"'},{value:'"Standard"'},{value:'"Important"'},{value:'"Important"'}]}},loading:{defaultValue:{value:"false"},description:"Defines if a busy indicator would be displayed over the item.",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the busy indicator will show up for this component.",name:"loadingDelay",required:!1,type:{name:"number"}},read:{defaultValue:{value:"false"},description:"Defines if the `notification` is new or has been already read.\n\n**Note:** if set to `false` the `titleText` has bold font,\nif set to true - it has a normal font.",name:"read",required:!1,type:{name:"boolean"}},showClose:{defaultValue:{value:"false"},description:"Defines if the `Close` button would be displayed.",name:"showClose",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:'"None"'},description:"Defines the status indicator of the item.",name:"state",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"None"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'}]}},titleText:{defaultValue:{value:"undefined"},description:"Defines the `titleText` of the item.",name:"titleText",required:!1,type:{name:"string"}},wrappingType:{defaultValue:{value:'"None"'},description:"Defines if the `titleText` and `description` should wrap,\nthey truncate by default.\n\n**Note:** by default the `titleText` and `description`,\nand a `ShowMore/Less` button would be displayed.",name:"wrappingType",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Normal"'},{value:'"Normal"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{g.displayName="NotificationListItem",g.__docgenInfo={description:`The \`NotificationListItem\` is a type of list item, meant to display notifications.

The component has a rich set of various properties that allows the user to set \`avatar\`, \`menu\`, \`titleText\`, descriptive \`content\`
and \`footnotes\` to fully describe a notification.

The user can:

- display a \`Close\` button
- can control whether the \`titleText\` and \`description\` should wrap or truncate
and display a \`ShowMore\` button to switch between less and more information
- add actions by using the \`ui5-menu\` component

**Note:** Adding custom actions by using the \`ui5-notification-action\` component is deprecated as of version 2.0!

### Usage
The component should be used inside a \`NotificationList\`.

### Keyboard Handling

#### Basic Navigation
The user can use the following keyboard shortcuts to perform actions (such as select, delete):

- [Enter] - select an item (trigger "item-click" event)
- [Delete] - close an item (trigger "item-close" event)

#### Fast Navigation
This component provides a fast navigation using the following keyboard shortcuts:

- [Shift] + [Enter] - 'More'/'Less' link will be triggered
- [Shift] + [F10] - 'Menu' (Actions) button will be triggered (clicked)



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"NotificationListItem",props:{avatar:{defaultValue:null,description:'Defines the avatar, displayed in the `NotificationListItem`.\n\n**Note:** Consider using the `ui5-avatar` to display icons, initials or images.\n\n**Note:** In order to be complaint with the UX guidlines and for best experience,\nwe recommend using avatars with 2rem X 2rem in size (32px X 32px). In case you are using the `ui5-avatar`\nyou can set its `size` property to `XS` to get the required size - `<ui5-avatar size="XS"></ui5-avatar>`.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="avatar"`).\nSince you can\'t change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component\'s children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).',name:"avatar",required:!1,type:{name:"UI5WCSlotsNode"}},children:{defaultValue:null,description:`Defines the content of the \`NotificationListItem\`,
usually a description of the notification.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},footnotes:{defaultValue:null,description:`Defines the elements, displayed in the footer of the of the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="footnotes"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"footnotes",required:!1,type:{name:"UI5WCSlotsNode"}},menu:{defaultValue:null,description:`Defines the menu, displayed in the \`NotificationListItem\`.

**Note:** Use this for implementing actions.

**Note:** Should be used instead \`u5-notification-action\`, which is deprecated as of version 2.0.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="menu"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"menu",required:!1,type:{name:"UI5WCSlotsNode"}},onClose:{defaultValue:null,description:`Fired when the \`Close\` button is pressed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<NotificationListItemDomRef, NotificationListItemCloseEventDetail>) => void"}},importance:{defaultValue:{value:'"Standard"'},description:"Defines the `Important` label of the item.",name:"importance",required:!1,type:{name:"enum",value:[{value:'"Standard"'},{value:'"Standard"'},{value:'"Important"'},{value:'"Important"'}]}},loading:{defaultValue:{value:"false"},description:"Defines if a busy indicator would be displayed over the item.",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the busy indicator will show up for this component.",name:"loadingDelay",required:!1,type:{name:"number"}},read:{defaultValue:{value:"false"},description:"Defines if the `notification` is new or has been already read.\n\n**Note:** if set to `false` the `titleText` has bold font,\nif set to true - it has a normal font.",name:"read",required:!1,type:{name:"boolean"}},showClose:{defaultValue:{value:"false"},description:"Defines if the `Close` button would be displayed.",name:"showClose",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:'"None"'},description:"Defines the status indicator of the item.",name:"state",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"None"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'}]}},titleText:{defaultValue:{value:"undefined"},description:"Defines the `titleText` of the item.",name:"titleText",required:!1,type:{name:"string"}},wrappingType:{defaultValue:{value:'"None"'},description:"Defines if the `titleText` and `description` should wrap,\nthey truncate by default.\n\n**Note:** by default the `titleText` and `description`,\nand a `ShowMore/Less` button would be displayed.",name:"wrappingType",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Normal"'},{value:'"Normal"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const St={title:"Data Display / NotificationList",component:v,argTypes:{children:{control:{disable:!0}}},args:{},tags:["package:@ui5/webcomponents-fiori"]},D={render:n=>a.jsxs(v,{...n,children:[a.jsx(g,{showClose:!0,avatar:a.jsx(M,{size:S.XS,icon:Y}),footnotes:a.jsx(F,{children:"3 Days"}),titleText:"New order (#2526) with multiple NotificationAction buttons and close button",menu:a.jsxs(R,{children:[a.jsx(_,{text:"Accept All Requested Information"}),a.jsx(_,{text:"Reject All Requested Information"})]}),children:"Short description"}),a.jsx(g,{avatar:a.jsx(M,{size:S.XS,icon:Y,colorScheme:he.Accent1}),footnotes:a.jsx(F,{children:"3 Days"}),titleText:"New order (#2527) with single NotificationAction and close button",showClose:!0,menu:a.jsx(R,{children:a.jsx(_,{text:"Accept All Requested Information"})}),children:"Short description"}),a.jsxs(g,{wrappingType:U.Normal,titleText:"New high priority order (#2528) without close button",importance:P.Important,avatar:a.jsx(M,{size:S.XS,children:a.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png"})}),footnotes:a.jsxs(a.Fragment,{children:[a.jsx(F,{children:"John Smith"}),a.jsx(F,{children:"1 hour"})]}),children:["And with a very long description that will not be ellipsed:",a.jsx("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc. ",a.jsx("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."]})]})},C={render:n=>a.jsx(v,{...n,children:a.jsxs(I,{titleText:"Orders",children:[a.jsx(g,{importance:P.Standard,titleText:"New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",avatar:a.jsx(M,{size:S.XS,children:a.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png"})}),footnotes:a.jsxs(a.Fragment,{children:[a.jsx("span",{children:"Monique Legrand"}),a.jsx("span",{children:"2 Days"})]}),menu:a.jsxs(R,{children:[a.jsx(_,{icon:"accept",text:"Accept"}),a.jsx(_,{icon:"message-error",text:"Reject"})]}),children:"And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."}),a.jsx(g,{showClose:!0,titleText:"New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",importance:P.Important,avatar:a.jsx(M,{size:S.XS,children:a.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png"})}),footnotes:a.jsxs(a.Fragment,{children:[a.jsx("span",{children:"Alain Devalier"}),a.jsx("span",{children:"2 Days"})]}),menu:a.jsxs(R,{children:[a.jsx(_,{icon:"accept",text:"Accept"}),a.jsx(_,{icon:"message-error",text:"Reject"})]}),children:"And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."})]})})};var ne,ae,se;D.parameters={...D.parameters,docs:{...(ne=D.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => {
    return <NotificationList {...args}>
        <NotificationListItem showClose avatar={<Avatar size={AvatarSize.XS} icon={employeeIcon} />} footnotes={<Label>3 Days</Label>} titleText="New order (#2526) with multiple NotificationAction buttons and close button" menu={<Menu>
              <MenuItem text="Accept All Requested Information" />
              <MenuItem text="Reject All Requested Information" />
            </Menu>}>
          Short description
        </NotificationListItem>
        <NotificationListItem avatar={<Avatar size={AvatarSize.XS} icon={employeeIcon} colorScheme={AvatarColorScheme.Accent1} />} footnotes={<Label>3 Days</Label>} titleText="New order (#2527) with single NotificationAction and close button" showClose menu={<Menu>
              <MenuItem text="Accept All Requested Information" />
            </Menu>}>
          Short description
        </NotificationListItem>
        <NotificationListItem wrappingType={WrappingType.Normal} titleText="New high priority order (#2528) without close button" importance={NotificationListItemImportance.Important} avatar={<Avatar size={AvatarSize.XS}>
              <img src="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png" />
            </Avatar>} footnotes={<>
              <Label>John Smith</Label>
              <Label>1 hour</Label>
            </>}>
          And with a very long description that will not be ellipsed:
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra,
          tellus odio vehicula dolor, nec elementum lectus turpis at nunc. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum
          lectus turpis at nunc. <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra,
          tellus odio vehicula dolor, nec elementum lectus turpis at nunc. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum
          lectus turpis at nunc.
        </NotificationListItem>
      </NotificationList>;
  }
}`,...(se=(ae=D.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var re,le,ue;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => {
    return <NotificationList {...args}>
        <NotificationListGroupItem titleText="Orders">
          <NotificationListItem importance={NotificationListItemImportance.Standard} titleText={'New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.'} avatar={<Avatar size={AvatarSize.XS}>
                <img src="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png" />
              </Avatar>} footnotes={<>
                <span>Monique Legrand</span>
                <span>2 Days</span>
              </>} menu={<Menu>
                <MenuItem icon="accept" text="Accept" />
                <MenuItem icon="message-error" text="Reject" />
              </Menu>}>
            And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
            nec elementum lectus turpis at nunc.
          </NotificationListItem>
          <NotificationListItem showClose titleText="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." importance={NotificationListItemImportance.Important} avatar={<Avatar size={AvatarSize.XS}>
                <img src="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png" />
              </Avatar>} footnotes={<>
                <span>Alain Devalier</span>
                <span>2 Days</span>
              </>} menu={<Menu>
                <MenuItem icon="accept" text="Accept" />
                <MenuItem icon="message-error" text="Reject" />
              </Menu>}>
            And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
            nec elementum lectus turpis at nunc.
          </NotificationListItem>
        </NotificationListGroupItem>
      </NotificationList>;
  }
}`,...(ue=(le=C.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};const Mt=["Default","Grouped"],_i=Object.freeze(Object.defineProperty({__proto__:null,Default:D,Grouped:C,__namedExportsOrder:Mt,default:St},Symbol.toStringTag,{value:"Module"}));export{_i as C,D,C as G,g as N,I as a};
