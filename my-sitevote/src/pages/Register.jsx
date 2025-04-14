import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [userData, setUserData] = React.useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation et soumission ici
    console.log('Données du formulaire:', userData);
  };

  return (
    <section className="register-page">
      <div className="register-form-container">
        <h2>Créer un compte</h2>
        
        <form className="register-form" onSubmit={handleSubmit}>
          {/* Message d'erreur */}
          <p className="error-message">Error messages appear here</p>
          
          {/* Champ Nom Complet */}
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={userData.fullName}
              onChange={handleChange}
              required
              autoFocus
            />
          </div>
          
          {/* Champ Email */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={userData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          {/* Champ Mot de passe */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              value={userData.password}
              onChange={handleChange}
              minLength="6"
              required
            />
          </div>
          
          {/* Confirmation Mot de passe */}
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={userData.confirmPassword}
              onChange={handleChange}
              minLength="6"
              required
            />
          </div>
          
          {/* Bouton de soumission */}
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
        
        {/* Lien vers Login */}
        <p className="nav-link">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </section>
  );
}

export default Register;