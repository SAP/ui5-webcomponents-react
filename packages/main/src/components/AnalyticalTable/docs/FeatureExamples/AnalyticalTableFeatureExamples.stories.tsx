import dataSmall from '@sb/mockData/Friends50.json';
import dataLarge from '@sb/mockData/Friends500.json';
import type { Meta, StoryObj } from '@storybook/react-vite';
import NoDataIllustration from '@ui5/webcomponents-fiori/dist/illustrations/NoData.js';
import '@ui5/webcomponents-icons/dist/sort-ascending.js';
import '@ui5/webcomponents-icons/dist/sort-descending.js';
import '@ui5/webcomponents-icons/dist/reset.js';
import { memo, useCallback, useMemo, useReducer, useRef, useState } from 'react';
import {
  AnalyticalTableScaleWidthMode,
  AnalyticalTableSelectionBehavior,
  AnalyticalTableSelectionMode,
  AnalyticalTableSubComponentsBehavior,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxWrap,
  IndicationColor,
  TextAlign,
} from '../../../../enums/index.js';
import { Button } from '../../../../webComponents/Button/index.js';
import { Dialog } from '../../../../webComponents/Dialog/index.js';
import { IllustratedMessage } from '../../../../webComponents/IllustratedMessage/index.js';
import { Input } from '../../../../webComponents/Input/index.js';
import { MultiComboBox } from '../../../../webComponents/MultiComboBox/index.js';
import { MultiComboBoxItem } from '../../../../webComponents/MultiComboBoxItem/index.js';
import { Option } from '../../../../webComponents/Option/index.js';
import { Popover } from '../../../../webComponents/Popover/index.js';
import { Select } from '../../../../webComponents/Select/index.js';
import { Tag } from '../../../../webComponents/Tag/index.js';
import { Text } from '../../../../webComponents/Text/index.js';
import { ToggleButton } from '../../../../webComponents/ToggleButton/index.js';
import { FlexBox } from '../../../FlexBox/index.js';
import { ObjectStatus } from '../../../ObjectStatus/index.js';
import type { AnalyticalTableColumnDefinition, AnalyticalTablePropTypes } from '../../index.js';
import { AnalyticalTable } from '../../index.js';
import meta from '../AnalyticalTable.stories.js';

const recipesMeta = {
  ...meta,
  title: 'Data Display / AnalyticalTable / Feature Examples',
  tags: ['package:@ui5/webcomponents-react'],
} satisfies Meta<typeof AnalyticalTable>;
export default recipesMeta;
type Story = StoryObj<typeof recipesMeta>;

export const NavigationIndicator: Story = {
  args: { withNavigationHighlight: true, selectionMode: AnalyticalTableSelectionMode.Multiple, data: dataLarge },
  render: (args) => {
    const [selectedRow, setSelectedRow] = useState();
    const onRowSelect = (e) => {
      setSelectedRow(e.detail.row);
    };
    const markNavigatedRow = useCallback(
      (row) => {
        return selectedRow?.id === row.id;
      },
      [selectedRow],
    );
    return <AnalyticalTable {...args} markNavigatedRow={markNavigatedRow} onRowSelect={onRowSelect} />;
  },
};

export const CustomFilter: Story = {
  args: {
    data: dataLarge,
    filterable: true,
  },
  render: (args) => {
    const filterFn = useCallback((rows, accessor, filterValue) => {
      if (filterValue.length > 0) {
        return rows.filter((row) => {
          const rowVal = row.values[accessor];
          return !!filterValue.some((item) => rowVal.includes(item));
        });
      }
      return rows;
    }, []);
    const columns: AnalyticalTableColumnDefinition[] = useMemo(
      () => [
        {
          Header: 'Custom Column Filter',
          accessor: 'name',
          filter: filterFn,
          Filter: ({ column }) => {
            const firstNames = ['Carl', 'Dan', 'Rose', 'Susanne'];
            return (
              <MultiComboBox
                placeholder="Filter Names"
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
          },
        },
        {
          Header: 'Age',
          accessor: 'age',
        },
      ],
      [],
    );
    return <AnalyticalTable {...args} columns={columns} />;
  },
};

export const Subcomponents: Story = {
  args: {
    subComponentsBehavior: AnalyticalTableSubComponentsBehavior.Expandable,
  },
  render: (args) => {
    const renderRowSubComponent = useCallback((row) => {
      if (row.id === '0') {
        return (
          <FlexBox
            style={{ backgroundColor: 'lightblue', height: '300px' }}
            justifyContent="Center"
            alignItems={FlexBoxAlignItems.Center}
            direction={FlexBoxDirection.Column}
          >
            <Tag>height: 300px</Tag>
            <Text>This subcomponent will only be displayed below the first row.</Text>
            <hr />
            <Text>
              The button below is rendered with `data-subcomponent-active-element` attribute to ensure consistent focus
              behavior
            </Text>
            <Button data-subcomponent-active-element>Click</Button>
          </FlexBox>
        );
      }
      if (row.id === '1') {
        return (
          <FlexBox
            style={{ backgroundColor: 'lightyellow', height: '100px' }}
            justifyContent="Center"
            alignItems={FlexBoxAlignItems.Center}
            direction={FlexBoxDirection.Column}
          >
            <Tag>height: 100px</Tag>
            <Text>This subcomponent will only be displayed below the second row.</Text>
          </FlexBox>
        );
      }
      if (row.id === '2') {
        return null;
      }
      return (
        <FlexBox
          style={{ backgroundColor: 'lightgrey', height: '50px' }}
          justifyContent="Center"
          alignItems={FlexBoxAlignItems.Center}
          direction={FlexBoxDirection.Column}
        >
          <Tag>height: 50px</Tag>
          <Text>This subcomponent will be displayed below all rows except the first, second and third.</Text>
        </FlexBox>
      );
    }, []);

    return (
      <AnalyticalTable
        {...args}
        renderRowSubComponent={renderRowSubComponent}
        header={`subComponentsBehavior: "${args.subComponentsBehavior}"`}
      />
    );
  },
};

export const ScaleWidthModeComparison: Story = {
  render(args) {
    const statuses = [
      'Available',
      'Out of Office',
      'Do Not Disturb',
      'Away',
      'Temporarily Unavailable — On Extended Leave Until Further Notice',
    ];
    const data = useMemo(
      () =>
        Array.from({ length: 10 }, (_, i) => ({
          id: i,
          name: [
            'Al',
            'Bob',
            'Jonathan Wetherby Longnamington the Third of Blackcastle',
            'Di',
            'Eve Martinez de la Cruz',
          ][i % 5],
          age: 20 + i * 3,
          score: Math.round(50 + Math.sin(i) * 40),
          status: statuses[i % 5],
          tiny: 'X',
        })),
      [],
    );
    const columns = useMemo<AnalyticalTableColumnDefinition[]>(
      () => [
        { Header: 'ID', accessor: 'id', hAlign: TextAlign.End },
        { Header: 'Name', accessor: 'name' },
        {
          Header: 'Status',
          accessor: 'status',
          Cell: ({ value }) => <Tag>{value}</Tag>,
          // Smart/Grow can't measure custom cells — provide the longest expected text
          scaleWidthModeOptions: { cellString: 'Temporarily Unavailable — On Extended Leave Until Further Notice' },
        },
        { Header: 'Age', accessor: 'age', hAlign: TextAlign.End },
        {
          accessor: 'score',
          hAlign: TextAlign.End,
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
        { Header: 'T', accessor: 'tiny' },
      ],
      [],
    );

    return (
      <FlexBox direction={FlexBoxDirection.Column} style={{ gap: '2rem' }}>
        {(['Default', 'Smart', 'Grow'] as const).map((mode) => (
          <AnalyticalTable
            key={mode}
            data={data}
            columns={columns}
            scaleWidthMode={AnalyticalTableScaleWidthMode[mode]}
            header={`scaleWidthMode: "${mode}"`}
            visibleRows={3}
          />
        ))}
      </FlexBox>
    );
  },
};

export const Grouping: Story = {
  args: {
    data: dataLarge,
    groupable: true,
    visibleRows: 8,
  },
  render(args) {
    const [groupBy, setGroupBy] = useState<string[]>([]);
    const [lastGroupEvent, setLastGroupEvent] = useState('');

    const columns = useMemo<AnalyticalTableColumnDefinition[]>(
      () => [
        { Header: 'Name', accessor: 'name', disableGroupBy: true },
        {
          Header: 'Age',
          accessor: 'age',
          hAlign: TextAlign.End,
          aggregate: 'average',
          Aggregated: (instance) => `Avg: ${Math.round(instance.value)}`,
        },
        {
          Header: 'Status',
          accessor: 'status',
          aggregate: (leafValues) => {
            const severity = ['Negative', 'Critical', 'Positive', 'Information', 'None'];
            return leafValues.reduce(
              (highest, val) => (severity.indexOf(val) < severity.indexOf(highest) ? val : highest),
              'None',
            );
          },
          Aggregated: (instance) => `Max: ${instance.value}`,
        },
        { Header: 'Friend Name', accessor: 'friend.name', disableGroupBy: true },
      ],
      [],
    );

    const onGroup = (e) => {
      const { column, groupedColumns, isGrouped } = e.detail;
      setLastGroupEvent(
        `Column "${column.Header}" ${isGrouped ? 'grouped' : 'ungrouped'}. Active groups: [${groupedColumns.join(', ')}]`,
      );
    };

    return (
      <>
        <FlexBox style={{ gap: '0.5rem', marginBlockEnd: '0.5rem' }}>
          <Button onClick={() => setGroupBy(['status'])}>Group by Status</Button>
          <Button onClick={() => setGroupBy(['age'])}>Group by Age</Button>
          <Button onClick={() => setGroupBy(['status', 'age'])}>Group by Status + Age</Button>
          <Button onClick={() => setGroupBy([])}>Clear Groups</Button>
        </FlexBox>
        <AnalyticalTable {...args} columns={columns} groupBy={groupBy} onGroup={onGroup} />
        <Text style={{ marginBlockStart: '0.5rem', display: 'block' }}>
          {lastGroupEvent || 'Group columns via the column header menu or the buttons above.'}
        </Text>
      </>
    );
  },
};

export const ServerSideOperations: Story = {
  render(args) {
    type Row = { name: string; age: number; department: string };

    const allData = useMemo<Row[]>(
      () =>
        Array.from({ length: 50 }, (_, i) => ({
          name:
            ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank', 'Grace', 'Hank', 'Iris', 'Jack'][i % 10] + ` #${i}`,
          age: 20 + (i % 50),
          department: ['Engineering', 'Sales', 'Marketing', 'Support', 'HR'][i % 5],
        })),
      [],
    );

    const columns = useMemo<AnalyticalTableColumnDefinition[]>(
      () => [
        { Header: 'Name', accessor: 'name', disableGroupBy: true },
        { Header: 'Age', accessor: 'age', hAlign: TextAlign.End, disableGroupBy: true },
        { Header: 'Department', accessor: 'department' },
      ],
      [],
    );

    const [data, setData] = useState<Record<string, unknown>[]>(allData);
    const [loading, setLoading] = useState(false);

    // opsRef + applyOps simulate a backend that receives all active parameters in one request.
    const opsRef = useRef<{
      sort?: { columnId: string; direction: string };
      filter?: { columnId: string; value: string };
      groupedColumns: string[];
    }>({ groupedColumns: [] });

    const applyOps = useCallback(
      (ops: typeof opsRef.current) => {
        setLoading(true);
        setTimeout(() => {
          let rows: Row[] = allData;

          if (ops.filter?.value) {
            const { columnId, value } = ops.filter;
            rows = rows.filter((row) => String(row[columnId]).toLowerCase().includes(value.toLowerCase()));
          }

          if (ops.sort && ops.sort.direction !== 'none') {
            const { columnId, direction } = ops.sort;
            rows = [...rows].sort((a, b) => {
              const aVal = a[columnId];
              const bVal = b[columnId];
              if (typeof aVal === 'number') return direction === 'asc' ? aVal - bVal : bVal - aVal;
              return direction === 'asc'
                ? String(aVal).localeCompare(String(bVal))
                : String(bVal).localeCompare(String(aVal));
            });
          }

          if (ops.groupedColumns.length > 0) {
            const groupCol = ops.groupedColumns[0];
            const groups = new Map<string, Row[]>();
            for (const row of rows) {
              const key = String(row[groupCol]);
              const existing = groups.get(key);
              if (existing) {
                existing.push(row);
              } else {
                groups.set(key, [row]);
              }
            }
            setData(
              Array.from(groups.entries()).map(([key, children]) => ({
                [groupCol]: key,
                subRows: children,
              })),
            );
          } else {
            setData(rows);
          }

          setLoading(false);
        }, 500);
      },
      [allData],
    );

    const onSort = useCallback(
      (e) => {
        const { column, sortDirection } = e.detail;
        opsRef.current.sort = { columnId: column.id, direction: sortDirection };
        applyOps(opsRef.current);
      },
      [applyOps],
    );

    const onFilter = useCallback(
      (e) => {
        const { columnId, value } = e;
        opsRef.current.filter = value ? { columnId: String(columnId), value } : undefined;
        applyOps(opsRef.current);
      },
      [applyOps],
    );

    const onGroup = useCallback(
      (e) => {
        const { groupedColumns } = e.detail;
        opsRef.current.groupedColumns = groupedColumns;
        applyOps(opsRef.current);
      },
      [applyOps],
    );

    const reactTableOptions = useMemo(
      () => ({
        manualSortBy: true,
        manualFilters: true,
        manualGroupBy: true,
        autoResetGroupBy: false,
        autoResetExpanded: false,
      }),
      [],
    );

    return (
      <AnalyticalTable
        {...args}
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
        visibleRows={8}
        header="Server-Side Operations (simulated 500ms delay)"
      />
    );
  },
};

export const LoadingStates: Story = {
  render(args) {
    const [hasData, setHasData] = useState(true);
    const [loading, setLoading] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const [alwaysShowBusyIndicator, setAlwaysShowBusyIndicator] = useState(false);
    const [customNoData, setCustomNoData] = useState(false);

    const data = useMemo(() => (hasData ? dataSmall : []), [hasData]);

    const NoDataComponent: AnalyticalTablePropTypes['NoDataComponent'] = !customNoData
      ? undefined
      : loading
        ? undefined
        : (props) => <IllustratedMessage role={props.accessibleRole} name={NoDataIllustration} />;

    return (
      <>
        <FlexBox style={{ gap: '0.5rem', marginBlockEnd: '0.5rem' }} wrap={FlexBoxWrap.Wrap}>
          <ToggleButton pressed={loading} onClick={() => setLoading((prev) => !prev)}>
            loading
          </ToggleButton>
          <ToggleButton pressed={showOverlay} onClick={() => setShowOverlay((prev) => !prev)}>
            showOverlay
          </ToggleButton>
          <ToggleButton pressed={alwaysShowBusyIndicator} onClick={() => setAlwaysShowBusyIndicator((prev) => !prev)}>
            alwaysShowBusyIndicator
          </ToggleButton>
          <ToggleButton pressed={!hasData} onClick={() => setHasData((prev) => !prev)}>
            Empty data
          </ToggleButton>
          <ToggleButton pressed={customNoData} onClick={() => setCustomNoData((prev) => !prev)}>
            Custom NoDataComponent
          </ToggleButton>
        </FlexBox>
        <AnalyticalTable
          {...args}
          data={data}
          loading={loading}
          showOverlay={showOverlay}
          alwaysShowBusyIndicator={alwaysShowBusyIndicator}
          NoDataComponent={NoDataComponent}
          loadingDelay={500}
          header={`loading: ${loading} | showOverlay: ${showOverlay} | alwaysShowBusyIndicator: ${alwaysShowBusyIndicator} | data: ${hasData ? '50 rows' : 'empty'}`}
        />
      </>
    );
  },
};

export const ControlledSelection: Story = {
  render(args) {
    const [selectedRowIds, setSelectedRowIds] = useState<Record<string, boolean>>({});
    const data = useMemo(() => dataSmall.slice(0, 20), []);

    const onRowSelect = useCallback((e) => {
      setSelectedRowIds({ ...e.detail.selectedRowIds });
    }, []);

    const selectedCount = Object.keys(selectedRowIds).length;

    return (
      <>
        <FlexBox style={{ gap: '0.5rem', marginBlockEnd: '0.5rem' }} wrap={FlexBoxWrap.Wrap}>
          <Button
            onClick={() => {
              const all: Record<string, boolean> = {};
              data.forEach((_, i) => {
                all[i] = true;
              });
              setSelectedRowIds(all);
            }}
          >
            Select All ({data.length})
          </Button>
          <Button onClick={() => setSelectedRowIds({})}>Clear All</Button>
          <Button
            onClick={() => {
              const first5: Record<string, boolean> = {};
              for (let i = 0; i < 5; i++) first5[i] = true;
              setSelectedRowIds(first5);
            }}
          >
            Select First 5
          </Button>
        </FlexBox>
        <AnalyticalTable
          {...args}
          data={data}
          selectionMode={AnalyticalTableSelectionMode.Multiple}
          selectedRowIds={selectedRowIds}
          onRowSelect={onRowSelect}
          visibleRows={8}
          header={`${selectedCount} row${selectedCount !== 1 ? 's' : ''} selected`}
        />
        <Text style={{ marginBlockStart: '0.5rem', display: 'block' }}>
          Selected IDs: {selectedCount > 0 ? `[${Object.keys(selectedRowIds).join(', ')}]` : 'none'}
        </Text>
      </>
    );
  },
};

export const RowHighlighting: Story = {
  render() {
    const [useFunction, setUseFunction] = useState(false);

    const data = useMemo(
      () => [
        { name: 'Alice', age: 28, status: 'Positive' },
        { name: 'Bob', age: 35, status: 'Negative' },
        { name: 'Charlie', age: 42, status: 'Critical' },
        { name: 'Diana', age: 31, status: 'Information' },
        { name: 'Eve', age: 26, status: 'None' },
        { name: 'Frank', age: 39, status: IndicationColor.Indication01 },
        { name: 'Grace', age: 45, status: IndicationColor.Indication04 },
        { name: 'Hank', age: 33, status: IndicationColor.Indication05 },
        { name: 'Iris', age: 29, status: IndicationColor.Indication07 },
        { name: 'Jack', age: 50, status: IndicationColor.Indication08 },
      ],
      [],
    );

    const columns = useMemo<AnalyticalTableColumnDefinition[]>(
      () => [
        { Header: 'Name', accessor: 'name' },
        { Header: 'Age', accessor: 'age', hAlign: TextAlign.End },
        { Header: 'Status Value', accessor: 'status' },
      ],
      [],
    );

    const highlightFn = useCallback((original) => {
      return original.age > 40 ? IndicationColor.Indication03 : IndicationColor.Indication07;
    }, []);

    return (
      <>
        <ToggleButton
          pressed={useFunction}
          onClick={() => setUseFunction((prev) => !prev)}
          style={{ marginBlockEnd: '0.5rem' }}
        >
          {useFunction
            ? 'highlightField: function (age > 40 = Indication03)'
            : 'highlightField: "status" (string accessor)'}
        </ToggleButton>
        <AnalyticalTable
          data={data}
          columns={columns}
          withRowHighlight
          highlightField={useFunction ? highlightFn : 'status'}
          visibleRows={10}
          header={
            useFunction
              ? 'Function-based highlighting (age > 40 = Indication03)'
              : 'String-based highlighting (status field)'
          }
        />
      </>
    );
  },
};

export const ColumnDragAndDrop: Story = {
  render(args) {
    const defaultOrder = useMemo(() => ['name', 'age', 'friend.name', 'friend.age'], []);
    const [columnOrder, setColumnOrder] = useState<string[]>(defaultOrder);

    const columns = useMemo<AnalyticalTableColumnDefinition[]>(
      () => [
        { Header: 'Name', accessor: 'name' },
        { Header: 'Age', accessor: 'age', hAlign: TextAlign.End },
        { Header: 'Friend Name', accessor: 'friend.name' },
        { Header: 'Friend Age (fixed)', accessor: 'friend.age', hAlign: TextAlign.End, disableDragAndDrop: true },
      ],
      [],
    );

    const data = useMemo(() => dataSmall.slice(0, 20), []);

    const onColumnsReorder = useCallback((e) => {
      const newOrder = e.detail.columnsNewOrder.map((col) => col.id);
      setColumnOrder(newOrder);
    }, []);

    return (
      <>
        <FlexBox style={{ gap: '0.5rem', marginBlockEnd: '0.5rem' }} alignItems={FlexBoxAlignItems.Center}>
          <Button onClick={() => setColumnOrder(defaultOrder)}>Reset Order</Button>
          <Text>Current order: [{columnOrder.join(', ')}]</Text>
        </FlexBox>
        <AnalyticalTable
          {...args}
          data={data}
          columns={columns}
          columnOrder={columnOrder}
          onColumnsReorder={onColumnsReorder}
          visibleRows={5}
          header='Drag column headers to reorder. "Friend Age" has disableDragAndDrop.'
        />
      </>
    );
  },
};

export const GlobalFilter: Story = {
  render(args) {
    const [filterValue, setFilterValue] = useState('');

    const columns = useMemo<AnalyticalTableColumnDefinition[]>(
      () => [
        { Header: 'Name', accessor: 'name' },
        { Header: 'Age', accessor: 'age', hAlign: TextAlign.End, disableGlobalFilter: true },
        { Header: 'Friend Name', accessor: 'friend.name' },
        { Header: 'Friend Age', accessor: 'friend.age', hAlign: TextAlign.End },
      ],
      [],
    );

    return (
      <>
        <FlexBox style={{ gap: '0.5rem', marginBlockEnd: '0.5rem' }} alignItems={FlexBoxAlignItems.Center}>
          <Input
            placeholder="Search across all rows..."
            value={filterValue}
            onInput={(e) => setFilterValue(e.target.value)}
            showClearIcon
            style={{ width: '300px' }}
          />
          <Text>Age column has disableGlobalFilter: true</Text>
        </FlexBox>
        <AnalyticalTable
          {...args}
          data={args.data}
          columns={columns}
          globalFilterValue={filterValue}
          visibleRows={8}
          header={filterValue ? `Filtering by: "${filterValue}"` : 'Type in the search field to filter'}
        />
      </>
    );
  },
};

export const ProgrammaticTableControl: Story = {
  render(args) {
    const tableInstanceRef = useRef(null);
    const [stateInfo, setStateInfo] = useState('');
    const [useAltData, setUseAltData] = useState(false);

    const columns = useMemo<AnalyticalTableColumnDefinition[]>(
      () => [
        { Header: 'Name', accessor: 'name' },
        { Header: 'Age', accessor: 'age', hAlign: TextAlign.End },
        { Header: 'Friend Name', accessor: 'friend.name' },
        { Header: 'Friend Age', accessor: 'friend.age', hAlign: TextAlign.End },
      ],
      [],
    );

    const dataA = useMemo(() => dataSmall.slice(0, 30), []);
    const dataB = useMemo(() => dataSmall.slice(10, 40), []);
    const data = useAltData ? dataB : dataA;

    const updateInfo = useCallback(() => {
      const instance = tableInstanceRef.current;
      if (!instance) return;
      const sorts = instance.state.sortBy.map((s) => `${s.id} (${s.desc ? 'desc' : 'asc'})`).join(', ') || 'none';
      const filters = instance.state.filters.map((f) => `${f.id}="${f.value}"`).join(', ') || 'none';
      const hidden = instance.state.hiddenColumns?.join(', ') || 'none';
      setStateInfo(`Sorts: [${sorts}] | Filters: [${filters}] | Hidden: [${hidden}]`);
    }, []);

    const reactTableOptions = useMemo(
      () => ({
        autoResetSortBy: false,
        autoResetFilters: false,
        autoResetHiddenColumns: false,
        autoResetExpanded: false,
        autoResetGroupBy: false,
      }),
      [],
    );

    return (
      <>
        <FlexBox style={{ gap: '0.5rem', marginBlockEnd: '0.5rem' }} wrap={FlexBoxWrap.Wrap}>
          <Button
            onClick={() => {
              tableInstanceRef.current?.setSortBy([{ id: 'name', desc: false }]);
              setTimeout(updateInfo, 50);
            }}
          >
            Sort Name (asc)
          </Button>
          <Button
            onClick={() => {
              tableInstanceRef.current?.setSortBy([]);
              setTimeout(updateInfo, 50);
            }}
          >
            Clear Sort
          </Button>
          <Button
            onClick={() => {
              tableInstanceRef.current?.setFilter('age', '3');
              setTimeout(updateInfo, 50);
            }}
          >
            Filter Age contains "3"
          </Button>
          <Button
            onClick={() => {
              tableInstanceRef.current?.setAllFilters([]);
              setTimeout(updateInfo, 50);
            }}
          >
            Clear Filters
          </Button>
          <Button
            onClick={() => {
              tableInstanceRef.current?.toggleHideColumn('friend.name');
              setTimeout(updateInfo, 50);
            }}
          >
            Toggle "Friend Name" visibility
          </Button>
          <Button
            onClick={() => {
              tableInstanceRef.current?.setHiddenColumns([]);
              setTimeout(updateInfo, 50);
            }}
          >
            Show All Columns
          </Button>
          <Button
            onClick={() => {
              tableInstanceRef.current?.resetResizing();
            }}
          >
            Reset Column Widths
          </Button>
          <Button design="Emphasized" onClick={() => setUseAltData((prev) => !prev)}>
            Toggle Data Set ({useAltData ? 'B' : 'A'})
          </Button>
        </FlexBox>
        <AnalyticalTable
          {...args}
          data={data}
          columns={columns}
          sortable
          filterable
          groupable
          tableInstance={tableInstanceRef}
          reactTableOptions={reactTableOptions}
          visibleRows={8}
          header={`Data Set: ${useAltData ? 'B' : 'A'} — Use buttons above to programmatically control the table`}
        />
        <Text style={{ marginBlockStart: '0.5rem', display: 'block' }}>
          {stateInfo || 'Click a button to see table state.'}
        </Text>
      </>
    );
  },
};

export const InitialTableState: Story = {
  render() {
    const [key, resetKey] = useReducer((k) => k + 1, 0);

    const columns = useMemo<AnalyticalTableColumnDefinition[]>(
      () => [
        { Header: 'Name', accessor: 'name' },
        { Header: 'Age', accessor: 'age', hAlign: TextAlign.End },
        { Header: 'Friend Name', accessor: 'friend.name' },
        { Header: 'Friend Age', accessor: 'friend.age', hAlign: TextAlign.End },
      ],
      [],
    );

    const data = useMemo(() => dataSmall.slice(0, 30), []);

    const reactTableOptions = useMemo(
      () => ({
        autoResetSortBy: false,
        autoResetFilters: false,
        autoResetHiddenColumns: false,
        initialState: {
          sortBy: [{ id: 'age', desc: true }],
          filters: [{ id: 'name', value: 'a' }],
          hiddenColumns: ['friend.age'],
          selectedRowIds: { 0: true, 2: true },
        },
      }),
      [],
    );

    return (
      <>
        <Button onClick={resetKey} style={{ marginBlockEnd: '0.5rem' }}>
          Reset to Initial State (remount)
        </Button>
        <AnalyticalTable
          key={key}
          data={data}
          columns={columns}
          sortable
          filterable
          selectionMode={AnalyticalTableSelectionMode.Multiple}
          reactTableOptions={reactTableOptions}
          visibleRows={8}
          header='Initial: sorted by Age desc, filtered Name by "a", Friend Age hidden, rows 0 & 2 selected'
        />
      </>
    );
  },
};

// Consider memo() for complex or expensive cells — not needed for simple ones
const FriendComparisonCell = memo(({ row }) => {
  const { age, friend, status } = row.original;
  const ageDiff = friend.age - age;
  return (
    <FlexBox alignItems={FlexBoxAlignItems.Center} style={{ gap: '0.25rem' }}>
      <ObjectStatus state={status}>{friend.name}</ObjectStatus>
      <Tag colorScheme={ageDiff >= 0 ? '5' : '3'}>
        {ageDiff >= 0 ? '+' : ''}
        {ageDiff} yrs
      </Tag>
    </FlexBox>
  );
});
FriendComparisonCell.displayName = 'FriendComparisonCell';

export const CustomCellRenderers: Story = {
  render(args) {
    const [dialogRow, setDialogRow] = useState<Record<string, any> | null>(null);

    const data = useMemo(
      () =>
        dataSmall.slice(0, 20).map((row, i) => ({
          ...row,
          status: (['Positive', 'Negative', 'Critical', 'Information', 'None'] as const)[i % 5],
          description: `This is a longer description for row ${i} that should be truncated with an ellipsis when the column is too narrow.`,
        })),
      [],
    );

    const columns = useMemo<AnalyticalTableColumnDefinition[]>(
      () => [
        { Header: 'Name', accessor: 'name' },
        {
          Header: 'Age',
          accessor: 'age',
          hAlign: TextAlign.End,
          // Lightweight cells don't need memo()
          Cell: ({ value }) => <ObjectStatus state={value > 40 ? 'Critical' : 'Positive'}>{value}</ObjectStatus>,
        },
        {
          Header: 'Friend Comparison',
          id: 'friendComparison',
          Cell: FriendComparisonCell,
        },
        {
          Header: 'Description',
          accessor: 'description',
          // Use the textEllipsis class when custom elements should truncate
          Cell: ({ value, webComponentsReactProperties }) => (
            <span className={webComponentsReactProperties.classes.textEllipsis} title={value}>
              {value}
            </span>
          ),
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
          ),
        },
        {
          Header: 'Details',
          id: 'details',
          // Prefer mounting dialogs outside the table over rendering one per cell
          Cell: ({ row }) => <Button onClick={() => setDialogRow(row.original)}>Show</Button>,
        },
      ],
      [],
    );

    return (
      <>
        <AnalyticalTable {...args} data={data} columns={columns} visibleRows={8} header="Custom Cell renderers" />
        <Dialog open={!!dialogRow} onClose={() => setDialogRow(null)} headerText={dialogRow?.name ?? ''}>
          <FlexBox direction={FlexBoxDirection.Column} style={{ padding: '1rem', gap: '0.5rem' }}>
            <Text>Age: {dialogRow?.age}</Text>
            <Text>Friend: {dialogRow?.friend?.name}</Text>
            <Text>Status: {dialogRow?.status}</Text>
          </FlexBox>
        </Dialog>
      </>
    );
  },
};

export const CustomHeaderPopover: Story = {
  render(args) {
    const [sortInfo, setSortInfo] = useState('');
    const [filterVal, setFilterVal] = useState('');

    const columns = useMemo<AnalyticalTableColumnDefinition[]>(
      () => [
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
                // Prevent clicks inside the popover from propagating to the column header,
                // which would re-open the popover immediately.
                onClick={(e) => e.stopPropagation()}
                headerText="Custom Column Menu"
              >
                <FlexBox direction={FlexBoxDirection.Column} style={{ padding: '0.5rem', gap: '0.5rem' }}>
                  <Button
                    icon="sort-ascending"
                    onClick={() => {
                      instance.setSortBy([{ id: 'name', desc: false }]);
                      setSortInfo('Name: ascending');
                      setOpen(false);
                    }}
                  >
                    Sort A → Z
                  </Button>
                  <Button
                    icon="sort-descending"
                    onClick={() => {
                      instance.setSortBy([{ id: 'name', desc: true }]);
                      setSortInfo('Name: descending');
                      setOpen(false);
                    }}
                  >
                    Sort Z → A
                  </Button>
                  <Input
                    placeholder="Filter Name..."
                    value={filterVal}
                    onInput={(e) => {
                      const val = e.target.value;
                      setFilterVal(val);
                      instance.setFilter('name', val || undefined);
                    }}
                  />
                  <Button
                    icon="reset"
                    onClick={() => {
                      instance.setSortBy([]);
                      instance.setAllFilters([]);
                      setSortInfo('');
                      setFilterVal('');
                      setOpen(false);
                    }}
                  >
                    Reset All
                  </Button>
                </FlexBox>
              </Popover>
            );
          },
        },
        { Header: 'Age', accessor: 'age', hAlign: TextAlign.End },
        { Header: 'Friend Name', accessor: 'friend.name' },
      ],
      [filterVal],
    );

    const data = useMemo(() => dataSmall.slice(0, 30), []);

    const reactTableOptions = useMemo(() => ({ autoResetSortBy: false, autoResetFilters: false }), []);

    return (
      <>
        <AnalyticalTable
          {...args}
          data={data}
          columns={columns}
          sortable
          filterable
          reactTableOptions={reactTableOptions}
          visibleRows={8}
          header='Click the "Name" column header to see the custom popover'
        />
        <Text style={{ marginBlockStart: '0.5rem', display: 'block' }}>
          {sortInfo ? `Sort: ${sortInfo}` : 'Click the "Name (Custom Popover)" column header.'}
        </Text>
      </>
    );
  },
};

export const SelectionModes: Story = {
  render(args) {
    const [selectionMode, setSelectionMode] = useState(AnalyticalTableSelectionMode.Multiple);
    const [selectionBehavior, setSelectionBehavior] = useState(AnalyticalTableSelectionBehavior.Row);
    const [lastEvent, setLastEvent] = useState('');

    const data = useMemo(() => dataSmall.slice(0, 20), []);

    const columns = useMemo<AnalyticalTableColumnDefinition[]>(
      () => [
        { Header: 'Name', accessor: 'name' },
        { Header: 'Age', accessor: 'age', hAlign: TextAlign.End },
        { Header: 'Friend Name', accessor: 'friend.name' },
      ],
      [],
    );

    const onRowSelect = useCallback((e) => {
      const { row, isSelected, allRowsSelected, selectedRowIds } = e.detail;
      const selectedCount = Object.keys(selectedRowIds).length;
      if (row) {
        setLastEvent(
          `Row "${row.original.name}" ${isSelected ? 'selected' : 'deselected'}. Total selected: ${selectedCount}`,
        );
      } else {
        setLastEvent(`Select All toggled. All selected: ${allRowsSelected}. Total selected: ${selectedCount}`);
      }
    }, []);

    return (
      <>
        <FlexBox style={{ gap: '1rem', marginBlockEnd: '0.5rem' }} alignItems={FlexBoxAlignItems.End}>
          <div>
            <label htmlFor="sel-mode">selectionMode</label>
            <Select
              id="sel-mode"
              value={selectionMode}
              onChange={(e) =>
                setSelectionMode(e.detail.selectedOption.getAttribute('value') as AnalyticalTableSelectionMode)
              }
            >
              {Object.values(AnalyticalTableSelectionMode).map((mode) => (
                <Option key={mode} value={mode}>
                  {mode}
                </Option>
              ))}
            </Select>
          </div>
          <div>
            <label htmlFor="sel-behavior">selectionBehavior</label>
            <Select
              id="sel-behavior"
              value={selectionBehavior}
              onChange={(e) =>
                setSelectionBehavior(e.detail.selectedOption.getAttribute('value') as AnalyticalTableSelectionBehavior)
              }
            >
              {Object.values(AnalyticalTableSelectionBehavior).map((behavior) => (
                <Option key={behavior} value={behavior}>
                  {behavior}
                </Option>
              ))}
            </Select>
          </div>
        </FlexBox>
        <AnalyticalTable
          {...args}
          data={data}
          columns={columns}
          selectionMode={selectionMode}
          selectionBehavior={selectionBehavior}
          onRowSelect={onRowSelect}
          header={`selectionMode: ${selectionMode} | selectionBehavior: ${selectionBehavior}`}
        />
        <Text style={{ marginBlockStart: '0.5rem', display: 'block' }}>
          {lastEvent || 'Click a row or selection checkbox to see event details.'}
        </Text>
      </>
    );
  },
};

export const MultiSort: Story = {
  render(args) {
    const tableInstanceRef = useRef(null);
    const [sortBy, setSortByState] = useState<{ id: string; desc: boolean }[]>([]);

    const columns = useMemo<AnalyticalTableColumnDefinition[]>(
      () => [
        { Header: 'Name', accessor: 'name', enableMultiSort: true },
        { Header: 'Age', accessor: 'age', hAlign: TextAlign.End, enableMultiSort: true },
        { Header: 'Friend Name', accessor: 'friend.name', enableMultiSort: true },
        { Header: 'Friend Age', accessor: 'friend.age', hAlign: TextAlign.End, enableMultiSort: true },
      ],
      [],
    );

    const data = useMemo(() => dataSmall.slice(0, 30), []);

    const reactTableOptions = useMemo(() => ({ autoResetSortBy: false }), []);

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
        <FlexBox style={{ gap: '0.5rem', marginBlockEnd: '0.5rem' }} wrap={FlexBoxWrap.Wrap}>
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
          <Button
            onClick={() => {
              tableInstanceRef.current?.setSortBy([
                { id: 'friend.name', desc: true },
                { id: 'friend.age', desc: false },
              ]);
              setSortByState([
                { id: 'friend.name', desc: true },
                { id: 'friend.age', desc: false },
              ]);
            }}
          >
            Sort: Friend Name ↓, Friend Age ↑
          </Button>
          <Button
            onClick={() => {
              tableInstanceRef.current?.setSortBy([]);
              setSortByState([]);
            }}
          >
            Clear Sort
          </Button>
        </FlexBox>
        <AnalyticalTable
          {...args}
          data={data}
          columns={columns}
          sortable
          onSort={onSort}
          reactTableOptions={reactTableOptions}
          tableInstance={tableInstanceRef}
          visibleRows={8}
          header="Hold Ctrl/Cmd and click column headers to sort by multiple columns"
        />
        <Text style={{ marginBlockStart: '0.5rem', display: 'block' }}>
          {sortBy.length > 0
            ? `Sort priorities: ${sortBy.map((s, i) => `${i + 1}. ${s.id} (${s.desc ? 'desc' : 'asc'})`).join(' → ')}`
            : 'No active sort. Use the column header menu or the buttons above.'}
        </Text>
      </>
    );
  },
};

export const AutoResizeColumns: Story = {
  render(args) {
    const [lastResize, setLastResize] = useState('');

    const data = useMemo(
      () => [
        { name: 'A very long name that will exceed the column width', age: 28, description: 'Short' },
        { name: 'Bob', age: 3500, description: 'A medium length description for this row' },
        {
          name: 'Charlie Brown',
          age: 42,
          description: 'Another description that is quite long and should cause the column to expand when auto-resized',
        },
        { name: 'Di', age: 9, description: 'Tiny' },
        { name: 'Eve Martinez de la Cruz', age: 26123, description: 'Medium text here' },
      ],
      [],
    );

    const columns = useMemo<AnalyticalTableColumnDefinition[]>(
      () => [
        { Header: 'Name', accessor: 'name', autoResizable: true },
        { Header: 'Age', accessor: 'age', hAlign: TextAlign.End, autoResizable: true },
        { Header: 'Description', accessor: 'description', autoResizable: true },
      ],
      [],
    );

    const onAutoResize = useCallback((e) => {
      setLastResize(`Column "${e.detail.columnId}" auto-resized to ${Math.round(e.detail.width)}px`);
    }, []);

    return (
      <>
        <AnalyticalTable
          {...args}
          data={data}
          columns={columns}
          onAutoResize={onAutoResize}
          visibleRows={5}
          header="Double-click a column resizer to auto-fit width to content"
        />
        <Text style={{ marginBlockStart: '0.5rem', display: 'block' }}>
          {lastResize || 'Double-click a column border to auto-resize.'}
        </Text>
      </>
    );
  },
};

const columnClassNameColumns: AnalyticalTableColumnDefinition[] = [
  {
    Header: 'Name',
    accessor: 'name',
    className: 'feature-example-body-cell',
    classNameHeader: 'feature-example-header-cell',
  },
  { Header: 'Age', accessor: 'age' },
  { Header: 'Friend Name', accessor: 'friend.name' },
  { Header: 'Friend Age', accessor: 'friend.age' },
];

export const ColumnClassName: Story = {
  render(args) {
    return (
      <>
        <style>{`
          .feature-example-header-cell { background-color: lightgrey; }
          .feature-example-body-cell { background-color: lightblue; }
        `}</style>
        <AnalyticalTable {...args} data={dataSmall} columns={columnClassNameColumns} visibleRows={5} />
      </>
    );
  },
};

const borderlessColumns: AnalyticalTableColumnDefinition[] = [
  { Header: 'Name', accessor: 'name' },
  { Header: 'Age', accessor: 'age' },
  { Header: 'Friend Name', accessor: 'friend.name' },
  { Header: 'Friend Age', accessor: 'friend.age' },
];

export const BorderlessContainer: Story = {
  tags: ['custom'],
  render() {
    return (
      <>
        <style>{`
          /* Removes only the outer container frame. The class is applied to the table's
             root element, so it also covers the sibling vertical scrollbar. */
          .at-borderless-container {
            --_ui5wcr-AnalyticalTable-OuterBorderBlock: none;
            --_ui5wcr-AnalyticalTable-OuterBorderInline: none;
            --sapList_TableFooterBorder: transparent;
          }
          .at-borderless-container [data-component-name="AnalyticalTableContainer"]::after {
            display: none;
          }
        `}</style>
        <AnalyticalTable
          className="at-borderless-container"
          data={dataSmall}
          columns={borderlessColumns}
          selectionMode={AnalyticalTableSelectionMode.Multiple}
          visibleRows={5}
        />
      </>
    );
  },
};

export const NoVerticalCellBorders: Story = {
  tags: ['custom'],
  render() {
    return (
      <>
        <style>{`
          /* Removes the vertical dividers between columns (header + body) while keeping
             the horizontal row separators. */
          .at-no-vertical-cell-borders [role="columnheader"],
          .at-no-vertical-cell-borders [data-column-id-cell] {
            border-inline-end: none;
          }
        `}</style>
        <AnalyticalTable
          className="at-no-vertical-cell-borders"
          data={dataSmall}
          columns={borderlessColumns}
          selectionMode={AnalyticalTableSelectionMode.Multiple}
          visibleRows={5}
        />
      </>
    );
  },
};
