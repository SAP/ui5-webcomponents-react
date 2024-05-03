function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Carousel--ozSSm64.js","./UI5Element-9EXj3atz.js","./Boot-vTaFuwdG.js","./VersionInfo-ldzxTIVv.js","./CustomElementsScopeUtils-orabJqjR.js","./withWebComponent-LTFbYRvs.js","./utils-d3BcYjeO.js","./index-OjgoNOWw.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./event-lM5HanI-.js","./slot-HSrR9XJ-.js","./Integer-kog98579.js","./Keys-ZEuNsqmZ.js","./i18nBundle-j8vDD4VY.js","./ScrollEnablement-e3Iq28xj.js","./animate-Pj1TncyK.js","./ResizeHandler-_qRzLmqT.js","./AnimationMode-rtntj-do.js","./i18n-defaults-X1FTyPSK.js","./class-map-gjOVarQw.js","./style-map-tejh5TI3.js","./Icon-kyep1SqZ.js","./Icons-Vbmmw7bO.js","./parameters-bundle.css-EKzfhWK3.js","./slim-arrow-left-W95OY-0p.js","./slim-arrow-right-w4AUPzoN.js","./Button-DcwyQdV9.js","./AriaLabelHelper-RbKlVwzD.js","./MarkedEvents-aYv14vsS.js","./willShowContent-MSvI8sYo.js","./HasPopup-9BAMrqbD.js","./Label-mY98SzPQ.js","./WrappingType-avPrqc94.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{j as n}from"./jsx-runtime-DtaoT6pD.js";import{C as r}from"./Carousel--ozSSm64.js";import{_ as l}from"./iframe-NvEupkM7.js";import{w as u}from"./withWebComponent-LTFbYRvs.js";const a=u("ui5-carousel",["arrowsPlacement","backgroundDesign","itemsPerPageL","itemsPerPageM","itemsPerPageS","pageIndicatorBackgroundDesign","pageIndicatorBorderDesign","pageIndicatorStyle"],["cyclic","hideNavigationArrows","hidePageIndicator"],[],["navigate"],()=>l(()=>import("./Carousel--ozSSm64.js").then(t=>t.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]),import.meta.url));a.displayName="Carousel";try{a.displayName="Carousel",a.__docgenInfo={description:`The Carousel allows the user to browse through a set of items.
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

- [UP/DOWN] - Navigates to previous and next item
- [LEFT/RIGHT] - Navigates to previous and next item

### Fast Navigation
This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \` Ctrl + Alt(Option) + Down /  Ctrl + Alt(Option) + Up\`.
In order to use this functionality, you need to import the following module:

\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"Carousel",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onNavigate:{defaultValue:null,description:"Fired whenever the page changes due to user interaction,\nwhen the user clicks on the navigation arrows or while resizing,\nbased on the `items-per-page-l`, `items-per-page-m` and `items-per-page-s` properties.",name:"onNavigate",required:!1,type:{name:"(event: Ui5CustomEvent<CarouselDomRef, CarouselNavigateEventDetail>) => void"}},arrowsPlacement:{defaultValue:{value:'"Content"'},description:`Defines the position of arrows.

Available options are:

- \`Content\` - the arrows are placed on the sides of the current page.
- \`Navigation\` - the arrows are placed on the sides of the page indicator.`,name:"arrowsPlacement",required:!1,type:{name:"enum",value:[{value:'"Content"'},{value:'"Navigation"'},{value:'"Content"'},{value:'"Navigation"'}]}},backgroundDesign:{defaultValue:{value:'"Translucent"'},description:"Defines the carousel's background design.",name:"backgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Solid"'},{value:'"Transparent"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"Translucent"'},{value:'"Translucent"'}]}},cyclic:{defaultValue:{value:"false"},description:"Defines whether the carousel should loop, i.e show the first page after the last page is reached and vice versa.",name:"cyclic",required:!1,type:{name:"boolean"}},hideNavigationArrows:{defaultValue:{value:"false"},description:`Defines the visibility of the navigation arrows.
If set to true the navigation arrows will be hidden.

**Note:** The navigation arrows are never displayed on touch devices.
In this case, the user can swipe to navigate through the items.`,name:"hideNavigationArrows",required:!1,type:{name:"boolean"}},hidePageIndicator:{defaultValue:{value:"false"},description:`Defines the visibility of the page indicator.
If set to true the page indicator will be hidden.`,name:"hidePageIndicator",required:!1,type:{name:"boolean"}},itemsPerPageL:{defaultValue:{value:"1"},description:"Defines the number of items per page on large size (more than 1024px). One item per page shown by default.",name:"itemsPerPageL",required:!1,type:{name:"number"}},itemsPerPageM:{defaultValue:{value:"1"},description:"Defines the number of items per page on medium size (from 640px to 1024px). One item per page shown by default.",name:"itemsPerPageM",required:!1,type:{name:"number"}},itemsPerPageS:{defaultValue:{value:"1"},description:"Defines the number of items per page on small size (up to 640px). One item per page shown by default.",name:"itemsPerPageS",required:!1,type:{name:"number"}},pageIndicatorBackgroundDesign:{defaultValue:{value:'"Solid"'},description:"Defines the page indicator background design.",name:"pageIndicatorBackgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Solid"'},{value:'"Transparent"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"Translucent"'},{value:'"Translucent"'}]}},pageIndicatorBorderDesign:{defaultValue:{value:'"Solid"'},description:"Defines the page indicator border design.",name:"pageIndicatorBorderDesign",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Solid"'},{value:'"Solid"'},{value:'"None"'}]}},pageIndicatorStyle:{defaultValue:{value:'"Default"'},description:"Defines the style of the page indicator.\nAvailable options are:\n\n- `Default` - The page indicator will be visualized as dots if there are fewer than 9 pages. If there are more pages, the page indicator will switch to displaying the current page and the total number of pages. (e.g. X of Y)\n- `Numeric` - The page indicator will display the current page and the total number of pages. (e.g. X of Y)",name:"pageIndicatorStyle",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"Numeric"'},{value:'"Numeric"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const p={title:"Layouts & Floorplans / Carousel",component:a,argTypes:{children:{control:{disable:!0}}},args:{arrowsPlacement:r.Content},tags:["package:@ui5/webcomponents"]},e={render(t){return n.jsxs(a,{...t,children:[n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/sample1.jpg",alt:"img-sample 1"}),n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/sample2.jpg",alt:"img-sample 2"}),n.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/sample3.jpg",alt:"img-sample 3"})]})}};var i,o,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render(args) {
    return <Carousel {...args}>
        <img src="https://sap.github.io/ui5-webcomponents/assets/images/sample1.jpg" alt="img-sample 1" />
        <img src="https://sap.github.io/ui5-webcomponents/assets/images/sample2.jpg" alt="img-sample 2" />
        <img src="https://sap.github.io/ui5-webcomponents/assets/images/sample3.jpg" alt="img-sample 3" />
      </Carousel>;
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const m=["Default"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:m,default:p},Symbol.toStringTag,{value:"Module"}));export{f as C,e as D};
