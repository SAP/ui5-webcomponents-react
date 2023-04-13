import{a as r,F as L,j as e}from"./jsx-runtime-670450c2.js";import{r as x}from"./index-f1f749bf.js";import{L as l}from"./index-13cf759c.js";import{T as s,a,b as c,c as n,e as R}from"./index-96a4df9e.js";const f={title:"Data Display / Table",component:s,argTypes:{columns:{control:{disable:!0}},children:{control:{disable:!0}}},args:{}},i={render:b=>r(s,{...b,columns:r(L,{children:[e(a,{style:{width:"12rem"},children:e(l,{children:"Product"})}),e(a,{minWidth:800,popinText:"Supplier",children:e(l,{children:"Supplier"})}),e(a,{minWidth:600,popinText:"Dimensions",demandPopin:!0,children:e(l,{children:"Dimensions"})}),e(a,{minWidth:600,popinText:"Weight",demandPopin:!0,children:e(l,{children:"Weight"})}),e(a,{children:e(l,{children:"Price"})})]}),children:[r(c,{children:[e(n,{children:e(l,{children:"Notebook Basic"})}),e(n,{children:e(l,{children:"Very Best Screens"})}),e(n,{children:e(l,{children:"30 x 18 x 3cm"})}),e(n,{children:e(l,{children:"4.2KG"})}),e(n,{children:e(l,{children:"956EUR"})})]}),r(c,{children:[e(n,{children:e(l,{children:"Notebook Basic 17HT-1001"})}),e(n,{children:e(l,{children:"Very Best Screens"})}),e(n,{children:e(l,{children:"29 x 17 x 3.1cm"})}),e(n,{children:e(l,{children:"4.5KG"})}),e(n,{children:e(l,{children:"1249EUR"})})]})]})},t={render:()=>{const b=o=>new Array(25).fill("").map((P,d)=>r(c,{children:[e(n,{children:e(l,{children:d+o})}),e(n,{children:e(l,{children:"Placeholder"})})]},`${d+o}-row`)),[w,g]=x.useState(b(1));return e("div",{style:{height:"250px",overflow:"auto"},children:e(s,{onLoadMore:()=>{g(o=>[...o,...b(o.length+1)])},growing:R.Scroll,columns:r(L,{children:[e(a,{children:e(l,{children:"Column 1"})}),e(a,{children:e(l,{children:"Column 2"})})]}),children:w})})}};var m,T,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(T=i.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var u,p,C;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(C=(p=t.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};const S=["Default","GrowingTable"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:i,GrowingTable:t,__namedExportsOrder:S,default:f},Symbol.toStringTag,{value:"Module"}));export{B as C,i as D,t as G};
//# sourceMappingURL=Table.stories-3b7ec27e.js.map
