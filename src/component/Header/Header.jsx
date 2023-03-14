import logo from '../../assets/images/sprite.svg';
import downArrow from '../../assets/images/sprite.svg';
import iconBack from '../../assets/images/sprite.svg';
import {
  Box,
  BoxBtn,
  BtnLogIn,
  BtnSignUp,
  BtnText,
  HeaderContainer,
  LangBtn,
  LangSvg,
  List,
  ListBtn,
  LogoSvg,
  Navigation,
  Svg,
  Text,
  Wrapper,
} from './Header.styled';

const Header = ({ scrollState }) => {
  return (
    <HeaderContainer>
      <Navigation>
        <List>
          <li>
            <Text href="/" scrollState={scrollState}>
              OUR STORY
            </Text>
          </li>
          <li>
            <Text href="/" scrollState={scrollState}>
              BENEFITS
            </Text>
          </li>
          <li>
            <Text href="/" scrollState={scrollState}>
              PRODUCTS
            </Text>
          </li>
          <li>
            <Text href="/" scrollState={scrollState}>
              FAQ
            </Text>
          </li>
        </List>
        <a href="/">
          <LogoSvg scrollState={scrollState}>
            <use href={logo + '#icon-logo-schews'}></use>
          </LogoSvg>
        </a>
        <Box>
          <Wrapper>
            <BoxBtn>
              <BtnText scrollState={scrollState}>ENG</BtnText>
              <LangBtn type="button" scrollState={scrollState}>
                <LangSvg scrollState={scrollState}>
                  <use href={downArrow + '#icon-polygon'}></use>
                </LangSvg>
              </LangBtn>
            </BoxBtn>
            {(scrollState < 10 && (
              <Svg scrollState={scrollState}>
                <use href={iconBack + '#icon-icon-bag'}></use>
              </Svg>
            )) ||
              (scrollState < window.innerHeight * 2 + 30 && (
                <Svg scrollState={scrollState}>
                  <use href={iconBack + '#icon-bag'}></use>
                </Svg>
              )) ||
              ((scrollState < window.innerHeight * 3 + 30 ||
                scrollState - 20 < window.innerHeight * 3 + 30) && (
                <Svg scrollState={scrollState}>
                  <use href={iconBack + '#icon-icon-bag'}></use>
                </Svg>
              ))}
          </Wrapper>
          <ListBtn>
            <li>
              <BtnLogIn scrollState={scrollState}>LOG IN</BtnLogIn>
            </li>
            <li>
              <BtnSignUp scrollState={scrollState}>SIGN UP</BtnSignUp>
            </li>
          </ListBtn>
        </Box>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
