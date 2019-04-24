# `Text`

#### `Render Basic Text`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(Component)) renderWhitespace={false} wrapping={true} width={{...}}>
      <WithStyles(Component) renderWhitespace={false} wrapping={true} width={{...}} theme={{...}} classes={{...}}>
        <Component renderWhitespace={false} wrapping={true} width={{...}} theme={{...}} classes={{...}}>
          <span style={{...}} className="Component-text---" title={[undefined]} data-ui5-slot={[undefined]}>
            FioriText
          </span>
        </Component>
      </WithStyles(Component)>
    </Jss(WithStyles(Component))>
  </ThemeProvider>
</ThemeProvider>
```

#### `No Wrap`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(Component)) wrapping={false} renderWhitespace={false} width={{...}}>
      <WithStyles(Component) wrapping={false} renderWhitespace={false} width={{...}} theme={{...}} classes={{...}}>
        <Component wrapping={false} renderWhitespace={false} width={{...}} theme={{...}} classes={{...}}>
          <span style={{...}} className="Component-text--- Component-noWrap---" title={[undefined]} data-ui5-slot={[undefined]}>
            Lorem Ipsum dolor sit amed
          </span>
        </Component>
      </WithStyles(Component)>
    </Jss(WithStyles(Component))>
  </ThemeProvider>
</ThemeProvider>
```

#### `Render Whitespace`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(Component)) renderWhitespace={true} wrapping={true} width={{...}}>
      <WithStyles(Component) renderWhitespace={true} wrapping={true} width={{...}} theme={{...}} classes={{...}}>
        <Component renderWhitespace={true} wrapping={true} width={{...}} theme={{...}} classes={{...}}>
          <span style={{...}} className="Component-text--- Component-renderWhitespace---" title={[undefined]} data-ui5-slot={[undefined]}>
            Lorem Ipsum dolor sit amed
          </span>
        </Component>
      </WithStyles(Component)>
    </Jss(WithStyles(Component))>
  </ThemeProvider>
</ThemeProvider>
```

