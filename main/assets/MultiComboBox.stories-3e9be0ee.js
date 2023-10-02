import{j as t}from"./jsx-runtime-d079401a.js";import{_ as b}from"./iframe-0cd87302.js";import{M as i,a as e}from"./index-fd7dd232.js";import{w as d}from"./withWebComponent-40b4b429.js";import{V as c}from"./ValueState-ab6838cc.js";const m=d("ui5-mcb-group-item",["text"],[],[],[],()=>b(()=>import("./index-fd7dd232.js").then(o=>o.b),["./index-fd7dd232.js","./iframe-0cd87302.js","./UI5Element-fe43d284.js","./CustomElementsScopeUtils-7e643eaa.js","./withWebComponent-40b4b429.js","./utils-64df43e3.js","./index-f1f2c4b1.js","./jsx-runtime-d079401a.js","./useIsomorphicLayoutEffect-c49de97d.js","./slot-76e48863.js","./Icon-4b8e6c3e.js","./Icons-1d0bcfc0.js","./ResizeHandler-c2d89e75.js","./ValueState-2c5e5904.js","./Integer-f7f172c9.js","./slim-arrow-down-b87cbef6.js","./decline-6c7fc0a2.js","./i18n-defaults-bdef1cce.js","./Suggestions.css-a7aca9e4.js","./information-5d7a8806.js","./alert-1b225bb9.js","./AriaLabelHelper-43a261ec.js","./GroupHeaderListItem-1642eb17.js","./ListItemBase-a954caa9.js","./ItemNavigation-6fcc55ad.js","./getActiveElement-bcae01ed.js","./TabbableElements-8e49b367.js","./isElementHidden-01c07146.js","./debounce-9c2fb7dd.js","./BusyIndicator-9ca5d237.js","./Label-44520d2b.js","./WrappingType-b81e595a.js","./i18n-defaults-d5195a49.js","./class-map-c90b90b7.js","./style-map-26bcc635.js","./BrowserScrollbar.css-6733af99.js","./Tokenizer-069dd295.js","./ScrollEnablement-fd871a80.js","./animate-1a16ba20.js","./ResponsivePopover-a1211aea.js","./PopupUtils-6f7aa5d8.js","./Popover-e0a9892e.js","./PopupsCommon.css-20392ac5.js","./FocusableElements-81dc3a15.js","./MediaRange-25b98f31.js","./Dialog-524beb63.js","./Button-ca10e4c6.js","./MarkedEvents-b83081e9.js","./Title-01167e9e.js","./StandardListItem-4d8bc973.js","./ListItem-8f00fe18.js","./RadioButton-2fcb52b7.js","./CheckBox-e1cfdb7e.js","./accept-9e169369.js","./HasPopup-47461347.js","./slim-arrow-right-bfe8f962.js","./Avatar-b61e760c.js","./employee-6f8dc3b6.js","./ResponsivePopoverCommon.css-fd1b094e.js","./ValueStateMessage.css-a9dd0528.js","./Token-c6a017b3.js","./ToggleButton-e803c376.js","./ComboBoxItem-27f0ab2e.js","./ValueState-ab6838cc.js"],import.meta.url));m.displayName="MultiComboBoxGroupItem";try{m.displayName="MultiComboBoxGroupItem",m.__docgenInfo={description:"The `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups",displayName:"MultiComboBoxGroupItem",props:{text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
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
//# sourceMappingURL=MultiComboBox.stories-3e9be0ee.js.map
