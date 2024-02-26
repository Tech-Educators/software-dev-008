import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>

      <h1>Sam&apos;s next next app!?</h1>
      <p>I want to show some other stuff! This is a great home page, but we can always do more..</p>
      <Link href='/cats-vs-dogs'>Read the thrilling history..</Link>
    </main>
  );
}
