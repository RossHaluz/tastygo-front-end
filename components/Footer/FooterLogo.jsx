import Link from "next/link";
import Logo from "../../public/images/footer-logo/footer-logo.svg";

const FooterLogo = () => {
  return (
    <Link href="/" className="flex items-center gap-[8px]">
      <Logo />
      <span className="text-[24px] text-[#FFF] leading-[28.8px uppercase] font-bold">
        Tasty Go
      </span>
    </Link>
  );
};

export default FooterLogo;
