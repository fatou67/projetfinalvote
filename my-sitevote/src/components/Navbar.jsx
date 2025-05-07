import React, { useEffect, useState, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { IoIosMoon } from 'react-icons/io';
import { IoMdSunny } from 'react-icons/io';
import { HiBars3 } from 'react-icons/hi2';
import { AiOutlineClose } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [darkTheme, setDarkTheme] = useState(localStorage.getItem('voting-app-theme') || '');
  const [showUserMenu, setShowUserMenu] = useState(false);

  const userMenuRef = useRef(null); 

  const closeNavMenu = () => {
    setShowNav(false);
  };

  const changeThemeHandler = () => {
    const newTheme = darkTheme === 'dark' ? '' : 'dark';
    localStorage.setItem('voting-app-theme', newTheme);
    setDarkTheme(newTheme);
  };

  useEffect(() => {
    if (darkTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkTheme]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowNav(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 👇 Fermer le menu utilisateur si clic en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="nav">
      <div className="nav_container">
        <Link to="/" className="nav_logo">Senvote</Link>

        <div className={`nav_menu ${showNav ? 'show' : ''}`}>  
          <NavLink to="election" onClick={closeNavMenu}>Elections</NavLink> 
          <NavLink to="results" onClick={closeNavMenu}>Results</NavLink> 
        </div>

        <div className="nav_buttons">
          <button className="theme_toggle-btn" onClick={changeThemeHandler}>
            {darkTheme === 'dark' ? <IoMdSunny /> : <IoIosMoon />}
          </button>

          <button className="nav_toggle-btn" onClick={() => setShowNav(!showNav)}>
            {showNav ? <AiOutlineClose /> : <HiBars3 />}
          </button>

          <div className="user_menu-wrapper" ref={userMenuRef}>
            <button
              className="user_icon"
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <FaUserCircle size={24} />
            </button>

            {showUserMenu && (
              <div className="user_dropdown">
                <Link to="/profile" onClick={() => setShowUserMenu(false)}>Mon Profil</Link>
                <Link to="/settings" onClick={() => setShowUserMenu(false)}>Paramètres</Link>
                <Link to="/logout" onClick={() => setShowUserMenu(false)}>Déconnexion</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
