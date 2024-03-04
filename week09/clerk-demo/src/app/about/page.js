import Image from "next/image";
import styles from "@/app/about/about.module.css";

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col m-20 p-5">
        <h1 className={styles.h1About}>Studio Ghibli</h1>
        <p className={styles.pAbout}>
          Studio Ghibli, Inc. (Japanese: 株式会社スタジオジブリ, Hepburn:
          Kabushiki-gaisha Sutajio Jiburi)is a Japanese animation studio based
          in Koganei, Tokyo. It has a strong presence in the animation industry
          and has expanded its portfolio to include various media formats, such
          as short subjects, television commercials, and two television films.
          Their work has been well-received by audiences and recognized with
          numerous awards. Their mascot and most recognizable symbol, the
          character Totoro from the 1988 film My Neighbor Totoro, is a giant
          spirit inspired by raccoon dogs (tanuki) and cats (neko). Among the
          studio&apos;s highest-grossing films are Princess Mononoke (1997),
          Spirited Away (2001), Howl&apos;s Moving Castle (2004), and Ponyo
          (2008). Studio Ghibli was founded on June 15, 1985, by the directors
          Hayao Miyazaki and Isao Takahata and producer Toshio Suzuki, after
          acquiring Topcraft&apos;s assets. The studio has also collaborated
          with video game studios on the visual development of several games.
        </p>
        <p className="text-right">
          <i>Source: https://en.wikipedia.org/wiki/Studio_Ghibli</i>{" "}
        </p>
      </div>
      <div className={styles.divAbout}>
        <Image
          src={"/miyazaki.jpeg"}
          alt="Hayao Miyazaki"
          width={400}
          height={200}
          className="border-double border-4 border-lime-400"
        />
        <p className="text-sm m-1">Hayao Miyazaki</p>
      </div>
    </>
  );
}
