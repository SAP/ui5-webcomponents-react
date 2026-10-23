import { useCallback, useMemo, useRef, useState } from 'react';
import { AnalyticalTableSelectionMode } from '../../../enums/AnalyticalTableSelectionMode.js';
import { Panel } from '../../../webComponents/Panel/index.js';
import { Tab } from '../../../webComponents/Tab/index.js';
import { TabContainer } from '../../../webComponents/TabContainer/index.js';
import { AnalyticalTable } from '../index.js';
import type { AnalyticalTableColumnDefinition, AnalyticalTableInstance, AnalyticalTablePropTypes } from '../index.js';
import * as AnalyticalTableHooks from '../pluginHooks/AnalyticalTableHooks.js';
import type {
  AnalyticalTableStickyAutoToggleDetail,
  AnalyticalTableStickyColumnsChangeDetail,
} from '../pluginHooks/useStickyColumns.js';

const data = Array.from({ length: 12 }, (_, i) => ({
  name: `Name-${i}`,
  age: i,
  friend: { name: `Friend-${i}`, age: i + 100 },
  status: i % 2 === 0 ? 'even' : 'odd',
}));

const treeData = Array.from({ length: 6 }, (_, i) => ({
  name: `Parent-${i}`,
  age: i,
  friend: { name: `PFriend-${i}`, age: i + 100 },
  status: 'even',
  subRows: [{ name: `Child-${i}`, age: i + 50, friend: { name: `CFriend-${i}`, age: i + 200 }, status: 'odd' }],
}));

const noData: typeof data = [];

interface StickyHarnessProps extends Pick<
  AnalyticalTablePropTypes,
  | 'sortable'
  | 'groupable'
  | 'withRowHighlight'
  | 'highlightField'
  | 'selectionMode'
  | 'scaleWidthMode'
  | 'visibleRows'
  | 'infiniteScroll'
  | 'infiniteScrollThreshold'
  | 'reactTableOptions'
> {
  columns: AnalyticalTableColumnDefinition[];
  /** When set, renders a "toggle" button that programmatically pins/unpins this column id. */
  toggleId?: string;
  /** Include the `useStickyColumns` plugin (default `true`). */
  withHook?: boolean;
  containerWidth?: string;
  /** When set, renders `set-narrow`/`set-wide` buttons that switch the container width at runtime. */
  resizable?: boolean;
  narrowWidth?: string;
  wideWidth?: string;
  tree?: boolean;
  empty?: boolean;
}

export const StickyHarness = ({
  columns,
  toggleId,
  withHook = true,
  containerWidth = '500px',
  resizable,
  narrowWidth = '180px',
  wideWidth = '600px',
  tree,
  empty,
  ...tableProps
}: StickyHarnessProps) => {
  const tableInstanceRef = useRef<AnalyticalTableInstance>(null);
  const [changeCount, setChangeCount] = useState(0);
  const [lastDetail, setLastDetail] = useState('');
  const [loadMoreCount, setLoadMoreCount] = useState(0);
  const [autoToggleCount, setAutoToggleCount] = useState(0);
  const [autoToggleLast, setAutoToggleLast] = useState('');
  const [width, setWidth] = useState(containerWidth);

  const handleStickyChange = useCallback((detail: AnalyticalTableStickyColumnsChangeDetail) => {
    setChangeCount((c) => c + 1);
    setLastDetail(JSON.stringify({ sticky: detail.sticky, stickyColumns: detail.stickyColumns }));
  }, []);
  const handleAutoToggle = useCallback((detail: AnalyticalTableStickyAutoToggleDetail) => {
    setAutoToggleCount((c) => c + 1);
    setAutoToggleLast(JSON.stringify({ enabled: detail.enabled, stickyColumns: detail.stickyColumns }));
  }, []);
  const handleLoadMore = useCallback(() => {
    setLoadMoreCount((c) => c + 1);
  }, []);

  const tableHooks = useMemo(
    () =>
      withHook
        ? [
            // eslint-disable-next-line react-hooks/rules-of-hooks -- factory, not a React hook
            AnalyticalTableHooks.useStickyColumns({
              onStickyColumnsChange: handleStickyChange,
              onAutoToggleSticky: handleAutoToggle,
            }),
          ]
        : [],
    [withHook, handleStickyChange, handleAutoToggle],
  );
  const style = useMemo(() => ({ width }), [width]);

  return (
    <>
      {toggleId && (
        <button
          type="button"
          data-testid="toggle"
          onClick={() => tableInstanceRef.current?.toggleStickyColumn(toggleId)}
        >
          toggle
        </button>
      )}
      {resizable && (
        <>
          <button type="button" data-testid="set-narrow" onClick={() => setWidth(narrowWidth)}>
            narrow
          </button>
          <button type="button" data-testid="set-wide" onClick={() => setWidth(wideWidth)}>
            wide
          </button>
        </>
      )}
      <AnalyticalTable
        tableInstance={tableInstanceRef}
        style={style}
        data={empty ? noData : tree ? treeData : data}
        columns={columns}
        tableHooks={tableHooks}
        isTreeTable={tree}
        onLoadMore={handleLoadMore}
        {...tableProps}
      />
      <span data-testid="sticky-change-count">{changeCount}</span>
      <span data-testid="sticky-last">{lastDetail}</span>
      <span data-testid="auto-toggle-count">{autoToggleCount}</span>
      <span data-testid="auto-toggle-last">{autoToggleLast}</span>
      <span data-testid="load-more-count">{loadMoreCount}</span>
    </>
  );
};

const ROW_COUNT = 155;
const COLUMN_COUNT = 16;

// Reproduces the drifted `scrollOffset` bug: virtual-core drifts it on re-measure and a scroll element that can't
// scroll never reconciles it. The body can't scroll (`visibleRows={data.length}`); the collapsed Panel forces the
// re-measure on reveal.
export const EmptyBlockHideRevealTestComp = () => {
  const [collapsed, setCollapsed] = useState(true);
  const data = useMemo(
    () => Array.from({ length: ROW_COUNT }, (_, index) => ({ name: `Name ${index}`, age: 20 + (index % 40) })),
    [],
  );
  const columns = useMemo<AnalyticalTableColumnDefinition[]>(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Age', accessor: 'age' },
    ],
    [],
  );
  return (
    <div style={{ height: '510px', overflow: 'auto', border: '1px solid var(--sapList_BorderColor)' }}>
      <Panel
        headerText="Collapsible Section"
        collapsed={collapsed}
        onToggle={() => setCollapsed((prev) => !prev)}
        noAnimation
      >
        <AnalyticalTable data={data} columns={columns} visibleRows={data.length} minRows={1} />
      </Panel>
    </div>
  );
};

// Same bug on the horizontal axis: the root can't scroll because the columns fit its width; the initially-unselected
// tab forces the re-measure on the tab switch.
export const ColumnsFitWidthHideRevealTestComp = () => {
  const data = useMemo(
    () =>
      Array.from({ length: 20 }, (_, rowIndex) => {
        const row: Record<string, string> = {};
        for (let colIndex = 0; colIndex < COLUMN_COUNT; colIndex++) {
          row[`col${colIndex}`] = `R${rowIndex}C${colIndex}`;
        }
        return row;
      }),
    [],
  );
  const columns = useMemo<AnalyticalTableColumnDefinition[]>(
    () =>
      // No explicit `width` → columns fill the width, so the root can't scroll horizontally.
      Array.from({ length: COLUMN_COUNT }, (_, colIndex) => ({
        Header: `Col ${colIndex}`,
        accessor: `col${colIndex}`,
      })),
    [],
  );
  return (
    // Sized so the columns fill the width at ~60px each (no horizontal scroll).
    <div style={{ width: '1080px' }}>
      <TabContainer>
        <Tab text="Other" selected>
          <div style={{ padding: '1rem' }}>Placeholder tab.</div>
        </Tab>
        <Tab text="Table">
          <AnalyticalTable data={data} columns={columns} />
        </Tab>
      </TabContainer>
    </div>
  );
};

const borderlessData = Array.from({ length: 20 }, (_, i) => ({
  name: `Name-${i}`,
  age: i,
  friend: { name: `Friend-${i}`, age: i + 100 },
}));

const borderlessColumns: AnalyticalTableColumnDefinition[] = [
  { Header: 'Name', accessor: 'name' },
  { Header: 'Age', accessor: 'age' },
  { Header: 'Friend Name', accessor: 'friend.name' },
];

// A/B harness for the documented borderless recipes: `default` is the untouched baseline, `outer` removes the
// container frame, `vertical` removes the inter-column cell borders. 20 rows / visibleRows 5 → the custom vertical
// scrollbar renders.
export const BorderlessHarness = () => (
  <>
    <style>{`
      .at-borderless-container {
        --_ui5wcr-AnalyticalTable-OuterBorderBlock: none;
        --_ui5wcr-AnalyticalTable-OuterBorderInline: none;
        --sapList_TableFooterBorder: transparent;
      }
      .at-borderless-container [data-component-name="AnalyticalTableContainer"]::after {
        display: none;
      }
      .at-no-vertical-cell-borders [role="columnheader"],
      .at-no-vertical-cell-borders [data-column-id-cell] {
        border-inline-end: none;
      }
    `}</style>
    <div data-testid="default">
      <AnalyticalTable
        data={borderlessData}
        columns={borderlessColumns}
        selectionMode={AnalyticalTableSelectionMode.Multiple}
        visibleRows={5}
      />
    </div>
    <div data-testid="outer">
      <AnalyticalTable
        className="at-borderless-container"
        data={borderlessData}
        columns={borderlessColumns}
        selectionMode={AnalyticalTableSelectionMode.Multiple}
        visibleRows={5}
      />
    </div>
    <div data-testid="vertical">
      <AnalyticalTable
        className="at-no-vertical-cell-borders"
        data={borderlessData}
        columns={borderlessColumns}
        selectionMode={AnalyticalTableSelectionMode.Multiple}
        visibleRows={5}
      />
    </div>
  </>
);
