import{j as e}from"./jsx-runtime-d079401a.js";import{F as u,c as T,a as t,b as r}from"./index-99183236.js";import{T as x}from"./index-bb1f9706.js";import{T as C}from"./index-50504019.js";import{I as o}from"./index-0b806bb1.js";import{I as n}from"./Input-aa3cf5ef.js";import{L as d}from"./index-56c2dff9.js";import{S as g}from"./index-a31e80c6.js";import{O as i}from"./index-6fe4cd86.js";import{C as p}from"./index-5590ac18.js";import{L as c}from"./index-9cc918c7.js";const w={title:"Layouts & Floorplans / Form",component:u,argTypes:{children:{control:{disable:!0}}},args:{backgroundDesign:T.Transparent,titleText:"Test Form",labelSpanS:12,labelSpanM:2,labelSpanL:4,labelSpanXL:4,columnsS:1,columnsM:1,columnsL:1,columnsXL:2,style:{alignItems:"center"}}},s={render:l=>e.jsxs(u,{...l,children:[e.jsx(t,{label:"Sole Form Item",children:e.jsx(o,{type:n.Text})}),e.jsxs(r,{titleText:"Personal Data",children:[e.jsx(t,{label:"Name",children:e.jsx(o,{type:n.Text})}),e.jsx(t,{label:e.jsx(d,{children:"Address"}),children:e.jsx(o,{type:n.Text})}),e.jsx(t,{label:"Country",children:e.jsxs(g,{children:[e.jsx(i,{children:"Germany"}),e.jsx(i,{children:"France"}),e.jsx(i,{children:"Italy"})]})}),e.jsx(t,{label:e.jsx(d,{style:{alignSelf:"start",paddingTop:"0.25rem"},children:"Additional Comment"}),children:e.jsx(C,{rows:5,placeholder:"The styles of the Label of the TextArea FormItem is set to: alignSelf: 'start', paddingTop: '0.25rem'"})}),e.jsx(t,{label:"Home address",children:e.jsx(p,{checked:!0})})]}),e.jsxs(r,{titleText:"Company Data",children:[e.jsx(t,{label:"Company Name",children:e.jsx(o,{type:n.Text})}),e.jsx(t,{label:"Company Address",children:e.jsx(o,{type:n.Text})}),e.jsx(t,{label:"Company City",children:e.jsx(o,{type:n.Text})}),e.jsx(t,{label:"Company Country",children:e.jsx(o,{type:n.Text})}),e.jsx(t,{label:"Number of Employees",children:e.jsx(o,{type:n.Number,value:"5000",disabled:!0})}),e.jsx(t,{label:"Member of Partner Network",children:e.jsx(p,{checked:!0})})]}),e.jsxs(r,{titleText:"Marketing Data",children:[e.jsx(t,{label:"Email",children:e.jsx(o,{type:n.Email})}),e.jsx(t,{label:"Company Email",children:e.jsx(o,{type:n.Email})}),e.jsx(t,{label:"I want to receive the newsletter",children:e.jsx(p,{})})]}),e.jsxs(r,{titleText:"Contact",children:[e.jsx(t,{label:"Website",children:e.jsx(c,{href:"https://sap.github.io/ui5-webcomponents-react",children:"https://sap.github.io/ui5-webcomponents-react"})}),e.jsx(t,{label:"Email",children:e.jsx(c,{children:"some.one@sap.com"})}),e.jsx(t,{label:"Slack",children:e.jsx(c,{href:"https://openui5.slack.com/archives/CSQEJ2J04",children:"#webcomponents-react"})}),e.jsx(t,{label:"Company",children:e.jsx(x,{children:"SAP"})}),e.jsx(t,{label:"Company Headquarter",children:e.jsx(x,{children:"Walldorf, Germany"})})]})]})},m=({children:l})=>e.jsx(e.Fragment,{children:l}),S=()=>e.jsxs(m,{children:[e.jsx(r,{titleText:"Group 1 inside custom component2",children:e.jsxs(m,{children:[e.jsx(t,{label:"FormItem 1 within group",children:e.jsx(o,{})}),e.jsx(t,{label:"FormItem 2 within group",children:e.jsx(o,{})})]})}),e.jsxs(r,{titleText:"Group 2 inside custom component2",children:[e.jsx(t,{label:"FormItem 1 within group",children:e.jsx(o,{})}),e.jsx(t,{label:"FormItem 2 within group",children:e.jsx(o,{})})]})]}),a={render:l=>e.jsxs(u,{...l,children:[e.jsx(t,{label:"Standalone FormItem",children:e.jsx(o,{})}),e.jsxs(r,{titleText:"Standalone FormGroup",children:[e.jsx(t,{label:"Standalone FormItem within group",children:e.jsx(o,{})}),e.jsx(t,{label:"Standalone FormItem within group",children:e.jsx(o,{})})]}),e.jsx(t,{label:"Standalone FormItem",children:e.jsx(o,{})}),e.jsx(m,{children:e.jsx(t,{label:"FormItem within custom component",children:e.jsx(o,{})})}),e.jsx(r,{titleText:"Standalone FormGroup with custom component",children:e.jsxs(m,{children:[e.jsx(t,{label:"FormItem 1 within custom component",children:e.jsx(o,{})}),e.jsx(t,{label:"FormItem 2 within custom component",children:e.jsx(o,{})})]})}),e.jsx(m,{children:e.jsxs(r,{titleText:"FormGroup within custom component",children:[e.jsx(t,{label:"FormItem 1 within group",children:e.jsx(o,{})}),e.jsx(t,{label:"FormItem 2 within group",children:e.jsx(o,{})})]})}),e.jsxs(m,{children:[e.jsx(r,{titleText:"Group 1 inside custom component",children:e.jsxs(m,{children:[e.jsx(t,{label:"FormItem 1 within group",children:e.jsx(o,{})}),e.jsx(t,{label:"FormItem 2 within group",children:e.jsx(o,{})})]})}),e.jsxs(r,{titleText:"Group 2 inside custom component",children:[e.jsx(t,{label:"FormItem 1 within group",children:e.jsx(o,{})}),e.jsx(t,{label:"FormItem 2 within group",children:e.jsx(o,{})})]})]}),e.jsx(S,{})]})};var I,F,h;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => {
    return <Form {...props}>
        <FormItem label="Sole Form Item">
          <Input type={InputType.Text} />
        </FormItem>
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
        <FormGroup titleText="Contact">
          <FormItem label="Website">
            <Link href={'https://sap.github.io/ui5-webcomponents-react'}>
              https://sap.github.io/ui5-webcomponents-react
            </Link>
          </FormItem>
          <FormItem label="Email">
            <Link>some.one@sap.com</Link>
          </FormItem>
          <FormItem label="Slack">
            <Link href={'https://openui5.slack.com/archives/CSQEJ2J04'}>#webcomponents-react</Link>
          </FormItem>
          <FormItem label="Company">
            <Text>SAP</Text>
          </FormItem>
          <FormItem label="Company Headquarter">
            <Text>Walldorf, Germany</Text>
          </FormItem>
        </FormGroup>
      </Form>;
  }
}`,...(h=(F=s.parameters)==null?void 0:F.docs)==null?void 0:h.source}}};var b,j,y;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(j=a.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const G=["Default","FormWithCustomComponents"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:s,FormWithCustomComponents:a,__namedExportsOrder:G,default:w},Symbol.toStringTag,{value:"Module"}));export{W as C,s as D,a as F};
//# sourceMappingURL=Form.stories-f059fdcd.js.map
