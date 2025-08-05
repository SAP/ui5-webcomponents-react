import type { IChartBaseProps } from '@/interfaces/IChartBaseProps.js';

export const legendConfig: IChartBaseProps = {
  chartConfig: {
    legendConfig: {
      align: 'right',
      iconSize: 20,
      iconType: 'diamond',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      formatter: (value, entry, index) => {
        if (value === 'Users') {
          return <span>{value}🐱</span>;
        }
        return value;
      },
      wrapperStyle: {
        border: '5px solid',
        borderImage: 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet) 1',
        padding: '5px',
        borderRadius: '8px',
      },
    },
  },
};

export const tooltipConfig: IChartBaseProps = {
  tooltipConfig: {
    wrapperStyle: {
      border: '5px solid',
      borderImage: 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet) 1',
      padding: '5px',
      borderRadius: '8px',
    },
    itemStyle: {
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '10px',
      marginBlockStart: '2px',
    },
    contentStyle: {
      background: 'black',
    },
    labelStyle: {
      fontFamily: 'var(--sapFontBoldFamily)',
      color: 'white',
    },
    cursor: { stroke: 'red', strokeWidth: 2, fill: 'transparent' },
    separator: ':~:',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formatter: (value, name, props, index, payload) => {
      if (name === 'Users') {
        return [`${value}👨‍💻`, 'Custom Name in Tooltip!'];
      }
      return `${value}k`;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    labelFormatter: (label, payload) => {
      return `${label}🗓️`;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    itemSorter: (item) => {
      return -1;
    },
  },
};

export const singleData = [
  {
    name: 'January',
    data: 100,
    users: 120,
  },
  {
    name: 'February',
    data: 300,
    users: 40,
  },
  {
    name: 'March',
    data: 530,
    users: 20,
  },
  {
    name: 'April',
    data: 200,
    users: 30,
  },
];

export const complexDataSet = [
  {
    name: 'January',
    users: 100,
    sessions: 300,
    volume: 756,
  },
  {
    name: 'February',
    users: 230,
    sessions: 330,
    volume: 880,
  },
  {
    name: 'March',
    users: 240,
    sessions: 404,
    volume: 700,
  },
  {
    name: 'April',
    users: 280,
    sessions: 80,
    volume: 604,
  },
  {
    name: 'May',
    users: 100,
    sessions: 300,
    volume: 756,
  },
  {
    name: 'June',
    users: 230,
    sessions: 330,
    volume: 880,
  },
  {
    name: 'July',
    users: 20,
    sessions: 470,
    volume: 450,
  },
  {
    name: 'August',
    users: 220,
    sessions: 180,
    volume: 104,
  },
  {
    name: 'September',
    users: 200,
    sessions: 360,
    volume: 1000,
  },
  {
    name: 'October',
    users: 250,
    sessions: 500,
    volume: 200,
  },
  {
    name: 'November',
    users: 240,
    sessions: 404,
    volume: 700,
  },
  {
    name: 'December',
    users: 280,
    sessions: 80,
    volume: 604,
  },
];

export const simpleDataSet = [
  {
    name: 'January',
    users: 100,
  },
  {
    name: 'February',
    users: 230,
  },
  {
    name: 'March',
    users: 240,
  },
  {
    name: 'April',
    users: 280,
  },
  {
    name: 'May',
    users: 100,
  },
  {
    name: 'June',
    users: 230,
  },
  {
    name: 'July',
    users: 20,
  },
  {
    name: 'August',
    users: 220,
  },
  {
    name: 'September',
    users: 200,
  },
  {
    name: 'October',
    users: 250,
  },
  {
    name: 'November',
    users: 240,
  },
  {
    name: 'December',
    users: 280,
  },
];

export const simpleDataSetWithSmallValues = [
  {
    name: 'January / Month',
    users: 100,
  },
  {
    name: 'February / Month',
    users: 10,
  },
  {
    name: 'March / Month',
    users: 240,
  },
  {
    name: 'April / Month',
    users: 5,
  },
  {
    name: 'May / Month',
    users: 34,
  },
  {
    name: 'June / Month',
    users: 230,
  },
  {
    name: 'July / Month',
    users: 20,
  },
  {
    name: 'August / Month',
    users: 220,
  },
  {
    name: 'September / Month',
    users: 27,
  },
  {
    name: 'October / Month',
    users: 250,
  },
  {
    name: 'November / Month',
    users: 240,
  },
  {
    name: 'December / Month',
    users: 280,
  },
];

export const secondaryDimensionDataSet = [
  {
    name: 'January / Month',
    users: 100,
    dimension: 'C4S Components',
  },
  {
    name: 'February / Month',
    users: 230,
    dimension: 'C4S Components',
  },
  {
    name: 'March / Month',
    users: 240,
    dimension: 'C4S Components',
  },
  {
    name: 'January / Month',
    users: 20,
    dimension: 'Harmnony Insight',
  },
  {
    name: 'Februar / Month',
    users: 220,
    dimension: 'Harmnony Insight',
  },
  {
    name: 'March / Month',
    users: 200,
    dimension: 'Harmnony Insight',
  },
  {
    name: 'January / Month',
    users: 250,
    dimension: 'Intelligent Workplace',
  },
  {
    name: 'February / Month',
    users: 240,
    dimension: 'Intelligent Workplace',
  },
  {
    name: 'March / Month',
    users: 280,
    dimension: 'Intelligent Workplace',
  },
];

export const scatterComplexDataSet = [
  {
    label: 'Users',
    data: [
      {
        users: 120,
        sessions: 330,
        volume: 744,
      },
      {
        users: 213,
        sessions: 313,
        volume: 881,
      },
      {
        users: 241,
        sessions: 424,
        volume: 670,
      },
      {
        users: 328,
        sessions: 83,
        volume: 630,
      },
      {
        users: 102,
        sessions: 302,
        volume: 126,
      },
      {
        users: 233,
        sessions: 304,
        volume: 880,
      },
      {
        users: 202,
        sessions: 47,
        volume: 452,
      },
      {
        users: 222,
        sessions: 18,
        volume: 500,
      },
      {
        users: 210,
        sessions: 362,
        volume: 892,
      },
      {
        users: 215,
        sessions: 510,
        volume: 2022,
      },
      {
        users: 242,
        sessions: 402,
        volume: 70,
      },
      {
        users: 20,
        sessions: 10,
        volume: 60,
      },
    ],
  },
  {
    label: 'APJ',
    opacity: 0.6,
    data: [
      {
        users: 100,
        sessions: 300,
        volume: 756,
      },
      {
        users: 230,
        sessions: 330,
        volume: 880,
      },
      {
        users: 240,
        sessions: 404,
        volume: 700,
      },
      {
        users: 280,
        sessions: 80,
        volume: 604,
      },
      {
        users: 100,
        sessions: 300,
        volume: 756,
      },
      {
        users: 230,
        sessions: 330,
        volume: 880,
      },
      {
        users: 20,
        sessions: 470,
        volume: 450,
      },
      {
        users: 220,
        sessions: 180,
        volume: 5000,
      },
      {
        users: 200,
        sessions: 360,
        volume: 879,
      },
      {
        users: 250,
        sessions: 500,
        volume: 200,
      },
      {
        users: 240,
        sessions: 404,
        volume: 700,
      },
      {
        users: 280,
        sessions: 80,
        volume: 604,
      },
    ],
  },
];

export const scatterColorDataSet = [
  {
    label: 'Americas',
    color: 'red',
    data: [
      {
        users: 120,
        sessions: 330,
        volume: 744,
      },
      {
        users: 213,
        sessions: 313,
        volume: 881,
      },
      {
        users: 241,
        sessions: 424,
        volume: 670,
      },
      {
        users: 328,
        sessions: 83,
        volume: 630,
      },
      {
        users: 102,
        sessions: 302,
        volume: 126,
      },
      {
        users: 233,
        sessions: 304,
        volume: 880,
      },
      {
        users: 202,
        sessions: 47,
        volume: 452,
      },
      {
        users: 222,
        sessions: 18,
        volume: 500,
      },
      {
        users: 210,
        sessions: 362,
        volume: 892,
      },
      {
        users: 215,
        sessions: 510,
        volume: 2022,
      },
      {
        users: 242,
        sessions: 402,
        volume: 70,
      },
      {
        users: 20,
        sessions: 10,
        volume: 60,
      },
    ],
  },
];

const concatYear = (array, year) => array.map((item) => ({ ...item, name: `${item.name} ${year}` }));

export const bigDataSet = [
  ...concatYear(complexDataSet, 2016),
  ...concatYear(complexDataSet, 2017),
  ...concatYear(complexDataSet, 2018),
  ...concatYear(complexDataSet, 2019),
  ...concatYear(complexDataSet, 2020),
  ...concatYear(complexDataSet, 2021),
  ...concatYear(complexDataSet, 2022),
];

export const complexBulletDataset = [
  {
    name: 'January',
    users: 100,
    sessions: 300,
    volume: 350,
  },
  {
    name: 'February',
    users: 90,
    sessions: 330,
    volume: 370,
  },
  {
    name: 'March',
    users: 0,
    sessions: 404,
    volume: 446,
  },
  {
    name: 'April',
    users: 0,
    sessions: 80,
    volume: 250,
  },
  {
    name: 'May',
    users: 0,
    sessions: 300,
    volume: 450,
  },
  {
    name: 'June',
    users: 0,
    sessions: 330,
    volume: 500,
  },
  {
    name: 'July',
    users: 65,
    sessions: 300,
    volume: 300,
  },
  {
    name: 'August',
    users: 12,
    sessions: 180,
    volume: 104,
  },
  {
    name: 'September',
    users: 99,
    sessions: 360,
    volume: 300,
  },
  {
    name: 'October',
    users: 120,
    sessions: 500,
    volume: 200,
  },
  {
    name: 'November',
    users: 130,
    sessions: 404,
    volume: 600,
  },
  {
    name: 'December',
    users: 100,
    sessions: 80,
    volume: 320,
  },
];

const percentFormatter = (val) => `${val.toFixed(1)}%`;
function normalizeData(data: Record<string, number | string>[]) {
  return data.map((item) => {
    const total = Object.values(item).reduce((acc: number, cur) => {
      return typeof cur === 'number' ? acc + cur : acc;
    }, 0) as number;

    const normalizedItem = Object.entries(item).map(([key, val]) => {
      if (typeof val === 'number') {
        return [key, total ? (val / total) * 100 : 0];
      }
      return [key, val];
    });

    return Object.fromEntries(normalizedItem);
  });
}
export const stackedNormalizedConfig = {
  measures: [
    {
      accessor: 'users',
      stackId: 'A',
      formatter: percentFormatter,
    },
    {
      accessor: 'sessions',
      stackId: 'A',
      formatter: percentFormatter,
    },
    {
      accessor: 'volume',
      stackId: 'A',
      formatter: percentFormatter,
    },
  ],
  dataset: normalizeData(complexDataSet),
};
