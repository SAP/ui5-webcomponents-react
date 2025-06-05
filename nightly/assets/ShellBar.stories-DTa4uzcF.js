import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{i as M}from"./Person-Bk5r7PMP.js";import{S as w,s as R,a as C,m as v,b as L}from"./sys-help-0jI_YnbC.js";import{n as N}from"./nav-back-DpcoZzRs.js";import{F as _}from"./index-D71WPoKU.js";import{B as m}from"./index-CK7zNLqv.js";import{L as J}from"./index-BNsc4RDp.js";import{S as Q}from"./index-GpP4UNt7.js";import{T as r}from"./index-qPcauRtU.js";import{T as d}from"./index-OzB7lNJQ.js";import{S as l}from"./index-DXWNZ4Q8.js";import{A as D}from"./index-Dj0HSimA.js";const O={title:"Layouts & Floorplans / ShellBar",component:l,argTypes:{children:{control:{disable:!0}},logo:{control:{disable:!0}},menuItems:{control:{disable:!0}},profile:{control:{disable:!0}},searchField:{control:{disable:!0}},startButton:{control:{disable:!0}}},args:{primaryTitle:"Shell Bar",notificationsCount:"10",showNotifications:!0,logo:e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg",alt:"SAP Logo"}),profile:e.jsx(D,{children:e.jsx("img",{src:M,alt:"person-placeholder"})}),startButton:e.jsx(m,{icon:v,tooltip:"Menu",accessibleName:"Menu"}),searchField:e.jsx(C,{showClearIcon:!0,placeholder:"Search Apps, Products"}),children:e.jsx(w,{text:"Help",icon:R})},tags:["package:@ui5/webcomponents-fiori"]},s={},a={args:{showProductSwitch:!0,startButton:e.jsxs(e.Fragment,{children:[e.jsx(m,{icon:v,tooltip:"Menu",accessibleName:"Menu"}),e.jsx(m,{icon:N,tooltip:"Back",accessibleName:"Back"})]}),content:e.jsxs(e.Fragment,{children:[e.jsx(r,{design:"Set2",colorScheme:"7",children:"Trial"}),e.jsx(d,{children:"30 days remaining"}),e.jsx(L,{}),e.jsxs(_,{gap:"0 5px",alignItems:"Center",children:[e.jsx(Q,{}),e.jsx(J,{children:"Try Beta Version"})]})]})}},o={args:{startButton:e.jsx(m,{icon:N,tooltip:"Back",accessibleName:"Back"})}},t={args:{content:e.jsxs(e.Fragment,{children:[e.jsx(r,{design:"Set2",colorScheme:"7",children:"Trial"}),e.jsx(d,{children:"30 days remaining"})]})}},c={args:{content:e.jsx(r,{design:"Set2",colorScheme:"10",children:"Region EMEA"})},render(n){return e.jsxs(e.Fragment,{children:[e.jsx(l,{...n}),e.jsx(l,{...n,content:e.jsx(r,{design:"Set2",colorScheme:"10",children:"Region APJ"})})]})}},i={args:{content:e.jsxs(e.Fragment,{children:[e.jsx(r,{design:"Set2",colorScheme:"8",children:"Q System"}),e.jsx(d,{children:"Region EMEA"})]})},render(n){return e.jsxs(e.Fragment,{children:[e.jsx(l,{...n}),e.jsx(l,{...n,content:e.jsxs(e.Fragment,{children:[e.jsx(r,{design:"Set2",colorScheme:"8",children:"Q System"}),e.jsx(d,{children:"Region APJ"})]})})]})}};var g,p,u;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,S,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    showProductSwitch: true,
    startButton: <>
        <Button icon={menu2Icon} tooltip="Menu" accessibleName="Menu" />
        <Button icon={navBackIcon} tooltip="Back" accessibleName="Back" />
      </>,
    content: <>
        <Tag design="Set2" colorScheme="7">
          Trial
        </Tag>
        <Text>30 days remaining</Text>
        <ShellBarSpacer />
        <FlexBox gap="0 5px" alignItems="Center">
          <Switch />
          <Label>Try Beta Version</Label>
        </FlexBox>
      </>
  }
}`,...(x=(S=a.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var B,j,T;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    startButton: <Button icon={navBackIcon} tooltip="Back" accessibleName="Back" />
  }
}`,...(T=(j=o.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var b,f,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    content: <>
        <Tag design="Set2" colorScheme="7">
          Trial
        </Tag>
        <Text>30 days remaining</Text>
      </>
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var F,A,E;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    content: <Tag design="Set2" colorScheme="10">
        Region EMEA
      </Tag>
  },
  render(args) {
    return <>
        <ShellBar {...args} />
        <ShellBar {...args} content={<Tag design="Set2" colorScheme="10">
              Region APJ
            </Tag>} />
      </>;
  }
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var I,k,P;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    content: <>
        <Tag design="Set2" colorScheme="8">
          Q System
        </Tag>
        <Text>Region EMEA</Text>
      </>
  },
  render(args) {
    return <>
        <ShellBar {...args} />
        <ShellBar {...args} content={<>
              <Tag design="Set2" colorScheme="8">
                Q System
              </Tag>
              <Text>Region APJ</Text>
            </>} />
      </>;
  }
}`,...(P=(k=i.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};const H=["Default","AllFeatures","EmbeddedBackNavigation","TrialExample","ProductiveInstances","NonProductiveInstances"],re=Object.freeze(Object.defineProperty({__proto__:null,AllFeatures:a,Default:s,EmbeddedBackNavigation:o,NonProductiveInstances:i,ProductiveInstances:c,TrialExample:t,__namedExportsOrder:H,default:O},Symbol.toStringTag,{value:"Module"}));export{a as A,re as C,s as D,o as E,i as N,c as P,t as T};
