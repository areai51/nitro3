import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface UiKitProps {}

const StyledUiKit = styled.div`
  color: pink;
`;

export const UiKit = (props: UiKitProps) => {
  return (
    <StyledUiKit>
      <h1>Welcome to ui-kit!</h1>
    </StyledUiKit>
  );
};

export default UiKit;
