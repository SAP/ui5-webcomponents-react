import{j as e}from"./ManagedStyles-0Bwp9t5R.js";import{r as g}from"./index-BP8_t0zE.js";import{b,c as Z,F as m,a as t}from"./index-pDgtdIdZ.js";import{T as P}from"./index-CCV2VZkT.js";import{T as H}from"./index-C9yIXF6d.js";import{I as n}from"./index-D6EfrGhY.js";import{I as o}from"./Input-CFmcBLeR.js";import{L as C}from"./index-3ZF5BeCh.js";import{S as R}from"./index-DXKynGrB.js";import{O as u}from"./index-BtVD2E-q.js";import{C as y}from"./index-vCCNsTb4.js";import{B as q}from"./index-HVmdC5H9.js";import{L as J}from"./index-WueiPBT8.js";const K={title:"Layouts & Floorplans / Form",component:b,argTypes:{children:{control:{disable:!0}}},args:{backgroundDesign:Z.Transparent,titleText:"Test Form",labelSpanS:12,labelSpanM:2,labelSpanL:4,labelSpanXL:4,columnsS:1,columnsM:1,columnsL:1,columnsXL:2,style:{alignItems:"center"}}},I={render:l=>e.jsxs(b,{...l,children:[e.jsxs(m,{titleText:"Personal Data",children:[e.jsx(t,{label:"Name",children:e.jsx(n,{type:o.Text})}),e.jsx(t,{label:e.jsx(C,{children:"Address"}),children:e.jsx(n,{type:o.Text})}),e.jsx(t,{label:"Country",children:e.jsxs(R,{children:[e.jsx(u,{children:"Germany"}),e.jsx(u,{children:"France"}),e.jsx(u,{children:"Italy"})]})}),e.jsx(t,{label:e.jsx(C,{style:{alignSelf:"start",paddingTop:"0.25rem"},children:"Additional Comment"}),children:e.jsx(H,{rows:5,placeholder:"The styles of the Label of the TextArea FormItem is set to: alignSelf: 'start', paddingTop: '0.25rem'"})}),e.jsx(t,{label:"Home address",children:e.jsx(y,{checked:!0})})]}),e.jsxs(m,{titleText:"Company Data",children:[e.jsx(t,{label:"Company Name",children:e.jsx(n,{type:o.Text})}),e.jsx(t,{label:"Company Address",children:e.jsx(n,{type:o.Text})}),e.jsx(t,{label:"Company City",children:e.jsx(n,{type:o.Text})}),e.jsx(t,{label:"Company Country",children:e.jsx(n,{type:o.Text})}),e.jsx(t,{label:"Number of Employees",children:e.jsx(n,{type:o.Number,value:"5000",disabled:!0})}),e.jsx(t,{label:"Member of Partner Network",children:e.jsx(y,{checked:!0})})]}),e.jsxs(m,{titleText:"Marketing Data",children:[e.jsx(t,{label:"Email",children:e.jsx(n,{type:o.Email})}),e.jsx(t,{label:"Company Email",children:e.jsx(n,{type:o.Email})}),e.jsx(t,{label:"I want to receive the newsletter",children:e.jsx(y,{})})]})]})},p=({children:l})=>e.jsx(e.Fragment,{children:l}),Q=()=>e.jsxs(p,{children:[e.jsx(m,{titleText:"Group 1 inside custom component2",children:e.jsxs(p,{children:[e.jsx(t,{label:"FormItem 1 within group",children:e.jsx(n,{})}),e.jsx(t,{label:"FormItem 2 within group",children:e.jsx(n,{})})]})}),e.jsxs(m,{titleText:"Group 2 inside custom component2",children:[e.jsx(t,{label:"FormItem 1 within group",children:e.jsx(n,{})}),e.jsx(t,{label:"FormItem 2 within group",children:e.jsx(n,{})})]})]}),x={render:l=>e.jsxs(b,{...l,children:[e.jsx(t,{label:"Standalone FormItem",children:e.jsx(n,{})}),e.jsxs(m,{titleText:"Standalone FormGroup",children:[e.jsx(t,{label:"Standalone FormItem within group",children:e.jsx(n,{})}),e.jsx(t,{label:"Standalone FormItem within group",children:e.jsx(n,{})})]}),e.jsx(t,{label:"Standalone FormItem",children:e.jsx(n,{})}),e.jsx(p,{children:e.jsx(t,{label:"FormItem within custom component",children:e.jsx(n,{})})}),e.jsx(m,{titleText:"Standalone FormGroup with custom component",children:e.jsxs(p,{children:[e.jsx(t,{label:"FormItem 1 within custom component",children:e.jsx(n,{})}),e.jsx(t,{label:"FormItem 2 within custom component",children:e.jsx(n,{})})]})}),e.jsx(p,{children:e.jsxs(m,{titleText:"FormGroup within custom component",children:[e.jsx(t,{label:"FormItem 1 within group",children:e.jsx(n,{})}),e.jsx(t,{label:"FormItem 2 within group",children:e.jsx(n,{})})]})}),e.jsxs(p,{children:[e.jsx(m,{titleText:"Group 1 inside custom component",children:e.jsxs(p,{children:[e.jsx(t,{label:"FormItem 1 within group",children:e.jsx(n,{})}),e.jsx(t,{label:"FormItem 2 within group",children:e.jsx(n,{})})]})}),e.jsxs(m,{titleText:"Group 2 inside custom component",children:[e.jsx(t,{label:"FormItem 1 within group",children:e.jsx(n,{})}),e.jsx(t,{label:"FormItem 2 within group",children:e.jsx(n,{})})]})]}),e.jsx(Q,{})]})},i=({editMode:l,value:r,inputType:s=o.None,onInput:j,...c})=>l?e.jsx(n,{value:r,style:{width:"100%"},type:s,onInput:j,...c}):s===o.URL||s===o.Email?e.jsx(J,{href:s===o.Email?`mailto:${r}`:r,target:"_blank",...c,children:r}):e.jsx(P,{...c,children:r}),V=(l,{field:r,value:s})=>({...l,[r]:s}),F={name:"Display & Edit mode",args:{titleText:"Supplier"},render:l=>{const[r,s]=g.useReducer(d=>!d,!1,void 0),[j,c]=g.useReducer(V,{name:"Red Point Stores",street:"Main St 1618",zip:31415,city:"Maintown",country:"Germany",web:"https://www.sap.com",mail:"john.smith@sap.com",twitter:"@sap",phone:"+49 1234 56789"},void 0),{zip:T,city:S,name:z,street:B,country:U,web:W,mail:_,twitter:X,phone:$}=j,a=d=>{c({field:Object.keys(d.target.dataset)[0],value:d.target.value})};return e.jsxs(e.Fragment,{children:[e.jsxs(q,{onClick:s,children:["Toggle ",r?"Display-Only Mode":"Edit Mode"]}),e.jsxs(b,{...l,onSubmit:d=>{d.preventDefault()},children:[e.jsxs(m,{titleText:"Address",children:[e.jsx(t,{label:"Name",children:e.jsx(i,{editMode:r,value:z,onInput:a,"data-name":!0})}),e.jsx(t,{label:"Street",children:e.jsx(i,{editMode:r,value:B,onInput:a,"data-street":!0})}),e.jsx(t,{label:"ZIP Code / City",children:r?e.jsxs(e.Fragment,{children:[e.jsx(n,{value:T,type:o.Number,style:{width:"30%"},onInput:a,"data-zip":!0}),e.jsx(n,{value:S,style:{width:"70%"},onInput:a,"data-city":!0})]}):e.jsx(P,{children:`${T} ${S}`})}),e.jsx(t,{label:"Country",children:e.jsx(i,{editMode:r,value:U,onInput:a,"data-country":!0})}),e.jsx(t,{label:"Web",children:e.jsx(i,{editMode:r,value:W,inputType:o.URL,onInput:a,"data-web":!0})})]}),e.jsxs(m,{titleText:"Contact",children:[e.jsx(t,{label:"Email",children:e.jsx(i,{editMode:r,value:_,inputType:o.Email,onInput:a,"data-email":!0})}),e.jsx(t,{label:"Twitter",children:e.jsx(i,{editMode:r,value:X,onInput:a,"data-twitter":!0})}),e.jsx(t,{label:"Phone",children:e.jsx(i,{editMode:r,value:$,inputType:o.Tel,onInput:a,"data-phone":!0})})]})]})]})}},h={args:{titleText:"Address",columnsM:2,columnsL:3,columnsXL:4,labelSpanS:12,labelSpanM:12,labelSpanL:12,labelSpanXL:12,children:null},render(l){return e.jsxs(b,{...l,children:[e.jsx(t,{label:"Name",children:e.jsx(n,{id:"name"})}),e.jsx(t,{label:"Street/No",children:e.jsx(n,{})}),e.jsx(t,{label:"ZIP Code/City",children:e.jsx(n,{})}),e.jsx(t,{label:"Country",children:e.jsxs(R,{id:"country",children:[e.jsx(u,{value:"England",children:"England"}),e.jsx(u,{value:"Germany",children:"Germany"}),e.jsx(u,{value:"USA",children:"USA"})]})}),e.jsx(t,{label:"Web",children:e.jsx(n,{type:"URL"})}),e.jsx(t,{label:"Twitter",children:e.jsx(n,{})}),e.jsx(t,{label:"Email",children:e.jsx(n,{type:"Email"})}),e.jsx(t,{label:"Tel.",children:e.jsx(n,{type:"Tel"})}),e.jsx(t,{label:"SMS",children:e.jsx(n,{type:"Tel"})}),e.jsx(t,{label:"Mobile",children:e.jsx(n,{type:"Tel"})}),e.jsx(t,{label:"Pager",children:e.jsx(n,{type:"Tel"})}),e.jsx(t,{label:"Fax",children:e.jsx(n,{type:"Tel"})})]})}};var w,M,f;I.parameters={...I.parameters,docs:{...(w=I.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: props => {
    return <Form {...props}>
        <FormGroup titleText="Personal Data">
          <FormItem label="Name">
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem label={<Label>Address</Label>}>
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem label="Country">
            <Select>
              <Option>Germany</Option>
              <Option>France</Option>
              <Option>Italy</Option>
            </Select>
          </FormItem>
          <FormItem label={<Label style={{
          alignSelf: 'start',
          paddingTop: '0.25rem'
        }}>Additional Comment</Label>}>
            <TextArea rows={5} placeholder="The styles of the Label of the TextArea FormItem is set to: alignSelf: 'start', paddingTop: '0.25rem'" />
          </FormItem>
          <FormItem label="Home address">
            <CheckBox checked />
          </FormItem>
        </FormGroup>
        <FormGroup titleText="Company Data">
          <FormItem label={'Company Name'}>
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem label="Company Address">
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem label="Company City">
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem label="Company Country">
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem label="Number of Employees">
            <Input type={InputType.Number} value="5000" disabled />
          </FormItem>
          <FormItem label="Member of Partner Network">
            <CheckBox checked />
          </FormItem>
        </FormGroup>
        <FormGroup titleText="Marketing Data">
          <FormItem label="Email">
            <Input type={InputType.Email} />
          </FormItem>
          <FormItem label="Company Email">
            <Input type={InputType.Email} />
          </FormItem>
          <FormItem label="I want to receive the newsletter">
            <CheckBox />
          </FormItem>
        </FormGroup>
      </Form>;
  }
}`,...(f=(M=I.parameters)==null?void 0:M.docs)==null?void 0:f.source}}};var G,E,v;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => {
    return <Form {...args}>
        <FormItem label="Standalone FormItem">
          <Input />
        </FormItem>
        <FormGroup titleText="Standalone FormGroup">
          <FormItem label="Standalone FormItem within group">
            <Input />
          </FormItem>
          <FormItem label="Standalone FormItem within group">
            <Input />
          </FormItem>
        </FormGroup>
        <FormItem label="Standalone FormItem">
          <Input />
        </FormItem>
        <CustomComponent>
          <FormItem label="FormItem within custom component">
            <Input />
          </FormItem>
        </CustomComponent>
        <FormGroup titleText="Standalone FormGroup with custom component">
          <CustomComponent>
            <FormItem label="FormItem 1 within custom component">
              <Input />
            </FormItem>
            <FormItem label="FormItem 2 within custom component">
              <Input />
            </FormItem>
          </CustomComponent>
        </FormGroup>
        <CustomComponent>
          <FormGroup titleText="FormGroup within custom component">
            <FormItem label="FormItem 1 within group">
              <Input />
            </FormItem>
            <FormItem label="FormItem 2 within group">
              <Input />
            </FormItem>
          </FormGroup>
        </CustomComponent>
        <CustomComponent>
          <FormGroup titleText="Group 1 inside custom component">
            <CustomComponent>
              <FormItem label="FormItem 1 within group">
                <Input />
              </FormItem>
              <FormItem label="FormItem 2 within group">
                <Input />
              </FormItem>
            </CustomComponent>
          </FormGroup>
          <FormGroup titleText="Group 2 inside custom component">
            <FormItem label="FormItem 1 within group">
              <Input />
            </FormItem>
            <FormItem label="FormItem 2 within group">
              <Input />
            </FormItem>
          </FormGroup>
        </CustomComponent>
        <CustomComponent2 />
      </Form>;
  }
}`,...(v=(E=x.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var L,O,k;F.parameters={...F.parameters,docs:{...(L=F.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Display & Edit mode',
  args: {
    titleText: 'Supplier'
  },
  render: args => {
    const [editMode, toggleEditMode] = useReducer(prev => !prev, false, undefined);
    const [formState, dispatch] = useReducer(reducer, {
      name: 'Red Point Stores',
      street: 'Main St 1618',
      zip: 31415,
      city: 'Maintown',
      country: 'Germany',
      web: 'https://www.sap.com',
      mail: 'john.smith@sap.com',
      twitter: '@sap',
      phone: '+49 1234 56789'
    }, undefined);
    const {
      zip,
      city,
      name,
      street,
      country,
      web,
      mail,
      twitter,
      phone
    } = formState;
    const handleInput = e => {
      dispatch({
        field: Object.keys(e.target.dataset)[0],
        value: e.target.value
      });
    };
    return <>
        <Button onClick={toggleEditMode}>Toggle {editMode ? 'Display-Only Mode' : 'Edit Mode'}</Button>
        <Form {...args} onSubmit={e => {
        e.preventDefault();
      }}>
          <FormGroup titleText="Address">
            <FormItem label="Name">
              <StandardField editMode={editMode} value={name} onInput={handleInput} data-name />
            </FormItem>
            <FormItem label="Street">
              <StandardField editMode={editMode} value={street} onInput={handleInput} data-street />
            </FormItem>
            <FormItem label="ZIP Code / City">
              {editMode ? <>
                  <Input value={zip} type={InputType.Number} style={{
                width: '30%'
              }} onInput={handleInput} data-zip />
                  <Input value={city} style={{
                width: '70%'
              }} onInput={handleInput} data-city />
                </> : <Text>{\`\${zip} \${city}\`}</Text>}
            </FormItem>
            <FormItem label="Country">
              <StandardField editMode={editMode} value={country} onInput={handleInput} data-country />
            </FormItem>
            <FormItem label="Web">
              <StandardField editMode={editMode} value={web} inputType={InputType.URL} onInput={handleInput} data-web />
            </FormItem>
          </FormGroup>
          <FormGroup titleText="Contact">
            <FormItem label="Email">
              <StandardField editMode={editMode} value={mail} inputType={InputType.Email} onInput={handleInput} data-email />
            </FormItem>
            <FormItem label="Twitter">
              <StandardField editMode={editMode} value={twitter} onInput={handleInput} data-twitter />
            </FormItem>
            <FormItem label="Phone">
              <StandardField editMode={editMode} value={phone} inputType={InputType.Tel} onInput={handleInput} data-phone />
            </FormItem>
          </FormGroup>
        </Form>
      </>;
  }
}`,...(k=(O=F.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var D,N,A;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    titleText: 'Address',
    columnsM: 2,
    columnsL: 3,
    columnsXL: 4,
    labelSpanS: 12,
    labelSpanM: 12,
    labelSpanL: 12,
    labelSpanXL: 12,
    children: null
  },
  render(props) {
    return <Form {...props}>
        <FormItem label="Name">
          <Input id="name" />
        </FormItem>

        <FormItem label="Street/No">
          <Input></Input>
        </FormItem>

        <FormItem label="ZIP Code/City">
          <Input />
        </FormItem>

        <FormItem label="Country">
          <Select id="country">
            <Option value="England">England</Option>
            <Option value="Germany">Germany</Option>
            <Option value="USA">USA</Option>
          </Select>
        </FormItem>

        <FormItem label="Web">
          <Input type="URL" />
        </FormItem>

        <FormItem label="Twitter">
          <Input />
        </FormItem>

        <FormItem label="Email">
          <Input type="Email" />
        </FormItem>

        <FormItem label="Tel.">
          <Input type="Tel" />
        </FormItem>

        <FormItem label="SMS">
          <Input type="Tel" />
        </FormItem>
        <FormItem label="Mobile">
          <Input type="Tel" />
        </FormItem>
        <FormItem label="Pager">
          <Input type="Tel" />
        </FormItem>
        <FormItem label="Fax">
          <Input type="Tel" />
        </FormItem>
      </Form>;
  }
}`,...(A=(N=h.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};const Y=["Default","FormWithCustomComponents","DisplayEditMode","FormWithOneGroup"],ce=Object.freeze(Object.defineProperty({__proto__:null,Default:I,DisplayEditMode:F,FormWithCustomComponents:x,FormWithOneGroup:h,__namedExportsOrder:Y,default:K},Symbol.toStringTag,{value:"Module"}));export{ce as C,I as D,x as F,F as a};
