import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router/dom";
import { router } from './Routers/Routers.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import UserProvider from './contexts/UserProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </UserProvider>
  </StrictMode>,
)
