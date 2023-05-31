import{j as e}from"./jsx-runtime-5926aa06.js";import{k as ue}from"./UI5Element-1225b968.js";import{h as Y}from"./Icons-524f4c51.js";import{q as Z}from"./i18n-defaults-80781f7e.js";import{e as d}from"./ListItem-6b3e715e.js";import{f as m}from"./favorite-34ce4d26.js";import{s as ee}from"./settings-791d9c58.js";import{r as u}from"./index-ebeaab24.js";import{B as o}from"./index-1ba1f161.js";import{D as pe}from"./index-3f6d4d78.js";import{I as B}from"./index-a34abe0c.js";import{I as te}from"./index-c90b31ee.js";import{M as ce,a as I}from"./index-fe6b11d3.js";import{S as de}from"./index-df52c5a7.js";import{S as me}from"./index-bf9cf888.js";import{S as oe}from"./index-ef5f7572.js";import{T as y}from"./index-1c2471ae.js";import{O as ne,T as r,a as he,b as fe}from"./index-c4de49ae.js";import{T as l}from"./index-562e1433.js";import{T as j}from"./index-9bd8dd10.js";import{T as O}from"./index-d512ac31.js";import{a as S}from"./Button-f2c9b4f8.js";const p=u.forwardRef((t,n)=>{const{children:a,...s}=t,{inPopover:i}=u.useContext(ne);return e.jsx(o,{...s,ref:n,children:i?a:""})});p.displayName="OverflowToolbarButton";try{p.displayName="OverflowToolbarButton",p.__docgenInfo={description:"The `OverflowToolbarButton` represents a push button that shows its text only when in the overflow area of a `Toolbar`.",displayName:"OverflowToolbarButton",props:{children:{defaultValue:null,description:"Defines the text of the component which is only visible in the overflow area of a `Toolbar`.\n\n**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.`,name:"icon",required:!0,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled` property is set to `true`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<ButtonDomRef>"}},tooltip:{defaultValue:null,description:`Defines the tooltip of the component.
**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.`,name:"tooltip",required:!1,type:{name:"string"}},design:{defaultValue:null,description:"Defines the component design.\n\n**The available values are:**\n\n*   `Default`\n*   `Emphasized`\n*   `Positive`\n*   `Negative`\n*   `Transparent`\n*   `Attention`",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},iconEnd:{defaultValue:null,description:"Defines whether the icon should be displayed after the component text.",name:"iconEnd",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain.",name:"disabled",required:!1,type:{name:"boolean"}},submits:{defaultValue:null,description:'When set to `true`, the component will automatically submit the nearest HTML form element on `press`.\n\n**Note:** For the `submits` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`',name:"submits",required:!1,type:{name:"boolean"}}}}}catch{}const c=u.forwardRef((t,n)=>{const{children:a,...s}=t,{inPopover:i}=u.useContext(ne);return e.jsx(y,{...s,ref:n,children:i?a:""})});c.displayName="OverflowToolbarToggleButton";try{c.displayName="OverflowToolbarToggleButton",c.__docgenInfo={description:"The `OverflowToolbarToggleButton` represents a toggle button that shows its text only when in the overflow area of a `Toolbar`.",displayName:"OverflowToolbarToggleButton",props:{children:{defaultValue:null,description:"Defines the text of the component which is only visible in the overflow area of a `Toolbar`.\n\n**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.`,name:"icon",required:!0,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled` property is set to `true`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<ToggleButtonDomRef>"}},tooltip:{defaultValue:null,description:`Defines the tooltip of the component.
**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.`,name:"tooltip",required:!1,type:{name:"string"}},design:{defaultValue:null,description:"Defines the component design.\n\n**The available values are:**\n\n*   `Default`\n*   `Emphasized`\n*   `Positive`\n*   `Negative`\n*   `Transparent`\n*   `Attention`",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},iconEnd:{defaultValue:null,description:"Defines whether the icon should be displayed after the component text.",name:"iconEnd",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain.",name:"disabled",required:!1,type:{name:"boolean"}},submits:{defaultValue:null,description:'When set to `true`, the component will automatically submit the nearest HTML form element on `press`.\n\n**Note:** For the `submits` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`',name:"submits",required:!1,type:{name:"boolean"}},pressed:{defaultValue:null,description:"Determines whether the component is displayed as pressed.",name:"pressed",required:!1,type:{name:"boolean"}}}}}catch{}const ve="download",re="M480 448q13 0 22.5 9.5T512 480q0 14-9.5 23t-22.5 9H32q-14 0-23-9t-9-23q0-13 9-22.5t23-9.5h448zm-200-74q-10 10-22.5 9.5T235 374L133 273q-12-12 0-23 11-11 22 0l85 85V16q0-16 16-16t16 16v321l87-87q11-11 23 0 12 12 0 23z",be=!1,ge=Z,Te="SAP-icons-v4",we="@ui5/webcomponents-icons";Y(ve,{pathData:re,ltr:be,accData:ge,collection:Te,packageName:we});const xe="download",ae="M472 459q12 0 19.5 8t7.5 19q0 10-7.5 18.5T472 513H41q-13 0-20-8.5T14 486q0-11 7-19t20-8h431zM132 262q-8-8-8-18.5t8-18.5 19-8 19 8l62 62V28q0-12 7.5-19.5T259 1t19.5 7.5T286 28v259l62-62q8-8 19-8t19 8 8 18.5-8 18.5L278 370q-2 1-4 3-2 1-3.5 2t-3.5 3q-9 5-19 0-7-5-11-8z",ye=!1,Be=Z,je="SAP-icons-v5",Oe="@ui5/webcomponents-icons";Y(xe,{pathData:ae,ltr:ye,accData:Be,collection:je,packageName:Oe});ue();const le="download",Ie={title:"Layouts & Floorplans / Toolbar",component:r,argTypes:{children:{control:{disable:!0}},as:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},args:{design:he.Auto,toolbarStyle:fe.Standard}},h={render(t){return e.jsxs(r,{...t,children:[e.jsx(l,{children:"Toolbar"}),e.jsx(o,{children:"Button One"}),e.jsx(o,{children:"Button Two"}),e.jsx(te,{}),e.jsx(pe,{}),e.jsx(oe,{})]})}},f={name:"right aligned items",render(t){return e.jsxs(r,{...t,children:[e.jsx(O,{}),e.jsx(o,{children:"Button"}),e.jsx(B,{name:ee}),e.jsx(B,{name:le})]})}},v={name:"evenly aligned items",render(t){return e.jsxs(r,{...t,children:[e.jsx(l,{children:"Left"}),e.jsx(O,{}),e.jsx(o,{children:"Center"}),e.jsx(O,{}),e.jsx(l,{children:"Right"}),e.jsx(B,{name:ee}),e.jsx(B,{name:le})]})}},b={name:"with separator",render(t){return e.jsxs(r,{...t,children:[e.jsx(o,{children:"Item1"}),e.jsx(o,{children:"Item2"}),e.jsx(o,{children:"Item3"}),e.jsx(j,{}),e.jsx(o,{children:"Item4"}),e.jsx(o,{children:"Item5"}),e.jsx(j,{}),e.jsx(o,{children:"Item6"}),e.jsx(j,{}),e.jsx(o,{children:"Item7"})]})}},g={name:"Popover in Overflow Popover",render(t){const[n,a]=u.useState(!1),[s,i]=u.useState("openMenuBtn"),se=ie=>{i(ie.target.id),a(!0)};return e.jsxs(e.Fragment,{children:[e.jsxs(r,{...t,style:{width:"400px"},children:[e.jsx(l,{children:"Toolbar"}),e.jsx(o,{children:"Button One"}),e.jsx(o,{children:"Button Two"}),e.jsx(o,{id:"openMenuBtn",onClick:se,children:"Open Popover (Menu)"})]}),e.jsxs(ce,{opener:s,open:n,onAfterClose:()=>{a(!1)},children:[e.jsx(I,{text:"New File"}),e.jsx(I,{text:"New Folder"})]})]})}},T={name:"with overflow button",render(t){const[n,a]=u.useState(100),s=i=>{a(i.target.value)};return e.jsxs(e.Fragment,{children:[e.jsx(me,{onInput:s,value:n}),e.jsxs(r,{...t,style:{width:`calc(100% * ${n/100})`},children:[e.jsx(l,{children:"Toolbar"}),e.jsx(o,{children:"Button One"}),e.jsx(o,{icon:"accept"}),e.jsx(o,{children:"Button Two"}),e.jsx(de,{style:{width:"auto"}}),e.jsx(oe,{}),e.jsx(o,{children:"Button Three"}),e.jsx(o,{children:"Button Four"}),e.jsx(p,{icon:d,children:"Edit"}),e.jsx(c,{icon:m,children:"Favorite"})]})]})}},w={name:"OverflowToolbarButton & OverflowToolbarToggleButton",render(t){return e.jsxs(r,{...t,style:{width:"500px",...t.style},children:[e.jsx(o,{icon:d,tooltip:"Text always visible",children:"Default Button"}),e.jsx(p,{icon:d,tooltip:"Text only visible in popover",children:"OverflowToolbarButton (only visible in popover)"}),e.jsx(y,{icon:m,tooltip:"Text always visible",children:"Default ToggleButton"}),e.jsx(c,{icon:m,tooltip:"Text only visible in popover",children:"OverflowToolbarToggleButton (only visible in popover)"}),e.jsx(o,{icon:d,tooltip:"Text always visible",children:"Default Button"}),e.jsx(p,{icon:d,tooltip:"Text only visible in popover",children:"OverflowToolbarButton (only visible in popover)"}),e.jsx(y,{icon:m,tooltip:"Text always visible",children:"Default ToggleButton"}),e.jsx(c,{icon:m,tooltip:"Text only visible in popover",children:"OverflowToolbarToggleButton (only visible in popover)"})]})}},x={name:"with custom overflow button",render(t){return e.jsxs(e.Fragment,{children:[e.jsxs(r,{...t,style:{width:"300px",...t.style},overflowButton:e.jsx(y,{icon:"menu2",design:S.Transparent,onClick:()=>{alert("Custom action")}}),children:[e.jsx(te,{}),e.jsx(l,{wrapping:!1,children:"Overflow Content"})]}),e.jsxs(r,{...t,style:{width:"300px",...t.style},overflowButton:e.jsx(y,{icon:"menu2",design:S.Transparent,onClick:n=>{n.preventDefault(),alert("Custom action")}}),children:[e.jsx(l,{wrapping:!1,children:"Opening the popover is prevented"}),e.jsx(l,{wrapping:!1,children:"Overflow Content"})]})]})}};var D,N,q;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render(args) {
    return <Toolbar {...args}>
        <Text>Toolbar</Text>
        <Button>Button One</Button>
        <Button>Button Two</Button>
        <Input />
        <DatePicker />
        <Switch />
      </Toolbar>;
  }
}`,...(q=(N=h.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var C,P,k;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'right aligned items',
  render(args) {
    return <Toolbar {...args}>
        <ToolbarSpacer />
        <Button>Button</Button>
        <Icon name={settingsIcon} />
        <Icon name={downloadIcon} />
      </Toolbar>;
  }
}`,...(k=(P=f.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var E,V,A;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'evenly aligned items',
  render(args) {
    return <Toolbar {...args}>
        <Text>Left</Text>
        <ToolbarSpacer />
        <Button>Center</Button>
        <ToolbarSpacer />
        <Text>Right</Text>
        <Icon name={settingsIcon} />
        <Icon name={downloadIcon} />
      </Toolbar>;
  }
}`,...(A=(V=v.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var _,M,R;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'with separator',
  render(args) {
    return <Toolbar {...args}>
        <Button>Item1</Button>
        <Button>Item2</Button>
        <Button>Item3</Button>
        <ToolbarSeparator />
        <Button>Item4</Button>
        <Button>Item5</Button>
        <ToolbarSeparator />
        <Button>Item6</Button>
        <ToolbarSeparator />
        <Button>Item7</Button>
      </Toolbar>;
  }
}`,...(R=(M=b.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var F,z,L;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
          <Button>Button One</Button>
          <Button>Button Two</Button>
          <Button id="openMenuBtn" onClick={handlePopoverOpenerClick}>
            Open Popover (Menu)
          </Button>
        </Toolbar>
        <Menu opener={opener} open={popoverIsOpen} onAfterClose={() => {
        setPopoverIsOpen(false);
      }}>
          <MenuItem text="New File" />
          <MenuItem text="New Folder" />
        </Menu>
      </>;
  }
}`,...(L=(z=g.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var H,W,$;T.parameters={...T.parameters,docs:{...(H=T.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
          <Button>Button One</Button>
          <Button icon="accept" />
          <Button>Button Two</Button>
          <Select style={{
          width: 'auto'
        }} />
          <Switch />
          <Button>Button Three</Button>
          <Button>Button Four</Button>
          <OverflowToolbarButton icon={editIcon}>Edit</OverflowToolbarButton>
          <OverflowToolbarToggleButton icon={favoriteIcon}>Favorite</OverflowToolbarToggleButton>
        </Toolbar>
      </>;
  }
}`,...($=(W=T.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var U,G,J;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'OverflowToolbarButton & OverflowToolbarToggleButton',
  render(args) {
    return <Toolbar {...args} style={{
      width: '500px',
      ...args.style
    }}>
        <Button icon={editIcon} tooltip="Text always visible">
          Default Button
        </Button>
        <OverflowToolbarButton icon={editIcon} tooltip="Text only visible in popover">
          OverflowToolbarButton (only visible in popover)
        </OverflowToolbarButton>
        <ToggleButton icon={favoriteIcon} tooltip="Text always visible">
          Default ToggleButton
        </ToggleButton>
        <OverflowToolbarToggleButton icon={favoriteIcon} tooltip="Text only visible in popover">
          OverflowToolbarToggleButton (only visible in popover)
        </OverflowToolbarToggleButton>
        <Button icon={editIcon} tooltip="Text always visible">
          Default Button
        </Button>
        <OverflowToolbarButton icon={editIcon} tooltip="Text only visible in popover">
          OverflowToolbarButton (only visible in popover)
        </OverflowToolbarButton>
        <ToggleButton icon={favoriteIcon} tooltip="Text always visible">
          Default ToggleButton
        </ToggleButton>
        <OverflowToolbarToggleButton icon={favoriteIcon} tooltip="Text only visible in popover">
          OverflowToolbarToggleButton (only visible in popover)
        </OverflowToolbarToggleButton>
      </Toolbar>;
  }
}`,...(J=(G=w.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
          <Text wrapping={false}>Overflow Content</Text>
        </Toolbar>
        <Toolbar {...args} style={{
        width: '300px',
        ...args.style
      }} overflowButton={<ToggleButton icon="menu2" design={ButtonDesign.Transparent} onClick={e => {
        e.preventDefault();
        alert('Custom action');
      }} />}>
          <Text wrapping={false}>Opening the popover is prevented</Text>
          <Text wrapping={false}>Overflow Content</Text>
        </Toolbar>
      </>;
  }
}`,...(X=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Se=["Default","RightAlignedItems","EvenlyAlignedItems","WithSeparator","PopoverInOverflowPopover","WithOverflowButton","OverflowBtns","CustomOverflowButton"],Qe=Object.freeze(Object.defineProperty({__proto__:null,CustomOverflowButton:x,Default:h,EvenlyAlignedItems:v,OverflowBtns:w,PopoverInOverflowPopover:g,RightAlignedItems:f,WithOverflowButton:T,WithSeparator:b,__namedExportsOrder:Se,default:Ie},Symbol.toStringTag,{value:"Module"}));export{Qe as C,h as D,v as E,w as O,g as P,f as R,b as W,T as a,x as b,p as c,c as d};
//# sourceMappingURL=Toolbar.stories-267435c9.js.map
