import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import MovieCard from './components/movieCard'
function App() {
  const movieNumber = 1

  return (
    <>
      {movieNumber === 1 ? ( // conditional rendering
        <MovieCard
          movie={
            //denoting a variable
            {
              // object
              title: 'Hello World',
              release_date: '2025',
              url: '',
            }
          }
        />
      ) : (
        <MovieCard
          movie={
            //denoting a variable
            {
              // object
              title: 'World',
              release_date: '2024',
              url: '',
            }
          }
        />
      )}
    </>
  )
}

export default App
