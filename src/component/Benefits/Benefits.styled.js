const { default: styled } = require('styled-components');

export const Section = styled.section`
  height: 100vh;
  position: relative;
  scroll-snap-align: start;
`;
export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.secondary};
  font-weight: ${p => p.theme.fontWeights.l};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 80%;
  letter-spacing: 0.017em;
  padding-top: 260px;
  padding-left: 119px;
  color: ${p => p.theme.colors.main};
  /* position: relative; */
  @media screen and (min-width: 1300px) {
    padding-top: 260px;
  }
`;
export const BgImage = styled.img`
  position: absolute;

  width: 466px;
  height: 519px;
  top: 158px;
  left: 457px;
  z-index: 2;
  animation-name: greenShoes;
  animation-duration: 2s;
  animation-iteration-count: 1;
  @keyframes greenShoes {
    from {
      top: -100px;
      left: -100px;
    }
    to {
      top: 158px;
      left: 457px;
    }
  }
`;
export const List = styled.ul`
  position: absolute;
`;
export const ItemHealthy = styled.li`
  background: ${p => p.theme.colors.redBenefits};
  border-radius: 50px;
  width: 500px;
  height: 235px;
  position: absolute;
  left: 157px;
  top: 2px;
  z-index: 5;
  @media screen and (min-width: 1300px) {
    left: 157px;
    top: 45px;
    width: 510px;
    height: 270px;
  }
`;
export const HealthyTitle = styled.h3`
  font-family: ${p => p.theme.fonts.secondary};
  font-weight: ${p => p.theme.fontWeights.l};
  font-size: 40px;
  line-height: 80%;
  letter-spacing: 0.017em;
  color: ${p => p.theme.colors.white};
  padding: 62px 60px 0;
  display: flex;
  justify-content: space-between;
`;
export const HealthyText = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.s};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 140%;
  color: ${p => p.theme.colors.white};
  padding: 21px 73px 0 60px;
  @media screen and (min-width: 1300px) {
    font-size: ${p => p.theme.fontSizes.s};
  }
`;
export const ItemNatural = styled.li`
  background: ${p => p.theme.colors.greenBenefits};
  border-radius: 50px;
  width: 500px;
  height: 235px;
  position: absolute;
  left: 612px;
  top: 24px;
  z-index: 10;
  @media screen and (min-width: 1300px) {
    width: 510px;
    height: 270px;
    left: 612px;
    top: 130px;
  }
`;
export const NaturalTitle = styled.h3`
  font-family: ${p => p.theme.fonts.secondary};
  font-weight: ${p => p.theme.fontWeights.l};
  font-size: 40px;
  line-height: 80%;
  letter-spacing: 0.017em;
  color: ${p => p.theme.colors.white};
  padding: 77px 60px 0;
  display: flex;
  justify-content: space-between;
`;
export const NaturalText = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.xs};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 140%;
  color: ${p => p.theme.colors.white};
  padding: 21px 158px 0 60px;
  @media screen and (min-width: 1300px) {
    font-size: ${p => p.theme.fontSizes.s};
  }
`;
export const ItemEcoFriendly = styled.li`
  background: ${p => p.theme.colors.yellowBenefits};
  border-radius: 50px;
  width: 500px;
  height: 240px;
  position: absolute;
  left: 630px;
  bottom: 49px;
  z-index: 5;
  @media screen and (min-width: 1300px) {
    width: 520px;
    height: 270px;
    left: 630px;
    bottom: 15px;
  }
`;
export const EcoFriendlyTitle = styled.h3`
  font-family: ${p => p.theme.fonts.secondary};
  font-weight: ${p => p.theme.fontWeights.l};
  font-size: 40px;
  line-height: 80%;
  letter-spacing: 0.017em;
  color: ${p => p.theme.colors.white};
  padding: 62px 60px 0;
  display: flex;
  justify-content: space-between;
`;
export const EcoFriendlyText = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.s};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 140%;
  color: ${p => p.theme.colors.white};
  padding: 21px 101px 0 60px;
  @media screen and (min-width: 1300px) {
    font-size: ${p => p.theme.fontSizes.s};
  }
`;
export const ItemNoStress = styled.li`
  background: ${p => p.theme.colors.main};
  border-radius: 50px;
  width: 500px;
  height: 235px;
  position: absolute;
  left: 767px;
  bottom: -108px;
  z-index: 11;
  @media screen and (min-width: 1300px) {
    width: 510px;
    height: 270px;
    left: 767px;
    bottom: -210px;
  }
`;
export const NoStressTitle = styled.h3`
  font-family: ${p => p.theme.fonts.secondary};
  font-weight: ${p => p.theme.fontWeights.l};
  font-size: 40px;
  line-height: 80%;
  letter-spacing: 0.017em;
  color: ${p => p.theme.colors.white};
  padding: 62px 60px 0;
  display: flex;
  justify-content: space-between;
`;
export const NoStressText = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.s};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 140%;
  color: ${p => p.theme.colors.white};
  padding: 21px 105px 0 60px;
  @media screen and (min-width: 1300px) {
    font-size: ${p => p.theme.fontSizes.s};
  }
`;
