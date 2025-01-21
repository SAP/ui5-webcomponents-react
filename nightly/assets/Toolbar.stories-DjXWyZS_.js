import{j as e}from"./jsx-runtime-CLpGMVip.js";import{B as t}from"./Button-Bn6Q5CAy.js";import"./withWebComponent-DfVDXLfc.js";import{f as Z}from"./Icon-DVzRT9Bg.js";import{m as ee}from"./i18n-defaults-CUGG7UPM.js";import{e as u}from"./ListItemTemplate-CkbJDOzl.js";import{f as p}from"./favorite-VcEdIAEs.js";import{s as te}from"./settings-CxaJhnVI.js";import{B as a}from"./index-DaCk7tY-.js";import{D as ie}from"./index-BSKxyqV6.js";import{I as j}from"./index-DFqCSedi.js";import{I as ne}from"./index-BnC1dkI8.js";import{M as le}from"./index-Bw0fQAzz.js";import{M as S}from"./index-DBnnR-u-.js";import{S as ce}from"./index-DGQWUw_v.js";import{S as de}from"./index-Cohh7Ugs.js";import{S as ae}from"./index-DevzOuro.js";import{T as c}from"./index-DgufeG-1.js";import{T as h}from"./index-MHemzhYS.js";import{r as d}from"./index-D23YZj_x.js";import{u as oe,a as r,b as ue,c as pe,T as y}from"./index-CsUD5ru_.js";import{c as me}from"./clsx-B-dksMZM.js";import{u as ge}from"./useStylesheet-DNyxTWaC.js";const Te="download",be="M280 374q-10 10-21 10-1 0-7.5-.5T235 374L133 273q-6-6-6-12t6-11q6-6 11-6 6 0 11 6l85 85V16q0-16 16-16t16 16v321l87-87q6-6 11-6 6 0 12 6t6 12q0 5-6 11zm200 74q13 0 22.5 9.5T512 480q0 14-9.5 23t-22.5 9H32q-14 0-23-9t-9-23q0-13 9-22.5t23-9.5h448z",Be=!1,ve=ee,xe="SAP-icons-v4",fe="@ui5/webcomponents-icons";Z(Te,{pathData:be,ltr:Be,accData:ve,collection:xe,packageName:fe});const we="download",he="M123 261q-8-8-8-18 0-11 7.5-18t18.5-7 18 7l71 72V26q0-11 7.5-18.5T256 0t18.5 7.5T282 26v271l71-72q7-7 18-7t18.5 7 7.5 18q0 10-8 18L274 377q-9 7-18 7t-18-7zm363 200q11 0 18.5 7t7.5 18-7.5 18.5T486 512H26q-11 0-18.5-7.5T0 486t7.5-18 18.5-7h460z",je=!1,Oe=ee,Ie="SAP-icons-v5",De="@ui5/webcomponents-icons";Z(we,{pathData:he,ltr:je,accData:Oe,collection:Ie,packageName:De});const se="download",O=d.forwardRef((n,o)=>{const{children:s,...i}=n,{inPopover:l}=oe();return e.jsx(a,{...i,ref:o,children:l?s:""})});O.displayName="OverflowToolbarButton";const I=d.forwardRef((n,o)=>{const{children:s,...i}=n,{inPopover:l}=oe();return e.jsx(h,{...i,ref:o,children:l?s:""})});I.displayName="OverflowToolbarToggleButton";const ye="@layer ui5-webcomponents-react{._separator_1lvhp_1{background:var(--sapToolbar_SeparatorColor);height:var(--_ui5wcr-ToolbarSeparatorHeight);width:.0625rem}}",Se={separator:"_separator_1lvhp_1"},w=d.forwardRef((n,o)=>{const{style:s,className:i,...l}=n;ge(ye,w.displayName);const D=me(Se.separator,i);return e.jsx("div",{ref:o,style:s,className:D,role:"separator",...l})});w.displayName="ToolbarSeparator";const Ce={title:"Toolbar",component:r,argTypes:{children:{control:{disable:!0}},as:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},args:{design:ue.Auto,toolbarStyle:pe.Standard},parameters:{chromatic:{delay:1e3}}},m={render(n){return e.jsxs(r,{...n,children:[e.jsx(c,{children:"Toolbar"}),e.jsx(a,{"data-accessible-name":!0,design:t.Transparent,children:"Button One"}),e.jsx(a,{"data-accessible-name":!0,design:t.Transparent,children:"Button Two"}),e.jsx(ne,{"data-accessible-name":!0}),e.jsx(ie,{"data-accessible-name":!0}),e.jsx(ae,{"data-accessible-name":!0})]})}},g={name:"right aligned items",render(n){return e.jsxs(r,{...n,children:[e.jsx(y,{}),e.jsx(a,{"data-accessible-name":!0,design:t.Transparent,children:"Button"}),e.jsx(j,{"data-accessible-name":!0,accessibleName:"Settings",name:te}),e.jsx(j,{"data-accessible-name":!0,accessibleName:"Download",name:se})]})}},T={name:"evenly aligned items",render(n){return e.jsxs(r,{...n,children:[e.jsx(c,{children:"Left"}),e.jsx(y,{}),e.jsx(a,{"data-accessible-name":!0,design:t.Transparent,children:"Center"}),e.jsx(y,{}),e.jsx(c,{children:"Right"}),e.jsx(j,{"data-accessible-name":!0,accessibleName:"Settings",name:te}),e.jsx(j,{"data-accessible-name":!0,accessibleName:"Download",name:se})]})}},b={name:"with separator",render(n){return e.jsxs(r,{...n,children:[e.jsx(a,{"data-accessible-name":!0,design:t.Transparent,children:"Item1"}),e.jsx(a,{"data-accessible-name":!0,design:t.Transparent,children:"Item2"}),e.jsx(a,{"data-accessible-name":!0,design:t.Transparent,children:"Item3"}),e.jsx(w,{}),e.jsx(a,{"data-accessible-name":!0,design:t.Transparent,children:"Item4"}),e.jsx(a,{"data-accessible-name":!0,design:t.Transparent,children:"Item5"}),e.jsx(w,{}),e.jsx(a,{"data-accessible-name":!0,design:t.Transparent,children:"Item6"}),e.jsx(w,{}),e.jsx(a,{"data-accessible-name":!0,design:t.Transparent,children:"Item7"})]})}},B={name:"Popover in Overflow Popover",render(n){const[o,s]=d.useState(!1),[i,l]=d.useState("openMenuBtn"),D=re=>{l(re.target.id),s(!0)};return e.jsxs(e.Fragment,{children:[e.jsxs(r,{...n,style:{width:"400px"},children:[e.jsx(c,{children:"Toolbar"}),e.jsx(a,{"data-accessible-name":!0,design:t.Transparent,children:"Button One"}),e.jsx(a,{"data-accessible-name":!0,design:t.Transparent,children:"Button Two"}),e.jsx(a,{"data-accessible-name":!0,design:t.Transparent,id:"openMenuBtn",onClick:D,children:"Open Popover (Menu)"})]}),e.jsxs(le,{opener:i,open:o,onClose:()=>{s(!1)},children:[e.jsx(S,{text:"New File"}),e.jsx(S,{text:"New Folder"})]})]})}},v={name:"with overflow button",render(n){const[o,s]=d.useState(100),i=l=>{s(l.target.value)};return e.jsxs(e.Fragment,{children:[e.jsx(de,{onInput:i,value:o}),e.jsxs(r,{...n,style:{width:`calc(100% * ${o/100})`},children:[e.jsx(c,{children:"Toolbar"}),e.jsx(a,{"data-accessible-name":!0,design:t.Transparent,children:"Button One"}),e.jsx(a,{"data-accessible-name":!0,design:t.Transparent,icon:"accept"}),e.jsx(a,{"data-accessible-name":!0,design:t.Transparent,children:"Button Two"}),e.jsx(ce,{"data-accessible-name":!0,style:{width:"auto"}}),e.jsx(ae,{"data-accessible-name":!0}),e.jsx(a,{"data-accessible-name":!0,design:t.Transparent,children:"Button Three"}),e.jsx(a,{"data-accessible-name":!0,design:t.Transparent,children:"Button Four"}),e.jsx(O,{"data-accessible-name":!0,icon:u,children:"Edit"}),e.jsx(I,{"data-accessible-name":!0,design:t.Transparent,icon:p,children:"Favorite"})]})]})}},x={name:"OverflowToolbarButton & OverflowToolbarToggleButton",render(n){return e.jsxs(r,{...n,style:{width:"500px",...n.style},children:[e.jsx(a,{"data-accessible-name":!0,design:t.Transparent,icon:u,tooltip:"Text always visible",children:"Default Button"}),e.jsx(O,{"data-accessible-name":!0,design:t.Transparent,icon:u,tooltip:"Text only visible in popover",children:"OverflowToolbarButton (only visible in popover)"}),e.jsx(h,{"data-accessible-name":!0,design:t.Transparent,icon:p,tooltip:"Text always visible",children:"Default ToggleButton"}),e.jsx(I,{"data-accessible-name":!0,design:t.Transparent,icon:p,tooltip:"Text only visible in popover",children:"OverflowToolbarToggleButton (only visible in popover)"}),e.jsx(a,{"data-accessible-name":!0,design:t.Transparent,icon:u,tooltip:"Text always visible",children:"Default Button"}),e.jsx(O,{"data-accessible-name":!0,design:t.Transparent,icon:u,tooltip:"Text only visible in popover",children:"OverflowToolbarButton (only visible in popover)"}),e.jsx(h,{"data-accessible-name":!0,design:t.Transparent,icon:p,tooltip:"Text always visible",children:"Default ToggleButton"}),e.jsx(I,{"data-accessible-name":!0,design:t.Transparent,icon:p,tooltip:"Text only visible in popover",children:"OverflowToolbarToggleButton (only visible in popover)"})]})}},f={name:"with custom overflow button",render(n){return e.jsxs(e.Fragment,{children:[e.jsxs(r,{...n,style:{width:"300px",...n.style},overflowButton:e.jsx(h,{icon:"menu2",design:t.Transparent,onClick:()=>{alert("Custom action")}}),children:[e.jsx(ne,{}),e.jsx(c,{maxLines:1,children:"Overflow Content"})]}),e.jsxs(r,{...n,style:{width:"300px",...n.style},overflowButton:e.jsx(h,{icon:"menu2",design:t.Transparent,onClick:o=>{o.preventDefault(),alert("Custom action")}}),children:[e.jsx(c,{maxLines:1,children:"Opening the popover is prevented"}),e.jsx(c,{maxLines:1,children:"Overflow Content"})]})]})}};var C,P,N;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render(args) {
    return <Toolbar {...args}>
        <Text>Toolbar</Text>
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Button One
        </Button>
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Button Two
        </Button>
        <Input data-accessible-name />
        <DatePicker data-accessible-name />
        <Switch data-accessible-name />
      </Toolbar>;
  }
}`,...(N=(P=m.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var q,M,k;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'right aligned items',
  render(args) {
    return <Toolbar {...args}>
        <ToolbarSpacer />
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Button
        </Button>
        <Icon data-accessible-name accessibleName="Settings" name={settingsIcon} />
        <Icon data-accessible-name accessibleName="Download" name={downloadIcon} />
      </Toolbar>;
  }
}`,...(k=(M=g.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var _,F,L;T.parameters={...T.parameters,docs:{...(_=T.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'evenly aligned items',
  render(args) {
    return <Toolbar {...args}>
        <Text>Left</Text>
        <ToolbarSpacer />
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Center
        </Button>
        <ToolbarSpacer />
        <Text>Right</Text>
        <Icon data-accessible-name accessibleName="Settings" name={settingsIcon} />
        <Icon data-accessible-name accessibleName="Download" name={downloadIcon} />
      </Toolbar>;
  }
}`,...(L=(F=T.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var R,A,E;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'with separator',
  render(args) {
    return <Toolbar {...args}>
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Item1
        </Button>
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Item2
        </Button>
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Item3
        </Button>
        <ToolbarSeparator />
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Item4
        </Button>
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Item5
        </Button>
        <ToolbarSeparator />
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Item6
        </Button>
        <ToolbarSeparator />
        <Button data-accessible-name design={ButtonDesign.Transparent}>
          Item7
        </Button>
      </Toolbar>;
  }
}`,...(E=(A=b.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var $,W,z;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Popover in Overflow Popover',
  render(args) {
    const [popoverIsOpen, setPopoverIsOpen] = useState(false);
    const [opener, setOpener] = useState('openMenuBtn');
    const handlePopoverOpenerClick = e => {
      setOpener(e.target.id);
      setPopoverIsOpen(true);
    };
    return <>
        <Toolbar {...args} style={{
        width: '400px'
      }}>
          <Text>Toolbar</Text>
          <Button data-accessible-name design={ButtonDesign.Transparent}>
            Button One
          </Button>
          <Button data-accessible-name design={ButtonDesign.Transparent}>
            Button Two
          </Button>
          <Button data-accessible-name design={ButtonDesign.Transparent} id="openMenuBtn" onClick={handlePopoverOpenerClick}>
            Open Popover (Menu)
          </Button>
        </Toolbar>
        <Menu opener={opener} open={popoverIsOpen} onClose={() => {
        setPopoverIsOpen(false);
      }}>
          <MenuItem text="New File" />
          <MenuItem text="New Folder" />
        </Menu>
      </>;
  }
}`,...(z=(W=B.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var V,H,G;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'with overflow button',
  render(args) {
    const [value, setValue] = useState(100);
    const handleInput = e => {
      setValue(e.target.value);
    };
    return <>
        <Slider onInput={handleInput} value={value} />
        <Toolbar {...args} style={{
        width: \`calc(100% * \${value / 100})\`
      }}>
          <Text>Toolbar</Text>
          <Button data-accessible-name design={ButtonDesign.Transparent}>
            Button One
          </Button>
          <Button data-accessible-name design={ButtonDesign.Transparent} icon="accept" />
          <Button data-accessible-name design={ButtonDesign.Transparent}>
            Button Two
          </Button>
          <Select data-accessible-name style={{
          width: 'auto'
        }} />
          <Switch data-accessible-name />
          <Button data-accessible-name design={ButtonDesign.Transparent}>
            Button Three
          </Button>
          <Button data-accessible-name design={ButtonDesign.Transparent}>
            Button Four
          </Button>
          <OverflowToolbarButton data-accessible-name icon={editIcon}>
            Edit
          </OverflowToolbarButton>
          <OverflowToolbarToggleButton data-accessible-name design={ButtonDesign.Transparent} icon={favoriteIcon}>
            Favorite
          </OverflowToolbarToggleButton>
        </Toolbar>
      </>;
  }
}`,...(G=(H=v.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var J,K,Q;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'OverflowToolbarButton & OverflowToolbarToggleButton',
  render(args) {
    return <Toolbar {...args} style={{
      width: '500px',
      ...args.style
    }}>
        <Button data-accessible-name design={ButtonDesign.Transparent} icon={editIcon} tooltip="Text always visible">
          Default Button
        </Button>
        <OverflowToolbarButton data-accessible-name design={ButtonDesign.Transparent} icon={editIcon} tooltip="Text only visible in popover">
          OverflowToolbarButton (only visible in popover)
        </OverflowToolbarButton>
        <ToggleButton data-accessible-name design={ButtonDesign.Transparent} icon={favoriteIcon} tooltip="Text always visible">
          Default ToggleButton
        </ToggleButton>
        <OverflowToolbarToggleButton data-accessible-name design={ButtonDesign.Transparent} icon={favoriteIcon} tooltip="Text only visible in popover">
          OverflowToolbarToggleButton (only visible in popover)
        </OverflowToolbarToggleButton>
        <Button data-accessible-name design={ButtonDesign.Transparent} icon={editIcon} tooltip="Text always visible">
          Default Button
        </Button>
        <OverflowToolbarButton data-accessible-name design={ButtonDesign.Transparent} icon={editIcon} tooltip="Text only visible in popover">
          OverflowToolbarButton (only visible in popover)
        </OverflowToolbarButton>
        <ToggleButton data-accessible-name design={ButtonDesign.Transparent} icon={favoriteIcon} tooltip="Text always visible">
          Default ToggleButton
        </ToggleButton>
        <OverflowToolbarToggleButton data-accessible-name design={ButtonDesign.Transparent} icon={favoriteIcon} tooltip="Text only visible in popover">
          OverflowToolbarToggleButton (only visible in popover)
        </OverflowToolbarToggleButton>
      </Toolbar>;
  }
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'with custom overflow button',
  render(args) {
    return <>
        <Toolbar {...args} style={{
        width: '300px',
        ...args.style
      }} overflowButton={<ToggleButton icon="menu2" design={ButtonDesign.Transparent} onClick={() => {
        alert('Custom action');
      }} />}>
          <Input />
          <Text maxLines={1}>Overflow Content</Text>
        </Toolbar>
        <Toolbar {...args} style={{
        width: '300px',
        ...args.style
      }} overflowButton={<ToggleButton icon="menu2" design={ButtonDesign.Transparent} onClick={e => {
        e.preventDefault();
        alert('Custom action');
      }} />}>
          <Text maxLines={1}>Opening the popover is prevented</Text>
          <Text maxLines={1}>Overflow Content</Text>
        </Toolbar>
      </>;
  }
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Pe=["Default","RightAlignedItems","EvenlyAlignedItems","WithSeparator","PopoverInOverflowPopover","WithOverflowButton","OverflowBtns","CustomOverflowButton"],et=Object.freeze(Object.defineProperty({__proto__:null,CustomOverflowButton:f,Default:m,EvenlyAlignedItems:T,OverflowBtns:x,PopoverInOverflowPopover:B,RightAlignedItems:g,WithOverflowButton:v,WithSeparator:b,__namedExportsOrder:Pe,default:Ce},Symbol.toStringTag,{value:"Module"}));export{et as C,m as D,T as E,x as O,B as P,g as R,w as T,b as W,v as a,f as b,O as c,I as d};
