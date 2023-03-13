import styled from 'styled-components';
export const HeaderContainer = styled.header`
  position: fixed;
  width: 96%;
  left: 2%;
  top: 2%;
  z-index: 100;
`;
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;
`;
export const Text = styled.a`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.m};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 100%;
  color: ${({ scrollState }) =>
    (scrollState < 10 && '#2DA6B1') ||
    (scrollState < window.innerHeight * 2 + 30 && '#FFFFFF') ||
    (scrollState < window.innerHeight * 3 + 50 && '#2DA6B1')};
  &:hover {
    color: ${({ scrollState }) =>
      (scrollState < 10 && '#F35669') ||
      (scrollState < window.innerHeight * 2 + 30 && '#2DA6B1') ||
      (scrollState < window.innerHeight * 3 + 50 && '#F35669')};
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }
`;
export const LogoSvg = styled.svg`
  width: 95px;
  height: 35px;
  fill: ${({ scrollState }) =>
    (scrollState < 10 && '#2DA6B1') ||
    (scrollState < window.innerHeight * 2 + 30 && '#FFFFFF') ||
    (scrollState < window.innerHeight * 3 + 50 && '#2DA6B1')};
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
export const BoxBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
export const BtnText = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.m};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 100%;
  color: ${({ scrollState }) =>
    (scrollState < 10 && '#2DA6B1') ||
    (scrollState < window.innerHeight * 2 + 30 && '#FFFFFF') ||
    (scrollState < window.innerHeight * 3 + 50 && '#2DA6B1')};
  &:hover {
    color: ${({ scrollState }) =>
      (scrollState < 10 && '#F35669') ||
      (scrollState < window.innerHeight * 2 + 30 && '#2DA6B1') ||
      (scrollState < window.innerHeight * 3 + 50 && '#F35669')};
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }
`;
export const LangBtn = styled.button`
  width: 9px;
  height: 5px;
  border: none;
  background-color: transparent;
  display: flex;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.m};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 100%;
`;
export const LangSvg = styled.svg`
  width: 9px;
  height: 5px;
  fill: ${({ scrollState }) =>
    (scrollState < 10 && '#2DA6B1') ||
    (scrollState < window.innerHeight * 2 + 30 && '#FFFFFF') ||
    (scrollState < window.innerHeight * 3 + 50 && '#2DA6B1')};
`;
export const Svg = styled.svg`
  width: 24px;
  height: 24px;
`;
export const ListBtn = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 30px;
`;
export const BtnLogIn = styled.button`
  border: 2px solid
    ${({ scrollState }) =>
      (scrollState < 10 && '#2DA6B1') ||
      (scrollState < window.innerHeight * 2 + 30 && '#FFFFFF') ||
      (scrollState < window.innerHeight * 3 + 50 && '#2DA6B1')};
  border-radius: 100px;
  padding: 8px 13px;
  background-color: transparent;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.m};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 100%;
  color: ${({ scrollState }) =>
    (scrollState < 10 && '#2DA6B1') ||
    (scrollState < window.innerHeight * 2 + 30 && '#FFFFFF') ||
    (scrollState < window.innerHeight * 3 + 50 && '#2DA6B1')};
  &:hover {
    color: ${({ scrollState }) =>
      (scrollState < 10 && '#F35669') ||
      (scrollState < window.innerHeight * 2 + 30 && '#2DA6B1') ||
      (scrollState < window.innerHeight * 3 + 50 && '#F35669')};
    border: 2px solid
      ${({ scrollState }) =>
        (scrollState < 10 && '#F35669') ||
        (scrollState < window.innerHeight * 2 + 30 && '#2DA6B1') ||
        (scrollState < window.innerHeight * 3 + 50 && '#F35669')};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }
`;
export const BtnSignUp = styled.button`
  border: 2px solid transparent;
  background-color: ${({ scrollState }) =>
    (scrollState < 10 && '#2DA6B1') ||
    (scrollState < window.innerHeight * 2 + 30 && '#FFFFFF') ||
    (scrollState < window.innerHeight * 3 + 50 && '#2DA6B1')};
  color: ${({ scrollState }) =>
    (scrollState < 10 && '#FFFFFF') ||
    (scrollState < window.innerHeight * 2 + 30 && '#F35669') ||
    (scrollState < window.innerHeight * 3 + 50 && '#FFFFFF')};
  border-radius: 100px;
  padding: 8px 13px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.m};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 100%;
  &:hover {
    border: 2px solid transparent;
    background-color: ${({ scrollState }) =>
      (scrollState < 10 && '#F35669') ||
      (scrollState < window.innerHeight * 2 + 30 && '#2DA6B1') ||
      (scrollState < window.innerHeight * 3 + 50 && '#F35669')};
    color: ${p => p.theme.colors.white};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }
`;
