import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 110px;
  height: 100vh;
  background-color: ${p => p.theme.colors.red};
  scroll-snap-align: start;
  padding-top: 20px;
  opacity: ${({ useChange }) => (useChange ? '1' : '0')};

  animation-name: ${({ useChange }) => useChange && 'setDelay'};
  animation-duration: ${({ useChange }) => useChange && '1000ms'};
  animation-iteration-count: ${({ useChange }) => useChange && '1'};
  @keyframes setDelay {
    0% {
      opacity: 0;
      padding-top: 100%;
    }
    10% {
      background-color: ${p => p.theme.colors.red};
      padding-top: 90%;
      opacity: 1;
    }
    20% {
      background-color: ${p => p.theme.colors.red};
      padding-top: 80%;
      opacity: 1;
    }
    30% {
      background-color: ${p => p.theme.colors.red};
      padding-top: 70%;
      opacity: 1;
    }
    40% {
      background-color: ${p => p.theme.colors.red};
      padding-top: 60%;
      opacity: 1;
    }
    50% {
      background-color: ${p => p.theme.colors.red};
      padding-top: 50%;
      opacity: 1;
    }
    100% {
      background-color: ${p => p.theme.colors.red};
      padding-top: 20px;
      opacity: 1;
      @media screen and (min-width: 1300px) {
        padding-top: 0px;
      }
    }
  }
  @media screen and (min-width: 1300px) {
    padding-top: 0px;
  }
`;
export const SectionSecond = styled.section`
  background-color: ${p => p.theme.colors.red};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 110px;
  height: 100vh;
  scroll-snap-align: start;
  padding-top: 20px;
  animation-name: setDelay;
  animation-duration: 1s;
  animation-iteration-count: 5;
`;

export const Container = styled.div`
  width: 389px;
`;
export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.secondary};
  font-weight: ${p => p.theme.fontWeights.l};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 80%;
  letter-spacing: 0.017em;
  color: ${p => p.theme.colors.white};
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 64px;
`;
export const MessageWrapper = styled.div`
  border-radius: 100px;
  background-color: ${p => p.theme.colors.white};
  width: 200px;
  position: absolute;
  left: -49px;
  bottom: 215px;
`;
export const MessageText = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.s};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 140%;
  color: ${p => p.theme.colors.main};
  text-align: center;
  padding: 10px 0;
`;
export const TextArticle = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.s};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 140%;
  color: ${p => p.theme.colors.white};
  width: 389px;
`;

export const WrapperSecond = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
export const MessageWrapperSecond = styled.div`
  border-radius: 100px;
  background-color: ${p => p.theme.colors.white};
  width: 136px;
  position: absolute;
  right: 190px;
  bottom: -19px;
`;
export const MessageTextSecond = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.s};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 140%;
  color: ${p => p.theme.colors.main};
  text-align: center;
  padding: 10px 0px;
`;
export const TextArticleSecond = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.s};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 140%;
  color: ${p => p.theme.colors.white};
  width: 314px;
  margin-right: 64px;
`;
