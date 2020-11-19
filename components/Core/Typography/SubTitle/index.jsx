import React from 'react';
import styled from 'styled-components';

const StyledSubTitle = styled.span`
  font-size: 0.85rem;
  padding: 0 10px;
  border-bottom: 1px solid #c1c1c1;
  margin-bottom: 10px;
`;

const SubTitle = ({ children }) => (
  <StyledSubTitle>
    {children}
  </StyledSubTitle>
);

export default SubTitle;
