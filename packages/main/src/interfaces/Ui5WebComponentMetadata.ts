import { DynamicObjectList } from './DynamicObjectList';
import { Ui5Property } from './Ui5Property';

export interface Ui5WebComponentMetadata {
  properties?: DynamicObjectList<Ui5Property>;
  getProperties?: () => DynamicObjectList<Ui5Property>;
  getPropsList?: () => string[];
  events?: DynamicObjectList<any>;
  getSlots?: () => DynamicObjectList<any>;
  getEvents?: () => DynamicObjectList<any>;
  metadata: {
    events: DynamicObjectList<Ui5Property>;
  };
}
