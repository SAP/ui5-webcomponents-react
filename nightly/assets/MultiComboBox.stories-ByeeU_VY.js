import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{o as c}from"./ValueState-Bg0UWejw.js";import{M as r,a as t}from"./index-CZXGstQj.js";import{w as h}from"./jsx-runtime-cXES_1K3.js";const o=h("ui5-mcb-item-group",["headerAccessibleName","headerText"],[],["header"],["move-over","move"]);o.displayName="MultiComboBoxItemGroup";try{o.displayName="MultiComboBoxItemGroup",o.__docgenInfo={description:"The `MultiComboBoxItemGroup` is type of suggestion item,\nthat can be used to split the `MultiComboBox` suggestions into groups.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"MultiComboBoxItemGroup",props:{children:{defaultValue:null,description:"Defines the items of the <code>ui5-mcb-item-group</code>.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the header of the component.

**Note:** Using this slot, the default header text of group and the value of \`headerText\` property will be overwritten.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},onMove:{defaultValue:null,description:`Fired when a movable list item is dropped onto a drop target.

**Note:** \`move\` event is fired only if there was a preceding \`move-over\` with prevented default action.

**Note:** Available since [v2.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.1.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onMove",required:!1,type:{name:"(event: Ui5CustomEvent<MultiComboBoxItemGroupDomRef, ListItemGroupMoveEventDetail>) => void"}},onMoveOver:{defaultValue:null,description:`Fired when a movable list item is moved over a potential drop target during a dragging operation.

If the new position is valid, prevent the default action of the event using \`preventDefault()\`.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v2.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.1.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onMoveOver",required:!1,type:{name:"(event: Ui5CustomEvent<MultiComboBoxItemGroupDomRef, ListItemGroupMoveEventDetail>) => void"}},headerAccessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the header.",name:"headerAccessibleName",required:!1,type:{name:"string"}},headerText:{defaultValue:{value:"undefined"},description:"Defines the header text of the <code>ui5-li-group</code>.",name:"headerText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{o.displayName="MultiComboBoxItemGroup",o.__docgenInfo={description:"The `MultiComboBoxItemGroup` is type of suggestion item,\nthat can be used to split the `MultiComboBox` suggestions into groups.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"MultiComboBoxItemGroup",props:{children:{defaultValue:null,description:"Defines the items of the <code>ui5-mcb-item-group</code>.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the header of the component.

**Note:** Using this slot, the default header text of group and the value of \`headerText\` property will be overwritten.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},onMove:{defaultValue:null,description:`Fired when a movable list item is dropped onto a drop target.

**Note:** \`move\` event is fired only if there was a preceding \`move-over\` with prevented default action.

**Note:** Available since [v2.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.1.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onMove",required:!1,type:{name:"(event: Ui5CustomEvent<MultiComboBoxItemGroupDomRef, ListItemGroupMoveEventDetail>) => void"}},onMoveOver:{defaultValue:null,description:`Fired when a movable list item is moved over a potential drop target during a dragging operation.

If the new position is valid, prevent the default action of the event using \`preventDefault()\`.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v2.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.1.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onMoveOver",required:!1,type:{name:"(event: Ui5CustomEvent<MultiComboBoxItemGroupDomRef, ListItemGroupMoveEventDetail>) => void"}},headerAccessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the header.",name:"headerAccessibleName",required:!1,type:{name:"string"}},headerText:{defaultValue:{value:"undefined"},description:"Defines the header text of the <code>ui5-li-group</code>.",name:"headerText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const b={title:"Inputs / MultiComboBox",component:r,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:c.None},tags:["package:@ui5/webcomponents"]},a={render:n=>e.jsxs(r,{...n,children:[e.jsx(t,{text:"Item 1"}),e.jsx(t,{text:"Item 2"}),e.jsx(t,{text:"Item 3"}),e.jsx(t,{text:"Item 4"}),e.jsx(t,{text:"Item 5"})]})},i={render:n=>e.jsxs(r,{...n,children:[e.jsxs(o,{headerText:"Asia",children:[e.jsx(t,{text:"Afghanistan"}),e.jsx(t,{text:"China"}),e.jsx(t,{text:"India"}),e.jsx(t,{text:"Indonesia"})]}),e.jsxs(o,{headerText:"Europe",children:[e.jsx(t,{text:"Austria"}),e.jsx(t,{text:"Bulgaria"}),e.jsx(t,{text:"Germany"}),e.jsx(t,{text:"Italy"})]}),e.jsxs(o,{headerText:"North America",children:[e.jsx(t,{text:"Canada"}),e.jsx(t,{text:"Granada"}),e.jsx(t,{text:"Haiti"}),e.jsx(t,{text:"United States"})]})]})};var s,l,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    return <MultiComboBox {...args}>
        <MultiComboBoxItem text="Item 1" />
        <MultiComboBoxItem text="Item 2" />
        <MultiComboBoxItem text="Item 3" />
        <MultiComboBoxItem text="Item 4" />
        <MultiComboBoxItem text="Item 5" />
      </MultiComboBox>;
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,d,p;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    return <MultiComboBox {...args}>
        <MultiComboBoxItemGroup headerText="Asia">
          <MultiComboBoxItem text="Afghanistan"></MultiComboBoxItem>
          <MultiComboBoxItem text="China"></MultiComboBoxItem>
          <MultiComboBoxItem text="India"></MultiComboBoxItem>
          <MultiComboBoxItem text="Indonesia"></MultiComboBoxItem>
        </MultiComboBoxItemGroup>
        <MultiComboBoxItemGroup headerText="Europe">
          <MultiComboBoxItem text="Austria"></MultiComboBoxItem>
          <MultiComboBoxItem text="Bulgaria"></MultiComboBoxItem>
          <MultiComboBoxItem text="Germany"></MultiComboBoxItem>
          <MultiComboBoxItem text="Italy"></MultiComboBoxItem>
        </MultiComboBoxItemGroup>
        <MultiComboBoxItemGroup headerText="North America">
          <MultiComboBoxItem text="Canada"></MultiComboBoxItem>
          <MultiComboBoxItem text="Granada"></MultiComboBoxItem>
          <MultiComboBoxItem text="Haiti"></MultiComboBoxItem>
          <MultiComboBoxItem text="United States"></MultiComboBoxItem>
        </MultiComboBoxItemGroup>
      </MultiComboBox>;
  }
}`,...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const f=["Default","Grouping"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Grouping:i,__namedExportsOrder:f,default:b},Symbol.toStringTag,{value:"Module"}));export{M as C,a as D,i as G,o as M};
