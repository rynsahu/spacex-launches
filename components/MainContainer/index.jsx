import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

// utils
import { getQueryParams } from '../../utils';

// Services
import launchesService from '../../services/launchesService';

// Components
import Filter from '../Filter';
import LaunchPrograms from '../LaunchPrograms';

const StyledMainContainer = styled.div`
  display: flex;
  margin: 20px 0;
  flex-wrap: wrap;

  section:nth-child(2) {
    flex: 1;
  }
`;

const MainContainer = ({ launches }) => {
  const router = useRouter();
  const [filteredLaunches, setFilteredLaunches] = useState(null);

  useEffect(async () => {
    const { launch_year, launch_success, landing_success } = getQueryParams();

    const res = await launchesService.getLaunchList(
      launch_year,
      launch_success,
      landing_success,
    );

    setFilteredLaunches(res.data);
  }, [router.query]);

  return (
    <StyledMainContainer>
      {/* Filter Section */}
      <section>
        <Filter />
      </section>
      {/* Launch Programs */}
      <section>
        <LaunchPrograms launches={filteredLaunches || launches} />
      </section>
    </StyledMainContainer>
  );
};

export default MainContainer;
