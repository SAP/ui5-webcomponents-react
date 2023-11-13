import{j as t}from"./jsx-runtime-d079401a.js";import{_ as b}from"./iframe-b302be49.js";import{M as i,a as e}from"./index-115d54c9.js";import{w as d}from"./withWebComponent-f146e44d.js";import{V as c}from"./ValueState-ab6838cc.js";const m=d("ui5-mcb-group-item",["text"],[],[],[],()=>b(()=>import("./index-115d54c9.js").then(o=>o.b),["./index-115d54c9.js","./iframe-b302be49.js","./UI5Element-d089e658.js","./CustomElementsScopeUtils-90546106.js","./withWebComponent-f146e44d.js","./utils-85c0effb.js","./index-f1f2c4b1.js","./jsx-runtime-d079401a.js","./useIsomorphicLayoutEffect-c49de97d.js","./slot-76e48863.js","./Icon-dc979b51.js","./Icons-d115de21.js","./ResizeHandler-36d5a74c.js","./ValueState-2c5e5904.js","./Integer-f7f172c9.js","./slim-arrow-down-d3e7694d.js","./decline-a017ea5c.js","./i18n-defaults-bdef1cce.js","./Suggestions.css-7aca78e8.js","./information-ff75d6c3.js","./alert-fa33aca2.js","./AriaLabelHelper-43a261ec.js","./GroupHeaderListItem-bda61d02.js","./ListItemBase-8f94593b.js","./ItemNavigation-5bb0bc27.js","./getActiveElement-bcae01ed.js","./TabbableElements-8e49b367.js","./isElementHidden-01c07146.js","./debounce-9c2fb7dd.js","./BusyIndicator-30d2b934.js","./Label-025b0296.js","./WrappingType-b81e595a.js","./i18n-defaults-a1ecaff4.js","./class-map-5b190712.js","./style-map-2f7624b7.js","./BrowserScrollbar.css-e63eefff.js","./Tokenizer-8d7fb1af.js","./ScrollEnablement-a5db9b7d.js","./animate-1a16ba20.js","./ResponsivePopover-46599dee.js","./PopupUtils-caf3caee.js","./Popover-84fe14ea.js","./PopupsCommon.css-070f9d59.js","./FocusableElements-320054f2.js","./MediaRange-25b98f31.js","./Dialog-d6d3e16c.js","./Button-f20bbbdf.js","./MarkedEvents-b83081e9.js","./Title-53f5d1e4.js","./StandardListItem-e433cbf1.js","./ListItem-237bd455.js","./RadioButton-894dc7d7.js","./CheckBox-e4c9f0e7.js","./accept-b3993803.js","./HasPopup-47461347.js","./slim-arrow-right-f2ee719f.js","./Avatar-d6a8bd34.js","./employee-0930782f.js","./ResponsivePopoverCommon.css-ef6cd2ad.js","./ValueStateMessage.css-7d9802b8.js","./Token-d5b8cdd4.js","./ToggleButton-999ad82c.js","./ComboBoxItem-885416eb.js","./ValueState-ab6838cc.js"],import.meta.url));m.displayName="MultiComboBoxGroupItem";try{m.displayName="MultiComboBoxGroupItem",m.__docgenInfo={description:"The `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups",displayName:"MultiComboBoxGroupItem",props:{text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
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
//# sourceMappingURL=MultiComboBox.stories-a564cfa9.js.map
