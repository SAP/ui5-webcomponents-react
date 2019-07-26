import * as sap_belize from './sap_belize';
import * as sap_belize_plus from './sap_belize_plus';
import * as sap_fiori_3 from './sap_fiori_3';
import * as sap_fiori_3_dark from './sap_fiori_3_dark';

const themeMap = new Map();
themeMap.set('sap_belize', sap_belize);
themeMap.set('sap_belize_plus', sap_belize_plus);
themeMap.set('sap_fiori_3', sap_fiori_3);
themeMap.set('sap_fiori_3_dark', sap_fiori_3_dark);

export const getOrLoadTheme = (theme) => {
  return themeMap.get(theme);
};
