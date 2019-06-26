import { DynamicObjectList } from './DynamicObjectList';
import { Ui5Property } from './Ui5Property';

export interface Ui5WebComponentMetadata {
  properties?: DynamicObjectList<Ui5Property>;
  getProperties?: () => DynamicObjectList<Ui5Property>;
  events?: DynamicObjectList<any>;
  getEvents?: () => DynamicObjectList<any>;
  getSlots?: () => DynamicObjectList<any>;
}
