import Section from "../Section";
import PaymentList from "./PaymentList";

const Payment = () => {
  return (
    <Section title={"Order payment"} anotherStyles={"container"}>
      <PaymentList />
    </Section>
  );
};

export default Payment;
