import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{n as i,t as a}from"./CheckBox-OB75Wp26.js";import{d as o,f as s}from"./Input-CDhBYT69.js";import{n as c,t as l}from"./Input-B8leEO3m.js";import{n as u,t as d}from"./Text-BQQeY0Nc.js";import{n as f,t as p}from"./Button-kjfH9iFy.js";import{n as m,t as h}from"./Label-D201qzLx.js";import{n as g,t as _}from"./Option-Bdn0zwIZ.js";import{n as v,t as y}from"./Select-C7un8xmA.js";import{a as b,i as x,n as S,o as C,r as w,t as T}from"./FormItem-BxJkIuxI.js";import{n as E,t as D}from"./Link-CR5FUtkS.js";import{n as O,t as k}from"./TextArea-DC5vXyB3.js";var A=t({Default:()=>P,DisplayEditMode:()=>L,__namedExportsOrder:()=>R,default:()=>N}),j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{s(),j=n(),f(),i(),c(),m(),E(),g(),v(),u(),O(),x(),S(),C(),M=r(),N={title:`Layouts & Floorplans / Form`,component:b,argTypes:{children:{control:{disable:!0}}},args:{headerText:`Test Form`,layout:`S1 M1 L2 XL2`,labelSpan:`S12 M4 L4 XL4`},tags:[`package:@ui5/webcomponents`]},P={render:e=>(0,M.jsxs)(b,{...e,children:[(0,M.jsxs)(w,{headerText:`Personal Data`,children:[(0,M.jsx)(T,{labelContent:(0,M.jsx)(h,{children:`Name`}),children:(0,M.jsx)(l,{type:o.Text})}),(0,M.jsx)(T,{labelContent:(0,M.jsx)(h,{children:`Address`}),children:(0,M.jsx)(l,{type:o.Text})}),(0,M.jsx)(T,{labelContent:(0,M.jsx)(h,{children:`Country`}),children:(0,M.jsxs)(y,{children:[(0,M.jsx)(_,{children:`Germany`}),(0,M.jsx)(_,{children:`France`}),(0,M.jsx)(_,{children:`Italy`})]})}),(0,M.jsx)(T,{labelContent:(0,M.jsx)(h,{children:`Additional Comment`}),className:`formAlignLabelStart`,children:(0,M.jsx)(k,{rows:5,placeholder:"The label is aligned to start by setting `<class>::part(label){  align-self: start; }` "})}),(0,M.jsx)(T,{labelContent:(0,M.jsx)(h,{children:`Home address`}),children:(0,M.jsx)(a,{checked:!0})})]}),(0,M.jsxs)(w,{headerText:`Company Data`,children:[(0,M.jsx)(T,{labelContent:(0,M.jsx)(h,{children:`Company Name`}),children:(0,M.jsx)(l,{type:o.Text})}),(0,M.jsx)(T,{labelContent:(0,M.jsx)(h,{children:`Company Address`}),children:(0,M.jsx)(l,{type:o.Text})}),(0,M.jsx)(T,{labelContent:(0,M.jsx)(h,{children:`Company City`}),children:(0,M.jsx)(l,{type:o.Text})}),(0,M.jsx)(T,{labelContent:(0,M.jsx)(h,{children:`Company Country`}),children:(0,M.jsx)(l,{type:o.Text})}),(0,M.jsx)(T,{labelContent:(0,M.jsx)(h,{children:`Number of Employees`}),children:(0,M.jsx)(l,{type:o.Number,value:`5000`,disabled:!0})}),(0,M.jsx)(T,{labelContent:(0,M.jsx)(h,{children:`Member of Partner Network`}),children:(0,M.jsx)(a,{checked:!0})})]}),(0,M.jsxs)(w,{headerText:`Marketing Data`,children:[(0,M.jsx)(T,{labelContent:(0,M.jsx)(h,{children:`Email`}),children:(0,M.jsx)(l,{type:o.Email})}),(0,M.jsx)(T,{labelContent:(0,M.jsx)(h,{children:`Company Email`}),children:(0,M.jsx)(l,{type:o.Email})}),(0,M.jsx)(T,{labelContent:(0,M.jsx)(h,{children:`I want to receive the newsletter`}),children:(0,M.jsx)(a,{})})]})]})},F=({editMode:e,value:t,inputType:n=o.Text,onInput:r,...i})=>e?(0,M.jsx)(l,{value:t,type:n,onInput:r,...i}):n===o.URL||n===o.Email?(0,M.jsx)(D,{href:n===o.Email?`mailto:${t}`:t,target:`_blank`,...i,children:t}):(0,M.jsx)(d,{...i,children:t}),I=(e,{field:t,value:n})=>({...e,[t]:n}),L={name:`Display & Edit mode`,args:{headerText:`Supplier`},render:e=>{let[t,n]=(0,j.useReducer)(e=>!e,!1,void 0),[r,i]=(0,j.useReducer)(I,{name:`Red Point Stores`,street:`Main St 1618`,zip:31415,city:`Maintown`,country:`Germany`,web:`https://www.sap.com`,mail:`john.smith@sap.com`,twitter:`@sap`,phone:`+49 1234 56789`},void 0),{zip:a,city:s,name:c,street:u,country:f,web:m,mail:g,twitter:_,phone:v}=r,y=e=>{i({field:Object.keys(e.target.dataset)[0],value:e.target.value})};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(p,{onClick:n,children:[`Toggle `,t?`Display-Only Mode`:`Edit Mode`]}),(0,M.jsxs)(b,{...e,onSubmit:e=>{e.preventDefault()},children:[(0,M.jsxs)(w,{headerText:`Address`,children:[(0,M.jsx)(T,{labelContent:(0,M.jsx)(h,{children:`Name`}),children:(0,M.jsx)(F,{editMode:t,value:c,onInput:y,"data-name":!0})}),(0,M.jsx)(T,{labelContent:(0,M.jsx)(h,{children:`Street`}),children:(0,M.jsx)(F,{editMode:t,value:u,onInput:y,"data-street":!0})}),(0,M.jsx)(T,{labelContent:(0,M.jsx)(h,{children:`ZIP Code / City`}),children:t?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(l,{value:a,type:o.Number,onInput:y,"data-zip":!0}),(0,M.jsx)(l,{value:s,onInput:y,"data-city":!0})]}):(0,M.jsx)(d,{children:`${a} ${s}`})}),(0,M.jsx)(T,{labelContent:(0,M.jsx)(h,{children:`Country`}),children:(0,M.jsx)(F,{editMode:t,value:f,onInput:y,"data-country":!0})}),(0,M.jsx)(T,{labelContent:(0,M.jsx)(h,{children:`Web`}),children:(0,M.jsx)(F,{editMode:t,value:m,inputType:o.URL,onInput:y,"data-web":!0})})]}),(0,M.jsxs)(w,{headerText:`Contact`,children:[(0,M.jsx)(T,{labelContent:(0,M.jsx)(h,{children:`Email`}),children:(0,M.jsx)(F,{editMode:t,value:g,inputType:o.Email,onInput:y,"data-email":!0})}),(0,M.jsx)(T,{labelContent:(0,M.jsx)(h,{children:`Twitter`}),children:(0,M.jsx)(F,{editMode:t,value:_,onInput:y,"data-twitter":!0})}),(0,M.jsx)(T,{labelContent:(0,M.jsx)(h,{children:`Phone`}),children:(0,M.jsx)(F,{editMode:t,value:v,inputType:o.Tel,onInput:y,"data-phone":!0})})]})]})]})}},R=[`Default`,`DisplayEditMode`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}}})))()}export{z as i,L as n,A as r,P as t};