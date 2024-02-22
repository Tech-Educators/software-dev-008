import Header from "./components/Header";
import Footer from "./components/Footer";
import ArtCard from "./components/ArtCard";
import { artList } from "./lib/api";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />

      <div>
        {artList.map((piece) => (
          <ArtCard
            key={piece.id}
            title={piece.title}
            author={piece.author}
            url={piece.url}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}
