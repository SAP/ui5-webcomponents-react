import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{d as oe,c as ie,b as ae}from"./List-DiCPSBKg.js";import{c as se}from"./copy-C8Wa9dhW.js";import{h as x,j as m,F as K,p as q,d as Q,s as d,m as N,y as C,E as le,w as P}from"./jsx-runtime-CkEx_Gfk.js";import{I as J,f as A}from"./Icon-BexaehQh.js";import{s as R}from"./general-leave-request-BOdZOf75.js";import{r as U}from"./index-U0ga5oGA.js";import{T as re}from"./index-BxLcq94m.js";import{B as de}from"./index-D49NKxue.js";import{B as ue}from"./index-dNG4P2z4.js";import{I as B}from"./index-DtQjvaZb.js";import{d as D}from"./slot-_4yKMUwC.js";import{l as f}from"./event-strict-DgQLNDEV.js";import{c as ce,K as he,P as me,B as W,m as O,s as j}from"./Keys-B3oBAe0t.js";import{i as pe}from"./i18n-CjR4HGlq.js";import{d as fe}from"./CustomElementsScope-CjZbIYTD.js";import{L as ve,a as Z}from"./ListItemTemplate-HwqjeDC8.js";import"./navigation-right-arrow-uC40gcch.js";import{n as be}from"./navigation-down-arrow-9-Awfhdc.js";import{ci as ge,cj as ye,ck as we}from"./i18n-defaults-B158X0Y5.js";import{i as Te}from"./navigation-right-arrow-ChKjWoOl.js";import{d as ee}from"./parameters-bundle.css-Dkq9X0yL.js";import{D as Ie,p as L,L as _e,a as Ne,r as De}from"./DropIndicator-Pzk2J86G.js";import{i as xe,m as Se}from"./handleDrop-BdclM_pf.js";const qe={listItemPreContent:Ce,listItemContent:Ve,imageBegin:Le,iconBegin:Pe};function E(a){const e={...qe,...a};return x("div",{children:[ve.call(this,e),Ae.call(this)]})}function Ce(){return m("div",{class:"ui5-li-tree-toggle-box",style:this.styles.preContent,children:this.showToggleButton&&m(J,{part:"toggle-icon",class:"ui5-li-tree-toggle-icon",name:this.expanded?be:Te,showTooltip:!0,accessibleName:this.iconAccessibleName,onClick:this._toggleClick})})}function Ae(){if(this.expanded)return m("ul",{role:"group",id:`${this._id}-subtree`,class:"ui5-tree-li-subtree",children:m("slot",{})})}function Ve(){}function Le(){if(this.hasImage)return m("div",{class:"ui5-tree-item-image",children:m("slot",{name:"image"})})}function Pe(){return this.icon?m(J,{part:"icon",name:this.icon,class:"ui5-li-icon"}):m(K,{})}q("@ui5/webcomponents-theming","sap_horizon",async()=>Q);q("@ui5/webcomponents","sap_horizon",async()=>ee);const k=`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:block;position:relative}.ui5-li-tree-text-wrapper{flex:auto}.ui5-li-root-tree{padding-inline-start:0}:host(:not([level="1"])) .ui5-li-root{border-color:var(--sapList_AlternatingBackground)}:host([_toggle-button-end][selected]:not([level="1"])) .ui5-li-root{border-bottom:var(--ui5-v2-10-0-listitem-selected-border-bottom)}:host([_toggle-button-end]) .ui5-li-root-tree:hover,:host([_selection-mode]:not([_selection-mode="None"],[_selection-mode="Delete"],[active])) .ui5-li-root-tree:hover{cursor:pointer}:host([_toggle-button-end]:not([selected])) .ui5-li-root-tree:hover,:host(:not([_selection-mode="None"]):not([_selection-mode="Delete"]):not([active]):not([selected])) .ui5-li-root-tree:hover{background:var(--sapList_Hover_Background)}:host(:not([level="1"]):not([active]):not([selected])) .ui5-li-root-tree{background:var(--sapList_AlternatingBackground)}:host([_toggle-button-end]:not([level="1"])) .ui5-li-root-tree{background:var(--ui5-v2-10-0-listitem-background-color)}:host([_toggle-button-end][selected]:not([level="1"])) .ui5-li-root-tree{background:var(--sapList_SelectionBackgroundColor)}:host(:not([_selection-mode="None"]):not([_selection-mode="Delete"]):not([active])[selected]) .ui5-li-root-tree:hover{background-color:var(--sapList_Hover_SelectionBackground)}:host([_has-image]){height:unset}::slotted([ui5-avatar][slot="image"]){min-width:var(--_ui5-v2-10-0_avatar_fontsize_XS);min-height:var(--_ui5-v2-10-0_avatar_fontsize_XS)}.ui5-li-tree-toggle-box{min-width:var(--_ui5-v2-10-0-tree-toggle-box-width);min-height:var(--_ui5-v2-10-0-tree-toggle-box-height);display:flex;align-items:center;justify-content:center;flex-shrink:0}.ui5-li-tree-toggle-icon{width:var(--_ui5-v2-10-0-tree-toggle-icon-size);height:var(--_ui5-v2-10-0-tree-toggle-icon-size);color:var(--sapContent_IconColor);cursor:pointer}:host([actionable]) .ui5-li-tree-toggle-icon{color:var(--sapButton_TextColor)}:host([active][actionable]) .ui5-li-tree-toggle-icon{color:var(--sapList_Active_TextColor)}:host{height:unset}.ui5-li-root{height:var(--_ui5-v2-10-0_list_item_base_height)}:host([selected]){background:unset}:host([selected]) .ui5-li-root{background:var(--sapList_SelectionBackgroundColor)}:host([has-border]){border-bottom:unset}:host([has-border]) .ui5-li-root{border-bottom:var(--ui5-v2-10-0-listitem-border-bottom)}:host(:not([focused])[selected][has-border]){border-bottom:unset}:host(:not([focused])[selected][has-border]) .ui5-li-root{border-bottom:var(--ui5-v2-10-0-listitem-selected-border-bottom)}:host([focused][selected]){border-bottom:unset}:host([focused][selected]) .ui5-li-root{border-bottom:var(--ui5-v2-10-0-listitem-focused-selected-border-bottom)}.ui5-tree-li-subtree{margin:0;padding:0;list-style:none}:host([focused][active]) .ui5-li-root-tree{background:var(--sapList_Active_Background)}:host([focused][active]) .ui5-li-root-tree .ui5-li-tree-toggle-icon,:host([focused][active]) .ui5-li-root-tree .ui5-li-title,:host([focused][active]) .ui5-li-root-tree .ui5-li-additional-text{color:var(--sapList_Active_TextColor)}
`;var h=function(a,e,t,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(a,e,t,n);else for(var u=a.length-1;u>=0;u--)(l=a[u])&&(o=(i<3?l(o):i>3?l(e,t,o):l(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o},y;let c=y=class extends Z{constructor(){super(...arguments),this.level=1,this.showToggleButton=!1,this.expanded=!1,this.movable=!1,this.hasChildren=!1,this.additionalTextState="None",this.forcedSetsize=1,this.forcedPosinset=1,this._fixed=!1,this._hasImage=!1}onBeforeRendering(){this.showToggleButton=this.requiresToggleButton,this._hasImage=this.hasImage}get classes(){const e=super.classes;return e.main["ui5-li-root-tree"]=!0,e}get styles(){return{preContent:{"padding-inline-start":`calc(var(${fe("--_ui5-tree-indent-step")}) * ${this.effectiveLevel})`}}}get requiresToggleButton(){return this._fixed?!1:this.hasChildren||this.items.length>0}get effectiveLevel(){return this.level-1}get hasParent(){return this.level>1}get hasImage(){return!!this.image.length}get _toggleIconName(){return this.expanded?"navigation-down-arrow":"navigation-right-arrow"}get _ariaLabel(){return y.i18nBundle.getText(ge)}get _accInfo(){const e={role:"treeitem",ariaExpanded:this.showToggleButton?this.expanded:void 0,ariaLevel:this.level,posinset:this.forcedPosinset,setsize:this.forcedSetsize,ariaSelectedText:this.ariaSelectedText,listItemAriaLabel:this.accessibleName?void 0:this._ariaLabel,ariaOwns:this.expanded?`${this._id}-subtree`:void 0,ariaHaspopup:this.accessibilityAttributes.hasPopup};return{...super._accInfo,...e}}get isTreeItem(){return!0}toggle(){this.expanded=!this.expanded}_toggleClick(e){e.stopPropagation(),this.fireDecoratorEvent("toggle",{item:this})}async _onkeydown(e){await super._onkeydown(e),!this._fixed&&this.showToggleButton&&ce(e)&&(this.expanded?this.fireDecoratorEvent("step-in",{item:this}):this.fireDecoratorEvent("toggle",{item:this})),!this._fixed&&he(e)&&(this.expanded?this.fireDecoratorEvent("toggle",{item:this}):this.hasParent&&this.fireDecoratorEvent("step-out",{item:this}))}get iconAccessibleName(){return this.expanded?y.i18nBundle.getText(ye):y.i18nBundle.getText(we)}};h([d({type:Number})],c.prototype,"level",void 0);h([d()],c.prototype,"icon",void 0);h([d({type:Boolean})],c.prototype,"showToggleButton",void 0);h([d({type:Boolean})],c.prototype,"expanded",void 0);h([d({type:Boolean})],c.prototype,"movable",void 0);h([d({type:Boolean})],c.prototype,"indeterminate",void 0);h([d({type:Boolean})],c.prototype,"hasChildren",void 0);h([d()],c.prototype,"additionalTextState",void 0);h([d()],c.prototype,"accessibleName",void 0);h([d({type:Number,noAttribute:!0})],c.prototype,"forcedSetsize",void 0);h([d({type:Number,noAttribute:!0})],c.prototype,"forcedPosinset",void 0);h([d({type:Boolean})],c.prototype,"_fixed",void 0);h([d({type:Boolean})],c.prototype,"_hasImage",void 0);h([D({type:HTMLElement,invalidateOnChildChange:{properties:!1,slots:["default"]},default:!0})],c.prototype,"items",void 0);h([D()],c.prototype,"image",void 0);h([pe("@ui5/webcomponents")],c,"i18nBundle",void 0);c=y=h([N({languageAware:!0,renderer:C,template:E,styles:[Z.styles,k]}),f("toggle",{bubbles:!0}),f("step-in",{bubbles:!0}),f("step-out",{bubbles:!0})],c);const V=c,Ee={listItemContent:Me};function ke(a){const e={...Ee,...a};return E.call(this,e)}function Me(){return x(K,{children:[m("div",{class:"ui5-li-text-wrapper",children:!!this._showTitle&&x("div",{part:"title",class:"ui5-li-title",children:[" ",this.text]})}),this.additionalText&&m("span",{part:"additional-text",class:"ui5-li-additional-text",children:this.additionalText})]})}var M=function(a,e,t,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(a,e,t,n);else for(var u=a.length-1;u>=0;u--)(l=a[u])&&(o=(i<3?l(o):i>3?l(e,t,o):l(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o};let I=class extends V{get _showTitle(){var e;return(e=this.text)==null?void 0:e.length}};M([d()],I.prototype,"text",void 0);M([d()],I.prototype,"additionalText",void 0);I=M([N({renderer:C,tag:"ui5-tree-item",template:ke,styles:[V.styles,k]})],I);I.define();const ze={listItemContent:Ue};function Re(a){const e={...ze,...a};return E.call(this,e)}function Ue(){return m("div",{class:"ui5-li-tree-text-wrapper",children:m("slot",{name:"content",slot:"content"})})}var z=function(a,e,t,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(a,e,t,n);else for(var u=a.length-1;u>=0;u--)(l=a[u])&&(o=(i<3?l(o):i>3?l(e,t,o):l(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o};let _=class extends V{constructor(){super(...arguments),this.hideSelectionElement=!1}async _onkeydown(e){var i;if(me(e)&&((i=this.content)!=null&&i.some(o=>o.contains(e.target)))){e.stopPropagation();return}const t=W(e)||O(e),n=this.matches(":focus");!t&&!n&&!j(e)||await super._onkeydown(e)}_onkeyup(e){const t=W(e)||O(e),n=this.matches(":focus");!t&&!n&&!j(e)||super._onkeyup(e)}get placeSelectionElementBefore(){return!this.hideSelectionElement&&super.placeSelectionElementBefore}get placeSelectionElementAfter(){return!this.hideSelectionElement&&super.placeSelectionElementAfter}};z([d({type:Boolean})],_.prototype,"hideSelectionElement",void 0);z([D()],_.prototype,"content",void 0);_=z([N({renderer:C,tag:"ui5-tree-item-custom",template:Re,styles:[V.styles,k]})],_);_.define();var Be=function(a,e,t,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(a,e,t,n);else for(var u=a.length-1;u>=0;u--)(l=a[u])&&(o=(i<3?l(o):i>3?l(e,t,o):l(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o};let S=class extends oe{getItems(e=!1){const t=this.getSlottedNodes("items"),n=[];return t.length===1&&t[0].hasAttribute("ui5-drop-indicator")||te(t,n,e),n}getItemsForProcessing(){return this.getItems(!0)}};S=Be([N("ui5-tree-list")],S);const te=(a,e,t=!1)=>{a.forEach(n=>{e.push(n),(n.expanded||t)&&n.items&&te(n.items,e,t)})};S.define();const We=S;function Oe(){return x(We,{class:"ui5-tree-root",selectionMode:this.selectionMode,headerText:this.headerText,footerText:this.footerText,noDataText:this.noDataText,accessibleRole:this._role,accessibleName:this.accessibleName,accessibleNameRef:this.accessibleNameRef,accessibleDescription:this.accessibleDescription,accessibleDescriptionRef:this.accessibleDescriptionRef,onDragEnter:this._ondragenter,onDragOver:this._ondragover,onDrop:this._ondrop,onDragLeave:this._ondragleave,onItemClick:this._onListItemClick,onItemDelete:this._onListItemDelete,onItemFocused:this._onListItemFocus,onSelectionChange:this._onListSelectionChange,onMouseOver:this._onListItemMouseOver,onMouseOut:this._onListItemMouseOut,"onui5-toggle":this._onListItemToggle,"onui5-step-in":this._onListItemStepIn,"onui5-step-out":this._onListItemStepOut,children:[this._hasHeader&&m("slot",{name:"header",slot:"header"}),m("slot",{}),m(Ie,{orientation:"Horizontal",ownerReference:this})]})}q("@ui5/webcomponents-theming","sap_horizon",async()=>Q);q("@ui5/webcomponents","sap_horizon",async()=>ee);const je=`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:block;width:100%}.ui5-tree-root{height:100%;width:100%}
`;var v=function(a,e,t,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(a,e,t,n);else for(var u=a.length-1;u>=0;u--)(l=a[u])&&(o=(i<3?l(o):i>3?l(e,t,o):l(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o};let p=class extends le{constructor(){super(...arguments),this.selectionMode="None"}onEnterDOM(){L.subscribe(this)}onExitDOM(){L.unsubscribe(this)}onBeforeRendering(){this._prepareTreeItems()}onAfterRendering(){this.shadowRoot.querySelector("[ui5-tree-list]").onBeforeRendering()}get dropIndicatorDOM(){return this.shadowRoot.querySelector("[ui5-drop-indicator]")}get list(){return this.getDomRef()}get _role(){return ie.Tree}get _hasHeader(){return!!this.header.length}_ondragenter(e){e.preventDefault()}_ondragleave(e){e.relatedTarget instanceof Node&&this.shadowRoot.contains(e.relatedTarget)||(this.dropIndicatorDOM.targetReference=null)}_ondragover(e){const t=L.getDraggedElement(),n=[];if(!(e.target instanceof HTMLElement)||!t)return;this.walk(u=>{n.push(u.shadowRoot.querySelector("li"))});const i=_e(n,e.clientY,Ne.Vertical);if(!i){this.dropIndicatorDOM.targetReference=null;return}if(i.element=i.element.getRootNode().host,t.contains(i.element))return;i.element===t&&(i.placements=i.placements.filter(u=>u!==De.On));const{targetReference:o,placement:l}=xe(e,this,i,i.element);this.dropIndicatorDOM.targetReference=o,this.dropIndicatorDOM.placement=l}_ondrop(e){var t,n;!((t=this.dropIndicatorDOM)!=null&&t.targetReference)||!((n=this.dropIndicatorDOM)!=null&&n.placement)||(Se(e,this,this.dropIndicatorDOM.targetReference,this.dropIndicatorDOM.placement),this.dropIndicatorDOM.targetReference=null)}_onListItemStepIn(e){const t=e.detail.item;if(t.items.length>0){const n=t.items[0],i=this._getListItemForTreeItem(n);i&&this.list.focusItem(i)}}_onListItemStepOut(e){const t=e.detail.item;if(t.parentElement!==this){const n=t.parentElement,i=this._getListItemForTreeItem(n);i&&this.list.focusItem(i)}}_onListItemToggle(e){const t=e.detail.item;!this.fireDecoratorEvent("item-toggle",{item:t})||t.toggle()}_onListItemClick(e){const t=e.detail.item;this.fireDecoratorEvent("item-click",{item:t})||e.preventDefault()}_onListItemDelete(e){const t=e.detail.item;this.fireDecoratorEvent("item-delete",{item:t})}_onListItemFocus(e){const t=e.detail.item;this.fireDecoratorEvent("item-focus",{item:t})}_onListItemMouseOver(e){const t=e.target;this._isInstanceOfTreeItemBase(t)&&this.fireDecoratorEvent("item-mouseover",{item:t})}_onListItemMouseOut(e){const t=e.target;this._isInstanceOfTreeItemBase(t)&&this.fireDecoratorEvent("item-mouseout",{item:t})}_onListSelectionChange(e){if(!e.detail||!e.detail.previouslySelectedItems||!e.detail.selectedItems)return;const t=e.detail.previouslySelectedItems,n=e.detail.selectedItems,i=e.detail.targetItem;t.forEach(o=>{o.selected=!1}),n.forEach(o=>{o.selected=!0}),this.fireDecoratorEvent("selection-change",{previouslySelectedItems:t,selectedItems:n,targetItem:i})}_prepareTreeItems(){this.walk((e,t,n)=>{const i=e.parentNode,o=i&&i.children.length||this.items.length;e.setAttribute("level",t.toString()),e.forcedSetsize=o,e.forcedPosinset=n+1})}_getListItemForTreeItem(e){return this.getItems().find(t=>t===e)}getItems(){return this.list.getItems()}focusItemByIndex(e){const t=this.getItems()[e];t&&this.list.focusItem(t)}walk(e){ne(this,1,e)}_isInstanceOfTreeItemBase(e){return"isTreeItem"in e}};v([d()],p.prototype,"selectionMode",void 0);v([d()],p.prototype,"noDataText",void 0);v([d()],p.prototype,"headerText",void 0);v([d()],p.prototype,"footerText",void 0);v([d()],p.prototype,"accessibleName",void 0);v([d()],p.prototype,"accessibleNameRef",void 0);v([d()],p.prototype,"accessibleDescription",void 0);v([d()],p.prototype,"accessibleDescriptionRef",void 0);v([D({type:HTMLElement,invalidateOnChildChange:!0,default:!0})],p.prototype,"items",void 0);v([D()],p.prototype,"header",void 0);p=v([N({tag:"ui5-tree",renderer:C,styles:je,template:Oe}),f("item-toggle",{bubbles:!0,cancelable:!0}),f("item-mouseover",{bubbles:!0}),f("item-mouseout",{bubbles:!0}),f("item-click",{bubbles:!0,cancelable:!0}),f("item-delete",{bubbles:!0}),f("item-focus",{bubbles:!0}),f("selection-change",{bubbles:!0}),f("move",{bubbles:!0}),f("move-over",{bubbles:!0,cancelable:!0})],p);const ne=(a,e,t)=>{a.items.forEach((n,i)=>{t(n,e,i),n.items.length>0&&ne(n,e+1,t)})};p.define();const b=P("ui5-tree",["accessibleDescription","accessibleDescriptionRef","accessibleName","accessibleNameRef","footerText","headerText","noDataText","selectionMode"],[],["header"],["item-click","item-delete","item-mouseout","item-mouseover","item-toggle","selection-change"]);b.displayName="Tree";try{b.displayName="Tree",b.__docgenInfo={description:`The \`Tree\` component provides a tree structure for displaying data in a hierarchy.

### Usage

#### When to use:

- To display hierarchically structured items.
- To select one or more items out of a set of hierarchically structured items.

#### When not to use:

- To display items not hierarchically structured. In this case, use the List component.
- To select one item from a very small number of non-hierarchical items. Select or ComboBox might be more appropriate.
- The hierarchy turns out to have only two levels. In this case, use List with group items.

### Keyboard Handling

The \`Tree\` provides advanced keyboard handling.
The user can use the following keyboard shortcuts in order to navigate trough the tree:

- [Up] or [Down] - Navigates up and down the tree items that are currently visible.
- [Right] - Drills down the tree by expanding the tree nodes.
- [Left] - Goes up the tree and collapses the tree nodes.

The user can use the following keyboard shortcuts to perform selection,
when the \`selectionMode\` property is in use:

- [Space] - Selects the currently focused item upon keyup.
- [Enter]  - Selects the currently focused item upon keydown.



\`import "@ui5/webcomponents/dist/TreeItem.js";\`

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Tree",props:{children:{defaultValue:null,description:"Defines the items of the component. Tree items may have other tree items as children.\n\n**Note:** Use `TreeItem` for the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the component header.

**Note:** When the \`header\` slot is set, the
\`headerText\` property is ignored.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},onItemClick:{defaultValue:null,description:`Fired when a tree item is activated.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<TreeDomRef, TreeItemEventDetail>) => void"}},onItemDelete:{defaultValue:null,description:`Fired when the Delete button of any tree item is pressed.

**Note:** A Delete button is displayed on each item,
when the component \`selectionMode\` property is set to \`Delete\`.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onItemDelete",required:!1,type:{name:"(event: Ui5CustomEvent<TreeDomRef, TreeItemEventDetail>) => void"}},onItemMouseout:{defaultValue:null,description:`Fired when the mouse cursor leaves the tree item borders.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onItemMouseout",required:!1,type:{name:"(event: Ui5CustomEvent<TreeDomRef, TreeItemEventDetail>) => void"}},onItemMouseover:{defaultValue:null,description:`Fired when the mouse cursor enters the tree item borders.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onItemMouseover",required:!1,type:{name:"(event: Ui5CustomEvent<TreeDomRef, TreeItemEventDetail>) => void"}},onItemToggle:{defaultValue:null,description:`Fired when a tree item is expanded or collapsed.

**Note:** You can call \`preventDefault()\` on the event object to suppress the event, if needed.
This may be handy for example if you want to dynamically load tree items upon the user expanding a node.
Even if you prevented the event's default behavior, you can always manually call \`toggle()\` on a tree item.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onItemToggle",required:!1,type:{name:"(event: Ui5CustomEvent<TreeDomRef, TreeItemEventDetail>) => void"}},onSelectionChange:{defaultValue:null,description:"Fired when selection is changed by user interaction\nin `Single`, `SingleStart`, `SingleEnd` and `Multiple` modes.\n\n| cancelable | bubbles |\n| :--------: | :-----: |\n| ❌|✅|",name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<TreeDomRef, TreeSelectionChangeEventDetail>) => void"}},accessibleDescription:{defaultValue:{value:"undefined"},description:`Defines the accessible description of the component.

**Note:** Available since [v2.5.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.`,name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleDescriptionRef:{defaultValue:{value:"undefined"},description:`Defines the IDs of the elements that describe the component.

**Note:** Available since [v2.5.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.`,name:"accessibleDescriptionRef",required:!1,type:{name:"string"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the accessible name of the component.

**Note:** Available since [v1.8.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.8.0) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Defines the IDs of the elements that label the component.

**Note:** Available since [v1.8.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.8.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},footerText:{defaultValue:{value:"undefined"},description:"Defines the component footer text.",name:"footerText",required:!1,type:{name:"string"}},headerText:{defaultValue:{value:"undefined"},description:"Defines the component header text.\n\n**Note:** If the `header` slot is set, this property is ignored.",name:"headerText",required:!1,type:{name:"string"}},noDataText:{defaultValue:{value:"undefined"},description:"Defines the text that is displayed when the component contains no items.",name:"noDataText",required:!1,type:{name:"string"}},selectionMode:{defaultValue:{value:'"None"'},description:"Defines the selection mode of the component. Since the tree uses a `List` to display its structure,\nthe tree modes are exactly the same as the list modes, and are all applicable.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Delete"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"None"'},{value:'"Single"'},{value:'"SingleStart"'},{value:'"SingleEnd"'},{value:'"SingleAuto"'},{value:'"Multiple"'},{value:'"Delete"'},{value:'"SingleStart"'},{value:'"SingleEnd"'},{value:'"SingleAuto"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{b.displayName="Tree",b.__docgenInfo={description:`The \`Tree\` component provides a tree structure for displaying data in a hierarchy.

### Usage

#### When to use:

- To display hierarchically structured items.
- To select one or more items out of a set of hierarchically structured items.

#### When not to use:

- To display items not hierarchically structured. In this case, use the List component.
- To select one item from a very small number of non-hierarchical items. Select or ComboBox might be more appropriate.
- The hierarchy turns out to have only two levels. In this case, use List with group items.

### Keyboard Handling

The \`Tree\` provides advanced keyboard handling.
The user can use the following keyboard shortcuts in order to navigate trough the tree:

- [Up] or [Down] - Navigates up and down the tree items that are currently visible.
- [Right] - Drills down the tree by expanding the tree nodes.
- [Left] - Goes up the tree and collapses the tree nodes.

The user can use the following keyboard shortcuts to perform selection,
when the \`selectionMode\` property is in use:

- [Space] - Selects the currently focused item upon keyup.
- [Enter]  - Selects the currently focused item upon keydown.



\`import "@ui5/webcomponents/dist/TreeItem.js";\`

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Tree",props:{children:{defaultValue:null,description:"Defines the items of the component. Tree items may have other tree items as children.\n\n**Note:** Use `TreeItem` for the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the component header.

**Note:** When the \`header\` slot is set, the
\`headerText\` property is ignored.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},onItemClick:{defaultValue:null,description:`Fired when a tree item is activated.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<TreeDomRef, TreeItemEventDetail>) => void"}},onItemDelete:{defaultValue:null,description:`Fired when the Delete button of any tree item is pressed.

**Note:** A Delete button is displayed on each item,
when the component \`selectionMode\` property is set to \`Delete\`.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onItemDelete",required:!1,type:{name:"(event: Ui5CustomEvent<TreeDomRef, TreeItemEventDetail>) => void"}},onItemMouseout:{defaultValue:null,description:`Fired when the mouse cursor leaves the tree item borders.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onItemMouseout",required:!1,type:{name:"(event: Ui5CustomEvent<TreeDomRef, TreeItemEventDetail>) => void"}},onItemMouseover:{defaultValue:null,description:`Fired when the mouse cursor enters the tree item borders.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onItemMouseover",required:!1,type:{name:"(event: Ui5CustomEvent<TreeDomRef, TreeItemEventDetail>) => void"}},onItemToggle:{defaultValue:null,description:`Fired when a tree item is expanded or collapsed.

**Note:** You can call \`preventDefault()\` on the event object to suppress the event, if needed.
This may be handy for example if you want to dynamically load tree items upon the user expanding a node.
Even if you prevented the event's default behavior, you can always manually call \`toggle()\` on a tree item.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onItemToggle",required:!1,type:{name:"(event: Ui5CustomEvent<TreeDomRef, TreeItemEventDetail>) => void"}},onSelectionChange:{defaultValue:null,description:"Fired when selection is changed by user interaction\nin `Single`, `SingleStart`, `SingleEnd` and `Multiple` modes.\n\n| cancelable | bubbles |\n| :--------: | :-----: |\n| ❌|✅|",name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<TreeDomRef, TreeSelectionChangeEventDetail>) => void"}},accessibleDescription:{defaultValue:{value:"undefined"},description:`Defines the accessible description of the component.

**Note:** Available since [v2.5.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.`,name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleDescriptionRef:{defaultValue:{value:"undefined"},description:`Defines the IDs of the elements that describe the component.

**Note:** Available since [v2.5.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.`,name:"accessibleDescriptionRef",required:!1,type:{name:"string"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the accessible name of the component.

**Note:** Available since [v1.8.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.8.0) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Defines the IDs of the elements that label the component.

**Note:** Available since [v1.8.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.8.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},footerText:{defaultValue:{value:"undefined"},description:"Defines the component footer text.",name:"footerText",required:!1,type:{name:"string"}},headerText:{defaultValue:{value:"undefined"},description:"Defines the component header text.\n\n**Note:** If the `header` slot is set, this property is ignored.",name:"headerText",required:!1,type:{name:"string"}},noDataText:{defaultValue:{value:"undefined"},description:"Defines the text that is displayed when the component contains no items.",name:"noDataText",required:!1,type:{name:"string"}},selectionMode:{defaultValue:{value:'"None"'},description:"Defines the selection mode of the component. Since the tree uses a `List` to display its structure,\nthe tree modes are exactly the same as the list modes, and are all applicable.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Delete"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"None"'},{value:'"Single"'},{value:'"SingleStart"'},{value:'"SingleEnd"'},{value:'"SingleAuto"'},{value:'"Multiple"'},{value:'"Delete"'},{value:'"SingleStart"'},{value:'"SingleEnd"'},{value:'"SingleAuto"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const r=P("ui5-tree-item",["accessibilityAttributes","accessibleName","additionalText","additionalTextState","highlight","icon","text","tooltip","type"],["expanded","hasChildren","indeterminate","movable","navigated","selected"],["deleteButton","image"],["detail-click"]);r.displayName="TreeItem";try{r.displayName="TreeItem",r.__docgenInfo={description:`The \`TreeItem\` represents a node in a tree structure, shown as a \`List\`.

This is the item to use inside a \`Tree\`.
You can represent an arbitrary tree structure by recursively nesting tree items.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"TreeItem",props:{children:{defaultValue:null,description:"Defines the items of the component.\n\n**Note:** Use `TreeItem` or `TreeItemCustom`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},deleteButton:{defaultValue:null,description:`Defines the delete button, displayed in "Delete" mode.
**Note:** While the slot allows custom buttons, to match
design guidelines, please use the \`Button\` component.
**Note:** When the slot is not present, a built-in delete button will be displayed.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="deleteButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.`,name:"deleteButton",required:!1,type:{name:"UI5WCSlotsNode"}},image:{defaultValue:null,description:`**Note:** While the slot allows option for setting custom avatar, to match the
design guidelines, please use the \`Avatar\` with size XS.

**Note:** If bigger \`Avatar\` needs to be used, then the size of the
\`TreeItem\` should be customized in order to fit.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="image"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.10.0) of **@ui5/webcomponents**.`,name:"image",required:!1,type:{name:"UI5WCSlotsNode"}},onDetailClick:{defaultValue:null,description:`Fired when the user clicks on the detail button when type is \`Detail\`.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onDetailClick",required:!1,type:{name:"(event: Ui5CustomEvent<TreeItemDomRef, never>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:`Defines the additional accessibility attributes that will be applied to the component.
The following fields are supported:

- **ariaSetsize**: Defines the number of items in the current set  when not all items in the set are present in the DOM.
**Note:** The value is an integer reflecting the number of items in the complete set. If the size of the entire set is unknown, set \`-1\`.

	- **ariaPosinset**: Defines an element's number or position in the current set when not all items are present in the DOM.
	**Note:** The value is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.

**Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"accessibilityAttributes",required:!1,type:{name:"ListItemAccessibilityAttributes"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the accessible name of the component.

**Note:** Available since [v1.8.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.8.0) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},additionalText:{defaultValue:{value:"undefined"},description:"Defines the `additionalText`, displayed in the end of the tree item.",name:"additionalText",required:!1,type:{name:"string"}},additionalTextState:{defaultValue:{value:'"None"'},description:'Defines the state of the `additionalText`.\n\nAvailable options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.',name:"additionalTextState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'}]}},expanded:{defaultValue:{value:"false"},description:"Defines whether the tree list item will show a collapse or expand icon inside its toggle button.",name:"expanded",required:!1,type:{name:"boolean"}},hasChildren:{defaultValue:{value:"false"},description:`Defines whether the tree node has children, even if currently no other tree nodes are slotted inside.

**Note:** This property is useful for showing big tree structures where not all nodes are initially loaded due to performance reasons.
Set this to \`true\` for nodes you intend to load lazily, when the user clicks the expand button.
It is not necessary to set this property otherwise. If a tree item has children, the expand button will be displayed anyway.`,name:"hasChildren",required:!1,type:{name:"boolean"}},highlight:{defaultValue:{value:'"None"'},description:'Defines the highlight state of the list items.\nAvailable options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.\n\n**Note:** Available since [v1.24](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.',name:"highlight",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'}]}},icon:{defaultValue:{value:"undefined"},description:"If set, an icon will be displayed before the text of the tree list item.",name:"icon",required:!1,type:{name:"string"}},indeterminate:{defaultValue:{value:"false"},description:"Defines whether the selection of a tree node is displayed as partially selected.\n\n**Note:** The indeterminate state can be set only programmatically and can’t be achieved by user\ninteraction, meaning that the resulting visual state depends on the values of the `indeterminate`\nand `selected` properties:\n\n-  If a tree node has both `selected` and `indeterminate` set to `true`, it is displayed as partially selected.\n-  If a tree node has `selected` set to `true` and `indeterminate` set to `false`, it is displayed as selected.\n-  If a tree node has `selected` set to `false`, it is displayed as not selected regardless of the value of the `indeterminate` property.\n\n**Note:** This property takes effect only when the `Tree` is in `Multiple` mode.\n\n**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.",name:"indeterminate",required:!1,type:{name:"boolean"}},movable:{defaultValue:{value:"false"},description:`Defines whether the item is movable.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"movable",required:!1,type:{name:"boolean"}},navigated:{defaultValue:{value:"false"},description:`The navigated state of the list item.
If set to \`true\`, a navigation indicator is displayed at the end of the list item.

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"navigated",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the component.",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:{value:"undefined"},description:"Defines the text of the tree item.",name:"text",required:!1,type:{name:"string"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the text of the tooltip that would be displayed for the list item.

**Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},type:{defaultValue:{value:'"Active"'},description:"Defines the visual indication and behavior of the list items.\nAvailable options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.\n\n**Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover,\nwhile with type `Inactive` and `Detail` - will not.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Inactive"'},{value:'"Active"'},{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'},{value:'"Detail"'},{value:'"Navigation"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{r.displayName="TreeItem",r.__docgenInfo={description:`The \`TreeItem\` represents a node in a tree structure, shown as a \`List\`.

This is the item to use inside a \`Tree\`.
You can represent an arbitrary tree structure by recursively nesting tree items.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"TreeItem",props:{children:{defaultValue:null,description:"Defines the items of the component.\n\n**Note:** Use `TreeItem` or `TreeItemCustom`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},deleteButton:{defaultValue:null,description:`Defines the delete button, displayed in "Delete" mode.
**Note:** While the slot allows custom buttons, to match
design guidelines, please use the \`Button\` component.
**Note:** When the slot is not present, a built-in delete button will be displayed.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="deleteButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.`,name:"deleteButton",required:!1,type:{name:"UI5WCSlotsNode"}},image:{defaultValue:null,description:`**Note:** While the slot allows option for setting custom avatar, to match the
design guidelines, please use the \`Avatar\` with size XS.

**Note:** If bigger \`Avatar\` needs to be used, then the size of the
\`TreeItem\` should be customized in order to fit.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="image"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.10.0) of **@ui5/webcomponents**.`,name:"image",required:!1,type:{name:"UI5WCSlotsNode"}},onDetailClick:{defaultValue:null,description:`Fired when the user clicks on the detail button when type is \`Detail\`.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onDetailClick",required:!1,type:{name:"(event: Ui5CustomEvent<TreeItemDomRef, never>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:`Defines the additional accessibility attributes that will be applied to the component.
The following fields are supported:

- **ariaSetsize**: Defines the number of items in the current set  when not all items in the set are present in the DOM.
**Note:** The value is an integer reflecting the number of items in the complete set. If the size of the entire set is unknown, set \`-1\`.

	- **ariaPosinset**: Defines an element's number or position in the current set when not all items are present in the DOM.
	**Note:** The value is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.

**Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"accessibilityAttributes",required:!1,type:{name:"ListItemAccessibilityAttributes"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the accessible name of the component.

**Note:** Available since [v1.8.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.8.0) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},additionalText:{defaultValue:{value:"undefined"},description:"Defines the `additionalText`, displayed in the end of the tree item.",name:"additionalText",required:!1,type:{name:"string"}},additionalTextState:{defaultValue:{value:'"None"'},description:'Defines the state of the `additionalText`.\n\nAvailable options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.',name:"additionalTextState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'}]}},expanded:{defaultValue:{value:"false"},description:"Defines whether the tree list item will show a collapse or expand icon inside its toggle button.",name:"expanded",required:!1,type:{name:"boolean"}},hasChildren:{defaultValue:{value:"false"},description:`Defines whether the tree node has children, even if currently no other tree nodes are slotted inside.

**Note:** This property is useful for showing big tree structures where not all nodes are initially loaded due to performance reasons.
Set this to \`true\` for nodes you intend to load lazily, when the user clicks the expand button.
It is not necessary to set this property otherwise. If a tree item has children, the expand button will be displayed anyway.`,name:"hasChildren",required:!1,type:{name:"boolean"}},highlight:{defaultValue:{value:'"None"'},description:'Defines the highlight state of the list items.\nAvailable options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.\n\n**Note:** Available since [v1.24](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.',name:"highlight",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'}]}},icon:{defaultValue:{value:"undefined"},description:"If set, an icon will be displayed before the text of the tree list item.",name:"icon",required:!1,type:{name:"string"}},indeterminate:{defaultValue:{value:"false"},description:"Defines whether the selection of a tree node is displayed as partially selected.\n\n**Note:** The indeterminate state can be set only programmatically and can’t be achieved by user\ninteraction, meaning that the resulting visual state depends on the values of the `indeterminate`\nand `selected` properties:\n\n-  If a tree node has both `selected` and `indeterminate` set to `true`, it is displayed as partially selected.\n-  If a tree node has `selected` set to `true` and `indeterminate` set to `false`, it is displayed as selected.\n-  If a tree node has `selected` set to `false`, it is displayed as not selected regardless of the value of the `indeterminate` property.\n\n**Note:** This property takes effect only when the `Tree` is in `Multiple` mode.\n\n**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.",name:"indeterminate",required:!1,type:{name:"boolean"}},movable:{defaultValue:{value:"false"},description:`Defines whether the item is movable.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"movable",required:!1,type:{name:"boolean"}},navigated:{defaultValue:{value:"false"},description:`The navigated state of the list item.
If set to \`true\`, a navigation indicator is displayed at the end of the list item.

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"navigated",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the component.",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:{value:"undefined"},description:"Defines the text of the tree item.",name:"text",required:!1,type:{name:"string"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the text of the tooltip that would be displayed for the list item.

**Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},type:{defaultValue:{value:'"Active"'},description:"Defines the visual indication and behavior of the list items.\nAvailable options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.\n\n**Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover,\nwhile with type `Inactive` and `Detail` - will not.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Inactive"'},{value:'"Active"'},{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'},{value:'"Detail"'},{value:'"Navigation"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const g=P("ui5-tree-item-custom",["accessibilityAttributes","accessibleName","additionalTextState","highlight","icon","tooltip","type"],["expanded","hasChildren","hideSelectionElement","indeterminate","movable","navigated","selected"],["content","deleteButton","image"],["detail-click"]);g.displayName="TreeItemCustom";try{g.displayName="TreeItemCustom",g.__docgenInfo={description:`The \`TreeItemCustom\` represents a node in a tree structure, shown as a \`List\`.

This is the item to use inside a \`Tree\`.
You can represent an arbitrary tree structure by recursively nesting tree items.

You can use this item to put any custom content inside the tree item.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"TreeItemCustom",props:{children:{defaultValue:null,description:"Defines the items of the component.\n\n**Note:** Use `TreeItem` or `TreeItemCustom`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},content:{defaultValue:null,description:`Defines the content of the \`TreeItem\`.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="content"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"content",required:!1,type:{name:"UI5WCSlotsNode"}},deleteButton:{defaultValue:null,description:`Defines the delete button, displayed in "Delete" mode.
**Note:** While the slot allows custom buttons, to match
design guidelines, please use the \`Button\` component.
**Note:** When the slot is not present, a built-in delete button will be displayed.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="deleteButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.`,name:"deleteButton",required:!1,type:{name:"UI5WCSlotsNode"}},image:{defaultValue:null,description:`**Note:** While the slot allows option for setting custom avatar, to match the
design guidelines, please use the \`Avatar\` with size XS.

**Note:** If bigger \`Avatar\` needs to be used, then the size of the
\`TreeItem\` should be customized in order to fit.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="image"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.10.0) of **@ui5/webcomponents**.`,name:"image",required:!1,type:{name:"UI5WCSlotsNode"}},onDetailClick:{defaultValue:null,description:`Fired when the user clicks on the detail button when type is \`Detail\`.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onDetailClick",required:!1,type:{name:"(event: Ui5CustomEvent<TreeItemCustomDomRef, never>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:`Defines the additional accessibility attributes that will be applied to the component.
The following fields are supported:

- **ariaSetsize**: Defines the number of items in the current set  when not all items in the set are present in the DOM.
**Note:** The value is an integer reflecting the number of items in the complete set. If the size of the entire set is unknown, set \`-1\`.

	- **ariaPosinset**: Defines an element's number or position in the current set when not all items are present in the DOM.
	**Note:** The value is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.

**Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"accessibilityAttributes",required:!1,type:{name:"ListItemAccessibilityAttributes"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the accessible name of the component.

**Note:** Available since [v1.8.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.8.0) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},additionalTextState:{defaultValue:{value:'"None"'},description:'Defines the state of the `additionalText`.\n\nAvailable options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.',name:"additionalTextState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'}]}},expanded:{defaultValue:{value:"false"},description:"Defines whether the tree list item will show a collapse or expand icon inside its toggle button.",name:"expanded",required:!1,type:{name:"boolean"}},hasChildren:{defaultValue:{value:"false"},description:`Defines whether the tree node has children, even if currently no other tree nodes are slotted inside.

**Note:** This property is useful for showing big tree structures where not all nodes are initially loaded due to performance reasons.
Set this to \`true\` for nodes you intend to load lazily, when the user clicks the expand button.
It is not necessary to set this property otherwise. If a tree item has children, the expand button will be displayed anyway.`,name:"hasChildren",required:!1,type:{name:"boolean"}},hideSelectionElement:{defaultValue:{value:"false"},description:"Defines whether the tree list item should display the selection element.",name:"hideSelectionElement",required:!1,type:{name:"boolean"}},highlight:{defaultValue:{value:'"None"'},description:'Defines the highlight state of the list items.\nAvailable options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.\n\n**Note:** Available since [v1.24](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.',name:"highlight",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'}]}},icon:{defaultValue:{value:"undefined"},description:"If set, an icon will be displayed before the text of the tree list item.",name:"icon",required:!1,type:{name:"string"}},indeterminate:{defaultValue:{value:"false"},description:"Defines whether the selection of a tree node is displayed as partially selected.\n\n**Note:** The indeterminate state can be set only programmatically and can’t be achieved by user\ninteraction, meaning that the resulting visual state depends on the values of the `indeterminate`\nand `selected` properties:\n\n-  If a tree node has both `selected` and `indeterminate` set to `true`, it is displayed as partially selected.\n-  If a tree node has `selected` set to `true` and `indeterminate` set to `false`, it is displayed as selected.\n-  If a tree node has `selected` set to `false`, it is displayed as not selected regardless of the value of the `indeterminate` property.\n\n**Note:** This property takes effect only when the `Tree` is in `Multiple` mode.\n\n**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.",name:"indeterminate",required:!1,type:{name:"boolean"}},movable:{defaultValue:{value:"false"},description:`Defines whether the item is movable.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"movable",required:!1,type:{name:"boolean"}},navigated:{defaultValue:{value:"false"},description:`The navigated state of the list item.
If set to \`true\`, a navigation indicator is displayed at the end of the list item.

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"navigated",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the component.",name:"selected",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the text of the tooltip that would be displayed for the list item.

**Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},type:{defaultValue:{value:'"Active"'},description:"Defines the visual indication and behavior of the list items.\nAvailable options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.\n\n**Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover,\nwhile with type `Inactive` and `Detail` - will not.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Inactive"'},{value:'"Active"'},{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'},{value:'"Detail"'},{value:'"Navigation"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{g.displayName="TreeItemCustom",g.__docgenInfo={description:`The \`TreeItemCustom\` represents a node in a tree structure, shown as a \`List\`.

This is the item to use inside a \`Tree\`.
You can represent an arbitrary tree structure by recursively nesting tree items.

You can use this item to put any custom content inside the tree item.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"TreeItemCustom",props:{children:{defaultValue:null,description:"Defines the items of the component.\n\n**Note:** Use `TreeItem` or `TreeItemCustom`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},content:{defaultValue:null,description:`Defines the content of the \`TreeItem\`.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="content"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"content",required:!1,type:{name:"UI5WCSlotsNode"}},deleteButton:{defaultValue:null,description:`Defines the delete button, displayed in "Delete" mode.
**Note:** While the slot allows custom buttons, to match
design guidelines, please use the \`Button\` component.
**Note:** When the slot is not present, a built-in delete button will be displayed.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="deleteButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.`,name:"deleteButton",required:!1,type:{name:"UI5WCSlotsNode"}},image:{defaultValue:null,description:`**Note:** While the slot allows option for setting custom avatar, to match the
design guidelines, please use the \`Avatar\` with size XS.

**Note:** If bigger \`Avatar\` needs to be used, then the size of the
\`TreeItem\` should be customized in order to fit.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="image"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.10.0) of **@ui5/webcomponents**.`,name:"image",required:!1,type:{name:"UI5WCSlotsNode"}},onDetailClick:{defaultValue:null,description:`Fired when the user clicks on the detail button when type is \`Detail\`.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onDetailClick",required:!1,type:{name:"(event: Ui5CustomEvent<TreeItemCustomDomRef, never>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:`Defines the additional accessibility attributes that will be applied to the component.
The following fields are supported:

- **ariaSetsize**: Defines the number of items in the current set  when not all items in the set are present in the DOM.
**Note:** The value is an integer reflecting the number of items in the complete set. If the size of the entire set is unknown, set \`-1\`.

	- **ariaPosinset**: Defines an element's number or position in the current set when not all items are present in the DOM.
	**Note:** The value is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.

**Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"accessibilityAttributes",required:!1,type:{name:"ListItemAccessibilityAttributes"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the accessible name of the component.

**Note:** Available since [v1.8.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.8.0) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},additionalTextState:{defaultValue:{value:'"None"'},description:'Defines the state of the `additionalText`.\n\nAvailable options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.',name:"additionalTextState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'}]}},expanded:{defaultValue:{value:"false"},description:"Defines whether the tree list item will show a collapse or expand icon inside its toggle button.",name:"expanded",required:!1,type:{name:"boolean"}},hasChildren:{defaultValue:{value:"false"},description:`Defines whether the tree node has children, even if currently no other tree nodes are slotted inside.

**Note:** This property is useful for showing big tree structures where not all nodes are initially loaded due to performance reasons.
Set this to \`true\` for nodes you intend to load lazily, when the user clicks the expand button.
It is not necessary to set this property otherwise. If a tree item has children, the expand button will be displayed anyway.`,name:"hasChildren",required:!1,type:{name:"boolean"}},hideSelectionElement:{defaultValue:{value:"false"},description:"Defines whether the tree list item should display the selection element.",name:"hideSelectionElement",required:!1,type:{name:"boolean"}},highlight:{defaultValue:{value:'"None"'},description:'Defines the highlight state of the list items.\nAvailable options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.\n\n**Note:** Available since [v1.24](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.',name:"highlight",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'}]}},icon:{defaultValue:{value:"undefined"},description:"If set, an icon will be displayed before the text of the tree list item.",name:"icon",required:!1,type:{name:"string"}},indeterminate:{defaultValue:{value:"false"},description:"Defines whether the selection of a tree node is displayed as partially selected.\n\n**Note:** The indeterminate state can be set only programmatically and can’t be achieved by user\ninteraction, meaning that the resulting visual state depends on the values of the `indeterminate`\nand `selected` properties:\n\n-  If a tree node has both `selected` and `indeterminate` set to `true`, it is displayed as partially selected.\n-  If a tree node has `selected` set to `true` and `indeterminate` set to `false`, it is displayed as selected.\n-  If a tree node has `selected` set to `false`, it is displayed as not selected regardless of the value of the `indeterminate` property.\n\n**Note:** This property takes effect only when the `Tree` is in `Multiple` mode.\n\n**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.",name:"indeterminate",required:!1,type:{name:"boolean"}},movable:{defaultValue:{value:"false"},description:`Defines whether the item is movable.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"movable",required:!1,type:{name:"boolean"}},navigated:{defaultValue:{value:"false"},description:`The navigated state of the list item.
If set to \`true\`, a navigation indicator is displayed at the end of the list item.

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"navigated",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the component.",name:"selected",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the text of the tooltip that would be displayed for the list item.

**Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},type:{defaultValue:{value:'"Active"'},description:"Defines the visual indication and behavior of the list items.\nAvailable options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.\n\n**Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover,\nwhile with type `Inactive` and `Detail` - will not.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Inactive"'},{value:'"Active"'},{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'},{value:'"Detail"'},{value:'"Navigation"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const He="download-from-cloud",Fe="M493.037 211.587q17.965 22.955 17.965 55.89 0 17.965-6.986 30.94-2.995 7.985-7.985 14.97l-9.98 13.974q-5.989 6.986-10.48 9.98t-12.475 5.988q-18.963 7.985-33.934 7.985h-13.973v-31.938h13.973q6.986 0 21.957-4.99 4.99-1.996 6.487-2.994t4.491-3.992q3.993-4.99 6.987-9.98t4.99-9.981l1.996-3.993q2.994-5.988 2.994-15.968 0-23.954-10.978-35.93-8.983-11.977-29.942-17.965l-40.92-10.979 21.957-35.93q3.992-6.986 3.992-17.964 0-24.952-16.966-40.92-15.97-15.97-41.919-15.97-20.959 0-35.93 11.977l-32.935 28.944-16.967-39.922q-12.975-27.946-36.928-43.915-22.955-16.966-57.887-16.966-12.974 0-31.937 7.984-16.967 7.984-33.934 22.955-10.979 9.98-20.96 30.94-6.985 13.972-6.985 34.932 0 18.963 8.982 33.933l21.957 36.928-41.918 9.98q-21.957 5.989-32.936 19.962l-.998.998v.998q-12.974 14.97-12.974 35.93 0 8.982 4.99 18.963.998 1.996 4.99 7.984t16.967 16.967q1.996 1.996 12.975 4.99t39.922 2.994v31.938q-22.955 0-42.917-2.994t-30.94-12.975q-23.952-20.959-30.939-35.93T0 267.478q0-34.932 20.96-57.887 18.962-22.956 49.902-30.94-12.975-21.957-12.975-49.902 0-28.944 9.98-48.905 10.979-23.953 27.946-40.92 17.965-16.967 41.918-27.945T183.641 0q44.913 0 75.852 21.957 31.938 21.957 47.907 57.887 22.955-19.961 56.888-19.961 38.924 0 63.876 24.951 26.947 25.95 26.947 63.876 0 18.963-8.982 33.933 27.945 6.987 46.908 28.944zM279.454 502.019Q269.474 512 256.5 512t-21.957-9.98L132.74 401.215q-11.977-11.976 0-22.955 4.99-4.99 10.978-4.99t10.979 4.99l84.834 84.835V192.624q0-15.969 15.969-15.969t15.969 15.969v272.468l86.83-86.83q10.979-10.98 22.955 0 10.979 10.978 0 22.954z",$e=!1,Ge="SAP-icons-v4",Ye="@ui5/webcomponents-icons";A(He,{pathData:Fe,ltr:$e,collection:Ge,packageName:Ye});const Xe="download-from-cloud",Ke="M264 236q-8-8-8-18 0-11 7.5-18.5T282 192t18 7l33 34V90q0-11 7-18.5t18-7.5 18.5 7.5T384 90v143l33-34q7-7 18-7t18.5 7.5T461 218q0 10-8 18l-76 76q-8 8-19 8-10 0-18-8zm222 52q11 0 18.5 7.5T512 314q0 27-10 51.5t-27 43-41 29-52 10.5H109q-22 0-42-9t-35-24-23.5-35.5T0 336t8.5-43 23-35 34-24 41.5-9q4-25 16-47.5t29-40 39.5-28.5T239 96h4q10-1 17.5 6t8.5 17v2q1 10-7 17.5t-25 9.5q-16 1-30.5 10t-26 22-18 29-6.5 32q0 18-7.5 26.5T130 276h-21q-24 0-41 17.5T51 336q0 26 17 43.5t41 17.5h273q33 0 56-24.5t23-58.5q0-11 7-18.5t18-7.5z",Qe=!1,Je="SAP-icons-v5",Ze="@ui5/webcomponents-icons";A(Xe,{pathData:Ke,ltr:Qe,collection:Je,packageName:Ze});const et="download-from-cloud",tt="paste",nt="M192 224q0-14 9-23t23-9h224q13 0 22.5 9t9.5 23v256q0 13-9.5 22.5T448 512H224q-14 0-23-9.5t-9-22.5V224zm32 256h224V224H224v256zM32 96q0-14 9.5-23T65 64h65q11-28 38-32 8-14 23-23t33-9q17 0 32 9t23 23q27 4 38 32h67q13 0 22 9t9 23v64h-31V96h-68q-5 12-12.5 22T281 128H166q-15 0-22.5-10T131 96H65v384h95v32H65q-14 0-23.5-9.5T32 480V96zm143 0h96q7 0 11.5-5t4.5-11q0-16-16-16h-15q0-14-9.5-23T224 32q-14 0-23 9t-9 23h-17q-6 0-11 4.5T159 80q0 6 5 11t11 5zm97 224h128q16 0 16 16 0 6-4.5 11t-11.5 5H272q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5zm0 63h128q16 0 16 16 0 6-4.5 11t-11.5 5H272q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5z",ot=!1,it="SAP-icons-v4",at="@ui5/webcomponents-icons";A(tt,{pathData:nt,ltr:ot,collection:it,packageName:at});const st="paste",lt="M102 512H90q-24 0-41-17t-17-41V122q0-24 17-41t41-17h38v-6q0-24 17-41t41-17h76q24 0 41 17t17 41v6h38q24 0 41 17t17 41v12q0 11-7.5 18.5T390 160t-18-7.5-7-18.5v-12q0-7-7-7h-39q-5 20-20.5 32.5T262 160h-76q-21 0-36.5-12.5T129 115H90q-7 0-7 7v332q0 7 7 7h12q11 0 18.5 7t7.5 18-7.5 18.5T102 512zm84-461q-7 0-7 7v44q0 7 7 7h76q7 0 7-7V58q0-7-7-7h-76zm268 461H218q-11 0-18.5-7.5T192 486V218q0-11 7.5-18.5T218 192h236q11 0 18.5 7.5T480 218v268q0 11-7.5 18.5T454 512zm-211-51h186V243H243v218zm115-128h-44q-11 0-18.5-7.5T288 307t7.5-18 18.5-7h44q11 0 18.5 7t7.5 18-7.5 18.5T358 333zm0 83h-44q-11 0-18.5-7.5T288 390t7.5-18 18.5-7h44q11 0 18.5 7t7.5 18-7.5 18.5T358 416z",rt=!1,dt="SAP-icons-v5",ut="@ui5/webcomponents-icons";A(st,{pathData:lt,ltr:rt,collection:dt,packageName:ut});const ct="paste",ht={title:"Data Display / Tree",component:b,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{selectionMode:ae.None},tags:["package:@ui5/webcomponents"]},w={render:a=>s.jsxs(b,{...a,children:[s.jsx(r,{expanded:!0,text:"Tree 1",icon:ct,selected:!0,children:s.jsxs(r,{expanded:!0,text:"Tree 1.1",children:[s.jsx(r,{text:"Tree 1.1.1"}),s.jsx(r,{text:"Tree 1.1.2"})]})}),s.jsxs(r,{text:"Tree 2",icon:se,children:[s.jsxs(r,{text:"Tree 2.1",children:[s.jsx(r,{text:"Tree 2.1.1"}),s.jsxs(r,{text:"Tree 2.1.2",children:[s.jsx(r,{text:"Tree 2.1.2.1"}),s.jsx(r,{text:"Tree 2.1.2.2"}),s.jsx(r,{text:"Tree 2.1.2.3"}),s.jsx(r,{text:"Tree 2.1.2.5"})]})]}),s.jsx(r,{text:"Tree 2.2"})]}),s.jsx(r,{text:"Tree 3 (no icon)"}),s.jsx(g,{content:s.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[s.jsx(B,{name:R,style:{marginInlineEnd:"2rem"}}),s.jsx(re,{children:"I'm a fully customizable TreeItemCustom!"}),s.jsx(ue,{children:"Btn"}),s.jsx(B,{name:R,style:{marginInlineStart:"2rem"}})]})})]})},T={render:a=>{const[e,t]=U.useState(null),[n,i]=U.useState(!1),o=l=>{l.detail.item.dataset.id==="lazychildren"&&!e&&(l.preventDefault(),i(!0),setTimeout(()=>{i(!1),t(s.jsxs(s.Fragment,{children:[s.jsx(r,{text:"Tree 3.1"}),s.jsx(r,{text:"Tree 3.2"})]})),l.detail.item.toggle()},3e3))};return s.jsx(de,{active:n,style:{width:"100%"},children:s.jsxs(b,{...a,onItemToggle:o,children:[s.jsxs(r,{text:"Has pre-loaded children",children:[s.jsx(r,{text:"Tree 1.1"}),s.jsx(r,{text:"Tree 1.2"})]}),s.jsx(r,{text:"Has no children"}),s.jsx(r,{text:"Has children but not yet loaded",hasChildren:!0,icon:et,"data-id":"lazychildren",children:e})]})})}};var H,F,$;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => {
    return <Tree {...args}>
        <TreeItem expanded text="Tree 1" icon={pasteIcon} selected>
          <TreeItem expanded text="Tree 1.1">
            <TreeItem text="Tree 1.1.1" />
            <TreeItem text="Tree 1.1.2" />
          </TreeItem>
        </TreeItem>
        <TreeItem text="Tree 2" icon={copyIcon}>
          <TreeItem text="Tree 2.1">
            <TreeItem text="Tree 2.1.1" />
            <TreeItem text="Tree 2.1.2">
              <TreeItem text="Tree 2.1.2.1" />
              <TreeItem text="Tree 2.1.2.2" />
              <TreeItem text="Tree 2.1.2.3" />
              <TreeItem text="Tree 2.1.2.5" />
            </TreeItem>
          </TreeItem>
          <TreeItem text="Tree 2.2" />
        </TreeItem>
        <TreeItem text="Tree 3 (no icon)" />
        <TreeItemCustom content={<div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
              <Icon name={sunIcon} style={{
          marginInlineEnd: '2rem'
        }} />
              <Text>I'm a fully customizable TreeItemCustom!</Text>
              <Button>Btn</Button>
              <Icon name={sunIcon} style={{
          marginInlineStart: '2rem'
        }} />
            </div>} />
      </Tree>;
  }
}`,...($=(F=w.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var G,Y,X;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => {
    const [lazyChildren, setLazyChildren] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleItemToggle = e => {
      if (e.detail.item.dataset.id === 'lazychildren' && !lazyChildren) {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setLazyChildren(<>
              <TreeItem text="Tree 3.1" />
              <TreeItem text="Tree 3.2" />
            </>);
          e.detail.item.toggle();
        }, 3000);
      }
    };
    return <BusyIndicator active={loading} style={{
      width: '100%'
    }}>
        <Tree {...args} onItemToggle={handleItemToggle}>
          <TreeItem text="Has pre-loaded children">
            <TreeItem text="Tree 1.1" />
            <TreeItem text="Tree 1.2" />
          </TreeItem>
          <TreeItem text="Has no children" />
          <TreeItem text="Has children but not yet loaded" hasChildren icon={dlCloutIcon} data-id="lazychildren">
            {lazyChildren}
          </TreeItem>
        </Tree>
      </BusyIndicator>;
  }
}`,...(X=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};const mt=["Default","LazyLoading"],jt=Object.freeze(Object.defineProperty({__proto__:null,Default:w,LazyLoading:T,__namedExportsOrder:mt,default:ht},Symbol.toStringTag,{value:"Module"}));export{jt as C,w as D,T as L,r as T,g as a};
