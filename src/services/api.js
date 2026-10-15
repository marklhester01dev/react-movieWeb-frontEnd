const API_KEY = '24e18a8bcf01cab4a920c0021bba9d9a'
const BASE_URL = 'https://api.themoviedb.org/3'

const getPopularMovies = async () => {
  try {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)

    checkFetchStatus(res)

    const resData = await res.json()

    if (renderTimeout(res)) {
      renderError()
    }

    //QUESTIONS:
    //problem here, what if slow network and the page still didn't load?
    // what if the data is not there? and it cannot find the search query, what should be displayed in the web?

    return resData.results
  } catch (err) {
    renderError(err)
  }
}

const searchMovies = async (searchQuery) => {
  try {
    const res = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchQuery)}`,
    )

    checkFetchStatus(res)
    const resData = await res.json()

    return resData.results
  } catch (err) {
    renderError(err)
  }
}

const checkFetchStatus = (res) => {
  if (!(res.status >= 200 && res.status < 300)) {
    renderError(res.status)
  }
}
const renderError = (err) => {
  alert(`Failed to load movies. Try again. ${err ? err : ''}`)
}

const renderTimeout = (res) => {
  setTimeout(() => {
    res
  }, 5000)
}

export { getPopularMovies, searchMovies }
