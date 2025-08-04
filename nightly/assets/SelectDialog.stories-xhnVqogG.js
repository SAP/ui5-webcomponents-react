import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{i as Se}from"./utils-C8oRburP.js";import{b as D}from"./List-DPa82ePk.js";import{r as i}from"./index-CEr2UAyE.js";import{B as x}from"./index-BTImLLsO.js";import{L as we}from"./index-DspB395S.js";import{L as le}from"./index-f4KjJaat.js";import{T as ae}from"./index-g22nm93k.js";import{F as se,c as _e}from"./index-C5VKFbIU.js";import{B as M}from"./Button-BAohpRXl.js";import{a as De}from"./Icon-BC8KE6RK.js";import{a as xe}from"./Input-J1QehVse.js";import{T as Ie}from"./Title-BTb5jHlz.js";import{s as Te}from"./search-mET5TEas.js";import"./CustomElementsScope-CraI7z9b.js";import{A as Be,k as C}from"./jsx-runtime-xa789Fx-.js";import{c as Y}from"./clsx-B-dksMZM.js";import{u as Ne,n as J,o as j,p as Ve,q as Re,i as ke}from"./i18n-defaults-STWvP3WT.js";import"./index-BWmLiuWl.js";import{L as qe}from"./index-BGNjzVxN.js";import{u as Le}from"./useStylesheet-Dh6tKsMV.js";import{D as Ee}from"./index-Q2ZmhNoh.js";import{T as Oe}from"./index-DvktgRJV.js";import{I as Pe}from"./index-C7JawZaJ.js";import{I as Ae}from"./index-BUASso1G.js";const Me='@layer ui5-webcomponents-react{._dialog_3uhsn_1::part(header){flex-direction:column;margin-block-end:0;padding-block-end:.25rem}._dialog_3uhsn_1::part(content){padding:0}._headerContent_3uhsn_13{align-items:center;display:grid;grid-template-areas:"titleStart titleCenter cancel" "input input input";grid-template-columns:fit-content(100px) minmax(0,1fr) fit-content(100px);grid-template-rows:var(--_ui5wcr-DialogHeaderHeight) var(--_ui5wcr-DialogSubHeaderHeight);width:100%}._title_3uhsn_24{font-family:var(--sapFontHeaderFamily);font-size:var(--sapFontLargeSize);grid-column-end:titleCenter;grid-column-start:titleStart;max-width:100%;overflow:hidden;text-overflow:ellipsis}._titleCenterAlign_3uhsn_34{grid-area:titleCenter;justify-self:center}._hiddenClearBtn_3uhsn_39{grid-area:titleStart;visibility:hidden}._clearBtn_3uhsn_44{grid-area:cancel;justify-self:end}._input_3uhsn_49{grid-area:input;width:100%}._footer_3uhsn_54{align-items:center;box-sizing:border-box;display:flex;justify-content:flex-end;width:100%}._footer_3uhsn_54>*{margin-inline-start:.5rem}._inputIcon_3uhsn_66{color:var(--sapField_TextColor);cursor:pointer}._inputIcon_3uhsn_66:hover{background-color:var(--_ui5-v2-12-0_input_icon_hover_bg);box-shadow:var(--sapField_Hover_Shadow)}._inputIcon_3uhsn_66:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--sapField_Hover_Shadow);color:var(--sapButton_Active_TextColor)}._infoBar_3uhsn_82{background-color:var(--sapInfobar_NonInteractive_Background);border-block-end:.0625rem solid var(--sapGroup_TitleBorderColor);color:var(--sapList_TextColor);height:2rem;overflow:hidden;padding-inline-start:var(--_ui5wcr-CheckBoxPaddingInline);position:sticky;top:0;z-index:1}}',c={dialog:"_dialog_3uhsn_1",headerContent:"_headerContent_3uhsn_13",title:"_title_3uhsn_24",titleCenterAlign:"_titleCenterAlign_3uhsn_34",hiddenClearBtn:"_hiddenClearBtn_3uhsn_39",clearBtn:"_clearBtn_3uhsn_44",input:"_input_3uhsn_49",footer:"_footer_3uhsn_54",inputIcon:"_inputIcon_3uhsn_66",infoBar:"_infoBar_3uhsn_82"},p=i.forwardRef((l,S)=>{const{accessibleName:m,open:a,children:g,className:v,confirmButtonText:s,confirmButtonProps:u,growing:F,headerText:R,headerTextAlignCenter:k,listProps:h={},selectionMode:b=D.Single,numberOfSelectedItems:I,rememberSelections:U,showClearButton:q,onClose:L,onClear:E,onConfirm:w,onLoadMore:_,onSearch:o,onSearchInput:n,onSearchReset:f,onBeforeOpen:y,onBeforeClose:z,onOpen:W,onCancel:O,...ce}=l;Le(Me,p.displayName);const d=Ne("@ui5/webcomponents-react"),[P,$]=i.useState(""),[A,H]=i.useState([]),[ue,T]=Be(h.ref),[de,B]=i.useState(a);i.useEffect(()=>{B(a)},[a]);const pe=e=>{var K,X;const r=((K=T.current)==null?void 0:K.getSelectedItems())??[];typeof y=="function"&&y(e),b===D.Multiple&&((X=T.current)!=null&&X.hasData)&&H(r)},me=e=>{var r;typeof W=="function"&&W(e),(r=T.current)==null||r.focusFirstItem()},he=e=>{!e.target.value&&e.detail.inputType===""&&fe(e),typeof n=="function"&&n(C(e,{value:e.target.value})),$(e.target.value)},G=e=>{typeof o=="function"&&(e.type==="keyup"&&e.code==="Enter"&&o(C(e,{value:e.target.value})),e.type==="click"&&o(C(e,{value:P})))},fe=e=>{typeof f=="function"&&f(C(e,{prevValue:P})),$("")},ge=e=>{typeof(h==null?void 0:h.onSelectionChange)=="function"&&h.onSelectionChange(e),b===D.Multiple?H(e.detail.selectedItems):(typeof w=="function"&&w(e),B(!1))},ve=e=>{B(!1),typeof O=="function"&&O(e)},Z=e=>{var r;typeof E=="function"&&E(C(e,{prevSelectedItems:A})),H([]),(r=T.current)==null||r.deselectSelectedItems()},be=e=>{typeof w=="function"&&w(C(e,{selectedItems:A})),B(!1)},ye=e=>{var r;B(!1),typeof L=="function"&&L(e),typeof f=="function"&&f(C(e,{prevValue:P})),$(""),U||(r=T.current)==null||r.deselectSelectedItems()},Ce=e=>{typeof z=="function"&&z(e),typeof O=="function"&&e.detail.escPressed&&O(e)};return t.jsxs(Ee,{...ce,open:de,"data-component-name":"SelectDialog",ref:S,className:Y(c.dialog,v),onClose:ye,onBeforeOpen:pe,onOpen:me,onBeforeClose:Ce,accessibleName:m??R,children:[t.jsxs("div",{className:c.headerContent,slot:"header","data-sap-ui-fastnavgroup":"true",children:[q&&k&&t.jsx(x,{onClick:Z,design:M.Transparent,className:c.hiddenClearBtn,tabIndex:-1,"aria-hidden":"true",children:d.getText(J)}),t.jsx(Oe,{className:Y(c.title,k&&c.titleCenterAlign),level:Ie.H1,children:R}),q&&t.jsx(x,{onClick:Z,design:M.Transparent,className:c.clearBtn,children:d.getText(J)}),t.jsx(Pe,{className:c.input,accessibleName:d.getText(j),value:P,placeholder:d.getText(j),onInput:he,onKeyUp:G,type:xe.Search,showClearIcon:!0,icon:t.jsx(t.Fragment,{children:t.jsx(Ae,{mode:De.Decorative,name:Te,className:c.inputIcon,onClick:G,accessibleName:d.getText(j),title:d.getText(j)})})})]}),b===D.Multiple&&(!!A.length||I>0)&&t.jsx(se,{alignItems:_e.Center,className:c.infoBar,children:t.jsx(ae,{children:`${d.getText(Ve)}: ${I??A.length}`})}),t.jsx(qe,{...h,ref:ue,growing:F,onLoadMore:_,selectionMode:b,onSelectionChange:ge,"data-sap-ui-fastnavgroup":"true",children:g}),t.jsxs("div",{slot:"footer",className:c.footer,"data-sap-ui-fastnavgroup":"true",children:[b===D.Multiple&&t.jsx(x,{...u,onClick:be,design:M.Emphasized,children:s??d.getText(Re)}),t.jsx(x,{onClick:ve,design:M.Transparent,children:d.getText(ke)})]})]})});p.displayName="SelectDialog";try{p.displayName="SelectDialog",p.__docgenInfo={description:"The SelectDialog enables users to filter a comprehensive list via a search field and to select one or more items.",displayName:"SelectDialog",props:{accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the component.\n\n__Note:__ If not set, the dialog uses the `headerText` for its accessible name.",name:"accessibleName",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Defines the list items of the component.\n\n__Note:__ Although this prop accepts all HTML Elements and therefore also all list items, it is strongly recommended that you only use `ListItemStandard` in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},showClearButton:{defaultValue:null,description:"This flag controls whether the Clear button is shown. When set to `true`, it provides a way to clear selections. We recommend enabling the Clear button in cases where a mechanism to delete the selection is required: In single selection mode (default mode) or when `rememberSelections` is set to `true`.",name:"showClearButton",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"Defines the header text.",name:"headerText",required:!1,type:{name:"string"}},headerTextAlignCenter:{defaultValue:null,description:"Specifies the `headerText` alignment.",name:"headerTextAlignCenter",required:!1,type:{name:"boolean"}},confirmButtonText:{defaultValue:null,description:"Overwrites the default text for the confirmation button.",name:"confirmButtonText",required:!1,type:{name:"string"}},rememberSelections:{defaultValue:null,description:"This flag controls whether the dialog clears the selection after the confirm event has been fired. If the dialog needs to be opened multiple times in the same context to allow for corrections of previous user inputs, set this flag to `true`.\n\n__Note:__ This won't work if the dialog is unmounted, if you want to unmount the dialog when closed, you need to persist the selection yourself.",name:"rememberSelections",required:!1,type:{name:"boolean"}},numberOfSelectedItems:{defaultValue:null,description:"Defines the number of selected list items displayed above the list in `MultiSelect` mode. Programmatically setting the counter is necessary if all previously selected elements are to remain selected during search.",name:"numberOfSelectedItems",required:!1,type:{name:"number"}},selectionMode:{defaultValue:{value:"ListSelectionMode.Single"},description:"Defines the mode of the SelectDialog list.\n\n__Note:__ Although this prop accepts all `ListSelectionMode`s, it is strongly recommended that you only use `Single` or `Multiple` in order to preserve the intended design.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Delete"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"None"'},{value:'"Single"'},{value:'"SingleStart"'},{value:'"SingleEnd"'},{value:'"SingleAuto"'},{value:'"Multiple"'},{value:'"Delete"'},{value:'"SingleStart"'},{value:'"SingleEnd"'},{value:'"SingleAuto"'}]}},listProps:{defaultValue:{value:"{}"},description:"Defines props you can pass to the internal `List` component.\n\n__Note:__ `selectionMode`, `children`, `growing`, `onLoadMore` and `footerText` are not supported.",name:"listProps",required:!1,type:{name:'Omit<ListPropTypes, "children" | "selectionMode" | "onLoadMore" | "growing" | "footerText">'}},confirmButtonProps:{defaultValue:null,description:"Defines the props of the confirm button.\n\n__Note:__`onClick` and `design` are not supported.\n@since 1.25.0",name:"confirmButtonProps",required:!1,type:{name:'Omit<ButtonPropTypes, "onClick" | "design">'}},onSearchInput:{defaultValue:null,description:"This event will be fired when the value of the search field is changed by a user - e.g. at each key press",name:"onSearchInput",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void"}},onSearch:{defaultValue:null,description:"This event will be fired when the search button has been clicked or the ENTER key has been pressed in the search field.",name:"onSearch",required:!1,type:{name:"((event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void) | ((event: Ui5CustomEvent<IconDomRef, { value: string; }>) => void)"}},onSearchReset:{defaultValue:null,description:"This event will be fired when the reset button has been clicked in the search field or when the dialog is closed.",name:"onSearchReset",required:!1,type:{name:"(event: Ui5CustomEvent<{ prevValue: string; nativeDetail?: number; }, never>) => void"}},onClear:{defaultValue:null,description:"This event will be fired when the clear button has been clicked.",name:"onClear",required:!1,type:{name:"(event: Ui5CustomEvent<ButtonDomRef, { prevSelectedItems: ListItemStandardDomRef[]; nativeDetail: number; }>) => void"}},onConfirm:{defaultValue:null,description:"This event will be fired when the dialog is confirmed by selecting an item in single selection mode or by pressing the confirmation button in multi selection mode.",name:"onConfirm",required:!1,type:{name:"((event: Ui5CustomEvent<ListDomRef, { selectedItems: ListItemStandardDomRef[]; }>) => void) | ((event: Ui5CustomEvent<ButtonDomRef, { ...; }>) => void)"}},onCancel:{defaultValue:null,description:"This event will be fired when the cancel button is clicked or ESC key is pressed.",name:"onCancel",required:!1,type:{name:"((event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void) | ((event: Ui5CustomEvent<ButtonDomRef, ButtonClickEventDetail>) => void)"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},draggable:{defaultValue:{value:"false"},description:`Determines whether the component is draggable.
If this property is set to true, the Dialog will be draggable by its header.

**Note:** The component can be draggable only in desktop mode.

**Note:** This property overrides the default HTML "draggable" attribute native behavior.
When "draggable" is set to true, the native browser "draggable"
behavior is prevented and only the Dialog custom logic ("draggable by its header") works.`,name:"draggable",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},resizable:{defaultValue:{value:"false"},description:`Configures the component to be resizable.
If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages.
In RTL languages, the resize handle will be placed in the bottom left corner.

**Note:** The component can be resizable only in desktop mode.

**Note:** Upon resizing, externally defined height and width styling will be ignored.`,name:"resizable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:`Fired after the component is closed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Defines the IDs of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:`Indicates if the element is open

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},initialFocus:{defaultValue:{value:"undefined"},description:"Defines the ID of the HTML Element, which will get the initial focus.\n\n**Note:** If an element with `autofocus` attribute is added inside the component,\n`initialFocus` won't take effect.",name:"initialFocus",required:!1,type:{name:"string"}},accessibleDescription:{defaultValue:{value:"undefined"},description:`Defines the accessible description of the component.

**Note:** Available since [v2.11.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents**.`,name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleDescriptionRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that describe the component.

**Note:** Available since [v2.11.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents**.`,name:"accessibleDescriptionRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Dialog"'},description:`Allows setting a custom role.

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},preventFocusRestore:{defaultValue:{value:"false"},description:`Defines if the focus should be returned to the previously focused element,
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
| ❌|✅|`,name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, never>) => void"}},growing:{defaultValue:{value:'"None"'},description:'Defines whether the component will have growing capability either by pressing a `More` button,\nor via user scroll. In both cases `load-more` event is fired.\n\n**Restrictions:** `growing="Scroll"` is not supported for Internet Explorer,\non IE the component will fallback to `growing="Button"`.',name:"growing",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"None"'}]}}}}}catch{}try{p.displayName="SelectDialog",p.__docgenInfo={description:"The SelectDialog enables users to filter a comprehensive list via a search field and to select one or more items.",displayName:"SelectDialog",props:{accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the component.\n\n__Note:__ If not set, the dialog uses the `headerText` for its accessible name.",name:"accessibleName",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Defines the list items of the component.\n\n__Note:__ Although this prop accepts all HTML Elements and therefore also all list items, it is strongly recommended that you only use `ListItemStandard` in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},showClearButton:{defaultValue:null,description:"This flag controls whether the Clear button is shown. When set to `true`, it provides a way to clear selections. We recommend enabling the Clear button in cases where a mechanism to delete the selection is required: In single selection mode (default mode) or when `rememberSelections` is set to `true`.",name:"showClearButton",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"Defines the header text.",name:"headerText",required:!1,type:{name:"string"}},headerTextAlignCenter:{defaultValue:null,description:"Specifies the `headerText` alignment.",name:"headerTextAlignCenter",required:!1,type:{name:"boolean"}},confirmButtonText:{defaultValue:null,description:"Overwrites the default text for the confirmation button.",name:"confirmButtonText",required:!1,type:{name:"string"}},rememberSelections:{defaultValue:null,description:"This flag controls whether the dialog clears the selection after the confirm event has been fired. If the dialog needs to be opened multiple times in the same context to allow for corrections of previous user inputs, set this flag to `true`.\n\n__Note:__ This won't work if the dialog is unmounted, if you want to unmount the dialog when closed, you need to persist the selection yourself.",name:"rememberSelections",required:!1,type:{name:"boolean"}},numberOfSelectedItems:{defaultValue:null,description:"Defines the number of selected list items displayed above the list in `MultiSelect` mode. Programmatically setting the counter is necessary if all previously selected elements are to remain selected during search.",name:"numberOfSelectedItems",required:!1,type:{name:"number"}},selectionMode:{defaultValue:{value:"ListSelectionMode.Single"},description:"Defines the mode of the SelectDialog list.\n\n__Note:__ Although this prop accepts all `ListSelectionMode`s, it is strongly recommended that you only use `Single` or `Multiple` in order to preserve the intended design.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Delete"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"None"'},{value:'"Single"'},{value:'"SingleStart"'},{value:'"SingleEnd"'},{value:'"SingleAuto"'},{value:'"Multiple"'},{value:'"Delete"'},{value:'"SingleStart"'},{value:'"SingleEnd"'},{value:'"SingleAuto"'}]}},listProps:{defaultValue:{value:"{}"},description:"Defines props you can pass to the internal `List` component.\n\n__Note:__ `selectionMode`, `children`, `growing`, `onLoadMore` and `footerText` are not supported.",name:"listProps",required:!1,type:{name:'Omit<ListPropTypes, "children" | "selectionMode" | "onLoadMore" | "growing" | "footerText">'}},confirmButtonProps:{defaultValue:null,description:"Defines the props of the confirm button.\n\n__Note:__`onClick` and `design` are not supported.\n@since 1.25.0",name:"confirmButtonProps",required:!1,type:{name:'Omit<ButtonPropTypes, "onClick" | "design">'}},onSearchInput:{defaultValue:null,description:"This event will be fired when the value of the search field is changed by a user - e.g. at each key press",name:"onSearchInput",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void"}},onSearch:{defaultValue:null,description:"This event will be fired when the search button has been clicked or the ENTER key has been pressed in the search field.",name:"onSearch",required:!1,type:{name:"((event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void) | ((event: Ui5CustomEvent<IconDomRef, { value: string; }>) => void)"}},onSearchReset:{defaultValue:null,description:"This event will be fired when the reset button has been clicked in the search field or when the dialog is closed.",name:"onSearchReset",required:!1,type:{name:"(event: Ui5CustomEvent<{ prevValue: string; nativeDetail?: number; }, never>) => void"}},onClear:{defaultValue:null,description:"This event will be fired when the clear button has been clicked.",name:"onClear",required:!1,type:{name:"(event: Ui5CustomEvent<ButtonDomRef, { prevSelectedItems: ListItemStandardDomRef[]; nativeDetail: number; }>) => void"}},onConfirm:{defaultValue:null,description:"This event will be fired when the dialog is confirmed by selecting an item in single selection mode or by pressing the confirmation button in multi selection mode.",name:"onConfirm",required:!1,type:{name:"((event: Ui5CustomEvent<ListDomRef, { selectedItems: ListItemStandardDomRef[]; }>) => void) | ((event: Ui5CustomEvent<ButtonDomRef, { ...; }>) => void)"}},onCancel:{defaultValue:null,description:"This event will be fired when the cancel button is clicked or ESC key is pressed.",name:"onCancel",required:!1,type:{name:"((event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void) | ((event: Ui5CustomEvent<ButtonDomRef, ButtonClickEventDetail>) => void)"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},draggable:{defaultValue:{value:"false"},description:`Determines whether the component is draggable.
If this property is set to true, the Dialog will be draggable by its header.

**Note:** The component can be draggable only in desktop mode.

**Note:** This property overrides the default HTML "draggable" attribute native behavior.
When "draggable" is set to true, the native browser "draggable"
behavior is prevented and only the Dialog custom logic ("draggable by its header") works.`,name:"draggable",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},resizable:{defaultValue:{value:"false"},description:`Configures the component to be resizable.
If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages.
In RTL languages, the resize handle will be placed in the bottom left corner.

**Note:** The component can be resizable only in desktop mode.

**Note:** Upon resizing, externally defined height and width styling will be ignored.`,name:"resizable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:`Fired after the component is closed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Defines the IDs of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:`Indicates if the element is open

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},initialFocus:{defaultValue:{value:"undefined"},description:"Defines the ID of the HTML Element, which will get the initial focus.\n\n**Note:** If an element with `autofocus` attribute is added inside the component,\n`initialFocus` won't take effect.",name:"initialFocus",required:!1,type:{name:"string"}},accessibleDescription:{defaultValue:{value:"undefined"},description:`Defines the accessible description of the component.

**Note:** Available since [v2.11.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents**.`,name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleDescriptionRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that describe the component.

**Note:** Available since [v2.11.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents**.`,name:"accessibleDescriptionRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Dialog"'},description:`Allows setting a custom role.

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},preventFocusRestore:{defaultValue:{value:"false"},description:`Defines if the focus should be returned to the previously focused element,
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
| ❌|✅|`,name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, never>) => void"}},growing:{defaultValue:{value:'"None"'},description:'Defines whether the component will have growing capability either by pressing a `More` button,\nor via user scroll. In both cases `load-more` event is fired.\n\n**Restrictions:** `growing="Scroll"` is not supported for Internet Explorer,\non IE the component will fallback to `growing="Button"`.',name:"growing",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"None"'}]}}}}}catch{}const je=""+new URL("Laptop1-BiqZozDV.jpg",import.meta.url).href,Fe=""+new URL("Laptop2-CLTht4yo.jpg",import.meta.url).href,Ue=""+new URL("PC1-BekXrNHY.jpg",import.meta.url).href,$e=""+new URL("PC2-DZLCUDFz.jpg",import.meta.url).href,He={title:"Modals & Popovers / SelectDialog",component:p,argTypes:{children:{control:{disable:!0}}},args:{headerText:"Select Product",open:Se},parameters:{chromatic:{delay:1e3}},tags:["package:@ui5/webcomponents","cem-module:Dialog"]},re=[{img:je,description:"LT-10",text:"Gaming Laptop"},{img:Fe,description:"LT-20",text:"Business Laptop"},{img:$e,description:"HT-10",text:"Gaming PC"},{img:Ue,description:"HT-20",text:"Business PC"}],N={render:l=>{const[S,m]=i.useState(l.open),a=()=>{m(!0)},g=v=>{m(!1),l.onClose(v)};return i.useEffect(()=>{m(l.open)},[l.open]),t.jsxs(t.Fragment,{children:[t.jsx(x,{onClick:a,children:"Open SelectDialog"}),t.jsx(p,{...l,open:S,onClose:g,children:new Array(40).fill("").map((v,s)=>{const u=re[s%4];return t.jsx(le,{selected:s===1,image:t.jsx("img",{src:u.img,alt:"Example Image"}),description:`${u.description}${s}`,text:u.text},`${u.text}${s}`)})})]})}},V={render:()=>{const[l,S]=i.useState(!1),m={"HT-102":!0,"HT-203":!0,"HT-1038":!0},[a,g]=i.useState(m),v=i.useRef(a),[s,u]=i.useState(),[F,R]=i.useState(Object.keys(m)),k=()=>{v.current=a},h=()=>{S(!0)},b=()=>{S(!1)},I=_=>{u(_.detail.value)},U=()=>{u(void 0)},q=_=>{const o=_.detail.targetItem.dataset.description;g(n=>{if(n[o]){const{[o]:f,...y}=n;return y}else return{...n,[o]:!0}})},L=()=>{g({})},E=()=>{R(Object.keys(a))},w=()=>{g(v.current)};return t.jsxs(t.Fragment,{children:[t.jsx(x,{onClick:h,children:"Open Dialog"}),t.jsx(p,{open:l,selectionMode:D.Multiple,numberOfSelectedItems:Object.keys(a).length,listProps:{onSelectionChange:q},showClearButton:!0,rememberSelections:!0,onClear:L,onConfirm:E,onClose:b,onSearchInput:I,onSearch:I,onSearchReset:U,onBeforeOpen:k,onCancel:w,children:new Array(40).fill("").map((_,o)=>{const n=re[o%4],f=`${n.description}${o}`,y=s==null?void 0:s.toLowerCase();return s&&!f.toLowerCase().includes(y)&&!n.text.toLowerCase().includes(y)?null:t.jsx(le,{image:t.jsx("img",{src:n.img,alt:"Example Image"}),description:`${n.description}${o}`,"data-description":`${n.description}${o}`,selected:a[f],text:n.text},`${n.text}${o}`)}).filter(Boolean)}),t.jsxs(se,{children:[t.jsx(we,{children:"Selected: "}),t.jsx(ae,{children:F.join(", ")})]})]})}};var Q,ee,te;N.parameters={...N.parameters,docs:{...(Q=N.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(te=(ee=N.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,oe,ie;V.parameters={...V.parameters,docs:{...(ne=V.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ie=(oe=V.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};const ze=["Default","MultiSelect"],vt=Object.freeze(Object.defineProperty({__proto__:null,Default:N,MultiSelect:V,__namedExportsOrder:ze,default:He},Symbol.toStringTag,{value:"Module"}));export{vt as C,N as D,V as M};
