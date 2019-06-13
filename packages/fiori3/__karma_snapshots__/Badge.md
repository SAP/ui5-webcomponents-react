# `Badge`

#### `Basic Test`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Badge>
      <WithWebComponent theme={{...}}>
        <ui5-badge class="">
          My Badge
        </ui5-badge>
      </WithWebComponent>
    </Badge>
  </ThemeProvider>
</ThemeProvider>
```

#### `with Icon`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Badge icon={{...}}>
      <WithWebComponent theme={{...}} icon={{...}}>
        <ui5-badge class="">
          <Icon src="sap-icon://employee" data-ui5-slot="icon">
            <WithWebComponent theme={{...}} src="sap-icon://employee" data-ui5-slot="icon">
              <ui5-icon src="sap-icon://employee" data-ui5-slot="icon" class="" />
            </WithWebComponent>
          </Icon>
          My Badge
        </ui5-badge>
      </WithWebComponent>
    </Badge>
  </ThemeProvider>
</ThemeProvider>
```

