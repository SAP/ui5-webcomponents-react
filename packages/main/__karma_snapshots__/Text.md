# `Text`

#### `Render Basic Text`

```
<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]} id={{...}}>
    <ThemeProvider theme={{...}}>
      <WithStyles(Component) renderWhitespace={false} wrapping={true} width={{...}}>
        <Component renderWhitespace={false} wrapping={true} width={{...}} classes={{...}} theme={{...}}>
          <span style={{...}} className="Component-text---" title={[undefined]} data-ui5-slot={[undefined]}>
            FioriText
          </span>
        </Component>
      </WithStyles(Component)>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

#### `No Wrap`

```
<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]} id={{...}}>
    <ThemeProvider theme={{...}}>
      <WithStyles(Component) wrapping={false} renderWhitespace={false} width={{...}}>
        <Component wrapping={false} renderWhitespace={false} width={{...}} classes={{...}} theme={{...}}>
          <span style={{...}} className="Component-text--- Component-noWrap---" title={[undefined]} data-ui5-slot={[undefined]}>
            Lorem Ipsum dolor sit amed
          </span>
        </Component>
      </WithStyles(Component)>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

#### `Render Whitespace`

```
<ThemeProvider withToastContainer={false}>
  <JssProvider generateId={[Function]} id={{...}}>
    <ThemeProvider theme={{...}}>
      <WithStyles(Component) renderWhitespace={true} wrapping={true} width={{...}}>
        <Component renderWhitespace={true} wrapping={true} width={{...}} classes={{...}} theme={{...}}>
          <span style={{...}} className="Component-text--- Component-renderWhitespace---" title={[undefined]} data-ui5-slot={[undefined]}>
            Lorem Ipsum dolor sit amed
          </span>
        </Component>
      </WithStyles(Component)>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

