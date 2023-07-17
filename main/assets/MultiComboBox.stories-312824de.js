import{j as t}from"./jsx-runtime-6b79a019.js";import{_ as b}from"./iframe-ffe6fb10.js";import{M as i,a as e}from"./index-f7bbc44f.js";import{w as d}from"./withWebComponent-03662f7f.js";import{V as c}from"./ValueState-ab6838cc.js";const m=d("ui5-mcb-group-item",["text"],[],[],[],()=>b(()=>import("./index-f7bbc44f.js").then(o=>o.b),["./index-f7bbc44f.js","./iframe-ffe6fb10.js","./UI5Element-11982a12.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-03662f7f.js","./utils-f515de3e.js","./index-ccf6a75d.js","./jsx-runtime-6b79a019.js","./useIsomorphicLayoutEffect-0a189966.js","./slot-76e48863.js","./Icon-3498e12d.js","./Icons-234bf59e.js","./ResizeHandler-9ebe913c.js","./ValueState-2c5e5904.js","./Integer-f7f172c9.js","./slim-arrow-down-f82584de.js","./Device-6afa24d0.js","./decline-c1cc2557.js","./i18n-defaults-837f5aed.js","./Suggestions.css-439ce336.js","./information-2644a02f.js","./AriaLabelHelper-43a261ec.js","./GroupHeaderListItem-0c0a31bd.js","./ListItemBase-f65eaa12.js","./ItemNavigation-a882fb90.js","./TabbableElements-8e49b367.js","./isElementHidden-01c07146.js","./debounce-9c2fb7dd.js","./BusyIndicator-0bd7794e.js","./Label-f867a533.js","./WrappingType-b81e595a.js","./i18n-defaults-1a83921e.js","./class-map-341004db.js","./style-map-9183c00a.js","./BrowserScrollbar.css-bcc05298.js","./Tokenizer-0f9722fd.js","./ScrollEnablement-dd3a6392.js","./animate-1a16ba20.js","./ResponsivePopover-63d0a1b7.js","./Popover-1f09fd29.js","./PopupsCommon.css-fd974b5a.js","./FocusableElements-708d1a4e.js","./MediaRange-25b98f31.js","./Dialog-b040586c.js","./Button-3da2aede.js","./MarkedEvents-b83081e9.js","./Title-01e28931.js","./StandardListItem-92ee6b14.js","./ListItem-57c44dac.js","./RadioButton-3124fa96.js","./CheckBox-05a648ec.js","./accept-6c83709e.js","./HasPopup-47461347.js","./slim-arrow-right-c0f59065.js","./Avatar-d7b74462.js","./employee-e34ffee2.js","./ResponsivePopoverCommon.css-94d32982.js","./ValueStateMessage.css-e895ae9f.js","./Token-3596fc39.js","./ToggleButton-18c77239.js","./ComboBoxItem-2845789f.js","./ValueState-ab6838cc.js"],import.meta.url));m.displayName="MultiComboBoxGroupItem";try{m.displayName="MultiComboBoxGroupItem",m.__docgenInfo={description:"The `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups",displayName:"MultiComboBoxGroupItem",props:{text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
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
//# sourceMappingURL=MultiComboBox.stories-312824de.js.map
