import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import NotFound from './components/NotFound.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />} >
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
