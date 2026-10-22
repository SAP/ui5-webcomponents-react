import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{n,t as r}from"./withWebComponent-DhD1x6sB.js";import{t as i}from"./jsx-runtime-BdxMnOeJ.js";import{n as a,t as o}from"./ValueState-Cz7u0abQ.js";import{a as s,c,n as l,o as u,s as d,t as f}from"./FlexBox-D5G1nS1E.js";import{n as p,t as m}from"./Icon-D0mlyDL3.js";import{n as h,t as g}from"./Label-CC0T01Qq.js";import{n as _,t as v}from"./employee-DnTXlWDs.js";import{a as y,i as b,n as x,r as S,t as C}from"./ComboBoxItem-or5NeqW2.js";import{n as w}from"./ComboBoxItemGroup-YhLrZVi0.js";var T;function E(){return(E=e((()=>{y(),r(),T=n(`ui5-cb-item-custom`,[`text`,`value`],[],[],[`click`]),T.displayName=`ComboBoxItemCustom`;try{T.displayName=`ComboBoxItemCustom`,T.__docgenInfo={description:"The `ComboBoxItemCustom` is a combobox item component\nthat allows placing custom content inside a combobox item.\nThe `text` property is used for filtering and auto-complete.\nFor highlighting functionality, see `@ui5/webcomponents-base/dist/util/generateHighlightedMarkup.js`.\n\n__Note:__ This is a UI5 Web Component! [ComboBoxItemCustom UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ComboBoxItemCustom) | [Repository](https://github.com/UI5/webcomponents)",displayName:`ComboBoxItemCustom`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/ComboBoxItemCustom/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ComboBoxItemCustom/index.d.ts`,name:`ComboBoxItemCustomPropTypes`}],description:`Defines the content of the component.

__Supported Node Type/s:__ \`Array<Node>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ComboBoxItemCustom/index.d.ts`,name:`ComboBoxItemCustomPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},onClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ComboBoxItemCustom/index.d.ts`,name:`ComboBoxItemCustomPropTypes`}],description:`Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.

**Note:** The event will not be fired if the \`disabled\` property is set to \`true\`.

**Note:** Available since [v2.24.0](https://github.com/UI5/webcomponents/releases/tag/v2.24.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onClick`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ComboBoxItemCustom/index.d.ts`,name:`ComboBoxItemCustomPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ComboBoxItemCustomDomRef, ComboBoxItemCustomClickEventDetail>) => void`}},text:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ComboBoxItemCustom/index.d.ts`,name:`ComboBoxItemCustomAttributes`}],description:`Defines the text of the component.
Used for filtering, autocomplete, and mobile rendering.`,name:`text`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ComboBoxItemCustom/index.d.ts`,name:`ComboBoxItemCustomAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},value:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ComboBoxItemCustom/index.d.ts`,name:`ComboBoxItemCustomAttributes`}],description:"Defines the value of the component.\nUsed for programmatic selection via the `selectedValue` property.",name:`value`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ComboBoxItemCustom/index.d.ts`,name:`ComboBoxItemCustomAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.24.0](https://github.com/UI5/webcomponents/releases/tag/v2.24.0) of __@ui5/webcomponents__.`}}}catch{}})))()}var D;function O(){return(O=e((()=>{w(),r(),D=n(`ui5-cb-item-group`,[`headerAccessibleName`,`headerText`,`wrappingType`],[],[`header`],[`move-over`,`move`]),D.displayName=`ComboBoxItemGroup`;try{D.displayName=`ComboBoxItemGroup`,D.__docgenInfo={description:"The `ui5-cb-group-item` is type of suggestion item,\nthat can be used to split the `ComboBox` suggestions into groups.\n\n__Note:__ This is a UI5 Web Component! [ComboBoxItemGroup UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ComboBoxItemGroup) | [Repository](https://github.com/UI5/webcomponents)",displayName:`ComboBoxItemGroup`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/ComboBoxItemGroup/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ComboBoxItemGroup/index.d.ts`,name:`ComboBoxItemGroupPropTypes`}],description:`Defines the items of the <code>ui5-cb-item-group</code>.

__Supported Node Type/s:__ \`Array<ComboBoxItem>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ComboBoxItemGroup/index.d.ts`,name:`ComboBoxItemGroupPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},header:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ComboBoxItemGroup/index.d.ts`,name:`ComboBoxItemGroupPropTypes`}],description:`Defines the header of the component.

**Note:** Using this slot, the default header text of group and the value of \`headerText\` property will be overwritten.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<ListItemBase>\``,name:`header`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ComboBoxItemGroup/index.d.ts`,name:`ComboBoxItemGroupPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onMove:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ComboBoxItemGroup/index.d.ts`,name:`ComboBoxItemGroupPropTypes`}],description:`Fired when a movable list item is dropped onto a drop target.

**Note:** \`move\` event is fired only if there was a preceding \`move-over\` with prevented default action.

**Note:** Available since [v2.1.0](https://github.com/UI5/webcomponents/releases/tag/v2.1.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onMove`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ComboBoxItemGroup/index.d.ts`,name:`ComboBoxItemGroupPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ComboBoxItemGroupDomRef, ListItemGroupMoveEventDetail>) => void`}},onMoveOver:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ComboBoxItemGroup/index.d.ts`,name:`ComboBoxItemGroupPropTypes`}],description:`Fired when a movable list item is moved over a potential drop target during a dragging operation.

If the new position is valid, prevent the default action of the event using \`preventDefault()\`.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v2.1.0](https://github.com/UI5/webcomponents/releases/tag/v2.1.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onMoveOver`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ComboBoxItemGroup/index.d.ts`,name:`ComboBoxItemGroupPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ComboBoxItemGroupDomRef, ListItemGroupMoveEventDetail>) => void`}},headerAccessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ComboBoxItemGroup/index.d.ts`,name:`ComboBoxItemGroupAttributes`}],description:`Defines the accessible name of the header.`,name:`headerAccessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ComboBoxItemGroup/index.d.ts`,name:`ComboBoxItemGroupAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},headerText:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ComboBoxItemGroup/index.d.ts`,name:`ComboBoxItemGroupAttributes`}],description:`Defines the header text of the group.`,name:`headerText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ComboBoxItemGroup/index.d.ts`,name:`ComboBoxItemGroupAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},wrappingType:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ComboBoxItemGroup/index.d.ts`,name:`ComboBoxItemGroupAttributes`}],description:`Defines if the text of the component should wrap when it's too long.
When set to "Normal", the content (title, description) will be wrapped
using the \`ExpandableText\` component.<br/>

The text can wrap up to 100 characters on small screens (size S) and
up to 300 characters on larger screens (size M and above). When text exceeds
these limits, it truncates with an ellipsis followed by a text expansion trigger.

Available options are:
- \`None\` (default) - The text will truncate with an ellipsis.
- \`Normal\` - The text will wrap (without truncation).

**Note:** Available since [v2.15.0](https://github.com/UI5/webcomponents/releases/tag/v2.15.0) of **@ui5/webcomponents**.`,name:`wrappingType`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ComboBoxItemGroup/index.d.ts`,name:`ComboBoxItemGroupAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | WrappingType | "Normal"`,value:[{value:`"None"`},{value:`"None"`,description:`The text will be truncated with an ellipsis.`,fullComment:`The text will be truncated with an ellipsis.
@public`,tags:{public:``}},{value:`"Normal"`,description:`The text will wrap. The words will not be broken based on hyphenation.`,fullComment:`The text will wrap. The words will not be broken based on hyphenation.
@public`,tags:{public:``}},{value:`"Normal"`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of __@ui5/webcomponents__.`,abstract:``}}}catch{}})))()}var k=t({Default:()=>M,FilterTypes:()=>F,WithCustomItems:()=>P,WithGroups:()=>N,__namedExportsOrder:()=>I,default:()=>j}),A,j,M,N,P,F,I;function L(){return(L=e((()=>{o(),_(),l(),c(),u(),x(),E(),O(),p(),h(),b(),A=i(),j={title:`Inputs / ComboBox`,component:S,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:a.None,icon:(0,A.jsx)(m,{name:v})},tags:[`package:@ui5/webcomponents`]},M={render:e=>(0,A.jsxs)(S,{...e,children:[(0,A.jsx)(C,{text:`ComboBox Entry 1`}),(0,A.jsx)(C,{text:`ComboBox Entry 2`}),(0,A.jsx)(C,{text:`ComboBox Entry 3`}),(0,A.jsx)(C,{text:`ComboBox Entry 4`}),(0,A.jsx)(C,{text:`ComboBox Entry 5`})]})},N={render(e){return(0,A.jsxs)(S,{...e,children:[(0,A.jsxs)(D,{headerText:`Group 1`,children:[(0,A.jsx)(C,{text:`ComboBox Entry 1`}),(0,A.jsx)(C,{text:`ComboBox Entry 2`})]}),(0,A.jsxs)(D,{headerText:`Group 2`,children:[(0,A.jsx)(C,{text:`ComboBox Entry 3`}),(0,A.jsx)(C,{text:`ComboBox Entry 4`}),(0,A.jsx)(C,{text:`ComboBox Entry 5`})]})]})}},P={name:`ComboBoxItemCustom`,render(e){return(0,A.jsxs)(S,{...e,children:[(0,A.jsx)(T,{text:`Austria`,children:(0,A.jsxs)(f,{justifyContent:s.SpaceBetween,style:{width:`100%`},children:[(0,A.jsx)(g,{children:`Austria`}),(0,A.jsx)(g,{children:`AT`})]})}),(0,A.jsx)(T,{text:`Germany`,children:(0,A.jsxs)(f,{justifyContent:s.SpaceBetween,style:{width:`100%`},children:[(0,A.jsx)(g,{children:`Germany`}),(0,A.jsx)(g,{children:`DE`})]})}),(0,A.jsx)(T,{text:`Switzerland`,children:(0,A.jsxs)(f,{justifyContent:s.SpaceBetween,style:{width:`100%`},children:[(0,A.jsx)(g,{children:`Switzerland`}),(0,A.jsx)(g,{children:`CH`})]})})]})}},F={render:()=>(0,A.jsxs)(f,{justifyContent:s.SpaceBetween,children:[(0,A.jsxs)(f,{direction:d.Column,children:[(0,A.jsx)(g,{children:`StartsWithPerTerm (Default)`}),(0,A.jsxs)(S,{filter:`StartsWithPerTerm`,children:[(0,A.jsx)(C,{text:`Austria`}),(0,A.jsx)(C,{text:`United Arab Emirates`}),(0,A.jsx)(C,{text:`Czech Republic`}),(0,A.jsx)(C,{text:`United Kingdom`}),(0,A.jsx)(C,{text:`China`}),(0,A.jsx)(C,{text:`Ukraine`}),(0,A.jsx)(C,{text:`Australia`}),(0,A.jsx)(C,{text:`Russia`})]})]}),(0,A.jsxs)(f,{direction:d.Column,children:[(0,A.jsx)(g,{children:`StartsWith`}),(0,A.jsxs)(S,{filter:`StartsWith`,children:[(0,A.jsx)(C,{text:`Austria`}),(0,A.jsx)(C,{text:`United Arab Emirates`}),(0,A.jsx)(C,{text:`Czech Republic`}),(0,A.jsx)(C,{text:`United Kingdom`}),(0,A.jsx)(C,{text:`China`}),(0,A.jsx)(C,{text:`Ukraine`}),(0,A.jsx)(C,{text:`Australia`}),(0,A.jsx)(C,{text:`Russia`})]})]}),(0,A.jsxs)(f,{direction:d.Column,children:[(0,A.jsx)(g,{children:`Contains`}),(0,A.jsxs)(S,{filter:`Contains`,children:[(0,A.jsx)(C,{text:`Austria`}),(0,A.jsx)(C,{text:`United Arab Emirates`}),(0,A.jsx)(C,{text:`Czech Republic`}),(0,A.jsx)(C,{text:`United Kingdom`}),(0,A.jsx)(C,{text:`China`}),(0,A.jsx)(C,{text:`Ukraine`}),(0,A.jsx)(C,{text:`Australia`}),(0,A.jsx)(C,{text:`Russia`})]})]})]})},I=[`Default`,`WithGroups`,`WithCustomItems`,`FilterTypes`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <ComboBox {...args}>
        <ComboBoxItem text="ComboBox Entry 1" />
        <ComboBoxItem text="ComboBox Entry 2" />
        <ComboBoxItem text="ComboBox Entry 3" />
        <ComboBoxItem text="ComboBox Entry 4" />
        <ComboBoxItem text="ComboBox Entry 5" />
      </ComboBox>;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <ComboBox {...args}>
        <ComboBoxItemGroup headerText="Group 1">
          <ComboBoxItem text="ComboBox Entry 1" />
          <ComboBoxItem text="ComboBox Entry 2" />
        </ComboBoxItemGroup>
        <ComboBoxItemGroup headerText="Group 2">
          <ComboBoxItem text="ComboBox Entry 3" />
          <ComboBoxItem text="ComboBox Entry 4" />
          <ComboBoxItem text="ComboBox Entry 5" />
        </ComboBoxItemGroup>
      </ComboBox>;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'ComboBoxItemCustom',
  render(args) {
    return <ComboBox {...args}>
        <ComboBoxItemCustom text="Austria">
          <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween} style={{
          width: '100%'
        }}>
            <Label>Austria</Label>
            <Label>AT</Label>
          </FlexBox>
        </ComboBoxItemCustom>
        <ComboBoxItemCustom text="Germany">
          <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween} style={{
          width: '100%'
        }}>
            <Label>Germany</Label>
            <Label>DE</Label>
          </FlexBox>
        </ComboBoxItemCustom>
        <ComboBoxItemCustom text="Switzerland">
          <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween} style={{
          width: '100%'
        }}>
            <Label>Switzerland</Label>
            <Label>CH</Label>
          </FlexBox>
        </ComboBoxItemCustom>
      </ComboBox>;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
        <FlexBox direction={FlexBoxDirection.Column}>
          <Label>StartsWithPerTerm (Default)</Label>
          <ComboBox filter="StartsWithPerTerm">
            <ComboBoxItem text="Austria" />
            <ComboBoxItem text="United Arab Emirates" />
            <ComboBoxItem text="Czech Republic" />
            <ComboBoxItem text="United Kingdom" />
            <ComboBoxItem text="China" />
            <ComboBoxItem text="Ukraine" />
            <ComboBoxItem text="Australia" />
            <ComboBoxItem text="Russia" />
          </ComboBox>
        </FlexBox>
        <FlexBox direction={FlexBoxDirection.Column}>
          <Label>StartsWith</Label>
          <ComboBox filter="StartsWith">
            <ComboBoxItem text="Austria" />
            <ComboBoxItem text="United Arab Emirates" />
            <ComboBoxItem text="Czech Republic" />
            <ComboBoxItem text="United Kingdom" />
            <ComboBoxItem text="China" />
            <ComboBoxItem text="Ukraine" />
            <ComboBoxItem text="Australia" />
            <ComboBoxItem text="Russia" />
          </ComboBox>
        </FlexBox>
        <FlexBox direction={FlexBoxDirection.Column}>
          <Label>Contains</Label>
          <ComboBox filter="Contains">
            <ComboBoxItem text="Austria" />
            <ComboBoxItem text="United Arab Emirates" />
            <ComboBoxItem text="Czech Republic" />
            <ComboBoxItem text="United Kingdom" />
            <ComboBoxItem text="China" />
            <ComboBoxItem text="Ukraine" />
            <ComboBoxItem text="Australia" />
            <ComboBoxItem text="Russia" />
          </ComboBox>
        </FlexBox>
      </FlexBox>;
  }
}`,...F.parameters?.docs?.source}}}})))()}export{N as a,O as c,P as i,T as l,M as n,L as o,F as r,D as s,k as t,E as u};