import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-eq8zrF0J.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{n as i,t as a}from"./ValueState-Cz7u0abQ.js";import{d as o,f as s}from"./Input-BDkyv1Wr.js";import{n as c,t as l}from"./Input-B378oiXm.js";import{n as u,t as d}from"./Icon-D0mlyDL3.js";import{n as f,t as p}from"./search-DrA17dwY.js";import{n as m,t as h}from"./employee-DnTXlWDs.js";import{n as g,t as _}from"./InputIcon-5ycoYW36.js";import{i as v,n as y,r as b,t as x}from"./SuggestionItemGroup-Ujxxrv3J.js";var S=t({Default:()=>E,FullyControlled:()=>D,WithInputIcon:()=>k,WithSuggestionItem:()=>O,__namedExportsOrder:()=>A,default:()=>T}),C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{s(),a(),m(),p(),C=n(),u(),g(),v(),y(),c(),w=r(),T={title:`Inputs / Input`,component:l,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{type:o.Text,valueState:i.None,icon:(0,w.jsx)(d,{name:h})},tags:[`package:@ui5/webcomponents`]},E={},D={render(e){let[t,n]=(0,C.useState)(``);return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(l,{...e,value:t,onInput:t=>{t.preventDefault(),e.onInput(t),/^[a-zA-Z]*$/.test(t.target.value)&&n(t.target.value)}})})}},O={name:`with SuggestionItem`,args:{showSuggestions:!0,placeholder:`type anything to show suggestions`,icon:null},render:e=>(0,w.jsxs)(l,{...e,style:{width:`400px`},children:[(0,w.jsxs)(x,{headerText:`A Group`,children:[(0,w.jsx)(b,{text:`United States`,additionalText:`USA`}),(0,w.jsx)(b,{text:`Bulgaria`})]}),(0,w.jsxs)(x,{headerText:`Another Group Items`,children:[(0,w.jsx)(b,{text:`Argentina`}),(0,w.jsx)(b,{text:`Germany`}),(0,w.jsx)(b,{text:`Iceland`}),(0,w.jsx)(b,{text:`Moldova`})]})]})},k={name:`with InputIcon`,argTypes:{icon:{control:{disable:!0}}},args:{placeholder:`Search`,icon:(0,w.jsx)(_,{name:f,accessibleName:`Search`})},render:e=>(0,w.jsx)(l,{...e})},A=[`Default`,`FullyControlled`,`WithSuggestionItem`,`WithInputIcon`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render(args) {
    const [value, setValue] = useState('');
    return <>
        <Input {...args} value={value} onInput={e => {
        e.preventDefault();
        args.onInput(e);
        if (/^[a-zA-Z]*$/.test(e.target.value)) {
          setValue(e.target.value);
        }
      }} />
      </>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'with SuggestionItem',
  args: {
    showSuggestions: true,
    placeholder: 'type anything to show suggestions',
    icon: null
  },
  render: args => {
    return <Input {...args} style={{
      width: '400px'
    }}>
        <SuggestionItemGroup headerText="A Group">
          <SuggestionItem text="United States" additionalText={'USA'} />
          <SuggestionItem text="Bulgaria" />
        </SuggestionItemGroup>
        <SuggestionItemGroup headerText="Another Group Items">
          <SuggestionItem text="Argentina" />
          <SuggestionItem text="Germany" />
          <SuggestionItem text="Iceland" />
          <SuggestionItem text="Moldova" />
        </SuggestionItemGroup>
      </Input>;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'with InputIcon',
  argTypes: {
    icon: {
      control: {
        disable: true
      }
    }
  },
  args: {
    placeholder: 'Search',
    icon: <InputIcon name={searchIcon} accessibleName="Search" />
  },
  render: args => {
    return <Input {...args} />;
  }
}`,...k.parameters?.docs?.source}}}})))()}export{O as a,k as i,D as n,j as o,S as r,E as t};