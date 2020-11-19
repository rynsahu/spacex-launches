import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 10px;
`;

const Container = ({ children }) => (
  <StyledContainer>
    {children}
  </StyledContainer>
);

export default Container;
