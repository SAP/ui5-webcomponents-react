const __vite__fileDeps=["./Carousel-BKPcYQS3.js","./UI5Element-BDMamLf2.js","./Boot-DOb84JFo.js","./EventProvider-B3ZIXKWe.js","./ManagedStyles-B3AuKgSD.js","./index-BP8_t0zE.js","./CustomElementsScopeUtils-CyqSdClf.js","./withWebComponent-B6oBGWld.js","./utils-BFMQrOqR.js","./useIsomorphicLayoutEffect-CnI1knHw.js","./event-CegLCnR0.js","./slot-Df15G--e.js","./Integer-Dh6YzFpK.js","./Keys-BgUkNma0.js","./i18nBundle-VOPn86Vc.js","./ScrollEnablement-DsQABIwS.js","./animate-DFaKyidW.js","./ResizeHandler-DS8KPGJE.js","./AnimationMode-DCnCrNOV.js","./AriaLabelHelper-CzOXVcye.js","./i18n-defaults-YvCKXLrH.js","./class-map-k-XuEcbQ.js","./style-map-C_Zo2l27.js","./Icon-BO7pZwTn.js","./Icons-BEU0Gkqb.js","./parameters-bundle.css-CG8awnKl.js","./slim-arrow-left-s_KMqapB.js","./slim-arrow-right-CHJduem3.js","./Button-BZkI_7BG.js","./MarkedEvents-BPv6Lv4o.js","./willShowContent-BOkh0bwj.js","./HasPopup-Cecjtg2t.js","./Label-DpitxhM9.js","./WrappingType-CW8URInd.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{j as n}from"./ManagedStyles-B3AuKgSD.js";import{C as r}from"./Carousel-BKPcYQS3.js";import{_ as l}from"./iframe-ryHEni9a.js";import{w as u}from"./withWebComponent-B6oBGWld.js";const e=u("ui5-carousel",["accessibleName","accessibleNameRef","arrowsPlacement","backgroundDesign","itemsPerPageL","itemsPerPageM","itemsPerPageS","pageIndicatorBackgroundDesign","pageIndicatorBorderDesign","pageIndicatorStyle"],["cyclic","hideNavigationArrows","hidePageIndicator"],[],["navigate"],()=>l(()=>import("./Carousel-BKPcYQS3.js").then(a=>a.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]),import.meta.url));e.displayName="Carousel";try{e.displayName="Carousel",e.__docgenInfo={description:`The Carousel allows the user to browse through a set of items.
The component is mostly used for showing a gallery of images, but can hold any other HTML element.

There are several ways to perform navigation:

- on desktop - the user can navigate using the navigation arrows or with keyboard shorcuts.
- on mobile - the user can use swipe gestures.

### Usage

#### When to use:

- The items you want to display are very different from each other.
- You want to display the items one after the other.

#### When not to use:

- The items you want to display need to be visible at the same time.
- The items you want to display are uniform and very similar.

### Keyboard Handling

#### Basic Navigation
When the \`Carousel\` is focused the user can navigate between the items
with the following keyboard shortcuts:

- [Up] or [Down] - Navigates to previous and next item
- [Left] or [Right] - Navigates to previous and next item

### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:

\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Carousel",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onNavigate:{defaultValue:null,description:"Fired whenever the page changes due to user interaction,\nwhen the user clicks on the navigation arrows or while resizing,\nbased on the `items-per-page-l`, `items-per-page-m` and `items-per-page-s` properties.",name:"onNavigate",required:!1,type:{name:"(event: Ui5CustomEvent<CarouselDomRef, CarouselNavigateEventDetail>) => void"}},accessibleName:{defaultValue:null,description:`Defines the accessible name of the component.

**Note:** Available since [v1.24](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:`Defines the IDs of the elements that label the input.

**Note:** Available since [v1.24](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},arrowsPlacement:{defaultValue:{value:'"Content"'},description:`Defines the position of arrows.

Available options are:

- \`Content\` - the arrows are placed on the sides of the current page.
- \`Navigation\` - the arrows are placed on the sides of the page indicator.`,name:"arrowsPlacement",required:!1,type:{name:"enum",value:[{value:'"Content"'},{value:'"Navigation"'},{value:'"Content"'},{value:'"Navigation"'}]}},backgroundDesign:{defaultValue:{value:'"Translucent"'},description:`Defines the carousel's background design.

**Note:** Available since [v1.14](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.14) of **@ui5/webcomponents**.`,name:"backgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Solid"'},{value:'"Transparent"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"Translucent"'},{value:'"Translucent"'}]}},cyclic:{defaultValue:{value:"false"},description:"Defines whether the carousel should loop, i.e show the first page after the last page is reached and vice versa.",name:"cyclic",required:!1,type:{name:"boolean"}},hideNavigationArrows:{defaultValue:{value:"false"},description:`Defines the visibility of the navigation arrows.
If set to true the navigation arrows will be hidden.

**Note:** The navigation arrows are never displayed on touch devices.
In this case, the user can swipe to navigate through the items.`,name:"hideNavigationArrows",required:!1,type:{name:"boolean"}},hidePageIndicator:{defaultValue:{value:"false"},description:`Defines the visibility of the page indicator.
If set to true the page indicator will be hidden.`,name:"hidePageIndicator",required:!1,type:{name:"boolean"}},itemsPerPageL:{defaultValue:{value:"1"},description:"Defines the number of items per page on large size (more than 1024px). One item per page shown by default.",name:"itemsPerPageL",required:!1,type:{name:"number"}},itemsPerPageM:{defaultValue:{value:"1"},description:"Defines the number of items per page on medium size (from 640px to 1024px). One item per page shown by default.",name:"itemsPerPageM",required:!1,type:{name:"number"}},itemsPerPageS:{defaultValue:{value:"1"},description:"Defines the number of items per page on small size (up to 640px). One item per page shown by default.",name:"itemsPerPageS",required:!1,type:{name:"number"}},pageIndicatorBackgroundDesign:{defaultValue:{value:'"Solid"'},description:`Defines the page indicator background design.

**Note:** Available since [v1.14](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.14) of **@ui5/webcomponents**.`,name:"pageIndicatorBackgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Solid"'},{value:'"Transparent"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"Translucent"'},{value:'"Translucent"'}]}},pageIndicatorBorderDesign:{defaultValue:{value:'"Solid"'},description:`Defines the page indicator border design.

**Note:** Available since [v1.14](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.14) of **@ui5/webcomponents**.`,name:"pageIndicatorBorderDesign",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Solid"'},{value:'"Solid"'},{value:'"None"'}]}},pageIndicatorStyle:{defaultValue:{value:'"Default"'},description:`Defines the style of the page indicator.
Available options are:

- \`Default\` - The page indicator will be visualized as dots if there are fewer than 9 pages. If there are more pages, the page indicator will switch to displaying the current page and the total number of pages. (e.g. X of Y)
- \`Numeric\` - The page indicator will display the current page and the total number of pages. (e.g. X of Y)

**Note:** Available since [v1.10](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10) of **@ui5/webcomponents**.`,name:"pageIndicatorStyle",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"Numeric"'},{value:'"Numeric"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="Carousel",e.__docgenInfo={description:`The Carousel allows the user to browse through a set of items.
The component is mostly used for showing a gallery of images, but can hold any other HTML element.

There are several ways to perform navigation:

- on desktop - the user can navigate using the navigation arrows or with keyboard shorcuts.
- on mobile - the user can use swipe gestures.

### Usage

#### When to use:

- The items you want to display are very different from each other.
- You want to display the items one after the other.

#### When not to use:

- The items you want to display need to be visible at the same time.
- The items you want to display are uniform and very similar.

### Keyboard Handling

#### Basic Navigation
When the \`Carousel\` is focused the user can navigate between the items
with the following keyboard shortcuts:

- [Up] or [Down] - Navigates to previous and next item
- [Left] or [Right] - Navigates to previous and next item

### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:

\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Carousel",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onNavigate:{defaultValue:null,description:"Fired whenever the page changes due to user interaction,\nwhen the user clicks on the navigation arrows or while resizing,\nbased on the `items-per-page-l`, `items-per-page-m` and `items-per-page-s` properties.",name:"onNavigate",required:!1,type:{name:"(event: Ui5CustomEvent<CarouselDomRef, CarouselNavigateEventDetail>) => void"}},accessibleName:{defaultValue:null,description:`Defines the accessible name of the component.

**Note:** Available since [v1.24](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:`Defines the IDs of the elements that label the input.

**Note:** Available since [v1.24](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},arrowsPlacement:{defaultValue:{value:'"Content"'},description:`Defines the position of arrows.

Available options are:

- \`Content\` - the arrows are placed on the sides of the current page.
- \`Navigation\` - the arrows are placed on the sides of the page indicator.`,name:"arrowsPlacement",required:!1,type:{name:"enum",value:[{value:'"Content"'},{value:'"Navigation"'},{value:'"Content"'},{value:'"Navigation"'}]}},backgroundDesign:{defaultValue:{value:'"Translucent"'},description:`Defines the carousel's background design.

**Note:** Available since [v1.14](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.14) of **@ui5/webcomponents**.`,name:"backgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Solid"'},{value:'"Transparent"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"Translucent"'},{value:'"Translucent"'}]}},cyclic:{defaultValue:{value:"false"},description:"Defines whether the carousel should loop, i.e show the first page after the last page is reached and vice versa.",name:"cyclic",required:!1,type:{name:"boolean"}},hideNavigationArrows:{defaultValue:{value:"false"},description:`Defines the visibility of the navigation arrows.
If set to true the navigation arrows will be hidden.

**Note:** The navigation arrows are never displayed on touch devices.
In this case, the user can swipe to navigate through the items.`,name:"hideNavigationArrows",required:!1,type:{name:"boolean"}},hidePageIndicator:{defaultValue:{value:"false"},description:`Defines the visibility of the page indicator.
If set to true the page indicator will be hidden.`,name:"hidePageIndicator",required:!1,type:{name:"boolean"}},itemsPerPageL:{defaultValue:{value:"1"},description:"Defines the number of items per page on large size (more than 1024px). One item per page shown by default.",name:"itemsPerPageL",required:!1,type:{name:"number"}},itemsPerPageM:{defaultValue:{value:"1"},description:"Defines the number of items per page on medium size (from 640px to 1024px). One item per page shown by default.",name:"itemsPerPageM",required:!1,type:{name:"number"}},itemsPerPageS:{defaultValue:{value:"1"},description:"Defines the number of items per page on small size (up to 640px). One item per page shown by default.",name:"itemsPerPageS",required:!1,type:{name:"number"}},pageIndicatorBackgroundDesign:{defaultValue:{value:'"Solid"'},description:`Defines the page indicator background design.

**Note:** Available since [v1.14](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.14) of **@ui5/webcomponents**.`,name:"pageIndicatorBackgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Solid"'},{value:'"Transparent"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"Translucent"'},{value:'"Translucent"'}]}},pageIndicatorBorderDesign:{defaultValue:{value:'"Solid"'},description:`Defines the page indicator border design.

**Note:** Available since [v1.14](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.14) of **@ui5/webcomponents**.`,name:"pageIndicatorBorderDesign",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Solid"'},{value:'"Solid"'},{value:'"None"'}]}},pageIndicatorStyle:{defaultValue:{value:'"Default"'},description:`Defines the style of the page indicator.
Available options are:

- \`Default\` - The page indicator will be visualized as dots if there are fewer than 9 pages. If there are more pages, the page indicator will switch to displaying the current page and the total number of pages. (e.g. X of Y)
- \`Numeric\` - The page indicator will display the current page and the total number of pages. (e.g. X of Y)

**Note:** Available since [v1.10](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10) of **@ui5/webcomponents**.`,name:"pageIndicatorStyle",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"Numeric"'},{value:'"Numeric"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const p={title:"Layouts & Floorplans / Carousel",component:e,argTypes:{children:{control:{disable:!0}}},args:{arrowsPlacement:r.Content},tags:["package:@ui5/webcomponents"]},t={render(a){return n.jsxs(e,{...a,children:[n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/sample1.jpg",alt:"img-sample 1"}),n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/sample2.jpg",alt:"img-sample 2"}),n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/sample3.jpg",alt:"img-sample 3"})]})}};var i,o,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render(args) {
    return <Carousel {...args}>
        <img src="https://sap.github.io/ui5-webcomponents/images/sample1.jpg" alt="img-sample 1" />
        <img src="https://sap.github.io/ui5-webcomponents/images/sample2.jpg" alt="img-sample 2" />
        <img src="https://sap.github.io/ui5-webcomponents/images/sample3.jpg" alt="img-sample 3" />
      </Carousel>;
  }
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const m=["Default"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:m,default:p},Symbol.toStringTag,{value:"Module"}));export{f as C,t as D};
