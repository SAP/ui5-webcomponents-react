import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,r}from"./react-fLZJfuRT.js";import{_ as i,d as a,r as o}from"./blocks-hgs4DFZI.js";import{g as s,t as c,u as l}from"./components-Dojngua7.js";import{_ as u,a as d,b as f,c as p,d as m,f as h,g,h as _,i as v,l as y,m as b,n as x,o as S,p as C,r as w,s as T,u as E,v as D,x as O,y as k}from"./AnalyticalTableFeatureExamples.stories-Dr_K0lsl.js";function A(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(a,{title:`Data Display / AnalyticalTable / Feature Examples`}),`
`,(0,M.jsx)(t.h1,{id:`feature-examples`,children:`Feature Examples`}),`
`,(0,M.jsxs)(t.p,{children:[`Advanced usage patterns and configuration examples for the AnalyticalTable.
For basic prop configuration, use the `,(0,M.jsx)(t.a,{href:`?path=/story/data-display-analyticaltable--default`,children:`Default story controls`}),`.
For common questions, see the `,(0,M.jsx)(t.a,{href:`?path=/docs/data-display-analyticaltable-faq--docs`,children:`FAQ`}),`.`]}),`
`,(0,M.jsx)(s,{headingSelector:`h2`}),`
`,(0,M.jsx)(`br`,{}),`
`,(0,M.jsx)(t.h2,{id:`navigation-indicator`,children:`Navigation Indicator`}),`
`,(0,M.jsxs)(t.p,{children:[`Display a navigation column by setting `,(0,M.jsx)(t.code,{children:`withNavigationHighlight`}),` to `,(0,M.jsx)(t.code,{children:`true`}),`. Use the `,(0,M.jsx)(t.code,{children:`markNavigatedRow`}),` callback to control which rows show the "navigated" indicator. Click on any row in the example below to mark it as navigated.`]}),`
`,(0,M.jsx)(o,{sourceState:`none`,of:b}),`
`,(0,M.jsx)(t.h3,{id:`code`,children:`Code`}),`
`,(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-jsx`,children:`const TableWithNavigationIndicators = () => {
  const [selectedRow, setSelectedRow] = useState();
  const onRowSelect = (e) => {
    setSelectedRow(e.detail.row);
  };
  const markNavigatedRow = useCallback(
    (row) => {
      return selectedRow?.id === row.id;
    },
    [selectedRow]
  );
  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      withNavigationHighlight
      selectionMode="Multiple"
      markNavigatedRow={markNavigatedRow}
      onRowSelect={onRowSelect}
    />
  );
};
`})}),`
`,(0,M.jsx)(t.h2,{id:`custom-column-filtering`,children:`Custom Column Filtering`}),`
`,(0,M.jsxs)(t.p,{children:[`Define custom filter functions and filter UIs per column via the `,(0,M.jsx)(t.code,{children:`filter`}),` and `,(0,M.jsx)(t.code,{children:`Filter`}),` column options. `,(0,M.jsx)(t.code,{children:`filter`}),` receives `,(0,M.jsx)(t.code,{children:`(rows, accessor, filterValue)`}),` and returns filtered rows. `,(0,M.jsx)(t.code,{children:`Filter`}),` renders a custom component inside the column header popover. Alternatively, register shared filter types via `,(0,M.jsx)(t.code,{children:`reactTableOptions.filterTypes`}),` and reference them by key.`]}),`
`,(0,M.jsx)(o,{sourceState:`none`,of:T}),`
`,(0,M.jsx)(t.h3,{id:`code-1`,children:`Code`}),`
`,(0,M.jsxs)(`details`,{children:[(0,M.jsx)(`summary`,{children:`Show Code`}),(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-jsx`,children:`const filterFn = (rows, accessor, filterValue) => {
  if (filterValue.length > 0) {
    return rows.filter((row) => {
      const rowVal = row.values[accessor];
      return filterValue.some((item) => rowVal.includes(item));
    });
  }
  return rows;
};

const columns = [
  {
    Header: 'Custom Column Filter',
    accessor: 'name',
    filter: filterFn,
    Filter: ({ column }) => {
      const firstNames = ['Carl', 'Dan', 'Rose', 'Susanne'];
      return (
        <MultiComboBox
          onSelectionChange={(e) => {
            column.setFilter(e.detail.items.map((item) => item.getAttribute('text')));
          }}
        >
          {firstNames.map((item) => {
            const isSelected = column?.filterValue?.some((filterVal) => filterVal.includes(item));
            return <MultiComboBoxItem text={item} key={item} selected={isSelected} />;
          })}
        </MultiComboBox>
      );
    }
  },
  { Header: 'Age', accessor: 'age' }
];

<AnalyticalTable columns={columns} data={data} filterable />
`})})]}),`
`,(0,M.jsx)(t.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,M.jsxs)(t.p,{children:[`Add custom subcomponents below table rows via `,(0,M.jsx)(t.code,{children:`renderRowSubComponent`}),`. The function receives the `,(0,M.jsx)(t.code,{children:`row`}),` instance, letting you control which rows display subcomponents. Use the `,(0,M.jsx)(t.code,{children:`subComponentsBehavior`}),` prop to switch between `,(0,M.jsx)(t.code,{children:`"Expandable"`}),` (default, click to expand), `,(0,M.jsx)(t.code,{children:`"Visible"`}),` (always shown), `,(0,M.jsx)(t.code,{children:`"IncludeHeight"`}),` (always shown, height included in body calculation), and `,(0,M.jsx)(t.code,{children:`"IncludeHeightExpandable"`}),` (expandable, body height adjusts on toggle).`]}),`
`,(0,M.jsx)(t.p,{children:(0,M.jsx)(t.strong,{children:`Notes:`})}),`
`,(0,M.jsxs)(t.ul,{children:[`
`,(0,M.jsxs)(t.li,{children:[`When `,(0,M.jsx)(t.code,{children:`renderRowSubComponent`}),` is set, `,(0,M.jsx)(t.code,{children:`grouping`}),` is disabled.`]}),`
`,(0,M.jsxs)(t.li,{children:[`When rendering active elements inside the subcomponent, add the `,(0,M.jsx)(t.code,{children:`data-subcomponent-active-element`}),` attribute for consistent focus behavior.`]}),`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.code,{children:`IncludeHeight`}),` and `,(0,M.jsx)(t.code,{children:`IncludeHeightExpandable`}),` do not support `,(0,M.jsx)(t.code,{children:`AnalyticalTableVisibleRowCountMode.Interactive`}),`.`]}),`
`]}),`
`,(0,M.jsx)(o,{sourceState:`none`,of:f}),`
`,(0,M.jsx)(t.h3,{id:`code-2`,children:`Code`}),`
`,(0,M.jsxs)(`details`,{children:[(0,M.jsx)(`summary`,{children:`Show Code`}),(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-jsx`,children:`const renderRowSubComponent = (row) => {
  if (row.id === '0') {
    return (
      <FlexBox style={{ backgroundColor: 'lightblue', height: '300px' }}>
        <Tag>height: 300px</Tag>
        <Text>This subcomponent will only be displayed below the first row.</Text>
        <Button data-subcomponent-active-element>Click</Button>
      </FlexBox>
    );
  }
  if (row.id === '2') return null;
  return (
    <FlexBox style={{ backgroundColor: 'lightgrey', height: '50px' }}>
      <Tag>height: 50px</Tag>
    </FlexBox>
  );
};

<AnalyticalTable
  data={data}
  columns={columns}
  renderRowSubComponent={renderRowSubComponent}
  subComponentsBehavior="Expandable" // "Expandable" | "Visible" | "IncludeHeight" | "IncludeHeightExpandable"
/>
`})})]}),`
`,(0,M.jsx)(t.h2,{id:`column-width-scaling-modes`,children:`Column Width Scaling Modes`}),`
`,(0,M.jsxs)(t.p,{children:[`The `,(0,M.jsx)(t.code,{children:`scaleWidthMode`}),` prop controls how column widths are calculated. `,(0,M.jsx)(t.code,{children:`Default`}),` distributes available space evenly across columns without a fixed width. `,(0,M.jsx)(t.code,{children:`Smart`}),` ensures every column has enough space for its full header text, then distributes remaining space to columns with longer content. `,(0,M.jsx)(t.code,{children:`Grow`}),` sizes columns to fit both their full header text and full cell content. The three tables below show the same data with each mode applied.`]}),`
`,(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.code,{children:`Smart`}),` and `,(0,M.jsx)(t.code,{children:`Grow`}),` calculate widths from `,(0,M.jsx)(t.strong,{children:`text content only`}),` — custom `,(0,M.jsx)(t.code,{children:`Cell`}),` or `,(0,M.jsx)(t.code,{children:`Header`}),` renderers are ignored. Use the `,(0,M.jsx)(t.code,{children:`scaleWidthModeOptions`}),` column option to provide a representative string (`,(0,M.jsx)(t.code,{children:`cellString`}),` / `,(0,M.jsx)(t.code,{children:`headerString`}),`) for the width calculation. See the "Status" and "Score" columns below for examples.`]}),`
`,(0,M.jsx)(o,{sourceState:`none`,of:u}),`
`,(0,M.jsx)(t.h3,{id:`code-3`,children:`Code`}),`
`,(0,M.jsxs)(`details`,{children:[(0,M.jsx)(`summary`,{children:`Show Code`}),(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-jsx`,children:`const columns = [
  // ...
  {
    Header: 'Status',
    accessor: 'status',
    Cell: ({ value }) => <Tag>{value}</Tag>,
    scaleWidthModeOptions: { cellString: 'Temporarily Unavailable — On Extended Leave Until Further Notice' },
  },
  {
    accessor: 'score',
    Header: ({ webComponentsReactProperties }) => (
      <ObjectStatus
        state={IndicationColor.Indication08}
        className={webComponentsReactProperties.classes.textEllipsis}
      >
        Average Quarterly Employee Satisfaction Score
      </ObjectStatus>
    ),
    scaleWidthModeOptions: { headerString: 'Average Quarterly Employee Satisfaction Score' },
  },
  // ...
];

<AnalyticalTable data={data} columns={columns} scaleWidthMode="Default" />
<AnalyticalTable data={data} columns={columns} scaleWidthMode="Smart" />
<AnalyticalTable data={data} columns={columns} scaleWidthMode="Grow" />
`})})]}),`
`,(0,M.jsx)(t.h2,{id:`grouping-with-aggregation`,children:`Grouping with Aggregation`}),`
`,(0,M.jsxs)(t.p,{children:[`Enable column grouping via `,(0,M.jsx)(t.code,{children:`groupable={true}`}),`. Columns can define `,(0,M.jsx)(t.code,{children:`aggregate`}),` functions (e.g. `,(0,M.jsx)(t.code,{children:`"average"`}),`, `,(0,M.jsx)(t.code,{children:`"count"`}),`, `,(0,M.jsx)(t.code,{children:`"sum"`}),` or a custom function) and custom `,(0,M.jsx)(t.code,{children:`Aggregated`}),` cell renderers to display summary values for each group. Use the `,(0,M.jsx)(t.code,{children:`groupBy`}),` prop for programmatic grouping or let users group via the column header menu.`]}),`
`,(0,M.jsx)(o,{sourceState:`none`,of:E}),`
`,(0,M.jsx)(t.h3,{id:`code-4`,children:`Code`}),`
`,(0,M.jsxs)(`details`,{children:[(0,M.jsx)(`summary`,{children:`Show Code`}),(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-jsx`,children:`const GroupingTable = () => {
  const [groupBy, setGroupBy] = useState([]);

  const columns = useMemo(
    () => [
      { Header: 'Name', accessor: 'name', disableGroupBy: true },
      {
        Header: 'Age',
        accessor: 'age',
        aggregate: 'average',
        Aggregated: (instance) => \`Avg: \${Math.round(instance.value)}\`
      },
      {
        Header: 'Status',
        accessor: 'status',
        aggregate: (leafValues) => {
          const severity = ['Negative', 'Critical', 'Positive', 'Information', 'None'];
          return leafValues.reduce(
            (highest, val) => (severity.indexOf(val) < severity.indexOf(highest) ? val : highest),
            'None'
          );
        },
        Aggregated: (instance) => \`Max: \${instance.value}\`
      },
      { Header: 'Friend Name', accessor: 'friend.name', disableGroupBy: true }
    ],
    []
  );

  const handleGroup = (e) => {
    const { column, groupedColumns, isGrouped } = e.detail;
    console.log(column.Header, isGrouped, groupedColumns);
  };

  return (
    <>
      <Button onClick={() => setGroupBy(['status'])}>Group by Status</Button>
      <Button onClick={() => setGroupBy(['age'])}>Group by Age</Button>
      <Button onClick={() => setGroupBy([])}>Clear Groups</Button>
      <AnalyticalTable
        data={data}
        columns={columns}
        groupable
        groupBy={groupBy}
        onGroup={handleGroup}
      />
    </>
  );
};
`})})]}),`
`,(0,M.jsx)(t.h2,{id:`server-side-sorting-filtering-and-grouping`,children:`Server-Side Sorting, Filtering and Grouping`}),`
`,(0,M.jsxs)(t.p,{children:[`For backend-driven tables, set `,(0,M.jsx)(t.code,{children:`reactTableOptions={{ manualSortBy: true, manualFilters: true, manualGroupBy: true }}`}),` to disable client-side operations. Use the `,(0,M.jsx)(t.code,{children:`onSort`}),`, `,(0,M.jsx)(t.code,{children:`onFilter`}),` and `,(0,M.jsx)(t.code,{children:`onGroup`}),` callbacks to fetch data from your server. For `,(0,M.jsx)(t.code,{children:`manualGroupBy`}),`, the server must return pre-grouped data with child rows via `,(0,M.jsx)(t.code,{children:`subRows`}),`. This example simulates a 500ms server delay.`]}),`
`,(0,M.jsx)(o,{sourceState:`none`,of:k}),`
`,(0,M.jsx)(t.h3,{id:`code-5`,children:`Code`}),`
`,(0,M.jsxs)(`details`,{children:[(0,M.jsx)(`summary`,{children:`Show Code`}),(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-jsx`,children:`const ServerSideTable = () => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  // Track current operations so they compose (filter → sort → group).
  const opsRef = useRef({ groupedColumns: [] });

  const reactTableOptions = useMemo(
    () => ({
      manualSortBy: true,
      manualFilters: true,
      manualGroupBy: true,
      autoResetGroupBy: false,
      autoResetExpanded: false
    }),
    []
  );

  // Apply all active operations as a pipeline.
  // In production, send opsRef.current to your server instead.
  const applyOps = useCallback(
    (ops) => {
      setLoading(true);
      fetchData(ops).then((result) => {
        setData(result);
        setLoading(false);
      });
    },
    []
  );

  const onSort = (e) => {
    const { column, sortDirection } = e.detail;
    opsRef.current.sort = sortDirection ? { columnId: column.id, direction: sortDirection } : undefined;
    applyOps(opsRef.current);
  };

  // onFilter receives a plain object, not a CustomEvent.
  const onFilter = (e) => {
    const { columnId, value } = e;
    opsRef.current.filter = value ? { columnId, value } : undefined;
    applyOps(opsRef.current);
  };

  // For manualGroupBy, the server must return pre-grouped data
  // with child rows in \`subRows\`.
  const onGroup = (e) => {
    opsRef.current.groupedColumns = e.detail.groupedColumns;
    applyOps(opsRef.current);
  };

  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      loading={loading}
      sortable
      filterable
      groupable
      alwaysShowBusyIndicator
      reactTableOptions={reactTableOptions}
      onSort={onSort}
      onFilter={onFilter}
      onGroup={onGroup}
    />
  );
};
`})})]}),`
`,(0,M.jsxs)(`details`,{children:[(0,M.jsx)(`summary`,{children:`Show Grouped Data Structure`}),(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-json`,children:`// Flat data (before grouping)
[
  { "name": "Alice #0", "age": 20, "department": "Engineering" },
  { "name": "Bob #1",   "age": 21, "department": "Sales" },
  { "name": "Eve #4",   "age": 24, "department": "HR" }
]

// Grouped by department (server response)
[
  {
    "department": "Engineering",
    "subRows": [
      { "name": "Alice #0", "age": 20, "department": "Engineering" },
      { "name": "Frank #5", "age": 25, "department": "Engineering" }
    ]
  },
  {
    "department": "Sales",
    "subRows": [
      { "name": "Bob #1",   "age": 21, "department": "Sales" },
      { "name": "Grace #6", "age": 26, "department": "Sales" }
    ]
  }
]
`})})]}),`
`,(0,M.jsx)(t.h2,{id:`loading-states`,children:`Loading States`}),`
`,(0,M.jsxs)(t.p,{children:[`The table supports multiple loading indicators: a skeleton placeholder (when `,(0,M.jsx)(t.code,{children:`loading`}),` is true and data is empty), a `,(0,M.jsx)(t.code,{children:`BusyIndicator`}),` overlay (when `,(0,M.jsx)(t.code,{children:`loading`}),` is true and data exists), and `,(0,M.jsx)(t.code,{children:`showOverlay`}),` which displays a semi-transparent overlay without a loading indicator. When `,(0,M.jsx)(t.code,{children:`loading`}),` is active, user interactions are blocked as well. Set `,(0,M.jsx)(t.code,{children:`alwaysShowBusyIndicator`}),` to always show the BusyIndicator instead of the skeleton.`]}),`
`,(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.strong,{children:`Recommended:`}),` Set `,(0,M.jsx)(t.code,{children:`alwaysShowBusyIndicator`}),` to `,(0,M.jsx)(t.code,{children:`true`}),` in most cases. The default skeleton loading indicator should only be used when loading times exceed 1 second. See `,(0,M.jsx)(t.a,{href:`https://www.sap.com/design-system/fiori-design-ios/v26-4/components/progress-indicators/skeleton-loading`,rel:`nofollow`,children:`Fiori Skeleton Loading`}),` for design guidance.`]}),`
`,(0,M.jsx)(t.p,{children:`The following table summarizes which indicator is rendered for the empty and non-empty states:`}),`
`,(0,M.jsxs)(t.table,{children:[(0,M.jsx)(t.thead,{children:(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.th,{children:(0,M.jsx)(t.code,{children:`loading`})}),(0,M.jsx)(t.th,{children:(0,M.jsx)(t.code,{children:`data`})}),(0,M.jsx)(t.th,{children:(0,M.jsx)(t.code,{children:`alwaysShowBusyIndicator`})}),(0,M.jsx)(t.th,{children:`Result`})]})}),(0,M.jsxs)(t.tbody,{children:[(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`true`})}),(0,M.jsx)(t.td,{children:`filled`}),(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`false`})}),(0,M.jsxs)(t.td,{children:[(0,M.jsx)(t.code,{children:`BusyIndicator`}),` overlay on top of the existing rows`]})]}),(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`true`})}),(0,M.jsx)(t.td,{children:`empty`}),(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`false`})}),(0,M.jsxs)(t.td,{children:[`Skeleton loader (`,(0,M.jsx)(t.code,{children:`TablePlaceholder`}),`) — `,(0,M.jsx)(t.code,{children:`NoDataComponent`}),` is `,(0,M.jsx)(t.strong,{children:`not`}),` shown`]})]}),(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`true`})}),(0,M.jsx)(t.td,{children:`empty`}),(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`true`})}),(0,M.jsxs)(t.td,{children:[(0,M.jsx)(t.code,{children:`BusyIndicator`}),` overlay on top of the `,(0,M.jsx)(t.code,{children:`NoDataComponent`})]})]}),(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`false`})}),(0,M.jsx)(t.td,{children:`empty`}),(0,M.jsx)(t.td,{children:`any`}),(0,M.jsxs)(t.td,{children:[(0,M.jsx)(t.code,{children:`NoDataComponent`}),` only`]})]})]})]}),`
`,(0,M.jsxs)(t.p,{children:[`The `,(0,M.jsx)(t.code,{children:`BusyIndicator`}),` is an overlay: it is layered on top of the table and dims the content beneath it, but it does not replace the normal render logic. This is why, with `,(0,M.jsx)(t.code,{children:`alwaysShowBusyIndicator`}),` and empty data, the `,(0,M.jsx)(t.code,{children:`NoDataComponent`}),` is rendered underneath the overlay while loading — there is no skeleton loader in this mode by design.`]}),`
`,(0,M.jsxs)(t.p,{children:[`For the default text `,(0,M.jsx)(t.code,{children:`NoDataComponent`}),` this is unobtrusive, but a richer custom empty state — like an `,(0,M.jsx)(t.code,{children:`IllustratedMessage`}),` — would flash beneath the overlay during the initial load, before any data has arrived. To avoid this, render the custom component only once loading has finished and fall back to the default "No data" placeholder in the meantime by returning `,(0,M.jsx)(t.code,{children:`undefined`}),`. Toggle `,(0,M.jsx)(t.strong,{children:`Custom NoDataComponent`}),`, `,(0,M.jsx)(t.strong,{children:`loading`}),`, and `,(0,M.jsx)(t.strong,{children:`alwaysShowBusyIndicator`}),` in the example below to compare the patterns.`]}),`
`,(0,M.jsx)(o,{sourceState:`none`,of:h}),`
`,(0,M.jsx)(t.h3,{id:`code-6`,children:`Code`}),`
`,(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-jsx`,children:`// Skeleton placeholder (loading with no data)
<AnalyticalTable data={[]} columns={columns} loading />

// BusyIndicator overlay (loading with existing data)
<AnalyticalTable data={data} columns={columns} loading />

// Always show BusyIndicator instead of skeleton (recommended)
<AnalyticalTable data={data} columns={columns} loading alwaysShowBusyIndicator />

// Overlay without loading indicator
<AnalyticalTable data={data} columns={columns} showOverlay />

// Custom NoDataComponent (e.g. IllustratedMessage) with alwaysShowBusyIndicator:
// guard it so the illustration doesn't flash beneath the overlay while loading.
const NoDataComponent = loading
  ? undefined // fall back to the default "No data" placeholder during loading
  : (props) => <IllustratedMessage role={props.accessibleRole} name={NoDataIllustration} />;
<AnalyticalTable data={[]} columns={columns} loading alwaysShowBusyIndicator NoDataComponent={NoDataComponent} />
`})}),`
`,(0,M.jsx)(t.h2,{id:`controlled-selection`,children:`Controlled Selection`}),`
`,(0,M.jsxs)(t.p,{children:[`Control selected rows externally via the `,(0,M.jsx)(t.code,{children:`selectedRowIds`}),` prop. This object maps row indices to `,(0,M.jsx)(t.code,{children:`true`}),` (e.g. `,(0,M.jsx)(t.code,{children:`{ 0: true, 2: true }`}),`). Combine with `,(0,M.jsx)(t.code,{children:`onRowSelect`}),` to keep your external state in sync with user interactions.`]}),`
`,(0,M.jsx)(o,{sourceState:`none`,of:d}),`
`,(0,M.jsx)(t.h3,{id:`code-7`,children:`Code`}),`
`,(0,M.jsxs)(`details`,{children:[(0,M.jsx)(`summary`,{children:`Show Code`}),(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-jsx`,children:`const ControlledSelectionTable = () => {
  const [selectedRowIds, setSelectedRowIds] = useState({});

  const onRowSelect = (e) => {
    setSelectedRowIds({ ...e.detail.selectedRowIds });
  };

  return (
    <>
      <Button
        onClick={() => {
          const all = {};
          data.forEach((_, i) => { all[i] = true; });
          setSelectedRowIds(all);
        }}
      >
        Select All
      </Button>
      <Button onClick={() => setSelectedRowIds({})}>Clear All</Button>
      <AnalyticalTable
        data={data}
        columns={columns}
        selectionMode="Multiple"
        selectedRowIds={selectedRowIds}
        onRowSelect={onRowSelect}
      />
    </>
  );
};
`})})]}),`
`,(0,M.jsx)(t.h2,{id:`row-highlighting`,children:`Row Highlighting`}),`
`,(0,M.jsxs)(t.p,{children:[`Enable `,(0,M.jsx)(t.code,{children:`withRowHighlight`}),` to display a colored indicator strip at the start of each row. The `,(0,M.jsx)(t.code,{children:`highlightField`}),` prop can be a string pointing to a data field containing `,(0,M.jsx)(t.code,{children:`ValueState`}),` values (`,(0,M.jsx)(t.code,{children:`Positive`}),`, `,(0,M.jsx)(t.code,{children:`Negative`}),`, `,(0,M.jsx)(t.code,{children:`Critical`}),`, `,(0,M.jsx)(t.code,{children:`Information`}),`, `,(0,M.jsx)(t.code,{children:`None`}),`) or `,(0,M.jsx)(t.code,{children:`IndicationColor`}),` values (`,(0,M.jsx)(t.code,{children:`Indication01`}),`-`,(0,M.jsx)(t.code,{children:`Indication20`}),`). It can also be a memoized function that receives the row and returns the color.`]}),`
`,(0,M.jsx)(o,{sourceState:`none`,of:g}),`
`,(0,M.jsx)(t.h3,{id:`code-8`,children:`Code`}),`
`,(0,M.jsxs)(`details`,{children:[(0,M.jsx)(`summary`,{children:`Show Code`}),(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-jsx`,children:`// Option 1: String-based - reads from a data field
const data = [
  { name: 'Alice', age: 28, status: 'Positive' },
  { name: 'Bob', age: 35, status: 'Negative' },
  { name: 'Charlie', age: 42, status: 'Indication01' }
];

<AnalyticalTable
  data={data}
  columns={columns}
  withRowHighlight
  highlightField="status"
/>

// Option 2: Function-based - must be memoized with useCallback
const highlightFn = useCallback((original) => {
  return original.age > 40 ? 'Indication03' : 'Indication07';
}, []);

<AnalyticalTable
  data={data}
  columns={columns}
  withRowHighlight
  highlightField={highlightFn}
/>
`})})]}),`
`,(0,M.jsx)(t.h2,{id:`column-drag-and-drop`,children:`Column Drag and Drop`}),`
`,(0,M.jsxs)(t.p,{children:[`Columns can be reordered by dragging their headers. Use `,(0,M.jsx)(t.code,{children:`onColumnsReorder`}),` to persist the new order and `,(0,M.jsx)(t.code,{children:`columnOrder`}),` for controlled ordering. Individual columns can opt out via `,(0,M.jsx)(t.code,{children:`disableDragAndDrop: true`}),`.`]}),`
`,(0,M.jsx)(o,{sourceState:`none`,of:v}),`
`,(0,M.jsx)(t.h3,{id:`code-9`,children:`Code`}),`
`,(0,M.jsxs)(`details`,{children:[(0,M.jsx)(`summary`,{children:`Show Code`}),(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-jsx`,children:`const DragAndDropTable = () => {
  const [columnOrder, setColumnOrder] = useState(['name', 'age', 'friend.name', 'friend.age']);

  const columns = useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Age', accessor: 'age' },
      { Header: 'Friend Name', accessor: 'friend.name' },
      { Header: 'Friend Age', accessor: 'friend.age', disableDragAndDrop: true }
    ],
    []
  );

  const onColumnsReorder = (e) => {
    setColumnOrder(e.detail.columnsNewOrder.map((col) => col.id));
  };

  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      columnOrder={columnOrder}
      onColumnsReorder={onColumnsReorder}
    />
  );
};
`})})]}),`
`,(0,M.jsx)(t.h2,{id:`global-filter`,children:`Global Filter`}),`
`,(0,M.jsxs)(t.p,{children:[`The `,(0,M.jsx)(t.code,{children:`globalFilterValue`}),` prop applies a text filter across all columns simultaneously. Combine with an external `,(0,M.jsx)(t.code,{children:`Input`}),` or search field for a search-bar pattern. Individual columns can be excluded from global filtering via `,(0,M.jsx)(t.code,{children:`disableGlobalFilter: true`}),`.`]}),`
`,(0,M.jsx)(o,{sourceState:`none`,of:y}),`
`,(0,M.jsx)(t.h3,{id:`code-10`,children:`Code`}),`
`,(0,M.jsxs)(`details`,{children:[(0,M.jsx)(`summary`,{children:`Show Code`}),(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-jsx`,children:`const GlobalFilterTable = () => {
  const [filterValue, setFilterValue] = useState('');

  const columns = useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Age', accessor: 'age', disableGlobalFilter: true },
      { Header: 'Friend Name', accessor: 'friend.name' }
    ],
    []
  );

  return (
    <>
      <Input
        placeholder="Search..."
        value={filterValue}
        onInput={(e) => setFilterValue(e.target.value)}
        showClearIcon
      />
      <AnalyticalTable
        data={data}
        columns={columns}
        globalFilterValue={filterValue}
      />
    </>
  );
};
`})})]}),`
`,(0,M.jsx)(t.h2,{id:`programmatic-table-control`,children:`Programmatic Table Control`}),`
`,(0,M.jsxs)(t.p,{children:[`The `,(0,M.jsx)(t.code,{children:`tableInstance`}),` ref exposes the internal react-table instance, giving access to methods like `,(0,M.jsx)(t.code,{children:`setSortBy`}),`, `,(0,M.jsx)(t.code,{children:`setFilter`}),`, `,(0,M.jsx)(t.code,{children:`setAllFilters`}),`, `,(0,M.jsx)(t.code,{children:`toggleHideColumn`}),`, `,(0,M.jsx)(t.code,{children:`setHiddenColumns`}),`, and `,(0,M.jsx)(t.code,{children:`resetResizing`}),`. Use `,(0,M.jsx)(t.code,{children:`reactTableOptions`}),` with `,(0,M.jsx)(t.code,{children:`autoReset*: false`}),` to prevent the table from resetting state when data changes. Toggle the data set to see that the `,(0,M.jsx)(t.code,{children:`autoReset*`}),` options preserve table state across data updates.`]}),`
`,(0,M.jsx)(o,{sourceState:`none`,of:_}),`
`,(0,M.jsx)(t.h3,{id:`code-11`,children:`Code`}),`
`,(0,M.jsxs)(`details`,{children:[(0,M.jsx)(`summary`,{children:`Show Code`}),(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-jsx`,children:`const ProgrammaticTable = () => {
  const tableInstanceRef = useRef(null);

  // Memoize reactTableOptions — the autoReset options preserve table state
  // across data changes. An inline object would recreate on every render.
  const reactTableOptions = useMemo(
    () => ({
      autoResetSortBy: false,
      autoResetFilters: false,
      autoResetHiddenColumns: false,
      autoResetExpanded: false,
      autoResetGroupBy: false
    }),
    []
  );

  return (
    <>
      <Button onClick={() => tableInstanceRef.current?.setSortBy([{ id: 'name', desc: false }])}>
        Sort Name (asc)
      </Button>
      <Button onClick={() => tableInstanceRef.current?.setSortBy([])}>Clear Sort</Button>
      <Button onClick={() => tableInstanceRef.current?.setFilter('age', '3')}>
        Filter Age contains "3"
      </Button>
      <Button onClick={() => tableInstanceRef.current?.setAllFilters([])}>Clear Filters</Button>
      <Button onClick={() => tableInstanceRef.current?.toggleHideColumn('friend.name')}>
        Toggle "Friend Name"
      </Button>
      <Button onClick={() => tableInstanceRef.current?.resetResizing()}>
        Reset Column Widths
      </Button>
      <AnalyticalTable
        data={data}
        columns={columns}
        sortable
        filterable
        groupable
        tableInstance={tableInstanceRef}
        reactTableOptions={reactTableOptions}
      />
    </>
  );
};
`})})]}),`
`,(0,M.jsx)(t.h2,{id:`initial-table-state`,children:`Initial Table State`}),`
`,(0,M.jsxs)(t.p,{children:[`Set initial sorting, filtering, selection, and hidden columns via `,(0,M.jsx)(t.code,{children:`reactTableOptions.initialState`}),`. This is useful for dashboards where the table should appear pre-configured. The example starts with Age sorted descending, Name filtered by "a", Friend Age hidden, and rows 0 and 2 selected.`]}),`
`,(0,M.jsx)(o,{sourceState:`none`,of:m}),`
`,(0,M.jsx)(t.h3,{id:`code-12`,children:`Code`}),`
`,(0,M.jsxs)(`details`,{children:[(0,M.jsx)(`summary`,{children:`Show Code`}),(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-jsx`,children:`const InitialStateTable = () => {
  const [key, resetKey] = useReducer((k) => k + 1, 0);

  // Memoize reactTableOptions — an inline object creates a new reference on
  // every render, causing the table to re-initialize its state.
  const reactTableOptions = useMemo(
    () => ({
      autoResetSortBy: false,
      autoResetFilters: false,
      autoResetHiddenColumns: false,
      initialState: {
        sortBy: [{ id: 'age', desc: true }],
        filters: [{ id: 'name', value: 'a' }],
        hiddenColumns: ['friend.age'],
        selectedRowIds: { 0: true, 2: true }
      }
    }),
    []
  );

  return (
    <>
      <Button onClick={resetKey}>Reset to Initial State</Button>
      <AnalyticalTable
        key={key}
        data={data}
        columns={columns}
        sortable
        filterable
        selectionMode="Multiple"
        reactTableOptions={reactTableOptions}
      />
    </>
  );
};
`})})]}),`
`,(0,M.jsx)(t.h2,{id:`custom-cell-renderers`,children:`Custom Cell Renderers`}),`
`,(0,M.jsxs)(t.p,{children:[`Use the `,(0,M.jsx)(t.code,{children:`Cell`}),` column property to render custom content in cells. Lightweight cells don't need memoization — consider `,(0,M.jsx)(t.code,{children:`memo()`}),` for complex or expensive cells. For interactive elements like inputs, stop horizontal arrow key propagation so caret movement works. Use the `,(0,M.jsx)(t.code,{children:`textEllipsis`}),` class when custom elements should truncate. Prefer mounting dialogs outside the table over rendering one per cell. For more details, see the `,(0,M.jsx)(t.a,{href:`?path=/docs/data-display-analyticaltable-faq--docs`,children:`FAQ`}),`.`]}),`
`,(0,M.jsx)(o,{sourceState:`none`,of:S}),`
`,(0,M.jsx)(t.h3,{id:`code-13`,children:`Code`}),`
`,(0,M.jsxs)(`details`,{children:[(0,M.jsx)(`summary`,{children:`Show Code`}),(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-jsx`,children:`// Consider memo() for complex or expensive cells — not needed for simple ones
const FriendComparisonCell = memo(({ row }) => {
  const { age, friend, status } = row.original;
  const ageDiff = friend.age - age;
  return (
    <FlexBox alignItems="Center" style={{ gap: '0.25rem' }}>
      <ObjectStatus state={status}>{friend.name}</ObjectStatus>
      <Tag colorScheme={ageDiff >= 0 ? '5' : '3'}>
        {ageDiff >= 0 ? '+' : ''}{ageDiff} yrs
      </Tag>
    </FlexBox>
  );
});

const CustomCellTable = () => {
  const [dialogRow, setDialogRow] = useState(null);

  const columns = useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      {
        Header: 'Age',
        accessor: 'age',
        // Lightweight cells don't need memo()
        Cell: ({ value }) => (
          <ObjectStatus state={value > 40 ? 'Critical' : 'Positive'}>{value}</ObjectStatus>
        )
      },
      {
        Header: 'Friend Comparison',
        id: 'friendComparison',
        Cell: FriendComparisonCell
      },
      {
        Header: 'Description',
        accessor: 'description',
        // Use the textEllipsis class when custom elements should truncate
        Cell: ({ value, webComponentsReactProperties }) => (
          <span
            className={webComponentsReactProperties.classes.textEllipsis}
            title={value}
          >
            {value}
          </span>
        )
      },
      {
        Header: 'Notes',
        id: 'notes',
        // Stop horizontal arrow key propagation so caret movement works
        Cell: () => (
          <Input
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                e.stopPropagation();
              }
            }}
          />
        )
      },
      {
        Header: 'Details',
        id: 'details',
        // Prefer mounting dialogs outside the table over rendering one per cell
        Cell: ({ row }) => (
          <Button onClick={() => setDialogRow(row.original)}>Show</Button>
        )
      }
    ],
    []
  );

  return (
    <>
      <AnalyticalTable data={data} columns={columns} />
      <Dialog
        open={!!dialogRow}
        onClose={() => setDialogRow(null)}
        headerText={dialogRow?.name ?? ''}
      >
        <Text>Age: {dialogRow?.age}</Text>
      </Dialog>
    </>
  );
};
`})})]}),`
`,(0,M.jsx)(t.h2,{id:`custom-header-popover`,children:`Custom Header Popover`}),`
`,(0,M.jsxs)(t.p,{children:[`Replace the default column header popover with a fully custom UI using the `,(0,M.jsx)(t.code,{children:`Popover`}),` column property. The component receives the table instance with `,(0,M.jsx)(t.code,{children:`popoverProps`}),` (containing `,(0,M.jsx)(t.code,{children:`openerId`}),`, `,(0,M.jsx)(t.code,{children:`setOpen`}),`, and `,(0,M.jsx)(t.code,{children:`id`}),`) plus all table methods like `,(0,M.jsx)(t.code,{children:`setSortBy`}),` and `,(0,M.jsx)(t.code,{children:`setFilter`}),`. Use the `,(0,M.jsx)(t.code,{children:`openerId`}),` to position a `,(0,M.jsx)(t.code,{children:`Popover`}),` via its `,(0,M.jsx)(t.code,{children:`opener`}),` prop.`]}),`
`,(0,M.jsx)(o,{sourceState:`none`,of:p}),`
`,(0,M.jsx)(t.h3,{id:`code-14`,children:`Code`}),`
`,(0,M.jsxs)(`details`,{children:[(0,M.jsx)(`summary`,{children:`Show Code`}),(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-jsx`,children:`const columns = [
  {
    Header: 'Name (Custom Popover)',
    accessor: 'name',
    Popover: (instance) => {
      const { setOpen, openerId } = instance.popoverProps;

      return (
        <Popover
          open
          opener={openerId}
          onClose={() => setOpen(false)}
          // Stop click propagation so the column header doesn't re-open the popover.
          onClick={(e) => e.stopPropagation()}
          headerText="Custom Column Menu"
        >
          <FlexBox direction="Column" style={{ padding: '0.5rem', gap: '0.5rem' }}>
            <Button
              icon="sort-ascending"
              onClick={() => {
                instance.setSortBy([{ id: 'name', desc: false }]);
                setOpen(false);
              }}
            >
              Sort A → Z
            </Button>
            <Button
              icon="sort-descending"
              onClick={() => {
                instance.setSortBy([{ id: 'name', desc: true }]);
                setOpen(false);
              }}
            >
              Sort Z → A
            </Button>
            <Input
              placeholder="Filter Name..."
              value={filterVal}
              onInput={(e) => {
                setFilterVal(e.target.value);
                instance.setFilter('name', e.target.value || undefined);
              }}
            />
            <Button
              icon="reset"
              onClick={() => {
                instance.setSortBy([]);
                instance.setAllFilters([]);
                setOpen(false);
              }}
            >
              Reset All
            </Button>
          </FlexBox>
        </Popover>
      );
    }
  },
  { Header: 'Age', accessor: 'age' }
];

<AnalyticalTable
  data={data}
  columns={columns}
  sortable
  filterable
  reactTableOptions={{ autoResetSortBy: false, autoResetFilters: false }}
/>
`})})]}),`
`,(0,M.jsx)(t.h2,{id:`selection-modes`,children:`Selection Modes`}),`
`,(0,M.jsxs)(t.p,{children:[`The `,(0,M.jsx)(t.code,{children:`selectionMode`}),` prop defines whether rows can be selected (`,(0,M.jsx)(t.code,{children:`None`}),`, `,(0,M.jsx)(t.code,{children:`Single`}),`, `,(0,M.jsx)(t.code,{children:`Multiple`}),`) and `,(0,M.jsx)(t.code,{children:`selectionBehavior`}),` controls how selection is triggered (`,(0,M.jsx)(t.code,{children:`Row`}),` = checkbox + row click, `,(0,M.jsx)(t.code,{children:`RowOnly`}),` = row click without checkbox column, `,(0,M.jsx)(t.code,{children:`RowSelector`}),` = checkbox only). Use the dropdowns to switch between modes and observe the `,(0,M.jsx)(t.code,{children:`onRowSelect`}),` event details.`]}),`
`,(0,M.jsx)(o,{sourceState:`none`,of:D}),`
`,(0,M.jsx)(t.h3,{id:`code-15`,children:`Code`}),`
`,(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-jsx`,children:`<AnalyticalTable
  data={data}
  columns={columns}
  selectionMode="Multiple" // "None" | "Single" | "Multiple"
  selectionBehavior="Row"  // "Row" | "RowOnly" | "RowSelector"
  onRowSelect={(e) => {
    const { row, isSelected, allRowsSelected, selectedRowIds } = e.detail;
    console.log(row?.original.name, isSelected, Object.keys(selectedRowIds).length);
  }}
/>
`})}),`
`,(0,M.jsx)(t.h2,{id:`multi-column-sorting`,children:`Multi-Column Sorting`}),`
`,(0,M.jsxs)(t.p,{children:[`Enable multi-column sorting by setting `,(0,M.jsx)(t.code,{children:`enableMultiSort: true`}),` on each column. Users can then hold Ctrl/Cmd and click additional column headers via the column menu to add sort levels. Without `,(0,M.jsx)(t.code,{children:`enableMultiSort`}),`, sorting a new column clears the previous sort. Use `,(0,M.jsx)(t.code,{children:`tableInstance.setSortBy()`}),` for programmatic control and `,(0,M.jsx)(t.code,{children:`tableInstance.state.sortBy`}),` to read the current sort priorities.`]}),`
`,(0,M.jsx)(o,{sourceState:`none`,of:C}),`
`,(0,M.jsx)(t.h3,{id:`code-16`,children:`Code`}),`
`,(0,M.jsxs)(`details`,{children:[(0,M.jsx)(`summary`,{children:`Show Code`}),(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-jsx`,children:`const MultiSortExample = () => {
  const tableInstanceRef = useRef(null);
  const [sortBy, setSortByState] = useState([]);

  const columns = useMemo(
    () => [
      { Header: 'Name', accessor: 'name', enableMultiSort: true },
      { Header: 'Age', accessor: 'age', enableMultiSort: true },
      { Header: 'Friend Name', accessor: 'friend.name', enableMultiSort: true },
    ],
    [],
  );

  // Derive expected state from event detail — instance.state.sortBy is not yet committed when onSort fires
  const onSort = useCallback((e) => {
    const { column, sortDirection } = e.detail;
    setSortByState((prev) => {
      if (sortDirection === 'clear') {
        return prev.filter((s) => s.id !== column.id);
      }
      const desc = sortDirection === 'desc';
      const idx = prev.findIndex((s) => s.id === column.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { id: column.id, desc };
        return next;
      }
      return [...prev, { id: column.id, desc }];
    });
  }, []);

  return (
    <>
      {/* Programmatic sort control */}
      <Button
        onClick={() => {
          tableInstanceRef.current?.setSortBy([
            { id: 'age', desc: false },
            { id: 'name', desc: false },
          ]);
          setSortByState([
            { id: 'age', desc: false },
            { id: 'name', desc: false },
          ]);
        }}
      >
        Sort: Age ↑, Name ↑
      </Button>
      <Button onClick={() => { tableInstanceRef.current?.setSortBy([]); setSortByState([]); }}>
        Clear Sort
      </Button>

      <AnalyticalTable
        data={data}
        columns={columns}
        sortable
        onSort={onSort}
        tableInstance={tableInstanceRef}
        reactTableOptions={{ autoResetSortBy: false }}
      />

      {/* Display current sort priorities */}
      <Text>
        {sortBy.map((s, i) => \`\${i + 1}. \${s.id} (\${s.desc ? 'desc' : 'asc'})\`).join(' → ')}
      </Text>
    </>
  );
};
`})})]}),`
`,(0,M.jsx)(t.h2,{id:`auto-resize-columns`,children:`Auto-Resize Columns`}),`
`,(0,M.jsxs)(t.p,{children:[`Set `,(0,M.jsx)(t.code,{children:`autoResizable: true`}),` on a column to enable auto-fit on double-click of the column resizer. The column width will adjust to fit the content. The `,(0,M.jsx)(t.code,{children:`onAutoResize`}),` callback fires with the column ID and the new width.`]}),`
`,(0,M.jsx)(o,{sourceState:`none`,of:x}),`
`,(0,M.jsx)(t.h3,{id:`code-17`,children:`Code`}),`
`,(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-jsx`,children:`const columns = [
  { Header: 'Name', accessor: 'name', autoResizable: true },
  { Header: 'Age', accessor: 'age', autoResizable: true },
  { Header: 'Description', accessor: 'description', autoResizable: true }
];

<AnalyticalTable
  data={data}
  columns={columns}
  onAutoResize={(e) => {
    const { columnId, width } = e.detail;
    console.log(\`Column "\${columnId}" resized to \${Math.round(width)}px\`);
  }}
/>
`})}),`
`,(0,M.jsx)(t.h2,{id:`custom-column-class-names`,children:`Custom Column Class Names`}),`
`,(0,M.jsxs)(t.p,{children:[`Use the `,(0,M.jsx)(t.code,{children:`className`}),` and `,(0,M.jsx)(t.code,{children:`classNameHeader`}),` column options to apply custom classes to a column's body cells and its header cell respectively. The two are independent — `,(0,M.jsx)(t.code,{children:`className`}),` only affects body cells, `,(0,M.jsx)(t.code,{children:`classNameHeader`}),` only the header cell.`]}),`
`,(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.strong,{children:`Note:`}),` Custom classes are merged with the table's internal classes and can therefore override internal styles. Use with caution!`]}),`
`,(0,M.jsx)(o,{sourceState:`none`,of:w}),`
`,(0,M.jsx)(t.h3,{id:`code-18`,children:`Code`}),`
`,(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-jsx`,children:`const columns = [
  {
    Header: 'Name',
    accessor: 'name',
    className: 'body-cell',
    classNameHeader: 'header-cell'
  },
  { Header: 'Age', accessor: 'age' }
];

// styles.css
// .header-cell { background-color: lightgrey; }
// .body-cell { background-color: lightblue; }

<AnalyticalTable data={data} columns={columns} />
`})}),`
`,(0,M.jsx)(l,{})]})}function j(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,M.jsx)(t,{...e,children:(0,M.jsx)(A,{...e})}):A(e)}var M;function N(){return(N=e((()=>{M=t(),r(),c(),i(),O()})))()}N();export{j as default};