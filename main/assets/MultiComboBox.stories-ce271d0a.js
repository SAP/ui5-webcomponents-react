import{j as t}from"./jsx-runtime-5926aa06.js";import{_ as b}from"./iframe-35e6022f.js";import{M as r,a as e}from"./index-06412ffc.js";import{w as d}from"./withWebComponent-d61dcbbc.js";import{V as c}from"./ValueState-ab6838cc.js";const n=d("ui5-mcb-group-item",["text"],[],[],[],()=>b(()=>import("./index-06412ffc.js").then(o=>o.b),["./index-06412ffc.js","./iframe-35e6022f.js","./UI5Element-74c2a827.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-d61dcbbc.js","./utils-69f7a0e0.js","./index-ebeaab24.js","./jsx-runtime-5926aa06.js","./useIsomorphicLayoutEffect-38a48652.js","./slot-76e48863.js","./Icon-a2964213.js","./Icons-94b91597.js","./ResizeHandler-0f082c48.js","./ValueState-2c5e5904.js","./Integer-f7f172c9.js","./slim-arrow-down-4f848b87.js","./Device-208919c6.js","./decline-c0e7c267.js","./i18n-defaults-80781f7e.js","./Suggestions.css-2167eb11.js","./information-972c65ef.js","./AriaLabelHelper-43a261ec.js","./GroupHeaderListItem-b82baeae.js","./ListItemBase-c271f906.js","./ItemNavigation-e9bbb1b9.js","./getActiveElement-bcae01ed.js","./TabbableElements-8e49b367.js","./isElementHidden-01c07146.js","./BrowserScrollbar.css-362c4d65.js","./debounce-9c2fb7dd.js","./BusyIndicator-990cb1ca.js","./Label-fcb0092c.js","./WrappingType-b81e595a.js","./class-map-519e9c6d.js","./i18n-defaults-254d6b69.js","./style-map-33b353d0.js","./Tokenizer-f8bffea1.js","./ScrollEnablement-4353003c.js","./animate-1a16ba20.js","./ResponsivePopover-d37f7fd3.js","./PopupUtils-db5b49db.js","./Popover-2de3a0ad.js","./PopupsCommon.css-c4ad8573.js","./FocusableElements-20734289.js","./MediaRange-25b98f31.js","./Dialog-07218916.js","./Button-1eb48b4c.js","./MarkedEvents-b83081e9.js","./Title-85313bbf.js","./StandardListItem-48aef1ae.js","./ListItem-4183041f.js","./RadioButton-9ea605bf.js","./CheckBox-5944a432.js","./accept-4bb68de0.js","./HasPopup-47461347.js","./slim-arrow-right-b979090e.js","./Avatar-99b7e1ff.js","./employee-78b984a5.js","./ResponsivePopoverCommon.css-5b3cf680.js","./ValueStateMessage.css-0142eeaf.js","./Token-fa68eb30.js","./ToggleButton-9307a40f.js","./ComboBoxItem-f6f35dc5.js","./ValueState-ab6838cc.js"],import.meta.url));n.displayName="MultiComboBoxGroupItem";try{n.displayName="MultiComboBoxGroupItem",n.__docgenInfo={description:'The `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/MultiComboBox" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"MultiComboBoxGroupItem",props:{text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
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
//# sourceMappingURL=MultiComboBox.stories-ce271d0a.js.map
