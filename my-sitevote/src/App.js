import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts et pages
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import HelpPage from './pages/HelpPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Login from './pages/Login';
import Register from './pages/Register';
import Results from './pages/Results';
import Elections from './pages/Elections';
import ElectionDetails from './pages/ElectionDetails';
import Candidates from './pages/Candidates';
import Congrats from './pages/Congrats';
import Logout from './pages/Logout';

// Admin
import AdminLayout from './pages/Admin/AdminLayout';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminElections from './pages/Admin/AdminElections';
import AdminCandidates from './pages/Admin/AdminCandidates';
import AdminVotes from './pages/Admin/AdminVotes';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Regroupe toutes les routes dans RootLayout */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="help" element={<HelpPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="results" element={<Results />} />
          <Route path="congrats" element={<Congrats />} />
          <Route path="logout" element={<Logout />} />

          <Route path="election" element={<Elections />} />
          <Route path="election/:id" element={<ElectionDetails />} />
          <Route path="election/:id/candidates" element={<Candidates />} />

          {/* Routes Admin imbriquées */}
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="votes" element={<AdminVotes />} />
            <Route path="elections" element={<AdminElections />} />
            <Route path="candidates" element={<AdminCandidates />} />
          </Route>
        </Route>

        {/* Fallback 404 */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
