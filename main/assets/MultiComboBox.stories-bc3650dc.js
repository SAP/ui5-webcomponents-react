import{a as b,j as t}from"./jsx-runtime-670450c2.js";import{_ as d}from"./iframe-1aa152d9.js";import{M as r,a as e}from"./index-97685c67.js";import{w as c}from"./withWebComponent-e4481254.js";import{V as C}from"./ValueState-ab6838cc.js";const n=c("ui5-mcb-group-item",["text"],[],[],[],()=>d(()=>import("./index-97685c67.js").then(o=>o.b),["./index-97685c67.js","./iframe-1aa152d9.js","./UI5Element-427ec721.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-e4481254.js","./utils-ed90fb1b.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./jsx-runtime-670450c2.js","./useIsomorphicLayoutEffect-a838da4a.js","./slot-634e3e91.js","./event-97133b94.js","./ResizeHandler-1fa8a094.js","./ValueState-2c5e5904.js","./Keys-3acbae73.js","./Integer-f7f172c9.js","./slim-arrow-down-068fe0af.js","./Icons-7b82f601.js","./Device-208919c6.js","./decline-f2b294b3.js","./i18n-defaults-80781f7e.js","./Suggestions.css-faab6178.js","./information-50e1ad0f.js","./AriaLabelHelper-43a261ec.js","./GroupHeaderListItem-9b8405c5.js","./ListItemBase-16737f88.js","./ItemNavigation-18222ac6.js","./getActiveElement-bcae01ed.js","./TabbableElements-8e49b367.js","./isElementHidden-01c07146.js","./BrowserScrollbar.css-615afd63.js","./debounce-9c2fb7dd.js","./BusyIndicator-46a9aff5.js","./Label-040efebd.js","./WrappingType-b81e595a.js","./class-map-5d8e4b2b.js","./i18n-defaults-d66b3d5e.js","./style-map-77d201d2.js","./Tokenizer-c0596f3c.js","./ScrollEnablement-4353003c.js","./animate-1a16ba20.js","./ResponsivePopover-36c83c4d.js","./PopupUtils-a2e37749.js","./Popover-907d427e.js","./PopupsCommon.css-7d9fbba1.js","./FocusableElements-7e25663e.js","./MediaRange-25b98f31.js","./Dialog-644759b8.js","./Icon-459702a7.js","./Button-04bad9a0.js","./MarkedEvents-b83081e9.js","./Title-b986a4bd.js","./StandardListItem-ed465290.js","./ListItem-20b1ed77.js","./RadioButton-28647d07.js","./CheckBox-90578acd.js","./accept-a98baca8.js","./HasPopup-47461347.js","./slim-arrow-right-bbef5919.js","./Avatar-7c89587d.js","./employee-98ce1b38.js","./ResponsivePopoverCommon.css-187e38b6.js","./ValueStateMessage.css-37773c69.js","./Token-d7b8dcc3.js","./ToggleButton-93dc353f.js","./ComboBoxFilter-ce703529.js","./ValueState-ab6838cc.js"],import.meta.url));n.displayName="MultiComboBoxGroupItem";try{n.displayName="MultiComboBoxGroupItem",n.__docgenInfo={description:'The `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/MultiComboBox" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"MultiComboBoxGroupItem",props:{text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const I={title:"Inputs / MultiComboBox",component:r,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:C.None}},m={render:o=>b(r,{...o,children:[t(e,{text:"Item 1"}),t(e,{text:"Item 2"}),t(e,{text:"Item 3"}),t(e,{text:"Item 4"}),t(e,{text:"Item 5"})]})},i={render:o=>b(r,{...o,children:[t(n,{text:"Asia"}),t(e,{text:"Afghanistan"}),t(e,{text:"China"}),t(e,{text:"India"}),t(e,{text:"Indonesia"}),t(n,{text:"Europe"}),t(e,{text:"Austria"}),t(e,{text:"Bulgaria"}),t(e,{text:"Germany"}),t(e,{text:"Italy"}),t(n,{text:"North America"}),t(e,{text:"Canada"}),t(e,{text:"Granada"}),t(e,{text:"Haiti"}),t(e,{text:"United States"})]})};var a,u,l;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    return <MultiComboBox {...args}>
        <MultiComboBoxItem text="Item 1" />
        <MultiComboBoxItem text="Item 2" />
        <MultiComboBoxItem text="Item 3" />
        <MultiComboBoxItem text="Item 4" />
        <MultiComboBoxItem text="Item 5" />
      </MultiComboBox>;
  }
}`,...(l=(u=m.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var s,x,p;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    return <MultiComboBox {...args}>
        <MultiComboBoxGroupItem text="Asia"></MultiComboBoxGroupItem>
        <MultiComboBoxItem text="Afghanistan"></MultiComboBoxItem>
        <MultiComboBoxItem text="China"></MultiComboBoxItem>
        <MultiComboBoxItem text="India"></MultiComboBoxItem>
        <MultiComboBoxItem text="Indonesia"></MultiComboBoxItem>
        <MultiComboBoxGroupItem text="Europe"></MultiComboBoxGroupItem>
        <MultiComboBoxItem text="Austria"></MultiComboBoxItem>
        <MultiComboBoxItem text="Bulgaria"></MultiComboBoxItem>
        <MultiComboBoxItem text="Germany"></MultiComboBoxItem>
        <MultiComboBoxItem text="Italy"></MultiComboBoxItem>
        <MultiComboBoxGroupItem text="North America"></MultiComboBoxGroupItem>
        <MultiComboBoxItem text="Canada"></MultiComboBoxItem>
        <MultiComboBoxItem text="Granada"></MultiComboBoxItem>
        <MultiComboBoxItem text="Haiti"></MultiComboBoxItem>
        <MultiComboBoxItem text="United States"></MultiComboBoxItem>
      </MultiComboBox>;
  }
}`,...(p=(x=i.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};const M=["Default","Grouping"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:m,Grouping:i,__namedExportsOrder:M,default:I},Symbol.toStringTag,{value:"Module"}));export{y as C,m as D,i as G,n as M};
//# sourceMappingURL=MultiComboBox.stories-bc3650dc.js.map
