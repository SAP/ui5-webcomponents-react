import{j as t,a as n,F as l}from"./jsx-runtime-670450c2.js";import{C as c}from"./DomRefTable.module-2f647dfa.js";import{D as d}from"./DocsHeader-2694af15.js";import{F as m}from"./Footer-841ace11.js";import"./index-f1f749bf.js";import{M as p,C as i,a as f,h as u}from"./index-c1feb39e.js";import{S as g}from"./SubcomponentsSection-6138f2fc.js";import{C as v,D as h,W as w,a as T,b as x,L as C,T as b}from"./TimeLineChart.stories-8d05d449.js";import{u as s}from"./index-4fb8b842.js";import"./chunk-G4YQS2SV-3f7a76ca.js";import"./iframe-6d4c6485.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-bf96a71d.js";import"./UI5Element-4f8793c9.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-c82262ef.js";import"./MarkedEvents-8627ed01.js";import"./decline-e7438d7e.js";import"./Icons-ad6f0d24.js";import"./class-map-5d8e4b2b.js";import"./Button-8fbc19ea.js";import"./Keys-3acbae73.js";import"./Device-208919c6.js";import"./index-b4aa831c.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-a9bee957.js";import"./TableOfContent-ef33c812.js";import"./index-c7831f40.js";import"./WrappingType-b81e595a.js";import"./index-5809ec6e.js";import"./Label-27ec0466.js";import"./Footer.module-c4f3b823.js";import"./index-83f21d71.js";import"./Popover-84c1d886.js";import"./Integer-d9976c13.js";import"./PopupsCommon.css-2f3b9f5d.js";import"./FocusableElements-c64a83a7.js";import"./ResizeHandler-1dae7180.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./react-content-loader.es-eef51af2.js";function Dt(o={}){const{wrapper:r}=Object.assign({},s(),o.components);return r?t(r,Object.assign({},o,{children:t(a,{})})):a();function a(){const e=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",strong:"strong",em:"em",h4:"h4",pre:"pre",ul:"ul",li:"li",ol:"ol"},s(),o.components);return n(l,{children:[t(p,{of:v}),`
`,t(d,{}),`
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
`,t(m,{})]})}}export{Dt as default};
//# sourceMappingURL=TimeLineChart-100ce97f.js.map
