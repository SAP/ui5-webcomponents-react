import * as sapBelize from './sap_belize';
import * as sapBelizePlus from './sap_belize_plus';
import * as sapFiori3 from './sap_fiori_3';
import * as sapFiori3Dark from './sap_fiori_3_dark';
import * as sapBelizeHCB from './sap_belize_hcb';
import * as sapBelizeHCW from './sap_belize_hcw';

const themeMap = new Map();
themeMap.set('sap_belize', sapBelize);
themeMap.set('sap_belize_plus', sapBelizePlus);
themeMap.set('sap_fiori_3', sapFiori3);
themeMap.set('sap_fiori_3_dark', sapFiori3Dark);
themeMap.set('sap_belize_hcw', sapBelizeHCW);
themeMap.set('sap_belize_hcb', sapBelizeHCB);

export const getOrLoadTheme = (theme) => {
  if (themeMap.has(theme)) {
    return themeMap.get(theme);
  } else {
    console.warn(`${theme}-theme not found. Falling back to default theme 'sap_fiori_3'.`);
    return themeMap.get('sap_fiori_3');
  }
};
