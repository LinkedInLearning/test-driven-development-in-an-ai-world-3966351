import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom'

function HeaderBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef();

  // Fetch destinations from API and filter based on query
  const fetchDestinations = async (searchTerm) => {
    try {
      const res = await fetch("/destinations.json");
      const data = await res.json();
      const trimmed = searchTerm.trim().toLowerCase();
      if (!trimmed) {
        setResults(data);
        setShowDropdown(true);
        return;
      }
      const filtered = data.filter(
        (d) =>
          d.city.toLowerCase().includes(trimmed) ||
          d.country.toLowerCase().includes(trimmed)
      );
      setResults(filtered);
      setShowDropdown(true);
    } catch (e) {
      setResults([]);
      setShowDropdown(false);
    }
  };

  // Handle search on Enter or button click
  const handleSearch = (e) => {
    if (
      (e.type === "keydown" && e.key === "Enter") ||
      e.type === "click"
    ) {
      fetchDestinations(query);
    }
  };

  // Hide dropdown when input loses focus
  const handleBlur = () => {
    setTimeout(() => setShowDropdown(false), 150);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <div className="container">
        <a className="navbar-brand text-white" href="/">
          Odyssey AI Travels
        </a>
        <div className="navbar-nav">
          <a className="nav-a text-white text-decoration-none px-2" href="/">
            Home
          </a>
          <a className="nav-a text-white text-decoration-none px-2" href="/about">
            About
          </a>
          <a className="nav-a text-white text-decoration-none px-2" href="/contact">
            Contact
          </a>
        </div>
        {/* Search bar aligned right */}
        <form
          className="d-flex ms-auto position-relative"
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            fetchDestinations(query);
          }}
        >
          <input
            ref={inputRef}
            className="form-control me-2 bg-white text-dark"
            type="search"
            placeholder="Search..."
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
            onFocus={() => {
              if (results.length) setShowDropdown(true);
            }}
            onBlur={handleBlur}
            style={{ minWidth: 180 }}
          />
          <button
            className="btn btn-outline-light"
            type="button"
            onClick={handleSearch}
            aria-label="search"
            style={{ backgroundColor: "#fff", color: "#198754" }}
          >
            Search
          </button>
          {/* Dropdown results */}
          {showDropdown && results.length > 0 && (
            <ul
              className="dropdown-menu show position-absolute w-100"
              data-testid="search-dropdown"
              style={{ zIndex: 1000 }}
            >
              {results.map((d) => (
                <li key={d.id}>
                  <span className="dropdown-item">
                    {d.city}, {d.country}
                  </span>
                </li>
              ))}
            </ul>
          )}
          {showDropdown && results.length === 0 && (
            <ul
              className="dropdown-menu show position-absolute w-100"
              data-testid="search-dropdown"
              style={{ zIndex: 1000 }}
            >
              <li>
                <span className="dropdown-item text-muted">No results found</span>
              </li>
            </ul>
          )}
        </form>
      </div>
    </nav>
  );
}

export default HeaderBar;