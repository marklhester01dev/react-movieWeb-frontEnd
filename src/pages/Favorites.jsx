import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/movieCard'

function Favorite() {
  const { favorites } = useMovieContext()

  if (favorites) {
    return (
      <div className="favorites">
        <h2> Your Favorites</h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 xl:grid-cols-5">
          {favorites.map(
            (movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ),
            //react needs to know which components to update based on the interactions that happen with the webpage
          )}
        </div>
      </div>
    )
  }
  return (
    <div className="mx-auto mt-10 flex max-w-xl flex-col items-center rounded-3xl border border-dashed border-white/15 bg-neutral-900/50 px-6 py-16 text-center sm:px-10">
      <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-rose-500/10 text-3xl text-rose-500">
        ♥
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-white">
        No Favorites Movies Yet
      </h2>
      <p className="mt-3 max-w-sm text-base leading-relaxed text-neutral-400">
        Start adding movies to your favorites and they will appear here
      </p>
    </div>
  )
}

export default Favorite
