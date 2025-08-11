import{r as o,H as he,a7 as w,ay as fe,az as ge,ap as ve,j as t,U as be,x as Z,Q as _,_ as A,e1 as J,T as ye,I as Ce,aQ as Se,e2 as H,J as X,e3 as we,e4 as _e,e5 as De,o as b,K as xe}from"./iframe-4VeS9m_X.js";import{L as Ie}from"./index-C9GlwG2P.js";import{L as Y}from"./index-BLDjATDM.js";import{F as ee,c as Te}from"./index-C8P7iKVZ.js";import{a as Be}from"./Input-7Ln5W5EQ.js";import{p as Ne,e as Ve}from"./InvisibleMessage-Dmfd1gOp.js";import{s as Re}from"./search-BC3ehqG_.js";import{L as Le}from"./index-BLK2G4j5.js";import{I as qe}from"./index-BQqE75Ik.js";const ke='@layer ui5-webcomponents-react{._dialog_3uhsn_1::part(header){flex-direction:column;margin-block-end:0;padding-block-end:.25rem}._dialog_3uhsn_1::part(content){padding:0}._headerContent_3uhsn_13{align-items:center;display:grid;grid-template-areas:"titleStart titleCenter cancel" "input input input";grid-template-columns:fit-content(100px) minmax(0,1fr) fit-content(100px);grid-template-rows:var(--_ui5wcr-DialogHeaderHeight) var(--_ui5wcr-DialogSubHeaderHeight);width:100%}._title_3uhsn_24{font-family:var(--sapFontHeaderFamily);font-size:var(--sapFontLargeSize);grid-column-end:titleCenter;grid-column-start:titleStart;max-width:100%;overflow:hidden;text-overflow:ellipsis}._titleCenterAlign_3uhsn_34{grid-area:titleCenter;justify-self:center}._hiddenClearBtn_3uhsn_39{grid-area:titleStart;visibility:hidden}._clearBtn_3uhsn_44{grid-area:cancel;justify-self:end}._input_3uhsn_49{grid-area:input;width:100%}._footer_3uhsn_54{align-items:center;box-sizing:border-box;display:flex;justify-content:flex-end;width:100%}._footer_3uhsn_54>*{margin-inline-start:.5rem}._inputIcon_3uhsn_66{color:var(--sapField_TextColor);cursor:pointer}._inputIcon_3uhsn_66:hover{background-color:var(--_ui5-v2-13-2_input_icon_hover_bg);box-shadow:var(--sapField_Hover_Shadow)}._inputIcon_3uhsn_66:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--sapField_Hover_Shadow);color:var(--sapButton_Active_TextColor)}._infoBar_3uhsn_82{background-color:var(--sapInfobar_NonInteractive_Background);border-block-end:.0625rem solid var(--sapGroup_TitleBorderColor);color:var(--sapList_TextColor);height:2rem;overflow:hidden;padding-inline-start:var(--_ui5wcr-CheckBoxPaddingInline);position:sticky;top:0;z-index:1}}',s={dialog:"_dialog_3uhsn_1",headerContent:"_headerContent_3uhsn_13",title:"_title_3uhsn_24",titleCenterAlign:"_titleCenterAlign_3uhsn_34",hiddenClearBtn:"_hiddenClearBtn_3uhsn_39",clearBtn:"_clearBtn_3uhsn_44",input:"_input_3uhsn_49",footer:"_footer_3uhsn_54",inputIcon:"_inputIcon_3uhsn_66",infoBar:"_infoBar_3uhsn_82"},m=o.forwardRef((l,y)=>{const{accessibleName:h,open:a,children:g,className:v,confirmButtonText:r,confirmButtonProps:c,growing:M,headerText:N,headerTextAlignCenter:V,headerTextLevel:j=he.H1,listProps:C={},selectionMode:f=w.Single,numberOfSelectedItems:R,rememberSelections:F,showClearButton:L,onClose:q,onClear:k,onConfirm:u,onLoadMore:i,onSearch:n,onSearchInput:S,onSearchReset:d,onBeforeOpen:z,onBeforeClose:W,onOpen:G,onCancel:E,...ne}=l;fe(ke,m.displayName);const p=ge("@ui5/webcomponents-react"),[P,U]=o.useState(""),[O,$]=o.useState([]),[oe,D]=ve(C.ref),[le,x]=o.useState(a);o.useEffect(()=>{x(a)},[a]);const ae=e=>{const I=D.current?.getSelectedItems()??[];typeof z=="function"&&z(e),f===w.Multiple&&D.current?.hasData&&$(I)},ie=e=>{typeof G=="function"&&G(e),D.current?.focusFirstItem()},se=e=>{!e.target.value&&e.detail.inputType===""&&re(e),typeof S=="function"&&S(b(e,{value:e.target.value})),U(e.target.value)},K=e=>{typeof n=="function"&&(e.type==="keyup"&&e.code==="Enter"&&n(b(e,{value:e.target.value})),e.type==="click"&&n(b(e,{value:P})))},re=e=>{typeof d=="function"&&d(b(e,{prevValue:P})),U("")},ce=e=>{const{selectedItems:I}=e.detail;typeof C?.onSelectionChange=="function"&&C.onSelectionChange(e),f===w.Multiple?($(I),I.length&&Ne("Selected Items "+I.length,Ve.Polite)):(typeof u=="function"&&u(e),x(!1))},ue=e=>{x(!1),typeof E=="function"&&E(e)},Q=e=>{typeof k=="function"&&k(b(e,{prevSelectedItems:O})),$([]),D.current?.deselectSelectedItems()},de=e=>{typeof u=="function"&&u(b(e,{selectedItems:O})),x(!1)},pe=e=>{x(!1),typeof q=="function"&&q(e),typeof d=="function"&&d(b(e,{prevValue:P})),U(""),F||D.current?.deselectSelectedItems()},me=e=>{typeof W=="function"&&W(e),typeof E=="function"&&e.detail.escPressed&&E(e)};return t.jsxs(be,{...ne,open:le,"data-component-name":"SelectDialog",ref:y,className:Z(s.dialog,v),onClose:pe,onBeforeOpen:ae,onOpen:ie,onBeforeClose:me,accessibleName:h??N,children:[t.jsxs("div",{className:s.headerContent,slot:"header","data-sap-ui-fastnavgroup":"true",children:[L&&V&&t.jsx(_,{onClick:Q,design:A.Transparent,className:s.hiddenClearBtn,tabIndex:-1,"aria-hidden":"true",children:p.getText(J)}),t.jsx(ye,{className:Z(s.title,V&&s.titleCenterAlign),level:j,children:N}),L&&t.jsx(_,{onClick:Q,design:A.Transparent,className:s.clearBtn,children:p.getText(J)}),t.jsx(qe,{className:s.input,accessibleName:p.getText(H),value:P,placeholder:p.getText(H),onInput:se,onKeyUp:K,type:Be.Search,showClearIcon:!0,icon:t.jsx(t.Fragment,{children:t.jsx(Ce,{mode:Se.Decorative,name:Re,className:s.inputIcon,onClick:K,accessibleName:p.getText(H),title:p.getText(H)})})})]}),f===w.Multiple&&(!!O.length||R>0)&&t.jsx(ee,{alignItems:Te.Center,className:s.infoBar,children:t.jsx(X,{children:`${p.getText(we)}: ${R??O.length}`})}),t.jsx(Le,{...C,ref:oe,growing:M,onLoadMore:i,selectionMode:f,onSelectionChange:ce,"data-sap-ui-fastnavgroup":"true",children:g}),t.jsxs("div",{slot:"footer",className:s.footer,"data-sap-ui-fastnavgroup":"true",children:[f===w.Multiple&&t.jsx(_,{...c,onClick:de,design:A.Emphasized,children:r??p.getText(_e)}),t.jsx(_,{onClick:ue,design:A.Transparent,children:p.getText(De)})]})]})});m.displayName="SelectDialog";try{m.displayName="SelectDialog",m.__docgenInfo={description:"The SelectDialog enables users to filter a comprehensive list via a search field and to select one or more items.",displayName:"SelectDialog",props:{accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the component.\n\n__Note:__ If not set, the dialog uses the `headerText` for its accessible name.",name:"accessibleName",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Defines the list items of the component.\n\n__Note:__ Although this prop accepts all HTML Elements and therefore also all list items, it is strongly recommended that you only use `ListItemStandard` in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},showClearButton:{defaultValue:null,description:"This flag controls whether the Clear button is shown. When set to `true`, it provides a way to clear selections. We recommend enabling the Clear button in cases where a mechanism to delete the selection is required: In single selection mode (default mode) or when `rememberSelections` is set to `true`.",name:"showClearButton",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"Defines the header text.",name:"headerText",required:!1,type:{name:"string"}},headerTextAlignCenter:{defaultValue:null,description:"Specifies the `headerText` alignment.",name:"headerTextAlignCenter",required:!1,type:{name:"boolean"}},headerTextLevel:{defaultValue:{value:'"H1"'},description:'Defines the aria-level of the `headerText`.\nAvailable options are: `"H1"` to `"H6"`.\nThis property does not influence the style of the `headerText`.',name:"headerTextLevel",required:!1,type:{name:"enum",value:[{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},confirmButtonText:{defaultValue:null,description:"Overwrites the default text for the confirmation button.",name:"confirmButtonText",required:!1,type:{name:"string"}},rememberSelections:{defaultValue:null,description:"This flag controls whether the dialog clears the selection after the confirm event has been fired. If the dialog needs to be opened multiple times in the same context to allow for corrections of previous user inputs, set this flag to `true`.\n\n__Note:__ This won't work if the dialog is unmounted, if you want to unmount the dialog when closed, you need to persist the selection yourself.",name:"rememberSelections",required:!1,type:{name:"boolean"}},numberOfSelectedItems:{defaultValue:null,description:"Defines the number of selected list items displayed above the list in `MultiSelect` mode. Programmatically setting the counter is necessary if all previously selected elements are to remain selected during search.",name:"numberOfSelectedItems",required:!1,type:{name:"number"}},selectionMode:{defaultValue:{value:"ListSelectionMode.Single"},description:"Defines the mode of the SelectDialog list.\n\n__Note:__ Although this prop accepts all `ListSelectionMode`s, it is strongly recommended that you only use `Single` or `Multiple` in order to preserve the intended design.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Delete"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"None"'},{value:'"Single"'},{value:'"SingleStart"'},{value:'"SingleEnd"'},{value:'"SingleAuto"'},{value:'"Multiple"'},{value:'"Delete"'},{value:'"SingleStart"'},{value:'"SingleEnd"'},{value:'"SingleAuto"'}]}},listProps:{defaultValue:{value:"{}"},description:"Defines props you can pass to the internal `List` component.\n\n__Note:__ `selectionMode`, `children`, `growing`, `onLoadMore` and `footerText` are not supported.",name:"listProps",required:!1,type:{name:'Omit<ListPropTypes, "children" | "footerText" | "growing" | "selectionMode" | "onLoadMore">'}},confirmButtonProps:{defaultValue:null,description:"Defines the props of the confirm button.\n\n__Note:__`onClick` and `design` are not supported.\n@since 1.25.0",name:"confirmButtonProps",required:!1,type:{name:'Omit<ButtonPropTypes, "onClick" | "design">'}},onSearchInput:{defaultValue:null,description:"This event will be fired when the value of the search field is changed by a user - e.g. at each key press",name:"onSearchInput",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void"}},onSearch:{defaultValue:null,description:"This event will be fired when the search button has been clicked or the ENTER key has been pressed in the search field.",name:"onSearch",required:!1,type:{name:"((event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void) | ((event: Ui5CustomEvent<IconDomRef, { value: string; }>) => void)"}},onSearchReset:{defaultValue:null,description:"This event will be fired when the reset button has been clicked in the search field or when the dialog is closed.",name:"onSearchReset",required:!1,type:{name:"(event: Ui5CustomEvent<{ prevValue: string; nativeDetail?: number; }, never>) => void"}},onClear:{defaultValue:null,description:"This event will be fired when the clear button has been clicked.",name:"onClear",required:!1,type:{name:"(event: Ui5CustomEvent<ButtonDomRef, { prevSelectedItems: ListItemStandardDomRef[]; nativeDetail: number; }>) => void"}},onConfirm:{defaultValue:null,description:"This event will be fired when the dialog is confirmed by selecting an item in single selection mode or by pressing the confirmation button in multi selection mode.",name:"onConfirm",required:!1,type:{name:"(event: Ui5CustomEvent<ButtonDomRef | ListDomRef, { selectedItems: ListItemBase[]; }>) => void"}},onCancel:{defaultValue:null,description:"This event will be fired when the cancel button is clicked or ESC key is pressed.",name:"onCancel",required:!1,type:{name:"((event: Ui5CustomEvent<ButtonDomRef, ButtonClickEventDetail>) => void) | ((event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void)"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
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

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},accessibleDescriptionRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that describe the component.

**Note:** Available since [v2.11.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents**.`,name:"accessibleDescriptionRef",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:`Indicates if the element is open

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},onOpen:{defaultValue:null,description:`Fired after the component is opened.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},initialFocus:{defaultValue:{value:"undefined"},description:"Defines the ID of the HTML Element, which will get the initial focus.\n\n**Note:** If an element with `autofocus` attribute is added inside the component,\n`initialFocus` won't take effect.",name:"initialFocus",required:!1,type:{name:"string"}},preventFocusRestore:{defaultValue:{value:"false"},description:`Defines if the focus should be returned to the previously focused element,
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
| ✅|❌|`,name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},growing:{defaultValue:{value:'"None"'},description:'Defines whether the component will have growing capability either by pressing a `More` button,\nor via user scroll. In both cases `load-more` event is fired.\n\n**Restrictions:** `growing="Scroll"` is not supported for Internet Explorer,\non IE the component will fallback to `growing="Button"`.',name:"growing",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"None"'}]}},onLoadMore:{defaultValue:null,description:`Fired when the user scrolls to the bottom of the list.

**Note:** The event is fired when the \`growing='Scroll'\` property is enabled.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, never>) => void"}}}}}catch{}try{m.displayName="SelectDialog",m.__docgenInfo={description:"The SelectDialog enables users to filter a comprehensive list via a search field and to select one or more items.",displayName:"SelectDialog",props:{accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the component.\n\n__Note:__ If not set, the dialog uses the `headerText` for its accessible name.",name:"accessibleName",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Defines the list items of the component.\n\n__Note:__ Although this prop accepts all HTML Elements and therefore also all list items, it is strongly recommended that you only use `ListItemStandard` in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},showClearButton:{defaultValue:null,description:"This flag controls whether the Clear button is shown. When set to `true`, it provides a way to clear selections. We recommend enabling the Clear button in cases where a mechanism to delete the selection is required: In single selection mode (default mode) or when `rememberSelections` is set to `true`.",name:"showClearButton",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"Defines the header text.",name:"headerText",required:!1,type:{name:"string"}},headerTextAlignCenter:{defaultValue:null,description:"Specifies the `headerText` alignment.",name:"headerTextAlignCenter",required:!1,type:{name:"boolean"}},headerTextLevel:{defaultValue:{value:'"H1"'},description:'Defines the aria-level of the `headerText`.\nAvailable options are: `"H1"` to `"H6"`.\nThis property does not influence the style of the `headerText`.',name:"headerTextLevel",required:!1,type:{name:"enum",value:[{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'},{value:'"H1"'},{value:'"H2"'},{value:'"H3"'},{value:'"H4"'},{value:'"H5"'},{value:'"H6"'}]}},confirmButtonText:{defaultValue:null,description:"Overwrites the default text for the confirmation button.",name:"confirmButtonText",required:!1,type:{name:"string"}},rememberSelections:{defaultValue:null,description:"This flag controls whether the dialog clears the selection after the confirm event has been fired. If the dialog needs to be opened multiple times in the same context to allow for corrections of previous user inputs, set this flag to `true`.\n\n__Note:__ This won't work if the dialog is unmounted, if you want to unmount the dialog when closed, you need to persist the selection yourself.",name:"rememberSelections",required:!1,type:{name:"boolean"}},numberOfSelectedItems:{defaultValue:null,description:"Defines the number of selected list items displayed above the list in `MultiSelect` mode. Programmatically setting the counter is necessary if all previously selected elements are to remain selected during search.",name:"numberOfSelectedItems",required:!1,type:{name:"number"}},selectionMode:{defaultValue:{value:"ListSelectionMode.Single"},description:"Defines the mode of the SelectDialog list.\n\n__Note:__ Although this prop accepts all `ListSelectionMode`s, it is strongly recommended that you only use `Single` or `Multiple` in order to preserve the intended design.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Delete"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"None"'},{value:'"Single"'},{value:'"SingleStart"'},{value:'"SingleEnd"'},{value:'"SingleAuto"'},{value:'"Multiple"'},{value:'"Delete"'},{value:'"SingleStart"'},{value:'"SingleEnd"'},{value:'"SingleAuto"'}]}},listProps:{defaultValue:{value:"{}"},description:"Defines props you can pass to the internal `List` component.\n\n__Note:__ `selectionMode`, `children`, `growing`, `onLoadMore` and `footerText` are not supported.",name:"listProps",required:!1,type:{name:'Omit<ListPropTypes, "children" | "footerText" | "growing" | "selectionMode" | "onLoadMore">'}},confirmButtonProps:{defaultValue:null,description:"Defines the props of the confirm button.\n\n__Note:__`onClick` and `design` are not supported.\n@since 1.25.0",name:"confirmButtonProps",required:!1,type:{name:'Omit<ButtonPropTypes, "onClick" | "design">'}},onSearchInput:{defaultValue:null,description:"This event will be fired when the value of the search field is changed by a user - e.g. at each key press",name:"onSearchInput",required:!1,type:{name:"(event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void"}},onSearch:{defaultValue:null,description:"This event will be fired when the search button has been clicked or the ENTER key has been pressed in the search field.",name:"onSearch",required:!1,type:{name:"((event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void) | ((event: Ui5CustomEvent<IconDomRef, { value: string; }>) => void)"}},onSearchReset:{defaultValue:null,description:"This event will be fired when the reset button has been clicked in the search field or when the dialog is closed.",name:"onSearchReset",required:!1,type:{name:"(event: Ui5CustomEvent<{ prevValue: string; nativeDetail?: number; }, never>) => void"}},onClear:{defaultValue:null,description:"This event will be fired when the clear button has been clicked.",name:"onClear",required:!1,type:{name:"(event: Ui5CustomEvent<ButtonDomRef, { prevSelectedItems: ListItemStandardDomRef[]; nativeDetail: number; }>) => void"}},onConfirm:{defaultValue:null,description:"This event will be fired when the dialog is confirmed by selecting an item in single selection mode or by pressing the confirmation button in multi selection mode.",name:"onConfirm",required:!1,type:{name:"(event: Ui5CustomEvent<ButtonDomRef | ListDomRef, { selectedItems: ListItemBase[]; }>) => void"}},onCancel:{defaultValue:null,description:"This event will be fired when the cancel button is clicked or ESC key is pressed.",name:"onCancel",required:!1,type:{name:"((event: Ui5CustomEvent<ButtonDomRef, ButtonClickEventDetail>) => void) | ((event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void)"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
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

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},accessibleDescriptionRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that describe the component.

**Note:** Available since [v2.11.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents**.`,name:"accessibleDescriptionRef",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:`Indicates if the element is open

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},onOpen:{defaultValue:null,description:`Fired after the component is opened.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},initialFocus:{defaultValue:{value:"undefined"},description:"Defines the ID of the HTML Element, which will get the initial focus.\n\n**Note:** If an element with `autofocus` attribute is added inside the component,\n`initialFocus` won't take effect.",name:"initialFocus",required:!1,type:{name:"string"}},preventFocusRestore:{defaultValue:{value:"false"},description:`Defines if the focus should be returned to the previously focused element,
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
| ✅|❌|`,name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DialogDomRef, never>) => void"}},growing:{defaultValue:{value:'"None"'},description:'Defines whether the component will have growing capability either by pressing a `More` button,\nor via user scroll. In both cases `load-more` event is fired.\n\n**Restrictions:** `growing="Scroll"` is not supported for Internet Explorer,\non IE the component will fallback to `growing="Button"`.',name:"growing",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"None"'}]}},onLoadMore:{defaultValue:null,description:`Fired when the user scrolls to the bottom of the list.

**Note:** The event is fired when the \`growing='Scroll'\` property is enabled.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, never>) => void"}}}}}catch{}const Ee=""+new URL("Laptop1-BiqZozDV.jpg",import.meta.url).href,Pe=""+new URL("Laptop2-CLTht4yo.jpg",import.meta.url).href,Oe=""+new URL("PC1-BekXrNHY.jpg",import.meta.url).href,Ae=""+new URL("PC2-DZLCUDFz.jpg",import.meta.url).href,He={title:"Modals & Popovers / SelectDialog",component:m,argTypes:{children:{control:{disable:!0}}},args:{headerText:"Select Product",open:xe},parameters:{chromatic:{delay:1e3}},tags:["package:@ui5/webcomponents","cem-module:Dialog"]},te=[{img:Ee,description:"LT-10",text:"Gaming Laptop"},{img:Pe,description:"LT-20",text:"Business Laptop"},{img:Ae,description:"HT-10",text:"Gaming PC"},{img:Oe,description:"HT-20",text:"Business PC"}],T={render:l=>{const[y,h]=o.useState(l.open),a=()=>{h(!0)},g=v=>{h(!1),l.onClose(v)};return o.useEffect(()=>{h(l.open)},[l.open]),t.jsxs(t.Fragment,{children:[t.jsx(_,{onClick:a,children:"Open SelectDialog"}),t.jsx(m,{...l,open:y,onClose:g,children:new Array(40).fill("").map((v,r)=>{const c=te[r%4];return t.jsx(Y,{selected:r===1,image:t.jsx("img",{src:c.img,alt:"Example Image"}),description:`${c.description}${r}`,text:c.text},`${c.text}${r}`)})})]})}},B={render:()=>{const[l,y]=o.useState(!1),h={"HT-102":!0,"HT-203":!0,"HT-1038":!0},[a,g]=o.useState(h),v=o.useRef(a),[r,c]=o.useState(),[M,N]=o.useState(Object.keys(h)),V=()=>{v.current=a},j=()=>{y(!0)},C=()=>{y(!1)},f=u=>{c(u.detail.value)},R=()=>{c(void 0)},F=u=>{const i=u.detail.targetItem.dataset.description;g(n=>{if(n[i]){const{[i]:S,...d}=n;return d}else return{...n,[i]:!0}})},L=()=>{g({})},q=()=>{N(Object.keys(a))},k=()=>{g(v.current)};return t.jsxs(t.Fragment,{children:[t.jsx(_,{onClick:j,children:"Open Dialog"}),t.jsx(m,{open:l,selectionMode:w.Multiple,numberOfSelectedItems:Object.keys(a).length,listProps:{onSelectionChange:F},showClearButton:!0,rememberSelections:!0,onClear:L,onConfirm:q,onClose:C,onSearchInput:f,onSearch:f,onSearchReset:R,onBeforeOpen:V,onCancel:k,children:new Array(40).fill("").map((u,i)=>{const n=te[i%4],S=`${n.description}${i}`,d=r?.toLowerCase();return r&&!S.toLowerCase().includes(d)&&!n.text.toLowerCase().includes(d)?null:t.jsx(Y,{image:t.jsx("img",{src:n.img,alt:"Example Image"}),description:`${n.description}${i}`,"data-description":`${n.description}${i}`,selected:a[S],text:n.text},`${n.text}${i}`)}).filter(Boolean)}),t.jsxs(ee,{children:[t.jsx(Ie,{children:"Selected: "}),t.jsx(X,{children:M.join(", ")})]})]})}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};const Me=["Default","MultiSelect"],Ze=Object.freeze(Object.defineProperty({__proto__:null,Default:T,MultiSelect:B,__namedExportsOrder:Me,default:He},Symbol.toStringTag,{value:"Module"}));export{Ze as C,T as D,B as M};
