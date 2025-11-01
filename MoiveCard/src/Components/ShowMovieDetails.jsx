import MovieCard from "./MovieCard"

const ShowMovieDetails = () => {
  const moivesList = [
    {
      title: "Inception",
      rating: 8.8,
      poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
    },
    {
      title: "Joker",
      rating: 7.8,
      poster: "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg"
    },
    {
      title: "Interstellar",
      rating: 8.6,
      poster: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg://link-to-interstellar-poster.jpg"
    },
    {
      title: "Dark knight",
      rating: 8.9,
      poster: "https://rukminim2.flixcart.com/image/480/480/k8xduvk0/poster/j/m/z/medium-the-dark-knight-poster-decorative-wall-poster-wall-d-cor-original-imafqu8euacqngyh.jpeg?q=90"
    },
    {
      title: "The Revenant",
      rating: 8,
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkdee7gA_U9lLfFV9DYkp-URexEPFmMyZWYywMz36rTp3iXmBXASlmHBjdVAlJG1hJB16A&s=10"
    }, {
      title: "Avengers EndGame",
      rating: 8.5,
      poster: "https://m.media-amazon.com/images/I/91kti+UIxmL._AC_UF1000,1000_QL80_.jpg"
    }, {
      title: "Avatar",
      rating: 7.8,
      poster: "https://pad.mymovies.it/filmclub/2008/03/090/locandinapg13.jpg"
    }
  ]
  return (
    <>
      <div className="">
        <h2 className='heading  text-center mb-4 d-flex flex-wrap justify-content-center gap-4' style={{fontWeight: "700", color: "#fff", fontFamily: "sans-serif", marginTop: "50px"}}>Movie List</h2>
        <div className='d-flex flex-wrap justify-content-center gap-4'>
          {moivesList.map((movies, index) => (
            <MovieCard
              key={index}
              title={movies.title}
              rating={movies.rating}
              poster={movies.poster}

            />
          ))}
        </div>
      </div>

    </>
  )
}

export default ShowMovieDetails