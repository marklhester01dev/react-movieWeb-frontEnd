function Favorite() {
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
