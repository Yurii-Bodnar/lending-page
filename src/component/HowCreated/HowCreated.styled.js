import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${p => p.theme.colors.red};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 110px;
  height: 100vh;
  scroll-snap-align: start;
  padding-top: 20px;
  @media screen and (min-width: 1300px) {
    padding-top: 0px;
  }
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
