import{M as g,C as f,i as y,a as w}from"./index-08f5a92a.js";import{_ as v}from"./iframe-baaa6734.js";import{C as r,a as b}from"./Carousel-a17744c5.js";import{w as C}from"./withWebComponent-63dd52a0.js";import{A as P}from"./DomRefTable.module-bd2f6310.js";import{D as S}from"./DocsHeader-7b277ff6.js";import{F as D}from"./Footer-a200614f.js";import{j as e,a as n,F as N}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{D as _}from"./DomRefTable-693c15e9.js";import{u as m}from"./index-4fb8b842.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"../sb-preview/runtime.mjs";import"./UI5Element-727d48d7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./AriaLabelHelper-dee23f38.js";import"./MarkedEvents-f33713fa.js";import"./fastNavigation-ebf07f1c.js";import"./Integer-a72984d1.js";import"./class-map-abcca105.js";import"./utils-ed90fb1b.js";import"./FocusableElements-5a723910.js";import"./Keys-50a1cb5a.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-c56abc92.js";import"./MediaRange-25b98f31.js";import"./style-map-7b3eb5df.js";import"./ScrollEnablement-fd5196de.js";import"./animate-1a16ba20.js";import"./AnimationMode-5c67d19b.js";import"./Button-e1b15b5b.js";import"./Icons-5bcf1e3f.js";import"./slim-arrow-left-1b0d26d1.js";import"./slim-arrow-right-a1b07349.js";import"./Label-6707bdfc.js";import"./WrappingType-b81e595a.js";import"./chunk-4XCFV5WA-12e22cb0.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./index-c79180df.js";import"./decline-ff534003.js";import"./index-6923d62a.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-e249b0b6.js";import"./TableOfContent-b905a526.js";import"./index-1220256a.js";import"./index-998f859a.js";import"./Media-6b270b80.js";import"./index-65416cbf.js";import"./Popover-5336e3a5.js";const a=C("ui5-carousel",["arrowsPlacement","itemsPerPageL","itemsPerPageM","itemsPerPageS","pageIndicatorStyle"],["cyclic","hideNavigationArrows","hidePageIndicator"],[],["navigate"],()=>v(()=>import("./Carousel-a17744c5.js").then(t=>t.c),["./Carousel-a17744c5.js","./UI5Element-727d48d7.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-63dd52a0.js","./utils-ed90fb1b.js","./jsx-runtime-670450c2.js","./AriaLabelHelper-dee23f38.js","./MarkedEvents-f33713fa.js","./fastNavigation-ebf07f1c.js","./Integer-a72984d1.js","./class-map-abcca105.js","./FocusableElements-5a723910.js","./Keys-50a1cb5a.js","./getActiveElement-bcae01ed.js","./ResizeHandler-c56abc92.js","./MediaRange-25b98f31.js","./style-map-7b3eb5df.js","./ScrollEnablement-fd5196de.js","./animate-1a16ba20.js","./AnimationMode-5c67d19b.js","./Button-e1b15b5b.js","./Icons-5bcf1e3f.js","./slim-arrow-left-1b0d26d1.js","./slim-arrow-right-a1b07349.js","./Label-6707bdfc.js","./WrappingType-b81e595a.js"],import.meta.url));a.displayName="Carousel";a.defaultProps={arrowsPlacement:r.Content,itemsPerPageL:1,itemsPerPageM:1,itemsPerPageS:1,pageIndicatorStyle:b.Default};try{a.displayName="Carousel",a.__docgenInfo={description:`The Carousel allows the user to browse through a set of items. The component is mostly used for showing a gallery of images, but can hold any other HTML element.
There are several ways to perform navigation:

*   on desktop - the user can navigate using the navigation arrows or with keyboard shorcuts.
*   on mobile - the user can use swipe gestures.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Carousel" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"Carousel",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onNavigate:{defaultValue:null,description:"Fired whenever the page changes due to user interaction, when the user clicks on the navigation arrows or while resizing, based on the `items-per-page-l`, `items-per-page-m` and `items-per-page-s` properties.",name:"onNavigate",required:!1,type:{name:"(event: Ui5CustomEvent<CarouselDomRef, { selectedIndex: number; }>) => void"}},arrowsPlacement:{defaultValue:{value:"CarouselArrowsPlacement.Content"},description:`Defines the position of arrows.

Available options are:

*   \`Content\`
*   \`Navigation\`


When set to "Content", the arrows are placed on the sides of the current page.
When set to "Navigation", the arrows are placed on the sides of the page indicator.`,name:"arrowsPlacement",required:!1,type:{name:"enum",value:[{value:'"Navigation"'},{value:'"Content"'},{value:'"Navigation"'},{value:'"Content"'}]}},cyclic:{defaultValue:null,description:"Defines whether the carousel should loop, i.e show the first page after the last page is reached and vice versa.",name:"cyclic",required:!1,type:{name:"boolean"}},hideNavigationArrows:{defaultValue:null,description:`Defines the visibility of the navigation arrows. If set to true the navigation arrows will be hidden.

**Note:** The navigation arrows are never displayed on touch devices. In this case, the user can swipe to navigate through the items.`,name:"hideNavigationArrows",required:!1,type:{name:"boolean"}},hidePageIndicator:{defaultValue:null,description:"Defines the visibility of the page indicator. If set to true the page indicator will be hidden.",name:"hidePageIndicator",required:!1,type:{name:"boolean"}},itemsPerPageL:{defaultValue:{value:"1"},description:"Defines the number of items per page on large size (more than 1024px). One item per page shown by default.",name:"itemsPerPageL",required:!1,type:{name:"number"}},itemsPerPageM:{defaultValue:{value:"1"},description:"Defines the number of items per page on medium size (from 640px to 1024px). One item per page shown by default.",name:"itemsPerPageM",required:!1,type:{name:"number"}},itemsPerPageS:{defaultValue:{value:"1"},description:"Defines the number of items per page on small size (up to 640px). One item per page shown by default.",name:"itemsPerPageS",required:!1,type:{name:"number"}},pageIndicatorStyle:{defaultValue:{value:"CarouselPageIndicatorStyle.Default"},description:"Defines the style of the page indicator. Available options are:\n\n*   `Default` - The page indicator will be visualized as dots if there are fewer than 9 pages. If there are more pages, the page indicator will switch to displaying the current page and the total number of pages. (e.g. X of Y)\n*   `Numeric` - The page indicator will display the current page and the total number of pages. (e.g. X of Y)",name:"pageIndicatorStyle",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"Numeric"'},{value:'"Numeric"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const I=`## Usage

### When to use:

*   The items you want to display are very different from each other.
*   You want to display the items one after the other.

### When not to use:

*   The items you want to display need to be visible at the same time.
*   The items you want to display are uniform and very similar.

## Keyboard Handling

### Basic Navigation

When the \`Carousel\` is focused the user can navigate between the items with the following keyboard shortcuts:  

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`Carousel\` exposes the following CSS Shadow Parts:

*   content - Used to style the content of the component

\\*

### Fast Navigation

This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \`Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up\`. In order to use this functionality, you need to import the following module: \`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`  
  

*   \\[UP/DOWN\\] - Navigates to previous and next item
*   \\[LEFT/RIGHT\\] - Navigates to previous and next item`,T=[{name:"navigateTo",visibility:"public",since:"1.0.0-rc.15",parameters:[{name:"itemIndex",type:"Integer",optional:!1,description:"The index of the target page"}],description:"Changes the currently displayed page."}],p=e("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/sample1.jpg",alt:"img-sample 1"}),u=e("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/sample2.jpg",alt:"img-sample 2"}),d=e("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/sample3.jpg",alt:"img-sample 3"});function x(t={}){const{wrapper:i}=Object.assign({},m(),t.components);return i?e(i,{...t,children:e(s,{})}):s();function s(){const l=Object.assign({h2:"h2"},m(),t.components);return n(N,{children:[e(g,{title:"Layouts & Floorplans / Carousel",component:a,argTypes:{children:{control:{disable:!0}}},args:{arrowsPlacement:r.Content}}),`
`,e(S,{since:"0.9.0"}),`
`,e("br",{}),`
`,e(l.h2,{children:"Example"}),`
`,e(f,{children:e(y,{name:"Default",children:h=>n(a,{...h,children:[p,u,d]})})}),`
`,e(l.h2,{children:"Properties"}),`
`,e(P,{story:"Default"}),`
`,e(w,{children:I}),`
`,e(_,{rows:T}),`
`,e(D,{})]})}}const c=t=>n(a,{...t,children:[p,u,d]});c.storyName="Default";c.parameters={storySource:{source:`args => {
  return <Carousel {...args}>
          {Img1}
          {Img2}
          {Img3}
        </Carousel>;
}`}};const o={title:"Layouts & Floorplans / Carousel",component:a,args:{arrowsPlacement:r.Content},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:x};const Le=["defaultStory"];export{Le as __namedExportsOrder,o as default,c as defaultStory};
//# sourceMappingURL=Carousel.stories-3e624233.js.map
