import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { IoIosMoon } from 'react-icons/io';
import { IoMdSunny } from 'react-icons/io';
import { HiBars3 } from 'react-icons/hi2';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [darkTheme, setDarkTheme] = useState(localStorage.getItem('voting-app-theme') || '');

  // Fonction pour fermer le menu sur mobile après un clic sur un lien
  const closeNavMenu = () => {
    if (window.innerWidth < 768) { 
      setShowNav(false);
    }
  };

  // Fonction pour basculer entre le mode clair et sombre
  const changeThemeHandler = () => {
    const newTheme = darkTheme === 'dark' ? '' : 'dark';
    localStorage.setItem('voting-app-theme', newTheme);
    setDarkTheme(newTheme);
  };

  // Appliquer le mode sombre si activé
  useEffect(() => {
    if (darkTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkTheme]);

  return (
    <nav className="nav">
      <div className="nav_container">
        <Link to="/" className="nav_logo">Senvote</Link>

        {/* Menu de navigation */}
        <div className={`nav_menu ${showNav ? 'show' : ''}`}>  
          <NavLink to="election" onClick={closeNavMenu}>Elections</NavLink> {/* ✅ Correction */}
          <NavLink to="results" onClick={closeNavMenu}>Results</NavLink> {/* ✅ Correction */}
          <NavLink to="logout" onClick={closeNavMenu}>Logout</NavLink> {/* ✅ Correction */}
        </div>

        {/* Bouton pour changer le thème */}
        <button className="theme_toggle-btn" onClick={changeThemeHandler}>
          {darkTheme === 'dark' ? <IoMdSunny /> : <IoIosMoon />}
        </button>

        {/* Bouton pour afficher/cacher le menu sur mobile */}
        <button className="nav_toggle-btn" onClick={() => setShowNav(!showNav)}>
          {showNav ? <AiOutlineClose /> : <HiBars3 />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
