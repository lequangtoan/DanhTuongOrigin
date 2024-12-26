import "./section.scss";

const Section = (props) => {
  return <div className={`section ${props.className}`}>{props.children}</div>;
};

export const SectionBanner = (props) => {
  return (
    <>
      <video autoPlay muted loop>
        <source src={props.bgImage}/>
      </video>
      <div className={`${props.className}`}>
        {props.children}
      </div>
    </>
  );
};

export default Section;
