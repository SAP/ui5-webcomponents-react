import{j as e,a as s,F as N}from"./jsx-runtime-670450c2.js";import{T as a}from"./ThemingParameters-f4b4144e.js";import{c as S}from"./clsx.m-1229b3e0.js";import{r as k}from"./index-f1f749bf.js";import{c as A}from"./react-jss.esm-e54d2f1d.js";import{T as n}from"./index-2eaff221.js";const _={container:{display:"grid"},["@media (max-width: 599px)"]:{container:{gridTemplateColumns:"repeat(var(--_ui5wcr-rgl-columns-s), minmax(0, 1fr))","& > *":{gridColumn:"span var(--_ui5wcr-rgl-column-span-s)"}}},["@media (min-width: 600px) and (max-width: 1023px)"]:{container:{gridTemplateColumns:"repeat(var(--_ui5wcr-rgl-columns-m), minmax(0, 1fr))","& > *":{gridColumn:"span var(--_ui5wcr-rgl-column-span-m)"}}},["@media (min-width: 1024px) and (max-width: 1439px)"]:{container:{gridTemplateColumns:"repeat(var(--_ui5wcr-rgl-columns-l), minmax(0, 1fr))","& > *":{gridColumn:"span var(--_ui5wcr-rgl-column-span-l)"}}},["@media (min-width: 1440px)"]:{container:{gridTemplateColumns:"repeat(var(--_ui5wcr-rgl-columns-xl), minmax(0, 1fr))","& > *":{gridColumn:"span var(--_ui5wcr-rgl-column-span-xl)"}}}},P=A(_,{name:"ResponsiveGridLayout"}),o=k.forwardRef((l,c)=>{const{children:d,columnGap:u,rowGap:p,columnsS:y,columnsM:g,columnsL:h,columnsXL:v,columnSpanS:b,columnSpanM:C,columnSpanL:f,columnSpanXL:I,style:x,className:T,...L}=l,w=P(),G=S(w.container,T);return e("div",{ref:c,className:G,style:{gridRowGap:p,gridColumnGap:u,"--_ui5wcr-rgl-columns-s":y,"--_ui5wcr-rgl-columns-m":g,"--_ui5wcr-rgl-columns-l":h,"--_ui5wcr-rgl-columns-xl":v,"--_ui5wcr-rgl-column-span-s":b,"--_ui5wcr-rgl-column-span-m":C,"--_ui5wcr-rgl-column-span-l":f,"--_ui5wcr-rgl-column-span-xl":I,...x},...L,children:d})});o.displayName="ResponsiveGridLayout";o.defaultProps={columnGap:"0.5rem",rowGap:"0.5rem",columnsS:4,columnsM:8,columnsL:12,columnsXL:16,columnSpanS:1,columnSpanM:1,columnSpanL:1,columnSpanXL:1};try{o.displayName="ResponsiveGridLayout",o.__docgenInfo={description:`The Responsive Grid Layout positions UI elements in a multi column flow layout.
They can be configured to display a variable number of columns depending on available screen size.
With these controls, it is possible to achieve flexible layouts and line breaks for large, medium,
and small-sized screens, such as desktop, tablet, and mobile.`,displayName:"ResponsiveGridLayout",props:{columnsS:{defaultValue:{value:"4"},description:"Number of columns to show on small screens (`max-width: 599px`)",name:"columnsS",required:!1,type:{name:"number"}},columnsM:{defaultValue:{value:"8"},description:"Number of columns to show on medium screens (`width >= 600px and width <=1023px`)",name:"columnsM",required:!1,type:{name:"number"}},columnsL:{defaultValue:{value:"12"},description:"Number of columns to show on large screens (`width >= 1024px and width <=1439px`)",name:"columnsL",required:!1,type:{name:"number"}},columnsXL:{defaultValue:{value:"16"},description:"Number of columns to show on extra large screens (`min-width: 1440px`)",name:"columnsXL",required:!1,type:{name:"number"}},columnSpanS:{defaultValue:{value:"1"},description:"Defines how many columns a single child should cover on small screens.",name:"columnSpanS",required:!1,type:{name:"number"}},columnSpanM:{defaultValue:{value:"1"},description:"Defines how many columns a single child should cover on medium screens.",name:"columnSpanM",required:!1,type:{name:"number"}},columnSpanL:{defaultValue:{value:"1"},description:"Defines how many columns a single child should cover on large screens.",name:"columnSpanL",required:!1,type:{name:"number"}},columnSpanXL:{defaultValue:{value:"1"},description:"Defines how many columns a single child should cover on extra large.",name:"columnSpanXL",required:!1,type:{name:"number"}},columnGap:{defaultValue:{value:"0.5rem"},description:"Gap between two columns of the grid",name:"columnGap",required:!1,type:{name:"enum",value:[{value:'"0.5rem"'},{value:'"1rem"'}]}},rowGap:{defaultValue:{value:"0.5rem"},description:"Gap between two rows of the grid",name:"rowGap",required:!1,type:{name:"enum",value:[{value:'"0.5rem"'},{value:'"1rem"'}]}},children:{defaultValue:null,description:`Child elements to be placed inside of the grid. In case you want to control the column span of each child independently,
you can add an element style using the [gridColumn shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column).

Example: If you want one child to span across 4 columns, you can add this element style to the child element:
\`style={{ gridColumn: 'span 4' }}\``,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const q={title:"Layouts & Floorplans / ResponsiveGridLayout",component:o,argTypes:{children:{control:{disable:!0}}}},r={args:{children:s(N,{children:[s("div",{style:{gridColumn:"span 2",background:a.sapAccentColor1},className:"responsiveGridLayoutItem",children:[e(n,{children:"Item 1"}),e("br",{}),e("code",{children:"style={{ gridColumn: 'span 2' }}"})]}),s("div",{style:{gridColumn:"span 3",background:a.sapAccentColor2},className:"responsiveGridLayoutItem",children:[e(n,{children:"Item 2"}),e("br",{}),e("code",{children:"style={{ gridColumn: 'span 3' }}"})]}),s("div",{style:{gridColumn:"span 4",background:a.sapAccentColor3},className:"responsiveGridLayoutItem",children:[e(n,{children:"Item 3"}),e("br",{}),e("code",{children:"style={{ gridColumn: 'span 4' }}"})]}),s("div",{style:{gridColumn:"span 5",background:a.sapAccentColor4},className:"responsiveGridLayoutItem",children:[e(n,{children:"Item 4"}),e("br",{}),e("code",{children:"style={{ gridColumn: 'span 5' }}"})]}),e("div",{style:{background:a.sapAccentColor5},className:"responsiveGridLayoutItem",children:e(n,{children:"Item 5"})}),e("div",{style:{background:a.sapAccentColor6},className:"responsiveGridLayoutItem",children:e(n,{children:"Item 6"})}),e("div",{style:{background:a.sapAccentColor7},className:"responsiveGridLayoutItem",children:e(n,{children:"Item 7"})}),s("div",{style:{gridColumn:"span 4",background:a.sapAccentColor8},className:"responsiveGridLayoutItem",children:[e(n,{children:"Item 8"}),e("br",{}),e("code",{children:"style={{ gridColumn: 'span 4' }}"})]}),e("div",{style:{background:a.sapAccentColor9},className:"responsiveGridLayoutItem",children:e(n,{children:"Item 9"})}),e("div",{style:{background:a.sapAccentColor10},className:"responsiveGridLayoutItem",children:e(n,{children:"Item 10"})}),e("div",{style:{background:a.sapAccentColor1},className:"responsiveGridLayoutItem",children:e(n,{children:"Item 11"})}),e("div",{style:{background:a.sapAccentColor2},className:"responsiveGridLayoutItem",children:e(n,{children:"Item 12"})}),e("div",{style:{background:a.sapAccentColor3},className:"responsiveGridLayoutItem",children:e(n,{children:"Item 13"})}),e("div",{style:{background:a.sapAccentColor4},className:"responsiveGridLayoutItem",children:e(n,{children:"Item 14"})}),e("div",{style:{background:a.sapAccentColor5},className:"responsiveGridLayoutItem",children:e(n,{children:"Item 15"})}),e("div",{style:{background:a.sapAccentColor6},className:"responsiveGridLayoutItem",children:e(n,{children:"Item 16"})})]})}};var t,i,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const V=["Default"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:V,default:q},Symbol.toStringTag,{value:"Module"}));export{z as C,r as D};
//# sourceMappingURL=ResponsiveGridLayout.stories-8d277849.js.map
