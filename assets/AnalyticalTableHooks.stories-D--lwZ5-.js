import{j as a}from"./useIsomorphicLayoutEffect-BZqdrUgG.js";import{A as p,c as Z,g as re,m as oe,d as b,e as ie,f as le}from"./AnalyticalTable.stories-Bm5BqSz6.js";import{r as h}from"./index-BP8_t0zE.js";import{F as S,c as N,a as ce}from"./index-BpzLxWcJ.js";import{T}from"./index-DXYWpQLV.js";import{aR as de}from"./i18n-defaults-B3SMwW1O.js";import{u as ue}from"./i18n-defaults-CNtbapJN.js";import{T as E}from"./index-kRsdi_6b.js";import{e as A}from"./index-CBpU8qq5.js";import{C as ee}from"./index-BbFlY2Zm.js";import{B as j}from"./index-CKBLKqiI.js";import{L as y}from"./index-DxJV5SPg.js";import{I as me}from"./index-3s_6nXrH.js";import{I as ge}from"./Input-CJRKgCvZ.js";import{d as he}from"./debounce-D7W5PopO.js";const ne=e=>{const o=ue("@ui5/webcomponents").getText(de),r=h.useCallback((d,{cell:{value:s}})=>typeof s!="number"&&!s?[d,{"aria-label":`${d["aria-label"]} ${o}`}]:d,[o]);e.getCellProps.push(r)};ne.pluginName="useAnnounceEmptyCells";const fe=(e,n)=>{let o=e.lastIndexOf(".");o===-1&&(o=1/0);const r=e.slice(0,o);return[n[r],o]},ae=e=>{const n={},o=e.lastIndexOf(".");return n[e]=!0,o!==-1&&Object.assign(n,ae(e.slice(0,o))),n},pe=(e,n,o)=>{const r={};let d="";const s=(u,t=null)=>{for(const i of u)if(i.subRows.length>0)s(i.subRows,i.id);else if(t!==null&&d!==t){d=t;const c=l=>{const[m,f]=fe(l,n),g=m.subRows.filter(R=>o.selectedRowIds[R.id]),v=m.subRows.length===g.length;if(g.length>0&&!v){const R=m.id;Object.assign(r,ae(R));return}f!==1/0&&c(m.id)};c(i.id)}};return s(e),r},B=e=>{const n=(s,{row:u,instance:t})=>{var c,l;let i;return t.isAllRowsSelected?i=!1:i=((l=(c=t==null?void 0:t.state)==null?void 0:c.indeterminateRows)==null?void 0:l[u.id])??!1,s.checked&&!t.state.selectedRowIds[u.id]&&u.toggleRowSelected(!0),[s,{indeterminate:i,checked:i?!0:s.checked}]},o=(s,u,t,i)=>{const{rowsById:c,state:l,rows:m}=i;if(u.type==="INDETERMINATE_ROW_IDS"){if(u.payload==="reset")return{...s,indeterminateRows:{}};const f=pe(m,c,l);return{...s,indeterminateRows:f}}},r=s=>{const{data:u,dispatch:t,rowsById:i,state:{selectedRowIds:c,indeterminateRows:l},webComponentsReactProperties:{selectionMode:m,selectionBehavior:f,isTreeTable:g}}=s;h.useEffect(()=>{g&&m===p.MultiSelect&&f!==Z.RowOnly&&Object.keys(c).length&&Object.keys(i).length!==Object.keys(c).length?t({type:"INDETERMINATE_ROW_IDS"}):typeof l=="object"&&Object.keys(l).length&&t({type:"INDETERMINATE_ROW_IDS",payload:"reset"})},[u,c,g,m,f]),h.useEffect(()=>{typeof e=="function"&&l&&e({indeterminateRowsById:l,tableInstance:s})},[l])},d=s=>{s.getToggleRowSelectedProps.push(n),s.stateReducers.push(o),s.useInstanceAfterData.push(r)};return d.pluginName="useIndeterminate",d};try{B.displayName="useIndeterminateRowSelection",B.__docgenInfo={description:"A plugin hook that marks parent rows as indeterminate if a child row is selected in `MultiSelect` mode.\nWhen using this hook, it is recommended to also select all sub-rows when selecting a row. (`reactTableOptions={{ selectSubRows: true }}`)\n\n__Note:__ The `indeterminate` state has a higher priority than the `selected` state. Therefore, a row can be selected and indeterminate at the same time. This can for example happen, if `selectSubRows: true` is set and a row with sub-rows is selected and then a sub-row is unselected.\n\n__Note:__ This hook has to traverse the whole data tree on each selection, which can lead to performance degradation with large datasets. Please use with caution!",displayName:"useIndeterminateRowSelection",props:{}}}catch{}try{B.displayName="useIndeterminateRowSelection",B.__docgenInfo={description:"A plugin hook that marks parent rows as indeterminate if a child row is selected in `MultiSelect` mode.\nWhen using this hook, it is recommended to also select all sub-rows when selecting a row. (`reactTableOptions={{ selectSubRows: true }}`)\n\n__Note:__ The `indeterminate` state has a higher priority than the `selected` state. Therefore, a row can be selected and indeterminate at the same time. This can for example happen, if `selectSubRows: true` is set and a row with sub-rows is selected and then a sub-row is unselected.\n\n__Note:__ This hook has to traverse the whole data tree on each selection, which can lead to performance degradation with large datasets. Please use with caution!",displayName:"useIndeterminateRowSelection",props:{}}}catch{}const be=(e="isSelected")=>{const n=({flatRows:r,toggleRowSelected:d})=>{h.useEffect(()=>{r.forEach(({id:s,original:u})=>{e in u&&d(s,u.isSelected)})},[r,e])},o=r=>{r.useInstanceAfterData.push(n)};return o.pluginName="useManualRowSelect",o},Se=(e,n)=>{const o=he(e,(n==null?void 0:n.wait)??100),r=s=>{const{state:u,columns:t}=s,{columnResizing:i}=u,{isResizingColumn:c,columnWidths:l}=i,m=h.useRef(void 0);h.useEffect(()=>{if(c&&(n!=null&&n.liveUpdate)){const f=t.find(g=>g.id===c);o({columnWidth:l[c],header:f})}},[i,n==null?void 0:n.liveUpdate,t]),h.useEffect(()=>{if(n!=null&&n.liveUpdate)return()=>o.cancel()},[n==null?void 0:n.liveUpdate]),h.useEffect(()=>{if(!(n!=null&&n.liveUpdate)){const f=t.find(g=>g.id===m.current);c&&(m.current=c),!c&&m.current&&e({columnWidth:l[m.current],header:f})}},[i,n==null?void 0:n.liveUpdate,t])},d=s=>{s.useFinalInstance.push(r)};return d.pluginName="useOnColumnResize",d},we=e=>{const n=o=>{o.stateReducers.push((r,d)=>{if(d.type==="toggleSortBy"){if(r.sortBy.length<=1)return r;{const s=[...r.sortBy],u=e.flatMap(t=>{const i=s.findIndex(c=>c.id===t);if(i!==-1){const c=s[i];return s.splice(i,1),[c]}return[]});return{...r,sortBy:[...u,...s]}}}return r})};return n.pluginName="useOrderedMultiSort",n},Re={verticalAlign:"middle"},ye=(e,{instance:{webComponentsReactProperties:{selectionMode:n}}})=>{if(e.key==="header___ui5wcr__internal_selection_column"&&n===p.MultiSelect){const o={...e.style,cursor:"auto"};return[e,{onClick:void 0,onKeyDown:void 0,title:void 0,style:o}]}return e},xe=e=>e.map(n=>n.id==="__ui5wcr__internal_selection_column"?{...n,Cell:o=>{const{webComponentsReactProperties:r,row:d}=o;return d.disableSelect===!0?d.isGrouped&&r.selectionMode===p.SingleSelect?null:r.selectionMode===p.SingleSelect?a.jsx("div",{onClick:void 0,"data-name":"internal_selection_column"}):a.jsx(ee,{...d.getToggleRowSelectedProps(),disabled:!0,style:Re,"data-name":"internal_selection_column",tabIndex:-1}):n.Cell(o)},Header:()=>null}:n),w=e=>{const n=typeof e=="function"?e:t=>re(t.original,e,void 0),o=(t,{row:i,instance:c})=>{const{webComponentsReactProperties:l}=c;return n(i)===!0?(i.disableSelect=!0,{...t,onClick:g=>{typeof l.onRowClick=="function"&&l.onRowClick(A(g,{row:i}))},onKeyDown:g=>{(g.code==="Space"||g.code==="Enter")&&(g.preventDefault(),typeof l.onRowClick=="function"&&l.onRowClick(A(g,{row:i})))},className:l.classes.tr}):t},r=t=>[...t,e],d=(t,{cell:{row:i,column:c},instance:l})=>{const{selectionMode:m,selectionBehavior:f}=l.webComponentsReactProperties;if(n(i)===!0&&m!==p.None&&(f!==Z.RowSelector||c.id==="__ui5wcr__internal_selection_column")){const{"aria-label":g,...v}=t;if(c.id==="__ui5wcr__internal_selection_column"){const se={...t.style,cursor:"auto"};return{...v,"aria-disabled":!0,style:se}}const{"aria-selected":te,...R}=v;return R}return t},s=(t,{row:i})=>{if(n(i)===!0){const{title:c,...l}=t;return l}return t},u=t=>{t.getHeaderProps.push(ye),t.getRowProps.push(o),t.columns.push(xe),t.columnsDeps.push(r),t.getCellProps.push(d),t.getToggleRowSelectedProps.push(s)};return u.pluginName="useRowDisableSelection",u};try{w.displayName="useRowDisableSelection",w.__docgenInfo={description:`A plugin hook for disabling row selection of specific rows.
__Note:__ The "Select All" checkbox is not available with this hook.`,displayName:"useRowDisableSelection",props:{}}}catch{}try{w.displayName="useRowDisableSelection",w.__docgenInfo={description:`A plugin hook for disabling row selection of specific rows.
__Note:__ The "Select All" checkbox is not available with this hook.`,displayName:"useRowDisableSelection",props:{}}}catch{}const Ce=[{name:"Owens Glover",age:22,friend:{name:"Daisy Giles",age:33},status:"Error"},{name:"Waller Nguyen",age:56,friend:{name:"Lola Banks",age:55},status:"None"},{name:"Bowen Mckay",age:32,friend:{name:"Graham Wells",age:51},status:"Information"},{name:"Freida Weeks",age:68,friend:{name:"Lee Johnson",age:61},status:"Error"},{name:"England Whitehead",age:82,friend:{name:"Phillips Merritt",age:19},status:"Information"},{name:"Alissa Duke",age:43,friend:{name:"Rosella Slater",age:58},status:"None"},{name:"Randolph Grant",age:76,friend:{name:"Madge Mitchell",age:48},status:"Warning"},{name:"Malone Hampton",age:42,friend:{name:"Landry Hancock",age:33},status:"Error"},{name:"Lorna Hinton",age:27,friend:{name:"Maddox House",age:67},status:"None"},{name:"Janis Wade",age:19,friend:{name:"Nell Hines",age:82},status:"Error"},{name:"Rose Vance",age:47,friend:{name:"Jacobson Wilcox",age:69},status:"Information"},{name:"Rowe Hamilton",age:85,friend:{name:"Vasquez Craft",age:79},status:"Warning"},{name:"Trisha Ellis",age:42,friend:{name:"Jacobs Ramsey",age:41},status:"Success"},{name:"Bowers Rowe",age:57,friend:{name:"Brigitte Buckner",age:19},status:"None"},{name:"Gamble Rice",age:85,friend:{name:"Manning Jenkins",age:57},status:"Error"},{name:"Letitia Finch",age:54,friend:{name:"Silva Fulton",age:52},status:"Information"},{name:"Elinor Middleton",age:71,friend:{name:"Hines Mckenzie",age:33},status:"None"},{name:"Jeannine Lopez",age:38,friend:{name:"Benjamin Rodriguez",age:76},status:"Error"},{name:"Natasha Simon",age:73,friend:{name:"Simon Morin",age:20},status:"Error"},{name:"Marquita Morrison",age:61,friend:{name:"Mitzi Blake",age:80},status:"Error"},{name:"Lula Mason",age:49,friend:{name:"Holmes York",age:31},status:"Information"},{name:"Ginger Strong",age:79,friend:{name:"Higgins Shannon",age:25},status:"None"},{name:"Reeves Finley",age:84,friend:{name:"Sheila Hickman",age:25},status:"None"},{name:"Reilly Mcpherson",age:34,friend:{name:"Horton Smith",age:37},status:"Warning"},{name:"Moreno Moore",age:39,friend:{name:"Lacey Fox",age:55},status:"None"},{name:"Santana Gilliam",age:20,friend:{name:"Baird Barton",age:68},status:"Warning"},{name:"Deidre Richmond",age:45,friend:{name:"Newman Adkins",age:81},status:"Success"},{name:"Willis Wise",age:73,friend:{name:"Haynes Dominguez",age:47},status:"Error"},{name:"Wilson Hunter",age:49,friend:{name:"Greene Wood",age:24},status:"None"},{name:"Nancy Klein",age:54,friend:{name:"Callie Foster",age:64},status:"Error"},{name:"Woods Porter",age:74,friend:{name:"Mercer Perry",age:62},status:"None"},{name:"Hopkins Schmidt",age:34,friend:{name:"Mcfadden David",age:51},status:"Error"},{name:"Yang Lloyd",age:16,friend:{name:"Bates Barker",age:84},status:"None"},{name:"Vinson Ferguson",age:50,friend:{name:"Dejesus Owens",age:47},status:"Error"},{name:"Flores Jones",age:32,friend:{name:"Anita Stark",age:47},status:"Success"},{name:"Jennings Pope",age:39,friend:{name:"Ellen Avila",age:50},status:"Information"},{name:"Bettie Fernandez",age:61,friend:{name:"Lilian Juarez",age:61},status:"Information"},{name:"Sherri Abbott",age:26,friend:{name:"Floyd Clarke",age:51},status:"Error"},{name:"Barrett Cameron",age:47,friend:{name:"Barton Waller",age:45},status:"None"},{name:"Young Frazier",age:26,friend:{name:"Hardin Branch",age:47},status:"Error"},{name:"Cheri Obrien",age:75,friend:{name:"Karyn Merrill",age:81},status:"Success"},{name:"Anne Hayden",age:61,friend:{name:"Joanne Powell",age:79},status:"Error"},{name:"Hart Cortez",age:16,friend:{name:"Gross Beard",age:82},status:"Information"},{name:"Mallory Caldwell",age:57,friend:{name:"Curry Leonard",age:68},status:"None"},{name:"Snider Eaton",age:52,friend:{name:"Lucia Santos",age:47},status:"Information"},{name:"Leticia Tillman",age:60,friend:{name:"Langley Nielsen",age:80},status:"Error"},{name:"Kemp Workman",age:35,friend:{name:"Calderon Mcleod",age:30},status:"Information"},{name:"Campos Leach",age:75,friend:{name:"Savannah Hogan",age:36},status:"Error"},{name:"Colon Dunn",age:33,friend:{name:"Lily Love",age:73},status:"Error"},{name:"Koch Henson",age:60,friend:{name:"Ola Welch",age:24},status:"Success"}],Ie=[{name:"Owens Glover",age:22,friend:{name:"Daisy Giles",age:33},status:"Error",isSelected:!0},{name:"Waller Nguyen",age:56,friend:{name:"Lola Banks",age:55},status:"None",isSelected:!0},{name:"Bowen Mckay",age:32,friend:{name:"Graham Wells",age:51},status:"Information"},{name:"Freida Weeks",age:68,friend:{name:"Lee Johnson",age:61},status:"Error"},{name:"England Whitehead",age:82,friend:{name:"Phillips Merritt",age:19},status:"Information",isSelected:!0},{name:"Alissa Duke",age:43,friend:{name:"Rosella Slater",age:58},status:"None"},{name:"Randolph Grant",age:76,friend:{name:"Madge Mitchell",age:48},status:"Warning"},{name:"Malone Hampton",age:42,friend:{name:"Landry Hancock",age:33},status:"Error"},{name:"Lorna Hinton",age:27,friend:{name:"Maddox House",age:67},status:"None"},{name:"Janis Wade",age:19,friend:{name:"Nell Hines",age:82},status:"Error",isSelected:!0},{name:"Rose Vance",age:47,friend:{name:"Jacobson Wilcox",age:69},status:"Information"},{name:"Rowe Hamilton",age:85,friend:{name:"Vasquez Craft",age:79},status:"Warning"},{name:"Trisha Ellis",age:42,friend:{name:"Jacobs Ramsey",age:41},status:"Success"},{name:"Bowers Rowe",age:57,friend:{name:"Brigitte Buckner",age:19},status:"None"},{name:"Gamble Rice",age:85,friend:{name:"Manning Jenkins",age:57},status:"Error",isSelected:!0},{name:"Letitia Finch",age:54,friend:{name:"Silva Fulton",age:52},status:"Information"},{name:"Elinor Middleton",age:71,friend:{name:"Hines Mckenzie",age:33},status:"None"},{name:"Jeannine Lopez",age:38,friend:{name:"Benjamin Rodriguez",age:76},status:"Error",isSelected:!0},{name:"Natasha Simon",age:73,friend:{name:"Simon Morin",age:20},status:"Error"},{name:"Marquita Morrison",age:61,friend:{name:"Mitzi Blake",age:80},status:"Error"},{name:"Lula Mason",age:49,friend:{name:"Holmes York",age:31},status:"Information"},{name:"Ginger Strong",age:79,friend:{name:"Higgins Shannon",age:25},status:"None"},{name:"Reeves Finley",age:84,friend:{name:"Sheila Hickman",age:25},status:"None",isSelected:!0},{name:"Reilly Mcpherson",age:34,friend:{name:"Horton Smith",age:37},status:"Warning"},{name:"Moreno Moore",age:39,friend:{name:"Lacey Fox",age:55},status:"None"}],_e={...oe,title:"Data Display / AnalyticalTable / Plugin Hooks",tags:["excludeFromSidebar"]},x={args:{data:[{age:void 0,friend:{name:null,age:0},status:"Error"},...Ce],visibleRows:5},render(e){return a.jsx(b,{columns:e.columns,data:e.data,visibleRows:e.visibleRows,tableHooks:[ne]})}},C={args:{data:ie.map(e=>({...e,disableSelection:Math.random()<.5})),selectionMode:p.MultiSelect},render:e=>{const n=d=>d.original.age<40,[o,r]=h.useState(!0);return a.jsxs(a.Fragment,{children:[a.jsx(E,{onClick:()=>{r(!0)},pressed:o,children:"with function parameter"}),a.jsx(E,{onClick:()=>{r(!1)},pressed:!o,children:"with string parameter"}),o?a.jsx(b,{data:e.data,columns:e.columns,selectionMode:e.selectionMode,tableHooks:[w(n)],visibleRows:10,header:"All under 40 are not selectable"}):a.jsx(b,{data:e.data,columns:e.columns,selectionMode:e.selectionMode,selectionBehavior:e.selectionBehavior,tableHooks:[w("disableSelection")],visibleRows:10,header:'All with "disableSelection: true" are not selectable'})]})}},I={render:e=>{const[n,o]=h.useReducer(r=>!r,!0);return a.jsxs(a.Fragment,{children:[a.jsx(E,{onClick:o,pressed:n,children:`${n?"Don't ":""}Select Sub-Rows`}),a.jsx(b,{selectionMode:p.MultiSelect,data:le,columns:e.columns,isTreeTable:!0,tableHooks:[B()],reactTableOptions:{selectSubRows:n}})]})}},_={args:{data:Ie},render:e=>{const[n,o]=h.useReducer(s=>!s,!0),[r,d]=h.useReducer(s=>{const[,...u]=s;return s[0].isSelected?[{...s[0],isSelected:!1},...u]:[{...s[0],isSelected:!0},...u]},e.data);return a.jsxs(a.Fragment,{children:[a.jsxs(j,{onClick:d,children:["Toggle ",a.jsx("code",{children:"isSelected"})," of 1st row"]}),a.jsx("br",{}),a.jsx(y,{children:"Clicking this button will refresh the data array passed to the `data` prop."}),a.jsx("br",{}),a.jsx("br",{}),a.jsx(b,{selectionMode:p.MultiSelect,data:r,columns:e.columns,tableHooks:[be("isSelected")]}),a.jsx(j,{onClick:o,children:"Show first entries in data array"}),!n&&a.jsxs(S,{direction:"Column",children:[a.jsx("span",{children:JSON.stringify(r[0],null,2)}),a.jsx("span",{children:JSON.stringify(r[1],null,2)}),a.jsx("span",{children:JSON.stringify(r[2],null,2)}),a.jsx("span",{children:JSON.stringify(r[3],null,2)}),a.jsx("span",{children:JSON.stringify(r[4],null,2)}),a.jsx("span",{children:"..."})]})]})}},M={render:e=>{const[n,o]=h.useState({}),[r,d]=h.useState(!1),[s,u]=h.useState(100),t=l=>{d(l.target.checked)},i=l=>{u(parseInt(l.target.value))},c=l=>{o(l)};return a.jsxs(a.Fragment,{children:[a.jsx(b,{extension:a.jsxs(a.Fragment,{children:[a.jsxs(S,{alignItems:N.Center,children:[a.jsx(y,{children:"liveUpdate: "}),a.jsx(ee,{onChange:t,checked:r})]}),a.jsxs(S,{alignItems:N.Center,children:[a.jsx(y,{children:"wait: "}),a.jsx(me,{onInput:i,type:ge.Number,value:`${s}`})]}),a.jsx("br",{})]}),data:e.data,columns:e.columns,tableHooks:[Se(c,{liveUpdate:r,wait:s})]}),!!Object.keys(n).length&&a.jsxs(S,{direction:ce.Column,children:[a.jsx("br",{}),a.jsx(T,{children:"Last fired callback of changed column:"}),a.jsx("br",{}),a.jsxs(S,{children:[a.jsx(y,{children:"Column:"}),a.jsx(T,{children:n.header.id})]}),a.jsxs(S,{children:[a.jsx(y,{children:"Width:"}),a.jsx(T,{children:n.columnWidth})]})]})]})}},Me=[{Header:"Name",accessor:"name",enableMultiSort:!0},{Header:"Age",accessor:"age",enableMultiSort:!0},{Header:"Name 2",accessor:"name2",enableMultiSort:!0},{Header:"Age 2",accessor:"age2",enableMultiSort:!0}],ke=[{name:"Peter",age:40,name2:"Alissa",age2:18},{name:"Kristen",age:40,name2:"Randolph",age2:21},{name:"Peter",age:30,name2:"Rose",age2:90},{name:"Peter",age:70,name2:"Rose",age2:22},{name:"Kristen",age:60,name2:"Willis",age2:80},{name:"Kristen",age:20,name2:"Alissa",age2:80},{name:"Graham",age:40,name2:"Alissa",age2:80},{name:"Peter",age:65,name2:"Rose",age2:26},{name:"Graham",age:65,name2:"Rose",age2:26},{name:"Graham",age:65,name2:"Willis",age2:26},{name:"Graham",age:62,name2:"Willis",age2:26}],k={args:{orderedIds:["name","name2","age","age2"]},argTypes:{orderedIds:{control:"array",description:`Defines the sort priority when sorting by multiple columns, starting with the first column ID.

**Note:** Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column.`}},render(e){return a.jsx(b,{columns:Me,data:ke,sortable:!0,tableHooks:[we(e.orderedIds)]})}};var H,D,F;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
    return <AnalyticalTable columns={args.columns} data={args.data} visibleRows={args.visibleRows} tableHooks={[AnalyticalTableHooks.useAnnounceEmptyCells]} />;
  }
}`,...(F=(D=x.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var W,L,O;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    data: dataLarge.map(item => ({
      ...item,
      disableSelection: Math.random() < 0.5
    })),
    selectionMode: AnalyticalTableSelectionMode.MultiSelect
  },
  render: args => {
    const disableRowFunc = row => row.original.age < 40;
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
        {isFunc ? <AnalyticalTable data={args.data} columns={args.columns} selectionMode={args.selectionMode} tableHooks={[AnalyticalTableHooks.useRowDisableSelection(disableRowFunc)]} visibleRows={10} header="All under 40 are not selectable" /> : <AnalyticalTable data={args.data} columns={args.columns} selectionMode={args.selectionMode} selectionBehavior={args.selectionBehavior} tableHooks={[AnalyticalTableHooks.useRowDisableSelection('disableSelection')]} visibleRows={10} header={\`All with "disableSelection: true" are not selectable\`} />}
      </>;
  }
}`,...(O=(L=C.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var P,z,J;I.parameters={...I.parameters,docs:{...(P=I.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    const [selectSubRows, setSelectSubRows] = useReducer(prev => !prev, true);
    return <>
        <ToggleButton onClick={setSelectSubRows} pressed={selectSubRows}>{\`\${selectSubRows ? "Don't " : ''}Select Sub-Rows\`}</ToggleButton>
        <AnalyticalTable selectionMode={AnalyticalTableSelectionMode.MultiSelect} data={dataTree} columns={args.columns} isTreeTable tableHooks={[AnalyticalTableHooks.useIndeterminateRowSelection()]} reactTableOptions={{
        selectSubRows: selectSubRows
      }} />
      </>;
  }
}`,...(J=(z=I.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var U,G,K;_.parameters={..._.parameters,docs:{...(U=_.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
        <AnalyticalTable selectionMode={AnalyticalTableSelectionMode.MultiSelect} data={data} columns={args.columns} tableHooks={[AnalyticalTableHooks.useManualRowSelect('isSelected')]} />
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
}`,...(K=(G=_.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var $,V,Y;M.parameters={...M.parameters,docs:{...($=M.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
    const handleColWidthUpdate = e => {
      setUseColResizeEvent(e);
    };
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
            </>} data={args.data} columns={args.columns} tableHooks={[AnalyticalTableHooks.useOnColumnResize(handleColWidthUpdate, {
        liveUpdate,
        wait
      })]} />
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
}`,...(Y=(V=M.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var q,Q,X;k.parameters={...k.parameters,docs:{...(q=k.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
    return <AnalyticalTable columns={orderedMultiSortColumns} data={orderedMultiSortData} sortable tableHooks={[AnalyticalTableHooks.useOrderedMultiSort(args.orderedIds)]} />;
  }
}`,...(X=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Be=["PluginAnnounceEmptyCells","PluginDisableRowSelection","PluginIndeterminateRowSelection","PluginManualRowSelect","PluginOnColumnResize","PluginOrderedMultiSort"],Ue=Object.freeze(Object.defineProperty({__proto__:null,PluginAnnounceEmptyCells:x,PluginDisableRowSelection:C,PluginIndeterminateRowSelection:I,PluginManualRowSelect:_,PluginOnColumnResize:M,PluginOrderedMultiSort:k,__namedExportsOrder:Be,default:_e},Symbol.toStringTag,{value:"Module"}));export{Ue as C,x as P,C as a,I as b,_ as c,M as d,k as e};
