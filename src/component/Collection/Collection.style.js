import styled from 'styled-components';

export const Section = styled.section`
  background: ${p => p.theme.colors.red};
  display: flex;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
  scroll-snap-align: start;
  padding-top: 20px;
  @media screen and (min-width: 1300px) {
    padding-top: 0px;
  }
`;
export const Box = styled.div`
  padding-left: 120px;
  width: 483px;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

`;
export const WrapperTitle = styled.div`
  background-color: ${p => p.theme.colors.white};
  padding: 5px 0px;
  width: 166px;
  border-radius: 100px;
`;
export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.l};
  font-size: 13px;
  line-height: 140%;
  color: ${p => p.theme.colors.red};
  text-align: center;
`;
export const Text = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.s};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 140%;
  color: ${p => p.theme.colors.white};
  margin-top: 16px;
`;
export const TextSecondary = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.s};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 140%;
  color: ${p => p.theme.colors.white};
  opacity: 0.6;
  margin-top: 48px;
  width: 324px;
`;
export const SliderContainer = styled.div`
  display: flex;
`;
export const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`;
export const Item = styled.li`
  position: relative;
`;
export const ImgSlider = styled.img`
  position: absolute;
  bottom: 399px;
  left: 38px;
  @media screen and (min-width: 1300px) {
    bottom: 435px;
    left: 70px;
  }
`;
export const ImgSliderThird = styled.img`
  position: absolute;
  top: -56px;
  left: 6px;
  @media screen and (min-width: 1300px) {
    top: 0;
    left: 0;
  }
`;
export const ImgSliderSecond = styled.img`
  width: 386px;
  height: 405px;
  position: absolute;
  bottom: 26px;
  right: 2px;
`;
export const SliderCircleWrapper = styled.div`
  position: relative;
`;
export const SliderCircle = styled.svg`
  width: 278px;
  height: 450px;
`;
