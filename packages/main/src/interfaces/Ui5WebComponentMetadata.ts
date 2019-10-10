import { DynamicObjectList } from './DynamicObjectList';
import { Ui5Property } from './Ui5Property';

export interface Ui5WebComponentMetadata {
  properties?: DynamicObjectList<Ui5Property>;
  getProperties?: () => DynamicObjectList<Ui5Property>;
  events?: DynamicObjectList<any>;
  getSlots?: () => DynamicObjectList<any>;
  metadata: {
    events: DynamicObjectList<Ui5Property>;
  };
}
