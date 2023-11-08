import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/Providers";
import Hedear from "./components/Header/Hedear";

const dm_sans =  DM_Sans({subsets: ["latin"], weight: ['400', '500', '600', '700'], display: 'swap',})

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
        <Hedear/>
        <main>
        {children}
        </main>
        </Providers>
      </body>
    </html>
  );
}
