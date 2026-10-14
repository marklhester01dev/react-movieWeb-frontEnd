import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* gives the ability to change what components we're rendering on screen based on the slash route, more of like the window.location.href in JS */}
  </StrictMode>,
)
