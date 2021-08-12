declare module "@ui5/webcomponents-base/dist/config/Theme" {
  export function getTheme(): keyof ThemeKeys;
  export function setTheme(theme: keyof ThemeKeys): void;
  export interface ThemeKeys {
    sap_fiori_3: never;
    sap_fiori_3_dark: never;
    sap_belize: never;
    sap_belize_hcb: never;
    sap_belize_hcw: never;
    sap_fiori_3_hcb: never;
    sap_fiori_3_hcw: never;
  }
}
