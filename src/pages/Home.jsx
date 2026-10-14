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
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for Movies..."
          className="search-input"
          value={searchQuery} //then this update (state)
          onChange={(event) => setSearchQuery(event.target.value)} //takes the present value of the state or input, called for every change
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
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
