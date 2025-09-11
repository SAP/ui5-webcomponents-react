import{j as e}from"./iframe-BVTjwwa8.js";import{useMDXComponents as r}from"./index-B7X7f4OL.js";import{M as h,C as i,a as l,A as c}from"./blocks-eGiRc96Y.js";import"./Tag-Dd2A7Fyt.js";import"./index-CMlRFogN.js";import{C as d}from"./ControlsWithNote-hZUn05pH.js";import{D as m}from"./DocsHeader-BcrStdCo.js";import{F as f}from"./CommandsAndQueries-BxY3Aj9d.js";import{S as p}from"./SubcomponentsSection-BVy4lpQe.js";import{C as o,D as a,W as x,a as u,b as g,L as j,T as v}from"./TimeLineChart.stories-BrolonoH.js";import"./preload-helper-D9Z9MdNV.js";import"./information-DblDnfTa.js";import"./sys-enter-2-w3Gdy4bH.js";import"./alert-DS_YR08B.js";import"./index-B1gqswNl.js";import"./index-BsaRVQdN.js";import"./Link-B7kPjB45.js";import"./copy-CIRJ6Cju.js";import"./copy-B0_44_hm.js";import"./GitHub-Mark-DdcWzYif.js";import"./TableOfContent-pmxBEo13.js";import"./index-DP8RXEYN.js";import"./index-BvWmgkkb.js";import"./addCustomCSSWithScoping-CzL_B1eM.js";import"./index-ytwNl_Zj.js";import"./index-IhKV7aiN.js";import"./index-BQCzDji_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-yJLdt4rK.js";import"./ThemingParameters-pyhX3s39.js";import"./react-content-loader.es-CCXuSYdz.js";function s(n){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:o}),`
`,e.jsx(m,{of:o,isChart:!0,since:"1.10.0",experimental:!0}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(d,{of:a}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"more-examples",children:"More Examples"}),`
`,e.jsx(t.h3,{id:"with-annotations",children:"With Annotations"}),`
`,e.jsxs(t.p,{children:["This example shows how the ",e.jsx(t.code,{children:"TimelineChart"}),` is used to visualize a simple simulation of the
`,e.jsx(t.a,{href:"https://en.wikipedia.org/wiki/Earliest_deadline_first_scheduling",rel:"nofollow",children:e.jsx("b",{children:"Earliest Deadline First"})}),` scheduling
algorithm. The tasks are shown in the chart and the annotations are added on top and used to indicate the
arrival time, period and deadline of the tasks. The `,e.jsx(t.code,{children:"TimelineChartAnnotation"}),` component provides a way to specify the row
the annotations are applied to. For the annotations to scale well with the scaling of the width of the timeline, when
zooming is done, a `,e.jsx(t.strong,{children:"ResizeObserver"})," could be used if desired. But for most purposes, the ",e.jsx(t.code,{children:"TimelineChartBodyCtx"}),` provided
should suffice. Using the React `,e.jsx(t.code,{children:"useContext"})," hook to get the context and the ",e.jsx(t.em,{children:"chartBodyWidth"}),` property should help with
the scaling. This will prevent having to create too many ResizeObservers and affecting performance.`]}),`
`,e.jsxs(t.p,{children:[`The annotations are drawn using the HTML canvas and all the annotations for the same row are drawn at the same time using
the `,e.jsx(t.code,{children:"TimingFigure"}),` custom component created for this specific example. As can be seen, the annotations scale neatly without
blurring when the timeline is zoomed. A valueFormat `,e.jsx(t.code,{children:"(x) => Number.parseFloat(x).toFixed(2)"}),` has also been applied to the
ticks and tooltip numbers.`]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(t.h4,{id:"timingfigure-code",children:"TimingFigure Code"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show Code"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`export const TimingFigure = ({ arrival, period, deadline, totalDuration }) => {
  const ref = useRef(null);
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
`,e.jsx(t.h3,{id:"with-annotations-only",children:"With Annotations Only"}),`
`,e.jsxs(t.p,{children:[`Using annotations can be so powerful. This allows a very good customization of the timeline as desired. The
chart can be made to contain only custom annotations that utilize the other features available in the
`,e.jsx(t.code,{children:"TimelineChart"}),`. By default, the annotations are set so that they dont interact with the mouse. If an
interaction with the mouse is needed for the custom annotation, the annotation should have the
`,e.jsx(t.code,{children:"pointerEvents"})," set to ",e.jsx(t.em,{children:"auto"})," in its own style."]}),`
`,e.jsx(t.p,{children:`The example below shows the timeline for the some of the most momentuous inventions in the
last 6000 years from the year 2022. These annotations have been made using SVG just to
demonstrate that any valid element can be used for making the annotations.`}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(t.h3,{id:"with-more-customization",children:"With More Customization"}),`
`,e.jsxs(t.p,{children:["A lot more things can be customized in the ",e.jsx(t.code,{children:"TimelineChart"}),". These include:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"The color of each item on a row."}),`
`,e.jsx(t.li,{children:"The label of each item on a row."}),`
`,e.jsxs(t.li,{children:["The kind of connections between two different items:",`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"Start-To-Start"}),`
`,e.jsx(t.li,{children:"Start-To-Finish"}),`
`,e.jsx(t.li,{children:"Finish-To-Start"}),`
`,e.jsx(t.li,{children:"Finish-To-Finish"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(t.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(l,{children:p}),`
`,e.jsx(t.h2,{id:"timelinechartannotation",children:"TimelineChartAnnotation"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"TimelineChartAnnotation"}),` is designed to be used for creating custom annotations, markers
or illustrations on the timeline of the chart.`]}),`
`,e.jsx(c,{of:v}),`
`,e.jsx(f,{})]})}function Y(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{Y as default};
