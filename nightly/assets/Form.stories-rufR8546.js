import{j as e}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{I as r}from"./Input-CUz8UkNM.js";import{r as F}from"./index-RYns6xqu.js";import{F as y,b,a as t}from"./index-BttGANlS.js";import{T as A}from"./index-ns_f3j6h.js";import{L as n}from"./index-BBB25i_r.js";import{I as o}from"./index-D7FCD7g6.js";import{S as P}from"./index-DWHaLNBj.js";import{O as h}from"./index-NXhkfHSl.js";import{C as I}from"./index-DEAJYDfM.js";import{B as R}from"./index-DMoKrnbS.js";import{T as w}from"./index-Dea_z7VC.js";import{L as z}from"./index-BpUn3cc3.js";const B={title:"Layouts & Floorplans / Form",component:y,argTypes:{children:{control:{disable:!0}}},args:{headerText:"Test Form",layout:"S1 M1 L2 XL2",labelSpan:"S12 M4 L4 XL4"},tags:["package:@ui5/webcomponents"]},u={render:s=>e.jsxs(y,{...s,children:[e.jsxs(b,{headerText:"Personal Data",children:[e.jsx(t,{labelContent:e.jsx(n,{children:"Name"}),children:e.jsx(o,{type:r.Text})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Address"}),children:e.jsx(o,{type:r.Text})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Country"}),children:e.jsxs(P,{children:[e.jsx(h,{children:"Germany"}),e.jsx(h,{children:"France"}),e.jsx(h,{children:"Italy"})]})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Additional Comment"}),className:"formAlignLabelStart",children:e.jsx(A,{rows:5,placeholder:"The label is aligned to start by setting `<class>::part(label){  align-self: start; }` "})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Home address"}),children:e.jsx(I,{checked:!0})})]}),e.jsxs(b,{headerText:"Company Data",children:[e.jsx(t,{labelContent:e.jsx(n,{children:"Company Name"}),children:e.jsx(o,{type:r.Text})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Company Address"}),children:e.jsx(o,{type:r.Text})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Company City"}),children:e.jsx(o,{type:r.Text})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Company Country"}),children:e.jsx(o,{type:r.Text})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Number of Employees"}),children:e.jsx(o,{type:r.Number,value:"5000",disabled:!0})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Member of Partner Network"}),children:e.jsx(I,{checked:!0})})]}),e.jsxs(b,{headerText:"Marketing Data",children:[e.jsx(t,{labelContent:e.jsx(n,{children:"Email"}),children:e.jsx(o,{type:r.Email})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Company Email"}),children:e.jsx(o,{type:r.Email})}),e.jsx(t,{labelContent:e.jsx(n,{children:"I want to receive the newsletter"}),children:e.jsx(I,{})})]})]})},m=({editMode:s,value:a,inputType:d=r.Text,onInput:x,...p})=>s?e.jsx(o,{value:a,type:d,onInput:x,...p}):d===r.URL||d===r.Email?e.jsx(z,{href:d===r.Email?`mailto:${a}`:a,target:"_blank",...p,children:a}):e.jsx(w,{...p,children:a}),_=(s,{field:a,value:d})=>({...s,[a]:d}),c={name:"Display & Edit mode",args:{headerText:"Supplier"},render:s=>{const[a,d]=F.useReducer(i=>!i,!1,void 0),[x,p]=F.useReducer(_,{name:"Red Point Stores",street:"Main St 1618",zip:31415,city:"Maintown",country:"Germany",web:"https://www.sap.com",mail:"john.smith@sap.com",twitter:"@sap",phone:"+49 1234 56789"},void 0),{zip:j,city:C,name:v,street:E,country:k,web:D,mail:N,twitter:G,phone:O}=x,l=i=>{p({field:Object.keys(i.target.dataset)[0],value:i.target.value})};return e.jsxs(e.Fragment,{children:[e.jsxs(R,{onClick:d,children:["Toggle ",a?"Display-Only Mode":"Edit Mode"]}),e.jsxs(y,{...s,onSubmit:i=>{i.preventDefault()},children:[e.jsxs(b,{headerText:"Address",children:[e.jsx(t,{labelContent:e.jsx(n,{children:"Name"}),children:e.jsx(m,{editMode:a,value:v,onInput:l,"data-name":!0})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Street"}),children:e.jsx(m,{editMode:a,value:E,onInput:l,"data-street":!0})}),e.jsx(t,{labelContent:e.jsx(n,{children:"ZIP Code / City"}),children:a?e.jsxs(e.Fragment,{children:[e.jsx(o,{value:j,type:r.Number,onInput:l,"data-zip":!0}),e.jsx(o,{value:C,onInput:l,"data-city":!0})]}):e.jsx(w,{children:`${j} ${C}`})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Country"}),children:e.jsx(m,{editMode:a,value:k,onInput:l,"data-country":!0})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Web"}),children:e.jsx(m,{editMode:a,value:D,inputType:r.URL,onInput:l,"data-web":!0})})]}),e.jsxs(b,{headerText:"Contact",children:[e.jsx(t,{labelContent:e.jsx(n,{children:"Email"}),children:e.jsx(m,{editMode:a,value:N,inputType:r.Email,onInput:l,"data-email":!0})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Twitter"}),children:e.jsx(m,{editMode:a,value:G,onInput:l,"data-twitter":!0})}),e.jsx(t,{labelContent:e.jsx(n,{children:"Phone"}),children:e.jsx(m,{editMode:a,value:O,inputType:r.Tel,onInput:l,"data-phone":!0})})]})]})]})}};var T,L,f;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(f=(L=u.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};var g,M,S;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(S=(M=c.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};const $=["Default","DisplayEditMode"],ne=Object.freeze(Object.defineProperty({__proto__:null,Default:u,DisplayEditMode:c,__namedExportsOrder:$,default:B},Symbol.toStringTag,{value:"Module"}));export{ne as C,u as D,c as a};
