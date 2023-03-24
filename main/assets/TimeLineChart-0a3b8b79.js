import{j as t,a as n,F as l}from"./jsx-runtime-670450c2.js";import{C as c}from"./DomRefTable.module-c9ff9176.js";import{D as d}from"./DocsHeader-e7f2a503.js";import{F as m}from"./Footer-d0d4ab08.js";import"./index-f1f749bf.js";import{M as p,C as i,a as f,b as u}from"./chunk-PCJTTTQV-983c4f07.js";import{S as g}from"./SubcomponentsSection-6138f2fc.js";import{C as v,D as h,W as w,a as T,b as x,L as C,T as b}from"./TimeLineChart.stories-d8af98b2.js";import{u as s}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-85508abe.js";import"./iframe-07d1eb64.js";import"../sb-preview/runtime.mjs";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-65cd39a0.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./Icon-7987c836.js";import"./Icons-fe6e657a.js";import"./decline-6bd98a2e.js";import"./i18n-defaults-80781f7e.js";import"./information-b6c8ed8e.js";import"./class-map-95320e87.js";import"./Button-bc3a11a1.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-da505e61.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-0dd9f477.js";import"./TableOfContent-18290727.js";import"./index-075283f3.js";import"./Link-018547e8.js";import"./WrappingType-b81e595a.js";import"./index-b8cfb2ab.js";import"./Label-ccc234fe.js";import"./index-96c5f47c.js";import"./index-a29d895b.js";import"./Popover-224d761a.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-9873a291.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-1da6d0d2.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-cae0a379.js";import"./react-18-ecd79c7b.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./react-content-loader.es-de0c8b5a.js";function jt(o={}){const{wrapper:r}=Object.assign({},s(),o.components);return r?t(r,Object.assign({},o,{children:t(a,{})})):a();function a(){const e=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",strong:"strong",em:"em",h4:"h4",pre:"pre",ul:"ul",li:"li",ol:"ol"},s(),o.components);return n(l,{children:[t(p,{of:v}),`
`,t(d,{since:"1.10.0"}),`
`,t(i,{of:h}),`
`,t(e.h2,{children:"Properties"}),`
`,t(c,{of:h}),`
`,t("br",{}),`
`,t("br",{}),`
`,t(e.h2,{children:"More Examples"}),`
`,t(e.h3,{children:"With Annotations"}),`
`,n(e.p,{children:["This example shows how the ",t(e.code,{children:"TimelineChart"}),` is used to visualize a simple simulation of the
`,t(e.a,{href:"https://en.wikipedia.org/wiki/Earliest_deadline_first_scheduling",children:t("b",{children:"Earliest Deadline First"})}),` scheduling
algorithm. The tasks are shown in the chart and the annotations are added on top and used to indicate the
arrival time, period and deadline of the tasks. The `,t(e.code,{children:"TimelineChartAnnotation"}),` component provides a way to specify the row
the annotations are applied to. For the annotations to scale well with the scaling of the width of the timeline, when
zooming is done, a `,t(e.strong,{children:"ResizeObserver"})," could be used if desired. But for most purposes, the ",t(e.code,{children:"TimelineChartBodyCtx"}),` provided
should suffice. Using the React `,t(e.code,{children:"useContext"})," hook to get the context and the ",t(e.em,{children:"chartBodyWidth"}),` property should help with
the scaling. This will prevent having to create too many ResizeObservers and affecting performance.`]}),`
`,n(e.p,{children:[`The annotations are drawn using the HTML canvas and all the annotations for the same row are drawn at the same time using
the `,t(e.code,{children:"TimingFigure"}),` custom component created for this specific example. As can be seen, the annotations scale neatly without
blurring when the timeline is zoomed. A valueFormat `,t(e.code,{children:"(x) => Number.parseFloat(x).toFixed(2)"}),` has also been applied to the
ticks and tooltip numbers.`]}),`
`,t(i,{of:w}),`
`,t(e.h4,{children:"TimingFigure Code"}),`
`,n("details",{children:[t("summary",{children:"Show Code"}),t(e.pre,{children:t(e.code,{className:"language-jsx",children:`export const TimingFigure = ({ arrival, period, deadline, totalDuration }) => {
  const ref = useRef();
  const verticalSpacing = 2;
  const halfArrowWidth = 4;
  const chartBodyCtx = useContext(TimelineChartBodyCtx);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');

    // Set the canvas dimensions to avoid blurring
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;

    const width = canvas.width;
    const height = canvas.height;
    const one5thHeight = height / 5;
    const four5thHeight = 4 * one5thHeight;

    const interval = (period / totalDuration) * width;
    const arrivalOffset = (arrival / totalDuration) * width;
    const deadlineOffset = (deadline / totalDuration) * width;

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--sapTextColor');

    // Draw the up-pointing arrows for the arrival
    for (let i = 0; i * interval + arrivalOffset < width; i++) {
      const offset = i * interval + arrivalOffset;
      ctx.moveTo(offset, verticalSpacing);
      ctx.lineTo(offset, height - verticalSpacing);
      ctx.moveTo(offset, verticalSpacing);
      ctx.lineTo(offset - halfArrowWidth, one5thHeight);
      ctx.moveTo(offset, verticalSpacing);
      ctx.lineTo(offset + halfArrowWidth, one5thHeight);
    }

    // Draw the down-pointing arrows for the deadline
    for (let i = 0; i * interval + arrivalOffset + deadlineOffset < width; i++) {
      const offset = i * interval + arrivalOffset + deadlineOffset;
      ctx.moveTo(offset, verticalSpacing);
      ctx.lineTo(offset, height - verticalSpacing);
      ctx.lineTo(offset - halfArrowWidth, four5thHeight);
      ctx.moveTo(offset, height - verticalSpacing);
      ctx.lineTo(offset + halfArrowWidth, four5thHeight);
    }

    ctx.stroke();
  });

  return <canvas ref={ref} style={{ width: chartBodyCtx.chartBodyWidth, height: '100%' }}></canvas>;
};
`})})]}),`
`,t(e.h3,{children:"With Annotations Only"}),`
`,n(e.p,{children:[`Using annotations can be so powerful. This allows a very good customization of the timeline as desired. The
chart can be made to contain only custom annotations that utilize the other features available in the
`,t(e.code,{children:"TimelineChart"}),`. By default, the annotations are set so that they dont interact with the mouse. If an
interaction with the mouse is needed for the custom annotation, the annotation should have the
`,t(e.code,{children:"pointerEvents"})," set to ",t(e.em,{children:"auto"})," in its own style."]}),`
`,t(e.p,{children:`The example below shows the timeline for the some of the most momentuous inventions in the
last 6000 years from the year 2022. These annotations have been made using SVG just to
demonstrate that any valid element can be used for making the annotations.`}),`
`,t(i,{of:T}),`
`,t(e.h3,{children:"With More Customization"}),`
`,n(e.p,{children:["A lot more things can be customized in the ",t(e.code,{children:"TimelineChart"}),". These include:"]}),`
`,n(e.ul,{children:[`
`,t(e.li,{children:"The color of each item on a row."}),`
`,t(e.li,{children:"The label of each item on a row."}),`
`,n(e.li,{children:["The kind of connections between two different items:",`
`,n(e.ol,{children:[`
`,t(e.li,{children:"Start-To-Start"}),`
`,t(e.li,{children:"Start-To-Finish"}),`
`,t(e.li,{children:"Finish-To-Start"}),`
`,t(e.li,{children:"Finish-To-Finish"}),`
`]}),`
`]}),`
`]}),`
`,t(i,{of:x}),`
`,t(e.h3,{children:"Loading Placeholder"}),`
`,t(i,{of:C}),`
`,t(f,{children:g}),`
`,t(e.h2,{children:"TimelineChartAnnotation"}),`
`,n(e.p,{children:["The ",t(e.code,{children:"TimelineChartAnnotation"}),` is designed to be used for creating custom annotations, markers
or illustrations on the timeline of the chart.`]}),`
`,t(u,{of:b}),`
`,t(m,{})]})}}export{jt as default};
//# sourceMappingURL=TimeLineChart-0a3b8b79.js.map
