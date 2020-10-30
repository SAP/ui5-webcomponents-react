import React from 'react';

import PropTypes from 'prop-types';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/lib/FlexBoxJustifyContent';
import { spacing } from '@ui5/webcomponents-react-base';

export const Pagination = ({ shouldDisableAll, numberOfElements, totalPages, selectedPage, setPage, style = spacing.sapUiMediumMargin }) => {
  if (!numberOfElements) return null;

  let disablePrevious = false;
  if (selectedPage === 0) {
    disablePrevious = true;
  }
  let disableNext = false;
  if (selectedPage === totalPages - 1) {
    disableNext = true;
  }
  const previousPage = selectedPage - 1;
  const morePreviousPage = previousPage - 1;
  const nextPage = selectedPage + 1;
  const moreNextPage = nextPage + 1;
  const hasPreviousPage = selectedPage > 0;
  const hasMorePreviousPages = selectedPage > 1;
  const hasNextPage = selectedPage < totalPages - 1;
  const hasMoreNextPages = selectedPage < totalPages - 2;

  const setPreviousPage = () => {
    if (!disablePrevious) setPage(selectedPage - 1);
  };

  const setNextPage = () => {
    if (!disableNext) setPage(selectedPage + 1);
  };

  return (
    <FlexBox data-testid="pagination-wrapper" alignItems={FlexBoxAlignItems.Start} style={style} justifyContent={FlexBoxJustifyContent.Center}>
      <Button data-testid="leftarrow-pagination-wrapper" disabled={disablePrevious || shouldDisableAll} design={ButtonDesign.Transparent} onClick={setPreviousPage}>
        {'<'}
      </Button>

      {hasMorePreviousPages && (
        <Button
          data-testid="morePreviousPage-pagination-wrapper"
          disabled={shouldDisableAll}
          design={ButtonDesign.Transparent}
          style={spacing.sapUiTinyMarginEnd}
          onClick={() => setPage(morePreviousPage)}
        >
          {morePreviousPage + 1}
        </Button>
      )}

      {hasPreviousPage && (
        <Button data-testid="previousPage-pagination-wrapper" disabled={shouldDisableAll} design={ButtonDesign.Transparent} style={spacing.sapUiTinyMarginEnd} onClick={() => setPage(previousPage)}>
          {previousPage + 1}
        </Button>
      )}

      <Button data-testid="selectedPage-pagination-wrapper" disabled={shouldDisableAll} style={spacing.sapUiTinyMarginEnd} design={ButtonDesign.Emphasized}>
        {selectedPage + 1}
      </Button>

      {hasNextPage && (
        <Button data-testid="nextPage-pagination-wrapper" disabled={shouldDisableAll} design={ButtonDesign.Transparent} style={spacing.sapUiTinyMarginEnd} onClick={() => setPage(nextPage)}>
          {nextPage + 1}
        </Button>
      )}

      {hasMoreNextPages && (
        <Button data-testid="moreNextPage-pagination-wrapper" disabled={shouldDisableAll} design={ButtonDesign.Transparent} style={spacing.sapUiTinyMarginEnd} onClick={() => setPage(moreNextPage)}>
          {moreNextPage + 1}
        </Button>
      )}

      <Button data-testid="afterarrow-pagination-wrapper" disabled={disableNext || shouldDisableAll} design={ButtonDesign.Transparent} onClick={setNextPage}>
        {'>'}
      </Button>
    </FlexBox>
  );
};

Pagination.propTypes = {
  totalItems: PropTypes.number,
  totalPages: PropTypes.number,
  selectedPage: PropTypes.number,
  setPage: PropTypes.func,
};
