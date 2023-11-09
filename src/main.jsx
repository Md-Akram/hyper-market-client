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
import AddJob from './pages/AddJob.jsx';
import MyPostedJobs from './pages/MyPostedJobs.jsx';
import Update from './components/Update.jsx';
import BidRequests from './pages/BidRequests.jsx';
import PrivateRoute from './hooks/PrivateRoute.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />} >
        <Route index element={<Home />} />
        <Route path='jobs/:id' element={<PrivateRoute><JobDetails /></PrivateRoute>} />
        <Route path='myPostedJobs/update/:id' element={<Update />} />
        <Route path='addJob' element={<PrivateRoute><AddJob /></PrivateRoute>} />
        <Route path='myBids' element={<PrivateRoute><MyBids /></PrivateRoute>} />
        <Route path='myPostedJobs' element={<PrivateRoute><MyPostedJobs /></PrivateRoute>} />
        <Route path='bidRequests' element={<PrivateRoute><BidRequests /></PrivateRoute>} />

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
