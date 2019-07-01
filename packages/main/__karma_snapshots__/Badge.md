# `Badge`

#### `Basic Test`

```
<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]} id={{...}}>
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
<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]} id={{...}}>
    <ThemeProvider theme={{...}}>
      <Badge icon={{...}} colorScheme="1">
        <ui5-badge color-scheme="1" class="">
          <Icon src="sap-icon://employee" data-ui5-slot="icon">
            <ui5-icon src="sap-icon://employee" data-ui5-slot="icon" class="" />
          </Icon>
          My Badge
        </ui5-badge>
      </Badge>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

