# `Carousel`

#### `Renders without crashing`

```
<ThemeProvider withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(Carousel)) activePage={0} arrowsPlacement="Content" onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom">
      <WithStyles(Carousel) activePage={0} arrowsPlacement="Content" onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom" theme={{...}} classes={{...}}>
        <Carousel activePage={0} arrowsPlacement="Content" onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom" theme={{...}} classes={{...}}>
          <div className="Carousel-carousel---" style={{...}} title={[undefined]} data-ui5-slot={[undefined]}>
            <div className="Carousel-carouselInner---">
              <CarouselInner className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" activePage={0}>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 1
                  </p>
                </div>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 2
                  </p>
                </div>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 3
                  </p>
                </div>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 4
                  </p>
                </div>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 5
                  </p>
                </div>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 6
                  </p>
                </div>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 7
                  </p>
                </div>
              </CarouselInner>
            </div>
            <Jss(WithStyles(CarouselPagination)) activePage={0} arrowsPlacement="Content" onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom" theme={{...}} classes={{...}} goToPreviousPage={[Function]} goToNextPage={[Function]}>
              <WithStyles(CarouselPagination) activePage={0} arrowsPlacement="Content" onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom" theme={{...}} classes={{...}} goToPreviousPage={[Function]} goToNextPage={[Function]}>
                <CarouselPagination activePage={0} arrowsPlacement="Content" onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom" theme={{...}} classes={{...}} goToPreviousPage={[Function]} goToNextPage={[Function]}>
                  <div className="CarouselPagination-pagination--- CarouselPagination-paginationArrowContent--- CarouselPagination-paginationBottom---">
                    <div data-value="paginationArrow" className="CarouselPagination-paginationArrow---" onClick={[Function]}>
                      <Icon src="slim-arrow-left">
                        <WithWebComponent theme={{...}} src="slim-arrow-left">
                          <ui5-icon src="slim-arrow-left" class="" />
                        </WithWebComponent>
                      </Icon>
                    </div>
                    <div className="CarouselPagination-paginationIndicator---">
                      <span className="CarouselPagination-paginationIconActive--- CarouselPagination-paginationIcon---" aria-label="Item 1 of 7 displayed">
                        1
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 2 of 7 displayed">
                        2
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 3 of 7 displayed">
                        3
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 4 of 7 displayed">
                        4
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 5 of 7 displayed">
                        5
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 6 of 7 displayed">
                        6
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 7 of 7 displayed">
                        7
                      </span>
                    </div>
                    <div data-value="paginationArrow" className="CarouselPagination-paginationArrow---" onClick={[Function]}>
                      <Icon src="slim-arrow-right">
                        <WithWebComponent theme={{...}} src="slim-arrow-right">
                          <ui5-icon src="slim-arrow-right" class="" />
                        </WithWebComponent>
                      </Icon>
                    </div>
                  </div>
                </CarouselPagination>
              </WithStyles(CarouselPagination)>
            </Jss(WithStyles(CarouselPagination))>
          </div>
        </Carousel>
      </WithStyles(Carousel)>
    </Jss(WithStyles(Carousel))>
  </ThemeProvider>
</ThemeProvider>
```

#### `Should render a text indicator`

```
<ThemeProvider withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(Carousel)) activePage={0} arrowsPlacement="Content" onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom">
      <WithStyles(Carousel) activePage={0} arrowsPlacement="Content" onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom" theme={{...}} classes={{...}}>
        <Carousel activePage={0} arrowsPlacement="Content" onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom" theme={{...}} classes={{...}}>
          <div className="Carousel-carousel---" style={{...}} title={[undefined]} data-ui5-slot={[undefined]}>
            <div className="Carousel-carouselInner---">
              <CarouselInner className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" activePage={0}>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 1
                  </p>
                </div>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 2
                  </p>
                </div>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 3
                  </p>
                </div>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 4
                  </p>
                </div>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 5
                  </p>
                </div>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 6
                  </p>
                </div>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 7
                  </p>
                </div>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 8
                  </p>
                </div>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 9
                  </p>
                </div>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 10
                  </p>
                </div>
              </CarouselInner>
            </div>
            <Jss(WithStyles(CarouselPagination)) activePage={0} arrowsPlacement="Content" onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom" theme={{...}} classes={{...}} goToPreviousPage={[Function]} goToNextPage={[Function]}>
              <WithStyles(CarouselPagination) activePage={0} arrowsPlacement="Content" onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom" theme={{...}} classes={{...}} goToPreviousPage={[Function]} goToNextPage={[Function]}>
                <CarouselPagination activePage={0} arrowsPlacement="Content" onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom" theme={{...}} classes={{...}} goToPreviousPage={[Function]} goToNextPage={[Function]}>
                  <div className="CarouselPagination-pagination--- CarouselPagination-paginationArrowContent--- CarouselPagination-paginationBottom---">
                    <div data-value="paginationArrow" className="CarouselPagination-paginationArrow---" onClick={[Function]}>
                      <Icon src="slim-arrow-left">
                        <WithWebComponent theme={{...}} src="slim-arrow-left">
                          <ui5-icon src="slim-arrow-left" class="" />
                        </WithWebComponent>
                      </Icon>
                    </div>
                    <div className="CarouselPagination-paginationIndicator---">
                      <Label for="">
                        <WithWebComponent theme={{...}} for="">
                          <ui5-label for="" class="">
                            Showing 1 of 10
                          </ui5-label>
                        </WithWebComponent>
                      </Label>
                    </div>
                    <div data-value="paginationArrow" className="CarouselPagination-paginationArrow---" onClick={[Function]}>
                      <Icon src="slim-arrow-right">
                        <WithWebComponent theme={{...}} src="slim-arrow-right">
                          <ui5-icon src="slim-arrow-right" class="" />
                        </WithWebComponent>
                      </Icon>
                    </div>
                  </div>
                </CarouselPagination>
              </WithStyles(CarouselPagination)>
            </Jss(WithStyles(CarouselPagination))>
          </div>
        </Carousel>
      </WithStyles(Carousel)>
    </Jss(WithStyles(Carousel))>
  </ThemeProvider>
</ThemeProvider>
```

#### `CarouselArrowsPlacement: Content`

```
<ThemeProvider withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(Carousel)) arrowsPlacement="Content" activePage={0} onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom">
      <WithStyles(Carousel) arrowsPlacement="Content" activePage={0} onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom" theme={{...}} classes={{...}}>
        <Carousel arrowsPlacement="Content" activePage={0} onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom" theme={{...}} classes={{...}}>
          <div className="Carousel-carousel---" style={{...}} title={[undefined]} data-ui5-slot={[undefined]}>
            <div className="Carousel-carouselInner---">
              <CarouselInner className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" activePage={0}>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 1
                  </p>
                </div>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 2
                  </p>
                </div>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 3
                  </p>
                </div>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 4
                  </p>
                </div>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 5
                  </p>
                </div>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 6
                  </p>
                </div>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 7
                  </p>
                </div>
              </CarouselInner>
            </div>
            <Jss(WithStyles(CarouselPagination)) arrowsPlacement="Content" activePage={0} onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom" theme={{...}} classes={{...}} goToPreviousPage={[Function]} goToNextPage={[Function]}>
              <WithStyles(CarouselPagination) arrowsPlacement="Content" activePage={0} onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom" theme={{...}} classes={{...}} goToPreviousPage={[Function]} goToNextPage={[Function]}>
                <CarouselPagination arrowsPlacement="Content" activePage={0} onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom" theme={{...}} classes={{...}} goToPreviousPage={[Function]} goToNextPage={[Function]}>
                  <div className="CarouselPagination-pagination--- CarouselPagination-paginationArrowContent--- CarouselPagination-paginationBottom---">
                    <div data-value="paginationArrow" className="CarouselPagination-paginationArrow---" onClick={[Function]}>
                      <Icon src="slim-arrow-left">
                        <WithWebComponent theme={{...}} src="slim-arrow-left">
                          <ui5-icon src="slim-arrow-left" class="" />
                        </WithWebComponent>
                      </Icon>
                    </div>
                    <div className="CarouselPagination-paginationIndicator---">
                      <span className="CarouselPagination-paginationIconActive--- CarouselPagination-paginationIcon---" aria-label="Item 1 of 7 displayed">
                        1
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 2 of 7 displayed">
                        2
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 3 of 7 displayed">
                        3
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 4 of 7 displayed">
                        4
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 5 of 7 displayed">
                        5
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 6 of 7 displayed">
                        6
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 7 of 7 displayed">
                        7
                      </span>
                    </div>
                    <div data-value="paginationArrow" className="CarouselPagination-paginationArrow---" onClick={[Function]}>
                      <Icon src="slim-arrow-right">
                        <WithWebComponent theme={{...}} src="slim-arrow-right">
                          <ui5-icon src="slim-arrow-right" class="" />
                        </WithWebComponent>
                      </Icon>
                    </div>
                  </div>
                </CarouselPagination>
              </WithStyles(CarouselPagination)>
            </Jss(WithStyles(CarouselPagination))>
          </div>
        </Carousel>
      </WithStyles(Carousel)>
    </Jss(WithStyles(Carousel))>
  </ThemeProvider>
</ThemeProvider>
```

#### `CarouselArrowsPlacement: PageIndicator`

```
<ThemeProvider withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(Carousel)) arrowsPlacement="PageIndicator" activePage={0} onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom">
      <WithStyles(Carousel) arrowsPlacement="PageIndicator" activePage={0} onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom" theme={{...}} classes={{...}}>
        <Carousel arrowsPlacement="PageIndicator" activePage={0} onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom" theme={{...}} classes={{...}}>
          <div className="Carousel-carousel---" style={{...}} title={[undefined]} data-ui5-slot={[undefined]}>
            <div className="Carousel-carouselInner---">
              <CarouselInner className="Carousel-carouselItem---" activePage={0}>
                <div className="Carousel-carouselItem---" style={{...}}>
                  <p>
                    Carousel 1
                  </p>
                </div>
                <div className="Carousel-carouselItem---" style={{...}}>
                  <p>
                    Carousel 2
                  </p>
                </div>
                <div className="Carousel-carouselItem---" style={{...}}>
                  <p>
                    Carousel 3
                  </p>
                </div>
                <div className="Carousel-carouselItem---" style={{...}}>
                  <p>
                    Carousel 4
                  </p>
                </div>
                <div className="Carousel-carouselItem---" style={{...}}>
                  <p>
                    Carousel 5
                  </p>
                </div>
                <div className="Carousel-carouselItem---" style={{...}}>
                  <p>
                    Carousel 6
                  </p>
                </div>
                <div className="Carousel-carouselItem---" style={{...}}>
                  <p>
                    Carousel 7
                  </p>
                </div>
              </CarouselInner>
            </div>
            <Jss(WithStyles(CarouselPagination)) arrowsPlacement="PageIndicator" activePage={0} onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom" theme={{...}} classes={{...}} goToPreviousPage={[Function]} goToNextPage={[Function]}>
              <WithStyles(CarouselPagination) arrowsPlacement="PageIndicator" activePage={0} onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom" theme={{...}} classes={{...}} goToPreviousPage={[Function]} goToNextPage={[Function]}>
                <CarouselPagination arrowsPlacement="PageIndicator" activePage={0} onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom" theme={{...}} classes={{...}} goToPreviousPage={[Function]} goToNextPage={[Function]}>
                  <div className="CarouselPagination-pagination--- CarouselPagination-paginationBottom---">
                    <div data-value={{...}} className="CarouselPagination-paginationArrow---" onClick={[Function]}>
                      <Icon src="slim-arrow-left">
                        <WithWebComponent theme={{...}} src="slim-arrow-left">
                          <ui5-icon src="slim-arrow-left" class="" />
                        </WithWebComponent>
                      </Icon>
                    </div>
                    <div className="CarouselPagination-paginationIndicator---">
                      <span className="CarouselPagination-paginationIconActive--- CarouselPagination-paginationIcon---" aria-label="Item 1 of 7 displayed">
                        1
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 2 of 7 displayed">
                        2
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 3 of 7 displayed">
                        3
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 4 of 7 displayed">
                        4
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 5 of 7 displayed">
                        5
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 6 of 7 displayed">
                        6
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 7 of 7 displayed">
                        7
                      </span>
                    </div>
                    <div data-value={{...}} className="CarouselPagination-paginationArrow---" onClick={[Function]}>
                      <Icon src="slim-arrow-right">
                        <WithWebComponent theme={{...}} src="slim-arrow-right">
                          <ui5-icon src="slim-arrow-right" class="" />
                        </WithWebComponent>
                      </Icon>
                    </div>
                  </div>
                </CarouselPagination>
              </WithStyles(CarouselPagination)>
            </Jss(WithStyles(CarouselPagination))>
          </div>
        </Carousel>
      </WithStyles(Carousel)>
    </Jss(WithStyles(Carousel))>
  </ThemeProvider>
</ThemeProvider>
```

#### `Page Indicator Placement: Top`

```
<ThemeProvider withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(Carousel)) arrowsPlacement="PageIndicator" pageIndicatorPlacement="Top" activePage={0} onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false}>
      <WithStyles(Carousel) arrowsPlacement="PageIndicator" pageIndicatorPlacement="Top" activePage={0} onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} theme={{...}} classes={{...}}>
        <Carousel arrowsPlacement="PageIndicator" pageIndicatorPlacement="Top" activePage={0} onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} theme={{...}} classes={{...}}>
          <div className="Carousel-carousel---" style={{...}} title={[undefined]} data-ui5-slot={[undefined]}>
            <Jss(WithStyles(CarouselPagination)) arrowsPlacement="PageIndicator" pageIndicatorPlacement="Top" activePage={0} onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} theme={{...}} classes={{...}} goToPreviousPage={[Function]} goToNextPage={[Function]}>
              <WithStyles(CarouselPagination) arrowsPlacement="PageIndicator" pageIndicatorPlacement="Top" activePage={0} onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} theme={{...}} classes={{...}} goToPreviousPage={[Function]} goToNextPage={[Function]}>
                <CarouselPagination arrowsPlacement="PageIndicator" pageIndicatorPlacement="Top" activePage={0} onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} theme={{...}} classes={{...}} goToPreviousPage={[Function]} goToNextPage={[Function]}>
                  <div className="CarouselPagination-pagination--- CarouselPagination-paginationTop---">
                    <div data-value={{...}} className="CarouselPagination-paginationArrow---" onClick={[Function]}>
                      <Icon src="slim-arrow-left">
                        <WithWebComponent theme={{...}} src="slim-arrow-left">
                          <ui5-icon src="slim-arrow-left" class="" />
                        </WithWebComponent>
                      </Icon>
                    </div>
                    <div className="CarouselPagination-paginationIndicator---">
                      <span className="CarouselPagination-paginationIconActive--- CarouselPagination-paginationIcon---" aria-label="Item 1 of 7 displayed">
                        1
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 2 of 7 displayed">
                        2
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 3 of 7 displayed">
                        3
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 4 of 7 displayed">
                        4
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 5 of 7 displayed">
                        5
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 6 of 7 displayed">
                        6
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 7 of 7 displayed">
                        7
                      </span>
                    </div>
                    <div data-value={{...}} className="CarouselPagination-paginationArrow---" onClick={[Function]}>
                      <Icon src="slim-arrow-right">
                        <WithWebComponent theme={{...}} src="slim-arrow-right">
                          <ui5-icon src="slim-arrow-right" class="" />
                        </WithWebComponent>
                      </Icon>
                    </div>
                  </div>
                </CarouselPagination>
              </WithStyles(CarouselPagination)>
            </Jss(WithStyles(CarouselPagination))>
            <div className="Carousel-carouselInner---">
              <CarouselInner className="Carousel-carouselItem---" activePage={0}>
                <div className="Carousel-carouselItem---" style={{...}}>
                  <p>
                    Carousel 1
                  </p>
                </div>
                <div className="Carousel-carouselItem---" style={{...}}>
                  <p>
                    Carousel 2
                  </p>
                </div>
                <div className="Carousel-carouselItem---" style={{...}}>
                  <p>
                    Carousel 3
                  </p>
                </div>
                <div className="Carousel-carouselItem---" style={{...}}>
                  <p>
                    Carousel 4
                  </p>
                </div>
                <div className="Carousel-carouselItem---" style={{...}}>
                  <p>
                    Carousel 5
                  </p>
                </div>
                <div className="Carousel-carouselItem---" style={{...}}>
                  <p>
                    Carousel 6
                  </p>
                </div>
                <div className="Carousel-carouselItem---" style={{...}}>
                  <p>
                    Carousel 7
                  </p>
                </div>
              </CarouselInner>
            </div>
          </div>
        </Carousel>
      </WithStyles(Carousel)>
    </Jss(WithStyles(Carousel))>
  </ThemeProvider>
</ThemeProvider>
```

#### `Update activePage via prop`

```
<ThemeProvider withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(Carousel)) activePage={0} arrowsPlacement="Content" onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom">
      <WithStyles(Carousel) activePage={0} arrowsPlacement="Content" onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom" theme={{...}} classes={{...}}>
        <Carousel activePage={0} arrowsPlacement="Content" onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom" theme={{...}} classes={{...}}>
          <div className="Carousel-carousel---" style={{...}} title={[undefined]} data-ui5-slot={[undefined]}>
            <div className="Carousel-carouselInner---">
              <CarouselInner className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" activePage={0}>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 1
                  </p>
                </div>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 2
                  </p>
                </div>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 3
                  </p>
                </div>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 4
                  </p>
                </div>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 5
                  </p>
                </div>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 6
                  </p>
                </div>
                <div className="Carousel-carouselItem--- Carousel-carouselItemContentIndicator---" style={{...}}>
                  <p>
                    Carousel 7
                  </p>
                </div>
              </CarouselInner>
            </div>
            <Jss(WithStyles(CarouselPagination)) activePage={0} arrowsPlacement="Content" onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom" theme={{...}} classes={{...}} goToPreviousPage={[Function]} goToNextPage={[Function]}>
              <WithStyles(CarouselPagination) activePage={0} arrowsPlacement="Content" onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom" theme={{...}} classes={{...}} goToPreviousPage={[Function]} goToNextPage={[Function]}>
                <CarouselPagination activePage={0} arrowsPlacement="Content" onPageChanged={[Function: onPageChanged]} height="100%" width="100%" showPageIndicator={true} loop={false} pageIndicatorPlacement="Bottom" theme={{...}} classes={{...}} goToPreviousPage={[Function]} goToNextPage={[Function]}>
                  <div className="CarouselPagination-pagination--- CarouselPagination-paginationArrowContent--- CarouselPagination-paginationBottom---">
                    <div data-value="paginationArrow" className="CarouselPagination-paginationArrow---" onClick={[Function]}>
                      <Icon src="slim-arrow-left">
                        <WithWebComponent theme={{...}} src="slim-arrow-left">
                          <ui5-icon src="slim-arrow-left" class="" />
                        </WithWebComponent>
                      </Icon>
                    </div>
                    <div className="CarouselPagination-paginationIndicator---">
                      <span className="CarouselPagination-paginationIconActive--- CarouselPagination-paginationIcon---" aria-label="Item 1 of 7 displayed">
                        1
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 2 of 7 displayed">
                        2
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 3 of 7 displayed">
                        3
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 4 of 7 displayed">
                        4
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 5 of 7 displayed">
                        5
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 6 of 7 displayed">
                        6
                      </span>
                      <span className="null CarouselPagination-paginationIcon---" aria-label="Item 7 of 7 displayed">
                        7
                      </span>
                    </div>
                    <div data-value="paginationArrow" className="CarouselPagination-paginationArrow---" onClick={[Function]}>
                      <Icon src="slim-arrow-right">
                        <WithWebComponent theme={{...}} src="slim-arrow-right">
                          <ui5-icon src="slim-arrow-right" class="" />
                        </WithWebComponent>
                      </Icon>
                    </div>
                  </div>
                </CarouselPagination>
              </WithStyles(CarouselPagination)>
            </Jss(WithStyles(CarouselPagination))>
          </div>
        </Carousel>
      </WithStyles(Carousel)>
    </Jss(WithStyles(Carousel))>
  </ThemeProvider>
</ThemeProvider>
```

