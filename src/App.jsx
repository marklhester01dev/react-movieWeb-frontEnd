import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './pages/Home'
import Favorite from './pages/Favorites'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* When we go to slash, the element we want to display is home */}
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </>
  )
}

export default App
