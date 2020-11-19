import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Card from '../Core/Card';

const ImageContainer = styled.div`
  background-color: ${({ theme }) => theme.color.bg};
  width: 200px;
  height: 200px;
`;

const ProgramTitle = styled.h1`
  color: ${({ theme }) => theme.color.primary};
  font-size: 1rem;
  margin: 10px 0;
`;

const ProgramDetailsWrapper = styled.div`
  max-width: 200px;

  li, span {
    color: ${({ theme }) => theme.color.primary};
  }

  span {
    text-transform: capitalize;
  }
`;

const LaunchProgramCard = ({ data }) => (
  data ? (
    <Card>
      {/* --------- */}
      <ImageContainer>
        {data.links.mission_patch_small
          && <Image src={data.links.mission_patch_small} width={200} height={200} />}
      </ImageContainer>
      {/* --------- */}
      <ProgramDetailsWrapper>
        <ProgramTitle>
          <span>{data.mission_name}</span>
        </ProgramTitle>
        <b>Mission Ids: </b>
        {data.mission_id.length
          && (
          <ul>
            {data.mission_id.map((missionId) => <li>{missionId}</li>)}
          </ul>
          )}
        <p>
          <b>Launch year: </b>
          <span>{data.launch_year}</span>
        </p>
        <p>
          <b>Successful launch: </b>
          <span>{String(data.launch_success)}</span>
        </p>
        <p>
          <b>Successful Landing: </b>
          <span>{data.launch_landing}</span>
        </p>
      </ProgramDetailsWrapper>
    </Card>
  ) : null
);

export default LaunchProgramCard;
