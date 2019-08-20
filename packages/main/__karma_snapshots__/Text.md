# `Text`

#### `Render Basic Text`

```
<ThemeProvider withToastContainer={false} noInjectThemeProperties={false}>
  <JssProvider generateId={[Function]} jss={[undefined]}>
    <ThemeProvider theme={{...}}>
      <Text renderWhitespace={false} wrapping={true} width={{...}}>
        <span style={{...}} className="Text--text---" title={[undefined]} slot={[undefined]}>
          FioriText
        </span>
      </Text>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

#### `No Wrap`

```
<ThemeProvider withToastContainer={false} noInjectThemeProperties={false}>
  <JssProvider generateId={[Function]} jss={[undefined]}>
    <ThemeProvider theme={{...}}>
      <Text wrapping={false} renderWhitespace={false} width={{...}}>
        <span style={{...}} className="Text--text--- Text--noWrap---" title={[undefined]} slot={[undefined]}>
          Lorem Ipsum dolor sit amed
        </span>
      </Text>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

#### `Render Whitespace`

```
<ThemeProvider withToastContainer={false} noInjectThemeProperties={false}>
  <JssProvider generateId={[Function]} jss={[undefined]}>
    <ThemeProvider theme={{...}}>
      <Text renderWhitespace={true} wrapping={true} width={{...}}>
        <span style={{...}} className="Text--text--- Text--renderWhitespace---" title={[undefined]} slot={[undefined]}>
          Lorem Ipsum dolor sit amed
        </span>
      </Text>
    </ThemeProvider>
  </JssProvider>
</ThemeProvider>
```

