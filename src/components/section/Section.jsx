import "./section.scss";

const Section = (props) => {
  return <div className={`section ${props.className}`}>{props.children}</div>;
};

export const SectionBanner = (props) => {
  return (
    <>
      <video src={props.bgImage} autoPlay muted loop />
      <div className={`section__content ${props.className}`}>
        {props.children}
      </div>
    </>
  );
};

export default Section;
