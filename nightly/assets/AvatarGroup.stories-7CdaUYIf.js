import{j as p}from"./jsx-runtime-D6fbYt3N.js";import{A as m}from"./index-CHrZj7jK.js";import{a as C,s as N,p as b,q as r,v as y,b as w,m as R,y as L,S as $,A as O,w as z}from"./withWebComponent-DpVKsRHi.js";import{f as A}from"./ResizeHandler-D2m47C26.js";import{f as U}from"./ItemNavigation-DWaDskwg.js";import{d as D}from"./slot-_4yKMUwC.js";import{b as G}from"./event-BX8i4Y_x.js";import{i as W}from"./i18n-DEVDpFvK.js";import{b as P,i as T}from"./Keys-DoZifIQ_.js";import{a as V}from"./Button-CzXV-qq-.js";import{A as s}from"./AvatarSize-BceVhWoP.js";import{A as H}from"./AvatarColorScheme-Bo7yU2Uu.js";import{aw as q,ax as M,ay as j,az as I,aA as F}from"./i18n-defaults-CMHHS2wK.js";import{s as Y}from"./parameters-bundle.css-R51uC6BG.js";import{o as B}from"./class-map-CAgcI9af.js";var _;(function(a){a.Group="Group",a.Individual="Individual"})(_||(_={}));const i=_;C("@ui5/webcomponents-theming","sap_horizon",async()=>N);C("@ui5/webcomponents","sap_horizon",async()=>Y);const X={packageName:"@ui5/webcomponents",fileName:"themes/AvatarGroup.css.ts",content:`:host{-webkit-tap-highlight-color:rgba(0,0,0,0)}:host(:not([hidden])){display:block;width:100%}:host{--_ui5-v2-4-0_button_focused_border: var(--_ui5-v2-4-0_avatar_group_button_focus_border)}.ui5-avatar-group-items:focus{outline:none}:host([type="Group"][desktop]) .ui5-avatar-group-items:focus,:host([type="Group"]) .ui5-avatar-group-items:focus-visible{outline:var(--_ui5-v2-4-0_avatar_outline);outline-offset:var(--_ui5-v2-4-0_avatar_focus_offset);border-radius:var(--_ui5-v2-4-0_avatar_group_focus_border_radius)}.ui5-avatar-group-root{display:flex}.ui5-avatar-group-items{white-space:nowrap;position:relative;display:inline-flex}:host([type="Group"]) .ui5-avatar-group-items{cursor:pointer}:host([type="Group"]) ::slotted([ui5-button]),:host([type="Group"]) ::slotted([ui5-avatar]){pointer-events:none}.ui5-avatar-group-overflow-btn{overflow:visible}.ui5-avatar-group-overflow-btn::part(button){min-width:auto}::slotted([ui5-button]:not([hidden])),.ui5-avatar-group-overflow-btn:not([hidden]){--_ui5-v2-4-0_button_base_padding: 0;border-radius:50%;display:inline-flex;text-overflow:initial;z-index:0}::slotted([ui5-button][desktop]:focus),.ui5-avatar-group-overflow-btn[desktop]:focus{outline:var(--_ui5-v2-4-0_avatar_outline);outline-offset:var(--_ui5-v2-4-0_avatar_overflow_button_focus_offset)}.ui5-avatar-group-overflow-btn::part(button):focus-visible:after{outline:var(--_ui5-v2-4-0_avatar_outline);outline-offset:var(--_ui5-v2-4-0_avatar_focus_offset);border-radius:50%}.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-xs{height:2rem;width:2rem;min-width:2rem;font-size:.75rem}::slotted([ui5-button]),.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-s{height:3rem;width:3rem;min-width:3rem;font-size:1.125rem}.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-m{height:4rem;width:4rem;min-width:4rem;font-size:1.625rem}.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-l{height:5rem;width:5rem;min-width:5rem;font-size:2rem}.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-xl{height:7rem;width:7rem;min-width:7rem;font-size:2.75rem}
`};function K(a,e,t){return b`<div class="ui5-avatar-group-root"><div class="ui5-avatar-group-items" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" @focusin="${this._onfocusin}" tabindex="${r(this._groupTabIndex)}" @click="${this._onClick}" @ui5-click="${r(this._onUI5Click)}" aria-label="${r(this._ariaLabelText)}" role="${r(this._role)}" aria-haspopup="${r(this._containerAriaHasPopup)}"><slot></slot>${this._customOverflowButton?J.call(this,a,e,t):Q.call(this,a,e,t)}</div></div>`}function J(a,e,t){return b`<slot name="overflowButton"></slot>`}function Q(a,e,t){return t?b`<${y("ui5-button",e,t)} .accessibilityAttributes="${r(this._overflowButtonAccAttributes)}" accessible-name="${r(this._overflowButtonAriaLabelText)}" ?hidden="${this._overflowBtnHidden}" ?non-interactive=${this._isGroup} class="${B(this.classes.overflowButton)}">${r(this._overflowButtonText)}</${y("ui5-button",e,t)}>`:b`<ui5-button .accessibilityAttributes="${r(this._overflowButtonAccAttributes)}" accessible-name="${r(this._overflowButtonAriaLabelText)}" ?hidden="${this._overflowBtnHidden}" ?non-interactive=${this._isGroup} class="${B(this.classes.overflowButton)}">${r(this._overflowButtonText)}</ui5-button>`}var d=function(a,e,t,o){var n=arguments.length,u=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")u=Reflect.decorate(a,e,t,o);else for(var g=a.length-1;g>=0;g--)(f=a[g])&&(u=(n<3?f(u):n>3?f(e,t,u):f(e,t))||u);return n>3&&u&&Object.defineProperty(e,t,u),u},h;const E="ui5-avatar-group-overflow-btn",Z=`.${E}`,ee={[s.XS]:{[i.Individual]:"0.0625rem",[i.Group]:"-0.5rem"},[s.S]:{[i.Individual]:"0.125rem",[i.Group]:"-1.25rem"},[s.M]:{[i.Individual]:"0.125rem",[i.Group]:"-1.625rem"},[s.L]:{[i.Individual]:"0.125rem",[i.Group]:" -2rem"},[s.XL]:{[i.Individual]:"0.25rem",[i.Group]:"-2.75rem"}};let l=h=class extends ${constructor(){super(),this.type="Group",this.accessibilityAttributes={},this._colorIndex=0,this._hiddenItems=0,this._itemNavigation=new U(this,{getItemsCallback:()=>this._isGroup?[]:this.items.slice(0,this._hiddenStartIndex)}),this._onResizeHandler=this._onResize.bind(this)}get hiddenItems(){return this.items.slice(this._hiddenStartIndex)}get colorScheme(){return this.items.map(e=>e.еffectiveBackgroundColor)}get _customOverflowButton(){return this.overflowButton.length?this.overflowButton[0]:void 0}get _ariaLabelText(){const e=this.hiddenItems.length,t=this._isGroup?q:M;let o=h.i18nBundle.getText(t);return o+=` ${h.i18nBundle.getText(j,this._itemsCount-e,e)}`,this._isGroup?o+=` ${h.i18nBundle.getText(I)}`:o+=` ${h.i18nBundle.getText(F)}`,o}get _overflowButtonAriaLabelText(){return this._isGroup?void 0:h.i18nBundle.getText(I)}get _containerAriaHasPopup(){return this._isGroup?this._getAriaHasPopup():void 0}get _overflowButtonAccAttributes(){return{hasPopup:this._isGroup?void 0:this._getAriaHasPopup()}}get _role(){return this._isGroup?"button":"group"}get _hiddenStartIndex(){return this._itemsCount-this._hiddenItems}get _overflowBtnHidden(){return this._hiddenItems===0}get _isGroup(){return this.type===i.Group}get _itemsCount(){return this.items.length}get _groupTabIndex(){return this._isGroup?"0":"-1"}get _overflowButton(){return this.shadowRoot.querySelector(Z)}get _overflowButtonEffectiveWidth(){const e=this._customOverflowButton?this._customOverflowButton:this._overflowButton;if(!e)return 0;if(this._isGroup){let t=this.items[1];const o=t.offsetLeft-this.offsetLeft;return(!t||t.hidden)&&(t=e),this.effectiveDir==="rtl"?this._getWidthToItem(t):o}return e.offsetWidth}get firstAvatarSize(){var e;return((e=this.items[0])==null?void 0:e.size)??s.S}get classes(){return{overflowButton:{"ui5-avatar-group-overflow-btn":!0,"ui5-avatar-group-overflow-btn-xs":this.firstAvatarSize===s.XS,"ui5-avatar-group-overflow-btn-s":this.firstAvatarSize===s.S,"ui5-avatar-group-overflow-btn-m":this.firstAvatarSize===s.M,"ui5-avatar-group-overflow-btn-l":this.firstAvatarSize===s.L,"ui5-avatar-group-overflow-btn-xl":this.firstAvatarSize===s.XL}}}onAfterRendering(){this._overflowItems()}onBeforeRendering(){this._customOverflowButton&&(this._customOverflowButton.nonInteractive=this._isGroup),this._prepareAvatars()}onEnterDOM(){O()&&this.setAttribute("desktop",""),A.register(this,this._onResizeHandler)}onExitDOM(){A.deregister(this,this._onResizeHandler)}_onResize(){this._overflowItems()}_onkeydown(e){this._isGroup&&(P(e)?this._fireGroupEvent(e.target):T(e)&&e.preventDefault())}_onkeyup(e){!e.shiftKey&&T(e)&&this._isGroup&&(this._fireGroupEvent(e.target),e.preventDefault())}_fireGroupEvent(e){const t=e.classList.contains(E)||e===this._customOverflowButton;this.fireDecoratorEvent("click",{targetRef:e,overflowButtonClicked:t})}_onClick(e){const t=e.target,o=t.hasAttribute("ui5-button");e.stopPropagation(),(this._isGroup||o)&&this._fireGroupEvent(t)}_onUI5Click(e){const t=e.target,o=t.hasAttribute("ui5-avatar");e.stopPropagation(),o&&this._fireGroupEvent(t)}_prepareAvatars(){this._colorIndex=0,this.items.forEach((e,t)=>{const o=this._getNextBackgroundColor();e.interactive=!this._isGroup,e.getAttribute("_color-scheme")||e.setAttribute("_color-scheme",H[`Accent${o}`]),(t!==this._itemsCount-1||this._customOverflowButton)&&(e.style.marginInlineEnd=ee[e.effectiveSize][this.type])})}_onfocusin(e){this._itemNavigation.setCurrentItem(e.target)}_getWidthToItem(e){const t=this.effectiveDir==="rtl",o=e.offsetLeft-this.offsetLeft;if(t){const n=e.offsetParent;return n?n.offsetWidth-e.offsetLeft-e.offsetWidth:0}return o}_overflowItems(){if(this.items.length<2)return;let e=0;for(let t=0;t<this._itemsCount;t++){const o=this.items[t];o.hidden=!1;let n=this._getWidthToItem(o)+o.offsetWidth;if((t!==this._itemsCount-1||this._customOverflowButton)&&(n+=this._overflowButtonEffectiveWidth),n>this.offsetWidth){e=this._itemsCount-t;break}}this._setHiddenItems(e)}_getNextBackgroundColor(){return++this._colorIndex>10&&(this._colorIndex=1),this._colorIndex}_setHiddenItems(e){const t=this._hiddenItems!==e;this._hiddenItems=e,this.items.forEach((o,n)=>{o.hidden=n>=this._hiddenStartIndex}),this._overflowButtonText=`+${e>99?99:e}`,t&&this.fireDecoratorEvent("overflow")}_getAriaHasPopup(){return this.accessibilityAttributes.hasPopup}};d([w()],l.prototype,"type",void 0);d([w({type:Object})],l.prototype,"accessibilityAttributes",void 0);d([w({noAttribute:!0})],l.prototype,"_overflowButtonText",void 0);d([D({type:HTMLElement,default:!0})],l.prototype,"items",void 0);d([D()],l.prototype,"overflowButton",void 0);d([W("@ui5/webcomponents")],l,"i18nBundle",void 0);l=h=d([R({tag:"ui5-avatar-group",renderer:L,template:K,styles:X,dependencies:[V]}),G("click",{detail:{targetRef:{type:HTMLElement},overflowButtonClicked:{type:Boolean}}}),G("overflow")],l);l.define();const c=z("ui5-avatar-group",["accessibilityAttributes","type"],[],["overflowButton"],["click","overflow"]);c.displayName="AvatarGroup";try{c.displayName="AvatarGroup",c.__docgenInfo={description:`Displays a group of avatars arranged horizontally. It is useful to visually
showcase a group of related avatars, such as, project team members or employees.

The component allows you to display the avatars in different sizes,
depending on your use case.

The \`AvatarGroup\` component has two group types:

- \`Group\` type: The avatars are displayed as partially overlapped on
top of each other and the entire group has one click/tap area.
- \`Individual\` type: The avatars are displayed side-by-side and each
avatar has its own click/tap area.

### Usage

Use the \`AvatarGroup\` if:

- You want to display a group of avatars.
- You want to display several avatars which have something in common.

Do not use the \`AvatarGroup\` if:

- You want to display a single avatar.
- You want to display a gallery for simple images.
- You want to use it for other visual content than avatars.

### Responsive Behavior

When the available space is less than the width required to display all avatars,
an overflow visualization appears as a button placed at the end with the same shape
and size as the avatars. The visualization displays the number of avatars that have overflowed
and are not currently visible.

### Keyboard Handling
The component provides advanced keyboard handling.
When focused, the user can use the following keyboard
shortcuts in order to perform a navigation:

\`type\` Individual:

- [Tab] - Move focus to the overflow button
- [Left] - Navigate one avatar to the left
- [Right] - Navigate one avatar to the right
- [Home] - Navigate to the first avatar
- [End] - Navigate to the last avatar
- [Space] / [Enter] or [Return] - Trigger \`ui5-click\` event

\`type\` Group:

- [Tab] - Move focus to the next interactive element after the component
- [Space] / [Enter] or [Return] - Trigger \`ui5-click\` event

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"AvatarGroup",props:{children:{defaultValue:null,description:`Defines the items of the component. Use the \`Avatar\` component as an item.

**Note:** The UX guidelines recommends using avatars with "Circle" shape.

Moreover, if you use avatars with "Square" shape, there will be visual inconsistency
as the built-in overflow action has "Circle" shape.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},overflowButton:{defaultValue:null,description:`Defines the overflow button of the component.

**Note:** We recommend using the \`Button\` component.

**Note:** If this slot is not used, the component will display the built-in overflow button.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="overflowButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"overflowButton",required:!1,type:{name:"UI5WCSlotsNode"}},onClick:{defaultValue:null,description:`Fired when the component is activated either with a
click/tap or by using the Enter or Space key.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<AvatarGroupDomRef, AvatarGroupClickEventDetail>) => void"}},onOverflow:{defaultValue:null,description:`Fired when the count of visible \`Avatar\` elements in the
component has changed

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onOverflow",required:!1,type:{name:"(event: Ui5CustomEvent<AvatarGroupDomRef, never>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines the additional accessibility attributes that will be applied to the component.\nThe following field is supported:\n\n- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.\nAccepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.",name:"accessibilityAttributes",required:!1,type:{name:"AvatarGroupAccessibilityAttributes"}},type:{defaultValue:{value:'"Group"'},description:"Defines the mode of the `AvatarGroup`.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Group"'},{value:'"Individual"'},{value:'"Group"'},{value:'"Individual"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{c.displayName="AvatarGroup",c.__docgenInfo={description:`Displays a group of avatars arranged horizontally. It is useful to visually
showcase a group of related avatars, such as, project team members or employees.

The component allows you to display the avatars in different sizes,
depending on your use case.

The \`AvatarGroup\` component has two group types:

- \`Group\` type: The avatars are displayed as partially overlapped on
top of each other and the entire group has one click/tap area.
- \`Individual\` type: The avatars are displayed side-by-side and each
avatar has its own click/tap area.

### Usage

Use the \`AvatarGroup\` if:

- You want to display a group of avatars.
- You want to display several avatars which have something in common.

Do not use the \`AvatarGroup\` if:

- You want to display a single avatar.
- You want to display a gallery for simple images.
- You want to use it for other visual content than avatars.

### Responsive Behavior

When the available space is less than the width required to display all avatars,
an overflow visualization appears as a button placed at the end with the same shape
and size as the avatars. The visualization displays the number of avatars that have overflowed
and are not currently visible.

### Keyboard Handling
The component provides advanced keyboard handling.
When focused, the user can use the following keyboard
shortcuts in order to perform a navigation:

\`type\` Individual:

- [Tab] - Move focus to the overflow button
- [Left] - Navigate one avatar to the left
- [Right] - Navigate one avatar to the right
- [Home] - Navigate to the first avatar
- [End] - Navigate to the last avatar
- [Space] / [Enter] or [Return] - Trigger \`ui5-click\` event

\`type\` Group:

- [Tab] - Move focus to the next interactive element after the component
- [Space] / [Enter] or [Return] - Trigger \`ui5-click\` event

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"AvatarGroup",props:{children:{defaultValue:null,description:`Defines the items of the component. Use the \`Avatar\` component as an item.

**Note:** The UX guidelines recommends using avatars with "Circle" shape.

Moreover, if you use avatars with "Square" shape, there will be visual inconsistency
as the built-in overflow action has "Circle" shape.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},overflowButton:{defaultValue:null,description:`Defines the overflow button of the component.

**Note:** We recommend using the \`Button\` component.

**Note:** If this slot is not used, the component will display the built-in overflow button.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="overflowButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"overflowButton",required:!1,type:{name:"UI5WCSlotsNode"}},onClick:{defaultValue:null,description:`Fired when the component is activated either with a
click/tap or by using the Enter or Space key.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<AvatarGroupDomRef, AvatarGroupClickEventDetail>) => void"}},onOverflow:{defaultValue:null,description:`Fired when the count of visible \`Avatar\` elements in the
component has changed

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onOverflow",required:!1,type:{name:"(event: Ui5CustomEvent<AvatarGroupDomRef, never>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines the additional accessibility attributes that will be applied to the component.\nThe following field is supported:\n\n- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.\nAccepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.",name:"accessibilityAttributes",required:!1,type:{name:"AvatarGroupAccessibilityAttributes"}},type:{defaultValue:{value:'"Group"'},description:"Defines the mode of the `AvatarGroup`.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Group"'},{value:'"Individual"'},{value:'"Group"'},{value:'"Individual"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const te={title:"Data Display / AvatarGroup",component:c,argTypes:{children:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},args:{type:i.Group},tags:["package:@ui5/webcomponents"]},v={render(a){return p.jsxs(c,{...a,children:[p.jsx(m,{icon:"employee"}),p.jsx(m,{initials:"JD"}),p.jsx(m,{children:p.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_5.png",alt:"Avatar1"})}),p.jsx(m,{children:p.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/avatars/man_avatar_3.png",alt:"Avatar2"})})]})}};var S,k,x;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render(args) {
    return <AvatarGroup {...args}>
        <Avatar icon="employee" />
        <Avatar initials="JD" />
        <Avatar>
          <img src="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_5.png" alt="Avatar1" />
        </Avatar>
        <Avatar>
          <img src="https://sap.github.io/ui5-webcomponents/images/avatars/man_avatar_3.png" alt="Avatar2" />
        </Avatar>
      </AvatarGroup>;
  }
}`,...(x=(k=v.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const oe=["Default"],_e=Object.freeze(Object.defineProperty({__proto__:null,Default:v,__namedExportsOrder:oe,default:te},Symbol.toStringTag,{value:"Module"}));export{_e as C,v as D};
