import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{i as _e}from"./utils-DIZaq3vH.js";import{b as _}from"./List-2melzpex.js";import{r as i}from"./index-U0ga5oGA.js";import{B as x}from"./index-C2cs6waD.js";import{L as xe}from"./index-49bJeJce.js";import{L as re}from"./index-6MlaPNUD.js";import{T as ce}from"./index-Z1IFI4-r.js";import{F as de,c as Ie}from"./index-B_tnU4S0.js";import{B as M}from"./Button-DsiN4KEf.js";import{a as Y}from"./Icon-Dy5MqRQN.js";import{a as Te}from"./Input-9kbypi2T.js";import{d as Ne}from"./decline-Cf8Y7eZn.js";import{s as qe}from"./search-CD189Cpa.js";import"./CustomElementsScope-BZQ-yqK5.js";import{A as Be,k as C}from"./jsx-runtime-2NO35c9p.js";import{c as J}from"./clsx-B-dksMZM.js";import{u as Ve,n as Q,o as ee,p as j,q as Re,r as Ee,i as Le}from"./i18n-defaults-DHddteo6.js";import"./index-Bgve6bvD.js";import{L as ke}from"./index-CMVptBWg.js";import{u as Oe}from"./useStylesheet-DhspXHhi.js";import{D as Pe}from"./index-B23f-h2l.js";import{T as Ae}from"./index-Fa27a8jx.js";import{I as Me}from"./index-BBoDJS7V.js";import{I as te}from"./index-hij65avV.js";const je='@layer ui5-webcomponents-react{._dialog_1gi2q_1::part(header){flex-direction:column;margin-block-end:0;padding-block-end:.25rem}._dialog_1gi2q_1::part(content){padding:0}._headerContent_1gi2q_13{align-items:center;display:grid;grid-template-areas:"titleStart titleCenter cancel" "input input input";grid-template-columns:fit-content(100px) minmax(0,1fr) fit-content(100px);grid-template-rows:var(--_ui5wcr-DialogHeaderHeight) var(--_ui5wcr-DialogSubHeaderHeight);width:100%}._title_1gi2q_24{font-family:var(--sapFontHeaderFamily);font-size:var(--sapFontLargeSize);grid-column-end:titleCenter;grid-column-start:titleStart;max-width:100%;overflow:hidden;text-overflow:ellipsis}._titleCenterAlign_1gi2q_34{grid-area:titleCenter;justify-self:center}._hiddenClearBtn_1gi2q_39{grid-area:titleStart;visibility:hidden}._clearBtn_1gi2q_44{grid-area:cancel;justify-self:end}._input_1gi2q_49{grid-area:input;width:100%}._footer_1gi2q_54{align-items:center;box-sizing:border-box;display:flex;justify-content:flex-end;width:100%}._footer_1gi2q_54>*{margin-inline-start:.5rem}._inputIcon_1gi2q_66{color:var(--sapContent_IconColor);cursor:pointer}._infoBar_1gi2q_71{background-color:var(--sapInfobar_NonInteractive_Background);border-block-end:.0625rem solid var(--sapGroup_TitleBorderColor);color:var(--sapList_TextColor);height:2rem;overflow:hidden;padding-inline-start:var(--_ui5wcr-CheckBoxPaddingInline);position:sticky;top:0;z-index:1}}',c={dialog:"_dialog_1gi2q_1",headerContent:"_headerContent_1gi2q_13",title:"_title_1gi2q_24",titleCenterAlign:"_titleCenterAlign_1gi2q_34",hiddenClearBtn:"_hiddenClearBtn_1gi2q_39",clearBtn:"_clearBtn_1gi2q_44",input:"_input_1gi2q_49",footer:"_footer_1gi2q_54",inputIcon:"_inputIcon_1gi2q_66",infoBar:"_infoBar_1gi2q_71"},p=i.forwardRef((l,S)=>{const{accessibleName:m,open:a,children:g,className:v,confirmButtonText:s,confirmButtonProps:u,growing:U,headerText:R,headerTextAlignCenter:E,listProps:f={},selectionMode:b=_.Single,numberOfSelectedItems:I,rememberSelections:F,showClearButton:L,onClose:k,onClear:O,onConfirm:w,onLoadMore:D,onSearch:o,onSearchInput:n,onSearchReset:h,onBeforeOpen:y,onBeforeClose:H,onOpen:W,onCancel:P,...pe}=l;Oe(je,p.displayName);const r=Ve("@ui5/webcomponents-react"),[T,$]=i.useState(""),[A,z]=i.useState([]),[me,N]=Be(f.ref),[fe,q]=i.useState(a);i.useEffect(()=>{q(a)},[a]);const he=e=>{var K,X;const d=((K=N.current)==null?void 0:K.getSelectedItems())??[];typeof y=="function"&&y(e),b===_.Multiple&&((X=N.current)!=null&&X.hasData)&&z(d)},ge=e=>{var d;typeof W=="function"&&W(e),(d=N.current)==null||d.focusFirstItem()},ve=e=>{typeof n=="function"&&n(C(e,{value:e.target.value})),$(e.target.value)},G=e=>{typeof o=="function"&&(e.type==="keyup"&&e.code==="Enter"&&o(C(e,{value:e.target.value})),e.type==="click"&&o(C(e,{value:T})))},be=e=>{typeof h=="function"&&h(C(e,{prevValue:T})),$("")},ye=e=>{typeof(f==null?void 0:f.onSelectionChange)=="function"&&f.onSelectionChange(e),b===_.Multiple?z(e.detail.selectedItems):(typeof w=="function"&&w(e),q(!1))},Ce=e=>{q(!1),typeof P=="function"&&P(e)},Z=e=>{var d;typeof O=="function"&&O(C(e,{prevSelectedItems:A})),z([]),(d=N.current)==null||d.deselectSelectedItems()},Se=e=>{typeof w=="function"&&w(C(e,{selectedItems:A})),q(!1)},we=e=>{var d;q(!1),typeof k=="function"&&k(e),typeof h=="function"&&h(C(e,{prevValue:T})),$(""),F||(d=N.current)==null||d.deselectSelectedItems()},De=e=>{typeof H=="function"&&H(e),typeof P=="function"&&e.detail.escPressed&&P(e)};return t.jsxs(Pe,{...pe,open:fe,"data-component-name":"SelectDialog",ref:S,className:J(c.dialog,v),onClose:we,onBeforeOpen:he,onOpen:ge,onBeforeClose:De,accessibleName:m??R,children:[t.jsxs("div",{className:c.headerContent,slot:"header",children:[L&&E&&t.jsx(x,{onClick:Z,design:M.Transparent,className:c.hiddenClearBtn,tabIndex:-1,"aria-hidden":"true",children:r.getText(Q)}),t.jsx(Ae,{className:J(c.title,E&&c.titleCenterAlign),children:R}),L&&t.jsx(x,{onClick:Z,design:M.Transparent,className:c.clearBtn,children:r.getText(Q)}),t.jsx(Me,{className:c.input,accessibleName:r.getText(j),value:T,placeholder:r.getText(j),onInput:ve,onKeyUp:G,type:Te.Search,icon:t.jsxs(t.Fragment,{children:[T&&t.jsx(te,{accessibleName:r.getText(ee),title:r.getText(ee),name:Ne,mode:Y.Interactive,onClick:be,className:c.inputIcon}),t.jsx(te,{mode:Y.Interactive,name:qe,className:c.inputIcon,onClick:G,accessibleName:r.getText(j),title:r.getText(j)})]})})]}),b===_.Multiple&&(!!A.length||I>0)&&t.jsx(de,{alignItems:Ie.Center,className:c.infoBar,children:t.jsx(ce,{children:`${r.getText(Re)}: ${I??A.length}`})}),t.jsx(ke,{...f,ref:me,growing:U,onLoadMore:D,selectionMode:b,onSelectionChange:ye,children:g}),t.jsxs("div",{slot:"footer",className:c.footer,children:[b===_.Multiple&&t.jsx(x,{...u,onClick:Se,design:M.Emphasized,children:s??r.getText(Ee)}),t.jsx(x,{onClick:Ce,design:M.Transparent,children:r.getText(Le)})]})]})});p.displayName="SelectDialog";try{p.displayName="SelectDialog",p.__docgenInfo={description:"The SelectDialog enables users to filter a comprehensive list via a search field and to select one or more items.",displayName:"SelectDialog",props:{accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the component.\n\n__Note:__ If not set, the dialog uses the `headerText` for its accessible name.",name:"accessibleName",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Defines the list items of the component.\n\n__Note:__ Although this prop accepts all HTML Elements and therefore also all list items, it is strongly recommended that you only use `ListItemStandard` in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},showClearButton:{defaultValue:null,description:"This flag controls whether the Clear button is shown. When set to `true`, it provides a way to clear selections. We recommend enabling the Clear button in cases where a mechanism to delete the selection is required: In single selection mode (default mode) or when `rememberSelections` is set to `true`.",name:"showClearButton",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"Defines the header text.",name:"headerText",required:!1,type:{name:"string"}},headerTextAlignCenter:{defaultValue:null,description:"Specifies the `headerText` alignment.",name:"headerTextAlignCenter",required:!1,type:{name:"boolean"}},confirmButtonText:{defaultValue:null,description:"Overwrites the default text for the confirmation button.",name:"confirmButtonText",required:!1,type:{name:"string"}},rememberSelections:{defaultValue:null,description:"This flag controls whether the dialog clears the selection after the confirm event has been fired. If the dialog needs to be opened multiple times in the same context to allow for corrections of previous user inputs, set this flag to `true`.\n\n__Note:__ This won't work if the dialog is unmounted, if you want to unmount the dialog when closed, you need to persist the selection yourself.",name:"rememberSelections",required:!1,type:{name:"boolean"}},numberOfSelectedItems:{defaultValue:null,description:"Defines the number of selected list items displayed above the list in `MultiSelect` mode. Programmatically setting the counter is necessary if all previously selected elements are to remain selected during search.",name:"numberOfSelectedItems",required:!1,type:{name:"number"}},selectionMode:{defaultValue:{value:"ListSelectionMode.Single"},description:"Defines the mode of the SelectDialog list.\n\n__Note:__ Although this prop accepts all `ListSelectionMode`s, it is strongly recommended that you only use `Single` or `Multiple` in order to preserve the intended design.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Delete"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"None"'},{value:'"Single"'},{value:'"SingleStart"'},{value:'"SingleEnd"'},{value:'"SingleAuto"'},{value:'"Multiple"'},{value:'"Delete"'},{value:'"SingleStart"'},{value:'"SingleEnd"'},{value:'"SingleAuto"'}]}},listProps:{defaultValue:{value:"{}"},description:"Defines props you can pass to the internal `List` component.\n\n__Note:__ `selectionMode`, `children`, `growing`, `onLoadMore` and `footerText` are not supported.",name:"listProps",required:!1,type:{name:'Omit<ListPropTypes, "children" | "selectionMode" | "onLoadMore" | "growing" | "footerText">'}},confirmButtonProps:{defaultValue:null,description:"Defines the props of the confirm button.\n\n__Note:__`onClick` and `design` are not supported.\n@since 1.25.0",name:"confirmButtonProps",required:!1,type:{name:'Omit<ButtonPropTypes, "onClick" | "design">'}},onSearchInput:{defaultValue:null,description:"This event will be fired when the value of the search field is changed by a user - e.g. at each key press",name:"onSearchInput",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void"}},onSearch:{defaultValue:null,description:"This event will be fired when the search button has been clicked or the ENTER key has been pressed in the search field.",name:"onSearch",required:!1,type:{name:"((event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void) | ((event: Ui5CustomEvent<IconDomRef, { value: string; }>) => void)"}},onSearchReset:{defaultValue:null,description:"This event will be fired when the reset button has been clicked in the search field or when the dialog is closed.",name:"onSearchReset",required:!1,type:{name:"(event: Ui5CustomEvent<{ prevValue: string; nativeDetail?: number; }, never>) => void"}},onClear:{defaultValue:null,description:"This event will be fired when the clear button has been clicked.",name:"onClear",required:!1,type:{name:"(event: Ui5CustomEvent<ButtonDomRef, { prevSelectedItems: ListItemStandardDomRef[]; nativeDetail: number; }>) => void"}},onConfirm:{defaultValue:null,description:"This event will be fired when the dialog is confirmed by selecting an item in single selection mode or by pressing the confirmation button in multi selection mode.",name:"onConfirm",required:!1,type:{name:"((event: Ui5CustomEvent<ListDomRef, { selectedItems: ListItemStandardDomRef[]; }>) => void) | ((event: Ui5CustomEvent<ButtonDomRef, { ...; }>) => void)"}},onCancel:{defaultValue:null,description:"This event will be fired when the cancel button is clicked or ESC key is pressed.",name:"onCancel",required:!1,type:{name:"((event: Ui5CustomEvent<ButtonDomRef, ButtonClickEventDetail>) => void) | ((event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void)"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},draggable:{defaultValue:{value:"false"},description:`Determines whether the component is draggable.
If this property is set to true, the Dialog will be draggable by its header.

**Note:** The component can be draggable only in desktop mode.

**Note:** This property overrides the default HTML "draggable" attribute native behavior.
When "draggable" is set to true, the native browser "draggable"
behavior is prevented and only the Dialog custom logic ("draggable by its header") works.`,name:"draggable",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},onClose:{defaultValue:null,description:`Fired after the component is closed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},accessibleDescription:{defaultValue:{value:"undefined"},description:`Defines the accessible description of the component.

**Note:** Available since [v2.11.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents**.`,name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Defines the IDs of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Dialog"'},description:`Allows setting a custom role.

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},resizable:{defaultValue:{value:"false"},description:`Configures the component to be resizable.
If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages.
In RTL languages, the resize handle will be placed in the bottom left corner.

**Note:** The component can be resizable only in desktop mode.

**Note:** Upon resizing, externally defined height and width styling will be ignored.`,name:"resizable",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"false"},description:`Indicates if the element is open

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},initialFocus:{defaultValue:{value:"undefined"},description:"Defines the ID of the HTML Element, which will get the initial focus.\n\n**Note:** If an element with `autofocus` attribute is added inside the component,\n`initialFocus` won't take effect.",name:"initialFocus",required:!1,type:{name:"string"}},accessibleDescriptionRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that describe the component.

**Note:** Available since [v2.11.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents**.`,name:"accessibleDescriptionRef",required:!1,type:{name:"string"}},preventFocusRestore:{defaultValue:{value:"false"},description:`Defines if the focus should be returned to the previously focused element,
when the popup closes.`,name:"preventFocusRestore",required:!1,type:{name:"boolean"}},preventInitialFocus:{defaultValue:{value:"false"},description:`Indicates whether initial focus should be prevented.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"preventInitialFocus",required:!1,type:{name:"boolean"}},stretch:{defaultValue:{value:"false"},description:`Determines if the dialog will be stretched to full screen on mobile. On desktop,
the dialog will be stretched to approximately 90% of the viewport.

**Note:** For better usability of the component it is recommended to set this property to "true" when the dialog is opened on phone.`,name:"stretch",required:!1,type:{name:"boolean"}},onBeforeClose:{defaultValue:null,description:`Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void"}},onBeforeOpen:{defaultValue:null,description:`Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onOpen:{defaultValue:null,description:`Fired after the component is opened.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onLoadMore:{defaultValue:null,description:`Fired when the user scrolls to the bottom of the list.

**Note:** The event is fired when the \`growing='Scroll'\` property is enabled.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, never>) => void"}},growing:{defaultValue:{value:'"None"'},description:'Defines whether the component will have growing capability either by pressing a `More` button,\nor via user scroll. In both cases `load-more` event is fired.\n\n**Restrictions:** `growing="Scroll"` is not supported for Internet Explorer,\non IE the component will fallback to `growing="Button"`.',name:"growing",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"None"'}]}}}}}catch{}try{p.displayName="SelectDialog",p.__docgenInfo={description:"The SelectDialog enables users to filter a comprehensive list via a search field and to select one or more items.",displayName:"SelectDialog",props:{accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the component.\n\n__Note:__ If not set, the dialog uses the `headerText` for its accessible name.",name:"accessibleName",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Defines the list items of the component.\n\n__Note:__ Although this prop accepts all HTML Elements and therefore also all list items, it is strongly recommended that you only use `ListItemStandard` in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},showClearButton:{defaultValue:null,description:"This flag controls whether the Clear button is shown. When set to `true`, it provides a way to clear selections. We recommend enabling the Clear button in cases where a mechanism to delete the selection is required: In single selection mode (default mode) or when `rememberSelections` is set to `true`.",name:"showClearButton",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"Defines the header text.",name:"headerText",required:!1,type:{name:"string"}},headerTextAlignCenter:{defaultValue:null,description:"Specifies the `headerText` alignment.",name:"headerTextAlignCenter",required:!1,type:{name:"boolean"}},confirmButtonText:{defaultValue:null,description:"Overwrites the default text for the confirmation button.",name:"confirmButtonText",required:!1,type:{name:"string"}},rememberSelections:{defaultValue:null,description:"This flag controls whether the dialog clears the selection after the confirm event has been fired. If the dialog needs to be opened multiple times in the same context to allow for corrections of previous user inputs, set this flag to `true`.\n\n__Note:__ This won't work if the dialog is unmounted, if you want to unmount the dialog when closed, you need to persist the selection yourself.",name:"rememberSelections",required:!1,type:{name:"boolean"}},numberOfSelectedItems:{defaultValue:null,description:"Defines the number of selected list items displayed above the list in `MultiSelect` mode. Programmatically setting the counter is necessary if all previously selected elements are to remain selected during search.",name:"numberOfSelectedItems",required:!1,type:{name:"number"}},selectionMode:{defaultValue:{value:"ListSelectionMode.Single"},description:"Defines the mode of the SelectDialog list.\n\n__Note:__ Although this prop accepts all `ListSelectionMode`s, it is strongly recommended that you only use `Single` or `Multiple` in order to preserve the intended design.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Delete"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"None"'},{value:'"Single"'},{value:'"SingleStart"'},{value:'"SingleEnd"'},{value:'"SingleAuto"'},{value:'"Multiple"'},{value:'"Delete"'},{value:'"SingleStart"'},{value:'"SingleEnd"'},{value:'"SingleAuto"'}]}},listProps:{defaultValue:{value:"{}"},description:"Defines props you can pass to the internal `List` component.\n\n__Note:__ `selectionMode`, `children`, `growing`, `onLoadMore` and `footerText` are not supported.",name:"listProps",required:!1,type:{name:'Omit<ListPropTypes, "children" | "selectionMode" | "onLoadMore" | "growing" | "footerText">'}},confirmButtonProps:{defaultValue:null,description:"Defines the props of the confirm button.\n\n__Note:__`onClick` and `design` are not supported.\n@since 1.25.0",name:"confirmButtonProps",required:!1,type:{name:'Omit<ButtonPropTypes, "onClick" | "design">'}},onSearchInput:{defaultValue:null,description:"This event will be fired when the value of the search field is changed by a user - e.g. at each key press",name:"onSearchInput",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void"}},onSearch:{defaultValue:null,description:"This event will be fired when the search button has been clicked or the ENTER key has been pressed in the search field.",name:"onSearch",required:!1,type:{name:"((event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void) | ((event: Ui5CustomEvent<IconDomRef, { value: string; }>) => void)"}},onSearchReset:{defaultValue:null,description:"This event will be fired when the reset button has been clicked in the search field or when the dialog is closed.",name:"onSearchReset",required:!1,type:{name:"(event: Ui5CustomEvent<{ prevValue: string; nativeDetail?: number; }, never>) => void"}},onClear:{defaultValue:null,description:"This event will be fired when the clear button has been clicked.",name:"onClear",required:!1,type:{name:"(event: Ui5CustomEvent<ButtonDomRef, { prevSelectedItems: ListItemStandardDomRef[]; nativeDetail: number; }>) => void"}},onConfirm:{defaultValue:null,description:"This event will be fired when the dialog is confirmed by selecting an item in single selection mode or by pressing the confirmation button in multi selection mode.",name:"onConfirm",required:!1,type:{name:"((event: Ui5CustomEvent<ListDomRef, { selectedItems: ListItemStandardDomRef[]; }>) => void) | ((event: Ui5CustomEvent<ButtonDomRef, { ...; }>) => void)"}},onCancel:{defaultValue:null,description:"This event will be fired when the cancel button is clicked or ESC key is pressed.",name:"onCancel",required:!1,type:{name:"((event: Ui5CustomEvent<ButtonDomRef, ButtonClickEventDetail>) => void) | ((event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void)"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},draggable:{defaultValue:{value:"false"},description:`Determines whether the component is draggable.
If this property is set to true, the Dialog will be draggable by its header.

**Note:** The component can be draggable only in desktop mode.

**Note:** This property overrides the default HTML "draggable" attribute native behavior.
When "draggable" is set to true, the native browser "draggable"
behavior is prevented and only the Dialog custom logic ("draggable by its header") works.`,name:"draggable",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},onClose:{defaultValue:null,description:`Fired after the component is closed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},accessibleDescription:{defaultValue:{value:"undefined"},description:`Defines the accessible description of the component.

**Note:** Available since [v2.11.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents**.`,name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Defines the IDs of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Dialog"'},description:`Allows setting a custom role.

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},resizable:{defaultValue:{value:"false"},description:`Configures the component to be resizable.
If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages.
In RTL languages, the resize handle will be placed in the bottom left corner.

**Note:** The component can be resizable only in desktop mode.

**Note:** Upon resizing, externally defined height and width styling will be ignored.`,name:"resizable",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"false"},description:`Indicates if the element is open

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},initialFocus:{defaultValue:{value:"undefined"},description:"Defines the ID of the HTML Element, which will get the initial focus.\n\n**Note:** If an element with `autofocus` attribute is added inside the component,\n`initialFocus` won't take effect.",name:"initialFocus",required:!1,type:{name:"string"}},accessibleDescriptionRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that describe the component.

**Note:** Available since [v2.11.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents**.`,name:"accessibleDescriptionRef",required:!1,type:{name:"string"}},preventFocusRestore:{defaultValue:{value:"false"},description:`Defines if the focus should be returned to the previously focused element,
when the popup closes.`,name:"preventFocusRestore",required:!1,type:{name:"boolean"}},preventInitialFocus:{defaultValue:{value:"false"},description:`Indicates whether initial focus should be prevented.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"preventInitialFocus",required:!1,type:{name:"boolean"}},stretch:{defaultValue:{value:"false"},description:`Determines if the dialog will be stretched to full screen on mobile. On desktop,
the dialog will be stretched to approximately 90% of the viewport.

**Note:** For better usability of the component it is recommended to set this property to "true" when the dialog is opened on phone.`,name:"stretch",required:!1,type:{name:"boolean"}},onBeforeClose:{defaultValue:null,description:`Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void"}},onBeforeOpen:{defaultValue:null,description:`Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onOpen:{defaultValue:null,description:`Fired after the component is opened.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},onLoadMore:{defaultValue:null,description:`Fired when the user scrolls to the bottom of the list.

**Note:** The event is fired when the \`growing='Scroll'\` property is enabled.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, never>) => void"}},growing:{defaultValue:{value:'"None"'},description:'Defines whether the component will have growing capability either by pressing a `More` button,\nor via user scroll. In both cases `load-more` event is fired.\n\n**Restrictions:** `growing="Scroll"` is not supported for Internet Explorer,\non IE the component will fallback to `growing="Button"`.',name:"growing",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"None"'}]}}}}}catch{}const Ue=""+new URL("Laptop1-BiqZozDV.jpg",import.meta.url).href,Fe=""+new URL("Laptop2-CLTht4yo.jpg",import.meta.url).href,$e=""+new URL("PC1-BekXrNHY.jpg",import.meta.url).href,ze=""+new URL("PC2-DZLCUDFz.jpg",import.meta.url).href,He={title:"Modals & Popovers / SelectDialog",component:p,argTypes:{children:{control:{disable:!0}}},args:{headerText:"Select Product",open:_e},parameters:{chromatic:{delay:1e3}},tags:["package:@ui5/webcomponents","cem-module:Dialog"]},ue=[{img:Ue,description:"LT-10",text:"Gaming Laptop"},{img:Fe,description:"LT-20",text:"Business Laptop"},{img:ze,description:"HT-10",text:"Gaming PC"},{img:$e,description:"HT-20",text:"Business PC"}],B={render:l=>{const[S,m]=i.useState(l.open),a=()=>{m(!0)},g=v=>{m(!1),l.onClose(v)};return i.useEffect(()=>{m(l.open)},[l.open]),t.jsxs(t.Fragment,{children:[t.jsx(x,{onClick:a,children:"Open SelectDialog"}),t.jsx(p,{...l,open:S,onClose:g,children:new Array(40).fill("").map((v,s)=>{const u=ue[s%4];return t.jsx(re,{selected:s===1,image:t.jsx("img",{src:u.img,alt:"Example Image"}),description:`${u.description}${s}`,text:u.text},`${u.text}${s}`)})})]})}},V={render:()=>{const[l,S]=i.useState(!1),m={"HT-102":!0,"HT-203":!0,"HT-1038":!0},[a,g]=i.useState(m),v=i.useRef(a),[s,u]=i.useState(),[U,R]=i.useState(Object.keys(m)),E=()=>{v.current=a},f=()=>{S(!0)},b=()=>{S(!1)},I=D=>{u(D.detail.value)},F=()=>{u(void 0)},L=D=>{const o=D.detail.targetItem.dataset.description;g(n=>{if(n[o]){const{[o]:h,...y}=n;return y}else return{...n,[o]:!0}})},k=()=>{g({})},O=()=>{R(Object.keys(a))},w=()=>{g(v.current)};return t.jsxs(t.Fragment,{children:[t.jsx(x,{onClick:f,children:"Open Dialog"}),t.jsx(p,{open:l,selectionMode:_.Multiple,numberOfSelectedItems:Object.keys(a).length,listProps:{onSelectionChange:L},showClearButton:!0,rememberSelections:!0,onClear:k,onConfirm:O,onClose:b,onSearchInput:I,onSearch:I,onSearchReset:F,onBeforeOpen:E,onCancel:w,children:new Array(40).fill("").map((D,o)=>{const n=ue[o%4],h=`${n.description}${o}`,y=s==null?void 0:s.toLowerCase();return s&&!h.toLowerCase().includes(y)&&!n.text.toLowerCase().includes(y)?null:t.jsx(re,{image:t.jsx("img",{src:n.img,alt:"Example Image"}),description:`${n.description}${o}`,"data-description":`${n.description}${o}`,selected:a[h],text:n.text},`${n.text}${o}`)}).filter(Boolean)}),t.jsxs(de,{children:[t.jsx(xe,{children:"Selected: "}),t.jsx(ce,{children:U.join(", ")})]})]})}};var ne,oe,ie;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState<boolean | undefined>(args.open);
    const onButtonClick = () => {
      setOpen(true);
    };
    const handleClose = e => {
      setOpen(false);
      args.onClose(e);
    };
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button onClick={onButtonClick}>Open SelectDialog</Button>
        <SelectDialog {...args} open={open} onClose={handleClose}>
          {new Array(40).fill('').map((_, index) => {
          const currentProduct = listItems[index % 4];
          return <ListItemStandard selected={index === 1} image={<img src={currentProduct.img} alt="Example Image" />} description={\`\${currentProduct.description}\${index}\`} key={\`\${currentProduct.text}\${index}\`} text={currentProduct.text} />;
        })}
        </SelectDialog>
      </>;
  }
}`,...(ie=(oe=B.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ae,se;V.parameters={...V.parameters,docs:{...(le=V.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    // predefined selection
    const selectedProducts = {
      'HT-102': true,
      'HT-203': true,
      'HT-1038': true
    };
    // number of selected items
    const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(selectedProducts);
    const selectedItemsBeforeOpen = useRef(selectedItems);
    const [searchVal, setSearchVal] = useState<string | undefined>();
    const [products, setProducts] = useState(Object.keys(selectedProducts));
    const handleBeforeOpen = () => {
      selectedItemsBeforeOpen.current = selectedItems;
    };
    const handleOpen = () => {
      setDialogOpen(true);
    };
    const handleClose = () => {
      setDialogOpen(false);
    };
    // search
    const handleSearch = e => {
      setSearchVal(e.detail.value);
    };
    // reset input value of search field
    const handleSearchReset = () => {
      setSearchVal(undefined);
    };
    // select/unselect
    const handleItemClick = e => {
      const itemDescription = e.detail.targetItem.dataset.description;
      setSelectedItems(prev => {
        if (prev[itemDescription]) {
          const {
            [itemDescription]: _omit,
            ...rest
          } = prev;
          return rest;
        } else {
          return {
            ...prev,
            [itemDescription]: true
          };
        }
      });
    };
    // clear selection
    const handleClear = () => {
      setSelectedItems({});
    };
    // confirm selection
    const handleConfirm = () => {
      setProducts(Object.keys(selectedItems));
    };
    // cancel selection
    const handleCancel = () => {
      setSelectedItems(selectedItemsBeforeOpen.current);
    };
    return <>
        <Button onClick={handleOpen}>Open Dialog</Button>
        <SelectDialog open={dialogOpen} selectionMode={ListSelectionMode.Multiple} numberOfSelectedItems={Object.keys(selectedItems).length} listProps={{
        onSelectionChange: handleItemClick
      }} showClearButton rememberSelections onClear={handleClear} onConfirm={handleConfirm} onClose={handleClose} onSearchInput={handleSearch} onSearch={handleSearch} onSearchReset={handleSearchReset} onBeforeOpen={handleBeforeOpen} onCancel={handleCancel}>
          {new Array(40).fill('').map((_, index) => {
          const currentProduct = listItems[index % 4];
          const description = \`\${currentProduct.description}\${index}\`;
          const lowerCaseSearchVal = searchVal?.toLowerCase();
          if (searchVal && !description.toLowerCase().includes(lowerCaseSearchVal) && !currentProduct.text.toLowerCase().includes(lowerCaseSearchVal)) {
            return null;
          }
          return <ListItemStandard image={<img src={currentProduct.img} alt="Example Image" />} description={\`\${currentProduct.description}\${index}\`} data-description={\`\${currentProduct.description}\${index}\`} key={\`\${currentProduct.text}\${index}\`} selected={selectedItems[description]} text={currentProduct.text} />;
        }).filter(Boolean)}
        </SelectDialog>
        <FlexBox>
          <Label>Selected: </Label>
          <Text>{products.join(', ')}</Text>
        </FlexBox>
      </>;
  }
}`,...(se=(ae=V.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};const We=["Default","MultiSelect"],bt=Object.freeze(Object.defineProperty({__proto__:null,Default:B,MultiSelect:V,__namedExportsOrder:We,default:He},Symbol.toStringTag,{value:"Module"}));export{bt as C,B as D,V as M};
