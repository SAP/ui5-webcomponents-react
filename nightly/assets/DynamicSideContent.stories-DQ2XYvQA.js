import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{X as n,Y as r}from"./CustomElementsScopeUtils-G6VaTXHT.js";import{a as i,c as a,d as o,f as s,i as c,l as ee,m as l,n as te,o as ne,p as u,r as d,s as re,t as f,u as p}from"./jsx-runtime-NHZLEOw0.js";import{n as ie,t as ae}from"./withWebComponent-CQvqGaAL.js";import{t as oe}from"./jsx-runtime-BdxMnOeJ.js";import{n as m,t as h}from"./event-strict-C4u0wMzB.js";import{n as g,t as _}from"./i18n-BNTZIxbt.js";import{n as v,t as se}from"./slot-strict-BSUUcNBc.js";import{n as y,t as b}from"./query-DgyfBxue.js";import{Vr as ce,i as le,r as x}from"./i18n-defaults-Yid-Aku_.js";import{n as S,t as C}from"./parameters-bundle.css-sD0-XBn7.js";var w,T;function E(){return(E=e((()=>{(function(e){e.End=`End`,e.Start=`Start`})(w||={}),T=w})))()}var D,O;function k(){return(k=e((()=>{(function(e){e.AlwaysShow=`AlwaysShow`,e.ShowAboveL=`ShowAboveL`,e.ShowAboveM=`ShowAboveM`,e.ShowAboveS=`ShowAboveS`,e.NeverShow=`NeverShow`})(D||={}),O=D})))()}var A,j;function M(){return(M=e((()=>{(function(e){e.BelowXL=`BelowXL`,e.BelowL=`BelowL`,e.BelowM=`BelowM`,e.OnMinimumWidth=`OnMinimumWidth`})(A||={}),j=A})))()}function N(){return d(`div`,{class:this.classes.root,style:this.styles.root,children:this._isSideContentFirst?c(f,{children:[F.call(this),P.call(this)]}):c(f,{children:[P.call(this),F.call(this)]})})}function P(){return d(`div`,{role:this.accInfo.mainContent?.role,"aria-label":this.accInfo.mainContent?.ariaLabel,class:this.classes.main,style:this.styles.main,children:d(`slot`,{})})}function F(){return d(`aside`,{role:this.accInfo.sideContent?.role,"aria-label":this.accInfo.sideContent?.ariaLabel,class:this.classes.side,style:this.styles.side,children:d(`slot`,{name:`sideContent`})})}function I(){return(I=e((()=>{te()})))()}var L;function R(){return(R=e((()=>{n(),i(),C(),r(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>ne),r(`@ui5/webcomponents-fiori`,`sap_horizon`,async()=>S,`host`),L=`:host{display:block;width:100%;height:100%;position:relative;container-type:inline-size}.ui5-dsc-root{width:100%;height:100%;position:relative;overflow-x:hidden;overflow-y:auto;display:flex;flex-direction:row}.ui5-dsc-main,.ui5-dsc-side{display:block;position:relative;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;flex:none}:host([hide-main-content]) .ui5-dsc-main{display:none}:host([hide-main-content]) .ui5-dsc-side{width:100%;min-width:0}:host([hide-side-content]) .ui5-dsc-side{display:none}:host([hide-side-content]) .ui5-dsc-main{width:100%;min-width:0}:host([hide-main-content][hide-side-content]) .ui5-dsc-root{display:none}:host([equal-split]) .ui5-dsc-main,:host([equal-split]) .ui5-dsc-side{width:50%;min-width:0}@container (min-width: 1441px){.ui5-dsc-main{width:75%;min-width:320px}.ui5-dsc-side{width:25%;min-width:320px}:host([hide-main-content]) .ui5-dsc-side,:host([hide-side-content]) .ui5-dsc-main{width:100%;min-width:0}}@container (min-width: 1025px) and (max-width: 1440px){.ui5-dsc-main{width:66.666%;min-width:320px}.ui5-dsc-side{width:33.333%;min-width:320px}:host([side-content-fall-down="BelowXL"]) .ui5-dsc-root{flex-direction:column}:host([side-content-fall-down="BelowXL"]) .ui5-dsc-main,:host([side-content-fall-down="BelowXL"]) .ui5-dsc-side{width:100%}:host([side-content-visibility="ShowAboveL"]) .ui5-dsc-side{display:none}:host([side-content-visibility="ShowAboveL"]) .ui5-dsc-main{width:100%;min-width:0}:host([hide-main-content]) .ui5-dsc-side,:host([hide-side-content]) .ui5-dsc-main,:host([side-content-fall-down="BelowXL"][hide-main-content]) .ui5-dsc-side,:host([side-content-fall-down="BelowXL"][hide-side-content]) .ui5-dsc-main{width:100%;min-width:0}}@container (min-width: 721px) and (max-width: 1024px){.ui5-dsc-main{width:calc(100% - 340px)}.ui5-dsc-side{width:340px}:host([side-content-fall-down="BelowXL"]) .ui5-dsc-root,:host([side-content-fall-down="BelowL"]) .ui5-dsc-root{flex-direction:column}:host([side-content-fall-down="BelowXL"]) .ui5-dsc-main,:host([side-content-fall-down="BelowXL"]) .ui5-dsc-side,:host([side-content-fall-down="BelowL"]) .ui5-dsc-main,:host([side-content-fall-down="BelowL"]) .ui5-dsc-side{width:100%}:host([side-content-visibility="ShowAboveM"]) .ui5-dsc-side,:host([side-content-visibility="ShowAboveL"]) .ui5-dsc-side{display:none}:host([side-content-visibility="ShowAboveM"]) .ui5-dsc-main,:host([side-content-visibility="ShowAboveL"]) .ui5-dsc-main{width:100%;min-width:0}:host([hide-main-content]) .ui5-dsc-side,:host([hide-side-content]) .ui5-dsc-main{width:100%;min-width:0}}@container (min-width: 721px) and (max-width: 960px){:host([side-content-fall-down="OnMinimumWidth"]) .ui5-dsc-root{flex-direction:column}:host([side-content-fall-down="OnMinimumWidth"]) .ui5-dsc-main,:host([side-content-fall-down="OnMinimumWidth"]) .ui5-dsc-side{width:100%}:host([side-content-fall-down="OnMinimumWidth"]:not([side-content-visibility="NeverShow"]):not([side-content-visibility="ShowAboveM"]):not([side-content-visibility="ShowAboveL"]):not([hide-side-content])) .ui5-dsc-side{display:block}:host([side-content-fall-down="OnMinimumWidth"][side-content-visibility="NeverShow"]) .ui5-dsc-side,:host([side-content-fall-down="OnMinimumWidth"][side-content-visibility="ShowAboveM"]) .ui5-dsc-side,:host([side-content-fall-down="OnMinimumWidth"][side-content-visibility="ShowAboveL"]) .ui5-dsc-side,:host([side-content-fall-down="OnMinimumWidth"][hide-side-content]) .ui5-dsc-side{display:none}:host([side-content-fall-down="OnMinimumWidth"][side-content-visibility="NeverShow"]) .ui5-dsc-main,:host([side-content-fall-down="OnMinimumWidth"][side-content-visibility="ShowAboveM"]) .ui5-dsc-main,:host([side-content-fall-down="OnMinimumWidth"][side-content-visibility="ShowAboveL"]) .ui5-dsc-main,:host([side-content-fall-down="OnMinimumWidth"][hide-side-content]) .ui5-dsc-main{width:100%;min-width:0}:host([side-content-fall-down="OnMinimumWidth"][hide-main-content]) .ui5-dsc-side{width:100%;min-width:0}}@container (max-width: 720px){.ui5-dsc-main,.ui5-dsc-side{width:100%}.ui5-dsc-root{flex-direction:column}:host([equal-split]) .ui5-dsc-main,:host([equal-split]) .ui5-dsc-side{width:100%;min-width:0}:host(:not([side-content-visibility="AlwaysShow"]):not([hide-side-content])) .ui5-dsc-side{display:none}:host(:not([side-content-visibility="AlwaysShow"]):not([hide-main-content])) .ui5-dsc-main{display:block}:host([side-content-visibility="AlwaysShow"]:not([hide-side-content])) .ui5-dsc-side{display:block}:host([side-content-visibility="AlwaysShow"]:not([hide-main-content])) .ui5-dsc-main{display:block}:host([hide-main-content]) .ui5-dsc-side,:host([hide-side-content]) .ui5-dsc-main{width:100%;min-width:0}}:host([side-content-visibility="NeverShow"]:not([hide-main-content])) .ui5-dsc-side{display:none}:host([side-content-visibility="NeverShow"]:not([hide-side-content])) .ui5-dsc-main{display:block;width:100%;min-width:0}@container (min-width: 1441px){:host([side-content-visibility="ShowAboveL"]:not([hide-side-content])) .ui5-dsc-side{display:block}}@container (min-width: 1025px){:host([side-content-visibility="ShowAboveM"]:not([hide-side-content])) .ui5-dsc-side{display:block}}@container (min-width: 721px){:host([side-content-visibility="ShowAboveS"]:not([hide-side-content])) .ui5-dsc-side{display:block}}:host(:not([side-content-visibility="NeverShow"]):not([hide-main-content])) .ui5-dsc-root.ui5-dsc-toggled .ui5-dsc-main{display:none}:host(:not([side-content-visibility="NeverShow"]):not([hide-side-content])) .ui5-dsc-root.ui5-dsc-toggled .ui5-dsc-side{display:block;width:100%;min-width:0}
`})))()}var z,B,V,H,U,W,G;function K(){return(K=e((()=>{l(),o(),h(),ee(),v(),b(),g(),re(),E(),k(),M(),I(),R(),ce(),z=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},V=720,H=1024,U=1440,W=960,G=B=class extends u{constructor(){super(...arguments),this.hideMainContent=!1,this.hideSideContent=!1,this.sideContentPosition=`End`,this.sideContentVisibility=`ShowAboveS`,this.sideContentFallDown=`OnMinimumWidth`,this.equalSplit=!1,this.accessibilityAttributes={},this._toggled=!1,this._isSideContentBelowMainContent=!1}onEnterDOM(){this._resizeObserver=new ResizeObserver(e=>{e.forEach(e=>{let t=e.contentRect.width,n;n=t<=V?`S`:t<=H?`M`:t<=U?`L`:`XL`,this._isSideContentBelowMainContent=this.isSideContentBelowMainContent,n!==this._currentBreakpoint&&(this.fireDecoratorEvent(`layout-change`,{currentBreakpoint:n,previousBreakpoint:this._currentBreakpoint,mainContentVisible:this._getMainContentVisibility(),sideContentVisible:this._getSideContentVisibility()}),this._currentBreakpoint=n)})}),this._resizeObserver.observe(this)}onExitDOM(){this._resizeObserver?.disconnect()}toggleContents(){this._isToggleEnabled&&(this._toggled=!this._toggled)}_getMainContentVisibility(){return this._mainContent?getComputedStyle(this._mainContent).display!==`none`:!1}_getSideContentVisibility(){return this._sideContent?getComputedStyle(this._sideContent).display!==`none`:!1}get classes(){return{main:{"ui5-dsc-main":!0},side:{"ui5-dsc-side":!0},root:{"ui5-dsc-root":!0,"ui5-dsc-toggled":this._toggled}}}get isSideContentBelowMainContent(){if(this.sideContentVisibility===O.NeverShow)return!1;let e=this.sideContentFallDown===j.OnMinimumWidth&&this._currentBreakpoint===this.sizeM&&this.containerWidth<=W,t=this.sideContentFallDown===j.BelowM&&(this._currentBreakpoint===this.sizeM||this._currentBreakpoint===this.sizeS),n=this.sideContentFallDown===j.BelowL&&(this._currentBreakpoint===this.sizeM||this._currentBreakpoint===this.sizeS),r=this.sideContentFallDown===j.BelowXL&&(this._currentBreakpoint===this.sizeL||this._currentBreakpoint===this.sizeM||this._currentBreakpoint===this.sizeS)&&this._currentBreakpoint!==this.sizeXL,i=this.sideContentVisibility===O.AlwaysShow&&(this._currentBreakpoint===this.sizeS||this._currentBreakpoint===this.sizeM&&this.containerWidth<=W);return e||t||n||r||i}get styles(){return this._isSideContentBelowMainContent=this.isSideContentBelowMainContent,{root:{"flex-wrap":`nowrap`},main:{height:this._isSideContentBelowMainContent?`auto`:`100%`},side:{height:this._isSideContentBelowMainContent?`auto`:`100%`}}}get accInfo(){let e=this.accessibilityAttributes.mainContent||{},t=this.accessibilityAttributes.sideContent||{},n=`role`in e,r=`role`in t;return{mainContent:{ariaLabel:e.ariaLabel||B.i18nBundle.getText(x),role:n?e.role:`main`},sideContent:{ariaLabel:t.ariaLabel||B.i18nBundle.getText(le),role:r?t.role:`complementary`}}}get sizeS(){return`S`}get sizeM(){return`M`}get sizeL(){return`L`}get sizeXL(){return`XL`}get containerWidth(){return this.clientWidth}get breakpoint(){let e=this.containerWidth;return e<=V?this.sizeS:e<=H?this.sizeM:e<=U?this.sizeL:this.sizeXL}get _isSideContentFirst(){return this.sideContentPosition===T.Start}get _isToggleEnabled(){if(this.sideContentVisibility===O.NeverShow||this.hideMainContent||this.hideSideContent)return!1;let e=this.breakpoint;return e===this.sizeS?this.sideContentVisibility!==O.AlwaysShow:{[this.sizeM]:[O.ShowAboveM,O.ShowAboveL],[this.sizeL]:[O.ShowAboveL]}[e]?.includes(this.sideContentVisibility)??!1}},z([p({type:Boolean})],G.prototype,`hideMainContent`,void 0),z([p({type:Boolean})],G.prototype,`hideSideContent`,void 0),z([p()],G.prototype,`sideContentPosition`,void 0),z([p()],G.prototype,`sideContentVisibility`,void 0),z([p()],G.prototype,`sideContentFallDown`,void 0),z([p({type:Boolean})],G.prototype,`equalSplit`,void 0),z([p({type:Object})],G.prototype,`accessibilityAttributes`,void 0),z([p({type:Boolean,noAttribute:!0})],G.prototype,`_toggled`,void 0),z([p({noAttribute:!0})],G.prototype,`_currentBreakpoint`,void 0),z([p({type:Boolean,noAttribute:!0})],G.prototype,`_isSideContentBelowMainContent`,void 0),z([se()],G.prototype,`sideContent`,void 0),z([y(`.ui5-dsc-main`)],G.prototype,`_mainContent`,void 0),z([y(`.ui5-dsc-side`)],G.prototype,`_sideContent`,void 0),z([_(`@ui5/webcomponents-fiori`)],G,`i18nBundle`,void 0),G=B=z([s({tag:`ui5-dynamic-side-content`,renderer:a,styles:[L],template:N}),m(`layout-change`,{bubbles:!0})],G),G.define()})))()}var q;function J(){return(J=e((()=>{K(),ae(),q=ie(`ui5-dynamic-side-content`,[`accessibilityAttributes`,`sideContentFallDown`,`sideContentPosition`,`sideContentVisibility`],[`equalSplit`,`hideMainContent`,`hideSideContent`],[`sideContent`],[`layout-change`]),q.displayName=`DynamicSideContent`;try{q.displayName=`DynamicSideContent`,q.__docgenInfo={description:`The DynamicSideContent (\`DynamicSideContent\`) is a layout component that allows additional content
to be displayed in a way that flexibly adapts to different screen sizes. The side
content appears in a container next to or directly below the main content
(it doesn't overlay). When the side content is triggered, the main content becomes
narrower (if appearing side-by-side). The side content contains a separate scrollbar
when appearing next to the main content.

### Usage

*When to use?*

Use this component if you want to display relevant information that is not critical
for users to complete a task. Users should have access to all the key functions and
critical information in the app even if they do not see the side content. This is
important because on smaller screen sizes it may be difficult to display the side
content in a way that is easily accessible for the user.

*When not to use?*

Don't use it if you want to display navigation or critical information that prevents
users from completing a task when they have no access to the side content.

### Responsive Behavior

Screen width \\> 1440px

- Main vs. side content ratio is 75 vs. 25 percent (with a minimum of 320px
each).
- If the application defines a trigger, the side content can be hidden.

Screen width \\<\\= 1440px and \\> 1024px

- Main vs. side content ratio is 66.666 vs. 33.333 percent (with a minimum of
320px each). If the side content width falls below 320 px, it automatically slides
under the main content, unless the app development team specifies that it should
disappear.

Screen width \\<\\= 1024px and \\> 720px

- The side content ratio is fixed to 340px, and the main content takes the rest
of the width. Only if the \`sideContentFallDown\` is set to \`OnMinimumWidth\`
and screen width is \\<\\= 960px and \\> 720px the side content falls below the main content.

Screen width \\<\\= 720px (for example on a mobile device)

- In this case, the side content automatically disappears from the screen (unless
specified to stay under the content by setting of \`sideContentVisibility\`
property to \`AlwaysShow\`) and can be triggered from a pre-set trigger
(specified within the app). When the side content is triggered, it replaces the main
content. We recommend that you always place the trigger for the side content in the
same location, such as in the app footer.

A special case allows switching the comparison mode between the main and side content.
In this case, the screen is split into 50:50 percent for main vs. side content. The
responsive behavior of the equal split is the same as in the standard view - the
side content disappears on screen widths of less than 720 px and can only be
viewed by triggering it.



__Note:__ This is a UI5 Web Component! [DynamicSideContent UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/DynamicSideContent) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`DynamicSideContent`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/DynamicSideContent/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicSideContent/index.d.ts`,name:`DynamicSideContentPropTypes`}],description:`Defines the main content.

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicSideContent/index.d.ts`,name:`DynamicSideContentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},sideContent:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicSideContent/index.d.ts`,name:`DynamicSideContentPropTypes`}],description:`Defines the side content.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="sideContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`sideContent`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicSideContent/index.d.ts`,name:`DynamicSideContentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onLayoutChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicSideContent/index.d.ts`,name:`DynamicSideContentPropTypes`}],description:`Fires when the current breakpoint has been changed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onLayoutChange`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicSideContent/index.d.ts`,name:`DynamicSideContentPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<DynamicSideContentDomRef, DynamicSideContentLayoutChangeEventDetail>) => void`}},accessibilityAttributes:{defaultValue:{value:`{}`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicSideContent/index.d.ts`,name:`DynamicSideContentAttributes`}],description:`Defines additional accessibility attributes on different areas of the component.

The accessibilityAttributes object has the following fields:

- **mainContent**:
  - **ariaLabel**: defines the aria-label of the main content area. Accepts any string.
  - **role**: defines the role of the main content area. When not set, defaults to \`"main"\`. Set to \`undefined\` to remove the role attribute.

- **sideContent**:
  - **ariaLabel**: defines the aria-label of the side content area. Accepts any string.
  - **role**: defines the role of the side content area. When not set, defaults to \`"complementary"\`. Set to \`undefined\` to remove the role attribute.

**Note:** Available since [v2.6.0](https://github.com/UI5/webcomponents/releases/tag/v2.6.0) of **@ui5/webcomponents-fiori**.`,name:`accessibilityAttributes`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicSideContent/index.d.ts`,name:`DynamicSideContentAttributes`},required:!1,tags:{default:`{}`},type:{name:`DynamicSideContentAccessibilityAttributes`}},equalSplit:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicSideContent/index.d.ts`,name:`DynamicSideContentAttributes`}],description:`Defines whether the component is in equal split mode. In this mode, the side and
the main content take 50:50 percent of the container on all screen sizes
except for phone, where the main and side contents are switching visibility
using the toggle method.`,name:`equalSplit`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicSideContent/index.d.ts`,name:`DynamicSideContentAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},hideMainContent:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicSideContent/index.d.ts`,name:`DynamicSideContentAttributes`}],description:`Defines the visibility of the main content.`,name:`hideMainContent`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicSideContent/index.d.ts`,name:`DynamicSideContentAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},hideSideContent:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicSideContent/index.d.ts`,name:`DynamicSideContentAttributes`}],description:`Defines the visibility of the side content.`,name:`hideSideContent`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicSideContent/index.d.ts`,name:`DynamicSideContentAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},sideContentFallDown:{defaultValue:{value:`"OnMinimumWidth"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicSideContent/index.d.ts`,name:`DynamicSideContentAttributes`}],description:`Defines on which breakpoints the side content falls down below the main content.`,name:`sideContentFallDown`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicSideContent/index.d.ts`,name:`DynamicSideContentAttributes`},required:!1,tags:{default:`"OnMinimumWidth"`},type:{name:`enum`,raw:`SideContentFallDown | "BelowXL" | "BelowL" | "BelowM" | "OnMinimumWidth"`,value:[{value:`"BelowXL"`,description:`Side content falls down on breakpoints below XL`,fullComment:`Side content falls down on breakpoints below XL
@public`,tags:{public:``}},{value:`"BelowL"`,description:`Side content falls down on breakpoints below L`,fullComment:`Side content falls down on breakpoints below L
@public`,tags:{public:``}},{value:`"BelowM"`,description:`Side content falls down on breakpoints below M`,fullComment:`Side content falls down on breakpoints below M
@public`,tags:{public:``}},{value:`"OnMinimumWidth"`,description:`Side content falls down on breakpoint M and the minimum width for the side content`,fullComment:`Side content falls down on breakpoint M and the minimum width for the side content
@public`,tags:{public:``}},{value:`"BelowXL"`},{value:`"BelowL"`},{value:`"BelowM"`},{value:`"OnMinimumWidth"`}]}},sideContentPosition:{defaultValue:{value:`"End"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicSideContent/index.d.ts`,name:`DynamicSideContentAttributes`}],description:`Defines whether the side content is positioned before the main content (left side
in LTR mode), or after the the main content (right side in LTR mode).`,name:`sideContentPosition`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicSideContent/index.d.ts`,name:`DynamicSideContentAttributes`},required:!1,tags:{default:`"End"`},type:{name:`enum`,raw:`"Start" | "End" | SideContentPosition`,value:[{value:`"Start"`},{value:`"End"`},{value:`"End"`,description:`The side content is on the right side of the main container
in left-to-right mode and on the left side in right-to-left mode.`,fullComment:`The side content is on the right side of the main container
in left-to-right mode and on the left side in right-to-left mode.
@public`,tags:{public:``}},{value:`"Start"`,description:`The side content is on the left side of the main container
in left-to-right mode and on the right side in right-to-left mode.`,fullComment:`The side content is on the left side of the main container
in left-to-right mode and on the right side in right-to-left mode.
@public`,tags:{public:``}}]}},sideContentVisibility:{defaultValue:{value:`"ShowAboveS"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicSideContent/index.d.ts`,name:`DynamicSideContentAttributes`}],description:`Defines on which breakpoints the side content is visible.`,name:`sideContentVisibility`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/DynamicSideContent/index.d.ts`,name:`DynamicSideContentAttributes`},required:!1,tags:{default:`"ShowAboveS"`},type:{name:`enum`,raw:`SideContentVisibility | "AlwaysShow" | "ShowAboveL" | "ShowAboveM" | "ShowAboveS" | "NeverShow"`,value:[{value:`"AlwaysShow"`,description:`Show the side content on any breakpoint`,fullComment:`Show the side content on any breakpoint
@public`,tags:{public:``}},{value:`"ShowAboveL"`,description:`Show the side content on XL breakpoint`,fullComment:`Show the side content on XL breakpoint
@public`,tags:{public:``}},{value:`"ShowAboveM"`,description:`Show the side content on L and XL breakpoints`,fullComment:`Show the side content on L and XL breakpoints
@public`,tags:{public:``}},{value:`"ShowAboveS"`,description:`Show the side content on M, L and XL breakpoints`,fullComment:`Show the side content on M, L and XL breakpoints
@public`,tags:{public:``}},{value:`"NeverShow"`,description:`Don't show the side content on any breakpoints`,fullComment:`Don't show the side content on any breakpoints
@public`,tags:{public:``}},{value:`"AlwaysShow"`},{value:`"ShowAboveL"`},{value:`"ShowAboveM"`},{value:`"ShowAboveS"`},{value:`"NeverShow"`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[1.1.0](https://github.com/UI5/webcomponents/releases/tag/v1.1.0) of __@ui5/webcomponents-fiori__.`}}}catch{}})))()}var ue=t({Default:()=>Z,__namedExportsOrder:()=>Q,default:()=>X}),Y,X,Z,Q;function $(){return($=e((()=>{M(),E(),k(),J(),Y=oe(),X={title:`Layouts & Floorplans / DynamicSideContent`,component:q,argTypes:{children:{control:{disable:!0}},sideContent:{control:{disable:!0}}},args:{sideContentFallDown:j.OnMinimumWidth,sideContentPosition:T.End,sideContentVisibility:O.ShowAboveS},tags:[`package:@ui5/webcomponents-fiori`]},Z={render(e){return(0,Y.jsxs)(q,{...e,sideContent:(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(`h1`,{children:`Side Content`}),(0,Y.jsx)(`p`,{children:`Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.`})]}),children:[(0,Y.jsx)(`h1`,{children:`Main Content`}),(0,Y.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.`})]})}},Q=[`Default`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <DynamicSideContent {...args} sideContent={<>
            <h1>Side Content</h1>
            <p>
              Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis
              nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est.
              Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie
              luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend
              tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper
              lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat
              dapibus dui, at bibendum mauris porta a.
            </p>
          </>}>
        <h1>Main Content</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper
          sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse
          lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id
          ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod
          aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend
          neque.
        </p>
      </DynamicSideContent>;
  }
}`,...Z.parameters?.docs?.source}}}})))()}export{ue as n,$ as r,Z as t};