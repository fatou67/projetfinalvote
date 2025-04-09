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

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Login /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'results', element: <Results /> },
      { path: 'congrats', element: <Congrats /> },
      { path: 'logout', element: <Logout /> },
      
      // Routes pour les élections - version cohérente sans 's'
      {
        path: 'election',
        children: [
          { index: true, element: <Elections /> }, // /election
          { path: ':id', element: <ElectionDetails /> }, // /election/:id
          { path: ':id/candidates', element: <Candidates /> } // /election/:id/candidates
        ]
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;