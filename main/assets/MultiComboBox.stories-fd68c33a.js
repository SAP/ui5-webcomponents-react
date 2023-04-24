import{j as t}from"./jsx-runtime-ccada58e.js";import{_ as b}from"./iframe-4411946e.js";import{M as r,a as e}from"./index-7a06ebfb.js";import{w as d}from"./withWebComponent-791919b7.js";import{V as c}from"./ValueState-ab6838cc.js";const n=d("ui5-mcb-group-item",["text"],[],[],[],()=>b(()=>import("./index-7a06ebfb.js").then(o=>o.b),["./index-7a06ebfb.js","./iframe-4411946e.js","./UI5Element-e8adceda.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-791919b7.js","./utils-ed90fb1b.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./jsx-runtime-ccada58e.js","./useIsomorphicLayoutEffect-a838da4a.js","./slot-76e48863.js","./Icon-b04dccd7.js","./Icons-5b18f7d2.js","./ResizeHandler-9d370fcd.js","./ValueState-2c5e5904.js","./Integer-f7f172c9.js","./slim-arrow-down-09ec0732.js","./Device-208919c6.js","./decline-7cb41e3a.js","./i18n-defaults-80781f7e.js","./Suggestions.css-ad6252ef.js","./information-2c502181.js","./AriaLabelHelper-43a261ec.js","./GroupHeaderListItem-d1a2217c.js","./ListItemBase-534ac7d7.js","./ItemNavigation-01761450.js","./getActiveElement-bcae01ed.js","./TabbableElements-8e49b367.js","./isElementHidden-01c07146.js","./BrowserScrollbar.css-0dbd5acf.js","./debounce-9c2fb7dd.js","./BusyIndicator-e76963e1.js","./Label-0e5fa470.js","./WrappingType-b81e595a.js","./class-map-dc0989fc.js","./i18n-defaults-254d6b69.js","./style-map-d22cbf2f.js","./Tokenizer-045abb39.js","./ScrollEnablement-4353003c.js","./animate-1a16ba20.js","./ResponsivePopover-98351475.js","./PopupUtils-6ec841a6.js","./Popover-a5930009.js","./PopupsCommon.css-4412d83b.js","./FocusableElements-5012f8d0.js","./MediaRange-25b98f31.js","./Dialog-fdd9c36a.js","./Button-08c55dbf.js","./MarkedEvents-b83081e9.js","./Title-1c5327cd.js","./StandardListItem-df13f81b.js","./ListItem-fb0d8055.js","./RadioButton-fbf8257b.js","./CheckBox-d3cb6aeb.js","./accept-9744f30a.js","./HasPopup-47461347.js","./slim-arrow-right-78d167a6.js","./Avatar-560d9cf8.js","./employee-0153a597.js","./ResponsivePopoverCommon.css-90775aea.js","./ValueStateMessage.css-a1e3bc74.js","./Token-fed4fd54.js","./ToggleButton-eb44e1fe.js","./ComboBoxItem-a4f904c4.js","./ValueState-ab6838cc.js"],import.meta.url));n.displayName="MultiComboBoxGroupItem";try{n.displayName="MultiComboBoxGroupItem",n.__docgenInfo={description:'The `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/MultiComboBox" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"MultiComboBoxGroupItem",props:{text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
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
//# sourceMappingURL=MultiComboBox.stories-fd68c33a.js.map
