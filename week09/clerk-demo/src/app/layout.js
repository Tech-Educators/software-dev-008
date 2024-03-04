import { ClerkProvider } from "@clerk/nextjs";
import { Vast_Shadow } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const shadow = Vast_Shadow({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Ghibli Collection",
  description: "My favourite Ghibli films",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={shadow.className}>
          <Nav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
