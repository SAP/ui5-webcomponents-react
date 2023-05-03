import{j as e}from"./jsx-runtime-5926aa06.js";import{k as oe}from"./UI5Element-e8adceda.js";import{h as G}from"./Icons-5b18f7d2.js";import{q as J}from"./i18n-defaults-80781f7e.js";import{e as p}from"./ListItem-2c0fcc20.js";import{f as d}from"./favorite-213071d0.js";import{s as K}from"./settings-456fc51a.js";import{r as w}from"./index-ebeaab24.js";import{a as I}from"./Button-6eea99db.js";import{O as Q,T as n,a as ne,b as re}from"./index-434bef5f.js";import{B as o}from"./index-2e7c567b.js";import{D as ae}from"./index-5fc3e42f.js";import{I as x}from"./index-1bef3446.js";import{I as X}from"./index-0e54a3cb.js";import{S as le}from"./index-af57b6e5.js";import{S as se}from"./index-e18d8a92.js";import{S as Y}from"./index-695f307a.js";import{T as y}from"./index-fa93a4c3.js";import{T as a}from"./index-2495a9e4.js";import{T as B}from"./index-f18a2bc8.js";import{T as j}from"./index-d512ac31.js";const l=w.forwardRef((t,r)=>{const{children:i,...u}=t,{inPopover:c}=w.useContext(Q);return e.jsx(o,{...u,ref:r,children:c?i:""})});l.displayName="OverflowToolbarButton";try{l.displayName="OverflowToolbarButton",l.__docgenInfo={description:"The `OverflowToolbarButton` represents a push button that shows its text only when in the overflow area of a `Toolbar`.",displayName:"OverflowToolbarButton",props:{children:{defaultValue:null,description:"Defines the text of the component which is only visible in the overflow area of a `Toolbar`.\n\n**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.`,name:"icon",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled` property is set to `true`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<ButtonDomRef>"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},tooltip:{defaultValue:null,description:`Defines the tooltip of the component.
**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.`,name:"tooltip",required:!1,type:{name:"string"}},design:{defaultValue:null,description:"Defines the component design.\n\n**The available values are:**\n\n*   `Default`\n*   `Emphasized`\n*   `Positive`\n*   `Negative`\n*   `Transparent`\n*   `Attention`",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},iconEnd:{defaultValue:null,description:"Defines whether the icon should be displayed after the component text.",name:"iconEnd",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain.",name:"disabled",required:!1,type:{name:"boolean"}},submits:{defaultValue:null,description:'When set to `true`, the component will automatically submit the nearest HTML form element on `press`.\n\n**Note:** For the `submits` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`',name:"submits",required:!1,type:{name:"boolean"}}}}}catch{}const s=w.forwardRef((t,r)=>{const{children:i,...u}=t,{inPopover:c}=w.useContext(Q);return e.jsx(y,{...u,ref:r,children:c?i:""})});s.displayName="OverflowToolbarToggleButton";try{s.displayName="OverflowToolbarToggleButton",s.__docgenInfo={description:"The `OverflowToolbarToggleButton` represents a toggle button that shows its text only when in the overflow area of a `Toolbar`.",displayName:"OverflowToolbarToggleButton",props:{children:{defaultValue:null,description:"Defines the text of the component which is only visible in the overflow area of a `Toolbar`.\n\n**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.`,name:"icon",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled` property is set to `true`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<ToggleButtonDomRef>"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},tooltip:{defaultValue:null,description:`Defines the tooltip of the component.
**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.`,name:"tooltip",required:!1,type:{name:"string"}},design:{defaultValue:null,description:"Defines the component design.\n\n**The available values are:**\n\n*   `Default`\n*   `Emphasized`\n*   `Positive`\n*   `Negative`\n*   `Transparent`\n*   `Attention`",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},iconEnd:{defaultValue:null,description:"Defines whether the icon should be displayed after the component text.",name:"iconEnd",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain.",name:"disabled",required:!1,type:{name:"boolean"}},submits:{defaultValue:null,description:'When set to `true`, the component will automatically submit the nearest HTML form element on `press`.\n\n**Note:** For the `submits` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`',name:"submits",required:!1,type:{name:"boolean"}},pressed:{defaultValue:null,description:"Determines whether the component is displayed as pressed.",name:"pressed",required:!1,type:{name:"boolean"}}}}}catch{}const ie="download",Z="M480 448q13 0 22.5 9.5T512 480q0 14-9.5 23t-22.5 9H32q-14 0-23-9t-9-23q0-13 9-22.5t23-9.5h448zm-200-74q-10 10-22.5 9.5T235 374L133 273q-12-12 0-23 11-11 22 0l85 85V16q0-16 16-16t16 16v321l87-87q11-11 23 0 12 12 0 23z",ue=!1,ce=J,pe="SAP-icons-v4",de="@ui5/webcomponents-icons";G(ie,{pathData:Z,ltr:ue,accData:ce,collection:pe,packageName:de});const me="download",ee="M472 459q12 0 19.5 8t7.5 19q0 10-7.5 18.5T472 513H41q-13 0-20-8.5T14 486q0-11 7-19t20-8h431zM132 262q-8-8-8-18.5t8-18.5 19-8 19 8l62 62V28q0-12 7.5-19.5T259 1t19.5 7.5T286 28v259l62-62q8-8 19-8t19 8 8 18.5-8 18.5L278 370q-2 1-4 3-2 1-3.5 2t-3.5 3q-9 5-19 0-7-5-11-8z",he=!1,fe=J,ve="SAP-icons-v5",be="@ui5/webcomponents-icons";G(me,{pathData:ee,ltr:he,accData:fe,collection:ve,packageName:be});oe();const te="download",ge={title:"Layouts & Floorplans / Toolbar",component:n,argTypes:{children:{control:{disable:!0}},as:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},args:{design:ne.Auto,toolbarStyle:re.Standard}},m={render(t){return e.jsxs(n,{...t,children:[e.jsx(a,{children:"Toolbar"}),e.jsx(o,{children:"Button One"}),e.jsx(o,{children:"Button Two"}),e.jsx(X,{}),e.jsx(ae,{}),e.jsx(Y,{})]})}},h={name:"right aligned items",render(t){return e.jsxs(n,{...t,children:[e.jsx(j,{}),e.jsx(o,{children:"Button"}),e.jsx(x,{name:K}),e.jsx(x,{name:te})]})}},f={name:"evenly aligned items",render(t){return e.jsxs(n,{...t,children:[e.jsx(a,{children:"Left"}),e.jsx(j,{}),e.jsx(o,{children:"Center"}),e.jsx(j,{}),e.jsx(a,{children:"Right"}),e.jsx(x,{name:K}),e.jsx(x,{name:te})]})}},v={name:"with separator",render(t){return e.jsxs(n,{...t,children:[e.jsx(o,{children:"Item1"}),e.jsx(o,{children:"Item2"}),e.jsx(o,{children:"Item3"}),e.jsx(B,{}),e.jsx(o,{children:"Item4"}),e.jsx(o,{children:"Item5"}),e.jsx(B,{}),e.jsx(o,{children:"Item6"}),e.jsx(B,{}),e.jsx(o,{children:"Item7"})]})}},b={name:"with overflow button",render(t){const[r,i]=w.useState(100),u=c=>{i(c.target.value)};return e.jsxs(e.Fragment,{children:[e.jsx(se,{onInput:u,value:r}),e.jsxs(n,{...t,style:{width:`calc(100% * ${r/100})`},children:[e.jsx(a,{children:"Toolbar"}),e.jsx(o,{children:"Button One"}),e.jsx(o,{icon:"accept"}),e.jsx(o,{children:"Button Two"}),e.jsx(le,{style:{width:"auto"}}),e.jsx(Y,{}),e.jsx(o,{children:"Button Three"}),e.jsx(o,{children:"Button Four"}),e.jsx(l,{icon:p,children:"Edit"}),e.jsx(s,{icon:d,children:"Favorite"})]})]})}},g={name:"OverflowToolbarButton & OverflowToolbarToggleButton",render(t){return e.jsxs(n,{...t,style:{width:"500px",...t.style},children:[e.jsx(o,{icon:p,tooltip:"Text always visible",children:"Default Button"}),e.jsx(l,{icon:p,tooltip:"Text only visible in popover",children:"OverflowToolbarButton (only visible in popover)"}),e.jsx(y,{icon:d,tooltip:"Text always visible",children:"Default ToggleButton"}),e.jsx(s,{icon:d,tooltip:"Text only visible in popover",children:"OverflowToolbarToggleButton (only visible in popover)"}),e.jsx(o,{icon:p,tooltip:"Text always visible",children:"Default Button"}),e.jsx(l,{icon:p,tooltip:"Text only visible in popover",children:"OverflowToolbarButton (only visible in popover)"}),e.jsx(y,{icon:d,tooltip:"Text always visible",children:"Default ToggleButton"}),e.jsx(s,{icon:d,tooltip:"Text only visible in popover",children:"OverflowToolbarToggleButton (only visible in popover)"})]})}},T={name:"with custom overflow button",render(t){return e.jsxs(e.Fragment,{children:[e.jsxs(n,{...t,style:{width:"300px",...t.style},overflowButton:e.jsx(y,{icon:"menu2",design:I.Transparent,onClick:()=>{alert("Custom action")}}),children:[e.jsx(X,{}),e.jsx(a,{wrapping:!1,children:"Overflow Content"})]}),e.jsxs(n,{...t,style:{width:"300px",...t.style},overflowButton:e.jsx(y,{icon:"menu2",design:I.Transparent,onClick:r=>{r.preventDefault(),alert("Custom action")}}),children:[e.jsx(a,{wrapping:!1,children:"Opening the popover is prevented"}),e.jsx(a,{wrapping:!1,children:"Overflow Content"})]})]})}};var O,S,D;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(D=(S=m.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var q,N,C;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'right aligned items',
  render(args) {
    return <Toolbar {...args}>
        <ToolbarSpacer />
        <Button>Button</Button>
        <Icon name={settingsIcon} />
        <Icon name={downloadIcon} />
      </Toolbar>;
  }
}`,...(C=(N=h.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var E,k,V;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(V=(k=f.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var A,_,R;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(R=(_=v.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var P,F,z;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(z=(F=b.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var L,M,H;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(H=(M=g.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var W,$,U;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(U=($=T.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};const Te=["Default","RightAlignedItems","EvenlyAlignedItems","WithSeparator","WithOverflowButton","OverflowBtns","CustomOverflowButton"],Le=Object.freeze(Object.defineProperty({__proto__:null,CustomOverflowButton:T,Default:m,EvenlyAlignedItems:f,OverflowBtns:g,RightAlignedItems:h,WithOverflowButton:b,WithSeparator:v,__namedExportsOrder:Te,default:ge},Symbol.toStringTag,{value:"Module"}));export{Le as C,m as D,f as E,g as O,h as R,v as W,b as a,T as b,l as c,s as d};
//# sourceMappingURL=Toolbar.stories-86103ce4.js.map
