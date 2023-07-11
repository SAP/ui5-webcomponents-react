import{j as e}from"./jsx-runtime-5926aa06.js";import{k as ue}from"./UI5Element-78be0f3d.js";import{j as Y}from"./Icons-26e87c01.js";import{q as Z}from"./i18n-defaults-80781f7e.js";import{e as m}from"./ListItem-6bbd1cb0.js";import{f as h}from"./favorite-d5efc873.js";import{s as ee}from"./settings-439530af.js";import{r as p}from"./index-ebeaab24.js";import{B as o}from"./index-f5469281.js";import{D as pe}from"./index-3b205a87.js";import{I as j}from"./index-d08c539b.js";import{I as te}from"./index-e31fb405.js";import{M as ce,a as I}from"./index-5c79c6d0.js";import{S as de}from"./index-c1b24e2c.js";import{S as me}from"./index-047237c8.js";import{S as ne}from"./index-c29c2243.js";import{T as x}from"./index-eae4011b.js";import{O as oe,T as a,a as he,b as ge}from"./index-04436634.js";import{T as i}from"./index-562e1433.js";import{T as D}from"./index-d39e50ee.js";import{T as O}from"./index-d512ac31.js";import{B as t}from"./Button-427cd4bb.js";const c=p.forwardRef((n,r)=>{const{children:s,...l}=n,{inPopover:u}=p.useContext(oe);return e.jsx(o,{...l,ref:r,children:u?s:""})});c.displayName="OverflowToolbarButton";try{c.displayName="OverflowToolbarButton",c.__docgenInfo={description:"The `OverflowToolbarButton` represents a push button that shows its text only when in the overflow area of a `Toolbar`.",displayName:"OverflowToolbarButton",props:{children:{defaultValue:null,description:"Defines the text of the component which is only visible in the overflow area of a `Toolbar`.\n\n**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.`,name:"icon",required:!0,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled` property is set to `true`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<ButtonDomRef>"}},tooltip:{defaultValue:null,description:`Defines the tooltip of the component.
**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.`,name:"tooltip",required:!1,type:{name:"string"}},design:{defaultValue:null,description:"Defines the component design.\n\n**The available values are:**\n\n*   `Default`\n*   `Emphasized`\n*   `Positive`\n*   `Negative`\n*   `Transparent`\n*   `Attention`",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},type:{defaultValue:null,description:'Defines whether the button has special form-related functionality.\n\n**The available values are:**\n\n*   `Button`\n*   `Submit`\n*   `Reset`\n\n\n\n**Note:** For the `type` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`',name:"type",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Submit"'},{value:'"Reset"'},{value:'"Button"'},{value:'"Submit"'},{value:'"Reset"'}]}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},iconEnd:{defaultValue:null,description:"Defines whether the icon should be displayed after the component text.",name:"iconEnd",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain.",name:"disabled",required:!1,type:{name:"boolean"}},submits:{defaultValue:null,description:'When set to `true`, the component will automatically submit the nearest HTML form element on `press`.\n\n**Note:** For the `submits` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n@deprecated Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".',name:"submits",required:!1,type:{name:"boolean"}}}}}catch{}const d=p.forwardRef((n,r)=>{const{children:s,...l}=n,{inPopover:u}=p.useContext(oe);return e.jsx(x,{...l,ref:r,children:u?s:""})});d.displayName="OverflowToolbarToggleButton";try{d.displayName="OverflowToolbarToggleButton",d.__docgenInfo={description:"The `OverflowToolbarToggleButton` represents a toggle button that shows its text only when in the overflow area of a `Toolbar`.",displayName:"OverflowToolbarToggleButton",props:{children:{defaultValue:null,description:"Defines the text of the component which is only visible in the overflow area of a `Toolbar`.\n\n**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.`,name:"icon",required:!0,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled` property is set to `true`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<ToggleButtonDomRef>"}},tooltip:{defaultValue:null,description:`Defines the tooltip of the component.
**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.`,name:"tooltip",required:!1,type:{name:"string"}},design:{defaultValue:null,description:"Defines the component design.\n\n**The available values are:**\n\n*   `Default`\n*   `Emphasized`\n*   `Positive`\n*   `Negative`\n*   `Transparent`\n*   `Attention`",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},type:{defaultValue:null,description:'Defines whether the button has special form-related functionality.\n\n**The available values are:**\n\n*   `Button`\n*   `Submit`\n*   `Reset`\n\n\n\n**Note:** For the `type` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`',name:"type",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Submit"'},{value:'"Reset"'},{value:'"Button"'},{value:'"Submit"'},{value:'"Reset"'}]}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},iconEnd:{defaultValue:null,description:"Defines whether the icon should be displayed after the component text.",name:"iconEnd",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain.",name:"disabled",required:!1,type:{name:"boolean"}},submits:{defaultValue:null,description:'When set to `true`, the component will automatically submit the nearest HTML form element on `press`.\n\n**Note:** For the `submits` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n@deprecated Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".',name:"submits",required:!1,type:{name:"boolean"}},pressed:{defaultValue:null,description:"Determines whether the component is displayed as pressed.",name:"pressed",required:!1,type:{name:"boolean"}}}}}catch{}const fe="download",re="M480 448q13 0 22.5 9.5T512 480q0 14-9.5 23t-22.5 9H32q-14 0-23-9t-9-23q0-13 9-22.5t23-9.5h448zm-200-74q-10 10-22.5 9.5T235 374L133 273q-12-12 0-23 11-11 22 0l85 85V16q0-16 16-16t16 16v321l87-87q11-11 23 0 12 12 0 23z",ve=!1,Te=Z,be="SAP-icons-v4",Be="@ui5/webcomponents-icons";Y(fe,{pathData:re,ltr:ve,accData:Te,collection:be,packageName:Be});const we="download",ae="M472 459q12 0 19.5 8t7.5 19q0 10-7.5 18.5T472 513H41q-13 0-20-8.5T14 486q0-11 7-19t20-8h431zM132 262q-8-8-8-18.5t8-18.5 19-8 19 8l62 62V28q0-12 7.5-19.5T259 1t19.5 7.5T286 28v259l62-62q8-8 19-8t19 8 8 18.5-8 18.5L278 370q-2 1-4 3-2 1-3.5 2t-3.5 3q-9 5-19 0-7-5-11-8z",ye=!1,xe=Z,je="SAP-icons-v5",De="@ui5/webcomponents-icons";Y(we,{pathData:ae,ltr:ye,accData:xe,collection:je,packageName:De});ue();const se="download",Oe={title:"Layouts & Floorplans / Toolbar",component:a,argTypes:{children:{control:{disable:!0}},as:{control:{disable:!0}},overflowButton:{control:{disable:!0}}},args:{design:he.Auto,toolbarStyle:ge.Standard}},g={render(n){return e.jsxs(a,{...n,children:[e.jsx(i,{children:"Toolbar"}),e.jsx(o,{design:t.Transparent,children:"Button One"}),e.jsx(o,{design:t.Transparent,children:"Button Two"}),e.jsx(te,{}),e.jsx(pe,{}),e.jsx(ne,{})]})}},f={name:"right aligned items",render(n){return e.jsxs(a,{...n,children:[e.jsx(O,{}),e.jsx(o,{design:t.Transparent,children:"Button"}),e.jsx(j,{name:ee}),e.jsx(j,{name:se})]})}},v={name:"evenly aligned items",render(n){return e.jsxs(a,{...n,children:[e.jsx(i,{children:"Left"}),e.jsx(O,{}),e.jsx(o,{design:t.Transparent,children:"Center"}),e.jsx(O,{}),e.jsx(i,{children:"Right"}),e.jsx(j,{name:ee}),e.jsx(j,{name:se})]})}},T={name:"with separator",render(n){return e.jsxs(a,{...n,children:[e.jsx(o,{design:t.Transparent,children:"Item1"}),e.jsx(o,{design:t.Transparent,children:"Item2"}),e.jsx(o,{design:t.Transparent,children:"Item3"}),e.jsx(D,{}),e.jsx(o,{design:t.Transparent,children:"Item4"}),e.jsx(o,{design:t.Transparent,children:"Item5"}),e.jsx(D,{}),e.jsx(o,{design:t.Transparent,children:"Item6"}),e.jsx(D,{}),e.jsx(o,{design:t.Transparent,children:"Item7"})]})}},b={name:"Popover in Overflow Popover",render(n){const[r,s]=p.useState(!1),[l,u]=p.useState("openMenuBtn"),ie=le=>{u(le.target.id),s(!0)};return e.jsxs(e.Fragment,{children:[e.jsxs(a,{...n,style:{width:"400px"},children:[e.jsx(i,{children:"Toolbar"}),e.jsx(o,{design:t.Transparent,children:"Button One"}),e.jsx(o,{design:t.Transparent,children:"Button Two"}),e.jsx(o,{design:t.Transparent,id:"openMenuBtn",onClick:ie,children:"Open Popover (Menu)"})]}),e.jsxs(ce,{opener:l,open:r,onAfterClose:()=>{s(!1)},children:[e.jsx(I,{text:"New File"}),e.jsx(I,{text:"New Folder"})]})]})}},B={name:"with overflow button",render(n){const[r,s]=p.useState(100),l=u=>{s(u.target.value)};return e.jsxs(e.Fragment,{children:[e.jsx(me,{onInput:l,value:r}),e.jsxs(a,{...n,style:{width:`calc(100% * ${r/100})`},children:[e.jsx(i,{children:"Toolbar"}),e.jsx(o,{design:t.Transparent,children:"Button One"}),e.jsx(o,{design:t.Transparent,icon:"accept"}),e.jsx(o,{design:t.Transparent,children:"Button Two"}),e.jsx(de,{style:{width:"auto"}}),e.jsx(ne,{}),e.jsx(o,{design:t.Transparent,children:"Button Three"}),e.jsx(o,{design:t.Transparent,children:"Button Four"}),e.jsx(c,{icon:m,children:"Edit"}),e.jsx(d,{design:t.Transparent,icon:h,children:"Favorite"})]})]})}},w={name:"OverflowToolbarButton & OverflowToolbarToggleButton",render(n){return e.jsxs(a,{...n,style:{width:"500px",...n.style},children:[e.jsx(o,{design:t.Transparent,icon:m,tooltip:"Text always visible",children:"Default Button"}),e.jsx(c,{design:t.Transparent,icon:m,tooltip:"Text only visible in popover",children:"OverflowToolbarButton (only visible in popover)"}),e.jsx(x,{design:t.Transparent,icon:h,tooltip:"Text always visible",children:"Default ToggleButton"}),e.jsx(d,{design:t.Transparent,icon:h,tooltip:"Text only visible in popover",children:"OverflowToolbarToggleButton (only visible in popover)"}),e.jsx(o,{design:t.Transparent,icon:m,tooltip:"Text always visible",children:"Default Button"}),e.jsx(c,{design:t.Transparent,icon:m,tooltip:"Text only visible in popover",children:"OverflowToolbarButton (only visible in popover)"}),e.jsx(x,{design:t.Transparent,icon:h,tooltip:"Text always visible",children:"Default ToggleButton"}),e.jsx(d,{design:t.Transparent,icon:h,tooltip:"Text only visible in popover",children:"OverflowToolbarToggleButton (only visible in popover)"})]})}},y={name:"with custom overflow button",render(n){return e.jsxs(e.Fragment,{children:[e.jsxs(a,{...n,style:{width:"300px",...n.style},overflowButton:e.jsx(x,{icon:"menu2",design:t.Transparent,onClick:()=>{alert("Custom action")}}),children:[e.jsx(te,{}),e.jsx(i,{wrapping:!1,children:"Overflow Content"})]}),e.jsxs(a,{...n,style:{width:"300px",...n.style},overflowButton:e.jsx(x,{icon:"menu2",design:t.Transparent,onClick:r=>{r.preventDefault(),alert("Custom action")}}),children:[e.jsx(i,{wrapping:!1,children:"Opening the popover is prevented"}),e.jsx(i,{wrapping:!1,children:"Overflow Content"})]})]})}};var S,N,q;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(q=(N=g.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var C,E,P;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'right aligned items',
  render(args) {
    return <Toolbar {...args}>
        <ToolbarSpacer />
        <Button design={ButtonDesign.Transparent}>Button</Button>
        <Icon name={settingsIcon} />
        <Icon name={downloadIcon} />
      </Toolbar>;
  }
}`,...(P=(E=f.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var k,V,A;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(A=(V=v.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var R,_,F;T.parameters={...T.parameters,docs:{...(R=T.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(F=(_=T.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var M,z,L;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(L=(z=b.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var H,W,$;B.parameters={...B.parameters,docs:{...(H=B.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(X=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Ie=["Default","RightAlignedItems","EvenlyAlignedItems","WithSeparator","PopoverInOverflowPopover","WithOverflowButton","OverflowBtns","CustomOverflowButton"],Qe=Object.freeze(Object.defineProperty({__proto__:null,CustomOverflowButton:y,Default:g,EvenlyAlignedItems:v,OverflowBtns:w,PopoverInOverflowPopover:b,RightAlignedItems:f,WithOverflowButton:B,WithSeparator:T,__namedExportsOrder:Ie,default:Oe},Symbol.toStringTag,{value:"Module"}));export{Qe as C,g as D,v as E,w as O,b as P,f as R,T as W,B as a,y as b,c,d};
//# sourceMappingURL=Toolbar.stories-8f6d4189.js.map
