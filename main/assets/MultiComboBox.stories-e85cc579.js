import{a as b,j as t}from"./jsx-runtime-670450c2.js";import{_ as d}from"./iframe-1d6fd4e8.js";import{M as r,a as e}from"./index-95d341c7.js";import{w as c}from"./withWebComponent-d280b5c2.js";import{V as C}from"./ValueState-ab6838cc.js";const n=c("ui5-mcb-group-item",["text"],[],[],[],()=>d(()=>import("./index-95d341c7.js").then(o=>o.b),["./index-95d341c7.js","./iframe-1d6fd4e8.js","./UI5Element-d1d93200.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-d280b5c2.js","./utils-ed90fb1b.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./jsx-runtime-670450c2.js","./useIsomorphicLayoutEffect-a838da4a.js","./slot-76e48863.js","./Icon-c8fd92f0.js","./Icons-efeb15d5.js","./ResizeHandler-f4ca1209.js","./ValueState-2c5e5904.js","./Integer-f7f172c9.js","./slim-arrow-down-d9839a36.js","./Device-208919c6.js","./decline-41212cdc.js","./i18n-defaults-80781f7e.js","./Suggestions.css-a2aab2ea.js","./information-859245b4.js","./AriaLabelHelper-43a261ec.js","./GroupHeaderListItem-e1c34f60.js","./ListItemBase-6757af89.js","./ItemNavigation-8971fb55.js","./getActiveElement-bcae01ed.js","./TabbableElements-8e49b367.js","./isElementHidden-01c07146.js","./BrowserScrollbar.css-ab5bee37.js","./debounce-9c2fb7dd.js","./BusyIndicator-57fa4b3b.js","./Label-e3d88218.js","./WrappingType-b81e595a.js","./class-map-6d48ebd3.js","./i18n-defaults-254d6b69.js","./style-map-51d6dd91.js","./Tokenizer-24f846a0.js","./ScrollEnablement-4353003c.js","./animate-1a16ba20.js","./ResponsivePopover-f45885b9.js","./PopupUtils-a92cb9f4.js","./Popover-4088d87a.js","./PopupsCommon.css-1644cafd.js","./FocusableElements-8859c874.js","./MediaRange-25b98f31.js","./Dialog-c83d8172.js","./Button-400e2491.js","./MarkedEvents-b83081e9.js","./Title-6041704e.js","./StandardListItem-3b715734.js","./ListItem-6188cfad.js","./RadioButton-23550da4.js","./CheckBox-2ada2fbd.js","./accept-ca825c33.js","./HasPopup-47461347.js","./slim-arrow-right-a1ee93cb.js","./Avatar-9bebadfe.js","./employee-e0b9815e.js","./ResponsivePopoverCommon.css-82b1f3cc.js","./ValueStateMessage.css-194378a0.js","./Token-14d1f29d.js","./ToggleButton-6bcc3a1e.js","./ComboBoxItem-68b50076.js","./ValueState-ab6838cc.js"],import.meta.url));n.displayName="MultiComboBoxGroupItem";try{n.displayName="MultiComboBoxGroupItem",n.__docgenInfo={description:'The `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/MultiComboBox" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"MultiComboBoxGroupItem",props:{text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
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
//# sourceMappingURL=MultiComboBox.stories-e85cc579.js.map
