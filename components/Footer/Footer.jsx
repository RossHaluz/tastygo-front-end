import Link from "next/link";
import FooterLogo from "./FooterLogo";
import TikTok from "../../public/images/social/tictok.svg";
import Facebook from "../../public/images/social/facebook.svg";
import Instagram from "../../public/images/social/instagram.svg";
import Visa from "../../public/images/payment/visa.svg";
import Mastercard from "../../public/images/payment/mastercard.svg";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-[#010101] p-[24px] md:px-[20px] md:py-[64px] lg:px-[80px]">
        <div className=" flex flex-col gap-[16px] md:gap-[32px]">
          <FooterLogo />
          <div className="flex flex-col gap-[16px] md:gap-[32px] md:grid md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-1 md:grid-rows-2">
            {/* Main navigation */}
            <nav className="text-[#fff] flex flex-col gap-[8px]">
              <Link href="/menu">Menu</Link>
              <Link href="/delivery">Delivery</Link>
              <Link href="/reviews">Reviews</Link>
              <Link href="/contact">Contacts</Link>
            </nav>
            {/* Main navigation  */}
            {/* delivery & payment  */}
            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[#fff] leading-[16.8px] uppercase">
                delivery & payment
              </h3>
              <Link href="/" className="text-[#fff]">
                Terms of delivery
              </Link>
              <Link href="/" className="text-[#fff]">
                Payment method
              </Link>
            </div>
            {/* delivery & payment end  */}

            {/* private policy */}
            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[#fff] leading-[16.8px] uppercase">
                private policy
              </h3>
              <Link href="/" className="text-[#fff]">
                Privacy policy
              </Link>
              <Link href="/" className="text-[#fff]">
                Rules of online sales
              </Link>
            </div>
            {/* private policy end */}

            {/*  social medias */}
            <div className="lg:flex lg:flex-col gap-[24px]">
              <div className="flex flex-col gap-[8px]">
                <h3 className="text-[#fff] leading-[16.8px] uppercase">
                  We in social medias:
                </h3>
                <div className="flex items-center gap-[16px]">
                  <Link href="/">
                    <Instagram />
                  </Link>
                  <Link href="/">
                    <TikTok />
                  </Link>
                  <Link href="/">
                    <Facebook />
                  </Link>
                </div>
              </div>
              <div className="hidden lg:flex flex-col gap-[8px]">
                <h3 className="text-[#fff] leading-[16.8px] uppercase">
                  we accept payment
                </h3>
                <div className="flex items-center gap-[16px]">
                  <Visa />
                  <Mastercard />
                </div>
              </div>
            </div>
            {/* social medias end */}

            {/* we accept payment */}
            <div className="flex flex-col gap-[8px] mt-[12px] md:mt-0 lg:hidden">
              <h3 className="text-[#fff] leading-[16.8px] uppercase">
                we accept payment
              </h3>
              <div className="flex items-center gap-[16px]">
                <Visa />
                <Mastercard />
              </div>
            </div>
            {/* we accept payment end   */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
