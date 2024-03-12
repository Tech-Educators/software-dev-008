import { Italiana } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const italiana = Italiana({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Portrait Gallery",
  description: "Look into the eyes of centruy-old people.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={italiana.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
