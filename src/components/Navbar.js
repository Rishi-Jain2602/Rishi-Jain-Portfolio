import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Add shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close navbar on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const isActive = (path) => location.pathname === path ? 'nav-link active' : 'nav-link'
  const handleLinkClick = () => setIsOpen(false)

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark${scrolled ? ' scrolled' : ''}`}>
      <div className="container-fluid">

        {/* Brand */}
        <Link className="navbar-brand" to="/" onClick={handleLinkClick}>Rishi Jain</Link>

        {/* Mobile toggler — controlled by React state, no Bootstrap JS needed */}
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(prev => !prev)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Links — show class toggled by React */}
        <div className={`collapse navbar-collapse${isOpen ? ' show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={isActive('/education')} to="/education" onClick={handleLinkClick}>Education</Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/work')} to="/work" onClick={handleLinkClick}>Work Experience</Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/projects')} to="/projects" onClick={handleLinkClick}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/contact')} to="/contact" onClick={handleLinkClick}>Contact</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}