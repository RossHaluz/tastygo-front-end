import Breadcrumbs from "../Breadcrumbs";
import Section from "../Section";
import ContactImg from "./ContactImg";
import ContactInfo from "./ContactInfo";

const Contact = ({ sectiobTitle, styles }) => {
  return (
    <>
      <div className="py-[16px] md:py-[24px]">
        <Breadcrumbs
          homeElement={"Home"}
          separator={<span> / </span>}
          activeClasses="text-[#B7B7B7]"
          containerClasses="flex items-center gap-[4px] text-[12px] text-[#010101] leading-[14.4px] container"
          capitalizeLinks
        />
      </div>
      <Section
        anotherStyles={
          "pb-[433px] md:pb-[546px] lg:pb-[232px] md:pt-[32px] lg:pt-[32px]"
        }
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
    </>
  );
};

export default Contact;
