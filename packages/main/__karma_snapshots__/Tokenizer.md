# `Tokenizer`

#### `Basic Test (generated)`

```
<ThemeProvider withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Tokenizer>
      <WithWebComponent theme={{...}}>
        <ui5-tokenizer class="" />
      </WithWebComponent>
    </Tokenizer>
  </ThemeProvider>
</ThemeProvider>
```

#### `Render without crashing`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(Tokenizer)) items={{...}} editable={true} width={{...}}>
      <WithStyles(Tokenizer) items={{...}} editable={true} width={{...}} theme={{...}} classes={{...}}>
        <Tokenizer items={{...}} editable={true} width={{...}} theme={{...}} classes={{...}}>
          <div onMouseDown={[Function]} onMouseMove={[Function]} style={{...}} role="list" className="Tokenizer-tokenizer---" tabIndex={0} title={[undefined]} data-ui5-slot={[undefined]}>
            <div className="Tokenizer-tokenizerScrollContainer---">
              <Jss(WithStyles(Token)) withinTokenizer={true} tokenizerEditable={true} onDeleteClick={[Function]} id="1" selected={false} editable={true}>
                <WithStyles(Token) withinTokenizer={true} tokenizerEditable={true} onDeleteClick={[Function]} id="1" selected={false} editable={true} theme={{...}} classes={{...}}>
                  <Token withinTokenizer={true} tokenizerEditable={true} onDeleteClick={[Function]} id="1" selected={false} editable={true} theme={{...}} classes={{...}}>
                    <div onClick={[Function]} tabIndex={-1} className="Token-token--- Token-compact--- Token-withinTokenizer---" style={[undefined]} title={[undefined]} data-ui5-slot={[undefined]}>
                      <span className="Token-tokenText---">
                        Test 1
                      </span>
                      <div className="Token-tokenIcon---">
                        <Icon src="decline" style={{...}}>
                          <WithWebComponent theme={{...}} src="decline" style={{...}}>
                            <ui5-icon src="decline" style={{...}} class="sapUiSizeCompact" />
                          </WithWebComponent>
                        </Icon>
                      </div>
                    </div>
                  </Token>
                </WithStyles(Token)>
              </Jss(WithStyles(Token))>
              <Jss(WithStyles(Token)) withinTokenizer={true} tokenizerEditable={true} onDeleteClick={[Function]} id="2" selected={false} editable={true}>
                <WithStyles(Token) withinTokenizer={true} tokenizerEditable={true} onDeleteClick={[Function]} id="2" selected={false} editable={true} theme={{...}} classes={{...}}>
                  <Token withinTokenizer={true} tokenizerEditable={true} onDeleteClick={[Function]} id="2" selected={false} editable={true} theme={{...}} classes={{...}}>
                    <div onClick={[Function]} tabIndex={-1} className="Token-token--- Token-compact--- Token-withinTokenizer---" style={[undefined]} title={[undefined]} data-ui5-slot={[undefined]}>
                      <span className="Token-tokenText---">
                        Test 2
                      </span>
                      <div className="Token-tokenIcon---">
                        <Icon src="decline" style={{...}}>
                          <WithWebComponent theme={{...}} src="decline" style={{...}}>
                            <ui5-icon src="decline" style={{...}} class="sapUiSizeCompact" />
                          </WithWebComponent>
                        </Icon>
                      </div>
                    </div>
                  </Token>
                </WithStyles(Token)>
              </Jss(WithStyles(Token))>
              <Jss(WithStyles(Token)) withinTokenizer={true} tokenizerEditable={true} onDeleteClick={[Function]} id="3" selected={false} editable={true}>
                <WithStyles(Token) withinTokenizer={true} tokenizerEditable={true} onDeleteClick={[Function]} id="3" selected={false} editable={true} theme={{...}} classes={{...}}>
                  <Token withinTokenizer={true} tokenizerEditable={true} onDeleteClick={[Function]} id="3" selected={false} editable={true} theme={{...}} classes={{...}}>
                    <div onClick={[Function]} tabIndex={-1} className="Token-token--- Token-compact--- Token-withinTokenizer---" style={[undefined]} title={[undefined]} data-ui5-slot={[undefined]}>
                      <span className="Token-tokenText---">
                        Test 3
                      </span>
                      <div className="Token-tokenIcon---">
                        <Icon src="decline" style={{...}}>
                          <WithWebComponent theme={{...}} src="decline" style={{...}}>
                            <ui5-icon src="decline" style={{...}} class="sapUiSizeCompact" />
                          </WithWebComponent>
                        </Icon>
                      </div>
                    </div>
                  </Token>
                </WithStyles(Token)>
              </Jss(WithStyles(Token))>
            </div>
          </div>
        </Tokenizer>
      </WithStyles(Tokenizer)>
    </Jss(WithStyles(Tokenizer))>
  </ThemeProvider>
</ThemeProvider>
```

#### `No Items`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(Tokenizer)) editable={true} width={{...}} items={{...}}>
      <WithStyles(Tokenizer) editable={true} width={{...}} items={{...}} theme={{...}} classes={{...}}>
        <Tokenizer editable={true} width={{...}} items={{...}} theme={{...}} classes={{...}}>
          <div onMouseDown={[Function]} onMouseMove={[Function]} style={{...}} role="list" className="Tokenizer-tokenizer--- " tabIndex={0} title={[undefined]} data-ui5-slot={[undefined]}>
            <div className="Tokenizer-tokenizerScrollContainer---" />
          </div>
        </Tokenizer>
      </WithStyles(Tokenizer)>
    </Jss(WithStyles(Tokenizer))>
  </ThemeProvider>
</ThemeProvider>
```

#### `Read Only + fix width`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(Tokenizer)) items={{...}} width="300px" editable={false}>
      <WithStyles(Tokenizer) items={{...}} width="300px" editable={false} theme={{...}} classes={{...}}>
        <Tokenizer items={{...}} width="300px" editable={false} theme={{...}} classes={{...}}>
          <div onMouseDown={[Function]} onMouseMove={[Function]} style={{...}} role="list" className="Tokenizer-tokenizer--- " tabIndex={0} title={[undefined]} data-ui5-slot={[undefined]}>
            <div className="Tokenizer-tokenizerScrollContainer---">
              <Jss(WithStyles(Token)) withinTokenizer={true} tokenizerEditable={false} onDeleteClick={[Function]} id="1" selected={false} editable={true}>
                <WithStyles(Token) withinTokenizer={true} tokenizerEditable={false} onDeleteClick={[Function]} id="1" selected={false} editable={true} theme={{...}} classes={{...}}>
                  <Token withinTokenizer={true} tokenizerEditable={false} onDeleteClick={[Function]} id="1" selected={false} editable={true} theme={{...}} classes={{...}}>
                    <div onClick={[Function]} tabIndex={-1} className="Token-token--- Token-compact--- Token-readOnly--- Token-withinTokenizer--- Token-tokenizerReadOnly---" style={[undefined]} title={[undefined]} data-ui5-slot={[undefined]}>
                      <span className="Token-tokenText---">
                        Test 1
                      </span>
                    </div>
                  </Token>
                </WithStyles(Token)>
              </Jss(WithStyles(Token))>
              <Jss(WithStyles(Token)) withinTokenizer={true} tokenizerEditable={false} onDeleteClick={[Function]} id="2" selected={false} editable={true}>
                <WithStyles(Token) withinTokenizer={true} tokenizerEditable={false} onDeleteClick={[Function]} id="2" selected={false} editable={true} theme={{...}} classes={{...}}>
                  <Token withinTokenizer={true} tokenizerEditable={false} onDeleteClick={[Function]} id="2" selected={false} editable={true} theme={{...}} classes={{...}}>
                    <div onClick={[Function]} tabIndex={-1} className="Token-token--- Token-compact--- Token-readOnly--- Token-withinTokenizer--- Token-tokenizerReadOnly---" style={[undefined]} title={[undefined]} data-ui5-slot={[undefined]}>
                      <span className="Token-tokenText---">
                        Test 2
                      </span>
                    </div>
                  </Token>
                </WithStyles(Token)>
              </Jss(WithStyles(Token))>
              <Jss(WithStyles(Token)) withinTokenizer={true} tokenizerEditable={false} onDeleteClick={[Function]} id="3" selected={false} editable={true}>
                <WithStyles(Token) withinTokenizer={true} tokenizerEditable={false} onDeleteClick={[Function]} id="3" selected={false} editable={true} theme={{...}} classes={{...}}>
                  <Token withinTokenizer={true} tokenizerEditable={false} onDeleteClick={[Function]} id="3" selected={false} editable={true} theme={{...}} classes={{...}}>
                    <div onClick={[Function]} tabIndex={-1} className="Token-token--- Token-compact--- Token-readOnly--- Token-withinTokenizer--- Token-tokenizerReadOnly---" style={[undefined]} title={[undefined]} data-ui5-slot={[undefined]}>
                      <span className="Token-tokenText---">
                        Test 3
                      </span>
                    </div>
                  </Token>
                </WithStyles(Token)>
              </Jss(WithStyles(Token))>
            </div>
          </div>
        </Tokenizer>
      </WithStyles(Tokenizer)>
    </Jss(WithStyles(Tokenizer))>
  </ThemeProvider>
</ThemeProvider>
```

#### `drag and drop`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(Tokenizer)) items={{...}} editable={true} width={{...}}>
      <WithStyles(Tokenizer) items={{...}} editable={true} width={{...}} theme={{...}} classes={{...}}>
        <Tokenizer items={{...}} editable={true} width={{...}} theme={{...}} classes={{...}}>
          <div onMouseDown={[Function]} onMouseMove={[Function]} style={{...}} role="list" className="Tokenizer-tokenizer---" tabIndex={0} title={[undefined]} data-ui5-slot={[undefined]}>
            <div className="Tokenizer-tokenizerScrollContainer---">
              <Jss(WithStyles(Token)) withinTokenizer={true} tokenizerEditable={true} onDeleteClick={[Function]} id="1" selected={false} editable={true}>
                <WithStyles(Token) withinTokenizer={true} tokenizerEditable={true} onDeleteClick={[Function]} id="1" selected={false} editable={true} theme={{...}} classes={{...}}>
                  <Token withinTokenizer={true} tokenizerEditable={true} onDeleteClick={[Function]} id="1" selected={false} editable={true} theme={{...}} classes={{...}}>
                    <div onClick={[Function]} tabIndex={-1} className="Token-token--- Token-compact--- Token-withinTokenizer---" style={[undefined]} title={[undefined]} data-ui5-slot={[undefined]}>
                      <span className="Token-tokenText---">
                        Test 1
                      </span>
                      <div className="Token-tokenIcon---">
                        <Icon src="decline" style={{...}}>
                          <WithWebComponent theme={{...}} src="decline" style={{...}}>
                            <ui5-icon src="decline" style={{...}} class="sapUiSizeCompact" />
                          </WithWebComponent>
                        </Icon>
                      </div>
                    </div>
                  </Token>
                </WithStyles(Token)>
              </Jss(WithStyles(Token))>
              <Jss(WithStyles(Token)) withinTokenizer={true} tokenizerEditable={true} onDeleteClick={[Function]} id="2" selected={false} editable={true}>
                <WithStyles(Token) withinTokenizer={true} tokenizerEditable={true} onDeleteClick={[Function]} id="2" selected={false} editable={true} theme={{...}} classes={{...}}>
                  <Token withinTokenizer={true} tokenizerEditable={true} onDeleteClick={[Function]} id="2" selected={false} editable={true} theme={{...}} classes={{...}}>
                    <div onClick={[Function]} tabIndex={-1} className="Token-token--- Token-compact--- Token-withinTokenizer---" style={[undefined]} title={[undefined]} data-ui5-slot={[undefined]}>
                      <span className="Token-tokenText---">
                        Test 2
                      </span>
                      <div className="Token-tokenIcon---">
                        <Icon src="decline" style={{...}}>
                          <WithWebComponent theme={{...}} src="decline" style={{...}}>
                            <ui5-icon src="decline" style={{...}} class="sapUiSizeCompact" />
                          </WithWebComponent>
                        </Icon>
                      </div>
                    </div>
                  </Token>
                </WithStyles(Token)>
              </Jss(WithStyles(Token))>
              <Jss(WithStyles(Token)) withinTokenizer={true} tokenizerEditable={true} onDeleteClick={[Function]} id="3" selected={false} editable={true}>
                <WithStyles(Token) withinTokenizer={true} tokenizerEditable={true} onDeleteClick={[Function]} id="3" selected={false} editable={true} theme={{...}} classes={{...}}>
                  <Token withinTokenizer={true} tokenizerEditable={true} onDeleteClick={[Function]} id="3" selected={false} editable={true} theme={{...}} classes={{...}}>
                    <div onClick={[Function]} tabIndex={-1} className="Token-token--- Token-compact--- Token-withinTokenizer---" style={[undefined]} title={[undefined]} data-ui5-slot={[undefined]}>
                      <span className="Token-tokenText---">
                        Test 3
                      </span>
                      <div className="Token-tokenIcon---">
                        <Icon src="decline" style={{...}}>
                          <WithWebComponent theme={{...}} src="decline" style={{...}}>
                            <ui5-icon src="decline" style={{...}} class="sapUiSizeCompact" />
                          </WithWebComponent>
                        </Icon>
                      </div>
                    </div>
                  </Token>
                </WithStyles(Token)>
              </Jss(WithStyles(Token))>
            </div>
          </div>
        </Tokenizer>
      </WithStyles(Tokenizer)>
    </Jss(WithStyles(Tokenizer))>
  </ThemeProvider>
</ThemeProvider>
```

