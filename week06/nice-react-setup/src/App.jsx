
// component being a function that returns JSX (this fake html stuff)

import MovieCard from "./MovieCard";


export default function App() {

  const varDirector = 'an older some guy'
  return (
     <div>
      <h2>Movie DB! The better, faster, stronger version of our express app!</h2>
      {/* name of the movie */}
      {/* year */}
      {/* director */}
      {/* image link */}
      <MovieCard movieName='Movie1' year='2000' director='some guy' imgLink='someImgLink'/>
      <MovieCard movieName='This is another moive' year='1293' director={varDirector} imgLink="a diff img link"/>
     </div>
  )
}

