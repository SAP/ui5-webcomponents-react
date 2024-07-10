import{j as e}from"./useIsomorphicLayoutEffect-CC_9R8NV.js";import{r as C}from"./index-BP8_t0zE.js";import{b as I,c as K,F as l,a as n}from"./index-DduBt_lh.js";import{T as B}from"./index-WspRYDV-.js";import{T as Q}from"./index-CkSRu_00.js";import{I as t}from"./index-DPbim_Ax.js";import{I as a}from"./Input-Cw07Zbij.js";import{L as d}from"./index-DRuGOEJb.js";import{S as U}from"./index-CX1qLcrJ.js";import{O as c}from"./index-CwP6Fpq1.js";import{C as f}from"./index-CKVZ_7Ua.js";import{B as V}from"./index-Cqc2lMTm.js";import{L as Y}from"./index-lqfu6sXD.js";const ee={title:"Layouts & Floorplans / Form",component:I,argTypes:{children:{control:{disable:!0}}},args:{backgroundDesign:K.Transparent,titleText:"Test Form",labelSpanS:12,labelSpanM:2,labelSpanL:4,labelSpanXL:4,columnsS:1,columnsM:1,columnsL:1,columnsXL:2,style:{alignItems:"center"}}},b={render:o=>e.jsxs(I,{...o,children:[e.jsxs(l,{titleText:"Personal Data",children:[e.jsx(n,{label:"Name",children:e.jsx(t,{type:a.Text})}),e.jsx(n,{label:e.jsx(d,{children:"Address"}),children:e.jsx(t,{type:a.Text})}),e.jsx(n,{label:"Country",children:e.jsxs(U,{children:[e.jsx(c,{children:"Germany"}),e.jsx(c,{children:"France"}),e.jsx(c,{children:"Italy"})]})}),e.jsx(n,{label:e.jsx(d,{style:{alignSelf:"start",paddingTop:"0.25rem"},children:"Additional Comment"}),children:e.jsx(Q,{rows:5,placeholder:"The styles of the Label of the TextArea FormItem is set to: alignSelf: 'start', paddingTop: '0.25rem'"})}),e.jsx(n,{label:"Home address",children:e.jsx(f,{checked:!0})})]}),e.jsxs(l,{titleText:"Company Data",children:[e.jsx(n,{label:"Company Name",children:e.jsx(t,{type:a.Text})}),e.jsx(n,{label:"Company Address",children:e.jsx(t,{type:a.Text})}),e.jsx(n,{label:"Company City",children:e.jsx(t,{type:a.Text})}),e.jsx(n,{label:"Company Country",children:e.jsx(t,{type:a.Text})}),e.jsx(n,{label:"Number of Employees",children:e.jsx(t,{type:a.Number,value:"5000",disabled:!0})}),e.jsx(n,{label:"Member of Partner Network",children:e.jsx(f,{checked:!0})})]}),e.jsxs(l,{titleText:"Marketing Data",children:[e.jsx(n,{label:"Email",children:e.jsx(t,{type:a.Email})}),e.jsx(n,{label:"Company Email",children:e.jsx(t,{type:a.Email})}),e.jsx(n,{label:"I want to receive the newsletter",children:e.jsx(f,{})})]})]})},u=({children:o})=>e.jsx(e.Fragment,{children:o}),ne=()=>e.jsxs(u,{children:[e.jsx(l,{titleText:"Group 1 inside custom component2",children:e.jsxs(u,{children:[e.jsx(n,{label:"FormItem 1 within group",children:e.jsx(t,{})}),e.jsx(n,{label:"FormItem 2 within group",children:e.jsx(t,{})})]})}),e.jsxs(l,{titleText:"Group 2 inside custom component2",children:[e.jsx(n,{label:"FormItem 1 within group",children:e.jsx(t,{})}),e.jsx(n,{label:"FormItem 2 within group",children:e.jsx(t,{})})]})]}),h={render:o=>e.jsxs(I,{...o,children:[e.jsx(n,{label:"Standalone FormItem",children:e.jsx(t,{})}),e.jsxs(l,{titleText:"Standalone FormGroup",children:[e.jsx(n,{label:"Standalone FormItem within group",children:e.jsx(t,{})}),e.jsx(n,{label:"Standalone FormItem within group",children:e.jsx(t,{})})]}),e.jsx(n,{label:"Standalone FormItem",children:e.jsx(t,{})}),e.jsx(u,{children:e.jsx(n,{label:"FormItem within custom component",children:e.jsx(t,{})})}),e.jsx(l,{titleText:"Standalone FormGroup with custom component",children:e.jsxs(u,{children:[e.jsx(n,{label:"FormItem 1 within custom component",children:e.jsx(t,{})}),e.jsx(n,{label:"FormItem 2 within custom component",children:e.jsx(t,{})})]})}),e.jsx(u,{children:e.jsxs(l,{titleText:"FormGroup within custom component",children:[e.jsx(n,{label:"FormItem 1 within group",children:e.jsx(t,{})}),e.jsx(n,{label:"FormItem 2 within group",children:e.jsx(t,{})})]})}),e.jsxs(u,{children:[e.jsx(l,{titleText:"Group 1 inside custom component",children:e.jsxs(u,{children:[e.jsx(n,{label:"FormItem 1 within group",children:e.jsx(t,{})}),e.jsx(n,{label:"FormItem 2 within group",children:e.jsx(t,{})})]})}),e.jsxs(l,{titleText:"Group 2 inside custom component",children:[e.jsx(n,{label:"FormItem 1 within group",children:e.jsx(t,{})}),e.jsx(n,{label:"FormItem 2 within group",children:e.jsx(t,{})})]})]}),e.jsx(ne,{})]})},i=({editMode:o,value:r,inputType:s=a.None,onInput:T,...x})=>o?e.jsx(t,{value:r,style:{width:"100%"},type:s,onInput:T,...x}):s===a.URL||s===a.Email?e.jsx(Y,{href:s===a.Email?`mailto:${r}`:r,target:"_blank",...x,children:r}):e.jsx(B,{...x,children:r}),te=(o,{field:r,value:s})=>({...o,[r]:s}),F={name:"Display & Edit mode",args:{titleText:"Supplier"},render:o=>{const[r,s]=C.useReducer(p=>!p,!1,void 0),[T,x]=C.useReducer(te,{name:"Red Point Stores",street:"Main St 1618",zip:31415,city:"Maintown",country:"Germany",web:"https://www.sap.com",mail:"john.smith@sap.com",twitter:"@sap",phone:"+49 1234 56789"},void 0),{zip:g,city:S,name:q,street:W,country:_,web:X,mail:Z,twitter:H,phone:J}=T,m=p=>{x({field:Object.keys(p.target.dataset)[0],value:p.target.value})};return e.jsxs(e.Fragment,{children:[e.jsxs(V,{onClick:s,children:["Toggle ",r?"Display-Only Mode":"Edit Mode"]}),e.jsxs(I,{...o,onSubmit:p=>{p.preventDefault()},children:[e.jsxs(l,{titleText:"Address",children:[e.jsx(n,{label:"Name",children:e.jsx(i,{editMode:r,value:q,onInput:m,"data-name":!0})}),e.jsx(n,{label:"Street",children:e.jsx(i,{editMode:r,value:W,onInput:m,"data-street":!0})}),e.jsx(n,{label:"ZIP Code / City",children:r?e.jsxs(e.Fragment,{children:[e.jsx(t,{value:g,type:a.Number,style:{width:"30%"},onInput:m,"data-zip":!0}),e.jsx(t,{value:S,style:{width:"70%"},onInput:m,"data-city":!0})]}):e.jsx(B,{children:`${g} ${S}`})}),e.jsx(n,{label:"Country",children:e.jsx(i,{editMode:r,value:_,onInput:m,"data-country":!0})}),e.jsx(n,{label:"Web",children:e.jsx(i,{editMode:r,value:X,inputType:a.URL,onInput:m,"data-web":!0})})]}),e.jsxs(l,{titleText:"Contact",children:[e.jsx(n,{label:"Email",children:e.jsx(i,{editMode:r,value:Z,inputType:a.Email,onInput:m,"data-email":!0})}),e.jsx(n,{label:"Twitter",children:e.jsx(i,{editMode:r,value:H,onInput:m,"data-twitter":!0})}),e.jsx(n,{label:"Phone",children:e.jsx(i,{editMode:r,value:J,inputType:a.Tel,onInput:m,"data-phone":!0})})]})]})]})}},j={args:{titleText:"Address",columnsM:2,columnsL:3,columnsXL:4,labelSpanS:12,labelSpanM:12,labelSpanL:12,labelSpanXL:12,children:null},render(o){return e.jsxs(I,{...o,children:[e.jsx(n,{label:"Name",children:e.jsx(t,{id:"name"})}),e.jsx(n,{label:"Street/No",children:e.jsx(t,{})}),e.jsx(n,{label:"ZIP Code/City",children:e.jsx(t,{})}),e.jsx(n,{label:"Country",children:e.jsxs(U,{id:"country",children:[e.jsx(c,{value:"England",children:"England"}),e.jsx(c,{value:"Germany",children:"Germany"}),e.jsx(c,{value:"USA",children:"USA"})]})}),e.jsx(n,{label:"Web",children:e.jsx(t,{type:"URL"})}),e.jsx(n,{label:"Twitter",children:e.jsx(t,{})}),e.jsx(n,{label:"Email",children:e.jsx(t,{type:"Email"})}),e.jsx(n,{label:"Tel.",children:e.jsx(t,{type:"Tel"})}),e.jsx(n,{label:"SMS",children:e.jsx(t,{type:"Tel"})}),e.jsx(n,{label:"Mobile",children:e.jsx(t,{type:"Tel"})}),e.jsx(n,{label:"Pager",children:e.jsx(t,{type:"Tel"})}),e.jsx(n,{label:"Fax",children:e.jsx(t,{type:"Tel"})})]})}},y={name:"Custom Label (a11y)",render(){const o=C.useId();return e.jsxs(I,{titleText:"Not announced (because of `aria-label` of the `Form`)","aria-label":"Custom announcement of the form title via aria-label",children:[e.jsx(l,{titleText:"Default Group Announcement",children:e.jsx(n,{label:e.jsx(d,{children:"Default announcement with custom Label"}),children:e.jsx(t,{})})}),e.jsx(l,{titleText:"Not announced (because of `accessibleName` of the `Input`)",children:e.jsx(n,{label:e.jsx(d,{children:"Not announced (because of `accessibleName` of the `Input`)"}),children:e.jsx(t,{accessibleName:"Custom announcement via accessibleName prop"})})}),e.jsx(l,{titleText:"Not announced (because of `accessibleNameRef` of the `Input`)",children:e.jsxs(n,{label:e.jsx(d,{children:"Not announced (because of `accessibleNameRef` of the `Input`)"}),children:[e.jsx(t,{accessibleNameRef:`${o}-input1`}),e.jsx("span",{id:`${o}-input1`,className:"pseudoInvisibleText",children:"Custom announcement via accessibleNameRef prop"})]})}),e.jsx(l,{titleText:"Announced (because of `accessibleNameRef` of the `Input` and linking id)",id:`${o}-group`,children:e.jsxs(n,{label:e.jsx(d,{children:"Not announced (because of `accessibleNameRef` of the `Input`)"}),children:[e.jsx(t,{accessibleNameRef:`${o}-group ${o}-input2`}),e.jsx("span",{id:`${o}-input2`,className:"pseudoInvisibleText",children:"Custom announcement via accessibleNameRef prop"})]})})]})}};var w,N,G;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(G=(N=b.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var v,M,L;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(L=(M=h.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var E,R,D;F.parameters={...F.parameters,docs:{...(E=F.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(R=F.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var k,A,O;j.parameters={...j.parameters,docs:{...(k=j.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(O=(A=j.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var $,P,z;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:'{\n  name: \'Custom Label (a11y)\',\n  render() {\n    const uniqueId = useId();\n    return <Form titleText="Not announced (because of `aria-label` of the `Form`)" aria-label="Custom announcement of the form title via aria-label">\n        <FormGroup titleText="Default Group Announcement">\n          <FormItem label={<Label>Default announcement with custom Label</Label>}>\n            <Input />\n          </FormItem>\n        </FormGroup>\n        <FormGroup titleText="Not announced (because of `accessibleName` of the `Input`)">\n          <FormItem label={<Label>Not announced (because of `accessibleName` of the `Input`)</Label>}>\n            <Input accessibleName="Custom announcement via accessibleName prop" />\n          </FormItem>\n        </FormGroup>\n        <FormGroup titleText="Not announced (because of `accessibleNameRef` of the `Input`)">\n          <FormItem label={<Label>Not announced (because of `accessibleNameRef` of the `Input`)</Label>}>\n            <Input accessibleNameRef={`${uniqueId}-input1`} />\n            <span id={`${uniqueId}-input1`} className="pseudoInvisibleText">\n              Custom announcement via accessibleNameRef prop\n            </span>\n          </FormItem>\n        </FormGroup>\n        <FormGroup titleText="Announced (because of `accessibleNameRef` of the `Input` and linking id)" id={`${uniqueId}-group`}>\n          <FormItem label={<Label>Not announced (because of `accessibleNameRef` of the `Input`)</Label>}>\n            <Input accessibleNameRef={`${uniqueId}-group ${uniqueId}-input2`} />\n            <span id={`${uniqueId}-input2`} className="pseudoInvisibleText">\n              Custom announcement via accessibleNameRef prop\n            </span>\n          </FormItem>\n        </FormGroup>\n      </Form>;\n  }\n}',...(z=(P=y.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};const oe=["Default","FormWithCustomComponents","DisplayEditMode","FormItemsWithoutGroup","CustomLabel"],he=Object.freeze(Object.defineProperty({__proto__:null,CustomLabel:y,Default:b,DisplayEditMode:F,FormItemsWithoutGroup:j,FormWithCustomComponents:h,__namedExportsOrder:oe,default:ee},Symbol.toStringTag,{value:"Module"}));export{he as C,b as D,h as F,F as a,y as b};
