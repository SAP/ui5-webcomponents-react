import{M as h,C as f,e as v,b as y}from"./chunk-HLWAVYOI-RTjlF1p8.js";import{_ as w}from"./iframe-LnjFU1Gc.js";import{C as n,B as l,a as b,b as D}from"./Carousel-81JokMKw.js";import{w as C}from"./withWebComponent-l-jCeTa1.js";import{A as S}from"./DomRefTable.module-Ypd9NL38.js";import{D as P}from"./DocsHeader-0LznDRRk.js";import{F as x}from"./Footer-E10QvGmV.js";import{j as e}from"./jsx-runtime-DtaoT6pD.js";import"./index-OjgoNOWw.js";import{D as I}from"./DomRefTable-5mccVMGg.js";import{u as p}from"./index-RwE9nQVW.js";import"./index-GL4gBoyB.js";import"./index-QYh6idnL.js";import"./mapValues-HzTlT2lF.js";import"./_baseForOwn-UZJwRxDU.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"../sb-preview/runtime.js";import"./UI5Element-Y0uzLFOr.js";import"./i18nBundle-Crssojm_.js";import"./VersionInfo-hBCHoyLi.js";import"./CustomElementsScopeUtils-5j4ES8UU.js";import"./Icon-bdsWWJur.js";import"./Icons-WRZ8WMWs.js";import"./utils-NoXYr8Q_.js";import"./slot-HSrR9XJ-.js";import"./Integer-kog98579.js";import"./ScrollEnablement-Zd_Qg15H.js";import"./animate-Pj1TncyK.js";import"./ResizeHandler-YlQCt_sN.js";import"./AnimationMode-5Uvzyzlf.js";import"./i18n-defaults-RBzcmDt8.js";import"./class-map-kmjzTHDs.js";import"./style-map-IagzN5gT.js";import"./slim-arrow-left-AnAvwiX8.js";import"./slim-arrow-right-SUiVGFkg.js";import"./Button-2q6zbrjb.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./Label-ZVCbnRu4.js";import"./WrappingType-avPrqc94.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./react-jss.esm-tmBtHfec.js";import"./index-WOksHfz7.js";import"./decline-tcMkvtbY.js";import"./i18n-defaults-n2A5pq_J.js";import"./information-bLrgXyhK.js";import"./alert-hH0G14f_.js";import"./index-A5agBEX2.js";import"./clsx-c3LcQGjR.js";import"./i18n-defaults-cIbBWf4j.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-_6wxL5DG.js";import"./index-yHPcl7dx.js";import"./index-sO5EjPrk.js";import"./Avatar-iPKVYLtK.js";import"./employee-fYGGLuhG.js";import"./index-dTG2BJNO.js";import"./index-g9IXCd2p.js";import"./Link-tRmLKUhK.js";import"./index-q8oiNN3v.js";import"./index-e4tJlW2r.js";import"./ModalsContext-0q87fkkd.js";import"./CssSizeVariables-IMpNFjIe.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./TableOfContent-_c80QEKH.js";import"./index-twFNdV4Q.js";import"./index-HCXEAFb2.js";import"./index-obeH4WGW.js";import"./Popover-F3UgQy3P.js";import"./PopupUtils-7oRQuqE1.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-QWf1zPQp.js";import"./FocusableElements-SaTJsZH1.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./BrowserScrollbar.css-aoBbOOT0.js";const a=C("ui5-carousel",["arrowsPlacement","backgroundDesign","itemsPerPageL","itemsPerPageM","itemsPerPageS","pageIndicatorBackgroundDesign","pageIndicatorBorderDesign","pageIndicatorStyle"],["cyclic","hideNavigationArrows","hidePageIndicator"],[],["navigate"],()=>w(()=>import("./Carousel-81JokMKw.js").then(t=>t.d),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]),import.meta.url));a.displayName="Carousel";a.defaultProps={arrowsPlacement:n.Content,backgroundDesign:l.Translucent,itemsPerPageL:1,itemsPerPageM:1,itemsPerPageS:1,pageIndicatorBackgroundDesign:l.Solid,pageIndicatorBorderDesign:b.Solid,pageIndicatorStyle:D.Default};try{a.displayName="Carousel",a.__docgenInfo={description:`The Carousel allows the user to browse through a set of items. The component is mostly used for showing a gallery of images, but can hold any other HTML element.
There are several ways to perform navigation:

*   on desktop - the user can navigate using the navigation arrows or with keyboard shorcuts.
*   on mobile - the user can use swipe gestures.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Carousel)`,displayName:"Carousel",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onNavigate:{defaultValue:null,description:"Fired whenever the page changes due to user interaction, when the user clicks on the navigation arrows or while resizing, based on the `items-per-page-l`, `items-per-page-m` and `items-per-page-s` properties.",name:"onNavigate",required:!1,type:{name:"(event: Ui5CustomEvent<CarouselDomRef, CarouselNavigateEventDetail>) => void"}},arrowsPlacement:{defaultValue:{value:"CarouselArrowsPlacement.Content"},description:`Defines the position of arrows.

Available options are:

*   \`Content\` - the arrows are placed on the sides of the current page.
*   \`Navigation\` - the arrows are placed on the sides of the page indicator.`,name:"arrowsPlacement",required:!1,type:{name:"enum",value:[{value:'"Navigation"'},{value:'"Content"'},{value:'"Navigation"'},{value:'"Content"'}]}},backgroundDesign:{defaultValue:{value:"BackgroundDesign.Translucent"},description:"Defines the carousel's background design.",name:"backgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"Solid"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"Translucent"'},{value:'"Translucent"'}]}},cyclic:{defaultValue:null,description:"Defines whether the carousel should loop, i.e show the first page after the last page is reached and vice versa.",name:"cyclic",required:!1,type:{name:"boolean"}},hideNavigationArrows:{defaultValue:null,description:`Defines the visibility of the navigation arrows. If set to true the navigation arrows will be hidden.

**Note:** The navigation arrows are never displayed on touch devices. In this case, the user can swipe to navigate through the items.`,name:"hideNavigationArrows",required:!1,type:{name:"boolean"}},hidePageIndicator:{defaultValue:null,description:"Defines the visibility of the page indicator. If set to true the page indicator will be hidden.",name:"hidePageIndicator",required:!1,type:{name:"boolean"}},itemsPerPageL:{defaultValue:{value:"1"},description:"Defines the number of items per page on large size (more than 1024px). One item per page shown by default.",name:"itemsPerPageL",required:!1,type:{name:"number"}},itemsPerPageM:{defaultValue:{value:"1"},description:"Defines the number of items per page on medium size (from 640px to 1024px). One item per page shown by default.",name:"itemsPerPageM",required:!1,type:{name:"number"}},itemsPerPageS:{defaultValue:{value:"1"},description:"Defines the number of items per page on small size (up to 640px). One item per page shown by default.",name:"itemsPerPageS",required:!1,type:{name:"number"}},pageIndicatorBackgroundDesign:{defaultValue:{value:"BackgroundDesign.Solid"},description:"Defines the page indicator background design.",name:"pageIndicatorBackgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"Solid"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"Translucent"'},{value:'"Translucent"'}]}},pageIndicatorBorderDesign:{defaultValue:{value:"BorderDesign.Solid"},description:"Defines the page indicator border design.",name:"pageIndicatorBorderDesign",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Solid"'},{value:'"Solid"'},{value:'"None"'}]}},pageIndicatorStyle:{defaultValue:{value:"CarouselPageIndicatorStyle.Default"},description:"Defines the style of the page indicator. Available options are:\n\n*   `Default` - The page indicator will be visualized as dots if there are fewer than 9 pages. If there are more pages, the page indicator will switch to displaying the current page and the total number of pages. (e.g. X of Y)\n*   `Numeric` - The page indicator will display the current page and the total number of pages. (e.g. X of Y)",name:"pageIndicatorStyle",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"Numeric"'},{value:'"Numeric"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const T=`## Usage

### When to use:

- The items you want to display are very different from each other.
- You want to display the items one after the other.

### When not to use:

- The items you want to display need to be visible at the same time.
- The items you want to display are uniform and very similar.

## Keyboard Handling

### Basic Navigation

When the \`Carousel\` is focused the user can navigate between the items with the following keyboard shortcuts:

- \\[UP/DOWN\\] - Navigates to previous and next item
- \\[LEFT/RIGHT\\] - Navigates to previous and next item

## Fast Navigation

This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \`Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up\`. In order to use this functionality, you need to import the following module: \`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`Carousel\` exposes the following CSS Shadow Parts:

- content - Used to style the content of the component
`,N=[{name:"navigateTo",visibility:"public",since:"1.0.0-rc.15",parameters:[{name:"itemIndex",type:"Integer",optional:!1,description:"The index of the target page"}],description:"Changes the currently displayed page."}],m=e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/sample1.jpg",alt:"img-sample 1"}),u=e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/sample2.jpg",alt:"img-sample 2"}),d=e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/sample3.jpg",alt:"img-sample 3"});function _(t={}){const{wrapper:r}=Object.assign({},p(),t.components);return r?e.jsx(r,{...t,children:e.jsx(i,{})}):i();function i(){const s=Object.assign({h2:"h2"},p(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Layouts & Floorplans / Carousel",component:a,argTypes:{children:{control:{disable:!0}}},args:{arrowsPlacement:n.Content}}),`
`,e.jsx(P,{since:"0.9.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"example",children:"Example"}),`
`,e.jsx(f,{children:e.jsx(v,{name:"Default",children:g=>e.jsxs(a,{...g,children:[m,u,d]})})}),`
`,e.jsx(s.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(S,{story:"Default"}),`
`,e.jsx(y,{children:T}),`
`,e.jsx(I,{rows:N}),`
`,e.jsx(x,{})]})}}const c=t=>e.jsxs(a,{...t,children:[m,u,d]});c.storyName="Default";c.parameters={storySource:{source:`args => {
  return <Carousel {...args}>
          {Img1}
          {Img2}
          {Img3}
        </Carousel>;
}`}};const o={title:"Layouts & Floorplans / Carousel",component:a,args:{arrowsPlacement:n.Content},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:_};const tt=["defaultStory"];export{tt as __namedExportsOrder,o as default,c as defaultStory};
//# sourceMappingURL=Carousel.stories-M3TT5lHh.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Carousel-81JokMKw.js","./UI5Element-Y0uzLFOr.js","./i18nBundle-Crssojm_.js","./VersionInfo-hBCHoyLi.js","./CustomElementsScopeUtils-5j4ES8UU.js","./withWebComponent-l-jCeTa1.js","./utils-NoXYr8Q_.js","./index-OjgoNOWw.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./Icon-bdsWWJur.js","./Icons-WRZ8WMWs.js","./slot-HSrR9XJ-.js","./Integer-kog98579.js","./ScrollEnablement-Zd_Qg15H.js","./animate-Pj1TncyK.js","./ResizeHandler-YlQCt_sN.js","./AnimationMode-5Uvzyzlf.js","./i18n-defaults-RBzcmDt8.js","./class-map-kmjzTHDs.js","./style-map-IagzN5gT.js","./slim-arrow-left-AnAvwiX8.js","./slim-arrow-right-SUiVGFkg.js","./Button-2q6zbrjb.js","./AriaLabelHelper-RbKlVwzD.js","./MarkedEvents-aYv14vsS.js","./Label-ZVCbnRu4.js","./WrappingType-avPrqc94.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}