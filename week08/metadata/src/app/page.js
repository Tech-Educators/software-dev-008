import Image from "next/image";

export default function Home() {
  let bubbles = `( ˘ ³˘)ノ°ﾟº❍｡`
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{bubbles}</p>
      <p>{bubbles.split('').reverse()}</p>
    </main>
  );
}
