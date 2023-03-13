import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 65px 25px 0;
  @media screen and (min-width: 1300px) {
    padding-top: 190px;
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
`;
export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.secondary};
  font-weight: ${p => p.theme.fontWeights.l};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 80%;
  letter-spacing: 0.017em;
  color: ${p => p.theme.colors.main};
`;
export const ImgDog = styled.img`
  position: absolute;
  width: 155px;
  height: 146px;
  transform: translateY(0%);
  transition: 0.7s;
`;
export const ImgWrapper = styled.div`
  position: absolute;
  width: 155px;
  height: 150px;
  right: 13px;
  top: -51px;
  overflow: hidden;

  &:hover ${ImgDog} {
    transform: translateY(100%);
  }
`;

export const ImgDogOpacity = styled.img`
  position: absolute;
`;

export const TitleSecond = styled.h2`
  font-family: ${p => p.theme.fonts.secondary};
  font-weight: ${p => p.theme.fontWeights.l};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 80%;
  letter-spacing: 0.017em;
  color: ${p => p.theme.colors.main};
  position: relative;
`;
export const TitleSecondSpan = styled.span`
  font-family: ${p => p.theme.fonts.secondary};
  font-weight: ${p => p.theme.fontWeights.l};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 80%;
  letter-spacing: 0.017em;
  color: ${p => p.theme.colors.red};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 100vw;
  top: 238px;
  left: 0;
  z-index: 102;
`;
export const BgImg = styled.img``;
export const SvgFirst = styled.svg`
  position: absolute;
  width: 65px;
  left: -1px;
  bottom: -47px;
  opacity: 0;
`;
export const SvgSecond = styled.svg`
  position: absolute;
  width: 67px;
  left: 312px;
  top: -72px;
  transform: rotate(90deg);
  opacity: 0;
`;
export const WrapperBtn = styled.div`
  position: relative;
`;

export const Btn = styled.button`
  padding: 28px 118px;
  border-radius: 100%;
  font-family: ${p => p.theme.fonts.secondary};
  font-weight: ${p => p.theme.fontWeights.xl};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 80%;
  text-align: right;
  letter-spacing: 0.017em;
  color: ${p => p.theme.colors.red};
  background: ${p => p.theme.colors.white};
  border: 4px solid #f35669;
  border-radius: 200px;
  margin-right: 306px;
  &:hover {
    color: ${p => p.theme.colors.white};
    background: ${p => p.theme.colors.red};
    & ~ ${SvgFirst} {
      opacity: 1;
    }
    & ~ ${SvgSecond} {
      transition-delay: 1s;
      opacity: 1;
    }
  }
`;
