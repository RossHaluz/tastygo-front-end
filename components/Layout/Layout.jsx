import Footer from "../Footer/Footer";
import Hedear from "../Header/Hedear";

const Layout = ({ children }) => {
  return (
    <div>
      <Hedear />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
