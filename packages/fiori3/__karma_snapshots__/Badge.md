# `Badge`

#### `Basic Test`

```
<ThemeProvider withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Badge colorScheme="1">
      <WithWebComponent theme={{...}} colorScheme="1">
        <ui5-badge color-scheme="1" class="">
          My Badge
        </ui5-badge>
      </WithWebComponent>
    </Badge>
  </ThemeProvider>
</ThemeProvider>
```

#### `with Icon`

```
<ThemeProvider withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Badge icon={{...}} colorScheme="1">
      <WithWebComponent theme={{...}} icon={{...}} colorScheme="1">
        <ui5-badge color-scheme="1" class="">
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

