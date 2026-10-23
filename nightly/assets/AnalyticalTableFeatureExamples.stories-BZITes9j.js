import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-eq8zrF0J.js";import{f as r,p as i}from"./AnalyticalTable.stories-C1KGpV1O.js";import{t as a}from"./jsx-runtime-BdxMnOeJ.js";import{A as o,C as s,S as c,c as l,i as u,k as d,l as f,n as ee,r as p,s as te,t as m,u as ne,w as re,x as h}from"./AnalyticalTable-DRx8Ni5F.js";import{n as ie,t as g}from"./Input-B378oiXm.js";import{r as ae,t as oe}from"./sort-descending-DJx8IVBQ.js";import{c as se,i as ce,l as _,n as le,r as v,s as y,t as b,u as ue}from"./FlexBox-DKS6NgmC.js";import{n as de,t as fe}from"./Popover-BdoeYMuS.js";import{n as pe,t as x}from"./Text-CHVdRnJy.js";import{n as me,t as S}from"./Button-DPTvwmxB.js";import{n as he,t as ge}from"./Dialog-D1g3gICr.js";import{n as _e,t as ve}from"./Option-Ddg3VHDr.js";import{n as ye,t as C}from"./Select-BKptFgwg.js";import{n as be,t as xe}from"./IllustratedMessage-BZqmMuV8.js";import{i as Se,n as Ce,r as we,t as Te}from"./MultiComboBoxItem-nelH8a7W.js";import{n as Ee,t as w}from"./Tag-DM7bnMAD.js";import{n as De,t as T}from"./ToggleButton-BUDVltOw.js";import{n as Oe,t as E}from"./ObjectStatus-C_x-dwbH.js";import{t as ke}from"./reset-CBi00EJe.js";import{r as Ae,t as je}from"./NoData-Ds8Jpc7s.js";import{n as Me,t as D}from"./Friends500-DFsllH8N.js";import{n as Ne,t as O}from"./Friends50-CNtcf8SO.js";var Pe=t({AutoResizeColumns:()=>Y,BorderlessContainer:()=>Q,ColumnClassName:()=>X,ColumnDragAndDrop:()=>B,ControlledSelection:()=>R,CustomCellRenderers:()=>G,CustomFilter:()=>M,CustomHeaderPopover:()=>K,GlobalFilter:()=>V,Grouping:()=>F,InitialTableState:()=>U,LoadingStates:()=>L,MultiSort:()=>J,NavigationIndicator:()=>j,NoVerticalCellBorders:()=>$,ProgrammaticTableControl:()=>H,RowHighlighting:()=>z,ScaleWidthModeComparison:()=>P,SelectionModes:()=>q,ServerSideOperations:()=>I,Subcomponents:()=>N,__namedExportsOrder:()=>Le,default:()=>Fe}),k,A,Fe,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,Ie,X,Z,Q,$,Le;function Re(){return(Re=e((()=>{Ne(),Me(),Ae(),ae(),oe(),ke(),k=n(),ne(),re(),c(),l(),ue(),se(),ce(),u(),o(),me(),he(),be(),ie(),Se(),Ce(),_e(),de(),ye(),Ee(),pe(),De(),le(),Oe(),ee(),r(),A=a(),Fe={...i,title:`Data Display / AnalyticalTable / Feature Examples`,tags:[`package:@ui5/webcomponents-react`]},j={args:{withNavigationHighlight:!0,selectionMode:h.Multiple,data:D},render:e=>{let[t,n]=(0,k.useState)(),r=e=>{n(e.detail.row)},i=(0,k.useCallback)(e=>t?.id===e.id,[t]);return(0,A.jsx)(m,{...e,markNavigatedRow:i,onRowSelect:r})}},M={args:{data:D,filterable:!0},render:e=>{let t=(0,k.useCallback)((e,t,n)=>n.length>0?e.filter(e=>{let r=e.values[t];return!!n.some(e=>r.includes(e))}):e,[]),n=(0,k.useMemo)(()=>[{Header:`Custom Column Filter`,accessor:`name`,filter:t,Filter:({column:e})=>(0,A.jsx)(we,{placeholder:`Filter Names`,onSelectionChange:t=>{e.setFilter(t.detail.items.map(e=>e.getAttribute(`text`)))},children:[`Carl`,`Dan`,`Rose`,`Susanne`].map(t=>{let n=e?.filterValue?.some(e=>e.includes(t));return(0,A.jsx)(Te,{text:t,selected:n},t)})})},{Header:`Age`,accessor:`age`}],[]);return(0,A.jsx)(m,{...e,columns:n})}},N={args:{subComponentsBehavior:te.Expandable},render:e=>{let t=(0,k.useCallback)(e=>e.id===`0`?(0,A.jsxs)(b,{style:{backgroundColor:`lightblue`,height:`300px`},justifyContent:`Center`,alignItems:_.Center,direction:y.Column,children:[(0,A.jsx)(w,{children:`height: 300px`}),(0,A.jsx)(x,{children:`This subcomponent will only be displayed below the first row.`}),(0,A.jsx)(`hr`,{}),(0,A.jsx)(x,{children:"The button below is rendered with `data-subcomponent-active-element` attribute to ensure consistent focus behavior"}),(0,A.jsx)(S,{"data-subcomponent-active-element":!0,children:`Click`})]}):e.id===`1`?(0,A.jsxs)(b,{style:{backgroundColor:`lightyellow`,height:`100px`},justifyContent:`Center`,alignItems:_.Center,direction:y.Column,children:[(0,A.jsx)(w,{children:`height: 100px`}),(0,A.jsx)(x,{children:`This subcomponent will only be displayed below the second row.`})]}):e.id===`2`?null:(0,A.jsxs)(b,{style:{backgroundColor:`lightgrey`,height:`50px`},justifyContent:`Center`,alignItems:_.Center,direction:y.Column,children:[(0,A.jsx)(w,{children:`height: 50px`}),(0,A.jsx)(x,{children:`This subcomponent will be displayed below all rows except the first, second and third.`})]}),[]);return(0,A.jsx)(m,{...e,renderRowSubComponent:t,header:`subComponentsBehavior: "${e.subComponentsBehavior}"`})}},P={render(e){let t=[`Available`,`Out of Office`,`Do Not Disturb`,`Away`,`Temporarily Unavailable — On Extended Leave Until Further Notice`],n=(0,k.useMemo)(()=>Array.from({length:10},(e,n)=>({id:n,name:[`Al`,`Bob`,`Jonathan Wetherby Longnamington the Third of Blackcastle`,`Di`,`Eve Martinez de la Cruz`][n%5],age:20+n*3,score:Math.round(50+Math.sin(n)*40),status:t[n%5],tiny:`X`})),[]),r=(0,k.useMemo)(()=>[{Header:`ID`,accessor:`id`,hAlign:d.End},{Header:`Name`,accessor:`name`},{Header:`Status`,accessor:`status`,Cell:({value:e})=>(0,A.jsx)(w,{children:e}),scaleWidthModeOptions:{cellString:`Temporarily Unavailable — On Extended Leave Until Further Notice`}},{Header:`Age`,accessor:`age`,hAlign:d.End},{accessor:`score`,hAlign:d.End,Header:({webComponentsReactProperties:e})=>(0,A.jsx)(E,{state:p.Indication08,className:e.classes.textEllipsis,children:`Average Quarterly Employee Satisfaction Score`}),scaleWidthModeOptions:{headerString:`Average Quarterly Employee Satisfaction Score`}},{Header:`T`,accessor:`tiny`}],[]);return(0,A.jsx)(b,{direction:y.Column,style:{gap:`2rem`},children:[`Default`,`Smart`,`Grow`].map(e=>(0,A.jsx)(m,{data:n,columns:r,scaleWidthMode:f[e],header:`scaleWidthMode: "${e}"`,visibleRows:3},e))})}},F={args:{data:D,groupable:!0,visibleRows:8},render(e){let[t,n]=(0,k.useState)([]),[r,i]=(0,k.useState)(``),a=(0,k.useMemo)(()=>[{Header:`Name`,accessor:`name`,disableGroupBy:!0},{Header:`Age`,accessor:`age`,hAlign:d.End,aggregate:`average`,Aggregated:e=>`Avg: ${Math.round(e.value)}`},{Header:`Status`,accessor:`status`,aggregate:e=>{let t=[`Negative`,`Critical`,`Positive`,`Information`,`None`];return e.reduce((e,n)=>t.indexOf(n)<t.indexOf(e)?n:e,`None`)},Aggregated:e=>`Max: ${e.value}`},{Header:`Friend Name`,accessor:`friend.name`,disableGroupBy:!0}],[]),o=e=>{let{column:t,groupedColumns:n,isGrouped:r}=e.detail;i(`Column "${t.Header}" ${r?`grouped`:`ungrouped`}. Active groups: [${n.join(`, `)}]`)};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(b,{style:{gap:`0.5rem`,marginBlockEnd:`0.5rem`},children:[(0,A.jsx)(S,{onClick:()=>n([`status`]),children:`Group by Status`}),(0,A.jsx)(S,{onClick:()=>n([`age`]),children:`Group by Age`}),(0,A.jsx)(S,{onClick:()=>n([`status`,`age`]),children:`Group by Status + Age`}),(0,A.jsx)(S,{onClick:()=>n([]),children:`Clear Groups`})]}),(0,A.jsx)(m,{...e,columns:a,groupBy:t,onGroup:o}),(0,A.jsx)(x,{style:{marginBlockStart:`0.5rem`,display:`block`},children:r||`Group columns via the column header menu or the buttons above.`})]})}},I={render(e){let t=(0,k.useMemo)(()=>Array.from({length:50},(e,t)=>({name:[`Alice`,`Bob`,`Charlie`,`Diana`,`Eve`,`Frank`,`Grace`,`Hank`,`Iris`,`Jack`][t%10]+` #${t}`,age:20+t%50,department:[`Engineering`,`Sales`,`Marketing`,`Support`,`HR`][t%5]})),[]),n=(0,k.useMemo)(()=>[{Header:`Name`,accessor:`name`,disableGroupBy:!0},{Header:`Age`,accessor:`age`,hAlign:d.End,disableGroupBy:!0},{Header:`Department`,accessor:`department`}],[]),[r,i]=(0,k.useState)(t),[a,o]=(0,k.useState)(!1),s=(0,k.useRef)({groupedColumns:[]}),c=(0,k.useCallback)(e=>{o(!0),setTimeout(()=>{let n=t;if(e.filter?.value){let{columnId:t,value:r}=e.filter;n=n.filter(e=>String(e[t]).toLowerCase().includes(r.toLowerCase()))}if(e.sort&&e.sort.direction!==`none`){let{columnId:t,direction:r}=e.sort;n=[...n].sort((e,n)=>{let i=e[t],a=n[t];return typeof i==`number`?r===`asc`?i-a:a-i:r===`asc`?String(i).localeCompare(String(a)):String(a).localeCompare(String(i))})}if(e.groupedColumns.length>0){let t=e.groupedColumns[0],r=new Map;for(let e of n){let n=String(e[t]),i=r.get(n);i?i.push(e):r.set(n,[e])}i(Array.from(r.entries()).map(([e,n])=>({[t]:e,subRows:n})))}else i(n);o(!1)},500)},[t]),l=(0,k.useCallback)(e=>{let{column:t,sortDirection:n}=e.detail;s.current.sort={columnId:t.id,direction:n},c(s.current)},[c]),u=(0,k.useCallback)(e=>{let{columnId:t,value:n}=e;s.current.filter=n?{columnId:String(t),value:n}:void 0,c(s.current)},[c]),f=(0,k.useCallback)(e=>{let{groupedColumns:t}=e.detail;s.current.groupedColumns=t,c(s.current)},[c]),ee=(0,k.useMemo)(()=>({manualSortBy:!0,manualFilters:!0,manualGroupBy:!0,autoResetGroupBy:!1,autoResetExpanded:!1}),[]);return(0,A.jsx)(m,{...e,data:r,columns:n,loading:a,sortable:!0,filterable:!0,groupable:!0,alwaysShowBusyIndicator:!0,reactTableOptions:ee,onSort:l,onFilter:u,onGroup:f,visibleRows:8,header:`Server-Side Operations (simulated 500ms delay)`})}},L={render(e){let[t,n]=(0,k.useState)(!0),[r,i]=(0,k.useState)(!1),[a,o]=(0,k.useState)(!1),[s,c]=(0,k.useState)(!1),[l,u]=(0,k.useState)(!1),d=(0,k.useMemo)(()=>t?O:[],[t]),f=l?r?void 0:e=>(0,A.jsx)(xe,{role:e.accessibleRole,name:je}):void 0;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(b,{style:{gap:`0.5rem`,marginBlockEnd:`0.5rem`},wrap:v.Wrap,children:[(0,A.jsx)(T,{pressed:r,onClick:()=>i(e=>!e),children:`loading`}),(0,A.jsx)(T,{pressed:a,onClick:()=>o(e=>!e),children:`showOverlay`}),(0,A.jsx)(T,{pressed:s,onClick:()=>c(e=>!e),children:`alwaysShowBusyIndicator`}),(0,A.jsx)(T,{pressed:!t,onClick:()=>n(e=>!e),children:`Empty data`}),(0,A.jsx)(T,{pressed:l,onClick:()=>u(e=>!e),children:`Custom NoDataComponent`})]}),(0,A.jsx)(m,{...e,data:d,loading:r,showOverlay:a,alwaysShowBusyIndicator:s,NoDataComponent:f,loadingDelay:500,header:`loading: ${r} | showOverlay: ${a} | alwaysShowBusyIndicator: ${s} | data: ${t?`50 rows`:`empty`}`})]})}},R={render(e){let[t,n]=(0,k.useState)({}),r=(0,k.useMemo)(()=>O.slice(0,20),[]),i=(0,k.useCallback)(e=>{n({...e.detail.selectedRowIds})},[]),a=Object.keys(t).length;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(b,{style:{gap:`0.5rem`,marginBlockEnd:`0.5rem`},wrap:v.Wrap,children:[(0,A.jsxs)(S,{onClick:()=>{let e={};r.forEach((t,n)=>{e[n]=!0}),n(e)},children:[`Select All (`,r.length,`)`]}),(0,A.jsx)(S,{onClick:()=>n({}),children:`Clear All`}),(0,A.jsx)(S,{onClick:()=>{let e={};for(let t=0;t<5;t++)e[t]=!0;n(e)},children:`Select First 5`})]}),(0,A.jsx)(m,{...e,data:r,selectionMode:h.Multiple,selectedRowIds:t,onRowSelect:i,visibleRows:8,header:`${a} row${a===1?``:`s`} selected`}),(0,A.jsxs)(x,{style:{marginBlockStart:`0.5rem`,display:`block`},children:[`Selected IDs: `,a>0?`[${Object.keys(t).join(`, `)}]`:`none`]})]})}},z={render(){let[e,t]=(0,k.useState)(!1),n=(0,k.useMemo)(()=>[{name:`Alice`,age:28,status:`Positive`},{name:`Bob`,age:35,status:`Negative`},{name:`Charlie`,age:42,status:`Critical`},{name:`Diana`,age:31,status:`Information`},{name:`Eve`,age:26,status:`None`},{name:`Frank`,age:39,status:p.Indication01},{name:`Grace`,age:45,status:p.Indication04},{name:`Hank`,age:33,status:p.Indication05},{name:`Iris`,age:29,status:p.Indication07},{name:`Jack`,age:50,status:p.Indication08}],[]),r=(0,k.useMemo)(()=>[{Header:`Name`,accessor:`name`},{Header:`Age`,accessor:`age`,hAlign:d.End},{Header:`Status Value`,accessor:`status`}],[]),i=(0,k.useCallback)(e=>e.age>40?p.Indication03:p.Indication07,[]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(T,{pressed:e,onClick:()=>t(e=>!e),style:{marginBlockEnd:`0.5rem`},children:e?`highlightField: function (age > 40 = Indication03)`:`highlightField: "status" (string accessor)`}),(0,A.jsx)(m,{data:n,columns:r,withRowHighlight:!0,highlightField:e?i:`status`,visibleRows:10,header:e?`Function-based highlighting (age > 40 = Indication03)`:`String-based highlighting (status field)`})]})}},B={render(e){let t=(0,k.useMemo)(()=>[`name`,`age`,`friend.name`,`friend.age`],[]),[n,r]=(0,k.useState)(t),i=(0,k.useMemo)(()=>[{Header:`Name`,accessor:`name`},{Header:`Age`,accessor:`age`,hAlign:d.End},{Header:`Friend Name`,accessor:`friend.name`},{Header:`Friend Age (fixed)`,accessor:`friend.age`,hAlign:d.End,disableDragAndDrop:!0}],[]),a=(0,k.useMemo)(()=>O.slice(0,20),[]),o=(0,k.useCallback)(e=>{let t=e.detail.columnsNewOrder.map(e=>e.id);r(t)},[]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(b,{style:{gap:`0.5rem`,marginBlockEnd:`0.5rem`},alignItems:_.Center,children:[(0,A.jsx)(S,{onClick:()=>r(t),children:`Reset Order`}),(0,A.jsxs)(x,{children:[`Current order: [`,n.join(`, `),`]`]})]}),(0,A.jsx)(m,{...e,data:a,columns:i,columnOrder:n,onColumnsReorder:o,visibleRows:5,header:`Drag column headers to reorder. "Friend Age" has disableDragAndDrop.`})]})}},V={render(e){let[t,n]=(0,k.useState)(``),r=(0,k.useMemo)(()=>[{Header:`Name`,accessor:`name`},{Header:`Age`,accessor:`age`,hAlign:d.End,disableGlobalFilter:!0},{Header:`Friend Name`,accessor:`friend.name`},{Header:`Friend Age`,accessor:`friend.age`,hAlign:d.End}],[]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(b,{style:{gap:`0.5rem`,marginBlockEnd:`0.5rem`},alignItems:_.Center,children:[(0,A.jsx)(g,{placeholder:`Search across all rows...`,value:t,onInput:e=>n(e.target.value),showClearIcon:!0,style:{width:`300px`}}),(0,A.jsx)(x,{children:`Age column has disableGlobalFilter: true`})]}),(0,A.jsx)(m,{...e,data:e.data,columns:r,globalFilterValue:t,visibleRows:8,header:t?`Filtering by: "${t}"`:`Type in the search field to filter`})]})}},H={render(e){let t=(0,k.useRef)(null),[n,r]=(0,k.useState)(``),[i,a]=(0,k.useState)(!1),o=(0,k.useMemo)(()=>[{Header:`Name`,accessor:`name`},{Header:`Age`,accessor:`age`,hAlign:d.End},{Header:`Friend Name`,accessor:`friend.name`},{Header:`Friend Age`,accessor:`friend.age`,hAlign:d.End}],[]),s=(0,k.useMemo)(()=>O.slice(0,30),[]),c=(0,k.useMemo)(()=>O.slice(10,40),[]),l=i?c:s,u=(0,k.useCallback)(()=>{let e=t.current;if(!e)return;let n=e.state.sortBy.map(e=>`${e.id} (${e.desc?`desc`:`asc`})`).join(`, `)||`none`,i=e.state.filters.map(e=>`${e.id}="${e.value}"`).join(`, `)||`none`,a=e.state.hiddenColumns?.join(`, `)||`none`;r(`Sorts: [${n}] | Filters: [${i}] | Hidden: [${a}]`)},[]),f=(0,k.useMemo)(()=>({autoResetSortBy:!1,autoResetFilters:!1,autoResetHiddenColumns:!1,autoResetExpanded:!1,autoResetGroupBy:!1}),[]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(b,{style:{gap:`0.5rem`,marginBlockEnd:`0.5rem`},wrap:v.Wrap,children:[(0,A.jsx)(S,{onClick:()=>{t.current?.setSortBy([{id:`name`,desc:!1}]),setTimeout(u,50)},children:`Sort Name (asc)`}),(0,A.jsx)(S,{onClick:()=>{t.current?.setSortBy([]),setTimeout(u,50)},children:`Clear Sort`}),(0,A.jsx)(S,{onClick:()=>{t.current?.setFilter(`age`,`3`),setTimeout(u,50)},children:`Filter Age contains "3"`}),(0,A.jsx)(S,{onClick:()=>{t.current?.setAllFilters([]),setTimeout(u,50)},children:`Clear Filters`}),(0,A.jsx)(S,{onClick:()=>{t.current?.toggleHideColumn(`friend.name`),setTimeout(u,50)},children:`Toggle "Friend Name" visibility`}),(0,A.jsx)(S,{onClick:()=>{t.current?.setHiddenColumns([]),setTimeout(u,50)},children:`Show All Columns`}),(0,A.jsx)(S,{onClick:()=>{t.current?.resetResizing()},children:`Reset Column Widths`}),(0,A.jsxs)(S,{design:`Emphasized`,onClick:()=>a(e=>!e),children:[`Toggle Data Set (`,i?`B`:`A`,`)`]})]}),(0,A.jsx)(m,{...e,data:l,columns:o,sortable:!0,filterable:!0,groupable:!0,tableInstance:t,reactTableOptions:f,visibleRows:8,header:`Data Set: ${i?`B`:`A`} — Use buttons above to programmatically control the table`}),(0,A.jsx)(x,{style:{marginBlockStart:`0.5rem`,display:`block`},children:n||`Click a button to see table state.`})]})}},U={render(){let[e,t]=(0,k.useReducer)(e=>e+1,0),n=(0,k.useMemo)(()=>[{Header:`Name`,accessor:`name`},{Header:`Age`,accessor:`age`,hAlign:d.End},{Header:`Friend Name`,accessor:`friend.name`},{Header:`Friend Age`,accessor:`friend.age`,hAlign:d.End}],[]),r=(0,k.useMemo)(()=>O.slice(0,30),[]),i=(0,k.useMemo)(()=>({autoResetSortBy:!1,autoResetFilters:!1,autoResetHiddenColumns:!1,initialState:{sortBy:[{id:`age`,desc:!0}],filters:[{id:`name`,value:`a`}],hiddenColumns:[`friend.age`],selectedRowIds:{0:!0,2:!0}}}),[]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(S,{onClick:t,style:{marginBlockEnd:`0.5rem`},children:`Reset to Initial State (remount)`}),(0,A.jsx)(m,{data:r,columns:n,sortable:!0,filterable:!0,selectionMode:h.Multiple,reactTableOptions:i,visibleRows:8,header:`Initial: sorted by Age desc, filtered Name by "a", Friend Age hidden, rows 0 & 2 selected`},e)]})}},W=(0,k.memo)(({row:e})=>{let{age:t,friend:n,status:r}=e.original,i=n.age-t;return(0,A.jsxs)(b,{alignItems:_.Center,style:{gap:`0.25rem`},children:[(0,A.jsx)(E,{state:r,children:n.name}),(0,A.jsxs)(w,{colorScheme:i>=0?`5`:`3`,children:[i>=0?`+`:``,i,` yrs`]})]})}),W.displayName=`FriendComparisonCell`,G={render(e){let[t,n]=(0,k.useState)(null),r=(0,k.useMemo)(()=>O.slice(0,20).map((e,t)=>({...e,status:[`Positive`,`Negative`,`Critical`,`Information`,`None`][t%5],description:`This is a longer description for row ${t} that should be truncated with an ellipsis when the column is too narrow.`})),[]),i=(0,k.useMemo)(()=>[{Header:`Name`,accessor:`name`},{Header:`Age`,accessor:`age`,hAlign:d.End,Cell:({value:e})=>(0,A.jsx)(E,{state:e>40?`Critical`:`Positive`,children:e})},{Header:`Friend Comparison`,id:`friendComparison`,Cell:W},{Header:`Description`,accessor:`description`,Cell:({value:e,webComponentsReactProperties:t})=>(0,A.jsx)(`span`,{className:t.classes.textEllipsis,title:e,children:e})},{Header:`Notes`,id:`notes`,Cell:()=>(0,A.jsx)(g,{onKeyDown:e=>{(e.key===`ArrowLeft`||e.key===`ArrowRight`)&&e.stopPropagation()}})},{Header:`Details`,id:`details`,Cell:({row:e})=>(0,A.jsx)(S,{onClick:()=>n(e.original),children:`Show`})}],[]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(m,{...e,data:r,columns:i,visibleRows:8,header:`Custom Cell renderers`}),(0,A.jsx)(ge,{open:!!t,onClose:()=>n(null),headerText:t?.name??``,children:(0,A.jsxs)(b,{direction:y.Column,style:{padding:`1rem`,gap:`0.5rem`},children:[(0,A.jsxs)(x,{children:[`Age: `,t?.age]}),(0,A.jsxs)(x,{children:[`Friend: `,t?.friend?.name]}),(0,A.jsxs)(x,{children:[`Status: `,t?.status]})]})})]})}},K={render(e){let[t,n]=(0,k.useState)(``),[r,i]=(0,k.useState)(``),a=(0,k.useMemo)(()=>[{Header:`Name (Custom Popover)`,accessor:`name`,Popover:e=>{let{setOpen:t,openerId:a}=e.popoverProps;return(0,A.jsx)(fe,{open:!0,opener:a,onClose:()=>t(!1),onClick:e=>e.stopPropagation(),headerText:`Custom Column Menu`,children:(0,A.jsxs)(b,{direction:y.Column,style:{padding:`0.5rem`,gap:`0.5rem`},children:[(0,A.jsx)(S,{icon:`sort-ascending`,onClick:()=>{e.setSortBy([{id:`name`,desc:!1}]),n(`Name: ascending`),t(!1)},children:`Sort A → Z`}),(0,A.jsx)(S,{icon:`sort-descending`,onClick:()=>{e.setSortBy([{id:`name`,desc:!0}]),n(`Name: descending`),t(!1)},children:`Sort Z → A`}),(0,A.jsx)(g,{placeholder:`Filter Name...`,value:r,onInput:t=>{let n=t.target.value;i(n),e.setFilter(`name`,n||void 0)}}),(0,A.jsx)(S,{icon:`reset`,onClick:()=>{e.setSortBy([]),e.setAllFilters([]),n(``),i(``),t(!1)},children:`Reset All`})]})})}},{Header:`Age`,accessor:`age`,hAlign:d.End},{Header:`Friend Name`,accessor:`friend.name`}],[r]),o=(0,k.useMemo)(()=>O.slice(0,30),[]),s=(0,k.useMemo)(()=>({autoResetSortBy:!1,autoResetFilters:!1}),[]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(m,{...e,data:o,columns:a,sortable:!0,filterable:!0,reactTableOptions:s,visibleRows:8,header:`Click the "Name" column header to see the custom popover`}),(0,A.jsx)(x,{style:{marginBlockStart:`0.5rem`,display:`block`},children:t?`Sort: ${t}`:`Click the "Name (Custom Popover)" column header.`})]})}},q={render(e){let[t,n]=(0,k.useState)(h.Multiple),[r,i]=(0,k.useState)(s.Row),[a,o]=(0,k.useState)(``),c=(0,k.useMemo)(()=>O.slice(0,20),[]),l=(0,k.useMemo)(()=>[{Header:`Name`,accessor:`name`},{Header:`Age`,accessor:`age`,hAlign:d.End},{Header:`Friend Name`,accessor:`friend.name`}],[]),u=(0,k.useCallback)(e=>{let{row:t,isSelected:n,allRowsSelected:r,selectedRowIds:i}=e.detail,a=Object.keys(i).length;o(t?`Row "${t.original.name}" ${n?`selected`:`deselected`}. Total selected: ${a}`:`Select All toggled. All selected: ${r}. Total selected: ${a}`)},[]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(b,{style:{gap:`1rem`,marginBlockEnd:`0.5rem`},alignItems:_.End,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`label`,{htmlFor:`sel-mode`,children:`selectionMode`}),(0,A.jsx)(C,{id:`sel-mode`,value:t,onChange:e=>n(e.detail.selectedOption.getAttribute(`value`)),children:Object.values(h).map(e=>(0,A.jsx)(ve,{value:e,children:e},e))})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`label`,{htmlFor:`sel-behavior`,children:`selectionBehavior`}),(0,A.jsx)(C,{id:`sel-behavior`,value:r,onChange:e=>i(e.detail.selectedOption.getAttribute(`value`)),children:Object.values(s).map(e=>(0,A.jsx)(ve,{value:e,children:e},e))})]})]}),(0,A.jsx)(m,{...e,data:c,columns:l,selectionMode:t,selectionBehavior:r,onRowSelect:u,header:`selectionMode: ${t} | selectionBehavior: ${r}`}),(0,A.jsx)(x,{style:{marginBlockStart:`0.5rem`,display:`block`},children:a||`Click a row or selection checkbox to see event details.`})]})}},J={render(e){let t=(0,k.useRef)(null),[n,r]=(0,k.useState)([]),i=(0,k.useMemo)(()=>[{Header:`Name`,accessor:`name`,enableMultiSort:!0},{Header:`Age`,accessor:`age`,hAlign:d.End,enableMultiSort:!0},{Header:`Friend Name`,accessor:`friend.name`,enableMultiSort:!0},{Header:`Friend Age`,accessor:`friend.age`,hAlign:d.End,enableMultiSort:!0}],[]),a=(0,k.useMemo)(()=>O.slice(0,30),[]),o=(0,k.useMemo)(()=>({autoResetSortBy:!1}),[]),s=(0,k.useCallback)(e=>{let{column:t,sortDirection:n}=e.detail;r(e=>{if(n===`clear`)return e.filter(e=>e.id!==t.id);let r=n===`desc`,i=e.findIndex(e=>e.id===t.id);if(i>=0){let n=[...e];return n[i]={id:t.id,desc:r},n}return[...e,{id:t.id,desc:r}]})},[]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(b,{style:{gap:`0.5rem`,marginBlockEnd:`0.5rem`},wrap:v.Wrap,children:[(0,A.jsx)(S,{onClick:()=>{t.current?.setSortBy([{id:`age`,desc:!1},{id:`name`,desc:!1}]),r([{id:`age`,desc:!1},{id:`name`,desc:!1}])},children:`Sort: Age ↑, Name ↑`}),(0,A.jsx)(S,{onClick:()=>{t.current?.setSortBy([{id:`friend.name`,desc:!0},{id:`friend.age`,desc:!1}]),r([{id:`friend.name`,desc:!0},{id:`friend.age`,desc:!1}])},children:`Sort: Friend Name ↓, Friend Age ↑`}),(0,A.jsx)(S,{onClick:()=>{t.current?.setSortBy([]),r([])},children:`Clear Sort`})]}),(0,A.jsx)(m,{...e,data:a,columns:i,sortable:!0,onSort:s,reactTableOptions:o,tableInstance:t,visibleRows:8,header:`Hold Ctrl/Cmd and click column headers to sort by multiple columns`}),(0,A.jsx)(x,{style:{marginBlockStart:`0.5rem`,display:`block`},children:n.length>0?`Sort priorities: ${n.map((e,t)=>`${t+1}. ${e.id} (${e.desc?`desc`:`asc`})`).join(` → `)}`:`No active sort. Use the column header menu or the buttons above.`})]})}},Y={render(e){let[t,n]=(0,k.useState)(``),r=(0,k.useMemo)(()=>[{name:`A very long name that will exceed the column width`,age:28,description:`Short`},{name:`Bob`,age:3500,description:`A medium length description for this row`},{name:`Charlie Brown`,age:42,description:`Another description that is quite long and should cause the column to expand when auto-resized`},{name:`Di`,age:9,description:`Tiny`},{name:`Eve Martinez de la Cruz`,age:26123,description:`Medium text here`}],[]),i=(0,k.useMemo)(()=>[{Header:`Name`,accessor:`name`,autoResizable:!0},{Header:`Age`,accessor:`age`,hAlign:d.End,autoResizable:!0},{Header:`Description`,accessor:`description`,autoResizable:!0}],[]),a=(0,k.useCallback)(e=>{n(`Column "${e.detail.columnId}" auto-resized to ${Math.round(e.detail.width)}px`)},[]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(m,{...e,data:r,columns:i,onAutoResize:a,visibleRows:5,header:`Double-click a column resizer to auto-fit width to content`}),(0,A.jsx)(x,{style:{marginBlockStart:`0.5rem`,display:`block`},children:t||`Double-click a column border to auto-resize.`})]})}},Ie=[{Header:`Name`,accessor:`name`,className:`feature-example-body-cell`,classNameHeader:`feature-example-header-cell`},{Header:`Age`,accessor:`age`},{Header:`Friend Name`,accessor:`friend.name`},{Header:`Friend Age`,accessor:`friend.age`}],X={render(e){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`
          .feature-example-header-cell { background-color: lightgrey; }
          .feature-example-body-cell { background-color: lightblue; }
        `}),(0,A.jsx)(m,{...e,data:O,columns:Ie,visibleRows:5})]})}},Z=[{Header:`Name`,accessor:`name`},{Header:`Age`,accessor:`age`},{Header:`Friend Name`,accessor:`friend.name`},{Header:`Friend Age`,accessor:`friend.age`}],Q={tags:[`custom`],render(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`
          /* Removes only the outer container frame. The class is applied to the table's
             root element, so it also covers the sibling vertical scrollbar. */
          .at-borderless-container {
            --_ui5wcr-AnalyticalTable-OuterBorderBlock: none;
            --_ui5wcr-AnalyticalTable-OuterBorderInline: none;
            --sapList_TableFooterBorder: transparent;
          }
          .at-borderless-container [data-component-name="AnalyticalTableContainer"]::after {
            display: none;
          }
        `}),(0,A.jsx)(m,{className:`at-borderless-container`,data:O,columns:Z,selectionMode:h.Multiple,visibleRows:5})]})}},$={tags:[`custom`],render(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`
          /* Removes the vertical dividers between columns (header + body) while keeping
             the horizontal row separators. */
          .at-no-vertical-cell-borders [role="columnheader"],
          .at-no-vertical-cell-borders [data-column-id-cell] {
            border-inline-end: none;
          }
        `}),(0,A.jsx)(m,{className:`at-no-vertical-cell-borders`,data:O,columns:Z,selectionMode:h.Multiple,visibleRows:5})]})}},Le=[`NavigationIndicator`,`CustomFilter`,`Subcomponents`,`ScaleWidthModeComparison`,`Grouping`,`ServerSideOperations`,`LoadingStates`,`ControlledSelection`,`RowHighlighting`,`ColumnDragAndDrop`,`GlobalFilter`,`ProgrammaticTableControl`,`InitialTableState`,`CustomCellRenderers`,`CustomHeaderPopover`,`SelectionModes`,`MultiSort`,`AutoResizeColumns`,`ColumnClassName`,`BorderlessContainer`,`NoVerticalCellBorders`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    withNavigationHighlight: true,
    selectionMode: AnalyticalTableSelectionMode.Multiple,
    data: dataLarge
  },
  render: args => {
    const [selectedRow, setSelectedRow] = useState();
    const onRowSelect = e => {
      setSelectedRow(e.detail.row);
    };
    const markNavigatedRow = useCallback(row => {
      return selectedRow?.id === row.id;
    }, [selectedRow]);
    return <AnalyticalTable {...args} markNavigatedRow={markNavigatedRow} onRowSelect={onRowSelect} />;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    data: dataLarge,
    filterable: true
  },
  render: args => {
    const filterFn = useCallback((rows, accessor, filterValue) => {
      if (filterValue.length > 0) {
        return rows.filter(row => {
          const rowVal = row.values[accessor];
          return !!filterValue.some(item => rowVal.includes(item));
        });
      }
      return rows;
    }, []);
    const columns: AnalyticalTableColumnDefinition[] = useMemo(() => [{
      Header: 'Custom Column Filter',
      accessor: 'name',
      filter: filterFn,
      Filter: ({
        column
      }) => {
        const firstNames = ['Carl', 'Dan', 'Rose', 'Susanne'];
        return <MultiComboBox placeholder="Filter Names" onSelectionChange={e => {
          column.setFilter(e.detail.items.map(item => item.getAttribute('text')));
        }}>
                {firstNames.map(item => {
            const isSelected = column?.filterValue?.some(filterVal => filterVal.includes(item));
            return <MultiComboBoxItem text={item} key={item} selected={isSelected} />;
          })}
              </MultiComboBox>;
      }
    }, {
      Header: 'Age',
      accessor: 'age'
    }], []);
    return <AnalyticalTable {...args} columns={columns} />;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    subComponentsBehavior: AnalyticalTableSubComponentsBehavior.Expandable
  },
  render: args => {
    const renderRowSubComponent = useCallback(row => {
      if (row.id === '0') {
        return <FlexBox style={{
          backgroundColor: 'lightblue',
          height: '300px'
        }} justifyContent="Center" alignItems={FlexBoxAlignItems.Center} direction={FlexBoxDirection.Column}>
            <Tag>height: 300px</Tag>
            <Text>This subcomponent will only be displayed below the first row.</Text>
            <hr />
            <Text>
              The button below is rendered with \`data-subcomponent-active-element\` attribute to ensure consistent focus
              behavior
            </Text>
            <Button data-subcomponent-active-element>Click</Button>
          </FlexBox>;
      }
      if (row.id === '1') {
        return <FlexBox style={{
          backgroundColor: 'lightyellow',
          height: '100px'
        }} justifyContent="Center" alignItems={FlexBoxAlignItems.Center} direction={FlexBoxDirection.Column}>
            <Tag>height: 100px</Tag>
            <Text>This subcomponent will only be displayed below the second row.</Text>
          </FlexBox>;
      }
      if (row.id === '2') {
        return null;
      }
      return <FlexBox style={{
        backgroundColor: 'lightgrey',
        height: '50px'
      }} justifyContent="Center" alignItems={FlexBoxAlignItems.Center} direction={FlexBoxDirection.Column}>
          <Tag>height: 50px</Tag>
          <Text>This subcomponent will be displayed below all rows except the first, second and third.</Text>
        </FlexBox>;
    }, []);
    return <AnalyticalTable {...args} renderRowSubComponent={renderRowSubComponent} header={\`subComponentsBehavior: "\${args.subComponentsBehavior}"\`} />;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render(args) {
    const statuses = ['Available', 'Out of Office', 'Do Not Disturb', 'Away', 'Temporarily Unavailable — On Extended Leave Until Further Notice'];
    const data = useMemo(() => Array.from({
      length: 10
    }, (_, i) => ({
      id: i,
      name: ['Al', 'Bob', 'Jonathan Wetherby Longnamington the Third of Blackcastle', 'Di', 'Eve Martinez de la Cruz'][i % 5],
      age: 20 + i * 3,
      score: Math.round(50 + Math.sin(i) * 40),
      status: statuses[i % 5],
      tiny: 'X'
    })), []);
    const columns = useMemo<AnalyticalTableColumnDefinition[]>(() => [{
      Header: 'ID',
      accessor: 'id',
      hAlign: TextAlign.End
    }, {
      Header: 'Name',
      accessor: 'name'
    }, {
      Header: 'Status',
      accessor: 'status',
      Cell: ({
        value
      }) => <Tag>{value}</Tag>,
      // Smart/Grow can't measure custom cells — provide the longest expected text
      scaleWidthModeOptions: {
        cellString: 'Temporarily Unavailable — On Extended Leave Until Further Notice'
      }
    }, {
      Header: 'Age',
      accessor: 'age',
      hAlign: TextAlign.End
    }, {
      accessor: 'score',
      hAlign: TextAlign.End,
      Header: ({
        webComponentsReactProperties
      }) => <ObjectStatus state={IndicationColor.Indication08} className={webComponentsReactProperties.classes.textEllipsis}>
              Average Quarterly Employee Satisfaction Score
            </ObjectStatus>,
      scaleWidthModeOptions: {
        headerString: 'Average Quarterly Employee Satisfaction Score'
      }
    }, {
      Header: 'T',
      accessor: 'tiny'
    }], []);
    return <FlexBox direction={FlexBoxDirection.Column} style={{
      gap: '2rem'
    }}>
        {(['Default', 'Smart', 'Grow'] as const).map(mode => <AnalyticalTable key={mode} data={data} columns={columns} scaleWidthMode={AnalyticalTableScaleWidthMode[mode]} header={\`scaleWidthMode: "\${mode}"\`} visibleRows={3} />)}
      </FlexBox>;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    data: dataLarge,
    groupable: true,
    visibleRows: 8
  },
  render(args) {
    const [groupBy, setGroupBy] = useState<string[]>([]);
    const [lastGroupEvent, setLastGroupEvent] = useState('');
    const columns = useMemo<AnalyticalTableColumnDefinition[]>(() => [{
      Header: 'Name',
      accessor: 'name',
      disableGroupBy: true
    }, {
      Header: 'Age',
      accessor: 'age',
      hAlign: TextAlign.End,
      aggregate: 'average',
      Aggregated: instance => \`Avg: \${Math.round(instance.value)}\`
    }, {
      Header: 'Status',
      accessor: 'status',
      aggregate: leafValues => {
        const severity = ['Negative', 'Critical', 'Positive', 'Information', 'None'];
        return leafValues.reduce((highest, val) => severity.indexOf(val) < severity.indexOf(highest) ? val : highest, 'None');
      },
      Aggregated: instance => \`Max: \${instance.value}\`
    }, {
      Header: 'Friend Name',
      accessor: 'friend.name',
      disableGroupBy: true
    }], []);
    const onGroup = e => {
      const {
        column,
        groupedColumns,
        isGrouped
      } = e.detail;
      setLastGroupEvent(\`Column "\${column.Header}" \${isGrouped ? 'grouped' : 'ungrouped'}. Active groups: [\${groupedColumns.join(', ')}]\`);
    };
    return <>
        <FlexBox style={{
        gap: '0.5rem',
        marginBlockEnd: '0.5rem'
      }}>
          <Button onClick={() => setGroupBy(['status'])}>Group by Status</Button>
          <Button onClick={() => setGroupBy(['age'])}>Group by Age</Button>
          <Button onClick={() => setGroupBy(['status', 'age'])}>Group by Status + Age</Button>
          <Button onClick={() => setGroupBy([])}>Clear Groups</Button>
        </FlexBox>
        <AnalyticalTable {...args} columns={columns} groupBy={groupBy} onGroup={onGroup} />
        <Text style={{
        marginBlockStart: '0.5rem',
        display: 'block'
      }}>
          {lastGroupEvent || 'Group columns via the column header menu or the buttons above.'}
        </Text>
      </>;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render(args) {
    type Row = {
      name: string;
      age: number;
      department: string;
    };
    const allData = useMemo<Row[]>(() => Array.from({
      length: 50
    }, (_, i) => ({
      name: ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank', 'Grace', 'Hank', 'Iris', 'Jack'][i % 10] + \` #\${i}\`,
      age: 20 + i % 50,
      department: ['Engineering', 'Sales', 'Marketing', 'Support', 'HR'][i % 5]
    })), []);
    const columns = useMemo<AnalyticalTableColumnDefinition[]>(() => [{
      Header: 'Name',
      accessor: 'name',
      disableGroupBy: true
    }, {
      Header: 'Age',
      accessor: 'age',
      hAlign: TextAlign.End,
      disableGroupBy: true
    }, {
      Header: 'Department',
      accessor: 'department'
    }], []);
    const [data, setData] = useState<Record<string, unknown>[]>(allData);
    const [loading, setLoading] = useState(false);

    // opsRef + applyOps simulate a backend that receives all active parameters in one request.
    const opsRef = useRef<{
      sort?: {
        columnId: string;
        direction: string;
      };
      filter?: {
        columnId: string;
        value: string;
      };
      groupedColumns: string[];
    }>({
      groupedColumns: []
    });
    const applyOps = useCallback((ops: typeof opsRef.current) => {
      setLoading(true);
      setTimeout(() => {
        let rows: Row[] = allData;
        if (ops.filter?.value) {
          const {
            columnId,
            value
          } = ops.filter;
          rows = rows.filter(row => String(row[columnId]).toLowerCase().includes(value.toLowerCase()));
        }
        if (ops.sort && ops.sort.direction !== 'none') {
          const {
            columnId,
            direction
          } = ops.sort;
          rows = [...rows].sort((a, b) => {
            const aVal = a[columnId];
            const bVal = b[columnId];
            if (typeof aVal === 'number') return direction === 'asc' ? aVal - bVal : bVal - aVal;
            return direction === 'asc' ? String(aVal).localeCompare(String(bVal)) : String(bVal).localeCompare(String(aVal));
          });
        }
        if (ops.groupedColumns.length > 0) {
          const groupCol = ops.groupedColumns[0];
          const groups = new Map<string, Row[]>();
          for (const row of rows) {
            const key = String(row[groupCol]);
            const existing = groups.get(key);
            if (existing) {
              existing.push(row);
            } else {
              groups.set(key, [row]);
            }
          }
          setData(Array.from(groups.entries()).map(([key, children]) => ({
            [groupCol]: key,
            subRows: children
          })));
        } else {
          setData(rows);
        }
        setLoading(false);
      }, 500);
    }, [allData]);
    const onSort = useCallback(e => {
      const {
        column,
        sortDirection
      } = e.detail;
      opsRef.current.sort = {
        columnId: column.id,
        direction: sortDirection
      };
      applyOps(opsRef.current);
    }, [applyOps]);
    const onFilter = useCallback(e => {
      const {
        columnId,
        value
      } = e;
      opsRef.current.filter = value ? {
        columnId: String(columnId),
        value
      } : undefined;
      applyOps(opsRef.current);
    }, [applyOps]);
    const onGroup = useCallback(e => {
      const {
        groupedColumns
      } = e.detail;
      opsRef.current.groupedColumns = groupedColumns;
      applyOps(opsRef.current);
    }, [applyOps]);
    const reactTableOptions = useMemo(() => ({
      manualSortBy: true,
      manualFilters: true,
      manualGroupBy: true,
      autoResetGroupBy: false,
      autoResetExpanded: false
    }), []);
    return <AnalyticalTable {...args} data={data} columns={columns} loading={loading} sortable filterable groupable alwaysShowBusyIndicator reactTableOptions={reactTableOptions} onSort={onSort} onFilter={onFilter} onGroup={onGroup} visibleRows={8} header="Server-Side Operations (simulated 500ms delay)" />;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render(args) {
    const [hasData, setHasData] = useState(true);
    const [loading, setLoading] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const [alwaysShowBusyIndicator, setAlwaysShowBusyIndicator] = useState(false);
    const [customNoData, setCustomNoData] = useState(false);
    const data = useMemo(() => hasData ? dataSmall : [], [hasData]);
    const NoDataComponent: AnalyticalTablePropTypes['NoDataComponent'] = !customNoData ? undefined : loading ? undefined : props => <IllustratedMessage role={props.accessibleRole} name={NoDataIllustration} />;
    return <>
        <FlexBox style={{
        gap: '0.5rem',
        marginBlockEnd: '0.5rem'
      }} wrap={FlexBoxWrap.Wrap}>
          <ToggleButton pressed={loading} onClick={() => setLoading(prev => !prev)}>
            loading
          </ToggleButton>
          <ToggleButton pressed={showOverlay} onClick={() => setShowOverlay(prev => !prev)}>
            showOverlay
          </ToggleButton>
          <ToggleButton pressed={alwaysShowBusyIndicator} onClick={() => setAlwaysShowBusyIndicator(prev => !prev)}>
            alwaysShowBusyIndicator
          </ToggleButton>
          <ToggleButton pressed={!hasData} onClick={() => setHasData(prev => !prev)}>
            Empty data
          </ToggleButton>
          <ToggleButton pressed={customNoData} onClick={() => setCustomNoData(prev => !prev)}>
            Custom NoDataComponent
          </ToggleButton>
        </FlexBox>
        <AnalyticalTable {...args} data={data} loading={loading} showOverlay={showOverlay} alwaysShowBusyIndicator={alwaysShowBusyIndicator} NoDataComponent={NoDataComponent} loadingDelay={500} header={\`loading: \${loading} | showOverlay: \${showOverlay} | alwaysShowBusyIndicator: \${alwaysShowBusyIndicator} | data: \${hasData ? '50 rows' : 'empty'}\`} />
      </>;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render(args) {
    const [selectedRowIds, setSelectedRowIds] = useState<Record<string, boolean>>({});
    const data = useMemo(() => dataSmall.slice(0, 20), []);
    const onRowSelect = useCallback(e => {
      setSelectedRowIds({
        ...e.detail.selectedRowIds
      });
    }, []);
    const selectedCount = Object.keys(selectedRowIds).length;
    return <>
        <FlexBox style={{
        gap: '0.5rem',
        marginBlockEnd: '0.5rem'
      }} wrap={FlexBoxWrap.Wrap}>
          <Button onClick={() => {
          const all: Record<string, boolean> = {};
          data.forEach((_, i) => {
            all[i] = true;
          });
          setSelectedRowIds(all);
        }}>
            Select All ({data.length})
          </Button>
          <Button onClick={() => setSelectedRowIds({})}>Clear All</Button>
          <Button onClick={() => {
          const first5: Record<string, boolean> = {};
          for (let i = 0; i < 5; i++) first5[i] = true;
          setSelectedRowIds(first5);
        }}>
            Select First 5
          </Button>
        </FlexBox>
        <AnalyticalTable {...args} data={data} selectionMode={AnalyticalTableSelectionMode.Multiple} selectedRowIds={selectedRowIds} onRowSelect={onRowSelect} visibleRows={8} header={\`\${selectedCount} row\${selectedCount !== 1 ? 's' : ''} selected\`} />
        <Text style={{
        marginBlockStart: '0.5rem',
        display: 'block'
      }}>
          Selected IDs: {selectedCount > 0 ? \`[\${Object.keys(selectedRowIds).join(', ')}]\` : 'none'}
        </Text>
      </>;
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render() {
    const [useFunction, setUseFunction] = useState(false);
    const data = useMemo(() => [{
      name: 'Alice',
      age: 28,
      status: 'Positive'
    }, {
      name: 'Bob',
      age: 35,
      status: 'Negative'
    }, {
      name: 'Charlie',
      age: 42,
      status: 'Critical'
    }, {
      name: 'Diana',
      age: 31,
      status: 'Information'
    }, {
      name: 'Eve',
      age: 26,
      status: 'None'
    }, {
      name: 'Frank',
      age: 39,
      status: IndicationColor.Indication01
    }, {
      name: 'Grace',
      age: 45,
      status: IndicationColor.Indication04
    }, {
      name: 'Hank',
      age: 33,
      status: IndicationColor.Indication05
    }, {
      name: 'Iris',
      age: 29,
      status: IndicationColor.Indication07
    }, {
      name: 'Jack',
      age: 50,
      status: IndicationColor.Indication08
    }], []);
    const columns = useMemo<AnalyticalTableColumnDefinition[]>(() => [{
      Header: 'Name',
      accessor: 'name'
    }, {
      Header: 'Age',
      accessor: 'age',
      hAlign: TextAlign.End
    }, {
      Header: 'Status Value',
      accessor: 'status'
    }], []);
    const highlightFn = useCallback(original => {
      return original.age > 40 ? IndicationColor.Indication03 : IndicationColor.Indication07;
    }, []);
    return <>
        <ToggleButton pressed={useFunction} onClick={() => setUseFunction(prev => !prev)} style={{
        marginBlockEnd: '0.5rem'
      }}>
          {useFunction ? 'highlightField: function (age > 40 = Indication03)' : 'highlightField: "status" (string accessor)'}
        </ToggleButton>
        <AnalyticalTable data={data} columns={columns} withRowHighlight highlightField={useFunction ? highlightFn : 'status'} visibleRows={10} header={useFunction ? 'Function-based highlighting (age > 40 = Indication03)' : 'String-based highlighting (status field)'} />
      </>;
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render(args) {
    const defaultOrder = useMemo(() => ['name', 'age', 'friend.name', 'friend.age'], []);
    const [columnOrder, setColumnOrder] = useState<string[]>(defaultOrder);
    const columns = useMemo<AnalyticalTableColumnDefinition[]>(() => [{
      Header: 'Name',
      accessor: 'name'
    }, {
      Header: 'Age',
      accessor: 'age',
      hAlign: TextAlign.End
    }, {
      Header: 'Friend Name',
      accessor: 'friend.name'
    }, {
      Header: 'Friend Age (fixed)',
      accessor: 'friend.age',
      hAlign: TextAlign.End,
      disableDragAndDrop: true
    }], []);
    const data = useMemo(() => dataSmall.slice(0, 20), []);
    const onColumnsReorder = useCallback(e => {
      const newOrder = e.detail.columnsNewOrder.map(col => col.id);
      setColumnOrder(newOrder);
    }, []);
    return <>
        <FlexBox style={{
        gap: '0.5rem',
        marginBlockEnd: '0.5rem'
      }} alignItems={FlexBoxAlignItems.Center}>
          <Button onClick={() => setColumnOrder(defaultOrder)}>Reset Order</Button>
          <Text>Current order: [{columnOrder.join(', ')}]</Text>
        </FlexBox>
        <AnalyticalTable {...args} data={data} columns={columns} columnOrder={columnOrder} onColumnsReorder={onColumnsReorder} visibleRows={5} header='Drag column headers to reorder. "Friend Age" has disableDragAndDrop.' />
      </>;
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render(args) {
    const [filterValue, setFilterValue] = useState('');
    const columns = useMemo<AnalyticalTableColumnDefinition[]>(() => [{
      Header: 'Name',
      accessor: 'name'
    }, {
      Header: 'Age',
      accessor: 'age',
      hAlign: TextAlign.End,
      disableGlobalFilter: true
    }, {
      Header: 'Friend Name',
      accessor: 'friend.name'
    }, {
      Header: 'Friend Age',
      accessor: 'friend.age',
      hAlign: TextAlign.End
    }], []);
    return <>
        <FlexBox style={{
        gap: '0.5rem',
        marginBlockEnd: '0.5rem'
      }} alignItems={FlexBoxAlignItems.Center}>
          <Input placeholder="Search across all rows..." value={filterValue} onInput={e => setFilterValue(e.target.value)} showClearIcon style={{
          width: '300px'
        }} />
          <Text>Age column has disableGlobalFilter: true</Text>
        </FlexBox>
        <AnalyticalTable {...args} data={args.data} columns={columns} globalFilterValue={filterValue} visibleRows={8} header={filterValue ? \`Filtering by: "\${filterValue}"\` : 'Type in the search field to filter'} />
      </>;
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render(args) {
    const tableInstanceRef = useRef(null);
    const [stateInfo, setStateInfo] = useState('');
    const [useAltData, setUseAltData] = useState(false);
    const columns = useMemo<AnalyticalTableColumnDefinition[]>(() => [{
      Header: 'Name',
      accessor: 'name'
    }, {
      Header: 'Age',
      accessor: 'age',
      hAlign: TextAlign.End
    }, {
      Header: 'Friend Name',
      accessor: 'friend.name'
    }, {
      Header: 'Friend Age',
      accessor: 'friend.age',
      hAlign: TextAlign.End
    }], []);
    const dataA = useMemo(() => dataSmall.slice(0, 30), []);
    const dataB = useMemo(() => dataSmall.slice(10, 40), []);
    const data = useAltData ? dataB : dataA;
    const updateInfo = useCallback(() => {
      const instance = tableInstanceRef.current;
      if (!instance) return;
      const sorts = instance.state.sortBy.map(s => \`\${s.id} (\${s.desc ? 'desc' : 'asc'})\`).join(', ') || 'none';
      const filters = instance.state.filters.map(f => \`\${f.id}="\${f.value}"\`).join(', ') || 'none';
      const hidden = instance.state.hiddenColumns?.join(', ') || 'none';
      setStateInfo(\`Sorts: [\${sorts}] | Filters: [\${filters}] | Hidden: [\${hidden}]\`);
    }, []);
    const reactTableOptions = useMemo(() => ({
      autoResetSortBy: false,
      autoResetFilters: false,
      autoResetHiddenColumns: false,
      autoResetExpanded: false,
      autoResetGroupBy: false
    }), []);
    return <>
        <FlexBox style={{
        gap: '0.5rem',
        marginBlockEnd: '0.5rem'
      }} wrap={FlexBoxWrap.Wrap}>
          <Button onClick={() => {
          tableInstanceRef.current?.setSortBy([{
            id: 'name',
            desc: false
          }]);
          setTimeout(updateInfo, 50);
        }}>
            Sort Name (asc)
          </Button>
          <Button onClick={() => {
          tableInstanceRef.current?.setSortBy([]);
          setTimeout(updateInfo, 50);
        }}>
            Clear Sort
          </Button>
          <Button onClick={() => {
          tableInstanceRef.current?.setFilter('age', '3');
          setTimeout(updateInfo, 50);
        }}>
            Filter Age contains "3"
          </Button>
          <Button onClick={() => {
          tableInstanceRef.current?.setAllFilters([]);
          setTimeout(updateInfo, 50);
        }}>
            Clear Filters
          </Button>
          <Button onClick={() => {
          tableInstanceRef.current?.toggleHideColumn('friend.name');
          setTimeout(updateInfo, 50);
        }}>
            Toggle "Friend Name" visibility
          </Button>
          <Button onClick={() => {
          tableInstanceRef.current?.setHiddenColumns([]);
          setTimeout(updateInfo, 50);
        }}>
            Show All Columns
          </Button>
          <Button onClick={() => {
          tableInstanceRef.current?.resetResizing();
        }}>
            Reset Column Widths
          </Button>
          <Button design="Emphasized" onClick={() => setUseAltData(prev => !prev)}>
            Toggle Data Set ({useAltData ? 'B' : 'A'})
          </Button>
        </FlexBox>
        <AnalyticalTable {...args} data={data} columns={columns} sortable filterable groupable tableInstance={tableInstanceRef} reactTableOptions={reactTableOptions} visibleRows={8} header={\`Data Set: \${useAltData ? 'B' : 'A'} — Use buttons above to programmatically control the table\`} />
        <Text style={{
        marginBlockStart: '0.5rem',
        display: 'block'
      }}>
          {stateInfo || 'Click a button to see table state.'}
        </Text>
      </>;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render() {
    const [key, resetKey] = useReducer(k => k + 1, 0);
    const columns = useMemo<AnalyticalTableColumnDefinition[]>(() => [{
      Header: 'Name',
      accessor: 'name'
    }, {
      Header: 'Age',
      accessor: 'age',
      hAlign: TextAlign.End
    }, {
      Header: 'Friend Name',
      accessor: 'friend.name'
    }, {
      Header: 'Friend Age',
      accessor: 'friend.age',
      hAlign: TextAlign.End
    }], []);
    const data = useMemo(() => dataSmall.slice(0, 30), []);
    const reactTableOptions = useMemo(() => ({
      autoResetSortBy: false,
      autoResetFilters: false,
      autoResetHiddenColumns: false,
      initialState: {
        sortBy: [{
          id: 'age',
          desc: true
        }],
        filters: [{
          id: 'name',
          value: 'a'
        }],
        hiddenColumns: ['friend.age'],
        selectedRowIds: {
          0: true,
          2: true
        }
      }
    }), []);
    return <>
        <Button onClick={resetKey} style={{
        marginBlockEnd: '0.5rem'
      }}>
          Reset to Initial State (remount)
        </Button>
        <AnalyticalTable key={key} data={data} columns={columns} sortable filterable selectionMode={AnalyticalTableSelectionMode.Multiple} reactTableOptions={reactTableOptions} visibleRows={8} header='Initial: sorted by Age desc, filtered Name by "a", Friend Age hidden, rows 0 & 2 selected' />
      </>;
  }
}`,...U.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render(args) {
    const [dialogRow, setDialogRow] = useState<Record<string, any> | null>(null);
    const data = useMemo(() => dataSmall.slice(0, 20).map((row, i) => ({
      ...row,
      status: (['Positive', 'Negative', 'Critical', 'Information', 'None'] as const)[i % 5],
      description: \`This is a longer description for row \${i} that should be truncated with an ellipsis when the column is too narrow.\`
    })), []);
    const columns = useMemo<AnalyticalTableColumnDefinition[]>(() => [{
      Header: 'Name',
      accessor: 'name'
    }, {
      Header: 'Age',
      accessor: 'age',
      hAlign: TextAlign.End,
      // Lightweight cells don't need memo()
      Cell: ({
        value
      }) => <ObjectStatus state={value > 40 ? 'Critical' : 'Positive'}>{value}</ObjectStatus>
    }, {
      Header: 'Friend Comparison',
      id: 'friendComparison',
      Cell: FriendComparisonCell
    }, {
      Header: 'Description',
      accessor: 'description',
      // Use the textEllipsis class when custom elements should truncate
      Cell: ({
        value,
        webComponentsReactProperties
      }) => <span className={webComponentsReactProperties.classes.textEllipsis} title={value}>
              {value}
            </span>
    }, {
      Header: 'Notes',
      id: 'notes',
      // Stop horizontal arrow key propagation so caret movement works
      Cell: () => <Input onKeyDown={e => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
          e.stopPropagation();
        }
      }} />
    }, {
      Header: 'Details',
      id: 'details',
      // Prefer mounting dialogs outside the table over rendering one per cell
      Cell: ({
        row
      }) => <Button onClick={() => setDialogRow(row.original)}>Show</Button>
    }], []);
    return <>
        <AnalyticalTable {...args} data={data} columns={columns} visibleRows={8} header="Custom Cell renderers" />
        <Dialog open={!!dialogRow} onClose={() => setDialogRow(null)} headerText={dialogRow?.name ?? ''}>
          <FlexBox direction={FlexBoxDirection.Column} style={{
          padding: '1rem',
          gap: '0.5rem'
        }}>
            <Text>Age: {dialogRow?.age}</Text>
            <Text>Friend: {dialogRow?.friend?.name}</Text>
            <Text>Status: {dialogRow?.status}</Text>
          </FlexBox>
        </Dialog>
      </>;
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render(args) {
    const [sortInfo, setSortInfo] = useState('');
    const [filterVal, setFilterVal] = useState('');
    const columns = useMemo<AnalyticalTableColumnDefinition[]>(() => [{
      Header: 'Name (Custom Popover)',
      accessor: 'name',
      Popover: instance => {
        const {
          setOpen,
          openerId
        } = instance.popoverProps;
        return <Popover open opener={openerId} onClose={() => setOpen(false)}
        // Prevent clicks inside the popover from propagating to the column header,
        // which would re-open the popover immediately.
        onClick={e => e.stopPropagation()} headerText="Custom Column Menu">
                <FlexBox direction={FlexBoxDirection.Column} style={{
            padding: '0.5rem',
            gap: '0.5rem'
          }}>
                  <Button icon="sort-ascending" onClick={() => {
              instance.setSortBy([{
                id: 'name',
                desc: false
              }]);
              setSortInfo('Name: ascending');
              setOpen(false);
            }}>
                    Sort A → Z
                  </Button>
                  <Button icon="sort-descending" onClick={() => {
              instance.setSortBy([{
                id: 'name',
                desc: true
              }]);
              setSortInfo('Name: descending');
              setOpen(false);
            }}>
                    Sort Z → A
                  </Button>
                  <Input placeholder="Filter Name..." value={filterVal} onInput={e => {
              const val = e.target.value;
              setFilterVal(val);
              instance.setFilter('name', val || undefined);
            }} />
                  <Button icon="reset" onClick={() => {
              instance.setSortBy([]);
              instance.setAllFilters([]);
              setSortInfo('');
              setFilterVal('');
              setOpen(false);
            }}>
                    Reset All
                  </Button>
                </FlexBox>
              </Popover>;
      }
    }, {
      Header: 'Age',
      accessor: 'age',
      hAlign: TextAlign.End
    }, {
      Header: 'Friend Name',
      accessor: 'friend.name'
    }], [filterVal]);
    const data = useMemo(() => dataSmall.slice(0, 30), []);
    const reactTableOptions = useMemo(() => ({
      autoResetSortBy: false,
      autoResetFilters: false
    }), []);
    return <>
        <AnalyticalTable {...args} data={data} columns={columns} sortable filterable reactTableOptions={reactTableOptions} visibleRows={8} header='Click the "Name" column header to see the custom popover' />
        <Text style={{
        marginBlockStart: '0.5rem',
        display: 'block'
      }}>
          {sortInfo ? \`Sort: \${sortInfo}\` : 'Click the "Name (Custom Popover)" column header.'}
        </Text>
      </>;
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render(args) {
    const [selectionMode, setSelectionMode] = useState(AnalyticalTableSelectionMode.Multiple);
    const [selectionBehavior, setSelectionBehavior] = useState(AnalyticalTableSelectionBehavior.Row);
    const [lastEvent, setLastEvent] = useState('');
    const data = useMemo(() => dataSmall.slice(0, 20), []);
    const columns = useMemo<AnalyticalTableColumnDefinition[]>(() => [{
      Header: 'Name',
      accessor: 'name'
    }, {
      Header: 'Age',
      accessor: 'age',
      hAlign: TextAlign.End
    }, {
      Header: 'Friend Name',
      accessor: 'friend.name'
    }], []);
    const onRowSelect = useCallback(e => {
      const {
        row,
        isSelected,
        allRowsSelected,
        selectedRowIds
      } = e.detail;
      const selectedCount = Object.keys(selectedRowIds).length;
      if (row) {
        setLastEvent(\`Row "\${row.original.name}" \${isSelected ? 'selected' : 'deselected'}. Total selected: \${selectedCount}\`);
      } else {
        setLastEvent(\`Select All toggled. All selected: \${allRowsSelected}. Total selected: \${selectedCount}\`);
      }
    }, []);
    return <>
        <FlexBox style={{
        gap: '1rem',
        marginBlockEnd: '0.5rem'
      }} alignItems={FlexBoxAlignItems.End}>
          <div>
            <label htmlFor="sel-mode">selectionMode</label>
            <Select id="sel-mode" value={selectionMode} onChange={e => setSelectionMode(e.detail.selectedOption.getAttribute('value') as AnalyticalTableSelectionMode)}>
              {Object.values(AnalyticalTableSelectionMode).map(mode => <Option key={mode} value={mode}>
                  {mode}
                </Option>)}
            </Select>
          </div>
          <div>
            <label htmlFor="sel-behavior">selectionBehavior</label>
            <Select id="sel-behavior" value={selectionBehavior} onChange={e => setSelectionBehavior(e.detail.selectedOption.getAttribute('value') as AnalyticalTableSelectionBehavior)}>
              {Object.values(AnalyticalTableSelectionBehavior).map(behavior => <Option key={behavior} value={behavior}>
                  {behavior}
                </Option>)}
            </Select>
          </div>
        </FlexBox>
        <AnalyticalTable {...args} data={data} columns={columns} selectionMode={selectionMode} selectionBehavior={selectionBehavior} onRowSelect={onRowSelect} header={\`selectionMode: \${selectionMode} | selectionBehavior: \${selectionBehavior}\`} />
        <Text style={{
        marginBlockStart: '0.5rem',
        display: 'block'
      }}>
          {lastEvent || 'Click a row or selection checkbox to see event details.'}
        </Text>
      </>;
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render(args) {
    const tableInstanceRef = useRef(null);
    const [sortBy, setSortByState] = useState<{
      id: string;
      desc: boolean;
    }[]>([]);
    const columns = useMemo<AnalyticalTableColumnDefinition[]>(() => [{
      Header: 'Name',
      accessor: 'name',
      enableMultiSort: true
    }, {
      Header: 'Age',
      accessor: 'age',
      hAlign: TextAlign.End,
      enableMultiSort: true
    }, {
      Header: 'Friend Name',
      accessor: 'friend.name',
      enableMultiSort: true
    }, {
      Header: 'Friend Age',
      accessor: 'friend.age',
      hAlign: TextAlign.End,
      enableMultiSort: true
    }], []);
    const data = useMemo(() => dataSmall.slice(0, 30), []);
    const reactTableOptions = useMemo(() => ({
      autoResetSortBy: false
    }), []);
    const onSort = useCallback(e => {
      const {
        column,
        sortDirection
      } = e.detail;
      setSortByState(prev => {
        if (sortDirection === 'clear') {
          return prev.filter(s => s.id !== column.id);
        }
        const desc = sortDirection === 'desc';
        const idx = prev.findIndex(s => s.id === column.id);
        if (idx >= 0) {
          const next = [...prev];
          next[idx] = {
            id: column.id,
            desc
          };
          return next;
        }
        return [...prev, {
          id: column.id,
          desc
        }];
      });
    }, []);
    return <>
        <FlexBox style={{
        gap: '0.5rem',
        marginBlockEnd: '0.5rem'
      }} wrap={FlexBoxWrap.Wrap}>
          <Button onClick={() => {
          tableInstanceRef.current?.setSortBy([{
            id: 'age',
            desc: false
          }, {
            id: 'name',
            desc: false
          }]);
          setSortByState([{
            id: 'age',
            desc: false
          }, {
            id: 'name',
            desc: false
          }]);
        }}>
            Sort: Age ↑, Name ↑
          </Button>
          <Button onClick={() => {
          tableInstanceRef.current?.setSortBy([{
            id: 'friend.name',
            desc: true
          }, {
            id: 'friend.age',
            desc: false
          }]);
          setSortByState([{
            id: 'friend.name',
            desc: true
          }, {
            id: 'friend.age',
            desc: false
          }]);
        }}>
            Sort: Friend Name ↓, Friend Age ↑
          </Button>
          <Button onClick={() => {
          tableInstanceRef.current?.setSortBy([]);
          setSortByState([]);
        }}>
            Clear Sort
          </Button>
        </FlexBox>
        <AnalyticalTable {...args} data={data} columns={columns} sortable onSort={onSort} reactTableOptions={reactTableOptions} tableInstance={tableInstanceRef} visibleRows={8} header="Hold Ctrl/Cmd and click column headers to sort by multiple columns" />
        <Text style={{
        marginBlockStart: '0.5rem',
        display: 'block'
      }}>
          {sortBy.length > 0 ? \`Sort priorities: \${sortBy.map((s, i) => \`\${i + 1}. \${s.id} (\${s.desc ? 'desc' : 'asc'})\`).join(' → ')}\` : 'No active sort. Use the column header menu or the buttons above.'}
        </Text>
      </>;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render(args) {
    const [lastResize, setLastResize] = useState('');
    const data = useMemo(() => [{
      name: 'A very long name that will exceed the column width',
      age: 28,
      description: 'Short'
    }, {
      name: 'Bob',
      age: 3500,
      description: 'A medium length description for this row'
    }, {
      name: 'Charlie Brown',
      age: 42,
      description: 'Another description that is quite long and should cause the column to expand when auto-resized'
    }, {
      name: 'Di',
      age: 9,
      description: 'Tiny'
    }, {
      name: 'Eve Martinez de la Cruz',
      age: 26123,
      description: 'Medium text here'
    }], []);
    const columns = useMemo<AnalyticalTableColumnDefinition[]>(() => [{
      Header: 'Name',
      accessor: 'name',
      autoResizable: true
    }, {
      Header: 'Age',
      accessor: 'age',
      hAlign: TextAlign.End,
      autoResizable: true
    }, {
      Header: 'Description',
      accessor: 'description',
      autoResizable: true
    }], []);
    const onAutoResize = useCallback(e => {
      setLastResize(\`Column "\${e.detail.columnId}" auto-resized to \${Math.round(e.detail.width)}px\`);
    }, []);
    return <>
        <AnalyticalTable {...args} data={data} columns={columns} onAutoResize={onAutoResize} visibleRows={5} header="Double-click a column resizer to auto-fit width to content" />
        <Text style={{
        marginBlockStart: '0.5rem',
        display: 'block'
      }}>
          {lastResize || 'Double-click a column border to auto-resize.'}
        </Text>
      </>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <>
        <style>{\`
          .feature-example-header-cell { background-color: lightgrey; }
          .feature-example-body-cell { background-color: lightblue; }
        \`}</style>
        <AnalyticalTable {...args} data={dataSmall} columns={columnClassNameColumns} visibleRows={5} />
      </>;
  }
}`,...X.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['custom'],
  render() {
    return <>
        <style>{\`
          /* Removes only the outer container frame. The class is applied to the table's
             root element, so it also covers the sibling vertical scrollbar. */
          .at-borderless-container {
            --_ui5wcr-AnalyticalTable-OuterBorderBlock: none;
            --_ui5wcr-AnalyticalTable-OuterBorderInline: none;
            --sapList_TableFooterBorder: transparent;
          }
          .at-borderless-container [data-component-name="AnalyticalTableContainer"]::after {
            display: none;
          }
        \`}</style>
        <AnalyticalTable className="at-borderless-container" data={dataSmall} columns={borderlessColumns} selectionMode={AnalyticalTableSelectionMode.Multiple} visibleRows={5} />
      </>;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['custom'],
  render() {
    return <>
        <style>{\`
          /* Removes the vertical dividers between columns (header + body) while keeping
             the horizontal row separators. */
          .at-no-vertical-cell-borders [role="columnheader"],
          .at-no-vertical-cell-borders [data-column-id-cell] {
            border-inline-end: none;
          }
        \`}</style>
        <AnalyticalTable className="at-no-vertical-cell-borders" data={dataSmall} columns={borderlessColumns} selectionMode={AnalyticalTableSelectionMode.Multiple} visibleRows={5} />
      </>;
  }
}`,...$.parameters?.docs?.source}}}})))()}export{Re as C,N as S,H as _,B as a,q as b,M as c,F as d,U as f,$ as g,j as h,X as i,K as l,J as m,Y as n,R as o,L as p,Q as r,G as s,Pe as t,V as u,z as v,I as x,P as y};