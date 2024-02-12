
// component being a function that returns JSX (this fake html stuff)

import MovieCard from "./MovieCard";


export default function App() {
  return (
     <div>
      <h2>Movie DB! The better, faster, stronger version of our express app!</h2>
      {/* name of the movie */}
      {/* year */}
      {/* director */}
      {/* image link */}
      <MovieCard />
      <MovieCard />
     </div>
  )
}
