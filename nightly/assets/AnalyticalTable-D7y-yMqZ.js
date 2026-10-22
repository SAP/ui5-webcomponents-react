import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{a as t,c as n,d as r,f as i,i as a,l as o,n as s,r as c,s as l,t as u,u as d}from"./AnalyticalTable.stories-BAHxMXgh.js";import{t as f}from"./jsx-runtime-BdxMnOeJ.js";import{i as p,r as m}from"./react-fLZJfuRT.js";import{_ as h,d as g,r as _,u as v}from"./blocks-BD0bJBIM.js";import{b as y,f as b,t as x,u as S}from"./components-C7NATuQn.js";var C;function w(){return(w=e((()=>{C="# AnalyticalTable Column Properties\n\nEach object in the `columns` array configures one column. Do not set `width` unless you need specific sizing — by default the table distributes space evenly.\n\n## Required\n\n| Property   | Type                                                                | Description                                                                                           |\n| ---------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |\n| `accessor` | `string` or `(originalRow, rowIndex, row, parentRows, data) => any` | Builds the data model for the column. Supports nested paths like `info.hobby` or `address[0].street`. |\n| `id`       | `string`                                                            | Unique column ID. Mandatory if `accessor` is not set or is a function.                                |\n\n## Optional\n\n| Property                | Type                                                 | Default          | Description                                                                                                                                 |\n| ----------------------- | ---------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |\n| `Header`                | `string` or `ComponentType`                          |                  | Column header text or component.                                                                                                            |\n| `headerLabel`           | `string`                                             |                  | `aria-label` for the column header (screen readers).                                                                                        |\n| `headerTooltip`         | `string`                                             |                  | Tooltip for the column header. Defaults to `Header` if it is a string.                                                                      |\n| `Cell`                  | `string` or `ComponentType<CellInstance>`            |                  | Custom cell renderer. Receives cell value as `props.value`. **Must be memoized** for performance.                                           |\n| `cellLabel`             | `({cell, instance}) => string`                       |                  | `aria-label` for individual cells (screen readers).                                                                                         |\n| `width`                 | `number`                                             |                  | Column width in pixels. If not set, the table distributes all columns without a width evenly. Cannot be less than `minWidth`.               |\n| `minWidth`              | `number`                                             | `60`             | Minimum column width.                                                                                                                       |\n| `maxWidth`              | `number`                                             |                  | Maximum column width.                                                                                                                       |\n| `hAlign`                | `TextAlign`                                          |                  | Horizontal cell alignment.                                                                                                                  |\n| `vAlign`                | `VerticalAlign`                                      |                  | Vertical cell alignment.                                                                                                                    |\n| `className`             | `string`                                             |                  | `className` applied to each body cell of the column.                                                                                        |\n| `classNameHeader`       | `string`                                             |                  | `className` applied to the header cell of the column.                                                                                       |\n| `Popover`               | `ComponentType` or `(instance) => ReactNode`         |                  | Custom header popover renderer. Replaces the internal header popover. Receives table instance with `popoverProps` (`openerRef`, `setOpen`). |\n| `Filter`                | `ComponentType`                                      |                  | Filter component rendered in the header.                                                                                                    |\n| `disableFilters`        | `boolean`                                            |                  | Disable filtering for this column.                                                                                                          |\n| `disableGlobalFilter`   | `boolean`                                            |                  | Exclude this column from global filter.                                                                                                     |\n| `defaultCanFilter`      | `boolean`                                            |                  | Make column filterable even without a valid `accessor`.                                                                                     |\n| `filter`                | `string` or `Function`                               |                  | Filter function. Built-in: `text`, `exactText`, `exactTextCase`, `equals`.                                                                  |\n| `disableSortBy`         | `boolean`                                            |                  | Disable sorting for this column.                                                                                                            |\n| `defaultCanSort`        | `boolean`                                            |                  | Make column sortable even without a valid `accessor`.                                                                                       |\n| `sortDescFirst`         | `boolean`                                            |                  | First sort direction is descending instead of ascending.                                                                                    |\n| `sortInverted`          | `boolean`                                            |                  | Invert underlying sort direction without changing the UI indicator.                                                                         |\n| `sortType`              | `string` or `(rowA, rowB, columnId, desc) => number` | `'alphanumeric'` | Sort function. Built-in: `basic`, `datetime`, `alphanumeric`. **Must be memoized** if a function.                                           |\n| `enableMultiSort`       | `boolean`                                            |                  | Allow multi-sort for this column.                                                                                                           |\n| `disableGroupBy`        | `boolean`                                            |                  | Disable grouping for this column.                                                                                                           |\n| `Aggregated`            | `string` or `ComponentType`                          |                  | Component to render for aggregated cells.                                                                                                   |\n| `aggregate`             | `string` or `(leafValues, aggregatedValues) => any`  |                  | Aggregation function. Built-in: `sum`, `min`, `max`, `minMax`, `average`, `median`, `unique`, `uniqueCount`, `count`.                       |\n| `aggregateValue`        | `string` or `(values, row, column) => any`           |                  | Resolve a primitive value for aggregation from non-primitive cell values.                                                                   |\n| `disableResizing`       | `boolean`                                            |                  | Disable column resizing.                                                                                                                    |\n| `autoResizable`         | `boolean`                                            |                  | Double-click resizer to auto-fit column width to content. Works best with default text content.                                             |\n| `disableDragAndDrop`    | `boolean`                                            |                  | Disable column reordering via drag and drop.                                                                                                |\n| `scaleWidthModeOptions` | `ScaleWidthModeOptions`                              |                  | Custom string for internal width calculation with `scaleWidthMode` `Grow` or `Smart`.                                                       |\n| `responsivePopIn`       | `boolean`                                            |                  | Move column content to the first cell when table width falls below `responsiveMinWidth`. At least one column must remain visible.           |\n| `responsiveMinWidth`    | `number`                                             |                  | Table width threshold for pop-in or hiding. If `responsivePopIn` is true, content moves; otherwise column hides.                            |\n| `PopInHeader`           | `string` or `ComponentType`                          |                  | Custom header for popped-in columns.                                                                                                        |\n| `popinDisplay`          | `AnalyticalTablePopinDisplay`                        | `Block`          | Display style for pop-in content.                                                                                                           |\n"})))()}function T(e){let i={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...p(),...e.components};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(g,{of:s}),`
`,(0,D.jsx)(b,{of:s}),`
`,(0,D.jsx)(`br`,{}),`
`,(0,D.jsx)(i.h2,{id:`example`,children:`Example`}),`
`,(0,D.jsx)(_,{of:t}),`
`,(0,D.jsx)(i.h3,{id:`code`,children:`Code`}),`
`,(0,D.jsxs)(`details`,{children:[(0,D.jsx)(`summary`,{children:`Show shortened Code`}),(0,D.jsx)(i.pre,{children:(0,D.jsx)(i.code,{className:`language-jsx`,children:`const columns = [
  {
    Header: 'Name',
    accessor: 'name'
  },
  {
    Header: 'Age',
    accessor: 'age'
  },
  {
    Header: 'Friend Name',
    accessor: 'friend.name'
  },
  {
    Header: 'Friend Age',
    accessor: 'friend.age'
  }
];

const data = [
  {
    age: 80,
    friend: {
      age: 68,
      name: 'Carver Vance'
    },
    name: 'Allen Best',
    status: 'Positive'
  },
  {
    age: 31,
    friend: {
      age: 70,
      name: 'Strickland Gallegos'
    },
    name: 'Combs Fleming',
    status: 'None'
  }
  // shortened for readability
];

const TableComp = () => {
  return (
    <AnalyticalTable
      columns={columns}
      data={data}
      visibleRows={5}
      onAutoResize={() => {}}
      onColumnsReorder={() => {}}
      onGroup={() => {}}
      onLoadMore={() => {}}
      onRowClick={() => {}}
      onRowExpandChange={() => {}}
      onRowSelect={() => {}}
      onSort={() => {}}
      onTableScroll={() => {}}
    />
  );
};
`})})]}),`
`,(0,D.jsx)(i.h2,{id:`properties`,children:`Properties`}),`
`,(0,D.jsx)(y,{of:t}),`
`,(0,D.jsx)(i.h2,{id:`column-properties`,children:`Column Properties`}),`
`,(0,D.jsx)(v,{children:C}),`
`,(0,D.jsx)(`br`,{}),`
`,(0,D.jsx)(i.h1,{id:`more-examples`,children:`More Examples`}),`
`,(0,D.jsx)(`br`,{}),`
`,(0,D.jsx)(i.h2,{id:`tree-table`,children:`Tree Table`}),`
`,(0,D.jsxs)(i.p,{children:[`Set `,(0,D.jsx)(i.code,{children:`isTreeTable`}),` to `,(0,D.jsx)(i.code,{children:`true`}),` and provide nested data via the `,(0,D.jsx)(i.code,{children:`subRows`}),` key (configurable with `,(0,D.jsx)(i.code,{children:`subRowsKey`}),`). Each row with `,(0,D.jsx)(i.code,{children:`subRows`}),` becomes expandable.`]}),`
`,(0,D.jsx)(_,{of:r,sourceState:`none`}),`
`,(0,D.jsxs)(i.p,{children:[`The `,(0,D.jsx)(i.code,{children:`data`}),` structure of the tree table is as follows:`]}),`
`,(0,D.jsx)(i.pre,{children:(0,D.jsx)(i.code,{className:`language-js`,children:`const data = {
    name: "Greg Miller",
    age: 35,
    friend: {
        name: "Rose Franco",
        age: 32,
    },
    status: "None",
    subRows: [
        {
            name: "Rick DeAngelo",
            age: 25,
            friend: {
                name: "Susanne Franco",
                age: 37,
            },
            status: "None",
            subRows: [...],
        },
    ],
    ...
};
`})}),`
`,(0,D.jsxs)(i.p,{children:[`In this example the default key for sub row detection is used (`,(0,D.jsx)(i.code,{children:`subRows`}),`), you can use any key you like by setting the `,(0,D.jsx)(i.code,{children:`subRowsKey`}),` prop.`]}),`
`,(0,D.jsx)(`br`,{}),`
`,(0,D.jsx)(i.h2,{id:`infinite-scrolling`,children:`Infinite Scrolling`}),`
`,(0,D.jsx)(i.p,{children:`The table initially contains 50 rows, when the last 10 rows are reached the table will load more data.`}),`
`,(0,D.jsxs)(i.p,{children:[(0,D.jsx)(i.strong,{children:`Note:`}),` To prevent the table state from resetting when the data is updated, please see `,(0,D.jsx)(i.a,{href:`?path=/docs/data-display-analyticaltable-faq--docs#how-to-stop-the-table-state-from-automatically-resetting-when-the-data-changes`,children:`this faq entry`}),`.`]}),`
`,(0,D.jsx)(_,{sourceState:`none`,of:l}),`
`,(0,D.jsx)(i.h3,{id:`code-1`,children:`Code`}),`
`,(0,D.jsxs)(`details`,{children:[(0,D.jsx)(`summary`,{children:`Show Code`}),(0,D.jsx)(i.pre,{children:(0,D.jsx)(i.code,{className:`language-jsx`,children:`const InfiniteScrollTable = (props) => {
  const [data, setData] = useState(props.data.slice(0, 50));
  const [loading, setLoading] = useState(false);
  const offset = useRef(50);
  const onLoadMore = () => {
    setLoading(true);
  };
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setData((prev) => [...prev, ...props.data.slice(offset.current, offset.current + 50)]);
        setLoading(false);
        offset.current += 50;
      }, 2000);
    }
  }, [loading, props.data, offset.current]);
  return (
    <AnalyticalTable
      data={data}
      columns={props.columns}
      infiniteScroll={true}
      infiniteScrollThreshold={10}
      header="Scroll to load more data"
      onLoadMore={onLoadMore}
      loading={loading}
      reactTableOptions={{ autoResetSelectedRows: false }}
    />
  );
};
`})})]}),`
`,(0,D.jsx)(i.h2,{id:`auto-row-count`,children:`Auto Row Count`}),`
`,(0,D.jsxs)(i.p,{children:[`Set `,(0,D.jsx)(i.code,{children:`visibleRowCountMode`}),` to `,(0,D.jsx)(i.code,{children:`AnalyticalTableVisibleRowCountMode.Auto`}),` or `,(0,D.jsx)(i.code,{children:`AutoWithEmptyRows`}),` to let the table automatically fill its container with rows.`]}),`
`,(0,D.jsx)(i.p,{children:(0,D.jsx)(i.strong,{children:`Prerequisites:`})}),`
`,(0,D.jsxs)(i.ul,{children:[`
`,(0,D.jsxs)(i.li,{children:[`The table `,(0,D.jsx)(i.strong,{children:`must`}),` be placed inside a container with a `,(0,D.jsx)(i.strong,{children:`defined height`}),` (e.g. `,(0,D.jsx)(i.code,{children:`height: 500px`}),`, `,(0,D.jsx)(i.code,{children:`flex: 1`}),`, or a CSS Grid row). Without a constrained parent, the table cannot determine how many rows to render.`]}),`
`,(0,D.jsxs)(i.li,{children:[(0,D.jsx)(i.code,{children:`AutoWithEmptyRows`}),` fills remaining space with empty rows when there aren't enough data rows to fill the container.`]}),`
`,(0,D.jsxs)(i.li,{children:[(0,D.jsx)(i.code,{children:`Auto`}),` may lead to inconsistent table heights depending on the container — prefer `,(0,D.jsx)(i.code,{children:`AutoWithEmptyRows`}),` for a stable layout.`]}),`
`]}),`
`,(0,D.jsx)(y,{of:c,include:[`containerHeight`,`visibleRowCountMode`],hideHTMLPropsNote:!0}),`
`,(0,D.jsx)(_,{sourceState:`none`,of:c}),`
`,(0,D.jsx)(i.h3,{id:`code-2`,children:`Code`}),`
`,(0,D.jsx)(i.pre,{children:(0,D.jsx)(i.code,{className:`language-jsx`,children:`const TableComponent = (props) => {
  return (
    <div style={{ height: \`\${props.containerHeight}px\` }}>
      <AnalyticalTable
        data={props.data}
        columns={props.columns}
        visibleRowCountMode={AnalyticalTableVisibleRowCountMode.Auto}
        // visibleRowCountMode={AnalyticalTableVisibleRowCountMode.AutoWithEmptyRows}
        header={\`Current height: \${props.containerHeight}px - Change the height in the table above\`}
      />
    </div>
  );
};
`})}),`
`,(0,D.jsx)(i.h2,{id:`responsive-columns-pop-in`,children:`Responsive Columns (Pop-In)`}),`
`,(0,D.jsx)(y,{of:d,hideHTMLPropsNote:!0,include:[`adjustTableHeightOnPopIn`,`containerWidth`]}),`
`,(0,D.jsxs)(i.p,{children:[`To responsively hide columns or move content to the first column, you can add the `,(0,D.jsx)(i.code,{children:`responsiveMinWidth`}),` column option. If
you want the column to "pop-in" the `,(0,D.jsx)(i.code,{children:`responsivePopIn`}),` has to be set to `,(0,D.jsx)(i.code,{children:`true`}),`, otherwise the column will be hidden when the
`,(0,D.jsx)(i.code,{children:`responsiveMinWidth`}),` exceeds the table width. It's also possible to change the header of the pop-in column by setting the
`,(0,D.jsx)(i.code,{children:`PopInHeader`}),` option.`]}),`
`,(0,D.jsxs)(i.p,{children:[(0,D.jsx)(i.strong,{children:`Note:`}),` It is recommended to offer column options such as filtering, sorting and grouping only for columns that are always displayed.`]}),`
`,(0,D.jsx)(i.p,{children:`In the example below you can have a look at this behavior:`}),`
`,(0,D.jsxs)(i.ul,{children:[`
`,(0,D.jsxs)(i.li,{children:[(0,D.jsx)(i.code,{children:`800`}),`: The content of the "Action" column is moved to the first column (`,(0,D.jsx)(i.code,{children:`responsiveMinWidth: 801`}),`)`]}),`
`,(0,D.jsxs)(i.li,{children:[(0,D.jsx)(i.code,{children:`600`}),`: The content of the "Age" column is moved to the first column (`,(0,D.jsx)(i.code,{children:`responsiveMinWidth: 601`}),`) and receives a custom header.`]}),`
`,(0,D.jsxs)(i.li,{children:[(0,D.jsx)(i.code,{children:`400`}),`: The content of the "Friend Name" column is moved to the first column and the "Friend Age" column is hidden (`,(0,D.jsx)(i.code,{children:`responsiveMinWidth: 401`}),`). The "Friend Name" column also receives a custom header.`]}),`
`]}),`
`,(0,D.jsx)(_,{sourceState:`none`,of:d}),`
`,(0,D.jsx)(i.h3,{id:`columns-config`,children:`Columns Config`}),`
`,(0,D.jsx)(i.pre,{children:(0,D.jsx)(i.code,{className:`language-jsx`,children:`const COLUMNS = [
  {
    Header: 'Name',
    accessor: 'name'
  },
  {
    disableSortBy: true,
    responsivePopIn: true,
    responsiveMinWidth: 601,
    PopInHeader: 'Custom Header Text (age)',
    Header: 'Age',
    accessor: 'age'
  },
  {
    disableSortBy: true,
    responsivePopIn: true,
    responsiveMinWidth: 401,
    Header: 'Friend Name',
    PopInHeader: (instance) => {
      return <div style={{ color: 'red' }}>Friend Name (custom)</div>;
    },
    accessor: 'friend.name'
  },
  { disableSortBy: true, responsiveMinWidth: 401, Header: 'Friend Age', accessor: 'friend.age' },
  {
    disableSortBy: true,
    responsivePopIn: true,
    responsiveMinWidth: 801,
    id: 'actions',
    Header: 'Actions',
    width: 100,
    disableResizing: true,
    Cell: (instance) => {
      return (
        <FlexBox>
          <Button icon="edit" />
          <Button icon="delete" />
        </FlexBox>
      );
    }
  },
  {
    id: 'popinDisplay',
    Header: 'PopinDisplay Modes',
    responsivePopIn: true,
    responsiveMinWidth: 801,
    popinDisplay: AnalyticalTablePopinDisplay.Block, // possible values: "Block", "Inline", "WithoutHeader"
    Cell: () => {
      return <Text maxLines={1}>Using popinDisplay: Block</Text>;
    }
  }
];
`})}),`
`,(0,D.jsx)(i.h3,{id:`how-to-change-the-content-of-the-pop-in-cell`,children:`How to change the content of the pop-in cell?`}),`
`,(0,D.jsxs)(i.p,{children:[`You can change the content of the pop-in cell without mutating the original cell by using the `,(0,D.jsx)(i.code,{children:`isPopIn`}),` prop of the table instance returned by the `,(0,D.jsx)(i.code,{children:`Cell`}),` column option.`]}),`
`,(0,D.jsxs)(i.p,{children:[(0,D.jsx)(i.strong,{children:`Note:`}),` The `,(0,D.jsx)(i.code,{children:`cell`}),` property of the custom `,(0,D.jsx)(i.code,{children:`Cell`}),` renderer, always returns the properties and values of the cell the "popin" cell is rendered into.`]}),`
`,(0,D.jsx)(i.pre,{children:(0,D.jsx)(i.code,{className:`language-js`,children:`const COLUMNS = [
  {
    Header: 'Name',
    accessor: 'name'
  },
  {
    responsivePopIn: true,
    responsiveMinWidth: 600,
    id: 'col',
    Header: 'Column',
    Cell: ({ isPopIn, cell, value }) => {
      if (isPopIn) {
        // this will log the properties of the \`name\` cell (e.g. \`cell.value\` is the value of the \`name\` cell)
        console.log(cell);
        // this will always log the value of this cell (\`col\` cell)
        console.log(value);
        return 'pop-in content';
      }
      // this will log the properties of this cell (e.g. \`cell.value\` is the value of the \`col\` cell)
      console.log(cell);
      // this will always log the value of this cell (\`col\` cell)
      console.log(value);
      return 'original content';
    }
  }
  // ...
];
`})}),`
`,(0,D.jsx)(i.h2,{id:`table-without-data`,children:`Table Without Data`}),`
`,(0,D.jsxs)(i.p,{children:[`Use the `,(0,D.jsx)(i.code,{children:`NoDataComponent`}),` prop to customize the empty state. By default, a simple text message is shown. You can pass a custom component (e.g. an `,(0,D.jsx)(i.code,{children:`IllustratedMessage`}),`) to display a richer empty state for different scenarios like "no data" vs. "no filter results". The component receives an `,(0,D.jsx)(i.code,{children:`accessibleRole`}),` prop that should be forwarded for accessibility.`]}),`
`,(0,D.jsxs)(i.p,{children:[(0,D.jsx)(i.strong,{children:`Note:`}),` When using an `,(0,D.jsx)(i.code,{children:`IllustratedMessage`}),` as `,(0,D.jsx)(i.code,{children:`NoDataComponent`}),`, the table must have sufficient height for the illustration to render properly. With `,(0,D.jsx)(i.code,{children:`visibleRowCountMode`}),` set to `,(0,D.jsx)(i.code,{children:`Auto`}),` or `,(0,D.jsx)(i.code,{children:`AutoWithEmptyRows`}),`, the table container needs a minimum height of approximately `,(0,D.jsx)(i.code,{children:`300px`}),`. With the default `,(0,D.jsx)(i.code,{children:`Fixed`}),` mode, ensure `,(0,D.jsx)(i.code,{children:`visibleRows`}),` provides enough vertical space (typically 5+ rows).`]}),`
`,(0,D.jsx)(_,{of:o}),`
`,(0,D.jsx)(i.h3,{id:`code-3`,children:`Code`}),`
`,(0,D.jsxs)(`details`,{children:[(0,D.jsx)(`summary`,{children:`Show static code`}),(0,D.jsx)(i.pre,{children:(0,D.jsx)(i.code,{className:`language-tsx`,children:`function NoDataTable(props) {
  const [selected, setSelected] = useState('noData');
  const [filtered, setFiltered] = useState(false);
  const handleChange: SegmentedButtonPropTypes['onSelectionChange'] = (e) => {
    const { key } = e.detail.selectedItems[0].dataset;
    setSelected(key);
    if (key === 'data') {
      setFiltered(false);
    }
  };
  const handleClick: ToggleButtonPropTypes['onClick'] = (e) => {
    setFiltered(!!e.target.pressed);
  };

  const NoDataComponent: AnalyticalTablePropTypes['NoDataComponent'] =
    selected === 'noData'
      ? undefined
      : (props) => {
          return filtered ? (
            <IllustratedMessage role={props.accessibleRole} name={NoFilterResults} />
          ) : (
            <IllustratedMessage role={props.accessibleRole} name={NoDataIllustration} />
          );
        };
  return (
    <>
      <SegmentedButton onSelectionChange={handleChange} accessibleName="Select data view mode">
        <SegmentedButtonItem selected={selected === 'noData'} data-key="noData">
          Default NoData Component
        </SegmentedButtonItem>
        <SegmentedButtonItem selected={selected === 'illustratedMessage'} data-key="illustratedMessage">
          IllustratedMessage NoData Component
        </SegmentedButtonItem>
        <SegmentedButtonItem selected={selected === 'data'} data-key="data">
          With Data
        </SegmentedButtonItem>
      </SegmentedButton>{' '}
      |{' '}
      <ToggleButton onClick={handleClick} pressed={filtered} disabled={selected === 'data'}>
        Table filtered
      </ToggleButton>
      <AnalyticalTable
        {...props}
        data={selected === 'data' ? props.data : []}
        globalFilterValue={filtered ? 'Non-existing text' : undefined}
        NoDataComponent={NoDataComponent}
      />
    </>
  );
}
`})})]}),`
`,(0,D.jsx)(i.h2,{id:`context-menu`,children:`Context Menu`}),`
`,(0,D.jsxs)(i.p,{children:[`The `,(0,D.jsx)(i.code,{children:`onRowContextMenu`}),` callback fires when a row is right-clicked. It provides the `,(0,D.jsx)(i.code,{children:`row`}),` and `,(0,D.jsx)(i.code,{children:`column`}),` (if the click targeted a specific cell) in `,(0,D.jsx)(i.code,{children:`e.detail`}),`. The native browser context menu is `,(0,D.jsx)(i.strong,{children:`not`}),` suppressed — call `,(0,D.jsx)(i.code,{children:`e.preventDefault()`}),` in your callback to replace it with a custom menu.`]}),`
`,(0,D.jsx)(i.p,{children:`This example shows two tables with products that can be moved between them via buttons or a right-click context menu.`}),`
`,(0,D.jsx)(_,{sourceState:`none`,of:a}),`
`,(0,D.jsx)(i.h3,{id:`code-4`,children:`Code`}),`
`,(0,D.jsxs)(`details`,{children:[(0,D.jsx)(`summary`,{children:`Show Code`}),(0,D.jsx)(i.pre,{children:(0,D.jsx)(i.code,{className:`language-tsx`,children:`const productData = [
  { id: '1', product: 'Laptop Pro 15', category: 'Electronics', price: 1299 },
  { id: '2', product: 'Wireless Mouse', category: 'Accessories', price: 49 },
  // ...
];

type Product = (typeof productData)[number];

const productColumns = [
  { Header: 'Product', accessor: 'product' },
  { Header: 'Category', accessor: 'category' },
  { Header: 'Price', accessor: 'price', hAlign: TextAlign.End },
];

function ContextMenuExample() {
  const [availableProducts, setAvailableProducts] = useState(productData);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [checkedAvailable, setCheckedAvailable] = useState<Product[]>([]);
  const [checkedSelected, setCheckedSelected] = useState<Product[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuTarget, setMenuTarget] = useState<'available' | 'selected'>('available');
  const [contextRow, setContextRow] = useState<Product | null>(null);
  const anchorRef = useRef<HTMLDivElement>(null);
  const rafId = useRef(0);
  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  const moveToSelected = (rows: Product[]) => {
    const ids = new Set(rows.map((r) => r.id));
    setAvailableProducts((prev) => prev.filter((p) => !ids.has(p.id)));
    setSelectedProducts((prev) => [...prev, ...rows.filter((r) => !prev.some((p) => p.id === r.id))]);
    setCheckedAvailable([]);
  };

  const moveToAvailable = (rows: Product[]) => {
    const ids = new Set(rows.map((r) => r.id));
    setSelectedProducts((prev) => prev.filter((p) => !ids.has(p.id)));
    setAvailableProducts((prev) => [...prev, ...rows.filter((r) => !prev.some((p) => p.id === r.id))]);
    setCheckedSelected([]);
  };

  const handleRowSelect: (
    setter: typeof setCheckedAvailable
  ) => AnalyticalTablePropTypes['onRowSelect'] = (setter) => (e) => {
    const rows = Object.values(e.detail.rowsById)
      .filter((r) => e.detail.selectedRowIds[r.id])
      .map((r) => r.original as Product);
    setter(rows);
  };

  const handleContextMenu: (
    target: 'available' | 'selected'
  ) => AnalyticalTablePropTypes['onRowContextMenu'] = (target) => (e) => {
    e.preventDefault();
    setContextRow(e.detail.row.original as Product);
    setMenuTarget(target);
    if (anchorRef.current) {
      anchorRef.current.style.left = \`\${e.clientX}px\`;
      anchorRef.current.style.top = \`\${e.clientY}px\`;
    }
    // Defer open so it runs after the menu's onClose from the previous right-click.
    setMenuOpen(false);
    rafId.current = requestAnimationFrame(() => setMenuOpen(true));
  };

  const handleMenuItemClick = () => {
    if (!contextRow) {
      return;
    }
    if (menuTarget === 'available') {
      moveToSelected([contextRow]);
    } else {
      moveToAvailable([contextRow]);
    }
    setMenuOpen(false);
    setContextRow(null);
  };

  return (
    <>
      <FlexBox alignItems={FlexBoxAlignItems.Start} style={{ gap: '0.5rem' }}>
        <AnalyticalTable
          header="Available Products"
          columns={productColumns}
          data={availableProducts}
          selectionMode="Multiple"
          onRowContextMenu={handleContextMenu('available')}
          onRowSelect={handleRowSelect(setCheckedAvailable)}
          style={{ flex: 1 }}
        />
        <FlexBox
          direction={FlexBoxDirection.Column}
          justifyContent={FlexBoxJustifyContent.Center}
          style={{ alignSelf: 'center' }}
        >
          <Button icon="navigation-right-arrow" onClick={() => moveToSelected(checkedAvailable)} />
          <Button icon="navigation-left-arrow" onClick={() => moveToAvailable(checkedSelected)} />
        </FlexBox>
        <AnalyticalTable
          header="Selected Products"
          columns={productColumns}
          data={selectedProducts}
          selectionMode="Multiple"
          onRowContextMenu={handleContextMenu('selected')}
          onRowSelect={handleRowSelect(setCheckedSelected)}
          style={{ flex: 1 }}
        />
      </FlexBox>
      {/* Hidden anchor for Menu positioning */}
      <div
        ref={anchorRef}
        style={{ position: 'fixed', width: 0, height: 0, pointerEvents: 'none' }}
      />
      {menuOpen && (
        <Menu open opener={anchorRef.current} onClose={() => setMenuOpen(false)} onItemClick={handleMenuItemClick}>
          <MenuItem
            text={\`Move to \${menuTarget === 'available' ? 'Selected Products' : 'Available Products'}\`}
            icon={menuTarget === 'available' ? 'navigation-right-arrow' : 'navigation-left-arrow'}
          />
        </Menu>
      )}
    </>
  );
}
`})})]}),`
`,(0,D.jsx)(i.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,D.jsxs)(i.p,{children:[`This example demonstrates possible accessibility configuration for the `,(0,D.jsx)(i.code,{children:`AnalyticalTable`}),`:`]}),`
`,(0,D.jsxs)(i.ul,{children:[`
`,(0,D.jsxs)(i.li,{children:[(0,D.jsx)(i.strong,{children:(0,D.jsx)(i.code,{children:`accessibleName`})}),`: Sets a concise `,(0,D.jsx)(i.code,{children:`aria-label`}),` on the table grid, giving screen readers a meaningful table name.`]}),`
`,(0,D.jsxs)(i.li,{children:[(0,D.jsx)(i.strong,{children:(0,D.jsx)(i.code,{children:`accessibleNameRef`})}),`: References the ID of an external labelling element via `,(0,D.jsx)(i.code,{children:`aria-labelledby`}),`. When either `,(0,D.jsx)(i.code,{children:`accessibleName`}),` or `,(0,D.jsx)(i.code,{children:`accessibleNameRef`}),` is set, the automatic connection to the `,(0,D.jsx)(i.code,{children:`header`}),` prop is removed.`]}),`
`,(0,D.jsxs)(i.li,{children:[(0,D.jsx)(i.strong,{children:(0,D.jsx)(i.code,{children:`headerLabel`})}),` (column option): Provides a screen-reader-accessible label for column headers that have no textual content.`]}),`
`,(0,D.jsxs)(i.li,{children:[(0,D.jsx)(i.strong,{children:(0,D.jsx)(i.code,{children:`cellLabel`})}),` (column option): Returns a descriptive `,(0,D.jsx)(i.code,{children:`aria-label`}),` for cells whose visual content is not self-explanatory.`]}),`
`]}),`
`,(0,D.jsx)(i.p,{children:(0,D.jsx)(i.strong,{children:`Note:`})}),`
`,(0,D.jsxs)(i.ul,{children:[`
`,(0,D.jsxs)(i.li,{children:[`The example also includes the `,(0,D.jsx)(i.a,{href:`?path=/docs/data-display-analyticaltable-plugin-hooks--docs#announce-empty-cells`,children:`useAnnounceEmptyCells`}),` plugin hook, which adds explicit empty-cell announcements for screen readers that do not detect them on their own. As this could lead to duplicate screen reader announcement, use with caution.`]}),`
`,(0,D.jsxs)(i.li,{children:[`When the `,(0,D.jsx)(i.code,{children:`header`}),` prop is set, its text is automatically used as the table's accessible name. To provide a different accessible name, use `,(0,D.jsx)(i.code,{children:`accessibleName`}),` or `,(0,D.jsx)(i.code,{children:`accessibleNameRef`}),` instead.`]}),`
`]}),`
`,(0,D.jsx)(_,{of:u}),`
`,(0,D.jsx)(i.h2,{id:`kitchen-sink`,children:`Kitchen Sink`}),`
`,(0,D.jsxs)(i.p,{children:[`A comprehensive example combining many AnalyticalTable features: sorting, filtering, grouping, custom cells, row and navigation highlighting, infinite scrolling, column reordering, vertical alignment, `,(0,D.jsx)(i.code,{children:`scaleWidthModeOptions`}),` for custom renderers, `,(0,D.jsx)(i.code,{children:`retainColumnWidth`}),`, `,(0,D.jsx)(i.code,{children:`sortDescFirst`}),`, and more.`]}),`
`,(0,D.jsx)(_,{of:n}),`
`,(0,D.jsx)(i.h3,{id:`code-5`,children:`Code`}),`
`,(0,D.jsxs)(`details`,{children:[(0,D.jsx)(`summary`,{children:`Show shortened Code`}),(0,D.jsx)(i.pre,{children:(0,D.jsx)(i.code,{className:`language-jsx`,children:`const data = [
  {
    age: 80,
    friend: {
      age: 68,
      name: 'Carver Vance'
    },
    name: 'Allen Best',
    status: 'Positive'
  },
  {
    age: 31,
    friend: {
      age: 70,
      name: 'Strickland Gallegos'
    },
    name: 'Combs Fleming',
    status: 'None'
  }
  // shortened for readability
];

const columns = [
  {
    Header: 'Name',
    accessor: 'name',
    autoResizable: true,
    headerTooltip: 'Full Name'
  },
  {
    Header: 'Age',
    accessor: 'age',
    autoResizable: true,
    className: 'superCustomClass',
    disableFilters: false,
    disableGroupBy: true,
    disableSortBy: false,
    hAlign: 'End',
    sortDescFirst: true
  },
  {
    Header: 'Friend Name',
    accessor: 'friend.name',
    autoResizable: true,
    vAlign: VerticalAlign.Middle
  },
  {
    Filter: () => {},
    Header: () => {},
    accessor: 'friend.age',
    autoResizable: true,
    filter: () => {},
    hAlign: 'End',
    headerLabel: 'Friend Age',
    scaleWidthModeOptions: { headerString: 'Friend Age' }
  },
  {
    Header: 'Status',
    id: 'os',
    Cell: () => {},
    scaleWidthModeOptions: { cellString: 'Negative' }
  },
  {
    Cell: () => {},
    Header: 'Actions',
    accessor: '.',
    cellLabel: () => {},
    disableFilters: true,
    disableGlobalFilter: true,
    disableGroupBy: true,
    disableResizing: true,
    disableSortBy: true,
    disableDragAndDrop: true,
    id: 'actions',
    minWidth: 100,
    width: 100
  }
];

const TestComp2 = () => {
  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      alternateRowColor
      columnOrder={['friend.name', 'friend.age', 'name']}
      extension={
        <FlexBox justifyContent="End">
          <Button accessibleName="edit" design="Transparent" icon="edit" />
        </FlexBox>
      }
      filterable
      groupable
      header="Table Title"
      headerRowHeight={60}
      highlightField="status"
      infiniteScroll
      infiniteScrollThreshold={20}
      loadingDelay={1000}
      minRows={5}
      noDataText="Custom 'noDataText' message"
      overscanCountHorizontal={5}
      retainColumnWidth
      scaleWidthMode="Smart"
      selectedRowIds={{
        3: true
      }}
      selectionBehavior="Row"
      selectionMode="Single"
      sortable
      subRowsKey="subRows"
      visibleRowCountMode="Interactive"
      visibleRows={5}
      withNavigationHighlight
      withRowHighlight
      onAutoResize={() => {}}
      onColumnsReorder={() => {}}
      onGroup={() => {}}
      onLoadMore={() => {}}
      onRowClick={() => {}}
      onRowExpandChange={() => {}}
      onRowSelect={() => {}}
      onSort={() => {}}
      onTableScroll={() => {}}
    />
  );
};
`})})]}),`
`,(0,D.jsx)(S,{})]})}function E(e={}){let{wrapper:t}={...p(),...e.components};return t?(0,D.jsx)(t,{...e,children:(0,D.jsx)(T,{...e})}):T(e)}var D;function O(){return(O=e((()=>{D=f(),m(),x(),h(),i(),w()})))()}O();export{E as default};