import{M as h,C as f,e as v,b as y}from"./chunk-S4VUQJ4A-494a6b42.js";import{_ as w}from"./iframe-d0043530.js";import{C as n,B as l,a as b,b as D}from"./Carousel-716cf82d.js";import{w as C}from"./withWebComponent-70ea33bf.js";import{A as S}from"./DomRefTable.module-1365df08.js";import{D as P}from"./DocsHeader-b20f9dbe.js";import{F as x}from"./Footer-c6cbac5a.js";import{j as e}from"./jsx-runtime-d079401a.js";import"./index-f1f2c4b1.js";import{D as I}from"./DomRefTable-02dbc698.js";import{u as p}from"./index-59d6410c.js";import"./index-92d824d3.js";import"./index-c74c9f7f.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"../sb-preview/runtime.js";import"./UI5Element-9ae3ac4a.js";import"./CustomElementsScopeUtils-a6667bf6.js";import"./Icon-085ae741.js";import"./Icons-aa504494.js";import"./utils-eb830979.js";import"./slot-76e48863.js";import"./Integer-f7f172c9.js";import"./ScrollEnablement-39ae1891.js";import"./animate-1a16ba20.js";import"./ResizeHandler-a1ba39c5.js";import"./AnimationMode-5a8d55c8.js";import"./i18n-defaults-edeeca68.js";import"./class-map-a35dc276.js";import"./style-map-0570471d.js";import"./slim-arrow-left-21a1b625.js";import"./slim-arrow-right-562fbac6.js";import"./Button-bda40b74.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Label-2351773c.js";import"./WrappingType-b81e595a.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./react-jss.esm-2e5f50f2.js";import"./index-7db0a6f2.js";import"./decline-06bf09c2.js";import"./i18n-defaults-bdef1cce.js";import"./information-31cb56bb.js";import"./alert-f95f2d2e.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-dff384db.js";import"./index-60c0dd2c.js";import"./index-335384f5.js";import"./Avatar-54e46144.js";import"./employee-bd01b92f.js";import"./index-95809ba7.js";import"./index-eefe9625.js";import"./Link-27f41eeb.js";import"./index-65d16a3a.js";import"./TableOfContent-5d39401b.js";import"./index-8ca2e55d.js";import"./index-4284414c.js";import"./index-70ddcfc1.js";import"./Popover-f88acbeb.js";import"./PopupUtils-ebc1cf8a.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-afd5e311.js";import"./FocusableElements-ea9d71fb.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./BrowserScrollbar.css-35e4e851.js";const a=C("ui5-carousel",["arrowsPlacement","backgroundDesign","itemsPerPageL","itemsPerPageM","itemsPerPageS","pageIndicatorBackgroundDesign","pageIndicatorBorderDesign","pageIndicatorStyle"],["cyclic","hideNavigationArrows","hidePageIndicator"],[],["navigate"],()=>w(()=>import("./Carousel-716cf82d.js").then(t=>t.d),["./Carousel-716cf82d.js","./UI5Element-9ae3ac4a.js","./CustomElementsScopeUtils-a6667bf6.js","./withWebComponent-70ea33bf.js","./utils-eb830979.js","./index-f1f2c4b1.js","./jsx-runtime-d079401a.js","./useIsomorphicLayoutEffect-c49de97d.js","./Icon-085ae741.js","./Icons-aa504494.js","./slot-76e48863.js","./Integer-f7f172c9.js","./ScrollEnablement-39ae1891.js","./animate-1a16ba20.js","./ResizeHandler-a1ba39c5.js","./AnimationMode-5a8d55c8.js","./i18n-defaults-edeeca68.js","./class-map-a35dc276.js","./style-map-0570471d.js","./slim-arrow-left-21a1b625.js","./slim-arrow-right-562fbac6.js","./Button-bda40b74.js","./AriaLabelHelper-43a261ec.js","./MarkedEvents-b83081e9.js","./Label-2351773c.js","./WrappingType-b81e595a.js"],import.meta.url));a.displayName="Carousel";a.defaultProps={arrowsPlacement:n.Content,backgroundDesign:l.Translucent,itemsPerPageL:1,itemsPerPageM:1,itemsPerPageS:1,pageIndicatorBackgroundDesign:l.Solid,pageIndicatorBorderDesign:b.Solid,pageIndicatorStyle:D.Default};try{a.displayName="Carousel",a.__docgenInfo={description:`The Carousel allows the user to browse through a set of items. The component is mostly used for showing a gallery of images, but can hold any other HTML element.
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
}`}};const o={title:"Layouts & Floorplans / Carousel",component:a,args:{arrowsPlacement:n.Content},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:_};const Ge=["defaultStory"];export{Ge as __namedExportsOrder,o as default,c as defaultStory};
//# sourceMappingURL=Carousel.stories-8724aa47.js.map
