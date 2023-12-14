import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{h as ue}from"./UI5Element-4kitL615.js";import{r as Y}from"./Icons-cDXElGrC.js";import{j as Z}from"./i18n-defaults-CPLPRuO1.js";import{e as m}from"./ListItem-IizPXeAh.js";import{f as h}from"./favorite-Os4Pj69U.js";import{s as ee}from"./settings-MaRcbmXS.js";import{r as p}from"./index-OjgoNOWw.js";import{B as o}from"./index-S2gYgxwM.js";import{D as pe}from"./index-Si386nak.js";import{I as j}from"./index-MNhYAWm5.js";import{I as te}from"./index-FvNSDeoQ.js";import{M as ce,a as I}from"./index-bJTnU5wJ.js";import{S as de}from"./index-WDYzZyce.js";import{S as me}from"./index-D50fTXZ9.js";import{S as ne}from"./index-Tc7sMC-g.js";import{T as x}from"./index-KkB5835Y.js";import{O as oe,T as a,a as he,b as ge}from"./index-6H4oaVZW.js";import{T as i}from"./index-IPJJPG41.js";import{T as O}from"./index--FOn8NFK.js";import{T as D}from"./index-F4VuT6wa.js";import{B as t}from"./Button-dXtUjl7w.js";const c=p.forwardRef((n,r)=>{const{children:s,...l}=n,{inPopover:u}=p.useContext(oe);return e.jsx(o,{...l,ref:r,children:u?s:""})});c.displayName="OverflowToolbarButton";try{c.displayName="OverflowToolbarButton",c.__docgenInfo={description:"The `OverflowToolbarButton` represents a push button that shows its text only when in the overflow area of a `Toolbar`.",displayName:"OverflowToolbarButton",props:{children:{defaultValue:null,description:"Defines the text of the component which is only visible in the overflow area of a `Toolbar`.\n\n**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.`,name:"icon",required:!0,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled` property is set to `true`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<ButtonDomRef>"}},tooltip:{defaultValue:null,description:`Defines the tooltip of the component.
**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.`,name:"tooltip",required:!1,type:{name:"string"}},design:{defaultValue:null,description:"Defines the component design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},type:{defaultValue:null,description:'Defines whether the button has special form-related functionality.\n\n**Note:** For the `type` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`',name:"type",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Submit"'},{value:'"Reset"'},{value:'"Button"'},{value:'"Submit"'},{value:'"Reset"'}]}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},iconEnd:{defaultValue:null,description:"Defines whether the icon should be displayed after the component text.",name:"iconEnd",required:!1,type:{name:"boolean"}},submits:{defaultValue:null,description:'When set to `true`, the component will automatically submit the nearest HTML form element on `press`.\n\n**Note:** For the `submits` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n@deprecated Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".',name:"submits",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain.",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const d=p.forwardRef((n,r)=>{const{children:s,...l}=n,{inPopover:u}=p.useContext(oe);return e.jsx(x,{...l,ref:r,children:u?s:""})});d.displayName="OverflowToolbarToggleButton";try{d.displayName="OverflowToolbarToggleButton",d.__docgenInfo={description:"The `OverflowToolbarToggleButton` represents a toggle button that shows its text only when in the overflow area of a `Toolbar`.",displayName:"OverflowToolbarToggleButton",props:{children:{defaultValue:null,description:"Defines the text of the component which is only visible in the overflow area of a `Toolbar`.\n\n**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.`,name:"icon",required:!0,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled` property is set to `true`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<ToggleButtonDomRef>"}},tooltip:{defaultValue:null,description:`Defines the tooltip of the component.
**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.`,name:"tooltip",required:!1,type:{name:"string"}},design:{defaultValue:null,description:"Defines the component design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},type:{defaultValue:null,description:'Defines whether the button has special form-related functionality.\n\n**Note:** For the `type` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`',name:"type",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Submit"'},{value:'"Reset"'},{value:'"Button"'},{value:'"Submit"'},{value:'"Reset"'}]}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},iconEnd:{defaultValue:null,description:"Defines whether the icon should be displayed after the component text.",name:"iconEnd",required:!1,type:{name:"boolean"}},submits:{defaultValue:null,description:'When set to `true`, the component will automatically submit the nearest HTML form element on `press`.\n\n**Note:** For the `submits` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n@deprecated Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".',name:"submits",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain.",name:"disabled",required:!1,type:{name:"boolean"}},pressed:{defaultValue:null,description:"Determines whether the component is displayed as pressed.",name:"pressed",required:!1,type:{name:"boolean"}}}}}catch{}const fe="download",re="M480 448q13 0 22.5 9.5T512 480q0 14-9.5 23t-22.5 9H32q-14 0-23-9t-9-23q0-13 9-22.5t23-9.5h448zm-200-74q-10 10-22.5 9.5T235 374L133 273q-12-12 0-23 11-11 22 0l85 85V16q0-16 16-16t16 16v321l87-87q11-11 23 0 12 12 0 23z",Te=!1,ve=Z,be="SAP-icons-v4",Be="@ui5/webcomponents-icons";Y(fe,{pathData:re,ltr:Te,accData:ve,collection:be,packageName:Be});const we="download",ae="M123 261q-8-8-8-18 0-11 7.5-18t18.5-7 18 7l71 72V26q0-11 7.5-18.5T256 0t18.5 7.5T282 26v271l71-72q7-7 18-7t18.5 7 7.5 18q0 10-8 18L274 376q-8 8-18 8t-18-8zm363 200q11 0 18.5 7t7.5 18-7.5 18.5T486 512H26q-11 0-18.5-7.5T0 486t7.5-18 18.5-7h460z",ye=!1,xe=Z,je="SAP-icons-v5",Oe="@ui5/webcomponents-icons";Y(we,{pathData:ae,ltr:ye,accData:xe,collection:je,packageName:Oe});ue();const se="download",De={title:"Layouts & Floorplans / Toolbar",component:a,argTypes:{children:{control:{disable:!0}},as:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},args:{design:he.Auto,toolbarStyle:ge.Standard},parameters:{chromatic:{delay:1e3}}},g={render(n){return e.jsxs(a,{...n,children:[e.jsx(i,{children:"Toolbar"}),e.jsx(o,{design:t.Transparent,children:"Button One"}),e.jsx(o,{design:t.Transparent,children:"Button Two"}),e.jsx(te,{}),e.jsx(pe,{}),e.jsx(ne,{})]})}},f={name:"right aligned items",render(n){return e.jsxs(a,{...n,children:[e.jsx(D,{}),e.jsx(o,{design:t.Transparent,children:"Button"}),e.jsx(j,{name:ee}),e.jsx(j,{name:se})]})}},T={name:"evenly aligned items",render(n){return e.jsxs(a,{...n,children:[e.jsx(i,{children:"Left"}),e.jsx(D,{}),e.jsx(o,{design:t.Transparent,children:"Center"}),e.jsx(D,{}),e.jsx(i,{children:"Right"}),e.jsx(j,{name:ee}),e.jsx(j,{name:se})]})}},v={name:"with separator",render(n){return e.jsxs(a,{...n,children:[e.jsx(o,{design:t.Transparent,children:"Item1"}),e.jsx(o,{design:t.Transparent,children:"Item2"}),e.jsx(o,{design:t.Transparent,children:"Item3"}),e.jsx(O,{}),e.jsx(o,{design:t.Transparent,children:"Item4"}),e.jsx(o,{design:t.Transparent,children:"Item5"}),e.jsx(O,{}),e.jsx(o,{design:t.Transparent,children:"Item6"}),e.jsx(O,{}),e.jsx(o,{design:t.Transparent,children:"Item7"})]})}},b={name:"Popover in Overflow Popover",render(n){const[r,s]=p.useState(!1),[l,u]=p.useState("openMenuBtn"),ie=le=>{u(le.target.id),s(!0)};return e.jsxs(e.Fragment,{children:[e.jsxs(a,{...n,style:{width:"400px"},children:[e.jsx(i,{children:"Toolbar"}),e.jsx(o,{design:t.Transparent,children:"Button One"}),e.jsx(o,{design:t.Transparent,children:"Button Two"}),e.jsx(o,{design:t.Transparent,id:"openMenuBtn",onClick:ie,children:"Open Popover (Menu)"})]}),e.jsxs(ce,{opener:l,open:r,onAfterClose:()=>{s(!1)},children:[e.jsx(I,{text:"New File"}),e.jsx(I,{text:"New Folder"})]})]})}},B={name:"with overflow button",render(n){const[r,s]=p.useState(100),l=u=>{s(u.target.value)};return e.jsxs(e.Fragment,{children:[e.jsx(me,{onInput:l,value:r}),e.jsxs(a,{...n,style:{width:`calc(100% * ${r/100})`},children:[e.jsx(i,{children:"Toolbar"}),e.jsx(o,{design:t.Transparent,children:"Button One"}),e.jsx(o,{design:t.Transparent,icon:"accept"}),e.jsx(o,{design:t.Transparent,children:"Button Two"}),e.jsx(de,{style:{width:"auto"}}),e.jsx(ne,{}),e.jsx(o,{design:t.Transparent,children:"Button Three"}),e.jsx(o,{design:t.Transparent,children:"Button Four"}),e.jsx(c,{icon:m,children:"Edit"}),e.jsx(d,{design:t.Transparent,icon:h,children:"Favorite"})]})]})}},w={name:"OverflowToolbarButton & OverflowToolbarToggleButton",render(n){return e.jsxs(a,{...n,style:{width:"500px",...n.style},children:[e.jsx(o,{design:t.Transparent,icon:m,tooltip:"Text always visible",children:"Default Button"}),e.jsx(c,{design:t.Transparent,icon:m,tooltip:"Text only visible in popover",children:"OverflowToolbarButton (only visible in popover)"}),e.jsx(x,{design:t.Transparent,icon:h,tooltip:"Text always visible",children:"Default ToggleButton"}),e.jsx(d,{design:t.Transparent,icon:h,tooltip:"Text only visible in popover",children:"OverflowToolbarToggleButton (only visible in popover)"}),e.jsx(o,{design:t.Transparent,icon:m,tooltip:"Text always visible",children:"Default Button"}),e.jsx(c,{design:t.Transparent,icon:m,tooltip:"Text only visible in popover",children:"OverflowToolbarButton (only visible in popover)"}),e.jsx(x,{design:t.Transparent,icon:h,tooltip:"Text always visible",children:"Default ToggleButton"}),e.jsx(d,{design:t.Transparent,icon:h,tooltip:"Text only visible in popover",children:"OverflowToolbarToggleButton (only visible in popover)"})]})}},y={name:"with custom overflow button",render(n){return e.jsxs(e.Fragment,{children:[e.jsxs(a,{...n,style:{width:"300px",...n.style},overflowButton:e.jsx(x,{icon:"menu2",design:t.Transparent,onClick:()=>{alert("Custom action")}}),children:[e.jsx(te,{}),e.jsx(i,{wrapping:!1,children:"Overflow Content"})]}),e.jsxs(a,{...n,style:{width:"300px",...n.style},overflowButton:e.jsx(x,{icon:"menu2",design:t.Transparent,onClick:r=>{r.preventDefault(),alert("Custom action")}}),children:[e.jsx(i,{wrapping:!1,children:"Opening the popover is prevented"}),e.jsx(i,{wrapping:!1,children:"Overflow Content"})]})]})}};var S,N,q;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render(args) {
    return <Toolbar {...args}>
        <Text>Toolbar</Text>
        <Button design={ButtonDesign.Transparent}>Button One</Button>
        <Button design={ButtonDesign.Transparent}>Button Two</Button>
        <Input />
        <DatePicker />
        <Switch />
      </Toolbar>;
  }
}`,...(q=(N=g.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var C,k,E;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'right aligned items',
  render(args) {
    return <Toolbar {...args}>
        <ToolbarSpacer />
        <Button design={ButtonDesign.Transparent}>Button</Button>
        <Icon name={settingsIcon} />
        <Icon name={downloadIcon} />
      </Toolbar>;
  }
}`,...(E=(k=f.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var P,V,A;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'evenly aligned items',
  render(args) {
    return <Toolbar {...args}>
        <Text>Left</Text>
        <ToolbarSpacer />
        <Button design={ButtonDesign.Transparent}>Center</Button>
        <ToolbarSpacer />
        <Text>Right</Text>
        <Icon name={settingsIcon} />
        <Icon name={downloadIcon} />
      </Toolbar>;
  }
}`,...(A=(V=T.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var R,_,F;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'with separator',
  render(args) {
    return <Toolbar {...args}>
        <Button design={ButtonDesign.Transparent}>Item1</Button>
        <Button design={ButtonDesign.Transparent}>Item2</Button>
        <Button design={ButtonDesign.Transparent}>Item3</Button>
        <ToolbarSeparator />
        <Button design={ButtonDesign.Transparent}>Item4</Button>
        <Button design={ButtonDesign.Transparent}>Item5</Button>
        <ToolbarSeparator />
        <Button design={ButtonDesign.Transparent}>Item6</Button>
        <ToolbarSeparator />
        <Button design={ButtonDesign.Transparent}>Item7</Button>
      </Toolbar>;
  }
}`,...(F=(_=v.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var M,L,z;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
          <Button design={ButtonDesign.Transparent}>Button One</Button>
          <Button design={ButtonDesign.Transparent}>Button Two</Button>
          <Button design={ButtonDesign.Transparent} id="openMenuBtn" onClick={handlePopoverOpenerClick}>
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
}`,...(z=(L=b.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var H,W,$;B.parameters={...B.parameters,docs:{...(H=B.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
          <Button design={ButtonDesign.Transparent}>Button One</Button>
          <Button design={ButtonDesign.Transparent} icon="accept" />
          <Button design={ButtonDesign.Transparent}>Button Two</Button>
          <Select style={{
          width: 'auto'
        }} />
          <Switch />
          <Button design={ButtonDesign.Transparent}>Button Three</Button>
          <Button design={ButtonDesign.Transparent}>Button Four</Button>
          <OverflowToolbarButton icon={editIcon}>Edit</OverflowToolbarButton>
          <OverflowToolbarToggleButton design={ButtonDesign.Transparent} icon={favoriteIcon}>
            Favorite
          </OverflowToolbarToggleButton>
        </Toolbar>
      </>;
  }
}`,...($=(W=B.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var U,G,J;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'OverflowToolbarButton & OverflowToolbarToggleButton',
  render(args) {
    return <Toolbar {...args} style={{
      width: '500px',
      ...args.style
    }}>
        <Button design={ButtonDesign.Transparent} icon={editIcon} tooltip="Text always visible">
          Default Button
        </Button>
        <OverflowToolbarButton design={ButtonDesign.Transparent} icon={editIcon} tooltip="Text only visible in popover">
          OverflowToolbarButton (only visible in popover)
        </OverflowToolbarButton>
        <ToggleButton design={ButtonDesign.Transparent} icon={favoriteIcon} tooltip="Text always visible">
          Default ToggleButton
        </ToggleButton>
        <OverflowToolbarToggleButton design={ButtonDesign.Transparent} icon={favoriteIcon} tooltip="Text only visible in popover">
          OverflowToolbarToggleButton (only visible in popover)
        </OverflowToolbarToggleButton>
        <Button design={ButtonDesign.Transparent} icon={editIcon} tooltip="Text always visible">
          Default Button
        </Button>
        <OverflowToolbarButton design={ButtonDesign.Transparent} icon={editIcon} tooltip="Text only visible in popover">
          OverflowToolbarButton (only visible in popover)
        </OverflowToolbarButton>
        <ToggleButton design={ButtonDesign.Transparent} icon={favoriteIcon} tooltip="Text always visible">
          Default ToggleButton
        </ToggleButton>
        <OverflowToolbarToggleButton design={ButtonDesign.Transparent} icon={favoriteIcon} tooltip="Text only visible in popover">
          OverflowToolbarToggleButton (only visible in popover)
        </OverflowToolbarToggleButton>
      </Toolbar>;
  }
}`,...(J=(G=w.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Ie=["Default","RightAlignedItems","EvenlyAlignedItems","WithSeparator","PopoverInOverflowPopover","WithOverflowButton","OverflowBtns","CustomOverflowButton"],Qe=Object.freeze(Object.defineProperty({__proto__:null,CustomOverflowButton:y,Default:g,EvenlyAlignedItems:T,OverflowBtns:w,PopoverInOverflowPopover:b,RightAlignedItems:f,WithOverflowButton:B,WithSeparator:v,__namedExportsOrder:Ie,default:De},Symbol.toStringTag,{value:"Module"}));export{Qe as C,g as D,T as E,w as O,b as P,f as R,v as W,B as a,y as b,c,d};
