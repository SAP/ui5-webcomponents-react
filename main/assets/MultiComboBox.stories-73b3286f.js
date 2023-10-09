import{j as t}from"./jsx-runtime-d079401a.js";import{_ as b}from"./iframe-be52c6f7.js";import{M as i,a as e}from"./index-5246a16c.js";import{w as d}from"./withWebComponent-70ea33bf.js";import{V as c}from"./ValueState-ab6838cc.js";const m=d("ui5-mcb-group-item",["text"],[],[],[],()=>b(()=>import("./index-5246a16c.js").then(o=>o.b),["./index-5246a16c.js","./iframe-be52c6f7.js","./UI5Element-9ae3ac4a.js","./CustomElementsScopeUtils-a6667bf6.js","./withWebComponent-70ea33bf.js","./utils-eb830979.js","./index-f1f2c4b1.js","./jsx-runtime-d079401a.js","./useIsomorphicLayoutEffect-c49de97d.js","./slot-76e48863.js","./Icon-085ae741.js","./Icons-aa504494.js","./ResizeHandler-a1ba39c5.js","./ValueState-2c5e5904.js","./Integer-f7f172c9.js","./slim-arrow-down-98550049.js","./decline-06bf09c2.js","./i18n-defaults-bdef1cce.js","./Suggestions.css-07dccdad.js","./information-31cb56bb.js","./alert-f95f2d2e.js","./AriaLabelHelper-43a261ec.js","./GroupHeaderListItem-50af4131.js","./ListItemBase-7c3bbca9.js","./ItemNavigation-53cee471.js","./getActiveElement-bcae01ed.js","./TabbableElements-8e49b367.js","./isElementHidden-01c07146.js","./debounce-9c2fb7dd.js","./BusyIndicator-6d3cbaa3.js","./Label-2351773c.js","./WrappingType-b81e595a.js","./i18n-defaults-edeeca68.js","./class-map-a35dc276.js","./style-map-0570471d.js","./BrowserScrollbar.css-35e4e851.js","./Tokenizer-eb93cc3a.js","./ScrollEnablement-39ae1891.js","./animate-1a16ba20.js","./ResponsivePopover-3603f824.js","./PopupUtils-ebc1cf8a.js","./Popover-f88acbeb.js","./PopupsCommon.css-afd5e311.js","./FocusableElements-ea9d71fb.js","./MediaRange-25b98f31.js","./Dialog-6ca0f060.js","./Button-bda40b74.js","./MarkedEvents-b83081e9.js","./Title-9e1fec85.js","./StandardListItem-a534f611.js","./ListItem-8f7be23d.js","./RadioButton-0df5d1bd.js","./CheckBox-05effb75.js","./accept-a3b0d940.js","./HasPopup-47461347.js","./slim-arrow-right-562fbac6.js","./Avatar-54e46144.js","./employee-bd01b92f.js","./ResponsivePopoverCommon.css-f284520a.js","./ValueStateMessage.css-29f8f350.js","./Token-f9a06284.js","./ToggleButton-10e80b89.js","./ComboBoxItem-bcc83487.js","./ValueState-ab6838cc.js"],import.meta.url));m.displayName="MultiComboBoxGroupItem";try{m.displayName="MultiComboBoxGroupItem",m.__docgenInfo={description:"The `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups",displayName:"MultiComboBoxGroupItem",props:{text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
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
//# sourceMappingURL=MultiComboBox.stories-73b3286f.js.map
