import{j as a}from"./jsx-runtime-CLpGMVip.js";import{d as se}from"./Friends500-CRbR9XAn.js";import{A as b,c as X,g as re,m as oe,d as S,e as ie}from"./AnalyticalTable.stories-BqVlaztN.js";import{I as le}from"./Input-CdGIkdwS.js";import{r as f}from"./index-D23YZj_x.js";import{F as R,c as j,a as de}from"./index-DlWYL6lf.js";import{bq as ce}from"./i18n-defaults-Cyg2J0QB.js";import{u as ue}from"./i18n-defaults-CoZOvFer.js";import{T}from"./index-MHemzhYS.js";import{e as N}from"./index-BQ73vKGB.js";import{C as Z}from"./index-CUl5dk_p.js";import{B as H}from"./index-DaCk7tY-.js";import{L as x}from"./index-DVZh2p7o.js";import{I as me}from"./index-BnC1dkI8.js";import{d as ge}from"./debounce-D7W5PopO.js";import{T as B}from"./index-DgufeG-1.js";const ee=n=>{const o=ue("@ui5/webcomponents").getText(ce),s=f.useCallback((c,{cell:{value:r}})=>typeof r!="number"&&!r?[c,{"aria-label":`${c["aria-label"]} ${o}`}]:c,[o]);n.getCellProps.push(s)};ee.pluginName="useAnnounceEmptyCells";const fe=(n,e)=>{let o=n.lastIndexOf(".");o===-1&&(o=1/0);const s=n.slice(0,o);return[e[s],o]},ne=n=>{const e={},o=n.lastIndexOf(".");return e[n]=!0,o!==-1&&Object.assign(e,ne(n.slice(0,o))),e},pe=(n,e,o)=>{const s={};let c="";const r=(u,t=null)=>{for(const i of u)if(i.subRows.length>0)r(i.subRows,i.id);else if(t!==null&&c!==t){c=t;const d=l=>{const[m,p]=fe(l,e),h=m.subRows.filter(y=>o.selectedRowIds[y.id]),g=m.subRows.length===h.length;if(h.length>0&&!g){const y=m.id;Object.assign(s,ne(y));return}p!==1/0&&d(m.id)};d(i.id)}};return r(n),s},he=n=>{const e=(r,{row:u,instance:t})=>{var d,l;let i;return t.isAllRowsSelected?i=!1:i=((l=(d=t==null?void 0:t.state)==null?void 0:d.indeterminateRows)==null?void 0:l[u.id])??!1,r.checked&&!t.state.selectedRowIds[u.id]&&u.toggleRowSelected(!0),[r,{indeterminate:i,checked:i?!0:r.checked}]},o=(r,u,t,i)=>{const{rowsById:d,state:l,rows:m}=i;if(u.type==="INDETERMINATE_ROW_IDS"){if(u.payload==="reset")return{...r,indeterminateRows:{}};const p=pe(m,d,l);return{...r,indeterminateRows:p}}},s=r=>{const{data:u,dispatch:t,rowsById:i,state:{selectedRowIds:d,indeterminateRows:l},webComponentsReactProperties:{selectionMode:m,selectionBehavior:p,isTreeTable:h}}=r;f.useEffect(()=>{h&&m===b.Multiple&&p!==X.RowOnly&&Object.keys(d).length&&Object.keys(i).length!==Object.keys(d).length?t({type:"INDETERMINATE_ROW_IDS"}):typeof l=="object"&&Object.keys(l).length&&t({type:"INDETERMINATE_ROW_IDS",payload:"reset"})},[u,d,h,m,p]),f.useEffect(()=>{},[l])},c=r=>{r.getToggleRowSelectedProps.push(e),r.stateReducers.push(o),r.useInstanceAfterData.push(s)};return c.pluginName="useIndeterminate",c},be=(n="isSelected")=>{const e=({flatRows:s,toggleRowSelected:c})=>{f.useEffect(()=>{s.forEach(({id:r,original:u})=>{n in u&&c(r,u.isSelected)})},[s,n])},o=s=>{s.useInstanceAfterData.push(e)};return o.pluginName="useManualRowSelect",o},Se=(n,e)=>{const o=ge(n,(e==null?void 0:e.wait)??100),s=r=>{const{state:u,columns:t}=r,{columnResizing:i}=u,{isResizingColumn:d,columnWidths:l}=i,m=f.useRef(void 0);f.useEffect(()=>{if(d&&(e!=null&&e.liveUpdate)){const p=t.find(h=>h.id===d);o({columnWidth:l[d],header:p})}},[i,e==null?void 0:e.liveUpdate,t]),f.useEffect(()=>{if(e!=null&&e.liveUpdate)return()=>o.cancel()},[e==null?void 0:e.liveUpdate]),f.useEffect(()=>{if(!(e!=null&&e.liveUpdate)){const p=t.find(h=>h.id===m.current);d&&(m.current=d),!d&&m.current&&n({columnWidth:l[m.current],header:p})}},[i,e==null?void 0:e.liveUpdate,t])},c=r=>{r.useFinalInstance.push(s)};return c.pluginName="useOnColumnResize",c},Re=n=>{const e=o=>{o.stateReducers.push((s,c)=>{if(c.type==="toggleSortBy"){if(s.sortBy.length<=1)return s;{const r=[...s.sortBy],u=n.flatMap(t=>{const i=r.findIndex(d=>d.id===t);if(i!==-1){const d=r[i];return r.splice(i,1),[d]}return[]});return{...s,sortBy:[...u,...r]}}}return s})};return e.pluginName="useOrderedMultiSort",e},ye={verticalAlign:"middle"},xe=(n,{instance:{webComponentsReactProperties:{selectionMode:e}}})=>{if(n.key==="header___ui5wcr__internal_selection_column"&&e===b.Multiple){const o={...n.style,cursor:"auto"};return[n,{onClick:void 0,onKeyDown:void 0,title:void 0,style:o}]}return n},we=n=>n.map(e=>e.id==="__ui5wcr__internal_selection_column"?{...e,Cell:o=>{const{webComponentsReactProperties:s,row:c}=o;return c.disableSelect===!0?c.isGrouped&&s.selectionMode===b.Single?null:s.selectionMode===b.Single?a.jsx("div",{onClick:void 0,"data-name":"internal_selection_column"}):a.jsx(Z,{...c.getToggleRowSelectedProps(),disabled:!0,style:ye,"data-name":"internal_selection_column",tabIndex:-1}):e.Cell(o)},Header:()=>null}:e),A=n=>{const e=typeof n=="function"?n:t=>re(t.original,n,void 0),o=(t,{row:i,instance:d})=>{const{webComponentsReactProperties:l}=d;return e(i)===!0?(i.disableSelect=!0,{...t,onClick:g=>{typeof l.onRowClick=="function"&&l.onRowClick(N(g,{row:i}))},onKeyDown:g=>{(g.code==="Enter"||g.code==="Space")&&(g.preventDefault(),g.code==="Enter"&&typeof l.onRowClick=="function"&&l.onRowClick(N(g,{row:i})))},onKeyUp:g=>{g.code==="Space"&&(g.preventDefault(),typeof l.onRowClick=="function"&&l.onRowClick(N(g,{row:i})))},className:l.classes.tr}):t},s=t=>[...t,n],c=(t,{cell:{row:i,column:d},instance:l})=>{const{selectionMode:m,selectionBehavior:p}=l.webComponentsReactProperties;if(e(i)===!0&&m!==b.None&&(p!==X.RowSelector||d.id==="__ui5wcr__internal_selection_column")){const{"aria-label":h,...g}=t;if(d.id==="__ui5wcr__internal_selection_column"){const te={...t.style,cursor:"auto"};return{...g,"aria-disabled":!0,style:te}}const{"aria-selected":ae,...y}=g;return y}return t},r=(t,{row:i})=>{if(e(i)===!0){const{title:d,...l}=t;return l}return t},u=t=>{t.getHeaderProps.push(xe),t.getRowProps.push(o),t.columns.push(we),t.columnsDeps.push(s),t.getCellProps.push(c),t.getToggleRowSelectedProps.push(r)};return u.pluginName="useRowDisableSelection",u},Ce=[{name:"Owens Glover",age:22,friend:{name:"Daisy Giles",age:33},status:"Negative"},{name:"Waller Nguyen",age:56,friend:{name:"Lola Banks",age:55},status:"None"},{name:"Bowen Mckay",age:32,friend:{name:"Graham Wells",age:51},status:"Information"},{name:"Freida Weeks",age:68,friend:{name:"Lee Johnson",age:61},status:"Negative"},{name:"England Whitehead",age:82,friend:{name:"Phillips Merritt",age:19},status:"Information"},{name:"Alissa Duke",age:43,friend:{name:"Rosella Slater",age:58},status:"None"},{name:"Randolph Grant",age:76,friend:{name:"Madge Mitchell",age:48},status:"Critical"},{name:"Malone Hampton",age:42,friend:{name:"Landry Hancock",age:33},status:"Negative"},{name:"Lorna Hinton",age:27,friend:{name:"Maddox House",age:67},status:"None"},{name:"Janis Wade",age:19,friend:{name:"Nell Hines",age:82},status:"Negative"},{name:"Rose Vance",age:47,friend:{name:"Jacobson Wilcox",age:69},status:"Information"},{name:"Rowe Hamilton",age:85,friend:{name:"Vasquez Craft",age:79},status:"Critical"},{name:"Trisha Ellis",age:42,friend:{name:"Jacobs Ramsey",age:41},status:"Positive"},{name:"Bowers Rowe",age:57,friend:{name:"Brigitte Buckner",age:19},status:"None"},{name:"Gamble Rice",age:85,friend:{name:"Manning Jenkins",age:57},status:"Negative"},{name:"Letitia Finch",age:54,friend:{name:"Silva Fulton",age:52},status:"Information"},{name:"Elinor Middleton",age:71,friend:{name:"Hines Mckenzie",age:33},status:"None"},{name:"Jeannine Lopez",age:38,friend:{name:"Benjamin Rodriguez",age:76},status:"Negative"},{name:"Natasha Simon",age:73,friend:{name:"Simon Morin",age:20},status:"Negative"},{name:"Marquita Morrison",age:61,friend:{name:"Mitzi Blake",age:80},status:"Negative"},{name:"Lula Mason",age:49,friend:{name:"Holmes York",age:31},status:"Information"},{name:"Ginger Strong",age:79,friend:{name:"Higgins Shannon",age:25},status:"None"},{name:"Reeves Finley",age:84,friend:{name:"Sheila Hickman",age:25},status:"None"},{name:"Reilly Mcpherson",age:34,friend:{name:"Horton Smith",age:37},status:"Critical"},{name:"Moreno Moore",age:39,friend:{name:"Lacey Fox",age:55},status:"None"},{name:"Santana Gilliam",age:20,friend:{name:"Baird Barton",age:68},status:"Critical"},{name:"Deidre Richmond",age:45,friend:{name:"Newman Adkins",age:81},status:"Positive"},{name:"Willis Wise",age:73,friend:{name:"Haynes Dominguez",age:47},status:"Negative"},{name:"Wilson Hunter",age:49,friend:{name:"Greene Wood",age:24},status:"None"},{name:"Nancy Klein",age:54,friend:{name:"Callie Foster",age:64},status:"Negative"},{name:"Woods Porter",age:74,friend:{name:"Mercer Perry",age:62},status:"None"},{name:"Hopkins Schmidt",age:34,friend:{name:"Mcfadden David",age:51},status:"Negative"},{name:"Yang Lloyd",age:16,friend:{name:"Bates Barker",age:84},status:"None"},{name:"Vinson Ferguson",age:50,friend:{name:"Dejesus Owens",age:47},status:"Negative"},{name:"Flores Jones",age:32,friend:{name:"Anita Stark",age:47},status:"Positive"},{name:"Jennings Pope",age:39,friend:{name:"Ellen Avila",age:50},status:"Information"},{name:"Bettie Fernandez",age:61,friend:{name:"Lilian Juarez",age:61},status:"Information"},{name:"Sherri Abbott",age:26,friend:{name:"Floyd Clarke",age:51},status:"Negative"},{name:"Barrett Cameron",age:47,friend:{name:"Barton Waller",age:45},status:"None"},{name:"Young Frazier",age:26,friend:{name:"Hardin Branch",age:47},status:"Negative"},{name:"Cheri Obrien",age:75,friend:{name:"Karyn Merrill",age:81},status:"Positive"},{name:"Anne Hayden",age:61,friend:{name:"Joanne Powell",age:79},status:"Negative"},{name:"Hart Cortez",age:16,friend:{name:"Gross Beard",age:82},status:"Information"},{name:"Mallory Caldwell",age:57,friend:{name:"Curry Leonard",age:68},status:"None"},{name:"Snider Eaton",age:52,friend:{name:"Lucia Santos",age:47},status:"Information"},{name:"Leticia Tillman",age:60,friend:{name:"Langley Nielsen",age:80},status:"Negative"},{name:"Kemp Workman",age:35,friend:{name:"Calderon Mcleod",age:30},status:"Information"},{name:"Campos Leach",age:75,friend:{name:"Savannah Hogan",age:36},status:"Negative"},{name:"Colon Dunn",age:33,friend:{name:"Lily Love",age:73},status:"Negative"},{name:"Koch Henson",age:60,friend:{name:"Ola Welch",age:24},status:"Positive"}],ve=[{name:"Owens Glover",age:22,friend:{name:"Daisy Giles",age:33},status:"Negative",isSelected:!0},{name:"Waller Nguyen",age:56,friend:{name:"Lola Banks",age:55},status:"None",isSelected:!0},{name:"Bowen Mckay",age:32,friend:{name:"Graham Wells",age:51},status:"Information"},{name:"Freida Weeks",age:68,friend:{name:"Lee Johnson",age:61},status:"Negative"},{name:"England Whitehead",age:82,friend:{name:"Phillips Merritt",age:19},status:"Information",isSelected:!0},{name:"Alissa Duke",age:43,friend:{name:"Rosella Slater",age:58},status:"None"},{name:"Randolph Grant",age:76,friend:{name:"Madge Mitchell",age:48},status:"Critical"},{name:"Malone Hampton",age:42,friend:{name:"Landry Hancock",age:33},status:"Negative"},{name:"Lorna Hinton",age:27,friend:{name:"Maddox House",age:67},status:"None"},{name:"Janis Wade",age:19,friend:{name:"Nell Hines",age:82},status:"Negative",isSelected:!0},{name:"Rose Vance",age:47,friend:{name:"Jacobson Wilcox",age:69},status:"Information"},{name:"Rowe Hamilton",age:85,friend:{name:"Vasquez Craft",age:79},status:"Critical"},{name:"Trisha Ellis",age:42,friend:{name:"Jacobs Ramsey",age:41},status:"Positive"},{name:"Bowers Rowe",age:57,friend:{name:"Brigitte Buckner",age:19},status:"None"},{name:"Gamble Rice",age:85,friend:{name:"Manning Jenkins",age:57},status:"Negative",isSelected:!0},{name:"Letitia Finch",age:54,friend:{name:"Silva Fulton",age:52},status:"Information"},{name:"Elinor Middleton",age:71,friend:{name:"Hines Mckenzie",age:33},status:"None"},{name:"Jeannine Lopez",age:38,friend:{name:"Benjamin Rodriguez",age:76},status:"Negative",isSelected:!0},{name:"Natasha Simon",age:73,friend:{name:"Simon Morin",age:20},status:"Negative"},{name:"Marquita Morrison",age:61,friend:{name:"Mitzi Blake",age:80},status:"Negative"},{name:"Lula Mason",age:49,friend:{name:"Holmes York",age:31},status:"Information"},{name:"Ginger Strong",age:79,friend:{name:"Higgins Shannon",age:25},status:"None"},{name:"Reeves Finley",age:84,friend:{name:"Sheila Hickman",age:25},status:"None",isSelected:!0},{name:"Reilly Mcpherson",age:34,friend:{name:"Horton Smith",age:37},status:"Critical"},{name:"Moreno Moore",age:39,friend:{name:"Lacey Fox",age:55},status:"None"}],Me={...oe,title:"Data Display / AnalyticalTable / Plugin Hooks",tags:["excludeFromSidebar"]},w={args:{data:[{age:void 0,friend:{name:null,age:0},status:"Error"},...Ce],visibleRows:5},render(n){return a.jsx(S,{columns:n.columns,data:n.data,visibleRows:n.visibleRows,tableHooks:[ee]})}},C={args:{data:se.map(n=>({...n,disableSelection:Math.random()<.5})),selectionMode:b.Multiple},render:n=>{const e=c=>c.original.age<40,[o,s]=f.useState(!0);return a.jsxs(a.Fragment,{children:[a.jsx(T,{onClick:()=>{s(!0)},pressed:o,children:"with function parameter"}),a.jsx(T,{onClick:()=>{s(!1)},pressed:!o,children:"with string parameter"}),o?a.jsx(S,{data:n.data,columns:n.columns,selectionMode:n.selectionMode,tableHooks:[A(e)],visibleRows:10,header:"All under 40 are not selectable"}):a.jsx(S,{data:n.data,columns:n.columns,selectionMode:n.selectionMode,selectionBehavior:n.selectionBehavior,tableHooks:[A("disableSelection")],visibleRows:10,header:'All with "disableSelection: true" are not selectable'})]})}},v={render:n=>{const[e,o]=f.useReducer(s=>!s,!0);return a.jsxs(a.Fragment,{children:[a.jsx(T,{onClick:o,pressed:e,children:`${e?"Don't ":""}Select Sub-Rows`}),a.jsx(S,{selectionMode:b.Multiple,data:ie,columns:n.columns,isTreeTable:!0,tableHooks:[he()],reactTableOptions:{selectSubRows:e}})]})}},M={args:{data:ve},render:n=>{const[e,o]=f.useReducer(r=>!r,!0),[s,c]=f.useReducer(r=>{const[,...u]=r;return r[0].isSelected?[{...r[0],isSelected:!1},...u]:[{...r[0],isSelected:!0},...u]},n.data);return a.jsxs(a.Fragment,{children:[a.jsxs(H,{onClick:c,children:["Toggle ",a.jsx("code",{children:"isSelected"})," of 1st row"]}),a.jsx("br",{}),a.jsx(x,{children:"Clicking this button will refresh the data array passed to the `data` prop."}),a.jsx("br",{}),a.jsx("br",{}),a.jsx(S,{selectionMode:b.Multiple,data:s,columns:n.columns,tableHooks:[be("isSelected")]}),a.jsx(H,{onClick:o,children:"Show first entries in data array"}),!e&&a.jsxs(R,{direction:"Column",children:[a.jsx("span",{children:JSON.stringify(s[0],null,2)}),a.jsx("span",{children:JSON.stringify(s[1],null,2)}),a.jsx("span",{children:JSON.stringify(s[2],null,2)}),a.jsx("span",{children:JSON.stringify(s[3],null,2)}),a.jsx("span",{children:JSON.stringify(s[4],null,2)}),a.jsx("span",{children:"..."})]})]})}},I={render:n=>{const[e,o]=f.useState({}),[s,c]=f.useState(!1),[r,u]=f.useState(100),t=l=>{c(l.target.checked)},i=l=>{u(parseInt(l.target.value))},d=l=>{o(l)};return a.jsxs(a.Fragment,{children:[a.jsx(S,{extension:a.jsxs(a.Fragment,{children:[a.jsxs(R,{alignItems:j.Center,children:[a.jsx(x,{children:"liveUpdate: "}),a.jsx(Z,{onChange:t,checked:s})]}),a.jsxs(R,{alignItems:j.Center,children:[a.jsx(x,{children:"wait: "}),a.jsx(me,{onInput:i,type:le.Number,value:`${r}`})]}),a.jsx("br",{})]}),data:n.data,columns:n.columns,tableHooks:[Se(d,{liveUpdate:s,wait:r})]}),!!Object.keys(e).length&&a.jsxs(R,{direction:de.Column,children:[a.jsx("br",{}),a.jsx(B,{children:"Last fired callback of changed column:"}),a.jsx("br",{}),a.jsxs(R,{children:[a.jsx(x,{children:"Column:"}),a.jsx(B,{children:e.header.id})]}),a.jsxs(R,{children:[a.jsx(x,{children:"Width:"}),a.jsx(B,{children:e.columnWidth})]})]})]})}},Ie=[{Header:"Name",accessor:"name",enableMultiSort:!0},{Header:"Age",accessor:"age",enableMultiSort:!0},{Header:"Name 2",accessor:"name2",enableMultiSort:!0},{Header:"Age 2",accessor:"age2",enableMultiSort:!0}],ke=[{name:"Peter",age:40,name2:"Alissa",age2:18},{name:"Kristen",age:40,name2:"Randolph",age2:21},{name:"Peter",age:30,name2:"Rose",age2:90},{name:"Peter",age:70,name2:"Rose",age2:22},{name:"Kristen",age:60,name2:"Willis",age2:80},{name:"Kristen",age:20,name2:"Alissa",age2:80},{name:"Graham",age:40,name2:"Alissa",age2:80},{name:"Peter",age:65,name2:"Rose",age2:26},{name:"Graham",age:65,name2:"Rose",age2:26},{name:"Graham",age:65,name2:"Willis",age2:26},{name:"Graham",age:62,name2:"Willis",age2:26}],k={args:{orderedIds:["name","name2","age","age2"]},argTypes:{orderedIds:{control:"array",description:`Defines the sort priority when sorting by multiple columns, starting with the first column ID.

**Note:** Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column.`}},render(n){return a.jsx(S,{columns:Ie,data:ke,sortable:!0,tableHooks:[Re(n.orderedIds)]})}};var F,D,L;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(L=(D=w.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var E,O,P;C.parameters={...C.parameters,docs:{...(E=C.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(P=(O=C.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var _,W,z;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    const [selectSubRows, setSelectSubRows] = useReducer(prev => !prev, true);
    return <>
        <ToggleButton onClick={setSelectSubRows} pressed={selectSubRows}>{\`\${selectSubRows ? "Don't " : ''}Select Sub-Rows\`}</ToggleButton>
        <AnalyticalTable selectionMode={AnalyticalTableSelectionMode.Multiple} data={dataTree} columns={args.columns} isTreeTable tableHooks={[AnalyticalTableHooks.useIndeterminateRowSelection()]} reactTableOptions={{
        selectSubRows: selectSubRows
      }} />
      </>;
  }
}`,...(z=(W=v.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var J,U,G;M.parameters={...M.parameters,docs:{...(J=M.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(G=(U=M.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var K,$,q;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(q=($=I.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var V,Y,Q;k.parameters={...k.parameters,docs:{...(V=k.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(Q=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};const Ne=["PluginAnnounceEmptyCells","PluginDisableRowSelection","PluginIndeterminateRowSelection","PluginManualRowSelect","PluginOnColumnResize","PluginOrderedMultiSort"],Ge=Object.freeze(Object.defineProperty({__proto__:null,PluginAnnounceEmptyCells:w,PluginDisableRowSelection:C,PluginIndeterminateRowSelection:v,PluginManualRowSelect:M,PluginOnColumnResize:I,PluginOrderedMultiSort:k,__namedExportsOrder:Ne,default:Me},Symbol.toStringTag,{value:"Module"}));export{Ge as C,w as P,C as a,v as b,M as c,I as d,k as e};
