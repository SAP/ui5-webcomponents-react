import{j as t}from"./jsx-runtime-d079401a.js";import{_ as b}from"./iframe-559567e7.js";import{M as i,a as e}from"./index-04c9756f.js";import{w as d}from"./withWebComponent-1bab39e1.js";import{V as c}from"./ValueState-ab6838cc.js";const m=d("ui5-mcb-group-item",["text"],[],[],[],()=>b(()=>import("./index-04c9756f.js").then(o=>o.b),["./index-04c9756f.js","./iframe-559567e7.js","./UI5Element-d089e658.js","./CustomElementsScopeUtils-90546106.js","./withWebComponent-1bab39e1.js","./utils-85c0effb.js","./index-f1f2c4b1.js","./jsx-runtime-d079401a.js","./useIsomorphicLayoutEffect-c49de97d.js","./slot-76e48863.js","./Icon-6c84d99e.js","./Icons-d115de21.js","./ResizeHandler-36d5a74c.js","./ValueState-2c5e5904.js","./Integer-f7f172c9.js","./slim-arrow-down-d3e7694d.js","./decline-a017ea5c.js","./i18n-defaults-bdef1cce.js","./Suggestions.css-37c90603.js","./information-ff75d6c3.js","./alert-fa33aca2.js","./AriaLabelHelper-43a261ec.js","./GroupHeaderListItem-e2090297.js","./ListItemBase-9072af4d.js","./ItemNavigation-5bb0bc27.js","./getActiveElement-bcae01ed.js","./TabbableElements-8e49b367.js","./isElementHidden-01c07146.js","./debounce-9c2fb7dd.js","./BusyIndicator-65dcbbf7.js","./Label-49cb1c79.js","./WrappingType-b81e595a.js","./i18n-defaults-a1ecaff4.js","./class-map-a86e04c8.js","./style-map-753edde8.js","./BrowserScrollbar.css-20b91c11.js","./Tokenizer-9a0a6ca4.js","./ScrollEnablement-a5db9b7d.js","./animate-1a16ba20.js","./ResponsivePopover-b595d56f.js","./PopupUtils-caf3caee.js","./Popover-d31df830.js","./PopupsCommon.css-5dfc3685.js","./FocusableElements-320054f2.js","./MediaRange-25b98f31.js","./Dialog-89b0a2f0.js","./Button-28aa77f1.js","./MarkedEvents-b83081e9.js","./Title-3bee1f39.js","./StandardListItem-db320c2b.js","./ListItem-39a60ab2.js","./RadioButton-2c7192c2.js","./CheckBox-f5047736.js","./accept-b3993803.js","./HasPopup-47461347.js","./slim-arrow-right-f2ee719f.js","./Avatar-a6bd6a5d.js","./employee-0930782f.js","./ResponsivePopoverCommon.css-b4ee9bda.js","./ValueStateMessage.css-f60dc45b.js","./Token-2cde66e5.js","./ToggleButton-4b021270.js","./ComboBoxItem-220a6197.js","./ValueState-ab6838cc.js"],import.meta.url));m.displayName="MultiComboBoxGroupItem";try{m.displayName="MultiComboBoxGroupItem",m.__docgenInfo={description:"The `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups",displayName:"MultiComboBoxGroupItem",props:{text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const I={title:"Inputs / MultiComboBox",component:i,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:c.None}},n={render:o=>t.jsxs(i,{...o,children:[t.jsx(e,{text:"Item 1"}),t.jsx(e,{text:"Item 2"}),t.jsx(e,{text:"Item 3"}),t.jsx(e,{text:"Item 4"}),t.jsx(e,{text:"Item 5"})]})},r={render:o=>t.jsxs(i,{...o,children:[t.jsx(m,{text:"Asia"}),t.jsx(e,{text:"Afghanistan"}),t.jsx(e,{text:"China"}),t.jsx(e,{text:"India"}),t.jsx(e,{text:"Indonesia"}),t.jsx(m,{text:"Europe"}),t.jsx(e,{text:"Austria"}),t.jsx(e,{text:"Bulgaria"}),t.jsx(e,{text:"Germany"}),t.jsx(e,{text:"Italy"}),t.jsx(m,{text:"North America"}),t.jsx(e,{text:"Canada"}),t.jsx(e,{text:"Granada"}),t.jsx(e,{text:"Haiti"}),t.jsx(e,{text:"United States"})]})};var a,s,u;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    return <MultiComboBox {...args}>
        <MultiComboBoxItem text="Item 1" />
        <MultiComboBoxItem text="Item 2" />
        <MultiComboBoxItem text="Item 3" />
        <MultiComboBoxItem text="Item 4" />
        <MultiComboBoxItem text="Item 5" />
      </MultiComboBox>;
  }
}`,...(u=(s=n.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var l,x,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(x=r.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};const C=["Default","Grouping"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Grouping:r,__namedExportsOrder:C,default:I},Symbol.toStringTag,{value:"Module"}));export{j as C,n as D,r as G,m as M};
//# sourceMappingURL=MultiComboBox.stories-b36840aa.js.map
