import React from 'react';
import styled from 'styled-components';
import LaunchProgramCard from '../LaunchProgramCard';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  #noRecordFound {
    display: flex;
    width:100%;
    height: 55vh;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 700px){
    justify-content: center;
  }
`;

const LaunchPrograms = ({ launches }) => (
  <Wrapper>
    {
      launches && launches.length
        ? launches.map((launch) => (
          <LaunchProgramCard key={launch.flight_number} data={launch} />
        )) : <div id="noRecordFound"><p>No launches found.</p></div>
    }
  </Wrapper>
);

export default LaunchPrograms;
