export const isChromatic = process.env.STORYBOOK_ENV === 'chromatic';

export const MAPPED_THEMES = [
  { value: 'sap_horizon', title: 'Morning Horizon (Light)' },
  { value: 'sap_horizon_dark', title: 'Evening Horizon (Dark)' },
  { value: 'sap_horizon_hcb', title: 'Horizon High Contrast Black' },
  { value: 'sap_horizon_hcw', title: 'Horizon High Contrast White' },
  { value: 'sap_fiori_3', title: 'Quartz Light' },
  { value: 'sap_fiori_3_dark', title: 'Quartz Dark' },
  { value: 'sap_fiori_3_hcb', title: 'Quartz High Contrast Black' },
  { value: 'sap_fiori_3_hcw', title: 'Quartz High Contrast White' }
  // deprecated
  // { value: 'sap_belize', title: 'Belize' },
  // { value: 'sap_belize_hcb', title: 'Belize High Contrast Black' },
  // { value: 'sap_belize_hcw', title: 'Belize High Contrast White' }
];

export const excludePropsForAbstract = ['className', 'style'];
