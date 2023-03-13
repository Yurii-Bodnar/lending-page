import slider from '../../assets/images/sprite.svg';
import shoesSlider from '../../assets/images/shoesSlider.png';
import shoesSliderFirst from '../../assets/images/shoesSliderFirst.png';
import sneakersSlider from '../../assets/images/sneakersSlider.png';
import {
  Box,
  List,
  Section,
  SliderCircle,
  SliderContainer,
  Text,
  TextSecondary,
  Title,
  Wrapper,
  WrapperTitle,
  ImgSliderSecond,
  SliderCircleWrapper,
  Item,
  ImgSlider,
  ImgSliderThird,
} from './Collection.style';

const Collection = () => {
  return (
    <Section>
      <Wrapper>
        <Box>
          <WrapperTitle>
            <Title>SCHEWS COLLECTION</Title>
          </WrapperTitle>
          <Text>
            Therefore I created a range of boredom-busting edible shoes that
            Elsa could enjoy chewing that would also clean her teeth.
          </Text>
          <TextSecondary>
            Just like the dental chews I gave her at dinner-time to stop her
            staring at my plate!
          </TextSecondary>
        </Box>
      </Wrapper>
      <SliderContainer>
        <List>
          <Item>
            <ImgSlider src={shoesSlider} alt="shoes" />
          </Item>
          <Item>
            <ImgSliderSecond src={shoesSliderFirst} alt="shoes" />
          </Item>
          <Item>
            <ImgSliderThird src={sneakersSlider} alt="shoes" />
          </Item>
        </List>
        <SliderCircleWrapper>
          <SliderCircle>
            <use href={slider + '#icon-slider'}></use>
          </SliderCircle>
        </SliderCircleWrapper>
      </SliderContainer>
    </Section>
  );
};

export default Collection;
