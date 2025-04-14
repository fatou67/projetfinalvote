import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { IoIosMoon } from 'react-icons/io';
import { IoMdSunny } from 'react-icons/io';
import { HiBars3 } from 'react-icons/hi2';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [darkTheme, setDarkTheme] = useState(localStorage.getItem('voting-app-theme') || '');

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

  // Fermer le menu si la fenêtre est redimensionnée au-dessus de 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowNav(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="nav">
      <div className="nav_container">
        <Link to="/" className="nav_logo">Senvote</Link>

        <div className={`nav_menu ${showNav ? 'show' : ''}`}>  
          <NavLink to="election" onClick={closeNavMenu}>Elections</NavLink> 
          <NavLink to="results" onClick={closeNavMenu}>Results</NavLink> 
          <NavLink to="logout" onClick={closeNavMenu}>Logout</NavLink> 
        </div>

        <div className="nav_buttons">
          <button className="theme_toggle-btn" onClick={changeThemeHandler}>
            {darkTheme === 'dark' ? <IoMdSunny /> : <IoIosMoon />}
          </button>

          <button className="nav_toggle-btn" onClick={() => setShowNav(!showNav)}>
            {showNav ? <AiOutlineClose /> : <HiBars3 />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;