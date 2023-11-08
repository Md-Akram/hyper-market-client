import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import NotFound from './components/NotFound.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AuthProvider from './hooks/AuthProvider.jsx';
import Home from './pages/Home.jsx';
import JobDetails from './pages/JobDetails.jsx';
import MyBids from './pages/MyBids.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />} >
        <Route index element={<Home />} />
        <Route path='jobs/:id' element={<JobDetails />} />
        <Route path='myBids' element={<MyBids />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
)
