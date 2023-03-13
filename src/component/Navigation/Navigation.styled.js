import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  margin-bottom: 39px;
`;
export const List = styled.ul`
  display: flex;
  gap: 31px;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child)::after {
    content: '';
    background-color: ${p => p.theme.colors.main};
    border-radius: 100%;
    font-weight: bold;
    display: inline-block;
    width: 5px;
    height: 5px;
    margin-left: 31px;
  }
`;
export const Link = styled.a`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.s};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 100%;
  color: ${p => p.theme.colors.main};
  &:hover {
    color: ${p => p.theme.colors.red};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }
`;
