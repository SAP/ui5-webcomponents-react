import{j as h}from"./jsx-runtime-D6fbYt3N.js";import{p as C,q as L,a as B,s as N,b as r,m as k,y as z,S as W,w as T}from"./withWebComponent-DpVKsRHi.js";import{b as E}from"./event-BX8i4Y_x.js";import{d as I}from"./slot-_4yKMUwC.js";import{i as R}from"./i18n-DEVDpFvK.js";import{a as O}from"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import{f as _}from"./ResizeHandler-D2m47C26.js";import{s as m}from"./style-map-Bigav4TG.js";import{o as b}from"./class-map-CAgcI9af.js";import{s as P}from"./parameters-bundle.css-B09Df3Yy.js";import{af as F}from"./i18n-defaults-Bh0NvB0l.js";var w;(function(n){n.End="End",n.Start="Start"})(w||(w={}));const V=w;var v;(function(n){n.AlwaysShow="AlwaysShow",n.ShowAboveL="ShowAboveL",n.ShowAboveM="ShowAboveM",n.ShowAboveS="ShowAboveS",n.NeverShow="NeverShow"})(v||(v={}));const l=v;var g;(function(n){n.BelowXL="BelowXL",n.BelowL="BelowL",n.BelowM="BelowM",n.OnMinimumWidth="OnMinimumWidth"})(g||(g={}));const u=g;function $(n,e,t){return C`<div class="ui5-dsc-root" style="${m(this.styles.root)}">${this._isSideContentFirst?U.call(this,n,e,t):j.call(this,n,e,t)}</div> `}function U(n,e,t){return C`<aside role="complementary" aria-label="${L(this.accInfo.label)}" class="${b(this.classes.side)}" style="${m(this.styles.side)}"><slot name="sideContent"></slot></aside><div class="${b(this.classes.main)}" style="${m(this.styles.main)}"><slot></slot></div>`}function j(n,e,t){return C`<div class="${b(this.classes.main)}" style="${m(this.styles.main)}"><slot></slot></div><aside role="complementary" aria-label="${L(this.accInfo.label)}" class="${b(this.classes.side)}" style="${m(this.styles.side)}"><slot name="sideContent"></slot></aside>`}B("@ui5/webcomponents-theming","sap_horizon",async()=>N);B("@ui5/webcomponents-fiori","sap_horizon",async()=>P);const X={packageName:"@ui5/webcomponents-fiori",fileName:"themes/DynamicSideContent.css.ts",content:`:host{display:block;width:100%;height:100%;position:relative}.ui5-dsc-root{width:100%;height:100%;position:relative;overflow-x:hidden;overflow-y:auto;display:flex}.ui5-dsc-main,.ui5-dsc-side{display:inline;position:relative;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;flex:none}.ui5-dsc-root>div[class^=ui5-dcs-span],.ui5-dsc-root>aside[class^=ui5-dsc-span]{overflow:auto}.ui5-dsc-main.ui5-dsc-span-fixed{width:calc(100% - 21.25rem)}.ui5-dsc-side.ui5-dsc-span-fixed{width:21.25rem}.ui5-dsc-root>.ui5-dsc-span-0{display:none}.ui5-dsc-root>.ui5-dsc-span-3{width:25%}.ui5-dsc-root>.ui5-dsc-span-4{width:33.333%}.ui5-dsc-root>.ui5-dsc-span-6{width:50%}.ui5-dsc-root>.ui5-dsc-span-8{width:66.666%}.ui5-dsc-root>.ui5-dsc-span-9{width:75%}.ui5-dsc-root>.ui5-dsc-span-12{width:100%}
`};var a=function(n,e,t,i){var o=arguments.length,d=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,f;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")d=Reflect.decorate(n,e,t,i);else for(var y=n.length-1;y>=0;y--)(f=n[y])&&(d=(o<3?f(d):o>3?f(e,t,d):f(e,t))||d);return o>3&&d&&Object.defineProperty(e,t,d),d},S;const D=720,x=1024,H=1440,K=960;let s=S=class extends W{constructor(){super(),this.hideMainContent=!1,this.hideSideContent=!1,this.sideContentPosition="End",this.sideContentVisibility="ShowAboveS",this.sideContentFallDown="OnMinimumWidth",this.equalSplit=!1,this._mcSpan="0",this._scSpan="0",this._toggled=!1,this._handleResizeBound=this.handleResize.bind(this)}onAfterRendering(){this._resizeContents()}onEnterDOM(){_.register(this,this._handleResizeBound)}onExitDOM(){_.deregister(this,this._handleResizeBound)}toggleContents(){this.breakpoint===this.sizeS&&this.sideContentVisibility!==l.AlwaysShow&&(this._toggled=!this._toggled)}get classes(){const e="ui5-dsc-span",t=this._toggled?this._scSpan:this._mcSpan,i=this._toggled?this._mcSpan:this._scSpan,o={main:{"ui5-dsc-main":!0},side:{"ui5-dsc-side":!0}};return o.main[`${e}-${t}`]=!0,o.side[`${e}-${i}`]=!0,o}get styles(){const e=this.breakpoint===this.sizeS&&this._toggled,t=e?this._scSpan:this._mcSpan,i=e?this._mcSpan:this._scSpan,o=this.breakpoint===this.sizeS&&this.sideContentVisibility!==l.AlwaysShow?"100%":"auto";return{root:{"flex-wrap":this._mcSpan==="12"?"wrap":"nowrap"},main:{height:t===this.span12?o:"100%"},side:{height:i===this.span12?o:"100%"}}}get accInfo(){return{label:S.i18nBundle.getText(F)}}get sizeS(){return"S"}get sizeM(){return"M"}get sizeL(){return"L"}get sizeXL(){return"XL"}get span0(){return"0"}get span3(){return"3"}get span4(){return"4"}get span6(){return"6"}get span8(){return"8"}get span9(){return"9"}get span12(){return"12"}get spanFixed(){return"fixed"}get containerWidth(){return this.parentElement.getBoundingClientRect().width}get breakpoint(){let e;return this.containerWidth<=D?e=this.sizeS:this.containerWidth>D&&this.containerWidth<=x?e=this.sizeM:this.containerWidth>x&&this.containerWidth<=H?e=this.sizeL:e=this.sizeXL,e}get _isSideContentFirst(){return this.sideContentPosition===V.Start}handleResize(){this._resizeContents()}_resizeContents(){let e,t,i=!1;switch(this.breakpoint){case this.sizeS:e=this.span12,t=this.span12;break;case this.sizeM:this.sideContentFallDown===u.BelowXL||this.sideContentFallDown===u.BelowL||this.containerWidth<=K&&this.sideContentFallDown===u.OnMinimumWidth?(e=this.span12,t=this.span12):(e=this.equalSplit?this.span6:this.spanFixed,t=this.equalSplit?this.span6:this.spanFixed),i=this.sideContentVisibility===l.ShowAboveS||this.sideContentVisibility===l.AlwaysShow;break;case this.sizeL:this.sideContentFallDown===u.BelowXL?(e=this.span12,t=this.span12):(e=this.equalSplit?this.span6:this.span8,t=this.equalSplit?this.span6:this.span4),i=this.sideContentVisibility===l.ShowAboveS||this.sideContentVisibility===l.ShowAboveM||this.sideContentVisibility===l.AlwaysShow;break;case this.sizeXL:e=this.equalSplit?this.span6:this.span9,t=this.equalSplit?this.span6:this.span3,i=this.sideContentVisibility!==l.NeverShow}if(this.sideContentVisibility===l.AlwaysShow&&(i=!0),this.hideSideContent&&(e=this.hideMainContent?this.span0:this.span12,t=this.span0,i=!1),this.hideMainContent&&(e=this.span0,t=this.hideSideContent?this.span0:this.span12,i=!0),i||(e=this.span12,t=this.span0),this._currentBreakpoint!==this.breakpoint){const o={currentBreakpoint:this.breakpoint,previousBreakpoint:this._currentBreakpoint,mainContentVisible:e!==this.span0,sideContentVisible:t!==this.span0};this.fireDecoratorEvent("layout-change",o),this._currentBreakpoint=this.breakpoint}this._setSpanSizes(e,t)}_setSpanSizes(e,t){this._mcSpan=e,this._scSpan=t,this.breakpoint!==this.sizeS&&(this._toggled=!1)}};a([r({type:Boolean})],s.prototype,"hideMainContent",void 0);a([r({type:Boolean})],s.prototype,"hideSideContent",void 0);a([r()],s.prototype,"sideContentPosition",void 0);a([r()],s.prototype,"sideContentVisibility",void 0);a([r()],s.prototype,"sideContentFallDown",void 0);a([r({type:Boolean})],s.prototype,"equalSplit",void 0);a([r({noAttribute:!0})],s.prototype,"_mcSpan",void 0);a([r({noAttribute:!0})],s.prototype,"_scSpan",void 0);a([r({type:Boolean,noAttribute:!0})],s.prototype,"_toggled",void 0);a([r({noAttribute:!0})],s.prototype,"_currentBreakpoint",void 0);a([I()],s.prototype,"sideContent",void 0);a([R("@ui5/webcomponents-fiori")],s,"i18nBundle",void 0);s=S=a([k({tag:"ui5-dynamic-side-content",renderer:z,styles:[X,O()],template:$}),E("layout-change",{detail:{currentBreakpoint:{type:String},previousBreakpoint:{type:String},mainContentVisible:{type:Boolean},sideContentVisible:{type:Boolean}},bubbles:!0})],s);s.define();const c=T("ui5-dynamic-side-content",["sideContentFallDown","sideContentPosition","sideContentVisibility"],["equalSplit","hideMainContent","hideSideContent"],["sideContent"],["layout-change"]);c.displayName="DynamicSideContent";try{c.displayName="DynamicSideContent",c.__docgenInfo={description:`The DynamicSideContent (\`DynamicSideContent\`) is a layout component that allows additional content
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
| ❌|✅|`,name:"onLayoutChange",required:!1,type:{name:"(event: Ui5CustomEvent<DynamicSideContentDomRef, DynamicSideContentLayoutChangeEventDetail>) => void"}},equalSplit:{defaultValue:{value:"false"},description:`Defines whether the component is in equal split mode. In this mode, the side and
the main content take 50:50 percent of the container on all screen sizes
except for phone, where the main and side contents are switching visibility
using the toggle method.`,name:"equalSplit",required:!1,type:{name:"boolean"}},hideMainContent:{defaultValue:{value:"false"},description:"Defines the visibility of the main content.",name:"hideMainContent",required:!1,type:{name:"boolean"}},hideSideContent:{defaultValue:{value:"false"},description:"Defines the visibility of the side content.",name:"hideSideContent",required:!1,type:{name:"boolean"}},sideContentFallDown:{defaultValue:{value:'"OnMinimumWidth"'},description:"Defines on which breakpoints the side content falls down below the main content.",name:"sideContentFallDown",required:!1,type:{name:"enum",value:[{value:'"BelowXL"'},{value:'"BelowL"'},{value:'"BelowM"'},{value:'"OnMinimumWidth"'},{value:'"BelowXL"'},{value:'"BelowL"'},{value:'"BelowM"'},{value:'"OnMinimumWidth"'}]}},sideContentPosition:{defaultValue:{value:'"End"'},description:`Defines whether the side content is positioned before the main content (left side
in LTR mode), or after the the main content (right side in LTR mode).`,name:"sideContentPosition",required:!1,type:{name:"enum",value:[{value:'"Start"'},{value:'"End"'},{value:'"End"'},{value:'"Start"'}]}},sideContentVisibility:{defaultValue:{value:'"ShowAboveS"'},description:"Defines on which breakpoints the side content is visible.",name:"sideContentVisibility",required:!1,type:{name:"enum",value:[{value:'"AlwaysShow"'},{value:'"ShowAboveL"'},{value:'"ShowAboveM"'},{value:'"ShowAboveS"'},{value:'"NeverShow"'},{value:'"AlwaysShow"'},{value:'"ShowAboveL"'},{value:'"ShowAboveM"'},{value:'"ShowAboveS"'},{value:'"NeverShow"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{c.displayName="DynamicSideContent",c.__docgenInfo={description:`The DynamicSideContent (\`DynamicSideContent\`) is a layout component that allows additional content
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
| ❌|✅|`,name:"onLayoutChange",required:!1,type:{name:"(event: Ui5CustomEvent<DynamicSideContentDomRef, DynamicSideContentLayoutChangeEventDetail>) => void"}},equalSplit:{defaultValue:{value:"false"},description:`Defines whether the component is in equal split mode. In this mode, the side and
the main content take 50:50 percent of the container on all screen sizes
except for phone, where the main and side contents are switching visibility
using the toggle method.`,name:"equalSplit",required:!1,type:{name:"boolean"}},hideMainContent:{defaultValue:{value:"false"},description:"Defines the visibility of the main content.",name:"hideMainContent",required:!1,type:{name:"boolean"}},hideSideContent:{defaultValue:{value:"false"},description:"Defines the visibility of the side content.",name:"hideSideContent",required:!1,type:{name:"boolean"}},sideContentFallDown:{defaultValue:{value:'"OnMinimumWidth"'},description:"Defines on which breakpoints the side content falls down below the main content.",name:"sideContentFallDown",required:!1,type:{name:"enum",value:[{value:'"BelowXL"'},{value:'"BelowL"'},{value:'"BelowM"'},{value:'"OnMinimumWidth"'},{value:'"BelowXL"'},{value:'"BelowL"'},{value:'"BelowM"'},{value:'"OnMinimumWidth"'}]}},sideContentPosition:{defaultValue:{value:'"End"'},description:`Defines whether the side content is positioned before the main content (left side
in LTR mode), or after the the main content (right side in LTR mode).`,name:"sideContentPosition",required:!1,type:{name:"enum",value:[{value:'"Start"'},{value:'"End"'},{value:'"End"'},{value:'"Start"'}]}},sideContentVisibility:{defaultValue:{value:'"ShowAboveS"'},description:"Defines on which breakpoints the side content is visible.",name:"sideContentVisibility",required:!1,type:{name:"enum",value:[{value:'"AlwaysShow"'},{value:'"ShowAboveL"'},{value:'"ShowAboveM"'},{value:'"ShowAboveS"'},{value:'"NeverShow"'},{value:'"AlwaysShow"'},{value:'"ShowAboveL"'},{value:'"ShowAboveM"'},{value:'"ShowAboveS"'},{value:'"NeverShow"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const G={title:"Layouts & Floorplans / DynamicSideContent",component:c,argTypes:{children:{control:{disable:!0}},sideContent:{control:{disable:!0}}},args:{sideContentFallDown:u.OnMinimumWidth,sideContentPosition:V.End,sideContentVisibility:l.ShowAboveS},tags:["package:@ui5/webcomponents-fiori"]},p={render(n){return h.jsxs(c,{...n,sideContent:h.jsxs(h.Fragment,{children:[h.jsx("h1",{children:"Side Content"}),h.jsx("p",{children:"Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a."})]}),children:[h.jsx("h1",{children:"Main Content"}),h.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque."})]})}};var q,M,A;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(A=(M=p.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};const Q=["Default"],de=Object.freeze(Object.defineProperty({__proto__:null,Default:p,__namedExportsOrder:Q,default:G},Symbol.toStringTag,{value:"Module"}));export{de as C,p as D};
