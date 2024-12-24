import Section, { SectionBanner } from "../section/Section";

const HomeSection = (props) => {
  return (
    <Section className={props.className}>
      <SectionBanner
        className={`section__content ${props.className}`}
        bgImage={props.bgImage}
      >
        {props.children}
      </SectionBanner>
    </Section>
  );
};

export default HomeSection;
