import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

// utils
import { getQueryParamByName, generateQueryString } from '../../utils';
import {
  FILTER_BY_LAUNCH_YEAR,
  FILTER_BY_LAUNCH_SUCCESS,
  FILTER_BY_LANDING_SUCCESS,
} from '../../constants/launchProgram';

// Components
import Card from '../Core/Card';
import SubTitle from '../Core/Typography/SubTitle';

const FilterWrapper = styled.div`
  margin-bottom: 15px;
  text-align: center;
`;

const FilterButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 5px;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: #C3E099;
  border: none;
  padding: 3px 12px;
  border-radius: 3px;

  :hover {
    background-color: #76BD00;
  }

  :focus {
    outline: none;
  }
`;

const Filter = () => {
  const router = useRouter();

  const [launchYear, setLaunchYear] = useState('');
  const [successfulLaunch, setSuccessfulLaunch] = useState('');
  const [successfulLanding, setSuccessfulLanding] = useState('');

  /**
   * Generate query string and add into URL
   */
  const handleQueryString = () => {
    const paramsObject = {
      [FILTER_BY_LAUNCH_YEAR]: launchYear || getQueryParamByName(FILTER_BY_LAUNCH_YEAR),
      [FILTER_BY_LAUNCH_SUCCESS]: successfulLaunch || getQueryParamByName(FILTER_BY_LAUNCH_SUCCESS),
      [FILTER_BY_LANDING_SUCCESS]:
        successfulLanding || getQueryParamByName(FILTER_BY_LANDING_SUCCESS),
    };

    const queryString = generateQueryString(paramsObject);

    if (queryString) router.push(`/?${queryString}`, undefined, { shallow: true });
  };

  useEffect(() => {
    handleQueryString();
  }, [launchYear, successfulLaunch, successfulLanding]);

  return (
    <Card width="160px">
      <h4>Filters</h4>
      {/* ----------- */}
      <FilterWrapper>
        <SubTitle>Launch Year</SubTitle>
        <FilterButtonsWrapper>
          <Button type="button" onClick={() => setLaunchYear(2006)}>2006</Button>
          <Button type="button" onClick={() => setLaunchYear(2007)}>2007</Button>
        </FilterButtonsWrapper>
        <FilterButtonsWrapper>
          <Button type="button" onClick={() => setLaunchYear(2008)}>2008</Button>
          <Button type="button" onClick={() => setLaunchYear(2009)}>2009</Button>
        </FilterButtonsWrapper>
        <FilterButtonsWrapper>
          <Button type="button" onClick={() => setLaunchYear(2010)}>2010</Button>
          <Button type="button" onClick={() => setLaunchYear(2011)}>2011</Button>
        </FilterButtonsWrapper>
        <FilterButtonsWrapper>
          <Button type="button" onClick={() => setLaunchYear(2012)}>2012</Button>
          <Button type="button" onClick={() => setLaunchYear(2013)}>2013</Button>
        </FilterButtonsWrapper>
        <FilterButtonsWrapper>
          <Button type="button" onClick={() => setLaunchYear(2014)}>2014</Button>
          <Button type="button" onClick={() => setLaunchYear(2015)}>2015</Button>
        </FilterButtonsWrapper>
        <FilterButtonsWrapper>
          <Button type="button" onClick={() => setLaunchYear(2016)}>2016</Button>
          <Button type="button" onClick={() => setLaunchYear(2017)}>2017</Button>
        </FilterButtonsWrapper>
        <FilterButtonsWrapper>
          <Button type="button" onClick={() => setLaunchYear(2018)}>2018</Button>
          <Button type="button" onClick={() => setLaunchYear(2019)}>2019</Button>
        </FilterButtonsWrapper>
        <FilterButtonsWrapper>
          <Button type="button" onClick={() => setLaunchYear(2020)}>2020</Button>
        </FilterButtonsWrapper>
      </FilterWrapper>
      {/* ----------- */}
      <FilterWrapper>
        <SubTitle>Successful Launch</SubTitle>
        <FilterButtonsWrapper>
          <Button type="button" onClick={() => setSuccessfulLaunch('true')}>True</Button>
          <Button type="button" onClick={() => setSuccessfulLaunch('false')}>False</Button>
        </FilterButtonsWrapper>
      </FilterWrapper>
      {/* ----------- */}
      <FilterWrapper>
        <SubTitle>Successful Landing</SubTitle>
        <FilterButtonsWrapper>
          <Button type="button" onClick={() => setSuccessfulLanding('true')}>True</Button>
          <Button type="button" onClick={() => setSuccessfulLanding('false')}>False</Button>
        </FilterButtonsWrapper>
      </FilterWrapper>
    </Card>
  );
};

export default Filter;
