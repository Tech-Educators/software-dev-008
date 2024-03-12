"use client";
import styles from "./ArtCard.module.css";
import "@/app/globals.css";
import Image from "next/image";
import { useState } from "react";

export default function ArtCard({ title, author, url }) {
  const [showInfo, setShowInfo] = useState(false);
  const handleClick = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div className={styles.art_card}>
      <Image
        src={url}
        alt={`Picture of ${title}`}
        width={300}
        height={150}
        onClick={handleClick}
        className={styles.art_card_image}
      />

      {showInfo ? <h1>{title}</h1> : null}
      {showInfo ? <h2>{author}</h2> : null}
    </div>
  );
}
