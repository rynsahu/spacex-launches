import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 10px;

  /* @media (min-width: 700px) and (max-width: 1023.98px){
    max-width: 710px;

  }

  @media (min-width: 1024px) and (max-width: 1439.38px){
    max-width: 1180px;
  } */
`;

const Container = ({ children }) => (
  <StyledContainer>
    {children}
  </StyledContainer>
);

export default Container;
