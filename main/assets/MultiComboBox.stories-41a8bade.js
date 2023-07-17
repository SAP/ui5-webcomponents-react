import{j as t}from"./jsx-runtime-5926aa06.js";import{_ as b}from"./iframe-c3106ff6.js";import{M as i,a as e}from"./index-6cf6b0a8.js";import{w as d}from"./withWebComponent-d4224c1c.js";import{V as c}from"./ValueState-ab6838cc.js";const m=d("ui5-mcb-group-item",["text"],[],[],[],()=>b(()=>import("./index-6cf6b0a8.js").then(o=>o.b),["./index-6cf6b0a8.js","./iframe-c3106ff6.js","./UI5Element-fb9ecf93.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-d4224c1c.js","./utils-69f7a0e0.js","./index-ebeaab24.js","./jsx-runtime-5926aa06.js","./useIsomorphicLayoutEffect-38a48652.js","./slot-76e48863.js","./Icon-ef594e9f.js","./Icons-2c98f222.js","./ResizeHandler-36560530.js","./ValueState-2c5e5904.js","./Integer-f7f172c9.js","./slim-arrow-down-d78fcf2d.js","./Device-99b8bbf4.js","./decline-3df8c953.js","./i18n-defaults-80781f7e.js","./Suggestions.css-66403272.js","./information-451d615b.js","./AriaLabelHelper-43a261ec.js","./GroupHeaderListItem-84974bca.js","./ListItemBase-32e7e45c.js","./ItemNavigation-c74bf7f7.js","./TabbableElements-8e49b367.js","./isElementHidden-01c07146.js","./debounce-9c2fb7dd.js","./BusyIndicator-80d43f0f.js","./Label-7f4aa83d.js","./WrappingType-b81e595a.js","./i18n-defaults-a58643fd.js","./class-map-18f572ce.js","./style-map-54298215.js","./BrowserScrollbar.css-0e9b1550.js","./Tokenizer-fc08f21c.js","./ScrollEnablement-5e135290.js","./animate-1a16ba20.js","./ResponsivePopover-a7253ba3.js","./Popover-510446d9.js","./PopupsCommon.css-f7aa7df0.js","./FocusableElements-6f0cd02a.js","./MediaRange-25b98f31.js","./Dialog-2af89d50.js","./Button-4160b137.js","./MarkedEvents-b83081e9.js","./Title-1daec987.js","./StandardListItem-049f31eb.js","./ListItem-bb2d09ef.js","./RadioButton-75d95420.js","./CheckBox-c44317b4.js","./accept-756ca6cd.js","./HasPopup-47461347.js","./slim-arrow-right-a768cef3.js","./Avatar-3c16d274.js","./employee-f2f473ef.js","./ResponsivePopoverCommon.css-e9e92f0e.js","./ValueStateMessage.css-332efe2d.js","./Token-a72d0aac.js","./ToggleButton-3042cd98.js","./ComboBoxItem-647871b6.js","./ValueState-ab6838cc.js"],import.meta.url));m.displayName="MultiComboBoxGroupItem";try{m.displayName="MultiComboBoxGroupItem",m.__docgenInfo={description:"The `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups",displayName:"MultiComboBoxGroupItem",props:{text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
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
//# sourceMappingURL=MultiComboBox.stories-41a8bade.js.map
