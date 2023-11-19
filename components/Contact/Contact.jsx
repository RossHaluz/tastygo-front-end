import Section from "../Section";
import ContactImg from "./ContactImg";
import ContactInfo from "./ContactInfo";

const Contact = ({ sectiobTitle, styles }) => {
  return (
    <Section
      anotherStyles={"pb-[433px] md:pb-[546px] lg:pb-[232px]"}
      title={sectiobTitle}
      styles={styles}
    >
      <div className="relative">
        <ContactImg />

        <div className="container absolute top-[77%] lg:top-[70%]">
          <ContactInfo />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
