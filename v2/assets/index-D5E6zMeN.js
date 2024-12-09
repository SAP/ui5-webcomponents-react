import{O as T}from"./Keys-CAuuEE_3.js";import{t as v}from"./getActiveElement-kltGt_DR.js";import{q as _,v as A,S as N,w as C}from"./withWebComponent-D2290JWW.js";import{l as I}from"./event-strict-DgQLNDEV.js";import{i as M,a as D,f as q}from"./index-9emNdlsu.js";var m;(function(o){o.None="None",o.Single="Single",o.Multiple="Multiple"})(m||(m={}));const c=m;var b=function(o,e,t,n){var i=arguments.length,s=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,n);else for(var a=o.length-1;a>=0;a--)(l=o[a])&&(s=(i<3?l(s):i>3?l(e,t,s):l(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};let h=class extends N{constructor(){super(...arguments),this.mode="Multiple",this.selected="",this.identifier="TableSelection"}onTableActivate(e){this._table=e,this._invalidateTableAndRows()}onExitDOM(){this.mode=c.None,this._invalidateTableAndRows(),this._table=void 0}onBeforeRendering(){this._invalidateTableAndRows()}isSelectable(){return this.mode!==c.None}isMultiSelect(){return this.mode===c.Multiple}hasRowSelector(){return this.mode!==c.None}getRowIdentifier(e){return e.rowKey}isSelected(e){if(!this._table||!this.isSelectable())return!1;if(e.isHeaderRow())return this.areAllRowsSelected();const t=this.getRowIdentifier(e);return this.selectedAsArray.includes(t)}hasSelectedRow(){if(!this._table||!this.isSelectable())return!1;const e=this.selectedAsArray;return this._table.rows.some(t=>{const n=this.getRowIdentifier(t);return e.includes(n)})}areAllRowsSelected(){if(!this._table||!this._table.rows.length||this.mode!==c.Multiple)return!1;const e=this.selectedAsArray;return this._table.rows.every(t=>{const n=this.getRowIdentifier(t);return e.includes(n)})}informSelectionChange(e){var t;(t=this._rangeSelection)!=null&&t.isMouse&&this._rangeSelection.shiftPressed||(e.isHeaderRow()?this._informHeaderRowSelectionChange():this._informRowSelectionChange(e))}get selectedAsArray(){return this.selected.split(" ").filter(String)}set selectedAsArray(e){this.selected=e.filter(String).join(" ")}get selectedAsSet(){return new Set(this.selectedAsArray)}set selectedAsSet(e){this.selectedAsArray=[...e]}_selectRow(e,t){const n=this.getRowIdentifier(e);if(this.mode===c.Multiple){const i=this.selectedAsSet;i[t?"add":"delete"](n),this.selectedAsSet=i}else this.selected=t?n:""}_informRowSelectionChange(e){const t=this.isMultiSelect()?!this.isSelected(e):!0;this._selectRow(e,t),this.fireDecoratorEvent("change")}_informHeaderRowSelectionChange(){const e=this.areAllRowsSelected(),t=this.selectedAsSet;this._table.rows.forEach(n=>{const i=this.getRowIdentifier(n);t[e?"delete":"add"](i)}),this.selectedAsSet=t,this.fireDecoratorEvent("change")}_invalidateTableAndRows(){this._table&&(this.isSelectable()?this.isMultiSelect()||(this.selected=this.selectedAsArray.shift()||""):this.selected="",this._table._invalidate++,this._table.headerRow[0]._invalidate++,this._table.rows.forEach(e=>e._invalidate++))}_onkeydown(e){var n;if(!this.isMultiSelect()||!this._table||!e.shiftKey)return;const t=v();if(!(t!=null&&t.hasAttribute("ui5-table-row")||(n=this._rangeSelection)!=null&&n.isMouse||t!=null&&t.hasAttribute("ui5-growing-row"))){this._stopRangeSelection();return}if(!this._rangeSelection)this._startRangeSelection(t);else if(e.key==="ArrowUp"||e.key==="ArrowDown"){const i=T(e)?-1:1;this._handleRangeSelection(t,i)}this._rangeSelection&&(this._rangeSelection.shiftPressed=e.shiftKey)}_onkeyup(e,t){this._table&&((!t.hasAttribute("ui5-table-row")||!this._rangeSelection||!e.shiftKey)&&this._stopRangeSelection(),this._rangeSelection&&(this._rangeSelection.shiftPressed=e.shiftKey))}_onclick(e){var n,i,s;if(!this._table)return;if(M(e)){this._stopRangeSelection();return}if(!D(e)){this._stopRangeSelection();return}const t=q(e.composedPath());if(e.shiftKey&&((n=this._rangeSelection)!=null&&n.isMouse)){const l=this._rangeSelection.rows[0],a=this._table.rows.indexOf(l),d=this._table.rows.indexOf(t);if((s=(i=t.shadowRoot)==null?void 0:i.querySelector("#selection-component"))==null||s.toggleAttribute("checked",!0),a===-1||d===-1||t.rowKey===l.rowKey||t.rowKey===this._rangeSelection.rows[this._rangeSelection.rows.length-1].rowKey)return;const p=d-a;this._handleRangeSelection(t,p)}else t&&this._startRangeSelection(t,!0)}_startRangeSelection(e,t=!1){const n=this.isSelected(e);t&&!n||(this._rangeSelection={selected:n,isUp:null,rows:[e],isMouse:t,shiftPressed:!1})}_handleRangeSelection(e,t){var l,a;if(!this._rangeSelection)return;const n=t>0;(l=this._rangeSelection).isUp??(l.isUp=n);const i=n!==this._rangeSelection.isUp&&!this._rangeSelection.isMouse;let s=i&&this.isSelected(e);if(i)this._reverseRangeSelection();else{const d=this._table.rows.indexOf(e),[p,w]=[d,d-t].sort((f,r)=>f-r);s=((a=this._table)==null?void 0:a.rows.slice(p,w+1).reduce((f,r)=>{var S,g;const y=!((S=this._rangeSelection)!=null&&S.rows.includes(r)),R=this.isSelected(r)!==this._rangeSelection.selected;return y&&((g=this._rangeSelection)==null||g.rows.push(r)),this._selectRow(r,this._rangeSelection.selected),f||R},s))||!1}s&&this.fireDecoratorEvent("change")}_stopRangeSelection(){this._rangeSelection=null}_reverseRangeSelection(){var t,n;const e=(t=this._rangeSelection)==null?void 0:t.rows.pop();e&&this._selectRow(e,!1),((n=this._rangeSelection)==null?void 0:n.rows.length)===1&&(this._rangeSelection.isUp=null)}};b([_()],h.prototype,"mode",void 0);b([_()],h.prototype,"selected",void 0);h=b([A({tag:"ui5-table-selection"}),I("change",{bubbles:!0})],h);h.define();const u=C("ui5-table-selection",["mode","selected"],[],[],["change"]);u.displayName="TableSelection";try{u.displayName="TableSelection",u.__docgenInfo={description:'The `TableSelection` component is used inside the `Table` ti add key-based selection capabilities to the `Table`.\n\nThe component offers three selection modes:\n* Single - select a single row.\n* Multiple - select multiple rows.\n* None - no selection active.\n\nAs the selection is key-based, `TableRow` components need to define a unique `row-key` property.\n\n### Usage\n\nThe `TableSelection` component is only used inside the `Table` component as a feature.\nIt has to be slotted inside the `Table` in the `features` slot.\nThe component is not intended to be used as a standalone component.\n\n```html\n<Table>\n	<TableSelection mode="Multiple" slot="features"></TableSelection>\n</Table>\n```\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)',displayName:"TableSelection",props:{onChange:{defaultValue:null,description:`Fired when selection is changed by user interaction.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableSelectionDomRef, never>) => void"}},mode:{defaultValue:{value:'"Multiple"'},description:"Defines the selection mode.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"None"'},{value:'"Single"'},{value:'"Multiple"'}]}},selected:{defaultValue:null,description:"Defines the selected rows separated by a space.",name:"selected",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{u.displayName="TableSelection",u.__docgenInfo={description:'The `TableSelection` component is used inside the `Table` ti add key-based selection capabilities to the `Table`.\n\nThe component offers three selection modes:\n* Single - select a single row.\n* Multiple - select multiple rows.\n* None - no selection active.\n\nAs the selection is key-based, `TableRow` components need to define a unique `row-key` property.\n\n### Usage\n\nThe `TableSelection` component is only used inside the `Table` component as a feature.\nIt has to be slotted inside the `Table` in the `features` slot.\nThe component is not intended to be used as a standalone component.\n\n```html\n<Table>\n	<TableSelection mode="Multiple" slot="features"></TableSelection>\n</Table>\n```\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)',displayName:"TableSelection",props:{onChange:{defaultValue:null,description:`Fired when selection is changed by user interaction.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableSelectionDomRef, never>) => void"}},mode:{defaultValue:{value:'"Multiple"'},description:"Defines the selection mode.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"None"'},{value:'"Single"'},{value:'"Multiple"'}]}},selected:{defaultValue:null,description:"Defines the selected rows separated by a space.",name:"selected",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{u as T,c as a};
