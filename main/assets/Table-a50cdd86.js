import{j as e,a as g,F as v}from"./jsx-runtime-670450c2.js";import{C}from"./DomRefTable.module-115bc347.js";import{D as R}from"./DocsHeader-fa95f18b.js";import{F as D}from"./Footer-3963aafe.js";import"./index-f1f749bf.js";import{M as x,C as S,a as l,b as d}from"./chunk-PCJTTTQV-af2f80a4.js";import{S as M}from"./SubcomponentsSection-6138f2fc.js";import{d as w,a as P,b as O,c as k}from"./index-265ad2a5.js";import{_ as G}from"./iframe-d28ebdc1.js";import{a as y,U as L,d as N}from"./UI5Element-427ec721.js";import{e as I,l as f,a as E,b as F,p,c as U,d as A,w as j}from"./withWebComponent-65cd39a0.js";import{e as H}from"./Icon-7987c836.js";import $ from"./CheckBox-80dd6e5f.js";import{bl as W}from"./i18n-defaults-254d6b69.js";import{C as B,D as T,G as z}from"./Table.stories-3fe8463b.js";import{u as _}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-5e3a4a7b.js";import"./slot-634e3e91.js";import"./decline-6bd98a2e.js";import"./Icons-fe6e657a.js";import"./i18n-defaults-80781f7e.js";import"./information-b6c8ed8e.js";import"./class-map-95320e87.js";import"./utils-ed90fb1b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./Button-bc3a11a1.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-b4aa831c.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-e281ad9a.js";import"./TableOfContent-6ea926fa.js";import"./index-a04712d7.js";import"./Link-018547e8.js";import"./WrappingType-b81e595a.js";import"./index-22a3c47f.js";import"./Label-ccc234fe.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./index-96c5f47c.js";import"./index-1def2e01.js";import"./Popover-224d761a.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-9873a291.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-1da6d0d2.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-cae0a379.js";import"./react-18-ecd79c7b.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./ItemNavigation-8e291cfa.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-15ff681f.js";import"../sb-preview/runtime.mjs";import"./ValueState-2c5e5904.js";import"./accept-d8c33d70.js";const V=(n,t,r)=>I`<tr class="ui5-table-group-row-root" part="group-row" aria-label=${f(n.ariaLabelText)} tabindex="${f(n._tabIndex)}" @focusin="${n._onfocusin}"><td colspan=${f(n.colSpan)}><slot></slot></td></tr>`;y("@ui5/webcomponents-theming","sap_fiori_3",async()=>E);y("@ui5/webcomponents","sap_fiori_3",async()=>F);const q={packageName:"@ui5/webcomponents",fileName:"themes/TableGroupRow.css.ts",content:':host{display:contents}:host([_busy]) .ui5-table-group-row-root{opacity:.72;pointer-events:none}.ui5-table-group-row-root{height:var(--ui5_table_group_row_height);border-style:solid;border-color:var(--sapList_TableGroupHeaderBorderColor);border-width:var(--ui5_table_border_width);background-color:var(--sapList_TableGroupHeaderBackground);color:var(--sapList_TableGroupHeaderTextColor);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:var(--ui5_table_group_row_font-weight)}.ui5-table-group-row-root:focus{outline:var(--ui5_table_row_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:var(--ui5_table_focus_outline_offset)}td{word-break:break-word;vertical-align:middle;padding:.5rem .25rem .5rem 1rem;text-align:start}'};var s=globalThis&&globalThis.__decorate||function(n,t,r,o){var c=arguments.length,a=c<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(n,t,r,o);else for(var b=n.length-1;b>=0;b--)(m=n[b])&&(a=(c<3?m(a):c>3?m(t,r,a):m(t,r))||a);return c>3&&a&&Object.defineProperty(t,r,a),a},u;let i=u=class extends L{constructor(){super(...arguments),this.selected=!1,this._tabbables=[],this._columnsInfoString=""}get colSpan(){return this._colSpan}get ariaLabelText(){return`${u.i18nBundle.getText(W)} ${this.innerText}. ${this._ariaPosition}`}visibleColCount(){let t=this._columnsInfo.reduce((r,o)=>o.visible?++r:r,0);return this.mode===w.MultiSelect&&t++,t}onBeforeRendering(){!this._columnsInfo||this._columnsInfo.length===0||(this._colSpan=this.visibleColCount())}_onfocusin(t){this.fireEvent("_focused",t)}static async onDefine(){u.i18nBundle=await N("@ui5/webcomponents")}};s([p({type:w,defaultValue:w.None})],i.prototype,"mode",void 0);s([p({type:Object,multiple:!0})],i.prototype,"_columnsInfo",void 0);s([p({defaultValue:"-1"})],i.prototype,"_tabIndex",void 0);s([p({type:Boolean})],i.prototype,"_busy",void 0);s([p({defaultValue:"",noAttribute:!0})],i.prototype,"_ariaPosition",void 0);i=u=s([U({tag:"ui5-table-group-row",styles:q,renderer:A,template:V,dependencies:[$]}),H("_focused")],i);i.define();const X=i,K=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"})),h=j("ui5-table-group-row",[],[],[],[],()=>G(()=>Promise.resolve().then(()=>K),void 0,import.meta.url));h.displayName="TableGroupRow";try{h.displayName="TableGroupRow",h.__docgenInfo={description:'The `TableGroupRow` component represents a group row in the `Table`.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Table" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"TableGroupRow",props:{children:{defaultValue:null,description:`Defines the text of the component.
**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const J='The `TableCell` component defines the structure of the data in a single `Table` cell.\n### CSS Shadow Parts\n\n<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  \nThe `TableCell` exposes the following CSS Shadow Parts:\n\n*   cell - Used to style the native `td` element',Q='The `TableColumn` component allows to define column specific properties that are applied when rendering the `Table` component.\n### CSS Shadow Parts\n\n<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  \nThe `TableColumn` exposes the following CSS Shadow Parts:\n\n*   column - Used to style the native `th` element',Y=`**Since:** 0.18.0

The \`TableGroupRow\` component represents a group row in the \`Table\`.

### CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`TableGroupRow\` exposes the following CSS Shadow Parts:

- group-row - Used to style the native \`tr\` element.
`,Z='The `TableRow` component represents a row in the `Table`.\n### CSS Shadow Parts\n\n<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  \nThe `TableRow` exposes the following CSS Shadow Parts:\n\n*   row - Used to style the native `tr` element\n*   popin-row - Used to style the `tr` element when a row pops in',ee='## Selection\n\nTo benefit from the selection mechanism of `Table` component, you can use the available selection modes: `SingleSelect` and `MultiSelect`.  \nIn additition to the used mode, you can also specify the `Table-row` type choosing between `Active` or `Inactive`.  \n  \nIn `SingleSelect` mode, you can select both an `Active` and `Inactive` row via mouse or by pressing the `Space` or `Enter` keys.  \nIn `MultiSelect` mode, you can select both an `Active` and `Inactive` row by pressing the `Space` key when a row is on focus or via mouse click over the selection checkbox of the row. In order to select all the available rows at once, you can use the selection checkbox presented in the table\'s header.  \n  \n**Note:** Currently, when a column is shown as a pop-in, the visual indication for selection is not presented over it.\n\n## Keyboard Handling\n\n### Fast Navigation\n\nThis component provides a build in fast navigation group which can be used via `F6 / Shift + F6` or `Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up`. In order to use this functionality, you need to import the following module: `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`  \n  \nFurthermore, you can interact with `Table` via the following keys.  \n\n*   \\[F7\\] - If focus is on an interactive control inside an item, moves focus to the corresponding item.\n*   \\[CTRL\\]+\\[A\\] - Selects all items, if MultiSelect mode is enabled.\n*   \\[HOME\\]/\\[END\\] - Focuses the first/last item.\n*   \\[PAGEUP\\]/\\[PAGEDOWN\\] - Moves focus up/down by page size (20 items by default).\n*   \\[ALT\\]+\\[DOWN\\]/\\[UP\\] - Switches focus between header, last focused item, and More button (if applies) in either direction.\n*   \\[SHIFT\\]+\\[DOWN\\]/\\[UP\\] - Selects the next/previous item in a MultiSelect table, if the current item is selected (Range selection). Otherwise, deselects them (Range deselection).\n*   \\[SHIFT\\]+\\[HOME\\]/\\[END\\] - Range selection to the first/last item of the List.\n*   \\[CTRL\\]+\\[HOME\\]/\\[END\\] - Same behavior as HOME & END.';function yo(n={}){const{wrapper:t}=Object.assign({},_(),n.components);return t?e(t,Object.assign({},n,{children:e(r,{})})):r();function r(){const o=Object.assign({h2:"h2",h1:"h1",p:"p",code:"code",h3:"h3",pre:"pre"},_(),n.components);return g(v,{children:[e(x,{of:B}),`
`,e(R,{}),`
`,e("br",{}),`
`,e(o.h2,{children:"Example"}),`
`,e(S,{of:T}),`
`,e(o.h2,{children:"Properties"}),`
`,e(C,{of:T}),`
`,e(l,{children:ee}),`
`,e("br",{}),`
`,e(o.h1,{children:"More Examples"}),`
`,e("br",{}),`
`,e(o.h2,{children:"Growing Table"}),`
`,g(o.p,{children:[e(o.code,{children:"Table"})," with ",e(o.code,{children:"growing={TableGrowingMode.Scroll}"}),"."]}),`
`,e(S,{of:z}),`
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
`,e(l,{children:M}),`
`,e(o.h2,{children:"TableColumn"}),`
`,e(d,{of:P}),`
`,e(l,{children:Q}),`
`,e(o.h2,{children:"TableRow"}),`
`,e(d,{of:O}),`
`,e(l,{children:Z}),`
`,e(o.h2,{children:"TableGroupRow"}),`
`,e(d,{of:h}),`
`,e(l,{children:Y}),`
`,e(o.h2,{children:"TableCell"}),`
`,e(d,{of:k}),`
`,e(l,{children:J}),`
`,e(D,{})]})}}export{yo as default};
//# sourceMappingURL=Table-a50cdd86.js.map
