import{M as O,C as x,j as v,a as T}from"./index-43922050.js";import{d as P,T as m,a as r,b as c,c as l,e as M}from"./index-28907f70.js";import{L as n}from"./index-b2c1542f.js";import{_ as U}from"./iframe-ea3a93fd.js";import{r as k,U as I,d as A}from"./UI5Element-eb05fed8.js";import{e as z,l as R,s as F,a as H,p as y,c as V,b as $,w as j}from"./withWebComponent-e4481254.js";import{e as K,bo as q}from"./MarkedEvents-8627ed01.js";import X from"./CheckBox-9723ff68.js";import{A as W}from"./DomRefTable.module-f90a1284.js";import{D as Y}from"./DocsHeader-5b523b99.js";import{F as J}from"./Footer-cb200abc.js";import{a as t,F as u,j as e}from"./jsx-runtime-670450c2.js";import{r as G}from"./index-f1f749bf.js";import{S as Q}from"./SubcomponentsSection-6138f2fc.js";import{u as N}from"./index-4fb8b842.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./AriaLabelHelper-c82262ef.js";import"./ResizeHandler-a25182c3.js";import"./ItemNavigation-c55a00e7.js";import"./Keys-3acbae73.js";import"./Integer-d9976c13.js";import"./TabbableElements-297bf359.js";import"./FocusableElements-44b79fcc.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-a479e128.js";import"./Label-6255dce9.js";import"./Device-208919c6.js";import"./WrappingType-b81e595a.js";import"./class-map-5d8e4b2b.js";import"./utils-ed90fb1b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./Button-8cfaf72a.js";import"./Icons-8637bdfe.js";import"./style-map-77d201d2.js";import"../sb-preview/runtime.mjs";import"./ValueState-2c5e5904.js";import"./accept-c855adf5.js";import"./chunk-G4YQS2SV-a125d30f.js";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-fe4dc3ff.js";import"./index-4f072a6d.js";import"./decline-0a22f866.js";import"./index-1d945bd3.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-95e3d886.js";import"./TableOfContent-7b57719c.js";import"./index-f57edce5.js";import"./Footer.module-c4f3b823.js";import"./index-d9205786.js";import"./Popover-3083ea67.js";import"./PopupsCommon.css-f9f23bc7.js";import"./MediaRange-25b98f31.js";const Z=(i,s,d)=>z`<tr class="ui5-table-group-row-root" part="group-row" aria-label=${R(i.ariaLabelText)} tabindex="${R(i._tabIndex)}" @focusin="${i._onfocusin}"><td colspan=${R(i.colSpan)}><slot></slot></td></tr>`;k("@ui5/webcomponents-theming","sap_fiori_3",async()=>F);k("@ui5/webcomponents","sap_fiori_3",async()=>H);const ee={packageName:"@ui5/webcomponents",fileName:"themes/TableGroupRow.css.ts",content:':host{display:contents}:host([_busy]) .ui5-table-group-row-root{opacity:.72;pointer-events:none}.ui5-table-group-row-root{height:var(--ui5_table_group_row_height);border-style:solid;border-color:var(--sapList_TableGroupHeaderBorderColor);border-width:var(--ui5_table_border_width);background-color:var(--sapList_TableGroupHeaderBackground);color:var(--sapList_TableGroupHeaderTextColor);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:var(--ui5_table_group_row_font-weight)}.ui5-table-group-row-root:focus{outline:var(--ui5_table_row_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:var(--ui5_table_focus_outline_offset)}td{word-break:break-word;vertical-align:middle;padding:.5rem .25rem .5rem 1rem;text-align:start}'};var w=globalThis&&globalThis.__decorate||function(i,s,d,o){var a=arguments.length,h=a<3?s:o===null?o=Object.getOwnPropertyDescriptor(s,d):o,b;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")h=Reflect.decorate(i,s,d,o);else for(var f=i.length-1;f>=0;f--)(b=i[f])&&(h=(a<3?b(h):a>3?b(s,d,h):b(s,d))||h);return a>3&&h&&Object.defineProperty(s,d,h),h},S;let p=S=class extends I{constructor(){super(...arguments),this.selected=!1,this._tabbables=[],this._columnsInfoString=""}get colSpan(){return this._colSpan}get ariaLabelText(){return`${S.i18nBundle.getText(q)} ${this.innerText}. ${this._ariaPosition}`}visibleColCount(){let s=this._columnsInfo.reduce((d,o)=>o.visible?++d:d,0);return this.mode===P.MultiSelect&&s++,s}onBeforeRendering(){!this._columnsInfo||this._columnsInfo.length===0||(this._colSpan=this.visibleColCount())}_onfocusin(s){this.fireEvent("_focused",s)}static async onDefine(){S.i18nBundle=await A("@ui5/webcomponents")}};w([y({type:P,defaultValue:P.None})],p.prototype,"mode",void 0);w([y({type:Object,multiple:!0})],p.prototype,"_columnsInfo",void 0);w([y({defaultValue:"-1"})],p.prototype,"_tabIndex",void 0);w([y({type:Boolean})],p.prototype,"_busy",void 0);w([y({defaultValue:"",noAttribute:!0})],p.prototype,"_ariaPosition",void 0);p=S=w([V({tag:"ui5-table-group-row",styles:ee,renderer:$,template:Z,dependencies:[X]}),K("_focused")],p);p.define();const ne=p,le=Object.freeze(Object.defineProperty({__proto__:null,default:ne},Symbol.toStringTag,{value:"Module"})),C=j("ui5-table-group-row",[],[],[],[],()=>U(()=>Promise.resolve().then(()=>le),void 0,import.meta.url));C.displayName="TableGroupRow";try{C.displayName="TableGroupRow",C.__docgenInfo={description:'The `TableGroupRow` component represents a group row in the `Table`.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Table" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"TableGroupRow",props:{children:{defaultValue:null,description:`Defines the text of the component.
**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const oe='## Selection\n\nTo benefit from the selection mechanism of `Table` component, you can use the available selection modes: `SingleSelect` and `MultiSelect`.  \nIn additition to the used mode, you can also specify the `Table-row` type choosing between `Active` or `Inactive`.  \n  \nIn `SingleSelect` mode, you can select both an `Active` and `Inactive` row via mouse or by pressing the `Space` or `Enter` keys.  \nIn `MultiSelect` mode, you can select both an `Active` and `Inactive` row by pressing the `Space` key when a row is on focus or via mouse click over the selection checkbox of the row. In order to select all the available rows at once, you can use the selection checkbox presented in the table\'s header.  \n  \n**Note:** Currently, when a column is shown as a pop-in, the visual indication for selection is not presented over it.\n\n## Keyboard Handling\n\n### Fast Navigation\n\nThis component provides a build in fast navigation group which can be used via `F6 / Shift + F6` or `Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up`. In order to use this functionality, you need to import the following module: `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`  \n  \nFurthermore, you can interact with `Table` via the following keys.  \n\n*   \\[F7\\] - If focus is on an interactive control inside an item, moves focus to the corresponding item.\n*   \\[CTRL\\]+\\[A\\] - Selects all items, if MultiSelect mode is enabled.\n*   \\[HOME\\]/\\[END\\] - Focuses the first/last item.\n*   \\[PAGEUP\\]/\\[PAGEDOWN\\] - Moves focus up/down by page size (20 items by default).\n*   \\[ALT\\]+\\[DOWN\\]/\\[UP\\] - Switches focus between header, last focused item, and More button (if applies) in either direction.\n*   \\[SHIFT\\]+\\[DOWN\\]/\\[UP\\] - Selects the next/previous item in a MultiSelect table, if the current item is selected (Range selection). Otherwise, deselects them (Range deselection).\n*   \\[SHIFT\\]+\\[HOME\\]/\\[END\\] - Range selection to the first/last item of the List.\n*   \\[CTRL\\]+\\[HOME\\]/\\[END\\] - Same behavior as HOME & END.',te='The `TableColumn` component allows to define column specific properties that are applied when rendering the `Table` component.\n### CSS Shadow Parts\n\n<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  \nThe `TableColumn` exposes the following CSS Shadow Parts:\n\n*   column - Used to style the native `th` element',ie='The `TableRow` component represents a row in the `Table`.\n### CSS Shadow Parts\n\n<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  \nThe `TableRow` exposes the following CSS Shadow Parts:\n\n*   row - Used to style the native `tr` element\n*   popin-row - Used to style the `tr` element when a row pops in',re='The `TableGroupRow` component represents a group row in the `Table`.\n### CSS Shadow Parts\n\n<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  \nThe `TableGroupRow` exposes the following CSS Shadow Parts:\n\n*   group-row - Used to style the native `tr` element.',ae='The `TableCell` component defines the structure of the data in a single `Table` cell.\n### CSS Shadow Parts\n\n<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  \nThe `TableCell` exposes the following CSS Shadow Parts:\n\n*   cell - Used to style the native `td` element';function se(i={}){const{wrapper:s}=Object.assign({},N(),i.components);return s?e(s,{...i,children:e(d,{})}):d();function d(){const o=Object.assign({h2:"h2",h1:"h1",p:"p",code:"code",ul:"ul",li:"li",strong:"strong",br:"br",div:"div",h3:"h3",pre:"pre"},N(),i.components);return t(u,{children:[e(O,{title:"Data Display / Table",component:m,subcomponents:{TableColumn:r,TableRow:c,TableCell:l,TableGroupRow:C},argTypes:{columns:{control:{disable:!0}},children:{control:{disable:!0}}}}),`
`,e(Y,{}),`
`,e("br",{}),`
`,e(o.h2,{children:"Example"}),`
`,e(x,{children:e(v,{name:"Default",children:a=>t(m,{...a,columns:t(u,{children:[e(r,{style:{width:"12rem"},children:e(n,{children:"Product"})}),e(r,{minWidth:800,popinText:"Supplier",children:e(n,{children:"Supplier"})}),e(r,{minWidth:600,popinText:"Dimensions",demandPopin:!0,children:e(n,{children:"Dimensions"})}),e(r,{minWidth:600,popinText:"Weight",demandPopin:!0,children:e(n,{children:"Weight"})}),e(r,{children:e(n,{children:"Price"})})]}),children:[t(c,{children:[e(l,{children:e(n,{children:"Notebook Basic"})}),e(l,{children:e(n,{children:"Very Best Screens"})}),e(l,{children:e(n,{children:"30 x 18 x 3cm"})}),e(l,{children:e(n,{children:"4.2KG"})}),e(l,{children:e(n,{children:"956EUR"})})]}),t(c,{children:[e(l,{children:e(n,{children:"Notebook Basic 17HT-1001"})}),e(l,{children:e(n,{children:"Very Best Screens"})}),e(l,{children:e(n,{children:"29 x 17 x 3.1cm"})}),e(l,{children:e(n,{children:"4.5KG"})}),e(l,{children:e(n,{children:"1249EUR"})})]})]})})}),`
`,e(o.h2,{children:"Properties"}),`
`,e(W,{story:"Default"}),`
`,e(T,{children:oe}),`
`,e("br",{}),`
`,e(o.h1,{children:"More Examples"}),`
`,e("br",{}),`
`,e(o.h2,{children:"Table with customizable TableColumn"}),`
`,t(o.p,{children:["The ",e(o.code,{children:"TableColumn"})," component allows defining column specific properties that are applied when rendering the ",e(o.code,{children:"Table"})," component. ",e("br",{})]}),`
`,t(o.ul,{children:[`
`,t(o.li,{children:["The ",e(o.code,{children:"CustomizableTableColumn"})," column will pop-in at ",e(o.code,{children:"1024px"})," (you can change the value in the table below)"]}),`
`,t(o.li,{children:["The ",e(o.code,{children:"Supplier"})," column will pop-in at ",e(o.code,{children:"800px"})]}),`
`,t(o.li,{children:["The ",e(o.code,{children:"Will not pop-in"})," column will never pop-in."]}),`
`]}),`
`,t(o.p,{children:[e(o.strong,{children:"Note:"})," You can change the size of the ",e(o.code,{children:"Table"})," by dragging the slider of ",e(o.code,{children:"customWidth"})," in the table below."]}),`
`,e(x,{children:e(v,{name:"with customizable TableColumn",args:{customWidth:1280,demandPopin:!0,minWidth:1024,popinText:"POP-IN: Customizable TableColumn",children:"Customizable TableColumn"},argTypes:{customWidth:{description:"Change the size of the <code>Table</code>.<br />__Note:__ This is a demo property, it is not supported by the <code>Table</code>!",control:{type:"range",min:200,max:2560,step:10}},demandPopin:{description:"According to your <code>minWidth</code> settings, the <code>TableColumn</code> can be hidden in different screen sizes. <br><br> Setting this property to <code>true</code>, shows this column as pop-in instead of hiding it."},minWidth:{description:"Defines the minimum table width required to display this column. By default it is always displayed. <br><br> The responsive behavior of the <code>Table</code> is determined by this property. As an example, by setting <code>minWidth</code> property to <code>40em</code> shows this column on tablet (and desktop) but hides it on mobile. <br> For further responsive design options, see <code>demandPopin</code> property."},popinText:{description:"The text for the column when it pops in."},children:{description:"Defines the content of the column header.",control:{disable:!1}},noDataText:{table:{disable:!0}},hideNoData:{table:{disable:!0}},stickyColumnHeader:{table:{disable:!0}},columns:{table:{disable:!0}},onPopinChange:{table:{disable:!0}},accessibleName:{table:{disable:!0}},accessibleNameRef:{table:{disable:!0}},busy:{table:{disable:!0}},busyDelay:{table:{disable:!0}},growing:{table:{disable:!0}},growingButtonSubtext:{table:{disable:!0}},growingButtonText:{table:{disable:!0}},mode:{table:{disable:!0}},onLoadMore:{table:{disable:!0}},onSelectionChange:{table:{disable:!0}}},children:a=>t(m,{style:{width:`${a.customWidth}px`},columns:t(u,{children:[e(r,{...a}),e(r,{minWidth:800,popinText:"Supplier",children:e(n,{children:"Supplier"})}),e(r,{children:e(n,{children:"Will not pop-in"})})]}),children:[t(c,{children:[e(l,{children:e(n,{children:"Table Cell"})}),e(l,{children:e(n,{children:"Very Best Screens"})}),e(l,{children:e(n,{children:"30 x 18 x 3cm"})}),e(l,{children:e(n,{children:"4.2KG"})}),e(l,{children:e(n,{children:"956EUR"})})]}),t(c,{children:[e(l,{children:e(n,{children:"Notebook Basic 17HT-1001"})}),e(l,{children:e(n,{children:"Very Best Screens"})}),e(l,{children:e(n,{children:"29 x 17 x 3.1cm"})}),e(l,{children:e(n,{children:"4.5KG"})}),e(l,{children:e(n,{children:"1249EUR"})})]})]})})}),`
`,e(W,{story:"with customizable TableColumn",noteText:t(u,{children:['The props in the table below are part of the "TableColumn" component.',e(o.br,{}),"This component supports all HTML attributes."]})}),`
`,e(o.h2,{children:"Growing Table"}),`
`,t(o.p,{children:[e(o.code,{children:"Table"})," with ",e(o.code,{children:"growing={TableGrowingMode.Scroll}"}),"."]}),`
`,e(x,{children:e(v,{name:"growing Table",children:()=>{const a=g=>new Array(25).fill("").map((de,D)=>t(c,{children:[e(l,{children:e(n,{children:D+g})}),e(l,{children:e(n,{children:"Placeholder"})})]},`${D+g}-row`)),[h,b]=G.useState(a(1)),f=()=>{b(g=>[...g,...a(g.length+1)])};return e(o.div,{style:{height:"250px",overflow:"auto"},children:e(m,{onLoadMore:f,growing:M.Scroll,columns:t(u,{children:[e(r,{children:e(n,{children:"Column 1"})}),e(r,{children:e(n,{children:"Column 2"})})]}),children:h})})}})}),`
`,e(o.h3,{children:"Code"}),`
`,e(o.pre,{children:e(o.code,{className:"language-jsx",children:`const createRows = (indexOffset) => {
  return new Array(25).fill('').map((_, index) => (
    <TableRow key={\`\${index + indexOffset} - row\`}>
      <TableCell>
        <Label>{index + indexOffset}</Label>
      </TableCell>
      <TableCell>
        <Label>Placeholder</Label>
      </TableCell>
    </TableRow>
  ));
};

const GrowingTable = () => {
  const [rows, setRows] = useState(createRows(1));
  const onLoadMore = () => {
    setRows((prev) => [...prev, ...createRows(prev.length + 1)]);
  };
  return (
    <div style={{ height: '250px', overflow: 'auto' }}>
      <Table
        onLoadMore={onLoadMore}
        growing={TableGrowingMode.Scroll}
        columns={
          <>
            <TableColumn>
              <Label>Column 1</Label>
            </TableColumn>
            <TableColumn>
              <Label>Column 2</Label>
            </TableColumn>
          </>
        }
      >
        {rows}
      </Table>
    </div>
  );
};
`})}),`
`,e(T,{children:Q}),`
`,e(o.h2,{children:"TableColumn"}),`
`,e(T,{children:te}),`
`,e(o.h2,{children:"TableRow"}),`
`,e(T,{children:ie}),`
`,e(o.h2,{children:"TableGroupRow"}),`
`,e(T,{children:re}),`
`,e(o.h2,{children:"TableCell"}),`
`,e(T,{children:ae}),`
`,e(J,{})]})}}const B=i=>t(m,{...i,columns:t(u,{children:[e(r,{style:{width:"12rem"},children:e(n,{children:"Product"})}),e(r,{minWidth:800,popinText:"Supplier",children:e(n,{children:"Supplier"})}),e(r,{minWidth:600,popinText:"Dimensions",demandPopin:!0,children:e(n,{children:"Dimensions"})}),e(r,{minWidth:600,popinText:"Weight",demandPopin:!0,children:e(n,{children:"Weight"})}),e(r,{children:e(n,{children:"Price"})})]}),children:[t(c,{children:[e(l,{children:e(n,{children:"Notebook Basic"})}),e(l,{children:e(n,{children:"Very Best Screens"})}),e(l,{children:e(n,{children:"30 x 18 x 3cm"})}),e(l,{children:e(n,{children:"4.2KG"})}),e(l,{children:e(n,{children:"956EUR"})})]}),t(c,{children:[e(l,{children:e(n,{children:"Notebook Basic 17HT-1001"})}),e(l,{children:e(n,{children:"Very Best Screens"})}),e(l,{children:e(n,{children:"29 x 17 x 3.1cm"})}),e(l,{children:e(n,{children:"4.5KG"})}),e(l,{children:e(n,{children:"1249EUR"})})]})]});B.storyName="Default";B.parameters={storySource:{source:`args => {
  return <Table {...args} columns={<>
              <TableColumn style={{
      width: "12rem"
    }}>
                <Label>Product</Label>
              </TableColumn>
              <TableColumn minWidth={800} popinText="Supplier">
                <Label>Supplier</Label>
              </TableColumn>
              <TableColumn minWidth={600} popinText="Dimensions" demandPopin>
                <Label>Dimensions</Label>
              </TableColumn>
              <TableColumn minWidth={600} popinText="Weight" demandPopin>
                <Label>Weight</Label>
              </TableColumn>
              <TableColumn>
                <Label>Price</Label>
              </TableColumn>
            </>}>
          <TableRow>
            <TableCell>
              <Label>Notebook Basic</Label>
            </TableCell>
            <TableCell>
              <Label>Very Best Screens</Label>
            </TableCell>
            <TableCell>
              <Label>30 x 18 x 3cm</Label>
            </TableCell>
            <TableCell>
              <Label>4.2KG</Label>
            </TableCell>
            <TableCell>
              <Label>956EUR</Label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Label>Notebook Basic 17HT-1001</Label>
            </TableCell>
            <TableCell>
              <Label>Very Best Screens</Label>
            </TableCell>
            <TableCell>
              <Label>29 x 17 x 3.1cm</Label>
            </TableCell>
            <TableCell>
              <Label>4.5KG</Label>
            </TableCell>
            <TableCell>
              <Label>1249EUR</Label>
            </TableCell>
          </TableRow>
        </Table>;
}`}};const L=i=>t(m,{style:{width:`${i.customWidth}px`},columns:t(u,{children:[e(r,{...i}),e(r,{minWidth:800,popinText:"Supplier",children:e(n,{children:"Supplier"})}),e(r,{children:e(n,{children:"Will not pop-in"})})]}),children:[t(c,{children:[e(l,{children:e(n,{children:"Table Cell"})}),e(l,{children:e(n,{children:"Very Best Screens"})}),e(l,{children:e(n,{children:"30 x 18 x 3cm"})}),e(l,{children:e(n,{children:"4.2KG"})}),e(l,{children:e(n,{children:"956EUR"})})]}),t(c,{children:[e(l,{children:e(n,{children:"Notebook Basic 17HT-1001"})}),e(l,{children:e(n,{children:"Very Best Screens"})}),e(l,{children:e(n,{children:"29 x 17 x 3.1cm"})}),e(l,{children:e(n,{children:"4.5KG"})}),e(l,{children:e(n,{children:"1249EUR"})})]})]});L.storyName="with customizable TableColumn";L.argTypes={customWidth:{description:"Change the size of the <code>Table</code>.<br />__Note:__ This is a demo property, it is not supported by the <code>Table</code>!",control:{type:"range",min:200,max:2560,step:10}},demandPopin:{description:"According to your <code>minWidth</code> settings, the <code>TableColumn</code> can be hidden in different screen sizes. <br><br> Setting this property to <code>true</code>, shows this column as pop-in instead of hiding it."},minWidth:{description:"Defines the minimum table width required to display this column. By default it is always displayed. <br><br> The responsive behavior of the <code>Table</code> is determined by this property. As an example, by setting <code>minWidth</code> property to <code>40em</code> shows this column on tablet (and desktop) but hides it on mobile. <br> For further responsive design options, see <code>demandPopin</code> property."},popinText:{description:"The text for the column when it pops in."},children:{description:"Defines the content of the column header.",control:{disable:!1}},noDataText:{table:{disable:!0}},hideNoData:{table:{disable:!0}},stickyColumnHeader:{table:{disable:!0}},columns:{table:{disable:!0}},onPopinChange:{table:{disable:!0}},accessibleName:{table:{disable:!0}},accessibleNameRef:{table:{disable:!0}},busy:{table:{disable:!0}},busyDelay:{table:{disable:!0}},growing:{table:{disable:!0}},growingButtonSubtext:{table:{disable:!0}},growingButtonText:{table:{disable:!0}},mode:{table:{disable:!0}},onLoadMore:{table:{disable:!0}},onSelectionChange:{table:{disable:!0}}};L.args={customWidth:1280,demandPopin:!0,minWidth:1024,popinText:"POP-IN: Customizable TableColumn",children:"Customizable TableColumn"};L.parameters={storySource:{source:`args => {
  return <Table style={{
    width: \`\${args.customWidth}px\`
  }} columns={<>
              <TableColumn {...args} />
              <TableColumn minWidth={800} popinText="Supplier">
                <Label>Supplier</Label>
              </TableColumn>
              <TableColumn>
                <Label>Will not pop-in</Label>
              </TableColumn>
            </>}>
          <TableRow>
            <TableCell>
              <Label>Table Cell</Label>
            </TableCell>
            <TableCell>
              <Label>Very Best Screens</Label>
            </TableCell>
            <TableCell>
              <Label>30 x 18 x 3cm</Label>
            </TableCell>
            <TableCell>
              <Label>4.2KG</Label>
            </TableCell>
            <TableCell>
              <Label>956EUR</Label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Label>Notebook Basic 17HT-1001</Label>
            </TableCell>
            <TableCell>
              <Label>Very Best Screens</Label>
            </TableCell>
            <TableCell>
              <Label>29 x 17 x 3.1cm</Label>
            </TableCell>
            <TableCell>
              <Label>4.5KG</Label>
            </TableCell>
            <TableCell>
              <Label>1249EUR</Label>
            </TableCell>
          </TableRow>
        </Table>;
}`}};const E=()=>{const i=a=>new Array(25).fill("").map((h,b)=>t(c,{children:[e(l,{children:e(n,{children:b+a})}),e(l,{children:e(n,{children:"Placeholder"})})]},`${b+a}-row`)),[s,d]=G.useState(i(1));return e("div",{style:{height:"250px",overflow:"auto"},children:e(m,{onLoadMore:()=>{d(a=>[...a,...i(a.length+1)])},growing:M.Scroll,columns:t(u,{children:[e(r,{children:e(n,{children:"Column 1"})}),e(r,{children:e(n,{children:"Column 2"})})]}),children:s})})};E.storyName="growing Table";E.parameters={storySource:{source:`() => {
  const createRows = indexOffset => {
    return new Array(25).fill("").map((_, index) => <TableRow key={\`\${index + indexOffset}-row\`}>
            <TableCell>
              <Label>{index + indexOffset}</Label>
            </TableCell>
            <TableCell>
              <Label>Placeholder</Label>
            </TableCell>
          </TableRow>);
  };

  const [rows, setRows] = useState(createRows(1));

  const onLoadMore = () => {
    setRows(prev => [...prev, ...createRows(prev.length + 1)]);
  };

  return <div style={{
    height: "250px",
    overflow: "auto"
  }}>
          <Table onLoadMore={onLoadMore} growing={TableGrowingMode.Scroll} columns={<>
                <TableColumn>
                  <Label>Column 1</Label>
                </TableColumn>
                <TableColumn>
                  <Label>Column 2</Label>
                </TableColumn>
              </>}>
            {rows}
          </Table>
        </div>;
}`}};const _={title:"Data Display / Table",component:m,subcomponents:{TableColumn:r,TableRow:c,TableCell:l,TableGroupRow:C},argTypes:{columns:{control:{disable:!0}},children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withCustomizableTableColumn","growingTable"]};_.parameters=_.parameters||{};_.parameters.docs={..._.parameters.docs||{},page:se};const Ln=["defaultStory","withCustomizableTableColumn","growingTable"];export{Ln as __namedExportsOrder,_ as default,B as defaultStory,E as growingTable,L as withCustomizableTableColumn};
//# sourceMappingURL=Table.stories-5b4097e8.js.map
