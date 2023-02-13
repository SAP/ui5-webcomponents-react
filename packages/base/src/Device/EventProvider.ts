import EventProviderWCModule from '@ui5/webcomponents-base/dist/EventProvider.js';

const EventProviderWC = EventProviderWCModule.default;

export type RANGE_LEGACY_4_STEPS = 'Phone' | 'Tablet' | 'Desktop' | 'LargeDesktop';

export interface RangeInfo {
  from: number;
  to?: number;
  name: RANGE_LEGACY_4_STEPS;
  unit: string;
}

export interface IOrientation {
  landscape: boolean;
  portrait: boolean;
}

export interface IWindowSize {
  height: number;
  width: number;
}

export const MediaEventProvider = new EventProviderWC<RangeInfo, void>();
export const OrientationEventProvider = new EventProviderWC<IOrientation, void>();
export const ResizeEventProvider = new EventProviderWC<IWindowSize, void>();
