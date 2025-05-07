import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userData.password !== userData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }

    const payload = {
      fullName: userData.fullName,
      email: userData.email,
      password: userData.password,
      password2: userData.confirmPassword,
    };

    console.log("📤 Données envoyées :", payload);

    try {
      const res = await axios.post('http://localhost:5000/api/voters/register', payload);
      console.log(" Réponse du serveur :", res.data);

      localStorage.setItem("voterInfo", JSON.stringify(res.data));

      alert("Compte créé et connecté avec succès !");
      navigate('/election');
    } catch (error) {
      console.error("❌ Erreur complète :", error);
      console.error("❌ Message :", error.response?.data?.message || error.message);
      alert("Erreur lors de l'inscription !");
    }
  };

  return (
    <section className="register-page">
      <div className="register-form-container">
        <h2>Créer un compte</h2>

        <form className="register-form" onSubmit={handleSubmit}>
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

          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>

        <p className="nav-link">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </section>
  );
}
