import Link from "next/link";
import Logo from "../../public/images/logo/tastygo-logo.svg";

const HeaderLogo = () => {
  return (
    <Link href="/" className="flex items-center gap-[8px]">
      <Logo />
      <span className="hidden md:inline-flex text-[24px] leading-[28.8px uppercase] font-bold">
        Tasty Go
      </span>
    </Link>
  );
};

export default HeaderLogo;
