import ArtCard from "@/components/ArtCard";
// import { artList } from "@/lib/api";
export default async function Home() {
  //fetch data from this url

  const data = await fetch(
    `https://www.rijksmuseum.nl/api/en/collection?key=${process.env.API_KEY}&q=portrait`
  );
  // get a response with the data in json format
  const response = await data.json();
  //data wrangling
  const artObjects = response.artObjects;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {artObjects.map((piece) => (
          <ArtCard
            key={piece.id}
            title={piece.title}
            author={piece.principalOrFirstMaker}
            url={piece.webImage?.url}
          />
        ))}
      </div>
    </main>
  );
}
