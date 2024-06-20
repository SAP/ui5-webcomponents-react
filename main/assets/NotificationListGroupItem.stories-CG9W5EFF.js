import{j as o}from"./useIsomorphicLayoutEffect-CJg151Ok.js";import{b as y}from"./Avatar-gXHHVTDv.js";import{b as G,N as _,a as x}from"./index-BldOpZLx.js";import{A as w}from"./index-CTjiTjyP.js";import{M as I,a as g}from"./index-18fKXTPj.js";import{_ as j}from"./iframe-GGPqKdIo.js";import{f as A,o as k,y as q,C as P,K as F}from"./Keys-B00bFMgT.js";import{m as C,b as f,l as i,f as p,s as R,a as O,w as E}from"./withWebComponent-BqYi3caL.js";import{f as V}from"./slot--DoKcWSY.js";import{s as B}from"./event-Dq0fpeHi.js";import{b as M}from"./Button-DOCBygoe.js";import{a as z}from"./BusyIndicator-Cw44Z-dQ.js";import{I as U}from"./Icon-DybkHgDw.js";import{f as H}from"./List-CoMDOkNg.js";import{f as S}from"./Boot-CUKJMqeB.js";import"./navigation-right-arrow-6I7wruvo.js";import"./navigation-down-arrow-BRl-RrSt.js";import{a8 as W,a9 as X,aa as K,ab as J}from"./i18n-defaults-D6i3VRGy.js";import{s as Q}from"./parameters-bundle.css-B6skXb2T.js";var Y=function(n,e,t,s){var r=arguments.length,a=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(n,e,t,s);else for(var u=n.length-1;u>=0;u--)(l=n[u])&&(a=(r<3?l(a):r>3?l(e,t,a):l(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a};let b=class extends H{getEnabledItems(){return[]}_handleTabNext(){}onForwardBefore(){}onForwardAfter(){}};b=Y([C("ui5-notification-group-list")],b);b.define();const Z=b;function ee(n,e,t){return t?f`<li class="ui5-nli-group-root ui5-nli-focusable" @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" tabindex="${i(this.forcedTabIndex)}" aria-labelledby="${i(this.ariaLabelledBy)}" aria-description="${i(this.accInvisibleText)}" aria-level="1"><div class="ui5-nli-group-header" @click="${this._onHeaderToggleClick}" @keydown="${this._onkeydown}" role="button" aria-expanded="${i(this._ariaExpanded)}" aria-controls="${i(this._id)}-notificationsList" title="${i(this.toggleIconAccessibleName)}"><${p("ui5-icon",e,t)} name=${i(this.groupCollapsedIcon)} class="ui5-nli-group-toggle-icon" mode="Decorative"></${p("ui5-icon",e,t)}><div id="${i(this._id)}-title-text" class="ui5-nli-group-title-text" part="title-text" role="heading" aria-level="2">${i(this.titleText)}</div>${this.isLoading?T.call(this,n,e,t):void 0}<div class="ui5-nli-group-divider"></div></div><${p("ui5-notification-group-list",e,t)} id="${i(this._id)}-notificationsList" class="ui5-nli-group-items" role="list" aria-labelledby="${i(this._id)}-title-text"><slot></slot></${p("ui5-notification-group-list",e,t)}>${this.loading?N.call(this,n,e,t):void 0}</li>`:f`<li class="ui5-nli-group-root ui5-nli-focusable" @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" tabindex="${i(this.forcedTabIndex)}" aria-labelledby="${i(this.ariaLabelledBy)}" aria-description="${i(this.accInvisibleText)}" aria-level="1"><div class="ui5-nli-group-header" @click="${this._onHeaderToggleClick}" @keydown="${this._onkeydown}" role="button" aria-expanded="${i(this._ariaExpanded)}" aria-controls="${i(this._id)}-notificationsList" title="${i(this.toggleIconAccessibleName)}"><ui5-icon name=${i(this.groupCollapsedIcon)} class="ui5-nli-group-toggle-icon" mode="Decorative"></ui5-icon><div id="${i(this._id)}-title-text" class="ui5-nli-group-title-text" part="title-text" role="heading" aria-level="2">${i(this.titleText)}</div>${this.isLoading?T.call(this,n,e,t):void 0}<div class="ui5-nli-group-divider"></div></div><ui5-notification-group-list id="${i(this._id)}-notificationsList" class="ui5-nli-group-items" role="list" aria-labelledby="${i(this._id)}-title-text"><slot></slot></ui5-notification-group-list>${this.loading?N.call(this,n,e,t):void 0}</li>`}function T(n,e,t){return f`<span id="${i(this._id)}-loading" class="ui5-hidden-text">${i(this.loadingText)}</span>`}function N(n,e,t){return t?f`<${p("ui5-busy-indicator",e,t)} delay="${i(this.loadingDelay)}" active class="ui5-nli-loading"></${p("ui5-busy-indicator",e,t)}>`:f`<ui5-busy-indicator delay="${i(this.loadingDelay)}" active class="ui5-nli-loading"></ui5-busy-indicator>`}S("@ui5/webcomponents-theming","sap_horizon",async()=>R);S("@ui5/webcomponents-fiori","sap_horizon",async()=>Q);const te={packageName:"@ui5/webcomponents-fiori",fileName:"themes/NotificationListGroupItem.css.ts",content:`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:block;max-width:100%;min-height:var(--_ui5-v2-0-0-rc-5_list_item_base_height);background:var(--ui5-v2-0-0-rc-5-listitem-background-color);cursor:pointer}.ui5-nli-focusable:focus{outline:none}:host([desktop]) .ui5-nli-focusable:focus:not(.ui5-nli-group-root):after,.ui5-nli-focusable:focus-visible:not(.ui5-nli-group-root):after{content:"";border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);position:absolute;inset:0;pointer-events:none}:host([loading]){opacity:.6;pointer-events:none}:host([loading]) .ui5-nli-loading{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.ui5-state-icon{min-width:1rem;min-height:1rem;padding-inline-end:var(--_ui5-v2-0-0-rc-5-notification_item-state-icon-padding)}:host([collapsed]) .ui5-nli-group-items{display:none}:host([read]) .ui5-nli-group-title-text{font-weight:400}.ui5-nli-group-root{display:flex;flex-direction:column;position:relative;width:100%;box-sizing:border-box}.ui5-nli-group-header{height:2.75rem;position:relative;background:var(--sapList_GroupHeaderBackground);display:flex;align-items:center;margin-block:var(--_ui5-v2-0-0-rc-5-notification_group_header-margin);padding-inline:var(--_ui5-v2-0-0-rc-5-notification_group_header-padding);width:100%;border-bottom:var(--_ui5-v2-0-0-rc-5-notification_group_header-border-bottom-width) solid var(--sapList_GroupHeaderBorderColor);box-sizing:border-box;cursor:pointer}:host([desktop]) .ui5-nli-focusable.ui5-nli-group-root:focus .ui5-nli-group-header:before,.ui5-nli-focusable.ui5-nli-group-root:focus-visible .ui5-nli-group-header:before{content:"";border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);position:absolute;inset:0;pointer-events:none}.ui5-nli-group-toggle-icon{min-width:1rem;min-height:1rem;margin-inline:.5rem;color:var(--sapContent_IconColor)}.ui5-nli-group-title-text{color:var(--sapGroup_TitleTextColor);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontHeader5Size);font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:2rem;margin-inline-start:.75rem}.ui5-nli-group-divider{flex:1}:host([ui5-li-notification-group]){-webkit-tap-highlight-color:transparent}
`};var v=function(n,e,t,s){var r=arguments.length,a=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(n,e,t,s);else for(var u=n.length-1;u>=0;u--)(l=n[u])&&(a=(r<3?l(a):r>3?l(e,t,a):l(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a},d;let m=d=class extends G{onBeforeRendering(){super.onBeforeRendering(),this.loading&&this.clearChildBusyIndicator(),this.actionable=!1}clearChildBusyIndicator(){this.items.forEach(e=>{e.loading=!1})}get toggleIconAccessibleName(){return d.i18nFioriBundle.getText(W)}get accInvisibleText(){return`${this.groupText} ${this.expandText}`}get expandText(){return this.collapsed?d.i18nFioriBundle.getText(X):d.i18nFioriBundle.getText(K)}get groupText(){return d.i18nFioriBundle.getText(J)}get ariaLabelledBy(){const e=this._id,t=[];return this.isLoading&&t.push(`${e}-loading`),this.hasTitleText&&t.push(`${e}-title-text`),t.join(" ")}get _ariaExpanded(){return!this.collapsed}get _pressable(){return!1}get groupCollapsedIcon(){return this.collapsed?"navigation-right-arrow":"navigation-down-arrow"}toggleCollapsed(){this.collapsed=!this.collapsed,this.fireEvent("toggle",{item:this})}_onHeaderToggleClick(){this.toggleCollapsed()}async _onkeydown(e){if(!this.matches(":focus"))return;await super._onkeydown(e);const s=A(e),r=k(e),a=q(e),l=P(e),u=F(e);s&&this.toggleCollapsed(),(r||u)&&this.collapsed&&(this.toggleCollapsed(),e.stopImmediatePropagation()),(a||l)&&(this.collapsed||(this.toggleCollapsed(),e.stopImmediatePropagation()))}getHeaderDomRef(){var e;return(e=this.getDomRef())==null?void 0:e.querySelector(".ui5-nli-group-header")}};v([O({type:Boolean})],m.prototype,"collapsed",void 0);v([V({type:HTMLElement,default:!0})],m.prototype,"items",void 0);m=d=v([C({tag:"ui5-li-notification-group",languageAware:!0,styles:[te],template:ee,dependencies:[Z,M,U,z]}),B("toggle")],m);m.define();const ie=m,oe=Object.freeze(Object.defineProperty({__proto__:null,default:ie},Symbol.toStringTag,{value:"Module"})),c=E("ui5-li-notification-group",["loadingDelay","titleText"],["collapsed","loading","read","selected"],[],["toggle"],()=>j(()=>Promise.resolve().then(()=>oe),void 0,import.meta.url));c.displayName="NotificationListGroupItem";try{c.displayName="NotificationListGroupItem",c.__docgenInfo={description:`The \`NotificationListGroupItem\` is a special type of list item,
that unlike others can group items within self, usually \`NotificationListItem\` items.

The component consists of:

- \`Toggle\` button to expand and collapse the group
- \`TitleText\` to entitle the group
- Items of the group

### Usage
The component can be used in a standard \`ui5-list\`.

### Keyboard Handling
The \`NotificationListGroupItem\` provides advanced keyboard handling.

#### Basic Navigation
When a list is focused, the user can use the following keyboard shortcuts in order to navigate:

- [Up] or [Down] - navigates up or down the items
- [Home] - navigates to the first item
- [End] - navigates to the last item

#### Fast Navigation
This component provides fast navigation when the header is focused using the following keyboard shortcuts:

- [Space] - toggles expand / collapse of the group
- [Plus] - expands the group
- [Minus] - collapses the group
- [Right] - expands the group
- [Left] - collapses the group



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"NotificationListGroupItem",props:{children:{defaultValue:null,description:"Defines the items of the `NotificationListGroupItem`,\nusually `NotificationListItem` items.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onToggle:{defaultValue:null,description:"Fired when the `NotificationListGroupItem` is expanded/collapsed by user interaction.",name:"onToggle",required:!1,type:{name:"(event: Ui5CustomEvent<NotificationListGroupItemDomRef, never>) => void"}},collapsed:{defaultValue:{value:"false"},description:"Defines if the group is collapsed or expanded.",name:"collapsed",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Defines if a busy indicator would be displayed over the item.",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the busy indicator will show up for this component.",name:"loadingDelay",required:!1,type:{name:"number"}},read:{defaultValue:{value:"false"},description:"Defines if the `notification` is new or has been already read.\n\n**Note:** if set to `false` the `titleText` has bold font,\nif set to true - it has a normal font.",name:"read",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the component.",name:"selected",required:!1,type:{name:"boolean"}},titleText:{defaultValue:null,description:"Defines the `titleText` of the item.",name:"titleText",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{c.displayName="NotificationListGroupItem",c.__docgenInfo={description:`The \`NotificationListGroupItem\` is a special type of list item,
that unlike others can group items within self, usually \`NotificationListItem\` items.

The component consists of:

- \`Toggle\` button to expand and collapse the group
- \`TitleText\` to entitle the group
- Items of the group

### Usage
The component can be used in a standard \`ui5-list\`.

### Keyboard Handling
The \`NotificationListGroupItem\` provides advanced keyboard handling.

#### Basic Navigation
When a list is focused, the user can use the following keyboard shortcuts in order to navigate:

- [Up] or [Down] - navigates up or down the items
- [Home] - navigates to the first item
- [End] - navigates to the last item

#### Fast Navigation
This component provides fast navigation when the header is focused using the following keyboard shortcuts:

- [Space] - toggles expand / collapse of the group
- [Plus] - expands the group
- [Minus] - collapses the group
- [Right] - expands the group
- [Left] - collapses the group



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"NotificationListGroupItem",props:{children:{defaultValue:null,description:"Defines the items of the `NotificationListGroupItem`,\nusually `NotificationListItem` items.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onToggle:{defaultValue:null,description:"Fired when the `NotificationListGroupItem` is expanded/collapsed by user interaction.",name:"onToggle",required:!1,type:{name:"(event: Ui5CustomEvent<NotificationListGroupItemDomRef, never>) => void"}},collapsed:{defaultValue:{value:"false"},description:"Defines if the group is collapsed or expanded.",name:"collapsed",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Defines if a busy indicator would be displayed over the item.",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the busy indicator will show up for this component.",name:"loadingDelay",required:!1,type:{name:"number"}},read:{defaultValue:{value:"false"},description:"Defines if the `notification` is new or has been already read.\n\n**Note:** if set to `false` the `titleText` has bold font,\nif set to true - it has a normal font.",name:"read",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the component.",name:"selected",required:!1,type:{name:"boolean"}},titleText:{defaultValue:null,description:"Defines the `titleText` of the item.",name:"titleText",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const ne={title:"Data Display / NotificationListGroupItem",component:c,argTypes:{children:{control:{disable:!0}}},args:{titleText:"Orders"},tags:["package:@ui5/webcomponents-fiori"]},h={render:n=>o.jsxs(c,{...n,children:[o.jsx(_,{importance:x.Standard,titleText:"New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",avatar:o.jsx(w,{size:y.XS,children:o.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png"})}),footnotes:o.jsxs(o.Fragment,{children:[o.jsx("span",{children:"Monique Legrand"}),o.jsx("span",{children:"2 Days"})]}),menu:o.jsxs(I,{children:[o.jsx(g,{icon:"accept",text:"Accept"}),o.jsx(g,{icon:"message-error",text:"Reject"})]}),children:"And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."}),o.jsx(_,{showClose:!0,titleText:"New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",importance:x.Important,avatar:o.jsx(w,{size:y.XS,children:o.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png"})}),footnotes:o.jsxs(o.Fragment,{children:[o.jsx("span",{children:"Alain Devalier"}),o.jsx("span",{children:"2 Days"})]}),menu:o.jsxs(I,{children:[o.jsx(g,{icon:"accept",text:"Accept"}),o.jsx(g,{icon:"message-error",text:"Reject"})]}),children:"And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."})]})};var L,$,D;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    return <NotificationListGroupItem {...args}>
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
      </NotificationListGroupItem>;
  }
}`,...(D=($=h.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};const ae=["Default"],$e=Object.freeze(Object.defineProperty({__proto__:null,Default:h,__namedExportsOrder:ae,default:ne},Symbol.toStringTag,{value:"Module"}));export{$e as C,h as D};
