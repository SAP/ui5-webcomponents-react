import { ITimelineChartRow, TimelineChartConnection } from '../types/TimelineChartTypes';

export const dummyDataSet: ITimelineChartRow[] = [
  {
    label: 'Row 0',
    color: 'blue',
    tasks: [
      {
        id: 'TR-00',
        start: 5,
        end: 15,
        connections: [
          {
            itemId: 'TR-21',
            type: TimelineChartConnection.Finish_To_Start
          }
        ]
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
        end: 100,
        connections: [
          {
            itemId: 'MS-20'
            // type: TimelineChartConnection.Finish_To_Start
          }
        ]
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
        label: 'Milestone 11',
        connections: [
          {
            itemId: 'TR-01',
            type: TimelineChartConnection.Finish_To_Finish
          }
        ]
      }
    ]
  }
];

export const dummyDiscreteDataSet: ITimelineChartRow[] = [
  {
    label: 'Discovery',
    color: 'blue',
    tasks: [
      {
        id: 'TR-00X',
        start: 2,
        end: 7,
        connections: [
          {
            itemId: 'TR-20X'
          }
        ]
      }
    ]
  },
  {
    label: 'Branding Exploration',
    // color: 'red',
    tasks: [
      {
        id: 'TR-10X',
        start: 11,
        end: 16,
        connections: [
          {
            itemId: 'MS-30X'
            // type: TimelineChartConnection.Finish_To_Start
          }
        ]
      }
    ]
  },
  {
    label: 'Content Review',
    // color: 'purple',
    tasks: [
      {
        id: 'TR-20X',
        start: 6,
        end: 11,
        connections: [
          {
            itemId: 'TR-10X'
            // type: TimelineChartConnection.Start_To_Start
          }
        ]
      }
    ]
  },
  {
    label: '',
    // color: 'purple',
    milestones: [
      {
        id: 'MS-30X',
        label: 'Phase 1',
        start: 16,
        connections: [
          {
            itemId: 'TR-40X'
          },
          {
            itemId: 'TR-50X'
          }
        ]
      }
    ]
  },
  {
    label: 'Website Design',
    // color: 'purple',
    tasks: [
      {
        id: 'TR-40X',
        start: 21,
        end: 30,
        connections: [
          {
            itemId: 'MS-60X'
            // type: TimelineChartConnection.Start_To_Start
          }
        ]
      }
    ]
  },
  {
    label: 'Database Setup',
    // color: 'purple',
    tasks: [
      {
        id: 'TR-50X',
        start: 24,
        end: 28,
        connections: [
          {
            itemId: 'MS-60X'
            // type: TimelineChartConnection.Start_To_Start
          }
        ]
      }
    ]
  },
  {
    label: '',
    // color: 'purple',
    milestones: [
      {
        id: 'MS-60X',
        label: 'Completed',
        start: 35,
        color: 'red'
      }
    ]
  }
];

export const schedulingEDFData: ITimelineChartRow[] = [
  {
    label: 'T1 (4, 1)',
    // color: 'blue',
    tasks: [
      {
        start: 0,
        end: 1
      },
      {
        start: 4,
        end: 5
      },
      {
        start: 8,
        end: 9
      },
      {
        start: 12,
        end: 13
      }
    ]
  },
  {
    label: 'T2 (4, 2)',
    // color: 'blue',
    tasks: [
      {
        start: 5,
        end: 7
      },
      {
        start: 10,
        end: 12
      }
    ]
  },
  {
    label: 'T3 (7, 2)',
    // color: 'blue',
    tasks: [
      {
        start: 1,
        end: 3
      },
      {
        start: 7,
        end: 8
      },
      {
        start: 9,
        end: 10
      }
    ]
  }
];

export const inventionDataset: ITimelineChartRow[] = [
  {
    label: 'Inventions'
  }
];
