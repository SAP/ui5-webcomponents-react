import{j as e,a as s,F as N}from"./jsx-runtime-670450c2.js";import{T as n}from"./ThemingParameters-f4b4144e.js";import{T as a}from"./index-479d8097.js";import{c as k}from"./clsx.m-1229b3e0.js";import{r as S}from"./index-f1f749bf.js";import{c as A}from"./react-jss.esm-2e28eff7.js";const _={container:{display:"grid"},["@media (max-width: 599px)"]:{container:{gridTemplateColumns:"repeat(var(--_ui5wcr-rgl-columns-s), minmax(0, 1fr))","& > *":{gridColumn:"span var(--_ui5wcr-rgl-column-span-s)"}}},["@media (min-width: 600px) and (max-width: 1023px)"]:{container:{gridTemplateColumns:"repeat(var(--_ui5wcr-rgl-columns-m), minmax(0, 1fr))","& > *":{gridColumn:"span var(--_ui5wcr-rgl-column-span-m)"}}},["@media (min-width: 1024px) and (max-width: 1439px)"]:{container:{gridTemplateColumns:"repeat(var(--_ui5wcr-rgl-columns-l), minmax(0, 1fr))","& > *":{gridColumn:"span var(--_ui5wcr-rgl-column-span-l)"}}},["@media (min-width: 1440px)"]:{container:{gridTemplateColumns:"repeat(var(--_ui5wcr-rgl-columns-xl), minmax(0, 1fr))","& > *":{gridColumn:"span var(--_ui5wcr-rgl-column-span-xl)"}}}},P=A(_,{name:"ResponsiveGridLayout"}),o=S.forwardRef((l,m)=>{const{children:d,columnGap:u="0.5rem",rowGap:p="0.5rem",columnsS:y=4,columnsM:g=8,columnsL:h=12,columnsXL:v=16,columnSpanS:b=1,columnSpanM:C=1,columnSpanL:I=1,columnSpanXL:x=1,style:f,className:T,...w}=l,L=P(),G=k(L.container,T);return e("div",{ref:m,className:G,style:{gridRowGap:p,gridColumnGap:u,"--_ui5wcr-rgl-columns-s":y,"--_ui5wcr-rgl-columns-m":g,"--_ui5wcr-rgl-columns-l":h,"--_ui5wcr-rgl-columns-xl":v,"--_ui5wcr-rgl-column-span-s":b,"--_ui5wcr-rgl-column-span-m":C,"--_ui5wcr-rgl-column-span-l":I,"--_ui5wcr-rgl-column-span-xl":x,...f},...w,children:d})});o.displayName="ResponsiveGridLayout";try{o.displayName="ResponsiveGridLayout",o.__docgenInfo={description:`The Responsive Grid Layout positions UI elements in a multi-column flow layout.
They can be configured to display a variable number of columns depending on available screen size.
With these controls, it is possible to achieve flexible layouts and line breaks for large, medium,
and small-sized screens, such as desktop, tablet, and mobile.`,displayName:"ResponsiveGridLayout",props:{columnsS:{defaultValue:null,description:"Number of columns to show on small screens (`max-width: 599px`)",name:"columnsS",required:!1,type:{name:"number"}},columnsM:{defaultValue:null,description:"Number of columns to show on medium screens (`width >= 600px and width <=1023px`)",name:"columnsM",required:!1,type:{name:"number"}},columnsL:{defaultValue:null,description:"Number of columns to show on large screens (`width >= 1024px and width <=1439px`)",name:"columnsL",required:!1,type:{name:"number"}},columnsXL:{defaultValue:null,description:"Number of columns to show on extra large screens (`min-width: 1440px`)",name:"columnsXL",required:!1,type:{name:"number"}},columnSpanS:{defaultValue:null,description:"Defines how many columns a single child should cover on small screens.",name:"columnSpanS",required:!1,type:{name:"number"}},columnSpanM:{defaultValue:null,description:"Defines how many columns a single child should cover on medium screens.",name:"columnSpanM",required:!1,type:{name:"number"}},columnSpanL:{defaultValue:null,description:"Defines how many columns a single child should cover on large screens.",name:"columnSpanL",required:!1,type:{name:"number"}},columnSpanXL:{defaultValue:null,description:"Defines how many columns a single child should cover on extra large.",name:"columnSpanXL",required:!1,type:{name:"number"}},columnGap:{defaultValue:null,description:"Gap between two columns of the grid",name:"columnGap",required:!1,type:{name:"enum",value:[{value:'"0.5rem"'},{value:'"1rem"'}]}},rowGap:{defaultValue:null,description:"Gap between two rows of the grid",name:"rowGap",required:!1,type:{name:"enum",value:[{value:'"0.5rem"'},{value:'"1rem"'}]}},children:{defaultValue:null,description:`Child elements to be placed inside the grid. In case you want to control the column span of each child independently,
you can add an element style using the [gridColumn shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column).

Example: If you want one child to span across 4 columns, you can add this element style to the child element:
\`style={{ gridColumn: 'span 4' }}\``,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const q={title:"Layouts & Floorplans / ResponsiveGridLayout",component:o,argTypes:{children:{control:{disable:!0}}}},r={args:{children:s(N,{children:[s("div",{style:{gridColumn:"span 2",background:n.sapAccentColor1},className:"responsiveGridLayoutItem",children:[e(a,{children:"Item 1"}),e("br",{}),e("code",{children:"style={{ gridColumn: 'span 2' }}"})]}),s("div",{style:{gridColumn:"span 3",background:n.sapAccentColor2},className:"responsiveGridLayoutItem",children:[e(a,{children:"Item 2"}),e("br",{}),e("code",{children:"style={{ gridColumn: 'span 3' }}"})]}),s("div",{style:{gridColumn:"span 4",background:n.sapAccentColor3},className:"responsiveGridLayoutItem",children:[e(a,{children:"Item 3"}),e("br",{}),e("code",{children:"style={{ gridColumn: 'span 4' }}"})]}),s("div",{style:{gridColumn:"span 5",background:n.sapAccentColor4},className:"responsiveGridLayoutItem",children:[e(a,{children:"Item 4"}),e("br",{}),e("code",{children:"style={{ gridColumn: 'span 5' }}"})]}),e("div",{style:{background:n.sapAccentColor5},className:"responsiveGridLayoutItem",children:e(a,{children:"Item 5"})}),e("div",{style:{background:n.sapAccentColor6},className:"responsiveGridLayoutItem",children:e(a,{children:"Item 6"})}),e("div",{style:{background:n.sapAccentColor7},className:"responsiveGridLayoutItem",children:e(a,{children:"Item 7"})}),s("div",{style:{gridColumn:"span 4",background:n.sapAccentColor8},className:"responsiveGridLayoutItem",children:[e(a,{children:"Item 8"}),e("br",{}),e("code",{children:"style={{ gridColumn: 'span 4' }}"})]}),e("div",{style:{background:n.sapAccentColor9},className:"responsiveGridLayoutItem",children:e(a,{children:"Item 9"})}),e("div",{style:{background:n.sapAccentColor10},className:"responsiveGridLayoutItem",children:e(a,{children:"Item 10"})}),e("div",{style:{background:n.sapAccentColor1},className:"responsiveGridLayoutItem",children:e(a,{children:"Item 11"})}),e("div",{style:{background:n.sapAccentColor2},className:"responsiveGridLayoutItem",children:e(a,{children:"Item 12"})}),e("div",{style:{background:n.sapAccentColor3},className:"responsiveGridLayoutItem",children:e(a,{children:"Item 13"})}),e("div",{style:{background:n.sapAccentColor4},className:"responsiveGridLayoutItem",children:e(a,{children:"Item 14"})}),e("div",{style:{background:n.sapAccentColor5},className:"responsiveGridLayoutItem",children:e(a,{children:"Item 15"})}),e("div",{style:{background:n.sapAccentColor6},className:"responsiveGridLayoutItem",children:e(a,{children:"Item 16"})})]})}};var t,i,c;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: <>
        <div style={{
        gridColumn: 'span 2',
        background: ThemingParameters.sapAccentColor1
      }} className="responsiveGridLayoutItem">
          <Text>Item 1</Text>
          <br />
          <code>{\`style={{ gridColumn: 'span 2' }}\`}</code>
        </div>
        <div style={{
        gridColumn: 'span 3',
        background: ThemingParameters.sapAccentColor2
      }} className="responsiveGridLayoutItem">
          <Text>Item 2</Text>
          <br />
          <code>{\`style={{ gridColumn: 'span 3' }}\`}</code>
        </div>
        <div style={{
        gridColumn: 'span 4',
        background: ThemingParameters.sapAccentColor3
      }} className="responsiveGridLayoutItem">
          <Text>Item 3</Text>
          <br />
          <code>{\`style={{ gridColumn: 'span 4' }}\`}</code>
        </div>
        <div style={{
        gridColumn: 'span 5',
        background: ThemingParameters.sapAccentColor4
      }} className="responsiveGridLayoutItem">
          <Text>Item 4</Text>
          <br />
          <code>{\`style={{ gridColumn: 'span 5' }}\`}</code>
        </div>
        <div style={{
        background: ThemingParameters.sapAccentColor5
      }} className="responsiveGridLayoutItem">
          <Text>Item 5</Text>
        </div>
        <div style={{
        background: ThemingParameters.sapAccentColor6
      }} className="responsiveGridLayoutItem">
          <Text>Item 6</Text>
        </div>
        <div style={{
        background: ThemingParameters.sapAccentColor7
      }} className="responsiveGridLayoutItem">
          <Text>Item 7</Text>
        </div>
        <div style={{
        gridColumn: 'span 4',
        background: ThemingParameters.sapAccentColor8
      }} className="responsiveGridLayoutItem">
          <Text>Item 8</Text>
          <br />
          <code>{\`style={{ gridColumn: 'span 4' }}\`}</code>
        </div>
        <div style={{
        background: ThemingParameters.sapAccentColor9
      }} className="responsiveGridLayoutItem">
          <Text>Item 9</Text>
        </div>
        <div style={{
        background: ThemingParameters.sapAccentColor10
      }} className="responsiveGridLayoutItem">
          <Text>Item 10</Text>
        </div>
        <div style={{
        background: ThemingParameters.sapAccentColor1
      }} className="responsiveGridLayoutItem">
          <Text>Item 11</Text>
        </div>
        <div style={{
        background: ThemingParameters.sapAccentColor2
      }} className="responsiveGridLayoutItem">
          <Text>Item 12</Text>
        </div>
        <div style={{
        background: ThemingParameters.sapAccentColor3
      }} className="responsiveGridLayoutItem">
          <Text>Item 13</Text>
        </div>
        <div style={{
        background: ThemingParameters.sapAccentColor4
      }} className="responsiveGridLayoutItem">
          <Text>Item 14</Text>
        </div>
        <div style={{
        background: ThemingParameters.sapAccentColor5
      }} className="responsiveGridLayoutItem">
          <Text>Item 15</Text>
        </div>
        <div style={{
        background: ThemingParameters.sapAccentColor6
      }} className="responsiveGridLayoutItem">
          <Text>Item 16</Text>
        </div>
      </>
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const V=["Default"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:V,default:q},Symbol.toStringTag,{value:"Module"}));export{z as C,r as D};
//# sourceMappingURL=ResponsiveGridLayout.stories-a1188f8b.js.map
