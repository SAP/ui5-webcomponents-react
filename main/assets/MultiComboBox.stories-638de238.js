import{j as t}from"./jsx-runtime-5926aa06.js";import{_ as b}from"./iframe-963658b1.js";import{M as i,a as e}from"./index-ef69327f.js";import{w as d}from"./withWebComponent-d4224c1c.js";import{V as c}from"./ValueState-ab6838cc.js";const m=d("ui5-mcb-group-item",["text"],[],[],[],()=>b(()=>import("./index-ef69327f.js").then(o=>o.b),["./index-ef69327f.js","./iframe-963658b1.js","./UI5Element-78be0f3d.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-d4224c1c.js","./utils-69f7a0e0.js","./index-ebeaab24.js","./jsx-runtime-5926aa06.js","./useIsomorphicLayoutEffect-38a48652.js","./slot-76e48863.js","./Icon-70a9e5b9.js","./Icons-26e87c01.js","./ResizeHandler-15c77712.js","./ValueState-2c5e5904.js","./Integer-f7f172c9.js","./slim-arrow-down-59731cbb.js","./Device-99b8bbf4.js","./decline-09ce3004.js","./i18n-defaults-80781f7e.js","./Suggestions.css-0bf90e55.js","./information-872f55da.js","./AriaLabelHelper-43a261ec.js","./GroupHeaderListItem-514e58f4.js","./ListItemBase-d5e2b9fa.js","./ItemNavigation-e8f3ce94.js","./TabbableElements-8e49b367.js","./isElementHidden-01c07146.js","./debounce-9c2fb7dd.js","./BusyIndicator-4ada5b66.js","./Label-263c93f2.js","./WrappingType-b81e595a.js","./i18n-defaults-f002f496.js","./class-map-18f572ce.js","./style-map-54298215.js","./BrowserScrollbar.css-119d6915.js","./Tokenizer-2f8b2cc2.js","./ScrollEnablement-5e135290.js","./animate-1a16ba20.js","./ResponsivePopover-5ed17489.js","./Popover-a03c4c52.js","./PopupsCommon.css-1eb36bcf.js","./FocusableElements-53839075.js","./MediaRange-25b98f31.js","./Dialog-35faa92e.js","./Button-427cd4bb.js","./MarkedEvents-b83081e9.js","./Title-e1d9d87f.js","./StandardListItem-4f4de76a.js","./ListItem-6bbd1cb0.js","./RadioButton-1b157057.js","./CheckBox-13a91d81.js","./accept-18821b02.js","./HasPopup-47461347.js","./slim-arrow-right-ccb981dd.js","./Avatar-e1c9d8f0.js","./employee-1c1d2fc1.js","./ResponsivePopoverCommon.css-f39aca2a.js","./ValueStateMessage.css-998b8922.js","./Token-0d832c36.js","./ToggleButton-ebf9d89e.js","./ComboBoxItem-d87d1077.js","./ValueState-ab6838cc.js"],import.meta.url));m.displayName="MultiComboBoxGroupItem";try{m.displayName="MultiComboBoxGroupItem",m.__docgenInfo={description:"The `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups",displayName:"MultiComboBoxGroupItem",props:{text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
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
//# sourceMappingURL=MultiComboBox.stories-638de238.js.map
