import"./Carousel-DpkMLF5i.js";import{w as n}from"./jsx-runtime-CkEx_Gfk.js";const e=n("ui5-carousel",["accessibleName","accessibleNameRef","arrowsPlacement","backgroundDesign","itemsPerPage","pageIndicatorBackgroundDesign","pageIndicatorBorderDesign","pageIndicatorType"],["cyclic","hideNavigationArrows","hidePageIndicator"],[],["navigate"]);e.displayName="Carousel";try{e.displayName="Carousel",e.__docgenInfo={description:`The Carousel allows the user to browse through a set of items.
The component is mostly used for showing a gallery of images, but can hold any other HTML element.

There are several ways to perform navigation:

- on desktop - the user can navigate using the navigation arrows or with keyboard shortcuts.
- on touch devices - the user can navigate using the navigation arrows (always visible) or can use swipe gestures.

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



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Carousel",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onNavigate:{defaultValue:null,description:`Fired whenever the page changes due to user interaction,
when the user clicks on the navigation arrows or while resizing,
based on the \`items-per-page\` property.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onNavigate",required:!1,type:{name:"(event: Ui5CustomEvent<CarouselDomRef, CarouselNavigateEventDetail>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the accessible name of the component.

**Note:** Available since [v1.24](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Defines the IDs of the elements that label the input.

**Note:** Available since [v1.24](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},arrowsPlacement:{defaultValue:{value:'"Content"'},description:`Defines the position of arrows.

Available options are:

- \`Content\` - the arrows are placed on the sides of the current page.
- \`Navigation\` - the arrows are placed on the sides of the page indicator.`,name:"arrowsPlacement",required:!1,type:{name:"enum",value:[{value:'"Navigation"'},{value:'"Content"'},{value:'"Navigation"'},{value:'"Content"'}]}},backgroundDesign:{defaultValue:{value:'"Translucent"'},description:`Defines the carousel's background design.

**Note:** Available since [v1.14](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.14) of **@ui5/webcomponents**.`,name:"backgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"Solid"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"Translucent"'},{value:'"Translucent"'}]}},cyclic:{defaultValue:{value:"false"},description:"Defines whether the carousel should loop, i.e show the first page after the last page is reached and vice versa.",name:"cyclic",required:!1,type:{name:"boolean"}},hideNavigationArrows:{defaultValue:{value:"false"},description:`Defines the visibility of the navigation arrows.
If set to true the navigation arrows will be hidden.`,name:"hideNavigationArrows",required:!1,type:{name:"boolean"}},hidePageIndicator:{defaultValue:{value:"false"},description:`Defines the visibility of the page indicator.
If set to true the page indicator will be hidden.`,name:"hidePageIndicator",required:!1,type:{name:"boolean"}},itemsPerPage:{defaultValue:{value:'"S1 M1 L1 XL1"'},description:`Defines the number of items per page depending on the carousel width.

- 'S' for screens smaller than 600 pixels.
- 'M' for screens greater than or equal to 600 pixels and smaller than 1024 pixels.
- 'L' for screens greater than or equal to 1024 pixels and smaller than 1440 pixels.
- 'XL' for screens greater than or equal to 1440 pixels.

One item per page is shown by default.`,name:"itemsPerPage",required:!1,type:{name:"string"}},pageIndicatorBackgroundDesign:{defaultValue:{value:'"Solid"'},description:`Defines the page indicator background design.

**Note:** Available since [v1.14](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.14) of **@ui5/webcomponents**.`,name:"pageIndicatorBackgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"Solid"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"Translucent"'},{value:'"Translucent"'}]}},pageIndicatorBorderDesign:{defaultValue:{value:'"Solid"'},description:`Defines the page indicator border design.

**Note:** Available since [v1.14](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.14) of **@ui5/webcomponents**.`,name:"pageIndicatorBorderDesign",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Solid"'},{value:'"Solid"'},{value:'"None"'}]}},pageIndicatorType:{defaultValue:{value:'"Default"'},description:`Defines the style of the page indicator.
Available options are:

- \`Default\` - The page indicator will be visualized as dots if there are fewer than 9 pages. If there are more pages, the page indicator will switch to displaying the current page and the total number of pages. (e.g. X of Y)
- \`Numeric\` - The page indicator will display the current page and the total number of pages. (e.g. X of Y)

**Note:** Available since [v1.10](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10) of **@ui5/webcomponents**.`,name:"pageIndicatorType",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"Numeric"'},{value:'"Numeric"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="Carousel",e.__docgenInfo={description:`The Carousel allows the user to browse through a set of items.
The component is mostly used for showing a gallery of images, but can hold any other HTML element.

There are several ways to perform navigation:

- on desktop - the user can navigate using the navigation arrows or with keyboard shortcuts.
- on touch devices - the user can navigate using the navigation arrows (always visible) or can use swipe gestures.

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



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Carousel",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onNavigate:{defaultValue:null,description:`Fired whenever the page changes due to user interaction,
when the user clicks on the navigation arrows or while resizing,
based on the \`items-per-page\` property.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onNavigate",required:!1,type:{name:"(event: Ui5CustomEvent<CarouselDomRef, CarouselNavigateEventDetail>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the accessible name of the component.

**Note:** Available since [v1.24](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:`Defines the IDs of the elements that label the input.

**Note:** Available since [v1.24](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},arrowsPlacement:{defaultValue:{value:'"Content"'},description:`Defines the position of arrows.

Available options are:

- \`Content\` - the arrows are placed on the sides of the current page.
- \`Navigation\` - the arrows are placed on the sides of the page indicator.`,name:"arrowsPlacement",required:!1,type:{name:"enum",value:[{value:'"Navigation"'},{value:'"Content"'},{value:'"Navigation"'},{value:'"Content"'}]}},backgroundDesign:{defaultValue:{value:'"Translucent"'},description:`Defines the carousel's background design.

**Note:** Available since [v1.14](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.14) of **@ui5/webcomponents**.`,name:"backgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"Solid"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"Translucent"'},{value:'"Translucent"'}]}},cyclic:{defaultValue:{value:"false"},description:"Defines whether the carousel should loop, i.e show the first page after the last page is reached and vice versa.",name:"cyclic",required:!1,type:{name:"boolean"}},hideNavigationArrows:{defaultValue:{value:"false"},description:`Defines the visibility of the navigation arrows.
If set to true the navigation arrows will be hidden.`,name:"hideNavigationArrows",required:!1,type:{name:"boolean"}},hidePageIndicator:{defaultValue:{value:"false"},description:`Defines the visibility of the page indicator.
If set to true the page indicator will be hidden.`,name:"hidePageIndicator",required:!1,type:{name:"boolean"}},itemsPerPage:{defaultValue:{value:'"S1 M1 L1 XL1"'},description:`Defines the number of items per page depending on the carousel width.

- 'S' for screens smaller than 600 pixels.
- 'M' for screens greater than or equal to 600 pixels and smaller than 1024 pixels.
- 'L' for screens greater than or equal to 1024 pixels and smaller than 1440 pixels.
- 'XL' for screens greater than or equal to 1440 pixels.

One item per page is shown by default.`,name:"itemsPerPage",required:!1,type:{name:"string"}},pageIndicatorBackgroundDesign:{defaultValue:{value:'"Solid"'},description:`Defines the page indicator background design.

**Note:** Available since [v1.14](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.14) of **@ui5/webcomponents**.`,name:"pageIndicatorBackgroundDesign",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"Solid"'},{value:'"Solid"'},{value:'"Transparent"'},{value:'"Translucent"'},{value:'"Translucent"'}]}},pageIndicatorBorderDesign:{defaultValue:{value:'"Solid"'},description:`Defines the page indicator border design.

**Note:** Available since [v1.14](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.14) of **@ui5/webcomponents**.`,name:"pageIndicatorBorderDesign",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Solid"'},{value:'"Solid"'},{value:'"None"'}]}},pageIndicatorType:{defaultValue:{value:'"Default"'},description:`Defines the style of the page indicator.
Available options are:

- \`Default\` - The page indicator will be visualized as dots if there are fewer than 9 pages. If there are more pages, the page indicator will switch to displaying the current page and the total number of pages. (e.g. X of Y)
- \`Numeric\` - The page indicator will display the current page and the total number of pages. (e.g. X of Y)

**Note:** Available since [v1.10](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10) of **@ui5/webcomponents**.`,name:"pageIndicatorType",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"Numeric"'},{value:'"Numeric"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as C};
