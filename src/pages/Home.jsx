import MovieCard from '../components/movieCard'
import { getPopularMovies, searchMovies } from '../services/api'
import { useState, useEffect } from 'react'
//hook (state change)

function Home() {
  const [searchQuery, setSearchQuery] = useState('') //the first state of the useState is the initializer function
  //initial state       //set function //the state changes on the next render

  //if the new value is identical to the present state, React will skip re-rendering the component and its children
  // React updates the screen after all the event handlers have run
  const [movies, setMovies] = useState([]) //gets the movies, initialize movies to [] (initializer)
  const [error, setError] = useState(null) //sets the error
  const [loading, setLoading] = useState(true) //indicates that the movies are loading

  // Use State can only be declared at the top level of the component

  //state is read only, replace instead of mutate (objects and arrays)
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies()
        setMovies(popularMovies)
      } catch (err) {
        console.log(err)
        setError('Failed to load movies...')
      } finally {
        setLoading(false) //next state
      }
    }

    loadPopularMovies()
  }, [])
  // call the function when the dependency array changes (after every single re-render), no changes === one time render

  const handleSearch = async (event) => {
    event.preventDefault()
    if (!searchQuery.trim()) return
    if (loading) return

    setLoading(true)
    // Currently loading results
    try {
      const searchResults = await searchMovies(searchQuery)
      setMovies(searchResults)
      setError(null) //then we clear it here
    } catch (err) {
      console.log(err)
      setError('Failed to search movies...') //if we did an error before
    } finally {
      setLoading(false)
    }

    setSearchQuery('') // restarts the input value to an empty string after clicking search
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
          className="h-12 flex-1 rounded-xl border border-white/10 bg-neutral-900 px-4 text-base text-white transition placeholder:text-neutral-500 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/20 focus:outline-none"
          value={searchQuery} //then this update (state)
          onChange={(event) => setSearchQuery(event.target.value)} //takes the present value of the state or input, called for every change
        />
        <button
          type="submit"
          className="h-12 rounded-xl bg-rose-500 px-6 text-sm font-semibold text-white transition hover:bg-rose-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400 active:scale-95"
        >
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}
      {/* if there is an error it will appear */}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 xl:grid-cols-5">
          {movies.map(
            (movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ),
            //react needs to know which components to update based on the interactions that happen with the webpage
          )}
        </div>
      )}
    </div>
  )
}

export default Home
