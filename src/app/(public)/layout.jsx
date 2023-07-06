import HeaderNav from "@/components/Shared/HeaderNav/HeaderNav";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Shared/Header/Header";
import Footer from "@/components/Shared/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dragon News",
  description: "You will get some awesome news",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <HeaderNav/>
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
