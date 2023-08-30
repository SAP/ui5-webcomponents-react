import{A as k}from"./DomRefTable.module-21db8160.js";import{D as N}from"./DocsHeader-2d4ade96.js";import{F as W}from"./Footer-d1e68864.js";import{j as i}from"./jsx-runtime-d079401a.js";import"./index-f1f2c4b1.js";import{M as T,C as j,e as E,b as O}from"./chunk-S4VUQJ4A-dfb888a9.js";import{D as P}from"./DomRefTable-8f933212.js";import{_ as R}from"./iframe-afa8d2de.js";import{r as B,U as I,l as F}from"./UI5Element-6dcea8dd.js";import{b as _,l as L,s as $,p as d,c as X,f as U,w as H}from"./withWebComponent-7d7e5133.js";import{e as K}from"./Icon-b7f7d9e7.js";import{s as Q}from"./slot-76e48863.js";import{R as x}from"./ResizeHandler-e83234a4.js";import{s as m}from"./style-map-132a30d8.js";import{o as w}from"./class-map-0ab40ab9.js";import{s as G}from"./parameters-bundle.css-f9dc8928.js";import{ah as J}from"./i18n-defaults-2dcf78e8.js";import{u as D}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-5341c1e6.js";import"./decline-d1fe7fdd.js";import"./Icons-e937042c.js";import"./i18n-defaults-2d2bf0b6.js";import"./information-a40f0e71.js";import"./Button-6bb9ed58.js";import"./AriaLabelHelper-43a261ec.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-d675a36d.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-5ee8a8c4.js";import"./utils-626dc1bf.js";import"./index-7fd85f1a.js";import"./Integer-f7f172c9.js";import"./index-de2acc16.js";import"./Avatar-faa225d6.js";import"./employee-f0b5ef8f.js";import"./index-6af57c76.js";import"./index-cdceb5d3.js";import"./Link-34530090.js";import"./WrappingType-b81e595a.js";import"./index-fb6e8b5e.js";import"./TableOfContent-08b29fec.js";import"./index-c8d3f413.js";import"./Label-c4db564a.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./index-b42968db.js";import"./index-0fc946a6.js";import"./index-19fdaff1.js";import"./Popover-8ece70a3.js";import"./PopupsCommon.css-2b73575b.js";import"./FocusableElements-ae22402e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./BrowserScrollbar.css-22391551.js";import"./index-d203965f.js";import"./mapValues-e5c6f517.js";import"./_baseForOwn-24231fc1.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-00f63d78.js";import"./_baseUniq-edf521f4.js";import"./index-356e4a49.js";import"../sb-preview/runtime.js";var v;(function(n){n.BelowXL="BelowXL",n.BelowL="BelowL",n.BelowM="BelowM",n.OnMinimumWidth="OnMinimumWidth"})(v||(v={}));const p=v;var g;(function(n){n.End="End",n.Start="Start"})(g||(g={}));const u=g;var C;(function(n){n.AlwaysShow="AlwaysShow",n.ShowAboveL="ShowAboveL",n.ShowAboveM="ShowAboveM",n.ShowAboveS="ShowAboveS",n.NeverShow="NeverShow"})(C||(C={}));const r=C;function Y(n,e,t){return _`<div class="ui5-dsc-root" style="${m(this.styles.root)}">${this._isSideContentFirst?Z.call(this,n,e,t):ee.call(this,n,e,t)}</div> `}function Z(n,e,t){return _`<aside role="complementary" aria-label="${L(this.accInfo.label)}" class="${w(this.classes.side)}" style="${m(this.styles.side)}"><slot name="sideContent"></slot></aside><div class="${w(this.classes.main)}" style="${m(this.styles.main)}"><slot></slot></div>`}function ee(n,e,t){return _`<div class="${w(this.classes.main)}" style="${m(this.styles.main)}"><slot></slot></div><aside role="complementary" aria-label="${L(this.accInfo.label)}" class="${w(this.classes.side)}" style="${m(this.styles.side)}"><slot name="sideContent"></slot></aside>`}B("@ui5/webcomponents-theming","sap_fiori_3",async()=>$);B("@ui5/webcomponents-fiori","sap_fiori_3",async()=>G);const te={packageName:"@ui5/webcomponents-fiori",fileName:"themes/DynamicSideContent.css",content:`:host {
	display: block;
	width: 100%;
	height: 100%;
	position: relative;
}

.ui5-dsc-root {
	width: 100%;
	height: 100%;
	position: relative;
	overflow-x: hidden;
	overflow-y: auto;
	display: flex;
}

.ui5-dsc-main,
.ui5-dsc-side {
	display: inline;
	position: relative;
	overflow-x: hidden;
	overflow-y: auto;
	box-sizing: border-box;
	flex: none;
}

.ui5-dsc-root > div[class^="ui5-dcs-span"],
.ui5-dsc-root > aside[class^="ui5-dsc-span"] {
	overflow: auto;
}

.ui5-dsc-main.ui5-dsc-span-fixed {
	width: calc(100% - 21.25rem);
}

.ui5-dsc-side.ui5-dsc-span-fixed {
	width: 21.25rem;
}

.ui5-dsc-root > .ui5-dsc-span-0 {
	display: none;
}

.ui5-dsc-root > .ui5-dsc-span-3 {
	width: 25%;
}

.ui5-dsc-root > .ui5-dsc-span-4 {
	width: 33.333%;
}

.ui5-dsc-root > .ui5-dsc-span-6 {
	width: 50%;
}

.ui5-dsc-root > .ui5-dsc-span-8 {
	width: 66.666%;
}

.ui5-dsc-root > .ui5-dsc-span-9 {
	width: 75%;
}

.ui5-dsc-root > .ui5-dsc-span-12 {
	width: 100%;
}`};var l=globalThis&&globalThis.__decorate||function(n,e,t,o){var s=arguments.length,h=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")h=Reflect.decorate(n,e,t,o);else for(var S=n.length-1;S>=0;S--)(f=n[S])&&(h=(s<3?f(h):s>3?f(e,t,h):f(e,t))||h);return s>3&&h&&Object.defineProperty(e,t,h),h},y;const M=720,A=1024,ne=1440,ie=960;let a=y=class extends I{constructor(){super(),this._handleResizeBound=this.handleResize.bind(this)}static async onDefine(){y.i18nBundle=await F("@ui5/webcomponents-fiori")}onAfterRendering(){this._resizeContents()}onEnterDOM(){x.register(this,this._handleResizeBound)}onExitDOM(){x.deregister(this,this._handleResizeBound)}toggleContents(){this.breakpoint===this.sizeS&&this.sideContentVisibility!==r.AlwaysShow&&(this._toggled=!this._toggled)}get classes(){const e="ui5-dsc-span",t=this._toggled?this._scSpan:this._mcSpan,o=this._toggled?this._mcSpan:this._scSpan,s={main:{"ui5-dsc-main":!0},side:{"ui5-dsc-side":!0}};return s.main[`${e}-${t}`]=!0,s.side[`${e}-${o}`]=!0,s}get styles(){const e=this.breakpoint===this.sizeS&&this._toggled,t=e?this._scSpan:this._mcSpan,o=e?this._mcSpan:this._scSpan,s=this.breakpoint===this.sizeS&&this.sideContentVisibility!==r.AlwaysShow?"100%":"auto";return{root:{"flex-wrap":this._mcSpan==="12"?"wrap":"nowrap"},main:{height:t===this.span12?s:"100%"},side:{height:o===this.span12?s:"100%"}}}get accInfo(){return{label:y.i18nBundle.getText(J)}}get sizeS(){return"S"}get sizeM(){return"M"}get sizeL(){return"L"}get sizeXL(){return"XL"}get span0(){return"0"}get span3(){return"3"}get span4(){return"4"}get span6(){return"6"}get span8(){return"8"}get span9(){return"9"}get span12(){return"12"}get spanFixed(){return"fixed"}get containerWidth(){return this.parentElement.clientWidth}get breakpoint(){let e;return this.containerWidth<=M?e=this.sizeS:this.containerWidth>M&&this.containerWidth<=A?e=this.sizeM:this.containerWidth>A&&this.containerWidth<=ne?e=this.sizeL:e=this.sizeXL,e}get _isSideContentFirst(){return this.sideContentPosition===u.Start}handleResize(){this._resizeContents()}_resizeContents(){let e,t,o;switch(this.breakpoint){case this.sizeS:e=this.span12,t=this.span12;break;case this.sizeM:this.sideContentFallDown===p.BelowXL||this.sideContentFallDown===p.BelowL||this.containerWidth<=ie&&this.sideContentFallDown===p.OnMinimumWidth?(e=this.span12,t=this.span12):(e=this.equalSplit?this.span6:this.spanFixed,t=this.equalSplit?this.span6:this.spanFixed),o=this.sideContentVisibility===r.ShowAboveS||this.sideContentVisibility===r.AlwaysShow;break;case this.sizeL:this.sideContentFallDown===p.BelowXL?(e=this.span12,t=this.span12):(e=this.equalSplit?this.span6:this.span8,t=this.equalSplit?this.span6:this.span4),o=this.sideContentVisibility===r.ShowAboveS||this.sideContentVisibility===r.ShowAboveM||this.sideContentVisibility===r.AlwaysShow;break;case this.sizeXL:e=this.equalSplit?this.span6:this.span9,t=this.equalSplit?this.span6:this.span3,o=this.sideContentVisibility!==r.NeverShow}if(this.sideContentVisibility===r.AlwaysShow&&(o=!0),this.hideSideContent&&(e=this.hideMainContent?this.span0:this.span12,t=this.span0,o=!1),this.hideMainContent&&(e=this.span0,t=this.hideSideContent?this.span0:this.span12,o=!0),o||(e=this.span12,t=this.span0),this._currentBreakpoint!==this.breakpoint){const s={currentBreakpoint:this.breakpoint,previousBreakpoint:this._currentBreakpoint,mainContentVisible:e!==this.span0,sideContentVisible:t!==this.span0};this.fireEvent("layout-change",s),this._currentBreakpoint=this.breakpoint}this._setSpanSizes(e,t)}_setSpanSizes(e,t){this._mcSpan=e,this._scSpan=t,this.breakpoint!==this.sizeS&&(this._toggled=!1)}};l([d({type:Boolean})],a.prototype,"hideMainContent",void 0);l([d({type:Boolean})],a.prototype,"hideSideContent",void 0);l([d({type:u,defaultValue:u.End})],a.prototype,"sideContentPosition",void 0);l([d({type:r,defaultValue:r.ShowAboveS})],a.prototype,"sideContentVisibility",void 0);l([d({type:p,defaultValue:p.OnMinimumWidth})],a.prototype,"sideContentFallDown",void 0);l([d({type:Boolean})],a.prototype,"equalSplit",void 0);l([d({defaultValue:"0",noAttribute:!0})],a.prototype,"_mcSpan",void 0);l([d({defaultValue:"0",noAttribute:!0})],a.prototype,"_scSpan",void 0);l([d({type:Boolean,noAttribute:!0})],a.prototype,"_toggled",void 0);l([d({noAttribute:!0})],a.prototype,"_currentBreakpoint",void 0);l([Q()],a.prototype,"sideContent",void 0);a=y=l([X({tag:"ui5-dynamic-side-content",renderer:U,styles:te,template:Y}),K("layout-change",{detail:{currentBreakpoint:{type:String},previousBreakpoint:{type:String},mainContentVisible:{type:Boolean},sideContentVisible:{type:Boolean}}})],a);a.define();const oe=a,se=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"})),c=H("ui5-dynamic-side-content",["sideContentFallDown","sideContentPosition","sideContentVisibility"],["equalSplit","hideMainContent","hideSideContent"],["sideContent"],["layout-change"],()=>R(()=>Promise.resolve().then(()=>se),void 0,import.meta.url));c.displayName="DynamicSideContent";c.defaultProps={sideContentFallDown:p.OnMinimumWidth,sideContentPosition:u.End,sideContentVisibility:r.ShowAboveS};try{c.displayName="DynamicSideContent",c.__docgenInfo={description:`The DynamicSideContent (\`DynamicSideContent\`) is a layout component that allows additional content to be displayed in a way that flexibly adapts to different screen sizes. The side content appears in a container next to or directly below the main content (it doesn't overlay). When the side content is triggered, the main content becomes narrower (if appearing side-by-side). The side content contains a separate scrollbar when appearing next to the main content.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-DynamicSideContent)`,displayName:"DynamicSideContent",props:{children:{defaultValue:null,description:"Defines the main content.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},sideContent:{defaultValue:null,description:`Defines the side content.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="sideContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"sideContent",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onLayoutChange:{defaultValue:null,description:"Fires when the current breakpoint has been changed.",name:"onLayoutChange",required:!1,type:{name:"(event: Ui5CustomEvent<DynamicSideContentDomRef, DynamicSideContentLayoutChangeEventDetail>) => void"}},equalSplit:{defaultValue:null,description:"Defines whether the component is in equal split mode. In this mode, the side and the main content take 50:50 percent of the container on all screen sizes except for phone, where the main and side contents are switching visibility using the toggle method.",name:"equalSplit",required:!1,type:{name:"boolean"}},hideMainContent:{defaultValue:null,description:"Defines the visibility of the main content.",name:"hideMainContent",required:!1,type:{name:"boolean"}},hideSideContent:{defaultValue:null,description:"Defines the visibility of the side content.",name:"hideSideContent",required:!1,type:{name:"boolean"}},sideContentFallDown:{defaultValue:{value:"SideContentFallDown.OnMinimumWidth"},description:"Defines on which breakpoints the side content falls down below the main content.\n\n**The available values are:**\n\n*   `BelowXL`\n*   `BelowL`\n*   `BelowM`\n*   `OnMinimumWidth`",name:"sideContentFallDown",required:!1,type:{name:"enum",value:[{value:'"BelowXL"'},{value:'"BelowL"'},{value:'"BelowM"'},{value:'"OnMinimumWidth"'},{value:'"BelowXL"'},{value:'"BelowL"'},{value:'"BelowM"'},{value:'"OnMinimumWidth"'}]}},sideContentPosition:{defaultValue:{value:"SideContentPosition.End"},description:`Defines whether the side content is positioned before the main content (left side in LTR mode), or after the the main content (right side in LTR mode).

**The available values are:**

*   \`Start\`
*   \`End\``,name:"sideContentPosition",required:!1,type:{name:"enum",value:[{value:'"Start"'},{value:'"End"'},{value:'"End"'},{value:'"Start"'}]}},sideContentVisibility:{defaultValue:{value:"SideContentVisibility.ShowAboveS"},description:"Defines on which breakpoints the side content is visible.\n\n**The available values are:**\n\n*   `AlwaysShow`\n*   `ShowAboveL`\n*   `ShowAboveM`\n*   `ShowAboveS`\n*   `NeverShow`",name:"sideContentVisibility",required:!1,type:{name:"enum",value:[{value:'"AlwaysShow"'},{value:'"ShowAboveL"'},{value:'"ShowAboveM"'},{value:'"ShowAboveS"'},{value:'"NeverShow"'},{value:'"AlwaysShow"'},{value:'"ShowAboveL"'},{value:'"ShowAboveM"'},{value:'"ShowAboveS"'},{value:'"NeverShow"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const ae=`## Usage

_When to use?_ Use this component if you want to display relevant information that is not critical for users to complete a task. Users should have access to all the key functions and critical information in the app even if they do not see the side content. This is important because on smaller screen sizes it may be difficult to display the side content in a way that is easily accessible for the user. _When not to use?_ Don't use it if you want to display navigation or critical information that prevents users from completing a task when they have no access to the side content.

## Responsive Behavior

Screen width > 1440px

- Main vs. side content ratio is 75 vs. 25 percent (with a minimum of 320px each).
- If the application defines a trigger, the side content can be hidden.

Screen width <= 1440px and > 1024px

- Main vs. side content ratio is 66.666 vs. 33.333 percent (with a minimum of 320px each). If the side content width falls below 320 px, it automatically slides under the main content, unless the app development team specifies that it should disappear.

Screen width <= 1024px and > 720px

- The side content ratio is fixed to 340px, and the main content takes the rest of the width. Only if the \`sideContentFallDown\` is set to \`OnMinimumWidth\` and screen width is <= 960px and > 720px the side content falls below the main content.

Screen width <= 720px (for example on a mobile device)

- In this case, the side content automatically disappears from the screen (unless specified to stay under the content by setting of \`sideContentVisibility\` property to \`AlwaysShow\`) and can be triggered from a pre-set trigger (specified within the app). When the side content is triggered, it replaces the main content. We recommend that you always place the trigger for the side content in the same location, such as in the app footer.

A special case allows switching the comparison mode between the main and side content. In this case, the screen is split into 50:50 percent for main vs. side content. The responsive behavior of the equal split is the same as in the standard view - the side content disappears on screen widths of less than 720 px and can only be viewed by triggering it.
`,re=[{name:"toggleContents",visibility:"public",description:"Toggles visibility of main and side contents on S screen size (mobile device)."}],V=i.jsxs("div",{children:[i.jsx("h1",{children:"Side Content"}),i.jsx("p",{children:"Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a."})]}),q=i.jsxs("div",{children:[i.jsx("h1",{children:"Main Content"}),i.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque."})]});function le(n={}){const{wrapper:e}=Object.assign({},D(),n.components);return e?i.jsx(e,{...n,children:i.jsx(t,{})}):t();function t(){const o=Object.assign({h2:"h2"},D(),n.components);return i.jsxs(i.Fragment,{children:[i.jsx(T,{title:"Layouts & Floorplans / DynamicSideContent",component:c,argTypes:{children:{control:{disable:!0}},sideContent:{control:{disable:!0}}},args:{sideContentFallDown:p.OnMinimumWidth,sideContentPosition:u.End,sideContentVisibility:r.ShowAboveS}}),`
`,i.jsx(N,{since:"0.21.0"}),`
`,i.jsx("br",{}),`
`,i.jsx(o.h2,{id:"example",children:"Example"}),`
`,i.jsx(j,{children:i.jsx(E,{name:"Default",children:s=>i.jsx(c,{...s,sideContent:V,children:q})})}),`
`,i.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,i.jsx(k,{story:"Default"}),`
`,i.jsx(O,{children:ae}),`
`,i.jsx(P,{rows:re}),`
`,i.jsx(W,{})]})}}const z=n=>i.jsx(c,{...n,sideContent:V,children:q});z.storyName="Default";z.parameters={storySource:{source:`args => {
  return <DynamicSideContent {...args} sideContent={SideContent}>
          {MainContent}
        </DynamicSideContent>;
}`}};const b={title:"Layouts & Floorplans / DynamicSideContent",component:c,args:{sideContentFallDown:p.OnMinimumWidth,sideContentPosition:u.End,sideContentVisibility:r.ShowAboveS},argTypes:{children:{control:{disable:!0}},sideContent:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};b.parameters=b.parameters||{};b.parameters.docs={...b.parameters.docs||{},page:le};const _t=["defaultStory"];export{_t as __namedExportsOrder,b as default,z as defaultStory};
//# sourceMappingURL=DynamicSideContent.stories-26807e65.js.map
