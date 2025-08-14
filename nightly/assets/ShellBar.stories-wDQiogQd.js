import{l as D,c as y,p as k,d as E,s as x,A as N,m as A,b7 as F,ah as I,b5 as P,ba as T,b9 as R,w as L,j as e,Q as B,J as v,$ as j}from"./iframe-ecJTvqfE.js";import{i as M}from"./Person-Bk5r7PMP.js";import{S as V,s as q,b as U,m as C,a as z}from"./sys-help-Cpt7XV06.js";import{F as W}from"./index-DsPSpYGU.js";import{L as H}from"./index-CvbQPYli.js";import{d as O}from"./parameters-bundle.css-B8Lg4lbk.js";import{S as J}from"./index-DttX0KQ-.js";import{T as i}from"./index-F3eIUiL2.js";import{S as l}from"./index-CHiZeLuF.js";import{A as Q}from"./index-Bnh2IJ03.js";function $(){return D("a",{class:"ui5-shellbar-branding-root",href:this.parsedRef,target:this.target,role:this._role,tabIndex:0,"aria-label":this.accessibleNameText,onClick:this._onclick,onKeyDown:this._onkeydown,onKeyUp:this._onkeyup,children:[y("span",{class:"ui5-shellbar-logo",children:y("slot",{name:"logo"})}),!this._isSBreakPoint&&y("bdi",{class:"ui5-shellbar-title",children:y("slot",{})})]})}k("@ui5/webcomponents-theming","sap_horizon",async()=>E);k("@ui5/webcomponents-fiori","sap_horizon",async()=>O);const G=`:host(:not([hidden])) .ui5-shellbar-branding-root{text-decoration:none}:host(:not([hidden])){display:inline}.ui5-shellbar-branding-root{overflow:hidden;display:flex;align-items:center;padding-block:.25rem;padding-inline:.25rem .5rem;box-sizing:border-box;cursor:pointer;background:var(--sapButton_Lite_Background);border:1px solid var(--sapButton_Lite_BorderColor);color:var(--sapShell_TextColor);margin-inline-start:.125rem;margin-inline-end:.5rem}.ui5-shellbar-branding-root:focus{outline:var(--_ui5-v2-13-2_shellbar_logo_outline);border-radius:var(--_ui5-v2-13-2_shellbar_logo_border_radius)}.ui5-shellbar-branding-root:hover{box-shadow:var(--_ui5-v2-13-2_shellbar_button_box_shadow);border-radius:var(--_ui5-v2-13-2_shellbar_logo_border_radius)}.ui5-shellbar-branding-root:active:focus{background:var(--sapShell_Active_Background);border:1px solid var(--sapButton_Lite_Active_BorderColor);color:var(--sapShell_Active_TextColor)}.ui5-shellbar-title{display:inline-block;font-family:var(--sapFontSemiboldDuplexFamily);margin:0;font-size:var(--_ui5-v2-13-2_shellbar_menu_button_title_font_size);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--sapShell_SubBrand_TextColor);margin-inline-start:.25rem}.ui5-shellbar-logo-area{overflow:hidden;display:flex;align-items:center;padding:.25rem .5rem .25rem .25rem;box-sizing:border-box;cursor:pointer;background:var(--sapButton_Lite_Background);border:1px solid var(--sapButton_Lite_BorderColor);color:var(--sapShell_TextColor);margin-inline-start:.125rem}::slotted([slot="logo"]){max-height:2rem;max-width:3.75rem;pointer-events:none;padding-inline:.25rem}
`;var s=function(t,n,r,b){var _=arguments.length,a=_<3?n:b===null?b=Object.getOwnPropertyDescriptor(n,r):b,S;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,n,r,b);else for(var w=t.length-1;w>=0;w--)(S=t[w])&&(a=(_<3?S(a):_>3?S(n,r,a):S(n,r))||a);return _>3&&a&&Object.defineProperty(n,r,a),a};let o=class extends P{constructor(){super(...arguments),this._isSBreakPoint=!1}get parsedRef(){return this.href&&this.href.length>0?this.href:void 0}get _role(){return this.href&&this.href.length>0?"link":"button"}get accessibleNameText(){return this.accessibleName?this.accessibleName:this.shadowRoot?.querySelector("slot:not([name])")?.assignedNodes({flatten:!0}).find(r=>r.nodeType===Node.TEXT_NODE&&r.textContent?.trim())?.textContent.trim()}_fireClick(){this.fireDecoratorEvent("click")}_onclick(n){n.stopPropagation(),this._fireClick()}_onkeyup(n){T(n)&&this._fireClick()}_onkeydown(n){if(T(n)){n.preventDefault();return}R(n)&&this._fireClick()}};s([x()],o.prototype,"href",void 0);s([x()],o.prototype,"target",void 0);s([x()],o.prototype,"accessibleName",void 0);s([x({type:Boolean})],o.prototype,"_isSBreakPoint",void 0);s([N({type:HTMLElement,default:!0})],o.prototype,"content",void 0);s([N({type:HTMLElement})],o.prototype,"logo",void 0);o=s([A({tag:"ui5-shellbar-branding",languageAware:!0,renderer:I,template:$,styles:G}),F("click",{bubbles:!0})],o);o.define();const c=L("ui5-shellbar-branding",["accessibleName","href","target"],[],["logo"],["click"]);c.displayName="ShellBarBranding";try{c.displayName="ShellBarBranding",c.__docgenInfo={description:"The `ShellBarBranding` component is intended to be placed inside the branding slot of the\n`ShellBar` component. Its content has higher priority than the `primaryTitle` property\nand the `logo` slot of `ShellBar`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"ShellBarBranding",props:{children:{defaultValue:null,description:`Defines the title for the ui5-shellbar-branding component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},logo:{defaultValue:null,description:"Defines the logo of the `ShellBar`.\nFor example, you can use `ui5-avatar` or `img` elements as logo.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot=\"logo\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).",name:"logo",required:!1,type:{name:"UI5WCSlotsNode"}},onClick:{defaultValue:null,description:`Fired, when the logo is activated.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ShellBarBrandingDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the text alternative of the component.
If not provided a default text alternative will be set, if present.`,name:"accessibleName",required:!1,type:{name:"string"}},href:{defaultValue:{value:"undefined"},description:`Defines the component href.

**Note:** Standard hyperlink behavior is supported.`,name:"href",required:!1,type:{name:"string"}},target:{defaultValue:{value:"undefined"},description:"Defines the component target.\n\n**Notes:**\n\n- `_self`\n- `_top`\n- `_blank`\n- `_parent`\n- `_search`\n\n**This property must only be used when the `href` property is set.**",name:"target",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{c.displayName="ShellBarBranding",c.__docgenInfo={description:"The `ShellBarBranding` component is intended to be placed inside the branding slot of the\n`ShellBar` component. Its content has higher priority than the `primaryTitle` property\nand the `logo` slot of `ShellBar`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"ShellBarBranding",props:{children:{defaultValue:null,description:`Defines the title for the ui5-shellbar-branding component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},logo:{defaultValue:null,description:"Defines the logo of the `ShellBar`.\nFor example, you can use `ui5-avatar` or `img` elements as logo.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot=\"logo\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).",name:"logo",required:!1,type:{name:"UI5WCSlotsNode"}},onClick:{defaultValue:null,description:`Fired, when the logo is activated.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ShellBarBrandingDomRef, never>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the text alternative of the component.
If not provided a default text alternative will be set, if present.`,name:"accessibleName",required:!1,type:{name:"string"}},href:{defaultValue:{value:"undefined"},description:`Defines the component href.

**Note:** Standard hyperlink behavior is supported.`,name:"href",required:!1,type:{name:"string"}},target:{defaultValue:{value:"undefined"},description:"Defines the component target.\n\n**Notes:**\n\n- `_self`\n- `_top`\n- `_blank`\n- `_parent`\n- `_search`\n\n**This property must only be used when the `href` property is set.**",name:"target",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const K={title:"Layouts & Floorplans / ShellBar",component:l,argTypes:{children:{control:{disable:!0}},logo:{control:{disable:!0}},menuItems:{control:{disable:!0}},profile:{control:{disable:!0}},searchField:{control:{disable:!0}},startButton:{control:{disable:!0}}},args:{primaryTitle:"Shell Bar",notificationsCount:"10",showNotifications:!0,logo:e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg",alt:"SAP Logo"}),profile:e.jsx(Q,{children:e.jsx("img",{src:M,alt:"person-placeholder"})}),startButton:e.jsx(B,{icon:C,tooltip:"Menu",accessibleName:"Menu"}),searchField:e.jsx(U,{showClearIcon:!0,placeholder:"Search Apps, Products"}),children:e.jsx(V,{text:"Help",icon:q})},tags:["package:@ui5/webcomponents-fiori"]},d={},h={args:{showProductSwitch:!0,startButton:e.jsxs(e.Fragment,{children:[e.jsx(B,{icon:C,tooltip:"Menu",accessibleName:"Menu"}),e.jsx(B,{icon:j,tooltip:"Back",accessibleName:"Back"})]}),content:e.jsxs(e.Fragment,{children:[e.jsx(i,{design:"Set2",colorScheme:"7",children:"Trial"}),e.jsx(v,{children:"30 days remaining"}),e.jsx(z,{}),e.jsxs(W,{gap:"0 5px",alignItems:"Center",children:[e.jsx(J,{}),e.jsx(H,{children:"Try Beta Version"})]})]})}},p={args:{startButton:e.jsx(B,{icon:j,tooltip:"Back",accessibleName:"Back"})}},m={args:{content:e.jsxs(e.Fragment,{children:[e.jsx(i,{design:"Set2",colorScheme:"7",children:"Trial"}),e.jsx(v,{children:"30 days remaining"})]})}},u={args:{content:e.jsx(i,{design:"Set2",colorScheme:"10",children:"Region EMEA"})},render(t){return e.jsxs(e.Fragment,{children:[e.jsx(l,{...t}),e.jsx(l,{...t,content:e.jsx(i,{design:"Set2",colorScheme:"10",children:"Region APJ"})})]})}},g={args:{content:e.jsxs(e.Fragment,{children:[e.jsx(i,{design:"Set2",colorScheme:"8",children:"Q System"}),e.jsx(v,{children:"Region EMEA"})]})},render(t){return e.jsxs(e.Fragment,{children:[e.jsx(l,{...t}),e.jsx(l,{...t,content:e.jsxs(e.Fragment,{children:[e.jsx(i,{design:"Set2",colorScheme:"8",children:"Q System"}),e.jsx(v,{children:"Region APJ"})]})})]})}},f={name:"with ShellBarBranding",args:{branding:e.jsx(c,{logo:e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg",alt:"SAP Logo"}),href:"https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/layouts-floorplans-shellbar--docs",target:"_blank",onClick:t=>{console.log("ShellBarBranding clicked",t)},children:"ShellBar Branding"})},render(t){return e.jsx(l,{...t})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    startButton: <Button icon={navBackIcon} tooltip="Back" accessibleName="Back" />
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    content: <>
        <Tag design="Set2" colorScheme="7">
          Trial
        </Tag>
        <Text>30 days remaining</Text>
      </>
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const X=["Default","AllFeatures","EmbeddedBackNavigation","TrialExample","ProductiveInstances","NonProductiveInstances","ShellBarBrandingStory"],ce=Object.freeze(Object.defineProperty({__proto__:null,AllFeatures:h,Default:d,EmbeddedBackNavigation:p,NonProductiveInstances:g,ProductiveInstances:u,ShellBarBrandingStory:f,TrialExample:m,__namedExportsOrder:X,default:K},Symbol.toStringTag,{value:"Module"}));export{h as A,ce as C,d as D,p as E,g as N,u as P,f as S,m as T,c as a};
