import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{I as t,M as n,X as r,Y as i}from"./CustomElementsScopeUtils-G6VaTXHT.js";import{a,c as o,d as s,f as c,i as l,l as u,m as d,n as f,o as p,p as m,r as h,s as g,u as _}from"./jsx-runtime-NHZLEOw0.js";import{n as v,t as y}from"./withWebComponent-DDACWNN1.js";import{n as b,t as x}from"./slot-strict-BSUUcNBc.js";import{n as S,t as C}from"./parameters-bundle.css-sD0-XBn7.js";import{c as w,s as T}from"./SideNavigationSubItem-DZVKogxA.js";var E,D;function O(){return(O=e((()=>{(function(e){e.Auto=`Auto`,e.Collapsed=`Collapsed`,e.Expanded=`Expanded`})(E||={}),D=E})))()}function k(){return l(`div`,{class:`ui5-nl-root`,children:[h(`header`,{class:`ui5-nl-header`,children:h(`slot`,{name:`header`})}),l(`section`,{class:`ui5-nl-section`,children:[h(`aside`,{class:`ui5-nl-aside`,children:h(`slot`,{name:`sideContent`})}),h(`div`,{class:`ui5-nl-content`,children:h(`slot`,{})})]})]})}function A(){return(A=e((()=>{f()})))()}var j;function M(){return(M=e((()=>{r(),a(),C(),i(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>p),i(`@ui5/webcomponents-fiori`,`sap_horizon`,async()=>S,`host`),j=`:host(:not([hidden])){position:absolute;inset:0;display:block;background:var(--sapBackgroundColor);box-sizing:border-box;overflow:hidden}.ui5-nl-root{width:100%;height:100%;display:flex;flex-direction:column;box-sizing:border-box}.ui5-nl-header{z-index:3}.ui5-nl-section{display:flex;flex:1;min-height:0;position:relative}.ui5-nl-aside{transition:transform .3s;z-index:2}.ui5-nl-content{flex:1;min-width:0;overflow:auto}@media (width < 600px){:host .ui5-nl-aside{position:absolute;top:0;left:0;bottom:0;width:100%}:host ::slotted([ui5-side-navigation][slot="sideContent"]){width:100%;box-shadow:none}:host([side-collapsed]) .ui5-nl-aside{transform:translate(-100%)}:host([side-collapsed]) :dir(rtl) .ui5-nl-aside{transform:translate(100%)}}:host([is-phone]) .ui5-nl-aside{position:absolute;top:0;left:0;bottom:0;width:100%}:host([is-phone]) ::slotted([ui5-side-navigation][slot="sideContent"]){width:100%;box-shadow:none}:host([side-collapsed][is-phone]) .ui5-nl-aside{transform:translate(-100%)}:host([side-collapsed][is-phone]) :dir(rtl) .ui5-nl-aside{transform:translate(100%)}:host([has-side-navigation]) ::slotted([ui5-shellbar][slot="header"]){padding-inline:.875rem 1rem}
`})))()}var N,P,F;function I(){return(I=e((()=>{d(),s(),u(),b(),g(),t(),O(),T(),A(),M(),N=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},P=600,F=class extends m{constructor(){super(...arguments),this.mode=`Auto`,this.sideCollapsed=this._isSmallScreen(),this.hasSideNavigation=!1,this.isPhone=n(),this._itemClickHandler=this._handleItemClick.bind(this),this._sideNavigationItemClicked=!1}isSideCollapsed(){return this.calcSideCollapsed(),this.sideCollapsed}onBeforeRendering(){this._sideNavigationItemClicked||this.calcSideCollapsed();let e=this.sideContent[0];this.hasSideNavigation=!!e,e&&!this._sideNavigationItemClicked&&(e.collapsed=this.isSideCollapsed())}onAfterRendering(){this._sideNavigationItemClicked=!1,this._detachSideNavigationListeners(),this._attachSideNavigationListeners()}onExitDOM(){this._detachSideNavigationListeners()}_isSideNavigation(e){return w(e)}_attachSideNavigationListeners(){let e=this.sideContent[0];this._isSideNavigation(e)&&e.addEventListener(`ui5-item-click`,this._itemClickHandler)}_detachSideNavigationListeners(){let e=this.sideContent[0];this._isSideNavigation(e)&&e.removeEventListener(`ui5-item-click`,this._itemClickHandler)}_handleItemClick(){this._isSmallScreen()&&(this._sideNavigationItemClicked=!0,this._collapseSideNavigation())}_isSmallScreen(){return n()||window.innerWidth<P}_collapseSideNavigation(){let e=this.sideContent[0];this._isSideNavigation(e)&&(e.collapsed=!0,this.sideCollapsed=!0,this.mode=D.Collapsed)}calcSideCollapsed(){this.sideCollapsed=this.mode===D.Auto?this._isSmallScreen():this.mode===D.Collapsed}},N([_()],F.prototype,`mode`,void 0),N([_({type:Boolean})],F.prototype,`sideCollapsed`,void 0),N([_({type:Boolean})],F.prototype,`hasSideNavigation`,void 0),N([_({type:Boolean})],F.prototype,`isPhone`,void 0),N([x()],F.prototype,`header`,void 0),N([x()],F.prototype,`sideContent`,void 0),N([x({type:HTMLElement,default:!0})],F.prototype,`content`,void 0),F=N([c({tag:`ui5-navigation-layout`,languageAware:!0,renderer:o,styles:[j],template:k})],F),F.define()})))()}var L;function R(){return(R=e((()=>{I(),y(),L=v(`ui5-navigation-layout`,[`mode`],[],[`header`,`sideContent`],[]),L.displayName=`NavigationLayout`;try{L.displayName=`NavigationLayout`,L.__docgenInfo={description:`The \`NavigationLayout\` is a container component that can be used to
create a layout with a header, a side navigation and a content area.

### Usage

Use the \`NavigationLayout\` to create whole screen of an application with vertical navigation.

### Responsive Behavior

On larger screens with a width of 600px or more, excluding mobile phone devices, the side navigation is visible
by default and can be expanded or collapsed using the \`mode\` property.
On mobile phone devices and screens with a width of 599px or less, the side navigation is hidden by
default and can be displayed using the \`mode\` property.



__Note:__ This is a UI5 Web Component! [NavigationLayout UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/NavigationLayout) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`NavigationLayout`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/NavigationLayout/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/NavigationLayout/index.d.ts`,name:`NavigationLayoutPropTypes`}],description:`Defines the content.

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/NavigationLayout/index.d.ts`,name:`NavigationLayoutPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},header:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/NavigationLayout/index.d.ts`,name:`NavigationLayoutPropTypes`}],description:`Defines the header.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`header`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/NavigationLayout/index.d.ts`,name:`NavigationLayoutPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},sideContent:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/NavigationLayout/index.d.ts`,name:`NavigationLayoutPropTypes`}],description:`Defines the side content.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="sideContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<SideNavigation>\``,name:`sideContent`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/NavigationLayout/index.d.ts`,name:`NavigationLayoutPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},mode:{defaultValue:{value:`"Auto"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/NavigationLayout/index.d.ts`,name:`NavigationLayoutAttributes`}],description:`Specifies the navigation layout mode.`,name:`mode`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/NavigationLayout/index.d.ts`,name:`NavigationLayoutAttributes`},required:!1,tags:{default:`"Auto"`},type:{name:`enum`,raw:`"Auto" | NavigationLayoutMode | "Collapsed" | "Expanded"`,value:[{value:`"Auto"`},{value:`"Auto"`,description:"Automatically calculates the navigation layout mode based on the screen width.\n`Collapsed` on small screens (screen width of 599px or less) and `Expanded` on larger screens (screen width of 600px or more).",fullComment:"Automatically calculates the navigation layout mode based on the screen width.\n`Collapsed` on small screens (screen width of 599px or less) and `Expanded` on larger screens (screen width of 600px or more).\n@public",tags:{public:``}},{value:`"Collapsed"`,description:`Collapsed side navigation.`,fullComment:`Collapsed side navigation.
@public`,tags:{public:``}},{value:`"Expanded"`,description:`Expanded side navigation.`,fullComment:`Expanded side navigation.
@public`,tags:{public:``}},{value:`"Collapsed"`},{value:`"Expanded"`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.4.0](https://github.com/UI5/webcomponents/releases/tag/v2.4.0) of __@ui5/webcomponents-fiori__.`}}}catch{}})))()}export{O as i,R as n,D as r,L as t};