import Home from './pages/Home'
import Favorite from './pages/Favorites'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-950 text-neutral-100">
      <NavBar />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* When we go to slash, the element we want to display is home */}
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
