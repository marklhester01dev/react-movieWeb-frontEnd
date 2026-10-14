import MovieCard from '../components/movieCard'
import { useState } from 'react'
//hook (state change)

function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  //state       //function
  //the state changes when we call the function
  const movies = [
    { id: 1, title: 'John Wick', release_date: '2020' },
    { id: 2, title: 'Your Name', release_date: '2017' },
    { id: 3, title: 'Suzume no Tojimari', release_date: '2024' },
  ]

  const handleSearch = (event) => {
    event.preventDefault()
    alert(searchQuery)
    //when we change the state the component re-renders itself to update
  }

  return (
    <div className="space-y-10">
      <form
        onSubmit={handleSearch}
        className="mx-auto flex w-full max-w-2xl flex-col gap-3 sm:flex-row"
      >
        <input
          type="text"
          placeholder="Search for Movies..."
          className="h-12 flex-1 rounded-xl border border-white/10 bg-neutral-900 px-4 text-base text-white placeholder:text-neutral-500 transition focus:border-rose-500 focus:ring-4 focus:ring-rose-500/20 focus:outline-none"
          value={searchQuery} //then this update (state)
          onChange={(event) => setSearchQuery(event.target.value)} //takes the present value of the state or input, called for every change
        />
        <button
          type="submit"
          className="h-12 rounded-xl bg-rose-500 px-6 text-sm font-semibold text-white transition hover:bg-rose-400 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400"
        >
          Search
        </button>
      </form>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 xl:grid-cols-5">
        {movies.map(
          (movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ),
          //react needs to know which components to update based on the interactions that happen with the webpage
        )}
      </div>
    </div>
  )
}

export default Home
