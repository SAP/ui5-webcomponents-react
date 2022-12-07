import { ITimelineChartRow } from './TimelineChartTypes';

export const dummyDataSet: ITimelineChartRow[] = [
  {
    label: 'Row 0',
    color: 'blue',
    tasks: [
      {
        id: 'TR-00',
        start: 5,
        end: 15
      },
      {
        id: 'TR-01',
        start: 25,
        end: 140
      }
    ],
    milestones: []
  },
  {
    label: 'Row 1',
    color: 'red',
    tasks: [
      {
        id: 'TR-10',
        start: 35,
        end: 60
      },
      {
        id: 'TR-11',
        start: 95,
        end: 100
      }
    ],
    milestones: []
  },
  {
    label: 'Row 2',
    color: 'purple',
    tasks: [
      {
        id: 'TR-20',
        start: 35,
        end: 50
      },
      {
        id: 'TR-21',
        start: 75,
        end: 100
      }
    ],
    milestones: [
      {
        id: 'MS-20',
        start: 115,
        label: 'Milestone 11'
      }
    ]
  }
];
