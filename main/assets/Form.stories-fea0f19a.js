import{a as l,j as e}from"./jsx-runtime-670450c2.js";import{b as y,c as h,a as t,F as m}from"./index-812511a3.js";import{T as s}from"./index-479d8097.js";import{T as F}from"./index-6112411c.js";import{I as r}from"./index-9408658d.js";import{I as o}from"./Input-63631743.js";import{L as c}from"./index-735fce44.js";import{S as T}from"./index-4e5a3430.js";import{O as n}from"./index-046ec89b.js";import{C as p}from"./index-f5d6b7d9.js";import{L as i}from"./index-84fe18b0.js";const x={title:"Layouts & Floorplans / Form",component:y,argTypes:{children:{control:{disable:!0}}},args:{backgroundDesign:h.Transparent,titleText:"Test Form",labelSpanS:12,labelSpanM:2,labelSpanL:4,labelSpanXL:4,columnsS:1,columnsM:1,columnsL:1,columnsXL:2,style:{alignItems:"center"}}},a={render:I=>l(y,{...I,children:[e(t,{label:"Sole Form Item",children:e(r,{type:o.Text})}),l(m,{titleText:"Personal Data",children:[e(t,{label:"Name",children:e(r,{type:o.Text})}),e(t,{label:e(c,{children:"Address"}),children:e(r,{type:o.Text})}),e(t,{label:"Country",children:l(T,{children:[e(n,{children:"Germany"}),e(n,{children:"France"}),e(n,{children:"Italy"})]})}),e(t,{style:{alignSelf:"start"},label:e(c,{style:{alignSelf:"start",paddingTop:"0.25rem"},children:"Additional Comment"}),children:e(F,{rows:5,style:{width:"210px","--_ui5_textarea_margin":0},placeholder:"The styles of the Label of the TextArea FormItem is set to: alignSelf: 'start', paddingTop: '0.25rem'"})}),e(t,{label:"Home address",children:e(p,{checked:!0})})]}),l(m,{titleText:"Company Data",children:[e(t,{label:"Company Name",children:e(r,{type:o.Text})}),e(t,{label:"Company Address",children:e(r,{type:o.Text})}),e(t,{label:"Company City",children:e(r,{type:o.Text})}),e(t,{label:"Company Country",children:e(r,{type:o.Text})}),e(t,{label:"Number of Employees",children:e(r,{type:o.Number,value:"5000",disabled:!0})}),e(t,{label:"Member of Partner Network",children:e(p,{checked:!0})})]}),l(m,{titleText:"Marketing Data",children:[e(t,{label:"Email",children:e(r,{type:o.Email})}),e(t,{label:"Company Email",children:e(r,{type:o.Email})}),e(t,{label:"I want to receive the newsletter",children:e(p,{})})]}),l(m,{titleText:"Contact",children:[e(t,{label:"Website",children:e(i,{href:"https://sap.github.io/ui5-webcomponents-react",children:"https://sap.github.io/ui5-webcomponents-react"})}),e(t,{label:"Email",children:e(i,{children:"some.one@sap.com"})}),e(t,{label:"Slack",children:e(i,{href:"https://openui5.slack.com/archives/CSQEJ2J04",children:"#webcomponents-react"})}),e(t,{label:"Company",children:e(s,{children:"SAP"})}),e(t,{label:"Company Headquarter",children:e(s,{children:"Walldorf, Germany"})})]})]})};var d,b,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <FormItem style={{
          alignSelf: 'start'
        }} label={<Label style={{
          alignSelf: 'start',
          paddingTop: '0.25rem'
        }}>Additional Comment</Label>}>
            <TextArea rows={5} style={{
            width: '210px',
            '--_ui5_textarea_margin': 0
          }} placeholder="The styles of the Label of the TextArea FormItem is set to: alignSelf: 'start', paddingTop: '0.25rem'" />
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
}`,...(u=(b=a.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};const f=["Default"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:f,default:x},Symbol.toStringTag,{value:"Module"}));export{O as C,a as D};
//# sourceMappingURL=Form.stories-fea0f19a.js.map
