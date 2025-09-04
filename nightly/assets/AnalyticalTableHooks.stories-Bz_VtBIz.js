import{aj as O,f2 as G,r as p,f3 as K,j as t,i as H,B as E,v as D}from"./iframe-BGPLLWda.js";import{d as V}from"./Friends500-CRbR9XAn.js";import{d as X,A as b,e as P,g as Y,m as $,f as w,h as q}from"./AnalyticalTable.stories-TS6DhnPd.js";import{a as Q}from"./Input-CpVfGSwY.js";import{p as Z}from"./paper-plane-BMGxioyT.js";import{C as F}from"./index-BxdEUa6a.js";import{I as A}from"./index-WIExqiEM.js";import{L as x}from"./index-DatG_EGp.js";import{S as ee}from"./index-AkNk4559.js";import{T as ne}from"./index-BUzvoCUF.js";import{T as j}from"./index-Di9vvrRS.js";import{F as R,c as L,a as te}from"./index-BYQsmpt9.js";import{d as ae}from"./debounce-D7W5PopO.js";const W=e=>{const o=O("@ui5/webcomponents").getText(G),a=p.useCallback((l,{cell:{value:s}})=>typeof s!="number"&&!s?[l,{"aria-label":`${l["aria-label"]} ${o}`}]:l,[o]);e.getCellProps.push(a)};W.pluginName="useAnnounceEmptyCells";const se=["[ui5-checkbox]","[ui5-switch]","[ui5-radio-button]","[ui5-rating-indicator]","[ui5-segmented-button]","[ui5-select]","[ui5-slider]"],S=e=>{const n=O("@ui5/webcomponents-react"),o=p.useCallback((a,{cell:l,instance:s})=>{const{dispatch:c,state:r}=s,{interactiveElementName:i}=l.column,d=typeof i=="function"?i(l):i,u=(i?n.getText(K,d):"")+" "+a["aria-label"];return[a,{onKeyDown:m=>{if(r.cellContentTabIndex===0&&X.has(m.key)&&!m.key.includes("Arrow")&&m.preventDefault(),m.key==="F2"){if(m.currentTarget===m.target&&i){const f=re(m.target);f&&(c({type:"CELL_CONTENT_TAB_INDEX",payload:0}),m.currentTarget.tabIndex=-1,requestAnimationFrame(()=>{f.focus()}))}m.currentTarget!==m.target&&(c({type:"CELL_CONTENT_TAB_INDEX",payload:-1}),m.currentTarget.tabIndex=0,m.currentTarget.focus())}},onFocus:m=>{typeof a.onFocus=="function"&&a.onFocus(m),m.currentTarget!==m.target?c({type:"CELL_CONTENT_TAB_INDEX",payload:0}):c({type:"CELL_CONTENT_TAB_INDEX",payload:-1})},"aria-label":u}]},[n]);e.getCellProps.push(o),e.stateReducers.push(oe),e.useInstanceBeforeDimensions.push(ie)};S.pluginName="useF2CellEdit";S.useCallbackRef=e=>{const n=e.state.cellContentTabIndex===-1?"-1":"0";return p.useCallback(o=>{if(o){const a=l=>{typeof l.getFocusDomRefAsync=="function"?l.getFocusDomRefAsync().then(s=>a(s)).catch(()=>{}):l.setAttribute("tabindex",n)};a(o)}},[n])};const oe=(e,n,o)=>{const{payload:a,type:l}=n;return l==="CELL_CONTENT_TAB_INDEX"?{...e,cellContentTabIndex:a}:e};function re(e){if(!e)return null;function n(o){for(const a of o.children){const l=getComputedStyle(a);if(a.disabled||l.display==="none"||l.visibility==="hidden")continue;const s=["a[href]","button","input","textarea","select",'[tabindex]:not([tabindex="-1"])',...se];if(a.matches(s.join(",")))return a;if(a.shadowRoot){const r=n(a.shadowRoot);if(r)return r}const c=n(a);if(c)return c}return null}return n(e)}function ie(e){p.useEffect(()=>{e.dispatch({type:"CELL_CONTENT_TAB_INDEX",payload:-1})},[e.dispatch])}const le=(e,n)=>{let o=e.lastIndexOf(".");o===-1&&(o=1/0);const a=e.slice(0,o);return[n[a],o]},z=e=>{const n={},o=e.lastIndexOf(".");return n[e]=!0,o!==-1&&Object.assign(n,z(e.slice(0,o))),n},ce=(e,n,o)=>{const a={};let l="";const s=(c,r=null)=>{for(const i of c)if(i.subRows.length>0)s(i.subRows,i.id);else if(r!==null&&l!==r){l=r;const d=u=>{const[g,h]=le(u,n),m=g.subRows.filter(C=>o.selectedRowIds[C.id]),f=g.subRows.length===m.length;if(m.length>0&&!f){const C=g.id;Object.assign(a,z(C));return}h!==1/0&&d(g.id)};d(i.id)}};return s(e),a},B=e=>{const n=(s,{row:c,instance:r})=>{let i;return r.isAllRowsSelected?i=!1:i=r?.state?.indeterminateRows?.[c.id]??!1,s.checked&&!r.state.selectedRowIds[c.id]&&c.toggleRowSelected(!0),[s,{indeterminate:i,checked:i?!0:s.checked}]},o=(s,c,r,i)=>{const{rowsById:d,state:u,rows:g}=i;if(c.type==="INDETERMINATE_ROW_IDS"){if(c.payload==="reset")return{...s,indeterminateRows:{}};const h=ce(g,d,u);return{...s,indeterminateRows:h}}},a=s=>{const{data:c,dispatch:r,rowsById:i,state:{selectedRowIds:d,indeterminateRows:u},webComponentsReactProperties:{selectionMode:g,selectionBehavior:h,isTreeTable:m}}=s;p.useEffect(()=>{m&&g===b.Multiple&&h!==P.RowOnly&&Object.keys(d).length&&Object.keys(i).length!==Object.keys(d).length?r({type:"INDETERMINATE_ROW_IDS"}):typeof u=="object"&&Object.keys(u).length&&r({type:"INDETERMINATE_ROW_IDS",payload:"reset"})},[c,d,m,g,h]),p.useEffect(()=>{typeof e=="function"&&u&&e({indeterminateRowsById:u,tableInstance:s})},[u])},l=s=>{s.getToggleRowSelectedProps.push(n),s.stateReducers.push(o),s.useInstanceAfterData.push(a)};return l.pluginName="useIndeterminate",l};try{B.displayName="useIndeterminateRowSelection",B.__docgenInfo={description:"A plugin hook that marks parent rows as indeterminate if a child row is selected in `Multiple` mode.\nWhen using this hook, it is recommended to also select all sub-rows when selecting a row. (`reactTableOptions={{ selectSubRows: true }}`)\n\n__Note:__ The `indeterminate` state has a higher priority than the `selected` state. Therefore, a row can be selected and indeterminate at the same time. This can for example happen, if `selectSubRows: true` is set and a row with sub-rows is selected and then a sub-row is unselected.\n\n__Note:__ This hook has to traverse the whole data tree on each selection, which can lead to performance degradation with large datasets. Please use with caution!",displayName:"useIndeterminateRowSelection",props:{}}}catch{}try{B.displayName="useIndeterminateRowSelection",B.__docgenInfo={description:"A plugin hook that marks parent rows as indeterminate if a child row is selected in `Multiple` mode.\nWhen using this hook, it is recommended to also select all sub-rows when selecting a row. (`reactTableOptions={{ selectSubRows: true }}`)\n\n__Note:__ The `indeterminate` state has a higher priority than the `selected` state. Therefore, a row can be selected and indeterminate at the same time. This can for example happen, if `selectSubRows: true` is set and a row with sub-rows is selected and then a sub-row is unselected.\n\n__Note:__ This hook has to traverse the whole data tree on each selection, which can lead to performance degradation with large datasets. Please use with caution!",displayName:"useIndeterminateRowSelection",props:{}}}catch{}const de=(e="isSelected")=>{const n=({flatRows:a,toggleRowSelected:l})=>{p.useEffect(()=>{a.forEach(({id:s,original:c})=>{e in c&&l(s,c.isSelected)})},[a,e])},o=a=>{a.useInstanceAfterData.push(n)};return o.pluginName="useManualRowSelect",o},ue=(e,n)=>{const o=ae(e,n?.wait??100),a=s=>{const{state:c,columns:r}=s,{columnResizing:i}=c,{isResizingColumn:d,columnWidths:u}=i,g=p.useRef(void 0);p.useEffect(()=>{if(d&&n?.liveUpdate){const h=r.find(m=>m.id===d);o({columnWidth:u[d],header:h})}},[i,n?.liveUpdate,r]),p.useEffect(()=>{if(n?.liveUpdate)return()=>o.cancel()},[n?.liveUpdate]),p.useEffect(()=>{if(!n?.liveUpdate){const h=r.find(m=>m.id===g.current);d&&(g.current=d),!d&&g.current&&e({columnWidth:u[g.current],header:h})}},[i,n?.liveUpdate,r])},l=s=>{s.useFinalInstance.push(a)};return l.pluginName="useOnColumnResize",l},me=e=>{const n=o=>{o.stateReducers.push((a,l)=>{if(l.type==="toggleSortBy"){if(a.sortBy.length<=1)return a;{const s=[...a.sortBy],c=e.flatMap(r=>{const i=s.findIndex(d=>d.id===r);if(i!==-1){const d=s[i];return s.splice(i,1),[d]}return[]});return{...a,sortBy:[...c,...s]}}}return a})};return n.pluginName="useOrderedMultiSort",n},ge={verticalAlign:"middle"},pe=(e,{instance:{webComponentsReactProperties:{selectionMode:n}}})=>{if(e.key==="header___ui5wcr__internal_selection_column"&&n===b.Multiple){const o={...e.style,cursor:"auto"};return[e,{onClick:void 0,onKeyDown:void 0,title:void 0,style:o}]}return e},fe=e=>e.map(n=>n.id==="__ui5wcr__internal_selection_column"?{...n,Cell:o=>{const{webComponentsReactProperties:a,row:l}=o;return l.disableSelect===!0?l.isGrouped&&a.selectionMode===b.Single?null:a.selectionMode===b.Single?t.jsx("div",{onClick:void 0,"data-name":"internal_selection_column"}):t.jsx(F,{...l.getToggleRowSelectedProps(),disabled:!0,style:ge,"data-name":"internal_selection_column",tabIndex:-1}):n.Cell(o)},Header:()=>null}:n),y=e=>{const n=typeof e=="function"?e:r=>Y(r.original,e,void 0),o=(r,{row:i,instance:d})=>{const{webComponentsReactProperties:u}=d;return n(i)===!0?(i.disableSelect=!0,{...r,onClick:f=>{typeof u.onRowClick=="function"&&u.onRowClick(H(f,{row:i}))},onKeyDown:f=>{(f.code==="Enter"||f.code==="Space")&&(f.preventDefault(),f.code==="Enter"&&typeof u.onRowClick=="function"&&u.onRowClick(H(f,{row:i})))},onKeyUp:f=>{f.code==="Space"&&(f.preventDefault(),typeof u.onRowClick=="function"&&u.onRowClick(H(f,{row:i})))},className:u.classes.tr}):r},a=r=>[...r,e],l=(r,{cell:{row:i,column:d},instance:u})=>{const{selectionMode:g,selectionBehavior:h}=u.webComponentsReactProperties;if(n(i)===!0&&g!==b.None&&(h!==P.RowSelector||d.id==="__ui5wcr__internal_selection_column")){const{"aria-label":m,...f}=r;if(d.id==="__ui5wcr__internal_selection_column"){const J={...r.style,cursor:"auto"};return{...f,"aria-disabled":!0,style:J}}const{"aria-selected":U,...C}=f;return C}return r},s=(r,{row:i})=>{if(n(i)===!0){const{title:d,...u}=r;return u}return r},c=r=>{r.getHeaderProps.push(pe),r.getRowProps.push(o),r.columns.push(fe),r.columnsDeps.push(a),r.getCellProps.push(l),r.getToggleRowSelectedProps.push(s)};return c.pluginName="useRowDisableSelection",c};try{y.displayName="useRowDisableSelection",y.__docgenInfo={description:`A plugin hook for disabling row selection of specific rows.

__Note:__ The "Select All" checkbox is not available with this hook.`,displayName:"useRowDisableSelection",props:{}}}catch{}try{y.displayName="useRowDisableSelection",y.__docgenInfo={description:`A plugin hook for disabling row selection of specific rows.

__Note:__ The "Select All" checkbox is not available with this hook.`,displayName:"useRowDisableSelection",props:{}}}catch{}const he=[{name:"Owens Glover",age:22,friend:{name:"Daisy Giles",age:33},status:"Negative"},{name:"Waller Nguyen",age:56,friend:{name:"Lola Banks",age:55},status:"None"},{name:"Bowen Mckay",age:32,friend:{name:"Graham Wells",age:51},status:"Information"},{name:"Freida Weeks",age:68,friend:{name:"Lee Johnson",age:61},status:"Negative"},{name:"England Whitehead",age:82,friend:{name:"Phillips Merritt",age:19},status:"Information"},{name:"Alissa Duke",age:43,friend:{name:"Rosella Slater",age:58},status:"None"},{name:"Randolph Grant",age:76,friend:{name:"Madge Mitchell",age:48},status:"Critical"},{name:"Malone Hampton",age:42,friend:{name:"Landry Hancock",age:33},status:"Negative"},{name:"Lorna Hinton",age:27,friend:{name:"Maddox House",age:67},status:"None"},{name:"Janis Wade",age:19,friend:{name:"Nell Hines",age:82},status:"Negative"},{name:"Rose Vance",age:47,friend:{name:"Jacobson Wilcox",age:69},status:"Information"},{name:"Rowe Hamilton",age:85,friend:{name:"Vasquez Craft",age:79},status:"Critical"},{name:"Trisha Ellis",age:42,friend:{name:"Jacobs Ramsey",age:41},status:"Positive"},{name:"Bowers Rowe",age:57,friend:{name:"Brigitte Buckner",age:19},status:"None"},{name:"Gamble Rice",age:85,friend:{name:"Manning Jenkins",age:57},status:"Negative"},{name:"Letitia Finch",age:54,friend:{name:"Silva Fulton",age:52},status:"Information"},{name:"Elinor Middleton",age:71,friend:{name:"Hines Mckenzie",age:33},status:"None"},{name:"Jeannine Lopez",age:38,friend:{name:"Benjamin Rodriguez",age:76},status:"Negative"},{name:"Natasha Simon",age:73,friend:{name:"Simon Morin",age:20},status:"Negative"},{name:"Marquita Morrison",age:61,friend:{name:"Mitzi Blake",age:80},status:"Negative"},{name:"Lula Mason",age:49,friend:{name:"Holmes York",age:31},status:"Information"},{name:"Ginger Strong",age:79,friend:{name:"Higgins Shannon",age:25},status:"None"},{name:"Reeves Finley",age:84,friend:{name:"Sheila Hickman",age:25},status:"None"},{name:"Reilly Mcpherson",age:34,friend:{name:"Horton Smith",age:37},status:"Critical"},{name:"Moreno Moore",age:39,friend:{name:"Lacey Fox",age:55},status:"None"},{name:"Santana Gilliam",age:20,friend:{name:"Baird Barton",age:68},status:"Critical"},{name:"Deidre Richmond",age:45,friend:{name:"Newman Adkins",age:81},status:"Positive"},{name:"Willis Wise",age:73,friend:{name:"Haynes Dominguez",age:47},status:"Negative"},{name:"Wilson Hunter",age:49,friend:{name:"Greene Wood",age:24},status:"None"},{name:"Nancy Klein",age:54,friend:{name:"Callie Foster",age:64},status:"Negative"},{name:"Woods Porter",age:74,friend:{name:"Mercer Perry",age:62},status:"None"},{name:"Hopkins Schmidt",age:34,friend:{name:"Mcfadden David",age:51},status:"Negative"},{name:"Yang Lloyd",age:16,friend:{name:"Bates Barker",age:84},status:"None"},{name:"Vinson Ferguson",age:50,friend:{name:"Dejesus Owens",age:47},status:"Negative"},{name:"Flores Jones",age:32,friend:{name:"Anita Stark",age:47},status:"Positive"},{name:"Jennings Pope",age:39,friend:{name:"Ellen Avila",age:50},status:"Information"},{name:"Bettie Fernandez",age:61,friend:{name:"Lilian Juarez",age:61},status:"Information"},{name:"Sherri Abbott",age:26,friend:{name:"Floyd Clarke",age:51},status:"Negative"},{name:"Barrett Cameron",age:47,friend:{name:"Barton Waller",age:45},status:"None"},{name:"Young Frazier",age:26,friend:{name:"Hardin Branch",age:47},status:"Negative"},{name:"Cheri Obrien",age:75,friend:{name:"Karyn Merrill",age:81},status:"Positive"},{name:"Anne Hayden",age:61,friend:{name:"Joanne Powell",age:79},status:"Negative"},{name:"Hart Cortez",age:16,friend:{name:"Gross Beard",age:82},status:"Information"},{name:"Mallory Caldwell",age:57,friend:{name:"Curry Leonard",age:68},status:"None"},{name:"Snider Eaton",age:52,friend:{name:"Lucia Santos",age:47},status:"Information"},{name:"Leticia Tillman",age:60,friend:{name:"Langley Nielsen",age:80},status:"Negative"},{name:"Kemp Workman",age:35,friend:{name:"Calderon Mcleod",age:30},status:"Information"},{name:"Campos Leach",age:75,friend:{name:"Savannah Hogan",age:36},status:"Negative"},{name:"Colon Dunn",age:33,friend:{name:"Lily Love",age:73},status:"Negative"},{name:"Koch Henson",age:60,friend:{name:"Ola Welch",age:24},status:"Positive"}],be=[{name:"Owens Glover",age:22,friend:{name:"Daisy Giles",age:33},status:"Negative",isSelected:!0},{name:"Waller Nguyen",age:56,friend:{name:"Lola Banks",age:55},status:"None",isSelected:!0},{name:"Bowen Mckay",age:32,friend:{name:"Graham Wells",age:51},status:"Information"},{name:"Freida Weeks",age:68,friend:{name:"Lee Johnson",age:61},status:"Negative"},{name:"England Whitehead",age:82,friend:{name:"Phillips Merritt",age:19},status:"Information",isSelected:!0},{name:"Alissa Duke",age:43,friend:{name:"Rosella Slater",age:58},status:"None"},{name:"Randolph Grant",age:76,friend:{name:"Madge Mitchell",age:48},status:"Critical"},{name:"Malone Hampton",age:42,friend:{name:"Landry Hancock",age:33},status:"Negative"},{name:"Lorna Hinton",age:27,friend:{name:"Maddox House",age:67},status:"None"},{name:"Janis Wade",age:19,friend:{name:"Nell Hines",age:82},status:"Negative",isSelected:!0},{name:"Rose Vance",age:47,friend:{name:"Jacobson Wilcox",age:69},status:"Information"},{name:"Rowe Hamilton",age:85,friend:{name:"Vasquez Craft",age:79},status:"Critical"},{name:"Trisha Ellis",age:42,friend:{name:"Jacobs Ramsey",age:41},status:"Positive"},{name:"Bowers Rowe",age:57,friend:{name:"Brigitte Buckner",age:19},status:"None"},{name:"Gamble Rice",age:85,friend:{name:"Manning Jenkins",age:57},status:"Negative",isSelected:!0},{name:"Letitia Finch",age:54,friend:{name:"Silva Fulton",age:52},status:"Information"},{name:"Elinor Middleton",age:71,friend:{name:"Hines Mckenzie",age:33},status:"None"},{name:"Jeannine Lopez",age:38,friend:{name:"Benjamin Rodriguez",age:76},status:"Negative",isSelected:!0},{name:"Natasha Simon",age:73,friend:{name:"Simon Morin",age:20},status:"Negative"},{name:"Marquita Morrison",age:61,friend:{name:"Mitzi Blake",age:80},status:"Negative"},{name:"Lula Mason",age:49,friend:{name:"Holmes York",age:31},status:"Information"},{name:"Ginger Strong",age:79,friend:{name:"Higgins Shannon",age:25},status:"None"},{name:"Reeves Finley",age:84,friend:{name:"Sheila Hickman",age:25},status:"None",isSelected:!0},{name:"Reilly Mcpherson",age:34,friend:{name:"Horton Smith",age:37},status:"Critical"},{name:"Moreno Moore",age:39,friend:{name:"Lacey Fox",age:55},status:"None"}],we={...$,title:"Data Display / AnalyticalTable / Plugin Hooks",tags:["excludeFromSidebar","package:@ui5/webcomponents-react"]},Se=[W],N={args:{data:[{age:void 0,friend:{name:null,age:0},status:"Error"},...he],visibleRows:5},render(e){return t.jsx(w,{columns:e.columns,data:e.data,visibleRows:e.visibleRows,tableHooks:Se})}},Re=e=>e.original.age<40,ye=[y(Re)],Ce=[y("disableSelection")],k={args:{data:V.map(e=>({...e,disableSelection:Math.random()<.5})),selectionMode:b.Multiple},render:e=>{const[n,o]=p.useState(!0);return t.jsxs(t.Fragment,{children:[t.jsx(j,{onClick:()=>{o(!0)},pressed:n,children:"with function parameter"}),t.jsx(j,{onClick:()=>{o(!1)},pressed:!n,children:"with string parameter"}),n?t.jsx(w,{data:e.data,columns:e.columns,selectionMode:e.selectionMode,tableHooks:ye,visibleRows:10,header:"All under 40 are not selectable"}):t.jsx(w,{data:e.data,columns:e.columns,selectionMode:e.selectionMode,selectionBehavior:e.selectionBehavior,tableHooks:Ce,visibleRows:10,header:'All with "disableSelection: true" are not selectable'})]})}},xe=[B()],v={render:e=>{const[n,o]=p.useReducer(a=>!a,!0);return t.jsxs(t.Fragment,{children:[t.jsx(j,{onClick:o,pressed:n,children:`${n?"Don't ":""}Select Sub-Rows`}),t.jsx(w,{selectionMode:b.Multiple,data:q,columns:e.columns,isTreeTable:!0,tableHooks:xe,reactTableOptions:{selectSubRows:n}})]})}},Ne=[de("isSelected")],I={args:{data:be},render:e=>{const[n,o]=p.useReducer(s=>!s,!0),[a,l]=p.useReducer(s=>{const[,...c]=s;return s[0].isSelected?[{...s[0],isSelected:!1},...c]:[{...s[0],isSelected:!0},...c]},e.data);return t.jsxs(t.Fragment,{children:[t.jsxs(E,{onClick:l,children:["Toggle ",t.jsx("code",{children:"isSelected"})," of 1st row"]}),t.jsx("br",{}),t.jsx(x,{children:"Clicking this button will refresh the data array passed to the `data` prop."}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(w,{selectionMode:b.Multiple,data:a,columns:e.columns,tableHooks:Ne}),t.jsx(E,{onClick:o,children:"Show first entries in data array"}),!n&&t.jsxs(R,{direction:"Column",children:[t.jsx("span",{children:JSON.stringify(a[0],null,2)}),t.jsx("span",{children:JSON.stringify(a[1],null,2)}),t.jsx("span",{children:JSON.stringify(a[2],null,2)}),t.jsx("span",{children:JSON.stringify(a[3],null,2)}),t.jsx("span",{children:JSON.stringify(a[4],null,2)}),t.jsx("span",{children:"..."})]})]})}},_={render:e=>{const[n,o]=p.useState({}),[a,l]=p.useState(!1),[s,c]=p.useState(100),r=g=>{l(g.target.checked)},i=g=>{c(parseInt(g.target.value))},d=p.useCallback(g=>{o(g)},[o]),u=p.useMemo(()=>[ue(d,{liveUpdate:a,wait:s})],[d,a,s]);return t.jsxs(t.Fragment,{children:[t.jsx(w,{extension:t.jsxs(t.Fragment,{children:[t.jsxs(R,{alignItems:L.Center,children:[t.jsx(x,{children:"liveUpdate: "}),t.jsx(F,{onChange:r,checked:a})]}),t.jsxs(R,{alignItems:L.Center,children:[t.jsx(x,{children:"wait: "}),t.jsx(A,{onInput:i,type:Q.Number,value:`${s}`})]}),t.jsx("br",{})]}),data:e.data,columns:e.columns,tableHooks:u}),!!Object.keys(n).length&&t.jsxs(R,{direction:te.Column,children:[t.jsx("br",{}),t.jsx(D,{children:"Last fired callback of changed column:"}),t.jsx("br",{}),t.jsxs(R,{children:[t.jsx(x,{children:"Column:"}),t.jsx(D,{children:n.header.id})]}),t.jsxs(R,{children:[t.jsx(x,{children:"Width:"}),t.jsx(D,{children:n.columnWidth})]})]})]})}},ke=[{Header:"Name",accessor:"name",enableMultiSort:!0},{Header:"Age",accessor:"age",enableMultiSort:!0},{Header:"Name 2",accessor:"name2",enableMultiSort:!0},{Header:"Age 2",accessor:"age2",enableMultiSort:!0}],ve=[{name:"Peter",age:40,name2:"Alissa",age2:18},{name:"Kristen",age:40,name2:"Randolph",age2:21},{name:"Peter",age:30,name2:"Rose",age2:90},{name:"Peter",age:70,name2:"Rose",age2:22},{name:"Kristen",age:60,name2:"Willis",age2:80},{name:"Kristen",age:20,name2:"Alissa",age2:80},{name:"Graham",age:40,name2:"Alissa",age2:80},{name:"Peter",age:65,name2:"Rose",age2:26},{name:"Graham",age:65,name2:"Rose",age2:26},{name:"Graham",age:65,name2:"Willis",age2:26},{name:"Graham",age:62,name2:"Willis",age2:26}],T={args:{orderedIds:["name","name2","age","age2"]},argTypes:{orderedIds:{control:"array",description:`Defines the sort priority when sorting by multiple columns, starting with the first column ID.

**Note:** Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column.`}},render(e){const n=p.useMemo(()=>[me(e.orderedIds)],[e.orderedIds]);return t.jsx(w,{columns:ke,data:ve,sortable:!0,tableHooks:n})}},Ie=[{Header:"Input",id:"input",Cell:e=>{const n=S.useCallbackRef(e);return t.jsx(A,{ref:n})},interactiveElementName:"Input"},{Header:"Input & Button",id:"input_btn",Cell:e=>{const n=S.useCallbackRef(e);return t.jsxs(t.Fragment,{children:[t.jsx(A,{ref:n}),t.jsx(E,{ref:n,icon:Z,tooltip:"Submit",accessibleName:"Submit"})]})},interactiveElementName:"Input and Button"},{Header:"Text",accessor:"name"},{Header:"Button",id:"btn",Cell:e=>{const n=S.useCallbackRef(e);return t.jsx(E,{ref:n,children:"Button"})},interactiveElementName:()=>"Button"},{Header:"Non-interactive custom content",accessor:"friend.name",Cell:e=>t.jsx(ne,{children:e.value})},{Header:"Switch or CheckBox",id:"switch_checkbox",Cell:e=>{const n=S.useCallbackRef(e);return e.row.index%2?t.jsx(F,{ref:n,accessibleName:"Dummy CheckBox"}):t.jsx(ee,{ref:n,accessibleName:"Dummy Switch"})},interactiveElementName:e=>e.row.index%2?"CheckBox":"Switch"}],_e=[S],M={render(e){return t.jsx(w,{data:e.data.slice(0,10),columns:Ie,tableHooks:_e,visibleRows:5})}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    data: [{
      age: undefined,
      friend: {
        name: null,
        age: 0
      },
      status: 'Error'
    }, ...dataSmall],
    visibleRows: 5
  },
  render(args) {
    return <AnalyticalTable columns={args.columns} data={args.data} visibleRows={args.visibleRows} tableHooks={tableHooksEmptyCells} />;
  }
}`,...N.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    data: dataLarge.map(item => ({
      ...item,
      disableSelection: Math.random() < 0.5
    })),
    selectionMode: AnalyticalTableSelectionMode.Multiple
  },
  render: args => {
    const [isFunc, setIsFunc] = useState(true);
    return <>
        <ToggleButton onClick={() => {
        setIsFunc(true);
      }} pressed={isFunc}>
          with function parameter
        </ToggleButton>
        <ToggleButton onClick={() => {
        setIsFunc(false);
      }} pressed={!isFunc}>
          with string parameter
        </ToggleButton>
        {isFunc ? <AnalyticalTable data={args.data} columns={args.columns} selectionMode={args.selectionMode} tableHooks={tableHooksDisableRowSel} visibleRows={10} header="All under 40 are not selectable" /> : <AnalyticalTable data={args.data} columns={args.columns} selectionMode={args.selectionMode} selectionBehavior={args.selectionBehavior} tableHooks={tableHooksDisableRowSel1} visibleRows={10} header={\`All with "disableSelection: true" are not selectable\`} />}
      </>;
  }
}`,...k.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectSubRows, setSelectSubRows] = useReducer(prev => !prev, true);
    return <>
        <ToggleButton onClick={setSelectSubRows} pressed={selectSubRows}>{\`\${selectSubRows ? "Don't " : ''}Select Sub-Rows\`}</ToggleButton>
        <AnalyticalTable selectionMode={AnalyticalTableSelectionMode.Multiple} data={dataTree} columns={args.columns} isTreeTable tableHooks={tableHooksIndeterminateRowSel} reactTableOptions={{
        selectSubRows: selectSubRows
      }} />
      </>;
  }
}`,...v.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    data: dataManualSelect
  },
  render: args => {
    const [collapsedCode, setCollapsedCode] = useReducer(coll => !coll, true);
    const [data, toggleFirstRowSelected] = useReducer(prev => {
      const [, ...updatedData] = prev;
      if (prev[0].isSelected) {
        return [{
          ...prev[0],
          isSelected: false
        }, ...updatedData];
      } else {
        return [{
          ...prev[0],
          isSelected: true
        }, ...updatedData];
      }
    }, args.data);
    return <>
        <Button onClick={toggleFirstRowSelected}>
          Toggle <code>isSelected</code> of 1st row
        </Button>
        <br />
        <Label>Clicking this button will refresh the data array passed to the \`data\` prop.</Label>
        <br />
        <br />
        <AnalyticalTable selectionMode={AnalyticalTableSelectionMode.Multiple} data={data} columns={args.columns} tableHooks={tableHooksManualRowSel} />
        <Button onClick={setCollapsedCode}>Show first entries in data array</Button>
        {!collapsedCode && <FlexBox direction="Column">
            <span>{JSON.stringify(data[0], null, 2)}</span>
            <span>{JSON.stringify(data[1], null, 2)}</span>
            <span>{JSON.stringify(data[2], null, 2)}</span>
            <span>{JSON.stringify(data[3], null, 2)}</span>
            <span>{JSON.stringify(data[4], null, 2)}</span>
            <span>...</span>
          </FlexBox>}
      </>;
  }
}`,...I.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [useColResizeEvent, setUseColResizeEvent] = useState({});
    const [liveUpdate, setLiveUpdate] = useState(false);
    const [wait, setWait] = useState(100);
    const handleLiveUpdateChange = e => {
      setLiveUpdate(e.target.checked);
    };
    const handleWaitChange = e => {
      setWait(parseInt(e.target.value));
    };
    const handleColWidthUpdate = useCallback(e => {
      setUseColResizeEvent(e);
    }, [setUseColResizeEvent]);
    const tableHooksColResize = useMemo(() => [AnalyticalTableHooks.useOnColumnResize(handleColWidthUpdate, {
      liveUpdate,
      wait
    })], [handleColWidthUpdate, liveUpdate, wait]);
    return <>
        <AnalyticalTable extension={<>
              <FlexBox alignItems={FlexBoxAlignItems.Center}>
                <Label>liveUpdate: </Label>
                <CheckBox onChange={handleLiveUpdateChange} checked={liveUpdate} />
              </FlexBox>
              <FlexBox alignItems={FlexBoxAlignItems.Center}>
                <Label>wait: </Label>
                <Input onInput={handleWaitChange} type={InputType.Number} value={\`\${wait}\`} />
              </FlexBox>
              <br />
            </>} data={args.data} columns={args.columns} tableHooks={tableHooksColResize} />
        {!!Object.keys(useColResizeEvent).length && <FlexBox direction={FlexBoxDirection.Column}>
            <br />
            <Text>Last fired callback of changed column:</Text>
            <br />
            <FlexBox>
              <Label>Column:</Label>
              <Text>{useColResizeEvent.header.id}</Text>
            </FlexBox>
            <FlexBox>
              <Label>Width:</Label>
              <Text>{useColResizeEvent.columnWidth}</Text>
            </FlexBox>
          </FlexBox>}
      </>;
  }
}`,..._.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    orderedIds: ['name', 'name2', 'age', 'age2']
  },
  argTypes: {
    orderedIds: {
      control: 'array',
      description: 'Defines the sort priority when sorting by multiple columns, starting with the first column ID.\\n' + '\\n' + '**Note:** Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column.'
    }
  },
  render(args) {
    const tableHooksOrderedMultiSort = useMemo(() => [AnalyticalTableHooks.useOrderedMultiSort(args.orderedIds)], [args.orderedIds]);
    return <AnalyticalTable columns={orderedMultiSortColumns} data={orderedMultiSortData} sortable tableHooks={tableHooksOrderedMultiSort} />;
  }
}`,...T.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <AnalyticalTable data={args.data.slice(0, 10)} columns={inputCols} tableHooks={tableHooks} visibleRows={5} />;
  }
}`,...M.parameters?.docs?.source}}};const Te=["PluginAnnounceEmptyCells","PluginDisableRowSelection","PluginIndeterminateRowSelection","PluginManualRowSelect","PluginOnColumnResize","PluginOrderedMultiSort","F2CellEdit"],Ue=Object.freeze(Object.defineProperty({__proto__:null,F2CellEdit:M,PluginAnnounceEmptyCells:N,PluginDisableRowSelection:k,PluginIndeterminateRowSelection:v,PluginManualRowSelect:I,PluginOnColumnResize:_,PluginOrderedMultiSort:T,__namedExportsOrder:Te,default:we},Symbol.toStringTag,{value:"Module"}));export{Ue as C,M as F,N as P,k as a,v as b,I as c,_ as d,T as e};
