import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{i as X}from"./Person-Bk5r7PMP.js";import{S as Y,s as Z,b as ee,m as Q,a as te}from"./sys-help-nIM9lqpK.js";import{n as G}from"./nav-back-h8PAIATe.js";import{F as ne}from"./index-C2w1dnoB.js";import{B}from"./index-C2cs6waD.js";import{L as oe}from"./index-D9y7p1Ga.js";import{h as re,j as y,p as K,d as ae,s as x,m as se,y as ie,B as le,w as ce}from"./jsx-runtime-2NO35c9p.js";import{d as $}from"./slot-_4yKMUwC.js";import{i as T,b as de}from"./Keys-CLf_QmYW.js";import{l as pe}from"./event-strict-DgQLNDEV.js";import{d as he}from"./parameters-bundle.css-BcDcM98N.js";import{S as me}from"./index-1MLnxj3P.js";import{T as c}from"./index-DqV79I4B.js";import{T as v}from"./index-Z1IFI4-r.js";import{S as d}from"./index-DS1u0m52.js";import{A as ue}from"./index-6SfSTYbY.js";function ge(){return re("a",{class:"ui5-shellbar-branding-root",href:this.parsedRef,target:this.target,role:this._role,tabIndex:0,"aria-label":this.accessibleNameText,onClick:this._onclick,onKeyDown:this._onkeydown,onKeyUp:this._onkeyup,children:[y("span",{class:"ui5-shellbar-logo",children:y("slot",{name:"logo"})}),!this._isSBreakPoint&&y("bdi",{class:"ui5-shellbar-title",children:y("slot",{})})]})}K("@ui5/webcomponents-theming","sap_horizon",async()=>ae);K("@ui5/webcomponents-fiori","sap_horizon",async()=>he);const fe=`:host(:not([hidden])) .ui5-shellbar-branding-root{text-decoration:none}:host(:not([hidden])){display:inline}.ui5-shellbar-branding-root{overflow:hidden;display:flex;align-items:center;padding:.25rem .5rem .25rem .25rem;box-sizing:border-box;cursor:pointer;background:var(--sapButton_Lite_Background);border:1px solid var(--sapButton_Lite_BorderColor);color:var(--sapShell_TextColor);margin-inline-start:.125rem;margin-right:8px}.ui5-shellbar-branding-root:focus{outline:var(--_ui5-v2-12-0_shellbar_logo_outline);border-radius:var(--_ui5-v2-12-0_shellbar_logo_border_radius)}.ui5-shellbar-branding-root:hover{box-shadow:var(--_ui5-v2-12-0_shellbar_button_box_shadow);border-radius:var(--_ui5-v2-12-0_shellbar_logo_border_radius)}.ui5-shellbar-branding-root:active:focus{background:var(--sapShell_Active_Background);border:1px solid var(--sapButton_Lite_Active_BorderColor);color:var(--sapShell_Active_TextColor)}.ui5-shellbar-title{display:inline-block;font-family:var(--sapFontSemiboldDuplexFamily);margin:0;font-size:var(--_ui5-v2-12-0_shellbar_menu_button_title_font_size);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--sapShell_SubBrand_TextColor)}.ui5-shellbar-logo-area{overflow:hidden;display:flex;align-items:center;padding:.25rem .5rem .25rem .25rem;box-sizing:border-box;cursor:pointer;background:var(--sapButton_Lite_Background);border:1px solid var(--sapButton_Lite_BorderColor);color:var(--sapShell_TextColor);margin-inline-start:.125rem}::slotted([slot="logo"]){max-height:2rem;max-width:3.75rem;pointer-events:none}
`;var l=function(n,t,a,s){var i=arguments.length,o=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,a):s,S;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,t,a,s);else for(var w=n.length-1;w>=0;w--)(S=n[w])&&(o=(i<3?S(o):i>3?S(t,a,o):S(t,a))||o);return i>3&&o&&Object.defineProperty(t,a,o),o};let r=class extends le{constructor(){super(...arguments),this._isSBreakPoint=!1}get parsedRef(){return this.href&&this.href.length>0?this.href:void 0}get _role(){return this.href&&this.href.length>0?"link":"button"}get accessibleNameText(){var a,s;if(this.accessibleName)return this.accessibleName;const t=(a=this.shadowRoot)==null?void 0:a.querySelector("slot:not([name])");return(s=t==null?void 0:t.assignedNodes({flatten:!0}).find(i=>{var o;return i.nodeType===Node.TEXT_NODE&&((o=i.textContent)==null?void 0:o.trim())}))==null?void 0:s.textContent.trim()}_fireClick(){this.fireDecoratorEvent("click")}_onclick(t){t.stopPropagation(),this._fireClick()}_onkeyup(t){T(t)&&this._fireClick()}_onkeydown(t){if(T(t)){t.preventDefault();return}de(t)&&this._fireClick()}};l([x()],r.prototype,"href",void 0);l([x()],r.prototype,"target",void 0);l([x()],r.prototype,"accessibleName",void 0);l([x({type:Boolean})],r.prototype,"_isSBreakPoint",void 0);l([$({type:HTMLElement,default:!0})],r.prototype,"content",void 0);l([$({type:HTMLElement})],r.prototype,"logo",void 0);r=l([se({tag:"ui5-shellbar-branding",languageAware:!0,renderer:ie,template:ge,styles:fe}),pe("click",{bubbles:!0})],r);r.define();const p=ce("ui5-shellbar-branding",["accessibleName","href","target"],[],["logo"],["click"]);p.displayName="ShellBarBranding";try{p.displayName="ShellBarBranding",p.__docgenInfo={description:"The `ShellBarBranding` component is intended to be placed inside the branding slot of the\n`ShellBar` component. Its content has higher priority than the `primaryTitle` property\nand the `logo` slot of `ShellBar`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"ShellBarBranding",props:{children:{defaultValue:null,description:`Defines the title for the ui5-shellbar-branding component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},logo:{defaultValue:null,description:"Defines the logo of the `ShellBar`.\nFor example, you can use `ui5-avatar` or `img` elements as logo.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot=\"logo\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).",name:"logo",required:!1,type:{name:"UI5WCSlotsNode"}},onClick:{defaultValue:null,description:`Fired, when the logo is activated.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ShellBarBrandingDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the text alternative of the component.
If not provided a default text alternative will be set, if present.`,name:"accessibleName",required:!1,type:{name:"string"}},href:{defaultValue:{value:"undefined"},description:`Defines the component href.

**Note:** Standard hyperlink behavior is supported.`,name:"href",required:!1,type:{name:"string"}},target:{defaultValue:{value:"undefined"},description:"Defines the component target.\n\n**Notes:**\n\n- `_self`\n- `_top`\n- `_blank`\n- `_parent`\n- `_search`\n\n**This property must only be used when the `href` property is set.**",name:"target",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{p.displayName="ShellBarBranding",p.__docgenInfo={description:"The `ShellBarBranding` component is intended to be placed inside the branding slot of the\n`ShellBar` component. Its content has higher priority than the `primaryTitle` property\nand the `logo` slot of `ShellBar`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"ShellBarBranding",props:{children:{defaultValue:null,description:`Defines the title for the ui5-shellbar-branding component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},logo:{defaultValue:null,description:"Defines the logo of the `ShellBar`.\nFor example, you can use `ui5-avatar` or `img` elements as logo.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot=\"logo\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).",name:"logo",required:!1,type:{name:"UI5WCSlotsNode"}},onClick:{defaultValue:null,description:`Fired, when the logo is activated.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ShellBarBrandingDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the text alternative of the component.
If not provided a default text alternative will be set, if present.`,name:"accessibleName",required:!1,type:{name:"string"}},href:{defaultValue:{value:"undefined"},description:`Defines the component href.

**Note:** Standard hyperlink behavior is supported.`,name:"href",required:!1,type:{name:"string"}},target:{defaultValue:{value:"undefined"},description:"Defines the component target.\n\n**Notes:**\n\n- `_self`\n- `_top`\n- `_blank`\n- `_parent`\n- `_search`\n\n**This property must only be used when the `href` property is set.**",name:"target",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const be={title:"Layouts & Floorplans / ShellBar",component:d,argTypes:{children:{control:{disable:!0}},logo:{control:{disable:!0}},menuItems:{control:{disable:!0}},profile:{control:{disable:!0}},searchField:{control:{disable:!0}},startButton:{control:{disable:!0}}},args:{primaryTitle:"Shell Bar",notificationsCount:"10",showNotifications:!0,logo:e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg",alt:"SAP Logo"}),profile:e.jsx(ue,{children:e.jsx("img",{src:X,alt:"person-placeholder"})}),startButton:e.jsx(B,{icon:Q,tooltip:"Menu",accessibleName:"Menu"}),searchField:e.jsx(ee,{showClearIcon:!0,placeholder:"Search Apps, Products"}),children:e.jsx(Y,{text:"Help",icon:Z})},tags:["package:@ui5/webcomponents-fiori"]},h={},m={args:{showProductSwitch:!0,startButton:e.jsxs(e.Fragment,{children:[e.jsx(B,{icon:Q,tooltip:"Menu",accessibleName:"Menu"}),e.jsx(B,{icon:G,tooltip:"Back",accessibleName:"Back"})]}),content:e.jsxs(e.Fragment,{children:[e.jsx(c,{design:"Set2",colorScheme:"7",children:"Trial"}),e.jsx(v,{children:"30 days remaining"}),e.jsx(te,{}),e.jsxs(ne,{gap:"0 5px",alignItems:"Center",children:[e.jsx(me,{}),e.jsx(oe,{children:"Try Beta Version"})]})]})}},u={args:{startButton:e.jsx(B,{icon:G,tooltip:"Back",accessibleName:"Back"})}},g={args:{content:e.jsxs(e.Fragment,{children:[e.jsx(c,{design:"Set2",colorScheme:"7",children:"Trial"}),e.jsx(v,{children:"30 days remaining"})]})}},f={args:{content:e.jsx(c,{design:"Set2",colorScheme:"10",children:"Region EMEA"})},render(n){return e.jsxs(e.Fragment,{children:[e.jsx(d,{...n}),e.jsx(d,{...n,content:e.jsx(c,{design:"Set2",colorScheme:"10",children:"Region APJ"})})]})}},b={args:{content:e.jsxs(e.Fragment,{children:[e.jsx(c,{design:"Set2",colorScheme:"8",children:"Q System"}),e.jsx(v,{children:"Region EMEA"})]})},render(n){return e.jsxs(e.Fragment,{children:[e.jsx(d,{...n}),e.jsx(d,{...n,content:e.jsxs(e.Fragment,{children:[e.jsx(c,{design:"Set2",colorScheme:"8",children:"Q System"}),e.jsx(v,{children:"Region APJ"})]})})]})}},_={name:"with ShellBarBranding",args:{branding:e.jsx(p,{logo:e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg",alt:"SAP Logo"}),href:"https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/layouts-floorplans-shellbar--docs",target:"_blank",onClick:n=>{console.log("ShellBarBranding clicked",n)},children:"ShellBar Branding"})},render(n){return e.jsx(d,{...n})}};var k,N,j;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(j=(N=h.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var C,D,E;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(E=(D=m.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var F,I,P;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    startButton: <Button icon={navBackIcon} tooltip="Back" accessibleName="Back" />
  }
}`,...(P=(I=u.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var A,R,L;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    content: <>
        <Tag design="Set2" colorScheme="7">
          Trial
        </Tag>
        <Text>30 days remaining</Text>
      </>
  }
}`,...(L=(R=g.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var M,V,q;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(q=(V=f.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var U,z,W;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(W=(z=b.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var H,O,J;_.parameters={..._.parameters,docs:{...(H=_.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'with ShellBarBranding',
  args: {
    branding: <ShellBarBranding logo={<img src="https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg" alt="SAP Logo" />} href="https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/layouts-floorplans-shellbar--docs" target="_blank" onClick={e => {
      console.log('ShellBarBranding clicked', e);
    }}>
        ShellBar Branding
      </ShellBarBranding>
  },
  render(args) {
    return <ShellBar {...args} />;
  }
}`,...(J=(O=_.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};const _e=["Default","AllFeatures","EmbeddedBackNavigation","TrialExample","ProductiveInstances","NonProductiveInstances","ShellBarBrandingStory"],Le=Object.freeze(Object.defineProperty({__proto__:null,AllFeatures:m,Default:h,EmbeddedBackNavigation:u,NonProductiveInstances:b,ProductiveInstances:f,ShellBarBrandingStory:_,TrialExample:g,__namedExportsOrder:_e,default:be},Symbol.toStringTag,{value:"Module"}));export{m as A,Le as C,h as D,u as E,b as N,f as P,_ as S,g as T,p as a};
