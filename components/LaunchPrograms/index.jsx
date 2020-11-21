import React from 'react';
import styled from 'styled-components';
import LaunchProgramCard from '../LaunchProgramCard';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 700px){
    justify-content: center;
  }
`;

const LaunchPrograms = ({ launches }) => (
  <Wrapper>
    {
      launches
        ? launches.map((launch) => (
          <LaunchProgramCard key={launch.flight_number} data={launch} />
        )) : null
    }
  </Wrapper>
);

export default LaunchPrograms;
