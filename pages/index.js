import React from 'react';
import Head from 'next/head';
// Components
import Container from '../components/Core/Container';
import Title from '../components/Core/Typography/Title';
import MainContainer from '../components/MainContainer';
import Footer from '../components/Core/Footer';
// Services
import launchesService from '../services/launchesService';

const Home = (props) => {
  const { launches } = props;

  return (
    <>
      <Head>
        <title>SpaceEx Launch programs</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans" rel="stylesheet" />
      </Head>

      <Container>
        <Title>SpaceEx Launch programs</Title>
        <MainContainer launches={launches} />
      </Container>

      <Footer>
        <p>
          <b>Developed By:</b>
          {' '}
          Aryan Sahu
        </p>
      </Footer>
    </>
  );
};

export async function getStaticProps() {
  const res = await launchesService.getLaunchList(20);
  return { props: { launches: res.data } };
}

export default Home;
