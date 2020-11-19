import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Filter from '../Filter';
import LaunchPrograms from '../LaunchPrograms';
// Services
import launchesService from '../../services/launchesService';

const StyledMainContainer = styled.div`
  display: flex;
  margin: 20px 0;
  flex-wrap: wrap;

  section:nth-child(2) {
    flex: 1;
  }
`;

const MainContainer = ({ launches }) => {
  const [filter, setFilter] = useState({});
  const [filteredLaunches, setFilteredLaunches] = useState(null);

  useEffect(async () => {
    const { launchYear, successfulLaunch, successfulLanding } = filter;
    const res = await launchesService.getLaunchList(
      10,
      launchYear,
      successfulLaunch,
      successfulLanding,
    );

    setFilteredLaunches(res.data);
  }, [filter]);

  return (
    <StyledMainContainer>
      {/* Filter Section */}
      <section>
        <Filter onFilterChange={(filters) => setFilter(filters)} />
      </section>
      {/* Launch Programs */}
      <section>
        <LaunchPrograms launches={filteredLaunches || launches} />
      </section>
    </StyledMainContainer>
  );
};

export default MainContainer;
