export const PRIVATE_COMPONENTS = new Set([
  'CalendarHeader',
  'CalendarPart',
  'DefaultTheme',
  'DayPicker',
  'DateComponentBase',
  'ListItem',
  'ListItemBase',
  'MessageBundleAssets',
  'MonthPicker',
  'NotificationListItemBase',
  'Popup',
  'PickerBase',
  'SliderBase',
  'TabBase',
  'ThemePropertiesProvider',
  'TimePickerBase',
  'TreeListItem',
  'YearPicker',
  'WheelSlider'
]);

export const COMPONENTS_WITHOUT_DEMOS = new Set(PRIVATE_COMPONENTS);
COMPONENTS_WITHOUT_DEMOS.add('BreadcrumbsItem');
COMPONENTS_WITHOUT_DEMOS.add('CalendarDate');
COMPONENTS_WITHOUT_DEMOS.add('CardHeader');
COMPONENTS_WITHOUT_DEMOS.add('CustomListItem');
COMPONENTS_WITHOUT_DEMOS.add('ColorPaletteItem');
COMPONENTS_WITHOUT_DEMOS.add('ComboBoxItem');
COMPONENTS_WITHOUT_DEMOS.add('ComboBoxGroupItem');
COMPONENTS_WITHOUT_DEMOS.add('FilterItem');
COMPONENTS_WITHOUT_DEMOS.add('FilterItemOption');
COMPONENTS_WITHOUT_DEMOS.add('GroupHeaderListItem');
COMPONENTS_WITHOUT_DEMOS.add('Option');
COMPONENTS_WITHOUT_DEMOS.add('ShellBarItem');
COMPONENTS_WITHOUT_DEMOS.add('StandardListItem');
COMPONENTS_WITHOUT_DEMOS.add('SegmentedButtonItem');
COMPONENTS_WITHOUT_DEMOS.add('Tab');
COMPONENTS_WITHOUT_DEMOS.add('TableCell');
COMPONENTS_WITHOUT_DEMOS.add('TableColumn');
COMPONENTS_WITHOUT_DEMOS.add('TableGroupRow');
COMPONENTS_WITHOUT_DEMOS.add('TableRow');
COMPONENTS_WITHOUT_DEMOS.add('TabSeparator');
COMPONENTS_WITHOUT_DEMOS.add('TimelineItem');
COMPONENTS_WITHOUT_DEMOS.add('TreeItem');
COMPONENTS_WITHOUT_DEMOS.add('ProductSwitchItem');
COMPONENTS_WITHOUT_DEMOS.add('MediaGalleryItem');
COMPONENTS_WITHOUT_DEMOS.add('MultiComboBoxItem');
COMPONENTS_WITHOUT_DEMOS.add('MultiComboBoxGroupItem');
COMPONENTS_WITHOUT_DEMOS.add('SideNavigationItem');
COMPONENTS_WITHOUT_DEMOS.add('SideNavigationSubItem');
COMPONENTS_WITHOUT_DEMOS.add('SortItem');
COMPONENTS_WITHOUT_DEMOS.add('SuggestionItem');
COMPONENTS_WITHOUT_DEMOS.add('SuggestionGroupItem');
COMPONENTS_WITHOUT_DEMOS.add('UploadCollectionItem');
COMPONENTS_WITHOUT_DEMOS.add('NotificationAction');
COMPONENTS_WITHOUT_DEMOS.add('WizardStep');
COMPONENTS_WITHOUT_DEMOS.add('MenuItem');

export const KNOWN_EVENTS = new Set(['click', 'input', 'submit', 'change', 'select', 'drop']);
export const KNOWN_ATTRIBUTES = new Set(['draggable', 'color']);
