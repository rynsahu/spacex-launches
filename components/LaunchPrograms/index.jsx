import React from 'react';
import styled from 'styled-components';
import LaunchProgramCard from '../LaunchProgramCard';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 200px;
  margin: auto;
  justify-content:center;

  #noRecordFound {
    display: flex;
    width:100%;
    height: 55vh;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 700.98px) and (max-width: 1023.98px){
    max-width: 446px;
  }

  @media (min-width: 1024px){
    max-width: 880px;
  }
`;

const LaunchPrograms = ({ launches }) => (
  <Wrapper>
    {
      launches && launches.length
        ? launches.map((launch) => (
          <LaunchProgramCard key={launch.flight_number} data={launch} />
        )) : <div id="noRecordFound"><p>No launch program found.</p></div>
    }
  </Wrapper>
);

export default LaunchPrograms;
