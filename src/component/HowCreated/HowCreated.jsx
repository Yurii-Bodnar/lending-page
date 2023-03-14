import { BgColor } from 'component/Collection/Collection.style';
import { useEffect, useState } from 'react';
import dog from '../../assets/images/dogElsa.png';
import shoes from '../../assets/images/shoes.png';

import {
  Container,
  MessageText,
  MessageTextSecond,
  MessageWrapper,
  MessageWrapperSecond,
  Section,
  TextArticle,
  TextArticleSecond,
  Title,
  Wrapper,
  WrapperSecond,
} from './HowCreated.styled';

const HowCreated = ({ scrollState, scrollTopState }) => {
  const [useChange, setUseChange] = useState(false);

  useEffect(() => {
    if (Math.floor(scrollState) === window.innerHeight) {
      setUseChange(true);
    } else {
      setUseChange(false);
    }
  }, [scrollState, scrollTopState]);
  return (
    <BgColor>
      <Section useChange={useChange}>
        <Container>
          <Title>HOW SCHEWS WAS CREATED</Title>
        </Container>
        <div>
          <div>
            <Wrapper>
              <MessageWrapper>
                <MessageText>👋 Hi, I’m Elsa</MessageText>
              </MessageWrapper>
              <img src={dog} alt="dog" />
              <TextArticle>
                Once I adopted my beloved bulldog puppy, Elsa. To say she’s a
                chewer is an understatement!
              </TextArticle>
            </Wrapper>
          </div>
          <div>
            <WrapperSecond>
              <div>
                <TextArticleSecond>
                  And guess what was her favourite toy?
                </TextArticleSecond>
                <TextArticleSecond>— My shoes!</TextArticleSecond>
              </div>
              <MessageWrapperSecond>
                <MessageTextSecond>Help 😢</MessageTextSecond>
              </MessageWrapperSecond>
              <img src={shoes} alt="shoes" />
            </WrapperSecond>
          </div>
        </div>
      </Section>
    </BgColor>
  );
};

export default HowCreated;
