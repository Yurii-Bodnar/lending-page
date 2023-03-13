import Navigation from 'component/Navigation/Navigation';
import {
  Box,
  Btn,
  Container,
  ImgDog,
  ImgDogOpacity,
  ImgWrapper,
  Section,
  SvgFirst,
  SvgSecond,
  Title,
  TitleSecond,
  TitleSecondSpan,
  WrapperBtn,
} from './Hero.styled';
import dog from '../../assets/images/dog-withoutBg.png';
import imgDogOpacity from '../../assets/images/imgDogOpacity.png';
import tasteItFirst from '../../assets/images/sprite.svg';
const Hero = () => {
  return (
    <Section>
      <div>
        <Navigation />
        <Box>
          <Title>THE 100% NATURAL</Title>
          <ImgWrapper>
            <ImgDogOpacity src={imgDogOpacity} alt="showhidden" />{' '}
            <ImgDog src={dog} alt="dog" />{' '}
          </ImgWrapper>
          <TitleSecond>
            DENTAL <TitleSecondSpan>CHEWY SHOES</TitleSecondSpan>
          </TitleSecond>
          <Container>
            <WrapperBtn>
              <Btn>TASTE IT</Btn>
              <SvgFirst>
                <use href={tasteItFirst + '#icon-taste-it-1'}></use>
              </SvgFirst>
              <SvgSecond>
                <use href={tasteItFirst + '#icon-taste-it-1'}></use>
              </SvgSecond>
            </WrapperBtn>
            <TitleSecond>FOR DOGS</TitleSecond>
          </Container>
        </Box>
      </div>
    </Section>
  );
};

export default Hero;
