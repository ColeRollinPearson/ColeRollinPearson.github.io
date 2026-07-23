import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1 className="app-title">💪 Workout Tracker</h1>
        <nav className="app-nav">
          <Link to="/" className="nav-link">Dashboard</Link>
          <Link to="/log" className="nav-link">Log Exercise</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
