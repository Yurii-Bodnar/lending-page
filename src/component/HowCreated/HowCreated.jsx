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

const HowCreated = ({ scrollState }) => {
  return (
    <div>
      <Section scrollState={scrollState}>
        <Container>
          <Title>HOW SCHEWS WAS CREATED</Title>
        </Container>
        <div>
          <div>
            <Wrapper>
              <MessageWrapper>
                <MessageText>๐ Hi, Iโm Elsa</MessageText>
              </MessageWrapper>
              <img src={dog} alt="dog" />
              <TextArticle>
                Once I adopted my beloved bulldog puppy, Elsa. To say sheโs a
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
                <TextArticleSecond>โ My shoes!</TextArticleSecond>
              </div>
              <MessageWrapperSecond>
                <MessageTextSecond>Help ๐ข</MessageTextSecond>
              </MessageWrapperSecond>
              <img src={shoes} alt="shoes" />
            </WrapperSecond>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default HowCreated;
