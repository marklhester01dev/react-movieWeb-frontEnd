const API_KEY = '24e18a8bcf01cab4a920c0021bba9d9a'
const BASE_URL = 'https://api.themoviedb.org/3'

// api.js: throw instead of alerting, Home's catch handle it
const getPopularMovies = async () => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return (await res.json()).results
}

const searchMovies = async (searchQuery) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchQuery)}`,
  )
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return (await res.json()).results
}

export { getPopularMovies, searchMovies }
