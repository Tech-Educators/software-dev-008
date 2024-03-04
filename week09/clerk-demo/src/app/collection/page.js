"use client";
import data from "@/lib/data.json";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/app/collection/collection.module.css";

export default function CollectionPage() {
  return (
    <div className="flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="p-20 text-5xl"
      >
        My private collection
      </motion.h1>
      {data.map((film) => (
        <div key={film.id} className={styles.divCollection}>
          <h2 className=" text-xl p-2">{`${film.title} (${film.release_date})`}</h2>
          <h3 className="p-2">{film.director}</h3>
          <p className=" ml-52 mr-52 p-2">{film.description}</p>
          <Image
            src={film.poster}
            alt="Hayao Miyazaki"
            width={400}
            height={200}
            className="border-double border-4 border-lime-400 m-2"
          />
        </div>
      ))}
    </div>
  );
}
