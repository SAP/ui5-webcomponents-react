import{M as k,C as c,i as m,a as l}from"./index-02423177.js";import{L as n}from"./index-3f70bd96.js";import{P as y}from"./index-f20344bd.js";import{F as S,b as T}from"./index-6923d62a.js";import{a as h}from"./ListItem-bdb92faa.js";import{V as w}from"./ValueState-ab6838cc.js";import{T as s}from"./index-2eaff221.js";import{T as x}from"./ThemingParameters-f4b4144e.js";import{a as D,d as C,c as v}from"./ListItemBase-4b52d1f0.js";import{S as i}from"./index-eb6fe343.js";import{C as a}from"./index-d647b80a.js";import{G as d}from"./index-cb4e1e31.js";import{A as f}from"./DomRefTable.module-30f3bd43.js";import{D as A}from"./DocsHeader-ce92ab0e.js";import{F as G}from"./Footer-c8244a58.js";import{a as o,j as e,F as M}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import"./employee-01ecb76e.js";import{S as F}from"./SubcomponentsSection-6138f2fc.js";import{u as g}from"./index-4fb8b842.js";import"./iframe-3c157cf7.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./withWebComponent-b8903b2e.js";import"./utils-ed90fb1b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./UI5Element-5c53814f.js";import"./ProgressIndicator-97071dc6.js";import"./ValueState-2c5e5904.js";import"./Integer-44c9be94.js";import"./MarkedEvents-f33713fa.js";import"./AriaLabelHelper-dee23f38.js";import"./class-map-a4eccd4f.js";import"./FocusableElements-679e4fb9.js";import"./Keys-50a1cb5a.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-da7c4a52.js";import"./MediaRange-25b98f31.js";import"./style-map-f4770aeb.js";import"./AnimationMode-39920991.js";import"./Button-6ca701be.js";import"./Icons-0f428547.js";import"./clsx.m-1229b3e0.js";import"./react-jss.esm-e54d2f1d.js";import"./decline-2be11c85.js";import"./RadioButton-71b27f26.js";import"./Label-aecaa844.js";import"./WrappingType-b81e595a.js";import"./CheckBox-9f80be56.js";import"./accept-4d6b88bc.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-ac6f9b0d.js";import"./ItemNavigation-1cd3f78d.js";import"./fastNavigation-ebf07f1c.js";import"./TabbableElements-52be7164.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-3e5a8ca3.js";import"./StandardListItem-ddbc126c.js";import"./Avatar-e191e45f.js";import"./CustomListItem-d01b5a0b.js";import"./GroupHeaderListItem-eecb05a0.js";import"./chunk-4XCFV5WA-0265c491.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-9d4f0257.js";import"./Import-60eb1828.js";import"./TableOfContent-75175b8f.js";import"./index-63e4052b.js";import"./index-bd49c23e.js";import"./Media-6b270b80.js";import"./index-0db28cca.js";import"./Popover-e3c8ecec.js";const U=`## Keyboard Handling

### Basic Navigation

The \`List\` provides advanced keyboard handling. When a list is focused the user can use the following keyboard shortcuts in order to perform a navigation:  

*   \\[UP/DOWN\\] - Navigates up and down the items
*   \\[HOME\\] - Navigates to first item
*   \\[END\\] - Navigates to the last item

The user can use the following keyboard shortcuts to perform actions (such as select, delete), when the \`mode\` property is in use:

*   \\[SPACE\\] - Select an item (if \`type\` is 'Active') when \`mode\` is selection
*   \\[DELETE\\] - Delete an item if \`mode\` property is \`Delete\`

### Fast Navigation

This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \`Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up\`. In order to use this functionality, you need to import the following module: \`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\``,B="The `StandardListItem` represents the simplest type of item for a `StandardListItemst`. This is a list item, providing the most common use cases such as `text`, `image` and `icon`.\n### CSS Shadow Parts\n\nCSS Shadow Parts allow developers to style elements inside the Shadow DOM.  \nThe `StandardListItem` exposes the following CSS Shadow Parts:\n\n*   title - Used to style the title of the list item\n*   description - Used to style the description of the list item\n*   additional-text - Used to style the additionalText of the list item\n*   icon - Used to style the icon of the list item",P="A component to be used as custom list item within the `List` the same way as the standard `StandardListItem`. The component accepts arbitrary HTML content to allow full customization\n",_="The `GroupHeaderListItem` is a special list item, used only to separate other list items into logical groups\n";function O(r={}){const{wrapper:L}=Object.assign({},g(),r.components);return L?e(L,{...r,children:e(I,{})}):I();function I(){const t=Object.assign({h2:"h2",h1:"h1",p:"p",code:"code"},g(),r.components);return o(M,{children:[e(k,{title:"Data Display / List",component:n,subcomponents:{StandardListItem:i,CustomListItem:a,GroupHeaderListItem:d},argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:"List with StandardListItems",mode:D.None,separators:C.All,growing:v.None}}),`
`,e(A,{}),`
`,e("br",{}),`
`,e(t.h2,{children:"Example"}),`
`,e(c,{children:e(m,{name:"Default",children:b=>o(n,{...b,children:[e(i,{additionalText:"3",children:"List Item 1"}),e(i,{additionalText:"2",children:"List Item 2"}),e(i,{additionalText:"1",children:"List Item 3"})]})})}),`
`,e(t.h2,{children:"Properties"}),`
`,e(f,{story:"Default"}),`
`,e(l,{children:U}),`
`,e("br",{}),`
`,e(t.h1,{children:"More Examples"}),`
`,e("br",{}),`
`,e(t.h2,{children:"StandardListItem"}),`
`,o(t.p,{children:["The ",e(t.code,{children:"StandardListItem"})," represents the simplest type of an item in a ",e(t.code,{children:"List"}),`. It is a
list item, providing the most common use cases like displaying a `,e(t.code,{children:"text"}),", ",e(t.code,{children:"image"})," and ",e(t.code,{children:"icon"}),"."]}),`
`,e(c,{children:e(m,{name:"with StandardListItem",args:{description:"StandardListItem",icon:"employee",iconEnd:!1,image:"",additionalText:"info",additionalTextState:w.None,type:h.Active,selected:!1,children:"List Item"},argTypes:{description:{description:"Defines the description displayed right under the item text, if such is present."},icon:{description:'Defines the <code>icon</code> source URI. <br><br> <b>Note:</b> SAP-icons font provides numerous built-in icons. To find all the available icons, see the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.'},iconEnd:{description:"Defines whether the <code>icon</code> should be displayed in the beginning of the list item or in the end. <br><br> <b>Note:</b> If <code>image</code> is set, the <code>icon</code> would be displayed after the <code>image</code>."},image:{description:"Defines the <code>image</code> source URI. <br><br> <b>Note:</b> The <code>image</code> would be displayed in the beginning of the list item."},additionalText:{description:"Defines the <code>additionalText</code>, displayed in the end of the list item."},additionalTextState:{description:'Defines the state of the <code>additionalTextState</code>. <br> Available options are: <code>"None"</code> (by default), <code>"Success"</code>, <code>"Warning"</code>, <code>"Information"</code> and <code>"Erorr"</code>.'},type:{description:"Defines the visual indication and behavior of the list items. Available options are <code>Active</code> (by default), <code>Inactive</code> and <code>Detail</code>. <br><br> <b>Note:</b> When set to <code>Active</code>, the item will provide visual response upon press and hover, while with type <code>Inactive</code> and <code>Detail</code> - will not.",control:{type:"select"},options:h},selected:{description:"Defines the selected state of the <code>ListItem</code>."},children:{description:"Defines the text of the <code>StandardListItem</code>. <br><br> <b>Note:</b> Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design."},onDetailClick:{description:"Fired when the user clicks on the detail button when type is `Detail`.",control:{action:"onDetailClick"}},accessibleNameRef:{table:{disable:!0}},accessibleRole:{table:{disable:!0}},busy:{table:{disable:!0}},busyDelay:{table:{disable:!0}},footerText:{table:{disable:!0}},headerText:{table:{disable:!0}},growing:{table:{disable:!0}},indent:{table:{disable:!0}},mode:{table:{disable:!0}},noDataText:{table:{disable:!0}},separators:{table:{disable:!0}},header:{table:{disable:!0}},onItemClick:{table:{disable:!0}},onItemClose:{table:{disable:!0}},onItemDelete:{table:{disable:!0}},onItemToggle:{table:{disable:!0}},onLoadMore:{table:{disable:!0}},onSelectionChange:{table:{disable:!0}}},children:b=>e(n,{headerText:"List with a customizable StandardListItem",children:e(i,{...b})})})}),`
`,e(f,{story:"with StandardListItem",noteText:'The props in the table below are part of the "StandardListItem" component.'}),`
`,e("br",{}),`
`,e(t.h2,{children:"CustomListItem"}),`
`,o(t.p,{children:["A component to be used as custom list item within the ",e("code",{children:"List"})," the same way as the standard ",e("code",{children:"StandardListItem"}),". The ",e("code",{children:"CustomListItem"}),` accepts arbitrary HTML content to allow full
customization`]}),`
`,e(c,{children:e(m,{name:"with CustomListItem",children:()=>o(n,{headerText:"List with a CustomListItem",children:[e(a,{children:o(S,{justifyContent:T.SpaceAround,style:{width:"100%"},children:[e(s,{style:{fontWeight:"bold"},children:"FULLY"}),e(s,{style:{color:"red"},children:"CUSTOMIZABLE"}),e(s,{style:{color:"white",backgroundColor:x.sapButton_Emphasized_Background},children:"CHILDREN"})]})}),e(a,{children:e(y,{value:50})})]})})}),`
`,e("br",{}),`
`,e(t.h2,{children:"GroupHeaderListItem"}),`
`,o(t.p,{children:["The ",e("code",{children:"GroupHeaderListItem"})," is a special list item, used only to separate other list items into logical groups"]}),`
`,e(c,{children:e(m,{name:"with GroupHeaderListItem",children:()=>o(n,{headerText:"List with a GroupHeaderListItem",children:[e(d,{children:"GroupHeaderListItem 1"}),e(i,{children:"List Item"}),e(i,{children:"List Item"}),e(d,{children:"GroupHeaderListItem 2"}),e(i,{children:"List Item"})]})})}),`
`,e(l,{children:F}),`
`,e(t.h2,{children:"StandardListItem"}),`
`,e(l,{children:B}),`
`,e(t.h2,{children:"CustomListItem"}),`
`,e(l,{children:P}),`
`,e(t.h2,{children:"GroupHeaderListItem"}),`
`,e(l,{children:_}),`
`,e(G,{})]})}}const N=r=>o(n,{...r,children:[e(i,{additionalText:"3",children:"List Item 1"}),e(i,{additionalText:"2",children:"List Item 2"}),e(i,{additionalText:"1",children:"List Item 3"})]});N.storyName="Default";N.parameters={storySource:{source:`args => {
  return <List {...args}>
          <StandardListItem additionalText="3">List Item 1</StandardListItem>
          <StandardListItem additionalText="2">List Item 2</StandardListItem>
          <StandardListItem additionalText="1">List Item 3</StandardListItem>
        </List>;
}`}};const u=r=>e(n,{headerText:"List with a customizable StandardListItem",children:e(i,{...r})});u.storyName="with StandardListItem";u.argTypes={description:{description:"Defines the description displayed right under the item text, if such is present."},icon:{description:'Defines the <code>icon</code> source URI. <br><br> <b>Note:</b> SAP-icons font provides numerous built-in icons. To find all the available icons, see the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.'},iconEnd:{description:"Defines whether the <code>icon</code> should be displayed in the beginning of the list item or in the end. <br><br> <b>Note:</b> If <code>image</code> is set, the <code>icon</code> would be displayed after the <code>image</code>."},image:{description:"Defines the <code>image</code> source URI. <br><br> <b>Note:</b> The <code>image</code> would be displayed in the beginning of the list item."},additionalText:{description:"Defines the <code>additionalText</code>, displayed in the end of the list item."},additionalTextState:{description:'Defines the state of the <code>additionalTextState</code>. <br> Available options are: <code>"None"</code> (by default), <code>"Success"</code>, <code>"Warning"</code>, <code>"Information"</code> and <code>"Erorr"</code>.'},type:{description:"Defines the visual indication and behavior of the list items. Available options are <code>Active</code> (by default), <code>Inactive</code> and <code>Detail</code>. <br><br> <b>Note:</b> When set to <code>Active</code>, the item will provide visual response upon press and hover, while with type <code>Inactive</code> and <code>Detail</code> - will not.",control:{type:"select"},options:h},selected:{description:"Defines the selected state of the <code>ListItem</code>."},children:{description:"Defines the text of the <code>StandardListItem</code>. <br><br> <b>Note:</b> Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design."},onDetailClick:{description:"Fired when the user clicks on the detail button when type is `Detail`.",control:{action:"onDetailClick"}},accessibleNameRef:{table:{disable:!0}},accessibleRole:{table:{disable:!0}},busy:{table:{disable:!0}},busyDelay:{table:{disable:!0}},footerText:{table:{disable:!0}},headerText:{table:{disable:!0}},growing:{table:{disable:!0}},indent:{table:{disable:!0}},mode:{table:{disable:!0}},noDataText:{table:{disable:!0}},separators:{table:{disable:!0}},header:{table:{disable:!0}},onItemClick:{table:{disable:!0}},onItemClose:{table:{disable:!0}},onItemDelete:{table:{disable:!0}},onItemToggle:{table:{disable:!0}},onLoadMore:{table:{disable:!0}},onSelectionChange:{table:{disable:!0}}};u.args={description:"StandardListItem",icon:"employee",iconEnd:!1,image:"",additionalText:"info",additionalTextState:w.None,type:h.Active,selected:!1,children:"List Item"};u.parameters={storySource:{source:`args => {
  return <List headerText="List with a customizable StandardListItem">
          <StandardListItem {...args} />
        </List>;
}`}};const H=()=>o(n,{headerText:"List with a CustomListItem",children:[e(a,{children:o(S,{justifyContent:T.SpaceAround,style:{width:"100%"},children:[e(s,{style:{fontWeight:"bold"},children:"FULLY"}),e(s,{style:{color:"red"},children:"CUSTOMIZABLE"}),e(s,{style:{color:"white",backgroundColor:x.sapButton_Emphasized_Background},children:"CHILDREN"})]})}),e(a,{children:e(y,{value:50})})]});H.storyName="with CustomListItem";H.parameters={storySource:{source:`() => {
  return <List headerText="List with a CustomListItem">
          <CustomListItem>
            <FlexBox justifyContent={FlexBoxJustifyContent.SpaceAround} style={{
        width: "100%"
      }}>
              <Text style={{
          fontWeight: "bold"
        }}>FULLY</Text>
              <Text style={{
          color: "red"
        }}>CUSTOMIZABLE</Text>
              <Text style={{
          color: "white",
          backgroundColor: ThemingParameters.sapButton_Emphasized_Background
        }}>
                CHILDREN
              </Text>
            </FlexBox>
          </CustomListItem>
          <CustomListItem>
            <ProgressIndicator value={50} />
          </CustomListItem>
        </List>;
}`}};const E=()=>o(n,{headerText:"List with a GroupHeaderListItem",children:[e(d,{children:"GroupHeaderListItem 1"}),e(i,{children:"List Item"}),e(i,{children:"List Item"}),e(d,{children:"GroupHeaderListItem 2"}),e(i,{children:"List Item"})]});E.storyName="with GroupHeaderListItem";E.parameters={storySource:{source:`() => {
  return <List headerText="List with a GroupHeaderListItem">
          <GroupHeaderListItem>GroupHeaderListItem 1</GroupHeaderListItem>
          <StandardListItem>List Item</StandardListItem>
          <StandardListItem>List Item</StandardListItem>
          <GroupHeaderListItem>GroupHeaderListItem 2</GroupHeaderListItem>
          <StandardListItem>List Item</StandardListItem>
        </List>;
}`}};const p={title:"Data Display / List",component:n,subcomponents:{StandardListItem:i,CustomListItem:a,GroupHeaderListItem:d},args:{headerText:"List with StandardListItems",mode:D.None,separators:C.All,growing:v.None},argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withStandardListItem","withCustomListItem","withGroupHeaderListItem"]};p.parameters=p.parameters||{};p.parameters.docs={...p.parameters.docs||{},page:O};const ut=["defaultStory","withStandardListItem","withCustomListItem","withGroupHeaderListItem"];export{ut as __namedExportsOrder,p as default,N as defaultStory,H as withCustomListItem,E as withGroupHeaderListItem,u as withStandardListItem};
//# sourceMappingURL=List.stories-0858350a.js.map
