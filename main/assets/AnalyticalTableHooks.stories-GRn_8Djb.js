import{j as a}from"./jsx-runtime-DtaoT6pD.js";import{A as p,c as Z,g as re,m as oe,d as b,e as le,f as ie}from"./AnalyticalTable.stories-LKZ7ipa_.js";import{r as f}from"./index-OjgoNOWw.js";import{F as S,a as N,b as ce}from"./index-mlUqNAao.js";import{T as E}from"./index-z42VFOj5.js";import{aT as de}from"./i18n-defaults-X1FTyPSK.js";import{u as ue}from"./i18n-defaults-HYsq20ry.js";import{T}from"./index-QKaBQ0WF.js";import{e as j}from"./index-ENBflQbU.js";import{C as ee}from"./index-Uy6y45Tm.js";import{B as A}from"./index-G5yog7_J.js";import{L as y}from"./index-iQ8OBacd.js";import{I as me}from"./index-LLSn-R8j.js";import{I as ge}from"./Input-l-VGVNnc.js";import{d as fe}from"./debounce-F9irgL9Y.js";const ne=n=>{const o=ue("@ui5/webcomponents").getText(de),r=f.useCallback((d,{cell:{value:s}})=>typeof s!="number"&&!s?[d,{"aria-label":`${d["aria-label"]} ${o}`}]:d,[o]);n.getCellProps.push(r)};ne.pluginName="useAnnounceEmptyCells";const he=(n,e)=>{let o=n.lastIndexOf(".");o===-1&&(o=1/0);const r=n.slice(0,o);return[e[r],o]},ae=n=>{const e={},o=n.lastIndexOf(".");return e[n]=!0,o!==-1&&Object.assign(e,ae(n.slice(0,o))),e},pe=(n,e,o)=>{const r={};let d="";const s=(u,t=null)=>{for(const l of u)if(l.subRows.length>0)s(l.subRows,l.id);else if(t!==null&&d!==t){d=t;const c=i=>{const[m,h]=he(i,e),g=m.subRows.filter(R=>o.selectedRowIds[R.id]),B=m.subRows.length===g.length;if(g.length>0&&!B){const R=m.id;Object.assign(r,ae(R));return}h!==1/0&&c(m.id)};c(l.id)}};return s(n),r},_=n=>{const e=(s,{row:u,instance:t})=>{var c,i;let l;return t.isAllRowsSelected?l=!1:l=((i=(c=t==null?void 0:t.state)==null?void 0:c.indeterminateRows)==null?void 0:i[u.id])??!1,s.checked&&!t.state.selectedRowIds[u.id]&&u.toggleRowSelected(!0),[s,{indeterminate:l,checked:l?!0:s.checked}]},o=(s,u,t,l)=>{const{rowsById:c,state:i,rows:m}=l;if(u.type==="INDETERMINATE_ROW_IDS"){if(u.payload==="reset")return{...s,indeterminateRows:{}};const h=pe(m,c,i);return{...s,indeterminateRows:h}}},r=s=>{const{data:u,dispatch:t,rowsById:l,state:{selectedRowIds:c,indeterminateRows:i},webComponentsReactProperties:{selectionMode:m,selectionBehavior:h,isTreeTable:g}}=s;f.useEffect(()=>{g&&m===p.MultiSelect&&h!==Z.RowOnly&&Object.keys(c).length&&Object.keys(l).length!==Object.keys(c).length?t({type:"INDETERMINATE_ROW_IDS"}):typeof i=="object"&&Object.keys(i).length&&t({type:"INDETERMINATE_ROW_IDS",payload:"reset"})},[u,c,g,m,h]),f.useEffect(()=>{typeof n=="function"&&i&&n({indeterminateRowsById:i,tableInstance:s})},[i])},d=s=>{s.getToggleRowSelectedProps.push(e),s.stateReducers.push(o),s.useInstanceAfterData.push(r)};return d.pluginName="useIndeterminate",d};try{_.displayName="useIndeterminateRowSelection",_.__docgenInfo={description:"A plugin hook that marks parent rows as indeterminate if a child row is selected in `MultiSelect` mode.\nWhen using this hook, it is recommended to also select all sub-rows when selecting a row. (`reactTableOptions={{ selectSubRows: true }}`)\n\n__Note:__ The `indeterminate` state has a higher priority than the `selected` state. Therefore, a row can be selected and indeterminate at the same time. This can for example happen, if `selectSubRows: true` is set and a row with sub-rows is selected and then a sub-row is unselected.\n\n__Note:__ This hook has to traverse the whole data tree on each selection, which can lead to performance degradation with large datasets. Please use with caution!",displayName:"useIndeterminateRowSelection",props:{}}}catch{}const be=(n="isSelected")=>{const e=({flatRows:r,toggleRowSelected:d})=>{f.useEffect(()=>{r.forEach(({id:s,original:u})=>{n in u&&d(s,u.isSelected)})},[r,n])},o=r=>{r.useInstanceAfterData.push(e)};return o.pluginName="useManualRowSelect",o},Se=(n,e)=>{const o=fe(n,(e==null?void 0:e.wait)??100),r=s=>{const{state:u,columns:t}=s,{columnResizing:l}=u,{isResizingColumn:c,columnWidths:i}=l,m=f.useRef(void 0);f.useEffect(()=>{if(c&&(e!=null&&e.liveUpdate)){const h=t.find(g=>g.id===c);o({columnWidth:i[c],header:h})}},[l,e==null?void 0:e.liveUpdate,t]),f.useEffect(()=>{if(e!=null&&e.liveUpdate)return()=>o.cancel()},[e==null?void 0:e.liveUpdate]),f.useEffect(()=>{if(!(e!=null&&e.liveUpdate)){const h=t.find(g=>g.id===m.current);c&&(m.current=c),!c&&m.current&&n({columnWidth:i[m.current],header:h})}},[l,e==null?void 0:e.liveUpdate,t])},d=s=>{s.useFinalInstance.push(r)};return d.pluginName="useOnColumnResize",d},Re=n=>{const e=o=>{o.stateReducers.push((r,d)=>{if(d.type==="toggleSortBy"){if(r.sortBy.length<=1)return r;{const s=[...r.sortBy],u=n.flatMap(t=>{const l=s.findIndex(c=>c.id===t);if(l!==-1){const c=s[l];return s.splice(l,1),[c]}return[]});return{...r,sortBy:[...u,...s]}}}return r})};return e.pluginName="useOrderedMultiSort",e},ye={verticalAlign:"middle"},we=(n,{instance:{webComponentsReactProperties:{selectionMode:e}}})=>{if(n.key==="header___ui5wcr__internal_selection_column"&&e===p.MultiSelect){const o={...n.style,cursor:"auto"};return[n,{onClick:void 0,onKeyDown:void 0,style:o}]}return n},xe=n=>n.map(e=>e.id==="__ui5wcr__internal_selection_column"?{...e,Cell:o=>{const{webComponentsReactProperties:r,row:d}=o;return d.disableSelect===!0?d.isGrouped&&r.selectionMode===p.SingleSelect?null:r.selectionMode===p.SingleSelect?a.jsx("div",{onClick:void 0,"data-name":"internal_selection_column"}):a.jsx(ee,{...d.getToggleRowSelectedProps(),disabled:!0,style:ye,"data-name":"internal_selection_column",tabIndex:-1}):e.Cell(o)},Header:()=>null}:e),v=n=>{const e=typeof n=="function"?n:t=>re(t.original,n,void 0),o=(t,{row:l,instance:c})=>{const{webComponentsReactProperties:i}=c;return e(l)===!0?(l.disableSelect=!0,{...t,onClick:g=>{typeof i.onRowClick=="function"&&i.onRowClick(j(g,{row:l}))},onKeyDown:g=>{(g.code==="Space"||g.code==="Enter")&&(g.preventDefault(),typeof i.onRowClick=="function"&&i.onRowClick(j(g,{row:l})))},className:i.classes.tr}):t},r=t=>[...t,n],d=(t,{cell:{row:l,column:c},instance:i})=>{const{selectionMode:m,selectionBehavior:h}=i.webComponentsReactProperties;if(e(l)===!0&&m!==p.None&&(h!==Z.RowSelector||c.id==="__ui5wcr__internal_selection_column")){const{"aria-label":g,...B}=t;if(c.id==="__ui5wcr__internal_selection_column"){const se={...t.style,cursor:"auto"};return{...B,"aria-disabled":!0,style:se}}const{"aria-selected":te,...R}=B;return R}return t},s=(t,{row:l})=>{if(e(l)===!0){const{title:c,...i}=t;return i}return t},u=t=>{t.getHeaderProps.push(we),t.getRowProps.push(o),t.columns.push(xe),t.columnsDeps.push(r),t.getCellProps.push(d),t.getToggleRowSelectedProps.push(s)};return u.pluginName="useRowDisableSelection",u};try{v.displayName="useRowDisableSelection",v.__docgenInfo={description:`A plugin hook for disabling row selection of specific rows.
__Note:__ The "Select All" checkbox is not available with this hook.`,displayName:"useRowDisableSelection",props:{}}}catch{}const Ce=[{name:"Owens Glover",age:22,friend:{name:"Daisy Giles",age:33},status:"Error"},{name:"Waller Nguyen",age:56,friend:{name:"Lola Banks",age:55},status:"None"},{name:"Bowen Mckay",age:32,friend:{name:"Graham Wells",age:51},status:"Information"},{name:"Freida Weeks",age:68,friend:{name:"Lee Johnson",age:61},status:"Error"},{name:"England Whitehead",age:82,friend:{name:"Phillips Merritt",age:19},status:"Information"},{name:"Alissa Duke",age:43,friend:{name:"Rosella Slater",age:58},status:"None"},{name:"Randolph Grant",age:76,friend:{name:"Madge Mitchell",age:48},status:"Warning"},{name:"Malone Hampton",age:42,friend:{name:"Landry Hancock",age:33},status:"Error"},{name:"Lorna Hinton",age:27,friend:{name:"Maddox House",age:67},status:"None"},{name:"Janis Wade",age:19,friend:{name:"Nell Hines",age:82},status:"Error"},{name:"Rose Vance",age:47,friend:{name:"Jacobson Wilcox",age:69},status:"Information"},{name:"Rowe Hamilton",age:85,friend:{name:"Vasquez Craft",age:79},status:"Warning"},{name:"Trisha Ellis",age:42,friend:{name:"Jacobs Ramsey",age:41},status:"Success"},{name:"Bowers Rowe",age:57,friend:{name:"Brigitte Buckner",age:19},status:"None"},{name:"Gamble Rice",age:85,friend:{name:"Manning Jenkins",age:57},status:"Error"},{name:"Letitia Finch",age:54,friend:{name:"Silva Fulton",age:52},status:"Information"},{name:"Elinor Middleton",age:71,friend:{name:"Hines Mckenzie",age:33},status:"None"},{name:"Jeannine Lopez",age:38,friend:{name:"Benjamin Rodriguez",age:76},status:"Error"},{name:"Natasha Simon",age:73,friend:{name:"Simon Morin",age:20},status:"Error"},{name:"Marquita Morrison",age:61,friend:{name:"Mitzi Blake",age:80},status:"Error"},{name:"Lula Mason",age:49,friend:{name:"Holmes York",age:31},status:"Information"},{name:"Ginger Strong",age:79,friend:{name:"Higgins Shannon",age:25},status:"None"},{name:"Reeves Finley",age:84,friend:{name:"Sheila Hickman",age:25},status:"None"},{name:"Reilly Mcpherson",age:34,friend:{name:"Horton Smith",age:37},status:"Warning"},{name:"Moreno Moore",age:39,friend:{name:"Lacey Fox",age:55},status:"None"},{name:"Santana Gilliam",age:20,friend:{name:"Baird Barton",age:68},status:"Warning"},{name:"Deidre Richmond",age:45,friend:{name:"Newman Adkins",age:81},status:"Success"},{name:"Willis Wise",age:73,friend:{name:"Haynes Dominguez",age:47},status:"Error"},{name:"Wilson Hunter",age:49,friend:{name:"Greene Wood",age:24},status:"None"},{name:"Nancy Klein",age:54,friend:{name:"Callie Foster",age:64},status:"Error"},{name:"Woods Porter",age:74,friend:{name:"Mercer Perry",age:62},status:"None"},{name:"Hopkins Schmidt",age:34,friend:{name:"Mcfadden David",age:51},status:"Error"},{name:"Yang Lloyd",age:16,friend:{name:"Bates Barker",age:84},status:"None"},{name:"Vinson Ferguson",age:50,friend:{name:"Dejesus Owens",age:47},status:"Error"},{name:"Flores Jones",age:32,friend:{name:"Anita Stark",age:47},status:"Success"},{name:"Jennings Pope",age:39,friend:{name:"Ellen Avila",age:50},status:"Information"},{name:"Bettie Fernandez",age:61,friend:{name:"Lilian Juarez",age:61},status:"Information"},{name:"Sherri Abbott",age:26,friend:{name:"Floyd Clarke",age:51},status:"Error"},{name:"Barrett Cameron",age:47,friend:{name:"Barton Waller",age:45},status:"None"},{name:"Young Frazier",age:26,friend:{name:"Hardin Branch",age:47},status:"Error"},{name:"Cheri Obrien",age:75,friend:{name:"Karyn Merrill",age:81},status:"Success"},{name:"Anne Hayden",age:61,friend:{name:"Joanne Powell",age:79},status:"Error"},{name:"Hart Cortez",age:16,friend:{name:"Gross Beard",age:82},status:"Information"},{name:"Mallory Caldwell",age:57,friend:{name:"Curry Leonard",age:68},status:"None"},{name:"Snider Eaton",age:52,friend:{name:"Lucia Santos",age:47},status:"Information"},{name:"Leticia Tillman",age:60,friend:{name:"Langley Nielsen",age:80},status:"Error"},{name:"Kemp Workman",age:35,friend:{name:"Calderon Mcleod",age:30},status:"Information"},{name:"Campos Leach",age:75,friend:{name:"Savannah Hogan",age:36},status:"Error"},{name:"Colon Dunn",age:33,friend:{name:"Lily Love",age:73},status:"Error"},{name:"Koch Henson",age:60,friend:{name:"Ola Welch",age:24},status:"Success"}],Me=[{name:"Owens Glover",age:22,friend:{name:"Daisy Giles",age:33},status:"Error",isSelected:!0},{name:"Waller Nguyen",age:56,friend:{name:"Lola Banks",age:55},status:"None",isSelected:!0},{name:"Bowen Mckay",age:32,friend:{name:"Graham Wells",age:51},status:"Information"},{name:"Freida Weeks",age:68,friend:{name:"Lee Johnson",age:61},status:"Error"},{name:"England Whitehead",age:82,friend:{name:"Phillips Merritt",age:19},status:"Information",isSelected:!0},{name:"Alissa Duke",age:43,friend:{name:"Rosella Slater",age:58},status:"None"},{name:"Randolph Grant",age:76,friend:{name:"Madge Mitchell",age:48},status:"Warning"},{name:"Malone Hampton",age:42,friend:{name:"Landry Hancock",age:33},status:"Error"},{name:"Lorna Hinton",age:27,friend:{name:"Maddox House",age:67},status:"None"},{name:"Janis Wade",age:19,friend:{name:"Nell Hines",age:82},status:"Error",isSelected:!0},{name:"Rose Vance",age:47,friend:{name:"Jacobson Wilcox",age:69},status:"Information"},{name:"Rowe Hamilton",age:85,friend:{name:"Vasquez Craft",age:79},status:"Warning"},{name:"Trisha Ellis",age:42,friend:{name:"Jacobs Ramsey",age:41},status:"Success"},{name:"Bowers Rowe",age:57,friend:{name:"Brigitte Buckner",age:19},status:"None"},{name:"Gamble Rice",age:85,friend:{name:"Manning Jenkins",age:57},status:"Error",isSelected:!0},{name:"Letitia Finch",age:54,friend:{name:"Silva Fulton",age:52},status:"Information"},{name:"Elinor Middleton",age:71,friend:{name:"Hines Mckenzie",age:33},status:"None"},{name:"Jeannine Lopez",age:38,friend:{name:"Benjamin Rodriguez",age:76},status:"Error",isSelected:!0},{name:"Natasha Simon",age:73,friend:{name:"Simon Morin",age:20},status:"Error"},{name:"Marquita Morrison",age:61,friend:{name:"Mitzi Blake",age:80},status:"Error"},{name:"Lula Mason",age:49,friend:{name:"Holmes York",age:31},status:"Information"},{name:"Ginger Strong",age:79,friend:{name:"Higgins Shannon",age:25},status:"None"},{name:"Reeves Finley",age:84,friend:{name:"Sheila Hickman",age:25},status:"None",isSelected:!0},{name:"Reilly Mcpherson",age:34,friend:{name:"Horton Smith",age:37},status:"Warning"},{name:"Moreno Moore",age:39,friend:{name:"Lacey Fox",age:55},status:"None"}],Ie={...oe,title:"Data Display / AnalyticalTable / Plugin Hooks",tags:["excludeFromSidebar"]},w={args:{data:[{age:void 0,friend:{name:null,age:0},status:"Error"},...Ce],visibleRows:5},render(n){return a.jsx(b,{columns:n.columns,data:n.data,visibleRows:n.visibleRows,tableHooks:[ne]})}},x={args:{data:le.map(n=>({...n,disableSelection:Math.random()<.5})),selectionMode:p.MultiSelect},render:n=>{const e=d=>d.original.age<40,[o,r]=f.useState(!0);return a.jsxs(a.Fragment,{children:[a.jsx(T,{onClick:()=>{r(!0)},pressed:o,children:"with function parameter"}),a.jsx(T,{onClick:()=>{r(!1)},pressed:!o,children:"with string parameter"}),o?a.jsx(b,{data:n.data,columns:n.columns,selectionMode:n.selectionMode,tableHooks:[v(e)],visibleRows:10,header:"All under 40 are not selectable"}):a.jsx(b,{data:n.data,columns:n.columns,selectionMode:n.selectionMode,selectionBehavior:n.selectionBehavior,tableHooks:[v("disableSelection")],visibleRows:10,header:'All with "disableSelection: true" are not selectable'})]})}},C={render:n=>{const[e,o]=f.useReducer(r=>!r,!0);return a.jsxs(a.Fragment,{children:[a.jsx(T,{onClick:o,pressed:e,children:`${e?"Don't ":""}Select Sub-Rows`}),a.jsx(b,{selectionMode:p.MultiSelect,data:ie,columns:n.columns,isTreeTable:!0,tableHooks:[_()],reactTableOptions:{selectSubRows:e}})]})}},M={args:{data:Me},render:n=>{const[e,o]=f.useReducer(s=>!s,!0),[r,d]=f.useReducer(s=>{const[,...u]=s;return s[0].isSelected?[{...s[0],isSelected:!1},...u]:[{...s[0],isSelected:!0},...u]},n.data);return a.jsxs(a.Fragment,{children:[a.jsxs(A,{onClick:d,children:["Toggle ",a.jsx("code",{children:"isSelected"})," of 1st row"]}),a.jsx("br",{}),a.jsx(y,{children:"Clicking this button will refresh the data array passed to the `data` prop."}),a.jsx("br",{}),a.jsx("br",{}),a.jsx(b,{selectionMode:p.MultiSelect,data:r,columns:n.columns,tableHooks:[be("isSelected")]}),a.jsx(A,{onClick:o,children:"Show first entries in data array"}),!e&&a.jsxs(S,{direction:"Column",children:[a.jsx("span",{children:JSON.stringify(r[0],null,2)}),a.jsx("span",{children:JSON.stringify(r[1],null,2)}),a.jsx("span",{children:JSON.stringify(r[2],null,2)}),a.jsx("span",{children:JSON.stringify(r[3],null,2)}),a.jsx("span",{children:JSON.stringify(r[4],null,2)}),a.jsx("span",{children:"..."})]})]})}},I={render:n=>{const[e,o]=f.useState({}),[r,d]=f.useState(!1),[s,u]=f.useState(100),t=i=>{d(i.target.checked)},l=i=>{u(parseInt(i.target.value))},c=i=>{o(i)};return a.jsxs(a.Fragment,{children:[a.jsx(b,{extension:a.jsxs(a.Fragment,{children:[a.jsxs(S,{alignItems:N.Center,children:[a.jsx(y,{children:"liveUpdate: "}),a.jsx(ee,{onChange:t,checked:r})]}),a.jsxs(S,{alignItems:N.Center,children:[a.jsx(y,{children:"wait: "}),a.jsx(me,{onInput:l,type:ge.Number,value:`${s}`})]}),a.jsx("br",{})]}),data:n.data,columns:n.columns,tableHooks:[Se(c,{liveUpdate:r,wait:s})]}),!!Object.keys(e).length&&a.jsxs(S,{direction:ce.Column,children:[a.jsx("br",{}),a.jsx(E,{children:"Last fired callback of changed column:"}),a.jsx("br",{}),a.jsxs(S,{children:[a.jsx(y,{children:"Column:"}),a.jsx(E,{children:e.header.id})]}),a.jsxs(S,{children:[a.jsx(y,{children:"Width:"}),a.jsx(E,{children:e.columnWidth})]})]})]})}},ke=[{Header:"Name",accessor:"name",enableMultiSort:!0},{Header:"Age",accessor:"age",enableMultiSort:!0},{Header:"Name 2",accessor:"name2",enableMultiSort:!0},{Header:"Age 2",accessor:"age2",enableMultiSort:!0}],Be=[{name:"Peter",age:40,name2:"Alissa",age2:18},{name:"Kristen",age:40,name2:"Randolph",age2:21},{name:"Peter",age:30,name2:"Rose",age2:90},{name:"Peter",age:70,name2:"Rose",age2:22},{name:"Kristen",age:60,name2:"Willis",age2:80},{name:"Kristen",age:20,name2:"Alissa",age2:80},{name:"Graham",age:40,name2:"Alissa",age2:80},{name:"Peter",age:65,name2:"Rose",age2:26},{name:"Graham",age:65,name2:"Rose",age2:26},{name:"Graham",age:65,name2:"Willis",age2:26},{name:"Graham",age:62,name2:"Willis",age2:26}],k={args:{orderedIds:["name","name2","age","age2"]},argTypes:{orderedIds:{control:"array",description:`Defines the sort priority when sorting by multiple columns, starting with the first column ID.

**Note:** Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column.`}},render(n){return a.jsx(b,{columns:ke,data:Be,sortable:!0,tableHooks:[Re(n.orderedIds)]})}};var H,F,D;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(D=(F=w.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var W,L,O;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(O=(L=x.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var P,z,J;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    const [selectSubRows, setSelectSubRows] = useReducer(prev => !prev, true);
    return <>
        <ToggleButton onClick={setSelectSubRows} pressed={selectSubRows}>{\`\${selectSubRows ? "Don't " : ''}Select Sub-Rows\`}</ToggleButton>
        <AnalyticalTable selectionMode={AnalyticalTableSelectionMode.MultiSelect} data={dataTree} columns={args.columns} isTreeTable tableHooks={[AnalyticalTableHooks.useIndeterminateRowSelection()]} reactTableOptions={{
        selectSubRows: selectSubRows
      }} />
      </>;
  }
}`,...(J=(z=C.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var U,G,K;M.parameters={...M.parameters,docs:{...(U=M.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(K=(G=M.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var $,V,Y;I.parameters={...I.parameters,docs:{...($=I.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(Y=(V=I.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var q,Q,X;k.parameters={...k.parameters,docs:{...(q=k.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(X=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const ve=["PluginAnnounceEmptyCells","PluginDisableRowSelection","PluginIndeterminateRowSelection","PluginManualRowSelect","PluginOnColumnResize","PluginOrderedMultiSort"],Ue=Object.freeze(Object.defineProperty({__proto__:null,PluginAnnounceEmptyCells:w,PluginDisableRowSelection:x,PluginIndeterminateRowSelection:C,PluginManualRowSelect:M,PluginOnColumnResize:I,PluginOrderedMultiSort:k,__namedExportsOrder:ve,default:Ie},Symbol.toStringTag,{value:"Module"}));export{Ue as C,w as P,x as a,C as b,M as c,I as d,k as e};
