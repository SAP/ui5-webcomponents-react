# `BusyIndicator`

#### `Basic Test`

```
<ThemeProvider withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <BusyIndicator active={true} size="Large">
      <WithWebComponent theme={{...}} active={true} size="Large">
        <ui5-busyindicator active={true} size="Large" class="" />
      </WithWebComponent>
    </BusyIndicator>
  </ThemeProvider>
</ThemeProvider>
```

#### `Inactive`

```
<ThemeProvider withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <BusyIndicator size="Large">
      <WithWebComponent theme={{...}} size="Large">
        <ui5-busyindicator size="Large" class="" />
      </WithWebComponent>
    </BusyIndicator>
  </ThemeProvider>
</ThemeProvider>
```

#### `Size Medium`

```
<ThemeProvider withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <BusyIndicator active={true} size="Medium">
      <WithWebComponent theme={{...}} active={true} size="Medium">
        <ui5-busyindicator active={true} size="Medium" class="" />
      </WithWebComponent>
    </BusyIndicator>
  </ThemeProvider>
</ThemeProvider>
```

#### `Size Small`

```
<ThemeProvider withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <BusyIndicator active={true} size="Small">
      <WithWebComponent theme={{...}} active={true} size="Small">
        <ui5-busyindicator active={true} size="Small" class="" />
      </WithWebComponent>
    </BusyIndicator>
  </ThemeProvider>
</ThemeProvider>
```

#### `Check Elements`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(Component)) fadeIn={false}>
      <WithStyles(Component) fadeIn={false} theme={{...}} classes={{...}}>
        <Component fadeIn={false} theme={{...}} classes={{...}}>
          <div className="Component-busyIndicator---" data-component-name="BusyIndicator" aria-busy="true" role="progressbar" tabIndex={0} aria-valuemin={0} aria-valuemax={100} title="Please wait" style={[undefined]} data-ui5-slot={[undefined]}>
            <div className="Component-circle---" />
            <div className="Component-circle---" />
            <div className="Component-circle---" />
          </div>
        </Component>
      </WithStyles(Component)>
    </Jss(WithStyles(Component))>
  </ThemeProvider>
</ThemeProvider>
```

#### `Fade In`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(Component)) fadeIn={true}>
      <WithStyles(Component) fadeIn={true} theme={{...}} classes={{...}}>
        <Component fadeIn={true} theme={{...}} classes={{...}}>
          <div className="Component-busyIndicator--- Component-fadeIn---" data-component-name="BusyIndicator" aria-busy="true" role="progressbar" tabIndex={0} aria-valuemin={0} aria-valuemax={100} title="Please wait" style={[undefined]} data-ui5-slot={[undefined]}>
            <div className="Component-circle---" />
            <div className="Component-circle---" />
            <div className="Component-circle---" />
          </div>
        </Component>
      </WithStyles(Component)>
    </Jss(WithStyles(Component))>
  </ThemeProvider>
</ThemeProvider>
```

