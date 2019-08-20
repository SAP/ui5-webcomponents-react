# `Badge`

#### `Basic Test`

```
<ThemeProvider withToastContainer={false} noInjectThemeProperties={false}>
  <JssProvider generateId={[Function]} jss={[undefined]}>
    <ThemeProvider theme={{...}}>
      <Badge colorScheme="1">
        <ui5-badge color-scheme="1" class="">
          My Badge
        </ui5-badge>
      </Badge>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

#### `with Icon`

```
<ThemeProvider withToastContainer={false} noInjectThemeProperties={false}>
  <JssProvider generateId={[Function]} jss={[undefined]}>
    <ThemeProvider theme={{...}}>
      <Badge icon={{...}} colorScheme="1">
        <ui5-badge color-scheme="1" class="">
          <Icon src="sap-icon://employee" slot="icon">
            <ui5-icon src="sap-icon://employee" slot="icon" class="" />
          </Icon>
          My Badge
        </ui5-badge>
      </Badge>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

