import{j as e,Q as m,J as d,$ as h}from"./iframe-7wbn2r8t.js";import{i as u}from"./Person-Bk5r7PMP.js";import{S,s as B,a as x,m as p,b as j,c as b}from"./sys-help-CS62OhDw.js";import{F as T}from"./index--oRJYcmq.js";import{L as f}from"./index-s9oyD4rV.js";import{S as k}from"./index-ChzhF-e0.js";import{T as n}from"./index-C5gTJ--F.js";import{S as a}from"./index-40Xwbc91.js";import{A as y}from"./index-DZM58baw.js";const v={title:"Layouts & Floorplans / ShellBar",component:a,argTypes:{children:{control:{disable:!0}},logo:{control:{disable:!0}},menuItems:{control:{disable:!0}},profile:{control:{disable:!0}},searchField:{control:{disable:!0}},startButton:{control:{disable:!0}}},args:{primaryTitle:"Shell Bar",notificationsCount:"10",showNotifications:!0,logo:e.jsx("img",{src:"https://ui5.github.io/webcomponents/images/sap-logo-svg.svg",alt:"SAP Logo"}),profile:e.jsx(y,{children:e.jsx("img",{src:u,alt:"person-placeholder"})}),startButton:e.jsx(m,{icon:p,tooltip:"Menu",accessibleName:"Menu"}),searchField:e.jsx(x,{showClearIcon:!0,placeholder:"Search Apps, Products"}),children:e.jsx(S,{text:"Help",icon:B})},tags:["package:@ui5/webcomponents-fiori"]},s={},o={args:{showProductSwitch:!0,startButton:e.jsxs(e.Fragment,{children:[e.jsx(m,{icon:p,tooltip:"Menu",accessibleName:"Menu"}),e.jsx(m,{icon:h,tooltip:"Back",accessibleName:"Back"})]}),content:e.jsxs(e.Fragment,{children:[e.jsx(n,{design:"Set2",colorScheme:"7",children:"Trial"}),e.jsx(d,{children:"30 days remaining"}),e.jsx(j,{}),e.jsxs(T,{gap:"0 5px",alignItems:"Center",children:[e.jsx(k,{}),e.jsx(f,{children:"Try Beta Version"})]})]})}},t={args:{startButton:e.jsx(m,{icon:h,tooltip:"Back",accessibleName:"Back"})}},c={args:{content:e.jsxs(e.Fragment,{children:[e.jsx(n,{design:"Set2",colorScheme:"7",children:"Trial"}),e.jsx(d,{children:"30 days remaining"})]})}},l={args:{content:e.jsx(n,{design:"Set2",colorScheme:"10",children:"Region EMEA"})},render(r){return e.jsxs(e.Fragment,{children:[e.jsx(a,{...r}),e.jsx(a,{...r,content:e.jsx(n,{design:"Set2",colorScheme:"10",children:"Region APJ"})})]})}},i={args:{content:e.jsxs(e.Fragment,{children:[e.jsx(n,{design:"Set2",colorScheme:"8",children:"Q System"}),e.jsx(d,{children:"Region EMEA"})]})},render(r){return e.jsxs(e.Fragment,{children:[e.jsx(a,{...r}),e.jsx(a,{...r,content:e.jsxs(e.Fragment,{children:[e.jsx(n,{design:"Set2",colorScheme:"8",children:"Q System"}),e.jsx(d,{children:"Region APJ"})]})})]})}},g={name:"with ShellBarBranding",args:{branding:e.jsx(b,{logo:e.jsx("img",{src:"https://ui5.github.io/webcomponents/images/sap-logo-svg.svg",alt:"SAP Logo"}),href:"https://ui5.github.io/webcomponents-react/v2/?path=/docs/layouts-floorplans-shellbar--docs",target:"_blank",onClick:r=>{console.log("ShellBarBranding clicked",r)},children:"ShellBar Branding"})},render(r){return e.jsx(a,{...r})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    startButton: <Button icon={navBackIcon} tooltip="Back" accessibleName="Back" />
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    content: <>
        <Tag design="Set2" colorScheme="7">
          Trial
        </Tag>
        <Text>30 days remaining</Text>
      </>
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'with ShellBarBranding',
  args: {
    branding: <ShellBarBranding logo={<img src="https://ui5.github.io/webcomponents/images/sap-logo-svg.svg" alt="SAP Logo" />} href="https://ui5.github.io/webcomponents-react/v2/?path=/docs/layouts-floorplans-shellbar--docs" target="_blank" onClick={e => {
      console.log('ShellBarBranding clicked', e);
    }}>
        ShellBar Branding
      </ShellBarBranding>
  },
  render(args) {
    return <ShellBar {...args} />;
  }
}`,...g.parameters?.docs?.source}}};const A=["Default","AllFeatures","EmbeddedBackNavigation","TrialExample","ProductiveInstances","NonProductiveInstances","ShellBarBrandingStory"],L=Object.freeze(Object.defineProperty({__proto__:null,AllFeatures:o,Default:s,EmbeddedBackNavigation:t,NonProductiveInstances:i,ProductiveInstances:l,ShellBarBrandingStory:g,TrialExample:c,__namedExportsOrder:A,default:v},Symbol.toStringTag,{value:"Module"}));export{o as A,L as C,s as D,t as E,i as N,l as P,g as S,c as T};
