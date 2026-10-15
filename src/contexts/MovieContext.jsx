// provide some global state and helper function that we can use for multiple places within the application

import { createContext, useState, useContext, useEffect } from 'react'

const MovieContext = createContext()

const useMovieContext = () => useContext(MovieContext)

const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    try {
      const storedFavs = localStorage.getItem('favorites')

      if (storedFavs) {
        setFavorites(JSON.parse(storedFavs))
      }
    } catch (error) {
      console.error('Failed to load favorites:', error)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }
  }, [favorites, isLoaded])
  // runs when the favorites array changes
  //anytime the favorite state changes, we'll update what we're storing
  //children will have access to everything here
  //logic related to our favorite movies

  //stores all favorite movies in a list
  // the list will be converted first into a JSON object

  //operations: 1 to add , 1 to remove, 1 to check (favorites)
  const addToFavorites = (movie) => {
    setFavorites((prev) => {
      if (prev.some((fav) => fav.id === movie.id)) {
        return prev
      }

      return [...prev, movie]
    })
  }

  const removeToFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId))
  }

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId)
  }

  const value = {
    favorites,
    addToFavorites,
    removeToFavorites,
    isFavorite,
  }

  // makes the passed value to be available or accessible to the children
  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  // see app.jsx for the children
}

//reserved prop when you write a component (children) | anything that is inside of the component that you rendered
// any of the components in our app can access this state
// provide state to any of the components that are wrapped around it
// allows to hook into a function or specific state when they need to use it

// ? see... main.jsx for the example

export { useMovieContext, MovieProvider }
