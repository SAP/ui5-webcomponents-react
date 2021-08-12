declare module "@ui5/webcomponents-base/dist/config/Theme" {
  export function getTheme(): ThemeString;
  export function setTheme(theme: ThemeString): Promise<void>;
  export type ThemeString =
    | "sap_fiori_3"
    | "sap_fiori_3_dark"
    | "sap_belize"
    | "sap_belize_hcb"
    | "sap_belize_hcw"
    | "sap_fiori_3_hcb"
    | "sap_fiori_3_hcw";
}