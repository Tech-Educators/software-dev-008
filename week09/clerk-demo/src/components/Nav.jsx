import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";
import styles from "@/components/Nav.module.css";

export default function Nav() {
  const { userId } = auth();
  return (
    <nav className={styles.mainNav}>
      <Link href={"/"} className={styles.links}>
        Home
      </Link>
      <br />
      <Link href={"/about"} className={styles.links}>
        About
      </Link>
      <br />
      <Link href={"/collection"} className={styles.links}>
        Collection
      </Link>
      {userId ? <UserButton /> : <SignInButton />}
      {/* {!userId ? <SignInButton /> : <UserButton />} */}
    </nav>
  );
}
