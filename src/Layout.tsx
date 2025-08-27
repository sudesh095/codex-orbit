import { Link, Outlet } from 'react-router-dom'
import './styles.css'

export default function Layout() {
  return (
    <>
      <header className="navbar">
        <div className="logo">Codex Orbit</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blogs/xml-to-compose">Blogs</Link>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Codex Orbit. Building Apps, Growing Futures.</p>
      </footer>
    </>
  )
}
