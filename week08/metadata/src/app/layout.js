import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"]});

export const metadata = {
  title: "Sams Blog",
  description: "thisisreallyfun",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <nav>
          <ul>
            <Link href={`/posts`}>
              <li>Posts</li>
            </Link>
            <Link href={`/`}>
              <li>Home</li>
            </Link>
          </ul>
        </nav>
        {children}
        </body>
    </html>
  );
}
