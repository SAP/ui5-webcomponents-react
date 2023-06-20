import{j as t}from"./jsx-runtime-5926aa06.js";import{_ as b}from"./iframe-8496b8c4.js";import{M as r,a as e}from"./index-523f5ff8.js";import{w as d}from"./withWebComponent-7b9bd1ee.js";import{V as c}from"./ValueState-ab6838cc.js";const n=d("ui5-mcb-group-item",["text"],[],[],[],()=>b(()=>import("./index-523f5ff8.js").then(o=>o.b),["./index-523f5ff8.js","./iframe-8496b8c4.js","./UI5Element-b6f0d493.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-7b9bd1ee.js","./utils-69f7a0e0.js","./index-ebeaab24.js","./jsx-runtime-5926aa06.js","./useIsomorphicLayoutEffect-38a48652.js","./slot-76e48863.js","./Icon-d703a0b9.js","./Icons-e2180d53.js","./ResizeHandler-021ae412.js","./ValueState-2c5e5904.js","./Integer-f7f172c9.js","./slim-arrow-down-dcf4123d.js","./Device-3f99aa96.js","./decline-b90c4a5f.js","./i18n-defaults-80781f7e.js","./Suggestions.css-c09befdb.js","./information-33412b2a.js","./AriaLabelHelper-43a261ec.js","./GroupHeaderListItem-a97f07dd.js","./ListItemBase-3d6c9587.js","./ItemNavigation-9ba0e1fe.js","./getActiveElement-bcae01ed.js","./TabbableElements-8e49b367.js","./isElementHidden-01c07146.js","./debounce-9c2fb7dd.js","./BusyIndicator-a1d94425.js","./Label-4abbc3da.js","./WrappingType-b81e595a.js","./i18n-defaults-18f6652d.js","./class-map-6a9bd920.js","./style-map-0c64293c.js","./Tokenizer-e7f52a96.js","./ScrollEnablement-7459a11c.js","./animate-1a16ba20.js","./ResponsivePopover-02c632f2.js","./PopupUtils-46fb16e4.js","./Popover-fafbd2ef.js","./PopupsCommon.css-47573c24.js","./FocusableElements-6ebe483a.js","./MediaRange-25b98f31.js","./Dialog-75ee043a.js","./Button-dc6eb42e.js","./MarkedEvents-b83081e9.js","./Title-6c23a67a.js","./StandardListItem-b7d80d39.js","./ListItem-dd0f001f.js","./RadioButton-6fe6a6d4.js","./CheckBox-ac24e34a.js","./accept-cf6ab22a.js","./HasPopup-47461347.js","./slim-arrow-right-10d60cd3.js","./Avatar-81a3aee4.js","./employee-dc1adeb6.js","./ResponsivePopoverCommon.css-50da1549.js","./ValueStateMessage.css-b22c5ae7.js","./Token-38ec12c5.js","./ToggleButton-6d4f0fe0.js","./ComboBoxItem-ca8714e6.js","./ValueState-ab6838cc.js"],import.meta.url));n.displayName="MultiComboBoxGroupItem";try{n.displayName="MultiComboBoxGroupItem",n.__docgenInfo={description:'The `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/MultiComboBox" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"MultiComboBoxGroupItem",props:{text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
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
//# sourceMappingURL=MultiComboBox.stories-68dfd2f1.js.map
