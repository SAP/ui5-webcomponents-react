import{f,a as I}from"./Input-C39Hl4lf.js";import"./ListBoxItemGroupTemplate-tLzDnBCp.js";import"./SuggestionItemGroup-DB0g8l9l.js";import{b as a,j as l,F as _}from"./jsx-runtime-ByLklLy6.js";import{I as m}from"./Icon-CGby3L9v.js";import{d as S}from"./decline-U8TXFXmv.js";import{d as x,c as v}from"./List-tC_sBijc.js";import{R as V}from"./ResponsivePopover-loEtlXj6.js";import{a as d}from"./Button-CVhFbCad.js";import{C as P,G as C}from"./i18n-defaults-BXUwkpCs.js";import"./iframe-aUcG8O2y.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./ResizeHandler-D-iSdYn6.js";import"./CustomElementsScope-BJCkQSHf.js";import"./index-Bi_W_Jd4.js";import"./ValueState-Bg0UWejw.js";import"./Keys-B3oBAe0t.js";import"./i18n-CjR4HGlq.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./getActiveElement-kltGt_DR.js";import"./sys-enter-2-DfvUZ16A.js";import"./sys-enter-2-DLBOjKNS.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-CmvYYEtw.js";import"./information-DWKEhq3n.js";import"./Popover-BgaZr5c3.js";import"./PopupsCommon.css-D4-KdmWM.js";import"./FocusableElements-Bof-Jfi5.js";import"./isElementHidden-B4HqmI2E.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./Title-Dw2clFwJ.js";import"./ResponsivePopoverCommon.css-ulAhQagc.js";import"./ValueStateMessage.css-eVIV6tCL.js";import"./Suggestions.css-BGzgip6g.js";import"./ListItemGroup-DkPsliH9.js";import"./DropIndicator-C61opNKl.js";import"./TabbableElements-XzXYKyvZ.js";import"./ListItemBaseTemplate-KnOYKXBU.js";import"./jsx-runtime-D_zvdyIk.js";import"./EventProvider-ChtD9rRX.js";import"./ItemNavigation-DkXbeD0_.js";import"./handleDrop-DBhvwkYi.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./BusyIndicator-cXtbXcMV.js";import"./Label-42unHoL8.js";import"./Dialog-CRHAE-yP.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-CFLTQoOV.js";const T=n=>n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function p(n,e,t,s){return n.replaceAll(new RegExp(T(e),`${s?"i":""}g`),t)}function b(n,e){if(!n||!e)return n;const t=r=>{const[c,h]=r.split("");for(;n.indexOf(r)>=0||e.indexOf(r)>=0;)r=`${c}${r}${h}`;return r},s=t("12"),i=t("34");let o=f(p(n,e,r=>`${s}${r}${i}`,!0));return[[s,"<b>"],[i,"</b>"]].forEach(([r,c])=>{o=p(o,r,c,!1)}),o}function w(n){const e=(n==null?void 0:n.suggestionsList)||F,t=n==null?void 0:n.valueStateMessage,s=n==null?void 0:n.valueStateMessageInputIcon;return a(V,{class:this.classes.popover,hideArrow:!0,preventFocusRestore:!0,preventInitialFocus:!0,placement:"Bottom",horizontalAlign:"Start",tabindex:-1,style:this.styles.suggestionsPopover,onOpen:this._afterOpenPicker,onClose:this._afterClosePicker,onScroll:this._scroll,open:this.open,opener:this,accessibleName:this._popupLabel,children:[this._isPhone&&a(_,{children:[a("div",{slot:"header",class:"ui5-responsive-popover-header",children:[a("div",{class:"row",children:[l("span",{children:this._headerTitleText}),l(d,{class:"ui5-responsive-popover-close-btn",icon:S,design:"Transparent",onClick:this._closePicker})]}),l("div",{class:"row",children:l("div",{class:"input-root-phone native-input-wrapper",children:l(I,{class:"ui5-input-inner-phone",type:this.inputType,value:this.value,showClearIcon:this.showClearIcon,placeholder:this.placeholder,onInput:this._handleInput,onChange:this._handleChange})})})]}),this.hasValueStateMessage&&a("div",{class:this.classes.popoverValueState,style:this.styles.suggestionPopoverHeader,children:[l(m,{class:"ui5-input-value-state-message-icon",name:s==null?void 0:s.call(this)}),this.open&&(t==null?void 0:t.call(this))]})]}),!this._isPhone&&this.hasValueStateMessage&&a("div",{slot:"header",class:{"ui5-responsive-popover-header":!0,"ui5-responsive-popover-header--focused":this._isValueStateFocused,...this.classes.popoverValueState},style:this.styles.suggestionPopoverHeader,children:[l(m,{class:"ui5-input-value-state-message-icon",name:s==null?void 0:s.call(this)}),this.open&&(t==null?void 0:t.call(this))]}),e.call(this),this._isPhone&&l("div",{slot:"footer",class:"ui5-responsive-popover-footer",children:l(d,{design:"Transparent",onClick:this._closePicker,children:"OK"})})]})}function F(){return l(v,{accessibleRole:x.ListBox,separators:this.suggestionSeparators,selectionMode:"Single",onMouseDown:this.onItemMouseDown,onItemClick:this._handleSuggestionItemPress,onSelectionChange:this._handleSelectionChange,children:l("slot",{})})}class u{get template(){return w}constructor(e,t,s,i){this.component=e,this.slotName=t,this.handleFocus=i,this.highlight=s,this.selectedItemIndex=-1}onUp(e,t){e.preventDefault();const s=!this.isOpened&&this._hasValueState&&t===-1?0:t;return this._handleItemNavigation(!1,s),!0}onDown(e,t){e.preventDefault();const s=!this.isOpened&&this._hasValueState&&t===-1?0:t;return this._handleItemNavigation(!0,s),!0}onSpace(e){return this._isItemOnTarget()?(e.preventDefault(),this.onItemSelected(this._selectedItem,!0),!0):!1}onEnter(e){return this._isGroupItem?(e.preventDefault(),!1):this._isItemOnTarget()?(this.onItemSelected(this._selectedItem,!0),!0):!1}onPageUp(e){e.preventDefault();const t=this.selectedItemIndex-10>-1;return this._hasValueState&&!t?(this._focusValueState(),!0):(this._moveItemSelection(this.selectedItemIndex,t?this.selectedItemIndex-=10:this.selectedItemIndex=0),!0)}onPageDown(e){e.preventDefault();const t=this._getItems(),s=t.length-1,i=this.selectedItemIndex+10<=s;return this._hasValueState&&!t?(this._focusValueState(),!0):(this._moveItemSelection(this.selectedItemIndex,i?this.selectedItemIndex+=10:this.selectedItemIndex=s),!0)}onHome(e){return e.preventDefault(),this._hasValueState?(this._focusValueState(),!0):(this._moveItemSelection(this.selectedItemIndex,this.selectedItemIndex=0),!0)}onEnd(e){e.preventDefault();const t=this._getItems().length-1;return this._hasValueState&&!t?(this._focusValueState(),!0):(this._moveItemSelection(this.selectedItemIndex,this.selectedItemIndex=t),!0)}onTab(){return this._isItemOnTarget()?(this.onItemSelected(this._selectedItem,!0),!0):!1}toggle(e,t){(e!==void 0?e:!this.isOpened())?this._getComponent().open=!0:this.close(t.preventFocusRestore)}get _selectedItem(){return this._getNonGroupItems().find(e=>e.selected)}_isScrollable(){const e=this._getScrollContainer();return e.offsetHeight<e.scrollHeight}close(e=!1){const t=this._getItems()&&this._getItems()[this.selectedItemIndex];this._getComponent().open=!1;const s=this._getPicker();s.preventFocusRestore=e,s.open=!1,t&&t.focused&&(t.focused=!1)}updateSelectedItemPosition(e){this.selectedItemIndex=e}onItemSelected(e,t){const s=e,i=this._getNonGroupItems();s&&(this.accInfo={isGroup:s.hasAttribute("ui5-suggestion-item-group"),currentPos:i.indexOf(s)+1,listSize:i.length,itemText:s.text||"",additionalText:s.additionalText},this._getComponent().onItemSelected(s,t),this._getComponent().open=!1)}onItemSelect(e){this._getComponent().onItemSelect(e)}onItemPress(e){let t;const s=e.type==="ui5-item-click";s&&!e.detail.item.selected||this._handledPress&&!s||(s&&e.detail.item.selected?(t=e.detail.item,this._handledPress=!0):t=e.detail.selectedItems[0],this.onItemSelected(t,!1))}_onClose(){this._handledPress=!1}_isItemOnTarget(){return this.isOpened()&&this.selectedItemIndex!==null&&this.selectedItemIndex!==-1&&!this._isGroupItem}get _isGroupItem(){const e=this._getItems();return!e||!e[this.selectedItemIndex]?!1:e[this.selectedItemIndex].hasAttribute("ui5-suggestion-item-group")}isOpened(){var e;return!!((e=this._getPicker())!=null&&e.open)}_handleItemNavigation(e,t){this.selectedItemIndex=t,this._getItems().length&&(e?this._selectNextItem():this._selectPreviousItem())}_selectNextItem(){const e=this._getItems().length,t=this.selectedItemIndex;if(this._hasValueState&&t===-1&&!this.component._isValueStateFocused){this._focusValueState();return}(t===-1&&!this._hasValueState||this.component._isValueStateFocused)&&(this._clearValueStateFocus(),this.selectedItemIndex=-1),!(t!==-1&&t+1>e-1)&&this._moveItemSelection(t,++this.selectedItemIndex)}_selectPreviousItem(){const e=this._getItems(),t=this.selectedItemIndex;if(this._hasValueState&&t===0&&!this.component._isValueStateFocused){this.component.hasSuggestionItemSelected=!1,this.component._isValueStateFocused=!0,this.selectedItemIndex=0,e[0].focused=!1,e[0].hasAttribute("ui5-suggestion-item")&&(e[0].selected=!1);return}if(this.component._isValueStateFocused){this.component.focused=!0,this.component._isValueStateFocused=!1,this.selectedItemIndex=0;return}if(!(t===-1||t===null)){if(t-1<0){(e[t].hasAttribute("ui5-suggestion-item")||e[t].hasAttribute("ui5-suggestion-item-custom"))&&(e[t].selected=!1),e[t].focused=!1,this.component.focused=!0,this.component.hasSuggestionItemSelected=!1,this.selectedItemIndex-=1;return}this._moveItemSelection(t,--this.selectedItemIndex)}}_moveItemSelection(e,t){const s=this._getItems(),i=s[t],o=s[e],r=this._getNonGroupItems(),c=i.hasAttribute("ui5-suggestion-item-group");if(!i)return;this.component.focused=!1,this._clearValueStateFocus();const h=this._getItems()[this.selectedItemIndex];if(this.accInfo={isGroup:c,currentPos:s.indexOf(i)+1,itemText:(c?h.headerText:h.text)||""},(i.hasAttribute("ui5-suggestion-item")||i.hasAttribute("ui5-suggestion-item-custom"))&&(this.accInfo.additionalText=i.additionalText||"",this.accInfo.currentPos=r.indexOf(i)+1,this.accInfo.listSize=r.length),o&&(o.focused=!1),(o!=null&&o.hasAttribute("ui5-suggestion-item")||o!=null&&o.hasAttribute("ui5-suggestion-item-custom"))&&(o.selected=!1),i&&(i.focused=!0,c||(i.selected=!0),this.handleFocus&&i.focus()),this.component.hasSuggestionItemSelected=!0,this.onItemSelect(i),!this._isItemIntoView(i)){const g=this._isGroupItem?i.shadowRoot.querySelector("[ui5-li-group-header]"):i;this._scrollItemIntoView(g)}}_deselectItems(){this._getItems().forEach(t=>{t.hasAttribute("ui5-suggestion-item")&&(t.selected=!1),t.focused=!1})}_clearItemFocus(){const e=this._getItems().find(t=>t.focused);e&&(e.focused=!1)}_isItemIntoView(e){const t=e.getDomRef().getBoundingClientRect(),s=this._getComponent().getDomRef().getBoundingClientRect(),i=window.innerHeight||document.documentElement.clientHeight;let o=0;return this._hasValueState&&(o=this._getPicker().querySelector("[slot=header]").getBoundingClientRect().height),t.top+u.SCROLL_STEP<=i&&t.top>=s.top+o}_scrollItemIntoView(e){e.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"})}_getScrollContainer(){return this._scrollContainer||(this._scrollContainer=this._getPicker().shadowRoot.querySelector(".ui5-popup-content")),this._scrollContainer}_getItems(){return this._getComponent().getSlottedNodes("suggestionItems").flatMap(t=>t.hasAttribute("ui5-suggestion-item-group")?[t,...t.items]:[t])}_getNonGroupItems(){return this._getItems().filter(e=>!e.hasAttribute("ui5-suggestion-item-group"))}_getComponent(){return this.component}_getList(){return this._getPicker().querySelector("[ui5-list]")}_getListWidth(){var e;return(e=this._getList())==null?void 0:e.offsetWidth}_getPicker(){return this._getComponent().shadowRoot.querySelector("[ui5-responsive-popover]")}get itemSelectionAnnounce(){if(!this.accInfo)return"";if(this.accInfo.isGroup)return`${u.i18nBundle.getText(P)} ${this.accInfo.itemText}`;const e=u.i18nBundle.getText(C,this.accInfo.currentPos||0,this.accInfo.listSize||0);return`${this.accInfo.additionalText} ${e}`}hightlightInput(e,t){return b(e,t)}get _hasValueState(){return this.component.hasValueStateMessage}_focusValueState(){this.component._isValueStateFocused=!0,this.component.focused=!1,this.component.hasSuggestionItemSelected=!1,this.selectedItemIndex=0,this.component.value=this.component.typedInValue,this._deselectItems()}_clearValueStateFocus(){this.component._isValueStateFocused=!1}_clearSelectedSuggestionAndaccInfo(){this.accInfo=void 0,this.selectedItemIndex=0}}u.SCROLL_STEP=60;I.SuggestionsClass=u;export{u as default};
