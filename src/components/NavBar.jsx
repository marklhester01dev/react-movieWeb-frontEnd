import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="rounded-lg text-xl font-bold tracking-tight text-white transition-colors hover:text-rose-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-500"
        >
          Movie<span className="text-rose-500"> App</span>
        </Link>

        <div className="flex items-center gap-1">
          <Link
            to="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-rose-500"
          >
            Home
          </Link>
          <Link
            to="/favorites"
            className="rounded-lg px-4 py-2 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-rose-500"
          >
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
