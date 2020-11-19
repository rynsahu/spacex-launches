import React from 'react';
import styled from 'styled-components';
import LaunchProgramCard from '../LaunchProgramCard';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LaunchPrograms = ({ launches }) => (
  <Wrapper>
    {
      launches
        ? launches.map((launch) => (
          <LaunchProgramCard key={launch.launch_date_unix} data={launch} />
        )) : null
    }
  </Wrapper>
);

export default LaunchPrograms;
