import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [userData, setUserData] = React.useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', userData);

    // Simuler une connexion réussie
    localStorage.setItem('userToken', 'fake-token');
    navigate('/elections');
  };

  return (
    <section className="login-page">
      <div className="login-form-container">
        <h2>Bienvenue à nouveau</h2>
        
        <form className="login-form" onSubmit={handleSubmit}>
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
              autoFocus
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={userData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="submit-btn">
            Sign In
          </button>
        </form>
        
        <p className="nav-link">
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
