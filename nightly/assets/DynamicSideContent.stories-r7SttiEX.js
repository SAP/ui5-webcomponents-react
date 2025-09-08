import{c as p,l as v,ag as g,p as L,d as B,s as r,A as q,ar as N,m as k,b7 as W,ai as O,b5 as V,w as T,j as c}from"./iframe-BxIaMIJ2.js";import{o as D}from"./query-CzSBusdE.js";import{d as z}from"./parameters-bundle.css-MDhRcvbE.js";import{aq as E,ar as I}from"./i18n-defaults-BS8OTJAB.js";var b;(function(e){e.End="End",e.Start="Start"})(b||(b={}));var l;(function(e){e.AlwaysShow="AlwaysShow",e.ShowAboveL="ShowAboveL",e.ShowAboveM="ShowAboveM",e.ShowAboveS="ShowAboveS",e.NeverShow="NeverShow"})(l||(l={}));var h;(function(e){e.BelowXL="BelowXL",e.BelowL="BelowL",e.BelowM="BelowM",e.OnMinimumWidth="OnMinimumWidth"})(h||(h={}));function R(){return p("div",{class:this.classes.root,style:this.styles.root,children:this._isSideContentFirst?v(g,{children:[C.call(this),S.call(this)]}):v(g,{children:[S.call(this),C.call(this)]})})}function S(){return p("div",{role:"main","aria-label":this.accInfo.mainContent?.ariaLabel,class:this.classes.main,style:this.styles.main,children:p("slot",{})})}function C(){return p("aside",{role:"complementary","aria-label":this.accInfo.sideContent?.ariaLabel,class:this.classes.side,style:this.styles.side,children:p("slot",{name:"sideContent"})})}L("@ui5/webcomponents-theming","sap_horizon",async()=>B);L("@ui5/webcomponents-fiori","sap_horizon",async()=>z);const P=`:host{display:block;width:100%;height:100%;position:relative;container-type:inline-size}.ui5-dsc-root{width:100%;height:100%;position:relative;overflow-x:hidden;overflow-y:auto;display:flex;flex-direction:row}.ui5-dsc-main,.ui5-dsc-side{display:block;position:relative;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;flex:none}:host([hide-main-content]) .ui5-dsc-main{display:none}:host([hide-main-content]) .ui5-dsc-side{width:100%;min-width:0}:host([hide-side-content]) .ui5-dsc-side{display:none}:host([hide-side-content]) .ui5-dsc-main{width:100%;min-width:0}:host([hide-main-content][hide-side-content]) .ui5-dsc-root{display:none}:host([equal-split]) .ui5-dsc-main,:host([equal-split]) .ui5-dsc-side{width:50%;min-width:0}@container (min-width: 1441px){.ui5-dsc-main{width:75%;min-width:320px}.ui5-dsc-side{width:25%;min-width:320px}:host([hide-main-content]) .ui5-dsc-side,:host([hide-side-content]) .ui5-dsc-main{width:100%;min-width:0}}@container (min-width: 1025px) and (max-width: 1440px){.ui5-dsc-main{width:66.666%;min-width:320px}.ui5-dsc-side{width:33.333%;min-width:320px}:host([side-content-fall-down="BelowXL"]) .ui5-dsc-root{flex-direction:column}:host([side-content-fall-down="BelowXL"]) .ui5-dsc-main,:host([side-content-fall-down="BelowXL"]) .ui5-dsc-side{width:100%}:host([side-content-visibility="ShowAboveL"]) .ui5-dsc-side{display:none}:host([side-content-visibility="ShowAboveL"]) .ui5-dsc-main{width:100%;min-width:0}:host([hide-main-content]) .ui5-dsc-side,:host([hide-side-content]) .ui5-dsc-main,:host([side-content-fall-down="BelowXL"][hide-main-content]) .ui5-dsc-side,:host([side-content-fall-down="BelowXL"][hide-side-content]) .ui5-dsc-main{width:100%;min-width:0}}@container (min-width: 721px) and (max-width: 1024px){.ui5-dsc-main{width:calc(100% - 340px)}.ui5-dsc-side{width:340px}:host([side-content-fall-down="BelowXL"]) .ui5-dsc-root,:host([side-content-fall-down="BelowL"]) .ui5-dsc-root{flex-direction:column}:host([side-content-fall-down="BelowXL"]) .ui5-dsc-main,:host([side-content-fall-down="BelowXL"]) .ui5-dsc-side,:host([side-content-fall-down="BelowL"]) .ui5-dsc-main,:host([side-content-fall-down="BelowL"]) .ui5-dsc-side{width:100%}:host([side-content-visibility="ShowAboveM"]) .ui5-dsc-side,:host([side-content-visibility="ShowAboveL"]) .ui5-dsc-side{display:none}:host([side-content-visibility="ShowAboveM"]) .ui5-dsc-main,:host([side-content-visibility="ShowAboveL"]) .ui5-dsc-main{width:100%;min-width:0}:host([hide-main-content]) .ui5-dsc-side,:host([hide-side-content]) .ui5-dsc-main{width:100%;min-width:0}}@container (min-width: 721px) and (max-width: 960px){:host([side-content-fall-down="OnMinimumWidth"]) .ui5-dsc-root{flex-direction:column}:host([side-content-fall-down="OnMinimumWidth"]) .ui5-dsc-main,:host([side-content-fall-down="OnMinimumWidth"]) .ui5-dsc-side{width:100%}:host([side-content-fall-down="OnMinimumWidth"]:not([side-content-visibility="NeverShow"]):not([side-content-visibility="ShowAboveM"]):not([side-content-visibility="ShowAboveL"]):not([hide-side-content])) .ui5-dsc-side{display:block}:host([side-content-fall-down="OnMinimumWidth"][side-content-visibility="NeverShow"]) .ui5-dsc-side,:host([side-content-fall-down="OnMinimumWidth"][side-content-visibility="ShowAboveM"]) .ui5-dsc-side,:host([side-content-fall-down="OnMinimumWidth"][side-content-visibility="ShowAboveL"]) .ui5-dsc-side,:host([side-content-fall-down="OnMinimumWidth"][hide-side-content]) .ui5-dsc-side{display:none}:host([side-content-fall-down="OnMinimumWidth"][side-content-visibility="NeverShow"]) .ui5-dsc-main,:host([side-content-fall-down="OnMinimumWidth"][side-content-visibility="ShowAboveM"]) .ui5-dsc-main,:host([side-content-fall-down="OnMinimumWidth"][side-content-visibility="ShowAboveL"]) .ui5-dsc-main,:host([side-content-fall-down="OnMinimumWidth"][hide-side-content]) .ui5-dsc-main{width:100%;min-width:0}:host([side-content-fall-down="OnMinimumWidth"][hide-main-content]) .ui5-dsc-side{width:100%;min-width:0}}@container (max-width: 720px){.ui5-dsc-main,.ui5-dsc-side{width:100%}.ui5-dsc-root{flex-direction:column}:host([equal-split]) .ui5-dsc-main,:host([equal-split]) .ui5-dsc-side{width:100%;min-width:0}:host(:not([side-content-visibility="AlwaysShow"]):not([hide-side-content])) .ui5-dsc-side{display:none}:host(:not([side-content-visibility="AlwaysShow"]):not([hide-main-content])) .ui5-dsc-main{display:block}:host([side-content-visibility="AlwaysShow"]:not([hide-side-content])) .ui5-dsc-side{display:block}:host([side-content-visibility="AlwaysShow"]:not([hide-main-content])) .ui5-dsc-main{display:block}:host([hide-main-content]) .ui5-dsc-side,:host([hide-side-content]) .ui5-dsc-main{width:100%;min-width:0}}:host([side-content-visibility="NeverShow"]:not([hide-main-content])) .ui5-dsc-side{display:none}:host([side-content-visibility="NeverShow"]:not([hide-side-content])) .ui5-dsc-main{display:block;width:100%;min-width:0}@container (min-width: 1441px){:host([side-content-visibility="ShowAboveL"]:not([hide-side-content])) .ui5-dsc-side{display:block}}@container (min-width: 1025px){:host([side-content-visibility="ShowAboveM"]:not([hide-side-content])) .ui5-dsc-side{display:block}}@container (min-width: 721px){:host([side-content-visibility="ShowAboveS"]:not([hide-side-content])) .ui5-dsc-side{display:block}}:host(:not([side-content-visibility="NeverShow"]):not([hide-main-content])) .ui5-dsc-root.ui5-dsc-toggled .ui5-dsc-main{display:none}:host(:not([side-content-visibility="NeverShow"]):not([hide-side-content])) .ui5-dsc-root.ui5-dsc-toggled .ui5-dsc-side{display:block;width:100%;min-width:0}
`;var n=function(e,t,a,s){var o=arguments.length,d=o<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,a):s,w;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")d=Reflect.decorate(e,t,a,s);else for(var y=e.length-1;y>=0;y--)(w=e[y])&&(d=(o<3?w(d):o>3?w(t,a,d):w(t,a))||d);return o>3&&d&&Object.defineProperty(t,a,d),d},f;const _=720,M=1024,A=1440,x=960;let i=f=class extends V{constructor(){super(...arguments),this.hideMainContent=!1,this.hideSideContent=!1,this.sideContentPosition="End",this.sideContentVisibility="ShowAboveS",this.sideContentFallDown="OnMinimumWidth",this.equalSplit=!1,this.accessibilityAttributes={},this._toggled=!1,this._isSideContentBelowMainContent=!1}onEnterDOM(){this._resizeObserver=new ResizeObserver(t=>{t.forEach(a=>{const s=a.contentRect.width;let o;s<=_?o="S":s<=M?o="M":s<=A?o="L":o="XL",this._isSideContentBelowMainContent=this.isSideContentBelowMainContent,o!==this._currentBreakpoint&&(this.fireDecoratorEvent("layout-change",{currentBreakpoint:o,previousBreakpoint:this._currentBreakpoint,mainContentVisible:this._getMainContentVisibility(),sideContentVisible:this._getSideContentVisibility()}),this._currentBreakpoint=o)})}),this._resizeObserver.observe(this)}onExitDOM(){this._resizeObserver?.disconnect()}toggleContents(){this._isToggleEnabled&&(this._toggled=!this._toggled)}_getMainContentVisibility(){return this._mainContent?getComputedStyle(this._mainContent).display!=="none":!1}_getSideContentVisibility(){return this._sideContent?getComputedStyle(this._sideContent).display!=="none":!1}get classes(){return{main:{"ui5-dsc-main":!0},side:{"ui5-dsc-side":!0},root:{"ui5-dsc-root":!0,"ui5-dsc-toggled":this._toggled}}}get isSideContentBelowMainContent(){if(this.sideContentVisibility===l.NeverShow)return!1;const t=this.sideContentFallDown===h.OnMinimumWidth&&this._currentBreakpoint===this.sizeM&&this.containerWidth<=x,a=this.sideContentFallDown===h.BelowM&&(this._currentBreakpoint===this.sizeM||this._currentBreakpoint===this.sizeS),s=this.sideContentFallDown===h.BelowL&&(this._currentBreakpoint===this.sizeM||this._currentBreakpoint===this.sizeS),o=this.sideContentFallDown===h.BelowXL&&(this._currentBreakpoint===this.sizeL||this._currentBreakpoint===this.sizeM||this._currentBreakpoint===this.sizeS)&&this._currentBreakpoint!==this.sizeXL,d=this.sideContentVisibility===l.AlwaysShow&&(this._currentBreakpoint===this.sizeS||this._currentBreakpoint===this.sizeM&&this.containerWidth<=x);return t||a||s||o||d}get styles(){return this._isSideContentBelowMainContent=this.isSideContentBelowMainContent,{root:{"flex-wrap":"nowrap"},main:{height:this._isSideContentBelowMainContent?"auto":"100%"},side:{height:this._isSideContentBelowMainContent?"auto":"100%"}}}get accInfo(){return{mainContent:{ariaLabel:this.accessibilityAttributes.mainContent?.ariaLabel||f.i18nBundle.getText(I)},sideContent:{ariaLabel:this.accessibilityAttributes.sideContent?.ariaLabel||f.i18nBundle.getText(E)}}}get sizeS(){return"S"}get sizeM(){return"M"}get sizeL(){return"L"}get sizeXL(){return"XL"}get containerWidth(){return this.clientWidth}get breakpoint(){const t=this.containerWidth;return t<=_?this.sizeS:t<=M?this.sizeM:t<=A?this.sizeL:this.sizeXL}get _isSideContentFirst(){return this.sideContentPosition===b.Start}get _isToggleEnabled(){if(this.sideContentVisibility===l.NeverShow||this.hideMainContent||this.hideSideContent)return!1;const t=this.breakpoint;return t===this.sizeS?this.sideContentVisibility!==l.AlwaysShow:{[this.sizeM]:[l.ShowAboveM,l.ShowAboveL],[this.sizeL]:[l.ShowAboveL]}[t]?.includes(this.sideContentVisibility)??!1}};n([r({type:Boolean})],i.prototype,"hideMainContent",void 0);n([r({type:Boolean})],i.prototype,"hideSideContent",void 0);n([r()],i.prototype,"sideContentPosition",void 0);n([r()],i.prototype,"sideContentVisibility",void 0);n([r()],i.prototype,"sideContentFallDown",void 0);n([r({type:Boolean})],i.prototype,"equalSplit",void 0);n([r({type:Object})],i.prototype,"accessibilityAttributes",void 0);n([r({type:Boolean,noAttribute:!0})],i.prototype,"_toggled",void 0);n([r({noAttribute:!0})],i.prototype,"_currentBreakpoint",void 0);n([r({type:Boolean,noAttribute:!0})],i.prototype,"_isSideContentBelowMainContent",void 0);n([q()],i.prototype,"sideContent",void 0);n([D(".ui5-dsc-main")],i.prototype,"_mainContent",void 0);n([D(".ui5-dsc-side")],i.prototype,"_sideContent",void 0);n([N("@ui5/webcomponents-fiori")],i,"i18nBundle",void 0);i=f=n([k({tag:"ui5-dynamic-side-content",renderer:O,styles:[P],template:R}),W("layout-change",{bubbles:!0})],i);i.define();const u=T("ui5-dynamic-side-content",["accessibilityAttributes","sideContentFallDown","sideContentPosition","sideContentVisibility"],["equalSplit","hideMainContent","hideSideContent"],["sideContent"],["layout-change"]);u.displayName="DynamicSideContent";try{u.displayName="DynamicSideContent",u.__docgenInfo={description:`The DynamicSideContent (\`DynamicSideContent\`) is a layout component that allows additional content
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



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"DynamicSideContent",props:{children:{defaultValue:null,description:"Defines the main content.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},sideContent:{defaultValue:null,description:`Defines the side content.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="sideContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"sideContent",required:!1,type:{name:"UI5WCSlotsNode"}},onLayoutChange:{defaultValue:null,description:`Fires when the current breakpoint has been changed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onLayoutChange",required:!1,type:{name:"(event: Ui5CustomEvent<DynamicSideContentDomRef, DynamicSideContentLayoutChangeEventDetail>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:`Defines additional accessibility attributes on different areas of the component.

The accessibilityAttributes object has the following fields:

 - **mainContent**: \`mainContent.ariaLabel\` defines the aria-label of the main content area. Accepts any string.
 - **sideContent**: \`sideContent.ariaLabel\` defines the aria-label of the side content area. Accepts any string.

**Note:** Available since [v2.6.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.6.0) of **@ui5/webcomponents-fiori**.`,name:"accessibilityAttributes",required:!1,type:{name:"DynamicSideContentAccessibilityAttributes"}},equalSplit:{defaultValue:{value:"false"},description:`Defines whether the component is in equal split mode. In this mode, the side and
the main content take 50:50 percent of the container on all screen sizes
except for phone, where the main and side contents are switching visibility
using the toggle method.`,name:"equalSplit",required:!1,type:{name:"boolean"}},hideMainContent:{defaultValue:{value:"false"},description:"Defines the visibility of the main content.",name:"hideMainContent",required:!1,type:{name:"boolean"}},hideSideContent:{defaultValue:{value:"false"},description:"Defines the visibility of the side content.",name:"hideSideContent",required:!1,type:{name:"boolean"}},sideContentFallDown:{defaultValue:{value:'"OnMinimumWidth"'},description:"Defines on which breakpoints the side content falls down below the main content.",name:"sideContentFallDown",required:!1,type:{name:"enum",value:[{value:'"BelowXL"'},{value:'"BelowL"'},{value:'"BelowM"'},{value:'"OnMinimumWidth"'},{value:'"BelowXL"'},{value:'"BelowL"'},{value:'"BelowM"'},{value:'"OnMinimumWidth"'}]}},sideContentPosition:{defaultValue:{value:'"End"'},description:`Defines whether the side content is positioned before the main content (left side
in LTR mode), or after the the main content (right side in LTR mode).`,name:"sideContentPosition",required:!1,type:{name:"enum",value:[{value:'"Start"'},{value:'"End"'},{value:'"End"'},{value:'"Start"'}]}},sideContentVisibility:{defaultValue:{value:'"ShowAboveS"'},description:"Defines on which breakpoints the side content is visible.",name:"sideContentVisibility",required:!1,type:{name:"enum",value:[{value:'"AlwaysShow"'},{value:'"ShowAboveL"'},{value:'"ShowAboveM"'},{value:'"ShowAboveS"'},{value:'"NeverShow"'},{value:'"AlwaysShow"'},{value:'"ShowAboveL"'},{value:'"ShowAboveM"'},{value:'"ShowAboveS"'},{value:'"NeverShow"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{u.displayName="DynamicSideContent",u.__docgenInfo={description:`The DynamicSideContent (\`DynamicSideContent\`) is a layout component that allows additional content
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



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"DynamicSideContent",props:{children:{defaultValue:null,description:"Defines the main content.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},sideContent:{defaultValue:null,description:`Defines the side content.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="sideContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"sideContent",required:!1,type:{name:"UI5WCSlotsNode"}},onLayoutChange:{defaultValue:null,description:`Fires when the current breakpoint has been changed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onLayoutChange",required:!1,type:{name:"(event: Ui5CustomEvent<DynamicSideContentDomRef, DynamicSideContentLayoutChangeEventDetail>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:`Defines additional accessibility attributes on different areas of the component.

The accessibilityAttributes object has the following fields:

 - **mainContent**: \`mainContent.ariaLabel\` defines the aria-label of the main content area. Accepts any string.
 - **sideContent**: \`sideContent.ariaLabel\` defines the aria-label of the side content area. Accepts any string.

**Note:** Available since [v2.6.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.6.0) of **@ui5/webcomponents-fiori**.`,name:"accessibilityAttributes",required:!1,type:{name:"DynamicSideContentAccessibilityAttributes"}},equalSplit:{defaultValue:{value:"false"},description:`Defines whether the component is in equal split mode. In this mode, the side and
the main content take 50:50 percent of the container on all screen sizes
except for phone, where the main and side contents are switching visibility
using the toggle method.`,name:"equalSplit",required:!1,type:{name:"boolean"}},hideMainContent:{defaultValue:{value:"false"},description:"Defines the visibility of the main content.",name:"hideMainContent",required:!1,type:{name:"boolean"}},hideSideContent:{defaultValue:{value:"false"},description:"Defines the visibility of the side content.",name:"hideSideContent",required:!1,type:{name:"boolean"}},sideContentFallDown:{defaultValue:{value:'"OnMinimumWidth"'},description:"Defines on which breakpoints the side content falls down below the main content.",name:"sideContentFallDown",required:!1,type:{name:"enum",value:[{value:'"BelowXL"'},{value:'"BelowL"'},{value:'"BelowM"'},{value:'"OnMinimumWidth"'},{value:'"BelowXL"'},{value:'"BelowL"'},{value:'"BelowM"'},{value:'"OnMinimumWidth"'}]}},sideContentPosition:{defaultValue:{value:'"End"'},description:`Defines whether the side content is positioned before the main content (left side
in LTR mode), or after the the main content (right side in LTR mode).`,name:"sideContentPosition",required:!1,type:{name:"enum",value:[{value:'"Start"'},{value:'"End"'},{value:'"End"'},{value:'"Start"'}]}},sideContentVisibility:{defaultValue:{value:'"ShowAboveS"'},description:"Defines on which breakpoints the side content is visible.",name:"sideContentVisibility",required:!1,type:{name:"enum",value:[{value:'"AlwaysShow"'},{value:'"ShowAboveL"'},{value:'"ShowAboveM"'},{value:'"ShowAboveS"'},{value:'"NeverShow"'},{value:'"AlwaysShow"'},{value:'"ShowAboveL"'},{value:'"ShowAboveM"'},{value:'"ShowAboveS"'},{value:'"NeverShow"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const F={title:"Layouts & Floorplans / DynamicSideContent",component:u,argTypes:{children:{control:{disable:!0}},sideContent:{control:{disable:!0}}},args:{sideContentFallDown:h.OnMinimumWidth,sideContentPosition:b.End,sideContentVisibility:l.ShowAboveS},tags:["package:@ui5/webcomponents-fiori"]},m={render(e){return c.jsxs(u,{...e,sideContent:c.jsxs(c.Fragment,{children:[c.jsx("h1",{children:"Side Content"}),c.jsx("p",{children:"Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a."})]}),children:[c.jsx("h1",{children:"Main Content"}),c.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque."})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const X=["Default"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:m,__namedExportsOrder:X,default:F},Symbol.toStringTag,{value:"Module"}));export{Q as C,m as D};
