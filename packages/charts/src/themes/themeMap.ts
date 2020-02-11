import * as sapBelize from './sap_belize';
import * as sapBelizePlus from './sap_belize_plus';
import * as sapFiori3 from './sap_fiori_3';
import * as sapFiori3Dark from './sap_fiori_3_dark';

const themeMap = new Map();
themeMap.set('sap_belize', sapBelize);
themeMap.set('sap_belize_plus', sapBelizePlus);
themeMap.set('sap_fiori_3', sapFiori3);
themeMap.set('sap_fiori_3_dark', sapFiori3Dark);

export const getOrLoadTheme = (theme) => {
  return themeMap.get(theme);
};
