import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{A as f}from"./index-DOaWR8S5.js";import{p as k,d as x,j as m,h as D,s as b,m as E,y as R,E as N,e as O,w as L}from"./jsx-runtime-CkEx_Gfk.js";import{f as _}from"./ResizeHandler-DS2o_9u5.js";import{f as z}from"./ItemNavigation-B1w6o4UP.js";import{d as B}from"./slot-_4yKMUwC.js";import{l as w}from"./event-strict-DgQLNDEV.js";import{i as U}from"./i18n-CjR4HGlq.js";import{b as P,i as y}from"./Keys-B3oBAe0t.js";import{A as r}from"./AvatarSize-BtKTMFJ5.js";import{A}from"./AvatarColorScheme-CysxkulG.js";import{aD as W,aE as V,aF as H,aG as G,aH as q}from"./i18n-defaults-B158X0Y5.js";import{d as j}from"./parameters-bundle.css-Dkq9X0yL.js";import{a as M}from"./Button-DcNvBpEn.js";var n;(function(i){i.Group="Group",i.Individual="Individual"})(n||(n={}));k("@ui5/webcomponents-theming","sap_horizon",async()=>x);k("@ui5/webcomponents","sap_horizon",async()=>j);const F=`:host{-webkit-tap-highlight-color:rgba(0,0,0,0)}:host(:not([hidden])){display:block;width:100%}:host{--_ui5-v2-10-0_button_focused_border: var(--_ui5-v2-10-0_avatar_group_button_focus_border)}.ui5-avatar-group-items:focus{outline:none}:host([type="Group"][desktop]) .ui5-avatar-group-items:focus,:host([type="Group"]) .ui5-avatar-group-items:focus-visible{outline:var(--_ui5-v2-10-0_avatar_outline);outline-offset:var(--_ui5-v2-10-0_avatar_focus_offset);border-radius:var(--_ui5-v2-10-0_avatar_group_focus_border_radius)}.ui5-avatar-group-root{display:flex}.ui5-avatar-group-items{white-space:nowrap;position:relative;display:inline-flex}:host([type="Group"]) .ui5-avatar-group-items{cursor:pointer}:host([type="Group"]) ::slotted([ui5-button]),:host([type="Group"]) ::slotted([ui5-avatar]){pointer-events:none}.ui5-avatar-group-overflow-btn{overflow:visible}.ui5-avatar-group-overflow-btn::part(button){min-width:auto}::slotted([ui5-button]:not([hidden])),.ui5-avatar-group-overflow-btn:not([hidden]){--_ui5-v2-10-0_button_base_padding: 0;border-radius:50%;display:inline-flex;text-overflow:initial;z-index:0}::slotted([ui5-button][desktop]:focus),.ui5-avatar-group-overflow-btn[desktop]:focus{outline:var(--_ui5-v2-10-0_avatar_outline);outline-offset:var(--_ui5-v2-10-0_avatar_overflow_button_focus_offset)}.ui5-avatar-group-overflow-btn::part(button):focus-visible:after{outline:var(--_ui5-v2-10-0_avatar_outline);outline-offset:var(--_ui5-v2-10-0_avatar_focus_offset);border-radius:50%}.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-xs{height:2rem;width:2rem;min-width:2rem;font-size:.75rem}::slotted([ui5-button]),.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-s{height:3rem;width:3rem;min-width:3rem;font-size:1.125rem}.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-m{height:4rem;width:4rem;min-width:4rem;font-size:1.625rem}.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-l{height:5rem;width:5rem;min-width:5rem;font-size:2rem}.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-xl{height:7rem;width:7rem;min-width:7rem;font-size:2.75rem}
`;function $(){return m("div",{class:"ui5-avatar-group-root",children:D("div",{class:"ui5-avatar-group-items",role:this._role,tabindex:this._groupTabIndex,"aria-label":this._ariaLabelText,"aria-haspopup":this._containerAriaHasPopup,onClick:this._onClick,onKeyUp:this._onkeyup,onKeyDown:this._onkeydown,onFocusIn:this._onfocusin,children:[m("slot",{onClick:this.onAvatarClick,"onui5-click":this.onAvatarUI5Click}),this._customOverflowButton?m("slot",{onClick:this.onOverflowButtonClick,name:"overflowButton"}):m(M,{onClick:this.onOverflowButtonClick,accessibilityAttributes:this._overflowButtonAccAttributes,accessibleName:this._overflowButtonAriaLabelText,hidden:this._overflowBtnHidden,nonInteractive:this._isGroup,class:{"ui5-avatar-group-overflow-btn":!0,"ui5-avatar-group-overflow-btn-xs":this.firstAvatarSize===r.XS,"ui5-avatar-group-overflow-btn-s":this.firstAvatarSize===r.S,"ui5-avatar-group-overflow-btn-m":this.firstAvatarSize===r.M,"ui5-avatar-group-overflow-btn-l":this.firstAvatarSize===r.L,"ui5-avatar-group-overflow-btn-xl":this.firstAvatarSize===r.XL},children:this._overflowButtonText})]})})}var c=function(i,e,t,o){var a=arguments.length,l=a<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,v;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(i,e,t,o);else for(var g=i.length-1;g>=0;g--)(v=i[g])&&(l=(a<3?v(l):a>3?v(e,t,l):v(e,t))||l);return a>3&&l&&Object.defineProperty(e,t,l),l},p;const S="ui5-avatar-group-overflow-btn",Y=`.${S}`,K={[r.XS]:{[n.Individual]:"0.0625rem",[n.Group]:"-0.5rem"},[r.S]:{[n.Individual]:"0.125rem",[n.Group]:"-1.25rem"},[r.M]:{[n.Individual]:"0.125rem",[n.Group]:"-1.625rem"},[r.L]:{[n.Individual]:"0.125rem",[n.Group]:" -2rem"},[r.XL]:{[n.Individual]:"0.25rem",[n.Group]:"-2.75rem"}};let s=p=class extends N{constructor(){super(),this.type="Group",this.accessibilityAttributes={},this._colorIndex=0,this._hiddenItems=0,this._itemNavigation=new z(this,{getItemsCallback:()=>this._isGroup?[]:this.items.slice(0,this._hiddenStartIndex)}),this._onResizeHandler=this._onResize.bind(this)}get hiddenItems(){return this.items.slice(this._hiddenStartIndex)}get colorScheme(){return this.items.map(e=>e.effectiveBackgroundColor)}get _customOverflowButton(){return this.overflowButton.length?this.overflowButton[0]:void 0}get _ariaLabelText(){const e=this.hiddenItems.length,t=this._isGroup?W:V;let o=p.i18nBundle.getText(t);return o+=` ${p.i18nBundle.getText(H,this._itemsCount-e,e)}`,this._isGroup?o+=` ${p.i18nBundle.getText(G)}`:o+=` ${p.i18nBundle.getText(q)}`,o}get _overflowButtonAriaLabelText(){return this._isGroup?void 0:p.i18nBundle.getText(G)}get _containerAriaHasPopup(){return this._isGroup?this._getAriaHasPopup():void 0}get _overflowButtonAccAttributes(){return{hasPopup:this._isGroup?void 0:this._getAriaHasPopup()}}get _role(){return this._isGroup?"button":"group"}get _hiddenStartIndex(){return this._itemsCount-this._hiddenItems}get _overflowBtnHidden(){return this._hiddenItems===0}get _isGroup(){return this.type===n.Group}get _itemsCount(){return this.items.length}get _groupTabIndex(){return this._isGroup?0:-1}get _overflowButton(){return this.shadowRoot.querySelector(Y)}get _overflowButtonEffectiveWidth(){const e=this._customOverflowButton?this._customOverflowButton:this._overflowButton;if(!e)return 0;if(this._isGroup){let t=this.items[1];const o=t.offsetLeft-this.offsetLeft;return(!t||t.hidden)&&(t=e),this.effectiveDir==="rtl"?this._getWidthToItem(t):o}return e.offsetWidth}get firstAvatarSize(){var e;return((e=this.items[0])==null?void 0:e.size)??r.S}onAfterRendering(){this._overflowItems()}onBeforeRendering(){this._customOverflowButton&&(this._customOverflowButton.nonInteractive=this._isGroup),this._prepareAvatars()}onEnterDOM(){O()&&this.setAttribute("desktop",""),_.register(this,this._onResizeHandler)}onExitDOM(){_.deregister(this,this._onResizeHandler)}_onResize(){this._overflowItems()}_onkeydown(e){this._isGroup&&(P(e)?this._fireGroupEvent(e.target):y(e)&&e.preventDefault())}_onkeyup(e){!e.shiftKey&&y(e)&&this._isGroup&&(this._fireGroupEvent(e.target),e.preventDefault())}_fireGroupEvent(e){const t=e.classList.contains(S)||e===this._customOverflowButton;this.fireDecoratorEvent("click",{targetRef:e,overflowButtonClicked:t})}_onClick(e){e.stopPropagation(),this._isGroup&&this._fireGroupEvent(e.target)}onAvatarClick(e){e.stopPropagation(),this.fireDecoratorEvent("click",{targetRef:e.target,overflowButtonClicked:!1})}onAvatarUI5Click(e){e.stopPropagation()}onOverflowButtonClick(e){e.stopPropagation(),this.fireDecoratorEvent("click",{targetRef:e.target,overflowButtonClicked:!0})}_prepareAvatars(){this._colorIndex=0,this.items.forEach((e,t)=>{const o=this._getNextBackgroundColor();e.interactive=!this._isGroup,e.getAttribute("_color-scheme")===A.Auto&&e.setAttribute("_color-scheme",A[`Accent${o}`]),t!==this._itemsCount-1||this._customOverflowButton?e.style.marginInlineEnd=K[e.effectiveSize][this.type]:e.style.marginInlineEnd=""})}_onfocusin(e){this._itemNavigation.setCurrentItem(e.target)}_getWidthToItem(e){const t=this.effectiveDir==="rtl",o=e.offsetLeft-this.offsetLeft;if(t){const a=e.offsetParent;return a?a.offsetWidth-e.offsetLeft-e.offsetWidth:0}return o}_overflowItems(){if(this.items.length<2){this._setHiddenItems(0);return}let e=0;for(let t=0;t<this._itemsCount;t++){const o=this.items[t];o.hidden=!1;let a=this._getWidthToItem(o)+o.offsetWidth;if((t!==this._itemsCount-1||this._customOverflowButton)&&(a+=this._overflowButtonEffectiveWidth),a>this.offsetWidth){e=this._itemsCount-t;break}}this._setHiddenItems(e)}_getNextBackgroundColor(){return++this._colorIndex>10&&(this._colorIndex=1),this._colorIndex}_setHiddenItems(e){const t=this._hiddenItems!==e;this._hiddenItems=e,this.items.forEach((o,a)=>{o.hidden=a>=this._hiddenStartIndex}),this._overflowButtonText=`+${e>99?99:e}`,t&&this.fireDecoratorEvent("overflow")}_getAriaHasPopup(){return this.accessibilityAttributes.hasPopup}};c([b()],s.prototype,"type",void 0);c([b({type:Object})],s.prototype,"accessibilityAttributes",void 0);c([b({noAttribute:!0})],s.prototype,"_overflowButtonText",void 0);c([B({type:HTMLElement,default:!0})],s.prototype,"items",void 0);c([B()],s.prototype,"overflowButton",void 0);c([U("@ui5/webcomponents")],s,"i18nBundle",void 0);s=p=c([E({tag:"ui5-avatar-group",renderer:R,template:$,styles:F}),w("click"),w("overflow")],s);s.define();const h=L("ui5-avatar-group",["accessibilityAttributes","type"],[],["overflowButton"],["click","overflow"]);h.displayName="AvatarGroup";try{h.displayName="AvatarGroup",h.__docgenInfo={description:`Displays a group of avatars arranged horizontally. It is useful to visually
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
| ❌|❌|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<AvatarGroupDomRef, AvatarGroupClickEventDetail>) => void"}},onOverflow:{defaultValue:null,description:`Fired when the count of visible \`Avatar\` elements in the
component has changed

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onOverflow",required:!1,type:{name:"(event: Ui5CustomEvent<AvatarGroupDomRef, never>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines the additional accessibility attributes that will be applied to the component.\nThe following field is supported:\n\n- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.\nAccepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.",name:"accessibilityAttributes",required:!1,type:{name:"AvatarGroupAccessibilityAttributes"}},type:{defaultValue:{value:'"Group"'},description:"Defines the mode of the `AvatarGroup`.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Group"'},{value:'"Individual"'},{value:'"Group"'},{value:'"Individual"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="AvatarGroup",h.__docgenInfo={description:`Displays a group of avatars arranged horizontally. It is useful to visually
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
| ❌|❌|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<AvatarGroupDomRef, AvatarGroupClickEventDetail>) => void"}},onOverflow:{defaultValue:null,description:`Fired when the count of visible \`Avatar\` elements in the
component has changed

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onOverflow",required:!1,type:{name:"(event: Ui5CustomEvent<AvatarGroupDomRef, never>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines the additional accessibility attributes that will be applied to the component.\nThe following field is supported:\n\n- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.\nAccepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.",name:"accessibilityAttributes",required:!1,type:{name:"AvatarGroupAccessibilityAttributes"}},type:{defaultValue:{value:'"Group"'},description:"Defines the mode of the `AvatarGroup`.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Group"'},{value:'"Individual"'},{value:'"Group"'},{value:'"Individual"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const X={title:"Data Display / AvatarGroup",component:h,argTypes:{children:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},args:{type:n.Group},tags:["package:@ui5/webcomponents"]},d={render(i){return u.jsxs(h,{...i,children:[u.jsx(f,{icon:"employee"}),u.jsx(f,{initials:"JD"}),u.jsx(f,{children:u.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_5.png",alt:"Avatar1"})}),u.jsx(f,{children:u.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/avatars/man_avatar_3.png",alt:"Avatar2"})})]})}};var C,I,T;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(T=(I=d.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};const J=["Default"],de=Object.freeze(Object.defineProperty({__proto__:null,Default:d,__namedExportsOrder:J,default:X},Symbol.toStringTag,{value:"Module"}));export{de as C,d as D};
