import{r as s,ay as G,az as M,f as p,j as n,W as X,x as Y,Q as l,_ as I,e5 as K,g2 as Q,d$ as Z,ad as S,g3 as F,a8 as ee,Z as te,a9 as ne,d0 as oe,aW as ae}from"./iframe-DvixYE7k.js";import"./delete-DfkPPTxM.js";import{a as ie}from"./addCustomCSSWithScoping-OBYOAhu2.js";import{f as le,g as re}from"./utils-8sBoC5N8.js";var H=(e=>(e.ActionSheetBoxShadow="--_ui5wcr_ActionSheet_BoxShadow",e.ActionSheetHeaderBoxShadow="--_ui5wcr_ActionSheet_HeaderBoxShadow",e.ActionSheetMobileHeaderBackground="--_ui5wcr_ActionSheet_MobileHeaderBackground",e.ActionSheetMobileHeaderBorderRadius="--_ui5wcr_ActionSheet_MobileHeaderBorderRadius",e.ActionSheetMobileHeaderBoxShadow="--_ui5wcr_ActionSheet_MobileHeaderBoxShadow",e.ActionSheetMobileHeaderTextColor="--_ui5wcr_ActionSheet_MobileHeaderTextColor",e.ActionSheetTopBorderRadius="--_ui5wcr_ActionSheet_TopBorderRadius",e.AnalyticalTableHeaderActiveTextColor="--_ui5wcr-AnalyticalTable-HeaderActiveTextColor",e.AnalyticalTableHeaderBorderWidth="--_ui5wcr-AnalyticalTable-HeaderBorderWidth",e.AnalyticalTableHeaderFontFamily="--_ui5wcr-AnalyticalTable-HeaderFontFamily",e.AnalyticalTableOuterBorderBlock="--_ui5wcr-AnalyticalTable-OuterBorderBlock",e.AnalyticalTableOuterBorderInline="--_ui5wcr-AnalyticalTable-OuterBorderInline",e.AnalyticalTableOuterCellBorder="--_ui5wcr-AnalyticalTable-OuterCellBorder",e.FormHeaderBorderWidth="--_ui5wcr_Form_HeaderBorderWidth",e.ObjectPageSectionBorderTop="--_ui5wcr_ObjectPage_SectionBorderTop",e.ObjectPageSectionTitleFontFamily="--_ui5wcr_ObjectPage_SectionTitleFontFamily",e.ObjectPageSectionTitleHeight="--_ui5wcr_ObjectPage_SectionTitleHeight",e.ObjectPageSectionTitleLineHeight="--_ui5wcr_ObjectPage_SectionTitleLineHeight",e.ObjectPageSectionTitleTextDecoration="--_ui5wcr_ObjectPage_SectionTitleTextDecoration",e.ObjectPageSubSectionBackgroundColor="--_ui5wcr_ObjectPage_SubSectionBackgroundColor",e.ObjectPageSubSectionBorderRadius="--_ui5wcr_ObjectPage_SubSectionBorderRadius",e.ObjectPageSubSectionPaddingBlockStart="--_ui5wcr_ObjectPage_PaddingBlockStart",e.SplitterBarBorderFix="--_ui5wcr_Splitter_BarBorderHighContrastFix",e.SplitterBarBorderFocus="--_ui5wcr_Splitter_BarBorderFocus",e.SplitterBarBorderStyle="--_ui5wcr_Splitter_BarBorderStyle",e.SplitterBarOutline="--_ui5wcr_Splitter_BarOutline",e.SplitterContentBorderColor="--_ui5wcr_Splitter_ContentBorderColor",e.SplitterIconColor="--_ui5wcr_Splitter_IconColor",e.ToolbarFocusOutline="--_ui5wcr_Toolbar_FocusOutline",e.ToolbarFocusShadow="--_ui5wcr_Toolbar_FocusShadow",e.ScrollbarBorder="--_ui5wcr_Scrollbar_Border",e.ScrollbarBorderRadius="--_ui5wcr_Scrollbar_BorderRadius",e))(H||{});const w=new Proxy(H,{get:(e,a)=>`var(${e[a]})`}),se="@layer ui5-webcomponents-react{._actionSheet_189eg_1::part(content){padding:.1875rem .375rem}._actionSheet_189eg_1 [ui5-button]{display:block;margin:var(--_ui5wcr-ButtonTopBottomPadding)}._actionSheet_189eg_1 [ui5-button]:not([data-cancel-btn])::part(button){justify-content:flex-start}._actionSheet_189eg_1::part(header){background:#0000;box-shadow:var(--_ui5wcr_ActionSheet_HeaderBoxShadow)}._actionSheetMobile_189eg_20::part(content){padding:0!important}._contentMobile_189eg_25{background-color:var(--sapGroup_ContentBackground);border-top-left-radius:var(--_ui5wcr_ActionSheet_TopBorderRadius);border-top-right-radius:var(--_ui5wcr_ActionSheet_TopBorderRadius);box-shadow:var(--_ui5wcr_ActionSheet_BoxShadow);box-sizing:border-box;max-height:82vh;overflow:auto;padding:.25rem .5rem}._contentMobile_189eg_25>*{margin:.25rem 0}}",A={actionSheet:"_actionSheet_189eg_1",actionSheetMobile:"_actionSheetMobile_189eg_20",contentMobile:"_contentMobile_189eg_25"};p()&&ie("ui5-responsive-popover",`
  :host([data-actionsheet]) [ui5-button] {
    display: none;
  }
  :host([data-actionsheet]) [ui5-dialog] {
    top: auto !important;
    bottom: 0;
    height: auto;
    border-radius: ${w.ActionSheetMobileHeaderBorderRadius};
    background-color: ${w.ActionSheetMobileHeaderBackground};
    box-shadow: ${w.ActionSheetMobileHeaderBoxShadow};
    box-sizing: border-box;
    min-height: unset;
  }
  :host([data-actionsheet]) [ui5-title] {
    color: ${w.ActionSheetMobileHeaderTextColor} !important;
    text-shadow: none;
    text-align: start !important;
  }
  `);function ce(e){const{index:a,totalLength:u,...r}=e,h=M("@ui5/webcomponents-react");return n.jsx(l,{accessibleName:`${r.children} ${h.getText(Z,a+1,u)}`,...r,design:I.Transparent,"data-action-btn-index":a})}const c=s.forwardRef((e,a)=>{var O;const{accessibilityAttributes:u,children:r,className:h,header:j,headerText:L,hideCancelButton:B,onOpen:D,open:T,...V}=e;G(se,c.displayName);const q=M("@ui5/webcomponents-react"),i=s.useRef(null),[_,x]=s.useReducer((t,o)=>parseInt(o.target.dataset.actionBtnIndex),0),C=le(r),R=C.length,m=p()&&!B?R+1:R,[$,y]=s.useState(void 0);s.useEffect(()=>{const t=re("ui5-responsive-popover");customElements.whenDefined(t).then(()=>{y(T)})},[T]);const W=()=>{y(!1)},z=(t,o,g)=>n.jsx(ce,{index:o,totalLength:g.length,tabIndex:_===o?0:-1,...t.props,onClick:d=>{var f,b;y(!1),typeof((f=t.props)==null?void 0:f.onClick)=="function"&&((b=t.props)==null||b.onClick(d))},onFocus:d=>{var f,b;typeof((f=t.props)==null?void 0:f.onFocus)=="function"&&((b=t.props)==null||b.onFocus(d)),x(d)}},o),U=t=>{p()&&i.current.querySelector(`[data-action-btn-index="${_}"]`).focus(),typeof D=="function"&&D(t)},J=t=>{var d;const o=parseInt(t.target.dataset.actionBtnIndex),g=(d=i.current)==null?void 0:d.matches(":dir(rtl)");switch(t.key){case"ArrowDown":case(g?"ArrowLeft":"ArrowRight"):o+1<m&&(t.preventDefault(),i.current.querySelector(`[data-action-btn-index="${o+1}"]`).focus());break;case"ArrowUp":case(g?"ArrowRight":"ArrowLeft"):o>0&&(t.preventDefault(),i.current.querySelector(`[data-action-btn-index="${o-1}"]`).focus());break;case"PageUp":t.preventDefault(),i.current.querySelector(`[data-action-btn-index="${Math.max(o-5,0)}"]`).focus();break;case"PageDown":t.preventDefault(),i.current.querySelector(`[data-action-btn-index="${Math.min(o+5,m-1)}"]`).focus();break;case"Home":t.preventDefault(),i.current.querySelector('[data-action-btn-index="0"]').focus();break;case"End":t.preventDefault(),i.current.querySelector(`[data-action-btn-index="${m-1}"]`).focus();break}},N=p();return n.jsx(X,{open:$,headerText:N?L:void 0,header:N?j:void 0,accessibleName:q.getText(Q),...V,onOpen:U,ref:a,className:Y(A.actionSheet,p()&&A.actionSheetMobile,h),"data-actionsheet":!0,children:n.jsxs("div",{className:p()?A.contentMobile:void 0,"data-component-name":"ActionSheetMobileContent",role:((O=u==null?void 0:u.actionSheetMobileContent)==null?void 0:O.role)??"application",onKeyDown:J,ref:i,children:[C.map(z),p()&&!B&&n.jsx(l,{design:I.Negative,onClick:W,tabIndex:_===m-1?0:-1,"data-action-btn-index":m-1,"data-cancel-btn":!0,onFocus:x,children:q.getText(K)})]})})});c.displayName="ActionSheet";try{c.displayName="ActionSheet",c.__docgenInfo={description:`The \`ActionSheet\` holds a list of buttons from which the user can select to complete an action.

The children of the action sheet should be \`Button\` components. Elements in the \`ActionSheet\` are start-aligned. Actions should be arranged in order of importance, from top to bottom.

### Guidelines
- Always display text or text and icons for the actions. Do not use icons only.
- Always provide a Cancel button on mobile phones.
- Avoid scrolling on action sheets.`,displayName:"ActionSheet",props:{headerText:{defaultValue:null,description:"Defines the header text. Will be shown in the header area on phone devices. This prop will be ignored in tablets and desktop browsers.\n\n**Note:** If `header` slot is provided, the `headerText` is ignored.",name:"headerText",required:!1,type:{name:"string"}},header:{defaultValue:null,description:`Defines the header HTML Element. Will be shown in the header area on phone devices. This prop will be ignored in tablets and desktop browsers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--page).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},children:{defaultValue:null,description:"Defines the actions of the `ActionSheet`.\n\n__Note:__ Although this slot accepts all HTML Elements, it is strongly recommended that you only use `Buttons` in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactElement<ButtonPropTypes, string | JSXElementConstructor<any>> | ReactElement<ButtonPropTypes, string | JSXElementConstructor<...>>[]"}},hideCancelButton:{defaultValue:null,description:"Hides the cancel button below the action buttons on mobile devices. No cancel button will be shown on desktop and tablet devices.",name:"hideCancelButton",required:!1,type:{name:"boolean"}},accessibilityAttributes:{defaultValue:null,description:"Defines internally used accessibility properties/attributes.",name:"accessibilityAttributes",required:!1,type:{name:"{ actionSheetMobileContent?: { role?: string; }; }"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},onClose:{defaultValue:null,description:`Fired after the component is closed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<ResponsivePopoverDomRef, never>) => void"}},accessibleDescription:{defaultValue:{value:"undefined"},description:`Defines the accessible description of the component.

**Note:** Available since [v2.11.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents**.`,name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Defines the IDs of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Dialog"'},description:`Allows setting a custom role.

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},footer:{defaultValue:null,description:`Defines the footer HTML Element.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="footer"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"footer",required:!1,type:{name:"UI5WCSlotsNode"}},open:{defaultValue:{value:"false"},description:`Indicates if the element is open

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},initialFocus:{defaultValue:{value:"undefined"},description:"Defines the ID of the HTML Element, which will get the initial focus.\n\n**Note:** If an element with `autofocus` attribute is added inside the component,\n`initialFocus` won't take effect.",name:"initialFocus",required:!1,type:{name:"string"}},accessibleDescriptionRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that describe the component.

**Note:** Available since [v2.11.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents**.`,name:"accessibleDescriptionRef",required:!1,type:{name:"string"}},preventFocusRestore:{defaultValue:{value:"false"},description:`Defines if the focus should be returned to the previously focused element,
when the popup closes.`,name:"preventFocusRestore",required:!1,type:{name:"boolean"}},preventInitialFocus:{defaultValue:{value:"false"},description:`Indicates whether initial focus should be prevented.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"preventInitialFocus",required:!1,type:{name:"boolean"}},onBeforeClose:{defaultValue:null,description:`Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<ResponsivePopoverDomRef, PopupBeforeCloseEventDetail>) => void"}},onBeforeOpen:{defaultValue:null,description:`Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<ResponsivePopoverDomRef, never>) => void"}},onOpen:{defaultValue:null,description:`Fired after the component is opened.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<ResponsivePopoverDomRef, never>) => void"}},allowTargetOverlap:{defaultValue:{value:"false"},description:`Determines if there is no enough space, the component can be placed
over the target.`,name:"allowTargetOverlap",required:!1,type:{name:"boolean"}},hideArrow:{defaultValue:{value:"false"},description:"Determines whether the component arrow is hidden.",name:"hideArrow",required:!1,type:{name:"boolean"}},horizontalAlign:{defaultValue:{value:'"Center"'},description:"Determines the horizontal alignment of the component.",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"Center"'},{value:'"Start"'},{value:'"End"'},{value:'"Stretch"'},{value:'"Center"'},{value:'"Start"'},{value:'"End"'},{value:'"Stretch"'}]}},modal:{defaultValue:{value:"false"},description:`Defines whether the component should close when
clicking/tapping outside of the popover.
If enabled, it blocks any interaction with the background.`,name:"modal",required:!1,type:{name:"boolean"}},opener:{defaultValue:{value:"undefined"},description:"Defines the ID or DOM Reference of the element at which the popover is shown.\nWhen using this attribute in a declarative way, you must only use the `id` (as a string) of the element at which you want to show the popover.\nYou can only set the `opener` attribute to a DOM Reference when using JavaScript.\n\n**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.",name:"opener",required:!1,type:{name:"string | HTMLElement"}},placement:{defaultValue:{value:'"End"'},description:"Determines on which side the component is placed at.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"Start"'},{value:'"End"'},{value:'"Start"'},{value:'"End"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Top"'},{value:'"Bottom"'}]}},verticalAlign:{defaultValue:{value:'"Center"'},description:"Determines the vertical alignment of the component.",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"Center"'},{value:'"Stretch"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Center"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Stretch"'}]}}}}}catch{}try{c.displayName="ActionSheet",c.__docgenInfo={description:`The \`ActionSheet\` holds a list of buttons from which the user can select to complete an action.

The children of the action sheet should be \`Button\` components. Elements in the \`ActionSheet\` are start-aligned. Actions should be arranged in order of importance, from top to bottom.

### Guidelines
- Always display text or text and icons for the actions. Do not use icons only.
- Always provide a Cancel button on mobile phones.
- Avoid scrolling on action sheets.`,displayName:"ActionSheet",props:{headerText:{defaultValue:null,description:"Defines the header text. Will be shown in the header area on phone devices. This prop will be ignored in tablets and desktop browsers.\n\n**Note:** If `header` slot is provided, the `headerText` is ignored.",name:"headerText",required:!1,type:{name:"string"}},header:{defaultValue:null,description:`Defines the header HTML Element. Will be shown in the header area on phone devices. This prop will be ignored in tablets and desktop browsers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--page).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},children:{defaultValue:null,description:"Defines the actions of the `ActionSheet`.\n\n__Note:__ Although this slot accepts all HTML Elements, it is strongly recommended that you only use `Buttons` in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactElement<ButtonPropTypes, string | JSXElementConstructor<any>> | ReactElement<ButtonPropTypes, string | JSXElementConstructor<...>>[]"}},hideCancelButton:{defaultValue:null,description:"Hides the cancel button below the action buttons on mobile devices. No cancel button will be shown on desktop and tablet devices.",name:"hideCancelButton",required:!1,type:{name:"boolean"}},accessibilityAttributes:{defaultValue:null,description:"Defines internally used accessibility properties/attributes.",name:"accessibilityAttributes",required:!1,type:{name:"{ actionSheetMobileContent?: { role?: string; }; }"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},onClose:{defaultValue:null,description:`Fired after the component is closed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<ResponsivePopoverDomRef, never>) => void"}},accessibleDescription:{defaultValue:{value:"undefined"},description:`Defines the accessible description of the component.

**Note:** Available since [v2.11.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents**.`,name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Defines the IDs of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Dialog"'},description:`Allows setting a custom role.

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},footer:{defaultValue:null,description:`Defines the footer HTML Element.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="footer"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"footer",required:!1,type:{name:"UI5WCSlotsNode"}},open:{defaultValue:{value:"false"},description:`Indicates if the element is open

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},initialFocus:{defaultValue:{value:"undefined"},description:"Defines the ID of the HTML Element, which will get the initial focus.\n\n**Note:** If an element with `autofocus` attribute is added inside the component,\n`initialFocus` won't take effect.",name:"initialFocus",required:!1,type:{name:"string"}},accessibleDescriptionRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that describe the component.

**Note:** Available since [v2.11.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents**.`,name:"accessibleDescriptionRef",required:!1,type:{name:"string"}},preventFocusRestore:{defaultValue:{value:"false"},description:`Defines if the focus should be returned to the previously focused element,
when the popup closes.`,name:"preventFocusRestore",required:!1,type:{name:"boolean"}},preventInitialFocus:{defaultValue:{value:"false"},description:`Indicates whether initial focus should be prevented.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"preventInitialFocus",required:!1,type:{name:"boolean"}},onBeforeClose:{defaultValue:null,description:`Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<ResponsivePopoverDomRef, PopupBeforeCloseEventDetail>) => void"}},onBeforeOpen:{defaultValue:null,description:`Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<ResponsivePopoverDomRef, never>) => void"}},onOpen:{defaultValue:null,description:`Fired after the component is opened.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<ResponsivePopoverDomRef, never>) => void"}},allowTargetOverlap:{defaultValue:{value:"false"},description:`Determines if there is no enough space, the component can be placed
over the target.`,name:"allowTargetOverlap",required:!1,type:{name:"boolean"}},hideArrow:{defaultValue:{value:"false"},description:"Determines whether the component arrow is hidden.",name:"hideArrow",required:!1,type:{name:"boolean"}},horizontalAlign:{defaultValue:{value:'"Center"'},description:"Determines the horizontal alignment of the component.",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"Center"'},{value:'"Start"'},{value:'"End"'},{value:'"Stretch"'},{value:'"Center"'},{value:'"Start"'},{value:'"End"'},{value:'"Stretch"'}]}},modal:{defaultValue:{value:"false"},description:`Defines whether the component should close when
clicking/tapping outside of the popover.
If enabled, it blocks any interaction with the background.`,name:"modal",required:!1,type:{name:"boolean"}},opener:{defaultValue:{value:"undefined"},description:"Defines the ID or DOM Reference of the element at which the popover is shown.\nWhen using this attribute in a declarative way, you must only use the `id` (as a string) of the element at which you want to show the popover.\nYou can only set the `opener` attribute to a DOM Reference when using JavaScript.\n\n**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.",name:"opener",required:!1,type:{name:"string | HTMLElement"}},placement:{defaultValue:{value:'"End"'},description:"Determines on which side the component is placed at.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"Start"'},{value:'"End"'},{value:'"Start"'},{value:'"End"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Top"'},{value:'"Bottom"'}]}},verticalAlign:{defaultValue:{value:'"Center"'},description:"Determines the vertical alignment of the component.",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"Center"'},{value:'"Stretch"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Center"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Stretch"'}]}}}}}catch{}const ue="delete",de="email",pe="M480 64q14 0 23 9t9 23v320q0 13-9 22.5t-23 9.5H32q-13 0-22.5-9.5T0 416V96q0-14 9.5-23T32 64h448zM64 96l192 160L448 96H64zm416 16L256 288 32 112v288l133-136 19 18L48 416h416L329 282l17-18 134 136V112z",he=!1,me="SAP-icons-v4",fe="@ui5/webcomponents-icons";S(de,{pathData:pe,ltr:he,collection:me,packageName:fe});const be="email",ve="M422 64q38 0 64 26t26 64v204q0 38-26 64t-64 26H90q-38 0-64-26T0 358V154q0-38 26-64t64-26h332zM90 115q-11 0-22 7l167 108q8 7 21 7t21-7l166-109q-9-6-21-6H90zm332 282q17 0 28-11t11-28V171L305 273q-22 15-49 15-26 0-49-15L51 172v186q0 17 11 28t28 11h332z",ge=!1,we="SAP-icons-v5",Se="@ui5/webcomponents-icons";S(be,{pathData:ve,ltr:ge,collection:we,packageName:Se});const _e="email",ye="forward",Ae="M471.5 170q9 10 9 23t-9 22l-128 128q-10 10-23 10t-23-10q-9-9-9-22.5t9-22.5l74-73h-84q-40 0-75 15t-61 41-41 61-15 75v32q0 13-9 22.5t-23 9.5q-13 0-22.5-9.5T31.5 449v-32q0-53 20.5-99.5t55-81.5 81-55 99.5-20h84l-74-74q-10-10-10-23t10-22q9-10 22-10t23 10z",Be=!1,De=F,Te="SAP-icons-v4",qe="@ui5/webcomponents-icons";S(ye,{pathData:Ae,ltr:Be,accData:De,collection:Te,packageName:qe});const xe="forward",Ce="M320 151h74L289 43q-7-9-7-17 0-11 7.5-18.5T308 0q10 0 18 8l147 151q7 7 7 17 0 11-7 18L326 345q-8 8-18 8-11 0-18.5-7.5T282 327q0-9 7-18l105-107h-74q-49 0-92.5 17T152 266.5t-50.5 73T83 432v54q0 11-7 18.5T58 512t-18.5-7.5T32 486v-54q0-61 22.5-112.5t61.5-89 91.5-58.5T320 151z",Re=!1,Ne=F,Oe="SAP-icons-v5",Pe="@ui5/webcomponents-icons";S(xe,{pathData:Ce,ltr:Re,accData:Ne,collection:Oe,packageName:Pe});const ke="forward",Ee={title:"Modals & Popovers / ActionSheet",component:c,argTypes:{children:{control:{disable:!0}},footer:{control:{disable:!0}},header:{control:{disable:!0}},accessibilityAttributes:{table:{category:"Accessibility props"}}},args:{horizontalAlign:ne.Center,placement:te.End,verticalAlign:ee.Center,open:!1},parameters:{chromatic:{disableSnapshot:!0}},tags:["package:@ui5/webcomponents","cem-module:ResponsivePopover"]},v={render(e){const a=s.useRef(null),[u,r]=s.useState(e.open);return s.useEffect(()=>{r(e.open)},[e.open]),n.jsxs(n.Fragment,{children:[n.jsx(l,{onClick:()=>{r(!0)},ref:a,children:"Open ActionSheet"}),n.jsxs(c,{...e,opener:a.current,open:u,onClose:h=>{e.onClose(h),r(!1)},children:[n.jsx(l,{icon:oe,children:"Accept"}),n.jsx(l,{icon:ae,children:"Reject"}),n.jsx(l,{icon:_e,children:"Email"}),n.jsx(l,{icon:ke,children:"Forward"}),n.jsx(l,{icon:ue,children:"Delete"}),n.jsx(l,{children:"Other"})]})]})}};var P,k,E;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render(args) {
    const buttonRef = useRef<ButtonDomRef>(null);
    const [actionSheetOpen, setActionSheetOpen] = useState<boolean | undefined>(args.open);
    useEffect(() => {
      setActionSheetOpen(args.open);
    }, [args.open]);
    return <>
        <Button onClick={() => {
        setActionSheetOpen(true);
      }} ref={buttonRef}>
          Open ActionSheet
        </Button>
        <ActionSheet {...args} opener={buttonRef.current} open={actionSheetOpen} onClose={e => {
        args.onClose(e);
        setActionSheetOpen(false);
      }}>
          <Button icon={acceptIcon}>Accept</Button>
          <Button icon={declineIcon}>Reject</Button>
          <Button icon={emailIcon}>Email</Button>
          <Button icon={forwardIcon}>Forward</Button>
          <Button icon={deleteIcon}>Delete</Button>
          <Button>Other</Button>
        </ActionSheet>
      </>;
  }
}`,...(E=(k=v.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const Me=["Default"],Le=Object.freeze(Object.defineProperty({__proto__:null,Default:v,__namedExportsOrder:Me,default:Ee},Symbol.toStringTag,{value:"Module"}));export{Le as C,v as D};
