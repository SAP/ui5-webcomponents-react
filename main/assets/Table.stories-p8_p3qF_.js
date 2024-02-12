import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{r as L}from"./index-OjgoNOWw.js";import{L as l}from"./index-9KpeIejM.js";import{T as b,a as r,b as t,c as n,d as w}from"./index-zW5zT3qK.js";const g={title:"Data Display / Table",component:b,argTypes:{columns:{control:{disable:!0}},children:{control:{disable:!0}}},args:{}},o={render:i=>e.jsxs(b,{...i,columns:e.jsxs(e.Fragment,{children:[e.jsx(r,{style:{width:"12rem"},children:e.jsx(l,{children:"Product"})}),e.jsx(r,{minWidth:800,popinText:"Supplier",children:e.jsx(l,{children:"Supplier"})}),e.jsx(r,{minWidth:600,popinText:"Dimensions",demandPopin:!0,children:e.jsx(l,{children:"Dimensions"})}),e.jsx(r,{minWidth:600,popinText:"Weight",demandPopin:!0,children:e.jsx(l,{children:"Weight"})}),e.jsx(r,{children:e.jsx(l,{children:"Price"})})]}),children:[e.jsxs(t,{children:[e.jsx(n,{children:e.jsx(l,{children:"Notebook Basic"})}),e.jsx(n,{children:e.jsx(l,{children:"Very Best Screens"})}),e.jsx(n,{children:e.jsx(l,{children:"30 x 18 x 3cm"})}),e.jsx(n,{children:e.jsx(l,{children:"4.2KG"})}),e.jsx(n,{children:e.jsx(l,{children:"956EUR"})})]}),e.jsxs(t,{children:[e.jsx(n,{children:e.jsx(l,{children:"Notebook Basic 17HT-1001"})}),e.jsx(n,{children:e.jsx(l,{children:"Very Best Screens"})}),e.jsx(n,{children:e.jsx(l,{children:"29 x 17 x 3.1cm"})}),e.jsx(n,{children:e.jsx(l,{children:"4.5KG"})}),e.jsx(n,{children:e.jsx(l,{children:"1249EUR"})})]})]})},s={render:()=>{const i=a=>new Array(25).fill("").map((f,c)=>e.jsxs(t,{children:[e.jsx(n,{children:e.jsx(l,{children:c+a})}),e.jsx(n,{children:e.jsx(l,{children:"Placeholder"})})]},`${c+a}-row`)),[p,j]=L.useState(i(1)),C=()=>{j(a=>[...a,...i(a.length+1)])};return e.jsx("div",{style:{height:"250px",overflow:"auto"},children:e.jsx(b,{onLoadMore:C,growing:w.Scroll,columns:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:e.jsx(l,{children:"Column 1"})}),e.jsx(r,{children:e.jsx(l,{children:"Column 2"})})]}),children:p})})}};var d,x,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    return <Table {...args} columns={<>
            <TableColumn style={{
        width: '12rem'
      }}>
              <Label>Product</Label>
            </TableColumn>
            <TableColumn minWidth={800} popinText="Supplier">
              <Label>Supplier</Label>
            </TableColumn>
            <TableColumn minWidth={600} popinText="Dimensions" demandPopin>
              <Label>Dimensions</Label>
            </TableColumn>
            <TableColumn minWidth={600} popinText="Weight" demandPopin>
              <Label>Weight</Label>
            </TableColumn>
            <TableColumn>
              <Label>Price</Label>
            </TableColumn>
          </>}>
        <TableRow>
          <TableCell>
            <Label>Notebook Basic</Label>
          </TableCell>
          <TableCell>
            <Label>Very Best Screens</Label>
          </TableCell>
          <TableCell>
            <Label>30 x 18 x 3cm</Label>
          </TableCell>
          <TableCell>
            <Label>4.2KG</Label>
          </TableCell>
          <TableCell>
            <Label>956EUR</Label>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Label>Notebook Basic 17HT-1001</Label>
          </TableCell>
          <TableCell>
            <Label>Very Best Screens</Label>
          </TableCell>
          <TableCell>
            <Label>29 x 17 x 3.1cm</Label>
          </TableCell>
          <TableCell>
            <Label>4.5KG</Label>
          </TableCell>
          <TableCell>
            <Label>1249EUR</Label>
          </TableCell>
        </TableRow>
      </Table>;
  }
}`,...(m=(x=o.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var T,h,u;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const createRows = indexOffset => {
      return new Array(25).fill('').map((_, index) => <TableRow key={\`\${index + indexOffset}-row\`}>
          <TableCell>
            <Label>{index + indexOffset}</Label>
          </TableCell>
          <TableCell>
            <Label>Placeholder</Label>
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
                <Label>Column 1</Label>
              </TableColumn>
              <TableColumn>
                <Label>Column 2</Label>
              </TableColumn>
            </>}>
          {rows}
        </Table>
      </div>;
  }
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const R=["Default","GrowingTable"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:o,GrowingTable:s,__namedExportsOrder:R,default:g},Symbol.toStringTag,{value:"Module"}));export{D as C,o as D,s as G};
