
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from  './pages/RootLayout';
import Errorpage from  '../pages/Errorpage';
import Register from  './pages/Register';
import Results from  './pages/Results';
import Election from  './pages/Election';
import Candidates from  './pages/Candidates';
import ElectionDetails from  './pages/ElectionDetails';
import Congrats from  './pages/Congrats';
import Login from  './pages/Login';
import Logout from  '../pages/Logout';






const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElements: <Errorpage/>,
    children: [ 
      {
      index: true,
      element: <login/>
       
    },
    {
      path: 'register',
      element: <Register/>
    },
    {
      path: 'results',
      element: <Results/>
    },
    {
      path: 'election',
      element: <Election/>
    },
    {
      path: 'election/:id',
      element: <ElectionDetails/>
    },
    {
      path: 'election/:id/candidates',
      element: <Candidates/>
    },
    {
      path: 'congrats',
      element: <Congrats/>
    },
    {
      path: 'logout',
      element: <Logout/>
    },
    {
      path: 'login',
      element: <Login/>
    },
  ]

  }

])

function App() {
  return (<RouterProvider router={router}/> );
  
}

export default App;
