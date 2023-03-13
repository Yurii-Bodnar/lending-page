import {
  BgImage,
  EcoFriendlyText,
  EcoFriendlyTitle,
  HealthyText,
  HealthyTitle,
  ItemEcoFriendly,
  ItemHealthy,
  ItemNatural,
  ItemNoStress,
  List,
  NaturalText,
  NaturalTitle,
  NoStressText,
  NoStressTitle,
  Section,
  Title,
} from './Benefits.styled';
import shoesBenefits from '../../assets/images/shoesBenefits.png';

const Benefits = ({ scrollState }) => {
  return (
    <Section>
      <Title>BENEFITS</Title>
      {scrollState >= window.innerHeight * 3 - 10 ? (
        <BgImage src={shoesBenefits} alt="shoes" />
      ) : null}
      <List>
        <ItemHealthy>
          <HealthyTitle>
            HEALTHY<span>🦷</span>
          </HealthyTitle>
          <HealthyText>
            Keep your dog’s teeth clean & help to maintain a healthy weight,
            boost energy levels, & reduce allergies.
          </HealthyText>
        </ItemHealthy>
        <ItemNatural>
          <NaturalTitle>
            NATURAL<span>🍃</span>
          </NaturalTitle>
          <NaturalText>
            100% natural vegan formula with low-calorie superfoods
          </NaturalText>
        </ItemNatural>
        <ItemEcoFriendly>
          <EcoFriendlyTitle>
            ECO-FRIENDLY<span>♻️</span>
          </EcoFriendlyTitle>
          <EcoFriendlyText>
            Being vegan, Schews have less carbon foot print, & the packaging is
            100% recyclable.
          </EcoFriendlyText>
        </ItemEcoFriendly>
        <ItemNoStress>
          <NoStressTitle>
            No stress<span>😅</span>
          </NoStressTitle>
          <NoStressText>
            While your dog is having fun chewing Schews, you don’t need to worry
            about your shoes.
          </NoStressText>
        </ItemNoStress>
      </List>
    </Section>
  );
};

export default Benefits;
