import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "../components/Providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProviderWrapp } from "../redux/provider";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Tasty-Go",
  description:
    "Tasty-Go - це мысце? де ви можете замовити найсмачнышу їду до себе додому.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <Providers>
          <ProviderWrapp>
            {children}
            <div id="root-modal"></div>
            <ToastContainer />
          </ProviderWrapp>
        </Providers>
      </body>
    </html>
  );
}
