import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError(''); // reset any previous error
      const response = await axios.post('/api/voters/Login', userData);

      // Récupère le token et l’objet user depuis la réponse
      const { token, user } = response.data;

      // Stocke le token et les infos utilisateur dans le localStorage
      localStorage.setItem('userToken', token);
      localStorage.setItem('voterInfo', JSON.stringify(user));

      // Redirection vers la page des élections
  
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      navigate('/election');
    } catch (err) {
      console.error('Erreur lors de la connexion :', err);
      // Affiche le message d'erreur renvoyé par le backend si présent
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError('Connexion échouée. Veuillez vérifier vos informations.');
      }
    }
  };

  return (
    <section className="login-page">
      <div className="login-form-container">
        <h2>Bienvenue à nouveau</h2>

        {error && (
          <p style={{ color: 'red', marginBottom: '1rem' }}>
            {error}
          </p>
        )}

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Adresse Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Entrez votre email"
              value={userData.email}
              onChange={handleChange}
              required
              autoFocus
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Entrez votre mot de passe"
              value={userData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Se connecter
          </button>
        </form>

        <p className="nav-link" style={{ marginTop: '1rem' }}>
          Pas encore de compte ? <Link to="/register">Créer un compte</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
