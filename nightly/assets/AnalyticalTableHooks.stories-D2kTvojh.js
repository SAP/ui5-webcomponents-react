import{az as W,fc as z,r as g,j as n,o as B,Q as j,J as T}from"./iframe-B3OL0dJj.js";import{d as U}from"./Friends500-CRbR9XAn.js";import{A as b,d as D,g as J,m as G,e as S,f as K}from"./AnalyticalTable.stories-64BVvMSH.js";import{a as $}from"./Input-CUVXXg7A.js";import{F as w,c as A,a as V}from"./index-D7xFIu9y.js";import{T as H}from"./index-BqvLyP5X.js";import{C as F}from"./index-DV3BrsWn.js";import{L as x}from"./index-bmuDs-E9.js";import{d as Y}from"./debounce-D7W5PopO.js";import{I as q}from"./index-UwlP0y3d.js";const O=e=>{const o=W("@ui5/webcomponents").getText(z),r=g.useCallback((c,{cell:{value:t}})=>typeof t!="number"&&!t?[c,{"aria-label":`${c["aria-label"]} ${o}`}]:c,[o]);e.getCellProps.push(r)};O.pluginName="useAnnounceEmptyCells";const Q=(e,a)=>{let o=e.lastIndexOf(".");o===-1&&(o=1/0);const r=e.slice(0,o);return[a[r],o]},E=e=>{const a={},o=e.lastIndexOf(".");return a[e]=!0,o!==-1&&Object.assign(a,E(e.slice(0,o))),a},X=(e,a,o)=>{const r={};let c="";const t=(u,s=null)=>{for(const i of u)if(i.subRows.length>0)t(i.subRows,i.id);else if(s!==null&&c!==s){c=s;const l=d=>{const[m,h]=Q(d,a),f=m.subRows.filter(y=>o.selectedRowIds[y.id]),p=m.subRows.length===f.length;if(f.length>0&&!p){const y=m.id;Object.assign(r,E(y));return}h!==1/0&&l(m.id)};l(i.id)}};return t(e),r},N=e=>{const a=(t,{row:u,instance:s})=>{let i;return s.isAllRowsSelected?i=!1:i=s?.state?.indeterminateRows?.[u.id]??!1,t.checked&&!s.state.selectedRowIds[u.id]&&u.toggleRowSelected(!0),[t,{indeterminate:i,checked:i?!0:t.checked}]},o=(t,u,s,i)=>{const{rowsById:l,state:d,rows:m}=i;if(u.type==="INDETERMINATE_ROW_IDS"){if(u.payload==="reset")return{...t,indeterminateRows:{}};const h=X(m,l,d);return{...t,indeterminateRows:h}}},r=t=>{const{data:u,dispatch:s,rowsById:i,state:{selectedRowIds:l,indeterminateRows:d},webComponentsReactProperties:{selectionMode:m,selectionBehavior:h,isTreeTable:f}}=t;g.useEffect(()=>{f&&m===b.Multiple&&h!==D.RowOnly&&Object.keys(l).length&&Object.keys(i).length!==Object.keys(l).length?s({type:"INDETERMINATE_ROW_IDS"}):typeof d=="object"&&Object.keys(d).length&&s({type:"INDETERMINATE_ROW_IDS",payload:"reset"})},[u,l,f,m,h]),g.useEffect(()=>{typeof e=="function"&&d&&e({indeterminateRowsById:d,tableInstance:t})},[d])},c=t=>{t.getToggleRowSelectedProps.push(a),t.stateReducers.push(o),t.useInstanceAfterData.push(r)};return c.pluginName="useIndeterminate",c};try{N.displayName="useIndeterminateRowSelection",N.__docgenInfo={description:"A plugin hook that marks parent rows as indeterminate if a child row is selected in `Multiple` mode.\nWhen using this hook, it is recommended to also select all sub-rows when selecting a row. (`reactTableOptions={{ selectSubRows: true }}`)\n\n__Note:__ The `indeterminate` state has a higher priority than the `selected` state. Therefore, a row can be selected and indeterminate at the same time. This can for example happen, if `selectSubRows: true` is set and a row with sub-rows is selected and then a sub-row is unselected.\n\n__Note:__ This hook has to traverse the whole data tree on each selection, which can lead to performance degradation with large datasets. Please use with caution!",displayName:"useIndeterminateRowSelection",props:{}}}catch{}try{N.displayName="useIndeterminateRowSelection",N.__docgenInfo={description:"A plugin hook that marks parent rows as indeterminate if a child row is selected in `Multiple` mode.\nWhen using this hook, it is recommended to also select all sub-rows when selecting a row. (`reactTableOptions={{ selectSubRows: true }}`)\n\n__Note:__ The `indeterminate` state has a higher priority than the `selected` state. Therefore, a row can be selected and indeterminate at the same time. This can for example happen, if `selectSubRows: true` is set and a row with sub-rows is selected and then a sub-row is unselected.\n\n__Note:__ This hook has to traverse the whole data tree on each selection, which can lead to performance degradation with large datasets. Please use with caution!",displayName:"useIndeterminateRowSelection",props:{}}}catch{}const Z=(e="isSelected")=>{const a=({flatRows:r,toggleRowSelected:c})=>{g.useEffect(()=>{r.forEach(({id:t,original:u})=>{e in u&&c(t,u.isSelected)})},[r,e])},o=r=>{r.useInstanceAfterData.push(a)};return o.pluginName="useManualRowSelect",o},ee=(e,a)=>{const o=Y(e,a?.wait??100),r=t=>{const{state:u,columns:s}=t,{columnResizing:i}=u,{isResizingColumn:l,columnWidths:d}=i,m=g.useRef(void 0);g.useEffect(()=>{if(l&&a?.liveUpdate){const h=s.find(f=>f.id===l);o({columnWidth:d[l],header:h})}},[i,a?.liveUpdate,s]),g.useEffect(()=>{if(a?.liveUpdate)return()=>o.cancel()},[a?.liveUpdate]),g.useEffect(()=>{if(!a?.liveUpdate){const h=s.find(f=>f.id===m.current);l&&(m.current=l),!l&&m.current&&e({columnWidth:d[m.current],header:h})}},[i,a?.liveUpdate,s])},c=t=>{t.useFinalInstance.push(r)};return c.pluginName="useOnColumnResize",c},ne=e=>{const a=o=>{o.stateReducers.push((r,c)=>{if(c.type==="toggleSortBy"){if(r.sortBy.length<=1)return r;{const t=[...r.sortBy],u=e.flatMap(s=>{const i=t.findIndex(l=>l.id===s);if(i!==-1){const l=t[i];return t.splice(i,1),[l]}return[]});return{...r,sortBy:[...u,...t]}}}return r})};return a.pluginName="useOrderedMultiSort",a},ae={verticalAlign:"middle"},te=(e,{instance:{webComponentsReactProperties:{selectionMode:a}}})=>{if(e.key==="header___ui5wcr__internal_selection_column"&&a===b.Multiple){const o={...e.style,cursor:"auto"};return[e,{onClick:void 0,onKeyDown:void 0,title:void 0,style:o}]}return e},se=e=>e.map(a=>a.id==="__ui5wcr__internal_selection_column"?{...a,Cell:o=>{const{webComponentsReactProperties:r,row:c}=o;return c.disableSelect===!0?c.isGrouped&&r.selectionMode===b.Single?null:r.selectionMode===b.Single?n.jsx("div",{onClick:void 0,"data-name":"internal_selection_column"}):n.jsx(F,{...c.getToggleRowSelectedProps(),disabled:!0,style:ae,"data-name":"internal_selection_column",tabIndex:-1}):a.Cell(o)},Header:()=>null}:a),R=e=>{const a=typeof e=="function"?e:s=>J(s.original,e,void 0),o=(s,{row:i,instance:l})=>{const{webComponentsReactProperties:d}=l;return a(i)===!0?(i.disableSelect=!0,{...s,onClick:p=>{typeof d.onRowClick=="function"&&d.onRowClick(B(p,{row:i}))},onKeyDown:p=>{(p.code==="Enter"||p.code==="Space")&&(p.preventDefault(),p.code==="Enter"&&typeof d.onRowClick=="function"&&d.onRowClick(B(p,{row:i})))},onKeyUp:p=>{p.code==="Space"&&(p.preventDefault(),typeof d.onRowClick=="function"&&d.onRowClick(B(p,{row:i})))},className:d.classes.tr}):s},r=s=>[...s,e],c=(s,{cell:{row:i,column:l},instance:d})=>{const{selectionMode:m,selectionBehavior:h}=d.webComponentsReactProperties;if(a(i)===!0&&m!==b.None&&(h!==D.RowSelector||l.id==="__ui5wcr__internal_selection_column")){const{"aria-label":f,...p}=s;if(l.id==="__ui5wcr__internal_selection_column"){const P={...s.style,cursor:"auto"};return{...p,"aria-disabled":!0,style:P}}const{"aria-selected":L,...y}=p;return y}return s},t=(s,{row:i})=>{if(a(i)===!0){const{title:l,...d}=s;return d}return s},u=s=>{s.getHeaderProps.push(te),s.getRowProps.push(o),s.columns.push(se),s.columnsDeps.push(r),s.getCellProps.push(c),s.getToggleRowSelectedProps.push(t)};return u.pluginName="useRowDisableSelection",u};try{R.displayName="useRowDisableSelection",R.__docgenInfo={description:`A plugin hook for disabling row selection of specific rows.

__Note:__ The "Select All" checkbox is not available with this hook.`,displayName:"useRowDisableSelection",props:{}}}catch{}try{R.displayName="useRowDisableSelection",R.__docgenInfo={description:`A plugin hook for disabling row selection of specific rows.

__Note:__ The "Select All" checkbox is not available with this hook.`,displayName:"useRowDisableSelection",props:{}}}catch{}const oe=[{name:"Owens Glover",age:22,friend:{name:"Daisy Giles",age:33},status:"Negative"},{name:"Waller Nguyen",age:56,friend:{name:"Lola Banks",age:55},status:"None"},{name:"Bowen Mckay",age:32,friend:{name:"Graham Wells",age:51},status:"Information"},{name:"Freida Weeks",age:68,friend:{name:"Lee Johnson",age:61},status:"Negative"},{name:"England Whitehead",age:82,friend:{name:"Phillips Merritt",age:19},status:"Information"},{name:"Alissa Duke",age:43,friend:{name:"Rosella Slater",age:58},status:"None"},{name:"Randolph Grant",age:76,friend:{name:"Madge Mitchell",age:48},status:"Critical"},{name:"Malone Hampton",age:42,friend:{name:"Landry Hancock",age:33},status:"Negative"},{name:"Lorna Hinton",age:27,friend:{name:"Maddox House",age:67},status:"None"},{name:"Janis Wade",age:19,friend:{name:"Nell Hines",age:82},status:"Negative"},{name:"Rose Vance",age:47,friend:{name:"Jacobson Wilcox",age:69},status:"Information"},{name:"Rowe Hamilton",age:85,friend:{name:"Vasquez Craft",age:79},status:"Critical"},{name:"Trisha Ellis",age:42,friend:{name:"Jacobs Ramsey",age:41},status:"Positive"},{name:"Bowers Rowe",age:57,friend:{name:"Brigitte Buckner",age:19},status:"None"},{name:"Gamble Rice",age:85,friend:{name:"Manning Jenkins",age:57},status:"Negative"},{name:"Letitia Finch",age:54,friend:{name:"Silva Fulton",age:52},status:"Information"},{name:"Elinor Middleton",age:71,friend:{name:"Hines Mckenzie",age:33},status:"None"},{name:"Jeannine Lopez",age:38,friend:{name:"Benjamin Rodriguez",age:76},status:"Negative"},{name:"Natasha Simon",age:73,friend:{name:"Simon Morin",age:20},status:"Negative"},{name:"Marquita Morrison",age:61,friend:{name:"Mitzi Blake",age:80},status:"Negative"},{name:"Lula Mason",age:49,friend:{name:"Holmes York",age:31},status:"Information"},{name:"Ginger Strong",age:79,friend:{name:"Higgins Shannon",age:25},status:"None"},{name:"Reeves Finley",age:84,friend:{name:"Sheila Hickman",age:25},status:"None"},{name:"Reilly Mcpherson",age:34,friend:{name:"Horton Smith",age:37},status:"Critical"},{name:"Moreno Moore",age:39,friend:{name:"Lacey Fox",age:55},status:"None"},{name:"Santana Gilliam",age:20,friend:{name:"Baird Barton",age:68},status:"Critical"},{name:"Deidre Richmond",age:45,friend:{name:"Newman Adkins",age:81},status:"Positive"},{name:"Willis Wise",age:73,friend:{name:"Haynes Dominguez",age:47},status:"Negative"},{name:"Wilson Hunter",age:49,friend:{name:"Greene Wood",age:24},status:"None"},{name:"Nancy Klein",age:54,friend:{name:"Callie Foster",age:64},status:"Negative"},{name:"Woods Porter",age:74,friend:{name:"Mercer Perry",age:62},status:"None"},{name:"Hopkins Schmidt",age:34,friend:{name:"Mcfadden David",age:51},status:"Negative"},{name:"Yang Lloyd",age:16,friend:{name:"Bates Barker",age:84},status:"None"},{name:"Vinson Ferguson",age:50,friend:{name:"Dejesus Owens",age:47},status:"Negative"},{name:"Flores Jones",age:32,friend:{name:"Anita Stark",age:47},status:"Positive"},{name:"Jennings Pope",age:39,friend:{name:"Ellen Avila",age:50},status:"Information"},{name:"Bettie Fernandez",age:61,friend:{name:"Lilian Juarez",age:61},status:"Information"},{name:"Sherri Abbott",age:26,friend:{name:"Floyd Clarke",age:51},status:"Negative"},{name:"Barrett Cameron",age:47,friend:{name:"Barton Waller",age:45},status:"None"},{name:"Young Frazier",age:26,friend:{name:"Hardin Branch",age:47},status:"Negative"},{name:"Cheri Obrien",age:75,friend:{name:"Karyn Merrill",age:81},status:"Positive"},{name:"Anne Hayden",age:61,friend:{name:"Joanne Powell",age:79},status:"Negative"},{name:"Hart Cortez",age:16,friend:{name:"Gross Beard",age:82},status:"Information"},{name:"Mallory Caldwell",age:57,friend:{name:"Curry Leonard",age:68},status:"None"},{name:"Snider Eaton",age:52,friend:{name:"Lucia Santos",age:47},status:"Information"},{name:"Leticia Tillman",age:60,friend:{name:"Langley Nielsen",age:80},status:"Negative"},{name:"Kemp Workman",age:35,friend:{name:"Calderon Mcleod",age:30},status:"Information"},{name:"Campos Leach",age:75,friend:{name:"Savannah Hogan",age:36},status:"Negative"},{name:"Colon Dunn",age:33,friend:{name:"Lily Love",age:73},status:"Negative"},{name:"Koch Henson",age:60,friend:{name:"Ola Welch",age:24},status:"Positive"}],re=[{name:"Owens Glover",age:22,friend:{name:"Daisy Giles",age:33},status:"Negative",isSelected:!0},{name:"Waller Nguyen",age:56,friend:{name:"Lola Banks",age:55},status:"None",isSelected:!0},{name:"Bowen Mckay",age:32,friend:{name:"Graham Wells",age:51},status:"Information"},{name:"Freida Weeks",age:68,friend:{name:"Lee Johnson",age:61},status:"Negative"},{name:"England Whitehead",age:82,friend:{name:"Phillips Merritt",age:19},status:"Information",isSelected:!0},{name:"Alissa Duke",age:43,friend:{name:"Rosella Slater",age:58},status:"None"},{name:"Randolph Grant",age:76,friend:{name:"Madge Mitchell",age:48},status:"Critical"},{name:"Malone Hampton",age:42,friend:{name:"Landry Hancock",age:33},status:"Negative"},{name:"Lorna Hinton",age:27,friend:{name:"Maddox House",age:67},status:"None"},{name:"Janis Wade",age:19,friend:{name:"Nell Hines",age:82},status:"Negative",isSelected:!0},{name:"Rose Vance",age:47,friend:{name:"Jacobson Wilcox",age:69},status:"Information"},{name:"Rowe Hamilton",age:85,friend:{name:"Vasquez Craft",age:79},status:"Critical"},{name:"Trisha Ellis",age:42,friend:{name:"Jacobs Ramsey",age:41},status:"Positive"},{name:"Bowers Rowe",age:57,friend:{name:"Brigitte Buckner",age:19},status:"None"},{name:"Gamble Rice",age:85,friend:{name:"Manning Jenkins",age:57},status:"Negative",isSelected:!0},{name:"Letitia Finch",age:54,friend:{name:"Silva Fulton",age:52},status:"Information"},{name:"Elinor Middleton",age:71,friend:{name:"Hines Mckenzie",age:33},status:"None"},{name:"Jeannine Lopez",age:38,friend:{name:"Benjamin Rodriguez",age:76},status:"Negative",isSelected:!0},{name:"Natasha Simon",age:73,friend:{name:"Simon Morin",age:20},status:"Negative"},{name:"Marquita Morrison",age:61,friend:{name:"Mitzi Blake",age:80},status:"Negative"},{name:"Lula Mason",age:49,friend:{name:"Holmes York",age:31},status:"Information"},{name:"Ginger Strong",age:79,friend:{name:"Higgins Shannon",age:25},status:"None"},{name:"Reeves Finley",age:84,friend:{name:"Sheila Hickman",age:25},status:"None",isSelected:!0},{name:"Reilly Mcpherson",age:34,friend:{name:"Horton Smith",age:37},status:"Critical"},{name:"Moreno Moore",age:39,friend:{name:"Lacey Fox",age:55},status:"None"}],ie={...G,title:"Data Display / AnalyticalTable / Plugin Hooks",tags:["excludeFromSidebar","package:@ui5/webcomponents-react"]},le=[O],C={args:{data:[{age:void 0,friend:{name:null,age:0},status:"Error"},...oe],visibleRows:5},render(e){return n.jsx(S,{columns:e.columns,data:e.data,visibleRows:e.visibleRows,tableHooks:le})}},ce=e=>e.original.age<40,de=[R(ce)],ue=[R("disableSelection")],k={args:{data:U.map(e=>({...e,disableSelection:Math.random()<.5})),selectionMode:b.Multiple},render:e=>{const[a,o]=g.useState(!0);return n.jsxs(n.Fragment,{children:[n.jsx(H,{onClick:()=>{o(!0)},pressed:a,children:"with function parameter"}),n.jsx(H,{onClick:()=>{o(!1)},pressed:!a,children:"with string parameter"}),a?n.jsx(S,{data:e.data,columns:e.columns,selectionMode:e.selectionMode,tableHooks:de,visibleRows:10,header:"All under 40 are not selectable"}):n.jsx(S,{data:e.data,columns:e.columns,selectionMode:e.selectionMode,selectionBehavior:e.selectionBehavior,tableHooks:ue,visibleRows:10,header:'All with "disableSelection: true" are not selectable'})]})}},me=[N()],v={render:e=>{const[a,o]=g.useReducer(r=>!r,!0);return n.jsxs(n.Fragment,{children:[n.jsx(H,{onClick:o,pressed:a,children:`${a?"Don't ":""}Select Sub-Rows`}),n.jsx(S,{selectionMode:b.Multiple,data:K,columns:e.columns,isTreeTable:!0,tableHooks:me,reactTableOptions:{selectSubRows:a}})]})}},ge=[Z("isSelected")],M={args:{data:re},render:e=>{const[a,o]=g.useReducer(t=>!t,!0),[r,c]=g.useReducer(t=>{const[,...u]=t;return t[0].isSelected?[{...t[0],isSelected:!1},...u]:[{...t[0],isSelected:!0},...u]},e.data);return n.jsxs(n.Fragment,{children:[n.jsxs(j,{onClick:c,children:["Toggle ",n.jsx("code",{children:"isSelected"})," of 1st row"]}),n.jsx("br",{}),n.jsx(x,{children:"Clicking this button will refresh the data array passed to the `data` prop."}),n.jsx("br",{}),n.jsx("br",{}),n.jsx(S,{selectionMode:b.Multiple,data:r,columns:e.columns,tableHooks:ge}),n.jsx(j,{onClick:o,children:"Show first entries in data array"}),!a&&n.jsxs(w,{direction:"Column",children:[n.jsx("span",{children:JSON.stringify(r[0],null,2)}),n.jsx("span",{children:JSON.stringify(r[1],null,2)}),n.jsx("span",{children:JSON.stringify(r[2],null,2)}),n.jsx("span",{children:JSON.stringify(r[3],null,2)}),n.jsx("span",{children:JSON.stringify(r[4],null,2)}),n.jsx("span",{children:"..."})]})]})}},I={render:e=>{const[a,o]=g.useState({}),[r,c]=g.useState(!1),[t,u]=g.useState(100),s=m=>{c(m.target.checked)},i=m=>{u(parseInt(m.target.value))},l=g.useCallback(m=>{o(m)},[o]),d=g.useMemo(()=>[ee(l,{liveUpdate:r,wait:t})],[l,r,t]);return n.jsxs(n.Fragment,{children:[n.jsx(S,{extension:n.jsxs(n.Fragment,{children:[n.jsxs(w,{alignItems:A.Center,children:[n.jsx(x,{children:"liveUpdate: "}),n.jsx(F,{onChange:s,checked:r})]}),n.jsxs(w,{alignItems:A.Center,children:[n.jsx(x,{children:"wait: "}),n.jsx(q,{onInput:i,type:$.Number,value:`${t}`})]}),n.jsx("br",{})]}),data:e.data,columns:e.columns,tableHooks:d}),!!Object.keys(a).length&&n.jsxs(w,{direction:V.Column,children:[n.jsx("br",{}),n.jsx(T,{children:"Last fired callback of changed column:"}),n.jsx("br",{}),n.jsxs(w,{children:[n.jsx(x,{children:"Column:"}),n.jsx(T,{children:a.header.id})]}),n.jsxs(w,{children:[n.jsx(x,{children:"Width:"}),n.jsx(T,{children:a.columnWidth})]})]})]})}},pe=[{Header:"Name",accessor:"name",enableMultiSort:!0},{Header:"Age",accessor:"age",enableMultiSort:!0},{Header:"Name 2",accessor:"name2",enableMultiSort:!0},{Header:"Age 2",accessor:"age2",enableMultiSort:!0}],he=[{name:"Peter",age:40,name2:"Alissa",age2:18},{name:"Kristen",age:40,name2:"Randolph",age2:21},{name:"Peter",age:30,name2:"Rose",age2:90},{name:"Peter",age:70,name2:"Rose",age2:22},{name:"Kristen",age:60,name2:"Willis",age2:80},{name:"Kristen",age:20,name2:"Alissa",age2:80},{name:"Graham",age:40,name2:"Alissa",age2:80},{name:"Peter",age:65,name2:"Rose",age2:26},{name:"Graham",age:65,name2:"Rose",age2:26},{name:"Graham",age:65,name2:"Willis",age2:26},{name:"Graham",age:62,name2:"Willis",age2:26}],_={args:{orderedIds:["name","name2","age","age2"]},argTypes:{orderedIds:{control:"array",description:`Defines the sort priority when sorting by multiple columns, starting with the first column ID.

**Note:** Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column.`}},render(e){const a=g.useMemo(()=>[ne(e.orderedIds)],[e.orderedIds]);return n.jsx(S,{columns:pe,data:he,sortable:!0,tableHooks:a})}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};const fe=["PluginAnnounceEmptyCells","PluginDisableRowSelection","PluginIndeterminateRowSelection","PluginManualRowSelect","PluginOnColumnResize","PluginOrderedMultiSort"],Ie=Object.freeze(Object.defineProperty({__proto__:null,PluginAnnounceEmptyCells:C,PluginDisableRowSelection:k,PluginIndeterminateRowSelection:v,PluginManualRowSelect:M,PluginOnColumnResize:I,PluginOrderedMultiSort:_,__namedExportsOrder:fe,default:ie},Symbol.toStringTag,{value:"Module"}));export{Ie as C,C as P,k as a,v as b,M as c,I as d,_ as e};
