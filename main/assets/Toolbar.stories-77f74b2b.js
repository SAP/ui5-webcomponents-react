import{j as e,a as n,F as J}from"./jsx-runtime-670450c2.js";import{k as re}from"./UI5Element-427ec721.js";import{h as K}from"./Icons-fe6e657a.js";import{q as Q}from"./i18n-defaults-80781f7e.js";import{e as p}from"./ListItem-83c0fb9e.js";import{f as d}from"./favorite-f8e4777a.js";import{s as X}from"./settings-f4b98acd.js";import{r as w}from"./index-f1f749bf.js";import{a as S}from"./Button-bc3a11a1.js";import{O as Y,T as r,a as ae,b as le}from"./index-2580fb41.js";import{B as o}from"./index-78662905.js";import{D as ie}from"./index-4e4ca124.js";import{I as x}from"./index-437f6447.js";import{I as Z}from"./index-488c472e.js";import{S as se}from"./index-06e6cc60.js";import{S as ue}from"./index-334513a6.js";import{S as ee}from"./index-bf881d76.js";import{T as y}from"./index-9327b55a.js";import{T as l}from"./index-479d8097.js";import{T as I}from"./index-fa5fc703.js";import{T as O}from"./index-ff3cb99b.js";const i=w.forwardRef((t,a)=>{const{children:u,...B}=t,{inPopover:c}=w.useContext(Y);return e(o,{...B,ref:a,children:c?u:""})});i.displayName="OverflowToolbarButton";try{i.displayName="OverflowToolbarButton",i.__docgenInfo={description:"The `OverflowToolbarButton` represents a push button that shows its text only when in the overflow area of a `Toolbar`.",displayName:"OverflowToolbarButton",props:{children:{defaultValue:null,description:"Defines the text of the component which is only visible in the overflow area of a `Toolbar`.\n\n**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.`,name:"icon",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled` property is set to `true`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<ButtonDomRef>"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},tooltip:{defaultValue:null,description:`Defines the tooltip of the component.
**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.`,name:"tooltip",required:!1,type:{name:"string"}},design:{defaultValue:null,description:"Defines the component design.\n\n**The available values are:**\n\n*   `Default`\n*   `Emphasized`\n*   `Positive`\n*   `Negative`\n*   `Transparent`\n*   `Attention`",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},iconEnd:{defaultValue:null,description:"Defines whether the icon should be displayed after the component text.",name:"iconEnd",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain.",name:"disabled",required:!1,type:{name:"boolean"}},submits:{defaultValue:null,description:'When set to `true`, the component will automatically submit the nearest HTML form element on `press`.\n\n**Note:** For the `submits` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`',name:"submits",required:!1,type:{name:"boolean"}}}}}catch{}const s=w.forwardRef((t,a)=>{const{children:u,...B}=t,{inPopover:c}=w.useContext(Y);return e(y,{...B,ref:a,children:c?u:""})});s.displayName="OverflowToolbarToggleButton";try{s.displayName="OverflowToolbarToggleButton",s.__docgenInfo={description:"The `OverflowToolbarToggleButton` represents a toggle button that shows its text only when in the overflow area of a `Toolbar`.",displayName:"OverflowToolbarToggleButton",props:{children:{defaultValue:null,description:"Defines the text of the component which is only visible in the overflow area of a `Toolbar`.\n\n**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.`,name:"icon",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled` property is set to `true`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<ToggleButtonDomRef>"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},tooltip:{defaultValue:null,description:`Defines the tooltip of the component.
**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.`,name:"tooltip",required:!1,type:{name:"string"}},design:{defaultValue:null,description:"Defines the component design.\n\n**The available values are:**\n\n*   `Default`\n*   `Emphasized`\n*   `Positive`\n*   `Negative`\n*   `Transparent`\n*   `Attention`",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},iconEnd:{defaultValue:null,description:"Defines whether the icon should be displayed after the component text.",name:"iconEnd",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain.",name:"disabled",required:!1,type:{name:"boolean"}},submits:{defaultValue:null,description:'When set to `true`, the component will automatically submit the nearest HTML form element on `press`.\n\n**Note:** For the `submits` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`',name:"submits",required:!1,type:{name:"boolean"}},pressed:{defaultValue:null,description:"Determines whether the component is displayed as pressed.",name:"pressed",required:!1,type:{name:"boolean"}}}}}catch{}const ce="download",te="M480 448q13 0 22.5 9.5T512 480q0 14-9.5 23t-22.5 9H32q-14 0-23-9t-9-23q0-13 9-22.5t23-9.5h448zm-200-74q-10 10-22.5 9.5T235 374L133 273q-12-12 0-23 11-11 22 0l85 85V16q0-16 16-16t16 16v321l87-87q11-11 23 0 12 12 0 23z",pe=!1,de=Q,me="SAP-icons-v4",he="@ui5/webcomponents-icons";K(ce,{pathData:te,ltr:pe,accData:de,collection:me,packageName:he});const fe="download",oe="M472 459q12 0 19.5 8t7.5 19q0 10-7.5 18.5T472 513H41q-13 0-20-8.5T14 486q0-11 7-19t20-8h431zM132 262q-8-8-8-18.5t8-18.5 19-8 19 8l62 62V28q0-12 7.5-19.5T259 1t19.5 7.5T286 28v259l62-62q8-8 19-8t19 8 8 18.5-8 18.5L278 370q-2 1-4 3-2 1-3.5 2t-3.5 3q-9 5-19 0-7-5-11-8z",ve=!1,be=Q,ge="SAP-icons-v5",Te="@ui5/webcomponents-icons";K(fe,{pathData:oe,ltr:ve,accData:be,collection:ge,packageName:Te});re("sap_horizon");const ne="download",we={title:"Layouts & Floorplans / Toolbar",component:r,argTypes:{children:{control:{disable:!0}},as:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},args:{design:ae.Auto,toolbarStyle:le.Standard}},m={render(t){return n(r,{...t,children:[e(l,{children:"Toolbar"}),e(o,{children:"Button One"}),e(o,{children:"Button Two"}),e(Z,{}),e(ie,{}),e(ee,{})]})}},h={name:"right aligned items",render(t){return n(r,{...t,children:[e(O,{}),e(o,{children:"Button"}),e(x,{name:X}),e(x,{name:ne})]})}},f={name:"evenly aligned items",render(t){return n(r,{...t,children:[e(l,{children:"Left"}),e(O,{}),e(o,{children:"Center"}),e(O,{}),e(l,{children:"Right"}),e(x,{name:X}),e(x,{name:ne})]})}},v={name:"with separator",render(t){return n(r,{...t,children:[e(o,{children:"Item1"}),e(o,{children:"Item2"}),e(o,{children:"Item3"}),e(I,{}),e(o,{children:"Item4"}),e(o,{children:"Item5"}),e(I,{}),e(o,{children:"Item6"}),e(I,{}),e(o,{children:"Item7"})]})}},b={name:"with overflow button",render(t){const[a,u]=w.useState(100);return n(J,{children:[e(ue,{onInput:c=>{u(c.target.value)},value:a}),n(r,{...t,style:{width:`calc(100% * ${a/100})`},children:[e(l,{children:"Toolbar"}),e(o,{children:"Button One"}),e(o,{icon:"accept"}),e(o,{children:"Button Two"}),e(se,{style:{width:"auto"}}),e(ee,{}),e(o,{children:"Button Three"}),e(o,{children:"Button Four"}),e(i,{icon:p,children:"Edit"}),e(s,{icon:d,children:"Favorite"})]})]})}},g={name:"OverflowToolbarButton & OverflowToolbarToggleButton",render(t){return n(r,{...t,style:{width:"500px",...t.style},children:[e(o,{icon:p,tooltip:"Text always visible",children:"Default Button"}),e(i,{icon:p,tooltip:"Text only visible in popover",children:"OverflowToolbarButton (only visible in popover)"}),e(y,{icon:d,tooltip:"Text always visible",children:"Default ToggleButton"}),e(s,{icon:d,tooltip:"Text only visible in popover",children:"OverflowToolbarToggleButton (only visible in popover)"}),e(o,{icon:p,tooltip:"Text always visible",children:"Default Button"}),e(i,{icon:p,tooltip:"Text only visible in popover",children:"OverflowToolbarButton (only visible in popover)"}),e(y,{icon:d,tooltip:"Text always visible",children:"Default ToggleButton"}),e(s,{icon:d,tooltip:"Text only visible in popover",children:"OverflowToolbarToggleButton (only visible in popover)"})]})}},T={name:"with custom overflow button",render(t){return n(J,{children:[n(r,{...t,style:{width:"300px",...t.style},overflowButton:e(y,{icon:"menu2",design:S.Transparent,onClick:()=>{alert("Custom action")}}),children:[e(Z,{}),e(l,{wrapping:!1,children:"Overflow Content"})]}),n(r,{...t,style:{width:"300px",...t.style},overflowButton:e(y,{icon:"menu2",design:S.Transparent,onClick:a=>{a.preventDefault(),alert("Custom action")}}),children:[e(l,{wrapping:!1,children:"Opening the popover is prevented"}),e(l,{wrapping:!1,children:"Overflow Content"})]})]})}};var D,q,N;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(N=(q=m.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var C,E,k;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'right aligned items',
  render(args) {
    return <Toolbar {...args}>
        <ToolbarSpacer />
        <Button>Button</Button>
        <Icon name={settingsIcon} />
        <Icon name={downloadIcon} />
      </Toolbar>;
  }
}`,...(k=(E=h.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var V,A,_;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(_=(A=f.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var R,P,F;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(F=(P=v.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var z,L,M;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(M=(L=b.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var j,H,W;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(W=(H=g.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var $,U,G;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(G=(U=T.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};const ye=["Default","RightAlignedItems","EvenlyAlignedItems","WithSeparator","WithOverflowButton","OverflowBtns","CustomOverflowButton"],He=Object.freeze(Object.defineProperty({__proto__:null,CustomOverflowButton:T,Default:m,EvenlyAlignedItems:f,OverflowBtns:g,RightAlignedItems:h,WithOverflowButton:b,WithSeparator:v,__namedExportsOrder:ye,default:we},Symbol.toStringTag,{value:"Module"}));export{He as C,m as D,f as E,g as O,h as R,v as W,b as a,T as b,i as c,s as d};
//# sourceMappingURL=Toolbar.stories-77f74b2b.js.map
