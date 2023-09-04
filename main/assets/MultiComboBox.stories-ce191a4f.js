import{j as t}from"./jsx-runtime-d079401a.js";import{_ as b}from"./iframe-262e17e0.js";import{M as i,a as e}from"./index-398c3947.js";import{w as d}from"./withWebComponent-b4c67a1a.js";import{V as c}from"./ValueState-ab6838cc.js";const m=d("ui5-mcb-group-item",["text"],[],[],[],()=>b(()=>import("./index-398c3947.js").then(o=>o.b),["./index-398c3947.js","./iframe-262e17e0.js","./UI5Element-e590cd60.js","./CustomElementsScopeUtils-264b8a39.js","./withWebComponent-b4c67a1a.js","./utils-e9940b93.js","./index-f1f2c4b1.js","./jsx-runtime-d079401a.js","./useIsomorphicLayoutEffect-c49de97d.js","./slot-76e48863.js","./Icon-b897d66f.js","./Icons-65b34360.js","./ResizeHandler-34ecee99.js","./ValueState-2c5e5904.js","./Integer-f7f172c9.js","./slim-arrow-down-16231f47.js","./decline-2f6198d2.js","./i18n-defaults-bdef1cce.js","./Suggestions.css-91a648c4.js","./information-e97f915a.js","./alert-7494fabe.js","./AriaLabelHelper-43a261ec.js","./GroupHeaderListItem-667d01bb.js","./ListItemBase-e8a1d82b.js","./ItemNavigation-52fe434f.js","./getActiveElement-bcae01ed.js","./TabbableElements-8e49b367.js","./isElementHidden-01c07146.js","./debounce-9c2fb7dd.js","./BusyIndicator-7cb729ee.js","./Label-69062358.js","./WrappingType-b81e595a.js","./i18n-defaults-d5195a49.js","./class-map-e1b423a4.js","./style-map-ecc46a93.js","./BrowserScrollbar.css-4a87524a.js","./Tokenizer-506d47fc.js","./ScrollEnablement-a13736e5.js","./animate-1a16ba20.js","./ResponsivePopover-ffa286b7.js","./PopupUtils-f407c5e4.js","./Popover-742c9988.js","./PopupsCommon.css-97942203.js","./FocusableElements-d024bb16.js","./MediaRange-25b98f31.js","./Dialog-cf714d6a.js","./Button-4505b9f6.js","./MarkedEvents-b83081e9.js","./Title-0fb688d3.js","./StandardListItem-32d37e59.js","./ListItem-65b5ee84.js","./RadioButton-bfff4944.js","./CheckBox-c32e2a79.js","./accept-92104380.js","./HasPopup-47461347.js","./slim-arrow-right-7a309837.js","./Avatar-60d18bb8.js","./employee-78fe46d2.js","./ResponsivePopoverCommon.css-5a4ca537.js","./ValueStateMessage.css-ca082762.js","./Token-a3e125e7.js","./ToggleButton-c0a19ccb.js","./ComboBoxItem-15509914.js","./ValueState-ab6838cc.js"],import.meta.url));m.displayName="MultiComboBoxGroupItem";try{m.displayName="MultiComboBoxGroupItem",m.__docgenInfo={description:"The `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups",displayName:"MultiComboBoxGroupItem",props:{text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
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
//# sourceMappingURL=MultiComboBox.stories-ce191a4f.js.map
