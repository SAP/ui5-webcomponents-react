import{A as N}from"./DomRefTable.module-2f647dfa.js";import{D as W}from"./DocsHeader-2694af15.js";import{F as T}from"./Footer-841ace11.js";import{a as _,j as o,F as E}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{D as O}from"./DomRefTable-1024bffc.js";import{M as P,C as I,j as R,a as F}from"./index-c1feb39e.js";import{_ as $}from"./iframe-6d4c6485.js";import{r as V,U as X,d as U}from"./UI5Element-4f8793c9.js";import{e as D,l as k,s as j,p as d,c as H,b as K,w as Q}from"./withWebComponent-e4481254.js";import{e as G}from"./MarkedEvents-8627ed01.js";import{s as J}from"./AriaLabelHelper-c82262ef.js";import{R as M}from"./ResizeHandler-1dae7180.js";import{s as m}from"./style-map-77d201d2.js";import{o as b}from"./class-map-5d8e4b2b.js";import{s as Y}from"./parameters-bundle.css-6b4a2ffb.js";import{D as Z}from"./i18n-defaults-2bde2064.js";import{u as A}from"./index-4fb8b842.js";import"./chunk-G4YQS2SV-3f7a76ca.js";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-bf96a71d.js";import"./decline-e7438d7e.js";import"./Icons-ad6f0d24.js";import"./Button-8fbc19ea.js";import"./Keys-3acbae73.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./Device-208919c6.js";import"./utils-ed90fb1b.js";import"./index-b4aa831c.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-a9bee957.js";import"./TableOfContent-ef33c812.js";import"./index-c7831f40.js";import"./WrappingType-b81e595a.js";import"./index-5809ec6e.js";import"./Label-27ec0466.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./Footer.module-c4f3b823.js";import"./index-83f21d71.js";import"./Popover-84c1d886.js";import"./Integer-d9976c13.js";import"./PopupsCommon.css-2f3b9f5d.js";import"./FocusableElements-c64a83a7.js";import"./MediaRange-25b98f31.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"../sb-preview/runtime.mjs";var v;(function(e){e.BelowXL="BelowXL",e.BelowL="BelowL",e.BelowM="BelowM",e.OnMinimumWidth="OnMinimumWidth"})(v||(v={}));const p=v;var g;(function(e){e.End="End",e.Start="Start"})(g||(g={}));const u=g;var C;(function(e){e.AlwaysShow="AlwaysShow",e.ShowAboveL="ShowAboveL",e.ShowAboveM="ShowAboveM",e.ShowAboveS="ShowAboveS",e.NeverShow="NeverShow"})(C||(C={}));const r=C,ee=(e,t,i)=>D`<div class="ui5-dsc-root" style="${m(e.styles.root)}">${e._isSideContentFirst?te(e):ie(e)}</div> `,te=(e,t,i)=>D`<aside role="complementary" aria-label="${k(e.accInfo.label)}" class="${b(e.classes.side)}" style="${m(e.styles.side)}"><slot name="sideContent"></slot></aside><div class="${b(e.classes.main)}" style="${m(e.styles.main)}"><slot></slot></div>`,ie=(e,t,i)=>D`<div class="${b(e.classes.main)}" style="${m(e.styles.main)}"><slot></slot></div><aside role="complementary" aria-label="${k(e.accInfo.label)}" class="${b(e.classes.side)}" style="${m(e.styles.side)}"><slot name="sideContent"></slot></aside>`;V("@ui5/webcomponents-theming","sap_fiori_3",async()=>j);V("@ui5/webcomponents-fiori","sap_fiori_3",async()=>Y);const ne={packageName:"@ui5/webcomponents-fiori",fileName:"themes/DynamicSideContent.css.ts",content:":host{display:block;width:100%;height:100%;position:relative}.ui5-dsc-root{width:100%;height:100%;position:relative;overflow-x:hidden;overflow-y:auto;display:flex}.ui5-dsc-main,.ui5-dsc-side{display:inline;position:relative;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;flex:none}.ui5-dsc-root>aside[class^=ui5-dsc-span],.ui5-dsc-root>div[class^=ui5-dcs-span]{overflow:auto}.ui5-dsc-main.ui5-dsc-span-fixed{width:calc(100% - 21.25rem)}.ui5-dsc-side.ui5-dsc-span-fixed{width:21.25rem}.ui5-dsc-root>.ui5-dsc-span-0{display:none}.ui5-dsc-root>.ui5-dsc-span-3{width:25%}.ui5-dsc-root>.ui5-dsc-span-4{width:33.333%}.ui5-dsc-root>.ui5-dsc-span-6{width:50%}.ui5-dsc-root>.ui5-dsc-span-8{width:66.666%}.ui5-dsc-root>.ui5-dsc-span-9{width:75%}.ui5-dsc-root>.ui5-dsc-span-12{width:100%}"};var l=globalThis&&globalThis.__decorate||function(e,t,i,n){var s=arguments.length,h=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")h=Reflect.decorate(e,t,i,n);else for(var S=e.length-1;S>=0;S--)(f=e[S])&&(h=(s<3?f(h):s>3?f(t,i,h):f(t,i))||h);return s>3&&h&&Object.defineProperty(t,i,h),h},y;const B=720,L=1024,oe=1440,se=960;let a=y=class extends X{constructor(){super(),this._handleResizeBound=this.handleResize.bind(this)}static get styles(){return ne}static get render(){return K}static get template(){return ee}static async onDefine(){y.i18nBundle=await U("@ui5/webcomponents-fiori")}onAfterRendering(){this._resizeContents()}onEnterDOM(){M.register(this,this._handleResizeBound)}onExitDOM(){M.deregister(this,this._handleResizeBound)}toggleContents(){this.breakpoint===this.sizeS&&this.sideContentVisibility!==r.AlwaysShow&&(this._toggled=!this._toggled)}get classes(){const t="ui5-dsc-span",i=this._toggled?this._scSpan:this._mcSpan,n=this._toggled?this._mcSpan:this._scSpan,s={main:{"ui5-dsc-main":!0},side:{"ui5-dsc-side":!0}};return s.main[`${t}-${i}`]=!0,s.side[`${t}-${n}`]=!0,s}get styles(){const t=this.breakpoint===this.sizeS&&this._toggled,i=t?this._scSpan:this._mcSpan,n=t?this._mcSpan:this._scSpan,s=this.breakpoint===this.sizeS&&this.sideContentVisibility!==r.AlwaysShow?"100%":"auto";return{root:{"flex-wrap":this._mcSpan==="12"?"wrap":"nowrap"},main:{height:i===this.span12?s:"100%"},side:{height:n===this.span12?s:"100%"}}}get accInfo(){return{label:y.i18nBundle.getText(Z)}}get sizeS(){return"S"}get sizeM(){return"M"}get sizeL(){return"L"}get sizeXL(){return"XL"}get span0(){return"0"}get span3(){return"3"}get span4(){return"4"}get span6(){return"6"}get span8(){return"8"}get span9(){return"9"}get span12(){return"12"}get spanFixed(){return"fixed"}get containerWidth(){return this.parentElement.clientWidth}get breakpoint(){let t;return this.containerWidth<=B?t=this.sizeS:this.containerWidth>B&&this.containerWidth<=L?t=this.sizeM:this.containerWidth>L&&this.containerWidth<=oe?t=this.sizeL:t=this.sizeXL,t}get _isSideContentFirst(){return this.sideContentPosition===u.Start}handleResize(){this._resizeContents()}_resizeContents(){let t,i,n;switch(this.breakpoint){case this.sizeS:t=this.span12,i=this.span12;break;case this.sizeM:this.sideContentFallDown===p.BelowXL||this.sideContentFallDown===p.BelowL||this.containerWidth<=se&&this.sideContentFallDown===p.OnMinimumWidth?(t=this.span12,i=this.span12):(t=this.equalSplit?this.span6:this.spanFixed,i=this.equalSplit?this.span6:this.spanFixed),n=this.sideContentVisibility===r.ShowAboveS||this.sideContentVisibility===r.AlwaysShow;break;case this.sizeL:this.sideContentFallDown===p.BelowXL?(t=this.span12,i=this.span12):(t=this.equalSplit?this.span6:this.span8,i=this.equalSplit?this.span6:this.span4),n=this.sideContentVisibility===r.ShowAboveS||this.sideContentVisibility===r.ShowAboveM||this.sideContentVisibility===r.AlwaysShow;break;case this.sizeXL:t=this.equalSplit?this.span6:this.span9,i=this.equalSplit?this.span6:this.span3,n=this.sideContentVisibility!==r.NeverShow}if(this.sideContentVisibility===r.AlwaysShow&&(n=!0),this.hideSideContent&&(t=this.hideMainContent?this.span0:this.span12,i=this.span0,n=!1),this.hideMainContent&&(t=this.span0,i=this.hideSideContent?this.span0:this.span12,n=!0),n||(t=this.span12,i=this.span0),this._currentBreakpoint!==this.breakpoint){const s={currentBreakpoint:this.breakpoint,previousBreakpoint:this._currentBreakpoint,mainContentVisible:t!==this.span0,sideContentVisible:i!==this.span0};this.fireEvent("layout-change",s),this._currentBreakpoint=this.breakpoint}this._setSpanSizes(t,i)}_setSpanSizes(t,i){this._mcSpan=t,this._scSpan=i,this.breakpoint!==this.sizeS&&(this._toggled=!1)}};l([d({type:Boolean})],a.prototype,"hideMainContent",void 0);l([d({type:Boolean})],a.prototype,"hideSideContent",void 0);l([d({type:u,defaultValue:u.End})],a.prototype,"sideContentPosition",void 0);l([d({type:r,defaultValue:r.ShowAboveS})],a.prototype,"sideContentVisibility",void 0);l([d({type:p,defaultValue:p.OnMinimumWidth})],a.prototype,"sideContentFallDown",void 0);l([d({type:Boolean})],a.prototype,"equalSplit",void 0);l([d({defaultValue:"0",noAttribute:!0})],a.prototype,"_mcSpan",void 0);l([d({defaultValue:"0",noAttribute:!0})],a.prototype,"_scSpan",void 0);l([d({type:Boolean,noAttribute:!0})],a.prototype,"_toggled",void 0);l([d({noAttribute:!0})],a.prototype,"_currentBreakpoint",void 0);l([J()],a.prototype,"sideContent",void 0);a=y=l([H("ui5-dynamic-side-content"),G("layout-change",{detail:{currentBreakpoint:{type:String},previousBreakpoint:{type:String},mainContentVisible:{type:Boolean},sideContentVisible:{type:Boolean}}})],a);a.define();const ae=a,re=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"})),c=Q("ui5-dynamic-side-content",["sideContentFallDown","sideContentPosition","sideContentVisibility"],["equalSplit","hideMainContent","hideSideContent"],["sideContent"],["layout-change"],()=>$(()=>Promise.resolve().then(()=>re),void 0,import.meta.url));c.displayName="DynamicSideContent";c.defaultProps={sideContentFallDown:p.OnMinimumWidth,sideContentPosition:u.End,sideContentVisibility:r.ShowAboveS};try{c.displayName="DynamicSideContent",c.__docgenInfo={description:`The DynamicSideContent (\`DynamicSideContent\`) is a layout component that allows additional content to be displayed in a way that flexibly adapts to different screen sizes. The side content appears in a container next to or directly below the main content (it doesn't overlay). When the side content is triggered, the main content becomes narrower (if appearing side-by-side). The side content contains a separate scrollbar when appearing next to the main content.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/DynamicSideContent" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"DynamicSideContent",props:{children:{defaultValue:null,description:"Defines the main content.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},sideContent:{defaultValue:null,description:`Defines the side content.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="sideContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).`,name:"sideContent",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onLayoutChange:{defaultValue:null,description:"Fires when the current breakpoint has been changed.",name:"onLayoutChange",required:!1,type:{name:"(event: Ui5CustomEvent<DynamicSideContentDomRef, { currentBreakpoint: string; previousBreakpoint: string; mainContentVisible: boolean; sideContentVisible: boolean; }>) => void"}},equalSplit:{defaultValue:null,description:"Defines whether the component is in equal split mode. In this mode, the side and the main content take 50:50 percent of the container on all screen sizes except for phone, where the main and side contents are switching visibility using the toggle method.",name:"equalSplit",required:!1,type:{name:"boolean"}},hideMainContent:{defaultValue:null,description:"Defines the visibility of the main content.",name:"hideMainContent",required:!1,type:{name:"boolean"}},hideSideContent:{defaultValue:null,description:"Defines the visibility of the side content.",name:"hideSideContent",required:!1,type:{name:"boolean"}},sideContentFallDown:{defaultValue:{value:"SideContentFallDown.OnMinimumWidth"},description:"Defines on which breakpoints the side content falls down below the main content.\n\n**The available values are:**\n\n*   `BelowXL`\n*   `BelowL`\n*   `BelowM`\n*   `OnMinimumWidth`",name:"sideContentFallDown",required:!1,type:{name:"enum",value:[{value:'"BelowXL"'},{value:'"BelowL"'},{value:'"BelowM"'},{value:'"OnMinimumWidth"'},{value:'"BelowXL"'},{value:'"BelowL"'},{value:'"BelowM"'},{value:'"OnMinimumWidth"'}]}},sideContentPosition:{defaultValue:{value:"SideContentPosition.End"},description:`Defines whether the side content is positioned before the main content (left side in LTR mode), or after the the main content (right side in LTR mode).

**The available values are:**

*   \`Start\`
*   \`End\``,name:"sideContentPosition",required:!1,type:{name:"enum",value:[{value:'"Start"'},{value:'"End"'},{value:'"End"'},{value:'"Start"'}]}},sideContentVisibility:{defaultValue:{value:"SideContentVisibility.ShowAboveS"},description:"Defines on which breakpoints the side content is visible.\n\n**The available values are:**\n\n*   `AlwaysShow`\n*   `ShowAboveL`\n*   `ShowAboveM`\n*   `ShowAboveS`\n*   `NeverShow`",name:"sideContentVisibility",required:!1,type:{name:"enum",value:[{value:'"AlwaysShow"'},{value:'"ShowAboveL"'},{value:'"ShowAboveM"'},{value:'"ShowAboveS"'},{value:'"NeverShow"'},{value:'"AlwaysShow"'},{value:'"ShowAboveL"'},{value:'"ShowAboveM"'},{value:'"ShowAboveS"'},{value:'"NeverShow"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const le=`## Usage

_When to use?_ Use this component if you want to display relevant information that is not critical for users to complete a task. Users should have access to all the key functions and critical information in the app even if they do not see the side content. This is important because on smaller screen sizes it may be difficult to display the side content in a way that is easily accessible for the user. _When not to use?_ Don't use it if you want to display navigation or critical information that prevents users from completing a task when they have no access to the side content.

## Responsive Behavior

Screen width > 1440px

*   Main vs. side content ratio is 75 vs. 25 percent (with a minimum of 320px each).
*   If the application defines a trigger, the side content can be hidden.

Screen width <= 1440px and > 1024px

*   Main vs. side content ratio is 66.666 vs. 33.333 percent (with a minimum of 320px each). If the side content width falls below 320 px, it automatically slides under the main content, unless the app development team specifies that it should disappear.

Screen width <= 1024px and > 720px

*   The side content ratio is fixed to 340px, and the main content takes the rest of the width. Only if the \`sideContentFallDown\` is set to \`OnMinimumWidth\` and screen width is <= 960px and > 720px the side content falls below the main content.

Screen width <= 720px (for example on a mobile device)

*   In this case, the side content automatically disappears from the screen (unless specified to stay under the content by setting of \`sideContentVisibility\` property to \`AlwaysShow\`) and can be triggered from a pre-set trigger (specified within the app). When the side content is triggered, it replaces the main content. We recommend that you always place the trigger for the side content in the same location, such as in the app footer.

A special case allows switching the comparison mode between the main and side content. In this case, the screen is split into 50:50 percent for main vs. side content. The responsive behavior of the equal split is the same as in the standard view - the side content disappears on screen widths of less than 720 px and can only be viewed by triggering it.`,de=[{name:"toggleContents",visibility:"public",description:"Toggles visibility of main and side contents on S screen size (mobile device)."}],x=_("div",{children:[o("h1",{children:"Side Content"}),o("p",{children:"Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a."})]}),q=_("div",{children:[o("h1",{children:"Main Content"}),o("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque."})]});function pe(e={}){const{wrapper:t}=Object.assign({},A(),e.components);return t?o(t,{...e,children:o(i,{})}):i();function i(){const n=Object.assign({h2:"h2"},A(),e.components);return _(E,{children:[o(P,{title:"Layouts & Floorplans / DynamicSideContent",component:c,argTypes:{children:{control:{disable:!0}},sideContent:{control:{disable:!0}}},args:{sideContentFallDown:p.OnMinimumWidth,sideContentPosition:u.End,sideContentVisibility:r.ShowAboveS}}),`
`,o(W,{since:"0.21.0"}),`
`,o("br",{}),`
`,o(n.h2,{children:"Example"}),`
`,o(I,{children:o(R,{name:"Default",children:s=>o(c,{...s,sideContent:x,children:q})})}),`
`,o(n.h2,{children:"Properties"}),`
`,o(N,{story:"Default"}),`
`,o(F,{children:le}),`
`,o(O,{rows:de}),`
`,o(T,{})]})}}const z=e=>o(c,{...e,sideContent:x,children:q});z.storyName="Default";z.parameters={storySource:{source:`args => {
  return <DynamicSideContent {...args} sideContent={SideContent}>
          {MainContent}
        </DynamicSideContent>;
}`}};const w={title:"Layouts & Floorplans / DynamicSideContent",component:c,args:{sideContentFallDown:p.OnMinimumWidth,sideContentPosition:u.End,sideContentVisibility:r.ShowAboveS},argTypes:{children:{control:{disable:!0}},sideContent:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};w.parameters=w.parameters||{};w.parameters.docs={...w.parameters.docs||{},page:pe};const wt=["defaultStory"];export{wt as __namedExportsOrder,w as default,z as defaultStory};
//# sourceMappingURL=DynamicSideContent.stories-0c6ead5a.js.map
