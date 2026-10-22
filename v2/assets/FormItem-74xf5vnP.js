import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{X as t,Y as n}from"./CustomElementsScopeUtils-Cw9cVXS8.js";import{a as r,c as i,d as a,f as o,i as s,l as c,m as l,n as ee,o as u,p as d,r as f,s as p,t as m,u as h}from"./jsx-runtime-CMuXpgGv.js";import{n as g,t as _}from"./withWebComponent-DhD1x6sB.js";import{n as v,t as y}from"./i18n-BNTZIxbt.js";import{o as b,t as x}from"./AccessibilityTextsHelper-B8prvtT1.js";import{Fo as S,cr as te,or as ne}from"./i18n-defaults-B_hYVKqa.js";import{n as C,t as w}from"./parameters-bundle.css-CN9kWR00.js";import{n as T,t as E}from"./slot-strict-BSUUcNBc.js";import{n as re,t as ie}from"./Title-Bp5Guh7h.js";function ae(e,t=0,n=0){return oe(t,n)?t===O?`1fr`:`${t}fr ${O-(t+n)}fr ${n}fr`:(console.warn(`Form :: invalid usage of emptySpan and/or labelSpan in ${e} size. The labelSpan must be <=12 and when emptySpace is used - their combined values must not exceed 11.`),e===`S`?`1fr`:k)}function oe(e,t){return t===0?e<=O:e+t<=11}function D(e,t,n,r,i){if(r.columnSpan)return r.columnSpan;let a=r.colSpan?.split(` `).find(e=>e.startsWith(i));if(a)return parseInt(a.slice(i.length));if(e===1||e<=t)return 1;if(e%t===0)return e/t;let o=e-t;return o<=t?n<o?2:1:n===0?1+(o-t)+1:2}var O,k;function A(){return(A=e((()=>{O=12,k=`4fr 8fr 0fr`})))()}function se(){return s(`div`,{class:`ui5-form-root`,role:this.effectiveAccessibleRole,"aria-label":this.effectiveAccessibleName,"aria-labelledby":this.effectiveAccessibleNameRef,style:{"--ui5-form-columns-s":this.columnsS,"--ui5-form-columns-m":this.columnsM,"--ui5-form-columns-l":this.columnsL,"--ui5-form-columns-xl":this.columnsXl,"--ui5-form-item-layout-S":this.getFormItemLayout(`S`),"--ui5-form-item-layout-M":this.getFormItemLayout(`M`),"--ui5-form-item-layout-L":this.getFormItemLayout(`L`),"--ui5-form-item-layout-XL":this.getFormItemLayout(`XL`)},children:[this.hasHeader&&f(`div`,{class:`ui5-form-header`,part:`header`,children:this.hasCustomHeader?f(`slot`,{name:`header`}):f(ie,{id:`${this._id}-header-text`,wrappingType:`None`,level:this.headerLevel,children:this.headerText})}),this.hasGroupItems?ce.call(this):le.call(this)]})}function ce(){return f(`div`,{class:`ui5-form-layout`,part:`layout`,children:this.groupItemsInfo.map(e=>{let t=e.groupItem;return f(`div`,{class:`ui5-form-column`,style:{"--ui5-form-column-span-s":t.colsS,"--ui5-form-column-span-m":t.colsM,"--ui5-form-column-span-l":t.colsL,"--ui5-form-column-span-xl":t.colsXl},part:`column`,children:s(`div`,{class:`ui5-form-group`,role:e.role,"aria-labelledby":e.accessibleNameRef,"aria-label":e.accessibleName,children:[t.headerText&&f(`div`,{class:`ui5-form-group-heading`,children:f(ie,{id:`${t._id}-group-header-text`,wrappingType:`None`,level:t.headerLevel,size:`H6`,children:t.headerText})}),this.accessibleMode===`Edit`?f(`div`,{class:`ui5-form-group-layout`,children:f(`slot`,{name:t._individualSlot})}):f(`dl`,{class:`ui5-form-group-layout`,"aria-labelledby":e.accessibleNameRefInner,"aria-label":e.accessibleNameInner,children:f(`slot`,{name:t._individualSlot})})]})})})})}function le(){let e=f(`div`,{class:`ui5-form-column`,style:{"--ui5-form-column-span-s":this.columnsS,"--ui5-form-column-span-m":this.columnsM,"--ui5-form-column-span-l":this.columnsL,"--ui5-form-column-span-xl":this.columnsXl},part:`column`,children:this.accessibleMode===`Edit`?f(`div`,{class:`ui5-form-group-layout`,children:j.call(this)}):f(`dl`,{class:`ui5-form-group-layout`,children:j.call(this)})});return f(`div`,{class:`ui5-form-layout`,part:`layout`,children:e})}function j(){return this.itemsInfo.map(e=>{let t=e.item;return f(`div`,{class:`ui5-form-item`,children:f(`slot`,{name:t._individualSlot})})})}function M(){return(M=e((()=>{ee(),re()})))()}var N;function P(){return(P=e((()=>{t(),r(),w(),n(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>u),n(`@ui5/webcomponents`,`sap_horizon`,async()=>C,`host`),N=`@container (width < 600px){.ui5-form-layout{grid-template-columns:repeat(var(--ui5-form-columns-s),1fr)}::slotted(*){justify-self:start}::slotted(:nth-child(2n)){margin-bottom:.5rem}.ui5-form-column{grid-column:span var(--ui5-form-column-span-s, 1)}.ui5-form-group-layout{column-count:var(--ui5-form-column-span-s, 1)}}@container (600px <= width < 1024px){.ui5-form-layout{grid-template-columns:repeat(var(--ui5-form-columns-m),1fr)}.ui5-form-column{grid-column:span var(--ui5-form-column-span-m, 1)}.ui5-form-group-layout{column-count:var(--ui5-form-column-span-m, 1)}}@container (1024px <= width < 1440px){.ui5-form-layout{grid-template-columns:repeat(var(--ui5-form-columns-l),1fr)}.ui5-form-column{grid-column:span var(--ui5-form-column-span-l, 1)}.ui5-form-group-layout{column-count:var(--ui5-form-column-span-l, 1)}}@container (width >= 1440px){.ui5-form-layout{grid-template-columns:repeat(var(--ui5-form-columns-xl),1fr)}.ui5-form-column{grid-column:span var(--ui5-form-column-span-xl, 1)}.ui5-form-group-layout{column-count:var(--ui5-form-column-span-xl, 1)}}:host{--ui5-form-item-label-justify-internal: start;--ui5-form-item-label-padding-internal: .625rem .25rem 0 .25rem;--ui5-form-item-label-text-align-internal: left}@container (width < 600px){.ui5-form-item,.ui5-form-group{--ui5-form-item-layout: var(--ui5-form-item-layout-S)}:host(:is([label-span~="S12"],:not([label-span*="S"]))) .ui5-form-item,:host(:is([label-span~="S12"],:not([label-span*="S"]))) .ui5-form-group{--ui5-form-item-label-justify: var(--ui5-form-item-label-justify-internal);--ui5-form-item-label-text-align: var(--ui5-form-item-label-text-align-internal);--ui5-form-item-label-padding: var(--ui5-form-item-label-padding-internal)}}@container (600px <= width < 1024px){.ui5-form-item,.ui5-form-group{--ui5-form-item-layout: var(--ui5-form-item-layout-M)}:host([label-span~="M12"]) .ui5-form-item,:host([label-span~="M12"]) .ui5-form-group{--ui5-form-item-label-justify: var(--ui5-form-item-label-justify-internal);--ui5-form-item-label-text-align: var(--ui5-form-item-label-text-align-internal);--ui5-form-item-label-padding: var(--ui5-form-item-label-padding-internal)}}@container (1024px <= width < 1440px){.ui5-form-item,.ui5-form-group{--ui5-form-item-layout: var(--ui5-form-item-layout-L)}:host([label-span~="L12"]) .ui5-form-item,:host([label-span~="L12"]) .ui5-form-group{--ui5-form-item-label-justify: var(--ui5-form-item-label-justify-internal);--ui5-form-item-label-text-align: var(--ui5-form-item-label-text-align-internal);--ui5-form-item-label-padding: var(--ui5-form-item-label-padding-internal)}}@container (width >= 1440px){.ui5-form-item,.ui5-form-group{--ui5-form-item-layout: var(--ui5-form-item-layout-XL)}:host([label-span~="XL12"]) .ui5-form-item,:host([label-span~="XL12"]) .ui5-form-group{--ui5-form-item-label-justify: var(--ui5-form-item-label-justify-internal);--ui5-form-item-label-text-align: var(--ui5-form-item-label-text-align-internal);--ui5-form-item-label-padding: var(--ui5-form-item-label-padding-internal)}}:host{display:block;container-type:inline-size}.ui5-form-root{display:flex;flex-direction:column;background-color:var(--sapGroup_ContentBackground);border-radius:.75rem}.ui5-form-header{display:flex;min-height:2.75rem;align-items:center;border-bottom:1px solid var(--sapGroup_TitleBorderColor);padding:.875rem 1rem;box-sizing:border-box}.ui5-form-layout{display:grid;column-gap:1rem;row-gap:.125rem;padding:1rem .75rem}.ui5-form-group-layout{display:block;column-gap:1rem}.ui5-form-group-heading{height:var(--_ui5-form-group-heading-height);line-height:var(--_ui5-form-group-heading-height);padding-inline-start:.25rem;overflow:hidden}.ui5-form-column{padding-top:.5rem;padding-bottom:1rem;box-sizing:border-box;min-width:0}::slotted([ui5-form-group]){display:contents}dl{padding:0;margin:0;border:0 transparent}
`})))()}var F,I,L;function R(){return(R=e((()=>{l(),a(),c(),v(),T(),p(),b(),A(),M(),P(),S(),F=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},L=I=class extends d{constructor(){super(...arguments),this.accessibleMode=`Display`,this.layout=`S1 M1 L2 XL3`,this.labelSpan=`S12 M4 L4 XL4`,this.emptySpan=`S0 M0 L0 XL0`,this.headerLevel=`H2`,this.itemSpacing=`Normal`,this.columnsS=1,this.labelSpanS=12,this.emptySpanS=0,this.columnsM=1,this.labelSpanM=4,this.emptySpanM=0,this.columnsL=2,this.labelSpanL=4,this.emptySpanL=0,this.columnsXl=3,this.labelSpanXl=4,this.emptySpanXl=0}onBeforeRendering(){this.parseLayoutConfiguration(),this.setGroupsColSpan(),this.setItemsState()}onAfterRendering(){this.setFastNavGroup()}parseLayoutConfiguration(){this.layout.split(` `).forEach(e=>{e.startsWith(`S`)?this.columnsS=parseInt(e.slice(1)):e.startsWith(`M`)?this.columnsM=parseInt(e.slice(1)):e.startsWith(`L`)?this.columnsL=parseInt(e.slice(1)):e.startsWith(`XL`)&&(this.columnsXl=parseInt(e.slice(2)))}),this.labelSpan.split(` `).forEach(e=>{e.startsWith(`S`)?this.labelSpanS=parseInt(e.slice(1)):e.startsWith(`M`)?this.labelSpanM=parseInt(e.slice(1)):e.startsWith(`L`)?this.labelSpanL=parseInt(e.slice(1)):e.startsWith(`XL`)&&(this.labelSpanXl=parseInt(e.slice(2)))}),this.emptySpan.split(` `).forEach(e=>{e.startsWith(`S`)?this.emptySpanS=parseInt(e.slice(1)):e.startsWith(`M`)?this.emptySpanM=parseInt(e.slice(1)):e.startsWith(`L`)?this.emptySpanL=parseInt(e.slice(1)):e.startsWith(`XL`)&&(this.emptySpanXl=parseInt(e.slice(2)))})}getFormItemLayout(e){let t,n;return e===`S`?(t=this.labelSpanS,n=this.emptySpanS):e===`M`?(t=this.labelSpanM,n=this.emptySpanM):e===`L`?(t=this.labelSpanL,n=this.emptySpanL):e===`XL`&&(t=this.labelSpanXl,n=this.emptySpanXl),ae(e,t,n)}setFastNavGroup(){this.hasGroupItems?this.removeAttribute(`data-sap-ui-fastnavgroup`):this.setAttribute(`data-sap-ui-fastnavgroup`,`true`)}setGroupsColSpan(){if(!this.hasGroupItems)return;let e=this.items.length;[...this.items].sort((e,t)=>t?.items.length-e?.items.length).forEach((t,n)=>{t.colsXl=D(this.columnsXl,e,n,t,`XL`),t.colsL=D(this.columnsL,e,n,t,`L`),t.colsM=D(this.columnsM,e,n,t,`M`),t.colsS=D(this.columnsS,e,n,t,`S`)})}setItemsState(){this.items.forEach(e=>{e.itemSpacing=this.itemSpacing,e.accessibleMode=this.accessibleMode})}get hasGroupItems(){return this.items.some(e=>e.isGroup)}get hasHeader(){return this.hasCustomHeader||this.hasHeaderText}get hasHeaderText(){return!!this.headerText}get hasCustomHeader(){return!!this.header.length}get effectiveAccessibleName(){return this.accessibleName||this.accessibleNameRef?x(this):this.hasHeader?void 0:I.i18nBundle.getText(ne)}get effectiveAccessibleNameRef(){if(!(this.accessibleName||this.accessibleNameRef))return this.hasHeaderText&&!this.hasCustomHeader?`${this._id}-header-text`:void 0}get effectiveAccessibleRole(){return this.hasGroupItems?`region`:`form`}get groupItemsInfo(){return this.items.map((e,t)=>{let n=e.effectiveAccessibleNameRef;return{groupItem:e,accessibleName:this.accessibleMode===`Edit`?e.getEffectiveAccessibleName(t):void 0,accessibleNameInner:this.accessibleMode===`Edit`?void 0:e.getEffectiveAccessibleName(t),accessibleNameRef:this.accessibleMode===`Edit`?n:void 0,accessibleNameRefInner:this.accessibleMode===`Edit`?void 0:n,items:this.getItemsInfo(Array.from(e.children)),role:this.accessibleMode===`Edit`?`form`:void 0}})}get itemsInfo(){return this.getItemsInfo()}getItemsInfo(e){return(e||this.items).map(e=>({item:e}))}},F([h()],L.prototype,`accessibleName`,void 0),F([h()],L.prototype,`accessibleNameRef`,void 0),F([h()],L.prototype,`accessibleMode`,void 0),F([h()],L.prototype,`layout`,void 0),F([h()],L.prototype,`labelSpan`,void 0),F([h()],L.prototype,`emptySpan`,void 0),F([h()],L.prototype,`headerText`,void 0),F([h()],L.prototype,`headerLevel`,void 0),F([h()],L.prototype,`itemSpacing`,void 0),F([E()],L.prototype,`header`,void 0),F([E({type:HTMLElement,default:!0,individualSlots:!0,invalidateOnChildChange:!0})],L.prototype,`items`,void 0),F([h({type:Number,noAttribute:!0})],L.prototype,`columnsS`,void 0),F([h({type:Number,noAttribute:!0})],L.prototype,`labelSpanS`,void 0),F([h({type:Number,noAttribute:!0})],L.prototype,`emptySpanS`,void 0),F([h({type:Number,noAttribute:!0})],L.prototype,`columnsM`,void 0),F([h({type:Number,noAttribute:!0})],L.prototype,`labelSpanM`,void 0),F([h({type:Number,noAttribute:!0})],L.prototype,`emptySpanM`,void 0),F([h({type:Number,noAttribute:!0})],L.prototype,`columnsL`,void 0),F([h({type:Number,noAttribute:!0})],L.prototype,`labelSpanL`,void 0),F([h({type:Number,noAttribute:!0})],L.prototype,`emptySpanL`,void 0),F([h({type:Number,noAttribute:!0})],L.prototype,`columnsXl`,void 0),F([h({type:Number,noAttribute:!0})],L.prototype,`labelSpanXl`,void 0),F([h({type:Number,noAttribute:!0})],L.prototype,`emptySpanXl`,void 0),F([y(`@ui5/webcomponents`)],L,`i18nBundle`,void 0),L=I=F([o({tag:`ui5-form`,renderer:i,styles:N,template:se})],L),L.define()})))()}var z;function B(){return(B=e((()=>{R(),_(),z=g(`ui5-form`,[`accessibleMode`,`accessibleName`,`accessibleNameRef`,`emptySpan`,`headerLevel`,`headerText`,`itemSpacing`,`labelSpan`,`layout`],[],[`header`],[]),z.displayName=`Form`;try{z.displayName=`Form`,z.__docgenInfo={description:`The Form is a layout component that arranges labels and form fields (like input fields) pairs
into a specific number of columns.

**Note:** The Form web component is a layout component, it isn't a replacement for the native \`form\` HTML element.
The Form web component does not provide any APIs for form submission.

### Structure

- **Form** (\`Form\`) is the top-level container component, responsible for the content layout and responsiveness.
- **FormGroup** (\`FormGroup\`) enables the grouping of the Form content.
- **FormItem** (\`FormItem\`) is a pair of label and form fields and can be used directly in a Form, or as part of a FormGroup.

The simplest Form (\`Form\`) consists of a header area on top,
displaying a header text (see the \`headingText\` property) and content below - an arbitrary number of FormItems (ui5-form-item),
representing the pairs of label and form fields.

And, there is also "grouping" available to assist the implementation of richer UIs.
This is enabled by the FormGroup (\`FormGroup\`) component.
In this case, the Form is structured into FormGroups and each FormGroup consists of FormItems.

### Responsiveness

The Form component reacts and changes its layout on predefined breakpoints.
Depending on its size, the Form content (FormGroups and FormItems) gets divided into one or more columns as follows:
- **S** (0 - 599px) – 1 column is recommended (default: 1)
- **M** (600px - 1023px) – up to 2 columns are recommended (default: 1)
- **L** (1024px - 1439px) - up to 3 columns are recommended (default: 2)
- **XL** (>= 1440px) – up to 6 columns are recommended (default: 3)

To change the layout, use the \`layout\` property - f.e. layout="S1 M2 L3 XL6".

### Groups

To make better use of screen space, there is built-in logic to determine how many columns should a FormGroup occupy.

- **Example #1** (perfect match):
4 columns and 4 groups: each group will use 1 column.

- **Example #2** (balanced distribution):
4 columns and 2 groups: each group will use 2 columns.
6 columns and 2 groups: each group will use 3 columns.

- **Example #3** (unbalanced distribution):
3 columns and 2 groups: the larger one will use 2 columns, the smaller 1 column.
5 columns and 3 groups: two of the groups will use 2 columns each, the smallest 1 column.

**Note:** The size of a group element is determined by the number of FormItems assigned to it.
In the case of equality, the first in the DOM will use more columns, and the last - fewer columns.

- **Example #4** (more groups than columns):
3 columns and 4 groups: each FormGroup uses only 1 column, the last FormGroup will wrap on the second row.

### Groups Column Span

To influence the built-in group distribution, described in the previous section,
you can use the FormGroup's \`columnSpan\` property, that defines how many columns the group should expand to.

### Items Column Span

FormItem's columnSpan property defines how many columns the form item should expand to inside a form group or the form.

### Items Label Span

The placement of the labels depends on the size of the used column.
If there is enough space, the labels are next to their associated fields, otherwise  - above the fields.
By default, the labels take 4/12 of the FormItem, leaving 8/12 parts to associated fields.
You can control what space the labels should take via the \`labelSpan\` property.

**For example:** To always place the labels on top set: \`labelSpan="S12 M12 L12 XL12"\` property.

### Items Empty Span

By default, a form item spans 12 cells, fully divided between its label and field, with no empty space at the end:
- **Label:** occupies 4 cells.
- **Field:** occupies 8 cells.

The \`emptySpan\` property provides additional layout flexibility by defining empty space at the form item’s end.

**For example:** Setting "S0 M0 L3 XL3" (or just "L3 XL3") adjusts the layout as follows:
- **Label:** remains 4 cells.
- **Field:** is reduced to 5 cells.
- **Empty space:** 3 cells are added at the end.

Greater values increase the empty space at the end of the form item, reducing the space available for the label and its field.
However, setting \`emptySpan\` to 1 cell is recommended and typically sufficient to achieve a balanced layout.

### Navigation flow

Items are grouped into \`FormGroup\` elements, allowing the following navigation:

- **Single-Column Group**: Focus moves vertically down from one item to the next.
  \`\`\`
  | 1 |
  | 2 |
  | 3 |
  \`\`\`

- **Multi-Column Group**: Focus moves horizontally within each row, advancing to the next row after completing the current one.
  \`\`\`
  | 1 | 4 |
  | 2 | 5 |
  | 3 | 6 |
  \`\`\`

### Keyboard Handling

- [Tab] - Moves the focus to the next interactive element within the Form/FormGroup (if available) or to the next element in the tab chain outside the Form
- [Shift] + [Tab] - Moves the focus to the previous interactive element within the Form/FormGroup (if available) or to the previous element in the tab chain outside the Form
- [F6] - Moves the focus to the first interactive element of the next FormGroup (if available) or to the next element in the tab chain outside the Form
- [Shift] + [F6] - Moves the focus to the first interactive element of the previous FormGroup (if available) or to the previous element in the tab chain outside the Form

### ES6 Module Import

- import`,displayName:`Form`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/Form/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Form/index.d.ts`,name:`FormPropTypes`}],description:`Defines the component content - FormGroups or FormItems.

**Note:** Mixing FormGroups and standalone FormItems (not belonging to a group) is not supported.
Either use FormGroups and make sure all FormItems are part of a FormGroup, or use just FormItems without any FormGroups.

**Note:** As of version 2.23.0 the support for standalone FormItems (not belonging to a group) is deprecated.
We recommend using FormGroups, as they provide better accessibility and layout options.

__Supported Node Type/s:__ \`Array<IFormItem>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Form/index.d.ts`,name:`FormPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},header:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Form/index.d.ts`,name:`FormPropTypes`}],description:`Defines the component header area.

**Note:** When a \`header\` is provided, the \`headerText\` property is ignored.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`header`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Form/index.d.ts`,name:`FormPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},accessibleMode:{defaultValue:{value:`"Display"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Form/index.d.ts`,name:`FormAttributes`}],description:`Defines the accessibility mode of the component in "edit" and "display" use-cases.

Based on the mode, the component renders different HTML elements and ARIA attributes,
which are appropriate for the use-case.

**Usage:**
- Set this property to "Display", when the form consists of non-editable (e.g. texts) form items.
- Set this property to "Edit", when the form consists of editable (e.g. input fields) form items.

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents**.`,name:`accessibleMode`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Form/index.d.ts`,name:`FormAttributes`},required:!1,tags:{default:`"Display"`},type:{name:`enum`,raw:`FormAccessibleMode | "Display" | "Edit"`,value:[{value:`"Display"`,description:`Display mode.`,fullComment:`Display mode.
@public`,tags:{public:``}},{value:`"Edit"`,description:`Edit mode.`,fullComment:`Edit mode.
@public`,tags:{public:``}},{value:`"Display"`},{value:`"Edit"`}]}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Form/index.d.ts`,name:`FormAttributes`}],description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v2.10.0](https://github.com/UI5/webcomponents/releases/tag/v2.10.0) of **@ui5/webcomponents**.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Form/index.d.ts`,name:`FormAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleNameRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Form/index.d.ts`,name:`FormAttributes`}],description:`Defines id (or many ids) of the element (or elements) that label the component.

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents**.`,name:`accessibleNameRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Form/index.d.ts`,name:`FormAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},emptySpan:{defaultValue:{value:`"S0 M0 L0 XL0"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Form/index.d.ts`,name:`FormAttributes`}],description:`Defines the number of cells that are empty at the end of each form item, configurable by breakpoint.

By default, a form item spans 12 cells, fully divided between its label (4 cells) and field (8 cells), with no empty space at the end.
The \`emptySpan\` provides additional layout flexibility by defining empty space at the form item’s end.

**Note:**
- The maximum allowable empty space is 10 cells. At least 1 cell each must remain for the label and the field.
- When \`emptySpan\` is specified (greater than 0), ensure that the combined value of \`emptySpan\` and \`labelSpan\` does not exceed 11. This guarantees a minimum of 1 cell for the field.

**Note:** Available since [v2.5.0](https://github.com/UI5/webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.`,name:`emptySpan`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Form/index.d.ts`,name:`FormAttributes`},required:!1,tags:{default:`"S0 M0 L0 XL0"`},type:{name:`string`}},headerLevel:{defaultValue:{value:`"H2"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Form/index.d.ts`,name:`FormAttributes`}],description:`Defines the compoennt heading level,
set by the \`headerText\`.

**Note:** Available since [v2.10.0](https://github.com/UI5/webcomponents/releases/tag/v2.10.0) of **@ui5/webcomponents**.`,name:`headerLevel`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Form/index.d.ts`,name:`FormAttributes`},required:!1,tags:{default:`"H2"`},type:{name:`enum`,raw:`TitleLevel | "H1" | "H2" | "H3" | "H4" | "H5" | "H6"`,value:[{value:`"H1"`,description:"Renders `h1` tag.",fullComment:"Renders `h1` tag.\n@public",tags:{public:``}},{value:`"H2"`,description:"Renders `h2` tag.",fullComment:"Renders `h2` tag.\n@public",tags:{public:``}},{value:`"H3"`,description:"Renders `h3` tag.",fullComment:"Renders `h3` tag.\n@public",tags:{public:``}},{value:`"H4"`,description:"Renders `h4` tag.",fullComment:"Renders `h4` tag.\n@public",tags:{public:``}},{value:`"H5"`,description:"Renders `h5` tag.",fullComment:"Renders `h5` tag.\n@public",tags:{public:``}},{value:`"H6"`,description:"Renders `h6` tag.",fullComment:"Renders `h6` tag.\n@public",tags:{public:``}},{value:`"H1"`},{value:`"H2"`},{value:`"H3"`},{value:`"H4"`},{value:`"H5"`},{value:`"H6"`}]}},headerText:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Form/index.d.ts`,name:`FormAttributes`}],description:`Defines the header text of the component.

**Note:** The property gets overridden by the \`header\` slot.`,name:`headerText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Form/index.d.ts`,name:`FormAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},itemSpacing:{defaultValue:{value:`"Normal"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Form/index.d.ts`,name:`FormAttributes`}],description:`Defines the vertical spacing between form items.

**Note:** If the Form is meant to be switched between "display"("non-edit") and "edit" modes,
we recommend using "Large" item spacing in "display"("non-edit") mode, and "Normal" - for "edit" mode,
to avoid "jumping" effect, caused by the hight difference between texts in "display"("non-edit") mode and the input fields in "edit" mode.`,name:`itemSpacing`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Form/index.d.ts`,name:`FormAttributes`},required:!1,tags:{default:`"Normal"`},type:{name:`enum`,raw:`"Normal" | FormItemSpacing | "Large"`,value:[{value:`"Normal"`},{value:`"Normal"`,description:`Normal spacing (smaller vertical space between form items).`,fullComment:`Normal spacing (smaller vertical space between form items).
@public`,tags:{public:``}},{value:`"Large"`,description:`Large spacing (larger vertical space between form items).`,fullComment:`Large spacing (larger vertical space between form items).
@public`,tags:{public:``}},{value:`"Large"`}]}},labelSpan:{defaultValue:{value:`"S12 M4 L4 XL4"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Form/index.d.ts`,name:`FormAttributes`}],description:`Defines the width proportion of the labels and fields of a form item by breakpoint.

By default, the labels take 4/12 (or 1/3) of the form item in M,L and XL sizes,
and 12/12 in S size, e.g in S the label is on top of its associated field.

The supported values are between 1 and 12. Greater the number, more space the label will use.

**Note:** If "12" is set, the label will be displayed on top of its assosiated field.`,name:`labelSpan`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Form/index.d.ts`,name:`FormAttributes`},required:!1,tags:{default:`"S12 M4 L4 XL4"`},type:{name:`string`}},layout:{defaultValue:{value:`"S1 M1 L2 XL3"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Form/index.d.ts`,name:`FormAttributes`}],description:"Defines the number of columns to distribute the form content by breakpoint.\n\nSupported values:\n- `S` - 1 column by default (1 column is recommended)\n- `M` - 1 column by default (up to 2 columns are recommended)\n- `L` - 2 columns by default (up to 3 columns are recommended)\n- `XL` - 3 columns by default (up to 6 columns  are recommended)",name:`layout`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Form/index.d.ts`,name:`FormAttributes`},required:!1,tags:{default:`"S1 M1 L2 XL3"`},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{ui5:`/webcomponents/dist/Form.js";
- import
/webcomponents/dist/FormGroup.js";
- import
/webcomponents/dist/FormItem.js";

__Note:__ This is a UI5 Web Component! [Form UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/Form) | [Repository](https://github.com/UI5/webcomponents)`,since:`[2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.`}}}catch{}})))()}var V,H,U;function W(){return(W=e((()=>{l(),v(),a(),c(),T(),b(),S(),V=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},U=H=class extends d{constructor(){super(...arguments),this.headerLevel=`H3`,this.colsS=1,this.colsM=1,this.colsL=1,this.colsXl=1,this.itemSpacing=`Normal`}onBeforeRendering(){this.processFormItems()}processFormItems(){this.items.forEach(e=>{e.itemSpacing=this.itemSpacing})}getEffectiveAccessibleName(e){if(this.accessibleName||this.accessibleNameRef)return x(this);if(!this.headerText)return H.i18nBundle.getText(te,e+1)}get effectiveAccessibleNameRef(){if(!(this.accessibleName||this.accessibleNameRef))return this.headerText?`${this._id}-group-header-text`:void 0}get isGroup(){return!0}},V([h()],U.prototype,`headerText`,void 0),V([h()],U.prototype,`headerLevel`,void 0),V([h({type:Number})],U.prototype,`columnSpan`,void 0),V([h()],U.prototype,`colSpan`,void 0),V([h()],U.prototype,`accessibleName`,void 0),V([h()],U.prototype,`accessibleNameRef`,void 0),V([E({type:HTMLElement,default:!0})],U.prototype,`items`,void 0),V([h({type:Number})],U.prototype,`colsS`,void 0),V([h({type:Number})],U.prototype,`colsM`,void 0),V([h({type:Number})],U.prototype,`colsL`,void 0),V([h({type:Number})],U.prototype,`colsXl`,void 0),V([h()],U.prototype,`itemSpacing`,void 0),V([y(`@ui5/webcomponents`)],U,`i18nBundle`,void 0),U=H=V([o({tag:`ui5-form-group`,fastNavigation:!0})],U),U.define()})))()}var G;function K(){return(K=e((()=>{W(),_(),G=g(`ui5-form-group`,[`accessibleName`,`accessibleNameRef`,`colSpan`,`columnSpan`,`headerLevel`,`headerText`],[],[],[]),G.displayName=`FormGroup`;try{G.displayName=`FormGroup`,G.__docgenInfo={description:`The FormGroup (ui5-form-group) represents a group inside the Form (ui5-form) component
and it consists of FormItem (ui5-form-item) components.

The layout of the FormGroup is mostly defined and controlled by the overarching Form (ui5-form) component.
Still, one can influence the layout via the FormGroup's \`columnSpan\` property,
that defines how many columns the group should expand to.

### Usage

Тhe FormGroup (ui5-form-group) allows to split a Form into groups,
e.g to group FormItems that logically belong together.

### ES6 Module Import

- import`,displayName:`FormGroup`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/FormGroup/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/FormGroup/index.d.ts`,name:`FormGroupPropTypes`}],description:`Defines the items of the component.

__Supported Node Type/s:__ \`Array<FormItem>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/FormGroup/index.d.ts`,name:`FormGroupPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/FormGroup/index.d.ts`,name:`FormGroupAttributes`}],description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents**.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/FormGroup/index.d.ts`,name:`FormGroupAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleNameRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/FormGroup/index.d.ts`,name:`FormGroupAttributes`}],description:`Defines id (or many ids) of the element (or elements) that label the component.

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents**.`,name:`accessibleNameRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/FormGroup/index.d.ts`,name:`FormGroupAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},colSpan:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/FormGroup/index.d.ts`,name:`FormGroupAttributes`}],description:`Defines the number of columns to distribute the form content by breakpoint (S1 M2 L3 XL4 for example).

**Note:** This property is ignored if \`columnSpan\` is set, as it is expected that the column span is defined.

**Note:** Available since [v2.23.0](https://github.com/UI5/webcomponents/releases/tag/v2.23.0) of **@ui5/webcomponents**.`,name:`colSpan`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/FormGroup/index.d.ts`,name:`FormGroupAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},columnSpan:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/FormGroup/index.d.ts`,name:`FormGroupAttributes`}],description:"Defines column span of the component,\ne.g how many columns the group should span to.\n\n**Note:** If this property is set, it has higher priority than `colSpan` and `colSpan` will be ignored.",name:`columnSpan`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/FormGroup/index.d.ts`,name:`FormGroupAttributes`},required:!1,tags:{default:`undefined`},type:{name:`number`}},headerLevel:{defaultValue:{value:`"H3"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/FormGroup/index.d.ts`,name:`FormGroupAttributes`}],description:`Defines the compoennt heading level,
set by the \`headerText\`.

**Note:** Available since [v2.10.0](https://github.com/UI5/webcomponents/releases/tag/v2.10.0) of **@ui5/webcomponents**.`,name:`headerLevel`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/FormGroup/index.d.ts`,name:`FormGroupAttributes`},required:!1,tags:{default:`"H3"`},type:{name:`enum`,raw:`TitleLevel | "H1" | "H2" | "H3" | "H4" | "H5" | "H6"`,value:[{value:`"H1"`,description:"Renders `h1` tag.",fullComment:"Renders `h1` tag.\n@public",tags:{public:``}},{value:`"H2"`,description:"Renders `h2` tag.",fullComment:"Renders `h2` tag.\n@public",tags:{public:``}},{value:`"H3"`,description:"Renders `h3` tag.",fullComment:"Renders `h3` tag.\n@public",tags:{public:``}},{value:`"H4"`,description:"Renders `h4` tag.",fullComment:"Renders `h4` tag.\n@public",tags:{public:``}},{value:`"H5"`,description:"Renders `h5` tag.",fullComment:"Renders `h5` tag.\n@public",tags:{public:``}},{value:`"H6"`,description:"Renders `h6` tag.",fullComment:"Renders `h6` tag.\n@public",tags:{public:``}},{value:`"H1"`},{value:`"H2"`},{value:`"H3"`},{value:`"H4"`},{value:`"H5"`},{value:`"H6"`}]}},headerText:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/FormGroup/index.d.ts`,name:`FormGroupAttributes`}],description:`Defines header text of the component.`,name:`headerText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/FormGroup/index.d.ts`,name:`FormGroupAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{ui5:`/webcomponents/dist/FormGroup.js";

__Note:__ This is a UI5 Web Component! [FormGroup UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/FormGroup) | [Repository](https://github.com/UI5/webcomponents)`,since:`[2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.`}}}catch{}})))()}function ue(){return f(`div`,{class:`ui5-form-item-root`,children:f(`div`,{class:`ui5-form-item-layout`,part:`layout`,children:this.accessibleMode===`Edit`?de.call(this):fe.call(this)})})}function de(){return s(m,{children:[f(`div`,{class:`ui5-form-item-label`,part:`label`,children:f(`slot`,{name:`labelContent`})}),f(`div`,{class:`ui5-form-item-content`,part:`content`,children:this.content.map(e=>f(`div`,{class:`ui5-form-item-content-child`,children:f(`slot`,{name:e._individualSlot})}))})]})}function fe(){return s(m,{children:[f(`dt`,{class:`ui5-form-item-label`,part:`label`,children:f(`slot`,{name:`labelContent`})}),f(`dd`,{class:`ui5-form-item-content`,part:`content`,children:this.content.map(e=>f(`div`,{class:`ui5-form-item-content-child`,children:f(`slot`,{name:e._individualSlot})}))})]})}function q(){return(q=e((()=>{ee()})))()}var J;function Y(){return(Y=e((()=>{t(),r(),w(),n(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>u),n(`@ui5/webcomponents`,`sap_horizon`,async()=>C,`host`),J=`:host(:not([hidden])){display:block;width:100%}:host{break-inside:avoid}.ui5-form-item-root{background-color:inherit;color:inherit}.ui5-form-item-layout{display:grid;grid-template-columns:var(--ui5-form-item-layout, 4fr 8fr 0fr);align-items:center}.ui5-form-item-label{padding:var(--ui5-form-item-label-padding, .125rem 0);padding-inline-end:.85rem;justify-self:var(--ui5-form-item-label-justify, end)}::slotted([slot="labelContent"]){text-align:var(--ui5-form-item-label-text-align, right)}.ui5-form-item-content{overflow:hidden;width:100%;display:flex;padding:0 .25rem}.ui5-form-item-content-child{padding-inline-end:.5rem;box-sizing:border-box;width:100%}:host([item-spacing="Large"]) .ui5-form-item-layout{min-height:var(--_ui5_form_item_min_height);padding-top:var(--_ui5_form_item_padding);padding-bottom:var(--_ui5_form_item_padding);box-sizing:border-box}::slotted(*){width:100%}dd{padding:0;margin:0;border:0 transparent}
`})))()}var X,Z;function pe(){return(pe=e((()=>{l(),c(),a(),p(),T(),q(),Y(),X=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Z=class extends d{constructor(){super(...arguments),this.itemSpacing=`Normal`,this.accessibleMode=`Display`}get isGroup(){return!1}},X([h({type:Number})],Z.prototype,`columnSpan`,void 0),X([E()],Z.prototype,`labelContent`,void 0),X([E({type:HTMLElement,default:!0,individualSlots:!0})],Z.prototype,`content`,void 0),X([h()],Z.prototype,`itemSpacing`,void 0),X([h()],Z.prototype,`accessibleMode`,void 0),Z=X([o({tag:`ui5-form-item`,renderer:i,styles:J,template:ue})],Z),Z.define()})))()}var Q;function $(){return($=e((()=>{pe(),_(),Q=g(`ui5-form-item`,[`columnSpan`],[],[`labelContent`],[]),Q.displayName=`FormItem`;try{Q.displayName=`FormItem`,Q.__docgenInfo={description:`The FormItem (ui5-form-item) represents pair of a label and
one or more components (text or text fields), associated to it.

### Usage

The FormItem is being used in FormGroup (ui5-form-group) or directly in Form (ui5-form).

### ES6 Module Import

- import`,displayName:`FormItem`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/FormItem/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/FormItem/index.d.ts`,name:`FormItemPropTypes`}],description:"Defines the content of the component,\nassociated to `labelContent`.\n\n__Supported Node Type/s:__ `Array<HTMLElement>`",name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/FormItem/index.d.ts`,name:`FormItemPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},labelContent:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/FormItem/index.d.ts`,name:`FormItemPropTypes`}],description:`Defines the label of the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="labelContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`labelContent`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/FormItem/index.d.ts`,name:`FormItemPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},columnSpan:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/FormItem/index.d.ts`,name:`FormItemAttributes`}],description:`Defines the column span of the component,
e.g how many columns the component should span to.

**Note:** The column span should be a number between 1 and the available columns of the FormGroup (when items are placed in a group)
or the Form. The available columns can be affected by the FormGroup#columnSpan and/or the Form#layout.
A number bigger than the available columns won't take effect.`,name:`columnSpan`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/FormItem/index.d.ts`,name:`FormItemAttributes`},required:!1,tags:{default:`undefined`,deprecated:`As of version 2.23.0, this property is deprecated.
*Note:** This property will not have any effect on the layout of the form item`},type:{name:`number`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{ui5:`/webcomponents/dist/FormItem.js";

__Note:__ This is a UI5 Web Component! [FormItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/FormItem) | [Repository](https://github.com/UI5/webcomponents)`,since:`[2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.`}}}catch{}})))()}export{z as a,K as i,$ as n,B as o,G as r,Q as t};