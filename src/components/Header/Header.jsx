import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.authSlice.status);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  // Handle navigation and automatically close the menu.
  const handleNavigation = (slug) => {
    navigate(slug);
    setMenuOpen(false);
  };

  return (
    <header
      className="my-3 mx-4 rounded-3xl shadow-xl bg-gradient-to-r from-blue-500 to-indigo-500"
      style={{ backgroundColor: "#7F8CAA" }}
    >
      <Container>
        <nav className="flex flex-wrap items-center justify-between p-4">
          {/* Logo Section */}
          <div className="flex justify-between w-full sm:w-auto">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <Logo />
            </Link>
            {/* Hamburger (or close) button for small screens */}
            <button
              className="sm:hidden text-2xl p-2 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Navigation Items */}
          <div
            className={`w-full sm:flex sm:items-center sm:w-auto transition-all duration-300 ease-in-out ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col sm:flex-row mt-4 sm:mt-0 sm:ml-auto">
              {navItems.map(
                (item) =>
                  item.active && (
                    <li key={item.name} className="mb-2 sm:mb-0 sm:ml-4">
                      <button
                        onClick={() => handleNavigation(item.slug)}
                        className="inline-block px-6 py-2 transition-colors duration-200 hover:bg-blue-400 rounded-full text-white font-medium"
                      >
                        {item.name}
                      </button>
                    </li>
                  )
              )}
              {authStatus && (
                <li className="mt-2 sm:mt-0 sm:ml-4">
                  <LogoutBtn onClick={() => setMenuOpen(false)} />
                </li>
              )}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
