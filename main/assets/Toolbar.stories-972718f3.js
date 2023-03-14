import{j as e,a as n,F as G}from"./jsx-runtime-670450c2.js";import{k as re}from"./UI5Element-427ec721.js";import{a as J}from"./Icons-7b82f601.js";import{q as K}from"./i18n-defaults-80781f7e.js";import{e as c}from"./ListItem-20b1ed77.js";import{f as p}from"./favorite-21b83d1a.js";import{s as Q}from"./settings-d51ecc1b.js";import{r as w}from"./index-f1f749bf.js";import{a as O}from"./Button-04bad9a0.js";import{O as X,T as r,a as ae,b as le}from"./index-b5bc5790.js";import{B as o}from"./index-878dd9f3.js";import{D as ie}from"./index-d50f80d4.js";import{I}from"./index-dab5158a.js";import{I as Y}from"./index-ab81db41.js";import{S as se}from"./index-fa668303.js";import{S as ue}from"./index-d508080d.js";import{S as Z}from"./index-7be9f19b.js";import{T as y}from"./index-12c7dbbd.js";import{T}from"./index-2eaff221.js";import{T as x}from"./index-06abb56b.js";import{T as ee}from"./index-ff3cb99b.js";const l=w.forwardRef((t,a)=>{const{children:s,...B}=t,{inPopover:u}=w.useContext(X);return e(o,{...B,ref:a,children:u?s:""})});l.displayName="OverflowToolbarButton";try{l.displayName="OverflowToolbarButton",l.__docgenInfo={description:"The `OverflowToolbarButton` represents a push button that shows its text only when in the overflow area of a `Toolbar`.",displayName:"OverflowToolbarButton",props:{children:{defaultValue:null,description:"Defines the text of the component which is only visible in the overflow area of a `Toolbar`.\n\n**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.`,name:"icon",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled` property is set to `true`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<ButtonDomRef>"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},tooltip:{defaultValue:null,description:`Defines the tooltip of the component.
**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.`,name:"tooltip",required:!1,type:{name:"string"}},design:{defaultValue:null,description:"Defines the component design.\n\n**The available values are:**\n\n*   `Default`\n*   `Emphasized`\n*   `Positive`\n*   `Negative`\n*   `Transparent`\n*   `Attention`",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},iconEnd:{defaultValue:null,description:"Defines whether the icon should be displayed after the component text.",name:"iconEnd",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain.",name:"disabled",required:!1,type:{name:"boolean"}},submits:{defaultValue:null,description:'When set to `true`, the component will automatically submit the nearest HTML form element on `press`.\n\n**Note:** For the `submits` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`',name:"submits",required:!1,type:{name:"boolean"}}}}}catch{}const i=w.forwardRef((t,a)=>{const{children:s,...B}=t,{inPopover:u}=w.useContext(X);return e(y,{...B,ref:a,children:u?s:""})});i.displayName="OverflowToolbarToggleButton";try{i.displayName="OverflowToolbarToggleButton",i.__docgenInfo={description:"The `OverflowToolbarToggleButton` represents a toggle button that shows its text only when in the overflow area of a `Toolbar`.",displayName:"OverflowToolbarToggleButton",props:{children:{defaultValue:null,description:"Defines the text of the component which is only visible in the overflow area of a `Toolbar`.\n\n**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.`,name:"icon",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled` property is set to `true`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<ToggleButtonDomRef>"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},tooltip:{defaultValue:null,description:`Defines the tooltip of the component.
**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.`,name:"tooltip",required:!1,type:{name:"string"}},design:{defaultValue:null,description:"Defines the component design.\n\n**The available values are:**\n\n*   `Default`\n*   `Emphasized`\n*   `Positive`\n*   `Negative`\n*   `Transparent`\n*   `Attention`",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},iconEnd:{defaultValue:null,description:"Defines whether the icon should be displayed after the component text.",name:"iconEnd",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain.",name:"disabled",required:!1,type:{name:"boolean"}},submits:{defaultValue:null,description:'When set to `true`, the component will automatically submit the nearest HTML form element on `press`.\n\n**Note:** For the `submits` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`',name:"submits",required:!1,type:{name:"boolean"}},pressed:{defaultValue:null,description:"Determines whether the component is displayed as pressed.",name:"pressed",required:!1,type:{name:"boolean"}}}}}catch{}const ce="download",te="M480 448q13 0 22.5 9.5T512 480q0 14-9.5 23t-22.5 9H32q-14 0-23-9t-9-23q0-13 9-22.5t23-9.5h448zm-200-74q-10 10-22.5 9.5T235 374L133 273q-12-12 0-23 11-11 22 0l85 85V16q0-16 16-16t16 16v321l87-87q11-11 23 0 12 12 0 23z",pe=!1,de=K,me="SAP-icons-v4",he="@ui5/webcomponents-icons";J(ce,{pathData:te,ltr:pe,accData:de,collection:me,packageName:he});const fe="download",oe="M472 459q12 0 19.5 8t7.5 19q0 10-7.5 18.5T472 513H41q-13 0-20-8.5T14 486q0-11 7-19t20-8h431zM132 262q-8-8-8-18.5t8-18.5 19-8 19 8l62 62V28q0-12 7.5-19.5T259 1t19.5 7.5T286 28v259l62-62q8-8 19-8t19 8 8 18.5-8 18.5L278 370q-2 1-4 3-2 1-3.5 2t-3.5 3q-9 5-19 0-7-5-11-8z",ve=!1,be=K,ge="SAP-icons-v5",Te="@ui5/webcomponents-icons";J(fe,{pathData:oe,ltr:ve,accData:be,collection:ge,packageName:Te});re("sap_horizon");const ne="download",we={title:"Layouts & Floorplans / Toolbar",component:r,argTypes:{children:{control:{disable:!0}},as:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},args:{design:ae.Auto,toolbarStyle:le.Standard}},d={render(t){return n(r,{...t,children:[e(T,{children:"Toolbar"}),e(o,{children:"Button One"}),e(o,{children:"Button Two"}),e(Y,{}),e(ie,{}),e(Z,{})]})}},m={name:"right aligned items",render(t){return n(r,{...t,children:[e(ee,{}),e(o,{children:"Button"}),e(I,{name:Q}),e(I,{name:ne})]})}},h={name:"evenly aligned items",render(t){return n(r,{...t,children:[e(ee,{}),e(o,{children:"Button"}),e(I,{name:Q}),e(I,{name:ne})]})}},f={name:"with separator",render(t){return n(r,{...t,children:[e(o,{children:"Item1"}),e(o,{children:"Item2"}),e(o,{children:"Item3"}),e(x,{}),e(o,{children:"Item4"}),e(o,{children:"Item5"}),e(x,{}),e(o,{children:"Item6"}),e(x,{}),e(o,{children:"Item7"})]})}},v={name:"with overflow button",render(t){const[a,s]=w.useState(100);return n(G,{children:[e(ue,{onInput:u=>{s(u.target.value)},value:a}),n(r,{...t,style:{width:`calc(100% * ${a/100})`},children:[e(T,{children:"Toolbar"}),e(o,{children:"Button One"}),e(o,{icon:"accept"}),e(o,{children:"Button Two"}),e(se,{style:{width:"auto"}}),e(Z,{}),e(o,{children:"Button Three"}),e(o,{children:"Button Four"}),e(l,{icon:c,children:"Edit"}),e(i,{icon:p,children:"Favorite"})]})]})}},b={name:"OverflowToolbarButton & OverflowToolbarToggleButton",render(t){return n(r,{...t,style:{width:"500px",...t.style},children:[e(o,{icon:c,tooltip:"Text always visible",children:"Default Button"}),e(l,{icon:c,tooltip:"Text only visible in popover",children:"OverflowToolbarButton (only visible in popover)"}),e(y,{icon:p,tooltip:"Text always visible",children:"Default ToggleButton"}),e(i,{icon:p,tooltip:"Text only visible in popover",children:"OverflowToolbarToggleButton (only visible in popover)"}),e(o,{icon:c,tooltip:"Text always visible",children:"Default Button"}),e(l,{icon:c,tooltip:"Text only visible in popover",children:"OverflowToolbarButton (only visible in popover)"}),e(y,{icon:p,tooltip:"Text always visible",children:"Default ToggleButton"}),e(i,{icon:p,tooltip:"Text only visible in popover",children:"OverflowToolbarToggleButton (only visible in popover)"})]})}},g={name:"with custom overflow button",render(t){return n(G,{children:[n(r,{...t,style:{width:"300px",...t.style},overflowButton:e(y,{icon:"menu2",design:O.Transparent,onClick:()=>{alert("Custom action")}}),children:[e(Y,{}),e(T,{wrapping:!1,children:"Overflow Content"})]}),n(r,{...t,style:{width:"300px",...t.style},overflowButton:e(y,{icon:"menu2",design:O.Transparent,onClick:a=>{a.preventDefault(),alert("Custom action")}}),children:[e(T,{wrapping:!1,children:"Opening the popover is prevented"}),e(T,{wrapping:!1,children:"Overflow Content"})]})]})}};var S,D,q;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(q=(D=d.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var N,E,C;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'right aligned items',
  render(args) {
    return <Toolbar {...args}>
        <ToolbarSpacer />
        <Button>Button</Button>
        <Icon name={settingsIcon} />
        <Icon name={downloadIcon} />
      </Toolbar>;
  }
}`,...(C=(E=m.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var k,V,A;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'evenly aligned items',
  render(args) {
    return <Toolbar {...args}>
        <ToolbarSpacer />
        <Button>Button</Button>
        <Icon name={settingsIcon} />
        <Icon name={downloadIcon} />
      </Toolbar>;
  }
}`,...(A=(V=h.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var _,R,P;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(P=(R=f.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var F,z,M;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(M=(z=v.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var j,H,L;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(L=(H=b.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var W,$,U;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(U=($=g.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};const ye=["Default","RightAlignedItems","EvenlyAlignedItems","WithSeparator","WithOverflowButton","OverflowBtns","CustomOverflowButton"],Le=Object.freeze(Object.defineProperty({__proto__:null,CustomOverflowButton:g,Default:d,EvenlyAlignedItems:h,OverflowBtns:b,RightAlignedItems:m,WithOverflowButton:v,WithSeparator:f,__namedExportsOrder:ye,default:we},Symbol.toStringTag,{value:"Module"}));export{Le as C,d as D,h as E,b as O,m as R,f as W,v as a,g as b,l as c,i as d};
//# sourceMappingURL=Toolbar.stories-972718f3.js.map
