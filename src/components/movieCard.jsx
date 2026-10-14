function MovieCard({ movie }) {
  //{} property
  function onFavoriteClick() {
    alert('Clicked')
  }

  return (
    <div className="group overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 hover:ring-rose-500/40">
      <div className="relative aspect-2/3 overflow-hidden bg-neutral-800">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-neutral-800 to-neutral-900 text-5xl font-bold text-neutral-600">
            {movie.title.charAt(0)}
          </div>
        )}

        <div className="absolute inset-0 flex items-start justify-end bg-linear-to-b from-black/60 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-focus-within:opacity-100 group-hover:opacity-100">
          <button
            onClick={onFavoriteClick}
            aria-label="Add to favorites"
            className="flex size-10 items-center justify-center rounded-full bg-black/50 text-lg text-white backdrop-blur-sm transition hover:scale-110 hover:bg-rose-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400"
          >
            ♥
          </button>
        </div>
      </div>

      <div className="space-y-1 p-4">
        <h3 className="truncate text-base leading-snug font-semibold text-white">
          {movie.title}
        </h3>
        <p className="text-sm text-neutral-400">
          {movie.release_date?.split('-')[0]}
        </p>
      </div>
    </div>
  )
}

export default MovieCard
