import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import Register from './pages/Register';
import Results from './pages/Results';
import Elections from './pages/Elections';
import Candidates from './pages/Candidates';
import ElectionDetails from './pages/ElectionDetails';
import Congrats from './pages/Congrats';
import Login from './pages/Login';
import Logout from './pages/Logout';
import AdminLayout from './pages/Admin/AdminLayout';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminElections from './pages/Admin/AdminElections';
import AdminCandidates from './pages/Admin/AdminCandidates';
import AdminVotes from './pages/Admin/AdminVotes';
import HomePage from './pages/HomePage'; // Nouvelle page d'accueil avec sidebar

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // Page d'accueil avec présentation et sidebar
      { index: true, element: <HomePage /> },
      
      // Pages d'authentification
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      
      // Routes principales
      { path: 'results', element: <Results /> },
      { path: 'congrats', element: <Congrats /> },
      { path: 'logout', element: <Logout /> },
      
      // Section Élections
      {
        path: 'election', // Changé de 'election' à 'elections' pour plus de clarté
        children: [
          { index: true, element: <Elections /> },
          { path: ':id', element: <ElectionDetails /> },
          { path: ':id/candidates', element: <Candidates /> }
        ]
      },

      // Section Admin
      {
        path: 'admin',
        element: <AdminLayout />,
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: 'votes', element: <AdminVotes /> },
          { path: 'elections', element: <AdminElections /> },
          { path: 'candidates', element: <AdminCandidates /> }
        ]
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;