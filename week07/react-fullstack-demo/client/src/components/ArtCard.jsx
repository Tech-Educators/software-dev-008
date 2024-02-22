import "./ArtCard.css";
import "../App.css";

import { useState } from "react";

export default function ArtCard({ title, author, url }) {
  const [showInfo, setShowInfo] = useState(false);
  const handleClick = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div className="art-card">
      <img
        src={url}
        alt={`Picture of ${title}`}
        onClick={handleClick}
        className="art-card-image"
      />

      {showInfo ? <h1>{title}</h1> : null}
      {showInfo ? <h2>{author}</h2> : null}
    </div>
  );
}
