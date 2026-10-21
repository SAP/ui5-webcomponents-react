import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,r}from"./react-fLZJfuRT.js";import{_ as i,r as a}from"./blocks-BVY5-C3S.js";function o(e){let t={code:`code`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h3,{id:`keyboard-navigation`,children:`Keyboard Navigation`}),`
`,(0,c.jsxs)(t.p,{children:[`Enable keyboard navigation for chart sectors via `,(0,c.jsx)(t.code,{children:`chartConfig.accessibilityLayer`}),`. When enabled, users can Tab into the chart, use arrow keys to navigate between sectors, and press Enter or Space to select a sector.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Use `,(0,c.jsx)(t.code,{children:`chartConfig.activeSegment`}),` to highlight the selected sector. Space activates on key release, allowing users to hold Space, navigate with arrow keys, and release to select the final sector.`]}),`
`,(0,c.jsx)(a,{of:e.of}),`
`,(0,c.jsxs)(`details`,{children:[(0,c.jsx)(`summary`,{children:`Show Code`}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`function ChartComponent() {
  const [activeSegment, setActiveSegment] = useState(0);
  const handleDataPointClick = (e) => {
    const { dataIndex } = e.detail;
    if (dataIndex != null) {
      setActiveSegment(dataIndex);
    }
  };

  return (
    <PieChart
      dataset={dataset}
      dimension={{ accessor: 'name' }}
      measure={{ accessor: 'users' }}
      chartConfig={{
        accessibilityLayer: true,
        activeSegment,
        showActiveSegmentDataLabel: true,
      }}
      onDataPointClick={handleDataPointClick}
    />
  );
}
`})})]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),i()})))()}export{l as n,s as t};