import Benefits from 'component/Benefits/Benefits';
import Collection from 'component/Collection/Colection';
import Header from 'component/Header/Header';
import Hero from 'component/Hero/Hero';
import HowCreated from 'component/HowCreated/HowCreated';
import {
  BgImg,
  Box,
  Container,
  ShoesMove,
  ShoesMoveTop,
} from './HomePage.styled';
import sneakers from '../assets/images/sneakers.png';
import { useState } from 'react';

const HomePage = () => {
  const [scrollState, setScrollState] = useState(0);
  const [scrollTopState, setScrollTopState] = useState(false);
  const handleScroll = e => {
    setScrollTopState(scrollState > e.currentTarget.scrollTop);
    setScrollState(e.currentTarget.scrollTop);
  };
  console.log(
    'HOME==>',
    Math.floor(scrollState) === window.innerHeight,
    'CONDITION===>',
    scrollState < 10
  );
  return (
    <Box scrollState={scrollState} onScroll={handleScroll}>
      <Container>
        <Header scrollState={scrollState} />
        <Hero />
      </Container>
      <HowCreated scrollState={scrollState} scrollTopState={scrollTopState} />
      {scrollState < 10 ? (
        <BgImg src={sneakers} alt="shoes" />
      ) : scrollState > window.innerHeight + 10 ? null : scrollTopState ? (
        <ShoesMoveTop src={sneakers} alt="shoes"></ShoesMoveTop>
      ) : (
        <ShoesMove src={sneakers} alt="shoes"></ShoesMove>
      )}

      <Collection scrollState={scrollState} />
      <Benefits scrollState={scrollState} />
    </Box>
  );
};

export default HomePage;
