import{j as n}from"./useIsomorphicLayoutEffect-CJg151Ok.js";import{T as C}from"./TableRow-CXVq3Iy2.js";import{r as w}from"./index-CP2MHerv.js";import{T as t,a as l,b as i,c as e}from"./index-7OflF7sg.js";const g={title:"Data Display / Table",component:t,argTypes:{columns:{control:{disable:!0}},children:{control:{disable:!0}}},args:{},tags:["package:@ui5/webcomponents-compat"]},a={render:o=>n.jsxs(t,{...o,columns:n.jsxs(n.Fragment,{children:[n.jsx(l,{style:{width:"12rem"},children:n.jsx("span",{children:"Product"})}),n.jsx(l,{minWidth:800,popinText:"Supplier",children:n.jsx("span",{children:"Supplier"})}),n.jsx(l,{minWidth:600,popinText:"Dimensions",demandPopin:!0,children:n.jsx("span",{children:"Dimensions"})}),n.jsx(l,{minWidth:600,popinText:"Weight",demandPopin:!0,children:n.jsx("span",{children:"Weight"})}),n.jsx(l,{children:n.jsx("span",{children:"Price"})})]}),children:[n.jsxs(i,{children:[n.jsx(e,{children:n.jsx("span",{children:"Notebook Basic"})}),n.jsx(e,{children:n.jsx("span",{children:"Very Best Screens"})}),n.jsx(e,{children:n.jsx("span",{children:"30 x 18 x 3cm"})}),n.jsx(e,{children:n.jsx("span",{children:"4.2KG"})}),n.jsx(e,{children:n.jsx("span",{children:"956EUR"})})]}),n.jsxs(i,{children:[n.jsx(e,{children:n.jsx("span",{children:"Notebook Basic 17HT-1001"})}),n.jsx(e,{children:n.jsx("span",{children:"Very Best Screens"})}),n.jsx(e,{children:n.jsx("span",{children:"29 x 17 x 3.1cm"})}),n.jsx(e,{children:n.jsx("span",{children:"4.5KG"})}),n.jsx(e,{children:n.jsx("span",{children:"1249EUR"})})]})]})},r={render:()=>{const o=s=>new Array(25).fill("").map((f,p)=>n.jsxs(i,{children:[n.jsx(e,{children:n.jsx("span",{children:p+s})}),n.jsx(e,{children:n.jsx("span",{children:"Placeholder"})})]},`${p+s}-row`)),[h,u]=w.useState(o(1)),j=()=>{u(s=>[...s,...o(s.length+1)])};return n.jsx("div",{style:{height:"250px",overflow:"auto"},children:n.jsx(t,{onLoadMore:j,growing:C.Scroll,columns:n.jsxs(n.Fragment,{children:[n.jsx(l,{children:n.jsx("span",{children:"Column 1"})}),n.jsx(l,{children:n.jsx("span",{children:"Column 2"})})]}),children:h})})}};var c,d,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    return <Table {...args} columns={<>
            <TableColumn style={{
        width: '12rem'
      }}>
              <span>Product</span>
            </TableColumn>
            <TableColumn minWidth={800} popinText="Supplier">
              <span>Supplier</span>
            </TableColumn>
            <TableColumn minWidth={600} popinText="Dimensions" demandPopin>
              <span>Dimensions</span>
            </TableColumn>
            <TableColumn minWidth={600} popinText="Weight" demandPopin>
              <span>Weight</span>
            </TableColumn>
            <TableColumn>
              <span>Price</span>
            </TableColumn>
          </>}>
        <TableRow>
          <TableCell>
            <span>Notebook Basic</span>
          </TableCell>
          <TableCell>
            <span>Very Best Screens</span>
          </TableCell>
          <TableCell>
            <span>30 x 18 x 3cm</span>
          </TableCell>
          <TableCell>
            <span>4.2KG</span>
          </TableCell>
          <TableCell>
            <span>956EUR</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span>Notebook Basic 17HT-1001</span>
          </TableCell>
          <TableCell>
            <span>Very Best Screens</span>
          </TableCell>
          <TableCell>
            <span>29 x 17 x 3.1cm</span>
          </TableCell>
          <TableCell>
            <span>4.5KG</span>
          </TableCell>
          <TableCell>
            <span>1249EUR</span>
          </TableCell>
        </TableRow>
      </Table>;
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var x,T,b;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const createRows = indexOffset => {
      return new Array(25).fill('').map((_, index) => <TableRow key={\`\${index + indexOffset}-row\`}>
          <TableCell>
            <span>{index + indexOffset}</span>
          </TableCell>
          <TableCell>
            <span>Placeholder</span>
          </TableCell>
        </TableRow>);
    };
    const [rows, setRows] = useState(createRows(1));
    const onLoadMore = () => {
      setRows(prev => [...prev, ...createRows(prev.length + 1)]);
    };
    return <div style={{
      height: '250px',
      overflow: 'auto'
    }}>
        <Table onLoadMore={onLoadMore} growing={TableGrowingMode.Scroll} columns={<>
              <TableColumn>
                <span>Column 1</span>
              </TableColumn>
              <TableColumn>
                <span>Column 2</span>
              </TableColumn>
            </>}>
          {rows}
        </Table>
      </div>;
  }
}`,...(b=(T=r.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const R=["Default","GrowingTable"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:a,GrowingTable:r,__namedExportsOrder:R,default:g},Symbol.toStringTag,{value:"Module"}));export{D as C,a as D,r as G};
