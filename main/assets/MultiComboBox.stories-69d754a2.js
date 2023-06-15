import{j as t}from"./jsx-runtime-5926aa06.js";import{_ as b}from"./iframe-d0c8c5f9.js";import{M as r,a as e}from"./index-24aa22d0.js";import{w as d}from"./withWebComponent-7b9bd1ee.js";import{V as c}from"./ValueState-ab6838cc.js";const n=d("ui5-mcb-group-item",["text"],[],[],[],()=>b(()=>import("./index-24aa22d0.js").then(o=>o.b),["./index-24aa22d0.js","./iframe-d0c8c5f9.js","./UI5Element-2e105c8a.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-7b9bd1ee.js","./utils-69f7a0e0.js","./index-ebeaab24.js","./jsx-runtime-5926aa06.js","./useIsomorphicLayoutEffect-38a48652.js","./slot-76e48863.js","./Icon-1927e688.js","./Icons-fe8ad928.js","./ResizeHandler-267f9e5d.js","./ValueState-2c5e5904.js","./Integer-f7f172c9.js","./slim-arrow-down-75e7bac2.js","./Device-208919c6.js","./decline-76de6b04.js","./i18n-defaults-80781f7e.js","./Suggestions.css-0aeebfba.js","./information-bc6b0940.js","./AriaLabelHelper-43a261ec.js","./GroupHeaderListItem-3d8bbed2.js","./ListItemBase-9f02a20e.js","./ItemNavigation-e091c48d.js","./getActiveElement-bcae01ed.js","./TabbableElements-8e49b367.js","./isElementHidden-01c07146.js","./debounce-9c2fb7dd.js","./BusyIndicator-ed5c055b.js","./Label-51e84534.js","./WrappingType-b81e595a.js","./i18n-defaults-2f9956dc.js","./class-map-6a9bd920.js","./style-map-0c64293c.js","./Tokenizer-65cb5b10.js","./ScrollEnablement-4353003c.js","./animate-1a16ba20.js","./ResponsivePopover-cca20b42.js","./PopupUtils-2e0c5ac0.js","./Popover-898d0a68.js","./PopupsCommon.css-0f627f88.js","./FocusableElements-d8460590.js","./MediaRange-25b98f31.js","./Dialog-335e5eae.js","./Button-a741ea37.js","./MarkedEvents-b83081e9.js","./Title-4b970c0e.js","./StandardListItem-e9d00b86.js","./ListItem-e52b9a25.js","./RadioButton-9630bc35.js","./CheckBox-b65adee7.js","./accept-8cc3ec33.js","./HasPopup-47461347.js","./slim-arrow-right-d68231f1.js","./Avatar-8bebda11.js","./employee-2f853b68.js","./ResponsivePopoverCommon.css-67fc1c09.js","./ValueStateMessage.css-1932364a.js","./Token-5f46c3fe.js","./ToggleButton-32ab007a.js","./ComboBoxItem-3f66fa5c.js","./ValueState-ab6838cc.js"],import.meta.url));n.displayName="MultiComboBoxGroupItem";try{n.displayName="MultiComboBoxGroupItem",n.__docgenInfo={description:'The `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/MultiComboBox" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"MultiComboBoxGroupItem",props:{text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
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
//# sourceMappingURL=MultiComboBox.stories-69d754a2.js.map
