import Image from "next/image";
import Link from "next/link";
export default function Home() {
  
  type gamesType = {
    name: string,
    release: number,
    rating: number,
    studio: string,
    img_url?: string,
    slug: string
  }
  const games: gamesType[] = [
    {
      name: "The Elder Scrolls III: Morrowind",
      release: 2002,
      rating: 9.2, // Random rating
      studio: "Bethesda Game Studios",
      img_url: "",
      slug: "the-elder-scrolls-iii-morrowind",
    },
    {
      name: "Counter-Strike",
      release: 2000,
      rating: 9.0, // Random rating
      studio: "Valve Corporation",
      img_url: "",
      slug: "counter-strike",
    },
    {
      name: "Cyberpunk 2077",
      release: 2020,
      rating: 8.0, // Random rating
      studio: "CD Projekt Red",
      img_url: "",
      slug: "cyberpunk-2077",
    },
    {
      name: "Dark Souls",
      release: 2011,
      rating: 9.3, // Random rating
      studio: "FromSoftware",
      img_url: "",
      slug: "dark-souls",
    },
    {
      name: "Halo: Combat Evolved",
      release: 2001,
      rating: 8.9, // Random rating
      studio: "Bungie",
      img_url: "",
      slug: "halo-combat-evolved",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {games.map(game => (
        <div>
          <h3>{game.name}</h3>
          <p>{game.studio}</p>
          <Link href={`${game.slug}`}>Read more</Link>
        </div>
      ))}
    </main>
  );
}
