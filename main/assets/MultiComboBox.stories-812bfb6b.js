import{j as t}from"./jsx-runtime-d079401a.js";import{_ as b}from"./iframe-7b61d7fb.js";import{M as i,a as e}from"./index-a56e46cd.js";import{w as d}from"./withWebComponent-7d7e5133.js";import{V as c}from"./ValueState-ab6838cc.js";const m=d("ui5-mcb-group-item",["text"],[],[],[],()=>b(()=>import("./index-a56e46cd.js").then(o=>o.b),["./index-a56e46cd.js","./iframe-7b61d7fb.js","./UI5Element-6dcea8dd.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-7d7e5133.js","./utils-626dc1bf.js","./index-f1f2c4b1.js","./jsx-runtime-d079401a.js","./useIsomorphicLayoutEffect-c49de97d.js","./slot-76e48863.js","./Icon-b7f7d9e7.js","./Icons-e937042c.js","./ResizeHandler-e83234a4.js","./ValueState-2c5e5904.js","./Integer-f7f172c9.js","./slim-arrow-down-fd4d5a7b.js","./Device-6afa24d0.js","./decline-d1fe7fdd.js","./i18n-defaults-2d2bf0b6.js","./Suggestions.css-64d314d5.js","./information-a40f0e71.js","./AriaLabelHelper-43a261ec.js","./GroupHeaderListItem-7829eb80.js","./ListItemBase-c655abbb.js","./ItemNavigation-f231b836.js","./TabbableElements-8e49b367.js","./isElementHidden-01c07146.js","./debounce-9c2fb7dd.js","./BusyIndicator-713a4f98.js","./Label-c4db564a.js","./WrappingType-b81e595a.js","./i18n-defaults-d675a36d.js","./class-map-0ab40ab9.js","./style-map-132a30d8.js","./BrowserScrollbar.css-22391551.js","./Tokenizer-414bea12.js","./ScrollEnablement-dd3a6392.js","./animate-1a16ba20.js","./ResponsivePopover-b745dfe5.js","./Popover-8ece70a3.js","./PopupsCommon.css-2b73575b.js","./FocusableElements-ae22402e.js","./MediaRange-25b98f31.js","./Dialog-ea4c9a60.js","./Button-6bb9ed58.js","./MarkedEvents-b83081e9.js","./Title-e46bbbf5.js","./StandardListItem-17582cb4.js","./ListItem-43381874.js","./RadioButton-f48638b8.js","./CheckBox-6d778514.js","./accept-d5698387.js","./HasPopup-47461347.js","./slim-arrow-right-1acb3967.js","./Avatar-faa225d6.js","./employee-f0b5ef8f.js","./ResponsivePopoverCommon.css-32174dbe.js","./ValueStateMessage.css-ee317505.js","./Token-3537a188.js","./ToggleButton-2d52195e.js","./ComboBoxItem-7da53959.js","./ValueState-ab6838cc.js"],import.meta.url));m.displayName="MultiComboBoxGroupItem";try{m.displayName="MultiComboBoxGroupItem",m.__docgenInfo={description:"The `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups",displayName:"MultiComboBoxGroupItem",props:{text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
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
//# sourceMappingURL=MultiComboBox.stories-812bfb6b.js.map
