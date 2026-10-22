import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-eq8zrF0J.js";import{i as r,r as i}from"./Icon-B54hMKwd.js";import{n as a,t as o}from"./useI18nBundle-DuzSA0hs.js";import{n as s,t as ee}from"./useStylesheet-BK6LzbXh.js";import{a as c,i as l,o as te,r as u}from"./withWebComponent-DhD1x6sB.js";import{t as d}from"./jsx-runtime-BdxMnOeJ.js";import{$t as ne,Qt as re,Rn as f,Yt as p,g as ie,h as ae,tn as oe}from"./i18n-defaults-BodNgw-G.js";import{d as se,f as ce}from"./Input-BDkyv1Wr.js";import{a as le,i as ue,n as de,o as m}from"./InvisibleMessage-DZEfBUG8.js";import{i as h,r as fe}from"./Title-Bp5Guh7h.js";import{n as g,t as pe}from"./Input-hS7c-wXV.js";import{_,v}from"./List-BCDxANi7.js";import{l as me,n as y,t as he,u as b}from"./FlexBox-D5G1nS1E.js";import{n as x,t as ge}from"./Icon-D0mlyDL3.js";import{l as S,u as _e}from"./Button-D_83k3d2.js";import{n as C,t as ve}from"./List-CPT092kQ.js";import{n as ye,t as w}from"./ListItemStandard-BUjMLIRI.js";import{n as T,t as be}from"./Text-CHVdRnJy.js";import{n as E,t as xe}from"./clsx-Qb-WgvrD.js";import{n as D,t as O}from"./Button-BMYo3Xf9.js";import{n as k,t as Se}from"./Title-B9IIhL1L.js";import{n as Ce,t as A}from"./search-DrA17dwY.js";import{n as j,t as we}from"./Label-CC0T01Qq.js";import{n as M,t as Te}from"./Dialog-C8xZZ43K.js";import{i as N}from"./iframe-wlkdoMhP.js";var Ee,P;function F(){return(F=e((()=>{Ee=`@layer ui5-webcomponents-react{._dialog_3uhsn_1{&::part(header){padding-block-end:.25rem;flex-direction:column;margin-block-end:0}&::part(content){padding:0}}._headerContent_3uhsn_13{display:grid;grid-template-columns:fit-content(100px) minmax(0,1fr) fit-content(100px);grid-template-areas:"titleStart titleCenter cancel" "input input input";grid-template-rows:var(--_ui5wcr-DialogHeaderHeight) var(--_ui5wcr-DialogSubHeaderHeight);width:100%;align-items:center}._title_3uhsn_24{font-size:var(--sapFontLargeSize);font-family:var(--sapFontHeaderFamily);grid-column-start:titleStart;grid-column-end:titleCenter;max-width:100%;overflow:hidden;text-overflow:ellipsis}._titleCenterAlign_3uhsn_34{grid-area:titleCenter;justify-self:center}._hiddenClearBtn_3uhsn_39{grid-area:titleStart;visibility:hidden}._clearBtn_3uhsn_44{grid-area:cancel;justify-self:end}._input_3uhsn_49{grid-area:input;width:100%}._footer_3uhsn_54{display:flex;align-items:center;justify-content:flex-end;width:100%;box-sizing:border-box;> *{margin-inline-start:.5rem}}._inputIcon_3uhsn_66{cursor:pointer;color:var(--sapField_TextColor);&:hover{box-shadow:var(--sapField_Hover_Shadow);background-color:var(--_ui5_input_icon_hover_bg)}&:active{box-shadow:var(--sapField_Hover_Shadow);color:var(--sapButton_Active_TextColor);background-color:var(--sapButton_Active_Background)}}._infoBar_3uhsn_82{height:2rem;background-color:var(--sapInfobar_NonInteractive_Background);color:var(--sapList_TextColor);padding-inline-start:var(--_ui5wcr-CheckBoxPaddingInline);border-block-end:.0625rem solid var(--sapGroup_TitleBorderColor);overflow:hidden;position:sticky;top:0;z-index:1}}`,P={dialog:`_dialog_3uhsn_1`,headerContent:`_headerContent_3uhsn_13`,title:`_title_3uhsn_24`,titleCenterAlign:`_titleCenterAlign_3uhsn_34`,hiddenClearBtn:`_hiddenClearBtn_3uhsn_39`,clearBtn:`_clearBtn_3uhsn_44`,input:`_input_3uhsn_49`,footer:`_footer_3uhsn_54`,inputIcon:`_inputIcon_3uhsn_66`,infoBar:`_infoBar_3uhsn_82`}})))()}var I,L,R;function z(){return(z=e((()=>{_e(),r(),ce(),v(),h(),m(),de(),A(),l(),o(),ee(),c(),E(),I=n(),b(),f(),D(),M(),x(),g(),C(),T(),k(),y(),F(),L=d(),R=(0,I.forwardRef)((e,t)=>{let{accessibleName:n,open:r,children:o,className:ee,confirmButtonText:c,confirmButtonProps:l,growing:d,headerText:f,headerTextAlignCenter:ce,headerTextLevel:de=fe.H1,listProps:m={},selectionMode:h=_.Single,numberOfSelectedItems:g,rememberSelections:v,searchPlaceholder:y,showClearButton:b,onClose:x,onClear:_e,onConfirm:C,onLoadMore:ye,onSearch:w,onSearchInput:T,onSearchReset:E,onBeforeOpen:D,onBeforeClose:k,onOpen:A,onCancel:j,...we}=e;s(Ee,R.displayName);let M=a(`@ui5/webcomponents-react`),[N,F]=(0,I.useState)(``),[z,B]=(0,I.useState)([]),[V,H]=te(m.ref),[U,W]=(0,I.useState)(r);(0,I.useEffect)(()=>{W(r)},[r]);let G=e=>{let t=H.current?.getSelectedItems()??[];typeof D==`function`&&D(e),h===_.Multiple&&H.current?.hasData&&B(t)},K=e=>{typeof A==`function`&&A(e),H.current?.focusFirstItem()},De=e=>{!e.target.value&&e.detail.inputType===``&&q(e),typeof T==`function`&&T(u(e,{value:e.target.value})),F(e.target.value)},Oe=e=>{typeof w==`function`&&(e.type===`keyup`&&e.code===`Enter`&&w(u(e,{value:e.target.value})),e.type===`click`&&w(u(e,{value:N})))},q=e=>{typeof E==`function`&&E(u(e,{prevValue:N})),F(``)},J=e=>{let{selectedItems:t}=e.detail;typeof m?.onSelectionChange==`function`&&m.onSelectionChange(e),h===_.Multiple?(B(t),t.length&&ue(M.getText(oe,t.length),le.Polite)):(typeof C==`function`&&C(e),W(!1))},ke=e=>{W(!1),typeof j==`function`&&j(e)},Y=e=>{typeof _e==`function`&&_e(u(e,{prevSelectedItems:z})),B([]),H.current?.deselectSelectedItems()},X=e=>{typeof C==`function`&&C(u(e,{selectedItems:z})),W(!1)},Z=e=>{W(!1),typeof x==`function`&&x(e),typeof E==`function`&&E(u(e,{prevValue:N})),F(``),v||H.current?.deselectSelectedItems()},Q=e=>{typeof k==`function`&&k(e),typeof j==`function`&&e.detail.escPressed&&j(e)};return(0,L.jsxs)(Te,{...we,open:U,"data-component-name":`SelectDialog`,ref:t,className:xe(P.dialog,ee),onClose:Z,onBeforeOpen:G,onOpen:K,onBeforeClose:Q,accessibleName:n??f,children:[(0,L.jsxs)(`div`,{className:P.headerContent,slot:`header`,"data-sap-ui-fastnavgroup":`true`,children:[b&&ce&&(0,L.jsx)(O,{onClick:Y,design:S.Transparent,className:P.hiddenClearBtn,tabIndex:-1,"aria-hidden":`true`,children:M.getText(ie)}),(0,L.jsx)(Se,{className:xe(P.title,ce&&P.titleCenterAlign),level:de,children:f}),b&&(0,L.jsx)(O,{onClick:Y,design:S.Transparent,className:P.clearBtn,children:M.getText(ie)}),(0,L.jsx)(pe,{className:P.input,accessibleName:y??M.getText(p),value:N,placeholder:y??M.getText(p),onInput:De,onKeyUp:Oe,type:se.Search,showClearIcon:!0,icon:(0,L.jsx)(L.Fragment,{children:(0,L.jsx)(ge,{mode:i.Decorative,name:Ce,className:P.inputIcon,onClick:Oe,accessibleName:M.getText(p),title:M.getText(p)})})})]}),h===_.Multiple&&(!!z.length||g>0)&&(0,L.jsx)(he,{alignItems:me.Center,className:P.infoBar,children:(0,L.jsx)(be,{children:`${M.getText(ne)}: ${g??z.length}`})}),(0,L.jsx)(ve,{...m,ref:V,growing:d,onLoadMore:ye,selectionMode:h,onSelectionChange:J,"data-sap-ui-fastnavgroup":`true`,children:o}),(0,L.jsxs)(`div`,{slot:`footer`,className:P.footer,"data-sap-ui-fastnavgroup":`true`,children:[h===_.Multiple&&(0,L.jsx)(O,{...l,onClick:X,design:S.Emphasized,children:c??M.getText(re)}),(0,L.jsx)(O,{onClick:ke,design:S.Transparent,children:M.getText(ae)})]})]})}),R.displayName=`SelectDialog`;try{R.displayName=`SelectDialog`,R.__docgenInfo={description:`The SelectDialog enables users to filter a comprehensive list via a search field and to select one or more items.`,displayName:`SelectDialog`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,methods:[],props:{accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`}],description:`Defines the accessible name of the component.

__Note:__ If not set, the dialog uses the \`headerText\` for its accessible name.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`}],description:`Defines the list items of the component.

__Note:__ Although this prop accepts all HTML Elements and therefore also all list items, it is strongly recommended that you only use \`ListItemStandard\` in order to preserve the intended design.`,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},showClearButton:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`}],description:"This flag controls whether the Clear button is shown. When set to `true`, it provides a way to clear selections. We recommend enabling the Clear button in cases where a mechanism to delete the selection is required: In single selection mode (default mode) or when `rememberSelections` is set to `true`.",name:`showClearButton`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},headerText:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`}],description:`Defines the header text.`,name:`headerText`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`},required:!1,tags:{},type:{name:`string`}},headerTextAlignCenter:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`}],description:"Specifies the `headerText` alignment.",name:`headerTextAlignCenter`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},headerTextLevel:{defaultValue:{value:`"H1"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`}],description:'Defines the aria-level of the `headerText`.\nAvailable options are: `"H1"` to `"H6"`.\nThis property does not influence the style of the `headerText`.',name:`headerTextLevel`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`},required:!1,tags:{default:`"H1"`},type:{name:`enum`,raw:`TitleLevel | "H1" | "H2" | "H3" | "H4" | "H5" | "H6"`,value:[{value:`"H1"`,description:"Renders `h1` tag.",fullComment:"Renders `h1` tag.\n@public",tags:{public:``}},{value:`"H2"`,description:"Renders `h2` tag.",fullComment:"Renders `h2` tag.\n@public",tags:{public:``}},{value:`"H3"`,description:"Renders `h3` tag.",fullComment:"Renders `h3` tag.\n@public",tags:{public:``}},{value:`"H4"`,description:"Renders `h4` tag.",fullComment:"Renders `h4` tag.\n@public",tags:{public:``}},{value:`"H5"`,description:"Renders `h5` tag.",fullComment:"Renders `h5` tag.\n@public",tags:{public:``}},{value:`"H6"`,description:"Renders `h6` tag.",fullComment:"Renders `h6` tag.\n@public",tags:{public:``}},{value:`"H1"`},{value:`"H2"`},{value:`"H3"`},{value:`"H4"`},{value:`"H5"`},{value:`"H6"`}]}},confirmButtonText:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`}],description:`Overwrites the default text for the confirmation button.`,name:`confirmButtonText`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`},required:!1,tags:{},type:{name:`string`}},rememberSelections:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`}],description:`This flag controls whether the dialog clears the selection after the confirm event has been fired. If the dialog needs to be opened multiple times in the same context to allow for corrections of previous user inputs, set this flag to \`true\`.

__Note:__ This won't work if the dialog is unmounted, if you want to unmount the dialog when closed, you need to persist the selection yourself.`,name:`rememberSelections`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},numberOfSelectedItems:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`}],description:"Defines the number of selected list items displayed above the list in `MultiSelect` mode. Programmatically setting the counter is necessary if all previously selected elements are to remain selected during search.",name:`numberOfSelectedItems`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`},required:!1,tags:{},type:{name:`number`}},selectionMode:{defaultValue:{value:`ListSelectionMode.Single`},declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`}],description:"Defines the mode of the SelectDialog list.\n\n__Note:__ Although this prop accepts all `ListSelectionMode`s, it is strongly recommended that you only use `Single` or `Multiple` in order to preserve the intended design.",name:`selectionMode`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`},required:!1,tags:{default:`ListSelectionMode.Single`},type:{name:`enum`,raw:`"None" | "Single" | "Multiple" | "Delete" | ListSelectionMode | "SingleStart" | "SingleEnd" | "SingleAuto"`,value:[{value:`"None"`},{value:`"Single"`},{value:`"Multiple"`},{value:`"Delete"`},{value:`"None"`,description:`Default mode (no selection).`,fullComment:`Default mode (no selection).
@public`,tags:{public:``}},{value:`"Single"`,description:`Right-positioned single selection mode (only one list item can be selected).`,fullComment:`Right-positioned single selection mode (only one list item can be selected).
@public`,tags:{public:``}},{value:`"SingleStart"`,description:`Left-positioned single selection mode (only one list item can be selected).`,fullComment:`Left-positioned single selection mode (only one list item can be selected).
@public`,tags:{public:``}},{value:`"SingleEnd"`,description:`Selected item is highlighted but no selection element is visible
(only one list item can be selected).`,fullComment:`Selected item is highlighted but no selection element is visible
(only one list item can be selected).
@public`,tags:{public:``}},{value:`"SingleAuto"`,description:`Selected item is highlighted and selection is changed upon arrow navigation
(only one list item can be selected - this is always the focused item).`,fullComment:`Selected item is highlighted and selection is changed upon arrow navigation
(only one list item can be selected - this is always the focused item).
@public`,tags:{public:``}},{value:`"Multiple"`,description:`Multi selection mode (more than one list item can be selected).`,fullComment:`Multi selection mode (more than one list item can be selected).
@public`,tags:{public:``}},{value:`"Delete"`,description:`Delete mode (only one list item can be deleted via provided delete button)`,fullComment:`Delete mode (only one list item can be deleted via provided delete button)
@public`,tags:{public:``}},{value:`"SingleStart"`},{value:`"SingleEnd"`},{value:`"SingleAuto"`}]}},listProps:{defaultValue:{value:`{}`},declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`}],description:"Defines props you can pass to the internal `List` component.\n\n__Note:__ `selectionMode`, `children`, `growing`, `onLoadMore` and `footerText` are not supported.",name:`listProps`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`},required:!1,tags:{default:`{}`},type:{name:`Omit<ListPropTypes, "children" | "selectionMode" | "onLoadMore" | "footerText" | "growing">`}},confirmButtonProps:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`}],description:"Defines the props of the confirm button.\n\n__Note:__`onClick` and `design` are not supported.",name:`confirmButtonProps`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`},required:!1,tags:{since:`1.25.0`},type:{name:`Omit<ButtonPropTypes, "onClick" | "design">`}},searchPlaceholder:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`}],description:`
Allows overriding the SearchField's default placeholder text. If not set, the word "Search" in the current local language or English will be used as a placeholder.

__Note:__ The placeholder is used as accessible-name of the input for screen reader support.`,name:`searchPlaceholder`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`},required:!1,tags:{since:`2.23.0`},type:{name:`string`}},onSearchInput:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`}],description:`This event will be fired when the value of the search field is changed by a user - e.g. at each key press`,name:`onSearchInput`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void`}},onSearch:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`}],description:`This event will be fired when the search button has been clicked or the ENTER key has been pressed in the search field.`,name:`onSearch`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`((event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void) | ((event: Ui5CustomEvent<IconDomRef, { value: string; }>) => void)`,value:[{value:`(event: Ui5CustomEvent<InputDomRef, { value: string; }>) => void`,description:``,fullComment:``,tags:{}},{value:`(event: Ui5CustomEvent<IconDomRef, { value: string; }>) => void`,description:``,fullComment:``,tags:{}}]}},onSearchReset:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`}],description:`This event will be fired when the reset button has been clicked in the search field or when the dialog is closed.`,name:`onSearchReset`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<{ prevValue: string; nativeDetail?: number; }, never>) => void`}},onClear:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`}],description:`This event will be fired when the clear button has been clicked.`,name:`onClear`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ButtonDomRef, { prevSelectedItems: ListItemStandardDomRef[]; nativeDetail: number; }>) => void`}},onConfirm:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`}],description:`This event will be fired when the dialog is confirmed by selecting an item in single selection mode or by pressing the confirmation button in multi selection mode.`,name:`onConfirm`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ListDomRef | ButtonDomRef, { selectedItems: ListItemBase[]; }>) => void`}},onCancel:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`}],description:`This event will be fired when the cancel button is clicked or ESC key is pressed.`,name:`onCancel`,parent:{fileName:`webcomponents-react/packages/main/dist/components/SelectDialog/index.d.ts`,name:`SelectDialogPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`((event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void) | ((event: Ui5CustomEvent<ButtonDomRef, ButtonClickEventDetail>) => void)`,value:[{value:`(event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void`,description:``,fullComment:``,tags:{}},{value:`(event: Ui5CustomEvent<ButtonDomRef, ButtonClickEventDetail>) => void`,description:``,fullComment:``,tags:{}}]}},accessibleDescription:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`}],description:`Defines the accessible description of the component.

**Note:** Available since [v2.11.0](https://github.com/UI5/webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents**.`,name:`accessibleDescription`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleDescriptionRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`}],description:`Receives id(or many ids) of the elements that describe the component.

**Note:** Available since [v2.11.0](https://github.com/UI5/webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents**.`,name:`accessibleDescriptionRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleNameRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`}],description:`Defines the IDs of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/UI5/webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:`accessibleNameRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleRole:{defaultValue:{value:`"Dialog"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`}],description:`Allows setting a custom role.

**Note:** Available since [v1.10.0](https://github.com/UI5/webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:`accessibleRole`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`},required:!1,tags:{default:`"Dialog"`},type:{name:`enum`,raw:`PopupAccessibleRole | "None" | "Dialog" | "AlertDialog"`,value:[{value:`"None"`,description:`Represents no ARIA role.`,fullComment:`Represents no ARIA role.
@public`,tags:{public:``}},{value:`"Dialog"`,description:`Represents the ARIA role "dialog".`,fullComment:`Represents the ARIA role "dialog".
@public`,tags:{public:``}},{value:`"AlertDialog"`,description:`Represents the ARIA role "alertdialog".`,fullComment:`Represents the ARIA role "alertdialog".
@public`,tags:{public:``}},{value:`"None"`},{value:`"Dialog"`},{value:`"AlertDialog"`}]}},initialFocus:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`}],description:"Defines the ID of the HTML Element, which will get the initial focus.\n\n**Note:** If an element with `autofocus` attribute is added inside the component,\n`initialFocus` won't take effect.",name:`initialFocus`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},open:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`}],description:`Indicates if the element is open

**Note:** Available since [v1.2.0](https://github.com/UI5/webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:`open`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},preventFocusRestore:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`}],description:`Defines if the focus should be returned to the previously focused element,
when the popup closes.

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.`,name:`preventFocusRestore`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},preventInitialFocus:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`}],description:`Indicates whether initial focus should be prevented.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:`preventInitialFocus`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},resizable:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`}],description:`Configures the component to be resizable.
If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages.
In RTL languages, the resize handle will be placed in the bottom left corner.

**Note:** The component can be resizable only in desktop mode.

**Note:** Upon resizing, externally defined height and width styling will be ignored.

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.`,name:`resizable`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},onBeforeClose:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogPropTypes`}],description:`Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:`onBeforeClose`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void`}},onBeforeOpen:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogPropTypes`}],description:`Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:`onBeforeOpen`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<DialogDomRef, never>) => void`}},onClose:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogPropTypes`}],description:`Fired after the component is closed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:`onClose`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<DialogDomRef, never>) => void`}},onOpen:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogPropTypes`}],description:`Fired after the component is opened.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:`onOpen`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<DialogDomRef, never>) => void`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},draggable:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`}],description:`Determines whether the component is draggable.
If this property is set to true, the Dialog will be draggable by its header.

**Note:** The component can be draggable only in desktop mode.

**Note:** This property overrides the default HTML "draggable" attribute native behavior.
When "draggable" is set to true, the native browser "draggable"
behavior is prevented and only the Dialog custom logic ("draggable by its header") works.

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.`,name:`draggable`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},showFullscreenButton:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`}],description:`Defines whether a fullscreen toggle button is shown in the dialog header.
When pressed, it toggles the \`stretch\` property.
The fullscreen button is not available on phone devices.

**Note:** The fullscreen button is not available on phone devices,
nor when a custom header slot is provided — the application is expected
to render its own toggle inside the custom header in those cases.

**Note:** Available since [v2.25.0](https://github.com/UI5/webcomponents/releases/tag/v2.25.0) of **@ui5/webcomponents**.`,name:`showFullscreenButton`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},stretch:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`}],description:`Determines if the dialog will be stretched to full screen on mobile. On desktop,
the dialog will be stretched to approximately 90% of the viewport.

**Note:** For better usability of the component it is recommended to set this property to "true" when the dialog is opened on phone.`,name:`stretch`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},onLoadMore:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`}],description:`Fired when the user scrolls to the bottom of the list.

**Note:** The event is fired when the \`growing='Scroll'\` property is enabled.

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onLoadMore`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ListDomRef, never>) => void`}},growing:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:'Defines whether the component will have growing capability either by pressing a `More` button,\nor via user scroll. In both cases `load-more` event is fired.\n\n**Restrictions:** `growing="Scroll"` is not supported for Internet Explorer,\non IE the component will fallback to `growing="Button"`.\n\n**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.',name:`growing`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | "Button" | ListGrowingMode | "Scroll"`,value:[{value:`"None"`},{value:`"Button"`},{value:`"Button"`,description:`Component's "load-more" is fired upon pressing a "More" button.
at the bottom.`,fullComment:`Component's "load-more" is fired upon pressing a "More" button.
at the bottom.
@public`,tags:{public:``}},{value:`"Scroll"`,description:`Component's "load-more" is fired upon scroll.`,fullComment:`Component's "load-more" is fired upon scroll.
@public`,tags:{public:``}},{value:`"None"`,description:`Component's growing is not enabled.`,fullComment:`Component's growing is not enabled.
@public`,tags:{public:``}},{value:`"Scroll"`}]}}},tags:{}}}catch{}})))()}var B;function V(){return(V=e((()=>{B=new URL(`Laptop1-BiqZozDV.jpg`,import.meta.url).href})))()}var H;function U(){return(U=e((()=>{H=new URL(`Laptop2-CLTht4yo.jpg`,import.meta.url).href})))()}var W;function G(){return(G=e((()=>{W=new URL(`PC1-BekXrNHY.jpg`,import.meta.url).href})))()}var K;function De(){return(De=e((()=>{K=new URL(`PC2-DZLCUDFz.jpg`,import.meta.url).href})))()}var Oe=t({Default:()=>X,MultiSelect:()=>Z,SearchResultAnnouncement:()=>$,__namedExportsOrder:()=>Ae,default:()=>ke}),q,J,ke,Y,X,Z,Q,$,Ae;function je(){return(je=e((()=>{V(),U(),G(),De(),N(),v(),m(),de(),q=n(),D(),j(),ye(),T(),y(),z(),J=d(),ke={title:`Modals & Popovers / SelectDialog`,component:R,argTypes:{children:{control:{disable:!0}},onSearch:{control:{disable:!0}},onCancel:{control:{disable:!0}}},args:{headerText:`Select Product`,open:!1},parameters:{chromatic:{delay:1e3}},tags:[`extends:@ui5/webcomponents`,`cem-module:Dialog`,`package:@ui5/webcomponents-react`]},Y=[{img:B,description:`LT-10`,text:`Gaming Laptop`},{img:H,description:`LT-20`,text:`Business Laptop`},{img:K,description:`HT-10`,text:`Gaming PC`},{img:W,description:`HT-20`,text:`Business PC`}],X={render:e=>{let[t,n]=(0,q.useState)(e.open),r=()=>{n(!0)},i=t=>{n(!1),e.onClose(t)};return(0,q.useEffect)(()=>{n(e.open)},[e.open]),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(O,{onClick:r,children:`Open SelectDialog`}),(0,J.jsx)(R,{...e,open:t,onClose:i,children:Array(40).fill(``).map((e,t)=>{let n=Y[t%4];return(0,J.jsx)(w,{selected:t===1,image:(0,J.jsx)(`img`,{src:n.img,alt:`Example Image`}),description:`${n.description}${t}`,text:n.text},`${n.text}${t}`)})})]})}},Z={render:()=>{let[e,t]=(0,q.useState)(!1),n={"HT-102":!0,"HT-203":!0,"HT-1038":!0},[r,i]=(0,q.useState)(n),a=(0,q.useRef)(r),[o,s]=(0,q.useState)(),[ee,c]=(0,q.useState)(Object.keys(n)),l=()=>{a.current=r},te=()=>{t(!0)},u=()=>{t(!1)},d=e=>{s(e.detail.value)};return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(O,{onClick:te,children:`Open Dialog`}),(0,J.jsx)(R,{open:e,selectionMode:_.Multiple,numberOfSelectedItems:Object.keys(r).length,listProps:{onSelectionChange:e=>{let t=e.detail.targetItem.dataset.description;i(e=>{if(e[t]){let{[t]:n,...r}=e;return r}return{...e,[t]:!0}})}},showClearButton:!0,rememberSelections:!0,onClear:()=>{i({})},onConfirm:()=>{c(Object.keys(r))},onClose:u,onSearchInput:d,onSearch:d,onSearchReset:()=>{s(void 0)},onBeforeOpen:l,onCancel:()=>{i(a.current)},children:Array(40).fill(``).map((e,t)=>{let n=Y[t%4],i=`${n.description}${t}`,a=o?.toLowerCase();return o&&!i.toLowerCase().includes(a)&&!n.text.toLowerCase().includes(a)?null:(0,J.jsx)(w,{image:(0,J.jsx)(`img`,{src:n.img,alt:`Example Image`}),description:`${n.description}${t}`,"data-description":`${n.description}${t}`,selected:r[i],text:n.text},`${n.text}${t}`)}).filter(Boolean)}),(0,J.jsxs)(he,{children:[(0,J.jsx)(we,{children:`Selected: `}),(0,J.jsx)(be,{children:ee.join(`, `)})]})]})}},Q=Array.from({length:40},(e,t)=>({id:`P-${t.toString().padStart(3,`0`)}`,text:[`Gaming Laptop`,`Business Laptop`,`Gaming PC`,`Business PC`][t%4]})),$={render:()=>{let[e,t]=(0,q.useState)(!1),[n,r]=(0,q.useState)(``),i=(0,q.useMemo)(()=>{let e=n.trim().toLowerCase();return e?Q.filter(t=>t.id.toLowerCase().includes(e)||t.text.toLowerCase().includes(e)):Q},[n]),a=e=>{ue(e===0?`No results found`:`${e} results available`,le.Polite)};return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(O,{onClick:()=>t(!0),children:`Open SelectDialog`}),(0,J.jsx)(R,{headerText:`Select Product`,open:e,onClose:()=>t(!1),onSearch:e=>{r(e.detail.value),a(i.length)},onSearchReset:()=>{r(``),a(Q.length)},children:i.map(e=>(0,J.jsx)(w,{description:e.id,text:e.text},e.id))})]})}},Ae=[`Default`,`MultiSelect`,`SearchResultAnnouncement`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const filteredItems = useMemo(() => {
      const query = searchValue.trim().toLowerCase();
      if (!query) {
        return announcementItems;
      }
      return announcementItems.filter(item => item.id.toLowerCase().includes(query) || item.text.toLowerCase().includes(query));
    }, [searchValue]);
    const announceCount = (count: number) => {
      announce(count === 0 ? 'No results found' : \`\${count} results available\`, InvisibleMessageMode.Polite);
    };
    const handleSearch = (event: Parameters<NonNullable<SelectDialogPropTypes['onSearch']>>[0]) => {
      setSearchValue(event.detail.value);
      announceCount(filteredItems.length);
    };
    const handleSearchReset = () => {
      setSearchValue('');
      announceCount(announcementItems.length);
    };
    return <>
        <Button onClick={() => setOpen(true)}>Open SelectDialog</Button>
        <SelectDialog headerText="Select Product" open={open} onClose={() => setOpen(false)} onSearch={handleSearch} onSearchReset={handleSearchReset}>
          {filteredItems.map(item => <ListItemStandard key={item.id} description={item.id} text={item.text} />)}
        </SelectDialog>
      </>;
  }
}`,...$.parameters?.docs?.source}}}})))()}export{je as a,Oe as i,Z as n,$ as r,X as t};