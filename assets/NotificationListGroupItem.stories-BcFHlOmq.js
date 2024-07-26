import{j as n}from"./useIsomorphicLayoutEffect-BZqdrUgG.js";import{b as v}from"./Avatar-C7-CIAtb.js";import{b as B,P as h,a as m,N as _}from"./index-C-UOedMA.js";import{A as T}from"./index-Bgmqgcz3.js";import{_ as S}from"./iframe-0t0bluh7.js";import{a,l as i,b as r,s as E,p as D,c as k,w as F}from"./withWebComponent-CFCcsgaR.js";import{s as q}from"./slot-Df15G--e.js";import{e as G}from"./event-CegLCnR0.js";import{d as P}from"./List-CfEgwv2J.js";import{b as j}from"./Button-C7MkX4Mc.js";import{a as R}from"./BusyIndicator-DwS6GrPw.js";import{c as V,I as M}from"./Icon-5sSxuG1B.js";import{c as U}from"./Popover-DRLSd65f.js";import"./navigation-right-arrow-L20uYmUt.js";import"./navigation-down-arrow-BNgYZNNs.js";import"./overflow-brTgG5fp.js";import"./decline-BKu2yS0R.js";import{a8 as z,a9 as H,aa as W,ab as X,ac as Y,ad as J,ae as K,af as Q,ag as Z,ah as ee,ai as te}from"./i18n-defaults-BiDPwFvU.js";import{r as O}from"./Boot-DdVREbXE.js";import{s as ie}from"./parameters-bundle.css-BfeWTp2S.js";function oe(o,t,e){return e?a`<li class="ui5-nli-group-root ui5-nli-focusable" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keydown="${this._onkeydown}" role="listitem" tabindex="${i(this.forcedTabIndex)}" aria-expanded="${i(this._ariaExpanded)}" aria-labelledby="${i(this.ariaLabelledBy)}"><div class="ui5-nli-group-header"><${r("ui5-button",t,e)} icon=${i(this.groupCollapsedIcon)} design="Transparent" @click="${this._onBtnToggleClick}" class="ui5-nli-group-toggle-btn" tooltip="${i(this.toggleBtnAccessibleName)}" aria-label="${i(this.toggleBtnAccessibleName)}"></${r("ui5-button",t,e)}>${this.hasPriority?w.call(this,o,t,e):void 0}<div id="${i(this._id)}-title-text" class="ui5-nli-group-title-text" part="title-text">${i(this.titleText)}</div>${this.showCounter?N.call(this,o,t,e):void 0}<div class="ui5-nli-group-divider"></div>${this.collapsed?void 0:I.call(this,o,t,e)}${this.showClose?x.call(this,o,t,e):void 0}<span id="${i(this._id)}-invisibleText" class="ui5-hidden-text">${i(this.accInvisibleText)}</span></div><${r("ui5-list",t,e)} class="ui5-nli-group-items"><slot></slot></${r("ui5-list",t,e)}>${this.busy?$.call(this,o,t,e):void 0}</li>`:a`<li class="ui5-nli-group-root ui5-nli-focusable" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keydown="${this._onkeydown}" role="listitem" tabindex="${i(this.forcedTabIndex)}" aria-expanded="${i(this._ariaExpanded)}" aria-labelledby="${i(this.ariaLabelledBy)}"><div class="ui5-nli-group-header"><ui5-button icon=${i(this.groupCollapsedIcon)} design="Transparent" @click="${this._onBtnToggleClick}" class="ui5-nli-group-toggle-btn" tooltip="${i(this.toggleBtnAccessibleName)}" aria-label="${i(this.toggleBtnAccessibleName)}"></ui5-button>${this.hasPriority?w.call(this,o,t,e):void 0}<div id="${i(this._id)}-title-text" class="ui5-nli-group-title-text" part="title-text">${i(this.titleText)}</div>${this.showCounter?N.call(this,o,t,e):void 0}<div class="ui5-nli-group-divider"></div>${this.collapsed?void 0:I.call(this,o,t,e)}${this.showClose?x.call(this,o,t,e):void 0}<span id="${i(this._id)}-invisibleText" class="ui5-hidden-text">${i(this.accInvisibleText)}</span></div><ui5-list class="ui5-nli-group-items"><slot></slot></ui5-list>${this.busy?$.call(this,o,t,e):void 0}</li>`}function w(o,t,e){return e?a`<${r("ui5-icon",t,e)} class="ui5-prio-icon ui5-prio-icon--${i(this.priorityIcon)}" name="${i(this.priorityIcon)}"></${r("ui5-icon",t,e)}>`:a`<ui5-icon class="ui5-prio-icon ui5-prio-icon--${i(this.priorityIcon)}" name="${i(this.priorityIcon)}"></ui5-icon>`}function N(o,t,e){return a`<span class="ui5-nli-group-counter">(${i(this.itemsCount)})</span>`}function I(o,t,e){return a`${this.showOverflow?ne.call(this,o,t,e):se.call(this,o,t,e)}`}function ne(o,t,e){return e?a`<${r("ui5-button",t,e)} icon="overflow" design="Transparent" @click="${this._onBtnOverflowClick}" class="ui5-nli-overflow-btn" tooltip="${i(this.overflowBtnAccessibleName)}" aria-label="${i(this.overflowBtnAccessibleName)}"></${r("ui5-button",t,e)}>`:a`<ui5-button icon="overflow" design="Transparent" @click="${this._onBtnOverflowClick}" class="ui5-nli-overflow-btn" tooltip="${i(this.overflowBtnAccessibleName)}" aria-label="${i(this.overflowBtnAccessibleName)}"></ui5-button>`}function se(o,t,e){return a`${V(this.standardActions,(s,u)=>s._id||u,(s,u)=>ae.call(this,o,t,e,s,u))}`}function ae(o,t,e,s,u){return e?a`<${r("ui5-button",t,e)} icon="${i(s.icon)}" class="ui5-nli-action" ?disabled="${s.disabled}" design="${i(s.design)}" @click="${s.press}" data-ui5-external-action-item-id="${i(s.refItemid)}">${i(s.text)}</${r("ui5-button",t,e)}>`:a`<ui5-button icon="${i(s.icon)}" class="ui5-nli-action" ?disabled="${s.disabled}" design="${i(s.design)}" @click="${s.press}" data-ui5-external-action-item-id="${i(s.refItemid)}">${i(s.text)}</ui5-button>`}function x(o,t,e){return e?a`<${r("ui5-button",t,e)} icon="decline" design="Transparent" @click="${this._onBtnCloseClick}" tooltip="${i(this.closeBtnAccessibleName)}" aria-label="${i(this.closeBtnAccessibleName)}" close-btn></${r("ui5-button",t,e)}>`:a`<ui5-button icon="decline" design="Transparent" @click="${this._onBtnCloseClick}" tooltip="${i(this.closeBtnAccessibleName)}" aria-label="${i(this.closeBtnAccessibleName)}" close-btn></ui5-button>`}function $(o,t,e){return e?a`<${r("ui5-busy-indicator",t,e)} delay="${i(this.busyDelay)}" active size="Medium" class="ui5-nli-busy"></${r("ui5-busy-indicator",t,e)}>`:a`<ui5-busy-indicator delay="${i(this.busyDelay)}" active size="Medium" class="ui5-nli-busy"></ui5-busy-indicator>`}O("@ui5/webcomponents-theming","sap_horizon",async()=>E);O("@ui5/webcomponents-fiori","sap_horizon",async()=>ie);const re={packageName:"@ui5/webcomponents-fiori",fileName:"themes/NotificationListGroupItem.css.ts",content:`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:block;width:100%;min-height:var(--_ui5-v1-24-7_list_item_base_height);background:var(--ui5-v1-24-7-listitem-background-color);cursor:pointer}:host([has-border]){border-bottom:var(--ui5-v1-24-7-listitem-border-bottom)}:host([focused]) .ui5-nli-focusable{outline:none}:host([focused]) .ui5-nli-focusable:after{content:"";border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);position:absolute;inset:0;pointer-events:none}:host([busy]){opacity:.6;pointer-events:none}:host([busy]) .ui5-nli-busy{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.ui5-nli-action{flex-shrink:0;margin-inline-end:.5rem}.ui5-nli-overflow-btn{margin-inline-end:.5rem}.ui5-prio-icon{min-width:1rem;min-height:1rem;padding-inline-end:.625rem}.ui5-prio-icon--message-error{color:var(--sapNegativeElementColor)}.ui5-prio-icon--message-warning{color:var(--sapCriticalElementColor)}.ui5-prio-icon--message-success{color:var(--sapPositiveElementColor)}:host{--_ui5-v1-24-7-notification_item-border-raius: 0px}:host([collapsed]) .ui5-nli-group-items{display:none}:host([read]) .ui5-nli-group-title-text{font-weight:400}.ui5-nli-group-root{display:flex;flex-direction:column;position:relative;width:100%;box-sizing:border-box}.ui5-nli-group-header{background:var(--sapList_GroupHeaderBackground);display:flex;align-items:center;padding-block:.75rem .25rem;padding-inline:.75rem .5rem;width:100%;border-bottom:.0625rem solid var(--sapList_GroupHeaderBorderColor);box-sizing:border-box;cursor:default}.ui5-nli-group-toggle-btn{margin-inline-end:.75rem;cursor:pointer}.ui5-nli-group-title-text{color:var(--sapGroup_TitleTextColor);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontHeader6Size);font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui5-nli-group-divider{flex:1}.ui5-nli-group-counter{margin-inline-start:.25rem;margin-inline-end:1rem;color:var(--sapList_TableGroupHeaderTextColor);font-size:var(--sapFontHeader6Size);font-family:"72override",var(--sapFontHeaderFamily)}:host([ui5-li-notification-group]){-webkit-tap-highlight-color:transparent}
`};var b=function(o,t,e,s){var u=arguments.length,c=u<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,g;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(o,t,e,s);else for(var y=o.length-1;y>=0;y--)(g=o[y])&&(c=(u<3?g(c):u>3?g(t,e,c):g(t,e))||c);return u>3&&c&&Object.defineProperty(t,e,c),c},l;let d=l=class extends B{onBeforeRendering(){this.busy&&this.clearChildBusyIndicator()}clearChildBusyIndicator(){this.items.forEach(t=>{t.busy=!1})}get itemsCount(){return this.items.length}get overflowBtnAccessibleName(){return l.i18nFioriBundle.getText(z)}get closeBtnAccessibleName(){return l.i18nFioriBundle.getText(H)}get toggleBtnAccessibleName(){return this.collapsed?l.i18nFioriBundle.getText(W):l.i18nFioriBundle.getText(X)}get priorityText(){return this.priority===h.High?l.i18nFioriBundle.getText(Y):this.priority===h.Medium?l.i18nFioriBundle.getText(J):this.priority===h.Low?l.i18nFioriBundle.getText(K):""}get accInvisibleText(){return`${this.groupText} ${this.readText} ${this.priorityText} ${this.counterText}`}get readText(){return this.read?l.i18nFioriBundle.getText(Q):l.i18nFioriBundle.getText(Z)}get groupText(){return l.i18nFioriBundle.getText(ee)}get counterText(){const t=l.i18nFioriBundle.getText(te);return this.showCounter?`${t} ${this.itemsCount}`:""}get ariaLabelledBy(){const t=this._id,e=[];return this.hasTitleText&&e.push(`${t}-title-text`),e.push(`${t}-invisibleText`),e.join(" ")}get _ariaExpanded(){return!this.collapsed}get groupCollapsedIcon(){return this.collapsed?"navigation-right-arrow":"navigation-down-arrow"}_onBtnToggleClick(){this.collapsed=!this.collapsed,this.fireEvent("toggle",{item:this})}};b([D({type:Boolean})],d.prototype,"collapsed",void 0);b([D({type:Boolean})],d.prototype,"showCounter",void 0);b([q({type:HTMLElement,default:!0})],d.prototype,"items",void 0);d=l=b([k({tag:"ui5-li-notification-group",languageAware:!0,styles:re,template:oe,dependencies:[P,j,M,R,U]}),G("toggle")],d);d.define();const le=d,ue=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"})),p=F("ui5-li-notification-group",["busyDelay","priority","titleText"],["busy","collapsed","read","selected","showClose","showCounter"],["actions"],["close","toggle"],()=>S(()=>Promise.resolve().then(()=>ue),void 0,import.meta.url));p.displayName="NotificationListGroupItem";try{p.displayName="NotificationListGroupItem",p.__docgenInfo={description:`The \`NotificationListGroupItem\` is a special type of list item,
that unlike others can group items within self, usually \`NotificationListItem\` items.

The component consists of:

- \`Toggle\` button to expand and collapse the group
- \`Priority\` icon to display the priority of the group
- \`TitleText\` to entitle the group
- Custom actions - with the use of \`NotificationAction\`
- Items of the group

### Usage
The component can be used in a standard \`ui5-list\`.



\`import "@ui5/webcomponents/dist/NotificationAction.js";\` (optional)

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"NotificationListGroupItem",props:{actions:{defaultValue:null,description:`Defines the actions, displayed in the top-right area.

**Note:** use the \`NotificationAction\` component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="actions"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"actions",required:!1,type:{name:"UI5WCSlotsNode"}},children:{defaultValue:null,description:"Defines the items of the `NotificationListGroupItem`,\nusually `NotificationListItem` items.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClose:{defaultValue:null,description:"Fired when the `Close` button is pressed.",name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<NotificationListGroupItemDomRef, NotificationListItemBaseCloseEventDetail>) => void"}},onToggle:{defaultValue:null,description:"Fired when the `NotificationListGroupItem` is expanded/collapsed by user interaction.",name:"onToggle",required:!1,type:{name:"(event: Ui5CustomEvent<NotificationListGroupItemDomRef, never>) => void"}},busy:{defaultValue:{value:"false"},description:"Defines if a busy indicator would be displayed over the item.",name:"busy",required:!1,type:{name:"boolean"}},busyDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the busy indicator will show up for this component.",name:"busyDelay",required:!1,type:{name:"number"}},collapsed:{defaultValue:{value:"false"},description:"Defines if the group is collapsed or expanded.",name:"collapsed",required:!1,type:{name:"boolean"}},priority:{defaultValue:{value:'"None"'},description:"Defines the `priority` of the item.",name:"priority",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Medium"'},{value:'"High"'},{value:'"Medium"'},{value:'"Low"'},{value:'"None"'},{value:'"High"'},{value:'"Low"'}]}},read:{defaultValue:{value:"false"},description:"Defines if the `notification` is new or has been already read.\n\n**Note:** if set to `false` the `titleText` has bold font,\nif set to true - it has a normal font.",name:"read",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the `ListItem`.",name:"selected",required:!1,type:{name:"boolean"}},showClose:{defaultValue:{value:"false"},description:"Defines if the `close` button would be displayed.",name:"showClose",required:!1,type:{name:"boolean"}},showCounter:{defaultValue:{value:"false"},description:"Defines if the items `counter` would be displayed.",name:"showCounter",required:!1,type:{name:"boolean"}},titleText:{defaultValue:null,description:"Defines the `titleText` of the item.",name:"titleText",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{p.displayName="NotificationListGroupItem",p.__docgenInfo={description:`The \`NotificationListGroupItem\` is a special type of list item,
that unlike others can group items within self, usually \`NotificationListItem\` items.

The component consists of:

- \`Toggle\` button to expand and collapse the group
- \`Priority\` icon to display the priority of the group
- \`TitleText\` to entitle the group
- Custom actions - with the use of \`NotificationAction\`
- Items of the group

### Usage
The component can be used in a standard \`ui5-list\`.



\`import "@ui5/webcomponents/dist/NotificationAction.js";\` (optional)

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"NotificationListGroupItem",props:{actions:{defaultValue:null,description:`Defines the actions, displayed in the top-right area.

**Note:** use the \`NotificationAction\` component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="actions"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"actions",required:!1,type:{name:"UI5WCSlotsNode"}},children:{defaultValue:null,description:"Defines the items of the `NotificationListGroupItem`,\nusually `NotificationListItem` items.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClose:{defaultValue:null,description:"Fired when the `Close` button is pressed.",name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<NotificationListGroupItemDomRef, NotificationListItemBaseCloseEventDetail>) => void"}},onToggle:{defaultValue:null,description:"Fired when the `NotificationListGroupItem` is expanded/collapsed by user interaction.",name:"onToggle",required:!1,type:{name:"(event: Ui5CustomEvent<NotificationListGroupItemDomRef, never>) => void"}},busy:{defaultValue:{value:"false"},description:"Defines if a busy indicator would be displayed over the item.",name:"busy",required:!1,type:{name:"boolean"}},busyDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the busy indicator will show up for this component.",name:"busyDelay",required:!1,type:{name:"number"}},collapsed:{defaultValue:{value:"false"},description:"Defines if the group is collapsed or expanded.",name:"collapsed",required:!1,type:{name:"boolean"}},priority:{defaultValue:{value:'"None"'},description:"Defines the `priority` of the item.",name:"priority",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Medium"'},{value:'"High"'},{value:'"Medium"'},{value:'"Low"'},{value:'"None"'},{value:'"High"'},{value:'"Low"'}]}},read:{defaultValue:{value:"false"},description:"Defines if the `notification` is new or has been already read.\n\n**Note:** if set to `false` the `titleText` has bold font,\nif set to true - it has a normal font.",name:"read",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the `ListItem`.",name:"selected",required:!1,type:{name:"boolean"}},showClose:{defaultValue:{value:"false"},description:"Defines if the `close` button would be displayed.",name:"showClose",required:!1,type:{name:"boolean"}},showCounter:{defaultValue:{value:"false"},description:"Defines if the items `counter` would be displayed.",name:"showCounter",required:!1,type:{name:"boolean"}},titleText:{defaultValue:null,description:"Defines the `titleText` of the item.",name:"titleText",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const ce={title:"Data Display / NotificationListGroupItem",component:p,argTypes:{children:{control:{disable:!0}},actions:{control:{disable:!0}}},args:{showClose:!0,showCounter:!0,titleText:"Orders",priority:h.None,actions:n.jsxs(n.Fragment,{children:[n.jsx(m,{icon:"accept",text:"Accept all"}),n.jsx(m,{icon:"message-error",text:"Reject all"})]})},tags:["package:@ui5/webcomponents-fiori"]},f={render:o=>n.jsxs(p,{...o,children:[n.jsx(_,{priority:h.Medium,titleText:"New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",avatar:n.jsx(T,{size:v.XS,children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png"})}),footnotes:n.jsxs(n.Fragment,{children:[n.jsx("span",{children:"Monique Legrand"}),n.jsx("span",{children:"2 Days"})]}),actions:n.jsxs(n.Fragment,{children:[n.jsx(m,{icon:"accept",text:"Accept"}),n.jsx(m,{icon:"message-error",text:"Reject"})]}),children:"And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."}),n.jsx(_,{showClose:!0,titleText:"New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.",priority:h.High,avatar:n.jsx(T,{size:v.XS,children:n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png"})}),footnotes:n.jsxs(n.Fragment,{children:[n.jsx("span",{children:"Alain Devalier"}),n.jsx("span",{children:"2 Days"})]}),actions:n.jsxs(n.Fragment,{children:[n.jsx(m,{icon:"accept",text:"Accept"}),n.jsx(m,{icon:"message-error",text:"Reject"})]}),children:"And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."})]})};var L,C,A;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    return <NotificationListGroupItem {...args}>
        <NotificationListItem priority={Priority.Medium} titleText={'New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.'} avatar={<Avatar size={AvatarSize.XS}>
              <img src="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png" />
            </Avatar>} footnotes={<>
              <span>Monique Legrand</span>
              <span>2 Days</span>
            </>} actions={<>
              <NotificationAction icon="accept" text="Accept" />
              <NotificationAction icon="message-error" text="Reject" />
            </>}>
          And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
          nec elementum lectus turpis at nunc.
        </NotificationListItem>
        <NotificationListItem showClose titleText="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority={Priority.High} avatar={<Avatar size={AvatarSize.XS}>
              <img src="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_1.png" />
            </Avatar>} footnotes={<>
              <span>Alain Devalier</span>
              <span>2 Days</span>
            </>} actions={<>
              <NotificationAction icon="accept" text="Accept" />
              <NotificationAction icon="message-error" text="Reject" />
            </>}>
          And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
          nec elementum lectus turpis at nunc.
        </NotificationListItem>
      </NotificationListGroupItem>;
  }
}`,...(A=(C=f.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const de=["Default"],Se=Object.freeze(Object.defineProperty({__proto__:null,Default:f,__namedExportsOrder:de,default:ce},Symbol.toStringTag,{value:"Module"}));export{Se as C,f as D};
