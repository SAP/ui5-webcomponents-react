import{j as t}from"./jsx-runtime-5926aa06.js";import{_ as b}from"./iframe-4d607394.js";import{M as r,a as e}from"./index-3d7315ec.js";import{w as d}from"./withWebComponent-7b9bd1ee.js";import{V as c}from"./ValueState-ab6838cc.js";const n=d("ui5-mcb-group-item",["text"],[],[],[],()=>b(()=>import("./index-3d7315ec.js").then(o=>o.b),["./index-3d7315ec.js","./iframe-4d607394.js","./UI5Element-2e105c8a.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-7b9bd1ee.js","./utils-69f7a0e0.js","./index-ebeaab24.js","./jsx-runtime-5926aa06.js","./useIsomorphicLayoutEffect-38a48652.js","./slot-76e48863.js","./Icon-f65ad4fd.js","./Icons-1a294222.js","./ResizeHandler-267f9e5d.js","./ValueState-2c5e5904.js","./Integer-f7f172c9.js","./slim-arrow-down-52c79e89.js","./Device-208919c6.js","./decline-bfe69317.js","./i18n-defaults-80781f7e.js","./Suggestions.css-ec87cfe1.js","./information-bd54c92c.js","./AriaLabelHelper-43a261ec.js","./GroupHeaderListItem-ffd1a7c3.js","./ListItemBase-80511c88.js","./ItemNavigation-897757d1.js","./getActiveElement-bcae01ed.js","./TabbableElements-8e49b367.js","./isElementHidden-01c07146.js","./debounce-9c2fb7dd.js","./BusyIndicator-101ae14f.js","./Label-54923333.js","./WrappingType-b81e595a.js","./i18n-defaults-fca59c5d.js","./class-map-6a9bd920.js","./style-map-0c64293c.js","./Tokenizer-f8f969e6.js","./ScrollEnablement-4353003c.js","./animate-1a16ba20.js","./ResponsivePopover-785fdc5f.js","./PopupUtils-2e0c5ac0.js","./Popover-046c0918.js","./PopupsCommon.css-41f002e2.js","./FocusableElements-d8460590.js","./MediaRange-25b98f31.js","./Dialog-1441abbc.js","./Button-77ada2e8.js","./MarkedEvents-b83081e9.js","./Title-4b970c0e.js","./StandardListItem-be6d96ba.js","./ListItem-a11c4ab9.js","./RadioButton-94f0be9f.js","./CheckBox-58c12bd7.js","./accept-83a59a78.js","./HasPopup-47461347.js","./slim-arrow-right-56a3c652.js","./Avatar-580de7f7.js","./employee-649f60dc.js","./ResponsivePopoverCommon.css-67fc1c09.js","./ValueStateMessage.css-1932364a.js","./Token-64d513f9.js","./ToggleButton-978ce561.js","./ComboBoxItem-3f66fa5c.js","./ValueState-ab6838cc.js"],import.meta.url));n.displayName="MultiComboBoxGroupItem";try{n.displayName="MultiComboBoxGroupItem",n.__docgenInfo={description:'The `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/MultiComboBox" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"MultiComboBoxGroupItem",props:{text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const C={title:"Inputs / MultiComboBox",component:r,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:c.None}},m={render:o=>t.jsxs(r,{...o,children:[t.jsx(e,{text:"Item 1"}),t.jsx(e,{text:"Item 2"}),t.jsx(e,{text:"Item 3"}),t.jsx(e,{text:"Item 4"}),t.jsx(e,{text:"Item 5"})]})},i={render:o=>t.jsxs(r,{...o,children:[t.jsx(n,{text:"Asia"}),t.jsx(e,{text:"Afghanistan"}),t.jsx(e,{text:"China"}),t.jsx(e,{text:"India"}),t.jsx(e,{text:"Indonesia"}),t.jsx(n,{text:"Europe"}),t.jsx(e,{text:"Austria"}),t.jsx(e,{text:"Bulgaria"}),t.jsx(e,{text:"Germany"}),t.jsx(e,{text:"Italy"}),t.jsx(n,{text:"North America"}),t.jsx(e,{text:"Canada"}),t.jsx(e,{text:"Granada"}),t.jsx(e,{text:"Haiti"}),t.jsx(e,{text:"United States"})]})};var a,s,u;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    return <MultiComboBox {...args}>
        <MultiComboBoxItem text="Item 1" />
        <MultiComboBoxItem text="Item 2" />
        <MultiComboBoxItem text="Item 3" />
        <MultiComboBoxItem text="Item 4" />
        <MultiComboBoxItem text="Item 5" />
      </MultiComboBox>;
  }
}`,...(u=(s=m.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var l,x,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(x=i.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};const I=["Default","Grouping"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:m,Grouping:i,__namedExportsOrder:I,default:C},Symbol.toStringTag,{value:"Module"}));export{_ as C,m as D,i as G,n as M};
//# sourceMappingURL=MultiComboBox.stories-7d39b42e.js.map
