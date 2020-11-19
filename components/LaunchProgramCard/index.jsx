import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Card from '../Core/Card';

const ImageContainer = styled.div`
  background-color: ${({ theme }) => theme.color.bg};
  width: 200px;
`;

const ProgramTitle = styled.h1`
  color: #454D99;
  font-size: 1rem;
  margin: 10px 0;
`;

const LaunchProgramCard = ({ data }) => (
  data ? (
    <Card>
      {/* --------- */}
      <ImageContainer>
        <Image src={data.links.mission_patch_small} width={200} height={200} />
      </ImageContainer>
      {/* --------- */}
      <ProgramTitle>
        <span>{data.mission_name}</span>
      </ProgramTitle>
      {/* --------- */}
      <b>Mission Ids: </b>
      {/* --------- */}
      <p>
        <b>Launch year: </b>
        <span>{data.launch_year}</span>
      </p>
      {/* --------- */}
      <p>
        <b>Successful launch: </b>
        <span>{String(data.launch_success)}</span>
      </p>
      {/* --------- */}
      <p>
        <b>Successful Landing: </b>
        <span>{data.launch_landing}</span>
      </p>
    </Card>
  ) : null
);

export default LaunchProgramCard;
