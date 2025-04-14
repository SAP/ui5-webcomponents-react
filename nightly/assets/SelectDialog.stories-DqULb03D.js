import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{i as De}from"./utils-C2ystJx6.js";import{b as _}from"./List-COtqWMJI.js";import{r as l}from"./index-U0ga5oGA.js";import{B as I}from"./index-DoqJBpXZ.js";import{L as _e}from"./index-BT6O4HVG.js";import{L as se}from"./index-hsck0mqN.js";import{T as re}from"./index-BCr_l6cl.js";import{F as ce,c as Ie}from"./index-KM_ngbs2.js";import{B as A}from"./Button-C3KIEZ_B.js";import{a as X}from"./Icon-D8gJIGEW.js";import{a as xe}from"./Input-B3QuDz08.js";import{d as Te}from"./decline-CO_yryFo.js";import{s as Be}from"./search-BdVRvW0m.js";import"./CustomElementsScope-lRvT7iCm.js";import{A as qe,k as C}from"./jsx-runtime-BCizSm9J.js";import{c as Y}from"./clsx-B-dksMZM.js";import{u as Ne,n as J,o as Q,p as j,q as Ve,r as Re,i as Le}from"./i18n-defaults-MJtOBd0t.js";import"./index-6PtdTLDJ.js";import{L as Ee}from"./index-BlpWI8MS.js";import{u as ke}from"./useStylesheet-N7C2bzZq.js";import{D as Oe}from"./index-BISko1sP.js";import{T as Pe}from"./index-SttPHCbI.js";import{I as Me}from"./index-dfsSzefZ.js";import{I as ee}from"./index-DZIy6DqY.js";const Ae='@layer ui5-webcomponents-react{._dialog_1gi2q_1::part(header){flex-direction:column;margin-block-end:0;padding-block-end:.25rem}._dialog_1gi2q_1::part(content){padding:0}._headerContent_1gi2q_13{align-items:center;display:grid;grid-template-areas:"titleStart titleCenter cancel" "input input input";grid-template-columns:fit-content(100px) minmax(0,1fr) fit-content(100px);grid-template-rows:var(--_ui5wcr-DialogHeaderHeight) var(--_ui5wcr-DialogSubHeaderHeight);width:100%}._title_1gi2q_24{font-family:var(--sapFontHeaderFamily);font-size:var(--sapFontLargeSize);grid-column-end:titleCenter;grid-column-start:titleStart;max-width:100%;overflow:hidden;text-overflow:ellipsis}._titleCenterAlign_1gi2q_34{grid-area:titleCenter;justify-self:center}._hiddenClearBtn_1gi2q_39{grid-area:titleStart;visibility:hidden}._clearBtn_1gi2q_44{grid-area:cancel;justify-self:end}._input_1gi2q_49{grid-area:input;width:100%}._footer_1gi2q_54{align-items:center;box-sizing:border-box;display:flex;justify-content:flex-end;width:100%}._footer_1gi2q_54>*{margin-inline-start:.5rem}._inputIcon_1gi2q_66{color:var(--sapContent_IconColor);cursor:pointer}._infoBar_1gi2q_71{background-color:var(--sapInfobar_NonInteractive_Background);border-block-end:.0625rem solid var(--sapGroup_TitleBorderColor);color:var(--sapList_TextColor);height:2rem;overflow:hidden;padding-inline-start:var(--_ui5wcr-CheckBoxPaddingInline);position:sticky;top:0;z-index:1}}',r={dialog:"_dialog_1gi2q_1",headerContent:"_headerContent_1gi2q_13",title:"_title_1gi2q_24",titleCenterAlign:"_titleCenterAlign_1gi2q_34",hiddenClearBtn:"_hiddenClearBtn_1gi2q_39",clearBtn:"_clearBtn_1gi2q_44",input:"_input_1gi2q_49",footer:"_footer_1gi2q_54",inputIcon:"_inputIcon_1gi2q_66",infoBar:"_infoBar_1gi2q_71"},m=l.forwardRef((i,S)=>{const{open:c,children:u,className:g,confirmButtonText:v,confirmButtonProps:a,growing:p,headerText:F,headerTextAlignCenter:V,listProps:h={},selectionMode:b=_.Single,numberOfSelectedItems:R,rememberSelections:L,showClearButton:E,onClose:k,onClear:O,onConfirm:w,onLoadMore:U,onSearch:f,onSearchInput:o,onSearchReset:n,onBeforeOpen:D,onBeforeClose:y,onOpen:z,onCancel:P,...ue}=i;ke(Ae,m.displayName);const s=Ne("@ui5/webcomponents-react"),[x,$]=l.useState(""),[M,H]=l.useState([]),[pe,T]=qe(h.ref),[me,B]=l.useState(c);l.useEffect(()=>{B(c)},[c]);const he=e=>{var Z,K;const d=((Z=T.current)==null?void 0:Z.getSelectedItems())??[];typeof D=="function"&&D(e),b===_.Multiple&&((K=T.current)!=null&&K.hasData)&&H(d)},fe=e=>{var d;typeof z=="function"&&z(e),(d=T.current)==null||d.focusFirstItem()},ge=e=>{typeof o=="function"&&o(C(e,{value:e.target.value})),$(e.target.value)},W=e=>{typeof f=="function"&&(e.type==="keyup"&&e.code==="Enter"&&f(C(e,{value:e.target.value})),e.type==="click"&&f(C(e,{value:x})))},ve=e=>{typeof n=="function"&&n(C(e,{prevValue:x})),$("")},be=e=>{typeof(h==null?void 0:h.onSelectionChange)=="function"&&h.onSelectionChange(e),b===_.Multiple?H(e.detail.selectedItems):(typeof w=="function"&&w(e),B(!1))},ye=e=>{B(!1),typeof P=="function"&&P(e)},G=e=>{var d;typeof O=="function"&&O(C(e,{prevSelectedItems:M})),H([]),(d=T.current)==null||d.deselectSelectedItems()},Ce=e=>{typeof w=="function"&&w(C(e,{selectedItems:M})),B(!1)},Se=e=>{var d;B(!1),typeof k=="function"&&k(e),typeof n=="function"&&n(C(e,{prevValue:x})),$(""),L||(d=T.current)==null||d.deselectSelectedItems()},we=e=>{typeof y=="function"&&y(e),typeof P=="function"&&e.detail.escPressed&&P(e)};return t.jsxs(Oe,{...ue,open:me,"data-component-name":"SelectDialog",ref:S,className:Y(r.dialog,g),onClose:Se,onBeforeOpen:he,onOpen:fe,onBeforeClose:we,children:[t.jsxs("div",{className:r.headerContent,slot:"header",children:[E&&V&&t.jsx(I,{onClick:G,design:A.Transparent,className:r.hiddenClearBtn,tabIndex:-1,"aria-hidden":"true",children:s.getText(J)}),t.jsx(Pe,{className:Y(r.title,V&&r.titleCenterAlign),children:F}),E&&t.jsx(I,{onClick:G,design:A.Transparent,className:r.clearBtn,children:s.getText(J)}),t.jsx(Me,{className:r.input,accessibleName:s.getText(j),value:x,placeholder:s.getText(j),onInput:ge,onKeyUp:W,type:xe.Search,icon:t.jsxs(t.Fragment,{children:[x&&t.jsx(ee,{accessibleName:s.getText(Q),title:s.getText(Q),name:Te,mode:X.Interactive,onClick:ve,className:r.inputIcon}),t.jsx(ee,{mode:X.Interactive,name:Be,className:r.inputIcon,onClick:W,accessibleName:s.getText(j),title:s.getText(j)})]})})]}),b===_.Multiple&&(!!M.length||R>0)&&t.jsx(ce,{alignItems:Ie.Center,className:r.infoBar,children:t.jsx(re,{children:`${s.getText(Ve)}: ${R??M.length}`})}),t.jsx(Ee,{...h,ref:pe,growing:p,onLoadMore:U,selectionMode:b,onSelectionChange:be,children:u}),t.jsxs("div",{slot:"footer",className:r.footer,children:[b===_.Multiple&&t.jsx(I,{...a,onClick:Ce,design:A.Emphasized,children:v??s.getText(Re)}),t.jsx(I,{onClick:ye,design:A.Transparent,children:s.getText(Le)})]})]})});m.displayName="SelectDialog";try{m.displayName="SelectDialog",m.__docgenInfo={description:"The SelectDialog enables users to filter a comprehensive list via a search field and to select one or more items.",displayName:"SelectDialog",props:{children:{defaultValue:null,description:"Defines the list items of the component.\n\n__Note:__ Although this prop accepts all HTML Elements and therefore also all list items, it is strongly recommended that you only use `ListItemStandard` in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},showClearButton:{defaultValue:null,description:"This flag controls whether the Clear button is shown. When set to `true`, it provides a way to clear selections. We recommend enabling the Clear button in cases where a mechanism to delete the selection is required: In single selection mode (default mode) or when `rememberSelections` is set to `true`.",name:"showClearButton",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"Defines the header text.",name:"headerText",required:!1,type:{name:"string"}},headerTextAlignCenter:{defaultValue:null,description:"Specifies the `headerText` alignment.",name:"headerTextAlignCenter",required:!1,type:{name:"boolean"}},confirmButtonText:{defaultValue:null,description:"Overwrites the default text for the confirmation button.",name:"confirmButtonText",required:!1,type:{name:"string"}},rememberSelections:{defaultValue:null,description:"This flag controls whether the dialog clears the selection after the confirm event has been fired. If the dialog needs to be opened multiple times in the same context to allow for corrections of previous user inputs, set this flag to `true`.\n\n__Note:__ This won't work if the dialog is unmounted, if you want to unmount the dialog when closed, you need to persist the selection yourself.",name:"rememberSelections",required:!1,type:{name:"boolean"}},numberOfSelectedItems:{defaultValue:null,description:"Defines the number of selected list items displayed above the list in `MultiSelect` mode. Programmatically setting the counter is necessary if all previously selected elements are to remain selected during search.",name:"numberOfSelectedItems",required:!1,type:{name:"number"}},selectionMode:{defaultValue:{value:"ListSelectionMode.Single"},description:"Defines the mode of the SelectDialog list.\n\n__Note:__ Although this prop accepts all `ListSelectionMode`s, it is strongly recommended that you only use `Single` or `Multiple` in order to preserve the intended design.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Delete"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"None"'},{value:'"Single"'},{value:'"SingleStart"'},{value:'"SingleEnd"'},{value:'"SingleAuto"'},{value:'"Multiple"'},{value:'"Delete"'},{value:'"SingleStart"'},{value:'"SingleEnd"'},{value:'"SingleAuto"'}]}},listProps:{defaultValue:{value:"{}"},description:"Defines props you can pass to the internal `List` component.\n\n__Note:__ `selectionMode`, `children`, `growing`, `onLoadMore` and `footerText` are not supported.",name:"listProps",required:!1,type:{name:'Omit<ListPropTypes, "children" | "footerText" | "growing" | "selectionMode" | "onLoadMore">'}},confirmButtonProps:{defaultValue:null,description:"Defines the props of the confirm button.\n\n__Note:__`onClick` and `design` are not supported.\n@since 1.25.0",name:"confirmButtonProps",required:!1,type:{name:'Omit<ButtonPropTypes, "onClick" | "design">'}},onSearchInput:{defaultValue:null,description:"This event will be fired when the value of the search field is changed by a user - e.g. at each key press",name:"onSearchInput",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void"}},onSearch:{defaultValue:null,description:"This event will be fired when the search button has been clicked or the ENTER key has been pressed in the search field.",name:"onSearch",required:!1,type:{name:"((event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void) | ((event: Ui5CustomEvent<IconDomRef, { value: string; }>) => void)"}},onSearchReset:{defaultValue:null,description:"This event will be fired when the reset button has been clicked in the search field or when the dialog is closed.",name:"onSearchReset",required:!1,type:{name:"(event: Ui5CustomEvent<{ prevValue: string; nativeDetail?: number; }, never>) => void"}},onClear:{defaultValue:null,description:"This event will be fired when the clear button has been clicked.",name:"onClear",required:!1,type:{name:"(event: Ui5CustomEvent<ButtonDomRef, { prevSelectedItems: ListItemStandardDomRef[]; nativeDetail: number; }>) => void"}},onConfirm:{defaultValue:null,description:"This event will be fired when the dialog is confirmed by selecting an item in single selection mode or by pressing the confirmation button in multi selection mode.",name:"onConfirm",required:!1,type:{name:"((event: Ui5CustomEvent<ListDomRef, { selectedItems: ListItemStandardDomRef[]; }>) => void) | ((event: Ui5CustomEvent<ButtonDomRef, { ...; }>) => void)"}},onCancel:{defaultValue:null,description:"This event will be fired when the cancel button is clicked or ESC key is pressed.",name:"onCancel",required:!1,type:{name:"MouseEventHandler<ButtonDomRef> | ((event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void)"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},draggable:{defaultValue:{value:"false"},description:`Determines whether the component is draggable.
If this property is set to true, the Dialog will be draggable by its header.

**Note:** The component can be draggable only in desktop mode.

**Note:** This property overrides the default HTML "draggable" attribute native behavior.
When "draggable" is set to true, the native browser "draggable"
behavior is prevented and only the Dialog custom logic ("draggable by its header") works.`,name:"draggable",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},onClose:{defaultValue:null,description:`Fired after the component is closed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Defines the IDs of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Dialog"'},description:`Allows setting a custom role.

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},initialFocus:{defaultValue:{value:"undefined"},description:"Defines the ID of the HTML Element, which will get the initial focus.\n\n**Note:** If an element with `autofocus` attribute is added inside the component,\n`initialFocus` won't take effect.",name:"initialFocus",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:`Indicates if the element is open

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},preventFocusRestore:{defaultValue:{value:"false"},description:`Defines if the focus should be returned to the previously focused element,
when the popup closes.`,name:"preventFocusRestore",required:!1,type:{name:"boolean"}},preventInitialFocus:{defaultValue:{value:"false"},description:`Indicates whether initial focus should be prevented.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"preventInitialFocus",required:!1,type:{name:"boolean"}},resizable:{defaultValue:{value:"false"},description:`Configures the component to be resizable.
If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages.
In RTL languages, the resize handle will be placed in the bottom left corner.

**Note:** The component can be resizable only in desktop mode.

**Note:** Upon resizing, externally defined height and width styling will be ignored.`,name:"resizable",required:!1,type:{name:"boolean"}},stretch:{defaultValue:{value:"false"},description:`Determines if the dialog will be stretched to full screen on mobile. On desktop,
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
| ❌|❌|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},growing:{defaultValue:{value:'"None"'},description:'Defines whether the component will have growing capability either by pressing a `More` button,\nor via user scroll. In both cases `load-more` event is fired.\n\n**Restrictions:** `growing="Scroll"` is not supported for Internet Explorer,\non IE the component will fallback to `growing="Button"`.',name:"growing",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"None"'}]}},onLoadMore:{defaultValue:null,description:`Fired when the user scrolls to the bottom of the list.

**Note:** The event is fired when the \`growing='Scroll'\` property is enabled.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, never>) => void"}}}}}catch{}try{m.displayName="SelectDialog",m.__docgenInfo={description:"The SelectDialog enables users to filter a comprehensive list via a search field and to select one or more items.",displayName:"SelectDialog",props:{children:{defaultValue:null,description:"Defines the list items of the component.\n\n__Note:__ Although this prop accepts all HTML Elements and therefore also all list items, it is strongly recommended that you only use `ListItemStandard` in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},showClearButton:{defaultValue:null,description:"This flag controls whether the Clear button is shown. When set to `true`, it provides a way to clear selections. We recommend enabling the Clear button in cases where a mechanism to delete the selection is required: In single selection mode (default mode) or when `rememberSelections` is set to `true`.",name:"showClearButton",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"Defines the header text.",name:"headerText",required:!1,type:{name:"string"}},headerTextAlignCenter:{defaultValue:null,description:"Specifies the `headerText` alignment.",name:"headerTextAlignCenter",required:!1,type:{name:"boolean"}},confirmButtonText:{defaultValue:null,description:"Overwrites the default text for the confirmation button.",name:"confirmButtonText",required:!1,type:{name:"string"}},rememberSelections:{defaultValue:null,description:"This flag controls whether the dialog clears the selection after the confirm event has been fired. If the dialog needs to be opened multiple times in the same context to allow for corrections of previous user inputs, set this flag to `true`.\n\n__Note:__ This won't work if the dialog is unmounted, if you want to unmount the dialog when closed, you need to persist the selection yourself.",name:"rememberSelections",required:!1,type:{name:"boolean"}},numberOfSelectedItems:{defaultValue:null,description:"Defines the number of selected list items displayed above the list in `MultiSelect` mode. Programmatically setting the counter is necessary if all previously selected elements are to remain selected during search.",name:"numberOfSelectedItems",required:!1,type:{name:"number"}},selectionMode:{defaultValue:{value:"ListSelectionMode.Single"},description:"Defines the mode of the SelectDialog list.\n\n__Note:__ Although this prop accepts all `ListSelectionMode`s, it is strongly recommended that you only use `Single` or `Multiple` in order to preserve the intended design.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Delete"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"None"'},{value:'"Single"'},{value:'"SingleStart"'},{value:'"SingleEnd"'},{value:'"SingleAuto"'},{value:'"Multiple"'},{value:'"Delete"'},{value:'"SingleStart"'},{value:'"SingleEnd"'},{value:'"SingleAuto"'}]}},listProps:{defaultValue:{value:"{}"},description:"Defines props you can pass to the internal `List` component.\n\n__Note:__ `selectionMode`, `children`, `growing`, `onLoadMore` and `footerText` are not supported.",name:"listProps",required:!1,type:{name:'Omit<ListPropTypes, "children" | "footerText" | "growing" | "selectionMode" | "onLoadMore">'}},confirmButtonProps:{defaultValue:null,description:"Defines the props of the confirm button.\n\n__Note:__`onClick` and `design` are not supported.\n@since 1.25.0",name:"confirmButtonProps",required:!1,type:{name:'Omit<ButtonPropTypes, "onClick" | "design">'}},onSearchInput:{defaultValue:null,description:"This event will be fired when the value of the search field is changed by a user - e.g. at each key press",name:"onSearchInput",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void"}},onSearch:{defaultValue:null,description:"This event will be fired when the search button has been clicked or the ENTER key has been pressed in the search field.",name:"onSearch",required:!1,type:{name:"((event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void) | ((event: Ui5CustomEvent<IconDomRef, { value: string; }>) => void)"}},onSearchReset:{defaultValue:null,description:"This event will be fired when the reset button has been clicked in the search field or when the dialog is closed.",name:"onSearchReset",required:!1,type:{name:"(event: Ui5CustomEvent<{ prevValue: string; nativeDetail?: number; }, never>) => void"}},onClear:{defaultValue:null,description:"This event will be fired when the clear button has been clicked.",name:"onClear",required:!1,type:{name:"(event: Ui5CustomEvent<ButtonDomRef, { prevSelectedItems: ListItemStandardDomRef[]; nativeDetail: number; }>) => void"}},onConfirm:{defaultValue:null,description:"This event will be fired when the dialog is confirmed by selecting an item in single selection mode or by pressing the confirmation button in multi selection mode.",name:"onConfirm",required:!1,type:{name:"((event: Ui5CustomEvent<ListDomRef, { selectedItems: ListItemStandardDomRef[]; }>) => void) | ((event: Ui5CustomEvent<ButtonDomRef, { ...; }>) => void)"}},onCancel:{defaultValue:null,description:"This event will be fired when the cancel button is clicked or ESC key is pressed.",name:"onCancel",required:!1,type:{name:"MouseEventHandler<ButtonDomRef> | ((event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void)"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},draggable:{defaultValue:{value:"false"},description:`Determines whether the component is draggable.
If this property is set to true, the Dialog will be draggable by its header.

**Note:** The component can be draggable only in desktop mode.

**Note:** This property overrides the default HTML "draggable" attribute native behavior.
When "draggable" is set to true, the native browser "draggable"
behavior is prevented and only the Dialog custom logic ("draggable by its header") works.`,name:"draggable",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},onClose:{defaultValue:null,description:`Fired after the component is closed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Defines the IDs of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Dialog"'},description:`Allows setting a custom role.

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},initialFocus:{defaultValue:{value:"undefined"},description:"Defines the ID of the HTML Element, which will get the initial focus.\n\n**Note:** If an element with `autofocus` attribute is added inside the component,\n`initialFocus` won't take effect.",name:"initialFocus",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:`Indicates if the element is open

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},preventFocusRestore:{defaultValue:{value:"false"},description:`Defines if the focus should be returned to the previously focused element,
when the popup closes.`,name:"preventFocusRestore",required:!1,type:{name:"boolean"}},preventInitialFocus:{defaultValue:{value:"false"},description:`Indicates whether initial focus should be prevented.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"preventInitialFocus",required:!1,type:{name:"boolean"}},resizable:{defaultValue:{value:"false"},description:`Configures the component to be resizable.
If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages.
In RTL languages, the resize handle will be placed in the bottom left corner.

**Note:** The component can be resizable only in desktop mode.

**Note:** Upon resizing, externally defined height and width styling will be ignored.`,name:"resizable",required:!1,type:{name:"boolean"}},stretch:{defaultValue:{value:"false"},description:`Determines if the dialog will be stretched to full screen on mobile. On desktop,
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
| ❌|❌|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},growing:{defaultValue:{value:'"None"'},description:'Defines whether the component will have growing capability either by pressing a `More` button,\nor via user scroll. In both cases `load-more` event is fired.\n\n**Restrictions:** `growing="Scroll"` is not supported for Internet Explorer,\non IE the component will fallback to `growing="Button"`.',name:"growing",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"None"'}]}},onLoadMore:{defaultValue:null,description:`Fired when the user scrolls to the bottom of the list.

**Note:** The event is fired when the \`growing='Scroll'\` property is enabled.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, never>) => void"}}}}}catch{}const je=""+new URL("Laptop1-BiqZozDV.jpg",import.meta.url).href,Fe=""+new URL("Laptop2-CLTht4yo.jpg",import.meta.url).href,Ue=""+new URL("PC1-BekXrNHY.jpg",import.meta.url).href,$e=""+new URL("PC2-DZLCUDFz.jpg",import.meta.url).href,He={title:"Modals & Popovers / SelectDialog",component:m,argTypes:{children:{control:{disable:!0}}},args:{headerText:"Select Product",open:De},parameters:{chromatic:{delay:1e3}},tags:["package:@ui5/webcomponents","cem-module:Dialog"]},de=[{img:je,description:"LT-10",text:"Gaming Laptop"},{img:Fe,description:"LT-20",text:"Business Laptop"},{img:$e,description:"HT-10",text:"Gaming PC"},{img:Ue,description:"HT-20",text:"Business PC"}],q={render:i=>{const[S,c]=l.useState(i.open),u=()=>{c(!0)},g=v=>{c(!1),i.onClose(v)};return l.useEffect(()=>{c(i.open)},[i.open]),t.jsxs(t.Fragment,{children:[t.jsx(I,{onClick:u,children:"Open SelectDialog"}),t.jsx(m,{...i,open:S,onClose:g,children:new Array(40).fill("").map((v,a)=>{const p=de[a%4];return t.jsx(se,{selected:a===1,image:t.jsx("img",{src:p.img,alt:"Example Image"}),description:`${p.description}${a}`,children:p.text},`${p.text}${a}`)})})]})}},N={render:()=>{const[i,S]=l.useState(!1),c={"HT-102":!0,"HT-203":!0,"HT-1038":!0},[u,g]=l.useState(c),v=l.useRef(u),[a,p]=l.useState(),[F,V]=l.useState(Object.keys(c)),h=()=>{v.current=u},b=()=>{S(!0)},R=()=>{S(!1)},L=f=>{p(f.detail.value)},E=()=>{p(void 0)},k=f=>{const o=f.detail.targetItem.dataset.description;g(n=>{if(n[o]){const{[o]:D,...y}=n;return y}else return{...n,[o]:!0}})},O=()=>{g({})},w=()=>{V(Object.keys(u))},U=()=>{g(v.current)};return t.jsxs(t.Fragment,{children:[t.jsx(I,{onClick:b,children:"Open Dialog"}),t.jsx(m,{open:i,selectionMode:_.Multiple,numberOfSelectedItems:Object.keys(u).length,listProps:{onSelectionChange:k},showClearButton:!0,rememberSelections:!0,onClear:O,onConfirm:w,onClose:R,onSearchInput:L,onSearch:L,onSearchReset:E,onBeforeOpen:h,onCancel:U,children:new Array(40).fill("").map((f,o)=>{const n=de[o%4],D=`${n.description}${o}`,y=a==null?void 0:a.toLowerCase();return a&&!D.toLowerCase().includes(y)&&!n.text.toLowerCase().includes(y)?null:t.jsx(se,{image:t.jsx("img",{src:n.img,alt:"Example Image"}),description:`${n.description}${o}`,"data-description":`${n.description}${o}`,selected:u[D],children:n.text},`${n.text}${o}`)}).filter(Boolean)}),t.jsxs(ce,{children:[t.jsx(_e,{children:"Selected: "}),t.jsx(re,{children:F.join(", ")})]})]})}};var te,ne,oe;q.parameters={...q.parameters,docs:{...(te=q.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
          return <ListItemStandard selected={index === 1} image={<img src={currentProduct.img} alt="Example Image" />} description={\`\${currentProduct.description}\${index}\`} key={\`\${currentProduct.text}\${index}\`}>
                {currentProduct.text}
              </ListItemStandard>;
        })}
        </SelectDialog>
      </>;
  }
}`,...(oe=(ne=q.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var le,ie,ae;N.parameters={...N.parameters,docs:{...(le=N.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
          return <ListItemStandard image={<img src={currentProduct.img} alt="Example Image" />} description={\`\${currentProduct.description}\${index}\`} data-description={\`\${currentProduct.description}\${index}\`} key={\`\${currentProduct.text}\${index}\`} selected={selectedItems[description]}>
                  {currentProduct.text}
                </ListItemStandard>;
        }).filter(Boolean)}
        </SelectDialog>
        <FlexBox>
          <Label>Selected: </Label>
          <Text>{products.join(', ')}</Text>
        </FlexBox>
      </>;
  }
}`,...(ae=(ie=N.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};const ze=["Default","MultiSelect"],vt=Object.freeze(Object.defineProperty({__proto__:null,Default:q,MultiSelect:N,__namedExportsOrder:ze,default:He},Symbol.toStringTag,{value:"Module"}));export{vt as C,q as D,N as M};
