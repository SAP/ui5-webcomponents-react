import{r as l,H as we,a7 as _,ay as _e,az as De,ap as xe,j as t,U as Ie,x as X,Q as D,_ as A,e1 as Y,T as Te,I as Be,aQ as Ne,e2 as H,J as ie,e3 as Ve,e4 as Re,e5 as Le,o as C,K as qe}from"./iframe-D5q1aMGI.js";import{L as ke}from"./index-B87mq1Uz.js";import{L as se}from"./index-DM1CdrI2.js";import{F as re,c as Ee}from"./index-BCRNDJSO.js";import{a as Oe}from"./Input-Dojvmff0.js";import{p as Pe,e as Ae}from"./InvisibleMessage-BPUavHeu.js";import{s as He}from"./search-0eeaHI1S.js";import{L as Me}from"./index-D97lUxga.js";import{I as je}from"./index-7YvS3mms.js";const Fe='@layer ui5-webcomponents-react{._dialog_3uhsn_1::part(header){flex-direction:column;margin-block-end:0;padding-block-end:.25rem}._dialog_3uhsn_1::part(content){padding:0}._headerContent_3uhsn_13{align-items:center;display:grid;grid-template-areas:"titleStart titleCenter cancel" "input input input";grid-template-columns:fit-content(100px) minmax(0,1fr) fit-content(100px);grid-template-rows:var(--_ui5wcr-DialogHeaderHeight) var(--_ui5wcr-DialogSubHeaderHeight);width:100%}._title_3uhsn_24{font-family:var(--sapFontHeaderFamily);font-size:var(--sapFontLargeSize);grid-column-end:titleCenter;grid-column-start:titleStart;max-width:100%;overflow:hidden;text-overflow:ellipsis}._titleCenterAlign_3uhsn_34{grid-area:titleCenter;justify-self:center}._hiddenClearBtn_3uhsn_39{grid-area:titleStart;visibility:hidden}._clearBtn_3uhsn_44{grid-area:cancel;justify-self:end}._input_3uhsn_49{grid-area:input;width:100%}._footer_3uhsn_54{align-items:center;box-sizing:border-box;display:flex;justify-content:flex-end;width:100%}._footer_3uhsn_54>*{margin-inline-start:.5rem}._inputIcon_3uhsn_66{color:var(--sapField_TextColor);cursor:pointer}._inputIcon_3uhsn_66:hover{background-color:var(--_ui5-v2-13-1_input_icon_hover_bg);box-shadow:var(--sapField_Hover_Shadow)}._inputIcon_3uhsn_66:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--sapField_Hover_Shadow);color:var(--sapButton_Active_TextColor)}._infoBar_3uhsn_82{background-color:var(--sapInfobar_NonInteractive_Background);border-block-end:.0625rem solid var(--sapGroup_TitleBorderColor);color:var(--sapList_TextColor);height:2rem;overflow:hidden;padding-inline-start:var(--_ui5wcr-CheckBoxPaddingInline);position:sticky;top:0;z-index:1}}',c={dialog:"_dialog_3uhsn_1",headerContent:"_headerContent_3uhsn_13",title:"_title_3uhsn_24",titleCenterAlign:"_titleCenterAlign_3uhsn_34",hiddenClearBtn:"_hiddenClearBtn_3uhsn_39",clearBtn:"_clearBtn_3uhsn_44",input:"_input_3uhsn_49",footer:"_footer_3uhsn_54",inputIcon:"_inputIcon_3uhsn_66",infoBar:"_infoBar_3uhsn_82"},h=l.forwardRef((a,S)=>{const{accessibleName:f,open:i,children:b,className:y,confirmButtonText:s,confirmButtonProps:u,growing:M,headerText:N,headerTextAlignCenter:V,headerTextLevel:j=we.H1,listProps:g={},selectionMode:v=_.Single,numberOfSelectedItems:R,rememberSelections:F,showClearButton:L,onClose:q,onClear:k,onConfirm:d,onLoadMore:r,onSearch:n,onSearchInput:w,onSearchReset:p,onBeforeOpen:z,onBeforeClose:W,onOpen:G,onCancel:E,...ue}=a;_e(Fe,h.displayName);const m=De("@ui5/webcomponents-react"),[O,U]=l.useState(""),[P,$]=l.useState([]),[de,x]=xe(g.ref),[pe,I]=l.useState(i);l.useEffect(()=>{I(i)},[i]);const me=e=>{var Z,J;const o=((Z=x.current)==null?void 0:Z.getSelectedItems())??[];typeof z=="function"&&z(e),v===_.Multiple&&((J=x.current)!=null&&J.hasData)&&$(o)},he=e=>{var o;typeof G=="function"&&G(e),(o=x.current)==null||o.focusFirstItem()},fe=e=>{!e.target.value&&e.detail.inputType===""&&ge(e),typeof w=="function"&&w(C(e,{value:e.target.value})),U(e.target.value)},K=e=>{typeof n=="function"&&(e.type==="keyup"&&e.code==="Enter"&&n(C(e,{value:e.target.value})),e.type==="click"&&n(C(e,{value:O})))},ge=e=>{typeof p=="function"&&p(C(e,{prevValue:O})),U("")},ve=e=>{const{selectedItems:o}=e.detail;typeof(g==null?void 0:g.onSelectionChange)=="function"&&g.onSelectionChange(e),v===_.Multiple?($(o),o.length&&Pe("Selected Items "+o.length,Ae.Polite)):(typeof d=="function"&&d(e),I(!1))},be=e=>{I(!1),typeof E=="function"&&E(e)},Q=e=>{var o;typeof k=="function"&&k(C(e,{prevSelectedItems:P})),$([]),(o=x.current)==null||o.deselectSelectedItems()},ye=e=>{typeof d=="function"&&d(C(e,{selectedItems:P})),I(!1)},Ce=e=>{var o;I(!1),typeof q=="function"&&q(e),typeof p=="function"&&p(C(e,{prevValue:O})),U(""),F||(o=x.current)==null||o.deselectSelectedItems()},Se=e=>{typeof W=="function"&&W(e),typeof E=="function"&&e.detail.escPressed&&E(e)};return t.jsxs(Ie,{...ue,open:pe,"data-component-name":"SelectDialog",ref:S,className:X(c.dialog,y),onClose:Ce,onBeforeOpen:me,onOpen:he,onBeforeClose:Se,accessibleName:f??N,children:[t.jsxs("div",{className:c.headerContent,slot:"header","data-sap-ui-fastnavgroup":"true",children:[L&&V&&t.jsx(D,{onClick:Q,design:A.Transparent,className:c.hiddenClearBtn,tabIndex:-1,"aria-hidden":"true",children:m.getText(Y)}),t.jsx(Te,{className:X(c.title,V&&c.titleCenterAlign),level:j,children:N}),L&&t.jsx(D,{onClick:Q,design:A.Transparent,className:c.clearBtn,children:m.getText(Y)}),t.jsx(je,{className:c.input,accessibleName:m.getText(H),value:O,placeholder:m.getText(H),onInput:fe,onKeyUp:K,type:Oe.Search,showClearIcon:!0,icon:t.jsx(t.Fragment,{children:t.jsx(Be,{mode:Ne.Decorative,name:He,className:c.inputIcon,onClick:K,accessibleName:m.getText(H),title:m.getText(H)})})})]}),v===_.Multiple&&(!!P.length||R>0)&&t.jsx(re,{alignItems:Ee.Center,className:c.infoBar,children:t.jsx(ie,{children:`${m.getText(Ve)}: ${R??P.length}`})}),t.jsx(Me,{...g,ref:de,growing:M,onLoadMore:r,selectionMode:v,onSelectionChange:ve,"data-sap-ui-fastnavgroup":"true",children:b}),t.jsxs("div",{slot:"footer",className:c.footer,"data-sap-ui-fastnavgroup":"true",children:[v===_.Multiple&&t.jsx(D,{...u,onClick:ye,design:A.Emphasized,children:s??m.getText(Re)}),t.jsx(D,{onClick:be,design:A.Transparent,children:m.getText(Le)})]})]})});h.displayName="SelectDialog";try{h.displayName="SelectDialog",h.__docgenInfo={description:"The SelectDialog enables users to filter a comprehensive list via a search field and to select one or more items.",displayName:"SelectDialog",props:{accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the component.\n\n__Note:__ If not set, the dialog uses the `headerText` for its accessible name.",name:"accessibleName",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Defines the list items of the component.\n\n__Note:__ Although this prop accepts all HTML Elements and therefore also all list items, it is strongly recommended that you only use `ListItemStandard` in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},showClearButton:{defaultValue:null,description:"This flag controls whether the Clear button is shown. When set to `true`, it provides a way to clear selections. We recommend enabling the Clear button in cases where a mechanism to delete the selection is required: In single selection mode (default mode) or when `rememberSelections` is set to `true`.",name:"showClearButton",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"Defines the header text.",name:"headerText",required:!1,type:{name:"string"}},headerTextAlignCenter:{defaultValue:null,description:"Specifies the `headerText` alignment.",name:"headerTextAlignCenter",required:!1,type:{name:"boolean"}},headerTextLevel:{defaultValue:{value:'"H1"'},description:'Defines the aria-level of the `headerText`.\nAvailable options are: `"H1"` to `"H6"`.\nThis property does not influence the style of the `headerText`.',name:"headerTextLevel",required:!1,type:{name:"enum",value:[{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},confirmButtonText:{defaultValue:null,description:"Overwrites the default text for the confirmation button.",name:"confirmButtonText",required:!1,type:{name:"string"}},rememberSelections:{defaultValue:null,description:"This flag controls whether the dialog clears the selection after the confirm event has been fired. If the dialog needs to be opened multiple times in the same context to allow for corrections of previous user inputs, set this flag to `true`.\n\n__Note:__ This won't work if the dialog is unmounted, if you want to unmount the dialog when closed, you need to persist the selection yourself.",name:"rememberSelections",required:!1,type:{name:"boolean"}},numberOfSelectedItems:{defaultValue:null,description:"Defines the number of selected list items displayed above the list in `MultiSelect` mode. Programmatically setting the counter is necessary if all previously selected elements are to remain selected during search.",name:"numberOfSelectedItems",required:!1,type:{name:"number"}},selectionMode:{defaultValue:{value:"ListSelectionMode.Single"},description:"Defines the mode of the SelectDialog list.\n\n__Note:__ Although this prop accepts all `ListSelectionMode`s, it is strongly recommended that you only use `Single` or `Multiple` in order to preserve the intended design.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Delete"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"None"'},{value:'"Single"'},{value:'"SingleStart"'},{value:'"SingleEnd"'},{value:'"SingleAuto"'},{value:'"Multiple"'},{value:'"Delete"'},{value:'"SingleStart"'},{value:'"SingleEnd"'},{value:'"SingleAuto"'}]}},listProps:{defaultValue:{value:"{}"},description:"Defines props you can pass to the internal `List` component.\n\n__Note:__ `selectionMode`, `children`, `growing`, `onLoadMore` and `footerText` are not supported.",name:"listProps",required:!1,type:{name:'Omit<ListPropTypes, "children" | "footerText" | "growing" | "selectionMode" | "onLoadMore">'}},confirmButtonProps:{defaultValue:null,description:"Defines the props of the confirm button.\n\n__Note:__`onClick` and `design` are not supported.\n@since 1.25.0",name:"confirmButtonProps",required:!1,type:{name:'Omit<ButtonPropTypes, "onClick" | "design">'}},onSearchInput:{defaultValue:null,description:"This event will be fired when the value of the search field is changed by a user - e.g. at each key press",name:"onSearchInput",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void"}},onSearch:{defaultValue:null,description:"This event will be fired when the search button has been clicked or the ENTER key has been pressed in the search field.",name:"onSearch",required:!1,type:{name:"((event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void) | ((event: Ui5CustomEvent<IconDomRef, { value: string; }>) => void)"}},onSearchReset:{defaultValue:null,description:"This event will be fired when the reset button has been clicked in the search field or when the dialog is closed.",name:"onSearchReset",required:!1,type:{name:"(event: Ui5CustomEvent<{ prevValue: string; nativeDetail?: number; }, never>) => void"}},onClear:{defaultValue:null,description:"This event will be fired when the clear button has been clicked.",name:"onClear",required:!1,type:{name:"(event: Ui5CustomEvent<ButtonDomRef, { prevSelectedItems: ListItemStandardDomRef[]; nativeDetail: number; }>) => void"}},onConfirm:{defaultValue:null,description:"This event will be fired when the dialog is confirmed by selecting an item in single selection mode or by pressing the confirmation button in multi selection mode.",name:"onConfirm",required:!1,type:{name:"(event: Ui5CustomEvent<ButtonDomRef | ListDomRef, { selectedItems: ListItemBase[]; }>) => void"}},onCancel:{defaultValue:null,description:"This event will be fired when the cancel button is clicked or ESC key is pressed.",name:"onCancel",required:!1,type:{name:"((event: Ui5CustomEvent<ButtonDomRef, ButtonClickEventDetail>) => void) | ((event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void)"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
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

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},open:{defaultValue:{value:"false"},description:`Indicates if the element is open

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},initialFocus:{defaultValue:{value:"undefined"},description:"Defines the ID of the HTML Element, which will get the initial focus.\n\n**Note:** If an element with `autofocus` attribute is added inside the component,\n`initialFocus` won't take effect.",name:"initialFocus",required:!1,type:{name:"string"}},accessibleDescriptionRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that describe the component.

**Note:** Available since [v2.11.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents**.`,name:"accessibleDescriptionRef",required:!1,type:{name:"string"}},preventFocusRestore:{defaultValue:{value:"false"},description:`Defines if the focus should be returned to the previously focused element,
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
| ❌|✅|`,name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, never>) => void"}}}}}catch{}try{h.displayName="SelectDialog",h.__docgenInfo={description:"The SelectDialog enables users to filter a comprehensive list via a search field and to select one or more items.",displayName:"SelectDialog",props:{accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the component.\n\n__Note:__ If not set, the dialog uses the `headerText` for its accessible name.",name:"accessibleName",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Defines the list items of the component.\n\n__Note:__ Although this prop accepts all HTML Elements and therefore also all list items, it is strongly recommended that you only use `ListItemStandard` in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},showClearButton:{defaultValue:null,description:"This flag controls whether the Clear button is shown. When set to `true`, it provides a way to clear selections. We recommend enabling the Clear button in cases where a mechanism to delete the selection is required: In single selection mode (default mode) or when `rememberSelections` is set to `true`.",name:"showClearButton",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"Defines the header text.",name:"headerText",required:!1,type:{name:"string"}},headerTextAlignCenter:{defaultValue:null,description:"Specifies the `headerText` alignment.",name:"headerTextAlignCenter",required:!1,type:{name:"boolean"}},headerTextLevel:{defaultValue:{value:'"H1"'},description:'Defines the aria-level of the `headerText`.\nAvailable options are: `"H1"` to `"H6"`.\nThis property does not influence the style of the `headerText`.',name:"headerTextLevel",required:!1,type:{name:"enum",value:[{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},confirmButtonText:{defaultValue:null,description:"Overwrites the default text for the confirmation button.",name:"confirmButtonText",required:!1,type:{name:"string"}},rememberSelections:{defaultValue:null,description:"This flag controls whether the dialog clears the selection after the confirm event has been fired. If the dialog needs to be opened multiple times in the same context to allow for corrections of previous user inputs, set this flag to `true`.\n\n__Note:__ This won't work if the dialog is unmounted, if you want to unmount the dialog when closed, you need to persist the selection yourself.",name:"rememberSelections",required:!1,type:{name:"boolean"}},numberOfSelectedItems:{defaultValue:null,description:"Defines the number of selected list items displayed above the list in `MultiSelect` mode. Programmatically setting the counter is necessary if all previously selected elements are to remain selected during search.",name:"numberOfSelectedItems",required:!1,type:{name:"number"}},selectionMode:{defaultValue:{value:"ListSelectionMode.Single"},description:"Defines the mode of the SelectDialog list.\n\n__Note:__ Although this prop accepts all `ListSelectionMode`s, it is strongly recommended that you only use `Single` or `Multiple` in order to preserve the intended design.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Delete"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"None"'},{value:'"Single"'},{value:'"SingleStart"'},{value:'"SingleEnd"'},{value:'"SingleAuto"'},{value:'"Multiple"'},{value:'"Delete"'},{value:'"SingleStart"'},{value:'"SingleEnd"'},{value:'"SingleAuto"'}]}},listProps:{defaultValue:{value:"{}"},description:"Defines props you can pass to the internal `List` component.\n\n__Note:__ `selectionMode`, `children`, `growing`, `onLoadMore` and `footerText` are not supported.",name:"listProps",required:!1,type:{name:'Omit<ListPropTypes, "children" | "footerText" | "growing" | "selectionMode" | "onLoadMore">'}},confirmButtonProps:{defaultValue:null,description:"Defines the props of the confirm button.\n\n__Note:__`onClick` and `design` are not supported.\n@since 1.25.0",name:"confirmButtonProps",required:!1,type:{name:'Omit<ButtonPropTypes, "onClick" | "design">'}},onSearchInput:{defaultValue:null,description:"This event will be fired when the value of the search field is changed by a user - e.g. at each key press",name:"onSearchInput",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void"}},onSearch:{defaultValue:null,description:"This event will be fired when the search button has been clicked or the ENTER key has been pressed in the search field.",name:"onSearch",required:!1,type:{name:"((event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void) | ((event: Ui5CustomEvent<IconDomRef, { value: string; }>) => void)"}},onSearchReset:{defaultValue:null,description:"This event will be fired when the reset button has been clicked in the search field or when the dialog is closed.",name:"onSearchReset",required:!1,type:{name:"(event: Ui5CustomEvent<{ prevValue: string; nativeDetail?: number; }, never>) => void"}},onClear:{defaultValue:null,description:"This event will be fired when the clear button has been clicked.",name:"onClear",required:!1,type:{name:"(event: Ui5CustomEvent<ButtonDomRef, { prevSelectedItems: ListItemStandardDomRef[]; nativeDetail: number; }>) => void"}},onConfirm:{defaultValue:null,description:"This event will be fired when the dialog is confirmed by selecting an item in single selection mode or by pressing the confirmation button in multi selection mode.",name:"onConfirm",required:!1,type:{name:"(event: Ui5CustomEvent<ButtonDomRef | ListDomRef, { selectedItems: ListItemBase[]; }>) => void"}},onCancel:{defaultValue:null,description:"This event will be fired when the cancel button is clicked or ESC key is pressed.",name:"onCancel",required:!1,type:{name:"((event: Ui5CustomEvent<ButtonDomRef, ButtonClickEventDetail>) => void) | ((event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void)"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
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

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},open:{defaultValue:{value:"false"},description:`Indicates if the element is open

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},initialFocus:{defaultValue:{value:"undefined"},description:"Defines the ID of the HTML Element, which will get the initial focus.\n\n**Note:** If an element with `autofocus` attribute is added inside the component,\n`initialFocus` won't take effect.",name:"initialFocus",required:!1,type:{name:"string"}},accessibleDescriptionRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that describe the component.

**Note:** Available since [v2.11.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents**.`,name:"accessibleDescriptionRef",required:!1,type:{name:"string"}},preventFocusRestore:{defaultValue:{value:"false"},description:`Defines if the focus should be returned to the previously focused element,
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
| ❌|✅|`,name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, never>) => void"}}}}}catch{}const Ue=""+new URL("Laptop1-BiqZozDV.jpg",import.meta.url).href,$e=""+new URL("Laptop2-CLTht4yo.jpg",import.meta.url).href,ze=""+new URL("PC1-BekXrNHY.jpg",import.meta.url).href,We=""+new URL("PC2-DZLCUDFz.jpg",import.meta.url).href,Ge={title:"Modals & Popovers / SelectDialog",component:h,argTypes:{children:{control:{disable:!0}}},args:{headerText:"Select Product",open:qe},parameters:{chromatic:{delay:1e3}},tags:["package:@ui5/webcomponents","cem-module:Dialog"]},ce=[{img:Ue,description:"LT-10",text:"Gaming Laptop"},{img:$e,description:"LT-20",text:"Business Laptop"},{img:We,description:"HT-10",text:"Gaming PC"},{img:ze,description:"HT-20",text:"Business PC"}],T={render:a=>{const[S,f]=l.useState(a.open),i=()=>{f(!0)},b=y=>{f(!1),a.onClose(y)};return l.useEffect(()=>{f(a.open)},[a.open]),t.jsxs(t.Fragment,{children:[t.jsx(D,{onClick:i,children:"Open SelectDialog"}),t.jsx(h,{...a,open:S,onClose:b,children:new Array(40).fill("").map((y,s)=>{const u=ce[s%4];return t.jsx(se,{selected:s===1,image:t.jsx("img",{src:u.img,alt:"Example Image"}),description:`${u.description}${s}`,text:u.text},`${u.text}${s}`)})})]})}},B={render:()=>{const[a,S]=l.useState(!1),f={"HT-102":!0,"HT-203":!0,"HT-1038":!0},[i,b]=l.useState(f),y=l.useRef(i),[s,u]=l.useState(),[M,N]=l.useState(Object.keys(f)),V=()=>{y.current=i},j=()=>{S(!0)},g=()=>{S(!1)},v=d=>{u(d.detail.value)},R=()=>{u(void 0)},F=d=>{const r=d.detail.targetItem.dataset.description;b(n=>{if(n[r]){const{[r]:w,...p}=n;return p}else return{...n,[r]:!0}})},L=()=>{b({})},q=()=>{N(Object.keys(i))},k=()=>{b(y.current)};return t.jsxs(t.Fragment,{children:[t.jsx(D,{onClick:j,children:"Open Dialog"}),t.jsx(h,{open:a,selectionMode:_.Multiple,numberOfSelectedItems:Object.keys(i).length,listProps:{onSelectionChange:F},showClearButton:!0,rememberSelections:!0,onClear:L,onConfirm:q,onClose:g,onSearchInput:v,onSearch:v,onSearchReset:R,onBeforeOpen:V,onCancel:k,children:new Array(40).fill("").map((d,r)=>{const n=ce[r%4],w=`${n.description}${r}`,p=s==null?void 0:s.toLowerCase();return s&&!w.toLowerCase().includes(p)&&!n.text.toLowerCase().includes(p)?null:t.jsx(se,{image:t.jsx("img",{src:n.img,alt:"Example Image"}),description:`${n.description}${r}`,"data-description":`${n.description}${r}`,selected:i[w],text:n.text},`${n.text}${r}`)}).filter(Boolean)}),t.jsxs(re,{children:[t.jsx(ke,{children:"Selected: "}),t.jsx(ie,{children:M.join(", ")})]})]})}};var ee,te,ne;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=T.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,le,ae;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ae=(le=B.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};const Ke=["Default","MultiSelect"],lt=Object.freeze(Object.defineProperty({__proto__:null,Default:T,MultiSelect:B,__namedExportsOrder:Ke,default:Ge},Symbol.toStringTag,{value:"Module"}));export{lt as C,T as D,B as M};
