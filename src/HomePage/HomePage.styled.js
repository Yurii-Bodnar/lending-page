import styled from 'styled-components';

export const Box = styled.div`
  scroll-snap-type: y mandatory;
  max-height: 100vh;
  overflow-y: scroll;
`;

export const Container = styled.div`
  height: 100vh;
  position: relative;
  scroll-snap-align: start;
`;
export const BgImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 240px;
  width: 453px;
  transform: rotate(0);
  animation-name: shoesBG;
  animation-duration: 2s;
  animation-iteration-count: 1;
  @keyframes shoesBG {
    from {
      bottom: -400px;
      left: 0;
      transform: rotate(90deg);
    }
    to {
      transform: rotate(0);
      bottom: 0;
      left: 240px;
    }
  }
`;
export const ShoesMove = styled.img`
  position: absolute;
  left: -60px;
  top: 450px;
  transform: rotate(90deg);
  width: 453px;
  animation-name: identifier;
  animation-duration: 2s;
  animation-iteration-count: 1;
  @keyframes identifier {
    from {
      top: 250px;
      left: 240px;
      transform: rotate(0);
    }
    to {
      transform: rotate(90deg);
      left: -60px;
      top: 450px;
    }
  }
`;

export const ShoesMoveTop = styled.img`
  position: absolute;
  left: -60px;
  top: 450px;
  transform: rotate(90deg);
  width: 453px;
`;
export const BoxHowCreated = styled.div`
  height: 100vh;
`;
export const BoxCollection = styled.div`
  height: 100vh;
`;
export const BoxBenefits = styled.div`
  height: 100vh;
`;
