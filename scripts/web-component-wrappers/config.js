export const PRIVATE_COMPONENTS = {
  CalendarHeader: true,
  CalendarPart: true,
  DefaultTheme: true,
  DayPicker: true,
  DateComponentBase: true,
  ListItem: true,
  ListItemBase: true,
  MessageBundleAssets: true,
  MonthPicker: true,
  NotificationListItemBase: true,
  Popup: true,
  PickerBase: true,
  SliderBase: true,
  TabBase: true,
  ThemePropertiesProvider: true,
  TimePickerBase: true,
  TreeListItem: true,
  TreeItemBase: true,
  YearPicker: true,
  WheelSlider: true
};

export const COMPONENTS_WITHOUT_DEMOS = {
  ...PRIVATE_COMPONENTS,
  BreadcrumbsItem: 'Breadcrumbs',
  CalendarDate: 'Calendar',
  CardHeader: 'Card',
  ColorPaletteItem: 'ColorPalette',
  ComboBoxGroupItem: 'ComboBox',
  ComboBoxItem: 'ComboBox',
  CustomListItem: 'List',
  FilterItem: 'ViewSettingsDialog',
  FilterItemOption: 'ViewSettingsDialog',
  GroupHeaderListItem: 'List',
  MediaGalleryItem: 'MediaGallery',
  MenuItem: 'Menu',
  MultiComboBoxGroupItem: 'MultiComboBox',
  MultiComboBoxItem: 'MultiComboBox',
  NotificationAction: 'NotificationListItem',
  Option: 'Select',
  ProductSwitchItem: 'ProductSwitch',
  SegmentedButtonItem: 'SegmentedButton',
  SelectMenuOption: 'SelectMenuOption',
  ShellBarItem: 'ShellBar',
  SideNavigationItem: 'SideNavigation',
  SideNavigationSubItem: 'SideNavigation',
  SortItem: 'ViewSettingsDialog',
  StandardListItem: 'List',
  SuggestionGroupItem: 'Input',
  SuggestionItem: 'Input',
  Tab: 'TabContainer',
  TableCell: 'Table',
  TableColumn: 'Table',
  TableGroupRow: 'Table',
  TableRow: 'Table',
  TabSeparator: 'TabContainer',
  TimelineItem: 'Timeline',
  Token: 'MultiInput',
  ToolbarButton: 'ToolbarButton',
  ToolbarItem: 'ToolbarItem',
  ToolbarSelect: 'ToolbarSelect',
  ToolbarSelectOption: 'ToolbarSelectOption',
  ToolbarSeparator: 'ToolbarSeparator',
  ToolbarSpacer: 'ToolbarSpacer',
  TreeItem: 'Tree',
  TreeItemCustom: 'Tree',
  UploadCollectionItem: 'UploadCollection',
  WizardStep: 'Wizard'
};

export const KNOWN_EVENTS = new Set(['click', 'input', 'submit', 'change', 'select', 'drop']);
export const KNOWN_ATTRIBUTES = new Set(['draggable', 'color']);
