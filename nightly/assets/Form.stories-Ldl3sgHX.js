import{j as e,r as F,Q as E,J as T}from"./iframe-D7jNN5F7.js";import{a as r}from"./Input-C1LBCJrC.js";import{F as y,a as b,b as t}from"./index-BbxdXPKM.js";import{T as k}from"./index-Bkw6TKU8.js";import{I as o}from"./index-B9wKJ0ov.js";import{L as n}from"./index-BhDv_qjx.js";import{S as D}from"./index-cKUCfcCB.js";import{O as h}from"./index-BHm2R3XB.js";import{C as I}from"./index-B24FJ1pD.js";import{L as N}from"./index-DKghAgRr.js";const G={title:"Layouts & Floorplans / Form",component:y,argTypes:{children:{control:{disable:!0}}},args:{headerText:"Test Form",layout:"S1 M1 L2 XL2",labelSpan:"S12 M4 L4 XL4"},tags:["package:@ui5/webcomponents"]},u={render:s=>e.jsxs(y,{...s,children:[e.jsxs(b,{headerText:"Personal Data",children:[e.jsx(t,{labelContent:e.jsx(n,{children:"Name"}),children:e.jsx(o,{type:r.Text})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Address"}),children:e.jsx(o,{type:r.Text})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Country"}),children:e.jsxs(D,{children:[e.jsx(h,{children:"Germany"}),e.jsx(h,{children:"France"}),e.jsx(h,{children:"Italy"})]})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Additional Comment"}),className:"formAlignLabelStart",children:e.jsx(k,{rows:5,placeholder:"The label is aligned to start by setting `<class>::part(label){  align-self: start; }` "})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Home address"}),children:e.jsx(I,{checked:!0})})]}),e.jsxs(b,{headerText:"Company Data",children:[e.jsx(t,{labelContent:e.jsx(n,{children:"Company Name"}),children:e.jsx(o,{type:r.Text})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Company Address"}),children:e.jsx(o,{type:r.Text})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Company City"}),children:e.jsx(o,{type:r.Text})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Company Country"}),children:e.jsx(o,{type:r.Text})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Number of Employees"}),children:e.jsx(o,{type:r.Number,value:"5000",disabled:!0})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Member of Partner Network"}),children:e.jsx(I,{checked:!0})})]}),e.jsxs(b,{headerText:"Marketing Data",children:[e.jsx(t,{labelContent:e.jsx(n,{children:"Email"}),children:e.jsx(o,{type:r.Email})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Company Email"}),children:e.jsx(o,{type:r.Email})}),e.jsx(t,{labelContent:e.jsx(n,{children:"I want to receive the newsletter"}),children:e.jsx(I,{})})]})]})},i=({editMode:s,value:a,inputType:d=r.Text,onInput:x,...p})=>s?e.jsx(o,{value:a,type:d,onInput:x,...p}):d===r.URL||d===r.Email?e.jsx(N,{href:d===r.Email?`mailto:${a}`:a,target:"_blank",...p,children:a}):e.jsx(T,{...p,children:a}),O=(s,{field:a,value:d})=>({...s,[a]:d}),c={name:"Display & Edit mode",args:{headerText:"Supplier"},render:s=>{const[a,d]=F.useReducer(m=>!m,!1,void 0),[x,p]=F.useReducer(O,{name:"Red Point Stores",street:"Main St 1618",zip:31415,city:"Maintown",country:"Germany",web:"https://www.sap.com",mail:"john.smith@sap.com",twitter:"@sap",phone:"+49 1234 56789"},void 0),{zip:j,city:C,name:L,street:g,country:M,web:f,mail:S,twitter:w,phone:v}=x,l=m=>{p({field:Object.keys(m.target.dataset)[0],value:m.target.value})};return e.jsxs(e.Fragment,{children:[e.jsxs(E,{onClick:d,children:["Toggle ",a?"Display-Only Mode":"Edit Mode"]}),e.jsxs(y,{...s,onSubmit:m=>{m.preventDefault()},children:[e.jsxs(b,{headerText:"Address",children:[e.jsx(t,{labelContent:e.jsx(n,{children:"Name"}),children:e.jsx(i,{editMode:a,value:L,onInput:l,"data-name":!0})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Street"}),children:e.jsx(i,{editMode:a,value:g,onInput:l,"data-street":!0})}),e.jsx(t,{labelContent:e.jsx(n,{children:"ZIP Code / City"}),children:a?e.jsxs(e.Fragment,{children:[e.jsx(o,{value:j,type:r.Number,onInput:l,"data-zip":!0}),e.jsx(o,{value:C,onInput:l,"data-city":!0})]}):e.jsx(T,{children:`${j} ${C}`})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Country"}),children:e.jsx(i,{editMode:a,value:M,onInput:l,"data-country":!0})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Web"}),children:e.jsx(i,{editMode:a,value:f,inputType:r.URL,onInput:l,"data-web":!0})})]}),e.jsxs(b,{headerText:"Contact",children:[e.jsx(t,{labelContent:e.jsx(n,{children:"Email"}),children:e.jsx(i,{editMode:a,value:S,inputType:r.Email,onInput:l,"data-email":!0})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Twitter"}),children:e.jsx(i,{editMode:a,value:w,onInput:l,"data-twitter":!0})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Phone"}),children:e.jsx(i,{editMode:a,value:v,inputType:r.Tel,onInput:l,"data-phone":!0})})]})]})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <Form {...props}>
        <FormGroup headerText="Personal Data">
          <FormItem labelContent={<Label>Name</Label>}>
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem labelContent={<Label>Address</Label>}>
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem labelContent={<Label>Country</Label>}>
            <Select>
              <Option>Germany</Option>
              <Option>France</Option>
              <Option>Italy</Option>
            </Select>
          </FormItem>
          <FormItem labelContent={<Label>Additional Comment</Label>} className="formAlignLabelStart">
            <TextArea rows={5} placeholder="The label is aligned to start by setting \`<class>::part(label){  align-self: start; }\` " />
          </FormItem>
          <FormItem labelContent={<Label>Home address</Label>}>
            <CheckBox checked />
          </FormItem>
        </FormGroup>
        <FormGroup headerText="Company Data">
          <FormItem labelContent={<Label>Company Name</Label>}>
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem labelContent={<Label>Company Address</Label>}>
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem labelContent={<Label>Company City</Label>}>
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem labelContent={<Label>Company Country</Label>}>
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem labelContent={<Label>Number of Employees</Label>}>
            <Input type={InputType.Number} value="5000" disabled />
          </FormItem>
          <FormItem labelContent={<Label>Member of Partner Network</Label>}>
            <CheckBox checked />
          </FormItem>
        </FormGroup>
        <FormGroup headerText="Marketing Data">
          <FormItem labelContent={<Label>Email</Label>}>
            <Input type={InputType.Email} />
          </FormItem>
          <FormItem labelContent={<Label>Company Email</Label>}>
            <Input type={InputType.Email} />
          </FormItem>
          <FormItem labelContent={<Label>I want to receive the newsletter</Label>}>
            <CheckBox />
          </FormItem>
        </FormGroup>
      </Form>;
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Display & Edit mode',
  args: {
    headerText: 'Supplier'
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
          <FormGroup headerText="Address">
            <FormItem labelContent={<Label>Name</Label>}>
              <StandardField editMode={editMode} value={name} onInput={handleInput} data-name />
            </FormItem>
            <FormItem labelContent={<Label>Street</Label>}>
              <StandardField editMode={editMode} value={street} onInput={handleInput} data-street />
            </FormItem>
            <FormItem labelContent={<Label>ZIP Code / City</Label>}>
              {editMode ? <>
                  <Input value={zip} type={InputType.Number} onInput={handleInput} data-zip />
                  <Input value={city} onInput={handleInput} data-city />
                </> : <Text>{\`\${zip} \${city}\`}</Text>}
            </FormItem>
            <FormItem labelContent={<Label>Country</Label>}>
              <StandardField editMode={editMode} value={country} onInput={handleInput} data-country />
            </FormItem>
            <FormItem labelContent={<Label>Web</Label>}>
              <StandardField editMode={editMode} value={web} inputType={InputType.URL} onInput={handleInput} data-web />
            </FormItem>
          </FormGroup>
          <FormGroup headerText="Contact">
            <FormItem labelContent={<Label>Email</Label>}>
              <StandardField editMode={editMode} value={mail} inputType={InputType.Email} onInput={handleInput} data-email />
            </FormItem>
            <FormItem labelContent={<Label>Twitter</Label>}>
              <StandardField editMode={editMode} value={twitter} onInput={handleInput} data-twitter />
            </FormItem>
            <FormItem labelContent={<Label>Phone</Label>}>
              <StandardField editMode={editMode} value={phone} inputType={InputType.Tel} onInput={handleInput} data-phone />
            </FormItem>
          </FormGroup>
        </Form>
      </>;
  }
}`,...c.parameters?.docs?.source}}};const A=["Default","DisplayEditMode"],Z=Object.freeze(Object.defineProperty({__proto__:null,Default:u,DisplayEditMode:c,__namedExportsOrder:A,default:G},Symbol.toStringTag,{value:"Module"}));export{Z as C,u as D,c as a};
