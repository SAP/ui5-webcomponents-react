import{j as a}from"./jsx-runtime-CLpGMVip.js";import{d as re}from"./Friends500-CRbR9XAn.js";import{A as b,c as Z,g as oe,m as ie,d as w,e as le}from"./AnalyticalTable.stories-BqtniiX-.js";import{I as ce}from"./Input-BnVofimq.js";import{r as h}from"./index-D23YZj_x.js";import{F as S,c as j,a as de}from"./index-DMuT1d_D.js";import{bq as ue}from"./i18n-defaults-Cyg2J0QB.js";import{u as me}from"./i18n-defaults-dxEyDKPz.js";import{T as A}from"./index-RiqSJvKx.js";import{e as B}from"./index-B5N8tz-A.js";import{C as ee}from"./index-Dtmx0G4G.js";import{B as H}from"./index-Pj1kAMZ-.js";import{L as x}from"./index-Dbb581IU.js";import{I as ge}from"./index-DeQSo-0B.js";import{d as he}from"./debounce-D7W5PopO.js";import{T}from"./index-Cs_Ztk0v.js";const ne=e=>{const o=me("@ui5/webcomponents").getText(ue),r=h.useCallback((d,{cell:{value:s}})=>typeof s!="number"&&!s?[d,{"aria-label":`${d["aria-label"]} ${o}`}]:d,[o]);e.getCellProps.push(r)};ne.pluginName="useAnnounceEmptyCells";const fe=(e,n)=>{let o=e.lastIndexOf(".");o===-1&&(o=1/0);const r=e.slice(0,o);return[n[r],o]},ae=e=>{const n={},o=e.lastIndexOf(".");return n[e]=!0,o!==-1&&Object.assign(n,ae(e.slice(0,o))),n},pe=(e,n,o)=>{const r={};let d="";const s=(u,t=null)=>{for(const i of u)if(i.subRows.length>0)s(i.subRows,i.id);else if(t!==null&&d!==t){d=t;const c=l=>{const[m,f]=fe(l,n),p=m.subRows.filter(y=>o.selectedRowIds[y.id]),g=m.subRows.length===p.length;if(p.length>0&&!g){const y=m.id;Object.assign(r,ae(y));return}f!==1/0&&c(m.id)};c(i.id)}};return s(e),r},N=e=>{const n=(s,{row:u,instance:t})=>{var c,l;let i;return t.isAllRowsSelected?i=!1:i=((l=(c=t==null?void 0:t.state)==null?void 0:c.indeterminateRows)==null?void 0:l[u.id])??!1,s.checked&&!t.state.selectedRowIds[u.id]&&u.toggleRowSelected(!0),[s,{indeterminate:i,checked:i?!0:s.checked}]},o=(s,u,t,i)=>{const{rowsById:c,state:l,rows:m}=i;if(u.type==="INDETERMINATE_ROW_IDS"){if(u.payload==="reset")return{...s,indeterminateRows:{}};const f=pe(m,c,l);return{...s,indeterminateRows:f}}},r=s=>{const{data:u,dispatch:t,rowsById:i,state:{selectedRowIds:c,indeterminateRows:l},webComponentsReactProperties:{selectionMode:m,selectionBehavior:f,isTreeTable:p}}=s;h.useEffect(()=>{p&&m===b.Multiple&&f!==Z.RowOnly&&Object.keys(c).length&&Object.keys(i).length!==Object.keys(c).length?t({type:"INDETERMINATE_ROW_IDS"}):typeof l=="object"&&Object.keys(l).length&&t({type:"INDETERMINATE_ROW_IDS",payload:"reset"})},[u,c,p,m,f]),h.useEffect(()=>{typeof e=="function"&&l&&e({indeterminateRowsById:l,tableInstance:s})},[l])},d=s=>{s.getToggleRowSelectedProps.push(n),s.stateReducers.push(o),s.useInstanceAfterData.push(r)};return d.pluginName="useIndeterminate",d};try{N.displayName="useIndeterminateRowSelection",N.__docgenInfo={description:"A plugin hook that marks parent rows as indeterminate if a child row is selected in `Multiple` mode.\nWhen using this hook, it is recommended to also select all sub-rows when selecting a row. (`reactTableOptions={{ selectSubRows: true }}`)\n\n__Note:__ The `indeterminate` state has a higher priority than the `selected` state. Therefore, a row can be selected and indeterminate at the same time. This can for example happen, if `selectSubRows: true` is set and a row with sub-rows is selected and then a sub-row is unselected.\n\n__Note:__ This hook has to traverse the whole data tree on each selection, which can lead to performance degradation with large datasets. Please use with caution!",displayName:"useIndeterminateRowSelection",props:{}}}catch{}try{N.displayName="useIndeterminateRowSelection",N.__docgenInfo={description:"A plugin hook that marks parent rows as indeterminate if a child row is selected in `Multiple` mode.\nWhen using this hook, it is recommended to also select all sub-rows when selecting a row. (`reactTableOptions={{ selectSubRows: true }}`)\n\n__Note:__ The `indeterminate` state has a higher priority than the `selected` state. Therefore, a row can be selected and indeterminate at the same time. This can for example happen, if `selectSubRows: true` is set and a row with sub-rows is selected and then a sub-row is unselected.\n\n__Note:__ This hook has to traverse the whole data tree on each selection, which can lead to performance degradation with large datasets. Please use with caution!",displayName:"useIndeterminateRowSelection",props:{}}}catch{}const be=(e="isSelected")=>{const n=({flatRows:r,toggleRowSelected:d})=>{h.useEffect(()=>{r.forEach(({id:s,original:u})=>{e in u&&d(s,u.isSelected)})},[r,e])},o=r=>{r.useInstanceAfterData.push(n)};return o.pluginName="useManualRowSelect",o},we=(e,n)=>{const o=he(e,(n==null?void 0:n.wait)??100),r=s=>{const{state:u,columns:t}=s,{columnResizing:i}=u,{isResizingColumn:c,columnWidths:l}=i,m=h.useRef(void 0);h.useEffect(()=>{if(c&&(n!=null&&n.liveUpdate)){const f=t.find(p=>p.id===c);o({columnWidth:l[c],header:f})}},[i,n==null?void 0:n.liveUpdate,t]),h.useEffect(()=>{if(n!=null&&n.liveUpdate)return()=>o.cancel()},[n==null?void 0:n.liveUpdate]),h.useEffect(()=>{if(!(n!=null&&n.liveUpdate)){const f=t.find(p=>p.id===m.current);c&&(m.current=c),!c&&m.current&&e({columnWidth:l[m.current],header:f})}},[i,n==null?void 0:n.liveUpdate,t])},d=s=>{s.useFinalInstance.push(r)};return d.pluginName="useOnColumnResize",d},Se=e=>{const n=o=>{o.stateReducers.push((r,d)=>{if(d.type==="toggleSortBy"){if(r.sortBy.length<=1)return r;{const s=[...r.sortBy],u=e.flatMap(t=>{const i=s.findIndex(c=>c.id===t);if(i!==-1){const c=s[i];return s.splice(i,1),[c]}return[]});return{...r,sortBy:[...u,...s]}}}return r})};return n.pluginName="useOrderedMultiSort",n},Re={verticalAlign:"middle"},ye=(e,{instance:{webComponentsReactProperties:{selectionMode:n}}})=>{if(e.key==="header___ui5wcr__internal_selection_column"&&n===b.Multiple){const o={...e.style,cursor:"auto"};return[e,{onClick:void 0,onKeyDown:void 0,title:void 0,style:o}]}return e},xe=e=>e.map(n=>n.id==="__ui5wcr__internal_selection_column"?{...n,Cell:o=>{const{webComponentsReactProperties:r,row:d}=o;return d.disableSelect===!0?d.isGrouped&&r.selectionMode===b.Single?null:r.selectionMode===b.Single?a.jsx("div",{onClick:void 0,"data-name":"internal_selection_column"}):a.jsx(ee,{...d.getToggleRowSelectedProps(),disabled:!0,style:Re,"data-name":"internal_selection_column",tabIndex:-1}):n.Cell(o)},Header:()=>null}:n),R=e=>{const n=typeof e=="function"?e:t=>oe(t.original,e,void 0),o=(t,{row:i,instance:c})=>{const{webComponentsReactProperties:l}=c;return n(i)===!0?(i.disableSelect=!0,{...t,onClick:g=>{typeof l.onRowClick=="function"&&l.onRowClick(B(g,{row:i}))},onKeyDown:g=>{(g.code==="Enter"||g.code==="Space")&&(g.preventDefault(),g.code==="Enter"&&typeof l.onRowClick=="function"&&l.onRowClick(B(g,{row:i})))},onKeyUp:g=>{g.code==="Space"&&(g.preventDefault(),typeof l.onRowClick=="function"&&l.onRowClick(B(g,{row:i})))},className:l.classes.tr}):t},r=t=>[...t,e],d=(t,{cell:{row:i,column:c},instance:l})=>{const{selectionMode:m,selectionBehavior:f}=l.webComponentsReactProperties;if(n(i)===!0&&m!==b.None&&(f!==Z.RowSelector||c.id==="__ui5wcr__internal_selection_column")){const{"aria-label":p,...g}=t;if(c.id==="__ui5wcr__internal_selection_column"){const se={...t.style,cursor:"auto"};return{...g,"aria-disabled":!0,style:se}}const{"aria-selected":te,...y}=g;return y}return t},s=(t,{row:i})=>{if(n(i)===!0){const{title:c,...l}=t;return l}return t},u=t=>{t.getHeaderProps.push(ye),t.getRowProps.push(o),t.columns.push(xe),t.columnsDeps.push(r),t.getCellProps.push(d),t.getToggleRowSelectedProps.push(s)};return u.pluginName="useRowDisableSelection",u};try{R.displayName="useRowDisableSelection",R.__docgenInfo={description:`A plugin hook for disabling row selection of specific rows.

__Note:__ The "Select All" checkbox is not available with this hook.`,displayName:"useRowDisableSelection",props:{}}}catch{}try{R.displayName="useRowDisableSelection",R.__docgenInfo={description:`A plugin hook for disabling row selection of specific rows.

__Note:__ The "Select All" checkbox is not available with this hook.`,displayName:"useRowDisableSelection",props:{}}}catch{}const Ce=[{name:"Owens Glover",age:22,friend:{name:"Daisy Giles",age:33},status:"Negative"},{name:"Waller Nguyen",age:56,friend:{name:"Lola Banks",age:55},status:"None"},{name:"Bowen Mckay",age:32,friend:{name:"Graham Wells",age:51},status:"Information"},{name:"Freida Weeks",age:68,friend:{name:"Lee Johnson",age:61},status:"Negative"},{name:"England Whitehead",age:82,friend:{name:"Phillips Merritt",age:19},status:"Information"},{name:"Alissa Duke",age:43,friend:{name:"Rosella Slater",age:58},status:"None"},{name:"Randolph Grant",age:76,friend:{name:"Madge Mitchell",age:48},status:"Critical"},{name:"Malone Hampton",age:42,friend:{name:"Landry Hancock",age:33},status:"Negative"},{name:"Lorna Hinton",age:27,friend:{name:"Maddox House",age:67},status:"None"},{name:"Janis Wade",age:19,friend:{name:"Nell Hines",age:82},status:"Negative"},{name:"Rose Vance",age:47,friend:{name:"Jacobson Wilcox",age:69},status:"Information"},{name:"Rowe Hamilton",age:85,friend:{name:"Vasquez Craft",age:79},status:"Critical"},{name:"Trisha Ellis",age:42,friend:{name:"Jacobs Ramsey",age:41},status:"Positive"},{name:"Bowers Rowe",age:57,friend:{name:"Brigitte Buckner",age:19},status:"None"},{name:"Gamble Rice",age:85,friend:{name:"Manning Jenkins",age:57},status:"Negative"},{name:"Letitia Finch",age:54,friend:{name:"Silva Fulton",age:52},status:"Information"},{name:"Elinor Middleton",age:71,friend:{name:"Hines Mckenzie",age:33},status:"None"},{name:"Jeannine Lopez",age:38,friend:{name:"Benjamin Rodriguez",age:76},status:"Negative"},{name:"Natasha Simon",age:73,friend:{name:"Simon Morin",age:20},status:"Negative"},{name:"Marquita Morrison",age:61,friend:{name:"Mitzi Blake",age:80},status:"Negative"},{name:"Lula Mason",age:49,friend:{name:"Holmes York",age:31},status:"Information"},{name:"Ginger Strong",age:79,friend:{name:"Higgins Shannon",age:25},status:"None"},{name:"Reeves Finley",age:84,friend:{name:"Sheila Hickman",age:25},status:"None"},{name:"Reilly Mcpherson",age:34,friend:{name:"Horton Smith",age:37},status:"Critical"},{name:"Moreno Moore",age:39,friend:{name:"Lacey Fox",age:55},status:"None"},{name:"Santana Gilliam",age:20,friend:{name:"Baird Barton",age:68},status:"Critical"},{name:"Deidre Richmond",age:45,friend:{name:"Newman Adkins",age:81},status:"Positive"},{name:"Willis Wise",age:73,friend:{name:"Haynes Dominguez",age:47},status:"Negative"},{name:"Wilson Hunter",age:49,friend:{name:"Greene Wood",age:24},status:"None"},{name:"Nancy Klein",age:54,friend:{name:"Callie Foster",age:64},status:"Negative"},{name:"Woods Porter",age:74,friend:{name:"Mercer Perry",age:62},status:"None"},{name:"Hopkins Schmidt",age:34,friend:{name:"Mcfadden David",age:51},status:"Negative"},{name:"Yang Lloyd",age:16,friend:{name:"Bates Barker",age:84},status:"None"},{name:"Vinson Ferguson",age:50,friend:{name:"Dejesus Owens",age:47},status:"Negative"},{name:"Flores Jones",age:32,friend:{name:"Anita Stark",age:47},status:"Positive"},{name:"Jennings Pope",age:39,friend:{name:"Ellen Avila",age:50},status:"Information"},{name:"Bettie Fernandez",age:61,friend:{name:"Lilian Juarez",age:61},status:"Information"},{name:"Sherri Abbott",age:26,friend:{name:"Floyd Clarke",age:51},status:"Negative"},{name:"Barrett Cameron",age:47,friend:{name:"Barton Waller",age:45},status:"None"},{name:"Young Frazier",age:26,friend:{name:"Hardin Branch",age:47},status:"Negative"},{name:"Cheri Obrien",age:75,friend:{name:"Karyn Merrill",age:81},status:"Positive"},{name:"Anne Hayden",age:61,friend:{name:"Joanne Powell",age:79},status:"Negative"},{name:"Hart Cortez",age:16,friend:{name:"Gross Beard",age:82},status:"Information"},{name:"Mallory Caldwell",age:57,friend:{name:"Curry Leonard",age:68},status:"None"},{name:"Snider Eaton",age:52,friend:{name:"Lucia Santos",age:47},status:"Information"},{name:"Leticia Tillman",age:60,friend:{name:"Langley Nielsen",age:80},status:"Negative"},{name:"Kemp Workman",age:35,friend:{name:"Calderon Mcleod",age:30},status:"Information"},{name:"Campos Leach",age:75,friend:{name:"Savannah Hogan",age:36},status:"Negative"},{name:"Colon Dunn",age:33,friend:{name:"Lily Love",age:73},status:"Negative"},{name:"Koch Henson",age:60,friend:{name:"Ola Welch",age:24},status:"Positive"}],ve=[{name:"Owens Glover",age:22,friend:{name:"Daisy Giles",age:33},status:"Negative",isSelected:!0},{name:"Waller Nguyen",age:56,friend:{name:"Lola Banks",age:55},status:"None",isSelected:!0},{name:"Bowen Mckay",age:32,friend:{name:"Graham Wells",age:51},status:"Information"},{name:"Freida Weeks",age:68,friend:{name:"Lee Johnson",age:61},status:"Negative"},{name:"England Whitehead",age:82,friend:{name:"Phillips Merritt",age:19},status:"Information",isSelected:!0},{name:"Alissa Duke",age:43,friend:{name:"Rosella Slater",age:58},status:"None"},{name:"Randolph Grant",age:76,friend:{name:"Madge Mitchell",age:48},status:"Critical"},{name:"Malone Hampton",age:42,friend:{name:"Landry Hancock",age:33},status:"Negative"},{name:"Lorna Hinton",age:27,friend:{name:"Maddox House",age:67},status:"None"},{name:"Janis Wade",age:19,friend:{name:"Nell Hines",age:82},status:"Negative",isSelected:!0},{name:"Rose Vance",age:47,friend:{name:"Jacobson Wilcox",age:69},status:"Information"},{name:"Rowe Hamilton",age:85,friend:{name:"Vasquez Craft",age:79},status:"Critical"},{name:"Trisha Ellis",age:42,friend:{name:"Jacobs Ramsey",age:41},status:"Positive"},{name:"Bowers Rowe",age:57,friend:{name:"Brigitte Buckner",age:19},status:"None"},{name:"Gamble Rice",age:85,friend:{name:"Manning Jenkins",age:57},status:"Negative",isSelected:!0},{name:"Letitia Finch",age:54,friend:{name:"Silva Fulton",age:52},status:"Information"},{name:"Elinor Middleton",age:71,friend:{name:"Hines Mckenzie",age:33},status:"None"},{name:"Jeannine Lopez",age:38,friend:{name:"Benjamin Rodriguez",age:76},status:"Negative",isSelected:!0},{name:"Natasha Simon",age:73,friend:{name:"Simon Morin",age:20},status:"Negative"},{name:"Marquita Morrison",age:61,friend:{name:"Mitzi Blake",age:80},status:"Negative"},{name:"Lula Mason",age:49,friend:{name:"Holmes York",age:31},status:"Information"},{name:"Ginger Strong",age:79,friend:{name:"Higgins Shannon",age:25},status:"None"},{name:"Reeves Finley",age:84,friend:{name:"Sheila Hickman",age:25},status:"None",isSelected:!0},{name:"Reilly Mcpherson",age:34,friend:{name:"Horton Smith",age:37},status:"Critical"},{name:"Moreno Moore",age:39,friend:{name:"Lacey Fox",age:55},status:"None"}],Ie={...ie,title:"Data Display / AnalyticalTable / Plugin Hooks",tags:["excludeFromSidebar"]},C={args:{data:[{age:void 0,friend:{name:null,age:0},status:"Error"},...Ce],visibleRows:5},render(e){return a.jsx(w,{columns:e.columns,data:e.data,visibleRows:e.visibleRows,tableHooks:[ne]})}},v={args:{data:re.map(e=>({...e,disableSelection:Math.random()<.5})),selectionMode:b.Multiple},render:e=>{const n=d=>d.original.age<40,[o,r]=h.useState(!0);return a.jsxs(a.Fragment,{children:[a.jsx(A,{onClick:()=>{r(!0)},pressed:o,children:"with function parameter"}),a.jsx(A,{onClick:()=>{r(!1)},pressed:!o,children:"with string parameter"}),o?a.jsx(w,{data:e.data,columns:e.columns,selectionMode:e.selectionMode,tableHooks:[R(n)],visibleRows:10,header:"All under 40 are not selectable"}):a.jsx(w,{data:e.data,columns:e.columns,selectionMode:e.selectionMode,selectionBehavior:e.selectionBehavior,tableHooks:[R("disableSelection")],visibleRows:10,header:'All with "disableSelection: true" are not selectable'})]})}},I={render:e=>{const[n,o]=h.useReducer(r=>!r,!0);return a.jsxs(a.Fragment,{children:[a.jsx(A,{onClick:o,pressed:n,children:`${n?"Don't ":""}Select Sub-Rows`}),a.jsx(w,{selectionMode:b.Multiple,data:le,columns:e.columns,isTreeTable:!0,tableHooks:[N()],reactTableOptions:{selectSubRows:n}})]})}},_={args:{data:ve},render:e=>{const[n,o]=h.useReducer(s=>!s,!0),[r,d]=h.useReducer(s=>{const[,...u]=s;return s[0].isSelected?[{...s[0],isSelected:!1},...u]:[{...s[0],isSelected:!0},...u]},e.data);return a.jsxs(a.Fragment,{children:[a.jsxs(H,{onClick:d,children:["Toggle ",a.jsx("code",{children:"isSelected"})," of 1st row"]}),a.jsx("br",{}),a.jsx(x,{children:"Clicking this button will refresh the data array passed to the `data` prop."}),a.jsx("br",{}),a.jsx("br",{}),a.jsx(w,{selectionMode:b.Multiple,data:r,columns:e.columns,tableHooks:[be("isSelected")]}),a.jsx(H,{onClick:o,children:"Show first entries in data array"}),!n&&a.jsxs(S,{direction:"Column",children:[a.jsx("span",{children:JSON.stringify(r[0],null,2)}),a.jsx("span",{children:JSON.stringify(r[1],null,2)}),a.jsx("span",{children:JSON.stringify(r[2],null,2)}),a.jsx("span",{children:JSON.stringify(r[3],null,2)}),a.jsx("span",{children:JSON.stringify(r[4],null,2)}),a.jsx("span",{children:"..."})]})]})}},k={render:e=>{const[n,o]=h.useState({}),[r,d]=h.useState(!1),[s,u]=h.useState(100),t=l=>{d(l.target.checked)},i=l=>{u(parseInt(l.target.value))},c=l=>{o(l)};return a.jsxs(a.Fragment,{children:[a.jsx(w,{extension:a.jsxs(a.Fragment,{children:[a.jsxs(S,{alignItems:j.Center,children:[a.jsx(x,{children:"liveUpdate: "}),a.jsx(ee,{onChange:t,checked:r})]}),a.jsxs(S,{alignItems:j.Center,children:[a.jsx(x,{children:"wait: "}),a.jsx(ge,{onInput:i,type:ce.Number,value:`${s}`})]}),a.jsx("br",{})]}),data:e.data,columns:e.columns,tableHooks:[we(c,{liveUpdate:r,wait:s})]}),!!Object.keys(n).length&&a.jsxs(S,{direction:de.Column,children:[a.jsx("br",{}),a.jsx(T,{children:"Last fired callback of changed column:"}),a.jsx("br",{}),a.jsxs(S,{children:[a.jsx(x,{children:"Column:"}),a.jsx(T,{children:n.header.id})]}),a.jsxs(S,{children:[a.jsx(x,{children:"Width:"}),a.jsx(T,{children:n.columnWidth})]})]})]})}},_e=[{Header:"Name",accessor:"name",enableMultiSort:!0},{Header:"Age",accessor:"age",enableMultiSort:!0},{Header:"Name 2",accessor:"name2",enableMultiSort:!0},{Header:"Age 2",accessor:"age2",enableMultiSort:!0}],ke=[{name:"Peter",age:40,name2:"Alissa",age2:18},{name:"Kristen",age:40,name2:"Randolph",age2:21},{name:"Peter",age:30,name2:"Rose",age2:90},{name:"Peter",age:70,name2:"Rose",age2:22},{name:"Kristen",age:60,name2:"Willis",age2:80},{name:"Kristen",age:20,name2:"Alissa",age2:80},{name:"Graham",age:40,name2:"Alissa",age2:80},{name:"Peter",age:65,name2:"Rose",age2:26},{name:"Graham",age:65,name2:"Rose",age2:26},{name:"Graham",age:65,name2:"Willis",age2:26},{name:"Graham",age:62,name2:"Willis",age2:26}],M={args:{orderedIds:["name","name2","age","age2"]},argTypes:{orderedIds:{control:"array",description:`Defines the sort priority when sorting by multiple columns, starting with the first column ID.

**Note:** Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column.`}},render(e){return a.jsx(w,{columns:_e,data:ke,sortable:!0,tableHooks:[Se(e.orderedIds)]})}};var D,F,L;C.parameters={...C.parameters,docs:{...(D=C.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(L=(F=C.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var O,E,P;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    data: dataLarge.map(item => ({
      ...item,
      disableSelection: Math.random() < 0.5
    })),
    selectionMode: AnalyticalTableSelectionMode.Multiple
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
}`,...(P=(E=v.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var W,z,J;I.parameters={...I.parameters,docs:{...(W=I.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => {
    const [selectSubRows, setSelectSubRows] = useReducer(prev => !prev, true);
    return <>
        <ToggleButton onClick={setSelectSubRows} pressed={selectSubRows}>{\`\${selectSubRows ? "Don't " : ''}Select Sub-Rows\`}</ToggleButton>
        <AnalyticalTable selectionMode={AnalyticalTableSelectionMode.Multiple} data={dataTree} columns={args.columns} isTreeTable tableHooks={[AnalyticalTableHooks.useIndeterminateRowSelection()]} reactTableOptions={{
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
        <AnalyticalTable selectionMode={AnalyticalTableSelectionMode.Multiple} data={data} columns={args.columns} tableHooks={[AnalyticalTableHooks.useManualRowSelect('isSelected')]} />
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
}`,...(K=(G=_.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var $,q,V;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(V=(q=k.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var Y,Q,X;M.parameters={...M.parameters,docs:{...(Y=M.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(X=(Q=M.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Me=["PluginAnnounceEmptyCells","PluginDisableRowSelection","PluginIndeterminateRowSelection","PluginManualRowSelect","PluginOnColumnResize","PluginOrderedMultiSort"],Ge=Object.freeze(Object.defineProperty({__proto__:null,PluginAnnounceEmptyCells:C,PluginDisableRowSelection:v,PluginIndeterminateRowSelection:I,PluginManualRowSelect:_,PluginOnColumnResize:k,PluginOrderedMultiSort:M,__namedExportsOrder:Me,default:Ie},Symbol.toStringTag,{value:"Module"}));export{Ge as C,C as P,v as a,I as b,_ as c,k as d,M as e};
