import Section from "../Section";
import ContactImg from "./ContactImg";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <Section>
      <div className="relative">
        <ContactImg />

        <div className="container">
          <ContactInfo />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
